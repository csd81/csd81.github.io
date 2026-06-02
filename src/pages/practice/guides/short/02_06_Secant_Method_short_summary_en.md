**2.6. Secant Method**

## 1. Motivation and Basic Idea of the Method

* **The problem with Newton's method:** Although Newton's method converges quadratically, it requires the knowledge of the analytical formula of $f'(x)$ and its evaluation in every step. This is often not available (e.g., if the function value is provided by a separate black-box numerical procedure), or calculating the derivative requires too many machine operations.
* **The solution of the secant method:** Instead of exactly calculating the derivative, the method approximates the value of $f'$ with a **difference quotient** written for the last two known points of the function:

$$f'(p_k) \approx \frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}$$


* **Geometric interpretation:** Instead of a tangent line, we take a **secant line** passing through two points of the graph, the coordinates $(p_{k-1}, f(p_{k-1}))$ and $(p_k, f(p_k))$. The new approximation $p_{k+1}$ will be the intersection of this secant and the $x$-axis.

From the equation of the secant line comes the **two-step recurrence formula** of the secant method (which thus requires fixing two initial values, $p_0$ and $p_1$):


$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$$

> **Important difference:** While Newton's method is a single-step (fixed-point) iteration, the secant method is a **two-step iteration**, because calculating the new term requires the knowledge of the previous two terms.



## 2. Local Convergence and the Fibonacci Sequence (Theorem 2.27)

* **Theorem:** Let $f \in C^2[a,b]$, the sought root $p \in (a,b)$, where $f(p)=0$ and $f'(p) \neq 0$. Then the secant method **converges locally** to $p$ (i.e., for $p_0, p_1$ chosen from a sufficiently small neighborhood of the root, the sequence will surely converge to the root).

### Derivation of the Convergence Speed

Behind the proof lies a very beautiful mathematical connection between the error and the **Fibonacci sequence**:

1. From Taylor's theorem and Lagrange's mean value theorem (as well as second-order divided differences), the recursion of the error term can be derived:

$$p_{k+1} - p = \frac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k - p)(p_{k-1} - p)$$


2. From this, an estimate $M|p_{k+1}-p| \le M|p_k-p|M|p_{k-1}-p|$ can be written for the error.
3. If we estimate the error with a sequence of the form $\varepsilon^{q_k}$ (where $0 < \varepsilon < 1$), then the following recursion applies to the exponents:

$$q_{k+1} = q_k + q_{k-1}, \quad q_0=1, \quad q_1=1$$



This is exactly the Fibonacci sequence.
4. From the explicit formula of the general term of the Fibonacci sequence (Binet's formula), it can be seen that its growth rate is determined by the golden ratio:

$$r_0 = \frac{1+\sqrt{5}}{2} \approx 1.618$$



Since $q_k \to \infty$, the error term approaches zero. The order of convergence (speed) of the secant method is therefore **superlinear: $1.618$**.



## 3. Practical Comparison (Example 2.25)

The notes test the secant method on the equation $e^x - 2\cos x = 0$ with $TOL = 10^{-5}$, starting from the points $p_0=0$ and $p_1=1$:

* **Result:** The secant method needed **7 steps** to reach the stopping criterion, and the function value became of the order of $10^{-11}$ at the end.
* **Context with the other methods:**
  * **Newton's method:** Faster (accuracy of $10^{-14}$ in 5 steps) because it uses the exact derivative, not a difference approximation of it.
  * **Bisection / Regula Falsi:** The secant method is significantly faster than these because it takes the shape of the function into account and does not restrict the new point between the endpoints of the current interval.





## 4. Summary: When is it Worth Using?

The secant method is an excellent **compromise solution**. It does not require derivation (unlike Newton's method), but it preserves its almost quadratic, extremely fast convergence (order: $1.618$). If the formula for the derivative is too complicated or cannot be produced, in practice, the secant method is one of the most popular choices for solving nonlinear equations.
