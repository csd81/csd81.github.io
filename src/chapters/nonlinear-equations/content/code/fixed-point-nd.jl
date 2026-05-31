function fixed_point_nd(G, x0; tol = 1e-12, max_iter = 200)
    x = float.(x0)
    for k in 1:max_iter
        xn = G(x)
        maximum(abs.(xn - x)) < tol && return xn, k
        x = xn
    end
    return x, max_iter
end
G(v) = [cos(v[2]), sin(v[1])]
println(fixed_point_nd(G, [0.0, 0.0]))
