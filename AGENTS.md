# Repository Guidelines

## Project Structure & Module Organization

This repository is a bilingual HU/EN Vite + React + TypeScript app for an interactive numerical-methods textbook and an in-browser MATLAB/Octave sandbox.

- `src/` contains the application code.
- `src/shared/` holds the common design system, providers, UI primitives, and tokens.
- `src/chapters/<slug>/` contains lazy-loaded textbook chapters.
- `src/pages/` and `src/subjects/` contain standalone pages and subject areas.
- `src/sandbox/` contains the sandbox UI and worker bridge.
- `src/sandbox/matlab/` contains the interpreter, builtins, toolboxes, and docs.
- `src/sandbox/matlab/mfiles/courses/` contains teaching `.m` files that are auto-globbed by `library.ts`.
- `public/` and `img/` contain static assets.

## Build, Test, and Development Commands

Run commands from the repository root:

```bash
npm run dev        # start Vite at http://localhost:5173
npm run build      # run tsc -b, then create the production Vite build
npm run typecheck  # run TypeScript project checks without emitting files
npm run preview    # serve the built dist/ output locally
```

There is no test framework; `npm run build` is the primary verification step.

## Coding Style & Naming Conventions

Use TypeScript and React patterns already present in nearby files. Keep modules narrowly scoped and prefer shared helpers over duplicating logic. In the sandbox, `Mat` data is column-major; use `matRows` and `fromRows` from `values.ts`.

Name chapter folders by route slug under `src/chapters/`. For `.m` files, avoid generic local helper names because local functions are globally scoped; prefer names such as `<file>_demo`.

## Testing Guidelines

For general changes, run:

```bash
npm run build
```

For sandbox behavior changes, use a small ad-hoc script that imports `createSession`; compare numerical behavior against MATLAB when available. For figure, Plotly, markdown, or page-rendering changes, also check the built page in a browser; a green Vite build does not guarantee runtime rendering.

## Commit & Pull Request Guidelines

Recent commits use concise scoped messages, for example:

```text
sandbox: validate subscript bounds for cells/structs/strings
sandbox: fix mixed-array & complex number display format
```

Use an imperative summary with a scope when useful, such as `sandbox: fix ...` or `chapters: update ...`.

Pull requests should include a description, affected routes or modules, verification commands, and screenshots for visible UI changes. Link related issues when applicable.

## Agent-Specific Notes

Base builtins in `src/sandbox/matlab/builtins.ts` shadow toolbox modules. If a toolbox change appears ineffective, check for a base builtin with the same name. Avoid unrelated refactors, and preserve existing user changes in the working tree.
