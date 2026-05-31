## 8.2. Golden Section Search Method

Let $f\colon [a, b] \to \mathbb{R}$ be continuous, and suppose that it is a *unimodal function*, i.e., it has a unique minimum point in the interval $[a, b]$. This holds if, e.g., the function is convex on $[a, b]$, but it is not necessary (see, e.g. the second and third functions in Figure 8.1). Let $p$ be the (unique) minimum point of $f$.

The *golden section search method* is similar to the bisection method in the sense that we define a sequence of nested intervals which all contains the minimum point $p$ of $f$: Let $a < y < x < b$. If $f(x) > f(y)$, then $p \in [a, x]$, otherwise $p \in [y, b]$ holds. (See Figure 8.2.) Then we repeat the procedure with the interval $[a, x]$ or $[y, b]$.

We define the points $x$ and $y$ so that the length of the intervals $[a, x]$ and $[y, b]$ be the same: $x - a = b - y = r(b - a)$ for some $0 < r < 1$. Then

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a) \tag{8.2}$$

hold. The assumption $x > y$ implies that $0.5 < r < 1$ must be satisfied. We denote the next interval by $[a', b']$. We specify the next mesh points $x'$ and $y'$ by the rule (8.2), and comparing the functions values $f(x')$ and $f(y')$ we determine the next interval. We have not defined the ratio $r$ yet. In case of the golden section search method, $r$ is defined so that one of the new mesh points $x'$ and $y'$ should coincide with one of the previous mesh points in order in each steps we should evaluate only one new function value.

Figure 8.3 demonstrates the situation when in the next step the minimum point is located in the right interval $[y, b]$. Then we require that $y' = x$ be a mesh point in the next step. Then the following relations are satisfied:

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

and so

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

which yields equation

$$r^2 + r - 1 = 0 \tag{8.3}$$

for the ratio $r$. Its positive solution is $r = (\sqrt{5} - 1)/2 \approx 0.61834$. This is the ratio of the *golden section*, since $r$ satisfies the equation

$$\frac{r}{1 - r} = \frac{1}{r}.$$

In the opposite case when the minimum point is located in the interval $[a, x]$, and we select $x'$ and $y'$ so that $x' = y$ be satisfied. It can be shown easily (see Exercise 3) that this yields the same equation (8.3).

---

**Algorithm 8.3. Golden section search method**

```
INPUT:    f(x) - function to minimze
          [a, b] - interval
          ε - tolerance
OUTPUT:   p - approximation of the minimum point

r ← (√5 − 1)/2
x ← a + r(b − a)
y ← a + (1 − r)(b − a)
fx ← f(x)
fy ← f(y)
while (b − a) > ε do
    if fx > fy do
        b ← x
        x ← y
        fx ← fy
        y ← a + (1 − r)(b − a)
        fy ← f(y)
    else do
        a ← y
        y ← x
        fy ← fx
        x ← a + r(b − a)
        fx ← f(x)
    end do
end do
output((a + b)/2)
```

---

The next result can be shown.

**Theorem 8.4.** *Let $f \in C[a, b]$ be a unimodal function. Then the golden section search method converges to the minimum point of the function $f$.*

It is easy to compute that the length of the interval after $n$ steps is $(b - a)r^n$. Hence to reach $\varepsilon$ tolerance in Algorithm 8.3

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{8.4}$$

steps are required.

**Example 8.5.** Find the minimum point of the function $f(x) = x^2 - 0.8x + 1$. It can be easily checked that its minimum point is $p = 0.4$. We applied Algorithm 8.3 with the starting interval $[-1, 2]$ and tolerance $\varepsilon = 0.005$. Formula (8.4) yields that $n \geq 13.29337586$ steps are needed to reach the required precision. The corresponding numerical results can be seen in Table 8.1. Therefore, the minimum point is located in the interval $[0.3977741449, 0.4013328688]$. The Algorithm 8.3 is formulated so that its output is the midpoint of the last interval, i.e., $0.3995535068$. $\quad\square$

**Exercises**

