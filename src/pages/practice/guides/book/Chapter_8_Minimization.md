# Chapter 8

# Minimization of Functions

In this chapter we investigate the minimization of single and several variable real functions. We study only the minimization, since a function $f(x)$ takes its maximum at a point where the corresponding function $-f(x)$ takes its minimum, so finding a maximum of a function can be reduced to minimization.

We classify minimization algorithms into three groups: methods which do not use derivatives, methods which use only first and which use also second derivatives of a function. In the first class we study the golden section search, the simplex and the Nelder–Mead methods. In the second class we consider the gradient method, and in the third class we define the Newton's method. The quasi-Newton methods can be considered as algorithm in the third class where not the exact values of the derivatives, but their approximate values are used.

## 8.1. Review of Calculus

**Theorem 8.1.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\mathbf{a} \in \mathbb{R}^n$, then $\frac{\partial f(\mathbf{a})}{\partial x_i} = 0$ holds for all $i = 1, \ldots, n$.*

*If $f \in C^2$ and $f'(\mathbf{a}) = \mathbf{0}$ for some $\mathbf{a} \in \mathbb{R}^n$, moreover, the Hessian matrix $f''(\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\mathbf{a}$.*

For two-variable functions we have the following special case of the previous result.

**Theorem 8.2.** *Let $f\colon \mathbb{R}^2 \to \mathbb{R}$, $f \in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*

$$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{8.1}$$

*holds.*

*On the other hand, if relation (8.1) holds at a point $(a, b)$, and*

$$D(a, b) := \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x\, \partial y}(a, b) \right)^2 > 0,$$

*then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*

## 8.2. Golden Section Search Method

Let $f\colon [a, b] \to \mathbb{R}$ be continuous, and suppose that it is a *unimodal function*, i.e., it has a unique minimum point in the interval $[a, b]$. This holds if, e.g., the function is convex on $[a, b]$, but it is not necessary (see, e.g. the second and third functions in Figure 8.1). Let $p$ be the (unique) minimum point of $f$.

![Figure 8.1: Unimodal functions](figure-8-1.png)

*Figure 8.1: Unimodal functions*

The *golden section search method* is similar to the bisection method in the sense that we define a sequence of nested intervals which all contains the minimum point $p$ of $f$: Let $a < y < x < b$. If $f(x) > f(y)$, then $p \in [a, x]$, otherwise $p \in [y, b]$ holds. (See Figure 8.2.) Then we repeat the procedure with the interval $[a, x]$ or $[y, b]$.

![Figure 8.2](figure-8-2.png)

*Figure 8.2:*

We define the points $x$ and $y$ so that the length of the intervals $[a, x]$ and $[y, b]$ be the same: $x - a = b - y = r(b - a)$ for some $0 < r < 1$. Then

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a) \tag{8.2}$$

hold. The assumption $x > y$ implies that $0.5 < r < 1$ must be satisfied. We denote the next interval by $[a', b']$. We specify the next mesh points $x'$ and $y'$ by the rule (8.2), and comparing the functions values $f(x')$ and $f(y')$ we determine the next interval. We have not defined the ratio $r$ yet. In case of the golden section search method, $r$ is defined so that one of the new mesh points $x'$ and $y'$ should coincide with one of the previous mesh points in order in each steps we should evaluate only one new function value.

![Figure 8.3](figure-8-3.png)

*Figure 8.3:*

Figure 8.3 demonstrates the situation when in the next step the minimum point is located in the right interval $[y, b]$. Then we require that $y' = x$ be a mesh point in the next step. Then the following relations are satisfied:

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

and so

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

which yields equation

$$r^2 + r - 1 = 0 \tag{8.3}$$

for the ratio $r$. Its positive solution is $r = (\sqrt{5} - 1)/2 \approx 0.61834$. This is the ratio of the *golden section*, since $r$ satisfies the equation

$$\frac{r}{1 - r} = \frac{1}{r}.$$

In the opposite case when the minimum point is located in the interval $[a, x]$, and we select $x'$ and $y'$ so that $x' = y$ be satisfied. It can be shown easily (see Exercise 3) that this yields the same equation (8.3).

---

**Algorithm 8.3. Golden section search method**

```
INPUT:    f(x) - function to minimze
          [a, b] - interval
          ε - tolerance
OUTPUT:   p - approximation of the minimum point

r ← (√5 − 1)/2
x ← a + r(b − a)
y ← a + (1 − r)(b − a)
fx ← f(x)
fy ← f(y)
while (b − a) > ε do
    if fx > fy do
        b ← x
        x ← y
        fx ← fy
        y ← a + (1 − r)(b − a)
        fy ← f(y)
    else do
        a ← y
        y ← x
        fy ← fx
        x ← a + r(b − a)
        fx ← f(x)
    end do
end do
output((a + b)/2)
```

---

The next result can be shown.

**Theorem 8.4.** *Let $f \in C[a, b]$ be a unimodal function. Then the golden section search method converges to the minimum point of the function $f$.*

It is easy to compute that the length of the interval after $n$ steps is $(b - a)r^n$. Hence to reach $\varepsilon$ tolerance in Algorithm 8.3

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{8.4}$$

steps are required.

**Example 8.5.** Find the minimum point of the function $f(x) = x^2 - 0.8x + 1$. It can be easily checked that its minimum point is $p = 0.4$. We applied Algorithm 8.3 with the starting interval $[-1, 2]$ and tolerance $\varepsilon = 0.005$. Formula (8.4) yields that $n \geq 13.29337586$ steps are needed to reach the required precision. The corresponding numerical results can be seen in Table 8.1. Therefore, the minimum point is located in the interval $[0.3977741449, 0.4013328688]$. The Algorithm 8.3 is formulated so that its output is the midpoint of the last interval, i.e., $0.3995535068$. $\quad\square$

**Exercises**

1. Approximate the minimum point of the following functions using the golden section search method on the given interval:

   (a) $f(x) = x^3 - 3x + 1$, $\quad x \in [-1, 2]$, (b) $f(x) = |\cos x|$, $\quad x \in [0, 2]$,

   (c) $f(x) = 1 - 10xe^{-x}$, $\quad x \in [0, 2]$, (d) $f(x) = \cos(x^2 - x)$, $\quad x \in [1, 3]$.

2. Apply the golden section search method for the function $f(x) = -1/x^2$ on the interval $[-1, 1]$. What do you observe?

---

*Table 8.1: Golden section search method, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991934565 | 0.3999735572 |

3. Prove that if $[a', b'] = [a, x]$ is selected in golden section search then $x' = y$ is satisfied if $r$ is a solution of equation (8.3).

