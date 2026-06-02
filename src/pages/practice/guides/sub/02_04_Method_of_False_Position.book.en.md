## 2.4. Method of False Position

The advantage of the bisection method is that it is easy to determine the number of steps needed to reach a given accuracy. But its weakness is that it does not take into account the shape of the functions when the next interval is selected in the sequence. This is the idea of the *method of false position* (also called *Regula Falsi*).

We assume the same conditions as in the bisection method. We suppose $f\colon [a, b] \to \mathbb{R}$ is a continuous function which has opposite sign at the end points of the interval, i.e., $f(a)f(b) < 0$. We define a sequence of nested intervals $[a_k, b_k]$ with a help of an inner point $p_k$, but it is no longer the midpoint of the intervals. First define $[a_0, b_0] = [a, b]$. At the $k$th step, let $p_k$ be the intersection of the secant line of $f$ corresponding to the points $a_k$ and $b_k$ (the line segment through the points $(a_k, f(a_k))$ and $(b_k, f(b_k))$) and the $x$-axis. Little calculation gives that

$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}. \tag{2.6}$$

The next interval $[a_{k+1}, b_{k+1}]$ will be either $[a_k, p_k]$ or $[p_k, b_k]$ where the function has a sign change. The method is defined in Algorithm 2.18.

**Algorithm 2.18. method of false position**

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

When we implement the Algorithm 2.18 in a computer program, it is important to test whether $f(a)$ is equal to $f(b)$, since otherwise we divide by 0, and the program fails. Such technical details are not included in the algorithms we present in this lecture note, but those are important when we implement the algorithms.

We show the convergence of the method of false position under the condition when the function $f$ is convex or concave.

**Theorem 2.19.** *Suppose the continuous function $f \in C[a,b]$ is convex or concave on $[a,b]$ and $f(a)f(b) < 0$. Then the method of false position converges to the unique root $p$ of $f$.*

**Proof.** Suppose, e.g., that $f$ is convex and $f(a) > 0$, $f(b) < 0$. The other cases can be argued similarly. Then the left subinterval contains the root $p$ of $f$ at each step, i.e., $a_{k+1} = a$ and $b_{k+1} = p_k$ for all $k$. Since the sequence $p_k$ is monotone decreasing and $a$ is a lower bound of the sequence, it converges to a limit $p \geq a$. We have $f(p_k) < 0$ for all $k$, therefore $f(p) \leq 0$. Since $f(a) > 0$, we get $p > a$. Taking the limit of Equation (2.6) as $k \to \infty$ we obtain

$$p = a - f(a)\frac{a - p}{f(a) - f(p)},$$

which implies that $f(p) = 0$. $\square$

**Example 2.20.** Applying the method of false position to the problem of Example 2.17, we get the numerical values presented in Table 2.3. As in Example 2.17, we use the interval $[0,1]$ and $TOL = 10^{-5}$. We can observe that for this equation and using the given initial interval the method of false position converges much faster than the bisection method. $\square$

Table 2.3: Method of false position, $f(x) = e^x - 2\cos x$, $[0,1]$, $TOL = 10^{-5}$

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

**Example 2.21.** We apply again the method of false position for the equation of Example 2.17 but now on the initial interval $[0,4]$. The numerical results are displayed in Table 2.4. (Only the first and last several steps are presented.) Now, the speed of the convergence is far slower than that of observed in the previous example. (And it becomes even slower if we further increase the right end point of the interval.) On the other hand, (2.5) yields that the bisection method with the initial interval $[0,4]$ has this accuracy in 18 steps, which is only two steps longer than in Example 2.17. $\square$

Table 2.4: Method of false position, $f(x) = e^x - 2\cos x$, $[0,4]$, $TOL = 10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---|---|---|---|---|
| 0  | 0.00000000 | 4.00000000 | 0.07029205 | -9.2224e-01 |
| 1  | 0.07029205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2  | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3  | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4  | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

### Exercises

1. Apply the method of false position for the equations presented in Exercise 1 of Section 2.3.
2. Let

$$f(x) = \begin{cases} \delta, & x \leq 0.5 \\ 4(1 + \delta)(x - x^2) - 1, & x \geq 0.5 \end{cases}$$

   Apply the bisection method and the method of false position on the interval $[0,1]$ to approximate the root of $f$ if
   - (a) $\delta = 2$,
   - (b) $\delta = 0.5$,
   - (c) $\delta = 0.09$.
3. Work out the details of the proof of Theorem 2.19 for all the other cases.

