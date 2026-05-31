jacobi[A_, b_, tol_ : 10^-10, maxIter_ : 200] := Module[{n = Length[b], x, xNew, k},
   x = ConstantArray[0., n];
   Do[
    xNew = Table[
       (b[[i]] - Sum[If[j != i, A[[i, j]] x[[j]], 0], {j, n}]) / A[[i, i]], {i, n}];
    If[Max[Abs[xNew - x]] <= tol, Return[{xNew, k}]];
    x = xNew,
    {k, maxIter}];
   {x, maxIter}];

A = {{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}};
b = {9, 8, 3};
Print[jacobi[A, b]]
