using LinearAlgebra

function jacobi(A, b; tol = 1e-10, max_iter = 200)
    n = length(b)
    x = zeros(n)
    D = diag(A)
    R = A - Diagonal(D)            # off-diagonal part
    for k in 1:max_iter
        x_new = (b .- R * x) ./ D  # x_i = (b_i - sum_{j!=i} a_ij x_j) / a_ii
        if maximum(abs.(x_new .- x)) <= tol
            return x_new, k
        end
        x = x_new
    end
    return x, max_iter
end

A = [4.0 2 -1; 5 -10 2; -2 3 -7]
b = [9.0, 8, 3]
x, it = jacobi(A, b)
println("x = ", x, "  iterations = ", it)
