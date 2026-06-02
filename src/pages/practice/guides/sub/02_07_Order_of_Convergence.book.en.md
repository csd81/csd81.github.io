## 2.7. Order of Convergence

In the previous sections we observed that some sequence converges to a limit faster than other sequences. In this section we define the notion of order of convergence which can characterize the speed of the convergence.

Let $p_k$ be a convergent sequence with limit $p$. We say that the *order of convergence* of the sequence $p_k$ is $\alpha$ if $\alpha \geq 1$ and there exists a constant $c \geq 0$ such that

$$|p_{k+1} - p| \leq c |p_k - p|^\alpha \quad \text{for all } k \geq 0, \tag{2.16}$$

and if $\alpha = 1$, then we also assume that $c < 1$.

If we want to be more precise, then in case when (2.16) holds, we could say that the order of convergence is *at least* $\alpha$, since it is possible that (2.16) can be satisfied with an exponent bigger than $\alpha$, too. For simplicity, we will omit "at least" in the sequel, but the notion should always be understood in this sense. If we want to emphasize that $p_k$ satisfies (2.16) with some $\alpha$, but it does not satisfy it with any exponent bigger than $\alpha$, then we say that the order of convergence is *exactly* $\alpha$.

If the order of convergence of a sequence is $\alpha = 1$, then we say that the convergence is *linear*, and if $\alpha = 2$, then we say that the convergence is *quadratic*.

Suppose $p_k$ converges to $p$ linearly. Then it is easy to see that

$$|p_k - p| \leq c^k |p_0 - p| \tag{2.17}$$

holds. For some cases, it is not easy to show a linear convergence of a numerical method using the definition (2.16). So we extend the previous definition in such a way that if a sequence satisfies relation (2.17) with a constant $0 \leq c < 1$, then we also say that the convergence is linear.

Suppose $p_k \to p$ with order $\alpha$. If the finite limit

$$\lambda = \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\alpha} \tag{2.18}$$

exists, then we call $\lambda$ as the *asymptotic error constant*. It can be proved easily that if the limit (2.18) exists and it is finite, then $p_k$ is convergent and its order of convergence is $\alpha$. If $p_k$ converges linearly and its asymptotic error constant is 0, then we speak about *superlinear* convergence.

**Theorem 2.28.** *Suppose $p_k$ converges to $p$ of order $\alpha$ with the asymptotic error constant $\lambda \neq 0$. Then*

(i) $\displaystyle \lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^\beta} = 0$ *for all $\beta < \alpha$, and*

(ii) $\displaystyle \lim_{k \to \infty} \frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \infty$ *for all $\beta > \alpha$.*

**Proof.** The statements follow from relation

$$\frac{|p_{k+1} - p|}{|p_k - p|^\beta} = \frac{|p_{k+1} - p|}{|p_k - p|^\alpha}\frac{1}{|p_k - p|^{\beta - \alpha}}. \square$$

It follows from the above theorem, that if a sequence $p_k$ converges to $p$ of order $\alpha$, and the asymptotic error constant $\lambda \neq 0$, then the order of convergence is exactly $\alpha$.

**Example 2.29.** Consider again the Newton iteration of Example 2.22. In Table 2.8 we have listed in the last three columns the numerical values of the formula $|p_{k+1} - p|/|p_k - p|^\alpha$ for $\alpha = 1, 2$ and 3 using the value $p = 0.5397851608092811$. We can observe that for $\alpha = 1$ the sequence goes to 0. For $\alpha = 2$ the sequence remains bounded but it does not converge to 0, for $\alpha = 3$ it converges to $\infty$. (Certainly from the first 5 terms of a sequence we should not make conclusions about a limit of a sequence, but generation of more terms will confirm the above observations.) Therefore, the numerical evidence suggests that the order of convergence of this sequence is 2. $\square$

Table 2.8: Order of convergence of the Newton iteration, $f(x) = e^x - 2\cos x$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ | $\alpha = 3$ |
|---|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |             |             |             |
| 1 | 1.0000000000 |  1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 |  2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 |  1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 |  3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 |  2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

**Theorem 2.30.** *Suppose a sequence $p_k$ satisfies inequality (2.16) with some $c \geq 0$ and $\alpha > 1$. Then $p_k$ converges locally to $p$, and for every $k$*

$$|p_k - p| \leq c^{\frac{\alpha^k - 1}{\alpha - 1}}|p_0 - p|^{\alpha^k}. \tag{2.19}$$

**Proof.** Relation (2.19) can be easily proved with mathematical induction. Then it implies

$$|p_k - p| \leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0 - p|\right)^{\alpha^k}.$$

