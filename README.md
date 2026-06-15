# Bluebonnet Legacy

Static public site for Bluebonnet Legacy, a Texas-rooted operational transformation and acquisition platform.

## Pages

- `index.html` - hub homepage (hero, problem, links to the focused pages, who-it's-for, CTA).
- `framework.html` - the Bluebonnet Alignment Framework™ (interactive flower + pillars + foundation).
- `responsible-ai.html` - responsible agentic AI, plain-language definitions, and the Snakepit.dev deployment split.
- `services.html` - the six service disciplines and outcomes.
- `diagnostic.html` - the Legacy Alignment Diagnostic offer page (standalone, Tailwind).
- `brand.html` - internal brand-system reference (not linked in the main nav).

## Shared design system

- `assets/site.css` - all shared styles: tokens, nav/footer, components, motion. Edit once here.
- `assets/site.js` - shared interactions (reveals, nav + scroll progress, framework petal sync, drawer, motion), each guarded so the one file runs on every page.
- Palette: Deep Navy `#10263D`, Bluebonnet Blue `#1F4E79`, Sage `#566B47`, Warm Ivory `#F7F3EA`, Muted Gold `#B89B5E`. Type: Cormorant Garamond (display) + Inter (body).

## Source Assets

- `assets/asset-pack/brand_tokens.css` - suggested production color tokens.
- `assets/asset-pack/brand_palette.png` - visual palette reference.
- `assets/asset-pack/logo_crops/` - extracted logo raster assets.
- `assets/asset-pack/panel_crops/` - extracted board and document panel assets.
- `assets/bluebonnet-mark.svg` - simplified production vector mark for small-format use.
- `assets/bluebonnet-wordmark.svg` - simplified production vector wordmark for web use.
- `assets/favicon.svg` - SVG favicon from the `bluebonnetlegacy_site_v1` bundle.
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
