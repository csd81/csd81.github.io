## 1.3 Error Analysis

---

Let $x$ and $y$ be positive real numbers, and consider the numbers $\tilde{x}$ and $\tilde{y}$ as an approximation of $x$ and $y$. Let

$$|x - \tilde{x}| \leq \Delta_x \qquad \text{and} \qquad |y - \tilde{y}| \leq \Delta_y$$

be error bounds of the approximation. The relative error bounds are denoted by

$$\delta_x := \frac{\Delta_x}{x} \qquad \text{and} \qquad \delta_y := \frac{\Delta_y}{y},$$

respectively.

We examine the following question: We would like to perform an arithmetic operation (addition, subtraction, multiplication or division) on the real numbers $x$ and $y$, but instead of it, we perform the operation on the numbers $\tilde{x}$ and $\tilde{y}$ (suppose without an error).

---

Consider first the addition. We are looking for error bounds $\Delta_{x+y}$ and $\delta_{x+y}$ such that

$$|x + y - (\tilde{x} + \tilde{y})| \leq \Delta_{x+y} \quad \text{and} \quad \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} \leq \delta_{x+y}.$$

> **Theorem**
>
> The numbers
>
> $$\Delta_{x+y} := \Delta_x + \Delta_y \qquad \text{and} \qquad \delta_{x+y} := \max\{\delta_x, \delta_y\}$$
>
> are absolute and relative error bounds of the addition, respectively.

---

> **Proof**
>
> Using the triangle inequality and the definitions of $\Delta_x$ and $\Delta_y$, we get
>
> $$|x + y - (\tilde{x} + \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y.$$
>
> This means that $\Delta_x + \Delta_y$ is an upper bound of the error of the addition. Using the above relation, we obtain
>
> $$
> \begin{aligned}
> \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} &\leq \frac{\Delta_x + \Delta_y}{x + y} = \frac{\Delta_x}{x + y} + \frac{\Delta_y}{x + y}\\
> &= \frac{x}{x + y}\frac{\Delta_x}{x} + \frac{y}{x + y}\frac{\Delta_y}{y} = \frac{x}{x + y}\delta_x + \frac{y}{x + y}\delta_y\\
> &\leq \max\{\delta_x, \delta_y\}.
> \end{aligned}
> $$
>
> Therefore, $\max\{\delta_x, \delta_y\}$ is a relative error bound of the addition.

---

Certainly, the theorem gives the worst case estimate. In practice the errors can balance each other.

> **Example**
>
> Let $x = 1$, $y = 2$, $\tilde{x} = 1.1$ and $\tilde{y} = 1.8$. Then $x + y = 3$ and $\tilde{x} + \tilde{y} = 2.9$. Therefore the error of the sum
>
> $$|x + y - (\tilde{x} + \tilde{y})| = 0.1,$$
>
> but
>
> $$\Delta_x + \Delta_y = 0.1 + 0.2 = 0.3.$$

---

> **Theorem**
>
> Let $x > y > 0$. The numbers
>
> $$\Delta_{x-y} := \Delta_x + \Delta_y \qquad \text{and} \qquad \delta_{x-y} := \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y$$
>
> are absolute and relative error bounds of the subtraction.

