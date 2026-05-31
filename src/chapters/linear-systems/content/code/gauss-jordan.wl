gaussJordan[Ain_, bin_] := Module[{M = N@MapThread[Append, {Ain, bin}], n = Length[bin], p, f},
   Do[
    p = k - 1 + First@Ordering[Abs[M[[k ;;, k]]], -1];
    M[[{k, p}]] = M[[{p, k}]];
    M[[k]] /= M[[k, k]];
    Do[If[i != k, M[[i]] -= M[[i, k]] M[[k]]], {i, n}],
    {k, n}];
   M[[All, -1]]];
Print[gaussJordan[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
