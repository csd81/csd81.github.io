# Master checklist — reference-list conformance

Per-function audit status. ✅ converged · 🟡 partial · ⛔ not feasible · ⬜ not yet audited.
Progress: **70 / 1170** audited.

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
