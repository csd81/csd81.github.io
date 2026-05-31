const n=`## 7.1. Numerical differentiation

In this section we present two methods to derive numerical approximation formulas for the derivative, and we derive some basic approximation formulas.

The derivative of a function is defined by the limit

$$
f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}.
$$

Therefore, if $|h|$ is small, then the difference quotient $\\dfrac{f(x_0 + h) - f(x_0)}{h}$ is close to the value of the derivative. But we need more: we need to know the truncation error of the approximation. Next we derive this formula in two different ways, and we will derive the formula of the truncation error too.

Suppose $f \\in C^3[a, b]$ and $x_0 \\in (a, b)$. The idea of the first method is the following: We approximate the function $f$ in a neighbourhood of $x_0$ by a Lagrange polynomial $L_n(x)$. We use $L'_n(x_0)$ as an approximation of $f'(x_0)$. We will call this method as Lagrange's method. Consider a simple case: let $n = 1$, $x_1 = x_0 + h \\in (a, b)$ (and $x_0 \\neq x_1$), consider the first-order Lagrange polynomial interpolation of $f$ corresponding to the mesh points $x_0$ and $x_1$:

$$
\\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\\\
&= \\frac{f(x_0)(x - x_0 - h)}{-h} + \\frac{f(x_0 + h)(x - x_0)}{h} + \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_0 - h).
\\end{aligned}
$$

Taking the derivative of both sides we get

$$
\\begin{aligned}
f'(x) ={}& \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f''(\\xi(x))}{2}\\bigl(2(x - x_0) - h\\bigr) \\\\
&+ \\frac{d}{dx}\\Bigl(f''(\\xi(x))\\Bigr)\\frac{(x - x_0)(x - x_0 - h)}{2}.
\\end{aligned}
\\tag{7.1}
$$

Theorem 6.8 yields that the function $f''(\\xi(x))$ is differentiable for $x \\neq x_0, x_0 + h$, but the derivative cannot be computed explicitly. On the other hand, taking the limit $x \\to x_0$ in (7.1) we get

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
\\tag{7.2}
$$

where $\\xi \\in \\langle x_0, x_0 + h \\rangle$. Therefore, if we use the approximation formula

$$
f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h},
\\tag{7.3}
$$

the truncation error of the approximation has the form $-\\dfrac{h}{2}f''(\\xi)$. Formula (7.3) is called **first-order forward difference formula** if $h > 0$, and **first-order backward difference formula** if $h < 0$. In these formulas the mesh point $x_0 + h$ is located right and left to $x_0$, in the respective cases. Formula (7.2) shows that approximation (7.3) is first-order in $h$. Formula (7.3) is also called **two-point difference formula**, since it uses two mesh points.

The same formula can be derived (under weaker conditions) in the following way: Let $f \\in C^2[a, b]$, and consider the first-order Taylor expansion of $f$ around $x_0$:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(\\xi(x))}{2}(x - x_0)^2.
$$

Substitution $x = x_0 + h$ gives

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(\\xi)}{2}h^2,
$$

hence

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
$$

where $\\xi = \\xi(x_0 + h)$.

**Example 7.1.** Consider the function $f(x) = e^{x^2 + x}$. We have $f'(x) = e^{x^2 + x}(2x + 1)$, so $f'(0) = 1$. We compute an approximate value of $f'(0)$ using the first-order forward ($h > 0$) and backward ($h < 0$) difference formula, i.e., formula (7.3). In Table 7.1 we printed the approximate values and their errors for different values of $h$. The numerical results show that if the step size $h$ decreases by one order of magnitude, then the corresponding error also decreases by one order of magnitude. $\\quad\\square$

**Table 7.1:** First-order difference formula, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward difference | error | backward difference | error |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

The previous two methods are appropriate to derive higher order, so more precise formulas. Suppose $f \\in C^{n+1}$, and consider an approximation of $f$ by a Lagrange polynomial of degree $n$:

$$
f(x) = \\sum_{k=0}^{n} f(x_k)l_k(x) + \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n),
\\tag{7.4}
$$

where $l_k(x)$ are the Lagrange basis polynomials of degree $n$ defined by (6.2). Differentiating (7.4) and using substitution $x = x_i$ we get

$$
f'(x_i) = \\sum_{j=0}^{n} f(x_j)l'_j(x_i) + \\frac{f^{(n+1)}(\\xi(x_i))}{(n+1)!}\\prod_{\\substack{j=0 \\\\ j \\neq i}}^{n}(x_i - x_j),
\\tag{7.5}
$$

which is called **$n+1$-point difference formula** to approximate $f'(x_i)$. We apply relation (7.5) for equidistant mesh points, so we assume $x_j = x_0 + jh$, where $h > 0$. It can be shown that the error term in (7.5) is of $n$th-order in $h$, and then the resulting formula will also be called difference formula of order $n$.

Consider the case when $n = 2$, i.e., we study three-point formulas. Consider the mesh points $x_0, x_0 + h, x_0 + 2h$. Then

$$
\\begin{aligned}
l_0(x) &= \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \\frac{(x - x_1)(x - x_2)}{2h^2}, \\\\
l_1(x) &= \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \\frac{(x - x_0)(x - x_2)}{-h^2}, \\\\
l_2(x) &= \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \\frac{(x - x_0)(x - x_1)}{2h^2},
\\end{aligned}
$$

therefore,

$$
\\begin{aligned}
l'_0(x) &= \\frac{2x - x_1 - x_2}{2h^2}, \\\\
l'_1(x) &= \\frac{2x - x_0 - x_2}{-h^2}, \\\\
l'_2(x) &= \\frac{2x - x_0 - x_1}{2h^2}.
\\end{aligned}
$$

We apply them with $x = x_0$, $x = x_0 + h$ and $x = x_0 + 2h$, so relation (7.5) yields

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_0),
\\tag{7.6}
$$

$$
f'(x_0 + h) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0) + \\frac{1}{2}f(x_0 + 2h)\\right) - \\frac{h^2}{6}f'''(\\xi_1),
\\tag{7.7}
$$

$$
f'(x_0 + 2h) = \\frac{1}{h}\\left(\\frac{1}{2}f(x_0) - 2f(x_0 + h) + \\frac{3}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_2).
\\tag{7.8}
$$

The substitutions $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ give that (7.8) can be written in the form (7.6), and (7.7) has the form

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0 - h) + \\frac{1}{2}f(x_0 + h)\\right) - \\frac{h^2}{6}f'''(\\xi_1).
\\tag{7.9}
$$

Relation (7.9) is called **three-point midpoint formula** or **second-order central difference formula**. (It is also called centered difference.) Formula (7.6) is called **three-point endpoint formula**. It is also called **second-order forward difference formula** if $h > 0$, and **second-order backward difference formula** if $h < 0$.

**Example 7.2.** We approximate the derivative of the function $f(x) = e^{x^2 + x}$ at $x = 0$ with second-order difference formulas (formulas (7.6) and (7.9)). The results can be seen in Table 7.2 for different values of $h$. The numerical results demonstrate that the truncation error of the formulas is second-order in $h$. $\\quad\\square$

**Table 7.2:** Second-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Without proofs we present 5-point central and one-sided formulas, i.e., fourth-order difference formulas:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\\\
&- 3f(x_0 + 4h)\\Bigr) + \\frac{h^4}{5}f^{(5)}(\\xi_0),
\\end{aligned}
\\tag{7.10}
$$

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\\Bigr) \\\\
&+ \\frac{h^4}{30}f^{(5)}(\\xi_1).
\\end{aligned}
\\tag{7.11}
$$

Formula (7.10) is one-sided, and (7.11) is central difference.

**Example 7.3.** We apply formulas (7.10) and (7.11) to approximate the first derivative of $f(x) = e^{x^2 + x}$ at $x = 0$. Table 7.3 shows the numerical results. $\\quad\\square$

**Table 7.3:** Fourth-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Next we use the Taylor's method to derive approximation formulas for higher order derivatives. Let $f \\in C^4$, and consider the third-order Taylor polynomial expansion of $f$ at $x_0$ with the fourth-order error term:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(x_0)}{2}(x - x_0)^2 + \\frac{f'''(x_0)}{6}(x - x_0)^3 + \\frac{f^{(4)}(\\xi)}{24}(x - x_0)^4.
$$

If we substitute $x = x_0 - h$ and $x = x_0 + h$ into this relation, we get

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \\frac{f''(x_0)}{2}h^2 - \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_1)}{24}h^4
$$

and

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(x_0)}{2}h^2 + \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_2)}{24}h^4.
$$

Adding the two equations we get

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^4,
$$

which yields

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2.
$$

Therefore, the approximation formula

$$
f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
\\tag{7.12}
$$

has an error of order $h^2$. We can rewrite the error term $\\dfrac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2$ in a simpler form. We have by our assumptions that $f^{(4)}$ is continuous, therefore, Theorem 2.2 yields that there exists a point $\\xi$ in between $\\xi_1$ and $\\xi_2$ such that

$$
f^{(4)}(\\xi) = \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{2}.
$$

Hence

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi)}{12}h^2.
\\tag{7.13}
$$

**Example 7.4.** We computed the approximation of the second-order derivative of $f(x) = e^{x^2 + x}$ at $x = 0$ using formula (7.12) and different step sizes. The numerical results can be seen in Table 7.4. Note that the exact derivative value is $f''(0) = 3$. $\\quad\\square$

**Table 7.4:** Approximation of the second-order derivative, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | approximation | error |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

The numerical differentiation is an unstable problem. To illustrate it we consider a function $f(x)$ and its perturbation of the form

$$
g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x).
$$

If we compute an approximation of $g'$ instead of $f'$ using any difference formula obtained above, then there is a small change in the function values used in the difference formula if $n$ is large. But the difference between the exact value of the derivatives is large, since $g'(x) = f'(x) + n\\cos(n^2 x)$.

Next we investigate the effect of the rounding in numerical differentiation. Consider the simplest difference formula, the first-order difference (7.2). Suppose that here, instead of the exact function values $f(x_0)$ and $f(x_0 + h)$, we use their approximate values $f_0$ and $f_1$, where

$$
f(x_0) = f_0 + e_0 \\quad\\text{and}\\quad f(x_0 + h) = f_1 + e_1.
$$

Then

$$
f'(x_0) \\approx \\frac{f_1 - f_0}{h},
$$

and the resulting error is

$$
\\begin{aligned}
f'(x_0) - \\frac{f_1 - f_0}{h} &= f'(x_0) - \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{f_1 - f_0}{h} \\\\
&= -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}.
\\end{aligned}
\\tag{7.14}
$$

Relation (7.14) shows that the error consists of two parts: the truncation error and the rounding error. If the step size $h$ is small, then the truncation error will be small, but the rounding error can go to $\\infty$ as $h \\to 0$.

**Example 7.5.** Consider the function $f(x) = e^x$. We compute the approximation of $f'(1) = e$ using first-order forward difference formula. In order to enlarge the effect of the rounding, we used 6- and 4-digit arithmetic in the computation. We can see in Table 7.5 that in case of the 4-digit arithmetic, when we decreased the step size to 0.001 from 0.01, the error of the approximation increased. The reason is, clearly, the increase of the rounding error, since here we subtracted two numbers which are close to each other, and also divided by a small number. $\\quad\\square$

**Table 7.5:** Effect of rounding in first-order forward difference, $f(x) = e^x$, $x_0 = 1$

| | 6-digit arithmetic | | 4-digit arithmetic | |
|---|---|---|---|---|
| $h$ | approximation | error | approximation | error |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

The formulas derived in this section can be applied to approximate partial derivatives. We list some formulas next.

$$
\\frac{\\partial f(x_0, y_0)}{\\partial x} \\approx \\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\\tag{7.15}
$$

$$
\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\\tag{7.16}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\\tag{7.17}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial y^2} \\approx \\frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\\tag{7.18}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x\\,\\partial y} \\approx \\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\\tag{7.19}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\\tag{7.20}
$$

### Exercises

**Exercise 1.** Compute an approximation of $f'(x_0)$ using first-order forward and backward difference formulas with $h = 0.1$ and $0.01$ if
(a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
(b) $f(x) = e^x \\sin x$, $x_0 = 0$,
(c) $f(x) = \\cos x^2$, $x_0 = 1$,
(d) $f(x) = x \\ln x$, $x_0 = 1$.

<details class="reveal-solution"><summary>Show solution</summary>

**Function (worked example):** $f(x) = e^{x^2+x}$, $x_0 = 0$, exact $f'(0) = 1$

**Forward difference:** $f'(0) \\approx \\frac{f(h) - f(0)}{h}$

**Backward difference:** $f'(0) \\approx \\frac{f(0) - f(-h)}{h}$

| h | Forward | Error | Backward | Error |
|---|---------|-------|----------|-------|
| 0.1 | 1.1628 | 0.1628 | 0.8607 | 0.1393 |
| 0.01 | 1.0151 | 0.0151 | 0.9851 | 0.0149 |
| 0.001 | 1.0015 | 0.0015 | 0.9985 | 0.0015 |

**Observation:** Error decreases linearly with $h$ (first-order method). The same procedure applies to each of the functions (a)–(d).

</details>

**Exercise 2.** Apply second-order difference formulas in the previous exercise.

<details class="reveal-solution"><summary>Show solution</summary>

**Formula:** $f'(x_0) \\approx \\frac{f(x_0+h) - f(x_0-h)}{2h}$

**Error:** $-\\frac{h^2}{6}f'''(\\xi)$

For the worked example $f(x) = e^{x^2+x}$ at $x_0 = 0$:

$f'''(x) = e^{x^2+x}(8x^3 + 12x^2 + 12x + 6)$, so $f'''(0) = 6$.

**Theoretical error:** $\\frac{h^2}{6} \\cdot 6 = h^2$

| h | Approximation | Error | Error/h² |
|---|---------------|-------|----------|
| 0.1 | 1.00167 | 0.00167 | 0.167 |
| 0.01 | 1.00002 | 0.00002 | 0.200 |
| 0.001 | 1.00000 | ~0.00000 | ~0.17 |

**Observation:** Error is $O(h^2)$, much better than first-order.

</details>

**Exercise 3.** Approximate $f''(x_0)$ for the functions given in Exercise 1.

<details class="reveal-solution"><summary>Show solution</summary>

**Formula:** $f''(x_0) \\approx \\frac{f(x_0+h) - 2f(x_0) + f(x_0-h)}{h^2}$

**Error:** $-\\frac{h^2}{12}f^{(4)}(\\xi)$

For the worked example $f(x) = e^{x^2+x}$ at $x_0 = 0$:

Exact: $f''(0) = e^0(4\\cdot 0^2 + 4\\cdot 0 + 2) + e^0(2\\cdot 0 + 1)^2 = 2 + 1 = 3$

| h | Approximation | Error |
|---|---------------|-------|
| 0.1 | 3.0050 | 0.0050 |
| 0.01 | 3.0001 | 0.0001 |
| 0.001 | 3.0000 | ~0.0000 |

</details>

**Exercise 4.** Derive formulas (7.6) and (7.9) using Taylor's method.

**Exercise 5.** Prove relations (7.10) and (7.11).

<details class="reveal-solution"><summary>Show solution</summary>

**Derive the three-point formula.** Given points $x_0$, $x_1 = x_0 + h$, $x_2 = x_0 + 2h$, find a formula for $f'(x_0)$ using the Lagrange method:

$L_2(x) = f(x_0)l_0(x) + f(x_1)l_1(x) + f(x_2)l_2(x)$

where
$l_0(x) = \\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)} = \\frac{(x-x_0-h)(x-x_0-2h)}{2h^2}$,
$l_1(x) = \\frac{(x-x_0)(x-x_0-2h)}{-h^2}$,
$l_2(x) = \\frac{(x-x_0)(x-x_0-h)}{2h^2}$.

Differentiate at $x = x_0$:

$l'_0(x_0) = \\frac{-3h}{2h^2} = -\\frac{3}{2h}$, $\\quad l'_1(x_0) = \\frac{-2h}{-h^2} = \\frac{2}{h}$, $\\quad l'_2(x_0) = \\frac{h}{2h^2} = \\frac{1}{2h}$.

**Formula:**
$$f'(x_0) \\approx -\\frac{3}{2h}f(x_0) + \\frac{2}{h}f(x_0+h) - \\frac{1}{2h}f(x_0+2h) = \\frac{-3f(x_0) + 4f(x_0+h) - f(x_0+2h)}{2h}$$

**Error:** $\\frac{h^2}{3}f'''(\\xi)$ (second-order).

</details>

**Exercise 6.** Derive the following approximation formulas:
$$
f'''(x_0) \\approx \\frac{1}{2h^3}\\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\\Bigr),
$$
$$
f^{(4)}(x_0) \\approx \\frac{1}{h^4}\\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\\Bigr)
$$

<details class="reveal-solution"><summary>Show solution</summary>

**Optimal step size (related discussion).** Differentiation formulas balance truncation error against rounding error. For the centered first-derivative formula,

**Total error:** $E(h) = \\frac{h^2}{6}|f'''(\\xi)| + \\frac{2\\varepsilon}{h}$,

where $\\varepsilon$ is the machine epsilon (rounding-error bound). Minimizing, differentiate w.r.t. $h$:

$\\frac{dE}{dh} = \\frac{h}{3}|f'''| - \\frac{2\\varepsilon}{h^2} = 0 \\;\\Rightarrow\\; h^3 = \\frac{6\\varepsilon}{|f'''|}$.

**Optimal $h$:**
$$h_{opt} = \\left(\\frac{6\\varepsilon}{|f'''|}\\right)^{1/3}$$

For double precision ($\\varepsilon \\approx 10^{-16}$) and $|f'''| \\approx 1$: $h_{opt} \\approx (6 \\times 10^{-16})^{1/3} \\approx 10^{-5}$.

</details>

**Exercise 7.** Derive formulas (7.15)–(7.20) using
(a) approximation formulas formulated for single variable functions,
(b) two-variable Lagrange's method,
(c) two-variable Taylor's method.
Compute the truncation errors.
`,e=`## 7.3. Newton–Cotes Formulas

Let $f \\in C[a, b]$. The definite integral, similarly to the derivative, is defined by a limit. The definition using Riemann's sum is the following: consider a finite partition of the interval $[a, b]$ using the mesh points $a = x_0 < x_1 < \\cdots < x_n = b$, and in each subinterval $[x_{i-1}, x_i]$ select a point $\\xi_i$. Then the integral $\\int_a^b f(x)\\,dx$ is a limit of the Riemann's sum $\\sum_{i=1}^{n} f(\\xi_i)(x_i - x_{i-1})$ as the norm of the partition, $\\max\\{x_i - x_{i-1} : i = 1, \\ldots, n\\}$ goes to zero. Such a Riemann's sum is for example

$$
\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{n}\\left(f\\left(\\frac{x_0 + x_1}{2}\\right) + f\\left(\\frac{x_1 + x_2}{2}\\right) + \\cdots + f\\left(\\frac{x_{n-1} + x_n}{2}\\right)\\right),
\\tag{7.27}
$$

where $x_i = a + i(b - a)/n$, $i = 0, 1, \\ldots, n$. This formula is called **midpoint rule** or **rectangle rule**. (See Exercises 5 and 6.)

Similarly to the numerical differentiation, we can use the Lagrange's method to derive approximation formulas for definite integrals. Consider a partition of the interval $[a, b]$ (typically with equidistant mesh points), and let $L_n$ be the Lagrange interpolating polynomial of the function $f$ corresponding to the given mesh. Consider $\\int_a^b L_n(x)\\,dx$ as an approximation of $\\int_a^b f(x)\\,dx$. We suppose that $f \\in C^{n+1}[a, b]$. Then Theorem 6.5 yields the error of the approximation:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\sum_{k=0}^{n} f(x_k)\\int_a^b l_k(x)\\,dx \\\\
&+ \\int_a^b \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)\\,dx,
\\end{aligned}
\\tag{7.28}
$$

where $l_k(x)$ (corresponding to the mesh points) is the Lagrange basis polynomial of degree $n$ defined by (6.2). Here we get an approximation formula of the form

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{k=0}^{n} c_k f(x_k),
\\tag{7.29}
$$

where the weights $c_k$ are defined by

$$
c_k = \\int_a^b l_k(x)\\,dx.
\\tag{7.30}
$$

Approximation formulas of the form (7.29) are called **quadrature formulas**. Those quadrature formulas when the weights $c_k$ are defined by the integrals (7.30) are called **Newton–Cotes formulas**. If the end points of the interval $a$ and $b$ belong to the mesh points, then formulas (7.29)–(7.30) are called **closed Newton–Cotes formulas**, and if all mesh points belong to the open interval $(a, b)$, then they are called **open Newton–Cotes formulas**.

We say that the **degree of precision** of a quadrature formula is $n$ if the formula gives back the exact value of the definite integral for all polynomials with degree at most $n$, and there exists a polynomial of degree $n + 1$ for which the quadrature formula is not exact. Therefore, the degree of precision of the $(n+1)$-point Newton–Cotes formula (7.29)–(7.30) is at least $n$, since in this case the Lagrange polynomial $L_n$ is identical to the function $f$. It is possible to show that for even $n$ the $(n + 1)$-point Newton–Cotes formulas are exact for polynomials with degree $n + 1$ too.

Next we consider the closed Newton–Cotes formula for $n = 1$. Let $x_0 = a$, $x_1 = b$ and $h = b - a$. Then

$$
L_1(x) = f(x_0)\\frac{x - x_1}{x_0 - x_1} + f(x_1)\\frac{x - x_0}{x_1 - x_0},
$$

so

$$
\\begin{aligned}
\\int_{x_0}^{x_1} L_1(x)\\,dx &= f(x_0)\\int_{x_0}^{x_1} \\frac{x - x_1}{x_0 - x_1}\\,dx + f(x_1)\\int_{x_0}^{x_1} \\frac{x - x_0}{x_1 - x_0}\\,dx \\\\
&= \\left[f(x_0)\\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\\frac{(x - x_0)^2}{2(x_1 - x_0)}\\right]_{x_0}^{x_1} \\\\
&= \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr).
\\end{aligned}
$$

The error of this formula, according to (7.28), is

$$
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) = \\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx.
$$

To simplify the formula of the error term we use that $(x - x_0)(x - x_1) < 0$ for $x \\in (x_0, x_1)$, and hence Theorem 2.6 can be used. Therefore, there exists $\\eta \\in (x_0, x_1)$ such that

$$
\\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx = \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)(x - x_1)\\,dx.
$$

Hence

$$
\\begin{aligned}
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) &= \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\\,dx \\\\
&= \\frac{f''(\\eta)}{2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_1} \\\\
&= -\\frac{h^3}{12}f''(\\eta).
\\end{aligned}
$$

We obtained the so-called **trapezoidal rule**:

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\bigl(f(a) + f(b)\\bigr) - \\frac{h^3}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.31}
$$

The name of the formula comes from the fact that $\\frac{h}{2}\\bigl(f(a) + f(b)\\bigr)$ gives back the area of the region bounded by the secant line of the function corresponding to the points $a$ and $b$, the $x$-axis, and the vertical lines $x = a$ and $x = b$.

The trapezoidal rule gives a good approximation of the integral if the length of the interval is small. If we have a large interval, then we divide it into $n$ subintervals of equal length by the mesh points $x_i = a + ih$ ($i = 0, 1, \\ldots, n$), where $h = (b - a)/n$, and we apply the trapezoidal rule for each subintervals:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx &= \\sum_{i=1}^{n}\\int_{x_{i-1}}^{x_i} f(x)\\,dx \\\\
&= \\sum_{i=1}^{n}\\frac{h}{2}\\bigl(f(x_{i-1}) + f(x_i)\\bigr) - \\frac{h^3}{12}\\sum_{i=1}^{n} f''(\\xi_i) \\\\
&= \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{nh^3}{12}\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i).
\\end{aligned}
$$

We suppose that $f \\in C^2[a, b]$. Then it follows from Theorem 2.2 that the average value $\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i)$ can be replaced by a single function value of the form $f''(\\xi)$. Therefore, using $hn = b - a$, we get

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{(b - a)h^2}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.32}
$$

This formula is called **composite trapezoidal rule**.

**Example 7.7.** We compute approximate values of the integral $\\int_0^1 x^2 e^x\\,dx$ using the basic or composite trapezoidal rule with $h = 1$, $h = 0.5$ and $h = 0.25$, respectively. It can be checked that the exact value of the integral is $\\int_0^1 x^2 e^x\\,dx = e - 2 = 0.7182818$ (with 7 digits precision). For the first case we have

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{1}{2}(0 + e) = 1.3591409,
$$

where we computed the numerical values with 7 digits precision. The error in this case is $0.6408591$. With $h = 0.5$ the composite trapezoidal rule gives

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{2}(0 + 2 \\cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Hence its error is $0.1673788$. Finally, for $h = 0.25$ we get

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{2}(0 + 2 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 2 \\cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

so its error is $0.0423145$. We can observe that if the step size reduces to its half, then the corresponding error in the approximation reduces to its quarter, which indicates that the error in $h$ is quadratic. $\\quad\\square$

Consider formula (7.28) for $n = 2$ and using equidistant mesh points, i.e., $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\\begin{aligned}
\\int_{x_0}^{x_2} L_2(x)\\,dx ={}& f(x_0)\\int_{x_0}^{x_2} \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\\,dx + f(x_1)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\\,dx \\\\
&+ f(x_2)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\\,dx - \\frac{f(x_1)}{h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\\,dx \\\\
&+ \\frac{f(x_2)}{2h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\left[\\frac{(x - x_2)^3}{3} + h\\frac{(x - x_2)^2}{2}\\right]_{x_0}^{x_2} - \\frac{f(x_1)}{h^2}\\left[\\frac{(x - x_0)^3}{3} - 2h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
&+ \\frac{f(x_2)}{2h^2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
={}& \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr).
\\end{aligned}
$$

The truncation error is

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx.
$$

Now there is a difference compared to the previous case: the function $(x - x_0)(x - x_1)(x - x_2)$ has opposite signs on the intervals $(x_0, x_1)$ and $(x_1, x_2)$, so Theorem 2.6 is not applicable on $(x_0, x_2)$. We have a different method to simplify the formula for the error term. Let

$$
\\begin{aligned}
p(x) &:= \\int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\\,dt \\\\
&= \\int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\\,dt \\\\
&= \\left[\\frac{(t - x_1)^4}{4} - h^2\\frac{(t - x_1)^2}{2}\\right]_{x_0}^{x} \\\\
&= \\frac{(x - x_1)^4}{4} - \\frac{h^2(x - x_1)^2}{2} + \\frac{h^4}{4} \\\\
&= \\frac{1}{4}\\bigl((x - x_1)^2 - h^2\\bigr)^2.
\\end{aligned}
$$

Then $p(x_0) = p(x_2) = 0$, so integration by parts gives

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\int_{x_0}^{x_2} \\frac{d}{dx}\\frac{f'''(\\xi(x))}{6}\\,p(x)\\,dx.
$$

$p$ is a nonnegative function, hence applying Theorems 2.6 and 6.8, we get

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\frac{f^{(4)}(\\eta)}{24}\\int_{x_0}^{x_2} p(x)\\,dx = -\\frac{h^5}{90}f^{(4)}(\\eta).
$$

We have proved the relation

$$
\\int_{x_0}^{x_2} f(x)\\,dx = \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr) - \\frac{h^5}{90}f^{(4)}(\\eta), \\qquad \\eta \\in (x_0, x_2),
\\tag{7.33}
$$

which is called **Simpson's rule**.

This error formula yields that the Simpson's rule is precise for third-order polynomials, since then $f^{(4)}$ is identically equal to 0. On the other hand, the order of approximation in $h$ is five. Similar higher order of precision can be shown for all Newton–Cotes formulas with even $n$.

Similarly to the composite trapezoidal rule, we can derive the composite Simpson's rule: We divide the interval $[a, b]$ into $2n$ equal parts, so let $h = (b - a)/2n$. Then

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right) \\\\
&- \\frac{(b - a)h^4}{180}f^{(4)}(\\xi), \\qquad \\xi \\in (a, b).
\\end{aligned}
\\tag{7.34}
$$

**Example 7.8.** Compute the approximate values of $\\int_0^1 x^2 e^x\\,dx$ using (composite) Simpson's formula with $h = 0.5$, $h = 0.25$ and $h = 0.125$. First we get

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{3}(0 + 4 \\cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

The error is $0.0095520$. For $h = 0.25$ we apply the composite Simpson's formula:

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{3}(0 + 4 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 4 \\cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Its error is $0.0006264$. Finally, for $h = 0.125$ we get

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx \\approx{}& \\frac{0.125}{3}\\Bigl(0 + 4 \\cdot 0.125^2 e^{0.125} + 2 \\cdot 0.25^2 e^{0.25} + 4 \\cdot 0.375^2 e^{0.375} + 2 \\cdot 0.5^2 e^{0.5} \\\\
&+ 4 \\cdot 0.625^2 e^{0.625} + 2 \\cdot 0.75^2 e^{0.75} + 4 \\cdot 0.875^2 e^{0.875} + e\\Bigr) = 0.7183215,
\\end{aligned}
$$

which has the error $0.0000396$. $\\quad\\square$

Next we present some other closed Newton–Cotes formulas.

**Simpson's $\\frac{3}{8}$ formula:**

$$
\\int_{x_0}^{x_3} f(x)\\,dx = \\frac{3h}{8}\\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\\bigr) - \\frac{3h^5}{80}f^{(4)}(\\xi)
\\tag{7.35}
$$

**$n = 4$:**

$$
\\int_{x_0}^{x_4} f(x)\\,dx = \\frac{2h}{45}\\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\\bigr) - \\frac{8h^7}{945}f^{(6)}(\\xi)
\\tag{7.36}
$$

Finally, we present some open Newton–Cotes formulas:

$$
\\int_{x_{-1}}^{x_1} f(x)\\,dx = 2hf(x_0) + \\frac{h^3}{3}f''(\\xi),
\\tag{7.37}
$$

$$
\\int_{x_{-1}}^{x_2} f(x)\\,dx = \\frac{3h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) + \\frac{3h^3}{4}f''(\\xi),
\\tag{7.38}
$$

$$
\\int_{x_{-1}}^{x_3} f(x)\\,dx = \\frac{4h}{3}\\bigl(2f(x_0) - f(x_1) + 2f(x_2)\\bigr) + \\frac{14h^5}{45}f^{(4)}(\\xi),
\\tag{7.39}
$$

$$
\\int_{x_{-1}}^{x_4} f(x)\\,dx = \\frac{5h}{24}\\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\\bigr) + \\frac{95h^5}{144}f^{(4)}(\\xi).
\\tag{7.40}
$$

We close this section with the investigation of the numerical stability of the integration.

**Theorem 7.9.** Let $\\sum_{i=1}^{n} c_i f(x_i)$ be a quadrature formula which is exact for constant functions and each coefficient $c_i$ is positive. Let $y_i$ be an approximate value of the exact function value $f(x_i)$, and suppose $|y_i - f(x_i)| \\leq \\varepsilon$. Then

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\varepsilon(b - a).
$$

*Proof.* According to the assumptions, $(b - a) = \\int_a^b 1\\,dx = \\sum_{i=1}^{n} c_i$, therefore,

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\sum_{i=1}^{n} c_i |f(x_i) - y_i| \\leq \\varepsilon\\sum_{i=1}^{n} c_i = \\varepsilon(b - a). \\qquad\\square
$$

We note that all quadrature formulas we presented in this section were exact for constant functions, and most of them had positive weights. Therefore, all such formulas are stable for the rounding error.

### Exercises

**Exercise 1.** Compute approximate values of the integrals using the trapezoidal rule with step sizes $h = 0.5, 0.25, 0.125$, respectively:
(a) $\\int_0^1 \\sin^3 x\\,dx$,
(b) $\\int_1^2 \\ln(x + 1)\\,dx$,
(c) $\\int_1^2 e^{1/x}\\,dx$.

<details class="reveal-solution"><summary>Show solution</summary>

**(a) $\\int_0^1 \\sin^3 x \\, dx$**

Exact: $\\int_0^1 \\sin^3 x \\, dx = \\int_0^1 \\sin x(1-\\cos^2 x) \\, dx = [-\\cos x + \\frac{\\cos^3 x}{3}]_0^1 = 0.178940$

**h = 0.5 (n = 2):** $x_0 = 0, x_1 = 0.5, x_2 = 1$

$T(0.5) = \\frac{0.5}{2}(\\sin^3(0) + 2\\sin^3(0.5) + \\sin^3(1)) = 0.25(0 + 2(0.1179) + 0.5958) = 0.2079$, error 0.0290.

**h = 0.25 (n = 4):**
$T(0.25) = \\frac{0.25}{2}(\\sin^3(0) + 2[\\sin^3(0.25) + \\sin^3(0.5) + \\sin^3(0.75)] + \\sin^3(1)) = 0.1864$, error 0.0075.

**h = 0.125 (n = 8):** $T(0.125) \\approx 0.1808$, error 0.0019.

**Observation:** Error decreases by factor ~4 when $h$ is halved ($O(h^2)$).

**(b) $\\int_1^2 \\ln(x+1) \\, dx$**

Exact: $[(x+1)\\ln(x+1) - x]_1^2 = 3\\ln 3 - 2\\ln 2 - 1 = 0.909543$

**h = 0.5:** $x_0 = 1, x_1 = 1.5, x_2 = 2$

$T(0.5) = \\frac{0.5}{2}(\\ln 2 + 2\\ln 2.5 + \\ln 3) = 0.25(0.6931 + 2(0.9163) + 1.0986) = 0.9111$, error 0.0016.

**(c) $\\int_1^2 e^{1/x} \\, dx$** requires numerical evaluation of the function values; apply the same trapezoidal formula.

</details>

**Exercise 2.** Repeat Exercise 1 using the Simpson's rule.

<details class="reveal-solution"><summary>Show solution</summary>

**(a) $\\int_0^1 \\sin^3 x \\, dx$**

**h = 0.5 (n = 2, one Simpson panel):**
$S(0.5) = \\frac{0.5}{3}(\\sin^3(0) + 4\\sin^3(0.5) + \\sin^3(1)) = \\frac{0.5}{3}(0 + 4(0.1179) + 0.5958) = 0.1780$, error 0.0009 (much better than trapezoidal).

**h = 0.25 (n = 4, two panels):**
$S(0.25) = \\frac{0.25}{3}(\\sin^3(0) + 4\\sin^3(0.25) + 2\\sin^3(0.5) + 4\\sin^3(0.75) + \\sin^3(1)) = 0.1790$, error 0.0001.

**Observation:** Simpson's rule is much more accurate than trapezoidal ($O(h^4)$ vs $O(h^2)$).

</details>

**Exercise 3.** Repeat Exercise 1 using formulas (7.35)–(7.36).

<details class="reveal-solution"><summary>Show solution</summary>

**Using Simpson's 3/8 rule:**
$$\\int_{x_0}^{x_3} f(x)dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$$

**(a) $\\int_0^1 \\sin^3 x \\, dx$ with $h = 1/3$:** $x_0 = 0, x_1 = 1/3, x_2 = 2/3, x_3 = 1$

$S_{3/8} = \\frac{3(1/3)}{8}(\\sin^3(0) + 3\\sin^3(1/3) + 3\\sin^3(2/3) + \\sin^3(1)) = \\frac{1}{8}(1.3261) = 0.1658$, error 0.0131.

**Using Boole's rule:**
$$\\int_{x_0}^{x_4} f(x)dx \\approx \\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$$

For $h = 0.25$ on $[0,1]$: $B = \\frac{2(0.25)}{45}(0 + 32(0.0154) + 12(0.1179) + 32(0.3507) + 7(0.5958)) = 0.1922$, error 0.0133.

</details>

**Exercise 4.** Repeat Exercise 1 using formulas Newton–Cotes Formulas (7.37)–(7.40).

<details class="reveal-solution"><summary>Show solution</summary>

**Using the open midpoint formula (7.37):**
$$\\int_{x_{-1}}^{x_1} f(x)dx \\approx 2hf(x_0)$$

For $\\int_0^1 \\sin^3 x \\, dx$ with $h = 0.5$, midpoint $x_0 = 0.5$:

$M = 2(0.5)\\sin^3(0.5) = 1 \\times 0.1179 = 0.1179$, error 0.0610 (not as good as the closed formulas).

</details>

**Exercise 5.** Prove that the midpoint formula (7.27) gives back the sum of the areas under tangent lines at the midpoints of the intervals $[x_i, x_{i+1}]$.

<details class="reveal-solution"><summary>Show solution</summary>

On $[x_i, x_{i+1}]$, the midpoint is $m_i = \\frac{x_i + x_{i+1}}{2}$. The tangent line at the midpoint is $y = f(m_i) + f'(m_i)(x - m_i)$.

Area under the tangent:
$$\\int_{x_i}^{x_{i+1}} [f(m_i) + f'(m_i)(x - m_i)] dx = f(m_i)h + f'(m_i)\\left[\\frac{(x-m_i)^2}{2}\\right]_{x_i}^{x_{i+1}}$$

Since $x_{i+1} - m_i = h/2$ and $x_i - m_i = -h/2$:
$$= f(m_i)h + f'(m_i)\\left(\\frac{h^2/4}{2} - \\frac{h^2/4}{2}\\right) = f(m_i)h$$

So the area under each tangent equals $h f(m_i)$, the midpoint-rule contribution. $\\square$

</details>

**Exercise 6.** Show that the midpoint formula is a Newton–Cotes formula, and derive its error term.

<details class="reveal-solution"><summary>Show solution</summary>

Newton–Cotes with $n = 0$ (one point) at the midpoint uses the Lagrange basis $l_0(x) = 1$:
$$\\int_{-h}^{h} f(x)dx \\approx \\int_{-h}^{h} f(0) \\cdot 1 \\, dx = 2hf(0)$$

which is the midpoint rule. **Error derivation** via Taylor expansion around the midpoint:
$$f(x) = f(0) + f'(0)x + \\frac{f''(\\xi)}{2}x^2$$
$$\\int_{-h}^{h} f(x)dx = 2hf(0) + 0 + \\frac{f''(\\xi)}{2}\\int_{-h}^{h} x^2 dx = 2hf(0) + \\frac{f''(\\xi)}{2}\\cdot\\frac{2h^3}{3}$$

**Error:** $\\frac{h^3}{3}f''(\\xi)$. $\\square$

</details>

**Exercise 7.** Derive formulas (7.35)–(7.36) (without computing the error terms).

<details class="reveal-solution"><summary>Show solution</summary>

**Simpson's 3/8 rule ($n = 3$):** integrate the Lagrange polynomial through 4 equally spaced points (spacing $h$). Changing variable to $t = (x - x_0)/h$ and integrating from 0 to 3,
$$\\int_{x_0}^{x_3} L_3(x)dx = \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$$

**Boole's rule ($n = 4$):** integrate the Lagrange polynomial through 5 points,
$$\\int_{x_0}^{x_4} L_4(x)dx = \\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$$

</details>

**Exercise 8.** Derive formulas (7.37)–(7.40) (without computing the error terms).

<details class="reveal-solution"><summary>Show solution</summary>

The open Newton–Cotes formulas are obtained by the same approach as the closed ones, integrating the Lagrange interpolating polynomial built on the interior nodes only (the endpoints are excluded), again with the substitution $t = (x - x_0)/h$.

</details>
`,a=`## 7.4. Gaussian Quadrature

In the previous section we have seen that the Newton–Cotes formulas give back the exact value of the integral for polynomials with certain degree. Now we would like to derive quadrature formulas with similar property. Consider the general quadrature formula

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} c_i f(x_i).
$$

We have the following statement:

**Theorem 7.10.** A quadrature formula

$$
Q(f) := \\sum_{i=1}^{n} c_i f(x_i)
\\tag{7.41}
$$

is exact for polynomials $p(x) = a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0$ of degree at most $m$ if and only if it is exact for the monomials $x^i$ for all $i = 0, 1, \\ldots, m$.

*Proof.* If $Q$ is exact for all polynomials with degree at most $m$, it certainly implies that it is exact for all monomials $x^i$ for all $i = 0, 1, \\ldots, m$.

Suppose now that $Q$ is exact for the monomials $x^i$ for all $i = 0, 1, \\ldots, m$. Then the linearity of the integral and the quadrature formula $Q$ yield that

$$
\\begin{aligned}
\\int_a^b a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0\\,dx &= a_m\\int_a^b x^m\\,dx + a_{m-1}\\int_a^b x^{m-1}\\,dx + \\cdots + a_0\\int_a^b 1\\,dx \\\\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \\cdots + a_0 Q(1) \\\\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0). \\qquad\\square
\\end{aligned}
$$

The quadrature formula $Q$ defined by (7.41) contains $2n$ number of parameters, $c_i, x_i$ ($i = 1, 2, \\ldots, n$). The previous theorem indicates that such a quadrature formula can be exact for polynomials with degree at most $2n - 1$, since it also contains $2n$ coefficients. Then Theorem 7.10 yields that a quadrature formula $Q$ is exact for polynomials of degree at most $2n - 1$ if and only if the following $2n$ number of equations hold:

$$
\\begin{aligned}
\\int_a^b 1\\,dx &= \\sum_{i=1}^{n} c_i \\\\
\\int_a^b x\\,dx &= \\sum_{i=1}^{n} c_i x_i \\\\
\\int_a^b x^2\\,dx &= \\sum_{i=1}^{n} c_i x_i^2 \\\\
&\\;\\;\\vdots \\\\
\\int_a^b x^{2n-1}\\,dx &= \\sum_{i=1}^{n} c_i x_i^{2n-1}
\\end{aligned}
\\tag{7.42}
$$

The quadrature formula of the form (7.41) where the parameters are the solutions of the nonlinear system (7.42) is called **$n$-point Gaussian quadrature formula**.

Consider the special case when $n = 2$ and $[a, b] = [-1, 1]$. Then system (7.42) is equivalent to the system

$$
\\begin{aligned}
2 &= c_1 + c_2 \\\\
0 &= c_1 x_1 + c_2 x_2 \\\\
\\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\\\
0 &= c_1 x_1^3 + c_2 x_2^3.
\\end{aligned}
$$

It can be checked that this system has a unique solution (apart from the order): $c_1 = c_2 = 1$ and $x_1 = -\\frac{\\sqrt{3}}{3}$, $x_2 = \\frac{\\sqrt{3}}{3}$. So the two-point Gaussian quadrature formula is

$$
\\int_{-1}^{1} f(x)\\,dx \\approx f\\left(-\\frac{\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3}\\right).
\\tag{7.43}
$$

**Example 7.11.** We compute the approximation of the integral of $f(x) = e^x$ on the interval $[-1, 1]$. The Gaussian formula (7.43) yields

$$
\\int_{-1}^{1} e^x\\,dx \\approx e^{-\\frac{\\sqrt{3}}{3}} + e^{\\frac{\\sqrt{3}}{3}} = 2.3426961.
$$

Comparing it with the exact value $e - 1/e = 2.350424$ we get that the error of the approximation is $0.0077062$, which is small, compared to the simplicity of the formula. $\\quad\\square$

We need the notion of orthogonal functions. The functions $f$ and $g$ are called **orthogonal** on the interval $[a, b]$ if

$$
\\int_a^b f(x)g(x)\\,dx = 0.
$$

We show that there exists a sequence of functions $(P_i)_{i=0,1,\\ldots}$ which are pairwise orthogonal on the interval $[-1, 1]$, and $P_i$ is a polynomial of degree $i$. Let $P_0(x) := 1$ and $P_1(x) := x$. Then $P_0$ and $P_1$ are orthogonal on $[-1, 1]$. We are looking for $P_2$ in the form $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$. Then the requested orthogonality yields

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_0(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1(x)P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx,
\\end{aligned}
$$

which gives

$$
a_{2,0} = -\\frac{\\int_{-1}^{1} x^2 P_0(x)\\,dx}{\\int_{-1}^{1} P_0^2(x)\\,dx}.
$$

Similarly,

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx,
\\end{aligned}
$$

so

$$
a_{2,1} = -\\frac{\\int_{-1}^{1} x^2 P_1(x)\\,dx}{\\int_{-1}^{1} P_1^2(x)\\,dx}.
$$

We found a unique $P_2$ of this form. We can continue this procedure. If $P_0, \\ldots, P_i$ are already defined, then we are looking for $P_{i+1}$ in the form

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \\cdots + a_{i+1,0} P_0(x).
\\tag{7.44}
$$

Then, similarly to the previous computation, we get

$$
a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}, \\qquad j = 0, 1, \\ldots, i,
\\tag{7.45}
$$

so $P_{i+1}$ can be defined uniquely. This method is called **Gram–Schmidt orthogonalization**, and the resulting polynomial $P_i$ is called **Legendre polynomial** of degree $i$. The formulas of the first five Legendre polynomials are:

$$
\\begin{aligned}
P_0(x) &= 1, \\\\
P_1(x) &= x, \\\\
P_2(x) &= x^2 - \\frac{1}{3}, \\\\
P_3(x) &= x^3 - \\frac{3}{5}x, \\\\
P_4(x) &= x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}.
\\end{aligned}
$$

It can be shown that the Legendre polynomials satisfy the recursion

$$
P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x).
\\tag{7.46}
$$

The next theorem summarizes the most important properties of the Legendre polynomials.

**Theorem 7.12.** Let $P_i$ be the $i$th Legendre polynomial. Then

1. $P_i$ is orthogonal to any polynomial with degree at most $i - 1$.

2. $P_i$ is even if $i$ is even, and it is odd if $i$ is odd.

3. $P_i$ has $i$ distinct real roots in the interval $(-1, 1)$, and they are symmetric to the origin.

4. If $(p_i)_{i=0,1,\\ldots}$ is a sequence of polynomials of degree (exactly) $i$, which are pairwise orthogonal, then $p_i(x) = c_i P_i(x)$ for all $i$ for some constant $c_i \\neq 0$.

The next theorem shows that the mesh points of the $n$-point Gaussian quadrature formula defined on the interval $[-1, 1]$ are the roots of the $n$th-order Legendre polynomial $P_n$.

**Theorem 7.13.** Let $x_1, x_2, \\ldots, x_n$ be the roots of the $n$th Legendre polynomial $P_n$, and let

$$
c_i = \\int_{-1}^{1} \\frac{(x - x_1)\\cdots(x - x_{i-1})(x - x_{i+1})\\cdots(x - x_n)}{(x_i - x_1)\\cdots(x_i - x_{i-1})(x_i - x_{i+1})\\cdots(x_i - x_n)}\\,dx.
\\tag{7.47}
$$

Then, for any polynomial $p$ of degree at most $2n - 1$, it follows

$$
\\int_{-1}^{1} p(x)\\,dx = \\sum_{i=1}^{n} c_i p(x_i).
$$

The next result gives the truncation error of the Gaussian quadrature.

**Theorem 7.14.** Let $f \\in C^{2n}[-1, 1]$. Then there exists $\\xi \\in (-1, 1)$ such that the $n$-point Gaussian quadrature formula satisfies

$$
\\int_{-1}^{1} f(x)\\,dx = \\sum_{k=1}^{n} c_k f(x_k) + \\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx.
$$

It can be shown that the error term in the previous theorem has the form

$$
\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!},
$$

which gives that if $f^{(2n)}$ is bounded for all $n$ with a bound independent of $n$, then the error of the Gaussian quadrature goes to 0 exponentially. Note that the error in the Newton–Cotes formulas tends to 0 only with polynomial speed if $n \\to \\infty$.

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
\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f\\left(\\frac{(b - a)t + a + b}{2}\\right)dt.
$$

**Example 7.15.** Approximate the integral $\\int_0^1 x^2 e^x\\,dx$ using the two-point Gaussian quadrature:

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx &= \\frac{1}{2}\\int_{-1}^{1}\\left(\\frac{t + 1}{2}\\right)^2 e^{(t+1)/2}\\,dt \\\\
&\\approx \\frac{1}{2}\\left(\\left(\\frac{-\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(-\\sqrt{3}/3 + 1)/2} + \\left(\\frac{\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(\\sqrt{3}/3 + 1)/2}\\right) \\\\
&= 0.7119418.
\\end{aligned}
$$

The error of this approximation is $0.0063400$. $\\quad\\square$

### Exercises

**Exercise 1.** Apply the 2-point Gaussian quadrature to the integrals given in Exercise 1 of the previous section.

<details class="reveal-solution"><summary>Show solution</summary>

**Formula:** $\\int_{-1}^1 f(x)dx \\approx f(-1/\\sqrt{3}) + f(1/\\sqrt{3})$. For a general $[a,b]$, transform first.

**$\\int_0^1 \\sin^3 x \\, dx$.** Transform $x = \\frac{t+1}{2}$, $dx = \\frac{1}{2}dt$:

$$\\int_0^1 \\sin^3 x \\, dx = \\frac{1}{2}\\int_{-1}^1 \\sin^3\\left(\\frac{t+1}{2}\\right) dt \\approx \\frac{1}{2}\\left[\\sin^3(0.2113) + \\sin^3(0.7887)\\right]$$

$$= \\frac{1}{2}[0.0094 + 0.3827] = 0.1961$$

Error: 0.0171.

</details>

**Exercise 2.** Apply the 3-, 4- and 5-point Gaussian quadrature formulas to the integrals given in Exercise 1 of the previous section.

<details class="reveal-solution"><summary>Show solution</summary>

**3-point:** $\\int_{-1}^1 f \\approx 0.5556f(-0.7746) + 0.8889f(0) + 0.5556f(0.7746)$

**4-point:** $\\int_{-1}^1 f \\approx 0.3479f(-0.8611) + 0.6521f(-0.3400) + 0.6521f(0.3400) + 0.3479f(0.8611)$

**5-point:** $\\int_{-1}^1 f \\approx 0.2369f(-0.9062) + 0.4786f(-0.5385) + 0.5689f(0) + 0.4786f(0.5385) + 0.2369f(0.9062)$

Apply to the integrals with the same $[a,b]\\to[-1,1]$ transformation. **Results for $\\int_0^1 \\sin^3 x \\, dx$:**

| Method | Approximation | Error |
|--------|---------------|-------|
| 2-point Gaussian | 0.1961 | 0.0171 |
| 3-point Gaussian | 0.1792 | 0.0003 |
| 4-point Gaussian | 0.1789 | 0.0000 |
| 5-point Gaussian | 0.1789 | ~0.0000 |

**Observation:** Gaussian quadrature converges very rapidly.

</details>
`,t=`## 7.1. Numerikus differenciálás

Ebben a szakaszban függvények deriváltjait közelítő képletek levezetésének két módszerét és az egyszerűbb közelítő képleteket ismertetjük. A derivált a függvény differenciahányadosának határértéke:

$$
f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}.
$$

Így nyilvánvalóan ha $|h|$ kicsi, akkor a differenciahányados, $\\dfrac{f(x_0 + h) - f(x_0)}{h}$ közel van a derivált értékéhez. A numerikus analízisben ennél többre van szükség: ismerni szeretnénk a közelítés hibáját. A következőkben kétféleképpen vezetjük le ugyanezt a közelítő képletet, de úgy, hogy közben a közelítés hibáját is megkapjuk.

Tegyük fel, hogy $f \\in C^3(a, b)$, és $x_0 \\in (a, b)$. Az első megközelítés alapötlete a következő: Helyettesítsük az $f$ függvényt $x_0$ egy környezetében valamilyen $L_n(x)$ Lagrange-féle közelítő polinommal. Használjuk $L'_n(x_0)$-t az $f'(x_0)$ érték közelítésére! Ezt a módszert Lagrange-módszernek nevezzük. Nézzük a legegyszerűbb esetet: Legyen $n = 1$, $x_1 = x_0 + h \\in (a, b)$ (és $x_0 \\neq x_1$), és tekintsük az $f$ függvény $x_0, x_1$ osztópontokhoz tartozó elsőfokú Lagrange-polinom közelítését:

$$
\\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\\\
&= \\frac{f(x_0)(x - x_0 - h)}{-h} + \\frac{f(x_0 + h)(x - x_0)}{h} + \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_0 - h).
\\end{aligned}
$$

Ezt differenciálva kapjuk:

$$
\\begin{aligned}
f'(x) ={}& \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f''(\\xi(x))}{2}\\bigl(2(x - x_0) - h\\bigr) \\\\
&+ \\frac{d}{dx}\\Bigl(f''(\\xi(x))\\Bigr)\\frac{(x - x_0)(x - x_0 - h)}{2}.
\\end{aligned}
\\tag{7.1}
$$

A 6.8. tétel szerint $f''(\\xi(x))$ differenciálható $x \\neq x_0, x_0 + h$-ra, de a deriváltat nem tudjuk explicit módon kiszámolni. Viszont az $x \\to x_0$ határértéket véve a (7.1) képletben kapjuk az

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi)
\\tag{7.2}
$$

összefüggést, ahol $\\xi \\in \\langle x_0, x_0 + h \\rangle$. Azaz, ha az

$$
f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}
\\tag{7.3}
$$

közelítést használjuk, a közelítés hibája $-\\dfrac{h}{2}f''(\\xi)$ alakban írható fel. A (7.3) képletet az $f$ függvény **jobb oldali elsőrendű differenciájának** nevezzük, ha $h > 0$, illetve **bal oldali elsőrendű differenciájának** nevezzük, ha $h < 0$ (mert ekkor az $x_0 + h$ pont az $x_0$-tól jobbra, ill. balra helyezkedik el). A (7.2) képlet mutatja, hogy a (7.3) közelítés hibája $h$-ban elsőrendű.

Ugyanezt az eredményt (de egy kicsit enyhébb feltételek mellett) levezethetjük a következőképpen is: Legyen $f \\in C^2(a, b)$, és tekintsük az $f$ függvény elsőrendű $x_0$-körüli Taylor-közelítését:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(\\xi(x))}{2}(x - x_0)^2.
$$

Behelyettesítve $x = x_0 + h$-t, következik, hogy

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(\\xi)}{2}h^2,
$$

azaz

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
$$

ahol $\\xi = \\xi(x_0 + h)$.

**7.1. példa.** Tekintsük az $f(x) = e^{x^2 + x}$ függvényt. $f'(x) = e^{x^2 + x}(2x + 1)$, így $f'(0) = 1$. Számítsuk ki az $f'(0)$ egy közelítő értékét jobb oldali (pozitív $h$) és bal oldali (negatív $h$) elsőrendű differencia képletet ((7.3) képlet) használva! A 7.1. táblázatban feltüntettük a derivált közelítő értékeket és a fellépő hibát különböző $h$ értékekre. A numerikus eredmények igazolják, hogy ha egy nagyságrenddel csökkentjük a lépésközt, akkor a hiba egy nagyságrenddel csökken. $\\quad\\square$

**7.1. táblázat.** Elsőrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | jobb oldali | hiba | bal oldali | hiba |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

Az előbb említett két módszer magasabbrendű (azaz pontosabb) közelítő képletek levezetésére is használható. Tekintsük az $n$-edfokú Lagrange-polinom közelítést használó módszert: legyen $f \\in C^{n+1}$, és tekintsük az

$$
f(x) = \\sum_{k=0}^{n} f(x_k)l_k(x) + \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)
\\tag{7.4}
$$

összefüggést, ahol $l_k(x)$ a (6.2) képlettel definiált $n$-edfokú Lagrange-féle alappolinom. Differenciálva (7.4)-et és az $x = x_i$ helyettesítést alkalmazva kis számolás után kapjuk

$$
f'(x_i) = \\sum_{j=0}^{n} f(x_j)l'_j(x_i) + \\frac{f^{(n+1)}(\\xi(x_i))}{(n+1)!}\\prod_{\\substack{j=0 \\\\ j \\neq i}}^{n}(x_i - x_j).
\\tag{7.5}
$$

A (7.5) összefüggést ekvidisztáns alappontokra szokás felírni, azaz feltesszük, hogy $x_j = x_0 + jh$, ahol $h > 0$. A (7.5) képletet $n+1$ alappontot használó differencia képletnek nevezzük. Belátható, hogy a (7.5) képletben szereplő hibatag $h$-ban $n$-edrendű.

Tekintsük most az $n = 2$ esetet, azaz a három pontra illeszkedő formulákat. Tekintsük az $x_0, x_0 + h, x_0 + 2h$ osztópontokat. Ekkor

$$
\\begin{aligned}
l_0(x) &= \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \\frac{(x - x_1)(x - x_2)}{2h^2}, \\\\
l_1(x) &= \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \\frac{(x - x_0)(x - x_2)}{-h^2}, \\\\
l_2(x) &= \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \\frac{(x - x_0)(x - x_1)}{2h^2},
\\end{aligned}
$$

ezért

$$
\\begin{aligned}
l'_0(x) &= \\frac{2x - x_1 - x_2}{2h^2}, \\\\
l'_1(x) &= \\frac{2x - x_0 - x_2}{-h^2}, \\\\
l'_2(x) &= \\frac{2x - x_0 - x_1}{2h^2}.
\\end{aligned}
$$

Ezt alkalmazva $x = x_0$, $x = x_0 + h$ ill. $x = x_0 + 2h$-ra, a (7.5) képletből kapjuk, hogy

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_0),
\\tag{7.6}
$$

$$
f'(x_0 + h) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0) + \\frac{1}{2}f(x_0 + 2h)\\right) - \\frac{h^2}{6}f'''(\\xi_1),
\\tag{7.7}
$$

$$
f'(x_0 + 2h) = \\frac{1}{h}\\left(\\frac{1}{2}f(x_0) - 2f(x_0 + h) + \\frac{3}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_2).
\\tag{7.8}
$$

Az $x_0 \\leftarrow x_0 - 2h$ és $h \\leftarrow -h$ helyettesítéssel a (7.8) a (7.6) alakban írható fel, (7.7) pedig az $x_0 \\leftarrow x_0 - h$ és $h \\leftarrow -h$ helyettesítéssel

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0 - h) + \\frac{1}{2}f(x_0 + h)\\right) - \\frac{h^2}{6}f'''(\\xi_1)
\\tag{7.9}
$$

alakú lesz. A (7.9) képlet egy **centrális másodrendű differencia képlet**, (7.6) pedig **jobb oldali** ill. **bal oldali másodrendű differencia**, attól függően, hogy $h$ pozitív vagy negatív.

**7.2. példa.** Az $f(x) = e^{x^2 + x}$ függvény $x = 0$ pontjában vett deriváltját közelítettük jobb oldali, bal oldali és centrális másodrendű differencia képletekkel ((7.6) és (7.9) képletek). Az eredményeket a 7.2. táblázatban adtuk meg különböző $h$-ra, amelyekből látható, hogy a képletek másodrendű hibával rendelkeznek. $\\quad\\square$

**7.2. táblázat.** Másodrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Bizonyítás nélkül közöljük az 5 pontra felírt egyoldali és centrális negyedrendű képleteket:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\\\
&- 3f(x_0 + 4h)\\Bigr) + \\frac{h^4}{5}f^{(5)}(\\xi_0),
\\end{aligned}
\\tag{7.10}
$$

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\\Bigr) \\\\
&+ \\frac{h^4}{30}f^{(5)}(\\xi_1).
\\end{aligned}
\\tag{7.11}
$$

A (7.10) egyoldali, (7.11) pedig centrális differencia képlet.

**7.3. példa.** Alkalmazzuk a (7.10) és (7.11) képleteket az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban! A 7.3. táblázatban láthatók a numerikus eredmények. $\\quad\\square$

**7.3. táblázat.** Negyedrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Magasabbrendű deriváltak közelítésére a Lagrange-módszernél kényelmesebben használható a Taylor-módszer. Legyen $f \\in C^4$, és tekintsük az $f$ függvény $x_0$ körüli harmadrendű Taylor-képletét:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(x_0)}{2}(x - x_0)^2 + \\frac{f'''(x_0)}{6}(x - x_0)^3 + \\frac{f^{(4)}(\\xi)}{24}(x - x_0)^4.
$$

Ha ebbe $x = x_0 - h$-t és $x = x_0 + h$-t helyettesítünk, akkor az

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \\frac{f''(x_0)}{2}h^2 - \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_1)}{24}h^4
$$

és

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(x_0)}{2}h^2 + \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_2)}{24}h^4
$$

összefüggéseket kapjuk. Ezt a két egyenletet összeadva

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^4
$$

adódik, amiből

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2.
$$

Ebből látszik, hogy az

$$
f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
$$

közelítő képlet $h^2$ nagyságrendű hibával rendelkezik. Az $\\dfrac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2$ hibatagot egyszerűbb alakra hozhatjuk. A feltételek szerint $f^{(4)}$ folytonos, ezért a 2.2. tétel szerint valamely $\\xi_1$ és $\\xi_2$ közötti $\\xi$ pontban

$$
f^{(4)}(\\xi) = \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{2}.
$$

Ezért

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi)}{12}h^2.
\\tag{7.12}
$$

**7.4. példa.** Számítsuk ki az $f(x) = e^{x^2 + x}$ függvény második deriváltjának közelítő értékét $x = 0$-ban! A 7.4. táblázatban láthatók a numerikus eredmények. $\\quad\\square$

**7.4. táblázat.** Másodrendű derivált közelítése, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | közelítés | hiba |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

A numerikus differenciálás egy instabil feladat. Ennek igazolására tekintsünk egy $f(x)$ függvényt és annak egy

$$
g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)
$$

perturbációját. Ha $f$ helyett a $g$ függvény numerikus deriváltját számoljuk ki, akkor a differencia képletekben használt függvényértékek nagy $n$ esetén csak kicsit változnak, a derivált értéke viszont jelentősen megváltozik, hiszen $g'(x) = f'(x) + n\\cos(n^2 x)$.

Vizsgáljuk most a kerekítési hiba hatását a numerikus differenciálási képletekre. Tekintsük pl. a legegyszerűbb numerikus differenciálási képletet, a (7.2) formulát. Ebben $f(x_0)$ és $f(x_0 + h)$ pontos értékei helyett $f_0$ ill. $f_1$ közelítő értékekkel számolunk, ahol

$$
f(x_0) = f_0 + e_0 \\quad\\text{és}\\quad f(x_0 + h) = f_1 + e_1.
$$

Ekkor

$$
f'(x_0) \\approx \\frac{f_1 - f_0}{h},
$$

és az elkövetett hiba

$$
\\begin{aligned}
f'(x_0) - \\frac{f_1 - f_0}{h} &= f'(x_0) - \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{f_1 - f_0}{h} \\\\
&= -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}.
\\end{aligned}
\\tag{7.13}
$$

A (7.13) összefüggésből látszik, hogy a tényleges hiba két részből adódik. Az egyik a képlethiba, a másik pedig a kerekítési hiba. Ha a lépésköz kicsi, akkor a képlethiba kicsi lesz, viszont a kerekítési hiba tart a végtelenbe, ha $h \\to 0$.

**7.5. példa.** Tekintsük az $f(x) = e^x$ függvényt. Számítsuk ki $f'(1)$ közelítését elsőrendű jobb oldali differencia képlettel. Hogy a kerekítési hibák hatását vizsgáljuk, a számításokat 6- illetve 4-jegyű aritmetikát használva végeztük el. A 7.5. táblázatból látható, hogy 4-jegyű aritmetika használata esetén a lépéshossz 0.01-ről 0.001-re csökkentésekor az elkövetett hiba növekszik. $\\quad\\square$

**7.5. táblázat.** Kerekítési hibák hatása, $f(x) = e^x$, $x_0 = 1$

| | 6-jegyű aritmetikával | | 4-jegyű aritmetikával | |
|---|---|---|---|---|
| $h$ | differencia | hiba | differencia | hiba |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

Az itt megismert módszereket könnyen átfogalmazhatjuk többváltozós függvények parciális deriváltjai közelítésére. A következő egyoldali ill. centrális közelítő képletek levezetését az olvasóra hagyjuk.

$$
\\frac{\\partial f(x_0, y_0)}{\\partial x} \\approx \\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\\tag{7.14}
$$

$$
\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\\tag{7.15}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\\tag{7.16}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial y^2} \\approx \\frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\\tag{7.17}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x\\,\\partial y} \\approx \\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\\tag{7.18}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\\tag{7.19}
$$

### Feladatok

**1. Feladat.** Számítsa ki $f'(x_0)$ közelítő értékét elsőrendű jobb és bal oldali differencia képletek segítségével a $h = 0.1$ és $0.01$ lépésközt használva, ha
(a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
(b) $f(x) = e^x \\sin x$, $x_0 = 0$,
(c) $f(x) = \\cos x^2$, $x_0 = 1$,
(d) $f(x) = x \\ln x$, $x_0 = 1$.

<details class="reveal-solution"><summary>Megoldás</summary>

**Function (worked example):** $f(x) = e^{x^2+x}$, $x_0 = 0$, exact $f'(0) = 1$

**Forward difference:** $f'(0) \\approx \\frac{f(h) - f(0)}{h}$

**Backward difference:** $f'(0) \\approx \\frac{f(0) - f(-h)}{h}$

| h | Forward | Error | Backward | Error |
|---|---------|-------|----------|-------|
| 0.1 | 1.1628 | 0.1628 | 0.8607 | 0.1393 |
| 0.01 | 1.0151 | 0.0151 | 0.9851 | 0.0149 |
| 0.001 | 1.0015 | 0.0015 | 0.9985 | 0.0015 |

**Observation:** Error decreases linearly with $h$ (first-order method). The same procedure applies to each of the functions (a)–(d).

</details>

**2. Feladat.** Ismételje meg az előző feladatot másodrendű differencia képleteket használva!

<details class="reveal-solution"><summary>Megoldás</summary>

**Formula:** $f'(x_0) \\approx \\frac{f(x_0+h) - f(x_0-h)}{2h}$

**Error:** $-\\frac{h^2}{6}f'''(\\xi)$

For the worked example $f(x) = e^{x^2+x}$ at $x_0 = 0$:

$f'''(x) = e^{x^2+x}(8x^3 + 12x^2 + 12x + 6)$, so $f'''(0) = 6$.

**Theoretical error:** $\\frac{h^2}{6} \\cdot 6 = h^2$

| h | Approximation | Error | Error/h² |
|---|---------------|-------|----------|
| 0.1 | 1.00167 | 0.00167 | 0.167 |
| 0.01 | 1.00002 | 0.00002 | 0.200 |
| 0.001 | 1.00000 | ~0.00000 | ~0.17 |

**Observation:** Error is $O(h^2)$, much better than first-order.

</details>

**3. Feladat.** Számítsa ki $f''(x_0)$ közelítő értékét az 1. feladatban felsorolt függvényekre!

<details class="reveal-solution"><summary>Megoldás</summary>

**Formula:** $f''(x_0) \\approx \\frac{f(x_0+h) - 2f(x_0) + f(x_0-h)}{h^2}$

**Error:** $-\\frac{h^2}{12}f^{(4)}(\\xi)$

For the worked example $f(x) = e^{x^2+x}$ at $x_0 = 0$:

Exact: $f''(0) = e^0(4\\cdot 0^2 + 4\\cdot 0 + 2) + e^0(2\\cdot 0 + 1)^2 = 2 + 1 = 3$

| h | Approximation | Error |
|---|---------------|-------|
| 0.1 | 3.0050 | 0.0050 |
| 0.01 | 3.0001 | 0.0001 |
| 0.001 | 3.0000 | ~0.0000 |

</details>

**4. Feladat.** Vezesse le a (7.6) és (7.9) közelítő képleteket Taylor-módszerrel!

**5. Feladat.** Vezesse le a (7.10) és (7.11) közelítő képleteket!

<details class="reveal-solution"><summary>Megoldás</summary>

**Derive the three-point formula.** Given points $x_0$, $x_1 = x_0 + h$, $x_2 = x_0 + 2h$, find a formula for $f'(x_0)$ using the Lagrange method:

$L_2(x) = f(x_0)l_0(x) + f(x_1)l_1(x) + f(x_2)l_2(x)$

where
$l_0(x) = \\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)} = \\frac{(x-x_0-h)(x-x_0-2h)}{2h^2}$,
$l_1(x) = \\frac{(x-x_0)(x-x_0-2h)}{-h^2}$,
$l_2(x) = \\frac{(x-x_0)(x-x_0-h)}{2h^2}$.

Differentiate at $x = x_0$:

$l'_0(x_0) = \\frac{-3h}{2h^2} = -\\frac{3}{2h}$, $\\quad l'_1(x_0) = \\frac{-2h}{-h^2} = \\frac{2}{h}$, $\\quad l'_2(x_0) = \\frac{h}{2h^2} = \\frac{1}{2h}$.

**Formula:**
$$f'(x_0) \\approx -\\frac{3}{2h}f(x_0) + \\frac{2}{h}f(x_0+h) - \\frac{1}{2h}f(x_0+2h) = \\frac{-3f(x_0) + 4f(x_0+h) - f(x_0+2h)}{2h}$$

**Error:** $\\frac{h^2}{3}f'''(\\xi)$ (second-order).

</details>

**6. Feladat.** Vezesse le a következő közelítő képleteket:
$$
f'''(x_0) \\approx \\frac{1}{2h^3}\\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\\Bigr),
$$
$$
f^{(4)}(x_0) \\approx \\frac{1}{h^4}\\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\\Bigr)
$$

<details class="reveal-solution"><summary>Megoldás</summary>

**Optimal step size (related discussion).** Differentiation formulas balance truncation error against rounding error. For the centered first-derivative formula,

**Total error:** $E(h) = \\frac{h^2}{6}|f'''(\\xi)| + \\frac{2\\varepsilon}{h}$,

where $\\varepsilon$ is the machine epsilon (rounding-error bound). Minimizing, differentiate w.r.t. $h$:

$\\frac{dE}{dh} = \\frac{h}{3}|f'''| - \\frac{2\\varepsilon}{h^2} = 0 \\;\\Rightarrow\\; h^3 = \\frac{6\\varepsilon}{|f'''|}$.

**Optimal $h$:**
$$h_{opt} = \\left(\\frac{6\\varepsilon}{|f'''|}\\right)^{1/3}$$

For double precision ($\\varepsilon \\approx 10^{-16}$) and $|f'''| \\approx 1$: $h_{opt} \\approx (6 \\times 10^{-16})^{1/3} \\approx 10^{-5}$.

</details>

**7. Feladat.** Vezesse le a (7.14)–(7.19) közelítéseket
(a) egyváltozós függvényekre vonatkozó közelítő deriválási képletek,
(b) kétváltozós Lagrange-módszer,
(c) kétváltozós Taylor-módszer
segítségével! Határozza meg a képlethiba rendjét!
`,i=`## 7.3. Newton–Cotes-formulák

Legyen $f \\in C(a, b)$. A határozott integrált is, a deriválthoz hasonlóan, határérték segítségével definiáljuk. Riemann-összeg segítségével ez a következő alakban adható meg: vegyük az $[a, b]$ intervallum egy $a = x_0 < x_1 < \\cdots < x_n = b$ beosztását, és minden $[x_{i-1}, x_i]$ részintervallumból válasszunk ki egy $\\xi_i$ pontot. Ekkor az $\\int_a^b f(x)\\,dx$ integrál a $\\sum_{i=1}^{n} f(\\xi_i)(x_i - x_{i-1})$ alakú Riemann-féle közelítő összeg határértéke, ha a beosztás normája, azaz $\\max\\{x_i - x_{i-1} : i = 1, \\ldots, n\\}$ nullához tart. Egy ilyen Riemann-összeg például

$$
\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{n}\\left(f\\left(\\frac{x_0 + x_1}{2}\\right) + f\\left(\\frac{x_1 + x_2}{2}\\right) + \\cdots + f\\left(\\frac{x_{n-1} + x_n}{2}\\right)\\right),
\\tag{7.26}
$$

ahol $x_i = a + i(b - a)/n$, $i = 0, 1, \\ldots, n$. Ezt a közelítő képletet **érintőformulának** nevezzük. (Az érintőformulával kapcsolatban lásd az 5. és 6. feladatokat!)

A numerikus differenciáláshoz hasonlóan integrál közelítő képletek levezetésére is alkalmazhatjuk a Lagrange-módszert: Az $[a, b]$ intervallumon vegyünk (többnyire ekvidisztáns) osztópontokat és legyen $L_n$ a választott alappontokhoz és az $f$ függvényhez tartozó interpolációs polinom. Tekintsük a $\\int_a^b L_n(x)\\,dx$-et mint a $\\int_a^b f(x)\\,dx$ közelítését. Feltéve, hogy $f \\in C^{n+1}(a, b)$, a közelítés hibáját megkapjuk a 6.5. tétel felhasználásával:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\sum_{k=0}^{n} f(x_k)\\int_a^b l_k(x)\\,dx \\\\
&+ \\int_a^b \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)\\,dx,
\\end{aligned}
\\tag{7.27}
$$

ahol $l_k(x)$ a (6.2) egyenlettel definiált (az alappontoktól függő) $n$-edfokú polinom. Ezzel egy

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{k=0}^{n} c_k f(x_k)
\\tag{7.28}
$$

alakú integrál közelítő képletet kaptunk, ahol a $c_k$ súlyokat a

$$
c_k = \\int_a^b l_k(x)\\,dx
\\tag{7.29}
$$

integrálok adják. A (7.28) alakú közelítő képleteket **kvadratúra képleteknek** nevezzük, azokat a kvadratúra képleteket pedig, ahol a $c_k$ súlyokat a (7.29) integrálok adják, **Newton–Cotes-formuláknak** hívjuk. Ha az alappontokhoz az $a$ és $b$ pontok is hozzá tartoznak, akkor a (7.28)–(7.29) képletet **zárt Newton–Cotes-formuláknak**, ha az összes alappont az $(a, b)$ nyílt intervallumból van, akkor **nyílt Newton–Cotes-formuláknak** nevezzük. Egy kvadratúra formula **pontossági foka** $n$, ha a képlet az integrál pontos értékét adja vissza minden legfeljebb $n$-edfokú polinomra, de van olyan $n+1$-edfokú polinom, amelyre a képlet nem egyezik meg az integrál pontos értékével. Az $n + 1$ pontra felírt Newton–Cotes-formulák pontossági rendje tehát legalább $n$, hiszen az $n$-edfokú polinomot interpoláló Lagrange-polinom hibája 0. Megmutatható azonban, hogy páros $n$-re a Newton–Cotes-formula $(n + 1)$-edrendű polinomokra is pontos értéket ad vissza.

Vizsgáljuk meg $n = 1$-re a zárt Newton–Cotes-képletet. Legyen $x_0 = a$, $x_1 = b$, $h = b - a$. Ekkor

$$
L_1(x) = f(x_0)\\frac{x - x_1}{x_0 - x_1} + f(x_1)\\frac{x - x_0}{x_1 - x_0},
$$

így

$$
\\begin{aligned}
\\int_{x_0}^{x_1} L_1(x)\\,dx &= f(x_0)\\int_{x_0}^{x_1} \\frac{x - x_1}{x_0 - x_1}\\,dx + f(x_1)\\int_{x_0}^{x_1} \\frac{x - x_0}{x_1 - x_0}\\,dx \\\\
&= \\left[f(x_0)\\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\\frac{(x - x_0)^2}{2(x_1 - x_0)}\\right]_{x_0}^{x_1} \\\\
&= \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr).
\\end{aligned}
$$

Ennek a formulának a hibáját (7.27) szerint az

$$
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) = \\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx
$$

képlet adja. A hibatag átalakításához használjuk, hogy $(x - x_0)(x - x_1) < 0$, ha $x \\in (x_0, x_1)$, ezért alkalmazható a 2.6. tétel. Létezik tehát olyan $\\eta \\in (x_0, x_1)$ konstans, hogy

$$
\\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx = \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)(x - x_1)\\,dx,
$$

tehát

$$
\\begin{aligned}
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) &= \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\\,dx \\\\
&= \\frac{f''(\\eta)}{2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_1} \\\\
&= -\\frac{h^3}{12}f''(\\eta).
\\end{aligned}
$$

Kaptuk tehát az ún. **elemi trapézformulát**:

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\bigl(f(a) + f(b)\\bigr) - \\frac{h^3}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.30}
$$

A képlet a nevét a geometriai jelentéséből kapta: a $\\frac{h}{2}\\bigl(f(a) + f(b)\\bigr)$ kifejezés az $f$ függvény grafikonjának $a$ és $b$ $x$-koordinátájú pontjához tartozó szelő alatti területet, azaz a trapéz területét adja vissza.

Az elemi trapéz formula akkor alkalmazható sikeresen, ha az intervallum hossza kicsi. Ha az intervallum hossza nem kicsi, akkor osszuk fel az $[a, b]$ intervallumot $n$ egyenlő hosszú részintervallumra az $x_i$ ($i = 0, 1, \\ldots, n$) osztópontokkal, ahol $x_i = a + ih$, $h = (b - a)/n$, és minden részintervallumra alkalmazzuk az elemi trapézformulát:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx &= \\sum_{i=1}^{n}\\int_{x_{i-1}}^{x_i} f(x)\\,dx \\\\
&= \\sum_{i=1}^{n}\\frac{h}{2}\\bigl(f(x_{i-1}) + f(x_i)\\bigr) - \\frac{h^3}{12}\\sum_{i=1}^{n} f''(\\xi_i) \\\\
&= \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{nh^3}{12}\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i).
\\end{aligned}
$$

Feltéve, hogy $f \\in C^2(a, b)$, a 2.2. tétel szerint az $\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i)$ átlagérték helyettesíthető egy $f''(\\xi)$ alakú függvényértékkel. Ezért, használva még a $hn = b - a$ összefüggést,

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{(b - a)h^2}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.31}
$$

Ezt a képletet **összetett trapézformulának** nevezzük.

**7.7. példa.** Számítsuk ki az $\\int_0^1 x^2 e^x\\,dx$ integrál közelítő értékét a trapézformulával $h = 1$ (elemi trapézformula), $h = 0.5$ és $h = 0.25$ lépésközt használva! Könnyen ellenőrizhető, hogy a pontos integrál $\\int_0^1 x^2 e^x\\,dx = e - 2 = 0.7182818$. Az első esetben

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{1}{2}(0 + e) = 1.3591409.
$$

A hiba ekkor $0.6408591$. Ha $h = 0.5$-re alkalmazzuk az összetett trapézformulát, akkor

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{2}(0 + 2 \\cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Ennek hibája $0.1673788$. Végül $h = 0.25$-re

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{2}(0 + 2 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 2 \\cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

aminek a hibája $0.0423145$. Látható, hogy felezve a lépésközt a hiba körülbelül a negyedrészére csökken, azaz a hiba $h$-ban másodrendű. $\\quad\\square$

Számítsuk most ki a (7.27) képletet $n = 2$-re, ekvidisztáns osztópontokat használva, azaz $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\\begin{aligned}
\\int_{x_0}^{x_2} L_2(x)\\,dx ={}& f(x_0)\\int_{x_0}^{x_2} \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\\,dx + f(x_1)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\\,dx \\\\
&+ f(x_2)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\\,dx - \\frac{f(x_1)}{h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\\,dx \\\\
&+ \\frac{f(x_2)}{2h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\left[\\frac{(x - x_2)^3}{3} + h\\frac{(x - x_2)^2}{2}\\right]_{x_0}^{x_2} - \\frac{f(x_1)}{h^2}\\left[\\frac{(x - x_0)^3}{3} - 2h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
&+ \\frac{f(x_2)}{2h^2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
={}& \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr).
\\end{aligned}
$$

A közelítés képlethibája

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx.
$$

A különbség az előző esethez képest az, hogy most az $(x - x_0)(x - x_1)(x - x_2)$ szorzat különböző előjelű az $(x_0, x_1)$ és az $(x_1, x_2)$ intervallumokon, tehát nem alkalmazható a 2.6. tétel az $(x_0, x_2)$ intervallumon. Másképp járunk tehát el. Legyen

$$
\\begin{aligned}
p(x) &\\equiv \\int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\\,dt \\\\
&= \\int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\\,dt \\\\
&= \\left[\\frac{(t - x_1)^4}{4} - h^2\\frac{(t - x_1)^2}{2}\\right]_{x_0}^{x} \\\\
&= \\frac{(x - x_1)^4}{4} - \\frac{h^2(x - x_1)^2}{2} + \\frac{h^4}{4} \\\\
&= \\frac{1}{4}\\bigl((x - x_1)^2 - h^2\\bigr)^2.
\\end{aligned}
$$

Ekkor $p(x_0) = p(x_2) = 0$, így parciális integrálással

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\int_{x_0}^{x_2} \\frac{d}{dx}\\frac{f'''(\\xi(x))}{6}\\,p(x)\\,dx.
$$

$p$ nemnegatív függvény, ezért a 2.6. és a 6.8. tételeket alkalmazva kapjuk, hogy

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\frac{f^{(4)}(\\eta)}{24}\\int_{x_0}^{x_2} p(x)\\,dx = -\\frac{h^5}{90}f^{(4)}(\\eta).
$$

Beláttuk tehát az

$$
\\int_{x_0}^{x_2} f(x)\\,dx = \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr) - \\frac{h^5}{90}f^{(4)}(\\eta), \\qquad \\eta \\in (x_0, x_2)
\\tag{7.32}
$$

képletet, az ún. **elemi Simpson-formulát**.

A hibatag képlete mutatja, hogy a Simpson-formula meglepő módon harmadrendű polinomokra is az integrál pontos értékét adja vissza, mivel ekkor $f^{(4)}$ azonosan nulla. Másrészt a várt negyedrendű hiba helyett a képlet eggyel jobb, ötödrendű hibával rendelkezik. Ez a jobb hibarend megmutatható minden páros $n$-re felírt Newton–Cotes-képletnél.

Az összetett trapézformulához hasonlóan vezethető le az **összetett Simpson-formula**: Páros sok egyenlő részre, $2n$ részre osztjuk az $[a, b]$ intervallumot, azaz $h = (b - a)/2n$. Ekkor

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right) \\\\
&- \\frac{(b - a)h^4}{180}f^{(4)}(\\xi), \\qquad \\xi \\in (a, b).
\\end{aligned}
\\tag{7.33}
$$

**7.8. példa.** Számítsuk ki az $\\int_0^1 x^2 e^x\\,dx$ integrál közelítő értékét a Simpson-formulával $h = 0.5$ (elemi Simpson-formula), $h = 0.25$ és $h = 0.125$ lépésközt használva! Az első esetben

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{3}(0 + 4 \\cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

A hiba ekkor $0.0095520$. Ha $h = 0.25$-re alkalmazzuk az összetett Simpson-formulát, akkor

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{3}(0 + 4 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 4 \\cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Ennek hibája $0.0006264$. Végül $h = 0.125$-re

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx \\approx{}& \\frac{0.125}{3}\\Bigl(0 + 4 \\cdot 0.125^2 e^{0.125} + 2 \\cdot 0.25^2 e^{0.25} + 4 \\cdot 0.375^2 e^{0.375} + 2 \\cdot 0.5^2 e^{0.5} \\\\
&+ 4 \\cdot 0.625^2 e^{0.625} + 2 \\cdot 0.75^2 e^{0.75} + 4 \\cdot 0.875^2 e^{0.875} + e\\Bigr) = 0.7183215,
\\end{aligned}
$$

aminek a hibája $0.0000396$. $\\quad\\square$

Most bizonyítás nélkül felsorolunk néhány egyéb zárt elemi Newton–Cotes-formulát.

**Simpson $\\frac{3}{8}$-ados formula:**

$$
\\int_{x_0}^{x_3} f(x)\\,dx = \\frac{3h}{8}\\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\\bigr) - \\frac{3h^5}{80}f^{(4)}(\\xi)
\\tag{7.34}
$$

**$n = 4$:**

$$
\\int_{x_0}^{x_4} f(x)\\,dx = \\frac{2h}{45}\\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\\bigr) - \\frac{8h^7}{945}f^{(6)}(\\xi)
\\tag{7.35}
$$

Végül levezetés és bizonyítás nélkül felsoroljuk az első néhány nyílt Newton–Cotes-formulát:

$$
\\int_{x_{-1}}^{x_1} f(x)\\,dx = 2hf(x_0) + \\frac{h^3}{3}f''(\\xi),
\\tag{7.36}
$$

$$
\\int_{x_{-1}}^{x_2} f(x)\\,dx = \\frac{3h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) + \\frac{3h^3}{4}f''(\\xi),
\\tag{7.37}
$$

$$
\\int_{x_{-1}}^{x_3} f(x)\\,dx = \\frac{4h}{3}\\bigl(2f(x_0) - f(x_1) + 2f(x_2)\\bigr) + \\frac{14h^5}{45}f^{(4)}(\\xi),
\\tag{7.38}
$$

$$
\\int_{x_{-1}}^{x_4} f(x)\\,dx = \\frac{5h}{24}\\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\\bigr) + \\frac{95h^5}{144}f^{(4)}(\\xi).
\\tag{7.39}
$$

Zárjuk ezt a szakaszt a numerikus integrálás stabilitásának vizsgálatával.

**7.9. tétel.** Legyen $\\sum_{i=1}^{n} c_i f(x_i)$ egy olyan kvadratúra formula, amely pontos a konstans függvényekre és minden $c_i$ együttható pozitív. Legyen $y_i$ közelítése a pontos $f(x_i)$ függvényértékeknek, és tegyük fel, hogy $|y_i - f(x_i)| \\leq \\varepsilon$. Ekkor

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\varepsilon(b - a).
$$

*Bizonyítás.* A feltétel szerint $(b - a) = \\int_a^b 1\\,dx = \\sum_{i=1}^{n} c_i$, ezért

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\sum_{i=1}^{n} c_i |f(x_i) - y_i| \\leq \\varepsilon\\sum_{i=1}^{n} c_i = \\varepsilon(b - a). \\qquad\\square
$$

Megjegyezzük, hogy az összes ebben a fejezetben ismertetendő kvadratúra képlet pontos a konstans függvényekre, és a legtöbb pozitív súlyokat használ. Ezek a módszerek tehát numerikusan stabilak a függvény kerekítési hibájára nézve.

### Feladatok

**1. Feladat.** Számítsa ki a következő integrálok közelítő értékét a trapézformula segítségével $h = 0.5, 0.25, 0.125$ lépésközt használva:
(a) $\\int_0^1 \\sin^3 x\\,dx$,
(b) $\\int_1^2 \\ln(x + 1)\\,dx$,
(c) $\\int_1^2 e^{1/x}\\,dx$.

<details class="reveal-solution"><summary>Megoldás</summary>

**(a) $\\int_0^1 \\sin^3 x \\, dx$**

Exact: $\\int_0^1 \\sin^3 x \\, dx = \\int_0^1 \\sin x(1-\\cos^2 x) \\, dx = [-\\cos x + \\frac{\\cos^3 x}{3}]_0^1 = 0.178940$

**h = 0.5 (n = 2):** $x_0 = 0, x_1 = 0.5, x_2 = 1$

$T(0.5) = \\frac{0.5}{2}(\\sin^3(0) + 2\\sin^3(0.5) + \\sin^3(1)) = 0.25(0 + 2(0.1179) + 0.5958) = 0.2079$, error 0.0290.

**h = 0.25 (n = 4):**
$T(0.25) = \\frac{0.25}{2}(\\sin^3(0) + 2[\\sin^3(0.25) + \\sin^3(0.5) + \\sin^3(0.75)] + \\sin^3(1)) = 0.1864$, error 0.0075.

**h = 0.125 (n = 8):** $T(0.125) \\approx 0.1808$, error 0.0019.

**Observation:** Error decreases by factor ~4 when $h$ is halved ($O(h^2)$).

**(b) $\\int_1^2 \\ln(x+1) \\, dx$**

Exact: $[(x+1)\\ln(x+1) - x]_1^2 = 3\\ln 3 - 2\\ln 2 - 1 = 0.909543$

**h = 0.5:** $x_0 = 1, x_1 = 1.5, x_2 = 2$

$T(0.5) = \\frac{0.5}{2}(\\ln 2 + 2\\ln 2.5 + \\ln 3) = 0.25(0.6931 + 2(0.9163) + 1.0986) = 0.9111$, error 0.0016.

**(c) $\\int_1^2 e^{1/x} \\, dx$** requires numerical evaluation of the function values; apply the same trapezoidal formula.

</details>

**2. Feladat.** Ismételje meg az 1. feladatot a Simpson-formulát használva!

<details class="reveal-solution"><summary>Megoldás</summary>

**(a) $\\int_0^1 \\sin^3 x \\, dx$**

**h = 0.5 (n = 2, one Simpson panel):**
$S(0.5) = \\frac{0.5}{3}(\\sin^3(0) + 4\\sin^3(0.5) + \\sin^3(1)) = \\frac{0.5}{3}(0 + 4(0.1179) + 0.5958) = 0.1780$, error 0.0009 (much better than trapezoidal).

**h = 0.25 (n = 4, two panels):**
$S(0.25) = \\frac{0.25}{3}(\\sin^3(0) + 4\\sin^3(0.25) + 2\\sin^3(0.5) + 4\\sin^3(0.75) + \\sin^3(1)) = 0.1790$, error 0.0001.

**Observation:** Simpson's rule is much more accurate than trapezoidal ($O(h^4)$ vs $O(h^2)$).

</details>

**3. Feladat.** Ismételje meg az 1. feladatot a (7.34)–(7.35) formulákat használva!

<details class="reveal-solution"><summary>Megoldás</summary>

**Using Simpson's 3/8 rule:**
$$\\int_{x_0}^{x_3} f(x)dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$$

**(a) $\\int_0^1 \\sin^3 x \\, dx$ with $h = 1/3$:** $x_0 = 0, x_1 = 1/3, x_2 = 2/3, x_3 = 1$

$S_{3/8} = \\frac{3(1/3)}{8}(\\sin^3(0) + 3\\sin^3(1/3) + 3\\sin^3(2/3) + \\sin^3(1)) = \\frac{1}{8}(1.3261) = 0.1658$, error 0.0131.

**Using Boole's rule:**
$$\\int_{x_0}^{x_4} f(x)dx \\approx \\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$$

For $h = 0.25$ on $[0,1]$: $B = \\frac{2(0.25)}{45}(0 + 32(0.0154) + 12(0.1179) + 32(0.3507) + 7(0.5958)) = 0.1922$, error 0.0133.

</details>

**4. Feladat.** Ismételje meg az 1. feladatot a (7.36)–(7.39) formulákat használva!

<details class="reveal-solution"><summary>Megoldás</summary>

**Using the open midpoint formula:**
$$\\int_{x_{-1}}^{x_1} f(x)dx \\approx 2hf(x_0)$$

For $\\int_0^1 \\sin^3 x \\, dx$ with $h = 0.5$, midpoint $x_0 = 0.5$:

$M = 2(0.5)\\sin^3(0.5) = 1 \\times 0.1179 = 0.1179$, error 0.0610 (not as good as the closed formulas).

</details>

**5. Feladat.** Mutassa meg, hogy a (7.26) érintőformula az $[x_i, x_{i+1}]$ intervallumok felezőpontjához húzott érintő alatti területek összegét adja vissza!

<details class="reveal-solution"><summary>Megoldás</summary>

On $[x_i, x_{i+1}]$, the midpoint is $m_i = \\frac{x_i + x_{i+1}}{2}$. The tangent line at the midpoint is $y = f(m_i) + f'(m_i)(x - m_i)$.

Area under the tangent:
$$\\int_{x_i}^{x_{i+1}} [f(m_i) + f'(m_i)(x - m_i)] dx = f(m_i)h + f'(m_i)\\left[\\frac{(x-m_i)^2}{2}\\right]_{x_i}^{x_{i+1}}$$

Since $x_{i+1} - m_i = h/2$ and $x_i - m_i = -h/2$:
$$= f(m_i)h + f'(m_i)\\left(\\frac{h^2/4}{2} - \\frac{h^2/4}{2}\\right) = f(m_i)h$$

So the area under each tangent equals $h f(m_i)$, the midpoint-rule contribution. $\\square$

</details>

**6. Feladat.** Mutassa meg, hogy az érintőformula a Newton–Cotes-formulák egyik speciális esete, és vezesse le az érintőformula hibatagját!

<details class="reveal-solution"><summary>Megoldás</summary>

Newton–Cotes with $n = 0$ (one point) at the midpoint uses the Lagrange basis $l_0(x) = 1$:
$$\\int_{-h}^{h} f(x)dx \\approx \\int_{-h}^{h} f(0) \\cdot 1 \\, dx = 2hf(0)$$

which is the midpoint rule. **Error derivation** via Taylor expansion around the midpoint:
$$f(x) = f(0) + f'(0)x + \\frac{f''(\\xi)}{2}x^2$$
$$\\int_{-h}^{h} f(x)dx = 2hf(0) + 0 + \\frac{f''(\\xi)}{2}\\int_{-h}^{h} x^2 dx = 2hf(0) + \\frac{f''(\\xi)}{2}\\cdot\\frac{2h^3}{3}$$

**Error:** $\\frac{h^3}{3}f''(\\xi)$. $\\square$

</details>

**7. Feladat.** Vezesse le a (7.34)–(7.35) formulákat (a hibatag alakja nélkül)!

<details class="reveal-solution"><summary>Megoldás</summary>

**Simpson's 3/8 rule ($n = 3$):** integrate the Lagrange polynomial through 4 equally spaced points (spacing $h$). Changing variable to $t = (x - x_0)/h$ and integrating from 0 to 3,
$$\\int_{x_0}^{x_3} L_3(x)dx = \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$$

**Boole's rule ($n = 4$):** integrate the Lagrange polynomial through 5 points,
$$\\int_{x_0}^{x_4} L_4(x)dx = \\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$$

</details>

**8. Feladat.** Vezesse le a (7.36)–(7.39) formulákat (a hibatag alakja nélkül)!

<details class="reveal-solution"><summary>Megoldás</summary>

The open Newton–Cotes formulas are obtained by the same approach as the closed ones, integrating the Lagrange interpolating polynomial built on the interior nodes only (the endpoints are excluded), again with the substitution $t = (x - x_0)/h$.

</details>

**9. Feladat.** Vezesse le a Simpson-formula képletét a trapézformulából Richardson-extrapolációval!

<details class="reveal-solution"><summary>Megoldás</summary>

The trapezoidal value $T(h)$ has an error expansion $c_2 h^2 + c_4 h^4 + \\cdots$. One Richardson step eliminates the $h^2$ term:

$R_1(h) = T(h) + \\frac{T(h) - T(2h)}{3}$ → $O(h^4)$,

and this is exactly **Simpson's rule**. A further step,

$R_2(h) = R_1(h) + \\frac{R_1(h) - R_1(2h)}{15}$ → $O(h^6)$,

gives **Boole's rule**.

</details>
`,r=`## 7.4. Gauss-féle kvadratúra formulák

Az előző szakaszban láttuk, hogy a Newton–Cotes-formulák a pontos integrált adják vissza bizonyos fokszámú polinomok esetén. Ebben a szakaszban olyan kvadratúra képletek levezetésével foglalkozunk, amelyek hasonló tulajdonságúak. Tekintsük az

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} c_i f(x_i)
$$

általános kvadratúra képletet. Teljesül a következő állítás:

**7.10. tétel.** Egy

$$
Q(f) \\equiv \\sum_{i=1}^{n} c_i f(x_i)
\\tag{7.40}
$$

kvadratúra formula akkor és csak akkor pontos egy tetszőleges $p(x) = a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0$ legfeljebb $m$-edfokú polinomra, ha pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re.

*Bizonyítás.* Abból, hogy $Q$ pontos minden legfeljebb $m$-edfokú polinomra, természetesen következik, hogy pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re.

Most tegyük fel, hogy $Q$ pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re. Ekkor az integrál és a $Q$ kvadratúra formula linearitásából következik

$$
\\begin{aligned}
\\int_a^b a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0\\,dx &= a_m\\int_a^b x^m\\,dx + a_{m-1}\\int_a^b x^{m-1}\\,dx + \\cdots + a_0\\int_a^b 1\\,dx \\\\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \\cdots + a_0 Q(1) \\\\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0). \\qquad\\square
\\end{aligned}
$$

A (7.40) képlettel definiált $Q$ kvadratúra formulában $2n$ darab paraméter szerepel, a $c_i, x_i$ számok ($i = 1, 2, \\ldots, n$). Azt várhatjuk tehát az előző tétel alapján, hogy egy ilyen kvadratúra képlet legfeljebb $(2n - 1)$-edfokú polinomokra adjon vissza pontos értéket, hiszen azokban is $2n$ együttható van. A 7.10. tétel szerint ekkor a $Q$ kvadratúra formula akkor és csak akkor pontos a legfeljebb $(2n - 1)$-edfokú polinomokra, ha teljesül a következő $2n$ egyenlet:

$$
\\begin{aligned}
\\int_a^b 1\\,dx &= \\sum_{i=1}^{n} c_i \\\\
\\int_a^b x\\,dx &= \\sum_{i=1}^{n} c_i x_i \\\\
\\int_a^b x^2\\,dx &= \\sum_{i=1}^{n} c_i x_i^2 \\\\
&\\;\\;\\vdots \\\\
\\int_a^b x^{2n-1}\\,dx &= \\sum_{i=1}^{n} c_i x_i^{2n-1}
\\end{aligned}
\\tag{7.41}
$$

Azt a (7.40) alakú kvadratúra formulát, amelyet a (7.41) egyenletrendszer megoldása segítségével írunk fel, **$n$ pontra felírt Gauss-féle kvadratúra formulának** nevezzük.

Most tekintsünk egy speciális esetet, legyen $[a, b] = [-1, 1]$ és $n = 2$. Ekkor a (7.41) egyenletekből kapjuk az integrálokat kiszámolva

$$
\\begin{aligned}
2 &= c_1 + c_2 \\\\
0 &= c_1 x_1 + c_2 x_2 \\\\
\\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\\\
0 &= c_1 x_1^3 + c_2 x_2^3.
\\end{aligned}
$$

Könnyen ellenőrizhető, hogy az egyenletrendszernek egyértelmű megoldása van (a sorrendtől eltekintve): $c_1 = c_2 = 1$ és $x_1 = -\\frac{\\sqrt{3}}{3}$, $x_2 = \\frac{\\sqrt{3}}{3}$. A másodrendű Gauss-féle kvadratúra formula képlete tehát:

$$
\\int_{-1}^{1} f(x)\\,dx \\approx f\\left(-\\frac{\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3}\\right).
\\tag{7.42}
$$

**7.11. példa.** Számítsuk ki az $f(x) = e^x$ függvény integráljának egy közelítését a $[-1, 1]$ intervallumon! A (7.42) Gauss-formula alapján

$$
\\int_{-1}^{1} e^x\\,dx \\approx e^{-\\frac{\\sqrt{3}}{3}} + e^{\\frac{\\sqrt{3}}{3}} = 2.3426961.
$$

Ezt az $e - 1/e = 2.350424$ pontos értékkel összehasonlítva kapjuk, hogy a közelítés hibája $0.0077062$, ami a képlet egyszerűségéhez viszonyítva nagyon kicsi. $\\quad\\square$

Szükségünk lesz az ortogonális függvények fogalmára. Az $f$ és $g$ függvényeket egymásra **ortogonálisnak** nevezzük az $[a, b]$ intervallumon, ha

$$
\\int_a^b f(x)g(x)\\,dx = 0.
$$

Megmutatjuk, hogy létezik polinomoknak egy olyan $(P_i)_{i=0,1,\\ldots}$ sorozata, amelyek páronként ortogonálisak a $[-1, 1]$ intervallumon, és $P_i$ $i$-edfokú polinom. Legyen $P_0(x) \\equiv 1$ és $P_1(x) \\equiv x$. Ekkor $P_0$ és $P_1$ ortogonális egymásra a $[-1, 1]$ intervallumon. Keressük $P_2$-t a $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$ alakban. Ekkor a kívánt ortogonalitás alapján

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_0(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1(x)P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx,
\\end{aligned}
$$

amit megoldva

$$
a_{2,0} = -\\frac{\\int_{-1}^{1} x^2 P_0(x)\\,dx}{\\int_{-1}^{1} P_0^2(x)\\,dx}.
$$

Ehhez hasonlóan

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx,
\\end{aligned}
$$

amiből

$$
a_{2,1} = -\\frac{\\int_{-1}^{1} x^2 P_1(x)\\,dx}{\\int_{-1}^{1} P_1^2(x)\\,dx}.
$$

$P_2$-t tehát egyértelműen felírhatjuk a keresett alakban. Ezt az eljárást folytatva ha $P_0, \\ldots, P_i$ már definiált, $P_{i+1}$-et a

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \\cdots + a_{i+1,0} P_0(x)
\\tag{7.43}
$$

alakban keressük. Ekkor az előbbi számoláshoz hasonlóan kapjuk, hogy

$$
a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}, \\qquad j = 0, 1, \\ldots, i,
\\tag{7.44}
$$

tehát $P_{i+1}$ egyértelműen definiálható. Ezt az eljárást **Gram–Schmidt-féle ortogonalizálásnak** nevezzük, a kapott $P_i$ polinomokat pedig $i$-edfokú **Legendre-polinomnak** hívjuk. Az első néhány Legendre-polinom képlete:

$$
\\begin{aligned}
P_0(x) &= 1, \\\\
P_1(x) &= x, \\\\
P_2(x) &= x^2 - \\frac{1}{3}, \\\\
P_3(x) &= x^3 - \\frac{3}{5}x, \\\\
P_4(x) &= x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}
\\end{aligned}
$$

Megmutatható hogy a Legendre-polinomok teljesítik a

$$
P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)
\\tag{7.45}
$$

rekurzív képletet. A Legendre-polinomok fontosabb tulajdonságait foglalja össze a következő tétel:

**7.12. tétel.** Legyen $P_i$ az $i$-edik Legendre-polinom. Ekkor

1. $P_i$ ortogonális egy tetszőleges legfeljebb $(i - 1)$-edfokú polinomra.

2. $P_i$ páros függvény ha $i$ páros, és páratlan függvény, ha $i$ páratlan.

3. $P_i$-nek $i$ darab különböző valós gyöke van a $(-1, 1)$ intervallumban, amelyek szimmetrikusak az origóra nézve.

4. Ha $(p_i)_{i=0,1,\\ldots}$ (pontosan) $i$-edfokú, páronként ortogonális polinomok egy sorozata, akkor minden $i$-re $p_i(x) = c_i P_i(x)$ valamely $c_i \\neq 0$ konstansra.

Az alábbi tétel szerint az $n$ pontra felírt Gauss-féle kvadratúra képlet alappontjai a $P_n$ Legendre-polinom gyökeivel egyeznek meg.

**7.13. tétel.** Tegyük fel, hogy az $x_1, x_2, \\ldots, x_n$ számok az $n$-edfokú Legendre-polinom gyökei, és legyen

$$
c_i = \\int_{-1}^{1} \\frac{(x - x_1)\\cdots(x - x_{i-1})(x - x_{i+1})\\cdots(x - x_n)}{(x_i - x_1)\\cdots(x_i - x_{i-1})(x_i - x_{i+1})\\cdots(x_i - x_n)}\\,dx.
\\tag{7.46}
$$

Ekkor egy tetszőleges legfeljebb $(2n - 1)$-edfokú $p$ polinomra

$$
\\int_{-1}^{1} p(x)\\,dx = \\sum_{i=1}^{n} c_i p(x_i).
$$

A következő tétel a Gauss-féle kvadratúra formula képlethibáját adja meg.

**7.14. tétel.** Legyen $f \\in C^{2n}(a, b)$. Ekkor létezik olyan $\\xi \\in (a, b)$, hogy az $n$ pontra felírt Gauss-féle kvadratúra formulára

$$
\\int_a^b f(x)\\,dx = \\sum_{k=1}^{n} c_k f(x_k) + \\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx.
$$

A 7.14. tételből belátható, hogy a Gauss-féle kvadratúra formula maradéktagja közelítőleg

$$
\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}
$$

alakú, azaz ha például $f^{(2n)}$ korlátos $n$-től független korláttal, akkor a Gauss-féle kvadratúra formula exponenciális sebességgel tart 0-hoz, ha $n \\to \\infty$. Emlékezzünk, hogy a Newton–Cotes-formulák csak polinomiális sebességgel tartanak 0-hoz, ha $n \\to \\infty$.

**7.6. táblázat.** A Gauss-féle kvadratúra formula paraméterei

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

A 7.6. táblázatban felsoroltuk az első néhány Legendre-polinom gyökeit, és az előző tételből kapott hozzá tartozó $c_i$ együtthatók értékét.

A Gauss-féle kvadratúra képletek a $[-1, 1]$ intervallumra vonatkoznak. Egy tetszőleges $[a, b]$ intervallumon vett integrált az $x = ((b - a)t + a + b)/2$ változó helyettesítéssel tudunk a $[-1, 1]$ intervallumra visszavezetni:

$$
\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f\\left(\\frac{(b - a)t + a + b}{2}\\right)dt.
$$

**7.15. példa.** Közelítsük az $\\int_0^1 x^2 e^x\\,dx$ integrált másodrendű Gauss-féle kvadratúra képlettel:

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx &= \\frac{1}{2}\\int_{-1}^{1}\\left(\\frac{t + 1}{2}\\right)^2 e^{(t+1)/2}\\,dt \\\\
&\\approx \\frac{1}{2}\\left(\\left(\\frac{-\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(-\\sqrt{3}/3 + 1)/2} + \\left(\\frac{\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(\\sqrt{3}/3 + 1)/2}\\right) \\\\
&= 0.7119418.
\\end{aligned}
$$

amelynek hibája $0.0063400$. $\\quad\\square$

### Feladatok

**1. Feladat.** Alkalmazza a kétpontos Gauss-féle kvadratúra képletet az előző szakasz 1. feladatában felsorolt integrálokra!

<details class="reveal-solution"><summary>Megoldás</summary>

**Formula:** $\\int_{-1}^1 f(x)dx \\approx f(-1/\\sqrt{3}) + f(1/\\sqrt{3})$. For a general $[a,b]$, transform first.

**$\\int_0^1 \\sin^3 x \\, dx$.** Transform $x = \\frac{t+1}{2}$, $dx = \\frac{1}{2}dt$:

$$\\int_0^1 \\sin^3 x \\, dx = \\frac{1}{2}\\int_{-1}^1 \\sin^3\\left(\\frac{t+1}{2}\\right) dt \\approx \\frac{1}{2}\\left[\\sin^3(0.2113) + \\sin^3(0.7887)\\right]$$

$$= \\frac{1}{2}[0.0094 + 0.3827] = 0.1961$$

Error: 0.0171.

</details>

**2. Feladat.** Alkalmazza a 3, 4 és 5 pontra felírt Gauss-féle kvadratúra képleteket az előző szakasz 1. feladatában felsorolt integrálokra!

<details class="reveal-solution"><summary>Megoldás</summary>

**3-point:** $\\int_{-1}^1 f \\approx 0.5556f(-0.7746) + 0.8889f(0) + 0.5556f(0.7746)$

**4-point:** $\\int_{-1}^1 f \\approx 0.3479f(-0.8611) + 0.6521f(-0.3400) + 0.6521f(0.3400) + 0.3479f(0.8611)$

**5-point:** $\\int_{-1}^1 f \\approx 0.2369f(-0.9062) + 0.4786f(-0.5385) + 0.5689f(0) + 0.4786f(0.5385) + 0.2369f(0.9062)$

Apply to the integrals with the same $[a,b]\\to[-1,1]$ transformation. **Results for $\\int_0^1 \\sin^3 x \\, dx$:**

| Method | Approximation | Error |
|--------|---------------|-------|
| 2-point Gaussian | 0.1961 | 0.0171 |
| 3-point Gaussian | 0.1792 | 0.0003 |
| 4-point Gaussian | 0.1789 | 0.0000 |
| 5-point Gaussian | 0.1789 | ~0.0000 |

**Observation:** Gaussian quadrature converges very rapidly.

</details>
`;export{t as a,r as b,i as c,n as d,a as g,e as n};
