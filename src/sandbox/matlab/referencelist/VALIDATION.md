# Live-MATLAB validation pass

Second pass over the full reference list (functions 1→1170), cross-validating every
function against **live MATLAB R2026a** (`matlab -batch`). For each function, 2-3 test
calls are run on both the sandbox interpreter and MATLAB; results must match. Octave
sources at `/home/csd81/octave/scripts` are consulted where a math implementation is in
doubt. Mismatches are bugs — fixed here, then re-confirmed identical to MATLAB.

The first audit pass (batches 1–60, functions 1–930) added help + fixed against the
MathWorks *documented* examples, but was **not** cross-checked against live MATLAB until
function 881. This pass closes that gap from function 1.

Build/commit/push every 100 validated functions.

---

## V1 — functions 1–25 (GraphPlot … adjacency)

Validated against MATLAB R2026a. **3 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `abs` | ✅ | `abs(-3)`→3, `abs(3+4i)`→5 |
| `acos`/`acosd`/`acosh` | ✅ | incl. `acos(2)`→`0+1.317i` (complex branch) |
| `acot`/`acotd`/`acoth` | ✅ | matches to 4 digits |
| `acsc`/`acscd`/`acsch` | ✅ | matches to 4 digits |
| `accumarray` | ✅ | sum→[40;60]; with `@max`→[2;3] |
| `addtodate` | ✅ | `addtodate(738885,5,"day")`→738890 |
| `adjacency` | ✅ | unweighted + `"weighted"` forms |
| `MException` | ✅ | identifier + sprintf message |
| `NaT` | ✅ | **fixed**: `NaT(2,3)` now size [2 3] (was [1 1]) |
| `addboundary`/`addcats`/`addvars` | ✅ | polyshape/categorical/table builders |
| `addedge`/`addnode` | ✅ | **fixed** (see below) |
| `GraphPlot`/`RandStream`/`abort`/`abyss`/`addpoints` | 🟡 | graphics / RNG-object / streaming (not numerically comparable) |

### Fixes (caught by MATLAB cross-validation)
- **`NaT(m,n)` sizing**: `NaT` ignored its arguments and always returned a 1×1 value. Now uses `dims2` like zeros/ones, so `NaT(2,3)` is a 2×3 NaT array.
- **`graph()` / `digraph()` empty constructor**: with no arguments `buildGraph` fell through to the edge-list path and dereferenced `a[0]` (undefined), crashing with "Cannot read properties of undefined". This broke the common `G = graph; G = addnode(G,...)` build-up pattern. Now returns an empty 0-node graph, so `addnode`/`addedge` work on a freshly created graph.

## V2 — functions 26–50 (airy … asech)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `airy` | ✅ | `airy(0)`→0.355 (Ai), `airy(2,0)`→0.6149 (Bi) |
| `all`/`any` | ✅ | scalar + per-column |
| `allfinite`/`allunique`/`anymissing`/`anynan` | ✅ | predicate checks |
| `allcycles` | ✅ | **fixed** (see below) |
| `allpaths` | ✅ | digraph path enumeration → 2 |
| `angle` | ✅ | `angle(1+1i)`→0.7854 |
| `append` | ✅ | string concatenation |
| `asec`/`asecd`/`asech` | ✅ | inverse sec to 4 digits |
| `amd` | ✅ | approximate minimum degree permutation |
| `alphaShape`/`alphaTriangulation`/`alphaSpectrum` | ✅ | area→1, 3 triangles, nonempty spectrum |
| `array2table`/`arrayfun` | ✅ | table build, elementwise map |
| `alpha`/`alphamap`/`animatedline`/`annotation`/`area` | 🟡 | graphics (not numerically comparable) |

