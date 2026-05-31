import numpy as np


def bfgs(f, grad, x0, tol=1e-8, max_iter=200):
    """BFGS quasi-Newton minimization with backtracking line search."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        sy = s @ y
        if sy > 1e-12:                                # BFGS inverse update
            rho = 1.0 / sy
            I = np.eye(n)
            H = (I - rho * np.outer(s, y)) @ H @ (I - rho * np.outer(y, s)) + rho * np.outer(s, s)
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(bfgs(f, grad, [0, 0]))                      # -> (1, 2)
