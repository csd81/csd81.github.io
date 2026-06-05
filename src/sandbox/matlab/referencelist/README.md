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

---

## Batch 3 — functions 21–30

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `addnode` | 🟡 | add nodes by count/name | setting `G.Nodes.<prop>` (Nodes as a table) not modeled |
| `addpoints` | 🟡 | append points to an animatedline | datetime/duration-valued animated lines unsupported |
| `addtodate` | ✅ | serial-date field arithmetic (needed `datenum` string parsing — fixed) | the two datetime+duration display examples differ cosmetically |
| `addvars` | ⛔(data) | builtin works | every doc example needs the `patients` sample dataset (not bundled) |
| `adjacency` | ✅ | sparse adjacency, `'weighted'`; now prints the `m×n sparse … (k nonzeros)` header | `G.Edges` as a displayed table not modeled |
| `airy` | ✅ | Airy Ai/Bi and derivatives | — |
| `all` | ✅ | **fixed**: dimension arg, vector-of-dims, `'all'`, N-D; returns logical | — |
| `allcycles` | ✅ | all cycles; **added** `[cycles,edgecycles]`, `MaxNumCycles`/Min/Max length | exact cycle *ordering* and `highlight`/plot examples differ |
| `allfinite` | ✅ | finite-test scalar over any-dim array | one example uses a common-scale-factor display (`1.0e+23 *`) |
| `allpaths` | ✅ | all paths; **added** `[paths,edgepaths]`, `MaxNumPaths`/Min/Max length | exact path *ordering* and `highlight`/plot examples differ |

### Fixes landed in this batch (several are cross-cutting)
- **N-D slice assignment** `A(:,:,k)=M` on a new/empty array now sizes the colon dims from the right-hand side (was producing 0×0×k garbage). Root-caused several N-D failures.
- `all`/`any` rewritten to honor a dimension scalar, a vector of dimensions, and the `'all'` option, with N-D support, returning a logical.
- `datenum("yyyy-mm-dd")` now parses date strings; `datetime(x,'ConvertFrom',type)` supports datenum/excel/posixtime/juliandate.
- **Sparse display** now prints the MATLAB header `m×n sparse double matrix (k nonzeros)` (also fixes accumarray's sparse output).
- **Cell/struct display** shows a small real vector inline, e.g. `{[1 2 3 6 5 4]}` (converged allcycles/allpaths).
- `allpaths`/`allcycles` gained second (edge-index) outputs and the MaxNum*/Min/MaxLength options.
- Rich ≥10-line help added for all batch-3 functions.
