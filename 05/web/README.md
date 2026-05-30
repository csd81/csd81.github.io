# Matrix Factorization Academy

An interactive, bilingual (English / Hungarian) educational web app for **Chapter 5 — Matrix
Factorization** (LU and Cholesky), based on the course material in the parent folder.

## Features

- **Bilingual** EN/HU with an instant header toggle (default English). All theory, UI, exercises
  and badges are translated.
- **Dark / light mode** via CSS variables, persisted, defaults to your OS preference.
- **Complete theory** — definitions, theorems with proofs, worked examples, the Cholesky
  algorithm, operation counts, and exercises, rendered with **KaTeX**.
- **Step-by-step solvers** for LU (Gaussian elimination / Doolittle) and Cholesky on your own
  matrices, with cell highlighting, a step player, and a "verify by multiplying back" check.
- **Guided animations** of the textbook worked examples (Example 5.3 LU 4×4, Example 5.7
  Cholesky 3×3) using framer-motion.
- **Practice exercises** with answer checking (matrix factor checks, multiple choice, and
  reveal-able proof answers) and hints.
- **Gamification** — a progress ring and unlockable badges, all saved in `localStorage`.

## Tech stack

Vite · React 18 · TypeScript · react-router-dom · KaTeX · framer-motion · zustand.

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

The build is a fully static SPA (uses a hash router, so it can be hosted from any subpath).

## Project layout

```
src/
  content/     bilingual theory + exercises (typed data modules)
  lib/         pure-TS math: matrix ops, LU and Cholesky with step traces
  components/  Math (KaTeX), matrix input/display, solvers, step player,
               guided examples, practice, gamification, layout
  pages/       Home, LU, Cholesky, Solvers, Practice
  store/       zustand store (language, theme, progress) with persistence
  styles/      design tokens (theme.css) + global styles
```

The factorization logic is verified against the textbook results (Example 5.3 and Example 5.7).
