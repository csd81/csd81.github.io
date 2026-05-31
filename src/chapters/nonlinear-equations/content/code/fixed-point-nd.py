import numpy as np


def fixed_point_nd(G, x0, tol=1e-12, max_iter=200):
    """Vector fixed-point iteration x_{k+1} = G(x_k)."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        xn = np.array(G(x), float)
        if np.linalg.norm(xn - x, np.inf) < tol:
            return xn, k
        x = xn
    return x, max_iter


if __name__ == "__main__":
    # x = (cos y, sin x) has a fixed point near (0.694, 0.640)
    G = lambda v: [np.cos(v[1]), np.sin(v[0])]
    print(fixed_point_nd(G, [0.0, 0.0]))
