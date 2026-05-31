backSubstitution[U_, b_] := Module[{n = Length[b], x},
   x = ConstantArray[0., n];
   Do[x[[i]] = (b[[i]] - Sum[U[[i, j]] x[[j]], {j, i + 1, n}]) / U[[i, i]], {i, n, 1, -1}];
   x];
U = {{2, 1, -1}, {0, 1, 2}, {0, 0, 3}}; b = {1, 8, 9};
Print[backSubstitution[U, b]]   (* {1, 2, 3} *)
