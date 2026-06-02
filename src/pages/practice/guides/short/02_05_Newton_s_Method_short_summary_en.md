**2.5. Newton's Method** (*Newton–Raphson Method* or *Tangent Method*) 

## 1. Basic Idea and Mathematical Background of the Method

* **The numerical principle:** Replace the complicated nonlinear problem with a simpler (linear) problem close to it, and consider its solution as an approximation of the original problem.
* **Mathematical derivation:** To solve the equation $f(x)=0$, we fix a starting point $p_0$, and write down the first-order Taylor polynomial (linear approximation) of the function around $p_0$:

$$f(p_0) + f'(p_0)(x - p_0) = 0$$


* **The recurrence formula:** By solving the above linear equation for $x$, we get the next approximation point. Repeating this procedure yields the recursive formula of the Newton iteration (provided that $f'(p_k) \neq 0$):

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}$$



### Geometric Interpretation

Geometrically, the method means that we **draw a tangent to the function** at the current graph point $(p_k, f(p_k))$, and the next point $p_{k+1}$ will be the intersection of this tangent line and the $x$-axis.



## 2. Convergence and Connection with Fixed-Point Iteration

Newton's method can also be conceived as a special, single-step fixed-point iteration, where the iteration function is:


$$g(x) := x - \frac{f(x)}{f'(x)}$$


If we differentiate the function $g$ based on the quotient rule, we get the following:


$$g'(x) = \frac{f(x)f''(x)}{(f'(x))^2}$$


If $p$ is an actual root of the function ($f(p)=0$), and the first derivative is not zero at this point ($f'(p) \neq 0$), then due to the numerator, $g'(p) = 0$ will hold. According to the fixed-point theorem, this guarantees extremely fast convergence:

> **Theorem 2.23 (Local Convergence):** Let $f \in C^2[a,b]$, and $p \in (a,b)$ be a root of $f$ where $f'(p) \neq 0$. Then Newton's method **converges locally** to $p$ (i.e., starting close enough, the sequence will surely converge to the root). Since $g'(p)=0$, the convergence is **second-order (quadratic)**, which results in extremely fast execution.

* **Example of speed:** For the equation $e^x - 2\cos x = 0$, starting with an initial value of $p_0=0.1$, the method reaches an accuracy of the order of $10^{-14}$ in just **5 steps**.



## 3. Dangers and Limitations of Newton's Method

Although the method is very fast in the ideal case, it has serious pitfalls and disadvantages:

### A) Chaos and Divergence: The $\arctan$ Example (Example 2.24)

Consider the function $f(x) = 0.5\arctan x$, whose only root is $p=0$. Depending on the choice of the starting point, three completely different cases can occur:

1. **Convergence ($|p_0| < p^*$):** If we start close enough to zero, the sequence converges quickly to the root.
2. **Cycle ($|p_0| = p^* \approx 1.3918$):** There is a critical point from which the sequence constantly oscillates between the values $p^*$ and $-p^*$, i.e., it **enters a periodic orbit** and never converges.
3. **Divergence ($|p_0| > p^*$):** If we start from outside the critical value (e.g., $p_0 = 1.4$), the tangents push the next point further and further away from the origin. The sign of the sequence alternates, but its absolute value **tends to infinity ($|p_k| \to \infty$)**, so the iteration completely collapses.

### B) Practical Disadvantages

* **Need for the derivative:** The formula requires the exact analytical formula of $f'(x)$.
* **Complicated formulas:** If the original function is complex, the formula of the derivative can be extremely long and computationally intensive, which increases the risk of round-off error accumulation.
* **Lack of a formula:** If the function does not have a known analytical form (e.g., only a set of measurement data or a black-box simulation provides the function values), Newton's method cannot be applied directly.