4. Prove Theorem 8.4.

5. Check formula (8.4).

## 8.3. Simplex Method

An $n$-dimensional *simplex* is a convex hull of $n + 1$ number of $n$-dimensional vectors, i.e., the closed set

$$\{\alpha_0 \mathbf{x}^{(0)} + \cdots + \alpha_n \mathbf{x}^{(n)} : 0 \leq \alpha_i \leq 1, \quad \alpha_0 + \cdots + \alpha_n \leq 1\},$$

where the vectors $\mathbf{x}_1 - \mathbf{x}_0, \mathbf{x}_2 - \mathbf{x}_0, \ldots, \mathbf{x}_n - \mathbf{x}_0$ are linearly independent. The vectors $\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$ are called the vertices of the simplex. The 1-dimensional simplexes are the line segments, the 2-dimensional simplexes are the triangles, and the 3-dimensional simplexes are the tetrahedrons.

The *simplex method* is used to approximate the minimum point of a function of $n$ variables. Consider a starting $n$-dimensional simplex. First we find the "worst" vertex, i.e., the vertex where the function takes the largest function value. Let this point be the vector $\mathbf{x}^{(j)}$. Then we reflect the simplex over the center of the best $n$ vertices, i.e., to the point

$$\mathbf{x}_c := \frac{1}{n} \sum_{\substack{i=0 \\ i \neq j}}^{n} \mathbf{x}^{(i)}.$$

The reflected point is given by the formula

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(j)}.$$

If $f(\mathbf{x}_r)$ is not smaller than the largest function value of the previous step, i.e., $f(\mathbf{x}^{(j)})$, then we discard the reflection, and instead of it, we shrink the simplex to half of its size from its "best" vertex: let $\mathbf{x}^{(k)}$ be the best vertex, i.e., the vertex where the function takes the smallest function value. Then we recompute all the other vertices by the formula

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(k)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(k)}), \quad i = 0, 1, \ldots, k - 1, k + 1, \ldots, n.$$

We repeat the previous steps for the resulting (reflected or shrinked) simplex.

We can define several different stopping criteria to this method, or we can use combinations of these methods. For example, we can stop the method when the simplex becomes smaller than a predefined tolerance size. The size of the simplex can be defined, e.g., as the length of its longest edge, i.e., by the number $\max\{\|\mathbf{x}^{(i)} - \mathbf{x}^{(j)}\| : i, j = 0, \ldots, n\}$. Another option is that we apply the stopping criterion $|f_{k+1} - f_k| < \varepsilon$, where $f_k$ denotes the function value at the center of the $k$th simplex. A third criterion can be the following: Let $\bar{f}$ be the average of the function values at the vertices, and $\sigma$ be its standard deviation, i.e.,

$$\bar{f} := \frac{1}{n+1} \sum_{i=0}^{n} f(\mathbf{x}^{(i)}), \qquad \sigma := \sqrt{\frac{1}{n+1} \sum_{i=0}^{n} (f(\mathbf{x}^{(i)}) - \bar{f})^2}.$$

We interrupt the iteration when $\sigma$ becomes smaller than a tolerance. The center of the simplex can be used as an approximation of the minimum point. Finally, we can apply conditions (i) or (ii) of Section 4.4 for the sequence of the center points to set up a stopping criterion.

**Example 8.6.** Find the minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. It is easy to see that the (global) minimum point of the function is $(1, 0.5)$, and the minimal function value is 0. We use the simplex method to approximate the minimum point. We use the starting simplex corresponding to the vertices $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The numerical values of the first 25 steps of the method can be seen in Table 8.2. The center of the 25th simplex is $(0.9063, 0.3542)$, which is a good approximation of the exact minimum point. The corresponding function value is 0.0303 which is close to the true minimum 0. In Figure 8.4 the contour lines (level curves) of the function and the sequence of the simplexes (triangles) can be seen. The blue dot represents the exact minimum point. $\quad\square$

A variant of the simplex method is the *Nelder–Mead method*. Here we reflect, expand or contract the simplex in the following way. Suppose that in each steps the vertices are indexed so that $f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$. Then $\mathbf{x}^{(n)}$ is the "worst" vertex, so we reflect it over the center of the remaining points, i.e., over the point

$$\mathbf{x}_c = \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}.$$

The reflected point is $\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$. We evaluate the function value $f(\mathbf{x}_r)$. We distinguish three cases: (i) $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$, (ii) $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$, so $\mathbf{x}_r$ would be the new best vertex, and (iii) $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$, i.e., $\mathbf{x}_r$ would be the new worst vertex.

---

*Table 8.2: Simplex method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.563 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.563 | 34.000 | 24.563 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.563 | 26.563 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.563 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.563 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.563 | 12.191 |
| 8 | (−1.250, 1.500) | (−1.750, 1.500) | (−1.500, 1.000) | 12.191 | 15.129 | 12.563 |
| 9 | (−1.250, 1.500) | (−1.500, 1.000) | (−1.000, 1.000) | 12.191 | 12.563 | 9.000 |
| 10 | (−1.000, 1.000) | (−1.250, 1.500) | (−0.750, 1.500) | 9.000 | 12.191 | 12.066 |
| 11 | (−1.000, 1.000) | (−0.750, 1.500) | (−0.500, 1.000) | 9.000 | 12.066 | 7.563 |
| 12 | (−0.500, 1.000) | (−1.000, 1.000) | (−0.750, 0.500) | 7.563 | 9.000 | 6.316 |
| 13 | (−0.750, 0.500) | (−0.500, 1.000) | (−0.250, 0.500) | 6.316 | 7.563 | 4.004 |
| 14 | (−0.250, 0.500) | (−0.750, 0.500) | (−0.500, 0.000) | 4.004 | 6.316 | 4.563 |
| 15 | (−0.250, 0.500) | (−0.500, 0.000) | ( 0.000, 0.000) | 4.004 | 4.563 | 2.000 |
| 16 | ( 0.000, 0.000) | (−0.250, 0.500) | ( 0.250, 0.500) | 2.000 | 4.004 | 2.004 |
| 17 | ( 0.000, 0.000) | ( 0.250, 0.500) | ( 0.500, 0.000) | 2.000 | 2.004 | 0.563 |
| 18 | ( 0.500, 0.000) | ( 0.250, 0.000) | ( 0.375, 0.250) | 0.563 | 1.129 | 0.910 |
| 19 | ( 0.500, 0.000) | ( 0.375, 0.250) | ( 0.625, 0.250) | 0.563 | 0.910 | 0.293 |
| 20 | ( 0.625, 0.250) | ( 0.500, 0.000) | ( 0.750, 0.000) | 0.293 | 0.563 | 0.441 |
| 21 | ( 0.625, 0.250) | ( 0.750, 0.000) | ( 0.875, 0.250) | 0.293 | 0.441 | 0.102 |
| 22 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.125) | 0.102 | 0.129 | 0.239 |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.813, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.313) | 0.024 | 0.031 | 0.056 |

