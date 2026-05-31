import numpy as np


def broyden(F, x0, tol=1e-12, max_iter=100):
    """Broyden's (good) method for F(x) = 0; approximates the Jacobian."""
    x = np.array(x0, float)
    B = np.eye(len(x))                       # initial Jacobian approximation
    Fx = np.array(F(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(Fx, np.inf) < tol:
            return x, k
        dx = np.linalg.solve(B, -Fx)
        x = x + dx
        Fx_new = np.array(F(x), float)
        dF = Fx_new - Fx
        B = B + np.outer(dF - B @ dx, dx) / (dx @ dx)   # rank-1 update
        Fx = Fx_new
    return x, max_iter


if __name__ == "__main__":
    F = lambda v: [v[0]**2 + v[1]**2 - 4, v[0] * v[1] - 1]
    print(broyden(F, [2.0, 0.5]))
