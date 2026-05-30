# Chapter 6

# Interpolation

Given pairwise different points $x_0,\ x_1,\ \ldots,\ x_n \in [a,b]$, the so-called *mesh points* or *node points*, and corresponding function values $y_0,\ y_1,\ \ldots,\ y_n$. The basic problem of interpolation is to find a function $g$ from a certain class of functions which *interpolates* the given data, i.e., satisfies relations

$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

The geometrical meaning of the problem is to find a function $g$ of given property whose graph goes through the points $(x_i, y_i)$ for all $i = 0, 1, \ldots, n$.

In this chapter we first study the case when $g$ is assumed to be a polynomial of certain order. This problem is called Lagrange interpolation. In Section 6.4 we consider a more general problem, the Hermite interpolation, when we interpolate not only function values but also derivative values. Finally, we discuss the spline interpolation.

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

## 6.3. Newton's Divided Difference Formula

The disadvantage of formula (6.3) is that if we add an additional mesh point, then the whole formula (6.3) must be recomputed. In this section we define a new formula for the Lagrange polynomial, and in this form it will be easy to add a new mesh point to the formula.

Suppose function values $y_i = f(x_i)$ are given for $i = 0, 1, \ldots, n$. First consider the relation

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x)).$$

By definition, $L_0(x) = f(x_0)$. Consider the difference $L_i(x) - L_{i-1}(x)$. It is a polynomial of degree at most $i$, and since $L_i$ and $L_{i-1}$ both satisfy the interpolating equations at $x_0$, $\ldots$, $x_{i-1}$, we have $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \ldots, i - 1)$. But then the Fundamental Theorem of Algebra yields

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

where $a_i \in \mathbb{R}$. If we substitute $x = x_i$ into this relation and use for $L_{i-1}(x_i)$ the formula (6.3), we get

$$\begin{aligned}
f(x_i) - \sum_{k=0}^{i-1} f(x_k) &\frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= a_i(x_i - x_0) \cdots (x_i - x_{i-1}).
\end{aligned}$$

So from this we get for $a_i$ that

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \cdot \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

Therefore, the Lagrange interpolating polynomial can be written as

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}). \tag{6.6}
\end{aligned}$$

We have to emphasize that this is the same polynomial as (6.3), only it is given by a different formula. The polynomial given by (6.6) is called *Newton's divided difference formula* or shortly *Newton polynomial.*

The advantage of formula (6.6) compared to (6.3) can be seen immediately. It is easy to add a new mesh point to the formula, we have the simple correction term:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

Another advantage is that a polynomial of the form (6.6) can be easily evaluated using the Horner's method. Furthermore, the degree of the polynomial can be determined in this form easily. If, for example, $f[x_0, x_1, \ldots, x_n] \neq 0$, then the polynomial is of degree $n$. In Algorithm 6.13 we present the computation of the coefficients of the Newton polynomial, i.e., the values $a_i = f[x_0, \ldots, x_i]$. In Algorithm 6.14 we formulate a method to evaluate the Newton polynomial using Horner's method.

**Algorithm 6.13. Computation of the coefficients of the Newton polynomial**

```
INPUT:   n - number of mesh points − 1
         x_i, (i = 0, 1, ..., n) - mesh points
         y_i, (i = 0, 1, ..., n) - function values
OUTPUT:  a_i, (i = 0, 1, ..., n) - coefficients of the Newton polynomial, where a_i
                                    is the coefficient of the ith-order term

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
```

Note that Algorithm 6.13 was organized so that only those divided differences are stored by the end of the algorithm which are needed for the Newton polynomial.

**Algorithm 6.14. Evaluation of the Newton polynomial**

```
INPUT:   n - number of mesh points − 1
         x_i, (i = 0, 1, ..., n) - mesh points
         a_i, (i = 0, 1, ..., n) - coefficients of the Newton polynomial
         x - the value where we evaluate the Newton polynomial
OUTPUT:  y - function value of the Newton polynomial at x

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
```

