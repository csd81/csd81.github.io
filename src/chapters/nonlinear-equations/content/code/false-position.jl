function false_position(f, a, b; tol = 1e-12, max_iter = 200)
    fa, fb = f(a), f(b); c = a
    for k in 1:max_iter
        c = (a*fb - b*fa) / (fb - fa); fc = f(c)
        abs(fc) < tol && return c, k
        if fa*fc < 0
            b, fb = c, fc
        else
            a, fa = c, fc
        end
    end
    return c, max_iter
end
println(false_position(x -> x^2 - 2, 1.0, 2.0))   # sqrt(2)
