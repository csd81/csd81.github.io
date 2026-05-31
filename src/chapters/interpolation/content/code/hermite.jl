function hermite_coeffs(x, y, dy)
    n = length(x); m = 2n; z = zeros(m); Q = zeros(m, m)
    for i in 1:n
        z[2i-1] = x[i]; z[2i] = x[i]
        Q[2i-1, 1] = y[i]; Q[2i, 1] = y[i]
        Q[2i, 2] = dy[i]
        i > 1 && (Q[2i-1, 2] = (Q[2i-1, 1] - Q[2i-2, 1]) / (z[2i-1] - z[2i-2]))
    end
    for j in 3:m, i in j:m
        Q[i, j] = (Q[i, j-1] - Q[i-1, j-1]) / (z[i] - z[i-j+1])
    end
    return z, [Q[i, i] for i in 1:m]
end

z, a = hermite_coeffs([0.0, 1], [1.0, 0], [0.0, 0])
println(a)   # [1, 0, -1, 2]
