## 6.2. Divided Differences

Given a function $f \colon [a,b] \to \mathbb{R}$ and pairwise different mesh points $x_i \in [a,b]$ $(i = 0, \ldots, n)$. Then the *zeroth divided difference* of the function $f$ at the point $x_0$ is defined by $f[x_0] := f(x_0)$. The *first divided difference* of the function $f$ at the points $x_0, x_1$ is the number

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0},$$

(i.e., $f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}$). In general, the *$n$th divided difference* of the function $f$ relative to the points $x_0, x_1, \ldots, x_n$ is defined by

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0}.$$

We note that we have not assumed the mesh points are ordered increasingly.

**Theorem 6.10.** *Let $x_i$ $(i = 0, 1, \ldots, n)$ be pairwise different mesh points. Then*

$$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)}.$$

**Proof.** We prove the statement using mathematical induction with respect to $n$. For $n = 0$ the statement is obvious. (In this case in the denominator we have the "empty product", which, by definition, equals to 1.) Suppose the statement holds for $n$, and consider the $(n+1)$-st divided difference $f[x_0, x_1, \ldots, x_{n+1}]$. The definition of the divided difference, the inductive hypothesis and some calculations yield

$$\begin{aligned}
f[x_0, x_1, \ldots, x_{n+1}] &= \frac{f[x_1, x_2, \ldots, x_{n+1}] - f[x_0, x_1, \ldots, x_n]}{x_{n+1} - x_0} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \sum_{i=1}^{n+1} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})} \\
&\qquad - \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \Bigg\} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \frac{f(x_{n+1})}{(x_{n+1} - x_1) \cdots (x_{n+1} - x_n)} - \frac{f(x_0)}{(x_0 - x_1) \cdots (x_0 - x_n)} \\
&\qquad + \sum_{i=1}^{n} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \\
&\qquad \cdot \left( \frac{1}{x_i - x_{n+1}} - \frac{1}{x_i - x_0} \right) \Bigg\} \\
&= \sum_{i=0}^{n+1} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})},
\end{aligned}$$

which proves the statement. $\square$

The previous result has some immediate consequences.

**Corollary 6.11.** *The divided differences are independent of the order of the mesh points.*

**Corollary 6.12.** *If the function $f$ is continuous, then the divided differences depend continuously on the mesh points.*

Suppose $f$ is differentiable. Then the function $x_1 \mapsto f[x_0, x_1]$ is continuous for $x_1 \neq x_0$. Now compute the limit $\lim_{x_1 \to x_0} f[x_0, x_1]$. Using the definition of the first divided difference and the differentiability of the function we get

$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Therefore, we define the first divided difference relative to equal mesh points by

$$f[x_0, x_0] := f'(x_0).$$

With this definition the function $x_1 \mapsto f[x_0, x_1]$ is extended continuously for $x_1 = x_0$. Higher order divided differences with equal mesh points will be defined in Exercises 6 and 7 of the next section.

### Exercises

1. Compute the following divided differences:

   (a) $f[x_0, x_1, x_2, x_3]$, where $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, where $x_i = 0.2i$, $f(x) = \sin x$,

   (c) $f[x_0, x_0]$, where $x_0 = 0$, $f(x) = \sin x$.

2. Let $f \in C^1[a,b]$, and $x_0, x_1 \in (a, b)$, $x_0 \neq x_1$. Show that there exists $\xi \in \langle x_0, x_1 \rangle$ such that
   $$f[x_0, x_1] = f'(\xi).$$

3. Let $x_0 < x_1 < x_2 < x_3$ and
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Show that
   $$a_0 = P[x_0], \quad a_1 = P[x_0, x_1], \quad a_2 = P[x_0, x_1, x_2], \quad \text{and} \quad a_3 = P[x_0, x_1, x_2, x_3].$$

