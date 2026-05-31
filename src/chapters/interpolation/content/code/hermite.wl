hermiteCoeffs[x_, y_, dy_] := Module[{n = Length[x], m, z, Q, i, j},
   m = 2 n; z = ConstantArray[0., m]; Q = ConstantArray[0., {m, m}];
   Do[
    z[[2 i - 1]] = x[[i]]; z[[2 i]] = x[[i]];
    Q[[2 i - 1, 1]] = y[[i]]; Q[[2 i, 1]] = y[[i]];
    Q[[2 i, 2]] = dy[[i]];
    If[i > 1, Q[[2 i - 1, 2]] = (Q[[2 i - 1, 1]] - Q[[2 i - 2, 1]])/(z[[2 i - 1]] - z[[2 i - 2]])],
    {i, n}];
   Do[Q[[i, j]] = (Q[[i, j - 1]] - Q[[i - 1, j - 1]])/(z[[i]] - z[[i - j + 1]]), {j, 3, m}, {i, j, m}];
   Table[Q[[i, i]], {i, m}]];
Print[hermiteCoeffs[{0, 1}, {1, 0}, {0, 0}]]   (* {1, 0, -1, 2} *)
