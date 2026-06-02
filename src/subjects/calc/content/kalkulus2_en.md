# Calculus for IT Students II.

István Győri, Mihály Pituk


# Chapter 1

# Infinite series

## 1.1. Convergence of infinite series

Let $\mathbb{N}$ be the set of non-negative integers, and $\mathbb{N}^+$ the set of positive integers. We denote the set of real numbers by $\mathbb{R}$, and the set of complex numbers by $\mathbb{C}$.

**1.1.1. Definition.** Let a real sequence $\{a_k\}_{k=0}^{\infty}$ be given. The infinite sum

$$\sum_{k=0}^{\infty} a_k = a_0 + a_1 + a_2 + \ldots$$

is called an *infinite series*. The sum

$$s_n = \sum_{k=0}^{n} a_k = a_0 + a_1 + \cdots + a_n$$

is called the *$n$-th partial sum* of the series $\sum_{k=0}^{\infty} a_k$. If the sequence $\{s_n\}_{n=0}^{\infty}$ is convergent, then the infinite series $\sum_{k=0}^{\infty} a_k$ is also said to be *convergent*, and the finite limit

$$s = \lim_{n\to\infty} s_n$$

is called the *sum of the series*, and is also denoted by the symbol

$$\sum_{k=0}^{\infty} a_k.$$

Thus

$$\sum_{k=0}^{\infty} a_k = \lim_{n\to\infty} \sum_{k=0}^{n} a_k.$$

If the sequence $\{s_n\}_{n=0}^{\infty}$ is divergent, then the series $\sum_{k=0}^{\infty} a_k$ is also said to be *divergent*.


If $a_n \geq 0$ for all $n \in \mathbb{N}$, then the sequence of partial sums $\{s_n\}_{n=0}^{\infty}$ is monotonically increasing. Therefore, a series with non-negative terms is convergent if and only if the sequence $\{s_n\}_{n=0}^{\infty}$ is bounded from above.

Let $m \in \mathbb{N}^+$ and $\{b_i\}_{i=m}^{\infty}$ be a real sequence. The infinite series

$$\sum_{i=m}^{\infty} b_i = b_m + b_{m+1} + b_{m+2} + \ldots$$

is identical to the series indexed on $\mathbb{N}$

$$\sum_{k=0}^{\infty} b_{k+m}$$

and its sum is:

$$\sum_{i=m}^{\infty} b_i = \lim_{n\to\infty} \sum_{i=m}^{n} b_i,$$

provided that the limit exists and is finite.

**1.1.2. Example.**

$$\sum_{k=1}^{\infty} \frac{1}{k(k+1)} = \lim_{n\to\infty} \sum_{k=1}^{n} \frac{1}{k(k+1)} = \lim_{n\to\infty} \sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+1}\right)$$
$$= \lim_{n\to\infty} \left(1 - \frac{1}{n+1}\right) = 1.$$

**1.1.3. Example.** The series $\sum_{k=0}^{\infty} (-1)^k$ is divergent, because the sequence of partial sums

$$s_n = \begin{cases} 1, & \text{if } n \text{ is odd} \\ 0, & \text{if } n \text{ is even} \end{cases}$$

is divergent.

## 1.2. The geometric series

**1.2.1. Definition.** Let $a \in \mathbb{R}$ and $q \in \mathbb{R}$ be given. The series

$$\sum_{k=0}^{\infty} aq^k = a + aq + aq^2 + aq^3 + \ldots$$

is called a *geometric series*. The number $a$ is the first term of the series, and the number $q$ is the *quotient (ratio)* of the series.

The relation

$$\sum_{k=0}^{n} aq^k = \begin{cases} a\dfrac{1-q^{n+1}}{1-q}, & \text{if } q \neq 1 \text{ and } n \in \mathbb{N}, \\ (n+1)a, & \text{if } q = 1 \text{ and } n \in \mathbb{N}, \end{cases}$$

as well as the convergence properties of the geometric sequence $\{q^n\}_{n=0}^{\infty}$ yield the following:

**1.2.2. Theorem** (Convergence of the geometric series)**.** Let $a \in \mathbb{R} \setminus \{0\}$ and $q \in \mathbb{R}$. The geometric series $\sum_{k=0}^{\infty} aq^k$ is convergent if and only if $|q| < 1$, and in case of convergence its sum is $\dfrac{a}{1-q}$.

## 1.3. Operations with convergent series

**1.3.1. Theorem.** If the series $\sum_{k=0}^{\infty} a_k$ and $\sum_{k=0}^{\infty} b_k$ are convergent with sums $s$ and $t$ respectively, and $\alpha$ and $\beta$ are real numbers, then the series $\sum_{k=0}^{\infty} (\alpha a_k + \beta b_k)$ is also convergent, and its sum is $\alpha s + \beta t$, that is

$$\sum_{k=0}^{\infty} (\alpha a_k + \beta b_k) = \alpha \sum_{k=0}^{\infty} a_k + \beta \sum_{k=0}^{\infty} b_k.$$

**1.3.2. Example.** From the previous theorem and the convergence properties of the geometric series it follows that

$$\sum_{k=0}^{\infty} \frac{2^k + 3^k}{5^k} = \sum_{k=0}^{\infty} \left(\left(\frac{2}{5}\right)^k + \left(\frac{3}{5}\right)^k\right) = \sum_{k=0}^{\infty} \left(\frac{2}{5}\right)^k + \sum_{k=0}^{\infty} \left(\frac{3}{5}\right)^k = \frac{5}{3} + \frac{5}{2} = \frac{25}{6}.$$

## 1.4. Necessary condition for convergence

**1.4.1. Theorem** (Necessary condition for convergence)**.** If the series $\sum_{k=0}^{\infty} a_k$ is convergent, then $\lim_{k\to\infty} a_k = 0$.

**1.4.2. Example.** The series

$$\sum_{k=1}^{\infty} \frac{k}{k+1}$$

is divergent, because

$$\frac{n}{n+1} = \frac{1}{\frac{1}{n}+1} \to 1 \neq 0, \qquad \text{if } n \to \infty.$$

**1.4.3. Definition.** The series

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

is called the *harmonic series*.

We will show that the harmonic series is divergent even though $\frac{1}{n} \to 0$. Thus the condition $\lim_{n\to\infty} a_n = 0$ is a necessary, but not sufficient condition for the convergence of the series $\sum_{k=0}^{\infty} a_k$.

## 1.5. Absolute and conditional convergence

**1.5.1. Definition.** The series $\sum_{k=0}^{\infty} a_k$ is said to be *absolutely convergent* if the series

$$\sum_{k=0}^{\infty} |a_k|$$

is convergent.

If the series $\sum_{k=0}^{\infty} a_k$ is convergent, but not absolutely convergent, then it is called *conditionally convergent*.

The connection between convergent and absolutely convergent series is the following.

**1.5.2. Theorem.** If a series is absolutely convergent, then it is also convergent.

The converse of the theorem is not true. We will see that the series

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

is convergent, but since

$$\left|(-1)^k \frac{1}{k}\right| = \frac{1}{k}, \qquad k \in \mathbb{N}^+,$$

and the harmonic series $\sum_{k=1}^{\infty} \frac{1}{k}$ is divergent, therefore the series $\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$ is not absolutely convergent. Thus the series $\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$ is conditionally convergent.

## 1.6. Convergence tests

We give sufficient conditions for the convergence or divergence of infinite series. To formulate them, we need the following concepts.

**1.6.1. Definition.** The number $t \in \overline{\mathbb{R}} = \mathbb{R} \cup \{+\infty, -\infty\}$ is called a *limit point (accumulation point)* of the sequence $\{a_n\}_{n=0}^{\infty}$, if the sequence $\{a_n\}_{n=0}^{\infty}$ has a subsequence $\{a_{n_k}\}_{k=0}^{\infty}$ for which

$$\lim_{k\to\infty} a_{n_k} = t.$$

The following property can be proven.

**1.6.2. Theorem.** Among the limit points of any real sequence $\{a_n\}_{n=0}^{\infty}$ in $\overline{\mathbb{R}}$, there is a largest and a smallest one.

**1.6.3. Example.** The largest limit point of the sequence $\{(-1)^n\}_{n=0}^{\infty}$ is $1$, and its smallest limit point is $-1$. The largest limit point of the sequence $\{(-1)^n n\}_{n=0}^{\infty}$ is $+\infty$, and its smallest limit point is $-\infty$.

**1.6.4. Definition.** The largest (smallest) limit point of the sequence $\{a_n\}_{n=0}^{\infty}$ is called the *limit superior (limit inferior)* of the sequence, and is denoted by the symbol

$$\limsup_{n\to\infty} a_n \qquad \left(\liminf_{n\to\infty} a_n\right)$$

It is obvious that

$$\liminf_{n\to\infty} a_n \leq \limsup_{n\to\infty} a_n.$$

It can also be shown that $\lim_{n\to\infty} a_n$ exists in $\overline{\mathbb{R}}$ if and only if

$$\liminf_{n\to\infty} a_n = \limsup_{n\to\infty} a_n.$$

The promised convergence tests are the following:

**1.6.5. Theorem** (Ratio test)**.** Suppose that $|a_n| > 0$ with finitely many exceptions. If

$$\limsup_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} < 1,$$

then the series $\sum_{k=0}^{\infty} a_k$ is absolutely convergent. If

$$\liminf_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} > 1,$$

then the series $\sum_{k=0}^{\infty} a_k$ is divergent.

Specifically, if the limit (finite or infinite)

$$L = \lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|}$$

exists, then for $L < 1$ the series $\sum_{k=0}^{\infty} a_k$ is absolutely convergent, and for $L > 1$ it is divergent.

We emphasize that if

$$\lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} = 1,$$

then the ratio test cannot be used to determine the convergence properties of the series $\sum_{k=0}^{\infty} a_k$.

**1.6.6. Example.** The series

$$\sum_{k=1}^{\infty} \frac{k^k}{k!}$$

is divergent, because

$$\frac{\frac{(n+1)^{n+1}}{(n+1)!}}{\frac{n^n}{(n)!}} = \frac{(n+1)^{(n+1)} n!}{n^n (n+1)!} = \left(\frac{n+1}{n}\right)^n = \left(1 + \frac{1}{n}\right)^n \to e > 1, \qquad \text{if } n \to \infty.$$

**1.6.7. Theorem** (Root test)**.** If

$$\limsup_{n\to\infty} \sqrt[n]{|a_n|} < 1,$$

then the series $\sum_{k=0}^{\infty} a_k$ is absolutely convergent. If

$$\liminf_{n\to\infty} \sqrt[n]{|a_n|} > 1,$$

then the series $\sum_{k=0}^{\infty} a_k$ is divergent.

Specifically, if the limit (finite or infinite)

$$L = \lim_{n\to\infty} \sqrt[n]{|a_n|}$$

exists, then for $L < 1$ the series $\sum_{k=0}^{\infty} a_k$ is absolutely convergent, and for $L > 1$ it is divergent.

If

$$\lim_{n\to\infty} \sqrt[n]{|a_n|} = 1,$$

then the root test cannot be used to determine the convergence properties of the series $\sum_{k=0}^{\infty} a_k$.

**1.6.8. Example.** The series

$$\sum_{k=1}^{\infty} \frac{k}{2^k}$$

is convergent, because

$$\sqrt[n]{\frac{n}{2^n}} = \frac{\sqrt[n]{n}}{2} \to \frac{1}{2} < 1, \qquad \text{if } n \to \infty.$$

**1.6.9. Theorem** (Integral test)**.** Let $f : [0,\infty) \to (0,\infty)$ be continuous, monotonically decreasing and positive. Then the series

$$\sum_{k=0}^{\infty} f(k)$$

is convergent if and only if the improper integral $\int_0^{\infty} f$ is convergent.

The statement remains true even if the number $0$ is replaced by an arbitrary number $m \in \mathbb{N}^+$.

**1.6.10. Example.** The harmonic series

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

is divergent, because

$$\int_1^{\infty} \frac{1}{t}\, dt = \lim_{x\to\infty} \int_1^{x} \frac{1}{t}\, dt = \lim_{x\to\infty} \ln x = \infty.$$

Also using the integral test, one can show:

**1.6.11. Theorem.** If $\alpha > 1$, then the series

$$\sum_{k=1}^{\infty} \frac{1}{k^{\alpha}}$$

is convergent, and if $\alpha \leq 1$, then it is divergent.

**1.6.12. Definition.** The series

$$\sum_{k=1}^{\infty} \frac{1}{k^{\alpha}}, \qquad \alpha \in (0,1) \cup (1,\infty)$$

is called a *hyperharmonic series*.

**1.6.13. Theorem** (Comparison test)**.** If

$$|a_k| \leq b_k \qquad \text{with finitely many exceptions,}$$

and the series $\sum_{k=0}^{\infty} b_k$ is convergent, then the series $\sum_{k=0}^{\infty} a_k$ is absolutely convergent. If

$$a_k \geq b_k \geq 0 \qquad \text{with finitely many exceptions,}$$

and the series $\sum_{k=0}^{\infty} b_k$ is divergent, then the series $\sum_{k=0}^{\infty} a_k$ is also divergent.

From the comparison test, the following can be easily derived:

**1.6.14. Theorem.** If $b_k > 0$ with finitely many exceptions and for some number $L \in (0,\infty)$