![Figure 8.4: Simplex method](figure-8-4.png)

*Figure 8.4: Simplex method.*

In case (i) we replace $\mathbf{x}^{(n)}$ by $\mathbf{x}_r$ (i.e., we accept the reflection), and continue the iteration.

In case (ii) we expand the simplex in the direction of $\mathbf{x}_r$ hoping that we get an even better point. Let

$$\mathbf{x}_e := \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c),$$

where $\alpha > 1$ is a fixed constant (a parameter of the method). If $f(\mathbf{x}_e) < f(\mathbf{x}^{(0)})$ holds, then the expansion is considered to be successful, and we replace $\mathbf{x}^{(n)}$ by $\mathbf{x}_e$. Otherwise we replace $\mathbf{x}^{(n)}$ by $\mathbf{x}_r$, i.e., the reflection is performed but we do not expand the simplex.

In case (iii) we think that the reflection is too far from $\mathbf{x}^{(n)}$, so we try to contract the simplex. Let

$$\mathbf{x}_z := \begin{cases} \mathbf{x}_c - \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{if } f(\mathbf{x}^{(n)}) < f(\mathbf{x}_r), \\ \mathbf{x}_c + \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{if } f(\mathbf{x}^{(n)}) \geq f(\mathbf{x}_r), \end{cases}$$

where $0 < \beta < 1$ is another parameter. If $f(\mathbf{x}_z) < \min\{f(\mathbf{x}^{(n)}), f(\mathbf{x}_r)\}$, then $\mathbf{x}^{(n)}$ is replaced by $\mathbf{x}_z$. Otherwise we shrink the simplex to its half size from its best point:

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n.$$

**Example 8.7.** We apply the Nelder–Mead method with parameters $\alpha = 1.4$ and $\beta = 0.7$ for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ considered in Example 8.6. We start from the same initial simplex $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The first 17 terms of the resulting sequence of vertices can be seen in Table 8.3 and in Figure 8.5. The center of the 17th triangle is $(1.0071, 0.5929)$, and the corresponding function value is 0.0295. We can observe that for this example the Nelder–Mead method converges faster to the minimum point than the simplex method. $\quad\square$

---

*Table 8.3: Nelder–Mead method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, $\alpha = 1.4$, $\beta = 0.7$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 2.600) | 34.000 | 57.000 | 21.203 |
| 2 | (−1.500, 2.600) | (−2.000, 4.000) | (−2.500, 2.600) | 21.203 | 34.000 | 25.603 |
| 3 | (−1.500, 2.600) | (−2.500, 2.600) | (−2.000, 1.200) | 21.203 | 25.603 | 20.560 |
| 4 | (−2.000, 1.200) | (−1.500, 2.600) | (−0.700, 0.920) | 20.560 | 21.203 | 7.602 |
| 5 | (−0.700, 0.920) | (−2.000, 1.200) | (−1.200, −0.480) | 7.602 | 20.560 | 15.440 |
| 6 | (−0.700, 0.920) | (−1.200, −0.480) | ( 0.520, −1.152) | 7.602 | 15.440 | 7.088 |
| 7 | ( 0.520, −1.152) | (−0.700, 0.920) | ( 1.464, 0.394) | 7.088 | 7.602 | 3.891 |
| 8 | ( 1.464, 0.394) | ( 0.520, −1.152) | (−0.192, 0.530) | 2.270 | 7.088 | 3.891 |
| 9 | ( 1.464, 0.394) | (−0.192, 0.530) | ( 0.555, −0.668) | 2.270 | 3.891 | 3.097 |
| 10 | ( 1.464, 0.394) | ( 0.555, −0.668) | ( 0.168, 0.330) | 2.270 | 3.097 | 1.783 |
| 11 | ( 0.168, 0.330) | ( 1.464, 0.394) | ( 0.999, 1.083) | 1.783 | 2.270 | 1.362 |
| 12 | ( 0.999, 1.083) | ( 0.168, 0.330) | ( 1.200, 0.487) | 1.362 | 1.783 | 0.296 |
| 13 | ( 1.200, 0.487) | ( 0.999, 1.083) | ( 0.448, 0.467) | 0.296 | 1.362 | 1.147 |
| 14 | ( 1.200, 0.487) | ( 0.448, 0.467) | ( 0.648, −0.129) | 0.296 | 1.147 | 0.707 |
| 15 | ( 1.200, 0.487) | ( 0.648, −0.129) | ( 0.591, 0.380) | 0.296 | 0.707 | 0.505 |
| 16 | ( 1.200, 0.487) | ( 0.591, 0.380) | ( 1.068, 0.828) | 0.296 | 0.505 | 0.274 |
| 17 | ( 1.068, 0.828) | ( 1.200, 0.487) | ( 0.754, 0.464) | 0.274 | 0.296 | 0.251 |

![Figure 8.5: Nelder–Mead method](figure-8-5.png)

*Figure 8.5: Nelder–Mead method with $\alpha = 1.8$ and $\beta = 0.6$.*

**Exercises**

1. Find the minimum point of the functions

   (a) $f(x, y) = x^2 + 5y^2$, (b) $f(x, y) = x^2 + (x + y - 2)^2$,

   (c) $f(x, y) = 3x^2 + e^{(x - y)^2}$, (d) $f(x, y) = x^2 + \cos^2(x - y)$

   with the Nelder–Mead method. Use the method with different parameter values $\alpha$ and $\beta$ (including $\alpha = 1 = \beta$, i.e., the simplex method).

2. Apply the Nelder–Mead method with some parameter values $\alpha > 1$ and $0 < \beta < 1$ for the function $f(x) = x^2 - y^2$ using the initial simplex vertices $[0, 1]$, $[0, -1]$, $[1, 0]$. What do you observe? What do you observe if you use the simplex method for the same problem?

3. Formulate the simplex method for functions of one variable, and apply it for the problems given in Exercise 1 of Section 8.2.

