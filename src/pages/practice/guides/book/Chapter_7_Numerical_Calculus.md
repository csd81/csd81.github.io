# Chapter 7

## Numerical Differentiation and Integration

In this chapter first we study several methods for numerical differentiation, and consider the Richardson's extrapolation method to obtain higher order methods. Next we define Newton–Cotes formulas and the Gaussian quadrature to approximate definite integrals.

## 7.1. Numerical differentiation

In this section we present two methods to derive numerical approximation formulas for the derivative, and we derive some basic approximation formulas.

The derivative of a function is defined by the limit

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}.
$$

Therefore, if $|h|$ is small, then the difference quotient $\dfrac{f(x_0 + h) - f(x_0)}{h}$ is close to the value of the derivative. But we need more: we need to know the truncation error of the approximation. Next we derive this formula in two different ways, and we will derive the formula of the truncation error too.

Suppose $f \in C^3[a, b]$ and $x_0 \in (a, b)$. The idea of the first method is the following: We approximate the function $f$ in a neighbourhood of $x_0$ by a Lagrange polynomial $L_n(x)$. We use $L'_n(x_0)$ as an approximation of $f'(x_0)$. We will call this method as Lagrange's method. Consider a simple case: let $n = 1$, $x_1 = x_0 + h \in (a, b)$ (and $x_0 \neq x_1$), consider the first-order Lagrange polynomial interpolation of $f$ corresponding to the mesh points $x_0$ and $x_1$:

$$
\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\
&= \frac{f(x_0)(x - x_0 - h)}{-h} + \frac{f(x_0 + h)(x - x_0)}{h} + \frac{f''(\xi(x))}{2}(x - x_0)(x - x_0 - h).
\end{aligned}
$$

Taking the derivative of both sides we get

$$
\begin{aligned}
f'(x) ={}& \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f''(\xi(x))}{2}\bigl(2(x - x_0) - h\bigr) \\
&+ \frac{d}{dx}\Bigl(f''(\xi(x))\Bigr)\frac{(x - x_0)(x - x_0 - h)}{2}.
\end{aligned}
\tag{7.1}
$$

Theorem 6.8 yields that the function $f''(\xi(x))$ is differentiable for $x \neq x_0, x_0 + h$, but the derivative cannot be computed explicitly. On the other hand, taking the limit $x \to x_0$ in (7.1) we get

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
\tag{7.2}
$$

where $\xi \in \langle x_0, x_0 + h \rangle$. Therefore, if we use the approximation formula

$$
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0)}{h},
\tag{7.3}
$$

the truncation error of the approximation has the form $-\dfrac{h}{2}f''(\xi)$. Formula (7.3) is called **first-order forward difference formula** if $h > 0$, and **first-order backward difference formula** if $h < 0$. In these formulas the mesh point $x_0 + h$ is located right and left to $x_0$, in the respective cases. Formula (7.2) shows that approximation (7.3) is first-order in $h$. Formula (7.3) is also called **two-point difference formula**, since it uses two mesh points.

The same formula can be derived (under weaker conditions) in the following way: Let $f \in C^2[a, b]$, and consider the first-order Taylor expansion of $f$ around $x_0$:

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

**Example 7.1.** Consider the function $f(x) = e^{x^2 + x}$. We have $f'(x) = e^{x^2 + x}(2x + 1)$, so $f'(0) = 1$. We compute an approximate value of $f'(0)$ using the first-order forward ($h > 0$) and backward ($h < 0$) difference formula, i.e., formula (7.3). In Table 7.1 we printed the approximate values and their errors for different values of $h$. The numerical results show that if the step size $h$ decreases by one order of magnitude, then the corresponding error also decreases by one order of magnitude. $\quad\square$

**Table 7.1:** First-order difference formula, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward difference | error | backward difference | error |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

The previous two methods are appropriate to derive higher order, so more precise formulas. Suppose $f \in C^{n+1}$, and consider an approximation of $f$ by a Lagrange polynomial of degree $n$:

$$
f(x) = \sum_{k=0}^{n} f(x_k)l_k(x) + \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n),
\tag{7.4}
$$

where $l_k(x)$ are the Lagrange basis polynomials of degree $n$ defined by (6.2). Differentiating (7.4) and using substitution $x = x_i$ we get

$$
f'(x_i) = \sum_{j=0}^{n} f(x_j)l'_j(x_i) + \frac{f^{(n+1)}(\xi(x_i))}{(n+1)!}\prod_{\substack{j=0 \\ j \neq i}}^{n}(x_i - x_j),
\tag{7.5}
$$

which is called **$n+1$-point difference formula** to approximate $f'(x_i)$. We apply relation (7.5) for equidistant mesh points, so we assume $x_j = x_0 + jh$, where $h > 0$. It can be shown that the error term in (7.5) is of $n$th-order in $h$, and then the resulting formula will also be called difference formula of order $n$.

Consider the case when $n = 2$, i.e., we study three-point formulas. Consider the mesh points $x_0, x_0 + h, x_0 + 2h$. Then

