falsePosition[f_, a0_, b0_, tol_ : 10^-12, maxIter_ : 200] := Module[
   {a = a0, b = b0, fa, fb, c, fc, k},
   fa = f[a]; fb = f[b]; c = a;
   Do[c = (a fb - b fa)/(fb - fa); fc = f[c];
      If[Abs[fc] < tol, Return[c]];
      If[fa fc < 0, b = c; fb = fc, a = c; fa = fc], {k, maxIter}];
   c];
Print[falsePosition[#^2 - 2 &, 1., 2.]]
