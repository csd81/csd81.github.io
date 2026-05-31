function newton_eval(x, a, t)
    p = a[end]
    for k in length(a)-1:-1:1
        p = p * (t - x[k]) + a[k]
    end
    return p
end

println(newton_eval([-1, 1, 2, 3], [-3, 2, 0, 3], 0))   # 5
