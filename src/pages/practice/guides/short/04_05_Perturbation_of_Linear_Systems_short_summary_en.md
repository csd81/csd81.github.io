**4.5. Perturbation of Linear Systems**  

## 1. Introductory example: The surprising effect of rounding (Hilbert-type system)

The chapter starts with a tangible numerical example that demonstrates how an extremely minimal change (computer rounding) of the input data can completely distort the final result of a system of equations.

Consider the following exact linear system of equations:

$$\begin{array}{rcrcrcr} x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\ \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\ \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1 \end{array}$$

The exact theoretical solution of the system: $\mathbf{x} = (3, -24, 30)^T$.

Assume that during computer storage, the coefficients are **rounded to 3 decimal places** (i.e., instead of $1/3$ we write $0.333$, instead of $1/2$ we write $0.5$, instead of $1/5$ we write $0.2$):

$$\begin{array}{rcrcrcr} y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\ 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\ 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1 \end{array}$$

The exact solution of this rounded system: $\mathbf{y} = (3.446, -26.273, 32.296)^T$.

**The numerical anomaly:** While the change made in the input parameters was negligible (only of magnitude $10^{-4}$), the relative error in the obtained final result for the first variable became astonishingly large, **approx. 14%** ($\delta_1 \approx 0.14$). This phenomenon is a direct consequence of ill-conditioning.

## 2. Relative error estimates for perturbed systems

The theoretical part of the chapter provides mathematical bounds for the case when, instead of the exact $\mathbf{Ax} = \mathbf{b}$ system, we solve its modified (perturbed) version.

### A) Perturbation of the right-hand side only (Theorem 4.22.)

Assume that the matrix is exact, but instead of the right-hand side constant vector we calculate with a vector $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$. In this case, the relative error of the obtained solution $\tilde{\mathbf{x}}$ can be bounded from above by the product of the relative error of the right-hand side and the **condition number of the matrix**:

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}$$

### B) Simultaneous perturbation of the coefficient matrix and the right-hand side (Theorem 4.23.)

If, besides the right-hand side, the coefficients of the equations themselves are also perturbed ($\tilde{\mathbf{A}} = \mathbf{A} + \Delta\mathbf{A}$), and we assume that the change is not too large (i.e., $\|\mathbf{A}^{-1}\| \|\Delta\mathbf{A}\| < 1$), then the upper bound of the total relative error is:

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\Delta\mathbf{A}\|}{\|\mathbf{A}\|}} \left( \frac{\|\Delta\mathbf{A}\|}{\|\mathbf{A}\|} + \frac{\|\Delta\mathbf{b}\|}{\|\mathbf{b}\|} \right)$$

**Consequence:** The larger the condition number $\mathrm{cond}(\mathbf{A})$, the more drastically the uncertainty of the input data (be it measurement inaccuracy or machine rounding) is projected onto the calculated final result.

## 3. The spectral condition number and the distance to singularity

The notes introduce a special indicator, the so-called **spectral condition number**, which characterizes the behavior of the matrix using its eigenvalues:

$$\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$$

According to linear algebra theorems, for any induced matrix norm, it holds that $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$.

### Gastinel's Theorem (The geometric meaning)

One of the most important theoretical insights of the chapter is the relationship between the condition number and the matrix becoming singular (non-invertible).

> **Gastinel's Theorem:** For any invertible matrix $\mathbf{A}$, the reciprocal of the condition number is exactly equal to the relative distance from it to the nearest singular matrix:
> 
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ is singular} \right\}$$
> 
> 

**What does this mean in practice?** If the condition number of a matrix is extremely large, it means that the matrix is **geometrically very close in space to a singular matrix** whose determinant is zero, and for which the problem would theoretically be unsolvable. This dangerous proximity is what causes numerical instability.

## 4. Classic example: The Hilbert matrix ($\mathbf{H}_n$)

In mathematical analysis, the most popular, classic example of ill-conditioned matrices is the so-called **Hilbert matrix**, whose elements are determined by the following reciprocal formula:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}$$

The table in the notes shows how the spectral condition number grows at an extreme, explosive rate as the dimension of the matrix ($n$) increases:

* $n = 2 \implies \mathrm{cond}_*(\mathbf{H}_2) \approx 1.9 \cdot 10^1$
* $n = 3 \implies \mathrm{cond}_*(\mathbf{H}_3) \approx 5.2 \cdot 10^2$
* $n = 5 \implies \mathrm{cond}_*(\mathbf{H}_5) \approx 4.8 \cdot 10^5$ (Here, serious loss of precision is already experienced)
* $n = 10 \implies \mathrm{cond}_*(\mathbf{H}_{10}) \approx \mathbf{1.6 \cdot 10^{13}}$

**Final lesson:** For a $10 \times 10$ Hilbert matrix, the magnitude of the condition number ($10^{13}$) approaches the precision limit of traditional floating-point representation (double precision $\approx 10^{-16}$). In such a system, rounding errors almost completely destroy the mathematical information, thus making the obtained numerical solution practically unusable.
