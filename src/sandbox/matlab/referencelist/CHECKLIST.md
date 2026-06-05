# Master checklist — reference-list conformance

Per-function audit status. ✅ converged · 🟡 partial · ⛔ not feasible · ⬜ not yet audited.
Progress: **780 / 1170** audited.

| # | Function | Status | Note |
|---|---|---|---|
| 1 | `GraphPlot` | 🟡 | plots only; no numeric diff; handle queries unsupported |
| 2 | `MException` | 🟡 | construct/throw/catch OK; `.stack` display + `input()` not modeled |
| 3 | `NaT` | 🟡 | `NaT(n)`/`NaT(m,n)` sizing fixed; indexed datetime assign needs datetime type |
| 4 | `RandStream` | ⛔ | RNG stream object; non-deterministic, can't match doc |
| 5 | `abort` | ⛔ | drone hardware support package |
| 6 | `abs` | ✅ | real & complex magnitude verified |
| 7 | `abyss` | 🟡 | colormap OK; one example needs `heatmap` |
| 8 | `accumarray` | ✅ | rewritten: matrix subs, sz, fun, fillval, sparse |
| 9 | `acos` | ✅ | complex branch fixed |
| 10 | `acosd` | ✅ | complex out-of-domain fixed |
| 11 | `acosh` | ✅ | complex branch |
| 12 | `acot` | ✅ | complex branch (imag-axis fix) |
| 13 | `acotd` | ✅ | complex, degrees |
| 14 | `acoth` | ✅ | complex branch |
| 15 | `acsc` | ✅ | complex branch |
| 16 | `acscd` | ✅ | complex, degrees |
| 17 | `acsch` | ✅ | complex branch |
| 18 | `addboundary` | 🟡 | NumHoles added; multi-region + array-plot pending |
| 19 | `addcats` | 🟡 | append OK; 2-D categorical pending |
| 20 | `addedge` | 🟡 | named-node auto-add fixed; edge-table pending |
| 21 | `addnode` | 🟡 | add by count/name; Nodes-as-table pending |
| 22 | `addpoints` | 🟡 | numeric OK; datetime animated lines pending |
| 23 | `addtodate` | ✅ | needed datenum string parsing (fixed) |
| 24 | `addvars` | ⛔ | builtin works; examples need `patients` dataset |
| 25 | `adjacency` | ✅ | sparse header added |
| 26 | `airy` | ✅ | Ai/Bi + derivatives |
| 27 | `all` | ✅ | dim/vecdim/'all'/N-D fixed |
| 28 | `allcycles` | ✅ | edge output + MaxNum/length options |
| 29 | `allfinite` | ✅ | any-dim finite test |
| 30 | `allpaths` | ✅ | edge output + MaxNum/length options |
| 31 | `allunique` | ✅ | NaN/strings/'rows' fixed |
| 32 | `alpha` | 🟡 | transparency setter; graphics |
| 33 | `alphaShape` | 🟡 | 2D/3D; large-3D guarded; default-alpha differs |
| 34 | `alphaSpectrum` | ✅ | alpha spectrum |
| 35 | `alphaTriangulation` | 🟡 | small OK; large-3D returns empty |
| 36 | `alphamap` | 🟡 | presets accepted; not rendered |
| 37 | `amd` | ✅ | greedy min-degree; examples need dataset |
| 38 | `angle` | ✅ | phase angle; command-label parse fixed |
| 39 | `animatedline` | 🟡 | create/add/get; datetime pending |
| 40 | `annotation` | 🟡 | objects accepted; not rendered |
| 41 | `any` | ✅ | dim/vecdim/'all'/N-D |
| 42 | `anymissing` | ✅ | multi-type missing; table display partial |
| 43 | `anynan` | ✅ | NaN-only (Inf excluded) |
| 44 | `append` | ✅ | string-array broadcast fixed |
| 45 | `area` | 🟡 | polyshape area; plotting n/a |
| 46 | `array2table` | ✅ | names/rownames |
| 47 | `arrayfun` | ✅ | struct arrays + UniformOutput + multi-out |
| 48 | `asec` | ✅ | complex |
| 49 | `asecd` | ✅ | complex, degrees |
| 50 | `asech` | ✅ | complex |
| 51 | `asin` | ✅ | complex |
| 52 | `asind` | ✅ | complex; tiny-imag display nit |
| 53 | `asinh` | ✅ | real & complex |
| 54 | `assert` | ✅ | sprintf messages + default text |
| 55 | `atan` | ✅ | complex |
| 56 | `atan2` | ✅ | four-quadrant |
| 57 | `atan2d` | ✅ | four-quadrant, degrees |
| 58 | `atand` | ✅ | complex-aware (fixed) |
| 59 | `atanh` | ✅ | branch sign fixed |
| 60 | `autumn` | ✅ | colormap |
| 61 | `axis` | 🟡 | setter ok; query needs live axes |
| 62 | `balance` | ✅ | eigenvalue balancing |
| 63 | `bandwidth` | ✅ | lower/upper option fixed |
| 64 | `bar` | 🟡 | drawn; Bar-object props pending |
| 65 | `bar3` | 🟡 | drawn; surface props pending |
| 66 | `bar3h` | 🟡 | drawn; style handle edits pending |
| 67 | `barh` | 🟡 | drawn; Bar-object props pending |
| 68 | `barycentricToCartesian` | ✅ | triangulation coords |
| 69 | `base2dec` | ✅ | string-array support fixed |
| 70 | `bctree` | 🟡 | tree built; node tables/2nd output pending |
| 71 | `beep` | ✅ | accepted; silent (no audio) |
| 72 | `besselh` | ✅ | Hankel kinds + scaled |
| 73 | `besseli` | ✅ | modified I |
| 74 | `besselj` | ✅ | first kind |
| 75 | `besselk` | ✅ | modified K |
| 76 | `bessely` | ✅ | second kind |
| 77 | `beta` | ✅ | + format rat display |
| 78 | `betainc` | ✅ | vectorized + upper tail |
| 79 | `betaincinv` | ✅ | inverse incomplete beta |
| 80 | `betaln` | ✅ | large-arg overflow fixed |
| 81 | `bfsearch` | 🟡 | BFS order; event-table mode pending |
| 82 | `bicg` | 🟡 | solver; random/dataset examples |
| 83 | `bicgstab` | 🟡 | solver; random/dataset examples |
| 84 | `bicgstabl` | 🟡 | solver; random/dataset examples |
| 85 | `biconncomp` | 🟡 | 1st output ok; cell/2nd output pending |
| 86 | `bin2dec` | ✅ | string arrays + 0b literals |
| 87 | `bitand` | ✅ | bit-wise AND |
| 88 | `bitcmp` | ✅ | type-width complement |
| 89 | `bitget` | ✅ | bit at position(s) |
| 90 | `bitor` | ✅ | OR; format hex display pending |
| 91 | `bitset` | ✅ | type arg + vectorized |
| 92 | `bitshift` | ✅ | assumedtype masking |
| 93 | `bitxor` | ✅ | bit-wise XOR |
| 94 | `blanks` | ✅ | n spaces |
| 95 | `blkdiag` | ✅ | block-diagonal |
| 96 | `bone` | ✅ | colormap |
| 97 | `boundary` | 🟡 | matrix/3-D fixed; shrink-factor approx |
| 98 | `boundaryFacets` | 🟡 | facets; 2-output pending |
| 99 | `boundaryshape` | 🟡 | tri->polyshape |
| 100 | `boundingbox` | 🟡 | bbox; holes pending |
| 101 | `bounds` | ✅ | dim/vecdim/'all'/N-D |
| 102 | `box` | ✅ | axes outline |
| 103 | `brighten` | ✅ | colormap brighten |
| 104 | `bsxfun` | ✅ | implicit expansion |
| 105 | `bvp4c` | 🟡 | solver; page-local fns/plots |
| 106 | `bvp5c` | 🟡 | solver; page-local fns/plots |
| 107 | `bvpget` | ✅ | read BVP option |
| 108 | `bvpinit` | 🟡 | guess struct; chains to bvp4c |
| 109 | `bvpset` | ✅ | BVP options struct |
| 110 | `bvpxtend` | ✅ | extend BVP solution |
| 111 | `camlight` | 🟡 | accepted; not rendered |
| 112 | `cart2pol` | ✅ | 3-output cylindrical fixed |
| 113 | `cart2sph` | ✅ | spherical |
| 114 | `cartesianToBarycentric` | ✅ | triangulation coords |
| 115 | `cast` | 🟡 | value ok; int-type partial |
| 116 | `cat` | ✅ | concat any dim |
| 117 | `categorical` | ✅ | constructor/compare/index fixed |
| 118 | `categories` | ✅ | list categories |
| 119 | `ccxGate` | ✅ | Toffoli gate |
| 120 | `cdf2rdf` | 🟡 | eigvec freedom differs |
| 121 | `ceil` | ✅ | complex fixed; duration pending |
| 122 | `cell` | ✅ | row-grow assignment fixed |
| 123 | `cell2mat` | ✅ | block assembly |
| 124 | `cell2struct` | 🟡 | string-cell display pending |
| 125 | `cell2table` | 🟡 | inputname names pending |
| 126 | `celldisp` | 🟡 | label format differs |
| 127 | `cellfun` | ✅ | UniformOutput/multi-out |
| 128 | `cellstr` | ✅ | string-array input fixed |
| 129 | `centrality` | 🟡 | Nodes-table assign pending |
| 130 | `centroid` | 🟡 | multi-boundary pending |
| 131 | `cgs` | 🟡 | solver; random/dataset examples |
| 132 | `chGate` | 🟡 | gate object |
| 133 | `char` | ✅ | string/cellstr/multi-arg fixed |
| 134 | `chol` | ✅ | lower + [R,flag] fixed |
| 135 | `cholupdate` | ✅ | rank-1 update |
| 136 | `circshift` | ✅ | dim argument fixed |
| 137 | `circumcenter` | 🟡 | needs trimesh2d dataset |
| 138 | `cla` | 🟡 | accepted; not rendered |
| 139 | `class` | ✅ | class-name |
| 140 | `clc` | ✅ | clear window |
| 141 | `clear` | 🟡 | removes vars; whos format |
| 142 | `clearpoints` | ✅ | clear animated line |
| 143 | `clf` | 🟡 | accepted; not rendered |
| 144 | `clim` | 🟡 | setter; not rendered |
| 145 | `clip` | ✅ | array bounds via broadcast |
| 146 | `clock` | 🟡 | live clock (non-deterministic) |
| 147 | `close` | 🟡 | accepted; not rendered |
| 148 | `cmap2gray` | 🟡 | needs image dataset |
| 149 | `cnotGate` | 🟡 | gate object |
| 150 | `colamd` | 🟡 | needs west0479 dataset |
| 151 | `colon` | ✅ | non-scalar bound -> first element |
| 152 | `colorbar` | 🟡 | accepted; not rendered |
| 153 | `colorcube` | 🟡 | colormap matrix |
| 154 | `colormap` | 🟡 | set ok; query needs state |
| 155 | `colororder` | 🟡 | accepted; graphics examples |
| 156 | `colperm` | ✅ | nonzero-count permutation |
| 157 | `combine` | 🟡 | symbolic ok; datastores n/a |
| 158 | `comet` | 🟡 | accepted; not rendered |
| 159 | `comet3` | 🟡 | accepted; not rendered |
| 160 | `compan` | ✅ | companion matrix |
| 161 | `compass` | 🟡 | accepted; not rendered |
| 162 | `complex` | ✅ | complex construction |
| 163 | `compose` | ✅ | vectorized + matrix grouping |
| 164 | `compositeGate` | 🟡 | gate object |
| 165 | `cond` | ✅ | p-norm argument fixed |
| 166 | `condeig` | ✅ | eigenvalue conditioning |
| 167 | `condensation` | ✅ | SCC condensation |
| 168 | `condest` | ✅ | 1-norm estimate |
| 169 | `coneplot` | 🟡 | accepted; not rendered |
| 170 | `conj` | ✅ | complex conjugate |
| 171 | `conncomp` | 🟡 | components; numbering order differs |
| 172 | `containers.Map` | ✅ | vector/array key+value sets fixed |
| 173 | `contains` | 🟡 | substring ok; pattern objects n/a |
| 174 | `contour` | 🟡 | drawn |
| 175 | `contour3` | 🟡 | drawn |
| 176 | `contourc` | 🟡 | matrix; algorithm differs |
| 177 | `contourf` | 🟡 | drawn |
| 178 | `contourslice` | 🟡 | accepted; not rendered |
| 179 | `conv` | ✅ | same/valid shapes fixed |
| 180 | `conv2` | ✅ | 2-D conv; random examples |
| 181 | `convertCharsToStrings` | ✅ | multi-output fixed |
| 182 | `convertStringsToChars` | ✅ | multi-output fixed |
| 183 | `convexHull` | 🟡 | 2-output on triangulation pending |
| 184 | `convhull` | ✅ | matrix input + area fixed |
| 185 | `convhulln` | ✅ | N-D hull + volume |
| 186 | `convn` | ✅ | N-D conv; random examples |
| 187 | `cool` | ✅ | colormap |
| 188 | `copper` | ✅ | colormap |
| 189 | `corrcoef` | ✅ | verified; randn examples |
| 190 | `cos` | ✅ | real & complex |
| 191 | `cosd` | ✅ | degrees cosine |
| 192 | `cosh` | ✅ | hyperbolic cosine |
| 193 | `cospi` | ✅ | accurate cos(pi x) |
| 194 | `cot` | ✅ | complex fixed |
| 195 | `cotd` | ✅ | degrees; eps(x) fixed |
| 196 | `coth` | ✅ | hyperbolic cotangent |
| 197 | `count` | 🟡 | substring; patterns n/a |
| 198 | `countcats` | 🟡 | counts; summary(cat) n/a |
| 199 | `cov` | ✅ | two-matrix + w flag fixed |
| 200 | `cplxpair` | ✅ | conjugate pairs |
| 201 | `cputime` | 🟡 | non-deterministic timing |
| 202 | `cr1Gate` | 🟡 | gate object; getMatrix n/a |
| 203 | `criticalAlpha` | 🟡 | alpha-shape internal |
| 204 | `cross` | ✅ | verified; random examples |
| 205 | `crxGate` | 🟡 | gate object; getMatrix n/a |
| 206 | `cryGate` | 🟡 | gate object; getMatrix n/a |
| 207 | `crzGate` | 🟡 | gate object; getMatrix n/a |
| 208 | `csc` | ✅ | complex fixed |
| 209 | `cscd` | ✅ | complex + exact zeros |
| 210 | `csch` | ✅ | complex fixed |
| 211 | `csvread` | 🟡 | VFS read; no doc files |
| 212 | `csvwrite` | 🟡 | VFS write |
| 213 | `ctranspose` | ✅ | conjugate transpose |
| 214 | `cummax` | ✅ | reverse/omitnan/dim fixed |
| 215 | `cummin` | ✅ | reverse/omitnan/dim fixed |
| 216 | `cumprod` | ✅ | reverse/omitnan fixed |
| 217 | `cumsum` | ✅ | reverse/omitnan fixed |
| 218 | `cumtrapz` | ✅ | cumulative trapz |
| 219 | `curl` | 🟡 | needs wind dataset |
| 220 | `cxGate` | 🟡 | gate object; getMatrix n/a |
| 221 | `cyGate` | 🟡 | gate object |
| 222 | `cyclebasis` | 🟡 | basis; rotation differs |
| 223 | `cylinder` | 🟡 | surface coords |
| 224 | `czGate` | 🟡 | gate object |
| 225 | `daspect` | 🟡 | setter; not rendered |
| 226 | `date` | 🟡 | live clock |
| 227 | `datenum` | ✅ | components/string/vector |
| 228 | `datestr` | 🟡 | date-vector/datetime improved |
| 229 | `datetime` | 🟡 | string/props improved; major gap |
| 230 | `datevec` | 🟡 | number/datetime; string parse pending |
| 231 | `day` | ✅ | **fixed**: `dayType` (dayofweek/dayofyear/name/shortname) |
| 232 | `days` | ✅ | **fixed**: displays as "N days" not hh:mm:ss |
| 233 | `dblquad` | ✅ | forwards to integral2; verified |
| 234 | `dde23` | ✅ | constant-delay DDE solver |
| 235 | `ddeget` | ✅ | read DDE option w/ default |
| 236 | `ddensd` | ✅ | neutral DDE solver |
| 237 | `ddesd` | ✅ | state-dependent-delay DDE solver |
| 238 | `ddeset` | ✅ | DDE options struct |
| 239 | `deal` | ✅ | **fixed**: `[C{:}]=deal(...)` cell-content expansion |
| 240 | `deblank` | ✅ | **fixed**: cell/string-array trimming |
| 241 | `dec2base` | ✅ | any base 2–36; two's-comp negatives |
| 242 | `dec2bin` | ✅ | **fixed**: negative → 8-bit two's complement |
| 243 | `dec2hex` | ✅ | **fixed**: negative → two's complement (FF/F0) |
| 244 | `decic` | ✅ | **fixed**: honors fixed_y0/fixed_yp0, solves free comps |
| 245 | `decomposition` | 🟡 | solve reuse works; `class` returns double (no object type) |
| 246 | `deconv` | ✅ | polynomial division / deconvolution |
| 247 | `deg2rad` | ✅ | degrees → radians |
| 248 | `degree` | ✅ | **fixed via** cell-transpose: node-name lookup `degree(G,{...}')` |
| 249 | `del2` | ✅ | **fixed**: boundary linear-extrapolation (last elt was wrong) |
| 250 | `delaunay` | 🟡 | triangulation built; exact triangles depend on RNG/order |
| 251 | `delaunayTriangulation` | 🟡 | connectivity list built; no object/property model |
| 252 | `delaunayn` | ✅ | N-D simplex index list |
| 253 | `delete` | ✅ | VFS files + graphics handles |
| 254 | `det` | ✅ | determinant via LU |
| 255 | `detrend` | ✅ | constant/linear/poly trend removal |
| 256 | `deval` | ✅ | evaluate ODE/BVP/DDE sol struct |
| 257 | `dfsearch` | ✅ | depth-first order; allevents table |
| 258 | `diag` | ✅ | **fixed**: `k` offset (place/extract); preserves complex |
| 259 | `dictionary` | ✅ | key→value map, insert/lookup/numEntries |
| 260 | `diff` | ✅ | **fixed**: order `n` and `dim` args honored |
| 261 | `digraph` | ✅ | directed graph; Edges/Nodes tables, toposort |
| 262 | `dir` | ✅ | VFS listing (struct array + print) |
| 263 | `discretize` | ✅ | **fixed**: scalar-N bins + 2nd output `E` + value labels |
| 264 | `disp` | ✅ | name-less display |
| 265 | `dissect` | 🟡 | nested-dissection ordering (perm); needs dataset to compare fill |
| 266 | `distances` | ✅ | all-pairs / source-subset shortest paths |
| 267 | `divergence` | ✅ | 2-D/3-D vector-field divergence |
| 268 | `dlmread` | ✅ | delimited numeric read from VFS |
| 269 | `dlmwrite` | ✅ | delimited write to VFS |
| 270 | `dmperm` | ✅ | Dulmage-Mendelsohn / max matching perm |
| 271 | `doc` | ✅ | shows in-REPL help (no browser in sandbox) |
| 272 | `donutchart` | 🟡 | renders a ring chart; visual only |
| 273 | `dot` | ✅ | **fixed**: column-wise for matrices + `dim` arg |
| 274 | `double` | ✅ | convert to double; `double('A')`=65 |
| 275 | `drawnow` | ✅ | yields/flush (no-op render in sandbox) |
| 276 | `dsearchn` | ✅ | **fixed**: 2nd output `dist` |
| 277 | `duration` | ✅ | **fixed**: `duration(H,MI,S[,MS])` constructor + hh:mm:ss rounding |
| 278 | `edgeAttachments` | ✅ | triangles attached to an edge (cell) |
| 279 | `edgecount` | ✅ | **fixed**: scalar/vector broadcast over node pairs |
| 280 | `edges` | ✅ | unique triangulation edges |
| 281 | `edit` | ✅ | opens VFS file in editor buffer |
| 282 | `eig` | ✅ | **fixed**: `eig(A,"matrix")` → diagonal matrix |
| 283 | `eigs` | 🟡 | iterative subset; approximate, can differ/duplicate |
| 284 | `ellipj` | ✅ | Jacobi sn/cn/dn via AGM |
| 285 | `ellipke` | ✅ | complete elliptic integrals K,E |
| 286 | `ellipsoid` | ✅ | surface coords (n+1)×(n+1) |
| 287 | `endsWith` | ✅ | suffix test over string arrays |
| 288 | `entries` | ✅ | **fixed**: returns table (or struct array w/ `"struct"`) |
| 289 | `eomday` | ✅ | last day of month; leap-year aware |
| 290 | `eq` | ✅ | element-wise equality (==) |
| 291 | `equilibrate` | ✅ | row/col scaling perm P,R,C |
| 292 | `erase` | ✅ | delete substrings (array of matches) |
| 293 | `eraseBetween` | ✅ | **fixed**: numeric `startPos,endPos` positions |
| 294 | `erf` | ✅ | error function |
| 295 | `erfc` | ✅ | complementary error function |
| 296 | `erfcinv` | ✅ | **fixed**: NaN outside [0,2] domain |
| 297 | `erfcx` | ✅ | **fixed**: accurate Chebyshev (no overflow for large x) |
| 298 | `erfinv` | ✅ | **fixed**: NaN outside [-1,1] domain |
| 299 | `error` | ✅ | throw error w/ id + sprintf format |
| 300 | `errorbar` | 🟡 | renders; vertical/horizontal/both |
| 301 | `etime` | ✅ | seconds between date vectors |
| 302 | `etree` | ✅ | elimination tree parent vector |
| 303 | `etreeplot` | 🟡 | renders elimination tree |
| 304 | `eval` | ✅ | **fixed**: runs in caller scope (assignments persist), display when no output |
| 305 | `evalc` | ✅ | **fixed**: captures output of value-less commands (disp) |
| 306 | `evaluateObjective` | ✅ | QUBO objective; multi-column scoring |
| 307 | `exist` | ✅ | var/builtin/file/dir codes |
| 308 | `exp` | ✅ | exponential (real+complex) |
| 309 | `expand` | ✅ | symbolic expansion |
| 310 | `expint` | ✅ | **fixed**: complex E1(z) support |
| 311 | `expm` | ✅ | **fixed**: complex matrix exponential (was dropping imaginary parts) |
| 312 | `expm1` | ✅ | accurate exp(x)-1 |
| 313 | `expmv` | ✅ | **fixed**: honors `t` → expm(t*A)*b; complex |
| 314 | `extract` | 🟡 | literal/regex matches work; pattern objects (digitsPattern) not modeled |
| 315 | `extractAfter` | ✅ | **fixed**: numeric position + per-element boundary array |
| 316 | `extractBefore` | ✅ | **fixed**: numeric position + per-element boundary array |
| 317 | `extractBetween` | ✅ | **fixed**: numeric positions + per-element boundaries |
| 318 | `eye` | ✅ | **fixed**: `eye(n,classname)` type argument |
| 319 | `ezcontour` | 🟡 | renders contour |
| 320 | `ezcontourf` | 🟡 | renders filled contour |
| 321 | `ezmesh` | 🟡 | renders 3-D mesh |
| 322 | `ezmeshc` | 🟡 | renders mesh + contour |
| 323 | `ezplot` | 🟡 | renders function/implicit curve |
| 324 | `ezplot3` | 🟡 | renders 3-D parametric curve |
| 325 | `ezpolar` | 🟡 | renders polar curve |
| 326 | `ezsurf` | 🟡 | renders 3-D surface |
| 327 | `ezsurfc` | 🟡 | renders surface + contour |
| 328 | `faceNormal` | ✅ | unit face normals (3-D triangulation) |
| 329 | `factor` | ✅ | **fixed**: preserves integer class of input |
| 330 | `factorial` | ✅ | **fixed**: preserves integer class; full-integer display for int types |
| 331 | `fcontour` | 🟡 | renders function contour |
| 332 | `feather` | 🟡 | renders feather/vector plot |
| 333 | `featureEdges` | ✅ | sharp/boundary edges of a triangulation |
| 334 | `feval` | ✅ | **fixed**: accepts a function NAME (string), not just a handle |
| 335 | `fft` | ✅ | 1-D FFT |
| 336 | `fft2` | ✅ | 2-D FFT |
| 337 | `fftn` | ✅ | **fixed**: true N-D FFT (was collapsing to 2-D) |
| 338 | `fftshift` | ✅ | **fixed**: odd-length shift (floor vs ceil) |
| 339 | `fftw` | ✅ | planner no-op (compat) |
| 340 | `fieldnames` | ✅ | struct field names cell |
| 341 | `figure` | 🟡 | creates figure target (host-rendered) |
| 342 | `fileparts` | ✅ | **fixed**: backslash separators + dotfile/`.cshrc` extension |
| 343 | `filesep` | ✅ | platform separator |
| 344 | `fillmissing` | ✅ | **fixed**: per-column `'constant'` vector |
| 345 | `filloutliers` | 🟡 | detect + replace; interp values approximate |
| 346 | `filter` | ✅ | IIR/FIR 1-D digital filter |
| 347 | `filter2` | ✅ | 2-D FIR (correlation) |
| 348 | `fimplicit` | 🟡 | renders implicit curve |
| 349 | `fimplicit3` | 🟡 | renders implicit surface |
| 350 | `find` | ✅ | nonzero indices; `[r,c,v]`; first-n |
| 351 | `findedge` | ✅ | **fixed via** edge sorting → correct edge index |
| 352 | `findgroups` | ✅ | group numbers + unique values |
| 353 | `findnode` | ✅ | node index by name |
| 354 | `findstr` | ✅ | legacy substring search |
| 355 | `fix` | ✅ | round toward zero (real+complex) |
| 356 | `flag` | 🟡 | flag colormap (visual) |
| 357 | `flintmax` | ✅ | **fixed**: `flintmax("single")`=2^24 |
| 358 | `flip` | ✅ | reverse along dim (incl. char) |
| 359 | `flipdim` | ✅ | legacy flip along dim |
| 360 | `flipedge` | ✅ | reverse digraph edges |
| 361 | `fliplr` | ✅ | **fixed**: cell/string arrays |
| 362 | `flipud` | ✅ | **fixed**: cell/string arrays |
| 363 | `floor` | ✅ | **fixed**: duration rounding (+ unit arg) |
| 364 | `fmesh` | 🟡 | renders function mesh |
| 365 | `fminbnd` | ✅ | **fixed**: `[x,fval,exitflag]` outputs |
| 366 | `fminsearch` | ✅ | **fixed**: `[x,fval]` output; Nelder-Mead |
| 367 | `fontname` | 🟡 | bulk font setter (graphics) |
| 368 | `fontsize` | 🟡 | bulk font-size setter (graphics) |
| 369 | `format` | ✅ | display style (short/long/rat/hex…) |
| 370 | `formula` | 🟡 | quantum-state ket formula; depends on simulate |
| 371 | `fplot` | 🟡 | renders function plot |
| 372 | `fplot3` | 🟡 | renders 3-D parametric curve |
| 373 | `fprintf` | ✅ | formatted output; format cycling |
| 374 | `freeBoundary` | ✅ | boundary facets of triangulation |
| 375 | `fsurf` | 🟡 | renders function surface |
| 376 | `full` | ✅ | sparse→dense |
| 377 | `fullfile` | ✅ | **fixed**: cell/string-array arg → cell of paths |
| 378 | `func2str` | ✅ | **fixed**: anonymous source via parser-captured text |
| 379 | `function_handle` | ✅ | handle class (doc/intro) |
| 380 | `functions` | ✅ | **fixed**: anon `function` field shows source |
| 381 | `funm` | ✅ | general matrix function (Schur-Parlett) |
| 382 | `fzero` | ✅ | **fixed**: `[x,fval,exitflag]` outputs |
| 383 | `gallery` | 🟡 | subset of named test matrices |
| 384 | `gamma` | ✅ | gamma function |
| 385 | `gammainc` | ✅ | **fixed**: `'upper'` tail option |
| 386 | `gammaincinv` | ✅ | inverse incomplete gamma |
| 387 | `gammaln` | ✅ | log gamma |
| 388 | `gca` | 🟡 | current axes handle (graphics) |
| 389 | `gcd` | ✅ | **fixed**: integer-class preserve + `[g,u,v]` Bézout |
| 390 | `gcf` | 🟡 | current figure handle (graphics) |
| 391 | `genvarname` | ✅ | **fixed**: cell/string-array → unique names |
| 392 | `geobasemap` | 🟡 | basemap setter (graphics) |
| 393 | `geolimits` | 🟡 | geo limits (graphics) |
| 394 | `geoplot` | 🟡 | geographic line plot (graphics) |
| 395 | `geoscatter` | 🟡 | geographic scatter (graphics) |
| 396 | `get` | 🟡 | graphics property query |
| 397 | `getfield` | ✅ | **fixed**: nested field traversal `getfield(s,'x','y')` |
| 398 | `gmres` | ✅ | GMRES iterative solver |
| 399 | `gplot` | ✅ | adjacency+coords plot |
| 400 | `gradient` | ✅ | numerical gradient (1-D/2-D) |
| 401 | `graph` | ✅ | undirected graph constructor |
| 402 | `gray` | 🟡 | grayscale colormap (visual) |
| 403 | `grid` | ✅ | axes grid on/off/minor |
| 404 | `griddata` | ✅ | scattered 2-D interpolation |
| 405 | `griddatan` | ✅ | scattered N-D interpolation |

