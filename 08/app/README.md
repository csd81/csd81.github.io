# Minimization of Functions — Interactive Bilingual Guide

A playful **scrollytelling** web app that teaches Chapter 8 (*Minimization of
Functions*) of the Numerical Analysis course. Each method narrates itself as you
scroll, animating a pinned visualization — and you can grab the controls to play,
step, scrub, drag sliders, or click to set a starting point.

- **Bilingual** — English / Hungarian, toggle in the top bar (remembered).
- **Dark mode** — 🌙 / ☀️ toggle (remembered; follows your OS by default).
- **Math on demand** — intuition first; theorems, proofs and derivations live in
  collapsible "Show the math" panels (rendered with KaTeX).
- **Everything is live** — all contour plots, paths, and convergence tables are
  computed in your browser; nothing is a static image.

## Sections

1. **8.1 Calculus, refreshed** — ∇f = 0, the Hessian, and a min/max/saddle quiz.
2. **8.2 Golden Section Search** — shrinking brackets, reusing one probe per step.
3. **8.3 Simplex & Nelder–Mead** — the reflect/expand/contract "amoeba".
4. **8.4 Gradient Method** — steepest descent; constant vs optimal step; the zig-zag.
5. **8.5 Linear Systems by Descent** — solving A x = b by rolling a quadratic bowl.
6. **8.6 Newton's Method** — curvature, quadratic convergence, Newton vs gradient.
7. **8.7 Quasi-Newton** — the Broyden / PSB / BFGS / DFP convergence race.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run test     # vitest: algorithms converge to the known minima
```

## Tech

Vite + React + TypeScript. KaTeX for math. Plots are hand-rolled HTML Canvas
(marching-squares contours + overlay layer) reading theme colors from CSS
variables, so they recolor with light/dark. Scroll detection uses a small
`IntersectionObserver` hook. No charting or animation dependencies.

```
src/
  algorithms/   pure frame-producers (golden, simplex, gradient, newton, quasi-Newton, linsys) + tests
  math/         linalg, function presets (analytic grad/Hessian), contour/marching-squares
  components/   Math (KaTeX), Scrolly, Nav, Hero, Footer, controls, plots/*
  contexts/     ThemeContext, LanguageContext
  hooks/        useScrollama
  sections/     Section*.tsx — one per chapter section, + registry & shell
```

## Credits

A companion to the Numerical Analysis course material (Chapter 8, *Minimization
of Functions*) by F. Hartung, University of Pannonia. Explanatory text is written
fresh for this app; all numerical results are recomputed live.
