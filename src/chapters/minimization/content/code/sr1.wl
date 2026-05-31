(* SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form). *)
sr1[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, w, wy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: SR1 may lose definiteness *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g;
      w = s - H.y; wy = w.y;                       (* secant-condition residual *)
      If[Abs[wy] > 10^-12,                         (* SR1 inverse update (rank one) *)
         H = H + Outer[Times, w, w]/wy];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[sr1[f, g, {0, 0}]]                          (* -> {1, 2} *)
