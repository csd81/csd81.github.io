function golden_section(f, a, b; tol = 1e-8)
    g = (sqrt(5) - 1) / 2
    c = b - g*(b - a); d = a + g*(b - a); fc = f(c); fd = f(d)
    while b - a > tol
        if fc < fd
            b, d, fd = d, c, fc; c = b - g*(b - a); fc = f(c)
        else
            a, c, fc = c, d, fd; d = a + g*(b - a); fd = f(d)
        end
    end
    return (a + b) / 2
end
println(golden_section(x -> (x - 2)^2 + 1, 0.0, 5.0))   # 2