$$\lim_{k\to\infty} \frac{a_k}{b_k} = L,$$

then the series $\sum_{k=0}^{\infty} a_k$ and $\sum_{k=0}^{\infty} b_k$ are either both convergent, or both divergent.

**1.6.15. Example.** The series

$$\sum_{k=0}^{\infty} \frac{k+2}{k^2 + 2k + 5}$$

is divergent, because

$$\frac{\frac{k+2}{k^2+2k+5}}{\frac{1}{k}} = \frac{k(k+2)}{k^2 + 2k + 5} \to 1, \qquad \text{if } k \to \infty,$$

and the series

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

(harmonic series) is divergent.

**1.6.16. Definition.** Let $\{a_k\}_{k=0}^{\infty}$ be a sequence of positive terms. Then the series

$$\sum_{k=0}^{\infty} (-1)^k a_k \qquad \text{and} \qquad \sum_{k=0}^{\infty} (-1)^{k+1} a_k$$

are called *alternating series*.

It is sufficient to examine only the first series, because the second is $-1$ times the first.

About the convergence of alternating series we have the following:

**1.6.17. Theorem** (Leibniz's test)**.** If $\{a_k\}_{k=0}^{\infty}$ is a monotonically decreasing sequence of positive terms, and $\lim_{k\to\infty} a_k = 0$, then the alternating series

$$\sum_{k=0}^{\infty} (-1)^k a_k$$

is convergent.

**1.6.18. Example.** From Leibniz's test, by choosing $a_k = \dfrac{1}{k}$ ($k \in \mathbb{N}^+$), we get that the series

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

is convergent. We will see later that

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k} = -\ln 2.$$

## 1.7. Power series

**1.7.1. Definition.** Let a number $x_0 \in \mathbb{R}$ and a real sequence $\{a_k\}_{k=0}^{\infty}$ be given. The function

$$\sum_{k=0}^{\infty} a_k (x - x_0)^k = a_0 + a_1(x - x_0) + a_2(x - x_0)^2 + \ldots$$

is called a *power series around $x_0$*. The number $x_0$ is the *center* of the power series, and $x$ is the real *variable*.

**1.7.2. Definition.** The *domain of convergence* of a power series is the set

$$K = \left\{ c \in \mathbb{R} \;\middle|\; \text{the numerical series } \sum_{k=0}^{\infty} a_k (c - x_0)^k \text{ is convergent} \right\}.$$

It is obvious that $x_0 \in K$, thus $K \neq \emptyset$. Our goal is to describe the domain of convergence. In this regard, the following is of fundamental importance:

**1.7.3. Theorem** (Abel's lemma)**.** If for some number $c \neq x_0$ the numerical series

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

is convergent, then for all $x$ for which $|x - x_0| < |c - x_0|$ the numerical series

$$\sum_{k=0}^{\infty} a_k (x - x_0)^k$$

is absolutely convergent.

From Abel's lemma follows the following:

**1.7.4. Theorem.** Let $K$ be the domain of convergence of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$, and

$$r = \sup\{ |c - x_0| \mid c \in K \} \in [0, \infty].$$

If $r = 0$, then $K = \{x_0\}$. If $r = +\infty$, then for all $c \in \mathbb{R}$ the series

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

is absolutely convergent, and thus $K = \mathbb{R}$. If $r \in (0, \infty)$, then for all $c$ for which $|c - x_0| < r$ ($|c - x_0| > r$) the series

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

is absolutely convergent (divergent), and therefore

$$(x_0 - r, x_0 + r) \subset K \subset [x_0 - r, x_0 + r].$$

Since the domain of convergence of a power series is an interval apart from the case $r = 0$, the name *interval of convergence* is also used instead of the domain of convergence.

**1.7.5. Definition.** The number $r$ in the previous theorem is called the *radius of convergence* of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$.

To determine the radius of convergence, the following serves:

**1.7.6. Theorem** (Cauchy–Hadamard formula)**.** Let $r$ be the radius of convergence of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$, and

$$\rho = \limsup_{k\to\infty} \sqrt[k]{|a_k|}.$$

Then

$$r = \begin{cases} 0, & \text{if } \rho = +\infty \\ \dfrac{1}{\rho}, & \text{if } \rho \in (0, \infty) \\ +\infty, & \text{if } \rho = 0 \end{cases}.$$

**1.7.7. Example.** The radius of convergence of the power series around $-1$

$$\sum_{k=1}^{\infty} \frac{(x+1)^k}{k}$$

is $r = 1$, because

$$\rho = \limsup_{k\to\infty} \sqrt[k]{\frac{1}{k}} = \lim_{k\to\infty} \frac{1}{\sqrt[k]{k}} = 1.$$

For the domain of convergence $K$ of the power series, the relation

$$(-2, 0) \subset K \subset [-2, 0]$$

holds. Since the series obtained for $x = 0$

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

is divergent (harmonic series), and the series obtained for $x = -2$

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

is convergent (according to Leibniz's test), therefore

$$K = [-2, 0).$$

To determine the domain of convergence of a power series, the following is often well usable:

**1.7.8. Theorem.** Let $r$ be the radius of convergence of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$. Suppose that $a_k \neq 0$ with finitely many exceptions, and for some number $\lambda \in [0, \infty]$

$$\lim_{k\to\infty} \frac{|a_{k+1}|}{|a_k|} = \lambda.$$

Then

$$r = \begin{cases} 0, & \text{if } \lambda = +\infty \\ \dfrac{1}{\lambda}, & \text{if } \lambda \in (0, \infty) \\ +\infty, & \text{if } \lambda = 0 \end{cases}.$$

**1.7.9. Example.** The radius of convergence of the power series around $0$

$$\sum_{k=0}^{\infty} \frac{x^k}{k!}$$

is $r = +\infty$, because

$$\lambda = \lim_{k\to\infty} \frac{\frac{1}{(k+1)!}}{\frac{1}{k!}} = \lim_{k\to\infty} \frac{1}{k+1} = 0.$$

Therefore the domain of convergence is $K = \mathbb{R}$.

## 1.8. Properties of the sum function

**1.8.1. Definition.** Let $K$ be the domain of convergence of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$. The function $s : K \to \mathbb{R}$ defined by the formula

$$s(x) = \sum_{k=0}^{\infty} a_k (x - x_0)^k, \qquad x \in K,$$

is called the *sum function* of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$.

The more important properties of the sum function are described by the following theorems.

**1.8.2. Theorem** (Continuity of the sum function)**.** If the radius of convergence of a power series is positive, then the sum function of the power series is continuous on its interval of convergence.

**1.8.3. Theorem** (Term-by-term differentiation)**.** If the radius of convergence $r$ of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ is positive, then the sum function $s$ of the power series is infinitely differentiable in the interior of the interval of convergence, and its $n$-th derivative can be obtained by $n$ times term-by-term differentiation of the power series, that is

$$s'(x) = \sum_{k=1}^{\infty} a_k k (x - x_0)^{k-1},$$
$$s''(x) = \sum_{k=2}^{\infty} a_k k(k-1) (x - x_0)^{k-2},$$
$$\vdots$$
$$s^{(n)}(x) = \sum_{k=n}^{\infty} a_k k(k-1)\ldots(k-n+1)(x - x_0)^{k-n},$$

whenever $|x - x_0| < r$.

**1.8.4. Example.** We have already seen that the interval of convergence of the power series

$$\sum_{k=1}^{\infty} \frac{(x+1)^k}{k}$$

is the interval $[-2, 0)$. Therefore the function

$$s(x) = \sum_{k=1}^{\infty} \frac{(x+1)^k}{k}, \qquad x \in [-2, 0),$$

is differentiable on $(-2, 0)$, and here

$$s'(x) = \sum_{k=1}^{\infty} (x+1)^{k-1} = -\frac{1}{x},$$

based on the sum formula of the geometric series. Since $s(-1) = 0$, according to the Newton-Leibniz rule, for all $x \in (-2, 0)$

$$s(x) = s(-1) + \int_{-1}^{x} s'(t)\, dt = -\int_{-1}^{x} \frac{1}{t}\, dt = -\left[\ln|t|\right]_{-1}^{x} = -\ln|x|.$$

The function $s$ is right-continuous at $-2$, therefore

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k} = s(-2) = \lim_{x\to -2+} s(x) = -\ln 2.$$

**1.8.5. Theorem** (Term-by-term integration)**.** If the radius of convergence of the power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ is positive and $[a, b]$ is part of the interval of convergence of the power series, then the sum function $s$ of the power series is term-by-term integrable on $[a, b]$, that is

$$\int_a^b s(x)\, dx = \sum_{k=0}^{\infty} \int_a^b a_k (x - x_0)^k\, dx = \sum_{k=0}^{\infty} a_k \left[\frac{(x - x_0)^{k+1}}{k+1}\right]_a^b.$$

## 1.9. Taylor series, Taylor polynomial

Suppose that the function $f$ can be expanded into a power series around $x_0$, that is, there exists a power series $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ such that the radius of convergence $r$ of the power series is positive, and

$$f(x) = \sum_{k=0}^{\infty} a_k (x - x_0)^k, \qquad \text{whenever } |x - x_0| < r.$$

From the theorem on term-by-term differentiation it follows that then $f$ is infinitely differentiable, and for all $k \in \mathbb{N}$

$$a_k = \frac{f^{(k)}(x_0)}{k!}.$$

(By definition $0! = 1$.) This fact motivates the introduction and examination of the following series.

**1.9.1. Definition.** Suppose that the function $f$ is infinitely differentiable at the point $x_0 \in D(f)$. The power series

$$T(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k$$

is called the *Taylor series of the function $f$ around $x_0$*. The $n$-th partial sum of the power series

$$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k$$

is called the *$n$-th Taylor polynomial of the function $f$ around $x_0$*. In the case $x_0 = 0$, the name *Maclaurin series* or *Maclaurin polynomial* is also used.

The difference

$$R_n(x) = f(x) - T_n(x)$$

is called the *$n$-th remainder of the function $f$ around $x_0$*.

**1.9.2. Example.** For all $k \in \mathbb{N}$ $\exp^{(k)} = \exp$. Therefore the Taylor series of the $\exp$ function around $0$ is

$$T(x) = \sum_{k=0}^{\infty} \frac{x^k}{k!}.$$

We have already seen that this power series is absolutely convergent at every point of the number line.

## 1.10. Taylor's theorem

To formulate Taylor's theorem, we need the following notation.

**1.10.1. Definition.** For any $x_0, x \in \mathbb{R}$, $x \neq x_0$

$$[x_0; x] = \begin{cases} [x_0, x], & \text{if } x_0 < x \\ [x, x_0], & \text{if } x < x_0. \end{cases}$$

We define the open interval $(x_0; x)$ similarly.

**1.10.2. Theorem** (Taylor's theorem)**.** Let $x_0, x \in \mathbb{R}$, $x \neq x_0$. If for some $n \in \mathbb{N}$ $f^{(n)}$ is continuous on the interval $[x_0; x]$ and differentiable on $(x_0; x)$, then there exists $c \in (x_0; x)$ such that

$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x - x_0)^{n+1}.$$

We note that in the case $n = 0$, Taylor's theorem reduces to Lagrange's theorem.

**1.10.3. Definition.** The form of the remainder $R_n(x)$ appearing in Taylor's theorem is called the *Lagrange form of the remainder*.

Taylor's theorem is often well usable for the approximate calculation of function values.

**1.10.4. Definition.** For any $n \in \mathbb{N}$ the $n$-th Taylor polynomial of the $\exp$ function around $0$ is

$$T_n(x) = \sum_{k=0}^{n} \frac{x^k}{k!}.$$

Therefore if the value of the number $e = \exp 1$ is substituted with the value of the Taylor polynomial

$$T_n(1) = \sum_{k=0}^{n} \frac{1}{k!}$$

then according to Taylor's theorem there exists $c \in (0, 1)$ such that the difference between the exact value of $e = \exp 1$ and the "approximate" value $T_n(1)$ can be written in the form

$$\exp(1) - T_n(1) = R_n(1) = \frac{e^c}{(n+1)!}$$

Since $c < 1$, therefore

$$\frac{e^c}{(n+1)!} < \frac{e}{(n+1)!} < \frac{3}{(n+1)!}.$$

Therefore if we want the distance between the true and the approximate value to be less than $10^{-2}$, then it is sufficient to choose the number $n$ such that

$$\frac{3}{(n+1)!} < \frac{1}{100},$$

that is, greater than 4. Thus

$$T_5(1) = 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} = 2.716$$

approximates the number $e$ with an accuracy of $10^{-2}$ already.

## 1.11. Notable power series

Taylor's theorem is also well usable for expanding certain functions into power series. A consequence of Taylor's theorem:

**1.11.1. Theorem.** Let $(a, b) \subset \mathbb{R}$. Suppose that $f$ is infinitely differentiable on $(a, b)$ and there exists $M \in (0, \infty)$ such that for all $n \in \mathbb{N}$ $|f^{(n)}| \leq M$ on $(a, b)$. Then for any $x$, $x_0 \in (a, b)$

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k.$$

From the previous theorem, some notable power series can easily be obtained.

**1.11.2. Theorem** (Power series of the $\exp$ function)**.** For any $x \in \mathbb{R}$

$$\exp x = \sum_{k=0}^{\infty} \frac{x^k}{k!}.$$

**1.11.3. Theorem** (Power series of the $\sin$ function)**.** For any $x \in \mathbb{R}$

$$\sin x = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}.$$

