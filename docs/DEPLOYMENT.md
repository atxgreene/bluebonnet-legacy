# Deployment Notes

Bluebonnet Legacy is a static GitHub Pages site.

## GitHub Pages

Use GitHub Pages with the workflow in `.github/workflows/static.yml`. The custom domain is `bluebonnetlegacy.com`.

## GoDaddy DNS

Remove forwarding or parked records before adding the GitHub Pages records:

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`
- `CNAME www atxgreene.github.io`

After DNS resolves, set the GitHub Pages custom domain and enable HTTPS enforcement.
