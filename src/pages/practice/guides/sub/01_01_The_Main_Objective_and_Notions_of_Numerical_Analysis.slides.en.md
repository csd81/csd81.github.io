# Numerical Analysis

## 1. Introduction

*A Pannon Egyetem gyakorlatorientált infrastrukturális- és készségfejlesztési reformja — RRF-2.1.2.-21-2022-00007*

**Ferenc Hartung**

University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---


## 1.1 The Main Objective and Notions of Numerical Analysis

---

### Schematic steps of the scientific computation of physical processes:

```
                        ┌─────────────────────┐
┌──────────────────┐    │ mathematical model  │    ┌─────────────────────┐
│ physical problem │ →  │   parameters        │ →  │ numerical solution  │
└──────────────────┘    │   constants         │    └─────────────────────┘
                        │   initial values    │
                        └─────────────────────┘
       inherited error:                      computational error:
         - modeling error                      - truncation error
         - measurement error                   - rounding error
```

The **main objective** of numerical analysis is to give exact or approximate solutions of a mathematical problem using arithmetic operations (addition, subtraction, multiplication and division).

---

We get a **truncation error** when we replace the exact value of a mathematical expression with an approximate formula.

> **Example**
>
> The goal is to compute the function value of $f(x) = \sin x$ at $x$.
>
> Consider the Taylor-polynomial around 0 of degree 5:
>
> $$T_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!}.$$
>
> The Taylor's theorem yields
>
> $$f(x) = T_5(x) + \frac{f^{(6)}(\xi)}{6!}x^6.$$
>
> The truncation error is
>
> $$\frac{f^{(6)}(\xi)}{6!}x^6 = -\frac{\sin\xi}{6!}x^6.$$

---

The **rounding error** appears since real numbers can be stored in computers with finite digits accuracy.

The next notion we discuss related to a numerical algorithm is the **stability**. This notion is used in two meanings in numerics. We can talk about the **stability of a mathematical model** or about the **stability of a numerical method**.

---

> **Example**
>
> Consider the linear system
>
> $$7x + 505y = 940$$
> $$6x + 433y = 806.$$
>
> Its exact solution is $x = -10$ and $y = 2$. Next consider
>
> $$7x + 505y = 940$$
> $$6.01x + 433y = 806.$$
>
> Its solution is $x = 2.4691$ and $y = 1.8272$. We observe that 0.17% change in the size of the coefficient results in 124.7% and 8.6% change in the solutions.

We say that a mathematical problem is **correct** or **stable** or **well-conditioned**, if a "small" change in the parameters of the problem results only in "small" change in the solution of the problem. In the opposite case we say that the problem is **incorrect** or **ill-conditioned** or it is an **unstable problem**. The system in the previous example is incorrect.

---

We say that a numerical algorithm is **stable with respect to rounding errors** if the rounding errors do not influence the result of the computation significantly. If the computed result is significantly different from the true value, then we say that the **algorithm is unstable**.

> **Example**
>
> Consider the following three recursive sequences:
>
> $$
> \begin{aligned}
> x_n &= \frac{1}{3}x_{n-1}, & x_0 &= 1,\\
> y_n &= 2y_{n-1} - \frac{5}{9}y_{n-2}, & y_0 &= 1,\quad y_1 = \frac{1}{3},\\
> z_n &= \frac{13}{3}z_{n-1} - \frac{4}{3}z_{n-2}, & z_0 &= 1,\quad z_1 = \frac{1}{3}.
> \end{aligned}
> $$
>
> It is easy to show that $x_n = y_n = z_n = \frac{1}{3^n}$, i.e., the three sequences are algebraically equivalent. Next we use *single precision* floating point arithmetic:

---