When we do the computation of the divided differences by hand, it is recommended to list the values of the divided differences in a triangular table as it can be seen in Table 6.1. The numbers in the first two columns are the input data, the rest of the numbers must be computed: a number is obtained so that we take the difference of the number to the left and above, and it is divided by the difference of the appropriate mesh points $x_k$. The numbers in frames in the diagonal of the table give the coefficients of the Newton polynomial in (6.6).

*Table 6.1: Computation of the divided differences by hand*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

**Example 6.15.** Consider again Example 6.2. We compute $L_3(x)$ in Newton's divided difference form, and we evaluate $L_3(0)$. First we compute the table of divided differences:

$$
\begin{array}{rrrrr}
-1 & -3 & & & \\
1 & 1 & 2 & & \\
2 & 3 & 2 & 0 & \\
3 & 29 & 26 & 12 & 3
\end{array}
$$

This yields that

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

and so $L_3(0) = -3 + 2 \cdot 1 + 3 \cdot 1(-1)(-2) = 5$. We can simplify this formula of $L_3$ and we get the same form of the polynomial as in Example 6.2: $L_3(x) = 3x^3 - 6x^2 - x + 5$. $\square$

Next we study again the truncation error of the interpolation. In Section 6.1 we obtained that it has the form $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n)$. This is certainly the same for the Newton's divided difference form of the interpolating polynomial, but here we give a different form of the same truncation error.

**Theorem 6.16.** *Let $x_i \in (a, b)$ $(i = 0, \ldots, n)$ be pairwise different mesh points and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $L_n(x)$ be the corresponding $n$th degree Lagrange interpolating polynomial. Then $f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n)$.*

**Proof.** Fix $x \in (a, b)$ which is different from each mesh points. (If $x = x_i$ for some $i$, then the statement is clearly true.) Add $x$ to the mesh points together with the function value $f(x)$. Let $L_{n+1}$ be the Lagrange interpolating polynomial corresponding to the extended data set. Then we have

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Now substitution $t = x$ proves the statement, since $f(x) = L_{n+1}(x)$. $\square$

This form of the truncation error has no practical importance, since in order to compute $f[x_0, \ldots, x_n, x]$ the exact value of $f(x)$ is needed. But its consequence is important. Comparing it to Theorem 6.5 we get the following result.

**Corollary 6.17.** *If $f \in C^n[a,b]$ and $x_i$ $(i = 0, \ldots, n)$ are pairwise different mesh points, then there exists $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$ such that*

$$f[x_0, x_1, \ldots, x_n] = \frac{1}{n!} f^{(n)}(\xi).$$

### Exercises

1. Repeat Exercise 1 of Section 6.1 using the Newton's divided difference form of the Lagrange interpolating polynomial.

2. Show that if $P$ is a polynomial of degree $n$, then
   $$P(x) = \sum_{i=0}^{n} P[x_0, \ldots, x_i] \prod_{k=0}^{i-1} (x - x_k).$$

3. Let $x_0, \ldots, x_n$ be pairwise different numbers. Show that if $P$ is a polynomial of degree $n$, then $P[x_0, \ldots, x_m] = 0$ for all $m > n$.

4. Prove that if $f(x) = c_0 + c_1 x + \cdots + c_n x^n$, then $c_n = f[x_0, x_1, \ldots, x_n]$.

5. Prove that

   $$f[x_0, x_1, \ldots, x_n] = \frac{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & f(x_0) \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & f(x_1) \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & f(x_n)
   \end{vmatrix}
   }{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & x_0^n \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & x_1^n \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & x_n^n
   \end{vmatrix}
   }.$$

6. Show that
   $$\lim_{(x_1, x_2, \ldots, x_n) \to (x_0, x_0, \ldots, x_0)} f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(x_0)}{n!}.$$
   (Hint: Use Corollary 6.17.)

