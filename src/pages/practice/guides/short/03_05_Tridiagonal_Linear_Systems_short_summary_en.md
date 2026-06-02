**3.4. Tridiagonal systems of equations**  

## 1. The concept and significance of tridiagonal matrix

In linear algebra applications (for example, in the numerical solution of differential equations or spline interpolation) we often encounter special sparse matrices where non-zero elements are restricted to a narrow band.

> **Definition:** A square matrix $\mathbf{A} = (a_{ij})$ is called **tridiagonal** if the value of every element that is further than one away from the main diagonal is zero:
> 
> $$a_{ij} = 0 \qquad \text{for all } i, j \text{ indices where } |i - j| > 1 \tag{3.10}$$

This means that non-zero numbers can appear **exclusively in the main diagonal, and in the one subdiagonal immediately below and one superdiagonal immediately above it**.

### Standard notation system:

For writing efficient algorithms, the tridiagonal system of equations is not represented with the full matrix, but with three well-distinguishable vectors:

* $(d_i)$ : the elements of the **main diagonal** ($d_1, d_2, \ldots, d_n$)
* $(c_i)$ : the elements of the superdiagonal **above** the main diagonal ($c_1, c_2, \ldots, c_{n-1}$)
* $(a_i)$ : the elements of the subdiagonal **below** the main diagonal ($a_1, a_2, \ldots, a_{n-1}$)
* $(b_i)$ : the vector of the right-side **constant terms** ($b_1, b_2, \ldots, b_n$)

In matrix form, the system shows the following picture:

$$\begin{pmatrix} 
d_1 & c_1 & 0 & 0 & \cdots & 0 \\ 
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\ 
0 & a_2 & d_3 & c_3 & \cdots & 0 \\ 
\vdots & & \ddots & \ddots & \ddots & \vdots \\ 
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\ 
0 & 0 & \cdots & 0 & a_{n-1} & d_n 
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = 
\begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix} \tag{5}$$

## 2. Memory Saving (Data Storage)

To store a general, dense $n \times n$ matrix, $n^2$ storage spaces are needed in the computer's memory. At large sizes (e.g., $n = 100\,000$) this would become unmanageable.

Thanks to the tridiagonal structure, it is sufficient to store only the three mentioned coefficient vectors. Thus the required storage capacity:

$$\text{Storage requirement} = (n-1) + n + (n-1) = \mathbf{3n - 2}$$

This means linear memory consumption, which results in radical saving compared to the traditional $n^2$ quadratic growth.

## 3. Special Gaussian elimination for tridiagonal systems

If we ran a standard Gaussian elimination on the tridiagonal system, the algorithm would unnecessarily examine blocks containing zeros. Since there is only one non-zero element ($a_i$) below the main diagonal per column, the elimination step is extremely simplified:

1. **Structural constancy:** During the elimination, the values of the $c_i$ elements above the main diagonal **never change**, and no new non-zero elements are created in other parts of the matrix (no "fill-in").
2. **Update:** Only the values of the main diagonal ($d_i$) and the constant terms ($b_i$) need to be modified row by row according to the following recursion.

### Algorithm of the procedure (Thomas algorithm):

Directly overwriting the original coefficients, the algorithm consists of two main phases:

* **A) Forward elimination:**
For $i = 2, 3, \ldots, n$ we execute step by step:

$$\begin{aligned}
temp &\leftarrow \frac{a_{i-1}}{d_{i-1}} \\
d_i &\leftarrow d_i - temp \cdot c_{i-1} \\
b_i &\leftarrow b_i - temp \cdot b_{i-1}
\end{aligned}$$

* **B) Backward substitution:**
We determine the unknowns from bottom up from the triangularized form:

$$x_n \leftarrow \frac{b_n}{d_n}$$

and moving backwards for the indices $i = n-1, n-2, \ldots, 1$:

$$x_i \leftarrow \frac{b_i - c_i x_{i+1}}{d_i}$$

## 4. Operation Demand and Time Complexity

The greatest genius of the algorithm lies in the drastic reduction of calculation time. If we count all floating-point multiplications and divisions performed, we get the following surprisingly small result:

$$\text{Total number of multiplications and divisions} = \mathbf{5n - 4}$$

### Comparison with standard methods:

* **General Gaussian elimination:** $\approx \frac{1}{3}n^3$ operations.
* **Tridiagonal Gaussian elimination:** $\approx 5n$ operations.

For example, if an $n = 1000$ dimensional system needs to be solved, the standard Gaussian elimination would perform roughly **333 million** operations, while this special algorithm gets the exact final result from only **4996** operations. Because of this, in engineering software it is mandatory to use this purpose-specific procedure in case of a tridiagonal task.

## 5. Numerical stability and the issue of pivoting

It is known from chapter 3.2 that during Gaussian elimination, row swaps (pivoting) usually need to be applied to avoid rounding errors. However, for tridiagonal systems, row swapping would completely upset the banded structure, increasing memory and operation demand.

Fortunately, an important theoretical theorem provides protection for band matrices:

> **Theorem:** If the tridiagonal matrix $\mathbf{A}$ is **strictly diagonally dominant** with respect to its rows (or columns), that is:
> 
> $$|d_i| > |a_{i-1}| + |c_i| \qquad \text{for all } i,$$
> 
> then the special tridiagonal algorithm **is guaranteed to be executable and numerically completely stable even without pivoting (row swap)**. Computer rounding errors will not be amplified.