4. Consider the following method for minimization of real functions of two variables: let $f$ be a function of two variables, $(p_1^{(0)}, p_2^{(0)})$ be a given initial point. Minimize the function of one variable $t \mapsto f(p_1^{(0)} + t, p_2^{(0)})$ (for example, with the simplex method defined in the previous exercise). Let $t_1$ be the minimum point, and define $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Then minimize the function of single variable $t \mapsto f(p_1^{(1)}, p_2^{(1)} + t)$. Let $t_2$ be its minimum point, and then we repeat the method above starting from the point $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$. So repeatedly, minimizing the function along with $x$- and $y$-axes we get the next element of the sequence. Apply this method for the functions defined in Exercise 1. Compare the speed of the convergence with that of the Nelder–Mead method.

## 8.4. Gradient Method

Consider a function $f\colon \mathbb{R}^n \to \mathbb{R}$. It is known from calculus that at a point $\mathbf{p}$ the most rapid decrease of the function $f$ is in the direction of the vector $-f'(\mathbf{p})$:

**Theorem 8.8.** *Let $f \in C^1$. Then the directional derivatives*

$$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$

*has a minimum for the direction $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$.*

A direction $\mathbf{u}$ is called a *descent* of a function $f$ at the point $\mathbf{p}$ if there exists $\delta > 0$ such that $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ for all $0 < t < \delta$, i.e., the function decreases at the point $\mathbf{p}$ in the direction of $\mathbf{u}$. Theorem 8.8 can be interpreted so that the steepest descent of $f$ at the point $\mathbf{p}$ is in the direction $-f'(\mathbf{p})$.

The *gradient method* is based on the previous observation that starting from a point $\mathbf{p}^{(0)}$ we should step forward in the direction of the negative gradient vector. This method is also called the *steepest descent method*. We define it as follows:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{8.5}$$

where the scaling parameter $\alpha_k$ determines the step size. The gradient method (8.5) has several variants. The simplest case is when the step size is constant. Let $h > 0$ be fixed, and use the factor $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$. Then the distance between the consecutive points is constant $h$. Then, in general, the method cannot approximate the exact minimum point better than $h$.

Another variant is that we select $\alpha_k$ so that

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

be satisfied, where

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{8.6}$$

Then in each step we have to minimize a function of a single variable along with the direction of the negative gradient. This version of the gradient method is called *optimal gradient method*.

Using the optimal gradient method we step forward from a point in the direction of the negative gradient into a point where the line is tangent to the contour line (level curve) of the function $f$. This implies that the consecutive directions are perpendicular to each other. (See Exercise 3.)

It can be shown that the optimal gradient method is locally linearly convergent. But the asymptotic error constant can be close to 1, so the convergence can be slow.

**Example 8.9.** We consider again the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ examined in Examples 8.6 and 8.7 and we use the gradient method to find its minimum point. First we use the gradient method with the scaling factor $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$, with the constant step size 0.3. The first 21 terms of the sequence can be seen in Figure 8.6 starting from the initial point $(-1, 4)$ (red circles) and from the initial point $(0.5, 3.5)$ (green circles). The sequences approximate the minimum point $(1, 0.5)$ (blue dot) slowly, and oscillates around it. Note that, as it is known in calculus, the gradient vector is always perpendicular to the contour line through that point, so the gradient method steps in a direction perpendicular to the contour line. $\quad\square$

Next we apply the optimal gradient method from the initial points $(-1, 4)$ (red circles) and $(0.5, 3.5)$ (green circles), respectively. We plotted the first 3 and 12 terms of the corresponding sequences in Figure 8.7. The first sequence gets very close to the minimizer (blue dot) in two steps, and then approaches further to the minimum point. The second sequence enters quickly into the "valley" of the contour lines containing the minimum point, but there it zigzags slowly towards the minimum point. $\quad\square$

![Figure 8.6: Gradient method with constant step size](figure-8-6.png)

*Figure 8.6: Gradient method with constant step size.*

![Figure 8.7: Optimal gradient method](figure-8-7.png)

*Figure 8.7: Optimal gradient method.*

If we cannot or do not want to compute the gradient vector exactly, then we can use the following variant of the method (8.5):

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{8.7}$$

where the $i$th component of the vector $\mathbf{v}^{(k)}$ is defined by

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n,$$

and here $\mathbf{e}^{(i)}$ is the $i$th unit vector.

**Exercises**

1. Apply the gradient method for the functions given in Exercise 1 of Section 8.3. Select any initial point, and use the constant step size $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ with some $h > 0$, and also use the optimal gradient method.

2. Repeat the previous problem using the scale $\alpha_k = h$ with some $h > 0$.

3. Compute the derivative of the function $\phi_k$ defined by (8.6). Using the value of the derivative at $t = \alpha_k$ show that the vectors $\mathbf{p}^{(k+2)} - \mathbf{p}^{(k+1)}$ and $\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$ are orthogonal.

## 8.5. Solving Linear Systems with Gradient Method

Let $\mathbf{A} \in \mathbb{R}^{n \times n}$ be a symmetric matrix, $\mathbf{b} \in \mathbb{R}^n$, $c \in \mathbb{R}$, and consider the quadratic function

$$g\colon \mathbb{R}^n \to \mathbb{R}, \qquad g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c. \tag{8.8}$$

Using the notations $\mathbf{A} = (a_{ij})$, $\mathbf{x} = (x_1, \ldots, x_n)^T$, $\mathbf{b} = (b_1, \ldots, b_n)^T$ we have the following form of $g$:

$$g(x_1, \ldots, x_n) = \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j - \sum_{i=1}^{n} b_i x_i + c.$$

Compute the partial derivative $\frac{\partial g}{\partial x_i}$. Since $a_{ij} = a_{ji}$, we get

$$\frac{\partial g}{\partial x_i}(x_1, \ldots, x_n) = \frac{1}{2} \sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \sum_{j=1}^{n} a_{ij} x_j - b_i.$$

Therefore, in a vectorial form we have

$$g'(\mathbf{x}) = \left( \frac{\partial g}{\partial x_1}(\mathbf{x}), \ldots, \frac{\partial g}{\partial x_n}(\mathbf{x}) \right)^T = \mathbf{A}\mathbf{x} - \mathbf{b}. \tag{8.9}$$

Hence if $\mathbf{A}$ is invertible, then $g$ has exactly one critical point, which is the solution of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$. Let $\bar{\mathbf{x}}$ be the critical point of $g$, and $\mathbf{x} = \bar{\mathbf{x}} + \Delta\mathbf{x}$.

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}(\bar{\mathbf{x}} + \Delta\mathbf{x})^T \mathbf{A}(\bar{\mathbf{x}} + \Delta\mathbf{x}) - \mathbf{b}^T(\bar{\mathbf{x}} + \Delta\mathbf{x}) + c \\
&= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} \\
&\quad - \mathbf{b}^T \bar{\mathbf{x}} - \mathbf{b}^T \Delta\mathbf{x} + c.
\end{aligned}$$

