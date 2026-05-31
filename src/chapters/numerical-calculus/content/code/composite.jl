function composite(f, a, b, n = 10)
    isodd(n) && (n += 1)                 # Simpson needs even n
    h = (b - a) / n
    T = (f(a) + f(b)) / 2
    S = f(a) + f(b)
    for i in 1:n-1
        yi = f(a + i*h)
        T += yi
        S += (isodd(i) ? 4 : 2) * yi
    end
    return h*T, h/3*S
end

T, S = composite(exp, 0.0, 1.0, 10)
println("trapezoid = ", T)
println("Simpson   = ", S)
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
