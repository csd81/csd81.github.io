## 2.5 Newton's Method

We recall Taylor's Theorem from calculus.

### Theorem (Taylor's Theorem)

Let $f \in C^{n+1}[a,b]$, and let $x_0 \in (a,b)$. Then for every $x \in (a,b)$, $x \neq x_0$ there exists

$$\xi = \xi(x) \in \langle x, x_0 \rangle = \bigl(\min\{x, x_0\}, \max\{x, x_0\}\bigr)$$

such that

$$f(x) = T_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}, \qquad x \in [a,b],$$

where

$$T_n(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.$$

Here our goal is to find the solution of the scalar equation

$$f(x) = 0.$$

Fix $p_0$, and consider the first-order Taylor approximation of $f$ at $p_0$:

$$f(p_0) + f'(p_0)(x - p_0) = 0.$$

Its solution is

$$x = p_0 - \frac{f(p_0)}{f'(p_0)},$$

assuming $f'(p_0) \neq 0$. We define the recursive sequence

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}. \tag{6}$$

The iterative method (6) is called **Newton–Raphson method** or shortly **Newton's method**.

### Example

Solve $e^x - 2\cos x = 0$ using Newton's method. We observe that the sequence converges very fast to the root of the function.

Newton's method, $f(x) = e^x - 2\cos x$, $p_0 = 0.1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 |  7.5291e-01 |
| 2 | 0.5678850726 |  7.8450e-02 |
| 3 | 0.5402639121 |  1.3139e-03 |
| 4 | 0.5397853041 |  3.9302e-07 |
| 5 | 0.5397851608 |  3.5207e-14 |

The Newton's method is a one-step iteration with the function

$$g(x) := x - \frac{f(x)}{f'(x)}. \tag{7}$$

Computing the derivative of $g$ we get

$$g'(x) = 1 - \frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2} = \frac{f(x)f''(x)}{(f'(x))^2}. \tag{8}$$

Let $p$ be a root $f$ satisfying $f'(p) \neq 0$. Then

$$g'(p) = 0,$$

so the local version of the fixed point theorem yields immediately the following result.

### Theorem

Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the Newton's method converges locally to $p$.

### Example

Consider $f(x) = 0.5 \arctan x$. Its only root is $p = 0$. We have $f'(0) = 0.5$, so the Newton's method converges locally to $p = 0$, i.e., if $p_0$ is close enough to 0, then the Newton-iteration converges to 0.
It is possible to check that there exists $p^* \approx 1.3918$ such that for $p_0 = p^*$ the sequence is $p^*, -p^*, p^*, -p^*, \ldots$, i.e., it is periodic. Moreover, for $|p_0| < p^*$ the sequence $p_n \to 0$, and for $|p_0| > p^*$ the sequence $|p_n| \to \infty$.

Newton's method, $f(x) = 0.5\arctan x$, $p_0 = 1.4$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0  |  1.4000000e+00 |  0.4752734 |
| 1  | -1.4136186e+00 | -0.4775591 |
| 2  |  1.4501293e+00 |  0.4835443 |
| 3  | -1.5506260e+00 | -0.4990071 |
| 4  |  1.8470541e+00 |  0.5372889 |
| 5  | -2.8935624e+00 | -0.6190257 |
| 6  |  8.7103258e+00 |  0.7282453 |
| 7  | -1.0324977e+02 | -0.7805557 |
| 8  |  1.6540564e+04 |  0.7853679 |
| 9  | -4.2972148e+08 | -0.7853982 |
| 10 |  2.9006412e+17 |  0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 |  2.7436939e+70 |  0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 |  2.1963537e+282 |  0.7853982 |

The Newton's Method is fast, but it requires the computation of $f'(x)$. It is problematic if
- the formula of $f$ is long, then the formula of $f'$ can be very long,
- we do not have a formula for $f$, but we can evaluate $f(x)$ with a good precision.

---

