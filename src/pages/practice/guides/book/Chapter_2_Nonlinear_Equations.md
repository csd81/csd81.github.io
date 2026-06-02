# Chapter 2
# Nonlinear Algebraic Equations and Systems

In this chapter we investigate numerical solution of scalar nonlinear algebraic equations and systems of nonlinear algebraic equations. We discuss the methods of bisection, false position, secant, Newton and quasi-Newton. We introduce the basic theory of fixed points, the notion of the speed of convergence, stopping criteria of iteration methods. We define the notion of vector and matrix norms, and discuss convergence of vector sequences.

## 2.1. Review of Calculus

In this section we summarize some basic results and notions from Calculus which will be needed in our later sections.

$C[a,b]$ will denote the set of continuous real valued functions defined on the interval $[a,b]$. $C^m[a,b]$ will denote the set of continuous real valued functions $f\colon [a,b] \to \mathbb{R}$, which are $m$-times continuously differentiable on the open interval $(a,b)$.

**Theorem 2.1.** *Let $f \in C[a,b]$. Then $f$ has its maximum and minimum on the interval $[a,b]$, i.e., there exist $c, d \in [a,b]$, such that*

$$f(c) = \max_{x \in [a,b]} f(x) \quad \text{and} \quad f(d) = \min_{x \in [a,b]} f(x).$$

The open interval spanned by the numbers $a$ and $b$ is denoted by $\langle a,b\rangle$, i.e., $\langle a,b\rangle := (\min\{a,b\}, \max\{a,b\})$. In general, $\langle a_1, a_2, \ldots, a_n\rangle$ denotes the open interval spanned by the numbers $a_1, a_2, \ldots, a_n$, i.e.,

$$\langle a_1, a_2, \ldots, a_n\rangle := (\min\{a_1, a_2, \ldots, a_n\}, \max\{a_1, a_2, \ldots, a_n\}).$$

The next result, the so-called Intermediate Value Theorem, states that a continuous function takes any value in between two function values.

**Theorem 2.2 (Intermediate Value Theorem).** *Let $f \in C[a,b]$, $f(a) \neq f(b)$, and let $d \in \langle f(a), f(b)\rangle$. Then there exists $c \in (a,b)$ such that $f(c) = d$.*

**Theorem 2.3 (Rolle's Theorem).** *Let $f \in C^1[a,b]$ and $f(a) = f(b)$. Then there exists $\xi \in (a,b)$ such that $f'(\xi) = 0$.*

**Theorem 2.4 (Lagrange's Mean Value Theorem).** *Let $f \in C^1[a,b]$. Then there exists $\xi \in (a,b)$ such that $f(b) - f(a) = f'(\xi)(b - a)$.*

**Theorem 2.5 (Taylor's Theorem).** *Let $f \in C^{n+1}[a,b]$, and let $x_0 \in (a,b)$. Then for every $x \in (a,b)$ there exists $\xi = \xi(x) \in \langle x, x_0\rangle$ such that*

$$f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}.$$

The next result is called the Mean Value Theorem for integrals.

**Theorem 2.6.** *Let $f \in C[a,b]$, $g\colon [a,b] \to \mathbb{R}$ is integrable which has no sign change on $[a,b]$ (i.e., $g(x) \geq 0$ or $g(x) \leq 0$ holds for all $x \in [a,b]$). Then there exists $\xi \in (a,b)$ such that*

$$\int_a^b f(x) g(x)\, dx = f(\xi) \int_a^b g(x)\, dx.$$

The next result is called Cantor's Intersection Theorem.

**Theorem 2.7.** *Let $[a_n, b_n]$ ($n = 1, 2, \ldots$) be a sequence of closed and bounded intervals, for which $[a_{n+1}, b_{n+1}] \subset [a_n, b_n]$ holds for all $n$ and $(b_n - a_n) \to 0$ as $n \to \infty$. Then there exists a $c \in [a_1, b_1]$ such that $a_n \to c$ and $b_n \to c$ as $n \to \infty$.*

**Theorem 2.8.** *A monotone and bounded real sequence has a finite limit.*

We close this section with a result from algebra, which we state in the following form.

**Theorem 2.9 (Fundamental Theorem of Algebra).** *Any $n$th-degree polynomial*

$$p(x) = a_n x^n + \cdots + a_1 x + a_0, \quad a_j \in \mathbb{C}\ (j = 0, \ldots, n),\quad a_n \neq 0$$

*has exactly $n$ complex roots with counting multiplicities.*

We will use the following consequence of the previous result. If a polynomial of the form $p(x) = a_n x^n + \cdots + a_1 x + a_0$ has $n + 1$ different roots, then $p(x) = 0$ for all $x \in \mathbb{R}$.

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

## 2.4. Method of False Position

The advantage of the bisection method is that it is easy to determine the number of steps needed to reach a given accuracy. But its weakness is that it does not take into account the shape of the functions when the next interval is selected in the sequence. This is the idea of the *method of false position* (also called *Regula Falsi*).

We assume the same conditions as in the bisection method. We suppose $f\colon [a, b] \to \mathbb{R}$ is a continuous function which has opposite sign at the end points of the interval, i.e., $f(a)f(b) < 0$. We define a sequence of nested intervals $[a_k, b_k]$ with a help of an inner point $p_k$, but it is no longer the midpoint of the intervals. First define $[a_0, b_0] = [a, b]$. At the $k$th step, let $p_k$ be the intersection of the secant line of $f$ corresponding to the points $a_k$ and $b_k$ (the line segment through the points $(a_k, f(a_k))$ and $(b_k, f(b_k))$) and the $x$-axis. Little calculation gives that

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}. \tag{2.6}$$

The next interval $[a_{k+1}, b_{k+1}]$ will be either $[a_k, p_k]$ or $[p_k, b_k]$ where the function has a sign change. The method is defined in Algorithm 2.18.

**Algorithm 2.18. method of false position**

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

When we implement the Algorithm 2.18 in a computer program, it is important to test whether $f(a)$ is equal to $f(b)$, since otherwise we divide by 0, and the program fails. Such technical details are not included in the algorithms we present in this lecture note, but those are important when we implement the algorithms.

We show the convergence of the method of false position under the condition when the function $f$ is convex or concave.

**Theorem 2.19.** *Suppose the continuous function $f \in C[a,b]$ is convex or concave on $[a,b]$ and $f(a)f(b) < 0$. Then the method of false position converges to the unique root $p$ of $f$.*

**Proof.** Suppose, e.g., that $f$ is convex and $f(a) > 0$, $f(b) < 0$. The other cases can be argued similarly. Then the left subinterval contains the root $p$ of $f$ at each step, i.e., $a_{k+1} = a$ and $b_{k+1} = p_k$ for all $k$. Since the sequence $p_k$ is monotone decreasing and $a$ is a lower bound of the sequence, it converges to a limit $p \geq a$. We have $f(p_k) < 0$ for all $k$, therefore $f(p) \leq 0$. Since $f(a) > 0$, we get $p > a$. Taking the limit of Equation (2.6) as $k \to \infty$ we obtain

$$p = a - f(a)\frac{a - p}{f(a) - f(p)},$$

which implies that $f(p) = 0$. $\square$

**Example 2.20.** Applying the method of false position to the problem of Example 2.17, we get the numerical values presented in Table 2.3. As in Example 2.17, we use the interval $[0,1]$ and $TOL = 10^{-5}$. We can observe that for this equation and using the given initial interval the method of false position converges much faster than the bisection method. $\square$

Table 2.3: Method of false position, $f(x) = e^x - 2\cos x$, $[0,1]$, $TOL = 10^{-5}$

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

**Example 2.21.** We apply again the method of false position for the equation of Example 2.17 but now on the initial interval $[0,4]$. The numerical results are displayed in Table 2.4. (Only the first and last several steps are presented.) Now, the speed of the convergence is far slower than that of observed in the previous example. (And it becomes even slower if we further increase the right end point of the interval.) On the other hand, (2.5) yields that the bisection method with the initial interval $[0,4]$ has this accuracy in 18 steps, which is only two steps longer than in Example 2.17. $\square$

Table 2.4: Method of false position, $f(x) = e^x - 2\cos x$, $[0,4]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 4.00000000 | 0.07029205 | -9.2224e-01 |
| 1  | 0.07029205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2  | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3  | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4  | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

### Exercises

1. Apply the method of false position for the equations presented in Exercise 1 of Section 2.3.
2. Let

$$f(x) = \begin{cases} \delta, & x \leq 0.5 \\ 4(1 + \delta)(x - x^2) - 1, & x \geq 0.5 \end{cases}$$

   Apply the bisection method and the method of false position on the interval $[0,1]$ to approximate the root of $f$ if
   - (a) $\delta = 2$,
   - (b) $\delta = 0.5$,
   - (c) $\delta = 0.09$.
3. Work out the details of the proof of Theorem 2.19 for all the other cases.

## 2.5. Newton's Method

One general approach in numerical analysis is that we replace the problem by a "simpler" one which is "close" to the original problem, and we hope that the solution of the simpler problem approximate that of the original problem. Here our goal is to find the solution of the scalar equation $f(x) = 0$. We replace the function $f$ by its first-order Taylor polynomial approximation, and we solve the resulting linear equation. Geometrically this means that the intersection of the tangent line with the $x$-axis gives an approximation of the root of the original nonlinear equation. The equation of the tangent line to the graph of $f$ at $p_0$ is $y = f(p_0) + f'(p_0)(x - p_0)$, so its intersection with the $x$-axis is the solution of the linear equation $f(p_0) + f'(p_0)(x - p_0) = 0$, hence it is $x = p_0 - f(p_0)/f'(p_0)$ (assuming, of course, that $f'(p_0) \neq 0$). This number is denoted by $p_1$, and we repeat the procedure from this point. Then we get the recursive sequence defined by

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}. \tag{2.7}$$

The iterative method (2.7) is called *Newton–Raphson method* or shortly *Newton's method* or *Newton iteration*.

**Example 2.22.** We applied the Newton's method for the problem of Example 2.17, and we got the numerical results presented in Table 2.5. Similarly to Algorithm 2.18, as the distance of the consecutive terms of the sequence became smaller than a predefined tolerance value, we terminated the generation of the sequence. We observe that the sequence converges very fast to the root of the function. $\square$

Table 2.5: Newton's method, $f(x) = e^x - 2\cos x$, $p_0 = 0.1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 |  7.5291e-01 |
| 2 | 0.5678850726 |  7.8450e-02 |
| 3 | 0.5402639121 |  1.3139e-03 |
| 4 | 0.5397853041 |  3.9302e-07 |
| 5 | 0.5397851608 |  3.5207e-14 |

The Newton's method is a one-step iteration with the function

$$g(x) := x - \frac{f(x)}{f'(x)}. \tag{2.8}$$

Computing the derivative of $g$ we get

$$g'(x) = 1 - \frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2} = \frac{f(x)f''(x)}{(f'(x))^2}. \tag{2.9}$$

Let $p$ be a root $f$ satisfying $f'(p) \neq 0$. Then $g'(p) = 0$, so Theorem 2.15 yields immediately the following result.

