import numpy as np


def iterative_refinement(A, b, tol=1e-12, max_iter=20):
    """Improve the solution of A x = b by refining on the residual r = b - A x."""
    A = np.asarray(A, float)
    b = np.asarray(b, float)
    x = np.linalg.solve(A, b)
    for k in range(1, max_iter + 1):
        r = b - A @ x                       # residual
        d = np.linalg.solve(A, r)           # correction
        x = x + d
        if np.linalg.norm(d, np.inf) < tol:
            return x, k
    return x, max_iter


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print(iterative_refinement(A, b))   # ([2, 3, -1], ...)
