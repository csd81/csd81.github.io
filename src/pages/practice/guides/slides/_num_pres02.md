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

## 2.2 Stopping Criteria of Iterations

Suppose the sequence $p_k$ tends to the limit $p$. We approximate the limit $p$ by a term of the sequence $p_k$, where $k$ is "large enough". Question: how to determine the number of steps $k$ for which $p_k$ gives us a good approximation of $p$, where $f(p) = 0$.

We predefine three tolerances $\varepsilon_1 > 0$, $\varepsilon_2 > 0$ and $\varepsilon_3 > 0$. We consider the $k$th term $p_k$ as an appropriate approximation of $p$ if

(i) $|p_k - p_{k-1}| < \varepsilon_1$, &nbsp;&nbsp; (ii) $\dfrac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2$, &nbsp;&nbsp; or &nbsp;&nbsp; (iii) $|f(p_k)| < \varepsilon_3$.

Condition (i) is a numerical analogue of the absolute error $|p_k - p|$ of the approximation.
Condition (ii) is the numerical analogue of the relative error $|p_k - p|/|p|$ of the approximation.
Condition (iii) tests whether the function value at $p_k$ is close to 0.

### Example

Consider the sequence

$$p_k = 1 + \tfrac{1}{2} + \cdots + \tfrac{1}{k}.$$

We have $|p_k - p_{k-1}| = \tfrac{1}{k}$, so condition (i) holds if $k$ is large enough. On the other hand, $p_k \to \infty$ as $k \to \infty$.
Similarly,

$$\frac{|p_k - p_{k-1}|}{|p_k|} = \frac{1/k}{1 + \tfrac{1}{2} + \cdots + \tfrac{1}{k}} \leq \frac{1}{k} \to 0, \quad \text{as } k \to \infty,$$

so condition (ii) holds for large $k$, but the sequence is not convergent.

### Example

Consider a function whose graph has a small "valley" where $|f(p_k)|$ is small but $p_k$ is not close to the root $p$. Here condition (iii) holds, but $p_k$ is not close to the root.

In practice we use a *combination* of stopping criteria.

---

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

## 2.4 Method of False Position

**Method of false position (Regula Falsi):** Let $f\colon [a,b] \to \mathbb{R}$ be continuous and $f(a)f(b) < 0$. First define $[a_0, b_0] = [a,b]$. At the $k$th step, let $p_k$ be the intersection of the secant line of $f$ corresponding to the points $a_k$ and $b_k$ and the $x$-axis.

Little calculation gives that

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}. \tag{5}$$

The next interval $[a_{k+1}, b_{k+1}]$ will be either $[a_k, p_k]$ or $[p_k, b_k]$ where the function has sign change.

### Algorithm: method of false position

```
INPUT:  f - is a function,
        [a,b] - is an interval, where f(a)f(b) < 0
        TOL - is the tolerance,
        MAXIT - is the maximal iteration step,
OUTPUT: p - is the approximating root.

i ← 1                   (step counter)
q ← a
while i < MAXIT do
    p ← a - f(a)(a - b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
    if f(p)f(b) < 0 do
        a ← p
    else if f(a)f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximal iteration step is exceeded.)
```

### Theorem

Suppose the continuous function $f \in C[a,b]$ is convex or concave on $[a,b]$ and $f(a)f(b) < 0$. Then the method of false position converges to the unique root $p$ of $f$.

**Proof.** Suppose, e.g., that $f$ is convex and $f(a) < 0$, $f(b) > 0$. Then

$$a_{k+1} = p_k \quad \text{and} \quad b_{k+1} = b \quad \text{for all } k.$$

Since the sequence $p_k$ is monotone increasing and $p_k \leq b$, it converges to a limit $p$, where $a < p \leq b$.

**Proof cont.** Since $f(p_k) < 0$, we get $f(p) \leq 0$. Taking the limit as $k \to \infty$ in

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}$$

we obtain

$$p = p - f(p)\frac{p - b}{f(p) - f(b)},$$

which implies that $f(p) = 0$. The other cases can be argued similarly.

### Example

Solve $e^x - 2\cos x = 0$ using the method of false position. As before, we use the interval $[0,1]$ and $TOL = 10^{-5}$. We can observe that for this equation the method of false position converges much faster than the bisection method.

Method of false position, $f(x) = e^x - 2\cos x$, $[0,1]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967399 | -3.0499e-04 |
| 6 | 0.53967399 | 1.00000000 | 0.53975970 | -6.9856e-05 |
| 7 | 0.53975970 | 1.00000000 | 0.53977933 | -1.5999e-05 |
| 8 | 0.53977933 | 1.00000000 | 0.53978383 | -3.6640e-06 |

### Example

We apply the method of false position for the same equation, but using initial interval $[0,4]$.

Method of false position, $f(x) = e^x - 2\cos x$, $[0,4]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 4.00000000 | 0.07092205 | -9.2224e-01 |
| 1  | 0.07092205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2  | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3  | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4  | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

Note, the bisection method on $[0,4]$ has this accuracy in 18 steps.

---

## 2.5 Newton's Method

We recall Taylor's Theorem from calculus.

### Theorem (Taylor's Theorem)

Let $f \in C^{n+1}[a,b]$, and let $x_0 \in (a,b)$. Then for every $x \in (a,b)$, $x \neq x_0$ there exists

$$\xi = \xi(x) \in \langle x, x_0 \rangle = \bigl(\min\{x, x_0\}, \max\{x, x_0\}\bigr)$$

such that

$$f(x) = T_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}, \qquad x \in [a,b],$$

where

$$T_n(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.$$

Here our goal is to find the solution of the scalar equation

$$f(x) = 0.$$

Fix $p_0$, and consider the first-order Taylor approximation of $f$ at $p_0$:

$$f(p_0) + f'(p_0)(x - p_0) = 0.$$

Its solution is

$$x = p_0 - \frac{f(p_0)}{f'(p_0)},$$

assuming $f'(p_0) \neq 0$. We define the recursive sequence

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}. \tag{6}$$

The iterative method (6) is called **Newton–Raphson method** or shortly **Newton's method**.

### Example

Solve $e^x - 2\cos x = 0$ using Newton's method. We observe that the sequence converges very fast to the root of the function.

Newton's method, $f(x) = e^x - 2\cos x$, $p_0 = 0.1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 |  7.5291e-01 |
| 2 | 0.5678850726 |  7.8450e-02 |
| 3 | 0.5402639121 |  1.3139e-03 |
| 4 | 0.5397853041 |  3.9302e-07 |
| 5 | 0.5397851608 |  3.5207e-14 |

The Newton's method is a one-step iteration with the function

$$g(x) := x - \frac{f(x)}{f'(x)}. \tag{7}$$

Computing the derivative of $g$ we get

$$g'(x) = 1 - \frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2} = \frac{f(x)f''(x)}{(f'(x))^2}. \tag{8}$$

Let $p$ be a root $f$ satisfying $f'(p) \neq 0$. Then

$$g'(p) = 0,$$

so the local version of the fixed point theorem yields immediately the following result.

### Theorem

Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the Newton's method converges locally to $p$.

### Example

Consider $f(x) = 0.5 \arctan x$. Its only root is $p = 0$. We have $f'(0) = 0.5$, so the Newton's method converges locally to $p = 0$, i.e., if $p_0$ is close enough to 0, then the Newton-iteration converges to 0.
It is possible to check that there exists $p^* \approx 1.3918$ such that for $p_0 = p^*$ the sequence is $p^*, -p^*, p^*, -p^*, \ldots$, i.e., it is periodic. Moreover, for $|p_0| < p^*$ the sequence $p_n \to 0$, and for $|p_0| > p^*$ the sequence $|p_n| \to \infty$.

Newton's method, $f(x) = 0.5\arctan x$, $p_0 = 1.4$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0  |  1.4000000e+00 |  0.4752734 |
| 1  | -1.4136186e+00 | -0.4775591 |
| 2  |  1.4501293e+00 |  0.4835443 |
| 3  | -1.5506260e+00 | -0.4990071 |
| 4  |  1.8470541e+00 |  0.5372889 |
| 5  | -2.8935624e+00 | -0.6190257 |
| 6  |  8.7103258e+00 |  0.7282453 |
| 7  | -1.0324977e+02 | -0.7805557 |
| 8  |  1.6540564e+04 |  0.7853679 |
| 9  | -4.2972148e+08 | -0.7853982 |
| 10 |  2.9006412e+17 |  0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 |  2.7436939e+70 |  0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 |  2.1963537e+282 |  0.7853982 |