$$
\begin{aligned}
l_0(x) &= \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \frac{(x - x_1)(x - x_2)}{2h^2}, \\
l_1(x) &= \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \frac{(x - x_0)(x - x_2)}{-h^2}, \\
l_2(x) &= \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \frac{(x - x_0)(x - x_1)}{2h^2},
\end{aligned}
$$

therefore,

$$
\begin{aligned}
l'_0(x) &= \frac{2x - x_1 - x_2}{2h^2}, \\
l'_1(x) &= \frac{2x - x_0 - x_2}{-h^2}, \\
l'_2(x) &= \frac{2x - x_0 - x_1}{2h^2}.
\end{aligned}
$$

We apply them with $x = x_0$, $x = x_0 + h$ and $x = x_0 + 2h$, so relation (7.5) yields

$$
f'(x_0) = \frac{1}{h}\left(-\frac{3}{2}f(x_0) + 2f(x_0 + h) - \frac{1}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_0),
\tag{7.6}
$$

$$
f'(x_0 + h) = \frac{1}{h}\left(-\frac{1}{2}f(x_0) + \frac{1}{2}f(x_0 + 2h)\right) - \frac{h^2}{6}f'''(\xi_1),
\tag{7.7}
$$

$$
f'(x_0 + 2h) = \frac{1}{h}\left(\frac{1}{2}f(x_0) - 2f(x_0 + h) + \frac{3}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_2).
\tag{7.8}
$$

The substitutions $x_0 \leftarrow x_0 - 2h$ and $h \leftarrow -h$ give that (7.8) can be written in the form (7.6), and (7.7) has the form

$$
f'(x_0) = \frac{1}{h}\left(-\frac{1}{2}f(x_0 - h) + \frac{1}{2}f(x_0 + h)\right) - \frac{h^2}{6}f'''(\xi_1).
\tag{7.9}
$$

Relation (7.9) is called **three-point midpoint formula** or **second-order central difference formula**. (It is also called centered difference.) Formula (7.6) is called **three-point endpoint formula**. It is also called **second-order forward difference formula** if $h > 0$, and **second-order backward difference formula** if $h < 0$.

**Example 7.2.** We approximate the derivative of the function $f(x) = e^{x^2 + x}$ at $x = 0$ with second-order difference formulas (formulas (7.6) and (7.9)). The results can be seen in Table 7.2 for different values of $h$. The numerical results demonstrate that the truncation error of the formulas is second-order in $h$. $\quad\square$

**Table 7.2:** Second-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Without proofs we present 5-point central and one-sided formulas, i.e., fourth-order difference formulas:

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\
&- 3f(x_0 + 4h)\Bigr) + \frac{h^4}{5}f^{(5)}(\xi_0),
\end{aligned}
\tag{7.10}
$$

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\Bigr) \\
&+ \frac{h^4}{30}f^{(5)}(\xi_1).
\end{aligned}
\tag{7.11}
$$

Formula (7.10) is one-sided, and (7.11) is central difference.

**Example 7.3.** We apply formulas (7.10) and (7.11) to approximate the first derivative of $f(x) = e^{x^2 + x}$ at $x = 0$. Table 7.3 shows the numerical results. $\quad\square$

**Table 7.3:** Fourth-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Next we use the Taylor's method to derive approximation formulas for higher order derivatives. Let $f \in C^4$, and consider the third-order Taylor polynomial expansion of $f$ at $x_0$ with the fourth-order error term:

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

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^2.
$$

Therefore, the approximation formula

$$
f''(x_0) \approx \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
\tag{7.12}
$$

has an error of order $h^2$. We can rewrite the error term $\dfrac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^2$ in a simpler form. We have by our assumptions that $f^{(4)}$ is continuous, therefore, Theorem 2.2 yields that there exists a point $\xi$ in between $\xi_1$ and $\xi_2$ such that

$$
f^{(4)}(\xi) = \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{2}.
$$

Hence

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2.
\tag{7.13}
$$

**Example 7.4.** We computed the approximation of the second-order derivative of $f(x) = e^{x^2 + x}$ at $x = 0$ using formula (7.12) and different step sizes. The numerical results can be seen in Table 7.4. Note that the exact derivative value is $f''(0) = 3$. $\quad\square$

**Table 7.4:** Approximation of the second-order derivative, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | approximation | error |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

The numerical differentiation is an unstable problem. To illustrate it we consider a function $f(x)$ and its perturbation of the form

$$
g(x) = f(x) + \frac{1}{n}\sin(n^2 x).
$$

If we compute an approximation of $g'$ instead of $f'$ using any difference formula obtained above, then there is a small change in the function values used in the difference formula if $n$ is large. But the difference between the exact value of the derivatives is large, since $g'(x) = f'(x) + n\cos(n^2 x)$.

Next we investigate the effect of the rounding in numerical differentiation. Consider the simplest difference formula, the first-order difference (7.2). Suppose that here, instead of the exact function values $f(x_0)$ and $f(x_0 + h)$, we use their approximate values $f_0$ and $f_1$, where

$$
f(x_0) = f_0 + e_0 \quad\text{and}\quad f(x_0 + h) = f_1 + e_1.
$$

Then

$$
f'(x_0) \approx \frac{f_1 - f_0}{h},
$$

