function gauss_partial_pivot(A, b)
    A = Matrix{Float64}(A); b = Vector{Float64}(b); n = length(b)
    for k in 1:n
        p = argmax(abs.(A[k:n, k])) + k - 1          # largest pivot
        A[[k, p], :] = A[[p, k], :]; b[[k, p]] = b[[p, k]]
        for i in k+1:n
            f = A[i, k] / A[k, k]
            A[i, k:n] .-= f .* A[k, k:n]; b[i] -= f * b[k]
        end
    end
    x = zeros(n)
    for i in n:-1:1
        x[i] = (b[i] - sum(A[i, j] * x[j] for j in i+1:n; init = 0.0)) / A[i, i]
    end
    return x
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_partial_pivot(A, b))
