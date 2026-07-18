# LUMINA-30 Wiki PoC

Independent static discovery prototype. It does not modify or replace official LUMINA-30 materials.

## Preview

Run a local static server in this directory, for example:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/.

## Publication gate

Before publishing, obtain approval and replace `https://lumina-30.github.io/lumina30-wiki/lumina30-wiki-poc` in canonical URLs, sitemap, and robots.txt with the approved public base URL. Rebuild and re-run checks.

## Languages

- English pages remain at their original paths.
- Japanese counterparts are under `/ja/` with matching slugs.
- Every paired HTML page includes visible language switching and reciprocal `hreflang` links.
- Preview Japanese at http://localhost:4173/ja/.
