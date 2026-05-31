lagrangeCoeffs[x_, y_] := Module[{n = Length[x], V},
   V = Table[x[[i]]^(j - 1), {i, n}, {j, n}];   (* Vandermonde *)
   LinearSolve[V, y]];
Print[lagrangeCoeffs[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]   (* {5, -1, -6, 3} *)
