function power_fit(t, y)
    A = [log.(t) ones(length(t))]            # ln y = a ln t + ln b
    p = A \ log.(y)
    return p[1], exp(p[2])
end

t = [1.0, 2, 3, 4]; y = [2.0, 5.6, 9.7, 16.0]
a, b = power_fit(t, y); println("a = $a, b = $b")
