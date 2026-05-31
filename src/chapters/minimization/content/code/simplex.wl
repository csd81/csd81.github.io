(* Nelder-Mead downhill simplex minimization. *)
nelderMead[f_, x0_, step_ : 0.5, tol_ : 10^-10, maxIter_ : 400] := Module[
   {n = Length[x0], pts, fv, ord, c, xr, fr, xe, fe, xc, fc, it},
   pts = Prepend[Table[N[x0] + step UnitVector[n, i], {i, n}], N[x0]];
   fv = f /@ pts;
   Do[
      ord = Ordering[fv];
      pts = pts[[ord]]; fv = fv[[ord]];
      If[Abs[fv[[-1]] - fv[[1]]] < tol, Break[]];
      c = Mean[pts[[1 ;; n]]];                       (* centroid of best n points *)
      xr = c + (c - pts[[-1]]); fr = f[xr];          (* reflect *)
      Which[
         fr < fv[[1]],
            xe = c + 2 (c - pts[[-1]]); fe = f[xe];   (* expand *)
            If[fe < fr, {pts[[-1]], fv[[-1]]} = {xe, fe}, {pts[[-1]], fv[[-1]]} = {xr, fr}],
         fr < fv[[-2]],
            {pts[[-1]], fv[[-1]]} = {xr, fr},
         True,
            xc = c + 0.5 (pts[[-1]] - c); fc = f[xc]; (* contract *)
            If[fc < fv[[-1]],
               {pts[[-1]], fv[[-1]]} = {xc, fc},
               Do[pts[[i]] = pts[[1]] + 0.5 (pts[[i]] - pts[[1]]); fv[[i]] = f[pts[[i]]], {i, 2, n + 1}]]
      ],
      {it, maxIter}];
   pts[[1]]];
f[v_] := (v[[1]] - 1)^2 + (v[[2]] - 2)^2;
Print[nelderMead[f, {0, 0}]]                         (* -> {1, 2} *)
