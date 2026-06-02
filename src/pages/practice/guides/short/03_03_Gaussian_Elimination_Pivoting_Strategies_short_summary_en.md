**3.2. Gaussian elimination and pivoting strategies**

## 1. Basic idea and goal of Gaussian elimination

The classic algorithm for the direct solution of linear systems of equations ($\mathbf{Ax} = \mathbf{b}$) is **Gaussian elimination**.

* **Goal:** To bring the initial system of equations by equivalent transformations (multiplying rows, subtracting them from each other) to an **upper triangular** form, from which the solution can be obtained directly using the *method of backward substitution* (for $O(n^2)$ operations) learned in chapter 3.1.
* **Operation:** Advancing column by column, we systematically transform the elements below the main diagonal to zero (we eliminate the variables from the lower equations).

## 2. The trap of rounding errors and the need for pivoting

Although pure Gaussian elimination works theoretically (calculating with exact fractions) always if there are no zeros in the main diagonal, on computers using finite floating-point number representation it **can give a catastrophically inaccurate final result** if the absolute value of the divisor element (the *pivot element*) standing in the main diagonal is close to zero.

### Numerical Example (The danger of a small pivot)

Let's consider the following system and solve it with **machine arithmetic rounding to 4 significant digits**:

$$\begin{pmatrix} 0.0002 & -30.5 \\ 5.0600 & -1.05 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -60.99 \\ 250.90 \end{pmatrix}$$

* **The exact theoretical solution:** $x_1 = 50$, $x_2 = 2$.
* **Calculation without pivoting:** The multiplier is $l_{21} = \frac{5.060}{0.0002} = 25300$. Multiplying the first row by this and subtracting it from the second, due to roundings the triangular system is:

$$\begin{pmatrix} 0.0002 & -30.5 \\ 0 & 771700 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -60.99 \\ 1543000 \end{pmatrix}$$

By backward substitution we get: $\tilde{x}_2 = 1.999$ (this is acceptable), but $\tilde{x}_1 = \mathbf{-100.0}$! The relative error of the first variable is **300%**, the obtained result is completely useless.
* **The cause of the error:** Division by an extremely small number ($0.0002$) amplified the rounding errors, which completely destroyed the information.

## 3. Pivoting Strategies

To avoid numerical instability, we apply so-called **pivoting**: before the elimination step, by row or column swaps, we take the small element away from the main diagonal and put the number with the largest possible absolute value in its place.

### A) Partial Pivoting

The most widespread and practical method. Before the $k$-th elimination step, we look at the elements of the $k$-th column in the main diagonal and the part below it, and find the one with the maximal absolute value:

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}$$

Then the $k$-th and $l$-th **rows are completely swapped**, so the maximum goes to the main diagonal as a divisor.

* *In the above example*, after swapping the two rows, the multiplier will be small, and the 4-digit calculation **returns exactly the true solution $x_1=50, x_2=2$**, with 0% error.

### B) Complete Pivoting

We search for the maximal element not only in the given column, but in the **entire lower left matrix block** (in all remaining rows and columns) that has not yet been eliminated:

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n, \ j = k, \ldots, n\}$$

To bring the maximum to the main diagonal, **both row swap AND column swap are required**.

* *Disadvantage:* Column swaps change the order of the unknowns (e.g., $x_k$ and $x_m$ must be swapped), which must be tracked at the end, and moreover, the operation demand of the two-dimensional search significantly slows down the algorithm.

### C) Scaled Partial Pivoting

If the magnitudes of the numbers in the rows of a matrix are inherently very different (e.g., one row has values in millions, another has decimal values), plain partial pivoting can be fooled. In this case, we divide each row by the size of the maximal element found in it (scale it), and swap the relatively largest element into the main diagonal.

## 4. Special Matrix Classes: When Pivoting is NOT Needed

Searching for pivots and swapping rows means extra computer work. There are two particularly important matrix classes where mathematical theorems guarantee that pure Gaussian elimination **remains perfectly stable and accurate even without pivoting**:

1. **Strict diagonal dominance:** If the absolute value of the elements in the main diagonal of the matrix is strictly greater in each row than the sum of the absolute values of all other elements of the given row:

$$|a_{ii}| > \sum_{j \neq i} |a_{ij}| \qquad \text{for all } i.$$

2. **Symmetric and positive definite matrices:** If $\mathbf{A}^T = \mathbf{A}$, and for all non-zero vectors $\mathbf{x}$ it is true that $\mathbf{x}^T\mathbf{Ax} > 0$. (According to the theorem, this holds if the determinant of all leading principal minors of the matrix is strictly positive).

## 5. Summary

Gaussian elimination is a direct method with an aggregate operation demand of $O(n^3)$. In a computer environment, the application of **partial pivoting** is a mandatory element, because it protects the calculation from the explosion of rounding errors caused by small pivots, and ensures the numerical robustness of the algorithm.
