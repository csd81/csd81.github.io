powerFit[t_, y_] := Module[{A, p},
   A = Transpose[{Log[t], ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a ln t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {1, 2, 3, 4}; y = {2.0, 5.6, 9.7, 16.0};
Print["a, b = ", powerFit[t, y]]
