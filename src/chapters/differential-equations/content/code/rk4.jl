function rk4(f, t0, y0, h, n)
    t, y = t0, y0
    for i in 1:n
        k1 = f(t, y)
        k2 = f(t + h/2, y + h/2*k1)
        k3 = f(t + h/2, y + h/2*k2)
        k4 = f(t + h,   y + h*k3)
        y += h*(k1 + 2k2 + 2k3 + k4)/6; t += h
    end
    return y
end
f(t, y) = 2y - 10t^2 + 2t
println("y(1) = ", rk4(f, 0.0, 1.0, 0.1, 10))