**1.11.4. Theorem** (Power series of the $\cos$ function)**.** For any $x \in \mathbb{R}$

$$\cos x = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}.$$

## 1.12. Complex power series

The definition of the convergence of complex sequences and series, as well as the domain of convergence of complex power series is obtained by replacing $\mathbb{R}$ with $\mathbb{C}$ in the corresponding definition of real sequences, series, or power series. The rules of limit calculation for sequences and the convergence tests for series can also be carried over to the complex case, apart from those referring to monotonicity and ordering relations. The situation is similar with the domain of convergence of complex power series. If $\{c_k\}_{k=0}^{\infty}$ is a sequence of complex numbers and $z_0 \in \mathbb{C}$, then the domain of convergence of the complex variable power series

$$\sum_{k=0}^{\infty} c_k (z - z_0)^k$$

can be characterized similarly to that of real power series. Specifically, if

$$\rho = \limsup_{k\to\infty} \sqrt[k]{|c_k|},$$

then the radius of convergence of the power series $\sum_{k=0}^{\infty} c_k (z - z_0)^k$ is

$$r = \begin{cases} 0, & \text{if } \rho = +\infty \\ \dfrac{1}{\rho}, & \text{if } \rho \in (0, \infty), \\ +\infty & \text{if } \rho = 0 \end{cases}$$

that is if $|z - z_0| < r$, then the series $\sum_{k=0}^{\infty} c_k (z - z_0)^k$ is absolutely convergent, and if $|z - z_0| > r$, then it is divergent.

The results on the power series form of the exp, sin and cos functions provide an opportunity to extend these functions to complex numbers.

**1.12.1. Definition.** For any $z \in \mathbb{C}$ let

$$\exp z = \sum_{k=0}^{\infty} \frac{z^k}{k!},$$

$$\sin z = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k+1}}{(2k+1)!},$$

$$\cos z = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k}}{(2k)!}.$$

Similarly to the real exp function, the notation $\exp z = e^z$ is also used for $z \in \mathbb{C}$.

Finally, we present three notable identities regarding the complex exp, sin and cos functions.

**1.12.2. Theorem** (Euler formulas)**.** *At any point* $z \in \mathbb{C}$

$$e^{iz} = \cos z + i \sin z,$$

$$\sin z = \frac{e^{iz} - e^{-iz}}{2i},$$

$$\cos z = \frac{e^{iz} + e^{-iz}}{2}.$$

Combining the first Euler formula with the trigonometric form of a complex number gives the *exponential form* of the complex number $z \neq 0$:

$$z = re^{i\varphi},$$

where $r = |z|$ and $\varphi$ is the argument of $z$.

# Chapter 2

# An information transmission problem

## 2.1. Transmission of signal sequences

Let there be an information transmission system, in which messages are encoded and transmitted using two elementary signals – say $a$ and $b$. The format of a message is a sequence of finite length consisting of the elementary signals $a$ and $b$, for example: $abaabbb$. Such a system is the telegraph or binary-encoded data transmission systems (fax, internet, etc.).

In the system, $k_1$ time units are needed to transmit the elementary signal $a$, and $k_2$ time units are needed to transmit the elementary signal $b$ ($k_1$ and $k_2$ are positive integers). Let us assume for the sake of definiteness that $k_2 \geq k_1$. The question arises: how many distinct messages (signal sequences) are there that take exactly $n$ time units to transmit?

Let $s_n$ denote the number of all distinct messages that can be transmitted in exactly $n$ time units. Then $s_n$ satisfies the recursive relation

$$s_n = s_{n-k_1} + s_{n-k_2}, \qquad n \geq k_2 + 1$$

since only two distinct cases can occur: if the last transmitted elementary signal was of length $k_1$, then before it there could be a total of $s_{n-k_1}$ distinct signal sequences of length $n - k_1$, and if the last transmitted elementary signal was of length $k_2$, then before it there could be a total of $s_{n-k_2}$ kinds of signal sequences of length $n - k_2$. This recursive formula uniquely determines the sequence $\{s_n\}$ if we give the first $k_2$ initial values of the sequence:

$$s_1 = u_1, \quad s_2 = u_2, \quad \ldots, \quad s_{k_2} = u_{k_2}.$$

**Special case:** Let the time needed to transmit the signal $a = \cdot$ be one unit, that is $k_1 = 1$, and the time needed to transmit the signal $b = -$ be two units, that is $k_2 = 2$. For the sake of illustration, we summarize the first few terms of the sequence $\{s_n\}$ and their corresponding signal sequences in a table:

| $n$ | $s_n$ | possible signal sequences |
|:---:|:---:|:---:|
| 1 | 1 | $\cdot$ |
| 2 | 2 | $\cdot\,\cdot$; $-$ |
| 3 | 3 | $\cdot\,\cdot\,\cdot$; $\cdot\,-$; $-\,\cdot$ |
| 4 | 5 | $\cdot\,\cdot\,\cdot\,\cdot$; $\cdot\,\cdot\,-$; $\cdot\,-\,\cdot$; $-\,\cdot\,\cdot$; $--$ |

The sequence $\{s_n\}$ is determined in this case by the recursion

$$s_n = s_{n-1} + s_{n-2}, \quad n \geq 3,$$
$$s_1 = 1, \quad s_2 = 2.$$

In information theory, the capacity of the transmission channel, denoted by $C$, is defined by the formula [3]

$$C = \lim_{n \to +\infty} \frac{\log_2 s_n}{n}.$$

The following questions arise:

- What could be the formula for $s_n$?
- How can the capacity $C$ of the transmission channel be calculated, and how does $C$ vary as a function of $k_1$ and $k_2$?

We will answer the questions with the help of the *z-transform* introduced in the next section.

## 2.2. The concept of the z-transform

**2.2.1. Definition.** Let a sequence of complex numbers $\{x_n\}_{n=0}^{\infty}$ be given. The *z-transform* of the sequence $\{x_n\}_{n=0}^{\infty}$ is defined by the formula

$$X(z) = \sum_{n=0}^{\infty} \frac{x_n}{z^n}$$

for all $z \in \mathbb{C}$ for which the complex number series on the right side is convergent. Notation: $X = \mathcal{Z}\{x_n\}$.

The function $X = \mathcal{Z}\{x_n\}$ (if it exists) has a complex variable and is complex-valued. If $w = \dfrac{1}{z}$, then

$$X(1/w) = \sum_{n=0}^{\infty} x_n w^n$$

is a complex power series, so during the examination of the z-transform we can use our results concerning complex power series. According to this, if

$$R = \limsup_{n \to \infty} \sqrt[n]{|x_n|},$$

then for $|z| > R$ the series

$$\sum_{n=0}^{\infty} \frac{x_n}{z^n}$$

is convergent, and for $|z| < R$ it is divergent.

**2.2.2. Definition.** The number

$$R = \limsup_{n \to \infty} \sqrt[n]{|x_n|}, \qquad 0 \leq R \leq \infty,$$

is called the *radius of convergence* of the z-transform $X = \mathcal{Z}\{x_n\}$.

**2.2.3. Theorem** (Existence theorem)**.** *Let a complex sequence $\{x_n\}_{n=0}^{\infty}$ be given. If the radius of convergence $R$ of the z-transform $X = \mathcal{Z}\{x_n\}$ is finite, then $X$ is defined at every point $z \in \mathbb{C}$ for which $|z| > R$.*

**2.2.4. Theorem** (Uniqueness theorem)**.** *Let $\{x_n\}_{n=0}^{\infty}$ and $\{y_n\}_{n=0}^{\infty}$ be two complex sequences. Suppose that the radii of convergence of the z-transforms $X = \mathcal{Z}\{x_n\}$ and $Y = \mathcal{Z}\{y_n\}$ are finite, and furthermore*

$$X(z) = Y(z), \qquad \text{if } |z| \text{ is large enough}.$$

*Then $x_n = y_n$ for all $n \in \mathbb{N}$.*

## 2.3. Properties of the z-transform

**2.3.1. Theorem** (Linearity)**.** *Let $\{x_n\}_{n=0}^{\infty}$ and $\{y_n\}_{n=0}^{\infty}$ be two complex sequences. Suppose that the radii of convergence of the z-transforms $\mathcal{Z}\{x_n\}$ and $\mathcal{Z}\{y_n\}$ are finite, and $a, b \in \mathbb{C}$. Then*

$$\mathcal{Z}\{ax_n + by_n\}(z) = a\mathcal{Z}\{x_n\}(z) + b\mathcal{Z}\{y_n\}(z), \qquad \text{if } |z| \text{ is large enough}.$$

**2.3.2. Theorem** (Shifting)**.** *Let a complex sequence $\{x_n\}_{n=0}^{\infty}$ be given. If the radius of convergence $R$ of the z-transform $X = \mathcal{Z}\{x_n\}$ is finite, then for any $k \in \mathbb{N}^+$*

$$\mathcal{Z}\{x_{n+k}\}(z) = z^k X(z) - \sum_{j=0}^{k-1} x_j z^{j-k}, \qquad \text{if } |z| > R.$$

**2.3.3. Theorem** (Convolution theorem)**.** *Let $\{x_n\}_{n=0}^{\infty}$ and $\{y_n\}_{n=0}^{\infty}$ be two complex sequences, and define the sequence $\{u_n\}_{n=0}^{\infty}$ by the formula*

$$u_n = \sum_{j=0}^{n} x_{n-j} y_j, \qquad \text{if } n \in \mathbb{N}.$$

*If the radii of convergence $R_1$ and $R_2$ of the z-transforms $X = \mathcal{Z}\{x_n\}$ and $Y = \mathcal{Z}\{y_n\}$ are finite, then the radius of convergence of the z-transform $U = \mathcal{Z}\{u_n\}$ is also finite, and*

$$U(z) = X(z)Y(z), \qquad \text{if } |z| \text{ is large enough}.$$

**2.3.4. Definition.** The sequence $\{u_n\}_{n=0}^{\infty}$ in the previous theorem is called the *convolution* of the sequences $\{x_n\}_{n=0}^{\infty}$ and $\{y_n\}_{n=0}^{\infty}$.

The z-transforms of some specific sequences are contained in the following table:

| $x_n$ | $X(z) = \mathcal{Z}\{x_n\}(z)$ |
|:---:|:---:|
| $1$ | $\dfrac{z}{z-1}$ |
| $a^n$ | $\dfrac{z}{z-a}$ |
| $na^n$ | $\dfrac{az}{(z-a)^2}$ |
| $n^2 a^n$ | $\dfrac{az(z+a)}{(z-a)^3}$ |
| $n^3 a^n$ | $\dfrac{az(z^2 + 4az + a^2)}{(z-a)^4}$ |
| $n^k a^n$ | $(-1)^k D^k\left(\dfrac{z}{z-a}\right); \quad D = z\dfrac{d}{dz}$ |
| $a^n \sin(n\omega)$ | $\dfrac{az\sin(n\omega)}{z^2 - 2az\cos\omega + a^2}$ |
| $a^n \cos(n\omega)$ | $\dfrac{z(z - a\cos\omega)}{z^2 - 2az\cos\omega + a^2}$ |

$$(a, b, \omega \in \mathbb{R} \text{ and } k \in \mathbb{N}^+)$$

In the following, we will need the following theorem:

**2.3.5. Theorem.** *Let $k \in \mathbb{N}^+$, $a_1, \ldots, a_k \in \mathbb{R}$, and $\{b_n\}_{n=0}^{\infty}$ a complex sequence. Suppose that $\{x_n\}_{n=0}^{\infty}$ is a complex sequence for which*

$$x_{n+k} = a_1 x_{n+k-1} + a_2 x_{n+k-2} + \cdots + a_k x_n + b_n, \qquad \text{if } n \in \mathbb{N},$$

*and furthermore*

$$\limsup_{n \to \infty} \sqrt[n]{|b_n|} < \infty.$$

*Then*

$$\limsup_{n \to \infty} \sqrt[n]{|x_n|} < \infty.$$

## 2.4. Examination of the signal transmission problem

Let us consider the special case

$$s_n = s_{n-1} + s_{n-2}, \qquad \text{if } n \geq 3,$$
$$s_1 = 1, \qquad s_2 = 2,$$

of the information transmission problem defined in section 2.1. We can also write the problem in the equivalent form

$$s_{n+2} = s_{n+1} + s_n, \qquad \text{if } n \geq 0,$$
$$s_0 = 1, \qquad s_1 = 1.$$

Let $S = \mathcal{Z}\{s_n\}$. If we take the z-transform of both sides and apply the shifting theorem, we get that

$$z^2 S(z) - z^2 s_0 - z s_1 = z S(z) - z s_0 + S(z).$$

By substituting the initial values:

$$(z^2 - z - 1)S(z) = z^2,$$

that is

$$S(z) = \frac{z^2}{z^2 - z - 1}.$$

Let us decompose $S(z)$ into partial fractions such that we leave a multiplier $z$ in the numerator:

$$\frac{z^2}{z^2 - z - 1} = \frac{z^2}{(z - z_1)(z - z_2)} = z\left(\frac{A}{z - z_1} + \frac{B}{z - z_2}\right),$$

where

$$z_1 = \frac{1 + \sqrt{5}}{2}, \quad z_2 = \frac{1 - \sqrt{5}}{2}.$$

