euler[f_, t0_, y0_, h_, n_] := Module[{t = t0, y = y0},
   Do[y = y + h f[t, y]; t = t + h, {n}]; y];
f[t_, y_] := 2 y - 10 t^2 + 2 t;
Print["y(1) = ", euler[f, 0., 1., 0.1, 10]]
