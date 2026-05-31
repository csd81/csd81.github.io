import numpy as np


def newton_min(grad, hess, x0, tol=1e-10, max_iter=100):
    """Newton's method for unconstrained minimization (solves H p = -grad)."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        x = x - np.linalg.solve(np.array(hess(x), float), g)
    return x, max_iter


if __name__ == "__main__":
    grad = lambda v: [2 * (v[0] - 1), 2 * (v[1] - 2)]
    hess = lambda v: [[2, 0], [0, 2]]
    print(newton_min(grad, hess, [0, 0]))             # -> (1, 2)