Calculating this through we get that

$$A = \frac{1}{\sqrt{5}} z_1 \qquad \text{and} \qquad B = -\frac{1}{\sqrt{5}} z_2,$$

thus

$$S(z) = \frac{1}{\sqrt{5}} z_1 \frac{z}{z - z_1} - \frac{1}{\sqrt{5}} z_2 \frac{z}{z - z_2}.$$

From here

$$s_n = \frac{1}{\sqrt{5}} \left(\frac{1 + \sqrt{5}}{2}\right)^{n+1} - \frac{1}{\sqrt{5}} \left(\frac{1 - \sqrt{5}}{2}\right)^{n+1}$$

for all $n \in \mathbb{N}^+$. If we calculate the capacity of the channel for this sequence, we get that

$$
\begin{aligned}
C &= \lim_{n \to +\infty} \frac{\log_2 s_n}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2\left[\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right]}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2\left[\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n+1}\left(1 - \left(\frac{\frac{1-\sqrt{5}}{2}}{\frac{1+\sqrt{5}}{2}}\right)^{n+1}\right)\right]}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2 \frac{1}{\sqrt{5}} + \log_2\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} + \log_2\left(1 - \left(\frac{1-\sqrt{5}}{1+\sqrt{5}}\right)^{n+1}\right)}{n} \\[2mm]
&= \lim_{n \to \infty} \frac{\log_2 \frac{1}{\sqrt{5}}}{n} + \lim_{n \to +\infty} \frac{(n+1)\log_2 \frac{1+\sqrt{5}}{2}}{n} + \lim_{n \to +\infty} \frac{\log_2\left(1 - \left(\frac{1-\sqrt{5}}{1+\sqrt{5}}\right)^{n+1}\right)}{n} \\[2mm]
&= 0 + \log_2 \frac{1 + \sqrt{5}}{2} + 0.
\end{aligned}
$$

Thus

$$C = \log_2 \frac{1 + \sqrt{5}}{2} \approx 0.7.$$

# Chapter 3

# Differential calculus of multivariable functions

## 3.1. The $p$-dimensional Euclidean space

For any $p \in \mathbb{N}^+$, the symbol $\mathbb{R}^p$ denotes the space of $p$-dimensional real column vectors. The elements of $\mathbb{R}^p$ are called *vectors* or *points*; $\mathbb{R}^1 = \mathbb{R}$.

For any $x = (x_1, \ldots, x_p)^T$, $y = (y_1, \ldots, y_p)^T \in \mathbb{R}^p$ and $\lambda \in \mathbb{R}$

$$x + y = (x_1 + y_1, \ldots, x_p + y_p)^T,$$
$$\lambda x = (\lambda x_1, \ldots, \lambda x_p)^T,$$

where the superscript $T$ indicates the transposition of the vectors, meaning we must write column vectors instead of row vectors. Together with the two operations above, $\mathbb{R}^p$ is a real vector space of dimension $p$. The vectors $e_1 = (1, 0, \ldots, 0)^T$, $e_2 = (0, 1, \ldots, 0)^T$, $\ldots$ $e_p = (0, 0, \ldots, 1)^T$ form a basis for the space $\mathbb{R}^p$. These vectors are called *canonical basis vectors*. For any vector $x = (x_1, x_2, \ldots, x_p)^T \in \mathbb{R}^p$

$$x = \sum_{i=1}^{p} x_i e_i.$$

The *length* or *Euclidean norm* of the vector $x = (x_1, x_2, \ldots, x_p)^T \in \mathbb{R}^p$ is defined by the formula

$$\|x\| = \left( \sum_{i=1}^{p} x_i^2 \right)^{1/2}.$$

The *Euclidean distance* between points $x$ and $y \in \mathbb{R}^p$ is

$$\rho_p(x, y) = \|x - y\|.$$

## 3.2. Convergence of a sequence of points

**3.2.1. Definition.** Let $\{a_n\}_{n=0}^{\infty}$ be a given sequence in $\mathbb{R}^p$. We say that the sequence of points $\{a_n\}$ *tends to the limit point* $a \in \mathbb{R}^p$ if $\|a_n - a\| \to 0$ as $n \to \infty$. The notation is the usual:

$$\lim_{n\to\infty} a_n = a, \qquad \text{or} \qquad a_n \to a.$$

The sequence of points $\{a_n\}$ is *convergent* if it has a limit point, otherwise it is *divergent*.

The following simple theorem reduces the convergence of a sequence of points to the convergence of sequences of real numbers.

**3.2.2. Theorem.** *Let* $a_n = (a_{n1}, \ldots, a_{np})^T$, $n \in \mathbb{N}$, *and* $a = (a_1, \ldots, a_p)^T \in \mathbb{R}^p$. *The limit relation*

$$a_n \to a$$

*holds if and only if for all* $i \in \{1, \ldots, p\}$

$$a_{ni} \to a_i.$$

## 3.3. Neighborhoods, punctured neighborhoods

**3.3.1. Definition.** Let $a \in \mathbb{R}^p$ and $\varepsilon > 0$. By the $\varepsilon$*-neighborhood* of the point $a$ we mean the set

$$K_\varepsilon(a) = \{\, x \in \mathbb{R}^p \mid \|x - a\| < \varepsilon \,\}.$$

The set

$$P_\varepsilon(a) = K_\varepsilon(a) \setminus \{a\}$$

is called the *punctured $\varepsilon$-neighborhood* of the point.

In the case $p = 1$, $K_\varepsilon(a)$ reduces to the interval $(a - \varepsilon, a + \varepsilon)$, for $p = 2$ to the circle (without its boundary) of radius $\varepsilon$ centered at $a \in \mathbb{R}^2$, and for $p = 3$ to the sphere (without its surface) of radius $\varepsilon$ centered at $a \in \mathbb{R}^3$.

## 3.4. Open, closed and bounded point sets

The following definition classifies the position of a point $x \in \mathbb{R}^p$ relative to a point set $A \subset \mathbb{R}^p$.

**3.4.1. Definition.** Let $x \in \mathbb{R}^p$ and $A \subset \mathbb{R}^p$. We say that $x$ is an *interior point* of $A$ if there exists $\varepsilon > 0$ such that $K_\varepsilon(x) \subset A$; $x$ is an *exterior point* of $A$ if there exists $\varepsilon > 0$ such that $A \cap K_\varepsilon(x) = \emptyset$; $x$ is a *boundary point* of $A$ if for all $\varepsilon > 0$ $K_\varepsilon(x) \cap A \neq \emptyset \neq K_\varepsilon(x) \setminus A$.

For the set $A \subset \mathbb{R}^2$ shown in the following figure, $x$ is an interior point, $y$ is an exterior point, and $z$ is a boundary point.

*Figure 3.1.*

**3.4.2. Definition.** The point set $A \subset \mathbb{R}^p$ is said to be *open* if every point $x \in A$ is an interior point of $A$, and *closed* if the point set $\mathbb{R}^p \setminus A$ is open.

The set consisting of all interior points of the set $A \subset \mathbb{R}^p$ is called the *interior* of $A$ and is denoted by $\operatorname{int} A$. The set consisting of the boundary points of the set $A$ is called the *boundary* of $A$.

The notation $\operatorname{int} A$ originates from the Latin word "interior", meaning "inside".

To check the closedness of a point set, the following theorem is often well usable:

**3.4.3. Theorem.** *A point set* $A \subset \mathbb{R}^p$ *is closed if and only if the limit point of any convergent sequence of points in $A$ is an element of $A$, that is, if* $a_n \in A$ *for all $n \in \mathbb{N}$ and for some $a \in \mathbb{R}^p$* $a_n \to a$*, then* $a \in A$.

**3.4.4. Example.** If $[\alpha, \beta] \subset \mathbb{R}$, and $f$, $g$ are real functions continuous on the interval $[\alpha, \beta]$, for which $g \leq f$ on $[\alpha, \beta]$, then the set

$$A = \{\, (x, y)^T \in \mathbb{R}^2 \mid \alpha \leq x \leq \beta,\ g(x) \leq y \leq f(x) \,\} \subset \mathbb{R}^2$$

is closed. Indeed, if $(x_n, y_n)^T \in A$ for all $n \in \mathbb{N}$, that is

$$\alpha \leq x_n \leq \beta, \qquad g(x_n) \leq y_n \leq f(x_n), \qquad n \in \mathbb{N},$$

and for some $(x, y)^T \in \mathbb{R}^2$ $(x_n, y_n)^T \to (x, y)^T$, then $x_n \to x$ and $y_n \to y$, and using the continuity of $f$ and $g$ from the previous system of inequalities after taking the limit we get that

$$\alpha \leq x \leq \beta, \qquad g(x) \leq y \leq f(x).$$

Thus $(x, y)^T \in A$.

**3.4.5. Definition.** The point set $A \subset \mathbb{R}^p$ is said to be *bounded* if there exists $r \in (0, \infty)$ such that $A \subset K_r(0)$.

**3.4.6. Definition.** The sequence of points $\{a_n\}_{n=0}^{\infty}$ in $\mathbb{R}^p$ is *bounded* if the set $A = \{\, a_n \mid n \in \mathbb{N} \,\}$ is bounded.

The selection theorem known from the theory of numerical sequences can also be carried over to sequences of points.

**3.4.7. Theorem** (Bolzano-Weierstrass theorem)**.** *In $\mathbb{R}^p$ every bounded sequence of points has a convergent subsequence.*

## 3.5. Multivariable functions

**3.5.1. Definition.** Let $p, q \in \mathbb{N}^+$. The function $f$ is a *$p$-variable function mapping into $\mathbb{R}^q$* if $f : \mathbb{R}^p \to \mathbb{R}^q$, that is $D(f) \subset \mathbb{R}^p$. If $q > 1$, then $f$ is called a *vector function*, and in the case $q = 1$ it is called a *real function*.

For a fixed $k \in \{1, \ldots, q\}$, to each $x \in D(f)$ we assign the $k$-th coordinate of the image point $f(x) \in \mathbb{R}^q$. Thus a $p$-variable real function $f_k : \mathbb{R}^p \to \mathbb{R}$ arises, which is called the *$k$-th coordinate function* of $f$.

Knowing the coordinate functions, $f$ is uniquely determined, since

$$f(x) = (f_1(x), \ldots, f_q(x))^T, \qquad \text{if } x \in D(f).$$

An important class of multivariable functions of type $\mathbb{R}^p \to \mathbb{R}^q$ is formed by linear mappings. The mapping $L : \mathbb{R}^p \to \mathbb{R}^q$ is *linear* if $D(L) = \mathbb{R}^p$, and furthermore for all $x, y \in \mathbb{R}^p$ and $\lambda \in \mathbb{R}$

$$L(x + y) = L(x) + L(y),$$
$$L(\lambda x) = \lambda L(x).$$

It is known from linear algebra that any linear mapping $L : \mathbb{R}^p \to \mathbb{R}^q$ can be written in the form

$$L(x) = M_L \cdot x, \qquad x \in \mathbb{R}^p,$$

where $M_L$ is a real matrix of type $q \times p$. The matrix $M_L$ is called the *matrix (relative to the canonical bases)* of the mapping $L$.

## 3.6. Limit and continuity

By copying the definition of the limit and continuity of single-variable real functions, we obtain the definition of the limit and continuity of multivariable functions.

**3.6.1. Definition.** Let $p, q \in \mathbb{N}^+$. We say that the point $b \in \mathbb{R}^q$ is the *limit* of the function $f : \mathbb{R}^p \to \mathbb{R}^q$ at the point $a \in \mathbb{R}^p$, if $f$ is defined in some punctured neighborhood of $a$, and for any sequence $\{x_n\}_{n=0}^{\infty}$ for which $x_n \in D(f)$, $x_n \neq a$ for all $n \in \mathbb{N}$, and $x_n \to a$, the sequence of function values $\{f(x_n)\}_{n=0}^{\infty}$ tends to $b$. Notation: $f(x) \to b$ as $x \to a$ or $\lim_{x\to a} f(x) = b$.

**3.6.2. Definition.** We say that the function $f : \mathbb{R}^p \to \mathbb{R}^q$ is *continuous* at the point $a \in D(f)$, if

$$\lim_{x\to a} f(x) = f(a),$$

that is, if $f$ is defined in some neighborhood of $a$, and for any sequence $\{x_n\}_{n=0}^{\infty}$ for which $x_n \in D(f)$ and $x_n \to a$, the sequence of function values $\{f(x_n)\}_{n=0}^{\infty}$ tends to $f(a)$.

Now we define a concept more general than continuity, continuity restricted to a subset of the domain.

**3.6.3. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}^q$, and $a \in A \subset D(f)$. We say that $f$ is *continuous restricted to $A$* at the point $a$, if for any sequence $\{x_n\}_{n=0}^{\infty}$ for which $x_n \in A$ and $x_n \to a$, the sequence of function values $\{f(x_n)\}_{n=0}^{\infty}$ tends to $f(a)$.

If $f$ is a single-variable real function ($p = q = 1$) and for some $a \in D(f)$ and $\delta > 0$ $[a, a + \delta) \subset D(f)$ ($(a - \delta, a] \subset D(f)$), then the continuity of $f$ restricted to the set $[a, a + \delta)$ ($(a - \delta, a]$) means that $f$ is continuous from the right (left) at the point $a$.

