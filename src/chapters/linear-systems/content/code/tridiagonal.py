def thomas(a, b, c, d):
    """Thomas algorithm for a tridiagonal system.
    a: sub-diagonal (a[0] unused), b: diagonal, c: super-diagonal, d: rhs."""
    n = len(d)
    c2, d2 = c[:], d[:]
    c2[0] /= b[0]
    d2[0] /= b[0]
    for i in range(1, n):
        m = b[i] - a[i] * c2[i - 1]
        c2[i] = c[i] / m if i < n - 1 else 0.0
        d2[i] = (d[i] - a[i] * d2[i - 1]) / m
    x = [0.0] * n
    x[-1] = d2[-1]
    for i in range(n - 2, -1, -1):
        x[i] = d2[i] - c2[i] * x[i + 1]
    return x


if __name__ == "__main__":
    # diagonal 4, off-diagonals -1; solution [1, 2, 3, 4]
    a = [0, -1, -1, -1]
    b = [4, 4, 4, 4]
    c = [-1, -1, -1, 0]
    d = [2, 4, 6, 13]
    print(thomas(a, b, c, d))
