# Linear Systems — Interactive Numerical Analysis (Chapter 3)

A bilingual (English / Hungarian) learning app for the **direct methods of linear
systems**: Gaussian & Gauss–Jordan elimination, pivoting strategies, the tridiagonal
(Thomas) solver, matrix inversion and determinants. Built from the verified course
material in the parent folder.

- **Stack:** Vite + React + TypeScript, KaTeX for math, `fraction.js` for exact rational
  arithmetic (so the visualizer reproduces the textbook's exact fractions, e.g. `14/3`,
  `-143/24`).
- **Bilingual:** language toggle (EN/HU) in the header, persisted to `localStorage`.
- **Dark mode:** theme toggle in the header, persisted, respects `prefers-color-scheme`,
  no flash on first paint.

## Features

- **Elimination Lab** (`/lab`) — enter a matrix or pick a chapter example, choose the
  method (Gaussian / Gauss–Jordan) and pivoting strategy (none / partial / complete /
  scaled), then step through the elimination. Highlights pivots, eliminated cells, row/
  column swaps and multipliers, with a live determinant and back-substitution trace.
  Also does **matrix inversion** `(A | I) → (I | A⁻¹)`, **determinant**, and the
  **tridiagonal** solver. Deep-linkable, e.g.
  `/#/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial`.
- **Lessons** (`/lessons`) — concise bilingual notes for §3.1–3.7 with theorems and
  algorithms, linking into the Lab.
- **Quiz** (`/quiz`) — self-check questions (numeric, vector, multiple-choice, true/false)
  with instant feedback and bilingual worked solutions.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server (prints a localhost URL)
npm run build    # type-check (tsc -b) and build to dist/
npm run preview  # serve the production build
npm run test     # run the Vitest suite
```

## Tests

`src/lib/engine.test.ts` validates the computation engine against the **exact values from
the chapter**: the intermediate matrices of Example 3.22, partial-pivoting fractions and
solution of Example 3.27, complete-pivoting column tracking (3.29), the inverse (3.38),
the determinant `114` (3.39), and the tridiagonal solver (cross-checked against the dense
Gaussian solver). `src/app.test.tsx` is a DOM smoke test covering routing, the language
and theme toggles, the Lab, and the Quiz.

## Layout

```
src/
  lib/          exact-arithmetic engine (pure, unit-tested)
  app/          ThemeContext, LanguageContext, lab-mode constants
  content/      hand-authored bilingual content (examples, sections, quizzes, UI strings)
  components/   math (Tex, MatrixView), layout, visualizer, quiz, notes
  pages/        Home, Lessons, Lab, Quiz
  styles/       design tokens (light/dark) + global styles
```

Routing uses `HashRouter` and `base: './'`, so the built `dist/` can be served from any
static host or opened behind a subpath without server rewrites.