The Newton's Method is fast, but it requires the computation of $f'(x)$. It is problematic if
- the formula of $f$ is long, then the formula of $f'$ can be very long,
- we do not have a formula for $f$, but we can evaluate $f(x)$ with a good precision.

---

## 2.6 Secant Method

Let $p_0$ and $p_1$ be two different initial values of the sequence. Consider the secant line of $f$ corresponding to the points $p_0$ and $p_1$, i.e., the line which connects the points $(p_0, f(p_0))$ and $(p_1, f(p_1))$. Its equation is

$$y = f(p_1) + \frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1).$$

The secant line intersects the $x$-axis at

$$x = p_1 - \frac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1).$$

We define the sequence $p_k$ by the recursion

$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k). \tag{9}$$

This is a two-step iteration, which defines the **secant method**.

### Example

Solve $e^x - 2\cos x = 0$ using the secant method. We observe that the secant method converges to its limit slower than the Newton's method.

secant method, $f(x) = e^x - 2\cos x$, $p_0 = 0$, $p_1 = 1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 |  1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 |  1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 |  6.0793e-11 |

### Theorem

Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the secant method converges locally to $p$.

---

## 2.7 Order of Convergence

Let $p_k$ be a convergent sequence with limit $p$. We say that the **order of convergence** of the sequence $p_k$ is $\alpha$ if $\alpha \geq 1$ and there exists a constant $c \geq 0$ such that

$$|p_{k+1} - p| \leq c |p_k - p|^\alpha \quad \text{for all } k \geq 0, \tag{10}$$

and if $\alpha = 1$, then we also assume that $c < 1$. More precise to say that the order of convergence is *at least* $\alpha$. An equivalent form of (10) is

$$\frac{|p_{k+1} - p|}{|p_k - p|^\alpha} \leq c, \qquad k \geq 0.$$

If we want to emphasize that $p_k$ satisfies (10) with some $\alpha$, but it does not satisfy it with any exponent bigger than $\alpha$, then we say that the order of convergence is *exactly* $\alpha$.

If the order of convergence of a sequence is $\alpha = 1$, then we say that the convergence is **linear**, and if $\alpha = 2$, then we say that the convergence is **quadratic**.

Suppose $p_k$ converges to $p$ linearly. Then

$$|p_k - p| \leq c |p_{k-1} - p| \leq c^2 |p_{k-2} - p| \leq \cdots \leq c^k |p_0 - p|.$$

For some cases, it is not easy to show a linear convergence of a numerical method using the definition (10). So we extend the previous definition so that, if a sequence satisfies relation

$$|p_k - p| \leq c^k |p_0 - p|.$$

with a constant $0 \leq c < 1$, then we also say that the **convergence is linear**.

Suppose $p_k \to p$ with order $\alpha$. If the finite limit

$$\lambda = \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\alpha} \tag{11}$$

exists, then we call $\lambda$ as the **asymptotic error constant**.

If the limit (11) exists and it is finite, then $p_k$ is convergent and its order of convergence is $\alpha$. If $p_k$ converges linearly and its asymptotic error constant is 0, then we speak about **superlinear** convergence.

### Theorem

Suppose $p_k$ converges to $p$ order $\alpha$ with the asymptotic error constant $\lambda \neq 0$. Then

(i) $\displaystyle \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\beta} = 0$ for all $\beta < \alpha$, and

(ii) $\displaystyle \lim_{k \to \infty} \frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \infty$ for all $\beta > \alpha$.

**Proof.** The statements follow from relation

$$\frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \frac{|p_{k+1} - p|}{|p_k - p|^\alpha} \cdot \frac{1}{|p_k - p|^{\beta - \alpha}}.$$

Therefore, if a sequence $p_k$ converges to $p$ of order $\alpha$, and the asymptotic error constant $\lambda \neq 0$, then the order of convergence is exactly $\alpha$.

### Example

Consider again the example studied using the Newton's iteration. We have listed in the last three columns the numerical values of the formula $|p_{k+1} - p|/|p_k - p|^\alpha$ for $\alpha = 1, 2$ and 3 using the value $p = 0.5397851608092811$.

Order of convergence of the Newton iteration, $f(x) = e^x - 2\cos x$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ | $\alpha = 3$ |
|---|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |             |             |             |
| 1 | 1.0000000000 |  1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 |  2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 |  1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 |  3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 |  2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

### Theorem

Suppose a sequence $p_k$ satisfies inequality (10) with some $c \geq 0$ and $\alpha > 1$. Then $p_k$ converges locally to $p$, and for every $k$

$$|p_k - p| \leq c^{\frac{\alpha^k - 1}{\alpha - 1}} |p_0 - p|^{\alpha^k}. \tag{12}$$

**Proof.**

$$\begin{aligned}
|p_k - p| &\leq c|p_{k-1} - p|^\alpha \leq c\bigl(c|p_{k-2} - p|^\alpha\bigr)^\alpha = c^{1+\alpha}|p_{k-2} - p|^{\alpha^2} \\
&\leq c^{1+\alpha+\alpha^2}|p_{k-3} - p|^{\alpha^3} \leq \cdots \leq c^{1+\alpha+\alpha^2+\cdots+\alpha^{k-1}}|p_0 - p|^{\alpha^k},
\end{aligned}$$

which yields (12). Then it implies

$$|p_k - p| \leq c^{\frac{1}{1-\alpha}}\Bigl(c^{\frac{1}{\alpha-1}}|p_0 - p|\Bigr)^{\alpha^k}.$$

Hence if $p_0$ is such that $c^{\frac{1}{\alpha-1}}|p_0 - p| < 1$, then $p_k \to p$, i.e., $p_k$ converges locally to $p$.

### Example

Suppose $p_k \to p$ and $q_k \to q$ linearly and quadratically, respectively, with $c = 1/2$. Moreover, we suppose $|p_0 - p| < 1$ and $|q_0 - q| < 1$. Then the definition of the order of convergence yields $|p_k - p| \leq (1/2)^k$ and $|q_k - q| \leq (1/2)^{2^k - 1}$. In the next table we listed these error bounds for $k = 1, 2, \ldots, 5$. We can see that the error decreases much faster in the quadratic case.

| $k$ | $(1/2)^k$ | $(1/2)^{2^k - 1}$ |
|---|---|---|
| 1 | $5.0000 \cdot 10^{-1}$ | $5.0000 \cdot 10^{-1}$ |
| 2 | $2.5000 \cdot 10^{-1}$ | $1.2500 \cdot 10^{-1}$ |
| 3 | $1.2500 \cdot 10^{-1}$ | $7.8125 \cdot 10^{-3}$ |
| 4 | $6.2500 \cdot 10^{-2}$ | $3.0518 \cdot 10^{-5}$ |
| 5 | $3.1250 \cdot 10^{-2}$ | $4.6566 \cdot 10^{-10}$ |
| 6 | $1.5625 \cdot 10^{-2}$ | $1.0842 \cdot 10^{-19}$ |

### Theorem

Let $g \in C^m[a,b]$, $p \in (a,b)$ and $p = g(p)$. Consider the fixed-point iteration $p_{k+1} = g(p_k)$.

(i) If $|g'(p)| < 1$, then the fixed-point iteration converges locally and linearly to $p$.

(ii) If $g'(p) = g''(p) = \cdots = g^{(m-1)}(p) = 0$, then the fixed-point iteration converges locally to $p$ of order $m$ with the asymptotic error constant $g^{(m)}(p)/m!$.

**Proof.** For the proof of statement (ii), we consider the Taylor approximation of $g$ around $p$ with order $(m-1)$:

$$g(p_k) = g(p) + g'(p)(p_k - p) + \cdots + \frac{g^{(m-1)}(p)}{(m-1)!}(p_k - p)^{m-1} + \frac{g^{(m)}(\xi_k)}{m!}(p_k - p)^m,$$

where $\xi_k \in \langle p_k, p \rangle$. Using that the first $m-1$ derivatives are equal to 0 at $p$, $g(p) = p$ and $g(p_k) = p_{k+1}$, we get

$$|p_{k+1} - p| = \frac{|g^{(m)}(\xi_k)|}{m!} |p_k - p|^m \leq c |p_k - p|^m. \tag{13}$$

We used that $g \in C^m[a,b]$, i.e., $g^{(m)}$ is continuous, and therefore, it is bounded in a neighborhood of $p$. The limit $\xi_k \to p$ follows from relation $|\xi_k - p| \leq |p_k - p|$. Therefore the asymptotic error constant is