Hence if $p_0$ is such that $c^{\frac{1}{\alpha-1}}|p_0 - p| < 1$, then $p_k \to p$, i.e., $p_k$ converges locally to $p$. $\square$

**Example 2.31.** Suppose $p_k \to p$ and $q_k \to q$ linearly and quadratically, respectively, which satisfy (2.17) and (2.16) with $c = 1/2$, respectively. Moreover, we suppose $|p_0 - p| < 1$ and $|q_0 - q| < 1$. Then relations (2.17) and (2.19) yield that $|p_k - p| \leq (1/2)^k$ and $|q_k - q| \leq (1/2)^{2^k - 1}$. In Table 2.9 we listed these error bounds for $k = 1, 2, \ldots, 5$. We can see that the error decreases much faster in the quadratic case. $\square$

Table 2.9:

| $k$ | $(1/2)^k$ | $(1/2)^{2^k - 1}$ |
|---|---|---|
| 1 | $5.0000 \cdot 10^{-1}$ | $5.0000 \cdot 10^{-1}$ |
| 2 | $2.5000 \cdot 10^{-1}$ | $1.2500 \cdot 10^{-1}$ |
| 3 | $1.2500 \cdot 10^{-1}$ | $7.8125 \cdot 10^{-3}$ |
| 4 | $6.2500 \cdot 10^{-2}$ | $3.0518 \cdot 10^{-5}$ |
| 5 | $3.1250 \cdot 10^{-2}$ | $4.6566 \cdot 10^{-10}$ |
| 6 | $1.5625 \cdot 10^{-2}$ | $1.0842 \cdot 10^{-19}$ |

**Theorem 2.32.** *Let $g \in C^m[a,b]$, $p \in (a,b)$ and $p = g(p)$. Consider the fixed-point iteration $p_{k+1} = g(p_k)$.*

(i) *If $|g'(p)| < 1$, then the fixed-point iteration converges locally and linearly to $p$.*

(ii) *If $g'(p) = g''(p) = \cdots = g^{(m-1)}(p) = 0$, then the fixed-point iteration converges locally to $p$ of order $m$ with the asymptotic error constant $g^{(m)}(p)/m!$.*

**Proof.** Statement (i) follows from the proof of Theorem 2.15.

For the proof of statement (ii), we consider the Taylor approximation of $g$ around $p$ of degree $(m-1)$:

$$g(p_k) = g(p) + g'(p)(p_k - p) + \cdots + \frac{g^{(m-1)}(p)}{(m-1)!}(p_k - p)^{m-1} + \frac{g^{(m)}(\xi_k)}{m!}(p_k - p)^m,$$

where $\xi_k \in \langle p_k, p\rangle$. Using that the first $m-1$ derivatives are equal to 0 at $p$, $g(p) = p$ and $g(p_k) = p_{k+1}$, we get

$$|p_{k+1} - p| = \frac{|g^{(m)}(\xi_k)|}{m!}|p_k - p|^m \leq c|p_k - p|^m. \tag{2.20}$$

In the last estimate we used that $g \in C^m[a,b]$, i.e., $g^{(m)}$ is continuous, and therefore, it is bounded in a neighborhood of $p$. The limit (2.18) follows from these, since $\xi_k \to p$ as $k \to \infty$ by relation $|\xi_k - p| \leq |p_k - p|$. Therefore we obtain

$$\lim_{k \to \infty} \frac{p_{k+1} - p}{(p_k - p)^m} = \lim_{k \to \infty} \frac{g^{(m)}(\xi_k)}{m!} = \frac{g^{(m)}(p)}{m!}. \square$$

It follows from the above theorem that the order of convergence of a fixed-point iteration is always a positive integer assuming that $g$ is smooth enough. Theorem 2.36 below shows that it is not true, in general, in the case of multistep iterations.

We will need the notion of a multiple root. We say that $p \in (a,b)$ is a root of *multiplicity* $m$ of $f \in C[a,b]$ if there exists a function $q \in C[a,b]$ such that $q(p) \neq 0$ and

$$f(x) = (x - p)^m q(x), \quad x \in (a,b). \tag{2.21}$$

We can prove the next result easily.

**Theorem 2.33.** *Let $f \in C^m[a,b]$, $p \in (a,b)$.*

(i) *Let $p$ be a root of multiplicity $m$ of $f$, and the function $q$ in (2.21) is $m$ times differentiable. Then*

$$f(p) = f'(p) = f''(p) = \cdots = f^{(m-1)}(p) = 0, \quad \text{and} \quad f^{(m)}(p) \neq 0. \tag{2.22}$$

