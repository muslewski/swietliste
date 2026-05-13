#!/usr/bin/env python3
"""
Parse scraped swietliste.pl HTML pages into structured JSON + Markdown.

Each output entry contains:
  - slug, url, page_template (homepage vs content)
  - title, meta_description, og_image
  - breadcrumbs
  - headings (h1/h2/h3 with hierarchy)
  - blocks (paragraphs, lists, headings — in order)
  - stories (only on gallery pages: list of {name, description, link, images})
  - images, links, forms
"""
import json
import re
import sys
from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Tag

SRC_DIR = Path("/Users/muslewski/Documents/Repozytoria/swietliste-osielsko/content/scraped/raw-html")
OUT_DIR = Path("/Users/muslewski/Documents/Repozytoria/swietliste-osielsko/content/scraped/pages")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Map filename → URL slug + semantic kind
PAGE_MAP = {
    "index.html":               ("/",                                               "homepage"),
    "swietliste.html":          ("/swietliste",                                     "about"),
    "kontakt.html":             ("/kontakt",                                        "contact"),
    "historie.html":            ("/historie",                                       "gallery-index"),
    "sesje-narzeczenskie.html": ("/historie/sesje-narzeczenskie",                   "gallery"),
    "reportaze-slubne.html":    ("/historie/reportaze-slubne",                      "gallery"),
    "sesje-plenerowe.html":     ("/historie/fotografie-slubne-sesje-plenerowe",     "gallery"),
    "fotoksiazka.html":         ("/fotoksiazka-slubna",                             "product"),
    "album-tradycyjny.html":    ("/album-slubny-tradycyjny-z-pergaminem-do-wklejania-zdjec", "product"),
    "prezentacja.html":         ("/prezentacja-slubna-slideshow",                   "product"),
    "retusz.html":              ("/retusz",                                         "service"),
    "bonusy.html":              ("/bonusy",                                         "info"),
    "oferta-bydgoszcz.html":    ("/oferta-cennik-fotografia-slubna-bydgoszcz",      "offer"),
    "oferta-torun.html":        ("/oferta-cennik-fotografia-slubna-torun",          "offer"),
}

# Selectors that appear INSIDE #content but are global template chrome — kill them.
TEMPLATE_CHROME_SELECTORS = [
    "#footer-menu", ".linki", "#copyright", "#category-box",
    "#responsive-menu", "#click-menu", ".contact-info", ".breadcrumbs",
    "#comments", ".skip-content", "script", "style", ".promocja",
]

def text(node):
    if node is None:
        return ""
    return re.sub(r"\s+", " ", node.get_text(separator=" ", strip=True)).strip()

def clean_chrome(root):
    """Mutate root by removing global-template chrome elements."""
    for sel in TEMPLATE_CHROME_SELECTORS:
        for n in root.select(sel):
            n.decompose()

def collect_images(root):
    images, seen = [], set()
    for img in root.find_all("img"):
        src = img.get("src", "").strip()
        if not src or src in seen:
            continue
        if any(skip in src for skip in [
            "wp-emoji", "wp-smiley", "favicon",
            "/themes/photography_pro/images/sterowanie",
            "/themes/photography_pro/images/mobile",
            "swietliste-logo-",
        ]):
            continue
        seen.add(src)
        images.append({
            "src": src,
            "alt": img.get("alt", "").strip(),
            "width": img.get("width"),
            "height": img.get("height"),
            "srcset": img.get("srcset", "").strip() or None,
        })
    return images

def collect_links(root):
    links, seen = [], set()
    for a in root.find_all("a"):
        href = a.get("href", "").strip()
        if not href or href.startswith("#") or href.startswith("javascript:"):
            continue
        label = text(a)
        if not label:
            # try alt of inner image
            img = a.find("img")
            if img:
                label = img.get("alt", "").strip() or "(image link)"
        key = (label.lower(), href)
        if key in seen:
            continue
        seen.add(key)
        links.append({"text": label, "href": href})
    return links

def collect_headings(root):
    out = []
    for lvl in (1, 2, 3, 4):
        for h in root.find_all(f"h{lvl}"):
            t = text(h)
            if t:
                out.append({"level": lvl, "text": t})
    return out

