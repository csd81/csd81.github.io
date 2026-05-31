lineFit[x_, y_] := Module[{n = Length[x], Sx, Sy, Sxx, Sxy, a, b},
   Sx = Total[x]; Sy = Total[y];
   Sxx = Total[x^2]; Sxy = Total[x y];
   b = (n Sxy - Sx Sy)/(n Sxx - Sx^2);     (* slope *)
   a = (Sy - b Sx)/n;                        (* intercept *)
   {a, b}];
x = {0, 1, 2, 3, 4}; y = {1, 3, 2, 5, 4};
With[{r = lineFit[x, y]},
  Print["slope b = ", r[[2]], ", intercept a = ", r[[1]]]]
(* -> slope b = 0.8, intercept a = 1.4 *)