(ii) *If (2.22) holds, then $p$ is a root of multiplicity $m$ of $f$.*

(iii) *Suppose $f$ is infinitely many times differentiable, $f$ is expandable in a Taylor-series around $p$, and $f$ satisfies relations (2.22). Then $p$ is a root of order $m$ of $f$, and the function $q$ in (2.21) is also infinitely many times differentiable, and $q$ is expandable in a Taylor-series around $p$.*

The next theorem shows that if $p$ is a simple root of $f$, then the Newton iteration is locally and quadratically convergent, and if $p$ is a multiple root of $f$, then the order of convergence is linear.

**Theorem 2.34.** *Let $f \in C^2[a,b]$.*

(i) *If $f(p) = 0$ and $f'(p) \neq 0$, then the Newton iteration converges locally to $p$, and the order of convergence is quadratic.*

(ii) *If $f(x) = (x - p)^m q(x)$, where $q \in C^2[a,b]$, $q(p) \neq 0$, $m > 1$, then the Newton iteration converges locally to $p$, and the order of convergence is linear.*

**Proof.** Statement (i) follows from part (ii) of Theorem 2.32 since the Newton iteration is a fixed-point iteration with the function $g$ defined in (2.8), and $g'(p) = 0$ by relation (2.9).
Since the function

