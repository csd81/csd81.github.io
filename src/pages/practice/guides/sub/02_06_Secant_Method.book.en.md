## 2.6. Secant Method

The Newton's method requires the computation (and hence the existence) of the derivative of $f$. But in practice, $f'$ is not always known, (it is possible that $f$ is not defined by a formula, it may be an output of an other numerical procedure which computes the value of $f$ with a good precision). Or the computation of $f'$ requires too much calculation, so we prefer not to evaluate it. The *secant method* does not require the computation of the derivative $f'$.

Let $p_0$ and $p_1$ be two different initial values of the sequence. Consider the secant line of $f$ corresponding to the points $p_0$ and $p_1$, i.e., the line which connects the points $(p_0, f(p_0))$ and $(p_1, f(p_1))$. Its equation is

$$y = f(p_1) + \frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1).$$

The secant line intersects the $x$-axis at $x = p_1 - \tfrac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1)$. $p_2$ will denote this number. Then we consider the secant line corresponding to $p_1$ and $p_2$, and its intersection with the $x$-axis is denoted by $p_3$. Repeating this procedure we define the sequence $p_k$ by the recursion

$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k). \tag{2.10}$$

This is a two-step iteration, which defines the *secant method*.

**Example 2.25.** We used the secant method for the problem of Example 2.17. The numerical results can be seen in Table 2.7. Comparing it with the Table 2.5 we observe that the secant method converges to its limit slower than the Newton's method. $\square$

Table 2.7: secant method, $f(x) = e^x - 2\cos x$, $p_0 = 0$, $p_1 = 1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 |  1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 |  1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 |  6.0793e-11 |

For the proof of the secant method we need the following theorem.

**Theorem 2.26.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Let $p_k$ be the sequence defined by the secant method. Then for every $k$ there exist $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ and $\eta_k \in \langle p_k, p_{k-1}\rangle$ such that*

$$p_{k+1} - p = \frac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k - p)(p_{k-1} - p). \tag{2.11}$$

**Proof.** Algebraic manipulations give

$$\begin{aligned}
p_{k+1} - p &= p_k - p - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})}f(p_k) \\
&= \frac{(p_{k-1} - p)f(p_k) - (p_k - p)f(p_{k-1})}{f(p_k) - f(p_{k-1})} \\
&= \frac{(p_k - p)(p_{k-1} - p)}{f(p_k) - f(p_{k-1})}\left(\frac{f(p_k)}{p_k - p} - \frac{f(p_{k-1})}{p_{k-1} - p}\right) \\
&= (p_k - p)(p_{k-1} - p)\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})}\frac{\tfrac{f(p_k) - f(p)}{p_k - p} - \tfrac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}}.
\end{aligned}$$

Then the Lagrange Mean Value Theorem implies the existence of $\eta_k \in \langle p_k, p_{k-1}\rangle$ such that

$$\frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}} = f'(\eta_k).$$

Now we have to show that there exists a $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ such that

$$\frac{\tfrac{f(p_k) - f(p)}{p_k - p} - \tfrac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}} = \frac{f''(\xi_k)}{2}. \tag{2.12}$$

Its direct proof is left to Exercise 2. Here we prove relation (2.12) using a result and a notion will be discussed in Chapter 6. The left hand side of (2.12) is a second divided difference $f[p_{k-1}, p, p_k]$ of $f$ corresponding to the points $p_{k-1}, p$ and $p_k$ (see Section 6.2). Corollary 6.17 yields that there exists a $\xi_k \in \langle p_k, p_{k-1}, p\rangle$ such that $f[p_{k-1}, p, p_k] = f''(\xi_k)/2$. $\square$

**Theorem 2.27.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the secant method converges locally to $p$.*

**Proof.** Let $\delta^*$ be such that $f'(x) \neq 0$ for $x \in [p - \delta^*, p + \delta^*]$. Such $\delta^*$ exists, since $f'(p) \neq 0$ and $f'$ is continuous. Let

$$M := \frac{\max\{|f''(x)|\colon x \in [p - \delta^*, p + \delta^*]\}}{2\min\{|f'(x)|\colon x \in [p - \delta^*, p + \delta^*]\}}.$$

Select $\delta$ such that $\delta < \min\{\delta^*, \tfrac{1}{M}\}$, and let $\varepsilon := M\delta$. Then, by our conditions, $0 < \varepsilon < 1$. Let $p_0, p_1 \in (p - \delta, p + \delta)$ arbitrary but different numbers. Relation (2.11) and the definition of $M$ yield that $|p_{k+1} - p| \leq M|p_k - p||p_{k-1} - p|$, and hence

$$M|p_{k+1} - p| \leq M|p_k - p|M|p_{k-1} - p| \tag{2.13}$$

for all $k$. With $k = 1$ we get $M|p_2 - p| \leq M|p_1 - p|M|p_0 - p| \leq (M\delta)^2 = \varepsilon^2 < \varepsilon$. Therefore $|p_2 - p| \leq \varepsilon/M = \delta$, and hence $p_2 \in (p - \delta, p + \delta)$. Similarly we can show that $p_k \in (p - \delta, p + \delta)$ for all $k$.

The definition of $\varepsilon$ implies $M|p_0 - p| < \varepsilon$ and $M|p_1 - p| < \varepsilon$. Now we select a sequence $q_k$ which satisfies $M|p_k - p| \leq \varepsilon^{q_k}$ for all $k$. We can define $q_0 = 1$ and $q_1 = 1$. Suppose the first $k$ terms of the sequence $q_k$ is already defined. Inequality (2.13) yields that relation $M|p_{k+1} - p| \leq \varepsilon^{q_k}\varepsilon^{q_{k-1}}$ must be satisfied. Hence $M|p_{k+1} - p| \leq \varepsilon^{q_{k+1}}$ holds, if $q_{k+1}$ is defined by

$$q_{k+1} = q_k + q_{k-1}, \quad k \geq 1, \quad q_0 = 1, \quad q_1 = 1. \tag{2.14}$$

The sequence defined by (2.14) is the so-called *Fibonacci sequence*. We can show (see Exercise 3) that the general formula of $q_k$ is

$$q_k = \frac{1}{\sqrt{5}}(r_0^{k+1} - r_1^{k+1}), \quad k \geq 0, \tag{2.15}$$

where

$$r_0 = \frac{1 + \sqrt{5}}{2} \approx 1.618, \quad \text{and} \quad r_1 = \frac{1 - \sqrt{5}}{2} \approx -0.618.$$

But then $q_k \to \infty$ as $k \to \infty$. Now we get $p_k \to p$, since

$$|p_k - p| \leq \frac{1}{M}\varepsilon^{q_k} \to 0, \quad \text{as } k \to \infty.$$

$\square$

### Exercises

1. Apply the secant method for the equations presented in Exercise 1 of Section 2.3.
2. Prove relation (2.12). (Hint: show that the expression

$$f[a,b,c] := \frac{\tfrac{f(c) - f(b)}{c - b} - \tfrac{f(b) - f(a)}{b - a}}{c - a}$$

is independent from the order of the numbers $a, b, c$. Therefore, we can assume that $a < b < c$. Take the first-order Taylor approximation of $f$ around $b$ together with the second-order error term. Then express the numerator of the right hand side. Finally, use Theorem 2.2 to show that $f[a,b,c] = f''(\xi)/2$ for some $\xi \in (a,c)$.)
3. Prove formula (2.15).