| $n$ | $x_n$ | $y_n$ | $\|y_n - 1/3^n\|$ | $z_n$ | $\|z_n - 1/3^n\|$ |
|----|----------|----------|------------|-----------|------------|
| 2  | 0.111111 | 0.111111 | 2.2352e-08 | 0.111111  | 4.4703e-08 |
| 3  | 0.037037 | 0.037037 | 4.0978e-08 | 0.037037  | 1.8254e-07 |
| 4  | 0.012346 | 0.012346 | 6.9849e-08 | 0.012346  | 7.3109e-07 |
| 5  | 0.004115 | 0.004115 | 1.1688e-07 | 0.004118  | 2.9248e-06 |
| 6  | 0.001372 | 0.001372 | 1.9465e-07 | 0.001383  | 1.1699e-05 |
| 7  | 0.000457 | 0.000458 | 3.2442e-07 | 0.000504  | 4.6795e-05 |
| 8  | 0.000152 | 0.000153 | 5.4071e-07 | 0.000340  | 1.8718e-04 |
| 9  | 0.000051 | 0.000052 | 9.0117e-07 | 0.000800  | 7.4872e-04 |
| 10 | 0.000017 | 0.000018 | 1.5019e-06 | 0.003012  | 2.9949e-03 |
| 11 | 0.000006 | 0.000008 | 2.5032e-06 | 0.011985  | 1.1980e-02 |
| 12 | 0.000002 | 0.000006 | 4.1721e-06 | 0.047920  | 4.7918e-02 |
| 13 | 0.000001 | 0.000008 | 6.9535e-06 | 0.191674  | 1.9167e-01 |
| 14 | 0.000000 | 0.000012 | 1.1589e-05 | 0.766693  | 7.6669e-01 |
| 15 | 0.000000 | 0.000019 | 1.9315e-05 | 3.066773  | 3.0668e+00 |
| 16 | 0.000000 | 0.000032 | 3.2192e-05 | 12.267091 | 1.2267e+01 |
| 17 | 0.000000 | 0.000054 | 5.3653e-05 | 49.068363 | 4.9068e+01 |
| 18 | 0.000000 | 0.000089 | 8.9422e-05 | 196.273453| 1.9627e+02 |

---

> **Example (cont.):**
>
> Using a *double precision* floating point arithmetic the error of the 18th terms:
>
> $$|y_{18} - 1/3^{18}| = -2.5104e - 13 \qquad \text{and} \qquad |z_{18} - 1/3^{18}| = 2.3804e - 07.$$

---

In case of an algorithm which terminates in a finite number of steps we are usually interested in the **time complexity** or the **cost** of an algorithm. By this we mean the number of steps, or more precisely, the **number of arithmetic operations** needed to perform the algorithm.

> **Example**
>
> Evaluate numerically the polynomial $p(x) = 6x^4 - 3x^3 + 5x^2 + 8x - 10$ at the point $x$. It contains 4 additions/subtractions, 4 multiplications and 3 exponentials. The exponentials mean $3+2+1=6$ number of multiplications, i.e., altogether 10 multiplications are needed to apply the formula of $p$. But we can rewrite $p$ as follows:
>
> $$p(x) = 6x^4 - 3x^3 + 5x^2 + 8x - 10 = (((6x - 3)x + 5)x + 8)x - 10.$$
>
> This form of the polynomial requires only 4 additions/subtractions and 4 multiplications.

---

The previous method can be extended to polynomials of degree $n$:

$$a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0 = ((\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots)x + a_1)x + a_0$$

This formula requires only $n$ additions/subtractions and $n$ multiplications. This way of organizing a polynomial evaluation is called **Horner's method**.

**Algorithm: Horner's method**

```
INPUT:  n - degree of the polynomial
        a_n, a_{n-1}, ..., a_0 - coefficients of the polynomial
        x - argument
OUTPUT: p - function value of the polynomial at the argument x

p ← a_n
for i = n-1, ..., 0 do
    p ← a_i + px
end do
output(p)
```

---

It is also important to know the **space complexity** of an algorithm, which is the amount of the memory storage needed in the worst case at any point in the algorithm. When we work with an algorithm to solve a linear system with a $10 \times 10$ coefficient matrix, the storage cannot be a problem. But the same with a $10000 \times 10000$ dimensional matrix can be problematic. In case of algorithms working with a big amount of data, we prefer a method which requires less amount of memory space.

---