7. Let $f \in C^2$. Define the following divided differences:
   $$f[x_0, x_0, x_1] := \lim_{x_2 \to x_0} f[x_0, x_2, x_1], \quad f[x_0, x_1, x_0] := \lim_{x_2 \to x_0} f[x_0, x_1, x_2],$$
   and
   $$f[x_1, x_0, x_0] := \lim_{x_2 \to x_0} f[x_1, x_0, x_2], \qquad f[x_0, x_0, x_0] = \frac{f''(x_0)}{2}.$$
   Show that the limits above exist, and the second divided differences satisfy:

   (a) $f[x_0, x_0, x_1] = \dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\lim_{(x_1, x_2) \to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) There exists $\xi \in \langle x_0, x_1 \rangle$ such that $f[x_0, x_0, x_1] = f''(\xi)/2$.

8. Check that Algorithm 6.13 gives back the coefficients of the Newton polynomial.

## 6.4. Hermite Interpolation

In this section we generalize the basic problem of interpolation. Let $f$ be a differentiable function, and given mesh points $x_i$ $(i = 0, \ldots, n)$. The so-called *Hermite interpolation* asks to find a polynomial $g(x) = c_0 + c_1 x + \cdots + c_m x^m$ which interpolates not only the function values $y_i = f(x_i)$, but also the derivative values $y_i' := f'(x_i)$. Therefore, we are looking for a polynomial $g$ of degree $m$ which satisfies the interpolation conditions

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n.$$

The geometrical meaning of this problem is that the graph of $g$ goes through the given points $(x_i, y_i)$ in a way that the tangent line of the graph at $x_i$ has a slope equal to the value $y_i'$. In the formula of the polynomial $g$ there are $m + 1$ parameters, and the interpolation conditions specify $2(n + 1)$ conditions. So we expect that the Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $m = 2n + 1$. The next theorem will prove this result. The solution of the Hermite interpolation problem is called *Hermite interpolating polynomial* or shortly *Hermite polynomial*, and it is denoted by $H_{2n+1}$.

In the next theorem we will use higher order divided differences where two consecutive mesh points can be equal: $f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$, where $x_0, \ldots, x_n$ are pairwise different mesh points. Its definition is the usual recursion:

$$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.$$

The divided difference with lower orders are defined in a similar manner until we get first divided differences with different or equal mesh points. Both are already defined in Section 6.2.

**Theorem 6.18.** *The Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $(2n + 1)$, which is given by*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{6.7} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \cdots (x - x_{n-1})^2(x - x_n).
\end{aligned}$$

*Moreover, the truncation error is*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{6.8}$$

**Proof.** First we discuss the uniqueness of the Hermite polynomial. Suppose $H_{2n+1}$ and $\tilde{H}_{2n+1}$ are polynomials of degree at most $(2n + 1)$ which both satisfy the equations of the Hermite interpolation problem. Then $P := H_{2n+1} - \tilde{H}_{2n+1}$ is a polynomial of degree at most $(2n + 1)$ which satisfies $P(x_i) = H_{2n+1}(x_i) - \tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$ and $P'(x_i) = H'_{2n+1}(x_i) - \tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, i.e., $x_i$ is a double root of $P$ for all $i = 0, 1, \ldots, n$. Hence $P$ has $2(n + 1) = 2n + 2$ number of roots, and hence the Fundamental Theorem of Algebra yields that $P$ is identically equal to 0, since the degree of $P$ is at most $(2n + 1)$. This implies that if the solution of the Hermite interpolation problem exists, it has to be unique.

Now we show that the polynomial $H_{2n+1}$ defined by (6.7) is a solution of the Hermite interpolation problem, and satisfies the error formula (6.8) too. Direct computation gives that $H_{2n+1}(x_0) = f(x_0)$ and $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Next we show that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$ hold too. To prove this, select numbers $\tilde{x}_i$ close to $x_i$ so that the numbers $\{x_i, \tilde{x}_i:\ i = 0, 1, \ldots, n\}$ be pairwise different, and let $L_{2n+1}$ be the Lagrange polynomial interpolating the function values of $f$ at these mesh points. Then

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

and

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

The definition of $L_{2n+1}$ and $H_{2n+1}$ and the continuity of the divided difference (see Exercise 3) yield for all $x$ that

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{as } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6.9}$$

and so

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

