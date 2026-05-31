# Central-difference first derivative D(h), error O(h^2).
central(f, x, h) = (f(x + h) - f(x - h)) / (2h)

# Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
function richardson(f, x, h)
    d1 = central(f, x, h)
    d2 = central(f, x, h/2)
    return d1, d2, (4d2 - d1) / 3
end

d1, d2, ext = richardson(sin, 1.0, 0.1)
println("D(h)         = ", d1)
println("D(h/2)       = ", d2)
println("extrapolated = ", ext, "  exact cos(1) = ", cos(1.0))
