## 1.1. The Main Objective and Notions of Numerical Analysis

In scientific computations the first step is the mathematical modeling of the physical process. This is the task of the particular scientific discipline (physics, chemistry, biology, economics, etc.). The resulting model frequently contains parameters, constants, initial data which are typically determined by observations or measurements. If the mathematical model and its parameters are given, then we can use it to answer some questions related to the physical problem. We can ask qualitative questions (Does the problem have a unique solution? Does the solution have a limit as the time goes to infinity? Is the solution periodic? etc.), or we can ask quantitative questions (What is the value of the physical variable at a certain time? What is the approximate solution of the model?). The qualitative questions are discussed in the related mathematical discipline, but the quantitative questions are the main topics of numerical analysis. The main objective of numerical analysis is to give exact or approximate solutions of a mathematical problem using arithmetic operations (addition, subtraction, multiplication and division). See Figure 1.1 below for the schematic steps of the scientific computation of physical processes.

The numerical value of a physical quantity computed by a process described in Figure 1.1 is, in general, not equal to the real value of the physical quantity. The sources of error we get is divided into the following two main categories: *inherited error* and *computational error*. The mathematical modeling is frequently a simplification of the physical reality, so we generate an inherited error when we replace the physical problem by a mathematical model. This kind of error is called *modeling error*. An other subclass of the inherited error is what we get when we determine the parameters of the mathematical model by measurements, so we use an approximate parameter value instead of the true one. This is called *measurement error*.

```
                        ┌─────────────────────┐
┌──────────────────┐    │ mathematical model  │    ┌─────────────────────┐
│ physical problem │ →  │   - parameters      │ →  │ numerical solution  │
└──────────────────┘    │   - constants       │    └─────────────────────┘
                        │   - initial values  │
                        └─────────────────────┘
       inherited error:                      computational error:
         - modeling error                      - truncation error
         - measurement error                   - rounding error
```

**Figure 1.1: Scientific computations**

The computational error is divided into two classes: *truncation error* and *rounding error*. We get a truncation error when we replace the exact value of a mathematical expression with an approximate formula.

**Example 1.1.** Suppose we need to compute the value of the function $f(x) = \sin x$ at a certain argument $x$. We can do it using arithmetic operations if instead of the function value $f(x)$ we compute, e.g., its Taylor-polynomial around 0 of degree 5: $T_5(x) = x - x^3/3! + x^5/5!$. The Taylor's theorem (Theorem 2.5 below) says that if $f(x)$ is replaced by $T_5(x)$, then the resulting error has the form $\dfrac{f^{(6)}(\xi)}{6!}x^6 = -\dfrac{\sin\xi}{6!}x^6$, where $\xi$ is a number between 0 and $x$. This is the truncation error of the approximation, which is small if $x$ is close to 0. $\square$

The rounding error appears since real numbers can be stored in computers with finite digits accuracy. Therefore, we almost always generate a rounding error when we store a real number in a computer. Also, after computing each arithmetic operations, the computer rounds the result to a number which can be stored in the computer (see Sections 1.2–1.4).

When we specify a numerical algorithm, the first thing we have to investigate is the truncation error, since a numerical value is useful only if we know how large is the error of the approximation. The next notion we discuss related to a numerical algorithm is the *stability*. This notion is used in two meanings in numerics. We can talk about the *stability of a mathematical model* or about the *stability of a numerical method*. First we consider an example.

**Example 1.2.** Consider the linear system

$$8x + 917y = 1794$$
$$7x + 802y = 1569.$$

Its exact solution is $x = -5$ and $y = 2$. But if we change the coefficient of the variable $x$ in the second equation to 7.01, then the solution of the corresponding system

$$8x + 917y = 1794$$
$$7.01x + 802y = 1569$$

is $x = -1.232562589$ and $y = 1.967132499$ (up to 9 decimal digits precision). We observe that 0.14% change in the size of a single coefficient results in 75.3% and 1.6% changes in the solutions, rspectively. $\square$

We say that a mathematical problem is *correct* or *stable* or *well-conditioned*, if a "small" change in the parameters of the problem results only in "small" change in the solution of the problem. In the opposite case we say that the problem is *incorrect* or *ill-conditioned* or *unstable problem*. The linear system in the previous example is an incorrect mathematical problem.

We say that a numerical algorithm is *stable with respect to rounding errors* if the rounding errors do not influence the result of the computation significantly. If the computed result is significantly different from the true value, then we say that the *algorithm is unstable*. Next we present an example of an an unstable algorithm.

**Example 1.3.** Consider the following three recursive sequences:

