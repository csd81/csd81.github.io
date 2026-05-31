function gauss_quad(f, a, b, n = 2)
    if n == 3
        t = (-sqrt(3/5), 0.0, sqrt(3/5)); w = (5/9, 8/9, 5/9)
    else
        t = (-1/sqrt(3), 1/sqrt(3)); w = (1.0, 1.0)
    end
    hm = (b - a) / 2                     # map [-1,1] -> [a,b]
    mid = (a + b) / 2
    return hm * sum(wi * f(mid + hm*ti) for (ti, wi) in zip(t, w))
end

println("int_0^1 e^x dx = ", gauss_quad(exp, 0.0, 1.0, 2), " (2-pt)")
println("int_0^1 e^x dx = ", gauss_quad(exp, 0.0, 1.0, 3), " (3-pt)")
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