def collect_paragraphs(root):
    blocks = []
    visited = set()
    for el in root.descendants:
        if not isinstance(el, Tag):
            continue
        eid = id(el)
        if eid in visited:
            continue
        if el.name in ("p", "blockquote"):
            t = text(el)
            if t:
                blocks.append({"type": "paragraph", "text": t})
            visited.add(eid)
        elif el.name in ("h1", "h2", "h3", "h4", "h5"):
            t = text(el)
            if t:
                blocks.append({"type": f"h{el.name[1]}", "text": t})
            visited.add(eid)
        elif el.name in ("ul", "ol") and not el.find_parent(["ul", "ol"]):
            items = [text(li) for li in el.find_all("li", recursive=False) if text(li)]
            if items:
                blocks.append({"type": "list", "ordered": el.name == "ol", "items": items})
            visited.add(eid)
    # de-duplicate adjacent identical blocks
    deduped = []
    for b in blocks:
        if deduped and deduped[-1] == b:
            continue
        deduped.append(b)
    return deduped

def extract_stories(root):
    """
    Gallery pages render stories as repeated `<div id="bonusbox">` containers (yes, invalid HTML — same id repeats).
    Each contains:
      <div id="bonusN"><a href="..."><img src="..." alt="..."/></a></div>
      <div id="tbonusN">
        <span style="...">Title text</span><br/>
        Description text<br/>
        <a class="myButton" href="...">Zobacz historię »</a>
      </div>
    """
    stories = []
    for bb in root.find_all("div", id="bonusbox"):
        story = {"name": "", "description": "", "link": None, "image": None}

        # Title — usually first <span> with styled text inside tbonus
        title_span = bb.find("span")
        if title_span:
            story["name"] = text(title_span)

        # Image — first <img> inside the box
        img = bb.find("img")
        if img:
            story["image"] = {
                "src": img.get("src", "").strip(),
                "alt": img.get("alt", "").strip(),
                "title": img.get("title", "").strip(),
            }

        # Description — get all text from the tbonus div minus span and link text
        tbonus = bb.find("div", id=re.compile(r"^tbonus"))
        if tbonus:
            # Clone and strip span + a.myButton
            clone = BeautifulSoup(str(tbonus), "lxml").find("div")
            for s in clone.find_all("span"):
                s.decompose()
            for a in clone.find_all("a"):
                a.decompose()
            story["description"] = text(clone)
        else:
            # Fallback: use raw bonusbox text minus title and link text
            full = text(bb)
            if story["name"]:
                full = full.replace(story["name"], "", 1)
            full = re.sub(r"Zobacz historię\s*»?", "", full).strip()
            story["description"] = full

        # Link — myButton or first descendant <a>
        my_btn = bb.find("a", class_="myButton")
        if my_btn:
            story["link"] = my_btn.get("href", "")
        else:
            a = bb.find("a")
            if a:
                story["link"] = a.get("href", "")

        if story["name"] or story["description"] or story["link"]:
            stories.append(story)
    return stories

def collect_forms(root):
    out = []
    for form in root.find_all("form"):
        if form.get("id") in ("responsiveSearch",):
            continue
        fields = []
        for inp in form.find_all(["input", "textarea", "select"]):
            name = inp.get("name", "")
            if not name or name.startswith("_") or inp.get("type") in ("hidden", "submit"):
                continue
            fields.append({
                "name": name,
                "type": inp.get("type", inp.name),
                "placeholder": inp.get("placeholder", ""),
                "required": inp.has_attr("required") or "required" in (inp.get("class") or []),
            })
        out.append({"action": form.get("action", ""), "method": form.get("method", "get"), "fields": fields})
    return out

def find_content_root(soup, page_template):
    if page_template == "homepage":
        keep = []
        for sel in ["#home-photo", "#opis", "#category-box"]:
            n = soup.select_one(sel)
            if n:
                keep.append(n)
        if keep:
            wrapper = BeautifulSoup("<div id='virtual-home-root'></div>", "lxml").select_one("#virtual-home-root")
            for n in keep:
                wrapper.append(n.extract())
            return wrapper
    # Inner: prefer #content but the "bonusy" template puts global chrome inside #content,
    # so clean it before returning.
    content = soup.select_one("#content")
    if content:
        clean_chrome(content)
        return content
    body = soup.body
    clean_chrome(body)
    for kill in body.select("#header"):
        kill.decompose()
    return body

