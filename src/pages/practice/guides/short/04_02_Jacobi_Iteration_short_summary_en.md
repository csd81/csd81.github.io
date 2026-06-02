**4.2. Jacobi Iteration**


## 1. The Basic Idea and Coordinate Form of the Method

Jacobi iteration is one of the most widespread and simplest iterative procedures for the approximate solution of linear systems of equations ($\mathbf{Ax} = \mathbf{b}$), which is particularly advantageous for sparse, high-dimensional matrices.

The essence of the method is to express the unknown $x_i$ on the main diagonal from the $i$-th equation of the linear system of equations:


$$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j \right), \qquad i=1,2,\dots,n$$

From this fixed-point form, the **coordinate recursion formula** of the Jacobi iteration can be generated:


$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j^{(k)} \right), \qquad k = 0, 1, 2, \ldots \tag{4.11}$$

> **Principle of operation:** When calculating the values of the next step ($k+1$), we strictly use only the already known approximations from the previous time step ($k$) on the right side. Because of this, the equations can be evaluated in any order, even completely in parallel (on parallel computer architectures).



## 2. Derivation of the Matrix (Vector) Form

In order to be able to analyze the convergence of the method with the linear fixed-point theory learned in the previous section (4.1), we must rewrite the algorithm into the form $\mathbf{x}^{(k+1)} = \mathbf{T}_J\mathbf{x}^{(k)} + \mathbf{c}$.

To do this, let's decompose the coefficient matrix $\mathbf{A}$ into the sum of three submatrices:


$$\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$$


Where:

* $\mathbf{D}$ is the diagonal matrix containing the main diagonal,
* $\mathbf{L}$ is the strictly lower triangular matrix,
* $\mathbf{U}$ is the strictly upper triangular matrix.

Substitute this into the system and rearrange:


$$(\mathbf{L} + \mathbf{D} + \mathbf{U})\mathbf{x} = \mathbf{b} \implies \mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}$$

Assuming there is no zero element in the main diagonal ($a_{ii} \neq 0$), the diagonal matrix is invertible. Multiplying from the left by $\mathbf{D}^{-1}$, we get the **matrix form**:


$$\mathbf{x}^{(k+1)} = \underbrace{-\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})}_{\mathbf{T}_J}\mathbf{x}^{(k)} + \underbrace{\mathbf{D}^{-1}\mathbf{b}}_{\mathbf{c}}$$

* **$\mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})$** is the **Jacobi iteration matrix**.
* **$\mathbf{c} := \mathbf{D}^{-1}\mathbf{b}$** is the constant vector.



## 3. Convergence Conditions

### Necessary and Sufficient Condition

It follows directly from the general theory of linear fixed-point iterations:

> The Jacobi iteration is convergent for any arbitrary starting vector $\mathbf{x}^{(0)}$ if and only if the spectral radius of the iteration matrix is strictly less than 1:
> 
> $$\rho(\mathbf{T}_J) < 1 \tag{4.12}$$
> 
> 

### Theorem 4.11 (Practical sufficient condition: Diagonal dominance)

Since calculating the spectral radius (eigenvalues) is a complicated task, in practice we use a much more easily verifiable sufficient condition:

> **Theorem:** If the coefficient matrix $\mathbf{A}$ is **strictly diagonally dominant by rows** (i.e., in every row the absolute value of the main diagonal element is strictly greater than the sum of the absolute values of all other elements in the row):
> 
> $$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|, \qquad i=1,2,\dots,n$$
> 
> 
> 
> then the Jacobi iteration is **guaranteed to converge** starting from an arbitrary initial value.

*Outline of the proof:* Writing the maximum norm ($\|\cdot\|_\infty$) of the matrix $\mathbf{T}_J$, due to the definition of diagonal dominance, the maximum of the row sums will be strictly less than 1 ($\|\mathbf{T}_J\|_\infty < 1$). Since $\rho(\mathbf{T}_J) \leq \|\mathbf{T}_J\|_\infty$, the spectral radius will also be less than one, so the system converges stably.



## 4. Numerical Example (Example 4.8)

The notes present the numerical operation of the method through the following $3 \times 3$ system of equations:


$$\begin{array}{rcrcrcr} 5x_1 & + & 3x_2 & - & x_3 & = & -4 \\ 2x_1 & - & 10x_2 & + & x_3 & = & 25 \\ -3x_1 & + & 4x_2 & - & 12x_3 & = & -47 \end{array}$$

*(It can be seen that the matrix is diagonally dominant, since $|5|>|3|+|-1|$, $|-10|>|2|+|1|$, and $|-12|>|-3|+|4|$, thus convergence is guaranteed in advance).*

Rearranging the equations, the resulting lattice recursions are:


$$\begin{aligned} x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\ x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\ x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12 \end{aligned}$$

If we start the calculation from the naive zero vector $\mathbf{x}^{(0)} = (0, 0, 0)^T$, the results of the first steps are:

* **Step 1 ($k=1$):** $x_1^{(1)} = -4/5 = -0.8$, $x_2^{(1)} = -25/10 = -2.5$, $x_3^{(1)} = 47/12 \approx 3.9167$.
* **Step 2 ($k=2$):** Substituting the new values back into the right side, we get the next generation, and so on.

After a few steps, the elements of the sequence visibly smooth onto the exact solution vector $\mathbf{x} = (1, -2, 3)^T$ of the system consisting of integers.
