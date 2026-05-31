using LinearAlgebra

function inverse(A)
    n = size(A, 1)
    M = [Matrix{Float64}(A) Matrix{Float64}(I, n, n)]   # [A | I]
    for k in 1:n
        p = argmax(abs.(M[k:n, k])) + k - 1
        M[[k, p], :] = M[[p, k], :]
        M[k, :] ./= M[k, k]
        for i in 1:n
            i != k && (M[i, :] .-= M[i, k] .* M[k, :])
        end
    end
    return M[:, n+1:end]
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]
println(inverse(A))
