**6.4. Hermite Interpolation**


## 1. Formulation of the problem and its geometric meaning

In the classical Lagrange interpolation examined in the previous sections (6.1 and 6.3), the goal was for the polynomial's graph to pass exactly through the given points, but we could not control the direction (slope) of the curve at these points.

**Hermite interpolation** (or osculating interpolation) generalizes this task: besides the function values $y_i = f(x_i)$, we also want to exactly interpolate predetermined **derivative values (directions) $y_i' = f'(x_i)$**.

We are looking for a polynomial $H(x)$ for the base points $x_0, x_1, \ldots, x_n$, which satisfies:


$$H(x_i) = y_i \qquad \text{and} \qquad H'(x_i) = y_i', \qquad i = 0, 1, \ldots, n \tag{6.15}$$

### Degree estimation

Since we have $n+1$ base points, the number of conditions is $2(n+1)$. A polynomial of **at most degree $(2n+1)$** ($H_{2n+1}$), containing $2(n+1)$ unknown coefficients, can uniquely satisfy this many constraints.



## 2. Theoretical background: Extension of divided differences

To explicitly write the Hermite polynomial, we use the theory of divided differences introduced in section 6.2, in such a way that every base point $x_i$ is **included twice consecutively** in the definition.

As a reminder, if two base points coincide, the divided difference is equal to the derivative:


$$f[x_i, x_i] = f'(x_i) = y_i'$$

If we have more than one distinct point, the higher-order divided differences containing repeated points can be calculated in the standard recursive way:


$$f[x_0, x_0, x_1] = \frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0} = \frac{f[x_0, x_1] - f'(x_0)}{x_1 - x_0}$$

$$f[x_0, x_0, x_1, x_1] = \frac{f[x_0, x_1, x_1] - f[x_0, x_0, x_1]}{x_1 - x_0}$$



## 3. General Newton form of the Hermite polynomial

If we introduce a new sequence $z$ consisting of the duplicated base points:


$$z_0 = x_0, \ z_1 = x_0, \ z_2 = x_1, \ z_3 = x_1, \ \ldots, \ z_{2n} = x_n, \ z_{2n+1} = x_n$$

Then, following the pattern of section 6.3, the **general Newton form of the Hermite interpolation polynomial** can be written:

$$\mathbf{H_{2n+1}(x) = f[z_0] + \sum_{i=1}^{2n+1} f[z_0, z_1, \ldots, z_i] \prod_{j=0}^{i-1} (x - z_j)} \tag{6.17}$$



## 4. Practical calculation: The expanded table of divided differences

In practice, the calculation is performed with a modified divided differences table. Each point $x_i$ is **written twice consecutively in the rows of the table**, and the given $f'(x_i)$ derivative values are directly written in the first-order column between the identical points.

### Sample example from the notes

The following data are given ($n=2$, the degree of the sought polynomial is $2n+1 = 5$):

* $x_0 = -1, \ y_0 = -1, \ y_0' = -5$
* $x_1 = 1, \ y_1 = 1, \ y_1' = 7$
* $x_2 = 2, \ y_2 = 29, \ y_2' = 61$

The constructed expanded table:

| $z_i$ | $f[z_i]$ | 1st order | 2nd order | 3rd order | 4th order | 5th order |
| --- | --- | --- | --- | --- | --- | --- |
| **-1** | **-1** |  |  |  |  |  |
| -1 | -1 | **-5** *($y_0'$)* |  |  |  |  |
| 1 | 1 | 1 | **3** |  |  |  |
| 1 | 1 | 7 *($y_1'$)* | 3 | **0** |  |  |
| 2 | 29 | 28 | 21 | 6 | **2** |  |
| 2 | 29 | 61 *($y_2'$)* | 33 | 4 | -0.666 | **-0.888** |

### Writing the polynomial (Based on the upper diagonal):

According to formula (6.17), the coefficients are the top diagonal elements of the table (marked in bold): **-1, -5, 3, 0, 2, -0.888**.

Collecting the root factors progressively:


$$H_5(x) = \mathbf{-1} - \mathbf{5}(x+1) + \mathbf{3}(x+1)^2 + \mathbf{0}(x+1)^2(x-1) + \mathbf{2}(x+1)^2(x-1)^2 - \mathbf{\frac{8}{9}}(x+1)^2(x-1)^2(x-2)$$

After expanding brackets and algebraic arrangement, the final result is:


$$H_5(x) = -\frac{8}{9}x^5 + \frac{34}{9}x^4 - \frac{10}{9}x^3 - \frac{26}{9}x^2 + \frac{11}{9}x + \frac{7}{9}$$



## 5. Error estimation (Theorem 7.14)

If the Hermite polynomial is used to approximate a smooth function $f(x)$, the structure of the formula error is very similar to Lagrange's, but due to the duplicated points, the factors of the node polynomial are squared:

> **Theorem 7.14:** Assume that $f \in C^{2n+2}[a,b]$. Then for every $x \in [a,b]$ there exists an interior point $\xi \in (a,b)$ with which the error of the Hermite interpolation can be written in the following form:
> 
> $$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!} \Omega_n(x)$$
> 
> 
> 
> Where $\Omega_n(x) := \prod_{i=0}^{n} (x - x_i)^2 = (x-x_0)^2(x-x_1)^2\cdots(x-x_n)^2$.



## 6. Summary and practical benefits

Hermite interpolation is a highly important engineering tool (for example, in the spline curves of computer graphics or physical trajectory planning). Since it matches not only points but also tangent directions, it can generate much smoother, more natural-looking curves than the Lagrange method. Furthermore, with the trick of duplicating the base points, its calculation can be purely reduced to the well-known tabular algorithm of Newton's divided differences.
