(* Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best). *)
simplexBasic[f_, x0_, step_ : 1, tol_ : 10^-8, maxIter_ : 500] := Module[
   {n = Length[x0], P, fv, iw, ib, c, xr, fr, sz, it, i},
   P = Prepend[Table[x0 + step UnitVector[n, i], {i, n}], N[x0]];
   fv = f /@ P;
   Do[
      iw = First[Ordering[fv, -1]]; ib = First[Ordering[fv, 1]];
      sz = Max[Table[Norm[P[[i]] - P[[ib]]], {i, n + 1}]];
      If[sz < tol, Break[]];
      c = (Total[P] - P[[iw]])/n;                 (* centroid of all but the worst *)
      xr = c + (c - P[[iw]]); fr = f[xr];         (* reflect the worst vertex *)
      If[fr < fv[[iw]],
         P[[iw]] = xr; fv[[iw]] = fr,
         Do[If[i != ib, P[[i]] = P[[ib]] + 0.5 (P[[i]] - P[[ib]]); fv[[i]] = f[P[[i]]]], {i, n + 1}]],
      {it, maxIter}];
   P[[First[Ordering[fv, 1]]]]];
f[v_] := (v[[1]] - 1)^2 + (v[[2]] - 2)^2;
Print[simplexBasic[f, {0, 0}]]                    (* -> {1, 2} *)
