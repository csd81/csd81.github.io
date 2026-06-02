## 2.3. Bisection Method

In this and the next several sections we study the numerical solution of the scalar nonlinear algebraic equation $f(x) = 0$. One of the simplest algorithm to approximate its solution is the *bisection method*.

We suppose that $f\colon [a,b] \to \mathbb{R}$ is a continuous function of opposite sign at the end of the interval, i.e., $f(a)f(b) < 0$. Then the Intermediate Value Theorem yields that $f$ has at least one root inside the interval $[a,b]$. We define a sequence of intervals: Let $[a_0, b_0] = [a, b]$, and let $p_0$ be the midpoint of the interval, i.e., $p_0 = (a_0 + b_0)/2$. Then either $f(p_0) = 0$, or one of the intervals $[a_0, p_0]$ or $[p_0, b_0]$ has the property that the function $f$ takes opposite sign at the end points of the interval. If $f$ changes sign on the interval $[a_0, p_0]$, then we define $[a_1, b_1] = [a_0, p_0]$, otherwise let $[a_1, b_1] = [p_0, b_0]$. Continuing this procedure, either after finitely many steps, $p_k$ is a root of the function $f$, or we define an infinite sequence of nested closed bounded intervals, so that a root of $f$ is contained in each of the intervals. We have that the length of the $k$th interval $(b - a)/2^k$ tends to 0 as $k \to \infty$. But then the Cantor's nested intervals theorem shows that there exists $p \in [a, b]$ such that $a_k \to p$ and $b_k \to p$ as $k \to \infty$, and $p$ is the only common point of the intervals. So, in particular, the sequence of midpoints, $p_k$ also tends to $p$.

Suppose, e.g., that $f(a) < 0$ and $f(b) > 0$ (the other case can be treated similarly). Then for all $k$ we have $f(a_k) < 0$ and $f(b_k) > 0$. Since $a_k \to p$ and $b_k \to p$, the continuity of $f$ implies $f(p) \leq 0$ and $f(p) \geq 0$, hence $f(p) = 0$. Since $a_k \leq p \leq b_k$ is satisfied for all $k$, we get $|p_k - p| \leq (b_k - a_k)/2 = (b - a)/2^{k+1}$. We have proved the following result.

**Theorem 2.16.** *Let $f \in C[a,b]$ and $f(a)f(b) < 0$. Then the bisection sequence $p_k$ converges to a root $p$ of the function $f$, and*

$$|p_k - p| \leq \frac{b - a}{2^{k+1}}. \tag{2.4}$$

It follows from the estimate (2.4) that if we predefine a tolerance (error bound) $\varepsilon > 0$, then $p_k$ is an approximation of $p$ within this tolerance if its index $k$ satisfies

$$k \geq \log_2 \frac{b - a}{\varepsilon} - 1. \tag{2.5}$$

**Example 2.17.** Consider the function $f(x) = e^x - 2\cos x$. Then we have $f(0) = -1$ and $f(1) > 0$, therefore $f$ has a root in the interval $[0,1]$, and the bisection method is applicable. (It is easy to check that $f$ is strictly monotone increasing on $[0,1]$, so it has a unique root inside the interval. Table 2.2 contains the result of the bisection method using tolerance value $\varepsilon = 10^{-5}$. Formula (2.5) yields that $k \geq \log_2 10^5 - 1 \approx 15.61$ steps are needed to obtain this accuracy. $\square$

Table 2.2: bisection method, $f(x) = e^x - 2\cos x$, $[0,1]$, $\varepsilon = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 1.00000000 | 0.50000000 | -1.0644e-01 |
| 1  | 0.50000000 | 1.00000000 | 0.75000000 |  6.5362e-01 |
| 2  | 0.50000000 | 0.75000000 | 0.62500000 |  2.4632e-01 |
| 3  | 0.50000000 | 0.62500000 | 0.56250000 |  6.3206e-02 |
| 4  | 0.50000000 | 0.56250000 | 0.53125000 | -2.3292e-02 |
| 5  | 0.53125000 | 0.56250000 | 0.54687500 |  1.9538e-02 |
| 6  | 0.53125000 | 0.54687500 | 0.53906250 | -1.9818e-03 |
| 7  | 0.53906250 | 0.54687500 | 0.54296875 |  8.7517e-03 |
| 8  | 0.53906250 | 0.54296875 | 0.54101563 |  3.3784e-03 |
| 9  | 0.53906250 | 0.54101563 | 0.54003906 |  6.9670e-04 |
| 10 | 0.53906250 | 0.54003906 | 0.53955078 | -6.4294e-04 |
| 11 | 0.53955078 | 0.54003906 | 0.53979492 |  2.6780e-05 |
| 12 | 0.53955078 | 0.53979492 | 0.53967285 | -3.0810e-04 |
| 13 | 0.53967285 | 0.53979492 | 0.53973389 | -1.4067e-04 |
| 14 | 0.53973389 | 0.53979492 | 0.53976440 | -5.6946e-05 |
| 15 | 0.53976440 | 0.53979492 | 0.53977966 | -1.5083e-05 |
| 16 | 0.53977966 | 0.53979492 | 0.53978729 |  5.8483e-06 |

### Exercises

1. Show that the equation
   - (a) $x^3 - 6x - 1 = 0$, $[a,b] = [-1,1]$,
   - (b) $x = e^{-2x}$, $[a,b] = [-1,2]$,
   - (c) $\tan x = x + 1$, $[a,b] = [-1, 1.5]$,
   - (d) $e^{-\sin x} = x^2 - 1$, $[a,b] = [0,2]$

   has a root in the interval $[a,b]$. Using the bisection method give an approximate solution within the tolerance $\varepsilon = 10^{-5}$.
2. Apply the bisection method for the function $f(x) = 1/x$ on the interval $[-0.5, 3]$. What do you observe?

