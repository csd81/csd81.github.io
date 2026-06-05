# Sandbox function audit log

Comparing implemented builtins against MathWorks help-page examples (rendered via headless Chrome).
Queue: 1170 functions (implemented ∩ MATLAB reference list). Batches of 10.

## Batch 1 (fns 1–10): GraphPlot, MException, NaT, RandStream, abort, abs, abyss, accumarray, acos, acosd
Fixed: acos/asin/atan complex; acosd/asind complex + cosd/sind complex args; accumarray full rewrite
(matrix subs, sz, fun via callHandle, fillval, sparse); var/std normalization flag.
Converged: abs, acos, acosd, accumarray. Partial: GraphPlot, MException, NaT, abyss.
Not feasible: RandStream (RNG object), abort (drone hardware). Build green; 1412 builtins, 0 without help.