**Theorem 2.23.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the Newton's method converges locally to $p$.*

**Example 2.24.** Consider the function $f(x) = 0.5 \arctan x$. It's only root is $p = 0$. We have that $f'(0) = 0.5$, so the Newton's method converges locally to $p = 0$, i.e., if $p_0$ is close enough to 0, then the Newton-iteration converges to 0. In Table 2.6 we present the first several terms of this sequence starting from $p_0 = 1.4$. (In the 15th step the program terminated with an error, since $f'(p_{14}) = 0$ on the computer.) We can see that the sequence $p_k$ does not converge to 0 in this case. $\square$

Table 2.6: Newton's method, $f(x) = 0.5 \arctan x$, $p_0 = 1.4$

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

### Exercises

1. Apply the Newton's method for the equations presented in Exercise 1 of Section 2.3.
2. Let $f(x) = 0.5 \arctan x$. Then $f$ has the unique root $x = 0$. Let $p_k$ be the Newton's iteration sequence. Show that there exists a number $p^*$ such that
   - (a) if $|p_0| < p^*$, then $p_k \to 0$,
   - (b) if $|p_0| = p^*$, then the sequence $p_k$ repeats $p_0$ and $-p_0$, and hence it is not convergent,
   - (c) if $|p_0| > p^*$, then $p_k$ alternates (i.e., $p_k p_{k+1} < 0$ for all $k$), and $|p_k| \to \infty$.
3. Give an iteration to approximate $\sqrt[k]{a}$.

## 2.6. Secant Method

The Newton's method requires the computation (and hence the existence) of the derivative of $f$. But in practice, $f'$ is not always known, (it is possible that $f$ is not defined by a formula, it may be an output of an other numerical procedure which computes the value of $f$ with a good precision). Or the computation of $f'$ requires too much calculation, so we prefer not to evaluate it. The *secant method* does not require the computation of the derivative $f'$.

Let $p_0$ and $p_1$ be two different initial values of the sequence. Consider the secant line of $f$ corresponding to the points $p_0$ and $p_1$, i.e., the line which connects the points $(p_0, f(p_0))$ and $(p_1, f(p_1))$. Its equation is

$$y = f(p_1) + \frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1).$$

The secant line intersects the $x$-axis at $x = p_1 - \tfrac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1)$. $p_2$ will denote this number. Then we consider the secant line corresponding to $p_1$ and $p_2$, and its intersection with the $x$-axis is denoted by $p_3$. Repeating this procedure we define the sequence $p_k$ by the recursion

$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k). \tag{2.10}$$

This is a two-step iteration, which defines the *secant method*.

**Example 2.25.** We used the secant method for the problem of Example 2.17. The numerical results can be seen in Table 2.7. Comparing it with the Table 2.5 we observe that the secant method converges to its limit slower than the Newton's method. $\square$

Table 2.7: secant method, $f(x) = e^x - 2\cos x$, $p_0 = 0$, $p_1 = 1$, $TOL = 10^{-5}$

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

For the proof of the secant method we need the following theorem.

**Theorem 2.26.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Let $p_k$ be the sequence defined by the secant method. Then for every $k$ there exist $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ and $\eta_k \in \langle p_k, p_{k-1}\rangle$ such that*

$$p_{k+1} - p = \frac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k - p)(p_{k-1} - p). \tag{2.11}$$

**Proof.** Algebraic manipulations give

$$\begin{aligned}
p_{k+1} - p &= p_k - p - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})}f(p_k) \\
&= \frac{(p_{k-1} - p)f(p_k) - (p_k - p)f(p_{k-1})}{f(p_k) - f(p_{k-1})} \\
&= \frac{(p_k - p)(p_{k-1} - p)}{f(p_k) - f(p_{k-1})}\left(\frac{f(p_k)}{p_k - p} - \frac{f(p_{k-1})}{p_{k-1} - p}\right) \\
&= (p_k - p)(p_{k-1} - p)\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})}\frac{\tfrac{f(p_k) - f(p)}{p_k - p} - \tfrac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}}.
\end{aligned}$$

Then the Lagrange Mean Value Theorem implies the existence of $\eta_k \in \langle p_k, p_{k-1}\rangle$ such that

$$\frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}} = f'(\eta_k).$$

Now we have to show that there exists a $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ such that

$$\frac{\tfrac{f(p_k) - f(p)}{p_k - p} - \tfrac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}} = \frac{f''(\xi_k)}{2}. \tag{2.12}$$

Its direct proof is left to Exercise 2. Here we prove relation (2.12) using a result and a notion will be discussed in Chapter 6. The left hand side of (2.12) is a second divided difference $f[p_{k-1}, p, p_k]$ of $f$ corresponding to the points $p_{k-1}, p$ and $p_k$ (see Section 6.2). Corollary 6.17 yields that there exists a $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ such that $f[p_{k-1}, p, p_k] = f''(\xi_k)/2$. $\square$

**Theorem 2.27.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the secant method converges locally to $p$.*

**Proof.** Let $\delta^*$ be such that $f'(x) \neq 0$ for $x \in [p - \delta^*, p + \delta^*]$. Such $\delta^*$ exists, since $f'(p) \neq 0$ and $f'$ is continuous. Let

$$M := \frac{\max\{|f''(x)|\colon x \in [p - \delta^*, p + \delta^*]\}}{2\min\{|f'(x)|\colon x \in [p - \delta^*, p + \delta^*]\}}.$$

Select $\delta$ such that $\delta < \min\{\delta^*, \tfrac{1}{M}\}$, and let $\varepsilon := M\delta$. Then, by our conditions, $0 < \varepsilon < 1$. Let $p_0, p_1 \in (p - \delta, p + \delta)$ arbitrary but different numbers. Relation (2.11) and the definition of $M$ yield that $|p_{k+1} - p| \leq M|p_k - p||p_{k-1} - p|$, and hence

$$M|p_{k+1} - p| \leq M|p_k - p|M|p_{k-1} - p| \tag{2.13}$$

for all $k$. With $k = 1$ we get $M|p_2 - p| \leq M|p_1 - p|M|p_0 - p| \leq (M\delta)^2 = \varepsilon^2 < \varepsilon$. Therefore $|p_2 - p| \leq \varepsilon/M = \delta$, and hence $p_2 \in (p - \delta, p + \delta)$. Similarly we can show that $p_k \in (p - \delta, p + \delta)$ for all $k$.

The definition of $\varepsilon$ implies $M|p_0 - p| < \varepsilon$ and $M|p_1 - p| < \varepsilon$. Now we select a sequence $q_k$ which satisfies $M|p_k - p| \leq \varepsilon^{q_k}$ for all $k$. We can define $q_0 = 1$ and $q_1 = 1$. Suppose the first $k$ terms of the sequence $q_k$ is already defined. Inequality (2.13) yields that relation $M|p_{k+1} - p| \leq \varepsilon^{q_k}\varepsilon^{q_{k-1}}$ must be satisfied. Hence $M|p_{k+1} - p| \leq \varepsilon^{q_{k+1}}$ holds, if $q_{k+1}$ is defined by

$$q_{k+1} = q_k + q_{k-1}, \quad k \geq 1, \quad q_0 = 1, \quad q_1 = 1. \tag{2.14}$$

The sequence defined by (2.14) is the so-called *Fibonacci sequence*. We can show (see Exercise 3) that the general formula of $q_k$ is

$$q_k = \frac{1}{\sqrt{5}}(r_0^{k+1} - r_1^{k+1}), \quad k \geq 0, \tag{2.15}$$

where

$$r_0 = \frac{1 + \sqrt{5}}{2} \approx 1.618, \quad \text{and} \quad r_1 = \frac{1 - \sqrt{5}}{2} \approx -0.618.$$

But then $q_k \to \infty$ as $k \to \infty$. Now we get $p_k \to p$, since

$$|p_k - p| \leq \frac{1}{M}\varepsilon^{q_k} \to 0, \quad \text{as } k \to \infty.$$

$\square$

### Exercises

1. Apply the secant method for the equations presented in Exercise 1 of Section 2.3.
2. Prove relation (2.12). (Hint: show that the expression

$$f[a,b,c] := \frac{\tfrac{f(c) - f(b)}{c - b} - \tfrac{f(b) - f(a)}{b - a}}{c - a}$$

is independent from the order of the numbers $a, b, c$. Therefore, we can assume that $a < b < c$. Take the first-order Taylor approximation of $f$ around $b$ together with the second-order error term. Then express the numerator of the right hand side. Finally, use Theorem 2.2 to show that $f[a,b,c] = f''(\xi)/2$ for some $\xi \in (a,c)$.)
3. Prove formula (2.15).

## 2.7. Order of Convergence

In the previous sections we observed that some sequence converges to a limit faster than other sequences. In this section we define the notion of order of convergence which can characterize the speed of the convergence.

Let $p_k$ be a convergent sequence with limit $p$. We say that the *order of convergence* of the sequence $p_k$ is $\alpha$ if $\alpha \geq 1$ and there exists a constant $c \geq 0$ such that

$$|p_{k+1} - p| \leq c |p_k - p|^\alpha \quad \text{for all } k \geq 0, \tag{2.16}$$

and if $\alpha = 1$, then we also assume that $c < 1$.

If we want to be more precise, then in case when (2.16) holds, we could say that the order of convergence is *at least* $\alpha$, since it is possible that (2.16) can be satisfied with an exponent bigger than $\alpha$, too. For simplicity, we will omit "at least" in the sequel, but the notion should always be understood in this sense. If we want to emphasize that $p_k$ satisfies (2.16) with some $\alpha$, but it does not satisfy it with any exponent bigger than $\alpha$, then we say that the order of convergence is *exactly* $\alpha$.

If the order of convergence of a sequence is $\alpha = 1$, then we say that the convergence is *linear*, and if $\alpha = 2$, then we say that the convergence is *quadratic*.

Suppose $p_k$ converges to $p$ linearly. Then it is easy to see that

$$|p_k - p| \leq c^k |p_0 - p| \tag{2.17}$$

holds. For some cases, it is not easy to show a linear convergence of a numerical method using the definition (2.16). So we extend the previous definition in such a way that if a sequence satisfies relation (2.17) with a constant $0 \leq c < 1$, then we also say that the convergence is linear.

Suppose $p_k \to p$ with order $\alpha$. If the finite limit

$$\lambda = \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\alpha} \tag{2.18}$$

exists, then we call $\lambda$ as the *asymptotic error constant*. It can be proved easily that if the limit (2.18) exists and it is finite, then $p_k$ is convergent and its order of convergence is $\alpha$. If $p_k$ converges linearly and its asymptotic error constant is 0, then we speak about *superlinear* convergence.

**Theorem 2.28.** *Suppose $p_k$ converges to $p$ of order $\alpha$ with the asymptotic error constant $\lambda \neq 0$. Then*

(i) $\displaystyle \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\beta} = 0$ *for all $\beta < \alpha$, and*

(ii) $\displaystyle \lim_{k \to \infty} \frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \infty$ *for all $\beta > \alpha$.*

**Proof.** The statements follow from relation

