function taylor3(f, df, d2f, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        y += h*f(t, y) + h^2/2*df(t, y) + h^3/6*d2f(t, y); t += h
    end
    return y
end
f(t, y)   = 2y - 10t^2 + 2t
df(t, y)  = 4y - 20t^2 - 16t + 2
d2f(t, y) = 8y - 40t^2 - 32t - 16
println("y(1) = ", taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10))