### Fix
- **`allcycles` overcounting**: two defects. (1) On undirected graphs it counted length-2 "cycles" (traversing a single edge out and back) — a triangle reported 4 cycles instead of 1. (2) It de-duplicated cycles by their *node set*, which wrongly merged distinct longer cycles that share the same nodes (K4's three 4-cycles collapsed to one). Now undirected cycles require ≥3 nodes, and de-duplication uses a canonical rotation+direction key. Verified against MATLAB: triangle→1, square→1, two-triangles-sharing-an-edge→3, K4→7; directed graphs (2-cycles, self-loops, triangles) unchanged.

## V3 — functions 51–75 (asin … besselk)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `asin`/`asind`/`asinh` | ✅ | incl. complex branch `asin(2)`→1.5708-1.317i |
| `atan`/`atan2`/`atan2d`/`atand`/`atanh` | ✅ | incl. `atan2(-1,-1)`→-2.3562 |
| `besselj`/`bessely`/`besseli`/`besselk`/`besselh` | ✅ | full Bessel family to 4 digits (J,Y,I,K,H) |
| `balance` | ✅ | `T*B/T` reconstructs A |
| `bandwidth` | ✅ | lower/upper bandwidth → [1 1] |
| `base2dec` | ✅ | `base2dec("FF",16)`→255 |
| `barycentricToCartesian` | ✅ | → [0.25 0.25] |
| `bctree` | ✅ | block-cut tree (graph); **class fixed** (see below) |
| `assert` | ✅ | passes on true |
| `autumn`/`axis`/`bar`/`bar3`/`bar3h`/`barh`/`beep` | 🟡 | graphics (not numerically comparable) |

### Fix
- **`class()` on graph/geometry types**: `class` had no case for graph or geometry values, so `class(graph(...))`, `class(polyshape(...))`, `class(triangulation(...))`, `class(alphaShape(...))`, and `class(bctree(...))` all wrongly returned `"double"`. Added cases: graphs report `"graph"`/`"digraph"` (by direction) and geometry objects report their `gkind` (`"polyshape"`, `"triangulation"`, `"delaunayTriangulation"`, `"alphaShape"`). Regressions for double/int8/string/cell/logical/table re-checked.

## V4 — functions 76–100 (beta … boundingbox) — **V100 boundary: built + pushed**

Validated against MATLAB R2026a. **2 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `beta`/`betainc`/`betaincinv`/`betaln` | ✅ | incl. `betainc(...,"upper")`→0.3125 |
| `bin2dec` | ✅ | `bin2dec("101")`→5 |
| `bitand`/`bitor`/`bitxor`/`bitget`/`bitset`/`bitshift` | ✅ | bit ops incl. negative shift |
| `bitcmp` | ✅ | **fixed** (see below) |
| `blkdiag` | ✅ | block-diagonal assembly |
| `boundary` | ✅ | closed boundary index count → 5 |
| `boundingbox` | ✅ | **fixed** (see below) |
| `bicg`/`bicgstab`/`bicgstabl` | ✅ | iterative solvers → A\\b |
| `bfsearch`/`biconncomp` | ✅ | BFS order, biconnected components → 2 |
| `bone`/`bar*` etc. | 🟡 | colormap / graphics |

### Fixes
- **`bitcmp` integer width**: ignored the input's integer class and always complemented as 64-bit, so `bitcmp(uint8(5))` returned 1.8447e19 instead of 250. Now reads the operand's `itype` (uint8/16/32/64) for the bit width and preserves that class on output; also accepts the legacy `bitcmp(A,type)` string form (which MATLAB R2026a still supports → 250).
- **`boundingbox` output forms**: returned a single 2×2 `[min; max]` matrix. MATLAB returns `[xlim,ylim]` (two outputs), and for a single output returns just `xlim`. Fixed: single output → `[xmin xmax]`, two outputs → `xlim,ylim`. Verified `boundingbox(p)`→[0 2] and `[x,y]=boundingbox(p)`→[0 2],[0 3].

---

### V1–V100 commit
Build green (tsc+vite); all validation fixes pushed. Bugs caught by live-MATLAB cross-validation in functions 1–100: **`NaT(m,n)` sizing, empty `graph()`/`digraph()`, `allcycles` overcounting, `class()` on graph/geom, `bitcmp` width, `boundingbox` outputs** (plus `setdiff`/`setxor`/`shiftdim` committed earlier with batch 59).

## V5 — functions 101–125 (bounds … cell2table)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `bounds` | ✅ | `[lo,hi]=bounds([3 1 4 1 5])`→1,5 |
| `bsxfun` | ✅ | implicit-expansion plus |
| `cart2pol`/`cart2sph` | ✅ | coordinate transforms to 4 digits |
| `cartesianToBarycentric` | ✅ | → [0.5 0.25 0.25] |
| `cast` | ✅ | saturating `cast(300,"uint8")`→255, class preserved |
| `cat` | ✅ | dim-2 and dim-3 concatenation |
| `ceil` | ✅ | `ceil([1.2 -1.2 2.8])`→[2 -1 3] (MATLAB has no `ceil(X,N)` form) |
| `cell`/`cell2mat`/`cell2struct`/`cell2table` | ✅ | cell builders/converters |
| `categorical`/`categories` | ✅ | category list sorted |
| `cdf2rdf` | ✅ | **fixed** (see below) |
| `bvp4c`/`bvp5c`/`bvpinit` | ✅ | BVP solver: `y''=-y` → sin, `deval(sol,π/4)`→[0.7071;0.7071] |
| `ccxGate` | ✅ | Toffoli gate (class now correct from V3 fix) |
| `box`/`brighten`/`camlight`/`bvpget`/`bvpset`/`bvpxtend` | 🟡 | graphics / options structs |

### Fix
- **`cdf2rdf` block convention**: for a complex-conjugate eigenvalue pair mu ± i·omega, MATLAB's real-block form is `[mu omega; -omega mu]` with **omega > 0**. The sandbox used the signed imaginary part from `eig`'s ordering, so `cdf2rdf` of `[0 -1;1 0]` produced `[0 -1;1 0]` instead of MATLAB's `[0 1;-1 0]`. Now uses `omega = |imag|` in the top-right and flips the eigenvector's imaginary column sign accordingly; reconstruction `Vr*Dr/Vr = A` verified, and `Dr` matches MATLAB for both `[0 -1;1 0]` and `[1 -2;2 1]`.

## V6 — functions 126–150 (celldisp … colamd)

Validated against MATLAB R2026a. **2 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `cellfun` | ✅ | **fixed** (see below) — incl. multi-cell inputs |
| `cellstr`/`char` | ✅ | string↔char conversions |
| `chol`/`cholupdate` | ✅ | Cholesky factor + rank-1 update |
| `circshift` | ✅ | positive/negative shift |
| `clip` | ✅ | `clip([-2 0 5 10],0,8)`→[0 0 5 8] |
| `centrality` | ✅ | degree centrality → [2 2 2] |
| `centroid` | ✅ | **fixed** (see below) |
| `circumcenter` | ✅ | triangle circumcenter → [0.5 0.5] |
| `cgs` | ✅ | conjugate-gradient-squared → A\\b |
| `cmap2gray` | ✅ | colormap → gray |
| `colamd` | ✅ | column approximate-min-degree permutation |
| `chGate`/`cnotGate` | ✅ | controlled-H / CNOT (class from V3 fix) |
| `celldisp`/`cla`/`clc`/`clear`/`clearpoints`/`clf`/`clim`/`clock`/`close` | 🟡 | display / figure commands |

### Fixes
- **`cellfun(...,"UniformOutput",false)`**: the `UniformOutput` option name was only recognized when passed as a char array, not a string scalar (the common `"UniformOutput"` form), so `cellfun(@f,C,"UniformOutput",false)` ignored it and tried to pack non-scalar results into a numeric array, then `{}`-indexing the result failed. Now accepts string option names. Also generalized cellfun to accept **multiple cell-array inputs** (`cellfun(@plus,C1,C2)`).
- **`centroid` two-output form**: `[cx,cy] = centroid(pgon)` threw "not enough output arguments"; only `c = centroid(pgon)` (a row) worked. Added the two-output form returning the x and y coordinates separately, matching MATLAB.

## V7 — functions 151–175 (colon … contour3)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `colon` | ✅ | `colon(1,2,9)`→[1 3 5 7 9] |
| `compan` | ✅ | companion matrix; eig→[1 2 3] |
| `complex` | ✅ | `complex(3,4)`→3+4i, `complex(5)`→5+0i |
| `compose` | ✅ | **fixed** (see below) |
| `cond`/`condest`/`condeig` | ✅ | condition numbers |
| `conj` | ✅ | complex conjugate |
| `conncomp` | ✅ | connected components → [1 1 1 2 2] |
| `condensation` | ✅ | digraph SCC condensation |
| `contains` | ✅ | substring test |
| `containers.Map` | ✅ | map lookup |
| `colperm` | ✅ | column permutation |
| `compositeGate`/`colormap`/`colorbar`/`comet`/`compass`/`coneplot`/`contour` etc. | 🟡 | quantum / graphics |

### Fix
- **`compose` per-row grouping**: with a format containing K conversion specifiers and an array argument, MATLAB applies the format consuming K elements per group across each row — `compose("%d-%d",[1 2])`→"1-2", `compose("%d-%d",[1 2;3 4])`→["1-2";"3-4"]. The sandbox's grouping branch required `cols > K` (strictly), so the common `cols == K` case fell through to per-element formatting and produced `["1-0" "2-0"]`. Changed the guard to `cols >= K`. Verified: 1-row, 2-row, cycling (`compose("%d:%d",[8 15 9 30])`→["8:15" "9:30"]), and single-spec (`compose("%d",[1 2 3])`→["1" "2" "3"]) all match MATLAB.

## V8 — functions 176–200 (contourc … cplxpair) — **V200 boundary: built + pushed**

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `conv`/`conv2`/`convn` | ✅ | incl. `"same"` shape |
| `cos`/`cosd`/`cosh`/`cot`/`cotd`/`coth` | ✅ | trig to 4 digits |
| `cospi` | ✅ | **fixed** (see below) |
| `count` | ✅ | substring occurrences → 2 |
| `cov`/`corrcoef` | ✅ | covariance / correlation |
| `cplxpair` | ✅ | `[1-1i 1+1i 1]` ordering |
| `convhull`/`convexHull`/`convhulln` | ✅ | convex hull |
| `countcats` | ✅ | category counts → [2;1] |
| `convertCharsToStrings`/`convertStringsToChars` | ✅ | char↔string |
| `contourc`/`contourf`/`cool`/`copper` etc. | 🟡 | contour matrix / graphics |

### Fix
- **`cospi`/`sinpi` exactness**: both computed `cos(pi*x)`/`sin(pi*x)` directly, so `cospi(0.5)` returned 6.12e-17 instead of exactly 0. These functions exist precisely to give exact results at integer/half-integer arguments. Now `sinpi` returns 0 at integers and ±1 at half-integers, `cospi` returns ±1 at integers and 0 at half-integers, falling back to the direct computation elsewhere. Verified `cospi([0 0.5 1 1.5 2])`→[1 0 -1 0 1] and the sinpi siblings, all matching MATLAB.

---

### V101–V200 commit
Build green (tsc+vite); fixes pushed. Bugs caught by live-MATLAB cross-validation in functions 101–200: **`cdf2rdf` block convention, `cellfun` UniformOutput + multi-cell, `centroid` two-output, `compose` row grouping, `cospi`/`sinpi` exactness**.