$$\frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \frac{|p_{k+1} - p|}{|p_k - p|^\alpha}\frac{1}{|p_k - p|^{\beta - \alpha}}. \square$$

It follows from the above theorem, that if a sequence $p_k$ converges to $p$ of order $\alpha$, and the asymptotic error constant $\lambda \neq 0$, then the order of convergence is exactly $\alpha$.

**Example 2.29.** Consider again the Newton iteration of Example 2.22. In Table 2.8 we have listed in the last three columns the numerical values of the formula $|p_{k+1} - p|/|p_k - p|^\alpha$ for $\alpha = 1, 2$ and 3 using the value $p = 0.5397851608092811$. We can observe that for $\alpha = 1$ the sequence goes to 0. For $\alpha = 2$ the sequence remains bounded but it does not converge to 0, for $\alpha = 3$ it converges to $\infty$. (Certainly from the first 5 terms of a sequence we should not make conclusions about a limit of a sequence, but generation of more terms will confirm the above observations.) Therefore, the numerical evidence suggests that the order of convergence of this sequence is 2. $\square$

Table 2.8: Order of convergence of the Newton iteration, $f(x) = e^x - 2\cos x$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ | $\alpha = 3$ |
|---|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |             |             |             |
| 1 | 1.0000000000 |  1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 |  2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 |  1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 |  3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 |  2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

**Theorem 2.30.** *Suppose a sequence $p_k$ satisfies inequality (2.16) with some $c \geq 0$ and $\alpha > 1$. Then $p_k$ converges locally to $p$, and for every $k$*

$$|p_k - p| \leq c^{\frac{\alpha^k - 1}{\alpha - 1}}|p_0 - p|^{\alpha^k}. \tag{2.19}$$

**Proof.** Relation (2.19) can be easily proved with mathematical induction. Then it implies

$$|p_k - p| \leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0 - p|\right)^{\alpha^k}.$$

Hence if $p_0$ is such that $c^{\frac{1}{\alpha-1}}|p_0 - p| < 1$, then $p_k \to p$, i.e., $p_k$ converges locally to $p$. $\square$

**Example 2.31.** Suppose $p_k \to p$ and $q_k \to q$ linearly and quadratically, respectively, which satisfy (2.17) and (2.16) with $c = 1/2$, respectively. Moreover, we suppose $|p_0 - p| < 1$ and $|q_0 - q| < 1$. Then relations (2.17) and (2.19) yield that $|p_k - p| \leq (1/2)^k$ and $|q_k - q| \leq (1/2)^{2^k - 1}$. In Table 2.9 we listed these error bounds for $k = 1, 2, \ldots, 5$. We can see that the error decreases much faster in the quadratic case. $\square$

Table 2.9:

| $k$ | $(1/2)^k$ | $(1/2)^{2^k - 1}$ |
|---|---|---|
| 1 | $5.0000 \cdot 10^{-1}$ | $5.0000 \cdot 10^{-1}$ |
| 2 | $2.5000 \cdot 10^{-1}$ | $1.2500 \cdot 10^{-1}$ |
| 3 | $1.2500 \cdot 10^{-1}$ | $7.8125 \cdot 10^{-3}$ |
| 4 | $6.2500 \cdot 10^{-2}$ | $3.0518 \cdot 10^{-5}$ |
| 5 | $3.1250 \cdot 10^{-2}$ | $4.6566 \cdot 10^{-10}$ |
| 6 | $1.5625 \cdot 10^{-2}$ | $1.0842 \cdot 10^{-19}$ |

**Theorem 2.32.** *Let $g \in C^m[a,b]$, $p \in (a,b)$ and $p = g(p)$. Consider the fixed-point iteration $p_{k+1} = g(p_k)$.*

(i) *If $|g'(p)| < 1$, then the fixed-point iteration converges locally and linearly to $p$.*

(ii) *If $g'(p) = g''(p) = \cdots = g^{(m-1)}(p) = 0$, then the fixed-point iteration converges locally to $p$ of order $m$ with the asymptotic error constant $g^{(m)}(p)/m!$.*

**Proof.** Statement (i) follows from the proof of Theorem 2.15.

For the proof of statement (ii), we consider the Taylor approximation of $g$ around $p$ of degree $(m-1)$:

$$g(p_k) = g(p) + g'(p)(p_k - p) + \cdots + \frac{g^{(m-1)}(p)}{(m-1)!}(p_k - p)^{m-1} + \frac{g^{(m)}(\xi_k)}{m!}(p_k - p)^m,$$

where $\xi_k \in \langle p_k, p\rangle$. Using that the first $m-1$ derivatives are equal to 0 at $p$, $g(p) = p$ and $g(p_k) = p_{k+1}$, we get

$$|p_{k+1} - p| = \frac{|g^{(m)}(\xi_k)|}{m!}|p_k - p|^m \leq c|p_k - p|^m. \tag{2.20}$$

In the last estimate we used that $g \in C^m[a,b]$, i.e., $g^{(m)}$ is continuous, and therefore, it is bounded in a neighborhood of $p$. The limit (2.18) follows from these, since $\xi_k \to p$ as $k \to \infty$ by relation $|\xi_k - p| \leq |p_k - p|$. Therefore we obtain

$$\lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^m} = \lim_{k \to \infty} \frac{g^{(m)}(\xi_k)}{m!} = \frac{g^{(m)}(p)}{m!}. \square$$

It follows from the above theorem that the order of convergence of a fixed-point iteration is always a positive integer assuming that $g$ is smooth enough. Theorem 2.36 below shows that it is not true, in general, in the case of multistep iterations.

We will need the notion of a multiple root. We say that $p \in (a,b)$ is a root of *multiplicity* $m$ of $f \in C[a,b]$ if there exists a function $q \in C[a,b]$ such that $q(p) \neq 0$ and

$$f(x) = (x - p)^m q(x), \quad x \in (a,b). \tag{2.21}$$

We can prove the next result easily.

**Theorem 2.33.** *Let $f \in C^m[a,b]$, $p \in (a,b)$.*

(i) *Let $p$ be a root of multiplicity $m$ of $f$, and the function $q$ in (2.21) is $m$ times differentiable. Then*

$$f(p) = f'(p) = f''(p) = \cdots = f^{(m-1)}(p) = 0, \quad \text{and} \quad f^{(m)}(p) \neq 0. \tag{2.22}$$

(ii) *If (2.22) holds, then $p$ is a root of multiplicity $m$ of $f$.*

(iii) *Suppose $f$ is infinitely many times differentiable, $f$ is expandable in a Taylor-series around $p$, and $f$ satisfies relations (2.22). Then $p$ is a root of order $m$ of $f$, and the function $q$ in (2.21) is also infinitely many times differentiable, and $q$ is expandable in a Taylor-series around $p$.*

The next theorem shows that if $p$ is a simple root of $f$, then the Newton iteration is locally and quadratically convergent, and if $p$ is a multiple root of $f$, then the order of convergence is linear.

**Theorem 2.34.** *Let $f \in C^2[a,b]$.*

(i) *If $f(p) = 0$ and $f'(p) \neq 0$, then the Newton iteration converges locally to $p$, and the order of convergence is quadratic.*

(ii) *If $f(x) = (x - p)^m q(x)$, where $q \in C^2[a,b]$, $q(p) \neq 0$, $m > 1$, then the Newton iteration converges locally to $p$, and the order of convergence is linear.*

**Proof.** Statement (i) follows from part (ii) of Theorem 2.32 since the Newton iteration is a fixed-point iteration with the function $g$ defined in (2.8), and $g'(p) = 0$ by relation (2.9).
Since the function

