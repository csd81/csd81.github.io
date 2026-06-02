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

## 6.2 Divided Differences

Given a function $f \colon [a,b] \to \mathbb{R}$ and pairwise different mesh points $x_i \in [a,b]$ $(i = 0, \ldots, n)$. The **zeroth divided difference** of $f$ at the point $x_0$ is

$$f[x_0] := f(x_0).$$

The **first divided difference** at $x_0, x_1$ is

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0},$$

i.e.,

$$f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}.$$

In general, the **$n$th divided difference** is defined by

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0}.$$

---

**Theorem.** *Let $x_i$ $(i = 0, 1, \ldots, n)$ be pairwise different mesh points. Then*

$$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)}.$$

**Proof.** For $n = 0$ the statement is obvious. (In this case in the denominator we have the "empty product", which equals 1.) Suppose the statement holds for $n$, and consider $f[x_0, x_1, \ldots, x_{n+1}]$.

**Proof (cont.)**

$$\begin{aligned}
f&[x_0, x_1, \ldots, x_{n+1}] = \frac{f[x_1, x_2, \ldots, x_{n+1}] - f[x_0, x_1, \ldots, x_n]}{x_{n+1} - x_0} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \sum_{i=1}^{n+1} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})} \\
&\qquad - \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \Bigg\} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \frac{f(x_{n+1})}{(x_{n+1} - x_1) \cdots (x_{n+1} - x_n)} - \frac{f(x_0)}{(x_0 - x_1) \cdots (x_0 - x_n)} \\
&\qquad + \sum_{i=1}^{n} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \cdot \left( \frac{1}{x_i - x_{n+1}} - \frac{1}{x_i - x_0} \right) \Bigg\} \\
&= \sum_{i=0}^{n+1} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})}. \qquad \square
\end{aligned}$$

---

**Corollary.** *The divided differences are independent of the order of the mesh points.*

**Corollary.** *If the function $f$ is continuous, then the divided differences depend continuously on the mesh points.*

---

Suppose $f$ is differentiable. Then $x_1 \mapsto f[x_0, x_1]$ is continuous for $x_1 \neq x_0$. Using the definition and the differentiability of $f$,

$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Therefore, we define the first divided difference relative to equal mesh points by

$$f[x_0, x_0] := f'(x_0).$$

With this definition the function $x_1 \mapsto f[x_0, x_1]$ is extended continuously for $x_1 = x_0$.

---

## 6.3 Newton's Divided Difference Form of the Lagrange Polynomial

Suppose function values $y_i = f(x_i)$ are given for $i = 0, 1, \ldots, n$. Consider the relation

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x)).$$

By definition, $L_0(x) = f(x_0)$. The difference $L_i - L_{i-1}$ is a polynomial of degree at most $i$, and since $L_i$ and $L_{i-1}$ both satisfy the interpolating equations at $x_0$, $\ldots$, $x_{i-1}$,

$$L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0, \qquad j = 0, 1, \ldots, i - 1.$$

Then the Fundamental Theorem of Algebra yields

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

where $a_i \in \mathbb{R}$. Substituting $x = x_i$ and using the Lagrange formula for $L_{i-1}(x_i)$,

$$f(x_i) - \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} = a_i(x_i - x_0) \cdots (x_i - x_{i-1}).$$

---

Expressing $a_i$:

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \times \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

---

The Lagrange interpolating polynomial can be written as

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}). \tag{3}
\end{aligned}$$

The polynomial given by (3) is called **Newton's divided difference form** or shortly **Newton polynomial.** It is easy to add a new mesh point:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

---

**Algorithm: Computation of the coefficients of the Newton polynomial**

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

---

**Algorithm: Evaluation of the Newton polynomial**

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

---

**Computation of the divided differences by hand**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

---

**Example.** Consider again the data:

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -2 | 0 | -2 | 2 |

We form the table of divided differences. The step-by-step computation (animation):

$$\frac{0-(-2)}{1-(-1)} = 1, \quad \frac{-2-0}{2-1} = -2, \quad \frac{2-(-2)}{3-2} = 4,$$
$$\frac{-2-1}{2-(-1)} = -1, \quad \frac{4-(-2)}{3-1} = 3, \quad \frac{3-(-1)}{3-(-1)} = 1.$$

The full table:

$$
\begin{array}{rrrrr}
-1 & -2 & & & \\
1 & 0 & 1 & & \\
2 & -2 & -2 & -1 & \\
3 & 2 & 4 & 3 & 1
\end{array}
$$

Hence

$$L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2),$$

and $L_3(0) = 2$. Simplifying gives $L_3(x) = x^3 - 3x^2 + 2$.

---

**Theorem.** *Let $x_i \in (a,b)$ $(i = 0, \ldots, n)$ be pairwise different mesh points and $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Let $L_n(x)$ be the corresponding $n$th degree Lagrange polynomial. Then*

$$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n).$$

**Proof.** Fix $x \in (a, b)$ different from each mesh point. Add $x$ to the mesh points with the function value $f(x)$. Let $L_{n+1}$ be the Lagrange polynomial corresponding to the extended data set. By the definition of the Newton polynomial,

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Substitution $t = x$ proves the statement, since $f(x) = L_{n+1}(x)$. $\square$

---

**Corollary.** *If $f \in C^n(a,b)$ and $x_i$ $(i = 0, \ldots, n)$ are pairwise different mesh points, then there exists $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$ such that*

$$f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!}.$$

---

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