The following theorem shows that during the examination of the limit and continuity of a vector function it is sufficient to restrict ourselves to its coordinate functions.

**3.6.4. Theorem.** *Let* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *be a given function, for* $x \in D(f)$

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*and furthermore* $a \in A \subset D(f)$ *and* $b = (b_1, \ldots, b_q)^T \in \mathbb{R}^q$*. Then*

$$\lim_{x\to a} f(x) = b$$

*if and only if for all* $k \in \{1, \ldots, q\}$

$$\lim_{x\to a} f_k(x) = b_k.$$

*The function $f$ is continuous (restricted to $A$) at the point $a$ if and only if for all* $k \in \{1, \ldots, q\}$ $f_k$ *is continuous (restricted to $A$) at the point $a$.*

If $f : \mathbb{R}^p \to \mathbb{R}^q$ and $x = (x_1, \ldots, x_p)^T \in D(f)$, then instead of

$$f((x_1, \ldots, x_p)^T)$$

we will use the more convenient notation

$$f(x_1, \ldots, x_p).$$

Adapting to general custom, we will also "simplify" the notation $(x_1, \ldots, x_p)^T \in \mathbb{R}^p$ by omitting the superscript $T$ indicating transposition, that is, we write a row vector instead of a column vector. At the same time, we emphasize that if a vector in $\mathbb{R}^p$ appears as a factor in a matrix product, it must always be understood as a column vector.

**3.6.5. Example.** For the function

$$f(x, y) = \frac{xy}{x^2 + y^2}, \qquad (x, y) \in \mathbb{R}^2 \setminus \{(0, 0)\}$$

a limit does not exist at the point $(0, 0)$, because if we consider a sequence of points $(x_n, y_n)$ whose terms all lie on the line $y = x$ and tend to the point $(0, 0)$, then for $0 \neq x_n$

$$f(x_n, x_n) = \frac{x_n^2}{x_n^2 + x_n^2} = \frac{1}{2},$$

but at the same time along the $x$-axis due to $y_n = 0$

$$f(x_n, 0) = 0$$

is obtained.

**3.6.6. Example.** The function

$$f(x, y) = \sin(2x + y^2), \qquad (x, y) \in \mathbb{R}^2,$$

is continuous at every point $(a, b) \in \mathbb{R}^2$, because for any sequence $(x_n, y_n)$ tending to $(a, b)$ we have $x_n \to a$, $y_n \to b$, and therefore

$$f(x_n, y_n) = \sin(2x_n + y_n^2) \to \sin(2a + b^2) = f(a, b).$$

Most theorems about the limit and continuity of single-variable real functions can be carried over to multivariable real functions as well. For example, if $f$, $g : \mathbb{R}^p \to \mathbb{R}$ are continuous at the point $a \in \mathbb{R}^p$, then so are $f + g$, $fg$, and if $g(a) \neq 0$ then so is $\frac{f}{g}$.

The definition of continuity on an interval for single-variable real functions is a special case of the following concept.

**3.6.7. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}^q$ and $A \subset D(f)$. We say that $f$ is *continuous on the set $A$*, if $f$ is continuous restricted to $A$ at every point $a \in A$.

If $f : \mathbb{R}^p \to \mathbb{R}^q$ and $U \subset D(f)$ is an open set, then $f$ is continuous on the set $U$ if and only if it is continuous at every point of $U$.

## 3.7. Differentiability

The extension of the concept of differentiability known from the theory of single-variable real functions to multivariable functions is the following:

**3.7.1. Definition.** The function $f : \mathbb{R}^p \to \mathbb{R}^q$ is said to be *(totally) differentiable* at the point $a \in D(f)$, if there exists a linear mapping $L : \mathbb{R}^p \to \mathbb{R}^q$ such that

$$\lim_{x\to a} \frac{f(x) - f(a) - L(x - a)}{\|x - a\|} = 0.$$

The linear mapping $L$ is called the *differential of the function $f$ at the point $a$*, and the matrix $M_L$ of the mapping $L$ is called the *differential quotient* or *Jacobian matrix of $f$ at $a$*. Notation: $L = Df(a)$, and $M_L = f'(a)$.

For a real $f$ ($q = 1$), the Jacobian matrix $f'(a)$ is of type $1 \times p$, that is a $p$-dimensional row vector. In this case, instead of the Jacobian matrix at the point $a$, the name *gradient* or *gradient vector* at the point $a$ and the notation $f'(a) = \operatorname{grad} f(a)$ are also used.

It can be shown that if it exists, the differential is unique.

**3.7.2. Theorem.** *For any function $f : \mathbb{R}^p \to \mathbb{R}^q$, at most one differential exists at a given point $a \in D(f)$.*

The differentiability of a vector function is equivalent to the differentiability of its coordinate functions.

**3.7.3. Theorem.** *Let* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *be a given function, for* $x \in D(f)$

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*and furthermore* $a \in D(f)$*. The function $f$ is differentiable at the point $a$ if and only if for all* $k \in \{1, \ldots, q\}$ *the function $f_k : \mathbb{R}^p \to \mathbb{R}$ is differentiable at the point $a$, and in the case of differentiability, the $k$-th row vector of the Jacobian matrix $f'(a)$ is* $f_k'(a)$*,* $k \in \{1, \ldots, q\}$.

The connection between differentiability and continuity is similar to that for single-variable real functions.

**3.7.4. Theorem.** *If $f : \mathbb{R}^p \to \mathbb{R}^q$ is differentiable at the point $a \in D(f)$, then it is also continuous there.*

We have already mentioned for single-variable real functions that the converse statement is not true.

## 3.8. The directional derivative, partial derivatives

If $a, v \in \mathbb{R}^p$, then the points of the line passing through the point $a$ with direction vector $v$ can be written in the form

$$x = a + tv$$

where $t \in \mathbb{R}$. Let $f : \mathbb{R}^p \to \mathbb{R}^q$, $t > 0$ and suppose that $v \in \mathbb{R}^p$ is a unit vector, that is $\|v\| = 1$. Let us consider the value of $f$ at the point which lies at a distance $t$ from $a$ in the direction specified by $v$, that is at the point $a + tv$. Dividing the difference between this and $f(a)$ by the distance $t$ between the two points, the difference quotient in the direction of $v$

$$\frac{f(a + tv) - f(a)}{t}$$

is obtained.

**3.8.1. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}^q$, $a \in D(f)$ and a given unit vector $v \in \mathbb{R}^p$. We say that $f$ is *differentiable at the point $a$ in the direction of $v$*, if the limit

$$\lim_{t\to 0} \frac{f(a + tv) - f(a)}{t}$$

exists (in $\mathbb{R}^q$). This limit (if it exists) is denoted by the symbol $\partial_{(v)} f(a)$ or $D_{(v)} f(a)$, and is called the *directional derivative of the function $f$ at $a$ in the direction of $v$*.

From the definition it follows:

**3.8.2. Theorem.** *Let* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *be a function, for* $x \in D(f)$

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*and furthermore* $a \in D(f)$ *and* $v \in \mathbb{R}^p$ *a given unit vector. The function $f$ is differentiable at the point $a$ in the direction of $v$ if and only if for all* $k \in \{1, \ldots, q\}$ $f_k$ *is differentiable in the direction of $v$, and in the case of differentiability*

$$\partial_{(v)} f(a) = (\partial_{(v)} f_1(a), \ldots, \partial_{(v)} f_q(a))^T.$$

In the special case when $v$ coincides with one of the canonical basis vectors, the directional derivative is called a *partial derivative*. In more detail:

**3.8.3. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}^q$, $a \in D(f)$, $i \in \{1, \ldots p\}$ and $e_i \in \mathbb{R}^p$ the $i$-th canonical basis vector. We say that $f$ is *partially differentiable at the point $a$ with respect to the $i$-th variable*, if $f$ is differentiable at $a$ in the direction of $e_i$. The directional derivative $\partial_{(e_i)} f(a) \in \mathbb{R}^q$ (if it exists) is called the *partial derivative of the function $f$ at $a$ with respect to the $i$-th variable*.

**3.8.4. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}^q$ be a function and $i \in \{1, \ldots, p\}$. We denote by $\partial_i f$ the function whose domain consists of those points $x \in D(f)$ at which $f$ is partially differentiable with respect to the $i$-th variable, and its value at each such point $x$ is the partial derivative of $f$ with respect to the $i$-th variable. The function $\partial_i f$ is called the *partial derivative function of the function $f$ with respect to the $i$-th variable* or briefly the *partial derivative*.

If we denote the $i$-th variable of the function $f : \mathbb{R}^p \to \mathbb{R}^q$ by $x_i$, then the partial derivative with respect to the $i$-th variable can also be denoted by the symbols

$$\frac{\partial f}{\partial x_i}, \qquad f'_{x_i}, \qquad \text{or} \qquad f_{x_i}.$$

Let $f : \mathbb{R}^p \to \mathbb{R}$ be a $p$-variable real function, $a = (a_1, \ldots, a_p) \in \mathbb{R}^p$ and $i \in \{1, \ldots, p\}$. Let us define the function $h : \mathbb{R} \to \mathbb{R}$ by the formula

$$h(s) = f(a_1, \ldots a_{i-1}, s, a_{i+1}, \ldots, a_p)$$

for all $s \in \mathbb{R}$ for which $(a_1, \ldots a_{i-1}, s, a_{i+1}, \ldots, a_p) \in D(f)$. It is easy to see that $f$ is differentiable at $a$ with respect to the $i$-th variable if and only if $h$ is differentiable at the point $a_i \in \mathbb{R}$, and then

$$\partial_i f(a) = h'(a_i).$$

Therefore we can use the differentiation rules for single-variable real functions to calculate the partial derivatives. In the two-variable case ($p = 2$) the function $h$ above is illustrated by the following figures:

**3.8.5. Example.** Let

$$f(x, y) = x^y, \qquad \text{if } x \in (0, \infty) \text{ and } y \in \mathbb{R}.$$

Then for all $x \in (0, \infty)$ and $y \in \mathbb{R}$

$$\frac{\partial f}{\partial x}(x, y) = y x^{y-1}, \qquad \frac{\partial f}{\partial y}(x, y) = x^y \ln x.$$

The connection between differentiability and the directional derivative is about the following:

*Figure 3.2.*

**3.8.6. Theorem.** *Suppose that $f : \mathbb{R}^p \to \mathbb{R}^q$ is differentiable at the point $a \in D(f)$. Then for any unit vector $v \in \mathbb{R}^p$ the directional derivative $\partial_{(v)} f(a)$ exists, namely*

$$\partial_{(v)} f(a) = f'(a) \cdot v.$$

*Specifically, for all $i \in \{1, \ldots, p\}$ $f$ is partially differentiable at the point $a$ with respect to the $i$-th variable, and*

$$\partial_i f(a) = f'(a) \cdot e_i,$$

*the $i$-th column vector of the Jacobian matrix $f'(a)$.*

Let $f : \mathbb{R}^p \to \mathbb{R}^q$ be a given function, and for $x \in D(f)$

$$f(x) = (f_1(x), \ldots, f_q(x))^T.$$

If $f$ is differentiable at the point $a \in D(f)$, then according to Theorem 3.8.2 and 3.8.6

$$f'(a) = \bigl(\partial_j f_i(a)\bigr)_{\substack{i=1,\ldots,q \\ j=1,\ldots,p}} = \begin{pmatrix} \partial_1 f_1(a) & \ldots & \partial_p f_1(a) \\ \partial_1 f_2(a) & \ldots & \partial_p f_2(a) \\ \ldots & \ldots & \ldots \\ \ldots & \ldots & \ldots \\ \partial_1 f_q(a) & \ldots & \partial_p f_q(a) \end{pmatrix}.$$

**3.8.7. Example.** Let us define the function $f : \mathbb{R}^2 \to \mathbb{R}$ by the formula

$$f(x, y) = \begin{cases} 0, & \text{if } x = 0 \text{ or } y = 0, \\ 1, & \text{if } x \neq 0 \text{ and } y \neq 0 \end{cases}$$

It is easy to see that

$$\frac{\partial f}{\partial x}(0, 0) = \frac{\partial f}{\partial y}(0, 0) = 0,$$

but $f$ is not continuous at the point $(0, 0)$. Therefore, according to Theorem 3.7.4 $f$ is not differentiable at the point $(0, 0)$.

The previous example shows that the existence of the partial derivatives does not imply the differentiability of the function, not even its continuity. At the same time, based on the following theorem the continuity of the partial derivatives already implies differentiability.

**3.8.8. Theorem.** *Let $f : \mathbb{R}^p \to \mathbb{R}^q$ and $a \in D(f)$. If for all $i \in \{1, \ldots, p\}$ the partial derivative $\partial_i f$ is continuous at the point $a$, then $f$ is differentiable at $a$.*

**3.8.9. Example.** Let

$$f(x, y) = \sin(2x + y^2), \qquad (x, y) \in \mathbb{R}^2.$$

For any $(x, y) \in \mathbb{R}^2$

$$\frac{\partial f}{\partial x}(x, y) = 2 \cos(2x + y^2) \qquad \text{and} \qquad \frac{\partial f}{\partial y}(x, y) = 2y \cos(2x + y^2).$$

In Example 3.6.6 we have already shown the continuity of $f$. It can be verified similarly that the functions $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ are also continuous at every point in $\mathbb{R}^2$. Therefore $f$ is differentiable at every point $(x, y) \in \mathbb{R}^2$, and