This proves relation (6.8). It follows from the uniqueness of the Lagrange polynomial that if we interchange $x_0$, $x_0'$ and $x_1$, $x_1'$, then the interpolating polynomial remains the same, so

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2', \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

But then taking the limit $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$ of both sides, and using relation (6.9), we get

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n).
\end{aligned}$$

But from this form it is clear that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$. In a similar manner we can show that $H_{2n+1}(x_i) = f(x_i)$ and $H'_{2n+1}(x_i) = f'(x_i)$ hold for $i = 2, 3, \ldots, n$. $\square$

**Theorem 6.19.** *Let $f \in C^{2n+2}$. Then there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ such that*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \cdots (x - x_n)^2.$$

**Proof.** The proof is similar to that of Theorem 6.5. Let $x$ be a number different from all mesh points, and define the function

$$g(z) := f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x)).$$

Clearly, $g \in C^{2n+2}$, and $x_0, \ldots, x_n$ are all double roots, and $x$ is a simple root of $g$. Therefore, the generalized Rolle's Theorem (Theorem 6.4) implies that there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ such that $g^{(2n+2)}(\xi) = 0$. This yields the statement of the theorem. $\square$

Comparing relations (6.8) and Theorem 6.19 we get the next result.

**Corollary 6.20.** *Suppose $f \in C^{2n+2}$, and $x, x_0, \ldots, x_n$ are pairwise different numbers. Then there exists $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$ such that*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

*Table 6.2: Table of divided differences for the Hermite polynomial*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

When we compute the divided differences required in formula (6.8), we list the numbers in a triangular table (see Table 6.2). This is similar to Table 6.1. The difference is that we list all mesh points and the corresponding function values twice, and in the third column the first divided differences corresponding to equal mesh points are the given derivative values. The rest of the numbers in the table are computed in a similar way as in Table 6.1. The framed numbers are used in formula (6.8) as the coefficients.

**Example 6.21.** Consider the following data:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Find the corresponding Hermite interpolating polynomial. We fill out the following table of divided differences:

$$
\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\
-1 & 2 & \boxed{3} & & & & \\
1 & 4 & 1 & -1 & & & \\
1 & 4 & \boxed{-5} & -3 & -1 & & \\
2 & 11 & 7 & 12 & 5 & 2 & \\
2 & 11 & \boxed{30} & 23 & 11 & 2 & 0
\end{array}
$$

In the third column the framed numbers are the input derivative values. Therefore, the Hermite polynomial is

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

so $H_5$ is a polynomial of degree 4. $\square$

### Exercises

1. Compute the Hermite interpolating polynomials corresponding to the following data:

   (a)

   | $x_i$ | -2 | -1 | 0 | 1 |
   |--------|----|----|----|----|
   | $y_i$ | 4 | 1 | 14 | -35 |
   | $y_i'$ | -1 | -2 | 43 | -394 |

   (b)

   | $x_i$ | -1 | 0 | 2 | 3 |
   |--------|----|----|----|----|
   | $y_i$ | 1 | 2 | 64 | -19 |
   | $y_i'$ | 3 | -1 | 111 | -301 |

2. Prove that if $P$ is a polynomial of degree at most $(2n + 2)$, $x_i$ $(i = 0, 1, \ldots, n)$ are pairwise different mesh points, and $H_{2n+1}$ is the Hermite polynomial corresponding to $P$ and the mesh points, then $P(x) = H_{2n+1}(x)$ for all $x$.

3. Let $f \in C^1$. Prove that
   $$\lim_{(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)} f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$$
   and
   $$\lim_{(x_0', \ldots, x_{n-1}') \to (x_0, \ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \ldots, x_{n-1}, x_{n-1}, x_n].$$

4. Let $i_0, i_1, \ldots, i_n$ be a rearrangement of the finite sequence $0, 1, \ldots, n$. Show that
   $$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \ldots, x_{i_n}, x_{i_n}].$$

