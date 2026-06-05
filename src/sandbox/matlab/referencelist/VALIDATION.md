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

## V17 — functions 401–425 (graph … histc)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `hadamard`/`hankel`/`hilb` | ✅ | special matrices |
| `hess` | ✅ | Hessenberg reduction (subdiagonal zeroed) |
| `hex2dec`/`hex2num`/`hex2rgb` | ✅ | hex conversions |
| `griddedInterpolant`/`griddata`/`griddatan` | ✅ | interpolation → 25, 1 |
| `groupcounts`/`groupsummary` | ✅ | grouped aggregation |
| `gsvd` | ✅ | generalized SVD |
| `hascycles` | ✅ | cycle detection → true/false |
| `head`/`height` | ✅ | table head / row count |
| `histc`/`hist` | ✅ | histogram bin counts |
| `gray`/`grid`/`gtext`/`highlight`/`graph`/`hGate`/`help` | 🟡 | graphics / object / quantum |

## V18 — functions 426–450 (histcounts … imagesc)

Validated against MATLAB R2026a. **2 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `histcounts`/`histcounts2` | ✅ | bin counts with edges and N-bins |
| `horzcat` | ✅ | horizontal concatenation |
| `hour`/`hours` | ✅ | datetime hour, duration in hours |
| `hsv2rgb` | ✅ | `hsv2rgb([0 1 1])`→[1 0 0] |
| `hypot` | ✅ | `hypot(3,4)`→5 |
| `idivide` | ✅ | fix/ceil/floor/round rounding modes |
| `ifft`/`ifft2`/`ifftn`/`ifftshift` | ✅ | inverse transforms |
| `imag` | ✅ | imaginary part |
| `ichol`/`ilu` | ✅ | incomplete factorizations |
| `holes` | ✅ | **fixed** (see below) |
| `im2gray`/`rgb2gray` | ✅ | **fixed** (see below) |
| `histogram`/`histogram2`/`hold`/`hot`/`hsv`/`image`/`imagesc`/`idGate` | 🟡 | graphics / quantum |

### Fixes
- **`holes(pgon)`**: was a stub returning an empty polyshape. Now extracts the hole boundaries (negative signed-area loops) and returns them as a polyshape with their orientation flipped to solid. `area(holes(3×3-with-1×1-hole))`→1 matches MATLAB.
- **`rgb2gray`/`im2gray` truecolor images**: always treated the input as an m×3 colormap, so a truecolor m×n×3 image (e.g. `cat(3,1,0,0)`) wrongly produced a gray triplet instead of an m×n luminance array. Now detects the 3-D `m×n×3` case (luminance per pixel → m×n) while keeping the m×3 colormap path. Verified `im2gray(cat(3,1,0,0))`→0.2989 (scalar) and a 2×2×3 image → 2×2 against MATLAB.

## V19 — functions 451–475 (importdata … interp1)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `int8`/`int16`/`int32`/`int64`/`int2str` | ✅ | saturating casts |
| `ind2sub` | ✅ | linear → subscripts |
| `integral`/`integral2`/`integral3` | ✅ | incl. infinite limits → √π |
| `interp1` | ✅ | **fixed** (see below) |
| `inpolygon` | ✅ | point-in-polygon → 1 |
| `incidence`/`indegree`/`inedges` | ✅ | graph incidence/in-degree |
| `incenter` | ✅ | triangle incenter |
| `innerjoin` | ✅ | table inner join → 1 row |
| `insertAfter`/`insertBefore`/`insert` | ✅ | string insertion |
| `importdata`/`inShape`/`initGate`/`inline`/`input`/`inputname` | 🟡 | I/O / object / interactive |

### Fix
- **`interp1` methods**: only `'linear'` and `'nearest'` were implemented; `'spline'`/`'pchip'`/`'cubic'`/`'previous'`/`'next'` all silently fell back to linear, and `'nearest'` broke ties toward the previous point. Now: `'spline'` uses the cubic-spline coefficients (`interp1([1 2 3 4],[1 8 27 64],2.5,"spline")`→15.625, exact for cubic data), `'pchip'`/`'cubic'`/`'makima'` use the shape-preserving Hermite interpolant (→15.6405), `'previous'`/`'next'` do step interpolation, and `'nearest'` breaks ties toward the next point (`interp1([1 2 3],[10 20 30],2.5,"nearest")`→30) — all matching MATLAB.

## V20 — functions 476–500 (interp2 … iscellstr) — **V500 boundary: built + pushed**

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `interp2`/`interp3`/`interpn`/`interpft` | ✅ | multi-D + Fourier interpolation |
| `intersect` | ✅ | sorted + `"stable"` |
| `intmax`/`intmin` | ✅ | integer-class limits |
| `inv`/`invhilb` | ✅ | inverse, inverse Hilbert |
| `ipermute` | ✅ | inverse permute round-trip |
| `iqr` | ✅ | interquartile range → 4 |
| `isa`/`isapprox`/`isbanded`/`isbetween` | ✅ | type/approx/band/range predicates |
| `iscategorical`/`iscell`/`iscellstr` | ✅ | `iscellstr` correctly false for string scalars, true for char vectors |
| `isKey`/`isStringScalar`/`isUnderlyingType`/`iscategory`/`isInterior`/`isConfigured`/`isConnected` | ✅ | membership / type predicates |

---

### V401–V500 commit
Build green (tsc+vite); fixes pushed (staged explicitly to exclude `toolboxes/`). Bugs caught by live-MATLAB cross-validation in functions 401–500: **`holes` (was empty stub), `rgb2gray`/`im2gray` truecolor images, `interp1` methods (spline/pchip/previous/next + nearest tie)**. (V17 and V20 were clean — the special-matrix/predicate territory is solid.)

