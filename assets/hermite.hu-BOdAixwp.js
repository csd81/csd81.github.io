const n=`## 6.1. Lagrange Interpolation

Suppose we want to interpolate given data using a polynomial of degree $m$ of the form $g(x) = c_0 + c_1 x + c_2 x^2 + \\cdots + c_m x^m$. This formula contains $m + 1$ number of parameters. In the basic problem of interpolation the conditions define $n + 1$ number of equations. It is natural to expect that the problem has a unique solution if $m = n$. We reformulate the problem: We are looking for a polynomial $L_n$ of degree at most $n$ which satisfies

$$L_n(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n. \\tag{6.1}$$

This problem is called *Lagrange interpolation.* We show that this problem has a unique solution. The solution $L_n$ of this problem is called *Lagrange interpolating polynomial*, or shortly, *Lagrange polynomial.* The proof for the existence is easy: we give its formula explicitly. For $k = 0, 1, \\ldots, n$ we define the polynomial of degree $n$ by

$$l_k(x) := \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)}. \\tag{6.2}$$

The polynomials $l_0, \\ldots, l_n$ are called *Lagrange basis polynomials of degree $n$.* It follows from the definition that

$$l_k(x_i) = \\begin{cases} 1, & \\text{if } k = i, \\\\ 0, & \\text{if } k \\neq i. \\end{cases}$$

It follows that the polynomial

$$L_n(x) := \\sum_{k=0}^{n} y_k l_k(x)$$

is of degree at most $n$, and it solves the Lagrange interpolation problem (6.1).

Now we show that the Lagrange interpolation problem (6.1) has a unique solution. Suppose $L_n$ and $\\tilde{L}_n$ are polynomials of degree at most $n$, and both are solutions of problem (6.1). We define the function $P(x) := L_n(x) - \\tilde{L}_n(x)$. Then $P$ is a polynomial of degree at most $n$, and $P(x_i) = 0$ for all $i = 0, 1, \\ldots, n$, i.e., $P$ has $n + 1$ different roots. But then the Fundamental theorem of algebra yields that $P$ is identically equal to 0, i.e., $L_n = \\tilde{L}_n$. We have proved the following theorem.

**Theorem 6.1.** *The Lagrange interpolating problem has a unique solution which can be given by*

$$L_n(x) = \\sum_{k=0}^{n} y_k \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)}. \\tag{6.3}$$

**Example 6.2.** Consider the given data

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

Find the Lagrange polynomial which interpolates the data above. Since four data points are given, the Lagrange polynomial is of degree at most three. Using formula (6.3) we get

$$\\begin{aligned}
L_3(x) = &-3 \\frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \\frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\\\
&+ 3 \\frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \\frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\\\
= &\\ 3x^3 - 6x^2 - x + 5.
\\end{aligned}$$

$\\square$

The values $y_i$ associated to mesh points $x_i$ can be considered, in general, as values of a function $f$ at the mesh points, i.e., $y_i = f(x_i)$. For example, $f$ can be a physical quantity which is measured at finitely many points. Or $f$ can be a solution of a mathematical model which we solve by a numerical method, so the value of $f$ can be computed in finitely many points, and the obtained results are numerical approximations of the solution of the model. Or $f$ can be a function with a known formula, but its computation requires too many arithmetic operations, so we compute it exactly only at a few points. In all these cases we would possibly like to evaluate the function $f$ at a point $x$ which is not a mesh point. It is common to compute an interpolation polynomial $L_n$ associated to the given data, and we use $L_n(x)$ as an approximation of the function value $f(x)$. If $x$ is located outside the interval determined by the mesh points, we speak about *extrapolation*. We use the terminology *interpolation* if $x$ is located between two mesh points.

**Example 6.3.** Consider the function $f(x) = \\cos x$ on the interval $[-\\pi, \\pi]$. Using the mesh points $-\\pi$, $0$ and $\\pi$, and the points $-\\pi$, $-\\pi/2$, $0$, $\\pi/2$ and $\\pi$ we have computed the associated Lagrange interpolating polynomials $L_2$ and $L_4$. The polynomials and the graph of the function $f$ can be seen in Figure 6.1. We can observe that in the case of 5 mesh points we get a better approximation of $f$ than using only 3 mesh points. It is also clear from the figure that outside the interval $[-\\pi, \\pi]$ the Lagrange polynomials are not close to the function $f$. $\\square$

For the proof of Theorem 6.5 below we will need the following result.

**Theorem 6.4 (Generalized Rolle's Theorem).** *Let $f \\in C^n[a,b]$, $a \\leq x_0 < x_1 \\cdots < x_n \\leq b$, and suppose $f(x_0) = f(x_1) = \\cdots = f(x_n) = 0$. Then there exists $\\xi \\in (x_0, x_n)$ such that $f^{(n)}(\\xi) = 0$.*

**Proof.** Using the assumptions $f(x_0) = f(x_1) = 0$, Rolle's Theorem (Theorem 2.3) yields that there exists $\\eta_1 \\in (x_0, x_1)$ such that $f'(\\eta_1) = 0$. Similarly, using Rolle's Theorem for the intervals $[x_1, x_2]$, $\\ldots$, $[x_{n-1}, x_n]$ we get that there exist numbers $\\eta_2 \\in (x_1, x_2)$, $\\ldots$, $\\eta_n \\in (x_{n-1}, x_n)$ such that $f'(\\eta_2) = \\cdots = f'(\\eta_n) = 0$. Consider then the intervals $[\\eta_1, \\eta_2]$, $\\ldots$, $[\\eta_{n-1}, \\eta_n]$. Since at the end points of the intervals we have $f'(\\eta_i) = 0$, Rolle's Theorem implies that there exist numbers $\\theta_2 \\in (\\eta_1, \\eta_2)$, $\\ldots$, $\\theta_n \\in (\\eta_{n-1}, \\eta_n)$ for which $f''(\\theta_2) = \\cdots = f''(\\theta_n) = 0$. Applying again Rolle's Theorem we get that the third derivative of $f$ has zeros at $n - 2$ points, the fourth derivative of $f$ vanishes at $n - 3$ points, etc., $f^{(n)}$ is zero at a point $\\xi$. $\\square$

**Theorem 6.5.** *Let $f \\in C^{n+1}[a,b]$, $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ be pairwise distinct mesh points and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $L_n(x)$ be the corresponding Lagrange interpolating polynomial. Then for every $x \\in [a,b]$ there exists $\\xi = \\xi(x) \\in \\langle x, x_0, x_1, \\ldots, x_n \\rangle$ such that*

$$f(x) = L_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Proof.** If $x = x_i$ for some $i$, then the statement is obviously satisfied. Fix a number $x \\in (a, b)$ such that $x \\neq x_i$ for all $i = 0, \\ldots, n$, and consider the function

$$g(t) := f(t) - L_n(t) - \\frac{(t - x_0) \\cdots (t - x_n)}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

Clearly, $g \\in C^{n+1}$, and $g(x) = g(x_0) = g(x_1) = \\cdots = g(x_n) = 0$. Then the generalized Rolle's Theorem (Theorem 6.4) yields that there exists a number $\\xi \\in \\langle x, x_0, \\ldots, x_n \\rangle$ such that $g^{(n+1)}(\\xi) = 0$. Since $L_n$ is a polynomial of degree at most $n$, its $(n + 1)$-st order derivative is identically 0, so

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \\frac{(n+1)!}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

This gives the statement with $t = \\xi$. $\\square$

Now we consider the case when the mesh points are equidistant, i.e., $x_i = x_0 + ih$. Theorem 6.5 yields that the truncation error of the interpolation can be estimated by

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!}|(x - x_0) \\cdots (x - x_n)|, \\qquad x \\in [x_0, x_n], \\tag{6.4}$$

where $M_{n+1} = \\max\\{|f^{(n+1)}(t)|:\\ t \\in [x_0, x_n]\\}$. Suppose $x \\in (x_k, x_{k+1})$ for some $0 \\leq k < n$. Then we have

$$|(x - x_k)(x - x_{k+1})| \\leq \\frac{h^2}{4},$$

and so

$$\\begin{aligned}
\\prod_{i=0}^{n} |x - x_i| &\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x - x_i) \\prod_{i=k+2}^{n} (x_i - x) \\\\
&\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x_{k+1} - x_i) \\prod_{i=k+2}^{n} (x_i - x_k) \\\\
&= \\frac{h^{n+1}}{4} \\prod_{i=0}^{k-1} (k + 1 - i) \\prod_{i=k+2}^{n} (i - k) \\\\
&= \\frac{h^{n+1}}{4}(k+1)!(n-k)! \\\\
&\\leq \\frac{h^{n+1}}{4} n!
\\end{aligned}$$

(See Exercise 4.) This and (6.4) imply the next result.

**Theorem 6.6.** *Let $f \\in C^{n+1}[a,b]$, $x_i = a + i(b-a)/n$ $(i = 0, \\ldots, n)$ and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $x \\in [a,b]$. Then*

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{4(n+1)} \\left( \\frac{b-a}{n} \\right)^{n+1},$$

*where $M_{n+1} := \\max\\{|f^{(n+1)}(x)|:\\ x \\in [a,b]\\}$.*

**Example 6.7.** Consider again Example 6.3. According to the previous theorem it follows for $x \\in [-\\pi, \\pi]$

$$|f(x) - L_2(x)| \\leq \\frac{1}{12}\\pi^3 \\approx 2.5839 \\qquad \\text{and} \\qquad |f(x) - L_4(x)| \\leq \\frac{1}{20}\\left(\\frac{\\pi}{2}\\right)^5 \\approx 0.4782.$$

Certainly, Theorem 6.6 gives an upper estimate of the truncation error. Figure 6.1 shows that the actual error can be significantly smaller. $\\square$

The next result will be used in Chapter 7. We state the theorem without giving its proof.

**Theorem 6.8.** *Suppose $f \\in C^{n+2}[a,b]$, $a = x_0 < \\cdots < x_n = b$, and let*

$$\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0) \\cdots (x - x_n)$$

*be the truncation error of the Lagrange interpolation of degree $n$. Then the function $x \\mapsto f^{(n+1)}(\\xi(x))$ can be extended continuously for $x = x_i$, and it is differentiable for all $x \\neq x_i$, and*

$$\\frac{d}{dx} f^{(n+1)}(\\xi(x)) = \\frac{1}{n+2} f^{(n+2)}(\\eta(x)),$$

*where $\\eta(x) \\in \\langle x_0, \\ldots, x_n, x \\rangle$, moreover, $\\frac{d}{dx} f^{(n+1)}(\\xi(x))$ can be extended continuously for $x = x_i$ $(i = 0, 1, \\ldots, n)$.*

Next we discuss the problem of interpolation for functions of two variables. We consider only the easiest case, we assume the function $f$ is defined on a rectangular domain. Let $f \\colon [a,b] \\times [c,d] \\to \\mathbb{R}$, and consider the division of the intervals $[a,b]$ and $[c,d]$ by $a = x_0 < x_1 < \\ldots < x_n = b$ and $c = y_0 < y_1 < \\ldots < y_m = d$. Let $z_{ij} = f(x_i, y_j)$, $i = 0, \\ldots, n$, $j = 0, \\ldots, m$. We define the following two-variable polynomial to interpolate the given data:

$$L_{n,m}(x, y) := \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} l_i(x) \\tilde{l}_j(y), \\tag{6.5}$$

where $l_i$ and $\\tilde{l}_j$ are the Lagrange basis polynomials of degree $n$ and $m$, respectively, corresponding to the mesh points $a = x_0 < x_1 < \\ldots < x_n = b$ and $c = y_0 < y_1 < \\ldots < y_m = d$ defined by (6.2). The function $L_{n,m}$ satisfies $L_{n,m}(x_i, y_j) = z_{ij}$ for all $i, j$. If $x$ is fixed, then $L_{n,m}(x, \\cdot)$ is a polynomial of degree at most $m$. Conversely, if $y$ is fixed, then $L_{n,m}(\\cdot, y)$ is a polynomial of degree at most $n$. The problem above is called *two-dimensional Lagrange interpolation* or *bivariate Lagrange interpolation* or *Lagrange interpolation of two variables.*

**Example 6.9.** Consider the following given function values:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Applying formula (6.5) we get the two-variable polynomial

$$\\begin{aligned}
L_{2,1}(x, y) = &\\ 2 \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y-2}{0-2} - \\frac{x(x-2)}{1(1-2)} \\frac{y-2}{0-2} + \\frac{x(x-1)}{2(2-1)} \\frac{y-2}{0-2} \\\\
&+ \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y}{2} + 0 \\frac{x(x-2)}{1(1-2)} \\frac{y}{2} + 2 \\frac{x(x-1)}{2(2-1)} \\frac{y}{2} \\\\
= &-\\frac{1}{2}x^2 y + \\frac{5}{2}x^2 + \\frac{3}{2}xy - \\frac{11}{2}x - \\frac{1}{2}y + 2.
\\end{aligned}$$

This is of second order in $x$, and first order in $y$. The graph of the polynomial can be seen in Figure 6.2. $\\square$

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

<details class="reveal-solution"><summary>Show solution</summary>

**(a)** For the data $x_i = (-1,0,2,4)$, $y_i = (3,-2,4,-2)$ the basis polynomials are
$$l_0(x) = -\\frac{x(x-2)(x-4)}{15}, \\quad l_1(x) = \\frac{(x+1)(x-2)(x-4)}{8},$$
$$l_2(x) = -\\frac{(x+1)x(x-4)}{12}, \\quad l_3(x) = \\frac{(x+1)x(x-2)}{40},$$
and $L_3(x) = 3l_0(x) - 2l_1(x) + 4l_2(x) - 2l_3(x)$. At $x = 1$: $l_0(1) = -0.2$, $l_1(1) = 0.75$, $l_2(1) = 0.5$, $l_3(1) = -0.05$, hence
$$L_3(1) = 3(-0.2) - 2(0.75) + 4(0.5) - 2(-0.05) = 0.$$

**(b)** For $x_i = (0.1,0.4,1.3,2.5,2.8)$, evaluating each $l_i(1)$ (e.g. $l_0(1) = \\frac{(0.6)(-0.3)(-1.5)(-0.8)}{(-0.3)(-1.2)(-2.4)(-2.7)} \\approx -0.0926$) and forming $L_4(1) = \\sum_i y_i l_i(1)$ gives the interpolated value at $x = 1$.

**(c)** For $x_i = (-0.5,0,1.5,2,3,3.5)$ the same procedure (compute each $l_i(1)$, then $L_5(1) = \\sum_i y_i l_i(1)$) yields the value at $x = 1$.

</details>

2. Show, without giving the formula of the Lagrange polynomial, that the system (6.1) has a unique solution.

<details class="reveal-solution"><summary>Show solution</summary>

The conditions $L_n(x_i) = y_i$ give $n+1$ linear equations for the coefficients $c_0, \\ldots, c_n$ of $L_n(x) = c_0 + c_1 x + \\cdots + c_n x^n$. The coefficient matrix is the Vandermonde matrix $V$ with rows $(1, x_i, x_i^2, \\ldots, x_i^n)$, whose determinant is
$$\\det(V) = \\prod_{0 \\le i < j \\le n}(x_j - x_i).$$
Since the $x_i$ are pairwise distinct, $\\det(V) \\ne 0$, so $V$ is invertible and the system has a unique solution. $\\square$

</details>

3. Let $l_i(x)$ $(i = 0, 1, \\ldots, n)$ be defined by (6.2). Show that for all $x$
   $$\\sum_{i=0}^{n} l_i(x) = 1.$$

<details class="reveal-solution"><summary>Show solution</summary>

Apply Lagrange interpolation to the constant function $f(x) = 1$. Its interpolant is
$$L_n(x) = \\sum_{i=0}^n f(x_i) l_i(x) = \\sum_{i=0}^n l_i(x).$$
But $f(x) = 1$ is itself a polynomial of degree $0 \\le n$ that interpolates the data, so by uniqueness $L_n(x) = 1$. Hence $\\sum_{i=0}^n l_i(x) = 1$. $\\square$

</details>

4. Prove that $(k+1)!(n-k)! \\leq n!$ for all $k = 0, 1, \\ldots, n - 1$.

<details class="reveal-solution"><summary>Show solution</summary>

We have
$$\\frac{n!}{(k+1)!(n-k)!} = \\binom{n}{k+1}.$$
For $0 \\le k+1 \\le n$ the binomial coefficient is a positive integer, so $\\binom{n}{k+1} \\ge 1$, which gives $(k+1)!(n-k)! \\le n!$. $\\square$

</details>

5. What is the smallest positive integer $n$ for which the function $\\cos x$ can be approximated by the Lagrange polynomial $L_n(x)$ for all $x \\in [-\\pi, \\pi]$ with an error smaller than 0.001, assuming we use equidistant mesh points on the interval $[-\\pi, \\pi]$?

<details class="reveal-solution"><summary>Show solution</summary>

By Theorem 6.6, with $M_{n+1} = 1$ for $\\cos x$,
$$|f(x) - L_n(x)| \\le \\frac{1}{4(n+1)}\\left(\\frac{2\\pi}{n}\\right)^{n+1}.$$
Testing values: for $n = 8$ this is $\\approx 0.0031 > 0.001$, while for $n = 10$ it is $\\approx 0.00014 < 0.001$. So $n = 10$ suffices (with $n = 9$ to be checked numerically).

</details>

6. Give the two-dimensional Lagrange interpolating polynomial $L_{2,2}$ corresponding to the given data:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

<details class="reveal-solution"><summary>Show solution</summary>

Use degree-2 Lagrange bases in $x$ and $y$:
$$l_0(x) = \\frac{(x-1)(x-2)}{2}, \\quad l_1(x) = -x(x-2), \\quad l_2(x) = \\frac{x(x-1)}{2},$$
and $\\tilde{l}_0(y) = \\frac{(y-1)(y-2)}{2}$, $\\tilde{l}_1(y) = -y(y-2)$, $\\tilde{l}_2(y) = \\frac{y(y-1)}{2}$. Then
$$L_{2,2}(x,y) = \\sum_{i=0}^2 \\sum_{j=0}^2 z_{ij}\\, l_i(x)\\, \\tilde{l}_j(y),$$
which expands using the given $z_{ij}$ values $(3,1,0;\\,2,-1,0;\\,2,3,1)$.

</details>
`,e=`## 6.1. Lagrange-interpoláció

Tegyük fel most, hogy a bevezetésben leírt interpolációs alapfeladatban $g(x) = c_0 + c_1 x + c_2 x^2 + \\cdots + c_m x^m$ alakú. Ebben a képletben $m + 1$ ismeretlen szerepel, és az interpolációs feltételek $n + 1$ egyenletet határoznak meg. Természetes azt várni, hogy a feladatnak az $m = n$ esetben lesz egyértelmű megoldása. Fogalmazzuk újra a feladatot: Keresünk egy olyan $L_n$ legfeljebb $n$-edfokú polinomot, amelyre

$$L_n(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n. \\tag{6.1}$$

Ez a *Lagrange-féle interpolációs feladat.* Megmutatjuk, hogy ennek a feladatnak mindig létezik egyértelmű megoldása. A feladatot teljesítő $L_n$ polinomot *Lagrange-féle interpolációs polinomnak*, vagy röviden Lagrange-polinomnak nevezzük. Azt, hogy ilyen polinom létezik, könnyű belátni: megadjuk $L_n$ explicit képletét az alappontok és az adott függvényértékek segítségével. Definiáljuk $k = 0, 1, \\ldots, n$-re az

$$l_k(x) \\equiv \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)} \\tag{6.2}$$

$n$-edfokú polinomokat. Az $l_0, \\ldots, l_n$ polinomokat *Lagrange-féle $n$-edfokú alappolinomoknak* nevezzük. A polinom definíciójából nyilvánvaló, hogy

$$l_k(x_i) = \\begin{cases} 1, & \\text{ha } k = i, \\\\ 0, & \\text{ha } k \\neq i. \\end{cases}$$

Ebből következik, hogy az $L_n(x) \\equiv \\sum_{k=0}^{n} y_k l_k(x)$ függvény egy legfeljebb $n$-edfokú polinom, és megoldása a (6.1) interpolációs problémának.

Most belátjuk, hogy a Lagrange-féle interpolációs feladatnak csak egy megoldása van. Tegyük fel, hogy $L_n$ és $\\tilde{L}_n$ mindketten legfeljebb $n$-edfokú polinomok és teljesítik a (6.1) egyenleteket. Definiáljuk a $P(x) \\equiv L_n(x) - \\tilde{L}_n(x)$ függvényt. Ekkor $P$ is legfeljebb $n$-edfokú polinom, és $P(x_i) = 0$ minden $i = 0, 1, \\ldots, n$-re, azaz $P$-nek $n + 1$ különböző gyöke van. Ekkor viszont az algebra alaptételéből következik, hogy $P$ azonosan 0 polinom, azaz $L_n = \\tilde{L}_n$. Beláttuk tehát a következő állítást:

**6.1. tétel.** *A Lagrange-féle interpolációs feladatnak létezik egyértelmű megoldása, amely az*

$$L_n(x) = \\sum_{k=0}^{n} y_k \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)} \\tag{6.3}$$

*alakban adható meg.*

**6.2. példa.** Tekintsük az

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

alappontokat és a hozzá tartozó függvényértékeket. Határozzuk meg az adatokhoz tartozó Lagrange-féle interpolációs polinomot! Mivel négy alappont van, ezért harmadfokú Lagrange-polinomot keresünk. A (6.3) képlet szerint

$$\\begin{aligned}
L_3(x) = &-3 \\frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \\frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\\\
&+ 3 \\frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \\frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\\\
= &\\ 3x^3 - 6x^2 - x + 5.
\\end{aligned}$$

$\\square$

Az $x_i$ értékekhez hozzárendelt $y_i$ értékeket általában természetes módon tekinthetjük egy $f$ függvény értékeinek az alappontokban, azaz $y_i = f(x_i)$. Például lehet $f$ egy fizikai mennyiség, amelyet véges sok időpontban mértünk. Vagy lehet $f$ egy matematikai modell megoldása, amelyet csak numerikus módszerekkel tudunk megoldani, és a megoldást, azaz az $f$ függvény értékét csak véges sok pontban tudjuk megkapni, pontosabban a közelítő értékét megkapni. Vagy lehet, hogy $f$ egy olyan függvény, amelynek képlete ill. kiszámítási szabálya ismert, csak „túl sok" számolást igényel $f$-et kiértékelni, így csak néhány pontban számoljuk ki $f$ pontos értékét. Mindhárom esetben igény lehet arra, hogy $f$ értékét kiszámoljuk, pontosabban megbecsüljük a már ismert véges sok függvényérték segítségével egy alapponton kívüli pontban is. Erre egyszerű módszer az, ha interpoláljuk a véges sok megadott pontot, és az interpolációs polinom adott pontbeli értékével (amit könnyű kiszámolni) közelítjük a kívánt függvényértéket. Az interpoláció kifejezést használjuk abban az értelemben, hogy az interpoláló függvényt (polinomot) számítjuk ki, de szokás interpoláción az interpolációs polinom segítségével történő függvényérték közelítést is érteni. Ez utóbbi esetben ha az a pont, amelyben az $f$ függvényt akarjuk becsülni az alappontok által meghatározott intervallumon kívül esik, akkor *extrapolációról* szokás beszélni, interpoláción szigorúan véve azt értjük, amikor a megadott pont az alappontok között helyezkedik el.

**6.3. példa.** Tekintsük az $f(x) = \\cos x$ függvényt a $[-\\pi, \\pi]$ intervallumon. A $-\\pi$, $0$ és $\\pi$ illetve $-\\pi$, $-\\pi/2$, $0$, $\\pi/2$ és $\\pi$ osztópontokat használva meghatároztuk az $L_2$ és $L_4$ másod- ill. negyedfokú Lagrange-féle interpolációs polinomokat. A polinomok és az $f$ függvény grafikonja a 6.1 ábrán látható. Az ábrából megállapíthatjuk, hogy az 5 osztópontot használva $f$ jobb közelítését kapjuk, mint akkor, ha csak 3 pontot használunk. Az is nyilvánvaló ebben az esetben, hogy a $[-\\pi, \\pi]$ intervallumon kívül a polinomok nem jó közelítései az eredeti függvénynek. $\\square$

A 6.5 tétel bizonyításához szükségünk lesz a következő segédtételre.

**6.4. tétel (Általánosított Rolle-tétel).** *Legyen $f \\in C^n(a,b)$, $a \\leq x_0 < x_1 \\cdots < x_n \\leq b$, és tegyük fel, hogy $f(x_0) = f(x_1) = \\cdots = f(x_n) = 0$. Ekkor létezik olyan $\\xi \\in (x_0, x_n)$, hogy $f^{(n)}(\\xi) = 0$.*

**Bizonyítás.** A feltételek szerint $f(x_0) = f(x_1) = 0$, így a Rolle-tétel (2.3 tétel) szerint létezik olyan $\\eta_1 \\in (x_0, x_1)$, hogy $f'(\\eta_1) = 0$. Hasonlóan az $[x_1, x_2]$, $\\ldots$, $[x_{n-1}, x_n]$ intervallumokra alkalmazva a Rolle-tételt kapjuk, hogy léteznek olyan $\\eta_2 \\in (x_1, x_2)$, $\\ldots$, $\\eta_n \\in (x_{n-1}, x_n)$ számok, amelyekre $f'(\\eta_2) = \\cdots = f'(\\eta_n) = 0$. Tekintsük ezután az $[\\eta_1, \\eta_2]$, $\\ldots$, $[\\eta_{n-1}, \\eta_n]$ intervallumokat. Mivel ezek végpontjaiban $f'(\\eta_i) = 0$, ezért a Rolle-tétel szerint léteznek olyan $\\theta_2 \\in (\\eta_1, \\eta_2)$, $\\ldots$, $\\theta_n \\in (\\eta_{n-1}, \\eta_n)$ számok, amelyekre $f''(\\theta_2) = \\cdots = f''(\\theta_n) = 0$. Ismételten alkalmazva a Rolle-tételt, kapjuk, hogy $f$ harmadik deriváltja $n - 2$ pontban, $f$ negyedik deriváltja $n - 3$ pontban stb., $f^{(n)}$ pedig egy pontban egyenlő nullával. $\\square$

**6.5. tétel.** *Legyen $f \\in C^{n+1}(a,b)$, $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor bármely $x \\in [a,b]$-hez létezik olyan $\\xi = \\xi(x) \\in \\langle x, x_0, x_1, \\ldots, x_n \\rangle$ szám, hogy*

$$f(x) = L_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Bizonyítás.** Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvalóan teljesül. Rögzítsünk egy $x \\in (a, b)$ számot, amelyre $x \\neq x_i$ minden $i = 0, \\ldots, n$-re, és tekintsük a

$$g(t) \\equiv f(t) - L_n(t) - \\frac{(t - x_0) \\cdots (t - x_n)}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x))$$

függvényt. Nyilvánvalóan $g \\in C^{n+1}$, és $g(x) = g(x_0) = g(x_1) = \\cdots = g(x_n) = 0$. Ekkor alkalmazva az általánosított Rolle-tételt (6.4 tétel), kapjuk, hogy létezik olyan $\\xi \\in \\langle x, x_0, \\ldots, x_n \\rangle$ szám, hogy $g^{(n+1)}(\\xi) = 0$. Mivel $L_n$ $n$-edfokú polinom, ezért $(n + 1)$-edik deriváltja nulla, így

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \\frac{(n+1)!}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

Ebből a $t = \\xi$ értéket véve adódik a tétel állítása. $\\square$

Most tekintsük azt a speciális esetet, amikor ekvidisztáns osztópontokat használunk, azaz $x_i = x_0 + ih$. A 6.5 tétel szerint az interpoláció képlethibája az

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!}|(x - x_0) \\cdots (x - x_n)| \\tag{6.4}$$

kifejezéssel becsülhető $x \\in [x_0, x_n]$-re, ahol $M_{n+1} = \\max\\{|f^{(n+1)}(t)|:\\ t \\in [x_0, x_n]\\}$. Tegyük fel, hogy $x \\in (x_k, x_{k+1})$ valamilyen $0 \\leq k < n$-re. Ekkor könnyen ellenőrizhető, hogy

$$|(x - x_k)(x - x_{k+1})| \\leq \\frac{h^2}{4},$$

és így

$$\\begin{aligned}
\\prod_{i=0}^{n} |x - x_i| &\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x - x_i) \\prod_{i=k+2}^{n} (x_i - x) \\\\
&\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x_{k+1} - x_i) \\prod_{i=k+2}^{n} (x_i - x_k) \\\\
&= \\frac{h^{n+1}}{4} \\prod_{i=0}^{k-1} (k + 1 - i) \\prod_{i=k+2}^{n} (i - k) \\\\
&= \\frac{h^{n+1}}{4}(k+1)!(n-k)! \\\\
&\\leq \\frac{h^{n+1}}{4} n!
\\end{aligned}$$

(Lásd a 4. feladatot!) Ebből és a (6.4) egyenlőtlenségből következik:

**6.6. tétel.** *Legyen $f \\in C^{n+1}(a,b)$, $x_i = a + i(b-a)/n$ $(i = 0, \\ldots, n)$ és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $x \\in [a,b]$. Ekkor*

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{4(n+1)} \\left( \\frac{b-a}{n} \\right)^{n+1},$$

*ahol $M_{n+1} \\equiv \\max\\{|f^{(n+1)}(x)|:\\ x \\in [a,b]\\}$.*

**6.7. példa.** Térjünk vissza a 6.3 példához! Az előző tétel szerint minden $x \\in [-\\pi, \\pi]$-re

$$|f(x) - L_2(x)| \\leq \\frac{1}{12}\\pi^3 \\approx 2.5839, \\qquad \\text{és} \\qquad |f(x) - L_4(x)| \\leq \\frac{1}{20}\\left(\\frac{\\pi}{2}\\right)^5 \\approx 0.4782.$$

Természetesen a 6.6 tétellel csak felső korlátot kapunk a hibára. A 6.1 ábrán látható, hogy a tényleges hiba ennél jelen esetben lényegesen kisebb. $\\square$

A következő eredményre szükségünk lesz a 7. fejezetben. A bizonyítást nem közöljük itt.

**6.8. tétel.** *Tegyük fel, hogy $f \\in C^{n+2}(a,b)$, $a = x_0 < \\cdots < x_n = b$, és legyen*

$$\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0) \\cdots (x - x_n)$$

*az $n$-edfokú Lagrange-interpoláció maradéktagja. Ekkor az $x \\mapsto f^{(n+1)}(\\xi(x))$ függvény folytonosan kiterjeszthető $x = x_i$-re, differenciálható minden $x \\neq x_i$-re, és*

$$\\frac{d}{dx} f^{(n+1)}(\\xi(x)) = \\frac{1}{n+2} f^{(n+2)}(\\eta(x))$$

*alakú, ahol $\\eta(x) \\in \\langle x_0, \\ldots, x_n, x \\rangle$, továbbá $\\frac{d}{dx} f^{(n+1)}(\\xi(x))$ is folytonosan kiterjeszthető $x = x_i$-re $(i = 0, 1, \\ldots, n)$.*

Most kétváltozós függvények interpolációjával foglalkozunk röviden, annak is csak a legegyszerűbb esetével: feltesszük, hogy $f$ egy téglalapon definiált. Legyen $f \\colon [a,b] \\times [c,d] \\to \\mathbb{R}$, és tekintsük az $[a,b]$ és $[c,d]$ intervallumok $a = x_0 < x_1 < \\ldots < x_n = b$ és $c = y_0 < y_1 < \\ldots < y_m = d$ beosztását. Legyen $z_{ij} = f(x_i, y_j)$, $i = 0, \\ldots, n$, $j = 0, \\ldots, m$. Ezen adatok interpolációjára a következő függvényt használhatjuk:

$$L_{n,m}(x, y) \\equiv \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} l_i(x) \\tilde{l}_j(y), \\tag{6.5}$$

ahol $l_i$ ill. $\\tilde{l}_j$ az $a = x_0 < x_1 < \\ldots < x_n = b$ ill. $c = y_0 < y_1 < \\ldots < y_m = d$ alappontokhoz tartozó (6.2) képlettel definiált $n$ ill. $m$-edrendű polinomok. Az így definiált $L_{n,m}$ függvény teljesíti az $L_{n,m}(x_i, y_j) = z_{ij}$ összefüggést minden $i, j$-re. Ha $x$-et rögzítjük, akkor $L_{n,m}(x, \\cdot)$ egy legfeljebb $m$-edrendű polinom, és fordítva, ha $y$-t rögzítjük, akkor $L_{n,m}(\\cdot, y)$ egy legfeljebb $n$-edrendű polinom.

**6.9. példa.** Tekintsük a következő függvényértékeket:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Alkalmazva az adatokra a (6.5) formulát kapjuk az

$$\\begin{aligned}
L_{2,1}(x, y) = &\\ 2 \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y-2}{0-2} - \\frac{x(x-2)}{1(1-2)} \\frac{y-2}{0-2} + \\frac{x(x-1)}{2(2-1)} \\frac{y-2}{0-2} \\\\
&+ \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y}{2} + 0 \\frac{x(x-2)}{1(1-2)} \\frac{y}{2} + 2 \\frac{x(x-1)}{2(2-1)} \\frac{y}{2} \\\\
= &-\\frac{1}{2}x^2 y + \\frac{5}{2}x^2 + \\frac{3}{2}xy - \\frac{11}{2}x - \\frac{1}{2}y + 2
\\end{aligned}$$

kétváltozós polinomot. Ez $x$-ben másodfokú, $y$-ban pedig elsőfokú polinom. Az interpolációs polinom grafikonja a 6.2 ábrán látható. $\\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Lagrange-féle interpolációs polinomokat:

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

<details class="reveal-solution"><summary>Megoldás</summary>

**(a)** For the data $x_i = (-1,0,2,4)$, $y_i = (3,-2,4,-2)$ the basis polynomials are
$$l_0(x) = -\\frac{x(x-2)(x-4)}{15}, \\quad l_1(x) = \\frac{(x+1)(x-2)(x-4)}{8},$$
$$l_2(x) = -\\frac{(x+1)x(x-4)}{12}, \\quad l_3(x) = \\frac{(x+1)x(x-2)}{40},$$
and $L_3(x) = 3l_0(x) - 2l_1(x) + 4l_2(x) - 2l_3(x)$. At $x = 1$: $l_0(1) = -0.2$, $l_1(1) = 0.75$, $l_2(1) = 0.5$, $l_3(1) = -0.05$, hence
$$L_3(1) = 3(-0.2) - 2(0.75) + 4(0.5) - 2(-0.05) = 0.$$

**(b)** For $x_i = (0.1,0.4,1.3,2.5,2.8)$, evaluating each $l_i(1)$ (e.g. $l_0(1) = \\frac{(0.6)(-0.3)(-1.5)(-0.8)}{(-0.3)(-1.2)(-2.4)(-2.7)} \\approx -0.0926$) and forming $L_4(1) = \\sum_i y_i l_i(1)$ gives the interpolated value at $x = 1$.

**(c)** For $x_i = (-0.5,0,1.5,2,3,3.5)$ the same procedure (compute each $l_i(1)$, then $L_5(1) = \\sum_i y_i l_i(1)$) yields the value at $x = 1$.

</details>

2. Lássa be a Lagrange-polinom képletének megadása nélkül, hogy a (6.1) egyenletrendszernek létezik egyértelmű megoldása!

<details class="reveal-solution"><summary>Megoldás</summary>

The conditions $L_n(x_i) = y_i$ give $n+1$ linear equations for the coefficients $c_0, \\ldots, c_n$ of $L_n(x) = c_0 + c_1 x + \\cdots + c_n x^n$. The coefficient matrix is the Vandermonde matrix $V$ with rows $(1, x_i, x_i^2, \\ldots, x_i^n)$, whose determinant is
$$\\det(V) = \\prod_{0 \\le i < j \\le n}(x_j - x_i).$$
Since the $x_i$ are pairwise distinct, $\\det(V) \\ne 0$, so $V$ is invertible and the system has a unique solution. $\\square$

</details>

3. Legyen $l_i(x)$ $(i = 0, 1, \\ldots, n)$ a (6.2) képlettel definiált $n$-edfokú polinom. Mutassa meg, hogy bármely $x$-re
   $$\\sum_{i=0}^{n} l_i(x) = 1.$$

<details class="reveal-solution"><summary>Megoldás</summary>

Apply Lagrange interpolation to the constant function $f(x) = 1$. Its interpolant is
$$L_n(x) = \\sum_{i=0}^n f(x_i) l_i(x) = \\sum_{i=0}^n l_i(x).$$
But $f(x) = 1$ is itself a polynomial of degree $0 \\le n$ that interpolates the data, so by uniqueness $L_n(x) = 1$. Hence $\\sum_{i=0}^n l_i(x) = 1$. $\\square$

</details>

4. Igazolja, hogy $(k+1)!(n-k)! \\leq n!$ minden $k = 0, 1, \\ldots, n - 1$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

We have
$$\\frac{n!}{(k+1)!(n-k)!} = \\binom{n}{k+1}.$$
For $0 \\le k+1 \\le n$ the binomial coefficient is a positive integer, so $\\binom{n}{k+1} \\ge 1$, which gives $(k+1)!(n-k)! \\le n!$. $\\square$

</details>

5. Mi az a legkisebb $n$, amelyre a $\\cos x$ függvényt minden $x \\in [-\\pi, \\pi]$-re 0.001-nél kisebb hibával lehet közelíteni az $L_n(x)$ interpolációs értékkel, ha ekvidisztáns osztópontokat használunk a $[-\\pi, \\pi]$ intervallumon?

<details class="reveal-solution"><summary>Megoldás</summary>

By Theorem 6.6, with $M_{n+1} = 1$ for $\\cos x$,
$$|f(x) - L_n(x)| \\le \\frac{1}{4(n+1)}\\left(\\frac{2\\pi}{n}\\right)^{n+1}.$$
Testing values: for $n = 8$ this is $\\approx 0.0031 > 0.001$, while for $n = 10$ it is $\\approx 0.00014 < 0.001$. So $n = 10$ suffices (with $n = 9$ to be checked numerically).

</details>

6. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó $L_{2,2}$ kétváltozós interpolációs polinomot:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

<details class="reveal-solution"><summary>Megoldás</summary>

Use degree-2 Lagrange bases in $x$ and $y$:
$$l_0(x) = \\frac{(x-1)(x-2)}{2}, \\quad l_1(x) = -x(x-2), \\quad l_2(x) = \\frac{x(x-1)}{2},$$
and $\\tilde{l}_0(y) = \\frac{(y-1)(y-2)}{2}$, $\\tilde{l}_1(y) = -y(y-2)$, $\\tilde{l}_2(y) = \\frac{y(y-1)}{2}$. Then
$$L_{2,2}(x,y) = \\sum_{i=0}^2 \\sum_{j=0}^2 z_{ij}\\, l_i(x)\\, \\tilde{l}_j(y),$$
which expands using the given $z_{ij}$ values $(3,1,0;\\,2,-1,0;\\,2,3,1)$.

</details>
`,t=`## 6.2. Divided Differences

Given a function $f \\colon [a,b] \\to \\mathbb{R}$ and pairwise different mesh points $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$. Then the *zeroth divided difference* of the function $f$ at the point $x_0$ is defined by $f[x_0] := f(x_0)$. The *first divided difference* of the function $f$ at the points $x_0, x_1$ is the number

$$f[x_0, x_1] := \\frac{f[x_1] - f[x_0]}{x_1 - x_0},$$

(i.e., $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$). In general, the *$n$th divided difference* of the function $f$ relative to the points $x_0, x_1, \\ldots, x_n$ is defined by

$$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}.$$

We note that we have not assumed the mesh points are ordered increasingly.

**Theorem 6.10.** *Let $x_i$ $(i = 0, 1, \\ldots, n)$ be pairwise different mesh points. Then*

$$f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}.$$

**Proof.** We prove the statement using mathematical induction with respect to $n$. For $n = 0$ the statement is obvious. (In this case in the denominator we have the "empty product", which, by definition, equals to 1.) Suppose the statement holds for $n$, and consider the $(n+1)$-st divided difference $f[x_0, x_1, \\ldots, x_{n+1}]$. The definition of the divided difference, the inductive hypothesis and some calculations yield

$$\\begin{aligned}
f[x_0, x_1, \\ldots, x_{n+1}] &= \\frac{f[x_1, x_2, \\ldots, x_{n+1}] - f[x_0, x_1, \\ldots, x_n]}{x_{n+1} - x_0} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\sum_{i=1}^{n+1} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})} \\\\
&\\qquad - \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\Bigg\\} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\frac{f(x_{n+1})}{(x_{n+1} - x_1) \\cdots (x_{n+1} - x_n)} - \\frac{f(x_0)}{(x_0 - x_1) \\cdots (x_0 - x_n)} \\\\
&\\qquad + \\sum_{i=1}^{n} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\\\
&\\qquad \\cdot \\left( \\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0} \\right) \\Bigg\\} \\\\
&= \\sum_{i=0}^{n+1} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})},
\\end{aligned}$$

which proves the statement. $\\square$

The previous result has some immediate consequences.

**Corollary 6.11.** *The divided differences are independent of the order of the mesh points.*

**Corollary 6.12.** *If the function $f$ is continuous, then the divided differences depend continuously on the mesh points.*

Suppose $f$ is differentiable. Then the function $x_1 \\mapsto f[x_0, x_1]$ is continuous for $x_1 \\neq x_0$. Now compute the limit $\\lim_{x_1 \\to x_0} f[x_0, x_1]$. Using the definition of the first divided difference and the differentiability of the function we get

$$\\lim_{x_1 \\to x_0} f[x_0, x_1] = \\lim_{x_1 \\to x_0} \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Therefore, we define the first divided difference relative to equal mesh points by

$$f[x_0, x_0] := f'(x_0).$$

With this definition the function $x_1 \\mapsto f[x_0, x_1]$ is extended continuously for $x_1 = x_0$. Higher order divided differences with equal mesh points will be defined in Exercises 6 and 7 of the next section.

### Exercises

1. Compute the following divided differences:

   (a) $f[x_0, x_1, x_2, x_3]$, where $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, where $x_i = 0.2i$, $f(x) = \\sin x$,

   (c) $f[x_0, x_0]$, where $x_0 = 0$, $f(x) = \\sin x$.

<details class="reveal-solution"><summary>Show solution</summary>

**(a) $f[x_0,x_1,x_2,x_3]$ with $x_i = i$, $f(x) = x^2$:** the divided-difference table gives $f[0,1] = 1$, $f[1,2] = 3$, $f[2,3] = 5$; then $f[0,1,2] = 1$, $f[1,2,3] = 1$; and finally $f[0,1,2,3] = 0$. (As expected: the third divided difference of a degree-2 polynomial is $0$.)

**(b) $f[x_0,x_1,x_2]$ with $x_i = 0.2i$, $f = \\sin x$:** $f[0,0.2] = 0.9935$, $f[0.2,0.4] = 0.9535$, so $f[0,0.2,0.4] = (0.9535 - 0.9935)/0.4 \\approx -0.01$.

**(c) $f[x_0,x_0]$ with $x_0 = 0$, $f = \\sin x$:** by definition $f[x_0,x_0] = f'(x_0) = \\cos 0 = 1$.

</details>

2. Let $f \\in C^1[a,b]$, and $x_0, x_1 \\in (a, b)$, $x_0 \\neq x_1$. Show that there exists $\\xi \\in \\langle x_0, x_1 \\rangle$ such that
   $$f[x_0, x_1] = f'(\\xi).$$

<details class="reveal-solution"><summary>Show solution</summary>

By definition $f[x_0,x_1] = \\dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$. By the Mean Value Theorem there exists $\\xi \\in (x_0,x_1)$ with
$$f'(\\xi) = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f[x_0, x_1]. \\qquad \\square$$

</details>

3. Let $x_0 < x_1 < x_2 < x_3$ and
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Show that
   $$a_0 = P[x_0], \\quad a_1 = P[x_0, x_1], \\quad a_2 = P[x_0, x_1, x_2], \\quad \\text{and} \\quad a_3 = P[x_0, x_1, x_2, x_3].$$

<details class="reveal-solution"><summary>Show solution</summary>

Substituting successively: $P(x_0) = a_0$, so $a_0 = P[x_0]$. From $P(x_1) = a_0 + a_1(x_1 - x_0)$,
$$a_1 = \\frac{P(x_1) - P(x_0)}{x_1 - x_0} = P[x_0, x_1].$$
From $P(x_2) = a_0 + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2 - x_1)$,
$$a_2 = \\frac{P[x_0,x_2] - P[x_0,x_1]}{x_2 - x_1} = P[x_0,x_1,x_2],$$
and similarly using $P(x_3)$ gives $a_3 = P[x_0,x_1,x_2,x_3]$. $\\square$

</details>

## 6.3. Newton's Divided Difference Formula

The disadvantage of formula (6.3) is that if we add an additional mesh point, then the whole formula (6.3) must be recomputed. In this section we define a new formula for the Lagrange polynomial, and in this form it will be easy to add a new mesh point to the formula.

Suppose function values $y_i = f(x_i)$ are given for $i = 0, 1, \\ldots, n$. First consider the relation

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \\cdots + (L_n(x) - L_{n-1}(x)).$$

By definition, $L_0(x) = f(x_0)$. Consider the difference $L_i(x) - L_{i-1}(x)$. It is a polynomial of degree at most $i$, and since $L_i$ and $L_{i-1}$ both satisfy the interpolating equations at $x_0$, $\\ldots$, $x_{i-1}$, we have $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \\ldots, i - 1)$. But then the Fundamental Theorem of Algebra yields

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \\cdots (x - x_{i-1}),$$

where $a_i \\in \\mathbb{R}$. If we substitute $x = x_i$ into this relation and use for $L_{i-1}(x_i)$ the formula (6.3), we get

$$\\begin{aligned}
f(x_i) - \\sum_{k=0}^{i-1} f(x_k) &\\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= a_i(x_i - x_0) \\cdots (x_i - x_{i-1}).
\\end{aligned}$$

So from this we get for $a_i$ that

$$\\begin{aligned}
a_i &= \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})} - \\frac{1}{(x_i - x_0) \\cdots (x_i - x_{i-1})} \\\\
&\\qquad \\cdot \\sum_{k=0}^{i-1} f(x_k) \\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= \\sum_{k=0}^{i} \\frac{f(x_k)}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_i)} \\\\
&= f[x_0, x_1, \\ldots, x_i].
\\end{aligned}$$

Therefore, the Lagrange interpolating polynomial can be written as

$$\\begin{aligned}
L_n(x) = &\\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \\cdots \\\\
&+ f[x_0, x_1, \\ldots, x_n](x - x_0)(x - x_1) \\cdots (x - x_{n-1}). \\tag{6.6}
\\end{aligned}$$

We have to emphasize that this is the same polynomial as (6.3), only it is given by a different formula. The polynomial given by (6.6) is called *Newton's divided difference formula* or shortly *Newton polynomial.*

The advantage of formula (6.6) compared to (6.3) can be seen immediately. It is easy to add a new mesh point to the formula, we have the simple correction term:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \\ldots, x_{n+1}](x - x_0) \\cdots (x - x_n).$$

Another advantage is that a polynomial of the form (6.6) can be easily evaluated using the Horner's method. Furthermore, the degree of the polynomial can be determined in this form easily. If, for example, $f[x_0, x_1, \\ldots, x_n] \\neq 0$, then the polynomial is of degree $n$. In Algorithm 6.13 we present the computation of the coefficients of the Newton polynomial, i.e., the values $a_i = f[x_0, \\ldots, x_i]$. In Algorithm 6.14 we formulate a method to evaluate the Newton polynomial using Horner's method.

**Algorithm 6.13. Computation of the coefficients of the Newton polynomial**

\`\`\`
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
\`\`\`

Note that Algorithm 6.13 was organized so that only those divided differences are stored by the end of the algorithm which are needed for the Newton polynomial.

**Algorithm 6.14. Evaluation of the Newton polynomial**

\`\`\`
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
\`\`\`

When we do the computation of the divided differences by hand, it is recommended to list the values of the divided differences in a triangular table as it can be seen in Table 6.1. The numbers in the first two columns are the input data, the rest of the numbers must be computed: a number is obtained so that we take the difference of the number to the left and above, and it is divided by the difference of the appropriate mesh points $x_k$. The numbers in frames in the diagonal of the table give the coefficients of the Newton polynomial in (6.6).

*Table 6.1: Computation of the divided differences by hand*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_1, \\ldots, x_n]}$ |

**Example 6.15.** Consider again Example 6.2. We compute $L_3(x)$ in Newton's divided difference form, and we evaluate $L_3(0)$. First we compute the table of divided differences:

$$
\\begin{array}{rrrrr}
-1 & -3 & & & \\\\
1 & 1 & 2 & & \\\\
2 & 3 & 2 & 0 & \\\\
3 & 29 & 26 & 12 & 3
\\end{array}
$$

This yields that

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

and so $L_3(0) = -3 + 2 \\cdot 1 + 3 \\cdot 1(-1)(-2) = 5$. We can simplify this formula of $L_3$ and we get the same form of the polynomial as in Example 6.2: $L_3(x) = 3x^3 - 6x^2 - x + 5$. $\\square$

Next we study again the truncation error of the interpolation. In Section 6.1 we obtained that it has the form $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$. This is certainly the same for the Newton's divided difference form of the interpolating polynomial, but here we give a different form of the same truncation error.

**Theorem 6.16.** *Let $x_i \\in (a, b)$ $(i = 0, \\ldots, n)$ be pairwise different mesh points and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $L_n(x)$ be the corresponding $n$th degree Lagrange interpolating polynomial. Then $f(x) = L_n(x) + f[x_0, x_1, \\ldots, x_n, x](x - x_0)(x - x_1) \\cdots (x - x_n)$.*

**Proof.** Fix $x \\in (a, b)$ which is different from each mesh points. (If $x = x_i$ for some $i$, then the statement is clearly true.) Add $x$ to the mesh points together with the function value $f(x)$. Let $L_{n+1}$ be the Lagrange interpolating polynomial corresponding to the extended data set. Then we have

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \\ldots, x_n, x](t - x_0) \\cdots (t - x_n).$$

Now substitution $t = x$ proves the statement, since $f(x) = L_{n+1}(x)$. $\\square$

This form of the truncation error has no practical importance, since in order to compute $f[x_0, \\ldots, x_n, x]$ the exact value of $f(x)$ is needed. But its consequence is important. Comparing it to Theorem 6.5 we get the following result.

**Corollary 6.17.** *If $f \\in C^n[a,b]$ and $x_i$ $(i = 0, \\ldots, n)$ are pairwise different mesh points, then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n \\rangle$ such that*

$$f[x_0, x_1, \\ldots, x_n] = \\frac{1}{n!} f^{(n)}(\\xi).$$

### Exercises

1. Repeat Exercise 1 of Section 6.1 using the Newton's divided difference form of the Lagrange interpolating polynomial.

2. Show that if $P$ is a polynomial of degree $n$, then
   $$P(x) = \\sum_{i=0}^{n} P[x_0, \\ldots, x_i] \\prod_{k=0}^{i-1} (x - x_k).$$

3. Let $x_0, \\ldots, x_n$ be pairwise different numbers. Show that if $P$ is a polynomial of degree $n$, then $P[x_0, \\ldots, x_m] = 0$ for all $m > n$.

4. Prove that if $f(x) = c_0 + c_1 x + \\cdots + c_n x^n$, then $c_n = f[x_0, x_1, \\ldots, x_n]$.

5. Prove that

   $$f[x_0, x_1, \\ldots, x_n] = \\frac{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & f(x_0) \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & f(x_1) \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & f(x_n)
   \\end{vmatrix}
   }{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & x_0^n \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & x_1^n \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & x_n^n
   \\end{vmatrix}
   }.$$

6. Show that
   $$\\lim_{(x_1, x_2, \\ldots, x_n) \\to (x_0, x_0, \\ldots, x_0)} f[x_0, x_1, \\ldots, x_n] = \\frac{f^{(n)}(x_0)}{n!}.$$
   (Hint: Use Corollary 6.17.)

7. Let $f \\in C^2$. Define the following divided differences:
   $$f[x_0, x_0, x_1] := \\lim_{x_2 \\to x_0} f[x_0, x_2, x_1], \\quad f[x_0, x_1, x_0] := \\lim_{x_2 \\to x_0} f[x_0, x_1, x_2],$$
   and
   $$f[x_1, x_0, x_0] := \\lim_{x_2 \\to x_0} f[x_1, x_0, x_2], \\qquad f[x_0, x_0, x_0] = \\frac{f''(x_0)}{2}.$$
   Show that the limits above exist, and the second divided differences satisfy:

   (a) $f[x_0, x_0, x_1] = \\dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \\dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\\lim_{(x_1, x_2) \\to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) There exists $\\xi \\in \\langle x_0, x_1 \\rangle$ such that $f[x_0, x_0, x_1] = f''(\\xi)/2$.

8. Check that Algorithm 6.13 gives back the coefficients of the Newton polynomial.
`,i=`## 6.2. Osztott differenciák

Adott egy $f \\colon [a,b] \\to \\mathbb{R}$ függvény és $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ páronként különböző alappontok. Ekkor az $f$ függvény $x_0$ pontbeli *nulladrendű osztott differenciáján* az $f[x_0] \\equiv f(x_0)$ számot értjük. Az $f$ függvény $x_0, x_1$ pontokra felírt *elsőrendű osztott differenciáján* az

$$f[x_0, x_1] \\equiv \\frac{f[x_1] - f[x_0]}{x_1 - x_0}$$

számot értjük, (azaz $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$). Általában pedig, az $f$ függvény $x_0, x_1, \\ldots, x_n$ pontokra felírt *$n$-edrendű osztott differenciáján* az

$$f[x_0, x_1, \\ldots, x_n] \\equiv \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$$

számot értjük. Megjegyezzük, hogy nem tettük fel, hogy az alappontok növekvő sorrendben rendezettek.

**6.10. tétel.** *Legyenek $x_i$ $(i = 0, 1, \\ldots, n)$ páronként különböző alappontok. Ekkor*

$$f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}.$$

**Bizonyítás.** $n$-szerinti teljes indukcióval bizonyítjuk az állítást. $n = 0$-ra az állítás nyilvánvaló. (Ebben az esetben a nevezőben „üres szorzat" áll, ez definíció szerint 1-gyel egyezik meg.) Tegyük fel, hogy $n$-re teljesül az állítás, és tekintsük $f[x_0, x_1, \\ldots, x_{n+1}]$-et. Az osztott differenciák definíciója, az indukciós hipotézis és egy kis számolás alapján:

$$\\begin{aligned}
f[x_0, x_1, \\ldots, x_{n+1}] &= \\frac{f[x_1, x_2, \\ldots, x_{n+1}] - f[x_0, x_1, \\ldots, x_n]}{x_{n+1} - x_0} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\sum_{i=1}^{n+1} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})} \\\\
&\\qquad - \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\Bigg\\} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\frac{f(x_{n+1})}{(x_{n+1} - x_1) \\cdots (x_{n+1} - x_n)} - \\frac{f(x_0)}{(x_0 - x_1) \\cdots (x_0 - x_n)} \\\\
&\\qquad + \\sum_{i=1}^{n} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\\\
&\\qquad \\cdot \\left( \\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0} \\right) \\Bigg\\} \\\\
&= \\sum_{i=0}^{n+1} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})},
\\end{aligned}$$

amiből, a teljes indukció elve szerint, következik a tétel állítása. $\\square$

Az előző tétel állításából következnek:

**6.11. következmény.** *Az osztott differenciák az alappontok sorrendjétől függetlenek.*

**6.12. következmény.** *Ha $f$ folytonos, akkor az osztott differencia az alappontoktól folytonosan függ.*

Tegyük fel, hogy $f$ differenciálható függvény. Az utóbbi következmény szerint az $x_1 \\mapsto f[x_0, x_1]$ függvény folytonos ha $x_1 \\neq x_0$. Vizsgáljuk meg, hogy létezik-e a $\\lim_{x_1 \\to x_0} f[x_0, x_1]$ határérték! Az elsőrendű osztott differencia definícióját és $f$ differenciálhatóságát használva

$$\\lim_{x_1 \\to x_0} f[x_0, x_1] = \\lim_{x_1 \\to x_0} \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Ezért az elsőrendű osztott differenciákat egyenlő alappontokra a következőképpen definiáljuk:

$$f[x_0, x_0] \\equiv f'(x_0).$$

Ezzel a definícióval az $x_1 \\mapsto f[x_0, x_1]$ függvényt folytonosan terjesztettük ki $x_1 = x_0$-ra. Magasabbrendű osztott differenciák egyenlő alappontokra kiterjesztésével a következő szakasz 6. és 7. feladatai foglalkoznak.

### Feladatok

1. Számítsa ki a következő osztott differenciákat:

   (a) $f[x_0, x_1, x_2, x_3]$, ahol $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, ahol $x_i = 0.2i$, $f(x) = \\sin x$,

   (c) $f[x_0, x_0]$, ahol $x_0 = 0$, $f(x) = \\sin x$.

<details class="reveal-solution"><summary>Megoldás</summary>

**(a) $f[x_0,x_1,x_2,x_3]$ with $x_i = i$, $f(x) = x^2$:** the divided-difference table gives $f[0,1] = 1$, $f[1,2] = 3$, $f[2,3] = 5$; then $f[0,1,2] = 1$, $f[1,2,3] = 1$; and finally $f[0,1,2,3] = 0$. (As expected: the third divided difference of a degree-2 polynomial is $0$.)

**(b) $f[x_0,x_1,x_2]$ with $x_i = 0.2i$, $f = \\sin x$:** $f[0,0.2] = 0.9935$, $f[0.2,0.4] = 0.9535$, so $f[0,0.2,0.4] = (0.9535 - 0.9935)/0.4 \\approx -0.01$.

**(c) $f[x_0,x_0]$ with $x_0 = 0$, $f = \\sin x$:** by definition $f[x_0,x_0] = f'(x_0) = \\cos 0 = 1$.

</details>

2. Legyen $f \\in C^1(a,b)$, és $x_0, x_1 \\in (a, b)$, $x_0 \\neq x_1$. Bizonyítsa be, hogy létezik olyan $\\xi \\in \\langle x_0, x_1 \\rangle$, hogy
   $$f[x_0, x_1] = f'(\\xi)!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By definition $f[x_0,x_1] = \\dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$. By the Mean Value Theorem there exists $\\xi \\in (x_0,x_1)$ with
$$f'(\\xi) = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f[x_0, x_1]. \\qquad \\square$$

</details>

3. Legyen $x_0 < x_1 < x_2 < x_3$ és
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Lássa be, hogy
   $$a_0 = P[x_0], \\quad a_1 = P[x_0, x_1], \\quad a_2 = P[x_0, x_1, x_2], \\quad \\text{és} \\quad a_3 = P[x_0, x_1, x_2, x_3]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

Substituting successively: $P(x_0) = a_0$, so $a_0 = P[x_0]$. From $P(x_1) = a_0 + a_1(x_1 - x_0)$,
$$a_1 = \\frac{P(x_1) - P(x_0)}{x_1 - x_0} = P[x_0, x_1].$$
From $P(x_2) = a_0 + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2 - x_1)$,
$$a_2 = \\frac{P[x_0,x_2] - P[x_0,x_1]}{x_2 - x_1} = P[x_0,x_1,x_2],$$
and similarly using $P(x_3)$ gives $a_3 = P[x_0,x_1,x_2,x_3]$. $\\square$

</details>

## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

A (6.3) képletnek van egy kellemetlen hátránya: új osztópont felvételekor teljesen újra kell számolni a (6.3) kifejezést. Ezt a hiányosságot kiküszöböli ki a Lagrange-polinom egy másik alakja, az ún. Newton-féle alak. Tegyük fel, hogy $f$ függvényt akarjuk interpolálni, azaz $y_i = f(x_i)$. A Lagrange-féle interpolációs polinom Newton-féle alakjának levezetéséhez induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \\cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. Vizsgáljuk most az $L_i(x) - L_{i-1}(x)$ különbséget! $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\\ldots$, $x_{i-1}$-ben, ezért $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \\ldots, i - 1)$. De ekkor az algebra alaptétele szerint $L_i - L_{i-1}$ alakja:

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \\cdots (x - x_{i-1}),$$

ahol $a_i \\in \\mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a (6.3) képletet, kapjuk, hogy

$$\\begin{aligned}
f(x_i) - \\sum_{k=0}^{i-1} f(x_k) &\\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= a_i(x_i - x_0) \\cdots (x_i - x_{i-1}).
\\end{aligned}$$

Ebből $a_i$-t kifejezve

$$\\begin{aligned}
a_i &= \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})} - \\frac{1}{(x_i - x_0) \\cdots (x_i - x_{i-1})} \\\\
&\\qquad \\cdot \\sum_{k=0}^{i-1} f(x_k) \\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= \\sum_{k=0}^{i} \\frac{f(x_k)}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_i)} \\\\
&= f[x_0, x_1, \\ldots, x_i].
\\end{aligned}$$

Összefoglalva az eddigieket, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\\begin{aligned}
L_n(x) = &\\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \\cdots \\\\
&+ f[x_0, x_1, \\ldots, x_n](x - x_0)(x - x_1) \\cdots (x - x_{n-1}) \\tag{6.6}
\\end{aligned}$$

képlettel is. Hangsúlyozzuk, hogy ez ugyanaz a polinom, mint (6.3), csak egy másik alakban felírva. A (6.6) formulával definiált polinomot nevezzük *Lagrange-féle interpolációs polinom Newton-féle alakjának* vagy röviden *Newton-polinomnak.*

A (6.6) képletből leolvasható ennek a formulának az előnye a (6.3) képlethez viszonyítva. Először is, új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \\ldots, x_{n+1}](x - x_0) \\cdots (x - x_n).$$

Fontos előny még az is, hogy a (6.6) alakban felírt polinomot könnyen kiértékelhetjük a Horner-elrendezés segítségével. Ebből az alakból rögtön leolvasható a polinom fokszáma is. Ha pl. $f[x_0, x_1, \\ldots, x_n] \\neq 0$, akkor a polinom $n$-edfokú. A 6.13 algoritmusban megadtuk a Newton-féle interpolációs polinom együtthatóinak, azaz az $a_i = f[x_0, \\ldots, x_i]$ értékek kiszámítását, a 6.14 algoritmusban pedig a Newton-polinom kiértékelését Horner-eljárással.

**6.13. algoritmus. A Newton-polinom együtthatóinak generálása**

\`\`\`
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         y_i, (i = 0, 1, ..., n) - függvényértékek
OUTPUT:  a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói, ahol a_i
                                    az i-edfokú tag együtthatója

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
\`\`\`

Megjegyezzük, hogy a 6.13 algoritmust úgy szerveztük, hogy a Newton-polinom felírása közben számolt osztott differenciák közül csak az együtthatókhoz szükségeseket őrizzük meg a számolás végéig.

**6.14. algoritmus. A Newton-polinom kiértékelése**

\`\`\`
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói
         x - a pont, ahol kiértékeljük a Newton-polinomot
OUTPUT:  y - a Newton-polinom értéke x-ben

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
\`\`\`

Kézi számoláskor az osztópontokat, a megadott függvényértékeket és a számított osztott differenciákat érdemes a 6.1 táblázatban látható módon egy háromszög alakú táblázatban elrendezni. A táblázat első két oszlopában szereplő számok input adatok, a táblázat többi elemét számoljuk a tőle balra álló és az a fölötti eggyel kisebb rendű osztott differenciák különbségét osztva megfelelő $x_k$ értékek különbségének hányadosaként. A táblázatban a bekeretezett számok fogják adni a (6.6) képletben szereplő együtthatókat.

*6.1. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_1, \\ldots, x_n]}$ |

**6.15. példa.** Tekintsük újra a 6.2 példát. Adjuk meg $L_3(x)$ Newton-féle alakját, majd számítsuk ki $L_3(0)$-t! Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát:

$$
\\begin{array}{rrrrr}
-1 & -3 & & & \\\\
1 & 1 & 2 & & \\\\
2 & 3 & 2 & 0 & \\\\
3 & 29 & 26 & 12 & 3
\\end{array}
$$

Ebből kapjuk, hogy

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = -3 + 2 \\cdot 1 + 3 \\cdot 1(-1)(-2) = 5$. Természetesen egyszerűsítve $L_3$ képletét visszakapjuk a 6.2 példában kiszámolt $L_3(x) = 3x^3 - 6x^2 - x + 5$ képletet. $\\square$

Most az interpoláció képlethibájával foglalkozunk újra. A 6.1 szakaszban megállapítottuk, hogy a közelítés hibája az $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$ alakban írható fel. Ez a képlet természetesen érvényes a Newton-alakban felírt interpolációs polinomot használva is, de itt megadjuk a képlethiba egy másik alakját.

**6.16. tétel.** *Legyenek $x_i \\in (a,b)$ $(i = 0, \\ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \\ldots, x_n, x](x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \\in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. (Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvaló.) Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \\ldots, x_n, x](t - x_0) \\cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\\square$

Az interpoláció képlethibájának a 6.16 tételben közölt alakja elsősorban elméleti jelentőségű, hiszen $f[x_0, \\ldots, x_n, x]$ kiszámításához $f(x)$ ismerete is kell. Fontos viszont a tétel következménye. Ha összehasonlítjuk az előző tétel állítását a 6.5 tétellel, akkor rögtön kapjuk a következő eredményt:

**6.17. következmény.** *Ha $f \\in C^n(a,b)$ és $x_i$ $(i = 0, \\ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n \\rangle$, hogy*

$$f[x_0, x_1, \\ldots, x_n] = \\frac{1}{n!} f^{(n)}(\\xi).$$

### Feladatok

1. Ismételje meg a 6.1 szakasz 1. feladatát a Lagrange-polinom Newton-féle alakját használva!

2. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor
   $$P(x) = \\sum_{i=0}^{n} P[x_0, \\ldots, x_i] \\prod_{k=0}^{i-1} (x - x_k).$$

3. Legyenek $x_0, \\ldots, x_n$ páronként különböző számok. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor $P[x_0, \\ldots, x_m] = 0$ minden $m > n$-re!

4. Mutassa meg, hogy ha $f(x) = c_0 + c_1 x + \\cdots + c_n x^n$, akkor $c_n = f[x_0, x_1, \\ldots, x_n]$!

5. Bizonyítsa be, hogy

   $$f[x_0, x_1, \\ldots, x_n] = \\frac{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & f(x_0) \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & f(x_1) \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & f(x_n)
   \\end{vmatrix}
   }{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & x_0^n \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & x_1^n \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & x_n^n
   \\end{vmatrix}
   }!$$

6. Mutassa meg, hogy
   $$\\lim_{(x_1, x_2, \\ldots, x_n) \\to (x_0, x_0, \\ldots, x_0)} f[x_0, x_1, \\ldots, x_n] = \\frac{f^{(n)}(x_0)}{n!}!$$
   (Útmutatás: Használja a 6.17 következményt!)

7. Legyen $f \\in C^2$. Definiálja a következő osztott differenciákat:
   $$f[x_0, x_0, x_1] \\equiv \\lim_{x_2 \\to x_0} f[x_0, x_2, x_1], \\quad f[x_0, x_1, x_0] \\equiv \\lim_{x_2 \\to x_0} f[x_0, x_1, x_2],$$
   és
   $$f[x_1, x_0, x_0] \\equiv \\lim_{x_2 \\to x_0} f[x_1, x_0, x_2], \\qquad f[x_0, x_0, x_0] = \\frac{f''(x_0)}{2}!$$
   Mutassa meg, hogy az előbbi határértékek léteznek, és az így definiált másodrendű osztott differenciák megőrzik a páronként különböző alappontokra felírt osztott differenciák szokásos tulajdonságait:

   (a) $f[x_0, x_0, x_1] = \\dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \\dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\\lim_{(x_1, x_2) \\to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) Létezik olyan $\\xi \\in \\langle x_0, x_1 \\rangle$, hogy $f[x_0, x_0, x_1] = f''(\\xi)/2$.

8. Ellenőrizze, hogy a 6.13 algoritmus valóban visszaadja a Newton-polinom együtthatóit!
`,a=`## 6.4. Hermite Interpolation

In this section we generalize the basic problem of interpolation. Let $f$ be a differentiable function, and given mesh points $x_i$ $(i = 0, \\ldots, n)$. The so-called *Hermite interpolation* asks to find a polynomial $g(x) = c_0 + c_1 x + \\cdots + c_m x^m$ which interpolates not only the function values $y_i = f(x_i)$, but also the derivative values $y_i' := f'(x_i)$. Therefore, we are looking for a polynomial $g$ of degree $m$ which satisfies the interpolation conditions

$$g(x_i) = y_i, \\qquad g'(x_i) = y_i', \\qquad i = 0, 1, \\ldots, n.$$

The geometrical meaning of this problem is that the graph of $g$ goes through the given points $(x_i, y_i)$ in a way that the tangent line of the graph at $x_i$ has a slope equal to the value $y_i'$. In the formula of the polynomial $g$ there are $m + 1$ parameters, and the interpolation conditions specify $2(n + 1)$ conditions. So we expect that the Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $m = 2n + 1$. The next theorem will prove this result. The solution of the Hermite interpolation problem is called *Hermite interpolating polynomial* or shortly *Hermite polynomial*, and it is denoted by $H_{2n+1}$.

In the next theorem we will use higher order divided differences where two consecutive mesh points can be equal: $f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$, where $x_0, \\ldots, x_n$ are pairwise different mesh points. Its definition is the usual recursion:

$$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = \\frac{f[x_0, x_1, x_1, \\ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \\ldots, x_n]}{x_n - x_0}.$$

The divided difference with lower orders are defined in a similar manner until we get first divided differences with different or equal mesh points. Both are already defined in Section 6.2.

**Theorem 6.18.** *The Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $(2n + 1)$, which is given by*

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\\\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\\\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \\cdots \\tag{6.7} \\\\
&+ f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \\cdots (x - x_{n-1})^2(x - x_n).
\\end{aligned}$$

*Moreover, the truncation error is*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \\ldots, x_n, x_n, x](x - x_0)^2 \\cdots (x - x_n)^2. \\tag{6.8}$$

**Proof.** First we discuss the uniqueness of the Hermite polynomial. Suppose $H_{2n+1}$ and $\\tilde{H}_{2n+1}$ are polynomials of degree at most $(2n + 1)$ which both satisfy the equations of the Hermite interpolation problem. Then $P := H_{2n+1} - \\tilde{H}_{2n+1}$ is a polynomial of degree at most $(2n + 1)$ which satisfies $P(x_i) = H_{2n+1}(x_i) - \\tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$ and $P'(x_i) = H'_{2n+1}(x_i) - \\tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, i.e., $x_i$ is a double root of $P$ for all $i = 0, 1, \\ldots, n$. Hence $P$ has $2(n + 1) = 2n + 2$ number of roots, and hence the Fundamental Theorem of Algebra yields that $P$ is identically equal to 0, since the degree of $P$ is at most $(2n + 1)$. This implies that if the solution of the Hermite interpolation problem exists, it has to be unique.

Now we show that the polynomial $H_{2n+1}$ defined by (6.7) is a solution of the Hermite interpolation problem, and satisfies the error formula (6.8) too. Direct computation gives that $H_{2n+1}(x_0) = f(x_0)$ and $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Next we show that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$ hold too. To prove this, select numbers $\\tilde{x}_i$ close to $x_i$ so that the numbers $\\{x_i, \\tilde{x}_i:\\ i = 0, 1, \\ldots, n\\}$ be pairwise different, and let $L_{2n+1}$ be the Lagrange polynomial interpolating the function values of $f$ at these mesh points. Then

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\\\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \\cdots \\\\
&+ f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'](x - x_0)(x - x_0') \\cdots (x - x_{n-1}) \\\\
&\\quad \\cdot (x - x_{n-1}')(x - x_n),
\\end{aligned}$$

and

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \\ldots, x_n, x_n', x](x - x_0)(x - x_0') \\cdots (x - x_n)(x - x_n').$$

The definition of $L_{2n+1}$ and $H_{2n+1}$ and the continuity of the divided difference (see Exercise 3) yield for all $x$ that

$$L_{2n+1}(x) \\to H_{2n+1}(x) \\quad \\text{as } (x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n), \\tag{6.9}$$

and so

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \\cdots (x - x_n)^2.$$

This proves relation (6.8). It follows from the uniqueness of the Lagrange polynomial that if we interchange $x_0$, $x_0'$ and $x_1$, $x_1'$, then the interpolating polynomial remains the same, so

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\\\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \\cdots \\\\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2', \\ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\\\
&\\quad \\cdot (x - x_2)(x - x_2') \\cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\\end{aligned}$$

But then taking the limit $(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)$ of both sides, and using relation (6.9), we get

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\\\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \\cdots \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \\ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\\\
&\\quad \\cdots (x - x_{n-1})^2(x - x_n).
\\end{aligned}$$

But from this form it is clear that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$. In a similar manner we can show that $H_{2n+1}(x_i) = f(x_i)$ and $H'_{2n+1}(x_i) = f'(x_i)$ hold for $i = 2, 3, \\ldots, n$. $\\square$

**Theorem 6.19.** *Let $f \\in C^{2n+2}$. Then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that*

$$f(x) - H_{2n+1}(x) = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\cdots (x - x_n)^2.$$

**Proof.** The proof is similar to that of Theorem 6.5. Let $x$ be a number different from all mesh points, and define the function

$$g(z) := f(z) - H_{2n+1}(z) - \\frac{(z - x_0)^2 \\cdots (z - x_n)^2}{(x - x_0)^2 \\cdots (x - x_n)^2}(f(x) - H_{2n+1}(x)).$$

Clearly, $g \\in C^{2n+2}$, and $x_0, \\ldots, x_n$ are all double roots, and $x$ is a simple root of $g$. Therefore, the generalized Rolle's Theorem (Theorem 6.4) implies that there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that $g^{(2n+2)}(\\xi) = 0$. This yields the statement of the theorem. $\\square$

Comparing relations (6.8) and Theorem 6.19 we get the next result.

**Corollary 6.20.** *Suppose $f \\in C^{2n+2}$, and $x, x_0, \\ldots, x_n$ are pairwise different numbers. Then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that*

$$f[x_0, x_0, \\ldots, x_n, x_n, x] = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}.$$

*Table 6.2: Table of divided differences for the Hermite polynomial*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_0, x_1, x_1 \\ldots, x_n, x_n]}$ |

When we compute the divided differences required in formula (6.8), we list the numbers in a triangular table (see Table 6.2). This is similar to Table 6.1. The difference is that we list all mesh points and the corresponding function values twice, and in the third column the first divided differences corresponding to equal mesh points are the given derivative values. The rest of the numbers in the table are computed in a similar way as in Table 6.1. The framed numbers are used in formula (6.8) as the coefficients.

**Example 6.21.** Consider the following data:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Find the corresponding Hermite interpolating polynomial. We fill out the following table of divided differences:

$$
\\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\\\
-1 & 2 & \\boxed{3} & & & & \\\\
1 & 4 & 1 & -1 & & & \\\\
1 & 4 & \\boxed{-5} & -3 & -1 & & \\\\
2 & 11 & 7 & 12 & 5 & 2 & \\\\
2 & 11 & \\boxed{30} & 23 & 11 & 2 & 0
\\end{array}
$$

In the third column the framed numbers are the input derivative values. Therefore, the Hermite polynomial is

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

so $H_5$ is a polynomial of degree 4. $\\square$

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

<details class="reveal-solution"><summary>Show solution</summary>

Build a divided-difference table with each mesh point repeated (so $z_{2i} = z_{2i+1} = x_i$), using $f[x_i,x_i] = y_i'$ for the repeated-point entries and ordinary divided differences elsewhere. The Hermite polynomial is then the Newton form
$$H_{2n+1}(x) = f[z_0] + f[z_0,z_1](x - z_0) + f[z_0,z_1,z_2](x - z_0)(x - z_1) + \\cdots.$$

**(a)** With $z = (-2,-2,-1,-1,0,0,1,1)$, $y = (4,1,14,-35)$, $y' = (-1,-2,43,-394)$, fill the table (leading entries $f[z_0]=4$, $f[z_0,z_1]=-1$, $f[z_0,z_1,z_2]=3$, $f[z_0,\\ldots,z_3]=-10$, $\\ldots$) and assemble $H_7(x)$.

**(b)** With $z = (-1,-1,0,0,2,2,3,3)$, $y = (1,2,64,-19)$, $y' = (3,-1,111,-301)$, the same construction gives $H_7(x)$.

</details>

2. Prove that if $P$ is a polynomial of degree at most $(2n + 2)$, $x_i$ $(i = 0, 1, \\ldots, n)$ are pairwise different mesh points, and $H_{2n+1}$ is the Hermite polynomial corresponding to $P$ and the mesh points, then $P(x) = H_{2n+1}(x)$ for all $x$.

<details class="reveal-solution"><summary>Show solution</summary>

Let $Q(x) = P(x) - H_{2n+1}(x)$. Since $H_{2n+1}$ matches $P$ in value and derivative at each $x_i$, we have $Q(x_i) = 0$ and $Q'(x_i) = 0$ for $i = 0, \\ldots, n$, so each $x_i$ is a double root of $Q$. Thus $Q$ has at least $2n+2$ roots counted with multiplicity, while $\\deg Q \\le 2n+2$. A nonzero polynomial of degree $\\le 2n+2$ cannot have $2n+2$ roots and still differ from these forced conditions; the only consistent possibility is $Q \\equiv 0$. Hence $P(x) = H_{2n+1}(x)$. $\\square$

</details>

3. Let $f \\in C^1$. Prove that
   $$\\lim_{(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)} f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$$
   and
   $$\\lim_{(x_0', \\ldots, x_{n-1}') \\to (x_0, \\ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \\ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \\ldots, x_{n-1}, x_{n-1}, x_n].$$

<details class="reveal-solution"><summary>Show solution</summary>

By Corollary 6.12 divided differences depend continuously on the mesh points when $f$ is continuous. As each $x_i' \\to x_i$, the divided difference with distinct points therefore approaches the divided difference with the corresponding repeated points, which is exactly the limit on the right-hand side (using the definition of divided differences with repeated points, $f[\\underbrace{x_0,x_0}_{2},\\ldots] = f^{(\\cdot)}(\\xi)/(\\cdot)!$). The limit holds by continuity. $\\square$

</details>

4. Let $i_0, i_1, \\ldots, i_n$ be a rearrangement of the finite sequence $0, 1, \\ldots, n$. Show that
   $$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \\ldots, x_{i_n}, x_{i_n}].$$

<details class="reveal-solution"><summary>Show solution</summary>

By Corollary 6.11 divided differences are independent of the order of the mesh points. This invariance extends to repeated points by the continuity argument of the previous exercise. Hence the divided difference is invariant under any permutation of the mesh points. $\\square$

</details>

5. The Hermite interpolation problem can be formulated in a general form: at the $i$th mesh point the first $k_i$ derivatives of a function is given, which we are to interpolate. We can generalize the method of this section. As an illustration we consider the following problem: given two mesh points $x_0$ and $x_1$, and a function $f \\in C^3$. We are looking for a polynomial of minimal degree for which

   $$H(x_0) = f(x_0), \\quad H'(x_0) = f'(x_0), \\quad H''(x_0) = f''(x_0), \\quad \\text{and} \\quad H(x_1) = f(x_1).$$

   (Here $k_0 = 2$ and $k_1 = 0$.) Show that the solution of this problem is the polynomial of degree at most 3

   $$H(x) := f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3.$$

<details class="reveal-solution"><summary>Show solution</summary>

There are 4 conditions, so we seek a polynomial of degree $\\le 3$. Use the Newton form with repeated nodes $z_0 = z_1 = z_2 = x_0$, $z_3 = x_1$:
$$H(x) = f[z_0] + f[z_0,z_1](x-z_0) + f[z_0,z_1,z_2](x-z_0)(x-z_1) + f[z_0,z_1,z_2,z_3](x-z_0)(x-z_1)(x-z_2),$$
which becomes the stated formula. One checks: $H(x_0) = f[x_0] = f(x_0)$; $H'(x_0) = f[x_0,x_0] = f'(x_0)$; $H''(x_0) = 2f[x_0,x_0,x_0] = f''(x_0)$; and $H(x_1) = f(x_1)$ by construction of the divided differences. $\\square$

</details>
`,x=`## 6.4. Hermite-interpoláció

Ebben a szakaszban az interpoláció alapfeladatát módosítjuk. Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \\ldots, n)$ véges sorozata. Az ún. *Hermite-féle interpolációs feladatban* azon kívül, hogy az $y_i = f(x_i)$ függvényértékeket interpoláljuk, az $y_i' \\equiv f'(x_i)$ derivált értékeket is szeretnénk interpolálni. Keresünk tehát egy olyan $g(x) = c_0 + c_1 x + \\cdots + c_m x^m$ polinomot, amelyre

$$g(x_i) = y_i, \\qquad g'(x_i) = y_i', \\qquad i = 0, 1, \\ldots, n$$

teljesül. A feladat geometriai jelentése az, hogy olyan polinomot keresünk, amelynek grafikonja a megadott irányokban megy át az adott $(x_i, y_i)$ pontokon, azaz az érintőjének iránytangense megegyezik az $y_i'$ értékekkel. A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy $m = 2n + 1$-edfokú polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. A következő tételben szükségünk lesz olyan magasabbrendű speciális osztott differenciákra, ahol az egymás után következő két alappont megegyezhet: $f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$, ahol $x_0, x_1, \\ldots, x_n$ páronként különböznek. Ezeket az osztott differenciákat a szokásos rekurzív definícióval értelmezhetjük eggyel alacsonyabb fokú osztott differenciák segítségével:

$$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = \\frac{f[x_0, x_1, x_1, \\ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \\ldots, x_n]}{x_n - x_0}.$$

Az alacsonyabb fokú osztott differenciákat is ehhez hasonlóan definiáljuk, és ezt folytathatjuk egészen addig, amíg különböző vagy egyenlő alappontokra felírt elsőrendű osztott differenciákig nem jutunk vissza, amelyeket már definiáltuk a 6.2 szakaszban.

**6.18. tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\\\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\\\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \\cdots \\tag{6.7} \\\\
&+ f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \\cdots (x - x_{n-1})^2(x - x_n)
\\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \\ldots, x_n, x_n, x](x - x_0)^2 \\cdots (x - x_n)^2. \\tag{6.8}$$

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor $P \\equiv H_{2n+1} - \\tilde{H}_{2n+1}$ is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre $P(x_i) = H_{2n+1}(x_i) - \\tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$, és $P'(x_i) = H'_{2n+1}(x_i) - \\tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \\ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú. Ebből következik, hogy az Hermite-féle interpolációs feladatnak legfeljebb egy $(2n + 1)$-edfokú megoldása lehet.

Most belátjuk, hogy a (6.7) képlettel definiált $H_{2n+1}$ polinom megoldása az Hermite-féle interpolációs feladatnak, és teljesíti a (6.8) hibaformulát. Direkt számolással rögtön kapjuk, hogy $H_{2n+1}(x_0) = f(x_0)$ és $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Következő lépésként belátjuk, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$ is teljesül. Ehhez válasszunk olyan $x_i$-hez közeli $\\tilde{x}_i$ számokat, hogy $\\{x_i, \\tilde{x}_i:\\ i = 0, 1, \\ldots, n\\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. Ekkor

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\\\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \\cdots \\\\
&+ f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'](x - x_0)(x - x_0') \\cdots (x - x_{n-1}) \\\\
&\\quad \\cdot (x - x_{n-1}')(x - x_n),
\\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \\ldots, x_n, x_n', x](x - x_0)(x - x_0') \\cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából (lásd a 3. feladatot) kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \\to H_{2n+1}(x) \\quad \\text{ha } (x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n), \\tag{6.9}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \\cdots (x - x_n)^2.$$

Ez igazolja a (6.8) összefüggést. A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\\\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \\cdots \\\\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \\ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\\\
&\\quad \\cdot (x - x_2)(x - x_2') \\cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\\end{aligned}$$

Ebből viszont kapjuk, mindkét oldal határértékét véve, ha $(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)$, és használva a (6.9) összefüggést és a határérték egyértelműségét, hogy

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\\\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \\cdots \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \\ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\\\
&\\quad \\cdots (x - x_{n-1})^2(x - x_n)
\\end{aligned}$$

alakban is felírható. Ebből viszont nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$ teljesül $i = 2, 3, \\ldots, n$-re is. $\\square$

**6.19. tétel.** *Legyen $f \\in C^{2n+2}$. Ekkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\ldots (x - x_n)^2.$$

**Bizonyítás.** A bizonyítás hasonló a 6.5 tétel bizonyításához. Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \\frac{(z - x_0)^2 \\cdots (z - x_n)^2}{(x - x_0)^2 \\cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \\in C^{2n+2}$, és $x_0, \\ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel (6.4 tétel) szerint létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy $g^{(2n+2)}(\\xi) = 0$. Ebből pedig következik a tétel állítása. $\\square$

A (6.8) összefüggést és a 6.19 tételt összehasonlítva rögtön kapjuk:

**6.20. következmény.** *Tegyük fel, hogy $f \\in C^{2n+2}$ és $x, x_0, \\ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy*

$$f[x_0, x_0, \\ldots, x_n, x_n, x] = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}.$$

Kézi számoláskor a (6.8) képlethez szükséges osztott differenciákat a 6.2 táblázat segítségével számolhatjuk ki. Megjegyezzük, hogy ez a táblázat nagyon hasonlít a 6.1 táblázathoz. A különbség az, hogy minden alappont és a hozzá tartozó függvényérték kétszer szerepel benne, és a harmadik oszlopban az azonos alappontokra felírt elsőrendű osztott differenciák is előre adottak, a megadott derivált értékkel egyeznek meg. A táblázat többi elemét ugyanúgy számítjuk, mint a 6.1 táblázatban. A bekeretezett számok fogják adni a (6.8) képletben szereplő együtthatókat.

*6.2. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_0, x_1, x_1 \\ldots, x_n, x_n]}$ |

**6.21. példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Keressük meg az adatokat interpoláló Hermite-féle interpolációs polinomot! Készítsük el a következő táblázatot:

$$
\\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\\\
-1 & 2 & \\boxed{3} & & & & \\\\
1 & 4 & 1 & -1 & & & \\\\
1 & 4 & \\boxed{-5} & -3 & -1 & & \\\\
2 & 11 & 7 & 12 & 5 & 2 & \\\\
2 & 11 & \\boxed{30} & 23 & 11 & 2 & 0
\\end{array}
$$

(A harmadik oszlopban bekereteztük az inputként megadott derivált értékeket.) Az Hermite-polinom tehát

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

azaz $H_5$ jelen esetben egy negyedfokú polinom. $\\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Hermite-féle interpolációs polinomokat:

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

<details class="reveal-solution"><summary>Megoldás</summary>

Build a divided-difference table with each mesh point repeated (so $z_{2i} = z_{2i+1} = x_i$), using $f[x_i,x_i] = y_i'$ for the repeated-point entries and ordinary divided differences elsewhere. The Hermite polynomial is then the Newton form
$$H_{2n+1}(x) = f[z_0] + f[z_0,z_1](x - z_0) + f[z_0,z_1,z_2](x - z_0)(x - z_1) + \\cdots.$$

**(a)** With $z = (-2,-2,-1,-1,0,0,1,1)$, $y = (4,1,14,-35)$, $y' = (-1,-2,43,-394)$, fill the table (leading entries $f[z_0]=4$, $f[z_0,z_1]=-1$, $f[z_0,z_1,z_2]=3$, $f[z_0,\\ldots,z_3]=-10$, $\\ldots$) and assemble $H_7(x)$.

**(b)** With $z = (-1,-1,0,0,2,2,3,3)$, $y = (1,2,64,-19)$, $y' = (3,-1,111,-301)$, the same construction gives $H_7(x)$.

</details>

2. Bizonyítsa be, hogy ha $P$ egy legfeljebb $(2n + 2)$-edfokú polinom, $x_i$ $(i = 0, 1, \\ldots, n)$ páronként különböző alappontok, és $H_{2n+1}$ a $P$-hez és az alappontokhoz tartozó Hermite-polinom, akkor $P(x) = H_{2n+1}(x)$ minden $x$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

Let $Q(x) = P(x) - H_{2n+1}(x)$. Since $H_{2n+1}$ matches $P$ in value and derivative at each $x_i$, we have $Q(x_i) = 0$ and $Q'(x_i) = 0$ for $i = 0, \\ldots, n$, so each $x_i$ is a double root of $Q$. Thus $Q$ has at least $2n+2$ roots counted with multiplicity, while $\\deg Q \\le 2n+2$. The only consistent possibility is $Q \\equiv 0$. Hence $P(x) = H_{2n+1}(x)$. $\\square$

</details>

3. Legyen $f \\in C^1$. Bizonyítsa be, hogy
   $$\\lim_{(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)} f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$$
   és
   $$\\lim_{(x_0', \\ldots, x_{n-1}') \\to (x_0, \\ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \\ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \\ldots, x_{n-1}, x_{n-1}, x_n]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.12 divided differences depend continuously on the mesh points when $f$ is continuous. As each $x_i' \\to x_i$, the divided difference with distinct points therefore approaches the divided difference with the corresponding repeated points, which is exactly the limit on the right-hand side. The limit holds by continuity. $\\square$

</details>

4. Legyen $i_0, i_1, \\ldots, i_n$ a $0, 1, \\ldots, n$ véges számsorozatnak egy átrendezése. Lássa be, hogy ekkor
   $$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \\ldots, x_{i_n}, x_{i_n}]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.11 divided differences are independent of the order of the mesh points. This invariance extends to repeated points by the continuity argument of the previous exercise. Hence the divided difference is invariant under any permutation of the mesh points. $\\square$

</details>

5. Az Hermite-interpolációs feladatot általánosabban is meg lehet fogalmazni: az $i$-edik osztópontban a függvényérték és az első $k_i$ derivált érték adott, amelyeket interpolálni szeretnénk. Erre a feladatra könnyen általánosítható az ebben a szakaszban tárgyalt módszer. Illusztrálásként tekintsünk most egy konkrét, egyszerű feladatot: adott két osztópont, $x_0$ és $x_1$, és egy $f \\in C^3$ függvény. Keresünk egy olyan minimális fokszámú polinomot, amelyre

   $$H(x_0) = f(x_0), \\quad H'(x_0) = f'(x_0), \\quad H''(x_0) = f''(x_0), \\quad \\text{és} \\quad H(x_1) = f(x_1).$$

   (Itt $k_0 = 2$ és $k_1 = 0$.) Lássa be, hogy a feladat megoldása a

   $$H(x) \\equiv f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3$$

   legfeljebb harmadfokú polinom!

<details class="reveal-solution"><summary>Megoldás</summary>

There are 4 conditions, so we seek a polynomial of degree $\\le 3$. Use the Newton form with repeated nodes $z_0 = z_1 = z_2 = x_0$, $z_3 = x_1$:
$$H(x) = f[z_0] + f[z_0,z_1](x-z_0) + f[z_0,z_1,z_2](x-z_0)(x-z_1) + f[z_0,z_1,z_2,z_3](x-z_0)(x-z_1)(x-z_2),$$
which becomes the stated formula. One checks: $H(x_0) = f[x_0] = f(x_0)$; $H'(x_0) = f[x_0,x_0] = f'(x_0)$; $H''(x_0) = 2f[x_0,x_0,x_0] = f''(x_0)$; and $H(x_1) = f(x_1)$ by construction of the divided differences. $\\square$

</details>
`;export{x as a,e as b,i as c,a as h,n as l,t as n};
