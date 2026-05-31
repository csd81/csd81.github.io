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

<details class="reveal-solution"><summary>Show solution</summary>

**(a) $f[x_0,x_1,x_2,x_3]$ with $x_i = i$, $f(x) = x^2$:** the divided-difference table gives $f[0,1] = 1$, $f[1,2] = 3$, $f[2,3] = 5$; then $f[0,1,2] = 1$, $f[1,2,3] = 1$; and finally $f[0,1,2,3] = 0$. (As expected: the third divided difference of a degree-2 polynomial is $0$.)

**(b) $f[x_0,x_1,x_2]$ with $x_i = 0.2i$, $f = \sin x$:** $f[0,0.2] = 0.9935$, $f[0.2,0.4] = 0.9535$, so $f[0,0.2,0.4] = (0.9535 - 0.9935)/0.4 \approx -0.01$.

**(c) $f[x_0,x_0]$ with $x_0 = 0$, $f = \sin x$:** by definition $f[x_0,x_0] = f'(x_0) = \cos 0 = 1$.

</details>

2. Let $f \in C^1[a,b]$, and $x_0, x_1 \in (a, b)$, $x_0 \neq x_1$. Show that there exists $\xi \in \langle x_0, x_1 \rangle$ such that
   $$f[x_0, x_1] = f'(\xi).$$

<details class="reveal-solution"><summary>Show solution</summary>

By definition $f[x_0,x_1] = \dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$. By the Mean Value Theorem there exists $\xi \in (x_0,x_1)$ with
$$f'(\xi) = \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f[x_0, x_1]. \qquad \square$$

</details>

3. Let $x_0 < x_1 < x_2 < x_3$ and
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Show that
   $$a_0 = P[x_0], \quad a_1 = P[x_0, x_1], \quad a_2 = P[x_0, x_1, x_2], \quad \text{and} \quad a_3 = P[x_0, x_1, x_2, x_3].$$

<details class="reveal-solution"><summary>Show solution</summary>

Substituting successively: $P(x_0) = a_0$, so $a_0 = P[x_0]$. From $P(x_1) = a_0 + a_1(x_1 - x_0)$,
$$a_1 = \frac{P(x_1) - P(x_0)}{x_1 - x_0} = P[x_0, x_1].$$
From $P(x_2) = a_0 + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2 - x_1)$,
$$a_2 = \frac{P[x_0,x_2] - P[x_0,x_1]}{x_2 - x_1} = P[x_0,x_1,x_2],$$
and similarly using $P(x_3)$ gives $a_3 = P[x_0,x_1,x_2,x_3]$. $\square$

</details>

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