and the resulting error is

$$
\begin{aligned}
f'(x_0) - \frac{f_1 - f_0}{h} &= f'(x_0) - \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f(x_0 + h) - f(x_0)}{h} - \frac{f_1 - f_0}{h} \\
&= -\frac{h}{2}f''(\xi) + \frac{e_1 - e_0}{h}.
\end{aligned}
\tag{7.14}
$$

Relation (7.14) shows that the error consists of two parts: the truncation error and the rounding error. If the step size $h$ is small, then the truncation error will be small, but the rounding error can go to $\infty$ as $h \to 0$.

**Example 7.5.** Consider the function $f(x) = e^x$. We compute the approximation of $f'(1) = e$ using first-order forward difference formula. In order to enlarge the effect of the rounding, we used 6- and 4-digit arithmetic in the computation. We can see in Table 7.5 that in case of the 4-digit arithmetic, when we decreased the step size to 0.001 from 0.01, the error of the approximation increased. The reason is, clearly, the increase of the rounding error, since here we subtracted two numbers which are close to each other, and also divided by a small number. $\quad\square$

**Table 7.5:** Effect of rounding in first-order forward difference, $f(x) = e^x$, $x_0 = 1$

| | 6-digit arithmetic | | 4-digit arithmetic | |
|---|---|---|---|---|
| $h$ | approximation | error | approximation | error |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

The formulas derived in this section can be applied to approximate partial derivatives. We list some formulas next.

$$
\frac{\partial f(x_0, y_0)}{\partial x} \approx \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\tag{7.15}
$$

$$
\frac{\partial f(x_0, y_0)}{\partial y} \approx \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\tag{7.16}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\tag{7.17}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial y^2} \approx \frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\tag{7.18}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x\,\partial y} \approx \frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\tag{7.19}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\tag{7.20}
$$

### Exercises

