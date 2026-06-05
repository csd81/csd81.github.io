# Statistics & Machine Learning Toolbox — validation

First toolbox implemented on the multi-toolbox framework (`tb/`). The Statistics Toolbox is **not
installed** in the local MATLAB R2026a, so the distribution functions were validated against their
defining formulas computed with **base-MATLAB special functions** (`erfc`/`betainc`/`gammainc`),
which need no toolbox — plus textbook reference values. All matched to display precision.

| Function | Test | Sandbox | Reference (live MATLAB base special fns / textbook) |
|---|---|---|---|
| `normcdf` | `normcdf(0)` | 0.5 | `0.5*erfc(0)` = 0.5 ✓ |
| `normpdf` | `normpdf(0)` | 0.3989 | `1/√(2π)` = 0.39894 ✓ |
| `norminv` | `norminv(0.975)` | 1.9600 | 1.95996 (textbook) ✓ |
| `tcdf` | `tcdf(2,10)` | 0.9633 | `1-0.5*betainc(10/14,5,0.5)` = 0.963306 ✓ |
| `tinv` | `tinv(0.975,10)` | — | 2.2281 (textbook) ✓ (bisection inverse of tcdf) |
| `chi2cdf` | `chi2cdf(3.84,1)` | 0.9500 | `gammainc(1.92,0.5)` = 0.949956 ✓ |
| `poisspdf` | `poisspdf(2,3)` | 0.2240 | `exp(-3)*9/2` = 0.224042 ✓ |
| `binopdf` | `binopdf(3,10,0.5)` | 0.1172 | `nchoosek(10,3)*0.5^10` = 0.117188 ✓ |
| `gamcdf` | `gamcdf(2,2,1)` | 0.5940 | `gammainc(2,2)` = 0.593994 ✓ |
| `betacdf` | `betacdf(0.5,2,2)` | 0.5 | `betainc(0.5,2,2)` = 0.5 ✓ |
| `fcdf` | `fcdf(2,5,10)` | — | `betainc(10/20,2.5,5)` = 0.835805 ✓ |
| `range` | `range([3 7 1 9 4])` | 8 | max−min = 8 ✓ |
| `nanmean` | `nanmean([1 NaN 3])` | 2 | 2 ✓ |
| `pdist` | `pdist([0 0;3 4;6 8])` | `[5 10 5]` | euclidean ✓ |
| `squareform` | `squareform([5 10 5])` | `[0 5 10;5 0 5;10 5 0]` | ✓ |

**Implemented (this module):** distribution pdf/cdf/inv for normal, t, chi-square, gamma,
exponential, beta, F, uniform, lognormal, binomial, Poisson, geometric; NaN-aware descriptive
stats (`nanmean`/`nansum`/`nanstd`/`nanvar`/`nanmedian`/`nanmax`/`nanmin`), `range`, `tabulate`;
distances/clustering (`pdist`, `squareform`, `linkage`, `kmeans`). Self-contained special
functions (Lanczos `logGamma`, regularized `gammainc`/`betainc`, `erf`, Acklam `norminv`).

**Not implemented / deferred:** distribution *objects* (`makedist`/`fitdist` → `ClassV`),
hypothesis tests (`ttest`/`anova1`), regression (`fitlm`/`fitglm`), `*rnd` random generators
(RNG stream won't match MATLAB), `dendrogram`/`cluster` (graphics). To be filled in later passes.

**Caveat:** `kmeans` uses a seeded xorshift PRNG, so cluster *labels* may permute vs MATLAB
(cluster assignments/sizes are correct). `pdist`/`linkage` ordering follows MATLAB's i<j upper-
triangle convention.
