## 6.4 Hermite Interpolation

Let $f$ be a differentiable function, and given mesh points $x_i$ $(i = 0, \ldots, n)$. The **Hermite interpolation problem**: find a polynomial

$$g(x) = c_0 + c_1 x + \cdots + c_m x^m$$

which interpolates not only the function values $y_i = f(x_i)$, but also the derivative values $y_i' := f'(x_i)$. Therefore we are looking for $g$ which satisfies the interpolation conditions

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n.$$

[figure: data points with tangent segments, then interpolating curve $g(x)$]

---

The polynomial $g$ has $m + 1$ parameters, and the conditions specify $2(n + 1)$ equations, so we expect a unique solution among polynomials of degree

$$m = 2n + 1.$$

The solution is called the **Hermite interpolating polynomial** or shortly **Hermite polynomial**, denoted $H_{2n+1}$.

---

We use higher order divided differences where two consecutive mesh points may be equal:

$$\begin{aligned}
f&[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] \\
&= \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.
\end{aligned}$$

For example,

$$f[x_0, x_0, x_1] = \frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}, \qquad f[x_0, x_1, x_1] = \frac{f[x_1, x_1] - f[x_0, x_1]}{x_1 - x_0}.$$

---

**Theorem.** *The Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $(2n + 1)$, which is given by*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{4} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2 \cdots (x - x_{n-1})^2(x - x_n).
\end{aligned}$$

*Moreover, the truncation error is*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{5}$$

---

**Proof.** First the uniqueness. Suppose $H_{2n+1}$ and $\tilde{H}_{2n+1}$ are polynomials of degree at most $(2n + 1)$ both satisfying the Hermite conditions. Then

$$P := H_{2n+1} - \tilde{H}_{2n+1}$$

is a polynomial of degree at most $(2n + 1)$ with

$$P(x_i) = f(x_i) - f(x_i) = 0, \qquad P'(x_i) = f'(x_i) - f'(x_i) = 0,$$

i.e., $x_i$ is a double root of $P$ for all $i = 0, 1, \ldots, n$. Hence $P$ has $2(n + 1) = 2n + 2$ roots, so by the Fundamental Theorem of Algebra $P \equiv 0$, since $\deg P \leq 2n+1$.

---

**Proof (cont.)** Direct computation gives $H_{2n+1}(x_0) = f(x_0)$ and $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Select numbers $x_i' > x_i$ close to $x_i$ so that $\{x_i, x_i':\ i = 0, 1, \ldots, n\}$ are pairwise different, and let $L_{2n+1}$ be the Lagrange polynomial interpolating $f$ at these mesh points. [figure: mesh points $x_0, x_0', \ldots, x_i, x_i', x_{i+1}, x_{i+1}', \ldots, x_n, x_n'$]

---

**Proof (cont.)** Then

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

and

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

By definition of $L_{2n+1}$, $H_{2n+1}$ and continuity of the divided difference, for all $x$

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{as } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6}$$

and so

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

This proves (5).

---

**Proof (cont.)** From the uniqueness of the Lagrange polynomial, interchanging $x_0$, $x_0'$ and $x_1$, $x_1'$ keeps the polynomial the same, so

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

---

**Proof (cont.)** Taking the limit $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$ and using (6):

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n).
\end{aligned}$$

From this it is clear that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$. Similarly $H_{2n+1}(x_i) = f(x_i)$ and $H'_{2n+1}(x_i) = f'(x_i)$ for $i = 2, 3, \ldots, n$. $\square$

---

**Theorem.** *Let $f \in C^{2n+2}$. Then there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ such that*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \ldots (x - x_n)^2.$$

**Proof.** Let $x$ be a fixed number different from all mesh points, and define

$$g(z) = f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x)).$$

Clearly $g \in C^{2n+2}$, and $x_0, \ldots, x_n$ are double roots, $x$ a simple root of $g$. By the generalized Rolle's Theorem there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ with $g^{(2n+2)}(\xi) = 0$. This yields the statement. $\square$

---

**Corollary.** *Suppose $f \in C^{2n+2}$ and $x, x_0, \ldots, x_n$ are pairwise different numbers. Then there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ such that*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

---

**Table of divided differences for the Hermite polynomial**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

---

**Example.** Find the Hermite interpolating polynomial corresponding to the data:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | -1 | 1 | 29 |
| $y_i'$ | -5 | 7 | 61 |

We fill out the table of divided differences. The step-by-step computation (animation):

$$\frac{1-(-1)}{1-(-1)} = 1, \quad \frac{29-1}{2-1} = 28, \quad \frac{1-(-5)}{1-(-1)} = 3, \quad \frac{7-1}{1-(-1)} = 3,$$
$$\frac{28-7}{2-1} = 21, \quad \frac{61-28}{2-1} = 33, \quad \frac{3-3}{1-(-1)} = 0, \quad \frac{21-3}{2-(-1)} = 6,$$
$$\frac{33-21}{2-1} = 12, \quad \frac{6-0}{2-(-1)} = 2, \quad \frac{12-6}{2-(-1)} = 2, \quad \frac{2-2}{2-(-1)} = 0.$$

The full table:

$$
\begin{array}{rrrrrrr}
-1 & -1 & & & & & \\
-1 & -1 & -5 & & & & \\
1 & 1 & 1 & 3 & & & \\
1 & 1 & 7 & 3 & 0 & & \\
2 & 29 & 28 & 21 & 6 & 2 & \\
2 & 29 & 61 & 33 & 12 & 2 & 0
\end{array}
$$

So the Hermite polynomial $H_5$ is of degree 4:

$$H_5(x) = -1 - 5(x+1) + 3(x+1)^2 + 2(x+1)^2(x-1)^2 = 2x^4 - x^2 + x - 1.$$

---

