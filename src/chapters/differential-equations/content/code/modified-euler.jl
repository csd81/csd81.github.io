function modified_euler(f, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        k1 = f(t, y); k2 = f(t + h/2, y + h/2*k1)   # midpoint slope
        y += h*k2; t += h
    end
    return y
end
f(t, y) = 2y - 10t^2 + 2t
println("y(1) = ", modified_euler(f, 0.0, 1.0, 0.1, 10))
