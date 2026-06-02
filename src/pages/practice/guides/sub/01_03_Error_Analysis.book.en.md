## 1.3. Error Analysis

Let $x$ and $y$ be positive real numbers, and consider the numbers $\tilde{x}$ and $\tilde{y}$ as an approximation of $x$ and $y$. Let $|x - \tilde{x}| \leq \Delta_x$ and $|y - \tilde{y}| \leq \Delta_y$ be the error bounds of the approximation. The relative error bounds are denoted by $\delta_x := \Delta_x/x$ and $\delta_y := \Delta_y/y$, respectively. In this section we examine the following question: We would like to perform an arithmetic operation (addition, subtraction, multiplication or division) on the real numbers $x$ and $y$, but instead of it, we perform the operation on the numbers $\tilde{x}$ and $\tilde{y}$ (suppose without an error). We will consider this latter number as an "approximation" of the original one. We will examine the error and the relative error of this "approximation".

Consider first the addition. We are looking for error bounds $\Delta_{x+y}$ and $\delta_{x+y}$ such that

$$|x + y - (\tilde{x} + \tilde{y})| \leq \Delta_{x+y} \quad \text{and} \quad \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} \leq \delta_{x+y}.$$

**Theorem 1.14.** *The numbers*

$$\Delta_{x+y} := \Delta_x + \Delta_y \qquad \text{and} \qquad \delta_{x+y} := \max\{\delta_x, \delta_y\}$$

*are absolute and relative error bounds of the addition, respectively.*

**Proof.** Using the triangle inequality and the definitions of $\Delta_x$ and $\Delta_y$, we get

$$|x + y - (\tilde{x} + \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y.$$

This means that $\Delta_x + \Delta_y$ is an upper bound of the error of the addition.

Using the above relation, we obtain

$$
\begin{aligned}
\frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} &\leq \frac{\Delta_x + \Delta_y}{x + y}\\
&= \frac{x}{x + y}\delta_x + \frac{y}{x + y}\delta_y\\
&\leq \max\{\delta_x, \delta_y\}.
\end{aligned}
$$

Therefore, $\max\{\delta_x, \delta_y\}$ is a relative error bound of the addition. $\square$

Clearly, the above theorem can be generalized for addition of several numbers: the error bounds will be added, and the relative error bound is the maximum value of the relative error bounds. We can reformulate this result as follows: the number of exact digits of the approximation of the sum is at least the smallest of the number of exact digits of the approximations of the operands. Certainly, the theorem gives the worst case estimate. In practice the errors can balance each other. For example, let $x = 1$, $y = 2$, $\tilde{x} = 1.1$ and $\tilde{y} = 1.8$. Then $x + y = 3$ and $\tilde{x} + \tilde{y} = 2.9$. Therefore, the error of the sum is only 0.1, smaller than the sum of the error of the terms, 0.3.

**Theorem 1.15.** *Let $x > y > 0$. The numbers*

$$\Delta_{x-y} := \Delta_x + \Delta_y \qquad \text{and} \qquad \delta_{x-y} := \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y$$

*are absolute and relative error bounds of the subtraction.*

**Proof.** The inequalities

