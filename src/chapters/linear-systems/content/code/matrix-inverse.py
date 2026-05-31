import numpy as np


def inverse(A):
    """Matrix inverse via Gauss-Jordan on the augmented system [A | I]."""
    A = np.array(A, float)
    n = len(A)
    M = np.hstack([A, np.eye(n)])
    for k in range(n):
        p = k + np.argmax(np.abs(M[k:, k]))
        M[[k, p]] = M[[p, k]]
        M[k] /= M[k, k]
        for i in range(n):
            if i != k:
                M[i] -= M[i, k] * M[k]
    return M[:, n:]                               # right half is A^{-1}


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    Ainv = inverse(A)
    print("A^-1 =\n", Ainv)
    print("check A @ A^-1 =\n", np.round(np.array(A, float) @ Ainv, 10))