$$g(x) := \begin{cases} x - \tfrac{f(x)}{f'(x)}, & x \neq p, \\ p, & x = p \end{cases}$$

satisfies

$$g(x) = x - \frac{(x - p)q(x)}{mq(x) + (x - p)q'(x)},$$

it is continuously differentiable at $p$, and $g'(p) = 1 - \tfrac{1}{m}$. Therefore, part (ii) of Theorem 2.32 yields that the order of convergence is linear. $\square$

**Example 2.35.** Find the root of $f(x) = x^3 + x^2 - 8x - 12$ by the Newton–Raphson method from the initial value $p_0 = 0$ and using tolerance $10^{-5}$. It is easy to see that $x = -2$ is a double root, and $x = 3$ is a simple root of the polynomial. In Table 2.10 we can see the numerical values of the iteration corresponding to $p_0 = 0$, and in Table 2.11 corresponding to $p_0 = 2$. In the first case the sequence converges to $-2$, and in the second case it converges to 3. We can observe that in the first case the convergence is linear, but in the second case it is quadratic. $\square$

Table 2.10: Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ |
|---|---|---|---|---|
| 0  | 0.0000000000 | -1.2000e+01 |             |             |
| 1  | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2  | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3  | -1.8853313477 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
| 4  | -1.9433465411 | -1.5866e-02 | 4.9406e-01 | 4.3086e+00 |
| 5  | -1.9718365260 | -3.9436e-03 | 4.9712e-01 | 8.7747e+00 |
| 6  | -1.9859582600 | -9.8308e-04 | 4.9858e-01 | 1.7703e+01 |
| 7  | -1.9929890302 | -2.4542e-04 | 4.9929e-01 | 3.5558e+01 |
| 8  | -1.9964969780 | -6.1313e-05 | 4.9965e-01 | 7.1267e+01 |
| 9  | -1.9982491032 | -1.5323e-05 | 4.9982e-01 | 1.4268e+02 |
| 10 | -1.9991247050 | -3.8300e-06 | 4.9991e-01 | 2.8552e+02 |
| 11 | -1.9995623908 | -9.5743e-07 | 4.9996e-01 | 5.7119e+02 |
| 12 | -1.9997812050 | -2.3935e-07 | 4.9998e-01 | 1.1425e+03 |
| 13 | -1.9998906049 | -5.9835e-08 | 4.9999e-01 | 2.2852e+03 |
| 14 | -1.9999453030 | -1.4959e-08 | 4.9999e-01 | 4.5705e+03 |
| 15 | -1.9999726517 | -3.7396e-09 | 5.0000e-01 | 9.1412e+03 |
| 16 | -1.9999863259 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

Table 2.11: Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ |
|---|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 |             |             |
| 1 | 4.0000000000 |  3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 |  6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 |  5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 |  4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 |  3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 |  1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

**Theorem 2.36.** *If $p$ is a simple root of $f$, then the secant method converges locally to $p$ of order $\alpha = (1 + \sqrt{5})/2 \approx 1.618$.*

**Proof.** We use the notations and results introduced in the proof of Theorem 2.27. By inequality (2.13) we have

$$|p_{k+1} - p| \leq M|p_k - p||p_{k-1} - p|.$$

Then, applying estimate $|p_k - p| \leq \tfrac{1}{M}\varepsilon^{q_k}$, we get

$$\begin{aligned}
|p_{k+1} - p| &\leq |p_k - p|^{r_0} M |p_k - p|^{1-r_0}|p_{k-1} - p| \\
&\leq |p_k - p|^{r_0} M \left(\frac{1}{M}\varepsilon^{q_k}\right)^{1-r_0}\frac{1}{M}\varepsilon^{q_{k-1}} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{q_k + q_{k-1} - r_0 q_k} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{q_{k+1} - r_0 q_k} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{r_1^{k+1}}.
\end{aligned}$$

Note that the last step follows from (2.15) (with some calculations). Since $r_1^{k+1} \to 0$ as $k \to \infty$, we get that there exists a constant $c$ such that $|p_{k+1} - p| \leq c|p_k - p|^{r_0}$, and hence the order of convergence is $r_0 = \tfrac{1 + \sqrt{5}}{2}$. $\square$

We have seen that the Newton iteration is only linearly convergent in the case of a multiple root. It is possible to prove that the same holds for the secant method. Next we discuss how to accelerate the speed of the convergence in this case.

Let $f \in C^3[a,b]$, suppose $p \in (a,b)$ is a multiple root of $f$. More precisely, we assume that $f(x) = (x - p)^m q(x)$ with $m > 1$ and $q \in C^3[a,b]$. We define the function

$$\mu(x) = \begin{cases} \tfrac{f(x)}{f'(x)}, & \text{if } x \neq p, \\ 0, & \text{if } x = p. \end{cases}$$

We can see that

$$\mu(x) = \frac{(x - p)q(x)}{mq(x) + (x - p)q'(x)},$$

and hence $\mu \in C^2[a,b]$. Moreover, $\mu'(p) = \tfrac{1}{m}$, and so $p$ is only a simple root of $\mu$. Therefore if we use the Newton iteration for the function $\mu$ instead of $f$, we get a quadratic convergence. Then we get the sequence

$$p_{k+1} = p_k - \frac{\mu(p_k)}{\mu'(p_k)} = p_k - \frac{f(p_k)f'(p_k)}{(f'(p_k))^2 - f(p_k)f''(p_k)}. \tag{2.23}$$

### Exercises

1. Show that the bisection method is linearly convergent.
2. Prove inequality (2.19).
3. Let $a > 0$. Show that

$$p_{k+1} = \frac{p_k(p_k^2 + 3a)}{3p_k^2 + a}$$

   is a locally convergent sequence of order 3 to approximate $\sqrt{a}$.
4. Find the order of convergence of the sequence $p_k = \tfrac{1}{k}$. What is the order of convergence of $p_k = \tfrac{1}{k^n}$?
5. Show that $p_k = 10^{-2^k}$ goes to 0 quadratically.
6. Show that $x = 0$ is a double root of the function $\sin^2 x$.
7. Prove Theorem 2.33.
8. Consider the following iterations:
   - (a) (Halley iteration) $p_{k+1} = p_k - \tfrac{1}{a_k}$, where $a_k = \tfrac{f'(p_k)}{f(p_k)} - \tfrac{1}{2}\tfrac{f''(p_k)}{f'(p_k)}$,
   - (b) (Olver iteration) $p_{k+1} = p_k - \tfrac{f(p_k)}{f'(p_k)} - \tfrac{1}{2}\tfrac{f''(p_k)}{f'(p_k)}\left(\tfrac{f(p_k)}{f'(p_k)}\right)^2$.

   Determine the order of convergence of the methods. Apply these methods to the problems in Exercise 1 of Section 2.3.
9. Find the root of $f(x) = (x^2 - 5)^3$ using Newton iteration, secant method, iteration (2.23), and iteration

$$p_{k+1} = p_k - m\frac{f(p_k)}{f'(p_k)},$$

   where $m$ the multiplicity of the root. Compare the order of convergence of the sequences. What is the order of convergence of the last iteration?
10. Suppose we already determined a root $x_1$ of the function $f$. Then if we apply a numerical method to find a root of the function $g(x) = f(x)/(x - x_1)$, then we get another root of $f$ (or $x_1$ again, if $x_1$ is a multiple root). This is the so-called *deflation method*. With this method determine all roots of the polynomials together with their multiplicities (using any approximation technique):
    - (a) $f(x) = x^3 - 3x^2 + 4$,
    - (b) $f(x) = x^4 - 5x^3 + 9x^2 - 7x + 2$

## 2.8. Stopping Criteria of Iterations

In this chapter the numerical methods we discussed generate an infinite sequence $p_k$ to find a root of the function $f$, and the limit $p$ of the sequence is the exact value of the root. We approximate the limit of the sequence $p$ by a term of the sequence $p_k$, where $k$ is "large enough". So the question is how we determine the number of steps $k$ for which $p_k$ gives us a good approximation of $p$. Here we introduce three popular strategies. We predefine three tolerances $\varepsilon_1 > 0$, $\varepsilon_2 > 0$ and $\varepsilon_3 > 0$. We consider the $k$th term $p_k$ as an appropriate approximation of $p$ if

$$\text{(i)}\ |p_k - p_{k-1}| < \varepsilon_1, \quad \text{(ii)}\ \frac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2, \quad \text{or}\quad \text{(iii)}\ |f(p_k)| < \varepsilon_3. \tag{2.24}$$

Condition (i) is a numerical analogue of the absolute error $|p_k - p|$ of the approximation. It assumes that if a new term of the sequence is closer to the previous one than the tolerance, then it is because both terms are already close to the limit. So we terminate the generation of the sequence.

Condition (ii) is the numerical analogue of the relative error $|p_k - p|/|p|$ of the approximation. As in the previous case, we examine the distance between consecutive terms but we take into account the order of magnitude of the terms.

Condition (iii) tests whether the function value at $p_k$ is close to 0. If it is satisfied, we assume that it is because the term is close to a root of $f$, and we terminate the sequence.

In a computer code it is always recommended to count the number of iteration and stop computing the sequence if it is too large, i.e., larger than a predefined maximal iteration number. This way we avoid a possible infinite loop of the program, and also, we do not allow a convergence which is too slow.

The first two conditions can be applied for any iteration, but the third one is formulated for the problem of finding a root of a single variable function $f$. We remark that for other type of problems it is likely that we can formulate a similar condition which tests how well the approximate solution satisfies the investigated mathematical problem (see, e.g., Section 4.4 below).

We remark that the above reasoning is heuristic. We can find examples when a stopping condition (i), (ii) or (iii) in (2.24) holds, but the $k$th term of the sequence is not close to a root. Therefore, in practice, we usually use combination of stopping criteria.

### Exercises

1. Suppose an iteration method generates the sequence $p_k = \sum_{i=1}^k \tfrac{1}{i}$, and suppose we use only the stopping criterion (i) defined in (2.24). What do we observe? Does the sequence converge? What do we get if we use stopping criterion (ii)?
2. Let $f(x) = x^8$, and suppose an iteration generates $p_k = 1/k$ to approximate the root of $f$. Suppose we use stopping condition (i) in (2.24) with $\varepsilon_1 = 10^{-8}$. What do we get as an approximate root? What do we get if we use only stopping condition (ii), and what if we use only condition (iii) with tolerances $\varepsilon_2 = 10^{-8}$ or $\varepsilon_3 = 10^{-8}$, respectively?

## 2.9. Review of Multivariable Calculus

In this section we review those notions, notations and results from multivariable calculus which we use in the rest of this chapter.

**Theorem 2.37.** *Let $E \subset \mathbb{R}^n$ be a closed and bounded set, $f\colon E \to \mathbb{R}$ be continuous. Then $f$ has a maximum and a minimum on $E$, i.e., there exist $\mathbf{c}, \mathbf{d} \in E$ such that*

$$f(\mathbf{c}) = \max_{\mathbf{x} \in E} f(\mathbf{x}) \quad \text{and} \quad f(\mathbf{d}) = \min_{\mathbf{x} \in E} f(\mathbf{x}).$$

Let $E \subset \mathbb{R}^n$, and consider the function $f\colon E \to \mathbb{R}$ of $n$ variables. The partial derivatives of the function $f = f(\mathbf{x}) = f(x_1, \ldots, x_n)$ with respect to the variable $x_i$ is denoted by $\tfrac{\partial f}{\partial x_i}$. If all the partial derivatives of $f$ up to order $m$ exist and are continuous, then we say that $f$ is $m$ times continuously partially differentiable, and we will denote it by $f \in C^m$. If $f \in C^1$, then $f'$ denotes the *gradient vector* or shortly, the *gradient* of $f$, i.e.,

$$f'(\mathbf{x}) := \left(\frac{\partial f(\mathbf{x})}{\partial x_1}, \ldots, \frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

If $f \in C^2$, then $f''(\mathbf{x})$ is the so-called *Hessian matrix* or shortly the *Hessian* defined by

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1 \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n}(\mathbf{x}) \\
\dfrac{\partial^2 f}{\partial x_2 \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n}(\mathbf{x}) \\
\vdots & \vdots & & \vdots \\
\dfrac{\partial^2 f}{\partial x_n \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

We will need the multivariable Taylor's formula later.

**Theorem 2.38 (Taylor's formula).** *Let $E \subset \mathbb{R}^n$ be an open set, $f\colon E \to \mathbb{R}$, $f \in C^{m+1}$, and let $\mathbf{a} \in E$. Then for every $\mathbf{x} \in E$ there exists a $\xi = \xi(\mathbf{x}) \in E$ such that $\xi = \mathbf{x} + t(\mathbf{a} - \mathbf{x})$ for some $t \in (0, 1)$ (i.e., $\xi$ lies on the line segment connecting $\mathbf{a}$ and $\mathbf{x}$), and*

$$\begin{aligned}
&f(x_1, \ldots, x_n) \\
&= f(a_1, \ldots, a_n) + \sum_{i=1}^n \frac{\partial f(a_1, \ldots, a_n)}{\partial x_i}(x_i - a_i) \\
&\quad + \frac{1}{2}\sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 f(a_1, \ldots, a_n)}{\partial x_i \partial x_j}(x_i - a_i)(x_j - a_j) \\
&\quad + \cdots + \frac{1}{m!}\sum_{i_1=1}^n \cdots \sum_{i_m=1}^n \frac{\partial^m f(a_1, \ldots, a_n)}{\partial x_{i_1}\cdots \partial x_{i_m}}(x_{i_1} - a_{i_1})\cdots(x_{i_m} - a_{i_m}) \\
&\quad + \frac{1}{(m+1)!}\sum_{i_1=1}^n \cdots \sum_{i_{m+1}=1}^n \frac{\partial^{m+1} f(\xi_1, \ldots, \xi_n)}{\partial x_{i_1}\cdots \partial x_{i_{m+1}}}(x_{i_1} - a_{i_1})\cdots(x_{i_{m+1}} - a_{i_{m+1}}).
\end{aligned}$$

We will use the above Taylor's formula for the cases $m = 1$ or $m = 2$, hence we will approximate a function by a first-order or a second-order Taylor polynomial. We can easily check that using the notation of the gradient and the Hessian that for $f \in C^3$ the second-order Taylor approximation can be written as

$$f(\mathbf{x}) \approx f(\mathbf{a}) + f'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) + \frac{1}{2}(\mathbf{x} - \mathbf{a})^T f''(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

This justifies the notations $f'$ and $f''$ for the gradient and the Hessian. On the other hand, we know from calculus that for a $C^2$ function $f'$ and $f''$ are the Fréchet derivative of the functions $f$ and $f'$, respectively. We do not need the formal definition of the Fréchet derivative, so we can use $f'$ and $f''$ as the notations of the gradient and the Hessian.

Let $I \subset \mathbb{R}$, $g\colon I \to \mathbb{R}^n$, and we denote the component functions of $g$ by $g_i$, i.e., we use the notation $g(t) = (g_1(t), \ldots, g_n(t))^T$. We say that such $g$ is differentiable if all its component functions are differentiable, and its derivative is

$$g'\colon I \to \mathbb{R}^n, \quad g'(t) := (g_1'(t), \ldots, g_n'(t))^T.$$

We say that $g$ is continuously differentiable if its each component function is continuously differentiable. We have the follow result.

**Theorem 2.39 (chain rule).** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^1$ and $g\colon \mathbb{R} \to \mathbb{R}^n$ be continuously differentiable. Then the composite function $f \circ g\colon \mathbb{R} \to \mathbb{R}$ is also continuously differentiable, and*

$$\frac{d}{dt}f(g(t)) = f'(g(t))^T g'(t).$$

We can get the following generalization of the Lagrange's Mean Value Theorem for multivariable functions from the chain rule.

**Theorem 2.40 (Lagrange's Mean Value Theorem).** *Let $E \subset \mathbb{R}^n$ be an open and convex set, $f\colon E \to \mathbb{R}$ be continuously differentiable with respect to all variables. Then for every $\mathbf{x}, \mathbf{y} \in E$ there exists $\xi \in (0, 1)$ such that*

$$f(\mathbf{x}) - f(\mathbf{y}) = f'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T(\mathbf{x} - \mathbf{y}).$$

**Proof.** We define the single variable function $g(t) = f(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))$ for $t \in [0, 1]$. Using the Lagrange's Mean Value Theorem of single variable functions and the chain rule, we get

$$f(\mathbf{x}) - f(\mathbf{y}) = g(1) - g(0) = g'(\xi)(1 - 0) = f'(\mathbf{x} + \xi(\mathbf{y} - \mathbf{x}))^T(\mathbf{x} - \mathbf{y}). \square$$

Let $E \subset \mathbb{R}^n$ and $\mathbf{f}\colon E \to \mathbb{R}^n$. The component functions of $\mathbf{f}$ are denoted by $f_i$, i.e.,

$$\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T.$$

We say that $\mathbf{f}$ is $m$ times continuously partially differentiable if its every component function is $m$ times continuously differentiable, and it will be denoted by $\mathbf{f} \in C^m$. The *Jacobian matrix* or shortly, the *Jacobian* of the function $\mathbf{f} \in C^1$ is the $n \times n$ matrix defined by

$$\mathbf{f}'(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_1}{\partial x_n}(\mathbf{x}) \\
\vdots & & \vdots \\
\dfrac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_n}{\partial x_n}(\mathbf{x})
\end{pmatrix}.$$

Let $\mathbf{a} \in \mathbb{R}^n$ be fixed. If we approximate the component functions of $\mathbf{f}$ by its first-order Taylor polynomial around $\mathbf{a}$, then we get

$$\mathbf{f}(\mathbf{x}) = \begin{pmatrix} f_1(\mathbf{x}) \\ \vdots \\ f_n(\mathbf{x}) \end{pmatrix} \approx \begin{pmatrix} f_1(\mathbf{a}) + f_1'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \\ \vdots \\ f_n(\mathbf{a}) + f_n'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \end{pmatrix} = \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

The expression $\mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a})$ is called the *linear approximation* of $\mathbf{f}$ around $\mathbf{a}$.

## 2.10. Vector and Matrix Norms and Convergence

The components of the vector $\mathbf{x} \in \mathbb{R}^n$ are denoted by $\mathbf{x} = (x_1, x_2, \ldots, x_n)^T$. The function $\|\cdot\|\colon \mathbb{R}^n \to \mathbb{R}$ is called *vector norm* if

1. $\|\mathbf{x}\| \geq 0$ for all $\mathbf{x} \in \mathbb{R}^n$, and $\|\mathbf{x}\| = 0$ if and only if $\mathbf{x} = \mathbf{0}$,
2. $\|c\mathbf{x}\| = |c|\|\mathbf{x}\|$ for all $c \in \mathbb{R}$ and $\mathbf{x} \in \mathbb{R}^n$,
3. (triangle inequality:) $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.

**Theorem 2.41.** *For any vector norm $\|\cdot\|$ it follows that*

(i) $\bigl|\|\mathbf{x}\| - \|\mathbf{y}\|\bigr| \leq \|\mathbf{x} - \mathbf{y}\|$,

(ii) $\|\cdot\|$ *is a continuous function on $\mathbb{R}^n$.*

**Proof.** The triangle inequality yields $\|\mathbf{x}\| = \|\mathbf{x} - \mathbf{y} + \mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\| + \|\mathbf{y}\|$. Hence we get $\|\mathbf{x}\| - \|\mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\|$. Similarly, $\|\mathbf{y}\| - \|\mathbf{x}\| \leq \|\mathbf{x} - \mathbf{y}\|$ holds too, so part (i) follows. The continuity of $\|\cdot\|$ follows from part (i). $\square$

Let $p \geq 1$, and define the so-called *$p$-norm*:

$$\|\mathbf{x}\|_p := \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

It can be shown that $\|\cdot\|_p$ satisfies all the three requirements of the definition of a norm for all $p \geq 1$. The norm corresponding to $p = 2$, i.e., $\|\cdot\|_2$ is called *Euclidean norm*. Another special case is the *1-norm*:

$$\|\mathbf{x}\|_1 := \sum_{i=1}^n |x_i|.$$

We will also use the following vector norm, the so-called *infinity norm* or *maximum norm*

$$\|\mathbf{x}\|_\infty := \max_{i=1,\ldots,n} |x_i|.$$

It is left for the reader to show that $\|\cdot\|_1$ and $\|\cdot\|_\infty$ satisfy the norm properties (Exercise 1). The Euclidean norm is clearly satisfies the 1st and 2nd norm properties, but for the proof of the triangle inequality we need the following estimate, which is important in its own right.

**Theorem 2.42 (Cauchy–Bunyakovsky–Schwarz inequality).** *For every $x_1, \ldots, x_n, y_1, \ldots, y_n \in \mathbb{R}$ it follows*

$$\left(\sum_{i=1}^n x_i y_i\right)^2 \leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2,$$

*where equality holds if and only if there exists $\lambda \in \mathbb{R}$ such that $y_i = \lambda x_i$ for every $i = 1, 2, \ldots, n$.*

**Proof.** Consider the second-order polynomial $p(t) := t^2 \sum_{i=1}^n x_i^2 - 2t \sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2$. Then $p(t) = \sum_{i=1}^n (tx_i - y_i)^2 \geq 0$ holds for all $t$, so $p$ may not have two distinct real roots, i.e., its discriminant may not be positive:

$$4\left(\sum_{i=1}^n x_i y_i\right)^2 - 4 \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2 \leq 0.$$

This yields the Cauchy-Bunyakovsky-Schwarz inequality. $p$ has one real root if and only if its discriminant is 0, i.e., the inequality holds with equality. On the other hand, $p(t) = 0$ holds for some $t = \lambda$ if and only if $y_i = \lambda x_i$ for all $i = 1, 2, \ldots, n$. $\square$

Taking a square root for both sides of the Cauchy–Bunyakovsky–Schwarz inequality and using vector notation we get:

**Corollary 2.43.** *For all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ it follows*

$$|\mathbf{x}^T \mathbf{y}| \leq \|\mathbf{x}\|_2 \|\mathbf{y}\|_2,$$

*where the equality is satisfied if and only if there exists $\lambda \in \mathbb{R}$ such that $\mathbf{y} = \lambda \mathbf{x}$.*

Using the Cauchy–Bunyakovsky–Schwarz inequality we get

$$\begin{aligned}
\|\mathbf{x} + \mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i + y_i)^2 \\
&= \sum_{i=1}^n x_i^2 + 2\sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2 + 2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2} + \sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2} + \sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2 + \|\mathbf{y}\|_2)^2,
\end{aligned}$$

which shows that the Euclidean norm satisfies the triangle inequality.

With the application of the norm we can define the length of a vector, distance between two vectors and the notion of convergence of vector sequences. The expression $\|\mathbf{x}\|$ is called the *length* of the vector, which is the distance between $\mathbf{x}$ and $\mathbf{0}$. The *distance* between the vectors $\mathbf{x}$ and $\mathbf{y}$ is defined as the real number $\|\mathbf{x} - \mathbf{y}\|$. Let $\mathbf{p}^{(k)}$ be a sequence of $n$-dimensional vectors, and let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. We say that the sequence $\mathbf{p}^{(k)}$ *converges* to $\mathbf{p}$ if

$$\lim_{k \to \infty} \|\mathbf{p}^{(k)} - \mathbf{p}\| = 0.$$

It can be proved that the notion of the convergence of a vector sequence is independent of the selection of the vector norm, i.e., if a vector sequence is convergent in a norm, it is convergent to the same limit in any other norm. This property is called in mathematical analysis as the vector norms are *equivalent* in $\mathbb{R}^n$.

**Theorem 2.44.** *Let $|\cdot|$ and $\|\cdot\|$ be two vector norms, and $\mathbf{p}^{(k)}$ be a sequence in $\mathbb{R}^n$. Then $\lim_{k \to \infty}|\mathbf{p}^{(k)} - \mathbf{p}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{p}^{(k)} - \mathbf{p}\| = 0$.*

**Proof.** It is enough to show that for any fixed vector norm $\|\cdot\|$, $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \to 0$. It holds if we show that there exist nonnegative constants $m$ and $M$ such that

$$m\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \leq \|\mathbf{p}^{(k)} - \mathbf{p}\| \leq M\|\mathbf{p}^{(k)} - \mathbf{p}\|_1. \tag{2.25}$$

Let $E := \{\mathbf{x} \in \mathbb{R}^n\colon \|\mathbf{x}\|_1 = 1\}$. Then $E$ is a bounded and closed subset of $\mathbb{R}^n$, therefore Theorems 2.37 and 2.41 yield that the continuous function $\|\cdot\|$ takes its maximum and minimum on $E$. Let denote them by $M$ and $m$, respectively. Let $\mathbf{x} = (\mathbf{p}^{(k)} - \mathbf{p})/\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. Then $\mathbf{x} \in E$, and hence $m \leq \|\mathbf{x}\| \leq M$, which yields (2.25) after multiplication by $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. $\square$

**Theorem 2.45.** *Let $p_i^{(k)}$ and $p_i$ denote the $i$th components of the vectors $\mathbf{p}^{(k)}$ and $\mathbf{p}$, respectively. Then the sequence $\mathbf{p}^{(k)}$ converges to $\mathbf{p}$ if and only if $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$ as $k \to \infty$.*

**Proof.** Theorem 2.44 yields that $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 = \sum_{i=1}^n |p_i^{(k)} - p_i| \to 0$, which is satisfied exactly when $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$. $\square$

The set of $n \times n$-dimensional real matrices is denoted by $\mathbb{R}^{n \times n}$. Let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. The function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ defined by the formula

$$\|\mathbf{A}\| := \sup_{\mathbf{x} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

is called the *matrix norm* generated by the vector norm $\|\cdot\|$. We note that both the vector and the matrix norms are denoted by the same symbol. It is possible to show that in the definition of the matrix norm sup can be replaced by max, i.e., there exists a vector $\mathbf{x}$ such that $\|\mathbf{A}\| = \tfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$. The following properties of the matrix norm can be proved easily:

**Theorem 2.46.** *For every $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ it follows*

(i) $\|\mathbf{A}\| \geq 0$, *and $\|\mathbf{A}\| = 0$ if and only if $\mathbf{A} = \mathbf{0}$,*

(ii) $\|c\mathbf{A}\| = |c|\|\mathbf{A}\|$ *for all $c \in \mathbb{R}$,*

(iii) *(triangle inequality:) $\|\mathbf{A} + \mathbf{B}\| \leq \|\mathbf{A}\| + \|\mathbf{B}\|$,*

(iv) $\|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\|\|\mathbf{x}\|$, *for all $\mathbf{x} \in \mathbb{R}^n$,*

(v) $\|\mathbf{A}\mathbf{B}\| \leq \|\mathbf{A}\|\|\mathbf{B}\|$,

(vi) $\|\mathbf{A}\| = \sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\| = 1\}$.

**Proof.** The proof of statements (i), (ii) and (iii) are left for the reader. Part (iv) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{y} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|} = \|\mathbf{A}\|.$$

Using (iv) we get

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|,$$

hence

$$\|\mathbf{A}\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|.$$

Finally, (vi) follows from $\tfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \left\|\mathbf{A}\tfrac{\mathbf{x}}{\|\mathbf{x}\|}\right\|$. $\square$

We note that the matrix norm could be defined in a more general way: a function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ which satisfies parts (i)–(iii) of Theorem 2.46. Then there are matrix norms which are not generated by a vector norm. In this lecture note we will use only matrix norms generated by vector norms, so we use this notion in this restrictive sense.

We will need the notion of limits of matrix sequences later. We say that a matrix sequence $\mathbf{A}^{(k)}$ *converges* to a limit $\mathbf{A}$ if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$, where $\|\cdot\|$ is a matrix norm. The next theorem states that the limit of a matrix sequence is independent of the selection of the matrix norm, i.e., any matrix norms are equivalent.

**Theorem 2.47.** *Let $|\cdot|$ and $\|\cdot\|$ be two vector norms on $\mathbb{R}^n$, and we consider the corresponding matrix norms on $\mathbb{R}^{n \times n}$. Let $\mathbf{A}^{(k)}$ be a sequence in $\mathbb{R}^{n \times n}$. Then $\lim_{k \to \infty}|\mathbf{A}^{(k)} - \mathbf{A}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$.*

**Proof.** As in the proof of Theorem 2.44, it is enough to show that there exist nonnegative constants $l$ and $L$ such that

$$l|\mathbf{B}| \leq \|\mathbf{B}\| \leq L|\mathbf{B}|, \quad \mathbf{B} \in \mathbb{R}^{n \times n}.$$

From the proof of Theorem 2.44 we know that there exist positive constants $m$ and $M$ such that

$$m|\mathbf{x}| \leq \|\mathbf{x}\| \leq M|\mathbf{x}|, \quad \mathbf{x} \in \mathbb{R}^n.$$

Then

$$\frac{m}{M}|\mathbf{B}| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|} \leq \|\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|} = \frac{M}{m}|\mathbf{B}|,$$

