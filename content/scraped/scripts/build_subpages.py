#!/usr/bin/env python3
"""
Build per-subpage structured folders from the parsed swietliste.pl pages.

Output: content/subpages/<slug>/{content.json, content.md, images.json}
Plus:   content/business-info.json
        content/site-map.json
        content/image-manifest.json (every image URL discovered, deduped)
"""
import json
import re
from pathlib import Path

ROOT = Path("/Users/muslewski/Documents/Repozytoria/swietliste-osielsko/content")
PAGES_DIR = ROOT / "scraped" / "pages"
SUBPAGES_DIR = ROOT / "subpages"
SUBPAGES_DIR.mkdir(parents=True, exist_ok=True)

# Slug → (display-name, kind, source-json filename, optional pricing/services notes)
SUBPAGES = {
    "home":                       ("Strona główna",                  "home",      "index.json"),
    "o-nas":                      ("O nas",                          "about",     "swietliste.json"),
    "kontakt":                    ("Kontakt",                        "contact",   "kontakt.json"),

    "galeria":                    ("Galeria – Historie",             "gallery-index", "historie.json"),
    "galeria-sesje-narzeczenskie":("Galeria – Sesje narzeczeńskie",  "gallery",   "sesje-narzeczenskie.json"),
    "galeria-reportaze-slubne":   ("Galeria – Reportaże ślubne",     "gallery",   "reportaze-slubne.json"),
    "galeria-sesje-plenerowe":    ("Galeria – Sesje plenerowe",      "gallery",   "sesje-plenerowe.json"),

    "oferta-bydgoszcz":           ("Oferta – Bydgoszcz",             "offer",     "oferta-bydgoszcz.json"),
    "oferta-torun":               ("Oferta – Toruń",                 "offer",     "oferta-torun.json"),

    "produkty-fotoksiazka":       ("Produkty – Fotoksiążki",         "product",   "fotoksiazka.json"),
    "produkty-album-tradycyjny":  ("Produkty – Albumy tradycyjne",   "product",   "album-tradycyjny.json"),
    "produkty-prezentacja":       ("Produkty – Prezentacja HD",      "product",   "prezentacja.json"),

    "uslugi-retusz":              ("Usługi – Retusz",                "service",   "retusz.json"),
    "bonusy":                     ("Bonusy – Tapety",                "info",      "bonusy.json"),
}

def load_page(filename):
    return json.loads((PAGES_DIR / filename).read_text(encoding="utf-8"))

