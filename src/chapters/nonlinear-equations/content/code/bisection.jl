function bisection(f, a, b; tol = 1e-12, max_iter = 200)
    fa = f(a)
    for k in 1:max_iter
        c = (a + b) / 2; fc = f(c)
        (fc == 0 || (b - a) / 2 < tol) && return c, k
        if fa * fc < 0
            b = c
        else
            a, fa = c, fc
        end
    end
    return (a + b) / 2, max_iter
end
println(bisection(x -> x^2 - 2, 1.0, 2.0))   # sqrt(2)
