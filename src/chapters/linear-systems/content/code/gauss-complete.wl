gaussComplete[Ain_, bin_] := Module[
   {A = N[Ain], b = N[bin], n = Length[bin], col, pi, pj, best, f, y, x},
   col = Range[n];
   Do[
    pi = k; pj = k; best = Abs[A[[k, k]]];
    Do[If[Abs[A[[i, j]]] > best, best = Abs[A[[i, j]]]; pi = i; pj = j], {i, k, n}, {j, k, n}];
    A[[{k, pi}]] = A[[{pi, k}]]; b[[{k, pi}]] = b[[{pi, k}]];
    A[[All, {k, pj}]] = A[[All, {pj, k}]]; col[[{k, pj}]] = col[[{pj, k}]];
    Do[f = A[[i, k]]/A[[k, k]];
       A[[i, k ;;]] -= f A[[k, k ;;]]; b[[i]] -= f b[[k]], {i, k + 1, n}],
    {k, n}];
   y = ConstantArray[0., n];
   Do[y[[i]] = (b[[i]] - Sum[A[[i, j]] y[[j]], {j, i + 1, n}])/A[[i, i]], {i, n, 1, -1}];
   x = ConstantArray[0., n]; Do[x[[col[[i]]]] = y[[i]], {i, n}]; x];
Print[gaussComplete[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
