function forward_substitution(L, b)
    n = length(b)
    y = zeros(n)
    for i in 1:n
        y[i] = (b[i] - sum(L[i, j] * y[j] for j in 1:i-1; init = 0.0)) / L[i, i]
    end
    return y
end

L = [2.0 0 0; 1 3 0; -1 1 2]; b = [4.0, 5, -1]
println(forward_substitution(L, b))   # [2, 1, 0]
