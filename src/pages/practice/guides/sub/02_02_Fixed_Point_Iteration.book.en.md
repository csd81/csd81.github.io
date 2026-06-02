## 2.2. Fixed-Point Iteration

Many numerical methods generate an infinite sequence whose limit gives the exact solution of the investigated problem. The sequence is frequently defined by a *recursion* or *iteration*. A recursion of the form $p_{k+1} = h(p_k, p_{k-1}, \ldots, p_{k-m+1})$ ($k \geq m - 1$) is called *$m$-order recursion* or *$m$-step iteration*. An $m$-step iteration is well-defined if $m$ number of initial values $p_0, p_1, \ldots, p_{m-1}$ are given.

In this section we study the one-step iteration, the so-called *fixed-point iteration*. Given a function $g\colon I \to \mathbb{R}$, where $I \subset \mathbb{R}$. The recursive sequence $p_{k+1} = g(p_k)$ which corresponds to an initial value $p_0 \in I$ is called a *fixed-point iteration*.

**Example 2.10.** Consider the function $g(x) = -\tfrac{1}{8}x^3 + x + 1$. In Table 2.1 we computed the first few terms of the fixed-point iteration starting from the value $p_0 = 0.4$. We illustrate the sequence in Figure 2.1. Such picture is called *stair step diagram* or *Cobweb diagram*. From the starting point $(p_0, 0)$ we draw a vertical line segment to the graph of $g$. The second coordinate of the intersection gives $p_1$. From the point $(p_0, p_1)$ we draw a horizontal line segment to the point $(p_1, p_1)$ on the line $y = x$. Now we get the value $p_2 = g(p_1)$ as the second coordinate of the intersection of the vertical line starting from this point and the graph of $g$. Continuing this procedure we get the figure displayed in Figure 2.1. The line segments spiral and get closer and closer to the intersection of the graphs of the line $y = x$ and the function $g$. The coordinates of the intersection is $(2,2)$. From Table 2.1 it can be seen that the sequence $p_k$ converges to 2. $\square$

Table 2.1: Fixed-point iteration, $g(x) = -\tfrac{1}{8}x^3 + x + 1$

| $k$ | $p_k$ |
|---|---|
| 0 | 0.40000000 |
| 1 | 1.39200000 |
| 2 | 2.05484646 |
| 3 | 1.97030004 |
| 4 | 2.01419169 |
| 5 | 1.99275275 |
| 6 | 2.00358428 |
| 7 | 1.99819822 |
| 8 | 2.00089846 |
| 9 | 1.99955017 |
| 10 | 2.00022477 |
| 11 | 1.99988758 |
| 12 | 2.00005620 |
| 13 | 1.99997190 |
| 14 | 2.00001405 |
| 15 | 1.99999297 |

In the previous example we observed that the fixed-point iteration converged to the first coordinate of the intersection of the graphs of the line $y = x$ and the function $y = g(x)$. The first (and also the second) coordinate of this point satisfies the equation $g(x) = x$. The number $p$ is called the *fixed point* of the function $g$ if it satisfies

$$g(p) = p.$$

Using this terminology in the previous example the fixed-point iteration converged to the fixed point of the function $g$. The next result shows that this is true for all convergent fixed-point iterations if the function $g$ is continuous.

**Theorem 2.11.** *Let $g\colon [a,b] \to [a,b]$ (or $\mathbb{R} \to \mathbb{R}$) be a continuous function, $p_0 \in [a,b]$ be fixed, and consider the fixed-point iteration $p_{k+1} = g(p_k)$. If $p_k$ is convergent and $p_k \to p$, then $p = g(p)$.*

**Proof.** Since $p_{k+1} = g(p_k)$ and $p_{k+1} \to p$ by the assumptions, the continuity of $g$ yields $g(p_k) \to g(p)$ as $k \to \infty$, hence the statement follows. $\square$

A fixed-point iteration is not always convergent, or the limit is not necessary finite. To see that it is enough to consider the function $g(x) = 2x$ and the initial value $p_0 = 1$. Then $p_k = 2^k$, and it converges to infinity. And if we consider $g(x) = -x$ and $p_0 = 1$, then the corresponding fixed-point sequence is $p_k = (-1)^k$, which is not convergent.

The next theorem gives sufficient conditions for the existence and uniqueness of the fixed point.

**Theorem 2.12.** *Let $g\colon [a,b] \to [a,b]$ be continuous. Then $g$ has a fixed point in the interval $[a,b]$. Moreover, if $g$ is differentiable on $(a,b)$, and there exists a constant $0 \leq c < 1$ such that $|g'(x)| \leq c$ for all $x \in (a,b)$, then this fixed point is unique.*

