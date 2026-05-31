(* Central-difference first derivative, error O(h^2). *)
deriv1[f_, x_, h_ : 0.01] := (f[x + h] - f[x - h])/(2 h);

(* Central-difference second derivative, error O(h^2). *)
deriv2[f_, x_, h_ : 0.01] := (f[x + h] - 2 f[x] + f[x - h])/h^2;

Print["f'(1)  ~ ", deriv1[Sin, 1., 0.01], "  exact cos(1)  = ", Cos[1.]]
Print["f''(1) ~ ", deriv2[Sin, 1., 0.01], "  exact -sin(1) = ", -Sin[1.]]
