## 3.5. Simultaneous Linear Systems

Frequently we would like to solve so-called *simultaneous linear systems*, i.e., systems of the form

$$\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}, \qquad \text{for } i = 1, \ldots, m.$$

We can shortly write the above system as

$$\mathbf{A}\mathbf{X} = \mathbf{B},$$

where the $i$th columns of the $n \times m$ dimensional matrix

$$\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$$

is $\mathbf{b}^{(i)}$, and the $i$th column of the $n \times m$ dimensional matrix

$$\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$$

is $\mathbf{x}^{(i)}$, i.e., the solution of the system

$$\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}.$$

Since pivoting in the Gaussian or Gauss–Jordan elimination depends only on the coefficient matrix, it can be performed on the $n \times (n+m)$ dimensional augmented matrix. For example, if we perform the Gauss-Jordan elimination on the augmented matrix

$$(\mathbf{A}, \mathbf{B})$$

we get a matrix of the form

$$(\mathbf{I}, \mathbf{X}).$$

Then the solution of the simultaneous linear system $\mathbf{X}$ appears in the last $m$ columns of the augmented matrix.

---