So using the relations $\mathbf{A} = \mathbf{A}^T$, $\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}}$, $\mathbf{b}^T \Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{b}$ and $\mathbf{A}\bar{\mathbf{x}} = \mathbf{b}$, we get

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} - \mathbf{b}^T \bar{\mathbf{x}} + (\Delta\mathbf{x})^T(\mathbf{A}\bar{\mathbf{x}} - \mathbf{b}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} + c \\
&= g(\bar{\mathbf{x}}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}.
\end{aligned}$$

Therefore,

$$g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) = \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}. \tag{8.10}$$

If $\mathbf{A}$ is positive definite, then $g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) > 0$ for all vectors $\Delta\mathbf{x} \neq \mathbf{0}$, hence $\bar{\mathbf{x}}$ minimizes the function $g$. Similarly, if $\mathbf{A}$ is negative definite, then it follows from equation (8.10) that $g$ has a maximum at $\bar{\mathbf{x}}$. All positive or negative definite matrices are invertible by Theorem 3.9. Hence we proved the following result.

**Theorem 8.10.** *Let $\mathbf{A}$ be symmetric. Then the gradient vector of the quadratic function $g(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c$ is $g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}$. If $\mathbf{A}$ is positive (negative) definite, then $g$ has a global minimum (maximum), which is taken at the point $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$.*

The proof of the previous result yields easily:

**Corollary 8.11.** *If a quadratic function has a local minimum (maximum) at a point, then there the function has also global minimum (maximum).*

If $\mathbf{A}$ is a symmetric positive definite matrix, then Theorem 8.10 yields that the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ can be solved that we define the quadratic function $g$ by (8.8), and we minimize it by the optimal gradient method. Therefore, we define the iteration

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)},$$

where

$$\mathbf{v}^{(k)} = g'(\mathbf{p}^{(k)}) = \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}.$$

$\alpha_k$ is selected so that it be the minimum point of the scalar function $\phi_k(t) := g(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)})$. The function $\phi_k$ is a quadratic polynomial, since

$$\begin{aligned}
\phi_k(t) &= \frac{1}{2}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big)^T \mathbf{A}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) - \mathbf{b}^T\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) + c \\
&= t^2 \frac{1}{2}\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)} - t\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big) + \frac{1}{2}\big(\mathbf{p}^{(k)}\big)^T \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}^T \mathbf{p}^{(k)} + c.
\end{aligned}$$

Therefore, its minimum point $\alpha_k$ can be given explicitly as

$$\alpha_k = \frac{\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big)}{\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)}}.$$

Introducing the residual vector $\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}$, the method can be summarized in the following way:

$$\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{8.11}$$

$$\alpha_k = \frac{\big(\mathbf{r}^{(k)}\big)^T \mathbf{r}^{(k)}}{\big(\mathbf{r}^{(k)}\big)^T \mathbf{A}\mathbf{r}^{(k)}} \tag{8.12}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}. \tag{8.13}$$

**Example 8.12.** Consider the linear system

$$\begin{array}{rcrcrcl}
4x_1 &+& 2x_2 &-& x_3 &=& 0 \\
2x_1 &+& 5x_2 & & &=& 8 \\
-x_1 & & &+& 3x_3 &=& 1.
\end{array}$$

We applied the optimal gradient method (8.11)-(8.13) with the initial point $\mathbf{p}^{(0)} = (3, 3, 3)^T$. Note that the method is applicable since the coefficient matrix of the linear system is symmetric and positive definite. The first 13 terms of the sequence $\mathbf{p}^{(k)}$ are listed in Table 8.4 together with the error of the approximation. Note, the true solution is $(-1, 2, 0)$. $\quad\square$

---

*Table 8.4: Solving the linear system with gradient method*

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

**Exercises**

1. Show that any quadratic function

   $$g(\mathbf{x}) = \sum_{i=1}^{n} \sum_{j=1}^{n} \tilde{a}_{ij} x_i x_j + \sum_{i=1}^{n} \tilde{b}_i x_i + c$$

   can be written in the form (8.8). How can $g'(\mathbf{x})$ and $g''(\mathbf{x})$ be given using a matrix notation?

2. Prove Corollary 8.11.

3. Check the derivation of formulas (8.11)-(8.13).

4. Apply the gradient method for finding the minimum point of the functions:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

5. Solve the following linear systems with gradient method:

   (a)
   $$\begin{array}{rcrcl}
   4x_1 &-& 3x_2 &=& 4 \\
   -3x_1 &+& 3x_2 &=& 3
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcl}
   6x_1 &+& 3x_2 &-& 2x_3 &=& 6 \\
   3x_1 &+& 5x_2 &-& x_3 &=& -4 \\
   -2x_1 &-& x_2 &+& 3x_3 &=& -2
   \end{array}$$

6. Let $f(x, y) = \frac{1}{2}x^2 + \frac{9}{2}y^2$. Show that the optimal gradient method started from the initial point $\mathbf{p}^{(0)} = (9, 1)^T$ generates the sequence

   $$\mathbf{p}^{(k)} = \begin{pmatrix} 9 \\ (-1)^k \end{pmatrix} 0.8^k.$$

   What is the asymptotic error constant of this sequence? Give a function and initial value such that the asymptotic error constant of the sequence generated by the optimal gradient method is a predefined constant $0 < \alpha < 1$.

## 8.6. Newton's Method for Minimization

Consider a function $f\colon \mathbb{R}^n \to \mathbb{R}$, and fix a vector $\mathbf{p}^{(0)}$. If $f \in C^3$, then in a neighbourhood of $\mathbf{p}^{(0)}$ the function $f$ can be approximated by its second-order Taylor polynomial

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}), \tag{8.14}$$

where $f'(\mathbf{p}^{(0)})$ is the gradient vector of $f$, and $f''(\mathbf{p}^{(0)})$ is the Hessian matrix of $f$ at $\mathbf{p}^{(0)}$. Suppose that $f''(\mathbf{p}^{(0)})$ is positive definite. Then, by Theorem 8.10, $g$ has a global minimum at the point

$$\mathbf{p}^{(1)} = \mathbf{p}^{(0)} - \big(f''(\mathbf{p}^{(0)})\big)^{-1} f'(\mathbf{p}^{(0)}).$$

Then we consider $\mathbf{p}^{(1)}$ as an approximation of the minimum point of $f$, and we repeat the previous process from the point $\mathbf{p}^{(1)}$. We can define the iteration:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}), \tag{8.15}$$

