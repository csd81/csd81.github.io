## 7.4. Gaussian Quadrature

In the previous section we have seen that the Newton–Cotes formulas give back the exact value of the integral for polynomials with certain degree. Now we would like to derive quadrature formulas with similar property. Consider the general quadrature formula

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i).
$$

We have the following statement:

**Theorem 7.10.** A quadrature formula

$$
Q(f) := \sum_{i=1}^{n} c_i f(x_i)
\tag{7.41}
$$

is exact for polynomials $p(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0$ of degree at most $m$ if and only if it is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$.

*Proof.* If $Q$ is exact for all polynomials with degree at most $m$, it certainly implies that it is exact for all monomials $x^i$ for all $i = 0, 1, \ldots, m$.

Suppose now that $Q$ is exact for the monomials $x^i$ for all $i = 0, 1, \ldots, m$. Then the linearity of the integral and the quadrature formula $Q$ yield that

$$
\begin{aligned}
\int_a^b a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0\,dx &= a_m\int_a^b x^m\,dx + a_{m-1}\int_a^b x^{m-1}\,dx + \cdots + a_0\int_a^b 1\,dx \\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \cdots + a_0 Q(1) \\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0). \qquad\square
\end{aligned}
$$

The quadrature formula $Q$ defined by (7.41) contains $2n$ number of parameters, $c_i, x_i$ ($i = 1, 2, \ldots, n$). The previous theorem indicates that such a quadrature formula can be exact for polynomials with degree at most $2n - 1$, since it also contains $2n$ coefficients. Then Theorem 7.10 yields that a quadrature formula $Q$ is exact for polynomials of degree at most $2n - 1$ if and only if the following $2n$ number of equations hold:

$$
\begin{aligned}
\int_a^b 1\,dx &= \sum_{i=1}^{n} c_i \\
\int_a^b x\,dx &= \sum_{i=1}^{n} c_i x_i \\
\int_a^b x^2\,dx &= \sum_{i=1}^{n} c_i x_i^2 \\
&\;\;\vdots \\
\int_a^b x^{2n-1}\,dx &= \sum_{i=1}^{n} c_i x_i^{2n-1}
\end{aligned}
\tag{7.42}
$$

The quadrature formula of the form (7.41) where the parameters are the solutions of the nonlinear system (7.42) is called **$n$-point Gaussian quadrature formula**.

Consider the special case when $n = 2$ and $[a, b] = [-1, 1]$. Then system (7.42) is equivalent to the system

$$
\begin{aligned}
2 &= c_1 + c_2 \\
0 &= c_1 x_1 + c_2 x_2 \\
\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\
0 &= c_1 x_1^3 + c_2 x_2^3.
\end{aligned}
$$

It can be checked that this system has a unique solution (apart from the order): $c_1 = c_2 = 1$ and $x_1 = -\frac{\sqrt{3}}{3}$, $x_2 = \frac{\sqrt{3}}{3}$. So the two-point Gaussian quadrature formula is

$$
\int_{-1}^{1} f(x)\,dx \approx f\left(-\frac{\sqrt{3}}{3}\right) + f\left(\frac{\sqrt{3}}{3}\right).
\tag{7.43}
$$

**Example 7.11.** We compute the approximation of the integral of $f(x) = e^x$ on the interval $[-1, 1]$. The Gaussian formula (7.43) yields

$$
\int_{-1}^{1} e^x\,dx \approx e^{-\frac{\sqrt{3}}{3}} + e^{\frac{\sqrt{3}}{3}} = 2.3426961.
$$

Comparing it with the exact value $e - 1/e = 2.350424$ we get that the error of the approximation is $0.0077062$, which is small, compared to the simplicity of the formula. $\quad\square$

We need the notion of orthogonal functions. The functions $f$ and $g$ are called **orthogonal** on the interval $[a, b]$ if

$$
\int_a^b f(x)g(x)\,dx = 0.
$$

We show that there exists a sequence of functions $(P_i)_{i=0,1,\ldots}$ which are pairwise orthogonal on the interval $[-1, 1]$, and $P_i$ is a polynomial of degree $i$. Let $P_0(x) := 1$ and $P_1(x) := x$. Then $P_0$ and $P_1$ are orthogonal on $[-1, 1]$. We are looking for $P_2$ in the form $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$. Then the requested orthogonality yields

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_0(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,1}\int_{-1}^{1} P_1(x)P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx,
\end{aligned}
$$

which gives

$$
a_{2,0} = -\frac{\int_{-1}^{1} x^2 P_0(x)\,dx}{\int_{-1}^{1} P_0^2(x)\,dx}.
$$

