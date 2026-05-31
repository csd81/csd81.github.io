function poly_fit(t, y, degree)
    A = [ti^j for ti in t, j in 0:degree]   # Vandermonde: columns 1, t, t^2, ...
    return A \ y                              # least-squares solution
end

t = [0.0, 1, 2, 3, 4]; y = [1.0, 1.8, 3.3, 4.5, 6.3]
println("coeffs (low->high): ", poly_fit(t, y, 2))
