## 1.2. Computer Representation of Integers and Reals

Let $I$ be a positive integer with a representation in base $b$ number system with $m$ number of digits:

$$I = (a_{m-1}a_{m-2}\ldots a_1 a_0)_b, \qquad \text{where} \quad a_i \in \{0, 1, \ldots, b-1\}.$$

Its value is

$$I = a_{m-1}b^{m-1} + a_{m-2}b^{m-2} + \cdots + a_1 b + a_0.$$

Therefore, the largest integer can be represented with $m$ digits is $I_{\max}$ where all digits equal to $b - 1$. Its numerical value is

$$I_{\max} = (b-1)(b^{m-1} + b^{m-2} + \cdots + b + 1) = b^m - 1.$$

Hence on $m$ digits we can represent (store) integers from 0 up to $b^m - 1$, which is $b^m$ number of different integers.

Suppose we use a base 2, other words, *binary* number system. Then on $m$ bits we can store $2^m$ number of integers. We describe two methods to store negative integers. The first method is the *sign-magnitude representation*. Here we allocate a *sign bit* (typically the *most significant bit*, i.e., the left-most bit), which is 0 for positive integers and 1 for negative integers. Then on the rest of the $m - 1$ bits we can store the magnitude or absolute value of the number. Then $I_{\max} = 2^{m-1} - 1$ is the largest, and $I_{\min} = -I_{\max}$ is the smallest integer which can be represented. In this system the integer 0 can be stored as an identically 0 bit sequence or as $100\ldots0$.

**Example 1.6.** In Table 1.2 we listed all the integers which can be represented on $m = 3$ bits using the sign-magnitude binary representation. $\square$

In practice the *two's-complement representation* is frequently used to store signed integers. Let $I$ be an integer which we would like to represent on $m$ bits. Instead of $I$ we store the binary form of the number $C$ defined by

$$
C = \begin{cases}
I, & \text{if } 0 \leq I \leq 2^{m-1} - 1,\\
2^m + I, & \text{if } -2^{m-1} \leq I < 0.
\end{cases}
$$

**Table 1.2: Sign-magnitude binary representation on $m = 3$ bits**

| $I$ | a binary code |
|----|------|
| 0  | 000  |
| 1  | 001  |
| 2  | 010  |
| 3  | 011  |
| 0  | 100  |
| -1 | 101  |
| -2 | 110  |
| -3 | 111  |

Here the largest and the smallest representable integer is $I_{\max} = 2^{m-1} - 1$ and $I_{\min} = -2^{m-1}$, respectively. Therefore, if $0 \leq I \leq 2^{m-1} - 1$, then $C < 2^{m-1}$, i.e., the first bit of $C$ is 0. On the other hand, if $-2^{m-1} \leq I < 0$, then it is easy to see that $2^{m-1} \leq C \leq 2^m - 1$, i.e., the first bit of $C$ is 1.

An important advantage of the two's-complement representation is that the subtraction can be obtained as an addition (see Exercise 4).

**Example 1.7.** Table 1.3 contains all the integers which can be represented on $m = 3$ bits using the two's-complement binary representation. $\square$

**Table 1.3: Two's-complement representation on $m = 3$ bits**

| $I$ (in decimal) | $I$ (in binary) | $C$, the stored binary |
|------|------|------|
| 0  | 000  | 000 |
| 1  | 001  | 001 |
| 2  | 010  | 010 |
| 3  | 011  | 011 |
| -1 | -001 | 111 |
| -2 | -010 | 110 |
| -3 | -011 | 101 |
| -4 | -100 | 100 |

Next we discuss the representation of real numbers. We recall that the real number in base $b$ number system

$$x = (x_{m-1}x_{m-2}\cdots x_0 . x_{-1}x_{-2}\cdots)_b, \qquad x_i \in \{0, 1, \ldots, b-1\}$$

has the numerical value

$$x = x_{m-1}b^{m-1} + x_{m-2}b^{m-2} + \cdots x_1 b + x_0 + \frac{x_{-1}}{b} + \frac{x_{-2}}{b^2} + \cdots = \sum_{i=-\infty}^{m-1} x_i b^i.$$

