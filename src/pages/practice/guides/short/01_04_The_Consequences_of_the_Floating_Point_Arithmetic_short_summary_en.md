**1.4. The Consequences of Finite Number Representation**

## 1. Introduction: The Root of the Problem

The previous chapter (1.2.) already established in theory that floating-point storage of real numbers happens with a finite mantissa length. This chapter demonstrates through practical, numerical examples how this finiteness can lead to drastic loss of precision, overflow, or mathematical anomalies during the execution of algorithms.

## 2. Cancellation in Practice (Cancellation Error)

If we subtract two floating-point numbers that are very close to each other, the most significant significant digits (which were identical) cancel out, and the machine introduces uncertain digits to the end of the mantissa.

### Sample Example: Solving a Quadratic Equation (Example 1.19)

Let us consider the following quadratic equation, which we calculate using restricted, 4-digit rounded decimal arithmetic:

$$x^2 - 83.5x + 1.5 = 0$$

Applying the traditional quadratic formula, due to roundings, the following is obtained:

$$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2}$$

* **The first root ($\tilde{x}_1$):** $\frac{83.5 + 83.46}{2} = 83.50$. (The exact value: $83.482$, the relative error is negligible, $\delta_1 = 0.000215$).
* **The second root ($\tilde{x}_2$):** $\frac{83.5 - 83.46}{2} = \frac{0.040}{2} = 0.020$. (The exact value: $0.01796$, the relative error is huge: **$\delta_2 = 0.113$ (approx. 11%)**).

**The cause of the error:** In the numerator of the second root, we subtracted two extremely close numbers ($83.5$ and $83.46$), thus the precision consisting of 4 significant digits immediately melted down to 1 significant digit.

### How Can Cancellation be Averted? (Engineering Trick)

Based on Vieta's formulas between the roots and coefficients, we know that $x_1 \cdot x_2 = \frac{c}{a}$. If we compute the problematic root $x_2$ not by subtraction, but with the help of the already accurately obtained $\tilde{x}_1$, as a division, the cancellation error can be completely avoided:

$$\tilde{x}_2 = \frac{c}{a \cdot \tilde{x}_1} = \frac{1.5}{1 \cdot 83.50} \approx 0.01796$$

This modified calculation restores the full 4-digit precision.

## 3. Underflow and Overflow

If numbers that are too large or too small are generated during the intermediate steps of a mathematical formula, the machine exceeds the representability limits and halts (or yields an `Inf`/`NaN` value), even if the final result would otherwise be a normal-sized number.

### Sample Example: Calculating $\frac{15^{40}}{40!}$

* **The naive method:** We calculate the numerator ($15^{40}$) and the denominator ($40!$) separately, then divide them.
* *Problem:* In single-precision floating-point representation, both $40!$ and $15^{40}$ are inherently much larger than the maximum storable value (approx. $10^{38}$), so the program **crashes with an overflow error**.

* **The numerical solution (Rearrangement):** Let's regroup the multiplier factors pairwise:

$$\frac{15^{40}}{40!} = \frac{15}{40} \cdot \frac{15}{39} \cdot \frac{15}{38} \cdots \frac{15}{1}$$

Thus, built up with a simple loop, every single partial result safely remains within the representation range of the hardware, and we get the exact final result ($0.135521$).

## 4. The Phenomenon of Absorption and Non-Associativity of Addition

Since during floating-point addition the mantissa of the smaller number must be aligned with the exponent of the larger number by bit-shifting, the significant digits of terms that are too small can simply fall out (get absorbed).

### Sample Example: Summing a Series from Left to Right vs. Right to Left

Calculate the following sum with 4-digit decimal arithmetic:

$$S = 1.000 + \sum_{i=1}^{1000} 0.0003$$

* **A) Naive order (From left to right):**

$$1.000 + 0.0003 = 1.0003 \xrightarrow{\text{rounded}} 1.000$$

Due to the rounding rule of the machine, the added small value is completely **absorbed**. If we repeat this a thousand times, the final result stubbornly remains **$1.000$**, meaning the effect of the one thousand small numbers is completely destroyed.
* **B) Correct order (From right to left, i.e., in ascending order):**
First, let's sum the small numbers themselves: $0.0003 + 0.0003 = 0.0006$, and so on. Since the small numbers are of the same magnitude, there is no absorption. The sum of the one thousand small terms will be exactly $1000 \cdot 0.0003 = 0.3000$. Adding this to the large number at the end:

$$0.3000 + 1.000 = \mathbf{1.300}$$

> **Main Lesson:** Floating-point addition on computers is **NOT an associative and NOT a commutative operation** at the level of multi-term sums. To minimize rounding errors, series and sums must **always be calculated in ascending order according to the absolute value of the terms**.
