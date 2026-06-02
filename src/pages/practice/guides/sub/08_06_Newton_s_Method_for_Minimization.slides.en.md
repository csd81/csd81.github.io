# 8.6. Newton's Method for Minimization

Consider a function $f\colon \mathbb{R}^n \to \mathbb{R}$, and fix a vector $\mathbf{p}^{(0)}$. If $f \in C^3$, then in a neighbourhood of $\mathbf{p}^{(0)}$ the function $f$ can be approximated by its second-order Taylor polynomial

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}), \tag{14}$$

where $f'(\mathbf{p}^{(0)})$ is the gradient vector of $f$, and $f''(\mathbf{p}^{(0)})$ is the Hessian matrix of $f$ at $\mathbf{p}^{(0)}$. Suppose that $f''(\mathbf{p}^{(0)})$ is positive definite. Then $g$ has a global minimum at the point

$$\mathbf{p}^{(1)} = \mathbf{p}^{(0)} - \big(f''(\mathbf{p}^{(0)})\big)^{-1} f'(\mathbf{p}^{(0)}).$$

Then we consider $\mathbf{p}^{(1)}$ as an approximation of the minimum point of $f$, and we repeat the previous process from the point $\mathbf{p}^{(1)}$. We can define the iteration:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}), \tag{15}$$

which is called **Newton's method for minimization**.

---

It is easy to see that it is equivalent to the Newton's method for solving the nonlinear system $f'(\mathbf{x}) = \mathbf{0}$. We get therefore the following result immediately.

> **Theorem.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$ and $f''(\mathbf{p})$ be positive definite. Then $f$ has a local minimum at $\mathbf{p}$, and the Newton's iteration (15) locally quadratically converges to $\mathbf{p}$.*

---

> **Example.** We apply Newton's method for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. The first 5 terms of the sequence starting from $(-1, 4)^T$ can be seen in the next table. We observe quick convergence to the minimum point $(1, 0.5)^T$. The numerical results indicate that the order of convergence is quadratic. We note that the Newton's iteration starting from $(1, 3)^T$ gives back the exact minimum point in one step.

---

**Example cont.**

*Newton's method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

---

