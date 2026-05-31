function back_substitution(U, b)
    n = length(b)
    x = zeros(n)
    for i in n:-1:1
        x[i] = (b[i] - sum(U[i, j] * x[j] for j in i+1:n; init = 0.0)) / U[i, i]
    end
    return x
end

U = [2.0 1 -1; 0 1 2; 0 0 3]; b = [1.0, 8, 9]
println(back_substitution(U, b))   # [1, 2, 3]
