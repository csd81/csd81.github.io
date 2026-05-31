(* Central-difference first derivative D(h), error O(h^2). *)
central[f_, x_, h_] := (f[x + h] - f[x - h])/(2 h);

(* Richardson-extrapolate D(h) and D(h/2) to error O(h^4). *)
richardson[f_, x_, h_] := Module[{d1, d2},
   d1 = central[f, x, h];
   d2 = central[f, x, h/2];
   {d1, d2, (4 d2 - d1)/3}];

{d1, d2, ext} = richardson[Sin, 1., 0.1];
Print["D(h)         = ", d1]
Print["D(h/2)       = ", d2]
Print["extrapolated = ", ext, "  exact cos(1) = ", Cos[1.]]
