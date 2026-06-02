# Numerical Analysis — 6. Interpolation

*A Pannon Egyetem gyakorlatorientált infrastrukturális- és készségfejlesztési reformja — RRF-2.1.2.-21-2022-00007*

**Ferenc Hartung**
University of Pannonia, Department of Mathematics, Veszprém, Hungary
2025

*(Lecture slides, 70 slides. Figure positions are marked `[figure]`.)*

---


## 6.1 Lagrange Interpolation

Given pairwise different points

$$x_0, x_1, \ldots, x_n \in [a,b],$$

the so-called **mesh points** or **node points**, and corresponding function values

$$y_0, y_1, \ldots, y_n.$$

The basic problem of interpolation is to find a function $g$ from a certain class of functions which **interpolates** the given data, i.e., satisfies relations

$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

[figure: data points, then interpolating curve $g(x)$ through them]

---

We are looking for a polynomial $L_n$ of degree at most $n$ which satisfies

$$L_n(x_i) = y_i, \qquad i = 0, 1, \ldots, n. \tag{1}$$

This problem is called **Lagrange interpolation.** We show that this problem has a unique solution. The solution $L_n$ of this problem is called **Lagrange interpolating polynomial**, or shortly, **Lagrange polynomial.**

---

For $k = 0, 1, \ldots, n$ we define the polynomial of degree $n$ by

$$l_k(x) := \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}.$$

The polynomials $l_0, \ldots, l_n$ are called **Lagrange basis polynomials of degree $n$.** It follows from the definition that

$$l_k(x_i) = \begin{cases} 1, & \text{if } k = i, \\ 0, & \text{if } k \neq i. \end{cases}$$

It follows that the polynomial

$$L_n(x) := \sum_{k=0}^{n} y_k l_k(x)$$

is of degree at most $n$, and it solves the Lagrange interpolation problem (1).

---

**Theorem.** *The Lagrange interpolating problem has a unique solution which can be given by*

$$L_n(x) = \sum_{k=0}^{n} y_k \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}.$$

**Proof.** Suppose $L_n$ and $\tilde{L}_n$ are polynomials of degree at most $n$, and both are solutions of problem (1). We define the function

$$P(x) := L_n(x) - \tilde{L}_n(x).$$

Then $P$ is a polynomial of degree at most $n$, and

$$P(x_i) = 0 \quad \text{for all } i = 0, 1, \ldots, n,$$

i.e., $P$ has $n + 1$ different roots. But then the Fundamental theorem of algebra yields that $P$ is identically equal to 0, i.e., $L_n = \tilde{L}_n$. $\square$

---

**Example.** Consider the given data

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -2 | 0 | -2 | 2 |

Find the Lagrange polynomial which interpolates the above data. We get

$$\begin{aligned}
L_3(x) = &-2 \frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + 0 \frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\
&-2 \frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 2 \frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\
= &\ x^3 - 3x^2 + 2.
\end{aligned}$$

---

[figure: Lagrange interpolation of the function $\cos x$ using the mesh points $-\pi, 0, \pi$ and the mesh points $-\pi, -\pi/2, 0, \pi/2, \pi$, respectively — $L_2(x)$, $L_4(x)$ and $\cos x$]

---

**Theorem (Rolle).** *Let $f \colon [a,b] \to \mathbb{R}$ be a continuous function differentiable on the interval $(a,b)$, and*

$$f(a) = f(b).$$

*Then there exists $\xi \in (a,b)$ such that*

$$f'(\xi) = 0.$$

