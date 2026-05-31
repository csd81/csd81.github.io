function lagrange_coeffs(x, y)
    n = length(x)
    A = [x[i]^(j - 1) for i in 1:n, j in 1:n]   # Vandermonde matrix
    return A \ y                                 # least-stable for large n
end

x = [-1.0, 1, 2, 3]; y = [-3.0, 1, 3, 29]
println(lagrange_coeffs(x, y))   # [5, -1, -6, 3]
