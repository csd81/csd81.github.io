import{f as _,j as e}from"./index-DVBvCRjo.js";import{M as m}from"./MarkdownView-BwTWxA0t.js";import{b as p,l as z,c as y,n as v,a as A,h as w}from"./hermite.hu-BOdAixwp.js";import{a as h,d,c as f,n as b,b as x,g as k}from"./7_4-CWMfsFEh.js";import"./normalizeMath-C9zaoMoC.js";import"./index-H94H-nGi.js";import"./katex-Dc8nsIP1.js";import"./CodeBlock-jXKJh0U6.js";const q=`# Chapter 3

# Linear Systems

In this chapter we discuss solution techniques of linear algebraic systems using direct methods and related problems of linear algebra. We introduce the Gaussian and Gauss-Jordan eliminations and their variants, and its application for the matrix inversion.

## 3.1. Review of Linear Algebra

In this section we review some notations, notions and statements of linear algebra. In the sequel, if we do not say otherwise, $\\mathbf{A} = (a_{ij})$ is an $n \\times n$ matrix, $\\mathbf{x}$ is an $n$-dimensional column vector. The set of all real $n \\times n$ dimensional matrices is denoted by $\\mathbb{R}^{n \\times n}$. Similarly, $\\mathbb{C}^{n \\times n}$ is the set of all $n \\times n$ matrices with complex entries. The determinant of the matrix $\\mathbf{A}$ is denoted by $\\det(\\mathbf{A})$, the $n \\times n$ dimensional identity matrix is $\\mathbf{I}$. The transpose of a matrix $\\mathbf{A}$ or a vector $\\mathbf{x}$ is denoted by $\\mathbf{A}^T$ and $\\mathbf{x}^T$, respectively. The diagonal matrix with elements $a_1, a_2, \\ldots, a_n$ in the main diagonal is denoted by $\\mathrm{diag}(a_1, a_2, \\ldots, a_n)$.

The $n \\times n$ matrix $\\mathbf{A}^{-1}$ is called the *inverse* of the $n \\times n$ matrix $\\mathbf{A}$ if $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$. A square matrix is *invertible* or *nonsingular* if its inverse exists. A square matrix $\\mathbf{A}$ is called *singular* if it has no inverse.

The next theorem summarizes the basic properties of the determinant.

**Theorem 3.1.** *Let $\\mathbf{A}, \\mathbf{B}$ be $n \\times n$ matrices. Then*

1. $\\det(\\mathbf{A}) = 0$ *if each element of a row (or column) in $\\mathbf{A}$ is equal to 0;*

2. $\\det(\\mathbf{A}) = 0$ *if two rows (columns) of $\\mathbf{A}$ are equal;*

3. $\\det(\\mathbf{A}\\mathbf{B}) = \\det(\\mathbf{A})\\det(\\mathbf{B})$;

4. $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$.

5. *If $\\mathbf{A}$ is invertible, then $\\det(\\mathbf{A}^{-1}) = 1/\\det(\\mathbf{A})$.*

6. *If $\\mathbf{B}$ is obtained from $\\mathbf{A}$ by multiplying one of its row (column) by a constant $c$, then $\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$.*

7. *If $\\mathbf{B}$ is obtained from $\\mathbf{A}$ by swapping two rows (columns), then $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$.*

8. *If $\\mathbf{B}$ is obtained from $\\mathbf{A}$ by multiplying one of its row (column) by a constant $c$, and adding the result to another row (column), then $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$.*

9. *Let $\\mathbf{A}_{ij}$ denote the $(n-1) \\times (n-1)$ matrix which we get from $\\mathbf{A}$ by omitting its $i$th row and $j$th column. Then we have*

$$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij}),$$

*and*

$$\\det(\\mathbf{A}) = \\sum_{i=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij}).$$

**Theorem 3.2.** *Let $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$, $\\mathbf{b} \\in \\mathbb{R}^n$. The following statements are equivalent:*

1. $\\det(\\mathbf{A}) \\neq 0$,

2. *the matrix $\\mathbf{A}$ is invertible,*

3. *the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ has a unique solution for any vector $\\mathbf{b}$.*

**Theorem 3.3.** *The linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ has nontrivial (nonzero) solution if and only if $\\mathbf{A}$ is singular, i.e., $\\det(\\mathbf{A}) = 0$.*

**Theorem 3.4.** *If $\\mathbf{A}, \\mathbf{B} \\in \\mathbb{R}^{n \\times n}$ are both invertible, then $\\mathbf{A}\\mathbf{B}$ is also invertible, and $(\\mathbf{A}\\mathbf{B})^{-1} = \\mathbf{B}^{-1}\\mathbf{A}^{-1}$.*

The square matrix $\\mathbf{A}$ is *upper (lower) triangular* if $a_{ij} = 0$ for all $i > j$ ($i < j$), i.e., all elements below (above) the main diagonal are 0.

**Theorem 3.5.** *For a triangular matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ it follows $\\det(\\mathbf{A}) = a_{11}a_{22}\\cdots a_{nn}$.*

**Theorem 3.6.** *The product of lower (upper) triangular matrices is lower (upper) triangular. The inverse of a lower (upper) triangular matrix is lower (upper) triangular.*

A square matrix $P$ is called *permutation matrix* if it is obtained from the identity matrix by interchanging its rows (or columns). Other words, in a permutation matrix each row and column contains exactly one 1, all the other elements are 0. The next theorem claims that the multiplication by a permutation matrix is equivalent to interchanging rows or columns of a matrix.

**Theorem 3.7.** *Let $k_1, \\ldots, k_n$ be a permutation of the integers $1, \\ldots, n$, and let $\\mathbf{P} \\in \\mathbb{R}^{n \\times n}$ be the permutation matrix which we get from the identity matrix by moving its 1st row to the $k_1$-th row, $\\ldots$, the $n$th row to its $k_n$-th row. Let $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$. Then the matrix $\\mathbf{P}\\mathbf{A}$ ($\\mathbf{A}\\mathbf{P}$) can be obtained from $\\mathbf{A}$ so that its 1st row (columns) is moved to the $k_1$-th row (column), $\\ldots$, its $n$th row (columns) is moved to the $k_n$-th row (column).*

A square matrix $A \\in \\mathbb{R}^{n \\times n}$ is called *row diagonally dominant* or simply *diagonally dominant* if

$$|a_{ii}| > \\sum_{\\substack{j=1 \\\\ j \\neq i}}^{n} |a_{ij}|, \\qquad i = 1, \\ldots, n.$$

Similarly, the matrix $\\mathbf{A}$ is called *column diagonally dominant* if $\\mathbf{A}^T$ is diagonally dominant, i.e.,

$$|a_{jj}| > \\sum_{\\substack{i=1 \\\\ i \\neq j}}^{n} |a_{ij}|, \\qquad j = 1, \\ldots, n.$$

**Theorem 3.8.** *If $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ is diagonally dominant, then $\\mathbf{A}$ is invertible.*

**Proof.** Suppose that $\\mathbf{A}$ is not invertible. Then the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution $\\mathbf{x} \\neq \\mathbf{0}$. Let $k$ be such that $|x_k| = \\max\\{|x_i| : i = 1, \\ldots, n\\}$. Then $x_k \\neq 0$. Since $\\sum_{j=1}^{n} a_{ij}x_j = 0$ for all $i = 1, \\ldots, n$, we get $a_{kk}x_k = -\\sum_{j=1, j\\neq k}^{n} a_{kj}x_j$. Then the triangle-inequality yields $|a_{kk}x_k| \\leq \\sum_{j=1, j\\neq k}^{n} |a_{kj}x_j|$, and so

$$|a_{kk}| \\leq \\sum_{\\substack{j=1 \\\\ j \\neq k}}^{n} |a_{kj}| \\frac{|x_j|}{|x_k|} \\leq \\sum_{\\substack{j=1 \\\\ j \\neq k}}^{n} |a_{kj}|,$$

which is a contradiction. $\\qquad\\square$

The square matrix $\\mathbf{A}$ is called *positive definite* (*negative definite*) if $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ ($\\mathbf{x}^T\\mathbf{A}\\mathbf{x} < 0$, respectively) for all $\\mathbf{x} \\neq \\mathbf{0}$. The matrix $\\mathbf{A}$ is called *positive semi-definite* (*negative semi-definite*) if $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\geq 0$ ($\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\leq 0$, respectively) for all $\\mathbf{x}$.

**Theorem 3.9.** *If the square matrix $\\mathbf{A}$ is positive definite, then*

1. $\\mathbf{A}$ *is invertible,*

2. $a_{ii} > 0$ *for $i = 1, \\ldots, n$.*

**Theorem 3.10.** *The symmetric matrix $\\mathbf{A}$ is positive definite if and only if all of its upper left minors, the so-called principal minors are positive, i.e.,*

$$\\det\\begin{pmatrix} a_{11} & \\cdots & a_{1i} \\\\ \\vdots & & \\vdots \\\\ a_{i1} & \\cdots & a_{ii} \\end{pmatrix} > 0, \\qquad i = 1, 2, \\ldots, n.$$

A square matrix $\\mathbf{A}$ is *orthogonal* if $\\mathbf{A}\\mathbf{A}^T = \\mathbf{A}^T\\mathbf{A} = \\mathbf{I}$, i.e., $\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1} = \\mathbf{A}^T$.

**Theorem 3.11.** *The product of orthogonal matrices is orthogonal.*

The complex number $\\lambda \\in \\mathbb{C}$ is an *eigenvalue* of the square matrix $\\mathbf{A}$ if the linear system

$$\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$$

has a nontrivial ($\\mathbf{x} \\neq \\mathbf{0}$) solution. Its nontrivial solution $\\mathbf{x}$ is called the *eigenvector* of the matrix $\\mathbf{A}$ corresponding to the eigenvalue $\\lambda$.

**Theorem 3.12.** *The $n \\times n$ matrix $\\mathbf{A}$ has $n$ eigenvalues, which are solutions of the $n$th-degree algebraic equation*

$$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0,$$

*the so-called* characteristic equation.

**Theorem 3.13.** *Let $\\lambda_1, \\lambda_2, \\ldots, \\lambda_n$ be the eigenvalues of the $n \\times n$ matrix $\\mathbf{A}$. Then*

1. $\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$;

2. $\\mathbf{A}$ *is invertible if and only if $\\lambda_i \\neq 0$ for all $i = 1, 2, \\ldots, n$;*

3. *if $\\mathbf{A}$ is invertible, then the eigenvalues of $\\mathbf{A}^{-1}$ are $1/\\lambda_1, 1/\\lambda_2, \\ldots, 1/\\lambda_n$;*

4. *the eigenvalues of the matrix $\\mathbf{A}^k$ are the numbers $\\lambda_1^k, \\lambda_2^k, \\ldots, \\lambda_n^k$.*

**Theorem 3.14.** *The eigenvalues of a triangular matrix $\\mathbf{A}$ are the diagonal elements $a_{11}, a_{22}, \\ldots, a_{nn}$.*

Let $\\mathbf{A}$ and $\\mathbf{B}$ be square matrices of the same dimension. We say that $\\mathbf{A}$ and $\\mathbf{B}$ are *similar* if there exists an invertible matrix $\\mathbf{P}$ such that $\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$. We comment that then $\\mathbf{B} = \\mathbf{P}\\mathbf{A}\\mathbf{P}^{-1}$, so the similarity is a symmetric property. The linear map defined by $\\mathbf{A} \\mapsto \\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}$ is called *similarity transformation.*

**Theorem 3.15.** *Eigenvalues of similar matrices are identical.*

**Proof.** Let $\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$. Then the properties of the determinant yield

$$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = \\det(\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P} - \\lambda\\mathbf{I}) = \\det(\\mathbf{P}^{-1})\\det(\\mathbf{B} - \\lambda\\mathbf{I})\\det(\\mathbf{P}) = \\det(\\mathbf{B} - \\lambda\\mathbf{I}),$$

which implies the statement. $\\qquad\\square$

The number $\\rho(\\mathbf{A}) := \\max\\{|\\lambda| : \\lambda \\text{ is an eigenvalue of } \\mathbf{A}\\}$ is called the *spectral radius* of $\\mathbf{A}$.

**Theorem 3.16.** *Let $k$ be a positive integer, and let $\\|\\cdot\\|$ be a matrix norm. Then*

1. $\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$,

2. $\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$.

**Theorem 3.17.** *For every square matrix $\\mathbf{A}$ and a positive real $\\varepsilon > 0$ there exists a matrix norm $\\|\\cdot\\|$ such that $\\|\\mathbf{A}\\| \\leq \\rho(\\mathbf{A}) + \\varepsilon$.*

**Theorem 3.18.** *For any square matrix $\\mathbf{A}$ it follows $\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$. If $\\mathbf{A}$ is symmetric, then $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$.*

Let $a_1, \\ldots, a_n$ be complex numbers. The determinant

$$\\det\\begin{pmatrix} 1 & a_1 & a_1^2 & \\cdots & a_1^{n-1} \\\\ 1 & a_2 & a_2^2 & \\cdots & a_2^{n-1} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 1 & a_n & a_n^2 & \\cdots & a_n^{n-1} \\end{pmatrix} \\tag{3.1}$$

is called *Vandermonde determinant.*

**Theorem 3.19.** *The Vandermonde determinant (3.1) is nonzero if and only if the numbers $a_1, \\ldots, a_n$ are pairwise distinct.*

### Exercises

1. Determine the possible values of the parameters $\\alpha$ and $\\beta$ so that the matrix

   $$\\mathbf{A} = \\begin{pmatrix} \\alpha & 1 & 0 \\\\ \\beta & 2 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$$

   be

   (a) singular,

   (b) diagonally dominant,

   (c) symmetric,

   (d) positive definite.

2. Prove that if $\\mathbf{A}$ and $\\mathbf{B}$ are $n \\times n$ positive definite matrices, then

   (a) $\\mathbf{A}^T$,

   (b) $\\mathbf{A} + \\mathbf{B}$,

   (c) $\\mathbf{A}^2$

   are also positive definite.

3. Prove Theorem 3.6.

4. Prove Theorem 3.7.

5. Prove Theorem 3.9.

6. Prove Theorem 3.11.

7. Prove Theorem 3.12.

8. Prove Theorem 3.14.

9. Prove Theorem 3.19. (Hint: In the determinant (3.1) substitute $a_1$ by $x$. Show that the resulting determinant is a polynomial of degree $n-1$ of $x$. Find $n-1$ distinct roots of this polynomial.)

10. Show that the value of the Vandermonde determinant (3.1) is

    $$\\prod_{i>j}(a_i - a_j).$$

    (hint: Consider the proof of the previous problem.)

## 3.2. Triangular Systems

**Example 3.20.** Solve the linear system

$$\\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\\\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\\\
& & & & 2x_3 & - & x_4 & = & -2 \\\\
& & & & & & 3x_4 & = & 12
\\end{array}$$

Solving the fourth equation for $x_4$ we get $x_4 = 4$. Substituting it to the third equation we get $x_3 = (-2 + x_4)/2 = 1$. Then the second equation yields $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Finally, from the first equation we have $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\\qquad\\square$

We can generalize the method used in the previous example to solve the upper triangular $n$-dimensional linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$, i.e., a linear system of the form

$$\\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \\ldots & + & a_{1n}x_n & = & b_1 \\\\
& & a_{22}x_2 & + & \\ldots & + & a_{2n}x_n & = & b_2 \\\\
& & & & \\ddots & & \\vdots & & \\vdots \\\\
& & & & & & a_{nn}x_n & = & b_n.
\\end{array} \\tag{3.2}$$

We formulate the method of *backward substitution* in the following algorithm.

---

**Algorithm 3.21. Backward substitution to solve a triangular system**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n)$, $b_i$, $(i = 1, \\ldots, n)$
OUTPUT: $x_1, \\ldots, x_n$

$x_n \\leftarrow b_n / a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(b_i - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

The method of backward substitution can be performed if an only if $a_{ii} \\neq 0$ for all $i = 1, \\ldots, n$. Since $\\det(\\mathbf{A}) = a_{11}a_{22}\\cdots a_{nn}$, it follows that it can be performed if and only if the system (3.2) has a unique solution, i.e., $\\det(\\mathbf{A}) \\neq 0$.

In order to determine the time complexity of the algorithm we count the number of arithmetic operations:

| | multiplication/division | addition/subtraction |
|---|---|---|
| step 1: | 1 | 0 |
| step 2: | 2 | 1 |
| $\\vdots$ | $\\vdots$ | $\\vdots$ |
| step $n$: | $n$ | $n-1$ |

Therefore, $1 + 2 + \\cdots + n = n(n+1)/2$ multiplications and divisions, and $1 + 2 + \\cdots + n - 1 = (n-1)n/2$ additions and subtractions are needed to perform the algorithm. We introduce the notation $\\mathcal{O}(n^k)$ for a polynomial of order at most $k$. With this notation we have that the number of multiplications/divisions is $n^2/2 + \\mathcal{O}(n)$, and similarly, the number of additions/subtractions are needed for the algorithm is $n^2/2 + \\mathcal{O}(n)$. This notation "hides" the lower order terms, which is useful, since the leading term determines the magnitude of the formula for large $n$.

### Exercises

1. Solve the following triangular systems:

   (a)
   $$\\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\\\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\\\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\\\
   & & & & & & 2x_4 & = & 4
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\\\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\\\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\\\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\\\
   & & & & & & & & 1.3x_5 & = & 6.5
   \\end{array}$$

## 3.3. Gaussian Elimination, Pivoting Strategies

**Example 3.22.** Consider the linear system

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\\\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\\\
-2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\\end{array} \\tag{3.3}$$

With the help of the first equation, the variable $x_1$ can be eliminated from the second, third and fourth equations. We multiply the first equation by 2, $-1$ and $-2$, respectively, and subtract it from the second, third and fourth equations, respectively:

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\\\
& & & & x_3 & - & 6x_4 & = & 16 \\\\
& - & 3x_2 & & & - & 6x_4 & = & 6
\\end{array} \\tag{3.4}$$

The resulting system is equivalent to (3.3).

We associate the $4 \\times 5$ dimensional matrix

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\tag{3.5}$$

to the system (3.3). Here we augmented the $4 \\times 4$ coefficient matrix with a fifth column which contains the elements from the right hand side of the system. We will call this matrix as the *augmented matrix*. In the augmented matrix we can do the above elimination by multiplying the first row by 2, $-1$ and $-2$, respectively, and we subtract it from the second, third and fourth row, respectively. Then we get

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix}. \\tag{3.6}$$

The variable $x_2$ is missing in the equation representing the third row, and we eliminate $x_2$ from the fourth row too with the help of the second row. We multiply the second row by $-1$, and subtract the result from the fourth row:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix}. \\tag{3.7}$$

Finally, we multiply the third row by 6, and subtract it from the third row:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 0 & 38 & -76 \\end{pmatrix}. \\tag{3.8}$$

This augmented matrix describes the triangular system

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\\\
& & & & x_3 & - & 6x_4 & = & 16 \\\\
& & & & & & 38x_4 & = & -76
\\end{array}$$

Solving it with the backward substitution we get $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. The above elimination process is written shortly as

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 0 & 38 & -76 \\end{pmatrix}. \\qquad\\square$$

Using the above method for the general $n$-dimensional linear system

$$\\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \\ldots & + & a_{1n}x_n & = & b_1 \\\\
a_{21}x_1 & + & a_{22}x_2 & + & \\ldots & + & a_{2n}x_n & = & b_2 \\\\
\\vdots & & \\vdots & & & & \\vdots & & \\vdots \\\\
a_{n1}x_1 & + & a_{n2}x_2 & + & \\ldots & + & a_{nn}x_n & = & b_n
\\end{array} \\tag{3.9}$$

we get the *Gaussian elimination with backward substitution.* We put the coefficients and the right hand sides to the *augmented matrix*:

$$\\tilde{\\mathbf{A}}^{(0)} = (\\mathbf{A}, \\mathbf{b}) = \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} & a_{1,n+1} \\\\ a_{21} & a_{22} & \\ldots & a_{2n} & a_{2,n+1} \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_{n1} & a_{n2} & \\ldots & a_{nn} & a_{n,n+1} \\end{pmatrix},$$

where $a_{i,n+1} := b_i$, $(i = 1, \\ldots, n)$. Starting from the matrix $\\tilde{\\mathbf{A}}^{(0)}$ we obtain the sequence of matrices $\\tilde{\\mathbf{A}}^{(1)}, \\tilde{\\mathbf{A}}^{(2)}, \\ldots, \\tilde{\\mathbf{A}}^{(n-1)}$ describing equivalent linear systems in the following way. Let

$$\\tilde{\\mathbf{A}}^{(1)} = \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} & a_{1,n+1} \\\\ 0 & a_{22}^{(1)} & \\ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & a_{n2}^{(1)} & \\ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \\end{pmatrix},$$

where $a_{ij}^{(1)} := a_{ij} - l_{i1}a_{1j}$, $l_{i1} := \\dfrac{a_{i1}}{a_{11}}$, $i = 2, \\ldots, n$, $j = 2, \\ldots, n+1$, (assuming $a_{11} \\neq 0$). If the matrices $\\tilde{\\mathbf{A}}^{(1)}, \\ldots, \\tilde{\\mathbf{A}}^{(k-1)}$ are defined for some $k \\leq n-1$, then let

$$\\tilde{\\mathbf{A}}^{(k)} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1,k} & a_{1,k+1} & \\cdots & a_{1,n} & a_{1,n+1} \\\\
0 & a_{22}^{(1)} & \\cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \\cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\\\
& & \\ddots & & & & & \\\\
0 & 0 & \\cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \\cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\\\
0 & 0 & \\cdots & 0 & a_{k+1,k+1}^{(k)} & \\cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\\\
\\vdots & \\vdots & & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
0 & 0 & \\cdots & 0 & a_{n,k+1}^{(k)} & \\cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\\end{pmatrix},$$

where $a_{ij}^{(k)} := a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}$, $l_{ik} := \\dfrac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$, $i = k+1, \\ldots, n$, $j = k+1, \\ldots, n+1$. We perform these *elimination steps* for $k = 1, \\ldots, n-1$. Finally, we solve the triangular system corresponding to the matrix $\\tilde{\\mathbf{A}}^{(n-1)}$ using the backward substitution method. The elements $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ in the main diagonal of the last matrix of the Gaussian elimination are called *pivot elements.* Clearly, we can perform the Gaussian elimination if and only if all the pivot elements are nonzero.

If we perform the steps of the Gaussian elimination only on the coefficient matrix, the resulting matrices will be denoted by $\\mathbf{A}^{(0)} := \\mathbf{A}, \\mathbf{A}^{(1)}, \\ldots, \\mathbf{A}^{(n-1)}$.

---

**Algorithm 3.23. Gaussian elimination**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - augmented matrix
OUTPUT: $x_1, \\ldots, x_n$

*(elimination:)*
**for** $k = 1, \\ldots, n-1$ **do**
$\\qquad$**for** $i = k+1, \\ldots, n$ **do**
$\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
*(backward substitution:)*
$x_n \\leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

The above algorithm is formulated so that in each step the new value of an element overwrites the same element of the previous matrix. We note that the zeros in the matrix are not computed and even they are not stored. Therefore, after the last elimination steps the elements under the main diagonal have no meaning. They can be filled by zero directly if the whole matrix is needed.

Next we compute the number of arithmetic operations of the Gaussian elimination:

| | multiplication/division | addition/subtraction |
|---|---|---|
| step 1 | $(n-1)(n+1)$ | $(n-1)n$ |
| step 2 | $(n-2)n$ | $(n-2)(n-1)$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ |
| step $n-1$ | $1 \\cdot 3$ | $1 \\cdot 2$ |
| total: | $\\sum_{i=1}^{n-1} i(i+2)$ | $\\sum_{i=1}^{n-1} i(i+1)$ |

Using the identity $1^2 + 2^2 + \\cdots + n^2 = \\frac{1}{6}n(n+1)(2n+1)$ we can easily check that the total number of multiplications and divisions needed for the elimination steps is $n^3/3 + n^2/2 - 5n/6$, and the number of additions and subtractions is $(n^3 - n)/3$. Together with the backward substitution, $n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \\mathcal{O}(n^2)$ number of multiplications and divisions, and $(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \\mathcal{O}(n^2)$ number of additions and subtractions are needed to perform the Gaussian elimination. Shortly we say that the time complexity of the Gaussian elimination is $n^3/3$ number of operations.

**Example 3.24.** Solve the system

$$\\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\\\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\\\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\\\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\\end{array}$$

by Gaussian elimination. After performing the first step of the elimination we get

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix}.$$

Since the pivot element of the second row is 0, the Algorithm 3.23 cannot be continued. On the other hand, the system has a unique solution: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$. But if we change the second and third rows of the previous augmented matrix, the corresponding linear system is the same, and the elimination can be continued:

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 0 & 10 & -63 & 83 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 0 & 0 & -143 & 143 \\end{pmatrix},$$

which yields the solution. $\\qquad\\square$

**Example 3.25.** Solve the linear system

$$\\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\\\
5.060x_1 & - & 1.05x_2 & = & 250.9
\\end{array}$$

using Gaussian elimination and 4-digit arithmetic. Following Algorithm 3.23, first we compute the factor $l_{21} = 5.060/0.0002 = 25300$ (rounding to 4 significant digits). Then by multiplying the first equation by $l_{21}$ and subtracting it from the second row we get

$$\\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\\\ 5.06 & -1.05 & 250.9 \\end{pmatrix} \\sim \\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\\\ 0 & 771700 & 1543000 \\end{pmatrix}.$$

We note that we do not compute the first element of the second row by Algorithm 3.23, it will be 0 without any calculation.) Solving it we get the numerical solutions $\\tilde{x}_1 = -100.0$ and $\\tilde{x}_2 = 1.999$. We can check that the exact solution of the system is $x_1 = 50$ and $x_2 = 2$. Therefore, the relative errors of the numerical solutions are 300% and 0.05%, respectively. Note that the relative error of the first variable is huge.

Repeat the calculation for the system where we interchange the two equations:

$$\\begin{pmatrix} 5.06 & -1.05 & 250.9 \\\\ 0.0002 & -30.5 & -60.99 \\end{pmatrix} \\sim \\begin{pmatrix} 5.06 & -1.05 & 250.9 \\\\ 0 & -30.5 & -61.0 \\end{pmatrix}.$$

This gives the numerical values $x_1 = 50.00$ and $x_2 = 2.000$, which are identical to the exact solutions.

What is the difference in between the two computations? In the first case, in order to compute $l_{21}$ we needed to divide by a small number (0.0002), which gave us the increase of the rounding error. In the second case we performed the division by 5.06 in the computation of $l_{21}$, and we did not observe any error in the final result. $\\qquad\\square$

### Partial Pivoting

The last two examples show that sometimes it is necessary, and in many cases it is useful to modify Algorithm 3.23. One of the most popular modification is the Gaussian elimination with *partial pivoting* (or *maximal column pivoting*). Here, before the $k$th step of the elimination, we select the element with the largest magnitude in the $k$th column in and under the main diagonal, i.e., let

$$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}.$$

(An element with the largest magnitude is in the $l$th row. If there are several elements with the same largest magnitude, then $l$ denotes the first possible row index.) We interchange the $k$th and $l$th rows, and then continue with the elimination. This will get around the problems of Examples 3.24 and 3.25. Indeed, if $a_{kk}^{(k-1)} = 0$, then after the row change a nonzero element is moved into this position (if there is a nonzero element below $a_{kk}^{(k-1)}$). Furthermore, the row change guarantees that the division will be performed by the element with a largest magnitude which helps to reduce the rounding error in the computation.

**Theorem 3.26.** *The next statements are equivalent:*

(i) *the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved by Gaussian elimination with partial pivoting,*

(ii) $\\det(\\mathbf{A}) \\neq 0$,

(iii) *the matrix $\\mathbf{A}$ is invertible,*

(iv) *the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ has a unique solution for all $\\mathbf{b}$.*

**Proof.** It is known from linear algebra that statements (ii), (iii) and (iv) are equivalent (see Theorem 3.2). Now we show that (i) and (ii) are equivalent.

Suppose first that (i) holds. Let $\\mathbf{A}^{(0)} := \\mathbf{A}$, and let $\\mathbf{A}^{(k)}$ be the coefficient matrix in the Gaussian elimination after the $k$th step. The properties of the determinants yield that $\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$ if there was no row change in the $k$th step, and $\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$ if there was a row change. Since the Gaussian elimination can be performed by the assumption, the triangular system corresponding to the coefficient matrix $\\mathbf{A}^{(n-1)}$ of the last step is solvable, therefore, $\\det(\\mathbf{A}^{(n-1)}) \\neq 0$. But this implies $\\det(\\mathbf{A}) = \\pm\\det(\\mathbf{A}^{(n-1)}) \\neq 0$.

We show that if the Gaussian elimination with partial pivoting terminates before the $k$th step, then $\\det(\\mathbf{A}) = 0$. The $k$th step cannot be performed if and only if $a_{ik}^{(k-1)} = 0$ for all $i = k, \\ldots, n$, i.e.,

$$\\mathbf{A}^{(k-1)} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \\cdots & a_{1n} \\\\
0 & a_{22}^{(1)} & \\cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \\cdots & a_{2n}^{(1)} \\\\
& & \\ddots & & & & & \\\\
0 & 0 & \\cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \\cdots & a_{k-1,n}^{(k-2)} \\\\
0 & 0 & \\cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \\cdots & a_{kn}^{(k-1)} \\\\
\\vdots & \\vdots & & \\vdots & \\vdots & \\vdots & & \\vdots \\\\
0 & 0 & \\cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \\cdots & a_{nn}^{(k-1)}
\\end{pmatrix}.$$

Hence

$$\\det(\\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\\cdots a_{k-1,k-1}^{(k-2)}\\det\\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \\cdots & a_{kn}^{(k-1)} \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & a_{n,k+1}^{(k-1)} & \\cdots & a_{nn}^{(k-1)} \\end{pmatrix} = 0,$$

and so $\\det(\\mathbf{A}) = \\pm\\det(\\mathbf{A}^{(k-1)}) = 0$. $\\qquad\\square$

**Example 3.27.** Consider again the system examined in Example 3.24, and solve it using Gaussian elimination with partial pivoting. We get the following sequence of the augmented matrices:

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ 2 & -1 & 0 & -3 & 8 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\\\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\\\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 5/7 & -9/2 & 83/14 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\\\ 0 & 0 & 5/7 & -9/2 & 83/14 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\\\ 0 & 0 & 0 & -143/24 & 143/24 \\end{pmatrix}.$$

We can observe that there was a row change before the first and third elimination steps. The solution of the triangular system is $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$. $\\qquad\\square$

Suppose we perform the Gaussian elimination with partial pivoting on the coefficient matrix $\\mathbf{A}$, and we collect the row changes performed during this algorithm. It is easy to see that if we perform all these row changes first on the matrix $\\mathbf{A}$ without the elimination steps, then the Gaussian elimination can be performed on this matrix, and the numerical result will be the same as for the Gaussian elimination with partial pivoting performed for the original system. According to Theorem 3.7 the row change can be performed by multiplying the matrix $\\mathbf{A}$ by a permutation matrix $\\mathbf{P}$ from the left. Therefore, Theorem 3.26 has the following consequence.

**Theorem 3.28.** *If $\\det(\\mathbf{A}) \\neq 0$, then there exists a permutation matrix $\\mathbf{P}$ such that the linear system $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ can be solved by Gaussian elimination (without row changes) for all vector $\\mathbf{b}$.*

### Complete Pivoting

To further reduce the effect of rounding we can use the following modification of the partial pivoting, which is called *complete pivoting* or *maximal pivoting*: before the $k$th step of the elimination we find the first row index $l$ and column index $m$ such that

$$|a_{lm}| = \\max\\{|a_{ij}| : i = k, \\ldots, n,\\ j = k, \\ldots, n\\}.$$

(That is the element with largest magnitude is located in the $l$th row and in the $m$th column.) Then we interchange the $k$th and $l$th rows and the $k$th and $m$th columns. We have to note that the first $n$ columns of the augmented matrix of the system contains coefficients of the variables. At the beginning of the algorithm the first column contains the coefficients of $x_1$, the second one contains those of $x_2$, and so on, the $n$th column contains the coefficients of $x_n$. Therefore, when we interchange columns, we have to record the changes in the order of the variables too. Then we continue with the elimination step, as in the Gaussian elimination.

The disadvantage of this method is that it requires more comparisons than the partial pivoting, so it slows down the running of the algorithm.

**Example 3.29.** Consider again the system examined in Example 3.22, and here we solve it using Gaussian elimination with complete pivoting:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_1 & x_2 & x_3 & x_4 & \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 1 & -2 & -2 & -2 & -11 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_1 & x_2 & x_3 & x_4 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ -2 & -2 & 2 & 1 & -11 \\\\ -4 & 2 & 3 & -1 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ 0 & -5/2 & 1 & 2 & -15 \\\\ 0 & 1 & 5 & 1 & 19 \\\\ 0 & 1/2 & 5 & -1 & 24 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ 0 & 1 & 5 & 1 & 19 \\\\ 0 & -5/2 & 1 & 2 & -15 \\\\ 0 & 1/2 & 5 & -1 & 24 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & -1 & -5/2 & 2 & -15 \\\\ 0 & 5 & 1/2 & -1 & 24 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -23/10 & 11/5 & -56/5 \\\\ 0 & 0 & -1/2 & -2 & 5 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -23/10 & 11/5 & -56/5 \\\\ 0 & 0 & 0 & -57/23 & 171/23 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix}.$$

In order to follow the effect of the column changes, we augmented the matrices with an extra row where we record the variable whose coefficients are listed in that particular column. Here before the first elimination step, we interchanged the first and second row and the first and fourth columns, since 4 was the element with the largest magnitude in the coefficients. (Another option would be to interchange the first and third rows and then the first and fourth columns; or to interchange the first and fourth rows and the first and third columns.) Before the second elimination step, we interchanged the second and third rows and the second and third columns. And before the third elimination step there were no row or column changes. Finally, we solved the triangular system. The fourth equation gave us the value of the variable $x_1$, and the third equation can be solved for $x_2$, the second equation implied the value of $x_3$, and finally, from the first equation we got the solution for $x_4$. The result is again $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

We comment that the advantage of the partial and complete pivoting appears when we do the computations using floating point arithmetic. $\\qquad\\square$

### Scaled Partial Pivoting

Numerical observations indicate that if the order of magnitude of the elements in the coefficient matrix is significantly different, then the effect of rounding can be large (see Example 3.25). Therefore, it is usual to multiply the rows of the system with a nonzero real to equalize the magnitude of the coefficients. If we combine it with the partial pivoting, we get a technique called *scaled partial pivoting*: We are looking for positive factors $d_1, \\ldots, d_n > 0$ so that the elements of the matrix $\\mathbf{B} := \\mathbf{D}\\mathbf{A}$ be of the same magnitude, where $\\mathbf{D} = \\mathrm{diag}(d_1, \\ldots, d_n)$. Then, instead of solving the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$, we solve the equivalent linear system $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ numerically. One simple strategy is to select $\\mathbf{D}$ so that $\\max\\{|b_{ij}| : 1 \\leq j \\leq n\\} \\approx 1$ be satisfied for all $i = 1, \\ldots, n$. We can define $d_i := 1/s_i$ where $s_i := \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$. The problem here is that the division may introduce further rounding error in the calculation. Let $\\beta$ be the base of the number representation on the computer, and let $r_i$ be the smallest integer so that $\\beta^{r_i} \\geq s_i$, and define $b_{ij} := a_{ij}/\\beta^{r_i}$ $(i, j = 1, \\ldots, n)$. Then the division will not contain rounding error, and $1/\\beta < \\max_{1 \\leq j \\leq n} |b_{ij}| \\leq 1$ holds for all $i = 1, \\ldots, n$.

The following result can be proved.

**Theorem 3.30.** *Suppose we perform a scaled partial pivoting on the coefficient matrix $\\mathbf{A}$ with the matrix $\\mathbf{D} = \\mathrm{diag}(d_1, \\ldots, d_n)$ which do not introduce rounding errors (e.g., using $\\beta$ powers). Then if partial or complete pivoting on the matrix $\\mathbf{D}\\mathbf{A}$ yields the same row (and column) changes as the same pivoting on the matrix $\\mathbf{A}$, then the numerical solutions of the systems $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ and $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ with Gaussian elimination using pivoting will be identical.*

The previous result shows that the scaling of the equations effects only the selection of the pivot elements, not the numerical result. So it is popular to use the scaling to select the pivot elements, but we do not perform the the scaling of the rows. This variant of the scaled pivoting is called *partial pivoting with implicit scaling.* The result is one of the most popular algorithms to solve linear systems.

---

**Algorithm 3.31. Gaussian elimination with partial pivoting and implicit scaling**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - augmented matrix
OUTPUT: $x_1, \\ldots, x_n$

*(computation of the scale factors:)*
**for** $i = 1, \\ldots, n$ **do**
$\\qquad s_i \\leftarrow \\max\\limits_{1 \\leq j \\leq n} |a_{ij}|$
**end do**
*(elimination:)*
**for** $k = 1, \\ldots, n-1$ **do**
$\\qquad$let $l$ be the smallest row index for which $\\dfrac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\dfrac{|a_{ik}|}{s_i}$
$\\qquad$interchange the $k$th and $l$th rows of the matrix $\\mathbf{A}$
$\\qquad$**for** $i = k+1, \\ldots, n$ **do**
$\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
*(backward substitution:)*
$x_n \\leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

We note that in our methods many times we needed to interchange two rows of a matrix $\\mathbf{A} = (a_{ij})$. This requires a lot of operation, therefore, instead of it we can do the following trick in programming: We store the elements of the matrix in a two-dimensional array $a[i, j]$. We define an array $m[i]$ with initial values $m[i] = i$, $(i = 1, \\ldots, n)$. If we interchange the $k$th and $l$th rows, we swap the $k$th and $l$th elements of the array $m[\\cdot]$. When we have to refer to an element $a_{ij}$ of the matrix $\\mathbf{A}$, we can use the value $a[m[i], j]$.

**Theorem 3.32.** *If the matrix $\\mathbf{A}$ is diagonally dominant, then the Gaussian elimination can be performed on the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ without pivoting, and the method is stable with respect to the rounding errors.*

**Proof.** First we note that if the matrix $\\mathbf{A}$ is diagonally dominant, then Theorem 3.8 implies that the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ has a unique solution.

We show that each of the coefficient matrices $\\mathbf{A}^{(1)}, \\mathbf{A}^{(2)}, \\ldots, \\mathbf{A}^{(n-1)}$ of the elimination steps is also diagonally dominant. Since $\\mathbf{A}^{(0)} = \\mathbf{A}$ is diagonally dominant, it follows $|a_{11}| > \\sum_{j=2}^{n} |a_{1j}|$, and hence $a_{11} \\neq 0$. Therefore, the matrix $\\mathbf{A}^{(1)}$ is well-defined. We show that $\\mathbf{A}^{(1)}$ is diagonally dominant. Since the first row of $\\mathbf{A}^{(1)}$ is identical to that of $\\mathbf{A}$, it is diagonally dominant. Let $1 < i \\leq n$. Using $a_{ij}^{(1)} = a_{ij} - \\frac{a_{i1}}{a_{11}}a_{1j}$, $(j = 2, \\ldots, n)$, and $a_{i1}^{(1)} = 0$, we get

$$\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}^{(1)}| = \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} \\left|a_{ij} - \\frac{a_{i1}}{a_{11}}a_{1j}\\right| \\leq \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} \\left(|a_{ij}| + \\frac{|a_{i1}|}{|a_{11}|}|a_{1j}|\\right) = \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}| + \\frac{|a_{i1}|}{|a_{11}|}\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{1j}|.$$

Since the $i$th row of $\\mathbf{A}$ is also diagonally dominant, it follows

$$\\begin{aligned}
\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}^{(1)}| &< |a_{ii}| - |a_{i1}| + \\frac{|a_{i1}|}{|a_{11}|}(|a_{11}| - |a_{1i}|) \\\\
&= |a_{ii}| - \\frac{|a_{i1}|}{|a_{11}|}|a_{1i}| \\\\
&\\leq \\left|a_{ii} - \\frac{a_{i1}}{a_{11}}a_{1i}\\right| \\\\
&= |a_{ii}^{(1)}|.
\\end{aligned}$$

This shows that all the rows of $\\mathbf{A}^{(1)}$ are diagonally dominant, hence the matrix is diagonally dominant.

Similar argument shows that all matrices $\\mathbf{A}^{(2)}, \\ldots, \\mathbf{A}^{(n-1)}$ are diagonally dominant. The numerical stability is not shown here. $\\qquad\\square$

We present the next result without its proof.

**Theorem 3.33.** *Let $\\mathbf{A}$ be a symmetric $n \\times n$ matrix, $\\mathbf{b} \\in \\mathbb{R}^n$. Then $\\mathbf{A}$ is positive definite if and only if the Gaussian elimination can be performed for the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ without pivoting, and the pivot elements are all positive. Moreover, in this case the method is stable with respect to the rounding errors.*

### Exercises

1. Solve the following linear systems using Gaussian elimination

   (i) without pivoting,

   (ii) with partial pivoting,

   (iii) with complete pivoting,

   (iv) with scaled partial pivoting:

   (a)
   $$\\begin{array}{rcrcrcr}
   2x_1 & + & 2x_2 & - & 2x_3 & = & -4 \\\\
   -x_1 & + & 3x_2 & & & = & -11 \\\\
   4x_1 & + & 2x_2 & - & 3x_3 & = & -1
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcrcr}
   -x_1 & - & 3x_2 & & & + & 2x_4 & = & 10 \\\\
   -2x_1 & + & 3x_2 & & & + & x_4 & = & 8 \\\\
   4x_1 & + & x_2 & - & x_3 & - & 3x_4 & = & -21 \\\\
   2x_1 & + & x_2 & - & x_3 & + & 3x_4 & = & 7
   \\end{array}$$

2. Use 4-digit arithmetic in the calculations, and apply the question of the previous exercise for the following systems:

   (a)
   $$\\begin{array}{rcrcrcr}
   1.03x_1 & - & 1.1x_2 & + & 8x_3 & = & -9.06 \\\\
   -4.1x_1 & + & 10.1x_2 & - & 6x_3 & = & 106.2 \\\\
   2.11x_1 & - & 4.2x_2 & + & 12x_3 & = & -40.22
   \\end{array}$$
   (exact solution: $(-2, 10, 0.5)$),

   (b)
   $$\\begin{array}{rcrcrcr}
   x_1 & + & \\frac{1}{2}x_2 & + & \\frac{1}{3}x_3 & = & 20 \\\\
   \\frac{1}{2}x_1 & + & \\frac{1}{3}x_2 & + & \\frac{1}{4}x_3 & = & 14 \\\\
   \\frac{1}{3}x_1 & + & \\frac{1}{4}x_2 & + & \\frac{1}{5}x_3 & = & 11
   \\end{array}$$
   (exact solution: $(6, -12, 60)$).

3. Prove Theorem 3.30.

4. Prove Theorem 3.33 (except the statement related to the stability).

## 3.4. Gauss–Jordan Elimination

A version of the Gaussian elimination is the *Gauss–Jordan elimination*, where we use the elimination steps of the Gaussian elimination to transform the coefficient matrix part of the augmented matrix to the identity matrix, i.e., the matrix $(\\mathbf{A}, \\mathbf{b})$ is converted to the form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$. Then the solution of the linear system is $\\mathbf{x} = \\mathbf{b}^{(n-1)}$.

---

**Algorithm 3.34. Gauss–Jordan elimination**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - augmented coefficient matrix
OUTPUT: $x_1, \\ldots, x_n$

*(converting the coefficients to a diagonal form:)*
**for** $k = 1, \\ldots, n$ **do**
$\\qquad$**for** $i = 1, \\ldots, n$ **do**
$\\qquad\\qquad$**if** $i \\neq k$ **do**
$\\qquad\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad\\qquad$**end do**
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
**for** $i = 1, \\ldots, n$ **do**
$\\qquad x_i \\leftarrow a_{i,n+1}/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

It can be checked that the operation count of the Gauss-Jordan elimination is $n^3/2 + \\mathcal{O}(n^2)$ number of multiplications and divisions and $n^3/2 + \\mathcal{O}(n^2)$ number of additions and subtractions.

**Example 3.35.** We apply the Gauss–Jordan elimination to the linear system examined in Example 3.22.

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & -3 & -4 & 3 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 2 & 10/3 & -5/3 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 14/15 & -73/15 \\\\ 0 & 3 & 0 & 4/5 & 22/5 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & 0 & 0 & -26/5 & 52/5 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 3 & 0 & 0 & 6 \\\\ 0 & 0 & -5 & 0 & -20 \\\\ 0 & 0 & 0 & -26/5 & 52/5 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{pmatrix}.$$

The last column gives us the solution: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. $\\qquad\\square$

We can combine pivoting strategies together with the Gauss–Jordan elimination.

**Example 3.36.** Here we apply the Gauss–Jordan elimination with partial pivoting to the linear system examined in Example 3.22:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 1 & -2 & -2 & -2 & -11 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 3/2 & 4 & -2 & 23 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 0 & 6 & 2 & 20 \\\\ 0 & 0 & 1 & -6 & 16 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & 0 & 0 & 16/3 & -50/3 \\\\ 0 & -3/2 & 0 & -3 & 3 \\\\ 0 & 0 & 6 & 2 & 20 \\\\ 0 & 0 & 0 & -19/3 & 38/3 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\\\ 0 & -3/2 & 0 & 0 & -3 \\\\ 0 & 0 & 6 & 0 & 24 \\\\ 0 & 0 & 0 & -19/3 & 38/3 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{pmatrix}.$$

Therefore, the solution is $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. $\\qquad\\square$

### Exercises

1. Solve the linear systems given in Exercises 1 and 2 of Section 3.3 with Gauss–Jordan elimination.

2. Prove that the number of arithmetic operation needed for the Gauss-Jordan elimination is $n^3/2 + n^2 - n/2$ multiplication and divisions.

## 3.5. Tridiagonal Linear Systems

We say that a square matrix $(a_{ij})$ is *tridiagonal* if $a_{ij} = 0$ for all $|i - j| > 1$, i.e., nonzero numbers can appear only in the main diagonal and in the next diagonal above and under it. Tridiagonal linear systems (i.e., a linear system with a tridiagonal coefficient matrix) appear frequently in applications, so it is an important class of linear systems. We will use the following notations:

$$\\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \\cdots & 0 \\\\
a_1 & d_2 & c_2 & 0 & \\cdots & 0 \\\\
0 & a_2 & d_3 & c_3 & \\cdots & 0 \\\\
& & \\ddots & \\ddots & \\ddots & \\\\
0 & 0 & \\cdots & a_{n-2} & d_{n-1} & c_{n-1} \\\\
0 & 0 & \\cdots & 0 & a_{n-1} & d_n
\\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ \\vdots \\\\ x_{n-1} \\\\ x_n \\end{pmatrix} = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ b_3 \\\\ \\vdots \\\\ b_{n-1} \\\\ b_n \\end{pmatrix}. \\tag{3.10}$$

It is practical to store the elements of a tridiagonal matrix in three vectors $(a_i)$, $(d_i)$ and $(c_i)$, as it is used above. In this case only $3n - 2$ storage area is needed for the coefficients.

It is clear that applying the Gaussian elimination to the system (3.10) the elements $a_i$ below the main diagonal will become 0, and the numbers $c_i$ will not be changed during the elimination steps. We have to compute the new values of the variables $d_i$ and $b_i$ during the elimination. In the next algorithm we override the old values of the vectors $(d_i)$ and $(b_i)$ with the actual new ones.

---

**Algorithm 3.37. Gaussian elimination for tridiagonal linear systems**

---

INPUT: $a_i, c_i$ $(i = 1, \\ldots, n-1)$, $d_i, b_i$ $(i = 1, \\ldots, n)$
OUTPUT: $x_1, \\ldots, x_n$

*(elimination:)*
**for** $i = 2, \\ldots, n$ **do**
$\\qquad temp \\leftarrow a_{i-1}/d_{i-1}$
$\\qquad d_i \\leftarrow d_i - temp \\cdot c_{i-1}$
$\\qquad b_i \\leftarrow b_i - temp \\cdot b_{i-1}$
**end do**
*(backward substitution:)*
$x_n \\leftarrow b_n/d_n$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

We can check that the method above requires $5n - 4$ number of multiplications and divisions. If we compare it with the number of operations of the Algorithm 3.23, which is $n^3/3$ multiplications and divisions, then we can see that for a tridiagonal system this special algorithm should be applied.

It follows from Theorem 3.32 that if the tridiagonal matrix $\\mathbf{A}$ is also diagonally dominant, then Algorithm 3.37 can be performed (without pivoting).

### Exercises

1. Solve the following tridiagonal linear systems:

   $$\\begin{array}{rcrcrcrcrcrcr}
   x_1 & - & 0.5x_2 & & & & & & & & & = & 1.5 \\\\
   0.5x_1 & + & 4x_2 & - & 0.5x_3 & & & & & & & = & -4.0 \\\\
   & & 0.5x_2 & + & 2x_3 & - & 0.5x_4 & & & & & = & 2.0 \\\\
   & & & & 0.5x_3 & + & 4x_4 & - & 0.5x_5 & & & = & -4.0 \\\\
   & & & & & & 0.5x_4 & + & 2x_5 & - & 0.5x_6 & = & 2.0 \\\\
   & & & & & & & & 0.5x_5 & + & x_6 & = & -0.5
   \\end{array}$$

2. Show that Algorithm 3.37 requires $5n - 4$ number of multiplications and divisions.

3. Formulate an algorithm similar to Algorithm 3.37 for a *band matrix* where the nonzero elements appear only in the main diagonal and in the next 2 diagonals above and below it, i.e., when $a_{ij} = 0$ for $|i - j| > 2$.

## 3.6. Simultaneous Linear Systems

Frequently we would like to solve so-called *simultaneous linear systems*, i.e., systems of the form $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for $i = 1, \\ldots, m$, where the coefficient matrices are identical, but the right-hand-sides of the equations are different. We can shortly write the above system as $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, where the $i$th columns of the $n \\times m$ dimensional matrix $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\ldots, \\mathbf{b}^{(m)})$ is $\\mathbf{b}^{(i)}$, and the $i$th column of the $n \\times m$ dimensional matrix $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\ldots, \\mathbf{x}^{(m)})$ is $\\mathbf{x}^{(i)}$, i.e., the solution of the system $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$. Since pivoting in the Gaussian or Gauss–Jordan elimination depends only on the coefficient matrix, it can be performed on the $n \\times (n+m)$ dimensional augmented matrix. For example, if we perform the Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ we get a matrix of the form $(\\mathbf{I}, \\mathbf{X})$. Then the solution of the simultaneous linear system $\\mathbf{X}$ appears in the last $m$ columns of the augmented matrix.

### Exercises

1. Show that the operation count of the Gaussian elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ is $n^3/3 + mn^2 - n/3$ number of multiplications and divisions.

2. Prove that the operation count of the Gauss–Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ is $n^3/2 + mn^2 - n/2$ number of multiplications and divisions.

3. Reformulate Algorithm 3.37 for solving simultaneous tridiagonal linear systems.

4. Prove that the system of linear systems $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$, $i = 1, 2, \\ldots, m$ is equivalent to the matrix equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, where $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\ldots, \\mathbf{x}^{(m)})$ and $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$.

## 3.7. Matrix Inversion and Determinants

The inverse matrix $\\mathbf{A}^{-1}$ of a nonsingular square matrix $\\mathbf{A}$ satisfies the matrix equation $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$, so $\\mathbf{A}^{-1}$ is the solution of the simultaneous linear system $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$. It can be shown that if such matrix $\\mathbf{X}$ exists, then $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ holds too, hence $\\mathbf{X}$ is the inverse matrix of $\\mathbf{A}$. We can use the Gauss-Jordan elimination to solve the simultaneous linear system. It can be checked that the number of operations needed to compute the matrix inverse with the Gauss–Jordan elimination is $\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$ number of multiplications and divisions and $\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$ number of additions and subtractions.

**Example 3.38.** Compute the inverse of the matrix

$$\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}.$$

We use the Gauss–Jordan elimination:

$$\\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ -1 & 1 & 0 & 0 & 1 & 0 \\\\ -2 & 0 & -1 & 0 & 0 & 1 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ 0 & 1 & 2 & 1 & 1 & 0 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ 0 & 1 & 2 & 1 & 1 & 0 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\\\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\\\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\\\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \\end{pmatrix}.$$

Hence

$$\\mathbf{A}^{-1} = \\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}. \\qquad\\square$$

Certainly, we can use pivoting techniques together with the Gauss-Jordan elimination for computing the inverse matrix if we wanted to reduce the rounding errors or to avoid division by zero.

According to Theorem 3.26 the Gaussian elimination with pivoting can be performed if and only if $\\det(\\mathbf{A}) \\neq 0$. In the proof of the theorem we can see that $\\det(\\mathbf{A}) = (-1)^s\\det(\\mathbf{A}^{(n-1)})$, where $s$ denotes the number of row changes. Therefore, the determinant is equal to the product of the pivot elements with an appropriate sign: $\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$.

**Example 3.39.** Consider the coefficient matrix of Example 3.22, i.e., let

$$\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}.$$

Compute the determinant of $\\mathbf{A}$. In Example 3.22 we performed the Gaussian elimination on $\\mathbf{A}$ and got

$$\\mathbf{A}^{(3)} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 0 & 3 & 6 & 8 \\\\ 0 & 0 & 1 & -6 \\\\ 0 & 0 & 0 & 38 \\end{pmatrix}.$$

Therefore, $\\det(\\mathbf{A}) = \\det(\\mathbf{A}^{(3)}) = 1 \\cdot 3 \\cdot 1 \\cdot 38 = 114$. $\\qquad\\square$

### Exercises

1. Compute the inverse of the matrices:

   (a)
   $$\\begin{pmatrix} -1 & 1 & 2 \\\\ -2 & 1 & 0 \\\\ 0 & 1 & -1 \\end{pmatrix}$$

   (b)
   $$\\begin{pmatrix} -3 & 1 & 2 \\\\ 0 & 3 & 1 \\\\ -2 & -1 & 1 \\end{pmatrix}$$

   (c)
   $$\\begin{pmatrix} 1 & -1 & 0 & 2 \\\\ 2 & 1 & 0 & 1 \\\\ 1 & 0 & -1 & 0 \\\\ 1 & 2 & 2 & -1 \\end{pmatrix}$$

2. Prove that the matrix inversion using Gauss–Jordan elimination requires $3n^3/2 - n/2$ number of multiplications and divisions.

3. Formulate an algorithm for matrix inversion using Gauss–Jordan elimination taking into account that in the problem $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ the matrix $\\mathbf{I}$ has a special form, so multiplication by 0 should not be computed. Show that the resulting algorithm requires $n^3$ multiplications and divisions and $n^3 - 2n^2 + n$ additions and subtractions.

4. Compute the determinants of the matrices given in Exercise 1 using the Gaussian elimination.
`,j=`# 3. fejezet

# Lineáris egyenletrendszerek

Ebben a fejezetben lineáris egyenletrendszerek direkt módszerekkel történő numerikus megoldásait és vele kapcsolatos lineáris algebrai feladatokat vizsgálunk. Megismerjük a Gauss- és Gauss–Jordan-eliminációt és variánsait, valamint azok alkalmazását a mátrix inverzió feladatára.

## 3.1. Lineáris algebrai előismeretek

Ebben a szakaszban néhány, a későbbiekben használt lineáris algebrai jelölést, fogalmat, állítást elevenítünk fel. A továbbiakban, ha másképp nem mondjuk, $\\mathbf{A} = (a_{ij})$ egy $n \\times n$-es mátrixot, $\\mathbf{x}$ pedig egy $n$-dimenziós oszlopvektort jelöl. Az $\\mathbf{A}$ mátrix determinánsát $\\det(\\mathbf{A})$-val, az $n \\times n$-es egységmátrixot $\\mathbf{I}$-vel jelöljük. Az $\\mathbf{A}$ mátrix ill. az $\\mathbf{x}$ oszlopvektor transzponáltját $\\mathbf{A}^T$ ill. $\\mathbf{x}^T$ jelöli. Azt a diagonális mátrixot, amelynek főátlójában rendre $a_1, a_2, \\ldots, a_n$ áll, $\\mathrm{diag}(a_1, a_2, \\ldots, a_n)$ jelöli.

A determinánsok néhány ismert tulajdonságát foglaltuk össze a következő tételben:

**3.1. tétel.** *Legyen $\\mathbf{A}, \\mathbf{B}$ $n \\times n$-es mátrixok. Ekkor*

1. $\\det(\\mathbf{A}) = 0$, *ha $\\mathbf{A}$ egy sora (vagy oszlopa) azonosan nulla;*

2. $\\det(\\mathbf{A}) = 0$, *ha $\\mathbf{A}$ két sora (oszlopa) azonos;*

3. $\\det(\\mathbf{A}\\mathbf{B}) = \\det(\\mathbf{A})\\det(\\mathbf{B})$;

4. $\\det(\\mathbf{A}^{-1}) = 1/\\det(\\mathbf{A})$;

5. $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$;

6. *Ha $\\mathbf{B}$-t úgy kapjuk az $\\mathbf{A}$ mártixból, hogy annak valamely sorát (oszlopát) megszorozzuk egy $c$ konstanssal, akkor $\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$.*

7. *Ha $\\mathbf{B}$-t úgy kapjuk az $\\mathbf{A}$ mártixból, hogy annak két sorát (oszlopát) felcseréljük, akkor $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$.*

8. *Ha $\\mathbf{B}$-t úgy kapjuk az $\\mathbf{A}$ mártixból, hogy annak egyik sorához (oszlopához) egy másik sor (oszlop) $c$-szeresét ($c \\in \\mathbb{R}$ tetszőleges) hozzáadjuk, akkor $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$.*

9. *Jelölje $\\mathbf{A}_{ij}$ azt az $(n-1) \\times (n-1)$-es mátrixot, amelyet az $\\mathbf{A}$ mátrixból annak $i$-edik sora és $j$-edik oszlopa elhagyásával kapunk. Ekkor a determináns $i$-edik sora szerinti sorfejtése*

$$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij}),$$

*a $j$-edik oszlop szerinti sorfejtése pedig*

$$\\det(\\mathbf{A}) = \\sum_{i=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij}).$$

Az $\\mathbf{A}^{-1}$ $n \\times n$-es mátrixot az $\\mathbf{A}$ $n \\times n$-es mátrix *inverzének* nevezzük, ha $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$. Egy négyzetes mátrixot *invertálhatónak* nevezünk, ha létezik az inverze. Egy $\\mathbf{A}$ négyzetes mátrixot *szingulárisnak* nevezünk, ha nem létezik az inverze. Az invertálható mátrixokat szokás *nemszinguláris* vagy *reguláris* mátrixoknak is hívni.

**3.2. tétel.** *Legyen $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$, $\\mathbf{b} \\in \\mathbb{R}^n$. A következő állítások ekvivalensek:*

1. $\\det(\\mathbf{A}) \\neq 0$,

2. *az $\\mathbf{A}$ mátrix invertálható,*

3. *az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletnek létezik egyértelmű megoldása minden $\\mathbf{b}$ vektorra.*

**3.3. tétel.** *Az $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ egyenletnek akkor és csak akkor van nemtriviális (azaz nemnulla) megoldása, ha $\\mathbf{A}$ szinguláris, azaz $\\det(\\mathbf{A}) = 0$.*

**3.4. tétel.** *Ha $\\mathbf{A}, \\mathbf{B} \\in \\mathbb{R}^{n \\times n}$ invertálható, akkor $\\mathbf{A}\\mathbf{B}$ is invertálható, és $(\\mathbf{A}\\mathbf{B})^{-1} = \\mathbf{B}^{-1}\\mathbf{A}^{-1}$.*

Az $\\mathbf{A}$ négyzetes mátrixot *felülről (alulról) trianguláris*nak vagy más szóval *felső (alsó) háromszög mátrix*nak nevezünk, ha $a_{ij} = 0$ minden $i > j$-re ($i < j$-re), azaz a mátrix főátlója alatti (feletti) minden elem 0.

**3.5. tétel.** *Egy $\\mathbf{A}$ trianguláris mátrix deteminánsa $\\det(\\mathbf{A}) = a_{11}a_{22}\\cdots a_{nn}$.*

**3.6. tétel.** *Felülről (alulról) trianguláris mátrixok szorzata felülről (alulról) trianguláris mátrix. Felülről (alulról) trianguláris invertálható mátrix inverze felülről (alulról) trianguláris mátrix.*

Egy olyan $\\mathbf{P}$ négyzetes mátrixot, amelyet az egységmátrixból sorok (vagy oszlopok) felcserélésével (permutációjával) kapunk, *permutációs mátrix*nak mátrixnak nevezünk. A következő tétel szerint mátrixok sorainak (oszlopainak) felcserélése egy megfelelő permutációs mátrixszal való szorzással ekvivalens.

**3.7. tétel.** *Legyen $k_1, \\ldots, k_n$ az $1, \\ldots, n$ számok egy permutációja (átrendezése), és legyen $\\mathbf{P} \\in \\mathbb{R}^{n \\times n}$ az a permutációs mátrix, amelyet az egységmátrixból úgy kapunk, hogy annak első sorát a $k_1$-edik sorba, $\\ldots$, az $n$-edik sorát pedig a $k_n$-edik sorba helyezzük el. Legyen $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ tetszőleges. Ekkor a $\\mathbf{P}\\mathbf{A}$ mátrix ($\\mathbf{A}\\mathbf{P}$ mátrix) megkapható az $\\mathbf{A}$ mátrixból úgy, hogy annak első sorát (oszlopát) a $k_1$-edik sorba (oszlopba), $\\ldots$, az $n$-edik sorát (oszlopát) pedig a $k_n$-edik sorba (oszlopba) helyezzük el.*

Az $\\mathbf{A}$ négyzetes mátrixot *soronként diagonálisan dominánsnak* vagy röviden *diagonálisan dominánsnak* nevezzük, ha

$$|a_{ii}| > \\sum_{\\substack{j=1 \\\\ j \\neq i}}^{n} |a_{ij}|$$

teljesül minden $i = 1, \\ldots, n$-re. Ehhez hasonlóan az $\\mathbf{A}$ mátrixot *oszloponként diagonálisan dominánsnak* nevezzük, ha $\\mathbf{A}^T$ diagonálisan domináns, azaz

$$|a_{jj}| > \\sum_{\\substack{i=1 \\\\ i \\neq j}}^{n} |a_{ij}|$$

teljesül minden $j = 1, \\ldots, n$-re.

**3.8. tétel.** *Ha $\\mathbf{A}$ diagonálisan domináns, akkor $\\mathbf{A}$ invertálható.*

**Bizonyítás.** Tegyük fel, hogy $\\mathbf{A}$ nem invertálható. Ekkor az $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ egyenletnek létezik $\\mathbf{x} \\neq \\mathbf{0}$ nemtriviális megoldása. Legyen $k$ olyan, hogy $|x_k| = \\max\\{|x_i| : i = 1, \\ldots, n\\}$. Ekkor $x_k \\neq 0$. Mivel $\\sum_{j=1}^{n} a_{ij}x_j = 0$ minden $i = 1, \\ldots, n$-re, kapjuk, hogy $a_{kk}x_k = -\\sum_{j=1, j\\neq k}^{n} a_{kj}x_j$. Ekkor a háromszög-egyenlőtlenség alapján $|a_{kk}x_k| \\leq \\sum_{j=1, j\\neq k}^{n} |a_{kj}x_j|$, és így

$$|a_{kk}| \\leq \\sum_{\\substack{j=1 \\\\ j \\neq k}}^{n} |a_{kj}| \\frac{|x_j|}{|x_k|} \\leq \\sum_{\\substack{j=1 \\\\ j \\neq k}}^{n} |a_{kj}|,$$

ami ellentmondás. $\\qquad\\square$

Egy $\\mathbf{A}$ mátrixot *pozitív definitnek* (*negatív definitnek*) nevezünk, ha $\\mathbf{A}$ szimmetrikus és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ (ill. $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} < 0$) minden $\\mathbf{x} \\neq \\mathbf{0}$-ra. $\\mathbf{A}$-t *pozitív szemidefinitnek* (*negatív szemidefinitnek*) nevezzük, ha $\\mathbf{A}$ szimmetrikus és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\geq 0$ (ill. $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\leq 0$) minden $\\mathbf{x}$-re.

**3.9. tétel.** *Ha $\\mathbf{A}$ pozitív definit, akkor*

1. $\\mathbf{A}$ *invertálható,*

2. $a_{ii} > 0$ *minden $i = 1, \\ldots, n$-re.*

**3.10. tétel.** *Az $\\mathbf{A}$ négyzetes szimmetrikus mátrix akkor és csak akkor pozitív definit, ha az összes bal felső főminorai pozitívak, azaz*

$$\\det\\begin{pmatrix} a_{11} & \\cdots & a_{1i} \\\\ \\vdots & & \\vdots \\\\ a_{i1} & \\cdots & a_{ii} \\end{pmatrix} > 0, \\qquad i = 1, 2, \\ldots, n.$$

Az $\\mathbf{A}$ négyzetes mátrixot *ortogonálisnak* nevezzük, ha $\\mathbf{A}\\mathbf{A}^T = \\mathbf{A}^T\\mathbf{A} = \\mathbf{I}$, azaz $\\mathbf{A}$ invertálható és $\\mathbf{A}^{-1} = \\mathbf{A}^T$.

**3.11. tétel.** *Ortogonális mátrixok szorzata ortogonális.*

A $\\lambda \\in \\mathbb{C}$ komplex számot az $\\mathbf{A}$ mátrix *sajátértékének* nevezzük, ha az

$$\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$$

egyenletnek létezik nemtriviális ($\\mathbf{x} \\neq 0$) megoldása. Az egyenlet egy $\\mathbf{x} \\neq 0$ megoldását az $\\mathbf{A}$ mátrix $\\lambda$ sajátértékéhez tartozó *sajátvektorának* nevezzük.

**3.12. tétel.** *Az $\\mathbf{A}$ $n \\times n$-es mátrixnak $n$ db sajátértéke van, amelyek a*

$$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$$

*$n$-edfokú algebrai egyenlet, az ún. karakterisztikus egyenlet gyökei.*

**3.13. tétel.** *Legyen $\\lambda_1, \\lambda_2, \\ldots, \\lambda_n$ az $\\mathbf{A}$ mátrix sajátértékei. Ekkor*

1. $\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$;

2. $\\mathbf{A}$ *akkor és csak akkor invertálható, ha $\\lambda_i \\neq 0$ minden $i = 1, 2, \\ldots, n$-re;*

3. *ha $\\mathbf{A}$ invertálható, akkor $\\mathbf{A}^{-1}$ sajátértékei az $1/\\lambda_1, 1/\\lambda_2, \\ldots, 1/\\lambda_n$ számok;*

4. *az $\\mathbf{A}^k$ mátrix sajátértékei a $\\lambda_1^k, \\lambda_2^k, \\ldots, \\lambda_n^k$ számok.*

**3.14. tétel.** *Egy trianguláris $\\mathbf{A}$ mátrix sajátértékei a főátlóban álló $a_{11}, a_{22}, \\ldots, a_{nn}$ számok.*

Legyen $\\mathbf{A}$ és $\\mathbf{B}$ két azonos dimenziójú négyzetes mátrix. Azt mondjuk, hogy $\\mathbf{A}$ és $\\mathbf{B}$ *hasonló*, ha létezik olyan $\\mathbf{P}$ invertálható mátrix, hogy $\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$. Megjegyezzük, hogy ekkor nyilván $\\mathbf{B} = \\mathbf{P}\\mathbf{A}\\mathbf{P}^{-1}$, azaz a hasonlóság szimmetrikus reláció. A $\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}$ mátrixhoz tartozó lineáris transzformációt *hasonlósági transzformációnak* nevezzük.

**3.15. tétel.** *Hasonló mátrixok sajátértékei megegyeznek.*

**Bizonyítás.** Legyen $\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$. Ekkor a determinánsok tulajdonságait felhasználva $\\mathbf{A}$ karakterisztikus polinomjára

$$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = \\det(\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P} - \\lambda\\mathbf{I}) = \\det(\\mathbf{P}^{-1})\\det(\\mathbf{B} - \\lambda\\mathbf{I})\\det(\\mathbf{P}) = \\det(\\mathbf{B} - \\lambda\\mathbf{I})$$

teljesül, amiből következik a tétel. $\\qquad\\square$

A $\\rho(\\mathbf{A}) := \\max\\{|\\lambda| : \\lambda \\text{ sajátértéke } \\mathbf{A}\\text{-nak}\\}$ számot az $\\mathbf{A}$ mátrix *spektrálsugarának* nevezzük.

**3.16. tétel.** *Legyen $k$ pozitív egész, és $\\|\\cdot\\|$ egy tetszőleges mátrixnorma. Ekkor*

1. $\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$,

2. $\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$.

**3.17. tétel.** *Minden $\\mathbf{A}$ mátrixhoz és $\\varepsilon > 0$ számhoz létezik olyan $\\|\\cdot\\|$ mátrixnorma, amelyre $\\|\\mathbf{A}\\| \\leq \\rho(\\mathbf{A}) + \\varepsilon$.*

**3.18. tétel.** *Egy tetszőleges négyzetes $\\mathbf{A}$ mátrixra $\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$. Ha $\\mathbf{A}$ szimmetrikus, akkor $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$.*

Legyenek $a_1, \\ldots, a_n$ komplex számok. A

$$\\det\\begin{pmatrix} 1 & a_1 & a_1^2 & \\cdots & a_1^{n-1} \\\\ 1 & a_2 & a_2^2 & \\cdots & a_2^{n-1} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 1 & a_n & a_n^2 & \\cdots & a_n^{n-1} \\end{pmatrix} \\tag{3.1}$$

determinánst *Vandermonde-féle determinánsnak* nevezzük.

**3.19. tétel.** *A (3.1) Vandermonde-féle determináns akkor és csak akkor nem nulla, ha az $a_i$ számok páronként különbözők.*

### Feladatok

1. Határozza meg az $\\alpha$ és $\\beta$ paraméterek lehetséges értékeit, hogy az

   $$\\mathbf{A} = \\begin{pmatrix} \\alpha & 1 & 0 \\\\ \\beta & 2 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$$

   mátrix

   (a) szinguláris,

   (b) diagonálisan domináns,

   (c) szimmetrikus,

   (d) pozitív definit legyen.

2. Igazolja, hogy ha $\\mathbf{A}$ és $\\mathbf{B}$ pozitív definit $n \\times n$-es mátrixok, akkor

   (a) $\\mathbf{A}^T$,

   (b) $\\mathbf{A} + \\mathbf{B}$,

   (c) $\\mathbf{A}^2$

   is pozitív definit.

3. Bizonyítsa be a 3.6. tételt!

4. Bizonyítsa be a 3.7. tételt!

5. Bizonyítsa be a 3.9. tételt!

6. Bizonyítsa be a 3.11. tételt!

7. Bizonyítsa be a 3.12. tételt!

8. Bizonyítsa be a 3.14. tételt!

9. Bizonyítsa be a 3.19. tételt! (Útmutatás: A (3.1) determináns képletében helyettesítsük $a_1$-et $x$-szel. Mutassa meg, hogy a kapott determináns $n-1$-edfokú polinom $x$-ben! Soroljon fel $n-1$ db különböző gyököt a kapott polinomnak!)

10. Mutassa meg, hogy a (3.1) Vandermonde-determináns értéke

    $$\\prod_{i>j}(a_i - a_j).$$

    (Útmutatás: Tekintse az előző feladat megoldását!)

## 3.2. Trianguláris egyenletrendszerek

**3.20. példa.** Oldjuk meg a következő egyenletrendszert:

$$\\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\\\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\\\
& & & & 2x_3 & - & x_4 & = & -2 \\\\
& & & & & & 3x_4 & = & 12
\\end{array}$$

A negyedik egyenletet $x_4$-re megoldhatjuk: $x_4 = 4$. Ezt visszahelyettesítve a harmadik egyenletbe kapjuk $x_3 = (-2 + x_4)/2 = 1$, majd a második egyenletből $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Végül az első egyenletből $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\\qquad\\square$

Az előző példát általánosítva, egy $n$-dimenziós felülről trianguláris egyenletrendszer, $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$, azaz

$$\\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \\ldots & + & a_{1n}x_n & = & b_1 \\\\
& & a_{22}x_2 & + & \\ldots & + & a_{2n}x_n & = & b_2 \\\\
& & & & \\ddots & & \\vdots & & \\vdots \\\\
& & & & & & a_{nn}x_n & = & b_n
\\end{array} \\tag{3.2}$$

megoldásának módszerét, az ún. *visszahelyettesítés módszerét* a következő algoritmussal adhatjuk meg:

---

**3.21. algoritmus. Trianguláris egyenletrendszer megoldása visszahelyettesítéssel**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n)$, $b_i$, $(i = 1, \\ldots, n)$
OUTPUT: $x_1, \\ldots, x_n$

$x_n \\leftarrow b_n / a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(b_i - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

A visszahelyettesítés módszere akkor és csak akkor hajtható végre, ha $a_{ii} \\neq 0$ minden $i = 1, \\ldots, n$-re. Mivel $\\det(\\mathbf{A}) = a_{11}a_{22}\\cdots a_{nn}$, így ez akkor és csak akkor teljesül, ha a (3.2) egyenletnek létezik egyértelmű megoldása, azaz $\\det(\\mathbf{A}) \\neq 0$.

A módszer műveletigénye:

| | osztás/szorzás | összeadás/kivonás |
|---|---|---|
| 1. lépés: | 1 | 0 |
| 2. lépés: | 2 | 1 |
| $\\vdots$ | $\\vdots$ | $\\vdots$ |
| $n$. lépés: | $n$ | $n-1$ |

Azaz a módszer végrehajtásához összesen $1 + 2 + \\cdots + n = n(n+1)/2$ osztás ill. szorzás, valamint $1 + 2 + \\cdots + n - 1 = (n-1)n/2$ összeadás ill. kivonás szükséges. Ezt szokás úgy is írni, hogy $n^2/2 + \\mathcal{O}(n)$ nagyságrendű osztás/szorzás, és hasonlóan $n^2/2 + \\mathcal{O}(n)$ nagyságrendű összeadás/kivonás kell a módszerhez. Itt és a továbbiakban $\\mathcal{O}(n^k)$ egy legfeljebb $k$-adrendű polinomot jelöl.

### Feladatok

1. Oldja meg a következő trianguláris egyenletrendszereket:

   (a)
   $$\\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\\\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\\\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\\\
   & & & & & & 2x_4 & = & 4
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\\\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\\\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\\\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\\\
   & & & & & & & & 1.3x_5 & = & 6.5
   \\end{array}$$

## 3.3. Gauss-elimináció, főelemkiválasztási stratégiák

**3.22. példa.** Tekintsük az

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\\\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\\\
-2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\\end{array} \\tag{3.3}$$

egyenletrendszert. Az első egyenlet segítségével a második, harmadik és negyedik egyenletből az $x_1$ változó kiejthető a következő módon: az első egyenlet 2-szeresét, $-1$-szeresét, ill. $-2$-szeresét kivonjuk a második, harmadik, ill. a negyedik egyenletből:

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\\\
& & & & x_3 & - & 6x_4 & = & 16 \\\\
& - & 3x_2 & & & - & 6x_4 & = & 6
\\end{array} \\tag{3.4}$$

Ekkor az eredetivel ekvivalens egyenletrendszert kapunk. Ezt mátrixok segítségével a következőképpen írhatjuk le röviden: A (3.3) egyenletrendszer együtthatóit egy $4 \\times 4$-es mátrixban leírjuk, majd azt kibővítjük egy ötödik oszloppal, ahol az egyenletrendszer jobb oldalát írjuk le. Ekkor kapjuk az

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\tag{3.5}$$

ún. *kibővített mátrixot*. A (3.4) egyenletrendszert leíró kibővített mátrixot tehát úgy kapjuk, hogy a (3.5) mátrix első sorát megszorozzuk 2, $-1$ és $-2$-vel, és a kapott sorokat kivonjuk rendre a második, harmadik és a negyedik sorból:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix}. \\tag{3.6}$$

Az $x_2$ változó hiányzik a harmadik sorból, és a második egyenlet segítségével kiküszöböljük a negyedik sorból $x_2$-t, azaz a (3.6) mátrixban a második oszlopban a főátló alatti elemeket „kinullázzuk" a második sor segítségével: a második sor $-1$-szeresét kivonjuk a negyedik sorból:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix}. \\tag{3.7}$$

Végül beszorozzuk a harmadik sort 6-tal, és kivonjuk a negyedikből:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 0 & 38 & -76 \\end{pmatrix}. \\tag{3.8}$$

Ez az

$$\\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\\\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\\\
& & & & x_3 & - & 6x_4 & = & 16 \\\\
& & & & & & 38x_4 & = & -76
\\end{array}$$

trianguláris egyenletrendszerrel ekvivalens. Ezt megoldva a visszahelyettesítés módszerével kapjuk, hogy a megoldás $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. A kibővített mátrixokkal a számolást röviden a következő alakban szoktuk leírni:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 0 & 38 & -76 \\end{pmatrix}. \\qquad\\square$$

Az előző példa módszerét alkalmazva az

$$\\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \\ldots & + & a_{1n}x_n & = & b_1 \\\\
a_{21}x_1 & + & a_{22}x_2 & + & \\ldots & + & a_{2n}x_n & = & b_2 \\\\
\\vdots & & \\vdots & & & & \\vdots & & \\vdots \\\\
a_{n1}x_1 & + & a_{n2}x_2 & + & \\ldots & + & a_{nn}x_n & = & b_n
\\end{array} \\tag{3.9}$$

általános $n$-dimenziós lineáris egyenletrendszerre kapjuk a *Gauss-elimináció* módszerét: Az együtthatókat és az egyenlet bal oldalát az ún. *kibővített mátrixban* tároljuk:

$$\\tilde{\\mathbf{A}}^{(0)} = (\\mathbf{A}, \\mathbf{b}) = \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} & a_{1,n+1} \\\\ a_{21} & a_{22} & \\ldots & a_{2n} & a_{2,n+1} \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_{n1} & a_{n2} & \\ldots & a_{nn} & a_{n,n+1} \\end{pmatrix},$$

ahol $a_{i,n+1} := b_i$, $(i = 1, \\ldots, n)$. Az $\\tilde{\\mathbf{A}}^{(0)}$ mátrixból képezzük az egymással ekvivalens egyenleteket leíró $\\tilde{\\mathbf{A}}^{(1)}, \\tilde{\\mathbf{A}}^{(2)}, \\ldots, \\tilde{\\mathbf{A}}^{(n-1)}$ mátrixokat a következő módon:

$$\\tilde{\\mathbf{A}}^{(1)} = \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} & a_{1,n+1} \\\\ 0 & a_{22}^{(1)} & \\ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & a_{n2}^{(1)} & \\ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \\end{pmatrix},$$

ahol $a_{ij}^{(1)} = a_{ij} - l_{i1}a_{1j}$, $l_{i1} = \\dfrac{a_{i1}}{a_{11}}$, $i = 2, \\ldots, n$, $j = 2, \\ldots, n+1$, (feltéve, hogy $a_{11} \\neq 0$). Ha már $\\tilde{\\mathbf{A}}^{(1)}, \\ldots, \\tilde{\\mathbf{A}}^{(k-1)}$ definiált, ahol $k \\leq n-1$, akkor legyen

$$\\tilde{\\mathbf{A}}^{(k)} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1,k} & a_{1,k+1} & \\cdots & a_{1,n} & a_{1,n+1} \\\\
0 & a_{22}^{(1)} & \\cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \\cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\\\
& & \\ddots & & & & & \\\\
0 & 0 & \\cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \\cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\\\
0 & 0 & \\cdots & 0 & a_{k+1,k+1}^{(k)} & \\cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\\\
\\vdots & \\vdots & & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
0 & 0 & \\cdots & 0 & a_{n,k+1}^{(k)} & \\cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\\end{pmatrix},$$

ahol $a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}$, $l_{ik} = \\dfrac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$, $i = k+1, \\ldots, n$, $j = k+1, \\ldots, n+1$. Ezeket az ún. *eliminációs lépéseket* $k = 1, \\ldots, n-1$-re hajtjuk végre. Ezután az $\\tilde{\\mathbf{A}}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszert a visszahelyettesítés módszerével megoldjuk. A Gauss-elimináció végrehajtása után az együtthatómátrix főátlójában szereplő $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ számokat *főelemeknek* nevezzük. Nyilvánvalóan, a Gauss-elimináció akkor és csak akkor hajtható végre, ha az összes főelem nem nulla.

Ha a Gauss-elimináció lépéseit csak az együtthatómátrixon végezzük, akkor az iterációs lépésekben kapott mátrixokat $\\mathbf{A}^{(0)} := \\mathbf{A}, \\mathbf{A}^{(1)}, \\ldots, \\mathbf{A}^{(n-1)}$-gyel jelöljük.

---

**3.23. algoritmus. Gauss-elimináció**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \\ldots, x_n$

*(elimináció:)*
**for** $k = 1, \\ldots, n-1$ **do**
$\\qquad$**for** $i = k+1, \\ldots, n$ **do**
$\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
*(visszahelyettesítés:)*
$x_n \\leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

A fenti algoritmust úgy fogalmaztuk meg, hogy minden egyes eliminációs lépésben az új együtthatómátrix elemeivel felülírjuk az előző lépés együtthatómátrixát. Megjegyezzük, hogy a 3.23. algoritmus a „kinullázott" elemeket se nem számítja, se nem tárolja. Azaz az algoritmus végén a főátló alatti elemek tartalma nem használható, ott előző lépésekből megmaradt tartalom van csak. Ha szükséges, ezeket az elemeket nullázzuk ki direkt módon.

A Gauss-elimináció műveletigénye:

| | osztás/szorzás | összeadás/kivonás |
|---|---|---|
| 1. lépés: | $(n-1)(n+1)$ | $(n-1)n$ |
| 2. lépés: | $(n-2)n$ | $(n-2)(n-1)$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ |
| $n-1$-edik lépés: | $1 \\cdot 3$ | $1 \\cdot 2$ |
| összesen: | $\\sum_{i=1}^{n-1} i(i+2)$ | $\\sum_{i=1}^{n-1} i(i+1)$ |

Az $1^2 + 2^2 + \\cdots + n^2 = \\frac{1}{6}n(n+1)(2n+1)$ azonosságot alkalmazva könnyen kiszámítható, hogy összesen $n^3/3 + n^2/2 - 5n/6$ szorzás ill. osztás, valamint $(n^3 - n)/3$ összeadás ill. kivonás szükséges az együtthatómátrix trianguláris alakra hozásához. A visszahelyettesítéssel együtt pedig összesen $n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \\mathcal{O}(n^2)$ osztás ill. szorzás, valamint $(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \\mathcal{O}(n^2)$ összeadás ill. kivonás szükséges a Gauss-elimináció végrehajtásához. Röviden azt mondjuk, hogy $n^3/3$ nagyságrendű műveletigénye van a módszernek.

**3.24. példa.** Oldjuk meg az

$$\\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\\\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\\\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\\\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\\end{array}$$

egyenletrendszert Gauss-eliminációval! Egy Gauss-eliminációs lépést elvégezve kapjuk

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix}.$$

A második sor második oszlopában levő elem 0, ezért nem tudjuk tovább folytatatni a 3.23. algoritmust. Könnyen látható, hogy az egyenletrendszernek viszont létezik egyértelmű megoldása: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$. Ha felcseréljük az utolsó lépésben kapott kibővített mátrix második és harmadik sorát, akkor ezzel természetesen a hozzá tartozó egyenletrendszer nem változik, viszont folytathatók az eliminációs lépések:

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 5 & 0 & 2 & 13 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 0 & 10 & -63 & 83 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 0 & -1/2 & 1 & -13/2 & 7 \\\\ 0 & 0 & 1 & 8 & -6 \\\\ 0 & 0 & 0 & -143 & 143 \\end{pmatrix},$$

amelyből következik az egyenletrendszer megoldása. $\\qquad\\square$

**3.25. példa.** Oldjuk meg a

$$\\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\\\
5.060x_1 & - & 1.05x_2 & = & 250.9
\\end{array}$$

egyenletrendszert a Gauss-eliminációval 4-jegyű aritmetikát használva a számolásokhoz. A 3.23. algoritmust követve, először kiszámoljuk az $l_{21} = 5.060/0.0002 = 25300$ szorzótényezőt (4 értékes jegyre kerekítve), ezzel beszorozzuk az első egyenletet, és a kapott sort kivonjuk a másodikból:

$$\\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\\\ 5.06 & -1.05 & 250.9 \\end{pmatrix} \\sim \\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\\\ 0 & 771700 & 1543000 \\end{pmatrix}.$$

(Megjegyezzük, hogy a 3.23. algoritmussal a 2. sorban levő 0-t nem numerikusan számoljuk.) Ezt megoldva kapjuk az $\\tilde{x}_1 = -100.0$ és $\\tilde{x}_2 = 1.999$ megoldást. Könnyen ellenőrizhetjük, hogy az egyenletrendszer pontos megoldása $x_1 = 50$ és $x_2 = 2$. A számolt megoldásokban tehát 300% ill. 0.05%-os relatív hiba van! Különösen hatalmas a hiba az első változó értékében.

Végezzük most el ugyanezt a számolást az egyenletrendszeren úgy, hogy először felcseréljük a két egyenletet. Kapjuk:

$$\\begin{pmatrix} 5.06 & -1.05 & 250.9 \\\\ 0.0002 & -30.5 & -60.99 \\end{pmatrix} \\sim \\begin{pmatrix} 5.06 & -1.05 & 250.9 \\\\ 0 & -30.5 & -61.0 \\end{pmatrix}.$$

amiből következik, hogy $x_1 = 50.00$ és $x_2 = 2.000$, amelyek pontosan megegyeznek a tényleges megoldás értékekkel!

Mi a különbség a két számolásban? Az első esetben $l_{21}$ kiszámolásakor egy kis számmal (0.0002) kellett osztani, ami a kerekítési hiba jelentős növekedéséhez vezetett. A második esetben viszont 5.06-gyel osztottunk $l_{21}$ kiszámításakor, és a végső eredményben nem kaptunk kerekítési hibát. $\\qquad\\square$

### Részleges főelemkiválasztás

Az előző két példa mutatja, hogy néha kell, és sok esetben célszerű módosítani a 3.23. algoritmust. Erre az egyik legegyszerűbb stratégia a következő, *részleges főelemkiválasztásnak* (vagy egyszerűen csak *főelemkiválasztásnak*) nevezett módszer: a Gauss-elimináció $k$-adik lépése előtt keressük meg a $k$-adik oszlopban a főátlóban és az alatta álló elemek közül a legnagyobb abszolút értékűt, azaz legyen

$$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}.$$

(A maximális elem az $l$-edik sorban van.) Cseréljük fel a $k$-adik és $l$-edik sort, és folytassuk az eliminációt. Ezzel a 3.24. és 3.25. példákban vizsgált problémákat ki tudjuk küszöbölni: ha $a_{kk}^{(k-1)} = 0$, akkor a sorcsere után nemnulla elem kerül erre a pozícióra (feltéve ha van nemnulla elem $a_{kk}^{(k-1)}$ alatt), valamint folytatva a Gauss-eliminációt a sorcserékkel elérhető lehető legnagyobb abszolút értékű számmal fogunk osztani, ami a kerekítési hibákat csökkenti.

**3.26. tétel.** *A következő állítások ekvivalensek:*

1. *az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenlet egyértelműen megoldható Gauss-eliminációval részleges főelemkiválasztást használva,*

2. $\\det(\\mathbf{A}) \\neq 0$,

3. *az $\\mathbf{A}$ mátrix invertálható,*

4. *az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletnek létezik megoldása minden $\\mathbf{b}$ vektorra.*

**Bizonyítás.** Lineáris algebrából ismert, hogy a 2., 3. és 4. állítások ekvivalensek (lásd a 3.2. tételt). Így most azt látjuk be, hogy 1. és 2. ekvivalens.

Tegyük fel először, hogy 1. teljesül. Legyen $\\mathbf{A}^{(0)} = \\mathbf{A}$, és jelöljük $\\mathbf{A}^{(k)}$-val a Gauss-elimináció $k$-adik lépésekor kapott együtthatómátrixot. A determinánsok tulajdonságából következik, hogy $\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$, ha nem történt sorcsere a $k$-adik lépésben, ill. $\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$, ha volt sorcsere. Mivel a feltétel szerint a Gauss-elimináció elvégezhető, ezért az $\\mathbf{A}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszer megoldható, azaz $\\det(\\mathbf{A}^{(n-1)}) \\neq 0$. Ebből viszont következik, hogy $\\det(\\mathbf{A}) = \\pm\\det(\\mathbf{A}^{(n-1)}) \\neq 0$.

Belátjuk, hogy ha a részleges főelemkiválasztással végzett Gauss-elimináció $k$-adik lépése nem hajtható végre, akkor $\\det(\\mathbf{A}) = 0$. A $k$-adik lépés akkor és csak akkor nem hajtható végre, ha $a_{ik}^{(k-1)} = 0$ minden $i = k, \\ldots, n$-re, azaz:

$$\\mathbf{A}^{(k-1)} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \\cdots & a_{1n} \\\\
0 & a_{22}^{(1)} & \\cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \\cdots & a_{2n}^{(1)} \\\\
& & \\ddots & & & & & \\\\
0 & 0 & \\cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \\cdots & a_{k-1,n}^{(k-2)} \\\\
0 & 0 & \\cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \\cdots & a_{kn}^{(k-1)} \\\\
\\vdots & \\vdots & & \\vdots & \\vdots & \\vdots & & \\vdots \\\\
0 & 0 & \\cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \\cdots & a_{nn}^{(k-1)}
\\end{pmatrix}.$$

Ezért

$$\\det(\\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\\cdots a_{k-1,k-1}^{(k-2)}\\det\\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \\cdots & a_{kn}^{(k-1)} \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & a_{n,k+1}^{(k-1)} & \\cdots & a_{nn}^{(k-1)} \\end{pmatrix} = 0,$$

és így $\\det(\\mathbf{A}) = \\pm\\det(\\mathbf{A}^{(k-1)}) = 0$. $\\qquad\\square$

**3.27. példa.** Tekintsük újra a 3.22. példa egyenletrendszerét, és oldjuk meg a feladatot Gauss-eliminációval részleges főelemkiválasztást használva! A kibővített mátrixok sorozata a következő:

$$\\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ 2 & -1 & 0 & -3 & 8 \\\\ 2 & 4 & 0 & -1 & 21 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\\\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\\\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 5/7 & -9/2 & 83/14 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\end{pmatrix} \\sim \\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\\\ 0 & 0 & 5/7 & -9/2 & 83/14 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\\\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\\\ 0 & 0 & 12/7 & 7/2 & -1/14 \\\\ 0 & 0 & 0 & -143/24 & 143/24 \\end{pmatrix}.$$

Látható, hogy az első és a harmadik eliminációs lépés előtt volt sorcsere. A trianguláris egyenletet megoldva kapjuk: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$. $\\qquad\\square$

Tegyük fel, hogy egy $\\mathbf{A}$ együtthatómátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció közben szükséges sorcseréket összegyűjtjük. Végezzük el ezeket egyszerre előre, az első eliminációs lépés előtt. Ezután a kapott mátrixon sorcsere nélkül végrehajtható lesz a Gauss-elimináció (és az eredménye ugyanaz, mint az $\\mathbf{A}$ mátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció). A 3.7. tétel szerint a sorcserék hatása egy megfelelő permutációs $\\mathbf{P}$ mátrixszal (balról) történő szorzással ekvivalens. A 3.26. tételből tehát rögtön következik az alábbi eredmény:

**3.28. tétel.** *Ha $\\det(\\mathbf{A}) \\neq 0$, akkor létezik olyan $\\mathbf{P}$ permutációs mátrix, hogy a $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ egyenletrendszer egyértelműen megoldható Gauss-eliminációval (sorcserék nélkül) minden $\\mathbf{b}$ vektorra.*

### Teljes főelemkiválasztás

A kerekítési hibák további kiküszöbölésére használhatjuk a részleges főelemkiválasztás következő módosítását, az ún. *teljes főelemkiválasztás* módszerét: a Gauss-elimináció $k$-adik lépése előtt keressük meg az első olyan $l$ sor- és $m$ oszlopindexet, amelyre

$$|a_{lm}| = \\max\\{|a_{ij}| : i = k, \\ldots, n,\\ j = k, \\ldots, n\\}.$$

(A maximális elem az $l$-edik sorban és $m$-edik oszlopban van.) Cseréljük fel a $k$-adik és $l$-edik sort és a $k$-adik és $m$-edik oszlopot. Jegyezzük meg, hogy az oszlopcserével melyik oszlop melyik ismeretlen együtthatóit tartalmazza, és folytassuk az eliminációt.

Ennek a módszernek a hátránya a részleges főelemkiválasztáshoz képest az, hogy sokkal több összehasonlításra van szükség, ami lassítja a módszert.

**3.29. példa.** Tekintsük újra a 3.22. és 3.27. példa egyenletrendszerét, és oldjuk meg a feladatot most Gauss-elimimációval teljes főelemkiválasztást használva:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_1 & x_2 & x_3 & x_4 & \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 1 & -2 & -2 & -2 & -11 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_1 & x_2 & x_3 & x_4 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ -2 & -2 & 2 & 1 & -11 \\\\ -4 & 2 & 3 & -1 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ 0 & -5/2 & 1 & 2 & -15 \\\\ 0 & 1 & 5 & 1 & 19 \\\\ 0 & 1/2 & 5 & -1 & 24 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\\\ 0 & 1 & 5 & 1 & 19 \\\\ 0 & -5/2 & 1 & 2 & -15 \\\\ 0 & 1/2 & 5 & -1 & 24 \\\\ x_4 & x_2 & x_3 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & -1 & -5/2 & 2 & -15 \\\\ 0 & 5 & 1/2 & -1 & 24 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -23/10 & 11/5 & -56/5 \\\\ 0 & 0 & -1/2 & -2 & 5 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix} \\sim \\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -23/10 & 11/5 & -56/5 \\\\ 0 & 0 & 0 & -57/23 & 171/23 \\\\ x_4 & x_3 & x_2 & x_1 & \\end{pmatrix}.$$

Azért, hogy az oszlopcseréket követni tudjuk, kibővítettük a mátrixot egy plusz sorral, ahol azt jelöljük, hogy az adott oszlop melyik változó együtthatóit tartalmazza. Az első eliminációs lépés előtt felcseréltük az első és második sort és az első és negyedik oszlopot, mivel 4 volt a maximális elem az együtthatók abszolút értékei közül. (Lehetett volna az első és második sor és az első és negyedik oszlop felcserélésével $-4$-et behozni a főelem pozíciójába; vagy pedig az első és negyedik sor és az első és harmadik oszlop cseréjével az 4-et behozni az első főelem pozíciójába.) A második eliminációs lépés előtt felcseréltük a második és harmadik sort és a második és harmadik oszlopot. A harmadik eliminációs lépés előtt pedig nem volt sor vagy oszlop csere. A megoldást most is a trianguláris egyenletrendszert megoldva kapjuk, de például a 4. egyenletből most az $x_1$ értékét kapjuk meg. A végeredmény: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

Természetesen a részleges ill. a teljes főelemkiválasztás módszerének előnye csak akkor jelentkezik, ha numerikusan számoljuk végig az egyenletrendszert. $\\qquad\\square$

### Sorkiegyenlítés

Numerikus tapasztalat az, hogy ha az együtthatómátrix elemei között jelentős nagyságrendi eltérés van, akkor a kerekítési hiba megnőhet a számolás során (lásd a 3.25. példát). Ezért szokás az egyes egyenleteket beszorozni valamely nemnulla számokkal úgy, hogy a kapott egyenletrendszer együtthatói közel azonos nagyságrendűek legyenek. Ezt a beszorzást nevezzük *sorkiegyenlítésnek*. Hasonlóan, ha az egyenletrendszer megoldásai eltérő nagyságrendűek, akkor azokat is célszerű kiegyenlíteni, azaz az együtthatómátrix oszlopait beszorozni valamely nemnulla számokkal. Erre jelenleg nem ismert jó stratégia (az $\\mathbf{A}$ mátrix és a $\\mathbf{b}$ vektor ismeretében), ezért itt csak a sorkiegyenlítéssel foglalkozunk.

Keressünk tehát olyan $d_1, \\ldots, d_n \\neq 0$ számokat, hogy a $\\mathbf{B} := \\mathbf{D}\\mathbf{A}$ mátrix elemei közel azonos nagyságrendűek legyenek, ahol $\\mathbf{D} = \\mathrm{diag}(d_1, \\ldots, d_n)$. Ekkor az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletrendszer helyett a $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ egyenletrendszert oldjuk meg numerikusan. Egy egyszerű stratégia szerint úgy választjuk $\\mathbf{D}$-t, hogy $\\max\\{|b_{ij}| : 1 \\leq j \\leq n\\} \\approx 1$ legyen minden $i = 1, \\ldots, n$-re. Ezt elérhetjük a $d_i := 1/s_i$, $s_i := \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$ választással. Ezzel az a probléma, hogy az osztás további kerekítési hibát vezethet be a számolásba. Ezt kiküszöbölendő csinálhatjuk a következőt: legyen $\\beta$ a számábrázolás alapja a számítógépen, és legyen $r_i$ a legkisebb egész, hogy $\\beta^{r_i} \\geq s_i$, és definiáljuk $b_{ij} := a_{ij}/\\beta^{r_i}$ $(i, j = 1, \\ldots, n)$. Ekkor az osztásnál nem lesz kerekítési hiba, és $1/\\beta < \\max_{1 \\leq j \\leq n} |b_{ij}| \\leq 1$ teljesül minden $i = 1, \\ldots, n$-re.

Könnyen igazolható a következő állítás:

**3.30. tétel.** *Tegyük fel, hogy egy $\\mathbf{A}$ együtthatómátrixon sorkiegyenlítést végeztünk olyan $\\mathbf{D} = \\mathrm{diag}(d_1, \\ldots, d_n)$ szorzótényezőkkel (pl. $\\beta$ hatványokkal), amelyek nem eredményeztek kerekítési hibát. Ekkor ha a $\\mathbf{D}\\mathbf{A}$ mátrixon végzett (részleges vagy teljes) főelemkiválasztás ugyanazokat a sorcseréket (és oszlopcseréket) eredményezi, mint az $\\mathbf{A}$ mátrixon, akkor az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ és $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ egyenletek numerikus megoldásai pontosan ugyanazok lesznek.*

Ebből következik, hogy a kiegyenlítésnek csak a főelemkiválasztásra van hatása. A Gauss-eliminációnak a következő módosításában a súlyozás helyett csak ún. *implicit sorkiegyenlítést* végzünk, a főelemek kiválasztásához használjuk csak a súlyokat. Ez a módszer a gyakorlatban az egyik leggyakrabban használt algoritmus lineáris egyenletrendszerek megoldására.

---

**3.31. algoritmus. Gauss-elimináció részleges főelemkiválasztással és implicit sorkiegyenlítéssel**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \\ldots, x_n$

*(súlyok kiszámítása:)*
**for** $i = 1, \\ldots, n$ **do**
$\\qquad s_i \\leftarrow \\max\\limits_{1 \\leq j \\leq n} |a_{ij}|$
**end do**
*(elimináció:)*
**for** $k = 1, \\ldots, n-1$ **do**
$\\qquad$legyen $l$ a legkisebb olyan index, amelyre $\\dfrac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\dfrac{|a_{ik}|}{s_i}$
$\\qquad$cseréljük fel az $\\mathbf{A}$ mátrix $k$-adik és $l$-edik sorát
$\\qquad$**for** $i = k+1, \\ldots, n$ **do**
$\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
*(visszahelyettesítés:)*
$x_n \\leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow \\left(a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j\\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

Megjegyezzük, hogy az eddigi módszereknél gyakran kellett egy $\\mathbf{A} = (a_{ij})$ mátrix két sorát felcserélni. Ez sok művelettel jár, ezért az algoritmusok programozásakor csinálhatjuk a következőt: Az $\\mathbf{A}$ mátrixot tároljuk egy $a[i, j]$ tömbben. Definiálunk egy $m[i]$ vektort, amelynek kezdeti értéke $m[i] = i$, $(i = 1, \\ldots, n)$. A $k$-adik és $l$-edik sor cseréjekor csak az $m[\\cdot]$ vektor $k$-adik és $l$-edik elemeit cseréljük fel. Amikor az algoritmusban az $\\mathbf{A}$ mátrix egy $a_{ij}$ elemére kell hivatkozni, akkor használjuk az $a[m[i], j]$ elemet.

**3.32. tétel.** *Ha az $\\mathbf{A}$ mátrix diagonálisan domináns, akkor a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletrendszeren, és a módszer stabil a kerekítési hibákra nézve.*

**Bizonyítás.** Megjegyezzük, hogy ha az $\\mathbf{A}$ mátrix diagonálisan domináns, akkor a 3.8. tétel szerint az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletrendszernek létezik egyértelmű megoldása.

Megmutatjuk, hogy a Gauss-eliminációval kapott $\\mathbf{A}^{(1)}, \\mathbf{A}^{(2)}, \\ldots, \\mathbf{A}^{(n-1)}$ mátrixok mindegyike képezhető és diagonálisan domináns. Mivel $\\mathbf{A}^{(0)} = \\mathbf{A}$ diagonálisan domináns, ezért $|a_{11}| > \\sum_{j=2}^{n} |a_{1j}|$, így $a_{11} \\neq 0$. Ebből következik, hogy az $\\mathbf{A}^{(1)}$ mátrix képezhető. Megmutatjuk, hogy $\\mathbf{A}^{(1)}$ diagonálisan domináns. Mivel $\\mathbf{A}^{(1)}$ első sora megegyezik $\\mathbf{A}$ első sorával, ezért az első sor diagonálisan domináns. Legyen $1 < i \\leq n$. Használva, hogy $a_{ij}^{(1)} = a_{ij} - \\frac{a_{i1}}{a_{11}}a_{1j}$, $(j = 2, \\ldots, n)$, valamint $a_{i1}^{(1)} = 0$, kapjuk

$$\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}^{(1)}| = \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} \\left|a_{ij} - \\frac{a_{i1}}{a_{11}}a_{1j}\\right| \\leq \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} \\left(|a_{ij}| + \\frac{|a_{i1}|}{|a_{11}|}|a_{1j}|\\right) = \\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}| + \\frac{|a_{i1}|}{|a_{11}|}\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{1j}|.$$

Mivel az $\\mathbf{A}$ mátrix $i$-edik és az első sora is diagonálisan domináns, ezért

$$\\begin{aligned}
\\sum_{\\substack{j=2 \\\\ j \\neq i}}^{n} |a_{ij}^{(1)}| &< |a_{ii}| - |a_{i1}| + \\frac{|a_{i1}|}{|a_{11}|}(|a_{11}| - |a_{1i}|) \\\\
&= |a_{ii}| - \\frac{|a_{i1}|}{|a_{11}|}|a_{1i}| \\\\
&\\leq \\left|a_{ii} - \\frac{a_{i1}}{a_{11}}a_{1i}\\right| \\\\
&= |a_{ii}^{(1)}|.
\\end{aligned}$$

Ezzel beláttuk, hogy $\\mathbf{A}^{(1)}$ minden sora diagonálisan domináns, azaz a mátrix diagonálisan domináns.

Ehhez hasonlóan belátható, hogy $\\mathbf{A}^{(2)}, \\ldots, \\mathbf{A}^{(n-1)}$ mindegyike definiált és diagonálisan domináns.

A módszer stabilitását itt nem bizonyítjuk be. $\\qquad\\square$

Belátható a következő tétel:

**3.33. tétel.** *Legyen $\\mathbf{A}$ szimmetrikus $n \\times n$-es mátrix. Ekkor $\\mathbf{A}$ akkor és csak akkor pozitív definit, ha a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenletrendszeren, és a főelemek pozitívak. Továbbá ebben az esetben a módszer stabil a kerekítési hibákra nézve.*

### Feladatok

1. Oldja meg a következő egyenletrendszereket Gauss-eliminációval:

   (i) főelemkiválasztás nélkül,

   (ii) részleges főelemkiválasztással,

   (iii) teljes főelemkiválasztással,

   (iv) részleges főelemkiválasztással és implicit sorkiegyenlítéssel:

   (a)
   $$\\begin{array}{rcrcrcr}
   2x_1 & + & 2x_2 & - & 2x_3 & = & -4 \\\\
   -x_1 & + & 3x_2 & & & = & -11 \\\\
   4x_1 & + & 2x_2 & - & 3x_3 & = & -1
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcrcr}
   -x_1 & - & 3x_2 & & & + & 2x_4 & = & 10 \\\\
   -2x_1 & + & 3x_2 & & & + & x_4 & = & 8 \\\\
   4x_1 & + & x_2 & - & x_3 & - & 3x_4 & = & -21 \\\\
   2x_1 & + & x_2 & - & x_3 & + & 3x_4 & = & 7
   \\end{array}$$

2. Használjon 4-jegyű aritmetikát a számolásokhoz, és az előző feladat kérdését alkalmazza a következő egyenletekre:

   (a)
   $$\\begin{array}{rcrcrcr}
   1.03x_1 & - & 1.1x_2 & + & 8x_3 & = & -9.06 \\\\
   -4.1x_1 & + & 10.1x_2 & - & 6x_3 & = & 106.2 \\\\
   2.11x_1 & - & 4.2x_2 & + & 12x_3 & = & -40.22
   \\end{array}$$
   (pontos megoldás: $(-2, 10, 0.5)$),

   (b)
   $$\\begin{array}{rcrcrcr}
   x_1 & + & \\frac{1}{2}x_2 & + & \\frac{1}{3}x_3 & = & 20 \\\\
   \\frac{1}{2}x_1 & + & \\frac{1}{3}x_2 & + & \\frac{1}{4}x_3 & = & 14 \\\\
   \\frac{1}{3}x_1 & + & \\frac{1}{4}x_2 & + & \\frac{1}{5}x_3 & = & 11
   \\end{array}$$
   (pontos megoldás: $(6, -12, 60)$)

3. Lássa be a 3.30. tételt!

4. Lássa be a 3.33. tételt (a stabilitásra vonatkozó állítás nélkül)!

## 3.4. Gauss–Jordan-elimináció

A Gauss-elimináció egyik módosítása a *Gauss–Jordan-elimináció* (vagy egyszerűen *Jordan-elimináció*), ahol a Gauss-elimináció lépéseivel egységmátrixra alakítjuk át az együtthatómátrixot, azaz az $(\\mathbf{A}, \\mathbf{b})$ kibővített mátrixot az $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$ alakra hozzuk. Ekkor az egyenletrendszer megoldása $\\mathbf{x} = \\mathbf{b}^{(n-1)}$ lesz.

---

**3.34. algoritmus. Gauss–Jordan-elimináció**

---

INPUT: $a_{ij}$, $(i = 1, \\ldots, n,\\ \\ j = 1, \\ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \\ldots, x_n$

*(együtthatómátrix diagonális alakra hozása:)*
**for** $k = 1, \\ldots, n$ **do**
$\\qquad$**for** $i = 1, \\ldots, n$ **do**
$\\qquad\\qquad$**if** $i \\neq k$ **do**
$\\qquad\\qquad\\qquad l_{ik} \\leftarrow a_{ik}/a_{kk}$
$\\qquad\\qquad\\qquad$**for** $j = k+1, \\ldots, n+1$ **do**
$\\qquad\\qquad\\qquad\\qquad a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$
$\\qquad\\qquad\\qquad$**end do**
$\\qquad\\qquad$**end do**
$\\qquad$**end do**
**end do**
**for** $i = 1, \\ldots, n$ **do**
$\\qquad x_i \\leftarrow a_{i,n+1}/a_{ii}$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

Ellenőrizhető, hogy a Gauss–Jordan-elimináció műveletigénye: $n^3/2 + \\mathcal{O}(n^2)$ osztás/szorzás.

**3.35. példa.** Alkalmazzuk a Gauss–Jordan-eliminációt a 3.22. feladatban vizsgált egyenletrendszer megoldására:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & -3 & -4 & 3 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & -3 & 0 & -6 & 6 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 2 & 10/3 & -5/3 \\\\ 0 & 3 & 6 & 8 & 14 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 14/15 & -73/15 \\\\ 0 & 3 & 0 & 4/5 & 22/5 \\\\ 0 & 0 & -5 & -6 & -8 \\\\ 0 & 0 & 0 & -26/5 & 52/5 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 3 & 0 & 0 & 6 \\\\ 0 & 0 & -5 & 0 & -20 \\\\ 0 & 0 & 0 & -26/5 & 52/5 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{pmatrix}.$$

A megoldás leolvasható a mátrix utolsó oszlopáról: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. $\\qquad\\square$

A Gauss-eliminációnál megfogalmazott részleges ill. teljes főelemkiválasztás alkalmazható a Gauss–Jordan-elimináció esetében is.

**3.36. példa.** Alkalmazzuk a Gauss–Jordan-eliminációt részleges főelemkiválasztással a 3.22. feladatban vizsgált egyenletrendszer megoldására:

$$\\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 1 & -2 & -2 & -2 & -11 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 3/2 & 4 & -2 & 23 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 0 & 1 & -6 & 16 \\\\ 0 & 0 & 6 & 2 & 20 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\\\ 0 & -3/2 & -3 & -4 & -7 \\\\ 0 & 0 & 6 & 2 & 20 \\\\ 0 & 0 & 1 & -6 & 16 \\end{pmatrix} \\sim \\begin{pmatrix} 2 & 0 & 0 & 16/3 & -50/3 \\\\ 0 & -3/2 & 0 & -3 & 3 \\\\ 0 & 0 & 6 & 2 & 20 \\\\ 0 & 0 & 0 & -19/3 & 38/3 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\\\ 0 & -3/2 & 0 & 0 & -3 \\\\ 0 & 0 & 6 & 0 & 24 \\\\ 0 & 0 & 0 & -19/3 & 38/3 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{pmatrix}.$$

A megoldás tehát $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. $\\qquad\\square$

### Feladatok

1. Oldja meg a 3.3. szakasz 1. és 2. feladatában szereplő egyenletrendszereket Gauss–Jordan-eliminációval!

2. Lássa be, hogy a Gauss–Jordan-elimináció műveletigénye $n^3/2 + n^2 - n/2$ osztás ill. szorzás!

## 3.5. Tridiagonális egyenletrendszerek

Egy négyzetes $(a_{ij})$ mátrixot *tridiagonálisnak* nevezünk, ha $a_{ij} = 0$ minden $|i - j| > 1$-re, azaz nemnulla elemek csak a mátrix főátlójában, ill. közvetlen alatta vagy felette lehetnek. Tridiagonális lineáris egyenletrendszerek (azaz ahol az együtthatómátrix tridiagonális) gyakran előfordulnak alkalmazásokban, így ezek fontos speciális esetei a lineáris egyenletrendszereknek. A következő jelölést használjuk:

$$\\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \\cdots & 0 \\\\
a_1 & d_2 & c_2 & 0 & \\cdots & 0 \\\\
0 & a_2 & d_3 & c_3 & \\cdots & 0 \\\\
& & \\ddots & \\ddots & \\ddots & \\\\
0 & 0 & \\cdots & a_{n-2} & d_{n-1} & c_{n-1} \\\\
0 & 0 & \\cdots & 0 & a_{n-1} & d_n
\\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ \\vdots \\\\ x_{n-1} \\\\ x_n \\end{pmatrix} = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ b_3 \\\\ \\vdots \\\\ b_{n-1} \\\\ b_n \\end{pmatrix}. \\tag{3.10}$$

Egy tridiagonális mátrix elemeit célszerű a jelölés szerinti három vektorban tárolni: $(a_i)$, $(d_i)$ és $(c_i)$, így összesen $3n - 2$ tárolóhely kell az együtthatóknak.

Könnyen látható, hogy a Gauss-eliminációt alkalmazva a (3.10) egyenletrendszerre az $a_i$ számok kinullázódnak az elimináció végére, a $c_i$ számok viszont nem fognak megváltozni. A $d_i$ és $b_i$ értékek megváltoznak az elimináció során. A következő algoritmust úgy fogalmaztuk meg, hogy az elimináció során felülírja a $(d_i)$ és $(b_i)$ vektorokat.

---

**3.37. algoritmus. Gauss-elimináció tridiagonális egyenletrendszerre**

---

INPUT: $a_i, c_i$ $(i = 1, \\ldots, n-1)$, $d_i, b_i$ $(i = 1, \\ldots, n)$
OUTPUT: $x_1, \\ldots, x_n$

*(elimináció:)*
**for** $i = 2, \\ldots, n$ **do**
$\\qquad temp \\leftarrow a_{i-1}/d_{i-1}$
$\\qquad d_i \\leftarrow d_i - temp \\cdot c_{i-1}$
$\\qquad b_i \\leftarrow b_i - temp \\cdot b_{i-1}$
**end do**
*(visszahelyettesítés:)*
$x_n \\leftarrow b_n/d_n$
**for** $i = n-1, \\ldots, 1$ **do**
$\\qquad x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \\ldots, x_n)$

---

A módszer műveletigénye meglepően kicsi: $5n - 4$ szorzás/osztás. Ha ezt összehasonlítjuk a 3.23. algoritmus $n^3/3$ nagyságrendjével, akkor látjuk, hogy tridiagonális rendszerek megoldására feltétlenül ezt a speciális algoritmust kell használni.

A 3.32. tételből következik, hogy ha az $\\mathbf{A}$ tridiagonális mátrix diagonálisan domináns, akkor a 3.37. algoritmus végrehajtható, azaz nincs szükség sorcserére a Gauss-elimináció közben.

### Feladatok

1. Oldja meg a következő tridiagonális egyenletrendszert:

   $$\\begin{array}{rcrcrcrcrcrcr}
   x_1 & - & 0.5x_2 & & & & & & & & & = & 1.5 \\\\
   0.5x_1 & + & 4x_2 & - & 0.5x_3 & & & & & & & = & -4.0 \\\\
   & & 0.5x_2 & + & 2x_3 & - & 0.5x_4 & & & & & = & 2.0 \\\\
   & & & & 0.5x_3 & + & 4x_4 & - & 0.5x_5 & & & = & -4.0 \\\\
   & & & & & & 0.5x_4 & + & 2x_5 & - & 0.5x_6 & = & 2.0 \\\\
   & & & & & & & & 0.5x_5 & + & x_6 & = & -0.5
   \\end{array}$$

2. Lássa be, hogy a 3.37. algoritmus műveletigénye $5n - 4$ osztás/szorzás!

3. Fogalmazzon meg a 3.37. algoritmushoz hasonló algoritmust olyan *szalagmátrixokra*, ahol nemnulla elemek csak a főátlóban és az alatti és feletti 2-2 átlóban lehetnek.

## 3.6. Szimultán egyenletrendszerek

Gyakran előfordul, hogy ún. *szimultán egyenletrendszereket*, azaz olyan $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ alakú egyenletrendszereket kell megoldanunk $i = 1, \\ldots, m$-re, ahol az együtthatómátrix azonos, de az egyenletek jobb oldala különböző. Ezt röviden az $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenlettel írhatjuk le, ahol az $n \\times m$-es $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\ldots, \\mathbf{b}^{(m)})$ mátrix $i$-edik oszlopa $\\mathbf{b}^{(i)}$, és az $n \\times m$-es $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\ldots, \\mathbf{x}^{(m)})$ mátrix $i$-edik oszlopa $\\mathbf{x}^{(i)}$, az $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ egyenlet megoldása. Mivel a Gauss- ill. a Gauss–Jordan-elimináció végrehajthatósága ill. főelemkiválasztásnál a cserék eldöntése csak az együtthatómátrixon múlik, alkalmazhatjuk ezeket a módszereket az $n \\times (n + m)$-es $(\\mathbf{A}, \\mathbf{B})$ kibővített mátrixon. Pl. ha Gauss–Jordan-eliminációt végzünk, akkor az $(\\mathbf{A}, \\mathbf{B})$ kibővített mátrixot az $(\\mathbf{I}, \\mathbf{X})$ alakra hozzuk, és ekkor $\\mathbf{X}$ lesz a szimultán egyenletrendszer megoldása.

### Feladatok

1. Igazolja, hogy az $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss-elimináció műveletigénye $n^3/3 + mn^2 - n/3$ osztás/szorzás!

2. Igazolja, hogy az $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss–Jordan-elimináció műveletigénye $n^3/2 + mn^2 - n/2$ osztás/szorzás!

3. Fogalmazza át a 3.37. algoritmust szimultán tridiagonális együtthatójú egyenletrendszerek megoldására!

4. Lássa be, hogy az $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$, $i = 1, 2, \\ldots, m$ egyenletrendszer ekvivalens az $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ mátrix egyenlettel, ahol $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\ldots, \\mathbf{x}^{(m)})$ és $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$!

## 3.7. Mátrix invertálás és determináns számítás

Az $\\mathbf{A}$ nemszinguláris négyzetes mátrix inverze teljesíti az $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$ mátrix egyenletet, ezért $\\mathbf{A}^{-1}$ megoldása az $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ mátrix egyenletnek (azaz szimultán egyenletrendszernek). Ennek megoldására használhatjuk a Gauss–Jordan-eliminációt. Ellenőrizhető, hogy ennek műveletigénye $\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$ osztás ill. szorzás.

**3.38. példa.** Invertáljuk az

$$\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$$

mátrixot! A Gauss–Jordan-módszert használva:

$$\\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ -1 & 1 & 0 & 0 & 1 & 0 \\\\ -2 & 0 & -1 & 0 & 0 & 1 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ 0 & 1 & 2 & 1 & 1 & 0 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\\\ 0 & 1 & 2 & 1 & 1 & 0 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\\\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\\\ 0 & 0 & 3 & 2 & 0 & 1 \\end{pmatrix} \\sim$$

$$\\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\\\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\\\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \\end{pmatrix}.$$

Tehát

$$\\mathbf{A}^{-1} = \\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}. \\qquad\\square$$

Természetesen a mátrix invertálás Gauss–Jordan-eliminációs módszerénél is használhatjuk a Gauss-eliminációnál megfogalmazott részleges főelemkiválasztás módszerét is a numerikus hiba csökkentése, illetve a nullával való osztás elkerülése érdekében.

A 3.26. tétel szerint az $\\mathbf{A}$ mátrixon a Gauss-elimináció részleges főelemkiválasztással pontosan akkor hajtható végre, ha $\\det(\\mathbf{A}) \\neq 0$. A tétel bizonyításából következik, hogy $\\det(\\mathbf{A}) = (-1)^s\\det(\\mathbf{A}^{(n-1)})$, ahol $s$ a módszer közben végrehajtott sorcserék száma. Azaz a determináns egyenlő a főelemek megfelelő előjellel vett szorzatával: $\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$.

**3.39. példa.** Tekintsük a 3.22. példa együtthatómátrixát, azaz legyen

$$\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}.$$

Számítsuk ki a mátrix determinánsát! A 3.22. példában végigszámoltuk, hogy az $\\mathbf{A}$ mátrixon végrehajtva a Gauss-eliminációt a végeredmény

$$\\mathbf{A}^{(3)} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 0 & 3 & 6 & 8 \\\\ 0 & 0 & 1 & -6 \\\\ 0 & 0 & 0 & 38 \\end{pmatrix}.$$

Tehát $\\det(\\mathbf{A}) = \\det(\\mathbf{A}^{(3)}) = 1 \\cdot 3 \\cdot 1 \\cdot 38 = 114$. $\\qquad\\square$

### Feladatok

1. Invertálja a következő mátrixokat:

   (a)
   $$\\begin{pmatrix} -1 & 1 & 2 \\\\ -2 & 1 & 0 \\\\ 0 & 1 & -1 \\end{pmatrix}$$

   (b)
   $$\\begin{pmatrix} -3 & 1 & 2 \\\\ 0 & 3 & 1 \\\\ -2 & -1 & 1 \\end{pmatrix}$$

   (c)
   $$\\begin{pmatrix} 1 & -1 & 0 & 2 \\\\ 2 & 1 & 0 & 1 \\\\ 1 & 0 & -1 & 0 \\\\ 1 & 2 & 2 & -1 \\end{pmatrix}$$

2. Igazolja, hogy az általános Gauss–Jordan-eliminációt használva $3n^3/2 - n/2$ osztás ill. szorzás kell a mátrix invertáláshoz!

3. Fogalmazza meg a Gauss–Jordan-eljárás algoritmusát a mátrix invertálás feladatára alkalmazva, figyelembe véve, hogy az $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ mátrix egyenletben $\\mathbf{I}$ speciális alakú, azaz azt, hogy a nullával való szorzásokat nem kell végrehajtani! Lássa be, hogy az így kapott speciális Gauss–Jordan-eliminción alapuló mátrix invertálás műveletigénye $n^3$ osztás/szorzás!

4. Tesztelje az előző feladatban megfogalmazott algoritmust a

   $$\\begin{pmatrix}
   -2 & 1 & & & & \\\\
   1 & -2 & 1 & & & \\\\
   & 1 & -2 & 1 & & \\\\
   & & \\ddots & \\ddots & \\ddots & \\\\
   & & & 1 & -2 & 1 \\\\
   & & & & 1 & -2
   \\end{pmatrix}$$

   $10 \\times 10$-es mátrixon (ahol a hiányzó elemek nullák)! Lássa be, hogy a pontos inverz $\\mathbf{A}^{-1} = (c_{ij})$, ahol $c_{ij} = c_{ji}$, és $c_{ij} = -i(11 - j)/11$, $i \\leq j$.

5. Számítsa ki az 1. feladatban megadott mátrixok determinánsát Gauss-eliminációt használva!
`;function g(n,a,i){const t=n.match(a);if(!t||t.index===void 0)return"";const r=n.slice(t.index+t[0].length),l=r.search(i);return(t[0]+(l>=0?r.slice(0,l):r)).trim()}const T=/\*\*Example \d+\.\d+\.?\*\*|\n#{1,3} |\n\[\^|\n### Exercises|\n\*\*Exercises/,E=/\*\*\d+\.\d+\.? *példa\.?\*\*|\n#{1,3} |\n\[\^|\n### Feladat|\n\*\*Feladat/,s=(n,a,i,t)=>({en:g(n,a,T),hu:g(i,t,E)}),c={en:`