1. Compute an approximation of $f'(x_0)$ using first-order forward and backward difference formulas with $h = 0.1$ and $0.01$ if
   - (a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
   - (b) $f(x) = e^x \sin x$, $x_0 = 0$,
   - (c) $f(x) = \cos x^2$, $x_0 = 1$,
   - (d) $f(x) = x \ln x$, $x_0 = 1$.

2. Apply second-order difference formulas in the previous exercise.

3. Approximate $f''(x_0)$ for the functions given in Exercise 1.

4. Derive formulas (7.6) and (7.9) using Taylor's method.

5. Prove relations (7.10) and (7.11).

6. Derive the following approximation formulas:
$$
f'''(x_0) \approx \frac{1}{2h^3}\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\Bigr),
$$
$$
f^{(4)}(x_0) \approx \frac{1}{h^4}\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\Bigr)
$$

7. Derive formulas (7.15)–(7.20) using
   - (a) approximation formulas formulated for single variable functions,
   - (b) two-variable Lagrange's method,
   - (c) two-variable Taylor's method.

   Compute the truncation errors.

## 7.2. Richardson's extrapolation

Suppose given a value $M$, and let $K(h)$ be its approximation, where $h$ denotes the discretization parameter of the approximation method. We also suppose that the truncation error of the approximation is known, and it has a special form, the error can be given by an even-order Taylor polynomial (or possibly Taylor series) approximation of the form

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + a_{2m} h^{2m} + b(h),
\tag{7.21}
$$

where $|b(h)| \leq B h^{2m+2}$ with some constant $B > 0$. The error here is second-order in $h$. Now we present a general method to generate higher order approximation formulas using $K(h)$. Consider relation (7.21) corresponding to parameter $h/2$:

$$
M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m}} + b(h/2).
\tag{7.22}
$$

Multiplying both sides of (7.22) by 4, and subtracting equation (7.21) from it, the second-order term in $h$ cancels out, and solving it for $M$ we get

$$
\begin{aligned}
M ={}& \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 \\
&- \cdots - \frac{2^{2m-2} - 1}{2^{2m-2}\cdot 3}a_{2m}h^{2m} + \frac{4b(h/2) - b(h)}{3}.
\end{aligned}
\tag{7.23}
$$

This relation can be written in the form

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
\tag{7.24}
$$

where

$$
K^{(1)}(h) := \frac{4K(h/2) - K(h)}{3}, \qquad b^{(1)}(h) := \frac{4b(h/2) - b(h)}{3}, \qquad a_{2i}^{(1)} := \frac{1 - 4^{i-1}}{4^{i-1}\cdot 3}a_{2i},
$$

$i = 2, \ldots, m$. Relation (7.24) yields that formula $K^{(1)}(h)$ approximates $M$ with a fourth-order error in $h$. The previous method can be repeated: we use (7.24) with $h/2$, multiply it by 16, subtract from it equation (7.24), and then solve it for $M$. Then the fourth-order error term cancels out, and we get relation

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
\tag{7.25}
$$

where

$$
K^{(2)}(h) := \frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \qquad b^{(2)}(h) := \frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} := \frac{1 - 4^{i-2}}{4^{i-2}\cdot 15}a_{2i}^{(1)}, \qquad i = 3, \ldots, m.
$$

Relation (7.25) means that $K^{(2)}(h)$ approximates $M$ with a sixth-order error in $h$. The generation of new approximation formulas can be continued as

$$
K^{(i+1)}(h) := K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1,
\tag{7.26}
$$

where $K^{(0)}(h) := K(h)$. This procedure to generate higher order approximation formulas is called **Richardson's extrapolation**. A similar procedure can be applied also in the case when the Taylor expansion of the truncation error contains all powers of $h$ (see Exercises 2 and 3), but later we will use the case presented in this section.

**Example 7.6.** In the previous section we saw that the central difference formula (7.9) is second-order in $h$. Using Taylor's method we get a more precise form of the truncation error. Suppose that $f \in C^{2m+3}$, and consider the following Taylor's expansion:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \frac{f^{(2m+3)}(\xi_1)}{(2m+3)!}h^{2m+3}.
$$

We apply the previous relation with $-h$ instead of $h$, subtracting the two equations, and solving it for $f'(x_0)$ we get:

$$
\begin{aligned}
f'(x_0) ={}& \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(x_0)}{3!}h^2 - \frac{f^{(5)}(x_0)}{5!}h^4 \\
&- \cdots - \frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \frac{f^{(2m+3)}(\xi_1) + f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+2}.
\end{aligned}
$$

Hence we have that the central difference satisfies relation (7.21). Therefore, we get a higher order formula using Richardson's extrapolation. We have that formula

$$
\begin{aligned}
K^{(1)}(h) &= \frac{4\,\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\
&= \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\end{aligned}
$$

has fourth-order error in $h$. We note that this formula is equivalent to (7.11). $\quad\square$

### Exercises

1. Derive a sixth-order approximation formula for the first derivative of a function starting from the central difference formula (7.9) using the Richardson's extrapolation. Apply the formula for approximating the first derivative of $f(x) = e^x \sin x$ at $x = 0$ using step size $h = 0.25$.

2. Reformulate the Richardson's extrapolation for the case when the Taylor expansion of the truncation error contains all powers of $h$, i.e.,
$$
M = K(h) + a_1 h + a_2 h^2 + \cdots + a_m h^m + b(x),
$$
where $|b(h)| \leq B h^{m+1}$ with some $B > 0$.

3. Reformulate the Richardson's extrapolation for the general case when
$$
M = K(h) + a_1 h^{\alpha_1} + a_2 h^{\alpha_2} + \cdots + a_m h^{\alpha_m} + b(x),
$$
where $1 \leq \alpha_1 < \alpha_2 < \cdots < \alpha_m$ are integers, and $|b(h)| \leq B h^{\alpha_m + 1}$ with some $B > 0$.

4. Derive a third-order approximation of the first derivative using Richardson's extrapolation starting from the first-order difference formula.

## 7.3. Newton–Cotes Formulas

Let $f \in C[a, b]$. The definite integral, similarly to the derivative, is defined by a limit. The definition using Riemann's sum is the following: consider a finite partition of the interval $[a, b]$ using the mesh points $a = x_0 < x_1 < \cdots < x_n = b$, and in each subinterval $[x_{i-1}, x_i]$ select a point $\xi_i$. Then the integral $\int_a^b f(x)\,dx$ is a limit of the Riemann's sum $\sum_{i=1}^{n} f(\xi_i)(x_i - x_{i-1})$ as the norm of the partition, $\max\{x_i - x_{i-1} : i = 1, \ldots, n\}$ goes to zero. Such a Riemann's sum is for example

$$
\int_a^b f(x)\,dx \approx \frac{b - a}{n}\left(f\left(\frac{x_0 + x_1}{2}\right) + f\left(\frac{x_1 + x_2}{2}\right) + \cdots + f\left(\frac{x_{n-1} + x_n}{2}\right)\right),
\tag{7.27}
$$

where $x_i = a + i(b - a)/n$, $i = 0, 1, \ldots, n$. This formula is called **midpoint rule** or **rectangle rule**. (See Exercises 5 and 6.)

Similarly to the numerical differentiation, we can use the Lagrange's method to derive approximation formulas for definite integrals. Consider a partition of the interval $[a, b]$ (typically with equidistant mesh points), and let $L_n$ be the Lagrange interpolating polynomial of the function $f$ corresponding to the given mesh. Consider $\int_a^b L_n(x)\,dx$ as an approximation of $\int_a^b f(x)\,dx$. We suppose that $f \in C^{n+1}[a, b]$. Then Theorem 6.5 yields the error of the approximation:

$$
\begin{aligned}
\int_a^b f(x)\,dx ={}& \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx \\
&+ \int_a^b \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)\,dx,
\end{aligned}
\tag{7.28}
$$

where $l_k(x)$ (corresponding to the mesh points) is the Lagrange basis polynomial of degree $n$ defined by (6.2). Here we get an approximation formula of the form

$$
\int_a^b f(x)\,dx \approx \sum_{k=0}^{n} c_k f(x_k),
\tag{7.29}
$$

where the weights $c_k$ are defined by

$$
c_k = \int_a^b l_k(x)\,dx.
\tag{7.30}
$$

Approximation formulas of the form (7.29) are called **quadrature formulas**. Those quadrature formulas when the weights $c_k$ are defined by the integrals (7.30) are called **Newton–Cotes formulas**. If the end points of the interval $a$ and $b$ belong to the mesh points, then formulas (7.29)–(7.30) are called **closed Newton–Cotes formulas**, and if all mesh points belong to the open interval $(a, b)$, then they are called **open Newton–Cotes formulas**.

We say that the **degree of precision** of a quadrature formula is $n$ if the formula gives back the exact value of the definite integral for all polynomials with degree at most $n$, and there exists a polynomial of degree $n + 1$ for which the quadrature formula is not exact. Therefore, the degree of precision of the $(n+1)$-point Newton–Cotes formula (7.29)–(7.30) is at least $n$, since in this case the Lagrange polynomial $L_n$ is identical to the function $f$. It is possible to show that for even $n$ the $(n + 1)$-point Newton–Cotes formulas are exact for polynomials with degree $n + 1$ too.

Next we consider the closed Newton–Cotes formula for $n = 1$. Let $x_0 = a$, $x_1 = b$ and $h = b - a$. Then

$$
L_1(x) = f(x_0)\frac{x - x_1}{x_0 - x_1} + f(x_1)\frac{x - x_0}{x_1 - x_0},
$$

so

$$
\begin{aligned}
\int_{x_0}^{x_1} L_1(x)\,dx &= f(x_0)\int_{x_0}^{x_1} \frac{x - x_1}{x_0 - x_1}\,dx + f(x_1)\int_{x_0}^{x_1} \frac{x - x_0}{x_1 - x_0}\,dx \\
&= \left[f(x_0)\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\frac{(x - x_0)^2}{2(x_1 - x_0)}\right]_{x_0}^{x_1} \\
&= \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr).
\end{aligned}
$$

The error of this formula, according to (7.28), is

$$
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) = \int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx.
$$

To simplify the formula of the error term we use that $(x - x_0)(x - x_1) < 0$ for $x \in (x_0, x_1)$, and hence Theorem 2.6 can be used. Therefore, there exists $\eta \in (x_0, x_1)$ such that

$$
\int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx = \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)(x - x_1)\,dx.
$$

Hence

$$
\begin{aligned}
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) &= \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\,dx \\
&= \frac{f''(\eta)}{2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= -\frac{h^3}{12}f''(\eta).
\end{aligned}
$$

We obtained the so-called **trapezoidal rule**:

$$
\int_a^b f(x)\,dx = \frac{h}{2}\bigl(f(a) + f(b)\bigr) - \frac{h^3}{12}f''(\xi), \qquad \xi \in (a, b).
\tag{7.31}
$$

The name of the formula comes from the fact that $\frac{h}{2}\bigl(f(a) + f(b)\bigr)$ gives back the area of the region bounded by the secant line of the function corresponding to the points $a$ and $b$, the $x$-axis, and the vertical lines $x = a$ and $x = b$.

The trapezoidal rule gives a good approximation of the integral if the length of the interval is small. If we have a large interval, then we divide it into $n$ subintervals of equal length by the mesh points $x_i = a + ih$ ($i = 0, 1, \ldots, n$), where $h = (b - a)/n$, and we apply the trapezoidal rule for each subintervals:

$$
\begin{aligned}
\int_a^b f(x)\,dx &= \sum_{i=1}^{n}\int_{x_{i-1}}^{x_i} f(x)\,dx \\
&= \sum_{i=1}^{n}\frac{h}{2}\bigl(f(x_{i-1}) + f(x_i)\bigr) - \frac{h^3}{12}\sum_{i=1}^{n} f''(\xi_i) \\
&= \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{nh^3}{12}\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i).
\end{aligned}
$$

We suppose that $f \in C^2[a, b]$. Then it follows from Theorem 2.2 that the average value $\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i)$ can be replaced by a single function value of the form $f''(\xi)$. Therefore, using $hn = b - a$, we get

$$
\int_a^b f(x)\,dx = \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{(b - a)h^2}{12}f''(\xi), \qquad \xi \in (a, b).
\tag{7.32}
$$

This formula is called **composite trapezoidal rule**.

**Example 7.7.** We compute approximate values of the integral $\int_0^1 x^2 e^x\,dx$ using the basic or composite trapezoidal rule with $h = 1$, $h = 0.5$ and $h = 0.25$, respectively. It can be checked that the exact value of the integral is $\int_0^1 x^2 e^x\,dx = e - 2 = 0.7182818$ (with 7 digits precision). For the first case we have

$$
\int_0^1 x^2 e^x\,dx \approx \frac{1}{2}(0 + e) = 1.3591409,
$$

where we computed the numerical values with 7 digits precision. The error in this case is $0.6408591$. With $h = 0.5$ the composite trapezoidal rule gives

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{2}(0 + 2 \cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Hence its error is $0.1673788$. Finally, for $h = 0.25$ we get

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{2}(0 + 2 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 2 \cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

so its error is $0.0423145$. We can observe that if the step size reduces to its half, then the corresponding error in the approximation reduces to its quarter, which indicates that the error in $h$ is quadratic. $\quad\square$

Consider formula (7.28) for $n = 2$ and using equidistant mesh points, i.e., $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

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

The truncation error is

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx.
$$

Now there is a difference compared to the previous case: the function $(x - x_0)(x - x_1)(x - x_2)$ has opposite signs on the intervals $(x_0, x_1)$ and $(x_1, x_2)$, so Theorem 2.6 is not applicable on $(x_0, x_2)$. We have a different method to simplify the formula for the error term. Let

$$
\begin{aligned}
p(x) &:= \int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\,dt \\
&= \int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\,dt \\
&= \left[\frac{(t - x_1)^4}{4} - h^2\frac{(t - x_1)^2}{2}\right]_{x_0}^{x} \\
&= \frac{(x - x_1)^4}{4} - \frac{h^2(x - x_1)^2}{2} + \frac{h^4}{4} \\
&= \frac{1}{4}\bigl((x - x_1)^2 - h^2\bigr)^2.
\end{aligned}
$$

Then $p(x_0) = p(x_2) = 0$, so integration by parts gives

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\int_{x_0}^{x_2} \frac{d}{dx}\frac{f'''(\xi(x))}{6}\,p(x)\,dx.
$$

