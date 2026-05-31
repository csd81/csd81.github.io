newton[f_, df_, x0_, tol_ : 10^-12, maxIter_ : 100] := Module[
   {x = x0, fx, k},
   Do[fx = f[x];
      If[Abs[fx] < tol, Return[x]];
      x = x - fx/df[x], {k, maxIter}];
   x];
Print[newton[#^2 - 2 &, 2 # &, 1.]]   (* sqrt(2) *)