Consider the real number 126.42. Different books define the normal form of this number as $1.2642 \cdot 10^2$ or $0.12642 \cdot 10^3$. In this lecture notes we use the first form as the normal form. Therefore, the *normal form* of a real number $x \neq 0$ in a base $b$ number system is $x = \pm m \cdot b^k$, where $1 \leq m < b$. The number $m$ is called the *mantissa*, and $k$ the *exponent* of the number. In order to represent a real number, or in other words, a *floating point* number we write it in a normal form in a base $b$ number system, and we would like to store its signed mantissa and exponent. Computers use different number of bits to store these numbers. Here we present an IEEE specification[^1] to represent floating point numbers on 32 bits (the so-called *single precision*), and on 64 bits (the *double precision*) using the binary number system. This representation is used in IBM PCs. Consider the binary normal form $x = (-1)^s m \cdot 2^k$, where $s \in \{0, 1\}$ and $m = (1.m_1 m_2 m_3 \ldots)_2$. The value $s$ is stored in the 1st bit. Instead of the exponent $k$, we store its shifted value, the nonnegative integer $e = k + 127$ on bits 2–9. In our definition of the binary normal form, a nonzero $x$ has a mantissa of the form $m = (1.m_1 m_2 \ldots)_2$, i.e., it always starts with 1, which we do not store, we store the fractional digits of the mantissa rounded to 23 bits. These 23 bits are stored on bits 10–32 of the storage. This IEEE specification defines the representation of the number 0, and introduces two special symbols, `Inf` (to store infinity as a possible value) and `NaN` (not-a-number) in the following way:

| number | $s$ | $e$ (bits 2–9) | mantissa bits (bits 10–32) |
|------|---|----------|------|
| +0   | 0 | 00000000 | every mantissa bit=0 |
| −0   | 1 | 00000000 | every mantissa bit=0 |
| +Inf | 0 | 11111111 | at least one mantissa bit=0 |
| −Inf | 1 | 11111111 | at least one mantissa bit=0 |
| +NaN | 1 | 11111111 | every mantissa bit=1 |
| +NaN | 1 | 11111111 | every mantissa bit=1 |

The symbol `Inf` can be used in programs as a result of a mathematical operation with value $\infty$, and the symbol `NaN` can be a result of a mathematical operation which is undefined (e.g., a division by 0 or a root of a negative number in real numbers). Both symbols can be positive or negative. The definition yields that the exponent $e = (11111111)_2 = 255$ is used exclusively for the special symbols `Inf` and `NaN`. For finite reals the possible values are $0 \leq e \leq 254$, hence the possible values of the exponent $k$ are $-127 \leq k \leq 127$. Therefore, the smallest positive representable number corresponds to exponent $k = -127$ and mantissa $(1.00\ldots01)_2$. Hence its value is $x_{\min} = (1 + 1/2^{23})2^{-127} \approx 10^{-38}$. The largest real can be stored is $x_{\max} = (1.11\ldots1)_2 2^{127} = (2 - 2^{-23})2^{127} \approx 10^{38}$.

The representation on 64 bits is similar: the shifted exponent $e = k + 1023$ is stored on bits 2–12, the fractional part of the mantissa is stored on bits 13–64. Then the range of real numbers which can be stored in the computer is, approximately, from $10^{-308}$ to $10^{308}$.

**Example 1.8.** Suppose we would like to store reals on 4 bits using a binary normal form. For example, we use the 1st bit as the sign bit, the shifted exponent $e = k + 1$ is stored on the 2nd bit, and the fractional part of the mantissa is stored on bits 3–4. (The symbols `Inf` and `NaN` are not defined now.) The nonnegative real numbers which can be represented by the above method are listed in Table 1.4. $\square$

We can see that, using any floating point representation, we can store only finitely many reals on a computer. The reals which can be stored without an error in a certain floating point representation are called *machine numbers*. The machine number which is

[^1]: IEEE Binary Floating Point Arithmetic Standard, 754-1985.

**Table 1.4: Nonnegative reals on 4 bits.**

| $s$ | $e$ | $m$ | $x$ |
|---|---|----|------|
| 0 | 0 | 00 | 0 |
| 0 | 0 | 01 | $(1.01)_2 \cdot 2^{-1} = (1 + \frac{1}{4})\frac{1}{2} = \frac{5}{8}$ |
| 0 | 0 | 10 | $(1.10)_2 \cdot 2^{-1} = (1 + \frac{1}{2})\frac{1}{2} = \frac{3}{4} = \frac{6}{8}$ |
| 0 | 0 | 11 | $(1.11)_2 \cdot 2^{-1} = (1 + \frac{1}{2} + \frac{1}{4})\frac{1}{2} = \frac{7}{8}$ |
| 0 | 1 | 00 | $(1.00)_2 \cdot 2^0 = 1 = \frac{8}{8}$ |
| 0 | 1 | 01 | $(1.01)_2 \cdot 2^0 = 1 + \frac{1}{4} = \frac{10}{8}$ |
| 0 | 1 | 10 | $(1.10)_2 \cdot 2^0 = 1 + \frac{1}{2} = \frac{12}{8}$ |
| 0 | 1 | 11 | $(1.11)_2 \cdot 2^0 = 1 + \frac{1}{2} + \frac{1}{4} = \frac{7}{4} = \frac{14}{8}$ |