5. The Hermite interpolation problem can be formulated in a general form: at the $i$th mesh point the first $k_i$ derivatives of a function is given, which we are to interpolate. We can generalize the method of this section. As an illustration we consider the following problem: given two mesh points $x_0$ and $x_1$, and a function $f \in C^3$. We are looking for a polynomial of minimal degree for which

   $$H(x_0) = f(x_0), \quad H'(x_0) = f'(x_0), \quad H''(x_0) = f''(x_0), \quad \text{and} \quad H(x_1) = f(x_1).$$

   (Here $k_0 = 2$ and $k_1 = 0$.) Show that the solution of this problem is the polynomial of degree at most 3

   $$H(x) := f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3.$$

## 6.5. Spline Interpolation

Let $a = x_0 < x_1 < \ldots < x_n = b$ be a division of the interval $[a,b]$. The continuous function $S \colon [a,b] \to \mathbb{R}$ is a *spline function of degree $k$* corresponding to the mesh $\{x_0, \ldots, x_n\}$ if $S \in C^{k-1}[a,b]$, and the restriction of $S$ to each interval $[x_i, x_{i+1}]$ is a polynomial of degree at most $k$. The first, second and third order spline functions are called *linear, quadratic* and *cubic spline functions*, respectively.

The simplest method of the interpolation is when linear splines are used to interpolate the given data. Geometrically this means that we connect the given data points $(x_i, y_i)$ by line segments. The error of the linear spline interpolation is discussed in Exercise 2.

The main disadvantage of the linear spline interpolation is that the interpolating function is not smooth, i.e., it is not differentiable. In case of cubic spline interpolation the interpolating function is twice continuously differentiable, which is smooth enough in practice. For the rest of this section we investigate cubic spline interpolation.

Suppose given pairwise different mesh points $a = x_0 < x_1 < \ldots < x_n = b$ and corresponding function values $y_0, y_1, \ldots, y_n$. We are looking for a cubic spline function $S$ which interpolates the given data, i.e., it satisfies

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

The restriction of $S$ to the interval $[x_i, x_{i+1}]$ is denoted by $S_i$ $(i = 0, 1, \ldots, n - 1)$. Since $S$ interpolates the points $(x_i, y_i)$, and it is twice continuously differentiable, therefore, the functions $S_i$ satisfy the following relations:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \tag{6.10} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \tag{6.11} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \tag{6.12} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \tag{6.13}
\end{aligned}$$

Since the polynomials $S_i$ are defined by 4 parameters, so $S$ is determined by $4n$ parameters. The number of conditions in (6.10)–(6.13) is only $4n - 2$, therefore, this problem has no unique solution yet. Hence we expect that two additional conditions can be given, and then we hope to have a unique solution. Frequently used conditions are the following

$$S_0''(x_0) = 0 \qquad \text{and} \qquad S_{n-1}''(x_n) = 0. \tag{6.14}$$

A cubic spline function defined by conditions (6.10)–(6.14) is called *natural spline* function. Next we show that the above problem has a unique natural spline solution. Consider the functions $S_i$ in the form:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

where $a_i, b_i, c_i$ and $d_i$ $(i = 0, 1, \ldots, n - 1)$ are parameters to be determined. Then

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

These equations imply

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{and} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{6.15}$$

With the help of relation (6.15) we define the constants $a_n$, $b_n$ and $c_n$ (which will be used later):

$$a_n := y_n, \qquad b_n := S'(x_n) \qquad \text{and} \qquad c_n := S''(x_n)/2. \tag{6.16}$$

(The derivatives in (6.16) denote left sided derivatives.) Substituting $x = x_{i+1}$ into the formula of $S_i$, and using equation (6.11) and relation $a_i = y_i$, we get

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Introduce the notations $\Delta x_i := x_{i+1} - x_i$ and $\Delta y_i := y_{i+1} - y_i$. Then

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{6.17}$$

Condition (6.12) and relation $b_{i+1} = S_{i+1}'(x_{i+1})$ yield

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{6.18}$$

for $i = 0, 1, \ldots, n - 2$. Using the definition of $b_n$ we get that (6.18) holds for $i = n - 1$ too. Similarly, from equation (6.13) and the definition of $c_n$ it follows

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

hence

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{6.19}$$

