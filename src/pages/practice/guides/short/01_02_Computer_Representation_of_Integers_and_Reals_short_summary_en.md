**1.2. Computer Representation of Integers and Reals**

## 1. Integer Representation

The value of an $m$-digit positive integer written in an arbitrary base $b$ numeral system is:

$$I = (a_{m-1}a_{m-2}\ldots a_1 a_0)_b = \sum_{i=0}^{m-1} a_i b^i$$

The value of the largest integer representable on $m$ digits is $I_{\max} = b^m - 1$. Since computers use the base-two ($b=2$, binary) numeral system, a total of $2^m$ different integers can be represented on $m$ bits (by default from $0$ to $2^m-1$).

Two main methods can be applied to store **negative integers**:

### A) Sign-magnitude representation

* The leftmost bit (the most significant bit) is reserved as the **sign bit**: its value is `0` for positive and `1` for negative numbers.
* The absolute value of the number is stored in binary on the remaining $m-1$ bits.
* **Disadvantage:** The number $0$ will have two representations (positive and negative zero), which complicates the design of arithmetic circuits.

### B) Two's-complement representation

The procedure used in modern computers. If we want to store a negative number $-J$, we save the binary form of the value $2^m - J$.

* **Practical generation:** We take the binary form of the absolute value of the number, flip all its bits (change `1`s to `0`s and `0`s to `1`s), and then add `1` to the resulting number.
* **Advantage:** The subtraction operation ($I_1 - I_2$) can be reduced to a simple addition: it is sufficient to add the two's complement of $I_2$ to $I_1$, then keep the last $m$ bits of the obtained sum.

## 2. Normal Form of Real (Floating-Point) Numbers

To store non-integer real numbers, the numbers must first be brought to **normal form**. The normal form of a real number $x \neq 0$ with respect to base $b$ is:

$$x = \pm m \cdot b^k, \qquad \text{where} \quad 1 \leq m < b$$

* **$m$:** the **mantissa** of the number.
* **$k$:** the **exponent** (characteristic) of the number.

In the binary numeral system ($b=2$), the first digit of the mantissa, by definition ($1 \leq m < 2$), is **always exactly 1**. This fixed `1` is not stored separately by computers for the purpose of saving memory (this is the so-called *hidden bit*).

## 3. Machine Epsilon and Rounding Error

Due to hardware limitations, the computer can only map real numbers to a finite floating-point subset (the set of machine numbers, $\mathrm{fl}(x)$).

### Absolute and Relative Error

If $x$ is the exact value and $\tilde{x}$ is its approximation, then:

* **Absolute error:** $|x - \tilde{x}|$
* **Relative error:** $\dfrac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0)$

### Definition of Machine Epsilon ($\varepsilon_{\mathrm{m}}$)

> **Machine epsilon:** The smallest power of $2$ (in case of binary storage) for which the inequality **$1 + \varepsilon_{\mathrm{m}} > 1$** is still demonstrably true on the computer. When adding a number smaller than this, the machine drops the fraction due to the bounded mantissa length, and the result remains exactly $1$.

### Theorem 1.10 (Relative Error of Rounding)

If real numbers are stored rounded on the computer, the relative error arising from storage is bounded from above by half of the machine epsilon:

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_{\mathrm{m}}$$

## 4. Accumulation of Rounding Errors (Arithmetic Traps)

The chapter demonstrates through a detailed example (4-digit decimal arithmetic) what mathematical anomalies can result from floating-point number representation working with finite digits during the execution of operations.

### A) Cancellation (Cancellation error / Loss of significance)

If we subtract two floating-point numbers that are very close to each other, the most significant significant digits cancel out. At the end of the mantissa of the resulting difference, the machine is forced to pull in zeros (or random bits), which causes a drastic jump in relative error and significant loss of precision.

### B) Absorption

If we add an infinitesimally small number to a very large number, the significant digits of the small number completely slip out of the mantissa during normalization (aligning the decimal points).

* **Example:** In 4-digit rounded arithmetic:

$$20340 + 1.043 = 20341.043 \xrightarrow{\text{rounded}} 20340$$

* The effect of the added $1.043$ is completely **absorbed**, as if we hadn't added it to the expression.

### C) Violation of Associativity

Since absorption and rounding can occur during floating-point additions, the **order** of performing operations is critical. For machine numbers, addition is **not associative**: $(a + b) + c \neq a + (b + c)$. To minimize the error, it is advisable in numerical algorithms to sum the numbers sorted in ascending order according to their magnitude (absolute value).
