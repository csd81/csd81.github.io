
# Part III

# Properties of Matrices

This part examines the most important characteristics and properties of matrices. The reference to *properties* is also a pun, which alludes to the very important concepts of the matrix's *eigenvalue*, *eigenvector*, and *eigenspace*, as well as the singular value, which was also called an *eigenvalue* when it was born. We begin our investigations by reducing square matrices to the simplest possible form – diagonal form – which leads to the determination of eigenvalues. In recent times, another diagonalizing technique that works for all matrices and is connected to singular values has become especially important in applications. The discussion of this is followed by the clarification of questions related to diagonalizability, the description of the "almost diagonal form", the Jordan normal form, and finally, this part concludes with the examination of nonnegative matrices, which are particularly important in applications.

*green&blue (CC) by Joós Andi*

# 8. Eigenvalues, Diagonalization

A particularly effective tool for characterizing a matrix is determining the non-zero vectors $\mathbf{x}$ which, when multiplied by the matrix, are mapped to vectors parallel to themselves, i.e., for which $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$. Knowing these vectors also helps find a basis in which this matrix takes on a significantly simpler – for example, diagonal – form.

## Eigenvalue, eigenvector, eigenspace

### The concept of eigenvalue and eigenvector

Let us begin with a simple problem from which we can read the essence of what this chapter will be about.

**Example 8.1** (Good basis for reflection). *Let us reflect the vectors of the 3-dimensional space across a given plane in the space! Relying on our geometric intuition, let us choose an appropriate basis to describe this linear transformation, and then write the matrix of the reflection with respect to this basis!*

*Solution.* Reflection across a plane maps vectors perpendicular to the plane to their opposites, while it leaves vectors in the plane unchanged. Every vector in the space can be uniquely expressed as the sum of a vector falling in the plane and a vector perpendicular to it. Let us choose an arbitrary basis for the plane (let this consist of vectors $\mathbf{a}$ and $\mathbf{b}$), and to these two vectors, let us add a vector $\mathbf{c}$ perpendicular to the plane as the third basis vector. Then the effect of the reflection transformation $T$ on these vectors is: $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$, and $T\mathbf{c} = -\mathbf{c}$. In the basis $\{\mathbf{a},\mathbf{b},\mathbf{c}\}$, the matrix of $T$ is

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{bmatrix}.$$

Thus, in this basis, the reflection of an arbitrary vector $(x,y,z)$ is $(x,y,-z)$. $\square$

In this example, we chose a basis by looking for vectors that are mapped to scalar multiples of themselves, that is, which satisfy an equation of the form $T\mathbf{x} = \lambda\mathbf{x}$. This leads to the following definition, which we first state only for matrices.

**Definition 8.2** (Eigenvalue, eigenvector). *We say that the number $\lambda$ is an eigenvalue of the matrix $\mathbf{A}$ if there exists a nonzero vector $\mathbf{x}$ for which $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$. Such vectors $\mathbf{x}$ are called the eigenvectors of the matrix $\mathbf{A}$ belonging to the eigenvalue $\lambda$, and the pairs $(\lambda,\mathbf{x})$ are called the eigenpairs of $\mathbf{A}$.*

**Example 8.3** (Eigenvalue, eigenvector). *Verify that -1 is an eigenvalue of the matrix $\mathbf{A} = \left[\begin{smallmatrix} -2 & 2 \\ -2 & 3 \end{smallmatrix}\right]$ and $(2,1)$ is one of its corresponding eigenvectors, that is, $(-1,(2,1))$ is an eigenpair. Show that the pair $(2,(1,2))$ is another eigenpair!*

*Solution.* Indeed,

$$\begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ -1 \end{bmatrix}, \quad \text{that is} \quad \begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = (-1) \begin{bmatrix} 2 \\ 1 \end{bmatrix}.$$

Another eigenvalue of this matrix is 2, since

$$\begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 2 \\ 4 \end{bmatrix}, \quad \text{that is} \quad \begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = 2 \begin{bmatrix} 1 \\ 2 \end{bmatrix}. \qquad \square$$

If $\mathbf{x}$ is an eigenvector, then any nonzero constant multiple of it is also one, since

$$\mathbf{A}(c\mathbf{x}) = c\mathbf{A}\mathbf{x} = c\lambda\mathbf{x} = \lambda(c\mathbf{x}),$$

that is, $\mathbf{A}(c\mathbf{x}) = \lambda(c\mathbf{x})$. Even more is true:

**Proposition 8.4** (Subspaces of eigenvectors). *If $\lambda$ is an eigenvalue of the matrix $\mathbf{A}$, then the eigenvectors belonging to $\lambda$, together with the zero vector, form a subspace which coincides with the null space of $\mathbf{A} - \lambda\mathbf{I}$.*

*Proof.* The nonzero vector $\mathbf{x}$ is an eigenvector belonging to the eigenvalue $\lambda$ if and only if it satisfies the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, that is, the equation $\mathbf{A}\mathbf{x} - \lambda\mathbf{x} = \mathbf{0}$, meaning if it is a solution to the homogeneous linear equation $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$. And this means exactly that $\mathbf{x}$ is an element of the null space of $\mathbf{A} - \lambda\mathbf{I}$. $\square$

**Definition 8.5** (Eigenspace). *The subspace formed by the eigenvectors belonging to the eigenvalue $\lambda$ of the square matrix $\mathbf{A}$ and the zero vector is called the eigenspace belonging to the eigenvalue $\lambda$.*

**Example 8.6** (Determining the basis of an eigenspace). *Determine the eigenspace belonging to the eigenvalue 2 of the matrix*

$$\mathbf{A} = \begin{bmatrix} 3 & 6 & 1 \\ 1 & 8 & 1 \\ 1 & 6 & 3 \end{bmatrix}$$

*by giving a basis for it! Do the same for the eigenspace belonging to 10.*

*Solution.* First, let us check that 2 is an eigenvalue! For this, we must show that the system of equations $(\mathbf{A} - 2\mathbf{I})\mathbf{x} = \mathbf{0}$ has a nontrivial solution. Let us bring the coefficient matrix to reduced row echelon form:

$$\mathbf{A} - 2\mathbf{I} = \begin{bmatrix} 1 & 6 & 1 \\ 1 & 6 & 1 \\ 1 & 6 & 1 \end{bmatrix} \implies \begin{bmatrix} 1 & 6 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}.$$

Since $\operatorname{r}(\mathbf{A} - 2\mathbf{I}) = 1$, the number of free variables of the system $(\mathbf{A} - 2\mathbf{I})\mathbf{x} = \mathbf{0}$ is 2, and its solution is

$$\mathbf{x} = \begin{bmatrix} -6s - t \\ s \\ t \end{bmatrix} = s \begin{bmatrix} -6 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}.$$

So a basis of the eigenspace consists of the vectors $(-6,1,0)$ and $(-1,0,1)$.

10 is also an eigenvalue, since the system $(\mathbf{A} - 10\mathbf{I})\mathbf{x} = \mathbf{0}$ has a nontrivial solution, because

$$\mathbf{A} - 10\mathbf{I} = \begin{bmatrix} -7 & 6 & 1 \\ 1 & -2 & 1 \\ 1 & 6 & -7 \end{bmatrix} \implies \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix},$$

thus the solution is

$$\mathbf{x} = \begin{bmatrix} t \\ t \\ t \end{bmatrix} = t \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}.$$

Thus, the eigenspace is spanned by the vector $(1,1,1)$.

One of the two eigenspaces is a 2-dimensional, the other a 1-dimensional subspace. This is illustrated in Figure 8.1. $\square$

*Figure 8.1. Eigenspaces of the matrix $\mathbf{A}$ in Problem 8.6: the 2-dimensional subspace belonging to 2, spanned by the vectors $(-6,1,0)$ and $(-1,0,1)$, and the 1-dimensional subspace belonging to 10, spanned by the vector $(1,1,1)$.*

### Characteristic polynomial

We saw that the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ has a solution different from the zero vector if and only if the homogeneous linear system $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$ has a nontrivial solution. According to Theorem 6.3, this is true if and only if

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0. \tag{8.1}$$

This means that $\lambda$ is an eigenvalue if and only if it satisfies equation (8.1). We call this equation the *characteristic equation* of the matrix $\mathbf{A}$. If $\mathbf{A}$ is an $n \times n$ matrix, then the left side of the equation, after expanding the determinant, is a polynomial of degree $n$, which we call the *characteristic polynomial*. We denote the characteristic polynomial of an $n$th order matrix $\mathbf{A}$ by $\chi_{\mathbf{A}}$, so its general form is

$$\chi_{\mathbf{A}}(\lambda) = (-1)^n \lambda^n + p_{n-1}\lambda^{n-1} + \ldots + p_1\lambda + p_0. \tag{8.2}$$

> *It is also customary to define the characteristic polynomial with the determinant $\det(\lambda\mathbf{I} - \mathbf{A})$. Its advantage is that in this case the leading coefficient of the polynomial is always 1, whereas according to the definition we use, the leading coefficient of the characteristic polynomial of odd-order matrices is -1. However, its disadvantage is that the constant term is not always the determinant, and on the other hand, manual calculation is more cumbersome, so for the easier computability of elementary problems it is more useful to choose the form $\det(\mathbf{A} - \lambda\mathbf{I})$.*

**Example 8.7** (Writing the characteristic polynomial). *Determine the characteristic polynomial of the matrices*

$$\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} a & b & c \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$$

*and where possible, try to guess more generally valid statements based on the result!*

*Solution.* We need to calculate the value of the determinant $\det(\mathbf{A} - \lambda\mathbf{I})$:

$$\begin{aligned} \det(\mathbf{A} - \lambda\mathbf{I}) &= \begin{vmatrix} a - \lambda & b \\ c & d - \lambda \end{vmatrix} = (a - \lambda)(d - \lambda) - bc \\ &= \lambda^2 - (a + d)\lambda + (ad - bc) \\ &= \lambda^2 - \operatorname{trace}(\mathbf{A})\lambda + \det\mathbf{A}. \end{aligned} \tag{8.3}$$

We can state the conclusion: we can express the characteristic polynomial of $2 \times 2$ matrices with the trace and determinant of the matrix.

The characteristic polynomial of matrix $\mathbf{B}$ is

$$\det(\mathbf{B} - \lambda\mathbf{I}) = \begin{vmatrix} 1 - \lambda & a & b \\ 0 & 1 - \lambda & c \\ 0 & 0 & 1 - \lambda \end{vmatrix} = (1 - \lambda)^3.$$

From this we can read that the shape of the characteristic polynomial of triangular matrices is not affected by the elements outside the main diagonal (see Theorem 8.8).

The characteristic polynomial of matrix $\mathbf{C}$ is

$$\begin{aligned} \det(\mathbf{C} - \lambda\mathbf{I}) &= \begin{vmatrix} a - \lambda & b & c \\ 1 & -\lambda & 0 \\ 0 & 1 & -\lambda \end{vmatrix} \\ &= (a - \lambda)\lambda^2 + b\lambda + c \\ &= -\lambda^3 + a\lambda^2 + b\lambda + c. \end{aligned}$$

This suggests that for any polynomial it is easy to construct a matrix whose characteristic polynomial is that polynomial (see problem **??**). $\square$

We also formulate the lessons of the previous problem in separate propositions:

**Proposition 8.8** (Eigenvalues of triangular matrices). *The eigenvalues of triangular matrices, and thus of diagonal matrices, coincide with the elements of the main diagonal.*

*Proof.* If $\mathbf{A}$ is a triangular matrix, then $\mathbf{A} - \lambda\mathbf{I}$ is as well, and the determinant of a triangular matrix equals the product of the elements on its main diagonal. According to this, the characteristic equation of the triangular matrix $\mathbf{A} = [a_{ij}]$ is

$$(a_{11} - \lambda)(a_{22} - \lambda)\ldots(a_{nn} - \lambda) = 0,$$

whose roots are $a_{ii}$ $(i = 1, \ldots, n)$. Thus, these are the eigenvalues of $\mathbf{A}$. $\square$

**Proposition 8.9** (Determinant, trace and eigenvalues). *If the eigenvalues of the $n$th order matrix $\mathbf{A}$ are $\lambda_1, \ldots, \lambda_n$, then*

$$\begin{aligned} \det(\mathbf{A}) &= \lambda_1\lambda_2\ldots\lambda_n \\ \operatorname{trace}(\mathbf{A}) &= \lambda_1 + \lambda_2 + \cdots + \lambda_n \end{aligned}$$

*These values appear in the characteristic polynomial: the determinant is the constant term, the trace is the coefficient of $(-\lambda)^{n-1}$.*

*Proof.* The factored form of the characteristic polynomial is:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = (\lambda_1 - \lambda)(\lambda_2 - \lambda)\ldots(\lambda_n - \lambda)$$

After substituting $\lambda = 0$, we get that

$$\det(\mathbf{A}) = \lambda_1\lambda_2\ldots\lambda_n.$$

The proof of the part of the statement concerning the trace is left as an exercise. $\square$

### Characterization of the eigenspaces of real $2 \times 2$ matrices

In this section, we will get acquainted with results that can be generalized to higher dimensions, but in the case of 2 dimensions, their illustration is simpler.

We have seen that if $\mathbf{x}$ is an eigenvector, then any constant multiple of it is also one. Thus, among the vectors parallel to a line, it is enough to examine the image of only one vector, say the unit vector. Therefore, the previously introduced unit circle representation of linear transformations will be useful (see Figure 7.7).

**Example 8.10** (Illustration of the eigenvectors of $2 \times 2$ matrices). *Determine the eigenvalues and eigenvectors of the matrices*

$$\mathbf{A} = \begin{bmatrix} \tfrac{5}{4} & \tfrac{3}{4} \\ \tfrac{3}{4} & \tfrac{5}{4} \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} \tfrac{3}{4} & \tfrac{5}{4} \\ \tfrac{5}{4} & \tfrac{3}{4} \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} -\tfrac{5}{4} & \tfrac{3}{4} \\ -\tfrac{3}{4} & \tfrac{5}{4} \end{bmatrix}, \quad \mathbf{D} = \begin{bmatrix} -\tfrac{3}{4} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} \end{bmatrix}$$

*which also appeared in Examples 7.11 and **??**. Illustrate these in the unit circle diagrams.*

*Solution.* By simple calculation, the characteristic equation, eigenvalues, and eigenvectors of all four matrices can be determined, although in the case of matrix $\mathbf{D}$ these also include complex numbers. Let the characteristic polynomial be denoted by $\chi$, with the symbol of the matrix in its index. Next, we give the eigenvalues, then the eigenvectors:

$$\begin{aligned} \chi_{\mathbf{A}}(\lambda) &= \lambda^2 - \tfrac{5}{2}\lambda + 1, & \lambda_1 = 2, \; \lambda_2 = \tfrac{1}{2}, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}. \\ \chi_{\mathbf{B}}(\lambda) &= \lambda^2 - \tfrac{3}{2}\lambda - 1, & \lambda_1 = 2, \; \lambda_2 = -\tfrac{1}{2}, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}. \\ \chi_{\mathbf{C}}(\lambda) &= \lambda^2 - 1, & \lambda_1 = 1, \; \lambda_2 = -1, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 3 \\ 1 \end{bmatrix}. \\ \chi_{\mathbf{D}}(\lambda) &= \lambda^2 + 1, & \lambda_1 = \mathrm{i}, \; \lambda_2 = -\mathrm{i}, & \quad \mathbf{x}_1 = \begin{bmatrix} \tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} \tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}. \end{aligned}$$

Matrix $\mathbf{D}$ causes some difficulty, so we detail the calculations belonging to it:

$$\begin{aligned} |\mathbf{D} - \lambda\mathbf{I}| &= \begin{vmatrix} -\tfrac{3}{4} - \lambda & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} - \lambda \end{vmatrix} = \lambda^2 + 1 \\ \lambda_1 = \mathrm{i}: & \quad \begin{bmatrix} -\tfrac{3}{4} - \mathrm{i} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} - \mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 0 & 0 \end{bmatrix} \text{ from which } \mathbf{x}_1 = \begin{bmatrix} \tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}, \\ \lambda_2 = -\mathrm{i}: & \quad \begin{bmatrix} -\tfrac{3}{4} + \mathrm{i} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} + \mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 0 & 0 \end{bmatrix} \text{ from which } \mathbf{x}_2 = \begin{bmatrix} \tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}. \end{aligned}$$

The unit circle diagram belonging to the four matrices is shown in Figure 8.2. $\square$

*Figure 8.2. The eigen-directions of the four transformations.*

**Theorem 8.11** (Eigenspaces of symmetric $2 \times 2$ matrices). *Let $\mathbf{A} \in \mathbb{R}^{2\times 2}$ be a symmetric matrix. Then*
*a) all eigenvalues of $\mathbf{A}$ are real,*
*b) $\mathbf{A}$ has two identical eigenvalues if and only if it is of the form $a\mathbf{I}$, in which case all vectors in the plane are eigenvectors,*
*c) if $\mathbf{A}$ has two distinct eigenvalues, then its eigenspaces are orthogonal to each other.*

*Proof.* The general form of a $2 \times 2$ symmetric real matrix is $\mathbf{A} = \left[\begin{smallmatrix} a & b \\ b & d \end{smallmatrix}\right]$, where $a, b, d \in \mathbb{R}$. Its characteristic equation according to (8.3) is $\lambda^2 - (a + d)\lambda + (ad - b^2)$. The discriminant of the equation is $D = (a + d)^2 - 4(ad - b^2) = (a - d)^2 + 4b^2 \geq 0$. So the roots, that is, the eigenvalues, are real. This proves $a)$. The two eigenvalues are identical if and only if $D = 0$, but this is only possible if $a = d$ and $b = 0$, which proves $b)$. The proof of statement $c)$ is left as an exercise. $\square$

### Determining all eigenvalues and eigenvectors of a matrix

Based on what has been described in the previous sections, determining the eigenvalues and eigenvectors of a matrix can be performed in two steps:
1. we solve the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$, its roots are the eigenvalues,
2. for each eigenvalue $\lambda$, we determine a basis for the null space of $\mathbf{A} - \lambda\mathbf{I}$, the nonzero vectors of the subspace it spans are the eigenvectors belonging to $\lambda$.

**Example 8.12** (Determining all eigenvalues and eigenvectors). *Determine the eigenvalues and eigenvectors of the matrix*

$$\begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}!$$

*Solution.* The first step is writing down and solving the characteristic equation. The determinant to be calculated is triangular, so its value is the product of the elements on the main diagonal:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = \begin{vmatrix} 0 - \lambda & 1 & 1 \\ 0 & 2 - \lambda & 0 \\ 0 & 0 & 2 - \lambda \end{vmatrix} = -\lambda(2 - \lambda)^2$$

The roots of the characteristic equation and thus the eigenvalues of matrix $\mathbf{A}$ are $\lambda_1 = 0$, $\lambda_2 = \lambda_3 = 2$.

Let us first consider the case $\lambda_1 = 0$. To determine the null space of $\mathbf{A} - \lambda_1\mathbf{I}$, we bring the matrix $\mathbf{A} - \lambda_1\mathbf{I}$ to reduced row echelon form:

$$\begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} \implies \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{aligned} x_2 &= 0 \\ x_3 &= 0. \end{aligned}$$

Its solution is $x_1 = t$, that is, all solutions are

$$\begin{bmatrix} t \\ 0 \\ 0 \end{bmatrix} = t \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.$$

So the eigenspace belonging to the eigenvalue $\lambda_1 = 0$ is the subspace spanned by the vector $(1,0,0)$.

Next, let us consider the case $\lambda_2 = \lambda_3 = 2$. We determine the null space of the matrix $\mathbf{A} - 2\mathbf{I}$.

$$\begin{bmatrix} -2 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{bmatrix} 2 & -1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies 2x_1 - x_2 - x_3 = 0$$

The solution of this system of equations (consisting of one equation) is $x_2 = s$, $x_3 = t$, $x_1 = (s + t)/2$, that is

$$\begin{bmatrix} (s + t)/2 \\ s \\ t \end{bmatrix} = s \begin{bmatrix} 1/2 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} 1/2 \\ 0 \\ 1 \end{bmatrix}.$$

So the eigenspace belonging to the eigenvalue $\lambda_2 = \lambda_3 = 2$ is the subspace spanned by the vectors $(\tfrac{1}{2}, 1, 0)$ and $(\tfrac{1}{2}, 0, 1)$. $\square$

The characteristic equation of $n \times n$ matrices is of degree $n$. For such an equation, there is a solution formula for $n \leq 4$, so we can solve these equations – for example, with the help of a computer algebra program. Otherwise, either we are lucky and the equation has a form for which there are quick solution possibilities, or there is only a chance to find an approximate solution.

**Example 8.13** (Higher-degree characteristic equation). *Determine the eigenvalues and eigenvectors of the matrix*

$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 3 & 3 & 2 \end{bmatrix}!$$

*Solution.* The characteristic equation:

$$\begin{aligned} \mathbf{A} - \lambda\mathbf{I} &= \begin{bmatrix} 1 - \lambda & 2 & 2 \\ 2 & 1 - \lambda & 2 \\ 3 & 3 & 2 - \lambda \end{bmatrix} \\ &= (1 - \lambda)^2(2 - \lambda) + 24 - 12(1 - \lambda) - 4(2 - \lambda) \\ &= -(\lambda^3 - 4\lambda^2 - 11\lambda - 6) \end{aligned}$$

To solve this cubic equation, we can use a computer, a solution formula, or for example the rational root theorem found in the appendix. According to this, the characteristic equation is $-(\lambda + 1)^2(\lambda - 6) = 0$, so its roots are $\lambda_1 = \lambda_2 = -1$ and $\lambda_3 = 6$.

In the case of $\lambda_1 = \lambda_2 = -1$

$$\mathbf{A} + \mathbf{I} = \begin{bmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 3 & 3 & 3 \end{bmatrix} \implies \begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies x_1 + x_2 + x_3 = 0.$$

Its solution is

$$\begin{bmatrix} -s - t \\ s \\ t \end{bmatrix} = s \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix},$$

that is, the eigenspace belonging to the eigenvalue -1 is spanned by the vectors $(-1, 1, 0)$ and $(-1, 0, 1)$.

In the case of $\lambda_3 = 6$

$$\mathbf{A} - 6\mathbf{I} = \begin{bmatrix} -5 & 2 & 2 \\ 2 & -5 & 2 \\ 3 & 3 & -4 \end{bmatrix} \implies \begin{bmatrix} 1 & 0 & -2/3 \\ 0 & 1 & -2/3 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{aligned} x_1 \quad &- \tfrac{2}{3}x_3 = 0 \\ x_2 &- \tfrac{2}{3}x_3 = 0. \end{aligned}$$

Its solution, with the parameter choice $x_3 = 3t$ avoiding the use of fractions, is

$$\begin{bmatrix} 2t \\ 2t \\ 3t \end{bmatrix} = t \begin{bmatrix} 2 \\ 2 \\ 3 \end{bmatrix}.$$

So the eigenspace belonging to the eigenvalue $\lambda_3 = 6$ is spanned by the vector $(2, 2, 3)$. $\square$

### Complex roots of the characteristic equation

If we examine a real matrix, it can happen that the characteristic equation has non-real roots. Since real numbers are at the same time complex numbers, we can consider the real-element matrix as complex-element as well, but in this case we can also consider the complex roots of the characteristic equation as eigenvalues. In this case, a complex-element eigenvector will belong to the complex eigenvalue, as we have already seen in Example 8.10.

**Example 8.14** (Complex eigenvalues and complex eigenvectors). *Determine the eigenvalues and eigenvectors of the complex matrix*

$$\mathbf{A} = \begin{bmatrix} \tfrac{1}{2} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{1}{2} \end{bmatrix}!$$

*Solution.* The characteristic equation is

$$\begin{vmatrix} \tfrac{1}{2} - \lambda & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{1}{2} - \lambda \end{vmatrix} = \left(\tfrac{1}{2} - \lambda\right)^2 + \left(\tfrac{\sqrt{3}}{2}\right)^2 = \lambda^2 - \lambda + 1.$$

The roots of the equation $\lambda^2 - \lambda + 1 = 0$ are $\tfrac{1}{2} \pm \tfrac{\sqrt{3}}{2}\mathrm{i}$.

First, let us examine the eigenvalue $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}$:

$$\mathbf{A} - \left(\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}\right)\mathbf{I} = \begin{bmatrix} -\tfrac{\sqrt{3}}{2}\mathrm{i} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & -\tfrac{\sqrt{3}}{2}\mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\mathrm{i} \\ 0 & 0 \end{bmatrix} \implies x - \mathrm{i}y = 0.$$

The solution of this equation (system) with the parameter choice $y = t$ is

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \mathrm{i}t \\ t \end{bmatrix} = t \begin{bmatrix} \mathrm{i} \\ 1 \end{bmatrix}.$$

So a basis of the eigenspace belonging to the eigenvalue $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}$ consists of the vector $(\mathrm{i}, 1)$.

For the eigenvalue $\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}$

$$\mathbf{A} - \left(\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}\right)\mathbf{I} = \begin{bmatrix} \tfrac{\sqrt{3}}{2}\mathrm{i} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{\sqrt{3}}{2}\mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & \mathrm{i} \\ 0 & 0 \end{bmatrix} \implies x + \mathrm{i}y = 0.$$

The solution of this equation (system) with the parameter choice $y = t$ is

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} -\mathrm{i}t \\ t \end{bmatrix} = t \begin{bmatrix} -\mathrm{i} \\ 1 \end{bmatrix}.$$

So the eigenspace belonging to the eigenvalue $\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}$ is spanned by the eigenvector $(-\mathrm{i}, 1)$. $\square$

### Multiple roots of the characteristic equation: algebraic and geometric multiplicity

If $\lambda$ is a $k$-fold root of the characteristic equation, or in other words, the multiplicity or *algebraic multiplicity* of $\lambda$ is $k$, then for the dimension $d$ of the eigenspace belonging to $\lambda$, $1 \leq d \leq k$. We will prove this statement later. The dimension of the eigenspace is usually called the *geometric multiplicity* of the eigenvalue $\lambda$. Examples 8.12 and 8.13 showed cases when the algebraic and geometric multiplicity of the eigenvalues are identical, that is, every eigenspace has exactly as many dimensions as the (algebraic) multiplicity of the root. The next problem shows that the dimension of the eigenspace can also be smaller.

**Example 8.15** (Algebraic and geometric multiplicity of an eigenvalue). *Determine the eigenvalues of the matrices*

$$\mathbf{A} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix} \text{ and } \mathbf{B} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 2 \end{bmatrix}$$

*and their algebraic and geometric multiplicities!*

*Solution.* Since $\mathbf{A}$ is a triangular matrix, its characteristic polynomial is $(4 - \lambda)^3$, so 4 is a triple root, that is, its algebraic multiplicity is 3. Since

$$\mathbf{A} - 4\mathbf{I} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

therefore the system of equations $(\mathbf{A} - 4\mathbf{I})\mathbf{x} = \mathbf{0}$ takes the form $y = 0$, $z = 0$, whose solution is

$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} t \\ 0 \\ 0 \end{bmatrix} = t \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.$$

According to this, the eigenspace of $\mathbf{A}$ is 1-dimensional, which is spanned by the vector $(1, 0, 0)$. Thus, the geometric multiplicity of the eigenvalue $\lambda = 4$ is 1.

The characteristic polynomial of matrix $\mathbf{B}$ is $(1 - \lambda)^2(2 - \lambda)^2$, its roots are 1 and 2, and the algebraic multiplicity of each is two. Let us deter-

mine their eigenspaces. For $\lambda = 1$

$$\mathbf{B} - \lambda\mathbf{I} = \mathbf{B} - \mathbf{I} = \begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

The solution to the corresponding homogeneous system of equations:

$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} s \\ t \\ 0 \\ 0 \end{bmatrix} = s\begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}.$$

So the dimension of the subspace is 2, that is, the geometric multiplicity equals the algebraic one. If $\lambda = 2$, then

$$\mathbf{B} - \lambda\mathbf{I} = \mathbf{B} - 2\mathbf{I} = \begin{bmatrix} -1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$

The solution to the corresponding homogeneous system of equations:

$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ t \\ 0 \end{bmatrix} = t\begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}.$$

So the dimension of the subspace is now 1, that is, the geometric multiplicity is less than the algebraic one. $\square$

### Eigenvalues and powers of a matrix

Calculating functions of matrices is closely related to eigenvalues. The first step in this topic is determining the eigenvalues and eigenvectors of matrix powers.

**Theorem 8.16 (Invertibility of a matrix and the 0 eigenvalue).** *The matrix $\mathbf{A}$ is invertible if and only if 0 is not its eigenvalue.*

Proof. $\mathbf{A}$ is invertible if and only if $\det(\mathbf{A}) \neq 0$, but this is equivalent to $\det(\mathbf{A} - 0\mathbf{I}) \neq 0$, meaning 0 is not an eigenvalue of $\mathbf{A}$. $\square$

**Theorem 8.17 (Eigenvalues and eigenvectors of matrix powers).** *If $\lambda$ is an eigenvalue of the matrix $\mathbf{A}$ and $\mathbf{x}$ is a corresponding eigenvector, then for any integer $n$, $\lambda^n$ is an eigenvalue of the matrix $\mathbf{A}^n$ and $\mathbf{x}$ is a corresponding eigenvector, provided that both $\lambda^n$ and $\mathbf{A}^n$ are defined.*

Proof. For $n = 0$, $\lambda^0 = 1$ and $\mathbf{A}^0 = \mathbf{I}$, and in this case every vector is an eigenvector belonging to the eigenvalue 1, so the statement is true then.

For positive $n$ we prove the statement by induction: for $n = 1$ it is obviously true, for $n = 2$:

$$\mathbf{A}^2\mathbf{x} = \mathbf{A}(\mathbf{A}\mathbf{x}) = \mathbf{A}(\lambda\mathbf{x}) = \lambda(\mathbf{A}\mathbf{x}) = \lambda(\lambda\mathbf{x}) = \lambda^2\mathbf{x}.$$

Similarly, we obtain that if the statement is already true for $n = k - 1$, then it is also true for $n = k$:

$$\mathbf{A}^k\mathbf{x} = \mathbf{A}(\mathbf{A}^{k-1}\mathbf{x}) = \mathbf{A}(\lambda^{k-1}\mathbf{x}) = \lambda^{k-1}(\mathbf{A}\mathbf{x}) = \lambda^{k-1}(\lambda\mathbf{x}) = \lambda^k\mathbf{x}.$$

If $\mathbf{A}$ is invertible, then

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}, \quad \text{from which} \quad \frac{1}{\lambda}\mathbf{x} = \mathbf{A}^{-1}\mathbf{x}, \quad \text{that is} \quad \lambda^{-1}\mathbf{x} = \mathbf{A}^{-1}\mathbf{x}.$$

Finally, for negative exponents:

$$\mathbf{A}^k\mathbf{x} = \lambda^k\mathbf{x}, \quad \text{from which} \quad \lambda^{-k}\mathbf{x} = \mathbf{A}^{-k}\mathbf{x}. \qquad \square$$

**Theorem 8.18 (Effect of matrix powers).** *Suppose that $\lambda_1, \lambda_2, \dots \lambda_k$ are eigenvalues of the $n \times n$ matrix $\mathbf{A}$, and that $\mathbf{x}_1, \dots \mathbf{x}_k$ are their corresponding eigenvectors. If an $n$-dimensional vector $\mathbf{v}$ can be expressed as a linear combination of these eigenvectors, that is*

$$\mathbf{v} = c_1\mathbf{x}_1 + c_2\mathbf{x}_2 + \dots + c_k\mathbf{x}_k,$$

*then for any integer $m$*

$$\mathbf{A}^m\mathbf{v} = c_1\lambda_1^m\mathbf{x}_1 + c_2\lambda_2^m\mathbf{x}_2 + \dots + c_k\lambda_k^m\mathbf{x}_k.$$

Proof. The proof is self-evident, since

$$\begin{aligned} \mathbf{A}^m\mathbf{v} &= \mathbf{A}^m(c_1\mathbf{x}_1 + c_2\mathbf{x}_2 + \dots + c_k\mathbf{x}_k) \\ &= c_1\mathbf{A}^m\mathbf{x}_1 + c_2\mathbf{A}^m\mathbf{x}_2 + \dots + c_k\mathbf{A}^m\mathbf{x}_k \\ &= c_1\lambda_1^m\mathbf{x}_1 + c_2\lambda_2^m\mathbf{x}_2 + \dots + c_k\lambda_k^m\mathbf{x}_k. \qquad \square \end{aligned}$$

> *Unfortunately, it is not true that for every matrix we can find $n$ independent eigenvectors as a linear combination of which every vector can be written, so this theorem only applies to vectors that can be expressed as a linear combination of eigenvectors! This theorem shows that deciding when a basis can be formed from the eigenvectors of a matrix is an important question.*

### Eigenvalues of special matrices

Certain special properties of matrices also affect certain properties of eigenvalues.

**Theorem 8.19 (Eigenvalues of special matrices).** *Let $\mathbf{A}$ be a real matrix of order $n$. Then*

a) *if $\mathbf{A}$ is symmetric, then all its eigenvalues are real,*

b) *if $\mathbf{A}$ is skew-symmetric, then all its eigenvalues are imaginary,*

c) *if $\mathbf{A}$ is orthogonal, then the absolute value of all its eigenvalues is 1,*

d) *$\mathbf{A}$ is nilpotent if and only if all its eigenvalues are 0, that is, its characteristic polynomial is of the form $\lambda^n$.*

Proof. *a), b)* Let $(\lambda, \mathbf{x})$ be an eigenpair belonging to $\mathbf{A}$. Multiply both sides of the equality $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ from the left by the adjoint (conjugate transpose) of $\mathbf{x}$:

$$\mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\lambda\mathbf{x} = \lambda|\mathbf{x}|^2.$$

Let us take the adjoint (conjugate transpose) of both sides, exploiting that since $\mathbf{A}$ is real, therefore $\mathbf{A}^{\mathsf{H}} = \mathbf{A}^{\mathsf{T}}$:

$$\mathbf{x}^{\mathsf{H}}\mathbf{A}^{\mathsf{T}}\mathbf{x} = \bar{\lambda}|\mathbf{x}|^2.$$

Let $\lambda = a + ib$. If $\mathbf{A}$ is symmetric, that is $\mathbf{A}^{\mathsf{T}} = \mathbf{A}$, then $\lambda = \bar{\lambda}$, that is $a + ib = a - ib$. Thus the imaginary part of $\lambda$ is 0, so $\lambda$ is real. If $\mathbf{A}$ is skew-symmetric, that is $\mathbf{A}^{\mathsf{T}} = -\mathbf{A}$, then $a + ib = -a + ib$, that is the real part of $\lambda$ is 0, so $\lambda$ is imaginary.

*c)* If $\mathbf{A}$ is orthogonal, then for any vector $\mathbf{x}$, $|\mathbf{A}\mathbf{x}| = |\mathbf{x}|$. Thus, if $\mathbf{x}$ is an eigenvector, then $|\mathbf{x}| = |\mathbf{A}\mathbf{x}| = |\lambda\mathbf{x}| = |\lambda||\mathbf{x}|$, from which $|\lambda| = 1$.

*d)* If $\mathbf{A}^k = \mathbf{O}$, and $\lambda$ is an eigenvalue of $\mathbf{A}$, then $\lambda^k$ is an eigenvalue of the matrix $\mathbf{A}^k = \mathbf{O}$, but its only eigenvalue is 0, so all eigenvalues of $\mathbf{A}$ are also 0. The converse of the statement follows from the Cayley–Hamilton theorem, which we will prove soon. According to this, every matrix satisfies its characteristic polynomial, so if the characteristic polynomial is $\lambda^n = 0$, then $\mathbf{A}^n = \mathbf{O}$, that is $\mathbf{A}$ is nilpotent. $\square$

From the proof of the previous theorem, the proof of the following theorem can also be obtained with minimal modification:

**Theorem 8.20 (Eigenvalues of special complex matrices).** *If the complex matrix $\mathbf{A}$ of order $n$ is*

a) *self-adjoint, then all its eigenvalues are real,*

b) *skew-self-adjoint, then all its eigenvalues are imaginary,*

c) *unitary, then the absolute value of all its eigenvalues is 1.*

### Exercises

**8.1.** Prove statement *c)* of theorem **??**, according to which if a $2 \times 2$ symmetric real matrix has two distinct eigenvalues, then its eigenspaces are orthogonal to each other.

**8.2.** Is the following matrix diagonalizable over the field $\mathbb{F}_7$?

$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 3 & 4 \\ 3 & 3 & 0 \end{bmatrix}$$

## Similarity, diagonalizability

> *The eigenvalues and characteristic polynomial of a linear transformation are preserved for its matrices written in various bases. We are looking for a basis in which its matrix has the simplest form.*

### Eigenvalues of linear transformations

The concepts of eigenvalue, eigenvector, and eigenspace can naturally be carried over to linear mappings as well.

**Definition 8.21 (Eigenvalue and eigenvector of a linear transformation).** *We say that the number $\lambda$ is an eigenvalue of the linear transformation $L$ if there exists a nonzero vector $\mathbf{x}$ for which $L\mathbf{x} = \lambda\mathbf{x}$. Such vectors $\mathbf{x}$ are called the eigenvectors of the linear transformation $L$ corresponding to the eigenvalue $\lambda$.*

If the linear transformation is a mapping $\mathbb{R}^2 \to \mathbb{R}^2$ or $\mathbb{R}^3 \to \mathbb{R}^3$ that implements some simple geometric transformation, then sometimes we can easily determine the eigenvalues and eigenvectors without knowing the matrix of the transformation.

**Example 8.22 (Eigenvalue and eigenspace of a linear transformation).** *Determine – relying purely on our geometric intuition – the eigenvalues and the corresponding eigenspaces of the following linear mappings.*

a) *reflection of vectors of the plane across a line (or reflection of its points across a line passing through the origin);*

b) *orthogonal projection of vectors of the plane onto a line (or orthogonal projection of its points onto a line passing through the origin);*

c) *rotation of vectors of the space around a line by an angle different from an integer multiple of $\pi$;*

d) *orthogonal projection of vectors of the space onto a plane;*

e) *reflection of vectors of the space across a plane.*

Solution. Similarly to what was proven in the previous chapter, such as in Proposition 7.7, it can be seen that every transformation in the problem is linear.

*a)* In the case of reflection across a line, only vectors parallel to and perpendicular to the line map to constant multiples of themselves, specifically, vectors parallel to the line map to themselves, and those perpendicular to it map to their opposites. Thus, the eigenspace of this transformation corresponding to the eigenvalue 1 consists of vectors parallel to the line, and the eigenspace corresponding to $-1$ consists of vectors perpendicular to it. The statement regarding points applies to the position vectors pointing to the points.

*b)* The orthogonal projection of the plane onto a line – similarly to the previous case – leaves vectors parallel to the line unchanged, and maps vectors perpendicular to it to the $\mathbf{0}$ vector. Therefore, the eigenspace corresponding to the eigenvalue 1 consists of vectors parallel to the line, and the eigenspace corresponding to 0 consists of vectors perpendicular to it.

*c)* The rotation of space around a line maps vectors parallel to the axis of rotation to themselves, and if the angle of rotation is not an integer multiple of $\pi$, it does not map any other vector to a scalar multiple of itself. Thus, the only eigenvalue is 1, and its corresponding eigenspace consists of vectors parallel to the axis of rotation.

*d)* The orthogonal projection of space vectors onto a plane leaves all vectors of the plane unchanged, while mapping vectors perpendicular to the plane to the $\mathbf{0}$ vector, so the two eigenvalues are 1 and 0. The eigenspace corresponding to 1 consists of the vectors of the plane, and the eigenspace corresponding to 0 consists of vectors perpendicular to it.

*e)* We solved this problem in Example 8.1. The two eigenvalues are 1 and $-1$, the eigenspace corresponding to the eigenvalue 1 consists of the vectors of the plane, and the eigenspace corresponding to $-1$ consists of vectors perpendicular to it. $\square$

A linear mapping can have different matrices in different bases, but their eigenvalues are still the same, since the image of a vector depends only on the mapping, not on the chosen basis.

### Eigenvalues of similar matrices

From Theorems 7.30 and 7.31 we know that the matrices corresponding to a linear mapping in different bases are similar. In addition, we also know that important matrix properties are invariant under similarity. In this section, we will expand the range of these properties.

**Theorem 8.23 (Invariants related to eigenvalues).** *If $\mathbf{A} \sim \mathbf{B}$, then the characteristic polynomials of $\mathbf{A}$ and $\mathbf{B}$ are identical, so their eigenvalues, and their algebraic and even geometric multiplicities are also the same.*

Proof. During the proof, we assume that for some invertible matrix $\mathbf{C}$, $\mathbf{A} = \mathbf{C}^{-1}\mathbf{B}\mathbf{C}$. Then

$$\begin{aligned} \mathbf{A} - \lambda\mathbf{I} &= \mathbf{C}^{-1}\mathbf{B}\mathbf{C} - \lambda\mathbf{C}^{-1}\mathbf{I}\mathbf{C} \\ &= \mathbf{C}^{-1}(\mathbf{B}\mathbf{C} - \lambda\mathbf{I}\mathbf{C}) \\ &= \mathbf{C}^{-1}(\mathbf{B} - \lambda\mathbf{I})\mathbf{C}, \end{aligned}$$

that is, $\mathbf{A} - \lambda\mathbf{I}$ and $\mathbf{B} - \lambda\mathbf{I}$ are also similar. According to Theorem 7.31, the determinants of similar matrices are equal, so $\det(\mathbf{A} - \lambda\mathbf{I}) = \det(\mathbf{B} - \lambda\mathbf{I})$, which means the characteristic polynomials of $\mathbf{A}$ and $\mathbf{B}$ are also identical. This implies that their eigenvalues, and their (algebraic) multiplicities are equal. For the equality of geometric multiplicities, it is sufficient to show that the dimensions of the null spaces of $\mathbf{A} - \lambda\mathbf{I}$ and $\mathbf{B} - \lambda\mathbf{I}$ are the same, which we also proved in Theorem 7.31. $\square$

> *We know the relationships between the coefficients and roots of polynomials, so the functions of the eigenvalues that give the coefficients of the polynomial are also invari-*
ant. For example, in the cubic case:

$$\begin{aligned} (\lambda_1 - \lambda)&(\lambda_2 - \lambda)(\lambda_3 - \lambda) \\ &= -\lambda^3 + (\lambda_1 + \lambda_2 + \lambda_3)\lambda^2 - (\lambda_1\lambda_2 + \lambda_2\lambda_3 + \lambda_3\lambda_1)\lambda + \lambda_1\lambda_2\lambda_3. \end{aligned}$$

Thus $\lambda_1 + \lambda_2 + \lambda_3$, $\lambda_1\lambda_2 + \lambda_2\lambda_3 + \lambda_3\lambda_1$, and $\lambda_1\lambda_2\lambda_3$ are invariant quantities. In general, for a matrix $\mathbf{A}$ of order $n$, the following functions of the eigenvalues are invariant:

$$\begin{aligned} e_1(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i \le n} \lambda_i = \operatorname{trace}(\mathbf{A}), \\ e_2(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i < j \le n} \lambda_i\lambda_j, \\ e_3(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i < j < k \le n} \lambda_i\lambda_j\lambda_k, \\ &\vdots \\ e_n(\lambda_1, \lambda_2, \dots, \lambda_n) &= \lambda_1\lambda_2 \dots \lambda_n = \det(\mathbf{A}). \end{aligned}$$

The functions $e_1, e_2, \dots, e_n$ listed here are called *elementary symmetric polynomials*. The last mentioned function of the eigenvalues is the determinant, the invariance of which we showed in Theorem 7.31. We will soon prove that every matrix is similar to an upper triangular matrix with the eigenvalues on its main diagonal. Thus, the traces of similar matrices match, as they are equal to the sum of the eigenvalues.

> *An important consequence of this theorem is that it makes sense to speak about the characteristic polynomial of a linear transformation (at least in the finite-dimensional case, e.g., for transformations $\mathbb{R}^n \to \mathbb{R}^n$ or $\mathbb{C}^n \to \mathbb{C}^n$).*

### Diagonalization and eigendecomposition of matrices

A very important question is whether a basis can be selected from the eigenvectors of a given linear mapping. Because in this basis, its matrix – as we will prove – takes a diagonal form.

**Definition 8.24 (Diagonalizability).** *An $n \times n$ matrix $\mathbf{A}$ is diagonalizable if it is similar to a diagonal matrix, that is, if there exists a diagonal matrix $\boldsymbol{\Lambda}$ and an invertible matrix $\mathbf{C}$ such that*

$$\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}. \tag{8.4}$$

**Theorem 8.25 (Necessary and sufficient condition for diagonalizability).** *An $n \times n$ matrix $\mathbf{A}$ is diagonalizable, that is, there exists a matrix $\mathbf{C}$ for which $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ is diagonal, if and only if $\mathbf{A}$ has $n$ linearly independent eigenvectors. In this case, the diagonal matrix consists of the eigenvalues of $\mathbf{A}$, and $\mathbf{C}$ consists of its eigenvectors.*

Proof. If $\mathbf{A}$ is similar to a diagonal matrix, that is, there is a matrix $\mathbf{C}$ such that $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ is diagonal, then multiplying from the left by $\mathbf{C}$ gives the equality $\mathbf{C}\boldsymbol{\Lambda} = \mathbf{A}\mathbf{C}$. If $\mathbf{C} = [\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]$ and $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, then

$$[\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} = \mathbf{A}[\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]. \tag{8.5}$$

Here the $i$-th column of the left-hand matrix is $\lambda_i\mathbf{x}_i$, and that of the right-hand matrix is $\mathbf{A}\mathbf{x}_i$. These are equal, so $\mathbf{A}\mathbf{x}_i = \lambda_i\mathbf{x}_i$, meaning $\mathbf{x}_i$ is the eigenvector corresponding to the eigenvalue $\lambda_i$. Since $\mathbf{C}$ is invertible, its column vectors are independent, which proves one half of our statement. Now suppose that $\mathbf{A}$ has $n$ independent eigenvectors. Form a diagonal matrix $\boldsymbol{\Lambda}$ from the eigenvalues such that the eigenvalue $\lambda_i$ corresponding to the vector $\mathbf{x}_i$ placed in the $i$-th column of matrix $\mathbf{C}$ is placed in the $i$-th column of matrix $\boldsymbol{\Lambda}$. Since $\lambda_i\mathbf{x}_i = \mathbf{A}\mathbf{x}_i$, relation (8.5) holds, meaning $\boldsymbol{\Lambda}$ is similar to $\mathbf{A}$. $\square$

> *The expression $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ can be rewritten into the form*

$$\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} \tag{8.6}$$

*which we call the eigendecomposition of the matrix $\mathbf{A}$.*

**Example 8.26 (Diagonalization of a matrix).** *Is the matrix from Example 8.12*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*diagonalizable?*

Solution. We determined the eigenvalues and eigenvectors of matrix $\mathbf{A}$ in Example 8.12. Since $\lambda_1 = 0$, $\lambda_2 = \lambda_3 = 2$, the corresponding eigenvectors are $(1, 0, 0)$, $(1/2, 1, 0)$ and $(1/2, 0, 1)$, and these vectors are linearly independent, so $\mathbf{A}$ is similar to the diagonal matrix $\boldsymbol{\Lambda}$, where

$$\boldsymbol{\Lambda} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}, \quad \text{and} \quad \mathbf{C} = \begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

This can be easily verified by checking the relation $\mathbf{C}\boldsymbol{\Lambda} = \mathbf{A}\mathbf{C}$:

$$\begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}. \qquad \square$$

### Left eigenvectors and the dyadic form of eigendecomposition

Instead of the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, we can also examine the equation $\mathbf{y}^{\mathsf{T}}\mathbf{A} = \lambda\mathbf{y}^{\mathsf{T}}$.

The row vectors satisfying the equation $\mathbf{y}^{\mathsf{T}}\mathbf{A} = \lambda\mathbf{y}^{\mathsf{T}}$ subject to the condition $\mathbf{y}^{\mathsf{T}} \neq \mathbf{0}^{\mathsf{T}}$ are called the *left eigenvectors* of the matrix $\mathbf{A}$. In this formulation, eigenvectors are also customarily called right eigenvectors.

Transposing the above equation, we obtain

$$\mathbf{A}^{\mathsf{T}}\mathbf{y} = \lambda\mathbf{y},$$

meaning the left eigenvectors are the transposes of the eigenvectors of the transposed matrix. Since $\det(\mathbf{A} - \lambda\mathbf{I}) = \det((\mathbf{A} - \lambda\mathbf{I})^{\mathsf{T}}) = \det(\mathbf{A}^{\mathsf{T}} - \lambda\mathbf{I})$, that is, the characteristic polynomials of $\mathbf{A}$ and $\mathbf{A}^{\mathsf{T}}$ are identical, the eigenvalues corresponding to the left and right eigenvectors are the same. However, the left and right eigenvectors are generally not identical (in matrix notation: they are not transposes of each other).

If $\mathbf{A}$ is diagonalizable, that is, $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$, then similarly to Theorem 8.25, from the matrix equation $\boldsymbol{\Lambda}\mathbf{C}^{-1} = \mathbf{C}^{-1}\mathbf{A}$ we get that the row vectors of $\mathbf{C}^{-1}$ are the left eigenvectors of $\mathbf{A}$. Let the $i$-th row vector of matrix $\mathbf{C}^{-1}$ be denoted by $\mathbf{y}_i^{\mathsf{T}}$, then

$$\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix}\begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix} = \begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix}\mathbf{A} \tag{8.7}$$

so $\lambda_i\mathbf{y}_i^{\mathsf{T}} = \mathbf{y}_i^{\mathsf{T}}\mathbf{A}$ ($i = 1, 2, \dots, n$), meaning $\mathbf{y}_i^{\mathsf{T}}$ is indeed a left eigenvector. In this case, the eigendecomposition can immediately be decomposed into a sum of dyads:

$$\begin{aligned} \mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} &= [\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix}\begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix} \\ &= \lambda_1\mathbf{x}_1\mathbf{y}_1^{\mathsf{T}} + \lambda_2\mathbf{x}_2\mathbf{y}_2^{\mathsf{T}} + \dots + \lambda_n\mathbf{x}_n\mathbf{y}_n^{\mathsf{T}} \end{aligned} \tag{8.8}$$

We call this the *dyadic form of eigendecomposition.*

**Example 8.27 (Dyadic form of eigendecomposition and the left eigenvectors).** *Determine the left eigenvectors, the eigendecomposition, and its dyadic form for the matrix*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*featured in Examples 8.26 and 8.12.*

Solution. The left eigenvectors are equal to the transposes of the eigenvectors of the transposed matrix. Thus, the left eigenvectors can be calculated with the usual technique. However, if we also calculate the eigendecomposition,
the left eigenvectors can be read directly from the matrix $\mathbf{C}^{-1}$ as well. In Example 8.26, we determined the matrix $\mathbf{C}$, calculating its inverse yields the eigendecomposition:

$$\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} = \begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

From this, rewriting into dyads is as follows:

$$\begin{aligned} \mathbf{A} &= 0\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \end{bmatrix} + 2\begin{bmatrix} \frac{1}{2} \\ 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 0 \end{bmatrix} + 2\begin{bmatrix} \frac{1}{2} \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \\ &= \begin{bmatrix} 0 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix} + \begin{bmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \end{bmatrix}. \qquad \square \end{aligned}$$

### Polynomials of diagonalizable matrices and the Cayley–Hamilton theorem

We will show that if we substitute a matrix into its own characteristic polynomial, we get the zero matrix.

If $p(x) = c_n x^n + c_{n-1}x^{n-1} + \dots + c_1 x + c_0$ is an arbitrary polynomial, then the value of this polynomial taken at an arbitrary square matrix can be interpreted, that is, the polynomial of a square matrix can be interpreted using the following formula:

$$p(\mathbf{A}) = c_n\mathbf{A}^n + c_{n-1}\mathbf{A}^{n-1} + \dots + c_1\mathbf{A} + c_0\mathbf{I}.$$

If the matrix $\mathbf{A}$ is diagonalizable, and its eigendecomposition is $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$, then $\mathbf{A}^2 = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}\mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} = \mathbf{C}\boldsymbol{\Lambda}^2\mathbf{C}^{-1}$. Similarly, for any nonnegative integer $k$,

$$\mathbf{A}^k = \mathbf{C}\boldsymbol{\Lambda}^k\mathbf{C}^{-1}.$$

According to this, for any polynomial $p(x)$, $p(\mathbf{A}) = \mathbf{C}p(\boldsymbol{\Lambda})\mathbf{C}^{-1}$. On the other hand, the polynomial of any diagonal matrix can be calculated as the polynomial of the diagonal elements, i.e.,

$$p\left(\operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)\right) = \operatorname{diag}\left(p(\lambda_1), p(\lambda_2), \dots, p(\lambda_n)\right).$$

Thus, we have proved the following proposition:

**Proposition 8.28 (Polynomial of a diagonalizable matrix).** *Let $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$, where $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, and $p(x)$ be an arbitrary polynomial. Then*

$$p(\mathbf{A}) = \mathbf{C}\begin{bmatrix} p(\lambda_1) & 0 & \dots & 0 \\ 0 & p(\lambda_2) & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & p(\lambda_n) \end{bmatrix}\mathbf{C}^{-1}.$$

Now let $\chi_{\mathbf{A}}$ denote the characteristic polynomial of matrix $\mathbf{A}$! Thus, if $\lambda$ is an eigenvalue of $\mathbf{A}$, then $\chi_{\mathbf{A}}(\lambda) = 0$. From this it immediately follows that $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$, because

$$\begin{aligned} \chi_{\mathbf{A}}(\mathbf{A}) &= \mathbf{C}\,\chi_{\mathbf{A}}(\boldsymbol{\Lambda})\,\mathbf{C}^{-1} \\ &= \mathbf{C}\operatorname{diag}(\chi_{\mathbf{A}}(\lambda_1), \chi_{\mathbf{A}}(\lambda_2), \dots, \chi_{\mathbf{A}}(\lambda_n))\,\mathbf{C}^{-1} \\ &= \mathbf{O}. \end{aligned}$$

This statement is true not only for diagonalizable matrices, but generally as well. For this, we will immediately show a simple, but incorrect proof! Since the characteristic polynomial is $\chi_{\mathbf{A}}(\lambda) = \det(\mathbf{A} - \lambda\mathbf{I})$, we might think that then $\chi_{\mathbf{A}}(\mathbf{A}) = \det(\mathbf{A} - \mathbf{A}\mathbf{I}) = \det(\mathbf{O}) = 0$. However, this is flawed reasoning: we substituted matrices into a matrix in place of $\lambda$, moreover, there is a scalar on the right side and a matrix on the left side!

**Theorem 8.29 (Cayley–Hamilton theorem).** *If $\mathbf{A}$ is an arbitrary square matrix whose characteristic polynomial is $\chi_{\mathbf{A}}$, then $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$.*

Proof. Let $\mathbf{B} = \mathbf{A} - \lambda\mathbf{I}$. Thus, the characteristic polynomial of $\mathbf{A}$ is

$$\det\mathbf{B} = \chi_{\mathbf{A}}(\lambda) = (-1)^n\lambda^n + p_{n-1}\lambda^{n-1} + \dots + p_1\lambda + p_0. \tag{8.9}$$

The cofactor associated with any element of $\mathbf{B}$ is a polynomial of $\lambda$ of degree at most $n - 1$, thus there exist matrices $\mathbf{C}_0, \mathbf{C}_1, \dots, \mathbf{C}_{n-1}$ with constant elements such that

$$\operatorname{adj}\mathbf{B} = \lambda^{n-1}\mathbf{C}_{n-1} + \dots + \lambda\mathbf{C}_1 + \mathbf{C}_0. \tag{8.10}$$

According to formula (6.3) in Theorem 6.30 regarding the inverse of a matrix, $\det(\mathbf{B})\mathbf{I} = \mathbf{B}\operatorname{adj}(\mathbf{B})$. On the right side of this, we perform the substitution according to (8.10):

$$\begin{aligned} \mathbf{B}\operatorname{adj}\mathbf{B} &= (\mathbf{A} - \lambda\mathbf{I})\left(\sum_{k=0}^{n-1} \lambda^k\mathbf{C}_k\right) \\ &= \mathbf{A}\mathbf{C}_0 + \left(\sum_{k=1}^{n-1} \lambda^k(\mathbf{A}\mathbf{C}_k - \mathbf{C}_{k-1})\right) - \lambda^n\mathbf{C}_{n-1}. \end{aligned}$$

We write down the equality of coefficients standing on the left and right sides of the equation $\det(\mathbf{B})\mathbf{I} = \mathbf{B}\operatorname{adj}(\mathbf{B})$, and we multiply each by the appropriate power of $\mathbf{A}$ as follows:

$$\begin{alignedat}{2} (-1)^n\mathbf{I} &= -\mathbf{C}_{n-1} &\quad &\cdot \mathbf{A}^n \\ p_{n-1}\mathbf{I} &= \mathbf{A}\mathbf{C}_{n-1} - \mathbf{C}_{n-2} &\quad &\cdot \mathbf{A}^{n-1} \\ &\;\;\vdots & &\;\;\vdots \\ p_2\mathbf{I} &= \mathbf{A}\mathbf{C}_2 - \mathbf{C}_1 &\quad &\cdot \mathbf{A}^2 \\ p_1\mathbf{I} &= \mathbf{A}\mathbf{C}_1 - \mathbf{C}_0 &\quad &\cdot \mathbf{A} \\ p_0\mathbf{I} &= \mathbf{A}\mathbf{C}_0. & & \end{alignedat}$$

Adding together the equalities obtained after multiplication, we get that

$$(-1)^n\mathbf{A}^n + p_{n-1}\mathbf{A}^{n-1} + \dots + p_1\mathbf{A} + p_0\mathbf{I} = \mathbf{O},$$

because on the right side every term cancels out in a telescoping sum fashion. With this, we have proved that $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$. $\square$

### Eigenspaces of distinct eigenvalues

Given the importance of diagonalizability, it is worth gathering further conditions that can be easily checked.

Several sufficient conditions can be derived from the following theorem:

**Theorem 8.30 (Eigenvectors of distinct eigenvalues).** *If $\lambda_1, \lambda_2, \dots \lambda_k$ are distinct eigenvalues of the $n \times n$ matrix $\mathbf{A}$, then their corresponding eigenvectors $\mathbf{x}_1, \mathbf{x}_2, \dots \mathbf{x}_k$ are linearly independent.*

Proof. We prove by contradiction. Assume that these vectors are linearly dependent. Then there is one among the vectors which is a linear function only of those with smaller indices. Let $\mathbf{x}_i$ be the one with the smallest index among these, that is,

$$\mathbf{x}_i = c_1\mathbf{x}_1 + \dots + c_{i-1}\mathbf{x}_{i-1}, \tag{8.11}$$

but the vectors with indices smaller than $i$ are already linearly independent. Multiply both sides of the equation from the left by the matrix $\mathbf{A}$:

$$\mathbf{A}\mathbf{x}_i = \mathbf{A}(c_1\mathbf{x}_1 + \dots + c_{i-1}\mathbf{x}_{i-1}) = c_1\mathbf{A}\mathbf{x}_1 + \dots + c_{i-1}\mathbf{A}\mathbf{x}_{i-1},$$

then utilize the fact that these vectors are eigenvectors:

$$\lambda_i\mathbf{x}_i = c_1\lambda_1\mathbf{x}_1 + \dots + c_{i-1}\lambda_{i-1}\mathbf{x}_{i-1}. \tag{8.12}$$

After this, multiplying both sides of equation (8.11) by $\lambda_i$, we obtain that

$$\lambda_i\mathbf{x}_i = c_1\lambda_i\mathbf{x}_1 + \dots + c_{i-1}\lambda_i\mathbf{x}_{i-1}. \tag{8.13}$$

Finally, subtracting equation (8.12) from equation (8.13) gives

$$\mathbf{0} = c_1(\lambda_i - \lambda_1)\mathbf{x}_1 + \dots + c_{i-1}(\lambda_i - \lambda_{i-1})\mathbf{x}_{i-1},$$

Since the vectors $\mathbf{x}_1, \dots, \mathbf{x}_{i-1}$ are already linearly independent, and the values $\lambda_1, \dots, \lambda_i$ are distinct, $c_1 = \dots = c_{i-1} = 0$. Therefore,

$$\mathbf{x}_i = 0\mathbf{x}_1 + \dots + 0\mathbf{x}_{i-1} = \mathbf{0},$$

which is a contradiction, since $\mathbf{x}_i$ is an eigenvector, so it cannot be $\mathbf{0}$. This proves the incorrectness of the indirect assumption, that is, it verifies our statement. $\square$

> *It is customary to formulate it as saying that the eigenspaces corresponding to distinct eigenvalues are linearly independent, because no matter how we choose one nonzero vector from each, they will be linearly independent.*

> *▶ Another important consequence of this theorem is that if we choose linearly independent vectors from each eigenspace corresponding to distinct eigenvalues, their union will still be linearly independent. If indeed they were linearly dependent, then by combining the linear combinations of vectors falling into one subspace into a single vector, we would get one eigenvector for each eigenvalue, which would be dependent, contradicting the above theorem.*

> *▶ Specifically, it is also true that choosing a basis from each eigenspace corresponding to distinct eigenvalues, their union also yields a linearly independent system of vectors.*

**Corollary 8.31 (Distinct eigenvalues and diagonalizability).** *If the $n$-th order matrix $\mathbf{A}$ has $n$ distinct eigenvalues, then it is diagonalizable.*

Proof. According to Theorem 8.30, $n$ distinct eigenvalues have $n$ independent eigenvectors, which according to Theorem 8.25 means exactly that the matrix is diagonalizable. $\square$

Finally, we list some classes of matrices in which all matrices behave uniformly with respect to diagonalizability:

a) A real $n$-th order matrix is not diagonalizable over the real matrices if its characteristic equation has non-real roots, because there would be non-real numbers in the diagonalized form. For example, the matrix

$$\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$

is not diagonalizable over the reals, but it is over the complex numbers (see exercise ??).

b) Nilpotent matrices are not diagonalizable, for example, the matrix

$$\begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

(exercise ??).

c) Every symmetric matrix is diagonalizable; moreover, an orthonormal basis can be selected from its eigenvectors. We will prove this soon (Theorem 9.2).

**Example 8.32 (Determining diagonalizability).** *Decide which of the following matrices is diagonalizable as a real matrix!*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \ \mathbf{B} = \begin{bmatrix} 1 & -4 \\ 4 & 1 \end{bmatrix}, \ \mathbf{C} = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}, \ \mathbf{D} = \begin{bmatrix} 6 & 9 \\ 9 & 6 \end{bmatrix}.$$

Solution. Matrix $\mathbf{A}$ is nilpotent, because $\mathbf{A}^2 = \mathbf{O}$, so it is not diagonalizable. Matrix $\mathbf{B}$ has non-real eigenvalues, so it is not diagonalizable over the reals, but it is over the complex numbers, because it has two distinct eigenvalues. The eigenvalues of matrix $\mathbf{C}$ are distinct, and all are real (1, 4, 6), so it is diagonalizable. Matrix $\mathbf{D}$ is symmetric, therefore it is diagonalizable. $\square$

### Multiplicity of eigenvalues and diagonalizability

There is a simple but important relationship between the algebraic and geometric multiplicity of eigenvalues and diagonalizability. Namely, the geometric multiplicity is never greater than the algebraic one, and on the other hand, diagonalizability is equivalent to the geometric and algebraic multiplicities being equal for every eigenvalue.

**Theorem 8.33 (Relationship between algebraic and geometric multiplicity).** *The geometric multiplicity of any eigenvalue of a matrix cannot be greater than its algebraic multiplicity.*

Proof. Let $g$ denote the geometric multiplicity of an eigenvalue $\mu$ of matrix $\mathbf{A}$. This means that the dimension of the null space of $\mathbf{A} - \mu\mathbf{I}$ is $g$. Let its basis be $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_g\}$. Extend this basis to a basis of the entire space with the vectors $\mathbf{x}_{g+1}, \dots, \mathbf{x}_n$. The matrix $\mathbf{C} = [\mathbf{x}_1 \ \dots \ \mathbf{x}_g | \mathbf{x}_{g+1} \ \dots \ \mathbf{x}_n]$ formed from these independent vectors is invertible. Write $\mathbf{C}$ in block matrix form: let $\mathbf{X}$ be the block consisting of the first $g$ columns, and $\mathbf{Y}$ the remainder, i.e., $\mathbf{C} = [\mathbf{X}|\mathbf{Y}]$. Since the columns of $\mathbf{X}$ are the eigenvectors corresponding to $\mu$, $\mathbf{A}\mathbf{X} = \mu\mathbf{X}$. Decompose the inverse $\mathbf{C}^{-1}$ into blocks after its first $g$ rows:

$$\mathbf{C}^{-1} = \left[\begin{array}{c} \mathbf{Z} \\ \hline \mathbf{W} \end{array}\right].$$

Write the relation $\mathbf{I} = \mathbf{C}^{-1}\mathbf{C}$ in block matrix form:

$$\begin{bmatrix} \mathbf{I}_g & \mathbf{O} \\ \mathbf{O} & \mathbf{I}_{n-g} \end{bmatrix} = \begin{bmatrix} \mathbf{Z} \\ \mathbf{W} \end{bmatrix} \begin{bmatrix} \mathbf{X} & \mathbf{Y} \end{bmatrix} = \begin{bmatrix} \mathbf{ZX} & \mathbf{ZY} \\ \mathbf{WX} & \mathbf{WY} \end{bmatrix}.$$

From this it can be read that $\mathbf{WX} = \mathbf{O}$, $\mathbf{ZY} = \mathbf{O}$, $\mathbf{ZX} = \mathbf{I}_g$, $\mathbf{WY} = \mathbf{I}_{n-g}$. Using these we get that

$$\mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \begin{bmatrix} \mathbf{Z} \\ \mathbf{W} \end{bmatrix} \mathbf{A} \begin{bmatrix} \mathbf{X} & \mathbf{Y} \end{bmatrix} = \begin{bmatrix} \mathbf{ZAX} & \mathbf{ZAY} \\ \mathbf{WAX} & \mathbf{WAY} \end{bmatrix} = \begin{bmatrix} \mu\mathbf{I}_g & \mathbf{ZAY} \\ \mathbf{O} & \mathbf{WAY} \end{bmatrix},$$

because $\mathbf{ZAX} = \mathbf{Z}\mu\mathbf{X} = \mu\mathbf{ZX} = \mu\mathbf{I}_g$, and $\mathbf{WAX} = \mu\mathbf{WX} = \mathbf{O}$. The characteristic polynomial of the matrix obtained this way is

$$\begin{vmatrix} \mu\mathbf{I}_g - \lambda\mathbf{I}_g & \mathbf{ZAY} \\ \mathbf{O} & \mathbf{WAY} - \lambda\mathbf{I}_{n-g} \end{vmatrix},$$

which according to Theorem 6.32 is $(\mu - \lambda)^g \det(\mathbf{WAY} - \lambda\mathbf{I}_{n-g})$. And this means that $\mu$ is a root of algebraic multiplicity at least $g$ of the characteristic polynomial of $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ and thus of $\mathbf{A}$. $\square$

**Theorem 8.34 (Diagonalizability and geometric multiplicity).** *An $n$-th order square matrix is diagonalizable if and only if the sum of the geometric multiplicities corresponding to its eigenvalues is $n$.*

Proof. $(\Rightarrow)$ If the matrix is diagonalizable, then the number of elements of the basis consisting of its eigenvectors is exactly the sum of the geometric multiplicities, since no single eigenvector can be in two eigenspaces.

$(\Leftarrow)$ If the sum of the geometric multiplicities is $n$, then by choosing a basis from each eigenspace, and taking their union, we obtain an independent system of vectors consisting of $n$ eigenvectors (see the remarks after Theorem 8.30). Thus, the matrix is diagonalizable. $\square$

> *▶ The theorem can also be stated for linear mappings: the linear mapping $A : \mathbb{F}^n \to \mathbb{F}^n$ is diagonalizable if and only if the sum of the dimensions of its eigenspaces is $n$.*

**Example 8.35 (Diagonalization of a linear transformation).** *For the following linear mappings, let us find – relying purely on our geometric intuition – a basis in which their matrix is diagonal. Let us use the results from Example 8.22.*

a) *reflection of vectors of the plane across a line (or reflection of its points across a line passing through the origin);*

b) *orthogonal projection of vectors of the plane onto a line (or orthogonal projection of its points onto a line passing through the origin);*

c) *rotation of vectors of the space around a line by an angle different from an integer multiple of $\pi$;*

d) *orthogonal projection of vectors of the space onto a plane;*

e) *reflection of vectors of the space across a plane.*

Solution. In Example 8.22 we determined the eigenspaces of these mappings. We use these in what follows.

a) Let a direction vector of the line – across which we reflect – be $\mathbf{a}$, and a nonzero vector perpendicular to it be $\mathbf{b}$. Then $T\mathbf{a} = \mathbf{a}$ and $T\mathbf{b} = -\mathbf{b}$, where $T$ is the reflecting linear mapping. Its matrix in the basis $\{\mathbf{a}, \mathbf{b}\}$ is

$$\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}.$$

b) Let a direction vector of the line – onto which we project – be $\mathbf{a}$, and a nonzero vector perpendicular to it be $\mathbf{b}$. Then $P\mathbf{a} = \mathbf{a}$ and $P\mathbf{b} = \mathbf{0}$, where $P$ is the projecting linear mapping. Its matrix in the basis $\{\mathbf{a}, \mathbf{b}\}$ is

$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}.$$

c) This mapping has no real diagonal matrix, because it has only one real eigenspace, and that is only 1-dimensional: this is the subspace spanned by the direction vector of the axis. The plane perpendicular to the axis of rotation is not an eigenspace, but the rotation maps it to itself (such a subspace is called an *invariant subspace*), so with its basis we can get a "nearly diagonal" form. If a direction vector of the axis of rotation is $\mathbf{a}$, an orthonormal basis of the plane perpendicular to it is $\{\mathbf{b}, \mathbf{c}\}$, where the rotated version of vector $\mathbf{b}$ by $\pi/2$ radians is exactly $\mathbf{c}$, then the matrix of the rotating mapping $F$ in the basis $\{\mathbf{a}, \mathbf{b}, \mathbf{c}\}$ is

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix},$$

since $F\mathbf{a} = \mathbf{a}$, $F\mathbf{b} = \cos\alpha\,\mathbf{b} + \sin\alpha\,\mathbf{c}$, $F\mathbf{c} = -\sin\alpha\,\mathbf{b} + \cos\alpha\,\mathbf{c}$.

d) The plane onto which we project corresponds to the eigenvalue 1. If we choose a basis $\{\mathbf{a}, \mathbf{b}\}$ in this plane, and $\mathbf{c}$ is a nonzero vector perpendicular to the plane, then $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$, $T\mathbf{c} = \mathbf{0}$, so the matrix of $T$ is

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}.$$

e) The plane across which we reflect corresponds to the eigenvalue 1. If we choose a basis $\{\mathbf{a}, \mathbf{b}\}$ in this plane, and $\mathbf{c}$ is a nonzero vector perpendicular to the plane, then $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$, $T\mathbf{c} = -\mathbf{c}$, so the matrix of $T$ is

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{bmatrix}. \qquad \square$$

### Spectral decomposition of diagonalizable matrices

The form $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$ of a diagonalizable matrix $\mathbf{A}$ provides a useful decomposition of the matrix, the so-called spectral decomposition.

Let the spectrum of $\mathbf{A}$ be $\{\lambda_1, \lambda_2, \dots, \lambda_k\}$. Decompose the matrix $\boldsymbol{\Lambda}$ into a block diagonal form such that the identical eigenvalues end up in one block, and then decompose the matrices $\mathbf{C}$ and $\mathbf{C}^{-1}$ into blocks accordingly as follows:

$$\boldsymbol{\Lambda} = \begin{bmatrix} \lambda_1\mathbf{I} & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \lambda_2\mathbf{I} & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \lambda_k\mathbf{I} \end{bmatrix}, \ \mathbf{C} = \begin{bmatrix} \mathbf{X}_1 & \mathbf{X}_2 & \dots & \mathbf{X}_k \end{bmatrix}, \ \mathbf{C}^{-1} = \begin{bmatrix} \mathbf{Y}_1^{\mathsf{T}} \\ \mathbf{Y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{Y}_k^{\mathsf{T}} \end{bmatrix}.$$

Write down the decomposition $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$ using these matrices, then expand the block operations:

$$\begin{aligned} \mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} &= \begin{bmatrix} \mathbf{X}_1 & \mathbf{X}_2 & \dots & \mathbf{X}_k \end{bmatrix} \begin{bmatrix} \lambda_1\mathbf{I} & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \lambda_2\mathbf{I} & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \lambda_k\mathbf{I} \end{bmatrix} \begin{bmatrix} \mathbf{Y}_1^{\mathsf{T}} \\ \mathbf{Y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{Y}_k^{\mathsf{T}} \end{bmatrix} \\ &= \lambda_1\mathbf{X}_1\mathbf{Y}_1^{\mathsf{T}} + \lambda_2\mathbf{X}_2\mathbf{Y}_2^{\mathsf{T}} + \dots + \lambda_k\mathbf{X}_k\mathbf{Y}_k^{\mathsf{T}} \\ &= \lambda_1\mathbf{P}_1 + \lambda_2\mathbf{P}_2 + \dots + \lambda_k\mathbf{P}_k, \end{aligned}$$

where $\mathbf{P}_i = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}$ is the matrix corresponding to the eigenvalue $\lambda_i$, about which we will show the following:

**Proposition 8.36 (Spectral decomposition of diagonalizable matrices).** *Every diagonalizable matrix $\mathbf{A}$ with spectrum $\{\lambda_1, \lambda_2, \dots, \lambda_k\}$ can be written in the form*

$$\mathbf{A} = \lambda_1\mathbf{P}_1 + \lambda_2\mathbf{P}_2 + \dots + \lambda_k\mathbf{P}_k$$

*where*

a) *$\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_k = \mathbf{I}$,*

b) *$\mathbf{P}_i\mathbf{P}_j = \mathbf{O}$, if $i \ne j$,*

c) *$\mathbf{P}_i$ is the projection onto the eigenspace $\mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$ along the subspace $\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$.*

> *▶ In fact, more is true, namely it can be shown that the above three conditions are necessary and sufficient conditions for $\mathbf{A}$ to be diagonalizable. This theorem is also called the spectral theorem of diagonalizable matrices.*

Proof. We show that the decomposition constructed above satisfies the conditions.

a) Treating the equality $\mathbf{C}\mathbf{C}^{-1} = \mathbf{I}$ as block matrices and utilizing the equalities $\mathbf{P}_i = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}$, we get that $\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_k = \mathbf{I}$.

b) However, the block matrix form of the equality $\mathbf{C}^{-1}\mathbf{C} = \mathbf{I}$ leads to the equalities $\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i = \mathbf{I}$, and $\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_j = \mathbf{O}$ $(i \ne j)$, from which $\mathbf{P}_i\mathbf{P}_j = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_j\mathbf{Y}_j^{\mathsf{T}} = \mathbf{O}$.

c) From the preceding it follows that $\mathbf{P}_i^2 = \mathbf{P}_i$, because $\mathbf{P}_i^2 = \mathbf{X}_i(\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i)\mathbf{Y}_i^{\mathsf{T}} = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}} = \mathbf{P}_i$. According to this, therefore, $\mathbf{P}_i$ is a projection. We still need to show that $\mathcal{O}(\mathbf{P}_i) = \mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$. For this we utilize that for any matrices $\mathbf{X}$, $\mathbf{Y}$, $\mathcal{O}(\mathbf{XY}) \subseteq \mathcal{O}(\mathbf{X})$.

$$\mathcal{O}(\mathbf{P}_i) = \mathcal{O}(\mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}) \subseteq \mathcal{O}(\mathbf{X}_i) = \mathcal{O}(\mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i) = \mathcal{O}(\mathbf{P}_i\mathbf{X}_i) \subseteq \mathcal{O}(\mathbf{P}_i).$$

Thus, equality holds everywhere, and $\mathcal{O}(\mathbf{P}_i) = \mathcal{O}(\mathbf{X}_i) = \mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$, since $\mathcal{O}(\mathbf{X}_i)$ is the eigenspace corresponding to $\lambda_i$. Finally, we show that the null space of the projection is $\mathcal{N}(\mathbf{P}_i) = \mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$. Utilizing what was proved above we get that

$$\mathbf{P}_i(\mathbf{A} - \lambda_i\mathbf{I}) = \mathbf{P}_i\left(\sum_{j=1}^{k} \lambda_j\mathbf{P}_j - \lambda_i\sum_{j=1}^{k}\mathbf{P}_j\right) = \sum_{j=1}^{k}(\lambda_j - \lambda_i)\mathbf{P}_i\mathbf{P}_j = \mathbf{O}.$$

According to this, $\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I}) \subseteq \mathcal{N}(\mathbf{P}_i)$. On the other hand, $\mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I}) = \mathcal{O}(\mathbf{P}_i)$, thus due to the dimension theorem $\dim\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I}) = \dim\mathcal{N}(\mathbf{P}_i)$, which proves that $\mathcal{N}(\mathbf{P}_i) = \mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$. $\square$

**Example 8.37 (Spectral decomposition).** *Determine the spectral decomposition of the matrix*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*featured in Examples 8.12, 8.26, and 8.27.*

Solution. For this decomposition, we can use the dyadic form of the eigendecomposition already calculated in Example 8.27 by combining the dyads corresponding to the same eigenvalue, but factoring out the eigenvalue:

$$\begin{aligned} \mathbf{A} &= 0\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \end{bmatrix} + 2\begin{bmatrix} \tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 0 \end{bmatrix} + 2\begin{bmatrix} \tfrac{1}{2} \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \\ &= 0\begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} + 2\begin{bmatrix} 0 & \tfrac{1}{2} & \tfrac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}. \end{aligned}$$

Thus

$$\mathbf{P}_1 = \begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \qquad \mathbf{P}_2 = \begin{bmatrix} 0 & \tfrac{1}{2} & \tfrac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

$\mathbf{P}_1 + \mathbf{P}_2 = \mathbf{I}$, $\mathbf{P}_1\mathbf{P}_2 = \mathbf{O}$, these two matrices are indeed projection matrices, since $\mathbf{P}_1^2 = \mathbf{P}_1$, $\mathbf{P}_2^2 = \mathbf{P}_2$, and they visibly project onto the eigenspaces (see 8.12). $\square$

### Direct sum of eigenspaces

We can summarize our results so far by saying that an $n$-th order real square matrix is diagonalizable if and only if every non-zero vector of $\mathbb{R}^n$ uniquely decomposes into a sum of eigenvectors.

We have decomposed the space $\mathbb{R}^n$ multiple times into the direct sum of two subspaces. Now we generalize the concept of direct sum.

**Definition 8.38 (Direct sum of subspaces).** *Let $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ be subspaces of the vector space $\mathcal{V}$. We say that the space $\mathcal{V}$ is the direct sum of the subspaces $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ – denoted by $\mathcal{V} = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \dots \oplus \mathcal{V}_k$ –, if every vector of $\mathcal{V}$ uniquely decomposes into the sum of a vector from $\mathcal{V}_1$, a vector from $\mathcal{V}_2$, ... and a vector from $\mathcal{V}_k$.*

Theorem 7.41, stated and proved for the direct sum of two subspaces, can be naturally extended to the sum of multiple subspaces.

**Theorem 8.39 (Properties of direct sum).** *Let $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ be subspaces of the $n$-dimensional vector space $\mathcal{V}$. The following statements are equivalent:*

a) *$\mathcal{V} = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \dots \oplus \mathcal{V}_k$,*

b) *the union of a basis of each of the subspaces $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ gives a basis of $\mathcal{V}$,*

c) *The intersection of each subspace with the sum of the others consists only of the zero vector, and the sum of the subspaces is the entire space, that is,*

&nbsp;&nbsp;&nbsp;&nbsp;1. *$\mathcal{V}_i \cap \left(\sum_{j \ne i} \mathcal{V}_j\right) = \{\mathbf{0}\}$, and*

&nbsp;&nbsp;&nbsp;&nbsp;2. *$\mathcal{V} = \mathcal{V}_1 + \mathcal{V}_2 + \dots + \mathcal{V}_k$.*

> *▶ Let the 1-dimensional subspaces generated by the standard basis vectors of the space $\mathbb{R}^3$ be $\mathcal{V}_1 = \operatorname{span}(\mathbf{i})$, $\mathcal{V}_2 = \operatorname{span}(\mathbf{j})$ and $\mathcal{V}_3 = \operatorname{span}(\mathbf{k})$. Then $\mathbb{R}^3 = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \mathcal{V}_3$.*

> *▶ In point c) of the theorem, it is not enough to stipulate that $\mathcal{V}_i \cap \mathcal{V}_j = \{\mathbf{0}\}$ for any $i \ne j$! For example, let $\mathbf{a}$ and $\mathbf{b}$ be two independent vectors in $\mathbb{R}^2$, and let $\mathcal{V}_1 = \operatorname{span}(\mathbf{a})$, $\mathcal{V}_2 = \operatorname{span}(\mathbf{b})$ and $\mathcal{V}_3 = \operatorname{span}(\mathbf{a} + \mathbf{b})$. Then the pairwise intersections of these three subspaces consist only of the zero vector, but $\mathbb{R}^2 \ne \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \mathcal{V}_3$, because the vectors of $\mathbb{R}^2$ decompose into the sum of vectors falling into these three subspaces in multiple different ways. For example, $\mathbf{0} + \mathbf{0} + (\mathbf{a} + \mathbf{b}) = \mathbf{a} + \mathbf{b} + \mathbf{0}$.*

> *▶ The eigenspaces of reflection across a plane in 3-dimensional space are the plane we reflect across (this is the subspace belonging to the eigenvalue $\lambda = 1$) and the line perpendicular to the plane (which belongs to the eigenvalue $\lambda = -1$). $\mathbb{R}^3$ is the direct sum of these two subspaces, since every vector in $\mathbb{R}^3$ decomposes uniquely into the sum of a vector falling into the plane and one perpendicular to it.*

Based on the above, the theorem about the spectral decomposition of diagonalizable matrices leads to a beautiful formulation:

**Theorem 8.40 (Eigenspaces of diagonalizable matrices).** *The matrix $\mathbf{A} \in \mathbb{F}^{n \times n}$ is diagonalizable if and only if $\mathbb{F}^n$ is produced as the direct sum of its eigenspaces.*

Proof. If $\mathbf{A}$ is diagonalizable, then there exists a basis consisting of its eigenvectors, which is the union of the bases of the eigenspaces, so according to point b) of Theorem 8.39, $\mathbb{F}^n$ is produced as the direct sum of its eigenspaces.

If $\mathbb{F}^n$ is produced as the direct sum of the eigenspaces of $\mathbf{A}$, then the sum of the dimensions of the eigenspaces is $n$, that is, the sum of the geometric multiplicities is $n$, thus the matrix $\mathbf{A}$ is diagonalizable. $\square$

> *▶ The theorem can be stated not only for matrices but also for linear mappings: a linear mapping $L : \mathbb{F}^n \to \mathbb{F}^n$ is diagonalizable if and only if $\mathbb{F}^n$ decomposes into the direct sum of the eigenspaces of $L$.*

> *▶ Illustrative examples in 3-dimensional space are reflection across a plane, projection onto a plane, reflection across a line, and projection onto a line. In all these examples, $\mathbb{R}^3$ decomposes into the direct sum of a 2-dimensional and a 1-dimensional subspace.*

> *▶ A rotation in real 3-dimensional space around a line by an angle $\alpha$ ($\alpha \ne k\pi$) is not diagonalizable, although we can see that the axis of rotation and the plane that remains in place during the rotation are two subspaces whose direct sum is the entire space.*

### Exercises

## Calculating the eigenvalues

*Calculating the eigenvalues from the characteristic polynomial is a highly computationally intensive method. The algorithms used to estimate and approximate eigenvalues – which mostly use iterative techniques – are much more efficient. Moreover, the principles used in these are important not only from the perspective of numerical computations.*

### Gershgorin circles

With very simple calculations from the elements of a matrix, estimates can be given for the eigenvalues. The Gershgorin circles of the complex plane, for example, contain all the eigenvalues.

> *These circles bear the name of the Russian mathematician Semyon Aranovich Gershgorin, which, due to transliteration from Cyrillic letters, occurs in various forms, such as Gershgorin, Gerschgorin, Geršgorin.*

By the Gershgorin circles of the $n \times n$ real or complex matrix $\mathbf{A}$, we mean the circles $G_i^{\text{row}}$ with center $a_{ii}$ and radius $r_i^{\text{row}}$, and $G_i^{\text{col}}$ with radius $r_i^{\text{col}}$ ($i = 1, 2, \dots, n$), where

$$r_i^{\text{row}} = \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}|, \qquad r_i^{\text{col}} = \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ji}|. \tag{8.14}$$

In other words, e.g., the center of the circle $G_i^{\text{row}}$ is $a_{ii}$, its radius is the sum of the absolute values of the off-diagonal elements in the $i$-th row of the matrix $\mathbf{A}$, while the radius of $G_i^{\text{col}}$ is the sum of the absolute values of the off-diagonal elements of the $i$-th column.

**Example 8.41 (Gershgorin circles).** *Draw the Gershgorin circles of the matrix*

$$\mathbf{A} = \begin{bmatrix} 4 & -4 & 0 \\ 2 & 0 & 0 \\ 0 & 1 & 8 \end{bmatrix}$$

*!*

The solution can be seen in Figure 8.3.

| circle | center | radius |
|---|---|---|
| $G_1^{\text{row}}$ | $a_{11} = 4$ | $r_1^{\text{row}} = \vert -4 \vert = 4$ |
| $G_2^{\text{row}}$ | $a_{22} = 0$ | $r_2^{\text{row}} = 2$ |
| $G_3^{\text{row}}$ | $a_{33} = 8$ | $r_3^{\text{row}} = 1$ |
| $G_1^{\text{col}}$ | $a_{11} = 4$ | $r_1^{\text{col}} = 2$ |
| $G_2^{\text{col}}$ | $a_{22} = 0$ | $r_2^{\text{col}} = \vert -4 \vert + \vert 1 \vert = 5$ |
| $G_3^{\text{col}}$ | $a_{33} = 8$ | $r_3^{\text{col}} = 0$ |

*Figure 8.3. The Gershgorin circles of matrix $\mathbf{A}$ (top: the circles $G_1^{\text{row}}, G_2^{\text{row}}, G_3^{\text{row}}$ according to row sums, bottom: the circles $G_1^{\text{col}}, G_2^{\text{col}}, G_3^{\text{col}}$ according to column sums).*

**Theorem 8.42 (Properties of Gershgorin circles).** *Let $\mathbf{A}$ be a real or complex $n \times n$ matrix. Then the following are true:*

a) *Every eigenvalue is contained in the union of the circles $G_i^{\text{row}}$.*

b) *Every eigenvalue is contained in the union of the circles $G_i^{\text{col}}$.*

c) *Every eigenvalue is contained in the intersection of the previous two sets.*

d) *If a $k$-element subset of the circles $G_i^{\text{row}}$ is disjoint from each of the remaining $n - k$ circles, then their union contains exactly $k$ eigenvalues, counting multiplicities.*

Proof. Let $\sigma(\mathbf{A})$ denote the spectrum of the matrix $\mathbf{A}$!

a) According to the statement, $\sigma(\mathbf{A}) \subseteq \bigcup_i G_i^{\text{row}}$. Divide one of the eigenvectors belonging to the eigenvalue $\lambda$ by its coordinate with the largest absolute value. Let this vector be denoted by $\mathbf{x}$, and let $x_i = 1$, so $|x_j| \le 1$ ($j = 1, 2, \dots, n$). Since $\lambda = \lambda x_i = [\lambda\mathbf{x}]_i = [\mathbf{Ax}]_i = \sum_j a_{ij}x_j$, thus $\lambda - a_{ii} = \sum_{j \ne i} a_{ij}x_j$, therefore

$$|\lambda - a_{ii}| = \left|\sum_{\substack{j=1 \\ j \ne i}}^{n} a_{ij}x_j\right| \le \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}||x_j| \le \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}| = r_i^{\text{row}}.$$

b) Since the eigenvalues of $\mathbf{A}$ and $\mathbf{A}^{\mathsf{T}}$ are the same, these same calculations can be repeated with columns instead of rows.

c) The eigenvalues are in each of the sets given in the previous two points, thus they are also in their intersection.

d) Let $\mathbf{B}(r)$ be the matrix whose elements are $b_{ii} = a_{ii}$ and $b_{ij} = ra_{ij}$, if $i \ne j$. Expressed with matrix operations

$$\mathbf{B}(r) = r\mathbf{A} + (1 - r)\operatorname{diag}(a_{11}, \dots, a_{nn}).$$

Accordingly, $\mathbf{B}(0) = \operatorname{diag}(a_{11}, \dots, a_{nn})$, $\mathbf{B}(1) = \mathbf{A}$. Let $r$ vary continuously from 0 to 1. Meanwhile, the Gershgorin circles of $\mathbf{B}(r)$ grow from 0-radius to the Gershgorin circles of $\mathbf{A}$, while their centers do not change. Since the eigenvalues are continuous functions of the matrix elements, the number of eigenvalues covered by the $k$ circles that overlap with each other but remain disjoint from the rest remains $k$. $\square$

> *▶ It is not true that there is at least one eigenvalue in each Gershgorin circle. For example, the eigenvalues of the matrix $\mathbf{A} = \begin{bmatrix} 2 & -2 \\ 1 & 0 \end{bmatrix}$ are $1 + \mathrm{i}$ and $1 - \mathrm{i}$. These do not fall into either the Gershgorin circle with center 0 and radius 1 or the one with center 2 and radius 1 (see Figure 8.4 a), b)).*

> *▶ In accordance with the previous remark, one cannot search for eigenvalues by choosing the smaller of the row and column sums for each diagonal element. Correctly, one must take the intersection of the sets constructed in points a) and b) of the theorem, which, for example, in our case is shown in Figure 8.4 c).*

*Figure 8.4. The eigenvalues of matrix $\mathbf{A}$ are contained in a) the set according to row sums, b) the set according to column sums, c) the intersection of the two sets.*

**Example 8.43 (Using Gershgorin circles).** *Show using Gershgorin circles that every eigenvalue of the matrix*

$$\mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 1 \\ 2 & 1 & 9 \end{bmatrix}$$

*is real.*

Solution. Since the complex roots of a real matrix occur in conjugate pairs, if a Gershgorin circle is disjoint from the rest, it can only contain one real eigenvalue. The Gershgorin circles of matrix $\mathbf{B}$ according to rows show that there is a real eigenvalue in the circle with center 1 and radius 1. Since the other two circles intersect each other, the other two eigenvalues could still be non-real. However, the Gershgorin circle according to columns with center 9 and radius 1 guarantees another real eigenvalue, so the third one is also necessarily real. This is also shown by the intersection of the sets according to rows and columns. The eigenvalues fall into the intervals $[0, 2]$, $[3, 7]$ and $[8, 10]$ (see Figure 8.5). $\square$

*Figure 8.5. The Gershgorin circles of matrix $\mathbf{B}$ according to row sums and column sums, and their intersection. The latter shows that $\mathbf{B}$ has three real eigenvalues.*

**Proposition 8.44 (Invertibility of a strictly diagonally dominant matrix).** *Any real or complex matrix that is strictly diagonally dominant by rows is invertible. The same is true for matrices strictly diagonally dominant by columns.*

Proof. According to Definition 2.55, the matrix $\mathbf{A}$ is strictly diagonally dominant by rows if for any of its diagonal elements $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$. This exactly means that the center of every Gershgorin circle of $\mathbf{A}$ is further from the origin than its radius, that is, the number 0 is not in any of the Gershgorin circles, so 0 is not an eigenvalue, thus $\mathbf{A}$ is invertible. $\square$

### Power iteration

The eigenvalues are the roots of the characteristic polynomial, however, there is no solution formula for polynomials of degree higher than four, so in principle there cannot exist a method that can always calculate the eigenvalues exactly. However, efficient algorithms exist for the arbitrarily accurate approximation of eigenvalues. The most fundamental of these is power iteration.

An eigenvalue of a square matrix is called *strictly dominant* if it is of multiplicity one and is greater in absolute value than all the others. The corresponding eigenvector and eigenspace are called the *strictly dominant eigenvector* and *eigenspace*, and the pair formed by them is called the *strictly dominant eigenpair*.

The *power iteration* gives the strictly dominant eigenpair of a square matrix.

Suppose that $\lambda_1$ is a strictly dominant eigenvalue of the matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$. Index all its eigenvalues so that the relationship

$$|\lambda_1| > |\lambda_2| \geqslant \dots \geqslant |\lambda_m|$$

holds. Let $\mathbf{v}_i$ be an eigenvector belonging to $\lambda_i$. It is clear that $\lambda_1$ is real, otherwise $\bar\lambda_1$ would be an eigenvalue different from it but with the same absolute value.

Let $\mathbf{x} \in \mathbb{R}^n$ be a vector that can be expressed as a linear combination of the eigenvectors. If $\mathbf{A}$ is diagonalizable, then every vector is such. So let $\mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_m\mathbf{v}_m$. Then for an arbitrary nonnegative integer $k$

$$\begin{aligned} \mathbf{A}^k\mathbf{x} &= c_1\mathbf{A}^k\mathbf{v}_1 + c_2\mathbf{A}^k\mathbf{v}_2 + \dots + c_m\mathbf{A}^k\mathbf{v}_m \\ &= c_1\lambda_1^k\mathbf{v}_1 + c_2\lambda_2^k\mathbf{v}_2 + \dots + c_m\lambda_m^k\mathbf{v}_m. \end{aligned}$$

Then after dividing by $\lambda_1^k$, as $k \to \infty$

$$\frac{1}{\lambda_1^k}\mathbf{A}^k\mathbf{x} = c_1\mathbf{v}_1 + c_2\left(\frac{\lambda_2}{\lambda_1}\right)^k\mathbf{v}_2 + \cdots + c_m\left(\frac{\lambda_m}{\lambda_1}\right)^k\mathbf{v}_m \to c_1\mathbf{v}_1,$$

because $(\lambda_i/\lambda_1)^k \to 0$, if $i > 1$. According to this, if $c_1 \neq 0$, then the direction of $\mathbf{A}^k\mathbf{x}$ tends to the direction of the dominant eigenvector. We illustrate this with an example.

**Example 8.45.** *Consider the matrix*

$$\mathbf{A} = \begin{bmatrix} 1.7 & 0.9 \\ 0.9 & -0.7 \end{bmatrix}$$

*! Determine its dominant eigenvalue and eigenspace! Let* $\mathbf{x} = (0,1)$. *Calculate the vectors* $\mathbf{A}^k\mathbf{x}$ *for a few values of $k$ to illustrate their direction tending to the direction of the dominant eigenvector!*

**Solution.** The characteristic polynomial of $\mathbf{A}$ is $\det(\mathbf{A} - x\mathbf{I}) = x^2 - x - 2$, its roots are $\lambda_1 = 2$, $\lambda_2 = -1$, thus the strictly dominant eigenvalue is $\lambda_1 = 2$. The corresponding eigenspace is spanned by the vector $(3,1)$. With a program, we calculated the vectors $\mathbf{A}^k\mathbf{x}$ for the values $k = 0, 1, \dots, 8$:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $\mathbf{A}^k\mathbf{x}$ | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}0.9\\-0.7\end{bmatrix}$ | $\begin{bmatrix}0.9\\1.3\end{bmatrix}$ | $\begin{bmatrix}2.7\\-0.1\end{bmatrix}$ | $\begin{bmatrix}4.5\\2.5\end{bmatrix}$ | $\begin{bmatrix}9.9\\2.3\end{bmatrix}$ | $\begin{bmatrix}18.9\\7.3\end{bmatrix}$ | $\begin{bmatrix}38.7\\11.9\end{bmatrix}$ |

The length of the vectors visibly converges to infinity, but the tending of the subspaces spanned by them to the dominant eigenspace can still be well read from Figure 8.6.

*Figure 8.6. The vectors $\mathbf{A}^k\mathbf{x}$ ($k = 0,1,\dots,5$), their marked directions, and their limit: the eigenspace belonging to the eigenvalue $\lambda = 2$ of matrix $\mathbf{A}$ (colored in red).*

If the absolute value of the dominant eigenvalue were less than 1, then the vector sequence $\mathbf{A}^k\mathbf{x}$ would converge to the zero vector. Therefore, it is worth normalizing this sequence, for example, dividing it by its length. It is even simpler to divide the vector by its coordinate with the largest absolute value. (The vector sequence obtained this way will not necessarily be convergent. It is possible that, for example, we get an alternating divergent sequence at individual coordinate positions. This can be avoided if we always make the sign of a coordinate converging to a non-zero value positive by a possible multiplication by $-1$.) Let $\mathbf{x}_k$ denote the vector obtained after dividing the vector $\mathbf{A}^k\mathbf{x}$ by its largest coordinate, and let $i$ denote the index of this coordinate. Thus $[\mathbf{x}_k]_i = 1$. The table below shows the values of $\mathbf{x}_k$ and $[\mathbf{A}\mathbf{x}_k]_i$ (the latter indicates how many times the coordinate with value 1 changes after multiplication by $\mathbf{A}$):

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $\mathbf{x}_k$ | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}1.000\\-0.778\end{bmatrix}$ | $\begin{bmatrix}0.692\\1.000\end{bmatrix}$ | $\begin{bmatrix}1.000\\-0.037\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.556\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.232\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.386\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.307\end{bmatrix}$ |
| $[\mathbf{A}\mathbf{x}_k]_i$ | | $-0.700$ | $1.000$ | $-0.769$ | $1.667$ | $2.200$ | $1.909$ | $2.047$ |

The vectors $\mathbf{x}_k$ are illustrated in Figure 8.7. The limit of their sequence is the vector $(1, 1/3)$, which is the dominant eigenvector. It is also generally true,

*Figure 8.7. The vectors $\mathbf{x}_k$ and the eigenspace.*

that the elements of the sequence $\mathbf{x}_k$ obtained this way give an estimate of the strictly dominant eigenvector. At the same time, it also results in an estimate for the dominant eigenvalue. Namely, it is easy to prove that if the $i$-th coordinate of $\mathbf{x}_k$ is 1, then the $i$-th coordinate of $\mathbf{A}\mathbf{x}_k$ gives an estimate of $\lambda_1$, more precisely, the limit of this sequence is $\lambda_1$. In this specific example, the bottom row of the above table contains exactly this sequence, which converges to the value $\lambda_1 = 2$. $\square$

**Theorem 8.46 (Power iteration).** *If $\lambda_1$ is the strictly dominant eigenvalue of the matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, then there exists a vector $\mathbf{x}_0$ such that the sequence of subspaces spanned by the vectors $\mathbf{A}^k\mathbf{x}_0$ converges to the dominant eigenspace.*

We proved this theorem above in the special case when $\mathbf{x}_0$ is a linear combination of the eigenvectors. In fact, it is sufficient to stipulate only that the component of the vector $\mathbf{x}_0$ falling in the direction of the dominant eigenvector should not be the zero vector.

## Exercises

### Gershgorin circles

**8.3.** Show that the matrix

$$\mathbf{A} = \begin{bmatrix} 2 & 0 & 5 & 0 \\ 0 & 9 & 0 & 1 \\ -1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 6 \end{bmatrix}$$

has at least two real eigenvalues.

**8.4.** Show that all eigenvalues of the following matrices are real! *a)* $\begin{bmatrix} 9 & 3 & 2 \\ 0 & 4 & 2 \\ 1 & 0 & 1 \end{bmatrix}$ *b)* $\begin{bmatrix} 9 & 0 & 3 & 0 \\ 0 & 4 & 0 & 1 \\ -3 & 0 & -1 & 0 \\ 2 & 1 & 2 & 0 \end{bmatrix}$

### Solutions

**8.2.** Its characteristic polynomial is $\lambda^3 + 3\lambda^2 + 3\lambda + 1$, that is, $\lambda = -1$ is an eigenvalue with an algebraic multiplicity of three. The eigenspace is spanned by the vector $(1,2,5)$, that is, the geometric multiplicity is 1. $1 \neq 3$, so the matrix is not diagonalizable.

**8.3.** There can only be 1 root in the Gershgorin circle with center 9 and radius 1, so it is real. Since it has 4 roots in total and complex roots occur in pairs, there must be another real root.

**8.4.** *a)* Among the Gershgorin circles belonging to the rows, the circle with center 1 and radius 1 is disjoint from the rest, thus there is a real eigenvalue in this circle, among those belonging to the columns, the one with center 9 and radius 1 is disjoint from the rest, thus there is also a real eigenvalue in this circle, and if two eigenvalues are real, then the third is too. Applying to the rows in the matrix in *a)*, and to the columns in *b)*

# 9. Diagonalization in orthonormal basis

Numerous engineering and scientific problems lead to the examination of real symmetric matrices. These are fortunate cases, because then an orthonormal basis consisting of eigenvectors can also be found, and this makes many calculations simple and numerically more stable. The use of symmetric matrices will be demonstrated by the description of quadratic forms.

## Orthogonal and unitary diagonalization

> *Diagonalizing a matrix is equivalent to finding a basis for the corresponding matrix mapping in which its matrix is diagonal. It is especially fortunate if this basis is even orthonormal.*

### Orthogonal diagonalization of real matrices, real spectral theorem

We will show that among real matrices, exactly the symmetric ones are those for which an orthonormal basis can be found in which it takes a diagonal form.

According to Theorem 8.25, the necessary and sufficient condition for diagonalizability is that there exists a number of independent eigenvectors equaling the order of the matrix. If these vectors form an orthonormal system, then the matrix formed by them is an orthogonal matrix.

**Definition 9.1 (Orthogonal diagonalizability).** *The matrix $\mathbf{A}$ is orthogonally diagonalizable if we can find an orthogonal matrix $\mathbf{Q}$ and a diagonal matrix $\boldsymbol{\Lambda}$ such that $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$.*

> An equivalent form to the equality in the definition: $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$.

> It is obvious that if a matrix is orthogonally diagonalizable, then it is symmetric, since if $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$, then

$$\mathbf{A}^{\mathsf{T}} = (\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}})^{\mathsf{T}} = (\mathbf{Q}^{\mathsf{T}})^{\mathsf{T}}\boldsymbol{\Lambda}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}.$$

The main goal of this chapter is to prove the converse of the statement. To this end, we first show that the eigenspaces of a symmetric matrix are not only independent of each other but also orthogonal to each other.

**Theorem 9.2 (Eigenspaces of a symmetric matrix).** *Any two distinct eigenspaces of a symmetric matrix are orthogonal to each other.*

**Proof.** Two distinct eigenspaces belong to two different eigenvalues. We show that any vector of one eigenspace is orthogonal to any vector of the other eigenspace. So let $(\lambda, \mathbf{x})$ and $(\mu, \mathbf{y})$ be two eigenpairs, where $\lambda \neq \mu$ are two different eigenvalues of $\mathbf{A}$. Thus $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ and $\mathbf{A}\mathbf{y} = \mu\mathbf{y}$. From this it follows that

$$\lambda(\mathbf{x}^{\mathsf{T}}\mathbf{y}) = (\lambda\mathbf{x})^{\mathsf{T}}\mathbf{y} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mu\mathbf{y} = \mu(\mathbf{x}^{\mathsf{T}}\mathbf{y}).$$

According to this, $(\lambda - \mu)(\mathbf{x}^{\mathsf{T}}\mathbf{y}) = 0$, but $\lambda - \mu \neq 0$, therefore $\mathbf{x}^{\mathsf{T}}\mathbf{y} = \mathbf{x} \cdot \mathbf{y} = 0$, that is, the two vectors are orthogonal to each other. $\square$

**Theorem 9.3 (Real spectral theorem).** *A real matrix $\mathbf{A}$ is orthogonally diagonalizable if and only if it is symmetric.*

**Proof.** One half of the statement was shown after Definition 9.1. The other half is proven by mathematical induction on the order of the matrix $\mathbf{A}$. In the case $n = 1$, there is nothing to prove, then $\mathbf{A}$ is symmetric and diagonal in form. Assume that the statement is true for all matrices of order at most $n-1$, that is, if it is symmetric, then it is orthogonally similar to a diagonal matrix. Since $\mathbf{A}$ is symmetric, all its eigenvalues are real. Let one of these be $\lambda$, and let one of the corresponding unit-length eigenvectors be $\mathbf{u}_1$. Extend $\mathbf{u}_1$ to an ONB $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ of the entire space. Then the matrix $\mathbf{Q}_0 = [\mathbf{u}_1\ \mathbf{u}_2\ \dots\ \mathbf{u}_n]$ is orthogonal, and

$$\begin{aligned}
\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 &= \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \mathbf{A} \begin{bmatrix} \mathbf{u}_1 & \mathbf{u}_2 & \dots & \mathbf{u}_n \end{bmatrix} = \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \mathbf{A}\mathbf{u}_1 & \mathbf{A}\mathbf{u}_2 & \dots & \mathbf{A}\mathbf{u}_n \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \lambda\mathbf{u}_1 & \mathbf{A}\mathbf{u}_2 & \dots & \mathbf{A}\mathbf{u}_n \end{bmatrix} = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} = \mathbf{B},
\end{aligned} \tag{9.1}$$

because $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ is an ONB, thus $\mathbf{u}_1^{\mathsf{T}}(\lambda\mathbf{u}_1) = \lambda(\mathbf{u}_1^{\mathsf{T}}\mathbf{u}_1) = \lambda$, and in the case $i > 1$ $\mathbf{u}_i^{\mathsf{T}}(\lambda\mathbf{u}_1) = \lambda(\mathbf{u}_i^{\mathsf{T}}\mathbf{u}_1) = 0$. So in the block matrix $\mathbf{B}$, $\mathbf{A}_1$ is an $(n-1) \times (n-1)$ real matrix. On the other hand

$$\mathbf{B}^{\mathsf{T}} = (\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0)^{\mathsf{T}} = \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Q}_0 = \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \mathbf{B},$$

that is $\mathbf{B} = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$ is symmetric, therefore $\mathbf{B} = \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$, and $\mathbf{A}_1$ is also symmetric!

Since $\mathbf{B}$ is similar to $\mathbf{A}$, their eigenvalues coincide, so every eigenvalue of $\mathbf{A}_1$ is also an eigenvalue of $\mathbf{A}$. However, by mathematical induction, there exists an orthogonal matrix $\mathbf{Q}_1$ and a diagonal matrix $\boldsymbol{\Lambda}_1$ for $\mathbf{A}_1$ such that $\mathbf{A}_1 = \mathbf{Q}_1\boldsymbol{\Lambda}_1\mathbf{Q}_1^{\mathsf{T}}$. Then, however, the matrix $\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ is orthogonal, as it is the product of two orthogonal matrices, and makes $\mathbf{A}$ similar to a diagonal matrix:

$$\begin{aligned}
\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} &= \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right)^{\mathsf{T}} \mathbf{A} \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right) = \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}}\mathbf{A}_1\mathbf{Q}_1 \end{bmatrix} = \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \boldsymbol{\Lambda}_1 \end{bmatrix}.
\end{aligned}$$

With this we have proved that the symmetric matrix $\mathbf{A}$ is also orthogonally diagonalizable. $\square$

> The proof of the theorem also gives an idea for the implementation of diagonalization. Determine an eigenvalue $\lambda_1$ of the matrix $\mathbf{A}$, and produce the matrices $\mathbf{Q}_0$ and $\begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$. In the next step, using an eigenvalue $\lambda_2$ from $\mathbf{A}_1$, produce the matrix $\mathbf{Q}_1$, then the matrices $\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ and $\begin{bmatrix} \lambda_1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & \lambda_1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_2 \end{bmatrix}$. Continuing similarly, produce the sequence of matrices $\mathbf{Q}_i$ from the sequence of matrices $\mathbf{A}_i$ of size $(n-i) \times (n-i)$ ($i = 1, 2, \dots, n-2$), and then from those the orthogonal
> $$\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\begin{bmatrix} 1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{Q}_2 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 0 & 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{0} & \mathbf{Q}_3 \end{bmatrix} \cdots$$
> matrix.

> Formula (9.1) in the proof, that is $\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$, can be seen without any calculation, as the matrix on the right side is the form of matrix $\mathbf{A}$ in the basis formed by the columns of $\mathbf{Q}_0$, so its first column contains the image of $\mathbf{u}_1$, but the coordinate form of $\mathbf{u}_1$ in this basis is $(1, 0, \dots, 0)$. Since this is an eigenvector, its image is $(\lambda, 0, \dots, 0)$.

**Example 9.4 (Orthogonal diagonalization of a matrix).** *Diagonalize the following matrix orthogonally!*

$$\begin{bmatrix} 3 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 1 & 3 \end{bmatrix}.$$

*Determine the transition matrix from the standard basis to the basis in which this matrix takes a diagonal form!*

**Solution.** The characteristic polynomial is:

$$\begin{vmatrix} 3-\lambda & 1 & 1 \\ 1 & 3-\lambda & 1 \\ 1 & 1 & 3-\lambda \end{vmatrix} = -\lambda^3 + 9\lambda^2 - 24\lambda + 20,$$

whose roots are 2, 2, and 5. So the diagonal form is $\operatorname{diag}(2,2,5)$. For the transition matrix we will need the eigenvectors. In the case $\lambda = 2$:

$$\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} \implies \begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix},$$

and the solution to the system of equations $x + y + z = 0$ is $(x, y, z) = (-1, 1, 0)s + (-1, 0, 1)t$. A basis of this subspace thus consists of the vectors $(-1, 1, 0)$ and $(-1, 0, 1)$. In the case $\lambda = 5$:

$$\begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix} \implies \begin{bmatrix} 1 & -2 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix},$$

the solution to which system of equations is $(x, y, z) = (1, 1, 1)t$. The vectors from the two different eigenspaces are orthogonal to each other, but the two eigenvectors of the eigenspace belonging to $\lambda = 2$ do not form an orthogonal system, therefore we look for a new basis in the space spanned by them, an orthonormal one. Let the vector $\mathbf{a} = (-1, 1, 0)/\sqrt{2}$ be one of them, then

$$(-1, 0, 1) - \left((-1, 0, 1) \cdot \frac{(-1, 1, 0)}{\sqrt{2}}\right)\frac{(-1, 1, 0)}{\sqrt{2}} = \left(-\frac{1}{2}, -\frac{1}{2}, 1\right).$$

Normalizing this we get the vector $\mathbf{b} = \left(-\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \frac{\sqrt{2}}{\sqrt{3}}\right)$, finally the normalized vector belonging to $\lambda = 5$ is $\mathbf{c} = \frac{1}{\sqrt{3}}(1, 1, 1)$. The transition matrix to the standard basis is therefore the matrix $[\mathbf{a}|\mathbf{b}|\mathbf{c}]$. Its inverse will be the transition matrix from the standard basis, which – being an orthogonal matrix – is its transpose, that is

$$\begin{bmatrix} -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{6}} & \frac{\sqrt{2}}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \end{bmatrix}.$$

$\square$

### Schur decomposition[^p399_1]

Finding an orthonormal basis in which a matrix has a simpler form is important even if that form is not diagonal. Such is, for example, the upper triangular matrix form.

A slight modification of the proof of the real spectral theorem leads to another useful theorem. Namely, in the matrix $\mathbf{B}$ constructed there, we eliminated the subdiagonal elements of the first column of $\mathbf{A}$. Repeating this step, it can be achieved that we bring the matrix to an upper triangular form.

**Theorem 9.5 (Schur decomposition).**
*a) Every real square matrix $\mathbf{A}$, all of whose eigenvalues are real, is orthogonally similar to an upper triangular matrix $\mathbf{T}$, that is, there exists an orthogonal matrix $\mathbf{Q}$ such that $\mathbf{A} = \mathbf{Q}\mathbf{T}\mathbf{Q}^{\mathsf{T}}$.*
*b) Every complex square matrix $\mathbf{A}$ is unitarily similar to an upper triangular matrix $\mathbf{T}$, that is, there exists a unitary matrix $\mathbf{U}$ such that $\mathbf{A} = \mathbf{U}\mathbf{T}\mathbf{U}^{\mathsf{H}}$.*

> The only difference between the parts of the theorem concerning real and complex matrices is that for real matrices we required the eigenvalues to be real, while for complex ones we made no stipulation – obviously because the eigenvalues of a complex matrix are always complex.

**Proof.** We describe the proof only for the real case, the discussion of the complex case is essentially identical. We prove by mathematical induction. For $n = 1$ the statement is obviously true. According to the conditions, every eigenvalue of $\mathbf{A}$ is real, let one of these be $\lambda$, and one of the corresponding unit eigenvectors be $\mathbf{u}_1$. From here we repeat the proof of Theorem 9.3 all the way up to the production of the matrix (9.1), that is, we get that completing the vector $\mathbf{u}_1$ to an ONB $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ of the entire space, with the orthogonal matrix $\mathbf{Q}_0 = [\mathbf{u}_1\ \mathbf{u}_2\ \dots\ \mathbf{u}_n]$

$$\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} = \mathbf{B}.$$

$\mathbf{B}$ is similar to $\mathbf{A}$, therefore their eigenvalues are the same, so every eigenvalue of $\mathbf{A}_1$ is also an eigenvalue of $\mathbf{A}$. However, by mathematical induction, there exists an orthogonal matrix $\mathbf{Q}_1$ and an upper triangular matrix $\mathbf{T}_1$ for $\mathbf{A}_1$ such that $\mathbf{A}_1 = \mathbf{Q}_1\mathbf{T}_1\mathbf{Q}_1^{\mathsf{T}}$. The matrix $\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ is orthogonal, as it is the product of two orthogonal matrices, and it makes $\mathbf{A}$ similar to an upper triangular matrix:

$$\begin{aligned}
\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} &= \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right)^{\mathsf{T}} \mathbf{A} \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right) = \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}}\mathbf{Q}_1 \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}}\mathbf{A}_1\mathbf{Q}_1 \end{bmatrix} = \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}}\mathbf{Q}_1 \\ \mathbf{0} & \mathbf{T}_1 \end{bmatrix}.
\end{aligned}$$

$\square$

[^p399_1]: Schur decomposition

**Example 9.6 (Schur decomposition).** *Bring to upper triangular form with an orthogonal similarity transformation the matrix*

$$\mathbf{A} = \begin{bmatrix} 7 & 6 & -3 \\ 3 & 17 & -6 \\ -12 & 14 & 4 \end{bmatrix}$$

*!*

**Solution.** The characteristic polynomial is $-x^3 + 28x^2 - 245x + 686 = (7-x)^2(14-x)$. 7 is a double eigenvalue, its eigenspace is 1-dimensional, an eigenvector is $\mathbf{x}_1 = (2, 3, 6)$, an eigenvector belonging to 14 is $\mathbf{x}_2 = (9, 17, 13)$, it cannot be diagonalized, since the sum of the geometric multiplicities (2) is less than the sum of the algebraic ones (3).

We choose an orthonormal basis for the first eigenvector, from that we form the matrices $\mathbf{Q}_0$ and $\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0$:

$$\mathbf{Q}_0 = [\mathbf{x}_1|\mathbf{u}_2|\mathbf{u}_3] = \frac{1}{7}\begin{bmatrix} 2 & -6 & 3 \\ 3 & -2 & -6 \\ 6 & 3 & 2 \end{bmatrix}, \quad \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \left[\begin{array}{c|cc} 7 & 0 & -21 \\ \hline 0 & 14 & 0 \\ 0 & 7 & 7 \end{array}\right]$$

so

$$\mathbf{A}_1 = \begin{bmatrix} 14 & 0 \\ 7 & 7 \end{bmatrix}.$$

The eigenvector belonging to the eigenvalue 7 is $(0, 1)$, orthogonal to it is $(1, 0)$. Thus

$$\mathbf{Q}_1 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad \left[\begin{array}{c|c} 1 & 0 \\ \hline 0 & \mathbf{Q}_1 \end{array}\right] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}.$$

From here

$$\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & 0 \\ 0 & \mathbf{Q}_1 \end{bmatrix} = \frac{1}{7}\begin{bmatrix} 2 & 3 & -6 \\ 3 & -6 & -2 \\ 6 & 2 & 3 \end{bmatrix}, \text{ from which}$$

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \begin{bmatrix} 7 & -21 & 0 \\ 0 & 7 & 7 \\ 0 & 0 & 14 \end{bmatrix}$$

$\square$

> An orthogonal matrix with rational elements can be found for the matrix of this example; we provided this to make the calculations easier to follow. Searching for such a matrix is not part of the example, since in practice one rarely encounters such a special case.

The Schur decomposition can be used for real matrices even if they have complex eigenvalues, but in this case we can only guarantee that the matrix is similar to one whose elements below the subdiagonal are all 0.

**Proposition 9.7 (Complex eigenvalue of a real matrix).** *Let $\mathbf{A} \in \mathbb{R}^{n \times n}$. If $(\lambda, \mathbf{x})$ is an eigenpair, where $\lambda = a + \mathrm{i}b$, $b \neq 0$, $\mathbf{x} = \mathbf{u} + \mathrm{i}\mathbf{v}$, where $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, then*
*a) $(\bar{\lambda}, \bar{\mathbf{x}})$ is also an eigenpair,*
*b) $\mathbf{u}$ and $\mathbf{v}$ are linearly independent,*
*c) $\mathbf{A}$ is similar to a matrix of the form*

$$\begin{bmatrix} a & b & * \\ -b & a & * \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_1 \end{bmatrix}. \tag{9.2}$$

**Proof.** Since the real characteristic polynomial of $\mathbf{A}$ has real coefficients, the conjugate of every complex eigenvalue of it is also one.
*a)* If $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, then $\mathbf{A}\bar{\mathbf{x}} = \bar{\lambda}\bar{\mathbf{x}}$ obviously holds.
*b)* $\mathbf{x}$ and $\bar{\mathbf{x}}$ are linearly independent, otherwise $\mathbf{x}$ would be an eigenvector not only of $\lambda$, but also of the different $\bar{\lambda}$. If $\mathbf{u}$ and $\mathbf{v}$ were not linearly independent, then e.g., in the case $\mathbf{u} = c\mathbf{v}$, it would be $\mathbf{x} = \mathbf{v}(1 + c\mathrm{i})$, $\bar{\mathbf{x}} = \mathbf{v}(1 - c\mathrm{i})$, which contradicts the previous. The equations

$$\begin{aligned}
\mathbf{A}(\mathbf{u} + \mathrm{i}\mathbf{v}) &= (a + \mathrm{i}b)(\mathbf{u} + \mathrm{i}\mathbf{v}) = a\mathbf{u} + b\mathbf{u}\mathrm{i} + a\mathbf{v}\mathrm{i} - b\mathbf{v}, \\
\mathbf{A}(\mathbf{u} - \mathrm{i}\mathbf{v}) &= (a - \mathrm{i}b)(\mathbf{u} - \mathrm{i}\mathbf{v}) = a\mathbf{u} - b\mathbf{u}\mathrm{i} - a\mathbf{v}\mathrm{i} - b\mathbf{v},
\end{aligned}$$

yield that

$$\begin{aligned}
\mathbf{A}\mathbf{u} &= a\mathbf{u} - b\mathbf{v}, \\
\mathbf{A}\mathbf{v} &= b\mathbf{u} + a\mathbf{v},
\end{aligned} \quad \text{that is} \quad \mathbf{A}[\mathbf{u}|\mathbf{v}] = [\mathbf{u}|\mathbf{v}]\begin{bmatrix} a & b \\ -b & a \end{bmatrix}.$$

*c)* Extend the vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ to a basis, let the matrix formed by them be denoted by $\mathbf{C}$. In this basis, the coordinate form of $\mathbf{A}\mathbf{u}$ is $(a, -b, 0, \dots, 0)$, the form of $\mathbf{A}\mathbf{v}$ is $(b, a, 0, \dots, 0)$, that is

$$\mathbf{A} = \mathbf{C}\begin{bmatrix} a & b & * \\ -b & a & * \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_1 \end{bmatrix}\mathbf{C}^{-1}.$$

$\square$

**Theorem 9.8 (Real Schur decomposition).** *Let $\mathbf{A} \in \mathbb{R}^{n \times n}$.*
*a) There exists an invertible matrix $\mathbf{C} \in \mathbb{R}^{n \times n}$, and an upper block triangular matrix*

$$\mathbf{T} = \begin{bmatrix} \boldsymbol{\Lambda}_1 & * & \dots & * \\ 0 & \boldsymbol{\Lambda}_2 & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}, \tag{9.3}$$

*of the form such that $\mathbf{A} = \mathbf{C}\mathbf{T}\mathbf{C}^{-1}$, and where $\boldsymbol{\Lambda}_j$ ($j = 1, \dots, k$) is either a $1 \times 1$ matrix whose only element is a real eigenvalue of $\mathbf{A}$, or a $2 \times 2$ matrix of the form $\begin{bmatrix} a & b \\ -b & a \end{bmatrix}$, where $a \pm b\mathrm{i}$ are two non-real eigenvalues of $\mathbf{A}$.*
*b) There exists an orthogonal matrix $\mathbf{Q} \in \mathbb{R}^{n \times n}$ and an upper block triangular matrix $\mathbf{T}$ such that $\mathbf{A} = \mathbf{Q}\mathbf{T}\mathbf{Q}^{\mathsf{T}}$, and every diagonal element of $\mathbf{T}$ is either a $1 \times 1$ matrix containing a real eigenvalue of $\mathbf{A}$, or a $2 \times 2$ matrix whose two non-real eigenvalues are complex conjugates of each other.*

**Proof.** The first statement can be proven by induction. If $\lambda$ is a real eigenvalue, then following the proof of the Schur decomposition, $\mathbf{A}$ is orthogonally similar to a matrix of the form $\begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$; if $\lambda$ is complex, then it is similar (not necessarily orthogonally) to a matrix of the form (9.2). The repetition of these steps eventually gives the matrix $\mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \mathbf{T}$, which is of the form (9.3).

Consider the QR decomposition $\mathbf{C} = \mathbf{Q}\mathbf{R}$, where $\mathbf{Q}$ is orthogonal and $\mathbf{R}$ is an upper triangular matrix. Thus $\mathbf{R}^{-1}\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q}\mathbf{R} = \mathbf{T}$, that is $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \mathbf{R}\mathbf{T}\mathbf{R}^{-1}$. Partition $\mathbf{R}$ into blocks according to the block sizes of the main diagonal of $\mathbf{T}$, let the blocks on the main diagonal be denoted by $\mathbf{R}_j$, $j = 1, 2, \dots, k$. Then

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \mathbf{R}\begin{bmatrix} \boldsymbol{\Lambda}_1 & * & \dots & * \\ 0 & \boldsymbol{\Lambda}_2 & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}\mathbf{R}^{-1} = \begin{bmatrix} \mathbf{R}_1\boldsymbol{\Lambda}_1\mathbf{R}_1^{-1} & * & \dots & * \\ 0 & \mathbf{R}_2\boldsymbol{\Lambda}_2\mathbf{R}_2^{-1} & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \mathbf{R}_k\boldsymbol{\Lambda}_k\mathbf{R}_k^{-1} \end{bmatrix}.$$

$\boldsymbol{\Lambda}_j \sim \mathbf{R}_j\boldsymbol{\Lambda}_j\mathbf{R}_j^{-1}$, which proves the second statement. $\square$

> It is generally not true that a real matrix is orthogonally similar to a matrix whose main diagonal has $2 \times 2$ blocks of the form $\begin{bmatrix} a & b \\ -b & a \end{bmatrix}$, where $\lambda = a \pm \mathrm{i}b$ is an eigenvalue of $\mathbf{A}$. For this to also hold, the matrix $\mathbf{A}$ must fulfill an additional condition.

### Unitary diagonalization of matrices[^p402_1]

The equivalent of the orthogonal diagonalizability of real matrices among complex matrices is their unitary diagonalizability.

**Definition 9.9 (Unitary diagonalizability).** *The matrix $\mathbf{A}$ is unitarily diagonalizable if we can find a unitary matrix $\mathbf{U}$ and a diagonal matrix $\boldsymbol{\Lambda}$ for which $\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U} = \boldsymbol{\Lambda}$ (or $\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}$).*

> Based on the analogies between symmetric and self-adjoint matrices, we expect self-adjoint matrices to be unitarily diagonalizable. (The first part of the proof of the real spectral theorem, i.e., the proof of the $\Rightarrow$ direction, cannot be transferred from real symmetric matrices to complex self-adjoint matrices, because $\boldsymbol{\Lambda}^{\mathsf{H}} = \boldsymbol{\Lambda}$ is true only for real diagonal matrices.) In reality, a much broader class of matrices will belong to the unitarily diagonalizable ones: these will be the normal matrices.

**Definition 9.10 (Normal matrix).** *We say that the matrix $\mathbf{A} \in \mathbb{C}^{n \times n}$ is normal if $\mathbf{A}^{\mathsf{H}}\mathbf{A} = \mathbf{A}\mathbf{A}^{\mathsf{H}}$, i.e., if it commutes with its own adjoint.*

[^p402_1]: Unitary diagonalization of matrices

> *It is easy to check that all complex self-adjoint, skew-self-adjoint, and unitary matrices, as well as all real symmetric, skew-symmetric, and orthogonal matrices are normal.*

> *There are also normal matrices that do not belong to those listed in the above list. For example, the matrix*

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$$

is normal, because

$$\mathbf{A}^{\mathsf{H}}\mathbf{A} = \mathbf{A}\mathbf{A}^{\mathsf{H}} = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}.$$

> *Normal matrices have many nice properties, to which we will return later; the most important one is stated by the following theorem.*

**Theorem 9.11 (Unitary diagonalizability).** *The matrix $\mathbf{A} \in \mathbb{C}^{n \times n}$ is unitarily diagonalizable if and only if it is normal.*

*Proof.* ($\Rightarrow$) Suppose that $\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}$, i.e., $\mathbf{A}$ is unitarily diagonalizable. Since $\bar{z}z = z\bar{z}$ for any complex number $z$, every complex diagonal matrix is normal, thus $\boldsymbol{\Lambda}^{\mathsf{H}}\boldsymbol{\Lambda} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathsf{H}}$. According to this

$$\begin{aligned}
\mathbf{A}^{\mathsf{H}}\mathbf{A} &= (\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}}(\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}) = \mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}}\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}} \\
&= \mathbf{U}\boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}\mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = (\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})(\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}} = \mathbf{A}\mathbf{A}^{\mathsf{H}}.
\end{aligned}$$

($\Leftarrow$) According to the Schur decomposition, every complex square matrix $\mathbf{A}$ can be written in the form

$$\mathbf{A} = \mathbf{U}\mathbf{T}\mathbf{U}^{\mathsf{H}}$$

where $\mathbf{U}$ is unitary, and $\mathbf{T}$ is an upper triangular matrix. Suppose that $\mathbf{A}$ is normal. Then $\mathbf{T}$ is also normal, because, similar to the derivation above,

$$\begin{aligned}
\mathbf{T}^{\mathsf{H}}\mathbf{T} &= (\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})^{\mathsf{H}}(\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U}) = \mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{U}\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U} = \mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{A}\mathbf{U} \\
&= \mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{A}^{\mathsf{H}}\mathbf{U} = \mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U}\mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{U} = (\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})(\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})^{\mathsf{H}} = \mathbf{T}\mathbf{T}^{\mathsf{H}}.
\end{aligned}$$

The form of the matrix $\mathbf{T}$ is

$$\begin{bmatrix} t_{11} & t_{12} & \dots & t_{1n} \\ 0 & t_{22} & \dots & t_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & t_{nn} \end{bmatrix},$$

therefore $[\mathbf{T}^{\mathsf{H}}\mathbf{T}]_{11} = |t_{11}|^2$, $[\mathbf{T}\mathbf{T}^{\mathsf{H}}]_{11} = |t_{11}|^2 + |t_{12}|^2 + \dots + |t_{1n}|^2$, from which it follows that $t_{12} = \dots = t_{1n} = 0$. Writing down the elements $[\mathbf{T}^{\mathsf{H}}\mathbf{T}]_{22}$ and $[\mathbf{T}\mathbf{T}^{\mathsf{H}}]_{22}$ similarly, we get that $t_{23} = \dots = t_{2n} = 0$, etc. So $\mathbf{T}$ is diagonal. $\square$

### Real normal matrices

Real normal matrices are unitarily diagonalizable, as a consequence of which they are orthogonally block diagonalizable, with blocks of size at most $2 \times 2$.

**Theorem 9.12 (Block diagonalizability of real normal matrices).** *Let $\mathbf{A} \in \mathbb{R}^{n \times n}$. $\mathbf{A}$ is normal if and only if there is an orthogonal matrix $\mathbf{Q} \in \mathbb{R}^{n \times n}$ such that*

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \begin{bmatrix} \boldsymbol{\Lambda}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \boldsymbol{\Lambda}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}, \tag{9.4}$$

*where $\boldsymbol{\Lambda}_j$ ($j = 1, 2, \dots, k$) is either a $1 \times 1$ matrix and its element is an eigenvalue of $\mathbf{A}$, or a $2 \times 2$ real matrix of the form*

$$\begin{bmatrix} a_j & b_j \\ -b_j & a_j \end{bmatrix},$$

*where $a_j \pm b_j \mathrm{i}$ are the two eigenvalues of $\boldsymbol{\Lambda}_j$.*

*Proof.* ($\Leftarrow$) If a matrix is of the form $(9.4)$, then it is normal (we can check it), thus $\mathbf{A}$, which is orthogonally similar to it, is also normal.

($\Rightarrow$) Suppose that $\mathbf{A}$ is real normal. Since it is real, it is orthogonally similar to a block upper triangular matrix whose diagonal blocks are of size $1 \times 1$ or $2 \times 2$. Since it is normal, comparing the two products yields that the elements above the diagonal blocks are all 0, so the matrix is block diagonal.

It is easy to prove that a block diagonal matrix is normal if and only if all its diagonal blocks are normal (see Exercise 9.1). The single element of a $1 \times 1$ real matrix is its eigenvalue. The form of a $2 \times 2$ normal matrix is $\left[\begin{smallmatrix} a & b \\ -b & a \end{smallmatrix}\right] \in \mathbb{R}^2$, where $b \neq 0$ (see Exercise 9.2). This proves the theorem. $\square$

**Corollary 9.13 (Orthogonally block diagonalizable matrices).** *Let $\mathbf{A} \in \mathbb{R}^{n \times n}$.*

*a) $\mathbf{A}$ is symmetric if and only if it is orthogonally similar to a diagonal matrix. The diagonal elements are the eigenvalues of $\mathbf{A}$. Two symmetric matrices are orthogonally similar to each other if and only if their eigenvalues are identical.*

*b) $\mathbf{A}$ is skew-symmetric if and only if it is orthogonally similar to a block diagonal matrix whose diagonal blocks are of the form $[0]$ or $\left[\begin{smallmatrix} 0 & b_j \\ -b_j & 0 \end{smallmatrix}\right]$, where the latter matrix belongs to the purely imaginary eigenvalues $\pm b_j \mathrm{i}$. Two skew-symmetric matrices are orthogonally similar to each other if and only if their eigenvalues are identical.*

*c) $\mathbf{A}$ is orthogonal if and only if it is orthogonally similar to a block diagonal matrix whose diagonal blocks are of the form $[1]$, $[-1]$, or $\left[\begin{smallmatrix} \cos\varphi_j & \sin\varphi_j \\ -\sin\varphi_j & \cos\varphi_j \end{smallmatrix}\right]$. Its eigenvalues are $\pm 1$, $\cos\varphi_j \pm \mathrm{i}\sin\varphi_j$. Two orthogonal matrices are orthogonally similar if and only if their eigenvalues are identical.*

### Exercises

**9.1.** Show that if $\mathbf{A}$ is block diagonal with square matrices on the diagonal, then $\mathbf{A}$ is normal if and only if every diagonal block of it is normal.

**9.2.** Suppose that the matrix $\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right] \in \mathbb{R}^2$ is normal, and its two eigenvalues are not real. Then $c = -b \neq 0$ and $d = a$.

## Quadratic forms

> *Multivariate polynomials containing only quadratic terms can be brought into a simpler form knowing the eigenvalues and eigenvectors of matrices, making them easier to analyze. This topic has countless mathematical applications outside linear algebra and applications outside mathematics as well.*

### Matrix product form of homogeneous quadratic polynomials

A term of a polynomial is *quadratic* if the sum of the degrees of the unknowns in it is 2. For example, in the variables $x$, $y$, and $z$, the following are quadratic terms: $3x^2$, $axy$, $2b^3xz$, $-\pi^2 z^2$. A multivariate polynomial that contains only quadratic terms is called a multivariate *homogeneous quadratic polynomial*. For example, $2x^2 + 4xy - y^2$ is a 2-variable homogeneous quadratic polynomial. By the decomposition $4xy = 2xy + 2yx$, this polynomial can be written in a matrix product form with a symmetric matrix:

$$2x^2 + 2xy + 2yx - y^2 = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} 2 & 2 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}.$$

In general, it is also true that

$$ax^2 + 2bxy + cy^2 = ax^2 + bxy + byx + cy^2 = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} a & b \\ b & c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}.$$

Similarly, three-variable homogeneous quadratic polynomials can also be written in a matrix product form with a symmetric matrix:

$$\begin{aligned}
& ax^2 + 2bxy + 2cxz + dy^2 + 2eyz + fz^2 \\
&= ax^2 + bxy + cxz + byx + dy^2 + eyz + czx + ezy + fz^2 \\
&= \begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} a & b & c \\ b & d & e \\ c & e & f \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}.
\end{aligned}$$

**Example 9.14 (Matrix product form of a quadratic polynomial).** *Write the expression $x_1^2 + 2x_2^2 + 2x_3^2 - 5x_1x_2 - 3x_2x_1 + 5x_1x_3 - x_3x_1$ in matrix product form with a symmetric matrix!*

*Solution.* By first combining the mixed terms and then splitting them into two parts with equal coefficients, we get that

$$\begin{aligned}
& x_1^2 + 2x_2^2 + 2x_3^2 - 8x_1x_2 + 4x_1x_3 \\
&= x_1^2 + 2x_2^2 + 2x_3^2 - 4x_1x_2 - 4x_2x_1 + 2x_1x_3 + 2x_3x_1 \\
&= x_1^2 - 4x_1x_2 + 2x_1x_3 - 4x_2x_1 + 2x_2^2 + 0x_2x_3 + 2x_3x_1 + 0x_3x_2 + 2x_3^2 \\
&= \begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix} \begin{bmatrix} 1 & -4 & 2 \\ -4 & 2 & 0 \\ 2 & 0 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.
\end{aligned}$$

$\square$

Following the above, every real homogeneous quadratic polynomial depending on the coordinates of the vector $\mathbf{x} = (x_1, x_2, \dots, x_n)$ can be brought into the form

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x} \cdot \mathbf{A}\mathbf{x}$$

where $\mathbf{A}$ is a symmetric matrix.

A similar statement is not true over the complex numbers if the homogeneous quadratic polynomial is defined analogously by the formula $\mathbf{x} \cdot \mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$. For example

$$\begin{bmatrix} \bar{x} & \bar{y} \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \bar{x}x + 2\bar{x}y + \bar{y}y \quad \text{and}$$

$$\begin{bmatrix} \bar{x} & \bar{y} \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \bar{x}x + \bar{x}y + x\bar{y} + \bar{y}y$$

are two different functions! On the other hand, if $\mathbf{A} \in \mathbb{C}^{n \times n}$ is self-adjoint, then $\mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$ is real-valued, because

$$\mathbf{x} \cdot \mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{x} = (\mathbf{A}\mathbf{x}) \cdot \mathbf{x} = \overline{\mathbf{x} \cdot \mathbf{A}\mathbf{x}}.$$

It can also be proved that if a complex quadratic form is real-valued, then its matrix is self-adjoint, also known as Hermitian (see Exercise 9.6).

**Definition 9.15 (Quadratic form).** *A real quadratic form is the function*

$$\mathbb{R}^n \to \mathbb{R}; \mathbf{x} \mapsto \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$$

*where $\mathbf{A}$ is a real symmetric matrix. A complex quadratic form is the function*

$$\mathbb{C}^n \to \mathbb{C}; \mathbf{x} \mapsto \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$$

*where $\mathbf{A}$ is a complex square matrix.*

> *We see that in the complex case we did not impose a condition on the matrix $\mathbf{A}$, while in the real case we stipulated that $\mathbf{A}$ must be symmetric. The reason for this is that in the real case – as we have seen – for any matrix $\mathbf{A}$ there is a symmetric $\mathbf{B}$ for which $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{B}\mathbf{x}$. In the complex case, a similar statement is not true for either symmetric or self-adjoint matrices. The self-adjoint case will be interesting from a different point of view.*

> *A complex quadratic form is called Hermitian if $\mathbf{A}$ is self-adjoint. As we will see in Theorem 13.45, this is equivalent to the complex quadratic form being real-valued.*

In the remainder of this section, by quadratic form – unless stated otherwise – we mean a real quadratic form.

### Principal axis theorem

By diagonalizing the symmetric matrix associated with a quadratic form, the quadratic form can also be brought into a simple form.

According to the spectral theorem, every real symmetric matrix is orthogonally diagonalizable, i.e., there exists an orthogonal matrix $\mathbf{Q}$ and a diagonal matrix $\boldsymbol{\Lambda}$ such that $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$. We know that the matrix of the matrix mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ in the orthonormal basis $\mathcal{Q}$ formed by the column vectors of $\mathbf{Q}$ is $\boldsymbol{\Lambda}$. If an arbitrary vector $\mathbf{x}$ has the form $\mathbf{y}$ in this basis, then $\mathbf{x} = \mathbf{Q}\mathbf{y}$. Performing this substitution, we obtain the form of the same function written in the basis $\mathcal{Q}$:

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = (\mathbf{Q}\mathbf{y})^{\mathsf{T}}\mathbf{A}(\mathbf{Q}\mathbf{y}) = \mathbf{y}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q}\mathbf{y} = \mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y}.$$

According to this, the quadratic form becomes very simple in this basis, containing only squared terms: $\lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2$, where $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$. With this we have proved the following theorem:

**Theorem 9.16 (Principal axis theorem).** *Let $\mathbf{A}$ be an $n$-th order real symmetric matrix, which is orthogonally diagonalized by the matrix $\mathbf{Q}$, i.e., $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$ is diagonal. Then the substitution $\mathbf{x} = \mathbf{Q}\mathbf{y}$ transforms the quadratic form $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ into the quadratic form $\mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y}$, which, when expanded, contains only squared terms, i.e.,*

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y} = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2, \tag{9.5}$$

*where $\lambda_1, \lambda_2, \dots, \lambda_n$ are the eigenvalues of the matrix $\mathbf{A}$.*

> *We will explain the name of the theorem in detail later, for now just that the vectors of the basis $\mathcal{Q}$ are all axes of symmetry of the surface with the equation $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = c$, which are also called principal axes.*

> *Since $\mathbf{Q}$ is an orthogonal matrix, therefore $\det\mathbf{Q} = 1$ or $\det\mathbf{Q} = -1$. In practical applications (for example, certain 3-dimensional ones) it may be important that the basis $\mathcal{Q}$ should also be right-handed, i.e., that $\det\mathbf{Q} = 1$. Thus, the standard basis can be rotated into the new basis. This can be achieved if $\det\mathbf{Q} = -1$ by changing any column of $\mathbf{Q}$ to its $-1$ multiple. This does not affect the quadratic form, since only the eigenvalues appear in it.*

> *The application of the principal axis theorem to a quadratic form is called principal axis transformation.*

**Example 9.17 (Principal axis transformation).** *Perform the principal axis transformation on the quadratic form*

$$f(x, y, z) = x^2 + 2y^2 + 2z^2 - 8xy + 4xz$$

*and find a right-handed orthonormal basis for it! What is the transition matrix?*

*Solution.* The matrix product form of the quadratic form is

$$\begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} 1 & -4 & 2 \\ -4 & 2 & 0 \\ 2 & 0 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}.$$

The characteristic polynomial of its matrix is $-\lambda^3 + 5\lambda^2 + 12\lambda - 36$, its roots, i.e., the eigenvalues are $6$, $-3$, $2$, the corresponding eigenvectors are $(2, -2, 1)$, $(-5, -4, 2)$, $(0, 1, 2)$, which are necessarily orthogonal, since they belong to different eigenvalues of a symmetric matrix. Thus the desired quadratic form is

$$\begin{bmatrix} \xi & \eta & \zeta \end{bmatrix} \begin{bmatrix} 6 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & 2 \end{bmatrix} \begin{bmatrix} \xi \\ \eta \\ \zeta \end{bmatrix} = 6\xi^2 - 3\eta^2 + 2\zeta^2.$$

Normalizing the eigenvectors we get the orthonormal basis, and the determinant formed by them as column vectors is

$$\begin{vmatrix} \frac{2}{3} & -\frac{5}{3\sqrt{5}} & 0 \\ -\frac{2}{3} & -\frac{4}{3\sqrt{5}} & \frac{1}{\sqrt{5}} \\ \frac{1}{3} & \frac{2}{3\sqrt{5}} & \frac{2}{\sqrt{5}} \end{vmatrix} = -1,$$

so a suitable orthonormal basis is: $\left(\frac{2}{3}, -\frac{2}{3}, \frac{1}{3}\right)$, $\left(\frac{5}{3\sqrt{5}}, \frac{4}{3\sqrt{5}}, -\frac{2}{3\sqrt{5}}\right)$, $\left(0, \frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right)$. The matrix formed by them as column vectors is the transition matrix.

### Definiteness of quadratic forms and matrices

The principal axis theorem makes the possible signs of the values taken by a quadratic form easily transparent. This allows an important classification of quadratic forms.

**Definition 9.18 (Definiteness of quadratic forms and matrices).** *We say that the quadratic form $f(\mathbf{x}) = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ is*

*a) positive definite, if $f(\mathbf{x}) > 0$,*

*b) positive semidefinite, if $f(\mathbf{x}) \geq 0$,*

*c) negative definite, if $f(\mathbf{x}) < 0$,*

*d) negative semidefinite, if $f(\mathbf{x}) \leq 0$*

*for any vector $\mathbf{x} \neq \mathbf{0}$, and we say that $f$ is*

*e) indefinite, if it takes both positive and negative values.*

*The symmetric matrix $\mathbf{A}$ is called positive/negative definite/semidefinite, or indefinite, if the quadratic form associated with it is.*

> *If $\mathbf{A}$ is negative definite, then $-\mathbf{A}$ is positive definite. A similar statement holds for semidefiniteness as well.*

> *If $\mathbf{A} = [a]$, i.e., if the matrix $\mathbf{A}$ is $1 \times 1$, then $\mathbf{A}$ is positive definite if and only if $a > 0$.*

> *The identity matrix is positive definite, because $\mathbf{x}^{\mathsf{T}}\mathbf{I}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{x} = |\mathbf{x}|^2$, which is positive if $\mathbf{x} \neq \mathbf{0}$.*

> *For an arbitrary real matrix $\mathbf{A}$, $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ is positive semidefinite, because*

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}(\mathbf{A}\mathbf{x}) = |\mathbf{A}\mathbf{x}|^2 \geqslant 0. \tag{9.6}$$

> *It is clear that if a quadratic form contains only squared terms, then the type of its definiteness can be read immediately. For example, regarding the forms $f(x, y) = x^2 + 2y^2$, $g(x, y) = x^2 - 2y^2$, $h(x, y) = -x^2 - 2y^2$, $k(x, y, z) = x^2 + 2y^2$, it can be seen that $f$ is positive definite, since its value is always positive if $(x, y) \neq (0, 0)$, $g$ is indefinite, $h$ is negative definite, and $k$ is positive semidefinite, since its value can be 0 even if $(x, y, z) \neq (0, 0, 0)$ (if $x = y = 0$, but $z \neq 0$). Since, according to the principal axis theorem, every quadratic form is equal to the linear combination of the squares of the variables taken with the eigenvalues, the type of definiteness can be decided purely in the knowledge of the signs of the eigenvalues.*

> *Consider the quadratic forms $a(x, y) = 2x^2 + 2xy + 2y^2$, $b(x, y) = x^2 + 2xy + y^2$ and $c(x, y) = x^2 + 4xy + 3y^2$, and the symmetric matrices associated with them*

$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}!$$

> *The quadratic form $a$, and the matrix $\mathbf{A}$, is positive definite, because $a(x, y) = x^2 + y^2 + (x + y)^2 > 0$, if $(x, y) \neq (0, 0)$. Both $b$ and $\mathbf{B}$ are positive semidefinite, because $b(x, y) = (x + y)^2$, which is never negative, but is 0 at the point $(x, y) = (1, -1)$. Both $c$ and $\mathbf{C}$ are indefinite, because $c(1, 0) > 0$, $c(-2, 1) < 0$. For the investigation of these matrices see Exercise 9.3!*

> *In the complex case, the definiteness of a Hermitian quadratic form can be defined similarly to the above, since these quadratic forms are real-valued. For example, among the matrices*

$$\mathbf{A} = \begin{bmatrix} 2 & \mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & \mathrm{i} \\ -\mathrm{i} & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1+\mathrm{i} \\ 1-\mathrm{i} & 1 \end{bmatrix}, \quad \mathbf{D} = \begin{bmatrix} 2 & \mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}$$

> *$\mathbf{A}$ is positive definite (its eigenvalues are 3 and 1), $\mathbf{B}$ is positive semidefinite (its eigenvalues are 2 and 0) and $\mathbf{C}$ is indefinite (its eigenvalues are 2 and $-1$).*

**Example 9.19 (Determining definiteness from eigenvalues).** *Determine the type of definiteness for the matrices*

$$\mathbf{A} = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix}!$$

*Solution.* The eigenvalues of matrix $\mathbf{A}$ are 1, 1 and 4. Thus, from the form

$$\begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} \xi & \eta & \zeta \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{bmatrix} \begin{bmatrix} \xi \\ \eta \\ \zeta \end{bmatrix} = \xi^2 + \eta^2 + 4\zeta^2$$

obtained after the principal axis transformation, it can be seen that every value of this quadratic form is positive if not all variables are 0. So this quadratic form is positive definite. Similarly, the eigenvalues of $\mathbf{B}$ are $-1$, $-1$ and 2, the form obtained after the principal axis transformation is $-\xi^2 - \eta^2 + 2\zeta^2$. This takes a negative value at the point $(1, 0, 0)$, for example, and a positive one at $(0, 0, 1)$, so it is indefinite. Finally, the eigenvalues of $\mathbf{C}$ are $-3$, $-3$ and 0, thus the form obtained after the principal axis transformation is $-3\xi^2 - 3\eta^2 + 0\zeta^2 = -3\xi^2 - 3\eta^2$. Its value at the point $(0, 0, 1)$ is 0, and it does not take positive values, so it is negative semidefinite. $\square$

**Theorem 9.20 (Determining definiteness from eigenvalues).** *The real symmetric matrix $\mathbf{A}$, and the quadratic form $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ are*

*a) positive definite if and only if every eigenvalue of $\mathbf{A}$ is positive;*

*b) positive semidefinite if and only if every eigenvalue of $\mathbf{A}$ is nonnegative;*

*c) negative definite if and only if every eigenvalue of $\mathbf{A}$ is negative;*

*d) negative semidefinite if and only if every eigenvalue of $\mathbf{A}$ is nonpositive;*

*e) indefinite if and only if $\mathbf{A}$ has both positive and negative eigenvalues.*

### Factorizations of positive (semi)definite matrices

Computations with positive definite matrices are aided by the fact that from either their eigendecomposition or their LU decomposition, a factorization of the form $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ can be derived.

**Theorem 9.21 (Factorizations of positive semidefinite matrices).** *Let the matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ be symmetric. The following statements are equivalent:*

*a) $\mathbf{A}$ is positive semidefinite,*

*b) there exists a symmetric positive semidefinite matrix $\mathbf{B}$ such that $\mathbf{A} = \mathbf{B}^2$,*

*c) there exists a matrix $\mathbf{C}$ such that $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$.*

*The matrix $\mathbf{B}$ is unique, that is, a positive semidefinite matrix has a single square root among the positive semidefinite matrices.*

*Proof.* $a) \Rightarrow b)$: A symmetric matrix $\mathbf{A}$ can be diagonalized with an orthogonal matrix $\mathbf{Q}$, i.e., $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$, where $\boldsymbol{\Lambda}$ is diagonal. If $\mathbf{A}$ is also positive semidefinite, then all its eigenvalues are nonnegative, so the square root of every element on the main diagonal of $\boldsymbol{\Lambda}$ can be extracted. With the notations $\boldsymbol{\Lambda}^{\frac{1}{2}} = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$ and $\mathbf{B} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}$, we have $\mathbf{B}\mathbf{B} = (\mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}})(\mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}) = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}$.

To prove uniqueness, let $\mathbf{B}$ be positive semidefinite, for which $\mathbf{B}^2 = \mathbf{A}$. $\mathbf{B}$ can be orthogonally diagonalized, let the vectors of its ONB be $\mathbf{q}_i$, and the corresponding eigenvalue be $\beta_i \geq 0$. Then $\mathbf{B}\mathbf{q}_i = \beta_i\mathbf{q}_i$ and $\mathbf{q}_i$ is also an eigenvector of $\mathbf{A}$: $\mathbf{A}\mathbf{q}_i = \beta_i^2\mathbf{q}_i$. The action of the mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ on the basis vectors $\mathbf{q}_i$ thus uniquely determines the action of $\mathbf{x} \mapsto \mathbf{B}\mathbf{x}$ as well, and therefore its matrix too.

$b) \Rightarrow c)$: $\mathbf{B}$ is symmetric, thus $\mathbf{B}^{\mathsf{T}}\mathbf{B} = \mathbf{B}^2$, so the choice $\mathbf{C} = \mathbf{B}$ works, but one with fewer calculations can also be found: for the matrix $\mathbf{C} = \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}$ we have $\mathbf{C}^{\mathsf{T}}\mathbf{C} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}$.

$c) \Rightarrow a)$: If $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$ for some matrix $\mathbf{C}$, then we know that $\mathbf{A}$ is symmetric, on the other hand

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{C}^{\mathsf{T}}\mathbf{C}\mathbf{x} = (\mathbf{C}\mathbf{x})^{\mathsf{T}}(\mathbf{C}\mathbf{x}) = |\mathbf{C}\mathbf{x}|^2 \geqslant 0,$$

so $\mathbf{A}$ is positive semidefinite. $\square$

**Example 9.22 (Factorization into products $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ and $\mathbf{B}^2$).** *Let*

$$\mathbf{A} = \begin{bmatrix} 9 & -12 \\ -12 & 16 \end{bmatrix}.$$

*Are there matrices $\mathbf{C}$ and positive semidefinite matrices $\mathbf{B}$ for which $\mathbf{A} = \mathbf{B}^2 = \mathbf{C}^{\mathsf{T}}\mathbf{C}$? Give several solutions for the one where it's possible!*

*Solution.* $\mathbf{A}$ is symmetric, its characteristic polynomial is $x^2 - 25x$, its eigenvalues are nonnegative (25, 0), so it is positive semidefinite, thus such matrices $\mathbf{B}$ and $\mathbf{C}$ exist. The eigendecomposition of $\mathbf{A}$, the matrices $\mathbf{B}$ and $\mathbf{C}$:

$$\begin{aligned}
\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 3/5 & 4/5 \\ -4/5 & 3/5 \end{bmatrix} \begin{bmatrix} 25 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix}, \\
\mathbf{C} = \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix} = \begin{bmatrix} 3 & -4 \\ 0 & 0 \end{bmatrix}, \\
\mathbf{B} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 3/5 & 4/5 \\ -4/5 & 3/5 \end{bmatrix} \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix} = \begin{bmatrix} 9/5 & -12/5 \\ -12/5 & 16/5 \end{bmatrix}.
\end{aligned}$$

There is only one such positive semidefinite $\mathbf{B}$, but for $\mathbf{C}$ the matrix $\mathbf{C} = \mathbf{B}$ is also good. $\square$

**Theorem 9.23 (Factorizations of positive definite matrices).** *Let the matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ be symmetric. The following statements are equivalent:*

*a) $\mathbf{A}$ is positive definite,*

*b) in the LU decomposition $\mathbf{A} = \mathbf{L}\mathbf{U}$, every element on the main diagonal of $\mathbf{U}$ is positive,*

*c) there exists a real upper triangular matrix $\mathbf{R}$, all of whose main diagonal elements are positive, and $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$,*

*d) there exists an invertible real matrix $\mathbf{C}$ such that $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$,*

*e) there exists a symmetric positive definite matrix $\mathbf{B}$ such that $\mathbf{A} = \mathbf{B}^2$ and this matrix is unique.*

*The matrix $\mathbf{R}$ according to point c) is unique, the decomposition $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$ is called the Cholesky decomposition of the matrix $\mathbf{A}$.*

*Proof.* $a) \Leftrightarrow d) \Leftrightarrow e)$: its proof is essentially the same as the proof of Theorem 9.21, only here all matrices are invertible.

$a) \Rightarrow b)$: If $\mathbf{A}$ is positive definite, then 0 is not its eigenvalue, so it is invertible. The LU decomposition of an invertible matrix is unique (see Theorem 5.37). Let $\mathbf{A} = \mathbf{L}\mathbf{U}$. Then $\mathbf{e}_i^{\mathsf{T}}\mathbf{A}\mathbf{e}_i = \mathbf{e}_i^{\mathsf{T}}\mathbf{L}\mathbf{U}\mathbf{e}_i = u_{ii} > 0$, where $u_{ii}$ is the main diagonal element of $\mathbf{U}$, which are therefore all positive.

$b) \Rightarrow c)$: With the decomposition

$$\mathbf{U} = \mathbf{D}\hat{\mathbf{U}} = \begin{bmatrix} u_{11} & 0 & \dots & 0 \\ 0 & u_{22} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & u_{nn} \end{bmatrix} \begin{bmatrix} 1 & u_{12}/u_{11} & \dots & u_{1n}/u_{11} \\ 0 & 1 & \dots & u_{2n}/u_{22} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \end{bmatrix}$$

we obtained a decomposition $\mathbf{A} = \mathbf{L}\mathbf{D}\hat{\mathbf{U}}$, where $\mathbf{L}$ is a lower, and $\hat{\mathbf{U}}$ is an upper unit triangular matrix. Since $\mathbf{A}^{\mathsf{T}} = \mathbf{A}$, i.e., $\mathbf{A} = \mathbf{L}\mathbf{D}\hat{\mathbf{U}} = \hat{\mathbf{U}}^{\mathsf{T}}\mathbf{D}^{\mathsf{T}}\mathbf{D}\mathbf{L}^{\mathsf{T}}$, and this decomposition is also unique, therefore $\mathbf{L} = \hat{\mathbf{U}}^{\mathsf{T}}$, i.e., $\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\mathsf{T}}$. Denoting the matrix consisting of the square roots of $\mathbf{D}$ by $\mathbf{D}^{\frac{1}{2}}$, we get that with the matrix $\mathbf{R} = \mathbf{D}^{\frac{1}{2}}\mathbf{L}^{\mathsf{T}}$ we have $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$.

As a bonus, we also got that this decomposition is unique.

$c) \Rightarrow d)$: If every main diagonal element of $\mathbf{R}$ is positive, then $\mathbf{R}$ is invertible, so $\mathbf{C} = \mathbf{R}$ is appropriate.

$d) \Rightarrow a)$: If $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$, then according to the previous Theorem 9.21, $\mathbf{A}$ is positive semidefinite. But if $\mathbf{C}$ is invertible, then so is $\mathbf{C}^{\mathsf{T}}\mathbf{C}$, thus none of the eigenvalues of $\mathbf{A}$ is 0, so $\mathbf{A}$ is positive definite. $\square$

**Example 9.24 (Cholesky decomposition).** *Give the Cholesky decomposition of the matrix $\mathbf{A}$, where*

$$\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 2 \\ 0 & 2 & 2 \end{bmatrix}.$$

*Solution.* The matrix $\mathbf{A}$ is positive definite (e.g., because the value of $\chi_{\mathbf{A}}(x) = -x^3 + 8x^2 - 12x + 4$ at 0 is positive, the roots of its derivative are positive, thus
the local extremum points, and consequently the roots too). Since the LU decomposition is

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & \tfrac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 4 & 2 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & \tfrac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & \tfrac{1}{2} \\ 0 & 0 & 1 \end{bmatrix},$$

from which using the relations $\operatorname{diag}(1,4,1) = \operatorname{diag}(1,2,1)\operatorname{diag}(1,2,1)$ and $\mathbf{R} = \operatorname{diag}(1,2,1)\mathbf{L}^{\mathsf{T}}$

$$\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 2 \\ 0 & 2 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 1 \end{bmatrix}.$$

$\square$

### Definiteness and principal minors

The definiteness of a matrix can often be easily decided from the values of its principal minors or leading principal minors.

Select a few rows of a square matrix, omit the other rows and columns. The determinant of the square submatrix thus obtained is called a *principal minor* of the matrix. If we select the first $k$ rows and the first $k$ columns, we speak of a *leading principal minor*, more precisely, the *$k$-th order* or *leading principal minor*.

If a matrix is in diagonal form and is positive definite, i.e., all its eigenvalues are positive, then all its principal minors are also positive; if it is positive semidefinite, then all its principal minors are nonnegative. If all eigenvalues of this diagonal matrix are negative, then its leading principal minors have alternating signs $- + - + - + \dots$. These observations can also be transferred to matrices not in diagonal form.

**Theorem 9.25 (Connection between definiteness and principal minors).** *The real symmetric matrix $\mathbf{A}$, and the quadratic form $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ are*

*a) positive definite if and only if every leading principal minor of $\mathbf{A}$ is positive;*

*b) positive definite if and only if every principal minor of $\mathbf{A}$ is positive;*

*c) negative definite if and only if every odd-order leading principal minor of $\mathbf{A}$ is negative, and every even-order leading principal minor is positive.*

*d) positive semidefinite if and only if every principal minor of $\mathbf{A}$ is nonnegative;*

**Proof.** *a)* If $\mathbf{A}$ is positive definite, then in its LU decomposition every main diagonal element of $\mathbf{U}$ is positive. Let $\mathbf{A}_k$, $\mathbf{L}_k$, and $\mathbf{U}_k$ denote the submatrices standing in the intersection of the first $k$ rows and first $k$ columns of the matrices $\mathbf{A}$, $\mathbf{L}$, $\mathbf{U}$, respectively. The LU decomposition blocked with these submatrices is

$$\mathbf{A} = \begin{bmatrix} \mathbf{A}_k & * \\ * & * \end{bmatrix} = \begin{bmatrix} \mathbf{L}_k & \mathbf{O} \\ * & * \end{bmatrix} \begin{bmatrix} \mathbf{U}_k & * \\ \mathbf{O} & * \end{bmatrix} = \begin{bmatrix} \mathbf{L}_k\mathbf{U}_k & * \\ * & * \end{bmatrix},$$

i.e., $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$, so the $k$-th leading principal minor is $|\mathbf{A}_k| = |\mathbf{L}_k||\mathbf{U}_k| = u_{11}u_{22}\dots u_{kk} > 0$.

Conversely, if every principal minor of $\mathbf{A}$ is positive, i.e., $\det(\mathbf{A}_k) > 0$ ($k = 1, 2, \dots, n$), then $u_{kk} = \det(\mathbf{A}_k)/\det(\mathbf{A}_{k-1}) > 0$, so according to point *b)* of Theorem 9.23, $\mathbf{A}$ is positive definite.

*b)* If $\mathbf{P}$ is a permutation matrix that permutes the rows belonging to a given principal minor of $\mathbf{A}$ into the first rows, then in the matrix $\mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}}$ this principal minor becomes a leading principal minor, and this matrix is similar to $\mathbf{A}$ and symmetric, so it has the same definiteness. So $\mathbf{A}$ has all its principal minors positive if and only if all its leading principal minors are.

*c)* If $\mathbf{A}$ is negative definite, then in the decomposition $-\mathbf{A} = \mathbf{L}\mathbf{U}$ for every $i$ we have $u_{ii} < 0$, which proves the statement.

*d)* If $\mathbf{A}$ is positive semidefinite, the submatrix $\mathbf{B}$ belonging to the row and column indices $\leqslant i_1 < i_2 < \cdots < i_k \leqslant n$ is also positive semidefinite, since in any product $\hat{\mathbf{x}}^{\mathsf{T}}\mathbf{B}\hat{\mathbf{x}}$, $\hat{\mathbf{x}}$ can be padded with zeros so that $[\hat{\mathbf{x}}]_j = [\mathbf{x}]_{i_j}$, thus $\hat{\mathbf{x}}^{\mathsf{T}}\mathbf{B}\hat{\mathbf{x}} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} \geqslant 0$.

Conversely: suppose that every principal minor of $\mathbf{A}$ is nonnegative. We will show that then for any $\varepsilon > 0$, $\mathbf{A} + \varepsilon\mathbf{I}$ is positive definite, because its leading principal minors are positive. Thus $\mathbf{x}^{\mathsf{T}}(\mathbf{A} + \varepsilon\mathbf{I})\mathbf{x} > 0$ for every vector $\mathbf{x} \neq \mathbf{0}$, from which

$$\lim_{\varepsilon \to 0^+} \mathbf{x}^{\mathsf{T}}(\mathbf{A} + \varepsilon\mathbf{I})\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} \geqslant 0.$$

$\square$

> *The points of the theorem concerning leading principal minors cannot be carried over to semidefinite matrices without any further conditions. It is true that if a matrix is positive semidefinite, then the sequence of its leading principal minors is positive for a while, and then 0 from there on. However, the converse of this is no longer true. For example, for the matrix*

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{bmatrix}$$

> *the sequence of its leading principal minors is 1, 0, 0, but the matrix is indefinite.*

### Extremum

The conditions for the extremum of multivariate functions concerning their first and second partial derivatives become immediately understandable with the help of the concept of definiteness.

According to the multivariate form of Taylor's theorem known from calculus, an at least twice differentiable function $f : \mathbb{R}^n \to \mathbb{R}$ can be written in the following form:

$$f(\mathbf{x}) = f(\mathbf{a}) + \sum_{i=1}^{n} \frac{\partial f}{\partial x_i}(\mathbf{a})(x_i - a_i) + \sum_{i,j} \frac{\partial^2 f}{\partial x_i \partial x_j}(\mathbf{a})(x_i - a_i)(x_j - a_j) + \sum_{i,j} \varepsilon_{ij}(\mathbf{x})(x_i - a_i)(x_j - a_j),$$

where $\mathbf{a} \in \mathbb{R}^n$ is an interior point of the domain of $f$.

### Exercises

**9.3.** By calculating the eigenvalues, determine the definiteness of the following matrices!

$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$$

**9.4. Decomposition into a product $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ and $\mathbf{B}^2$.** Let

$$\mathbf{A} = \begin{bmatrix} 5 & 4 & -2 \\ 4 & 5 & 2 \\ -2 & 2 & 8 \end{bmatrix}.$$

Are there matrices $\mathbf{B}$ and $\mathbf{C}$ for which $\mathbf{A} = \mathbf{B}^2 = \mathbf{C}^{\mathsf{T}}\mathbf{C}$, and if so, give examples! For the one with multiple solutions, give at least two!

**9.5.** Express the quadratic forms $a(x, y) = 2x^2 + 2xy + 2y^2$, $b(x, y) = x^2 + 2xy + y^2$ and $c(x, y) = x^2 + 4xy + 3y^2$ as a sum of two perfect squares with coefficients $+1$, 0 or $-1$! (These are the quadratic forms associated with the matrices in the previous exercise.)

**9.6.** Prove that the quadratic form $q(\mathbf{x}) = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$ is real-valued if and only if $\mathbf{A}$ is self-adjoint!

### Solutions

**9.1.** $\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)^{\mathsf{T}} = \operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)^{\mathsf{T}}\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k) \iff \operatorname{diag}(\mathbf{A}_1\mathbf{A}_1^{\mathsf{T}}, \dots, \mathbf{A}_k\mathbf{A}_k^{\mathsf{T}}) = \operatorname{diag}(\mathbf{A}_1^{\mathsf{T}}\mathbf{A}_1, \dots, \mathbf{A}_k^{\mathsf{T}}\mathbf{A}_k)$.

**9.2.** $\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{\mathsf{T}}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{\mathsf{T}}$ is true if and only if $b^2 = c^2$ and $ab + cd = ac + bd$. $c = b$ is not possible, because then the matrix would be symmetric, and its eigenvalues are real, thus $c = -b \neq 0$. From here $ab - bd = -ab + bd$, that is $a = d$.

**9.3.** $\mathbf{A}$ is positive definite because its eigenvalues are 3 and 1. $\mathbf{B}$ is positive semidefinite because its eigenvalues are 2 and 0. $\mathbf{C}$ is indefinite because its characteristic polynomial is $x^2 - 4x - 1$, so one of its eigenvalues is positive and the other is negative.

**9.4.** $\mathbf{A}$ is symmetric, its eigenvalues are non-negative (9, 9, 0), so it is positive semidefinite, such matrices $\mathbf{B}$ and $\mathbf{C}$ exist. The eigendecomposition of $\mathbf{A}$, the matrices $\mathbf{C}$ and $\mathbf{B}$:

$$\begin{aligned}
\mathbf{A} &= \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \begin{bmatrix} 9 & 0 & 0 \\ 0 & 9 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix},
\end{aligned}$$

$$\begin{aligned}
\mathbf{C} &= \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} \\
&= \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 0 & 0 & 0 \end{bmatrix},
\end{aligned}$$

$$\begin{aligned}
\mathbf{B} &= \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \\
&= \frac{1}{3}\begin{bmatrix} 5 & 4 & -2 \\ 4 & 5 & 2 \\ -2 & 2 & 8 \end{bmatrix}
\end{aligned}$$

**9.5.** $a(x, y) = 2x^2 + 2xy + 2y^2 = (\sqrt{2}x + \tfrac{1}{\sqrt{2}}y)^2 + (\tfrac{\sqrt{3}}{\sqrt{2}}y)^2$, $b(x, y) = x^2 + 2xy + y^2 = (x + y)^2 + 0$ and $c(x, y) = x^2 + 4xy + 3y^2 = (x + 2y)^2 - y^2$.

# 10. Singular value

We will generalize the orthogonal diagonalization of a symmetric matrix to an arbitrary matrix by finding two orthonormal bases instead of one. We can also say that we will generalize the orthogonal diagonalization of linear transformations $\mathcal{V} \to \mathcal{V}$ to linear mappings $\mathcal{V}_1 \to \mathcal{V}_2$. This diagonalization helps to describe further important properties of matrices and linear mappings; as an example, we will examine matrix norms. Among the applications of this topic, those related to information compression stand out, but the algorithms considered to be the most efficient for solving systems of equations also fall into this category.

## Singular value, singular vector, SVD

> *We generalize orthogonal diagonalization, in which the role of eigenvalues is taken over by singular values, and eigendecomposition is taken over by singular value decomposition (SVD).*

### Singular value, singular vector

We know that a matrix mapping associated with an $\mathbf{A} \in \mathbb{R}^{m \times n}$ matrix is a one-to-one correspondence between the row space and the column space. As a starting point, we look for orthonormal bases in these two subspaces, between which the matrix of the mapping takes a diagonal form. We extend these to an orthonormal basis of $\mathbb{R}^n$ and $\mathbb{R}^m$. In complex spaces, all this can be implemented similarly.

For the matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$, we are looking for orthonormal bases $\{\mathbf{v}_1, \mathbf{v}_2 \dots, \mathbf{v}_n\} \subset \mathbb{R}^n$ and $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_m\} \subset \mathbb{R}^m$ in which the matrix of $\mathbf{A}$ becomes diagonal. This means that there exist real numbers $\sigma_i$ such that $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, where $1 \leqslant i \leqslant \min(m, n)$. According to this, we are looking for mutually perpendicular vectors whose images are also perpendicular to each other. The following statement gives an idea for this:

**Proposition 10.1.** *If at least one of the mutually perpendicular vectors $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ is an eigenvector of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$, then the vectors $\mathbf{A}\mathbf{x}, \mathbf{A}\mathbf{y} \in \mathbb{R}^m$ are also perpendicular to each other.*

**Proof.** According to the conditions $\mathbf{x} \cdot \mathbf{y} = 0$, and let, for example, $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \lambda\mathbf{y}$. Then

$$\mathbf{A}\mathbf{x} \cdot \mathbf{A}\mathbf{y} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x} \cdot (\lambda\mathbf{y}) = \lambda(\mathbf{x} \cdot \mathbf{y}) = 0.$$

$\square$

Since $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ is symmetric and positive semidefinite, it is orthogonally diagonalizable and its eigenvalues are non-negative. From its eigenvectors, an orthonormal basis of $\mathbb{R}^n$ can be selected. Among these vectors, those belonging to the eigenvalue 0 form an orthonormal basis of the space $\mathcal{N}(\mathbf{A}^{\mathsf{T}}\mathbf{A}) = \mathcal{N}(\mathbf{A})$ (if $\mathcal{N}(\mathbf{A}) = \{\mathbf{0}\}$, then this basis is the empty set). Thus, the rest form an orthonormal basis of the orthogonal complement of the null space, that is, the row space. Let this basis be denoted by $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$, where $r$ is the rank of $\mathbf{A}$, which is equal to the dimension of the row space. None of these vectors is in the null space, and their images under $\mathbf{A}$ are pairwise perpendicular to each other, so the vectors $\mathbf{A}\mathbf{v}_i$ form an orthogonal basis in the column space. If $\mathbf{v}_i$ is the unit eigenvector of the matrix $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ corresponding to the eigenvalue $\lambda_i > 0$, then $|\mathbf{A}\mathbf{v}_i| = \sqrt{\lambda_i}$, because

$$|\mathbf{A}\mathbf{v}_i|^2 = (\mathbf{A}\mathbf{v}_i)^{\mathsf{T}}(\mathbf{A}\mathbf{v}_i) = \mathbf{v}_i^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \lambda_i|\mathbf{v}_i|^2 = \lambda_i.$$

Let $\sigma_i = \sqrt{\lambda_i}$, thus $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, where $\mathbf{u}_i$ is a unit vector. Then the vector system $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ is an orthonormal basis in the column space. Since $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \sigma_i^2\mathbf{v}_i$, thus $\mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \frac{1}{\sigma_i}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \frac{1}{\sigma_i}\sigma_i^2\mathbf{v}_i = \sigma_i\mathbf{v}_i$, so the relations

$$\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma_i\mathbf{v}_i \tag{10.1}$$

pair the vectors $\mathbf{v}_i$ and $\mathbf{u}_i$. And if $\mathbf{v} \in \mathcal{N}(\mathbf{A})$, $\mathbf{u} \in \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, and $\sigma = 0$, then the relations

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u} = \sigma\mathbf{v} \tag{10.2}$$

also hold here. This leads to the following definition.

**Definition 10.2 (Singular value, singular vector).** *The singular value of a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ of rank $r$ is the non-negative real number $\sigma$ for which there exist two non-zero vectors $\mathbf{v} \in \mathbb{R}^n$ and $\mathbf{u} \in \mathbb{R}^m$ such that*

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u} = \sigma\mathbf{v}. \tag{10.3}$$

*The vector $\mathbf{v}$ is called a right singular vector, and the vector $\mathbf{u}$ is called a left singular vector. The multiplicity of the singular value $\sigma$ is $s$ if there are at most $s$ independent right singular vectors $\mathbf{v}_1, \dots, \mathbf{v}_s$ and left singular vectors $\mathbf{u}_1, \dots, \mathbf{u}_s$ such that for all indices $i = 1, 2 \dots, s$*

$$\mathbf{A}\mathbf{v}_i = \sigma\mathbf{u}_i, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma\mathbf{v}_i. \tag{10.4}$$

> *The concept of singular value was introduced by Erhard Schmidt in 1907, but he still called it an eigenvalue. It received its current name in 1937 because it seemed a particularly useful tool – for example, in solving systems of equations – when the coefficient matrix is singular.*

> *Just as an eigenvector is always associated with an eigenvalue, here two singular vectors are always associated with a singular value, a right one from $\mathbb{R}^n$ and a left one from $\mathbb{R}^m$. These vectors are not unique, just as eigenvectors are not. However, if we have selected a right singular vector for a positive singular value, then the formulas defining the singular value and vector already uniquely determine the left one, and vice versa, to a left singular vector they uniquely provide a right one. In the case of the singular value 0, any left and right singular vectors can be paired.*

> *If the rank of $\mathbf{A}$ is $r$, then based on the above, it has $r$ positive singular values. These are indexed by size according to widespread practice, i.e.*

$$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > \sigma_{r+1} = \ldots = 0.$$

> *If $\sigma$ is a singular value of $\mathbf{A}$ with multiplicity $s$, then $\sigma^2$ is an eigenvalue of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ with algebraic (and geometric) multiplicity $s$, so the right singular vectors corresponding to $\sigma$ span an $s$-dimensional subspace in the row space, and the left singular vectors corresponding to it span an $s$-dimensional subspace in the column space.*

> *There are books that understand singular value only as a positive singular value, some that understand singular vector only as unit vectors, and even some that consider only the vectors of a given orthonormal basis as singular vectors. We have followed the concept that places the analogy with eigenvalue and eigenvector, the close relationship with them, and the goal of extending orthogonal diagonalization first in conceptualization.*

> *If $\mathbf{A} \in \mathbb{C}^{m \times n}$, then (in accordance with the definition of the distinguished subspaces of the complex vector space) instead of the row space with the subspace $\mathcal{O}(\mathbf{A}^{\mathsf{H}})$, and instead of transposition with taking the adjoint, so with the matrix $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ instead of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$, what has been said so far remains true. The definition of the singular value also changes only in that $\mathbf{A}^{\mathsf{H}}$ appears in it instead of $\mathbf{A}^{\mathsf{T}}$, that is, the singular value of the matrix $\mathbf{A} \in \mathbb{C}^{m \times n}$ is the non-negative real number $\sigma$ for which there exist non-zero vectors $\mathbf{v} \in \mathbb{C}^n$ and $\mathbf{u} \in \mathbb{C}^m$ such that*

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{H}}\mathbf{u} = \sigma\mathbf{v}. \tag{10.5}$$

In the following, $\mathbb{K}$ denotes the field $\mathbb{R}$ or $\mathbb{C}$, so we discuss the real and complex cases together.

**Example 10.3 (Singular values and vectors).** *Determine the singular values of the matrix*

$$\mathbf{A} = \begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix}$$

*and look for an orthonormal basis among the right singular vectors, and also give the corresponding ONB consisting of left singular vectors.*

**Solution.** Since

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = \begin{bmatrix} 73 & -36 \\ -36 & 52 \end{bmatrix},$$

whose characteristic polynomial is $\chi(x) = x^2 - 125x + 2500$, and its roots are $\lambda_1 = 100$, $\lambda_2 = 25$, therefore the singular values of $\mathbf{A}$ are $\sigma_1 = 10$, $\sigma_2 = 5$.

The eigenpairs of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ with unit eigenvectors: $(100, (4/5, -3/5))$, $(25, (3/5, 4/5))$. The right singular vectors of $\mathbf{A}$ are thus $\mathbf{v}_1 = (4/5, -3/5)$ and $\mathbf{v}_2 = (3/5, 4/5)$. Since

$$\begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix} \begin{bmatrix} 4/5 \\ -3/5 \end{bmatrix} = 10 \begin{bmatrix} -5/13 \\ 12/13 \end{bmatrix}, \quad \begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix} \begin{bmatrix} 3/5 \\ 4/5 \end{bmatrix} = 5 \begin{bmatrix} 12/13 \\ 5/13 \end{bmatrix},$$

therefore $\mathbf{u}_1 = (-5/13, 12/13)$ and $\mathbf{u}_2 = (12/13, 5/13)$ are the corresponding left singular vectors.

It can be seen that $\{\mathbf{v}_1, \mathbf{v}_2\}$ and $\{\mathbf{u}_1, \mathbf{u}_2\}$ are both orthonormal bases of the row and column spaces, respectively, since these spaces are equal to $\mathbb{R}^2$. $\square$

### Singular value decomposition

The singular values and vectors of a matrix provide a matrix decomposition, which we will call singular value decomposition.

Let us form the diagonal matrix

$$\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1, \dots, \sigma_r) = \begin{bmatrix} \sigma_1 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma_r \end{bmatrix}$$

from the singular values, and the matrix

$$\mathbf{V}_1 = [\mathbf{v}_1 | \dots | \mathbf{v}_r]$$

from an orthonormal system $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$ of the corresponding right singular vectors. Then the system $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ of vectors defined by the formulas $\mathbf{u}_i = \frac{1}{\sigma_i}\mathbf{A}\mathbf{v}_i$ is also orthonormal. Form the matrix

$$\mathbf{U}_1 = [\mathbf{u}_1 | \dots | \mathbf{u}_r]$$

from them. Then the equalities $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$ take the form

$$\mathbf{A}\mathbf{V}_1 = \mathbf{U}_1\boldsymbol{\Sigma}_1, \tag{10.6}$$

that is

$$\mathbf{A}\begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_r \end{bmatrix} = \begin{bmatrix} \mathbf{u}_1 & \mathbf{u}_2 & \dots & \mathbf{u}_r \end{bmatrix} \begin{bmatrix} \sigma_1 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma_r \end{bmatrix} \tag{10.7}$$

Since $\mathbf{V}_1$ is semi-orthogonal, and its column vectors form an ONB of the row space, therefore $\mathbf{V}_1\mathbf{V}_1^{\mathsf{T}}$ is the matrix of orthogonal projection onto the row space, thus $\mathbf{A}\mathbf{V}_1\mathbf{V}_1^{\mathsf{T}} = \mathbf{A}$ (see also exercise **??**), so multiplying equation (10.6) from the right by $\mathbf{V}_1^{\mathsf{T}}$ we get that $\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{T}}$.

**Definition 10.4 (Reduced singular value decomposition and its dyadic form).** *The decomposition*

$$\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{T}} \quad (\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{H}})$$

*of the real (complex) matrix $\mathbf{A}$ is called a reduced singular value decomposition if $\boldsymbol{\Sigma}_1$ is a square, diagonal matrix, with monotonically decreasing positive real numbers in its main diagonal, $\mathbf{U}_1$ and $\mathbf{V}_1$ are semi-orthogonal (in the complex case $\mathbf{U}_1^{\mathsf{H}}\mathbf{U}_1 = \mathbf{V}_1^{\mathsf{H}}\mathbf{V}_1 = \mathbf{I}_r$). If we write this product in its block form for the column vectors of $\mathbf{U}_1\boldsymbol{\Sigma}_1$ and the row vectors of $\mathbf{V}_1^{\mathsf{T}}$, then we get a dyadic decomposition of the matrix $\mathbf{A}$, which is called the dyadic decomposition according to singular values:*

$$\mathbf{A} = \sigma_1\mathbf{u}_1\mathbf{v}_1^{\mathsf{T}} + \sigma_2\mathbf{u}_2\mathbf{v}_2^{\mathsf{T}} + \cdots + \sigma_r\mathbf{u}_r\mathbf{v}_r^{\mathsf{T}}.$$

*(in the complex case, with adjoint instead of transpose).*

Let us complete the vector system $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$ to an ONB of the entire $n$-dimensional space. Let the $n \times n$ orthogonal (unitary) matrix formed from them be denoted by $\mathbf{V}$, and in the case $n > r$ the matrix formed from the new vectors by $\mathbf{V}_2$, i.e., $\mathbf{V}_2 = \begin{bmatrix} \mathbf{v}_{r+1} & \dots & \mathbf{v}_n \end{bmatrix}$. Since the column vectors of $\mathbf{V}_2$ are perpendicular to the row space (in the complex case to $\mathcal{O}(\mathbf{A}^{\mathsf{H}})$), they are in the null space, so for $r < i \leq n$, $\mathbf{A}\mathbf{v}_i = \mathbf{0}$.

Similarly to the above, complete the vector system $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ to an ONB of the entire $m$-dimensional space, and denote the $m \times m$ matrix formed from these vectors by $\mathbf{U}$. If $m > r$, let $\mathbf{U}_2 = \begin{bmatrix} \mathbf{u}_{r+1} & \dots & \mathbf{u}_m \end{bmatrix}$. Finally, let us complete the matrix $\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1, \dots, \sigma_r)$ to an $m \times n$ matrix by adding zero blocks, denote this matrix by $\boldsymbol{\Sigma}$, so $\boldsymbol{\Sigma} = \begin{bmatrix} \boldsymbol{\Sigma}_1 & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix}$. Then equality (10.7) can be modified as follows:

$$\begin{aligned}
\mathbf{A}\mathbf{V} &= \begin{bmatrix} \mathbf{A}\mathbf{v}_1 & \dots & \mathbf{A}\mathbf{v}_r & | & \mathbf{A}\mathbf{v}_{r+1} & \dots & \mathbf{A}\mathbf{v}_n \end{bmatrix} \\
&= \begin{bmatrix} \sigma_1\mathbf{u}_1 & \dots & \sigma_r\mathbf{u}_r & | & \mathbf{0} & \dots & \mathbf{0} \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{u}_1 & \dots & \mathbf{u}_r & | & \mathbf{u}_{r+1} & \dots & \mathbf{u}_m \end{bmatrix} \left[\begin{array}{cccc|ccc} \sigma_1 & 0 & \dots & 0 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & \sigma_r & 0 & \dots & 0 \\ \hline 0 & 0 & \dots & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \dots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & 0 & 0 & \dots & 0 \end{array}\right] \\
&= \mathbf{U}\boldsymbol{\Sigma}.
\end{aligned}$$

Writing out the sizes of the matrices as well $\mathbf{A}_{m \times n}\mathbf{V}_{n \times n} = \mathbf{U}_{m \times m}\boldsymbol{\Sigma}_{m \times n}$, rewriting it into block matrix form

$$\mathbf{A}\begin{bmatrix} \mathbf{V}_1 & | & \mathbf{V}_2 \end{bmatrix} = \begin{bmatrix} \mathbf{U}_1 & | & \mathbf{U}_2 \end{bmatrix} \left[\begin{array}{c|c} \boldsymbol{\Sigma}_1 & \mathbf{O} \\ \hline \mathbf{O} & \mathbf{O} \end{array}\right].$$

If $r = n$ or $r = m$, respectively, then $\mathbf{V}_2$ or $\mathbf{U}_2$ are empty, i.e., they consist of 0 columns, which mutatis mutandis changes this formula. Since the column vectors of the square matrix $\mathbf{V}$ form an ONB, therefore in the real case $\mathbf{V}$ is orthogonal, thus $\mathbf{V}^{-1} = \mathbf{V}^{\mathsf{T}}$ (in the complex case unitary, and $\mathbf{V}^{-1} = \mathbf{V}^{\mathsf{H}}$). Using this, from the equality $\mathbf{A}\mathbf{V} = \mathbf{U}\boldsymbol{\Sigma}$ we get that $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ ($\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$).

**Definition 10.5 (Singular value decomposition).** *A decomposition of the real (complex) matrix $\mathbf{A}$ of the form*

$$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} \quad (\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}})$$

*is called a singular value decomposition of $\mathbf{A}$, or briefly singular decomposition, if $\mathbf{U}$ and $\mathbf{V}$ are orthogonal (unitary) and $\boldsymbol{\Sigma}$ is diagonal, with monotonically decreasing non-negative real numbers in its main diagonal.*

**Example 10.6 (Determining the singular value decomposition).** *Calculate the singular values of the matrix*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

*and write down all variants of its singular value decomposition!*

**Solution.** The singular values are equal to the roots of the non-zero eigenvalues of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$.

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = \begin{bmatrix} 20 & -14 & 4 \\ -14 & 17 & -10 \\ 4 & -10 & 8 \end{bmatrix}.$$

Its characteristic polynomial is $x^3 - 45x^2 + 324x$, whose roots are 36, 9 and 0. So the singular values are 6 and 3. The unit eigenvectors of the matrix $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ are:

$$\begin{aligned}
\lambda_1 &= 36 & \mathbf{v}_1 &= (2/3, -2/3, 1/3) \\
\lambda_2 &= 9 & \mathbf{v}_2 &= (2/3, 1/3, -2/3) \\
\lambda_3 &= 0 & \mathbf{v}_3 &= (1/3, 2/3, 2/3).
\end{aligned}$$

Since $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, therefore $\mathbf{u}_i = \mathbf{A}\mathbf{v}_i/\sigma_i$. Thus $\mathbf{u}_1$ and $\mathbf{u}_2$ can also be calculated:

$$\begin{aligned}
\mathbf{u}_1 &= \frac{\mathbf{A}\mathbf{v}_1}{\sigma_1} = \frac{(2, -4, 4)}{6} = \left(\frac{1}{3}, -\frac{2}{3}, \frac{2}{3}\right) \\
\mathbf{u}_2 &= \frac{\mathbf{A}\mathbf{v}_2}{\sigma_2} = \frac{(-2, 1, 2)}{3} = \left(-\frac{2}{3}, \frac{1}{3}, \frac{2}{3}\right)
\end{aligned}$$

We still need to complete the system $\{\mathbf{u}_1, \mathbf{u}_2\}$ to a basis of $\mathbb{R}^3$. One method can be that since $\{\mathbf{u}_1, \mathbf{u}_2\}$ is a basis of the column space, we look for the basis of the orthogonal complement subspace – that is, the null space of $\mathbf{A}^{\mathsf{T}}$. The other method uses cross product, which can be simpler in such small examples: $\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2 = (-2/3, -2/3, -1/3)$. The singular, the reduced singular decomposition and its dyadic form:

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 & -2 \\ -2 & 1 & -2 \\ 2 & 2 & -1 \end{bmatrix} \begin{bmatrix} 6 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \\ 1 & 2 & 2 \end{bmatrix},$$

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 \\ -2 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} 6 & 0 \\ 0 & 3 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \end{bmatrix}.$$

$$\begin{aligned}
\mathbf{A} &= 6 \begin{bmatrix} \tfrac{1}{3} \\ -\tfrac{2}{3} \\ \tfrac{2}{3} \end{bmatrix} \begin{bmatrix} \tfrac{2}{3} & -\tfrac{2}{3} & \tfrac{1}{3} \end{bmatrix} + 3 \begin{bmatrix} -\tfrac{2}{3} \\ \tfrac{1}{3} \\ \tfrac{2}{3} \end{bmatrix} \begin{bmatrix} \tfrac{2}{3} & \tfrac{1}{3} & -\tfrac{2}{3} \end{bmatrix} \\
&= \begin{bmatrix} 4/3 & -4/3 & 2/3 \\ -8/3 & 8/3 & -4/3 \\ 8/3 & -8/3 & 4/3 \end{bmatrix} + \begin{bmatrix} -4/3 & -2/3 & 4/3 \\ 2/3 & 1/3 & -2/3 \\ 4/3 & 2/3 & -4/3 \end{bmatrix}.
\end{aligned}$$

In the notation, we also factored out $\frac{1}{3}$ from the matrices $\mathbf{U}$ and $\mathbf{V}$, but this also belongs to the matrix – otherwise it would not be orthogonal. $\square$

There is also an additional method for determining the matrix $\mathbf{U}$. Instead of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$, let us examine the matrix $\mathbf{A}\mathbf{A}^{\mathsf{T}}$.

$$\mathbf{A}\mathbf{A}^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}(\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}})^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}\mathbf{V}\boldsymbol{\Sigma}^{\mathsf{T}}\mathbf{U}^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{T}}.$$

According to this, the singular values can also be determined from the matrix $\mathbf{A}\mathbf{A}^{\mathsf{T}}$. Its eigenvectors corresponding to the positive eigenvalues give the first $r$ columns of the matrix $\mathbf{U}$.

Since $\mathbf{v}_i$ is the eigenvector of the matrix $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ corresponding to the value $\sigma_i^2$, therefore $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \sigma_i^2\mathbf{v}_i$, on the other hand $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, so comparing these two relations we get that $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \mathbf{A}^{\mathsf{T}}(\sigma_i\mathbf{u}_i) = \sigma_i^2\mathbf{v}_i$, that is

$$\mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma_i\mathbf{v}_i, \quad \text{that is} \quad \mathbf{v}_i = \frac{\mathbf{A}^{\mathsf{T}}\mathbf{u}_i}{\sigma_i}.$$

It may be worthwhile to look for the eigenvectors corresponding to the positive eigenvalues of $\mathbf{A}\mathbf{A}^{\mathsf{T}}$ if $m < n$, because then we only have to calculate with $m$-dimensional vectors (see exercise 10.3).

**Theorem 10.7 (Existence of the SVD and uniqueness of $\boldsymbol{\Sigma}$).** *Every real or complex matrix has a singular value decomposition. The monotonically decreasing sequence of singular values is unique, but the decomposition is not.*

**Proof.** If $\mathbf{A} \in \mathbb{R}^{m \times n}$ ($\in \mathbb{C}^{m \times n}$), then the matrix $\mathbf{A}^{\mathsf{T}}\mathbf{A} \in \mathbb{R}^{n \times n}$ is symmetric ($\mathbf{A}^{\mathsf{H}}\mathbf{A}$ is self-adjoint) and positive semidefinite. According to this, it is orthogonally (unitarily) diagonalizable and the diagonal elements are non-negative real numbers. The matrix $\mathbf{V}$ formed from the vectors of the orthonormal basis that can be selected from the eigenvectors is orthogonal (unitary). We saw earlier that the non-zero column vectors of $\mathbf{A}\mathbf{V}$ with an orthonormal basis of $\mathcal{N}(\mathbf{A}^{\mathsf{T}})$ give a matrix $\mathbf{U}$ for which $\mathbf{A}\mathbf{V} = \mathbf{U}\boldsymbol{\Sigma}$, that is $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ ($\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$). The diagonal elements of $\boldsymbol{\Sigma}$ are the square roots of the eigenvalues of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ (in the complex case $\mathbf{A}^{\mathsf{H}}\mathbf{A}$). Thus the decomposition exists.

On the other hand, if $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ is a decomposition, then

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = (\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}})^{\mathsf{T}}\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} = \mathbf{V}\boldsymbol{\Sigma}^{\mathsf{T}}\mathbf{U}^{\mathsf{T}}\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} = \mathbf{V}(\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma})\mathbf{V}^{\mathsf{T}},$$

thus the elements of $\mathbf{V}$ are eigenvectors of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ ($\mathbf{A}^{\mathsf{H}}\mathbf{A}$), and the elements of $\boldsymbol{\Sigma}$ are the square roots of its eigenvalues, since $\boldsymbol{\Sigma}^{\mathsf{H}}\boldsymbol{\Sigma} = \boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma} = \operatorname{diag}(\sigma_1^2, \sigma_2^2, \dots, \sigma_r^2, 0, \dots, 0)$. The eigenvalues are unique, so the singular values are too. Since a basis can be chosen from the eigenvectors in several ways, neither $\mathbf{V}$ nor $\mathbf{U}$ is unique. $\square$

### Geometric interpretation of singular value decomposition

With the help of singular value decomposition, it can be well illustrated what the image of a unit sphere is under a linear mapping.

First, let us illustrate the singular value decomposition of a $2 \times 2$, real, rank-2 matrix, representing the effect of its factors. Since the decomposition is $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$, first $\mathbf{V}^{\mathsf{T}}$ acts on the vectors of the plane. $\mathbf{V}^{\mathsf{T}}$ is orthogonal, so it is either a rotation or a reflection. Since the columns of $\mathbf{V}$ are exactly the vectors $\mathbf{v}_i$, therefore $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$. Then $\boldsymbol{\Sigma}$ stretches/compresses in the direction of the two axes:

> *Figure 10.1. Image of the unit circle. Let $\mathbf{A}$ be a $2 \times 2$, real, rank-2 matrix. The effect of the mapping $\mathbf{v}_i \mapsto \mathbf{A}\mathbf{v}_i = \sigma_i \mathbf{u}_i$ on the unit circle can be well illustrated step by step: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$, $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$, $\sigma \mathbf{U}\mathbf{e}_i = \sigma \mathbf{u}_i$, that is, $\mathbf{V}^{\mathsf{T}}$ maps the basis $\{\mathbf{v}_i\}$ to the standard one by an orthogonal mapping, where $\boldsymbol{\Sigma}$ stretches/compresses it axially, and finally the orthogonal $\mathbf{U}$ acts on it.*

$\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$. Finally, $\mathbf{U}$ is again a rotation or reflection: $\mathbf{U}\sigma \mathbf{e}_i = \sigma \mathbf{U}\mathbf{e}_i = \sigma \mathbf{u}_i$.

Next, let us illustrate the singular value decomposition of a $2 \times 3$, real, rank-2 matrix. First $\mathbf{V}^{\mathsf{T}}$ acts on the vectors of the space. $\mathbf{V}^{\mathsf{T}}$ is orthogonal, and maps the orthonormal basis $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ to the standard basis: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$ ($i = 1, 2, 3$). Then $\boldsymbol{\Sigma}$ stretches/compresses in the direction of the first two axes: $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$ ($i = 1, 2$), but projects parallel to the direction of the third axis: $\boldsymbol{\Sigma}\mathbf{e}_3 = \mathbf{0}$. The image here is not an elliptical line, but the entire region bounded by it. Finally, the orthogonal $\mathbf{U}$ rotates or reflects this onto a line.

> *Figure 10.2. Image of the unit sphere. Let $\mathbf{A}$ be a $2 \times 3$, real, rank-2 matrix. The effect of the mapping $\mathbf{v}_i \mapsto \mathbf{A}\mathbf{v}_i = \sigma_i \mathbf{u}_i$ on the surface of the unit sphere: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$ ($i = 1, 2, 3$), $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$ ($i = 1, 2$), $\mathbf{U}\sigma \mathbf{e}_i = \sigma \mathbf{u}_i$, that is, $\mathbf{V}^{\mathsf{T}}$ maps the basis $\{\mathbf{v}_i\}$ to the standard one, where $\boldsymbol{\Sigma}$ stretches/compresses it in the first two axial directions, but projects it in the third axial direction, so the image of the spherical surface is an elliptical region, on which finally $\mathbf{U}$ acts.*

**Theorem 10.8 (Image of the unit sphere).** *Let $\mathbf{A}$ be a real matrix of rank $r$ and size $m \times n$. The mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ maps the surface of the unit sphere of $\mathbb{R}^n$, i.e., the points satisfying the equation $\mathbf{e}^{\mathsf{T}}\mathbf{e} = 1$, into an $r$-dimensional subspace of $\mathbb{R}^m$*

*a) onto the surface of an ellipsoid, if $r = n$, and*

*b) onto a region bounded by an ellipsoid, if $r < n$.*

**Proof.** Let us consider the dyadic form of the singular value decomposition of $\mathbf{A}$:

$$\mathbf{A} = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^{\mathsf{T}} + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^{\mathsf{T}} + \cdots + \sigma_r \mathbf{u}_r \mathbf{v}_r^{\mathsf{T}}.$$

If $\mathbf{e} \in \mathbb{R}^n$ is a unit vector, then $\mathbf{V}^{\mathsf{T}}\mathbf{e}$ is also a unit vector, that is $(\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_n^{\mathsf{T}}\mathbf{e})^2 = 1$, since $\mathbf{V}$ is an orthogonal matrix. Thus, using the above dyadic form

$$\begin{aligned}
\mathbf{A}\mathbf{e} &= \sigma_1 \mathbf{u}_1 \mathbf{v}_1^{\mathsf{T}}\mathbf{e} + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^{\mathsf{T}}\mathbf{e} + \cdots + \sigma_r \mathbf{u}_r \mathbf{v}_r^{\mathsf{T}}\mathbf{e} \\
&= (\sigma_1 \mathbf{v}_1^{\mathsf{T}}\mathbf{e})\mathbf{u}_1 + (\sigma_2 \mathbf{v}_2^{\mathsf{T}}\mathbf{e})\mathbf{u}_2 + \cdots + (\sigma_r \mathbf{v}_r^{\mathsf{T}}\mathbf{e})\mathbf{u}_r \\
&= x_1 \mathbf{u}_1 + x_2 \mathbf{u}_2 + \cdots + x_r \mathbf{u}_r,
\end{aligned}$$

where $x_i = \sigma_i \mathbf{v}_i^{\mathsf{T}}\mathbf{e}$ ($i = 1, 2, \ldots, r$). Let $x_i = 0$ if $i = r + 1, \ldots, m$ and by assigning $\mathbf{x} = (x_1, x_2, \ldots, x_m)$ we get that $\mathbf{A}\mathbf{e} = \mathbf{U}\mathbf{x}$. Thus, due to the orthogonality of $\mathbf{U}$, $|\mathbf{A}\mathbf{e}| = |\mathbf{U}\mathbf{x}| = |\mathbf{x}|$. Based on this, the equation satisfied by the points of $\mathbf{A}\mathbf{e}$ can be written down, since

$$\begin{aligned}
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &= (\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_r^{\mathsf{T}}\mathbf{e})^2 \\
&\leq (\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_n^{\mathsf{T}}\mathbf{e})^2 = 1.
\end{aligned}$$

According to this, the equation is

$$\begin{aligned}
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &= 1, \quad \text{if } r = n, \\
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &\leq 1, \quad \text{if } r < n.
\end{aligned}$$

$\square$

*Polar decomposition* The exponential form of complex numbers – i.e. the form $re^{i\varphi}$ – is the product of a non-negative scaling factor ($r$) and a complex number of absolute value 1 ($e^{i\varphi}$, which is a rotation by $\varphi$ on the complex plane). The polar coordinate form of this number on the complex plane is $(r, \varphi)$. The analogous matrix decomposition can be used in several engineering applications, e.g. describing material transformations.

By *polar decomposition* we mean the decomposition of a square matrix into the product of a positive semidefinite and an orthogonal matrix.

**Theorem 10.9 (Polar decomposition).** *Any complex (real) square matrix $\mathbf{A}$ can be produced in the form*

$$\mathbf{A} = \mathbf{P}\mathbf{Q}$$

*where $\mathbf{P}$ is a positive semidefinite self-adjoint (symmetric) matrix, and $\mathbf{Q}$ is unitary (orthogonal). If $\mathbf{A}$ is invertible, then $\mathbf{P}$ is positive definite, and the decomposition is unique.*

**Proof.** The decomposition can be obtained from the singular value decomposition of $\mathbf{A}$:

$$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}\mathbf{U}\mathbf{V}^{\mathsf{H}} = (\mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}})(\mathbf{U}\mathbf{V}^{\mathsf{H}}),$$

from which $\mathbf{P} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}$, $\mathbf{Q} = \mathbf{U}\mathbf{V}^{\mathsf{H}}$. $\mathbf{P}$ is self-adjoint, since $(\mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}$. $\mathbf{P}$ is positive semidefinite, since it is similar to the positive semidefinite matrix $\boldsymbol{\Sigma}$. If $\mathbf{A}$ is invertible, then $\boldsymbol{\Sigma}$ is positive definite.

$\mathbf{Q}$ is unitary (orthogonal), since it is the product of two unitary (orthogonal) matrices. $\mathbf{P}$ is unique (not only if it is positive definite), because

$$\mathbf{A}\mathbf{A}^{\mathsf{H}} = \mathbf{P}\mathbf{Q}\mathbf{Q}^{\mathsf{H}}\mathbf{P}^{\mathsf{H}} = \mathbf{P}\mathbf{P}^{\mathsf{H}} = \mathbf{P}^2,$$

that is $\mathbf{P} = \sqrt{\mathbf{A}\mathbf{A}^{\mathsf{H}}}$, and the square root of a positive semidefinite self-adjoint matrix is unique among self-adjoint positive semidefinite matrices (see point *b)* of Theorem 9.21 on the factorizations of positive semidefinite matrices). If $\mathbf{P}$ is positive definite, then it is invertible, so $\mathbf{Q} = \mathbf{P}^{-1}\mathbf{A}$ is also unique. $\square$

> *Polar decomposition is not only analogous to the exponential form of complex numbers, but its determinant also gives exactly this form: if $\det \mathbf{P} = r$, $\det \mathbf{Q} = e^{i\varphi}$ (since $\mathbf{Q}$ is unitary, so the absolute value of its determinant is 1), then $\det \mathbf{A} = re^{i\varphi}$.*

> *A similar statement can be made in reverse order, moreover with the same unitary (orthogonal) matrix, since*
> $$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}\mathbf{V}^{\mathsf{H}}\mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = (\mathbf{U}\mathbf{V}^{\mathsf{H}})(\mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}) = \mathbf{Q}\hat{\mathbf{P}},$$
> *that is, there exists a positive semidefinite self-adjoint matrix $\hat{\mathbf{P}}$ such that $\mathbf{A} = \mathbf{Q}\hat{\mathbf{P}}$.*

> *In a real space, the geometric meaning of polar decomposition is that every matrix mapping is produced as the composition of two mappings, one of which rotates or rotoreflects the space ($\mathbf{Q}$), and the other stretches/compresses the space along the axes of an orthonormal basis in each axial direction by a non-negative factor.*

**Example 10.10 (Calculating polar decomposition).** *Calculate the $\mathbf{P}\mathbf{Q}$ and $\mathbf{Q}\hat{\mathbf{P}}$ polar decompositions of the matrix $\mathbf{A}$ also included in Example 10.6!*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

**Solution.** In Example 10.6, we gave the singular value decomposition of the real matrix $\mathbf{A}$. Thus substitution into the formulas $\mathbf{P} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{T}}$, $\mathbf{Q} = \mathbf{U}\mathbf{V}^{\mathsf{T}}$, $\hat{\mathbf{P}} = \mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$ gives the answer:

$$\begin{aligned}
\mathbf{A} = \mathbf{P}\mathbf{Q} &= \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix} \begin{bmatrix} -4/9 & -8/9 & 1/9 \\ -4/9 & 1/9 & -8/9 \\ 7/9 & -4/9 & -4/9 \end{bmatrix} \\
&= \mathbf{Q}\hat{\mathbf{P}} = \begin{bmatrix} -4/9 & -8/9 & 1/9 \\ -4/9 & 1/9 & -8/9 \\ 7/9 & -4/9 & -4/9 \end{bmatrix} \begin{bmatrix} 4 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 2 \end{bmatrix}.
\end{aligned}$$

However, if we look carefully at the result, we can also find another solution, since $\mathbf{P}$ and $\hat{\mathbf{P}}$ can also be obtained from $\mathbf{A}$ by row and column swaps:

$$\mathbf{A} = \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix} \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix}.$$

$\square$

*Pseudoinverse* Singular value decomposition provides a new possibility for calculating the pseudoinverse.

It is an immediate consequence of point *e)* of 7.62 that if $\boldsymbol{\Sigma}$ is the diagonal form of the matrix $\mathbf{A}$ in its singular value decomposition, then the $i$-th element of the main diagonal of $\boldsymbol{\Sigma}^{+}$ is $1/\sigma_i$ ($i = 1, 2, \ldots, r$), and all other elements are $0$.

**Theorem 10.11 (Calculating the pseudoinverse).** *Let $\mathbf{A}$ be a real matrix and let its reduced singular value decomposition be $\mathbf{A} = \mathbf{U}_1 \boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}$, and its singular value decomposition be $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$. Then*

$$\mathbf{A}^{+} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}} = \mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{T}}.$$

**Proof.** In the decomposition $\mathbf{A} = \mathbf{U}_1(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})$, $\mathbf{U}_1$ has full column rank, $\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}$ has full row rank, so formula (7.15) can be applied to $\mathbf{A}$. According to this

$$\begin{aligned}
\mathbf{A}^{+} &= (\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})^{\mathsf{T}} \left(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})^{\mathsf{T}}\right)^{-1} \left(\mathbf{U}_1^{\mathsf{T}}\mathbf{U}_1\right)^{-1} \mathbf{U}_1^{\mathsf{T}} = \mathbf{V}_1 \boldsymbol{\Sigma}_1 \boldsymbol{\Sigma}_1^{-2} \mathbf{U}_1^{\mathsf{T}} \\
&= \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}.
\end{aligned}$$

The other equality follows from this, since

$$\mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{T}} = \begin{bmatrix} \mathbf{V}_1 & \mathbf{V}_2 \end{bmatrix} \begin{bmatrix} \boldsymbol{\Sigma}_1^{-1} & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} \begin{bmatrix} \mathbf{U}_1^{\mathsf{T}} \\ \mathbf{U}_2^{\mathsf{T}} \end{bmatrix} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}.$$

$\square$

> *The pseudoinverse can also be defined for complex matrices, and the formula for its calculation can be used by replacing transpose with adjoint. Thus if $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}_1 \boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{H}}$ are two singular value decompositions of $\mathbf{A}$, then $\mathbf{A}^{+} = \mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{H}} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{H}}$.*

**Example 10.12 (Calculating the pseudoinverse from SVD).** *Calculate the pseudoinverse of the matrix $\mathbf{A}$ included in Example 10.6!*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

**Solution.** It is worth using the reduced form because it requires less calculation. In Example 10.6, we determined the reduced singular value decomposition of the matrix $\mathbf{A}$:

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 \\ -2 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} 6 & 0 \\ 0 & 3 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \end{bmatrix},$$

from which with the formula $\mathbf{A}^{+} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}$ giving the pseudoinverse

$$\mathbf{A}^{+} = \frac{1}{3}\begin{bmatrix} 2 & 2 \\ -2 & 1 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} \frac{1}{6} & 0 \\ 0 & \frac{1}{3} \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & -2 & 2 \\ -2 & 1 & 2 \end{bmatrix} = \begin{bmatrix} -\frac{1}{9} & 0 & \frac{2}{9} \\ -\frac{1}{9} & \frac{1}{9} & 0 \\ \frac{1}{6} & -\frac{1}{9} & -\frac{1}{9} \end{bmatrix}.$$

$\square$

## Exercises

**10.1. (Singular value decompositions)** The matrix $\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix}$ has a single singular value, $\sigma_1 = 2$. Prove that the decompositions

$$\begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

$$\begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix}$$

are the singular value and reduced singular value decompositions of the matrix $\mathbf{A}$. (As a help, we also denoted the block structure in the singular value decomposition.)

**10.2.** Calculate the singular value decomposition of the matrix

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$$!

**10.3.** Calculate the

$$\mathbf{B} = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}$$

the singular value decomposition of the matrix!

**10.4.** Calculate the pseudoinverse of the matrix

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$$

from problem 10.2!

## Vector and matrix norms

*Similarly to vectors, in the investigation of certain properties of matrices – for example, the convergence of their sequences – quantities that measure the differences between them in a way reminiscent of distance are useful. The path to this leads through the generalization of the concept of absolute value. Matrix norms are intimately connected to singular values.*

### Vector norms

*Absolute value of a vector – the Euclidean norm* We first talked about the absolute value of 2- and 3-dimensional vectors in the section on defining vectors, and then we extended this concept to $n$-dimensional spaces to measure the difference between them. With the help of this, we were also able to define the distance between two vectors. In the following, we define functions – which are also important in applications – that generalize the "distance from the origin" property of the absolute value. We call these functions *norms*. First of all, we give this name to the absolute value of the vector as well, and at the same time we extend the definition from real vectors to complex ones.

**Definition 10.13 (Euclidean norm).** *The Euclidean norm or absolute value of the vector $\mathbf{x}$ is*

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2} = \sqrt{\mathbf{x}^{\mathsf{T}}\mathbf{x}}, \qquad \text{if } \mathbf{x} \in \mathbb{R}^n, \tag{10.8}$$

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} |x_i|^2} = \sqrt{\mathbf{x}^{\mathsf{H}}\mathbf{x}}, \qquad \text{if } \mathbf{x} \in \mathbb{C}^n. \tag{10.9}$$

For example, the Euclidean norm of the vector $\mathbf{x} = (1 + i, 1 - 2i, 3)$ is

$$\|\mathbf{x}\|_2 = \sqrt{(1 + i)(1 - i) + (1 - 2i)(1 + 2i) + 3^2} = \sqrt{2 + 5 + 9} = 4.$$

> *For the Euclidean norm of a vector, the notations $|.|$, $\|.\|$ and $\|.\|_2$ are all used.*

> *The real case is a special case of the definition given for complex vectors, so even this single one would suffice.*

> *If $\mathbf{x}$ is an arbitrary nonzero vector, then $\mathbf{x}/\|\mathbf{x}\|_2$ is a unit vector. The formation of a unit vector in the same direction from a vector in this way is called normalization, and we say that we normalize the vector $\mathbf{x}$.*

*The p-norm* To measure the distance between two points, we sometimes have to use a quite unusual measure. If we stand at an intersection of a city with a grid street structure, then the length of the shortest path to a point $x$ blocks east and $y$ blocks north on foot or by taxi is $x + y$ blocks. According to this "measure", the length of the shortest path from the origin to the intersection with coordinates $(x, y)$ is $|x| + |y|$. Since here we can only move on the grid lines of the coordinate system, it is customary to call this norm the *grid norm* (in Anglo-Saxon textbooks *Manhattan norm* or *taxicab norm*).

We arrive at another norm with the following computer image resizing task. The center of an image is designated. Let the distance of a pixel $(x, y)$ from it be the smallest number $c$ such that this point just fits into the square defined by the points $(-c, -c)$ and $(c, c)$. It is clear that $c = \max\{|x|, |y|\}$. This norm is also called the *maximum norm*.

The Euclidean norm, the grid norm and the maximum norm can also be derived from the following more general norm:

**Definition 10.14 (p-norm).** *For real $p \geq 1$, the $p$-norm of the vector $\mathbf{x} \in \mathbb{C}^n$ is $\|\mathbf{x}\|_p = \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p}$, while its limit is the $\infty$-norm, that is $\|\mathbf{x}\|_\infty = \lim_{p \to \infty} \|\mathbf{x}\|_p$.*

For example, $\|(3, 4, 5)\|_3 = \sqrt[3]{27 + 64 + 125} = 6$, $\|(1 + i, i, 0)\|_1 = 1 + \sqrt{2}$.

> *It is clear that the 2-norm is equal to the Euclidean norm, the 1-norm to the grid norm.*

> *The maximum norm is equal to the $\infty$-norm, that is*
> $$\|\mathbf{x}\|_\infty = \lim_{p \to \infty} \|\mathbf{x}\|_p = \lim_{p \to \infty} \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p} = \max_i |x_i|.$$
> *To prove this, let us denote the coordinate with the largest absolute value by $x_{\max}$. Then for all coordinates $x_i$, $|x_i|/|x_{\max}| \leq 1$, and thus*
> $$1 \leq \sum_{i=1}^{n} |x_i/x_{\max}|^p \leq n.$$
> *Raising each expression to the $1/p$-th power, then multiplying by $|x_{\max}|$, we get that*
> $$|x_{\max}| \leq |x_{\max}| \left(\sum_{i=1}^{n} \left|\frac{x_i}{x_{\max}}\right|^p\right)^{1/p} \leq |x_{\max}| n^{1/p},$$
> *and $n^{1/p} \to 1$ as $p \to \infty$, which proves the statement.*

> *It is interesting to view the set of points at unit distance from the origin in some norm, that is, the unit sphere. Figure 10.3 shows the unit circles (2-dimensional unit spheres) corresponding to the 1-, $\frac{3}{2}$-, 2-, 3- and $\infty$-norms.*

> *Figure 10.3. The geometric locus of points with norm 1, that is, the unit circles for $p = 1$, $p = 3/2$, $p = 2$, $p = 3$ and $p = \infty$.*

*The general concept of a norm* Previously, we looked for a function similar to the absolute value – that is, to the distance from the origin. However, the question is what properties are important to us, which ones do we want to preserve. When using the distance defined by the absolute value, the following properties seem essential:

*(a)* $|\mathbf{x}| \geq 0$, that is, the absolute value of a vector is *non-negative*.

*(b)* $|\mathbf{x}| = 0$ holds if and only if $\mathbf{x} = \mathbf{0}$. An important content of this is that the distance function defined by the formula $d(\mathbf{x}, \mathbf{y}) = |\mathbf{x} - \mathbf{y}|$ *separates the points*, that is, the distance between two different points is never 0.

*(c)* $|c\mathbf{x}| = |c||\mathbf{x}|$, which is a property reminiscent of the homogeneity known from linear mappings: it is usually called *positive homogeneity*.

*(d)* $|\mathbf{x} + \mathbf{y}| \leq |\mathbf{x}| + |\mathbf{y}|$, which we know as the *triangle inequality*.

These properties lead to the following definition:

**Definition 10.15 (Norm).** *A function $f \colon \mathbb{R}^n \to \mathbb{R}$, or $f \colon \mathbb{C}^n \to \mathbb{R}$ is called a norm if the following hold:*

*1. $f(\mathbf{x}) \geq 0$ for every vector $\mathbf{x}$, and $f(\mathbf{x}) = 0$ holds if and only if $\mathbf{x} = \mathbf{0}$,*

*2. $f(c\mathbf{x}) = |c|f(\mathbf{x})$ for every vector $\mathbf{x}$,*

*3. $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$.*

*The value $f(\mathbf{x})$ is called the norm of $\mathbf{x}$.*

> *The norm is usually denoted by the brackets $\|\ \|$, reminiscent of the absolute value, that is, the norm of $\mathbf{x}$ is denoted by $\|\mathbf{x}\|$. With this notation, the norm is thus a function $\|.\| \colon \mathbb{R}^n \to \mathbb{R}$, or $\|.\| \colon \mathbb{C}^n \to \mathbb{R}$.*

> *$\|\mathbf{x}\| = \|-\mathbf{x}\|$ is true for any norm $\|.\|$, since $\|-\mathbf{x}\| = |-1|\,\|\mathbf{x}\| = \|\mathbf{x}\|$.*

> *The following form of the triangle inequality written for a difference is useful:*
> $$\|\mathbf{z} - \mathbf{x}\| \geq \big|\,\|\mathbf{z}\| - \|\mathbf{x}\|\,\big| \tag{10.10}$$
> *This can be justified as follows: let $\mathbf{z} = \mathbf{x} + \mathbf{y}$, then from the triangle inequality we get that $\|\mathbf{z} - \mathbf{x}\| \geq \|\mathbf{z}\| - \|\mathbf{x}\|$, but by swapping the roles of $\mathbf{x}$ and $\mathbf{z}$, $\|\mathbf{x} - \mathbf{z}\| \geq \|\mathbf{x}\| - \|\mathbf{z}\|$ is also true, thus $\|\mathbf{z} - \mathbf{x}\| = \|\mathbf{x} - \mathbf{z}\|$ justifies the inequality.*

> *In an axiomatic construction, less can be required in the definition of the norm, namely the first point can be replaced by a simpler one:*
> *1′ if $f(\mathbf{x}) = 0$, then $\mathbf{x} = \mathbf{0}$,*
> *2′ $f(c\mathbf{x}) = |c|f(\mathbf{x})$ for every vector $\mathbf{x}$,*
> *3′ $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$.*
> *It follows from the last two properties of the definition that for any vector $\mathbf{x}$, $f(\mathbf{x}) \geq 0$, and $f(\mathbf{0}) = 0$, so 1.–3. is equivalent to 1′–3′ (see problem 10.6).*

> *The $p$-norm is a norm in every case $1 \leq p \leq \infty$. Its proof is rather technical in nature, so we only provide it among the problems (see 10.15). The proof is based on two notable inequalities – the Hölder and Minkowski inequalities – which we also pose as*

> *Figure 10.4. The geometric locus of points with norm 1 in space, that is, the unit spheres for $p = 1$, $p = 2$ and $p = \infty$.*

problems (see 10.13, 10.14). In fact, the *Minkowski inequality* is the triangle inequality itself:

$$\|\mathbf{x} + \mathbf{y}\|_p \leq \|\mathbf{x}\|_p + \|\mathbf{y}\|_p. \tag{10.11}$$

The *Hölder inequality* is the generalization of the CBS inequality:

$$|\mathbf{x}^{\mathsf{H}}\mathbf{y}| \leq \|\mathbf{x}\|_p \|\mathbf{y}\|_q, \text{ where } \frac{1}{p} + \frac{1}{q} = 1. \tag{10.12}$$

> *In the most important cases, that is, in the cases $p = 1$, $p = 2$ and $p = \infty$, proving that the $p$-norm is a norm is simple using our knowledge so far, so we recommend considering it to every reader (see problems 10.7, 10.8).*

> *Additional norms can be derived from a norm. If $\mathbf{x} \mapsto \|\mathbf{x}\|$ is a norm, and $A$ is an injective linear mapping, then the mapping $\mathbf{x} \mapsto \|A\mathbf{x}\|$ is also a norm (problem 10.11), furthermore, the function*
> $$\mathbf{x} \mapsto \sup_{\mathbf{y} \neq \mathbf{0}} \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{y}\|}$$
> *is also a norm (see 10.12).*

> *It is immediately visible that*
> $$\max_i \{|x_i|\} \leq \sqrt{|x_1|^2 + \cdots + |x_n|^2} \leq |x_1| + \cdots + |x_n|$$
> *that is*
> $$\|\mathbf{x}\|_\infty \leq \|\mathbf{x}\|_2 \leq \|\mathbf{x}\|_1. \tag{10.13}$$
> *On the other hand, it is also easily justified (see 10.9) that*
> $$\|\mathbf{x}\|_1 \leq \sqrt{n}\,\|\mathbf{x}\|_2, \ \|\mathbf{x}\|_2 \leq \sqrt{n}\,\|\mathbf{x}\|_\infty \text{ and } \|\mathbf{x}\|_1 \leq n\,\|\mathbf{x}\|_\infty. \tag{10.14}$$
> *These inequalities lead to the concept of equivalence of norms, which is the topic of the next section.*

> *Every norm is a continuous function. This is a consequence of, for example, the inequality (10.10) and the first estimation of (10.14) (see problem 10.10).*

*Equivalence of vector norms* According to the inequalities (10.13) and (10.14)

$$\|\mathbf{x}\|_\infty \leq \|\mathbf{x}\|_1 \text{ and } \|\mathbf{x}\|_1 \leq n\,\|\mathbf{x}\|_\infty,$$

that is, an appropriate constant multiple of the other provides an upper bound for both norms. This means that, for example, in deciding questions of convergence, these two norms behave identically, that is, a vector sequence is convergent according to one if and only if it is also according to the other.

**Definition 10.16 (Equivalence of norms).** *We say that the norms $\|.\|_a$ and $\|.\|_b$ are equivalent if there exist positive real numbers $c$ and $d$ such that $\|.\|_a \leq c\,\|.\|_b$ and $\|.\|_b \leq d\,\|.\|_a$.*

> *It is easily seen that the equivalence of norms is indeed an equivalence relation.*

> *The inequalities (10.13) and (10.14) show that the 1-, 2- and $\infty$-norms are all equivalent.*

**Theorem 10.17 (All vector norms are equivalent).** *Let $\mathbb{K} = \mathbb{C}$ or $\mathbb{R}$. Any two norms defined on the space $\mathbb{K}^n$ are equivalent.*

**Proof.** We will show that any norm $\|.\|$ defined on $\mathbb{K}^n$ is equivalent to the 1-norm. From this it immediately follows that any two norms are equivalent to each other.

Applying the triangle inequality to the decomposition $\mathbf{x} = x_1 \mathbf{e}_1 + \ldots + x_n \mathbf{e}_n$ we get that

$$\|\mathbf{x}\| \leq \sum_{i=1}^{n} |x_i| \|\mathbf{e}_i\| \leq c \sum_{i=1}^{n} |x_i| = c\,\|\mathbf{x}\|_1,$$

where $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ is the standard basis, and $c = \max_i \|\mathbf{e}_i\|$. With this we proved that $\|\mathbf{x}\| \leq c\,\|\mathbf{x}\|_1$.

To prove the inequality $\|\mathbf{x}\|_1 \leq d\,\|\mathbf{x}\|$ we must show that $\|\mathbf{x}\|_1 / \|\mathbf{x}\|$ is bounded from above on the set of nonzero vectors. We prove by contradiction. Assume that there is a sequence $\{\mathbf{x}_k\}$ such that $\|\mathbf{x}_k\|_1 / \|\mathbf{x}_k\| \to \infty$ as $k \to \infty$. Then $\|\mathbf{x}_k\| / \|\mathbf{x}_k\|_1 \to 0$, that is, $\mathbf{y}_k = \mathbf{x}_k / \|\mathbf{x}_k\|_1$ is a sequence such that $\|\mathbf{y}_k\| \to 0$, and $\|\mathbf{y}_k\|_1 = 1$. Since the 1-norm unit sphere is bounded, it can be assumed that the sequence $\mathbf{y}_k$ is convergent (otherwise we take a convergent subsequence), whose limit denoted by $\mathbf{y}$ is on the unit sphere, that is $\|\mathbf{y}\|_1 = 1$, thus $\mathbf{y} \neq \mathbf{0}$. On the other hand, $\|.\|$ is continuous, so $\|\mathbf{y}_k\| \to \|\mathbf{y}\|$, therefore $\|\mathbf{y}\| = 0$, which is a contradiction. $\square$

> *The question arises that if all norms are equivalent, then what is the point of introducing the concept of equivalence of norms. The answer is that we only proved equivalence for finite-dimensional spaces, and indeed, it does not hold in infinite-dimensional spaces. However, it is an important consequence that in finite-dimensional spaces we can always choose a norm that is the most convenient to use for deciding questions of convergence of vectors, since the result is independent of the choice of norm.*

### Matrix norms

*Vector norms on matrices* An $m \times n$ matrix can also be considered as an $mn$-dimensional vector, so the norms defined for vectors can also be applied to matrices. Among these, the most important is the extension of the 2-norm to matrices, which can also be written in several equivalent forms.

**Definition 10.18 (Frobenius norm).** *The Frobenius norm of the matrix $\mathbf{A} \in \mathbb{C}^{m \times n}$ is*

$$\|\mathbf{A}\|_F = \sqrt{\sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}|^2} = \sqrt{\sum_{i=1}^{m} \|\mathbf{A}_{i*}\|_2^2} = \sqrt{\sum_{j=1}^{n} \|\mathbf{A}_{*j}\|_2^2}.$$

Here we do not use the name 2-norm, because we reserve it for another norm. The Frobenius norm can also be calculated in other ways:

**Theorem 10.19 (Equivalent forms of the Frobenius norm).**

$$\|\mathbf{A}\|_F = \sqrt{\operatorname{trace}(\mathbf{A}^{\mathsf{H}}\mathbf{A})} = \sqrt{\sum_{i=1}^{\min(m, n)} \sigma_i^2}. \tag{10.15}$$

**Proof.** The first form immediately follows from the definition of the trace, since the $j$-th element of the diagonal of $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ is exactly equal to $\|\mathbf{A}_{*j}\|_2^2$. The trace of a matrix is equal to the sum of its eigenvalues, and the eigenvalues of $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ are equal to the squares of the singular values of $\mathbf{A}$, which proves the second equality of the statement. $\square$

A vector norm can provide truly useful information about matrices as well if it is somehow related to such peculiarities of the matrix that are difficult to describe as an $mn$-dimensional vector. Multiplication by a matrix is such an example. Between the 2-norm of vectors and the Frobenius norm of matrices, for example, the following relationship holds:

**Proposition 10.20.** *For any vector $\mathbf{x} \in \mathbb{C}^n$ and matrix $\mathbf{A} \in \mathbb{C}^{m \times n}$*

$$\|\mathbf{A}\mathbf{x}\|_2 \leq \|\mathbf{A}\|_F \|\mathbf{x}\|_2. \tag{10.16}$$

**Proof.** We apply the Cauchy–Buniakowsky–Schwarz inequality to justify it:

$$\|\mathbf{A}\mathbf{x}\|_2^2 = \sum_{i=1}^{n} |\mathbf{A}_{i*}\mathbf{x}|^2 \leq \sum_{i=1}^{n} \|\mathbf{A}_{i*}\|_2^2 \|\mathbf{x}\|_2^2 = \|\mathbf{A}\|_F^2 \|\mathbf{x}\|_2^2.$$

$\square$

> *This property is generally not true for every vector norm applied to matrices. Let's consider the maximum norm, which we can transfer to matrices as follows:*
> $$\|\mathbf{A}\|_{\max} = \max_{i,j} \{|a_{ij}|\}.$$

The maximum norm of the matrix $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ is 2. Between the norm of the product of this matrix with different vectors and the product of the norms, all three relations can hold. For example, in the products

$$\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$$

the relations $2 \cdot 1 > 1$, $2 \cdot 1 = 2$, $2 \cdot 1 < 3$ are satisfied for the norms.

> ▶ An immediate consequence of property (10.16) is that
> $$\|\mathbf{AB}\|_F \le \|\mathbf{A}\|_F \|\mathbf{B}\|_F$$
> is true for any matrices $\mathbf{A} \in \mathbb{C}^{m\times n}$ and $\mathbf{B} \in \mathbb{C}^{n\times k}$. This property will appear in the general definition of the matrix norm.

### The general concept of matrix norm

Vector norms can also be applied to matrices. However, many books – and we will do the same – only consider a norm as a matrix norm if, besides the axioms of a vector norm, it also satisfies one regarding matrix multiplication.

**Definition 10.21 (Matrix norm).** *Let $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$. A real-valued function $\|.\|$ defined on matrices over $\mathbb{K}$ is a matrix norm if for arbitrary matrices $\mathbf{A}$ and $\mathbf{B}$ of the same size and multiplicable matrices $\mathbf{A}$ and $\mathbf{C}$*

1. *$\|\mathbf{A}\| \ge 0$, and $\|\mathbf{A}\| = 0$ holds if and only if $\mathbf{A} = \mathbf{O}$,*
2. *$\|c\mathbf{A}\| = |c|\,\|\mathbf{A}\|$,*
3. *$\|\mathbf{A} + \mathbf{B}\| \le \|\mathbf{A}\| + \|\mathbf{B}\|$,*
4. *$\|\mathbf{AC}\| \le \|\mathbf{A}\|\,\|\mathbf{C}\|$.*

According to the previous discussion, therefore, the Frobenius norm is a matrix norm, while we do not consider the maximum norm a matrix norm.

**Definition 10.22.** *We say that the matrix norm $\|.\|_M$ and the vector norm $\|.\|_a$ are compatible or consistent if for any matrix $\mathbf{A}$ and vector $\mathbf{x}$ of appropriate dimension*

$$\|\mathbf{A}\mathbf{x}\|_a \le \|\mathbf{A}\|_M \|\mathbf{x}\|_a.$$

For example, according to (10.16), the Frobenius norm is compatible with the 2-norm.

### Induced norm

In this section, starting from vector norms, we arrive at new matrix norms.

**Definition 10.23 (Induced norm).** *Let $\|.\|$ be an arbitrary vector norm. Then the function defined by the equality*

$$\|\mathbf{A}\| = \max_{\|\mathbf{x}\|=1} \|\mathbf{A}\mathbf{x}\| \tag{10.17}$$

*is called the matrix norm induced by the vector norm.*

> ▶ It is customary to use the notation of the vector norm for the induced matrix norm, so for example the definition of the matrix $p$-norm is
> $$\|\mathbf{A}\|_p = \max_{\|\mathbf{x}\|_p=1} \|\mathbf{A}\mathbf{x}\|_p.$$

> ▶ If we interpret the above definition for a linear mapping instead of a matrix, we speak of an *operator norm*.

> ▶ It follows from the equivalence of norms that the unit sphere is bounded and closed in any norm. Thus the continuous function $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ defined on it has a maximum and a minimum, so the definition is meaningful.

> ▶ Also taking into account the previous remark, it is easy to justify that the definition can be rewritten in the following equivalent forms:
> $$\|\mathbf{A}\| = \sup_{\|\mathbf{x}\|\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \max_{\|\mathbf{x}\|\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}. \tag{10.18}$$
> This follows from the fact that with the notation $\mathbf{y} = \mathbf{x}/\|\mathbf{x}\|$
> $$\|\mathbf{A}\| = \max_{\|\mathbf{y}\|=1} \|\mathbf{A}\mathbf{y}\| = \max_{\mathbf{x}\ne 0} \left\| \mathbf{A}\left(\frac{\mathbf{x}}{\|\mathbf{x}\|}\right) \right\| = \max_{\mathbf{x}\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

> ▶ We still have to justify that the name matrix norm is indeed justified for this function.

**Theorem 10.24 (Properties of the induced norm).** *Let $\|.\|$ be an arbitrary vector norm, then the matrix function defined by formula (10.17)*

a) *is a matrix norm, that is, all four conditions of Definition 10.21 hold,*

b) *is compatible with the inducing vector norm, that is*

$$\|\mathbf{A}\mathbf{x}\| \le \|\mathbf{A}\|\,\|\mathbf{x}\|.$$

**Proof.** First we justify compatibility. If $\mathbf{x} = \mathbf{0}$, then the inequality is satisfied, since there is $\mathbf{0}$ on both sides. If $\mathbf{x} \ne \mathbf{0}$, then according to (10.18)

$$\|\mathbf{A}\| = \max_{\mathbf{z}\ne 0} \frac{\|\mathbf{A}\mathbf{z}\|}{\|\mathbf{z}\|} \ge \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|},$$

that is $\|\mathbf{A}\mathbf{x}\| \le \|\mathbf{A}\|\,\|\mathbf{x}\|$.

Among the four conditions defining the matrix norm, the first three are obviously satisfied. To justify the fourth, let $\mathbf{y}$ be a vector at which $\mathbf{x} \mapsto \|\mathbf{AB}\mathbf{x}\|$ takes its maximum on the unit sphere, that is, for which $\|\mathbf{y}\| = 1$, and

$$\|\mathbf{AB}\mathbf{y}\| = \max_{\|\mathbf{x}\|=1} \|\mathbf{AB}\mathbf{x}\| = \|\mathbf{AB}\|.$$

Then by applying compatibility twice

$$\|\mathbf{AB}\| = \|\mathbf{AB}\mathbf{y}\| \le \|\mathbf{A}\|\,\|\mathbf{B}\mathbf{y}\| \le \|\mathbf{A}\|\,\|\mathbf{B}\|\,\|\mathbf{y}\| = \|\mathbf{A}\|\,\|\mathbf{B}\|. \qquad \square$$

### The 1-, 2- and ∞-norms for matrices

Among the $p$-norms defined above, the 1-, 2- and ∞-norms are also the most important for matrices. There is a simpler method than the definition for calculating them.

**Theorem 10.25 (Calculation of the 1-, 2- and ∞-norms).** *Let $\mathbf{A} \in \mathbb{C}^{m\times n}$, then*

$$\|\mathbf{A}\|_1 = \max_j \sum_{i=1}^{n} |a_{ij}| = \text{largest absolute column sum,} \tag{10.19}$$

$$\|\mathbf{A}\|_\infty = \max_i \sum_{j=1}^{m} |a_{ij}| = \text{largest absolute row sum,} \tag{10.20}$$

$$\|\mathbf{A}\|_2 = \|\mathbf{A}^\mathsf{H}\|_2 = \max_{\|\mathbf{x}\|_2=1} \max_{\|\mathbf{y}\|_2=1} |\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| = \sigma_1, \tag{10.21}$$

*where $\sigma_1$ is the largest singular value of $\mathbf{A}$, that is, the square root of the largest eigenvalue of $\mathbf{A}^\mathsf{H}\mathbf{A}$. If the matrix $\mathbf{A} \in \mathbb{C}^{n\times n}$ is invertible, then*

$$\left\|\mathbf{A}^{-1}\right\|_2 = \max_{\|\mathbf{x}\|_2=1} \frac{1}{\|\mathbf{A}\mathbf{x}\|_2} = \frac{1}{\min\limits_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2} = \frac{1}{\sigma_n}, \tag{10.22}$$

*where $\sigma_n$ is the smallest (positive) singular value of $\mathbf{A}$.*

**Proof.** $p = 1$: For any vector $\mathbf{x}$, if $\|\mathbf{x}\|_1 = 1$, then due to the triangle inequality for scalars

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^{m} \left| \sum_{j=1}^{n} a_{ij}x_j \right| \le \sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}||x_j| = \sum_{j=1}^{n} |x_j| \sum_{i=1}^{m} |a_{ij}| \\
&\le \left( \sum_{j=1}^{n} |x_j| \right) \max_j \sum_{i=1}^{m} |a_{ij}| = \max_j \sum_{i=1}^{m} |a_{ij}|
\end{aligned}$$

This maximum can also be reached, because if the sum of the absolute values is the largest in the $k$-th column, then $\|\mathbf{A}\mathbf{e}_k\|_1 = \max_j \sum_{i=1}^{m} |a_{ij}|$.

$p = \infty$: For any vector $\mathbf{x}$, if $\|\mathbf{x}\|_\infty = 1$

$$\|\mathbf{A}\mathbf{x}\|_\infty = \max_i \left| \sum_{j=1}^{n} a_{ij}x_j \right| \le \max_i \sum_{j=1}^{n} |a_{ij}||x_j| \le \max_i \sum_{j=1}^{n} |a_{ij}|.$$

This maximum can also be reached, because if the sum of the absolute values is the largest in the $k$-th row, then for the vector

$$\mathbf{x} = \left( \frac{\overline{a_{k1}}}{|a_{k1}|}, \frac{\overline{a_{k2}}}{|a_{k2}|}, \dots, \frac{\overline{a_{kn}}}{|a_{kn}|} \right)$$

$\|\mathbf{x}\|_\infty = 1$ and $\|\mathbf{A}\mathbf{x}\|_\infty = \max_i \sum_{j=1}^{n} |a_{ij}|$.

$p = 2$: According to the CBS inequality $|\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| \le \|\mathbf{y}\|_2 \|\mathbf{A}\mathbf{x}\|_2$, thus

$$\max_{\|\mathbf{x}\|_2=1} \max_{\|\mathbf{y}\|_2=1} |\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| \le \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2 = \|\mathbf{A}\|_2.$$

Thus it only needs to be shown that there exist unit vectors $\mathbf{x}_0$ and $\mathbf{y}_0$ for which equality holds in the previous inequality. Let $\mathbf{x}_0$ be the vector at which $\|\mathbf{A}\mathbf{x}\|_2$ gives the maximum, and $\mathbf{y}_0$ be its normalized image, that is

$$\|\mathbf{A}\mathbf{x}_0\|_2 = \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2 = \|\mathbf{A}\|_2, \quad \mathbf{y}_0 = \frac{\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\mathbf{x}_0\|_2} = \frac{\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\|_2}.$$

Then

$$\mathbf{y}_0^\mathsf{H}\mathbf{A}\mathbf{x}_0 = \frac{\mathbf{x}_0^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\|_2} = \frac{\|\mathbf{A}\mathbf{x}_0\|_2^2}{\|\mathbf{A}\|_2} = \frac{\|\mathbf{A}\|_2^2}{\|\mathbf{A}\|_2} = \|\mathbf{A}\|_2.$$

To justify $\|\mathbf{A}\|_2 = \sigma_1$, we look for the following maximum:

$$\|\mathbf{A}\|_2^2 = \max_{\mathbf{x}\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|_2^2}{\|\mathbf{x}\|_2^2} = \max_{\mathbf{x}\ne 0} \frac{\mathbf{x}^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}}{\mathbf{x}^\mathsf{H}\mathbf{x}}.$$

Since $\mathbf{A}^\mathsf{H}\mathbf{A}$ is self-adjoint, therefore there exists an orthonormal basis consisting of its eigenvectors. Let its vectors be $\mathbf{v}_1, \dots, \mathbf{v}_n$, the corresponding eigenvalues $\lambda_1, \dots, \lambda_n$, among which let $\lambda_1$ be the largest. Then on the one hand

$$\lambda_1 = \frac{\mathbf{v}_1^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{v}_1}{\mathbf{v}_1^\mathsf{H}\mathbf{v}_1},$$

on the other hand for any vector $\mathbf{x} = \sum_j c_j \mathbf{v}_j \ne \mathbf{0}$

$$\lambda_1 - \frac{\mathbf{x}^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}}{\mathbf{x}^\mathsf{H}\mathbf{x}} = \lambda_1 - \frac{\sum_{j=1}^{n} \lambda_j c_j^2}{\sum_{j=1}^{n} c_j^2} = \frac{\sum_{j=1}^{n} (\lambda_1 - \lambda_j)c_j^2}{\sum_{j=1}^{n} c_j^2} \ge 0,$$

therefore $\|\mathbf{A}\|_2^2 = \lambda_1$, that is $\|\mathbf{A}\|_2 = \sqrt{\lambda_1} = \sigma_1$.

For $p = 2$, the norm of $\mathbf{A}^{-1}$ can also be simply calculated:

$$\begin{aligned}
\frac{1}{\min\limits_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2} &= \max_{\|\mathbf{x}\|_2=1} \frac{1}{\|\mathbf{A}\mathbf{x}\|_2} = \max_{\mathbf{y}\ne 0} \frac{1}{\left\| \mathbf{A}\frac{\mathbf{A}^{-1}\mathbf{y}}{\|\mathbf{A}^{-1}\mathbf{y}\|_2} \right\|_2} = \max_{\mathbf{y}\ne 0} \frac{\|\mathbf{A}^{-1}\mathbf{y}\|_2}{\|\mathbf{y}\|_2} \\
&= \max_{\mathbf{y}\ne 0} \left\| \mathbf{A}^{-1}\left(\frac{\mathbf{y}}{\|\mathbf{y}\|_2}\right) \right\|_2 = \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}^{-1}\mathbf{x}\| = \|\mathbf{A}^{-1}\|_2.
\end{aligned}$$

Since the singular values of $\mathbf{A}^{-1}$ are the reciprocals of the singular values of $\mathbf{A}$, therefore the largest singular value of $\mathbf{A}^{-1}$ is the reciprocal of the smallest singular value of $\mathbf{A}$. $\square$

> ▶ Another customary name for the 1-, the ∞- and the 2-norm is: *column norm*, *row norm* and *spectral norm*.

### Low-rank approximation

An interesting and useful application of the singular value decomposition is the result regarding the approximation of matrices by a given low-rank matrix.

**Theorem 10.26 (Low-rank approximation theorem – Eckart–Young theorem).** *Let $\mathbf{A}$ be a matrix of rank $r$. Let its $k$-th singular value be denoted by $\sigma_k$, the corresponding right and left singular vectors by $\mathbf{v}_k$ and $\mathbf{u}_k$. Let*

$$\mathbf{A}_k = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^\mathsf{T}.$$

*Then $\mathbf{A}_k$ is the best at most $k$-rank approximation of the matrix $\mathbf{A}$ in both Frobenius and 2-norm, that is*

$$\min_{\mathrm{r}(\mathbf{B})\le k} \|\mathbf{A} - \mathbf{B}\|_F = \|\mathbf{A} - \mathbf{A}_k\|_F = \sqrt{\sum_{i=k+1}^{r} \sigma_i^2},$$

$$\min_{\mathrm{r}(\mathbf{B})\le k} \|\mathbf{A} - \mathbf{B}\|_2 = \|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}.$$

**Proof.** We justify the statement regarding the 2-norm. Suppose that $\mathrm{r}(\mathbf{B}) \le k$, thus $\mathcal{N}(\mathbf{B}) \ge n - k$. Let $\mathcal{V} = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_{k+1})$ be the subspace spanned by the right singular vectors corresponding to the largest $k + 1$ singular values. If $k \ge r$, then we are done, the best approximation of $\mathbf{A}$ is given by itself, and then $\sigma_{k+1} = 0$. It can therefore be assumed that $r > k$, thus $\dim \mathcal{N}(\mathbf{B}) + \dim \mathcal{V} \ge (n - k) + (k + 1) = n + 1 > n$, therefore $\mathcal{N}(\mathbf{B}) \cap \mathcal{V}$ is not empty. Let $\mathbf{w} \in \mathcal{N}(\mathbf{B}) \cap \mathcal{V}$, $\|\mathbf{w}\|_2 = 1$. Then

$$\begin{aligned}
\|\mathbf{A} - \mathbf{B}\|_2^2 &\ge \|(\mathbf{A} - \mathbf{B})\mathbf{w}\|_2^2 = \|\mathbf{A}\mathbf{w}\|_2^2 \\
&= \sum_{i=1}^{k+1} \sigma_i^2 |\mathbf{v}_i^\mathsf{T}\mathbf{w}|^2 \ge \sigma_{k+1}^2 \sum_{i=1}^{k+1} |\mathbf{v}_i^\mathsf{T}\mathbf{w}|^2 = \sigma_{k+1}^2
\end{aligned}$$

On the other hand $\|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}$, thus $\|\mathbf{A} - \mathbf{B}\|_2 \le \|\mathbf{A} - \mathbf{A}_k\|_2$. $\square$

### Problems

**10.5.** Calculate the specified norms of the following vectors!
1. $\mathbf{x} = (\sqrt{3} - i, 6i, 3)$, $\mathbf{y} = (0.1, -0.2, -0.2)$, $p = 1, 2, \infty$;
2. $(1, 2, 2)$, $(2, 3, 6)$, $(1, 4, 8)$, $(4, 4, 7)$, $p = 2$;
3. $(i, 2, \sqrt{2} - \sqrt{2}i, -4i)$, $p = 1, 2, \infty$;
4. $(3, 4, 5)$, $(11, 12, 13, 14)$, $p = 3$;
5. $\|(95800, 217519, 414560)\|_4$, $\|(27, 84, 110, 133)\|_5$.

**10.6.** Show that points 1.–3. of Definition 10.15 and points $1'$–$3'$ of the following remark are equivalent.

**10.7.** Show that the 1-norm is a norm.

**10.8.** Show that the ∞-norm is a norm.

**10.9.** Show that $\|\mathbf{x}\|_p \le c \|\mathbf{x}\|_q$, where $c$ can be read from the following table, where the values of $p$ are in the headers of the rows, and the values of $q$ are in the headers of the columns.

|  | 1 | 2 | ∞ |
|---|---|---|---|
| 1 | 1 | $\sqrt{n}$ | $n$ |
| 2 | 1 | 1 | $\sqrt{n}$ |
| ∞ | 1 | 1 | 1 |

**10.10.** Show that every norm is a continuous function.

**10.11.** Show that if $\|.\|$ is a norm, and $A$ is an injective linear mapping, then the mapping $\mathbf{x} \mapsto \|A\mathbf{x}\|$ is also a norm.

**10.12.** Show that if $\|.\|$ is a norm, then the function

$$\mathbf{x} \mapsto \sup_{\mathbf{y}\ne 0} \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{y}\|}$$

is also one. This norm is also customarily called the dual norm.

**10.13. Hölder's inequality.** Justify that for any vectors $\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$ and reals $p, q \ge 1$

$$\sum_{i=1}^{\infty} |x_i y_i| \le \|\mathbf{x}\|_p \|\mathbf{y}\|_q, \quad \text{where } \frac{1}{p} + \frac{1}{q} = 1. \tag{10.23}$$

We suggest the following steps:
1. Justify that for $a, b > 0$, $p, q \ge 1$ and $\frac{1}{p} + \frac{1}{q} = 1$

$$ab \le \frac{a^p}{p} + \frac{b^q}{q}.$$

To justify this, determine the area of the following two shaded regions belonging to the function $f : x \mapsto x^{p-1}$!

*Figure 10.1. Graph of the function $f : x \mapsto x^{p-1}$ with shaded areas corresponding to the axis values $a$ and $b$.*

2. In the previous inequality, perform the substitutions

$$a = \frac{|x_i|}{\|\mathbf{x}\|_p}, \quad b = \frac{|y_i|}{\|\mathbf{y}\|_q}$$

and then with this justify the form of Hölder's inequality (10.23).

3. Finally, let us also prove the (10.12) form of the Hölder inequality.

**10.14. Minkowski inequality.** Prove that for any vectors $\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$ and real $p \ge 1$,

$$\|\mathbf{x} + \mathbf{y}\|_p \le \|\mathbf{x}\|_p + \|\mathbf{y}\|_p. \tag{10.24}$$

The following steps are recommended:
1. Prove, then apply to the numbers $x_i, y_i$ the inequality

$$|a + b|^p = |a + b||a + b|^{p/q} \le |a||a + b|^{p/q} + |b||a + b|^{p/q}$$

, where $1/p + 1/q = 1$.

2. Apply the Hölder inequality to the expression $\sum_{i=1}^{n} |x_i||x_i + y_i|^{p/q}$.

**10.15.** Show that the $p$-norm is a norm.

**10.16.** Calculate the Frobenius, 1-, 2-, and ∞-norms of the following matrices!

$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 3 & 0 \\ 4 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & -2 \\ 1 & 2 \end{bmatrix}.$$

**10.17.** Calculate the Frobenius, 1-, 2-, and ∞-norms of the following matrices!

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 \\ 4 & 0 & 0 \\ 0 & 0 & 8 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 2 & 2 & -1 \\ -1 & 2 & 2 \\ 2 & -1 & 2 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & 2 & 1 \\ 1 & 2 & 2 \\ 2 & 1 & 2 \end{bmatrix}.$$

**10.18.** Construct matrices $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ such that for their max norms, $\|\mathbf{AB}\|_{\max} < \|\mathbf{A}\|_{\max} \|\mathbf{B}\|_{\max}$, $\|\mathbf{AC}\|_{\max} = \|\mathbf{A}\|_{\max} \|\mathbf{C}\|_{\max}$, and $\|\mathbf{BC}\|_{\max} > \|\mathbf{B}\|_{\max} \|\mathbf{C}\|_{\max}$ hold.

**10.19.** Prove that for every induced matrix norm $\|.\|$, $\|\mathbf{I}\| = 1$, while $\|\mathbf{I}\|_F = \sqrt{n}$.

**10.20.** Prove that for an arbitrary matrix norm

$$\rho(\mathbf{A}) \le \|\mathbf{A}\|,$$

where $\rho(\mathbf{A})$ is the spectral radius of $\mathbf{A}$.

**10.21.** Prove that if $\mathbf{A}$ is normal ($\mathbf{A}^\mathsf{H}\mathbf{A} = \mathbf{A}\mathbf{A}^\mathsf{H}$), then $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.

### Solutions

**10.1.** We need to verify that

a) the equality holds,

b) the matrices $\mathbf{U}$ and $\mathbf{V}$ are orthogonal, $\boldsymbol{\Sigma}$ is diagonal,

c) for the vectors $\mathbf{u}_1 = (1/\sqrt{2}, 1/\sqrt{2})$ and $\mathbf{v}_1 = (1/\sqrt{2}, 1/\sqrt{2}, 0)$, $\mathbf{A}\mathbf{v}_1 = 2\mathbf{u}_1$.

These are all obvious, meaning the first decomposition is a singular value decomposition. Since $\mathrm{r}(\mathbf{A}) = 1$, by keeping the first column of $\mathbf{U}$ and the first row of $\mathbf{V}^\mathsf{T}$, along with the top-left element of $\boldsymbol{\Sigma}$, we indeed obtain the second form.

**10.2.** $\mathbf{A}^\mathsf{T}\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$, whose characteristic polynomial is $\lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$. The eigenvalues of $\mathbf{A}^\mathsf{T}\mathbf{A}$ are 3 and 1, so the singular values of $\mathbf{A}$ are $\sqrt{3}$ and 1. The corresponding eigenvectors of unit length are $\mathbf{v}_1 = (1/\sqrt{2}, 1/\sqrt{2})$, $\mathbf{v}_2 = (-1/\sqrt{2}, 1/\sqrt{2})$. Thus

$$\mathbf{V} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}, \quad \boldsymbol{\Sigma} = \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}.$$

Based on the relation $\mathbf{u}_i = \mathbf{A}\mathbf{v}_i/\sigma_i$, we have $\mathbf{u}_1 = \frac{1}{\sqrt{6}}(1, 2, 1)$, $\mathbf{u}_2 = \frac{1}{\sqrt{3}}(1, 0, -1)$. Similar to the previous example, using the formula $\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2$ also works, but now let's rather calculate by finding the basis of the null space of $\mathbf{A}^\mathsf{T}$. To determine the null space, we need to solve the homogeneous linear system of equations with the coefficient matrix $\mathbf{A}^\mathsf{T} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$. This also yields $\mathbf{u}_3 = \frac{1}{\sqrt{3}}(1, -1, 1)$. (Here we could also choose the opposite of this vector, because $\mathbf{A}\mathbf{u}_3 = \mathbf{0}$, meaning the sign does not matter.)

$$\mathbf{U} = \begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} & 1/\sqrt{3} \\ 2/\sqrt{6} & 0 & -1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & 1/\sqrt{3} \end{bmatrix}.$$

Thus, the singular value decomposition is

$$\begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} & 1/\sqrt{3} \\ 2/\sqrt{6} & 0 & -1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & 1/\sqrt{3} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}.$$

**10.3.** The characteristic polynomial of the matrix $\mathbf{B}^\mathsf{T}\mathbf{B}$ is $-\lambda^3 + 4\lambda^2 - 3\lambda = -(\lambda - 3)(\lambda - 1)\lambda$, so its eigenvalues are 3, 1, and 0. The singular values are $\sqrt{3}$ and 1. To calculate the eigenvectors, we must compute with 3-dimensional vectors. We might be better off trying the matrix $\mathbf{B}\mathbf{B}^\mathsf{T}$ instead. Since $\mathbf{B}\mathbf{B}^\mathsf{T} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$, the characteristic polynomial is $\lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$. The singular values are therefore $\sqrt{3}$ and 1, consistent with the previous calculation. The corresponding eigenvectors of unit length now give the columns of $\mathbf{U}_1$ rather than $\mathbf{V}_1$: $\mathbf{u}_1 = (1/\sqrt{2}, 1/\sqrt{2})$, $\mathbf{u}_2 = (-1/\sqrt{2}, 1/\sqrt{2})$. Using the formula $\mathbf{v}_i = \mathbf{A}^\mathsf{T}\mathbf{u}_i/\sigma_i$, the matrix $\mathbf{V}$ can also be determined. Thus

$$\mathbf{B} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 2/\sqrt{6} & 1/\sqrt{6} & 1/\sqrt{6} \\ 0 & 1/\sqrt{2} & -1/\sqrt{2} \\ -1/\sqrt{3} & 1/\sqrt{3} & 1/\sqrt{3} \end{bmatrix}$$

is the singular value decomposition of the matrix $\mathbf{B}$.

**10.4.** In exercise 10.2, we determined the reduced singular value decomposition of the matrix $\mathbf{A}$:

$$\mathbf{A} = \begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} \\ 2/\sqrt{6} & 0 \\ 1/\sqrt{6} & -1/\sqrt{2} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix},$$

from which the pseudoinverse is

$$\begin{aligned}
\mathbf{A}^+ &= \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} 1/\sqrt{3} & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1/\sqrt{6} & 2/\sqrt{6} & 1/\sqrt{6} \\ 1/\sqrt{2} & 0 & -1/\sqrt{2} \end{bmatrix} \\
&= \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix}.
\end{aligned}$$

**10.5.**

a) $\|\mathbf{x}\|_1 = 11$, $\|\mathbf{x}\|_2 = 7$, $\|\mathbf{x}\|_\infty = 6$, $\|\mathbf{y}\|_1 = 0.5$, $\|\mathbf{y}\|_2 = 0.3$, $\|\mathbf{x}\|_\infty = 0.2$.

b) These are vectors formed from so-called Pythagorean quadruples, in which the sum of the squares of the coordinates is a square number, so their 2-norm is an integer. The norms are 3, 7, 9, 9.

c) 9, 5, 4;

d) 6, 20;

e) these two examples for the values $p = 4$ and $p = 5$ are the smallest $(p - 1)$-dimensional positive integer vectors whose $p$-norm is an integer: $\|(95800, 217519, 414560)\|_4 = 422481$, $\|(27, 84, 110, 133)\|_5 = 144$. Euler even conjectured that no such vectors existed.

**10.16.** $\|\mathbf{A}\|_F = 5$, $\|\mathbf{A}\|_1 = 6$, $\|\mathbf{A}\|_2 = 5$, $\|\mathbf{A}\|_\infty = 6$. $\|\mathbf{B}\|_F = 5$, $\|\mathbf{B}\|_1 = 7$, $\|\mathbf{B}\|_2 = 5$, $\|\mathbf{B}\|_\infty = 4$. $\|\mathbf{C}\|_F = \sqrt{13}$, $\|\mathbf{C}\|_1 = 4$, $\|\mathbf{C}\|_2 = 3$, $\|\mathbf{C}\|_\infty = 4$.

**10.17.** $\|\mathbf{A}\|_F = 9$, $\|\mathbf{A}\|_1 = 8$, $\|\mathbf{A}\|_2 = 8$, $\|\mathbf{A}\|_\infty = 8$. $\|\mathbf{B}\|_F = 3\sqrt{3}$, $\|\mathbf{B}\|_1 = 5$, $\|\mathbf{B}\|_2 = 3$, $\|\mathbf{B}\|_\infty = 5$. $\|\mathbf{C}\|_F = 3\sqrt{3}$, $\|\mathbf{C}\|_1 = 5$, $\|\mathbf{C}\|_2 = 5$, $\|\mathbf{C}\|_\infty = 5$.

**10.18.** Consider, for example, the following three matrices:

$$\mathbf{A} = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 \\ 2 & 2 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}.$$

In each of these, 2 is the maximum of the elements, so the product of the max norms of any two matrices is 4. Their products:

$$\mathbf{AB} = \begin{bmatrix} 0 & 2 \\ 2 & 2 \end{bmatrix}, \quad \mathbf{AC} = \begin{bmatrix} 2 & 4 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{BC} = \begin{bmatrix} 0 & 1 \\ 2 & 6 \end{bmatrix}.$$

The maximums of their elements are respectively 2, 4, 6.

**10.20.** If $\lambda$ is an arbitrary eigenvalue of $\mathbf{A}$, and $\mathbf{x}$ is one of its corresponding eigenvectors, i.e., $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, then

$$\mathbf{A}\mathbf{x}\mathbf{x}^\mathsf{H} = \lambda\mathbf{x}\mathbf{x}^\mathsf{H} \rightsquigarrow \|\mathbf{A}\|\,\|\mathbf{x}\mathbf{x}^\mathsf{H}\| \ge \|\mathbf{A}\mathbf{x}\mathbf{x}^\mathsf{H}\| = |\lambda|\,\|\mathbf{x}\mathbf{x}^\mathsf{H}\|,$$

and since $\mathbf{x} \ne \mathbf{0}$, thus $\mathbf{x}\mathbf{x}^\mathsf{H} \ne \mathbf{O}$, that is $\|\mathbf{x}\mathbf{x}^\mathsf{H}\| \ne 0$, which means that dividing by it yields $|\lambda| \le \|\mathbf{A}\|$. This holds for every eigenvalue, and therefore for the spectral radius as well.

**10.21.** If $\mathbf{A}$ is normal, then it is unitarily similar to a diagonal matrix $\mathbf{D}$, meaning $\mathbf{A} = \mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H}$ with some unitary matrix $\mathbf{Q}$. In this case, $\mathbf{A}^\mathsf{H}\mathbf{A} \sim \mathbf{D}^\mathsf{H}\mathbf{D}$ also holds, since $\mathbf{A}^\mathsf{H}\mathbf{A} = (\mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H})^\mathsf{H}(\mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H}) = \mathbf{Q}\mathbf{D}^\mathsf{H}\mathbf{D}\mathbf{Q}^\mathsf{H}$, so the eigenvalues of $\mathbf{A}^\mathsf{H}\mathbf{A}$ and $\mathbf{D}^\mathsf{H}\mathbf{D}$ coincide. On the other hand, every eigenvalue of $\mathbf{D}^\mathsf{H}\mathbf{D}$ is of the form $|\lambda|^2$, where $\lambda$ is some eigenvalue of $\mathbf{A}$. In summary: since $\|\mathbf{A}\|_2 = \sigma_1$, which is the square root of the largest eigenvalue of $\mathbf{A}^\mathsf{H}\mathbf{A}$, and this in turn equals the absolute value of the largest eigenvalue of $\mathbf{A}$, i.e., the spectral radius $\rho(\mathbf{A})$.

# 11. Jordan Normal Form

The Jordan normal form of square matrices is an important classification tool, but numerical algorithms rarely use it due to its instability.

## Normal form and invariant subspace

> *Every matrix is similar to an "almost diagonal" matrix, which has the eigenvalues on its main diagonal, zeros or ones above it, and zeros everywhere else.*

### Invariant subspaces

The diagonalizability of a linear transformation on a vector space is equivalent to the space being representable as a direct sum of eigenspaces. We will generalize this statement to invariant subspaces.

The reflection of the 3-dimensional space onto one of its planes is a linear transformation whose eigenspaces are the plane and the line perpendicular to it, and the space is the direct sum of these two eigenspaces. In the case of a $60^\circ$ rotation of the space around a line, there is only one eigenspace, the axis of rotation, yet the space can still be represented as the direct sum of this axis and the plane perpendicular to it. What characterizes these two subspaces is that the rotation maps them into themselves, meaning both are invariant under the rotation.

**Definition 11.1 (Invariant subspace).** *We say that the subspace $\mathcal{U} \le \mathcal{V}$ is an invariant subspace of the linear transformation $L : \mathcal{V} \to \mathcal{V}$ (of the matrix $\mathbf{L}$), or $\mathcal{U}$ is an $L$-invariant subspace of $\mathcal{V}$, if for every vector $\mathbf{x} \in \mathcal{U}$, $L\mathbf{x} \in \mathcal{U}$ ($\mathbf{L}\mathbf{x} \in \mathcal{U}$).*

To determine whether a subspace is invariant, it is sufficient to check if $L$ maps the elements of a basis of the subspace into the subspace (see exercise 11.1). For example, the invariant subspaces of the matrix

$$\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

and of its corresponding mapping $(x, y, z) \mapsto (x + y, y, z)$ are $\{\mathbf{0}\}$, $\operatorname{span}(\mathbf{e}_1)$, $\operatorname{span}(\mathbf{e}_2)$, $\operatorname{span}(\mathbf{e}_1, \mathbf{e}_2)$, $\operatorname{span}(\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3)$.

### Invariant subspaces and block matrices

Let us examine the matrices of linear transformations that possess an invariant subspace, written in an appropriate basis.

**Theorem 11.2 (Block matrices and invariant subspaces).** *Let $L : \mathcal{V} \to \mathcal{V}$ be a linear transformation, $\mathcal{U}, \mathcal{W} \le \mathcal{V}$ be subspaces, $\mathcal{V} = \mathcal{U} \oplus \mathcal{W}$ and let the basis $\mathcal{B}$ of the space $\mathcal{V}$ be the union of the basis $\mathcal{B}_\mathcal{U}$ of the subspace $\mathcal{U}$ and the basis $\mathcal{B}_\mathcal{W}$ of the subspace $\mathcal{W}$. If the subspace $\mathcal{U}$ is $L$-invariant, then the form of the matrix $L$ is*

$$[L]_\mathcal{B} = \begin{bmatrix} \mathbf{U} & * \\ \mathbf{O} & * \end{bmatrix},$$

*if both $\mathcal{U}$ and $\mathcal{W}$ are $L$-invariant subspaces, then*

$$[L]_\mathcal{B} = \begin{bmatrix} \mathbf{U} & \mathbf{O} \\ \mathbf{O} & \mathbf{W} \end{bmatrix},$$

*where $\mathbf{U}$ is the matrix of $L$ restricted to $\mathcal{U}$, and $\mathbf{W}$ is the matrix of $L$ restricted to $\mathcal{W}$, with respect to the basis of the subspace, i.e., $\mathbf{U} = [L|_\mathcal{U}]_{\mathcal{B}_\mathcal{U}}$, $\mathbf{W} = [L|_\mathcal{W}]_{\mathcal{B}_\mathcal{W}}$.*

**Proof.** We prove the second statement; the first one follows similarly. Let $\mathcal{B}_\mathcal{U} = \{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ and $\mathcal{B}_\mathcal{W} = \{\mathbf{w}_1, \dots, \mathbf{w}_{n-r}\}$. If $\mathcal{U}$ and $\mathcal{W}$ are invariant subspaces, then $L\mathbf{u}_i \in \mathcal{U}$ and $L\mathbf{w}_j \in \mathcal{W}$, so

$$\begin{aligned}
L\mathbf{u}_i &= u_{i1}\mathbf{u}_1 + \dots + u_{ir}\mathbf{u}_r + 0\mathbf{w}_1 + \dots + 0\mathbf{w}_{n-r} \\
L\mathbf{w}_j &= 0\mathbf{u}_1 + \dots + 0\mathbf{u}_r + w_{j,r+1}\mathbf{w}_1 + \dots + w_{j,n}\mathbf{w}_{n-r}
\end{aligned}$$

where $i = 1, \dots, r$, $j = r + 1, \dots, n$. Thus

$$[L]_\mathcal{B} = \left[\begin{array}{cccc|cccc} u_{11} & u_{21} & \dots & u_{r1} & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \dots & \vdots & \vdots & \vdots & \dots & \vdots \\ u_{1r} & u_{2r} & \dots & u_{rr} & 0 & 0 & \dots & 0 \\ \hline 0 & 0 & \dots & 0 & w_{r+1,r+1} & w_{r+2,r+1} & \dots & w_{n,r+1} \\ \vdots & \vdots & \dots & \vdots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & 0 & w_{r+1,n} & w_{r+2,n} & \dots & w_{n,n} \end{array}\right],$$

which proves the statement. At the same time, the relationships $\mathbf{U} = [L|_\mathcal{U}]_{\mathcal{B}_\mathcal{U}}$, $\mathbf{W} = [L|_\mathcal{W}]_{\mathcal{B}_\mathcal{W}}$ can also be read from the above expressions. $\square$

> ▶ Its generalization is true: if $\mathcal{U}_1, \dots, \mathcal{U}_k$ are $L$-invariant subspaces of the vector space $\mathcal{V}$, and $\mathcal{V} = \mathcal{U}_1 \oplus \dots \oplus \mathcal{U}_k$, then the matrix of $L$ is block diagonal in any basis that is the union of the bases of these subspaces (see exercise 11.3).

> ▶ It is evident that for every block diagonal matrix, there exist invariant subspaces spanned by standard basis vectors whose direct sum is the entire space. For example, in the case of the following matrix $\mathbf{L}$:

$$\begin{bmatrix} 1 & 2 & 3 & 0 & 0 & 0 \\ 2 & 3 & 4 & 0 & 0 & 0 \\ 3 & 4 & 6 & 0 & 0 & 0 \\ 0 & 0 & 0 & 8 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 & 2 & 1 \end{bmatrix} \qquad \begin{aligned} \mathcal{U}_1 &= \{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}, \\ \mathcal{U}_2 &= \{\mathbf{e}_4\}, \\ \mathcal{U}_3 &= \{\mathbf{e}_5, \mathbf{e}_6\}, \\ \mathcal{V} &= \mathbb{R}^6 = \mathcal{U}_1 \oplus \mathcal{U}_2 \oplus \mathcal{U}_3. \end{aligned}$$

### Generalized eigenvectors and the Jordan block

We arrive at a generalization of diagonalizability if we find an invariant subspace of the same dimension as its algebraic multiplicity for every eigenvalue. These invariant subspaces will be the null spaces of the appropriate powers of $\mathbf{A} - \lambda\mathbf{I}$.

As an example, let us look for a $3 \times 3$ matrix that has only one eigenvalue, and its geometric multiplicity is 1. It is clear that in this case, the rank of $\mathbf{A} - \lambda\mathbf{I}$ can only be 2, because only then can the solution of $\mathbf{A} - \lambda\mathbf{I} = \mathbf{0}$ be 1-parametric. The matrix from example 8.15 satisfies this condition:

$$\mathbf{A} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}$$

Let us consider its effect on the vectors of the standard basis:

$$\begin{aligned}
\mathbf{A}\mathbf{e}_1 &= 4\mathbf{e}_1 & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_1 &= \mathbf{0} & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_1 &= \mathbf{0} \\
\mathbf{A}\mathbf{e}_2 &= \mathbf{e}_1 + 4\mathbf{e}_2, \text{ i.e.,} & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_2 &= \mathbf{e}_1, \text{ i.e.,} & (\mathbf{A} - 4\mathbf{I})^2\mathbf{e}_2 &= \mathbf{0}. \\
\mathbf{A}\mathbf{e}_3 &= \mathbf{e}_2 + 4\mathbf{e}_3 & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_3 &= \mathbf{e}_2 & (\mathbf{A} - 4\mathbf{I})^3\mathbf{e}_3 &= \mathbf{0}
\end{aligned}$$

We will illustrate the above effect of the matrix $\mathbf{A} - 4\mathbf{I}$ with the following diagram:

$$\mathbf{0} \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_1 \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_2 \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_3$$

The relationships $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{e}_k = \mathbf{0}$ lead to the following definition:

**Definition 11.3 (Generalized eigenvector).** *We call the vector $\mathbf{x} \ne \mathbf{0}$ a generalized eigenvector belonging to the eigenvalue $\lambda$ of the square matrix $\mathbf{A}$, if for some natural number $k$, $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x} = \mathbf{0}$. In the case of $k = 1$, $\mathbf{x}$ is an eigenvector. A sequence $\mathbf{x}_i$ ($i = 1, 2, \dots, k$) consisting of generalized eigenvectors is called a Jordan chain if $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_i = \mathbf{x}_{i-1}$ and $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_1 = \mathbf{0}$. A basis of a space consisting of disjoint Jordan chains is called a Jordan basis.*

> ▶ The definition of a Jordan chain is correct in the sense that if $\mathbf{x}_k$ is a generalized eigenvector for which $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x}_k = \mathbf{0}$, but $(\mathbf{A} - \lambda\mathbf{I})^{k-1}\mathbf{x}_k \ne \mathbf{0}$, then for every $i < k$, $\mathbf{x}_{k-i} = (\mathbf{A} - \lambda\mathbf{I})^i\mathbf{x}_k$ ($i = 1, \dots, k-1$) is also a generalized eigenvector. This follows from the fact that
> $$(\mathbf{A} - \lambda\mathbf{I})^{k-i}\mathbf{x}_{k-i} = (\mathbf{A} - \lambda\mathbf{I})^{k-i}(\mathbf{A} - \lambda\mathbf{I})^i\mathbf{x}_k = (\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x}_k = \mathbf{0}$$

> ▶ In the case of the matrix $\mathbf{A}$ examined above, the space does not have a basis consisting of eigenvectors, since the eigenspace is only 1-dimensional, but the standard basis vectors form a Jordan chain, which is simultaneously a Jordan basis.

**Proposition 11.4 (Subspace spanned by a Jordan chain).** *The subspace spanned by a Jordan chain of the matrix $\mathbf{A}$ is $\mathbf{A}$-invariant, and furthermore, the generalized eigenvectors belonging to an eigenvalue $\lambda$ form an $\mathbf{A}$-invariant subspace. A similar statement is true for the linear transformation $A$.*

**Proof.** Since $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_i = \mathbf{x}_{i-1}$, therefore $\mathbf{A}\mathbf{x}_i = \mathbf{x}_{i-1} + \lambda\mathbf{x}_i$, i.e., the image of a basis vector is in the subspace, which proves that the spanned subspace is $\mathbf{A}$-invariant.

If $c$ is an arbitrary constant, and $\mathbf{x}$ and $\mathbf{y}$ are generalized eigenvectors belonging to $\lambda$, i.e., $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x} = \mathbf{0}$ and $(\mathbf{A} - \lambda\mathbf{I})^\ell\mathbf{y} = \mathbf{0}$, then

$$(\mathbf{A} - \lambda\mathbf{I})^{\max(k,\ell)}(c\mathbf{x} + \mathbf{y}) = c\mathbf{0} + \mathbf{0} = \mathbf{0},$$

which proves the second statement. $\square$

**Example 11.5 (Finding a Jordan chain and Jordan basis).** *Each of the following two matrices has $(4 - x)^3$ as its characteristic polynomial. Find a Jordan basis for each of them and write the matrix in this basis!*

$$\mathbf{A} = \begin{bmatrix} 6 & -1 & -3 \\ -1 & 5 & 2 \\ 2 & -1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & -3 & 2 \\ 4 & 10 & -4 \\ 4 & 6 & 0 \end{bmatrix}.$$

**Solution.** For both matrices, $\lambda = 4$ is an eigenvalue with algebraic multiplicity three (verify!).

In the case of matrix $\mathbf{A}$, the eigenspace is 1-dimensional, spanned by the vector $\mathbf{x} = (1, -1, 1)$.

Since $(\mathbf{A} - 4\mathbf{I})^3 = \mathbf{O}$, but $(\mathbf{A} - 4\mathbf{I})^2 \ne \mathbf{O}$, there exists a vector $\mathbf{x}_3$ for which $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_3 \ne \mathbf{0}$. Since

$$(\mathbf{A} - 4\mathbf{I})^2 = \begin{bmatrix} -1 & 0 & 1 \\ 1 & 0 & -1 \\ -1 & 0 & 1 \end{bmatrix},$$

thus $(\mathbf{A} - 4\mathbf{I})^2(x, y, z) = (-x + z, x - z, -x + z)$, therefore any vector $\mathbf{x}_3 = (x, y, z)$ is suitable as long as $x \ne z$. For example, let $x = 1$, $y = z = 0$, meaning $\mathbf{x}_3 = (1, 0, 0)$. Since $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_3 \ne \mathbf{0}$, therefore $\mathbf{x}_2 = (\mathbf{A} - 4\mathbf{I})\mathbf{x}_3$ is necessarily a vector for which $(\mathbf{A} - 4\mathbf{I})\mathbf{x}_2 \ne \mathbf{0}$, but $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_2 = \mathbf{0}$, meaning the vector $\mathbf{x}_1 = (\mathbf{A} - 4\mathbf{I})\mathbf{x}_2$ is an eigenvector. In the case of the above vector $\mathbf{x}_3$, we obtain the following chain:

$$\mathbf{0} \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_1 = (-1, 1, -1) \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_2 = (2, -1, 2) \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_3 = (1, 0, 0)$$

The form of the matrix $\mathbf{A}$ in the basis $\{\mathbf{x}_1, \mathbf{x}_2, \mathbf{x}_3\}$ is

$$\mathbf{J} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix},$$

because $\mathbf{A}\mathbf{x}_3 = \mathbf{x}_2 + 4\mathbf{x}_3$, $\mathbf{A}\mathbf{x}_2 = \mathbf{x}_1 + 4\mathbf{x}_2$, $\mathbf{A}\mathbf{x}_1 = 4\mathbf{x}_1$, whose matrix product form is:

$$\mathbf{A}[\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

Thus $\mathbf{X}^{-1}\mathbf{A}\mathbf{X} = \mathbf{J}$, where $\mathbf{X} = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3]$, which is the transition matrix from the basis formed by the generalized eigenvectors to the standard basis. Checking with the concrete data:

$$\mathbf{J} = \mathbf{X}^{-1}\mathbf{A}\mathbf{X} = \begin{bmatrix} 0 & 2 & 1 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix} \begin{bmatrix} 6 & -1 & -3 \\ -1 & 5 & 2 \\ 2 & -1 & 1 \end{bmatrix} \begin{bmatrix} -1 & 2 & 1 \\ 1 & -1 & 0 \\ -1 & 2 & 0 \end{bmatrix} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

In the case of the matrix $\mathbf{C}$, the eigenspace is 2-dimensional, spanned by the vectors $(1,0,1)$ and $(0,2,3)$, so we are looking for two chains. Since $(\mathbf{C} - 4\mathbf{I})^2 = \mathbf{O}$, we can expect a chain of at most length two. We are looking for a vector $\mathbf{x}_2$ such that $(\mathbf{C} - 4\mathbf{I})\mathbf{x}_2 \neq \mathbf{0}$. Since

$$\mathbf{C} - 4\mathbf{I} = \begin{bmatrix} -2 & -3 & 2 \\ 4 & 6 & -4 \\ 4 & 6 & -4 \end{bmatrix},$$

therefore, e.g., the choice $x = 1$, $y = z = 0$, i.e., $\mathbf{x}_2 = (1,0,0)$ is suitable. $\mathbf{C} - 4\mathbf{I}$ maps this to the vector $\mathbf{x}_1 = (-2,4,4)$. This does not equal either of the vectors given above that span the eigenspace, but it is necessarily an eigenvector (just as a check: $\mathbf{x}_1 = (-2,4,4) = -2(1,0,1) + 2(0,2,3)$). The other Jordan chain, therefore, consists of a single vector, which can be any vector in the eigenspace independent of $\mathbf{x}_1$. For instance, the following two chains are suitable:

$$\mathbf{0} \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{x}_1 = (-2,4,4) \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{x}_2 = (1,0,0)$$

$$\mathbf{0} \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{y}_1 = (1,0,1)$$

The form of the matrix $\mathbf{C}$ in the basis $\{\mathbf{x}_1, \mathbf{x}_2, \mathbf{y}_1\}$ formed by the generalized eigenvectors is

$$\begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 4 \end{bmatrix},$$

because $\mathbf{C}\mathbf{x}_2 = \mathbf{x}_1 + 4\mathbf{x}_2$, $\mathbf{C}\mathbf{x}_1 = 4\mathbf{x}_1$, $\mathbf{C}\mathbf{y}_1 = 4\mathbf{y}_1$, whose matrix product form is:

$$\mathbf{C}[\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 4 \end{bmatrix}.$$

Similarly, the form of $\mathbf{A}$ in the basis $\{\mathbf{y}_1, \mathbf{x}_1, \mathbf{x}_2\}$ is

$$\begin{bmatrix} 4 & 0 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

$\square$

> *Jordan normal form*

Not every matrix can be brought to a diagonal form, but it can be brought to a form close to it. In this, non-zero elements can only be directly above the main diagonal, and even those are only 1s.

**Definition 11.6 (Jordan block).** *A square matrix which has identical $\lambda$ values on its main diagonal, 1s above it, and 0s everywhere else, i.e., whose form is*

$$\mathbf{J}_\lambda = \begin{bmatrix} \lambda & 1 & 0 & \dots & 0 & 0 \\ 0 & \lambda & 1 & \dots & 0 & 0 \\ 0 & 0 & \lambda & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & 0 & \dots & \lambda & 1 \\ 0 & 0 & 0 & \dots & 0 & \lambda \end{bmatrix} \tag{11.1}$$

*is called a* Jordan block. *A block diagonal matrix is called a* Jordan matrix *if its diagonal blocks are Jordan blocks.*

> *Every vector of the standard basis is a generalized eigenvector of a Jordan block, because for $i > 1$, $\mathbf{J}_\lambda \mathbf{e}_i = \lambda \mathbf{e}_i + \mathbf{e}_{i-1}$, i.e., $(\mathbf{J}_\lambda - \lambda\mathbf{I})\mathbf{e}_i = \mathbf{e}_{i-1}$, and thus these vectors form a single Jordan chain:*
>
> $$\mathbf{0} \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_1 \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_2 \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \dots \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_n$$

> *Even more is true: if a matrix is a block diagonal matrix consisting of Jordan blocks, then the standard basis consists of Jordan chains.*

**Theorem 11.7 (Jordan normal form).** *Any matrix in $\mathbb{C}^{n\times n}$ is similar to a block diagonal matrix consisting of Jordan blocks, i.e., for every matrix $\mathbf{A} \in \mathbb{C}^{n\times n}$ there exists a matrix $\mathbf{C}$ such that the form of the matrix $\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ is*

$$\mathbf{J} = \begin{bmatrix} \mathbf{J}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{J}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{J}_k \end{bmatrix} \tag{11.2}$$

*where $k$ is the maximum number of independent eigenvectors of $\mathbf{A}$, and $\mathbf{J}_i$ is a Jordan block for every $i$.*

> *The matrix $\mathbf{J}$ of the form (11.2) in the theorem is called the Jordan normal form of the matrix $\mathbf{A}$.*

> *Different Jordan blocks belong to different eigenvectors, but since multiple eigenvectors can belong to the same eigenvalue, an eigenvalue can appear on the main diagonal of several Jordan blocks.*

> *The decomposition of the form $\mathbf{A} = \mathbf{CJC}^{-1}$ is called the Jordan decomposition of $\mathbf{A}$.*

> *The theorem is about the similarity of matrices, so it can also be formulated for linear transformations: for every linear transformation defined on a finite-dimensional complex vector space $\mathcal{V}$, there is a basis in which its matrix is in Jordan normal form.*

The theorem can also be formulated for matrices over an arbitrary field, and for linear mappings as well:

**Theorem 11.8 (Jordan normal form).** *Let $\mathbb{F}$ be an arbitrary field, $\mathcal{V}$ a vector space over $\mathbb{F}$, and $A : \mathcal{V} \to \mathcal{V}$ an arbitrary linear transformation (for example, a matrix mapping belonging to a matrix $\mathbf{A} \in \mathbb{F}^{n\times n}$, if $\mathcal{V} = \mathbb{F}^n$). Suppose that the characteristic polynomial $\chi_A$ factors into a product of linear factors over $\mathbb{F}$. Then there is a basis of $\mathcal{V}$ in which the matrix of $A$ is in Jordan normal form.*

**Proof.** Let $\mathcal{V}$ be a complex vector space, and $A : \mathcal{V} \to \mathcal{V}$ a linear transformation (for example, the matrix mapping belonging to the matrix $\mathbf{A}$) and let $I$ denote the identity mapping. We will show that if the sum of the dimensions of the eigenspaces of $A$ is $k$, i.e., $k$ independent eigenvectors can be found, then $k$ Jordan chains can also be found, whose vectors provide a basis for the space, and in this basis the matrix of the mapping takes the Jordan form described in the theorem.

We will prove this by mathematical induction on the dimension of the space. In the case of $n = 1$, the statement is obviously true. Assume that the statement is true for every space of dimension less than $n$.

Let $(\lambda, \mathbf{x})$ be an eigenpair of $A$. Let the eigenspace belonging to $\lambda$ — i.e., the space $\operatorname{Ker}(A - \lambda I)$ — be denoted by $\mathcal{N}_\lambda$, its dimension by $r$, and let $\mathcal{U}_\lambda = \operatorname{Im}(A - \lambda I)$.

Since $r > 0$, by the rank-nullity theorem (dimension theorem), $\dim \mathcal{U}_\lambda = n - r < n$. $\mathcal{U}_\lambda$ is an invariant subspace of $A$, i.e., $A(\mathcal{U}_\lambda) \leqslant \mathcal{U}_\lambda$, because elements of $\mathcal{U}_\lambda$ are of the form $(A - \lambda I)\mathbf{v}$, where $\mathbf{v} \in \mathcal{V}$ is arbitrary, and $A(A - \lambda I)\mathbf{v} = (A^2 - \lambda A)\mathbf{v} = (A - \lambda I)(A\mathbf{v})$ is also an element of $\mathcal{U}_\lambda$.

$A$ is therefore a linear transformation on $\mathcal{U}_\lambda$ as well. Since $\dim \mathcal{U}_\lambda = n - r$, by the induction hypothesis it has a basis consisting of Jordan chains. The following diagram illustrates these chains, and how $A - \lambda_i I$ acts on them.

$$\begin{aligned} \mathbf{0} &\xleftarrow{A-\lambda_1 I} \mathbf{x}_1^1 \xleftarrow{A-\lambda_1 I} \dots \xleftarrow{A-\lambda_1 I} \mathbf{x}_1^{s_1} \\ \mathbf{0} &\xleftarrow{A-\lambda_2 I} \mathbf{x}_1^2 \xleftarrow{A-\lambda_2 I} \dots \xleftarrow{A-\lambda_2 I} \mathbf{x}_1^{s_2} \\ &\;\;\vdots \qquad\qquad \vdots \qquad\qquad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda_p I} \mathbf{x}_1^p \xleftarrow{A-\lambda_p I} \dots \xleftarrow{A-\lambda_p I} \mathbf{x}_1^{s_p} \end{aligned}$$

Here the superscript of the vector $\mathbf{x}_i^j$ denotes the index of the chain.

Let the intersection of the image and kernel of $A - \lambda I$ be $\mathcal{Q} = \mathcal{U}_\lambda \cap \mathcal{N}_\lambda$ and $q = \dim(\mathcal{Q})$. If $q = 0$, i.e., $\mathcal{Q} = \{\mathbf{0}\}$, then we are done, because in this case $\mathcal{U}_\lambda$ and $\mathcal{N}_\lambda$ are complementary subspaces, so by taking the Jordan basis of $\mathcal{U}_\lambda$ existing by induction together with an arbitrary basis of $\mathcal{N}_\lambda$, we obtain a Jordan basis for the entire space.

Let $q > 0$. Since the elements of $\mathcal{N}_\lambda$ are eigenvectors of $A$, according to the induction hypothesis, $q$ of the independent eigenvectors of $A$ form a basis for the eigenspace $\mathcal{Q}$. Let these $q$ eigenvectors be denoted by $\mathbf{x}_1^1, \mathbf{x}_1^2, \dots, \mathbf{x}_1^q$, and the vectors at the end of the Jordan chains starting from them and belonging to the eigenvalue $\lambda$

be denoted by $\mathbf{x}_{s_i}^i$ ($i = 1, \dots, q$). These are all elements of $\mathcal{U}_\lambda$, so for each there is a vector $\mathbf{y}^i$ such that $(A - \lambda I)\mathbf{y}^i = \mathbf{x}_{s_i}^i$ ($i = 1, 2, \dots, q$).

We extend the basis of the $q$-dimensional subspace $\mathcal{Q}$ of the $r$-dimensional subspace $\mathcal{N}_\lambda$ into a basis of $\mathcal{N}_\lambda$ with the vectors $\mathbf{z}^1, \dots, \mathbf{z}^{r-q}$. Thus we have obtained the following Jordan chains:

*Figure 11.1. The construction of the Jordan basis of the space $\mathcal{V}$: in the eigenspace $\mathcal{N}_\lambda$ the complementary vectors $\mathbf{z}^1, \dots, \mathbf{z}^{r-q}$, in the image space $\mathcal{U}_\lambda$ the chains $\mathbf{x}_1^1, \dots, \mathbf{x}_{s_1}^1$, \dots, and their extensions with the vectors $\mathbf{y}^1, \dots, \mathbf{y}^q$.*

$$\begin{aligned} \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{z}^1 \\ &\;\;\vdots \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{z}^{r-q} \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{x}_1^1 \xleftarrow{A-\lambda I} \dots \xleftarrow{A-\lambda I} \mathbf{x}_{s_1}^1 \xleftarrow{A-\lambda I} \mathbf{y}^1 \\ &\;\;\vdots \qquad\qquad\qquad\qquad\qquad\quad \vdots \qquad\qquad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{x}_1^q \xleftarrow{A-\lambda I} \dots \xleftarrow{A-\lambda I} \mathbf{x}_{s_q}^q \xleftarrow{A-\lambda I} \mathbf{y}^q \\ \mathbf{0} &\xleftarrow{A-\lambda_{q+1} I} \mathbf{x}_1^{q+1} \xleftarrow{A-\lambda_{q+1} I} \dots \xleftarrow{A-\lambda_{q+1} I} \mathbf{x}_{s_{q+1}}^{q+1} \\ &\;\;\vdots \qquad\qquad\qquad\qquad\qquad\quad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda_p I} \mathbf{x}_1^p \xleftarrow{A-\lambda_p I} \dots \xleftarrow{A-\lambda_p I} \mathbf{x}_{s_p}^p \end{aligned}$$

The number of $\mathbf{x}$-vectors is $n - r$, the number of $\mathbf{y}$-vectors is $q$, the number of $\mathbf{z}$-vectors is $r - q$, and their sum is $(n - r) + q + (r - q) = n$, so there are enough vectors for a basis. We will show that they are independent.

The construction was such that the $\mathbf{x}$- and $\mathbf{z}$-vectors are all independent of each other.

The vectors $\mathbf{y}^1, \dots, \mathbf{y}^q$ are linearly independent, since their image vectors under $A - \lambda I$ (the vectors $\mathbf{x}_{s_i}^i$) are independent.

Non-trivial linear combinations of the vectors $\mathbf{y}^1, \dots, \mathbf{y}^q$ cannot fall into $\mathcal{N}_\lambda$, because $A - \lambda I$ maps that to $\mathbf{0}$, thus the $\mathbf{y}$-vectors are independent of the $\mathbf{z}$-vectors.

Non-trivial linear combinations of the vectors $\mathbf{y}^1, \dots, \mathbf{y}^q$ cannot fall into $\mathcal{U}_\lambda$ either, because $A - \lambda I$ maps such a linear combination into a linear combination of the final vectors of the Jordan chains belonging to $\lambda$ of the transformation $A$. If this vector were the image of any vector in $\mathcal{U}_\lambda$, then it would be a generalized eigenvector, but $A - \lambda I$ cannot map vectors in their subspace to the above linear combination. $\square$

> *Uniqueness of the Jordan form*

Matrices can be classified into classes according to their Jordan normal form. This is ensured by the uniqueness of the normal form.

**Theorem 11.9 (Uniqueness of the Jordan form).** *The Jordan normal form of a matrix is unique up to the order of the Jordan blocks.*

**Proof.** To prove the uniqueness of the decomposition, it is sufficient to show that the determining data of the Jordan form of any two similar matrices are invariant under similarity.

The number of Jordan blocks, and thus the number of Jordan chains, equals the maximum number of independent eigenvectors — this is invariant.

For the sake of simplicity, let us first assume that all eigenvalues of $\mathbf{A}$ are identical, denoted by $\lambda$. To make the following easier to understand, let us look at a concrete example. Let the characteristic polynomial of matrix $\mathbf{A}$ be $(\lambda - x)^{13}$, and suppose that its Jordan basis looks like the following:

$$\begin{aligned} \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_4^1 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_4^2 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^3 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^3 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^3 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^4 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^5 \end{aligned} \tag{11.3}$$

The longest chain has 4 elements, which can be obtained knowing $\mathbf{A} - \lambda I$ as 4 being the smallest exponent $m$ for which $(\mathbf{A} - \lambda I)^m = \mathbf{O}$. In general, it is true that the size of the largest block is the smallest $m$ for which $(\mathbf{A} - \lambda I)^m = \mathbf{O}$, because if the length of the longest chain is $m$, then $(\mathbf{A} - \lambda I)^m$ maps every vector of the Jordan chains to the $\mathbf{0}$-vector, whereas lower exponent powers do not map the last elements of the longest chains to it. The property of a power of a matrix being zero is also invariant, thus for similar matrices the length of the longest chain is identical as well. (Here we used the fact that if $\mathbf{A}$ and $\mathbf{B}$ are similar, then so are $\mathbf{A} - \lambda I$ and $\mathbf{B} - \lambda I$.)

Let the number of Jordan chains of length $i$ belonging to the eigenvalue $\lambda$ be $n_i$. On diagram 11.3, $n_1 = 2$, $n_2 = 0$, $n_3 = 1$, $n_4 = 2$. It can be seen that from the rank of the powers of $(\mathbf{A} - \lambda I)$ it is possible to tell how many basis vectors have not yet mapped to the null vector, and from this the $n_i$ values can also be calculated. In our case

$$n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^3\right) = 2$$

$$n_3 + 2n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^2\right) = 5$$

$$n_2 + 2n_3 + 3n_4 = \operatorname{r}\!\left(\mathbf{A} - \lambda I\right) = 8$$

$$n_1 + 2n_2 + 3n_3 + 4n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^0\right) = n = 13,$$

and this system of equations can be uniquely solved. In general

$$n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-1}\right)$$

$$n_{m-1} + 2n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-2}\right)$$

$$n_{m-2} + 2n_{m-1} + 3n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-3}\right)$$

$$\vdots$$

$$n_2 + 2n_3 + \dots + (m-1)n_m = \operatorname{r}(\mathbf{A} - \lambda I)$$

$$n_1 + 2n_2 + \dots + (m-1)n_{m-1} + mn_m = n.$$

On the right side of this system of equations there are values that are invariant under similarity, the coefficient matrix is triangular, thus it can be solved with simple back substitution. Since there are ones on the anti-diagonal, the solution is unique and an integer.

If the matrix has multiple distinct eigenvalues, then we obtain such a system of equations for each eigenvalue. Let $\lambda$ be one of the eigenvalues, and let its algebraic multiplicity be denoted by $a_\lambda$. Then the rank of the powers of $\mathbf{A} - \lambda I$ can decrease until it reaches the value $n - a_\lambda$. Because if $\mathbf{A}$ is similar to the Jordan matrix $\mathbf{J}$, then $\mathbf{A} - \lambda I \sim \mathbf{J} - \lambda I$, and with the exception of the block belonging to $\lambda$ in the latter matrix, there are non-zero numbers on the main diagonal, so their powers do not become zero. Therefore, let $m$ denote the smallest exponent for which

$$\operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) = n - a_\lambda, \;\text{ i.e., }\; \operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) - n + a_\lambda = 0.$$

Phrased differently, this means that $m$ is the smallest exponent for which $(\mathbf{A} - \lambda \mathbf{I})^m$ maps the generalized eigenspace belonging to $\lambda$ to the zero vector.

If we do not know what the algebraic multiplicity of $\lambda$ is, we can also obtain it from the rank of the powers of $\mathbf{A} - \lambda \mathbf{I}$, because $m$ is the smallest exponent for which

$$\operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m+1}\right),$$

thus $a_\lambda = n - \operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m)$. Thus the system of equations generally valid for all cases has the following form:

$$n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-1}\right) - n + a_\lambda$$

$$n_{m-1} + 2n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-2}\right) - n + a_\lambda$$

$$n_{m-2} + 2n_{m-1} + 3n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-3}\right) - n + a_\lambda$$

$$\vdots$$

$$n_2 + 2n_3 + \dots + (m-1)n_m = \operatorname{r}(\mathbf{A} - \lambda \mathbf{I}) - n + a_\lambda$$

$$n_1 + 2n_2 + \dots + (m-1)n_{m-1} + mn_m = a_\lambda$$

The unique solvability of this proves our statement. $\square$

**Example 11.10 (Size of Jordan blocks).** *A $10 \times 10$ matrix $\mathbf{A}$ has an eigenvalue $\lambda$ with an algebraic multiplicity of 10. The ranks of the powers of $\mathbf{A} - \lambda\mathbf{I}$ are respectively 5, 2, 1, 0. Write its Jordan normal form!*

**Solution.** The number of blocks, which equals the number of Jordan chains, is 5, since $n - \operatorname{r}(\mathbf{A} - \lambda\mathbf{I}) = 10 - 5 = 5$. The length of the longest chain is 4, since the smallest power of $\mathbf{A} - \lambda\mathbf{I}$ yielding the zero matrix is the 4th. The system of equations and its solution, as well as the Jordan matrix $\mathbf{J}$:

$$\begin{aligned} n_4 &= 1 \\ n_3 + 2n_4 &= 2 \\ n_2 + 2n_3 + 3n_4 &= 5 \\ n_1 + 2n_2 + 3n_3 + 4n_4 &= 10 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_4 &= 1 \\ n_3 &= 0 \\ n_2 &= 2 \\ n_1 &= 2 \end{aligned}$$

$$\mathbf{J} = \left[\begin{array}{cccc|cc|cc|c|c} \lambda & 1 & & & & & & & & \\ & \lambda & 1 & & & & & & & \\ & & \lambda & 1 & & & & & & \\ & & & \lambda & & & & & & \\ \hline & & & & \lambda & 1 & & & & \\ & & & & & \lambda & & & & \\ \hline & & & & & & \lambda & 1 & & \\ & & & & & & & \lambda & & \\ \hline & & & & & & & & \lambda & \\ \hline & & & & & & & & & \lambda \end{array}\right]$$

$\square$

**Example 11.11 (Size of Jordan blocks).** *Let $\mathbf{A}$ be a $14 \times 14$ matrix about which we know that*

> *the ranks of the powers of $\mathbf{A} - 3\mathbf{I}$ are respectively:* 12, 11, 10, 9, 9;
>
> *the ranks of the powers of $\mathbf{A} - 2\mathbf{I}$ are respectively:* 12, 10, 9, 9;
>
> *the ranks of the powers of $\mathbf{A} - \mathbf{I}$ are respectively:* 11, 10, 10.

*Write down the characteristic polynomial and Jordan normal form of $\mathbf{A}$!*

**Solution.** Now $n = 14$, and the numbers $\lambda = 3, 2, 1$ are eigenvalues, because the rank of $\mathbf{A} - \lambda\mathbf{I}$ is less than 14. The algebraic multiplicity of $\lambda = 3$ and $\lambda = 2$ is $14 - 9 = 5$, because 9 is the first rank that repeats. The multiplicity of $\lambda = 1$, calculated similarly, is $14 - 10 = 4$. Thus $\mathbf{A}$ has no other eigenvalues, because the sum of the multiplicities of these eigenvalues is 14. So the characteristic polynomial is $(3 - \lambda)^5(2 - \lambda)^5(1 - \lambda)^4$.

For $\lambda = 3$, the number of blocks (Jordan chains) is $n - \operatorname{r}(\mathbf{A} - 3\mathbf{I}) = 14 - 12 = 2$. The length of the longest chain is $m = 4$, since this is the smallest $m$ for which $\operatorname{r}((\mathbf{A} - 3\mathbf{I})^m) = 14 - 5 = 9$. The system of equations and its solution is

$$\begin{aligned} n_4 &= 10 - 14 + 5 = 1 \\ n_3 + 2n_4 &= 11 - 14 + 5 = 2 \\ n_2 + 2n_3 + 3n_4 &= 12 - 14 + 5 = 3 \\ n_1 + 2n_2 + 3n_3 + 4n_4 &= 5 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_4 &= 1 \\ n_3 &= 0 \\ n_2 &= 0 \\ n_1 &= 1 \end{aligned}$$

We proceed similarly for the other eigenvalues. For $\lambda = 2$, $m = 3$, thus

$$\begin{aligned} n_3 &= 10 - 14 + 5 = 1 \\ n_2 + 2n_3 &= 12 - 14 + 5 = 3 \\ n_1 + 2n_2 + 3n_3 &= 5 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_3 &= 1 \\ n_2 &= 1 \\ n_1 &= 0 \end{aligned}$$

For $\lambda = 1$, $m = 2$, so the system of equations and its solution is

$$\begin{aligned} n_2 &= 11 - 14 + 4 = 1 \\ n_1 + 2n_2 &= 4 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_2 &= 1 \\ n_1 &= 2 \end{aligned}$$

In summary:

$$\mathbf{J} = \left[\begin{array}{cccc|c|cc|c|cc|c|c} 3 & 1 & & & & & & & & & & \\ & 3 & 1 & & & & & & & & & \\ & & 3 & 1 & & & & & & & & \\ & & & 3 & & & & & & & & \\ \hline & & & & 3 & & & & & & & \\ \hline & & & & & 2 & 1 & & & & & \\ & & & & & & 2 & & & & & \\ \hline & & & & & & & 2 & & & & \\ \hline & & & & & & & & 2 & 1 & & \\ & & & & & & & & & 2 & & \\ \hline & & & & & & & & & & 1 & 1 \\ & & & & & & & & & & & 1 \\ \end{array}\right]$$

is the Jordan normal form of the matrix $\mathbf{A}$. $\square$

> *Minimal polynomial*

Many properties of a matrix can be read from the Jordan normal form, including which polynomials yield the zero matrix when the matrix is substituted into them.

**Definition 11.12 (Minimal polynomial).** *Let $\mathbf{A}$ be a square matrix over an arbitrary field $\mathbb{F}$.* A minimal polynomial *is a monic polynomial $\mu_\mathbf{A}$ (i.e., a polynomial with a leading coefficient of 1) of minimal degree for which $\mu_\mathbf{A}(\mathbf{A}) = \mathbf{O}$. The minimal polynomial of a linear transformation $A : \mathcal{V} \to \mathcal{V}$ can be defined similarly, where $\mathcal{V}$ is a finite-dimensional vector space over a field $\mathbb{F}$.*

> *We say that the polynomial $p$ is an annihilator of the matrix $\mathbf{A}$ (linear transformation $A$), or that it annihilates it, if $p(\mathbf{A}) = \mathbf{O}$ ($p(A) = 0$). Thus, the minimal polynomial is an annihilator monic polynomial of lowest degree.*

> *The zero polynomial cannot be a minimal polynomial, because its leading coefficient is not 1.*

> *The matrix $\mathbf{I}$, and the identity transformation, has the minimal polynomial $\mu(x) = x - 1$, because $\mu(\mathbf{I}) = \mathbf{I} - \mathbf{I} = \mathbf{O}$, and there is only one monic polynomial of lower degree, the constant polynomial 1, which does not annihilate $\mathbf{I}$.*

> *If $\mathbf{A}$ and $\mathbf{B}$ are similar matrices, i.e., $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ for some matrix $\mathbf{C}$, then their minimal polynomials are equal, because $p(\mathbf{B}) = \mathbf{C}^{-1}p(\mathbf{A})\mathbf{C}$ holds for every polynomial $p$, thus $p(\mathbf{A})$ and $p(\mathbf{B})$ are simultaneously $\mathbf{O}$, or simultaneously not, so their minimal polynomials are also identical.*

> *A consequence of the previous remark is that the minimal polynomial is invariant under matrix similarity, so the minimal polynomial of a linear transformation is the same as the minimal polynomial of its matrix written in any basis.*

**Proposition 11.13 (Properties of the minimal polynomial).** *Let $\mathbf{A}$ be a square matrix over an arbitrary field. Then*

*a) $\mathbf{A}$ has exactly one minimal polynomial $\mu_\mathbf{A}$.*

*b) For any polynomial $p$, $p(\mathbf{A}) = \mathbf{O}$ holds if and only if $p$ is divisible by the minimal polynomial $\mu_\mathbf{A}$ without a remainder.*

*c) The characteristic polynomial $\chi_\mathbf{A}$ is divisible by the minimal polynomial $\mu_\mathbf{A}$.*

*d) Every eigenvalue of $\mathbf{A}$ is a root of $\mu_\mathbf{A}$.*

**Proof.** *a)* According to the Cayley–Hamilton theorem, for every matrix $\mathbf{A}$, $\chi_\mathbf{A}(\mathbf{A}) = \mathbf{O}$. According to this, there is at least one polynomial that annihilates $\mathbf{A}$. Dividing such polynomials by their leading coefficients, we obtain exclusively monic polynomials. We show that there is only one among them with minimal degree. Suppose indirectly that $p$ and $q$ are two distinct monic polynomials of minimal degree for which $p(\mathbf{A}) = q(\mathbf{A}) = \mathbf{O}$. Since both have a leading coefficient of 1, their difference has a lower degree, and on the other hand $(p - q)(\mathbf{A}) = p(\mathbf{A}) - q(\mathbf{A}) = \mathbf{O}$, which contradicts that $p$ and $q$ are annihilators of minimal degree.

*b)* If $p$ is divisible by $\mu_\mathbf{A}$, i.e., $p = \mu_\mathbf{A}q$ for some polynomial $q$, then $p(\mathbf{A}) = \mu_\mathbf{A}(\mathbf{A})q(\mathbf{A}) = \mathbf{O}$.

Conversely: let $p$ be an arbitrary polynomial for which $p(\mathbf{A}) = \mathbf{O}$. We show that $\mu_\mathbf{A}$ is a divisor of $p$. By polynomial division with remainder of $p$ by $\mu_\mathbf{A}$, we get $p = \mu_\mathbf{A}q + r$, where the degree of $r$ is less than the degree of $\mu_\mathbf{A}$, and on the other hand $\mathbf{O} = p(\mathbf{A}) = \mu_\mathbf{A}(\mathbf{A})q(\mathbf{A}) + r(\mathbf{A})$. From this, $r(\mathbf{A}) = \mathbf{O}$, which is only possible if $r = 0$, since a polynomial of lower degree than $\mu_\mathbf{A}$ cannot be an annihilator, except the zero polynomial.

*c)* Since according to the Cayley–Hamilton theorem $\chi_\mathbf{A}$ is an annihilator, therefore, according to the previous point, it is divisible by the minimal polynomial.

*d)* If $(\lambda, \mathbf{x})$ is an eigenpair, then for any positive integer $\mathbf{A}^k\mathbf{x} = \lambda^k\mathbf{x}$, so for any polynomial $p$, $p(\mathbf{A})\mathbf{x} = p(\lambda)\mathbf{x}$. Thus $\mu_\mathbf{A}(\mathbf{A})\mathbf{x} = \mu_\mathbf{A}(\lambda)\mathbf{x}$. But $\mu_\mathbf{A}(\mathbf{A}) = \mathbf{O}$, and $\mathbf{x} \neq \mathbf{0}$, therefore $\mu_\mathbf{A}(\lambda) = 0$. $\square$

> *If $\chi_\mathbf{A}(x) = \prod_i (x - \lambda_i)^{a_i}$, then due to the divisibility in c), $\mu_\mathbf{A}(x) = \prod_i (x - \lambda_i)^{m_i}$, where $1 \leqslant m_i \leqslant a_i$, and where $a_i$ denotes the algebraic multiplicity of $\lambda_i$.*

> *Let $\mathbf{A}$ be nilpotent, where $\mathbf{A}^k = \mathbf{O}$, but $\mathbf{A}^{k-1} \neq \mathbf{O}$. Then $\mu_\mathbf{A}(x) = x^k$, since $x^k$ is an annihilator, so the minimal polynomial can only be one of its divisors. However, its divisors are all of the form $x^m$, where $m \leqslant k$, but for $m < k$ they are not annihilators.*

With the help of the Jordan form of $\mathbf{A}$, all polynomials $p$ for which $p(\mathbf{A}) = \mathbf{O}$ can be well characterized.

**Theorem 11.14 (Jordan normal form and minimal polynomial).** *Let the spectrum of the matrix $\mathbf{A} \in \mathbb{C}^{n\times n}$ be $\sigma(\mathbf{A}) = \{\lambda_1, \lambda_2, \dots, \lambda_s\}$.*

*a) $\mu_\mathbf{A}(x) = (x - \lambda_1)^{m_1}(x - \lambda_2)^{m_2}\dots(x - \lambda_s)^{m_s}$, where $m_k$ is the size of the largest Jordan block corresponding to $\lambda_k$.*

*b) $\mu_\mathbf{A} = \chi_\mathbf{A}$ holds if and only if the geometric multiplicity of every eigenvalue of $\mathbf{A}$ is 1.*

*c) $\mathbf{A}$ is diagonalizable if and only if the minimal polynomial is a product of linear factors, i.e., $\mu_\mathbf{A}(x) = (x - \lambda_1)(x - \lambda_2)\dots(x - \lambda_s)$.*

**Proof.** *a)* Since the minimal polynomials of similar matrices are identical, it is sufficient to restrict ourselves to matrices in Jordan normal form. If $a_i$ denotes the algebraic multiplicity of $\lambda_i$, then its characteristic polynomial is

$$\chi_\mathbf{A}(x) = \prod_{i=1}^{s} (x - \lambda_i)^{a_i}.$$

The minimal polynomial is a divisor of this, and on the other hand, for every eigenvalue $\lambda_i$, $x - \lambda_i$ is a divisor of the minimal polynomial, so the minimal polynomial is of the form

$$\prod_{i=1}^{s} (x - \lambda_i)^{k_i}$$

where $1 \leqslant k_i \leqslant a_i$. It is clear that

$$\mu_\mathbf{A}(x) = \prod_{i=1}^{s} (x - \lambda_i)^{m_i},$$

since on the one hand it annihilates $\mathbf{A}$, because $(\mathbf{A} - \lambda_i\mathbf{I})^{m_i}$ annihilates all Jordan blocks corresponding to $\lambda_i$, thus the product of matrices of the form $(\mathbf{A} - \lambda_i\mathbf{I})^{m_i}$ is the zero matrix. On the other hand, if any factor $x - \lambda_i$ were to an exponent lower than $m_i$, then it would not annihilate the largest Jordan block corresponding to $\lambda_i$, so this block would not be zero in $\mu(\mathbf{A})$ either, since $\prod_{j \neq i}(\mathbf{A} - \lambda_j\mathbf{I})$ has non-zero values in its main diagonal (verify).

*b)* $\mu_\mathbf{A} = \chi_\mathbf{A}$ is true if and only if a single Jordan block belongs to every eigenvalue of $\mathbf{A}$, i.e., if every geometric multiplicity is 1.

*c)* $\mathbf{A}$ is diagonalizable if and only if every Jordan block is $1 \times 1$, i.e., the largest Jordan blocks are $1 \times 1$. $\square$

> *Companion matrix*

For every polynomial, we can find a matrix whose characteristic polynomial and at the same time minimal polynomial is that polynomial.

**Proposition 11.15.** *For any polynomial $\chi(x) = x^n + a_1 x^{n-1} + \dots + a_{n-1}x + a_n$, there exists a matrix whose characteristic polynomial is $\chi$. Such is the matrix*

$$\mathbf{C} = \begin{bmatrix} 0 & 0 & \dots & 0 & -a_n \\ 1 & 0 & \dots & 0 & -a_{n-1} \\ 0 & 1 & \dots & 0 & -a_{n-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 \end{bmatrix}$$

*which we call the* companion matrix *of the polynomial.*

**Proof.** In the determinant giving the characteristic polynomial, starting from the bottom, by adding $x$ times each row to the one above it, we get that

$$\chi_\mathbf{C}(x) = \begin{vmatrix} -x & 0 & \dots & 0 & -a_n \\ 1 & -x & \dots & 0 & -a_{n-1} \\ 0 & 1 & \dots & 0 & -a_{n-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 - x \end{vmatrix} = \begin{vmatrix} 0 & 0 & \dots & 0 & \chi(x) \\ 1 & 0 & \dots & 0 & ? \\ 0 & 1 & \dots & 0 & ? \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 - x \end{vmatrix}$$

Thus $\chi_\mathbf{C}(x)$ – disregarding a sign factor – equals the given polynomial $\chi(x)$. $\square$

**Proposition 11.16.** *The minimal polynomial of the companion matrix equals its characteristic polynomial (up to a factor of $-1$).*

**Proof.** For arbitrary but not all zero constants $c_j$

$$\left(\sum_{j=0}^{n-1} c_j \mathbf{C}^j\right) \mathbf{e}_1 = \begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_{n-1} \end{bmatrix} \neq \mathbf{0},$$

i.e., there is no annihilator of degree lower than $n$, so $\mu(\mathbf{C}) = (-1)^n \chi(\mathbf{C})$. $\square$

> *Construction of the Jordan basis*

The basis constructed in the proof of Jordan's theorem can also be calculated by hand for small matrices. The simple naive algorithm presented here is not intended for computer implementation; a more efficient one exists.

As an example, consider a 19th-order matrix $\mathbf{A}$, with $\lambda$ as a 19-fold eigenvalue, and for which the lengths of the Jordan chains are respectively $n_5 = 2$, $n_4 = 1$, $n_3 = 0$, $n_2 = 2$, $n_1 = 1$. Based on this, the effect of $\mathbf{A} - \lambda\mathbf{I}$ on the Jordan basis can be determined, which is illustrated in Figure 11.1. Let the null space of $(\mathbf{A} - \lambda\mathbf{I})^k$ be denoted by $\mathcal{N}_k$. $\mathcal{N}_5$ is the full generalized eigenspace corresponding to $\lambda$ – in this example $\mathbb{C}^{19}$. Determining the null space means solving a homogeneous linear system of equations, which poses no difficulty, but how we choose the basis in it is no longer entirely arbitrary.

The essence of the algorithm – which is also illustrated in Figure 11.2 – is that starting from the spaces with larger indices, in each step we extend the basis of $\mathcal{N}_{i-1}$ to a basis of $\mathcal{N}_i$, then take the image of the extension by $\mathbf{A} - \lambda\mathbf{I}$, which now falls into $\mathcal{N}_{i-1}$, and adding this to the basis of $\mathcal{N}_{i-2}$, we extend it to a new basis of $\mathcal{N}_{i-1}$. ... The convention will be that we put the vectors of a generator of a vector space into a single matrix, and denote it by the same, but bold letter, so e.g. the generator matrix of $\mathcal{N}$ is denoted by $\mathbf{N}$. In detail:

- We determine an arbitrary basis matrix $\mathbf{N}_i$ of $\mathcal{N}_i$ ($i = 1, 2, 3, 4, 5$).

*Figure 11.1. Null spaces of the powers of $\mathbf{A} - \lambda\mathbf{I}$, and its effect on the Jordan basis of matrix $\mathbf{A}$.*

- We extend $\mathbf{N}_4$ to a basis of $\mathcal{N}_5$, let the matrix of the new basis elements be denoted by $\mathbf{U}_5$, so the basis of $\mathcal{N}_5$ is now $[\mathbf{N}_4 \mid \mathbf{U}_5]$.

- Let $\mathbf{K}_4$ be the image of the new elements by $\mathbf{A} - \lambda\mathbf{I}$, i.e., $\mathbf{K}_4 = (\mathbf{A} - \lambda\mathbf{I})\mathbf{U}_5$. Since $\mathcal{K}_4 \subset \mathcal{N}_4$, but is independent of the subspace $\mathcal{N}_3$, it is suitable for its basis vectors to be taken among the elements of the Jordan basis falling into $\mathcal{N}_4 \setminus \mathcal{N}_3$.

- If necessary, we extend $[\mathbf{N}_3 \mid \mathbf{K}_4]$ to a basis of $\mathcal{N}_4$ by adding new elements, so the basis of $\mathcal{N}_4$ is now $[\mathbf{N}_3 \mid \mathbf{K}_4 \mid \mathbf{U}_4]$.

- We take the image of the matrix $[\mathbf{K}_4 \mid \mathbf{U}_4]$, i.e., let $\mathbf{K}_3 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_4 \mid \mathbf{U}_4]$, and if necessary, extend $[\mathbf{N}_2 \mid \mathbf{K}_3]$ to a basis of $\mathcal{N}_3$ by adding new elements (i.e., the basis of $\mathcal{N}_3$ is now $[\mathbf{N}_2 \mid \mathbf{K}_3 \mid \mathbf{U}_3]$ – now $\mathcal{U}_3 = \varnothing$). We proceed similarly, decreasing the index of $\mathcal{N}_i$: $\mathbf{K}_2 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_3 \mid \mathbf{U}_3]$, by adding new elements we produce the basis of $\mathcal{N}_2$: $[\mathbf{N}_1 \mid \mathbf{K}_2 \mid \mathbf{U}_2]$.

- Finally, let $\mathbf{K}_1 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_2 \mid \mathbf{U}_2]$, which we extend with $\mathbf{U}_1$ to a basis of $\mathcal{N}_1$. The Jordan basis of the space is the union of the image and the new elements:

$$[\mathbf{K}_1 \mid \mathbf{K}_2 \mid \mathbf{K}_3 \mid \mathbf{K}_4 \mid \mathbf{U}_1 \mid \mathbf{U}_2 \mid \mathbf{U}_3 \mid \mathbf{U}_4 \mid \mathbf{U}_5].$$

- Finally, we order the elements of the Jordan basis so that we list the chains one after the other, each chain starting from its eigenvector.

After this, let's see a concrete example, then the algorithm in general. Two remarks for carrying out the calculation:

> *If $\mathcal{U} \subset \mathcal{V}$ are two subspaces, and $\{\mathbf{u}_1, \dots, \mathbf{u}_m\}$ and $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ ($m < n$) are their bases, then using elementary row operations we can construct a basis $\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$ of $\mathcal{V}$ such that $\{\mathbf{w}_1, \dots, \mathbf{w}_m\}$ is a basis of $\mathcal{U}$. To do this, write the basis vectors of $\mathcal{U}$, then $\mathcal{V}$ into a single*
>
> $$[\mathbf{u}_1 \;\dots\; \mathbf{u}_m \mid \mathbf{v}_1 \;\dots\; \mathbf{v}_n]$$
>
> *matrix. In its row echelon form, there will be leading ones in the first $m$ columns, and in $n - m$ further columns. The corresponding vectors in the original bases (thus all vectors of $\mathcal{U}$ and $n - m$ vectors of $\mathcal{V}$) yield the new basis.*

*Figure 11.2. The algorithm for constructing the Jordan basis*

> ▶ We recall that if the reduced row echelon form of a matrix is of the form $[\mathbf{I}\vert\mathbf{S}]$, then the column vectors of $\left[\begin{smallmatrix}-\mathbf{S}\\\mathbf{I}\end{smallmatrix}\right]$ or $\left[\begin{smallmatrix}\mathbf{S}\\-\mathbf{I}\end{smallmatrix}\right]$ give a basis for the null space of the matrix. Be careful, if $\mathbf{I}$ is not in the first columns, then the rows of $\left[\begin{smallmatrix}-\mathbf{S}\\\mathbf{I}\end{smallmatrix}\right]$ must be permuted accordingly.

**Example 11.17 (Constructing a Jordan basis).** *Determine the Jordan normal form and Jordan basis of the matrix*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & -2 & 1 & -1 \\ 3 & -3 & 6 & -2 & 4 \\ 4 & -5 & 9 & -3 & 5 \\ 4 & -5 & 8 & -2 & 5 \\ -1 & 1 & -1 & 0 & 0 \end{bmatrix}$$

**Solution.** The characteristic polynomial is

$$\det(\mathbf{A} - \lambda\mathbf{I}) = -\lambda^5 + 4\lambda^4 - 6\lambda^3 + 4\lambda^2 - \lambda = -\lambda(1-\lambda)^4.$$

The eigenvector belonging to 0, calculated from the reduced row echelon form:

$$\begin{bmatrix} 1 & 0 & 0 & 0 & -1 \\ 0 & 1 & 0 & 0 & 3 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} 1 \\ -3 \\ -4 \\ -4 \\ 1 \end{bmatrix}$$

Since the algebraic (and thus the geometric) multiplicity is 1 here, this Jordan chain has one element. For $\lambda = 1$, the geometric multiplicity is 2, since the reduced row echelon form of $\mathbf{A} - \mathbf{I}$ and from it the basis of the null space is:

$$\operatorname{rref}(\mathbf{A} - \mathbf{I}) = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & -1 & -1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \mathbf{N}_1 = \begin{bmatrix} 0 & 0 \\ 1 & 1 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$$

It is faster to compute the null space of $(\mathbf{A} - 1 \cdot \mathbf{I})^2$ not by multiplying $\mathbf{A} - \mathbf{I}$ by itself, but by multiplying its row echelon form from the right, and taking the row echelon form of that product. Computing the row echelon form only means multiplying from the left by elementary matrices, so

$$(\operatorname{rref}(\mathbf{A} - \mathbf{I}))(\mathbf{A} - \mathbf{I}) = \mathbf{E}(\mathbf{A} - \mathbf{I})(\mathbf{A} - \mathbf{I}) = \mathbf{E}(\mathbf{A} - \mathbf{I})^2$$

that is, the product is the result of elementary row operations performed on $(\mathbf{A} - \mathbf{I})^2$. However, there is much less calculation, as the zero rows can be omitted:

$$\left\{ \begin{array}{c} (\operatorname{rref}(\mathbf{A} - \mathbf{I}))\,(\mathbf{A} - \mathbf{I}) \\ \text{without the zero rows} \end{array} \right\} = \begin{bmatrix} -1 & 1 & -2 & 1 & -1 \\ 0 & 0 & -1 & 1 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & -1 & 0 & 1 & 1 \\ 0 & 0 & 1 & -1 & 0 \end{bmatrix}$$

from where the basis vectors are:

$$\mathbf{N}_2 = \begin{bmatrix} 1 & -1 & -1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Determine the basis of $(\mathbf{A} - \mathbf{I})^3$ similarly!

$$\begin{bmatrix} 1 & -1 & 0 & 1 & 1 \\ 0 & 0 & 1 & -1 & 0 \end{bmatrix} (\mathbf{A} - \mathbf{I}) = \begin{bmatrix} 1 & -1 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$$

which is already in row echelon form, and from where the basis matrix is

$$\mathbf{N}_3 = \begin{bmatrix} 1 & -1 & 0 & -1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

Next, we determine the vectors of $\mathcal{U}_3$, i.e., those that complete the basis of $\mathcal{N}_2$ ($\mathbf{N}_2$) to a basis of $\mathcal{N}_3$. For this, we have to bring the matrix $[\mathbf{N}_2\vert\mathbf{N}_3]$ to reduced row echelon form, the elements of $\mathcal{U}_3$ will be those columns of $\mathbf{N}_3$ that are independent of $\mathbf{N}_2$, i.e., which have leading ones in their reduced row echelon form.

$$[\mathbf{N}_2\vert\mathbf{N}_3] = \left[\begin{array}{ccc|cccc} 1 & -1 & -1 & 1 & -1 & 0 & -1 \\ 1 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|cccc} 1 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right]$$

Thus $\mathbf{U}_3 = [-1\ 0\ 1\ 0\ 0]^{\mathsf{T}}$, and from this $\mathbf{K}_2 = (\mathbf{A} - \mathbf{I})\mathbf{U}_3 = [-1\ 3\ 4\ 4\ 0]^{\mathsf{T}}$. Since $\mathbf{K}_2$ consists of a single vector, and the difference in dimensions of $\mathcal{N}_3$ and $\mathcal{N}_2$ is also 1, we do not need to calculate anything here, $\mathcal{U}_2 = \{\mathbf{0}\}$, meaning $\mathbf{U}_2$ is empty. $\mathbf{K}_1 = (\mathbf{A} - \mathbf{I})\mathbf{K}_2 = [0\ 1\ 1\ 1\ 0]^{\mathsf{T}}$, and since this vector is in the basis of $\mathcal{N}_1$, the space $\mathbf{U}_1 = [0\ 1\ 0\ 0\ 1]^{\mathsf{T}}$ is generated by the other basis vector. To write the Jordan normal form, the vectors of the Jordan chains must be listed one after the other, and with the matrix $\mathbf{P}$ formed from them, $\mathbf{J} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$ will hold. These two matrices are

$$\mathbf{P} = \left[\begin{array}{c|ccc|c} 0 & 0 & -1 & -1 & 1 \\ 1 & 1 & 3 & 0 & -3 \\ 0 & 1 & 4 & 1 & -4 \\ 0 & 1 & 4 & 0 & -4 \\ 1 & 0 & 0 & 0 & 1 \end{array}\right] \qquad \mathbf{J} = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \square$$

The algorithm in general:

- Input: $\mathbf{A}$, the characteristic polynomial $\chi(x)$ factored into linear factors,
- For every eigenvalue $\lambda$
  - Determine the length $m$ of the longest chain, and the null space of $(\mathbf{A} - \lambda\mathbf{I})^i$ ($\mathcal{N}_i$, $i = 1, 2, \ldots, m$). Let $\mathcal{U}_{m+1} = \mathcal{K}_{m+1} = \mathcal{N}_0 = \{\mathbf{0}\}$, i.e., the basis of these spaces is the empty set.
  - For each $i$ from $m$ down to 1:
    * Let $\mathbf{K}_i = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_{i+1}\vert\mathbf{U}_{i+1}]$.
    * Determine $\mathbf{U}_i$ such that $[\mathbf{N}_{i-1}\vert\mathbf{K}_i\vert\mathbf{U}_i]$ is a basis of $\mathcal{N}_i$. For this, choose the basis columns from $\mathbf{N}_i$ to $\mathbf{U}_i$ based on the reduced row echelon form of the matrix $[\mathbf{N}_{i-1}\vert\mathbf{K}_i\vert\mathbf{N}_i]$.
- Place the vectors of the Jordan chains next to each other from left to right, starting each chain with the eigenvector, with the obtained matrix $\mathbf{P}$, $\mathbf{J} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$.

## Exercises

**11.1. Basis of an invariant subspace** The subspace $\mathcal{U} \leqslant \mathcal{V}$ is an invariant subspace with respect to the linear transformation $L$ if and only if for every vector of a basis $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ of $\mathcal{U}$, $L\mathbf{u}_i \in \mathcal{U}$ ($i = 1, \ldots, k$).

**11.2. Invariant subspace** Consider the matrix mapping $L : \mathbf{x} \mapsto \mathbf{L}\mathbf{x}$, where

$$\mathbf{L} = \begin{bmatrix} 1 & -1 & 0 & 1 \\ -1 & 0 & 0 & 1 \\ 0 & 0 & 2 & 1 \\ -1 & -2 & 0 & 3 \end{bmatrix}$$

and let $\mathbf{u} = (1, -1, 2, -1)$, $\mathbf{v} = (1, 2, -1, 2)$. Show that the subspace $\mathcal{U} = \operatorname{span}(\mathbf{u}, \mathbf{v})$ is an invariant subspace of the linear transformation $L$.

**11.3. Block diagonal matrices** If $L : \mathcal{V} \to \mathcal{V}$ is a linear transformation, $\mathcal{U}_1, \ldots, \mathcal{U}_k$ are $L$-invariant subspaces of the vector space $\mathcal{V}$ and $\mathcal{V} = \mathcal{U}_1 \oplus \ldots \oplus \mathcal{U}_k$, then the matrix of $L$ is block diagonal in any basis that is the union of the bases of the subspaces.

**11.4. Normal forms** List all possible Jordan normal forms of the matrix about which we only know that its characteristic polynomial is $(1 - \lambda)^4$. Do not consider two normal forms different if they differ only in the order of the Jordan blocks!

**11.5. Connection between Jordan chains and Jordan blocks** We know that the matrix $\mathbf{A}$ has two different eigenvalues, $\lambda_1 = 2$ and $\lambda_2 = 4$, and that the column vectors of the matrix $\mathbf{C}$ form a Jordan basis of $\mathbf{A}$, where

$$\mathbf{A} = \begin{bmatrix} 2 & 0 & 1 & -1 & 0 & 1 & -1 \\ 0 & 2 & 1 & -1 & 0 & 1 & -1 \\ 2 & -2 & 2 & 2 & 0 & -1 & 1 \\ 1 & -1 & 0 & 3 & 1 & 1 & -1 \\ -1 & 1 & 0 & -1 & 5 & 1 & -1 \\ -1 & 1 & 0 & -1 & 1 & 4 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 4 \end{bmatrix}, \qquad \mathbf{C} = \begin{bmatrix} 1 & 1 & 0 & 0 & 0 & 0 & 0 \\ 1 & 1 & 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 1 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 1 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 1 & 1 \end{bmatrix}.$$

Draw the diagram of the Jordan chains, and determine the matrix $\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ without calculating $\mathbf{C}^{-1}$!

## Matrix Functions

*With the help of the Jordan normal form, we can give meaning to functions of matrices. This plays an important role, for example, in the theory of linear differential equations.*

### Functions of diagonalizable matrices

If a state $\mathbf{x}_k$ of a process is connected to the next one by a linear relationship $\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k$, then due to the relation $\mathbf{x}_k = \mathbf{A}^k\mathbf{x}_0$, the process is characterized by the powers of the matrix $\mathbf{A}$. A question could be, for example, the asymptotic behavior of the matrix powers, or the way to quickly calculate high powers.

Powers of a diagonal matrix are easy to calculate: we only need to raise the elements of the main diagonal to the power. On the other hand, $(\mathbf{C}^{-1}\mathbf{M}\mathbf{C})^k = \mathbf{C}^{-1}\mathbf{M}^k\mathbf{C}$, therefore diagonalizable matrices can also be easily exponentiated.

**Example 11.18 (Powers of matrices).** *Consider the following two "almost equal" matrices:*

$$\mathbf{A} = \begin{bmatrix} -0.3 & 1.8 \\ -0.6 & 1.8 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} -0.3 & 1.8 \\ -0.5 & 1.8 \end{bmatrix}$$

*Investigate the limit of their powers as the exponent tends to infinity!*

**Solution.** We diagonalize both matrices:

$$\boldsymbol{\Lambda}_1 = \mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \begin{bmatrix} 0.6 & 0.0 \\ 0.0 & 0.9 \end{bmatrix}, \quad \text{where } \mathbf{C} = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}, \mathbf{C}^{-1} = \begin{bmatrix} 2 & -3 \\ -1 & 2 \end{bmatrix}.$$

and

$$\boldsymbol{\Lambda}_2 = \mathbf{D}^{-1}\mathbf{B}\mathbf{D} = \begin{bmatrix} 1.2 & 0.0 \\ 0.0 & 0.3 \end{bmatrix}, \quad \text{where } \mathbf{D} = \begin{bmatrix} 6 & 3 \\ 5 & 1 \end{bmatrix}, \mathbf{D}^{-1} = -\frac{1}{9}\begin{bmatrix} 1 & -3 \\ -5 & 6 \end{bmatrix}.$$

Thus the $k$-th power can be easily calculated:

$$\mathbf{A}^k = \mathbf{C}\begin{bmatrix} 0.6 & 0.0 \\ 0.0 & 0.9 \end{bmatrix}^k \mathbf{C}^{-1} = \mathbf{C}\begin{bmatrix} 0.6^k & 0.0 \\ 0.0 & 0.9^k \end{bmatrix}\mathbf{C}^{-1}$$

Since the absolute value of both eigenvalues is less than 1, therefore $\boldsymbol{\Lambda}_1^k \to \mathbf{O}$ and thus $\mathbf{A}^k \to \mathbf{O}$ as $k \to \infty$. For the matrix $\mathbf{B}$

$$\mathbf{B}^k = \mathbf{D}\begin{bmatrix} 1.2 & 0.0 \\ 0.0 & 0.3 \end{bmatrix}^k \mathbf{D}^{-1} = \mathbf{D}\begin{bmatrix} 1.2^k & 0.0 \\ 0.0 & 0.3^k \end{bmatrix}\mathbf{D}^{-1},$$

which leads to $\boldsymbol{\Lambda}_2^k \to \left[\begin{smallmatrix} \infty & 0 \\ 0 & 0 \end{smallmatrix}\right]$ and taking into account the signs of the elements of $\mathbf{D}$ and $\mathbf{D}^{-1}$, thus $\mathbf{B}^k \to \left[\begin{smallmatrix} \infty & -\infty \\ -\infty & \infty \end{smallmatrix}\right]$ as $k \to \infty$. $\square$

If $f(x) = \sum_{k=0}^{\infty} a_k x^k$ and $\mathbf{D}$ is diagonal, furthermore the main diagonal elements of $\mathbf{D}$ are in the domain of convergence of the power series, then

$$\begin{aligned} f(\mathbf{D}) &= \sum_{k=0}^{\infty} a_k \mathbf{D}^k = \operatorname{diag}\left(\sum_{k=0}^{\infty} a_k d_1^k, \ldots, \sum_{k=0}^{\infty} a_k d_n^k\right) \\ &= \operatorname{diag}(f(d_1), \ldots, f(d_n)). \end{aligned}$$

According to this, for example, the power $e^{\mathbf{A}}$ can be interpreted for any diagonalizable matrix $\mathbf{A}$, namely

$$e^{\mathbf{A}} = \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \cdots + \frac{\mathbf{A}^n}{n!} + \ldots$$

The matrix function $\ln(\mathbf{I} + \mathbf{A})$ can be defined similarly. Using the power series

$$\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \ldots \qquad |x| < 1$$

we get that

$$\ln(\mathbf{I} + \mathbf{A}) = \mathbf{A} - \frac{\mathbf{A}^2}{2} + \frac{\mathbf{A}^3}{3} - \frac{\mathbf{A}^4}{4} + \ldots,$$

where $\varrho(\mathbf{A}) < 1$. Based on the above, we can formulate two conjectures:

> ▶ The value of a function that can be expanded into a power series taken on a diagonal matrix – and thus on any diagonalizable matrix – is influenced only by the behavior of the function at the eigenvalues.

> ▶ According to the Cayley–Hamilton theorem, every matrix satisfies its own characteristic equation, so every power of an $n$-th order matrix can be replaced by a linear combination of at most $n - 1$-th powers, i.e., the value of the function can also be calculated by substitution into a polynomial.

### Calculating a matrix function from the Jordan form

The powers and thus the polynomials of a matrix written in Jordan normal form can be expressed using the functions of the eigenvalues. This makes it possible to define the function of an arbitrary square matrix!

One simple consequence of the Jordan normal form is the following:

**Proposition 11.19 (Polynomial of a matrix).** *Let the Jordan decomposition of the matrix $\mathbf{A} \in \mathbb{C}^{n \times n}$ be $\mathbf{A} = \mathbf{C}\mathbf{J}\mathbf{C}^{-1}$ and let $p \in \mathbb{C}[x]$ be an arbitrary polynomial. Then*

$$p(\mathbf{A}) = \mathbf{C}p(\mathbf{J})\mathbf{C}^{-1} = \mathbf{C}\begin{bmatrix} p(\mathbf{J}_1) & \mathbf{O} & \ldots & \mathbf{O} \\ \mathbf{O} & p(\mathbf{J}_2) & \ldots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \ldots & p(\mathbf{J}_k) \end{bmatrix}\mathbf{C}^{-1}, \tag{11.4}$$

The general form of the polynomial of a Jordan block can be written down using the derivatives of the polynomial, but we will do this in a more general form, for an arbitrary function (having a Taylor polynomial or Taylor series). Suppose that the function $f$ can be expanded into a Taylor series around $\lambda$, i.e.,

$$f(x) = f(\lambda) + f'(\lambda)(x - \lambda) + \ldots + \frac{f^{(m)}(\lambda)}{m!}(x - \lambda)^m + \ldots$$

and let $\mathbf{J} \in \mathbb{C}^{n \times n}$ be a Jordan block, i.e.,

$$\mathbf{J} = \lambda\mathbf{I} + \mathbf{N} = \begin{bmatrix} \lambda & 0 & \ldots & 0 \\ 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \lambda \end{bmatrix} + \begin{bmatrix} 0 & 1 & 0 & \ldots \\ 0 & 0 & 1 & \ldots \\ 0 & 0 & 0 & \ddots \\ \vdots & \vdots & \ddots & \ddots \end{bmatrix} = \begin{bmatrix} \lambda & 1 & 0 & \ldots \\ 0 & \lambda & 1 & \ldots \\ 0 & 0 & \lambda & \ddots \\ \vdots & \vdots & \ddots & \ddots \end{bmatrix}.$$

Since $\mathbf{N}^n = \mathbf{O}$, the relation

$$f(\mathbf{J}) = f(\lambda\mathbf{I} + \mathbf{N}) = f(\lambda)\mathbf{I} + f'(\lambda)\mathbf{N} + \ldots + \frac{f^{(n-1)}(\lambda)}{(n-1)!}\mathbf{N}^{n-1} \tag{11.5}$$

must hold – if the expression $f(\mathbf{J})$ makes sense at all. So only the derivatives of the function $f$ of order lower than the order of the Jordan matrix play a role in the function value. This leads to the following two definitions.

**Definition 11.20 (Function defined on the spectrum).** *Let the spectrum of the matrix $\mathbf{A}$ be $\{\lambda_1, \ldots, \lambda_k\}$, let the order of the largest Jordan block belonging to the eigenvalue $\lambda_i$ be denoted by $m_i$. We say that $f$ is defined on the spectrum of $\mathbf{A}$ if the values*

$$f^{(j)}(\lambda_i), \quad j = 0, 1, \ldots, m_i - 1,\ i = 1, \ldots, k$$

*exist. We say that these values are the values of $f$ on the spectrum of $\mathbf{A}$.*

> ▶ Every function that is infinitely differentiable at every point of $\mathbb{C}$ is defined for an arbitrary matrix on its spectrum. Thus every polynomial is defined on the spectrum of every matrix, which will be in accordance with the fact that any polynomial function of every square matrix is defined.

> ▶ If $\mu$ is the minimal polynomial of the matrix $\mathbf{A}$, then $\mu$ is defined on the spectrum of $\mathbf{A}$, and the values of $\mu$ on the spectrum of $\mathbf{A}$ are all zeros. This immediately follows from the representation of the minimal polynomial in Theorem 11.14 and the above definition.

**Definition 11.21 (Matrix function from the Jordan form).** *Let the Jordan decomposition of $\mathbf{A} \in \mathbb{C}^{n \times n}$ be $\mathbf{A} = \mathbf{C}\mathbf{J}\mathbf{C}^{-1}$, where $\mathbf{J} = \operatorname{diag}(\mathbf{J}_1, \ldots, \mathbf{J}_k)$ is its Jordan normal form, and $n_i$ denotes the order of the block $\mathbf{J}_i$. Then*

$$f(\mathbf{A}) = \mathbf{C}f(\mathbf{J})\mathbf{C}^{-1} = \mathbf{C}\operatorname{diag}(f(\mathbf{J}_1), \ldots, f(\mathbf{J}_k))\mathbf{C}^{-1},$$

*where*

$$f(\mathbf{J}_i) = \begin{bmatrix} f(\lambda_i) & f'(\lambda_i) & \frac{f''(\lambda_i)}{2!} & \ldots & \frac{f^{(n_i-2)}(\lambda_i)}{(n_i-2)!} & \frac{f^{(n_i-1)}(\lambda_i)}{(n_i-1)!} \\ 0 & f(\lambda_i) & f'(\lambda_i) & \ldots & \ldots & \frac{f^{(n_i-2)}(\lambda_i)}{(n_i-2)!} \\ \vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & f'(\lambda_i) & \frac{f''(\lambda_i)}{2!} \\ 0 & 0 & 0 & \ldots & f(\lambda_i) & f'(\lambda_i) \\ 0 & 0 & 0 & \ldots & 0 & f(\lambda_i) \end{bmatrix} \tag{11.6}$$

> ▶ By simple formula substitution in the case of $f(x) = x^3$
>
> $$\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}^3 = \begin{bmatrix} f(2) & f'(2) \\ 0 & f(2) \end{bmatrix} = \begin{bmatrix} 8 & 12 \\ 0 & 8 \end{bmatrix}.$$

> ▶ In the case of the function $f(x) = e^x$, if
>
> $$\mathbf{A} = \begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{bmatrix}, \quad \text{then } e^{\mathbf{A}} = \begin{bmatrix} e^2 & e^2 & \frac{e^2}{2} \\ 0 & e^2 & e^2 \\ 0 & 0 & e^2 \end{bmatrix} = e^2\begin{bmatrix} 1 & 1 & \frac{1}{2} \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}.$$

> ▶ In general, for the Jordan block belonging to $\lambda$
>
> $$\mathbf{J} = \begin{bmatrix} \lambda & 1 & 0 & \ldots & 0 \\ 0 & \lambda & 1 & \ldots & 0 \\ 0 & 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & \lambda \end{bmatrix} \quad \text{we have } e^{\mathbf{J}} = e^{\lambda}\begin{bmatrix} 1 & 1 & \frac{1}{2!} & \ldots & \frac{1}{(n-1)!} \\ 0 & 1 & 1 & \ldots & \frac{1}{(n-2)!} \\ 0 & 0 & 1 & \ldots & \frac{1}{(n-3)!} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & 1 \end{bmatrix}$$

**Example 11.22 (Matrix exponential function).** *Let*

$$\mathbf{A} = \begin{bmatrix} -3 & 2 & 1 \\ 1 & -2 & 1 \\ -1 & -2 & -5 \end{bmatrix}$$

*Determine the matrix $e^{\mathbf{A}}$!*

**Solution.** The characteristic polynomial of $\mathbf{A}$ is

$$x^3 + 10x^2 + 32x + 32 = (x + 2)(x + 4)^2,$$

thus

$$\mathbf{J} = \begin{bmatrix} -2 & 0 & 0 \\ 0 & -4 & 0 \\ 0 & 0 & -4 \end{bmatrix}, \quad \mathbf{P} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ -1 & -1 & -2 \end{bmatrix},$$

$$e^{\mathbf{A}} = \mathbf{P}e^{\mathbf{J}}\mathbf{P}^{-1} = \frac{1}{2e^4}\begin{bmatrix} e^2 + 1 & 2e^2 - 2 & e^2 - 1 \\ e^2 - 1 & 2e^2 & e^2 - 1 \\ 1 - e^2 & 2 - 2e^2 & 3 - e^2 \end{bmatrix} \qquad \square$$

### Calculating a matrix function using polynomial interpolation

The fact that previously the calculation of a function of a matrix actually only required the calculation of a polynomial of the matrix suggests that we can also calculate a function of a matrix using polynomial interpolation.

The basic idea is that if $f$ is a function defined on the spectrum of the matrix $\mathbf{A}$, then it is enough to find the polynomial (or a polynomial) that gives the same substitution values as the substitution values of the function and its derivatives. This idea is founded on the following proposition:

**Proposition 11.23 (Polynomials yielding identical values on the spectrum).** *For arbitrary polynomials $p$ and $q$ and matrix $\mathbf{A} \in \mathbb{C}^{n \times n}$, $p(\mathbf{A}) = q(\mathbf{A})$ holds if and only if the values of $p$ and $q$ on the spectrum of $\mathbf{A}$ are identical.*

**Proof.** If $p(\mathbf{A}) = q(\mathbf{A})$, then $h = p - q$ annihilates $\mathbf{A}$, thus $h$ is divisible by the minimal polynomial, so together with the minimal polynomial, the values of $h$ are also zero on the spectrum of $\mathbf{A}$.

If the values of $p$ and $q$ on the spectrum of $\mathbf{A}$ are identical, then the values of the polynomial $h = p - q$ are all zero. The form of such polynomials is $\prod_{i=1}^{s}(x - \lambda_i)^{m_i}g(x)$, i.e., $h = \mu g$, so $h$ annihilates $\mathbf{A}$, thus $p(\mathbf{A}) = q(\mathbf{A})$. $\square$

**Definition 11.24 (Matrix function with interpolation polynomial).** *Let the minimal polynomial of $\mathbf{A}$ be $\mu_{\mathbf{A}}$, and suppose that the function $f$ is defined on the spectrum of $\mathbf{A}$. Then $f(\mathbf{A}) := p(\mathbf{A})$, where $p$ is the polynomial whose degree is less than the degree of $\mu_{\mathbf{A}}$, and which satisfies the conditions*

$$p^{(j)}(\lambda_i) = f^{(j)}(\lambda_i), \quad j = 0, 1, \ldots, m_i - 1,\ i = 1, \ldots, k \tag{11.7}$$

*where $m_i$ denotes the order of the largest Jordan block corresponding to the eigenvalue $\lambda_i$.*

> ▶ The polynomial specified in the definition uniquely exists; this is called the *Hermite interpolation polynomial*, which can also be given explicitly:
>
> $$p(x) = \sum_{i=1}^{s}\left(\left(\sum_{j=0}^{m_i-1}\left(\frac{f(y)}{\prod_{k \neq i}(y - \lambda_k)}\right)^{(j)}(\lambda_i)\frac{(x - \lambda_i)^j}{j!}\right)\prod_{j \neq i}(x - \lambda_j)^{m_j}\right).$$

If every eigenvalue of $\mathbf{A}$ is of algebraic multiplicity one, i.e., $s = n$ and $m_i = 1$ for all $i$, then the previous formula yields the known Lagrange interpolation polynomial:

$$p(x) = \sum_{i=1}^{n}\left(f(\lambda_i)\prod_{j \neq i}\frac{x - \lambda_j}{\lambda_i - \lambda_j}\right). \tag{11.8}$$

And if $\mathbf{A}$ has only a single eigenvalue $\lambda$, whose algebraic multiplicity is $n$, i.e., $s = 1$, $m_1 = n$, then we get the Taylor polynomial of $f$:

$$p(x) = \sum_{j=0}^{n-1} f^{(j)}(\lambda)\frac{(x - \lambda)^j}{j!}.$$

> ▶ Although the Hermite polynomial is unique, we cannot always determine it easily, for example, if we only know the eigenvalues of the matrix, but not the size of the largest Jordan block. According to Proposition 11.23, any other polynomial that satisfies conditions (11.7) is also suitable.

> ▶ Let us look at the substitution value of the function $f(x) = x^3$ in the matrix $\mathbf{A} = \left[\begin{smallmatrix} 2 & 1 \\ 0 & 2 \end{smallmatrix}\right]$. Although $f$ is a polynomial, since $\mu_{\mathbf{A}}(x) = (x - 2)^2$, i.e., the minimal polynomial has a lower degree, there exists a polynomial of degree one which yields the same value at $\mathbf{A}$. This polynomial is the remainder of the division $x^3 : \mu_{\mathbf{A}}(x)$. Since $x^3 = (x - 2)^2(x + 4) + (12x - 16)$, i.e., the remainder is $12x - 16$, therefore
>
> $$\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}^3 = 12\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix} - 16\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 8 & 12 \\ 0 & 8 \end{bmatrix}.$$

> ▶ The polynomial in the previous remark can also be obtained by finding the Hermite interpolating polynomial for the function $f$, i.e., we are looking for a polynomial $p(x) = ax + b$ whose substitution value and the substitution value of its derivative match the corresponding substitution values of $f$:
>
> $$\begin{aligned} f(2) &= 8 = p(2) = 2a + b \\ f'(2) &= 12 = p'(2) = a. \end{aligned}$$

From here $a = 12$, $b = -16$, which is identical to the previous result.

> ▶ Similarly, the value of $e^{\mathbf{A}}$ for the matrix
>
> $$\mathbf{A} = \begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{bmatrix}$$

can be easily calculated. Since $\mu_{\mathbf{A}}(x) = (x - 2)^3$, there is a Hermite polynomial of at most degree two. Let this be $p(x) = ax^2 + bx + c$. Then

$$\begin{aligned} e^x|_2 &= e^2 = p(2) = 4a + 2b + c \\ (e^x)'|_2 &= e^2 = p'(2) = 4a + b \\ (e^x)''|_2 &= e^2 = p''(2) = 2a. \end{aligned}$$

From here $a = e^2/2$, $b = -e^2$, $c = e^2$, thus

$$\begin{aligned} e^{\mathbf{A}} = p(\mathbf{A}) &= \frac{e^2}{2}\mathbf{A}^2 - e^2\mathbf{A} + e^2\mathbf{I} \\ &= \frac{e^2}{2}\begin{bmatrix} 4 & 4 & 1 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix} - e^2\begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 1 \end{bmatrix} + e^2\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \\ &= e^2\begin{bmatrix} 1 & 1 & \frac{1}{2} \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}. \end{aligned}$$

**Example 11.25 (Exponential function with Hermite polynomial).** *Calculate the matrix $e^{\mathbf{A}}$ if*

$$\mathbf{A} = \begin{bmatrix} -3 & 2 & 1 \\ 1 & -2 & 1 \\ -1 & -2 & -5 \end{bmatrix}$$

*(see also Example 11.22).*

**Solution.** In the solution of Example 11.22 we saw that the characteristic polynomial is $\chi_{\mathbf{A}}(x) = (x + 2)(x + 4)^2$, and on the other hand, the Jordan form is $\operatorname{diag}(-2, -4, -4)$, so the largest Jordan block is $1 \times 1$, therefore the minimal polynomial is $\mu_{\mathbf{A}}(x) = (x + 2)(x + 4) = x^2 + 6x + 8$. Thus we are looking for a polynomial of degree one of the form $p(x) = ax + b$ for which

$$\begin{aligned} e^{-2} &= p(-2) = -2a + b \\ e^{-4} &= p(-4) = -4a + b. \end{aligned}$$

From here $a = \frac{1}{2}(e^{-2} - e^{-4})$, $b = 2e^{-2} - e^{-4}$, thus

$$e^{\mathbf{A}} = a\mathbf{A} + b\mathbf{I} = \frac{1}{2e^4}\begin{bmatrix} e^2 + 1 & 2e^2 - 2 & e^2 - 1 \\ e^2 - 1 & 2e^2 & e^2 - 1 \\ 1 - e^2 & 2 - 2e^2 & 3 - e^2 \end{bmatrix}. \qquad \square$$

**Theorem 11.26 (Equivalence of definitions).** *Definitions 11.21 and 11.24 given for calculating the matrix function are equivalent.*

**Proof.** According to Definition 11.24, $f(\mathbf{A}) = p(\mathbf{A})$ and according to Proposition 11.23 any other polynomial also gives $f(\mathbf{A})$ if it satisfies conditions (11.7). At the same time, Definition 11.21 involves exactly those derivatives of $f$ evaluated at those eigenvalues which also appear in conditions (11.7). Thus it is enough to verify only whether the Hermite polynomial of a Jordan block matches the one in Definition 11.21. This is justified by formula (11.5) that can be written for the Taylor polynomial of the polynomial. $\square$

**Example 11.27 (Functions of a Fourier matrix).** *Consider the unitary*

$$\mathbf{W}_N = \frac{1}{\sqrt{N}}\left[\omega^{kn}\right]_{k,n=0}^{N-1}, \quad \omega = e^{-2\pi i/N}$$

*Fourier matrix. Determine the polynomial $p$ in terms of the function $f$, for which $p(\mathbf{W}_N) = f(\mathbf{W}_N)$.*

**Solution.** Since $\mathbf{W}_N^4 = \mathbf{I}$, and thus for $N > 3$ the minimal polynomial of $\mathbf{W}_N$ is $\mu_{\mathbf{W}_N}(x) = x^4 - 1$, therefore $f$ has an interpolating polynomial of at most degree three. Since the roots of $x^4 - 1$ are distinct ($\pm 1$, $\pm i$), the Lagrange form of the interpolating polynomial in (11.8) can be used:

$$\begin{aligned} p(x) = \frac{1}{4}\big(&f(1)(t + 1)(t - i)(t + i) - f(-1)(t - 1)(t - i)(t + i) \\ &+ if(i)(t - 1)(t + 1)(t + i) - if(-i)(t - 1)(t + 1)(t - i)\big). \end{aligned}$$

This polynomial is also good in cases $N \leqslant 3$, although it is not of the lowest degree among the interpolating polynomials. $\square$

## Solutions

**11.1.** If $\mathcal{U}$ is an invariant subspace, then by definition the image of every vector of $\mathcal{U}$ is in $\mathcal{U}$, thus also the basis vectors, i.e., $L\mathbf{u}_i \in \mathcal{U}$ ($i = 1, \ldots, k$).

Conversely, assume that for every element $\mathbf{u}_i$ of the basis $L\mathbf{u}_i \in \mathcal{U}$. Let $\mathbf{x} \in \mathcal{U}$ be an arbitrary vector. Then there are numbers $x_1, x_2, \ldots, x_k$ such that $\mathbf{x} = x_1\mathbf{u}_1 + x_2\mathbf{u}_2 + \ldots + x_k\mathbf{u}_k$. Thus

$$L\mathbf{x} = x_1 L\mathbf{u}_1 + x_2 L\mathbf{u}_2 + \ldots + x_k L\mathbf{u}_k \in \mathcal{U},$$

since a linear combination of vectors in $\mathcal{U}$ is also in $\mathcal{U}$.

**11.2.** It must be verified that $L\mathbf{u}, L\mathbf{v} \in \mathcal{U}$. This can be read, for example, from the rank of the matrix $[\mathbf{u} \mid \mathbf{v} \mid L\mathbf{u} \mid L\mathbf{v}]$:

$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ -1 & 2 & -2 & 1 \\ 2 & -1 & 3 & 0 \\ -1 & 2 & -2 & 1 \end{bmatrix} \to \operatorname{rref}$$

Since the rank is two, $\mathcal{U}$ is an invariant subspace.

**11.4.** The characteristic polynomial is of degree four, so the matrix is $4 \times 4$. Since every eigenvalue is 1, the main diagonal of the Jordan form contains only 1s. The possible five forms can be obtained by elementary enumeration:

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix},$$

$$\begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

Forms obtained from each other by swapping blocks are not considered distinct. For example, the matrix

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

can be obtained from the fourth form by swapping the two blocks.

**11.5.** The columns of $\mathbf{C}$ form a Jordan basis, i.e., every column vector is an element of a Jordan chain. Since the matrix $\mathbf{A}$ has only two distinct eigenvalues, this means that every column vector is mapped by either the matrix $\mathbf{A} - 2\mathbf{I}$ or $\mathbf{A} - 4\mathbf{I}$ into either the zero vector or another column vector (in the former case the column vector is an eigenvector, in the latter case only a generalized eigenvector). This effect can be obtained by calculating the products $(\mathbf{A} - 2\mathbf{I})\mathbf{C}$ and $(\mathbf{A} - 4\mathbf{I})\mathbf{C}$:

$$(\mathbf{A} - 2\mathbf{I})\mathbf{C} = \begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 2 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 3 & 1 & 0 & 0 \\ 0 & 0 & 2 & 3 & 3 & 0 & 0 \\ 0 & 0 & 0 & 2 & 3 & 2 & 0 \\ 0 & 0 & 0 & 0 & 2 & 2 & 0 \end{bmatrix},$$

$$(\mathbf{A} - 4\mathbf{I})\mathbf{C} = \begin{bmatrix} -2 & -1 & 0 & 0 & 0 & 0 & 0 \\ -2 & -1 & -2 & 0 & 0 & 0 & 0 \\ 0 & -2 & -2 & 0 & 1 & 0 & 0 \\ 0 & 0 & -2 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

From the first product it is visible that $(\mathbf{A} - 2\mathbf{I})[\mathbf{c}_1\ \mathbf{c}_2\ \mathbf{c}_3] = [\mathbf{0}\ \mathbf{c}_1\ \mathbf{0}]$, while from the second that $(\mathbf{A} - 4\mathbf{I})[\mathbf{c}_4\ \mathbf{c}_5\ \mathbf{c}_6\ \mathbf{c}_7] = [\mathbf{0}\ \mathbf{c}_4\ \mathbf{c}_5\ \mathbf{0}]$ (in the second product it would not even have been necessary to multiply by the vectors $\mathbf{c}_1$, $\mathbf{c}_2$, $\mathbf{c}_3$ seeing the result of the previous multiplication).

From this the diagram can be drawn:

$$
\begin{aligned}
&\mathbf{0} \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_1 \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_2 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_3 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_4 \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_5 \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_6 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_7
\end{aligned}
$$

From the diagram the effect of $\mathbf{A}$ on the vectors $\mathbf{c}_i$ can be read off: $\mathbf{A}\mathbf{c}_1 = 2\mathbf{c}_1$, $\mathbf{A}\mathbf{c}_2 = 2\mathbf{c}_2 + \mathbf{c}_1$, $\mathbf{A}\mathbf{c}_3 = 2\mathbf{c}_3$, $\mathbf{A}\mathbf{c}_4 = 4\mathbf{c}_4$, $\mathbf{A}\mathbf{c}_5 = 4\mathbf{c}_5 + \mathbf{c}_4$, $\mathbf{A}\mathbf{c}_6 = 4\mathbf{c}_6 + \mathbf{c}_5$, $\mathbf{A}\mathbf{c}_7 = 4\mathbf{c}_7$. From this the matrix of this mapping can be written:

$$\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \left[\begin{array}{ccc|cccc} 2 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 & 0 & 0 \\ \hline 0 & 0 & 2 & 0 & 0 & 0 & 0 \\ \hline 0 & 0 & 0 & 4 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 4 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 & 0 \\ \hline 0 & 0 & 0 & 0 & 0 & 0 & 4 \end{array}\right]$$

# 12. Nonnegative matrices

Matrices whose elements are nonnegative numbers have a particularly large number of applications. Such matrices are, for example, those whose elements are measurement results, economic data, probabilities,...

## The Perron–Frobenius theory

### Comparison of matrices

We will use the usual relational symbols to compare matrices element by element. $\mathbf{A} > \mathbf{B}$ means that both matrices are of the same size, and $a_{ij} > b_{ij}$ for all possible indices $i$ and $j$. Similarly $\mathbf{A} \geqslant \mathbf{B}$ if $a_{ij} \geqslant b_{ij}$. A matrix $\mathbf{A}$ is called *positive* (*nonnegative*), if $\mathbf{A} > \mathbf{O}$ ($\mathbf{A} \geqslant \mathbf{O}$), i.e., if $a_{ij} > 0$ ($a_{ij} \geqslant 0$). Here $\mathbf{O}$ denotes the zero matrix. We also use these concepts and notations for vectors: the vector $\mathbf{x}$ is positive, i.e., $\mathbf{x} > \mathbf{0}$, if all coordinates of $\mathbf{x}$ are positive.

Some easily justifiable observations:

$$\mathbf{A} \geqslant \mathbf{O} \Leftrightarrow \mathbf{A}\mathbf{x} \geqslant \mathbf{0} \text{ for every vector } \mathbf{x} \geqslant \mathbf{0}, \tag{12.1}$$

$$\mathbf{A} > \mathbf{O} \Leftrightarrow \mathbf{A}\mathbf{x} > \mathbf{0} \text{ for every vector } \mathbf{x} \geqslant \mathbf{0},\ \mathbf{x} \neq \mathbf{0}, \tag{12.2}$$

$$\mathbf{A} \geqslant \mathbf{O}, \text{ and } \mathbf{x} \geqslant \mathbf{y} \geqslant \mathbf{0} \Rightarrow \mathbf{A}\mathbf{x} \geqslant \mathbf{A}\mathbf{y}. \tag{12.3}$$

We will classify nonnegative matrices into four classes depending on the sense in which their higher powers become positive. We will use the notation $a_{ij}^{(k)}$ for the elements of the $k$-th power of the matrix $\mathbf{A}$, i.e., $\mathbf{A}^k = \big[a_{ij}^{(k)}\big]$

**Definition 12.1 (Primitive, irreducible and reducible matrices).** *We say that a nonnegative square matrix $\mathbf{A}$ is* primitive *if some of its positive integer powers is positive. $\mathbf{A}$ is* irreducible *if for every index pair $(i, j)$ there is an exponent $k$ such that $a_{ij}^{(k)} > 0$, and* reducible *if there is an index pair $(i, j)$ such that for every exponent $k$ we have $a_{ij}^{(k)} = 0$.*

> *For example, the matrix $\begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ is positive, so it is also primitive, since its first power is positive, the matrix $\begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix} \geqslant \mathbf{O}$ is primitive, because $\begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}^2 = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix} > \mathbf{O}$*

> *The matrix $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ is not primitive, since $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}^2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$, thus $\mathbf{A}^{2k+1} = \mathbf{A}$, $\mathbf{A}^{2k} = \mathbf{I}$, and these are not positive matrices. On the other hand, the elements in the main diagonal are positive in even powers, those in the secondary diagonal in odd powers, so this matrix is irreducible. This example also shows that if a matrix is irreducible, it does not follow that it is also primitive. That is, from "for every element there exists an exponent $k$", it does not follow that there exists a common exponent $k$ as well.*

> *Finally, the matrix $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ is reducible, since $\mathbf{A}^k = \begin{bmatrix} 1 & 0 \\ k & 1 \end{bmatrix}$, in which $a_{12}^{(k)} = 0$ for every exponent $k$.*

Table 12.1 briefly summarizes the definition of these four degrees of positivity.

| $\mathbf{A}$ positive: | $\forall i, j$ | $a_{ij} > 0$ |
|---|---|---|
| $\mathbf{A}$ primitive: | $\exists k\ \forall i, j$ | $a_{ij}^{(k)} > 0$ |
| $\mathbf{A}$ irreducible: | $\forall i, j\ \exists k$ | $a_{ij}^{(k)} > 0$ |
| $\mathbf{A}$ reducible: | $\exists i, j\ \forall k$ | $a_{ij}^{(k)} = 0$ |

> *Table 12.1: $\mathbf{A} = [a_{ij}] \geqslant \mathbf{O}$. Definition of positive, primitive, irreducible, reducible matrices.*

By the *spectral radius* $\varrho(\mathbf{A})$ of a real or complex matrix $\mathbf{A}$ we mean the absolute value of its largest absolute value eigenvalue. In other words, the spectral radius is the radius of the smallest circle in the complex plane centered at the origin that contains all the eigenvalues.

### Positive matrices

In this section we only investigate positive matrices. The theory to be presented here originates from Perron, which we summarize in two theorems.

**Theorem 12.2 (Perron's theorem: positive eigenvalue and eigenvector).** *If $\mathbf{A}$ is a positive matrix and $r = \varrho(\mathbf{A})$ denotes its spectral radius, then*

1. *$r > 0$,*
2. *$r$ is an eigenvalue with a positive eigenvector,*
3. *Apart from the scalar multiples of this positive eigenvector, $\mathbf{A}$ has no other nonnegative eigenvectors.*

**Proof.** 1. If $r = 0$, then every eigenvalue of $\mathbf{A}$ is 0, i.e., $\mathbf{A}$ is nilpotent by Theorem 8.19. However, this is impossible for a positive matrix, since every power of it is positive, so none of them is $\mathbf{O}$.

2. Let $\lambda \in \mathbb{C}$ be one of the eigenvalues with the largest absolute value, i.e., $|\lambda| = r$, and let $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ with the eigenvector $\mathbf{x}$. Let $\mathbf{p}$ be the vector consisting of the absolute values of the coordinates of $\mathbf{x}$, i.e., $\mathbf{p} = (|x_1|, |x_2|, \ldots, |x_n|)$. Let us write the $i$-th coordinate of both sides of $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, and then take its absolute value:

$$\left| \sum_{j=1}^{n} a_{ij} x_j \right| = |\lambda| |x_i|.$$

From this, using the triangle inequality, we get that

$$rp_i = |\lambda| |x_i| = \left| \sum_{j=1}^{n} a_{ij} x_j \right| \leqslant \sum_{j=1}^{n} a_{ij} p_j, \quad \text{i.e., } r\mathbf{p} \leqslant \mathbf{A}\mathbf{p}.$$

If equality holds here, we are done, since in case of $r\mathbf{p} = \mathbf{A}\mathbf{p}$, $r$ is indeed an eigenvalue. If not, then for the vector $\mathbf{u} = \mathbf{A}\mathbf{p} - r\mathbf{p}$ we have $\mathbf{u} \geqslant \mathbf{0}$ and at least one coordinate of $\mathbf{u}$ is strictly positive. According to (12.2), in this case $\mathbf{A}\mathbf{u} > \mathbf{0}$, i.e., $\mathbf{A}(\mathbf{A}\mathbf{p}) - r\mathbf{A}\mathbf{p} > \mathbf{0}$. With the notation $\mathbf{v} = \mathbf{A}\mathbf{p}$ this means $\mathbf{A}\mathbf{v} > r\mathbf{v}$, where $\mathbf{v} > \mathbf{0}$. We show that this leads to a contradiction, i.e., we show that there is no vector $\mathbf{v}$ such that $\mathbf{A}\mathbf{v} > r\mathbf{v}$. Let $\varepsilon > 0$ be a number for which the inequality $\mathbf{A}\mathbf{v} \geqslant (r + \varepsilon)\mathbf{v}$ still holds. For the matrix $\mathbf{B} = \frac{1}{r+\varepsilon}\mathbf{A}$, therefore, on the one hand $\mathbf{B}\mathbf{v} \geqslant \mathbf{v}$, and on the other hand $\varrho(\mathbf{B}) = \varrho(\frac{1}{r+\varepsilon}\mathbf{A}) = \frac{r}{r+\varepsilon} < 1$, i.e., the spectral radius of $\mathbf{B}$ is less than 1. This means that $\lim_{k\to\infty} \mathbf{B}^k = \mathbf{O}$. Thus if the vector sequence $\mathbf{v} \leqslant \mathbf{B}\mathbf{v} \leqslant \mathbf{B}^2\mathbf{v} \leqslant \cdots \leqslant \mathbf{B}^k\mathbf{v}$ tends to the vector $\mathbf{0}$, i.e., $\mathbf{v} \leqslant \mathbf{0}$, which contradicts our previous assumption. We have thus proved that $\mathbf{A}\mathbf{p} = r\mathbf{p}$.

We still have to show that $\mathbf{p} > \mathbf{0}$. We know that $\mathbf{p} \geqslant \mathbf{0}$, so due to relation (12.2) $\mathbf{A}\mathbf{p} > \mathbf{0}$, but $\mathbf{A}\mathbf{p} = r\mathbf{p}$, so $r\mathbf{p} > \mathbf{0}$, i.e., $\mathbf{p} > \mathbf{0}$.

3. Let $\mathbf{x} \geqslant \mathbf{0}$ be the eigenvector corresponding to the eigenvalue $\lambda$. Furthermore, let $\mathbf{q} > \mathbf{0}$ be the also positive eigenvector corresponding to $r$ of the matrix $\mathbf{A}^{\mathsf{T}}$, which has the same spectrum, i.e., $\mathbf{q}^{\mathsf{T}}\mathbf{A} = r\mathbf{q}^{\mathsf{T}}$. Then

$$r\mathbf{q}^{\mathsf{T}}\mathbf{x} = (\mathbf{q}^{\mathsf{T}}\mathbf{A})\mathbf{x} = \mathbf{q}^{\mathsf{T}}(\mathbf{A}\mathbf{x}) = \lambda\mathbf{q}^{\mathsf{T}}\mathbf{x},$$

from which, due to $\mathbf{q}^{\mathsf{T}}\mathbf{x} > 0$, $r = \lambda$ follows.

Finally, we show that apart from the scalar multiples of $\mathbf{p}$, no other eigenvector belongs to $r$. Assume indirectly that $\mathbf{s}$ is an eigenvector independent of $\mathbf{p}$. Then with a suitable constant $c$, it can be achieved that the vector $\mathbf{p} + c\mathbf{s} \geqslant \mathbf{0}$ has a coordinate 0. According to relation (12.2) $r(\mathbf{p} + c\mathbf{s}) = \mathbf{A}(\mathbf{p} + c\mathbf{s}) > \mathbf{0}$, which is impossible, since it has a 0-coordinate. Thus we have shown that the geometric multiplicity of $r$ is 1, and no nonnegative eigenvector belongs to any other eigenvalue. $\square$

Its role in describing probability distributions justifies the following distinguished naming. A positive eigenvector $\mathbf{p}$ belonging to the spectral radius of a positive matrix as an eigenvalue is called a *Perron vector* if the sum of its coordinates is 1, i.e., its 1-norm is 1. The similarly defined left eigenvector is called a *left Perron vector*. This coincides with the Perron vector of $\mathbf{A}^{\mathsf{T}}$. In summary: the Perron vector $\mathbf{p}$ and the left Perron vector $\mathbf{q}$ are defined by the formulas

$$\mathbf{A}\mathbf{p} = r\mathbf{p}, \quad \sum_{i=1}^{n} p_i = 1, \qquad \mathbf{q}^{\mathsf{T}}\mathbf{A} = r\mathbf{q}^{\mathsf{T}}, \quad \sum_{i=1}^{n} q_i = 1$$

**Theorem 12.3 (Perron's theorem: simple and dominant eigenvalue).** *If $\mathbf{A}$ is a positive matrix and $r = \varrho(\mathbf{A})$, then*

1. *the algebraic multiplicity of the eigenvalue $r$ is 1,*
2. *$r$ is dominant, i.e., for every other eigenvalue $\lambda$, $|\lambda| < r$.*

**Proof.** 1. In the previous theorem we proved that the geometric multiplicity of $r$ is 1. Suppose there is a generalized eigenvector $\mathbf{v} > \mathbf{0}$ for which $(\mathbf{A} - r\mathbf{I})\mathbf{v} = \mathbf{p}$, i.e., $\mathbf{A}\mathbf{v} = r\mathbf{v} + \mathbf{p}$. It can easily be achieved by adding an appropriate multiple $d$ of $\mathbf{p}$ to find a positive generalized eigenvector, because $(\mathbf{A} - r\mathbf{I})(\mathbf{v} + d\mathbf{p}) = \mathbf{p} + d(\mathbf{A} - r\mathbf{I})\mathbf{p} = \mathbf{p}$, so if $\mathbf{v}$ is an element preceding $\mathbf{p}$ in a Jordan chain, then so is $\mathbf{v} + d\mathbf{p}$. Let therefore $\mathbf{v} > \mathbf{0}$. Then $\mathbf{A}\mathbf{v} = r\mathbf{v} + \mathbf{p} > r\mathbf{v}$, which leads to a contradiction according to the proof of the second part of Theorem 12.2. Thus $\mathbf{A}$ has no generalized eigenvector belonging to $r$, so its algebraic multiplicity is 1.

2. We will show that if $\lambda$ is an eigenvalue of $\mathbf{A}$, then $|\lambda| < r$. We prove indirectly. Let $|\lambda| = r$, and $\mathbf{x}$ be an eigenvector belonging to $\lambda$. Repeating what was described in point 2 of the proof of the previous theorem and applying the triangle inequality concerning the sum of complex numbers, we get that

$$\sum_{j=1}^{n} a_{ij} |x_j| \leqslant \left| \sum_{j=1}^{n} a_{ij} x_j \right| = |\lambda| |x_i|. \tag{12.4}$$

As we have shown, in this case $(|x_1|, |x_2|, \ldots, |x_n|)$ is an eigenvector, the eigenvalue belonging to it is $r = |\lambda|$, and in inequality (12.4) equality must hold. The equality $|z_1 + \cdots + z_k| = |z_1| + \cdots + |z_k|$ for complex numbers holds if and only if all complex numbers have the same argument. In our case this means that there is an angle $\varphi$ such that for all $i$ we have $x_i = \mathrm{e}^{\mathrm{i}\varphi}|x_i|$. Therefore $\mathbf{x} = \mathrm{e}^{\mathrm{i}\varphi}\mathbf{p}$, so $\lambda = r$. $\square$

> *There is a typographical difference between the upright i of the imaginary unit and the italic $i$ of the variable index!*

### Nonnegative matrices

None of the properties stated in Perron's theorems for positive matrices remain unconditionally valid for nonnegative matrices. For example,

- the matrix $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$ is nonnegative, but since both of its eigenvalues are 0, its spectral radius is also 0,
- the spectral radius of the matrix $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ is 1, but 1 is an eigenvalue of multiplicity two, and multiple linearly independent positive eigenvectors belong to it,
- the eigenvalues of the matrix $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ are 1 and $-1$, so its spectral radius is also 1, but it has several distinct eigenvalues on the spectral circle,
- the matrix $\begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ has no positive eigenvectors.

At the same time, it cannot be said that if a nonnegative matrix has 0 elements, then the statements of Perron's theorems do not hold. For example,

- the matrix $\begin{bmatrix} 1 & 1 \\ 2 & 0 \end{bmatrix}$ is nonnegative, its eigenvalues are 2, $-1$, so its spectral radius is 2, which is a simple eigenvalue and the only eigenvalue on the spectral circle; the eigenvector $(1, 1)$ belonging to it is positive, and apart from its constant multiples there is no other positive eigenvector, because the eigenvector belonging to $-1$ is $(1, -2)$.

From the statements of Perron's theorems, after some weakening, the following statement remains valid for all nonnegative matrices:

**Theorem 12.4 (Perron–Frobenius theorem – weak version).** *If $\mathbf{A}$ is a nonnegative matrix, then the spectral radius $r = \varrho(\mathbf{A})$ is an eigenvalue of $\mathbf{A}$, to which a nonnegative eigenvector belongs.*

**Proof.** The basic idea of the proof is that we approximate the nonnegative matrix $\mathbf{A}$ with positive matrices, to which Perron's theorems can be used. Let

$$\mathbf{A}_k = \mathbf{A} + \frac{1}{k} \begin{bmatrix} 1 & 1 & \ldots & 1 \\ 1 & 1 & \ldots & 1 \\ \vdots & \vdots & \ddots & \vdots \\ 1 & 1 & \ldots & 1 \end{bmatrix}, \quad k \in \mathbb{N}.$$

Let $r_k$ denote the spectral radius of $\mathbf{A}_k$, $\mathbf{p}_k$ its Perron vector, and $r$ the spectral radius of matrix $\mathbf{A}$. The vectors $\mathbf{p}_k$ form a bounded set in $\mathbb{R}^n$, since all of their coordinates fall between 0 and 1, so they are in the unit cube. By the Bolzano–Weierstrass theorem, a convergent subsequence $\mathbf{p}_{k_m}$ can be selected from them. Let the limit be denoted by $\mathbf{p}$. We will show that $\mathbf{p}$ is an eigenvector of $\mathbf{A}$ corresponding to $r$, and that $\mathbf{p} \geqslant \mathbf{0}$, but $\mathbf{p} \neq \mathbf{0}$. Since $\mathbf{p}_k > \mathbf{0}$, we know about its limit that $\mathbf{p} \geqslant \mathbf{0}$. Consider the continuous function $f(\mathbf{x}) = \sum_{i=1}^{n} x_i$. Since $f(\mathbf{p}_{k_m}) = 1$, we also have $f(\mathbf{p}) = 1$, thus $\mathbf{p} \neq \mathbf{0}$.

Next, consider the sequence $r_k$. According to theorem ??, $\mathbf{A}_1 > \mathbf{A}_2 > \ldots \mathbf{A}_k > \cdots > \mathbf{A}$, so $r_1 \geqslant r_2 \geqslant \ldots \geqslant r_k \geqslant r$, i.e., the sequence $r_k$ is monotonically decreasing and bounded from below, so it is convergent. Let its limit be denoted by $\hat{r}$. This is at the same time the limit of the subsequence $r_{k_m}$. According to the above, $\hat{r} \geqslant r$. On the other hand

$$\mathbf{A}\mathbf{p} = \mathbf{A}\big(\lim_{m\to\infty} \mathbf{p}_{k_m}\big) = \lim_{m\to\infty} \mathbf{A}\mathbf{p}_{k_m} = \lim_{m\to\infty} r_{k_m}\mathbf{p}_{k_m} = \hat{r}\mathbf{p}.$$

Thus $\hat{r}$ is an eigenvalue, but then $\hat{r} \leqslant r$. Therefore $\hat{r} = r$ and $\mathbf{A}\mathbf{p} = r\mathbf{p}$. $\square$

In the following we state two theorems which are unconditionally valid for nonnegative – and thus for positive – matrices.

**Theorem 12.5 (Collatz–Wielandt theorem).** *For the spectral radius $r$ of a matrix $\mathbf{A} \geqslant \mathbf{O}$*

$$r = \max_{\substack{\mathbf{x} \\ \mathbf{0} \neq \mathbf{x} \geqslant \mathbf{0}}} \min_{\substack{1 \leqslant i \leqslant n \\ x_i \neq 0}} \frac{[\mathbf{A}\mathbf{x}]_i}{x_i}. \tag{12.5}$$

> *Formulated differently:*
> $$r = \max_{\substack{\mathbf{x} \\ \mathbf{0} \neq \mathbf{x} \geqslant \mathbf{0}}} \max_{c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}} c \tag{12.6}$$

The formulas are to be understood such that for every vector $\mathbf{x}$ we compute the minimum of the fractions $[\mathbf{A}\mathbf{x}]_i/x_i$, and we take the maximum of these values, as $\mathbf{x}$ runs through the nonnegative vectors different from the zero vector. We excluded the case $x_i = 0$ from the search, but we could have also said that the fraction then should be $\infty$, so the minimum would not change. In the second formula, for every vector $\mathbf{x}$ we determine the largest number $c$ for which $c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}$, then we take the maximum of the $c$ values obtained this way.

**Proof.** The two formulations are obviously equivalent, since if for a given vector $\mathbf{x} \geqslant \mathbf{0}$, $c$ is the minimum of the fractions $\frac{[\mathbf{A}\mathbf{x}]_i}{x_i}$, then $c$ is at the same time the largest number for which $c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}$.

First we prove for a positive matrix $\mathbf{A}$. Let $\mathbf{q}$ be the left Perron vector, $r$ the spectral radius. Then, also using the possibility of division by the number $\mathbf{q}^{\mathsf{T}}\mathbf{x} > 0$

$$c\mathbf{x} \leqslant \mathbf{A}\mathbf{x} \quad \rightsquigarrow \quad c\mathbf{q}^{\mathsf{T}}\mathbf{x} \leqslant \mathbf{q}^{\mathsf{T}}\mathbf{A}\mathbf{x} = r\mathbf{q}^{\mathsf{T}}\mathbf{x} \quad \rightsquigarrow \quad c \leqslant r.$$

On the other hand, for the vector $\mathbf{x} = \mathbf{p}$, $r\mathbf{p} = \mathbf{A}\mathbf{p}$, so the maximum of the possible $c$ values is $r$.

Next remains the case $\mathbf{A} \geqslant \mathbf{O}$. We apply the idea used in the proof of the previous theorem. Let us denote by $\mathbf{q}_k$ the left Perron vector of the matrix $\mathbf{A}_k$ defined there. Then for a fixed vector $\mathbf{x} \geqslant \mathbf{0}$, $\mathbf{x} \neq \mathbf{0}$

$$0 \leqslant c\mathbf{x} \leqslant \mathbf{A}\mathbf{x} \leqslant \mathbf{A}_k\mathbf{x} \quad \rightsquigarrow \quad c\mathbf{q}_k^{\mathsf{T}}\mathbf{x} \leqslant \mathbf{q}_k^{\mathsf{T}}\mathbf{A}_k\mathbf{x} = r_k\mathbf{q}_k^{\mathsf{T}}\mathbf{x} \quad \rightsquigarrow \quad c \leqslant r_k.$$

Thus $c \leqslant \lim_k r_k = r$, from which, similarly to the previous ones, $r\mathbf{p} = \mathbf{A}\mathbf{p}$ follows for the vector $\mathbf{x} = \mathbf{p}$, so the maximum of the possible $c$ values is $r$. $\square$

**Theorem 12.6 (Estimation of the spectral radius of nonnegative matrices).** *If $\mathbf{A} \geqslant \mathbf{O}$, then the spectral radius falls between the minimum and maximum of the row sums, and between the minimum and maximum of the column sums, i.e.,*

$$\min_i \left\{ \sum_{j=1}^{n} a_{ij} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_i \left\{ \sum_{j=1}^{n} a_{ij} \right\}$$

$$\min_j \left\{ \sum_{i=1}^{n} a_{ij} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_j \left\{ \sum_{i=1}^{n} a_{ij} \right\}$$

**Proof.** The upper bound of the first inequality is proved by the fact that every Gerschgorin circle is contained in the circle of radius $\sum_{j=1}^{n} a_{ij}$ centered at 0.

The left-hand inequality follows from the Collatz–Wielandt theorem, because if $\mathbf{x} = \mathbf{1}$, then the quotient $[\mathbf{A}\mathbf{x}]_i/x_i$ is exactly the row sum, so its minimum is less than or equal to $\varrho(\mathbf{A})$.

The second inequalities are obtained if we apply the first one to $\mathbf{A}^{\mathsf{T}}$, whose spectrum and thus its spectral radius is also identical to that of $\mathbf{A}$. $\square$

### Irreducible matrices

In the previous section we saw that Perron's theorems do not remain valid in general, but there are matrices for which they do. Frobenius found the easily verifiable condition based on which it can be decided which group a nonnegative matrix belongs to: this condition is irreducibility.

**Proposition 12.7 (Reducible and irreducible matrices).** *The matrix $\mathbf{A} \geqslant \mathbf{O}$ is* reducible *if and only if by the identical permutation of its rows and columns it can be brought to the form*

$$\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$$

*, where $\mathbf{X}$ and $\mathbf{Z}$ are square matrices. That is, there exists a permutation matrix $\mathbf{P}$ such that $\mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}}$ is of the above form. Exactly those matrices are* irreducible *which cannot be brought to such a form.*

**Proof.** If we examine the powers of a nonnegative matrix, and the only question is in which power the value will be positive at a given position of the matrix, then the magnitude of the numbers does not matter, only their positive or zero nature. This leads to the following idea. Consider the graph in which a directed edge runs from the $i$-th vertex to the $j$-th exactly when $a_{ij} > 0$. The adjacency matrix $\mathbf{G}$ of this graph can be obtained from $\mathbf{A}$ by replacing the positive numbers with 1. It is easy to see that the element $[\mathbf{G}^2]_{ij}$ of matrix $\mathbf{G}^2$ is positive if and only if there is a directed path of length 2 from the $i$-th vertex to the $j$-th. Moreover, in general, element $[\mathbf{G}^k]_{ij}$ is positive if and only if there is a directed path of length $k$ from the $i$-th vertex to the $j$-th vertex. Thus $\mathbf{A}$ is irreducible if and only if in the graph assigned to it above, a directed path leads between any two vertices, i.e., if the graph is *strongly connected*. According to this, the matrix is reducible if and only if in its graph the vertices have a non-empty proper subset into which no edge leads from the outside (from the complementary vertex set). The identical permutation of the rows and columns of the adjacency matrix corresponds to the renumbering of the graph's vertices. The matrix $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$ in the theorem corresponds to a graph whose first $k$ vertices have no incoming edges, if $\mathbf{X}$ is a $k \times k$ matrix. This proves our proposition. $\square$

**Example 12.8.** *Determine which of the following matrices is reducible and which is irreducible! (For help, the row and column indices can be read from the non-zero matrix elements.)*

$$\mathbf{A} = \begin{bmatrix} 11 & 0 & 13 & 14 & 0 \\ 21 & 22 & 23 & 24 & 25 \\ 31 & 0 & 33 & 34 & 0 \\ 41 & 0 & 43 & 44 & 0 \\ 51 & 52 & 53 & 54 & 55 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 12 & 0 & 0 & 0 \\ 0 & 0 & 0 & 24 & 25 \\ 31 & 0 & 0 & 0 & 0 \\ 0 & 0 & 43 & 0 & 0 \\ 0 & 52 & 0 & 54 & 0 \end{bmatrix}.$$

**Solution.** On the matrix $\mathbf{A}$ it is easy to notice that it is reducible, because by swapping the first and last rows and columns, that is, with the following permutation matrix $\mathbf{P}$, it can be brought to the desired form:

$$\mathbf{P} = \begin{bmatrix} 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 & 0 \end{bmatrix}, \quad \mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}} = \left[\begin{array}{cc|ccc} 55 & 52 & 53 & 54 & 51 \\ 25 & 22 & 23 & 24 & 21 \\ \hline 0 & 0 & 33 & 34 & 31 \\ 0 & 0 & 43 & 44 & 41 \\ 0 & 0 & 13 & 14 & 11 \end{array}\right].$$

This is not the only permutation, e.g., the swap $1 \to 3 \to 4 \to 5 \to 2 \to 1$ will also do:

$$\mathbf{P} = \begin{bmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \end{bmatrix}, \quad \mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}} = \left[\begin{array}{cc|ccc} 22 & 25 & 21 & 23 & 24 \\ 52 & 55 & 51 & 53 & 54 \\ \hline 0 & 0 & 11 & 13 & 14 \\ 0 & 0 & 31 & 33 & 34 \\ 0 & 0 & 41 & 43 & 44 \end{array}\right].$$

The graph assigned to the matrix $\mathbf{A}$ is the first graph shown in Figure 12.1. Note that no edge runs into the point set $\{2, 5\}$ from the set $\{1, 3, 4\}$. This means that if we renumber the vertices by swapping numbers 5 and 1, then no edge runs into the set $\{1, 2\}$ from the set $\{3, 4, 5\}$. This exactly means that in any matrix which has this graph, its lower left $3 \times 2$ submatrix is a zero matrix. So the matrix is reducible.

In the matrix $\mathbf{B}$ there are more 0s, we would think this is more likely to be reducible, yet we do not find an appropriate permutation matrix $\mathbf{P}$. Its graph is strongly connected, for example, on the path 1-2-5-4-3-1 any point can be reached from any other. Thus $\mathbf{B}$ is irreducible. $\square$

> *Figure 12.1: The two graphs assigned to the matrices $\mathbf{A}$ and $\mathbf{B}$.*

> *It is important to note that Proposition 12.7 is about the* identical permutation of rows and columns*, so it is not enough to bring the matrix to the form $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$ with elementary row operations. The same operations must also be applied to the columns. For example, the matrix*
> $$\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$$
> *is irreducible, since it is the adjacency matrix of a directed cycle of length 3, but swapping the first two rows brings it to the desired form. However, if we also swap the first two columns, we no longer get the form $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$!*

> *Table 12.1 can be supplemented with the graph theoretic formulations:*

| $\mathbf{A}$ | algebraic condition | graph theoretic condition |
|---|---|---|
| positive: | $\forall i, j\quad a_{ij} > 0$ | directed complete graph |
| primitive: | $\exists k\ \forall i, j\quad a_{ij}^{(k)} > 0$ | there is a path of length $k$ between any two vertices |
| irreducible: | $\forall i, j\ \exists k\quad a_{ij}^{(k)} > 0$ | strongly connected |
| reducible: | $\exists i, j\ \forall k\quad a_{ij}^{(k)} = 0$ | not strongly connected |

Frobenius noticed and proved that irreducibility is the condition whose presence allows the statements of Theorem 12.2 to be extended to nonnegative matrices as well.

**Theorem 12.9 (Perron–Frobenius theorem – strong version).** *If the nonnegative matrix $\mathbf{A}$ is irreducible, and $r = \varrho(\mathbf{A})$ denotes its spectral radius, then*

1. *$r > 0$,*
2. *$r$ is an eigenvalue of $\mathbf{A}$, to which a positive eigenvector belongs,*
3. *Apart from the scalar multiples of this positive eigenvector, $\mathbf{A}$ has no other nonnegative eigenvectors,*
4. *$r$ is a simple eigenvalue.*

### Primitive and imprimitive matrices

Of the statements of Perron's theorem, the one that the spectral circle contains only a single eigenvalue did not remain true for irreducible nonnegative matrices. However, this property is also preserved for primitive matrices.

**Theorem 12.10 (Condition for matrix primitivity).** *If $\mathbf{A} \geqslant \mathbf{O}$ is irreducible and has a positive element in its main diagonal, then it is primitive.*

**Proof.** Let the $i$-th element of the main diagonal be positive. If $\mathbf{A}$ is irreducible, then a directed path leads from any vertex to the $i$-th vertex. Let $k_1$ denote the length of the longest path among them. Similarly, a path leads to any vertex from the $i$-th vertex. Let the length of the longest of these be denoted by $k_2$. Then we can reach any vertex from any vertex on a directed path of length $k = k_1 + k_2$ by touching the $i$-th vertex and making an appropriate number of cycles on the loop edge there. $\square$

**Example 12.11 (Primitive matrices).** *Determine which of the matrices*

$$\mathbf{A} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix},$$

$$\mathbf{D} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix}, \quad \mathbf{E} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \quad \mathbf{F} = \begin{bmatrix} 0 & 0 & 6 \\ 7 & 0 & 8 \\ 0 & 9 & 0 \end{bmatrix}$$

*is primitive! At the same time, investigate their irreducibility as well!*

**Solution.** Drawing the graph of the matrices we see that only $\mathbf{A}$ is reducible, so it is not primitive. The matrix $\mathbf{B}$ is positive, so it is also irreducible and primitive. $\mathbf{C}^3 = \mathbf{I}$, thus $\mathbf{C}^{3m} = \mathbf{I}$, so none of the powers of $\mathbf{C}$ will be positive, therefore $\mathbf{C}$ is imprimitive. The matrix $\mathbf{D}$ is irreducible, but its square

$$\mathbf{D}^2 = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$

is no longer so, thus the powers $\mathbf{D}^{2m}$ are not either, therefore none of the powers of $\mathbf{D}$ will be positive, so $\mathbf{D}$ is imprimitive. The matrix $\mathbf{E}$ is irreducible and has a positive element on its main diagonal, therefore it is primitive. For the matrix $\mathbf{F}$

$$\mathbf{F}^5 = \begin{bmatrix} 27216 & 20412 & 31104 \\ 36288 & 54432 & 57348 \\ 23814 & 46656 & 54432 \end{bmatrix} > \mathbf{O},$$

so $\mathbf{F}$ is primitive, but this calculation can be substituted by a simpler one. It is enough just to check whether an element in a power is 0 or not, i.e., instead of $\mathbf{F}$ we only need to compute with the matrix $\hat{\mathbf{F}}$ containing logical values, which is obtained from $\mathbf{F}$ by replacing the positive elements with 1 (1 if the element is positive, 0 if not). Thus instead of the multiplications in the matrix multiplications, it is enough to perform the logical AND operation, and instead of additions the logical OR operation. With this calculation the positivity of the elements of the powers of $\mathbf{F}$ can be read from the following sequence:

$$\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix} \to \begin{bmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{bmatrix} \to \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix} \to \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}$$

So from here it can also be seen that $\mathbf{F}^5 > \mathbf{O}$, that is, $\mathbf{F}$ is primitive. We can speed up this calculation even more if we always square the previous result. In this case, of course, we won't know which is the smallest power that is already positive. In the case of matrix $\mathbf{F}$ we obtain the following sequence:

$$
\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}
\rightarrow
\begin{bmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{bmatrix}
\rightarrow
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}
\rightarrow
\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}
$$

According to this $\mathbf{F}^8 > \mathbf{O}$, so $\mathbf{F}$ is primitive. $\square$

> *To summarize the lessons of this example, we first emphasize that in deciding primitivity it is often enough to investigate the 0–1 matrix corresponding to the given matrix, and if necessary compute by replacing the multiplication in matrix multiplication with OR and the addition with AND operations.*

> *Similar to matrix $\mathbf{C}$, it can be shown that every permutation matrix is imprimitive.*

> *It is obvious that if the $k$-th power of a nonnegative matrix is positive, then all its powers greater than $k$ are also positive. We exploited this for matrices $\mathbf{C}$ and $\mathbf{D}$ by showing infinitely many non-positive powers, by which we proved that it is not primitive.*

> *The matrix $\mathbf{D}$ shows that a power of an irreducible matrix can be reducible, thus excluding the possibility of it being primitive.*

**Theorem 12.12 (Perron–Frobenius theorem – eigenvalues on the spectral circle).** *If the nonnegative matrix $\mathbf{A}$ is irreducible, and $r = \varrho(\mathbf{A})$, then*

1. *the eigenvalues of the matrix $\mathbf{A}$ falling on the boundary of the spectral circle have a multiplicity of $1$, and can be written in the form $\{r, r\varepsilon, \dots, r\varepsilon^{k-1}\}$, where $\varepsilon = e^{2\pi i/k}$, furthermore*

2. *$\mathbf{A}$ is primitive if and only if there is only one eigenvalue on its spectral circle, i.e., for every eigenvalue $\lambda \neq r$ we have $|\lambda| < r$.*

3. *$\mathbf{A}$ is primitive if and only if the limit $\lim_{k\to\infty}(\mathbf{A}/r)^k$ exists. In this case this limit equals the projection matrix appearing in the spectral decomposition of $\mathbf{A}$ corresponding to the eigenvalue $r$, i.e.,*

$$
\lim_{k\to\infty}(\mathbf{A}/r)^k = \frac{\mathbf{p}\mathbf{q}^{\mathsf{T}}}{\mathbf{q}^{\mathsf{T}}\mathbf{p}},
$$

*where $\mathbf{p}$ is the Perron vector, $\mathbf{q}$ is the left Perron vector.*

## Exercises

**12.1.** Let

$$
\mathbf{A} = \begin{bmatrix} 6 & 1 & 1 \\ 5 & 6 & 1 \\ 6 & 4 & 4 \end{bmatrix}
$$

Calculate the two Perron vectors, and verify Perron's theorem.

**12.2.** Three eigenvalues of a positive matrix of order 4 are $1$, $2i$, $-2i$. From the numbers $-3$, $2$, $3$, $4i$, $4$, select all those which can be the fourth eigenvalue!

**12.3.** Show that if the sum of elements is $c$ in every column or in every row of the matrix $\mathbf{A} > \mathbf{O}$, then $c$ is the spectral radius.

### Nonnegative matrices

**12.4.** A nonnegative matrix takes the vector $(4,6,5)$ into the vector $(5,6,7)$. Show that its spectral radius is at least $1$.


**12.5.** Let $\mathbf{x} > \mathbf{0}$ be arbitrary, and $\mathbf{A} \geqslant \mathbf{O}$. Prove the following inequalities!

$$
\min_i \left\{ \sum_{j=1}^n a_{ij}\frac{x_j}{x_i} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_i \left\{ \sum_{j=1}^n a_{ij}\frac{x_j}{x_i} \right\}
$$

$$
\min_j \left\{ \sum_{i=1}^n a_{ij}\frac{x_i}{x_j} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_j \left\{ \sum_{i=1}^n a_{ij}\frac{x_i}{x_j} \right\}
$$

(Hint: if $\mathbf{D} = \operatorname{diag}(x_1, \dots, x_n)$, then $\mathbf{B} = \mathbf{D}^{-1}\mathbf{A}\mathbf{D}$ is similar to $\mathbf{A}$, so $\varrho(\mathbf{B}) = \varrho(\mathbf{A})$. Apply Theorem 12.6.)

**12.6.** Using the result of the previous exercise, estimate the spectral radius of the matrices

$$
\begin{bmatrix} 6 & 8 & 0 \\ 1 & 2 & 3 \\ 6 & 4 & 2 \end{bmatrix}, \quad \text{and} \quad \begin{bmatrix} 6 & 3 & 7 \\ 6 & 2 & 2 \\ 1 & 1 & 2 \end{bmatrix}
$$

with the vector $\mathbf{x} = (2,1,2)$. Based on the result, what can we say about $\mathbf{x}$?

### Irreducible matrices

**12.7.** Which of the following matrices is irreducible? For the ones that are not, which permutation matrix brings it into the form $\left[\begin{smallmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{C} \end{smallmatrix}\right]$? For the ones that are irreducible, what is their spectral radius and Perron vector?

$$
\mathbf{R}_1 = \begin{bmatrix}
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}, \quad
\mathbf{R}_2 = \begin{bmatrix}
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}.
$$

**12.8.** Find a permutation matrix for each of the matrices

$$
\mathbf{A} = \begin{bmatrix} 1 & 0 & 0 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 0 & 1 \end{bmatrix} \quad
\mathbf{B} = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{bmatrix} \quad
\mathbf{C} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
$$

which proves their reducibility!

## Stochastic matrices

> *The most important examples of nonnegative matrices are stochastic matrices, where every row or every column is a probability distribution.*

### Markov chains, stochastic matrices

A nonnegative vector is called *stochastic* if the sum of its coordinates is $1$ (i.e. its $1$-norm is $1$). A nonnegative matrix $\mathbf{A}$ is *stochastic* if every column vector of it is stochastic.

> *Multiplying a stochastic matrix $\mathbf{A}$ by any stochastic vector $\mathbf{v}$ yields a stochastic vector, because if $\mathbf{u} = \mathbf{A}\mathbf{v}$, then*

$$
\sum_{i=1}^m u_i = \sum_{i=1}^m \sum_{j=1}^n a_{ij}v_j = \sum_{j=1}^n v_j \sum_{i=1}^m a_{ij} = \sum_{j=1}^n v_j = 1.
$$

> *An immediate consequence of the previous remark is that the product of stochastic matrices is a stochastic matrix.*

> *The matrix $\mathbf{A}$ is stochastic if and only if the vector $\mathbf{1} = (1,1,\dots,1)$ is an eigenvector of $\mathbf{A}^{\mathsf{T}}$ with eigenvalue $1$.*

> *In other words, $\mathbf{A}$ is a stochastic matrix if and only if the vector $\mathbf{1}^{\mathsf{T}}$ is a left eigenvector with eigenvalue $1$.*

> *Since a positive eigenvector belongs to the eigenvalue $1$, the spectral radius is $1$, i.e. $\rho(\mathbf{A}) = 1$.*

**Theorem 12.13 (Eigenvalues of a stochastic matrix).** *If $\mathbf{S}$ is a stochastic matrix, then*

1. *$\lambda = 1$ is an eigenvalue,*

2. *its spectral radius is $1$, and*

3. *if $\mathbf{S}$ is primitive, then for $\lambda \neq 1$, $|\lambda| < 1$.*

### Doubly stochastic matrices

A nonnegative matrix $\mathbf{A} \in \mathbb{R}^{n\times n}$ is called *doubly stochastic* if all of its row and column sums are $1$.

> *Since doubly stochastic matrices are stochastic, the statements made for stochastic matrices hold for them as well.*

> *The product of doubly stochastic matrices is also doubly stochastic. (One half of this was proven for stochastic matrices, the other half can be proven by transposition.)*

> *Every permutation matrix is doubly stochastic.*

> *If $\mathbf{U} = [u_{ij}]$ is unitary, then the matrix $\mathbf{A} = [|u_{ij}|^2]$ is doubly stochastic, because $\sum_{i=1}^n |u_{ij}|^2 = \sum_{j=1}^n |u_{ij}|^2 = 1$.*

> *A convex linear combination of doubly stochastic matrices is also doubly stochastic, i.e., if $\mathbf{S}_1, \mathbf{S}_2 \dots, \mathbf{S}_k$ are doubly stochastic, the numbers $c_1, c_2 \dots, c_k$ are nonnegative and $c_1 + c_2 + \dots + c_k = 1$, then $\sum_{i=1}^k c_i\mathbf{S}_i$ is also doubly stochastic. For example, convex linear combinations of permutation matrices are doubly stochastic.*

**Theorem 12.14 (Frobenius–König theorem).** *In an $n$-th order matrix $\mathbf{A}$, $0$ is an element of every diagonal if and only if there is an $s \times t$ zero submatrix among the submatrices of $\mathbf{A}$ such that $s + t = n + 1$.*

**Corollary 12.15 (Positive diagonal).** *Every doubly stochastic matrix has at least one diagonal in which every element is positive.*

**Proof.** If there were no positive diagonal in the matrix, then it would contain an $s \times t$ zero submatrix for which $s + t = n + 1$. The sum of the elements in these rows and columns is $n + 1$, but the sum of all elements in the matrix is $n$. This contradiction proves our statement. $\square$

**Theorem 12.16 (Birkhoff's theorem).** *Every $n$-th order doubly stochastic matrix can be represented as a convex linear combination of permutation matrices.*

> *The theorem can be more elegantly formulated as: doubly stochastic matrices form a convex polyhedron in the space $\mathbb{R}^{n\times n}$, whose vertices are the permutation matrices.*

**Proof.** We will prove that if $\mathbf{S}$ is doubly stochastic, then there exist numbers $c_i \in \mathbb{R}^+$ and permutation matrices $\mathbf{P}_i \in \mathbb{R}^{n\times n}$ ($i = 1, 2, \dots, k$) such that $\mathbf{S} = \sum_{i=1}^k c_i\mathbf{P}_i$. We prove this by mathematical induction on the number $m$ of positive elements in the matrix $\mathbf{S}$.

The statement is true for $m = n$, since in this case $\mathbf{S}$ is necessarily a permutation matrix. Suppose the statement is true for any matrix containing $m$ positive elements, and let $\mathbf{S}$ have $m + 1$ positive elements. Since $\mathbf{S}$ is doubly stochastic, a positive diagonal can be selected from it. Let $a$ denote the smallest element of the diagonal, and let $\mathbf{P}$ be the permutation matrix obtained by writing $1$'s in place of the elements of the diagonal. Then $a\mathbf{P} \leqslant \mathbf{S}$, so $\mathbf{S} - a\mathbf{P}$ is nonnegative. Since $a < 1$, the following decomposition makes sense:

$$
\mathbf{S} = a\mathbf{P} + (1 - a)\left[\frac{1}{1-a}(\mathbf{S} - a\mathbf{P})\right].
$$

The matrix $\frac{1}{1-a}(\mathbf{S} - a\mathbf{P})$ is doubly stochastic and has at least one fewer positive elements than $\mathbf{S}$, therefore, according to the induction hypothesis, it can be written in the form $c'_2\mathbf{P}_2 + \dots + c'_m\mathbf{P}_m$, where $c'_2 + \dots + c'_m = 1$. However, in this case $a + (1 - a)(c'_2 + \dots + c'_m) = 1$, so the decomposition thus obtained is indeed a convex linear combination. $\square$

### The Leontief model

The Leontief model analyzes the product and income flow data between sectors of a multi-sector economy based on simple statistical data. We briefly summarize the essence of the static version of the model. Let's divide the economy into $n$ sectors (e.g. industry, agriculture, households). Let $r_{ij}$ – the so-called *input coefficient* – denote how much is needed from sector $i$ for one (monetary) unit of output of sector $j$. It can be assumed that the matrix $\mathbf{R}$ of input coefficients is non-singular, otherwise the output of some sector could be replaced by a linear combination of the outputs of other sectors. An economy is called closed if it satisfies its own needs and uses all its output, in other words, no product goes in or out of the system. Let $k_j$ denote the output of the $j$-th sector. Then $r_{ij}k_j$ gives the number of units output by the $i$-th sector for the $j$-th sector, and their sum $r_{i1}k_1 + r_{i2}k_2 + \dots + r_{in}k_n$ gives the total output of the $i$-th sector, which according to our assumptions is equal to $k_i$. Thus, with the notation $\mathbf{k} = (k_1, \dots, k_n)$, the relation

$$
\mathbf{R}\mathbf{k} = \mathbf{k} \tag{12.7}
$$

holds for the output of all sectors. It is also immediately apparent from this that $\mathbf{k}$ is an eigenvector of the matrix $\mathbf{R}$ belonging to the eigenvalue $1$.

**Example 12.17 (Leontief closed model).** *In the economy of a remote island, there are three major sectors: electricity supply (A), food industry (B), and service industry (C). The island's economy can be considered closed. What can we state about the outputs of the sectors if the columns of the following table show how many units are needed from the sectors for one unit of output?*

|     | A   | B   | C   |
| --- | --- | --- | --- |
| A   | 0.1 | 0.6 | 0.1 |
| B   | 0.8 | 0.1 | 0.4 |
| C   | 0.1 | 0.3 | 0.5 |

**Solution.** Determining the output is a simple eigenvalue problem, since $\mathbf{R}\mathbf{k} = \mathbf{k}$. The

$$
\mathbf{R} = \begin{bmatrix} 0.1 & 0.6 & 0.1 \\ 0.8 & 0.1 & 0.4 \\ 0.1 & 0.3 & 0.5 \end{bmatrix}
$$

eigenvector belonging to the eigenvalue $1$ of the matrix is $(3, 4, 3)t$, where $t \in \mathbb{R}$. According to this, electricity supply accounts for $30\%$, the food industry for $40\%$, and the service industry for $30\%$ of the total output of the island's economy. $\square$

In contrast to the closed model, in reality every sector has to count with the presence of an external demand (or requirement) that the economy must fulfill. Let its value for the $i$-th sector be denoted by $d_i$, and their vector by $\mathbf{d}$. This vector can therefore be considered the vector of net output, since

$$
d_i = k_i - (r_{i1}k_1 + r_{i2}k_2 + \dots r_{in}k_n),
$$

which in matrix form for all sectors is $\mathbf{d} = \mathbf{k} - \mathbf{R}\mathbf{k} = (\mathbf{I} - \mathbf{R})\mathbf{k}$. The question is, what ensures that $\mathbf{I} - \mathbf{R}$ is invertible, and $(\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} > 0$. We make two assumptions that can be considered natural:

- each of the sectors, even if through other sectors, affects the rest,
- there is a sector that uses less than one unit for one (monetary) unit of output, that is, there is a column sum of $\mathbf{R}$ that is less than $1$.

The first assumption means that for any pair of sectors $i$ and $j$, $[\mathbf{R}^m]_{ij} > 0$ for some exponent $m$, i.e. $\mathbf{R}$ is irreducible. (Moreover, since there are always sectors that also feedback to themselves, it can also be assumed that $\mathbf{R}$ is primitive.)

A consequence of the second assumption is that there is a non-zero matrix $\mathbf{A} \geqslant \mathbf{O}$ such that $\mathbf{R} + \mathbf{A}$ is stochastic, i.e. all its column sums are $1$, that is $\mathbf{1}^{\mathsf{T}}(\mathbf{R} + \mathbf{A}) = \mathbf{1}^{\mathsf{T}}$. This implies that $\rho(\mathbf{R}) < 1$. Indirectly assume that $\rho(\mathbf{R}) = 1$ and let $\mathbf{p}$ be the Perron vector of $\mathbf{R}$. $\mathbf{p} > \mathbf{0}$, since $\mathbf{R}$ is nonnegative and irreducible. Because $\mathbf{A} \geqslant \mathbf{O}$ and $\mathbf{p} > \mathbf{0}$, $\mathbf{A}\mathbf{p} > \mathbf{0}$, so

$$
1 = \mathbf{1}^{\mathsf{T}}\mathbf{p} = (\mathbf{1}^{\mathsf{T}}(\mathbf{R} + \mathbf{A}))\mathbf{p} = 1 + \mathbf{1}^{\mathsf{T}}\mathbf{A}\mathbf{p} > 1,
$$

and this contradiction proves that $\rho(\mathbf{R}) < 1$. Using Theorem ??? from this, we obtain that

$$
(\mathbf{I} - \mathbf{R})^{-1} = \mathbf{I} + \mathbf{R} + \mathbf{R}^2 + \mathbf{R}^3 + \dots > \mathbf{O}.
$$

Thus, for every demand vector $\mathbf{d}$ there uniquely exists a positive output $\mathbf{k}$, namely $\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} > 0$. In the model, this means that an increase in the external demand affecting any sector increases the output of all sectors.

**Example 12.18 (Leontief open model).** *On the island in the previous problem, let the matrix of input coefficients for the three sectors be*

|     | A   | B   | C   |
| --- | --- | --- | --- |
| A   | 0.1 | 0.6 | 0.1 |
| B   | 0.7 | 0.1 | 0.3 |
| C   | 0.1 | 0.2 | 0.5 |

*What is the output if the external demand vector is $\mathbf{d} = (26, 31, 22)$, and how does the output change if the external demand in sector B increases from $31$ to $36$?*

**Solution.** The spectral radius of $\mathbf{R}$ is $0.9$ (this immediately follows from the fact that every column sum is $0.9$).

$$
\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} = \begin{bmatrix} 3.9 & 3.2 & 2.7 \\ 3.8 & 4.4 & 3.4 \\ 2.3 & 2.4 & 3.9 \end{bmatrix} \begin{bmatrix} 26 \\ 31 \\ 22 \end{bmatrix} = \begin{bmatrix} 260 \\ 310 \\ 220 \end{bmatrix}.
$$

The increasing external demand in sector B results in an increase in output in all sectors:

$$
\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} = \begin{bmatrix} 3.9 & 3.2 & 2.7 \\ 3.8 & 4.4 & 3.4 \\ 2.3 & 2.4 & 3.9 \end{bmatrix} \begin{bmatrix} 26 \\ 36 \\ 22 \end{bmatrix} = \begin{bmatrix} 276 \\ 332 \\ 232 \end{bmatrix}.
$$

$\square$

## Solutions

*Figure 12.1. Directed graphs belonging to the matrices $\mathbf{R}_1$ and $\mathbf{R}_2$ in Exercise 12.7.*

**12.1.** Eigenvalues: $10$, $3$, $3$, right eigenvector: $\mathbf{u} = (5, 9, 11)$, left eigenvector: $\mathbf{v} = (4, 2, 1)$, the two Perron vectors: $\mathbf{p} = \frac{1}{25}(5, 9, 11)$, left eigenvector: $\mathbf{v} = \frac{1}{7}(4, 2, 1)$.

**12.2.** The spectral radius is not yet among the eigenvalues, so by Perron's theorem only $3$ and $4$ can be eigenvalues.

**12.3.** If every row sum of $\mathbf{A}$ is $c$, then the vector $\mathbf{1}$ is an eigenvector with eigenvalue $c$. Since $\mathbf{1} > \mathbf{0}$, this can only be $n$ times the Perron vector, and then $c$ is the corresponding eigenvalue, so $c$ is the spectral radius. Similarly, the left Perron vector proves the other statement.

**12.4.** Since $\min\{5/4, 6/6, 7/5\} = 1$, according to the Collatz–Wielandt theorem, its spectral radius is also at least this much. (Or with the other formula in the theorem: since in the inequality $c(4, 6, 5) \leqslant \mathbf{A} \cdot (4, 6, 5) = (5, 6, 7)$ the possible maximum of $c$ is $1$, the spectral radius is at least $1$.)

**12.5.** Since $\mathbf{D}^{-1} = \operatorname{diag}(1/x_1, \dots, 1/x_n)$, following what is described in the hint, the first formula of Theorem 12.6 gives the first formula of the problem. From the matrix $\mathbf{D}\mathbf{A}\mathbf{D}^{-1}$ we obtain the second formula.

**12.6.** The first formula of Exercise 12.5 yields for the first matrix, and the second formula for the second matrix, that both the minimum and the maximum are $10$, thus the spectral radius is $10$, so $10$ is the dominant eigenvalue in both cases, and $\mathbf{x}$ is the corresponding eigenvector – the right one in the first case, and the left one in the second. (Think it over!)

**12.7.** Irreducibility can be determined by the adjacency graphs assigned to the matrices:

$\mathbf{R}_1$ is irreducible because the graph is strongly connected, i.e., from any vertex any other can be reached by a directed path. $\mathbf{R}_2$ is reducible, since, for example, no directed edge starts from the following sets to their complements: $\{6\}$, $\{3\}$, $\{1, 5\}$, $\{2, 4\}$, $\{1, 5, 6\}$, $\{2, 3, 4\}, \dots$. Thus there are quite a few permutation matrices $\mathbf{P}$ which bring $\mathbf{R}_2$ into the desired form. The simplest among them is the identity matrix, since $\mathbf{R}_2$ is already in the desired form:

$$
\mathbf{I}\mathbf{R}_2\mathbf{I}^{\mathsf{T}} = \mathbf{R}_2 = \left[\begin{array}{ccccc|c}
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 & 0 \\ \hline
0 & 0 & 0 & 0 & 0 & 1
\end{array}\right].
$$

The vector $\mathbf{p} = (1, 1, 1, 1, 1, 1)$ is obviously an eigenvector of the matrix $\mathbf{R}_1$ with the eigenvalue $1$. Since $\mathbf{R}_1$ is nonnegative and irreducible, according to the Frobenius–Perron theorem the eigenvector belonging to the spectral radius as an eigenvalue is the only eigenvector with positive elements. It follows from this that the spectral radius is $1$.

*Another solution* for the second part of the problem:

$$
\det(\mathbf{R}_1 - \lambda\mathbf{I}) = \begin{vmatrix}
-\lambda & 1 & 0 & 0 & 0 & 0 \\
0 & -\lambda & 1 & 0 & 0 & 0 \\
0 & 0 & -\lambda & 1 & 0 & 0 \\
0 & 0 & 0 & -\lambda & 1 & 0 \\
0 & 0 & 0 & 0 & -\lambda & 1 \\
1 & 0 & 0 & 0 & 0 & -\lambda
\end{vmatrix} = \lambda^6 - 1.
$$

The roots of the characteristic polynomial are the sixth roots of unity, which lie on the unit circle, so the spectral radius is $1$. The spectral radius is indeed an eigenvalue, and the eigenvector belonging to $\lambda = 1$ is $\mathbf{p} = (1, 1, 1, 1, 1, 1)$.

**12.8.** The following graphs belong to the three matrices:

Based on this, the other points cannot be reached from the set $\{1, 4\}$ in the first graph, from $\{1, 3, 4\}$ in the second, and from $\{2\}$ in the third. We are looking for a renumbering of the points in which these points follow the others, because in general, if in the vertex set $\{1, 2, \dots, k, k+1, \dots, n\}$ no edge runs to the first $k$ points from the set $\{k+1, \dots, n\}$, then the adjacency matrix will be of the form $\left[\begin{smallmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{smallmatrix}\right]$. In the first graph, for example, the order 3-2-1-4 is good, since the elements of the set $\{1, 4\}$ are at the end, which is realized by the permutation $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 3 & 2 & 1 & 4 \end{smallmatrix}\right)$:

$$
\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 0 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} =
\left[\begin{array}{cc|cc} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ \hline 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right]
$$

In the second case, for example, the order 2-1-3-4 is good, since the elements of the set $\{1, 3, 4\}$ are at the end, which is realized by the permutation $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 2 & 1 & 3 & 4 \end{smallmatrix}\right)$:

$$
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{bmatrix}
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} =
\left[\begin{array}{c|ccc} 1 & 1 & 1 & 1 \\ \hline 0 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \end{array}\right]
$$

Finally, for the third matrix the order 1-4-3-2 is good, so the element $2$ is at the end, which is realized by the permutation $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 1 & 4 & 3 & 2 \end{smallmatrix}\right)$:

$$
\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}
\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix} =
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ \hline 0 & 0 & 0 & 1 \end{array}\right]
$$

The permutation matrix multiplying from the left was determined from the identity matrix by applying the given permutation to the rows, while the matrix multiplying from the right by applying it to the columns.

# Bibliography

- Wolf Holzmann. *Uniqueness of reduced row echelon form.* http://www.cs.uleth.ca/~holzmann/notes/reduceduniq.pdf, 2002.
- István Faragó, Róbert Horváth. *Numerical methods.* BME, http://math.bme.hu/~rhorvath/nummodszjegyzet.pdf, 2013.

# Index

$\pi$-transpose 149
$p$-norm 433

adjoint 240, 323
affine subspace 117
system of equations of a shape 60
base vector 40
algebraic multiplicity 366
lower triangular matrix 193
generalized eigenvector 449
general solution 82
subspace 114
&nbsp;&nbsp;affine 117
&nbsp;&nbsp;invariant 382
&nbsp;&nbsp;complementary 280
&nbsp;&nbsp;complement 280
&nbsp;&nbsp;orthogonal of 129
&nbsp;&nbsp;orthogonal complement 129
orthogonality of subspaces 129
translate of a subspace 117
underdetermined 72
annihilator 458
transition matrix 157

left-handed system 34
left eigenvector 375
basis 40, 122
&nbsp;&nbsp;standard 46
change of basis 157
basis decomposition 159
basic column 80
basis vector 40
binary relation 53
block matrix 147
augmented matrix 75

Cholesky decomposition 414

group 23

derivative map 344
determinant 215
&nbsp;&nbsp;of a linear transformation 277
DFT 332
dyad 153
dyadic decomposition
&nbsp;&nbsp;by singular values 422
dyadic product 153
diagonalizability 373
differentiability 343
dimension 126
direct sum 282, 384
discrete Fourier sum 329
discrete Fourier transform 332

system of equations
&nbsp;&nbsp;numerically unstable 94
identity matrix 160
unit vector 33
coefficient matrix 75
Einstein convention 173
equivalence relation 53
equivalent
&nbsp;&nbsp;transformations 73
&nbsp;&nbsp;systems of linear equations 73
elementary basis transformation 133
elementary matrix 160
elementary row operations 80
cofactor 232
signed volume 38
signed area 213
Euclidean norm 432
Euclidean norm 21
explicit 60

header (of a table) 141
upper triangular matrix 193
skew-symmetric 194
FFT 335

main diagonal 74
pivot element 80
principal minor 415
pivot column 80
torque 35
Fourier matrix 330
Fourier sum 329

Gauss–Jordan method 86
Gauss–Seidel iteration 100
Gaussian elimination 81
generating system 122
geometric multiplicity 366
Givens rotation 311
gradient 346
graph
&nbsp;&nbsp;strongly connected 483
Gram matrix 135

fast Fourier transform 335

angle of inclination 49
Hamming code 89
triangle method 21
similar matrices 274
power method 390
Hermite, Charles 323
Hermite interpolation polynomial 471
Hermitian quadratic form 409
Hermitian matrix 326
hypercube matrix 149
hypermatrix 149
&nbsp;&nbsp;skew-symmetric 149
&nbsp;&nbsp;outer product 152
&nbsp;&nbsp;symmetric 149
hyperplane 69
Hölder's inequality 435, 443
homogeneous 213

homogeneous system of linear equations
&nbsp;&nbsp;belonging to inhomogeneous 83
Householder method 318
Householder reflection 312

idempotent 285
compatible norms 438
implicit 60
induced matrix norm 439
inconsistent 72
invariant subspace 382
invariant subspace 447
invertible 178
invertible operation 177
inverse
&nbsp;&nbsp;element 177
inversion 220
directed line segment 19
directed angle 34
direction vector 61
irreducible 477, 483
ISO 31-11 20

Jacobian determinant 349
Jacobi iteration 99
Jacobian matrix 346
right-handed system 34
well-conditioned 94
Jordan basis 449
Jordan block 452
Jordan decomposition 452
Jordan chain 449
Jordan matrix 452
Jordan normal form 452

characteristic equation 359
characteristic polynomial 359
image space 253
kernel 253
complementary subspace 280
spanned subspace 116
snake 192, 229
companion matrix 460
fundamental subspace 129
&nbsp;&nbsp;four fundamental subspaces 129
classical adjoint 240
collinear vector 21
coplanar 22
complementary subspace 280
composition
&nbsp;&nbsp;of linear substitutions 143
conjugate 275

constant term 71
contraction 98
consistent 72
consistent norms 438
coordinate 40
coordinate system 40
bound variable 81
bound vector 19
Kronecker product 148
outer product 152
&nbsp;&nbsp;Segre's 152
quadratic form 408

best approximation 285
method of least squares 287
row echelon form 80
leaf diagram 114
linear
&nbsp;&nbsp;equation 71
&nbsp;&nbsp;system of equations 72
&nbsp;&nbsp;combination 23
linearly independent 25, 46
linearly dependent 25
system of linear equations
&nbsp;&nbsp;consistent 72
system of linear equations
&nbsp;&nbsp;underdetermined 72
&nbsp;&nbsp;overdetermined 72
systems of linear equations
&nbsp;&nbsp;homogeneous 72
&nbsp;&nbsp;solution of 72
systems of linear equations
&nbsp;&nbsp;equivalent 73
&nbsp;&nbsp;inhomogeneous 72
linear substitution
&nbsp;&nbsp;matrix of 155
linear substitution 143
linear map 256
&nbsp;&nbsp;image space of 253
&nbsp;&nbsp;kernel of 253
linear transformation
&nbsp;&nbsp;characteristic polynomial of 373
&nbsp;&nbsp;eigenvalue of 371
&nbsp;&nbsp;eigenvalues of 373
linear transformation 256
LU decomposition 197

kernel 253
quadratic term 407
matrix 73
&nbsp;&nbsp;transition matrix of 157

diagonal 144
elementary 160
opposite of 145
skew-symmetric 194
irreducible 477, 483
square 144
nonnegative 477
normal 402
self-adjoint 326
orthogonal 306
positive 477
primitive 477
rank of 110
reducible 477, 483
sparse 74
strictly diagonally dominant by rows 101
dense 74
semi-orthogonal 306
symmetric 194
singular 178
stochastic 489
matrix mapping 253
matrix norm 438
space of matrices 144
matrix product
&nbsp;&nbsp;decomposing into a sum of dyads 163
solution
&nbsp;&nbsp;general 82
&nbsp;&nbsp;particular 82
&nbsp;&nbsp;trivial 112
solution vector 72
solvable 72
orthogonal component 283
orthogonal projection
&nbsp;&nbsp;onto a subspace 283
minimal polynomial 458
Minkowski inequality 435, 443
Moore-Penrose pseudoinverse 295
multilinear matrix product 152

negative (semi)definite 410
four fundamental subspaces 129
nilpotent 178
norm 434
&nbsp;&nbsp;Euclidean 21
normalization 304, 432
normal equation 287
system of normal equations 287
normal matrix 402

- normal vector 61
- nullity 126
  - of a linear mapping 277
- zero divisor 172
- null space 116
- zero vector 20
- numerically unstable 94
- numerically stable 94
- trace 261
  - of a linear transformation 277
  - of a matrix 261
- self-adjoint 326
- operator norm 439
- optimal solution 287
- orientation
  - left-handed system 34
  - right-handed system 34
- origin 20
- orthogonal 42
- orthogonal basis (OB) 304
- orthogonal diagonalization 395
- orthogonal matrix 306
- orthonormal basis 42
- orthonormal basis (ONB) 304
- column matrix 74
- strictly diagonally dominant by columns 101
- column space 118
- column vector 41, 74
- classification 53
- parallelepiped 27
  - signed volume of 38
- parallelogram 27
  - signed area of 213
- system of parametric equations 60
- parallel vector 21
- partitioning 53
- particular solution 82
- permutation matrix 192
- permutation matrix 192
- Perron vector 479
- pivot element 80
- PLU decomposition 203
- polar decomposition 427
- polarization formulas 51
- polynomial
  - elementary symmetric 373
  - homogeneous quadratic 407
- positive (semi)definite 410
- precedence principle 174
- primitive matrix 477
- projection 292
- pseudoinverse 295
- QR decomposition 315
  - reduced 315
  - full 315
- input coefficient 491
- rank 110, 126
  - of a linear mapping 277
- reducible 477, 483
- reduced row echelon form 85
- reduced singular value decomposition 422
- reflexive 53
- regression line 289
- relation 53
- partial pivoting 96
- partial pivoting 96
- sparse matrix 74
- ill-conditioned 94
- rref function 88
- eigenspace 358
- eigenvalue 358
  - of a linear transformation 371
- eigendecomposition 374
  - dyadic form of 375
- eigenpair 358
- eigenvector 358
  - left 375
- checkerboard rule 232
- leading principal minor 415
- Sarrus' rule 231
- scalar 19
- scalar product 30
- scaling 97
- row echelon form 80
- row matrix 74
- strictly diagonally dominant by rows 101
- row space 118
- row vector 74
- spectral radius 478
- spectrum
  - values on the spectrum 469
- standard basis 46
- sudoku 165
- free variable 81
- free vector 20
- semi-orthogonal matrix 306
- strictly dominant eigenpair 390
- symmetric matrix 194
- symmetric relation 53
- simultaneous system of equations 88
- singular 178
- singular value 420
- singular value decomposition 423
  - dyadic form 422
- singular vector 420
- angle 49
- stochastic matrix 489
- stochastic vector 489
- table 141
- distance 31
  - from a subspace 285
- tensor product 148
- torsor 23
- transpose 126
  - Hermitian 323
- transversal 192
- transversal (snake) 229
- transitive relation 53
- trivial solution 112
- overdetermined 72
- unitary 327
- unitary diagonalization 402
- Vandermonde determinant 237
- Vandermonde matrix 237
- vec function 148
- scalar triple product 38
- vector 20
  - absolute value of 21, 326
  - of the same direction 21
  - unidirectional 21
  - of opposite direction 21
  - length of 21, 31, 326
  - notation of 20, 74
  - collinear 21
  - separation of its coordinates 74
  - coordinate form of 40
  - matrix form of 74
  - normalization of 304
  - sum 21
  - parallel 21
  - stochastic 489
- vector equation 60
- cross product 35
- vectors
  - orthogonality of 49, 326
  - angle between 31, 49, 326
  - distance between 49, 326
- projection 292
- projection 291
- pivot element 80
- leading principal minor 415
- zero space 114
- zero vector 20

<!-- OCR: through PDF p.500 -->
