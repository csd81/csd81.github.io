# Numerical Analysis
## 2 Nonlinear Algebraic Equations and Systems

**Ferenc Hartung**
University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---


## 2.1 Fixed-Point Iteration

A recursion of the form

$$p_{k+1} = h(p_k, p_{k-1}, \ldots, p_{k-m+1}), \qquad k \geq m-1$$

is called *m-order recursion* or *m-step iteration*. An $m$-step iteration is well-defined, if $m$ number of initial values

$$p_0,\ p_1,\ \ldots,\ p_{m-1}$$

are given.

Given a function $g\colon I \to I$, where $I \subset \mathbb{R}$. The recursive sequence

$$p_{k+1} = g(p_k), \qquad k \geq 0,$$

which corresponds to an initial value $p_0 \in I$ is called a **fixed-point iteration**.

### Example

Consider the function $g(x) = -\tfrac{1}{8}x^3 + x + 1$. The corresponding fixed-point iteration is

$$p_{k+1} = -\tfrac{1}{8}p_k^3 + p_k + 1.$$

We compute several terms of the sequence starting from the initial condition $p_0 = 0.4$. From the next table it can be seen that the sequence $p_k$ converges to a limit.

Fixed-point iteration $p_{k+1} = -\tfrac{1}{8}p_k^3 + p_k + 1$

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

The **stair step diagram** or **Cobweb diagram** of the fixed-point iteration shows successive points $(p_k, p_{k+1})$ between the curve $y = g(x)$ and the line $y = x$.

In the previous example we observed that the fixed-point iteration converged to the first coordinate of the intersection of the graphs of the line $y = x$ and the function $y = g(x)$. The first (and also the second) coordinate of this point satisfies the **fixed point equation**

$$g(x) = x.$$

The number $p$ is called the **fixed point** of the function $g$, if it satisfies

$$g(p) = p.$$

### Theorem

Let $g\colon [a,b] \to [a,b]$ (or $\mathbb{R} \to \mathbb{R}$) be a continuous function, $p_0 \in [a,b]$ be fixed, and consider the fixed-point iteration

$$p_{k+1} = g(p_k).$$

If $p_k$ is convergent and $p_k \to p$, then

$$p = g(p).$$

**Proof.** Using the continuity of $g$ and the assumption $p_k \to p$ we get

$$\begin{array}{ccc} p_{k+1} & = & g(p_k) \\ \downarrow & & \downarrow \\ p & = & g(p). \end{array}$$

A fixed-point iteration is not always convergent, or the limit is not necessarily finite.

### Example

Consider the function $g(x) = 2x$. Then $p_{k+1} = g(p_k)$ and the initial value $p_0 = 1$ yield $p_k = 2^k$, which converges to infinity.

### Example

Consider $g(x) = -x$. Then $p_{k+1} = g(p_k)$ and the initial value $p_0 = 1$ yield $p_k = (-1)^k$, which is not convergent.

We will use the short notations:

$$C[a,b] = C([a,b], \mathbb{R}) = \{f\colon [a,b] \to \mathbb{R},\ f\text{ is continuous}\}$$

$$C^1[a,b] = C^1([a,b], \mathbb{R}) = \{f\colon [a,b] \to \mathbb{R},\ f\text{ is continuous differentiable}\}$$

$$C^n[a,b] = C^n([a,b], \mathbb{R}) = \{f\colon [a,b] \to \mathbb{R},\ f\text{ is $n$-times continuously differentiable}\}$$

### Theorem (Lagrange's Mean Value Theorem)

Let $f \in C^1[a,b]$. Then there exists $\xi \in (a,b)$ such that

$$f(b) - f(a) = f'(\xi)(b - a),$$

or equivalently,

$$\frac{f(b) - f(a)}{b - a} = f'(\xi).$$

### Theorem

Let $g\colon [a,b] \to [a,b]$ be continuous. Then $g$ has a fixed point in the interval $[a,b]$. Moreover, if $g$ is differentiable on $(a,b)$, and there exists a constant $0 \leq c < 1$ such that $|g'(x)| \leq c$ for all $x \in (a,b)$, then this fixed point is unique.

**Proof.** (Existence — graphical argument using the box $[a,b] \times [a,b]$ and continuity of $g$.)

**Proof cont.** For the proof of the uniqueness, suppose that $g$ has two fixed points $p$ and $q$. Then it follows from the Lagrange's Mean Value Theorem that there exists a $\xi \in (a,b)$ such that

$$|p - q| = |g(p) - g(q)| = |g'(\xi)||p - q| \leq c|p - q|.$$

But this yields that $p = q$, i.e., the fixed point is unique.

### Theorem (fixed-point theorem)

Let $g\colon [a,b] \to [a,b]$ be continuous, $g$ is differentiable on $(a,b)$, and suppose that there exists a constant $0 \leq c < 1$ such that