stored in a computer instead of the real number $x$ is denoted by $\mathrm{fl}(x)$. If $|x|$ is smaller than the smallest positive machine number, then, by definition, $\mathrm{fl}(x) = 0$, and if $|x|$ is larger than the largest positive machine number, then we define $\mathrm{fl}(x) = \mathtt{Inf}$ for $x > 0$ and $\mathrm{fl}(x) = -\mathtt{Inf}$ for $x < 0$. In the first case we talk about arithmetic *underflow*, and in the second case, about arithmetic *overflow*. The definition of $\mathrm{fl}(x)$ in the intermediate cases can be different in different computers. There are basically two methods: In the first case we take the binary normal form of $x$, consider its mantissa $m = (1.m_1 m_2 m_3 \ldots)_2$, and we consider as many first several mantissa fractional bits as it is possible to store in the particular representation. We store them, and omit the rest of the mantissa bits. This method is called *chopping* of the mantissa. For example, using the single precision representation defined above, we store the first 23 mantissa fractional bits.

The other method, the *rounding*, is more frequently used to define the mantissa bits of the machine number $\mathrm{fl}(x)$. Here the mantissa of $\mathrm{fl}(x)$ is defined so that $\mathrm{fl}(x)$ be the nearest machine number to $x$. In case when $x$ is exactly an average of two consecutive machine numbers, we could round down or up. The IEEE specification for single precision representation we defined above uses the following rule: Let the normal form of a positive real $x$ be $x = m2^k$, where $m = (1.m_1 m_2 \ldots m_{23}m_{24}\ldots)_2$. Let $x' = (1.m_1 m_2 \ldots m_{23})_2 2^k$ and $x'' = \big((1.m_1 m_2 \ldots m_{23})_2 + 2^{-23}\big)2^k$. Then $x'$ and $x''$ are consecutive machine numbers, $x' \leq x \leq x''$ and $x'' - x' = 2^{k-23}$. The specification defines

$$
\mathrm{fl}(x) = \begin{cases}
x', & \text{if } |x - x'| < \frac{1}{2}|x'' - x'|,\\
x'', & \text{if } |x - x''| < \frac{1}{2}|x'' - x'|,\\
x', & \text{if } |x - x'| = \frac{1}{2}|x'' - x'| \text{ and } m_{23} = 0,\\
x'', & \text{if } |x - x'| = \frac{1}{2}|x'' - x'| \text{ and } m_{23} = 1.
\end{cases}
$$

In the critical case, i.e., if $|x - x'| = \frac{1}{2}|x'' - x'|$, approximately half of the cases we round down and in the other cases we round up. An other reason for this definition is that in this critical case the last mantissa bit is always 0, so a division by 2 can be performed on $\mathrm{fl}(x)$ without an error. Using the rounding, the error is

$$|x - \mathrm{fl}(x)| \leq \frac{1}{2}|x'' - x'| = \frac{1}{2}2^{-23}2^k.$$

If we compare it to the exact value we get

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{|x - \mathrm{fl}(x)|}{(1.m_1 m_2 \ldots)_2 \cdot 2^k} \leq \frac{1}{2}2^{-23}.$$

We can see that the first machine number which is larger than 1 is $1 + 2^{-23}$ in the single precision floating point arithmetic. Let $\varepsilon_{\mathrm{m}}$ denote the difference of the first machine number right to 1 and the number 1. This number is called *machine epsilon*. Therefore, $\varepsilon_{\mathrm{m}}$ is the smallest power of 2 (in a binary storage system) for which the computer evaluates the inequality $1 + \varepsilon_{\mathrm{m}} > 1$ to be true. The following theorem can be proved similarly to the consideration above for the single precision floating point representation.

**Theorem 1.9.** *Let $0 < \mathrm{fl}(x) < \mathtt{Inf}$, and suppose the floating point representation uses rounding. Then*

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_m.$$

The proof of the next result is left for Exercise 5

