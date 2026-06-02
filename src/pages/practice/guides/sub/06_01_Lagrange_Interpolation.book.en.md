## 6.1. Lagrange Interpolation

Suppose we want to interpolate given data using a polynomial of degree $m$ of the form $g(x) = c_0 + c_1 x + c_2 x^2 + \cdots + c_m x^m$. This formula contains $m + 1$ number of parameters. In the basic problem of interpolation the conditions define $n + 1$ number of equations. It is natural to expect that the problem has a unique solution if $m = n$. We reformulate the problem: We are looking for a polynomial $L_n$ of degree at most $n$ which satisfies

$$L_n(x_i) = y_i, \qquad i = 0, 1, \ldots, n. \tag{6.1}$$

This problem is called *Lagrange interpolation.* We show that this problem has a unique solution. The solution $L_n$ of this problem is called *Lagrange interpolating polynomial*, or shortly, *Lagrange polynomial.* The proof for the existence is easy: we give its formula explicitly. For $k = 0, 1, \ldots, n$ we define the polynomial of degree $n$ by

$$l_k(x) := \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}. \tag{6.2}$$

The polynomials $l_0, \ldots, l_n$ are called *Lagrange basis polynomials of degree $n$.* It follows from the definition that

$$l_k(x_i) = \begin{cases} 1, & \text{if } k = i, \\ 0, & \text{if } k \neq i. \end{cases}$$

It follows that the polynomial

$$L_n(x) := \sum_{k=0}^{n} y_k l_k(x)$$

is of degree at most $n$, and it solves the Lagrange interpolation problem (6.1).

Now we show that the Lagrange interpolation problem (6.1) has a unique solution. Suppose $L_n$ and $\tilde{L}_n$ are polynomials of degree at most $n$, and both are solutions of problem (6.1). We define the function $P(x) := L_n(x) - \tilde{L}_n(x)$. Then $P$ is a polynomial of degree at most $n$, and $P(x_i) = 0$ for all $i = 0, 1, \ldots, n$, i.e., $P$ has $n + 1$ different roots. But then the Fundamental theorem of algebra yields that $P$ is identically equal to 0, i.e., $L_n = \tilde{L}_n$. We have proved the following theorem.

**Theorem 6.1.** *The Lagrange interpolating problem has a unique solution which can be given by*

$$L_n(x) = \sum_{k=0}^{n} y_k \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}. \tag{6.3}$$

**Example 6.2.** Consider the given data

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

Find the Lagrange polynomial which interpolates the data above. Since four data points are given, the Lagrange polynomial is of degree at most three. Using formula (6.3) we get

$$\begin{aligned}
L_3(x) = &-3 \frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\
&+ 3 \frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\
= &\ 3x^3 - 6x^2 - x + 5.
\end{aligned}$$

$\square$

The values $y_i$ associated to mesh points $x_i$ can be considered, in general, as values of a function $f$ at the mesh points, i.e., $y_i = f(x_i)$. For example, $f$ can be a physical quantity which is measured at finitely many points. Or $f$ can be a solution of a mathematical model which we solve by a numerical method, so the value of $f$ can be computed in finitely many points, and the obtained results are numerical approximations of the solution of the model. Or $f$ can be a function with a known formula, but its computation requires too many arithmetic operations, so we compute it exactly only at a few points. In all these cases we would possibly like to evaluate the function $f$ at a point $x$ which is not a mesh point. It is common to compute an interpolation polynomial $L_n$ associated to the given data, and we use $L_n(x)$ as an approximation of the function value $f(x)$. If $x$ is located outside the interval determined by the mesh points, we speak about *extrapolation*. We use the terminology *interpolation* if $x$ is located between two mesh points.

**Example 6.3.** Consider the function $f(x) = \cos x$ on the interval $[-\pi, \pi]$. Using the mesh points $-\pi$, $0$ and $\pi$, and the points $-\pi$, $-\pi/2$, $0$, $\pi/2$ and $\pi$ we have computed the associated Lagrange interpolating polynomials $L_2$ and $L_4$. The polynomials and the graph of the function $f$ can be seen in Figure 6.1. We can observe that in the case of 5 mesh points we get a better approximation of $f$ than using only 3 mesh points. It is also clear from the figure that outside the interval $[-\pi, \pi]$ the Lagrange polynomials are not close to the function $f$. $\square$

![Figure 6.1: Lagrange interpolation of the function $\cos x$ using the mesh points $-\pi, 0, \pi$ and the mesh points $-\pi, -\pi/2, 0, \pi/2, \pi$, respectively](figure_6_1.png)

*Figure 6.1: Lagrange interpolation of the function $\cos x$ using the mesh points $-\pi, 0, \pi$ and the mesh points $-\pi, -\pi/2, 0, \pi/2, \pi$, respectively*

For the proof of Theorem 6.5 below we will need the following result.