$$\lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^m} = \lim_{k \to \infty} \frac{g^{(m)}(\xi_k)}{m!} = \frac{g^{(m)}(p)}{m!}.$$

We say that $p \in (a,b)$ is a **root of multiplicity** $m$ of $f \in C[a,b]$ if there exists a function $q \in C[a,b]$ such that $q(p) \neq 0$ and

$$f(x) = (x - p)^m q(x), \qquad x \in (a,b). \tag{14}$$

### Theorem

Let $f \in C^m[a,b]$, $p \in (a,b)$.

(i) Let $p$ be a root of multiplicity $m$ of $f$, and the function $q$ in (14) is $m$ times differentiable. Then

$$f(p) = f'(p) = f''(p) = \cdots = f^{(m-1)}(p) = 0, \quad \text{and} \quad f^{(m)}(p) \neq 0. \tag{15}$$

(ii) If (15) holds, then $p$ is a root of multiplicity $m$ of $f$.

**Proof.**
(i) Consider $f(x) = (x-p)^m q(x)$. Then

$$f'(x) = m(x-p)^{m-1}q(x) + (x-p)^m q'(x),$$

so $f'(p) = 0$ if $m > 1$. We get

$$f''(x) = m(m-1)(x-p)^{m-2}q(x) + m(x-p)^{m-1}q'(x) + m(x-p)^{m-1}q'(x) + (x-p)^m q''(x),$$

so $f''(p) = 0$ if $m > 2$.

(ii) Using Taylor's Theorem we get

$$f(x) = f(p) + f'(p)(x-p) + \frac{f''(p)}{2}(x-p)^2 + \cdots + \frac{f^{(m-1)}(p)}{(m-1)!}(x-p)^{m-1} + \frac{f^{(m)}(\xi(x))}{m!}(x-p)^m = (x-p)^m q(x),$$

where

$$q(x) = \frac{f^{(m)}(\xi(x))}{m!}.$$

### Theorem

Let $f \in C^2[a,b]$.

(i) If $f(p) = 0$ and $f'(p) \neq 0$, then the Newton iteration converges locally to $p$, and the order of convergence is quadratic.

(ii) If $f(x) = (x-p)^m q(x)$, where $q \in C^2[a,b]$, $q(p) \neq 0$, $m > 1$, then the Newton iteration converges locally to $p$, and the order of convergence is linear.

**Proof.** Statement (i) follows form earlier results, since the Newton iteration is a fixed-point iteration with the function $g$ defined in (7), and $g'(p) = 0$ by relation (8).
Since the function

$$g(x) := \begin{cases} x - \dfrac{f(x)}{f'(x)}, & x \neq p \\ p & x = p \end{cases}$$

satisfies

$$g(x) = x - \frac{(x-p)^m q(x)}{m(x-p)^{m-1}q(x) + (x-p)^m q'(x)} = x - \frac{(x-p)q(x)}{mq(x) + (x-p)q'(x)},$$

it is continuously differentiable at $p$, and little calculation yields

$$g'(p) = 1 - \frac{1}{m}.$$

Therefore part (ii) of the last theorem yields that the order of convergence is linear.

### Example

Find the root of

$$f(x) = x^3 + x^2 - 8x - 12$$

by the Newton–Raphson method from the initial value $p_0 = 0$ and using tolerance $10^{-5}$. It is easy to see that $x = -2$ is a double root, and $x = 3$ is a simple root of the polynomial. In the next tables we can see the numerical values of the iteration corresponding to $p_0 = 0$, and corresponding to $p_0 = 2$.

Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$ (with $p_0 = 0$)

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---|---|---|---|---|
| 0 |  0.0000000000 | -1.2000e+01 |             |             |
| 1 | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2 | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3 | -1.8853131347 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
| 4 | -1.9433465541 | -1.5866e-02 | 4.9406e-01 | 4.3086e+00 |
| 5 | -1.9718365260 | -3.9436e-03 | 4.9712e-01 | 8.7747e+00 |
| 6 | -1.9859583260 | -9.8308e-04 | 4.9858e-01 | 1.7703e+01 |
| 7 | -1.9929890302 | -2.4542e-04 | 4.9929e-01 | 3.5558e+01 |
| 8 | -1.9964969780 | -6.1313e-05 | 4.9965e-01 | 7.1267e+01 |
| 9 | -1.9982491032 | -1.5323e-05 | 4.9982e-01 | 1.4268e+02 |
| 10 | -1.9991247058 | -3.8300e-06 | 4.9991e-01 | 2.8552e+02 |
| 11 | -1.9995623908 | -9.5743e-07 | 4.9996e-01 | 5.7119e+02 |
| 12 | -1.9997812050 | -2.3935e-07 | 4.9998e-01 | 1.1425e+03 |
| 13 | -1.9998906049 | -5.9835e-08 | 4.9999e-01 | 2.2852e+03 |
| 14 | -1.9999453030 | -1.4959e-08 | 4.9999e-01 | 4.5705e+03 |
| 15 | -1.9999726517 | -3.7396e-09 | 5.0000e-01 | 9.1412e+03 |
| 16 | -1.9999863259 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$ (with $p_0 = 2$)

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 |            |            |
| 1 | 4.0000000000 |  3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 |  6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 |  5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 |  4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 |  3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 |  1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

### Theorem

If $p$ is a simple root of $f$, then the secant method converges locally to $p$ of order $\alpha = (1 + \sqrt{5})/2 \approx 1.618$.

Let $f \in C^3[a,b]$, suppose $p \in (a,b)$ is a multiple root of $f$. More precisely, we assume that $f(x) = (x-p)^m q(x)$ with $m > 1$ and $q \in C^3[a,b]$. We define the function

$$\mu(x) = \begin{cases} \dfrac{f(x)}{f'(x)}, & \text{if } x \neq p, \\ 0, & \text{if } x = p. \end{cases}$$

We can see that

$$\mu(x) = \frac{(x-p)q(x)}{mq(x) + (x-p)q'(x)},$$

and hence $\mu \in C^2[a,b]$. Moreover, $\mu'(p) = \tfrac{1}{m}$, and so $p$ is only a simple root of $\mu$. Therefore if we use the Newton iteration for the function $\mu$ instead of $f$, we get a quadratic convergence. Then we get the sequence

$$p_{k+1} = p_k - \frac{\mu(p_k)}{\mu'(p_k)} = p_k - \frac{f(p_k)f'(p_k)}{(f'(p_k))^2 - f(p_k)f''(p_k)}. \tag{16}$$

---

## 2.8 Review of Multivariable Calculus

Let $E \subset \mathbb{R}^n$, and consider the function $f\colon E \to \mathbb{R}$ of $n$ variables. The partial derivative of the function

$$f = f(\mathbf{x}) = f(x_1, \ldots, x_n)$$

with respect to the variable $x_i$ is denoted by $\dfrac{\partial f}{\partial x_i}$.

If all the partial derivatives of $f$ up to order $m$ exist and are continuous, then we say that $f$ is $m$ times continuously partially differentiable, and we will denote it by $f \in C^m$.

If $f \in C^1$, then $f'$ denotes the **gradient vector** or shortly, the **gradient** of $f$:

$$f'(\mathbf{x}) := \left(\frac{\partial f(\mathbf{x})}{\partial x_1}, \ldots, \frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

If $f \in C^2$, then $f''(\mathbf{x})$ is the so-called **Hessian matrix** or shortly the **Hessian**: defined by

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1 \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n}(\mathbf{x}) \\
\dfrac{\partial^2 f}{\partial x_2 \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n}(\mathbf{x}) \\
\vdots & \vdots & & \vdots \\
\dfrac{\partial^2 f}{\partial x_n \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

### Theorem (Taylor's formula)

Let $E \subset \mathbb{R}^n$ be an open set, $f\colon E \to \mathbb{R}$, $f \in C^{m+1}$, and let $\mathbf{a} \in E$. Then for every $\mathbf{x} \in E$ there exists a $\xi = \xi(\mathbf{x}) \in E$ such that $\xi = \mathbf{x} + t(\mathbf{a} - \mathbf{x})$ for some $t \in (0,1)$ (i.e., $\xi$ lies on the line segment connecting $\mathbf{a}$ and $\mathbf{x}$), and

$$\begin{aligned}
&f(x_1, \ldots, x_n) \\
&= f(a_1, \ldots, a_n) + \sum_{i=1}^n \frac{\partial f(a_1, \ldots, a_n)}{\partial x_i}(x_i - a_i) \\
&\quad + \frac{1}{2} \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 f(a_1, \ldots, a_n)}{\partial x_i \partial x_j}(x_i - a_i)(x_j - a_j) \\
&\quad + \cdots + \frac{1}{m!}\sum_{i_1=1}^n \cdots \sum_{i_m=1}^n \frac{\partial^m f(a_1, \ldots, a_n)}{\partial x_{i_1} \cdots \partial x_{i_m}}(x_{i_1} - a_{i_1})\cdots(x_{i_m} - a_{i_m}) \\
&\quad + \frac{1}{(m+1)!}\sum_{i_1=1}^n \cdots \sum_{i_{m+1}=1}^n \frac{\partial^{m+1} f(\xi_1, \ldots, \xi_n)}{\partial x_{i_1} \cdots \partial x_{i_{m+1}}}(x_{i_1} - a_{i_1})\cdots(x_{i_{m+1}} - a_{i_{m+1}}).
\end{aligned}$$

We can easily check that using the notation of the gradient and the Hessian that for $f \in C^3$ we have the second-order Taylor approximation

$$f(\mathbf{x}) \approx f(\mathbf{a}) + f'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) + \frac{1}{2}(\mathbf{x} - \mathbf{a})^T f''(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

This justifies the notations $f'$ and $f''$ for the gradient and the Hessian.

Let $I \subset \mathbb{R}$, $g\colon I \to \mathbb{R}^n$, and we denote the component functions of $g$ by $g_i$, i.e., we use the notation

$$g(t) = (g_1(t), \ldots, g_n(t))^T.$$

We say that such $g$ is differentiable if all its component functions are differentiable, and its derivative is

$$g'\colon I \to \mathbb{R}^n, \qquad g'(t) := (g_1'(t), \ldots, g_n'(t))^T.$$

We say that $g$ is continuously differentiable if its each component function is continuously differentiable.

### Theorem (chain rule)

Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^1$ and $g\colon \mathbb{R} \to \mathbb{R}^n$ be continuously differentiable. Then the composite function $f \circ g\colon \mathbb{R} \to \mathbb{R}$ is also continuously differentiable, and

$$\frac{d}{dt}f(g(t)) = f'(g(t))^T g'(t).$$

We can get the following generalization of the Lagrange's Mean Value Theorem for multivariable functions from the chain rule.

### Theorem (Lagrange's Mean Value Theorem)

Let $E \subset \mathbb{R}^n$ be an open and convex set, $f\colon E \to \mathbb{R}$ is continuously differentiable with respect to all variables. Then for every $\mathbf{x}, \mathbf{y} \in E$ there exists $\xi \in (0,1)$ such that

$$f(\mathbf{x}) - f(\mathbf{y}) = f'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T (\mathbf{x} - \mathbf{y}).$$

**Proof.** We define the single variable function $g(t) = f(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))$ for $t \in [0,1]$. Using the Lagrange's Mean Value Theorem of single variable functions and the chain rule, we get

$$f(\mathbf{x}) - f(\mathbf{y}) = g(1) - g(0) = g'(\xi)(1 - 0) = f'(\mathbf{x} + \xi(\mathbf{y} - \mathbf{x}))^T(\mathbf{x} - \mathbf{y}).$$

Let $E \subset \mathbb{R}^n$ and $\mathbf{f}\colon E \to \mathbb{R}^n$. The component functions of $\mathbf{f}$ are denoted by $f_i$, i.e.,

$$\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T.$$

We say that $\mathbf{f}$ is $m$ times continuously partially differentiable if its every component function is $m$ times continuously partially differentiable, and it will be denoted by $\mathbf{f} \in C^m$.

The **Jacobian matrix** or shortly, the **Jacobian** of the function $\mathbf{f} \in C^1$ is the $n \times n$ matrix defined by

$$\mathbf{f}'(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_1}{\partial x_n}(\mathbf{x}) \\
\vdots & & \vdots \\
\dfrac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_n}{\partial x_n}(\mathbf{x})
\end{pmatrix}.$$

Let $\mathbf{a} \in \mathbb{R}^n$ be fixed. If we approximate the component functions of $\mathbf{f}$ by its first-order Taylor polynomial around $\mathbf{a}$, then we get

$$\mathbf{f}(\mathbf{x}) = \begin{pmatrix} f_1(\mathbf{x}) \\ \vdots \\ f_n(\mathbf{x}) \end{pmatrix} \approx \begin{pmatrix} f_1(\mathbf{a}) + f_1'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \\ \vdots \\ f_n(\mathbf{a}) + f_n'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \end{pmatrix} = \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

$\mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a})$ is called the **linear approximation** of $\mathbf{f}$ around $\mathbf{a}$.

