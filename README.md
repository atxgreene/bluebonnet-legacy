# Bluebonnet Legacy

Static public site for Bluebonnet Legacy, a Texas-rooted operational transformation and acquisition platform.

## Pages

- `index.html` - public homepage rebuilt from the Bluebonnet homepage mockup.
- `diagnostic.html` - Legacy Alignment Diagnostic one-pager from the Bluebonnet asset pack.
- `brand.html` - compact production brand system for colors, typography, spacing, logo usage, and framework language.

## Source Assets

- `assets/asset-pack/brand_tokens.css` - suggested production color tokens.
- `assets/asset-pack/brand_palette.png` - visual palette reference.
- `assets/asset-pack/logo_crops/` - extracted logo raster assets.
- `assets/asset-pack/panel_crops/` - extracted board and document panel assets.
- `assets/bluebonnet-mark.svg` - simplified production vector mark for small-format use.
- `assets/bluebonnet-wordmark.svg` - simplified production vector wordmark for web use.

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
- `CNAME www bluebonnetlegacy.com`
