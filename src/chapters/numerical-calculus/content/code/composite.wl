composite[f_, a_, b_, nIn_ : 10] := Module[{n = nIn, h, T, S},
   If[OddQ[n], n++];                          (* Simpson needs even n *)
   h = (b - a)/n;
   T = h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}]);
   S = h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}]);
   {T, S}];
With[{r = composite[Exp, 0., 1., 10]},
  Print["trapezoid = ", r[[1]]];
  Print["Simpson   = ", r[[2]]]]
(* -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818 *)
