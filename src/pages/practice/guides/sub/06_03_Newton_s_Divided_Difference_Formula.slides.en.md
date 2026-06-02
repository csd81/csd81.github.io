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

