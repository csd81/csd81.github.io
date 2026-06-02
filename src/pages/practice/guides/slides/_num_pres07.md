# Numerical Analysis

## 7 Numerical differentiation and integration

**Ferenc Hartung**
University of Pannonia — Department of Mathematics
Veszprém, Hungary
2025

---

# 7.1 Numerical differentiation

---

The definition of the derivative of a function:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}.
$$

Therefore, if $|h|$ is small, then

$$
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0)}{h}
$$

We need to know the truncation error of the approximation.

---

**First method: Lagrange's method**

We approximate the function $f$ in a neighbourhood of $x_0$ by a Lagrange polynomial $L_n(x)$. Then use

$$
f'(x_0) \approx L'_n(x_0)
$$

---

Suppose $f \in C^3[a, b]$ and $x_0 \in (a, b)$, let $n = 1$, $x_1 = x_0 + h \in (a, b)$ ($h \neq 0$), consider the first-order Lagrange polynomial interpolation of $f$ corresponding to the mesh points $x_0$ and $x_1$:

$$
\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\
&= \frac{f(x_0)(x - x_0 - h)}{-h} + \frac{f(x_0 + h)(x - x_0)}{h} + \frac{f''(\xi(x))}{2}(x - x_0)(x - x_0 - h).
\end{aligned}
$$

Taking the derivative of both sides we get

$$
f'(x) = -\frac{f(x_0)}{h} + \frac{f(x_0 + h)}{h} + \frac{f''(\xi(x))}{2}\bigl(2(x - x_0) - h\bigr) + \frac{d}{dx}f''(\xi(x))\,\frac{(x - x_0)(x - x_0 - h)}{2}.
\tag{1}
$$

---

For $x = x_0$ in (1) we get

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
\tag{2}
$$

where $\xi \in \langle x_0, x_0 + h \rangle$. I.e., if we use the approximation formula

$$
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0)}{h},
\tag{3}
$$

the truncation error of the approximation has the form $-\dfrac{h}{2}f''(\xi)$. Formula (3) is called **first-order forward difference formula** if $h > 0$, and **first-order backward difference formula** if $h < 0$. The approximation (3) is first-order in $h$. Formula (3) is also called **two-point formula**.

> backward difference: $h < 0$ — forward difference: $h > 0$

---

**second method: Taylor's method**

Let $f \in C^2[a, b]$, and consider the first-order Taylor expansion of $f$ around $x_0$:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(\xi(x))}{2}(x - x_0)^2.
$$

Substitution $x = x_0 + h$ gives

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(\xi)}{2}h^2,
$$

hence

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
$$

where $\xi = \xi(x_0 + h)$.

---

**Example**

Consider the function $f(x) = e^{x^2 + x}$. We have $f'(x) = e^{x^2 + x}(2x + 1)$, so $f'(0) = 1$. We compute an approximate value of $f'(0)$ using the first-order forward ($h > 0$) and backward ($h < 0$) difference formula, i.e., formula (3).

$$
\begin{aligned}
\text{for } h = 0.1: \quad f'(0) &\approx \frac{f(0.1) - f(0)}{0.1} = \frac{1.116278070 - 1}{0.1} = 1.162780700 \\
\text{for } h = -0.1: \quad f'(0) &\approx \frac{f(-0.1) - f(0)}{-0.1} = \frac{0.9139311853 - 1}{-0.1} = 0.8606881470
\end{aligned}
$$

First-order difference formula, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward diff. | error | backward diff. | error |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

---

Suppose $f \in C^{n+1}$, and consider an approximation of $f$ by a Lagrange polynomial of degree $n$:

$$
f(x) = \sum_{k=0}^{n} f(x_k)l_k(x) + \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n),
\tag{4}
$$

where $l_k(x)$ are the Lagrange basis polynomials of degree $n$. Differentiating (4) and using substitution $x = x_i$ we get

$$
f'(x_i) = \sum_{j=0}^{n} f(x_j)l'_j(x_i) + \frac{f^{(n+1)}(\xi(x_i))}{(n+1)!}\prod_{\substack{j=0 \\ j \neq i}}^{n}(x_i - x_j),
\tag{5}
$$

which is called **$n + 1$-point formula** to approximate $f'(x_i)$. We assume $x_j = x_0 + jh$, where $h > 0$. The error term in (5) is of $n$th-order in $h$, and then the resulting formula will also be called difference formula of order $n$.

---

Consider the case when $n = 2$, i.e., three-point formulas. Consider the mesh points $x_0, x_1 = x_0 + h, x_2 = x_0 + 2h$. Then

