function secant(f, x0, x1; tol = 1e-12, max_iter = 100)
    f0, f1 = f(x0), f(x1)
    for k in 1:max_iter
        x2 = x1 - f1 * (x1 - x0) / (f1 - f0)
        abs(x2 - x1) < tol && return x2, k
        x0, f0, x1, f1 = x1, f1, x2, f(x2)
    end
    return x1, max_iter
end
println(secant(x -> x^2 - 2, 1.0, 2.0))   # sqrt(2)
