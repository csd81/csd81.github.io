# Master checklist — reference-list conformance

Per-function audit status. ✅ converged · 🟡 partial · ⛔ not feasible · ⬜ not yet audited.
Progress: **280 / 1170** audited.

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
