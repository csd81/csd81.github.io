## 6.2 Divided Differences

Given a function $f \colon [a,b] \to \mathbb{R}$ and pairwise different mesh points $x_i \in [a,b]$ $(i = 0, \ldots, n)$. The **zeroth divided difference** of $f$ at the point $x_0$ is

$$f[x_0] := f(x_0).$$

The **first divided difference** at $x_0, x_1$ is

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0},$$

i.e.,

$$f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}.$$

In general, the **$n$th divided difference** is defined by

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0}.$$

---

**Theorem.** *Let $x_i$ $(i = 0, 1, \ldots, n)$ be pairwise different mesh points. Then*

$$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)}.$$

**Proof.** For $n = 0$ the statement is obvious. (In this case in the denominator we have the "empty product", which equals 1.) Suppose the statement holds for $n$, and consider $f[x_0, x_1, \ldots, x_{n+1}]$.

**Proof (cont.)**

$$\begin{aligned}
f&[x_0, x_1, \ldots, x_{n+1}] = \frac{f[x_1, x_2, \ldots, x_{n+1}] - f[x_0, x_1, \ldots, x_n]}{x_{n+1} - x_0} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \sum_{i=1}^{n+1} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})} \\
&\qquad - \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \Bigg\} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \frac{f(x_{n+1})}{(x_{n+1} - x_1) \cdots (x_{n+1} - x_n)} - \frac{f(x_0)}{(x_0 - x_1) \cdots (x_0 - x_n)} \\
&\qquad + \sum_{i=1}^{n} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \cdot \left( \frac{1}{x_i - x_{n+1}} - \frac{1}{x_i - x_0} \right) \Bigg\} \\
&= \sum_{i=0}^{n+1} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})}. \qquad \square
\end{aligned}$$

---

**Corollary.** *The divided differences are independent of the order of the mesh points.*

**Corollary.** *If the function $f$ is continuous, then the divided differences depend continuously on the mesh points.*

---

Suppose $f$ is differentiable. Then $x_1 \mapsto f[x_0, x_1]$ is continuous for $x_1 \neq x_0$. Using the definition and the differentiability of $f$,

$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Therefore, we define the first divided difference relative to equal mesh points by

$$f[x_0, x_0] := f'(x_0).$$

With this definition the function $x_1 \mapsto f[x_0, x_1]$ is extended continuously for $x_1 = x_0$.

---

