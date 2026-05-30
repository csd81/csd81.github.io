# NumCalc — Numerical Differentiation & Integration

A playful, bilingual (🇬🇧 English / 🇭🇺 Hungarian) educational web app for **Chapter 7 — Numerical Differentiation and Integration**. Read the lessons with fully typeset math, experiment with the actual numerical methods in an interactive playground, and test yourself with scored quizzes. Light & dark themes included.

## Stack

- **client/** — Vite + React + TypeScript + Tailwind CSS, KaTeX (math), mathjs (function eval), framer-motion (animation), react-i18next (localization).
- **server/** — Express + TypeScript: serves lesson content, the quiz bank (with answer keys kept server-side), and the built SPA in production.
- **content/** — canonical lesson markdown (`lessons/{en,hu}/7.*.md`) and the bilingual quiz bank (`quizzes.json`).

## Getting started

```bash
npm install        # installs both workspaces
npm run dev        # Express on :3001, Vite on :5173 (proxies /api)
```

Open http://localhost:5173.

### Production

```bash
npm run build      # builds client then server
npm start          # Express serves API + client/dist on :3001
```

### Tests & types

```bash
npm test           # Vitest: numerics reproduce textbook values
npm run typecheck  # tsc on client + server
```

## Features

- **Lessons** — sections 7.1–7.4 rendered from markdown with KaTeX equations, GFM tables, and equation numbers.
- **Playground** — pick a function, method (forward/backward/central difference, trapezoidal, Simpson, Gauss 2–5pt) and parameters; see the live approximation, reference value, error, and a geometric plot.
- **Quiz** — multiple-choice / true-false / numeric questions with instant feedback and session scoring.
