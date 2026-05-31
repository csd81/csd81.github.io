fixedPointND[G_, x0_, tol_ : 10^-12, maxIter_ : 200] := Module[
   {x = N[x0], xn, k},
   Do[xn = G[x];
      If[Max[Abs[xn - x]] < tol, Return[xn]];
      x = xn, {k, maxIter}];
   x];
G[v_] := {Cos[v[[2]]], Sin[v[[1]]]};
Print[fixedPointND[G, {0., 0.}]]
