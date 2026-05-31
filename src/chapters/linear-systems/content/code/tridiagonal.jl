function thomas(a, b, c, d)
    n = length(d); c = copy(c); d = copy(d)
    c[1] /= b[1]; d[1] /= b[1]
    for i in 2:n
        m = b[i] - a[i] * c[i-1]
        i < n && (c[i] /= m)
        d[i] = (d[i] - a[i] * d[i-1]) / m
    end
    x = zeros(n); x[n] = d[n]
    for i in n-1:-1:1
        x[i] = d[i] - c[i] * x[i+1]
    end
    return x
end

a = [0.0, -1, -1, -1]; b = [4.0, 4, 4, 4]; c = [-1.0, -1, -1, 0]; d = [2.0, 4, 6, 13]
println(thomas(a, b, c, d))
