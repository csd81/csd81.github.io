bisection[f_, a0_, b0_, tol_ : 10^-12, maxIter_ : 200] := Module[
   {a = a0, b = b0, fa, c, fc, k},
   fa = f[a]; c = a;
   Do[c = (a + b)/2; fc = f[c];
      If[fc == 0 || (b - a)/2 < tol, Return[c]];
      If[fa fc < 0, b = c, a = c; fa = fc], {k, maxIter}];
   (a + b)/2];
Print[bisection[#^2 - 2 &, 1., 2.]]
