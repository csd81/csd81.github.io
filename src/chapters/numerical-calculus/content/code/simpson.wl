simpson[f_, a_, b_, nIn_ : 100] := Module[{n = nIn, h},
   If[OddQ[n], n++];
   h = (b - a)/n;
   h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", simpson[Exp, 0., 1., 100]]