$p$ is a nonnegative function, hence applying Theorems 2.6 and 6.8, we get

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\frac{f^{(4)}(\eta)}{24}\int_{x_0}^{x_2} p(x)\,dx = -\frac{h^5}{90}f^{(4)}(\eta).
$$

We have proved the relation

$$
\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr) - \frac{h^5}{90}f^{(4)}(\eta), \qquad \eta \in (x_0, x_2),
\tag{7.33}
$$

which is called **Simpson's rule**.

This error formula yields that the Simpson's rule is precise for third-order polynomials, since then $f^{(4)}$ is identically equal to 0. On the other hand, the order of approximation in $h$ is five. Similar higher order of precision can be shown for all Newton–Cotes formulas with even $n$.

Similarly to the composite trapezoidal rule, we can derive the composite Simpson's rule: We divide the interval $[a, b]$ into $2n$ equal parts, so let $h = (b - a)/2n$. Then

$$
\begin{aligned}
\int_a^b f(x)\,dx ={}& \frac{h}{3}\left(f(x_0) + 4\sum_{i=1}^{n} f(x_{2i-1}) + 2\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\right) \\
&- \frac{(b - a)h^4}{180}f^{(4)}(\xi), \qquad \xi \in (a, b).
\end{aligned}
\tag{7.34}
$$

