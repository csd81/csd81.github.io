## 3.4. Tridiagonal Linear Systems

We say that a square matrix $(a_{ij})$ is *tridiagonal* if

$$a_{ij} = 0 \qquad \text{for all } |i - j| > 1,$$

i.e., nonzero numbers can appear only in the main diagonal and in the next diagonal above and under it. We will use the following notations:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{5}$$

It is practical to store the elements of a tridiagonal matrix in three vectors $(a_i)$, $(d_i)$ and $(c_i)$, as it is used above. In this case only

$$3n - 2$$

storage area is needed for the coefficients. It is clear that applying the Gaussian elimination to the system (5) the elements $a_i$ below the main diagonal will become 0, and the numbers $c_i$ will not be changed during the elimination steps. We have to compute the new values of the variables $d_i$ and $b_i$ during the elimination. In the next algorithm we override the old values of the vectors $(d_i)$ and $(b_i)$ with the actual new ones.

---

**Algorithm: Gaussian elimination for tridiagonal linear systems**

INPUT: $a_i, c_i$ $(i = 1, \ldots, n-1)$, $d_i, b_i$ $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

*(elimination:)*
**for** $i = 2, \ldots, n$ **do**
$\qquad temp \leftarrow a_{i-1}/d_{i-1}$
$\qquad d_i \leftarrow d_i - temp \cdot c_{i-1}$
$\qquad b_i \leftarrow b_i - temp \cdot b_{i-1}$
**end do**
*(backward substitution:)*
$x_n \leftarrow b_n/d_n$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

We can check that the above method requires

$$5n - 4$$

number of multiplications and divisions. If we compare it with the number of operations of the Gaussian elimination, which is $n^3/3$ multiplications and divisions, then we can see that for a tridiagonal system this special algorithm should be applied. We know that if the tridiagonal matrix $\mathbf{A}$ is also diagonally dominant, then the above algorithm can be performed (without pivoting).

---