Substituting it back to equations (6.17) and (6.18) we get

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \tag{6.20} \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1. \tag{6.21}
\end{aligned}$$

From the first equation we express

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

and substituting it into the second equation for $i = 0, 1, \ldots, n - 2$ we get

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{6.22}$$

Note that in the derivation of equation (6.22) we have not used condition (6.14), so it holds for any cubic spline interpolation.

Equation (6.22) determines a system of $n - 1$ linear equations for $c_i$. We add equations $c_0 = 0$ and $c_n = 0$ following from condition (6.14) into it, so we get a $n + 1$-dimensional linear system of the form $\mathbf{Ax} = \mathbf{b}$, where $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

$$\mathbf{A} = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
\Delta x_0 & 2(\Delta x_0 + \Delta x_1) & \Delta x_1 & 0 & 0 & \cdots & 0 \\
0 & \Delta x_1 & 2(\Delta x_1 + \Delta x_2) & \Delta x_2 & 0 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & & \\
0 & \cdots & & & \Delta x_{n-2} & 2(\Delta x_{n-2} + \Delta x_{n-1}) & \Delta x_{n-1} \\
0 & \cdots & & & 0 & 0 & 1
\end{pmatrix}$$

is a tridiagonal matrix and

$$\mathbf{b} = \begin{pmatrix}
0 \\
3\frac{\Delta y_1}{\Delta x_1} - 3\frac{\Delta y_0}{\Delta x_0} \\
\vdots \\
3\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - 3\frac{\Delta y_{n-2}}{\Delta x_{n-2}} \\
0
\end{pmatrix}.$$

Since $\mathbf{A}$ is diagonally dominant, the system $\mathbf{Ax} = \mathbf{b}$ has a unique solution. Then with the help of $c_i$, we can compute the coefficients $d_i$ and $b_i$. Therefore, the problem has a unique solution. We note that, in practice, the tridiagonal system $\mathbf{Ax} = \mathbf{b}$ can be solved efficiently by the special Gaussian elimination defined in Algorithm 3.37. We have proved the following result.

**Theorem 6.22.** *The problem of natural cubic spline interpolation has a unique solution.*

**Example 6.23.** Find the natural cubic spline interpolation of the following given data:

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

Using the notations introduced before the linear system of the coefficients $c_i$ is

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
1 & 3 & 0.5 & 0 & 0 & 0 \\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 15.6 \\ -35.4 \\ 22.5 \\ 0 \\ 0
\end{pmatrix}.$$

Solving it and substituting back $c_i$ into (6.19) and (6.20) we get the coefficients $d_i$ and $b_i$. The resulting natural spline function is:

$$\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.0423265(x - 1)^2 - 21.3975104(x - 1)^3, \\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\end{aligned}$$

![Figure 6.3: Natural spline interpolation](figure_6_3.png)

*Figure 6.3: Natural spline interpolation*

The graph of this function can be seen in Figure 6.3. $\square$

Instead of condition (6.14) we can specify other boundary conditions for $S$. Now we investigate condition

$$S'(x_0) = y_0' \qquad \text{and} \qquad S'(x_n) = y_n', \tag{6.23}$$

where $y_0'$ and $y_n'$ are given numbers. This means that we know (specify) the slope of the tangent line of $S$ at the end points of the interval. A cubic spline which satisfy conditions (6.23) is called *clamped spline* function. In this case equations (6.22) hold. We need to add two equations in order to get a well-posed linear system. Using relations $b_0 = S'(x_0) = y_0'$, equation (6.20) implies

$$y_0' \Delta x_0 + c_0(\Delta x_0)^2 + \frac{c_1 - c_0}{3}(\Delta x_0)^2 = \Delta y_0,$$

hence

$$2c_0 \Delta x_0 + c_1 \Delta x_0 = 3\frac{\Delta y_0}{\Delta x_0} - 3y_0'. \tag{6.24}$$

Expressing $b_{n-1}$ from equation (6.20) and substituting it into (6.21), and using relation $b_n = y_n'$ we get

$$\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - \frac{2c_{n-1} + c_n}{3}\Delta x_{n-1} + \Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

hence

