function natural_cubic_spline(x, y)
    n = length(x); h = diff(x)
    A = zeros(n, n); rhs = zeros(n)
    A[1, 1] = 1; A[n, n] = 1                       # natural ends c_1 = c_n = 0
    for i in 2:n-1
        A[i, i-1] = h[i-1]; A[i, i] = 2*(h[i-1] + h[i]); A[i, i+1] = h[i]
        rhs[i] = 3*((y[i+1] - y[i])/h[i] - (y[i] - y[i-1])/h[i-1])
    end
    c = A \ rhs
    a = y[1:n-1]
    b = (y[2:n] .- y[1:n-1]) ./ h .- h .* (2 .* c[1:n-1] .+ c[2:n]) ./ 3
    d = (c[2:n] .- c[1:n-1]) ./ (3 .* h)
    return a, b, c[1:n-1], d
end

a, b, c, d = natural_cubic_spline([0.0, 1, 2, 3], [0.0, 1, 0, 1])
println("a = ", a)