$$
\begin{aligned}
x_n &= \frac{1}{3}x_{n-1}, & x_0 &= 1,\\
y_n &= 2y_{n-1} - \frac{5}{9}y_{n-2}, & y_0 &= 1,\quad y_1 = \frac{1}{3},\\
z_n &= \frac{13}{3}z_{n-1} - \frac{4}{3}z_{n-2}, & z_0 &= 1,\quad z_1 = \frac{1}{3}.
\end{aligned}
\tag{1.1}
$$

It is easy to show that all the three recursions generate the same sequence $x_n = y_n = z_n = \frac{1}{3^n}$, i.e., the three sequences are algebraically equivalent. But in practice, the numerical computations of the three recursions give different results. In Table 1.1 the first 18 terms of the sequences are displayed. The computations are performed using single precision floating point arithmetic in order to enlarge the effect of the rounding errors. We observe that the sequence $x_n$ produce the numerical values of $1/3^n$, but the numerical values of $y_n$ and $z_n$ are different from it due to the accumulation of the rounding error. Both sequences has rounding error, but for the sequence $z_n$ the error increases so rapidly, that in the 18th term it is of order $10^2$. In this case the numerical values of $z_n$ do not converge to 0. We experience that the sequence $x_n$ is a stable method, but $z_n$ is an unstable method to compute the values of $1/3^n$.

To check that the errors we observed in the previous computation are the consequence of the rounding errors, we repeated the generation of the three sequences but now using a double precision floating point arithmetic. We present here the error of the 18th terms: $|y_{18} - 1/3^{18}| = -2.5104e - 13$ and $|z_{18} - 1/3^{18}| = 2.3804e - 07$. We can observe that the magnitude of the errors are much smaller in this case. $\square$

**Table 1.1:**

| $n$ | $x_n$ | $y_n$ | $\|y_n - 1/3^n\|$ | $z_n$ | $\|z_n - 1/3^n\|$ |
|----|----------|----------|------------|-----------|------------|
| 2  | 0.111111 | 0.111111 | 2.2352e-08 | 0.111111  | 4.4703e-08 |
| 3  | 0.037037 | 0.037037 | 4.0978e-08 | 0.037037  | 1.8254e-07 |
| 4  | 0.012346 | 0.012346 | 6.9849e-08 | 0.012346  | 7.3109e-07 |
| 5  | 0.004115 | 0.004115 | 1.1688e-07 | 0.004118  | 2.9249e-06 |
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

In case of an algorithm which terminates in a finite number of steps we are usually interested in the *time complexity* or the *cost* of an algorithm. By this we mean the number of steps, or more precisely, the *number of arithmetic operations* needed to perform the algorithm. Consider first an example.

**Example 1.4.** Evaluate numerically the polynomial $p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10$ at the point $x$. Certainly, we can do it using the formula of $p$ literally. It contains 4 additions/subtractions, 4 multiplications and 3 exponentials. The exponentials mean $3+2+1=6$ number of multiplications, i.e., altogether 10 multiplications are needed to apply the formula of $p$. But we can rewrite $p$ as follows:

$$p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 = (((5x - 8)x + 2)x + 4)x - 10.$$

This form of the polynomial requires only 4 additions/subtractions and 4 multiplications. $\square$

The previous method can be extended to polynomials of degree $n$:

$$a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0 = ((\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots)x + a_1)x + a_0$$

This formula requires only $n$ additions/subtractions and $n$ multiplications. This way of organizing a polynomial evaluation is called *Horner's method*. The method can be defined by the following algorithm.

**Algorithm 1.5. Horner's method**

```
INPUT:  n - degree of the polynomial
        a_n, a_{n-1}, ..., a_0 - coefficients of the polynomial
        x - argument
OUTPUT: y - function value of the polynomial at the argument x

y ← a_n
for i = n-1, ..., 0 do
    y ← yx + a_i
end do
output(y)
```

The execution of a multiplication or division requires more time than that of an addition or subtraction. Therefore, in numerical analysis, we count the number of multiplications and divisions separately to the number of additions and subtractions.

It is also important to know the *space complexity* of an algorithm, which is the amount of the memory storage needed in the worst case at any point in the algorithm. When we work with an algorithm to solve a linear system with a $10 \times 10$ coefficient matrix, the storage cannot be a problem. But the same with a $10000 \times 10000$ dimensional matrix can be problematic. In case of algorithms working with a big amount of data, we prefer a method which requires less amount of memory space. For example, if in a matrix nonzero elements appear only in the main diagonal and in some diagonals above and below, then it is practical to use an algorithm which utilizes the special structure of the data, and does not store the unnecessary zeros in the matrix during the computation. We will see such methods in Section 3.5 below.

