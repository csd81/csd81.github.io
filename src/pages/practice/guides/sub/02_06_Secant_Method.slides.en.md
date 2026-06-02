## 2.6 Secant Method

Let $p_0$ and $p_1$ be two different initial values of the sequence. Consider the secant line of $f$ corresponding to the points $p_0$ and $p_1$, i.e., the line which connects the points $(p_0, f(p_0))$ and $(p_1, f(p_1))$. Its equation is

$$y = f(p_1) + \frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1).$$

The secant line intersects the $x$-axis at

$$x = p_1 - \frac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1).$$

We define the sequence $p_k$ by the recursion

$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k). \tag{9}$$

This is a two-step iteration, which defines the **secant method**.

### Example

Solve $e^x - 2\cos x = 0$ using the secant method. We observe that the secant method converges to its limit slower than the Newton's method.

secant method, $f(x) = e^x - 2\cos x$, $p_0 = 0$, $p_1 = 1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 |  1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 |  1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 |  6.0793e-11 |

### Theorem

Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the secant method converges locally to $p$.

---

