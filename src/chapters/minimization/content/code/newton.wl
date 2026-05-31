newtonMin[grad_, hess_, x0_, tol_ : 10^-10, maxIter_ : 100] := Module[{x = N[x0], g, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      x = x - LinearSolve[hess[x], g], {k, maxIter}];
   x];
g[v_] := {2 (v[[1]] - 1), 2 (v[[2]] - 2)};
hess[v_] := {{2, 0}, {0, 2}};
Print[newtonMin[g, hess, {0, 0}]]