**Bonus interpreter fix:** nested struct assignment `S.x.y = 5` (auto-vivification at any depth) now works — previously threw "undefined variable" / "non-existent field".
| 406 | `griddedInterpolant` | ✅ | **fixed**: `(x,v)` form interpolated values (was returning query pt) |
| 407 | `groupcounts` | ✅ | **fixed**: array input → counts (+ `[C,grps]`) |
| 408 | `groupsummary` | ✅ | grouped table summaries |
| 409 | `gsvd` | 🟡 | generalized singular values; full 5-output partial |
| 410 | `gtext` | 🟡 | interactive text (no cursor in sandbox) |
| 411 | `hGate` | 🟡 | Hadamard gate object |
| 412 | `hadamard` | ✅ | Hadamard matrix |
| 413 | `hankel` | ✅ | Hankel matrix (c / c,r) |
| 414 | `hascycles` | ✅ | graph cycle test |
| 415 | `head` | ✅ | **fixed**: works on arrays (not just tables) |
| 416 | `height` | ✅ | row count |
| 417 | `help` | ✅ | in-REPL help text |
| 418 | `hess` | ✅ | Hessenberg form |
| 419 | `hex2dec` | ✅ | **fixed**: multi-row char/string array |
| 420 | `hex2num` | ✅ | IEEE hex → double |
| 421 | `hex2rgb` | ✅ | **fixed**: 3-char shorthand (#F00) + string-array |
| 422 | `highlight` | 🟡 | graph-plot highlight (graphics) |
| 423 | `hilb` | ✅ | Hilbert matrix |
| 424 | `hist` | 🟡 | legacy histogram (counts ok; plot visual) |
| 425 | `histc` | ✅ | legacy edge bin counts |
| 426 | `histcounts` | ✅ | bin counts (+ edges) |
| 427 | `histcounts2` | ✅ | bivariate bin counts |
| 428 | `histogram` | 🟡 | histogram plot (visual) |
| 429 | `histogram2` | 🟡 | bivariate histogram (visual) |
| 430 | `hold` | ✅ | retain/clear plots |
| 431 | `holes` | 🟡 | polyshape hole boundaries |
| 432 | `horzcat` | ✅ | horizontal concatenation |
| 433 | `hot` | 🟡 | hot colormap (visual) |
| 434 | `hour` | ✅ | datetime hour component |
| 435 | `hours` | ✅ | duration in hours |
| 436 | `hsv` | 🟡 | HSV colormap (visual) |
| 437 | `hsv2rgb` | ✅ | HSV→RGB conversion |
| 438 | `hypot` | ✅ | hypotenuse √(a²+b²) |
| 439 | `ichol` | 🟡 | incomplete Cholesky preconditioner |
| 440 | `idGate` | 🟡 | identity gate object |
| 441 | `idivide` | ✅ | integer division (fix/floor/ceil/round) |
| 442 | `ifft` | ✅ | inverse 1-D FFT |
| 443 | `ifft2` | ✅ | inverse 2-D FFT |
| 444 | `ifftn` | ✅ | inverse N-D FFT |
| 445 | `ifftshift` | ✅ | inverse fft shift (odd-length correct) |
| 446 | `ilu` | 🟡 | incomplete LU preconditioner |
| 447 | `im2gray` | ✅ | RGB→grayscale |
| 448 | `imag` | ✅ | imaginary part |
| 449 | `image` | 🟡 | display image (visual) |
| 450 | `imagesc` | 🟡 | scaled-color image (visual) |
| 451 | `importdata` | ✅ | general file loader (VFS) |
| 452 | `inShape` | ✅ | point-in-alphaShape test |
| 453 | `incenter` | ✅ | **fixed**: real incenter (was centroid) |
| 454 | `incidence` | ✅ | signed incidence matrix |
| 455 | `ind2sub` | ✅ | **fixed**: N-D subscripts (>2 outputs) |
| 456 | `indegree` | ✅ | digraph in-degree |
| 457 | `inedges` | ✅ | incoming edges to a node |
| 458 | `initGate` | 🟡 | qubit init gate object |
| 459 | `inline` | ✅ | inline function (deprecated→@) |
| 460 | `innerjoin` | ✅ | inner table join |
| 461 | `inpolygon` | ✅ | point-in-polygon test |
| 462 | `input` | 🟡 | user input (stream in sandbox) |
| 463 | `inputname` | 🟡 | caller variable name |
| 464 | `insert` | 🟡 | insert table rows |
| 465 | `insertAfter` | ✅ | **fixed**: insert after ALL occurrences |
| 466 | `insertBefore` | ✅ | **fixed**: insert before ALL occurrences |
| 467 | `int16` | ✅ | 16-bit signed convert (saturating) |
| 468 | `int2str` | ✅ | **fixed**: matrix → aligned char array |
| 469 | `int32` | ✅ | 32-bit signed convert |
| 470 | `int64` | ✅ | 64-bit signed convert |
| 471 | `int8` | ✅ | 8-bit signed convert |
| 472 | `integral` | ✅ | **fixed**: infinite bounds (was hanging) |
| 473 | `integral2` | ✅ | **fixed**: function-handle y-limits |
| 474 | `integral3` | ✅ | triple integral over a box |
| 475 | `interp1` | ✅ | 1-D interpolation |
| 476 | `interp2` | ✅ | 2-D gridded interpolation |
| 477 | `interp3` | ✅ | 3-D gridded interpolation |
| 478 | `interpft` | ✅ | FFT-based periodic interpolation |
| 479 | `interpn` | ✅ | **fixed**: 1-D gridded `interpn(x,v,xq)` |
| 480 | `intersect` | ✅ | **fixed**: `[C,ia,ib]` index outputs |
| 481 | `intmax` | ✅ | **fixed**: integer class + full-integer display |
| 482 | `intmin` | ✅ | **fixed**: integer class |
| 483 | `inv` | ✅ | matrix inverse |
| 484 | `invhilb` | ✅ | exact inverse Hilbert matrix |
| 485 | `ipermute` | ✅ | inverse dimension permute |
| 486 | `iqr` | ✅ | interquartile range |
| 487 | `isConfigured` | ✅ | dictionary configured test |
| 488 | `isConnected` | ✅ | triangulation vertex adjacency |
| 489 | `isInterior` | ✅ | interior triangles (constrained) |
| 490 | `isKey` | ✅ | dictionary/Map key test |
| 491 | `isStringScalar` | ✅ | 1×1 string test |
| 492 | `isUnderlyingType` | ✅ | underlying type test |
| 493 | `isa` | ✅ | class/category test |
| 494 | `isapprox` | ✅ | approximate equality |
| 495 | `isbanded` | ✅ | bandwidth test |
| 496 | `isbetween` | ✅ | **fixed**: datetime/duration range test |
| 497 | `iscategorical` | ✅ | categorical type test |
| 498 | `iscategory` | ✅ | category membership |
| 499 | `iscell` | ✅ | cell array test |
| 500 | `iscellstr` | ✅ | cellstr test |
| 501 | `ischar` | ✅ | char array test |
| 502 | `iscolumn` | ✅ | column-vector test |
| 503 | `isdag` | ✅ | acyclic digraph test |
| 504 | `isdatetime` | ✅ | datetime type test |
| 505 | `isdiag` | ✅ | diagonal-matrix test |

**Bonus display fix:** scalar integer-typed values (e.g. `intmax('uint64')`) now print as full integers instead of exponential notation.
| 506 | `isduration` | ✅ | duration type test |
| 507 | `isempty` | ✅ | empty-array test |
| 508 | `isenum` | ✅ | enumeration test |
| 509 | `isequal` | ✅ | whole-array equality |
| 510 | `isequaln` | ✅ | equality with NaN==NaN |
| 511 | `isfield` | ✅ | struct field test |
| 512 | `isfinite` | ✅ | finite-element test |
| 513 | `isfloat` | ✅ | float-type test |
| 514 | `isgraphics` | ✅ | graphics-handle test |
| 515 | `ishermitian` | ✅ | Hermitian/skew test |
| 516 | `ishole` | 🟡 | polyshape hole boundaries |
| 517 | `isinf` | ✅ | infinite-element test |
| 518 | `isinteger` | ✅ | integer-type test |
| 519 | `isinterior` | ✅ | point-in-polyshape |
| 520 | `isisomorphic` | ✅ | graph isomorphism |
| 521 | `isjava` | ✅ | Java-object test (always false) |
| 522 | `iskeyword` | ✅ | language-keyword test |
| 523 | `isletter` | ✅ | letter-char test |
| 524 | `islocalmax` | ✅ | local maxima |
| 525 | `islocalmin` | ✅ | local minima |
| 526 | `islogical` | ✅ | logical-type test |
| 527 | `ismatrix` | ✅ | **fixed**: 2-D test (was always true; N-D now false) |
| 528 | `ismember` | ✅ | set membership + loc |
| 529 | `ismembertol` | ✅ | tolerant membership |
| 530 | `ismissing` | ✅ | missing-value mask |
| 531 | `ismultigraph` | ✅ | parallel-edge test |
| 532 | `isnan` | ✅ | NaN mask |
| 533 | `isnat` | ✅ | NaT mask |
| 534 | `isnumeric` | ✅ | numeric-type test |
| 535 | `isobject` | ✅ | class-object test |
| 536 | `isomorphism` | ✅ | graph node mapping |
| 537 | `isosurface` | ✅ | 3-D isosurface extraction |
| 538 | `isoutlier` | ✅ | outlier detection (median/MAD) |
| 539 | `isprime` | ✅ | primality mask |
| 540 | `isreal` | ✅ | real-storage test |
| 541 | `isrow` | ✅ | row-vector test |
| 542 | `isscalar` | ✅ | scalar test |
| 543 | `issimplified` | ✅ | polyshape simplified test |
| 544 | `issorted` | ✅ | **fixed**: direction option (descend/strict/monotonic) |
| 545 | `issortedrows` | ✅ | sorted-rows test |
| 546 | `isspace` | ✅ | whitespace mask |
| 547 | `issparse` | ✅ | sparse-storage test |
| 548 | `isstring` | ✅ | string-array test |
| 549 | `isstrprop` | ✅ | char-category mask |
| 550 | `isstruct` | ✅ | struct test |
| 551 | `issymmetric` | ✅ | symmetric/skew test |
| 552 | `istable` | ✅ | table test |
| 553 | `istabular` | ✅ | table-or-timetable test |
| 554 | `istimetable` | ✅ | timetable test |
| 555 | `istril` | ✅ | lower-triangular test |
| 556 | `istriu` | ✅ | upper-triangular test |
| 557 | `isuniform` | ✅ | uniform-spacing test (+ step) |
| 558 | `isvarname` | ✅ | valid-name test |
| 559 | `isvector` | ✅ | vector-shape test |
| 560 | `jet` | 🟡 | jet colormap (visual) |
| 561 | `join` | ✅ | **fixed**: per-row join of 2-D string array |
| 562 | `jsondecode` | ✅ | JSON → MATLAB value |
| 563 | `jsonencode` | ✅ | MATLAB → JSON text |
| 564 | `kde` | 🟡 | kernel density estimate (renders) |
| 565 | `keys` | ✅ | dictionary/Map keys |
| 566 | `knapsack2qubo` | ✅ | knapsack → QUBO |
| 567 | `kron` | ✅ | Kronecker product |
| 568 | `labeledge` | 🟡 | edge labels (graphics) |
| 569 | `labelnode` | 🟡 | node labels (graphics) |
| 570 | `laplacian` | ✅ | graph Laplacian (sparse) |
| 571 | `lasterr` | ✅ | last error message |
| 572 | `lasterror` | ✅ | last error struct |
| 573 | `layout` | 🟡 | graph layout (graphics) |
| 574 | `layoutcoords` | 🟡 | layout coords (graphics) |
| 575 | `lcm` | ✅ | **fixed**: integer-class preserve |
| 576 | `ldl` | ✅ | LDLᵀ factorization |
| 577 | `legend` | 🟡 | plot legend (graphics) |
| 578 | `legendre` | ✅ | associated Legendre functions |
| 579 | `length` | ✅ | largest-dimension length |
| 580 | `lighting` | 🟡 | surface lighting mode (graphics) |
| 581 | `line` | 🟡 | low-level line (graphics) |
| 582 | `lines` | 🟡 | lines colormap (visual) |
| 583 | `linkaxes` | 🟡 | link axes limits (graphics) |
| 584 | `linsolve` | ✅ | solve A*X=B (with structure opts) |
| 585 | `linspace` | ✅ | linearly spaced vector |
| 586 | `load` | ✅ | load vars from MAT/VFS |
| 587 | `log` | ✅ | natural log (complex aware) |
| 588 | `log10` | ✅ | base-10 log |
| 589 | `log1p` | ✅ | accurate log(1+x) |
| 590 | `log2` | ✅ | base-2 log (+ [F,E]) |
| 591 | `logical` | ✅ | convert to logical |
| 592 | `loglog` | 🟡 | log-log plot (graphics) |
| 593 | `logm` | ✅ | matrix logarithm |
| 594 | `logspace` | ✅ | log-spaced vector |
| 595 | `lookfor` | ✅ | keyword help search |
| 596 | `lookup` | ✅ | **fixed**: dictionary lookup + FallbackValue + key arrays |
| 597 | `lower` | ✅ | lowercase conversion |
| 598 | `ls` | ✅ | list VFS files |
| 599 | `lscov` | ✅ | weighted/GLS least squares |
| 600 | `lsqminnorm` | ✅ | min-norm least squares |
| 601 | `lsqnonneg` | ✅ | nonnegative least squares |
| 602 | `lsqr` | ✅ | LSQR iterative solver |
| 603 | `lu` | ✅ | LU factorization |
| 604 | `magic` | ✅ | magic square |
| 605 | `makima` | ✅ | modified Akima interpolation |
| 606 | `mape` | ✅ | mean absolute percentage error |
| 607 | `mat2cell` | ✅ | partition matrix into cell blocks |
| 608 | `mat2str` | ✅ | matrix → parseable string |
| 609 | `matches` | ✅ | exact string match |
| 610 | `matchpairs` | ✅ | min-cost assignment |
| 611 | `material` | 🟡 | surface reflectance (graphics) |
| 612 | `max` | ✅ | maximum (+ index, dim, pairwise) |
| 613 | `maxcut2qubo` | ✅ | max-cut → QUBO |
| 614 | `maxflow` | ✅ | max flow → 13 |
| 615 | `maxk` | ✅ | k largest |
| 616 | `mcxGate` | 🟡 | multi-controlled NOT gate |
| 617 | `mean` | ✅ | average |
| 618 | `median` | ✅ | median |
| 619 | `mergecats` | ✅ | merge categorical categories |
| 620 | `mergevars` | ✅ | combine table variables |
| 621 | `mesh` | 🟡 | wireframe mesh (graphics) |
| 622 | `meshc` | 🟡 | mesh + contour (graphics) |
| 623 | `meshgrid` | ✅ | 2-D/3-D grid coordinates |
| 624 | `meshz` | 🟡 | mesh + curtain (graphics) |
| 625 | `milliseconds` | ✅ | duration in ms |
| 626 | `min` | ✅ | minimum (+ index, dim, pairwise) |
| 627 | `mink` | ✅ | k smallest |
| 628 | `minres` | ✅ | MINRES iterative solver |
| 629 | `minspantree` | ✅ | minimum spanning tree |
| 630 | `minute` | ✅ | datetime minute component |
| 631 | `minutes` | ✅ | duration in minutes / extract minutes |
| 632 | `missing` | 🟡 | NaN placeholder; `string(missing)` edge not modeled |
| 633 | `mkpp` | ✅ | piecewise-poly struct → ppval round-trip |
| 634 | `mod` | ✅ | remainder, sign of divisor |
| 635 | `mode` | ✅ | most frequent value; **dim arg fixed this batch** |
| 636 | `month` | ✅ | month number / name |
| 637 | `movevars` | ✅ | reorder table columns (Before/After) |
| 638 | `movmad` | ✅ | moving mean abs deviation |
| 639 | `movmax` | ✅ | moving maximum |
| 640 | `movmean` | ✅ | moving average |
| 641 | `movmedian` | ✅ | moving median |
| 642 | `movmin` | ✅ | moving minimum |
| 643 | `movprod` | ✅ | moving product |
| 644 | `movstd` | ✅ | moving standard deviation |
| 645 | `movsum` | ✅ | moving sum |
| 646 | `movvar` | ✅ | moving variance |
| 647 | `mustBeColumn` | ✅ | validate column vector |
| 648 | `mustBeFinite` | ✅ | validate finite |
| 649 | `mustBeFloat` | ✅ | validate floating-point |
| 650 | `mustBeGreaterThan` | ✅ | validate > c |
| 651 | `mustBeGreaterThanOrEqual` | ✅ | validate >= c |
| 652 | `mustBeInRange` | ✅ | validate within [lo,hi] |
| 653 | `mustBeInteger` | ✅ | validate integer-valued |
| 654 | `mustBeLessThan` | ✅ | validate < c |
| 655 | `mustBeLessThanOrEqual` | ✅ | validate <= c |
| 656 | `mustBeMatrix` | ✅ | **fixed**: now rejects N-D arrays |
| 657 | `mustBeMember` | ✅ | **fixed**: now handles text/string sets |
| 658 | `mustBeNegative` | ✅ | validate < 0 |
| 659 | `mustBeNonNan` | ✅ | validate not NaN (Inf allowed) |
| 660 | `mustBeNonempty` | ✅ | validate not empty |
| 661 | `mustBeNonnegative` | ✅ | validate >= 0 |
| 662 | `mustBeNonpositive` | ✅ | validate <= 0 |
| 663 | `mustBeNonzero` | ✅ | validate != 0 |
| 664 | `mustBeNonzeroLengthText` | ✅ | validate nonempty text |
| 665 | `mustBeNumeric` | ✅ | validate numeric |
| 666 | `mustBeNumericOrLogical` | ✅ | validate numeric/logical |
| 667 | `mustBePositive` | ✅ | validate > 0 |
| 668 | `mustBeReal` | ✅ | validate real |
| 669 | `mustBeRow` | ✅ | validate row vector |
| 670 | `mustBeScalarOrEmpty` | ✅ | validate scalar/empty |
| 671 | `mustBeSorted` | ✅ | validate ascending |
| 672 | `mustBeText` | ✅ | validate text |
| 673 | `mustBeTextScalar` | ✅ | validate single text |
| 674 | `mustBeVector` | ✅ | validate vector |
| 675 | `nargchk` | ✅ | **fixed**: 3-arg range check returns msg |
| 676 | `narginchk` | ✅ | **implemented**: reads caller nargin, throws |
| 677 | `nargoutchk` | ✅ | **implemented**: reads caller nargout, throws |
| 678 | `native2unicode` | ✅ | bytes → chars |
| 679 | `nchoosek` | ✅ | **fixed**: vector form returns combinations |
| 680 | `ndgrid` | ✅ | N-D coordinate grid |
| 681 | `ndims` | ✅ | number of dimensions |
| 682 | `nearest` | ✅ | graph nodes within distance |
| 683 | `nearestNeighbor` | ✅ | nearest triangulation vertex |
| 684 | `nearestvertex` | ✅ | nearest polyshape vertex |
| 685 | `nebula` | ✅ | nebula colormap (m×3) |
| 686 | `neighbors` | ✅ | graph node neighbors |
| 687 | `nextpow2` | ✅ | exponent of next power of 2 |
| 688 | `nexttile` | 🟡 | tiled-layout axes (graphics) |
| 689 | `nnz` | ✅ | count nonzeros |
| 690 | `nonzeros` | ✅ | nonzero elements as column |
| 691 | `norm` | ✅ | vector/matrix norms (1/2/Inf/fro) |
| 692 | `normalize` | ✅ | z-score / range / center |
| 693 | `normest` | ✅ | estimate 2-norm |
| 694 | `now` | ✅ | current serial date number |
| 695 | `nsidedpoly` | ✅ | regular polygon polyshape |
| 696 | `nthroot` | ✅ | real n-th root |
| 697 | `nufft` | ✅ | nonuniform FFT |
| 698 | `nufftn` | ✅ | N-D nonuniform FFT |
| 699 | `null` | ✅ | null-space basis |
| 700 | `num2cell` | ✅ | array → cell |
| 701 | `num2hex` | ✅ | **fixed**: single→8-digit hex; vector form |
| 702 | `num2str` | ✅ | numbers → char array |
| 703 | `numEntries` | ✅ | dictionary entry count |
| 704 | `numRegions` | ✅ | alpha-shape/polyshape regions |
| 705 | `numboundaries` | ✅ | polyshape boundary count |
| 706 | `numedges` | ✅ | graph edge count |
| 707 | `numel` | ✅ | element count |
| 708 | `numnodes` | ✅ | graph node count |
| 709 | `numsides` | ✅ | polyshape side count |
| 710 | `numunique` | ✅ | unique-value count |
| 711 | `nzmax` | ✅ | sparse storage capacity |
| 712 | `observable` | ✅ | Pauli observable |
| 713 | `ode` | ✅ | ODE problem object + solve |
| 714 | `ode113` | ✅ | Adams-Bashforth-Moulton |
| 715 | `ode15i` | ✅ | fully-implicit BDF |
| 716 | `ode15s` | ✅ | stiff variable-order BDF |
| 717 | `ode23` | ✅ | Bogacki-Shampine (2,3) |
| 718 | `ode23s` | ✅ | stiff Rosenbrock (2,3) |
| 719 | `ode23t` | ✅ | trapezoidal rule |
| 720 | `ode23tb` | ✅ | TR-BDF2 |
| 721 | `ode45` | ✅ | Dormand-Prince (4,5) → exp(-1) |
| 722 | `ode78` | ✅ | Runge-Kutta (7,8) |
| 723 | `ode89` | ✅ | Runge-Kutta (8,9) |
| 724 | `odeDelay` | ✅ | DDE delay config struct |
| 725 | `odeEvent` | ✅ | event config struct |
| 726 | `odeJacobian` | ✅ | **fixed**: returns config struct |
| 727 | `odeMassMatrix` | ✅ | **fixed**: returns config struct |
| 728 | `odeSensitivity` | ✅ | sensitivity config struct |
| 729 | `odeget` | ✅ | **implemented**: option lookup w/ default |
| 730 | `odeset` | ✅ | ODE options struct |
| 731 | `odextend` | ✅ | extend an ODE solution |
| 732 | `ones` | ✅ | all-ones array (+ class) |
| 733 | `optimget` | ✅ | optim option lookup |
| 734 | `optimset` | ✅ | optim options struct |
| 735 | `ordeig` | ✅ | (quasi)triangular eigenvalues |
| 736 | `orderfields` | ✅ | sort struct fields |
| 737 | `ordqz` | ✅ | reorder QZ eigenvalues |
| 738 | `ordschur` | ✅ | reorder Schur eigenvalues |
| 739 | `orth` | ✅ | orthonormal range basis |
| 740 | `outdegree` | ✅ | digraph out-degree |
| 741 | `outedges` | ✅ | edges leaving a node |
| 742 | `outerjoin` | ✅ | table outer join |
| 743 | `overlaps` | ✅ | polyshape overlap test |
| 744 | `pad` | ✅ | pad strings |
| 745 | `paddata` | ✅ | pad data to size |
| 746 | `padecoef` | ✅ | Pade delay coefficients |
| 747 | `pagectranspose` | ✅ | **fixed**: now conjugates (via cat fix) |
| 748 | `pageeig` | ✅ | **fixed**: added [V,D] form |
| 749 | `pageinv` | ✅ | page-wise inverse |
| 750 | `pagelsqminnorm` | ✅ | page-wise min-norm lstsq |
| 751 | `pagemldivide` | ✅ | page-wise A\\B |
| 752 | `pagemrdivide` | ✅ | page-wise B/A |
| 753 | `pagemtimes` | ✅ | page-wise matmul |
| 754 | `pagenorm` | ✅ | page-wise norm |
| 755 | `pagepinv` | ✅ | page-wise pseudoinverse |
| 756 | `pagesvd` | ✅ | **fixed**: added [U,S,V] form |
| 757 | `pagetranspose` | ✅ | page-wise transpose |
| 758 | `pareto` | 🟡 | Pareto chart (graphics) |
| 759 | `parula` | ✅ | parula colormap |
| 760 | `pascal` | ✅ | Pascal matrix |
| 761 | `pathsep` | ✅ | path separator |
| 762 | `pause` | ✅ | pause (no-op delay in sandbox) |
| 763 | `pbaspect` | 🟡 | plot box aspect (graphics) |
| 764 | `pcg` | ✅ | conjugate gradients → A\b |
| 765 | `pchip` | ✅ | shape-preserving cubic interp |
| 766 | `pcolor` | 🟡 | pseudocolor plot (graphics) |
| 767 | `pdepe` | ✅ | 1-D PDE solver |
| 768 | `pdeval` | ✅ | evaluate pdepe solution |
| 769 | `peaks` | ✅ | sample 2-D surface |
| 770 | `perimeter` | ✅ | polyshape/alpha perimeter |
| 771 | `perms` | ✅ | all permutations |
| 772 | `permute` | ✅ | permute dimensions |
| 773 | `pie` | 🟡 | pie chart (graphics) |
| 774 | `pie3` | 🟡 | 3-D pie chart (graphics) |
| 775 | `piechart` | 🟡 | object-based pie (graphics) |
| 776 | `pink` | ✅ | pink colormap |
| 777 | `pinv` | ✅ | pseudoinverse |
| 778 | `planerot` | ✅ | Givens rotation → [5;0] |
| 779 | `plot` | 🟡 | 2-D line plot (graphics) |
| 780 | `plot3` | 🟡 | 3-D line plot (graphics) |