$$f'(x, y) = (2 \cos(2x + y^2),\ 2y \cos(2x + y^2)).$$

The directional derivative of the function $f$ at the point $a = (0, 0)$ in the direction $v = \left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right)$ is

$$\partial_{(v)} f(a) = f'(a) \cdot v = (2, 0) \cdot \left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right)^T = \frac{2}{\sqrt{2}} = \sqrt{2}.$$

We note that the differentiability of a two-variable real function $f$ at a point $(a, b) \in D(f)$ geometrically means that a tangent plane can be fitted to the surface $z = f(x, y)$ at its point $(a, b, f(a, b))$.

**3.8.10. Definition.** Suppose that $f : \mathbb{R}^2 \to \mathbb{R}$ is differentiable at the point $(a, b) \in D(f)$. Then the plane with equation

$$z = \partial_1 f(a, b)(x - a) + \partial_2 f(a, b)(y - b) + f(a, b)$$

is called the *tangent plane* of the function $f$ at the point $(a, b)$.

## 3.9. The chain rule

The differentiation rule for composite functions extended to vector functions is the following:

**3.9.1. Theorem** (Chain rule)**.** *Let $p, q, r \in \mathbb{N}^+$. If $f : \mathbb{R}^p \to \mathbb{R}^q$ is differentiable at the point $a \in D(f)$ and $g : \mathbb{R}^q \to \mathbb{R}^r$ is differentiable at the point $f(a)$, then $g \circ f$ is also differentiable at the point $a$, and*

$$D(g \circ f) = Dg(f(a)) \circ Df(a),$$

and furthermore

$$(g \circ f)'(a) = g'(f(a)) \cdot f'(a),$$

where $\cdot$ denotes matrix multiplication, that is, for all $i \in \{1, \ldots, p\}$ and $k \in \{1, \ldots, r\}$

$$\partial_i (g_k \circ f)(a) = \sum_{j=1}^{q} \partial_j g_k(f(a))\, \partial_i f_j(a),$$

where the $g_k$'s and $f_j$'s are the coordinate functions of the vector functions $g$ and $f$, respectively.

## 3.10. Mean value theorem

Let $a, b \in \mathbb{R}^p$, $a \neq b$. Then the points of the closed line segment connecting the points $a$ and $b$ can be written in the form $a + t(b - a)$, where $t \in [0, 1]$.

**3.10.1. Definition.** For any $a, b \in \mathbb{R}^p$, $a \neq b$, let

$$[a, b] = \{\, a + t(b - a) \mid t \in [0, 1] \},$$

and

$$(a, b) = \{\, a + t(b - a) \mid t \in (0, 1) \}.$$

The following theorem is the generalization of Lagrange's theorem to multivariable real functions.

**3.10.2. Theorem.** *Let $a, b \in \mathbb{R}^p$, $a \neq b$. If $f : \mathbb{R}^p \to \mathbb{R}$ is continuous on the closed line segment $[a, b]$ and differentiable at every point $x \in (a, b)$, then there exists $c \in (a, b)$ such that*

$$f(b) - f(a) = f'(c) \cdot (b - a) = \sum_{i=1}^{p} \partial_i f(c)(b_i - a_i).$$

## 3.11. Schwarz's theorem

**3.11.1. Definition.** If $f : \mathbb{R}^p \to \mathbb{R}^q$ and for some $i, j \in \{1, \ldots, p\}$ and $a \in D(f)$ the partial differential quotient

$$\partial_j(\partial_i f)(a)$$

exists, then it is denoted by the symbol

$$\partial_{ij} f(a).$$

The functions $\partial_{ij} f$ are the *second-order partial derivatives* of $f$.

If the variables of the function $f : \mathbb{R}^p \to \mathbb{R}^q$ are denoted by the letters $x_1, \ldots, x_p$ respectively, then instead of $\partial_{ij} f(a)$ the notation

$$\frac{\partial^2 f}{\partial x_j \partial x_i}(a), \qquad f''_{x_i x_j}(a), \qquad \text{or} \qquad f_{x_i x_j}(a)$$

is also used. Observe that the order of differentiation goes from left to right in the index notation, and from right to left in the fractional notation. If $i = j$, then instead of $\frac{\partial^2 f}{\partial x_i \partial x_i}$ the notation $\frac{\partial^2 f}{\partial x_i^2}$ is used.

The ones of the form $\partial_{ii} f$ are usually called *pure*, and the ones of the form $\partial_{ij} f$ ($i \neq j$) are called *mixed* second-order partial derivatives.

Similarly to the previous definition, the third-order, fourth-order etc. partial derivatives can be defined by "recursion". The partial derivatives $\partial_i f$ ($i \in \{1, \ldots, p\}$) of the function $f : \mathbb{R}^p \to \mathbb{R}^q$ are called *first-order partial derivatives* if there is a need to distinguish them from the higher-order ones.

The following theorem shows that under certain conditions, when calculating mixed partial derivatives, the order of differentiation can be swapped.

**3.11.2. Theorem** (Schwarz's theorem)**.** *Let $f : \mathbb{R}^2 \to \mathbb{R}$ be a given function. Suppose that the functions $\partial_1 f$, $\partial_2 f$ are defined in some neighborhood of the point $(a, b) \in D(f)$ and the function $\partial_{12} f$ is continuous at the point $(a, b)$. Then $\partial_{21} f(a, b)$ exists, and*

$$\partial_{21} f(a, b) = \partial_{12} f(a, b).$$

## 3.12. Absolute and local extremum locations

Similarly to the case of single-variable real functions, we introduce the following terminology:

**3.12.1. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}$, $a \in H \subset D(f)$. We say that the point $a$ is an *absolute maximum location* (*absolute minimum location*) of $f$ with respect to $H$, if for all $x \in H$

$$f(x) \leq f(a) \qquad (f(x) \geq f(a)).$$

Instead of absolute maximum location and absolute minimum location, the names *global maximum location* and *global minimum location* are also used.

The following theorem is the extension of Weierstrass's theorem to multivariable functions.

**3.12.2. Theorem.** *Let $H$ be a non-empty, bounded and closed subset of $\mathbb{R}^p$. If $f : \mathbb{R}^p \to \mathbb{R}$ is continuous on the set $H$, then $f$ has an absolute maximum location and an absolute minimum location with respect to $H$ as well.*

Now we define local extremum locations.

**3.12.3. Definition.** Let $f : \mathbb{R}^p \to \mathbb{R}$. We say that the point $a \in D(f)$ is a *local maximum location* (*local minimum location*) of the function $f$, if there exists $\delta > 0$ such that $K_\delta(a) \subset D(f)$, and for all $x \in K_\delta(a)$, $x \neq a$,

$$f(x) \leq f(a) \qquad (f(x) \geq f(a)).$$

If we replace the inequality $\leq$ ($\geq$) with $<$ ($>$), we get the definition of a *strict local maximum location* (*strict local minimum location*).

The following gives a necessary condition for the existence of a local extremum location:

**3.12.4. Theorem.** *Let $f : \mathbb{R}^p \to \mathbb{R}$ and $a \in \operatorname{int} D(f)$. Suppose that $a$ is a local maximum or minimum location of the function $f$. If for some $i \in \{1, \ldots, p\}$ $\partial_i f(a)$ exists, then $\partial_i f(a) = 0$. Specifically, if $f$ is differentiable at the point $a$, then for all $i \in \{1, \ldots, p\}$ $\partial_i f(a) = 0$.*

The converse of the theorem is not true, as we have already pointed out for single-variable real functions.

**3.12.5. Definition.** Let a function $f : \mathbb{R}^p \to \mathbb{R}$ be given. The point $a \in D(f)$ is called a *critical (stationary) point* of $f$, if $a \in \operatorname{int} D(f)$ and for all $i \in \{1, \ldots, p\}$ $\partial_i f(a) = 0$.

According to the previous theorem, only a critical point can be a local extremum location for a differentiable function.

**3.12.6. Example.** The function

$$f(x, y) = x^3 - y^3 + 3x + y, \qquad (x, y) \in \mathbb{R}^2,$$

has no maximum location, because at every point $(x, y) \in \mathbb{R}^2$

$$\frac{\partial f}{\partial x}(x, y) = 3(x^2 + 1) > 0.$$

Now let us look for the maximum of $f$ on the set

$$H = \{\, (x, y) \in \mathbb{R}^2 \mid 0 \leq x \leq 1,\ 0 \leq y \leq 1 - x \}.$$

Since $H$ is bounded and closed, and $f$ is continuous on $H$, therefore $f$ has a maximum location on $H$. From the inequality

$$\frac{\partial f}{\partial x}(x, y) = 3(x^2 + 1) > 0, \qquad x \in \mathbb{R},$$

it follows that for every fixed $y \in [0, 1]$ the function $h(x) = f(x, y)$, $x \in \mathbb{R}$, is strictly monotonically increasing. Therefore

$$\max_{(x,y)\in H} f(x, y) = \max_{x\in[0,1]} f(x, 1 - x).$$

Since for all $x \in [0, 1]$

$$\frac{d}{dx} f(x, 1 - x) = 6x^2 - 6x + 5 = 6\left(x - \frac{1}{2}\right)^2 + \frac{7}{2} > 0,$$

therefore

$$\max_{(x,y)\in H} f(x, y) = f(1, 0) = 4.$$

The following theorem gives a sufficient condition for a two-variable real function to have a local extremum at a given critical point.

**3.12.7. Theorem.** *Let a function $f : \mathbb{R}^2 \to \mathbb{R}$ and $(a, b) \in \operatorname{int} D(f)$ be given. Suppose that the second-order partial derivatives of $f$ are continuous at the point $(a, b)$, and furthermore*

$$\partial_1 f(a, b) = \partial_2 f(a, b) = 0.$$

*If*

$$\partial_{11} f(a, b)\, \partial_{22} f(a, b) - \bigl[\partial_{12} f(a, b)\bigr]^2 > 0,$$

*then $(a, b)$ is a local extremum location of $f$, and namely if*

$$\partial_{11} f(a, b) > 0,$$

*then it is a local minimum location, and if*

$$\partial_{11} f(a, b) < 0,$$

*then it is a local maximum location.*

*If*

$$\partial_{11} f(a, b)\, \partial_{22} f(a, b) - \bigl[\partial_{12} f(a, b)\bigr]^2 < 0,$$

*then $(a, b)$ is not a local extremum location of $f$.*

**3.12.8. Example.** Let

$$f(x, y) = x^3 + y^3 - 3xy, \qquad \text{if } (x, y) \in \mathbb{R}^2.$$

Then for all $(x, y) \in \mathbb{R}^2$

$$\partial_1 f(x, y) = 3x^2 - 3y \qquad \text{and} \qquad \partial_2 f(x, y) = 3y^2 - 3x.$$

It is easy to verify that $f$ has two critical points, $(0, 0)$ and $(1, 1)$. The second-order partial derivatives

$$\partial_{11} f(x, y) = 6x, \qquad \partial_{22} f(x, y) = 6y, \qquad \partial_{12} f(x, y) = -3, \qquad \partial_{21} f(x, y) = -3$$

are continuous. Since

$$\partial_{11} f(0, 0)\, \partial_{22} f(0, 0) - \bigl[\partial_{12} f(0, 0)\bigr]^2 = -9 < 0,$$

therefore the point $(0, 0)$ is not a local extremum location. At the same time

$$\partial_{11} f(1, 1)\, \partial_{22} f(1, 1) - \bigl[\partial_{12} f(1, 1)\bigr]^2 = 27 > 0 \qquad \text{and} \qquad \partial_{11} f(1, 1) = 6 > 0$$

so the point $(1, 1)$ is a local minimum location of $f$.

# Chapter 4

# Area integral

## 4.1. The concept of area

We want to define the area of plane figures, that is, subsets of $\mathbb{R}^2$. We will reduce the concept of area to the area of rectangles. The following definitions serve this purpose.

**4.1.1. Definition.** Let $a, b, c, d \in \mathbb{R}$, $a < b$, $c < d$. The set

$$I = [a,b] \times [c,d] \subset \mathbb{R}^2$$

is called a *(two-dimensional) interval* (see Figure 4.1).

*(Figure 4.1.)*

The *area* of the interval $I$:

$$t(I) = (b-a)(d-c).$$

**4.1.2. Definition.** The sets $H_1, \ldots, H_n$, where $n \in \mathbb{N}^+$ and $H_i \subset \mathbb{R}^2$ ($i \in \{1, \ldots, n\}$), are said to be *non-overlapping*, if for any $i \neq j$

$$\operatorname{int} H_i \cap \operatorname{int} H_j = \emptyset,$$

that is, $H_i$ and $H_j$ have no common interior point.

Now we can define the outer and inner area of a bounded plane set.

**4.1.3. Definition.** Let $H \subset \mathbb{R}^2$ be a bounded set. Let $k(H)$ be the infimum (greatest lower bound) of the set of numbers consisting of all sums of the form

$$\sum_{j=1}^{n} t(I_j),$$

where $n \in \mathbb{N}^+$, and the sets $I_j \subset \mathbb{R}^2$ are intervals ($j = 1, \ldots, n$) that cover $H$ (see the following figure), that is

$$H \subset \bigcup_{j=1}^{n} I_j.$$

*(Figure 4.2.)*

