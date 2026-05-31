import numpy as np


def steepest_descent(f, grad, x0, tol=1e-8, max_iter=1000):
    """Steepest descent with backtracking (Armijo) line search."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        d = -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):   # Armijo condition
            t *= 0.5
        x = x + t * d
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(steepest_descent(f, grad, [0, 0]))          # -> (1, 2)
