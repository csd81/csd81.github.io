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

