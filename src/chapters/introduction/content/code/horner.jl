function horner(a, x)
    y = a[1]
    for i in 2:length(a)
        y = y * x + a[i]
    end
    return y
end

# p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
println(horner([5, -8, 2, 4, -10], 2))   # 22
