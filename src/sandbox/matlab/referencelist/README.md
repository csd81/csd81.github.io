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

---

## Batch 4 — functions 31–40

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `allunique` | ✅ | **fixed**: NaN treated as unique, string arrays, `'rows'` | `allunique(table)` and RowNames table display not modeled |
| `alpha` | 🟡 | transparency setter accepted | no visual transparency to verify (graphics) |
| `alphaShape` | 🟡 | 2-D/3-D alpha shapes, `Alpha`, area/volume | default-alpha heuristic differs; large 3-D sets not triangulated (guarded); boundaryFacets/stlwrite/trisurf chains pending |
| `alphaSpectrum` | ✅ | sorted alpha spectrum | — |
| `alphaTriangulation` | 🟡 | simplices of an alpha shape | large 3-D point sets return empty (hull too slow in JS) |
| `alphamap` | 🟡 | accepts alpha-map presets/vectors | figure alpha map not rendered |
| `amd` | ✅(algo) | greedy minimum-degree permutation | doc examples need the `barbellgraph` dataset |
| `angle` | ✅ | phase angle in (-pi,pi]; **command-form labels now parse** | — |
| `animatedline` | 🟡 | create/add/get points | datetime/duration lines, `orderedcolors`/`rgb2hex` examples pending |
| `annotation` | 🟡 | annotation objects accepted | floating annotations not rendered |

