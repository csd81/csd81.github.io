function iterative_refinement(A, b; tol = 1e-12, max_iter = 20)
    x = A \ b
    for k in 1:max_iter
        r = b - A * x          # residual
        d = A \ r              # correction
        x = x + d
        maximum(abs.(d)) < tol && return x, k
    end
    return x, max_iter
end

A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(iterative_refinement(A, b))