which completes the proof. $\square$

For matrix norms we most frequently use the norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms. We have the following result for the computation of the corresponding matrix norms.

**Theorem 2.48.** *Let $\mathbf{A} = (a_{ij}) \in \mathbb{R}^{n \times n}$. Then the matrix norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms satisfy*

$$\|\mathbf{A}\|_1 = \max_{j=1,\ldots,n} \sum_{i=1}^n |a_{ij}|,$$

*and*

$$\|\mathbf{A}\|_\infty = \max_{i=1,\ldots,n} \sum_{j=1}^n |a_{ij}|.$$

**Proof.** We prove the first formula. The second formula is asked to be proved by the reader. Using the definition of the $\|\cdot\|_1$ vector norm and the triangle inequality we get

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n \left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n \sum_{j=1}^n |a_{ij} x_j| \\
&= \sum_{j=1}^n |x_j|\sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right)\sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \|\mathbf{x}\|_1,
\end{aligned}$$

hence $\|\mathbf{A}\|_1 \leq \max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|$. Suppose $\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}| = \sum_{i=1}^n |a_{ik}|$. We get the statement by multiplying $\mathbf{A}$ and $\mathbf{e}^{(k)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$, where $e_i^{(k)} = 0$ if $i \neq k$ and $e_k^{(k)} = 1$. Indeed, $\mathbf{A}\mathbf{e}^{(k)} = (a_{1k}, a_{2k}, \ldots, a_{nk})^T$, therefore $\|\mathbf{A}\mathbf{e}^{(k)}\|_1 = \sum_{i=1}^n |a_{ik}|$. $\square$

The following results generalize the properties of the convergence for the vector case. We formulate the statements without proofs.

**Theorem 2.49.**

1. *If the vector sequence $\mathbf{p}^{(k)}$ is convergent, then its limit is unique.*
2. *If $\mathbf{p}^{(k)} \to \mathbf{p}$ and $\mathbf{q}^{(k)} \to \mathbf{q}$, $\alpha, \beta \in \mathbb{R}$, then the sequence $\alpha\mathbf{p}^{(k)} + \beta\mathbf{q}^{(k)}$ is also convergent, and $\alpha\mathbf{p}^{(k)} + \beta\mathbf{q}^{(k)} \to \alpha\mathbf{p} + \beta\mathbf{q}$.*
3. *If $c_k \to c$ a real sequence and $\mathbf{p}^{(k)} \to \mathbf{p}$, then $c_k\mathbf{p}^{(k)} \to c\mathbf{p}$.*
4. *If $\mathbf{p}^{(k)} \to \mathbf{p}$, then $\mathbf{A}\mathbf{p}^{(k)} \to \mathbf{A}\mathbf{p}$ for all $\mathbf{A} \in \mathbb{R}^{n \times n}$.*
5. *(Cauchy's criterion for convergence) $\mathbf{p}^{(k)}$ is a convergent sequence if and only if it is a Cauchy sequence, i.e., for every $\varepsilon > 0$ there exists a $k_0 > 0$ such that $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| < \varepsilon$ for all $k, m > k_0$.*

We can also generalize Theorems 2.44, 2.45 and 2.49 for matrices. Using vector and matrix norms we can extend the Lagrange's Mean Value Theorem for vector valued functions.

**Theorem 2.50 (Lagrange's Mean Value Theorem).** *Let $\|\cdot\|$ be a fixed vector norm on $\mathbb{R}^n$, and consider the generated matrix norm. Let $E \subset \mathbb{R}^n$ be an open and convex set, $\mathbf{f}\colon E \to \mathbb{R}^n$ be continuously partially differentiable, $\mathbf{x}, \mathbf{y} \in E$. Then*

$$\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\| \leq \max_{t \in [0,1]}\|\mathbf{f}'(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))\| \cdot \|\mathbf{x} - \mathbf{y}\|.$$

**Proof.** We prove the statement only for the Euclidean norm $\|\cdot\| = \|\cdot\|_2$. Clearly, we can assume that $\mathbf{f}(\mathbf{x}) \neq \mathbf{f}(\mathbf{y})$. Let

$$\mathbf{h} := \frac{\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2}.$$

Then $\|\mathbf{h}\|_2 = 1$. Let $\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T$, $\mathbf{h} = (h_1, \ldots, h_n)^T$. We define the real function

$$g(t) := \mathbf{h}^T \mathbf{f}(\mathbf{y} + t(\mathbf{x} - \mathbf{y})) = \sum_{i=1}^n h_i f_i(\mathbf{y} + t(\mathbf{x} - \mathbf{y})).$$

Then, using the Lagrange's Mean Value Theorem for single variable functions and the chain rule, we get

$$\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) &= g(1) - g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T(\mathbf{x} - \mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})
\end{aligned}$$

for some $\xi \in (0, 1)$. Therefore the definition of $\mathbf{h}$, the vector form of the Cauchy-Bunyakovsky-Schwarz inequality, $\|\mathbf{h}\|_2 = 1$ and part (v) of Theorem 2.46 yield

$$\begin{aligned}
\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y}) \\
&\leq \|\mathbf{h}\|_2 \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))\|_2 \|\mathbf{x} - \mathbf{y}\|_2,
\end{aligned}$$

