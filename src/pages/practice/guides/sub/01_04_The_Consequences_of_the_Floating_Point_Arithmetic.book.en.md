## 1.4. The Consequences of the Floating Point Arithmetic

**Example 1.19.** Solve the equation

$$x^2 - 83.5x + 1.5 = 0$$

using 4-digit arithmetic in the computations.

Using the quadratic formula and the 4-digit arithmetic we get the numerical values

$$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2},$$

hence

$$\tilde{x}_1 = \frac{167.0}{2} = 83.50, \quad \text{and} \quad \tilde{x}_2 = \frac{0.040}{2} = 0.020.$$

We can check that the exact solutions (up to several digits precision) are $x_1 = 83.482032$ and $x_2 = 0.0179679$. Using the relative error bounds for each roots we get $\delta_1 = 0.0002152$ and $\delta_2 = 0.113096$. The first root is exact in 4 digits, but the second is only in 1 digits. So there is a significant difference between the order of the magnitudes of the relative errors. What is the reason of it? In the computation of the second root, we subtracted two close numbers. This is the point where we significantly lost the accuracy. $\square$

Consider the second root of $ax^2 + bx + c = 0$:

$$x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}.\tag{1.2}$$

When $b$ is negative and $4ac$ is much smaller than $b^2$, then we subtract two nearly equal numbers, and we observe the loss of significance. (This happened for the second root in Example 1.19.) To avoid this problem, consider

$$x_2 = \frac{b^2 - (b^2 - 4ac)}{2a(-b + \sqrt{b^2 - 4ac})} = \frac{2c}{-b + \sqrt{b^2 - 4ac}}.\tag{1.3}$$

This formula is algebraically equivalent to formula (1.2). But the difference is that here we do not subtract two close numbers (in the denominator we add two positive numbers). If $b$ is positive, then for the first root we get

$$x_1 = \frac{2c}{-b - \sqrt{b^2 - 4ac}}.\tag{1.4}$$

**Example 1.20.** Compute the second root of the equation of Example 1.19 using 4-digit arithmetic and formula (1.4).

$$\tilde{x}_2 = \frac{2 \cdot 1.5}{83.5 + \sqrt{83.5^2 - 4 \cdot 1.5}} = \frac{3}{83.5 + 83.46} = \frac{3}{167.0} = 0.01796.$$

The relative error of $x_2$ is now $\delta_2 = 0.00044$, hence the exact number of digits is 4. $\square$

**Example 1.21.** Suppose we need to evaluate the expression $\cos^2 x - \sin^2 x$. If $x = \frac{\pi}{4}$, then the exact value of this expression is 0, hence if $x$ is close to $\frac{\pi}{4}$, then in the expression we need to subtract to nearly equal numbers, so we can face loss of significance. We can avoid it if, instead of the original formula, we evaluate its equivalent form, $\cos 2x$. $\square$

In the previous examples we used algebraic manipulations to avoid the loss of significance. Now we show different techniques.

**Example 1.22.** Consider the function $f(x) = e^x - 1$. In the neighborhood of $x = 0$ we again need to subtract two nearly equal numbers, but here we cannot use an algebraic identity to avoid it. But here we can consider the Taylor series of the exponential function, and we get

$$f(x) = x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots.$$

It is worth to take a finite approximation of this infinite series, and use it as an approximation of the function value $f(x)$. $\square$

The next example shows a different problem.

**Example 1.23.** Evaluate the number $y = 20^{50}/50!$. The problem is the following: If we compute the numerator and the denominator separately first, then we run into the problem of overflowing the calculation if we use single precision floating point arithmetic. On the other hand, we know that $a^n/n! \to 0$ as $n \to \infty$, so the result must be a small number. We rearrange the computation as follows:

$$\frac{20^{50}}{50!} = \frac{20}{50} \cdot \frac{20}{49} \cdot \frac{20}{48} \cdots \frac{20}{1}.$$

Here in each steps the expressions we need to evaluate belong to the range which can be stored in the computer. This formula can be computed with a simple **for** cycle:

```
y ← 20
for i = 2, ..., 50 do
    y ← y · (20/i)
end do
output(y)
```

The result is 3.701902 (with 7-digits precision). $\square$

**Example 1.24.** Compute the sum

$$A = 10.00 + 0.002 + 0.002 + \cdots + 0.002 = 10.00 + \sum_{i=1}^{10} 0.002$$

using a 4-digit arithmetic. We perform the additions from left to right, so first we need to compute $10.00 + 0.002$. But with a 4-digit arithmetic the result is $10.00 + 0.002 = 10.002 = 10.00$ after the rounding. Adding the next number to it, because of the rounding to 4 digits, we get again $10.00 + 0.002 + 0.002 = 10.00$. Hence we get the numerical result $A = 10.00$.

Consider the same sum, but in another order:

$$B = 0.002 + 0.002 + \cdots + 0.002 + 10.00 = \sum_{i=1}^{10} 0.002 + 10.00.$$

First we need to compute $0.002 + 0.002 = 0.004$. The result is exact even if we use 4-digit arithmetic. Then we can continue: $0.002 + 0.002 + 0.002 = 0.006$ etc., and finally, $\sum_{i=1}^{10} 0.002 = 0.02$. Therefore, the numerical result will be $B = 10.02$. Here we have not observed any rounding error, since we could compute the result in each step exactly.

This example demonstrates that the addition using a floating point arithmetic is not a commutative operation numerically. $\square$

A conclusion of the previous example is that in computing sums with several terms, it is advantageous to do the computation in an increasing order of the terms, since in that case we have a better chance for that the terms have similar order of magnitude, so the loss of significance has less chance.

### Exercises

1. Investigate that in the next example what are the cases when we can observe the loss of significance. How can we avoid it?

   (a) $\ln x - 1$,

   (b) $\sqrt{x + 4} - 2$,

   (c) $\sin x - x$,

   (d) $1 - \cos x$,

   (e) $(1 - \cos x)/\sin x$,

   (f) $(\cos x - e^{-x})/x$.

2. Compute the next expression using a 4-digit arithmetic $2.274 + 12.04 + 0.4233 + 0.1202 + 0.2204$, and then sort the terms in an increasing way, and repeat the calculation.

---

*F. Hartung, University of Pannonia — www.tankonyvtar.hu*