which is called *Newton's method for minimization*. It is easy to see that it is equivalent to the Newton's method for solving the nonlinear system $f'(\mathbf{x}) = \mathbf{0}$. Therefore, we get the following result immediately.

**Theorem 8.13.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$ and $f''(\mathbf{p})$ be positive definite. Then $f$ has a local minimum at $\mathbf{p}$, and the Newton's iteration (8.15) locally quadratically converges to $\mathbf{p}$.*

**Proof.** We apply Theorem 8.1 to obtain that $f$ has a local minimum at $\mathbf{p}$. Since iteration (8.15) is equivalent to solving the system $f'(\mathbf{x}) = \mathbf{0}$ for $\mathbf{x} = \mathbf{p}$ using Newton's method, Theorem 2.56 yields the local quadratic convergence of iteration (8.15) to $\mathbf{p}$. $\quad\square$

**Example 8.14.** We apply Newton's method for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ of Examples 8.6, 8.7 and 8.9. The first 5 terms of the sequence starting from $(-1, 4)^T$ can be seen in Table 8.5. We observe quick convergence to the minimum point $(1, 0.5)^T$. The numerical results indicate that the order of convergence is quadratic. We note that the Newton's iteration starting from $(1, 3)^T$ gives back the exact minimum point in one step. $\quad\square$

---

*Table 8.5: Newton's method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

**Example 8.15.** Consider the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$. It is easy to see that the minimum point of this function is also $(1, 0.5)^T$. It can be checked that the Hessian of the function at the minimum point is $f''(1, 0.5) = \mathbf{0}$, so it is not positive definite. Despite of it, the Newton's method converges for this function starting from $(-1, 4)^T$, as it can be seen in Table 8.6. But the convergence in this case is only linear. $\quad\square$

---

*Table 8.6: Newton's method, $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 244.10000000 | 4.03112887 | |
| 1 | (−1.01468429, 2.84801762) | 51.47734819 | 3.09388745 | 0.76749902 |
| 2 | (−1.06550085, 2.12183854) | 13.60182932 | 2.62614813 | 0.84881825 |
| 3 | (−1.25304590, 1.80360379) | 6.79822461 | 2.60299802 | 0.99118476 |
| 4 | (−2.19917836, 2.64963726) | 10.23933318 | 3.85430701 | 1.48071838 |
| 5 | ( 1.13216300, −4.75372475) | 1355.09401353 | 5.25538684 | 1.36351018 |
| 6 | ( 1.13190045, −2.95581491) | 267.68684927 | 3.45833116 | 0.65805454 |
| 7 | ( 1.13102026, −1.75800646) | 52.89017856 | 2.26180447 | 0.65401616 |
| 8 | ( 1.12811546, −0.96208855) | 10.46057564 | 1.46769088 | 0.64890263 |
| 9 | ( 1.11900871, −0.43955842) | 2.07752857 | 0.94706552 | 0.64527588 |
| 10 | ( 1.09458417, −0.11167347) | 0.41720946 | 0.61894313 | 0.65353781 |
| 11 | ( 1.05056809, 0.07705747) | 0.08386326 | 0.42595483 | 0.68819704 |
| 12 | ( 1.01290080, 0.19574848) | 0.01637137 | 0.30452490 | 0.71492300 |
| 13 | ( 1.00119582, 0.28963767) | 0.00320655 | 0.21036572 | 0.69079974 |
| 14 | ( 1.00003517, 0.35899525) | 0.00063312 | 0.14100475 | 0.67028386 |
| 15 | ( 1.00000031, 0.40597370) | 0.00012506 | 0.09402630 | 0.66683071 |
| 16 | ( 1.00000000, 0.43731559) | 0.00002470 | 0.06268441 | 0.66668888 |
| 17 | ( 1.00000000, 0.45821040) | 0.00000488 | 0.04178960 | 0.66666668 |
| 18 | ( 1.00000000, 0.47214026) | 0.00000096 | 0.02785974 | 0.66666666 |
| 19 | ( 1.00000000, 0.48142684) | 0.00000019 | 0.01857316 | 0.66666667 |
| 20 | ( 1.00000000, 0.48761789) | 0.00000004 | 0.01238211 | 0.66666667 |

**Exercises**

1. Apply the Newton's method for minimization for the functions defined in Exercise 1 of Section 8.3.

2. Show that for quadratic functions where the Hessian is positive definite, the Newton's method gives back the minimum point of the function exactly in one step.

3. Show that if the conditions of Theorem 8.13 hold and $\mathbf{p}^{(0)}$ is close enough to $\mathbf{p}$, then the sequence (8.15) is defined for all $k$, i.e., $f''(\mathbf{p}^{(k)})$ is invertible.

## 8.7. Quasi-Newton Method for Minimization

Similarly to the previous section, we approximate the function $f\colon \mathbb{R}^n \to \mathbb{R}$ in a neighbourhood of $\mathbf{p}^{(k)}$ by the quadratic function

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}). \tag{8.16}$$

If $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ and $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, then (8.16) approximates the second-order Taylor polynomial of $f$ around $\mathbf{p}^{(k)}$, so it can be considered as an approximation of $f$ in a small neighbourhood of $\mathbf{p}^{(k)}$. We hope that the minimum point of $g$ will approximate that of $f$. If $\mathbf{A}^{(k)}$ is positive definite, then Theorem 8.10 yields that the minimum point of $g$ is

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{8.17}$$

Such iterations are called *quasi-Newton methods for minimization*.

We can define $\mathbf{A}^{(k)}$ and $\mathbf{v}^{(k)}$ as a numerical approximation of the Hessian matrix $f''(\mathbf{p}^{(k)})$ and the gradient vector $f'(\mathbf{p}^{(k)})$: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ and $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, where

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big) \tag{8.18}$$

and

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ is the $i$th unit vector, $h > 0$ is fixed small step size). Here we used the first-order forward difference formula to approximate the first partial derivatives of $f$, and formulas (7.19)–(7.20) to approximate the second partial derivatives. This way we do not need to now the exact values of the gradient vector and the Hessian matrix, but in each step of the iteration we need to perform $n^2$ number of function evaluations.

Next we consider the case when in (8.17) we have the exact gradient value $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, and hence we examine quasi-Newton methods of the form

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}). \tag{8.19}$$

Here we assume that we can evaluate the gradient vector of the function, so the question is only how to approximate the Hessian matrix. One possibility is to use Broyden's method defined in Section 2.13 to approximate solutions of the system $f'(\mathbf{x}) = \mathbf{0}$:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{8.20}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{8.21}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{8.22}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{8.23}$$

