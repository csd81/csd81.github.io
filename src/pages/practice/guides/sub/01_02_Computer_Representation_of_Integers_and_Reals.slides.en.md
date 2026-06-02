## 1.2 Computer Representation of Reals

---

We recall that the real number in base $b$ number system

$$x = (x_{m-1}x_{m-2}\cdots x_0 . x_{-1}x_{-2}\cdots)_b, \qquad x_i \in \{0, 1, \ldots, b-1\}$$

has the numerical value

$$x = x_{m-1}b^{m-1} + x_{m-2}b^{m-2} + \cdots + x_1 b + x_0 + \frac{x_{-1}}{b} + \frac{x_{-2}}{b^2} + \cdots = \sum_{i=-\infty}^{m-1} x_i b^i.$$

Consider the real number 126.42. Different books define the normal form of this number as $1.2642 \cdot 10^2$ or $0.12642 \cdot 10^3$. In this lecture notes we use the first form as the normal form. Therefore, the **normal form** of a real number $x \neq 0$ in a base $b$ number system is

$$x = \pm m \cdot b^k, \qquad \text{where} \quad 1 \leq m < b.$$

The number $m$ is called the **mantissa**, and $k$ the **exponent** of the number.

---

In order to represent a real number, or other words, a **floating point** number we write it in a normal form in a base $b$ number system, and we would like to store its signed mantissa and exponent. The computers use different number of bits to store these numbers. Here we present an IEEE specification (IEEE Binary Floating Point Arithmetic Standard, 754-1985) to represent floating point numbers on 32 bits (the so-called **single precision**), and on 64 bits (the **double precision**) using the binary number system.

---

### Representation on 32 bits:

For $x \neq 0$ consider the binary normal form

$$x = (-1)^s m \cdot 2^k, \qquad \text{where} \quad s \in \{0, 1\} \quad \text{and} \quad m = (1.m_1 m_2 m_3 \ldots)_2.$$

The value $s$ is stored in the 1st bit. Instead of the exponent $k$, we store its shifted value, the nonnegative integer $e = k + 127$ on bits 2–9. In our definition of the binary normal form, a nonzero $x$ has a mantissa of the form $m = (1.m_1 m_2 \ldots)_2$, i.e., it always starts with 1, which we do not store, we store the fractional digits of the mantissa rounded to 23 bits. The 23 bits are stored on the 10–32 bits of the storage.

```
 s   e = k + 127                          m
┌─┬───────────────┬──────────────────────────────────────────────┐
│×│× × × × × × × ×│m₁ m₂ m₃ m₄ m₅ m₆ ⋯ m₁₈ m₁₉ m₂₀ m₂₁ m₂₂ m₂₃│
└─┴───────────────┴──────────────────────────────────────────────┘
 1│2             9│10                                           32
 └1┘└─────8─────┘└──────────────────23──────────────────────┘
```

---

This IEEE specification defines the representation of the number 0, and introduces two special symbols: `Inf` (to store infinity as a possible value) and `NaN` (not-a-number):

| number | $s$ | $e$ (2–9 bits) | mantissa bits (10–32 bits) |
|------|---|----------|------|
| +0   | 0 | 00000000 | every mantissa bit=0 |
| −0   | 1 | 00000000 | every mantissa bit=0 |
| +Inf | 0 | 11111111 | at least one mantissa bit=0 |
| −Inf | 1 | 11111111 | at least one mantissa bit=0 |
| +NaN | 0 | 11111111 | every mantissa bit=1 |
| −NaN | 1 | 11111111 | every mantissa bit=1 |

The symbol `Inf` can be used in programs as a result of a mathematical operation with value $\infty$, and the symbol `NaN` can be a result of a mathematical operation which is undefined (e.g., a division by 0 or a root of a negative number in real numbers).

---

The definition yields that the exponent $e = (11111111)_2 = 255$ is used exclusively for the special symbols `Inf` and `NaN`. For finite reals the possible values are

$$0 \leq e = k + 127 \leq 254,$$

hence the possible values of the exponent $k$ are

