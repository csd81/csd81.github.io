function taylor2(f, df, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        y += h*f(t, y) + h^2/2*df(t, y); t += h    # df = total derivative f'
    end
    return y
end
f(t, y)  = 2y - 10t^2 + 2t
df(t, y) = 4y - 20t^2 - 16t + 2
println("y(1) = ", taylor2(f, df, 0.0, 1.0, 0.1, 10))
