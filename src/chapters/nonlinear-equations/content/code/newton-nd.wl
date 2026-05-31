newtonSystem[F_, J_, x0_, tol_ : 10^-12, maxIter_ : 100] := Module[
   {x = N[x0], Fx, k},
   Do[Fx = F[x];
      If[Max[Abs[Fx]] < tol, Return[x]];
      x = x - LinearSolve[J[x], Fx], {k, maxIter}];
   x];
F[v_] := {v[[1]]^2 + v[[2]]^2 - 4, v[[1]] v[[2]] - 1};
J[v_] := {{2 v[[1]], 2 v[[2]]}, {v[[2]], v[[1]]}};
Print[newtonSystem[F, J, {2., 0.5}]]