Similarly,

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx + a_{2,0}\int_{-1}^{1} P_0(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx,
\end{aligned}
$$

so

$$
a_{2,1} = -\frac{\int_{-1}^{1} x^2 P_1(x)\,dx}{\int_{-1}^{1} P_1^2(x)\,dx}.
$$

We found a unique $P_2$ of this form. We can continue this procedure. If $P_0, \ldots, P_i$ are already defined, then we are looking for $P_{i+1}$ in the form

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \cdots + a_{i+1,0} P_0(x).
\tag{7.44}
$$

Then, similarly to the previous computation, we get

$$
a_{i+1,j} = -\frac{\int_{-1}^{1} x^{i+1} P_j(x)\,dx}{\int_{-1}^{1} P_j^2(x)\,dx}, \qquad j = 0, 1, \ldots, i,
\tag{7.45}
$$

so $P_{i+1}$ can be defined uniquely. This method is called **Gram–Schmidt orthogonalization**, and the resulting polynomial $P_i$ is called **Legendre polynomial** of degree $i$. The formulas of the first five Legendre polynomials are:

$$
\begin{aligned}
P_0(x) &= 1, \\
P_1(x) &= x, \\
P_2(x) &= x^2 - \frac{1}{3}, \\
P_3(x) &= x^3 - \frac{3}{5}x, \\
P_4(x) &= x^4 - \frac{6}{7}x^2 + \frac{3}{35}.
\end{aligned}
$$

It can be shown that the Legendre polynomials satisfy the recursion

$$
P_{n+1}(x) = xP_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x).
\tag{7.46}
$$

The next theorem summarizes the most important properties of the Legendre polynomials.

**Theorem 7.12.** Let $P_i$ be the $i$th Legendre polynomial. Then

1. $P_i$ is orthogonal to any polynomial with degree at most $i - 1$.

2. $P_i$ is even if $i$ is even, and it is odd if $i$ is odd.

3. $P_i$ has $i$ distinct real roots in the interval $(-1, 1)$, and they are symmetric to the origin.

4. If $(p_i)_{i=0,1,\ldots}$ is a sequence of polynomials of degree (exactly) $i$, which are pairwise orthogonal, then $p_i(x) = c_i P_i(x)$ for all $i$ for some constant $c_i \neq 0$.

The next theorem shows that the mesh points of the $n$-point Gaussian quadrature formula defined on the interval $[-1, 1]$ are the roots of the $n$th-order Legendre polynomial $P_n$.

**Theorem 7.13.** Let $x_1, x_2, \ldots, x_n$ be the roots of the $n$th Legendre polynomial $P_n$, and let

$$
c_i = \int_{-1}^{1} \frac{(x - x_1)\cdots(x - x_{i-1})(x - x_{i+1})\cdots(x - x_n)}{(x_i - x_1)\cdots(x_i - x_{i-1})(x_i - x_{i+1})\cdots(x_i - x_n)}\,dx.
\tag{7.47}
$$

Then, for any polynomial $p$ of degree at most $2n - 1$, it follows

$$
\int_{-1}^{1} p(x)\,dx = \sum_{i=1}^{n} c_i p(x_i).
$$

The next result gives the truncation error of the Gaussian quadrature.

**Theorem 7.14.** Let $f \in C^{2n}[-1, 1]$. Then there exists $\xi \in (-1, 1)$ such that the $n$-point Gaussian quadrature formula satisfies

$$
\int_{-1}^{1} f(x)\,dx = \sum_{k=1}^{n} c_k f(x_k) + \frac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^{1} P_n^2(x)\,dx.
$$

It can be shown that the error term in the previous theorem has the form

$$
\frac{\pi f^{(2n)}(\xi)}{4^n (2n)!},
$$

which gives that if $f^{(2n)}$ is bounded for all $n$ with a bound independent of $n$, then the error of the Gaussian quadrature goes to 0 exponentially. Note that the error in the Newton–Cotes formulas tends to 0 only with polynomial speed if $n \to \infty$.

Table 7.6 presents the roots of the first several Legendre polynomials and the corresponding coefficients.

**Table 7.6:** The parameters of the Gaussian quadrature formulas

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

The Gaussian quadrature formulas can be applied to the case when the interval is $[-1, 1]$. But in case of an arbitrary interval $[a, b]$, the new variable $x = ((b - a)t + a + b)/2$ transforms the computation of the integral to the interval $[-1, 1]$:

$$
\int_a^b f(x)\,dx = \frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)dt.
$$

**Example 7.15.** Approximate the integral $\int_0^1 x^2 e^x\,dx$ using the two-point Gaussian quadrature:

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx &= \frac{1}{2}\int_{-1}^{1}\left(\frac{t + 1}{2}\right)^2 e^{(t+1)/2}\,dt \\
&\approx \frac{1}{2}\left(\left(\frac{-\sqrt{3}/3 + 1}{2}\right)^2 e^{(-\sqrt{3}/3 + 1)/2} + \left(\frac{\sqrt{3}/3 + 1}{2}\right)^2 e^{(\sqrt{3}/3 + 1)/2}\right) \\
&= 0.7119418.
\end{aligned}
$$

The error of this approximation is $0.0063400$. $\quad\square$

### Exercises

1. Apply the 2-point Gaussian quadrature to the integrals given in Exercise 1 of the previous section.

2. Apply the 3-, 4- and 5-point Gaussian quadrature formulas to the integrals given in Exercise 1 of the previous section.

---

*F. Hartung, University of Pannonia*
