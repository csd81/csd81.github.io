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
## Batch 7 (fns 61-70): axis balance bandwidth bar bar3 bar3h barh barycentricToCartesian base2dec bctree
Fixed: bandwidth 'lower'/'upper' option; base2dec string/char-matrix arrays; added orderedcolors
(gem/glow palettes) + rgb2hex matrix->hex string array (unblocks bar/barh/animatedline palette examples).
Remaining: bar-chart handle-object property edits + bctree node-tables (graphics/graph-table). 13/130.
Build green; 1413 builtins, 0 without help.
## Batch 8 (fns 71-80): beep besselh besseli besselj besselk bessely beta betainc betaincinv betaln
Fixed: logGamma/gammaln OVERFLOW for x>=171 (was log(abs(gamma(x)))->Inf/NaN; now Lanczos direct) —
broad fix for betaln & stats; betainc vectorized over (X,Z,W) + 'upper' tail; format rat (p/q display).
All 35 examples pass. Build green; 1413 builtins, 0 without help.
## Batch 9 (fns 81-90): bfsearch bicg bicgstab bicgstabl biconncomp bin2dec bitand bitcmp bitget bitor
Fixed: lexer 0b/0x literals (+u8/s16 type suffix); bin2dec string arrays; true(m,n)/false(m,n) size
args (logical arrays); rng command syntax. Solvers (bicg/bicgstab/bicgstabl) non-matchable (random
matrices + datasets). bfsearch event-table + biconncomp cell/2nd-output = graph-table gaps.
Build green; 1415 builtins, 0 without help.
## Batch 10 (fns 91-100): bitset bitshift bitxor blanks blkdiag bone boundary boundaryFacets boundaryshape boundingbox
Fixed: dec2bin/dec2hex/dec2base vectorization (char matrix); MULTI-ROW CHAR DISPLAY (one row/line, broad);
vertcat preserves isChar (['ab';'cd']); bitshift/bitset assumedtype masking + bitset vectorize;
boundary matrix/3-D input (area/volume). 40/47. Remaining: int-type tracking, groot, polyshape-holes.
Build green; 1415 builtins, 0 without help. *** 100/1170 functions audited (10 batches) ***
## Batch 11 (fns 101-110): bounds box brighten bsxfun bvp4c bvp5c bvpget bvpinit bvpset bvpxtend
Fixed: bounds dim/vecdim/'all'/N-D (mirrors all/any). box/brighten/bsxfun/bvpget/bvpset/bvpxtend pass.
bvp4c/bvp5c/bvpinit examples blocked by page-local functions (@guess/@bvpfcn) harness can't resolve.
bounds N-D "failures" are cross-example leaks (work in isolation). Build green; 1415 builtins, 0 without help.
## Batch 12 (fns 111-120): camlight cart2pol cart2sph cartesianToBarycentric cast cat categorical categories ccxGate cdf2rdf
Fixed: NaN(m,n)/Inf(m,n) size args; categorical valueset/catnames constructor + Ordinal flag;
categorical ==/~=/ordinal </> comparison; categorical indexing C(mask); cart2pol/pol2cart 3rd output;
zeros/ones ignore trailing class-name arg. 28 remaining (int-types, table-inputname, graphics/quantum).
Build green; 1419 builtins, 0 without help.
## Batch 13 (fns 121-130): ceil cell cell2mat cell2struct cell2table celldisp cellfun cellstr centrality centroid
Fixed: floor/ceil/fix complex (both parts); cellstr string-array input; cell 2-D paren-assign grows
(C(2,:)={...}); inline cell display refined (row vec inline, col/matrix -> size summary, matches MATLAB).
39 remaining (duration type, cell->struct/table strings, graph Nodes-table assign, polyshape holes).
Build green; 1419 builtins, 0 without help.
## Batch 14 (fns 131-140): cgs chGate char chol cholupdate circshift circumcenter cla class clc
Fixed: chol 'lower' factor + [R,flag] non-erroring 2-output; circshift dim argument; char string/cellstr/
multi-arg -> char matrix. cgs/circumcenter dataset-blocked; class java/clc rand non-matchable.
Build green; 1419 builtins, 0 without help.
## Batch 15 (fns 141-150): clear clearpoints clf clim clip clock close cmap2gray cnotGate colamd
Fixed: clip vector/array bounds; broadcast3 upgraded to 2-D implicit expansion (benefits betainc/bitset/clip).
Remaining mostly graphics (clf/clim/close/clear), non-deterministic clock, datasets (cmap2gray/colamd), quantum.
Build green; 1419 builtins, 0 without help. *** 150/1170 audited (15 batches) ***
## Batch 16 (fns 151-160): colon colorbar colorcube colormap colororder colperm combine comet comet3 compan
Fixed: colon/range uses first element of a non-scalar bound (1:size(A) -> 1:size(A,1)); empty bound -> empty range.
Remaining mostly graphics (colorbar/colormap query/colororder/comet), datastores (combine), eig order (compan), gpuArray.
Build green; 1419 builtins, 0 without help.
