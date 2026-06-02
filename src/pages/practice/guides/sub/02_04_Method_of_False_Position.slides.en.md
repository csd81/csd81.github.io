## 2.4 Method of False Position

**Method of false position (Regula Falsi):** Let $f\colon [a,b] \to \mathbb{R}$ be continuous and $f(a)f(b) < 0$. First define $[a_0, b_0] = [a,b]$. At the $k$th step, let $p_k$ be the intersection of the secant line of $f$ corresponding to the points $a_k$ and $b_k$ and the $x$-axis.

Little calculation gives that

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}. \tag{5}$$

The next interval $[a_{k+1}, b_{k+1}]$ will be either $[a_k, p_k]$ or $[p_k, b_k]$ where the function has sign change.

### Algorithm: method of false position

```
INPUT:  f - is a function,
        [a,b] - is an interval, where f(a)f(b) < 0
        TOL - is the tolerance,
        MAXIT - is the maximal iteration step,
OUTPUT: p - is the approximating root.

i ← 1                   (step counter)
q ← a
while i < MAXIT do
    p ← a - f(a)(a - b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
    if f(p)f(b) < 0 do
        a ← p
    else if f(a)f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximal iteration step is exceeded.)
```

### Theorem

Suppose the continuous function $f \in C[a,b]$ is convex or concave on $[a,b]$ and $f(a)f(b) < 0$. Then the method of false position converges to the unique root $p$ of $f$.

**Proof.** Suppose, e.g., that $f$ is convex and $f(a) < 0$, $f(b) > 0$. Then

$$a_{k+1} = p_k \quad \text{and} \quad b_{k+1} = b \quad \text{for all } k.$$

Since the sequence $p_k$ is monotone increasing and $p_k \leq b$, it converges to a limit $p$, where $a < p \leq b$.

**Proof cont.** Since $f(p_k) < 0$, we get $f(p) \leq 0$. Taking the limit as $k \to \infty$ in

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}$$

we obtain

$$p = p - f(p)\frac{p - b}{f(p) - f(b)},$$

which implies that $f(p) = 0$. The other cases can be argued similarly.

### Example

Solve $e^x - 2\cos x = 0$ using the method of false position. As before, we use the interval $[0,1]$ and $TOL = 10^{-5}$. We can observe that for this equation the method of false position converges much faster than the bisection method.

Method of false position, $f(x) = e^x - 2\cos x$, $[0,1]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967399 | -3.0499e-04 |
| 6 | 0.53967399 | 1.00000000 | 0.53975970 | -6.9856e-05 |
| 7 | 0.53975970 | 1.00000000 | 0.53977933 | -1.5999e-05 |
| 8 | 0.53977933 | 1.00000000 | 0.53978383 | -3.6640e-06 |

### Example

We apply the method of false position for the same equation, but using initial interval $[0,4]$.

Method of false position, $f(x) = e^x - 2\cos x$, $[0,4]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 4.00000000 | 0.07092205 | -9.2224e-01 |
| 1  | 0.07092205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2  | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3  | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4  | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

Note, the bisection method on $[0,4]$ has this accuracy in 18 steps.

---

