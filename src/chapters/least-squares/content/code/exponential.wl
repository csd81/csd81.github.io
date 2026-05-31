expFit[t_, y_] := Module[{A, p},
   A = Transpose[{t, ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {0, 1, 2, 3}; y = {2.0, 4.1, 8.2, 15.9};
Print["a, b = ", expFit[t, y]]