$$|x - y - (\tilde{x} - \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y$$

imply the first statement. Consider

$$\frac{|x - y - (\tilde{x} - \tilde{y})|}{x - y} \leq \frac{\Delta_x + \Delta_y}{x - y} = \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y,$$

which gives the second statement. $\square$

We can observe that if we subtract two nearly equal numbers, then the relative error can be magnified compared to the relative error of the terms. In other words, the number of exact digits can be significantly less that in the original numbers. This phenomenon is called *loss of significance*.

**Example 1.16.** Let $x = 12.47531$, $\tilde{x} = 12.47534$, $y = 12.47326$ and $\tilde{y} = 12.47325$. Then $\delta_x = 2.4 \cdot 10^{-6}$ and $\delta_y = 8 \cdot 10^{-7}$. On the other hand, $x - y = 0.00205$, $\tilde{x} - \tilde{y} = 0.00209$, and so $\delta_{x-y} = 0.0195$. We can check that $\tilde{x}$ and $\tilde{y}$ are exact in 6 digits, but $\tilde{x} - \tilde{y}$ is exact only in 2 digits. $\square$

**Theorem 1.17.** *Let $x, y > 0$. The numbers*

$$\Delta_{x \cdot y} := x\Delta_y + y\Delta_x + \Delta_x \Delta_y, \qquad \text{and} \qquad \delta_{x \cdot y} := \delta_x + \delta_y + \delta_x \delta_y$$

*are absolute and relative error bounds of the multiplication, respectively.*

**Proof.** The triangle-inequality and simple algebraic manipulations yield

$$
\begin{aligned}
|xy - \tilde{x}\tilde{y}| &= |xy - x\tilde{y} + x\tilde{y} - \tilde{x}\tilde{y}|\\
&\leq x|y - \tilde{y}| + |\tilde{y}||x - \tilde{x}|\\
&\leq x\Delta_y + |\tilde{y}|\Delta_x\\
&= x\Delta_y + |y + \tilde{y} - y|\Delta_x\\
&\leq x\Delta_y + y\Delta_x + \Delta_x \Delta_y,
\end{aligned}
$$

hence the first statement is proved. Therefore, we get

$$\frac{|xy - \tilde{x}\tilde{y}|}{xy} \leq \frac{x\Delta_y + y\Delta_x + \Delta_x \Delta_y}{xy} = \delta_x + \delta_y + \delta_x \delta_y,$$

which implies the second statement. $\square$

Since, in general, $\Delta_x$ and $\Delta_y$ are much smaller than $x$ and $y$, and so $\Delta_x \Delta_y$ is much smaller than $x\Delta_y$ and $y\Delta_x$, we have that $x\Delta_y + y\Delta_x$ is a good approximation of the absolute error of the multiplication. Similarly, $\delta_x + \delta_y$ is a good approximation of the relative error of the multiplication. Both results mean that the errors do not propagate rapidly in multiplication.

**Theorem 1.18.** *Suppose $x, y > 0$ and $\delta_y < 1$. Then the numbers*

$$\Delta_{x/y} := \frac{x\Delta_y + y\Delta_x}{y(y - \Delta_y)} \qquad \text{and} \qquad \delta_{x/y} := \frac{\delta_x + \delta_y}{1 - \delta_y}$$

*are absolute and relative error bounds of the division, respectively.*

**Proof.** Elementary manipulations give

$$\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right| = \frac{|x\tilde{y} - xy + xy - \tilde{x}y|}{y|\tilde{y}|} \leq \frac{x\Delta_y + y\Delta_x}{y|\tilde{y}|} = \frac{x\Delta_y + y\Delta_x}{y|y - (y - \tilde{y})|}.$$

Assumption $\delta_y < 1$ implies $|y - \tilde{y}| \leq \Delta_y < y$, hence $|y - (y - \tilde{y})| \geq y - |y - \tilde{y}| \geq y - \Delta_y > 0$ proves the first statement.

For the second part, consider

$$\frac{\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right|}{\frac{x}{y}} = \frac{|x(\tilde{y} - y) - y(\tilde{x} - x)|}{x|\tilde{y}|} = \frac{\left|\frac{\tilde{y} - y}{y} - \frac{\tilde{x} - x}{x}\right|}{\left|1 - \frac{y - \tilde{y}}{y}\right|} \leq \frac{\delta_x + \delta_y}{1 - \delta_y}. \qquad \square$$

If $\delta_y$ is small, then the relative error bound of the division can be approximated well by $\delta_x + \delta_y$. Similarly, if $\Delta_y$ is much smaller than $y$, then $\frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y$ is a good approximation of $\Delta_{x/y}$. If $y$ is much smaller than $x$, or if $y$ is close to 0, then $\Delta_y$ or $\Delta_x$ can be significantly magnified, so the absolute error can be much larger than the absolute error of the terms.

### Exercises

1. Let $x = 3.50$, $y = 10.00$, $\tilde{x} = 3.47$, $\tilde{y} = 10.02$. Estimate the absolute and relative error of

$$3x + 7y, \quad \frac{1}{y}, \quad x^2, \quad y^3, \quad \frac{4xy}{x + y}$$

   (without evaluating the expressions) assuming we replace $x$ and $y$ by $\tilde{x}$ and $\tilde{y}$. Then compute the expressions numerically and compute the absolute and relative errors exactly. Compare them with the estimates.

2. Let $\tilde{x}$ be an approximation of $x$, and $|x - \tilde{x}| \leq \Delta_x$. Let $f : \mathbb{R} \to \mathbb{R}$ be a differentiable function satisfying $|f'(x)| \leq M$ for all $x \in \mathbb{R}$. Let $y = f(x)$ and consider $\tilde{y} = f(\tilde{x})$ as an approximation of $y$. Estimate the absolute error of the approximation. (Hint: Use the Lagrange's Mean Value Theorem.)