def parse_page(html_path, url, page_template):
    with open(html_path, encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "lxml")
    title = text(soup.title)
    md = soup.find("meta", attrs={"name": "description"})
    meta_desc = md.get("content", "").strip() if md else ""
    ogi = soup.find("meta", attrs={"property": "og:image"})
    og_image = ogi.get("content", "").strip() if ogi else ""

    breadcrumbs = []
    bc = soup.select_one(".breadcrumbs")
    if bc:
        breadcrumbs = [s.strip() for s in re.split(r"[»>]", text(bc)) if s.strip()]

    content_root = find_content_root(soup, page_template)

    result = {
        "url": url,
        "page_template": page_template,
        "title": title,
        "meta_description": meta_desc,
        "og_image": og_image,
        "breadcrumbs": breadcrumbs,
        "headings": collect_headings(content_root),
        "blocks": collect_paragraphs(content_root),
        "images": collect_images(content_root),
        "links": collect_links(content_root),
        "forms": collect_forms(soup),
    }
    if page_template in ("gallery", "gallery-index"):
        result["stories"] = extract_stories(content_root)
    return result

def to_markdown(p):
    out = []
    out.append(f"# {p['title']}\n")
    out.append(f"**URL**: `{p['url']}`")
    out.append(f"**Template type**: `{p['page_template']}`\n")
    if p["meta_description"]:
        out.append(f"**Meta description**: {p['meta_description']}\n")
    if p["breadcrumbs"]:
        out.append(f"**Breadcrumbs**: {' › '.join(p['breadcrumbs'])}\n")
    if p["og_image"]:
        out.append(f"**OG image**: {p['og_image']}\n")

    if p.get("stories"):
        out.append("\n---\n\n## Stories / portfolio entries\n")
        for s in p["stories"]:
            out.append(f"\n### {s['name']}\n")
            if s["description"]:
                out.append(s["description"])
            if s["image"]:
                out.append(f"\n_Image_: `{s['image']['src']}` — alt: *{s['image']['alt']}*")
            if s["link"]:
                out.append(f"\n_Story link_: {s['link']}")

    out.append("\n---\n\n## Content blocks (in order)\n")
    for b in p["blocks"]:
        if b["type"].startswith("h"):
            lvl = int(b["type"][1])
            out.append(f"\n{'#' * (lvl + 1)} {b['text']}\n")
        elif b["type"] == "paragraph":
            out.append(f"\n{b['text']}\n")
        elif b["type"] == "list":
            for it in b["items"]:
                out.append(f"- {it}")
            out.append("")

    if p["images"]:
        out.append("\n---\n\n## Images\n")
        for img in p["images"]:
            alt = img["alt"] or "(no alt)"
            out.append(f"- `{img['src']}` — alt: *{alt}*")

    if p["links"]:
        out.append("\n---\n\n## Outgoing links from main content\n")
        for l in p["links"]:
            out.append(f"- [{l['text'] or '(no text)'}]({l['href']})")

    if p["forms"]:
        out.append("\n---\n\n## Forms\n")
        for f in p["forms"]:
            out.append(f"- action=`{f['action']}` method=`{f['method']}`")
            for fld in f["fields"]:
                req = " (required)" if fld["required"] else ""
                out.append(f"  - `{fld['name']}` [{fld['type']}]{req} — placeholder: {fld['placeholder']!r}")

    return "\n".join(out).rstrip() + "\n"

def main():
    pages = []
    for fname, (url, tmpl) in PAGE_MAP.items():
        path = SRC_DIR / fname
        if not path.exists():
            print(f"SKIP {fname}", file=sys.stderr); continue
        p = parse_page(path, url, tmpl)
        pages.append(p)
        slug = fname.replace(".html", "")
        (OUT_DIR / f"{slug}.json").write_text(json.dumps(p, ensure_ascii=False, indent=2), encoding="utf-8")
        (OUT_DIR / f"{slug}.md").write_text(to_markdown(p), encoding="utf-8")
        sc = len(p.get("stories") or [])
        extra = f", stories={sc}" if sc else ""
        print(f"WROTE {slug}: blocks={len(p['blocks'])} imgs={len(p['images'])} links={len(p['links'])}{extra}")
    (OUT_DIR.parent / "all-pages.json").write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nCombined: {OUT_DIR.parent / 'all-pages.json'}")

if __name__ == "__main__":
    main()