**Theorem 1.10.** *Suppose we use a number system with base $b$, and let $t$ be the number of mantissa bits in the floating point representation. Then*

$$
\varepsilon_m = \begin{cases}
2^{-t}, & \text{if } b = 2,\\
b^{1-t}, & \text{if } b \neq 2.
\end{cases}
$$

Now we define the notion of the error of an approximation and other related notions. Let $x$ be a real number, and consider $\tilde{x}$ as its approximation. Then the *absolute error* or just simply the *error* of the approximation is the number $|x - \tilde{x}|$. Frequently the error without knowing the magnitude of the numbers does not mean too much. For example, 10000.1 can be considered as a good approximation of 10000, but in general, 1.1 is not considered as a good approximation of 1, but in both cases the errors are the same, 0.1. We may get more information if we compare the error to the exact value. The *relative error* is defined by

$$\frac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0).$$

We say that in a base $b$ number system $\tilde{x}$ is *exact in $n$ digits* if

$$\frac{|x - \tilde{x}|}{|x|} \leq \frac{1}{2}b^{1-n}.$$

We can see that the smaller is the relative error, the larger is the number of exact digits. In a decimal number system ($b = 10$) we can formulate the relation between the relative error and the number of exact digits in the following way: if the relative error decreases by a factor of $1/10$, then the number of exact digits increases by 1.

**Example 1.11.** Let $x = 1657.3$ and $\tilde{x} = 1656.2$. Then the absolute error is $|x - \tilde{x}| = 1.1$, and the relative error is $|x - \tilde{x}|/x = 0.0006637$ (with 7 decimal digits precision). Since $|x - \tilde{x}|/x = 0.0006637 < 0.5 \cdot 10^{-2}$, the approximation is exact in 3 digits. On the other hand, if $x$ is approximated by the value $\tilde{x} = 1656.9$, then $|x - \tilde{x}|/x = 0.0002413 < 0.5 \cdot 10^{-3}$, and hence the approximation is exact in 4 digits. $\square$

The previous definition and Theorem 1.9 yield that the single precision floating point arithmetic is exact in 24 binary digits. Usually, we are interested in the exact number of digits in a decimal number system. In case of a single precision floating point arithmetic, we get it if we find the largest integer $n$ for which

$$\frac{1}{2}2^{-23} \leq \frac{1}{2}10^{1-n}.$$

It can be computed that $n = 7$ is the number of exact digits for a single precision floating point arithmetic.

**Example 1.12.** Consider $x = 12.4$. First rewrite it in binary form: $12 = (1100)_2$. Find the binary form of its fractional part:

$$0.4 = (0.x_1 x_2 x_3 \ldots)_2 = \frac{x_1}{2} + \frac{x_2}{2^2} + \frac{x_3}{2^3} + \cdots.$$

If we multiply 0.4 by 2, then its integer part gives $x_1$. $0.4 \cdot 2 = 0.8$, hence $x_1 = 0$. Consider the fractional part of this product, 0.8, and we repeat the previous procedure. $0.8 \cdot 2 = 1.6$, so $x_2 = 1$. The fractional part of the product is 0.6, which gives: $0.6 \cdot 2 = 1.2$, and therefore, $x_3 = 1$. The fractional part of the product is 0.2. We have $0.2 \cdot 2 = 0.4$, hence $x_4 = 0$, and we continue with 0.4. We can see that the digits 0011 will be repeated periodically infinitely many times, i.e., $0.4 = (0.0110011001100110011001100110011\ldots)_2$. The binary normal form of $x$ is

$$x = 12.4 = (1.10001100110011001100110011\ldots)_2 \cdot 2^3.$$

Rounding the mantissa to 23 bits (down) we get

$$\mathrm{fl}(x) = (1.10001100110011001100110)_2 \cdot 2^3.$$

Its numerical value (in a decimal form) is $\mathrm{fl}(x) = 12.3999996185302734375$. $\square$

The arithmetic operations performed by a computer can be defined as

$$
\begin{aligned}
x \oplus y &:= \mathrm{fl}(\mathrm{fl}(x) + \mathrm{fl}(y)),\\
x \ominus y &:= \mathrm{fl}(\mathrm{fl}(x) - \mathrm{fl}(y)),\\
x \odot y &:= \mathrm{fl}(\mathrm{fl}(x) \cdot \mathrm{fl}(y)),\\
x \oslash y &:= \mathrm{fl}(\mathrm{fl}(x) / \mathrm{fl}(y)).
\end{aligned}
$$