**Proof.** Consider the function $f(x) = g(x) - x$. If $f(a) = 0$ or $f(b) = 0$, then $a$ or $b$ is a fixed point of $g$. Otherwise, $f(a) > 0$ and $f(b) < 0$. But then the continuity of $f$ and the Intermediate Value Theorem imply that there exists a $p \in (a,b)$, such that $f(p) = 0$, i.e., $p = g(p)$.

For the proof of the uniqueness, suppose that $g$ has two fixed points $p$ and $q$. Then it follows from the Lagrange's Mean Value Theorem that there exists a $\xi \in (a,b)$ such that

$$|p - q| = |g(p) - g(q)| = |g'(\xi)||p - q| \leq c|p - q|.$$

But this yields that $p = q$, i.e., the fixed point is unique. $\square$

**Theorem 2.13 (fixed-point theorem).** *Let $g\colon [a,b] \to [a,b]$ be continuous, $g$ is differentiable on $(a,b)$, and suppose that there exists a constant $0 \leq c < 1$ such that $|g'(x)| \leq c$ for all $x \in (a,b)$. Let $p_0 \in [a,b]$ arbitrary, and $p_{k+1} = g(p_k)$ ($k \geq 0$). Then the sequence $p_k$ converges to the unique fixed point $p$ of the function $g$,*

$$|p_k - p| \leq c^k |p_0 - p|, \tag{2.1}$$

*and*

$$|p_k - p| \leq \frac{c^k}{1 - c}|p_1 - p_0|. \tag{2.2}$$

**Proof.** Theorem 2.12 implies that $g$ has a unique fixed point $p$. Since $0 \leq c < 1$ by our assumptions, the convergence $p_k \to p$ follows from (2.1). To show (2.1), we have from the assumptions and the Lagrange's Mean Value Theorem that

$$|p_k - p| = |g(p_{k-1}) - g(p)| = |g'(\xi)||p_{k-1} - p| \leq c|p_{k-1} - p|.$$

Now mathematical induction gives relation (2.1) easily.

To prove (2.2), let $m > k$ be arbitrary. Then the triangle inequality, the Mean Value Theorem and our assumptions imply

$$\begin{aligned}
|p_k - p_m| &\leq |p_k - p_{k+1}| + |p_{k+1} - p_{k+2}| + \cdots + |p_{m-1} - p_m| \\
&\leq |g(p_{k-1}) - g(p_k)| + |g(p_k) - g(p_{k+1})| + \cdots + |g(p_{m-2}) - g(p_{m-1})| \\
&\leq c|p_{k-1} - p_k| + c|p_k - p_{k+1}| + \cdots + c|p_{m-2} - p_{m-1}| \\
&\leq (c^k + c^{k+1} + \cdots + c^{m-1})|p_0 - p_1| \\
&= c^k(1 + c + \cdots + c^{m-k-1})|p_1 - p_0| \\
&\leq c^k \sum_{i=0}^\infty c^i |p_1 - p_0|.
\end{aligned}$$

Hence $|p_k - p_m| \leq \tfrac{c^k}{1-c}|p_1 - p_0|$ holds for all $m > k$. Keeping $k$ fixed and tending with $m$ to $\infty$, we get (2.2). $\square$

We remark that in the proof of the previous two theorems, the differentiability of $g$ and the boundedness of the derivative is used only to get the estimate

$$|g(x) - g(y)| \leq c|x - y|. \tag{2.3}$$

We say that the function $g\colon I \to \mathbb{R}$ is *Lipschitz continuous* on the interval $I$, or in other words, it has the *Lipschitz property*, if there exists a constant $c \geq 0$ such that (2.3) holds for all $x, y \in I$. The constant $c$ in (2.3) is called the *Lipschitz constant* of the function $g$.

Clearly, if $g$ is Lipschitz continuous on $I$, then it is also continuous on $I$. From the Lagrange's Mean Value Theorem we get that if $g \in C^1[a,b]$, then $g$ is Lipschitz continuous on $[a,b]$ with the Lipschitz constant $c := \max\{|g'(x)|\colon x \in [a,b]\}$. $g$ is also Lipschitz continuous if it is only piecewise continuously differentiable. One example is the function $g(x) = |x|$. If $g$ is Lipschitz continuous with a Lipschitz constant $0 \leq c < 1$, then $g$ is called a *contraction*. Theorem 2.13 can be stated in the following more general form.

**Theorem 2.14 (contraction principle).** *Let the function $g\colon [a,b] \to [a,b]$ be a contraction, $p_0 \in [a,b]$ be arbitrary, and $p_{k+1} = g(p_k)$ ($k \geq 0$). Then the sequence $p_k$ converges to the unique fixed point $p$ of the function $g$, and relations (2.1) and (2.2) are satisfied.*

