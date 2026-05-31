function gauss_seidel(A, b; tol = 1e-10, max_iter = 200)
    n = length(b)
    x = zeros(n)
    for k in 1:max_iter
        x_old = copy(x)
        for i in 1:n
            s = b[i]
            for j in 1:n
                if j != i
                    s -= A[i, j] * x[j]   # uses already-updated entries
                end
            end
            x[i] = s / A[i, i]
        end
        if maximum(abs.(x .- x_old)) <= tol
            return x, k
        end
    end
    return x, max_iter
end

A = [4.0 2 -1; 5 -10 2; -2 3 -7]
b = [9.0, 8, 3]
x, it = gauss_seidel(A, b)
println("x = ", x, "  iterations = ", it)