---

## 2.9 Vector and Matrix Norms and Convergence

We recall the properties of the absolute value of a real number:

1. $|x| \geq 0$, and $|x| = 0$ if and only if $x = 0$;
2. $|cx| = |c||x|$, for all $c, x \in \mathbb{R}$;
3. $|x + y| \leq |x| + |y|$, for all $x, y \in \mathbb{R}$. (triangle inequality)

The absolute value of $x$ gives back the distance of $x$ from the origin. The distance between $x$ and $y$ is given by $|x - y|$.

The components of the vector $\mathbf{x} \in \mathbb{R}^n$ are denoted by

$$\mathbf{x} = (x_1, x_2, \ldots, x_n)^T.$$

### Definition

The function $\|\cdot\|\colon \mathbb{R}^n \to \mathbb{R}$ is called **vector norm** if

1. $\|\mathbf{x}\| \geq 0$ for all $\mathbf{x} \in \mathbb{R}^n$, and $\|\mathbf{x}\| = 0$ if and only if $\mathbf{x} = \mathbf{0}$,
2. $\|c\mathbf{x}\| = |c|\|\mathbf{x}\|$ for all $c \in \mathbb{R}$ and $\mathbf{x} \in \mathbb{R}^n$,
3. (triangle inequality:) $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.

### Theorem

For any vector norm $\|\cdot\|$ it follows that

(i) $\bigl|\|\mathbf{x}\| - \|\mathbf{y}\|\bigr| \leq \|\mathbf{x} - \mathbf{y}\|$,

(ii) $\|\cdot\|$ is a continuous function on $\mathbb{R}^n$.

**Proof.** The triangle inequality yields

$$\|\mathbf{x}\| = \|\mathbf{x} - \mathbf{y} + \mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\| + \|\mathbf{y}\|.$$

Hence we get

$$\|\mathbf{x}\| - \|\mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\|.$$

Similarly, $\|\mathbf{y}\| - \|\mathbf{x}\| \leq \|\mathbf{x} - \mathbf{y}\|$ satisfies too, so part (i) follows. The continuity of $\|\cdot\|$ follows from part (i).

Let $p \geq 1$, and define the so-called **$p$-norm**:

$$\|\mathbf{x}\|_p := \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Clearly, $\|\mathbf{x}\|_p \geq 0$, and $\|\mathbf{x}\|_p = 0$ if and only if $\mathbf{x} = \mathbf{0}$. We have

$$\|c\mathbf{x}\|_p = \left(\sum_{i=1}^n |cx_i|^p\right)^{1/p} = \left(|c|^p \sum_{i=1}^n |x_i|^p\right)^{1/p} = |c|\|\mathbf{x}\|_p.$$

It can be shown that $\|\cdot\|_p$ satisfies the triangle inequality too, i.e., $\|\cdot\|_p$ is a norm for all $p \geq 1$. The norm corresponding to $p = 2$, i.e.,

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$$

is called the **Euclidean norm** or **2-norm**.

Another special case is the **1-norm**:

$$\|\mathbf{x}\|_1 := \sum_{i=1}^n |x_i|.$$

We will also use the following vector norm, the so-called **infinity norm** or **maximum norm**

$$\|\mathbf{x}\|_\infty := \max_{i=1,\ldots,n} |x_i|.$$

We have $\|\mathbf{x}\|_\infty \geq 0$, and $\|\mathbf{x}\|_\infty = 0$ if and only if $\mathbf{x} = \mathbf{0}$.
Consider

$$\|c\mathbf{x}\|_\infty = \max_{i=1,\ldots,n}|cx_i| = \max_{i=1,\ldots,n}|c||x_i| = |c|\max_{i=1,\ldots,n}|x_i| = |c|\|\mathbf{x}\|_\infty.$$

For a fixed $i$ we have

$$|x_i + y_i| \leq |x_i| + |y_i| \leq \max_{i=1,\ldots,n}|x_i| + \max_{i=1,\ldots,n}|y_i| = \|\mathbf{x}\|_\infty + \|\mathbf{y}\|_\infty.$$

Since the right-hand side is independent of $i$, we get