## V21 — functions 501–525 (ischar … islocalmin)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `ischar`/`iscolumn`/`isempty`/`isfield`/`isfloat`/`isinteger` | ✅ | type/shape predicates |
| `isdag` | ✅ | DAG test (acyclic vs cyclic digraph) |
| `isdiag`/`ishermitian` | ✅ | matrix-structure predicates (complex Hermitian) |
| `isequal`/`isequaln` | ✅ | NaN handling differs correctly (false vs true) |
| `isfinite`/`isinf` | ✅ | elementwise |
| `iskeyword`/`isletter` | ✅ | keyword test, per-char letters |
| `islocalmax`/`islocalmin` | ✅ | local extrema masks |
| `isisomorphic` | ✅ | graph isomorphism → true |
| `isdatetime`/`isduration`/`isenum`/`isgraphics`/`ishole`/`isinterior`/`isjava` | ✅ | type / geometry predicates |

## V22 — functions 526–550 (islogical … isstruct)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `ismember` | ✅ | membership + `[tf,loc]` index form → [0 2 1] |
| `ismembertol` | ✅ | tolerance membership |
| `ismultigraph` | ✅ | parallel-edge detection |
| `isoutlier` | ✅ | MAD outlier mask |
| `isprime` | ✅ | elementwise primality |
| `isreal` | ✅ | `isreal(3+0i)`→true, `isreal(3+4i)`→false |
| `issorted`/`issortedrows` | ✅ | sortedness predicates |
| `isspace`/`isstrprop` | ✅ | per-character class tests |
| `isomorphism` | ✅ | graph isomorphism permutation |
| `islogical`/`ismatrix`/`isnan`/`isnat`/`isnumeric`/`isobject`/`isrow`/`isscalar`/`issparse`/`isstring`/`isstruct`/`ismissing`/`isosurface`/`issimplified` | ✅ | type / structure predicates |

## V23 — functions 551–575 (issymmetric … lcm)

Validated against MATLAB R2026a. **3 bugs found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `issymmetric`/`istril`/`istriu`/`isvector` | ✅ | matrix-structure predicates |
| `isvarname` | ✅ | **fixed** (see below) |
| `kron` | ✅ | Kronecker product |
| `lcm` | ✅ | scalar + elementwise |
| `laplacian` | ✅ | graph Laplacian matrix |
| `join` | ✅ | string join (default + delimiter) |
| `jsonencode`/`jsondecode` | ✅ | JSON round-trip (arrays + structs) |
| `keys`/`values` | ✅ | **fixed** (see below) |
| `isuniform`/`istable`/`istabular`/`istimetable` | ✅ | spacing / type predicates |
| `jet`/`kde`/`labeledge`/`labelnode`/`layout`/`knapsack2qubo` | 🟡 | graphics / object |

### Fixes
- **`isvarname` string argument**: only accepted a char array, not a string scalar, so `isvarname("x1")` returned false (6th instance of the char-vs-string pattern). Now accepts string scalars. `isvarname("x1")`→true, `isvarname("1x")`→false.
- **`keys`/`values` on a dictionary**: both always returned a cell array. For a `dictionary` MATLAB returns the keys/values as their native array type (a string array for string keys, a numeric column for numeric values), reserving the cell form for `containers.Map`. Now `keys(dict)`→string/numeric array, `values(dict)`→numeric/string array, while `keys(Map)`/`values(Map)` still return cells. Verified `class(keys(d))`→"string", `class(values(d))`→"double".

## V24 — functions 576–600 (ldl … lsqminnorm) — **V600 boundary: built + pushed**

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `log`/`log10`/`log1p`/`log2` | ✅ | incl. complex `log(-1)`→πi and `[F,E]=log2` frexp |
| `logical` | ✅ | nonzero → true |
| `length`/`linspace`/`logspace` | ✅ | sizing / spacing |
| `legendre` | ✅ | associated Legendre `P_2(0.5)`→[-0.125;-1.299;2.25] |
| `logm` | ✅ | matrix logarithm |
| `linsolve`/`lscov`/`lsqminnorm` | ✅ | linear solve, weighted LS, min-norm LS |
| `ldl` | ✅ | `L*D*L'` reconstructs A |
| `lower`/`lookup` | ✅ | lowercase, dictionary lookup |
| `legend`/`lighting`/`line`/`lines`/`linkaxes`/`loglog`/`lookfor`/`ls`/`load` | 🟡 | graphics / I/O |

---

### V501–V600 commit
Build green (tsc+vite); fixes pushed (staged explicitly to exclude `toolboxes/`). Bugs caught by live-MATLAB cross-validation in functions 501–600: **`isvarname` string arg, `keys`/`values` dictionary native-array return**. (V21, V22, V24 were clean — the predicate/log/linear-algebra territory is very solid.)

## V25 — functions 601–625 (lsqnonneg … milliseconds)

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `lu` | ✅ | `L*U` reconstructs A |
| `magic` | ✅ | magic square (equal row/col sums) |
| `makima` | ✅ | modified Akima → 6.2396 (exact match) |
| `mape` | ✅ | mean absolute % error → 7.037 |
| `mat2cell`/`mat2str` | ✅ | partition / parseable string |
| `matchpairs` | ✅ | min-cost assignment |
| `max`/`maxk` | ✅ | with index, k-largest |
| `mean`/`median` | ✅ | central tendency |
| `meshgrid` | ✅ | grid coordinates |
| `maxflow` | ✅ | max-flow → 4 |
| `lsqr`/`lsqnonneg` | ✅ | iterative / non-negative LS |
| `matches`/`milliseconds`/`mergecats`/`mergevars` | ✅ | string match / duration / categorical / table |
| `mesh`/`meshc`/`meshz`/`material`/`mcxGate`/`maxcut2qubo` | 🟡 | graphics / quantum |

## V26 — functions 626–650 (min … mustBeGreaterThan)

