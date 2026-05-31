gradientDescent[grad_, x0_, alpha_ : 0.1, tol_ : 10^-8, maxIter_ : 100000] :=
  Module[{x = N[x0], g, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      x = x - alpha g, {k, maxIter}];
   x];
Print[gradientDescent[{2 (#[[1]] - 1), 2 (#[[2]] - 2)} &, {0, 0}]]
