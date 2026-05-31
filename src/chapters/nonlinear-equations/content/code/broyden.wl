broyden[F_, x0_, tol_ : 10^-12, maxIter_ : 100] := Module[
   {x = N[x0], n = Length[x0], B, Fx, dx, Fn, y, k},
   B = IdentityMatrix[n]; Fx = F[x];
   Do[
    If[Max[Abs[Fx]] < tol, Return[x]];
    dx = LinearSolve[B, -Fx]; x = x + dx;
    Fn = F[x]; y = Fn - Fx;
    B = B + Outer[Times, y - B.dx, dx]/(dx.dx);
    Fx = Fn, {k, maxIter}];
   x];
F[v_] := {v[[1]]^2 + v[[2]]^2 - 4, v[[1]] v[[2]] - 1};
Print[broyden[F, {2, 0.5}]]