$$
\begin{aligned}
l_0(x) &= \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \frac{(x - x_1)(x - x_2)}{2h^2}, \\
l_1(x) &= \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \frac{(x - x_0)(x - x_2)}{-h^2}, \\
l_2(x) &= \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \frac{(x - x_0)(x - x_1)}{2h^2},
\end{aligned}
$$

therefore

$$
l'_0(x) = \frac{2x - x_1 - x_2}{2h^2}, \qquad l'_1(x) = \frac{2x - x_0 - x_2}{-h^2}, \qquad l'_2(x) = \frac{2x - x_0 - x_1}{2h^2}.
$$

We apply them with $x = x_0$, $x = x_0 + h$ and $x = x_0 + 2h$, so relation (5) yields

---

$$
f'(x_0) = \frac{1}{h}\left(-\frac{3}{2}f(x_0) + 2f(x_0 + h) - \frac{1}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_0),
\tag{6}
$$

$$
f'(x_0 + h) = \frac{1}{h}\left(-\frac{1}{2}f(x_0) + \frac{1}{2}f(x_0 + 2h)\right) - \frac{h^2}{6}f'''(\xi_1),
\tag{7}
$$

$$
f'(x_0 + 2h) = \frac{1}{h}\left(\frac{1}{2}f(x_0) - 2f(x_0 + h) + \frac{3}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_2).
\tag{8}
$$

The substitutions $x_0 \leftarrow x_0 - 2h$ and $h \leftarrow -h$ give that (8) can be written in the form (6). Formula (6) is called **second-order forward difference formula** if $h > 0$, and **second-order backward difference formula** if $h < 0$. It is also called **three-point endpoint formula**.

---

Using substitution $x_0 \leftarrow x_0 - h$ in (7), we get

$$
f'(x_0) = \frac{1}{h}\left(-\frac{1}{2}f(x_0 - h) + \frac{1}{2}f(x_0 + h)\right) - \frac{h^2}{6}f'''(\xi_1).
\tag{9}
$$

Relation (9) is called **three-point midpoint formula** or **second-order central difference formula**. (It is also called centered difference.)

---

**Example**

We approximate the derivative of the function $f(x) = e^{x^2 + x}$ at $x = 0$ with second-order difference formulas (formulas (6) and (9)). The central difference formula for $h = 0.1$:

$$
f'(0) \approx \frac{f(x_0 + h) - f(x_0 - h)}{2h} = \frac{1.1162781 - 0.9139312}{2 \cdot 0.1} = 1.0117344
$$

The results can be seen in the next table for different values of $h$. The numerical results demonstrate that the truncation error of the formulas is second-order in $h$.

Second-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

---

Without proofs we present 5-point central and one-sided formulas, i.e., fourth-order difference formulas:

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) - 3f(x_0 + 4h)\Bigr) \\
&+ \frac{h^4}{5}f^{(5)}(\xi_0),
\end{aligned}
\tag{10}
$$

$$
f'(x_0) = \frac{1}{12h}\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\Bigr) + \frac{h^4}{30}f^{(5)}(\xi_1).
\tag{11}
$$

Formula (10) is one-sided, and (11) is central difference.

---

**Example**

We apply formulas (10) and (11) to approximate the first derivative of $f(x) = e^{x^2 + x}$ at $x = 0$. The next table shows the numerical results.

Fourth-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

---

Next we use the Taylor's method to derive approximation of $f''(x_0)$. Let $f \in C^4$, and consider the Taylor polynomial expansion:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \frac{f'''(x_0)}{6}(x - x_0)^3 + \frac{f^{(4)}(\xi)}{24}(x - x_0)^4.
$$

If we substitute $x = x_0 - h$ and $x = x_0 + h$ into this relation, we get

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \frac{f''(x_0)}{2}h^2 - \frac{f'''(x_0)}{6}h^3 + \frac{f^{(4)}(\xi_1)}{24}h^4
$$

and

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(x_0)}{2}h^2 + \frac{f'''(x_0)}{6}h^3 + \frac{f^{(4)}(\xi_2)}{24}h^4.
$$

Adding the two equations we get

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^4,
$$

which yields

---

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^2.
$$

Therefore the approximation formula

$$
f''(x_0) \approx \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
$$

has an error of order $h^2$. Since $f^{(4)}$ is continuous, the Intermediate Value Theorem yields that there exists a point $\xi \in \langle \xi_1, \xi_2 \rangle$ such that

$$
f^{(4)}(\xi) = \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{2}.
$$

Hence

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2.
\tag{12}
$$

---

**Example**

We computed an approximation of the second-order derivative of $f(x) = e^{x^2 + x}$ at $x_0 = 0$. The exact value is $f''(0) = 3$. For $h = 0.1$ we get

$$
f''(0) \approx \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} = \frac{0.9139312 - 2 \cdot 1 + 1.1162781}{0.1^2} = 3.0209256
$$

