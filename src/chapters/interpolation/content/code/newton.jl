function divided_differences(x, y)
    a = collect(float.(y)); n = length(x)
    for j in 2:n
        for i in n:-1:j
            a[i] = (a[i] - a[i-1]) / (x[i] - x[i-j+1])
        end
    end
    return a
end

x = [-1.0, 1, 2, 3]; y = [-3.0, 1, 3, 29]
println(divided_differences(x, y))   # [-3, 2, 0, 3]
