taylor3[f_, df_, d2f_, t0_, y0_, h_, n_] := Module[{t = t0, y = y0},
   Do[y = y + h f[t, y] + h^2/2 df[t, y] + h^3/6 d2f[t, y]; t = t + h, {n}]; y];
f[t_, y_] := 2 y - 10 t^2 + 2 t;
df[t_, y_] := 4 y - 20 t^2 - 16 t + 2;
d2f[t_, y_] := 8 y - 40 t^2 - 32 t - 16;
Print["y(1) = ", taylor3[f, df, d2f, 0., 1., 0.1, 10]]
