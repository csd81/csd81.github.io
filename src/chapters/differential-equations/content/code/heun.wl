heun[f_, t0_, y0_, h_, n_] := Module[{t = t0, y = y0, k1, k2},
   Do[k1 = f[t, y]; k2 = f[t + h, y + h k1];
      y = y + h (k1 + k2)/2; t = t + h, {n}]; y];
f[t_, y_] := 2 y - 10 t^2 + 2 t;
Print["y(1) = ", heun[f, 0., 1., 0.1, 10]]
