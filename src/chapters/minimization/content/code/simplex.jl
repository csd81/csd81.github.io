# Nelder-Mead downhill simplex minimization.
function nelder_mead(f, x0; step = 0.5, tol = 1e-10, max_iter = 400)
    n = length(x0)
    pts = [float.(x0)]
    for i in 1:n
        p = float.(x0); p[i] += step; push!(pts, p)
    end
    fv = [f(p) for p in pts]
    for _ in 1:max_iter
        ord = sortperm(fv)
        pts, fv = pts[ord], fv[ord]
        abs(fv[end] - fv[1]) < tol && break
        c = sum(pts[1:end-1]) / n                  # centroid of best n points
        xr = c + (c - pts[end]); fr = f(xr)        # reflect
        if fr < fv[1]
            xe = c + 2*(c - pts[end]); fe = f(xe)  # expand
            pts[end], fv[end] = fe < fr ? (xe, fe) : (xr, fr)
        elseif fr < fv[end-1]
            pts[end], fv[end] = xr, fr
        else
            xc = c + 0.5*(pts[end] - c); fc = f(xc)  # contract
            if fc < fv[end]
                pts[end], fv[end] = xc, fc
            else                                     # shrink toward best
                for i in 2:n+1
                    pts[i] = pts[1] + 0.5*(pts[i] - pts[1]); fv[i] = f(pts[i])
                end
            end
        end
    end
    return pts[1]
end
f = v -> (v[1] - 1)^2 + (v[2] - 2)^2
println(nelder_mead(f, [0.0, 0.0]))               # -> [1, 2]
