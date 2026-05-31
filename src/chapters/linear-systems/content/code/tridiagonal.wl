thomas[a_, b_, cIn_, dIn_] := Module[{n = Length[dIn], c = cIn, d = dIn, x, m},
   c[[1]] /= b[[1]]; d[[1]] /= b[[1]];
   Do[m = b[[i]] - a[[i]] c[[i - 1]];
      If[i < n, c[[i]] /= m];
      d[[i]] = (d[[i]] - a[[i]] d[[i - 1]])/m, {i, 2, n}];
   x = ConstantArray[0., n]; x[[n]] = d[[n]];
   Do[x[[i]] = d[[i]] - c[[i]] x[[i + 1]], {i, n - 1, 1, -1}];
   x];
Print[thomas[{0, -1, -1, -1}, {4, 4, 4, 4}, {-1, -1, -1, 0}, {2, 4, 6, 13}]]
