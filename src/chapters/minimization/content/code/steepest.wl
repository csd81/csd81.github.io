steepestDescent[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 1000] := Module[{x = N[x0], g, d, t, fx, gd, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      d = -g; t = 1.; fx = f[x]; gd = g.d;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      x = x + t d, {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[steepestDescent[f, g, {0, 0}]]
