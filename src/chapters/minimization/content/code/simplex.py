import numpy as np


def nelder_mead(f, x0, step=0.5, tol=1e-10, max_iter=400):
    """Nelder-Mead downhill simplex minimization."""
    x0 = np.array(x0, float)
    n = len(x0)
    pts = [x0] + [x0 + step * np.eye(n)[i] for i in range(n)]
    fv = [f(p) for p in pts]
    for _ in range(max_iter):
        idx = np.argsort(fv)
        pts = [pts[i] for i in idx]; fv = [fv[i] for i in idx]
        if abs(fv[-1] - fv[0]) < tol:
            break
        c = np.mean(pts[:-1], axis=0)                 # centroid of best n points
        xr = c + (c - pts[-1]); fr = f(xr)            # reflect
        if fr < fv[0]:
            xe = c + 2 * (c - pts[-1]); fe = f(xe)    # expand
            pts[-1], fv[-1] = (xe, fe) if fe < fr else (xr, fr)
        elif fr < fv[-2]:
            pts[-1], fv[-1] = xr, fr
        else:
            xc = c + 0.5 * (pts[-1] - c); fc = f(xc)  # contract
            if fc < fv[-1]:
                pts[-1], fv[-1] = xc, fc
            else:                                     # shrink toward best
                for i in range(1, n + 1):
                    pts[i] = pts[0] + 0.5 * (pts[i] - pts[0]); fv[i] = f(pts[i])
    return pts[0]


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + (v[1] - 2) ** 2
    print(nelder_mead(f, [0, 0]))                     # -> (1, 2)
