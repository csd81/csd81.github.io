function euler(f, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        y += h * f(t, y)          # z_{i+1} = z_i + h f(t_i, z_i)
        t += h
    end
    return y
end

f(t, y) = 2y - 10t^2 + 2t         # y(0)=1 on [0,1]
println("y(1) = ", euler(f, 0.0, 1.0, 0.1, 10))
