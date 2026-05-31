# Central-difference first derivative, error O(h^2).
deriv1(f, x, h = 0.01) = (f(x + h) - f(x - h)) / (2h)

# Central-difference second derivative, error O(h^2).
deriv2(f, x, h = 0.01) = (f(x + h) - 2f(x) + f(x - h)) / h^2

println("f'(1)  ~ ", deriv1(sin, 1.0, 0.01), "  exact cos(1)  = ", cos(1.0))
println("f''(1) ~ ", deriv2(sin, 1.0, 0.01), "  exact -sin(1) = ", -sin(1.0))