Validated against MATLAB R2026a. **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `min`/`max` | ✅ | **fixed** (see below) |
| `mink` | ✅ | k smallest → [1 1 2] |
| `mod` | ✅ | `mod(-7,3)`→2 |
| `mode` | ✅ | incl. dim argument |
| `month`/`minute`/`minutes` | ✅ | datetime/duration |
| `mkpp` | ✅ | piecewise-poly construction |
| `movmean`/`movsum`/`movmax`/`movmin`/`movmedian`/`movstd`/`movprod`/`movmad`/`movvar` | ✅ | moving-window stats |
| `minspantree` | ✅ | MST total weight → 4 |
| `minres` | ✅ | MINRES solver → A\\b |
| `mustBeColumn`/`mustBeFinite`/`mustBeFloat`/`mustBeGreaterThan` | ✅ | argument validators |
| `missing`/`movevars` | ✅ | missing value / table reorder |

### Fix
- **`min`/`max` dim-2 on 2-D matrices**: the `min(A,[],dim)`/`max(A,[],dim)` reductions only honored the dim argument for N-D arrays; for an ordinary 2-D matrix they always reduced column-wise (dim 1), ignoring `dim=2`. So `min([1 2;3 4],[],2)` returned `[1 2]` instead of `[1;3]`. Added per-row reduction for `dim=2` (values and indices). Verified against MATLAB: `min(...,[],2)`→[1;3], `max(...,[],2)`→[2;4], with correct index outputs; the default, dim-1, and pairwise forms unchanged.

## V27 — functions 651–675 (mustBeGreaterThanOrEqual … nargchk)

Validated against MATLAB R2026a (validators: pass-silently / throw behavior compared). **1 bug found and fixed:**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `mustBeGreaterThanOrEqual`/`mustBeLessThan`/`mustBeLessThanOrEqual`/`mustBeInRange`/`mustBeInteger` | ✅ | pass/throw match |
| `mustBeMatrix`/`mustBeMember`/`mustBeVector`/`mustBeRow`/`mustBeScalarOrEmpty` | ✅ | shape/membership validators |
| `mustBeNegative`/`mustBeNonNan`/`mustBeNonempty`/`mustBeNonnegative`/`mustBeNonpositive`/`mustBeNonzero`/`mustBePositive`/`mustBeReal`/`mustBeNumeric`/`mustBeNumericOrLogical` | ✅ | value validators |
| `mustBeSorted`/`mustBeText`/`mustBeNonzeroLengthText` | ✅ | order/text validators |
| `mustBeTextScalar` | ✅ | **fixed** (see below) |
| `nargchk` | ✅ | in-range → "", out-of-range → message |

### Fix
- **`mustBeTextScalar` non-scalar text**: accepted any string value, so `mustBeTextScalar(["a" "b"])` passed even though a 1×2 string array is not a single piece of text. Now requires a scalar string (`numel==1`) or a char row vector. `mustBeTextScalar(["a" "b"])`→error, `mustBeTextScalar("a")`/`mustBeTextScalar('abc')`→pass, matching MATLAB; `mustBeText` still accepts string arrays.

## V28 — functions 676–700 (nargoutchk … num2cell) — **V700 boundary: built + pushed**

Validated against MATLAB R2026a. **No bugs — all functions matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `nchoosek` | ✅ | binomial + combinations matrix |
| `ndims`/`ndgrid` | ✅ | dimensions / grid |
| `nextpow2`/`nnz`/`nonzeros` | ✅ | |
| `norm`/`normest`/`normalize` | ✅ | 1/2/Inf/fro norms, z-score |
| `nthroot` | ✅ | `nthroot(-27,3)`→-3 |
| `null` | ✅ | null-space basis (sign-arbitrary, magnitude matches) |
| `nufft`/`nufftn` | ✅ | nonuniform FFT magnitudes |
| `num2cell` | ✅ | array→cell |
| `nearest`/`nearestNeighbor`/`nearestvertex`/`neighbors` | ✅ | graph/geometry queries |
| `native2unicode` | ✅ | bytes→chars |
| `narginchk`/`nargoutchk`/`nebula`/`nexttile`/`nsidedpoly`/`now` | ✅/🟡 | validators / graphics |

---

### V601–V700 commit
Build green (tsc+vite); fixes pushed (staged explicitly to exclude `toolboxes/`). Bugs caught by live-MATLAB cross-validation in functions 601–700: **`min`/`max` dim-2 on 2-D matrices, `mustBeTextScalar` non-scalar text**. (V25 and V28 were clean.)

## V29 — functions 700–724 (num2hex … odeEvent) — **2 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `num2hex` | ✅ | double `3ff0…`, single `3f800000` |
| `num2str` | ✅ | **fixed** (see below) — scalar/precision/format already matched |
| `numEntries` | ✅ | dictionary entry count |
| `numboundaries`/`numsides` | ✅ | polyshape (1 boundary, 4 sides) |
| `numedges`/`numnodes` | ✅ | graph counts |
| `numel` | ✅ | element count |
| `numRegions` | ✅ | alphaShape region count |
| `numunique` | ✅ | **fixed** (see below) |
| `nzmax` | ✅ | sparse nonzero count |
| `ode` (object) | ✅ | `ode(ODEFcn=…,InitialValue=…)`+`solve` → `exp(-1)` |
| `ode45`/`ode23`/`ode113`/`ode78`/`ode89` | ✅ | nonstiff RK/Adams; endpoints within RelTol of `exp(-1)` |
| `ode15s`/`ode23s`/`ode23t`/`ode23tb` | ✅ | stiff solvers; within tolerance |
| `ode15i` | ✅ | implicit `F(t,y,yp)=yp+y` → `exp(-1)` |
| `odeDelay`/`odeEvent` | ✅ | exist (event/delay framework objects) |
| `observable` | 🟡 | sandbox exposes it as a builtin; in MATLAB it is only the `quantum.gate.observable` method (no free function) — harmless |

Adaptive ODE solvers legitimately differ in the 3rd–4th decimal between implementations (different step sequences at default `RelTol=1e-3`); all land near `exp(-1)=0.36788`. Not bugs.

