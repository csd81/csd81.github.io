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

