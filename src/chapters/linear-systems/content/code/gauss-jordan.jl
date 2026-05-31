function gauss_jordan(A, b)
    n = length(b); M = [Matrix{Float64}(A) Vector{Float64}(b)]   # [A | b]
    for k in 1:n
        p = argmax(abs.(M[k:n, k])) + k - 1
        M[[k, p], :] = M[[p, k], :]
        M[k, :] ./= M[k, k]                       # normalize pivot row
        for i in 1:n
            i != k && (M[i, :] .-= M[i, k] .* M[k, :])
        end
    end
    return M[:, end]
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_jordan(A, b))