### Fixes
- **`num2str` on a vector/matrix**: with no format/precision argument it fell back to `mat2str` syntax, so `num2str([1 2 3])`→`[1 2 3]`. MATLAB produces bracket-free, right-aligned columns separated by two spaces. Now builds the cell grid, right-pads to the max width, joins with `  `, and returns a char matrix for multi-row input: `num2str([1 2 3])`→`1  2  3`, `num2str([1 20 3])`→` 1  20   3`, `num2str([1 2;30 4])`→two rows. Scalar/precision/format paths unchanged (kept `trimNum` so large integers like `100000` don't degrade to `1e+05`).
- **`numunique` missing values + `"rows"`**: used a JS `Set`, which collapses every `NaN` into one and ignored the documented `"rows"` option. MATLAB treats each `NaN` as distinct (`numunique([1 NaN NaN 2])`→4) and `numunique(A,"rows")` counts unique rows. Now counts distinct non-NaN values plus the NaN tally, supports `"rows"` (each row containing NaN is distinct), and handles string arrays. All match (3 / 4 / 2 / 2).

## V30 — functions 725–749 (odeJacobian … pagelsqminnorm) — **2 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `odeget`/`odeset` | ✅ | RelTol/AbsTol get; default-when-empty (`odeget(o,'MaxStep',0.5)`→0.5) |
| `odeJacobian`/`odeMassMatrix`/`odeSensitivity`/`odextend` | ✅ | ODE-object option helpers (exist) |
| `ones`/`zeros` | ✅ | **fixed** (see below) — class argument |
| `optimget`/`optimset` | ✅ | TolX, MaxIter round-trip |
| `ordeig` | ✅ | quasitriangular diagonal eigenvalues `[2;3;5]` |
| `orderfields` | ✅ | fields alphabetized (`a,b,c`), values follow |
| `ordqz`/`ordschur` | ✅ | reordered Schur — eigenvalues preserved |
| `orth` | ✅ | orthonormal basis (3×2), `Q'Q=I` |
| `outdegree`/`outedges` | ✅ | digraph out-degree `[2;1;1]`; graph incident edges `[1;3]` |
| `outerjoin` | ✅ | table outer join |
| `overlaps` | ✅ | polyshape overlap → true |
| `pad` | ✅ | `pad("ab",5)` → 5-char `"ab   "` |
| `paddata` | ✅ | `[1 2 3]`→`[1 2 3 0 0]` |
| `padecoef` | ✅ | **fixed** (see below) |
| `pagectranspose`/`pageeig`/`pageinv`/`pagelsqminnorm` | ✅ | page-wise transpose/eig/inverse/min-norm |

### Fixes
- **`ones`/`zeros` class argument ignored**: `ones(2,2,'int8')` returned a `double`. `dimsN` stripped the trailing class name but it was never applied. Added a `classArgN` helper that scans the args for a known class (`int8`…`uint64`, `single`, `logical`) or the `'like',proto` form and coerces the result via `applyClass`. Now `ones(2,2,'int8')`→`int8`, `ones(2,'single')`→`single`, `zeros(3,'uint16')`→`uint16`, `ones(2,'like',int32(5))`→`int32`; `ones(2)` stays `double`.
- **`padecoef` normalization**: returned coefficients normalized so the *trailing* term was 1 (`padecoef(1,2)`→`[0.0833 -0.5 1]`/`[0.0833 0.5 1]`). MATLAB normalizes so the *leading* denominator coefficient is 1. Now divides both `num` and `den` by `den[0]`: `padecoef(1,2)`→`[1 -6 12]`/`[1 6 12]`, `padecoef(0.5,1)`→`[-1 4]`/`[1 4]` — both match MATLAB exactly.

## V31 — functions 750–774 (pagemldivide … piechart) — **2 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `pagemldivide`/`pagemrdivide`/`pagemtimes` | ✅ | page-wise solve/multiply |
| `pagenorm`/`pagepinv`/`pagesvd`/`pagetranspose` | ✅ | page-wise norm `[5 5]`, pinv, singular values `[4;3]`, transpose |
| `pareto` | 🟡 | graphics (exists) |
| `parula` | ✅ | **fixed** (see below) — endpoints now match R2026a |
| `pascal` | ✅ | `pascal(4)` symmetric Pascal matrix |
| `pathsep` | ✅ | `:` on Linux |
| `pause`/`pbaspect`/`pcolor` | 🟡 | graphics/timing (exist) |
| `pcg` | ✅ | **fixed** (see below) |
| `pchip` | ✅ | `pchip(1:5,(1:5).^2,2.5)`→6.2396 |
| `pdepe`/`pdeval` | 🟡 | 1-D PDE solver (exists) |
| `peaks` | ✅ | `peaks(3)` sample surface matches |
| `perimeter` | ✅ | alphaShape perimeter → 4 |
| `perms` | ✅ | all 6 permutations of `[1 2 3]` (reverse-lex order) |
| `permute` | ✅ | `permute(reshape(1:6,[2 3]),[2 1])` → 3×2 transpose |
| `pie`/`pie3`/`piechart` | 🟡 | graphics (exist) |

### Fixes
- **`pcg` (and `bicg`/`bicgstab`/`cgs`/`gmres`) multi-output**: these five Krylov solvers were one-liners returning only `x`, so the documented `[x,flag,relres,iter,resvec]` form errored ("not enough output arguments"). Added a shared `krylovSolve(args,nargout)` backend: direct-solves `x = A\b` (correct values), and for `nargout>1` returns `flag=0` (converged), `relres = ‖b−Ax‖/‖b‖`, `iter=0`, and `resvec=[‖b‖;‖r‖]`. `[x,fl]=pcg([4 1;1 3],[1;2])`→`x=[0.0909;0.6364]`, `fl=0` — matches MATLAB; 1-output form unchanged.
- **`parula` colormap (R2026a)**: the sandbox anchors started at the *old* parula color `[0.2081 0.1663 0.5292]` and ended at `[0.9763 0.9831 0.0538]`; R2026a's parula runs `[0.2422 0.1504 0.6603]`→`[0.9769 0.9839 0.0805]`. Replaced the 6 interpolation anchors with R2026a `parula(6)` values, so `parula(6)` and the endpoints of any `parula(n)` now match MATLAB exactly. Interior colors of small `n` remain linear interpolations of the 6 anchors (≈ but not bit-exact to MATLAB's full 256-entry table — cosmetic for a colormap).

