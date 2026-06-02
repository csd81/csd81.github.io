## 2.3 Bisection Method

We introduce the open interval spanned by $\alpha$ and $\beta$

$$\langle \alpha, \beta \rangle := \bigl(\min\{\alpha, \beta\}, \max\{\alpha, \beta\}\bigr).$$

We recall the so-called Intermediate Value Theorem, which states that a continuous function takes any value in between two function values.

### Theorem (Intermediate Value Theorem)

Let $f \in C[a,b]$, $f(a) \neq f(b)$, and let $d \in \langle f(a), f(b) \rangle$. Then there exists $c \in (a,b)$ such that $f(c) = d$.

First we study the **bisection method** to solve the scalar nonlinear equation

$$f(x) = 0.$$

We suppose that $f\colon [a,b] \to \mathbb{R}$ is a continuous function with opposite sign at the end of the interval, i.e.,

$$f(a)f(b) < 0.$$

Then the Intermediate Value Theorem yields that $f$ has at least one root inside the interval $[a,b]$.

We define a sequence of intervals: Let

$$[a_0, b_0] = [a, b],$$

and let $p_0$ be the midpoint of the interval, i.e.,

$$p_0 = \frac{a_0 + b_0}{2}.$$

Then either $f(p_0) = 0$, or one of the intervals $[a_0, p_0]$ or $[p_0, b_0]$ has the opposite sign property. If $f$ changes sign on the interval $[a_0, p_0]$, then we define

$$[a_1, b_1] = [a_0, p_0],$$

otherwise let

$$[a_1, b_1] = [p_0, b_0].$$

Continuing this procedure, either after finitely many steps, $p_k$ is a root of the function $f$, or we define an infinite sequence of nested closed bounded intervals $[a_k, b_k]$, so that a root of $f$ is contained in each of the intervals.

We have that the length of the $k$th interval

$$b_k - a_k = \frac{b - a}{2^k} \to 0 \qquad \text{as } k \to \infty.$$

Then the Cantor's nested intervals theorem shows that there exists $p \in [a,b]$ such that

$$a_k \to p \quad \text{and} \quad b_k \to p \qquad \text{as } k \to \infty,$$

and $p$ is the only common point of the intervals. So, in particular, the sequence of midpoints

$$p_k \to p.$$

Suppose, e.g., that

$$f(a) > 0 \quad \text{and} \quad f(b) < 0.$$

Then for all $k$

$$f(a_k) > 0 \quad \text{and} \quad f(b_k) < 0.$$

Since

$$a_k \to p \quad \text{and} \quad b_k \to p,$$

the continuity of $f$ implies

$$f(p) \geq 0 \quad \text{and} \quad f(p) \leq 0,$$

hence $f(p) = 0$. Since $a_k \leq p \leq b_k$ is satisfied for all $k$, and the midpoint $p_k$ lies between $a_k$ and $b_k$, we get

$$|p_k - p| \leq \frac{b_k - a_k}{2} = \frac{b - a}{2^{k+1}}.$$

### Theorem

Let $f \in C[a,b]$ and $f(a)f(b) < 0$. Then the bisection sequence $p_k$ converges to a root $p$ of the function $f$, and

$$|p_k - p| \leq \frac{b - a}{2^{k+1}}. \tag{4}$$

It follows from the estimate (4) that if we predefine a tolerance (error bound) $\varepsilon > 0$, then

$$|p_k - p| \leq \frac{b - a}{2^{k+1}} < \varepsilon$$

holds if $k$ satisfies

$$k \geq \log_2 \frac{b - a}{\varepsilon} - 1.$$

### Example

Consider the function

$$f(x) = e^x - 2\cos x.$$

Then we have

$$f(0) = -1 \quad \text{and} \quad f(1) > 0,$$

therefore $f$ has a root in the interval $[0,1]$, and the bisection method is applicable. (It is easy to check that $f$ is strictly monotone increasing on $[0,1]$, so it has a unique root inside the interval.) The next table contains the result of the bisection method using tolerance value $\varepsilon = 10^{-5}$. We have that $k \geq \log_2 10^5 - 1 \approx 15.61$ steps are needed to obtain this accuracy.

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 1.00000000 | 0.50000000 | -1.0644e-01 |
| 1  | 0.50000000 | 1.00000000 | 0.75000000 |  6.5362e-01 |
| 2  | 0.50000000 | 0.75000000 | 0.62500000 |  2.4632e-01 |
| 3  | 0.50000000 | 0.62500000 | 0.56250000 |  6.3206e-02 |
| 4  | 0.50000000 | 0.56250000 | 0.53125000 | -2.3292e-02 |
| 5  | 0.53125000 | 0.56250000 | 0.54687500 |  1.9538e-02 |
| 6  | 0.53125000 | 0.54687500 | 0.53906250 | -1.9181e-03 |
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

---