$$g(x) := \begin{cases} x - \tfrac{f(x)}{f'(x)}, & x \neq p, \\ p, & x = p \end{cases}$$

satisfies

$$g(x) = x - \frac{(x - p)q(x)}{mq(x) + (x - p)q'(x)},$$

it is continuously differentiable at $p$, and $g'(p) = 1 - \tfrac{1}{m}$. Therefore, part (ii) of Theorem 2.32 yields that the order of convergence is linear. $\square$

**Example 2.35.** Find the root of $f(x) = x^3 + x^2 - 8x - 12$ by the Newton–Raphson method from the initial value $p_0 = 0$ and using tolerance $10^{-5}$. It is easy to see that $x = -2$ is a double root, and $x = 3$ is a simple root of the polynomial. In Table 2.10 we can see the numerical values of the iteration corresponding to $p_0 = 0$, and in Table 2.11 corresponding to $p_0 = 2$. In the first case the sequence converges to $-2$, and in the second case it converges to 3. We can observe that in the first case the convergence is linear, but in the second case it is quadratic. $\square$

Table 2.10: Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ |
|---|---|---|---|---|
| 0  | 0.0000000000 | -1.2000e+01 |             |             |
| 1  | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2  | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3  | -1.8853313477 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
| 4  | -1.9433465411 | -1.5866e-02 | 4.9406e-01 | 4.3086e+00 |
| 5  | -1.9718365260 | -3.9436e-03 | 4.9712e-01 | 8.7747e+00 |
| 6  | -1.9859582600 | -9.8308e-04 | 4.9858e-01 | 1.7703e+01 |
| 7  | -1.9929890302 | -2.4542e-04 | 4.9929e-01 | 3.5558e+01 |
| 8  | -1.9964969780 | -6.1313e-05 | 4.9965e-01 | 7.1267e+01 |
| 9  | -1.9982491032 | -1.5323e-05 | 4.9982e-01 | 1.4268e+02 |
| 10 | -1.9991247050 | -3.8300e-06 | 4.9991e-01 | 2.8552e+02 |
| 11 | -1.9995623908 | -9.5743e-07 | 4.9996e-01 | 5.7119e+02 |
| 12 | -1.9997812050 | -2.3935e-07 | 4.9998e-01 | 1.1425e+03 |
| 13 | -1.9998906049 | -5.9835e-08 | 4.9999e-01 | 2.2852e+03 |
| 14 | -1.9999453030 | -1.4959e-08 | 4.9999e-01 | 4.5705e+03 |
| 15 | -1.9999726517 | -3.7396e-09 | 5.0000e-01 | 9.1412e+03 |
| 16 | -1.9999863259 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

Table 2.11: Newton iteration, $f(x) = x^3 + x^2 - 8x - 12$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha = 1$ | $\alpha = 2$ |
|---|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 |             |             |
| 1 | 4.0000000000 |  3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 |  6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 |  5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 |  4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 |  3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 |  1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

**Theorem 2.36.** *If $p$ is a simple root of $f$, then the secant method converges locally to $p$ of order $\alpha = (1 + \sqrt{5})/2 \approx 1.618$.*

**Proof.** We use the notations and results introduced in the proof of Theorem 2.27. By inequality (2.13) we have

$$|p_{k+1} - p| \leq M|p_k - p||p_{k-1} - p|.$$

Then, applying estimate $|p_k - p| \leq \tfrac{1}{M}\varepsilon^{q_k}$, we get

$$\begin{aligned}
|p_{k+1} - p| &\leq |p_k - p|^{r_0} M |p_k - p|^{1-r_0}|p_{k-1} - p| \\
&\leq |p_k - p|^{r_0} M \left(\frac{1}{M}\varepsilon^{q_k}\right)^{1-r_0}\frac{1}{M}\varepsilon^{q_{k-1}} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{q_k + q_{k-1} - r_0 q_k} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{q_{k+1} - r_0 q_k} \\
&= |p_k - p|^{r_0} M^{r_0 - 1}\varepsilon^{r_1^{k+1}}.
\end{aligned}$$

Note that the last step follows from (2.15) (with some calculations). Since $r_1^{k+1} \to 0$ as $k \to \infty$, we get that there exists a constant $c$ such that $|p_{k+1} - p| \leq c|p_k - p|^{r_0}$, and hence the order of convergence is $r_0 = \tfrac{1 + \sqrt{5}}{2}$. $\square$

We have seen that the Newton iteration is only linearly convergent in the case of a multiple root. It is possible to prove that the same holds for the secant method. Next we discuss how to accelerate the speed of the convergence in this case.

Let $f \in C^3[a,b]$, suppose $p \in (a,b)$ is a multiple root of $f$. More precisely, we assume that $f(x) = (x - p)^m q(x)$ with $m > 1$ and $q \in C^3[a,b]$. We define the function

$$\mu(x) = \begin{cases} \tfrac{f(x)}{f'(x)}, & \text{if } x \neq p, \\ 0, & \text{if } x = p. \end{cases}$$

We can see that

$$\mu(x) = \frac{(x - p)q(x)}{mq(x) + (x - p)q'(x)},$$

and hence $\mu \in C^2[a,b]$. Moreover, $\mu'(p) = \tfrac{1}{m}$, and so $p$ is only a simple root of $\mu$. Therefore if we use the Newton iteration for the function $\mu$ instead of $f$, we get a quadratic convergence. Then we get the sequence

$$p_{k+1} = p_k - \frac{\mu(p_k)}{\mu'(p_k)} = p_k - \frac{f(p_k)f'(p_k)}{(f'(p_k))^2 - f(p_k)f''(p_k)}. \tag{2.23}$$

### Exercises

1. Show that the bisection method is linearly convergent.
2. Prove inequality (2.19).
3. Let $a > 0$. Show that

$$p_{k+1} = \frac{p_k(p_k^2 + 3a)}{3p_k^2 + a}$$

   is a locally convergent sequence of order 3 to approximate $\sqrt{a}$.
4. Find the order of convergence of the sequence $p_k = \tfrac{1}{k}$. What is the order of convergence of $p_k = \tfrac{1}{k^n}$?
5. Show that $p_k = 10^{-2^k}$ goes to 0 quadratically.
6. Show that $x = 0$ is a double root of the function $\sin^2 x$.
7. Prove Theorem 2.33.
8. Consider the following iterations:
   - (a) (Halley iteration) $p_{k+1} = p_k - \tfrac{1}{a_k}$, where $a_k = \tfrac{f'(p_k)}{f(p_k)} - \tfrac{1}{2}\tfrac{f''(p_k)}{f'(p_k)}$,
   - (b) (Olver iteration) $p_{k+1} = p_k - \tfrac{f(p_k)}{f'(p_k)} - \tfrac{1}{2}\tfrac{f''(p_k)}{f'(p_k)}\left(\tfrac{f(p_k)}{f'(p_k)}\right)^2$.

   Determine the order of convergence of the methods. Apply these methods to the problems in Exercise 1 of Section 2.3.
9. Find the root of $f(x) = (x^2 - 5)^3$ using Newton iteration, secant method, iteration (2.23), and iteration

$$p_{k+1} = p_k - m\frac{f(p_k)}{f'(p_k)},$$

   where $m$ the multiplicity of the root. Compare the order of convergence of the sequences. What is the order of convergence of the last iteration?
10. Suppose we already determined a root $x_1$ of the function $f$. Then if we apply a numerical method to find a root of the function $g(x) = f(x)/(x - x_1)$, then we get another root of $f$ (or $x_1$ again, if $x_1$ is a multiple root). This is the so-called *deflation method*. With this method determine all roots of the polynomials together with their multiplicities (using any approximation technique):
    - (a) $f(x) = x^3 - 3x^2 + 4$,
    - (b) $f(x) = x^4 - 5x^3 + 9x^2 - 7x + 2$