$$\|\mathbf{x} + \mathbf{y}\|_\infty = \max_{i=1,\ldots,n}|x_i + y_i| \leq \|\mathbf{x}\|_\infty + \|\mathbf{y}\|_\infty,$$

hence $\|\cdot\|_\infty$ is a norm.

### Theorem (Cauchy–Bunyakovsky–Schwarz inequality)

For every $x_1, \ldots, x_n, y_1, \ldots, y_n \in \mathbb{R}$ it follows

$$\left(\sum_{i=1}^n x_i y_i\right)^2 \leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2,$$

where equality holds if and only if there exists $\lambda \in \mathbb{R}$ such that $y_i = \lambda x_i$ for every $i = 1, 2, \ldots, n$.

**Proof.** Consider the second-order polynomial

$$p(t) := t^2 \sum_{i=1}^n x_i^2 - 2t \sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2.$$

Then

$$p(t) = \sum_{i=1}^n (tx_i - y_i)^2 \geq 0$$

holds for all $t$, so $p$ may not have two distinct real roots, i.e.,

$$4\left(\sum_{i=1}^n x_i y_i\right)^2 - 4 \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2 \leq 0.$$

This yields the CBS inequality. $p$ has one real root if and only if its discriminant is 0. $p(t) = 0$ holds for some $t = \lambda$ if and only if $y_i = \lambda x_i$ for all $i = 1, 2, \ldots, n$.

Taking a square root for both sides of the Cauchy–Bunyakovsky–Schwarz inequality and using vector notation we get:

### Corollary

For all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ it follows

$$|\mathbf{x}^T \mathbf{y}| \leq \|\mathbf{x}\|_2 \|\mathbf{y}\|_2,$$

where the equality is satisfied if and only if there exists $\lambda \in \mathbb{R}$ such that $\mathbf{y} = \lambda \mathbf{x}$.

Using the Cauchy–Bunyakovsky–Schwarz inequality we get

$$\begin{aligned}
\|\mathbf{x} + \mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i + y_i)^2 \\
&= \sum_{i=1}^n x_i^2 + 2\sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2 + 2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2} + \sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2} + \sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2 + \|\mathbf{y}\|_2)^2,
\end{aligned}$$

which shows that the Euclidean norm satisfies the triangle inequality.

For two-dimensional vectors $\mathbf{x} = (x_1, x_2)$ we identify the point $(x_1, x_2)$ in a coordinate system with a position vector. Then the length of this vector is

$$\|\mathbf{x}\|_2 = \sqrt{x_1^2 + x_2^2}.$$

The distance between the two points $\mathbf{x} = (x_1, x_2)$ and $\mathbf{y} = (y_1, y_2)$ is

$$\|\mathbf{x} - \mathbf{y}\|_2 = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2}.$$

The expression $\|\mathbf{x}\|$ is called the **length** of the vector, which is the distance between $\mathbf{x}$ and $\mathbf{0}$. The **distance** between the vectors $\mathbf{x}$ and $\mathbf{y}$ is defined as the real number

$$\|\mathbf{x} - \mathbf{y}\|.$$

Let $\mathbf{p}^{(k)}$ be a sequence of $n$-dimensional vectors, and let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. We say that the sequence $\mathbf{p}^{(k)}$ **converges** to $\mathbf{p}$ if

$$\lim_{k \to \infty} \|\mathbf{p}^{(k)} - \mathbf{p}\| = 0.$$

### Theorem

Let $|\cdot|$ and $\|\cdot\|$ be two vector norms, and $\mathbf{p}^{(k)}$ be a sequence in $\mathbb{R}^n$. Then $\lim_{k \to \infty}|\mathbf{p}^{(k)} - \mathbf{p}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{p}^{(k)} - \mathbf{p}\| = 0$.

**Proof.** It is enough to show that $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \to 0$, where $\|\cdot\|_1$ is a fixed norm on $\mathbb{R}^n$. It holds if we show that there exist constants $m$ and $M$ such that

$$m\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \leq \|\mathbf{p}^{(k)} - \mathbf{p}\| \leq M\|\mathbf{p}^{(k)} - \mathbf{p}\|_1. \tag{17}$$

Let $E := \{\mathbf{x} \in \mathbb{R}^n\colon \|\mathbf{x}\|_1 = 1\}$. Then $E$ is a bounded and closed subset of $\mathbb{R}^n$, therefore the continuous function $\|\cdot\|$ takes its maximum and minimum on $E$. Let denote them by $M$ and $m$, respectively. Let $\mathbf{x} = (\mathbf{p}^{(k)} - \mathbf{p})/\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. Then $\mathbf{x} \in E$, and hence $m \leq \|\mathbf{x}\| \leq M$, which yields (17) after multiplication by $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$.

### Theorem

Let the $i$th components of the vectors $\mathbf{p}^{(k)}$ and $\mathbf{p}$ denoted by $p_i^{(k)}$ and $p_i$, respectively. Then the sequence $\mathbf{p}^{(k)}$ converges to $\mathbf{p}$ if and only if $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$ as $k \to \infty$.

**Proof.** Applying the last theorem, we have $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if

$$\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 = \sum_{i=1}^n |p_i^{(k)} - p_i| \to 0,$$

which is satisfied exactly when $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$.

The set of $n \times n$-dimensional real matrices is denoted by $\mathbb{R}^{n \times n}$. Let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$.

### Definition

The function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ defined by the formula

$$\|\mathbf{A}\| := \sup_{\mathbf{x} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

is called the **matrix norm** generated by the vector norm $\|\cdot\|$.

Here the sup (supremum) denotes the least upper bound, i.e., the smallest $M$ with the property that

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq M, \qquad \text{for all } \mathbf{x} \neq \mathbf{0}.$$

It is possible to show that in the definition of the matrix norm sup can be replaced by max, i.e., there exists a vector $\mathbf{x}$ such that

$$\|\mathbf{A}\| = \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}.$$

### Theorem

For every $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ it follows

(i) $\|\mathbf{A}\| \geq 0$, and $\|\mathbf{A}\| = 0$ if and only if $\mathbf{A} = \mathbf{0}$,
(ii) $\|c\mathbf{A}\| = |c|\|\mathbf{A}\|$ for all $c \in \mathbb{R}$,
(iii) (triangle inequality:) $\|\mathbf{A} + \mathbf{B}\| \leq \|\mathbf{A}\| + \|\mathbf{B}\|$,
(iv) $\|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\|\|\mathbf{x}\|$, for all $\mathbf{x} \in \mathbb{R}^n$,
(v) $\|\mathbf{A}\mathbf{B}\| \leq \|\mathbf{A}\|\|\mathbf{B}\|$,
(vi) $\|\mathbf{A}\| = \sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\| = 1\}$.

**Proof.**
(ii) $\|c\mathbf{A}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|c\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{|c|\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = |c|\sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = |c|\|\mathbf{A}\|$
(iii) $\|\mathbf{A} + \mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|(\mathbf{A} + \mathbf{B})\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|\mathbf{A}\mathbf{x}\| + \|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| + \|\mathbf{B}\|$

**Proof cont.** Part (iv) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{y} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|} = \|\mathbf{A}\|.$$

Using (iv) we get

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|,$$

hence we get (v) from

$$\|\mathbf{A}\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|.$$

Finally, (vi) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|.$$

### Theorem

Let $|\cdot|$ and $\|\cdot\|$ be two vector norms and we consider the corresponding matrix norms. Let $\mathbf{A}^{(k)}$ be a sequence in $\mathbb{R}^{n \times n}$. Then $\lim_{k \to \infty}|\mathbf{A}^{(k)} - \mathbf{A}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$.

**Proof.** We show that there exist nonnegative constants $l$ and $L$ such that

$$l|\mathbf{B}| \leq \|\mathbf{B}\| \leq L|\mathbf{B}|, \qquad \mathbf{B} \in \mathbb{R}^{n \times n}.$$

We know that there exist positive constants $m$ and $M$ such that

$$m|\mathbf{x}| \leq \|\mathbf{x}\| \leq M|\mathbf{x}|, \qquad \mathbf{x} \in \mathbb{R}^n.$$

Then

$$\frac{m}{M}|\mathbf{B}| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|} \leq \|\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|} = \frac{M}{m}|\mathbf{B}|.$$

### Theorem

Let $\mathbf{A} = (a_{ij}) \in \mathbb{R}^{n \times n}$. Then the matrix norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms satisfy

$$\|\mathbf{A}\|_1 = \max_{j=1,\ldots,n} \sum_{i=1}^n |a_{ij}|,$$

and

