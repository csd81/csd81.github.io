using LinearAlgebra
# SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
function sr1(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        if g ⋅ d >= 0                            # safeguard: SR1 may lose definiteness
            H = Matrix{Float64}(I, n, n); d = -g
        end
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        w = s - H * y                            # secant-condition residual
        wy = w ⋅ y
        if abs(wy) > 1e-12                       # SR1 inverse update (rank one)
            H = H + (w*w')/wy
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(sr1(f, g, [0.0, 0.0]))                  # -> [1, 2]