which concludes the proof. $\square$

### Exercises

1. Show that $\|\cdot\|_1$ and $\|\cdot\|_\infty$ satisfy the properties of the norms.
2. Compute $\|\mathbf{x}\|_1$, $\|\mathbf{x}\|_2$ and $\|\mathbf{x}\|_\infty$, and $\|\mathbf{A}\|_1$ and $\|\mathbf{A}\|_\infty$ for
   - (a) $\mathbf{x} = (3, -1, 0, 5)^T$,
   - (b) $\mathbf{x} = (-3, -2, -1, 4, -1)^T$,

   and
   - (c) $\mathbf{A} = \begin{pmatrix} -1 & 3 & -2 \\ 2 & -4 & 0 \\ 0 & 3 & 2 \end{pmatrix}$,
   - (d) $\mathbf{A} = \begin{pmatrix} -1 & 2 & 4 \\ 2 & -3 & 5 \\ 7 & -2 & 3 \end{pmatrix}$.
3. Draw the graphs of the curves defined by
   - (a) $\{\mathbf{x} \in \mathbb{R}^2\colon \|\mathbf{x}\|_1 = 1\}$,
   - (b) $\{\mathbf{x} \in \mathbb{R}^2\colon \|\mathbf{x}\|_\infty = 1\}$.
4. Prove parts (i)–(iii) of Theorem 2.46.
5. Prove part (ii) of Theorem 2.48.
6. Prove Theorem 2.49.

## 2.11. Fixed-Point Iteration in $n$-dimension

We can generalize the notion of the fixed point and the fixed-point iteration for multivariable functions.

**Example 2.51.** Consider the system

$$\begin{aligned}
4x_1 - e^{x_1 x_2} - 3 &= 0 \\
x_1 - x_2^2 - 3x_2 - 1 &= 0.
\end{aligned} \tag{2.26}$$

It is easy to check that $x_1 = 1$ and $x_2 = 0$ is a solution of the system. We rearrange (2.26) in the following way. We express $x_1$ from the first, and $x_2$ from the second equation:

$$\begin{aligned}
x_1 &= \tfrac{1}{4}(e^{x_1 x_2} + 3) \\
x_2 &= \tfrac{1}{3}(x_1 - x_2^2 - 1).
\end{aligned} \tag{2.27}$$

We can denote system (2.27) shortly as $\mathbf{x} = \mathbf{g}(\mathbf{x})$, where $\mathbf{x} = (x_1, x_2)^T$ and

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}. \tag{2.28}$$

