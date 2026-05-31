# Plan — import ILA + Discrete Math + Number Theory into the React site

## Context

The Flask app at `/home/csd81/Desktop/0db/northwind-control-center` hosts educational math
material by **Hartung Ferenc (Pannon Egyetem)** — the *same author* as this numerics book — under
`/demos/learn/{ila,dimat,algo}`. The goal is to bring three of those subjects into **this** site
(the static Vite + React app deployed to `csd81.github.io` / GitHub Pages) so they share the same
chrome: top nav, dark mode, HU/EN toggle, KaTeX rendering, and the shared `MarkdownView` / `Quiz`
components. **No Flask backend is needed** — the content is just files; the Flask routes are
`@login_required` only because the parent app is auth-gated, which is irrelevant once the content
lives in the static React app.

Scope chosen by user: **dimat, algo, ILA** (NOT tetelsor). Sequencing: plan now; the in-progress
bilingual-flashcard task (ch3 s32–s37 + ch4–8) continues first.

## Source inventory

| Subject | Source form | Location | Volume | Bilingual? |
|---|---|---|---|---|
| **dimat** (discrete math) | Markdown | `content/dimat/<NN_Topic>/{README,quiz,solutions,exercise_checklist}.md` + `exercises/*.md`; many have `.hu.md` pairs | 18 topics, ~106 md | Partial (quiz/solutions/checklist have `.hu.md`; many `exercises/*` are EN-only) |
| **algo** (number theory) | Markdown body (sparse) + metadata in code + JSON | `content/algo/NN.md` (only `01.md` present), `_ALGO_CHAPTERS` list in `blueprints/demos_bp.py:4677`, `content/algo_exercises.json` | 13 ch (HU titles) + exercises | HU-only |
| **ILA** (logic/algebra foundations) | **Hand-authored interactive HTML** | `templates/demos/ila_ch1..18.html` (574–1062 lines each; inline `<script>`, `<canvas>`, KaTeX) + landing `templates/learn/ila.html` | 18 chapters | i18n via `.hu`/`.en` `<span>`s inside the HTML |

Note: dimat lesson *theory* is not in standalone `theory.md` files — the topic folders are
exercise/quiz/solution oriented (+ per-topic `README.md`). Narrative theory, if needed, lives in the
`templates/learn/dimat.html` landing (574 lines) and must be extracted from there.

## Target architecture (this repo)

Reuse the existing consolidated-app pattern (see `src/routes.tsx`, `src/chapters/registry.ts`,
shared `src/shared/ui/MarkdownView.tsx` = react-markdown + `rehype-raw` + KaTeX, and
`src/shared/ui/Quiz.tsx`). Add a sibling content area **"Foundations / Alapok"** with three new
subjects living under `src/subjects/{dimat,algo,ila}/` (mirrors `src/chapters/<slug>/`), each
lazy-loaded with its own route and a Home card. Everything inherits the existing
`LanguageProvider` (HU/EN), `ThemeProvider`, and nav automatically.

- New routes in `src/routes.tsx`: `dimat/*`, `number-theory/*`, `ila/*` (lazy `import()`).
- New Home cards in `src/pages/Home.tsx` (one per subject), optionally grouped under a "Foundations"
  heading separate from the 10 numerics chapters.
- Markdown is brought in as `?raw` imports (same as `introduction/content/theory/index.ts`) or via
  `import.meta.glob('./content/**/*.md', { query:'?raw', import:'default', eager:true })` to
  auto-wire whole trees.

## Per-subject implementation

### 1. dimat (discrete math) — EASY, do first
- Copy `content/dimat/` → `src/subjects/dimat/content/` (keep the `NN_Topic/` structure).
- `content/index.ts`: glob-import every `.md`; build a `TOPICS` registry of 18 topics, each exposing
  `{ readme, quiz, solutions, checklist, exercises[] }` with `.hu`/`.en` variants where present
  (fall back to the EN `.md` when a `.hu.md` is missing — flag these for later translation).
- Page: a topic list + per-topic view that renders README (intro), then a tabbed
  Exercises / Solutions / Checklist via `MarkdownView`, and the quiz via the shared **`Quiz`**
  component. The `quiz.md` files need a one-time parse into `QuizQuestion[]` (same shape used across
  ch1–10) — write a small `parseQuizMd()` or hand-convert per topic.
