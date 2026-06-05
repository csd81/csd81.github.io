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
## Batch 4 (fns 31-40): allunique alpha alphaShape alphaSpectrum alphaTriangulation alphamap amd angle animatedline annotation
Fixed: alphaShape/N-D Delaunay INFINITE-LOOP HANG (size guard >600 pts 3-D); lexer transpose-vs-string
(value+space+' => string, fixes ylabel/disp 'str' command form, was parse error on backslash); added
label/title/disp to COMMAND_FNS; allunique NaN-unique + string arrays + 'rows'. angle converged.
19/80 remaining (plot/dataset/advanced-geometry). Build green; 1412 builtins, 0 without help.
## Batch 5 (fns 41-50): any anymissing anynan append area array2table arrayfun asec asecd asech
Fixed: struct-array indexed-field assignment S(i).field=val (creates/grows struct array);
arrayfun rewrite (struct arrays, UniformOutput, multi-output, complex); append string-array broadcast;
anymissing multi-type (string/cat/cell/table/datetime). asec/asecd/asech converged (batch-2 complex).
Harness: extract.py tags examples with h2/h3 section. 14/61 remaining (rand/plot/table-display/cross-ex).
Build green; 1412 builtins, 0 without help.
## Batch 6 (fns 51-60): asin asind asinh assert atan atan2 atan2d atand atanh autumn
Fixed: atanh branch sign on |x|>1 (x>1->+pi/2 i, x<-1->-pi/2 i); atand complex-aware;
assert sprintf-formatted messages + 'Assertion failed.' default. Comparator: expected-error
examples (assert failures) count as pass. 31/33 pass (asind tiny-imag, autumn groot default).
Build green; 1412 builtins, 0 without help.
