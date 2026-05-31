taylor2[f_, df_, t0_, y0_, h_, n_] := Module[{t = t0, y = y0},
   Do[y = y + h f[t, y] + h^2/2 df[t, y]; t = t + h, {n}]; y];
f[t_, y_] := 2 y - 10 t^2 + 2 t;
df[t_, y_] := 4 y - 20 t^2 - 16 t + 2;
Print["y(1) = ", taylor2[f, df, 0., 1., 0.1, 10]]
