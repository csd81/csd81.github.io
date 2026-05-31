gaussSeidel[A_, b_, tol_ : 10^-10, maxIter_ : 200] := Module[{n = Length[b], x, xOld, s, k},
   x = ConstantArray[0., n];
   Do[
    xOld = x;
    Do[
     s = b[[i]] - Sum[If[j != i, A[[i, j]] x[[j]], 0], {j, n}];
     x[[i]] = s / A[[i, i]],
     {i, n}];
    If[Max[Abs[x - xOld]] <= tol, Return[{x, k}]],
    {k, maxIter}];
   {x, maxIter}];

A = {{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}};
b = {9, 8, 3};
Print[gaussSeidel[A, b]]