1. Approximate the minimum point of the following functions using the golden section search method on the given interval:

   (a) $f(x) = x^3 - 3x + 1$, $\quad x \in [-1, 2]$, (b) $f(x) = |\cos x|$, $\quad x \in [0, 2]$,

   (c) $f(x) = 1 - 10xe^{-x}$, $\quad x \in [0, 2]$, (d) $f(x) = \cos(x^2 - x)$, $\quad x \in [1, 3]$.

   <details class="reveal-solution"><summary>Show solution</summary>

   **(a) $f(x) = x^3 - 3x + 1$ on $[-1, 2]$.** First find the true minimum: $f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$, and $f''(x) = 6x$, so $f''(1) = 6 > 0$ gives a minimum at $x = 1$ with $f(1) = -1$. Golden section uses $r = (\sqrt5 - 1)/2 \approx 0.618034$. Starting from $a = -1,\ b = 2$: $x = -1 + 0.618(3) = 0.854$, $y = -1 + 0.382(3) = 0.146$, with $f(0.854) = -0.944$, $f(0.146) = 0.562$. Since $f(x) < f(y)$ the minimum is in $[y, b] = [0.146, 2]$; set $a = 0.146$ and reuse $x$ as the new $y$. Continue until the interval is below tolerance. After about 15 iterations $x \approx 1.000$.

   **(b) $f(x) = |\cos x|$ on $[0, 2]$.** This function is NOT unimodal — it has multiple minima ($\cos x = 0$ at $x = \pi/2 \approx 1.57$, where $|\cos x|$ attains its minimum value $0$). Golden section may converge to a local minimum depending on the initial interval.

   **(c) $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$.** $f'(x) = -10e^{-x} + 10xe^{-x} = 10e^{-x}(x - 1) = 0 \Rightarrow x = 1$, and $f''(1) = 10e^{-1} > 0$ gives a minimum at $x = 1$ with $f(1) = 1 - 10/e \approx -2.679$. Golden section converges to $x = 1$.

   **(d) $f(x) = \cos(x^2 - x)$ on $[1, 3]$.** $f'(x) = -\sin(x^2 - x)(2x - 1) = 0$ when $\sin(x^2 - x) = 0$ or $2x - 1 = 0$, i.e. $x^2 - x = n\pi$. There are multiple critical points in $[1, 3]$, so the function is not unimodal.

   </details>

2. Apply the golden section search method for the function $f(x) = -1/x^2$ on the interval $[-1, 1]$. What do you observe?

   <details class="reveal-solution"><summary>Show solution</summary>

   This function is (1) not defined at $x = 0$, (2) not continuous on $[-1, 1]$, and (3) not unimodal (it tends to $-\infty$ as $x \to 0$). Golden section search will fail or produce meaningless results: it may encounter division by zero, converge to a boundary instead of a minimum, or give different answers depending on the initial points. Lesson: always verify the assumptions (continuity, unimodality) before applying an optimization method.

   </details>

---

*Table 8.1: Golden section search method, $f(x) = x^2 - 0.8x + 1$*

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
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991934565 | 0.3999735572 |

3. Prove that if $[a', b'] = [a, x]$ is selected in golden section search then $x' = y$ is satisfied if $r$ is a solution of equation (8.3).

   <details class="reveal-solution"><summary>Show solution</summary>

   After selecting $[a', b'] = [a, x]$ we have $a' = a$ and $b' = x = a + r(b - a)$. The new points are $x' = a' + r(b' - a') = a + r(x - a) = a + r^2(b - a)$ and $y' = a + (1-r)r(b - a)$. We want $x' = y$ where $y = a + (1-r)(b - a)$, i.e. $a + r^2(b - a) = a + (1-r)(b - a)$, hence $r^2 = 1 - r$, that is $r^2 + r - 1 = 0$. Therefore $x' = y$ exactly when $r$ is the golden ratio. $\square$

   </details>

4. Prove Theorem 8.4.

   <details class="reveal-solution"><summary>Show solution</summary>

   **Theorem 8.4:** Golden section search converges to the minimum of a unimodal $f \in C[a,b]$. Let $[a_k, b_k]$ be the interval after $k$ steps. Key properties: (1) $[a_{k+1}, b_{k+1}] \subset [a_k, b_k]$ (nested intervals); (2) $b_k - a_k = r^k(b - a) \to 0$ as $k \to \infty$; (3) the minimum point $p \in [a_k, b_k]$ for all $k$ (by unimodality). By Cantor's Intersection Theorem there is a unique $p^*$ with $a_k \to p^*$ and $b_k \to p^*$. Since $p \in [a_k, b_k]$ for all $k$, $|p - p^*| \le b_k - a_k \to 0$, so $p = p^*$. Hence the method converges to the minimum point $p$. $\square$

   </details>

5. Check formula (8.4).

   <details class="reveal-solution"><summary>Show solution</summary>

   The formula is $n \ge \log(\varepsilon/(b-a)) / \log(r)$. After $n$ steps the interval length is $(b-a)r^n$. We require $(b-a)r^n \le \varepsilon$, i.e. $r^n \le \varepsilon/(b-a)$. Taking logarithms, $n \log(r) \le \log(\varepsilon/(b-a))$. Since $\log(r) < 0$ (because $r < 1$), dividing flips the inequality to give $n \ge \log(\varepsilon/(b-a)) / \log(r)$. $\square$

   </details>
