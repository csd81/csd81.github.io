using LinearAlgebra

function newton_system(F, J, x0; tol = 1e-12, max_iter = 100)
    x = float.(x0)
    for k in 1:max_iter
        Fx = F(x)
        maximum(abs.(Fx)) < tol && return x, k
        x = x - J(x) \ Fx
    end
    return x, max_iter
end
F(v) = [v[1]^2 + v[2]^2 - 4, v[1]*v[2] - 1]
J(v) = [2v[1] 2v[2]; v[2] v[1]]
println(newton_system(F, J, [2.0, 0.5]))