The numerical results can be seen in the next table.

Approximation of $f''(x_0)$, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | approximation | error |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

---

The numerical differentiation is an unstable problem. To illustrate it, we consider a function $f(x)$ and its perturbation

$$
g(x) = f(x) + \frac{1}{n}\sin(n^2 x).
$$

Then

$$
|g(x) - f(x)| = \left|\frac{1}{n}\sin(n^2 x)\right| \leq \frac{1}{n}, \qquad x \in \mathbb{R}.
$$

We have

$$
g'(x) = f'(x) + n\cos(n^2 x),
$$

therefore

$$
|g'(0) - f'(0)| = n.
$$

---

Next we investigate the effect of the rounding in numerical differentiation. Suppose

$$
f(x_0) = f_0 + e_0 \quad\text{and}\quad f(x_0 + h) = f_1 + e_1.
$$

Use the first-order difference formula with approximate function values

$$
f'(x_0) \approx \frac{f_1 - f_0}{h}.
$$

The resulting error is

$$
\begin{aligned}
f'(x_0) - \frac{f_1 - f_0}{h} &= f'(x_0) - \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f(x_0 + h) - f(x_0)}{h} - \frac{f_1 - f_0}{h} \\
&= -\frac{h}{2}f''(\xi) + \frac{e_1 - e_0}{h}.
\end{aligned}
$$

This relation shows that the error consists of two parts, the truncation error and the rounding error. If the step-size $h$ is small, then the truncation error will be small, but the rounding error goes to $\infty$ as $h \to 0$.

---

**Example**

Consider the function $f(x) = e^x$, and compute the approximation of $f'(1)$ using first-order forward difference formula with 6- and 4-digit arithmetic in the computation.

Effect of rounding in first-order forward difference, $f(x) = e^x$, $x_0 = 1$

| | 6-digit arithmetic | | 4-digit arithmetic | |
|---|---|---|---|---|
| $h$ | approximation | error | approximation | error |
| 0.100 | 2.85890 | 0.1406181 | 2.860 | 0.1417181 |
| 0.010 | 2.73200 | 0.0137181 | 2.800 | 0.0817181 |
| 0.001 | 2.72000 | 0.0017181 | 3.000 | 0.2817181 |

---

The formulas derived in this section can be applied to approximate partial derivatives:

$$
\frac{\partial f(x_0, y_0)}{\partial x} \approx \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}
$$

$$
\frac{\partial f(x_0, y_0)}{\partial y} \approx \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial y^2} \approx \frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x\,\partial y} \approx \frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
$$

---

# 7.2 Richardson's extrapolation

---

Given a value $M$, and let $K(h)$ be its approximation, where $h$ denotes the discretization parameter of the approximation method. We also suppose that the truncation error of the approximation has a special form:

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + a_{2m} h^{2m} + b(h),
$$

where $|b(h)| \leq B h^{2m+2}$ with some constant $B > 0$. Then $K(h)$ approximates $M$ with order 2. Consider this relation with parameter $h/2$:

$$
M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m}} + b(h/2).
$$

Then

$$
4M = 4K(h/2) + a_2 h^2 + a_4 \frac{h^4}{4} + a_6 \frac{h^6}{16} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m-2}} + 4b(h/2).
$$

Hence

$$
M = \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 - \cdots - \frac{2^{2m-2} - 1}{2^{2m-2}\cdot 3}a_{2m}h^{2m} + \frac{4b(h/2) - b(h)}{3}.
$$

---

Last relation can be written in the form

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
$$

where

$$
K^{(1)} := \frac{4K(h/2) - K(h)}{3}, \qquad b^{(1)}(h) := \frac{4b(h/2) - b(h)}{3}, \qquad a_{2i}^{(1)} := \frac{1 - 4^{i-1}}{4^{i-1}\cdot 3}a_{2i},
$$

$i = 2, \ldots, m$. Formula $K^{(1)}(h)$ approximates $M$ with a fourth-order error in $h$. The previous method can be repeated:

$$
M = K^{(1)}(h/2) + a_4^{(1)}\frac{h^4}{16} + a_6^{(1)}\frac{h^6}{2^6} + \cdots + a_{2m}^{(1)}\frac{h^{2m}}{2^{2m}} + b^{(1)}(h/2).
$$

---

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
$$

where

$$
K^{(2)} := \frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \qquad b^{(2)}(h) := \frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} := \frac{1 - 4^{i-2}}{4^{i-2}\cdot 15}a_{2i}^{(1)}, \qquad i = 3, \ldots, m.
$$

We observe that $K^{(2)}(h)$ approximates $M$ with a sixth-order error in $h$. The generation of new approximation formulas can be continued as

