goldenSection[f_, a0_, b0_, tol_ : 10^-8] := Module[{a = a0, b = b0, g, c, d, fc, fd},
   g = (Sqrt[5] - 1)/2;
   c = b - g (b - a); d = a + g (b - a); fc = f[c]; fd = f[d];
   While[b - a > tol,
    If[fc < fd, b = d; d = c; fd = fc; c = b - g (b - a); fc = f[c],
       a = c; c = d; fc = fd; d = a + g (b - a); fd = f[d]]];
   (a + b)/2];
Print[goldenSection[(#-2)^2 + 1 &, 0., 5.]]
