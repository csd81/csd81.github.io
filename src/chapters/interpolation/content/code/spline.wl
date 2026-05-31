naturalCubicSpline[x_, y_] := Module[{n = Length[x], h, A, rhs, c, a, b, d},
   h = Differences[x];
   A = ConstantArray[0., {n, n}]; rhs = ConstantArray[0., n];
   A[[1, 1]] = 1; A[[n, n]] = 1;
   Do[A[[i, i - 1]] = h[[i - 1]]; A[[i, i]] = 2 (h[[i - 1]] + h[[i]]); A[[i, i + 1]] = h[[i]];
      rhs[[i]] = 3 ((y[[i + 1]] - y[[i]])/h[[i]] - (y[[i]] - y[[i - 1]])/h[[i - 1]]), {i, 2, n - 1}];
   c = LinearSolve[A, rhs];
   a = y[[1 ;; n - 1]];
   b = (Differences[y])/h - h (2 c[[1 ;; n - 1]] + c[[2 ;; n]])/3;
   d = Differences[c]/(3 h);
   {a, b, c[[1 ;; n - 1]], d}];
Print["a = ", First@naturalCubicSpline[{0, 1, 2, 3}, {0, 1, 0, 1}]]