**Theorem 6.4 (Generalized Rolle's Theorem).** *Let $f \in C^n[a,b]$, $a \leq x_0 < x_1 \cdots < x_n \leq b$, and suppose $f(x_0) = f(x_1) = \cdots = f(x_n) = 0$. Then there exists $\xi \in (x_0, x_n)$ such that $f^{(n)}(\xi) = 0$.*

**Proof.** Using the assumptions $f(x_0) = f(x_1) = 0$, Rolle's Theorem (Theorem 2.3) yields that there exists $\eta_1 \in (x_0, x_1)$ such that $f'(\eta_1) = 0$. Similarly, using Rolle's Theorem for the intervals $[x_1, x_2]$, $\ldots$, $[x_{n-1}, x_n]$ we get that there exist numbers $\eta_2 \in (x_1, x_2)$, $\ldots$, $\eta_n \in (x_{n-1}, x_n)$ such that $f'(\eta_2) = \cdots = f'(\eta_n) = 0$. Consider then the intervals $[\eta_1, \eta_2]$, $\ldots$, $[\eta_{n-1}, \eta_n]$. Since at the end points of the intervals we have $f'(\eta_i) = 0$, Rolle's Theorem implies that there exist numbers $\theta_2 \in (\eta_1, \eta_2)$, $\ldots$, $\theta_n \in (\eta_{n-1}, \eta_n)$ for which $f''(\theta_2) = \cdots = f''(\theta_n) = 0$. Applying again Rolle's Theorem we get that the third derivative of $f$ has zeros at $n - 2$ points, the fourth derivative of $f$ vanishes at $n - 3$ points, etc., $f^{(n)}$ is zero at a point $\xi$. $\square$

**Theorem 6.5.** *Let $f \in C^{n+1}[a,b]$, $x_i \in [a,b]$ $(i = 0, \ldots, n)$ be pairwise distinct mesh points and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $L_n(x)$ be the corresponding Lagrange interpolating polynomial. Then for every $x \in [a,b]$ there exists $\xi = \xi(x) \in \langle x, x_0, x_1, \ldots, x_n \rangle$ such that*

$$f(x) = L_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n).$$

**Proof.** If $x = x_i$ for some $i$, then the statement is obviously satisfied. Fix a number $x \in (a, b)$ such that $x \neq x_i$ for all $i = 0, \ldots, n$, and consider the function

$$g(t) := f(t) - L_n(t) - \frac{(t - x_0) \cdots (t - x_n)}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

Clearly, $g \in C^{n+1}$, and $g(x) = g(x_0) = g(x_1) = \cdots = g(x_n) = 0$. Then the generalized Rolle's Theorem (Theorem 6.4) yields that there exists a number $\xi \in \langle x, x_0, \ldots, x_n \rangle$ such that $g^{(n+1)}(\xi) = 0$. Since $L_n$ is a polynomial of degree at most $n$, its $(n + 1)$-st order derivative is identically 0, so

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \frac{(n+1)!}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

This gives the statement with $t = \xi$. $\square$

Now we consider the case when the mesh points are equidistant, i.e., $x_i = x_0 + ih$. Theorem 6.5 yields that the truncation error of the interpolation can be estimated by

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|(x - x_0) \cdots (x - x_n)|, \qquad x \in [x_0, x_n], \tag{6.4}$$

where $M_{n+1} = \max\{|f^{(n+1)}(t)|:\ t \in [x_0, x_n]\}$. Suppose $x \in (x_k, x_{k+1})$ for some $0 \leq k < n$. Then we have

$$|(x - x_k)(x - x_{k+1})| \leq \frac{h^2}{4},$$

and so

$$\begin{aligned}
\prod_{i=0}^{n} |x - x_i| &\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x - x_i) \prod_{i=k+2}^{n} (x_i - x) \\
&\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x_{k+1} - x_i) \prod_{i=k+2}^{n} (x_i - x_k) \\
&= \frac{h^{n+1}}{4} \prod_{i=0}^{k-1} (k + 1 - i) \prod_{i=k+2}^{n} (i - k) \\
&= \frac{h^{n+1}}{4}(k+1)!(n-k)! \\
&\leq \frac{h^{n+1}}{4} n!
\end{aligned}$$

(See Exercise 4.) This and (6.4) imply the next result.

**Theorem 6.6.** *Let $f \in C^{n+1}[a,b]$, $x_i = a + i(b-a)/n$ $(i = 0, \ldots, n)$ and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $x \in [a,b]$. Then*

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{4(n+1)} \left( \frac{b-a}{n} \right)^{n+1},$$

*where $M_{n+1} := \max\{|f^{(n+1)}(x)|:\ x \in [a,b]\}$.*

**Example 6.7.** Consider again Example 6.3. According to the previous theorem it follows for $x \in [-\pi, \pi]$

$$|f(x) - L_2(x)| \leq \frac{1}{12}\pi^3 \approx 2.5839 \qquad \text{and} \qquad |f(x) - L_4(x)| \leq \frac{1}{20}\left(\frac{\pi}{2}\right)^5 \approx 0.4782.$$

Certainly, Theorem 6.6 gives an upper estimate of the truncation error. Figure 6.1 shows that the actual error can be significantly smaller. $\square$

