iterativeRefinement[A_, b_, tol_ : 10^-12, maxIter_ : 20] := Module[{x, r, d, k},
   x = LinearSolve[A, b];
   Do[
    r = b - A.x;                 (* residual *)
    d = LinearSolve[A, r];       (* correction *)
    x = x + d;
    If[Max[Abs[d]] < tol, Return[x]], {k, maxIter}];
   x];
A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}; b = {8, -11, -3};
Print[iterativeRefinement[A, b]]