**Example 7.8.** Compute the approximate values of $\int_0^1 x^2 e^x\,dx$ using (composite) Simpson's formula with $h = 0.5$, $h = 0.25$ and $h = 0.125$. First we get

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{3}(0 + 4 \cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

The error is $0.0095520$. For $h = 0.25$ we apply the composite Simpson's formula:

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{3}(0 + 4 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Its error is $0.0006264$. Finally, for $h = 0.125$ we get

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx \approx{}& \frac{0.125}{3}\Bigl(0 + 4 \cdot 0.125^2 e^{0.125} + 2 \cdot 0.25^2 e^{0.25} + 4 \cdot 0.375^2 e^{0.375} + 2 \cdot 0.5^2 e^{0.5} \\
&+ 4 \cdot 0.625^2 e^{0.625} + 2 \cdot 0.75^2 e^{0.75} + 4 \cdot 0.875^2 e^{0.875} + e\Bigr) = 0.7183215,
\end{aligned}
$$

which has the error $0.0000396$. $\quad\square$

Next we present some other closed Newton–Cotes formulas.

**Simpson's $\frac{3}{8}$ formula:**

$$
\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)
\tag{7.35}
$$

**$n = 4$:**

$$
\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)
\tag{7.36}
$$

Finally, we present some open Newton–Cotes formulas:

$$
\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi),
\tag{7.37}
$$

$$
\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi),
\tag{7.38}
$$

$$
\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi),
\tag{7.39}
$$

$$
\int_{x_{-1}}^{x_4} f(x)\,dx = \frac{5h}{24}\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\bigr) + \frac{95h^5}{144}f^{(4)}(\xi).
\tag{7.40}
$$

We close this section with the investigation of the numerical stability of the integration.

**Theorem 7.9.** Let $\sum_{i=1}^{n} c_i f(x_i)$ be a quadrature formula which is exact for constant functions and each coefficient $c_i$ is positive. Let $y_i$ be an approximate value of the exact function value $f(x_i)$, and suppose $|y_i - f(x_i)| \leq \varepsilon$. Then

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a).
$$

*Proof.* According to the assumptions, $(b - a) = \int_a^b 1\,dx = \sum_{i=1}^{n} c_i$, therefore,

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \sum_{i=1}^{n} c_i |f(x_i) - y_i| \leq \varepsilon\sum_{i=1}^{n} c_i = \varepsilon(b - a). \qquad\square
$$

We note that all quadrature formulas we presented in this section were exact for constant functions, and most of them had positive weights. Therefore, all such formulas are stable for the rounding error.

### Exercises

