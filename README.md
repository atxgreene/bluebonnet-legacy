# Bluebonnet Legacy

Static public site for Bluebonnet Legacy, a Texas-rooted operational transformation and acquisition platform.

## Pages

- `index.html` - public homepage rebuilt from the Bluebonnet homepage mockup.
- `diagnostic.html` - Legacy Alignment Diagnostic one-pager from the Bluebonnet asset pack.

## Source Assets

- `assets/asset-pack/brand_tokens.css` - suggested production color tokens.
- `assets/asset-pack/brand_palette.png` - visual palette reference.
- `assets/asset-pack/logo_crops/` - extracted logo raster assets.
- `assets/asset-pack/panel_crops/` - extracted board and document panel assets.

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
