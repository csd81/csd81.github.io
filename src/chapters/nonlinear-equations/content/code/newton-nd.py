import numpy as np


def newton_system(F, J, x0, tol=1e-12, max_iter=100):
    """Newton's method for F(x) = 0 with Jacobian J(x)."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        Fx = np.array(F(x), float)
        if np.linalg.norm(Fx, np.inf) < tol:
            return x, k
        x = x - np.linalg.solve(np.array(J(x), float), Fx)
    return x, max_iter


if __name__ == "__main__":
    F = lambda v: [v[0]**2 + v[1]**2 - 4, v[0] * v[1] - 1]
    J = lambda v: [[2*v[0], 2*v[1]], [v[1], v[0]]]
    print(newton_system(F, J, [2.0, 0.5]))
