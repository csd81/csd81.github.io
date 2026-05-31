import numpy as np


def jacobi(A, b, x0=None, tol=1e-10, max_iter=200):
    """Solve A x = b by Jacobi iteration. Returns (x, iterations)."""
    A = np.asarray(A, float)
    b = np.asarray(b, float)
    n = len(b)
    x = np.zeros(n) if x0 is None else np.asarray(x0, float)
    D = np.diag(A)                 # diagonal entries
    R = A - np.diagflat(D)         # off-diagonal part
    for k in range(1, max_iter + 1):
        x_new = (b - R @ x) / D    # x_i = (b_i - sum_{j!=i} a_ij x_j) / a_ii
        if np.linalg.norm(x_new - x, np.inf) <= tol:
            return x_new, k
        x = x_new
    return x, max_iter


if __name__ == "__main__":
    A = [[4, 2, -1], [5, -10, 2], [-2, 3, -7]]
    b = [9, 8, 3]
    x, it = jacobi(A, b)
    print("x =", x, " iterations =", it)
