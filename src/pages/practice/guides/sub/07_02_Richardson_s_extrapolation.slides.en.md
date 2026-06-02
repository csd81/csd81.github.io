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

