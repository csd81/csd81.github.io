# ODE Numerics — Interactive Educational Web App

Bilingual (EN/HU) interactive app for the numerical solution of initial value
problems `y' = f(t, y)` using **Euler's, Taylor's and Runge–Kutta methods**.
Built from Chapter 10 (Hartung, *Bevezetés a numerikus analízisbe* / University of Pannonia).

## Features
- **Bilingual** English/Hungarian + **dark/light** theme toggles.
- **Theory** rendered from the converted chapter markdown with KaTeX math.
- **Slope-field demo** — animated step-by-step approximation over the direction field.
- **Method comparison** — Euler / Taylor-2,3 / midpoint / modified Euler / Heun / RK4 vs the exact solution, with a textbook-style results table.
- **Convergence demo** — log–log error vs step size; reads off the empirical order.
- **Playground** — type any `f(t,y)`; Taylor derivatives are computed symbolically (mathjs). Solve in-browser or via the server API.

## Stack
React 18 + Vite (client) · Express (server) · shared ESM numerical engine ·
react-markdown + remark-math/gfm + rehype-katex · mathjs · react-plotly.js.

## Run

```bash
npm install
npm run dev      # Vite on :5173 (proxies /api), Express on :3001
```

Open http://localhost:5173.

### Production
```bash
npm run build    # -> client/dist
npm start        # Express serves client/dist + API on :3001
```

## Layout
```
shared/   solvers.js · derivatives.js · presets.js   (used by client AND server)
server/   index.js (API + static) · content.js (reads ../*.md)
client/   src/{contexts,components,pages,lib,i18n,styles}
```

The source markdown files (`Chapter_10_ODEs.md`, `10_Differencialegyenletek.md`,
`_num_pres10.md`, `10num_pres10.md`) live in the parent folder and are read by the server.
