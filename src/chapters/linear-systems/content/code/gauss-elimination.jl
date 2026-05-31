function gauss_elimination(A, b)
    n = length(b)
    M = [A b]                       # augmented [A | b]
    for k in 1:n-1, i in k+1:n
        f = M[i, k] / M[k, k]
        M[i, k:n+1] .-= f .* M[k, k:n+1]
    end
    x = zeros(n)
    for i in n:-1:1
        x[i] = (M[i, n+1] - sum(M[i, j] * x[j] for j in i+1:n; init = 0.0)) / M[i, i]
    end
    return x
end

A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_elimination(A, b))   # [2, 3, -1]