$$-127 \leq k \leq 127.$$

Therefore, the smallest positive representable number corresponds to

$$k = -127 \qquad \text{and} \qquad m = (1.00\ldots01)_2.$$

Hence its value is

$$x_{\min} = (1.00\ldots01)_2 \cdot 2^{-127} = (1 + 2^{-23})2^{-127} \approx 10^{-38}.$$

The largest real can be stored is

$$x_{\max} = (1.11\ldots1)_2 \cdot 2^{127} = (2 - 2^{-23})2^{127} \approx 10^{38}.$$

---

The **representation on 64 bits** is similar:

The shifted exponent $e = k + 1023$ is stored on bits 2–12, the fractional part of the mantissa is stored on bits 13–64.

```
 s   e = k + 1023                           m
┌─┬──────────────────┬──────────────────────────────────────────────┐
│×│× × × × × × × × × ×│m₁ m₂ m₃ m₄ m₅ m₆ ⋯ m₄₈ m₄₉ m₅₀ m₅₁ m₅₂│
└─┴──────────────────┴──────────────────────────────────────────────┘
 1│2                12│13                                          64
 └1┘└───────11──────┘└──────────────────52──────────────────────┘
```

Then the positive real numbers can be stored in the computer are, approximately, in between $10^{-308}$ and $10^{308}$.

---

> **Example**
>
> Suppose we would like to store reals on 4 bits using a binary normal form. For example, we use the 1st bit as the sign bit, the shifted exponent $e = k + 1$ is stored on the 2nd bit, and the fractional part of the mantissa is stored on bits 3–4. (The symbols `Inf` and `NaN` are not defined now.)
>
> | $s$ | $e$ | $m$ | $x$ |
> |---|---|----|------|
> | 0 | 0 | 00 | 0 |
> | 0 | 0 | 01 | $(1.01)_2 \cdot 2^{-1} = (1 + \frac{1}{4})\frac{1}{2} = \frac{5}{8}$ |
> | 0 | 0 | 10 | $(1.10)_2 \cdot 2^{-1} = (1 + \frac{1}{2})\frac{1}{2} = \frac{3}{4} = \frac{6}{8}$ |
> | 0 | 0 | 11 | $(1.11)_2 \cdot 2^{-1} = (1 + \frac{1}{2} + \frac{1}{4})\frac{1}{2} = \frac{7}{8}$ |
> | 0 | 1 | 00 | $(1.00)_2 \cdot 2^0 = 1 = \frac{8}{8}$ |
> | 0 | 1 | 01 | $(1.01)_2 \cdot 2^0 = 1 + \frac{1}{4} = \frac{10}{8}$ |
> | 0 | 1 | 10 | $(1.10)_2 \cdot 2^0 = 1 + \frac{1}{2} = \frac{12}{8}$ |
> | 0 | 1 | 11 | $(1.11)_2 \cdot 2^0 = 1 + \frac{1}{2} + \frac{1}{4} = \frac{7}{4} = \frac{14}{8}$ |

```
 ⊕─┼─┼─┼─┼─⊕─⊕─⊕─⊕─┼─⊕─┼─⊕─┼─⊕─┼─┼─⊕
 0           1/2       1        3/2       2
```

---

The reals which can be stored without an error in a certain floating point representation are called **machine numbers**. The machine number which is stored in a computer instead of the real number $x$ is denoted by $\mathrm{fl}(x)$.

$$
\mathrm{fl}(x) = \begin{cases}
0, & |x| < x_{\min},\\
\mathtt{Inf}, & x > x_{\max},\\
-\mathtt{Inf}, & x < -x_{\max}.
\end{cases}
$$

In the first case we talk about arithmetic **underflow**, and in the second and third cases, about arithmetic **overflow**. For the definition of $\mathrm{fl}(x)$ in the intermediate cases there are basically two methods: In the first case we take the binary normal form of $x$, consider its mantissa $m = (1.m_1 m_2 m_3 \ldots)_2$, and we consider as many first several mantissa fractional bits as it is possible to store in the particular representation, store them, and omit the rest of the mantissa bits. This method is called **chopping** of the mantissa.

