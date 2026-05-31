trapezoid[f_, a_, b_, n_ : 100] := Module[{h = (b - a)/n},
   h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", trapezoid[Exp, 0., 1., 100]]
