(* PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form). *)
psb[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, w, yy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: descent direction *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g;
      w = s - H.y; yy = y.y;                       (* secant-condition residual *)
      If[yy > 10^-12,                              (* PSB inverse update (symmetric) *)
         H = H + (Outer[Times, w, y] + Outer[Times, y, w])/yy - (y.w/yy^2) Outer[Times, y, y]];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[psb[f, g, {0, 0}]]                          (* -> {1, 2} *)