### Fixes landed in this batch (two are important robustness fixes)
- **Infinite-loop hang fixed**: `alphaShape`/N-D Delaunay over large 3-D point sets (~1250 pts) hung the interpreter; the pure-JS hull now bails above ~600 points (MATLAB uses Qhull). This had been freezing the whole audit run.
- **Lexer/command-syntax fix**: `'` after a value followed by a space is now a string, not transpose — so `ylabel 'Phase / \pi'`, `disp 'hi'`, `[3 'ab']` parse correctly (previously a parse error on `\`). Added xlabel/ylabel/zlabel/title/legend/disp/… to command syntax. Transpose (`A'`, `[1 2 3]'`) is unchanged.
- `allunique`: NaN/missing treated as unique; string-array and `'rows'` support.
- Rich ≥10-line help added for all batch-4 functions.

---

## Batch 5 — functions 41–50

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `any` | ✅ | dim/vecdim/`'all'`/N-D, returns logical (shares the `all` rewrite) | — |
| `anymissing` | ✅ | **extended**: NaN, NaT, "", `<undefined>`, cell/table contents | mixed-type table *display* still has a formatting crash |
| `anynan` | ✅ | NaN-only whole-array test (Inf is not flagged) | — |
| `append` | ✅ | **fixed**: element-wise string-array concatenation with broadcast | — |
| `area` | 🟡 | polyshape/alphaShape area value | filled-area plotting not verifiable (graphics) |
| `array2table` | ✅ | matrix→table, VariableNames/RowNames | — |
| `arrayfun` | ✅ | **rewritten**: struct arrays, `UniformOutput`, multiple outputs, complex | handles-returning + plot examples and rand-based outputs not comparable |
| `asec` | ✅ | complex inverse secant | — |
| `asecd` | ✅ | complex inverse secant (degrees) | — |
| `asech` | ✅ | complex inverse hyperbolic secant | — |

### Fixes landed in this batch (two are high-value)
- **Struct-array indexed-field assignment** `S(i).field = value` now creates/grows the struct array (was "undefined variable S"). This unblocks struct-array construction generally and the whole arrayfun example set.
- **`arrayfun` rewrite**: iterates struct arrays (passing each element), honors `'UniformOutput',false` (→ cell), supports multiple outputs `[a,b]=arrayfun(...)`, and preserves complex values.
- `append`: string arrays concatenate element-wise with scalar broadcast.
- `anymissing`: recognizes missing values across string/categorical/cell/table/datetime, not just numeric NaN.
- `asec`/`asecd`/`asech` already converged via the batch-2 complex inverse-trig work.
- Audit harness: examples are now tagged with their doc section (`<h2>`/`<h3>`), available for future cross-example isolation.
- Rich ≥10-line help added for all batch-5 functions.

---

## Batch 6 — functions 51–60

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `asin` | ✅ | complex inverse sine | — |
| `asind` | ✅ | complex inverse sine (degrees) | `sind(asind([2 3]))` leaves a ~1e-16 imaginary part (value correct, display shows complex) |
| `asinh` | ✅ | inverse hyperbolic sine (real & complex) | — |
| `assert` | ✅ | **improved**: sprintf-formatted messages, "Assertion failed." default | — |
| `atan` | ✅ | complex inverse tangent | — |
| `atan2` | ✅ | four-quadrant inverse tangent | — |
| `atan2d` | ✅ | four-quadrant, degrees | — |
| `atand` | ✅ | **fixed**: now complex-aware (`atand(10+i)`) | — |
| `atanh` | ✅ | **fixed**: correct MATLAB branch on `|x|>1` (`atanh(2)=0.5493+1.5708i`) | — |
| `autumn` | ✅ | red-orange-yellow colormap matrix | one example sets a `groot` default colormap (graphics root) |

### Fixes landed in this batch
- `atanh`: real inputs on the branch cut `|x|>1` now use MATLAB's sign convention (`x>1` → `+πi/2`, `x<-1` → `-πi/2`); the general complex formula was losing the sign of the zero imaginary part. Also corrects `acoth`/`acsch` round-trips.
- `atand`: complex-aware (via the `ewc`/`cAtan` machinery), matching `atan`.
- `assert`: supports `assert(cond,fmt,A1,...)` sprintf message formatting and MATLAB's default "Assertion failed." text.
- Audit harness: the comparator now recognizes examples whose documented output **is** an error (e.g. `assert` failures), so a correct error counts as a pass.
- Rich ≥10-line help added for all batch-6 functions.

---

## Batch 7 — functions 61–70

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `axis` | 🟡 | limits/mode setter | `l = axis` query needs live axes limits; tiledlayout-handle example pending |
| `balance` | ✅ | diagonal balancing for eigenvalue conditioning | (page had no runnable examples) |
| `bandwidth` | ✅ | **fixed**: honors `'lower'`/`'upper'`; `[lo,up]` form | — |
| `bar` | 🟡 | bar chart drawn | Bar-object property edits (`b.CData`, `b(2).Labels`) not modeled |
| `bar3` | 🟡 | 3-D bar chart drawn | surface-object property edits not modeled |
| `bar3h` | 🟡 | horizontal 3-D bar chart | grouped/stacked-style handle edits + tiledlayout |
| `barh` | 🟡 | horizontal bar chart | Bar-object endpoint/label property edits not modeled |
| `barycentricToCartesian` | ✅ | barycentric→Cartesian over a triangulation | — |
| `base2dec` | ✅ | **fixed**: string/char-matrix arrays (element-wise) | — |
| `bctree` | 🟡 | block-cut tree graph | Nodes/Edges as displayed tables and the 2nd output `ix` not modeled |

### Fixes landed in this batch
- `bandwidth(A,'lower'|'upper')` now selects the requested bandwidth (was always returning lower).
- `base2dec` handles string arrays and multi-row char arrays, returning one value per element.
- `orderedcolors(name)` **added** (gem/glow palettes; default 7-color order) and `rgb2hex` now converts an N×3 RGB matrix to a string array of `#RRGGBB` codes. These unblock bar/barh/animatedline examples that build a palette.
- Rich ≥10-line help added for all batch-7 functions.

---

## Batch 8 — functions 71–80 (special functions)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `beep` | ✅ | accepted (on/off) | no audio device in the sandbox (silent) |
| `besselh` | ✅ | Hankel H^(1)/H^(2), scaled form | — |
| `besseli` | ✅ | modified Bessel I, scaled form | — |
| `besselj` | ✅ | Bessel J (real & complex) | — |
| `besselk` | ✅ | modified Bessel K, scaled form | — |
| `bessely` | ✅ | Bessel Y / Neumann | — |
| `beta` | ✅ | beta function; now displays under `format rat` | — |
| `betainc` | ✅ | **fixed**: vectorized over all 3 args; `'upper'` tail | — |
| `betaincinv` | ✅ | inverse incomplete beta | — |
| `betaln` | ✅ | **fixed**: accurate for large args (no overflow) | — |

### Fixes landed in this batch (one is broad)
- **`logGamma`/`gammaln` overflow fixed**: it was computed as `log(abs(gamma(x)))`, which returns `Inf`/`NaN` for `x ≳ 171`. Reimplemented directly via Lanczos, so `gammaln`, `betaln`, and any statistics code using log-gamma now work for large arguments (`betaln(510,510) = -708.8616`).
- `betainc` now broadcasts over `(X,Z,W)` element-wise and supports the `'upper'` tail.
- `format rat` implemented: numbers display as continued-fraction `p/q` approximations (`beta((1:10)',3)` → `1/3 1/12 1/30 ...`).
- Rich ≥10-line help added for all batch-8 functions.

All 35 batch-8 examples pass.

---

## Batch 9 — functions 81–90 (graph search · iterative solvers · bit ops)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `bfsearch` | 🟡 | BFS node order | the events/`'allevents'` search-event **table** mode not modeled |
| `bicg` | 🟡 | Biconjugate Gradients solver | doc examples use random matrices/`load west0479`, so convergence messages can't match MATLAB's RNG/datasets |
| `bicgstab` | 🟡 | BiCGSTAB solver | same: random/dataset-dependent output |
| `bicgstabl` | 🟡 | BiCGSTAB(l) solver | same: random/dataset-dependent output |
| `biconncomp` | 🟡 | biconnected components per edge (1st output matches) | `'OutputForm','cell'` and the 2nd output not modeled |
| `bin2dec` | ✅ | **fixed**: string arrays (element-wise); `0b` literals | — |
| `bitand` | ✅ | bit-wise AND | — |
| `bitcmp` | ✅ | type-width complement | — |
| `bitget` | ✅ | bit at position(s) | — |
| `bitor` | ✅ | bit-wise OR; byte-packing via bitshift | `format hex` display mode not modeled (values are correct) |

### Fixes landed in this batch (the literal/lexer fix is broad)
- **Binary and hexadecimal literals**: the lexer now parses `0b1011` / `0x1F` (with optional `u8`/`s16`/… type suffixes), so bit-op and integer-packing examples across the docs work.
- `bin2dec` handles string arrays / multi-row char arrays (one value per element).
- **`true(m,n)` / `false(m,n)`** now accept size arguments and return logical arrays (were constants only) — `false(1,numnodes(g))` etc.
- `rng` added to command syntax so `rng default` / `rng shuffle` parse.
- Rich ≥10-line help added for all batch-9 functions.

---

## Batch 10 — functions 91–100

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `bitset` | ✅ | **fixed**: type arg + vectorized over (A,pos,val) | — |
| `bitshift` | ✅ | **fixed**: `assumedtype` masking to integer width | the type-less uint8 loop needs integer-type tracking; `format hex` display |
| `bitxor` | ✅ | bit-wise XOR | — |
| `blanks` | ✅ | string of n spaces | — |
| `blkdiag` | ✅ | block-diagonal assembly | — |
| `bone` | ✅ | bone colormap matrix | one example sets a `groot` default colormap |
| `boundary` | 🟡 | **fixed**: matrix/3-D input, area/volume (convex-hull) | exact shrink-factor (alpha) boundary volume differs |
| `boundaryFacets` | 🟡 | alpha-shape boundary facets | the `[bf,P]` 2-output form pending |
| `boundaryshape` | 🟡 | triangulation→polyshape | NumRegions display detail |
| `boundingbox` | 🟡 | polyshape bounding box | multi-boundary (holes) polyshape construction pending |

### Fixes landed in this batch (two are broad display fixes)
- **`dec2bin` / `dec2hex` / `dec2base` vectorized**: a vector argument now returns a char matrix (one row per value), e.g. `dec2bin([12 20 33])`.
- **Multi-row char-matrix display fixed**: char arrays with >1 row now print one row per line instead of a single column-major-flattened string (affects all char-matrix output across the interpreter).
- **`vertcat` preserves `isChar`**: `['ab';'cd']` is now a char matrix, not numeric codes.
- `bitshift`/`bitset` honor an `assumedtype` argument (mask/wrap to the integer width) and `bitset` vectorizes over `(A,pos,val)` via broadcasting.
- `boundary` accepts a single point matrix and 3-D input without crashing, returning area/volume.
- Rich ≥10-line help added for all batch-10 functions.

---

## Batch 11 — functions 101–110

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `bounds` | ✅ | **fixed**: dim, vector-of-dims, `'all'`, N-D | — |
| `box` | ✅ | axes outline on/off/toggle | — |
| `brighten` | ✅ | brighten/darken a colormap | — |
| `bsxfun` | ✅ | element-wise apply with implicit expansion | — |
| `bvp4c` | 🟡 | collocation BVP solver present | examples define page-local functions (`@guess`,`@bvpfcn`) the harness can't resolve; plot-based |
| `bvp5c` | 🟡 | collocation BVP solver present | same: page-local functions + plotting |
| `bvpget` | ✅ | read a BVP option | — |
| `bvpinit` | 🟡 | build the initial-guess structure | examples chain into bvp4c with page-local functions |
| `bvpset` | ✅ | build/modify a BVP options structure | — |
| `bvpxtend` | ✅ | extend a BVP solution to a new mesh point | — |

### Fixes landed in this batch
- **`bounds`** now honors a dimension argument, a vector of dimensions, and the `'all'` option, with N-D support — `[s,l] = bounds(A,2)`, `bounds(A,[1 2 3])`, `bounds(A,"all")` (mirrors the earlier `all`/`any` fix).
- The remaining `bounds` "failures" are harness cross-example leaks (the doc reuses the variable `A` across independent example sections); each works correctly in isolation.
- Rich ≥10-line help added for all batch-11 functions.

---

## Batch 12 — functions 111–120

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `camlight` | 🟡 | light-at-camera accepted | lighting/shading not rendered (graphics) |
| `cart2pol` | ✅ | **fixed**: 3-output cylindrical `[theta,rho,z]` | — |
| `cart2sph` | ✅ | spherical coordinates | — |
| `cartesianToBarycentric` | ✅ | Cartesian→barycentric over a triangulation | — |
| `cast` | 🟡 | cast to a numeric class | integer-type metadata only partly tracked; `cast(A,like=p)` complex/sparse and `whos` byte report |
| `cat` | ✅ | concatenate along any dimension | table-name-from-variable-name examples need `inputname` |
| `categorical` | ✅ | **fixed**: valueset/catnames constructor, ==/~=/ordinal </>, indexing | table-backed examples and cell-vs-string category display |
| `categories` | ✅ | list a categorical's categories | — |
| `ccxGate` | ✅ | Toffoli gate object | — |
| `cdf2rdf` | 🟡 | complex→real block-diagonal | eigenvector sign/scaling freedom differs from MATLAB |

### Fixes landed in this batch (several are general)
- **`NaN(m,n)` / `Inf(m,n)`** now accept size arguments and return arrays (were constants only), mirroring the earlier `true`/`false` fix.
- **`categorical` constructor** supports the `categorical(A,valueset,catnames)` form and the `"Ordinal",true` flag, so categories get their intended names/order.
- **Categorical comparison operators** `==`, `~=`, and ordinal `<`/`>`/`<=`/`>=` now work element-wise (by label, or by category order for ordinal arrays).
- **Categorical indexing** `C(idx)` / `C(mask)` returns a categorical subset preserving the category list.
- `cart2pol` / `pol2cart` return the pass-through `z` as a third output (cylindrical coordinates).
- `zeros`/`ones`/`rand`/… ignore a trailing class-name argument (e.g. `zeros(2,3,'uint32')`) instead of erroring.
- Rich ≥10-line help added for all batch-12 functions.

---

## Batch 13 — functions 121–130 (cell arrays · graph)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `ceil` | ✅ | **fixed**: complex (both parts) | `ceil(duration,'hours')` needs duration-type support |
| `cell` | ✅ | preallocate cell arrays; **row-grow `C(2,:)={...}`** fixed | — |
| `cell2mat` | ✅ | assemble matrix from a cell of blocks | — |
| `cell2struct` | 🟡 | cell→struct array | examples mixing string literals in cell rows need string-cell display |
| `cell2table` | 🟡 | cell→table | column-name-from-variable examples need `inputname` |
| `celldisp` | 🟡 | recursive cell dump | exact per-element label format differs |
| `cellfun` | ✅ | apply over cells, `UniformOutput`, multi-output | — |
| `cellstr` | ✅ | **fixed**: string-array input | — |
| `centrality` | 🟡 | degree/closeness/betweenness/pagerank | `G.Nodes.<prop> = ...` (Nodes table column assignment) not modeled |
| `centroid` | 🟡 | polyshape centroid | multi-boundary (holes) polyshape construction pending |

### Fixes landed in this batch (two are broad display/numeric fixes)
- **`floor` / `ceil` / `fix`** are now complex-aware (round each of the real and imaginary parts), matching `round`.
- **`cellstr`** accepts a string array (one cell per element), not just a char matrix.
- **Cell paren-assignment grows in 2-D**: `C(2,:) = {a,b}` extends the cell array (rows/cols) instead of failing.
- **Inline cell/struct display refined**: a short *row* vector shows inline (`{[1 2 3]}`), while columns and matrices show a size summary (`{2×1 double}`, `{3×3 double}`) — matching MATLAB exactly.
- Rich ≥10-line help added for all batch-13 functions.

---

## Batch 14 — functions 131–140

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `cgs` | 🟡 | Conjugate-Gradients-Squared solver present | doc examples use random matrices / `load west0479`, non-matchable |
| `chGate` | 🟡 | controlled-Hadamard gate object | gate-matrix display detail |
| `char` | ✅ | **fixed**: string-array / cellstr / multi-arg → char matrix | `whos` byte report; one string-vs-char doc display |
| `chol` | ✅ | **fixed**: `'lower'` factor and `[R,flag]` non-erroring form | `load west0479` dataset example |
| `cholupdate` | ✅ | rank-1 Cholesky update/downdate | — |
| `circshift` | ✅ | **fixed**: dimension argument `circshift(A,K,dim)` | — |
| `circumcenter` | 🟡 | triangulation circumcenters | doc examples need `load trimesh2d` dataset |
| `cla` | 🟡 | clear-axes accepted | nothing rendered to verify |
| `class` | ✅ | class-name of a value | Java-object example unsupported |
| `clc` | ✅ | clear command window | one example shows `rand` output (non-deterministic) |

### Fixes landed in this batch
- **`chol(A,'lower')`** returns the lower factor `L` (was always returning upper `R`).
- **`[R,flag] = chol(A)`** no longer errors on a non-positive-definite matrix — it returns the failing pivot index in `flag` and the factor of the leading positive-definite block.
- **`circshift(A,K,dim)`** honors the dimension argument (was ignoring it and shifting dim 1).
- **`char`** accepts string arrays, cellstr, multi-row numeric input, and multiple stacked arguments, building a space-padded char matrix.
- Rich ≥10-line help added for all batch-14 functions.

---

## Batch 15 — functions 141–150

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `clear` | 🟡 | remove workspace variables | `whos` byte report format |
| `clearpoints` | ✅ | clear an animated line | — |
| `clf` | 🟡 | clear-figure accepted | nothing rendered to verify |
| `clim` | 🟡 | color-limit setter accepted | not rendered |
| `clip` | ✅ | **fixed**: vector/array `lower`/`upper` via implicit expansion | table `DataVariables` form pending |
| `clock` | 🟡 | current time as 1×6 | output is the live clock (non-deterministic) |
| `close` | 🟡 | close-figure accepted | nothing rendered to verify |
| `cmap2gray` | 🟡 | colormap→grayscale | doc examples need `clown.mat` image data |
| `cnotGate` | 🟡 | CNOT gate object | gate-matrix display detail |
| `colamd` | 🟡 | column min-degree ordering | doc examples need `west0479` dataset |

### Fixes landed in this batch
- **`clip`** now accepts vector/array `lower` and `upper` bounds, broadcasting them against `X`.
- **`broadcast3` upgraded to 2-D implicit expansion** (singleton rows/columns broadcast, not just scalars) — this also benefits `betainc` and `bitset`, e.g. `clip(X,[1 2 3 4],6)` clips each column to its own lower bound.
- Rich ≥10-line help added for all batch-15 functions.

---

## Batch 16 — functions 151–160

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `colon` | ✅ | **fixed**: non-scalar bound uses first element (`1:size(A)`) | `gpuArray.colon` unsupported |
| `colorbar` | 🟡 | colorbar accepted | nothing rendered to verify |
| `colorcube` | 🟡 | colormap matrix | colormap-application example |
| `colormap` | 🟡 | set named/RGB colormap | `cmap = colormap` query needs colormap-state tracking |
| `colororder` | 🟡 | line color order accepted | `yyaxis`/`nexttile` graphics examples |
| `colperm` | ✅ | column permutation by nonzero count | (page had no runnable examples) |
| `combine` | 🟡 | symbolic-term combine | datastore `combine` examples need image datastores |
| `comet` | 🟡 | animated comet accepted | not rendered |
| `comet3` | 🟡 | animated 3-D comet accepted | not rendered |
| `compan` | ✅ | companion matrix | `eig` returns the same roots in a different order |

### Fixes landed in this batch
- **`colon` / the `:` operator** now uses the first element of a non-scalar bound (matching MATLAB), so the common `1:size(A)` idiom returns `1:size(A,1)` instead of erroring; an empty bound yields an empty range. Normal scalar ranges are unchanged.
- Rich ≥10-line help added for all batch-16 functions.

---

## Batch 17 — functions 161–170

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `compass` | 🟡 | polar arrows accepted | `compassplot` and rendering not modeled |
| `complex` | ✅ | construct complex arrays | — |
| `compose` | ✅ | **fixed**: vectorized string array; single-matrix row grouping | escape-sequence / string-array-format nuances |
| `compositeGate` | 🟡 | composite gate object | gate-block display detail |
| `cond` | ✅ | **fixed**: p-norm `cond(A,p)` (1/Inf/fro) | — |
| `condeig` | ✅ | eigenvalue condition numbers | — |
| `condensation` | ✅ | SCC condensation DAG | — |
| `condest` | ✅ | 1-norm condition estimate | — |
| `coneplot` | 🟡 | cone vector field accepted | not rendered |
| `conj` | ✅ | complex conjugate | — |

### Fixes landed in this batch
- **`cond(A,p)`** honors the norm argument — for p ≠ 2 it computes `norm(A,p)·norm(inv(A),p)` (1-norm, Inf-norm, Frobenius), instead of always returning the 2-norm value.
- **`compose`** is now vectorized: array arguments produce a string array (one string per element-tuple), and a single matrix argument with a multi-conversion format groups each row's values per format (`compose("%d:%d",[8 15 9 30])` → `["8:15" "9:30"]`).
- Rich ≥10-line help added for all batch-17 functions.

---

## Batch 18 — functions 171–180

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `conncomp` | 🟡 | connected components per node | component *numbering* order differs from MATLAB |
| `containers.Map` | ✅ | **fixed**: vector/string-array/cell key+value sets | — |
| `contains` | 🟡 | substring/cellstr containment | `pattern` objects (digitsPattern, …) not modeled |
| `contour` | 🟡 | contour plot drawn | — |
| `contour3` | 🟡 | 3-D contour drawn | — |
| `contourc` | 🟡 | contour matrix | level selection / point ordering differs from MATLAB |
| `contourf` | 🟡 | filled contour drawn | — |
| `contourslice` | 🟡 | contour planes accepted | not rendered |
| `conv` | ✅ | **fixed**: `'same'`/`'valid'` shapes; column orientation | — |
| `conv2` | ✅ | 2-D conv with shapes | doc examples use random matrices (non-matchable) |

### Fixes landed in this batch
- **`conv`** honors the `'same'` and `'valid'` shape options (central / fully-overlapping part) and preserves the row/column orientation of the first input.
- **`containers.Map(keySet,valueSet)`** now expands numeric vectors, string arrays, and cells into one entry per key/value (previously a numeric `valueSet` was stored as a single value, so all but the first key mapped to 0); numeric-key maps and `M(key)` lookup work.
- Rich ≥10-line help added for all batch-18 functions (including `containers.Map`).

---

## Batch 19 — functions 181–190

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `convertCharsToStrings` | ✅ | **fixed**: multiple inputs→outputs | — |
| `convertStringsToChars` | ✅ | **fixed**: multiple inputs→outputs | — |
| `convexHull` | 🟡 | hull of a delaunayTriangulation | `[C,v]` 2-output (volume) on a triangulation pending |
| `convhull` | ✅ | **fixed**: matrix input `convhull(P)`, area 2nd output | — |
| `convhulln` | ✅ | N-D convex hull + volume | — |
| `convn` | ✅ | N-D convolution with shapes | doc examples use random arrays (non-matchable) |
| `cool` | ✅ | cool colormap | one example sets a `groot` default |
| `copper` | ✅ | copper colormap | one example sets a `groot` default |
| `corrcoef` | ✅ | correlation matrix (verified on deterministic data) | doc examples use `randn` (non-matchable) |
| `cos` | ✅ | cosine (real & complex) | — |

### Fixes landed in this batch
- **`convhull`** accepts a single N-by-2 point matrix (`convhull(P)`) in addition to `convhull(x,y)`, and returns the enclosed area as a second output.
- **`convertCharsToStrings` / `convertStringsToChars`** support the multiple-input/multiple-output form, converting each argument and returning one output per input.
- Verified `corrcoef` is correct (perfect correlations return exactly 1); its example failures are due to random input data.
- Rich ≥10-line help added for all batch-19 functions.

---

## Batch 20 — functions 191–200

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `cosd` | ✅ | cosine in degrees | one example uses common-scale-factor display |
| `cosh` | ✅ | hyperbolic cosine | common-scale-factor (`1.0e+03 *`) display not modeled |
| `cospi` | ✅ | accurate cos(pi*x) | — |
| `cot` | ✅ | **fixed**: complex cotangent | — |
| `cotd` | ✅ | cotangent in degrees (needed `eps(x)` — fixed) | common-scale-factor display |
| `coth` | ✅ | hyperbolic cotangent | — |
| `count` | 🟡 | count substring occurrences | `pattern` objects not modeled |
| `countcats` | 🟡 | count per category | `summary(categorical)` not modeled |
| `cov` | ✅ | **fixed**: `cov(A,B)` two-matrix form + normalization flag `w` | `'omitrows'` NaN flag pending |
| `cplxpair` | ✅ | sort into conjugate pairs | — |

### Fixes landed in this batch
- **`cot`** is now complex-aware (`cot(-1i) = 0 + 1.3130i`), via a complex `cos/sin` quotient.
- **`cov(A,B)`** with two matrices flattens each to a vector and returns the 2×2 covariance; the normalization flag `w` (`cov(A,1)` divides by N) is honored for both the matrix and vector forms.
- **`eps(x)`** added: returns the ulp (unit in the last place) at x — `eps(90) = 1.4211e-14`, `eps("single")` — in addition to the bare `eps` constant.
- Rich ≥10-line help added for all batch-20 functions (and `eps`).
- Noted gap: MATLAB's common-scale-factor matrix display (`1.0e+03 *`) is not yet implemented; this is the only remaining diff for `cosh`/`cotd`.

---

## Batch 21 — functions 201–210

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `cputime` | 🟡 | returns CPU time | timing output is non-deterministic |
| `cr1Gate` | 🟡 | controlled-phase gate object | `getMatrix` / vectorized construction not modeled |
| `criticalAlpha` | 🟡 | critical alpha radius | depends on alpha-shape internals |
| `cross` | ✅ | cross product (verified) | doc examples use random matrices |
| `crxGate` | 🟡 | controlled-RX gate object | `getMatrix` / vectorized gates pending |
| `cryGate` | 🟡 | controlled-RY gate object | `getMatrix` / vectorized gates pending |
| `crzGate` | 🟡 | controlled-RZ gate object | `getMatrix` / vectorized gates pending |
| `csc` | ✅ | **fixed**: complex cosecant | — |
| `cscd` | ✅ | **fixed**: complex + exact `cscd(180)=Inf` | — |
| `csch` | ✅ | **fixed**: complex hyperbolic cosecant | — |

### Fixes landed in this batch (completes the reciprocal-trig family)
- **`csc`, `sec`, `csch`, `sech`, `coth`** are now complex-aware (reciprocals of the complex `sin`/`cos`/`sinh`/`cosh`).
- **`cscd`, `secd`, `cotd`** are complex-aware too, and the degree functions now use exact zeros at multiples of 90/180, so `cscd(180)` and `secd(90)` return `Inf` (and `sind(180)`/`cosd(90)` return exactly 0) instead of huge finite values.
- Rich ≥10-line help added for all batch-21 functions.

---

## Batch 22 — functions 211–220

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `csvread` | 🟡 | reads a CSV file via the VFS | doc examples reference files not present |
| `csvwrite` | 🟡 | writes a CSV file to the VFS | nothing to diff against the doc |
| `ctranspose` | ✅ | conjugate transpose | — |
| `cummax` | ✅ | **fixed**: `dim`, `'reverse'`, `'omitnan'` | doc examples use random data |
| `cummin` | ✅ | **fixed**: `dim`, `'reverse'`, `'omitnan'` | doc examples use random data |
| `cumprod` | ✅ | **fixed**: `'reverse'`, `'omitnan'` | random-data examples |
| `cumsum` | ✅ | **fixed**: `'reverse'`, `'omitnan'` | random-data examples |
| `cumtrapz` | ✅ | cumulative trapezoidal integral | — |
| `curl` | 🟡 | curl of a vector field | doc examples need the `wind` dataset |
| `cxGate` | 🟡 | CNOT gate object | `getMatrix`/vectorized gates pending |

### Fixes landed in this batch
- **`cumsum` / `cumprod` / `cummax` / `cummin`** now honor the `'reverse'` direction and the `'omitnan'` flag (in addition to the dimension argument), via a unified cumulative helper and a reverse-capable scan. `cumsum([1 2 3 4],"reverse")` → `[10 9 7 4]`; `cumsum([1 NaN 3],"omitnan")` → `[1 1 4]`. Defaults (forward, NaN-propagating) are unchanged.
- **`randi([imin imax], ...)`** range form now works (previously only `randi(imax,...)` was accepted) — used throughout the cumulative-function examples.
- Rich ≥10-line help added for all batch-22 functions.

---

## Batch 23 — functions 221–230 (mostly date/time)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `cyGate` | 🟡 | controlled-Y gate object | `getMatrix`/vectorized gates pending |
| `cyclebasis` | 🟡 | fundamental cycle basis | cycle *rotation* (starting node) differs from MATLAB |
| `cylinder` | 🟡 | cylinder surface coordinates | surface rendering not verifiable |
| `czGate` | 🟡 | controlled-Z gate object | `getMatrix`/vectorized gates pending |
| `daspect` | 🟡 | data-aspect setter | nothing rendered to verify |
| `date` | 🟡 | current date string | live clock (non-deterministic) |
| `datenum` | ✅ | serial number from components / string / vector | — |
| `datestr` | 🟡 | **improved**: date-vector and datetime input, multi-row char | many format-code / string-parse variants pending |
| `datetime` | 🟡 | **improved**: `string(d)`, `.Year`/`.Month`/… properties, `.Format=` no longer corrupts the value | cellstr/`InputFormat` constructors, array concatenation, format strings — major gap |
| `datevec` | 🟡 | component vector from number/datetime | string+format parsing pending |

### Fixes landed in this batch (datetime-type improvements)
- **`string(datetime)`** now returns a formatted date string (was `"[object Object]"`); `string(categorical)` returns category names.
- **datetime field access** `d.Year` / `d.Month` / `d.Day` / `d.Hour` / `d.Minute` / `d.Second` now work.
- **`d.Format = ...` / `d.TimeZone = ...`** no longer turn a datetime into a struct (display-only properties are accepted and ignored).
- **`datestr`** accepts a `[Y M D H MI S]` date vector (and N×6), a datetime array, and returns a multi-row char array for several dates.
- Noted major gap: the `datetime` type still needs constructor text-parsing (cellstr/`InputFormat`/name-value), type-preserving concatenation, and custom format strings; many of this batch's examples are also non-deterministic (`datetime("now")`, `date`, `clock`).
- Rich ≥10-line help added for all batch-23 functions.

## Batch 24 — functions 231–240 (duration/datetime accessors · DDE solvers · deal/deblank)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `day` | ✅ | **fixed**: `dayType` argument — `dayofmonth` (default), `dayofweek` (1=Sun..7=Sat), `dayofyear`, `name`/`shortname` (string array) | — |
| `days` | ✅ | **fixed**: a `days(x)` duration now displays as `"N days"` instead of `hh:mm:ss`; `days(duration)` extracts the day count | — |
| `dblquad` | ✅ | double integral over a rectangle, forwarded to `integral2`; verified to 1e-6 | — |
| `dde23` | ✅ | constant-delay DDE solver; `sol.x`/`sol.y` + `deval` | — |
| `ddeget` | ✅ | reads a DDE option with optional default | — |
| `ddensd` | ✅ | neutral DDE solver (delayed `y` and `y'`) | — |
| `ddesd` | ✅ | state-dependent-delay DDE solver | — |
| `ddeset` | ✅ | builds/overrides a DDE options struct (RelTol/AbsTol/MaxStep/…) | — |
| `deal` | ✅ | **fixed**: `[C{:}] = deal(...)` now expands into cell contents; `[a,b,c]=deal(x)` and positional form verified | `@(x)deal(...)` anon edge cases niche |
| `deblank` | ✅ | **fixed**: trims trailing whitespace per element of a cell/string array (not just a char row) | — |

### Fixes landed in this batch
- **Duration display format**: `durUnit` now tags the duration with a unit hint (`y`/`d`/`h`/`m`/`s`/`ms`) and `fmtTemporal` honors it, so `days(magic(2))`, `hours(2)`, `minutes(5)`, `seconds(10)`, `years(1)` print `"1 day  3 days …"`, `"2 hr"`, `"5 min"`, etc. instead of always `hh:mm:ss`.
- **`day(t,dayType)`**: the second argument is now read; `dayofweek`/`dayofyear`/`name`/`shortname` were previously ignored (always returned day-of-month).
- **`[C{:}] = deal(...)`**: the multiassign handler expands a `C{:}` LHS into the cell's elements so several outputs land in one cell.
- **`deblank`** handles cell arrays and string arrays element-wise.
- Rich ≥10-line help added for all batch-24 functions (incl. new structured entries for `ddensd` and `deblank`).

## Batch 25 — functions 241–250 (radix conversion · implicit/DDE ICs · deconv/del2 · graph degree)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `dec2base` | ✅ | bases 2–36, width padding; two's-complement negatives | — |
| `dec2bin` | ✅ | **fixed**: `dec2bin(-1)="11111111"`, `dec2bin(-16)="11110000"` (was 32-bit) | — |
| `dec2hex` | ✅ | **fixed**: `dec2hex(-1)="FF"`, `dec2hex(-16)="F0"` (was signed `-1`) | — |
| `decic` | ✅ | **fixed**: honors `fixed_y0`/`fixed_yp0`, Newton-solves free components → `[1;-1],[-0.5;0]` | — |
| `decomposition` | 🟡 | factor-and-reuse solve `dA\b` works numerically | returns plain matrix — `class(dA)` is `double`, no object/property model |
| `deconv` | ✅ | `[q,r]=deconv(u,v)` polynomial long division | — |
| `deg2rad` | ✅ | `deg2rad(90)=1.5708` | — |
| `degree` | ✅ | node degrees; `degree(G,nodeIDs)` incl. cell node-name lists | — |
| `del2` | ✅ | **fixed**: boundary linear extrapolation → `4*del2([1 3 6 10 16 18 29])=[1 1 1 2 -4 9 22]` | nonuniform-spacing `h` args accepted but not scaled |
| `delaunay` | 🟡 | builds a valid Delaunay triangulation (vertex-index triples) | exact triangle set depends on RNG-seeded points / insertion order |

### Fixes landed in this batch
- **Two's-complement radix output**: a new `baseStr(d,base)` helper renders negative integers in the smallest byte-multiple two's-complement width for `dec2bin`/`dec2hex`/`dec2base` (was emitting 32-bit or signed-`-` strings).
- **`decic`**: rewritten to read the `fixed_y0`/`fixed_yp0` masks and Newton-solve only the *free* components of both `y0` and `yp0` (min-norm step when under-determined); previously it ignored the masks and only perturbed `yp0`, returning `NaN`.
- **`del2` boundaries**: interior uses the central second difference; borders now use MATLAB's linear extrapolation `L(1)=2*L(2)-L(3)` (both 1-D and 2-D), fixing the wrong last element.
- **Cell / string-array transpose** (`{...}'`, `S'`): the postfix `'`/`.'` operators now rearrange cell and string arrays instead of throwing "expected a numeric value" — this is what unblocked `degree(G,{'a','c','e'}')`.
- Rich ≥10-line help added for all batch-25 functions.

## Batch 26 — functions 251–260 (triangulation · det/diag/diff core linalg · graph DFS · dictionary)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `delaunayTriangulation` | 🟡 | builds the triangle/tetra connectivity list | returns a plain matrix — no object, `ConnectivityList`/`Points` property access |
| `delaunayn` | ✅ | N-D Delaunay simplex index list (n+1 cols) | — |
| `delete` | ✅ | removes VFS files and graphics handles | — |
| `det` | ✅ | `det([1 -2 4;-5 2 0;1 0 3])=-32`, `det(eye(10)*1e-4)=1e-40` | — |
| `detrend` | ✅ | `detrend(A,'constant')` column-mean removal; linear/poly | — |
| `deval` | ✅ | evaluates ODE/BVP/DDE solution structures | — |
| `dfsearch` | ✅ | depth-first discovery order; `'allevents'` table | — |
| `diag` | ✅ | **fixed**: `diag(v,k)` / `diag(A,k)` offset diagonals; complex preserved | — |
| `dictionary` | ✅ | key→value map; lookup, insert, `numEntries` | — |
| `diff` | ✅ | **fixed**: `diff(X,n)` order and `diff(X,n,dim)` dimension | — |

### Fixes landed in this batch
- **`diag` k-offset**: the second argument was ignored — `diag(v,1)`/`diag(A,-1)` now place/extract the k-th super/sub-diagonal (was always the main diagonal). The core `linalg.diag` also now preserves the imaginary part, so `diag([1+2i 3-1i])` keeps its complex values.
- **`diff` order and dimension**: `diff(X,n)` was applying only a single first difference and `diff(X,n,dim)` ignored `dim` (always worked down columns). Rewrote with a complex-aware `diffOnce(M,dim)` applied `n` times → `diff([0 5 15 30 50 75 105],2)=[5 5 5 5 5]`, `diff(X,1,2)` works across rows. Default dimension is the first non-singleton.
- Rich ≥10-line help added for all batch-26 functions (incl. new structured `delete`/`detrend`/`dictionary` entries).

## Batch 27 — functions 261–270 (directed graphs · binning · sparse orderings · delimited I/O)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `digraph` | ✅ | directed graph; `Edges`/`Nodes` tables, `numedges`, `toposort` | — |
| `dir` | ✅ | lists the virtual file system (struct array + printout) | no real OS filesystem (sandbox) |
| `discretize` | ✅ | **fixed**: scalar-N uniform bins, 2nd output `E` (edges), value-label 3rd arg | datetime/`'categorical'` binning not modeled |
| `disp` | ✅ | name-less value display | — |
| `dissect` | 🟡 | returns a nested-dissection permutation | fill-reduction quality not compared (needs `west0479` dataset) |
| `distances` | ✅ | `distances(G)` all-pairs; `distances(G,s)` source subset → `d(1,10)=5` | — |
| `divergence` | ✅ | 2-D `divergence(X,Y,U,V)` and 3-D forms via gradient | `load wind` dataset example not runnable |
| `dlmread` | ✅ | reads delimited numeric files from the VFS | — |
| `dlmwrite` | ✅ | writes delimited matrices to the VFS (default comma) | `-append`/`roffset` options partial |
| `dmperm` | ✅ | Dulmage-Mendelsohn / maximum-matching permutation | — |

### Fixes landed in this batch
- **`discretize`** rewritten: a scalar second argument N now builds N uniform bins over `[min(X),max(X)]`; the second output `[Y,E]` returns the bin edges; a numeric third argument relabels bins with arbitrary `values`. Previously only an explicit `edges` vector was accepted and the `E` output threw "not enough output arguments".
- Verified `digraph`, `disp`, `distances`, `divergence`, `dlmread`, `dlmwrite`, `dmperm`, `dir` against their doc examples (graph distance `d(1,10)=5`, `dlmwrite(magic(3))` → comma rows, etc.).
- Rich ≥10-line help added for all batch-27 functions (incl. new structured `dir`/`dlmread`/`dlmwrite` entries).

## Batch 28 — functions 271–280 (dot/double core · duration ctor · triangulation/graph queries)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `doc` | ✅ | shows the in-REPL help text | no separate doc browser in the sandbox |
| `donutchart` | 🟡 | draws a proportional ring chart | visual only; nothing numeric to assert |
| `dot` | ✅ | **fixed**: column-wise for matrices, optional `dim`; conj for complex → `dot([1 2;3 4],[5 6;7 8])=[26 44]` | — |
| `double` | ✅ | `double(true)=1`, `double('A')=65` | — |
| `drawnow` | ✅ | yields control / flush | rendering handled by host (effective no-op) |
| `dsearchn` | ✅ | **fixed**: `[k,dist]` second output (nearest-neighbor distance) | — |
| `duration` | ✅ | **fixed**: `duration(H,MI,S[,MS])` component constructor; `01:30:00` display | — |
| `edgeAttachments` | ✅ | triangles/tetrahedra sharing an edge (cell array) | — |
| `edgecount` | ✅ | **fixed**: scalar/vector node args broadcast → `edgecount(G,1,1:n)=[0;3;1;0;0]` | — |
| `edges` | ✅ | unique triangulation edges (vertex-index pairs) | — |

### Fixes landed in this batch
- **`dot`** now matches MATLAB for matrices: it contracts along the first non-singleton dimension (column-wise → a row vector) instead of flattening both inputs to one scalar; added the optional `dim` argument and kept the `conj(A).*B` rule for complex inputs.
- **`duration(H,MI,S)` / `duration(H,MI,S,MS)`**: the multi-argument component constructor was unimplemented — `duration(1,30,0)` returned `24:00:00`. It now broadcasts the hours/minutes/seconds(/milliseconds) parts correctly.
- **Duration `hh:mm:ss` display rounding**: the seconds were decomposed from a float that could be `…59.9999`, rendering as `01:32:60.000`; the formatter now rounds to the nearest millisecond first.
- **`dsearchn`** returns the optional `[k,dist]` nearest-neighbor distance; **`edgecount`** broadcasts a scalar source/target against a vector of nodes (was returning a single value).
- Rich ≥10-line help added for all batch-28 functions (incl. new structured `doc`/`donutchart`/`double`/`drawnow`).

## Batch 29 — functions 281–290 (eig/eigs · elliptic functions · dictionary entries · struct arrays)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `edit` | ✅ | opens a VFS file in the editor buffer | no real editor window (sandbox) |
| `eig` | ✅ | **fixed**: `eig(A,"matrix")` returns eigenvalues as a diagonal matrix | — |
| `eigs` | 🟡 | iterative subset of eigenvalues (Krylov) | approximate — values can differ from MATLAB and duplicate on clustered spectra |
| `ellipj` | ✅ | Jacobi sn/cn/dn → `ellipj(0.5,0.25)=[0.4751 0.8799 0.9714]` | — |
| `ellipke` | ✅ | complete elliptic integrals → `ellipke(0.5)=[1.8541 1.3506]` | — |
| `ellipsoid` | ✅ | `(n+1)×(n+1)` surface coordinate grids | — |
| `endsWith` | ✅ | suffix test over string/cellstr arrays | `pattern`-object args (lettersPattern) not modeled |
| `entries` | ✅ | **fixed**: returns a Key/Value table (or struct array with `"struct"`) | — |
| `eomday` | ✅ | last day of month, leap-year aware → `eomday(2020,2)=29` | — |
| `eq` | ✅ | element-wise equality `==` | — |

### Fixes landed in this batch
- **`eig(A,"matrix")`** now returns the eigenvalues as a diagonal matrix (matching the two-output `D`) instead of a column vector.
- **`entries(d)`** returns a proper two-variable table (`Key`, `Value`) and supports `entries(d,"struct")` for a struct array — previously it returned a raw 2-column cell, so `E.Key` failed.
- **Pre-existing bugs fixed as a side effect**: (1) indexing a struct array, `s(2)`, threw "expected a numeric value" — added a struct-array paren-indexing branch in the interpreter; (2) the `struct('f',{...})` constructor ignored cell-valued fields and only ever made a 1×1 struct — it now builds an N-D struct array (with `{}`→0×0), so `struct('a',{1,2}); s(2).a` works.
- Rich ≥10-line help added for all batch-29 functions (incl. new structured `edit`/`eigs`/`entries`/`eq`).

## Batch 30 — functions 291–300 (error functions · string erasing · error handling)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `equilibrate` | ✅ | `[P,R,C]` row/column scaling for conditioning | — |
| `erase` | ✅ | delete substrings (single or array of matches) | `pattern`-object args not modeled |
| `eraseBetween` | ✅ | **fixed**: numeric `startPos,endPos` form (was string-only → errored) | — |
| `erf` | ✅ | `erf(0.76)=0.7175` | — |
| `erfc` | ✅ | `erfc(0.35)=0.6206` | — |
| `erfcinv` | ✅ | **fixed**: NaN outside `[0,2]` → `erfcinv(-10)=NaN`, `erfcinv(Inf)=NaN` | — |
| `erfcx` | ✅ | **fixed**: Chebyshev approx → `erfcx(35)=0.0161` (was NaN from `exp(x²)*erfc` overflow) | — |
| `erfinv` | ✅ | **fixed**: NaN outside `[-1,1]` → `erfinv([-2 -1 1 2])=[NaN -Inf Inf NaN]` | — |
| `error` | ✅ | id + sprintf-format message; caught via try/catch | — |
| `errorbar` | 🟡 | renders error bars (vertical/horizontal/both) | visual; nothing numeric to assert |

### Fixes landed in this batch
- **`erfinv`/`erfcinv` domain**: out-of-range inputs now return NaN (and exact `±1`/`{0,2}` give `±Inf`). Previously `erfinv(±2)` returned `±Inf` and `erfcinv` of out-of-range values gave wrong infinities.
- **`erfcx` accuracy**: replaced the naive `exp(x²)·erfc(x)` (which overflows × underflows to NaN for large x) with a Numerical-Recipes Chebyshev fit evaluated as `t·exp(poly)`. Now matches MATLAB across `erfcx(5)=0.1107`, `erfcx(10)=0.0561`, `erfcx(35)=0.0161`, `erfcx(±Inf)`.
- **`eraseBetween` numeric positions**: `eraseBetween(str,startPos,endPos)` with numeric indices now deletes the inclusive character range (was "expected a string"); the text-boundary form is unchanged.
- Rich ≥10-line help added for all batch-30 functions (incl. new structured `erf`/`erfc`/`erfcinv`/`erfcx`/`erfinv`).

## Batch 31 — functions 301–310 (eval/evalc · elimination trees · QUBO · complex expint)

| Function | Status | Implemented / verified | Not possible (and why) |
|---|---|---|---|
| `etime` | ✅ | seconds between two date vectors → `etime([2020 1 2..],[2020 1 1..])=86400` | — |
| `etree` | ✅ | elimination-tree parent vector | — |
| `etreeplot` | 🟡 | renders the elimination tree | visual only |
| `eval` | ✅ | **fixed**: runs in caller workspace (assignments persist), displays when no output captured | — |
| `evalc` | ✅ | **fixed**: captures output of value-less commands (`disp`, `magic(5)`) | — |
| `evaluateObjective` | ✅ | QUBO objective `x'Qx+c'x+d`; multi-column scoring → `18`, `[18 7]` | — |
| `exist` | ✅ | var(1)/builtin(5)/file(2)/dir(7) codes | — |
| `exp` | ✅ | exponential, real and complex | complex scalar display shows tiny `1.2e-16i` vs MATLAB `0.0000i` |
| `expand` | ✅ | symbolic expansion → `(x+1)^2`→`x^2+2x+1` | — |
| `expint` | ✅ | **fixed**: complex `E1(z)` → `expint(1+2i)=-0.1268-0.0351i` | — |

### Fixes landed in this batch
- **`eval` executed in the caller workspace**: `evalInput` previously evaluated only a single expression and silently ignored assignments and value-less commands, so `eval('x=x+1;')` did not update `x`. It now runs the parsed statements via `runStmts` in the base scope (gated by whether a return value is wanted), so assignments persist and `eval('disp(42)')` works; `Z = eval('magic(3)')` still returns the value without display.
- **`evalc`** now captures the output of commands that return nothing (it used to error "expression produced no value" on `evalc('disp(42)')`); it runs with display enabled and collects the text.
- **`expint` complex**: added a complex `E1(z)` (power series for small `|z|`/left half-plane, Numerical-Recipes continued fraction elsewhere) → `expint(1+2i)` now matches MATLAB instead of returning the real-part value.
- Rich ≥10-line help added for all batch-31 functions (incl. new structured `evalc`).