1. Compute approximate values of the integrals using the trapezoidal rule with step sizes $h = 0.5, 0.25, 0.125$, respectively:
   - (a) $\int_0^1 \sin^3 x\,dx$,
   - (b) $\int_1^2 \ln(x + 1)\,dx$,
   - (c) $\int_1^2 e^{1/x}\,dx$.

2. Repeat Exercise 1 using the Simpson's rule.

3. Repeat Exercise 1 using formulas (7.35)–(7.36).

4. Repeat Exercise 1 using formulas Newton–Cotes Formulas (7.37)–(7.40).

5. Prove that the midpoint formula (7.27) gives back the sum of the areas under tangent lines at the midpoints of the intervals $[x_i, x_{i+1}]$.

6. Show that the midpoint formula is a Newton–Cotes formula, and derive its error term.

7. Derive formulas (7.35)–(7.36) (without computing the error terms).

8. Derive formulas (7.37)–(7.40) (without computing the error terms).

## 7.4. Gaussian Quadrature

In the previous section we have seen that the Newton–Cotes formulas give back the exact value of the integral for polynomials with certain degree. Now we would like to derive quadrature formulas with similar property. Consider the general quadrature formula

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i).
$$

We have the following statement:

**Theorem 7.10.** A quadrature formula

$$
Q(f) := \sum_{i=1}^{n} c_i f(x_i)
\tag{7.41}
$$

is exact for polynomials $p(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0$ of degree at most $m$ if and only if it is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$.

*Proof.* If $Q$ is exact for all polynomials with degree at most $m$, it certainly implies that it is exact for all monomials $x^i$ for all $i = 0, 1, \ldots, m$.

Suppose now that $Q$ is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$. Then the linearity of the integral and the quadrature formula $Q$ yield that

$$
\begin{aligned}
\int_a^b a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0\,dx &= a_m\int_a^b x^m\,dx + a_{m-1}\int_a^b x^{m-1}\,dx + \cdots + a_0\int_a^b 1\,dx \\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \cdots + a_0 Q(1) \\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0). \qquad\square
\end{aligned}
$$

The quadrature formula $Q$ defined by (7.41) contains $2n$ number of parameters, $c_i, x_i$ ($i = 1, 2, \ldots, n$). The previous theorem indicates that such a quadrature formula can be exact for polynomials with degree at most $2n - 1$, since it also contains $2n$ coefficients. Then Theorem 7.10 yields that a quadrature formula $Q$ is exact for polynomials of degree at most $2n - 1$ if and only if the following $2n$ number of equations hold:

$$
\begin{aligned}
\int_a^b 1\,dx &= \sum_{i=1}^{n} c_i \\
\int_a^b x\,dx &= \sum_{i=1}^{n} c_i x_i \\
\int_a^b x^2\,dx &= \sum_{i=1}^{n} c_i x_i^2 \\
&\;\;\vdots \\
\int_a^b x^{2n-1}\,dx &= \sum_{i=1}^{n} c_i x_i^{2n-1}
\end{aligned}
\tag{7.42}
$$

The quadrature formula of the form (7.41) where the parameters are the solutions of the nonlinear system (7.42) is called **$n$-point Gaussian quadrature formula**.

Consider the special case when $n = 2$ and $[a, b] = [-1, 1]$. Then system (7.42) is equivalent to the system

$$
\begin{aligned}
2 &= c_1 + c_2 \\
0 &= c_1 x_1 + c_2 x_2 \\
\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\
0 &= c_1 x_1^3 + c_2 x_2^3.
\end{aligned}
$$

It can be checked that this system has a unique solution (apart from the order): $c_1 = c_2 = 1$ and $x_1 = -\frac{\sqrt{3}}{3}$, $x_2 = \frac{\sqrt{3}}{3}$. So the two-point Gaussian quadrature formula is

$$
\int_{-1}^{1} f(x)\,dx \approx f\left(-\frac{\sqrt{3}}{3}\right) + f\left(\frac{\sqrt{3}}{3}\right).
\tag{7.43}
$$

**Example 7.11.** We compute the approximation of the integral of $f(x) = e^x$ on the interval $[-1, 1]$. The Gaussian formula (7.43) yields

$$
\int_{-1}^{1} e^x\,dx \approx e^{-\frac{\sqrt{3}}{3}} + e^{\frac{\sqrt{3}}{3}} = 2.3426961.
$$

Comparing it with the exact value $e - 1/e = 2.350424$ we get that the error of the approximation is $0.0077062$, which is small, compared to the simplicity of the formula. $\quad\square$

We need the notion of orthogonal functions. The functions $f$ and $g$ are called **orthogonal** on the interval $[a, b]$ if

$$
\int_a^b f(x)g(x)\,dx = 0.
$$

We show that there exists a sequence of functions $(P_i)_{i=0,1,\ldots}$ which are pairwise orthogonal on the interval $[-1, 1]$, and $P_i$ is a polynomial of degree $i$. Let $P_0(x) := 1$ and $P_1(x) := x$. Then $P_0$ and $P_1$ are orthogonal on $[-1, 1]$. We are looking for $P_2$ in the form $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$. Then the requested orthogonality yields

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