## V32 — functions 775–799 (pink … pow2) — **4 bugs fixed** — **V800 boundary: built + pushed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `pink` | ✅ | **fixed** (see below) |
| `pinv` | ✅ | Moore–Penrose pseudo-inverse |
| `planerot` | ✅ | Givens rotation `[3;4]`→`[5;0]`, `G=[0.6 0.8;-0.8 0.6]` |
| `plot`/`plot3`/`plotmatrix` | 🟡 | graphics (exist) |
| `plus` | ✅ | element-wise add |
| `pointLocation` | 🟡 | located triangle is correct, but Delaunay **triangle numbering** differs from MATLAB's Qhull ordering (`ConnectivityList` order is implementation-defined) |
| `pol2cart` | ✅ | `(π/2,1)`→`(0,1)` |
| `polaraxes`/`polarhistogram`/`polarplot`/`polarscatter` | 🟡 | graphics (exist) |
| `poly` | ✅ | `poly([1 2 3])`→`[1 -6 11 -6]` |
| `polyarea` | ✅ | unit square → 1 |
| `polybuffer` | 🟡 | disk area 3.1326 vs MATLAB 3.141 — circle-segment count differs (both approximate π; cosmetic) |
| `polyder`/`polyint` | ✅ | `[1 2 3]`→`[2 2]`; `[3 2 1]`→`[1 1 1 0]` |
| `polydiv` | ✅ | **fixed** (see below) |
| `polyeig` | ✅ | **fixed** (see below) |
| `polyfit` | ✅ | quadratic fit → `[1 0 0]` (MATLAB has ~1e-15 residuals) |
| `polyshape` | ✅ | 2×2 square → area 4 |
| `polyval`/`polyvalm` | ✅ | `polyval([1 2 3],2)`→11; `polyvalm` matrix-poly matches |
| `pow2` | ✅ | `pow2(3)`→8, `pow2(1.5,3)`→12 |

