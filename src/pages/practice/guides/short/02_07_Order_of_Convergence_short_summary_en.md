**2.7. Order of Convergence** 

## 1. Definition and Significance of the Order of Convergence

Different numerical methods approach the root of functions at different speeds. To exactly characterize the speed of convergence mathematically, we introduce the concept of the order of convergence.

> **Definition:** Let $p_k$ be a sequence converging to $p$. The order of convergence of the sequence is **$\alpha$** ($\alpha \ge 1$), if there exists a constant $c \ge 0$ such that:
> 
> $$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{for all } k\geq 0,$$
> 
> 
> 
> where for $\alpha=1$ (linear case) we require that $c<1$.

In practice, the exponent $\alpha$ determines to what extent the error of the previous step ($|p_k - p|$) dictates the error of the next step ($|p_{k+1} - p|$).

### Notable Convergence Types

* **Linear convergence ($\alpha = 1$):** The error decreases by a constant ratio in every step. The following global estimate can also be verified:

$$|p_k-p|\leq c^k|p_0-p|$$


* **Quadratic convergence ($\alpha = 2$):** The error decreases proportionally to its square, which means that the number of decimal places roughly *doubles* during the iterations in every step.
* **Superlinear convergence:** A transition between the two. If the order of convergence is $\alpha = 1$, but the asymptotic error constant is $0$.



## 2. Asymptotic Error Constant and the Uniqueness of the Order

If the ratio of the error terms of the sequence converges to a limit, then it is called the **asymptotic error constant ($\lambda$)**:


$$\lambda = \lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha}$$

### Theorem 2.28 (Uniqueness of the Order)

If the sequence converges with order $\alpha$ with a constant $\lambda \neq 0$, then:

1. For $\beta < \alpha$, the above ratio approaches $0$.
2. For $\beta > \alpha$, the ratio approaches infinity ($\infty$).

This theorem ensures that the order of convergence of a sequence can be exactly and uniquely determined.

### Illustrative Example: Order of Newton's Method (Example 2.29)

Examining the errors of the Newton iteration performed on the equation $e^x-2\cos x = 0$, the quadratic behavior is clearly visible from the table:

* For $\alpha = 1$, the ratio approaches $0$.
* For $\alpha = 2$, the ratio stabilizes (remains bounded: $\approx 0.625$).
* For $\alpha = 3$, the ratio explosively approaches infinity.
This numerically proves that the order of Newton's method is exactly $2$.



## 3. Order of Fixed-Point Iterations (Theorem 2.32)

If root-finding is reduced to a fixed-point iteration $p_{k+1} = g(p_k)$ (where $p = g(p)$ is the fixed point), the order is directly determined by the **derivatives** of the function $g$ evaluated at the root:

1. If $|g'(p)| < 1$, then the convergence is **linear**.
2. If the first $m-1$ derivatives are all equal to zero at the point $p$ ($g'(p) = g''(p) = \dots = g^{(m-1)}(p) = 0$), but the $m$-th is not ($g^{(m)}(p) \neq 0$), then the method is **locally convergent of order $m$**. The asymptotic error constant is then:

$$\lambda = \frac{g^{(m)}(p)}{m!}$$



> **Corollary:** The order of convergence of a fixed-point iteration for smooth functions is **always an integer** (1, 2, 3, etc.).



## 4. Multiplicity of Roots and Newton's Method (Theorem 2.34)

A number $p$ is called an **$m$-th order multiple root** of the function $f$ if it can be written in the form $f(x) = (x-p)^m q(x)$, where $q(p) \neq 0$.

The speed of Newton's method drastically depends on the multiplicity of the root:

* **Simple root ($m=1$):** If $f(p)=0$ and $f'(p)\neq 0$, Newton's method converges **quadratically** ($\alpha = 2$).
* **Multiple root ($m>1$):** If the root is a multiple root, the derivative of the fixed-point function of Newton's method will be $g'(p) = 1 - \frac{1}{m} \neq 0$. Because of this, the convergence **slows back to linear** ($\alpha = 1$).

*(This is well illustrated by the polynomial of Example 2.35, where the algorithm reached the double root $-2$ only linearly, while the simple root $3$ quadratically).*



## 5. Non-Integer Order of the Secant Method (Theorem 2.36)

While the order of fixed-point iterations is always an integer, this is not necessarily true for multi-step iterations. If $p$ is a **simple root** of the function $f$, the error recurrence of the secant method can be related to the Fibonacci sequence.

Consequently, the order of convergence of the secant method is the golden ratio:


$$\alpha = \frac{1+\sqrt{5}}{2} \approx 1.618$$


This is an extremely important theoretical result: the secant method is faster than linear procedures ($\alpha=1$), but slightly slower than Newton's method ($\alpha=2$).



## 6. Acceleration for Multiple Roots: The Modified Newton's Method

To avoid losing quadratic convergence even for multiple roots, we introduce a modified function $\mu(x)$ instead of $f(x)$:


$$\mu(x) = \frac{f(x)}{f'(x)}$$


Since the multiplicity of $f$ "divides out" during derivation, the point $p$ will **only be a simple root** of the function $\mu(x)$ ($\mu'(p) = \frac{1}{m} \neq 0$).

If we apply Newton's method to this function $\mu(x)$, we again obtain **quadratic** convergence. The resulting modified recurrence formula is:


$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}$$


This procedure successfully accelerates the convergence even when searching for multiple roots.
