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

