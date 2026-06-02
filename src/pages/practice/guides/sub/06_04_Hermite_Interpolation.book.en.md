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

