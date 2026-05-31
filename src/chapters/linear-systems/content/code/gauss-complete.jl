function gauss_complete_pivot(A, b)
    A = Matrix{Float64}(A); b = Vector{Float64}(b); n = length(b); col = collect(1:n)
    for k in 1:n
        sub = abs.(A[k:n, k:n]); idx = argmax(sub)
        i, j = idx[1] + k - 1, idx[2] + k - 1
        A[[k, i], :] = A[[i, k], :]; b[[k, i]] = b[[i, k]]
        A[:, [k, j]] = A[:, [j, k]]; col[[k, j]] = col[[j, k]]
        for r in k+1:n
            f = A[r, k] / A[k, k]
            A[r, k:n] .-= f .* A[k, k:n]; b[r] -= f * b[k]
        end
    end
    y = zeros(n)
    for i in n:-1:1
        y[i] = (b[i] - sum(A[i, j] * y[j] for j in i+1:n; init = 0.0)) / A[i, i]
    end
    x = zeros(n); x[col] = y
    return x
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_complete_pivot(A, b))