$$\|\mathbf{A}\|_\infty = \max_{i=1,\ldots,n} \sum_{j=1}^n |a_{ij}|.$$

**Proof.** Using the definition of the $\|\cdot\|_1$ vector norm and the triangle inequality we get

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n \left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n \sum_{j=1}^n |a_{ij} x_j| \\
&= \sum_{j=1}^n |x_j| \sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \|\mathbf{x}\|_1,
\end{aligned}$$

**Proof cont.** hence

$$\|\mathbf{A}\|_1 \leq \max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|.$$

Suppose

$$\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}| = \sum_{i=1}^n |a_{ik}|.$$

We get the statement by multiplying $\mathbf{A}$ and $\mathbf{e}^{(k)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$, where $e_i^{(k)} = 0$ if $i \neq k$ and $e_k^{(k)} = 1$. Indeed,

$$\mathbf{A}\mathbf{e}^{(k)} = (a_{1k}, a_{2k}, \ldots, a_{nk})^T,$$

therefore

$$\|\mathbf{A}\mathbf{e}^{(k)}\|_1 = \sum_{i=1}^n |a_{ik}|.$$

### Theorem

1. If the vector sequence $\mathbf{p}^{(k)}$ is convergent, then its limit is unique.
2. If $\mathbf{p}^{(k)} \to \mathbf{p}$ and $\mathbf{q}^{(k)} \to \mathbf{q}$, $\alpha, \beta \in \mathbb{R}$, then the sequence $\alpha \mathbf{p}^{(k)} + \beta \mathbf{q}^{(k)}$ is also convergent, and $\alpha \mathbf{p}^{(k)} + \beta \mathbf{q}^{(k)} \to \alpha \mathbf{p} + \beta \mathbf{q}$.
3. If $c_k \to c$ a real sequence and $\mathbf{p}^{(k)} \to \mathbf{p}$, then $c_k \mathbf{p}^{(k)} \to c\mathbf{p}$.
4. If $\mathbf{p}^{(k)} \to \mathbf{p}$, then $\mathbf{A}\mathbf{p}^{(k)} \to \mathbf{A}\mathbf{p}$ for all $\mathbf{A} \in \mathbb{R}^{n \times n}$.
5. (Cauchy's criterion for convergence) $\mathbf{p}^{(k)}$ is a convergent sequence if and only if it is a Cauchy sequence, i.e., for every $\varepsilon > 0$ there exists a $k_0 > 0$ such that $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| < \varepsilon$ for all $k, m > k_0$.

### Theorem (Lagrange's Mean Value Theorem)

Let $\|\cdot\|$ be a fixed vector norm on $\mathbb{R}^n$, and consider the generated matrix norm. Let $E \subset \mathbb{R}^n$ be an open and convex set, $\mathbf{f}\colon E \to \mathbb{R}^n$ be continuously partially differentiable, $\mathbf{x}, \mathbf{y} \in E$. Then

$$\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\| \leq \max_{t \in [0,1]} \|\mathbf{f}'(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))\| \cdot \|\mathbf{x} - \mathbf{y}\|.$$

**Proof.** We prove the statement only for the Euclidean norm $\|\cdot\| = \|\cdot\|_2$. Clearly, we can assume that $\mathbf{f}(\mathbf{x}) \neq \mathbf{f}(\mathbf{y})$. Let

$$\mathbf{h} := \frac{\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2}.$$

Then $\|\mathbf{h}\|_2 = 1$. Let $\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T$, $\mathbf{h} = (h_1, \ldots, h_n)^T$. We define the real function

$$g(t) := \mathbf{h}^T \mathbf{f}(\mathbf{y} + t(\mathbf{x} - \mathbf{y})) = \sum_{i=1}^n h_i f_i(\mathbf{y} + t(\mathbf{x} - \mathbf{y})).$$

Then, using the Lagrange's Mean Value Theorem for single variable functions and the chain rule, we get

**Proof cont.**

$$\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) &= g(1) - g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T (\mathbf{x} - \mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})
\end{aligned}$$

for some $\xi \in (0,1)$. Therefore the definition of $\mathbf{h}$, the vector form of the Cauchy–Bunyakovsky–Schwarz inequality and $\|\mathbf{h}\|_2 = 1$ yield

$$\begin{aligned}
\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y}) \\
&\leq \|\mathbf{h}\|_2 \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))\|_2 \|\mathbf{x} - \mathbf{y}\|_2.
\end{aligned}$$

---

## 2.10 Fixed-Point Iteration in $n$ dimensions

### Example

Consider the system

$$\begin{aligned}
4x_1 - e^{x_1 x_2} - 3 &= 0 \\
x_1 - x_2^2 - 3x_2 - 1 &= 0.
\end{aligned} \tag{18}$$

It is easy to check that $x_1 = 1$ and $x_2 = 0$ is a solution of the system. We rearrange (18) in the following way. We express

$$\begin{aligned}
x_1 &= \tfrac{1}{4}(e^{x_1 x_2} + 3) \\
x_2 &= \tfrac{1}{3}(x_1 - x_2^2 - 1).
\end{aligned} \tag{19}$$

We can denote the system shorty as $\mathbf{x} = \mathbf{g}(\mathbf{x})$, where $\mathbf{x} = (x_1, x_2)^T$ and

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}. \tag{20}$$

### Example cont.

We define an iteration to approximate the solutions of (19) as in the single variable case for $k = 0, 1, 2, \ldots$ by

$$\begin{aligned}
p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}} + 3) \\
p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)} - (p_2^{(k)})^2 - 1\right).
\end{aligned} \tag{21}$$

Defining the vector sequence

$$\mathbf{p}^{(k)} = (p_1^{(k)}, p_2^{(k)})^T,$$

iteration (21) can be written shortly as

$$\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)}).$$

Fixed-point iteration

| $k$ | $p_1^{(k)}$ | $p_2^{(k)}$ |
|---|---|---|
| 0  | -2.000000000 | -2.000000000 |
| 1  | 14.399537510 | -2.333333333 |
| 2  |  0.750000000 |  2.651697960 |
| 3  |  2.576641266 | -2.427166879 |
| 4  |  0.750480717 | -1.438165931 |
| 5  |  0.834956989 | -0.772613509 |
| 6  |  0.881152644 | -0.253991549 |
| 7  |  0.949867689 | -0.061119687 |
| 8  |  0.985899367 | -0.017955976 |
| 9  |  0.995613247 | -0.004807684 |
| 10 |  0.998086211 | -0.001469956 |
| 11 |  0.999633219 | -0.000398650 |
| 12 |  0.999900394 | -0.000122313 |

Let $E \subset \mathbb{R}^n$, and consider a function $\mathbf{g}\colon E \to \mathbb{R}^n$. We say that a vector $\mathbf{p} \in E$ is a **fixed point** of the function $\mathbf{g}$ if

$$\mathbf{p} = \mathbf{g}(\mathbf{p}).$$

A function $\mathbf{g}\colon E \to \mathbb{R}^n$ is called a **contraction** on the set $E$ using the vector norm $\|\cdot\|$ if there exists a constant $0 \leq c < 1$ such that

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq c\|\mathbf{x} - \mathbf{y}\|$$

for all $\mathbf{x}, \mathbf{y} \in E$.

### Theorem (fixed-point theorem)

Let $E \subset \mathbb{R}^n$ be a closed set, $\mathbf{g}\colon E \to E$, and let $\mathbf{g}$ be a contraction on $E$ using a vector norm $\|\cdot\|$. Then $\mathbf{g}$ has a unique fixed point $\mathbf{p} \in E$, and the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ for all $\mathbf{p}^{(0)} \in E$. The order of convergence is (at least) linear.

**Proof.** First we show that $\mathbf{p}^{(k)}$ is a Cauchy sequence. Let $c$ be the Lipschitz constant of the function $\mathbf{g}$, and let $k > m$.

$$\begin{aligned}
&\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)} + \mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)} + \cdots + \mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&\leq \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}\| + \|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \cdots + \|\mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)}) - \mathbf{g}(\mathbf{p}^{(k-2)})\| + \|\mathbf{g}(\mathbf{p}^{(k-2)}) - \mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad + \cdots + \|\mathbf{g}(\mathbf{p}^{(m)}) - \mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c\bigl(\|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \|\mathbf{p}^{(k-2)} - \mathbf{p}^{(k-3)}\| + \cdots + \|\mathbf{p}^{(m)} - \mathbf{p}^{(m-1)}\|\bigr) \\
&\leq (c^{k-1} + c^{k-2} + \cdots + c^m)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1} + c^{k-m-2} + \cdots + 1)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i \|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\|.
\end{aligned}$$

