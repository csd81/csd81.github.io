## 1.4 The Consequences of the Floating Point Arithmetic

---

> **Example**
>
> Solve the equation
>
> $$x^2 - 83.5x + 1.5 = 0$$
>
> using 4-digit arithmetic in the computations. Using the quadratic formula and the 4-digit arithmetic we get
>
> $$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2},$$
>
> hence
>
> $$\tilde{x}_1 = \frac{167.0}{2} = 83.50 \qquad \text{and} \qquad \tilde{x}_2 = \frac{0.040}{2} = 0.020.$$
>
> We can check that the exact solutions are
>
> $$x_1 = 83.482032 \qquad \text{and} \qquad x_2 = 0.0179679$$
>
> (with several digits pecision), hence the relative error bounds for each roots:
>
> $$\delta_1 = 0.0002152 \qquad \text{and} \qquad \delta_2 = 0.113096.$$
>
> The relative error of $x_2$ is much bigger than that of $x_1$.

---

Consider the second root of $ax^2 + bx + c = 0$:

$$x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}.\tag{1}$$

When $b$ is negative and $4ac$ is much smaller than $b^2$, then we subtract to nearly equal numbers, and we observe the loss of significance. (This was the case in the previous example.) To avoid this problem, consider

$$x_2 = \frac{b^2 - (b^2 - 4ac)}{2a(-b + \sqrt{b^2 - 4ac})} = \frac{2c}{-b + \sqrt{b^2 - 4ac}}.\tag{2}$$

This formula is algebraically equivalent to formula (1). But the difference is that here we do not subtract two close numbers (in the denominator we add two positive numbers). If $b$ is positive, then for the first root we get

$$x_1 = \frac{2c}{-b - \sqrt{b^2 - 4ac}}.\tag{3}$$

---

> **Example**
>
> Compute the second root of the equation of the previous example using 4-digit arithmetic and formula (2).
>
> $$\tilde{x}_2 = \frac{2 \cdot 1.5}{83.5 + \sqrt{83.5^2 - 4 \cdot 1.5}} = \frac{3}{83.5 + 83.46} = \frac{3}{167.0} = 0.01796.$$
>
> The relative error of this root is now $\delta_2 = 0.00044$.

---

> **Example**
>
> Suppose we need to evaluate the expression
>
> $$\cos^2 x - \sin^2 x.$$
>
> If $x = \frac{\pi}{4}$, then the exact value of this expression is 0, hence if $x$ is close to $\frac{\pi}{4}$, then in the expression we need to subtract to nearly equal numbers, so we can face loss of significance. We can use
>
> $$\cos^2 x - \sin^2 x = \cos 2x.$$

In the previous examples we used algebraic manipulations to avoid the loss of significance. Now we show different techniques.

---

> **Example**
>
> Consider the function $f(x) = e^x - 1$. In the neighborhood of $x = 0$ we again need to subtract two nearly equal numbers, but here we cannot use an algebraic identity to avoid it. But here we can consider the Taylor series of the exponential function, and we get
>
> $$
> \begin{aligned}
> f(x) &= 1 + x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots - 1\\
> &= x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots.
> \end{aligned}
> $$
>
> It is worth to take a finite approximation of this infinite series, and use it as an approximation of the function value $f(x)$.

---

> **Example**
>
> Evaluate the numerical value of
>
> $$\frac{15^{40}}{40!}.$$
>
> If we compute the numerator and the denominator separately first, then we run into the problem of overflowing the calculation. On the other hand, we know that
>
> $$\lim_{n \to \infty} \frac{a^n}{n!} = 0,$$
>
> so the result must be a small number. We rearrange the computation as follows:
>
> $$\frac{15^{40}}{40!} = \frac{15}{40} \cdot \frac{15}{39} \cdot \frac{15}{38} \cdots \frac{15}{1}.$$
>
> Here in each steps, the expressions we need to evaluate belong to the range which can be stored in the computer.

---

> **Example (cont.)**
>
> This formula can be computed with a simple **for** cycle:
>
> ```
> y ← 15
> for i = 2, ..., 40 do
>     y ← y · (15/i)
> end do
> output(y)
> ```
>
> The result is 0.135521 (with single precision).

---

> **Example**
>
> Compute the sum
>
> $$A = 1.000 + 0.0003 + 0.0003 + \cdots + 0.0003 = 1.000 + \sum_{i=1}^{1000} 0.0003$$
>
> using a 4-digit arithmetic. We perform the additions from left to right, so first we compute
>
> $$1.000 + 0.0003 = 1.0003 = 1.000$$
>
> after the rounding. Adding the next number to it, because of the rounding to 4 digits, we get again
>
> $$1.000 + 0.0003 + 0.0003 = 1.000.$$
>
> Hence we get the numerical result
>
> $$A = 1.000.$$

---

> **Example (cont.)**
>
> Consider the same sum, but in the opposite order:
>
> $$B = 0.0003 + 0.0003 + \cdots + 0.0003 + 1.000 = \sum_{i=1}^{1000} 0.0003 + 1.000.$$
>
> First we compute
>
> $$0.0003 + 0.0003 = 0.0006.$$
>
> Then we can continue:
>
> $$0.0003 + 0.0003 + 0.0003 = 0.0009,$$
>
> and similarly we get,
>
> $$B = \sum_{i=1}^{1000} 0.0003 + 1.000 = 0.3 + 1.000 = 1.300.$$
>
> The addition with floating point arithmetic is not commutative numerically.

Conclusion: in computing sums with several terms, it is advantageous to do the computation in an increasing order of the terms.
