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

## V9 — functions 201–225 (cputime … daspect)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `cross` | ✅ | `cross([1 0 0],[0 1 0])`→[0 0 1] |
| `csc`/`cscd`/`csch` | ✅ | cosecant family to 4 digits |
| `ctranspose` | ✅ | conjugate transpose (signed-zero imag is cosmetic) |
| `cummax`/`cummin`/`cumprod`/`cumsum` | ✅ | incl. dim and `"reverse"` |
| `cumtrapz` | ✅ | cumulative trapezoidal integral (with/without x) |
| `curl` | ✅ | z-curl of [-y,x] field → 2 |
| `criticalAlpha` | ✅ | alpha-shape critical radius |
| `cyclebasis` | ✅ | fundamental cycle basis count |
| `cylinder` | ✅ | surface coords size [2 5] |
| `cr1Gate`/`crxGate`/`cryGate`/`crzGate`/`cxGate`/`cyGate`/`czGate` | ✅ | controlled-rotation gates (class correct) |
| `cputime`/`csvread`/`csvwrite`/`daspect` | 🟡 | timing / file I/O / graphics |

## V10 — functions 226–250 (date … delaunay)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `datenum`/`datevec` | ✅ | serial↔vector round-trip |
| `datestr` | ✅ | **fixed** (see below) |
| `day`/`days` | ✅ | datetime/duration accessors |
| `deal` | ✅ | `[a,b,c]=deal(1,2,3)` and single-arg broadcast |
| `deblank` | ✅ | trailing-blank removal |
| `dec2base`/`dec2bin`/`dec2hex` | ✅ | base conversions |
| `deconv` | ✅ | polynomial deconvolution → [1 -1] |
| `deg2rad` | ✅ | `deg2rad(180)`→π |
| `del2` | ✅ | discrete Laplacian → 0.5 (matches MATLAB) |
| `delaunay` | ✅ | triangle count |
| `decomposition` | ✅ | `dA\b` solve → A\\b |
| `degree` | ✅ | graph node degrees → [2 2 2] |
| `dde23`/`ddesd`/`ddensd` | ✅ | DDE solver: `y'=-y(t-1)` → deval(2)=-0.5 (matches MATLAB) |
| `dblquad`/`decic`/`ddeget`/`ddeset` | 🟡 | legacy quadrature / options structs |

### Fix
- **`datestr(n, fmt)` format string**: the format argument was only recognized as a char array, not a string scalar, so `datestr(737791,"yyyy-mm-dd")` ignored the format and returned the default `"01-Jan-2020"` instead of `"2020-01-01"`. Now accepts string-scalar formats. Verified `"yyyy-mm-dd"`, `"HH:MM"`, and `"dd-mmm-yyyy"` all match MATLAB. _(Another instance of the recurring char-Mat-vs-string option-name issue — also fixed this pass in `bitcmp`, `cellfun`.)_

## V11 — functions 251–275 (delaunayTriangulation … drawnow)

Validated against MATLAB R2026a. **2 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `det`/`detrend`/`diag`/`diff` | ✅ | incl. `diff(...,2)` second difference |
| `discretize` | ✅ | bin indices → [1 2 2] |
| `distances` | ✅ | graph shortest-path distance matrix |
| `divergence` | ✅ | `divergence(X,Y,X,Y)`→2 |
| `dot` | ✅ | vector + column-wise matrix |
| `double` | ✅ | **fixed** (see below) |
| `deval` | ✅ | **fixed** (see below); ode45/23/15s → exp(-0.5)=0.6063 |
| `dfsearch` | ✅ | DFS order |
| `dmperm`/`delaunayn`/`delaunayTriangulation` | ✅ | matching / triangulation |
| `dictionary`/`digraph` | ✅ | container / directed graph |
| `delete`/`dir`/`disp`/`doc`/`donutchart`/`drawnow`/`dissect`/`dlmread`/`dlmwrite` | 🟡 | commands / I/O / graphics |

### Fixes
- **`double(string)`**: threw "expected a numeric value" on a string argument; MATLAB applies str2double-style parsing — `double("3.14")`→3.14, `double("AB")`→NaN, `double(["1" "2" "x"])`→[1 2 NaN]. Added a string branch (char arrays still return their char codes). 
- **`deval` / single-output ODE solution struct**: `sol = ode45(...)` (one output) returned the plain Y matrix instead of MATLAB's deval-compatible solution struct, so `deval(sol,xq)` crashed ("Cannot read properties of undefined"). Now the explicit/stiff solvers (ode45/78/89, ode23/23s, ode15s) return a struct `{solver, x, y, yp}`. The stored node derivatives `yp` let `deval` use the cubic-Hermite interpolant, so intermediate-point evaluation matches MATLAB's dense output: `deval(sol,0.5)`→0.6063 vs MATLAB 0.6065 (was 0.6328 with linear interpolation). The two-output `[t,y]=ode45(...)` form and the `ode` object interface are unchanged (regression-checked).