Here we always take the machine representation of each operands and also the result of the arithmetic operation.

In later examples we will use the so-called *4-digit rounding arithmetic* or simply *4-digit arithmetic*. By this we mean a floating point arithmetic using a decimal number system with 4 stored mantissa digits (and suppose we can store any exponent). This means that, in every step of a calculation, the result is rounded to the first 4 *significant digits*, i.e., from the first nonzero digits for 4 digits, and this rounded number is used in the next arithmetic operation. We can enlarge the effect of rounding errors in such a way.

**Example 1.13.** Using a 4-digit arithmetic we get $1.043 + 32.25 = 33.29$, and similarly, $1.043 \cdot 32.25 = 33.64$ (after rounding). But $1.043 + 20340 = 20340$, since we rounded the exact value 20341.043 to 4 significant digits. $\square$

### Exercises

1. Convert the following decimal numbers to binary form:

$$57, \quad -243, \quad 0.25, \quad 35.27$$

<details class="reveal-solution"><summary>Show solution</summary>

**(a) 57**
```
57 ÷ 2 = 28 remainder 1
28 ÷ 2 = 14 remainder 0
14 ÷ 2 =  7 remainder 0
 7 ÷ 2 =  3 remainder 1
 3 ÷ 2 =  1 remainder 1
 1 ÷ 2 =  0 remainder 1
```
Reading remainders from bottom: **57 = (111001)₂**

**(b) -243** — first find binary of 243:
```
243 = (11110011)₂
```
Since 243 > 127 we need at least 9 bits for the magnitude. Using 9 bits, two's-complement:
$$-243 = 2^9 - 243 = 512 - 243 = 269 = (100001101)_2$$

**(c) 0.25**
```
0.25 × 2 = 0.5  → digit 0
0.5  × 2 = 1.0  → digit 1
```
**0.25 = (0.01)₂**

**(d) 35.27** — integer part $35 = (100011)_2$; fractional part $0.27$ gives a non-terminating expansion:
$$35.27 \approx (100011.010001010001\ldots)_2$$

</details>

2. Convert the binary numbers to decimal form:

$$(101101)_2, \quad (0.10011)_2, \quad (1010.01101)_2$$

<details class="reveal-solution"><summary>Show solution</summary>

**(a)** $1\cdot2^5 + 0\cdot2^4 + 1\cdot2^3 + 1\cdot2^2 + 0\cdot2^1 + 1\cdot2^0 = 32 + 8 + 4 + 1 = 45$, so $(101101)_2 = 45$.

**(b)** $1\cdot2^{-1} + 0\cdot2^{-2} + 0\cdot2^{-3} + 1\cdot2^{-4} + 1\cdot2^{-5} = 0.5 + 0.0625 + 0.03125 = 0.59375$, so $(0.10011)_2 = 0.59375$.

**(c)** Integer part $1\cdot2^3 + 1\cdot2^1 = 10$; fractional part $0.25 + 0.125 + 0.03125 = 0.40625$, so $(1010.01101)_2 = 10.40625$.

</details>

3. Show that the two's-complement representation of a negative integer can be computed in the following way: Take the binary form of the absolute value of the number. Change all 0's to 1's and all 1's to 0's, and add 1 to the resulting number.

<details class="reveal-solution"><summary>Show solution</summary>

Let $I$ be a positive integer with $m$-bit binary representation, bits $b_{m-1}\ldots b_0$, so $I = \sum_{i=0}^{m-1} b_i 2^i$. The two's-complement of $-I$ is by definition
$$C_2(-I) = 2^m - I.$$
Flipping all bits gives
$$\text{flipped} = \sum_{i=0}^{m-1}(1-b_i)2^i = (2^m - 1) - I.$$
Adding 1:
$$(2^m - 1) - I + 1 = 2^m - I = C_2(-I).$$
This proves the bit-flip-and-add-one method is correct. $\square$

</details>

4. Let $I_1$ and $I_2$ be two positive integers with $m$ bits. Show that $I_1 - I_2$ can be computed if we first consider the two's-complements representation $C_2$ of $I_2$, add $I_1$ to it, and finally, take the last $m$ bits of the result.

<details class="reveal-solution"><summary>Show solution</summary>

