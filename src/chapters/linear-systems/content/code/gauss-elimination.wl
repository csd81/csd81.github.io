gaussElimination[A_, b_] := Module[{n = Length[b], M, x, f},
   M = MapThread[Append, {A, b}];           (* augmented [A | b] *)
   Do[f = M[[i, k]]/M[[k, k]];
      M[[i, k ;;]] -= f M[[k, k ;;]], {k, n - 1}, {i, k + 1, n}];
   x = ConstantArray[0., n];
   Do[x[[i]] = (M[[i, n + 1]] - Sum[M[[i, j]] x[[j]], {j, i + 1, n}])/M[[i, i]], {i, n, 1, -1}];
   x];
A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}; b = {8, -11, -3};
Print[gaussElimination[A, b]]