[figure: illustration of Rolle's theorem]

---

**Theorem (Generalized Rolle's Theorem).** *Let $f \in C^n(a,b)$, $a \leq x_0 < x_1 \cdots < x_n \leq b$, and suppose*

$$f(x_0) = f(x_1) = \cdots = f(x_n) = 0.$$

*Then there exists $\xi \in (x_0, x_n)$ such that*

$$f^{(n)}(\xi) = 0.$$

**Proof.** [figure: successive roots of $f$, $f'$, $f''$ (the $\eta_i$, $\theta_i$/$\lambda_i$) until $f^{(n)}$ has a single root $\xi$]

---

**Theorem.** *Let $f \in C^{n+1}(a,b)$, $x_i \in [a,b]$ $(i = 0, \ldots, n)$ be pairwise distinct mesh points and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $L_n(x)$ be the corresponding $n$th degree Lagrange polynomial. Then for every $x \in [a,b]$ there exists $\xi = \xi(x) \in \langle x, x_0, x_1, \ldots, x_n \rangle$ such that*

$$f(x) = L_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n).$$

**Proof.** If $x = x_i$ for some $i$, then the statement is obviously satisfied. Fix a number $x \in (a, b)$ such that $x \neq x_i$ for all $i = 0, \ldots, n$, and consider the function

$$g(t) := f(t) - L_n(t) - \frac{(t - x_0) \cdots (t - x_n)}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

Clearly, $g \in C^{n+1}$, and $g(x) = g(x_0) = g(x_1) = \cdots = g(x_n) = 0$. Then the generalized Rolle's Theorem yields that there exists $\xi \in \langle x, x_0, \ldots, x_n \rangle$ such that $g^{(n+1)}(\xi) = 0$. Since $L_n$ is a polynomial of degree at most $n$, its $(n + 1)$-st order derivative is identically 0, so

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \frac{(n+1)!}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

This gives the statement with $t = \xi$. $\square$

---

Now we consider the case when the mesh points are equidistant, i.e., $x_i = x_0 + ih$. The truncation error of the interpolation can be estimated by

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|(x - x_0) \cdots (x - x_n)|, \qquad x \in [x_0, x_n],$$

where $M_{n+1} = \max\{|f^{(n+1)}(t)|:\ t \in [x_0, x_n]\}$. Suppose $x \in (x_k, x_{k+1})$ for some $0 \leq k < n$. Then we have

$$|(x - x_k)(x - x_{k+1})| \leq \frac{h^2}{4},$$

---

[figure: mesh points $x_0, x_1, \ldots, x_k, x, x_{k+1}, \ldots, x_n$] and so

$$\begin{aligned}
\prod_{i=0}^{n} |x - x_i| &\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x - x_i) \prod_{i=k+2}^{n} (x_i - x) \\
&\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x_{k+1} - x_i) \prod_{i=k+2}^{n} (x_i - x_k) \\
&= \frac{h^{n+1}}{4} \prod_{i=0}^{k-1} (k + 1 - i) \prod_{i=k+2}^{n} (i - k) \\
&= \frac{h^{n+1}}{4}(k+1)!(n-k)! \\
&\leq \frac{h^{n+1}}{4} n!
\end{aligned}$$

---

**Theorem.** *Let $f \in C^{n+1}(a,b)$,*

$$x_i = a + i\frac{b-a}{n} \qquad (i = 0, \ldots, n)$$

*and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $x \in [a,b]$. Then*

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{4(n+1)} \left( \frac{b-a}{n} \right)^{n+1},$$

*where $M_{n+1} := \max\{|f^{(n+1)}(x)|:\ x \in [a,b]\}$.*

---

**Example.** Consider the function $f(x) = \cos x$. According to the previous theorem it follows for $x \in [-\pi, \pi]$

$$|f(x) - L_2(x)| \leq \frac{1}{12}\pi^3 \approx 2.5839, \quad \text{and} \quad |f(x) - L_4(x)| \leq \frac{1}{20}\left(\frac{\pi}{2}\right)^5 \approx 0.4782.$$

---

### Two-dimensional Lagrange interpolation

Let $f \colon [a,b] \times [c,d] \to \mathbb{R}$, and consider the division of the intervals $[a,b]$ and $[c,d]$ by $a = x_0 < x_1 < \ldots < x_n = b$ and $c = y_0 < y_1 < \ldots < y_m = d$. Let $z_{ij} = f(x_i, y_j)$, $i = 0, \ldots, n$, $j = 0, \ldots, m$. We define the following two-variable polynomial to interpolate the given data:

$$L_{n,m}(x, y) := \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y), \tag{2}$$

where $l_i$ and $\tilde{l}_j$ are the Lagrange basis polynomials of degree $n$ and $m$, respectively. The function $L_{n,m}$ satisfies

$$L_{n,m}(x_i, y_j) = z_{ij}$$

for all $i, j$. If $x$ is fixed, then $L_{n,m}(x, \cdot)$ is a polynomial of degree at most $m$; if $y$ is fixed, then $L_{n,m}(\cdot, y)$ is a polynomial of degree at most $n$.

---

**Example.** Consider the following function values:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Then

$$\begin{aligned}
L_{2,1}(x, y) = &\ 2 \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y-2}{0-2} - \frac{x(x-2)}{1(1-2)} \frac{y-2}{0-2} + \frac{x(x-1)}{2(2-1)} \frac{y-2}{0-2} \\
&+ \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y}{2} + 0 \frac{x(x-2)}{1(1-2)} \frac{y}{2} + 2 \frac{x(x-1)}{2(2-1)} \frac{y}{2} \\
= &-\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2.
\end{aligned}$$

This is of second order in $x$, and first order in $y$.

[figure: bivariate Lagrange interpolation surface]

---

