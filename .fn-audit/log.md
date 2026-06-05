# Sandbox function audit log

Comparing implemented builtins against MathWorks help-page examples (rendered via headless Chrome).
Queue: 1170 functions (implemented ∩ MATLAB reference list). Batches of 10.

## Batch 1 (fns 1–10): GraphPlot, MException, NaT, RandStream, abort, abs, abyss, accumarray, acos, acosd
Fixed: acos/asin/atan complex; acosd/asind complex + cosd/sind complex args; accumarray full rewrite
(matrix subs, sz, fun via callHandle, fillval, sparse); var/std normalization flag.
Converged: abs, acos, acosd, accumarray. Partial: GraphPlot, MException, NaT, abyss.
Not feasible: RandStream (RNG object), abort (drone hardware). Build green; 1412 builtins, 0 without help.
## Batch 2 (fns 11-20): acosh acot acotd acoth acsc acscd acsch addboundary addcats addedge
Fixed: complex inverse hyperbolic/reciprocal trig (acosh/asinh/atanh/acot/acsc/asec/acoth/acsch/asech
+ degree variants) via new cA* helpers & ewc wrapper; addedge auto-adds named nodes; polyshape NumHoles.
Help: HelpEntry +description/examples, render >=10 lines; rich entries for batch 1&2 fns.
Converged: 7 trig fns. Partial: addboundary (multi-region), addcats (2-D), addedge (edge-table).
34/41 examples pass. Build green; 1412 builtins, 0 without help.
## Batch 3 (fns 21-30): addnode addpoints addtodate addvars adjacency airy all allcycles allfinite allpaths
Fixed: N-D slice assignment A(:,:,k)=M (colon dims sized from rhs); all/any dim+vecdim+'all'+N-D;
datenum string parsing; datetime ConvertFrom; sparse display header (m×n sparse double (k nonzeros));
cell/struct inline small-vector display; allpaths/allcycles edge outputs + MaxNum*/Min/MaxLength opts.
Converged: addtodate adjacency airy all allcycles allfinite allpaths. Partial: addnode addpoints.
Data-blocked: addvars (patients dataset). 37→ build green; 1412 builtins, 0 without help.
