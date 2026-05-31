function exp_fit(t, y)
    A = [t ones(length(t))]                  # ln y = a t + ln b
    p = A \ log.(y)
    return p[1], exp(p[2])
end

t = [0.0, 1, 2, 3]; y = [2.0, 4.1, 8.2, 15.9]
a, b = exp_fit(t, y); println("a = $a, b = $b")
