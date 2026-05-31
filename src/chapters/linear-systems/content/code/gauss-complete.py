import numpy as np


def gauss_complete_pivot(A, b):
    """Gaussian elimination with complete (row+column) pivoting.
    Returns x (column swaps are undone before returning)."""
    A = np.array(A, float)
    b = np.array(b, float)
    n = len(b)
    col = np.arange(n)                            # tracks column permutation
    for k in range(n):
        sub = np.abs(A[k:, k:])
        i, j = np.unravel_index(np.argmax(sub), sub.shape)
        i += k
        j += k
        A[[k, i]] = A[[i, k]]; b[[k, i]] = b[[i, k]]
        A[:, [k, j]] = A[:, [j, k]]; col[[k, j]] = col[[j, k]]
        for r in range(k + 1, n):
            f = A[r, k] / A[k, k]
            A[r, k:] -= f * A[k, k:]
            b[r] -= f * b[k]
    y = np.zeros(n)
    for i in range(n - 1, -1, -1):
        y[i] = (b[i] - A[i, i + 1:] @ y[i + 1:]) / A[i, i]
    x = np.zeros(n)
    x[col] = y                                    # undo column permutation
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_complete_pivot(A, b))