**Example 8.16.** We apply Broyden's method defined by (8.20)–(8.23) for minimizing the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We start the sequence from the initial point $(2, 2)^T$, and the matrix $\mathbf{A}^{(0)}$ is defined as a second-order difference approximation (8.18) of the Hessian matrix $f''(2, 2)$ using step size $h = 0.05$. The first 10 elements of the sequence can be seen in Table 8.7. $\quad\square$

The problem with the iteration (8.23) is that since $\mathbf{A}^{(k)}$ is an approximation of the Hessian $f''(\mathbf{p})$, it is natural to require that $\mathbf{A}^{(k)}$ be positive definite for all $k$. It is also needed to argue that the quadratic function (8.16) has a minimum for all $k$. The numerical

---

*Table 8.7: Broyden's method for minimization, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

experience also gives that those quasi-Newton methods of the form (8.19) are the most efficient where $\mathbf{A}^{(k)}$ is a positive definite approximation of the Hessian. But the matrix sequence $\mathbf{A}^{(k)}$ generated by the Broyden's method is not even symmetric.

Our first goal is to modify the Broyden's method so that it should generate a symmetric matrix for all $k$. Suppose $\mathbf{A}^{(k)}$ is symmetric, and let

$$\mathbf{B}^{(k+1,1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}$$

be the matrix computed by the Broyden iteration. It can be shown (see Exercise 2) that the closest symmetric matrix to $\mathbf{A}$ (in some sense) is the matrix $\frac{1}{2}(\mathbf{A} + \mathbf{A}^T)$. Therefore, it is natural to modify $\mathbf{B}^{(k+1,1)}$ in the following way

$$\begin{aligned}
\mathbf{B}^{(k+1,2)} &= \frac{1}{2}\Big(\mathbf{B}^{(k+1,1)} + \mathbf{B}^{(k+1,1)T}\Big) \\
&= \mathbf{A}^{(k)} + \frac{1}{2}\frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}.
\end{aligned} \tag{8.24}$$

But now the problem is that the matrix $\mathbf{B}^{(k+1,2)}$ does not satisfy the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ which was the motivation of the Broyden's method. We correct it by applying relation (8.23) again: let

$$\mathbf{B}^{(k+1,3)} = \mathbf{B}^{(k+1,2)} + \frac{(\mathbf{y}^{(k)} - \mathbf{B}^{(k+1,2)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{8.25}$$

This is again a non-symmetric matrix, so we repeat the above procedure again: define the matrices $\mathbf{B}^{(k+1,2i)}$ and $\mathbf{B}^{(k+1,2i+1)}$ from the previous term of the sequence using formulas (8.24) and (8.25), respectively, for $i = 2, 3, \ldots$. It can be shown that the matrix sequence $\mathbf{B}^{(k+1,i)}$ converges to the symmetric matrix

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^4} \mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T.
\end{aligned} \tag{8.26}$$

This is a correction iteration which preserves the symmetric property of the matrix, and also it satisfies the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$. This iteration is called *Powell-symmetric-Broyden update*, or shortly, *PSB update*. The following result can be shown:

**Theorem 8.17.** *Let $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$, $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (8.20)–(8.22), (8.26) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$ if $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

**Example 8.18.** Here we apply the quasi-Newton method (8.19) with the PSB update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We started the computation from the same initial value that was used in Example 8.16. The corresponding numerical values can be seen in Table 8.8. The approximation here is better than that for the Broyden's method. $\quad\square$

---

*Table 8.8: Quasi-Newton method (8.19) with the PSB update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

The PSB update does not satisfy the goal formulated earlier that $\mathbf{A}^{(k)}$ be positive definite for all $k$ if $\mathbf{A}^{(0)}$ is positive definite. According to Theorem 5.6, if a matrix $\mathbf{A}$ is positive definite, then it has a Cholesky factorization $\mathbf{A} = \mathbf{L}\mathbf{L}^T$, where $\mathbf{L}$ is non-singular. Otherwise, if a matrix $\mathbf{A}$ has the form $\mathbf{A} = \mathbf{M}\mathbf{M}^T$ where $\mathbf{M}$ is non-singular, then $\mathbf{A}$ is positive definite, since $\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0$, and here equality holds if and only if $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, and hence $\mathbf{x} = \mathbf{0}$.

Let $\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T$ where $\mathbf{M}^{(k)}$ is invertible (but not necessary lower triangular). We look for the next Hessian approximation $\mathbf{A}^{(k+1)}$ in the form $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$ where we require that $\mathbf{A}^{(k+1)}$ satisfies the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$. Then it implies $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, hence if $\mathbf{A}^{(k+1)}$ is positive definite, then the inequality

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{8.27}$$

holds. We show that the secant equation has a positive definite solution assuming (8.27) holds.

We introduce the notation $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$. Then the secant equation has the form

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{8.28}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{8.29}$$

We would like to compute the matrix $\mathbf{M}^{(k+1)}$ by updating the matrix $\mathbf{M}^{(k)}$. Therefore, using the derivation of the Broyden's method and using (8.29), it is natural to look for the matrix $\mathbf{M}^{(k+1)}$ in the form

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}. \tag{8.30}$$

Then $\mathbf{M}^{(k+1)}$ satisfies equation (8.29), and its difference from the matrix $\mathbf{M}^{(k)}$ is the smallest in the sense that for all $\mathbf{z} \perp \mathbf{v}^{(k)}$ it follows $\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z}$. Substituting $\mathbf{M}^{(k+1)}$ back to equation (8.28) we get

