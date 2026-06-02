# 8.2. Golden Section Search Method

Let $f\colon [a, b] \to \mathbb{R}$ be continuous, and suppose that it is a **unimodal function**, i.e., it has a unique minimum point in the interval $[a, b]$.

![Unimodal functions](fig-unimodal.png)

*Unimodal functions*

---

The **golden section search method** is similar to the bisection method: we define a sequence of nested intervals which all contains the minimum point $p$ of $f$: Let $a < y < x < b$. If $f(x) > f(y)$, then $p \in [a, x]$, otherwise $p \in [y, b]$ holds. Then we repeat the procedure with the intervals $[a, x]$ or $[y, b]$.

![the two cases of the golden section search](fig-golden.png)

---

**Idea 1:** We define the points $x$ and $y$ so that the length of the intervals $[a, x]$ and $[y, b]$ be the same:

$$x - a = b - y = r(b - a)$$

for some $0 < r < 1$. Then

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a). \tag{2}$$

Assumption $x > y$ implies $0.5 < r < 1$.

The next interval is denoted by $[a', b']$, and the new mesh points defined by (2) are $x'$ and $y'$.

**Idea 2:** $r$ is defined so that one of the new mesh points $x'$ and $y'$ should coincide with one of the previous mesh points in order in each steps we should evaluate only one new function value.

---

![mesh points](fig-mesh.png)

Suppose $[a', b'] = [y, b]$. Then we require that $y' = x$.

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

and so

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

which yields the equation

---

$$r^2 + r - 1 = 0. \tag{3}$$

Its positive solution is $r = (\sqrt{5} - 1)/2 \approx 0.61834$. This is the ratio of the **golden section**, since $r$ satisfies equation

$$\frac{r}{1 - r} = \frac{1}{r}.$$

In the case when $[a', b'] = [a, x]$, we select $r$ so that $x' = y$ be satisfied. It can be shown easily that this yields the same equation (3).

> **Theorem.** *Let $f \in C[a, b]$ be unimodal function. Then the golden section search method converges to the minimum point of the function $f$.*

---

Length of the interval after $n$ steps is

$$(b - a)r^n.$$

Hence to reach $\varepsilon$ tolerance in the Golden section search method

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{4}$$

steps are required.

> **Example.** Find the minimum point of the function $f(x) = x^2 - 0.8x + 1$. Its minimum point is $p = 0.4$. We applied Golden section search method with the starting interval $[-1, 2]$ and tolerance $\varepsilon = 0.005$. Formula (4) yields that $n \geq 13.29337586$ steps are needed to reach the required precision. The Golden section search method is formulated so that its output is the midpoint of the last interval, i.e., $0.3995535068$.

---

**Example cont.**

*Golden section search method, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991334565 | 0.3999735572 |

---

