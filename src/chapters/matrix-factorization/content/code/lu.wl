luDoolittle[Ain_] := Module[{A = N[Ain], n = Length[Ain], L, U},
   L = IdentityMatrix[n]; U = ConstantArray[0., {n, n}];
   Do[
    Do[U[[i, j]] = A[[i, j]] - Sum[L[[i, k]] U[[k, j]], {k, i - 1}], {j, i, n}];
    Do[L[[j, i]] = (A[[j, i]] - Sum[L[[j, k]] U[[k, i]], {k, i - 1}])/U[[i, i]], {j, i + 1, n}],
    {i, n}];
   {L, U}];
A = {{1, -2, -2, -2}, {2, -1, 2, 4}, {-1, 2, 3, -4}, {-2, 1, 4, -2}};
{L, U} = luDoolittle[A];
Print[L // MatrixForm]; Print[U // MatrixForm]