We found a unique $P_2$ of this form. We can continue this procedure. If $P_0, \ldots, P_i$ are already defined, then we are looking for $P_{i+1}$ in the form

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \cdots + a_{i+1,0} P_0(x).
\tag{7.44}
$$

Then, similarly to the previous computation, we get

$$
a_{i+1,j} = -\frac{\int_{-1}^{1} x^{i+1} P_j(x)\,dx}{\int_{-1}^{1} P_j^2(x)\,dx}, \qquad j = 0, 1, \ldots, i,
\tag{7.45}
$$

so $P_{i+1}$ can be defined uniquely. This method is called **Gram–Schmidt orthogonalization**, and the resulting polynomial $P_i$ is called **Legendre polynomial** of degree $i$. The formulas of the first five Legendre polynomials are:

$$
\begin{aligned}
P_0(x) &= 1, \\
P_1(x) &= x, \\
P_2(x) &= x^2 - \frac{1}{3}, \\
P_3(x) &= x^3 - \frac{3}{5}x, \\
P_4(x) &= x^4 - \frac{6}{7}x^2 + \frac{3}{35}.
\end{aligned}
$$

It can be shown that the Legendre polynomials satisfy the recursion

$$
P_{n+1}(x) = xP_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x).
\tag{7.46}
$$

The next theorem summarizes the most important properties of the Legendre polynomials.

**Theorem 7.12.** Let $P_i$ be the $i$th Legendre polynomial. Then

1. $P_i$ is orthogonal to any polynomial with degree at most $i - 1$.

2. $P_i$ is even if $i$ is even, and it is odd if $i$ is odd.

3. $P_i$ has $i$ distinct real roots in the interval $(-1, 1)$, and they are symmetric to the origin.

4. If $(p_i)_{i=0,1,\ldots}$ is a sequence of polynomials of degree (exactly) $i$, which are pairwise orthogonal, then $p_i(x) = c_i P_i(x)$ for all $i$ for some constant $c_i \neq 0$.

The next theorem shows that the mesh points of the $n$-point Gaussian quadrature formula defined on the interval $[-1, 1]$ are the roots of the $n$th-order Legendre polynomial $P_n$.

**Theorem 7.13.** Let $x_1, x_2, \ldots, x_n$ be the roots of the $n$th Legendre polynomial $P_n$, and let

$$
c_i = \int_{-1}^{1} \frac{(x - x_1)\cdots(x - x_{i-1})(x - x_{i+1})\cdots(x - x_n)}{(x_i - x_1)\cdots(x_i - x_{i-1})(x_i - x_{i+1})\cdots(x_i - x_n)}\,dx.
\tag{7.47}
$$

Then, for any polynomial $p$ of degree at most $2n - 1$, it follows

$$
\int_{-1}^{1} p(x)\,dx = \sum_{i=1}^{n} c_i p(x_i).
$$

The next result gives the truncation error of the Gaussian quadrature.

**Theorem 7.14.** Let $f \in C^{2n}[-1, 1]$. Then there exists $\xi \in (-1, 1)$ such that the $n$-point Gaussian quadrature formula satisfies

$$
\int_{-1}^{1} f(x)\,dx = \sum_{k=1}^{n} c_k f(x_k) + \frac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^{1} P_n^2(x)\,dx.
$$

It can be shown that the error term in the previous theorem has the form

$$
\frac{\pi f^{(2n)}(\xi)}{4^n (2n)!},
$$

which gives that if $f^{(2n)}$ is bounded for all $n$ with a bound independent of $n$, then the error of the Gaussian quadrature goes to 0 exponentially. Note that the error in the Newton–Cotes formulas tends to 0 only with polynomial speed if $n \to \infty$.

Table 7.6 presents the roots of the first several Legendre polynomials and the corresponding coefficients.

**Table 7.6:** The parameters of the Gaussian quadrature formulas

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

The Gaussian quadrature formulas can be applied to the case when the interval is $[-1, 1]$. But in case of an arbitrary interval $[a, b]$, the new variable $x = ((b - a)t + a + b)/2$ transforms the computation of the integral to the interval $[-1, 1]$:

$$
\int_a^b f(x)\,dx = \frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)dt.
$$

**Example 7.15.** Approximate the integral $\int_0^1 x^2 e^x\,dx$ using the two-point Gaussian quadrature:

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx &= \frac{1}{2}\int_{-1}^{1}\left(\frac{t + 1}{2}\right)^2 e^{(t+1)/2}\,dt \\
&\approx \frac{1}{2}\left(\left(\frac{-\sqrt{3}/3 + 1}{2}\right)^2 e^{(-\sqrt{3}/3 + 1)/2} + \left(\frac{\sqrt{3}/3 + 1}{2}\right)^2 e^{(\sqrt{3}/3 + 1)/2}\right) \\
&= 0.7119418.
\end{aligned}
$$

The error of this approximation is $0.0063400$. $\quad\square$

### Exercises

1. Apply the 2-point Gaussian quadrature to the integrals given in Exercise 1 of the previous section.

2. Apply the 3-, 4- and 5-point Gaussian quadrature formulas to the integrals given in Exercise 1 of the previous section.

---

*F. Hartung, University of Pannonia*