def write_json(path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")

def first_paragraph(blocks):
    for b in blocks:
        if b["type"] == "paragraph" and b["text"]:
            return b["text"]
    return ""

def group_blocks_into_sections(blocks):
    """
    Turn flat blocks into [{heading, paragraphs, lists}] sections.
    A new section starts at every heading; paragraphs and lists belong to the previous heading.
    """
    sections = []
    current = {"heading": None, "level": None, "paragraphs": [], "lists": []}
    def flush():
        nonlocal current
        if current["heading"] or current["paragraphs"] or current["lists"]:
            sections.append(current)
        current = {"heading": None, "level": None, "paragraphs": [], "lists": []}
    for b in blocks:
        if b["type"].startswith("h"):
            flush()
            current["heading"] = b["text"]
            current["level"] = int(b["type"][1])
        elif b["type"] == "paragraph":
            current["paragraphs"].append(b["text"])
        elif b["type"] == "list":
            current["lists"].append({"ordered": b.get("ordered", False), "items": b["items"]})
    flush()
    return sections

# Filter to drop nav/footer-link noise from a links list that came from inside the content area
def is_useful_link(l):
    if not l["href"]:
        return False
    if l["href"].startswith("mailto:") or l["href"].startswith("tel:"):
        return True
    if l["text"].lower().startswith("zobacz historię"):
        return True
    if l["text"].lower() in ("kontakt", "fotografia ślubna", "fotografia dziecięca", "sesja na prezent",
                              "informacje", "kim jesteśmy", "albumy wyklejane", "fotoksiążki",
                              "teledysk ze zdjęć w hd", "profesjonalny retusz", "historie miłosne",
                              "sesje narzeczeńskie", "reportaże ślubne", "sesje plenerowe",
                              "ciążowe sesje z brzuszkiem", "sesje noworodkowe", "dziecięce sesje juniorów",
                              "sesje rodzinne", "chrzest święty", "pierwsza komunia święta",
                              "portret w stylu fine art", "fotograficzna metamorfoza", "sesja buduarowa",
                              "sesja na walentynki", "sesja do portfolio", "sesja - prezent na urodziny"):
        return False  # global footer-menu noise
    return True

# Build each subpage folder
all_images = {}  # src → {alt, sources: [subpages]}
def register_image(src, alt, subpage):
    if not src:
        return
    if src not in all_images:
        all_images[src] = {"alt": alt or "", "sources": []}
    if subpage not in all_images[src]["sources"]:
        all_images[src]["sources"].append(subpage)
    if not all_images[src]["alt"] and alt:
        all_images[src]["alt"] = alt

site_map = {
    "site": "Świetliste.pl",
    "tagline": "Fotografujemy emocje",
    "description": "Artystyczna fotografia ślubna i rodzinna z Osielska/Bydgoszczy, działająca na terenie całego kraju.",
    "proposed_subpages": [],
}

for slug, (display, kind, src_file) in SUBPAGES.items():
    page = load_page(src_file)
    target = SUBPAGES_DIR / slug
    target.mkdir(parents=True, exist_ok=True)

    sections = group_blocks_into_sections(page["blocks"])
    images = page["images"]
    for img in images:
        register_image(img["src"], img.get("alt", ""), slug)
    if page.get("stories"):
        for s in page["stories"]:
            if s.get("image"):
                register_image(s["image"]["src"], s["image"].get("alt", ""), slug)

    content = {
        "slug": slug,
        "display_name": display,
        "kind": kind,
        "source_url": page["url"],
        "source_title": page["title"],
        "meta_description": page["meta_description"],
        "og_image": page["og_image"],
        "hero": {
            # Heuristic: first H1 is the hero heading; first paragraph is the hero subtext
            "heading": next((b["text"] for b in page["blocks"] if b["type"] == "h1"), display),
            "subheading": first_paragraph(page["blocks"]),
        },
        "sections": sections,
        "stories": page.get("stories", []),
        "images": images,
        "useful_links": [l for l in page["links"] if is_useful_link(l)],
        "all_outbound_links_from_source": page["links"],
        "forms": page.get("forms", []),
    }
    write_json(target / "content.json", content)

    # Markdown summary for human reading
    md = []
    md.append(f"# {display}\n")
    md.append(f"> Source page: `{page['url']}` — kind: `{kind}`\n")
    if page["meta_description"]:
        md.append(f"**Meta**: {page['meta_description']}\n")
    md.append(f"\n## Hero\n\n**Heading**: {content['hero']['heading']}\n")
    if content['hero']['subheading']:
        md.append(f"\n**Subheading**: {content['hero']['subheading']}\n")

    if sections:
        md.append("\n## Sections\n")
        for s in sections:
            if s["heading"]:
                md.append(f"\n### {s['heading']}\n")
            for p in s["paragraphs"]:
                md.append(f"\n{p}\n")
            for lst in s["lists"]:
                for it in lst["items"]:
                    md.append(f"- {it}")
                md.append("")

    if content["stories"]:
        md.append(f"\n## Stories ({len(content['stories'])})\n")
        for st in content["stories"]:
            md.append(f"\n#### {st['name']}\n")
            if st["description"]:
                md.append(f"{st['description']}\n")
            if st.get("image"):
                md.append(f"_Image_: `{st['image']['src']}`")
            if st.get("link"):
                md.append(f"_Link_: {st['link']}")

    if content["useful_links"]:
        md.append("\n## Useful CTAs / outbound links\n")
        for l in content["useful_links"]:
            md.append(f"- [{l['text']}]({l['href']})")

    if images:
        md.append(f"\n## Images ({len(images)})\n")
        for i in images[:20]:
            md.append(f"- `{i['src']}` — alt: *{i['alt']}*")
        if len(images) > 20:
            md.append(f"\n*…and {len(images)-20} more in `images.json`*")

    (target / "content.md").write_text("\n".join(md).rstrip() + "\n", encoding="utf-8")

    write_json(target / "images.json", [
        {"src": i["src"], "alt": i["alt"], "width": i.get("width"), "height": i.get("height")}
        for i in images
    ])

    site_map["proposed_subpages"].append({
        "slug": slug,
        "display": display,
        "kind": kind,
        "source_url": page["url"],
        "summary": page["meta_description"] or first_paragraph(page["blocks"])[:200],
        "sections": [s["heading"] for s in sections if s["heading"]],
        "story_count": len(page.get("stories", [])),
        "image_count": len(images),
    })

# Global business info (extracted from contact page + about page)
contact = load_page("kontakt.json")
about = load_page("swietliste.json")
business = {
    "name": "Świetliste.pl",
    "legal_long": "Świetliste.pl » Fotografujemy emocje",
    "tagline": "Fotografujemy emocje",
    "specialty": "Artystyczna fotografia ślubna, rodzinna i portretowa",
    "areas_served": ["Bydgoszcz", "Toruń", "Osielsko", "Trójmiasto (Gdańsk/Gdynia/Sopot)", "Poznań", "Cała Polska"],
    "address": {
        "street": "Gronostajowa 3",
        "postal_code": "86-031",
        "city": "Osielsko",
        "near": "Bydgoszcz",
        "country": "Polska",
    },
    "phone": "+48 609 149 740",
    "email": "fotograf@swietliste.pl",
    "social": {
        "facebook": "https://facebook.com/swietliste",
        "google_maps": "https://www.google.pl/maps/place/Świetliste.pl+»+Fotografujemy+emocje/@53.1844626,18.0940974,17z/data=!4m2!3m1!1s0x4703138cc0b8cf1d:0x27c733f1db920ed4",
    },
    "subdomains": {
        "main": "swietliste.pl",
        "family_photography": "dzieci.swietliste.pl",
        "portrait_gift_sessions": "portret.swietliste.pl",
    },
    "third_party_partner_pages": [
        {"name": "Zankyou (rekomendowani fotografowie)", "url": "https://www.zankyou.pl/p/sesja-pt-pustynna-cisza-a-w-rolach-glownych-daria-i-lukasz"},
        {"name": "Firmy.net (opinie klientów)", "url": "http://www.firmy.net/fotografia-slubna/swietlistepl,WTCD7,opinie-klientow.html"},
        {"name": "Warsztaty w Złodziejewie", "url": "https://warsztatywzlodziejewie.pl/kategoria-produktu/warsztaty/"},
    ],
    "value_propositions": [
        "Fotografujemy emocje, nie tylko rejestrujemy wydarzenia",
        "Reportażowy/dokumentalny styl bez pozowania",
        "Operowanie pięknym, naturalnym światłem",
        "Pełna gama produktów drukowanych: albumy wyklejane, fotoksiążki, prezentacje HD",
    ],
    "primary_services": [
        {"name": "Reportaże ślubne", "url_slug": "galeria-reportaze-slubne", "kind": "wedding-reportage"},
        {"name": "Sesje narzeczeńskie", "url_slug": "galeria-sesje-narzeczenskie", "kind": "engagement"},
        {"name": "Sesje plenerowe ślubne", "url_slug": "galeria-sesje-plenerowe", "kind": "wedding-outdoor"},
        {"name": "Fotoksiążki", "url_slug": "produkty-fotoksiazka", "kind": "product"},
        {"name": "Albumy tradycyjne z pergaminem", "url_slug": "produkty-album-tradycyjny", "kind": "product"},
        {"name": "Prezentacje HD ze zdjęć", "url_slug": "produkty-prezentacja", "kind": "product"},
        {"name": "Retusz i postprodukcja", "url_slug": "uslugi-retusz", "kind": "service"},
    ],
    "pricing": {
        "wedding_package_starting_from_pln": 2699,
        "currency": "PLN",
        "note": "Pakiety ślubne już od 2699 zł (cena z istniejącego sajtu, do potwierdzenia z klientem przed użyciem na nowej stronie).",
    },
    "contact_form_fields_hint": [
        # cforms-based legacy form; not extracted as <form> tag but described in /kontakt copy
        "Data (data ślubu)",
        "Miejsce ślubu i wesela",
        "Telefon kontaktowy",
        "Jeśli z polecenia — komu podziękować",
        "Imię",
        "E-mail",
        "Wiadomość",
    ],
    "response_time": "Zwykle w ciągu jednego dnia",
}

write_json(ROOT / "business-info.json", business)
write_json(ROOT / "site-map.json", site_map)
write_json(ROOT / "image-manifest.json", [
    {"src": src, "alt": meta["alt"], "used_on_subpages": meta["sources"]}
    for src, meta in sorted(all_images.items())
])

print(f"Built {len(SUBPAGES)} subpage folders in {SUBPAGES_DIR}")
print(f"  business-info.json")
print(f"  site-map.json  ({len(site_map['proposed_subpages'])} entries)")
print(f"  image-manifest.json  ({len(all_images)} unique images)")
