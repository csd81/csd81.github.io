# Numerical Methods — Interactive Textbook

A single bilingual (HU/EN) web app consolidating the ten chapter apps (folders `01`–`10`)
into one Vite + React + TypeScript site, published to <https://csd81.github.io>.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/ (also writes dist/404.html SPA shim for Pages)
npm run preview
```

## Architecture

- `src/shared/` — the one design system shared by every chapter:
  - `providers/` — `LanguageProvider` (HU/EN, `t(Bi)` helper) and `ThemeProvider` (light/dark).
    These own the single source of truth; the global nav toggles drive every chapter.
  - `ui/` — shared primitives: `Math` (KaTeX), `MarkdownView`, `Quiz`, `ChapterPlaceholder`.
  - `styles/` — `tokens.css` (light/dark design tokens) + `global.css`.
- `src/chapters/<slug>/` — one folder per chapter, lazy-loaded so heavy libraries
  (Plotly, Mafs, recharts…) only download on their route. See `registry.ts` for the
  slug ↔ chapter map and `ready` flags.
- `src/routes.tsx` — mounts `App` (nav shell) with `Home` and each chapter at `/<slug>/*`.

### Chapter migration pattern (used for each `0N` → `src/chapters/<slug>/`)

1. Copy the original app's `components/ sections/ lib/ i18n/ styles/` into the chapter folder.
2. Replace the app's own `LanguageContext` / `ThemeContext` with **thin adapters** that
   re-export (or wrap) the shared providers — so one global toggle controls all chapters.
3. Add `index.tsx` rendering the chapter body **minus its old top nav** (the unified shell
   provides nav + language/theme toggles + chapter switcher).
4. Drop any Express server: bundle its JSON/markdown statically and run compute in-browser.
5. Flip `ready: true` in `registry.ts`.

## Migration status — all 10 chapters migrated ✅

| # | Slug | Source stack | Notes |
|---|------|--------------|-------|
| 1 | `introduction` | Vite+React | context adapters → shared providers |
| 2 | `nonlinear-equations` | Astro+MDX | MDX compiled via `@mdx-js/rollup`, widgets via `MDXProvider` |
| 3 | `linear-systems` | Vite+React Router | descendant routes, base-prefixed links |
| 4 | `iterative-methods` | Vite+React+Tailwind | Tailwind added globally (preflight off) |
| 5 | `matrix-factorization` | Vite+React+zustand | lang/theme sourced from shared, store kept for progress |
| 6 | `interpolation` | Vite+React (had server) | server unused by client; dropped |
| 7 | `numerical-calculus` | Vite+React+i18next (server) | API → static bundled content + client compute |
| 8 | `minimization` | Vite+React | context adapters → shared providers |
| 9 | `least-squares` | **vanilla JS + Plotly** | imperative renderers mounted in a React wrapper |
| 10 | `differential-equations` | Vite+React+Plotly (server) | `/api/solve` runs in-browser via shared engine |

The `registry.ts` `ready` flag still exists; a chapter set to `false` falls back to a
graceful "being migrated" card, so the site stays deployable during future edits.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `dist/` and publishes
it to GitHub Pages. The repo must be named **`csd81.github.io`** and have
**Settings → Pages → Source = GitHub Actions**.