The number $k(H)$ is called the *outer area* of the set $H$.

The *inner area* of the set $H$, denoted by $b(H)$, is the supremum (least upper bound) of the set of numbers consisting of all sums of the form

$$\sum_{j=1}^{n} t(I_j),$$

where $n \in \mathbb{N}^+$, and the sets $I_j \subset \mathbb{R}^2$ are non-overlapping intervals for which $I_j \subset H$ ($j = 1, \ldots, n$) (see the following figure), provided that $H$ contains any intervals at all. If $H$ contains no intervals, let $b(H) = 0$.

It is obvious that the numbers $b(H)$ and $k(H)$ just defined give a lower and upper bound for the area of the set $H$ we wish to define. We must assume the bounded nature of the set $H$ so that it can be covered by a finite number of intervals. After this, the following is obvious:

**4.1.4. Definition.** The set $H \subset \mathbb{R}^2$ is said to be *measurable*, if $H$ is bounded and $b(H) = k(H)$. If $H$ is measurable, then by the *area* of $H$ we mean the number

$$t(H) = b(H) = k(H).$$

*(Figure 4.3.)*

This concept of area originates from the French mathematician Jordan. The more important properties of area are summarized in the following theorems.

**4.1.5. Theorem.** If $H_1$ and $H_2$ are measurable, then $H_1 \cup H_2$, $H_1 \cap H_2$, $H_1 \setminus H_2$ are also measurable.

**4.1.6. Theorem.** If the sets $H_1, \ldots, H_n$ are measurable and non-overlapping, and furthermore

$$H = \bigcup_{j=1}^{n} H_j,$$

then $H$ is also measurable, and

$$t(H) = \sum_{j=1}^{n} t(H_j).$$

**4.1.7. Theorem.** For a set $H \subset \mathbb{R}^2$ the following statements are equivalent:

(i) $t(H) = 0$,

(ii) $k(H) = 0$,

(iii) for any $\varepsilon > 0$ there exist intervals $I_1, \ldots, I_n$ such that

$$H \subset \bigcup_{j=1}^{n} I_j \qquad \text{and} \qquad \sum_{j=1}^{n} t(I_j) < \varepsilon.$$

**4.1.8. Theorem.** The set $H \subset \mathbb{R}^2$ is measurable if and only if it is bounded and its boundary has zero area.

Following the model of the concept of area introduced in the plane, we could introduce the concept of *Jordan volume* in the three-dimensional space or more generally in the space $\mathbb{R}^p$. It is obvious that in $\mathbb{R}^p$ we should start from the volume

$$t(I) = (b_1 - a_1)(b_2 - a_2) \cdots (b_p - a_p)$$

of the $p$-dimensional intervals

$$I = [a_1, b_1] \times [a_2, b_2] \cdots \times [a_p, b_p].$$

## 4.2. The concept of the area integral

Let a measurable and closed set $H \subset \mathbb{R}^2$ and a non-negative function $f : H \to [0, \infty)$ continuous on $H$ be given. The volume $V$ of the solid bounded from above by the part of the surface $z = f(x,y)$ above $H$, and from below by the set $H$ in the $xy$-plane is to be calculated (see Figure 4.4).

*(Figure 4.4.)*

Following the model of the single-variable Riemann integral, we can give a lower and upper bound for the volume of the solid to be calculated using the following concepts.

**4.2.1. Definition.** Let $H \subset \mathbb{R}^2$ be measurable. By a *partition* $\Phi$ of the set $H$ we mean a (finite) sequence of non-overlapping, non-empty measurable sets $H_1, \ldots, H_n$ for which

$$\bigcup_{j=1}^{n} H_j = H.$$

Notation: $\Phi = \{H_1, \ldots, H_n\}$.

**4.2.2. Definition.** Let a measurable set $H \subset \mathbb{R}^2$ and a bounded real function $f$ on the set $H$ be given. If $\Phi = \{H_1, \ldots, H_n\}$ is a partition of the set $H$, then due to the boundedness of $f$, for all $i \in \{1, \ldots, n\}$ the numbers

$$m_i = \inf f(H_i), \qquad M_i = \sup f(H_i)$$

are finite. The sum

$$s_\Phi = \sum_{i=1}^{n} m_i\, t(H_i)$$

is called the *(Darboux) lower sum* of the function $f$ corresponding to the partition $\Phi$, and the sum

$$S_\Phi = \sum_{i=1}^{n} M_i\, t(H_i)$$

is called the *(Darboux) upper sum* of the function $f$ corresponding to the partition $\Phi$.

It is obvious that if $f$ is bounded on the measurable set $H$, then for any partition $\Phi$ of $H$

$$t(H)\inf f(H) \leq s_\Phi \leq S_\Phi \leq t(H)\sup f(H).$$

**4.2.3. Definition.** For any bounded function $f$ defined on the measurable set $H \subset \mathbb{R}^2$, let

$$I_A = \sup\{\, s_\Phi \mid \Phi \text{ is a partition of the set } H \,\}$$

and

$$I_F = \inf\{\, S_\Phi \mid \Phi \text{ is a partition of the set } H \,\}.$$

The number $I_A$ is called the *(Darboux) lower integral* of $f$ over $H$, and the number $I_F$ is called the *(Darboux) upper integral* of $f$ over $H$.

If $V$ is the volume of the solid referred to at the beginning of the section, then for any partition $\Phi$ of $H$

$$s_\Phi \leq V \leq S_\Phi,$$

and therefore

$$I_A \leq V \leq I_F.$$

**4.2.4. Definition.** Let $H \subset \mathbb{R}^2$ be measurable. The function $f$ defined on $H$ is said to be *integrable*, if $f$ is bounded and $I_A = I_F$. If $f$ is integrable on $H$, then the common value

$$I = I_A = I_F$$

is called the *(Riemann) area integral* of $f$ over $H$. Notation:

$$I = \iint_H f(x,y)\,dx\,dy \qquad \text{or simply} \qquad \iint_H f.$$

## 4.3. Properties of the area integral

**4.3.1. Theorem** (Existence theorem). If $H \subset \mathbb{R}^2$ is measurable and closed, and $f$ is continuous on $H$, then $f$ is also integrable.

From the theorem and the remark before Definition 4.2.4 follows the geometric meaning of the area integral: if $H \subset \mathbb{R}^2$ is measurable and closed, and $f$ is a non-negative function continuous on $H$, then $\iint_H f$ is the volume of the solid bounded from above by the part of the surface $z = f(x,y)$ over $H$ and from below by the set $H$ in the $xy$-plane.

The more important properties of the area integral are described by the following theorems.

**4.3.2. Theorem.** If $f$ is integrable on the measurable $H$, and $G \subset H$ is measurable, then $f$ is also integrable on $G$.

**4.3.3. Theorem.** If $f$ is integrable on each of the non-overlapping, measurable sets $H_i$ ($i = 1, \ldots, n$), then it is also integrable on the set

$$H = \bigcup_{i=1}^{n} H_i$$

and

$$\iint_H f = \sum_{i=1}^{n} \iint_{H_i} f.$$

**4.3.4. Theorem.** If $f$ and $g$ are integrable on the measurable set $H$, $c \in \mathbb{R}$, then $cf$ and $f + g$ are also integrable on $H$, and

$$\iint_H (cf) = c \iint_H f,$$
$$\iint_H (f + g) = \iint_H f + \iint_H g.$$

**4.3.5. Theorem.** If $f$ and $g$ are integrable on the measurable set $H$, and $f \leq g$ on $H$, then

$$\iint_H f \leq \iint_H g.$$

**4.3.6. Theorem.** If $f$ is integrable on the measurable set $H$, then $|f|$ is also integrable on $H$, and

$$\left| \iint_H f \right| \leq \iint_H |f|.$$

## 4.4. Calculation of the area integral

Now we present theorems that make it possible to calculate the area integral using single-variable Riemann integrals. First let us look at integration over an interval.

**4.4.1. Theorem.** Let $f$ be integrable on the interval

$$I = [a,b] \times [c,d] \subset \mathbb{R}^2,$$

and suppose that for all $x \in [a,b]$ the integral (depending on $x$)

$$g(x) = \int_c^d f(x,y)\,dy$$

exists. Then $g$ is integrable on $[a,b]$, and

$$\iint_I f = \int_a^b g(x)\,dx,$$

or

$$\iint_I f(x,y)\,dx\,dy = \int_a^b \left( \int_c^d f(x,y)\,dy \right) dx.$$

The conditions of Theorem 4.4.1 are satisfied if, for example, $f$ is continuous on the interval $I$.

Naturally, the roles of $x$ and $y$ can be interchanged, that is, if $f$ is integrable on $I$, and for every fixed $y \in [c,d]$ the integral

$$h(y) = \int_a^b f(x,y)\,dx$$

exists, then $h$ is integrable on $[c,d]$, and

$$\iint_I f = \int_c^d h(y)\,dy = \int_c^d \left( \int_a^b f(x,y)\,dx \right) dy.$$

For the last "double integral" the parentheses are sometimes omitted. We emphasize that in this case the integration always proceeds from the inside out.

The transformation of the area integral into a double integral can also be applied to plane regions more general than intervals. Let us introduce the following terminology:

**4.4.2. Definition.** Let $\varphi$ and $\psi$ be continuous real functions defined on the interval $[a,b] \subset \mathbb{R}$, and $\varphi \leq \psi$ on $[a,b]$. Then the set

$$N = \{(x,y) \in \mathbb{R}^2 \mid a \leq x \leq b,\ \varphi(x) \leq y \leq \psi(x)\}$$

is called a *normal domain with respect to $y$* (see the following figure).

*(Figure 4.5.)*

Similarly, sets of the form

$$M = \{(x,y) \in \mathbb{R}^2 \mid a \leq y \leq b,\ \varphi(y) \leq x \leq \psi(y)\}$$

are called *normal domains with respect to $x$* (see the following figure).

It can be shown that:

**4.4.3. Theorem.** Any normal domain is bounded, closed and measurable, and furthermore if $f$ is integrable on the normal domain $N$ appearing in the previous definition, then

$$\iint_N f(x,y)\,dx\,dy = \int_a^b \left( \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy \right) dx,$$

provided that the inner integral on the right side exists for all $x \in [a,b]$.

Similarly, if $f$ is integrable on the normal domain $M$, then

$$\iint_M f(x,y)\,dx\,dy = \int_a^b \left( \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx \right) dy,$$

provided that the inner integral on the right side exists for all $y \in [a,b]$.

*(Figure 4.6.)*

We note that if $f$ is continuous on the normal domain $N$ or $M$, respectively, then the conditions of Theorem 4.4.3 are satisfied.

The double integrals

$$\int_a^b \left( \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy \right) dx \qquad \text{and} \qquad \int_a^b \left( \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx \right) dy$$

are usually also written in the form

$$\int_a^b dx \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy, \qquad \text{and} \qquad \int_a^b dy \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx,$$

respectively.

**4.4.4. Example.** Let $H \subset \mathbb{R}^2$ be the bounded set which is bounded by the lines $y = x$, $y = 0$, $x = 1$ and $x = 2$, and calculate the area integral

$$\iint_H e^{\frac{y}{x}}\,dx\,dy\!$$

*(Figure 4.7.)*

Obviously

$$H = \{(x,y) \in \mathbb{R}^2 \mid 1 \leq x \leq 2,\ 0 \leq y \leq x\}$$

(see Figure 4.7).

Since $H$ is a normal domain with respect to $y$ and the integrand is continuous on $H$, therefore

$$\iint_H e^{\frac{y}{x}}\,dx\,dy = \int_1^2 \left( \int_0^x e^{\frac{y}{x}}\,dy \right) dx = \int_1^2 \left[ x e^{\frac{y}{x}} \right]_{y=0}^{x} dx$$
$$= \int_1^2 x(e - 1)\,dx = \left[ (e-1)\frac{x^2}{2} \right]_1^2 = \frac{3(e-1)}{2}.$$

# Chapter 5

# Differential equations

## 5.1. First-order linear differential equations

By an ordinary (scalar) *differential equation* we mean a functional equation in which the derivatives of the unknown single-variable real function $y$ also appear. An $n$-th order differential equation can be symbolically written by the formula

