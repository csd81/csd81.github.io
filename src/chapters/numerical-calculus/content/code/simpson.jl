function simpson(f, a, b, n = 100)
    isodd(n) && (n += 1)
    h = (b - a) / n
    s = f(a) + f(b)
    for i in 1:n-1
        s += (isodd(i) ? 4 : 2) * f(a + i*h)
    end
    return h / 3 * s
end

println("int_0^1 e^x dx = ", simpson(exp, 0.0, 1.0, 100))
