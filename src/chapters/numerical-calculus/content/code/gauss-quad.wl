gaussQuad[f_, a_, b_, n_ : 2] := Module[{t, w, hm, mid},
   {t, w} = If[n == 3,
     {{-Sqrt[3/5], 0, Sqrt[3/5]}, {5/9, 8/9, 5/9}},
     {{-1/Sqrt[3], 1/Sqrt[3]}, {1, 1}}];
   hm = (b - a)/2;                       (* map [-1,1] -> [a,b] *)
   mid = (a + b)/2;
   hm Total[w (f /@ (mid + hm t))]];
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 2], " (2-pt)"]
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 3], " (3-pt)"]
(* -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818 *)
