function trapezoid(f, a, b, n = 100)
    h = (b - a) / n
    s = (f(a) + f(b)) / 2
    for i in 1:n-1
        s += f(a + i*h)
    end
    return h * s
end

println("int_0^1 e^x dx = ", trapezoid(exp, 0.0, 1.0, 100))