We define an iteration to approximate the solutions of (2.27) as in the single variable case for $k = 0, 1, 2, \ldots$ by

$$\begin{aligned}
p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}} + 3) \\
p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)} - (p_2^{(k)})^2 - 1\right).
\end{aligned} \tag{2.29}$$

We have listed the first several terms of the sequences $p_1^{(k)}$ and $p_2^{(k)}$ starting from the initial value $p_1^{(0)} = -2$ and $p_2^{(0)} = -2$ in Table 2.12. We can observe that the sequences converge to 1 and 0, respectively. $\square$

Table 2.12: Fixed-point iteration

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
| 10 |  0.998806211 | -0.001469956 |
| 11 |  0.999633219 | -0.000398650 |
| 12 |  0.999900394 | -0.000122313 |

Defining the vector sequence $\mathbf{p}^{(k)} = (p_1^{(k)}, p_2^{(k)})^T$, iteration (2.29) can be written shortly as $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$. $\square$

Let $E \subset \mathbb{R}^n$, and consider a function $\mathbf{g}\colon E \to \mathbb{R}^n$. Similarly to the single variable case, we say that a vector $\mathbf{p} \in E$ is a *fixed point* of the function $\mathbf{g}$ if $\mathbf{p} = \mathbf{g}(\mathbf{p})$.

A function $\mathbf{g}\colon E \to \mathbb{R}^n$ is called a *contraction* on the set $E$ using the vector norm $\|\cdot\|$ if there exists a constant $0 \leq c < 1$ such that $\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq c\|\mathbf{x} - \mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in E$. Note that a contraction is always a continuous function.

**Theorem 2.52 (fixed-point theorem).** *Let $E \subset \mathbb{R}^n$ be a closed set, $\mathbf{g}\colon E \to E$, and let $\mathbf{g}$ be a contraction on $E$ using a vector norm $\|\cdot\|$. Then $\mathbf{g}$ has a unique fixed point $\mathbf{p} \in E$, and the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ for all $\mathbf{p}^{(0)} \in E$. The order of convergence is (at least) linear.*

**Proof.** First we show that $\mathbf{p}^{(k)}$ is a Cauchy sequence. Let $c$ be the Lipschitz constant of the function $\mathbf{g}$, and let $k > m$. Similarly to the single variable case, the definition of the sequence and the contraction property yield

$$\begin{aligned}
\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| &\leq \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}\| + \|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \cdots + \|\mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)}) - \mathbf{g}(\mathbf{p}^{(k-2)})\| + \|\mathbf{g}(\mathbf{p}^{(k-2)}) - \mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad + \cdots + \|\mathbf{g}(\mathbf{p}^{(m)}) - \mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \|\mathbf{p}^{(k-2)} - \mathbf{p}^{(k-3)}\| + \cdots + \|\mathbf{p}^{(m)} - \mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1} + c^{k-2} + \cdots + c^m)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1} + c^{k-m-2} + \cdots + 1)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i \|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\|.
\end{aligned}$$

Therefore we get $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \to 0$ as $m \to \infty$, hence $\mathbf{p}^{(k)}$ is a Cauchy sequence. Part (v) of Theorem 2.49 implies that $\mathbf{p}^{(k)}$ converges to a vector $\mathbf{p}$. Using the continuity of $\mathbf{g}$ we get $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)}) \to \mathbf{g}(\mathbf{p})$, and so $\mathbf{p} = \mathbf{g}(\mathbf{p})$, i.e., $\mathbf{p}$ is a fixed-point of $\mathbf{g}$.

The order of convergence is at least linear, since

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\| = \|\mathbf{g}(\mathbf{p}^{(k)}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|.$$

Suppose that $\mathbf{p}$ and $\bar{\mathbf{p}}$ both are fixed points of $\mathbf{g}$. Using the contraction property of $\mathbf{g}$ we have $\|\mathbf{p} - \bar{\mathbf{p}}\| = \|\mathbf{g}(\mathbf{p}) - \mathbf{g}(\bar{\mathbf{p}})\| \leq c\|\mathbf{p} - \bar{\mathbf{p}}\|$, and therefore, $\mathbf{p} = \bar{\mathbf{p}}$ follows. $\square$

**Theorem 2.53.** *Let $E \subset \mathbb{R}^n$ be an open set, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^1$, and let $\mathbf{p}$ be a fixed point of $\mathbf{g}$. If $\|\mathbf{g}'(\mathbf{p})\| < 1$ in a matrix norm generated by a vector norm $\|\cdot\|$, then the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges locally to $\mathbf{p}$.*

**Proof.** Since $E$ is an open set, there exists a radius $\bar{\delta} > 0$ such that $\{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| < \bar{\delta}\} \subset E$. Fix a $c$ such that $\|\mathbf{g}'(\mathbf{p})\| < c < 1$. The function $\mathbf{g}'$ is continuous at $\mathbf{p}$, therefore there exists $0 < \delta \leq \bar{\delta}$ such that $\|\mathbf{g}'(\mathbf{x})\| \leq c$ for all $\mathbf{x} \in V := \{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| \leq \delta\}$. The Lagrange's Mean Value Theorem (Theorem 2.50) yields

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq \max_{t \in (0,1)} \|\mathbf{g}'(\mathbf{x} + t(\mathbf{y} - \mathbf{x}))\| \cdot \|\mathbf{x} - \mathbf{y}\| \leq c\|\mathbf{x} - \mathbf{y}\|,$$

i.e., $\mathbf{g}$ is a contraction.

Now we show that the function $\mathbf{g}$ maps the set $V$ into itself. Let $\mathbf{x} \in V$. The contraction property of $\mathbf{g}$ implies $\|\mathbf{g}(\mathbf{x}) - \mathbf{p}\| = \|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{x} - \mathbf{p}\| < \delta$, hence $\mathbf{g}(\mathbf{x}) \in V$. If we restrict $\mathbf{g}$ to the set $V$, then this function satisfies the conditions of Theorem 2.52, therefore any fixed-point iteration with initial value from $V$ converges to $\mathbf{p}$. $\square$

**Example 2.54.** Compute the Jacobian matrix of the function $\mathbf{g}$ defined by (2.28) in Example 2.51:

$$\mathbf{g}'(\mathbf{x}) = \begin{pmatrix} \tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2} \\ \tfrac{1}{3} & -\tfrac{2}{3}x_2 \end{pmatrix}.$$

Its value at the fixed point of $\mathbf{g}$, i.e., at the point $(1, 0)^T$ is

$$\mathbf{g}'(1, 0) = \begin{pmatrix} 0 & \tfrac{1}{4} \\ \tfrac{1}{3} & 0 \end{pmatrix}.$$

Its 1-norm is $\|\mathbf{g}'(1, 0)\|_1 = \tfrac{1}{3} < 1$, hence Theorem 2.53 yields that the fixed-point iteration converges locally to $(1, 0)^T$. $\square$

**Theorem 2.55.** *Let $E \subset \mathbb{R}^n$, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^2$, $\mathbf{g}(\mathbf{p}) = \mathbf{p}$, and $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$. Then there exists a $\delta > 0$ such that the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ if $\|\mathbf{p}^{(0)} - \mathbf{p}\|_\infty < \delta$. Moreover, there exists a constant $c$ such that for all $k$ it follows $\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$, i.e., the iteration converges locally quadratically to $\mathbf{p}$.*

**Proof.** By the assumptions, $0 = \|\mathbf{g}'(\mathbf{p})\| < 1$, therefore, Theorem 2.53 yields that the fixed-point iteration is locally convergent.

Now we show that the order of convergence is quadratic. Consider the second-order Taylor approximation of the $i$th component function of $\mathbf{g}$ around $\mathbf{p} = (p_1, \ldots, p_n)^T$:

$$\begin{aligned}
g_i(x_1, \ldots, x_n) &= g_i(p_1, \ldots, p_n) + \sum_{j=1}^n \frac{\partial g_i(p_1, \ldots, p_n)}{\partial x_j}(x_j - p_j) \\
&\quad + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l).
\end{aligned}$$

Applying this relation for $(x_1, \ldots, x_n)^T = (p_1^{(k)}, \ldots, p_n^{(k)})^T$, and using that $p_i = g_i(\mathbf{p})$ and $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$, we get

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l).$$

Let $M$ be such that $\left|\dfrac{\partial^2 g_i(x_1, \ldots, x_n)}{\partial x_j \partial x_l}\right| \leq M$ for all $i, j, l = 1, \ldots, n$ in a neighborhood of $\mathbf{p}$ which contains all $\mathbf{p}^{(k)}$. The definition of $M$ implies

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2.$$

Since this holds for all $i = 1, \ldots, n$, we get

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the order of convergence is quadratic. $\square$

### Exercises

1. Rewrite the following system as a fixed-point problem, and find an approximate solution by using the fixed-point iteration from the starting value $(0, 0)^T$:
   - (a) $\begin{aligned} -2x^2 + 6x - y &= 4 \\ x^2 + y^3 - 5y &= 3 \end{aligned}$
   - (b) $\begin{aligned} 8x + \cos x - y^3 &= -7 \\ x^2 + 4y &= 8 \end{aligned}$
   - (c) $\begin{aligned} x^2 + 7x + y^2 - 4y &= 3 \\ 2x + y^3 + 4y &= -5 \end{aligned}$
   - (d) $\begin{aligned} \cos x - 5y &= 3 \\ x^2 - 6x + y^2 - 2y &= 4 \end{aligned}$
2. Compute the Jacobian matrix of the fixed-point functions we get in the problem mentioned above, and evaluate the norm of the Jacobian matrix at the fixed point obtained numerically.
3. Show that under the conditions of Theorem 2.55, the sequence $\mathbf{p}^{(k)}$ converges locally quadratically in any vector norm.

## 2.12. Newton's Method in $n$ dimensions

Let $U \subset \mathbb{R}^n$ be an open set, $\mathbf{f}\colon U \to \mathbb{R}^n$, and consider the nonlinear system

$$\mathbf{f}(\mathbf{x}) = \mathbf{0}.$$

Fix a vector $\mathbf{p}^{(k)} \in U$. As in the scalar case, we approximate $\mathbf{f}$ by its linear part $\mathbf{f}(\mathbf{p}^{(k)}) + \mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x} - \mathbf{p}^{(k)})$. Its root is $\bar{\mathbf{x}} = \mathbf{p}^{(k)} - (\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)})$, assuming that $\mathbf{f}'(\mathbf{p}^{(k)})$ is invertible. Therefore we define the *Newton's method* by the iteration

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.30}$$

**Theorem 2.56.** *Let $\mathbf{f} \in C^2$, $\mathbf{f}(\mathbf{p}) = \mathbf{0}$ and suppose the matrix $\mathbf{f}'(\mathbf{p})$ is invertible. Then the Newton's iteration (2.30) converges locally quadratically to $\mathbf{p}$.*

**Proof.** The Newton's method is a fixed-point iteration with the iteration function

$$\mathbf{g}(\mathbf{x}) = \mathbf{x} - (\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x}).$$

