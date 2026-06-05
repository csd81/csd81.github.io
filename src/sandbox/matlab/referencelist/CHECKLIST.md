# Master checklist — reference-list conformance

Per-function audit status. ✅ converged · 🟡 partial · ⛔ not feasible · ⬜ not yet audited.
Progress: **30 / 1170** audited.

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