**Proof cont.** Therefore we get

$$\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \to 0 \qquad \text{as } m \to \infty,$$

hence $\mathbf{p}^{(k)}$ is a Cauchy sequence. We get that $\mathbf{p}^{(k)}$ converges to a vector $\mathbf{p}$. Using the continuity of $\mathbf{g}$ we get

$$\begin{array}{ccc} \mathbf{p}^{(k+1)} & = & \mathbf{g}(\mathbf{p}^{(k)}) \\ \downarrow & & \downarrow \\ \mathbf{p} & = & \mathbf{g}(\mathbf{p}) \end{array}$$

i.e., $\mathbf{p}$ is a fixed-point of $\mathbf{g}$. The order of convergence is at least linear, since

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\| = \|\mathbf{g}(\mathbf{p}^{(k)}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|.$$

**Proof cont.** Suppose that $\mathbf{p}$ and $\bar{\mathbf{p}}$ are both fixed points of $\mathbf{g}$. Using the contraction property of $\mathbf{g}$ we have

$$\|\mathbf{p} - \bar{\mathbf{p}}\| = \|\mathbf{g}(\mathbf{p}) - \mathbf{g}(\bar{\mathbf{p}})\| \leq c\|\mathbf{p} - \bar{\mathbf{p}}\|,$$

and therefore $\mathbf{p} = \bar{\mathbf{p}}$ follows.

### Theorem

Let $E \subset \mathbb{R}^n$ be an open set, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^1$, and let $\mathbf{p}$ be a fixed point of $\mathbf{g}$. If

$$\|\mathbf{g}'(\mathbf{p})\| < 1$$

in a matrix norm generated by a vector norm $\|\cdot\|$, then the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ locally converges to $\mathbf{p}$.

**Proof.** Since $E$ is an open set, there exists a radius $\bar{\delta} > 0$ such that

$$\{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| < \bar{\delta}\} \subset E.$$

Fix a $c$ such that

$$\|\mathbf{g}'(\mathbf{p})\| < c < 1.$$

The function $\mathbf{g}'$ is continuous at $\mathbf{p}$, therefore there exists $0 < \delta \leq \bar{\delta}$ such that

$$\|\mathbf{g}'(\mathbf{x})\| \leq c \qquad \text{for all } \mathbf{x} \in V := \{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| \leq \delta\}.$$

The Lagrange's Mean Value Theorem yields

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq \max_{t \in (0,1)}\|\mathbf{g}'(\mathbf{x} + t(\mathbf{y} - \mathbf{x}))\| \cdot \|\mathbf{x} - \mathbf{y}\| \leq c\|\mathbf{x} - \mathbf{y}\|,$$

i.e., $\mathbf{g}$ is a contraction.

**Proof cont.** Now we show that the function $\mathbf{g}$ maps the set $V$ into itself. Let $\mathbf{x} \in V$. The contraction property of $\mathbf{g}$ implies

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{p}\| = \|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{x} - \mathbf{p}\| < \delta,$$

hence

$$\mathbf{g}(\mathbf{x}) \in V.$$

If we restrict $\mathbf{g}$ to the set $V$, then this function satisfies the conditions of the previous theorem, therefore the fixed-point iteration with initial value from $V$ converges to $\mathbf{p}$. $\square$

### Example

Compute the Jacobian matrix of the function

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}$$

defined by (20):

$$\mathbf{g}'(\mathbf{x}) = \begin{pmatrix} \tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4} x_1 e^{x_1 x_2} \\ \tfrac{1}{3} & -\tfrac{2}{3}x_2 \end{pmatrix}.$$

Its value at the fixed point of $\mathbf{g}$, i.e., at the point $(1, 0)^T$ is

$$\mathbf{g}'(1, 0) = \begin{pmatrix} 0 & \tfrac{1}{4} \\ \tfrac{1}{3} & 0 \end{pmatrix}.$$

Its 1-norm is $\|\mathbf{g}'(1,0)\|_1 = \tfrac{1}{3} < 1$, hence our theorem yields that the fixed-point iteration converges locally to $(1, 0)^T$.

### Theorem

Let $E \subset \mathbb{R}^n$, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^2$, $\mathbf{g}(\mathbf{p}) = \mathbf{p}$, and $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$. Then there exist a $\delta > 0$ such that the fixed-point iteration

$$\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$$

converges to $\mathbf{p}$ if

$$\|\mathbf{p}^{(0)} - \mathbf{p}\|_\infty < \delta.$$

Moreover, there exists a constant $c$ such that for all $k$ it follows

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the iteration locally quadratically converges to $\mathbf{p}$.

**Proof.** By the assumptions, $0 = \|\mathbf{g}'(\mathbf{p})\| < 1$, therefore the fixed-point iteration is locally convergent.
Consider the second-order Taylor approximation of the $i$th component function of $\mathbf{g}$ around $\mathbf{p} = (p_1, \ldots, p_n)^T$:

$$\begin{aligned}
g_i(x_1, \ldots, x_n) &= g_i(p_1, \ldots, p_n) + \sum_{j=1}^n \frac{\partial g_i(p_1, \ldots, p_n)}{\partial x_j}(x_j - p_j) \\
&\quad + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l).
\end{aligned}$$

Applying this relation for $(x_1, \ldots, x_n)^T = (p_1^{(k)}, \ldots, p_n^{(k)})^T$, and using the relations $p_i = g_i(\mathbf{p})$ and $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$, we get

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l).$$

**Proof cont.** Let $M$ be such that $\left|\dfrac{\partial^2 g_i(x_1, \ldots, x_n)}{\partial x_j \partial x_l}\right| \leq M$ for all $i, j, l = 1, \ldots, n$ in a neighborhood of $\mathbf{p}$ which contains all $\mathbf{p}^{(k)}$. The definition of $M$ implies

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2.$$

Since this holds for all $i = 1, \ldots, n$, we get

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the order of convergence is quadratic.

---

## 2.11 Newton's Method in $n$ dimensions

Let $U \subset \mathbb{R}^n$ an open set, $\mathbf{f}\colon U \to \mathbb{R}^n$, consider the nonlinear system

$$\mathbf{f}(\mathbf{x}) = \mathbf{0}.$$

Fix a vector $\mathbf{p}^{(k)} \in U$. As in the scalar case, we approximate $\mathbf{f}$ by its linear part

$$\mathbf{f}(\mathbf{p}^{(k)}) + \mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x} - \mathbf{p}^{(k)}) = \mathbf{0}.$$

Its root is

$$\bar{\mathbf{x}} = \mathbf{p}^{(k)} - (\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)}).$$

Therefore we define the **Newton's method** by the iteration

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{22}$$

### Theorem

Let $\mathbf{f} \in C^2$, $\mathbf{f}(\mathbf{p}) = \mathbf{0}$ and suppose the matrix $\mathbf{f}'(\mathbf{p})$ is invertible. Then the Newton's iteration (22) locally quadratically converges to $\mathbf{p}$.

**Proof.** The Newton's method is a fixed-point iteration with the iteration function

$$\mathbf{g}(\mathbf{x}) = \mathbf{x} - (\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x}).$$

Let $(\mathbf{f}'(\mathbf{x}))^{-1} = (b_{ij}(\mathbf{x}))_{n \times n}$. Then

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l} = \delta_{il} = \begin{cases} 1, & i = l, \\ 0, & i \neq l. \end{cases} \tag{23}$$

Consider the $i$th component of $\mathbf{g}$:

$$g_i(\mathbf{x}) = x_i - \sum_{j=1}^n b_{ij}(\mathbf{x}) f_j(\mathbf{x}).$$

**Proof cont.** Taking its partial derivative with respect to $x_l$ we get

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n \left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x}) + b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

At the point $\mathbf{x} = \mathbf{p}$ we get, using relations $f_j(\mathbf{p}) = 0$ and (23), that

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l} = 0.$$

Therefore

$$\mathbf{g}'(\mathbf{p}) = \mathbf{0},$$

and hence the iteration is locally quadratically convergent.

Applying formula

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)})$$

we need to compute the inverse of a matrix. Instead of it, in practice, we do the following: Introduce the notation

$$\mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)},$$

and rearrange equation into the form

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}).$$

We solve it for $\mathbf{s}^{(k)}$, and let

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}.$$

### Example

Consider the system (18) of the last example. We apply the Newton's method for this system starting from the initial value $(-1.5, -1.5)^T$. The next table lists the numerical result. We observe quick convergence.

