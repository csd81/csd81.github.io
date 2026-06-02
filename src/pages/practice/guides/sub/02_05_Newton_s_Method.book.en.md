## 2.5. Newton's Method

One general approach in numerical analysis is that we replace the problem by a "simpler" one which is "close" to the original problem, and we hope that the solution of the simpler problem approximate that of the original problem. Here our goal is to find the solution of the scalar equation $f(x) = 0$. We replace the function $f$ by its first-order Taylor polynomial approximation, and we solve the resulting linear equation. Geometrically this means that the intersection of the tangent line with the $x$-axis gives an approximation of the root of the original nonlinear equation. The equation of the tangent line to the graph of $f$ at $p_0$ is $y = f(p_0) + f'(p_0)(x - p_0)$, so its intersection with the $x$-axis is the solution of the linear equation $f(p_0) + f'(p_0)(x - p_0) = 0$, hence it is $x = p_0 - f(p_0)/f'(p_0)$ (assuming, of course, that $f'(p_0) \neq 0$). This number is denoted by $p_1$, and we repeat the procedure from this point. Then we get the recursive sequence defined by

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}. \tag{2.7}$$

The iterative method (2.7) is called *Newton–Raphson method* or shortly *Newton's method* or *Newton iteration*.

**Example 2.22.** We applied the Newton's method for the problem of Example 2.17, and we got the numerical results presented in Table 2.5. Similarly to Algorithm 2.18, as the distance of the consecutive terms of the sequence became smaller than a predefined tolerance value, we terminated the generation of the sequence. We observe that the sequence converges very fast to the root of the function. $\square$

Table 2.5: Newton's method, $f(x) = e^x - 2\cos x$, $p_0 = 0.1$, $TOL = 10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 |  7.5291e-01 |
| 2 | 0.5678850726 |  7.8450e-02 |
| 3 | 0.5402639121 |  1.3139e-03 |
| 4 | 0.5397853041 |  3.9302e-07 |
| 5 | 0.5397851608 |  3.5207e-14 |

The Newton's method is a one-step iteration with the function

$$g(x) := x - \frac{f(x)}{f'(x)}. \tag{2.8}$$

Computing the derivative of $g$ we get

$$g'(x) = 1 - \frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2} = \frac{f(x)f''(x)}{(f'(x))^2}. \tag{2.9}$$

Let $p$ be a root $f$ satisfying $f'(p) \neq 0$. Then $g'(p) = 0$, so Theorem 2.15 yields immediately the following result.

**Theorem 2.23.** *Let $f \in C^2[a,b]$, and let $p \in (a,b)$ be such that $f(p) = 0$ and $f'(p) \neq 0$. Then the Newton's method converges locally to $p$.*

**Example 2.24.** Consider the function $f(x) = 0.5 \arctan x$. It's only root is $p = 0$. We have that $f'(0) = 0.5$, so the Newton's method converges locally to $p = 0$, i.e., if $p_0$ is close enough to 0, then the Newton-iteration converges to 0. In Table 2.6 we present the first several terms of this sequence starting from $p_0 = 1.4$. (In the 15th step the program terminated with an error, since $f'(p_{14}) = 0$ on the computer.) We can see that the sequence $p_k$ does not converge to 0 in this case. $\square$

Table 2.6: Newton's method, $f(x) = 0.5 \arctan x$, $p_0 = 1.4$

| $k$ | $p_k$ | $f(p_k)$ |
|---|---|---|
| 0  |  1.4000000e+00 |  0.4752734 |
| 1  | -1.4136186e+00 | -0.4775591 |
| 2  |  1.4501293e+00 |  0.4835443 |
| 3  | -1.5506260e+00 | -0.4990071 |
| 4  |  1.8470541e+00 |  0.5372889 |
| 5  | -2.8935624e+00 | -0.6190257 |
| 6  |  8.7103258e+00 |  0.7282453 |
| 7  | -1.0324977e+02 | -0.7805557 |
| 8  |  1.6540564e+04 |  0.7853679 |
| 9  | -4.2972148e+08 | -0.7853982 |
| 10 |  2.9006412e+17 |  0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 |  2.7436939e+70 |  0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 |  2.1963537e+282 |  0.7853982 |

### Exercises

1. Apply the Newton's method for the equations presented in Exercise 1 of Section 2.3.
2. Let $f(x) = 0.5 \arctan x$. Then $f$ has the unique root $x = 0$. Let $p_k$ be the Newton's iteration sequence. Show that there exists a number $p^*$ such that
   - (a) if $|p_0| < p^*$, then $p_k \to 0$,
   - (b) if $|p_0| = p^*$, then the sequence $p_k$ repeats $p_0$ and $-p_0$, and hence it is not convergent,
   - (c) if $|p_0| > p^*$, then $p_k$ alternates (i.e., $p_k p_{k+1} < 0$ for all $k$), and $|p_k| \to \infty$.
3. Give an iteration to approximate $\sqrt[k]{a}$.

