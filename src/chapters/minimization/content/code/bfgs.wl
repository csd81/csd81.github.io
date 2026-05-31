(* BFGS quasi-Newton minimization with backtracking (Armijo) line search. *)
bfgs[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, sy, rho, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                       (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d;
      xNew = x + s; gNew = grad[xNew];
      y = gNew - g; sy = s.y;
      If[sy > 10^-12,                            (* H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T *)
         rho = 1/sy;
         H = (Id - rho Outer[Times, s, y]).H.(Id - rho Outer[Times, y, s]) + rho Outer[Times, s, s]];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[bfgs[f, g, {0, 0}]]                        (* -> {1, 2} *)
