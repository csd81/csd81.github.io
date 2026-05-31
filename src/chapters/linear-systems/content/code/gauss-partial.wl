gaussPartial[Ain_, bin_] := Module[{A = N[Ain], b = N[bin], n = Length[bin], p, f, x},
   Do[
    p = k - 1 + First@Ordering[Abs[A[[k ;;, k]]], -1];
    A[[{k, p}]] = A[[{p, k}]]; b[[{k, p}]] = b[[{p, k}]];
    Do[f = A[[i, k]]/A[[k, k]];
       A[[i, k ;;]] -= f A[[k, k ;;]]; b[[i]] -= f b[[k]], {i, k + 1, n}],
    {k, n}];
   x = ConstantArray[0., n];
   Do[x[[i]] = (b[[i]] - Sum[A[[i, j]] x[[j]], {j, i + 1, n}])/A[[i, i]], {i, n, 1, -1}];
   x];
Print[gaussPartial[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
