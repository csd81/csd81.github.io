def gauss_elimination(A, b):
    """Naive Gaussian elimination (no pivoting) + back-substitution."""
    n = len(b)
    M = [row[:] + [b[i]] for i, row in enumerate(A)]   # augmented [A | b]
    for k in range(n):
        for i in range(k + 1, n):
            f = M[i][k] / M[k][k]
            for j in range(k, n + 1):
                M[i][j] -= f * M[k][j]
    x = [0.0] * n
    for i in range(n - 1, -1, -1):
        s = M[i][n] - sum(M[i][j] * x[j] for j in range(i + 1, n))
        x[i] = s / M[i][i]
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print(gauss_elimination(A, b))   # [2, 3, -1]
