**6.2. Divided Differences**



## 1. Motivation and concept of divided differences

Although the Lagrange interpolation introduced in the previous chapter (6.1.) provides a theoretically clean formula to connect the data points, it has a serious practical disadvantage: if we obtain new measurement points, the entire basis polynomial system must be recalculated from scratch.

This problem is eliminated by the theory of **divided differences**, which creates a recursive (built upon each other) structure with which the coefficients of the interpolation polynomial can be easily determined step by step in a tabular form, and flexibly expanded when adding new points.



## 2. Recursive Definition (Section 6.2)

Let there be given a function $f \colon [a,b] \to \mathbb{R}$ and pairwise distinct base points $x_0, x_1, \ldots, x_n \in [a,b]$. The divided differences are defined recursively according to the number of points (order):

* **Zeroth-order divided difference:** Applies to a single point and equals the function value at the point:

$$f[x_0] := f(x_0)$$


* **First-order divided difference:** Applies to two points, and gives the classical difference quotient (slope) belonging to the points:

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0} = \frac{f(x_1) - f(x_0)}{x_1 - x_0} \tag{6.6}$$


* **General $n$-th order divided difference:** Obtained from the difference of the divided differences of one order lower (already calculated), divided by the distance of the base points of the extreme groups:

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0} \tag{6.7}$$



*Note:* It is important to see that when forming the divided difference, we omit the first point ($x_0$) from the first term in the numerator, and the last point ($x_n$) from the second term.



## 3. Explicit Formula (Theorem 6.10.)

Although we calculate divided differences recursively, there also exists a non-recursive, explicit form of them, which directly shows the connection to the function values:

> **Theorem 6.10.:** If $x_0, x_1, \ldots, x_n$ are pairwise distinct base points, then the $n$-th order divided difference can be written as the following explicit sum:
> 
> $$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \tag{6.8}$$
> 
> 

### Important algebraic properties:

1. **Symmetry:** From the explicit formula (6.8) it can be directly seen that the value of the divided difference is **completely independent of the order of the base points**. If we swap the index of the points (e.g., instead of $f[x_0, x_1, x_2]$ we write $f[x_2, x_0, x_1]$), the final result remains exactly the same number.
2. **Continuity:** If the function $f$ is continuous, then the divided differences also depend continuously on the base points.



## 4. Extension to coincident base points (Derivative connection)

The above definitions assumed that the base points are distinct, since otherwise, division by zero would occur in the denominator of formulas (6.6) or (6.7). But what happens if the points crowd (become equal)?

Assuming that $f$ is differentiable, let's take the limit as the point $x_1$ tends to $x_0$:


$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0)$$

> **Definition (Coincident base points):** If the base points are identical, the divided differences are interpreted as the **derivatives** of the function:
> 
> $$f[x_0, x_0] := f'(x_0)$$
> 
> 
> 
> In general, it can be shown that if $k+1$ base points become equal, it leads to the $k$-th derivative:
> 
> $$f[\underbrace{x_0, x_0, \ldots, x_0}_{k+1 \text{ times}}] = \frac{f^{(k)}(x_0)}{k!}$$
> 
> 

This extension provides a theoretical foundation for the osculatory (Hermite) interpolation of functions as well, where we want to exactly match not only the points but also the derivatives (directions) at the points.



## 5. The Divided Difference Table (Practical calculation)

In practice, divided differences are calculated in a pyramid (or triangle) shaped arrangement, the so-called **divided difference table**, where the elements of the higher-order columns are derived from the difference of the two elements located to their left:

$$\begin{array}{l|l|lll}
x_i & f[x_i] & \text{1st order} & \text{2nd order} & \text{3rd order} \\
\hline
x_0 & f(x_0) & & & \\
& & f[x_0, x_1] & & \\
x_1 & f(x_1) & & f[x_0, x_1, x_2] & \\
& & f[x_1, x_2] & & f[x_0, x_1, x_2, x_3] \\
x_2 & f(x_2) & & f[x_1, x_2, x_3] & \\
& & f[x_2, x_3] & & \\
x_3 & f(x_3) & & & \\
\end{array}$$

### Practical benefit (Transition to the Newton form):

After building this scheme, the numbers appearing in the **top diagonal (row)** of the table ($f(x_0), f[x_0, x_1], f[x_0, x_1, x_2], \ldots$) will directly yield the coefficients of the Newton interpolation polynomial, which will be the central topic of the next chapter (6.3.).
