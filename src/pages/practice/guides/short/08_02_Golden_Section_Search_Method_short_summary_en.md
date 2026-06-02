**8.2. Golden Section Search Method** 



## 1. Motivation and the Concept of Unimodal Functions

The chapter deals with single-variable nonlinear optimization (extremum-seeking) methods, where the goal is to determine the minimum of a function over a closed interval.

> **Definition:** Let $f\colon [a, b] \to \mathbb{R}$ be a continuous function. We say that $f$ is **unimodal** on the interval $[a,b]$ if it has exactly one distinct (unique) local minimum ($p$) in this domain.

Every convex function is unimodal, but convexity is not a prerequisite for unimodality. It is essential for the method's operation that the investigated function is unimodal on the initial interval.



## 2. The Principle of Interval Reduction

Similar to the bisection method used in solving equations, this method brackets the minimum $p$ with a sequence of nested, increasingly narrow intervals. However, while 1 internal point (the midpoint) is sufficient per step to enclose the root of an equation, **at least 2 internal points simultaneously** are required to determine the minimum.

Let $a < y < x < b$ be the two internal points of the current interval. We evaluate the function values $f(x)$ and $f(y)$:

* **If $f(x) > f(y)$:** The function's value is greater at $x$, thus the minimum certainly cannot be between $x$ and $b$. The new, narrower interval for the next step will therefore be **$[a, x]$**.
* **If $f(x) \leq f(y)$:** The function is greater than or equal at $y$, thus the minimum certainly cannot fall between $a$ and $y$. The new interval will be **$[y, b]$**.



## 3. Derivation of the Golden Ratio

To maximize the method's efficiency, we introduce two important mathematical conditions (ideas):

1. **Symmetry Condition:** We place the two internal points such that their distance from the two edges is the same with a ratio $0.5 < r < 1$:

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a)$$


2. **Operation Minimization Condition:** We choose the ratio $r$ such that in the next step, the remaining internal point **exactly coincides** with one of the internal points to be generated for the new interval. Thus, **only 1 new function evaluation** needs to be performed per step instead of $2$.

If we assume the new interval became $[a', b'] = [y, b]$, then writing the formula for the new grid points and requiring coincidence ($y' = x$), we arrive at the following algebraic equation:


$$1 - r = \frac{2r - 1}{r} \implies r^2 + r - 1 = 0$$

The relevant (positive) solution to this quadratic equation gives the **golden ratio constant**:


$$r = \frac{\sqrt{5} - 1}{2} \approx 0.6180339887$$

The placement of the points in practice with the fixed constants $r$ and $\tau = 1 - r \approx 0.381966$:

* $y = a + \tau(b - a)$
* $x = a + r(b - a)$



## 4. Convergence and Step Count Estimation

Since in each iteration step the length of the interval narrows exactly by a factor of $r \approx 0.618$, after $n$ steps the length of the interval will be:


$$b_n - a_n = r^n(b_0 - a_0)$$

If we fix a tolerance (error bound) $\varepsilon > 0$ in advance, the required **minimum number of steps ($n$)** can be calculated exactly by taking the logarithm:


$$r^n(b_0 - a_0) < \varepsilon \implies n > \frac{\ln\left(\frac{\varepsilon}{b_0 - a_0}\right)}{\ln r}$$



## 5. Numerical Example

The notes demonstrate the algorithm's execution on the convex (thus unimodal) function $f(x) = x^2 - 0.8x + 1$ over the initial interval $[-1, 2]$, with $\varepsilon = 0.005$.

* Based on the formula, at least $n \geq 14$ steps are required for the expected accuracy.
* At the end of the 14th step, the algorithm returns the midpoint of the last narrow interval obtained as an approximate result:

$$x_{\mathrm{min}} \approx 0.3995535068$$


* This is extremely close to the theoretical, exact minimum of the function ($p = 0.4$).



## 6. Summary

The most important takeaway of the chapter is that **golden section search** is one of the most optimal interval reduction methods. It does not require knowledge of the function's derivatives (unlike the Newton method, for example), relies purely on comparing continuous function values, and thanks to the golden ratio, it guarantees certain and stable convergence with just a single function evaluation per step.
