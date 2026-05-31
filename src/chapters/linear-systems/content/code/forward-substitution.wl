forwardSubstitution[L_, b_] := Module[{n = Length[b], y},
   y = ConstantArray[0., n];
   Do[y[[i]] = (b[[i]] - Sum[L[[i, j]] y[[j]], {j, 1, i - 1}]) / L[[i, i]], {i, 1, n}];
   y];
L = {{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}}; b = {4, 5, -1};
Print[forwardSubstitution[L, b]]   (* {2, 1, 0} *)