## V12 — functions 276–300 (dsearchn … errorbar) — **V300 boundary: built + pushed**

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `erf`/`erfc`/`erfinv`/`erfcinv`/`erfcx` | ✅ | full error-function family to 4 digits |
| `eig`/`eigs` | ✅ | eigenvalues, k-largest |
| `ellipke`/`ellipj` | ✅ | complete + Jacobi elliptic functions |
| `endsWith` | ✅ | suffix test |
| `eomday` | ✅ | leap-year Feb → 29 |
| `eq` | ✅ | equality |
| `erase`/`eraseBetween` | ✅ | substring/delimiter removal |
| `dsearchn`/`duration`/`edgecount`/`entries` | ✅ | nearest point / time span / multigraph / dictionary |
| `error`/`equilibrate` | ✅ | exception w/ identifier; matrix equilibration |
| `edgeAttachments` | ✅ | **fixed** (see below) |
| `ellipsoid`/`errorbar`/`edit`/`edges` | 🟡 | graphics / object methods |

### Fix
- **`edgeAttachments` edge-pair form**: only the `edgeAttachments(TR,v1,v2)` signature worked; the documented `edgeAttachments(TR,EDGES)` form (an n×2 matrix of vertex pairs, or a single `[v1 v2]` row) threw "expected a scalar". Now accepts both: an n×2 edge matrix returns an n×1 cell of attached-triangle lists; the `(TR,v1,v2)` column-vector form still works. Verified `edgeAttachments(TR,[2 3])`→2 and the multi-edge matrix form against MATLAB.

---

### V201–V300 commit
Build green (tsc+vite); fixes pushed (staged explicitly to exclude the unrelated untracked `toolboxes/` dir). Bugs caught by live-MATLAB cross-validation in functions 201–300: **`datestr` format string, `double(string)`, `deval`/single-output ODE struct, `edgeAttachments` edge-pair form**. (V9 was clean.)

## V13 — functions 301–325 (etime … ezpolar)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `exp`/`expm1`/`expint` | ✅ | exponential family |
| `expm` | ✅ | matrix exponential (nilpotent + rotation) |
| `eye` | ✅ | `eye(2,3)` rectangular identity |
| `eval`/`evalc` | ✅ | string eval, captured output |
| `exist` | ✅ | `exist("sin")`→5 (builtin) |
| `extract` | ✅ | **fixed** (see below) |
| `extractAfter`/`extractBefore`/`extractBetween` | ✅ | substring extraction |
| `etime` | ✅ | elapsed seconds → 10 |
| `etree` | ✅ | elimination tree |
| `expand` | ✅* | value correct; symbolic display uses `x^{2}` vs MATLAB `x^2` (cosmetic) |
| `expmv`/`evaluateObjective`/`etreeplot`/`ez*` | 🟡 | not numerically comparable / graphics |

