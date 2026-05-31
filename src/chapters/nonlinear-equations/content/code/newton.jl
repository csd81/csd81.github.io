function newton(f, df, x0; tol = 1e-12, max_iter = 100)
    x = x0
    for k in 1:max_iter
        fx = f(x)
        abs(fx) < tol && return x, k
        x -= fx / df(x)
    end
    return x, max_iter
end
println(newton(x -> x^2 - 2, x -> 2x, 1.0))   # sqrt(2)
