## 3.2. Triangular Systems

**Example 3.20.** Solve the linear system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

Solving the fourth equation for $x_4$ we get $x_4 = 4$. Substituting it to the third equation we get $x_3 = (-2 + x_4)/2 = 1$. Then the second equation yields $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Finally, from the first equation we have $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\qquad\square$

We can generalize the method used in the previous example to solve the upper triangular $n$-dimensional linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$, i.e., a linear system of the form

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n.
\end{array} \tag{3.2}$$

We formulate the method of *backward substitution* in the following algorithm.

---

**Algorithm 3.21. Backward substitution to solve a triangular system**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

The method of backward substitution can be performed if an only if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$. Since $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$, it follows that it can be performed if and only if the system (3.2) has a unique solution, i.e., $\det(\mathbf{A}) \neq 0$.

In order to determine the time complexity of the algorithm we count the number of arithmetic operations:

| | multiplication/division | addition/subtraction |
|---|---|---|
| step 1: | 1 | 0 |
| step 2: | 2 | 1 |
| $\vdots$ | $\vdots$ | $\vdots$ |
| step $n$: | $n$ | $n-1$ |

Therefore, $1 + 2 + \cdots + n = n(n+1)/2$ multiplications and divisions, and $1 + 2 + \cdots + n - 1 = (n-1)n/2$ additions and subtractions are needed to perform the algorithm. We introduce the notation $\mathcal{O}(n^k)$ for a polynomial of order at most $k$. With this notation we have that the number of multiplications/divisions is $n^2/2 + \mathcal{O}(n)$, and similarly, the number of additions/subtractions are needed for the algorithm is $n^2/2 + \mathcal{O}(n)$. This notation "hides" the lower order terms, which is useful, since the leading term determines the magnitude of the formula for large $n$.

### Exercises

1. Solve the following triangular systems:

   (a)
   $$\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\
   & & & & & & 2x_4 & = & 4
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\
   & & & & & & & & 1.3x_5 & = & 6.5
   \end{array}$$