Let $(\mathbf{f}'(\mathbf{x}))^{-1} = (b_{ij}(\mathbf{x}))_{n \times n}$. Then

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l} = \delta_{il} := \begin{cases} 1, & i = l, \\ 0, & i \neq l. \end{cases} \tag{2.31}$$

Consider the $i$th component of $\mathbf{g}$: $g_i(\mathbf{x}) = x_i - \sum_{j=1}^n b_{ij}(\mathbf{x})f_j(\mathbf{x})$. Taking its partial derivative with respect to $x_l$ we get

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n \left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x}) + b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

At the point $\mathbf{x} = \mathbf{p}$ we get, using relations $f_j(\mathbf{p}) = 0$ and (2.31), that

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l} = 0.$$

Therefore, $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$, and hence Theorem 2.55 yields that the iteration is locally quadratically convergent. $\square$

Applying formula (2.30) we need to compute the inverse of a matrix. Instead of it, in practice, we do the following: Introduce the notation $\mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$, and rearrange equation (2.30) into the form

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}).$$

We solve it for $\mathbf{s}^{(k)}$, and let $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}$.

**Example 2.57.** Consider the system (2.26) of Example 2.51. We apply the Newton's method for this system starting from the initial value $(-1.5, -1.5)^T$. Table 2.13 lists the numerical result. We observe quick convergence to the true solution $\mathbf{p} = (1, 0)^T$. $\square$

Table 2.13: Newton's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ |
|---|---|---|
| 0 | $(-1.50000000000, -1.50000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.25000000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(\phantom{-}0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(\phantom{-}0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(\phantom{-}0.99999986610, -0.00000037764)^T$ | 1.313900e-06 |

### Exercises

1. Apply the Newton's method to solve the equations in Exercise 1 of Section 2.11.

## 2.13. Quasi-Newton Methods, Broyden's Method

The advantage of Newton's method is its fast speed of (local) convergence, but its disadvantage is that the computation of the Jacobian matrix is, in general, requires many arithmetic operations. Also, it requires matrix inversion or solution of a linear equation which is also computationally expensive. To avoid or reduce these problems we introduce *quasi-Newton methods* which are defined by

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.32}$$

Here the matrix $\mathbf{A}^{(k)}$ is an approximation of the Jacobian $\mathbf{f}'(\mathbf{p}^{(k)})$. Using different approximations, we get different classes of quasi-Newton methods.

One typical approach is to approximate the Jacobian matrix numerically. Let $\mathbf{e}^{(j)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$ be the $j$th standard unit vector, $h > 0$ be a small discretization constant, and define the components of $\mathbf{A}^{(k)}$ by the expressions

$$a_{ij}^{(k)} = \frac{f_i(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) - f_i(\mathbf{p}^{(k)})}{h}, \quad i, j = 1, \ldots, n. \tag{2.33}$$

The resulting quasi-Newton method is a straightforward generalization of the secant method for the vector case.

Next we introduce an other popular selection of the matrices $\mathbf{A}^{(k)}$. This method is called *Broyden's method*. This is a different generalization of the secant method for the vector case.

For scalar equations the secant method replaces the nonlinear equation $f(x) = 0$ by a linear equation

$$f(p_k) + a_k(x - p_k) = 0,$$

where $a_k = (f(p_k) - f(p_{k-1}))/(p_k - p_{k-1})$. We replace $k$ by $k + 1$, and we rewrite the equation, we get that $a_{k+1}$ solves the equation

$$a_{k+1}(p_{k+1} - p_k) = f(p_{k+1}) - f(p_k). \tag{2.34}$$

We will generalize this formula for the vector case.

Select an initial vector $\mathbf{p}^{(0)}$ and an initial matrix $\mathbf{A}^{(0)}$. For the selection of $\mathbf{A}^{(0)}$ we can use different strategies: it is possible to use the exact value $\mathbf{A}^{(0)} = \mathbf{f}'(\mathbf{p}^{(0)})$, or using the formula (2.33) we can compute an approximate derivative matrix at $\mathbf{p}^{(0)}$, or just select any invertible matrix $\mathbf{A}^{(0)}$.

Suppose $\mathbf{p}^{(k)}$ and $\mathbf{A}^{(k)}$ are already defined. Then we define $\mathbf{p}^{(k+1)}$ by formula (2.32). Similarly to equation (2.34), we require that $\mathbf{A}^{(k+1)}$ satisfies the so-called *secant equation*

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) = \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}). \tag{2.35}$$

We introduce the following notations

$$\mathbf{y}^{(k)} := \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}) \quad \text{and} \quad \mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}.$$

Using these notations, equations (2.32) and (2.35) are equivalent to

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.36}$$

and

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}, \tag{2.37}$$

respectively. First we solve (2.36) for $\mathbf{s}^{(k)}$ (assuming that $\mathbf{A}^{(k)}$ is invertible), so the problem is reduced to the selection of a matrix $\mathbf{A}^{(k+1)}$ which satisfies equation (2.37). Unfortunately, this equation does not determine the matrix $\mathbf{A}^{(k+1)}$ uniquely, since this equation is equivalent to $n$ number of scalar equations, but $\mathbf{A}^{(k+1)}$ is determined by $n^2$ number of components. Equation (2.37) requires that the linear operator $\mathbf{A}^{(k+1)}$ is defined on the one dimensional space spanned by the vector $\mathbf{s}^{(k)}$. But in the $n - 1$ directions orthogonal to the vector $\mathbf{s}^{(k)}$ the linear map is undetermined. Since in the $k + 1$-th step we "do not have new information" about the next linear operator, i.e., the next matrix, we define $\mathbf{A}^{(k+1)}$ so that its effect on this subspace be the same as the matrix $\mathbf{A}^{(k)}$. Therefore, in addition to equation (2.37), we require

$$\mathbf{A}^{(k+1)}\mathbf{z} = \mathbf{A}^{(k)}\mathbf{z}, \quad \text{for all } \mathbf{z} \perp \mathbf{s}^{(k)}. \tag{2.38}$$

Equations (2.37) and (2.38) together determine the matrix $\mathbf{A}^{(k+1)}$ uniquely. It can be checked easily (see Exercise 2) that the matrix

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{2.39}$$

satisfies both (2.37) and (2.38).

The recursion (2.32) requires the computation of $(\mathbf{A}^{(k)})^{-1}$. The next result is an efficient way to compute it.

**Theorem 2.58 (Sherman–Morrison–Woodbury).** *Let $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, $\mathbf{u}, \mathbf{v} \neq \mathbf{0}$ and $\mathbf{A} \in \mathbb{R}^{n \times n}$ be invertible. Then the matrix $\mathbf{A} + \mathbf{u}\mathbf{v}^T$ is invertible if and only if $1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u} \neq 0$, and then*

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)^{-1} = \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}}{1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}}$$

*holds.*

**Proof.** Let $\gamma \in \mathbb{R}$, and consider

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}.$$

Since $\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}$ is a scalar, we can rewrite the above relation as

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + (1 - \gamma - \gamma \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1},$$

which proves the statement. $\square$

A little computation and Theorem 2.58 give from (2.39)

$$\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1 + (\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{\left((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)} - \mathbf{s}^{(k)}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}.
\end{aligned} \tag{2.40}$$

Using iteration (2.40), if $(\mathbf{A}^{(k)})^{-1}$ is known, then only matrix multiplication is needed to compute $(\mathbf{A}^{(k+1)})^{-1}$, so $n^2$ number of arithmetic operation is enough to generate the next matrix. On the other hand, in the next chapter we will show that the matrix inversion needs $n^3$ number of operation, so here we have an efficient computational method.

It can be shown that the Broyden's method converges locally to a root $\mathbf{p}$ of $\mathbf{f}$ if $\mathbf{A}^{(0)}$ is close enough to $\mathbf{f}'(\mathbf{p})$, and the order of convergence is superlinear, i.e.,

$$\lim_{k \to \infty} \frac{\|\mathbf{p}^{(k+1)} - \mathbf{p}\|}{\|\mathbf{p}^{(k)} - \mathbf{p}\|} = 0.$$

We do not prove this result here. A possible definition of the Broyden's method is formulated in the next algorithm.

**Algorithm 2.59. Broyden's method**

```
INPUT:  f - function,
        p^(0) - initial value,
        h - step size for the approximation of A^(0),
        ‖·‖ - vector norm,
        TOL - tolerance,
        MAXIT - maximal iteration number,
OUTPUT: p - approximate root.

(computation of A = (a_ij) = A^(0))
for i = 1, ..., n do
    for j = 1, ..., n do
        a_ij ← (f_i(p^(0) + h·e^(j)) - f_i(p^(0)))/h
    end do
end do
A ← A^(-1)
q ← p^(0)
k ← 1                       (step size)
while k < MAXIT do
    s ← -A·f(q)
    p ← q + s
    if ‖s‖ < TOL do
        output(p)
        stop
    end do
    y ← f(p) - f(q)
    A ← A - (A·y - s)·s^T·A / (s^T·A·y)
    q ← p
    k ← k + 1
end do
output(Maximal iteration is exceeded.)
```

**Example 2.60.** Consider again the system (2.26) examined in Examples 2.51 and 2.57. The numerical results of Algorithm 2.59 with $h = 0.001$ and $TOL = 10^{-5}$ is shown in Table 2.14. We observe that the convergence of this sequence is slower than that for the Newton's method in Example 2.57. The last column indicates that the speed of the convergence here is superlinear. $\square$

Table 2.14: Broyden's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_\infty}$ |
|---|---|---|---|
| 0  | $(-1.5000000000, -1.5000000000)^T$  | 2.5000000000 |             |
| 1  | $(-1.2490215360, -0.5215363883)^T$  | 2.2490215360 | 0.8996086144 |
| 2  | $(-0.4968297655, -0.9366983828)^T$  | 1.4968297660 | 0.6655471022 |
| 3  | $(-0.3045368940, -0.3621731989)^T$  | 1.3045368940 | 0.8715332389 |
| 4  | $(\phantom{-}0.5414891937, -0.0587408442)^T$ | 0.4585108063 | 0.3514740046 |
| 5  | $(\phantom{-}0.9527177435, -0.0515250779)^T$ | 0.0515250779 | 0.1123748387 |
| 6  | $(\phantom{-}1.0003263340, \phantom{-}0.0319681269)^T$ | 0.0319681269 | 0.6204382061 |
| 7  | $(\phantom{-}1.0000051000, -0.0040567750)^T$ | 0.0040567750 | 0.1269006155 |
| 8  | $(\phantom{-}1.0000069210, -0.0000347010)^T$ | 0.0000347010 | 0.0085538489 |
| 9  | $(\phantom{-}1.0000001100, \phantom{-}0.0000012682)^T$ | 0.0000012682 | 0.0365458110 |
| 10 | $(\phantom{-}1.0000000050, \phantom{-}0.0000000576)^T$ | 0.0000000576 | 0.0453865979 |

### Exercises

1. Apply Broyden's method to the systems listed in Exercise 1 of Section 2.11.
2. Show that the matrix $\mathbf{A}^{(k+1)}$ defined by (2.39) satisfies equations (2.37) and (2.38).