The next result will be used in Chapter 7. We state the theorem without giving its proof.

**Theorem 6.8.** *Suppose $f \in C^{n+2}[a,b]$, $a = x_0 < \cdots < x_n = b$, and let*

$$\frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0) \cdots (x - x_n)$$

*be the truncation error of the Lagrange interpolation of degree $n$. Then the function $x \mapsto f^{(n+1)}(\xi(x))$ can be extended continuously for $x = x_i$, and it is differentiable for all $x \neq x_i$, and*

$$\frac{d}{dx} f^{(n+1)}(\xi(x)) = \frac{1}{n+2} f^{(n+2)}(\eta(x)),$$

*where $\eta(x) \in \langle x_0, \ldots, x_n, x \rangle$, moreover, $\frac{d}{dx} f^{(n+1)}(\xi(x))$ can be extended continuously for $x = x_i$ $(i = 0, 1, \ldots, n)$.*

Next we discuss the problem of interpolation for functions of two variables. We consider only the easiest case, we assume the function $f$ is defined on a rectangular domain. Let $f \colon [a,b] \times [c,d] \to \mathbb{R}$, and consider the division of the intervals $[a,b]$ and $[c,d]$ by $a = x_0 < x_1 < \ldots < x_n = b$ and $c = y_0 < y_1 < \ldots < y_m = d$. Let $z_{ij} = f(x_i, y_j)$, $i = 0, \ldots, n$, $j = 0, \ldots, m$. We define the following two-variable polynomial to interpolate the given data:

$$L_{n,m}(x, y) := \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y), \tag{6.5}$$

where $l_i$ and $\tilde{l}_j$ are the Lagrange basis polynomials of degree $n$ and $m$, respectively, corresponding to the mesh points $a = x_0 < x_1 < \ldots < x_n = b$ and $c = y_0 < y_1 < \ldots < y_m = d$ defined by (6.2). The function $L_{n,m}$ satisfies $L_{n,m}(x_i, y_j) = z_{ij}$ for all $i, j$. If $x$ is fixed, then $L_{n,m}(x, \cdot)$ is a polynomial of degree at most $m$. Conversely, if $y$ is fixed, then $L_{n,m}(\cdot, y)$ is a polynomial of degree at most $n$. The problem above is called *two-dimensional Lagrange interpolation* or *bivariate Lagrange interpolation* or *Lagrange interpolation of two variables.*

**Example 6.9.** Consider the following given function values:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Applying formula (6.5) we get the two-variable polynomial

$$\begin{aligned}
L_{2,1}(x, y) = &\ 2 \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y-2}{0-2} - \frac{x(x-2)}{1(1-2)} \frac{y-2}{0-2} + \frac{x(x-1)}{2(2-1)} \frac{y-2}{0-2} \\
&+ \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y}{2} + 0 \frac{x(x-2)}{1(1-2)} \frac{y}{2} + 2 \frac{x(x-1)}{2(2-1)} \frac{y}{2} \\
= &-\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2.
\end{aligned}$$

This is of second order in $x$, and first order in $y$. The graph of the polynomial can be seen in Figure 6.2. $\square$

![Figure 6.2: Bivariate Lagrange interpolation](figure_6_2.png)

*Figure 6.2: Bivariate Lagrange interpolation*

### Exercises

1. Compute and plot the graph of the Lagrange polynomials corresponding to the following data, and find the value of the Lagrange polynomial at $x = 1$:

   (a)

   | $x_i$ | -1 | 0 | 2 | 4 |
   |-------|----|----|----|----|
   | $y_i$ | 3 | -2 | 4 | -2 |

   (b)

   | $x_i$ | 0.1 | 0.4 | 1.3 | 2.5 | 2.8 |
   |-------|-----|-----|-----|-----|-----|
   | $y_i$ | 1.2 | 0.2 | -2.2 | 3.1 | 1.3 |

   (c)

   | $x_i$ | -0.5 | 0.0 | 1.5 | 2.0 | 3.0 | 3.5 |
   |-------|------|-----|-----|-----|-----|-----|
   | $y_i$ | -0.5 | 1.5 | 3.5 | 2.0 | 2.5 | 6.5 |

2. Show, without giving the formula of the Lagrange polynomial, that the system (6.1) has a unique solution.

3. Let $l_i(x)$ $(i = 0, 1, \ldots, n)$ be defined by (6.2). Show that for all $x$
   $$\sum_{i=0}^{n} l_i(x) = 1.$$

4. Prove that $(k+1)!(n-k)! \leq n!$ for all $k = 0, 1, \ldots, n - 1$.

5. What is the smallest positive integer $n$ for which the function $\cos x$ can be approximated by the Lagrange polynomial $L_n(x)$ for all $x \in [-\pi, \pi]$ with an error smaller than 0.001, assuming we use equidistant mesh points on the interval $[-\pi, \pi]$?

6. Give the two-dimensional Lagrange interpolating polynomial $L_{2,2}$ corresponding to the given data:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