---

Using **rounding**, the mantissa of $\mathrm{fl}(x)$ is defined so that $\mathrm{fl}(x)$ be the nearest machine number to $x$. The IEEE specification for single precision representation we defined above uses the following rule: Let the normal form of $x > 0$ be

$$x = m2^k, \qquad \text{where} \quad m = (1.m_1 m_2 \ldots m_{23}m_{24}\ldots)_2.$$

Let

$$x' = (1.m_1 m_2 \ldots m_{23})_2 2^k \qquad \text{and} \qquad x'' = \big((1.m_1 m_2 \ldots m_{23})_2 + 2^{-23}\big)2^k.$$

Then $x'$ and $x''$ are consecutive machine numbers,

$$x' \leq x \leq x'' \qquad \text{and} \qquad x'' - x' = 2^{k-23}.$$

The specification defines

$$
\mathrm{fl}(x) = \begin{cases}
x', & \text{if } |x - x'| < \frac{1}{2}|x'' - x'|,\\
x'', & \text{if } |x - x''| < \frac{1}{2}|x'' - x'|,\\
x', & \text{if } |x - x'| = \frac{1}{2}|x'' - x'| \text{ and } m_{23} = 0,\\
x'', & \text{if } |x - x'| = \frac{1}{2}|x'' - x'| \text{ and } m_{23} = 1.
\end{cases}
$$

---

Using the rounding, the error is

$$|x - \mathrm{fl}(x)| \leq \frac{1}{2}|x'' - x'| = \frac{1}{2}2^{-23}2^k.$$

If we compare it to the exact value we get

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{|x - \mathrm{fl}(x)|}{(1.m_1 m_2 \ldots)_2 \cdot 2^k} \leq \frac{1}{2}2^{-23}.$$

We can see that the first machine number which is larger than 1 is $1 + 2^{-23}$ in the single precision floating point arithmetic. Let $\varepsilon_{\mathrm{m}}$ denote the difference of the first machine number right to 1 and the number 1. This number is called **machine epsilon**. Therefore, $\varepsilon_{\mathrm{m}}$ is the smallest power of 2 (in a binary storage system) for which the computer evaluates the inequality $1 + \varepsilon_{\mathrm{m}} > 1$ to be true.

> **Theorem**
>
> Let $0 < \mathrm{fl}(x) < \mathtt{Inf}$, and suppose the floating point representation uses rounding. Then
>
> $$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_m.$$

---

Let $x$ be a real number, and consider $\tilde{x}$ as its approximation. Then the **absolute error** or just simply the **error** of the approximation is the number

$$|x - \tilde{x}|.$$

> **Example**
>
> Let $x = 10000$ and $\tilde{x} = 10000.1$. Then the error is $|x - \tilde{x}| = 0.1$. Now let $y = 1$ and $\tilde{y} = 1.1$. Then the error is $|y - \tilde{y}| = 0.1$.

The **relative error** is defined by

$$\frac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0).$$

> **Example**
>
> Let $x = 10000$ and $\tilde{x} = 10000.1$. Then the relative error is $|x - \tilde{x}|/x = 10^{-5}$. Now let $y = 1$ and $\tilde{y} = 1.1$. Then the error is $|y - \tilde{y}| = 10^{-1}$.

---

**4-digit arithmetic:** a floating point arithmetic using a decimal number system with 4 stored mantissa digits (and suppose we can store any exponent). This means that, in every steps of a calculation, the result is rounded to the first 4 **significant digits**.

> **Example**
>
> Using a 4-digit arithmetic we get
>
> $$1.043 + 32.25 = 33.29,$$
>
> note the exact sum is 33.293. Similarly,
>
> $$1.043 \cdot 32.25 = 33.64$$
>
> (after rounding the exact value 33.63675). But
>
> $$1.043 + 20340 = 20340,$$
>
> since we rounded the exact value 20341.043 to 4 significant digits.

---

