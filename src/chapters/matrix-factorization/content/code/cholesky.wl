choleskyFactor[Ain_] := Module[{A = N[Ain], n = Length[Ain], L},
   L = ConstantArray[0., {n, n}];
   Do[
    L[[j, j]] = Sqrt[A[[j, j]] - Sum[L[[j, k]]^2, {k, j - 1}]];
    Do[L[[i, j]] = (A[[i, j]] - Sum[L[[i, k]] L[[j, k]], {k, j - 1}])/L[[j, j]], {i, j + 1, n}],
    {j, n}];
   L];
A = {{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}};
Print[choleskyFactor[A] // MatrixForm]