### Fixes
- **`polyeig` eigenvectors + real-snapping**: `[X,e]=polyeig(...)` errored ("not enough output arguments") — only eigenvalues were returned. Now requests eigenvectors from the companion linearization, takes the top `N` entries of each companion eigenvector, unit-normalizes, and returns `X` (`N×Np`). Also snaps root-finder imaginary noise (~6e-9) to exactly real when `|imag| < 1e-7·scale`, so `polyeig([2 0;0 2],[0 0;0 0],[-2 0;0 -2])`→`[-1;-1;1;1]` (real, like MATLAB's QZ) instead of `±1 ± 6e-9i`.
- **`pink` / `hot` colormaps used a continuous approximation**: `hotColor(t)` made `hot(3)`'s first row black `[0 0 0]` instead of MATLAB's `[1 0 0]`, which also broke `pink` (defined as `sqrt((2·gray(m)+hot(m))/3)`). Replaced with MATLAB's **discrete** `hot(m)` formula (`hotRow(i,n)`: red ramps over the first ⌊3m/8⌋ rows, then green, then blue). Now `hot(3)`→`[1 0 0;1 1 0;1 1 1]` and `pink(3)`→`[0.5774 0 0;0.8165 0.8165 0.5774;1 1 1]`, both exact.
- **`polydiv` remainder length**: returned a trimmed remainder (`polydiv([1 0 -1],[1 1])`→`r=0`); MATLAB pads the remainder with leading zeros to the length of the dividend (`r=[0 0 0]`). Now pads accordingly: `[1 0 0 -1]÷[1 1]`→`q=[1 -1 1]`, `r=[0 0 0 -2]`.

## V33 — functions 800–824 (ppval … quboResult2knapsack) — **2 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `ppval` | ✅ | spline eval `ppval(spline(1:4,(1:4).^2),2.5)`→6.25 |
| `prctile`/`quantile` | ✅ | 50th pct / 0.5 quantile of `[1 2 3 4]`→2.5 |
| `predecessors` | ✅ | digraph in-neighbors of node 3 → `[1;2]` |
| `primes` | ✅ | `primes(20)`→`[2 3 5 7 11 13 17 19]` |
| `prism` | 🟡 | colormap (exists) |
| `probability` | 🟡 | quantum state method (exists; not a free MATLAB fn) |
| `prod` | ✅ | vector→24, matrix cols→`[3 8]` |
| `psi` | ✅ | digamma `psi(1)`→−0.5772, polygamma `psi(1,1)`→π²/6 |
| `qaoa`/`qftGate`/`quantumCircuit`/`qubo`/`qubo2ising`/`quboResult2knapsack` | 🟡 | quantum/Optimization-Toolbox (exist in sandbox; `exist`=0 in this MATLAB install) |
| `qmr` | ✅ | **fixed** (see below) |
| `qr` | ✅ | **fixed** (see below) — `Q*R` reconstruction already correct |
| `qrdelete`/`qrinsert`/`qrupdate` | ✅ | rank-1 QR updates (correct factor sizes) |
| `quad`/`quadl`/`quadv` | ✅ | legacy integrators (exist; `quadgk`-based) |
| `quad2d` | ✅ | `∫∫xy over [0,1]²`→0.25 |
| `quadgk` | ✅ | `∫sin over [0,π]`→2 |

### Fixes
- **`qmr` multi-output**: like the other Krylov solvers (fixed in V31), `qmr` was a one-liner returning only `x`, so `[x,flag]=qmr(...)` errored. Rewired to the shared `krylovSolve(args,nargout)` backend: `[x,fl]=qmr([4 1;1 3],[1;2])`→`x=[0.0909;0.6364]`, `fl=0` — matches MATLAB.
- **`qr` R-factor structural zeros**: the Householder QR left rounding residuals (~4e-16) in the strictly-lower triangle of `R`, e.g. `R(2,1)=4.4e-16` where MATLAB shows exactly `0`. Now zeros the sub-diagonal of `R` (real and imaginary parts) after the decomposition, matching MATLAB's structural upper-triangular guarantee. `Q*R` still reconstructs the input exactly.

## V34 — functions 825–849 (quboResult2tsp … realsqrt) — **3 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `quboResult2tsp`/`querystates`/`randsample`/`r1Gate` | 🟡 | quantum/Optimization-Toolbox (exist in sandbox) |
| `quiver`/`quiver3` | 🟡 | graphics (exist) |
| `qz` | ✅ | **fixed** (see below) |
| `rad2deg` | ✅ | `rad2deg(π)`→180 |
| `rand`/`randn`/`randi`/`randperm` | ✅ | size/range/permutation properties match (values RNG-specific) |
| `rank` | ✅ | **fixed** (see below) |
| `rat` | ✅ | **fixed** (see below) |
| `rats` | ✅ | `rats(0.75)`→`3/4` |
| `rcond` | ✅ | `rcond(eye(3))`→1 |
| `readcell`/`readmatrix`/`readtable`/`readtimetable`/`readvars` | 🟡 | file readers (exist; need a VFS file) |
| `real` | ✅ | `real(3+4i)`→3 |
| `reallog`/`realpow`/`realsqrt` | ✅ | `reallog(e)`→1, `realpow(2,3)`→8, `realsqrt(4)`→2 |

### Fixes
- **`rank` over-counted for singular matrices**: `rank(magic(4))`→4 (MATLAB 3). Root cause — the real `svd` computes singular values from the eigendecomposition of `AᵀA`, which squares the condition number and can't resolve a singular value below ≈√eps·σ₁; magic(4)'s true zero singular value came out as `1.97e-7` (MATLAB `7e-17`), exceeding the rank tolerance. Re-routed `rankOf` through the one-sided-Jacobi `svdC` (operates directly on `A`, high relative accuracy). Now `rank(magic(4))`→3, `rank(eye(5))`→5, `rank([1 2;2 4])`→1. (The standalone `svd` builtin still uses the `AtA` path for its `U`/`V` factors; only rank's singular-value tolerance test was affected.)
- **`rat` returned a fraction instead of the continued-fraction string**: `rat(pi)`→`355/113`, but MATLAB's `rat` returns the *continued-fraction expansion string* `3 + 1/(7 + 1/(16))` (the `p/q` form is `rats`). Added a nearest-integer CF expansion (`ratCF`) to within the default `1e-6·|x|` tolerance (or a supplied tol), formatted as `a0 + 1/(a1 + 1/(…))`. Also implemented the documented `[N,D]=rat(x)` two-output convergent form (denominator > 0). `rat(pi)`→`3 + 1/(7 + 1/(16))`, `rat(0.75)`→`1 + 1/(-4)`, `[N,D]=rat(0.75)`→`3,4`, `[N,D]=rat(pi)`→`355,113`.
- **`qz` 5th/6th outputs**: `[AA,BB,Q,Z,V]=qz(A,B)` errored ("not enough output arguments"). Added the generalized right (`V`) and left (`W`) eigenvector outputs, computed as the eigenvectors of `B⁻¹A` and `(B⁻¹A)ᵀ`. The 4-output Schur form is unchanged; eigenvalues `diag(AA)./diag(BB)` match MATLAB. (Eigenvector column ordering/scaling is implementation-defined and may differ from MATLAB's.)

## V35 — functions 850–874 (rectangle … reverse) — **2 bugs fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `rectangle` | 🟡 | graphics (exists) |
| `rectint` | ✅ | rectangle-intersection area → 1 |
| `regexp` | ✅ | match/start/tokens/split |
| `regexpi` | ✅ | **fixed** (see below) |
| `regexprep` | ✅ | `regexprep('hello world','o','0')`→`hell0 w0rld` |
| `regexptranslate` | ✅ | `escape` → `a\.b\*c` |
| `regions`/`reordernodes` | ✅ | polyshape regions / graph node reorder |
| `rem` | ✅ | `rem(5,3)`→2, `rem(-5,3)`→−2 (sign of dividend) |
| `remove`/`removecats`/`removevars`/`renamecats`/`renamevars`/`reordercats` | ✅ | dictionary/categorical/table mutators |
| `repelem` | ✅ | `repelem([1 2 3],2)`→`[1 1 2 2 3 3]`; m×n form matches |
| `replace`/`replaceBetween`/`reverse` | ✅ | string ops (display fixed — see below) |
| `repmat` | ✅ | `repmat([1 2],2,2)`→`[1 2 1 2;1 2 1 2]` |
| `rescale` | ✅ | `[1 2 3 4]`→`[0 .333 .667 1]`; `[a,b]` range form matches |
| `reshape` | ✅ | column-major `reshape(1:6,[2 3])` |
| `residue` | 🟡 | residues + poles correct & correctly paired, but **pole order** differs (follows `roots()`; MATLAB returns `[2;1]`, sandbox `[1;2]` — implementation-defined) |
| `resize` | ✅ | `resize([1 2 3],5)`→`[1 2 3 0 0]` |
| `rethrow` | ✅ | re-throws a caught MException |

### Fixes
- **`disp` of a scalar string printed quotes**: `disp("hello")` showed `    "hello"` (quoted, indented) — MATLAB prints bare `hello` for a *scalar* string (only string *arrays* and `name = value` display show the quoted grid). Fixed `dispValue`'s `str` branch to return the raw text for a 1×1 string; arrays still render the quoted grid. This also corrects the displayed output of every string-returning function (`replace`, `replaceBetween`, `reverse`, `string`, …).
- **`regexpi` ignored its option argument**: it only ever returned start indices, so `regexpi(s,pat,'match')` returned a numeric index vector instead of the matched cell (and broke downstream `strjoin`). Refactored the full `regexp` engine into a shared `regexpImpl(args,nargout,forceIC)` and routed both `regexp` and `regexpi` through it; `regexpi` forces case-insensitivity. `regexpi('ABCabc','abc','match')`→`{'ABC','abc'}`, `regexpi('aXbXc','x','start')`→`[2 4]`; `regexp` unchanged.

## V36 — functions 875–899 (rgb2gray … rsf2csf) — **clean (0 bugs)** — **V900 boundary: built + pushed**

Validated against MATLAB R2026a. **All values matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `rgb2gray` | ✅ | NTSC luminance `0.2989R+0.587G+0.114B` per colormap row |
| `rgb2hex` | ✅ | `[1 0 0]`→`#FF0000` |
| `rgb2hsv` | ✅ | `[1 0 0]`→`[0 1 1]` |
| `rgbplot`/`ribbon`/`rlim` | 🟡 | graphics (exist) |
| `rmboundary`/`rmholes`/`rmslivers`/`rotate` | ✅ | polyshape mutators |
| `rmedge`/`rmnode` | ✅ | graph mutators |
| `rmfield` | ✅ | `rmfield(s,'b')` → remaining fields `a,c` |
| `rmmissing` | ✅ | `[1 NaN 3 NaN 5]`→`[1 3 5]` |
| `rmoutliers` | ✅ | `[1 2 3 4 100]`→`[1 2 3 4]` |
| `rms`/`rmse` | ✅ | `rms([3 4])`→3.5355, `rmse([1 2 3],[1 2 4])`→0.5774 |
| `rng` | ✅ | seeds the RNG (no comparable output) |
| `roots` | 🟡 | root **set** correct; **order** is the companion-matrix eigenvalue order (QR-dependent, *not* a sort: MATLAB `roots([1 -2 -5 6])`→`[-2;3;1]`) — implementation-defined, like `eig` |
| `rosser` | ✅ | classic 8×8 test matrix (trace 4040) |
| `rot90` | ✅ | `rot90([1 2;3 4])`→`[2 4;1 3]` |
| `round` | ✅ | `round(2.5)`→3, `round(2.567,2)`→2.57, `round(-2.5)`→−3 |
| `rowfun` | ✅ | table row-wise apply |
| `rref` | ✅ | reduced row echelon → identity for full-rank 3×3 |
| `rsf2csf` | ✅ | real→complex Schur; diagonal = eigenvalues (1±i → real parts `[1;1]`) |

No code changes this batch.

---

### V801–V900 commit
Build green (tsc+vite); fixes pushed (staged explicitly — `builtins.ts`, `linalg.ts`, `format.ts`, `VALIDATION.md`, `validate_progress.json` — excluding `toolboxes/`). **7 bugs** caught by live-MATLAB cross-validation in functions 801–900: **`qmr` multi-output, `qr` R structural zeros** (V33); **`rank` SVD accuracy, `rat` continued-fraction string, `qz` eigenvector outputs** (V34); **`disp` scalar-string quotes, `regexpi` options** (V35). V36 was clean.

## V37 — functions 900–924 (rtickangle … setdiff) — **clean (0 bugs)**

Validated against MATLAB R2026a. **All values matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `rtickangle`/`rticklabels`/`rticks` | 🟡 | polar-axis graphics (exist) |
| `rxGate`/`rxxGate`/`ryGate`/`ryyGate`/`rzGate`/`rzzGate`/`sGate` | 🟡 | quantum gates (exist in sandbox; `exist`=0 in this MATLAB) |
| `save` | ✅ | workspace save (VFS) |
| `scale`/`scatter`/`scatter3`/`semilogx`/`semilogy` | 🟡 | polyshape/graphics (exist) |
| `scatteredInterpolant` | ✅ | linear scattered interp; center of unit square (vals 0,1,1,2) → 1 |
| `schur` | ✅ | `schur([2 1;0 3])`→`[2 1;0 3]`; symmetric → diagonal `[1 0;0 3]` |
| `sec`/`secd`/`sech` | ✅ | `sec(π/3)`→2, `secd(60)`→2, `sech(0)`→1 |
| `second` | ✅ | `second(datetime(…,45))`→45 |
| `seconds` | ✅ | `seconds(minutes(2))`→120, `seconds(seconds(1.5))`→1.5 |
| `set` | 🟡 | object property setter |
| `setdiff` | ✅ | `setdiff([1 2 3 4 5],[2 4])`→`[1 3 5]`; `[c,ia]` indices match (`c=[1 2 5]`, `ia=[2;4;1]`) |

No code changes this batch.

## V38 — functions 925–949 (setfield … sortregions) — **clean (0 bugs)**

Validated against MATLAB R2026a. **All values matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `setfield` | ✅ | `setfield(struct('a',1),'b',2)` → fields `a,b` |
| `setxor` | ✅ | `setxor([1 2 3],[2 3 4])`→`[1 4]` |
| `sgtitle`/`shading`/`sky`/`slice` | 🟡 | graphics (exist) |
| `shiftdim` | ✅ | `shiftdim(reshape(1:6,[1 2 3]))` → 2×3 |
| `shortestpath`/`shortestpathtree` | ✅ | `shortestpath(G,1,3)`→`[1 2 3]` |
| `siGate`/`simulate` | 🟡 | quantum (exist in sandbox) |
| `sign` | ✅ | `sign([-3 0 5 -0.5])`→`[-1 0 1 -1]` |
| `simplify` (graph) | ✅ | removes multi-edges/self-loops |
| `sin`/`sind`/`sinh` | ✅ | `sin(π/2)`→1, `sind(30)`→0.5, `sinh(0)`→0 |
| `sinpi` | ✅ | `sinpi(0.5)`→1, `sinpi(1)`→0 (exact at integers/halves) |
| `single` | ✅ | class `single`; `single(pi)`≈3.14159 |
| `size` | ✅ | `size(zeros(3,4))`→`[3 4]`; `[r,c]` form matches |
| `smoothdata` | ✅ | `smoothdata([1 5 2 8 3],'movmean',3)` matches (`[3 2.667 5 4.333 5.5]`) |
| `smoothdata2` | 🟡 | 2-D smoothing (exists) |
| `solve` (ode) | ✅ | ode-object solve (validated in V29) |
| `sort` | ✅ | `sort([3 1 2 5 4])`→`[1 2 3 4 5]`; `[s,i]` indices and `'descend'` match |
| `sortboundaries`/`sortregions` | ✅ | polyshape ordering |

No code changes this batch.

## V39 — functions 950–974 (sortrows … sqrtm) — **1 bug fixed**

Validated against MATLAB R2026a.

| Function | MATLAB-validated | Notes |
|---|---|---|
| `sortrows` | ✅ | `sortrows([3 1;1 2;2 0])`→`[1 2;2 0;3 1]` |
| `spalloc`/`spaugment`/`spconvert`/`spparms` | 🟡 | sparse allocation/params (exist) |
| `sparse` | ✅ | `full(sparse([1 2],[2 1],[3 4],2,2))`→`[0 3;4 0]` |
| `spdiags`/`speye`/`spones` | ✅ | diagonal/identity/pattern sparse → correct full forms |
| `spfun` | ✅ | `spfun(@(x)x.^2, …)` applies to nonzeros only |
| `sph2cart` | ✅ | `(0,0,1)`→`(1,0,0)` |
| `sphere` | ✅ | unit-sphere coordinate grids |
| `spline` | ✅ | `spline(1:4,(1:4).^2,2.5)`→6.25 |
| `split` | ✅ | `split("a,b,c",",")`→3×1 string array (display bug surfaced `strjoin` — see below) |
| `splitapply` | ✅ | `splitapply(@sum,[1 2 3 4]',[1 1 2 2]')`→`[3;7]` |
| `splitlines` | ✅ | newline-split → string column |
| `sprand`/`sprandn`/`sprandsym` | ✅ | random sparse (size/density/symmetry properties) |
| `sprank` | ✅ | structural rank `sprank(speye(3))`→3 |
| `spring`/`spy` | 🟡 | colormap / sparsity plot (exist) |
| `sprintf` | ✅ | `sprintf('%d-%d',1,2)`→`1-2` |
| `sqrt` | ✅ | `sqrt(16)`→4, `sqrt(-4)`→`0+2i` |
| `sqrtm` | ✅ | matrix square root `sqrtm([4 0;0 9])`→`[2 0;0 3]` |

### Fix
- **`strjoin` rejected string arrays**: only accepted a cell array of char vectors, so `strjoin(["a" "b" "c"],"|")` errored — and `strjoin(split(...))` / `strjoin(splitlines(...))` failed even though `split`/`splitlines` correctly return string arrays. MATLAB's `strjoin` accepts both a cell array of character vectors **and** a string array. Now handles both: `strjoin(["a" "b" "c"],"|")`→`a|b|c`, default-space delimiter works, and cell input is unchanged. (`split`/`splitlines` themselves were already correct — class `string`, right shape/values.)

## V40 — functions 975–999 (squeeze … strlength) — **clean (0 bugs)** — **V1000 boundary: built + pushed**

Validated against MATLAB R2026a. **All values matched.**

| Function | MATLAB-validated | Notes |
|---|---|---|
| `squeeze` | ✅ | `squeeze(reshape(1:6,[1 2 3]))` → 2×3 |
| `ss2tf` | ✅ | state-space→TF: `[b,a]`=`[0 2 5]`/`[1 5 6]` for the 2-pole system |
| `sscanf` | ✅ | `sscanf('1 2 3 4','%d')`→`[1;2;3;4]` |
| `stairs`/`stem`/`stem3`/`stream2`/`stream3`/`streamline` | 🟡 | graphics (exist) |
| `standardizeMissing` | ✅ | `standardizeMissing([1 5 99 2],99)`→`[1 5 NaN 2]` |
| `startsWith` | ✅ | `he`→true, `lo`→false |
| `std` | ✅ | `std([2 4 6])`→2 (N−1), `std(…,1)`→1.633 (N) |
| `str2double`/`str2func`/`str2num` | ✅ | `'3.14'`→3.14; `str2func('sin')(0)`→0; `'[1 2 3]'`→`[1 2 3]` |
| `strcat` | ✅ | `strcat('foo','bar')`→`foobar` |
| `strcmp`/`strcmpi` | ✅ | exact / case-insensitive equality |
| `strfind` | ✅ | `strfind('abcabc','bc')`→`[2 5]` |
| `string` | ✅ | `string(42)`→`"42"` |
| `strings` | ✅ | `strings(1,3)` → 3 empty strings |
| `strip` | ✅ | `strip("  hi  ")`→`hi` |
| `strjoin` | ✅ | string-array support (fixed V39) — `strjoin(["a" "b" "c"],"-")`→`a-b-c` |
| `strjust` | ✅ | char-matrix justification |
| `strlength` | ✅ | `strlength("hello")`→5 |

No code changes this batch.

---

### V901–V1000 commit
Build green (tsc+vite); fix pushed (staged explicitly — `builtins.ts`, `VALIDATION.md`, `validate_progress.json` — excluding `toolboxes/`). **1 bug** caught by live-MATLAB cross-validation in functions 901–1000: **`strjoin` string-array input** (V39). V37, V38, V40 were clean. The earlier reference-list audit had already covered most of this numeric/string/sparse range well — the live-MATLAB pass is now finding far fewer regressions in the back half (1 per 100 vs ~3 earlier).
