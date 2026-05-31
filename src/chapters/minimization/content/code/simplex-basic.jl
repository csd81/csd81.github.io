using LinearAlgebra
# Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
function simplex_basic(f, x0; step = 1.0, tol = 1e-8, max_iter = 500)
    x0 = float.(x0)
    n = length(x0)
    P = [copy(x0) for _ in 1:n+1]
    for i in 1:n
        P[i+1][i] += step
    end
    fv = [f(p) for p in P]
    for it in 1:max_iter
        iw = argmax(fv); ib = argmin(fv)
        maximum(norm(P[i] - P[ib]) for i in 1:n+1) < tol && break
        c = (sum(P) - P[iw]) / n                 # centroid of all but the worst
        xr = c + (c - P[iw]); fr = f(xr)         # reflect the worst vertex
        if fr < fv[iw]
            P[iw] = xr; fv[iw] = fr
        else                                     # shrink toward the best
            best = P[ib]
            for i in 1:n+1
                if i != ib
                    P[i] = best + 0.5*(P[i] - best); fv[i] = f(P[i])
                end
            end
        end
    end
    return P[argmin(fv)]
end
f = v -> (v[1] - 1)^2 + (v[2] - 2)^2
println(simplex_basic(f, [0.0, 0.0]))            # -> [1, 2]