$$F(x, y, y', \dots, y^{(n)}) = 0$$

where $F : \mathbb{R}^{n+2} \to \mathbb{R}$ is a given function. The function $y$ is a *solution* of the differential equation on some interval $I \subset \mathbb{R}$, if $y$ is differentiable on $I$, and for all $x \in I$

$$F(x, y(x), y'(x), \dots, y^{(n)}(x)) = 0.$$

(By derivatives we mean the derivatives with respect to $I$, thus in the case of a closed interval, the corresponding one-sided derivatives at the endpoints.) In this chapter we will examine the solution of some types of scalar differential equations. First let us consider the

$$y' + p(x)y = q(x)$$

*first-order linear differential equation*, where $p$ and $q$ are continuous real functions defined on the interval $(\alpha, \beta) \subset \mathbb{R}$. If $q$ is identically zero on $(\alpha, \beta)$, then the equation is called *homogeneous*, otherwise it is called *inhomogeneous*.

Suppose that $y$ is a solution of the differential equation on the interval $(\alpha, \beta)$, that is

$$y'(x) + p(x)y(x) = q(x),$$

for all $x \in (\alpha, \beta)$. Let $P$ be an antiderivative of $p$ on $(\alpha, \beta)$. Multiplying the last equation by $e^{P(x)}$ we get that for all $x \in (\alpha, \beta)$

$$y'(x)e^{P(x)} + p(x)y(x)e^{P(x)} = q(x)e^{P(x)}.$$

This is equivalent to the equations

$$\left(y(x)e^{P(x)}\right)' = q(x)e^{P(x)},$$

$$y(x)e^{P(x)} = \int q(x)e^{P(x)}\,dx,$$

and

$$y(x) = e^{-P(x)} \int q(x)e^{P(x)}\,dx, \qquad x \in (\alpha, \beta).$$

Thus the following is true:

**5.1.1. Theorem.** *Let $p$ and $q$ be continuous functions on $(\alpha, \beta)$. If $P$ and $G$ are antiderivatives of $p$ and $q \cdot (\exp \circ P)$ respectively on $(\alpha, \beta)$, then $y$ is a solution of the equation*

$$y' + p(x)y = q(x)$$

*on the interval $(\alpha, \beta)$ if and only if for some $c \in \mathbb{R}$*

$$y(x) = e^{-P(x)}\bigl(G(x) + c\bigr),$$

*for all $x \in (\alpha, \beta)$.*

From the form of the solutions it can be seen that if we prescribe the *initial condition*

$$y(x_0) = y_0,$$

where $x_0 \in (\alpha, \beta)$ and $y_0 \in \mathbb{R}$, then exactly one solution satisfies it.

**5.1.2. Example.** Let us look for the solution of the initial value problem

$$y' + 3y = x, \qquad y(0) = 1.$$

According to the previous theorem

$$y(x) = e^{-3x} \int x e^{3x}\,dx, \qquad x \in (-\infty, \infty).$$

By integration by parts we obtain that

$$\int x e^{3x}\,dx = \int x \left(\frac{e^{3x}}{3}\right)'\,dx = x\frac{e^{3x}}{3} - \int \frac{e^{3x}}{3}\,dx = \frac{xe^{3x}}{3} - \frac{e^{3x}}{9} + c.$$

Therefore

$$y(x) = \frac{x}{3} - \frac{1}{9} + ce^{-3x}.$$

Taking into account the initial condition $y(0) = 1$, we get that

$$1 = y(0) = -\frac{1}{9} + c,$$

and from here $c = \dfrac{10}{9}$. Thus the solution of the initial value problem is

$$y(x) = \frac{x}{3} - \frac{1}{9} + \frac{10}{9}e^{-3x}, \qquad x \in (-\infty, \infty).$$

## 5.2. Separable differential equations

A differential equation of the form

$$y' = g(x)h(y)$$

is called a *separable differential equation*, where $g : (\alpha, \beta) \to \mathbb{R}$ and $h : (\gamma, \delta) \to \mathbb{R} \setminus \{0\}$ are continuous functions, and $(\alpha, \beta)$ and $(\gamma, \delta) \subset \mathbb{R}$ are intervals.

Suppose that $y$ is a solution of the differential equation on some interval $(a, b) \subset (\alpha, \beta)$, that is for all $x \in (a, b)$

$$y'(x) = g(x)h(y(x)).$$

We get that for all $x \in (a, b)$

$$\frac{y'(x)}{h(y(x))} - g(x) = 0,$$

which is equivalent to the condition

$$\bigl(F(y(x)) - G(x)\bigr)' = 0$$

where $F$ is an antiderivative of $\dfrac{1}{h}$ on $(\gamma, \delta)$, and $G$ is an antiderivative of $g$ on $(\alpha, \beta)$. This holds if and only if there exists $c \in \mathbb{R}$ such that

$$F(y(x)) = G(x) + c,$$

for all $x \in (a, b)$. Thus the following is true:

**5.2.1. Theorem.** *Let $g : (\alpha, \beta) \to \mathbb{R}$ and $h : (\gamma, \delta) \to \mathbb{R} \setminus \{0\}$ be given continuous functions. Let $F$ be an antiderivative of $\dfrac{1}{h}$ on $(\gamma, \delta)$ and $G$ an antiderivative of $g$ on $(\alpha, \beta)$. Then a function $y$ is a solution of the equation*

$$y' = g(x)h(y)$$

*on some interval $(a, b) \subset (\alpha, \beta)$ if and only if there exists $c \in \mathbb{R}$ such that for all $x \in (a, b)$*

$$F(y(x)) = G(x) + c.$$

We note that unlike linear differential equations, the solutions of a separable differential equation are generally not defined on the whole interval $(\alpha, \beta)$.

**5.2.2. Example.** Let us look for the solution of the initial value problem

$$y' = y^2, \qquad y(0) = 1.$$

Since $y(0) > 0$ and $y$ cannot have a root, therefore $y > 0$ everywhere it is defined. With the notations of the theorem

$$g(x) = 1, \qquad (\alpha, \beta) = (-\infty, \infty),$$
$$h(x) = x^2, \qquad (\gamma, \delta) = (0, \infty),$$

therefore according to the theorem there exists $c \in \mathbb{R}$ such that

$$-\frac{1}{y(x)} = x + c.$$

Taking into account the condition $y(0) = 1$ we get that $c = -1$, and thus

$$y(x) = \frac{1}{1 - x}.$$

The solution is defined only on the interval $(-\infty, 1)$.

## 5.3. Second-order linear homogeneous equations

Let $a, b \in \mathbb{R}$. The equation

$$y'' + ay' + by = 0$$

is called a *second-order linear homogeneous differential equation with constant coefficients*. We look for its solution in the form $y(x) = e^{\lambda x}$, $x \in (-\infty, \infty)$, then we arrive at the

$$\lambda^2 + a\lambda + b = 0$$

*characteristic equation*. The following theorem gives the solutions of the equation depending on the characteristic roots.

**5.3.1. Theorem.** *Let $a, b \in \mathbb{R}$. Let the roots of the equation*

$$\lambda^2 + a\lambda + b = 0$$

*be $\lambda_1$ and $\lambda_2$.*

*(i) If $\lambda_1, \lambda_2 \in \mathbb{R}$, $\lambda_1 \neq \lambda_2$, then every solution of the equation is of the form*

$$y(x) = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$$

*where $c_1, c_2 \in \mathbb{R}$.*

*(ii) If $\lambda_1 = \lambda_2 = \lambda \in \mathbb{R}$, then every solution of the equation is of the form*

$$y(x) = c_1 e^{\lambda x} + c_2 x e^{\lambda x}$$

*where $c_1, c_2 \in \mathbb{R}$.*

*(iii) If $\lambda_1$ and $\lambda_2$ are complex, that is $\lambda_1 = \alpha + i\beta$, $\lambda_2 = \alpha - i\beta$, ($\alpha, \beta \in \mathbb{R}$), then every solution of the equation is of the form*

$$y(x) = c_1 e^{\alpha x}\cos(\beta x) + c_2 e^{\alpha x}\sin(\beta x)$$

*where $c_1, c_2 \in \mathbb{R}$.*

The solutions appearing in the theorem are defined on the whole number line.

**5.3.2. Example.** Let us look for the solutions of the equation

$$y'' + 3y' + 2y = 0.$$

Since the roots of the characteristic equation

$$\lambda^2 + 3\lambda + 2 = 0$$

are $\lambda_1 = -2$ and $\lambda_2 = -1$, therefore according to the theorem every solution is of the form

$$y(x) = c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

where $c_1, c_2 \in \mathbb{R}$.

## 5.4. Second-order linear inhomogeneous equations

Now let us consider the

$$y'' + ay' + by = f(x)$$

*inhomogeneous equation*, where $a, b \in \mathbb{R}$, and $f$ is a continuous function on an interval $(\alpha, \beta) \subset \mathbb{R}$. The solutions of the inhomogeneous and the corresponding homogeneous equation have the following relation:

**5.4.1. Theorem.** *Let $a, b \in \mathbb{R}$ and $f$ be a continuous function on $(\alpha, \beta)$. If $y_P$ is a solution of the equation*

$$y'' + ay' + by = f(x)$$

*on $(\alpha, \beta)$, then any other solution $y$ of the inhomogeneous equation on $(\alpha, \beta)$ can be written in the form*

$$y = y_P + y_H$$

*where $y_H$ is a solution of the*

$$y'' + ay' + by = 0$$

*homogeneous equation.*

Since we know the solutions of the homogeneous equation, according to the theorem, to write down all solutions of the inhomogeneous equation it is sufficient to know a single specific solution of the inhomogeneous equation, which is also called a *particular solution*. The following theorem gives the possible form of the particular solution in the case of a special right-hand side.

**5.4.2. Theorem.** *Consider the*

$$y'' + ay' + by = p(x)\, e^{\mu x}\cos(\nu x)$$

*inhomogeneous equation, where $a, b, \mu, \nu \in \mathbb{R}$, and $p : \mathbb{R} \to \mathbb{R}$ is a polynomial. Let $\lambda_1$ and $\lambda_2$ be the roots of the characteristic equation*

$$\lambda^2 + a\lambda + b = 0$$

*of the homogeneous equation. Let $\lambda^* = \mu + i\nu$, and define the number $s$ by the formula*

$$s = \begin{cases} 0, & \text{if } \lambda^* \neq \lambda_1 \text{ and } \lambda^* \neq \lambda_2 \\ 1, & \text{if } \lambda^* = \lambda_1 \neq \lambda_2 \text{ or } \lambda^* = \lambda_2 \neq \lambda_1 \\ 2, & \text{if } \lambda^* = \lambda_1 = \lambda_2 \end{cases}$$

*Then the inhomogeneous equation has a solution of the form*

$$y_P(x) = x^s\bigl(q_1(x)\, e^{\mu x}\cos(\nu x) + q_2(x)\, e^{\mu x}\sin(\nu x)\bigr)$$

*where $q_1$ and $q_2$ are polynomials of the same degree as $p$.*

The statement remains true if we replace $\cos(\nu x)$ with $\sin(\nu x)$ on the right-hand side of the inhomogeneous equation.

**5.4.3. Example.** Let us look for the solutions of the equation

$$y'' + 3y' + 2y = \cos(2x).$$

The roots of the characteristic equation of the homogeneous equation

$$y'' + 3y' + 2y = 0$$

are $\lambda_1 = -2$ and $\lambda_2 = -1$. With the notations of the theorem $p(x) = 1$, $\mu = 0$ and $\nu = 2$. Therefore $\lambda^* = 2i$ and $s = 0$. According to the theorem, the equation

$$y'' + 3y' + 2y = \cos(2x)$$

has a solution of the form

$$y_P(x) = A\cos(2x) + B\sin(2x)$$

where $A, B \in \mathbb{R}$. By differentiation we get that

$$y_P'(x) = -2A\sin(2x) + 2B\cos(2x),$$

and

$$y_P''(x) = -4A\cos(2x) - 4B\sin(2x).$$

Substituting the formulas of $y_P$, $y_P'$ and $y_P''$ into the inhomogeneous equation we obtain that

$$(-2A + 6B)\cos(2x) - (6A + 2B)\sin(2x) = \cos(2x), \qquad x \in \mathbb{R}.$$

From here

$$-2A + 6B = 1,$$
$$6A + 2B = 0.$$

The solution of the system of equations is

$$A = -\frac{1}{20}, \qquad B = \frac{3}{20}.$$

Thus

$$y_P(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x).$$

Combining this with the result of Example 5.3.2, we obtain that all solutions of the inhomogeneous equation are of the form

$$y(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

where $c_1, c_2 \in \mathbb{R}$.

With the help of the following theorem we can significantly expand the range of equations that we can solve with the "method of trial functions".

**5.4.4. Theorem** (Principle of superposition). *Let $a, b \in \mathbb{R}$, and $f_1, f_2$ be continuous functions on an interval $(\alpha, \beta)$. If $y_1$ and $y_2$ are solutions on $(\alpha, \beta)$ of the equations*

$$y'' + ay' + by = f_1(x)$$

*and*

$$y'' + ay' + by = f_2(x)$$

*respectively, then $y_1 + y_2$ is a solution on $(\alpha, \beta)$ of the equation*

$$y'' + ay' + by = f_1(x) + f_2(x).$$

**5.4.5. Example.** According to the previous theorem, the particular solution of the equation

$$y'' + 3y' + 2y = \cos(2x) + 1$$

is the sum of the particular solutions $y_1$ and $y_2$ of the equations

$$y'' + 3y' + 2y = \cos(2x)$$

and

$$y'' + 3y' + 2y = 1$$

respectively. In Example 5.4.3 we have already seen that

$$y_1(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x), \qquad x \in (-\infty, \infty),$$

and with a similar calculation we get that

$$y_2(x) = \frac{1}{2}, \qquad x \in (-\infty, \infty).$$

Therefore the particular solution of the equation

$$y'' + 3y' + 2y = \cos(2x) + 1$$

is

$$y_P(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + \frac{1}{2}, \qquad x \in (-\infty, \infty).$$

Since the solutions of the homogeneous equation

$$y'' + 3y' + 2y = 0$$

are of the form

$$y_H(x) = c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

where $c_1, c_2 \in \mathbb{R}$, according to Theorem 5.4.1 every solution of the equation

$$y'' + 3y' + 2y = \cos(2x) + 1$$

is of the form

$$y(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + \frac{1}{2} + c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

where $c_1, c_2 \in \mathbb{R}$.
