import numpy as np


def simplex_basic(f, x0, step=1.0, tol=1e-8, max_iter=500):
    """Basic fixed-shape simplex: reflect the worst vertex through the centroid, else shrink to best."""
    x0 = np.array(x0, float)
    n = len(x0)
    P = np.vstack([x0] + [x0 + step * e for e in np.eye(n)])    # n+1 vertices
    fv = np.array([f(p) for p in P])
    for it in range(max_iter):
        iw, ib = int(np.argmax(fv)), int(np.argmin(fv))
        if max(np.linalg.norm(P[i] - P[ib]) for i in range(n + 1)) < tol:
            break
        c = (P.sum(axis=0) - P[iw]) / n                         # centroid of all but the worst
        xr = c + (c - P[iw])                                    # reflect the worst vertex
        fr = f(xr)
        if fr < fv[iw]:
            P[iw], fv[iw] = xr, fr
        else:                                                  # no improvement -> shrink toward best
            for i in range(n + 1):
                if i != ib:
                    P[i] = P[ib] + 0.5 * (P[i] - P[ib])
                    fv[i] = f(P[i])
    return P[int(np.argmin(fv))]


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + (v[1] - 2) ** 2
    print(simplex_basic(f, [0, 0]))                            # -> (1, 2)
