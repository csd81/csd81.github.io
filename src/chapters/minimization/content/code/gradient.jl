nrm(v) = sqrt(sum(abs2, v))
function gradient_descent(grad, x0; alpha = 0.1, tol = 1e-8, max_iter = 100000)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        x = x .- alpha .* g
    end
    return x
end
println(gradient_descent(v -> [2*(v[1]-1), 2*(v[2]-2)], [0.0, 0.0]))   # [1, 2]