Newton's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ |
|---|---|---|
| 0 | $(-1.50000000000, -1.50000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.25000000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(\phantom{-}0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(\phantom{-}0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(\phantom{-}0.99999986610, -0.00000037764)^T$ | 1.313900e-06 |

---

## 2.12 Quasi-Newton Methods, Broyden's Method

We introduce **quasi-Newton methods** which are defined by

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{24}$$

Here the matrix

$$\mathbf{A}^{(k)} \approx \mathbf{f}'(\mathbf{p}^{(k)}).$$

Using different approximations, we get different classes of quasi-Newton methods.

One typical approach is to approximate the Jacobian matrix numerically. Let $\mathbf{e}^{(j)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$ be the $j$th standard unit vector, $h > 0$ a small discretization constant, and define the components of $\mathbf{A}^{(k)}$ by the expressions

$$a_{ij}^{(k)} = \frac{f_i(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) - f_i(\mathbf{p}^{(k)})}{h}, \qquad i, j = 1, \ldots, n. \tag{25}$$

The resulting quasi-Newton method is a straightforward generalization of the secant method for the vector case.

Next we introduce an other popular selection of the matrices $\mathbf{A}^{(k)}$. This method is called **Broyden's method**. This can also be considered as the generalization of the secant method for the vector case.

For scalar equations the secant method replaces the nonlinear equation

$$f(x) = 0$$

by a linear equation

$$f(p_k) + a_k(x - p_k) = 0,$$

where

$$a_k = \frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}.$$

We replace $k$ by $k+1$, and we rewrite the equation, we get that $a_{k+1}$ solves the equation

$$a_{k+1}(p_{k+1} - p_k) = f(p_{k+1}) - f(p_k). \tag{26}$$

We will generalize this formula for the vector case.

Select an initial vector $\mathbf{p}^{(0)}$ and an initial matrix $\mathbf{A}^{(0)}$. For the selection of $\mathbf{A}^{(0)}$ we can use different strategies:
- it is possible to use the exact value $\mathbf{A}^{(0)} = \mathbf{f}'(\mathbf{p}^{(0)})$,
- or using the formula (25) we can compute an approximate derivative matrix at $\mathbf{p}^{(0)}$,
- or just select any invertible matrix $\mathbf{A}^{(0)}$.

Suppose $\mathbf{p}^{(k)}$ and $\mathbf{A}^{(k)}$ are already defined. Then we define $\mathbf{p}^{(k+1)}$ by formula

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}).$$

Similarly to equation (26), we require that $\mathbf{A}^{(k+1)}$ satisfies the so-called **secant equation**

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) = \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}). \tag{27}$$

We introduce the following notations

$$\mathbf{y}^{(k)} := \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}) \qquad \text{and} \qquad \mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}.$$

Using this notations, equations (24) and (27) are equivalent to

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}), \tag{28}$$

and

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}, \tag{29}$$

respectively. First we solve (28) for $\mathbf{s}^{(k)}$ (assuming that $\mathbf{A}^{(k)}$ is invertible), so the problem is reduced to the selection of a matrix $\mathbf{A}^{(k+1)}$ which satisfies equation (29). Unfortunately, this equation does not determine the matrix $\mathbf{A}^{(k+1)}$ uniquely, since this equation is equivalent to $n$ number of scalar equations, but $\mathbf{A}^{(k+1)}$ is determined by $n^2$ number of components.

Equation (29) requires that the linear operator $\mathbf{A}^{(k+1)}$ is defined on the one dimensional space spanned by the vector $\mathbf{s}^{(k)}$. But in the $n-1$ directions orthogonal to the vector $\mathbf{s}^{(k)}$ the linear map is undetermined. Since in the $k+1$-th step we "do not have new information" about the next linear operator, i.e., the next matrix, we define $\mathbf{A}^{(k+1)}$ so that its effect on this subspace be the same as the matrix $\mathbf{A}^{(k)}$. Therefore, in addition to equation (29), we require

$$\mathbf{A}^{(k+1)}\mathbf{z} = \mathbf{A}^{(k)}\mathbf{z}, \qquad \text{for all } \mathbf{z} \perp \mathbf{s}^{(k)}. \tag{30}$$

Equations (29) and (30) together determine the matrix $\mathbf{A}^{(k+1)}$ uniquely. It can be checked easily that the matrix

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{31}$$

satisfies both (29) and (30).

To prove (29) consider:

$$\begin{aligned}
\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} &= \left(\mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)\mathbf{s}^{(k)} \\
&= \mathbf{A}^{(k)}\mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})\bigl((\mathbf{s}^{(k)})^T\mathbf{s}^{(k)}\bigr)}{\|\mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{y}^{(k)}
\end{aligned}$$

To prove (30) consider for $\mathbf{z} \perp \mathbf{s}^{(k)}$:

$$\begin{aligned}
\mathbf{A}^{(k+1)}\mathbf{z} &= \left(\mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)\mathbf{z} \\
&= \mathbf{A}^{(k)}\mathbf{z} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})\bigl((\mathbf{s}^{(k)})^T\mathbf{z}\bigr)}{\|\mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{A}^{(k)}\mathbf{z}
\end{aligned}$$

The recursion (24) requires the computation of $(\mathbf{A}^{(k)})^{-1}$. The next result is an efficient way to compute it.

### Theorem (Sherman–Morrison–Woodbury)

Let $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, $\mathbf{u}, \mathbf{v} \neq \mathbf{0}$ and $\mathbf{A} \in \mathbb{R}^{n \times n}$ be invertible. Then the matrix $\mathbf{A} + \mathbf{u}\mathbf{v}^T$ is invertible if and only if $1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u} \neq 0$, and then

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)^{-1} = \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}}{1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}}$$

holds.

**Proof.** Let $\gamma \in \mathbb{R}$, and consider

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}.$$

Since $\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}$ is a scalar, we can rewrite the above relation as

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + (1 - \gamma - \gamma \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1},$$

which proves the statement.

A little computation and our Theorem give from (31)

$$\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1 + (\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{\bigl((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)} - \mathbf{s}^{(k)}\bigr)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}.
\end{aligned} \tag{32}$$

Using iteration (32), if $(\mathbf{A}^{(k)})^{-1}$ is known, then only matrix multiplication is needed to compute $(\mathbf{A}^{(k+1)})^{-1}$, so $n^2$ number of arithmetic operation is enough to generate the next matrix. On the other hand, the matrix inversion needs $n^3$ number of operation, so here we have an efficient computational method.

It can be shown that the Broyden's method is locally convergent to a root $\mathbf{p}$ of $\mathbf{f}$ if $\mathbf{A}^{(0)}$ is close enough to $\mathbf{f}'(\mathbf{p})$ and the order of convergence is **superlinear**, i.e.,

$$\lim_{k \to \infty} \frac{\|\mathbf{p}^{(k+1)} - \mathbf{p}\|}{\|\mathbf{p}^{(k)} - \mathbf{p}\|} = 0.$$

### Example

Consider again the system (18), and solve it using Broyden's method with $h = 0.001$ and $TOL = 10^{-5}$. The numerical result is shown in the next table. The last column shows that the speed of the convergence is superlinear.

Broyden's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_\infty}$ |
|---|---|---|---|
| 0  | $(-1.5000000000, -1.5000000000)^T$  | 2.5000000000 |             |
| 1  | $(-1.2490215360, -0.5215363883)^T$  | 2.2490215360 | 0.8996086144 |
| 2  | $(-0.4968297655, -0.9366983828)^T$  | 1.4968297656 | 0.6655471022 |
| 3  | $(-0.3045368940, -0.3621731989)^T$  | 1.3045368940 | 0.8715332389 |
| 4  | $(\phantom{-}0.5414891937, -0.0587408442)^T$ | 0.4585108063 | 0.3514740046 |
| 5  | $(\phantom{-}0.9527177435, -0.0515250779)^T$ | 0.0515250779 | 0.1123748387 |
| 6  | $(\phantom{-}1.0003263340, \phantom{-}0.0319681269)^T$ | 0.0319681269 | 0.6204382061 |
| 7  | $(\phantom{-}1.0000551000, -0.0040567750)^T$ | 0.0040567750 | 0.1269006155 |
| 8  | $(\phantom{-}1.0000069210, -0.0000347010)^T$ | 0.0000347010 | 0.0085538489 |
| 9  | $(\phantom{-}1.0000001100, \phantom{-}0.0000012682)^T$ | 0.0000012682 | 0.0365458110 |
| 10 | $(\phantom{-}1.0000000050, \phantom{-}0.0000000576)^T$ | 0.0000000576 | 0.0453865979 |
