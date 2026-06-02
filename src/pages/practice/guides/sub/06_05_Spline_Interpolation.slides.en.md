## 6.5 Spline Interpolation

Let $a = x_0 < x_1 < \ldots < x_n = b$ be a division of $[a,b]$. The continuous function $S \colon [a,b] \to \mathbb{R}$ is a **spline function of degree $k$** corresponding to the mesh $\{x_i\}$ if $S \in C^{k-1}(a,b)$, and the restriction of $S$ to each interval $[x_i, x_{i+1}]$ is a polynomial of degree at most $k$. The first, second and third order spline functions are called **linear, quadratic** and **cubic spline functions**, respectively.

[figure: linear spline function — piecewise line segments]

[figure: a flexible spline (drafting spline) being used]

---

Given pairwise different mesh points $a = x_0 < x_1 < \ldots < x_n = b$ and corresponding function values $y_0, y_1, \ldots, y_n$. We are looking for a **cubic spline** function $S$ which interpolates the given data, i.e.,

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

Let $S_i$ denote the restriction of $S$ to $[x_i, x_{i+1}]$ $(i = 0, 1, \ldots, n - 1)$. [figure: pieces $S_0, S_i, S_{i+1}, S_{n-1}$]

---

The functions $S_i$ satisfy:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(7)} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \quad\text{(8)} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \quad\text{(9)} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \quad\text{(10)}
\end{aligned}$$

Since each $S_i$ has 4 parameters, $S$ is determined by $4n$ parameters. The number of conditions (7)–(10) is only $4n - 2$, so we add two more. A frequently used choice:

$$S_0''(x_0) = 0 \qquad \text{and} \qquad S_{n-1}''(x_n) = 0. \tag{11}$$

A cubic spline defined by (7)–(11) is called a **natural spline** function.

---

Consider the functions $S_i$ in the form:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

where $a_i, b_i, c_i, d_i$ are parameters to be determined. Then

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

These imply

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{and} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{12}$$

We also define

$$a_n := y_n, \qquad b_n := S'(x_n) \qquad \text{and} \qquad c_n := S''(x_n)/2. \tag{13}$$

(The derivatives in (13) denote left-sided derivatives.)

---

Substituting $x = x_{i+1}$:

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

With $\Delta x_i := x_{i+1} - x_i$ and $\Delta y_i := y_{i+1} - y_i$,

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{14}$$

From (9) and $b_{i+1} = S_{i+1}'(x_{i+1})$,

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{15}$$

for $i = 0, 1, \ldots, n - 2$. From (10) and the definition of $c_n$,

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

hence

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{16}$$

---

Substituting back into (14) and (15):

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1.
\end{aligned}$$

From the first equation,

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

and substituting into the second for $i = 0, 1, \ldots, n - 2$:

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{17}$$

---

Adding $c_0 = 0$ and $c_n = 0$ from (11), we get an $(n + 1)$-dimensional linear system $\mathbf{Ax} = \mathbf{b}$, $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

$$\mathbf{A} = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
\Delta x_0 & 2(\Delta x_0 + \Delta x_1) & \Delta x_1 & 0 & 0 & \cdots & 0 \\
0 & \Delta x_1 & 2(\Delta x_1 + \Delta x_2) & \Delta x_2 & 0 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & & \\
0 & \cdots & & & \Delta x_{n-2} & 2(\Delta x_{n-2} + \Delta x_{n-1}) & \Delta x_{n-1} \\
0 & \cdots & & & 0 & 0 & 1
\end{pmatrix}$$

a tridiagonal matrix, and

$$\mathbf{b} = \begin{pmatrix}
0 \\
3\frac{\Delta y_1}{\Delta x_1} - 3\frac{\Delta y_0}{\Delta x_0} \\
\vdots \\
3\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - 3\frac{\Delta y_{n-2}}{\Delta x_{n-2}} \\
0
\end{pmatrix}.$$

Since $\mathbf{A}$ is diagonally dominant, $\mathbf{Ax} = \mathbf{b}$ has a unique solution.

---

With the $c_i$ known, we can compute $d_i$ and $b_i$.

**Theorem.** *The problem of natural cubic spline interpolation has a unique solution.*

---

**Example.** Find the natural cubic spline interpolation of the data:

| $x_i$ | 0.0 | 0.5 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.9 | 0.1 | 1.5 | 0.0 | -0.8 | -0.2 |

The linear system for $c_i$ is

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0.5 & 3 & 1 & 0 & 0 & 0 \\
0 & 1 & 3 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 9.0 \\ -13.2 \\ 6.6 \\ 4.2 \\ 0
\end{pmatrix}.$$

---

**Example (cont.)** The resulting cubic polynomials are:

$$\begin{aligned}
S_0(x) &= 0.9 - 2.47117647x + 3.48470588x^3, \\
S_1(x) &= 0.1 + 0.142352940(x - 0.5) + 5.22705882(x - 0.5)^2 \\
&\quad - 3.96941176(x - 0.5)^3, \\
S_2(x) &= 1.5 - 1.31176471(x - 1.5) - 6.68117647(x - 1.5)^2 \\
&\quad + 6.60941177(x - 1.5)^3, \\
S_3(x) &= -3.03588235(x - 2) + 3.232941176(x - 2)^2 \\
&\quad - 0.997058823(x - 2)^3, \\
S_4(x) &= -0.8 + 0.438823529(x - 3) + 0.2417647059(x - 3)^2 \\
&\quad - 0.0805882353(x - 3)^3.
\end{aligned}$$

[figure: spline interpolation graph with data points]

---

Instead of (11) we can specify other boundary conditions, e.g.

$$S'(x_0) = y_0' \qquad \text{and} \qquad S'(x_n) = y_n', \tag{18}$$

where $y_0', y_n'$ are given. A cubic spline satisfying (18) is called a **clamped spline** function.

[figure: bird-shaped data ("Data")]
[figure: same data with Lagrange interpolation — large oscillation near the ends]
[figure: same data with spline interpolation — smooth fit]

---

**Theorem.** *Let $a = x_0 < x_1 < \ldots < x_n = b$ be mesh points and $y_0, y_1, \ldots, y_n$ function values, and let $S$ be the natural cubic spline interpolating function. Then*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{19}$$

*for every $f \in C^2(a,b)$ which also interpolates the data, i.e., $f(x_i) = y_i$, $i = 0, 1, \ldots, n$.*

**Proof.** Let $g(x) \equiv f(x) - S(x)$. Then $f''(x) = S''(x) + g''(x)$, and so

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

---

**Proof (cont.)** Since $\int_a^b (g''(x))^2 \, dx \geq 0$, it suffices to show $\int_a^b S''(x)g''(x) \, dx = 0$. Splitting the integral and integrating by parts:

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

Since $S$ is natural, $S''(a) = S''(b) = 0$. Since $S$ is cubic on each $[x_{i-1}, x_i]$, $S'''$ is constant there, and $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, since $g(x_i) = 0$. $\square$

---

**Theorem.** *Let $f \in C^4(a,b)$, $a = x_0 < x_1 < \ldots < x_n = b$ mesh points, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ function values, and $y_0' = f'(a)$, $y_n' = f'(b)$ derivative values, and let $S$ be the corresponding clamped cubic spline function. Then for $x \in [a,b]$*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*where $M_4 := \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h := \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k := \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*
