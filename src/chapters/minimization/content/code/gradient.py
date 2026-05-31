import numpy as np


def gradient_descent(grad, x0, alpha=0.1, tol=1e-8, max_iter=100000):
    """Gradient descent with constant step size alpha."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        x = x - alpha * g
    return x, max_iter


if __name__ == "__main__":
    grad = lambda v: [2 * (v[0] - 1), 2 * (v[1] - 2)]
    print(gradient_descent(grad, [0, 0]))             # -> (1, 2)
