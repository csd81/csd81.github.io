nrm(v) = sqrt(sum(abs2, v))
function steepest_descent(f, grad, x0; tol = 1e-8, max_iter = 1000)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        d = -g; t = 1.0; fx = f(x); gd = sum(g .* d)
        while f(x .+ t .* d) > fx + 1e-4 * t * gd          # Armijo line search
            t /= 2
        end
        x = x .+ t .* d
    end
    return x
end
f(v) = (v[1] - 1)^2 + 5*(v[2] - 2)^2
g(v) = [2*(v[1] - 1), 10*(v[2] - 2)]
println(steepest_descent(f, g, [0.0, 0.0]))   # [1, 2]
