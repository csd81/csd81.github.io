# Numerical Analysis · Chapter 2 — interactive site

An interactive companion to F. Hartung's *Numerical Analysis* Chapter 2 (*Nonlinear Algebraic Equations and Systems*). Theorem-and-proof prose lives next to live widgets where you can change initial values, type your own functions, and watch the iteration converge in real time.

## Stack

- **Astro 4** with **React 18 islands** — content-heavy SSG that ships virtually no JS on prose pages and hydrates only the interactive widgets.
- **MDX** with **remark-math** + **rehype-katex** for inline and display math.
- **Mafs** for interactive math figures (cobweb, Newton tangents, contour iterations).
- **Observable Plot** for the convergence-comparison semilog chart.
- **math.js** for parsing user-typed formulas and producing symbolic derivatives.
- **shadcn/ui** primitives on top of Radix for accessible sliders/buttons.
- **Tailwind CSS** for styling. **TypeScript** throughout. **Vitest** for the kernel tests. **Biome** for lint + format.

## Project structure

```
src/
├── content/chapter/        # 13 MDX sections (§0 + §2.1 .. §2.12)
├── components/
│   ├── Layout.astro
│   ├── Nav.astro
│   ├── TheoremBox.astro
│   ├── Exercise.tsx       # click-to-reveal solutions
│   ├── FunctionInput.tsx  # debounced math.js-validated input
│   └── widgets/           # 10 interactive React widgets
├── lib/
│   ├── methods/           # pure-TS numerical kernels + Vitest specs
│   ├── expression.ts      # math.js compile + symbolic differentiation
│   ├── norms.ts
│   └── presets.ts
├── pages/
│   ├── index.astro        # landing
│   ├── chapter/[slug].astro
│   ├── playground.astro
│   └── glossary.astro     # auto-built theorem index
└── styles/global.css
```

## Run

```bash
npm install
npm run dev          # → http://localhost:4321
npm test             # Vitest kernel regression tests
npm run build        # static build → dist/
npm run preview      # serve dist/ locally
```

## Implementation status

- ✅ Project scaffold (Astro + MDX + KaTeX + Tailwind + TS + Biome).
- ✅ Numerical kernels: `fpi`, `bisect`, `falsePosition`, `newton`, `secant`, `newton2D`, `broyden`, plus 2D vector/matrix utils.
- ✅ Vitest regression tests pinned to Hartung Tables 2.2, 2.5, 2.7, 2.13, 2.14.
- ✅ Math.js expression layer (scalar + R²→R² Jacobian).
- ✅ Layout, Nav, TheoremBox, Exercise, FunctionInput shared components.
- ✅ First end-to-end widget: **CobwebPlot** + the full §2.1 MDX page.
- ✅ Landing page + chapter dynamic route + auto-built theorem index.
- ✅ Stub MDX pages for §0 and §2.2 through §2.12 (navigation works; content marked 🚧).
- ⏳ **To build:** the nine remaining widgets — `BisectionStepper`, `FalsePositionStepper`, `NewtonStepper`, `NewtonArctanDemo`, `SecantStepper`, `ConvergenceComparison`, `NormBall`, `Newton2DContour`, `BroydenVsNewton`.
- ⏳ **To do:** copy full prose from `../Chapter_2_full.md` into the 12 stub MDX files.
- ⏳ **To do:** flesh out the `/playground` page using the existing kernels.

The widget pattern is fully demonstrated by `CobwebPlot.tsx` + `01-fixed-point.mdx`. The remaining widgets reuse the same numerical-kernel-plus-Mafs-canvas approach.

## Source materials

`../Chapter_2_full.md` — the merged textbook + slides + lecture transcript. Use this as the single source of truth when filling in the stub MDX files.