By definition $C_2(I_2) = 2^m - I_2$ represents $-I_2$. Then
$$I_1 + C_2(I_2) = I_1 + (2^m - I_2) = (I_1 - I_2) + 2^m.$$
Taking the last $m$ bits is reduction modulo $2^m$:
$$\big((I_1 - I_2) + 2^m\big) \bmod 2^m = (I_1 - I_2) \bmod 2^m.$$
If $I_1 \ge I_2$ then $0 \le I_1 - I_2 < 2^m$ and the result is exactly $I_1 - I_2$. If $I_1 < I_2$ the result is the two's-complement representation of the negative number $I_1 - I_2$. Hence subtraction is performed as addition with the two's-complement. $\square$

</details>

5. Prove Theorem 1.10.

<details class="reveal-solution"><summary>Show solution</summary>

**Theorem.** For base $b$ with $t$ mantissa digits, $\varepsilon_m = 2^{-t}$ if $b = 2$, and $\varepsilon_m = b^{1-t}$ if $b \ne 2$.

Machine epsilon is the gap between $1$ and the next larger machine number.

*Case $b = 2$:* here $1 = (1.0\ldots0)_2 \times 2^0$ with $t$ mantissa bits, and the next machine number is $(1.0\ldots01)_2\times 2^0 = 1 + 2^{-t}$. Therefore $\varepsilon_m = (1 + 2^{-t}) - 1 = 2^{-t}$.

*Case $b \ne 2$:* here $1 = (1.0\ldots0)_b \times b^0$, and the next machine number is $1 + b^{-(t-1)} = 1 + b^{1-t}$, so $\varepsilon_m = b^{1-t}$. $\square$

</details>

6. Write a computer code which gives back the machine epsilon of the particular computer.

<details class="reveal-solution"><summary>Show solution</summary>

```python
def find_machine_epsilon():
    """Find machine epsilon for floating-point arithmetic."""
    eps = 1.0
    while 1.0 + eps > 1.0:
        eps = eps / 2.0
    return eps * 2  # last value where 1 + eps > 1

import numpy as np
def find_machine_epsilon_float32():
    eps = np.float32(1.0)
    while np.float32(1.0) + eps > np.float32(1.0):
        eps = np.float32(eps / 2.0)
    return np.float32(eps * 2)
```
Expected results: double precision $\varepsilon_m \approx 2.22\times10^{-16} = 2^{-52}$; single precision $\varepsilon_m \approx 1.19\times10^{-7} = 2^{-23}$.

</details>

7. Compute the exact number of digits of a machine number in case of a double precision floating point arithmetic.

<details class="reveal-solution"><summary>Show solution</summary>

Double precision uses $t = 52$ mantissa bits (plus 1 implicit leading bit = 53 significant bits), so $\varepsilon_m = 2^{-52}$. For $n$ exact decimal digits we need
$$\tfrac12\cdot 2^{-52} \le \tfrac12\cdot 10^{1-n} \;\Longrightarrow\; 2^{-52} \le 10^{1-n}.$$
Taking $\log_{10}$:
$$n \le 1 + 52\log_{10}(2) = 1 + 52\times 0.30103 \approx 16.65.$$
So double precision is exact to **15–16 decimal digits**.

</details>

8. Let $x = (x_0.x_1 x_2 \ldots x_m x_{m+1} x_{m+2} \ldots) \cdot 10^k$, $\tilde{x} = (x_0.x_1 x_2 \ldots x_m \tilde{x}_{m+1} \tilde{x}_{m+2} \ldots) \cdot 10^k$, i.e., $x$ and $\tilde{x}$ has the same order of magnitude, and its first $m + 1$ digits are the same. Show that, in this case, $\tilde{x}$ is an approximation of $x$ with at least $m$ number of exact digits.

<details class="reveal-solution"><summary>Show solution</summary>

The two numbers agree in their first $m+1$ digits, so their difference starts at the $(m+1)$-th fractional position:
$$|x - \tilde{x}| = |0.\underbrace{0\ldots0}_{m}(x_{m+1}-\tilde{x}_{m+1})\ldots|\times 10^k < 10^{-m}\times 10^k.$$
The relative error is then
$$\frac{|x-\tilde{x}|}{|x|} < \frac{10^{-m}\times 10^k}{x_0\times 10^k} = \frac{10^{-m}}{x_0} \le 10^{-m},$$
since $x_0 \ge 1$. For $m$ exact digits we need relative error $\le \tfrac12\times 10^{1-m}$, and indeed $10^{-m} < \tfrac12\times 10^{1-m}$ for $m \ge 1$. Hence $\tilde{x}$ has at least $m$ exact digits. $\square$

</details>
