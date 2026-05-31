function heun(f, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        k1 = f(t, y); k2 = f(t + h, y + h*k1)
        y += h*(k1 + k2)/2; t += h
    end
    return y
end
f(t, y) = 2y - 10t^2 + 2t
println("y(1) = ", heun(f, 0.0, 1.0, 0.1, 10))