> **Proof**
>
> The inequalities
>
> $$|x - y - (\tilde{x} - \tilde{y})| = |x - \tilde{x} - (y - \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y$$
>
> imply the first statement. Consider
>
> $$
> \begin{aligned}
> \frac{|x - y - (\tilde{x} - \tilde{y})|}{x - y} &\leq \frac{\Delta_x + \Delta_y}{x - y}\\
> &= \frac{x}{x - y}\frac{\Delta_x}{x} + \frac{y}{x - y}\frac{\Delta_y}{y}\\
> &= \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y,
> \end{aligned}
> $$
>
> which gives the second statement.

---

We can observe that if we **subtract two nearly equal numbers**, then the relative error can be magnified compared to the relative error of the terms. In other words, the number of exact digits can be significantly less than in the original numbers. This phenomenon is called **loss of significance**.

> **Example**
>
> Let $x = 12.47531$, $\tilde{x} = 12.47534$, $y = 12.47326$ and $\tilde{y} = 12.47325$. Then
>
> $$\delta_x \approx 2.4 \cdot 10^{-6} \qquad \text{and} \qquad \delta_y \approx 8 \cdot 10^{-7}.$$
>
> On the other hand,
>
> $$x - y = 0.00205, \qquad \tilde{x} - \tilde{y} = 0.00209,$$
>
> and so
>
> $$\delta_{x-y} \approx 0.0195.$$

---

> **Theorem**
>
> Let $x, y > 0$. The numbers
>
> $$\Delta_{x \cdot y} := x\Delta_y + y\Delta_x + \Delta_x \Delta_y, \qquad \text{and} \qquad \delta_{x \cdot y} := \delta_x + \delta_y + \delta_x \delta_y$$
>
> are relative and absolute error bounds of the multiplication, respectively.

> **Proof**
>
> The triangle-inequality yields
>
> $$
> \begin{aligned}
> |xy - \tilde{x}\tilde{y}| &= |xy - x\tilde{y} + x\tilde{y} - \tilde{x}\tilde{y}|\\
> &\leq x|y - \tilde{y}| + |\tilde{y}||x - \tilde{x}|\\
> &\leq x\Delta_y + |\tilde{y}|\Delta_x\\
> &= x\Delta_y + |y + \tilde{y} - y|\Delta_x\\
> &\leq x\Delta_y + y\Delta_x + \Delta_x \Delta_y.
> \end{aligned}
> $$
>
> Using the first part, we get
>
> $$\frac{|xy - \tilde{x}\tilde{y}|}{xy} \leq \frac{x\Delta_y + y\Delta_x + \Delta_x \Delta_y}{xy} = \delta_x + \delta_y + \delta_x \delta_y,$$
>
> which implies the second statement.

---

Since, in general, $\Delta_x$ and $\Delta_y$ are much smaller than $x$ and $y$, and so $\Delta_x \Delta_y$ is much smaller than $x\Delta_y$ and $y\Delta_x$, we have that

$$\Delta_{x \cdot y} \approx x\Delta_y + y\Delta_x.$$

Similarly,

$$\delta_{x \cdot y} \approx \delta_x + \delta_y.$$

Both results mean that the errors do not propagate rapidly in multiplication.

---

> **Theorem**
>
> Suppose $x, y > 0$ and $\delta_y < 1$. Then the numbers
>
> $$\Delta_{x/y} := \frac{x\Delta_y + y\Delta_x}{y(y - \Delta_y)} \qquad \text{and} \qquad \delta_{x/y} := \frac{\delta_x + \delta_y}{1 - \delta_y}$$
>
> are absolute and relative error bounds of the division, respectively.

> **Proof**
>
> Elementary manipulations give
>
> $$\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right| = \frac{|x\tilde{y} - xy + xy - \tilde{x}y|}{y|\tilde{y}|} \leq \frac{x\Delta_y + y\Delta_x}{y|\tilde{y}|} = \frac{x\Delta_y + y\Delta_x}{y|y - (y - \tilde{y})|}.$$
>
> Assumption $\delta_y < 1$ implies $|y - \tilde{y}| \leq \Delta_y < y$, hence $|y - (y - \tilde{y})| \geq y - |y - \tilde{y}| \geq y - \Delta_y > 0$ proves the first statement. For the second part, consider
>
> $$\frac{\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right|}{\frac{x}{y}} = \frac{|x(\tilde{y} - y) - y(\tilde{x} - x)|}{x|\tilde{y}|} = \frac{\left|\frac{\tilde{y} - y}{y} - \frac{\tilde{x} - x}{x}\right|}{\left|1 - \frac{y - \tilde{y}}{y}\right|} \leq \frac{\delta_x + \delta_y}{1 - \delta_y}.$$

---

If $\delta_y$ is small, then

$$\delta_{x/y} \approx \delta_x + \delta_y.$$

Similarly, if $\Delta_y$ is much smaller than $y$, then

$$\Delta_{x/y} \approx \frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y.$$

If $y$ is much smaller than $x$, or if $y$ is close to 0, then $\Delta_y$ or $\Delta_x$ can be significantly magnified, so the absolute error can be much larger than the absolute error of the terms.

---

> **Example**
>
> Let $x = 42.721531$, $\tilde{x} = 42.721534$, $y = 0.00324721$ and $\tilde{y} = 0.00324732$. Then
>
> $$\Delta_x = 3 \cdot 10^{-6} \qquad \text{and} \qquad \Delta_y = 1.1 \cdot 10^{-7}.$$
>
> On the other hand,
>
> $$\frac{x}{y} \approx 13156.38071, \qquad \frac{\tilde{x}}{\tilde{y}} \approx 13155.93597,$$
>
> and so
>
> $$\Delta_{x/y} \approx 0.44474.$$
>
> So the error in the result of the division is much bigger than the errors in $x$ and $y$.

---

