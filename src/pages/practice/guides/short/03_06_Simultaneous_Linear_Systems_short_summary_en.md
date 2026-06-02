**3.5. Simultaneous Linear Systems**



## 1. Concept and Motivation of Simultaneous Linear Systems

In engineering and scientific computations, we often need to solve linear systems of equations that have **the exact same left-hand side coefficient matrix ($\mathbf{A}$) but different right-hand side constant vectors ($\mathbf{b}^{(i)}$)**. These systems are called simultaneous linear systems of equations.

If we were to solve each of the $m$ systems of equations separately:


$$\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}, \qquad i = 1, \ldots, m \tag{3.11}$$


we would unnecessarily repeat the same elimination steps, since the process of choosing pivots and swapping rows depends exclusively on the structure of the coefficient matrix $\mathbf{A}$, independently of the right-hand side vectors.



## 2. Compact Matrix Model ($\mathbf{AX} = \mathbf{B}$)

We can efficiently group the problem into a single **matrix equation**:

$$\mathbf{A}\mathbf{X} = \mathbf{B} \tag{3.12}$$

Where:

* $\mathbf{A} \in \mathbb{R}^{n \times n}$ is the common coefficient matrix.
* $\mathbf{B} \in \mathbb{R}^{n \times m}$ is a rectangular matrix whose columns are exactly the different right-hand side constant vectors: $\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$.
* $\mathbf{X} \in \mathbb{R}^{n \times m}$ is the sought **solution matrix**, whose columns will be the unique solution vectors of the individual subsystems: $\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$.



## 3. Solution with Matrix Augmentation and Elimination

We solve the simultaneous problem by extending the $(\mathbf{A}, \mathbf{b})$ scheme into a single **augmented matrix of dimension $n \times (n + m)$**, where the entire matrix $\mathbf{B}$ is chained to the right of the matrix $\mathbf{A}$:

$$(\mathbf{A}, \mathbf{B}) = \left( \mathbf{A}, \mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)} \right)$$

We execute the chosen direct elimination method on this augmented matrix:

### A) Applying Gauss–Jordan Elimination (Recommended Version)

If we perform Gauss–Jordan elimination on the augmented block (supplemented with pivoting for stability), we systematically reduce the left-hand side $\mathbf{A}$ part to the **identity matrix ($\mathbf{I}$)** step by step. In parallel, the operations on the right-hand side block automatically perform the calculations, so at the end of the process, the sought solution matrix $\mathbf{X}$ appears **directly on the right side**:

$$(\mathbf{A}, \mathbf{B}) \quad \sim \quad \dots \quad \sim \quad (\mathbf{I}, \mathbf{X})$$

### B) Applying Traditional Gaussian Elimination

If we use the traditional Gaussian method, the left side of the augmented matrix is transformed into an upper triangular form. In this case, the columns of the solution matrix are obtained at the very end through $m$ independent but fast *backward substitution* steps.



## 4. Operation Count and Time Complexity

For large systems, the asymptotic number of floating-point multiplications and divisions on the augmented blocks can be proven to be as follows:

* **Operation count of augmented Gaussian elimination:**

$$\text{Operation count} = \frac{1}{3}n^3 + mn^2 - \frac{1}{3}n \tag{3.13}$$


* **Operation count of augmented Gauss–Jordan elimination:**

$$\text{Operation count} = \frac{1}{2}n^3 + mn^2 - \frac{1}{2}n \tag{3.14}$$



### Economic consequence:

Notice the **$mn^2$** term in the formulas! If we naively solved the problem as $m$ completely separate systems of equations, the total cost for Gaussian elimination would be $m \cdot (\frac{1}{3}n^3) = \frac{m}{3}n^3$. For large matrices ($n \gg m$), the order of $n^3$ grows much faster than $n^2$.

Thanks to the simultaneous augmentation, the expensive, cubic-cost elimination phase ($\frac{1}{3}n^3$ or $\frac{1}{2}n^3$) only needs to be run **once** on the common coefficients, and the additional right-hand sides represent only a much cheaper, quadratic ($mn^2$) overhead.



## 5. Connection to Matrix Inversion

The chapter notes that matrix inversion (calculating $\mathbf{A}^{-1}$) is actually a special case of the simultaneous linear system.

If we choose exactly the identity matrix $\mathbf{B} = \mathbf{I}$ for the right-hand side constant block (where $m = n$), we get the matrix equation $\mathbf{A}\mathbf{X} = \mathbf{I}$, the solution of which is by definition the inverse of the matrix ($\mathbf{X} = \mathbf{A}^{-1}$). Running the simultaneous scheme with the transformation $(\mathbf{A}, \mathbf{I}) \sim (\mathbf{I}, \mathbf{A}^{-1})$, the complete inverse matrix can be directly produced.
