def forward_substitution(L, b):
    """Solve a lower-triangular system L y = b."""
    n = len(b)
    y = [0.0] * n
    for i in range(n):
        s = b[i] - sum(L[i][j] * y[j] for j in range(i))
        y[i] = s / L[i][i]
    return y


if __name__ == "__main__":
    L = [[2, 0, 0], [1, 3, 0], [-1, 1, 2]]
    b = [4, 5, -1]
    print(forward_substitution(L, b))   # [2, 1, 0]