- Bilingual: pick `.hu`/`.en` by `useLang()`; partial HU exercises render EN with a small "EN only"
  badge (or queue for translation, consistent with the ongoing bilingualization effort).

### 2. algo (number theory) — EASY scaffolding, content gap
- Port `_ALGO_CHAPTERS` (13 entries: Bevezetés, Jelölések, Prímfelbontás, Algoritmusok sebessége,
  Alapfogalmak, … lnko és lkkt, Prímszámok eloszlása, Nevezetes problémák, Prímtesztelés,
  Maradékos osztás és Euklidesz, …) into `src/subjects/algo/content/chapters.ts`.
- Render chapter bodies from `content/algo/NN.md` via `MarkdownView`. **Caveat:** only `01.md`
  exists today — chapters 2–13 have no body markdown, so either (a) source the missing chapter text
  from the original book, or (b) ship the chapters that exist + the exercises and grow later.
- `algo_exercises.json` → an exercises viewer (it has `feladatok`/`sections`/`by_chapter` maps;
  render each exercise's statement/solution markdown with KaTeX). HU-only initially.

### 3. ILA (interactive) — HARD, phased
The 18 chapters are bespoke interactive HTML (canvas/JS/KaTeX widgets). `dangerouslySetInnerHTML`
will NOT run their inline `<script>`s, so a straight paste loses interactivity.

- **Phase A (fast, content-first):** for each chapter, split the HTML into (i) static prose/figures
  → convert to markdown/MDX rendered by `MarkdownView`, and (ii) interactive widgets. Ship Phase A
  with the widgets temporarily **iframe-embedded** from the original static HTML (copy the per-chapter
  HTML + its inline JS into `public/ila/chN.html`, embed via `<iframe>`), so interactivity is
  preserved immediately. The chapter i18n `<span class="hu">/<span class="en">` markup maps onto the
  site's HU/EN toggle (strip one language at build, or keep both and let CSS toggle).
- **Phase B (quality, incremental):** re-implement each chapter's widgets as real React components
  (the numerics app already bundles KaTeX, Plotly, and a code/CDP toolchain to model them on),
  retiring the iframes chapter by chapter. Budget ~18 chapters × bespoke widget work — the largest
  single item in this whole effort; do it lazily, highest-value chapters first.

## Shared/reused infrastructure (no new deps expected)
- `src/shared/ui/MarkdownView.tsx` — markdown + KaTeX + `rehype-raw` (handles `$…$`/`$$…$$` and inline HTML).
- `src/shared/ui/Quiz.tsx` — MCQ component (`QuizQuestion = {prompt:Bi|string, options:(Bi|string)[], answer, explanation}`).
- `LanguageProvider` / `ThemeProvider` / nav — automatic once routed.
- Math/asset pipeline already present; ILA iframes go under `public/`.

## Verification
- `npm run build` clean (TS) after each subject.
- Local check via the project's run/verify flow; spot-check KaTeX, HU/EN toggle, dark mode, and (for
  ILA) iframe widget interactivity.
- Deploy: `npm run build` → `touch dist/.nojekyll` → push `dist` to `gh-pages` → poll Pages build
  (same loop used for the chapters).

## Suggested order & rough effort
1. **dimat** (mechanical copy + glob + topic page + quiz parse) — small/medium.
2. **algo** (scaffold + render existing md + exercises JSON; flag missing chapter bodies) — small,
   but content-incomplete until chapter text is sourced.
3. **ILA Phase A** (prose→markdown + iframe widgets + landing) — medium.
4. **ILA Phase B** (Reactify widgets, 18 ch) — large, incremental, optional/ongoing.

## Open decisions for the user (when we execute)
- Group the three under a "Foundations / Alapok" section on Home, or list flat with the chapters?
- algo: source the missing chapter bodies (2–13), or ship what exists?
- ILA: accept iframe widgets for Phase A (fast), or hold ILA until widgets are Reactified?
- dimat partial-HU exercises: translate now (fits the bilingualization pass) or ship EN-flagged?