$$
K^{(i+1)} := K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1,
$$

where $K^{(0)}(h) := K(h)$. This procedure to generate higher order approximation formulas is called **Richardson's extrapolation**.

---

**Example**

We have seen that the central difference formula is second-order in $h$. Suppose that $f \in C^{2m+3}$, and consider the following Taylor's expansion:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \frac{f^{(2m+3)}(\xi_1)}{(2m+3)!}h^{2m+3}.
$$

Then

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} - \frac{f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+3}.
$$

Subtracting the two equations, and solving it for $f'(x_0)$ we get:

$$
\begin{aligned}
f'(x_0) ={}& \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(x_0)}{3!}h^2 - \frac{f^{(5)}(x_0)}{5!}h^4 \\
&- \cdots - \frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \frac{f^{(2m+3)}(\xi_1) + f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+2}.
\end{aligned}
$$

Hence the central difference satisfies the starting assumption of the Richardson's extrapolation.

---

**Example cont.**

We have that formula

$$
\begin{aligned}
K^{(1)}(h) &= \frac{4\,\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\
&= \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\end{aligned}
$$

has fourth-order error in $h$.

---

# 7.3 Newton–Cotes Formulas

---

Let $f \in C[a, b]$, consider a finite partition $a = x_0 < x_1 < \cdots < x_n = b$, and let $\xi_i \in [x_{i-1}, x_i]$ for $i = 1, \ldots, n$. Then

$$
\int_a^b f(x)\,dx = \lim \sum_{i=1}^{n} f(\xi_i)(x_i - x_{i-1})
$$

as the norm of the partition, i.e., $\max\{x_i - x_{i-1} : i = 1, \ldots, n\}$ goes to zero. Such a Riemann's sum is for example

$$
\int_a^b f(x)\,dx \approx \frac{b - a}{n}\left(f\left(\frac{x_0 + x_1}{2}\right) + f\left(\frac{x_1 + x_2}{2}\right) + \cdots + f\left(\frac{x_{n-1} + x_n}{2}\right)\right),
$$

where $x_i = a + i(b - a)/n$, $i = 0, 1, \ldots, n$. This formula is called **midpoint rule** or **rectangle rule**.

---

**Lagrange's method:** Consider a partition of the interval $[a, b]$ (typically with equidistant mesh points), and let

$$
L_n(x) = \sum_{k=0}^{n} f(x_k)l_k(x)
$$

be the Lagrange interpolating polynomial of the function $f$, where $l_k(x)$ (corresponding to the mesh points) is the Lagrange basis polynomial of degree $n$. Then use

$$
\int_a^b f(x)\,dx \approx \int_a^b L_n(x)\,dx = \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx.
$$

Suppose $f \in C^{n+1}[a, b]$. Then

$$
\int_a^b f(x)\,dx = \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx + \int_a^b \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)\,dx.
\tag{13}
$$

---

We get an approximation formula of the form

$$
\int_a^b f(x)\,dx \approx \sum_{k=0}^{n} c_k f(x_k),
\tag{14}
$$

where the weights $c_k$ are defined by

$$
c_k = \int_a^b l_k(x)\,dx.
\tag{15}
$$

Approximation formulas of the form (14) are called **quadrature formulas**. Those quadrature formulas when the weights $c_k$ are defined by the integrals (15) are called **Newton–Cotes formulas**. If the end points of the interval $a$ and $b$ belong to the mesh points, then formulas (14)–(15) are called **closed Newton–Cotes formulas**, and if all mesh points belong to the open interval $(a, b)$, then they are called **open Newton–Cotes formulas**.

---

Next we consider the closed Newton–Cotes formula for $n = 1$. Let $x_0 = a$, $x_1 = b$ and $h = b - a$. Then

$$
L_1(x) = f(x_0)\frac{x - x_1}{x_0 - x_1} + f(x_1)\frac{x - x_0}{x_1 - x_0} = -f(x_0)\frac{x - x_1}{h} + f(x_1)\frac{x - x_0}{h},
$$

so

$$
\begin{aligned}
\int_{x_0}^{x_1} L_1(x)\,dx &= -\frac{f(x_0)}{h}\int_{x_0}^{x_1}(x - x_1)\,dx + \frac{f(x_1)}{h}\int_{x_0}^{x_1}(x - x_0)\,dx \\
&= -\frac{f(x_0)}{h}\left[\frac{(x - x_1)^2}{2}\right]_{x_0}^{x_1} + \frac{f(x_1)}{h}\left[\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr).
\end{aligned}
$$

---

**Theorem: (Intermediate Value Theorem for integrals)**

