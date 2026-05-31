polyFit[t_, y_, degree_] := Module[{A},
   A = Table[ti^j, {ti, t}, {j, 0, degree}];   (* Vandermonde *)
   LeastSquares[A, y]];
t = {0, 1, 2, 3, 4}; y = {1.0, 1.8, 3.3, 4.5, 6.3};
Print["coeffs (low->high): ", polyFit[t, y, 2]]
