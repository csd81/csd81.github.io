fixedPoint[g_, x0_, tol_ : 10^-12, maxIter_ : 200] := Module[
   {x = x0, xn, k},
   Do[xn = g[x];
      If[Abs[xn - x] < tol, Return[xn]];
      x = xn, {k, maxIter}];
   x];
Print[fixedPoint[Cos, 1.]]   (* Dottie number ~0.739085 *)