$$c_{n-1}\Delta x_{n-1} + 2c_n \Delta x_{n-1} = 3y_n' - 3\frac{\Delta y_{n-1}}{\Delta x_{n-1}}. \tag{6.25}$$

If in the system $\mathbf{Ax} = \mathbf{b}$ of the natural spline interpolation we replace the first equation with equation (6.24) and the last equation with (6.25), then it is easy to see that the coefficient matrix remains to be diagonally dominant, therefore, the modified system has a unique solution. So the cubic spline interpolation problem together with conditions (6.23) has a unique clamped spline function solution.

The natural cubic spline interpolating functions have the following minimal property, which means that the spline interpolating functions are the smoothest among all possible interpolating functions.

**Theorem 6.24.** *Let $a = x_0 < x_1 < \ldots < x_n = b$ be mesh points and $y_0, y_1, \ldots, y_n$ be function values, and let $S$ be the natural cubic spline interpolating function associated to the given data. Then*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{6.26}$$

*for every $f \in C^2[a,b]$, which also interpolates the given data, i.e., $f(x_i) = y_i$ for $i = 0, 1, \ldots, n$.*

**Proof.** Introduce the function $g(x) := f(x) - S(x)$. Then $f''(x) = S''(x) + g''(x)$, and so

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

Since $\int_a^b (g''(x))^2 \, dx \geq 0$, the statement of the theorem follows if we show

$$\int_a^b S''(x)g''(x) \, dx = 0.$$

Dividing the integral into the sum of integral over the intervals of consecutive mesh points, and using integration by parts we get

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

Since $S$ is a natural spline function, we have $S''(a) = S''(b) = 0$. Since $S$ is a third order polynomial over the intervals $[x_{i-1}, x_i]$, its third derivative is constant, which can be factored out in front of the integral. But $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, since $g(x_i) = 0$ for $i = 0, 1, \ldots, n$. This completes the proof. $\square$

The next theorem investigates the error of the clamped cubic spline interpolation. We present the result without proof.

**Theorem 6.25.** *Let $f \in C^4[a,b]$, $a = x_0 < x_1 < \ldots < x_n = b$ mesh points, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ function values, and $y_0' = f'(a)$ and $y_n' = f'(b)$ derivative values, and let $S$ be the corresponding clamped cubic spline function. Then for $x \in [a,b]$ it follows*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*where $M_4 := \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h := \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k := \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*

We note that the error of the natural cubic spline interpolating function can be given similarly.

### Exercises

1. Find the formula of the linear spline function interpolating the data $(x_i, y_i)$, $i = 0, 1, \ldots, n$ on the interval $[x_i, x_{i+1}]$.

2. Given a continuous function $f \colon [a,b] \to \mathbb{R}$, and let $S_h$ be a linear spline interpolating function of the function $f$ corresponding to equidistant mesh of the interval $[a,b]$ with step size $h$.

   (a) Show that $\max\{|f(x) - S_h(x)|:\ x \in [a,b]\} \to 0$, as $h \to 0$.

   (b) Let $f \in C^1[a,b]$. Show that
   $$|f(x) - S_h(x)| \leq M_1 h, \qquad x \in [a,b],$$
   where $M_1 := \max\{|f'(x)|:\ x \in [a,b]\}$.

3. Compute and draw the graph of the natural cubic spline function corresponding to the data given in Exercise 1 of Section 6.1.

4. Show that for a cubic spline interpolation any of the conditions
   $$S'(x_0) = f'(x_0) \qquad \text{or} \qquad S'(x_n) = f'(x_n)$$
   determines the cubic spline interpolation function uniquely.

5. Show that if $S$ is the clamped cubic spline corresponding to given mesh points $a = x_0 < x_1 < \ldots < x_n = b$, function values $y_0, y_1, \ldots, y_n$, and derivative values $y_0'$ and $y_n'$, then $S$ satisfies inequality (6.26) for all functions $f \in C^2[a,b]$ which satisfy $f(x_i) = y_i$ for all $i$, $f'(a) = y_0'$ and $f'(b) = y_n'$.
