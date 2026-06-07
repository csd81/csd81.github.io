# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single bilingual (HU/EN) Vite + React + TypeScript web app — an interactive numerical-methods
textbook (10 chapters) plus a from-scratch **in-browser MATLAB/Octave interpreter** (`/sandbox`).
Published to <https://csd81.github.io> via GitHub Pages.

## Commands

```bash
npm run dev        # vite dev server (http://localhost:5173)
npm run build      # tsc -b && vite build  → dist/  (the real build; run this to verify)
npm run typecheck  # tsc -b --noEmit
npm run preview    # serve the built dist/
```

There is **no test framework**. Verify changes by building and, for the sandbox, by ad-hoc
scripts (see below). Deployment is automatic: **push to `main`** → `.github/workflows/deploy.yml`
builds and publishes to Pages. Commit and push only when asked.

## Two subsystems

### 1. The unified chapter app (`src/`)
- `src/shared/` is the one design system: `providers/` own the single source of truth for
  language (HU/EN `t`/`tBi` helper) and theme (light/dark); `ui/` has shared primitives
  (`Math`/KaTeX, `MarkdownView`, `Quiz`); `styles/tokens.css` holds the design tokens.
- `src/chapters/<slug>/` — one **lazy-loaded** folder per chapter (so Plotly/Mafs/recharts only
  download on their route). `registry.ts` is the slug↔chapter map with a `ready` flag (a `false`
  chapter renders a graceful "being migrated" card, keeping the site deployable mid-edit).
- `src/subjects/` and `src/pages/` host the calc/linalg books and standalone pages (incl. `/sandbox`).
- Each migrated chapter (originally a separate `0N` app) uses **thin context adapters** that
  re-export the shared providers, so the global nav toggles drive every chapter. Markdown is
  `react-markdown` + remark/rehype (KaTeX, raw `<details>`); chapter 2 is MDX via `@mdx-js/rollup`.

### 2. The MATLAB sandbox (`src/sandbox/`) — the bulk of recent work
A complete TS interpreter, **not** a wrapper around mathjs. Pipeline:
`lexer.ts → parser.ts → ast.ts → interp.ts`, evaluating over the `Value` union in `values.ts`.

- **`values.ts`** — the `Value` union (`Mat`, `Cell`, `StructV`, `Sparse`, `Str`, `ClassV`, `Sym`,
  `Table`, …). `Mat` is **column-major** (`data[r + c*rows]`, `Float64Array`, optional `idata` for
  complex). Canonical Mat↔rows adapters (`matRows`/`fromRows`) live here — don't re-invent them.
- **`builtins.ts`** — the largest file: hundreds of base MATLAB functions. **Base builtins shadow
  toolbox modules** on a name collision (a recurring trap: if a fix to a toolbox fn "doesn't take,"
  a base copy here is winning).
- **`linalg.ts`** — robust dense linear algebra (Francis-shift `schur`/eig, `qr`, `svd`, `expm`,
  `inv` returns ±Inf on singular MATLAB-style, `pinv`, `cond`). Toolboxes should import from here,
  not re-implement. Special functions live in `specfun.ts`, shared physical constants in
  `physconst.ts`. Symbolic engine: `sym.ts`/`sym-ops.ts`/`sym-builtins.ts`.
- **`tb/` — the toolbox framework**: ~40 `ToolboxModule`s (`{id, builtins, help, methods?, parents?}`)
  aggregated in `tb/index.ts`. Each module's help is split into a sibling `tb/help-<id>.ts`
  (`HELP_<ID>`). Method dispatch supports class inheritance via `CLASS_PARENTS`/`lookupMethod`
  (e.g. tf/ss/zpk → `lti`). Only validated modules are imported; unimplemented stubs are quarantined.
- **`worker.ts` + `useSandbox.ts`** — the interpreter runs in a **Web Worker**; `useSandbox` is the
  React bridge. Abort is **cooperative** (a macrotask-yield `onTick` lets a queued abort throw,
  preserving the workspace — no SharedArrayBuffer). Runs are **tokenized** (a mid-run reset can't
  post stale figure/done). The VFS is a `localStorage`-mirrored `Map`; `FigureSpec` (from
  `graphics.ts`) is rendered by `PlotlyFigure.tsx`.
- **`mfiles/courses/<NN-topic>/*.m`** — the teaching corpus, **auto-globbed** by `library.ts`
  (`import.meta.glob`); adding a `.m` file registers it. Folder-scoped: `folderSources(id)` is
  preloaded for that working dir.

## Non-obvious conventions (these have caused real bugs)

- **Value semantics**: indexed assignment (`indexSet`) mutates a `Mat`'s `data` **in place**.
  Value-copy semantics are enforced by cloning at the aliasing-creation points — plain `B = A`,
  multiassign targets, and function-argument binding (in `interp.ts`, via `cloneForSave`). Indexed
  assignment keeps its in-place fast path. Don't add aliasing paths without cloning.
- **`.m` local functions are globally scoped** — there is no file-private scope; the last-loaded
  function of a given name wins. When adding `.m` files, give local helpers **unique names**
  (e.g. `<file>_demo`, not `run_demo`).
- **Subscripts**: 1-based; non-integer and ≤0 indices error (MATLAB-strict). Array constructors
  clamp negative dims to 0.
- **Verifying sandbox edits** (the actual workflow — there's no test runner):
  - Build check: `npx tsc -b` is the real verification for `tb/*.ts` edits (`tsc --noEmit -p` has
    masked missing-import errors that broke CI).
  - Behavior check: esbuild-bundle a small TS file that `import { createSession }`s, run with `node`,
    and **compare to live MATLAB R2026a** (`matlab -nodisplay -nosplash -batch "…"`) when available —
    don't trust the sandbox against itself. Reviewers' "expected behavior" is often wrong; the oracle
    settles it. Caveat: never name a temp `.m` file `lti.m`/`ss.m`/`tf.m` (shadows MATLAB classes).
  - Render check: **`vite build` green ≠ pages render**. A runtime crash in `PlotlyFigure`/markdown
    deploys "green." Headless-Chrome the built `/sandbox` page before deploying figure/render changes.
- Numerical features must be **validated against an analytic oracle**, not just "the code runs"
  (e.g. PDE FEM checked against `(1−r²)/4`). MATLAB conventions are the source of truth — when in
  doubt, `matlab -batch "type <fn>"` dumps the real algorithm.
