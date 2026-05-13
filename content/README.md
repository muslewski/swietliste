# Świetliste.pl — Content Bundle for UI Design

This folder contains all content scraped from the existing **swietliste.pl** website
(Świetliste — artystyczna fotografia ślubna, ul. Gronostajowa 3, 86-031 Osielsko),
restructured so that future UI design agents can build a new multi-page site
without re-scraping or guessing what content exists.

The source site is a legacy WordPress (`photography_pro` theme, WP 4.5.32) with
content split across the main domain and two subdomains (`dzieci.swietliste.pl`,
`portret.swietliste.pl`). Only the main domain was scraped — the brief here is to
redesign the wedding-photography portion of the business.

## Folder layout

```
content/
├── README.md                  ← you are here
├── site-map.json              ← proposed sitemap for the redesigned site
├── business-info.json         ← brand, address, phone, services, pricing
├── image-manifest.json        ← every image URL discovered (52 unique), deduped
│
├── subpages/                  ← THE PRIMARY INPUT FOR UI DESIGN AGENTS
│   ├── home/
│   │   ├── content.json       ← structured: hero, sections, stories, CTAs, images
│   │   ├── content.md         ← human-readable preview of the same
│   │   └── images.json        ← image URLs + alt text for this page
│   ├── o-nas/
│   ├── kontakt/
│   ├── galeria/                          (gallery index)
│   ├── galeria-sesje-narzeczenskie/
│   ├── galeria-reportaze-slubne/         (9 story teasers)
│   ├── galeria-sesje-plenerowe/          (13 story teasers)
│   ├── oferta-bydgoszcz/                 (pricing/offer copy)
│   ├── oferta-torun/                     (pricing/offer copy)
│   ├── produkty-fotoksiazka/
│   ├── produkty-album-tradycyjny/
│   ├── produkty-prezentacja/
│   ├── uslugi-retusz/
│   └── bonusy/                           (free desktop wallpapers — legacy feature)
│
└── scraped/                   ← raw scrape, kept for reference / fallback
    ├── all-pages.json         ← combined parser output
    ├── pages/<slug>.json|.md  ← parsed per page (template-aware)
    └── raw-html/<slug>.html   ← original downloaded HTML (14 pages, ~700 KB)
```

## How each `subpages/<slug>/content.json` is shaped

```jsonc
{
  "slug": "galeria-reportaze-slubne",
  "display_name": "Galeria – Reportaże ślubne",
  "kind": "gallery",            // home | about | contact | gallery | gallery-index | offer | product | service | info
  "source_url": "/historie/reportaze-slubne",
  "source_title": "ŚWIETLISTE.PL » Galeria ślubna • Przygotowania • Ślub • Plenery ślubne",
  "meta_description": "...",
  "og_image": "https://...",
  "hero": {
    "heading": "Fotografia ślubna – Reportaże ślubne",
    "subheading": "<first paragraph from the page, if any>"
  },
  "sections": [
    { "heading": "...", "level": 2, "paragraphs": ["..."], "lists": [...] }
  ],
  "stories": [                   // only on gallery pages — perfect for a card grid
    {
      "name": "Swobodny ślub Asi i Marcina",
      "description": "Prawdziwi, lekko szaleni ludzie...",
      "link": "http://swietliste.pl/historie/stylowy-slub-trabant-...",
      "image": { "src": "...", "alt": "...", "title": "..." }
    }
  ],
  "images": [...],               // all <img> from the unique content area
  "useful_links": [...],         // filtered: drops global footer-menu noise
  "all_outbound_links_from_source": [...],
  "forms": []                    // legacy site uses a cforms plugin; no live form markup was scraped
}
```

## How to use this for UI design

1. **Read `business-info.json` first.** It gives you brand voice, services list,
   pricing anchor (`2699 zł` starting wedding package), areas served, contact
   info — enough to design any layout without opening another file.
2. **Read `site-map.json`** to see the proposed information architecture
   (14 subpages mapped from the existing site's flat structure).
3. **Per subpage, read `subpages/<slug>/content.md`** for a quick human-readable
   summary, or `content.json` for templating. Galleries already have a `stories`
   array shaped exactly like a card list (name + description + link + image).
4. **Images**: every `src` is a full absolute URL to the live swietliste.pl CDN.
   For prototyping, hot-link them directly. For production, download via
   `image-manifest.json` (52 unique URLs).

## Content provenance / verbatim warning

All Polish text is preserved **verbatim** from the source site. The site was
written in a warm, first-person-plural voice ("Fotografujemy emocje", "Mamy
dobrą wiadomość…"). Preserve that voice in the redesign — it is a brand asset.

Pricing copy mentions "2018/2019" — surface this with the client before
publishing; it should be refreshed for the current season.

## What was NOT scraped (out of scope for this pass)

- Individual story pages (e.g. `/historie/stylowy-slub-trabant-…`) — only the
  gallery teasers. If a story-detail template is needed, scrape those URLs in a
  follow-up pass; the slugs are already captured in each story's `link` field.
- `dzieci.swietliste.pl` (family photography subdomain).
- `portret.swietliste.pl` (gift sessions / boudoir subdomain).
- Any Facebook / Instagram / Zankyou reviews — those live off-site and require
  their own connectors.

## Regenerating

The two scripts that produced this bundle are kept ephemerally in `/tmp/` and
can be re-run if needed:

- `/tmp/parse_swietliste.py` — parses `scraped/raw-html/*.html` → `scraped/pages/`
- `/tmp/build_subpages.py`  — turns `scraped/pages/` into `subpages/` + the global JSONs

Both use a temporary venv at `/tmp/scrape_venv` (`beautifulsoup4`, `lxml`).