### Fix
- **`extract` literal vs regex semantics**: the sandbox treated the text pattern as a regular expression, so `extract("a1b2c3","\d")` returned `["1";"2";"3"]`. MATLAB treats a plain text pattern as a **literal** match (you'd use `digitsPattern` or `regexpPattern("\d")` for patterns), so `extract("a1b2c3","\d")` finds the literal "\d" → empty. Now `extract` escapes the pattern for a literal match. Verified `"\d"`→empty, `"b"`→"b", `"["`→"[", `"foo"`→["foo";"foo"] all match MATLAB. _(Pattern objects like `digitsPattern` remain unimplemented — a separate cross-cutting subsystem.)_

## V14 — functions 326–350 (ezsurf … find)

Validated against MATLAB R2026a. **4 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `factor`/`factorial` | ✅ | `factor(60)`→[2 2 3 5] |
| `fft`/`ifft` | ✅ | **fixed** (see below) |
| `fft2`/`fftn`/`fftshift` | ✅ | 2-D / N-D transforms (regression-checked) |
| `fieldnames` | ✅ | struct field list |
| `fileparts`/`filesep` | ✅ | path split |
| `fillmissing` | ✅ | **fixed** (see below) |
| `filloutliers` | ✅ | **fixed** (see below) |
| `filter`/`filter2` | ✅ | 1-D digital filter, 2-D correlation |
| `find` | ✅ | incl. `find(x,n)` first-n form |
| `feval` | ✅ | `feval(@sin,pi/2)`→1 |
| `faceNormal`/`featureEdges`/`ezsurf`/`fcontour`/`fimplicit` etc. | 🟡 | geometry / graphics |

### Fixes
- **`fft(x,n[,dim])` length argument**: `fft`/`ifft` ignored the `n` (pad/truncate) and `dim` arguments, so `fft([1 2 3],4)` did a 3-point transform (`[6 -1.5 …]`) instead of zero-padding to 4 points (`[6 -2 2 -2]`). Added `fftWithN` (pad/truncate along the operating dimension, then transpose for `dim=2`). Verified pad, truncate, and `dim` forms; fft2/fftn unaffected.
- **`fillmissing(x,method)` method name**: the method was only recognized as a char array, not a string scalar (the 4th instance of this recurring pattern this pass), so `fillmissing([1 NaN 3],"linear")` threw "expected a numeric value". Now accepts string method names.
- **`fillmissing(...,"nearest")` logic**: forward-filled first, which destroyed the NaN markers so the back-fill never ran (`[1 NaN NaN 4]`→`[1 1 1 4]`). Rewrote to pick the genuinely nearest non-missing neighbor, breaking ties toward the **next** value (MATLAB convention): `[1 NaN NaN 4]`→`[1 1 4 4]`, `[5 NaN 9]`→`[5 9 9]`.
- **`filloutliers(x,fill[,method])`**: ignored the fill argument entirely (always replaced outliers with the median). Now detects outliers (via the shared method/percentiles mask) and fills them by the requested method — numeric value, `"center"` (median), or interpolation (`"linear"`/`"nearest"`/`"previous"`/`"next"`). `filloutliers([1 2 100 3 4],"linear")`→[1 2 2.5 3 4] matches MATLAB.

## V15 — functions 351–375 (findedge … fsurf)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `fix`/`floor` | ✅ | toward-zero / toward-minus-infinity rounding |
| `flintmax` | ✅ | 9.0072e15 |
| `flip`/`fliplr`/`flipud`/`flipdim` | ✅ | with dim argument |
| `fminbnd`/`fminsearch` | ✅ | 1-D + Nelder-Mead optimizers → minima |
| `findgroups` | ✅ | group indices → [1;2;1;3] |
| `findstr` | ✅ | substring positions |
| `findedge`/`findnode`/`flipedge` | ✅ | graph queries (named nodes too) |
| `freeBoundary` | ✅ | triangulation boundary edge count |
| `fprintf` | ✅ | formatted output |
| `flag`/`fmesh`/`fontname`/`fontsize`/`fplot`/`fsurf`/`format`/`formula` | 🟡 | graphics / display / symbolic |

## V16 — functions 376–400 (full … gradient) — **V400 boundary: built + pushed**

Validated against MATLAB R2026a. **2 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `gamma`/`gammaln`/`gammainc`/`gammaincinv` | ✅ | gamma family to 4 digits |
| `gcd` | ✅ | scalar + elementwise |
| `fzero` | ✅ | root finding → √2, π/2 |
| `funm` | ✅ | matrix function `cos([0 -1;1 0])`→cosh(1)·I |
| `full`/`fullfile`/`func2str` | ✅ | densify / path join / handle text |
| `gmres` | ✅ | GMRES iterative solver → A\\b |
| `getfield` | ✅ | nested field access |
| `gradient` | ✅ | **fixed** (see below) |
| `gallery` | ✅ | **fixed** (see below) |
| `gca`/`gcf`/`geoplot`/`geoscatter`/`gplot`/`get`/`genvarname` | 🟡 | graphics / handles |

### Fixes
- **`gradient` 2-D form**: only handled vectors (flattening matrices), and lacked the `[FX,FY]` two-output form. Added the matrix case: `FX` = central differences along columns (x), `FY` along rows (y), with optional spacings `hx,hy`. Verified `[gx,gy]=gradient([1 2;3 4])` → `gx=[1 1;1 1]`, `gy=[2 2;2 2]` matches MATLAB.
- **`gallery("name",...)` string detection**: the matrix-name argument was only recognized as a char array, not a string scalar (the 5th instance of the recurring pattern this pass), so `gallery("moler",3)` threw "first argument must be a name". The matrix generators themselves were already implemented — fixed the detection. Verified `gallery("moler",3)` and `gallery("minij",3)` match MATLAB.

---

### V301–V400 commit
Build green (tsc+vite); fixes pushed (staged explicitly to exclude `toolboxes/`). Bugs caught by live-MATLAB cross-validation in functions 301–400: **`extract` literal semantics, `fft(x,n[,dim])`, `fillmissing` method name + `nearest` logic, `filloutliers` fill method, `gradient` 2-D, `gallery` string name**. (V15 was clean.) The recurring char-array-vs-string option/name issue has now appeared in `bitcmp`, `cellfun`, `datestr`, `fillmissing`, `gallery`.
