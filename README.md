# Bluebonnet Legacy

Static public site for Bluebonnet Legacy — a Texas-rooted practice for operational clarity, responsible AI, and practical business modernization.

## Pages

- `index.html` - hub homepage (hero, problem, links to the focused pages, who-it's-for, proving-grounds proof, CTA).
- `framework.html` - the Bluebonnet Alignment Framework™ (interactive flower + pillars + foundation + one-page PDF download).
- `responsible-ai.html` - responsible agentic AI, plain-language definitions, and the Snakepit.dev deployment split.
- `services.html` - the six service disciplines and outcomes.
- `diagnostic.html` - the Legacy Alignment Diagnostic offer page (standalone; compiled Tailwind, no runtime CDN).

## Shared design system

- `assets/site.css` - all shared styles: tokens, nav/footer, components, motion. Edit once here.
- `assets/site.js` - shared interactions (booking CTAs, reveals, nav + scroll progress, framework petal sync, drawer, motion), each guarded so the one file runs on every page.
- Palette: Deep Navy `#10263D`, Bluebonnet Blue `#1F4E79`, Sage `#566B47`, Warm Ivory `#F7F3EA`, Muted Gold `#B89B5E`. Type: Cormorant Garamond (display) + Inter (body).

## Booking CTAs (Calendly)

Every "Start with a Diagnostic" / "Request a Diagnostic" CTA carries a `data-book`
attribute and falls back to a `mailto:` link. To switch them all to a Calendly
popup, set one constant near the top of `assets/site.js`:

```js
var BOOKING_URL = 'https://calendly.com/your-handle/diagnostic';
```

The Calendly widget is lazy-loaded on first click; if it fails to load, the
booking page opens in a new tab instead. Leave `BOOKING_URL` empty to keep the
email CTAs.

## Lead magnet (framework one-pager)

- `assets/downloads/bluebonnet-alignment-framework.pdf` - the downloadable one-page framework guide (linked from `framework.html` and the footer).
- `docs/lead-magnet/bluebonnet-alignment-framework.html` - the print source. To regenerate the PDF after editing, print it to PDF at Letter size with backgrounds on, e.g. headless Chrome:

```bash
chrome --headless --print-to-pdf=assets/downloads/bluebonnet-alignment-framework.pdf \
  --no-pdf-header-footer docs/lead-magnet/bluebonnet-alignment-framework.html
```

## Diagnostic page CSS

`diagnostic.html` uses a statically compiled Tailwind build at
`assets/diagnostic.css` (no runtime CDN dependency). After changing Tailwind
classes in `diagnostic.html`, recompile:

```bash
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > /tmp/in.css
npx -y tailwindcss@3.4.13 --content diagnostic.html -i /tmp/in.css -o assets/diagnostic.css --minify
```

## Brand marks

- `assets/bluebonnet-mark.svg` - production vector mark (rebuilt to match the asset-pack brand art: six-floret cluster, ivory seams, sage leaves).
- `assets/bluebonnet-wordmark.svg` - vertical lockup (mark + BLUEBONNET LEGACY).
- `assets/favicon.svg` / `assets/favicon.ico` / `assets/favicon-32.png` - navy-tile favicon derived from the mark.
- `assets/apple-touch-icon.png`, `assets/bluebonnet-icon.png` - raster icons rendered from `favicon.svg`.
- `assets/bluebonnet-social-banner.png` - 1200x630 Open Graph/Twitter card.
- The hero flower (`index.html`) and the interactive framework flower (`framework.html`) are inline SVGs built from the same floret geometry.

## Source Assets

- `assets/asset-pack/brand_tokens.css` - suggested production color tokens.
- `assets/asset-pack/brand_palette.png` - visual palette reference.
- `assets/asset-pack/logo_crops/` - extracted logo raster assets (reference art for the vector mark).
- `assets/asset-pack/panel_crops/` - extracted board and document panel assets.
- `docs/brand-brief.md` - positioning notes and brand tokens from the `bluebonnetlegacy_site_v1` bundle.

## Production Notes

- Public architecture uses Bluebonnet Legacy. Bluebonnet Capital and Bluebonnet Holdings are reserved for formal entities or service lines.
- Framework language is standardized around Financial Clarity, Operational Structure, Incentive Alignment, Leadership Rhythm, Process Engineering, Technology Leverage, Reporting Architecture, and Capital Efficiency.
- Raster source crops remain in `assets/asset-pack/` for reference. Use SVG assets for active web marks.

## Local Preview

```bash
python3 -m http.server 5174
```

Open `http://localhost:5174`.

## Deployment

This repo is designed for GitHub Pages. The `CNAME` file points to `bluebonnetlegacy.com`.

Expected DNS records:

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`
- `CNAME www atxgreene.github.io`
