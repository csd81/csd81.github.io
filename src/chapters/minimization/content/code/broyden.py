import numpy as np


def broyden(f, grad, x0, tol=1e-8, max_iter=200):
    """Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form)."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        if g @ d >= 0:                               # safeguard: keep a descent direction
            H, d = np.eye(n), -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        Hy = H @ y
        sHy = s @ Hy
        if abs(sHy) > 1e-12:                         # Broyden inverse update (rank one, non-symmetric)
            H = H + np.outer(s - Hy, s @ H) / sHy
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(broyden(f, grad, [0, 0]))                  # -> (1, 2)
