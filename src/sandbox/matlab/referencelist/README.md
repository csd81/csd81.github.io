# Reference-list conformance audit

Systematic verification of the sandbox MATLAB interpreter against the official
MathWorks function help pages. For every implemented builtin that also appears in the
[MATLAB function reference list](https://www.mathworks.com/help/matlab/referencelist.html),
the worked examples on its help page are rendered (headless Chrome — the site bot-blocks
plain `curl`/fetch), run through the interpreter, and the numeric output is compared
against the documented result. Divergences are fixed until they converge.

- **Queue:** 1170 functions = implemented builtins (1412) ∩ MATLAB reference names (3834).
- **Batch size:** 10 functions per iteration.
- **Saved HTML** lives in this folder and is git-ignored (`*.html`).
- **Master checklist:** [`CHECKLIST.md`](./CHECKLIST.md) — per-function status, one line each.
- **Tooling:** `../../../../.fn-audit/` (fetch_batch.sh, extract.py, compare.py, queue.json, progress.json).

Status legend: ✅ converged · 🟡 partial (core works, some variants unsupported) · ⛔ not feasible (hardware / RNG / type system not modeled).

---

## Batch 1 — functions 1–10

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `GraphPlot` | 🟡 | `graph`/`plot(G)` render a node-link figure | Example outputs are plots (no numeric text to diff); `openfig`, `findobj('Marker',…)` handle queries unsupported |
| `MException` | 🟡 | construct, `throw`, `message`/`identifier`, `try/catch ME` | `ME.stack` frame display and interactive `input()` examples not modeled |
| `NaT` | 🟡 | `NaT`, **`NaT(n)`→n×n**, **`NaT(m,n)`**, `'Format'` accepted | indexed datetime assignment (`t(1,2)=datetime(…)`) needs a real `datetime` array type |
| `RandStream` | ⛔ | — | RNG stream object (`dsfmt19937`, substreams, `State`) + `rand(stream,…)`; values are non-deterministic so cannot match the doc anyway |
| `abort` | ⛔ | — | Ryze/Tello **drone hardware** support package — out of scope for a browser sandbox |
| `abs` | ✅ | real & complex magnitude; vectors/matrices | — |
| `abyss` | 🟡 | colormap data + `colormap abyss` | one example uses `heatmap` (separate unimplemented chart) |
| `accumarray` | ✅ | **rewritten**: vector & matrix subscripts (N-D), `sz`, custom `fun` (`@var`, `@(x)…`), `fillval`, **sparse** output | cell-valued reducers (`@(x){x}`) and native integer-type accumulation not modeled |
| `acos` | ✅ | **fixed**: complex result for complex input and for real `|x|>1` (principal branch) | — |
| `acosd` | ✅ | **fixed**: complex result out of `[-1,1]`; `cosd`/`sind` now accept complex | — |

### Fixes landed in this batch
- `acos`, `asin`, `atan` — complex-aware (new `cAsin`/`cAcos`/`cAtan` helpers; principal branch matches MATLAB, e.g. `acos([0.5i 1+3i -2.2+i])`).
- `acosd`, `asind` — complex out-of-domain; `cosd`/`sind` extended to complex arguments (so `cosd(acosd([2 3]))` → `[2 3]`).
- `accumarray` — full rewrite supporting matrix subscripts, explicit size, function handles via `env.callHandle`, fill value, and sparse output.
- `var`, `std` — now honor the normalization flag (`var(x,1)` = population variance), found via `accumarray(...,@(x)var(x,1))`.

---

## Batch 2 — functions 11–20

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `acosh` | ✅ | complex inverse hyperbolic cosine (principal branch, `acosh(-3)=1.7627+3.1416i`) | — |
| `acot` | ✅ | complex inverse cotangent with correct branch on the imaginary axis | — |
| `acotd` | ✅ | degrees variant, complex (`acotd(1+i)=31.7175-23.0535i`) | — |
| `acoth` | ✅ | complex inverse hyperbolic cotangent | — |
| `acsc` | ✅ | complex inverse cosecant | — |
| `acscd` | ✅ | degrees variant, complex | — |
| `acsch` | ✅ | complex inverse hyperbolic cosecant | — |
| `addboundary` | 🟡 | adds a boundary to a polyshape; `NumHoles` now shown | multi-region `NumRegions` tracking and `plot([poly array])` not modeled |
| `addcats` | 🟡 | append categories to a categorical | 2-D categorical construction from a string matrix unsupported |
| `addedge` | 🟡 | **fixed**: add by index/name/weight; missing named nodes auto-added | edge-`table` input form and `G.Edges` as a table not modeled |

### Fixes landed in this batch
- New complex helpers `cAsinh`/`cAcosh`/`cAtanh` + `cAcot`/`cAcsc`/`cAsec`/`cAcoth`/`cAcsch`/`cAsech` and an `ewc` complex-aware elementwise wrapper.
- `acosh`/`asinh`/`atanh`, `acot`/`acsc`/`asec`, `acoth`/`acsch`/`asech`, `acotd`/`acscd`/`asecd` now return complex on out-of-domain/complex input matching MATLAB branches.
- `addedge` auto-adds missing named endpoints (MATLAB semantics).
- polyshape display gained the `NumHoles` line.
- **Help:** `HelpEntry` extended with `description`/`examples`; rendered help is now ≥10 lines. Rich entries added for all batch-2 functions and for batch-1 `abs`/`acos`/`acosd`/`accumarray`.
