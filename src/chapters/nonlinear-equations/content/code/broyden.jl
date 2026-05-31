using LinearAlgebra

function broyden(F, x0; tol = 1e-12, max_iter = 100)
    x = float.(x0); n = length(x); B = Matrix{Float64}(I, n, n); Fx = F(x)
    for k in 1:max_iter
        maximum(abs.(Fx)) < tol && return x, k
        dx = B \ (-Fx); x = x + dx
        Fn = F(x); y = Fn - Fx
        B = B + ((y - B*dx) * dx') / (dx' * dx)     # rank-1 update
        Fx = Fn
    end
    return x, max_iter
end
F(v) = [v[1]^2 + v[2]^2 - 4, v[1]*v[2] - 1]
println(broyden(F, [2.0, 0.5]))
