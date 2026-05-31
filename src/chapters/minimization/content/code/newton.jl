nrm(v) = sqrt(sum(abs2, v))
function newton_min(grad, hess, x0; tol = 1e-10, max_iter = 100)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        x = x - hess(x) \ g            # solve H p = grad
    end
    return x
end
g(v) = [2*(v[1]-1), 2*(v[2]-2)]
H(v) = [2.0 0; 0 2]
println(newton_min(g, H, [0.0, 0.0]))   # [1, 2]