$$|g'(x)| \leq c, \qquad x \in (a,b).$$

Let $p_0 \in [a,b]$ arbitrary, and

$$p_{k+1} = g(p_k), \qquad k \geq 0.$$

Then the sequence $p_k$ converges to the unique fixed point $p$ of the function $g$,

$$|p_k - p| \leq c^k |p_0 - p|, \tag{1}$$

and

$$|p_k - p| \leq \frac{c^k}{1 - c}|p_1 - p_0|. \tag{2}$$

**Proof.** We know that $g$ has a unique fixed point $p$. Since $0 \leq c < 1$ by our assumptions, the convergence $p_k \to p$ follows from (1). To show (1), we have from the assumptions and the Lagrange's Mean Value Theorem that

$$|p_k - p| = |g(p_{k-1}) - g(p)| = |g'(\xi)||p_{k-1} - p| \leq c|p_{k-1} - p|.$$

Now mathematical induction gives relation (1) easily.

**Proof cont.** To prove (2), let $m > k$ be arbitrary. Then the triangle inequality, the Mean Value Theorem and our assumptions imply

$$\begin{aligned}
|p_k - p_m| &\leq |p_k - p_{k+1}| + |p_{k+1} - p_{k+2}| + \cdots + |p_{m-1} - p_m| \\
&\leq |g(p_{k-1}) - g(p_k)| + |g(p_k) - g(p_{k+1})| + \cdots + |g(p_{m-2}) - g(p_{m-1})| \\
&\leq c|p_{k-1} - p_k| + c|p_k - p_{k+1}| + \cdots + c|p_{m-2} - p_{m-1}| \\
&\leq (c^k + c^{k+1} + \cdots + c^{m-1})|p_0 - p_1| \\
&= c^k(1 + c + \cdots + c^{m-k-1})|p_1 - p_0| \\
&\leq c^k \sum_{i=0}^{\infty} c^i |p_1 - p_0|.
\end{aligned}$$

Hence

$$|p_k - p_m| \leq \frac{c^k}{1-c}|p_1 - p_0|, \qquad m > k.$$

Keeping $k$ fixed and tending with $m$ to $\infty$, we get (2).

We say that the function $g\colon I \to \mathbb{R}$ is **Lipschitz continuous** on the interval $I$, or other words, it has the **Lipschitz property**, if there exists a constant $c \geq 0$ such that

$$|g(x) - g(y)| \leq c|x - y|, \qquad x, y \in I. \tag{3}$$

The constant $c$ in (3) is called the **Lipschitz constant** of the function $g$.

- $g$ is Lipschitz continuous on $I$ $\implies$ $g$ is continuous on $I$
- $g \in C^1[a,b]$ $\implies$ $g$ is Lipschitz continuous on $[a,b]$

$$|g(x) - g(y)| = |g'(\xi)||x - y| \leq c|x - y|,$$

where $c := \max\{|g'(x)|\colon x \in [a,b]\}$.

- $g$ is piece-wise continuously differentiable $\implies$ $g$ is Lipschitz cont. One example is the function $g(x) = |x|$.

If $g$ is Lipschitz continuous with a Lipschitz constant $0 \leq c < 1$, then $g$ is called a **contraction**.

### Theorem (contraction principle)

Let the function $g\colon [a,b] \to [a,b]$ be a contraction, $p_0 \in [a,b]$ be arbitrary, and $p_{k+1} = g(p_k)$ ($k \geq 0$). Then the sequence $p_k$ converges to the unique fixed point $p$ of the function $g$, and relations (1) and (2) are satisfied.

We say that the iteration

$$p_{k+1} = h(p_k, p_{k-1}, \ldots, p_{k-m+1})$$

**converges locally** to $p$ if there exists a constant $\delta > 0$, such that for every initial value

$$p_0, p_1, \ldots, p_{m-1} \in (p - \delta, p + \delta)$$

the corresponding sequence $p_k$ converges to $p$.

If the iteration $p_k$ converges to $p$ for every initial value, then this iteration method is called **globally convergent**.

### Theorem

Let $g \in C^1[a,b]$, and let $p \in (a,b)$ be a fixed point of $g$. Suppose also that

$$|g'(p)| < 1.$$

Then the fixed-point iteration *converges locally* to $p$, i.e., there exists a $\delta > 0$ such that $p_{k+1} = g(p_k)$ converges to $p$ for all $p_0 \in (p - \delta, p + \delta)$.

Geometrically, the four cases are:
- $0 < g'(p) < 1$: monotone convergence
- $-1 < g'(p) < 0$: oscillating convergence
- $1 < g'(p)$: divergence (away from $p$)
- $g'(p) < -1$: oscillating divergence

---