Suppose $f \in C[a, b]$, $g : [a, b] \to \mathbb{R}$ is integrable which has no sign change on $[a, b]$ (i.e., $g(x) \geq 0$ or $g(x) \leq 0$ holds for all $x \in [a, b]$). Then there exists $\xi \in (a, b)$ such that

$$
\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx.
$$

The error is

$$
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) = \int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx.
$$

To simplify the formula of the error term we use that $(x - x_0)(x - x_1) < 0$ for $x \in (x_0, x_1)$, and hence the Intermediate Value Theorem for integrals can be used.

---

Therefore there exists $\eta \in (x_0, x_1)$ such that

$$
\int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx = \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)(x - x_0 - h)\,dx.
$$

Hence

$$
\begin{aligned}
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) &= \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\,dx \\
&= \frac{f''(\eta)}{2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= -\frac{h^3}{12}f''(\eta).
\end{aligned}
$$

---

We obtained the so-called **trapezoidal rule**:

$$
\int_a^b f(x)\,dx = \frac{h}{2}\bigl(f(a) + f(b)\bigr) - \frac{h^3}{12}f''(\xi), \qquad \xi \in (a, b).
$$

---

If we have a large interval, then we divide it to $n$ subintervals of equal length by the mesh points $x_i = a + ih$ ($i = 0, 1, \ldots, n$), where $h = (b - a)/n$, and we apply the trapezoidal rule for each subintervals:

$$
\begin{aligned}
\int_a^b f(x)\,dx &= \sum_{i=1}^{n}\int_{x_{i-1}}^{x_i} f(x)\,dx \\
&= \sum_{i=1}^{n}\frac{h}{2}\bigl(f(x_{i-1}) + f(x_i)\bigr) - \frac{h^3}{12}\sum_{i=1}^{n} f''(\xi_i) \\
&= \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{nh^3}{12}\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i).
\end{aligned}
$$

We suppose that $f \in C^2[a, b]$. Then the Intermediate Value Theorem implies that the average value $\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i)$ can be replaced by a single function value of the form $f''(\xi)$.

---

Therefore, using $hn = b - a$, we get

$$
\int_a^b f(x)\,dx = \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{(b - a)h^2}{12}f''(\xi), \qquad \xi \in (a, b).
$$

This formula is called **composite trapezoidal rule**.

---

**Example**

Approximate $\int_0^1 x^2 e^x\,dx$ using the basic or composite trapezoidal rule with $h = 1$, $h = 0.5$ and $h = 0.25$, respectively. The exact value of the integral is $\int_0^1 x^2 e^x\,dx = e - 2 = 0.7182818$. For $h = 1$ we have

$$
\int_0^1 x^2 e^x\,dx \approx \frac{1}{2}(0 + e) = 1.3591409,
$$