*Step through every elimination step interactively in the [Elimination Lab](/linear-systems#lab).*`,hu:`

*Lépésről lépésre az [Eliminációs laborban](/linear-systems#lab) követheted végig.*`};function u(n,a){const i=n.match(a);if(!i||i.index===void 0)return"";const t=n.slice(i.index),r=t.indexOf("\\square");if(r<0)return t.trim();const l=t.indexOf(`
`,r);return t.slice(0,l>=0?l:t.length).trim()}const $=(n,a)=>({en:`${c.en}

---

**Worked solution.**

${u(q,n)}`,hu:`${c.hu}

---

**Kidolgozott megoldás.**

${u(j,a)}`}),o={e324:$(/\*\*Example 3\.24\.\*\*/,/\*\*3\.24\. *példa\.\*\*/),e327:$(/\*\*Example 3\.27\.\*\*/,/\*\*3\.27\. *példa\.\*\*/),e329:$(/\*\*Example 3\.29\.\*\*/,/\*\*3\.29\. *példa\.\*\*/),e335:$(/\*\*Example 3\.35\.\*\*/,/\*\*3\.35\. *példa\.\*\*/),e338:$(/\*\*Example 3\.38\.\*\*/,/\*\*3\.38\. *példa\.\*\*/)},G={title:{en:"Gaussian elimination, partial & complete pivoting, Gauss–Jordan, matrix inversion",hu:"Gauss-elimináció, részleges és teljes főelemkiválasztás, Gauss–Jordan-elimináció, mátrixinvertálás"},items:[{label:{en:"Example 3.24 — Gaussian elimination",hu:"3.24. példa — Gauss-elimináció"},body:{en:`**Example 3.24.** Solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ with $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ Plain Gaussian elimination stalls: after eliminating column 1 the $(2,2)$ pivot becomes $0$, so a row interchange is needed (see Example 3.27). With pivoting the solution is $\\mathbf{x}=(4,3,2,-1)$.${o.e324.en}`,hu:`**3.24. példa.** Oldd meg az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ rendszert, ahol $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ A sima Gauss-elimináció elakad: az első oszlop kiküszöbölése után a $(2,2)$ főelem $0$ lesz, ezért sorcsere kell (lásd 3.27. példa). Főelemkiválasztással a megoldás $\\mathbf{x}=(4,3,2,-1)$.${o.e324.hu}`}},{label:{en:"Example 3.27 — partial pivoting",hu:"3.27. példa — részleges főelemkiválasztás"},body:{en:`**Example 3.27.** Solve the Example 3.24 system with *partial pivoting*: before each step swap the row whose pivot-column entry has the largest absolute value into the pivot position, then eliminate. This avoids the zero pivot and yields $\\mathbf{x}=(4,3,2,-1)$.${o.e327.en}`,hu:`**3.27. példa.** Oldd meg a 3.24. példa rendszerét *részleges főelemkiválasztással*: minden lépés előtt cseréld a főelem-oszlop legnagyobb abszolút értékű elemét tartalmazó sort a főelem helyére, majd eliminálj. Ez elkerüli a nulla főelemet, a megoldás $\\mathbf{x}=(4,3,2,-1)$.${o.e327.hu}`}},{label:{en:"Example 3.29 — complete pivoting",hu:"3.29. példa — teljes főelemkiválasztás"},body:{en:`**Example 3.29.** Solve $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ with *complete pivoting*: each step brings the largest-magnitude entry of the whole remaining submatrix to the pivot via a row **and** a column swap (column swaps reorder the unknowns — here the order becomes $x_4,x_3,x_2,x_1$). The solution is $\\mathbf{x}=(-3,2,4,-2)$.${o.e329.en}`,hu:`**3.29. példa.** Oldd meg a $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ rendszert *teljes főelemkiválasztással*: minden lépésben a teljes maradék részmátrix legnagyobb abszolút értékű elemét hozzuk a főelembe sor- **és** oszlopcserével (az oszlopcsere átrendezi az ismeretleneket — itt a sorrend $x_4,x_3,x_2,x_1$ lesz). A megoldás $\\mathbf{x}=(-3,2,4,-2)$.${o.e329.hu}`}},{label:{en:"Example 3.35 — Gauss–Jordan elimination",hu:"3.35. példa — Gauss–Jordan-elimináció"},body:{en:`**Example 3.35.** Apply Gauss–Jordan elimination to the same augmented matrix $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ drive the coefficient block to the identity $\\mathbf{I}$; the solution then appears directly in the last column, $\\mathbf{x}=(-3,2,4,-2)$.${o.e335.en}`,hu:`**3.35. példa.** Alkalmazz Gauss–Jordan-eliminációt ugyanarra a kibővített mátrixra: $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ hozd az együtthatóblokkot az $\\mathbf{I}$ egységmátrixra; a megoldás ekkor közvetlenül az utolsó oszlopban jelenik meg, $\\mathbf{x}=(-3,2,4,-2)$.${o.e335.hu}`}},{label:{en:"Example 3.38 — matrix inversion",hu:"3.38. példa — mátrixinvertálás"},body:{en:`**Example 3.38.** Invert $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ by running Gauss–Jordan on $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ until it becomes $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${o.e338.en}`,hu:`**3.38. példa.** Invertáld az $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ mátrixot Gauss–Jordan-eliminációval az $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ mátrixon, amíg $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$ alakot nem kapsz: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${o.e338.hu}`}}]},S={en:`**Example 9.2.** Find the line $y=ax+b$ of best fit to the data below. We tabulate $x_i^2$ and $x_iy_i$ and their column sums.

| $x_i$ | $y_i$ | $x_i^2$ | $x_iy_i$ |
|---|---|---|---|
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **Σ 20.0** | **16.4** | **89.50** | **67.25** |

Substituting the sums into the normal equations $89.5a+20.0b=67.25$, $20.0a+7b=16.4$ gives $a=0.630243$, $b=0.542163$. The fitting error is $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`,hu:`**9.2. példa.** Keresd meg az alábbi adatokra legjobban illeszkedő $y=ax+b$ egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_iy_i$ értékeket, az utolsó sorban az összegeket.

| $x_i$ | $y_i$ | $x_i^2$ | $x_iy_i$ |
|---|---|---|---|
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **Σ 20.0** | **16.4** | **89.50** | **67.25** |

Az összegeket a normálegyenletekbe helyettesítve ($89.5a+20.0b=67.25$, $20.0a+7b=16.4$) a megoldás $a=0.630243$, $b=0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`},L=[G,{title:{en:"Lagrange interpolation",hu:"Lagrange-interpoláció"},items:[{label:{en:"Example 6.2",hu:"6.2. példa"},body:s(z,/\*\*Example 6\.2\.\*\*/,p,/\*\*6\.2\. *példa\.\*\*/)}]},{title:{en:"Newton interpolating polynomial",hu:"Newton-féle interpolációs polinom"},items:[{label:{en:"Example 6.15",hu:"6.15. példa"},body:s(v,/\*\*Example 6\.15\.\*\*/,y,/\*\*6\.15\. *példa\.\*\*/)}]},{title:{en:"Hermite interpolation",hu:"Hermite-interpoláció"},items:[{label:{en:"Example 6.21",hu:"6.21. példa"},body:s(w,/\*\*Example 6\.21\.\*\*/,A,/\*\*6\.21\. *példa\.\*\*/)}]},{title:{en:"Numerical differentiation (first/second differences, second derivative)",hu:"Numerikus differenciálás (elsőrendű, másodrendű differenciák, második derivált)"},items:[{label:{en:"Example 7.1",hu:"7.1. példa"},body:s(d,/\*\*Example 7\.1\.\*\*/,h,/\*\*7\.1\. *példa\.\*\*/)},{label:{en:"Example 7.2",hu:"7.2. példa"},body:s(d,/\*\*Example 7\.2\.\*\*/,h,/\*\*7\.2\. *példa\.\*\*/)},{label:{en:"Example 7.4",hu:"7.4. példa"},body:s(d,/\*\*Example 7\.4\.\*\*/,h,/\*\*7\.4\. *példa\.\*\*/)}]},{title:{en:"Trapezoidal rule, Simpson’s rule, two-point Gaussian quadrature",hu:"Trapézformula, Simpson-formula, két pontos Gauss-féle kvadratúra"},items:[{label:{en:"Example 7.7",hu:"7.7. példa"},body:s(b,/\*\*Example 7\.7\.\*\*/,f,/\*\*7\.7\. *példa\.\*\*/)},{label:{en:"Example 7.8",hu:"7.8. példa"},body:s(b,/\*\*Example 7\.8\.\*\*/,f,/\*\*7\.8\. *példa\.\*\*/)},{label:{en:"Example 7.11",hu:"7.11. példa"},body:s(k,/\*\*Example 7\.11\.\*\*/,x,/\*\*7\.11\. *példa\.\*\*/)},{label:{en:"Example 7.15",hu:"7.15. példa"},body:s(k,/\*\*Example 7\.15\.\*\*/,x,/\*\*7\.15\. *példa\.\*\*/)}]},{title:{en:"Fitting a line",hu:"Egyenes illesztése"},items:[{label:{en:"Example 9.2",hu:"9.2. példa"},body:S}]}],B=[{title:{en:"Fixed-point iteration in 1 and n dimensions",hu:"Fixpont iteráció 1 és n dimenzióban"},body:{en:`**Setup.** Rewrite $f(x)=0$ as $x=g(x)$; iterate $x_{k+1}=g(x_k)$. A fixed point $p=g(p)$.

**Contraction (1D).** $g$ is a contraction on $[a,b]$ if $g$ maps $[a,b]$ into itself and $|g'(x)|\\le L<1$. Then a unique fixed point exists and iteration converges for any $x_0\\in[a,b]$.

**Local convergence.** If $g$ is $C^1$ near $p$ and $|g'(p)|<1$, the iteration converges locally; it diverges if $|g'(p)|>1$.

**Rate.** Linear with $e_{k+1}\\approx g'(p)\\,e_k$. If $g'(p)=0$ (e.g. Newton) convergence is faster.

**Error / stopping.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / stop: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, so iterate until $|x_k-x_{k-1}|<\\varepsilon$.

**n dimensions.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Contraction if $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; sufficient: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ in some matrix norm. Local convergence $\\iff$ spectral radius $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Pitfalls.** Wrong rearrangement gives $|g'(p)|>1$ (diverges); $g$ must map the interval into itself; $\\rho<1$ is the sharp condition, $\\|\\cdot\\|<1$ is only sufficient.`,hu:`**Felírás.** Az $f(x)=0$ egyenletet $x=g(x)$ alakra hozzuk; iteráció $x_{k+1}=g(x_k)$. Fixpont: $p=g(p)$.

**Kontrakció (1D).** $g$ kontrakció $[a,b]$-n, ha $g$ az $[a,b]$-t önmagába képezi és $|g'(x)|\\le L<1$. Ekkor egyetlen fixpont van, és az iteráció minden $x_0\\in[a,b]$ esetén konvergál.

**Lokális konvergencia.** Ha $g\\in C^1$ a $p$ körül és $|g'(p)|<1$, az iteráció lokálisan konvergál; $|g'(p)|>1$ esetén divergál.

**Sebesség.** Lineáris, $e_{k+1}\\approx g'(p)\\,e_k$. Ha $g'(p)=0$ (pl. Newton), gyorsabb.

**Hibabecslés / leállás.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / leállás: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, tehát amíg $|x_k-x_{k-1}|<\\varepsilon$.

**n dimenzió.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Kontrakció, ha $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; elegendő: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ valamely mátrixnormában. Lokális konvergencia $\\iff$ a spektrálsugár $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Buktatók.** Rossz átrendezés $|g'(p)|>1$-et ad (divergál); $g$-nek az intervallumot önmagába kell képeznie; $\\rho<1$ az éles feltétel, $\\|\\cdot\\|<1$ csak elegendő.`}},{title:{en:"Solving nonlinear equations: bisection, regula falsi, Newton, secant",hu:"Nemlineáris egyenletek: intervallumfelezés, húrmódszer, Newton-módszer, szelőmódszer"},body:{en:`Goal: solve $f(x)=0$.

**Bisection.** Need $f(a)f(b)<0$ (sign change, $f$ continuous). Halve interval, keep the half with the sign change. Always converges; **linear**, error halves each step: $|e_{k+1}|=\\tfrac12|e_k|$. After $n$ steps error $\\le (b-a)/2^{n+1}$.

**Regula falsi (chord).** Bracketing too; next point is the chord root
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Keeps a bracket; reliable but often linear (one endpoint can stick).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
**Quadratic** ($p=2$) for a simple root with $f'(p)\\neq0$, given a good start. Needs $f'$; may diverge from a bad start; only linear at a multiple root.

**Secant.** Newton with $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Order $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (superlinear); no derivative, two starting points; no bracket guarantee.

**Pitfalls.** Newton/secant: $f'\\approx0$ blows up; multiple roots kill the order; bracketing methods are robust but slow.`,hu:`Cél: $f(x)=0$ megoldása.

**Intervallumfelezés.** Kell $f(a)f(b)<0$ (előjelváltás, $f$ folytonos). Felezzük az intervallumot, az előjelváltó felét tartjuk meg. Mindig konvergál; **lineáris**, a hiba feleződik: $|e_{k+1}|=\\tfrac12|e_k|$. $n$ lépés után hiba $\\le (b-a)/2^{n+1}$.

**Húrmódszer (regula falsi).** Szintén beékelő; a következő pont a húr gyöke
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Megtartja a beékelést; megbízható, de gyakran lineáris (egy végpont beragadhat).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
Egyszeres gyök ($f'(p)\\neq0$) és jó kezdőpont esetén **kvadratikus** ($p=2$). Kell $f'$; rossz kezdőpontból divergálhat; többszörös gyöknél csak lineáris.

**Szelőmódszer.** Newton, ahol $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Rend $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (szuperlineáris); nem kell derivált, két kezdőpont; nincs beékelési garancia.

**Buktatók.** Newton/szelő: $f'\\approx0$ esetén elszáll; többszörös gyök rontja a rendet; a beékelő módszerek robusztusak, de lassúak.`}},{title:{en:"Vector and matrix norms",hu:"Vektor- és mátrixnormák"},body:{en:`**Vector norms** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norm: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norm (Euclidean): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norm (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norm axioms.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; triangle $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Induced (operator) matrix norms.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **max absolute column sum**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **max absolute row sum**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spectral norm** (largest singular value).

**Properties.** Submultiplicative $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ and compatible $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Always $\\rho(A)\\le\\|A\\|$ for any induced norm.

**Pitfall.** Don't swap the row/column rule for $\\|\\cdot\\|_1$ vs $\\|\\cdot\\|_\\infty$; the Frobenius norm $\\sqrt{\\sum a_{ij}^2}$ is **not** induced by the 2-norm.`,hu:`**Vektornormák** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norma: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norma (euklideszi): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norma (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norma-axiómák.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; háromszög $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Indukált (operátor-) mátrixnormák.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **maximális abszolút oszlopösszeg**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **maximális abszolút sorösszeg**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spektrálnorma** (legnagyobb szinguláris érték).

**Tulajdonságok.** Szubmultiplikatív $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ és kompatibilis $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Mindig $\\rho(A)\\le\\|A\\|$ bármely indukált normára.

**Buktató.** Ne keverd a sor/oszlop szabályt $\\|\\cdot\\|_1$ és $\\|\\cdot\\|_\\infty$ közt; a Frobenius-norma $\\sqrt{\\sum a_{ij}^2}$ **nem** a 2-norma indukált normája.`}},{title:{en:"Newton's method in n dimensions",hu:"Newton-módszer n dimenzióban"},body:{en:`Solve $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobian.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$ with entries $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteration.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. In practice **never invert** — solve the linear system for the step $\\Delta\\mathbf{x}_k$:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algorithm gist.** Per step: (1) evaluate $\\mathbf{F}(\\mathbf{x}_k)$ and $J(\\mathbf{x}_k)$; (2) solve $J\\Delta=-\\mathbf{F}$ (e.g. Gauss/LU); (3) update; (4) stop when $\\|\\Delta\\mathbf{x}_k\\|$ or $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Convergence.** **Quadratic** locally if $J(\\mathbf{p})$ is nonsingular and $\\mathbf{F}\\in C^2$, with a good start $\\mathbf{x}_0$.

**Pitfalls.** Singular/ill-conditioned $J$; cost of forming $J$ ($n^2$ derivatives) and solving ($O(n^3)$) each step; needs a good initial guess; divergence otherwise. Variants reuse $J$ (modified Newton) or approximate it (quasi-Newton/Broyden).`,hu:`Megoldandó $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobi-mátrix.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$, elemei $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteráció.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. A gyakorlatban **soha nem invertálunk** — a $\\Delta\\mathbf{x}_k$ lépésre megoldjuk a lineáris rendszert:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algoritmus.** Lépésenként: (1) $\\mathbf{F}(\\mathbf{x}_k)$ és $J(\\mathbf{x}_k)$ kiértékelése; (2) $J\\Delta=-\\mathbf{F}$ megoldása (pl. Gauss/LU); (3) frissítés; (4) leállás, ha $\\|\\Delta\\mathbf{x}_k\\|$ vagy $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Konvergencia.** Lokálisan **kvadratikus**, ha $J(\\mathbf{p})$ nemszinguláris és $\\mathbf{F}\\in C^2$, jó $\\mathbf{x}_0$ kezdőpontnál.

**Buktatók.** Szinguláris/rosszul kondicionált $J$; $J$ felépítése ($n^2$ derivált) és a megoldás ($O(n^3)$) lépésenkénti költsége; jó kezdőpont kell, különben divergál. Változatok: $J$ újrahasználata (módosított Newton) vagy közelítése (kvázi-Newton/Broyden).`}},{title:{en:"Order of convergence",hu:"Konvergenciarend"},body:{en:`Let $e_k=x_k-p$ (error). A sequence converges with **order** $p\\ge1$ if
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1\\text{ if }p=1).$$
$C$ is the asymptotic error constant.

**Cases.**
- **Linear** ($p=1$, $0<C<1$): error shrinks by factor $C$ each step, e.g. bisection ($C=\\tfrac12$), typical fixed-point with $0<|g'(p)|<1$.
- **Superlinear** ($1<p<2$): e.g. secant, $p\\approx1.618$.
- **Quadratic** ($p=2$): error roughly squares; digits double; e.g. Newton at a simple root.

**Estimating $p$ from data** (three iterates' errors, or use successive differences):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
If $p$ unknown use $d_k=x_{k+1}-x_k$ in place of $e_k$.

**Pitfalls.** $C<1$ is required only for linear order ($p=1$); for $p>1$ no smallness of $C$ is needed (only a good enough start). A multiple root drops Newton from quadratic to linear.`,hu:`Legyen $e_k=x_k-p$ (hiba). A sorozat $p\\ge1$ **renddel** konvergál, ha
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1,\\text{ ha }p=1).$$
$C$ az aszimptotikus hibakonstans.

**Esetek.**
- **Lineáris** ($p=1$, $0<C<1$): a hiba $C$-szeresére csökken lépésenként, pl. intervallumfelezés ($C=\\tfrac12$), tipikus fixpont $0<|g'(p)|<1$ esetén.
- **Szuperlineáris** ($1<p<2$): pl. szelőmódszer, $p\\approx1.618$.
- **Kvadratikus** ($p=2$): a hiba kb. négyzetre emelkedik; a jegyek száma duplázódik; pl. Newton egyszeres gyöknél.

**$p$ becslése adatokból** (három iteráció hibájából, vagy egymást követő különbségekből):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
Ha $p$ ismeretlen, $e_k$ helyett $d_k=x_{k+1}-x_k$ használható.

**Buktatók.** $C<1$ csak lineáris rendnél ($p=1$) kell; $p>1$ esetén nem kell $C$ kicsisége (csak elég jó kezdőpont). Többszörös gyök a Newtont kvadratikusról lineárisra rontja.`}},{title:{en:"Gaussian elimination, pivoting, Gauss–Jordan",hu:"Gauss-elimináció, főelemkiválasztás, Gauss–Jordan-elimináció"},body:{en:`Solve $A\\mathbf{x}=\\mathbf{b}$.

**Gaussian elimination.** Forward elimination turns $A$ into upper triangular $U$ (multiplier $m_{ik}=a_{ik}/a_{kk}$, subtract $m_{ik}\\times$ pivot row); then **back substitution**. This is the LU factorization $A=LU$.

**Pivoting (why).** A zero or tiny pivot $a_{kk}$ causes division by ~0 and large rounding errors.
- **Partial pivoting:** swap rows so the pivot is the largest $|a_{ik}|$ in the column. Gives $PA=LU$; standard and stable enough.
- **Complete pivoting:** search whole submatrix (row + column swaps); more stable, rarely needed, costlier.

**Gauss–Jordan.** Eliminate **above and below** each pivot and scale pivots to 1, reducing $[A\\,|\\,\\mathbf{b}]$ to $[I\\,|\\,\\mathbf{x}]$ — no back substitution. Also gives $A^{-1}$ via $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Operation counts.** Gaussian elimination $\\approx \\dfrac{n^3}{3}$ multiplications (back-sub $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — more work, so GE+back-sub is preferred for solving.

**Pitfalls.** Never solve via $\\mathbf{x}=A^{-1}\\mathbf{b}$ (slower, less accurate); without pivoting GE can fail/be unstable even for nonsingular $A$.`,hu:`Megoldandó $A\\mathbf{x}=\\mathbf{b}$.

**Gauss-elimináció.** Az előre-elimináció $A$-t felső háromszög $U$-vá alakítja (szorzó $m_{ik}=a_{ik}/a_{kk}$, kivonjuk a $m_{ik}\\times$ pivotsort); majd **visszahelyettesítés**. Ez az $A=LU$ felbontás.

**Főelemkiválasztás (miért).** Nulla vagy kicsi $a_{kk}$ pivot ~0-val való osztáshoz és nagy kerekítési hibákhoz vezet.
- **Részleges:** sorcserékkel a pivot legyen az oszlop legnagyobb $|a_{ik}|$ eleme. $PA=LU$; szabványos és elég stabil.
- **Teljes:** az egész részmátrixban keres (sor- és oszlopcsere); stabilabb, ritkán kell, költségesebb.

**Gauss–Jordan.** Minden pivot **alatt és felett** is eliminál, a pivotokat 1-re skálázza, $[A\\,|\\,\\mathbf{b}]$-t $[I\\,|\\,\\mathbf{x}]$-re hozza — nincs visszahelyettesítés. $A^{-1}$-t is ad: $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Műveletigény.** Gauss-elimináció $\\approx \\dfrac{n^3}{3}$ szorzás (visszahelyettesítés $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — több munka, ezért megoldásra a GE+visszahelyettesítés jobb.

**Buktatók.** Soha ne $\\mathbf{x}=A^{-1}\\mathbf{b}$ útján oldj (lassabb, pontatlanabb); főelemkiválasztás nélkül a GE nemszinguláris $A$-ra is elromolhat/instabil lehet.`}},{title:{en:"Linear fixed-point iteration",hu:"Lineáris fixpont iteráció"},body:{en:`**Form.** Iterate $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (e.g. from splitting $A\\mathbf{x}=\\mathbf{b}$). Fixed point $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, i.e. $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Error recursion.** With $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Convergence (sharp).** Converges for every $\\mathbf{x}_0$ **iff** the spectral radius
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Sufficient:** $\\|B\\|<1$ in some induced norm (then it's a contraction).

**Rate / error bound.** If $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Asymptotic convergence factor is $\\rho(B)$ (smaller $\\Rightarrow$ faster).

**Pitfalls.** $\\rho(B)<1$ is necessary and sufficient; $\\|B\\|<1$ is only sufficient — $\\|B\\|\\ge1$ does **not** imply divergence. Convergence can be slow if $\\rho(B)$ is close to 1.`,hu:`**Alak.** Iteráció $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (pl. $A\\mathbf{x}=\\mathbf{b}$ felbontásából). Fixpont $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, azaz $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Hibarekurzió.** $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$ jelöléssel: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Konvergencia (éles).** Minden $\\mathbf{x}_0$-ra **akkor és csak akkor** konvergál, ha a spektrálsugár
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Elegendő:** $\\|B\\|<1$ valamely indukált normában (ekkor kontrakció).

**Sebesség / hibabecslés.** Ha $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Az aszimptotikus konvergenciafaktor $\\rho(B)$ (kisebb $\\Rightarrow$ gyorsabb).

**Buktatók.** $\\rho(B)<1$ szükséges és elegendő; $\\|B\\|<1$ csak elegendő — $\\|B\\|\\ge1$ **nem** jelent divergenciát. Ha $\\rho(B)$ közel van 1-hez, a konvergencia lassú.`}},{title:{en:"Jacobi and Gauss–Seidel iteration",hu:"Jacobi- és Gauss-Seidel-iteráció"},body:{en:`Solve $A\\mathbf{x}=\\mathbf{b}$ by splitting $A=D-L-U$ ($D$ diagonal, $-L$ strictly lower, $-U$ strictly upper part).

**Jacobi.** Use only old components:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** Use already-updated components immediately:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_{GS}=(D-L)^{-1}U$.

**Convergence.** Both converge $\\iff \\rho(B)<1$. **Strict diagonal dominance** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ for all $i$) $\\Rightarrow$ both converge. GS also converges for symmetric positive definite $A$. GS usually faster than Jacobi.

**Pitfalls.** Need $a_{ii}\\neq0$ (reorder rows if needed). Diagonal dominance is sufficient, not necessary. Jacobi is parallelizable; GS is sequential (depends on update order).`,hu:`Megoldandó $A\\mathbf{x}=\\mathbf{b}$ az $A=D-L-U$ felbontással ($D$ diagonális, $-L$ szigorúan alsó, $-U$ szigorúan felső rész).

**Jacobi.** Csak régi komponensek:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** A már frissített komponenseket azonnal használja:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_{GS}=(D-L)^{-1}U$.

**Konvergencia.** Mindkettő $\\iff \\rho(B)<1$. **Szigorú diagonális dominancia** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ minden $i$-re) $\\Rightarrow$ mindkettő konvergál. A GS szimmetrikus pozitív definit $A$-ra is konvergál. A GS általában gyorsabb a Jacobinál.

**Buktatók.** Kell $a_{ii}\\neq0$ (szükség esetén sorcsere). A diagonális dominancia elegendő, nem szükséges. A Jacobi párhuzamosítható; a GS soros (függ a frissítési sorrendtől).`}},{title:{en:"Perturbation of linear systems, condition number",hu:"Lineáris egyenletrendszerek perturbációja, kondíciószám"},body:{en:`For $A\\mathbf{x}=\\mathbf{b}$, how do errors in $\\mathbf{b}$ and $A$ affect $\\mathbf{x}$?

**Condition number.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Depends on the chosen norm.

**Perturbation bounds.**
- Right-hand side only ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- Both $A$ and $\\mathbf{b}$ perturbed (to first order):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Reading it.** $\\kappa(A)$ amplifies relative input errors. $\\kappa\\approx1$: well-conditioned. $\\kappa\\gg1$: **ill-conditioned** — tiny data/rounding errors cause large solution errors; expect to lose about $\\log_{10}\\kappa(A)$ decimal digits.

**Pitfalls.** Ill-conditioning is a property of $A$, **not** of the algorithm — even a perfect solver loses accuracy. A small residual $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ does **not** guarantee a small error when $\\kappa(A)$ is large. $\\kappa$ is norm-dependent and always $\\ge1$.`,hu:`Az $A\\mathbf{x}=\\mathbf{b}$ rendszerben hogyan hatnak $\\mathbf{b}$ és $A$ hibái $\\mathbf{x}$-re?

**Kondíciószám.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Függ a választott normától.

**Perturbációs becslések.**
- Csak a jobb oldal ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- $A$ és $\\mathbf{b}$ is perturbált (elsőrendben):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Értelmezés.** $\\kappa(A)$ felnagyítja a relatív bemeneti hibákat. $\\kappa\\approx1$: jól kondicionált. $\\kappa\\gg1$: **rosszul kondicionált** — apró adat-/kerekítési hibák nagy megoldáshibát okoznak; kb. $\\log_{10}\\kappa(A)$ tizedesjegyet veszítünk.

**Buktatók.** A rossz kondicionáltság $A$ tulajdonsága, **nem** az algoritmusé — egy tökéletes megoldó is veszít pontosságból. Kis reziduum $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ **nem** garantál kis hibát, ha $\\kappa(A)$ nagy. $\\kappa$ normafüggő és mindig $\\ge1$.`}}],I=[{title:{en:"Lagrange interpolation",hu:"Lagrange-interpoláció"},body:{en:`**Goal.** Find the unique degree $\\le n$ polynomial through $n+1$ points $(x_0,y_0),\\dots,(x_n,y_n)$ with distinct nodes $x_i$.

**Basis polynomials (cardinal):**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolant:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Error term** (if $f\\in C^{n+1}$, some $\\xi$ in the interval):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Uniqueness: only **one** polynomial of degree $\\le n$ fits $n+1$ distinct nodes.
- Drawback: adding a node recomputes **all** $l_k$ (use Newton form for incremental work).
- Runge phenomenon: equispaced high-degree nodes oscillate; prefer Chebyshev nodes.`,hu:`**Cél.** Megkeresni az egyetlen, legfeljebb $n$-edfokú polinomot, amely átmegy az $n+1$ db $(x_0,y_0),\\dots,(x_n,y_n)$ ponton (a $x_i$ alappontok különbözőek).

**Alappolinomok:**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolációs polinom:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Hibatag** (ha $f\\in C^{n+1}$, valamely $\\xi$-re az intervallumban):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Egyértelműség: $n+1$ különböző alappontra **csak egy** legfeljebb $n$-edfokú polinom illik.
- Hátrány: új alappontnál **minden** $l_k$ újraszámolandó (inkrementálishoz Newton-alak).
- Runge-jelenség: egyenközű, magas fokú alappontok oszcillálnak; Csebisev-alappontok jobbak.`}},{title:{en:"Divided differences, Newton form of the interpolating polynomial",hu:"Osztott differenciák, a Lagrange-interpoláció Newton-féle alakja"},body:{en:`**Divided differences (recurrence):**
$$f[x_i]=f(x_i),\\qquad f[x_i,\\dots,x_{i+k}]=\\frac{f[x_{i+1},\\dots,x_{i+k}]-f[x_i,\\dots,x_{i+k-1}]}{x_{i+k}-x_i}.$$

**Newton form** (same polynomial as Lagrange's $L_n$):
$$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i).$$

**Divided-difference table** — top diagonal gives the coefficients:
$$
\\begin{array}{c|cccc}
x_0 & f[x_0] & & & \\\\
x_1 & f[x_1] & f[x_0,x_1] & & \\\\
x_2 & f[x_2] & f[x_1,x_2] & f[x_0,x_1,x_2] & \\\\
\\end{array}
$$

**Horner-like (nested) evaluation** with coeffs $c_k=f[x_0,\\dots,x_k]$:
$$p=c_n;\\quad p=c_k+(x-x_k)\\,p\\ \\text{ for } k=n-1,\\dots,0.$$

- Adding a new node only appends **one** term — cheap incremental updates.
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ for some $\\xi$; symmetric in its arguments.`,hu:`**Osztott differenciák (rekurzió):**
$$f[x_i]=f(x_i),\\qquad f[x_i,\\dots,x_{i+k}]=\\frac{f[x_{i+1},\\dots,x_{i+k}]-f[x_i,\\dots,x_{i+k-1}]}{x_{i+k}-x_i}.$$

**Newton-féle alak** (ugyanaz a polinom, mint a Lagrange-féle $L_n$):
$$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i).$$

**Osztott differencia táblázat** — a felső átló adja az együtthatókat:
$$
\\begin{array}{c|cccc}
x_0 & f[x_0] & & & \\\\
x_1 & f[x_1] & f[x_0,x_1] & & \\\\
x_2 & f[x_2] & f[x_1,x_2] & f[x_0,x_1,x_2] & \\\\
\\end{array}
$$

**Horner-szerű (beágyazott) kiértékelés** a $c_k=f[x_0,\\dots,x_k]$ együtthatókkal:
$$p=c_n;\\quad p=c_k+(x-x_k)\\,p\\ \\text{ ahol } k=n-1,\\dots,0.$$

- Új alappont csak **egy** taggal bővít — olcsó inkrementális frissítés.
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ valamely $\\xi$-re; az argumentumokban szimmetrikus.`}},{title:{en:"Numerical differentiation (Lagrange and Taylor approaches)",hu:"Numerikus differenciálás – Lagrange és Taylor módszerek"},body:{en:`**First derivative (step $h$):**
$$
f'(x)\\approx\\frac{f(x+h)-f(x)}{h}\\ \\text{(forward, }O(h)\\text{)},\\quad
\\frac{f(x)-f(x-h)}{h}\\ \\text{(backward, }O(h)\\text{)},
$$
$$
f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}\\quad\\text{(central, }O(h^2)\\text{)}.
$$

**Second derivative (central, $O(h^2)$):**
$$f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}.$$

