inverse[Ain_] := Module[{A = N[Ain], n = Length[Ain], M, p, d},
   M = MapThread[Join, {A, IdentityMatrix[n]}];      (* [A | I] *)
   Do[
    p = k - 1 + First@Ordering[Abs[M[[k ;;, k]]], -1];
    M[[{k, p}]] = M[[{p, k}]];
    M[[k]] /= M[[k, k]];
    Do[If[i != k, M[[i]] -= M[[i, k]] M[[k]]], {i, n}],
    {k, n}];
   M[[All, n + 1 ;;]]];
Print[inverse[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}]]
