dividedDifferences[x_, y_] := Module[{a = N[y], n = Length[x], i, j},
   Do[a[[i]] = (a[[i]] - a[[i - 1]])/(x[[i]] - x[[i - j + 1]]),
    {j, 2, n}, {i, n, j, -1}];
   a];
Print[dividedDifferences[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]
