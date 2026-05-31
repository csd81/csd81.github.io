rk4[f_, t0_, y0_, h_, n_] := Module[{t = t0, y = y0, k1, k2, k3, k4},
   Do[
    k1 = f[t, y];
    k2 = f[t + h/2, y + h/2 k1];
    k3 = f[t + h/2, y + h/2 k2];
    k4 = f[t + h, y + h k3];
    y = y + h (k1 + 2 k2 + 2 k3 + k4)/6; t = t + h, {n}]; y];
f[t_, y_] := 2 y - 10 t^2 + 2 t;
Print["y(1) = ", rk4[f, 0., 1., 0.1, 10]]