**Taylor derivation** (e.g. central first derivative):
$$f(x\\pm h)=f(x)\\pm hf'(x)+\\tfrac{h^2}{2}f''(x)\\pm\\tfrac{h^3}{6}f'''(x)+\\dots$$
Subtracting cancels even terms $\\Rightarrow$ leading error $-\\tfrac{h^2}{6}f'''(\\xi)$, hence $O(h^2)$.

**Lagrange approach.** Differentiate the interpolating polynomial $L_n$ and evaluate at $x$; same formulas arise from chosen nodes.

- **Trade-off:** smaller $h$ cuts truncation error but inflates round-off ($\\sim \\varepsilon/h$); an optimal $h$ exists.`,hu:`**Első derivált (lépés $h$):**
$$
f'(x)\\approx\\frac{f(x+h)-f(x)}{h}\\ \\text{(haladó, }O(h)\\text{)},\\quad
\\frac{f(x)-f(x-h)}{h}\\ \\text{(hátráló, }O(h)\\text{)},
$$
$$
f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}\\quad\\text{(centrális, }O(h^2)\\text{)}.
$$

**Második derivált (centrális, $O(h^2)$):**
$$f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}.$$

**Taylor-levezetés** (pl. centrális első derivált):
$$f(x\\pm h)=f(x)\\pm hf'(x)+\\tfrac{h^2}{2}f''(x)\\pm\\tfrac{h^3}{6}f'''(x)+\\dots$$
Kivonáskor a páros tagok kiesnek $\\Rightarrow$ vezető hiba $-\\tfrac{h^2}{6}f'''(\\xi)$, tehát $O(h^2)$.

**Lagrange-féle megközelítés.** Az $L_n$ interpolációs polinomot deriváljuk és kiértékeljük $x$-ben; az alappontválasztásból ugyanezek a képletek adódnak.

- **Kompromisszum:** kisebb $h$ csökkenti a csonkítási hibát, de növeli a kerekítést ($\\sim \\varepsilon/h$); van optimális $h$.`}},{title:{en:"Newton–Cotes formulas",hu:"Newton–Cotes-formulák"},body:{en:`Approximate $\\int_a^b f\\,dx$ by integrating an interpolating polynomial on **equispaced** nodes.

**Trapezoidal rule** (degree of exactness 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson's rule** (degree of exactness 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Composite versions** (subinterval width $h=(b-a)/n$):
$$\\text{Trap: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ even): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{odd }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{even }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Degree of exactness:** highest polynomial degree integrated exactly (Trap = 1, Simpson = 3).
- Composite error orders: $O(h^2)$ trapezoidal, $O(h^4)$ Simpson.`,hu:`Az $\\int_a^b f\\,dx$ közelítése **egyenközű** alappontokon vett interpolációs polinom integrálásával.

**Trapézszabály** (pontossági fok 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson-szabály** (pontossági fok 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Összetett (kompozit) változatok** (részintervallum szélesség $h=(b-a)/n$):
$$\\text{Trapéz: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ páros): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{páratlan }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{páros }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Pontossági fok:** a legmagasabb polinomfok, amit pontosan integrál (trapéz = 1, Simpson = 3).
- Összetett hibarend: $O(h^2)$ trapéz, $O(h^4)$ Simpson.`}},{title:{en:"Golden-section search",hu:"Aranymetszés szerinti keresés módszere"},body:{en:`**Use when:** minimizing a **unimodal** $f$ on $[a,b]$ with **no derivatives** available (derivative-free 1-D minimization).

**Golden ratio:**
$$\\tau=\\frac{\\sqrt5-1}{2}\\approx0.618.$$

**Interior points** in $[a,b]$:
$$x_1=b-\\tau(b-a),\\qquad x_2=a+\\tau(b-a).$$

**Bracket reduction:**
- if $f(x_1)<f(x_2)$: keep $[a,x_2]$ (minimum is left);
- else: keep $[x_1,b]$.

**Key property.** One interior point is **reused** each step, so only **one new** evaluation per iteration. The interval shrinks by factor $\\tau$ each step:
$$(b-a)_{k}=\\tau^{k}(b-a)_0\\quad\\Rightarrow\\quad \\text{linear convergence}.$$

- Robust, no smoothness/derivatives needed; slower than Newton-type methods.
- Stop when interval width $<$ tolerance.`,hu:`**Mikor:** egy **unimodális** $f$ minimalizálása $[a,b]$-n, ha **nincs derivált** (derivált nélküli 1-D minimumkeresés).

**Aranymetszés aránya:**
$$\\tau=\\frac{\\sqrt5-1}{2}\\approx0.618.$$

**Belső pontok** $[a,b]$-ben:
$$x_1=b-\\tau(b-a),\\qquad x_2=a+\\tau(b-a).$$

**Intervallum-szűkítés:**
- ha $f(x_1)<f(x_2)$: tartsuk meg $[a,x_2]$-t (a minimum balra van);
- különben: tartsuk meg $[x_1,b]$-t.

**Kulcstulajdonság.** Minden lépésben az egyik belső pont **újrahasználható**, így iterációnként csak **egy új** függvénykiértékelés kell. Az intervallum lépésenként $\\tau$ arányban zsugorodik:
$$(b-a)_{k}=\\tau^{k}(b-a)_0\\quad\\Rightarrow\\quad \\text{lineáris konvergencia}.$$

- Robusztus, nem kell simaság/derivált; lassabb a Newton-típusú módszereknél.
- Megállás, ha az intervallum hossza $<$ tűréshatár.`}},{title:{en:"Gradient method (steepest descent)",hu:"Gradiens-módszer"},body:{en:`**Idea.** Move opposite the gradient (direction of fastest decrease):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Step size $\\alpha_k$:**
- **Constant** $\\alpha$: simple, but too large diverges, too small is slow.
- **Line search (steepest/optimal):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Consecutive search directions are then orthogonal.

**Convergence.** Globally convergent for smooth functions with suitable steps; for **convex / quadratic** $f$ it converges **linearly**, with rate governed by the condition number $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ of the Hessian:
$$\\text{rate}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stationary point: $\\nabla f(x^\\*)=0$.
- Ill-conditioned $\\kappa\\gg1$ $\\Rightarrow$ slow zig-zag; only first-order info (no Hessian needed).`,hu:`**Ötlet.** A gradienssel ellentétes irányba lépünk (a leggyorsabb csökkenés iránya):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Lépéshossz $\\alpha_k$:**
- **Állandó** $\\alpha$: egyszerű, de túl nagy divergál, túl kicsi lassú.
- **Vonalmenti keresés (legmeredekebb/optimális):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Ekkor az egymást követő keresési irányok merőlegesek.

**Konvergencia.** Sima függvényeknél megfelelő lépéssel globálisan konvergens; **konvex / kvadratikus** $f$-re **lineárisan** konvergál, az ütemet a Hesse-mátrix $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ kondíciószáma szabja meg:
$$\\text{ütem}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stacionárius pont: $\\nabla f(x^\\*)=0$.
- Rosszul kondicionált $\\kappa\\gg1$ $\\Rightarrow$ lassú cikcakk; csak elsőrendű információ (nem kell Hesse-mátrix).`}},{title:{en:"Newton's method for minimization",hu:"Newton-módszer minimumkeresésre"},body:{en:`**Idea.** Minimize the local quadratic (2nd-order Taylor) model; set its gradient to zero:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hessian.) Solve the linear system $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$, then $x_{k+1}=x_k+p_k$.

**Convergence.** **Quadratic** near a minimum where the Hessian is **positive definite (PD)** and $f$ is smooth — far fewer iterations than gradient descent.

**Requirements / caveats:**
- Needs the Hessian (expensive: $O(n^2)$ storage, $O(n^3)$ solve) and its second derivatives.
- Hessian must be PD for a descent direction; if not, may step toward a saddle/max (use modification / line search / damping).

**Quasi-Newton (BFGS).** Avoids forming the Hessian: build an approximation $B_k\\approx\\nabla^2 f$ (or its inverse) from successive gradients; **superlinear** convergence, only first derivatives needed.`,hu:`**Ötlet.** A lokális kvadratikus (másodrendű Taylor) modell minimalizálása; gradiensét nullázzuk:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hesse-mátrix.) Megoldjuk a $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$ lineáris rendszert, majd $x_{k+1}=x_k+p_k$.

**Konvergencia.** **Kvadratikus** a minimum közelében, ahol a Hesse-mátrix **pozitív definit (PD)** és $f$ sima — sokkal kevesebb iteráció, mint a gradiens-módszernél.

**Feltételek / buktatók:**
- Kell a Hesse-mátrix (drága: $O(n^2)$ tárolás, $O(n^3)$ megoldás) és a második deriváltak.
- A Hesse-mátrixnak PD-nek kell lennie a csökkenő irányhoz; ha nem, nyeregpont/maximum felé léphet (módosítás / vonalkeresés / csillapítás kell).

**Kvázi-Newton (BFGS).** Nem képezi a Hesse-mátrixot: $B_k\\approx\\nabla^2 f$ (vagy inverze) közelítést épít az egymást követő gradiensekből; **szuperlineáris** konvergencia, csak első deriváltak kellenek.`}},{title:{en:"Method of least squares",hu:"Legkisebb négyzetek módszere"},body:{en:`**Problem.** Overdetermined $A c\\approx y$ ($m$ data, $n<m$ params). Minimize the sum of squared residuals:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normal equations** (set gradient to 0):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(if }A\\text{ full column rank)}.$$

**Line fit** $y=c_0+c_1 x$: columns of $A$ are $[1,\\ x_i]$.

**Polynomial fit** degree $d$: columns $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizable nonlinear fits** (take logs $\\Rightarrow$ linear LSQ):
- Exponential $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Power $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ may be ill-conditioned (esp. high-degree Vandermonde); prefer QR/SVD numerically.`,hu:`**Feladat.** Túlhatározott $A c\\approx y$ ($m$ adat, $n<m$ paraméter). A reziduumok négyzetösszegét minimalizáljuk:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normálegyenletek** (a gradienst nullázva):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(ha }A\\text{ teljes oszloprangú)}.$$

**Egyenes-illesztés** $y=c_0+c_1 x$: $A$ oszlopai $[1,\\ x_i]$.

**Polinom-illesztés** $d$-edfokú: oszlopok $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizálható nemlineáris illesztések** (logaritmus $\\Rightarrow$ lineáris LNN):
- Exponenciális $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Hatvány $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ rosszul kondicionált lehet (főleg magas fokú Vandermonde); numerikusan QR/SVD ajánlott.`}}],P=[...B,...I],N=`## Numerical Analysis Glossary

---

### 1

* **1-Norm of a Vector**: Defined as $\\|x\\|_1 = \\sum_{i=1}^n |x_i|$.

---

### A

* **Absolute Error**: The difference between the true value and an approximate value: $|x-\\tilde x|$.

---

### B

* **Backward Difference**: Defined as $f'(x) \\approx \\frac{f(x) - f(x-h)}{h}$.
* **Backward Substitution**: Solving a triangular system starting from the last equation and substituting backward.
* **Band Matrix**: A sparse matrix whose non-zero entries are confined to a diagonal band.
* **BFGS Method**: A popular quasi-Newton method using update formulas for Hessian approximation named after Broyden, Fletcher, Goldfarb, and Shanno.
* **Bisection Method**: A root-finding method where $f(a)f(b) < 0$ guarantees a root in $[a, b]$, and intervals are halved recursively.
* **Block Matrix**: A matrix partitioned into smaller matrices called blocks.
* **Broyden's Method**: A quasi-Newton method that updates an approximation of the Jacobian matrix in solving nonlinear systems.

---

### C

* **Cauchy–Bunyakovsky–Schwarz Inequality**: For all vectors $x$ and $y$: $| x^T y| \\leq \\|x\\|_2 \\cdot \\|y\\|_2$.
* **Central Difference**: Defined as $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}$.
* **Characteristic Equation**: The equation $\\det(A - \\lambda I) = 0$, used to find the eigenvalues of $A$.
* **Cholesky Decomposition**: Decomposes a symmetric positive definite matrix $A$ as $A = LL^T$, where $L$ is lower triangular.
* **Chopping**: A method of rounding where digits beyond a certain precision are simply discarded.
* **Clamped Spline**: A cubic spline with specified first derivatives at endpoints: $S'(x_0)$ and $S'(x_n)$ are known.
* **Classical Runge–Kutta Method**: A widely used fourth-order method: combines four slopes for high accuracy.
* **Complete Pivoting**: A pivoting strategy where both rows and columns are interchanged to select the largest available pivot element.
* **Composite Simpson's Rule**: A more accurate rule by applying Simpson’s Rule over multiple subintervals.
* **Composite Trapezoidal Rule**: Applies the trapezoidal rule to subintervals of $[a, b]$ for better accuracy.
* **Condition Number**: Defined as $\\text{cond}(A) := \\|A\\| \\|A^{-1}\\|$, indicating sensitivity of the solution.
* **Contraction**: A Lipschitz function with constant $0 \\leq c < 1$; ensures convergence in fixed-point iteration.
* **Convergence Criterion**: For linear iterations: the method converges if $\\rho(T) < 1$.
* **Convergence of a Vector Sequence**: A sequence $x^{(k)}$ converges to $x$ if $\\|x^{(k)} - x\\| \\to 0$ as $k \\to \\infty$.
* **Convergence of Iterative Methods**: An iterative method converges if the sequence of approximations approaches the exact solution as iterations increase.
* **Cubic Spline**: A spline composed of piecewise cubic polynomials with continuous first and second derivatives.

---

### D

* **Descent**: The process of moving in the direction where the function decreases.
* **Determinant Condition**: The condition $d > 0$ ensures a unique solution to the normal equations.
* **DFP Update**: The Davidon–Fletcher–Powell update formula used to approximate the inverse Hessian in quasi-Newton methods.
* **Diagonal Dominance**: A matrix $A$ is diagonally dominant if $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$.
* **Diagonally Dominant Matrix**: A matrix $A$ where $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all rows $i$.
* **Direct Method**: A method that aims to solve the system in a finite number of steps, such as Gaussian elimination.
* **Distance Between Vectors**: Defined by $\\|x - y\\|$, typically using the Euclidean norm.
* **Divided Differences**: Recursive coefficients used in Newton's form of interpolating polynomials.
* **Double Precision**: A 64-bit floating point representation conforming to IEEE 754, offering about 15–17 decimal digits of precision.

---

### E

* **Eigenvalue**: A scalar $\\lambda$ is an eigenvalue of matrix $A$ if there exists a nonzero vector $x$ such that $Ax = \\lambda x$.
* **Eigenvector**: A nonzero vector $x$ such that $Ax = \\lambda x$, where $\\lambda$ is an eigenvalue of $A$.
* **Equally Spaced Points**: Points with constant spacing $h = x_{i+1} - x_i$.
* **Equidistant Nodes**: Data points where $x_{i+1} - x_i = h$ for a constant $h$.
* **Error**: The difference between the computed solution $\\tilde{\\mathbf{x}}$ and the exact solution $\\mathbf{x}$, i.e., $\\| \\tilde{\\mathbf{x}} - \\mathbf{x} \\|$.
* **Error Minimization**: The goal of curve fitting: $\\min F(a)$ where $F$ is the squared error.
* **Error of Interpolation**: For the Lagrange interpolation: $f(x) - L_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$ for some $\\xi \\in [x_0, x_n]$.
* **Error Term of Integration**: Indicates how the numerical approximation differs from the exact integral.
* **Euclidean Norm**: Defined as $\\|x\\|_2 = \\sqrt{\\sum_{i=1}^n x_i^2}$, also known as the 2-norm.
* **Euler's Method**: A first-order numerical method for solving ordinary differential equations: $z_{i+1} = z_i + h f(t_i, z_i)$.
* **Exponential Curve Fitting**: Fitting a model of the form $y = be^{ax}$ to data.

---

### F

* **False Position Method**: Also known as Regula Falsi, uses secant lines to find successive approximations to the root.
* **Fixed Point**: A number $p$ is a fixed point of $g$ if $g(p) = p$.
* **Fixed-Point Iteration**: A method where a sequence $p_{k+1} = g(p_k)$ is generated to approximate a solution $p$ such that $g(p) = p$.
* **Floating Point Arithmetic**: A method of representing real numbers in computers by using a fixed number of bits to store the sign, exponent, and mantissa (significand).
* **Forward Difference**: Defined as $f'(x) \\approx \\frac{f(x+h) - f(x)}{h}$.
* **Forward Substitution**: A method to solve $Ly = b$ where $L$ is a lower triangular matrix.

---

### G

* **Gauss–Jordan Elimination**: An elimination method that reduces the coefficient matrix to the identity matrix, solving $A x = b$ and $A^{-1}$.
* **Gauss–Seidel Iteration**: An iterative method for solving linear systems using updated values as soon as they are available during the iteration.
* **Gauss–Seidel Matrix**: In Gauss–Seidel, $T_G = -(D+L)^{-1}U$.
* **Gaussian Elimination**: A method for solving linear systems by transforming the coefficient matrix into upper triangular form.
* **Gaussian Normal Equations**: The system of equations obtained by setting the gradient of the least squares error to zero.
* **Gaussian Quadrature**: A numerical integration method that approximates $\\int_{-1}^{1} f(x) \\, dx$ using optimally chosen points and weights.
* **Global Error**: The difference between the numerical solution and the exact solution at a mesh point.
* **Global Minimum**: A point where the function attains its lowest value over the entire domain.
* **Golden Section Search Method**: A technique for finding the extremum of a unimodal function by narrowing the range of values inside the domain and comparing function values.
* **Gradient**: The vector of first partial derivatives of a multivariable function: $f'(x)$.
* **Gradient Method**: An iterative optimization method based on the gradient of the objective function.
* **Gradient Vector**: A vector containing all first-order partial derivatives of a scalar-valued function.

---

### H

* **Hermite Interpolation**: Interpolates both function values and derivatives at given points.
* **Hermite Polynomial**: A polynomial used in Hermite interpolation that incorporates both function and derivative values at mesh points.
* **Hessian Matrix**: A square matrix of second-order partial derivatives of a scalar-valued function.
* **Heun's Method**: A second-order method: $z_{i+1} = z_i + \\frac{h}{4}(f(t_i, z_i) + 3f(t_i + \\frac{2h}{3}, z_i + \\frac{2h}{3} f(t_i, z_i)))$.
* **Hilbert Matrix**: An example of an ill-conditioned matrix: $H_n = \\left[ \\frac{1}{i+j-1} \\right]$.
* **Horner’s Method**: An efficient algorithm for polynomial evaluation that reduces the number of multiplications and additions required by using nested multiplication.

---

### I

* **Ill-conditioned Matrix**: A matrix for which small changes in input cause large changes in the solution; has a large condition number.
* **Initial Value Problem (IVP)**: A differential equation along with a specified value, called the initial condition, which the solution must satisfy: $y' = f(t, y),\\ y(t_0) = y_0$.
* **Intermediate Value Theorem**: If $f \\in C[a, b]$ and $f(a) \\neq f(b)$, then for any $d$ in between $f(a)$ and $f(b)$, there exists $c \\in (a, b)$ such that $f(c) = d$.
* **Interpolation**: The process of finding a function of certain property whose graph goes through the given data points.
* **Interpolation Error**: The error between the interpolated value and the actual function value.
* **Inverse Matrix**: A matrix $A^{-1}$ such that $A A^{-1} = I$, exists only for square and non-singular matrices.
* **Iterative Method**: A procedure that generates successive approximations to the solution of a system, such as Jacobi or Gauss-Seidel methods.

---

### J

* **Jacobi Iteration**: A method for solving linear systems where each variable is solved using values from the previous iteration.
* **Jacobi Matrix**: In Jacobi iteration, $T_J = -D^{-1}(L + U)$.
* **Jacobian Matrix**: A matrix of all first-order partial derivatives of a vector-valued and vector-variable function.

---

### L

* **Lagrange Basis Polynomial**: Defined as $l_k(x) = \\prod_{j=0,j\\neq k}^n \\frac{x - x_j}{x_k - x_j}$, used in Lagrange interpolation.
* **Lagrange Form**: The Lagrange interpolating polynomial in the form $L_n(x) = \\sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange Interpolating Polynomial**: A polynomial $L_n(x)$ of degree at most $n$ that passes through $n+1$ given data points.
* **Lagrange Polynomial**: Defined as $L_n(x) = \\sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange's Mean Value Theorem**: If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $f'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a, b)$.
* **Least Squares Error**: The error function $F(a) = \\sum_{i=0}^n (g(x_i;a) - y_i)^2$ minimized in the method of least squares.
* **Least Squares Method**: A technique to approximate the solution of overdetermined systems by minimizing the sum of the squares of the residuals.
* **Legendre Polynomials**: A sequence of orthogonal polynomials $P_n(x)$ defined on $[-1, 1]$, used in Gaussian quadrature.
* **Length of a Vector**: The norm of the vector, denoted $\\|x\\|$, typically the Euclidean norm.
* **Line Fitting**: Fitting a linear function $g(x) = ax + b$ to a set of data points.
* **Linear Convergence**: Convergence with order $\\alpha = 1$ and constant $0 < c < 1$.
* **Linear Fixed-Point Equation**: A linear system of the form $x = T x + c$.
* **Linear Fixed-Point Iteration**: An iterative process of the form $x^{(k+1)} = T x^{(k)} + c$ for solving linear fixed-point equations.
* **Linear System**: A set of equations of the form $A \\mathbf{x} = \\mathbf{b}$, where $A$ is a matrix, $\\mathbf{x}$ a vector of variables, and $\\mathbf{b}$ a vector of constants.
* **Linearization**: Transforming a nonlinear model into a linear one using logarithms.
* **Lipschitz Continuity**: A function $g$ is Lipschitz continuous if $|g(x) - g(y)| \\leq c|x - y|$ for all $x, y$.
* **Local Minimum**: A point where the function value is lower than nearby points, but not necessarily global.
* **Local Truncation Error**: The error made in a single step of a numerical method, e.g. in Euler's method: $\\tau_{i+1} = \\frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$.
* **Loss of Significance**: A problem that occurs when subtracting nearly equal numbers, causing significant digits to be lost due to rounding, thus reducing precision.
* **LU Decomposition**: Decomposes matrix $A$ as $A = LU$, where $L$ is lower triangular where the diagonal consists of 1s and $U$ is upper triangular.
[Image showing the LU decomposition of a matrix into Lower and Upper triangular parts]

---

### M

* **m-order Recursion**: A recursion of the form $p_{k+1} = h(p_k, p_{k-1}, \\dots, p_{k-m+1})$, defined with $m$ initial values.
* **Machine Epsilon**: The smallest number $\\varepsilon$ such that $1 + \\varepsilon > 1$ in the floating point arithmetic system. It indicates the precision of the system.
* **Machine Number**: A number that can be represented exactly in a computer's floating point system. Other numbers are approximated by the nearest machine number.
* **Matrix**: A rectangular array of numbers or functions arranged in rows and columns.
* **Matrix Factorization**: The decomposition of a matrix into a product of matrices with specific properties.
* **Matrix Norm**: The norm of a matrix $A$ generated by a vector norm $\\|\\cdot\\|$ is defined by $\\|A\\|=\\sup_{x\\neq0}\\frac{\\|Ax\\|}{ \\|x\\|}$.
* **Mesh Points**: A sequence of points $x_0, x_1, \\ldots, x_n$ used in interpolation or numerical methods to define intervals.
* **Midpoint Method**: A second-order Runge–Kutta method: $z_{i+1} = z_i + h f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2} f(t_i, z_i))$.
* **Model Function**: The function $g(x;a)$ used to approximate the observed data.
* **Modified Euler Method**: A second-order method: $z_{i+1} = z_i + \\frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + h f(t_i, z_i)))$.

---

### N

* **Natural Spline**: A cubic spline where the second derivative at the endpoints is zero: $S''(x_0) = S''(x_n) = 0$.
* **Nelder-Mead Method**: A simplex-based direct search method that uses reflection, expansion, contraction, and shrinking.
* **Neumann Series**: A geometric series of matrices: $I + A + A^2 + \\cdots$, which converges if $\\rho(A) < 1$.
* **Newton Polynomial**: The Lagrange interpolating polynomial expressed in terms of divided differences.
* **Newton–Cotes Formula**: A family of quadrature formulas for numerical integration where the weights are the integrals of the basis Lagrange polynomials.
* **Newton's Method (Optimization)**: Uses both gradient and Hessian to find a local minimum of a function.
* **Newton’s Form**: The Lagrange interpolating polynomial written as $L_n(x) = f[x_0] + f[x_0,x_1](x - x_0) + \\ldots + f[x_0,\\ldots,x_n](x - x_0)(x - x_1)\\ldots(x - x_{n-1})$.
* **Newton’s Interpolation**: Uses divided differences to construct interpolating polynomial incrementally.
* **Newton’s Method (Roots)**: An iteration of the form $p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$ to find roots of $f(x) = 0$.
* **Non-Singular Matrix**: A square matrix which is invertible, i.e., has non-zero determinant.
* **Numerical Analysis**: The field of mathematics that seeks exact or approximate solutions to mathematical problems using arithmetic operations like addition, subtraction, multiplication, and division.
* **Numerical Differentiation**: The process of estimating the derivative of a function using discrete data points.
* **Numerical Integration**: The process of approximating the definite integral of a function using numerical methods.

---

### O

* **Order of a Method**: A method is of order $p$ if the global error is $\\mathcal{O}(h^p)$.
* **Order of Convergence**: If $|p_{k+1} - p| \\leq c|p_k - p|^\\alpha$, then $\\alpha$ is the order of convergence.
* **Orthogonal Functions**: Functions $f$ and $g$ are orthogonal on $[a, b]$ if $\\int_a^b f(x)g(x)dx = 0$.
* **Overflow**: Occurs when a number exceeds the maximum representable value in the floating point system.

---

### P

* **Parameter Estimation**: The process of determining optimal values $a, b, \\ldots$ in the fitting function.
* **Partial Pivoting**: Technique used in Gaussian elimination to improve numerical stability by swapping rows based on the largest pivot element.
* **Permutation Matrix**: A matrix $P$ used to record row swaps in LU decomposition with pivoting: $PA = LU$.
* **Perturbed System**: A system $\\tilde{A}\\tilde{x} = \\tilde{b}$ differing slightly from the original $Ax=b$.
* **Piecewise Polynomial**: A function composed of polynomial segments on subintervals.
* **Pivot Element**: The element $a_{kk}$ used during the $k$-th step of Gaussian elimination to eliminate variables below the diagonal.
* **Pivoting**: A technique used during LU decomposition to improve numerical stability by row swapping.
* **Polynomial Curve Fitting**: Fitting a polynomial $g(x) = a_mx^m + \\ldots + a_0$ to a dataset.
* **Positive Definite Matrix**: A symmetric matrix $A$ such that $x^T A x > 0$ for all non-zero vectors $x$.
* **Power Function Fitting**: Fitting a model $y = bx^a$ to data using logarithmic transformation.
* **Principal Minor**: The determinant of a principal submatrix of $A$, used in determining definiteness of a matrix.
* **PSB Update**: The Powell–Symmetric–Broyden update formula used in quasi-Newton optimization.

---

### Q

* **Quadratic Convergence**: Convergence with order $\\alpha = 2$; error squared at each step.
* **Quadrature Formula**: A formula $\\sum_{k=0}^n c_k f(x_k)$ for approximating the definite integral $\\int_a^b f(x) dx$.
* **Quasi Newton-Method**: An iterative method to find the roots of a function using an approximate Jacobian matrix.
* **Quasi-Newton Method (Optimization)**: Approximates the Hessian matrix to reduce computational cost.

---

### R

* **Relative Error**: The ratio of the absolute error to the true value: $\\frac{|x-\\tilde x|}{|x|}$. It measures the size of the error in relation to the size of the quantity being measured.
* **Residual**: The difference $g(x_i;a) - y_i$ between the model prediction and observed data.
* **Residual Vector**: Given an approximate solution $\\tilde{x}$ of a linear system $Ax=b$, the residual is $r = b - A\\tilde{x}$.
* **Richardson Extrapolation**: A method to improve the accuracy of a numerical approximation by combining estimates with different step sizes.
* **Root of Multiplicity m**: A root $p$ such that $f(x) = (x - p)^m q(x)$, where $q(p) \\neq 0$.
* **Rounding**: A method of approximation where a number is replaced by the nearest representable value.
* **Rounding Error**: Error arising from the finite precision with which computers store real numbers. It accumulates through computations and affects the accuracy of results.
* **Runge–Kutta Method**: A family of iterative methods, including the classical fourth-order method: $z_{i+1} = z_i + \\frac{h}{6}(w_1 + 2w_2 + 2w_3 + w_4)$.

---

### S

* **Search Direction**: The direction in which a new iterate is calculated during optimization.
* **Secant Method**: Root finding using $p_{k+1} = p_k - \\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$, avoiding the derivative.
* **Simplex**: A geometric figure consisting of $n+1$ points in $n$-dimensional space.
* **Simplex Method**: An optimization technique that moves and reshapes the simplex to locate the minimum.
* **Simpson's Rule**: Approximates $\\int_a^b f(x) dx$ using $\\frac h3\\Bigl(f(x_0)+4f(x_1)+f(x_2)\\Bigr)$.
* **Simultaneous Linear System**: A sequence of linear systems where the coefficient matrices are equal, i.e., equations of the form $A x = b^{(i)},\\ i=1,\\ldots,m$.
* **Single Precision**: A 32-bit floating point representation conforming to IEEE 754, offering about 7 decimal digits of precision.
* **Singular Matrix**: A matrix that is not invertible, i.e., it has determinant zero.
* **Space Complexity**: The amount of memory storage needed in the worst case at any point in an algorithm.
* **Spectral Condition Number**: Defined as $\\rho(A)\\rho(A^{-1})$, a lower bound for $\\text{cond}(A)$.
* **Spectral Radius**: Defined as $\\rho(A) := \\max\\{ |\\lambda| : \\lambda \\text{ is an eigenvalue of } A \\}$.
* **Spline Interpolation**: Piecewise-defined polynomials that ensure smoothness at the joints of intervals, often cubic splines are used.
* **Stability**: The method is stable if small perturbations in data result in small errors.
* **Stability (of Algorithm)**: An algorithm is said to be stable if small changes in input or rounding errors do not cause large changes in the output.
* **Stability (of Mathematical Problem)**: A mathematical problem is stable (well-conditioned) if small changes in input result in small changes in the output. Otherwise, it is ill-conditioned.
* **Stationary Point**: A point $x^*$ where the gradient $f'(x^*) = 0$.
* **Steepest Descent Method**: An iterative optimization method using the negative gradient direction.
* **Step Size (h)**: The distance between two mesh points in time: $h = t_{i+1} - t_i$.
* **Stopping conditions**: Conditions like $|p_k - p_{k-1}| < \\varepsilon_1$, $\\frac{|p_k - p_{k-1}|}{|p_k|} < \\varepsilon_2$, or $|f(p_k)| < \\varepsilon_3$ used to stop iteration.
* **Stopping Criteria**: Conditions like $\\|x^{(k+1)} - x^{(k)}\\| < \\varepsilon$ to end iteration.
* **Strictly Lower Triangular Matrix**: A matrix where all diagonal and upper triangular entries are zero.
* **Sum of Squares**: The function $F(a) = \\sum (g(x_i;a) - y_i)^2$ representing total squared error.

---

### T

* **Taylor's Method**: A method using higher derivatives for better accuracy. Second-order Taylor: $z_{i+1} = z_i + h f(t_i, z_i) + \\frac{h^2}{2} f^{(1)}(t_i, z_i)$.
* **Taylor's polynomial**: The Taylor's polynomial of degree $n$ of a real function $f$ at $p_0$ is defined by $T_n(x)=f(p_0)+f'(p_0)(x-p_0)+\\frac{f''(p_0)}2(x-p_0)^2+\\cdots+\\frac{f^{(n)}(p_0)}{n!}(x-p_0)^n$.
* **Taylor’s Theorem**: Provides polynomial approximation: $f(x) = T_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)^{n+1}$.
* **Time Complexity**: A measure of the number of steps or arithmetic operations required by an algorithm.
* **Trapezoidal Rule**: Approximates $\\int_a^b f(x) dx$ using $\\frac{h}{2} (f(a) + f(b))$.
* **Triangle Inequality**: States that $\\|x + y\\| \\leq \\|x\\| + \\|y\\|$ for any vectors $x$ and $y$.
* **Triangular Matrix**: A matrix where all elements above (or below) the main diagonal are zero.
* **Triangular System**: A system where the coefficient matrix is either lower or upper triangular.
* **Tridiagonal Matrix**: A matrix where non-zero entries appear only on the main diagonal and the first diagonals above and below it.
* **Truncation Error**: The error that occurs when an exact mathematical expression is replaced with an approximate formula, such as using a Taylor polynomial instead of the function.

---

### U

* **Underflow**: Occurs when a number is closer to zero than the smallest positive representable number, resulting in a stored value of zero.
* **Unequally Spaced Points**: Points for which the distance between them varies.
* **Unimodal Function**: A function that has a single minimum (or maximum) in a given interval.
* **Unit Lower Triangular Matrix**: A lower triangular matrix with 1s on the diagonal.
* **Upper Triangular Matrix**: A matrix with all entries below the main diagonal equal to zero.

---

### V

* **Vector Norm**: A function $\\|x\\|$ that assigns a non-negative scalar to a vector, representing its length.

---

### W

* **Well-Conditioned Matrix**: A matrix where small changes in input result in small changes in the solution of the corresponding linear system; has a small condition number.

`;function U(){const{t:n,lang:a}=_();return e.jsxs("div",{className:"practice",children:[e.jsxs("header",{className:"practice__hero",children:[e.jsx("p",{className:"practice__kicker",children:a==="hu"?"Gyakorlat":"Practice"}),e.jsx("h1",{children:a==="hu"?"Vizsgafelkészülés":"Exam preparation"}),e.jsx("p",{className:"practice__lead",children:a==="hu"?"Vizsga-puskák, kidolgozott példák és fogalomtár egy helyen.":"Exam cheatsheets, worked examples and a glossary in one place."}),e.jsxs("nav",{className:"practice__toc",children:[e.jsx("a",{href:"#cheatsheets",children:a==="hu"?"Puskák":"Cheatsheets"}),e.jsx("a",{href:"#examples",children:a==="hu"?"Kidolgozott példák":"Worked examples"}),e.jsx("a",{href:"#glossary",children:a==="hu"?"Fogalomtár":"Glossary"})]})]}),e.jsxs("section",{className:"practice__section",id:"cheatsheets",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📌 Vizsga-puskák (must-know)":"📌 Exam cheatsheets (must-know)"}),P.map((i,t)=>e.jsxs("details",{className:"practice__example",open:!0,children:[e.jsx("summary",{children:`${t+1}. ${n(i.title)}`}),e.jsx(m,{markdown:n(i.body)})]},t))]}),e.jsxs("section",{className:"practice__section",id:"examples",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📝 Kidolgozott példák":"📝 Worked examples"}),L.map((i,t)=>e.jsxs("div",{className:"practice__topic",children:[e.jsx("h3",{className:"practice__topic-title",children:n(i.title)}),i.items.map((r,l)=>e.jsxs("details",{className:"practice__example",children:[e.jsx("summary",{children:n(r.label)}),e.jsx(m,{markdown:n(r.body)})]},l))]},t))]}),e.jsxs("section",{className:"practice__section",id:"glossary",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📖 Fogalomtár":"📖 Glossary"}),e.jsxs("details",{className:"practice__example",children:[e.jsx("summary",{children:a==="hu"?"Numerikus analízis fogalomtár (A–Z)":"Numerical analysis glossary (A–Z)"}),e.jsx(m,{markdown:N})]})]})]})}export{U as default};
