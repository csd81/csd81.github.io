# InterPlay — bilingual interactive interpolation tutor

A playful, bilingual (English / Hungarian) web app that teaches **Chapter 6 — Interpolation**
(F. Hartung, University of Pannonia): Lagrange, Newton's divided differences, Hermite, and
natural cubic splines. Dark mode by default, with a light theme toggle.

## Stack
- **React + TypeScript + Vite** front end
- **Node / Express** server (serves the built SPA, exposes `/api/datasets`, `/api/health`)
- **KaTeX** for rendered mathematics
- Pure-TS/JS **math core** (`src/mathcore/core.mjs`) shared by the UI and the tests

## Features
- Drag data points on an SVG plot; the interpolant updates live.
- Four lesson tabs (6.1 Lagrange, 6.3 Newton, 6.4 Hermite, 6.5 Spline) with theorem cards.
- Live divided-difference table (Newton) and per-point derivative inputs (Hermite).
- "Compare all methods" overlay — see Runge oscillation vs. the smooth spline.
- Playground challenge: drag points until your curve matches the dashed target → confetti 🎉.
- EN/HU language toggle and dark/light theme, both persisted to `localStorage`.

## Run

```bash
npm install        # install dependencies
npm test           # verify the math core against the textbook worked examples
npm run dev        # Vite dev server  → http://localhost:5173  (proxies /api to :8080)

# production:
npm run build      # → dist/
npm start          # Express serves dist/ + API → http://localhost:8080
```

## Math core
`src/mathcore/core.mjs` implements:
- `lagrangeEval`, `lagrangeBasis` — formula (6.2)/(6.3)
- `dividedDifferenceTable`, `newtonCoefficients`, `newtonEval` — Table 6.1, Algorithms 6.13/6.14
- `hermiteTable`, `hermiteEval` — Table 6.2 / formula (6.7)
- `naturalCubicSpline`, `splineEval` — Section 6.5 (tridiagonal solve)

Tests in `core.test.mjs` check these against Examples 6.2, 6.21, 6.23 and the slide example.
