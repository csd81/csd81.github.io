function line_fit(x, y)
    n = length(x)
    Sx = sum(x); Sy = sum(y)
    Sxx = sum(x .^ 2); Sxy = sum(x .* y)
    b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx^2)   # slope
    a = (Sy - b*Sx) / n                      # intercept
    return a, b
end

x = [0, 1, 2, 3, 4]; y = [1, 3, 2, 5, 4]
a, b = line_fit(x, y)
println("slope b = ", b, ", intercept a = ", a)
# -> slope b = 0.8, intercept a = 1.4
