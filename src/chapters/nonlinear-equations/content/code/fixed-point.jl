function fixed_point(g, x0; tol = 1e-12, max_iter = 200)
    x = x0
    for k in 1:max_iter
        xn = g(x)
        abs(xn - x) < tol && return xn, k
        x = xn
    end
    return x, max_iter
end
println(fixed_point(cos, 1.0))   # Dottie number ~0.739085
