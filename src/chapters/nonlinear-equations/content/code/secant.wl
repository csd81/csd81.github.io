secant[f_, x0_, x1_, tol_ : 10^-12, maxIter_ : 100] := Module[
   {a = x0, b = x1, fa, fb, c, k},
   fa = f[a]; fb = f[b]; c = b;
   Do[c = b - fb (b - a)/(fb - fa);
      If[Abs[c - b] < tol, Return[c]];
      a = b; fa = fb; b = c; fb = f[c], {k, maxIter}];
   b];
Print[secant[#^2 - 2 &, 1., 2.]]   (* sqrt(2) *)