In numerics we frequently encounter with iterative methods which converge assuming the initial value is close enough to the exact solution of the problem, i.e., to the limit of the sequence. We introduce the following notion. We say that the iteration $p_{k+1} = h(p_k, p_{k-1}, \ldots, p_{k-m+1})$ *converges locally* to $p$ if there exists a constant $\delta > 0$, such that for every initial value $p_0, p_1, \ldots, p_{m-1} \in (p - \delta, p + \delta)$ the corresponding sequence $p_k$ converges to $p$. If the iteration $p_k$ converges to $p$ for every initial value, then this iteration method is called *globally convergent*.

**Theorem 2.15.** *Let $g \in C^1[a,b]$, and let $p \in (a,b)$ be a fixed point of $g$. Suppose also that $|g'(p)| < 1$. Then the fixed-point iteration converges locally to $p$, i.e., there exists a $\delta > 0$ such that $p_{k+1} = g(p_k)$ converges to $p$ for all $p_0 \in (p - \delta, p + \delta)$.*

**Proof.** Since $g'$ is continuous and $|g'(p)| < 1$, there exists a $\delta > 0$ such that $[p - \delta, p + \delta] \subset (a,b)$ and $|g'(x)| < 1$ for $x \in [p - \delta, p + \delta]$. Let $c := \max\{|g'(x)|\colon x \in [p - \delta, p + \delta]\}$. Then $0 \leq c < 1$.

We show that $g$ maps the interval $[p - \delta, p + \delta]$ into itself. Let $p_0 \in [p - \delta, p + \delta]$. The Lagrange's Mean Value Theorem and the definition of $c$ yield

$$|g(p_0) - p| = |g(p_0) - g(p)| \leq c|p_0 - p| < |p_0 - p| < \delta,$$

i.e., $g(p_0) \in [p - \delta, p + \delta]$. Therefore, Theorem 2.13 can be applied for the function $g$ restricting it to the interval $[p - \delta, p + \delta]$, which proves the result. $\square$

### Exercises

1. Let $g(x) = mx$, where $m \in \mathbb{R}$. Draw the stair step diagram of the fixed-point iteration corresponding to $g$ and to any non-zero initial value for the parameter values $m = 0.5, 1, 1.5, -0.5, -1, -1.5$.
2. Rewrite the following equation as a fixed-point equation, and approximate its solution by a fixed-point iteration with a 4-digit accuracy.
   - (a) $(x - 2)^3 = x + 1$,
   - (b) $\tfrac{\cos x}{x} = 2$,
   - (c) $x^3 + x - 1 = 0$,
   - (d) $2x \sin x = 4 - 3x$.
3. Consider the equation $x^3 + x^2 + 3x - 5 = 0$. Show that the left hand side is monotone increasing, and has a root on the interval $[0,2]$. (It is easy to see that the exact root is $x = 1$.) Verify that the equation is equivalent to all of the following fixed-point problems.
   - (a) $x = x^3 + x^2 + 4x - 5$,
   - (b) $x = \sqrt[3]{5 - x^2 - 3x}$,
   - (c) $x = \tfrac{5}{x^2 + x + 3}$,
   - (d) $x = \tfrac{5 - x^3}{x + 3}$,
   - (e) $x = \tfrac{2x^3 + x^2 + 5}{3x^2 + 2x + 3}$,
   - (f) $x = \tfrac{5 + 7x - x^2 - x^3}{10}$.

   Compute the first several terms of the associated fixed-point iteration using the starting value $p_0 = 0.5$, and determine if we get a convergent sequence from this starting value. Compare the speed of the convergence of the sequences.
4. Prove that the recursion $p_k = \tfrac{1}{2}p_{k-1} + \tfrac{1}{p_{k-1}}$ converges to $\sqrt{2}$, if $p_0 > \sqrt{2}$. What do we get if $0 < p_0 < \sqrt{2}$, or if $p_0 < 0$?
5. Prove that the sequence $p_k = \tfrac{1}{2}p_{k-1} + \tfrac{A}{2p_{k-1}}$ converges to $\sqrt{A}$, if $p_0 > 0$. What happens if $p_0 < 0$?
6. Let $g \in C^1(a,b)$, and let $p \in (a,b)$ be a fixed point of $g$, and $|g'(p)| > 1$. Show that the fixed-point iteration does not converge to $p$, if $p_0 \neq p$.
7. Consider $g(x) = \sqrt{1 + x^2}$. Show that $|g'(x)| < 1$ for all $x \in \mathbb{R}$, but the fixed-point does not converge for any starting value $p_0$.
8. Let $f\colon [a,b] \to \mathbb{R}$ be continuous, and let $a = x_0 < x_1 < \cdots < x_n = b$ be mesh points such that $f$ is linear on each interval $[x_i, x_{i+1}]$ ($i = 0, \ldots, n-1$). Show that $f$ is Lipschitz continuous.