$$\begin{aligned}
\mathbf{v}^{(k)} &= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\big((\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T\big)^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\mathbf{v}^{(k)}(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{v}^{(k)}.
\end{aligned}$$

It yields $(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \alpha \mathbf{v}^{(k)}$, where

$$\begin{aligned}
\alpha &= 1 - \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} + \frac{(\mathbf{v}^{(k)})^T (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \alpha^2 \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}} + \alpha,
\end{aligned}$$

and so

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{8.31}$$

We have that the numerator is positive since $\mathbf{A}^{(k)}$ is positive definite, therefore, $\alpha$ can be obtained from equation (8.31), and

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Substituting it back to equation (8.30) we get

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

Little computation gives (see Exercise 4) that

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{8.32}$$

We have to show that the iteration generates a positive definite matrix. Since $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, it is enough to show that $\mathbf{M}^{(k+1)}$ is invertible. By our assumption, the matrix $\mathbf{M}^{(k)}$ is positive definite, and hence it is invertible. If we assume that (8.27) holds, then the invertibility of $\mathbf{M}^{(k+1)}$ follows easily from (8.30) and Theorem 2.58. The details are left to the reader (Exercise 5).

The formula (8.32) was introduced by Broyden, Flecher, Goldfarb and Shanno in 1970, therefore, it is called *BFGS update*. This is the best known iteration for the approximation of the Hessian. The initial value of the iteration can be the matrix $f''(\mathbf{p}^{(0)})$ or its numerical approximation by the second-order difference formula (8.18). If $\mathbf{p}^{(0)}$ is close enough to $\mathbf{p}$ and $f''(\mathbf{p})$ is positive definite, then $f''(\mathbf{p}^{(0)})$ and so $\mathbf{A}^{(0)}$ is also positive definite.

Finally, consider condition (8.27). Applying Lagrange's Mean Value Theorem (Theorem 2.40), relations (8.21) and (8.22), we get

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &= \big(f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)})\big)^T (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) \\
&= \sum_{i=1}^{n} \left( \frac{\partial f_i(\mathbf{p}^{(k+1)})}{\partial x_i} - \frac{\partial f_i(\mathbf{p}^{(k)})}{\partial x_i} \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\xi^{(k,i)})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}).
\end{aligned}$$

If the iterates $\mathbf{p}^{(k)}$ are close enough to $\mathbf{p}$ during the iteration, then the vectors $\xi^{(k,i)}$ are also close to $\mathbf{p}$, and hence the continuity of $f''$ yields

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &\approx \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\mathbf{p})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)})^T f''(\mathbf{p})(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}),
\end{aligned}$$

which is positive, since $f''(\mathbf{p})$ is positive definite. Therefore, this condition is automatically satisfied for large $k$ if the sequence converges to $\mathbf{p}$. Clearly, if (8.27) does not hold, then iteration (8.32) can be defined, but in this case $\mathbf{A}^{(k+1)}$ is only positive semidefinite, not positive definite.

The following result can be proved.

**Theorem 8.19.** *Let $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$, and $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (8.20)–(8.22), (8.32) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$, assuming $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

**Example 8.20.** We applied the quasi-Newton method (8.19) with the BFGS update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We used the same initial condition as in Example 8.16. The numerical results are listed in Table 8.9. We have got a very precise approximation in 8 steps. $\quad\square$

---

*Table 8.9: Quasi-Newton method (8.19) with the BFGS update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.23976784, 0.70438005) | 1.31429e-01 | 0.31505527 | 1.06461181 |
| 3 | ( 1.02721672, 0.49403232) | 5.98519e-03 | 0.02786330 | 0.08843939 |
| 4 | ( 1.00995636, 0.51197836) | 2.13820e-04 | 0.01557595 | 0.55901316 |
| 5 | ( 0.99954439, 0.49921815) | 8.41172e-07 | 0.00090492 | 0.05809714 |
| 6 | ( 1.00000534, 0.50000495) | 5.76547e-11 | 0.00000728 | 0.00804964 |
| 7 | ( 1.00000005, 0.50000002) | 9.15800e-15 | 0.00000005 | 0.00708494 |
| 8 | ( 1.00000000, 0.50000000) | 8.60000e-19 | 0.00000000 | 0.01827989 |

It can be proved by mathematical induction that the inverses $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ of the matrices $\mathbf{A}^{(k)}$ generated by the BFGS update satisfy the recursion

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}.
\end{aligned} \tag{8.33}$$

Using this formula, (8.20) can be replaced by

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}), \tag{8.34}$$

so during the iteration we do not need to compute matrix inverses or solving linear systems.

Similarly to the derivation of the BFGS update, we can obtain the definition of the *DFP update*. Again, we are looking for the approximation of the Hessian in the form $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, but instead of the iterates (8.28)–(8.29) we use the equivalent iteration

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}.
\end{aligned}$$

Its solution is considered in the form

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}.$$

Then we get

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

assuming (8.27) holds. From this and Theorem 2.58 we get

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{8.35}$$

This formula is called the *DFP update*, since it was established by Davidon (1959) and Flecher, Powell (1963). This iteration satisfies a result analogous to Theorem 8.19.

It can be checked that the inverse of the matrix $\mathbf{A}^{(k)}$ generated by the DFP update can be computed by the recursion:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{8.36}$$

**Example 8.21.** Here we used the DFP update in the problem investigated in Examples 8.16 and 8.20. This method converges with a speed similar to the BFGS update. The numerical results can be seen in Table 8.10. $\quad\square$

---

*Table 8.10: Quasi-Newton method (8.19) with DFP update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25682024, 0.70394625) | 1.61396e-01 | 0.32794924 | 1.10818219 |
| 3 | ( 1.09891338, 0.59229507) | 2.00977e-02 | 0.13528576 | 0.41252041 |
| 4 | ( 1.01148073, 0.50204318) | 6.24877e-04 | 0.01166112 | 0.08619621 |
| 5 | ( 1.00103666, 0.50022718) | 4.77384e-06 | 0.00106126 | 0.09100838 |
| 6 | ( 1.00001771, 0.50001111) | 8.01068e-10 | 0.00002090 | 0.01969409 |
| 7 | ( 0.99999976, 0.49999958) | 2.45621e-13 | 0.00000049 | 0.02332123 |
| 8 | ( 1.00000001, 0.50000002) | 4.22000e-16 | 0.00000002 | 0.03601757 |

**Exercises**

1. Apply the quasi-Newton methods introduced in this section to the problems of Exercise 1 of Section 8.3.

2. Let $\mathbf{A} \in \mathbb{R}^{n \times n}$. Define

   $$\|\mathbf{A}\|_F := \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij}^2},$$

   which is the so-called *Frobenius norm* of the matrix $\mathbf{A}$. (This is not a matrix norm generated by a vector norm.) Prove that the unique solution of the minimization problem

   $$\min\{\|\mathbf{B} - \mathbf{A}\|_F : \mathbf{B} \in \mathbb{R}^{n \times n}, \ \mathbf{B} \text{ symmetric}\}$$

   is the matrix $\mathbf{B} = \frac{1}{2}(\mathbf{A} + \mathbf{A}^T)$.

3. Show that the matrix defined by (8.26) is symmetric and it satisfies the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$.

4. Check the derivation of formula (8.32).

5. Prove that the matrix $\mathbf{M}^{(k+1)}$ is invertible if relation (8.27) holds.

6. Show recursion (8.33).

7. Work out the details for the derivation of the DFP update.

8. Prove recursion (8.36).

---

*F. Hartung, University of Pannonia — www.tankonyvtar.hu*
