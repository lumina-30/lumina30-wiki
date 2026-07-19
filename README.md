# LUMINA-30 Wiki PoC

Independent static discovery prototype. It does not modify or replace official LUMINA-30 materials.

## Preview

Run a local static server in this directory, for example:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/.

## Public URL

https://lumina-30.github.io/lumina30-wiki/

## Languages

- English pages remain at their original paths.
- Japanese counterparts are under `/ja/` and use a `-ja.html` suffix so every HTML basename remains unique even if folder hierarchy is lost during upload.
- Every paired HTML page includes visible language switching and reciprocal `hreflang` links.
- Preview Japanese at http://localhost:4173/ja/index-ja.html.