where we computed the numerical values with 7 digits precision. The error in this case is $0.6408591$. With $h = 0.5$ the composite trapezoidal rule gives

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{2}(0 + 2 \cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Hence its error is $0.1673788$. Finally, for $h = 0.25$ we get

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{2}\bigl(0 + 2(0.25^2 e^{0.25} + 0.5^2 e^{0.5} + 0.75^2 e^{0.75}) + e\bigr) = 0.7605963,
$$

so its error is $0.0423145$.

---

Consider formula (13) for $n = 2$ and using equidistant mesh points, i.e., $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\begin{aligned}
\int_{x_0}^{x_2} L_2(x)\,dx ={}& f(x_0)\int_{x_0}^{x_2} \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\,dx + f(x_1)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\,dx \\
&+ f(x_2)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\,dx \\
={}& \frac{f(x_0)}{2h^2}\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\,dx - \frac{f(x_1)}{h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\,dx \\
&+ \frac{f(x_2)}{2h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\,dx \\
={}& \frac{f(x_0)}{2h^2}\left[\frac{(x - x_2)^3}{3} + h\frac{(x - x_2)^2}{2}\right]_{x_0}^{x_2} - \frac{f(x_1)}{h^2}\left[\frac{(x - x_0)^3}{3} - 2h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
&+ \frac{f(x_2)}{2h^2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
={}& \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr).
\end{aligned}
$$

---

The truncation error is

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx.
$$

Here the function $(x - x_0)(x - x_1)(x - x_2)$ has opposite signs on the intervals $(x_0, x_1)$ and $(x_1, x_2)$, so the Intermediate Value Theorem for Integrals is not applicable on $(x_0, x_2)$. We have a different method. Let

$$
\begin{aligned}
p(x) &:= \int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\,dt \\
&= \int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\,dt \\
&= \left[\frac{(t - x_1)^4}{4} - h^2\frac{(t - x_1)^2}{2}\right]_{x_0}^{x} \\
&= \frac{(x - x_1)^4}{4} - \frac{h^2(x - x_1)^2}{2} + \frac{h^4}{4} = \frac{1}{4}\bigl((x - x_1)^2 - h^2\bigr)^2.
\end{aligned}
$$

---

Then $p(x_0) = p(x_2) = 0$, so integration by parts gives

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\int_{x_0}^{x_2} \frac{d}{dx}\frac{f'''(\xi(x))}{6}\,p(x)\,dx.
$$

$p$ is a nonnegative function, hence we get

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\frac{f^{(4)}(\eta)}{24}\int_{x_0}^{x_2} p(x)\,dx = -\frac{h^5}{90}f^{(4)}(\eta).
$$

---

We have proved relation

$$
\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr) - \frac{h^5}{90}f^{(4)}(\eta), \qquad \eta \in (x_0, x_2),
\tag{16}
$$

which is called **Simpson's rule**.

---

This error formula yields that the Simpson's rule is precise for third-order polynomials, since then $f^{(4)}$ is identically equal to 0. On the other hand, the order of approximation in $h$ is five. Similar higher order of precision can be shown for all Newton–Cotes formula with even $n$.

Similarly to the composite trapezoidal rule, we can derive the composite Simpson's rule: We divide the interval $[a, b]$ into $2n$ equal parts, so let $h = (b - a)/2n$. Then

$$
\int_a^b f(x)\,dx = \frac{h}{3}\left(f(x_0) + 4\sum_{i=1}^{n} f(x_{2i-1}) + 2\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\right) - \frac{(b - a)h^4}{180}f^{(4)}(\xi), \qquad \xi \in (a, b).
$$

---

**Example**

Compute the approximate values of $\int_0^1 x^2 e^x\,dx$ using (composite) Simpson's formula with $h = 0.5$, $h = 0.25$ and $h = 0.125$. First we get

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{3}(0 + 4 \cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

The error is $0.0095520$. For $h = 0.25$ we get

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{3}(0 + 4 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Its error is $0.0006264$. Finally, for $h = 0.125$ we get

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx \approx{}& \frac{0.125}{3}\Bigl(0 + 4 \cdot 0.125^2 e^{0.125} + 2 \cdot 0.25^2 e^{0.25} + 4 \cdot 0.375^2 e^{0.375} \\
&+ 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.625^2 e^{0.625} + 2 \cdot 0.75^2 e^{0.75} + 4 \cdot 0.875^2 e^{0.875} + e\Bigr) = 0.7183215,
\end{aligned}
$$

which has the error $0.0000396$.

---

Next we present some other closed Newton–Cotes formulas:

**Simpson's $\frac{3}{8}$ formula:**

$$
\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)
$$

**$n = 4$:**

$$
\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)
$$

---

Finally, we present some open Newton–Cotes formulas:

$$
\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi),
$$

$$
\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi),
$$

$$
\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi),
$$

$$
\int_{x_{-1}}^{x_4} f(x)\,dx = \frac{5h}{24}\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\bigr) + \frac{95h^5}{144}f^{(4)}(\xi).
$$

---

**Theorem:**

Let $\sum_{i=1}^{n} c_i f(x_i)$ be a quadrature formula which is exact for constant functions and each coefficient $c_i$ is positive. Let $y_i$ be an approximate value of the exact function value $f(x_i)$, and suppose $|y_i - f(x_i)| \leq \varepsilon$. Then

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a).
$$

**Proof**

According to the assumptions, $(b - a) = \int_a^b 1\,dx = \sum_{i=1}^{n} c_i$, therefore

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \sum_{i=1}^{n} c_i |f(x_i) - y_i| \leq \varepsilon\sum_{i=1}^{n} c_i = \varepsilon(b - a).
$$

---

# 7.4 Gaussian Quadrature

---

In the previous section we have seen that the Newton–Cotes formulas give back the exact value of the integral for polynomials with certain degree. Now we would like to derive quadrature formulas with similar property. Consider the general quadrature formula

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i).
$$

We have the following statement:

**Theorem:**

A quadrature formula

$$
Q(f) := \sum_{i=1}^{n} c_i f(x_i)
$$

is exact for polynomials $p(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0$ of degree at most $m$ if and only if it is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$.

---

**Proof**

If $Q$ is exact for all polynomials with degree at most $m$, it certainly implies that it is exact for all monomials $x^i$ for all $i = 0, 1, \ldots, m$. Suppose now that $Q$ is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$. Then the linearity of the integrals and the quadrature formula $Q$, it follows that

$$
\begin{aligned}
\int_a^b a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0\,dx &= a_m\int_a^b x^m\,dx + a_{m-1}\int_a^b x^{m-1}\,dx + \cdots + a_0\int_a^b 1\,dx \\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \cdots + a_0 Q(1) \\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0).
\end{aligned}
$$

---

The quadrature formula $Q(f) = \sum_{i=1}^{n} c_i f(x_i)$ contains $2n$ number of parameters, $c_i, x_i$ ($i = 1, 2, \ldots, n$). The previous theorem indicates that such quadrature formula can be exact for polynomials with degree at most $2n - 1$, since it contains also $2n$ coefficients. Then a quadrature formula $Q$ is exact for polynomials of degree at most $2n - 1$ if and only if

$$
\begin{aligned}
\int_a^b 1\,dx &= \sum_{i=1}^{n} c_i \\
\int_a^b x\,dx &= \sum_{i=1}^{n} c_i x_i \\
&\;\;\vdots \\
\int_a^b x^{2n-1}\,dx &= \sum_{i=1}^{n} c_i x_i^{2n-1}
\end{aligned}
$$

The quadrature formula where the parameters are the solutions of this nonlinear system is called **$n$-point Gaussian quadrature formula**.

---

Consider the special case when $n = 2$ and $[a, b] = [-1, 1]$. Then the nonlinear system is

$$
\begin{aligned}
2 &= c_1 + c_2 \quad\text{(17)} \\
0 &= c_1 x_1 + c_2 x_2 \quad\text{(18)} \\
\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \quad\text{(19)} \\
0 &= c_1 x_1^3 + c_2 x_2^3. \quad\text{(20)}
\end{aligned}
$$

Equation (18) yields

$$
c_1 x_1 = -c_2 x_2,
$$

therefore if $c_1 x_1 = 0$, then $c_2 x_2 = 0$ too, but that contradicts to equation (19). Hence all the variables $c_1, c_2, x_1$ and $x_2$ are nonzero. Equation (20) equals to

$$
c_1 x_1^3 = -c_2 x_2^3.
$$

Therefore,

$$
x_1^2 = x_2^2.
$$

---

We have two cases: (i) $x_1 = x_2$, or (ii) $x_1 = -x_2$. In case (i) equation (18) yields

$$
0 = c_1 + c_2,
$$

which contradicts to (17). Hence case (i) cannot happen. Therefore we have

$$
x_1 = -x_2.
$$

Then equation (18) implies $c_1 = c_2$, so from (17) we get

$$
c_1 = c_2 = 1,
$$

but then (19) gives

$$
\frac{2}{3} = 2x_1^2.
$$

Therefore $x_1 = \pm\frac{1}{\sqrt{3}} = \pm\frac{\sqrt{3}}{3}$. Hence system (17)–(20) has a unique solution (apart from the order):

$$
c_1 = c_2 = 1 \quad\text{and}\quad x_1 = -\frac{\sqrt{3}}{3}, \quad x_2 = \frac{\sqrt{3}}{3}.
$$

---

So the two-point Gaussian quadrature formula is

$$
\int_{-1}^{1} f(x)\,dx \approx f\left(-\frac{\sqrt{3}}{3}\right) + f\left(\frac{\sqrt{3}}{3}\right).
$$

**Example**

We compute the approximation of the integral of $f(x) = e^x$ on the interval $[-1, 1]$. The two-point Gaussian formula yields

$$
\int_{-1}^{1} e^x\,dx \approx e^{-\frac{\sqrt{3}}{3}} + e^{\frac{\sqrt{3}}{3}} = 2.3426961.
$$

Comparing it with the exact value $e - 1/e = 2.350424$ we get that the error of the approximation is $0.0077062$, which is small, compared to the simplicity of the formula.

---

We need the notion of orthogonal functions. The functions $f$ and $g$ are called **orthogonal** on the interval $[a, b]$ if

$$
\int_a^b f(x)g(x)\,dx = 0.
$$

We show that there exists a sequence of functions $(P_i)_{i=0,1,\ldots}$ which are pairwise orthogonal on the interval $[-1, 1]$, and $P_i$ is a polynomial of degree $i$. Let

$$
P_0(x) := 1 \quad\text{and}\quad P_1(x) := x.
$$

Then $P_0$ and $P_1$ are orthogonal on $[-1, 1]$. We are looking for $P_2$ in the form

$$
P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x).
$$

---

The requested orthogonality yields

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_0(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,1}\int_{-1}^{1} P_1(x)P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx,
\end{aligned}
$$

which gives

$$
a_{2,0} = -\frac{\int_{-1}^{1} x^2 P_0(x)\,dx}{\int_{-1}^{1} P_0^2(x)\,dx}.
$$

---

Similarly,

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx + a_{2,0}\int_{-1}^{1} P_0(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx,
\end{aligned}
$$

so

$$
a_{2,1} = -\frac{\int_{-1}^{1} x^2 P_1(x)\,dx}{\int_{-1}^{1} P_1^2(x)\,dx}.
$$

---

We found a unique $P_2$ of this form. We can continue this procedure. If $P_0, \ldots, P_i$ are already defined, then we are looking for $P_{i+1}$ in the form

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \cdots + a_{i+1,0} P_0(x).
$$

Then, similarly to the previous computation, we get

$$
a_{i+1,j} = -\frac{\int_{-1}^{1} x^{i+1} P_j(x)\,dx}{\int_{-1}^{1} P_j^2(x)\,dx}, \qquad j = 0, 1, \ldots, i,
$$

so $P_{i+1}$ can be defined uniquely. This method is called **Gram–Schmidt orthogonalization**, and the resulting polynomial $P_i$ is called **Legendre polynomial** of degree $i$.

---

The formulas of the first several Legendre polynomials are:

$$
\begin{aligned}
P_0(x) &= 1, \\
P_1(x) &= x, \\
P_2(x) &= x^2 - \frac{1}{3}, \\
P_3(x) &= x^3 - \frac{3}{5}x, \\
P_4(x) &= x^4 - \frac{6}{7}x^2 + \frac{3}{35}
\end{aligned}
$$

It can be shown that the Legendre polynomials satisfy the recursion

$$
P_{n+1}(x) = xP_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x).
$$

---

**Theorem:**

Let $P_i$ be the $i$th Legendre polynomial. Then

1. $P_i$ is orthogonal to any polynomial with degree at most $i - 1$.
2. $P_i$ is even if $i$ is even, and it is odd if $i$ is odd.
3. $P_i$ has $i$ distinct real roots in the interval $(-1, 1)$, and they are symmetric to the origin.
4. If $(p_i)_{i=0,1,\ldots}$ is a sequence of polynomials of degree (exactly) $i$, which are pairwise orthogonal, then $p_i(x) = c_i P_i(x)$ for all $i$ for some constant $c_i \neq 0$.

---

The next theorem shows that the mesh points of the $n$-point Gaussian quadrature formula are the roots of the Legendre polynomials $P_n$.

**Theorem:**

Let $x_1, x_2, \ldots, x_n$ be the roots of the $n$th Legendre polynomials, and let

$$
c_i = \int_{-1}^{1} \frac{(x - x_1)\cdots(x - x_{i-1})(x - x_{i+1})\cdots(x - x_n)}{(x_i - x_1)\cdots(x_i - x_{i-1})(x_i - x_{i+1})\cdots(x_i - x_n)}\,dx.
\tag{21}
$$

Then for any polynomial $p$ of degree at most $2n - 1$ it follows

$$
\int_{-1}^{1} p(x)\,dx = \sum_{i=1}^{n} c_i p(x_i).
$$

---

The next result gives the truncation error of the Gaussian quadrature.

**Theorem:**

Let $f \in C^{2n}[a, b]$. Then there exists $\xi \in (a, b)$ such that the $n$-point Gaussian quadrature formula satisfies

$$
\int_a^b f(x)\,dx = \sum_{k=1}^{n} c_k f(x_k) + \frac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^{1} P_n^2(x)\,dx.
$$

---

It can be shown that the error term in the previous theorem has the form

$$
\frac{\pi f^{(2n)}(\xi)}{4^n (2n)!},
$$

which gives that if $f^{(2n)}$ is bounded for all $n$ with a bound independent of $n$, then the error of the Gaussian quadrature goes to 0 exponentially. Note that the error in the Newton–Cotes formulas tends to 0 only with polynomial speed if $n \to \infty$.

---

The next table presents the roots of the first several Legendre polynomials and the corresponding coefficients.

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

---

The Gaussian quadrature formulas can be applied to the case when the interval is $[-1, 1]$. But in case of an arbitrary interval $[a, b]$, the new variable $x = ((b - a)t + a + b)/2$ transforms the computation of the integral to the interval $[-1, 1]$:

$$
\int_a^b f(x)\,dx = \frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)dt.
$$

**Example**

Approximate $\int_0^1 x^2 e^x\,dx$ using the two-point Gaussian quadrature:

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx &= \frac{1}{2}\int_{-1}^{1}\left(\frac{t + 1}{2}\right)^2 e^{(t+1)/2}\,dt \\
&\approx \frac{1}{2}\left(\left(\frac{-\sqrt{3}/3 + 1}{2}\right)^2 e^{(-\sqrt{3}/3 + 1)/2} + \left(\frac{\sqrt{3}/3 + 1}{2}\right)^2 e^{(\sqrt{3}/3 + 1)/2}\right) \\
&= 0.7119418.
\end{aligned}
$$

The error of this approximation is $0.0063400$.
