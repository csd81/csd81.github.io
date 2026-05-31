import numpy as np


def gauss_seidel(A, b, x0=None, tol=1e-10, max_iter=200):
    """Solve A x = b by Gauss-Seidel iteration. Returns (x, iterations)."""
    A = np.asarray(A, float)
    b = np.asarray(b, float)
    n = len(b)
    x = np.zeros(n) if x0 is None else np.asarray(x0, float).copy()
    for k in range(1, max_iter + 1):
        x_old = x.copy()
        for i in range(n):
            # use already-updated entries x[0..i-1] and old entries x[i+1..]
            s = b[i] - A[i, :i] @ x[:i] - A[i, i + 1:] @ x[i + 1:]
            x[i] = s / A[i, i]
        if np.linalg.norm(x - x_old, np.inf) <= tol:
            return x, k
    return x, max_iter


if __name__ == "__main__":
    A = [[4, 2, -1], [5, -10, 2], [-2, 3, -7]]
    b = [9, 8, 3]
    x, it = gauss_seidel(A, b)
    print("x =", x, " iterations =", it)
