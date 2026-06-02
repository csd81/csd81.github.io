# Part II — Algebra and Geometry of Matrices

Up to now, we have only considered matrices as simple notation, which is used to store the coefficients of a system of equations, and to simplify calculations while solving a system of equations. We will begin this part by extending operations between numbers to tables of numbers, then we will apply these to matrices, and examine their algebraic properties. With the help of these operations, we will re-examine the solvability of systems of equations and the question of calculating the solutions. The "arithmetic" chapters of matrices are followed by the "geometric" ones: the determinant, as a signed measure assigned to a square matrix, and then the geometry of matrix mappings will be the subject of this part.

*Enter The Matrix – 3D picture (CC) on flickr by Grégory Tonon*

# 4. Definitions of Matrix Operations

We will obtain powerful tools for solving and examining systems of equations by introducing matrix operations. These operations play an important role in countless other applications, which we will encounter everywhere in the remainder of the book.

## Operations with tables - operations with matrices

*Operations between real numbers can naturally be extended to operations with matrices. We will arrive at their definitions through the extension of everyday applications of addition and multiplication to tables.*

A *table* is an arrangement of numerical data in a rectangular shape in rows and columns. Before the rows and above the columns there can be a *header*, which contains some information describing the data of the given row or column (for example, the common unit of measure of the numerical data in the column).

> We can also view a matrix as what we get from a table during such an abstraction, in which we strip it of its headers, and from the data we only keep the numbers, ignoring their meaning and unit of measure.

### Addition of tables and multiplication by a scalar

The operation of addition can be naturally extended to tables containing numerical data. If there are red and green apples and grapes in two fruit baskets according to the following tables, then after pouring them together their number can be calculated like this:

| | apple (pcs) | grape (bunch) |
|---|---|---|
| *red* | 3 | 2 |
| *green* | 2 | 1 |

$+$

| | apple (pcs) | grape (bunch) |
|---|---|---|
| *red* | 2 | 2 |
| *green* | 0 | 1 |

$=$

| | apple (pcs) | grape (bunch) |
|---|---|---|
| *red* | 5 | 4 |
| *green* | 2 | 2 |

One possible way of adding tables of the same size and the same header is by forming the sum by adding the elements in the same positions.

There are 2 apples on the table. If we triple their number, we multiply a number without a unit of measure (3) with one having a unit of measure (2 pieces), and the unit of measure of the result is this too. We can also do this with the whole content of a basket:

$3 \cdot$

| | apple (pcs) | grape (bunch) |
|---|---|---|
| *red* | 3 | 2 |
| *green* | 2 | 1 |

$=$

| | apple (pcs) | grape (bunch) |
|---|---|---|
| *red* | 9 | 6 |
| *green* | 6 | 3 |

### Multiplication of tables

The energy content of one portion (from now on always 10 dkg) of apple is 30 kcal. We again get the energy content of 5 portions by multiplication - now both quantities have units of measure:
$$5\,\text{portion} \cdot 30\,\frac{\text{kcal}}{\text{portion}} = 150\,\text{kcal}.$$
From several fruits (apple, banana, orange) we make several types (A, B, C) of fruit salads, and we examine their carbohydrate and energy content. Into one of the two tables we write the composition of the fruit salads, into the other the carbohydrate and energy content of the ingredients. In both tables, the items whose composition/ingredients we detail go into the rows, and the ingredients go into the columns.

| | Apple (portion) | Banana (portion) | Orange (portion) |
|---|---|---|---|
| *A* | 5 | 1 | 4 |
| *B* | 4 | 4 | 2 |
| *C* | 4 | 2 | 4 |

| | Carbohydrate (g/portion) | Energy (kcal/portion) |
|---|---|---|
| *Apple* | 7 | 30 |
| *Banana* | 24 | 105 |
| *Orange* | 8 | 40 |

We can calculate the energy content of salad A in the following way:
$$5\,\text{portion} \cdot 30\,\frac{\text{kcal}}{\text{portion}} + 1\,\text{portion} \cdot 105\,\frac{\text{kcal}}{\text{portion}} + 4\,\text{portion} \cdot 40\,\frac{\text{kcal}}{\text{portion}} = 415\,\text{kcal},$$
that is, we had to take the scalar product of one row of the first table and one column of the second table. Let's perform these calculations for the carbohydrate and energy content of all three fruit salads as well, and put the result again into a table whose rows contain the detailed items (salad A, B, C), and its columns the content ingredients (carbohydrate, energy content).

| | Carbohydrate (g) | Energy (kcal) |
|---|---|---|
| *A* | 91 | 415 |
| *B* | 140 | 620 |
| *C* | 108 | 490 |

For the sake of transparency, we placed the two matrices to be multiplied together and the result aligned to their headers (the second factor is the content table, the first is the salad composition, the result is the summary per salad):

| | Carbohydrate (g/portion) | Energy (kcal/portion) |
|---|---|---|
| *Apple* | 7 | 30 |
| *Banana* | 24 | 105 |
| *Orange* | 8 | 40 |

| | Apple (portion) | Banana (portion) | Orange (portion) | | Carbohydrate (g) | Energy (kcal) |
|---|---|---|---|---|---|---|
| *A* | 5 | 1 | 4 | | 91 | 415 |
| *B* | 4 | 4 | 2 | | 140 | 620 |
| *C* | 4 | 2 | 4 | | 108 | 490 |

> We highlighted the calculation of the energy content of salad A. It is also worth observing that if we are only interested in fruit salads A and C, it is enough to drop the second row of the first table and the final result, similarly if we only observe the energy content, it is enough to keep the second column of the second table and the final result. It also appears that the number of columns of the first table and the number of rows of the second table are equal. In general, it is true that (not counting the headers) an $m \times n$ table can only be multiplied together with a $p \times k$ table where $p = n$, and the result will be $m \times k$.

### Composition of linear substitutions

Several fundamental concepts of linear algebra can be formulated in the language of linear substitution.

**Definition 4.1 (Linear substitution).** *We speak of linear substitution when we equate a set of variables with linear expressions of other variables (we substitute them with these linear expressions).*

**Example 4.2 (Composition of linear substitutions).** *Consider the following two linear substitutions:*
$$\begin{aligned} a &= 5x + y + 4z \\ b &= 4x + 4y + 2z \\ c &= 4x + 2y + 4z \end{aligned} \quad \text{and} \quad \begin{aligned} x &= 7s + 30k \\ y &= 24s + 105k \\ z &= 8s + 40k \end{aligned} \tag{4.1}$$
*Write down the equations of the linear substitution obtained by performing the two substitutions one after the other, i.e., by their* composition*!*

*Solution.* An elementary calculation shows that the consecutive execution (composition) of the two linear substitutions gives the linear substitution
$$\begin{aligned} a &= 91s + 415k \\ b &= 140s + 620k \\ c &= 108s + 490k \end{aligned}$$
Note that if we also describe the two linear substitutions with tables, where we write the name of the variable we substitute in the row headers, and what we substitute it with in the columns, the operation of composition can be calculated by the product of these two tables. (The fact that the numerical data is identical to those in the previous example is not a coincidence.) $\square$

| | $s$ | $k$ |
|---|---|---|
| $x$ | 7 | 30 |
| $y$ | 24 | 105 |
| $z$ | 8 | 40 |

| | $x$ | $y$ | $z$ | | $s$ | $k$ |
|---|---|---|---|---|---|---|
| $a$ | 5 | 1 | 4 | | 91 | 415 |
| $b$ | 4 | 4 | 2 | | 140 | 620 |
| $c$ | 4 | 2 | 4 | | 108 | 490 |

### Elementwise matrix operations

We define the addition and multiplication of matrices by a scalar based on what we saw with tables.

For matrix operations, we need the elements of the matrix to come from a structure in which the required operations can be performed. Let $S$ be an arbitrary set (e.g. $S = \mathbb{R}, \mathbb{Q}, \mathbb{N}, \mathbb{Z}\ldots$). The set of all $m \times n$ matrices formed from the elements of $S$ is denoted by
$$S^{m \times n} \quad \text{or} \quad \mathrm{M}_{m \times n}[S].$$
We say that $S^{m \times n}$ ($\mathrm{M}_{m \times n}[S]$) is the *space of matrices* of type $m \times n$ over $S$. For example, the matrix $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ is an element of all the spaces $\mathbb{N}^{2 \times 2}$, $\mathbb{Z}^{2 \times 2}$, $\mathbb{Q}^{2 \times 2}$, $\mathbb{R}^{2 \times 2}$.

Two matrices are considered *equal* if they are of the same type and the elements with identical indices are equal. For example, the equality $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & x \end{bmatrix}$ holds exactly when $x = 4$. Written in the form of a row or column vector, a vector as a matrix are not equal to each other. For example
$$\begin{bmatrix} 1 & 2 \end{bmatrix} \neq \begin{bmatrix} 1 \\ 2 \end{bmatrix},$$
because they are not of the same type.

A matrix is *square* if its number of rows and columns are the same. The elements of the *main diagonal* of matrix $\mathbf{A}$ are $a_{11}$, $a_{22}$, $a_{33}, \ldots$ This can be interpreted not only for square matrices. A square matrix whose elements outside the main diagonal are all zeros is called a *diagonal matrix*. We use the diag function for a simple specification of such matrices, where the elements of the main diagonal are listed in its argument. For example
$$\operatorname{diag}(1, 2, 3) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}.$$

We begin familiarizing ourselves with matrix operations with those that can be performed elementwise.

**Definition 4.3 (Sum and difference of matrices).** *By the sum of matrices $\mathbf{A} = [a_{ij}]$ and $\mathbf{B} = [b_{ij}]$ of type $m \times n$, we mean the matrix, also of type $m \times n$, denoted by $\mathbf{A} + \mathbf{B}$, whose $j$-th element in its $i$-th row is $a_{ij} + b_{ij}$, where $i = 1, \ldots, m$, $j = 1, \ldots, n$. In formula:*
$$\mathbf{A} + \mathbf{B} = [a_{ij}] + [b_{ij}] := [a_{ij} + b_{ij}].$$
*The difference of $\mathbf{A}$ and $\mathbf{B}$ can be defined similarly, i.e., $\mathbf{A} - \mathbf{B} := [a_{ij} - b_{ij}]$.*

For example
$$\begin{bmatrix} 0 & 2 & 4 \\ 1 & 3 & 5 \end{bmatrix} + \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 4 \\ 1 & 4 & 5 \end{bmatrix}, \quad \begin{bmatrix} 2 \\ 3 \end{bmatrix} - \begin{bmatrix} 3 \\ 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \end{bmatrix}.$$

*Figure 4.1. Specifying a matrix, querying its elements, rows, and columns and their number in matrix-based languages.*

```octave
OCTAVE  a = [1 2 3
>            4 5 7]
a =
   1   2   3
   4   5   7
OCTAVE  b = [1 2;3 4]
b =
   1   2
   3   4
OCTAVE  diag([1,2,3])
ans =
   1   0   0
   0   2   0
   0   0   3
OCTAVE  a(2,3)
ans = 7
OCTAVE  a(2,:)
ans =
   4   5   7
OCTAVE  a(:,3)
ans =
   3
   7
OCTAVE  v = [1 2 3]
v =
   1   2   3
OCTAVE  w = [1;2;3]
w =
   1
   2
   3
OCTAVE  size(v)
ans =
   1   3
OCTAVE  size(w)
ans =
   3   1
```

> In matrix-based languages, an elementwise operation between matrices can be defined with a dot before the operation sign. Thus, the elementwise product of matrices `A` and `B` can be obtained with the command `A .* B`. Accordingly, the codes `A .+ B` and `A + B` are equivalent in terms of the result.

**Definition 4.4 (Zero matrix).** *Matrices consisting entirely of zeros are called zero matrices. The $m \times n$ zero matrix is denoted by $\mathbf{O}_{m \times n}$, while the $n \times n$ square zero matrix is denoted by $\mathbf{O}_n$.*

Adding a zero matrix of the same type to an arbitrary matrix $\mathbf{A}$, we get $\mathbf{A}$, i.e., $\mathbf{A} + \mathbf{O} = \mathbf{O} + \mathbf{A} = \mathbf{A}$.

**Definition 4.5 (Multiplication of a matrix by a scalar).** *By the product of an $m \times n$ type matrix $\mathbf{A} = [a_{ij}]$ formed with a number $c$, we mean the matrix, also of type $m \times n$, denoted by $c\mathbf{A}$, for which*
$$c\mathbf{A} = c[a_{ij}] := [ca_{ij}].$$

We call the matrix denoted by $-\mathbf{A}$ the *opposite* of matrix $\mathbf{A}$, for which $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}$. It can easily be shown that there is only one such matrix, namely $-\mathbf{A} = (-1)\mathbf{A}$.

Other elementwise operations can also be defined on matrices of the same size. As an interesting example, we show an operation from the field of digital image processing, where the data of an image divided into picture elements (pixels) is stored in matrices. The matrix in Figure 4.2 is the 9 grayscale image of the male face below it, on which the background can be changed with a simple elementwise operation (details in exercise 4.6).

Similar to vectors, the operation of multiplication by a scalar and addition allows us to define the concepts of *linear combination*, *linear independence*, and *linear dependence* for matrices as well.

**Example 4.6 (Linear combination of matrices).** *Calculate the linear combination*
$$2\begin{bmatrix} 0 & 1 \\ 2 & 1 \\ 0 & -1 \end{bmatrix} - 3\begin{bmatrix} 1 & 0 \\ -1 & -2 \\ -1 & 0 \end{bmatrix}.$$
*!*

*Solution.* Performing the multiplications by a scalar and then the addition
$$2\begin{bmatrix} 0 & 1 \\ 2 & 1 \\ 0 & -1 \end{bmatrix} - 3\begin{bmatrix} 1 & 0 \\ -1 & -2 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 2 \\ 4 & 2 \\ 0 & -2 \end{bmatrix} + \begin{bmatrix} -3 & 0 \\ 3 & 6 \\ 3 & 0 \end{bmatrix} = \begin{bmatrix} -3 & 2 \\ 7 & 8 \\ 3 & -2 \end{bmatrix}.$$
The operations can of course also be performed elementwise, e.g. the first element of the second row can be obtained like this: $2 \cdot 2 - 3 \cdot (-1) = 7$. $\square$

Matrices behave similarly to vectors with respect to addition and multiplication by a scalar. The $m \times n$ matrices in $\mathbb{R}^{m \times n}$ behave like vectors in $\mathbb{R}^{mn}$ with respect to these two operations. We can therefore say that the matrices of $\mathbb{R}^{m \times n}$ form an $mn$-dimensional *vector space*. See e.g. exercises 4.7 and 4.8 about this.

*Figure 4.2. An elementwise matrix operation in image processing (an operation performed on the pixel matrix of a grayscale portrait).*

### Matrix multiplication

It follows the rule seen in the multiplication of tables and the composition of linear substitutions for the definition of the multiplication of matrices.

**Definition 4.7 (Multiplication of matrices).** *By the product of an $m \times t$ matrix $\mathbf{A}$ and a $t \times n$ matrix $\mathbf{B}$, we mean the $m \times n$ matrix $\mathbf{C}$ denoted by $\mathbf{AB}$, whose element in the $i$-th row and $j$-th column is*
$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \ldots + a_{ik}b_{kj} + \ldots + a_{it}b_{tj}.$$

*Figure. The element $c_{ij}$ is the scalar product of the $i$-th row of $\mathbf{A}$ $(a_{i1}, a_{i2}, \ldots, a_{it})$ and the $j$-th column of $\mathbf{B}$ $(b_{1j}, b_{2j}, \ldots, b_{tj})$.*

The relationship in the definition can be expressed in several ways. Written with a sum:
$$c_{ij} = \sum_{k=1}^{t} a_{ik}b_{kj},$$
but we can also say that $c_{ij}$ is the scalar product of the $i$-th row of matrix $\mathbf{A}$ and the $j$-th column of matrix $\mathbf{B}$, i.e.
$$c_{ij} = \mathbf{a}_{i*} \cdot \mathbf{b}_{*j}.$$
An $m \times s$ matrix $\mathbf{A}$ and a $t \times n$ matrix $\mathbf{B}$ can only be multiplied together if $s = t$, and then the product is of type $m \times n$.

*Figure. The product of an $m \times s$ type $\mathbf{A}$ and a $t \times n$ type $\mathbf{B}$ – provided that $s = t$ – is of type $m \times n$.*

The order of the factors is important. It is possible that the multiplication $\mathbf{AB}$ can be performed, but $\mathbf{BA}$ cannot, and it is possible that it can be performed, but we get a different result (see exercise 4.10). Since matrix multiplication is not commutative, if necessary, we differentiate between the products $\mathbf{BA}$ and $\mathbf{AB}$ with the expressions "we multiply $\mathbf{A}$ from the left by $\mathbf{B}$", or "we multiply $\mathbf{A}$ from the right by $\mathbf{B}$".

**Example 4.8 (Multiplication of matrices).** *Let*
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix}$$
*Calculate the element $(\mathbf{AB})_{21}$, and then the matrix $\mathbf{AB}$.*

*Solution.* The first element of the second row of the product is the scalar product of the second row of $\mathbf{A}$ and the first column of $\mathbf{B}$:
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} * & * & * \\ 4 & * & * \\ * & * & * \end{bmatrix}$$
Calculating the other elements similarly
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 3 & 2 & 2 \\ 4 & 3 & 4 \\ 6 & 3 & 0 \end{bmatrix}. \qquad \square$$

### Operations with block matrices

Operations performed with huge matrices can be parallelized, and memory management also becomes more efficient if we divide the matrices into blocks, and perform the operations with these smaller submatrices.

If we divide a matrix into submatrices with horizontal and vertical lines, we say that this matrix is a *block matrix* formed from the submatrices - otherwise known as blocks. The rows and columns of a block matrix are called the *block rows* and *block columns* of the matrix.

The augmented matrix $[\mathbf{A}|\mathbf{b}]$ of a system of equations is a block matrix consisting of two blocks. The following example shows the reduced row echelon form of the augmented matrix of a system of equations consisting of 5 variables and 5 equations, where the first block column corresponds to the bound variables, the second to the free variables, the third to the right side of the system of equations, and the second block row contains the zero rows.[^6]
$$\left[\begin{array}{ccc|cc|c} 1 & 0 & 0 & 1 & 2 & 4 \\ 0 & 1 & 0 & 2 & 0 & 3 \\ 0 & 0 & 1 & 1 & 0 & 3 \\ \hline 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] = \begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} & \mathbf{B}_{13} \\ \mathbf{B}_{21} & \mathbf{B}_{22} & \mathbf{B}_{23} \end{bmatrix}.$$

[^6]: *The name* hypermatrix *is also used in the literature for block matrices. We avoid this terminology because of the other meaning of hypermatrix - as a multidimensional array.*

**Proposition 4.9 (Operations with block matrices).** *The multiplication of block matrices by a scalar and the addition of two identically partitioned block matrices can also be performed block by block, i.e.*
$$c[\mathbf{A}_{ij}] := [c\mathbf{A}_{ij}], \qquad [\mathbf{A}_{ij}] + [\mathbf{B}_{ij}] := [\mathbf{A}_{ij} + \mathbf{B}_{ij}].$$
*If $\mathbf{A} = [\mathbf{A}_{ik}]_{m \times t}$, $\mathbf{B} = [\mathbf{B}_{kj}]_{t \times n}$ are two block matrices, and for every $k$ the number of columns of block $\mathbf{A}_{ik}$ equals the number of rows of $\mathbf{B}_{kj}$, then the product $\mathbf{C} = \mathbf{AB}$ can also be calculated by applying the multiplication rule to the blocks, i.e. $\mathbf{C}$ is such a block matrix whose block in the $i$-th block row and $j$-th block column is*
$$\mathbf{C}_{ij} = \sum_{k=1}^{t} \mathbf{A}_{ik}\mathbf{B}_{kj}.$$

For example, the following matrix multiplication can be performed as a block matrix in the following way:
$$\left[\begin{array}{cc|c} 1 & 0 & 1 \\ 2 & 1 & 1 \\ 0 & 3 & 1 \end{array}\right] \left[\begin{array}{cc} 1 & 1 \\ 1 & 2 \\ \hline 0 & 1 \end{array}\right] = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 3 & 4 \\ 3 & 6 \end{bmatrix} + \begin{bmatrix} 0 & 1 \\ 0 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 5 \\ 3 & 7 \end{bmatrix}.$$

### Kronecker product and the vec function

There are block matrix operations that cannot be derived from simple matrix operations.

The vec function converts an arbitrary matrix into a vector by placing the column vectors of the matrix one under the other. If $\mathbf{A} = [\mathbf{a}_1 | \mathbf{a}_2 | \ldots | \mathbf{a}_n]$, then
$$\operatorname{vec}(\mathbf{A}) = \begin{bmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_n \end{bmatrix}.$$
For example, if $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, then $\operatorname{vec}(\mathbf{A}) = \begin{bmatrix} 1 \\ 3 \\ 2 \\ 4 \end{bmatrix}$.

Let $\mathbf{A}$ be an $m \times n$, $\mathbf{B}$ be a $p \times q$ matrix. By their *Kronecker product* (or in other words *tensor product*) we mean the matrix of size $mp \times nq$ denoted by $\mathbf{A} \otimes \mathbf{B}$, whose block matrix form is
$$\mathbf{A} \otimes \mathbf{B} = \begin{bmatrix} a_{11}\mathbf{B} & a_{12}\mathbf{B} & \ldots & a_{1n}\mathbf{B} \\ a_{21}\mathbf{B} & a_{22}\mathbf{B} & \ldots & a_{2n}\mathbf{B} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1}\mathbf{B} & a_{m2}\mathbf{B} & \ldots & a_{mn}\mathbf{B} \end{bmatrix}.$$
For example
$$\begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 & 2 \\ 3 & 3 & 3 \end{bmatrix} = \begin{bmatrix} 0 & -1 & -2 & 0 & 2 & 4 \\ -3 & -3 & -3 & 3 & 6 & 6 \\ 0 & 0 & 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 3 & 3 & 3 \end{bmatrix}.$$

**Theorem 4.10 (Properties of the Kronecker product).** *Given the matrices $\mathbf{A}_{m \times n}$, $\mathbf{B}_{m \times n}$, $\mathbf{C}_{p \times s}$ and $\mathbf{D}_{r \times s}$. Then*
- a) *$(\mathbf{A} + \mathbf{B}) \otimes \mathbf{C} = \mathbf{A} \otimes \mathbf{C} + \mathbf{B} \otimes \mathbf{C}$, $\mathbf{C} \otimes (\mathbf{A} + \mathbf{B}) = \mathbf{C} \otimes \mathbf{A} + \mathbf{C} \otimes \mathbf{B}$,*
- b) *$(\mathbf{A} \otimes \mathbf{C}) \otimes \mathbf{D} = \mathbf{A} \otimes (\mathbf{C} \otimes \mathbf{D})$,*
- c) *$(\mathbf{A} \otimes \mathbf{C})^\mathsf{T} = \mathbf{C}^\mathsf{T} \otimes \mathbf{A}^\mathsf{T}$.*

We will use the following for linear matrix equations:

**Theorem 4.11 (Properties of the Kronecker product and the vec function).** *Given the matrices $\mathbf{A}_{m \times n}$, $\mathbf{B}_{p \times q}$ and $\mathbf{X}_{n \times p}$. Then*
- a) *$\operatorname{vec}(\mathbf{AX}) = (\mathbf{I}_p \otimes \mathbf{A})\operatorname{vec}(\mathbf{X})$, $\operatorname{vec}(\mathbf{XB}) = (\mathbf{B}^\mathsf{T} \otimes \mathbf{I}_n)\operatorname{vec}(\mathbf{X})$,*
- b) *$\operatorname{vec}(\mathbf{AXB}) = (\mathbf{B}^\mathsf{T} \otimes \mathbf{A})\operatorname{vec}(\mathbf{X})$,*
- c) *$\operatorname{vec}(\mathbf{AX} + \mathbf{XB}) = (\mathbf{I}_p \otimes \mathbf{A} + \mathbf{B}^\mathsf{T} \otimes \mathbf{I}_n)\operatorname{vec}(\mathbf{X})$.*

*Proof.* All of the above statements can be proven directly based on the definition. For illustration, we show the proof of b).
$$\begin{aligned}
[\mathbf{AXB}]_{*j} = \mathbf{AX}\mathbf{b}_{*j} &= \sum_{i=1}^{n} b_{ij}(\mathbf{AX})_{*i} = \sum_{i=1}^{n} (b_{ij}\mathbf{A})\mathbf{X}_{*i} \\
&= [b_{1j}\mathbf{A} | \ldots | b_{nj}\mathbf{A}]\operatorname{vec}(\mathbf{X}) = [\mathbf{B}^\mathsf{T} \otimes \mathbf{A}]_{*j}\operatorname{vec}(\mathbf{X}) \qquad \square
\end{aligned}$$

### Hypermatrices

Certain data, by their nature, can be well arranged in an array with dimensions higher than 2.

**Definition 4.12 (Hypermatrix).** *Let $n_1, n_2, \ldots, n_d \in \mathbb{N}^+$ and let $S$ be an arbitrary set (e.g. $S = \mathbb{R}, \mathbb{Q}, \mathbb{N}, \mathbb{Z}\ldots$). We call a $d$-th order (or $d$-dimensional) hypermatrix of type $n_1 \times n_2 \times \ldots \times n_d$ a mapping of the form*
$$\mathbf{A} : \{1, \ldots, n_1\} \times \{1, \ldots, n_2\} \times \ldots \times \{1, \ldots, n_d\} \to S$$
*The element $\mathbf{A}(i_1, i_2, \ldots, i_d)$ is denoted by $a_{i_1 i_2 \ldots i_d}$, to which we can think of as an element of a $d$-dimensional table, and similar to what we are used to with matrices, we can write that*
$$\mathbf{A} = [a_{i_1 i_2 \ldots i_d}]_{i_1, i_2, \ldots, i_d = 1}^{n_1, n_2, \ldots, n_d} \quad \text{or more simply} \quad \mathbf{A} = [a_{i_1 i_2 \ldots i_d}].$$
*If $n_1 = n_2 = \cdots = n_d = n$, we speak of a* hyper-square matrix.

The set of all hypermatrices of type $n_1 \times n_2 \times \ldots \times n_d$ formed from the elements of $S$ is denoted by $S^{n_1 \times n_2 \times \ldots \times n_d}$.

Second-order hypermatrices coincide with matrices.

The description of the elements of 3rd-order hypermatrices on paper (so in 2 dimensions) can be solved by cutting it into "slices" according to the third index, for example. Each of these "slices" is a matrix, which we write next to each other separated by a vertical line. Thus, for example, the general form of hypermatrices of type $4 \times 2 \times 3$ is
$$\left[\begin{array}{cc|cc|cc} a_{111} & a_{121} & a_{112} & a_{122} & a_{113} & a_{123} \\ a_{211} & a_{221} & a_{212} & a_{222} & a_{213} & a_{223} \\ a_{311} & a_{321} & a_{312} & a_{322} & a_{313} & a_{323} \\ a_{411} & a_{421} & a_{412} & a_{422} & a_{413} & a_{423} \end{array}\right]$$

The addition of two hypermatrices of the same type and the multiplication of a hypermatrix by a scalar happens elementwise, similar to matrices:
$$[a_{i_1 i_2 \ldots i_d}] + [b_{i_1 i_2 \ldots i_d}] := [a_{i_1 i_2 \ldots i_d} + b_{i_1 i_2 \ldots i_d}], \quad c[a_{i_1 i_2 \ldots i_d}] := [ca_{i_1 i_2 \ldots i_d}].$$

**Definition 4.13 (Transpose of a hypermatrix).** *Let $\pi$ be a permutation of the set $\{1, 2, \ldots, d\}$. By the $\pi$-transpose of the $d$-th order hypermatrix $\mathbf{A} = [a_{i_1 i_2 \ldots i_d}] \in S^{n_1 \times n_2 \times \ldots \times n_d}$ we mean the hypermatrix*
$$\mathbf{A}^\pi = [a_{i_{\pi(1)} i_{\pi(2)} \ldots i_{\pi(d)}}] \in S^{n_{\pi(1)} \times n_{\pi(2)} \times \ldots \times n_{\pi(d)}}$$
*A hyper-square matrix $\mathbf{A} \in S^{n \times n \times \ldots \times n}$ is* symmetric, *if for all permutations $\pi$, $\mathbf{A}^\pi = \mathbf{A}$, and* skew-symmetric, *if $\mathbf{A}^\pi = \operatorname{sgn}(\pi)\mathbf{A}$, where $\operatorname{sgn}(\pi) = -1$ if $\pi$ is an odd permutation, and 1 if it is an even permutation.*

Accordingly, the general form of $2 \times 2 \times 2$ hypermatrices and symmetric hypermatrices is
$$\left[\begin{array}{cc|cc} a_{111} & a_{121} & a_{112} & a_{122} \\ a_{211} & a_{221} & a_{212} & a_{222} \end{array}\right], \quad \left[\begin{array}{cc|cc} a & b & b & c \\ b & c & c & d \end{array}\right].$$
The general form of $3 \times 3 \times 3$ hypermatrices, symmetric and skew-symmetric hypermatrices is
$$\left[\begin{array}{ccc|ccc|ccc} a_{111} & a_{121} & a_{131} & a_{112} & a_{122} & a_{132} & a_{113} & a_{123} & a_{133} \\ a_{211} & a_{221} & a_{231} & a_{212} & a_{222} & a_{232} & a_{213} & a_{223} & a_{233} \\ a_{311} & a_{321} & a_{331} & a_{312} & a_{322} & a_{332} & a_{313} & a_{323} & a_{333} \end{array}\right],$$
$$\left[\begin{array}{ccc|ccc|ccc} a & b & c & b & d & e & c & e & f \\ b & d & e & d & g & h & e & h & i \\ c & e & f & e & h & i & f & i & j \end{array}\right], \quad \left[\begin{array}{ccc|ccc|ccc} 0 & 0 & 0 & 0 & 0 & -a & 0 & a & 0 \\ 0 & 0 & a & 0 & 0 & 0 & -a & 0 & 0 \\ 0 & -a & 0 & a & 0 & 0 & 0 & 0 & 0 \end{array}\right],$$
where $a, b, c, d, e, f, g, h, i, j \in S$ are not necessarily distinct elements.

### Exercises

#### Tables

**4.1.** Anti, Bori, Cili buy apples, bananas and lemons at the market, the hypermarket or the market hall. If only the price matters, where should each of them shop?

| | apple (kg) | banana (kg) | lemon (kg) |
|---|---|---|---|
| Anti | 2 | 2 | 1 |
| Bori | 3 | 2 | 0.5 |
| Cili | 2 | 1 | 1 |

| | market hall (HUF/kg) | hypermarket (HUF/kg) | market (HUF/kg) |
|---|---|---|---|
| apple | 180 | 100 | 130 |
| banana | 390 | 420 | 360 |
| lemon | 210 | 210 | 230 |

**4.2.** In an expression $f(x, y)$, we perform the substitution
$$\begin{aligned} x &= 2a + b \\ y &= 3a + b \end{aligned}$$
then in the resulting expression $f(2a + b, 3a + b)$ the substitution
$$\begin{aligned} a &= -3s + t \\ b &= 4s - t \end{aligned}$$
Calculate the composition of the two substitutions by executing the substitutions, and also by multiplying their corresponding tables, i.e. write down the substitution which is equivalent to the composition of these two substitutions!

**4.3.** Suppose we perform the following two substitutions in an expression:
$$\begin{aligned} x &= 2a + b + 6c \\ y &= 4a + b + 7c \\ z &= 3a + b + 6c \end{aligned} \qquad \begin{aligned} a &= -s + u \\ b &= -3s - 6t + 10u \\ c &= s + t - 2u \end{aligned}$$
How can we calculate the composition of the two substitutions? Write down the substitution that is equivalent to the composition of the two substitutions!

**4.4.•** Reality show programs of two competing commercial TV channels initially attract viewers in a 50-50 ratio. By the end of the first week, half of tv1's viewers, while a quarter of tv2's viewers switch to the other channel.
1. Create the $2 \times 2$ table of switching, and the $2 \times 1$ or $1 \times 1$ table of the viewers' distribution!
2. the $2 \times 1$ table of the viewers' distribution!
3. With the help of the multiplication of tables, determine what the viewers' distribution is at the end of the first and second week, if the ratio of switchers does not change over time.
4. Write down the biweekly table of switchers, i.e. the one from which it can be read what fraction of the viewers of each channel switches and how much remains after two weeks!

#### Elementwise matrix operations

**4.5.•** The following matrices are given!
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \end{bmatrix} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 2 & 1 & 1 \end{bmatrix} \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 1 & 0 \end{bmatrix}$$
Calculate the value of those of the following expressions that are defined! a) $4\mathbf{A} - 3\mathbf{B}$, b) $2\mathbf{B} - \mathbf{C}$, c) $2\mathbf{B} - \mathbf{C}^\mathsf{T}$.

**4.6.•** *Elementwise matrix operation in digital image processing.* We are working with a simplified image format: let the integer element matrix $\mathbf{A}_{m \times n}$ represent a grayscale image consisting of $m \times n$ pixels. Every matrix element specifies the shade of a pixel from the range $\{0, 1, \ldots k\}$, where 0 corresponds to black, $k - 1$ to white, and $k$ denotes transparent pixels. Let the background on an image be transparent, and let $\mathbf{B}_{m \times n}$ be an arbitrary identically representing matrix of another image. Construct the operation denoted by the $\odot$ sign, with which the elementwise matrix operation
$$\mathbf{A} \odot \mathbf{B} := [a_{ij} \odot b_{ij}]$$
copies the image $\mathbf{B}$ into the background of image $\mathbf{A}$. In formula:
$$a_{ij} \odot b_{ij} = \begin{cases} b_{ij}, & \text{if } a_{ij} = k, \\ a_{ij}, & \text{otherwise.} \end{cases}$$
In the solution, we can use the function $x \mapsto \lfloor x \rfloor$, which assigns its lower integer part to a number $x$.

**4.7.** *Basis of* $\mathbb{R}^{m \times n}$. Give a basis of the space $\mathbb{R}^{m \times n}$.

**4.8.** *Subspace spanned by matrices.* Characterize the subspace of the space $\mathbb{R}^{2 \times 2}$ which is spanned by the following given matrices $\mathbf{A}$, $\mathbf{B}$ and $\mathbf{C}$! Put another way: what relationships exist between the elements of those real $2 \times 2$ matrices that are produced as linear combinations of the following matrices?
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}.$$

#### Matrix multiplication

**Example 4.14 (Multiplication of matrices).** *Let*
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix}$$
*Calculate the element $(\mathbf{AB})_{21}$, and then the matrix $\mathbf{AB}$.*

*Solution.* The elements of the second row of the product can be obtained from the product of the second row of $\mathbf{A}$ and the columns of $\mathbf{B}$:
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} * & * & * \\ 4 & 3 & 4 \\ * & * & * \end{bmatrix} \qquad \square$$

**4.9.•** The following matrices are given!
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \end{bmatrix} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 2 & 1 & 1 \end{bmatrix} \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 1 & 0 \end{bmatrix} \quad \mathbf{D} = \begin{bmatrix} 3 & 2 \\ 1 & 0 \end{bmatrix}$$
Calculate the value of those of the following expressions that are defined! a) $\mathbf{AB}$, b) $\mathbf{AB}^\mathsf{T} - \mathbf{D}$, c) $\mathbf{BC}$, d) $\mathbf{CB}$, e) $(\mathbf{DA})\mathbf{C}$.

**4.10.•** *Multiplication is not commutative.* Let
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 2 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & 2 \\ 3 & 2 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1 \\ 2 & 1 \end{bmatrix},$$
$$\mathbf{D} = \begin{bmatrix} 6 & 6 \\ -2 & -1 \end{bmatrix}, \quad \mathbf{E} = \begin{bmatrix} -2 & -6 \\ 2 & 5 \end{bmatrix}.$$
Decide whether the equalities $\mathbf{AB} = \mathbf{BA}$, $\mathbf{BC} = \mathbf{CB}$, $\mathbf{CD} = \mathbf{DC}$ and $\mathbf{DE} = \mathbf{ED}$ hold.

#### Block matrix

**4.11.** *Multiplication of $2 \times 2$ block matrices.* Let $\mathbf{A}$ and $\mathbf{B}$ be two $2 \times 2$ block matrices, i.e. let
$$\mathbf{A} = \begin{bmatrix} \mathbf{A}_{11} & \mathbf{A}_{12} \\ \mathbf{A}_{21} & \mathbf{A}_{22} \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} \\ \mathbf{B}_{21} & \mathbf{B}_{22} \end{bmatrix}.$$
Write their product with the help of the products of the blocks.

**4.12.•** Perform the operations $\mathbf{A} + 3\mathbf{C}$ and $\mathbf{AB}$ calculating both with ordinary matrix operations and as block matrices, if
$$\mathbf{A} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right], \quad \mathbf{B} = \left[\begin{array}{cc} 2 & 4 \\ 1 & 5 \\ \hline 2 & 2 \\ 0 & 1 \end{array}\right], \quad \mathbf{C} = \left[\begin{array}{cc|cc} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \\ \hline 1 & 1 & 1 & 1 \end{array}\right].$$

#### Matrix operations in $\mathbb{Z}_m$

Matrix operations can be interpreted without any further ado for matrices over $\mathbb{Z}_m$ as well (in general for matrices over any ring, see chapter A in the appendix).

**4.13.•** A generator matrix $\mathbf{G}$ and a parity-check matrix $\mathbf{H}$ of a linear code satisfy the relationship $\mathbf{GH}^\mathsf{T} = \mathbf{O}$. Check this in the case of the $[4, 2, 3]_3$ Hamming code calculating with the following matrices in the field $\mathbb{F}_3$:
$$\mathbf{G} = \begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 1 & 1 \end{bmatrix} \quad \mathbf{H} = \begin{bmatrix} 2 & 2 & 1 & 0 \\ 1 & 2 & 0 & 1 \end{bmatrix}$$

#### Hypermatrices

**4.14.** *Outer product of hypermatrices.* The outer product of vectors is generalized by the following definition: Let $\mathbf{A} \in S^{n_1 \times \cdots \times n_d}$ be a $d$-th order and $\mathbf{B} \in S^{m_1 \times \cdots \times m_e}$ be an $e$-th order hypermatrix. By their outer product we mean the $(d + e)$-th order hypermatrix
$$\mathbf{C} = [c_{i_1 \ldots i_d j_1 \ldots j_e}]_{i_1, \ldots, i_d, j_1, \ldots, j_e = 1}^{n_1, \ldots, n_d, m_1, \ldots, m_e} = \mathbf{A} \otimes \mathbf{B} \in S^{n_1 \times \cdots \times n_d \times m_1 \times \cdots \times m_e}$$
for which $c_{i_1 \ldots i_d j_1 \ldots j_e} = a_{i_1 \ldots i_d} b_{j_1 \ldots j_e}$. Calculate the hypermatrix
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 4 & 0 \end{bmatrix}$$
!

**4.15.** *Multilinear matrix multiplication.* Let's define a hypermatrix operation as follows. Let $\mathbf{X}_1 = [x_{ij}^{(1)}] \in S^{m_1 \times n_1}, \ldots, \mathbf{X}_d = [x_{ij}^{(d)}] \in S^{m_d \times n_d}$ be $d$ arbitrary matrices, and let $\mathbf{A} \in S^{n_1 \times \cdots \times n_d}$ be a hypermatrix. Then the *multilinear matrix product* $\mathbf{B} = (\mathbf{X}_1, \ldots, \mathbf{X}_d) \cdot \mathbf{A}$ is defined by the formula
$$b_{i_1 \ldots i_d} = \sum_{j_1, \ldots, j_d = 1}^{n_1, \ldots, n_d} x_{i_1 j_1}^{(1)} \ldots x_{i_d j_d}^{(d)} a_{j_1 \ldots j_d},$$
where $\mathbf{B} = [b_{i_1 \ldots i_d}]_{i_1, \ldots, i_d = 1}^{m_1, \ldots, m_d}$. Prove that a) if $d = 1$, $n_1 = n$ and $m_1 = 1$, then this multiplication coincides with the scalar product; b) if $d = 2$, $m_1 = m_2 = 1$ and $\mathbf{X}_1 = \mathbf{X}_2$, then this multiplication gives a quadratic form.

**4.16.** *Segre outer product of vectors.* Let $n_1, n_2, \ldots, n_d \in \mathbb{N}^+$ and let $\mathbf{a}_i = (a_{i1}, a_{i2}, \ldots, a_{in_i}) \in S^{n_i}$ ($i = 1, 2, \ldots, d$). By the *Segre outer product* of these vectors we mean the hypermatrix
$$\mathbf{a}_1 \otimes \mathbf{a}_2 \otimes \cdots \otimes \mathbf{a}_d = [a_{1i_1} a_{2i_2} \ldots a_{di_d}]_{i_1, i_2, \ldots, i_d = 1}^{n_1, n_2, \ldots, n_d}$$
Calculate the following Segre outer product:
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}.$$

## Usage of matrix multiplication

*With matrix multiplication, what we have learned so far becomes more transparent and easier to handle (e.g. linear combination of vectors, writing down systems of equations and their solutions).*

### Matrix multiplication form of scalar product and outer product

Two column vectors cannot be multiplied together if their dimension is greater than 1. However, after transposing one of them, the multiplication can be performed.

Let $\mathbf{a}$ and $\mathbf{b}$ be two vectors in $\mathbb{R}^n$. The product $\mathbf{a}^\mathsf{T}\mathbf{b}$ gives the scalar product of the two vectors, i.e.
$$\mathbf{a}^\mathsf{T}\mathbf{b} = \mathbf{a} \cdot \mathbf{b},$$
since
$$\mathbf{a}^\mathsf{T}\mathbf{b} = \begin{bmatrix} a_1 & a_2 & \ldots & a_n \end{bmatrix} \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix} = a_1 b_1 + a_2 b_2 + \ldots + a_n b_n = \mathbf{a} \cdot \mathbf{b}.$$
If we transpose the second vector, the two vectors can even be of different dimensions.

**Definition 4.15 (Outer product / dyadic product).** *Let $\mathbf{u} \in \mathbb{R}^m$, $\mathbf{v} \in \mathbb{R}^n$. The product $\mathbf{u}\mathbf{v}^\mathsf{T}$ is called the outer product (dyadic product), or in short, a dyad of the two vectors. This product is an $m \times n$ matrix:*
$$\mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_m \end{bmatrix} \begin{bmatrix} v_1 & v_2 & \ldots & v_n \end{bmatrix} = \begin{bmatrix} u_1 v_1 & u_1 v_2 & \ldots & u_1 v_n \\ u_2 v_1 & u_2 v_2 & \ldots & u_2 v_n \\ \vdots & \vdots & \ddots & \vdots \\ u_m v_1 & u_m v_2 & \ldots & u_m v_n \end{bmatrix}.$$
*The outer product of two vectors is denoted by $\mathbf{u} \otimes \mathbf{v}$.*

**Example 4.16 (Scalar and outer product).** *Let $\mathbf{u} = (1, 0, 2)$, $\mathbf{v} = (3, 2, 1)$. Write their scalar and outer product into matrix multiplication form, and calculate them!*

*Solution.*
$$\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v} = \begin{bmatrix} 1 & 0 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} = 5,$$
$$\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \begin{bmatrix} 3 & 2 & 1 \end{bmatrix} = \begin{bmatrix} 3 & 2 & 1 \\ 0 & 0 & 0 \\ 6 & 4 & 2 \end{bmatrix} \qquad \square$$

### Matrix multiplication form of a linear system of equations

Using matrix multiplication, linear systems of equations can be written in a simple form.

**Proposition 4.17 (Matrix multiplication form of a linear system of equations).** *If $\mathbf{A}$ denotes the coefficient matrix of a system of equations, $\mathbf{b}$ the column vector of constant terms and $\mathbf{x}$ the column vector of unknowns, i.e.*
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}, \quad \text{and} \quad \mathbf{b} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix},$$
*then the system of equations*
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{m1}x_1 &{}+{}& a_{m2}x_2 &{}+{}& \ldots &{}+{}& a_{mn}x_n &{}={}& b_m
\end{alignedat}$$
*can be written in the form $\mathbf{Ax} = \mathbf{b}$.*

It is easily verified by performing the matrix multiplication that the matrix multiplication forms of the systems of equations
$$2x_1 + 3x_2 - x_3 = 5, \qquad \begin{alignedat}{9} ax &&&{}={}& u \\ && by &{}={}& v \\ && cz &{}={}& w \end{alignedat} \qquad \text{and} \qquad \begin{alignedat}{9} x &{}+{}& 2y &{}={}& 1 \\ && y &{}={}& 1 \\ && 0 &{}={}& 1 \end{alignedat}$$
are respectively:
$$\begin{bmatrix} 2 & 3 & -1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = 5, \quad \begin{bmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} u \\ v \\ w \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}.$$

**Example 4.18 (Matrix multiplication form of simultaneous systems of equations).** *Write the following two systems of equations into a single matrix multiplication form!*
$$\begin{alignedat}{9} 2x_{11} &{}+{}& 3x_{21} &{}={}& 7 \\ 3x_{11} &{}-{}& 4x_{21} &{}={}& 2 \end{alignedat} \qquad \begin{alignedat}{9} 2x_{12} &{}+{}& 3x_{22} &{}={}& 9 \\ 3x_{12} &{}-{}& 4x_{22} &{}={}& 5 \end{alignedat}$$

*Solution.* The matrix multiplication forms of the two systems of equations separately are
$$\begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{11} \\ x_{21} \end{bmatrix} = \begin{bmatrix} 7 \\ 2 \end{bmatrix}, \quad \begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{12} \\ x_{22} \end{bmatrix} = \begin{bmatrix} 9 \\ 5 \end{bmatrix}.$$
These can be merged into a single matrix multiplication:
$$\begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{11} & x_{12} \\ x_{21} & x_{22} \end{bmatrix} = \begin{bmatrix} 7 & 9 \\ 2 & 5 \end{bmatrix}.$$
In general, simultaneous systems of equations can be written in the form $\mathbf{AX} = \mathbf{B}$, where $\mathbf{X}$ is the matrix formed from the unknowns, and $\mathbf{B}$ from the right sides. $\square$

### Matrix multiplication form of linear substitution

Similar to the matrix multiplication form of a system of equations, we get the matrix multiplication form of a linear substitution. We simply have to look at the equality $\mathbf{Ax} = \mathbf{b}$ such that the coordinates of $\mathbf{b}$ are the variables to be substituted, in place of which we substitute a linear expression of the coordinates of $\mathbf{x}$. In such cases, we rather use the form $\mathbf{b} = \mathbf{Ax}$, and call the matrix $\mathbf{A}$ the *matrix of the linear substitution*. For more details, see also exercise 4.36.

As an example, here is a linear substitution and its matrix multiplication form:
$$\begin{aligned} x &= 3a + 2b + 4c \\ y &= a - 3b + 2c \\ z &= 2a - b + 2c \end{aligned} \qquad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 3 & 2 & 4 \\ 1 & -3 & 2 \\ 2 & -1 & 2 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix}.$$

### Multiplication by a vector

An $m \times n$ matrix can be multiplied by a vector in two ways: from the right by an $n \times 1$ column vector, from the left by a $1 \times m$ row vector.

From the column model of the system of equations $\mathbf{Ax} = \mathbf{b}$ we saw that the left side of the system of equations is the linear combination of the column vectors of $\mathbf{A}$ taken with the coordinates of $\mathbf{x}$. A similar statement is true for multiplication by a row vector from the left.

**Proposition 4.19 (Matrix multiplication and linear combination).** *Let $\mathbf{A}$ be an $m \times n$ matrix, $\mathbf{x}$ an $n$-dimensional, $\mathbf{y}$ an $m$-dimensional vector. Then the product $\mathbf{Ax}$ gives the linear combination of the column vectors of $\mathbf{A}$*
$$\mathbf{a}_{*1}x_1 + \mathbf{a}_{*2}x_2 + \cdots + \mathbf{a}_{*n}x_n$$
*while the product $\mathbf{y}^\mathsf{T}\mathbf{A}$ gives the linear combination of the row vectors of $\mathbf{A}$*
$$\mathbf{a}_{1*}y_1 + \mathbf{a}_{2*}y_2 + \cdots + \mathbf{a}_{m*}y_m$$

**Example 4.20 (Writing null space with matrix multiplication).** *Write down the vectors of the null space of the matrix*
$$\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 5 & 7 & 11 \\ 0 & 1 & 1 & 1 & -1 \end{bmatrix}$$
*as a product of a matrix and a vector!*

*Solution.* The null space, i.e. the space of solutions of the homogeneous linear system of equations belonging to the matrix, can easily be read from the reduced row echelon form.
$$\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 5 & 7 & 11 \\ 0 & 1 & 1 & 1 & -1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 1 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 & 2 & 7 \\ 0 & 1 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$
Let the parameters assigned to the free variables be $x_3 = t_1$, $x_4 = t_2$, $x_5 = t_3$, from which $x_1 = -t_1 - 2t_2 - 7t_3$ and $x_2 = -t_1 - t_2 + t_3$. From here
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = t_1\begin{bmatrix} -1 \\ -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} + t_2\begin{bmatrix} -2 \\ -1 \\ 0 \\ 1 \\ 0 \end{bmatrix} + t_3\begin{bmatrix} -7 \\ 1 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 & -2 & -7 \\ -1 & -1 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} t_1 \\ t_2 \\ t_3 \end{bmatrix}. \qquad \square$$

▶ Notice that the block structure of the reduced row echelon form and the solution shows a simple connection:
$$\begin{bmatrix} \mathbf{I}_2 & \mathbf{S} \\ \mathbf{O} & \mathbf{O} \end{bmatrix}, \qquad \mathbf{x} = \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_3 \end{bmatrix}\mathbf{t},$$
where $\mathbf{t}$ is the vector of parameters. This can be generalized to arbitrary homogeneous and inhomogeneous linear systems of equations (see exercise 4.53).

The relationships obtained by multiplying with the standard unit vectors can be easily proved. Let $\mathbf{e}_i = (0, 0, \ldots, 1, \ldots, 0)$ denote the vector whose $i$-th coordinate is 1, the others are 0.

**Proposition 4.21 (Generation of elements, row and column vectors of a matrix).** *Let $\mathbf{A}$ be an $m \times n$ matrix, $\mathbf{e}_i$ an $m$-dimensional, $\mathbf{e}_j$ an $n$-dimensional standard unit vector. Then multiplication from the left by the standard row vector $\mathbf{e}_i^\mathsf{T}$ gives the $i$-th row vector of the matrix, and multiplication from the right by $\mathbf{e}_j$ gives the $j$-th column vector of the matrix, i.e.*
$$\mathbf{e}_i^\mathsf{T}\mathbf{A} = \mathbf{a}_{i*} \text{ and } \mathbf{A}\mathbf{e}_j = \mathbf{a}_{*j},$$
*furthermore*
$$\mathbf{e}_i^\mathsf{T}(\mathbf{A}\mathbf{e}_j) = (\mathbf{e}_i^\mathsf{T}\mathbf{A})\mathbf{e}_j = a_{ij}.$$

The dyad $\mathbf{e}_i\mathbf{e}_j^\mathsf{T}$ is a matrix whose $(i, j)$-index element is 1, and all others are 0:
$$\mathbf{e}_i\mathbf{e}_j^\mathsf{T} = \begin{bmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{bmatrix} \begin{bmatrix} 0 & \ldots & 1 & \ldots & 0 \end{bmatrix} = \begin{bmatrix} 0 & \ldots & 0 & \ldots & 0 \\ \vdots & & \vdots & & \vdots \\ 0 & \ldots & 1 & \ldots & 0 \\ \vdots & & \vdots & & \vdots \\ 0 & \ldots & 0 & \ldots & 0 \end{bmatrix}.$$

### Matrix multiplication form of change of basis

If a vector's coordinate form is given in two different bases, then we can also obtain one from the other with a simple matrix multiplication.

**Example 4.22 (Change to standard basis).** *$\mathcal{B} = \{ (1, 2, 3), (0, 2, 3), (3, 5, 8) \}$ is a basis of the space $\mathbb{R}^3$. Write down the coordinate form of the vector $[\mathbf{v}]_{\mathcal{B}}$ given in this basis in the standard basis with a single matrix multiplication. What is the standard coordinate form of vector $\mathbf{v}$ if $[\mathbf{v}]_{\mathcal{B}} = (3, 2, -1)$?*

*Solution.* $[\mathbf{v}]_{\mathcal{B}} = (3, 2, -1)$ means that
$$\mathbf{v} = 3\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} + 2\begin{bmatrix} 0 \\ 2 \\ 3 \end{bmatrix} - \begin{bmatrix} 3 \\ 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \\ 7 \end{bmatrix},$$
which in matrix multiplication form is
$$\mathbf{v} = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 2 & 5 \\ 3 & 3 & 8 \end{bmatrix}\begin{bmatrix} 3 \\ 2 \\ -1 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \\ 7 \end{bmatrix}.$$
Let $[\mathbf{v}]_{\mathcal{B}} = (x, y, z)$. Then
$$\mathbf{v} = x\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} + y\begin{bmatrix} 0 \\ 2 \\ 3 \end{bmatrix} + z\begin{bmatrix} 3 \\ 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 2 & 5 \\ 3 & 3 & 8 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix}. \qquad \square$$

This example leads to the following definition and proposition:

**Definition 4.23 (Change of basis matrix).** *Let $\mathcal{B} = \{ \mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n \}$ be a basis of the vector space $\mathcal{V}$ and $\mathcal{C}$ a basis of some (finite dimensional) vector space containing $\mathcal{V}$ (for example, another basis of $\mathcal{V}$). The matrix formed from the coordinate forms of the vectors of $\mathcal{B}$ written in the basis $\mathcal{C}$ is called the change of basis matrix from basis $\mathcal{B}$ to $\mathcal{C}$. Thus its form is*
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = [\, [\mathbf{b}_1]_{\mathcal{C}} \mid [\mathbf{b}_2]_{\mathcal{C}} \mid \cdots \mid [\mathbf{b}_n]_{\mathcal{C}} \,]$$

**Proposition 4.24 (Change of coordinates at change of basis).** *If $\mathcal{B}$ is a basis of the vector space $\mathcal{V}$, $\mathcal{C}$ is a basis of a vector space containing $\mathcal{V}$ and $\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}$ is the change of basis matrix, then between the $\mathcal{B}$- and $\mathcal{C}$-coordinate forms of any vector $\mathbf{v}$ the relation*
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}$$
*holds.*

*Proof.* Let $[\mathbf{v}]_{\mathcal{B}} = (v_1, v_2, \ldots, v_n)$. According to the meaning of coordinate form
$$\mathbf{v} = v_1\mathbf{b}_1 + v_2\mathbf{b}_2 + \ldots + v_n\mathbf{b}_n.$$
Its coordinate form in the basis $\mathcal{C}$ is
$$\begin{aligned}
[\mathbf{v}]_{\mathcal{C}} &= v_1[\mathbf{b}_1]_{\mathcal{C}} + v_2[\mathbf{b}_2]_{\mathcal{C}} + \ldots + v_n[\mathbf{b}_n]_{\mathcal{C}} \\
&= [\, [\mathbf{b}_1]_{\mathcal{C}} \mid [\mathbf{b}_2]_{\mathcal{C}} \mid \cdots \mid [\mathbf{b}_n]_{\mathcal{C}} \,][\mathbf{v}]_{\mathcal{B}} \\
&= \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}. \qquad \square
\end{aligned}$$

▶ In example 4.22, we switched from basis $\mathcal{B}$ to the standard basis $\mathcal{E} = \{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \}$, so the change of basis matrix can be denoted by $\mathbf{A}_{\mathcal{E} \leftarrow \mathcal{B}}$.

**Example 4.25 (Change of basis matrix).** *Let $\mathcal{E}$ be the standard basis of $\mathbb{R}^4$, and $\mathcal{B}$ the subspace spanned by the vectors $\mathbf{b}_1 = (1, 1, 0, -2)$ and $\mathbf{b}_2 = (2, 3, 3, -2)$, also featured in examples 3.27 and 3.28. Write down the change of basis matrix from $\mathcal{B}$ to $\mathcal{E}$, and give the $\mathcal{E}$-coordinate form of the vectors $(-1, 1)_{\mathcal{B}}$ and $(-3, 2)_{\mathcal{B}}$!*

*Solution.* The change of basis matrix is
$$\mathbf{A}_{\mathcal{E} \leftarrow \mathcal{B}} = [\, [\mathbf{b}_1]_{\mathcal{E}} \mid [\mathbf{b}_2]_{\mathcal{E}} \,] = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}.$$
Thus the coordinate form of the two vectors in the standard basis
$$\begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -3 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}. \qquad \square$$

### Basis decomposition

According to the second point of Theorem 3.23, the same linear relations hold between the columns of matrix $\mathbf{A}$ and the columns of its reduced row echelon form. The columns in $\mathbf{A}$ corresponding to the pivot columns of the reduced row echelon form give a basis for the column space of $\mathbf{A}$. The matrix formed from these columns is the change of basis matrix from this basis to the standard basis. And the column vectors of the reduced row echelon form are the coordinate forms of the column vectors of $\mathbf{A}$ with respect to this basis. All these give the following proposition:

**Proposition 4.26 (Basis decomposition).** *Let $\mathbf{R}$ denote the matrix consisting of the non-zero rows of the reduced row echelon form of matrix $\mathbf{A}$, and let $\mathbf{B}$ be the submatrix formed by the columns of $\mathbf{A}$ corresponding to the pivot columns of $\mathbf{R}$. Then*
$$\mathbf{A} = \mathbf{B}\mathbf{R}.$$

*Proof.* The columns of $\mathbf{B}$ give a basis for the column space of $\mathbf{A}$, so $\mathbf{B}$ is the change of basis matrix to the standard basis in the column space of $\mathbf{A}$. The $j$-th column of the matrix $\mathbf{R}$ coincides with the coordinate form of the $j$-th column of matrix $\mathbf{A}$ written in the basis formed by the columns of $\mathbf{B}$. In formula, this means that
$$\mathbf{A}_{*j} = \mathbf{B}\mathbf{R}_{*j}, \quad \text{i.e.} \quad \mathbf{A} = \mathbf{BR}. \qquad \square$$
Such a decomposition $\mathbf{A} = \mathbf{BR}$ of a matrix is called a *basis decomposition*.

**Example 4.27 (Basis decomposition).** *Determine the basis decomposition of the following matrix, and explain the meaning of the columns of the two matrices!*
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix}$$

*Solution.* The reduced row echelon form of matrix $\mathbf{A}$:
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Longrightarrow \begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
The first two rows of this matrix form the matrix $\mathbf{R}$, the first and second columns of matrix $\mathbf{A}$ form the matrix $\mathbf{B}$, so the decomposition is
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \end{bmatrix} = \mathbf{BR}.$$
The columns of $\mathbf{R}$ are the coordinate forms of the column vectors of $\mathbf{A}$ in the basis formed by the columns of $\mathbf{B}$. We have already seen this in examples 3.27 and 3.28. Accordingly
$$[\mathbf{v}]_{\mathcal{E}} = \mathbf{B}[\mathbf{v}]_{\mathcal{B}},$$
where $\mathcal{E}$ denotes the standard coordinate form, and $\mathcal{B}$ denotes the coordinate form in the basis formed by the columns of matrix $\mathbf{B}$. For example
$$\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -3 \\ 2 \end{bmatrix}, \quad \text{i.e.} \quad [\mathbf{a}_4]_{\mathcal{E}} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}, \; [\mathbf{a}_4]_{\mathcal{B}} = \begin{bmatrix} -3 \\ 2 \end{bmatrix},$$
where $\mathbf{a}_4$ is the fourth column vector of $\mathbf{A}$. $\square$

▶ If the rank of the $m \times n$ matrix $\mathbf{A}$ is $r$, then the matrix $\mathbf{R}$ is $r \times n$, and the matrix $\mathbf{B}$ is $m \times r$. This means that we have decomposed the matrix $\mathbf{A}$ into the product of two matrices, where the columns of the first and the rows of the second are linearly independent.

### Identity matrix, elementary matrices


For a given matrix $\mathbf{B}$, we can find an $\mathbf{A}$ such that, similarly to multiplying by 1, $\mathbf{AB} = \mathbf{B}$. For example,
$$\mathbf{A} = \begin{bmatrix} 3 & -4 \\ -2 & 5 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix}$$
in case of
$$\begin{bmatrix} 3 & -4 \\ -2 & 5 \end{bmatrix}\begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix}.$$
However, it is no longer true that multiplying $\mathbf{A}$ by any $2 \times 2$ matrix $\mathbf{B}$ will result in $\mathbf{B}$. Such a matrix also exists; after some trying, anyone can find it.

**Definition 4.28 (Identity matrix).** *The $n \times n$ matrix*
$$\mathbf{I}_n := \operatorname{diag}(1, 1, \ldots, 1) = \begin{bmatrix} 1 & 0 & \ldots & 0 \\ 0 & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & 1 \end{bmatrix}$$
*is called the identity matrix.*

> The letter $\mathbf{I}$ used to denote the *identity matrix* comes from the first letter of its English name. The word *identity* refers to the relation $\mathbf{IA} = \mathbf{A}$ (the function $x \mapsto x$ is called the identity function for the same reason). Furthermore, the letter $I$ looks most like the number 1.

▶ The name identity matrix originates from the fact that for any $m \times n$ matrix $\mathbf{A}$, it holds true that
$$\mathbf{I}_m\mathbf{A}_{m \times n} = \mathbf{A}_{m \times n}\mathbf{I}_n = \mathbf{A}_{m \times n},$$
meaning this matrix possesses a property similar to the number one among numbers.
▶ We have already encountered the identity matrix: in the Gauss-Jordan method, the coefficient matrix of a uniquely solvable system of equations consisting of $n$ unknowns and $n$ equations transforms into the identity matrix during elementary row operations!

Elementary row operations performed on the identity matrix result in matrices that establish a connection between elementary row operations and matrix multiplication.

**Definition 4.29 (Elementary matrices).** *A matrix obtained by a single elementary row operation performed on the identity matrix $\mathbf{I}_n$ is called an elementary matrix.*

The following matrices are elementary matrices:
$$\begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 5 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$
This is proven by the fact that they all originate from $\mathbf{I}_4$ by the following elementary row operations respectively: $R_1 \leftrightarrow R_4$, $5R_2$, $R_1 + 2R_3$, $1R_1$. The last matrix is the identity matrix, which itself is an elementary matrix because it can be obtained, for example, by multiplying one of its rows by 1.

**Example 4.30 (Multiplying a matrix from the left by an elementary matrix).** *Let's examine what happens if we multiply an arbitrary 4-row matrix from the left by the previous matrices?*

*Solution.* Let $\mathbf{A}$ be a matrix consisting of 4 rows and, for simplicity's sake, only 2 columns.
$$\begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{41} & a_{42} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{11} & a_{12} \end{bmatrix},$$
As a result of the multiplication, the first and fourth rows of $\mathbf{A}$ were swapped.
$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 5 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{11} & a_{12} \\ 5a_{21} & 5a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix},$$
Here, the second row of $\mathbf{A}$ was multiplied by 5.
$$\begin{bmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{11} + 2a_{31} & a_{12} + 2a_{32} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix},$$
As a result of the multiplication, twice its third row was added to the first row of $\mathbf{A}$. $\square$

The result of this example can be stated as a theorem, the proof of which is generally done in the same way as in the previous example, therefore we omit it:

**Theorem 4.31 (Elementary row operations by matrix multiplication).** *Let $\mathbf{E}$ be the elementary matrix obtained from $\mathbf{I}_m$ by an elementary row operation. If the same row operation is applied to an arbitrary $m \times n$ matrix $\mathbf{A}$, the result is the matrix $\mathbf{EA}$.*

▶ Performing elementary row operations via matrix multiplication has no computational practicality; its purpose is the algebraization of elementary row operations, and thus a deeper understanding of them.
▶ Multiplying from the right by an elementary matrix performs an elementary column operation on the matrix (see exercise ??).

### Matrices Partitioned into Vectors

We examine matrix multiplication if at least one of the factors is partitioned into vectors and considered a block matrix. Let $\mathbf{A}$ be an $m \times t$ matrix, and $\mathbf{B}$ be a $t \times n$ matrix in the following.

1. *[row vectors] $\cdot$ [column vectors]:* Let's decompose the matrix $\mathbf{A}_{m \times t}$ into its row vectors, and the matrix $\mathbf{B}_{t \times n}$ into its column vectors. In this case, we multiply an $m \times 1$ block matrix by a $1 \times n$ one, which exactly gives the definition of the matrix product $\mathbf{AB}$:
$$\mathbf{AB} = \left[\begin{array}{c} \mathbf{a}_{1*} \\ \hline \mathbf{a}_{2*} \\ \hline \vdots \\ \hline \mathbf{a}_{m*} \end{array}\right]\begin{bmatrix} \mathbf{b}_{*1} & \ldots & \mathbf{b}_{*n} \end{bmatrix} = \begin{bmatrix} \mathbf{a}_{1*}\mathbf{b}_{*1} & \mathbf{a}_{1*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{1*}\mathbf{b}_{*n} \\ \mathbf{a}_{2*}\mathbf{b}_{*1} & \mathbf{a}_{2*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{2*}\mathbf{b}_{*n} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{a}_{m*}\mathbf{b}_{*1} & \mathbf{a}_{m*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{m*}\mathbf{b}_{*n} \end{bmatrix}.$$

2. *[matrix] $\cdot$ [column vectors]:* Here we multiply a $1 \times 1$ block matrix by a $1 \times n$ one:
$$\mathbf{C} = \mathbf{AB} = \mathbf{A}\begin{bmatrix} \mathbf{b}_{*1} & \mathbf{b}_{*2} & \ldots & \mathbf{b}_{*n} \end{bmatrix} = \begin{bmatrix} \mathbf{A}\mathbf{b}_{*1} & \mathbf{A}\mathbf{b}_{*2} & \ldots & \mathbf{A}\mathbf{b}_{*n} \end{bmatrix}$$
So here the $j$-th column vector of the matrix $\mathbf{C}$ is the product of the matrix $\mathbf{A}$ and the $j$-th column of $\mathbf{B}$, that is $\mathbf{c}_{*j} = \mathbf{A}\mathbf{b}_{*j}$.

*Figure. The product of matrix $\mathbf{A}$ and the $j$-th column $\mathbf{b}_{*j}$ of $\mathbf{B}$ yields the $j$-th column $\mathbf{c}_{*j}$ of matrix $\mathbf{C}$.*

We have already encountered this case when writing the matrix product form of simultaneous equation systems (Example 4.18). If the above schematic figure represents the matrix product form of a simultaneous equation system, then the highlighted part corresponds to a single equation system of the simultaneous equation system.

3. *[row vectors] $\cdot$ [matrix]:* In this case, we multiply an $m \times 1$ block matrix by a $1 \times 1$ one:
$$\mathbf{C} = \mathbf{AB} = \left[\begin{array}{c} \mathbf{a}_{1*} \\ \hline \mathbf{a}_{2*} \\ \hline \vdots \\ \hline \mathbf{a}_{m*} \end{array}\right]\mathbf{B} = \left[\begin{array}{c} \mathbf{a}_{1*}\mathbf{B} \\ \hline \mathbf{a}_{2*}\mathbf{B} \\ \hline \vdots \\ \hline \mathbf{a}_{m*}\mathbf{B} \end{array}\right]$$
That is, here the $i$-th row of the matrix $\mathbf{C} = \mathbf{AB}$ is the product of the $i$-th row of matrix $\mathbf{A}$ and the matrix $\mathbf{B}$. Written differently, $\mathbf{c}_{i*} = \mathbf{a}_{i*}\mathbf{B}$.

*Figure. The product of the $i$-th row of matrix $\mathbf{A}$ and the matrix $\mathbf{B}$ yields the $i$-th row of matrix $\mathbf{C}$.*

4. *[column vectors] $\cdot$ [row vectors]:* In this case, we multiply a matrix consisting of a single block row by one consisting of a block column, that is a $1 \times t$ block matrix by a $t \times 1$ one. We get a sum resembling the scalar product:
$$\mathbf{AB} = \begin{bmatrix} \mathbf{a}_{*1} & \ldots & \mathbf{a}_{*t} \end{bmatrix}\left[\begin{array}{c} \mathbf{b}_{1*} \\ \hline \vdots \\ \hline \mathbf{b}_{t*} \end{array}\right] = \mathbf{a}_{*1}\mathbf{b}_{1*} + \mathbf{a}_{*2}\mathbf{b}_{2*} + \cdots + \mathbf{a}_{*t}\mathbf{b}_{t*}.$$
In this decomposition, we decomposed the matrix $\mathbf{AB}$ into *the sum of dyads*! For example, we decompose the following matrix product into the sum of three dyads:
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ -2 & 0 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 4 \end{bmatrix}\begin{bmatrix} -2 & 0 \end{bmatrix} + \begin{bmatrix} 2 \\ 5 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$$
$$= \begin{bmatrix} 0 & 0 \\ 3 & 3 \end{bmatrix} + \begin{bmatrix} -2 & 0 \\ -8 & 0 \end{bmatrix} + \begin{bmatrix} 2 & 2 \\ 5 & 5 \end{bmatrix} = \begin{bmatrix} 0 & 2 \\ 0 & 8 \end{bmatrix}.$$

> We note that the result itself is also a dyad, since $\begin{bmatrix} 0 & 2 \\ 0 & 8 \end{bmatrix} = \begin{bmatrix} 2 \\ 8 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}$, so a matrix can be decomposed into the sum of dyads in multiple ways. The decomposition of matrices into sums of dyads – i.e., rank-1 matrices – is suitable for approaching several basic concepts. For example, the rank of a matrix can be defined as the minimum number of dyads present in its dyadic decompositions.

An important special case of this decomposition is when $\mathbf{A}$ consists of a single row, or $\mathbf{B}$ of a single column. Then the product $\mathbf{AB}$ is a linear combination of the row vectors of $\mathbf{B}$ and the column vectors of $\mathbf{A}$, respectively:
$$\begin{bmatrix} 0 & 1 & 2 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ -2 & 0 \\ 1 & 1 \end{bmatrix} = 0\begin{bmatrix} 1 & 1 \end{bmatrix} + 1\begin{bmatrix} -2 & 0 \end{bmatrix} + 2\begin{bmatrix} 1 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 2 \end{bmatrix},$$
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = 1\begin{bmatrix} 0 \\ 3 \end{bmatrix} + 0\begin{bmatrix} 1 \\ 4 \end{bmatrix} + 1\begin{bmatrix} 2 \\ 5 \end{bmatrix} = \begin{bmatrix} 2 \\ 8 \end{bmatrix}.$$

**Proposition 4.32 (Columns and rows of the product).** *Every column of the matrix $\mathbf{AB}$ is a linear combination of the columns of $\mathbf{A}$ and every row is a linear combination of the rows of $\mathbf{B}$.*

*Proof.* The $j$-th column of the matrix $\mathbf{AB}$ is
$$(\mathbf{AB})_{*j} = \mathbf{A}\mathbf{b}_{*j} = \mathbf{a}_{*1}b_{1j} + \mathbf{a}_{*2}b_{2j} + \ldots + \mathbf{a}_{*t}b_{tj}$$
and its $i$-th row is
$$(\mathbf{AB})_{i*} = \mathbf{a}_{i*}\mathbf{B} = a_{i1}\mathbf{b}_{1*} + a_{i2}\mathbf{b}_{2*} + \ldots + a_{it}\mathbf{b}_{t*},$$
which proves the proposition. $\square$

**Corollary 4.33 (Rank of a product).** *$\operatorname{r}(\mathbf{AB}) \leqslant \operatorname{r}(\mathbf{A})$ and $\operatorname{r}(\mathbf{AB}) \leqslant \operatorname{r}(\mathbf{B})$, thus*
$$\operatorname{r}(\mathbf{AB}) \leqslant \min(\operatorname{r}(\mathbf{A}), \operatorname{r}(\mathbf{B})). \tag{4.2}$$

*Proof.* The number of independent columns of $\mathbf{AB}$ is at most the number of independent columns of $\mathbf{A}$, since its column space is a subspace of the column space of $\mathbf{A}$, and the number of independent rows of $\mathbf{AB}$ is at most the number of independent rows of $\mathbf{B}$, since its row space is a subspace of the row space of $\mathbf{B}$. $\square$

### Exercises

#### Matrix operations

**4.17.•** *True - false.* Decide whether the following statements are true! Justify your answer!
- a) If both the products $\mathbf{AB}$ and $\mathbf{BA}$ are defined, then both matrices are square.
- b) If both the products $\mathbf{AB}$ and $\mathbf{BA}$ are defined, then both products are square.
- c) If the product $(\mathbf{AB})\mathbf{C}$ is defined, then the product $\mathbf{A}(\mathbf{BC})$ is certainly defined too.

In the following let
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 4 & 2 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 4 & 2 \\ 4 & 5 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} -3 & 2 \\ 2 & -1 \end{bmatrix}, \mathbf{D} = \begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}.$$
Perform the following operations!

**4.18.** $2\mathbf{A} - 3\mathbf{B}^\mathsf{T}$

**4.19.** $\mathbf{AB} - \mathbf{BA} + \mathbf{AC} - \mathbf{CA}$

**4.20.** $(\mathbf{CD} - \mathbf{DC})(\mathbf{ABC})$

**4.21.** $\mathbf{A}^2 - \mathbf{C}^2$

**4.22.** $(\mathbf{C})_{2*}(\mathbf{D})_{*2}$

**4.23.** $(\mathbf{A})_{*1}(\mathbf{B})_{2*}$

**4.24.** With the notations above, are the following equalities true?
$$(\mathbf{A} + \mathbf{B})^2 = \mathbf{A}^2 + 2\mathbf{AB} + \mathbf{B}^2, \quad (\mathbf{A} + \mathbf{C})^2 = \mathbf{A}^2 + 2\mathbf{AC} + \mathbf{C}^2.$$

**4.25.** With the notations above, are the following equalities true?
$$(\mathbf{C} + \mathbf{D})(\mathbf{C} - \mathbf{D}) = \mathbf{C}^2 - \mathbf{D}^2, \quad (\mathbf{A} + \mathbf{D})(\mathbf{A} - \mathbf{D}) = \mathbf{A}^2 - \mathbf{D}^2.$$

Calculate the scalar and dyadic products of the following vectors! Write both operations in matrix product form!

**4.26.** $\mathbf{a} = (1, 2)$, $\mathbf{b} = (0, 1)$

**4.27.** $\mathbf{u} = (1, 2, 0, 1)$, $\mathbf{v} = (0, 1, 2, 3)$

**4.28.** $\mathbf{a} = (1, 2, 0)$, $\mathbf{b} = (0, 1, 3)$

#### Matrix product forms

Write the matrix product form of the following equation systems!

**4.29.** $\begin{aligned} x + y &= 1 \\ x - z &= 2 \\ z &= 3 \end{aligned}$

**4.30.** $3x - 2y + 4z = 5$

**4.31.** $\begin{aligned} 2x + z &= 1 \\ x - y - w &= 2 \\ y + z + w &= 2 \\ 0 &= 3 \end{aligned}$

Write the matrix product form of the following linear substitutions!

**4.32.** $\begin{aligned} u &= 2x - 4y \\ v &= x + 2y \end{aligned}$

**4.33.** $\begin{aligned} x &= 3a - 2b + c \\ y &= 2a - c \\ z &= b + 2c \end{aligned}$

**4.34.** $\begin{aligned} x &= 3a + b \\ y &= 2a - b \\ z &= b \end{aligned}$

**4.35.** $\begin{aligned} x &= 3a - 2b + c \\ y &= 2a - c \end{aligned}$

**4.36.•** *Matrix product form of linear substitution.* Write the matrix product form of the substitution generally describing the substitution of linear expressions of variables $x_1, x_2, \ldots, x_n$ in place of the variables $y_1, y_2, \ldots, y_m$
$$\begin{aligned} y_1 &= a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n \\ y_2 &= a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n \\ &\;\;\vdots \\ y_m &= a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n \end{aligned}$$
!

#### Matrix of transition

Write the matrix of transition from basis $\mathcal{B}$ to $\mathcal{C}$ below, if the coordinate form of vectors of $\mathcal{B}$ in $\mathcal{C}$ is known. Write the coordinate form of the given vectors in $\mathcal{C}$!

**4.37.•** $\mathcal{B} = \{ (1, 1, 1), (0, 2, 2), (0, 0, 3) \}$, $\mathcal{C}$ is the standard basis of $\mathbb{R}^3$, $(\mathbf{u})_{\mathcal{B}} = (-1, 1, 1)$, $(\mathbf{v})_{\mathcal{B}} = (3, -2, 0)$.

**4.38.•** *Transition from subspace.* $\mathcal{B} = \{ (1, 1, 0, -2), (0, 1, 3, 2) \}$, $\mathcal{C}$ is the standard basis of $\mathbb{R}^4$, $(\mathbf{u})_{\mathcal{B}} = (2, 1)$, $(\mathbf{v})_{\mathcal{B}} = (1, 1)$, $(\mathbf{w})_{\mathcal{B}} = (1, 2)$. Compare this problem with the first solution of Example 3.26 and Example ??!

#### Basis decomposition

Determine the basis decomposition of the following matrix, and explain the meaning of the columns of the two matrices!

**4.39.•** $\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix}$

**4.40.** $\begin{bmatrix} 2 & 4 & 6 \end{bmatrix}$

**4.41.** $\begin{bmatrix} 3 \\ 4 \end{bmatrix}$

**4.42.** $\mathbf{A} = \mathbf{u} \otimes \mathbf{v}$, where $\mathbf{u} \in \mathbb{R}^n$, $\mathbf{v} \in \mathbb{R}^m$ are arbitrary non-zero vectors.

#### Elementary matrices

Find the matrix $\mathbf{E}$ that is a solution to the following matrix equation!

**4.43.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ e & f \\ c & d \end{bmatrix}$

**4.44.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ 3c & 3d \\ e & f \end{bmatrix}$

**4.45.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ c + 2e & d + 2f \\ e & f \end{bmatrix}$

**4.46.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a - c & b - d \\ c & d \\ e & f \end{bmatrix}$

Determine the value of the following matrix products using elementary row operations without matrix multiplication!

**4.47.** $\begin{bmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 2 \\ 3 & 3 & 3 \\ 4 & 4 & 4 \end{bmatrix}$

**4.48.** $\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & -2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 3 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \\ d \end{bmatrix}$

**4.49.•** *[Elementary column operations by matrix multiplication]* a) Every elementary matrix can be obtained from the identity matrix by a single elementary column operation as well. b) Let $\mathbf{E}$ be the elementary matrix obtained from $\mathbf{I}_n$ by an elementary column operation. If the same column operation is applied to an arbitrary $m \times n$ matrix $\mathbf{A}$, the result is the matrix $\mathbf{AE}$.

#### Block matrices

Calculate the matrix products given in the following exercises using the designated block matrices!

**4.50.** $\left[\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 1 \\ \hline 0 & 0 & 2 \\ 0 & 0 & 3 \end{array}\right]\left[\begin{array}{c|cc} 2 & 3 & 1 \\ 4 & 5 & 1 \\ \hline 0 & 0 & 1 \end{array}\right]$

**4.51.** $\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 4 & 5 & 1 \\ \hline 0 & 0 & 1 \end{array}\right]\left[\begin{array}{cc} 1 & 0 \\ 0 & 1 \\ \hline 0 & 0 \\ 0 & 3 \end{array}\right]$

**4.52.** $\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 1 & 0 & 0 & 1 \\ 3 & 3 & 3 & 1 & 0 & 0 \end{array}\right]\left[\begin{array}{cc} 1 & 1 \\ 1 & 1 \\ 1 & 1 \\ \hline 3 & 3 \\ 2 & 3 \\ 3 & 4 \end{array}\right]$

**4.53.** *Block matrix form of the solution of a linear equation system.* Suppose that the first $r$ columns of the matrix $\mathbf{A}$ of rank $r$ are linearly independent - this can always be achieved by column swaps. Let $\mathbf{B}_r$ denote the matrix consisting of the first $r$ columns of $\mathbf{A}$, and let the reduced row echelon form of $\mathbf{A}$ and the augmented matrix $[\mathbf{A}|\mathbf{b}]$ be
$$\begin{bmatrix} \mathbf{I}_r & \mathbf{S} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} \quad \text{and} \quad \left[\begin{array}{cc|c} \mathbf{I}_r & \mathbf{S} & \mathbf{d}_r \\ \mathbf{O} & \mathbf{O} & \mathbf{0} \end{array}\right],$$
respectively, where $\mathbf{d}_r$ is an $r$-dimensional vector. Then
1. the equation system $\mathbf{Ax} = \mathbf{b}$ is solvable, and its solution is
$$\mathbf{x} = \begin{bmatrix} \mathbf{d}_r \\ \mathbf{0}_s \end{bmatrix} + \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s,$$
where $s$ is the number of free variables, that is $s = n - r$, and $\mathbf{t}_s$ is the vector of free parameters, moreover $\mathbf{A} = \mathbf{B}_r[\mathbf{I}_r|\mathbf{S}]$ and $\mathbf{b} = \mathbf{B}_r\mathbf{d}_r$, furthermore
2. the solution of the homogeneous linear equation system $\mathbf{Ax} = \mathbf{0}$ is
$$\mathbf{x} = \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s,$$
where the column vectors of the matrix $\begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}$ form a basis of the null space.

#### Miscellaneous exercises

**4.54.** *Sudoku* is a logic game in which a $9 \times 9$ matrix must be given, of which some, but not all elements are known. The task is to determine the unknown elements. The matrix is partitioned into 9 blocks of $3 \times 3$ and satisfies the condition that in each of its rows, columns, and blocks, each integer from 1 to 9 appears exactly once. This means that the sum of the numbers in one row, column, and block is always 45. Express this with matrix operations, i.e., write matrix equations containing the matrix $\mathbf{A}$ of the sudoku board, which are satisfied by the matrix of every correctly filled sudoku board!

**4.55.** How many elements does $\mathbb{Z}_2^{2 \times 2}$ have, that is, the space of $2 \times 2$ matrices over the two-element field?

## Solutions

**4.1.** The product of the two tables:

| | market hall | hypermarket | market |
|---|---|---|---|
| Anti | 1350 | 1250 | 1210 |
| Bori | 1425 | 1245 | 1225 |
| Cili | 960 | 830 | 850 |

So Anti and Bori should shop at the market, Cili at the hypermarket.

**4.2.** Performing the two substitutions:
$$\begin{aligned} x &= 2a + b = 2(-3s + t) + (4s - t) = -2s + t, \\ y &= 3a + b = 3(-3s + t) + (4s - t) = -5s + 2t. \end{aligned}$$
The composition of the two substitutions can be obtained by the product of the tables of the two substitutions:

| | $a$ | $b$ |
|---|---|---|
| $x$ | 2 | 1 |
| $y$ | 3 | 1 |

$\times$

| | $s$ | $t$ |
|---|---|---|
| $a$ | -3 | 1 |
| $b$ | 4 | -1 |

$=$

| | $s$ | $t$ |
|---|---|---|
| $x$ | -2 | 1 |
| $y$ | -5 | 2 |

**4.3.** The composition of the two substitutions can be obtained by the product of the tables of the two substitutions. From this product, it can be read that the substitution obtained by the composition is: $x = s$, $y = t$, $z = u$. This means that the two substitutions are in a certain sense the inverse of each other.

**4.4.**
1. We can provide the table in two ways if the first row and column belong to tv1:

| to | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

| from | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/2 |
| tv2 | 1/4 | 3/4 |

2. Two possibilities for the table of the initial distribution of viewers:

| | ratio |
|---|---|
| tv1 | 1/2 |
| tv2 | 1/2 |

| | tv1 | tv2 |
|---|---|---|
| ratio | 1/2 | 1/2 |

3. First let's answer the question for tv1: half of its own viewers stay ($\frac{1}{2} \cdot \frac{1}{2}$), to this is added a quarter of tv2's viewers ($\frac{1}{2} \cdot \frac{1}{4}$), this is altogether $\frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{4} = \frac{3}{8}$. For tv2 the calculation is: $\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{2} \cdot \frac{1}{2} = \frac{5}{8}$. By multiplying tables using the previous 2-2 notations:

| to | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$\times$

| | ratio |
|---|---|
| tv1 | 1/2 |
| tv2 | 1/2 |

$=$

| | ratio |
|---|---|
| tv1 | 3/8 |
| tv2 | 5/8 |

4. Looking only at the table of switching channels, by the end of the second week, only half of the half of tv1's viewers remaining from the first week will stay, while also half of the quarter of the audience who switched from tv2 will stay, so the tv1 → tv1 "movement" affects $\frac{3}{8}$ of the viewers, because $\frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{4} = \frac{3}{8}$. With similar calculations the other values can also be obtained, which can also be given by the following multiplication between two tables:

| to | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$\times$

| to | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$=$

| to | tv1 | tv2 |
|---|---|---|
| tv1 | 3/8 | 5/16 |
| tv2 | 5/8 | 11/16 |

**4.5.** a) $4\mathbf{A} - 3\mathbf{B} = \begin{bmatrix} 1 & 5 & 12 \\ 2 & 1 & -3 \end{bmatrix}$, b) $2\mathbf{B} - \mathbf{C}$ is not defined. c) $2\mathbf{B} - \mathbf{C}^\mathsf{T} = \begin{bmatrix} 1 & 0 & -1 \\ 3 & 0 & 2 \end{bmatrix}$.

**4.6.** If $a$ is a number falling in the interval $[0, k]$, then $0 \leq a/k \leq 1$, thus the integer part of $a/k$ is 0 or 1. Elaborating, $\lfloor a/k \rfloor$ is exactly 1 if $a = k$, that is, if the pixel is transparent, otherwise 0. On the other hand, $1 - \lfloor a/k \rfloor$ is exactly 0 if $a = k$, otherwise 1. Exploiting this, the desired operation can be easily defined:
$$a \odot b = \left\lfloor \frac{a}{k} \right\rfloor b + \left(1 - \left\lfloor \frac{a}{k} \right\rfloor\right) a.$$
Thus the element-wise defined $\mathbf{A} \odot \mathbf{B}$ operation with this operation gives the desired result. In Figure 4.2 we illustrate three images with a $32 \times 24$ matrix, we also gave the matrix of the man's face, the other is a background image, the result of the operation is the third image.

**4.7.** The standard basis includes matrices in which a single element is 1, and the rest are 0.

**4.8.** All linear combinations of these matrices are of the form
$$a\mathbf{A} + b\mathbf{B} + c\mathbf{C} = \begin{bmatrix} a + b + c & a + c \\ a & b + c \end{bmatrix}.$$
If we want to decide whether an arbitrary matrix $\begin{bmatrix} u & v \\ w & z \end{bmatrix}$ is of the above form, i.e., whether the equality
$$\begin{bmatrix} a + b + c & a + c \\ a & b + c \end{bmatrix} = \begin{bmatrix} u & v \\ w & z \end{bmatrix}$$
holds for some unknowns $a$, $b$, $c$, then we must solve the system of equations with 3 unknowns consisting of four equations relating to the four elements of the matrices:
$$\begin{alignedat}{9} a &{}+{}& b &{}+{}& c &{}={}& u \\ a &&&{}+{}& c &{}={}& v \\ a &&&&&{}={}& w \\ && b &{}+{}& c &{}={}& z \end{alignedat}$$
If this has a solution, then the appropriate linear combination exists, so the given matrix $\begin{bmatrix} u & v \\ w & z \end{bmatrix}$ falls into the spanned space. Writing the augmented matrix of this system of equations, then solving it with elementary row operations we get the following:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & u \\ 1 & 0 & 1 & v \\ 1 & 0 & 0 & w \\ 0 & 1 & 1 & z \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & w \\ 0 & 1 & 1 & u - w \\ 0 & 0 & 1 & v - w \\ 0 & 0 & 0 & w + z - u \end{array}\right].$$
It can be read from the echelon form that this system of equations is solvable if and only if $w + z - u = 0$. For example, the matrix $\begin{bmatrix} 5 & 4 \\ 3 & 2 \end{bmatrix}$ falls into this subspace. By solving the above system of equations, it can also be obtained what the coefficients of the linear combination are. We get that $a = 3$, $b = 1$ and $c = 1$.

**4.9.** a) $\mathbf{AB}$ is not defined. b) $\mathbf{AB}^\mathsf{T} - \mathbf{D} = \begin{bmatrix} 0 & 5 \\ 2 & 3 \end{bmatrix}$, c) $\mathbf{BC} = \begin{bmatrix} 3 & 3 \\ 5 & 4 \end{bmatrix}$, d) $\mathbf{CB} = \begin{bmatrix} 3 & 2 & 1 \\ 6 & 4 & 2 \\ 1 & 1 & 0 \end{bmatrix}$, e) $(\mathbf{DA})\mathbf{C} = \begin{bmatrix} 32 & 23 \\ 16 & 13 \end{bmatrix}$.

**4.10.** Based on the sizes, the product $\mathbf{BC}$ is not defined, the others:
$$\mathbf{AB} = \begin{bmatrix} 3 & 2 & 1 \\ 9 & 8 & 7 \\ 3 & 4 & 5 \end{bmatrix}, \mathbf{BA} = \begin{bmatrix} 6 & 5 \\ 6 & 10 \end{bmatrix}, \mathbf{CB} = \begin{bmatrix} 3 & 2 & 1 \\ 3 & 4 & 5 \end{bmatrix},$$
$$\mathbf{CD} = \begin{bmatrix} -2 & -1 \\ 10 & 11 \end{bmatrix}, \mathbf{DC} = \begin{bmatrix} 12 & 12 \\ -2 & -3 \end{bmatrix}, \mathbf{DE} = \mathbf{ED} = \begin{bmatrix} 0 & -6 \\ 2 & 5 \end{bmatrix}.$$
In summary: $\mathbf{AB} \neq \mathbf{BA}$, because they are of different types, $\mathbf{BC} \neq \mathbf{CB}$, because one side is not defined, $\mathbf{CD} \neq \mathbf{DC}$, although both sides are defined and of the same type. Contrary to the previous ones, however, the equality $\mathbf{DE} = \mathbf{ED}$ holds. That is, there are commutative matrices, but matrix multiplication is not a commutative operation, so it is not commutative!

**4.11.** The product $\mathbf{AB}$ can be written in the form
$$\begin{bmatrix} \mathbf{A}_{11} & \mathbf{A}_{12} \\ \mathbf{A}_{21} & \mathbf{A}_{22} \end{bmatrix}\begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} \\ \mathbf{B}_{21} & \mathbf{B}_{22} \end{bmatrix} = \begin{bmatrix} \mathbf{A}_{11}\mathbf{B}_{11} + \mathbf{A}_{12}\mathbf{B}_{21} & \mathbf{A}_{11}\mathbf{B}_{12} + \mathbf{A}_{12}\mathbf{B}_{22} \\ \mathbf{A}_{21}\mathbf{B}_{11} + \mathbf{A}_{22}\mathbf{B}_{21} & \mathbf{A}_{21}\mathbf{B}_{12} + \mathbf{A}_{22}\mathbf{B}_{22} \end{bmatrix}.$$
$\mathbf{BA}$ can be written similarly! Check that the condition of Proposition 4.9 (for all $k$, the number of columns of the block $\mathbf{A}_{ik}$ equals the number of rows of $\mathbf{B}_{kj}$) is indeed necessary, and sufficient as well.

**4.12.** Let's calculate treating the matrices as block matrices:
$$\mathbf{A} + 3\mathbf{C} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right] + 3\left[\begin{array}{cc|cc} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \\ \hline 1 & 1 & 1 & 1 \end{array}\right] = \begin{bmatrix} 1 & 6 & 1 & 0 \\ 6 & 1 & 1 & 2 \\ 3 & 3 & 6 & 3 \end{bmatrix}.$$
Check the calculation with ordinary matrix operations! Next let's look at the multiplication of block matrices!
$$\mathbf{AB} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right]\left[\begin{array}{cc} 2 & 4 \\ 1 & 5 \\ \hline 2 & 2 \\ 0 & 1 \end{array}\right] = \begin{bmatrix} 4 & 6 \\ 3 & 9 \\ 6 & 6 \end{bmatrix}.$$
We get the same result if we check it by performing the operation with simple matrix multiplication!

**4.13.** Indeed (calculating in the field $\mathbb{F}_3$)
$$\begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 1 & 1 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 2 & 2 \\ 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$

**4.14.** The outer product of hypermatrices in $\mathbb{R}^2$ and $\mathbb{R}^{3 \times 2}$ falls into $\mathbb{R}^{2 \times 3 \times 2}$:
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 4 & 0 \end{bmatrix} = \left[\begin{array}{ccc|ccc} 0 & 2 & 4 & 1 & 3 & 0 \\ 0 & 4 & 8 & 2 & 6 & 0 \end{array}\right]$$

**4.16.** The Segre outer product:
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix} = \left[\begin{array}{ccc|ccc|ccc} 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 1 & 0 & 2 & 2 & 0 & 4 & 0 & 0 & 0 \\ 2 & 0 & 4 & 4 & 0 & 8 & 0 & 0 & 0 \end{array}\right].$$

**4.17.** a) False, b) true, c) true.

**4.26.** $\mathbf{a} \cdot \mathbf{b} = \mathbf{a}^\mathsf{T}\mathbf{b} = \begin{bmatrix} 1 & 2 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = 2$, $\mathbf{a} \otimes \mathbf{b} = \mathbf{a}\mathbf{b}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix}$.

**4.27.** $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v} = \begin{bmatrix} 1 & 2 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} = 5$,
$$\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 0 & 0 & 0 \\ 0 & 1 & 2 & 3 \end{bmatrix}.$$

**4.28.** The scalar product cannot be performed, the dyadic product
$$\mathbf{a} \otimes \mathbf{b} = \mathbf{a}\mathbf{b}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$

**4.29.** $\begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & -1 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$.

**4.35.** $\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 & -2 & 1 \\ 2 & 0 & -1 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix}$.

**4.36.** The matrix product form of the linear substitution is
$$\mathbf{y} = \mathbf{Ax},$$
where
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_m \end{bmatrix}, \quad \text{and} \quad \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}.$$

**4.37.** The matrix of transition
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix},$$
Using this we get that
$$[\mathbf{u}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{u}]_{\mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \\ 4 \end{bmatrix},$$
furthermore
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix}\begin{bmatrix} 3 \\ -2 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ -1 \\ -1 \end{bmatrix}.$$

**4.38.** The matrix of transition
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}.$$
Using this we get that
$$[\mathbf{u}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}, \quad [\mathbf{v}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix}, \quad [\mathbf{w}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}.$$

**4.39.** The reduced row echelon form of the matrix $\mathbf{A}$:
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix} \Longrightarrow \begin{bmatrix} 1 & 2 & 0 & 7 & 17 \\ 0 & 0 & 1 & -1 & -4 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$
The first two rows of this matrix form the matrix $\mathbf{R}$, the first and third columns of the matrix $\mathbf{A}$ form the matrix $\mathbf{B}$, so the decomposition is
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 8 \\ 1 & 7 \end{bmatrix}\begin{bmatrix} 1 & 2 & 0 & 7 & 17 \\ 0 & 0 & 1 & -1 & -4 \end{bmatrix} = \mathbf{BR}.$$

The columns of $\mathbf{R}$ are the coordinate forms of the column vectors of $\mathbf{A}$ in the basis formed by the columns of $\mathbf{B}$, i.e.,
$$[\mathbf{v}]_{\mathcal{E}} = \mathbf{B}[\mathbf{v}]_{\mathcal{B}}.$$

where with the index $\mathcal{E}$ we denoted the coordinate form in the standard basis, and with $\mathcal{B}$ the coordinate form of the same vector in the basis formed by the columns of the matrix $\mathbf{B}$. For example,
$$\begin{bmatrix} 4 \\ 6 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 8 \\ 1 & 7 \end{bmatrix}\begin{bmatrix} 7 \\ -1 \end{bmatrix}, \quad \text{i.e.} \quad [\mathbf{a}_4]_{\mathcal{E}} = \begin{bmatrix} 4 \\ 6 \\ 0 \end{bmatrix}, [\mathbf{a}_4]_{\mathcal{B}} = \begin{bmatrix} 7 \\ -1 \end{bmatrix},$$
where $\mathbf{a}_4$ is the fourth column vector of $\mathbf{A}$.

**4.40.** $\begin{bmatrix} 2 & 4 & 6 \end{bmatrix} = [2]\begin{bmatrix} 1 & 2 & 3 \end{bmatrix}$.

**4.41.** $\begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}[1]$.

**4.42.** A basis decomposition, using the relation $\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T}$, is $(c\mathbf{u})\left(\frac{1}{c}\mathbf{v}^\mathsf{T}\right)$, where $c$ is the first non-zero coordinate of $\mathbf{v}$.

**4.43.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$

**4.44.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**4.45.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$

**4.46.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**4.47.** $\begin{bmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 8 & 8 & 8 \end{bmatrix}$

**4.48.** $\begin{bmatrix} a \\ 2d - 2b \\ 3a + c \\ d \end{bmatrix}$

**4.50.** $\left[\begin{array}{cc|cc} 2 & 3 & 2 & 2 \\ 4 & 5 & 2 & 2 \\ \hline 0 & 0 & 2 & 2 \\ 0 & 0 & 3 & 3 \end{array}\right]$

**4.51.** $\begin{bmatrix} 2 & 10 \\ 4 & 14 \\ 0 & 5 \end{bmatrix}$

**4.52.** $\begin{bmatrix} 5 & 6 \\ 6 & 7 \\ 12 & 12 \end{bmatrix}$

**4.53.** Since $[\mathbf{I}_r|\mathbf{S}]$ is the reduced row echelon form of $\mathbf{A}$, any of its columns is the coordinate form of the column of $\mathbf{A}$ with the same index, written in the basis of the column vectors of $\mathbf{B}_r$. This exactly means that $\mathbf{A} = \mathbf{B}_r[\mathbf{I}_r|\mathbf{S}]$. This is true for any column of the column space, thus also for $\mathbf{b}$, because according to the reduced row echelon form of $[\mathbf{A}|\mathbf{b}]$ the system of equations is solvable, thus $\mathbf{b}$ is an element of the column space. Therefore, $\mathbf{b} = \mathbf{B}_r\mathbf{d}_r$.

The fact that every solution can be written in this form follows from the Gauss-Jordan method. We still need to show that the vector $\mathbf{x}$ given in the theorem is indeed a solution.
$$\begin{aligned} \mathbf{Ax} = \mathbf{B}_r\begin{bmatrix} \mathbf{I}_r & \mathbf{S} \end{bmatrix}\left(\begin{bmatrix} \mathbf{d}_r \\ \mathbf{0}_s \end{bmatrix} + \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s\right) &= \mathbf{B}_r(\mathbf{d}_r - \mathbf{S}\mathbf{t}_s + \mathbf{S}\mathbf{t}_s) = \mathbf{B}_r\mathbf{d}_r \\ &= \mathbf{b}. \end{aligned}$$
This proves the first half of the statement. To prove the second half, we only need to see that the column vectors of $\begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}$ form a basis of the null space. This follows from the fact that they span the null space on the one hand, and are linearly independent on the other hand, because the columns of the matrix $\mathbf{I}_s$ in the lower block are linearly independent.

**4.54.** Let $\mathbf{j}$ denote the 9-dimensional vector consisting of all 1s, and $\mathbf{j}_{456}$ the one whose elements with indices 4, 5, 6 are 1, and the rest are 0. Then the conditions "every row sum is 45" and "every column sum is 45" are equivalent to the equations $\mathbf{Aj} = 45\mathbf{j}$, $\mathbf{j}^\mathsf{T}\mathbf{A} = 45\mathbf{j}^\mathsf{T}$, while e.g. the condition "the sum of the elements of the block in the intersection of the first block column and the second block row is 45" corresponds to the equation $\mathbf{j}_{456}^\mathsf{T}\mathbf{A}\mathbf{j}_{123} = 45$.

**4.55.** $2^4 = 16$ matrices belong to $\mathbb{Z}_2^{2 \times 2}$:
$$\mathbb{Z}_2^{2 \times 2} = \left\{ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 1 & 0 \\ 1 & 0 \end{bmatrix}, \ldots, \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \right\}.$$

# 5. Algebra of matrix operations

We review the most important algebraic properties of matrix operations. These are not only about rules to follow while calculating with matrices, but also help in the deeper understanding of systems of linear equations, and give us tools, such as matrix decompositions, which are also important in the applications of linear algebra.

## Properties of basic operations

*Addition and scalar multiplication preserve the operational properties of real numbers, but matrix multiplication does not.*

### Properties of addition and scalar multiplication

Since the addition and scalar multiplication of matrices are operations that can be performed element-wise, their operational properties naturally inherit the operational properties of numbers. For example, the addition of matrices of the same type is a commutative and associative operation, while the multiplication of a sum by a scalar is distributive. Thus
$$\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}, \quad \mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + \mathbf{B} + \mathbf{C},$$
$$c(\mathbf{A} + \mathbf{B}) = c\mathbf{A} + c\mathbf{B}, \quad (c + d)\mathbf{A} = c\mathbf{A} + d\mathbf{A}.$$
The proof of these properties is left to the Reader (see Exercise 5.4).

### Properties of multiplication

The algebraic properties of the multiplication of numbers are not automatically inherited by matrix operations, as in the case of addition. Not all of them hold, e.g., matrix multiplication is *not commutative.*

When calculating with matrices, we must not only be aware that certain identities do not hold, but also that certain elementary procedures cannot be performed as broadly as we are accustomed to with real numbers.

**Proposition 5.1 (What to watch out for in matrix multiplication?).**
- a) *Matrix multiplication is not commutative, i.e., $\mathbf{AB} = \mathbf{BA}$ does not hold for any two matrices that can be multiplied.*
- b) *If $\mathbf{AB} = \mathbf{AC}$, then the condition $\mathbf{A} \neq \mathbf{O}$ is not sufficient to conclude that $\mathbf{B} = \mathbf{C}$.*
- c) *From the equality $\mathbf{AB} = \mathbf{O}$, it does not follow that $\mathbf{A}$ or $\mathbf{B}$ is the zero matrix.*

▶ One of the simplest examples to refute the commutativity of matrix multiplication:
$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad \text{but} \quad \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$
We show further examples in Exercise 4.10.

▶ Among real numbers, it is true that if $a \neq 0$ and $ab = ac$, then we can simplify by $a$, i.e., then $b = c$. A counterexample for matrices:
$$\begin{bmatrix} 1 & -2 \\ 2 & -4 \\ 1 & -2 \end{bmatrix}\begin{bmatrix} 1 & -3 \\ 2 & -1 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 2 & -4 \\ 1 & -2 \end{bmatrix}\begin{bmatrix} -1 & 3 \\ 1 & 2 \end{bmatrix}, \quad \text{but} \quad \begin{bmatrix} 1 & -3 \\ 2 & -1 \end{bmatrix} \neq \begin{bmatrix} -1 & 3 \\ 1 & 2 \end{bmatrix}.$$

> We can also encounter zero divisors when calculating in $\mathbb{Z}_m$, if $m$ is composite. For example, in $\mathbb{Z}_6$, $2 \cdot 3 = 0$. For a composite $m$, it is not always possible to simplify in $\mathbb{Z}_m$ either, for example in $\mathbb{Z}_{12}$, $9 \cdot 2 = 3 \cdot 2 = 6$, but $9 \neq 2$.

▶ A non-zero element of an algebraic structure is called a *zero divisor* if there is a non-zero element with which its product is zero. There are none among real numbers, but there are among matrices, for example
$$\begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}\begin{bmatrix} 2 & -2 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$

**Theorem 5.2 (Algebraic properties of matrix multiplication).** *Let $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ be such that the indicated operations can be performed, and let $c$ be an arbitrary scalar. Then*
- a) *$\mathbf{A}(\mathbf{BC}) = (\mathbf{AB})\mathbf{C}$* (associativity)
- b) *$\mathbf{A}(\mathbf{B} + \mathbf{C}) = \mathbf{AB} + \mathbf{AC}$* (distributivity)
- c) *$(\mathbf{A} + \mathbf{B})\mathbf{C} = \mathbf{AC} + \mathbf{BC}$* (distributivity)
- d) *$(c\mathbf{A})\mathbf{B} = c(\mathbf{AB}) = \mathbf{A}(c\mathbf{B})$*
- e) *$\mathbf{A}_{m \times n}\mathbf{O}_{n \times t} = \mathbf{O}_{m \times t}$* (multiplication by zero matrix)
- f) *$\mathbf{I}_m\mathbf{A}_{m \times n} = \mathbf{A}_{m \times n}\mathbf{I}_n = \mathbf{A}_{m \times n}$* (multiplication by identity matrix)

*Proof.* We only prove the first of the above properties, the others can be proven similarly, or even more simply.

a) We actually prove more. We show that if the indicated multiplications on one side of the equality can be performed, then those on the other side can be too. Let $\mathbf{A}_{m \times s}$, $\mathbf{B}_{u \times v}$, and $\mathbf{C}_{t \times n}$ be three arbitrary matrices. In the product $(\mathbf{AB})\mathbf{C}$, $\mathbf{AB}$ can only be performed if $s = u$, the type of the product is $m \times v$, which can only be multiplied by $\mathbf{C}$ if $v = t$, and the product is $m \times n$. So this product is only defined if the type of $\mathbf{B}$ is $s \times t$. With a similar argument, we get the same for the product $\mathbf{A}(\mathbf{BC})$.

To facilitate the handling of indices, it will be sufficient to perform the proof for a row vector $\mathbf{A}$ and a column vector $\mathbf{C}$, because the element in the $i$-th row and $j$-th column of the product $(\mathbf{AB})\mathbf{C}$ is the product of the $i$-th row of $\mathbf{AB}$, i.e., the row vector $\mathbf{a}_{i*}\mathbf{B}$, and the $j$-th column of $\mathbf{C}$, i.e., $(\mathbf{a}_{i*}\mathbf{B})\mathbf{c}_{*j}$. Similarly, the element in the $i$-th row and $j$-th column of the product $\mathbf{A}(\mathbf{BC})$ is $\mathbf{a}_{i*}(\mathbf{B}\mathbf{c}_{*j})$. So let
$$\mathbf{A} = \begin{bmatrix} a_1 & a_2 & \ldots & a_m \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} b_{11} & b_{12} & \ldots & b_{1n} \\ b_{21} & b_{22} & \ldots & b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{m1} & b_{m2} & \ldots & b_{mn} \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}.$$
Then the product is $1 \times 1$. First we calculate the matrix $\mathbf{AB}$, which is $1 \times n$: $\begin{bmatrix} \sum_{k=1}^{m} a_k b_{k1} & \sum_{k=1}^{m} a_k b_{k2} & \ldots & \sum_{k=1}^{m} a_k b_{kn} \end{bmatrix}$. Calculating $(\mathbf{AB})\mathbf{C}$ from here:
$$\begin{bmatrix} \sum_{k=1}^{m} a_k b_{k1} & \sum_{k=1}^{m} a_k b_{k2} & \ldots & \sum_{k=1}^{m} a_k b_{kn} \end{bmatrix}\begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix} = \sum_{l=1}^{n}\sum_{k=1}^{m} a_k b_{kl} c_l.$$
Similarly, first writing $\mathbf{BC}$, for the matrix $\mathbf{A}(\mathbf{BC})$ we get that
$$\begin{bmatrix} a_1 & a_2 & \ldots & a_m \end{bmatrix}\begin{bmatrix} \sum_{l=1}^{n} b_{1l} c_l \\ \sum_{l=1}^{n} b_{2l} c_l \\ \vdots \\ \sum_{l=1}^{n} b_{ml} c_l \end{bmatrix} = \sum_{k=1}^{m} a_k\left(\sum_{l=1}^{n} b_{kl} c_l\right) = \sum_{k=1}^{m}\sum_{l=1}^{n} a_k b_{kl} c_l.$$
In the last step, we multiplied every term of the inner sum by $a_k$, using the distributivity between addition and multiplication of numbers. That is, on both sides stands a sum which is the sum of all products of the form $a_k b_{kl} c_l$, only the grouping of the terms is different. $\square$

▶ A consequence of associativity is that multi-factor matrix products do not need to be parenthesized, because any parenthesization gives the same result. Thus $\mathbf{ABC} = (\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})$. The statement is true for multi-factor products as well, i.e., the product $\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_k$ is independent of the order of execution, but the order of the factors cannot be changed!

▶ We note that the proof of associativity described just now can be similarly stated if the matrix $\mathbf{A} = [a_{ik}]$ does not consist of only 1 row, and the matrix $\mathbf{C} = [c_{lj}]$ does not consist of only 1 column: then for the $j$-th element of the $i$-th row of the product $\mathbf{D} = \mathbf{ABC}$ we get that it is the sum of all products of the form $a_{ik} b_{kl} c_{lj}$, i.e.,
$$d_{ij} = \sum_{k=1}^{m}\sum_{l=1}^{n} a_{ik} b_{kl} c_{lj}. \tag{5.1}$$

> The equality 5.1, and countless similar expressions, led Einstein to the realization that in the sum of products of indexed variables, the summation signs are unnecessary, because we have to sum over the indices that appear at least twice, while for those appearing once we do not. So instead of the previous double sum, we could also write $d_{ij} = a_{ik} b_{kl} c_{lj}$, since on the right side $i$ and $j$ appear only once, so we have to sum over $k$ and $l$, and we know that $k = 1, \ldots, m$ and $l = 1, \ldots, n$. This simplification in notation is called the *Einstein convention*. Einstein first used this in his famous paper on the general theory of relativity in 1916. The use of the convention spread mainly in the physical applications of linear algebra, we will not use it in this book.

### Exponentiation of a matrix

Only square matrices can be multiplied by themselves, since if an $m \times n$ matrix can be multiplied by an $m \times n$ one, then $m = n$. Taking this into account, the positive integer power of square matrices can be naturally defined:
$$\mathbf{A}^k = \underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ factors}}$$
We can also define this concept somewhat more elegantly - by recursion: $\mathbf{A}^1 := \mathbf{A}$ and $\mathbf{A}^{k+1} := \mathbf{A}^k\mathbf{A}$.

Since matrix multiplication is associative, it does not matter in what order we perform the exponentiation. This can also be used to prove the following two relations:

**Proposition 5.3 (Identities of exponentiation).** *Let $\mathbf{A}$ be a square matrix! Then*
- a) *$\mathbf{A}^k\mathbf{A}^m = \mathbf{A}^{k+m}$,*
- b) *$(\mathbf{A}^k)^m = \mathbf{A}^{km}$.*

If we want to extend exponentiation to the exponent 0 as well, we should follow the principle of precedence,[^7] i.e., give a meaning to $\mathbf{A}^0$ such that the above relations remain valid. For example, consider the identity a) for $m = 0$:
$$\mathbf{A}^k\mathbf{A}^0 = \mathbf{A}^{k+0} = \mathbf{A}^k.$$
This is only true for the identity matrix for every matrix $\mathbf{A}$, so
$$\mathbf{A}^0 = \mathbf{I}_n,$$
where $n$ is the size of the square $\mathbf{A}$.

[^7]: *The word* precedence *of Latin origin means* antecedent *(see also precedent). The* principle of precedence *in mathematics means an extension of the meaning of concepts during which the previously learned properties and relationships remain valid.*

▶ The identity valid for different base powers learned for real numbers is not valid here due to the lack of commutativity, i.e., generally $(\mathbf{AB})^k \neq \mathbf{A}^k\mathbf{B}^k$.

**Example 5.4 (Exponentiation of a matrix).** *Calculate the $k$-th powers of the matrices*
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad \text{and} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$$
*!*

*Solution.* Let's calculate the powers of $\mathbf{A}$!
$$\mathbf{A}^2 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix},$$
i.e., $\mathbf{A}^2 = \mathbf{I}_2$, and from this we see that $\mathbf{A}^3 = \mathbf{I}_2\mathbf{A} = \mathbf{A}$, $\mathbf{A}^4 = \mathbf{A}^3\mathbf{A} = \mathbf{AA} = \mathbf{I}_2, \ldots$ So generally $\mathbf{A}^{2k} = \mathbf{I}_2$ and $\mathbf{A}^{2k+1} = \mathbf{A}$.

We can comfortably solve the other problem by induction using the recursive definition of exponentiation. First, let's calculate a few powers of $\mathbf{B}$:
$$\mathbf{B}^2 = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{B}^3 = \mathbf{B}^2\mathbf{B} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}.$$
From this we conjecture that $\mathbf{B}^k = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$. If we can prove the inheritance of this relationship from $k$ to $k + 1$, then we are done. In other words, we have to show that if $\mathbf{B}^k = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$, then $\mathbf{B}^{k+1} = \begin{bmatrix} 1 & k+1 \\ 0 & 1 \end{bmatrix}$. This is justified by performing the following multiplication:
$$\mathbf{B}^{k+1} = \mathbf{B}^k\mathbf{B} = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & k+1 \\ 0 & 1 \end{bmatrix} \qquad \square$$

Since the linear combination of matrices and the integer power of square matrices are defined, we can also define the substitution value of a polynomial with scalar coefficients for square matrices. Let
$$p(x) = a_k x^k + a_{k-1} x^{k-1} + \ldots + a_2 x^2 + a_1 x + a_0$$
be a polynomial with scalar coefficients. The substitution value of the polynomial $p$ at the place $\mathbf{X} \in \mathbb{R}^{n \times n}$ is understood to be the matrix
$$p(\mathbf{X}) = a_k\mathbf{X}^k + \ldots + a_2\mathbf{X}^2 + a_1\mathbf{X} + a_0\mathbf{I}_n$$
.

**Example 5.5 (Substitution value of a polynomial).** *Let*
$$\mathbf{C} = \begin{bmatrix} 1 & 2 & -3 \\ 2 & 3 & -4 \\ 3 & 4 & -6 \end{bmatrix}.$$
*Show that $p(\mathbf{C}) = \mathbf{O}$ if $p(x) = x^3 + 2x^2 - 1$.*

*Solution.* Performing the operations of $p(\mathbf{C}) = \mathbf{C}^3 + 2\mathbf{C}^2 - \mathbf{I}$, we get that
$$\begin{aligned} p(\mathbf{C}) = \mathbf{C}^3 + 2\mathbf{C}^2 - \mathbf{I} &= \begin{bmatrix} 9 & 8 & -14 \\ 8 & 7 & -12 \\ 14 & 12 & -21 \end{bmatrix} + 2\begin{bmatrix} -4 & -4 & 7 \\ -4 & -3 & 6 \\ -7 & -6 & 11 \end{bmatrix} - \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \\ &= \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}. \qquad \square \end{aligned}$$

### Properties of transposition

The following theorem is about the relationship between transposition and the other operations:

**Theorem 5.6 (Properties of transposition).** *Let $\mathbf{A}$ and $\mathbf{C}$ be matrices of the same type, let the number of rows of $\mathbf{B}$ be equal to the number of columns of $\mathbf{A}$, and let $c$ be an arbitrary scalar. Then*
- a) *$(\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}$,*
- b) *$(\mathbf{A} + \mathbf{C})^\mathsf{T} = \mathbf{A}^\mathsf{T} + \mathbf{C}^\mathsf{T}$,*
- c) *$(c\mathbf{A})^\mathsf{T} = c\mathbf{A}^\mathsf{T}$,*
- d) *$(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$.*

*Proof.* The first three relations are self-evident, we only prove the last one.

First we show that if $(\mathbf{AB})^\mathsf{T}$ can be performed, then so can $\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$. The product of the $m \times t$ type $\mathbf{A}$ and $t \times n$ type $\mathbf{B}$ is $m \times n$, its transpose is $n \times m$, so the $n \times t$ type $\mathbf{B}^\mathsf{T}$ and the $t \times m$ type $\mathbf{A}^\mathsf{T}$ can be multiplied, their product is $n \times m$, so the types of the two sides of the equality in the theorem are the same.

The theorem is based on the fact that for two arbitrary vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{u}^\mathsf{T}\mathbf{v} = \mathbf{v}^\mathsf{T}\mathbf{u}$. We will use this relation at the equality marked with $*$. The element in the $i$-th row and $j$-th column of $(\mathbf{AB})^\mathsf{T}$ is
$$\left((\mathbf{AB})^\mathsf{T}\right)_{ij} = (\mathbf{AB})_{ji} = (\mathbf{A})_{j*}(\mathbf{B})_{*i}.$$
The element in the $i$-th row and $j$-th column of $\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$ is
$$\left(\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}\right)_{ij} = (\mathbf{B}^\mathsf{T})_{i*}(\mathbf{A}^\mathsf{T})_{*j} \overset{*}{=} (\mathbf{A})_{j*}(\mathbf{B})_{*i}.$$
Thus $(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$. $\square$

▶ An easily provable consequence by induction of point b) of the theorem is that the transpose of a multi-term sum is equal to the sum of the transposes. Taking point c) into account as well, we get that the transpose of a linear combination of matrices is equal to the same linear combination of the transposes of the matrices, i.e.,
$$(c_1\mathbf{A}_1 + c_2\mathbf{A}_2 + \ldots + c_k\mathbf{A}_k)^\mathsf{T} = c_1\mathbf{A}_1^\mathsf{T} + c_2\mathbf{A}_2^\mathsf{T} + \ldots + c_k\mathbf{A}_k^\mathsf{T}.$$
▶ A "visual proof" can also be given for point d) of the theorem, which can be read from Figure 5.1.
▶ It can be proven by induction that the relation in d) also holds for multi-factor products, i.e.,
$$(\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_k)^\mathsf{T} = \mathbf{A}_k^\mathsf{T} \ldots \mathbf{A}_2^\mathsf{T}\mathbf{A}_1^\mathsf{T}.$$

*Figure 5.1. Visual proof of $(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$.*

### The inverse of matrix multiplication - division of matrices

Is it possible to divide by a matrix, and if so, can we solve the system of equations $\mathbf{Ax} = \mathbf{b}$ or the matrix equation $\mathbf{AX} = \mathbf{B}$ with it in the same way as we solve the equation $ax = b$ by dividing by $a$?

In our earlier studies, we learned that addition and multiplication are invertible operations, their inverses are subtraction and division, respectively.

By saying that the operation of addition is invertible, we mean that for any real numbers $a$ and $b$, we can find a real number $x$ such that $a + x = b$, the solution is $x = b - a$. Multiplication is also invertible, but only on the set of non-zero real numbers. This means that for any non-zero real number $a$ and real number $b$, there exists a real number $x$ such that $ax = b$, the solution is $x = b/a$.

Between matrices of the same type, solving the equation $\mathbf{A} + \mathbf{X} = \mathbf{B}$ is as simple as between numbers: $\mathbf{X} = \mathbf{B} - \mathbf{A}$. The case of matrix multiplication is more complicated.

▶ Matrix multiplication is not commutative, so the solutions of the equations $\mathbf{AX} = \mathbf{B}$ and $\mathbf{YA} = \mathbf{B}$ can be different. Indeed, because of this, the operation of matrix division cannot be introduced, but a division from the left and a division from the right can be, with which the solution of the above equations would be
$$\mathbf{X} = \mathbf{A}\backslash\mathbf{B}, \text{ and } \mathbf{Y} = \mathbf{B}/\mathbf{A}$$
. This does not work without any restrictions either, because there can exist several different matrices, for example $\mathbf{X}_1$ and $\mathbf{X}_2$, such that $\mathbf{AX}_1 = \mathbf{B}$ and $\mathbf{AX}_2 = \mathbf{B}$. Thus, what would decide which one is equal to $\mathbf{A}\backslash\mathbf{B}$? If the equations $\mathbf{AX} = \mathbf{B}$ and $\mathbf{YA} = \mathbf{B}$ have only a single solution (we will learn later what the condition for this is), then the notation introduced above can surely be used. For example, if
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}, \text{ and } \mathbf{B} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix},$$
then
$$\mathbf{X} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} \backslash \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 2 \\ -1 & 0 \end{bmatrix}, \text{ because } \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}\begin{bmatrix} 3 & 2 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \text{ and}$$
$$\mathbf{Y} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} / \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -1 & 2 \end{bmatrix}, \text{ because } \begin{bmatrix} 1 & 0 \\ -1 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}.$$
▶ Finally, with the help of the concept of the *pseudoinverse*, we will extend the above two matrix divisions to the case when the equations $\mathbf{AX} = \mathbf{B}$ and $\mathbf{YA} = \mathbf{B}$ have multiple solutions or when they have no solution at all.

> By a two-variable (in other words, binary) *operation* defined on a set $H$, we mean a function which assigns an element of $H$ to pairs of elements in $H$. For example, in the case of addition of real numbers, this function assigns a real number to a pair of real numbers, let's say 1.6 to the pair of numbers $(1.2, 0.4)$. We denote this function by the $+$ sign, but instead of the prefix "$+(a, b)$" notation usual for functions, we use the so-called infix notation for operations, i.e., we write $a + b$ (see more about this in the next side note).

> In computer science, besides the infix notation of operations, we often encounter the prefix or Polish, and the postfix or reverse Polish notation. In prefix notation, the operator is placed before its arguments, in postfix notation, after them. For example, the expression $(3 + 4) \cdot 2$ is calculated by the code `(* (+ 3 4) 2)` in languages of the Lisp language family using prefix notation, while for example by the code `3 4 add 2 mul` in the PostScript language using postfix notation. (We can encounter the PostScript language in PDF format files.) The same formula takes the prefix form `'*'('+'(3,4),2)` in Maple among computer algebra languages, and `Times[Plus[3,4],2]` in Mathematica. Sage offers two possibilities: `prod([sum([3,4]),2])`, `mul([add([3,4]),2])`.

### Inverse of a matrix

We know that to solve the equation $ax = b$, it is sufficient to know *its reciprocal,* also known as *its multiplicative inverse,* and multiply $b$ by it. This idea can also be transferred to matrix multiplication.

The reciprocal of a non-zero number $a$ is the number denoted by $a^{-1}$ for which $aa^{-1} = a^{-1}a = 1$. The role of 1 in matrix multiplication is played by the identity matrix $\mathbf{I}$. It is clear that for a given matrix $\mathbf{A}$ there can only exist an $\mathbf{X}$ for which $\mathbf{AX} = \mathbf{XA} = \mathbf{I}$ if $\mathbf{A}$ is square. This gives the following definition:

**Definition 5.7 (Inverse of a matrix).** *Let $\mathbf{A}$ be an $n \times n$ matrix. We say that $\mathbf{A}$ is invertible if there exists a matrix $\mathbf{B}$ for which*
$$\mathbf{AB} = \mathbf{BA} = \mathbf{I}_n.$$
*The matrix $\mathbf{B}$ is called the inverse of $\mathbf{A}$ and is denoted by $\mathbf{A}^{-1}$. A non-invertible matrix is called singular.*

▶ It is clear that if the inverse of $\mathbf{A}$ is $\mathbf{B}$, then the inverse of $\mathbf{B}$ is $\mathbf{A}$.
▶ For example, the two matrices in the following products are each other's inverses:
$$\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}\begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}.$$
▶ It is not clear from the definition whether a matrix can have multiple inverses, but it can be easily shown that it cannot. Namely, if the matrix $\mathbf{A}$ has both $\mathbf{B}$ and $\mathbf{C}$ as inverses, i.e., $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$ and $\mathbf{AC} = \mathbf{CA} = \mathbf{I}$, then
$$\mathbf{C} = \mathbf{CI} = \mathbf{C}(\mathbf{AB}) = (\mathbf{CA})\mathbf{B} = \mathbf{IB} = \mathbf{B}.$$
▶ We can use the notation $\mathbf{A}^{-1}$ for the inverse of the matrix $\mathbf{A}$ because it complies with the principle of precedence. For example, if we want to give meaning to the power $\mathbf{A}^{-1}$ while keeping the validity of Theorem 5.3, the relation $\mathbf{A}^{-1}\mathbf{A} = \mathbf{A}^{-1+1} = \mathbf{A}^0 = \mathbf{I}$ and $\mathbf{AA}^{-1} = \mathbf{A}^{1-1} = \mathbf{A}^0 = \mathbf{I}$ must hold for it.
▶ Since we introduced the operations between matrices through the extension of the operations between numbers to tables, we expect that the inverse of $1 \times 1$ matrices coincides with the multiplicative inverse (reciprocal) of the numbers, i.e., if $\mathbf{A} = [a]$, then $\mathbf{A}^{-1} = [a^{-1}] = [1/a]$ should be true. The above definition also meets this expectation of ours.

A square matrix $\mathbf{A}$ is called *nilpotent* if there is a positive integer $k$ such that
$$\mathbf{A}^k = \mathbf{O}.$$
For example, the matrix $\begin{bmatrix} -2 & 4 \\ -1 & 2 \end{bmatrix}$ is nilpotent because $\begin{bmatrix} -2 & 4 \\ -1 & 2 \end{bmatrix}^2 = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$. The inverse featured in the following example plays an important role in several applications.

**Example 5.8 (Inverse of $\mathbf{I} - \mathbf{A}$ for nilpotent $\mathbf{A}$).** *Show that if $\mathbf{A}$ is nilpotent, i.e., for some positive $k$, $\mathbf{A}^k = \mathbf{O}$, then $\mathbf{I} - \mathbf{A}$ is invertible, and its inverse is $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}$.*

> In general, the *identity element* of the operation is required for the inverse of an element of an algebraic structure with respect to an operation. The identity element of addition is 0, because added to any element $a$, we get $a$, similarly, the identity element of multiplication is 1, because multiplying any element $a$ by it, we get $a$. In the case of addition, the opposite of an element is obtained by solving the equation $a + x = 0$, in the case of multiplication, the reciprocal is obtained by solving $ax = 1$. The opposite and the reciprocal are also called additive and multiplicative *inverses*, respectively. The identity element of matrix multiplication is the identity matrix.

*Solution.* We show that $(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}) = \mathbf{I}$.
$$\begin{aligned} (\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}) &= \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1} - \mathbf{A} - \mathbf{A}^2 - \ldots - \mathbf{A}^{k-1} - \mathbf{A}^k \\ &= \mathbf{I} - \mathbf{A}^k \\ &= \mathbf{I} \end{aligned}$$
The relation $(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1})(\mathbf{I} - \mathbf{A}) = \mathbf{I}$ can be proven in the same way. $\square$

### Inverse of elementary matrices

For every elementary row operation $R$, there is a row operation $R'$ such that $R'$ transforms back the matrix transformed by the row operation $R$ (see Exercise 5.21). Let's call this row operation $R'$ the inverse of the row operation $R$. It is easy to verify that the inverse of the row operation $S_i \leftrightarrow S_j$ is itself, the inverse of $cS_i$ is $\frac{1}{c}S_i$, and the inverse of $S_i + cS_j$ is $S_i - cS_j$.

**Proposition 5.9 (Matrix of the inverse of a row operation).** *Every elementary matrix is invertible, namely the inverse of the elementary matrix of a row operation is equal to the elementary matrix belonging to the inverse of the row operation.*

For the proof, it is sufficient to see that the product of the matrices of a row operation and the inverse row operation is the identity matrix. We leave the thinking through of the general proof to the Reader, here we only show one specific case each, namely on $3 \times 3$ matrices the product of the matrices of the row operations $S_2 \leftrightarrow S_3$, $3S_2$, and $S_1 + 4S_3$ and their inverses:
$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix},$$
$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{3} & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{3} & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix},$$
$$\begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & -4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & -4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

### Calculating the inverse

To calculate the inverse of the square matrix $\mathbf{A}$, we must solve the matrix equation $\mathbf{AX} = \mathbf{I}$, which is also a system of simultaneous equations, and can be solved with elementary row operations. First, however, we have to answer a question: couldn't it happen that the matrix equation $\mathbf{AX} = \mathbf{I}$ is solvable, but the solution does not satisfy the matrix equation $\mathbf{XA} = \mathbf{I}$? For square matrices, the answer is *no*, which means that to invert a matrix it is sufficient to solve the matrix equation $\mathbf{AX} = \mathbf{I}$!

**Theorem 5.10 (One condition is sufficient for the existence of the inverse).** *The square matrix $\mathbf{A}$ is invertible if and only if there exists a matrix $\mathbf{B}$ such that one of the conditions $\mathbf{AB} = \mathbf{I}$ and $\mathbf{BA} = \mathbf{I}$ is satisfied. If such a matrix $\mathbf{B}$ exists, it is unique.*

*Proof.* We proved the uniqueness of the inverse matrix among the remarks after Definition 5.7. Thus it is sufficient to show that for square matrices the fulfillment of any of the conditions $\mathbf{AB} = \mathbf{I}$ and $\mathbf{BA} = \mathbf{I}$ implies the fulfillment of the other as well! Moreover, it is enough to prove one of these two statements: we show that if the square matrices $\mathbf{A}$ and $\mathbf{B}$ satisfy the equation $\mathbf{AB} = \mathbf{I}$, then $\mathbf{BA} = \mathbf{I}$ also holds, i.e., $\mathbf{A}$ and $\mathbf{B}$ are inverses of each other.

Consider the matrix equation $\mathbf{AX} = \mathbf{I}$. We solve this by bringing the matrix $[\mathbf{A}|\mathbf{I}]$ to reduced row echelon form. If this is of the form $[\mathbf{I}|\mathbf{B}]$, then $\mathbf{B}$ is the solution of the equation $\mathbf{AX} = \mathbf{I}$, therefore $\mathbf{AB} = \mathbf{I}$ holds. A zero row cannot be generated in the reduced row echelon form, because we got the right side of the matrix from the matrix $\mathbf{I}$, which is a reduced row echelon form, and thus it is unique. If we got a zero row in the right submatrix with elementary row operations, then it would also have a reduced row echelon form containing a zero row, which is a contradiction. If we got a zero row only on the left half of the matrix, then the equation $\mathbf{AX} = \mathbf{I}$ would not have a solution, meaning the equality $\mathbf{AB} = \mathbf{I}$ could not hold either.

Next we show that $\mathbf{BA} = \mathbf{I}$. To do this, consider the matrix equation $\mathbf{BY} = \mathbf{I}$. To solve this, the matrix $[\mathbf{B}|\mathbf{I}]$ has to be brought to reduced row echelon form. From the previous part we know that with elementary row operations the transformation
$$[\mathbf{A}|\mathbf{I}] \Longrightarrow [\mathbf{I}|\mathbf{B}]$$
can be realized. By performing the inverses of the steps of the transformation in reverse order, we get the transformation
$$[\mathbf{I}|\mathbf{B}] \Longrightarrow [\mathbf{A}|\mathbf{I}]$$
. Swapping the two submatrices in every step here, we get the desired transformation
$$[\mathbf{B}|\mathbf{I}] \Longrightarrow [\mathbf{I}|\mathbf{A}]$$
. This means that $\mathbf{Y} = \mathbf{A}$ is a solution of the matrix equation $\mathbf{BY} = \mathbf{I}$, i.e., $\mathbf{BA} = \mathbf{I}$. $\square$

In summary:

**Proposition 5.11 (Calculating the inverse with elementary row operations).** *The square matrix $\mathbf{A}$ is invertible if the matrix $[\mathbf{A}|\mathbf{I}]$ can be brought to the form $[\mathbf{I}|\mathbf{B}]$ with elementary row operations, then the inverse of $\mathbf{A}$ is $\mathbf{B}$. If the reduced row echelon form of $\mathbf{A}$ is not the matrix $\mathbf{I}$, then $\mathbf{A}$ is not invertible.*

**Example 5.12 (Calculating the inverse).** *Calculate the inverses of the matrices*
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 6 \end{bmatrix} \quad \text{and} \quad \mathbf{B} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 2 & 1 & 0 & 0 \\ 3 & 2 & 1 & 0 \\ 4 & 3 & 2 & 1 \end{bmatrix}$$
*!*

*Solution.* Proceeding column by column with elimination:
$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 2 & 3 & 4 & 0 & 1 & 0 \\ 3 & 4 & 6 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & -1 & -2 & -2 & 1 & 0 \\ 0 & -2 & -3 & -3 & 0 & 1 \end{array}\right] \Rightarrow$$
$$\left[\begin{array}{ccc|ccc} 1 & 0 & -1 & -3 & 2 & 0 \\ 0 & 1 & 2 & 2 & -1 & 0 \\ 0 & 0 & 1 & 1 & -2 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -2 & 0 & 1 \\ 0 & 1 & 0 & 0 & 3 & -2 \\ 0 & 0 & 1 & 1 & -2 & 1 \end{array}\right]$$
So
$$\mathbf{A}^{-1} = \begin{bmatrix} -2 & 0 & 1 \\ 0 & 3 & -2 \\ 1 & -2 & 1 \end{bmatrix}.$$
Calculating the inverse of $\mathbf{B}$ with similar steps:
$$\left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 2 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\ 3 & 2 & 1 & 0 & 0 & 0 & 1 & 0 \\ 4 & 3 & 2 & 1 & 0 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 & -3 & 0 & 1 & 0 \\ 0 & 3 & 2 & 1 & -4 & 0 & 0 & 1 \end{array}\right] \Rightarrow$$
$$\left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 1 & -2 & 1 & 0 \\ 0 & 0 & 2 & 1 & 2 & -3 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 1 & -2 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 & -2 & 1 \end{array}\right]$$
So
$$\mathbf{B}^{-1} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ -2 & 1 & 0 & 0 \\ 1 & -2 & 1 & 0 \\ 0 & 1 & -2 & 1 \end{bmatrix}. \qquad \square$$

**Theorem 5.13 (Inverse of a $2 \times 2$ matrix).** *The matrix $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ is invertible if and only if $ad - bc \neq 0$, and then*
$$\mathbf{A}^{-1} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}.$$

*Proof.* We can check that the above matrix is indeed the inverse of the matrix $\mathbf{A}$ with a simple matrix multiplication. The formula proves that the condition $ad - bc \neq 0$ is a sufficient condition for invertibility. To see the necessity of the condition, note that $ad - bc = 0$, i.e., $ad = bc$ holds if and only if one row of $\mathbf{A}$ is a scalar multiple of the other. But then one row can be zeroed out, meaning that the matrix $\mathbf{A}$ cannot be transformed into the identity matrix with elementary row operations. $\square$

### Properties of the inverse

We examine the relationship of matrix inversion with other operations.

**Theorem 5.14 (Basic properties of the inverse).** *Assume that both $\mathbf{A}$ and $\mathbf{B}$ are $n \times n$ invertible matrices, $c \neq 0$ is a scalar and $k$ is a positive integer. Then the following are true:*
- a) *$\mathbf{A}^{-1}$ is invertible, and its inverse is $(\mathbf{A}^{-1})^{-1} = \mathbf{A}$,*
- b) *$c\mathbf{A}$ is invertible, and its inverse is $\frac{1}{c}\mathbf{A}^{-1}$,*
- c) *$\mathbf{AB}$ is invertible, and its inverse is $\mathbf{B}^{-1}\mathbf{A}^{-1}$,*
- d) *$\mathbf{A}^k$ is invertible, and its inverse is $(\mathbf{A}^k)^{-1} = (\mathbf{A}^{-1})^k$, by definition we mean this by $\mathbf{A}^{-k}$,*
- e) *$\mathbf{A}^\mathsf{T}$ is invertible, and $(\mathbf{A}^\mathsf{T})^{-1} = (\mathbf{A}^{-1})^\mathsf{T}$.*

*Proof.* We prove the more important ones among the statements, leaving the rest to the Reader as an exercise:

c) The product
$$(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1}) = \mathbf{A}(\mathbf{BB}^{-1})\mathbf{A}^{-1} = \mathbf{AA}^{-1} = \mathbf{I}$$
proves that $\mathbf{AB}$ is invertible, and its inverse is $\mathbf{B}^{-1}\mathbf{A}^{-1}$.

d) The validity of the equality $(\mathbf{A}^k)^{-1} = (\mathbf{A}^{-1})^k$ can be read from the transcription
$$\underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ factors}}\underbrace{\mathbf{A}^{-1}\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k \text{ factors}} = \underbrace{\mathbf{A}^{-1}\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k \text{ factors}}\underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ factors}} = \mathbf{I}$$
because the product of the two matrices in the middle of the products is always $\mathbf{I}$, which can be omitted, and repeating this step $k$ times we finally get the desired result:
$$\underbrace{\mathbf{AA} \ldots (\mathbf{A}\mathbf{A}^{-1})\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{} = \underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k-1}\underbrace{\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k-1} = \cdots = \mathbf{I}. \qquad \square$$

▶ Statement c) can be generalized by induction to the product of finitely many matrices: if each of the square matrices $\mathbf{A}_1$, $\mathbf{A}_2, \ldots \mathbf{A}_m$ of the same size is invertible, then so is their product, and
$$(\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_m)^{-1} = \mathbf{A}_m^{-1} \ldots \mathbf{A}_2^{-1}\mathbf{A}_1^{-1}.$$

*Figure 5.2. Let $A$ denote the rotation of the bottom face of the magic cube, $B$ that of the right back face, and let $AB$ denote the transformation obtained by executing $B$, then $A$ successively. (Similar to the composition of functions, we evaluate and execute the function on the right side first, then the one on the left side.) Its inverse $(AB)^{-1}$ can be obtained by first executing the transformation $A^{-1}$ then $B^{-1}$. Their product is $B^{-1}A^{-1}$, so $(AB)^{-1} = B^{-1}A^{-1}$.*

▶ We can encounter something similar to the relation in statement c) while rotating the Rubik's cube as well. Let $A$ denote one rotation, and $B$ another. Similar to the composition of functions, let's define the product of the two transformations: let $AB$ denote the transformation obtained by executing the rotation $B$ then $A$ successively (see Figure 5.2). The inverse of this transformation restores the original state, for this first the inverse of the transformation $A$ must be executed, then the inverse of $B$, so $(AB)^{-1} = B^{-1}A^{-1}$.
▶ The definition of $\mathbf{A}^{-k}$ in point d) also complies with the principle of precedence. E.g., extending the relation $\mathbf{A}^m\mathbf{A}^n = \mathbf{A}^{m+n}$ to a negative exponent leads to the formula $\mathbf{A}^k\mathbf{A}^{-k} = \mathbf{A}^0$, from which we get that $\mathbf{A}^{-k} = (\mathbf{A}^k)^{-1}$.

### Invertibility and solvability of systems of equations

The following theorem connects the invertibility of matrices, the elementary row operations used in solving systems of equations, and the solvability of systems of equations.

**Theorem 5.15 (Invertibility and systems of equations).** *Given an $n \times n$ matrix $\mathbf{A}$. The following statements are equivalent:*
- a) *$\mathbf{A}$ is invertible;*
- b) *the matrix equation $\mathbf{AX} = \mathbf{B}$ has a unique solution for any $n \times t$ matrix $\mathbf{B}$;*
- c) *the system of equations $\mathbf{Ax} = \mathbf{b}$ has a unique solution for any $n$-dimensional vector $\mathbf{b}$;*
- d) *the homogeneous linear system of equations $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution $\mathbf{x} = \mathbf{0}$;*
- e) *the reduced row echelon form of $\mathbf{A}$ is $\mathbf{I}$;*
- f) *$\mathbf{A}$ can be expressed as a product of elementary matrices.*

*Proof.* We prove the equivalence of the statements by verifying the implications $(a) \Rightarrow (b) \Rightarrow (c) \Rightarrow (d) \Rightarrow (e) \Rightarrow (f) \Rightarrow (a)$.

$(a) \Rightarrow (b)$: Let $\mathbf{A}$ be invertible and let $\mathbf{B}$ be an arbitrary matrix of size $n \times t$. Then multiplying both sides of the equation $\mathbf{AX} = \mathbf{B}$ by $\mathbf{A}^{-1}$ from the left, we get $\mathbf{A}^{-1}\mathbf{AX} = \mathbf{A}^{-1}\mathbf{B}$, i.e., $\mathbf{X} = \mathbf{A}^{-1}\mathbf{B}$. This shows that, on the one hand, the matrix equation has a solution, and on the other hand, it has no other solution, since every solution can be obtained this way, and the inverse of $\mathbf{A}$ is unique.

$(b) \Rightarrow (c)$: Obvious with the choice $\mathbf{B} = \mathbf{b}$.

$(c) \Rightarrow (d)$: Obvious with the choice $\mathbf{b} = \mathbf{0}$.

$(d) \Rightarrow (e)$: A homogeneous linear system of equations with $n$ unknowns and $n$ equations has a unique solution if and only if the reduced row echelon form of its coefficient matrix is $\mathbf{I}_n$.

$(e) \Rightarrow (f)$: If the reduced row echelon form of $\mathbf{A}$ is $\mathbf{I}_n$, then there exists a sequence of elementary row operations which performs the transformation $\mathbf{A} \Rightarrow \mathbf{I}_n$. Let $\mathbf{E}_1, \ldots \mathbf{E}_k$ denote the elementary matrices corresponding to the elementary row operations. Then $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{A} = \mathbf{I}_n$. From here $\mathbf{A}$ can be expressed after multiplying from the left by $\mathbf{E}_1^{-1}, \ldots \mathbf{E}_k^{-1}$:
$$\mathbf{A} = \mathbf{E}_k^{-1} \ldots \mathbf{E}_2^{-1}\mathbf{E}_1^{-1}.$$
The inverse of an elementary matrix is an elementary matrix, so $\mathbf{A}$ can be expressed as a product of elementary matrices.

$(f) \Rightarrow (a)$: Every factor of the matrix $\mathbf{A} = \mathbf{E}_k^{-1} \ldots \mathbf{E}_2^{-1}\mathbf{E}_1^{-1}$ is invertible, since each is an elementary matrix, so their product is too, and the inverse is
$$\mathbf{A}^{-1} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k. \qquad \square$$

▶ The equivalence of the many points of the theorem means that for any two of them, it is true that "one is true if and only if the other is". For example, "$\mathbf{A}$ is invertible if and only if the system of equations $\mathbf{Ax} = \mathbf{b}$ has a unique solution for any vector $\mathbf{b}$."
▶ Later we will also show that $\mathbf{A}$ is invertible if and only if the system of equations $\mathbf{Ax} = \mathbf{b}$ is solvable for any vector $\mathbf{b}$. That is, the uniqueness can be omitted from the condition. In other words, if $\mathbf{Ax} = \mathbf{b}$ is solvable for any vector $\mathbf{b}$, then the solution is unique for any $\mathbf{b}$.

**Example 5.16 (Solving a system of equations by matrix inversion).** *Solve the system of equations*
$$\begin{alignedat}{9} 2x &{}+{}& y &{}={}& 2 \\ 5x &{}+{}& 3y &{}={}& 3 \end{alignedat}$$
*by matrix inversion.*

*Solution.* According to Theorem 5.13, the coefficient matrix and its inverse are
$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}, \quad \mathbf{A}^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix},$$
thus for the vector of unknowns $(x, y)$
$$\begin{bmatrix} x \\ y \end{bmatrix} = \mathbf{A}^{-1}\begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 3 \\ -4 \end{bmatrix}. \qquad \square$$

**Example 5.17 (Solving a matrix equation by matrix inversion).** *Solve the matrix equation $\mathbf{AX} = \mathbf{B}$, where*
$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}, \quad \text{and} \quad \mathbf{B} = \begin{bmatrix} 1 & 3 & 2 \\ 4 & 3 & 1 \end{bmatrix}.$$

*Solution 1.* The matrix $\mathbf{A}$ is the same as the matrix in the previous exercise, so we know that it is invertible, and we know its inverse. The solution of the matrix equation $\mathbf{AX} = \mathbf{B}$ is:
$$\mathbf{X} = \mathbf{A}^{-1}\mathbf{B} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 1 & 3 & 2 \\ 4 & 3 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 6 & 5 \\ 3 & -9 & -8 \end{bmatrix}. \qquad \square$$

*Solution 2.* Every matrix equation of the form $\mathbf{AX} = \mathbf{B}$ with invertible $\mathbf{A}$ can be solved as a system of simultaneous equations by bringing the matrix $[\mathbf{A}|\mathbf{B}]$ to reduced row echelon form. So every product $\mathbf{A}^{-1}\mathbf{B}$ can be calculated this way. In this example:
$$\left[\begin{array}{cc|ccc} 2 & 1 & 1 & 3 & 2 \\ 5 & 3 & 4 & 3 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cc|ccc} 1 & 0 & -1 & 6 & 5 \\ 0 & 1 & 3 & -9 & -8 \end{array}\right] \qquad \square$$

▶ We note that we rarely solve linear systems of equations by matrix inversion, because its operational requirement is somewhat larger than that of simple elimination.

**Example 5.18 (Decomposing a matrix into a product of elementary matrices).** *Decompose the matrix $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix}$ into a product of elementary matrices!*

*Solution.* According to the $(e) \Rightarrow (f)$ step of the proof of Theorem 5.15, if a matrix $\mathbf{A}$ can be transformed into the identity matrix with elementary row operations, then the inverses of the elementary row operations performed in reverse order transform $\mathbf{I}$ into $\mathbf{A}$. But this means that the product of the elementary matrices corresponding to them is exactly $\mathbf{A}$.

| Elementary row operations | Elementary matrices | Inverses of elementary matrices |
|---|---|---|
| $\begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix}$ | | |
| $\Downarrow\; S_2 - 3S_1$ | $\mathbf{E}_1 = \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix}$ | $\mathbf{E}_1^{-1} = \begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 2 \\ 0 & -1 \end{bmatrix}$ | | |
| $\Downarrow\; -S_2$ | $\mathbf{E}_2 = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ | $\mathbf{E}_2^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ | | |
| $\Downarrow\; S_1 - 2S_2$ | $\mathbf{E}_3 = \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix}$ | $\mathbf{E}_3^{-1} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ | | |

Following the above transformation, thus $\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \mathbf{I}$, from which $\mathbf{A} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$, i.e.,
$$\begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix},$$
thus we decomposed $\mathbf{A}$ into a product of three elementary matrices. $\square$

### Invertibility and basis

According to Theorem 5.15, the invertibility of the square matrix $\mathbf{A}$ is equivalent to the homogeneous linear system of equations $\mathbf{Ax} = \mathbf{0}$ having only the trivial solution. Since $\mathbf{Ax}$ is a linear combination of the column vectors of $\mathbf{A}$, this means

that the zero vector can be expressed as a linear combination of the column vectors of $\mathbf{A}$ in only one way, the trivial way. So the column vectors of $\mathbf{A}$ are linearly independent! This also means that the column vectors of $\mathbf{A}$ form a basis, and that $\operatorname{r}(\mathbf{A}) = n$. Using Theorem ??, according to which the dimension of the row space and the column space is equal to the rank, we get the following theorem:

**Corollary 5.19 (Invertibility and basis).** *Given a real $n \times n$ matrix $\mathbf{A}$. The following statements are equivalent:*
- a) *$\mathbf{A}$ is invertible;*
- b) *the column vectors of $\mathbf{A}$ are linearly independent;*
- c) *the column vectors of $\mathbf{A}$ form a basis in $\mathbb{R}^n$;*
- d) *the row vectors of $\mathbf{A}$ are linearly independent;*

- e) *the row vectors of $\mathbf{A}$ form a basis in $\mathbb{R}^n$;*
- f) *$\operatorname{r}(\mathbf{A}) = n$.*

We replace the above statements with their negations and add that if there is a linear relationship among the row vectors of a matrix, then there will necessarily be a zero row in the reduced row echelon form:

**Corollary 5.20 (Singular matrices).** *Let $\mathbf{A}$ be a real $n \times n$ matrix. The following statements are equivalent:*
- a) *$\mathbf{A}$ is singular (i.e., not invertible);*
- b) *the column vectors of $\mathbf{A}$ are linearly dependent;*
- c) *the dimension of the subspace spanned by the column vectors of $\mathbf{A}$ is less than $n$;*
- d) *the row vectors of $\mathbf{A}$ are linearly dependent;*
- e) *the dimension of the subspace spanned by the row vectors of $\mathbf{A}$ is less than $n$;*
- f) *any row echelon form of $\mathbf{A}$ (including the reduced one) has a zero row;*
- g) *$\operatorname{r}(\mathbf{A}) < n$.*

### Change of basis

Let $\mathcal{B}$ and $\mathcal{C}$ be two bases of $\mathbb{R}^n$, and let $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ denote the transition matrix from $\mathcal{B}$ to $\mathcal{C}$, and $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}$ the transition matrix from $\mathcal{C}$ to $\mathcal{B}$. Furthermore, let $\mathbf{v}$ be an arbitrary vector of the space, with its form in the basis $\mathcal{B}$ being $[\mathbf{v}]_{\mathcal{B}}$. According to Theorem 4.24,
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}, \quad \text{and} \quad [\mathbf{v}]_{\mathcal{B}} = \mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}[\mathbf{v}]_{\mathcal{C}}.$$
Substituting the first into the second equation, we get that
$$[\mathbf{v}]_{\mathcal{B}} = \mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}},$$
that is, $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ maps every vector to itself, therefore it is equal to the identity matrix.

**Theorem 5.21 (Inverse of the transition matrix).** *If $\mathcal{B}$ and $\mathcal{C}$ are two bases of $\mathbb{R}^n$, then the transition matrices $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ and $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}$ are the inverses of each other, i.e., $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}} = \mathbf{I}_n$.*

**Example 5.22 (Inverse of the transition matrix).** *In a basis $\mathcal{B} = \{ \mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3 \}$ of $\mathbb{R}^3$, we have written the standard unit vectors:*
$$\mathbf{i} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{j} = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{k} = \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}_{\mathcal{B}}.$$
*Write the coordinate forms of the basis vectors of $\mathcal{B}$ in the standard basis!*

*Solution.* Let $\mathcal{E}$ denote the standard basis. We expressed its vectors using the elements of the basis $\mathcal{B}$, so with the matrix formed from these, the coordinate forms of the vectors in $\mathcal{E}$ in terms of $\mathcal{B}$ can be written; thus this is the transition matrix $\mathcal{B} \leftarrow \mathcal{E}$, that is
$$\mathbf{X}_{\mathcal{B} \leftarrow \mathcal{E}} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 2 & 4 \end{bmatrix}.$$
Its inverse is the required matrix:
$$\mathbf{Y}_{\mathcal{E} \leftarrow \mathcal{B}} = \mathbf{X}_{\mathcal{B} \leftarrow \mathcal{E}}^{-1} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 2 & 4 \end{bmatrix}^{-1} = \begin{bmatrix} 2 & -2 & 1 \\ -1 & 3 & -2 \\ 0 & -1 & 1 \end{bmatrix}.$$
Its column vectors give the forms of the vectors of $\mathcal{B}$ in $\mathcal{E}$. $\square$

**Example 5.23 (Transition matrix).** *Let*
$$\mathcal{B} = \{ (1, 0, 0), (1, 1, 0), (1, 1, 1) \}, \text{ and } \mathcal{C} = \{ (1, 2, 3), (0, 1, 2), (0, 0, 1) \}$$
*be two bases in $\mathbb{R}^3$. Write the transition matrix from $\mathcal{B}$ to $\mathcal{C}$!*

*Solution 1.* From the bases, the following transition matrices can be read off:
$$\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}} = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 2 & 1 \end{bmatrix}.$$
From here $\mathbf{D}_{\mathcal{C} \leftarrow \mathcal{E}} = \mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}^{-1}$, so $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \mathbf{D}_{\mathcal{C} \leftarrow \mathcal{E}}\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}$, that is
$$\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 2 & 1 \end{bmatrix}^{-1}\begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \\ -2 & -1 & -1 \\ 1 & -1 & 0 \end{bmatrix}. \qquad \square$$

*Solution 2.* Among the matrices readable from the bases, the relation $\mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}$ holds, where $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ is the unknown matrix, which can be read from the reduced row echelon form of $[\mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}|\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}]$:
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 1 & 1 \\ 2 & 1 & 0 & 0 & 1 & 1 \\ 3 & 2 & 1 & 0 & 0 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & -2 & -1 & -1 \\ 0 & 0 & 1 & 1 & -1 & 0 \end{array}\right],$$
therefore
$$\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 1 & 1 \\ -2 & -1 & -1 \\ 1 & -1 & 0 \end{bmatrix},$$
which is the same as the previous solution. $\square$

### Fast multiplication

To multiply two $2 \times 2$ matrices in the usual way, 8 multiplications and 4 additions are needed. In 1969, Strassen found a method by which this matrix multiplication can be performed with 7 multiplications, although at the cost of increasing the number of additions to 16.

**5.1 (Strassen formulas).** *Let $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ all be $2 \times 2$ matrices. The multiplication $\mathbf{C} = \mathbf{AB}$ can be performed using the following formulas:*
$$\begin{aligned}
d_1 &= (a_{11} + a_{22})(b_{11} + b_{22}) & \qquad c_{11} &= d_1 + d_4 - d_5 + d_7 \\
d_2 &= (a_{21} + a_{22})b_{11} & c_{21} &= d_2 + d_4 \\
d_3 &= a_{11}(b_{12} - b_{22}) & c_{12} &= d_3 + d_5 \\
d_4 &= a_{22}(-b_{11} + b_{21}) & c_{22} &= d_1 + d_3 - d_2 + d_6 \\
d_5 &= (a_{11} + a_{12})b_{22} \\
d_6 &= (-a_{11} + a_{21})(b_{11} + b_{12}) \\
d_7 &= (a_{12} - a_{22})(b_{21} + b_{22})
\end{aligned}$$

The brilliance of the idea is that this method can be extended to square matrices of arbitrary size, and for sufficiently large $n$, the computational cost of matrix multiplication performed this way will be lower than the traditional one. The computational cost of standard matrix multiplication is $2n^3 - n^2$ (of which $n^3$ are multiplications and $n^3 - n^2$ are additions – think about it!), while multiplication with the Strassen formulas for $n = 2^k$ is at most $7 \cdot 7^k - 6 \cdot 4^k$. For $n = 2^{10}$, this already gives fewer operations. The essence of the generalization is that the Strassen formulas can also be used for $2 \times 2$ block matrices because they do not use the commutativity of multiplication; thus, if $M(n)$ denotes the number of multiplications and $S(n)$ the number of additions required to multiply two $n \times n$ matrices, then $M(2n) \leq 7M(n)$ and $S(2n) \leq 18n^2 + 7S(n)$. Using the initial conditions $M(1) = 1$, $S(1) = 0$, it can be shown that $M(2^k) \leq 7^k$, $S(2^k) \leq 6(7^k - 4^k)$. From these formulas, using the ceiling function notation and $k = \lceil \log_2 n \rceil$, we obtain the upper bound $cn^{\log_2 7} \leq cn^{2.81}$ for the total number of operations, which is better than the value $2n^3 - n^2$, regardless of the specific value of the constant $c$. Since all $n^2$ elements of both matrices to be multiplied must be used, the lower bound for the number of required operations is $cn^2$. The upper bound of $cn^{2.81}$ was improved to $cn^{2.375477}$ in 1990 (Coppersmith and Winograd), the best known bound in 2015 is $cn^{2.3728639}$, but the conjecture is that the exponent can be pushed down to 2, or at least $2 + \varepsilon$, where $\varepsilon$
is an arbitrarily small positive number.

The weakness of the method is its numerical instability, so in practice it is only worth using for certain matrices, such as large integer matrices when arbitrary-precision arithmetic is used.

### Exercises

#### True or false

**5.1.** A square matrix $\mathbf{A}$ is invertible if and only if it can be obtained from the matrix $\mathbf{I}$ by elementary row operations.

**5.2.** If elementary row operations transform $\mathbf{A}$ into $\mathbf{B}$, then the inverse row operations transform $\mathbf{B}$ into $\mathbf{A}$.

**5.3.** If elementary row operations transform $\mathbf{A}$ into $\mathbf{B}$, then the inverse row operations performed in reverse order transform $\mathbf{B}$ into $\mathbf{A}$.

#### Operational identities

**5.4.** *Properties of addition and scalar multiplication.* Let $\mathbf{A}$, $\mathbf{B}$ and $\mathbf{C}$ be matrices of the same type ($m \times n$), and let $c$ and $d$ be scalars. Then
- a) $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$ (commutativity)
- b) $\mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C}$ (associativity)
- c) $\mathbf{A} + \mathbf{O}_{m \times n} = \mathbf{A}$ (zero matrix)
- d) $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}_{m \times n}$ (existence of additive inverse)
- e) $c(d\mathbf{A}) = (cd)\mathbf{A}$ (associativity)
- f) $(c + d)\mathbf{A} = c\mathbf{A} + d\mathbf{A}$ (distributivity)
- g) $c(\mathbf{A} + \mathbf{B}) = c\mathbf{A} + c\mathbf{B}$ (distributivity)
- h) $0\mathbf{A} = \mathbf{O}_{m \times n}$, $1\mathbf{A} = \mathbf{A}$, $-1\mathbf{A} = -\mathbf{A}$

**5.5.** In an algebraic expression, we perform the following substitution:
$$\begin{aligned} u &= 3x_1 + 2x_2 + 4x_3 \\ v &= x_1 - 3x_2 + x_3 \\ w &= 2x_1 - x_2 - 3x_3 \end{aligned}$$
Write the linear substitution in matrix multiplication form. Let $(u^2 + v^2 + w^2)(2u - v - w)$ be the expression in which we perform the substitution. Write this expression before and after the substitution using matrix operations!

#### Computational exercises

Decompose the following matrices into a product of elementary matrices!

**5.6.** $\begin{bmatrix} 1 & 3 \\ 2 & 8 \end{bmatrix}$

**5.7.** $\begin{bmatrix} 1 & 2 \\ -2 & -1 \end{bmatrix}$

**5.8.** $\begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$

**5.9.** $\begin{bmatrix} 2 & 4 \\ 3 & 8 \end{bmatrix}$

**5.10.** $\begin{bmatrix} 2 & 0 & 4 \\ 0 & 2 & 0 \\ 3 & 2 & 7 \end{bmatrix}$

**5.11.** $\begin{bmatrix} 1 & 1 & 2 \\ 1 & 2 & 2 \\ 2 & 4 & 5 \end{bmatrix}$

**5.12.** Determine all $2 \times 2$ matrices $\mathbf{A}$ for which $\mathbf{A}^2 = \mathbf{O}$. In other words, determine all square roots of the zero matrix!

**5.13.** Calculate the $k$-th powers of the matrix
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}$$

**5.14.** Write the definition of matrix multiplication using the Einstein convention.

#### Block matrices

**5.15.** Show that if $\mathbf{A}$ and $\mathbf{D}$ are invertible matrices, then the following so-called block diagonal matrix is invertible, and its inverse is
$$\begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{A}^{-1} & \mathbf{O} \\ \mathbf{O} & \mathbf{D}^{-1} \end{bmatrix}.$$
furthermore, for an arbitrary matrix $\mathbf{B}$ of appropriate type,
$$\begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{A}^{-1} & -\mathbf{A}^{-1}\mathbf{B}\mathbf{D}^{-1} \\ \mathbf{O} & \mathbf{D}^{-1} \end{bmatrix}.$$

**5.16.** Show that if $\mathbf{A}$ and $\mathbf{D}$ are square matrices, then
$$\begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{X} & -\mathbf{X}\mathbf{B}\mathbf{D}^{-1} \\ -\mathbf{D}^{-1}\mathbf{C}\mathbf{X} & \mathbf{D}^{-1} + \mathbf{D}^{-1}\mathbf{C}\mathbf{X}\mathbf{B}\mathbf{D}^{-1} \end{bmatrix},$$
where $\mathbf{X} = (\mathbf{A} - \mathbf{B}\mathbf{D}^{-1}\mathbf{C})^{-1}$, and we assume that all written matrix inverses exist.

Using one of the two previous exercises, calculate the inverses of the following matrices!

**5.17.** $\begin{bmatrix} 2 & 3 & 0 & 0 & 0 \\ 1 & 2 & 0 & 0 & 0 \\ 0 & 0 & 7 & 3 & 3 \\ 0 & 0 & 8 & 1 & 2 \\ 0 & 0 & 4 & 4 & 3 \end{bmatrix}$

**5.18.** $\begin{bmatrix} 2 & 3 & 1 & 1 & 1 \\ 1 & 2 & 1 & 1 & 1 \\ 0 & 0 & 7 & 3 & 3 \\ 0 & 0 & 8 & 1 & 2 \\ 0 & 0 & 4 & 4 & 3 \end{bmatrix}$

**5.19.** $\begin{bmatrix} 2 & 3 & 1 & 1 & 1 \\ 1 & 2 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 & 0 \\ 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 0 & 0 & 1 \end{bmatrix}$

#### Proofs

**5.20.** Prove that if $c\mathbf{A} = \mathbf{O}$, then either $c = 0$ or $\mathbf{A} = \mathbf{O}$.

**5.21.** *Row operation and inverse of an elementary matrix.* Let $\mathbf{E}_{ij}$ denote the elementary matrix corresponding to the row operation $S_i \leftrightarrow S_j$, let $\mathbf{E}_i(c)$ correspond to $cS_i$, and $\mathbf{E}_{ij}(c)$ to $S_i + cS_j$. Show that $\mathbf{E}_{ij}^{-1} = \mathbf{E}_{ij}$, $\mathbf{E}_i(c)^{-1} = \mathbf{E}_i(\frac{1}{c})$, and $\mathbf{E}_{ij}(c)^{-1} = \mathbf{E}_{ij}(-c)$.

**5.22.** Show that if $\mathbf{A}$ commutes with $\mathbf{B}$ and $\mathbf{B}$ is invertible, then $\mathbf{A}$ also commutes with $\mathbf{B}^{-1}$.

#### Abstraction

**5.23.** *Invertible operation.* Let $\odot$ be a binary operation defined on $H$, i.e., a function $H^2 \to H$. Formulate what it means for $\odot$ to be invertible on a subset $R \subseteq H$. How does the definition change if the operation is commutative?

**5.24.** *Inverse of an element.* Let $\odot$ be a binary operation defined on $H$.
1. What does it mean for $e \in H$ to be the identity element of this operation?
2. What does it mean for $b \in H$ to be the inverse of the element $a \in H$?

**5.25.•** *Fast inversion.* Let $\mathbf{B} = \mathbf{A}^{-1}$, both being $2 \times 2 matrices$. Show that with the help of matrix inversion defined by the following procedure, an algorithm can be created for $n \times n$ matrices whose computational cost is at most $cn^{2.81}$.
$$\begin{aligned}
c_1 &= a_{11}^{-1} & \qquad b_{12} &= c_3 c_6 \\
c_2 &= a_{21}c_1 & b_{21} &= c_6 c_2 \\
c_3 &= c_1 a_{12} & c_7 &= c_3 b_{21} \\
c_4 &= c_2 a_{12} & b_{11} &= c_1 - c_7 \\
c_5 &= c_4 - a_{22} & b_{22} &= -c_6 \\
c_6 &= c_5^{-1}
\end{aligned}$$

#### Inverse of the sum of a matrix and a dyad

*There is no simple formula for the inverse of a sum matrix, but there are very useful results for special matrices.*

**5.26.** *Sherman–Morrison formula.* Suppose that the matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ is invertible, and $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ are two vectors such that $1 + \mathbf{v}^\mathsf{T}\mathbf{A}^{-1}\mathbf{u} \neq 0$. Then $\mathbf{A} + \mathbf{u}\mathbf{v}^\mathsf{T}$ is invertible, and
$$(\mathbf{A} + \mathbf{u}\mathbf{v}^\mathsf{T})^{-1} = \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^\mathsf{T}\mathbf{A}^{-1}}{1 + \mathbf{v}^\mathsf{T}\mathbf{A}^{-1}\mathbf{u}}.$$

**5.27.** *Change of inverse as a function of the change of one element of the matrix.* Let $\mathbf{A}$ be an invertible matrix, and change the element $a_{ij}$ to $a_{ij} + \varepsilon$. Express the inverse of the resulting matrix using $\mathbf{A}^{-1}$.

**5.28.•** *Change of inverse on a numerical example.* Given a matrix $\mathbf{A}$ and its inverse:
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 0 & 0 & 3 \\ 3 & 0 & 0 & 2 \\ 4 & 3 & 2 & 1 \end{bmatrix} \quad \mathbf{A}^{-1} = \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix}.$$
Change the value of $a_{11}$ from 1 to $11/10$. Let the resulting matrix be denoted by $\mathbf{B}$. Determine its inverse!

## Operations with special matrices

*In practice, we often encounter special matrices with which operations can be performed more simply.*

### Diagonal matrices

The rules for matrix operations with diagonal matrices are very simple.

Let $\mathbf{A} = \operatorname{diag}(1, 2, 3)$, $\mathbf{B} = \operatorname{diag}(5, 4, 3)$. Then
$$\mathbf{AB} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}\begin{bmatrix} 5 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 3 \end{bmatrix} = \begin{bmatrix} 5 & 0 & 0 \\ 0 & 8 & 0 \\ 0 & 0 & 9 \end{bmatrix},$$
$$\mathbf{A}^2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 9 \end{bmatrix}, \quad \mathbf{A}^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{3} \end{bmatrix},$$
$$\mathbf{A}^k = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^k = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2^k & 0 \\ 0 & 0 & 3^k \end{bmatrix}, \text{ where } k \text{ is an integer.}$$

Based on all these, the following theorem can be easily proven:

**Theorem 5.24 (Operations with diagonal matrices).** *Let $\mathbf{A} = \operatorname{diag}(a_1, a_2, \ldots, a_n)$, $\mathbf{B} = \operatorname{diag}(b_1, b_2, \ldots, b_n)$, and let $k$ be an integer. Then*
- a) *$\mathbf{AB} = \operatorname{diag}(a_1 b_1, a_2 b_2, \ldots, a_n b_n)$,*
- b) *$\mathbf{A}^k = \operatorname{diag}(a_1^k, a_2^k, \ldots, a_n^k)$, in particular*
- c) *$\mathbf{A}^{-1} = \operatorname{diag}(a_1^{-1}, a_2^{-1}, \ldots, a_n^{-1})$.*

*The operation in c) - and in b) for negative $k$ - can be performed if and only if $a_i \neq 0$ ($i = 1, 2, \ldots, n$).*

### Permutation matrices and transversals

Matrices obtained by permuting the rows of diagonal matrices are also easy to handle.

We know that any permutation can be obtained by successively swapping pairs of elements. In the language of algebra, any permutation can be decomposed into a product of transpositions. For example, the permutation $\{2, 4, 3, 1\}$ of the set $\{1, 2, 3, 4\}$ can be obtained with the following transpositions (swaps of element pairs):
$$\{1, 2, 3, 4\} \to \{2, 1, 3, 4\} \to \{2, 4, 3, 1\}$$
Thus, if we permute the rows of a matrix, i.e., perform some row swaps on it, this can be achieved by left multiplications with the elementary matrices giving the row swaps. The matrix obtained as the product of these elementary matrices can be obtained from the identity matrix by performing the specified row swaps on it. For example, by applying the permutation $\{2, 4, 3, 1\}$ to the identity matrix $\mathbf{I}_4$, we obtain the following matrix $\mathbf{P}$:
$$\mathbf{I}_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{S_1 \leftrightarrow S_2} \begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{S_2 \leftrightarrow S_4} \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix} = \mathbf{P}$$
Multiplying an arbitrary $4 \times m$ matrix from the left by this will swap its rows according to the above permutation, for example
$$\mathbf{PA} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{21} & a_{22} \\ a_{41} & a_{42} \\ a_{31} & a_{32} \\ a_{11} & a_{12} \end{bmatrix}$$

**Definition 5.25 (Permutation matrix, transversal).** *A matrix obtained by permuting the rows of a diagonal matrix is called a* transversal *(or snake), in particular, a matrix obtained similarly from the identity matrix is called a* permutation matrix*.*

▶ For example, each of the following matrices is a transversal, and the last two are also permutation matrices:
$$\begin{bmatrix} 0 & 5 & 0 \\ 0 & 0 & 9 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & \alpha & 0 & 0 \\ \gamma & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & \beta \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$
▶ It is easy to see that a permutation matrix is a square matrix in which there is *exactly* one 1 in every row and every column, and all other elements are 0. A transversal is a square matrix in which there is *at most* one nonzero element in every row and every column.
▶ Every transversal can also be obtained from a diagonal matrix by column swaps. We also obtain a transversal from a diagonal matrix if, in addition to permuting the rows, we also permute the columns.
▶ If $\mathbf{P}$ is a permutation matrix, then $\mathbf{PA}$ can be obtained from $\mathbf{A}$ with exactly the same permutation of rows with which $\mathbf{P}$ was obtained from $\mathbf{I}$.

**Theorem 5.26 (Operations with permutation matrices).** *The product of any two permutation matrices of the same size, and any integer power of a permutation matrix, is a permutation matrix. The inverse of a permutation matrix equals its transpose, i.e., if $\mathbf{P}$ is a permutation matrix, then*
$$\mathbf{P}^{-1} = \mathbf{P}^\mathsf{T}.$$

*Proof.* Let $\mathbf{P}$ and $\mathbf{Q}$ be two permutation matrices. Their product's row vectors are of the form $\mathbf{P}_{i*}\mathbf{Q}$, where $\mathbf{P}_{i*}$ is identical to one of the standard unit vectors, e.g., $\mathbf{P}_{i*} = \mathbf{e}_k$. Then the product vector has 1 only in the element corresponding to the column that equals $\mathbf{e}_k$, and there is exactly one such column. Therefore, every row of the product matrix contains exactly one 1, the rest being 0. For columns, the statement can be proved similarly. The statement regarding the product is a natural consequence of the statement for positive integer powers. The statement is also true for negative integer powers, to prove which it is sufficient to show it for the inverse.

Consider the product $\mathbf{PP}^\mathsf{T}$. The element $(\mathbf{PP}^\mathsf{T})_{ii}$ is the product of the vector $\mathbf{P}_{i*}$ and the vector $(\mathbf{P}^\mathsf{T})_{*i} = \mathbf{P}_{i*}$, which is 1, while
$$(\mathbf{PP}^\mathsf{T})_{ij} = (\mathbf{P})_{i*}(\mathbf{P}^\mathsf{T})_{*j} = (\mathbf{P})_{i*} \cdot (\mathbf{P})_{j*},$$
that is, the $j$-th element of the $i$-th row of the product is the dot product of the $i$-th and $j$-th row vectors of $\mathbf{P}$, which is 0, since the 1 is in a different position in two different rows. $\square$

▶ The following example illustrates the simple statement given in the theorem:
$$\mathbf{PP}^\mathsf{T} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

### Triangular matrices

When performing Gaussian elimination, the coefficient matrix was transformed into row echelon form, in which there are always only zeros below the main diagonal. Such matrices are important not only in Gaussian elimination.

**Definition 5.27 (Triangular matrix).** *Matrices that have only 0 elements below the main diagonal are called* upper triangular matrices, *and those with only 0 elements above the main diagonal are called* lower triangular matrices. *If a triangular matrix has only 1s on its main diagonal, we speak of a* unit triangular matrix*.*

Similar to the upper triangular matrix obtained in Gaussian elimination, systems of equations whose coefficient matrix is a lower triangular matrix can also be solved just by substitutions. The only difference is that in this case we start with the first equation, and we determine the value of the first variable first. For example, from the first equation of the system
$$\begin{alignedat}{9} x &&&&&{}={}& 3 \\ 2x &{}+{}& 3y &&&{}={}& 3 \\ 2x &{}+{}& y &{}+{}& 2z &{}={}& 3 \end{alignedat}$$
$x = 3$, after substituting into the second $y = -1$, and finally after substituting into the third $z = -1$.[^8]

[^8]: *English linear algebra textbooks distinguish between the solution of systems of equations with upper and lower triangular matrices.* Forward substitution *and* backward substitution *are the names for substitution if the coefficient matrix is a lower or an upper triangular matrix, respectively. This refers to calculating the variables moving forward or backward. We will not use this fine distinction.*

**Theorem 5.28 (Operations with triangular matrices).** *The sum, product of upper triangular matrices, and the inverse of an invertible upper triangular matrix is an upper triangular matrix. An analogous theorem holds for lower triangular matrices as well. A triangular matrix is invertible if and only if none of its main diagonal elements is zero.*

We leave the proof to the Reader as an exercise.

### Symmetric and skew-symmetric matrices

We often use matrices in which the elements are equal to or the opposite of their counterpart symmetrically located with respect to the main diagonal. This property can be easily expressed with the transpose.

**Definition 5.29 (Symmetric and skew-symmetric matrices).** *A square matrix $\mathbf{A}$ is called symmetric if $\mathbf{A}^\mathsf{T} = \mathbf{A}$, and is called skew-symmetric if $\mathbf{A}^\mathsf{T} = -\mathbf{A}$.*

**Example 5.30 (Symmetric and skew-symmetric matrices).** *Among the matrices below, $\mathbf{A}$ is symmetric, $\mathbf{B}$ is skew-symmetric, and $\mathbf{C}$ does not belong to either class.*
$$\mathbf{A} = \begin{bmatrix} 5 & 6 & 1 \\ 6 & 2 & 0 \\ 1 & 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & -2 \\ -1 & 0 & 3 \\ 2 & -3 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 9 & 9 \\ -9 & 2 & 9 \\ -9 & -9 & 3 \end{bmatrix}.$$

If $\mathbf{A}$ is skew-symmetric, then for all its elements $a_{ij} = -a_{ji}$, that is, for $i = j$, $a_{ii} = -a_{ii}$. This only holds if $a_{ii} = 0$, meaning that skew-symmetric matrices have only 0s on their main diagonal.

**Proposition 5.31 (Operations with (skew-)symmetric matrices).** *The sum, scalar multiple, and inverse of symmetric matrices is symmetric. The sum, scalar multiple, and inverse of skew-symmetric matrices is skew-symmetric.*

We leave the proof of the proposition to the reader as an exercise.

**Theorem 5.32 (Decomposition into the sum of a symmetric and a skew-symmetric matrix).** *Every square matrix can be represented as the sum of a symmetric and a skew-symmetric matrix, namely for every square matrix $\mathbf{A}$*
$$\mathbf{A} = \underbrace{\tfrac{1}{2}(\mathbf{A} + \mathbf{A}^\mathsf{T})}_{\text{symmetric}} + \underbrace{\tfrac{1}{2}(\mathbf{A} - \mathbf{A}^\mathsf{T})}_{\text{skew-symm.}}.$$

*Proof.* If a matrix is symmetric, its constant multiple is too, so it is sufficient to show that the matrix $\mathbf{A} + \mathbf{A}^\mathsf{T}$ is symmetric:
$$(\mathbf{A} + \mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} + (\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} + \mathbf{A} = \mathbf{A} + \mathbf{A}^\mathsf{T}$$
Similarly $\mathbf{A} - \mathbf{A}^\mathsf{T}$ is skew-symmetric, since
$$(\mathbf{A} - \mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} - (\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} - \mathbf{A} = -(\mathbf{A} - \mathbf{A}^\mathsf{T})$$
Finally, the sum of the two matrices is indeed $\mathbf{A}$:
$$\frac{1}{2}(\mathbf{A} + \mathbf{A}^\mathsf{T}) + \frac{1}{2}(\mathbf{A} - \mathbf{A}^\mathsf{T}) = \frac{1}{2}\mathbf{A} + \frac{1}{2}\mathbf{A}^\mathsf{T} + \frac{1}{2}\mathbf{A} - \frac{1}{2}\mathbf{A}^\mathsf{T} = \mathbf{A}. \qquad \square$$

The following simple statement will have important consequences.

**Theorem 5.33 ($\mathbf{A}^\mathsf{T}\mathbf{A}$ and $\mathbf{AA}^\mathsf{T}$ are symmetric).** *The matrices $\mathbf{A}^\mathsf{T}\mathbf{A}$ and $\mathbf{AA}^\mathsf{T}$ are symmetric for any matrix $\mathbf{A}$.*

*Proof.* $(\mathbf{AA}^\mathsf{T})^\mathsf{T} = (\mathbf{A}^\mathsf{T})^\mathsf{T}\mathbf{A}^\mathsf{T} = \mathbf{AA}^\mathsf{T}$. The other half of the statement can be proved in the same way. $\square$

### Exercises

**5.29.•** *True or false.* Decide whether the following statements are true. Justify your answer!
- a) The sum and scalar multiple of symmetric matrices is also symmetric, thus any linear combination of symmetric matrices is symmetric.
- b) The sum and scalar multiple of skew-symmetric matrices is also skew-symmetric, thus any linear combination of skew-symmetric matrices is skew-symmetric.
- c) Every row echelon form matrix is an upper triangular matrix.
- d) Every upper triangular matrix is in row echelon form.

**5.30.** Calculate the inverses, squares, and cubes of the following matrices!
$$\begin{bmatrix} 0 & 2 & 0 \\ 0 & 0 & 4 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 0 & 2 \\ 0 & 4 & 0 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 5 \\ 0 & 0 & 3 & 0 \\ 4 & 0 & 0 & 0 \end{bmatrix}.$$

**5.31.** How would we solve the following system of equations in the fewest steps possible?
$$\begin{alignedat}{9}
x &{}+{}& 4y &{}+{}& 3z &{}+{}& 5w &{}={}& 3 \\
6x &{}+{}& 3y &&&&&{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &&&{}={}& 3 \\
2x &{}+{}& 4y &{}+{}& 3z &{}+{}& 5w &{}={}& 4
\end{alignedat}$$

#### Proofs

**5.32.** Show that every permutation matrix can also be obtained from the identity matrix by column swaps, and that multiplying from the right by a permutation matrix performs the same permutation on the columns of the multiplied matrix as the one by which the permutation matrix can be obtained from the identity matrix.

**5.33.** Prove that the product of any two transversals of the same size, and any positive integer power of a transversal, is a transversal.

**5.34.•** Show that a transversal $\mathbf{K}$ is invertible if and only if there is exactly one non-zero element in each of its rows, and then its inverse can be obtained by replacing every non-zero element with its reciprocal, and then transposing the resulting matrix.

## Matrix decompositions

*By matrix decomposition we mean writing a matrix as a product of matrices with given properties. We have already encountered such a decomposition when we decomposed an invertible matrix into a product of elementary matrices. In this section, we will encounter further decompositions based on the elimination procedure. One of these, the LU decomposition, is a frequently used tool for the computer solution of certain linear algebraic tasks.*

### The LU decomposition

Suppose that an upper triangular form $\mathbf{U}$ can be reached from a matrix $\mathbf{A}$ using only row operations in which a constant multiple of a row is added to a row below it. Each such elementary row operation corresponds to an elementary matrix that is lower triangular. Thus, there exist elementary lower triangular matrices $\mathbf{E}_1, \ldots, \mathbf{E}_k$ for which
$$\mathbf{E}_k \ldots \mathbf{E}_1\mathbf{A} = \mathbf{U}.$$
From here
$$\mathbf{A} = (\mathbf{E}_k \ldots \mathbf{E}_1)^{-1}\mathbf{U},$$
where $(\mathbf{E}_k \ldots \mathbf{E}_1)^{-1}$ is the inverse of a product of lower triangular matrices, hence it is itself a lower triangular matrix. Moreover, in each matrix, thus in their product and its inverse as well, the main diagonal consists entirely of 1s. This leads to the following definition:

**Definition 5.34 (LU decomposition).** *We say that a factorization of the $m \times n$ matrix $\mathbf{A}$ into the form $\mathbf{A} = \mathbf{LU}$ is an LU decomposition (LU factorization), if $\mathbf{L}$ is a unit lower triangular matrix (that is, there are 1s on the main diagonal and 0s above it), and $\mathbf{U}$ is an upper triangular matrix.*

> In *LU decomposition*, the letters L and U are the initials of the English words *lower* and *upper*.

▶ Not every matrix has an LU decomposition (see exercise ??), for example the
$$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ a & 1 \end{bmatrix}\begin{bmatrix} b & c \\ 0 & d \end{bmatrix}$$
equality does not hold for any values of the parameters.
▶ The LU decomposition is not unique, for example the
$$\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & a & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$
decomposition holds for all values of the parameter $a$. It can be shown, however, that if $\mathbf{A}$ is invertible and its LU decomposition exists, then it is unique (see Theorem 5.37).

**Example 5.35 (Calculating the LU decomposition).** *Bring the following matrices to upper triangular form using elementary row operations:*
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} \quad \text{and} \quad \mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix}$$
*and then, using these steps, write an LU decomposition for both matrices!*

*Solution.* First, let's look at matrix $\mathbf{A}$! Moving column by column, we perform Gaussian elimination. Next to each elementary row operation (in parentheses), we provide the corresponding elementary matrix:
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} \xrightarrow{S_2 - \frac{1}{2}S_1} \left(\mathbf{E}_1 = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 1 & 3 & 2 & 4 \end{bmatrix} \xrightarrow{S_3 - \frac{1}{4}S_1} \left(\mathbf{E}_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1/4 & 0 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 1 & 1 & 2 \end{bmatrix} \xrightarrow{S_3 - \frac{1}{2}S_2} \left(\mathbf{E}_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix} = \mathbf{U}.$$
Thus $\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \mathbf{U}$, from which after multiplying by the matrix $(\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1)^{-1} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$ we get $\mathbf{A} = (\mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1})\mathbf{U}$. We calculate the product of the inverses of the elementary matrices, that is, the matrix $\mathbf{L} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$. We use what was said on page 179, that the inverse of the matrix of the row operation $S_i + cS_j$ is equal to the matrix of $S_i - cS_j$:
$$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1/4 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1/2 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}.$$
Surprisingly (but in a generalizable way), the product of these elementary matrices can be obtained by copying the numbers below the main diagonal. The result is a unit lower triangular matrix. Thus the LU decomposition of matrix $\mathbf{A}$ is:
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix} \tag{5.2}$$
Since we did not perform any operations between the columns during the transformation of $\mathbf{A}$, and matrix $\mathbf{B}$ can be obtained from $\mathbf{A}$ by omitting its third column, the decomposition of $\mathbf{B}$ also immediately follows from the previous decomposition:
$$\mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} \tag{5.3}$$
$\square$

*Code 5.3. Calculating the LU decomposition of a matrix in a matrix-based language.*
```octave
OCTAVE: A
A =
   4   8   4   8
   2   6   4   4
   1   3   2   4
OCTAVE: [L U]=lu(A)
L =
   1.00   0.00   0.00
   0.50   1.00   0.00
   0.25   0.50   1.00
U =
   4   8   4   8
   0   2   2   0
   0   0   0   2
OCTAVE: B
B =
   4   8   8
   2   6   4
   1   3   4
OCTAVE: [L U]=lu(B)
L =
   1.00   0.00   0.00
   0.50   1.00   0.00
   0.25   0.50   1.00
U =
   4   8   8
   0   2   0
   0   0   2
```

The procedure followed in Example 5.35 can be easily generalized to an arbitrary matrix.

The following algorithm, by modifying Gaussian elimination to yield an upper triangular matrix instead of a row echelon form, either finds an $m \times m$ matrix $\mathbf{L}$ and an $m \times n$ matrix $\mathbf{U}$ for which $\mathbf{A} = \mathbf{LU}$, or gives an error message.

**Algorithm 5.36 (Producing an LU decomposition).** *Let $\mathbf{A}$ be an arbitrary $m \times n$ real matrix (or over any other field).*

*As a first step, let's consider the first element of the first row of matrix $\mathbf{A}$. If this is 0, but there is also a non-zero element below it in the first column, then the algorithm stops with the message "the matrix has no LU decomposition". If every element below it is 0, we continue the algorithm with the second element of the second row (in the case of Gaussian elimination, we would continue with the second element of the first row). And if the first element of the first row is not 0, then further elements of the first column can be eliminated with the row operations $S_2 - l_{21}S_1, S_3 - l_{31}S_1, \ldots, S_n - l_{n1}S_1$, where $l_{k1} = a_{k1}/a_{11}$.*

*We continue the algorithm similarly, proceeding sequentially on the main diagonal elements. If any of them is 0, but the matrix has a non-zero element below it, we stop; if all elements below it are already 0, we continue with the next main diagonal element; and if it is non-zero, then we eliminate the elements below it. Thus, in the $i$-th step we perform the row operations $S_{i+1} - l_{i+1,i}S_i, S_{i+2} - l_{i+2,i}S_i, \ldots, S_n - l_{ni}S_i$.*

*The upper triangular matrix remaining at the end of the elimination will be $\mathbf{U}$. We write the constant elements $l_{ij}$ of the elimination into the $j$-th column of the $i$-th row of the identity matrix $\mathbf{I}_m$. This will be the matrix $\mathbf{L}$, that is*
$$\mathbf{L} = \begin{bmatrix} 1 & 0 & \ldots & 0 \\ l_{21} & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{m1} & l_{m2} & \ldots & 1 \end{bmatrix}. \tag{5.4}$$

**Theorem 5.37 (Existence and uniqueness of LU decomposition).** *For the above algorithm, it is true that*
- a) *it stops with the error message if and only if $\mathbf{A}$ has no LU decomposition,*
- b) *the constructed matrices $\mathbf{L}$ and $\mathbf{U}$ yield an LU decomposition,*
- c) *if $\mathbf{A}$ is invertible, then this decomposition is unique.*

*Proof.* We only prove statement b), we leave the rest to the Reader (see exercise 5.48). Let $\mathbf{E}_{ji}$ denote the elementary matrix of the row operation $S_j - l_{ji}S_i$ ($1 \leq i < j \leq m$). Let the product of these matrices taken from right to left in the order of execution be denoted by $\mathbf{E}$, that is, let
$$\mathbf{E} = (\mathbf{E}_{m-1,m})(\mathbf{E}_{m-2,m}\mathbf{E}_{m-2,m-1}) \ldots (\mathbf{E}_{m2} \ldots \mathbf{E}_{42}\mathbf{E}_{32})(\mathbf{E}_{m1} \ldots \mathbf{E}_{31}\mathbf{E}_{21}).$$
According to the algorithm, then $\mathbf{EA} = \mathbf{U}$. Let's examine the product $\mathbf{EL}$ with the matrix $\mathbf{L}$ from the algorithm. Since $\mathbf{L}$ has only 1s on its main diagonal, and $l_{ji}$ at its $ji$-th position, the elementary matrix $\mathbf{E}_{ji}$ will eliminate exactly this element, and thus $\mathbf{E}$ eliminates all elements below the main diagonal, that is $\mathbf{EL} = \mathbf{I}$. Therefore $\mathbf{E}^{-1} = \mathbf{L}$, so $\mathbf{A} = \mathbf{E}^{-1}\mathbf{U} = \mathbf{LU}$. $\square$

### Solving systems of equations with LU decomposition

If we already know the LU decomposition of a matrix $\mathbf{A}$, then the system of equations $\mathbf{Ax} = \mathbf{b}$ can be easily solved. Solving the system $\mathbf{Ax} = \mathbf{b}$ is equivalent to solving the systems $\mathbf{Ly} = \mathbf{b}$ and $\mathbf{Ux} = \mathbf{y}$. For if $\mathbf{x}$ is a solution to the system $\mathbf{Ax} = \mathbf{b}$, then $\mathbf{LUx} = \mathbf{b}$, and with the notation $\mathbf{y} = \mathbf{Ux}$, we have $\mathbf{Ly} = \mathbf{b}$. On the other hand, if $\mathbf{y}$ is a solution to the system $\mathbf{Ly} = \mathbf{b}$, and $\mathbf{x}$ is a solution to the system $\mathbf{Ux} = \mathbf{y}$, then substituting $\mathbf{y}$ yields $\mathbf{L}(\mathbf{Ux}) = \mathbf{b}$, that is, $\mathbf{Ax} = \mathbf{b}$. Briefly:
$$\mathbf{Ax} = \mathbf{b} \text{ is solvable} \iff \mathbf{Ly} = \mathbf{b}, \; \mathbf{Ux} = \mathbf{y} \text{ are solvable.}$$
From the forms of $\mathbf{L}$ and $\mathbf{U}$, it follows that the systems $\mathbf{Ly} = \mathbf{b}$ and $\mathbf{Ux} = \mathbf{y}$ can be solved with simple back substitutions.

**Example 5.38 (Solving a system of equations with LU decomposition).** *Solve the following system of equations!*
$$\begin{alignedat}{9} 4x_1 &{}+{}& 8x_2 &{}+{}& 8x_3 &{}={}& 8 \\ 2x_1 &{}+{}& 6x_2 &{}+{}& 4x_3 &{}={}& 4 \\ x_1 &{}+{}& 3x_2 &{}+{}& 4x_3 &{}={}& 4 \end{alignedat}$$

*Solution.* Since we know the LU decomposition of the coefficient matrix – it is exactly the decomposition in (5.3) –, we use this and first solve the system of equations $\mathbf{Ly} = \mathbf{b}$:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 4 \\ 4 \end{bmatrix}.$$
From this $y_1 = 8$, substituting this into the second equation we get $y_2 = 0$, then substituting these into the third one we get $y_3 = 2$. Next, we solve the system of equations $\mathbf{Ux} = \mathbf{y}$, which has the form
$$\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \\ 2 \end{bmatrix}.$$
Again by simple back substitutions we get $x_3 = 1$, $x_2 = 0$ and $x_1 = 0$. The solution is $\mathbf{x} = (0, 0, 1)$. $\square$

### Matrix inversion with LU decomposition

To invert a matrix, it is sufficient to solve the system of equations $\mathbf{AX} = \mathbf{I}$. If $\mathbf{A} = \mathbf{LU}$ is an LU decomposition of $\mathbf{A}$, then the solution of $\mathbf{LUX} = \mathbf{I}$ can be obtained by solving the two equivalent matrix equations:
$$\mathbf{AX} = \mathbf{I} \iff \mathbf{LY} = \mathbf{I}, \; \mathbf{UX} = \mathbf{Y}.$$
However, these latter two systems of equations can also be solved exclusively with back substitutions!

**Example 5.39 (Matrix inversion with LU decomposition).** *Invert the matrix*
$$\mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$
*given in Example 5.35 using its LU decomposition!*

*Solution.* Using the LU decomposition of the matrix $\mathbf{B}$, we first solve the matrix equation $\mathbf{LY} = \mathbf{I}$:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_{11} & y_{12} & y_{13} \\ y_{21} & y_{22} & y_{23} \\ y_{31} & y_{32} & y_{33} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$
From the multiplication with the first row of $\mathbf{L}$: $[y_{11}\; y_{12}\; y_{13}] = [1\; 0\; 0]$. From the multiplication with the second row $\frac{1}{2}[y_{11}\; y_{12}\; y_{13}] + [y_{21}\; y_{22}\; y_{23}] = [0\; 1\; 0]$. After substitution, $[y_{21}\; y_{22}\; y_{23}] = [-\frac{1}{2}\; 1\; 0]$. Finally, from the multiplication with the third row:
$$\tfrac{1}{4}\begin{bmatrix} y_{11} & y_{12} & y_{13} \end{bmatrix} + \tfrac{1}{2}\begin{bmatrix} y_{21} & y_{22} & y_{23} \end{bmatrix} + \begin{bmatrix} y_{31} & y_{32} & y_{33} \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix},$$
from which, expressing the third row of $\mathbf{Y}$ after substitution, we get $[y_{31}\; y_{32}\; y_{33}] = [0\; -\frac{1}{2}\; 1]$. That is
$$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}.$$
Then, similarly, by simple substitutions, $\mathbf{UX} = \mathbf{Y}$ can be solved, that is, the matrix equation
$$\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_{11} & x_{12} & x_{13} \\ x_{21} & x_{22} & x_{23} \\ x_{31} & x_{32} & x_{33} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}$$
too, whose solution is
$$\mathbf{X} = \begin{bmatrix} 3/4 & -1/2 & -1 \\ -1/4 & 1/2 & 0 \\ 0 & -1/4 & 1/2 \end{bmatrix}.$$
$\square$

### LU decomposition in practice

Let us calculate again the decomposition of the matrix in Example 5.35. First, write down an identity matrix, but leaving the matrix entries below the main diagonal empty; this will become $\mathbf{L}$. Write the matrix $\mathbf{A}$ next to it, and when we perform a row operation $S_i - l_{ji}S_j$ on it, we record the value $l_{ji}$ into the $i$-th column of the $j$-th row of the matrix $\mathbf{L}$. In the left column of the following calculations, we see the steps according to the above.
$$\left[\begin{array}{ccc} 1 & 0 & 0 \\ {} & 1 & 0 \\ {} & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 2 & 4 & 1 \\ 1 & 2 & 4 \end{array}\right] \;\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ {} & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 1 & 2 & 4 \end{array}\right]$$
$$\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 0 & 7/4 & 7/2 \end{array}\right] \;\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 0 & 0 & 7/2 \end{array}\right]$$
In the right column, the same steps are shown using the computer technique (stored in a single matrix, in decimal form, highlighting the elements in $\mathbf{L}$):
$$\begin{bmatrix} 4.00 & 1.00 & 2.00 \\ 2.00 & 4.00 & 1.00 \\ 1.00 & 2.00 & 4.00 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ 1.00 & 2.00 & 4.00 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ \mathbf{0.25} & 1.75 & 3.50 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ \mathbf{0.25} & \mathbf{0.50} & 3.50 \end{bmatrix}$$
Note that the result of the elementary transformations carried out on matrix $\mathbf{A}$ and the already calculated elements of $\mathbf{L}$ can "fit" in a single matrix, since an element is placed into $\mathbf{L}$ exactly when and where a 0 appears in $\mathbf{A}$. Computer programs take advantage of this when an extremely large matrix $\mathbf{A}$ needs to be decomposed, and they construct the matrices $\mathbf{L}$ and $\mathbf{U}$ in place of $\mathbf{A}$. In the right column of the above calculations, we apply this computer technique. We mark the elements of $\mathbf{L}$ with a colored background.

The operation demand of the LU decomposition is the same as that of Gaussian elimination, i.e., for an $n$-th order matrix, it is on the order of $2n^3/3$. When solving a system of equations, the number of steps is also identical, since in the Gaussian method the elimination must be done with the right-hand side as well, whereas in the LU decomposition the system of equations corresponding to the lower triangular matrix must also be solved: both require $n(n-1)/2$ additions/subtractions and the same number of multiplications/divisions. However, the LU decomposition has several advantageous properties that make its use defining in the solution of systems of equations and, in addition, in several other tasks. A few of the most important ones:

1. Since the right-hand side of the system of equations is not needed for the LU decomposition of its coefficient matrix, it can be used in cases where the right-hand side is not yet known, or multiple different right-hand sides need to be processed.

2. Knowing the LU decomposition, several matrix-related calculations can be performed faster than otherwise, e.g., determining the inverse of a matrix, or its determinant, which will be learned later.

3. We mentioned earlier that the LU decomposition is highly memory-efficient; moreover, there are special matrix classes (e.g., band matrices or sparse matrices) for which there exists a faster algorithm for LU decomposition than elimination.

4. Computer algebra programs operate in such a way that if some calculation needs to be performed on a matrix that can be solved with LU decomposition (or the PLU decomposition discussed in the next point), then they solve it with that. Thus, if another calculation needs to be performed on this matrix later, knowing this decomposition makes it much faster.

### PLU decomposition

Not every matrix $\mathbf{A}$ has an LU decomposition, but with row swaps – that is, by multiplying from the left by a permutation matrix – it can be brought into a form that has an LU decomposition. Thus, there exists a permutation matrix $\mathbf{P}$ such that
$$\mathbf{PA} = \mathbf{LU}, \quad \text{azaz} \quad \mathbf{A} = \mathbf{P}^{\mathsf{T}}\mathbf{LU}.$$
(Here we used the fact that the inverse of a permutation matrix is equal to its transpose.)

**Definition 5.40 (PLU decomposition).** *The factorization of an arbitrary $m \times n$ matrix $\mathbf{A}$ into the product of a permutation matrix, a square lower triangular matrix with a unit main diagonal, and an $m \times n$ upper triangular matrix is called a PLU decomposition.*

> *If $m > n$, then the last $m - n$ rows of $\mathbf{U}$ are zero rows, therefore these, and the last $m - n$ columns of $\mathbf{L}$ can also be omitted, meaning if $r = \min(m, n)$, then $\mathbf{P}$ is an $m \times m$ permutation matrix, $\mathbf{L}$ is an $m \times r$ lower triangular matrix with 1s on its main diagonal, while $\mathbf{U}$ is an $r \times n$ upper triangular matrix. For example, the following first decomposition gives the definition, and the second gives the decomposition according to this note:*
> $$\begin{bmatrix} 0 & 1 \\ 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1/2 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 2 & 3 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1/2 & 1/2 \end{bmatrix}\begin{bmatrix} 2 & 3 \\ 0 & 1 \end{bmatrix}$$

The algorithm giving the PLU decomposition can be obtained with minimal modification from that of the LU decomposition. The algorithm – just as computers calculate – will be executed by storing the elements of the matrices $\mathbf{L}$ and $\mathbf{U}$ in a single matrix

stored. Compared to LU, the only change is that we also allow row swaps to be performed. The algorithm for LU decomposition gets stuck when an element on the main diagonal is 0, but there is a non-zero element below it in the column. Now in such a case, we swap these two rows. Furthermore, we can swap a row with one below it even when its main diagonal element is not 0. Such a swap might be worth making to reduce rounding errors. According to the rule of partial pivoting mentioned earlier, it is always worth choosing the element with the largest absolute value as the pivot. In order to know at the end of the algorithm how the order of the row vectors changed, we continuously record the changes in the indices – practically writing them in front of the row vectors of the matrix. Let us see an example. The fact that row swaps can also be performed on the matrix obtained by merging the matrices $\mathbf{L}$ and $\mathbf{U}$ will be proven later!

**Example 5.41 (PLU decomposition).** *Determine the PLU decomposition of the matrix*
$$\mathbf{A} = \begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \tag{5.5}$$
*such that in every step we choose the element with the largest absolute value below the main diagonal element by partial pivoting.*

*Solution.* We will denote the row indices of the matrix as follows:
$$\begin{array}{c} 1 \\ 2 \\ 3 \\ 4 \end{array}\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \tag{5.6}$$
Since 4 is the number with the largest absolute value in the first column, we perform a row swap $S_{i \leftrightarrow j}$, and then eliminate all other elements of the first column:
$$\begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 1 & 4 & 4 & -7 & 5 \\ -1 & 6 & 1 & -7 & 4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \to \begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{-1/4} & 4 & 2 & -5 & 3 \\ \mathbf{3/4} & 0 & 5 & 0 & -5 \end{bmatrix}$$
Below the second element of the second column there is no number with a larger absolute value, so now we do not need to swap rows, and the fourth row does not need to be eliminated either (i.e., we can subtract the 0-multiple of the second row from it):
$$\to \begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{-1/4} & \mathbf{2/3} & 0 & 1 & -1 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \end{bmatrix}$$
In the third column, there is a 0 on the main diagonal; we swap the third and fourth rows. The step not yet justified until now: this operation can be executed on both the parts falling into the $\mathbf{L}$ and $\mathbf{U}$ matrices alike, and we do exactly this with the row indices as well:
$$\to \begin{array}{c} 3 \\ 2 \\ 4 \\ 1 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \\ \mathbf{-1/4} & \mathbf{2/3} & 0 & 1 & -1 \end{bmatrix} \to \begin{array}{c} 3 \\ 2 \\ 4 \\ 1 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \\ \mathbf{-1/4} & \mathbf{2/3} & \mathbf{0} & 1 & -1 \end{bmatrix}$$
In the last step we had nothing to do, since there was a 0 below the main diagonal, so we only indicated what goes into the matrix $\mathbf{L}$ at this position. (Those two zeros are the same zero! The second is already an element of $\mathbf{L}$!) Finally, from this form, the matrices $\mathbf{L}$, $\mathbf{U}$, and from the indices, $\mathbf{P}$, can be read. We give these directly in the equality $\mathbf{PA} = \mathbf{LU}$:
$$\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 0 & 6 & 3 & -9 & 6 \\ 0 & 0 & 5 & 0 & -5 \\ 0 & 0 & 0 & 1 & -1 \end{bmatrix}.$$
Multiplying both sides by $\mathbf{P}^{\mathsf{T}}$, we get the PLU decomposition, that is, the equality $\mathbf{A} = \mathbf{P}^{\mathsf{T}}\mathbf{LU}$:
$$\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 0 & 6 & 3 & -9 & 6 \\ 0 & 0 & 5 & 0 & -5 \\ 0 & 0 & 0 & 1 & -1 \end{bmatrix}.$$
With this, we have solved the problem! $\square$

*Code 5.4. Computing the PLU decomposition of a matrix in a matrix-based language.*
```octave
OCTAVE: A = [
> -1  6 1 -7  4
>  1  4 4 -7  5
>  4 -8 4  8 -4
>  3 -6 8  6 -8]
A =
  -1   6   1  -7   4
   1   4   4  -7   5
   4  -8   4   8  -4
   3  -6   8   6  -8
OCTAVE: [L U P] = lu(a)
L =
   1.00   0.00   0.00   0.00
   0.25   1.00   0.00   0.00
   0.75   0.00   1.00   0.00
  -0.25   0.67   0.00   1.00
U =
   4  -8   4   8  -4
   0   6   3  -9   6
   0   0   5   0  -5
   0   0   0   1  -1
P =
Permutation Matrix
   0   0   1   0
   0   1   0   0
   0   0   0   1
   1   0   0   0
OCTAVE: transpose(P)*L*U
ans =
  -1   6   1  -7   4
   1   4   4  -7   5
   4  -8   4   8  -4
   3  -6   8   6  -8
```

We show an example of a possible use of this decomposition.

**Example 5.42.** *Solve the system of equations*
$$\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 1 \\ 4 \\ 4 \\ 8 \end{bmatrix}$$
*using the PLU decomposition of its coefficient matrix!*

*Solution.* Multiplying the equation $\mathbf{Ax} = \mathbf{b}$ by $\mathbf{P}$ and writing $\mathbf{LU}$ in place of $\mathbf{PA}$, we get that the system of equations $\mathbf{LUx} = \mathbf{Pb}$ needs to be solved, where $\mathbf{b} = (1, 4, 4, 8)$. This – similarly to what was learned for the LU decomposition – is equivalent to solving the systems of equations $\mathbf{Ly} = \mathbf{Pb}$ and $\mathbf{Ux} = \mathbf{y}$.
$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\mathbf{y} = \begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 \\ 4 \\ 4 \\ 8 \end{bmatrix} = \begin{bmatrix} 4 \\ 4 \\ 8 \\ 1 \end{bmatrix}$$
The solution to this system of equations can be read off even by calculating in one's head: $\mathbf{y} = (4, 3, 5, 0)$. The augmented matrix of the system $\mathbf{Ux} = \mathbf{y}$, and its reduced row echelon form:
$$\left[\begin{array}{ccccc|c} 4 & -8 & 4 & 8 & -4 & 4 \\ 0 & 6 & 3 & -9 & 6 & 3 \\ 0 & 0 & 5 & 0 & -5 & 5 \\ 0 & 0 & 0 & 1 & -1 & 0 \end{array}\right] \to \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & -1 & 1 \\ 0 & 0 & 0 & 1 & -1 & 0 \end{array}\right]$$
From this, the solution is $\mathbf{x} = (-2t, 0, 1 + t, t, t)$. $\square$

**Algorithm 5.43 (Producing a PLU decomposition).** *Let $\mathbf{A}$ be an arbitrary $m \times n$ matrix (defined over a field), let $r = \min(m, n)$, and form the sequence of matrices $\mathbf{A}_k, \mathbf{P}_k, \mathbf{L}_k, \mathbf{U}_k$ ($k = 0, 1, \ldots, r$) according to the following procedure:*
- a) *$\mathbf{A}_0 = \mathbf{U}_0 = \mathbf{A}$, $\mathbf{L}_0 = \mathbf{I}$, thus $\mathbf{A}_0 = \mathbf{L}_0\mathbf{U}_0$,*
- b) *in the $k$-th step, from the matrices of the relation $\mathbf{A}_{k-1} = \mathbf{L}_{k-1}\mathbf{U}_{k-1}$, we construct the matrices in the equality $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$:*
  1. *if the $k$-th element on the main diagonal of $\mathbf{U}_{k-1}$ and all elements below it are 0, then let $\mathbf{A}_k = \mathbf{A}_{k-1}$, $\mathbf{L}_k = \mathbf{L}_{k-1}$, $\mathbf{U}_k = \mathbf{U}_{k-1}$, $\mathbf{P}_k = \mathbf{I}$, we increase the value of $k$ by 1 and return to this point, otherwise we continue with the following.*
  2. *if the $k$-th element on the main diagonal of $\mathbf{U}_{k-1}$ is 0, and there is an $i > k$ such that in its $i$-th row below it there is a non-zero element, then with the elementary matrix $\mathbf{P}_k$ performing the row swap $S_k \leftrightarrow S_i$ we swap these two rows, getting $\mathbf{U}'_{k-1} = \mathbf{P}_k\mathbf{U}_{k-1}$. We execute this row swap on the matrix $\mathbf{A}_{k-1}$ as well, this will be $\mathbf{A}_k$. Utilizing that $\mathbf{P}_k\mathbf{P}_k = \mathbf{I}$, the transformation to be performed on $\mathbf{L}_{k-1}$ is also obtained:*
  $$\begin{aligned} \mathbf{A}_k = \mathbf{P}_k\mathbf{A}_{k-1} &= \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{U}_{k-1} = \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{I}\mathbf{U}_{k-1} \\ &= \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k\mathbf{P}_k\mathbf{U}_{k-1} = (\mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k)(\mathbf{P}_k\mathbf{U}_{k-1}) \\ &= \mathbf{L}'_k\mathbf{U}'_k. \end{aligned}$$
  *Here thus $\mathbf{L}'_k = \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k$, meaning the parts below the main diagonal of the $k$-th, and for an index $i \geq k$, the $i$-th row of the matrix $\mathbf{L}_{k-1}$ are swapped. The product $\mathbf{P}_k\mathbf{L}_{k-1}$ swaps the $k$-th and $i$-th rows of the matrix $\mathbf{L}_{k-1}$, swapping the 1s on the main diagonal as well. As a result of multiplying by $\mathbf{P}_k$ from the right, the $k$-th and $i$-th columns swap places, but since in $\mathbf{L}_{k-1}$ there are only zeros in these columns outside the elements of the main diagonal, these two 1s return to the main diagonal. For illustration, let $m = 5$, $k = 3$, $i = 5$:*
  $$\mathbf{P}_k = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{bmatrix} \qquad \mathbf{L}_{k-1} = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ k_1 & k_2 & 1 & 0 & 0 \\ * & * & 0 & 1 & 0 \\ i_1 & i_2 & 0 & 0 & 1 \end{array}\right]$$
  $$\mathbf{P}_k\mathbf{L}_{k-1} = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ i_1 & i_2 & 0 & 0 & 1 \\ * & * & 0 & 1 & 0 \\ k_1 & k_2 & 1 & 0 & 0 \end{array}\right] \qquad \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ i_1 & i_2 & 1 & 0 & 0 \\ * & * & 0 & 1 & 0 \\ k_1 & k_2 & 0 & 0 & 1 \end{array}\right]$$
  3. *Then we eliminate the elements below the main diagonal in the $k$-th column of the matrix $\mathbf{U}'_{k-1}$ one after another, each with an elementary matrix $\mathbf{E}$ performing an elementary row operation $S_i \leftarrow S_i - cS_k$. Its inverse, when multiplying from the right, performs the column operation $C_k \leftarrow C_k + cC_i$, so according to the equality*
  $$\mathbf{L}'_k\mathbf{U}'_k = \mathbf{L}'_k\mathbf{I}\mathbf{U}'_k = \mathbf{L}'_k\mathbf{E}^{-1}\mathbf{E}\mathbf{U}'_k$$
  *alongside the row operation performed on $\mathbf{U}'_k$, the $c$-multiple of the $i$-th column of the matrix $\mathbf{L}'_k$ must be added to the $k$-th column, i.e., the number $c$ must be written into the $k$-th column of the $i$-th row. We continue the elimination on the obtained matrices until all elements below the main diagonal in the $k$-th column are eliminated. $\mathbf{L}_k$ and $\mathbf{U}_k$ denote the matrices obtained at the end of this procedure, so in $\mathbf{U}_k$ every element below the main diagonal is already 0, and $\mathbf{L}_k$ is its pair, for which $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$. We increase the value of $k$, and if $k < r$, we return to point 1, otherwise we proceed to the next point.*
- c) *Let $\mathbf{P} = \mathbf{P}_r\mathbf{P}_{r-1} \ldots \mathbf{P}_1$, $\mathbf{L} = \mathbf{L}_r$, $\mathbf{U} = \mathbf{U}_r$. Then according to the above, $\mathbf{PA} = \mathbf{LU}$ is a PLU decomposition of $\mathbf{A}$.*

The fact that this algorithm indeed gives a PLU decomposition was proven in the description of the algorithm, or it can be read from it.

### Exercises

Give an LU decomposition of the following matrices!

**5.35.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}$

**5.36.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}$

**5.37.** $\begin{bmatrix} 5 & -4 & -2 \\ 4 & -5 & -5 \\ -3 & 1 & -4 \end{bmatrix}$

**5.38.** $\begin{bmatrix} -3 & 1 & -3 & 0 \\ -2 & 4 & 3 & -4 \\ 1 & 3 & 3 & 0 \\ -3 & 0 & -3 & -1 \end{bmatrix}$

**5.39.** $\begin{bmatrix} -2 & -2 & 0 & 3 \\ 0 & 2 & -2 & -1 \\ -1 & 0 & 2 & 0 \\ 1 & 0 & 2 & 1 \end{bmatrix}$

**5.40.** $\begin{bmatrix} 2.0 & 2.0 & -2.0 \\ -0.5 & 0.0 & -1.0 \\ 1.0 & 1.5 & 1.0 \end{bmatrix}$

*Using the LU decompositions constructed in the previous exercises, solve the following systems of equations, i.e., solve first the system $\mathbf{Ly} = \mathbf{b}$, then the system $\mathbf{Ux} = \mathbf{y}$!*

**5.41.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 0 \\ 3 \\ 5 \end{bmatrix}$

**5.42.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 0 \\ 3 \\ 2 \end{bmatrix}$

**5.43.** $\begin{bmatrix} 5 & -4 & -2 \\ 4 & -5 & -5 \\ -3 & 1 & -4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 3 \\ -1 \\ -7 \end{bmatrix}$

**5.44.** $\begin{bmatrix} 2.0 & 2.0 & -2.0 \\ -0.5 & 0.0 & -1.0 \\ 1.0 & 1.5 & 1.0 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 5.6 \\ -1.0 \\ 4.6 \end{bmatrix}$

**5.45. Infinitely many solutions.**
$$\begin{alignedat}{9} 4x_1 &{}+{}& 8x_2 &{}+{}& 4x_3 &{}+{}& 8x_4 &{}={}& 8 \\ 2x_1 &{}+{}& 6x_2 &{}+{}& 4x_3 &{}+{}& 4x_4 &{}={}& 4 \\ x_1 &{}+{}& 3x_2 &{}+{}& 2x_3 &{}+{}& 4x_4 &{}={}& 4 \end{alignedat}$$

*Determine the inverse of the following matrices knowing their LU decomposition, i.e., solve the matrix equations $\mathbf{LY} = \mathbf{I}$ and $\mathbf{UX} = \mathbf{Y}$!*

**5.46.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}$

**5.47.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}$

**5.48.** Prove that if $\mathbf{A} = \mathbf{LU}$ is an LU decomposition of $\mathbf{A}$, and $\mathbf{A}$ is invertible, then this decomposition is unique!

*Give a PLU decomposition of the following matrices! Apply partial pivoting!*

**5.49.** $\begin{bmatrix} 1 & 1 & 2 \\ 3 & 3 & 3 \\ 2 & 2 & 3 \end{bmatrix}$

**5.50.** $\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 2 & 3 & 3 & 4 \\ 3 & 4 & 6 & 7 & 9 \end{bmatrix}$

**5.51.** $\begin{bmatrix} 0.0 & -1.0 & 1.5 \\ 0.5 & -2.0 & 2.0 \\ 0.0 & 2.0 & 2.0 \end{bmatrix}$

**5.52.** Prove that the matrix
$$\mathbf{A} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$
has no LU decomposition, and neither does the matrix obtained by swapping the first two rows of $\mathbf{A}$.

### Solutions

**5.4.** The proofs follow directly from the properties of operations among real numbers. As a sample, we prove statement *(a)*.
$$\mathbf{A} + \mathbf{B} = [a_{ij}] + [b_{ij}] = [a_{ij} + b_{ij}] \overset{*}{=} [b_{ij} + a_{ij}] = [b_{ij}] + [a_{ij}] = \mathbf{B} + \mathbf{A}.$$
At the equality marked with $*$, we use the commutativity of the addition of numbers. The other statements can be proven similarly.

**5.5.** Before substitution: $\mathbf{u}^{\mathsf{T}}\mathbf{u}$, $\begin{bmatrix} 2 & -1 & -1 \end{bmatrix}\mathbf{u}$. After performing the substitution $\mathbf{u} = \mathbf{Ax}$: $\mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Ax}$, $\begin{bmatrix} 2 & -1 & -1 \end{bmatrix}\mathbf{Ax}$, where
$$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}, \quad \mathbf{u} = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix}, \quad \mathbf{A} = \begin{bmatrix} 3 & 2 & 4 \\ 1 & -3 & 1 \\ 2 & -1 & -3 \end{bmatrix}.$$

**5.6.** $\begin{bmatrix} 1 & 3 \\ 2 & 8 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}$

**5.7.** $\begin{bmatrix} 1 & 2 \\ -2 & -1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$

**5.8.** $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$

**5.9.** $\begin{bmatrix} 2 & 4 \\ 3 & 8 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$

**5.10.** $\begin{bmatrix} 2 & 0 & 4 \\ 0 & 2 & 0 \\ 3 & 2 & 7 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 3 & 2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**5.11.** $\begin{bmatrix} 1 & 1 & 2 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 2 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**5.12.** Let $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. Its square is the zero matrix, that is
$$\mathbf{A}^2 = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a^2 + bc & b(a + d) \\ c(a + d) & bc + d^2 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$
From this, either $a = d = 0$ and at least one of $b$ or $c$ is 0, or $a \neq 0$, $c \neq 0$ and $b = -a^2/c$, $d = -a$.

**5.13.** The problem is interesting, elements of the Fibonacci sequence appear in it. This is the sequence defined by the equalities $f_0 = 0$, $f_1 = 1$, $f_{k+1} = f_k + f_{k-1}$, whose first few terms are: $0, 1, 1, 2, 3, 5, 8, 13, 21, \ldots$ Let us consider some powers of $\mathbf{B}$:
$$\mathbf{A}^2 = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} f_1 & f_2 \\ f_2 & f_3 \end{bmatrix},$$
$$\mathbf{A}^3 = \mathbf{A}^2\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} f_2 & f_3 \\ f_3 & f_4 \end{bmatrix}.$$
Based on this, we conjecture that
$$\mathbf{A}^n = \begin{bmatrix} f_{n-1} & f_n \\ f_n & f_{n+1} \end{bmatrix}.$$
The statement is true for $n = 1, 2, 3$, and it is inherited from $n$ to $n + 1$, because
$$\mathbf{A}^{n+1} = \mathbf{A}^n\mathbf{A} = \begin{bmatrix} f_{n-1} & f_n \\ f_n & f_{n+1} \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} f_n & f_{n-1} + f_n \\ f_{n+1} & f_n + f_{n+1} \end{bmatrix} = \begin{bmatrix} f_n & f_{n+1} \\ f_{n+1} & f_{n+2} \end{bmatrix}.$$

**5.14.** $\mathbf{C} = \mathbf{AB}$ with the Einstein convention: $c_{ij} = a_{ik}b_{kj}$.

**5.17.** $\begin{bmatrix} 2 & -3 & 0 & 0 & 0 \\ -1 & 2 & 0 & 0 & 0 \\ 0 & 0 & -5 & 3 & 3 \\ 0 & 0 & -16 & 9 & 10 \\ 0 & 0 & 28 & -16 & -17 \end{bmatrix}$

**5.18.** $\begin{bmatrix} 2 & -3 & 7 & -4 & -4 \\ -1 & 2 & -7 & 4 & 4 \\ 0 & 0 & -5 & 3 & 3 \\ 0 & 0 & -16 & 9 & 10 \\ 0 & 0 & 28 & -16 & -17 \end{bmatrix}$

**5.19.** $\begin{bmatrix} -1 & 0 & 1 & 1 & 1 \\ 2 & -1 & -1 & -1 & -1 \\ -1 & 1 & 1 & 0 & 0 \\ -1 & 1 & 0 & 1 & 0 \\ -1 & 1 & 0 & 0 & 1 \end{bmatrix}$

**5.22.** Multiply the equation concerning commutativity $\mathbf{AB} = \mathbf{BA}$ from both sides by $\mathbf{B}^{-1}$:
$$\mathbf{B}^{-1}(\mathbf{AB})\mathbf{B}^{-1} = \mathbf{B}^{-1}(\mathbf{BA})\mathbf{B}^{-1}.$$
Using associativity
$$(\mathbf{B}^{-1}\mathbf{A})(\mathbf{B}\mathbf{B}^{-1}) = (\mathbf{B}^{-1}\mathbf{B})(\mathbf{A}\mathbf{B}^{-1}),$$
from which, utilizing the identity $\mathbf{B}\mathbf{B}^{-1} = \mathbf{I}$, we get that
$$\mathbf{B}^{-1}\mathbf{A} = \mathbf{A}\mathbf{B}^{-1}.$$

**5.23.** We say that the operation $\circ$ is invertible on a subset $R$ of $H$, if for any elements $a, b, c \in R$ the equations
$$a \circ x = b, \qquad y \circ a = c$$
are both solvable, i.e., there are elements $x, y \in H$ which satisfy the above equations. If the operation $\circ$ in the definition is commutative, then it is sufficient to consider only one of the two equations above.

**5.24.** a) The element $e \in H$ is an identity element, if for every element $a \in H$, $a \circ e = e \circ a = a$. b) We say that with respect to the operation $\circ$, the inverse of $a$ is $b$, if $a \circ b = b \circ a = e$.

**5.26.** It is sufficient to show that
$$\left(\mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}}\right)(\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}) = \mathbf{I},$$
because this, besides verifying the formula, also proves that $\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}$ is invertible.
$$\begin{aligned} &\left(\mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}}\right)(\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}) \\ &= \mathbf{A}^{-1}\mathbf{A} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{A}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &= \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{1}\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} - \frac{\mathbf{A}^{-1}\mathbf{u}(\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u})\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &= \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}(1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u})\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &\overset{*}{=} \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} \\ &= \mathbf{I}. \end{aligned}$$
At the equality marked with $*$, we utilized the fact that multiplication by a $1 \times 1$ matrix coincides with scalar multiplication, and the scalar factor can be moved to another place in a matrix product, thus we could simplify with it in the given fractional expression.

**5.27.** As a first step, we express the new matrix from $\mathbf{A}$ with matrix operations. Let $\mathbf{e}_i$ and $\mathbf{e}_j$ be the $i$-th and $j$-th standard basis vectors. Then the modified matrix is
$$\mathbf{B} = \mathbf{A} + \varepsilon\mathbf{e}_i\mathbf{e}_j^{\mathsf{T}}.$$
To this, the Sherman–Morrison formula can be applied with the choice $\mathbf{u} = \mathbf{e}_i$ and $\mathbf{v} = \varepsilon\mathbf{e}_j$.
$$\begin{aligned} \mathbf{B}^{-1} &= \left(\mathbf{A} + \varepsilon\mathbf{e}_i\mathbf{e}_j^{\mathsf{T}}\right)^{-1} \\ &= \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{e}_i(\varepsilon\mathbf{e}_j)^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \varepsilon\mathbf{e}_j^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{e}_i} \\ &= \mathbf{A}^{-1} - \varepsilon\frac{(\mathbf{A}^{-1})_{*i}(\mathbf{A}^{-1})_{j*}}{1 + \varepsilon(\mathbf{A}^{-1})_{ji}} \end{aligned}$$

**5.28.** By applying the previous example
$$\mathbf{B}^{-1} = \mathbf{A}^{-1} - \frac{1}{10}\frac{(\mathbf{A}^{-1})_{*1}(\mathbf{A}^{-1})_{1*}}{1 + \frac{1}{10}(\mathbf{A}^{-1})_{11}}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix} - \frac{1}{10}\frac{\begin{bmatrix} 0 \\ -2/5 \\ 3/5 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & -2/5 & 3/5 & 0 \end{bmatrix}}{1 + \frac{1}{10}\cdot 0}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix} - \frac{1}{10}\begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 4/25 & -6/25 & 0 \\ 0 & -6/25 & 9/25 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 173/125 & -197/125 & 3/5 \\ 3/5 & -197/125 & 341/250 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix}.$$
Calculating with decimal fractions:
$$\mathbf{A}^{-1} = \begin{bmatrix} 0.0 & -0.4 & 0.6 & 0.0 \\ -0.4 & 1.4 & -1.6 & 0.6 \\ 0.6 & -1.6 & 1.4 & -0.4 \\ 0.0 & 0.6 & -0.4 & 0.0 \end{bmatrix}, \quad \mathbf{B}^{-1} = \begin{bmatrix} 0.000 & -0.400 & 0.600 & 0.000 \\ -0.400 & 1.384 & -1.576 & 0.600 \\ 0.600 & -1.576 & 1.364 & -0.400 \\ 0.000 & 0.600 & -0.400 & 0.000 \end{bmatrix}.$$

**5.31.** We subtract the first equation from the last, from this $x = 1$, then back substitution into the second, third, and then the first equation.

**5.35.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 4 & 4 & 4 \\ 0 & 3 & 3 \\ 0 & 0 & 2 \end{bmatrix}$.

**5.36.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 4 & 8 & 4 \\ 0 & 3 & 6 \\ 0 & 0 & 1 \end{bmatrix}$.

**5.37.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 4/5 & 1 & 0 \\ -3/5 & 7/9 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 5 & -4 & -2 \\ 0 & -9/5 & -17/5 \\ 0 & 0 & -23/9 \end{bmatrix}$.

**5.38.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 2/3 & 1 & 0 & 0 \\ -1/3 & 1 & 1 & 0 \\ 1 & -3/10 & -1/2 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} -3 & 1 & -3 & 0 \\ 0 & 10/3 & 5 & -4 \\ 0 & 0 & -3 & 4 \\ 0 & 0 & 0 & -1/10 \end{bmatrix}$.

**5.39.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 1/2 & 1/2 & 1 & 0 \\ -1/2 & -1/2 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} -2 & -2 & 0 & 3 \\ 0 & 2 & -2 & -1 \\ 0 & 0 & 3 & -1 \\ 0 & 0 & 0 & 7/3 \end{bmatrix}$.

**5.40.** $\mathbf{L} = \begin{bmatrix} 1.00 & 0.00 & 0.00 \\ -0.25 & 1.00 & 0.00 \\ 0.50 & 1.00 & 1.00 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 2.00 & 2.00 & -2.00 \\ 0.00 & 0.50 & -1.50 \\ 0.00 & 0.00 & 3.50 \end{bmatrix}$.

**5.41.** $\mathbf{y} = (0, 3, 4)$, $\mathbf{x} = (-1, -1, 2)$.

**5.42.** $\mathbf{y} = (0, 3, 1)$, $\mathbf{x} = (1, -1, 1)$.

**5.43.** $\mathbf{y} = (3, -17/5, -23/9)$, $\mathbf{x} = (1, 0, 1)$.

**5.44.** $\mathbf{y} = (5.6, 0.4, 1.4)$, $\mathbf{x} = (1.2, 2.0, 0.4)$.

**5.45.** Since we know the LU decomposition of the coefficient matrix – it is exactly the decomposition in (5.2) –, we use this, and first solve the system of equations $\mathbf{Ly} = \mathbf{b}$:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 4 \\ 4 \end{bmatrix}$$
From this $y_1 = 8$, substituting this into the second equation we get $y_2 = 0$, then substituting these into the third one we get $y_3 = 2$. Next, we solve the system of equations $\mathbf{Ux} = \mathbf{y}$, which has the form
$$\begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \\ 2 \end{bmatrix}.$$
Again by simple back substitutions we get $x_4 = 1$, $x_3 = s$ is the free variable, $x_2 = -s$ and $x_1 = s$. The solution is $\mathbf{x} = (s, -s, s, 1) = (0, 0, 0, 1) + s(1, -1, 1, 0)$.

**5.46.** From the equation $\mathbf{LY} = \mathbf{I}$
$$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ -1/12 & -1/3 & 1 \end{bmatrix},$$
while the solution of the equation $\mathbf{UX} = \mathbf{Y}$, which is also the inverse of $\mathbf{A}$
$$\mathbf{X} = \begin{bmatrix} 5/12 & -1/3 & 0 \\ -1/8 & 1/2 & -1/2 \\ -1/24 & -1/6 & 1/2 \end{bmatrix}.$$

**5.47.** $$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ -1/12 & -1/3 & 1 \end{bmatrix}, \quad \mathbf{X} = \begin{bmatrix} 1/3 & -5/3 & 3 \\ 0 & 1 & -2 \\ -1/12 & -1/3 & 1 \end{bmatrix}.$$

**5.48.** Suppose that there exist two LU decompositions of the $n$-th order matrix $\mathbf{A}$ as well, that is $\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2$. Since $\mathbf{A}$ is invertible, so are $\mathbf{L}_1, \mathbf{U}_1, \mathbf{L}_2$ and $\mathbf{U}_2$. For if e.g., $\mathbf{L}_1$ were not invertible, then the dimension of its column space would be less than $n$, and since the column vectors of $\mathbf{L}_1\mathbf{U}_1$ are linear combinations of the column vectors of $\mathbf{L}_1$, the dimension of the column space of this product would also be less than $n$, meaning $\mathbf{A}$ would not be invertible. The invertibility of the other matrices can be proven similarly. Multiplying from the left by the inverse of $\mathbf{L}_1$ and from the right by the inverse of $\mathbf{U}_2$, we get that
$$\mathbf{U}_1\mathbf{U}_2^{-1} = \mathbf{L}_1^{-1}\mathbf{L}_2.$$
On the left side, as the product of two upper triangular matrices, there is an upper triangular matrix, while on the right side there is the product of two lower triangular matrices, which is a lower triangular matrix. Moreover, the right side has a unit main diagonal. This can only hold if $\mathbf{U}_1\mathbf{U}_2^{-1} = \mathbf{L}_1^{-1}\mathbf{L}_2 = \mathbf{I}$, that is, if $\mathbf{L}_1 = \mathbf{L}_2$ and $\mathbf{U}_1 = \mathbf{U}_2$.

**5.49.** $$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 2/3 & 1 & 0 \\ 1/3 & 1/2 & 1 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 3 & 3 & 3 \\ 0 & 0 & 1 \\ 0 & 0 & 1/2 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}.$$

**5.50.** $$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/3 & 1 & 0 \\ 2/3 & -1 & 1 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 3 & 4 & 6 & 7 & 9 \\ 0 & 2/3 & 1 & 5/3 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}.$$

**5.51.** $$\mathbf{L} = \begin{bmatrix} 1.0 & 0.0 & 0.0 \\ 0.0 & 1.0 & 0.0 \\ 0.0 & -0.5 & 1.0 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 0.5 & -2.0 & 2.0 \\ 0.0 & 2.0 & 2.0 \\ 0.0 & 0.0 & 2.5 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}.$$

**5.52.** Prove that the matrix
$$\mathbf{A} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$
has no LU decomposition, and neither does the matrix obtained by swapping the first two rows of $\mathbf{A}$.

On the one hand $\det\mathbf{A} = 1 \neq 0$, and thus $\det\mathbf{U} \neq 0$, so $u_{11} \neq 0$; on the other hand, for the top-left element of an LU decomposition of $\mathbf{A}$, $0 = a_{11} = (\mathbf{LU})_{11} = l_{11}u_{11} \neq 0$, which is a contradiction. For the matrix obtained after swapping the first two rows, we arrive at a similar contradiction with the element $a_{22}$.

# 6. Determinant

The volume of the parallelepiped spanned by the row vectors of a real square matrix is a good indicator of certain properties of the matrix. The concept of the determinant is closely related to this, which we define as a scalar-valued function interpreted on square matrices that can be calculated using elementary row operations.

### Signed area of a parallelogram

According to Theorem 1.38 on the area of a parallelogram, the area of the parallelogram spanned by the vectors $(a, b)$ and $(c, d)$ is $|ad - bc|$; $ad - bc$ is positive exactly when the vectors $(a, b)$ and $(c, d)$ form a right-handed system, and it is negative exactly when they form a left-handed system. This leads to the following definition: the *signed area* of a parallelogram spanned by two planar vectors is equal to its area if the two vectors form a right-handed system, and to $-1$ times the area if they form a left-handed system. Let $f$ denote the signed area function, i.e., let $f(\mathbf{u}, \mathbf{v}) = ad - bc$, where $\mathbf{u} = (a, b)$, $\mathbf{v} = (c, d)$. A few properties of $f$:

1. $f(c\mathbf{u}, \mathbf{v}) = cf(\mathbf{u}, \mathbf{v})$, and $f(\mathbf{u}, c\mathbf{v}) = cf(\mathbf{u}, \mathbf{v})$, that is, if one argument of $f$ is multiplied by $c$, the function value changes to its $c$-multiple. (We say that $f$ is *homogeneous* in both of its variables.) This is obvious, since increasing one side of a parallelogram by a factor of $c$ multiplies its area by $c$. If $c$ is negative, then the orientation of the vectors also changes, consistent with the fact that the sign of its signed area also changes (Figure 6.1).

2. $f(\mathbf{u}, \mathbf{v}) = -f(\mathbf{v}, \mathbf{u})$, since swapping the order of the two vectors changes their orientation, from a right-handed system to a left-handed system and vice versa (Figure 6.2).

3. $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u} + c\mathbf{v}, \mathbf{v}) = f(\mathbf{u}, \mathbf{v} + c\mathbf{u})$, that is, the area of the parallelogram spanned by the row vectors of the matrix $\left[\begin{smallmatrix} \mathbf{u} \\ \mathbf{v} \end{smallmatrix}\right] = \left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right]$ is equal to the area of the parallelogram corresponding to the row vectors of the matrix obtained after the addition row operation (Figure 6.3).

4. $f(\mathbf{u}, \mathbf{u}) = 0$, and similarly $f(\mathbf{u}, \mathbf{0}) = f(\mathbf{0}, \mathbf{u}) = 0$ for an arbitrary vector $\mathbf{u}$, because the area of a degenerate parallelogram is 0.

*Figure 6.1. Illustration of the relations $f(\mathbf{u}, c_1\mathbf{v}) = c_1 f(\mathbf{u}, \mathbf{v})$ ($c_1 > 0$) and $f(\mathbf{u}, c_2\mathbf{v}) = c_2 f(\mathbf{u}, \mathbf{v})$ ($c_2 < 0$).*

*Figure 6.2. Swapping the order of two vectors changes their orientation.*

*Figure 6.3. Illustration of the relations $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u} + c\mathbf{v}, \mathbf{v})$ and $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u}, \mathbf{v} + c\mathbf{u})$.*

5. $f(\mathbf{i}, \mathbf{j}) = 1$, that is, the area of the unit square spanned by the standard basis is 1.

In addition to the simple geometric arguments illustrated by the figures above, the statements can also be proven using the formula $f((a, b), (c, d)) = ad - bc$. With the help of these properties, we can generalize the concept of signed area, and we can introduce the concept of signed volume for parallelepipeds in the $n$-dimensional real space.

### Signed volume of a parallelepiped

When discussing the scalar triple product we saw (Definition 1.31) that in the real three-dimensional space, the scalar triple product of three vectors gives the signed volume of the parallelepiped spanned by the vectors, where the sign is positive or negative according to whether the three vectors form a right- or left-handed system. For the signed volume $f$ of parallelepipeds in the three-dimensional space, properties similar to those seen for the parallelogram can be verified.

1. $f$ is homogeneous in all three of its arguments, i.e., a constant factor can be factored out of any argument, e.g., $f(c\mathbf{u}, \mathbf{v}, \mathbf{w}) = cf(\mathbf{u}, \mathbf{v}, \mathbf{w})$.

2. Swapping any two arguments changes the sign of the function value, e.g., $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = -f(\mathbf{w}, \mathbf{v}, \mathbf{u})$, $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = -f(\mathbf{u}, \mathbf{w}, \mathbf{v})$.

3. Adding a constant multiple of another argument to any argument of $f$, the function value does not change, e.g., $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = f(\mathbf{u} + c\mathbf{w}, \mathbf{v}, \mathbf{w})$.

4. If any two arguments of $f$ are identical, the function value is 0, e.g., $f(\mathbf{u}, \mathbf{v}, \mathbf{u}) = 0$. We also get a value of 0 if any argument of $f$ is the $\mathbf{0}$-vector, e.g., $f(\mathbf{u}, \mathbf{0}, \mathbf{w}) = 0$.

5. $f(\mathbf{i}, \mathbf{j}, \mathbf{k}) = 1$, that is, the volume of the unit cube is 1.

We see that the properties of $f$ known so far either immediately give the value of $f$ (if it is 0 or 1), or they contain such modifications of the arguments that are similar to what we have seen with the elementary row operations of matrices. Indeed, these properties provide not only the generalization of a new concept – the signed volume –, but also a

Often, it is a crucial factor whether the value of a determinant is zero.

**Theorem 6.2 (Determinants that are 0 at a glance).** *If a matrix has a zero row, then its determinant is 0. If a matrix has two identical rows, then its determinant is 0.*

*Proof.* If a matrix has a zero row, then multiplying this row by any number $c$ does not change this row, and thus neither does the value of the determinant. On the other hand, according to point D1 of the definition of the determinant, the value of the determinant changes to its $c$-fold. These two conditions can only hold for all scalars $c$ if $\det(\mathbf{A}) = 0$. (As a consequence, the possibility $c = 0$ does not need to be excluded in point D1 of the definition.)

If a determinant has two identical rows, then according to D3 its value does not change if we subtract one row from the other; doing so yields a zero row, and then the value of the determinant is 0. $\square$

**Theorem 6.3 (Zero-valued determinant).** *Let $\mathbf{A}$ be a square matrix. The following statements are equivalent:*
1. *$\det(\mathbf{A}) = 0$,*
2. *the row vectors of $\mathbf{A}$ are linearly dependent,*
3. *$\mathbf{A}$ is singular,*
4. *the homogeneous linear system of equations $\mathbf{Ax} = \mathbf{0}$ has a nontrivial solution.*

*Proof.* We saw in Theorem 5.20 that the row vectors of a square matrix are linearly dependent if and only if the matrix is singular, i.e., if a 0-row is created during the reduction to row echelon form, and this is equivalent to the determinant having a value of 0. The equivalence of the last statement is a direct consequence of Theorem 5.15 on the invertibility of a matrix. $\square$

**Example 6.4 (Zero-valued determinants).** *By verifying the linear dependence of the row vectors, show that*
$$\begin{vmatrix} 5 & 6 & 8 \\ 2 & 1 & 2 \\ 3 & 5 & 6 \end{vmatrix} = 0, \qquad \begin{vmatrix} 2 & -1 & 0 & -1 \\ -1 & 2 & -1 & 0 \\ 0 & -1 & 2 & -1 \\ -1 & 0 & -1 & 2 \end{vmatrix} = 0.$$

*Solution.* The first row of the first determinant is the sum of the second and the third. Or we could say that by subtracting the second and third rows from the first, we obtain the zero vector. So the row vectors of the first matrix are linearly dependent, thus its determinant is 0.

The sum of the row vectors of the second determinant is the zero vector, so they are also linearly dependent, thus this determinant is also 0. $\square$

An important consequence of the previous Theorem 6.3 and Theorem 5.15 is about the relationship between the determinant and the solvability of systems of equations:

**Theorem 6.5 (Solvability of a system of equations and the determinant).** *Let $\mathbf{A}$ be a square matrix. Then the following statements are equivalent:*
1. *$\det\mathbf{A} \neq 0$,*
2. *the system of equations $\mathbf{Ax} = \mathbf{b}$ is uniquely solvable for any $\mathbf{b}$,*
3. *the system of equations $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution.*

> Except for the simplest cases, the linear dependence of row vectors cannot be seen "at a glance", but the scalars proving the dependence - if needed - can be obtained from the nontrivial solutions of the system of equations $\mathbf{A}^{\mathsf{T}}\mathbf{x} = \mathbf{0}$.

> In practice - for example, with measured data or data obtained by approximate calculations - deciding whether a determinant is zero requires great caution! The fact that a matrix is "nearly singular" cannot necessarily be read from the fact that the determinant's value is "close to zero". For example, of the determinants
> $$\begin{vmatrix} \frac{1}{n} & 0 \\ 0 & n \end{vmatrix} = 1, \quad \text{and} \quad \begin{vmatrix} \frac{1}{2} & 0 & \ldots & 0 \\ 0 & \frac{1}{2} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \frac{1}{2} \end{vmatrix} = \frac{1}{2^n}$$
> the value of the first is 1 for an arbitrarily large $n$, even though $\frac{1}{n}$ can be arbitrarily close to 0, and the matrix $\left[\begin{smallmatrix} 0 & 0 \\ 0 & n \end{smallmatrix}\right]$ is already singular. The matrix $\frac{1}{2}\mathbf{I}_n$ in the second determinant is not singular, even though the value of its determinant can be arbitrarily close to 0, albeit only for sufficiently large $n$.

> The determinant of a random real matrix is non-zero with probability 1 if the elements of the matrix are chosen according to some continuous probability distribution. In other words, if the determinant of a real-valued matrix is 0, there is a special reason for it! This reason is the linear relationship between the row vectors, which "very rarely" happens "by chance".

### Calculating the value of a determinant

To calculate the determinant, we will use elementary row operations. Definition 6.1 precisely states how the value of the determinant changes during elementary row operations. If no zero row is created during the reduction to row echelon form, then the row echelon form is triangular, and the reduced row echelon form is diagonal. The following theorem is about their values:

**Theorem 6.6 (Determinant of a triangular matrix).** *The determinant of a lower or upper triangular matrix, and thus of a diagonal matrix, equals the product of the elements in the main diagonal.*

*Proof.* If there is a 0 in the main diagonal of a triangular matrix, then after reducing it to reduced row echelon form, the number of pivots will be less than the number of rows, i.e., there will be a zero row in the matrix, thus the value of its determinant is 0. If there are no 0 elements in the main diagonal, both the lower and the upper triangular matrix can be transformed into a diagonal one using only the addition row operation - i.e., without changing the value of the determinant - by eliminating the elements outside the main diagonal, i.e.,
$$\begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ ? & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ ? & ? & \ldots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & ? & \ldots & ? \\ 0 & a_{22} & \ldots & ? \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ 0 & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix}.$$
In the determinant of a diagonal matrix, factoring out the number in the main diagonal from each row, we get that
$$\begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ 0 & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix} \overset{D1}{=} a_{11}a_{22}\ldots a_{nn}\begin{vmatrix} 1 & 0 & \ldots & 0 \\ 0 & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & 1 \end{vmatrix} = a_{11}a_{22}\ldots a_{nn},$$
so the value of the determinant is indeed the product of the elements in the main diagonal. $\square$

For example, the value of the following determinant can be read immediately after a single row swap:
$$\begin{vmatrix} 3 & 0 & 0 & 0 & 0 \\ 3 & 0 & 0 & 2 & 0 \\ 3 & 0 & 2 & 0 & 0 \\ 3 & 2 & 0 & 0 & 0 \\ 3 & 3 & 3 & 3 & 3 \end{vmatrix} = -\begin{vmatrix} 3 & 0 & 0 & 0 & 0 \\ 3 & 2 & 0 & 0 & 0 \\ 3 & 0 & 2 & 0 & 0 \\ 3 & 0 & 0 & 2 & 0 \\ 3 & 3 & 3 & 3 & 3 \end{vmatrix} = -3 \cdot 2 \cdot 2 \cdot 2 \cdot 3 = -72$$

The method of calculating the determinant by hand is therefore the following: using elementary row operations, we bring the determinant to a form that

either has a zero row, or is triangular. During the elementary row operations, we carefully keep track of their effects, i.e.,
- when swapping two rows, we multiply the determinant by $-1$,
- and when multiplying a row by $c$, we multiply the determinant by $1/c$.

In the background, essentially this is what computers do as well (see code 6.4).

**Example 6.7 (Calculating a determinant by reduction to triangular form).** *Calculate the values of the determinants*
$$\begin{vmatrix} 2 & 2 & -3 \\ 2 & 2 & -4 \\ 4 & 5 & -6 \end{vmatrix} \quad \text{and} \quad \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix}$$

*Solution.* By elementary row operations, we get that
$$\begin{vmatrix} 2 & 2 & -3 \\ 2 & 2 & -4 \\ 4 & 5 & -6 \end{vmatrix} \overset{\substack{S_2 - S_1 \\ S_3 - 2S_1}}{=} \begin{vmatrix} 2 & 2 & -3 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{vmatrix} \overset{S_2 \leftrightarrow S_3}{=} -\begin{vmatrix} 2 & 2 & -3 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{vmatrix} = -(-2) = 2.$$
For the next determinant, the elements below the main diagonal can be eliminated without row swaps, so we do not even indicate the row operations.
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 2 & 5 & 9 \\ 0 & 3 & 9 & 19 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 3 & 10 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{vmatrix} = 1.$$
An interesting observation: the numbers of Pascal's triangle can be found both in the determinant above and in its row echelon form. This is no coincidence; exercises 6.15 and 6.16 are about this. $\square$

*Code 6.4. Calculating the determinant.*
```
sage: M = matrix(3,range(9))
sage: M[2,2]=9
sage: M
[0 1 2]
[3 4 5]
[6 7 9]
sage: M.det()
-3
sage: det(M)
-3
```

### Determinant of elementary matrices

Elementary matrices can be obtained from the identity matrix by a single row operation, so their determinants can be easily calculated.

**Corollary 6.8 (Determinant of elementary matrices).** *The determinant of an elementary matrix obtained by the addition row operation is 1, by a row swap is $-1$, and by multiplying a row by $c$ is $c$.*

*Proof.* The statement follows from the fact that elementary matrices can be obtained from the identity matrix, which has a determinant of 1, by a single row operation. $\square$

For example:
$$\begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 4 & 0 & 1 \end{vmatrix} = 1, \quad \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{vmatrix} = -1, \quad \begin{vmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{vmatrix} = 3.$$

### Determinant of a permutation matrix

A permutation matrix has a single 1 in each of its rows and columns, so it can be obtained from the identity matrix only by elementary row swaps. A row swap only changes the sign of the determinant, so the determinant of a permutation matrix is 1 if an even number of row swaps were needed, and $-1$ if an odd number. For example, of the following determinants, the first determinant can be obtained from the identity matrix with two row swaps, the second with three row swaps, so
$$\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{vmatrix} = 1, \quad \begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{vmatrix} = -1.$$
We say that two rows of a permutation matrix are in *inversion* if the 1 in the preceding row is further back than in the other row. For instance, the number of inversions of the matrix
$$\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}$$
is 4, because the first-second, first-fourth, second-fourth, and third-fourth row pairs are in inversion.

**Theorem 6.9 (Determinant of a permutation matrix).** *The determinant of a permutation matrix is $+1$ or $-1$ depending on whether the number of its row pairs in inversion is even or odd.*

*Proof.* It is enough to show that a row swap always changes the parity of the number of inversions, i.e., their number changes from even to odd, or from odd to even. Thus, if the number of inversions of a permutation matrix is even, it can be transformed into the identity matrix only with an even number of row swaps. Similarly, if the number of inversions is odd, then only with an odd number of row swaps.

If the two rows to be swapped are adjacent, then the row swap changes the relationship between these two rows: if they were in inversion, they will not be afterwards, and vice versa. Their relationship to the rows preceding and succeeding them, and the relationship of those to each other, has not changed. Accordingly, the number of inversions has increased or decreased by one, i.e., its parity has changed.

Next, let us swap the $i$-th and $j$-th rows (let $i < j$). To keep track of the number of inversions, we implement this by swapping adjacent rows. Swap the $i$-th with the $(i+1)$-th, then that with the $(i+2)$-th, $\ldots$, until the originally $i$-th row gets to the $j$-th position. This requires $j - i$ row swaps. Then we move the originally $j$-th row to the $i$-th position with $j - i - 1$ row swaps. This is a total of $2(j - i) - 1$, i.e., an odd number of swaps of adjacent rows, which indeed changes the parity to its opposite. $\square$

### Matrix operations and the determinant

The question is what relationship exists between matrix operations and the determinant. It is important to note that the determinant function does *not* preserve operations with respect to matrix addition and scalar multiplication, i.e., in general $\det(\mathbf{A} + \mathbf{B}) \neq \det(\mathbf{A}) + \det(\mathbf{B})$, and $\det(c\mathbf{A}) \neq c\det(\mathbf{A})$.

In the case of scalar multiplication, something can be said: since from the determinant of a $c$-fold of a matrix, $c$ can be factored out from every row, this means as many factorizations as the number of rows the matrix has. Thus, for any $n \times n$ matrix $\mathbf{A}$ and any scalar $c$, $\det(c\mathbf{A}) = c^n\det(\mathbf{A})$. This is also clear from the geometric interpretation in $\mathbb{R}^2$ or $\mathbb{R}^3$: the signed area of a parallelogram increases 4-fold, the signed volume of a parallelepiped increases 8-fold if all its edges are doubled.

The determinant preserves operations with respect to the multiplication of square matrices. This is stated by the following proposition.

**Proposition 6.10 (Multiplication rule for determinants).** *If $\mathbf{A}$ and $\mathbf{B}$ are square matrices of the same size, then $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$.*

*Proof.* As a consequence of Theorem 6.8, left-multiplying a matrix by an elementary matrix performs a row operation on it that changes its determinant exactly by a factor equal to the determinant of the elementary matrix. Thus, the determinant of the product of an elementary matrix $\mathbf{E}$ and an arbitrary square matrix $\mathbf{B}$ equals the product of their determinants, i.e.,
$$|\mathbf{EB}| = |\mathbf{E}|\,|\mathbf{B}|.$$
We know that if $\mathbf{A}$ is singular, then $\mathbf{AB}$ is as well, i.e., if $|\mathbf{A}| = 0$, then $|\mathbf{AB}|$ is also 0, so $|\mathbf{AB}| = |\mathbf{A}|\,|\mathbf{B}|$. If $\mathbf{A}$ is not singular, then it can be decomposed into a product of elementary matrices: $\mathbf{A} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k$, so $\mathbf{AB} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{B}$. Using the relationship $|\mathbf{EB}| = |\mathbf{E}|\,|\mathbf{B}|$ on both $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k$ and $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{B}$,

we get that
$$\begin{aligned} |\mathbf{A}|\,|\mathbf{B}| &= |\mathbf{E}_1\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| = \ldots = \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3| \ldots |\mathbf{E}_k|\,|\mathbf{B}|, \quad \text{on the other hand} \\ |\mathbf{AB}| &= |\mathbf{E}_1\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| = \ldots = \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3| \ldots |\mathbf{E}_k|\,|\mathbf{B}|, \end{aligned}$$
which proves the proposition. Another very beautiful proof can be found in exercise 6.12. $\square$

An important application of the multiplication rule for determinants is the calculation of the determinant's value using the PLU decomposition (see code 6.5).

**Example 6.11 (Calculating the determinant from PLU decomposition).** *How do we determine the determinant of a matrix $\mathbf{A}$ if we know its PLU decomposition? Specifically, what is the determinant of the following matrix?*
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 5 & 6 \\ 4 & 7 & 9 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 3/4 & -1/4 & 1 \end{bmatrix}\begin{bmatrix} 4 & 7 & 9 \\ 0 & 1 & 2 \\ 0 & 0 & -1/4 \end{bmatrix}.$$

*Solution.* The determinant of each matrix in a PLU decomposition can be easily determined. $\mathbf{P}$ becomes the identity matrix with two row swaps, so $\det\mathbf{P} = 1$. $\mathbf{L}$ and $\mathbf{U}$ are triangular matrices, whose determinant is the product of the elements in the main diagonal, which is always 1 for $\mathbf{L}$. In the given specific case, therefore, $\det\mathbf{A} = 4 \cdot 1 \cdot (-1/4) = -1$. $\square$

*Code 6.5. Calculating the determinant from the PLU decomposition. The decomposition does not work in the ring of integers, so we change the ring and compute with double-precision floating-point numbers (RDF).*
```
sage: M = matrix(3,range(9))
sage: M[2,2]=9
sage: N=M.change_ring(RDF)
sage: N
[0.0 1.0 2.0]
[3.0 4.0 5.0]
[6.0 7.0 9.0]
sage: N.det()
-3.0
sage: P,L,U = N.LU()
sage: P
[0.0 0.0 1.0]
[1.0 0.0 0.0]
[0.0 1.0 0.0]
sage: U
[ 6.0  7.0  9.0]
[ 0.0  1.0  2.0]
[ 0.0  0.0 -0.5]
sage: P.det()
1.0
sage: U.det()
-3.0
```

The determinant of a matrix and the determinant of its transpose are the same. This allows us to use not only elementary row operations but also elementary column operations for calculating the determinant, since a column operation on a matrix is a row operation on its transpose.

**Proposition 6.12 (Determinant of the transpose).** *The determinant of a matrix equals the determinant of its transpose, i.e., for any square matrix $\mathbf{A}$, $\det(\mathbf{A}) = \det(\mathbf{A}^{\mathsf{T}})$.*

*Proof.* Let the matrix product form of reducing matrix $\mathbf{A}$ to reduced row echelon form be $\mathbf{A} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{R}$, where $\mathbf{E}_i$ is an elementary matrix, and $\mathbf{R}$ is the reduced row echelon form of $\mathbf{A}$. The echelon form of the transpose is
$$|\mathbf{A}^{\mathsf{T}}| = |\mathbf{R}^{\mathsf{T}}\mathbf{E}_k^{\mathsf{T}} \ldots \mathbf{E}_2^{\mathsf{T}}\mathbf{E}_1^{\mathsf{T}}| = |\mathbf{R}^{\mathsf{T}}|\,|\mathbf{E}_k^{\mathsf{T}}| \ldots |\mathbf{E}_2^{\mathsf{T}}|\,|\mathbf{E}_1^{\mathsf{T}}|.$$
It is easy to check that the determinant of every elementary matrix is the same as the determinant of its transpose (let's check it!). Since $\mathbf{R}$ is in reduced row echelon form, either $\mathbf{R} = \mathbf{I}$, or $\mathbf{R}$ has a zero row. If $\mathbf{R} = \mathbf{I}$, then $|\mathbf{R}^{\mathsf{T}}| = |\mathbf{R}| = |\mathbf{I}| = 1$, and if $\mathbf{R}$ has a zero row, then $\mathbf{R}^{\mathsf{T}}$ has a zero column, and such a matrix cannot be transformed into the identity matrix by elementary row operations, so its determinant is 0. That is, $|\mathbf{R}| = |\mathbf{R}^{\mathsf{T}}|$ holds in this case as well. Then
$$\begin{aligned} |\mathbf{A}^{\mathsf{T}}| &= |\mathbf{R}^{\mathsf{T}}|\,|\mathbf{E}_k^{\mathsf{T}}| \ldots |\mathbf{E}_2^{\mathsf{T}}|\,|\mathbf{E}_1^{\mathsf{T}}| = |\mathbf{R}|\,|\mathbf{E}_k| \ldots |\mathbf{E}_2|\,|\mathbf{E}_1| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2| \ldots |\mathbf{E}_k|\,|\mathbf{R}| = |\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{R}| = |\mathbf{A}|. \end{aligned}$$
Thus $|\mathbf{A}^{\mathsf{T}}| = |\mathbf{A}|$. $\square$

**Example 6.13 (Calculating the determinant with elementary column operations).** *We can calculate the following determinant in 2 steps using elementary row and column operations:*
$$\begin{vmatrix} 1 & 0 & 0 & 1 & 0 \\ 2 & 2 & 1 & 3 & 1 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 2 & 0 \\ 1 & 1 & 1 & 2 & 1 \end{vmatrix} \overset{S_2 - S_5}{=} \begin{vmatrix} 1 & 0 & 0 & 1 & 0 \\ 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 2 & 0 \\ 1 & 1 & 1 & 2 & 1 \end{vmatrix} \overset{O_4 - O_1}{=} \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 & 0 \\ 1 & 1 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 1 & 1 \end{vmatrix} = 1$$

### Row-wise additivity of determinants

We illustrate an important property of determinants with the signed area of a parallelogram. Consider the vectors $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ in the plane, as well as the parallelograms spanned by $\mathbf{u}$ and $\mathbf{v}$, and by $\mathbf{u}$ and $\mathbf{w}$, as shown in Figure 6.6. It can be proven, but it can also be seen from the figure, that the sum of their (signed) areas is equal to the (signed) area of the parallelogram spanned by the vectors $\mathbf{u}$ and $\mathbf{v} + \mathbf{w}$. Denoting the signed area by $f$, the relationship $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{u}, \mathbf{w}) = f(\mathbf{u}, \mathbf{v} + \mathbf{w})$ thus holds. Similarly, it is true that $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{w}, \mathbf{v}) = f(\mathbf{u} + \mathbf{w}, \mathbf{v})$ for any three vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$. Expressed in words, $f$ is additive in both of its variables.

*Figure 6.6. Illustration of the relationship $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{u}, \mathbf{w}) = f(\mathbf{u}, \mathbf{v} + \mathbf{w})$.*

**Theorem 6.14 (Row-wise additivity).** *Let $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ be three matrices that are identical except for their $i$-th row. Let the $i$-th row vector of the three matrices be $\mathbf{a}_i$, $\mathbf{b}_i$, and $\mathbf{a}_i + \mathbf{b}_i$, respectively. Then $|\mathbf{A}| + |\mathbf{B}| = |\mathbf{C}|$, i.e.,*
$$\begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{a}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix} + \begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{b}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix} = \begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{a}_i + \mathbf{b}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix}.$$

*Proof.* If the vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_{i-1}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n$ are linearly dependent, then $|\mathbf{A}| = |\mathbf{B}| = |\mathbf{C}| = 0$, thus the statement of the theorem holds. The same is true if both $\mathbf{a}_i$ and $\mathbf{b}_i$ can be expressed as a linear combination of the above vectors, because then their sum can be as well, and thus again all three determinants are 0. Therefore, we assume that at least one of $\mathbf{a}_i$ and $\mathbf{b}_i$ is independent from the other row vectors. Without loss of generality, it can be assumed that $\mathbf{a}_i$ is independent from the other row vectors, meaning that the row vectors of $\mathbf{A}$ are independent, thus forming a basis. Then $\mathbf{b}_i$ can be expressed as a linear combination of them:
$$\mathbf{b}_i = b_1\mathbf{a}_1 + b_2\mathbf{a}_2 + \ldots + b_i\mathbf{a}_i + \ldots + b_n\mathbf{a}_n.$$
Subtract the rows $b_k\mathbf{a}_k$ from the $i$-th row of the determinant $|\mathbf{B}|$, where $k = 1, 2, \ldots, i - 1, i + 1, \ldots, n$. During these operations, the value of the determinant does not change, and only the vector $b_i\mathbf{a}_i$ remains in the $i$-th row. Then factor out the constant $b_i$ from the $i$-th row, we get that $|\mathbf{B}| = b_i|\mathbf{A}|$. We repeat these operations with matrix $\mathbf{C}$ as well, except there, at the end, the vector $(1 + b_i)\mathbf{a}_i$ remains in the $i$-th row, so we get that $|\mathbf{C}| = (1 + b_i)|\mathbf{A}|$. From here,
$$|\mathbf{A}| + |\mathbf{B}| = |\mathbf{A}| + b_i|\mathbf{A}| = (1 + b_i)|\mathbf{A}| = |\mathbf{C}|,$$
and the proof is complete. $\square$

> Using the previous theorem on the second rows of the determinants, we can see even without calculating the determinants that
> $$\begin{vmatrix} 2 & 2 & 2 \\ 1 & 2 & 3 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 2 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} = \begin{vmatrix} 2 & 2 & 2 \\ 3 & 3 & 4 \\ 9 & 8 & 6 \end{vmatrix}.$$

> The theorem can also be proven for more than two rows by induction, so for example, the following equality is also true:
> $$\begin{vmatrix} 2 & 2 & 2 \\ 1 & 2 & 3 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 2 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 1 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} = \begin{vmatrix} 2 & 2 & 2 \\ 4 & 4 & 6 \\ 9 & 8 & 6 \end{vmatrix}.$$

> We will also use the formula in the theorem in the reverse direction, namely, a determinant can be decomposed into the sum of several determinants. For example:
> $$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 2 & 0 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 3 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix},$$
> since $(1, 2, 3) = (1, 0, 0) + (0, 2, 0) + (0, 0, 3)$.

> Since transposition does not change the value of the determinant, this theorem can also be stated for column vectors instead of row vectors.

> This theorem, together with condition D1 of the definition of the determinant, states that the determinant is a function of any of its rows (while keeping the other rows fixed) that preserves linear combinations. By this we mean that if the $i$-th row vector of a determinant is equal to the vector $c\mathbf{x} + d\mathbf{y}$, then the determinant can be decomposed according to the following formula:
> $$\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ c\mathbf{x} + d\mathbf{y} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix} = c\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ \mathbf{x} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix} + d\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ \mathbf{y} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix}.$$

Functions possessing this property will be called *linear*, and multivariable functions that are linear in each of their variables will be called *multilinear*. Thus the determinant, as an $n$-variable function, is multilinear, because for any $i$ ($i = 1, 2, \ldots, n$):
$$\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, c\mathbf{x} + d\mathbf{y}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n) = c\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, \mathbf{x}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n) + d\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, \mathbf{y}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n).$$

### Exercises

**6.1.** Which of the following statements are true? ($\mathbf{A}$ here always denotes a square matrix.)
1. If the value of a determinant is 0, then it has two identical rows.
2. If the value of a determinant is not 0, then its column vectors are linearly independent.
3. If the system of equations $\mathbf{Ax} = \mathbf{0}$ has a nontrivial solution, then $|\mathbf{A}| \neq 0$.
4. $|\mathbf{A}| \neq 0$ is true if and only if the system of equations $\mathbf{Ax} = \mathbf{b}$ cannot be solved.
5. $|\mathbf{A}| = 0$ is true if and only if the system of equations $\mathbf{Ax} = \mathbf{b}$ is uniquely solvable.

**6.2.** Calculate the value of the following determinants in your head!
a) $\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$  b) $\begin{vmatrix} 0 & 0 & 0 \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix}$  c) $\begin{vmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \\ 1 & 2 & 3 \end{vmatrix}$
d) $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{vmatrix}$  f) $\begin{vmatrix} 1 & 0 & 0 \\ 2 & 2 & 0 \\ 3 & 3 & 3 \end{vmatrix}$
g) $\begin{vmatrix} 1 & -2 & 1 & 2 \\ 4 & 3 & 4 & -1 \\ 5 & 1 & 5 & 4 \\ 5 & 6 & 5 & 0 \end{vmatrix}$

**6.3.** Show - by looking for a linear dependence among the rows - that the value of the following determinants is 0.
a) $\begin{vmatrix} 1 & 1 & 1 \\ 2 & 3 & 5 \\ 3 & 4 & 6 \end{vmatrix}$  b) $\begin{vmatrix} 1 & -2 & 3 \\ -2 & 4 & -6 \\ 3 & 6 & 9 \end{vmatrix}$  c) $\begin{vmatrix} 2 & 1 & 0 \\ 3 & 2 & 1 \\ 5 & 3 & 1 \end{vmatrix}$
d) $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$  f) $\begin{vmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{vmatrix}$
g) $\begin{vmatrix} \sin\alpha & \cos\alpha & \sin(\alpha + \delta) \\ \sin\beta & \cos\beta & \sin(\beta + \delta) \\ \sin\gamma & \cos\gamma & \sin(\gamma + \delta) \end{vmatrix}$  h) $\begin{vmatrix} \ln 10 & \ln 4 & \ln 40 \\ \ln 5 & \ln 4 & \ln 20 \\ \ln 2 & 0 & \ln 2 \end{vmatrix}$

**6.4.** Using the fact that
$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = -2,$$
calculate the values of the following determinants:
a) $\begin{vmatrix} a & b & c \\ g & h & i \\ d & e & f \end{vmatrix}$  b) $\begin{vmatrix} a & b & c \\ 2d & 2e & 2f \\ g & h & i \end{vmatrix}$
c) $\begin{vmatrix} a & b & c \\ a + d & b + e & c + f \\ g & h & i \end{vmatrix}$  d) $\begin{vmatrix} a & d & g \\ b & e & h \\ c & f & i \end{vmatrix}$
e) $\begin{vmatrix} a & 3b & c \\ d & 3e & f \\ g & 3h & i \end{vmatrix}$  f) $\begin{vmatrix} a & b & c + a \\ d & e & f + d \\ g & h & i + g \end{vmatrix}$
g) $\begin{vmatrix} 2a & 3b & c + a \\ 2d & 3e & f + d \\ 2g & 3h & i + g \end{vmatrix}$  h) $\begin{vmatrix} 2a & 2b & 2c \\ 3d & 3e & 3f \\ g + 4a & h + 4b & i + 4c \end{vmatrix}$

**6.5.** Let $\mathbf{A}$ and $\mathbf{B}$ be two $3 \times 3$ matrices, and let $\det(\mathbf{A}) = 5$, $\det(\mathbf{B}) = 4$. Calculate the values of the following determinants!
a) $\det(\mathbf{A}^2)$  b) $\det(2\mathbf{A})$  c) $\det((2\mathbf{A})^2)$
d) $\det(\mathbf{A}^{-1})$  e) $\det(5\mathbf{A}^{-1})$  f) $\det((5\mathbf{A})^{-1})$
g) $\det(\mathbf{AB}^{-1})$  h) $\det(\mathbf{A}^{\mathsf{T}}\mathbf{B})$  i) $|\mathbf{A}^{-1}|\,|\mathbf{B}^{-1}\mathbf{A}|\,|\mathbf{B}|$

**6.6.** Using only row swaps, bring the following determinants to a simpler form (for example, triangular form), and thus calculate their values:
a) $\begin{vmatrix} 0 & 2 & 0 \\ 0 & 0 & 3 \\ 1 & 0 & 0 \end{vmatrix}$  b) $\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix}$
c) $\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix}$, $\begin{vmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{vmatrix}$, $\begin{vmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \end{vmatrix}$
d) $\begin{vmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 2 & 5 \\ 0 & 3 & 6 & 8 \\ 4 & 7 & 9 & 2 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 0 \\ 3 & 3 & 0 & 0 \\ 4 & 0 & 0 & 0 \end{vmatrix}$
f) $\begin{vmatrix} 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 1 & 0 \\ \vdots & & & \vdots & \vdots \\ 0 & 1 & \ldots & 0 & 0 \\ 1 & 0 & \ldots & 0 & 0 \end{vmatrix}$  g) $\begin{vmatrix} 0 & 0 & \ldots & 0 & 1 & 1 \\ 0 & 0 & \ldots & 1 & 1 & 1 \\ \vdots & & & & & \vdots \\ 0 & 1 & \ldots & 1 & 1 & 1 \\ 1 & 1 & \ldots & 1 & 1 & 1 \end{vmatrix}$

**6.7.** Calculate the following determinants with elementary row operations!
a) $\begin{vmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \\ 1 & 3 & 6 \end{vmatrix}$  b) $\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 5 & 7 \\ 1 & 4 & 7 & 10 \end{vmatrix}$
c) $\begin{vmatrix} 3 & 8 & 6 & 3 \\ 1 & 3 & 0 & 1 \\ 1 & 1 & -1 & 2 \\ 1 & 5 & 1 & 5 \end{vmatrix}$  d) $\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 0 & 0 & 0 & 4 \\ 3 & 0 & 1 & 0 & 3 \\ 4 & 0 & 0 & 0 & 2 \\ 5 & 4 & 3 & 2 & 1 \end{vmatrix}$

**6.8. Ones in the anti-diagonal.** How many rows are in inversion in the matrix whose anti-diagonal consists of ones and is otherwise zeros, and what is its determinant?

**6.9.** Calculate the following $n$-th order determinants with elementary row operations!
a) $\begin{vmatrix} 1 + x_1y_1 & 1 + x_1y_2 & \ldots & 1 + x_1y_n \\ 1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\ \vdots & \vdots & & \vdots \\ 1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n \end{vmatrix}$
b) $\begin{vmatrix} 1 & a & a^2 & \ldots & a^{n-1} \\ a^{n-1} & 1 & a & \ldots & a^{n-2} \\ a^{n-2} & a^{n-1} & 1 & \ldots & a^{n-3} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a & a^2 & a^3 & \ldots & 1 \end{vmatrix}$
c) $\begin{vmatrix} a & b & b & \ldots & b \\ b & a & b & \ldots & b \\ b & b & a & \ldots & b \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ b & b & b & \ldots & a \end{vmatrix}$  d) $\begin{vmatrix} a & b & b & \ldots & b \\ c & a & b & \ldots & b \\ c & c & a & \ldots & b \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ c & c & c & \ldots & a \end{vmatrix}$

**6.10.** Calculate the determinant of the adjacency matrix of the Petersen graph!

**6.11.** Write down the definition of the determinant in such a way that det is an $n$-variable scalar-valued function defined on $n$-dimensional vectors.

**6.12.** Give a new proof for the multiplication rule for determinants by verifying that the mapping $\mathbf{A} \mapsto \det(\mathbf{AB})/\det(\mathbf{B})$ satisfies the conditions imposed in the definition of the determinant.

**6.13.** Prove Proposition 6.12 regarding the determinant of the transpose using the LU decomposition!

**6.14.** Express the determinants of the elementary matrices using the notations used for them ($\mathbf{E}_{S_i + cS_j}$, $\mathbf{E}_{S_i \leftrightarrow S_j}$, $\mathbf{E}_{cS_i}$)!

**6.15.** Calculate the value of the determinant containing Pascal's triangle from Example 6.7
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix}$$
by zeroing out the elements below the main diagonal in the first column by first subtracting the second to last row from the last, then the second row from the third, finally the first from the second, and following this method for the rest of the elements below the main diagonal as well.

**6.16.** Calculate the value of the determinant
$$\left|\binom{i + j - 2}{j - 1}\right|_{n \times n} = \begin{vmatrix} \binom{0}{0} & \binom{1}{1} & \ldots & \binom{n-1}{n-1} \\ \binom{1}{0} & \binom{2}{1} & \ldots & \binom{n}{n-1} \\ \vdots & \vdots & \ddots & \vdots \\ \binom{n-1}{0} & \binom{n}{1} & \ldots & \binom{2n-2}{n-1} \end{vmatrix}$$
(Hint: starting with the last row, subtract the previous one from each row!)

**6.17.** Show that the value of a determinant of at least order 3 is 0 if its elements read row by row form an arithmetic progression. For example
$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix} = 0.$$

**6.18.** Show that the value of a determinant of at least order 3 is 0 if each of its rows is an arithmetic progression, for example
$$\begin{vmatrix} 1 & 2 & 3 \\ 1 & 4 & 7 \\ 1 & 3 & 5 \end{vmatrix} = 0.$$

**6.19.** Show that if the elements of a determinant read row by row form a geometric progression, then its value is 0. For example
$$\begin{vmatrix} \frac{1}{8} & \frac{1}{4} & \frac{1}{2} \\ 1 & 2 & 4 \\ 8 & 16 & 32 \end{vmatrix} = 0.$$

**6.20.** Show that for any real numbers $a$, $b$, $c$, and $d$
$$\begin{vmatrix} a^2 & (a+1)^2 & (a+2)^2 & (a+3)^2 \\ b^2 & (b+1)^2 & (b+2)^2 & (b+3)^2 \\ c^2 & (c+1)^2 & (c+2)^2 & (c+3)^2 \\ d^2 & (d+1)^2 & (d+2)^2 & (d+3)^2 \end{vmatrix} = 0.$$

**6.21.** Show that if $\mathbf{C}$ is invertible, then $\det(\mathbf{CAC}^{-1}) = \det(\mathbf{A})$ holds for any matrix $\mathbf{A}$ of the same size.

**6.22. Determinant of vectors in another basis.** Prove that if $\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}$ is the change of basis matrix, then for the determinants of the matrices $\mathbf{V}_{\mathcal{B}}$ and $\mathbf{V}_{\mathcal{C}}$ formed by the coordinate vectors of the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ in $\mathcal{B}$ and $\mathcal{C}$, we have $|\mathbf{V}_{\mathcal{C}}| = |\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}|\,|\mathbf{V}_{\mathcal{B}}|$.

**6.23.** Prove that the determinant of an odd-order skew-symmetric matrix is 0.

**6.24. Determinant of the square of a matrix.** Prove that for any square matrix $\mathbf{A}$, $|\mathbf{A}^2| = |\mathbf{A}\mathbf{A}^{\mathsf{T}}|$.

**6.25.** By calculating the square of the determinant (Exercise 6.24) and applying the multiplication theorem for determinants, calculate the values of the following determinants:
$$\begin{vmatrix} a & b \\ -b & a \end{vmatrix}, \quad \begin{vmatrix} a & b & c & d \\ -b & a & -d & c \\ -c & d & a & -b \\ -d & -c & b & a \end{vmatrix},$$
$$\begin{vmatrix} a & b & c & d & e & f & g & h \\ b & -a & -d & c & f & -e & h & -g \\ c & d & -a & -b & g & -h & -e & f \\ d & -c & b & -a & h & g & -f & -e \\ e & -f & -g & -h & -a & b & c & d \\ f & e & h & -g & b & -a & d & -c \\ g & -h & e & f & -c & -d & -a & b \\ h & g & -f & e & -d & c & -b & -a \end{vmatrix}.$$

**6.26.** Show that the product $(x_1^2 + x_2^2)(y_1^2 + y_2^2)$ can be expressed as the sum of squares of two numbers, i.e.,
$$(x_1^2 + x_2^2)(y_1^2 + y_2^2) = (z_1^2 + z_2^2),$$
where each of $z_1$ and $z_2$ is a linear expression in the variables $x_i$ and $y_i$ separately ($i = 1, 2$). (Similar relationships can be proven about the sum of squares of four and eight numbers. For example, the formula for the sum of squares of four numbers is
$$(x_1^2 + x_2^2 + x_3^2 + x_4^2)(y_1^2 + y_2^2 + y_3^2 + y_4^2) = (z_1^2 + z_2^2 + z_3^2 + z_4^2),$$
where $z_i$ is linear in the variables $x_i$ and $y_i$ ($i = 1, 2, 3, 4$). For the solution, use the statement of the previous exercise.)

**6.27. Area of the image of a rectangle.** Let the four vertices of a rectangle be $(p, q)$, $(p + x, q)$, $(p, q + y)$, $(p + x, q + y)$, where $x, y > 0$. So the side lengths of the rectangle are $x$ and $y$, its area is $xy$. What will be the area of the plane figure resulting from this rectangle under the linear transformation with matrix $\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right]$?

**6.28. Orientation.** We say that two bases of $\mathbb{R}^n$ have the same orientation if the determinant of the linear transformation mapping one into the other is positive. Show that on the bases of $\mathbb{R}^n$, the "same orientation" relation is an equivalence relation, which thus partitions all bases into two classes.

## The determinant as a function of its elements

> *So far, we have treated the determinant as a function of its row vectors; in the following, we will treat it as a function of its elements. To this end, we will get acquainted with two methods in which the calculation of the determinant is reduced to calculating simpler determinants.*

So far, we have dealt generously with the nature of the elements of the determinant. We implicitly assumed about them that they come from the same algebraic structure, and that addition, subtraction, multiplication, and division can be performed among them. To perform elementary row operations, exactly these four operations were needed. In this section, it will turn out that the determinant can be calculated without division. A consequence of this, for example, is that the determinant of a matrix with integer elements is an integer, even if we stumble upon rationals during the calculation.[^9]

[^9]: Generally speaking: we can calculate a determinant not only from elements of fields, e.g., the real $\mathbb{R}$, rational $\mathbb{Q}$, complex $\mathbb{C}$ number fields, or the finite fields $\mathbb{F}_q$, within the given structure, but also, for example, determinants formed from the elements of the ring of integers $\mathbb{Z}$ or the ring of polynomials. For further details, see Appendix A.

### Determinant of snakes

To calculate a $2 \times 2$ determinant, we know the formula that writes the value of the determinant as a function of its elements: $\det\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right] = ad - bc$. Here, therefore, only addition, subtraction, and multiplication are needed. We are looking for a similar formula for $n$-th order determinants. For this, we use the so-called *snakes* - otherwise known as *transversals*. Snakes are matrices derived by permutations of the rows of diagonal matrices, i.e., every snake $\mathbf{K}$ can be written in the form $\mathbf{K} = \mathbf{P}\operatorname{diag}(a_1, a_2, \ldots, a_n)$, where $\mathbf{P}$ is a permutation matrix. This will be called the *permutation matrix associated with the snake*. Since the determinant of $\mathbf{P}$ is 1 or $-1$, $|\mathbf{K}| = a_1a_2 \ldots a_n$ or $|\mathbf{K}| = -a_1a_2 \ldots a_n$.

Using the row-wise linearity of determinants, we get an interesting decomposition of the determinant. As an example, consider the determinant
$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix}$$
Using the decomposition of its first row vector $(a, b, c) = (a, 0, 0) + (0, b, 0) + (0, 0, c)$, let us decompose the determinant into the sum of three determinants:
$$\begin{vmatrix} a + 0 & 0 + b + 0 & 0 + 0 + c \\ d & e & f \\ g & h & i \end{vmatrix} = \begin{vmatrix} a & 0 & 0 \\ d & e & f \\ g & h & i \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ d & e & f \\ g & h & i \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ d & e & f \\ g & h & i \end{vmatrix}$$
Then let us continue this decomposition with the second row vector, so we have now decomposed the original determinant into a sum of 9 determinants. Finally, let us do the same with the last row. We will not write out the resulting 27 determinants, but for illustration, we show the steps of the decomposition in a schematic diagram (Figure 6.7). A solid square indicates the places where we keep the original element of the determinant, and an empty circle indicates those where we write a zero. Each of the 27 determinants has one element from the original determinant in every row, the rest are zero. However, there are only 6 snakes among them. The rest have a zero column, so their value is 0, meaning we have decomposed the original determinant into the sum of 6 snakes (we indicated the determinants with 0 value in gray).

In a similar way, any $n$-th order determinant decomposes into a sum of $n^n$ determinants, in which there is exactly one element from the original determinant in every row, and the rest are 0, but of these, only those will be determinants of snakes which also have one element from the original in every column. (We call these the snakes selectable from the matrix/determinant.) Their number is $n!$, because we can choose an element from the first row in $n$ ways, from the second row in each case only in $n - 1$ ways, $\ldots$, and this is a total of $n(n-1) \ldots 3 \cdot 2 \cdot 1 = n!$ cases. The following proposition is therefore true:

**Proposition 6.15 (Decomposition into the sum of determinants of snakes).** *Every $n$-th order determinant decomposes into the sum of the determinants of all snakes that can be selected from it. Let $d_{j_1j_2\ldots j_n}$ denote the determinant of the permutation matrix associated with the snake consisting of the elements $a_{1j_1}$, $a_{2j_2}, \ldots$, $a_{nj_n}$ (its value is 1 or $-1$). Then*
$$\det([a_{ij}]) = \sum d_{j_1j_2\ldots j_n}a_{1j_1}a_{2j_2} \ldots a_{nj_n},$$
*where the summation runs over all possible permutations $\{j_1, j_2, \ldots, j_n\}$ of the set $\{1, 2, \ldots, n\}$.*

> $n!$ grows extremely fast as $n$ increases (e.g., $10! = 3628800$, $20! = 2432902008176640000$), calculating a determinant in this way for a relatively small order is not possible in human time even with a computer. We use the decomposition to study the properties of determinants.

> The only exceptions are the cases $n = 2$ and $n = 3$, which are practical even in manual calculations:
> $$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = \begin{vmatrix} a & 0 \\ 0 & d \end{vmatrix} + \begin{vmatrix} 0 & b \\ c & 0 \end{vmatrix} = ad - bc,$$
> since the second determinant can be brought to diagonal form by a single row swap. For $n = 3$ - also using Figure 6.7 - we get that
> $$\begin{aligned} \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} &= \begin{vmatrix} a & 0 & 0 \\ 0 & e & 0 \\ 0 & 0 & i \end{vmatrix} + \begin{vmatrix} a & 0 & 0 \\ 0 & 0 & f \\ 0 & h & 0 \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ d & 0 & 0 \\ 0 & 0 & i \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ 0 & 0 & f \\ g & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ d & 0 & 0 \\ 0 & h & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ 0 & e & 0 \\ g & 0 & 0 \end{vmatrix} \\ &= aei - afh - bdi + bfg + cdh - ceg \\ &= aei + bfg + cdh - afh - bdi - ceg. \end{aligned}$$

*Figure 6.7. Decomposition of a $3 \times 3$ determinant into the sum of $3^3$ determinants, of which, except for $3! = 6$, all have a zero column - their schematic diagram is marked in gray.*

> These two formulas can be easily remembered by a simple rule, which for $n = 2$ and $n = 3$ is also called *Sarrus' rule*: subtract the products in the direction of the anti-diagonal from the sum of the products in the direction of the main diagonal. (What we mean by a product in the direction of the main diagonal and anti-diagonal can be understood from Figures 6.8 and 6.9.) It is important that a similar rule is *no longer valid* for $n > 3$ (see Exercise 6.33)!

The decomposition of the determinant in Proposition 6.15 represents the value of the determinant as a function of its elements. This has many beautiful and important consequences.

*Figure 6.8. Calculating the (a) second-order and (b) third-order determinant: subtract the products in the direction of the anti-diagonal from the sum of the products in the direction of the main diagonal. In the third-order case, we can initially make it easier for ourselves by repeating the first two columns of the determinant after it. (a) $ad - bc$; (b) $aei + bfg + cdh - afh - bdi - ceg$.*

**Corollary 6.16 (Existence of the determinant function).** *The determinant function exists and is unique.*

*Proof.* It is enough to show that the concept of the determinant defined by the sum of the determinants of snakes satisfies the conditions imposed in the definition of the determinant. This is immediately obvious, since it is enough to check them for snakes only. We leave this to the Reader. $\square$

Here are two further important consequences of the decomposition into snakes:

> An algebraic consequence: to calculate the determinant, it is enough to only use addition, subtraction, and multiplication.


*Proof.* Let every element in the $i$-th row of the determinant $|\mathbf{A}|$ be 0 except for $a_{ij}$ (it can be discussed similarly if there are zeros in the $j$-th column). Let's swap the $j$-th column with the $(j-1)$-th, then this with the $(j-2)$-th$\ldots$, until the column $\mathbf{A}_{*j}$ gets to the first column. This means $j - 1$ column swaps, i.e., the value of the determinant changes by a factor of $(-1)^{j-1}$. Then similarly, let's move the $i$-th row to the first row by swapping adjacent rows. This requires $i - 1$ swaps, while the determinant's value changes by a factor of $(-1)^{i-1}$.
$$\begin{vmatrix} a_{11} & a_{12} & \ldots & a_{1j} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2j} & \ldots & a_{2n} \\ \vdots & \vdots & & \vdots & & \vdots \\ 0 & 0 & \ldots & a_{ij} & \ldots & 0 \\ \vdots & \vdots & & \vdots & & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nj} & \ldots & a_{nn} \end{vmatrix} = (-1)^{j-1}\begin{vmatrix} a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{ij} & 0 & 0 & \ldots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$= (-1)^{i-1}(-1)^{j-1}\begin{vmatrix} a_{ij} & 0 & 0 & \ldots & 0 \\ a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$\overset{*}{=} (-1)^{i+j}a_{ij}\begin{vmatrix} 1 & 0 & 0 & \ldots & 0 \\ a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$\overset{**}{=} (-1)^{i+j}a_{ij}\begin{vmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix} = a_{ij}A_{ij}.$$
At the equality with $*$, we used the fact that the parities of $i + j - 2$ and $i + j$ are the same, so they give the same result as exponents of $-1$, and we also factored out $a_{ij}$ from the first row. To calculate the determinant standing before the $**$ equality, only the rows from the second downwards need to be used, the final result is not affected by the elements of the first column, thus the value of the determinant obtained by leaving out the first row and first column is the same. Finally, the determinant obtained this way together with the sign is exactly $A_{ij}$, and with this we proved the statement. $\square$

**Example 6.22 (Reducing the order of a determinant).** *Calculate the value of the following determinant by reducing its order!*
$$\begin{vmatrix} 1 & 2 & 0 & 3 & 4 \\ 1 & 2 & 0 & 8 & 4 \\ 6 & 0 & 0 & 7 & 0 \\ 8 & 9 & 8 & 7 & 6 \\ 5 & 4 & 0 & 3 & 2 \end{vmatrix}.$$

*Solution.* In each step – possibly after a minor transformation – we find a row or column in which there is only one nonzero number, so the determinant can be easily calculated:
$$\begin{vmatrix} 1 & 2 & 0 & 3 & 4 \\ 1 & 2 & 0 & 8 & 4 \\ 6 & 0 & 0 & 7 & 0 \\ 8 & 9 & \boxed{8} & 7 & 6 \\ 5 & 4 & 0 & 3 & 2 \end{vmatrix} = (-1)^{4+3} \cdot 8\begin{vmatrix} 1 & 2 & 3 & 4 \\ 1 & 2 & 8 & 4 \\ 6 & 0 & 7 & 0 \\ 5 & 4 & 3 & 2 \end{vmatrix}$$
$$\overset{(S_2 - S_1)}{=} (-8)\begin{vmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & \boxed{5} & 0 \\ 6 & 0 & 7 & 0 \\ 5 & 4 & 3 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-1)^{2+3} \cdot 5\begin{vmatrix} 1 & 2 & 4 \\ \boxed{6} & 0 & 0 \\ 5 & 4 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-5) \cdot (-1)^{2+1} \cdot 6\begin{vmatrix} 2 & 4 \\ 4 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-5) \cdot (-6) \cdot (-12)$$
$$= 2880. \qquad \square$$

### Expansion of a determinant

It rarely happens that the order of a determinant can be reduced using the previous (6.21) statement, but by using it we get a beautiful expansion theorem of determinants.

> Some books call this expansion theorem the *Laplace expansion theorem*, while other books only call a generalization of this – which can be found among the exercises – by this name, and many books define the determinant with the relation in this theorem.

**Theorem 6.23 (Expansion theorem of determinants).** *The value of a determinant can be obtained by multiplying every element of an arbitrary row or column by the signed subdeterminant belonging to it, and adding these products together. In formula, the value of the $n$-th order determinant $|\mathbf{A}|$ expanded along its $i$-th row is*
$$|\mathbf{A}| = \sum_{k=1}^{n} a_{ik}A_{ik},$$
*and expanded along its $j$-th column is*
$$|\mathbf{A}| = \sum_{k=1}^{n} a_{kj}A_{kj}.$$

*Proof.* Similar to what we have seen before, by decomposing the $i$-th row vector, we split the determinant into the sum of $n$ determinants, in the $i$-th row of which only one element originates from the original determinant, the rest are 0. For the sake of simplicity, we only write the decomposition for the case $n = 3$ and $i = 2$, but it works the same way for arbitrary $n$. Then we apply Statement 6.21 to each new determinant:
$$\begin{aligned} |\mathbf{A}| &= \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & 0 & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ 0 & a_{22} & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ 0 & 0 & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} \\ &= a_{21}A_{21} + a_{22}A_{22} + a_{23}A_{23} \\ &= \sum_{k=1}^{3} a_{2k}A_{2k}. \end{aligned}$$
The proof goes exactly the same way for columns, which we illustrate with the case $n = 3$, $j = 3$ as an example:
$$\begin{aligned} |\mathbf{A}| &= \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & 0 \\ a_{31} & a_{32} & 0 \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & 0 \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & 0 \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & 0 \\ a_{21} & a_{22} & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} \\ &= a_{13}A_{13} + a_{23}A_{23} + a_{33}A_{33} \\ &= \sum_{k=1}^{3} a_{k3}A_{k3}. \end{aligned}$$
$\square$

**Example 6.24 (Expansion theorem).** *Calculate the value of the following determinant using the expansion theorem!*
$$\begin{vmatrix} 3 & 2 & 1 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \end{vmatrix}.$$

*Solution.* It is worth expanding this determinant along its third column, because there are two 0s there, so the subdeterminants multiplied by them do not even need to be written down.
$$\begin{vmatrix} 3 & 2 & 1 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \end{vmatrix} = 1 \cdot \begin{vmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix} - 1 \cdot \begin{vmatrix} 3 & 2 & 2 \\ 2 & 1 & 1 \\ 1 & 1 & 1 \end{vmatrix} = 1 - 0 = 1. \qquad \square$$

### Vandermonde determinant

We introduce an important determinant. It has countless applications, one of which is polynomial interpolation.

**Example 6.25 (Interpolation for quadratic polynomials).** *Let $x$, $y$ and $z$ be three different real numbers, $a$, $b$ and $c$ be three arbitrary real numbers. Show that there exists exactly one polynomial $f$ of degree at most two, for which $f(x) = a$, $f(y) = b$ and $f(z) = c$.*

*Solution.* Let $f : x \mapsto p + qx + rx^2$, where $p$, $q$ and $r$ are the unknown coefficients of the polynomial. The equations $f(x) = a$, $f(y) = b$ and $f(z) = c$ lead to the following system of equations:
$$\begin{bmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{bmatrix}\begin{bmatrix} p \\ q \\ r \end{bmatrix} = \begin{bmatrix} a \\ b \\ c \end{bmatrix}$$
According to Theorem 6.5, this system of equations has a unique solution if and only if the determinant of its coefficient matrix is not 0. We start the transformation with column operations:
$$\begin{aligned} \begin{vmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{vmatrix} &\overset{O_3 - xO_2}{=} \begin{vmatrix} 1 & x & 0 \\ 1 & y & y^2 - xy \\ 1 & z & z^2 - xz \end{vmatrix} \overset{O_2 - xO_1}{=} \begin{vmatrix} 1 & 0 & 0 \\ 1 & y - x & y^2 - xy \\ 1 & z - x & z^2 - xz \end{vmatrix} \\ &= \begin{vmatrix} y - x & y^2 - xy \\ z - x & z^2 - xz \end{vmatrix} = (y - x)\begin{vmatrix} 1 & y \\ z - x & z^2 - xz \end{vmatrix} = (y - x)(z - x)\begin{vmatrix} 1 & y \\ 1 & z \end{vmatrix} \\ &= (y - x)(z - x)(z - y) \end{aligned}$$
Since $x$, $y$ and $z$ are three different real numbers, the value of the determinant is not 0, so the system of equations can be uniquely solved, meaning there exists exactly one polynomial that satisfies the conditions. $\square$

The generalization of this problem and the determinant in it leads to the following definition:

**Definition 6.26 (Vandermonde determinant).** *By the Vandermonde determinant belonging to the numbers $x_1, x_2, \ldots x_n$, we mean the determinant*
$$V_n(x_1, x_2, \ldots, x_n) = \begin{vmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \\ \vdots & \vdots & & \vdots \\ x_1^{n-1} & x_2^{n-1} & \ldots & x_n^{n-1} \end{vmatrix} \tag{6.1}$$
*or its transpose*
$$\begin{vmatrix} 1 & x_1 & x_1^2 & \ldots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \ldots & x_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-1} \end{vmatrix}$$
*The corresponding matrix is called a Vandermonde matrix.*

Since the value of a determinant equals the value of its transpose, the values of the two determinants in the definition are also identical, so it does not matter which form we use.

**Theorem 6.27 (Value of the Vandermonde determinant).** *The value of the Vandermonde determinant belonging to the numbers $x_1, x_2, \ldots x_n$ ($n > 1$) is equal to the product of differences of the form $(x_j - x_i)$, where $i < j$, that is*
$$V_n(x_1, x_2, \ldots, x_n) = \prod_{i < j}(x_j - x_i).$$

*Proof.* Starting with the last column of the determinant, let's subtract $x_1$ times the previous column from each column.
$$\begin{aligned} V_n(x_1, x_2, \ldots, x_n) &= \begin{vmatrix} 1 & x_1 & x_1^2 & \ldots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \ldots & x_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-1} \end{vmatrix} \\ &= \begin{vmatrix} 1 & 0 & 0 & \ldots & 0 \\ 1 & x_2 - x_1 & x_2^2 - x_1x_2 & \ldots & x_2^{n-1} - x_1x_2^{n-2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n - x_1 & x_n^2 - x_1x_n & \ldots & x_n^{n-1} - x_1x_n^{n-2} \end{vmatrix} \end{aligned}$$
which, expanded along its first row, then factoring out the element in the first column from each row, leads to the following form:
$$\begin{aligned} &= \begin{vmatrix} x_2 - x_1 & x_2^2 - x_1x_2 & \ldots & x_2^{n-1} - x_1x_2^{n-2} \\ \vdots & \vdots & & \vdots \\ x_n - x_1 & x_n^2 - x_1x_n & \ldots & x_n^{n-1} - x_1x_n^{n-2} \end{vmatrix} \\ &= (x_2 - x_1)(x_3 - x_1) \ldots (x_n - x_1)\begin{vmatrix} 1 & x_2 & x_2^2 & \ldots & x_2^{n-2} \\ 1 & x_3 & x_3^2 & \ldots & x_3^{n-2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-2} \end{vmatrix} \\ &= (x_2 - x_1)(x_3 - x_1) \ldots (x_n - x_1)V_{n-1}(x_2, \ldots, x_n) \\ &= V_{n-1}(x_2, \ldots, x_n)\prod_{1 < j}(x_j - x_1). \end{aligned}$$
As a result, we obtained a recursive formula, which substituting into itself, and also using the formula $V_2(x_{n-1}, x_n) = x_n - x_{n-1}$, we arrive at the relation in the theorem. $\square$

### Cramer's rule and the inverse of a matrix

So far, whether for solving the system of equations $\mathbf{Ax} = \mathbf{b}$ or for calculating the inverse of the matrix $\mathbf{A}$, we used a method that, by using elementary row operations, only provides an algorithm for the calculations, but does not give the relationship (formula) between the data and what is to be calculated. In this section, we make up for this!


Let $\mathbf{A}_{i,\mathbf{b}}$ denote the matrix that we get if we write the vector $\mathbf{b}$ in place of the $i$-th column of the matrix $\mathbf{A}$. Expanded

$$\mathbf{A}_{i,\mathbf{b}} = [\mathbf{a}_{*1}\ \ldots\ \mathbf{a}_{*,i-1}\ \mathbf{b}\ \mathbf{a}_{*,i+1}\ \ldots\ \mathbf{a}_{*n}].$$

With this notation, by the matrix $\mathbf{I}_{i,\mathbf{x}}$ we mean the matrix $[\mathbf{e}_{*1}\ \ldots\ \mathbf{e}_{*,i-1}\ \mathbf{x}\ \mathbf{e}_{*,i+1}\ \ldots\ \mathbf{e}_{*n}]$.

**Theorem 6.28 (Cramer's rule).** *Let $\mathbf{A}$ be an $n \times n$ matrix. The system of equations $\mathbf{Ax} = \mathbf{b}$ has a unique solution if and only if $\det\mathbf{A} \neq 0$. In this case, the solution is:*

$$x_i = \frac{\det\mathbf{A}_{i,\mathbf{b}}}{\det\mathbf{A}}, \quad (i = 1,2,\ldots,n)$$

> *Gabriel Cramer (1704–1752) was a Swiss mathematician born in Geneva, in whose work "Introduction à l'analyse des lignes courbes algébriques" published in 1750, the theorem known today as Cramer's rule appeared. The rule had already been known to others before.*

**Proof.** We have already proved the first half of the statement in Theorem 6.5. From this, we use the fact that since the system of equations is solvable, $\det\mathbf{A} \neq 0$. Utilizing that $\mathbf{Ax} = \mathbf{b}$ and that $\mathbf{Ae}_i = \mathbf{a}_{*i}$, we get that

$$\begin{aligned}
\mathbf{AI}_{i,\mathbf{x}} &= \mathbf{A}[\mathbf{e}_{*1}\ \ldots\ \mathbf{e}_{*,i-1}\ \mathbf{x}\ \mathbf{e}_{*,i+1}\ \ldots\ \mathbf{e}_{*n}] \\
&= [\mathbf{Ae}_{*1}\ \ldots\ \mathbf{Ae}_{*,i-1}\ \mathbf{Ax}\ \mathbf{Ae}_{*,i+1}\ \ldots\ \mathbf{Ae}_{*n}] \\
&= [\mathbf{a}_{*1}\ \ldots\ \mathbf{a}_{*,i-1}\ \mathbf{b}\ \mathbf{a}_{*,i+1}\ \ldots\ \mathbf{a}_{*n}] \\
&= \mathbf{A}_{i,\mathbf{b}}
\end{aligned}$$

Since after leaving out the $i$-th row and column of the matrix $\mathbf{I}_{i,\mathbf{x}}$, an identity matrix remains, therefore expanding it along its $i$-th row

$$\det\mathbf{I}_{i,\mathbf{x}} = \begin{vmatrix}
1 & 0 & \ldots & x_1 & \ldots & 0 \\
0 & 1 & \ldots & x_2 & \ldots & 0 \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
0 & 0 & \ldots & x_i & \ldots & 0 \\
\vdots & \vdots & & \vdots & \ddots & \vdots \\
0 & 0 & \ldots & x_n & \ldots & 1
\end{vmatrix} = (-1)^{i+i}x_i = x_i.$$

Thus, also using the multiplication rule for determinants, $\det(\mathbf{AI}_{i,\mathbf{x}}) = \det\mathbf{A}_{i,\mathbf{b}}$, from which $x_i \det\mathbf{A} = \det\mathbf{A}_{i,\mathbf{b}}$, i.e., $x_i = \det\mathbf{A}_{i,\mathbf{b}} / \det\mathbf{A}$. $\square$

**Example 6.29 (Cramer's rule).** *Solve the system of equations*

$$\begin{alignedat}{9}
2x &{}+{}& 5y &{}={}& 4 \\
5x &{}+{}& 3y &{}={}& 6
\end{alignedat}$$

*using Cramer's rule!*

**Solution.** The determinants to be calculated with the notation $\mathbf{b} = \left[\begin{smallmatrix}4\\6\end{smallmatrix}\right]$ are:

$$|\mathbf{A}| = \begin{vmatrix} 2 & 5 \\ 5 & 3 \end{vmatrix} = -19, \quad |\mathbf{A}_{1,\mathbf{b}}| = \begin{vmatrix} 4 & 5 \\ 6 & 3 \end{vmatrix} = -18, \quad |\mathbf{A}_{2,\mathbf{b}}| = \begin{vmatrix} 2 & 4 \\ 5 & 6 \end{vmatrix} = -8.$$

From here $x = \frac{-18}{-19} = \frac{18}{19}$, $y = \frac{-8}{-19} = \frac{8}{19}$. $\square$

If we can solve a system of equations, we can also solve a simultaneous system of equations, and thus, e.g., by solving $\mathbf{AX} = \mathbf{I}$, we can also calculate the inverse of the matrix. To calculate the element $x_{ij}$, the system of equations $\mathbf{Ax}_{*j} = \mathbf{e}_j$ must be solved. The $i$-th coordinate of the solution is the element $x_{ij}$. According to Cramer's rule

$$\mathbf{x}_{ij} = \frac{\det\mathbf{A}_{i,\mathbf{e}_j}}{\det\mathbf{A}}$$

Since there is only one non-zero element in the $i$-th column of the matrix $\mathbf{A}_{i,\mathbf{e}_j}$, according to the expansion theorem

$$\det\mathbf{A}_{i,\mathbf{e}_j} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & 0 & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & 0 & \ldots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
a_{j1} & a_{j2} & \ldots & 1 & \ldots & a_{jn} \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
a_{n1} & a_{n2} & \ldots & 0 & \ldots & a_{nn}
\end{vmatrix} = A_{ji},$$

that is, this determinant is equal to a signed subdeterminant of $\mathbf{A}$, therefore

$$\mathbf{x}_{ij} = \frac{\det\mathbf{A}_{i,\mathbf{e}_j}}{\det\mathbf{A}} = \frac{\det A_{ji}}{\det\mathbf{A}}.$$

As we can see, to produce $\mathbf{X} = \mathbf{A}^{-1}$, the transpose of the matrix of signed subdeterminants of $\mathbf{A}$ is required. This matrix is called the *classical adjoint* of $\mathbf{A}$ and is denoted by $\operatorname{adj}(\mathbf{A})$. The adjective classical is necessary because the word adjoint is also used for the conjugate transpose of a complex matrix, and this could lead to misunderstandings. In formula, therefore

$$\operatorname{adj}\mathbf{A} = [A_{ij}]^{\mathsf{T}} = [A_{ji}]. \tag{6.2}$$

Thus we obtain the following theorem:

**Theorem 6.30 (Elements of the inverse matrix).** *Suppose that $\mathbf{A}$ is an invertible matrix. Then the element of its inverse with index $ij$ is the quotient of the signed subdeterminant belonging to the element $a_{ji}$ and the determinant of the matrix $\mathbf{A}$, that is*

$$[\mathbf{A}^{-1}]_{ij} = \frac{A_{ji}}{\det\mathbf{A}}.$$

*Thus the inverse matrix can be written in the form*

$$\mathbf{A}^{-1} = \frac{1}{\det\mathbf{A}}[A_{ij}]^{\mathsf{T}} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A}. \tag{6.3}$$

*alakba írható.*

> It is easy to check that the classical adjoint of the matrix $\mathbf{A} = \left[\begin{smallmatrix}a & b\\c & d\end{smallmatrix}\right]$ is

$$\begin{bmatrix} d & -c \\ -b & a \end{bmatrix}^{\mathsf{T}} = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix},$$

> so its inverse is

$$\mathbf{A}^{-1} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}.$$

> This expression of the inverse of the matrix shows that every element of the inverse matrix is a continuous function of every element of the matrix at every place where the inverse exists, at such a place and in some of its neighborhood the determinant is not 0.

> From the previous remark it also follows that every coordinate of the solution vector of a system of equations consisting of $n$ equations with $n$ unknowns is a continuous function of the coefficients of the system of equations and the coordinates of the vector on the right side, since the solution can be obtained by multiplication with the inverse.

> The inverse of an integer matrix is an integer matrix if and only if its determinant is 1 or $-1$. This comes from the fact that $\det(\mathbf{A})\det(\mathbf{A}^{-1}) = \det\mathbf{I} = 1$, so if $|\det\mathbf{A}| \neq 1$, then $\det(\mathbf{A}^{-1})$ is not an integer, therefore $\mathbf{A}^{-1}$ cannot be an integer matrix, and if $|\det\mathbf{A}| = 1$, then according to formula (6.3), every element of $\mathbf{A}^{-1}$ is an integer.

> The formula in the theorem can be easily extended to singular matrices as well, i.e., when the determinant is 0, namely

$$\mathbf{A}\operatorname{adj}\mathbf{A} = \det(\mathbf{A})\mathbf{I} \tag{6.4}$$

> holds for every square matrix (see exercise 6.46).

**Example 6.31 (Inverse of a matrix).** *For the purpose of illustration, calculate the inverse of the matrix*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 2 \\ 3 & 5 & 6 \\ 4 & 7 & 9 \end{bmatrix}$$

*containing all different elements!*

**Solution.** We write down the determinant $\operatorname{adj}\mathbf{A}$ in a form from which the method of calculating each element is visible. We print the elements to be left out in gray color:

$$\begin{aligned}
\operatorname{adj}\mathbf{A} &= \begin{bmatrix}
+\begin{vmatrix} 5 & 6 \\ 7 & 9 \end{vmatrix} & -\begin{vmatrix} 3 & 6 \\ 4 & 9 \end{vmatrix} & +\begin{vmatrix} 3 & 5 \\ 4 & 7 \end{vmatrix} \\[2mm]
-\begin{vmatrix} 1 & 2 \\ 7 & 9 \end{vmatrix} & +\begin{vmatrix} 0 & 2 \\ 4 & 9 \end{vmatrix} & -\begin{vmatrix} 0 & 1 \\ 4 & 7 \end{vmatrix} \\[2mm]
+\begin{vmatrix} 1 & 2 \\ 5 & 6 \end{vmatrix} & -\begin{vmatrix} 0 & 2 \\ 3 & 6 \end{vmatrix} & +\begin{vmatrix} 0 & 1 \\ 3 & 5 \end{vmatrix}
\end{bmatrix}^{\mathsf{T}} \\[2mm]
&= \begin{bmatrix} 3 & -3 & 1 \\ 5 & -8 & 4 \\ -4 & 6 & -3 \end{bmatrix}^{\mathsf{T}}
\end{aligned}$$

Since $\det\mathbf{A} = -1$, therefore

$$\mathbf{A}^{-1} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A} = -\begin{bmatrix} 3 & -3 & 1 \\ 5 & -8 & 4 \\ -4 & 6 & -3 \end{bmatrix}^{\mathsf{T}} = \begin{bmatrix} -3 & -5 & 4 \\ 3 & 8 & -6 \\ -1 & -4 & 3 \end{bmatrix} \qquad \square$$

Even from these simple examples, it can be seen that inverting a matrix with this method is very computationally demanding. Indeed, we do not use it for practical calculations, we find great use for it in theoretical reasoning.

### Determinant of block matrices

The matrix $\mathbf{M} = \left[\begin{smallmatrix}\mathbf{A} & \mathbf{B}\\\mathbf{C} & \mathbf{D}\end{smallmatrix}\right]$ generally cannot be calculated with the formula $\mathbf{AD} - \mathbf{BC}$ even in the case of square submatrices (see exercise **??**)! First, we start with a special but important case.

**Theorem 6.32 (Product of determinants in a block matrix).** *Let $\mathbf{A}$ and $\mathbf{D}$ be square matrices. Then*

$$\begin{vmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{D} \end{vmatrix} = \begin{vmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{C} & \mathbf{D} \end{vmatrix} = |\mathbf{A}||\mathbf{D}|.$$

**Proof.** We will show that every snake that does not have an element from the $\mathbf{O}$-matrix is the product of a snake in $\mathbf{A}$ and a snake in $\mathbf{D}$. To do this, it is enough to show that if a snake has an element from matrix $\mathbf{B}$ or $\mathbf{C}$, then it also has one from $\mathbf{O}$. Indeed, if e.g. an element of $\mathbf{B}$ is in a snake, then there is no element in its column in $\mathbf{D}$, thus a row also remains empty in $\mathbf{D}$, which can only be captured by an element in $\mathbf{O}$. We still need to check whether the product of the signs of the snakes in $\mathbf{A}$ and $\mathbf{D}$ equals the sign of the snake obtained by their union. This is obviously true, because a row intersecting $\mathbf{A}$ and a row intersecting $\mathbf{D}$ cannot be in inversion, so the number of inversions of the united snake equals the sum of the inversions of the two snakes, and the sign is given by $-1$ raised to the power of the number of inversions. $\square$

**Theorem 6.33 (Determinant of a $2 \times 2$ block matrix).** *Let*

$$\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix},$$

*where $\mathbf{A}$ and $\mathbf{D}$ are square matrices.*

1. *If $|\mathbf{A}| \neq 0$, then $|\mathbf{M}| = |\mathbf{A}||\mathbf{D} - \mathbf{CA}^{-1}\mathbf{B}|$.*
2. *If $|\mathbf{D}| \neq 0$, then $|\mathbf{M}| = |\mathbf{A} - \mathbf{BD}^{-1}\mathbf{C}||\mathbf{D}|$.*

**Proof.** If $\mathbf{A}$ is invertible, then decomposing $\mathbf{M}$ into the product of the following lower and upper block triangular matrices helps:

$$\begin{aligned}
\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix} &= \begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{C} & \mathbf{D} - \mathbf{CA}^{-1}\mathbf{B} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{A}^{-1}\mathbf{B} \\ \mathbf{O} & \mathbf{I} \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{CA}^{-1} & \mathbf{I} \end{bmatrix}\begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} - \mathbf{CA}^{-1}\mathbf{B} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{A}^{-1}\mathbf{B} \\ \mathbf{O} & \mathbf{I} \end{bmatrix}
\end{aligned}$$

Among the latter three matrices, the determinant of the outer ones is 1, and the middle one is the expression to be proved. The

$$\mathbf{M} = \begin{bmatrix} \mathbf{I} & \mathbf{BD}^{-1} \\ \mathbf{O} & \mathbf{I} \end{bmatrix}\begin{bmatrix} \mathbf{A} - \mathbf{BD}^{-1}\mathbf{C} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{D}^{-1}\mathbf{C} & \mathbf{I} \end{bmatrix}$$

decomposition proves the second relation. $\square$

## Exercises

**6.29.** Which of the following statements are true? ($\mathbf{A}$ here always denotes a square matrix.)

1. The determinant is a continuous function of every element of it.
2. The determinant is a differentiable function of every element of it.
3. If every element of a determinant is a rational number, then its value is also rational.
4. If exactly one element in every row and every column of a determinant is not 0, then the value of the determinant is not 0.
5. If a matrix is the sum of two snakes, then its determinant is also the sum of the determinants of two snakes.
6. If $i + j$ is an odd number, then the signed subdeterminant $A_{ij}$ is negative.
7. If every element of a determinant is positive, then its value cannot be negative.
8. The inverse of a matrix is a continuous function of every element of it.

### Decomposition into the sum of determinants of snakes

**6.30.** Select all snakes with non-zero determinant from the following determinants, and calculate the value of the determinant using them!

a)
$$\begin{vmatrix} 0 & 1 & 0 \\ 2 & 3 & 4 \\ 5 & 0 & 6 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 2 & 0 \\ 0 & 2 & 1 & 0 \\ 2 & 0 & 0 & 1 \end{vmatrix}$$

c)
$$\begin{vmatrix} 1 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 & 0 \\ 2 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 2 \end{vmatrix}$$

**6.31.** Without calculating its value, show that the following determinant is divisible by 30:

$$\begin{vmatrix} 24 & 40 & 68 \\ 27 & 15 & 31 \\ 51 & 55 & 53 \end{vmatrix}$$

**6.32.** By examining only the parity of the elements of the following determinant – which consists of lottery picks – without any calculations, prove that

$$\begin{vmatrix} 12 & 25 & 28 & 44 & 56 \\ 21 & 34 & 54 & 68 & 80 \\ 10 & 40 & 52 & 69 & 72 \\ 24 & 36 & 53 & 56 & 84 \\ 18 & 24 & 28 & 58 & 87 \end{vmatrix} \neq 0.$$

**6.33.** 4th order determinants can be decomposed into the sum of determinants of $4! = 24$ snakes. List the 12 of them which must be multiplied by $-1$ after multiplying their elements! (Sarrus' rule for a 4th order determinant would only consist of 8 snakes, so it cannot be used!)

### Expansion theorem

**6.34.** We know that 504, 747 and 855 are all divisible by 9. Using this, without calculating the value of the determinant, show that the following determinant is divisible by 9:

$$\begin{vmatrix} 5 & 0 & 4 \\ 7 & 4 & 7 \\ 8 & 5 & 5 \end{vmatrix}.$$

**6.35.** Construct a determinant with a non-zero value, which has an element that, when changed arbitrarily, does not change the value of the determinant.

**6.36.\* Generalization of Laplace's expansion theorem** Let $\mathbf{A} \in \mathbb{R}^{n \times n}$, $I = \{i_1, i_2, \ldots, i_k\}$ and $J = \{j_1, j_2, \ldots, j_k\}$ be $k$-element subsets of the set $N = \{1, 2, \ldots, n\}$ and let $\bar{I} = N \setminus I$, and $\bar{J} = N \setminus J$. Let $A_{I,J}$ denote the determinant of the elements at the intersection of the rows with indices in $I$ and columns with indices in $J$. Then

$$\begin{aligned}
\det\mathbf{A} &= \sum_I (-1)^{\sum I + \sum J} A_{I,J} A_{\bar{I},\bar{J}} \\
&= \sum_I (-1)^{\sum I + \sum J} A_{I,J} A_{\bar{I},\bar{J}},
\end{aligned}$$

where $\sum I = i_1 + i_2 + \ldots + i_k$.

**6.37.** Calculate the following determinant expanded along the first and third rows, then along the second and fourth columns using the generalization of Laplace's expansion theorem.

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 3 & 4 \\ 2 & 3 & 4 & 0 \\ 0 & 1 & 2 & 3 \\ 1 & 0 & 2 & 0 \end{bmatrix}$$

### Block determinants

**6.38.** Calculate the value of the following determinants exploiting their block structure!

a)
$$\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 5 & 4 & 3 & 2 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 2 & 0 \\ 0 & 0 & 3 & 3 & 3 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 4 & 0 & 0 & 0 \\ 0 & 3 & 3 & 0 & 0 \\ 0 & 2 & 2 & 2 & 0 \\ 0 & 1 & 1 & 1 & 1 \end{vmatrix}$$

### Determinant of special matrices

**6.39.** Calculate the value of the following determinants!

a)
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & -1 & -2 & 1 \\ 4 & 1 & 4 & 1 \\ 8 & -1 & -8 & 1 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & -3 & 9 & -27 & 81 \\ 1 & 2 & 4 & 8 & 16 \\ 1 & 1 & 1 & 1 & 1 \\ 1 & -2 & 4 & -8 & 16 \\ 1 & -1 & 1 & -1 & 1 \end{vmatrix}$$

c)
$$\begin{vmatrix} 1 & a & a^2 & a^3 \\ 1 & b & b^2 & b^3 \\ 1 & c & c^2 & c^3 \\ 1 & d+e & d^2+e^2 & d^3+e^3 \end{vmatrix}$$

**6.40.** Prove that

$$\begin{aligned}
D &= \begin{vmatrix} p^2 & p & 1 & qrs \\ q^2 & q & 1 & prs \\ r^2 & r & 1 & pqs \\ s^2 & s & 1 & pqr \end{vmatrix} \\
&= (p-q)(p-r)(p-s)(q-r)(q-s)(r-s).
\end{aligned}$$

**6.41.** Prove that the $n$-th element of the Fibonacci sequence defined by the formulas $a_1 = 1$, $a_2 = 2$, $a_n = a_{n-1} + a_{n-2}$ is equal to the following $n \times n$ tridiagonal determinant:

$$a_n = \begin{vmatrix}
1 & -1 & 0 & 0 & \ldots & 0 & 0 \\
1 & 1 & -1 & 0 & \ldots & 0 & 0 \\
0 & 1 & 1 & -1 & \ldots & 0 & 0 \\
0 & 0 & 1 & 1 & \ldots & 0 & 0 \\
\vdots & \vdots & & & \ddots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \ldots & 1 & -1 \\
0 & 0 & 0 & 0 & \ldots & 1 & 1
\end{vmatrix}$$

**6.42.** Let

$$P_n = \begin{vmatrix}
a_n & -1 & 0 & 0 & \ldots & 0 & 0 \\
1 & a_{n-1} & -1 & 0 & \ldots & 0 & 0 \\
0 & 1 & a_{n-2} & -1 & \ldots & 0 & 0 \\
0 & 0 & 1 & 1 & \ldots & 0 & 0 \\
\vdots & \vdots & & & \ddots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \ldots & a_2 & -1 \\
0 & 0 & 0 & 0 & \ldots & 1 & a_1
\end{vmatrix}$$

Show that

$$\frac{P_k}{P_{k-1}} = a_k + \cfrac{1}{a_{k-1} + \cfrac{1}{a_{k-2} + \cfrac{1}{\ddots + \cfrac{1}{a_2 + \cfrac{1}{a_1}}}}}.$$

### Miscellaneous exercises

**6.43.** Is it possible to make the determinant of an arbitrary $n \times n$ non-singular matrix become 0 by changing a single element?

**6.44. Skew expansion** Let's take the elements of one row of a determinant, and multiply each by the signed subdeterminant belonging to the element in the same column of another row, then form their sum. This is always 0. A similar statement is true for every pair of columns of the determinant. So for the $i$-th and $u$-th rows ($i \neq u$) and the $j$-th and $v$-th columns ($j \neq v$):

$$\sum_{k=1}^n a_{ik}A_{uk} = 0, \qquad \sum_{k=1}^n a_{kj}A_{kv} = 0.$$

**6.45.** Combine the expansion and skew expansion theorems into a single statement!

**6.46. Inverse of a matrix using expansion theorems** With the help of the expansion and skew expansion theorems (see the previous and 6.44 exercises), give a new proof for formula (6.3) concerning the inverse of a matrix!

**6.47.** Let $x_0$, $x_1$, $x_2$, $\ldots$, $x_n$ be $n + 1$ different real numbers, and $y_0$, $y_1$, $\ldots$, $y_n$ be the same number of arbitrary real numbers. Show that there exists exactly one polynomial $p$ of degree at most $n$, for which $p(x_i) = y_i$ for all $i = 0, \ldots, n$.

### Cramer's rule and inverse of a matrix

**6.48.** Solve the following systems of equations using Cramer's rule!

a)
$$\begin{alignedat}{9}
x &{}+{}& y && && {}={}& 1 \\
x &{}-{}& 2y && && {}={}& 4
\end{alignedat}$$

b)
$$\begin{alignedat}{9}
2x &{}-{}& y &{}-{}& z && {}={}& 2 \\
3x &{}+{}& 4y &{}-{}& 2z && {}={}& 11 \\
3x &{}-{}& 2y &{}+{}& 4z && {}={}& 11
\end{alignedat}$$

c)
$$\begin{alignedat}{9}
x &{}+{}& 2y &{}+{}& 4z && {}={}& 31 \\
5x &{}+{}& y &{}+{}& 2z && {}={}& 29 \\
3x &{}-{}& y &{}+{}& z && {}={}& 10
\end{alignedat}$$

d)
$$\begin{alignedat}{9}
x &{}+{}& y && && && {}={}& 1 \\
x &{}+{}& 2y &{}+{}& z && && {}={}& 2 \\
&& y &{}+{}& 2z &{}+{}& w & {}={}& 3 \\
&& && z &{}+{}& 2w & {}={}& 4
\end{alignedat}$$

**6.49.** Determine the element with the specified index of the inverse of the given matrices!

a)
$$\begin{bmatrix} 1 & 4 & 7 \\ 2 & 4 & 6 \\ 3 & 2 & 3 \end{bmatrix}, \ a_{23} = ?$$

b)
$$\begin{bmatrix} 1 & 2 & 5 & 7 \\ 1 & 3 & 6 & 6 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 1 \end{bmatrix} a_{24} = ?$$

**6.50.** Calculate the inverse of the given matrices by calculating the classical adjoint:

a)
$$\begin{bmatrix} 3 & 1 & 4 \\ -7 & 2 & 7 \\ 2 & 1 & 4 \end{bmatrix}$$

b)
$$\begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 2 \\ 3 & 2 & 1 \end{bmatrix}$$

c)
$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

d)
$$\begin{bmatrix} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 2 \\ 0 & 2 & 0 & 2 \\ 2 & 0 & 2 & 0 \end{bmatrix}$$

e)
$$\begin{bmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{bmatrix} \ (abc \neq 0)$$

f)
$$\begin{bmatrix} 1+\mathrm{i} & \mathrm{i} \\ \mathrm{i} & \mathrm{i} \end{bmatrix}$$

g)
$$\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 2 \\ 0 & 0 & 3 & 0 \\ 4 & 0 & 0 & 0 \end{bmatrix}$$

h)
$$\begin{bmatrix} 1 & 2 & 3 & 4 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**6.51.** Prove that for an arbitrary square matrix $\mathbf{A}\operatorname{adj}(\mathbf{A}) = \det(\mathbf{A})\mathbf{I}$.

### Determinant of matrices over finite fields

**6.52.** The known techniques for calculating determinants also work over finite fields. Calculate the determinants of the following matrices – interpreted over the given field!

a)
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{bmatrix}, \mathbb{F}_2, \mathbb{F}_3, \mathbb{F}_5$$

b)
$$\begin{bmatrix} 3 & 2 & 3 \\ 5 & 7 & 6 \\ 2 & 7 & 2 \end{bmatrix}, \mathbb{F}_{11}$$

**6.53.\* Determinant of a random bit matrix** Calculate the determinants of random matrices over $\mathbb{F}_2$! With what probability is the determinant of a matrix in $\mathbb{F}_2^{5\times 5}$ 0? Experiment with a computer, then answer the question exactly.

### Project: generalization of the cross product

**6.54.** It is a proven fact that it is not possible to define a binary vector operation on the vectors of the $n$-dimensional space ($n > 3$), which results in a vector of the same space and has the operational properties of the cross product. In this problem set, we process a generalization in a different direction, which keeps not the binary operational properties, but the orthogonality of the result to the vectors.

a) Formulate what we get as a result if we write down the formal relationship for the cross product

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ \mathbf{i} & \mathbf{j} & \mathbf{k} \end{vmatrix} = \begin{vmatrix} a_1 & b_1 & \mathbf{i} \\ a_2 & b_2 & \mathbf{j} \\ a_3 & b_3 & \mathbf{k} \end{vmatrix}$$

for $2 \times 2$ or $4 \times 4$ formal determinants, i.e. what do the expressions

$$\begin{vmatrix} a_1 & a_2 \\ \mathbf{i} & \mathbf{j} \end{vmatrix} \quad \text{and} \quad \begin{vmatrix} a_1 & a_2 & a_3 & a_4 \\ b_1 & b_2 & b_3 & b_4 \\ c_1 & c_2 & c_3 & c_4 \\ \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 & \mathbf{e}_4 \end{vmatrix}$$

yield?

b) Prove that the volume of the $(n - 1)$-dimensional parallelepiped spanned by the $n$-dimensional vectors

$$\begin{aligned}
\mathbf{a}_1 &= (a_{11}, a_{12}, \ldots, a_{1n}), \\
\mathbf{a}_2 &= (a_{21}, a_{22}, \ldots, a_{2n}), \\
&\vdots \\
\mathbf{a}_{n-1} &= (a_{n-1,1}, a_{n-1,2}, \ldots, a_{n-1,n})
\end{aligned}$$

equals the absolute value of the vector

$$\begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & & & \vdots \\
a_{n-1,1} & a_{n-1,2} & \ldots & a_{n-1,n} \\
\mathbf{e}_1 & \mathbf{e}_2 & \ldots & \mathbf{e}_n
\end{vmatrix}$$.

c) If, based on the above, we assign an $n$-th vector to $n - 1$ $n$-dimensional vectors with the generalized formula, then what can we say about the orientation of the resulting $n$ vectors?

**6.55.** Determine the vector that is orthogonal to the vectors $(1,1,1,1)$, $(1,2,2,2)$, $(1,2,3,3)$, its length is equal to the volume of the parallelepiped spanned by the three vectors, and taken as a fourth alongside these three vectors, it forms a right-handed system with them.

## Solutions

**6.1.** 1. False. 2. True. 3. False. 4. False. $|\mathbf{A}| \neq 0$ is equivalent to the fact that the system of equations $\mathbf{Ax} = \mathbf{b}$ cannot be solved uniquely, i.e., it either cannot be solved, or it has multiple solutions. 5. False.

**6.2.**

a) $-2$.

b) 0, because it has a zero row.

c) 0, because it has two identical rows.

d) 0, because the second row is a constant multiple of the first.

e) 1, because the determinant of a triangular matrix is the product of its main diagonal elements.

f) 6, because the determinant of a triangular matrix is the product of its main diagonal elements.

g) 0, because it has two identical columns.

**6.3.**

a) the second row is $-1$ times the first.

b) the third row is equal to the sum of the first two.

c) the third row is equal to the sum of the first two.

d) the second row is the arithmetic mean of the first and the third (alternatively: subtracting the second from the third row, then the first from the second, we get the vector $(1,1,1)$ both times, i.e., thus there are two identical rows).

e) the second row is the arithmetic mean of the first and the third.

f) the sum of the three row vectors is the zero vector.

g) $\sin(\xi + \delta) = \sin\xi\cos\delta + \cos\xi\sin\delta$, thus the third column is a linear combination of the first and the second column, i.e., the column vectors are linearly dependent, therefore the value of the determinant is 0.

h) The sum of the first and second columns is the third column (resp. the difference of the first and second rows is the third row), therefore the column vectors (resp. row vectors) are linearly dependent.

**6.5.** a) 25, b) 40, c) 1600, d) 1/5, e) 25, f) 1/625, g) 5/4, h) 20, i) 1.

**6.6.**

a)
$$\begin{vmatrix} 0 & 2 & 0 \\ 0 & 0 & 3 \\ 1 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 0 & 2 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 3 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{vmatrix} = 6$$

b) Swapping the 1st and 2nd, then the 1st and 3rd, and finally the 1st and 5th rows:

$$\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 0 & 0 & 2 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} =$$

$$\begin{vmatrix} 0 & 0 & 0 & 0 & 3 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 5 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 4 & 0 \\ 0 & 0 & 0 & 0 & 3 \end{vmatrix} = -120.$$

c) $-1, -1, 1$.

d) 24.

e) 24.

f) We swap the first row with the last, the second with the second to last, $\ldots$, so we performed $\lfloor \frac{n}{2}\rfloor$ row swaps, thus the value of the determinant is $(-1)^{\lfloor n/2\rfloor}$ (here $\lfloor . \rfloor$ denotes the greatest integer function) for some natural number $k$. We obtain the result in another form if we only swap adjacent rows: first we move the first row (by swapping adjacent rows) to the last position, then the second row of the original determinant to the second to last position, $\ldots$, i.e. we perform the swap of the following pairs of rows:

$$(1,2),\ (2,3),\ (3,4),\ldots,\ (n-1,n),$$
$$(1,2),\ (2,3),\ldots,\ (n-2,n-1),$$
$$\ldots$$
$$(1,2),\ (2,3),$$
$$(1,2).$$

This is a total of $(n-1) + (n-2) + \cdots + 2 + 1 = \frac{n(n-1)}{2}$ row swaps. With every row swap, the value of the determinant is multiplied by $(-1)$, thus the final result is $(-1)^{n(n-1)/2}$. Of course, the value of this power is also 1 if $n = 4k$ or $4k + 1$, and it is $-1$ if $n = 4k + 2$ or $4k + 3$. (By the same reasoning, it can be shown that if a determinant has only 0s above its anti-diagonal, then the value of the determinant is the product of the anti-diagonal elements multiplied by $(-1)^{\lfloor n/2\rfloor}$, or in another form, by $(-1)^{n(n-1)/2}$.)

g) see the previous point.

**6.7.**

a) We subtract the first row from the second and from the third, then the second from the third:

$$\begin{vmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \\ 1 & 3 & 6 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 1 & 3 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{vmatrix} = 1.$$

b) Subtracting the first row from the other rows, then subtracting twice the second row from the third, we get that

$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 3 & 6 & 9 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ 0 & 3 & 6 & 9 \end{vmatrix} = 0.$$

c)
$$\begin{aligned}
&\begin{vmatrix} 3 & 8 & 6 & 3 \\ 1 & 2 & 0 & 1 \\ 1 & 1 & -1 & 2 \\ 2 & 5 & 1 & 5 \end{vmatrix} = -\begin{vmatrix} 1 & 2 & 0 & 1 \\ 3 & 8 & 6 & 3 \\ 1 & 1 & -1 & 2 \\ 2 & 5 & 1 & 5 \end{vmatrix} = \\
&-\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 2 & 6 & 0 \\ 0 & -1 & -1 & 1 \\ 0 & 1 & 1 & 3 \end{vmatrix} = -2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & -1 & -1 & 1 \\ 0 & 1 & 1 & 3 \end{vmatrix} = \\
&-2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & -2 & 3 & 0 \end{vmatrix} = -2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 4 \end{vmatrix} = -16.
\end{aligned}$$

Let us detail the steps of the solution:

Step 1: Swap the first and second rows so that the first element of the first row is 1, and thus we do not have to calculate with fractions. The value of the determinant changes by a factor of $(-1)$.

Step 2: Add $(-3)$-, $(-1)$- resp. $(-2)$-times the first row to the second, third resp. fourth row.

Step 3: So that the second element of the second row is 1, factor out 2 from the second row.

Step 4: Add the second row resp. its $(-1)$-multiple to the third resp. fourth row.

Step 5: Add the third row to the fourth. The determinant value is $-16$.

d) 144.

**6.8.** In this matrix, any two rows are in an inversion with each other, so if the number of rows is $n$, the number of pairs of rows is $n(n-1)/2$. According to this, the determinant of the matrix is $(-1)^{n(n-1)/2}$. It can also be obtained from this matrix with $\lfloor \frac{n}{2}\rfloor$ row swaps, thus its determinant can also be expressed in the form $(-1)^{\lfloor \frac{n}{2}\rfloor}$, see also problem 6.6).

**6.9.**

a) For $n = 1$, the value of the determinant is $1 + x_1y_1$, for $n = 2$ it is $x_1y_1 + x_2y_2 - x_1y_2 - x_2y_1$. If $n \geq 3$, then the determinant's value is 0. We prove this by first decomposing the determinant into the sum of two determinants, then we show for both that their value is 0. We subtract the row consisting of all 1s of the first determinant from all the other rows, and the value of the determinant thus obtained is indeed 0, since if $x_2 = 0$, then the second row consists of all 0s, and if $x_2 \neq 0$, then $x_3/x_2$ times its second row equals the third row. The value of the second determinant is also 0, because if $x_1 = 0$, then the first row consists of all 0s, and if $x_1 \neq 0$, then subtracting $x_i/x_1$ times the first row from the $i$-th row, we get a determinant in which starting from the second row every row consists of 1s, therefore the determinant has two identical rows.

$$\begin{aligned}
&\begin{vmatrix}
1 & 1 & \ldots & 1 \\
1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n
\end{vmatrix} \\
&+ \begin{vmatrix}
x_1y_1 & x_1y_2 & \ldots & x_1y_n \\
1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n
\end{vmatrix} \\
&= \begin{vmatrix}
1 & 1 & \ldots & 1 \\
x_2y_1 & x_2y_2 & \ldots & x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
x_ny_1 & x_ny_2 & \ldots & x_ny_n
\end{vmatrix} \\
&+ \begin{vmatrix}
x_1y_1 & x_1y_2 & \ldots & x_1y_n \\
1 & 1 & \ldots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & 1 & \ldots & 1
\end{vmatrix} \\
&= 0.
\end{aligned}$$

b) $(1 - a^n)^{n-1}$. Let us subtract $a^{n-1}$ times the first row from the second row, $a^{n-2}$ times from the third row, $\ldots$, $a$ times from the last row: this way there will only be zeros below the main diagonal.

c) $(a + (n-1)b)(a-b)^{n-1}$. First solution: add every row to the first, factor out the common value $a + (n-1)b$, then subtract $b$ times this row from all rows. Alternative solution: starting with the last row, subtract the one above it from each row, then starting from the right, add each column to the preceding one.

**6.10.** The result is 48. Solution in Sage:

```
g = graphs.PetersenGraph()
G = matrix(g)
G.det()
```

**6.13.** The matrix $\mathbf{A}$ can be represented in the form $\mathbf{PLU}$, where $\mathbf{P}$ is a permutation matrix, $\mathbf{L}$ is a lower, and $\mathbf{U}$ is an upper triangular matrix. $\mathbf{L}$ and $\mathbf{U}$ are triangular matrices, so their determinant is equal to the determinant of their transpose, since the main diagonal elements remain in place during transposition. The determinant of the permutation matrix $\mathbf{P}$ is 1 or $-1$, and its transpose is equal to its inverse, thus $\det(\mathbf{I}) = \det(\mathbf{PP}^{\mathsf{T}}) = \det(\mathbf{P})\det(\mathbf{P}^{\mathsf{T}}) = 1$, i.e. the determinants of $\mathbf{P}$ and $\mathbf{P}^{-1}$ are simultaneously 1 or $-1$, therefore they are equal. Finally, comparing $\det(\mathbf{A}) = \det(\mathbf{PLU}) = \det(\mathbf{P})\det(\mathbf{L})\det(\mathbf{U})$, and $\det(\mathbf{A}^{\mathsf{T}}) = \det((\mathbf{PLU})^{\mathsf{T}}) = \det(\mathbf{U}^{\mathsf{T}}\mathbf{L}^{\mathsf{T}}\mathbf{P}^{\mathsf{T}}) = \det(\mathbf{U})\det(\mathbf{L})\det(\mathbf{P})$ proves the statement.

**6.14.** $\det(\mathbf{E}_{S_i + cS_j}) = 1$, $\det(\mathbf{E}_{S_i \leftrightarrow S_j}) = -1$, $\det(\mathbf{E}_{cS_i}) = c$.

**6.15.**

$$\begin{aligned}
&\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix} \overset{S_4 - S_3}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 0 & 1 & 4 & 10 \end{vmatrix} \\
&\overset{S_3 - S_2}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 0 & 1 & 3 & 6 \\ 0 & 1 & 4 & 10 \end{vmatrix} \overset{S_2 - S_1}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 1 & 3 & 6 \\ 0 & 1 & 4 & 10 \end{vmatrix} \\
&\overset{\substack{S_4 - S_3 \\ S_3 - S_2}}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 1 & 4 \end{vmatrix} \overset{S_4 - S_3}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{vmatrix} = 1.
\end{aligned}$$

See also problem 6.16!

**6.16.** Using the fact that $\binom{n}{k} - \binom{n-1}{k} = \binom{n-1}{k-1}$, performing the recommended row and then column operations, then repeating it with the increasingly smaller bottom left subdeterminant, we get that

$$\begin{aligned}
D &= \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
1 & \binom{1}{0} & \binom{2}{0} & \ldots & \binom{n-1}{0} \\
1 & \binom{1}{1} & \binom{2}{1} & \ldots & \binom{n}{1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \binom{n-1}{n-2} & \binom{n}{n-2} & \ldots & \binom{2n-3}{n-2}
\end{vmatrix} \\
&= \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
0 & \binom{0}{0} & \binom{1}{0} & \ldots & \binom{n-2}{0} \\
0 & \binom{1}{1} & \binom{2}{1} & \ldots & \binom{n-1}{1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \binom{n-2}{n-2} & \binom{n-1}{n-2} & \ldots & \binom{2n-4}{n-2}
\end{vmatrix} \\
&= \cdots = \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
0 & 1 & 0 & \ldots & 0 \\
0 & 0 & 1 & \ldots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \ldots & \binom{0}{0}
\end{vmatrix} = 1.
\end{aligned}$$

**6.17.** Subtracting the first row from the second and the third, we get two constant rows, which are constant multiples of each other, therefore the determinant's value is 0.

**6.18.** Subtract the first column from the second and the third. The third column obtained this way is twice the second, therefore the determinant's value is 0.

**6.20.** First solution: subtract the first column from the others, thereby eliminating the quadratic term from them, then subtract the appropriate scalar multiple of the second column from the third and fourth columns to eliminate their linear term, finally subtract a constant multiple of the third column from the fourth so that only 0s remain there.

Second solution: It is enough to show that the determinant's columns are linearly dependent. The equation $a^2x + (a+1)^2y + (a+2)^2z + (a+3)^2w = 0$ leads to the homogeneous system of equations

$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}+{}& w &{}={}& 0 \\
&& 2y &{}+{}& 4z &{}+{}& 6w &{}={}& 0 \\
&& y && &{}+{}& 4z &{}+{}& 9w &{}={}& 0
\end{alignedat}$$

which certainly has a nontrivial solution, since there are only 3 equations given for 4 unknowns. (Solving it is no longer necessary to prove the existence of a solution, but for example $(x, y, z, w) = (1, -3, 3, -1)$ is a solution.)

**6.22.** Since we saw in proposition 4.24 about the change of coordinates in a change of basis that the coordinate forms are connected by the formula $[\mathbf{v}_i]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}_i]_{\mathcal{B}}$, therefore for the matrices formed from the coordinate forms of the $\mathbf{v}$ vectors as column vectors $\mathbf{V}_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}\mathbf{V}_{\mathcal{B}}$, thus for their determinants $|\mathbf{V}_{\mathcal{C}}| = |\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}||\mathbf{V}_{\mathcal{B}}|$.

**6.23.** On the one hand $\det(\mathbf{A}) = \det(\mathbf{A}^{\mathsf{T}})$, on the other hand since $\mathbf{A}^{\mathsf{T}} = -\mathbf{A}$, therefore $\det(\mathbf{A}^{\mathsf{T}}) = (-1)^n \det(\mathbf{A})$, i.e. $\det(\mathbf{A}) = -\det(\mathbf{A})$, from which $\det(\mathbf{A}) = 0$.

**6.24.** $|\mathbf{A}^2| = |\mathbf{A}|^2 = |\mathbf{A}||\mathbf{A}| = |\mathbf{A}||\mathbf{A}^{\mathsf{T}}| = |\mathbf{AA}^{\mathsf{T}}|$.

**6.25.** We calculate all three determinants as follows. Let $\mathbf{A}$ be the matrix belonging to the determinant. Let us consider the determinant $|\mathbf{AA}^{\mathsf{T}}|$. This is easy to calculate (since there are only zeros outside the main diagonal), and its square root will be the determinant's value. Based on this, the values of the three determinants are: $a^2 + b^2$, $(a^2 + b^2 + c^2 + d^2)^2$, $(a^2 + b^2 + c^2 + d^2 + e^2 + f^2 + g^2 + h^2)^4$.

**6.26.** Also using the multiplication rule for determinants:

$$\begin{aligned}
(x_1^2 + x_2^2)(y_1^2 + y_2^2) &= \begin{vmatrix} x_1 & x_2 \\ -x_2 & x_1 \end{vmatrix}\begin{vmatrix} y_1 & y_2 \\ -y_2 & y_1 \end{vmatrix} \\
&= \begin{vmatrix} x_1y_1 - x_2y_2 & x_1y_2 + x_2y_1 \\ -x_2y_1 - x_1y_2 & -x_2y_2 + x_1y_1 \end{vmatrix} \\
&= (x_1y_1 - x_2y_2)^2 + (x_1y_2 + x_2y_1)^2.
\end{aligned}$$

The analogous relationships regarding the sum of four and eight squares can be proven similarly. (Hurwitz proved that if an analogous relationship to the one in the problem holds for the sum of $n$ square numbers, then $n = 1, 2, 4$ or 8.)

**6.27.** Since a linear transformation takes a subspace to a subspace, and a shifted subspace to a shifted subspace, the image of this rectangle will be a (possibly degenerate) parallelogram. Therefore it is enough to calculate only the image of the 4 vertices of the rectangle. This can be calculated with a single matrix multiplication:

$$\begin{aligned}
&\begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} p & p+x & p & p+x \\ q & q & q+y & q+y \end{bmatrix} = \\
&\begin{bmatrix} ap+bq & ap+ax+bq & ap+bq+by & ap+ax+bq+by \\ cp+dq & cp+cx+dq & cp+dq+dy & cp+cx+dq+dy \end{bmatrix}
\end{aligned}$$

From this it can be read that the side vectors of the parallelogram obtained as the image of the rectangle are $(ax, cx)$ and $(by, dy)$, and thus its area is

$$|(ax)(dy) - (cx)(by)| = |ad - bc|xy.$$

Therefore, according to this, the area of the rectangle's image is independent of the position of the rectangle, and is always $|ad - bc|$ times the area of the rectangle.

**6.29.** 1. True. 2. True. 3. True. 4. True. 5. False. The determinant of the sum of matrices is generally not equal to the sum of their determinants (see problem 6.30). 6. False. The value of a minor can have any sign, the signed minor (cofactor) is obtained from it by multiplying it by $-1$ in case of an odd $i + j$. 7. False. 8. False. It is a continuous function of the matrix elements only at those places where its determinant is not 0.

**6.30.**

a)
$$\begin{aligned}
&\begin{vmatrix} 0 & 1 & 0 \\ 2 & 3 & 4 \\ 5 & 0 & 6 \end{vmatrix} = \begin{vmatrix} 0 & 1 & 0 \\ 0 & 0 & 4 \\ 5 & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 1 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 6 \end{vmatrix} = 8
\end{aligned}$$

b)
$$\begin{aligned}
&\begin{vmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 2 & 0 \\ 0 & 2 & 1 & 0 \\ 2 & 0 & 0 & 1 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 0 & 2 \\ 0 & 0 & 2 & 0 \\ 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \end{vmatrix} + \\
&\begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 2 & 0 & 0 & 0 \end{vmatrix} = 1 + 16 - 4 - 4 = 9
\end{aligned}$$

c)
$$\begin{aligned}
&\begin{vmatrix} 1 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 & 0 \\ 2 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 2 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 \\ 0 & 0 & 0 & 2 & 0 \\ 2 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 2 \end{vmatrix}
\end{aligned}$$

**6.31.** Every element of the first row is even, every element of the first column is divisible by 3, every element of the second column is divisible by 5, therefore every snake is divisible by $2 \cdot 3 \cdot 5 = 30$, thus their sum is too.

**6.32.** Only a single snake consists entirely of odd numbers, so when decomposing into the sum of snakes, only its determinant is odd, the others are even, their sum is therefore odd, meaning it cannot be 0.

**6.33.** We specify which element in which row is chosen into the snake. The 12 snakes: 1243, 1324, 1432, 2134, 2341, 2413, 3142, 3214, 3421, 4123, 4231, 4312. Based on these, the 12 determinants – denoting the elements of the snake with a square:

*The 12 snakes, arranged in a $5 \times 5$ grid, in which the selected elements are denoted by black squares.*

**6.34.** Add 100 times the first column and 10 times the second column to the third column. Thus, the given numbers, divisible by 9, appear in the last column. If we expand the determinant by this column, then every addend will be divisible by 9, therefore the determinant as well.

**6.35.** We must construct a determinant that has a minor of zero value. For example,

$$\begin{vmatrix} 1 & 2 & 1 \\ 1 & 9 & 2 \\ 1 & 1 & 1 \end{vmatrix}$$

the determinant's value is 1, but the minor belonging to 9 has a value of 0, thus in the cofactor expansion along the second row or column, this number is multiplied by 0, meaning it does not affect the determinant's value.

**6.37.** Expanding along the first and third rows:

$$\begin{aligned}
\det(\mathbf{A}) =\ & (-1)^{1+3+1+2}\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix}\begin{vmatrix} 4 & 0 \\ 2 & 0 \end{vmatrix} + (-1)^{1+3+1+3}\begin{vmatrix} 1 & 3 \\ 0 & 2 \end{vmatrix}\begin{vmatrix} 3 & 0 \\ 0 & 0 \end{vmatrix} \\
&+ (-1)^{1+3+1+4}\begin{vmatrix} 1 & 4 \\ 0 & 3 \end{vmatrix}\begin{vmatrix} 3 & 4 \\ 0 & 2 \end{vmatrix} + (-1)^{1+3+2+3}\begin{vmatrix} 0 & 3 \\ 1 & 2 \end{vmatrix}\begin{vmatrix} 2 & 0 \\ 1 & 0 \end{vmatrix} \\
&+ (-1)^{1+3+2+4}\begin{vmatrix} 0 & 4 \\ 1 & 3 \end{vmatrix}\begin{vmatrix} 2 & 3 \\ 1 & 2 \end{vmatrix} + (-1)^{1+3+3+4}\begin{vmatrix} 3 & 4 \\ 2 & 3 \end{vmatrix}\begin{vmatrix} 2 & 3 \\ 1 & 0 \end{vmatrix} \\
=\ & -1\cdot 0 + 2\cdot 0 - 3\cdot 6 - (-3)\cdot 0 + (-4)\cdot 0 - 1\cdot(-3) = -15
\end{aligned}$$

**6.38.**

*a)* $-6 \cdot 6 = -36$, because according to the theorem on the determinant of block matrices, the product of the top left $2 \times 2$ and the bottom right $3 \times 3$ determinants gives the result.

*b)* 24, because the values of the top left $1 \times 1$ and bottom right $4 \times 4$ determinants are 1 and 24, respectively, and their product is 24. We arrive at an alternative solution if we expand the determinant along the first column, and the only minor to be calculated along its first row...

**6.39.**
*a)* The determinant is a Vandermonde determinant formed from the numbers $2$, $-1$, $-2$, $1$, thus its value is: $(-1-2)(-2-2)(1-2)(-2-(-1))(1-(-1))(1-(-2)) = 72$.

*b)* Vandermonde determinant; its value is $-2880$.

*c)* The determinant decomposes into the sum of two Vandermonde determinants:

$$
\begin{vmatrix}
1 & a & a^2 & a^3 \\
1 & b & b^2 & b^3 \\
1 & c & c^2 & c^3 \\
1 & d & d^2 & d^3
\end{vmatrix}
+
\begin{vmatrix}
1 & a & a^2 & a^3 \\
1 & b & b^2 & b^3 \\
1 & c & c^2 & c^3 \\
1 & e & e^2 & e^3
\end{vmatrix}
$$

$$
= (b-a)(c-a)(c-b)
$$

$$
\times \left[ (d-a)(d-b)(d-c) + (e-a)(e-b)(e-c) \right].
$$

**6.40.** If $pqrs \neq 0$, then let's multiply the first row by $p$, the second by $q$, the third by $r$, the fourth by $s$, then factor out $pqrs$ from the fourth column; this way we get a Vandermonde determinant:

$$
D = \frac{pqrs}{pqrs}
\begin{vmatrix}
p^3 & p^2 & p & 1 \\
q^3 & q^2 & q & 1 \\
r^3 & r^2 & r & 1 \\
s^3 & s^2 & s & 1
\end{vmatrix}
$$

$$
= (q-p)(r-p)(s-p)(r-q)(s-q)(s-r).
$$

If $pqrs = 0$, for example $s = 0$, then expanding the original determinant along the fourth column, we get

$$
D = pqr
\begin{vmatrix}
p^2 & p & 1 \\
q^2 & q & 1 \\
r^2 & r & 1
\end{vmatrix}.
$$

From these, after a short transformation, it can be seen that the relation holds in this case as well.

**6.41.** $a_1 = \det[1] = 1$, $a_2 = \left[\begin{smallmatrix} 1 & -1 \\ 1 & 1 \end{smallmatrix}\right] = 2$, expanding the $(n \times n)$ determinant along its first row we get $a_n = a_{n-1} + a_{n-2}$.

**6.43.** Yes. Let's consider the expansion of the determinant along the first row! If the cofactor corresponding to each element were 0, then the matrix would be singular, thus the cofactor corresponding to some element is not 0. Let e.g. $A_{1j} \neq 0$. Then by collecting all other terms of the expansion we get $\det \mathbf{A} = a_{1j} A_{1j} + c$. Since $A_{1j} \neq 0$, the equation $a_{1j} A_{1j} + c = 0$ can be solved for $a_{1j}$, so changing this element makes the determinant 0.

**6.44.** If we multiply the elements of the $i$-th row by the cofactors of the $u$-th row, we are not using the elements of the $u$-th row, so we can freely change them. Let's copy the $i$-th row to the place of the $u$-th row, so for every $k$, $a_{uk} = a_{ik}$. Then on the one hand $\sum_{k=1}^n a_{ik} A_{uk} = \sum_{k=1}^n a_{uk} A_{uk}$, which is the expansion of this determinant along its $u$-th row, on the other hand this determinant has two identical rows, so its determinant is 0. The statement regarding columns can be reduced to this by transposition.

**6.45.** The formulas of the two theorems can be unified into a common formula. For rows:

$$
\sum_{k=1}^n a_{ik} A_{uk} =
\begin{cases}
\det \mathbf{A}, & \text{if } i = u, \\
0, & \text{if } i \neq u,
\end{cases}
\tag{6.5}
$$

for columns:

$$
\sum_{k=1}^n a_{kj} A_{kv} =
\begin{cases}
\det \mathbf{A}, & \text{if } j = v, \\
0, & \text{if } j \neq v.
\end{cases}
\tag{6.6}
$$

**6.46.** From the two expansion theorems it follows that

$$
[a_{ij}][A_{ij}]^{\mathsf{T}} = \det(\mathbf{A}) \mathbf{I},
$$

since the scalar product of the $i$-th row of $[a_{ij}]$ and the $u$-th column of $[A_{ij}]^{\mathsf{T}}$, that is, the $u$-th row of $[A_{ij}]$ is $\det(\mathbf{A})$ according to formula (6.5), if $i = u$, i.e., in the main diagonal of the product, and 0 otherwise. From this, both formulas follow.

**6.50.**
*a)* The transpose of the matrix of cofactors:

$$
\left[
\begin{array}{ccc}
\begin{vmatrix} 2 & 7 \\ 1 & 4 \end{vmatrix} & -\begin{vmatrix} -7 & 7 \\ 1 & 4 \end{vmatrix} & \begin{vmatrix} -7 & 2 \\ 1 & 1 \end{vmatrix} \\
-\begin{vmatrix} 1 & 4 \\ 1 & 4 \end{vmatrix} & \begin{vmatrix} 3 & 4 \\ 2 & 4 \end{vmatrix} & -\begin{vmatrix} 3 & 1 \\ 2 & 1 \end{vmatrix} \\
\begin{vmatrix} 1 & 4 \\ 2 & 7 \end{vmatrix} & -\begin{vmatrix} 3 & 4 \\ -7 & 7 \end{vmatrix} & \begin{vmatrix} 3 & 1 \\ -7 & 2 \end{vmatrix}
\end{array}
\right]^{\mathsf{T}}
=
\begin{bmatrix}
1 & 0 & -1 \\
42 & 4 & -49 \\
-11 & -1 & 13
\end{bmatrix}
$$

Since the determinant of the matrix is 1, its inverse is equal to the previously calculated matrix of cofactors.

*b)* The transpose of the matrix of cofactors:

$$
\left[
\begin{array}{ccc}
\begin{vmatrix} 0 & 2 \\ -2 & 1 \end{vmatrix} & -\begin{vmatrix} 2 & 2 \\ 3 & 1 \end{vmatrix} & \begin{vmatrix} 2 & 0 \\ 3 & -2 \end{vmatrix} \\
-\begin{vmatrix} -2 & 3 \\ -2 & 1 \end{vmatrix} & \begin{vmatrix} 0 & 3 \\ 3 & 1 \end{vmatrix} & -\begin{vmatrix} 0 & -2 \\ 3 & -2 \end{vmatrix} \\
\begin{vmatrix} -2 & 3 \\ 2 & 1 \end{vmatrix} & -\begin{vmatrix} 0 & 3 \\ 1 & 3 \end{vmatrix} & \begin{vmatrix} 0 & -2 \\ 1 & 2 \end{vmatrix}
\end{array}
\right]^{\mathsf{T}}
=
\begin{bmatrix}
-4 & 4 & 4 \\
4 & -8 & 4 \\
4 & 4 & -4
\end{bmatrix}.
$$

Since the determinant of the matrix is 16, the inverse matrix is

$$
\frac{1}{4}
\begin{bmatrix}
-1 & 1 & 1 \\
1 & -2 & 1 \\
1 & 1 & -1
\end{bmatrix}.
$$

*c)* Since $\det(\mathbf{A}) = 1$, therefore $\mathbf{A}^{-1}$ is equal to the transpose of the matrix of cofactors. We do not need to calculate all 16 of its elements, because the inverse of an upper triangular matrix is an upper triangular matrix. Similarly, it can be easily seen that the value of the cofactors corresponding to the elements in the main diagonal is 1. So we only need to calculate the cofactors of the elements below the main diagonal. As an example, we show one:

$$
A_{32} = (-1)^{3+2}
\begin{bmatrix}
1 & 1 & 1 \\
0 & 2 & 3 \\
0 & 0 & 1
\end{bmatrix}
= -2.
$$

Calculating the others similarly, we get that

$$
\mathbf{A}^{-1} =
\begin{bmatrix}
1 & 0 & 0 & 0 \\
-1 & 1 & 0 & 0 \\
1 & -2 & 1 & 0 \\
-1 & 3 & -3 & 1
\end{bmatrix}^{\mathsf{T}}
=
\begin{bmatrix}
1 & -1 & 1 & -1 \\
0 & 1 & -2 & 3 \\
0 & 0 & 1 & -3 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

What could be the generalization of this problem, and what is the answer?

*d)* From the matrix only one non-zero diagonal (snake) can be selected, thus its determinant can be easily calculated: $\det \mathbf{B} = 16$. To calculate the inverse, we do not need to calculate many cofactors, because most of them are obviously 0. During the calculation, we should also take into account that $\mathbf{B}$ is symmetric, so on the one hand, out of the symmetrically located elements we only need to calculate one, on the other hand, because of the symmetry, transposition at the end is unnecessary.

$$
\mathbf{A}^{-1} = \frac{1}{16}
\begin{bmatrix}
0 & 8 & 0 & -8 \\
8 & 0 & 0 & 0 \\
0 & 0 & 0 & 8 \\
-8 & 0 & 8 & 0
\end{bmatrix}
=
\begin{bmatrix}
0 & \frac{1}{2} & 0 & -\frac{1}{2} \\
\frac{1}{2} & 0 & 0 & 0 \\
0 & 0 & 0 & \frac{1}{2} \\
-\frac{1}{2} & 0 & \frac{1}{2} & 0
\end{bmatrix}.
$$

*e)* The inverse

$$
\frac{1}{abc}
\begin{bmatrix}
bc & 0 & 0 \\
0 & ac & 0 \\
0 & 0 & ab
\end{bmatrix}^{\mathsf{T}}
=
\begin{bmatrix}
\frac{1}{a} & 0 & 0 \\
0 & \frac{1}{b} & 0 \\
0 & 0 & \frac{1}{c}
\end{bmatrix},
$$

if $abc \neq 0$. In the $abc = 0$ case the matrix is not invertible.

*f)*

$$
\begin{bmatrix}
1 & -1 \\
-1 & 1-i
\end{bmatrix}.
$$

*g)* The inverse

$$
\begin{bmatrix}
0 & 0 & 0 & 1/4 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1/3 & 0 \\
0 & 1/2 & 0 & 0
\end{bmatrix}
$$

*h)*

$$
\begin{bmatrix}
1 & -2 & 1 & 0 \\
0 & 1 & -2 & 1 \\
0 & 0 & 1 & -2 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

**6.52.** *a)* The three results: 1, 2, 4. Since in the case of all three fields we need to perform the same calculations, only the result will be a remainder modulo a different modulus, it is simplest to calculate over the integers, and consider its remainders. Indeed, over the integers the determinant is $-1$, and $-1 \bmod 2 = 1$, $-1 \bmod 3 = 2$, $-1 \bmod 5 = 4$.

*b)* 5. It is simplest to add 2 times the first row to the second, and 3 times the first row to the third row.

**6.53.** Sage code for printing a random matrix over $\mathbb{F}_2$:

```
sage: random_matrix(GF(2), 5)
[1 0 0 1 1]
[1 1 1 0 1]
[1 1 1 0 0]
[1 0 0 0 0]
[0 0 1 0 0]
sage: _.det()
1
```

How many matrices are there in $\mathbb{F}_2^{5 \times 5}$ whose determinant is not 0? Its first row can be any vector, except the $\mathbf{0}$-vector, so for this row there are $2^5 - 1$ possibilities. The second row cannot be this vector and the $\mathbf{0}$-vector, this is $2^5 - 2$ possibilities. The third vector cannot be in the subspace spanned by the previous two vectors, which, together with the $\mathbf{0}$-vector, has $2^2 = 4$ elements, so there are $2^5 - 2^2$ possibilities to choose this vector. Continuing similarly, we get that the number of all independent $5$-tuples of vectors – that is, the number of non-zero determinants – is $(2^5 - 2^0)(2^5 - 2^1)(2^5 - 2^2)(2^5 - 2^3)(2^5 - 2^4)$. If we divide this by the number of all matrices in $\mathbb{F}_2^{5 \times 5}$, we get $0.2980$, thus the determinant will be 0 with a probability of $0.7020$.

**6.54.**
*a)* A vector that is orthogonal to the given vectors and forms a right-handed system with it/them.

*b)* Hint: use the fact that the volume of an $n-1$-dimensional parallelepiped $P$ is equal to the volume of the $n$-dimensional parallelepiped $Q$, which we get from $P$ by adding a unit vector as the $n$-th vector to the vectors spanning $P$, which is orthogonal to the rest.

*c)* Positive. For this, we exactly needed to write the basis vectors not in the first, but in the last row or column.

**6.55.** According to the previous exercise, the requested vector can be obtained as follows:

$$
\begin{vmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 2 & 2 \\
1 & 2 & 3 & 3 \\
\mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 & \mathbf{e}_4
\end{vmatrix}
= \mathbf{e}_4 - \mathbf{e}_3
$$

that is, the fourth vector is $(0, 0, -1, 1)$.

# 7. Matrix mappings and their geometry

This chapter discusses the derivation of linear mappings from matrix operations, and then establishes its general concept mainly with intuitive, geometric motivation. Orthogonality, distance, projection, rotation, and their generalizations will be the basic concepts.

## Matrix mapping, linear mapping

> *To every matrix $\mathbf{A}$ belongs a mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$. These mappings exactly coincide with the linear combination preserving mappings, which we call linear mappings. Linear mapping is one of the most important concepts not only of linear algebra, but of all mathematics.*

### The concept of matrix mapping

By a mapping belonging to a matrix, or simply a *matrix mapping*, we mean the mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$, where $\mathbf{A}$ is a matrix. To an $m \times n$ matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ thus belongs a mapping $\mathbb{R}^n \to \mathbb{R}^m$, because if $\mathbf{x} \in \mathbb{R}^n$ and $\mathbf{y} = \mathbf{A}\mathbf{x}$, then $\mathbf{y} \in \mathbb{R}^m$.

We use bold letters for matrices and italicized letters for mappings. In the following, we follow the convention that a matrix mapping belonging to a matrix is denoted by the italic version of the same letter, for example the matrix mapping belonging to the matrix $\mathbf{A}$ is denoted by $A$, that is

$$
A : \mathbf{x} \mapsto A(\mathbf{x}) = \mathbf{A}\mathbf{x}.
$$

Besides $A(\mathbf{x})$, the notation $A\mathbf{x}$ is also in use.

The range (image) of the mapping $A$ is denoted by $\operatorname{Im}(A)$, which is a subspace of $\mathbb{R}^m$ (let's think about why?). This is also customary to call the *image space*, as this is the image of the space $\mathbb{R}^n$. This coincides with the column space of the matrix $\mathbf{A}$, that is, with $\mathcal{O}(\mathbf{A})$. The subspace of those vectors which $A$ maps to the zero vector is called the *null space* or *kernel* of the mapping $A$. The word *kernel* is also used for null space. We denote it by $\operatorname{Ker}(A)$. This coincides with the null space of its corresponding matrix $\mathbf{A}$. Thus

$$
\operatorname{Im}(A) = \mathcal{O}(\mathbf{A}), \qquad \operatorname{Ker}(A) = \mathcal{N}(\mathbf{A}).
$$

> *The abbreviation Im comes from the word* image *, Ker comes from the word* kernel *.*

**Example 7.1 (Matrix mapping defined by vector product).** *Let $\mathbf{a} = (a_1, a_2, a_3)$ be a given vector in $\mathbb{R}^3$. Let $A$ be the transformation which assigns the vector $\mathbf{a} \times \mathbf{x}$ to an arbitrary vector $\mathbf{x}$ of the space. So*

$$
A : \mathbb{R}^3 \to \mathbb{R}^3 : \mathbf{x} \mapsto \mathbf{a} \times \mathbf{x}.
$$

*Show that the function $A$ is a matrix mapping, that is, there exists a matrix $\mathbf{A}$ such that $A(\mathbf{x}) = \mathbf{A}\mathbf{x}$.*

**Solution.** The vector product $\mathbf{a} \times \mathbf{x}$ in coordinate form:

$$
\mathbf{y} = \mathbf{a} \times \mathbf{x} =
\begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix}
\times
\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}
=
\begin{bmatrix} a_2 x_3 - a_3 x_2 \\ a_3 x_1 - a_1 x_3 \\ a_1 x_2 - a_2 x_1 \end{bmatrix}.
$$

From the result it is immediately visible that this transformation is a matrix mapping, since every coordinate of $\mathbf{y}$ is a linear expression of the coordinates of $\mathbf{x}$. We organize the product according to the coordinates of $\mathbf{x}$, from which the matrix of the transformation can be immediately read, which in the following will be denoted by $[\mathbf{a}]_\times$. With its help, the matrix product form of the transformation can be written:

$$
\mathbf{a} \times \mathbf{x} =
\begin{bmatrix}
& -a_3 x_2 + a_2 x_3 \\
a_3 x_1 & - a_1 x_3 \\
-a_2 x_1 + a_1 x_2 &
\end{bmatrix}
=
\begin{bmatrix}
0 & -a_3 & a_2 \\
a_3 & 0 & -a_1 \\
-a_2 & a_1 & 0
\end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.
$$

So

$$
[\mathbf{a}]_\times =
\begin{bmatrix}
0 & -a_3 & a_2 \\
a_3 & 0 & -a_1 \\
-a_2 & a_1 & 0
\end{bmatrix}.
\tag{7.1}
$$

The result of this problem is particularly important in the examination of the transformations of the 3-dimensional space, thus e.g. in the physical/engineering investigation of material transformations. $\square$

### Operations between matrix mappings

In the following we examine what is the connection between matrix operations, and operations between matrix mappings corresponding to the matrices.

**Theorem 7.2 (Basic operations of matrix mappings).** *Let $\mathbf{A}$, $\mathbf{B}$ and $\mathbf{C}$ be three $m \times n$ matrices, let $A$, $B$ and $C$ be the three matrix mappings belonging to them and let $c$ be a scalar. Then*

*a) $\mathbf{A} + \mathbf{B} = \mathbf{C}$ is true if and only if $A + B = C$, and*

*b) $c\mathbf{A} = \mathbf{C}$ is true if and only if $cA = C$.*

*If the type of $\mathbf{X}$, $\mathbf{Y}$ and $\mathbf{Z}$ is respectively $m \times k$, $k \times n$, and $m \times n$, and $X$, $Y$ and $Z$ are the three matrix mappings belonging to them, then*

*c) $\mathbf{X}\mathbf{Y} = \mathbf{Z}$ is true if and only if $X \circ Y = Z$, that is, the multiplication of matrices corresponds to the composition of functions.*

The function $f : \mathbb{R}^n \to \mathbb{R}^n$ is the inverse of the function $g : \mathbb{R}^n \to \mathbb{R}^n$, if for every $\mathbf{x} \in \mathbb{R}^n$ $f(g(\mathbf{x})) = \mathbf{x}$ and $g(f(\mathbf{x})) = \mathbf{x}$, that is, if their compositions, the functions $f \circ g$ and $g \circ f$ are equal to the identity mapping.

**Theorem 7.3 (Inverse matrix mappings).** *Let $A$ and $B$ be the matrix mappings belonging to the $n \times n$ matrices $\mathbf{A}$ and $\mathbf{B}$. Then the inverse of matrix $\mathbf{A}$ is matrix $\mathbf{B}$ if and only if the inverse of mapping $A$ is mapping $B$.*

We leave the proof of the above two theorems to the Reader (see Exercises 7.11 and 7.12)!

### Properties of matrix mappings

Matrix mappings preserve linear combination, map the zero vector to the zero vector, and a subspace to a subspace.

**Theorem 7.4 (Basic properties of matrix mappings).** *Let $A : \mathbb{R}^n \to \mathbb{R}^m$ be an arbitrary matrix mapping, $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$, $c, d \in \mathbb{R}$.*

*a) $A(c\mathbf{x} + d\mathbf{y}) = cA(\mathbf{x}) + dA(\mathbf{y})$, that is, $A$ preserves the linear combination.*

*b) $A$ is a homogeneous and additive mapping, that is*

$$
\begin{aligned}
A(c\mathbf{x}) &= cA(\mathbf{x}), && \text{(the mapping is homogeneous), and} \\
A(\mathbf{x} + \mathbf{y}) &= A(\mathbf{x}) + A(\mathbf{y}), && \text{(the mapping is additive).}
\end{aligned}
$$

*c) $A\mathbf{0} = \mathbf{0}$.*

*d) The image of an arbitrary subspace is a subspace.*

*e) The image of an arbitrary affine subspace is an affine subspace.*

**Proof.** *a)* For any vectors $\mathbf{x}$ and $\mathbf{y}$ and reals $c, d \in \mathbb{R}$

$$
A(c\mathbf{x} + d\mathbf{y}) = \mathbf{A}(c\mathbf{x} + d\mathbf{y}) = c\mathbf{A}\mathbf{x} + d\mathbf{A}\mathbf{y} = cA(\mathbf{x}) + dA(\mathbf{y}).
$$

*b)* The previous equality proves homogeneity for $d = 0$, and additivity for $c = d = 1$. *c)* is true, because for any vector $\mathbf{x}$, $A\mathbf{0} = A(0\mathbf{x}) = 0A(\mathbf{x}) = \mathbf{0}$. *d)* follows from the fact that if $\mathbf{b}_1, \ldots, \mathbf{b}_k$ is a basis of a subspace $\mathcal{U}$, then the image of all their linear combinations, that is, the vectors of the subspace, is

$$
A(c_1 \mathbf{b}_1 + \ldots + c_k \mathbf{b}_k) = c_1 A(\mathbf{b}_1) + \ldots + c_k A(\mathbf{b}_k).
$$

It is clear that these vectors give all vectors of the subspace spanned by the vectors $A\mathbf{b}_1, \ldots, A\mathbf{b}_k$, thus $A(\mathcal{U})$ is a subspace. Similarly in *e)*, if $\mathbf{u} \in \mathbb{R}^n$ is an arbitrary vector and $\mathcal{U}$ is the above subspace, then

$$
\begin{aligned}
A(\mathbf{u} + \mathcal{U}) &= A(\mathbf{u} + c_1 \mathbf{b}_1 + \ldots + c_k \mathbf{b}_k) \\
&= A(\mathbf{u}) + c_1 A(\mathbf{b}_1) + \ldots + c_k A(\mathbf{b}_k) \\
&= A(\mathbf{u}) + A(\mathcal{U}),
\end{aligned}
$$

which is a shifted subspace, i.e., an affine subspace. $\square$

### Linear mapping

The basic properties of matrix mappings lead to the concept of linear mapping.

**Definition 7.5 (Linear mapping).** *Let $H_1$ and $H_2$ both be sets on whose elements an associative addition and a "scalar multiplication" operation are defined. We say that a mapping $A : H_1 \to H_2$ is* linear *if it is homogeneous and additive, i.e., if for any elements $\mathbf{x}, \mathbf{y} \in H_1$ and scalar $c$*

$$
\begin{aligned}
A(c\mathbf{x}) &= cA(\mathbf{x}) && \text{(A is homogeneous,)} \\
A(\mathbf{x} + \mathbf{y}) &= A\mathbf{x} + A\mathbf{y} && \text{(A is additive.)}
\end{aligned}
$$

*If $H_1 = H_2$, linear mappings are also called* linear transformations*.*

We will detail later what algebraic properties are worth assuming about the scalars, as well as the elements of $H_1$ and $H_2$. For now, we only show a few examples of linear mappings.

**Example 7.6 (Differentiation and integration as linear mappings).** *Let $H_1$ be the set of functions of a single real variable that are differentiable at every real point, and let $H_2$ be the set of real functions of a single real variable. It is clear that $H_1$ and $H_2$ are both sets on whose elements the operations of addition and scalar multiplication are defined. Differentiation, i.e., the mapping $D : H_1 \to H_2 : f \mapsto D(f) = f'$, is linear. Formulate a similar statement for the integral as well.*

**Solution.** For any scalar $c \in \mathbb{R}$ and functions $f, g \in H_1$

$$
\begin{aligned}
D(cf) &= (cf)' = cf' = cD(f), \text{ and} \\
D(f + g) &= (f + g)' = f' + g' = D(f) + D(g).
\end{aligned}
$$

Similar relations hold for integrals; for example, let $H_1$ be the set of Riemann-integrable functions on the interval $[0, 1]$, and let $H_2 = \mathbb{R}$. Then the mapping $f \mapsto \int_0^1 f$ is linear, because for any scalar $c \in \mathbb{R}$ and any functions $f, g \in H_1$

$$
\int_0^1 cf = c \int_0^1 f, \text{ and } \int_0^1 (f + g) = \int_0^1 f + \int_0^1 g. \qquad \square
$$

**Proposition 7.7 (Rotation, reflection, and projection in the plane).** *The rotation of plane vectors around a fixed point $O$, their reflection across a line, and their orthogonal projection onto a line are linear mappings.*

**Proof.** We omit precise proofs and only illustrate the facts. The rotation of plane vectors around a point is a linear mapping, because it is easily seen that the rotated image of the $c$-multiple of a vector ($c \in \mathbb{R}$) equals the $c$-multiple of the rotated image of the vector, and that the rotated image of the sum of two vectors equals the sum of the rotated images of the vectors (see Figure 7.1).

Similarly, it is easy to see that reflection across a line maps the $c$-multiple of a vector to the $c$-multiple of the vector's mirror image, and the sum of two vectors to the sum of the mirror images of the two vectors (see Figure 7.2).

Finally, it can be shown in the same way that orthogonal projection onto a line maps the $c$-multiple of a vector to the $c$-multiple of its projection, and the sum of two vectors to the sum of the projections of the two vectors (see Figure 7.3). $\square$

*Figure 7.1. Rotation around a point is a linear mapping.*

*Figure 7.2. Reflection across a line is a linear mapping.*

*Figure 7.3. Orthogonal projection onto a line is a linear mapping.*

### Linear mappings from $\mathbb{R}^n$ to $\mathbb{R}^m$

In the remainder of this chapter, we deal only with linear mappings $\mathbb{R}^n \to \mathbb{R}^m$, where the scalars are real numbers. We will show that these are matrix mappings.

**Theorem 7.8 (Equivalent definitions of linear mapping).** *For an arbitrary mapping $A : \mathbb{R}^n \to \mathbb{R}^m$, the following statements are equivalent:*

*1. $A$ is linear, i.e., homogeneous and additive.*

*2. For any $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ and $c, d \in \mathbb{R}$*

$$
A(c\mathbf{x} + d\mathbf{y}) = cA(\mathbf{x}) + dA(\mathbf{y})
$$

*3. For any $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ and $c \in \mathbb{R}$*

$$
A(c\mathbf{x} + \mathbf{y}) = cA(\mathbf{x}) + A(\mathbf{y})
$$

*4. It "preserves" linear combination, i.e., for any vectors $\mathbf{x}_1, \ldots, \mathbf{x}_k \in \mathbb{R}^n$ and scalars $c_1, c_2, \ldots, c_k \in \mathbb{R}$*

$$
A(c_1 \mathbf{x}_1 + \cdots + c_k \mathbf{x}_k) = c_1 A\mathbf{x}_1 + \cdots + c_k A\mathbf{x}_k.
$$

We leave the proof to the Reader (see Exercise 7.13).

**Theorem 7.9 (Linear mappings $\mathbb{R}^n \to \mathbb{R}^m$ are matrix mappings).** *Let $A : \mathbb{R}^n \to \mathbb{R}^m$ be an arbitrary function. $A$ is a linear mapping if and only if there exists an $m \times n$ matrix $\mathbf{A}$ such that the function $A$ coincides with the mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$. Then*

$$
\mathbf{A} = [A\mathbf{e}_1 \vert A\mathbf{e}_2 \vert \ldots \vert A\mathbf{e}_n],
$$

*where $\mathbf{e}_i$ is the $i$-th standard unit vector ($i = 1, 2, \ldots, n$).*

**Proof.** Every matrix mapping is linear, which proves one half of the statement. To prove the other half, consider the standard basis of $\mathbb{R}^n$ and the matrix formed from the vectors $A\mathbf{e}_i$

$$
\mathbf{A} = [A\mathbf{e}_1 \vert A\mathbf{e}_2 \vert \ldots \vert A\mathbf{e}_n]
\tag{7.2}
$$

and let $\mathbf{x} \in \mathbb{R}^n$ be an arbitrary vector. If $A$ is a linear mapping, i.e., it preserves linear combination, then

$$
\begin{aligned}
A\mathbf{x} &= A(x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2 + \ldots + x_n \mathbf{e}_n) \\
&= x_1 A\mathbf{e}_1 + x_2 A\mathbf{e}_2 + \ldots + x_n A\mathbf{e}_n \\
&= \begin{bmatrix} A\mathbf{e}_1 & A\mathbf{e}_2 & \ldots & A\mathbf{e}_n \end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \\
&= \mathbf{A}\mathbf{x}
\end{aligned}
$$

Thus there indeed exists a matrix $\mathbf{A}$ such that $A\mathbf{x} = \mathbf{A}\mathbf{x}$. Furthermore, this is the only such matrix, because for any basis vector $\mathbf{e}_i$ and any matrix $\mathbf{A}$, $\mathbf{A}\mathbf{e}_i = \mathbf{A}_{*i}$, so the column vector $\mathbf{A}_{*i}$ can only be $A\mathbf{e}_i$. $\square$

**Example 7.10.** *Show that among the mappings*

$$
\begin{aligned}
A &: \mathbb{R}^2 \to \mathbb{R}^3; (x, y) \mapsto (x - y, 2x + y, -x + 1) \text{ and} \\
L &: \mathbb{R}^2 \to \mathbb{R}^3; (x, y) \mapsto (x - y, 2x + y, -x)
\end{aligned}
$$

*$A$ is not a linear mapping, but $L$ is. Write down the matrix for the latter!*

**Solution.** The mapping $A$ is not linear, because as a consequence of Theorem 7.4 it should be $A\mathbf{0} = \mathbf{0}$, but $A : (0, 0) \mapsto (0, 0, 1)$.

Let's transform the vector obtained as the function value:

$$
L\begin{bmatrix} x \\ y \end{bmatrix} =
\begin{bmatrix} x - y \\ 2x + y \\ -x \end{bmatrix}
= x \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}
+ y \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}
=
\begin{bmatrix} 1 & -1 \\ 2 & 1 \\ -1 & 0 \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix},
$$

which proves that $L$ is a matrix mapping, and its matrix is

$$
\mathbf{L} =
\begin{bmatrix} 1 & -1 \\ 2 & 1 \\ -1 & 0 \end{bmatrix}.
$$

Matrix mappings are linear mappings, so $L$ is as well. $\square$

> *As Example 7.6 shows, we can speak of linear mappings even in cases where the mapping has no matrix, i.e., linear mapping is a more general concept.*

> *There is a difference between linear mapping and matrix mapping even for functions $\mathbb{R}^n \to \mathbb{R}^m$. The linear mapping is independent of the basis; it is just the function itself, specifying which vector maps to which vector. A matrix mapping always refers to some basis. To a linear mapping, there belongs a matrix mapping in every basis, the matrix of which depends on the basis.*

> *Let us find the linear transformations $\mathbb{R} \to \mathbb{R}$. Here, the elements of $\mathbb{R}$ are 1-dimensional vectors (identifiable with numbers). In this space, the vector (number) $e = 1$ is the basis. According to the previous theorem, the matrix of a linear transformation $L : \mathbb{R} \to \mathbb{R}$ is $[Le] = [L(1)]$, which is a number; let us denote it by $c := L(1)$. Thus $L(x) = L(1x) = L(x1) = xc = cx$, i.e., linear transformations $\mathbb{R} \to \mathbb{R}$ are identical to the functions $x \mapsto cx$, where $c$ is an arbitrary constant. The graph of such mappings is a straight line (other than vertical) passing through the origin. (Linear mappings $\mathbb{R} \to \mathbb{R}$ are therefore not identical to linear functions $\mathbb{R} \to \mathbb{R}$, whose general form is $f(x) = cx + d$, where $c, d \in \mathbb{R}$.)*

### Visualizing the effect of a matrix mapping

Understanding the effect of multiplication by a matrix can be aided, even in a specific concrete application, by having a visually displayable image of it.

A vector and its image under a matrix mapping can be easily depicted—whether with free vectors, position vectors, or the endpoints of the position vectors. Figure 7.4, for example, illustrates the effect of the rotation matrix in these three ways. (In the case of free vectors, the center of rotation can also be chosen freely along with the free vectors; in the case of position vectors, the center of rotation is the origin!)

For $\mathbb{R}^2 \to \mathbb{R}^2$ mappings, for the simplest visualization it is enough to just draw the image of the unit square, as shown in Figure 7.5. The image is always a parallelogram (possibly degenerate), whose orientation must also be indicated somehow. In the figure, the different coloring of the sides accomplishes this. The area and orientation of the parallelogram can be read from the matrix determinant. The image of the unit square grid is a parallelogram grid. With its help, constructing the image of an arbitrary vector is simple, since the linear mapping preserves the linear combination (see Figure 7.5).

*Figure 7.4. Visualizations of vector rotation according to different representations of the vector: a) free vectors, b) position vectors, c) points.*

*Figure 7.5. The effect of the matrix $\mathbf{A} = \left[\begin{smallmatrix} 1 & 1 \\ 1 & 2 \end{smallmatrix}\right]$ on the unit square grid and on the vector $\mathbf{x} = (1, 2)$. The endpoint of the vector $\mathbf{A}\mathbf{x}$ on the parallelogram grid is 1 step in the direction of the $x$-axis's image and 2 steps in the direction of the $y$-axis's image.*

**Example 7.11 (Representing a matrix mapping with the image of the unit square grid).** *Depict the image of the unit square and the unit square grid, as well as the vector $(1, 2)$ under the mappings given by the matrices*

$$
\mathbf{A} = \begin{bmatrix} \frac{5}{4} & \frac{3}{4} \\ \frac{3}{4} & \frac{5}{4} \end{bmatrix}, \quad
\mathbf{B} = \begin{bmatrix} \frac{3}{4} & \frac{5}{4} \\ \frac{5}{4} & \frac{3}{4} \end{bmatrix}, \quad
\mathbf{C} = \begin{bmatrix} -\frac{5}{4} & \frac{3}{4} \\ -\frac{3}{4} & \frac{5}{4} \end{bmatrix}, \quad
\mathbf{D} = \begin{bmatrix} -\frac{3}{4} & \frac{5}{4} \\ -\frac{5}{4} & \frac{3}{4} \end{bmatrix}
$$

*.*

*Figure 7.6. The image of the unit square and the unit square grid for the four given matrices, and the image of the vector $(1, 2)$.*

Another representation possibility is obtained by constructing the image of the unit vectors. Since the matrix mapping is homogeneous, i.e., it assigns the $c$-multiple of the vector's image to the $c$-multiple of a vector, it is enough to construct the image of a single vector from each direction—for example, the unit vector. To make the picture easy to read, instead of position vectors, we only consider the points representing them, and instead of all points of the unit circle, only a few (e.g., 50–100). Because the image of the circle under a linear mapping is always an ellipse (possibly degenerate), to visualize the mapping it is enough to connect a selected point on the unit circle with its image so that we can roughly "see" what the image of any vector in the plane is. The resulting figure says a lot about the mapping. This is shown in Figure 7.7, where we separately drew the unit vector $\mathbf{x}$ corresponding to the $-65^\circ$ direction and its image $\mathbf{A}\mathbf{x}$, and also showed how, for instance, the image of $2\mathbf{x}$ can be obtained.

Figure 7.8 shows the unit circle diagram of the matrix mappings from the previous example.

*Figure 7.7. Illustrates the effect of the matrix $\mathbf{A} = \left[\begin{smallmatrix} 5/4 & 3/4 \\ 3/4 & 5/4 \end{smallmatrix}\right]$ by connecting some points of the unit circle with their images. In the figure, a unit vector $\mathbf{x}$ and its image $\mathbf{A}\mathbf{x}$, as well as the vector $2\mathbf{x}$ and its image, the vector $\mathbf{A}(2\mathbf{x}) = 2\mathbf{A}\mathbf{x}$, are highlighted.*

*Figure 7.8. Unit circle diagram of four mappings. The matrices are: $\mathbf{A} = \left[\begin{smallmatrix} 5/4 & 3/4 \\ 3/4 & 5/4 \end{smallmatrix}\right]$, $\mathbf{B} = \left[\begin{smallmatrix} 3/4 & 5/4 \\ 5/4 & 3/4 \end{smallmatrix}\right]$, $\mathbf{C} = \left[\begin{smallmatrix} -5/4 & 3/4 \\ -3/4 & 5/4 \end{smallmatrix}\right]$, $\mathbf{D} = \left[\begin{smallmatrix} -3/4 & 5/4 \\ -5/4 & 3/4 \end{smallmatrix}\right]$.*

To visualize a general mapping $\mathbb{R}^n \to \mathbb{R}^m$, we use the leaf diagram. Here we can primarily visualize the image space and the null space, as shown in Figure 7.9.

*Figure 7.9. Leaf diagram of a matrix mapping $A : \mathbb{R}^n \to \mathbb{R}^m, \mathbf{x} \mapsto \mathbf{A}\mathbf{x}$. In the figure, three subspaces are highlighted with coloring – the domain ($\mathbb{R}^n$), the range ($\operatorname{Im}(A) = \mathcal{O}(\mathbf{A})$), and the null space ($\operatorname{Ker}(A) = \mathcal{N}(\mathbf{A})$).*

### Trace of a matrix

One of the most important linear mappings defined on the vector space of square matrices is the trace of a matrix.

**Definition 7.12 (Trace of a matrix).** *The sum of the elements in the main diagonal of a square matrix is called the* trace of the matrix*. The trace of the matrix $\mathbf{A}$ is denoted by* trace $\mathbf{A}$ *or* tr $\mathbf{A}$*.*

For example

$$
\operatorname{trace}
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}
= 5, \quad
\operatorname{trace}(\mathbf{I}_n) = n, \quad
\operatorname{trace}([\mathbf{a}]_\times) = 0.
$$

**Proposition 7.13 (The trace is a linear mapping).** *The trace is additive and homogeneous, i.e., for arbitrary matrices $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ and scalar $c \in \mathbb{R}$*

$$
\operatorname{trace}(\mathbf{A} + \mathbf{B}) = \operatorname{trace} \mathbf{A} + \operatorname{trace} \mathbf{B}, \quad
\operatorname{trace}(c\mathbf{A}) = c \operatorname{trace} \mathbf{A}.
$$

> *The proof is self-evident. It also justifies that for arbitrary constants $c, d \in \mathbb{R}$*
>
> $$\operatorname{trace}(c\mathbf{A} + d\mathbf{B}) = c \operatorname{trace} \mathbf{A} + d \operatorname{trace} \mathbf{B}.$$

> *Similarly, it is obvious that $\operatorname{trace} \mathbf{A}^{\mathsf{T}} = \operatorname{trace} \mathbf{A}$.*

**Proposition 7.14 (Properties of the trace).** *Let $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ and $\mathbf{C} \in \mathbb{R}^{m \times n}$. Then*

$$
\operatorname{trace}(\mathbf{A}\mathbf{B}) = \operatorname{trace}(\mathbf{B}\mathbf{A}),
\tag{7.3}
$$

$$
\operatorname{trace}(\mathbf{C}^{\mathsf{T}}\mathbf{C}) = \sum_{i=1}^m \sum_{j=1}^n c_{ij}^2.
\tag{7.4}
$$

**Proof.** Since

$$
\begin{aligned}
\operatorname{trace}(\mathbf{A}\mathbf{B}) &= \sum_{i=1}^n \mathbf{A}_{i*} \mathbf{B}_{*i} = \sum_{i=1}^n \sum_{j=1}^n a_{ij} b_{ji} \\
&= \sum_{j=1}^n \sum_{i=1}^n a_{ij} b_{ji} = \sum_{j=1}^n \sum_{i=1}^n a_{ij} b_{ji} = \sum_{j=1}^n \mathbf{B}_{j*} \mathbf{A}_{*j} \\
&= \operatorname{trace}(\mathbf{B}\mathbf{A}).
\end{aligned}
$$

The second equality can be proven similarly. $\square$

> *From the above relations, it follows that for any two square matrices $\operatorname{trace}(\mathbf{A}\mathbf{B} - \mathbf{B}\mathbf{A}) = 0$.*

> *The square of the length of the vector $\mathbf{x}$ is $\mathbf{x} \cdot \mathbf{x} = \mathbf{x}^{\mathsf{T}} \mathbf{x} = \sum_i x_i^2$. We can consider formula (7.4) as a generalization of this. Indeed, we will use this expression when generalizing the concept of length and dot product.*

> *Formula (7.3) cannot be generalized to arbitrary multi-term products, only to those obtained by cyclic rearrangement. Although $\operatorname{trace}(\mathbf{A}\mathbf{B}\mathbf{C}) = \operatorname{trace}(\mathbf{B}\mathbf{C}\mathbf{A}) = \operatorname{trace}(\mathbf{C}\mathbf{A}\mathbf{B})$, but $\operatorname{trace}(\mathbf{A}\mathbf{B}\mathbf{C}) \neq \operatorname{trace}(\mathbf{B}\mathbf{A}\mathbf{C})$ (see Exercise 7.1).*

## Exercises

**7.1.** Give an example of matrices for which $\operatorname{trace}(\mathbf{ABC}) \ne \operatorname{trace}(\mathbf{BAC})$.

## Matrix of 2- and 3-dimensional geometric transformations

*In this section, we will construct the matrices of a few geometrically well-describable linear transformations $\mathbb{R}^2 \to \mathbb{R}^2$ and $\mathbb{R}^3 \to \mathbb{R}^3$.*

### Rotation in the plane

In the proof of Theorem 7.9, we showed that the matrix of the matrix mapping associated with the linear mapping $A : \mathbb{R}^n \to \mathbb{R}^m$ is

$$\mathbf{A} = [A\mathbf{e}_1 | A\mathbf{e}_2 | \dots | A\mathbf{e}_n].$$

We will use this in the following.

**Proposition 7.15 (The rotation matrix).** *The matrix of the mapping that rotates the vectors of the plane around a point by an angle $\alpha$ is*

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}.$$

**Proof.** According to Proposition 7.7, rotation is a linear mapping, so it has a matrix, which has the form $[A\mathbf{i}\ A\mathbf{j}]$, where $\mathbf{i}$ and $\mathbf{j}$ denote the elements of the standard basis of $\mathbb{R}^2$. These vectors are illustrated in Figure 7.10.

The vector $A\mathbf{i}$ is equal to the rotated image of $\mathbf{i}$, whose coordinates we know: $A\mathbf{i} = \left[\begin{smallmatrix} \cos\alpha \\ \sin\alpha \end{smallmatrix}\right]$. The rotated image of vector $\mathbf{j}$ by angle $\alpha$ is equal to the rotated image of vector $A\mathbf{i}$ by angle $\pi/2$, i.e., $A\mathbf{j} = \left[\begin{smallmatrix} -\sin\alpha \\ \cos\alpha \end{smallmatrix}\right]$. Thus the matrix belonging to $A$ is

$$\mathbf{A} = \begin{bmatrix} A\mathbf{i} & A\mathbf{j} \end{bmatrix} = \begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}.$$

So the rotated image of a vector $\mathbf{x}$ by angle $\alpha$ is $\mathbf{Ax} = \left[\begin{smallmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{smallmatrix}\right]\mathbf{x}$. $\square$

> *Figure 7.10. The rotated images of vectors $\mathbf{i}$ and $\mathbf{j}$ by angle $\alpha$*

**Example 7.16 (Rotation around an arbitrary point).** *Determine the coordinates of the point obtained by rotating the point $(4, 3)$ around $(2, 1)$ by $\pi/3$ radians!*

**Solution.** We translate the center of rotation to the origin, so the point $(4, 3)$ is moved to the point $(4, 3) - (2, 1) = (2, 2)$. Let us rotate this point, or rather the position vector pointing to it, by $\pi/3$ radians, i.e., $60^\circ$. This can be obtained by multiplication with the rotation matrix:

$$\begin{bmatrix} \cos\frac{\pi}{3} & -\sin\frac{\pi}{3} \\ \sin\frac{\pi}{3} & \cos\frac{\pi}{3} \end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 - \sqrt{3} \\ 1 + \sqrt{3} \end{bmatrix}$$

We translate this point with the vector $(2, 1)$ so that we get the rotated image around the point $(2, 1)$ instead of the origin:

$$\begin{bmatrix} 1 - \sqrt{3} \\ 1 + \sqrt{3} \end{bmatrix} + \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 - \sqrt{3} \\ 2 + \sqrt{3} \end{bmatrix}$$

$\square$

**Example 7.17 (Rotation around a coordinate axis in space).** *Write down the matrix of rotation by angle $\alpha$ around the coordinate axes.*

**Solution.** Let's first consider rotation around the $z$-axis. Then the vectors $\mathbf{i}$ and $\mathbf{j}$ transform as in the rotation of the plane, while vector $\mathbf{k}$ stays in place, so the basis vectors transform like this:

$$\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \mapsto \begin{bmatrix} \cos\alpha \\ \sin\alpha \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} \mapsto \begin{bmatrix} -\sin\alpha \\ \cos\alpha \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} \mapsto \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}.$$

Thus the matrix of rotation around the $z$-axis is:

$$\begin{bmatrix} \cos\alpha & -\sin\alpha & 0 \\ \sin\alpha & \cos\alpha & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

We obtain the matrix of rotation around the $x$- and $y$-axis similarly:

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix}, \qquad \begin{bmatrix} \cos\alpha & 0 & \sin\alpha \\ 0 & 1 & 0 \\ -\sin\alpha & 0 & \cos\alpha \end{bmatrix}.$$

This latter matrix might seem to have a sign error, but it does not, if here too the direction of rotation is positive when viewed from the direction of the rotation axis, i.e., we are rotating $\mathbf{k}$ into $\mathbf{i}$, and not the other way around. $\square$

**Example 7.18 (Inverse of the rotation matrix).** *Determine the inverse of the matrix that rotates the plane by angle $\alpha$!*

**Solution.** First we establish that the rotation matrix is invertible, since its determinant is not 0, as $\left|\begin{smallmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{smallmatrix}\right| = \cos^2\alpha + \sin^2\alpha = 1$. One possible solution is simply to use the formula given for $2 \times 2$ matrices in Theorem 5.13:

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}^{-1} = \begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}.$$

Another solution: according to Proposition **??**, two matrices are inverses of each other if and only if their associated linear mappings are also inverses of each other. The inverse of the rotation by angle $\alpha$ as a mapping is the rotation by angle $-\alpha$, so their matrices are also inverses of each other. According to this

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}^{-1} = \begin{bmatrix} \cos(-\alpha) & -\sin(-\alpha) \\ \sin(-\alpha) & \cos(-\alpha) \end{bmatrix} = \begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}. \square$$

### Rotation around a line in space[^p263_1]

The matrix of rotation around a line in space can be given using the matrix mapping defined by the cross product (Example 7.1).

**Theorem 7.19 (Rotation around a line – Rodrigues' rotation formula).** *If $\mathbf{e} \in \mathbb{R}^3$ is a unit vector, then the rotation by angle $\alpha$ around the line of $\mathbf{e}$ takes an arbitrary vector $\mathbf{x}$ to the vector*

$$\mathbf{x}\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha + \mathbf{e}(\mathbf{e} \cdot \mathbf{x})(1 - \cos\alpha) \tag{7.5}$$

*. The matrix of this mapping is*

$$\begin{aligned} \mathbf{R} &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)[\mathbf{e}]_\times^2 \\ &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T} - \mathbf{I}) \end{aligned} \tag{7.6}$$

**Proof.** If $\mathbf{x}$ is parallel to $\mathbf{e}$, then its rotated image is itself, and indeed, in this case $(\mathbf{e} \times \mathbf{x}) = \mathbf{0}$ and $\mathbf{e}(\mathbf{e} \cdot \mathbf{x}) = \mathbf{x}$, so formula (7.5) yields $\mathbf{x}$.

From now on, let $\mathbf{x}$ be a vector not parallel to $\mathbf{e}$. Denote the orthogonal projection of $\mathbf{x}$ onto $\mathbf{e}$ by $\mathbf{x_e}$, i.e., let

$$\mathbf{x_e} = (\mathbf{e} \cdot \mathbf{x})\mathbf{e}.$$

Furthermore, denote the orthogonal projection of vector $\mathbf{x}$ onto the plane perpendicular to $\mathbf{e}$ by $\mathbf{x}_1$, i.e.,

$$\mathbf{x}_1 = \mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e}.$$

Finally, let $\mathbf{x}_2 = \mathbf{e} \times \mathbf{x}$. It is clear that $\mathbf{x}_1 \perp \mathbf{x}_2$. The lengths of these two vectors:

$$\begin{aligned} |\mathbf{x}_1| &= |\mathbf{x}|\sin\gamma, \\ |\mathbf{x}_2| &= |\mathbf{e}||\mathbf{x}|\sin\gamma = |\mathbf{x}|\sin\gamma, \end{aligned}$$

thus $|\mathbf{x}_1| = |\mathbf{x}_2|$. If $R$ denotes the rotating mapping, then

$$\begin{aligned} R\mathbf{x}_1 &= \mathbf{x}_1 \cos\alpha + \mathbf{x}_2 \sin\alpha \\ &= (\mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e})\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha. \end{aligned}$$

Since $R\mathbf{x_e} = \mathbf{x_e}$, and $\mathbf{x} = \mathbf{x_e} + \mathbf{x}_1$, therefore

$$\begin{aligned} R\mathbf{x} &= R\mathbf{x_e} + R\mathbf{x}_1 \\ &= (\mathbf{e} \cdot \mathbf{x})\mathbf{e} + (\mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e})\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha \\ &= \mathbf{x}\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha + \mathbf{e}(\mathbf{e} \cdot \mathbf{x})(1 - \cos\alpha). \end{aligned}$$

With this, we have justified formula (7.5). The mapping can easily be rewritten into matrix product form:

$$\cos\alpha \mathbf{I}\mathbf{x} + [\mathbf{e}]_\times \mathbf{x}\sin\alpha + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x},$$

> *Figure 7. The rotation of vector $\mathbf{x}$ into $R\mathbf{x}$ around the line $\mathbf{e}$; its projection $\mathbf{x}_1$ turns into $R\mathbf{x}_1$ in the plane perpendicular to $\mathbf{e}$.*

thus the rotation matrix $\mathbf{R}$ is

$$\mathbf{R} = \cos\alpha \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T}).$$

By simple calculation it can be shown that $\mathbf{e}\mathbf{e}^\mathsf{T} - \mathbf{I} = [\mathbf{e}]_\times^2$ (see Exercise **??**), from which the formulas in (7.6) immediately follow. $\square$

**Example 7.20 (Rotation matrix).** *Write down the matrix of the mapping that rotates by angle $\alpha$ around the line of the vector $(2, 0, 1)$, where $\cos\alpha = \frac{2}{3}$. Determine the rotated image of the vector $(3, 2, -1)$! Would we get a different result if we had to rotate by angle $\alpha$ around the line of the vector $(-2, 0, -1)$?*

**Solution.** With the unit vector $\mathbf{e} = \frac{1}{\sqrt{5}}(2, 0, 1)$

$$[\mathbf{e}]_\times = \frac{1}{\sqrt{5}}\begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & -2 \\ 0 & 2 & 0 \end{bmatrix}, \quad [\mathbf{e}]_\times^2 = \frac{1}{5}\begin{bmatrix} -1 & 0 & 2 \\ 0 & -5 & 0 \\ 2 & 0 & -4 \end{bmatrix}.$$

Thus after a short calculation the rotation matrix is

$$\begin{aligned} \mathbf{R} &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)[\mathbf{e}]_\times^2 \\ &= \begin{bmatrix} 14/15 & -1/3 & 2/15 \\ 1/3 & 2/3 & -2/3 \\ 2/15 & 2/3 & 11/15 \end{bmatrix} = \frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix} \end{aligned}$$

and $\mathbf{R} \cdot (3, 2, -1) = (2, 3, 1)$.

With rotation around the vector $(-2, 0, -1)$ we would get a different result, since the direction of rotation also depends on the direction of the vector, and because it changed to its opposite, the direction of rotation will also be the opposite. $\square$

> *Rotation around a line in space can also be calculated with quaternions (see page **??**). Another possibility is to reduce rotation around a line to rotation around a coordinate axis (see Exercise **??**).*

### Orthogonal projection

Orthogonality is an important concept in both theoretical mathematics and applications.

**Proposition 7.21 (Matrix of orthogonal projection onto a line).** *The matrix of the mapping that orthogonally projects vectors of the plane or space onto a line with direction vector $\mathbf{b}$ is*

$$\mathbf{P} = \frac{1}{\mathbf{b}^\mathsf{T}\mathbf{b}}\mathbf{b}\mathbf{b}^\mathsf{T}. \tag{7.7}$$

*Specifically, the form of this matrix is*

$$\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T}, \tag{7.8}$$

*if the direction vector of the line is the unit vector $\mathbf{e}$.*

**Proof.** According to Proposition 7.7, orthogonal projection is a linear mapping, so it has a matrix. According to Theorem 1.23, if $\mathbf{x}$ is an arbitrary vector and $\mathbf{e}$ is a unit vector, then the orthogonal projection of $\mathbf{x}$ onto the line of $\mathbf{e}$ is

$$\operatorname{proj}_\mathbf{e} \mathbf{x} = (\mathbf{x} \cdot \mathbf{e}) \cdot \mathbf{e}.$$

Rewriting this with matrix multiplication:

$$(\mathbf{x} \cdot \mathbf{e})\mathbf{e} = \mathbf{e}(\mathbf{e} \cdot \mathbf{x}) = \mathbf{e}(\mathbf{e}^\mathsf{T}\mathbf{x}) = (\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x},$$

thus

$$\operatorname{proj}_\mathbf{e} \mathbf{x} = (\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x}.$$

From this it can be read that the matrix of orthogonal projection onto a line in the direction of unit vector $\mathbf{e}$ is


$$\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T}.$$

If $\mathbf{b}$ is an arbitrary non-zero vector, then with the notation $\mathbf{e} = \mathbf{b}/|\mathbf{b}|$ we have $\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T} = \mathbf{b}\mathbf{b}^\mathsf{T}/|\mathbf{b}|^2$, which proves the theorem by substituting $|\mathbf{b}|^2 = \mathbf{b}^\mathsf{T}\mathbf{b}$. $\square$

> *It follows from the theorem that the matrix of the linear mapping that orthogonally projects the vectors of the plane onto a line making an angle $\alpha$ with the $x$-axis is*

$$\mathbf{P} = \begin{bmatrix} \cos\alpha \\ \sin\alpha \end{bmatrix} \begin{bmatrix} \cos\alpha & \sin\alpha \end{bmatrix} = \begin{bmatrix} \cos^2\alpha & \sin\alpha\cos\alpha \\ \sin\alpha\cos\alpha & \sin^2\alpha \end{bmatrix}, \tag{7.9}$$

since then $\mathbf{e} = (\cos\alpha, \sin\alpha)$.

**Proposition 7.22 (Matrix of orthogonal projection onto a plane).** *The matrix of the mapping that orthogonally projects the vectors of space onto a plane with normal vector $\mathbf{n}$ is*

$$\mathbf{P} = \mathbf{I} - \mathbf{n}\mathbf{n}^\mathsf{T}.$$

**Proof.** According to Proposition 7.21, the orthogonal projection of an arbitrary vector $\mathbf{x}$ onto the line of the normal vector is $\operatorname{proj}_\mathbf{n} \mathbf{x} = (\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$. The orthogonal projection onto the plane $S$ with normal vector $\mathbf{n}$ is $\operatorname{proj}_S \mathbf{x} = \mathbf{x} - \operatorname{proj}_\mathbf{n} \mathbf{x} = \mathbf{x} - (\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$ (see Figure 7.11). From this, it follows that the matrix of the orthogonal projection onto the plane is $\mathbf{I} - \mathbf{n}\mathbf{n}^\mathsf{T}$.

**Example 7.23 (Calculation of orthogonal projection onto a plane).** *Determine the orthogonal projection of the vector $(-2, 1, 3)$ onto the plane with equation $2x + y - 2z = 0$! (see also Example 7.45 later)*

**Solution.** A normal vector of the plane is $(2, 1, -2)$, so the unit-length normal vector is $\mathbf{n} = (2/3, 1/3, -2/3)$. The projection matrix $\mathbf{P}$ is

$$\mathbf{P} = \mathbf{I}_3 - \mathbf{n}\mathbf{n}^\mathsf{T} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \frac{1}{9}\begin{bmatrix} 2 \\ 1 \\ -2 \end{bmatrix}\begin{bmatrix} 2 & 1 & -2 \end{bmatrix} = \frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}.$$

> *Figure 7.11: Projection of a vector onto a plane*

Thus the orthogonal projection of the vector $(-2, 1, 3)$ is

$$\frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}\begin{bmatrix} -2 \\ 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}.$$

$\square$

### Reflection

Let's examine the matrix of reflection across a line in the plane and reflection across a plane in space!

**Proposition 7.24 (Matrix of planar reflection).** *The matrix of the linear mapping reflecting the vectors of the plane across a line making an angle $\alpha/2$ with the $x$-axis is*

$$\begin{bmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{bmatrix}.$$

**Proof.** According to Proposition 7.7, reflection is a linear mapping. The reflection of vectors depends only on the direction of the reflection axis, which is now $\alpha/2$. Thinking in terms of position vectors, the axis of reflection must pass through the origin.

It can be read from the accompanying figure that the reflection of $\mathbf{i}$ is $A\mathbf{i} = \left[\begin{smallmatrix} \cos\alpha \\ \sin\alpha \end{smallmatrix}\right]$, while that of vector $\mathbf{j}$ is $A\mathbf{j} = \left[\begin{smallmatrix} \sin\alpha \\ -\cos\alpha \end{smallmatrix}\right]$. Thus, the matrix of the mapping reflecting the vectors of the plane across a line making an angle $\alpha/2$ with the first axis is $\left[\begin{smallmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{smallmatrix}\right]$. $\square$

> *Figure 7.12: Reflection of the vectors $\mathbf{i}$ and $\mathbf{j}$ across a line*

The task of reflecting across a plane in space is obtained similarly to the projection onto a plane:

**Proposition 7.25 (Matrix of reflection across a plane).** *Prove that the matrix of the mapping reflecting the vectors of space across the plane with normal vector $\mathbf{n}$ is*

$$\mathbf{P} = \mathbf{I} - 2\mathbf{n}\mathbf{n}^\mathsf{T}.$$

**Proof.** Similarly to Proposition 7.22, everything can be read from the accompanying Figure 7.13: if we subtract the vector $\operatorname{proj}_\mathbf{n} \mathbf{x}$ from $\mathbf{x}$, we get the projection onto the plane, so if we subtract its double, we arrive at the reflection. The matrix of this mapping comes from the relation $\mathbf{x} - 2(\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x} = (\mathbf{I} - 2\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$.

> *Figure 7.13: Reflection of a vector across a plane*

### Projection

We have discussed orthogonal projection. However, one can project in other ways as well.

**Example 7.26 (Projection onto a plane).** *Determine the matrix of the linear mapping that projects all points of space onto the plane with equation $x + y + 2z = 0$ in the direction parallel to the vector $(1, -2, 1)$.*

**Solution.** Using elementary geometrical tools, it is easy to see that this mapping is indeed linear. It is clear that the image space will be all vectors of the plane with the equation $x + y + 2z = 0$. We obtain this space from the plane's equation by solving it as a system of equations. The solution is $(-s - 2t, s, t)$, meaning the basis of this space consists of the vectors $(-1, 1, 0)$ and $(-2, 0, 1)$. It is also easy to see that the null space contains exactly those vectors that are parallel to the projecting vector, i.e., the vector $(1, -2, 1)$. The projection matrix $\mathbf{P}$ must therefore satisfy the following conditions:

$$\mathbf{P}\begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}, \quad \mathbf{P}\begin{bmatrix} -2 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ 0 \\ 1 \end{bmatrix}, \quad \mathbf{P}\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}.$$

These three conditions can be summarized in a single matrix multiplication:

$$\mathbf{P}\begin{bmatrix} -1 & -2 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & 1 \end{bmatrix} = \begin{bmatrix} -1 & -2 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \text{ from which } \mathbf{P} = \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix}$$

$\square$

> *The matrix $\mathbf{P}$ obtained in the previous exercise satisfies the relation $\mathbf{P}^2 = \mathbf{P}$. This is also intuitively clear, because if $P$ denotes the linear transformation, then it is also true for it that $P^2 = P$. This follows from the fact that the projection $P$ leaves every vector of the plane with equation $x + y + 2z = 0$ in place, and on the other hand, for any vector $\mathbf{x}$, $P\mathbf{x}$ is in this plane, so the second projection leaves every vector in place.*

### Translation

Translation is not a linear mapping, as it adds a constant vector to every vector, meaning it does not map the zero vector to the zero vector. Yet, with a clever idea, it can be realized by a linear mapping.

We want to translate the plane by a vector $(a, b)$. The idea is to embed the plane into space, and there we look for a spatial linear mapping that translates this plane (what it does elsewhere does not even matter). Let the examined plane be the plane with equation $z = 1$, and let's look for the linear mapping $T$ for which

$$T\begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x + a \\ y + b \\ 1 \end{bmatrix}.$$

Although this still doesn't seem linear, since $z = 1$, the mapping

$$T\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} x + az \\ y + bz \\ z \end{bmatrix}$$

is appropriate in all respects. The matrix of this mapping is

$$\mathbf{T} = T\begin{bmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \end{bmatrix} = \begin{bmatrix} 1 & 0 & a \\ 0 & 1 & b \\ 0 & 0 & 1 \end{bmatrix}.$$

With a similar idea, the translation of space can also be realized. Any translation $(x, y, z) \mapsto (x + a, y + b, z + c)$ of space can be realized by the following matrix mapping:

$$\mathbf{T} = \begin{bmatrix} 1 & 0 & 0 & a \\ 0 & 1 & 0 & b \\ 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{T}\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & a \\ 0 & 1 & 0 & b \\ 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} x + a \\ y + b \\ z + c \\ 1 \end{bmatrix}.$$

## Exercises

### Rotation

**7.2.** Give a new solution to the question in Example 7.20: write the matrix of the mapping that rotates by an angle $\alpha$ around the line of the vector $(2, 0, 1)$, where $\cos\alpha = \frac{2}{3}$. (First rotate the line of the vector $(2, 0, 1)$ into the $x$-axis, then rotate the vectors of space around it!)

### Proofs

**7.3.** Show that for any set of vectors $H \subseteq \mathbb{R}^n$, the following two statements are equivalent:

1. any linear combination of any finitely many vectors in $H$ is in $H$;

2. any arbitrary scalar multiple of any vector in $H$, and the sum of any two vectors in $H$, is in $H$.

**7.4. A necessary and sufficient condition for linear independence** The system of vectors $V$ is linearly independent if and only if any vector of $\operatorname{span}(V)$ can be produced in only one way as a linear combination of $V$.

**7.5. Row space and null space** In Example 2.35, we solved the

$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& & & x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3&x_3 &{}+{}& & 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7&x_3 &{}+{}& & 8x_4 &{}+{}& 3x_5 &{}={}& 0
\end{alignedat}$$

system of equations. Its solution is

$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \frac{3}{2}t - u \\ s \\ -\frac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}s + \begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix}t + \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}u.$$

Using this and calculating in your head, give a system of vectors that spans the subspace of solutions of the

$$\begin{alignedat}{9}
-2x_1 &{}+{}& x_2 & & & & & & &{}={}& 0 \\
-3x_1 & & &{}-{}& x_3 &{}+{}& 2x_4 & &{}={}& 0 \\
-x_1 & & & & & & &{}+{}& x_5 &{}={}& 0
\end{alignedat}$$

homogeneous linear system of equations.

**7.6.** Generalize the result of the previous exercise to any arbitrary homogeneous linear system of equations!

## Similarity

*Similarity of matrices is a key concept: we will see that two matrices are similar if and only if they are the matrices of the same linear mapping in some corresponding basis.*

### Matrix of a linear transformation in different bases

Suppose that the matrix of the linear transformation $L$ in the basis $\mathcal{A}$ is $\mathbf{L}_\mathcal{A}$, in the basis $\mathcal{B}$ is $\mathbf{L}_\mathcal{B}$, and the change of basis matrix from $\mathcal{A}$ to $\mathcal{B}$ is $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. The question is what the relationship is among these three matrices.

The answer can be simply given if we examine the coordinate form of an arbitrary vector $\mathbf{x}$ and its image $L\mathbf{x}$. Let these be denoted by $[\mathbf{x}]_\mathcal{A}$, $[\mathbf{x}]_\mathcal{B}$, $[L\mathbf{x}]_\mathcal{A}$, $[L\mathbf{x}]_\mathcal{B}$. The change of basis matrix establishes the following relationships between them:

$$[\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A}, \quad [L\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[L\mathbf{x}]_\mathcal{A},$$

and the matrices $\mathbf{L}_\mathcal{A}$ and $\mathbf{L}_\mathcal{B}$ establish the following:

$$\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A} = [L\mathbf{x}]_\mathcal{A}, \quad \mathbf{L}_\mathcal{B}[\mathbf{x}]_\mathcal{B} = [L\mathbf{x}]_\mathcal{B}.$$

Comparing these we get that

$$\mathbf{L}_\mathcal{B}[\mathbf{x}]_\mathcal{B} = [L\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[L\mathbf{x}]_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A},$$

that is

$$\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A}$$

or written only for matrices:

$$\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A} \text{ or rearranged } \mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

The proof – and generally the relationship between matrices – can also be illustrated on a diagram. At the vertices of the diagram, the vectors $\mathbf{x}$ and $L\mathbf{x}$ are located. The vertical arrows show the direction of changing from basis $\mathcal{A}$ to $\mathcal{B}$. Moving in this direction, the result is obtained by multiplying by the matrix $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. The horizontal arrows show the effect of the transformation $L$. Moving in this direction, multiplication by the matrix $\mathbf{L}_\mathcal{A}$ or $\mathbf{L}_\mathcal{B}$ gives the result. We can get from the vector $[\mathbf{x}]_\mathcal{A}$ in the bottom left corner to the vector $[L\mathbf{x}]_\mathcal{B}$ in the top right corner in two ways: either the transformation $L$ acts first, then we change to basis $\mathcal{B}$, or we change to basis $\mathcal{B}$ first, and then $L$ acts. Thus

$$\begin{aligned} [\mathbf{x}]_\mathcal{A} &\longrightarrow \mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A} \longrightarrow \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A}, \\ [\mathbf{x}]_\mathcal{A} &\longrightarrow \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A} \longrightarrow \mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A}. \end{aligned}$$

The two final results must match. Thus we got the same thing as with substitutions. In summary, we have proved the following theorem:

> *Figure 7.14: The horizontal arrows show the effect of the transformation $L$. This effect can be achieved by multiplying with the matrix $\mathbf{L}_\mathcal{A}$ or $\mathbf{L}_\mathcal{B}$. The vertical arrows show the direction of the change of basis, which can be realized by multiplying with the matrix $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. The relationship $\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}$ can be read from the figure.*

> *Figure 7.15: This figure is obtained from the previous one by changing a single arrow and its label. From this, the relationship $\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ and $\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ can be read directly. For this, we have to follow the two paths from $[\mathbf{x}]_\mathcal{A}$ to $[L\mathbf{x}]_\mathcal{A}$, multiplying the corresponding matrices along the way.*

> *Figure 7.16: The transformation $T$ cyclically permutes 3 corners on one face of the Rubik's cube (takes the one in the top right corner to the left corner, that one to the middle), leaving all others in place.*

**Theorem 7.27 (Relationship between matrices of a linear transformation).** *Let the matrix of the linear transformation $L$ in the basis $\mathcal{A}$ be $\mathbf{L}_\mathcal{A}$, in the basis $\mathcal{B}$ be $\mathbf{L}_\mathcal{B}$, and the change of basis matrix from $\mathcal{A}$ to $\mathcal{B}$ be $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. Then*

$$\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}, \text{ that is } \mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

**Example 7.28 (Matrix of a linear transformation in another basis).** *The matrix of the linear transformation $L$ is $\mathbf{L} = \left[\begin{smallmatrix} -1 & 6 \\ -2 & 6 \end{smallmatrix}\right]$. Write its matrix in the basis $\mathcal{B} = \{(-2, -1), (3, 2)\}$!*

**Solution.** The change of basis matrix from the given basis $\mathcal{B}$ to the standard basis $\mathcal{E}$ consists of the basis vectors as column vectors, i.e.

$$\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}.$$

Then using the notation $\mathbf{L} = \mathbf{L}_\mathcal{E}$

$$\mathbf{L}_\mathcal{B} = \mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}}^{-1}\mathbf{L}_\mathcal{E}\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}^{-1}\begin{bmatrix} -1 & 6 \\ -2 & 6 \end{bmatrix}\begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}. \square$$

### Similarity of matrices

We know that if the matrix of a linear transformation $L$ in a basis $\mathcal{A}$ is $\mathbf{A}$, and in a basis $\mathcal{B}$ is $\mathbf{B}$, then the relationship between the two matrices is

$$\mathbf{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{A}\mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}},$$

where $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}^{-1}$ is the change of basis matrix. This fact motivates the following definition:

**Definition 7.29 (Similarity).** *We say that the $n \times n$ matrix $\mathbf{A}$ is similar to the matrix $\mathbf{B}$ if there exists an invertible matrix $\mathbf{C}$ such that*

$$\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}. \tag{7.10}$$

*Notation: $\mathbf{A} \sim \mathbf{B}$.*

> *If $\mathbf{A}$ is similar to $\mathbf{B}$, then $\mathbf{B}$ is also similar to $\mathbf{A}$. For let $\hat{\mathbf{C}} = \mathbf{C}^{-1}$. Then*

$$\mathbf{A} = \mathbf{C}\mathbf{B}\mathbf{C}^{-1} = (\mathbf{C}^{-1})^{-1}\mathbf{B}\mathbf{C}^{-1} = \hat{\mathbf{C}}^{-1}\mathbf{B}\hat{\mathbf{C}}.$$

> *Thus it can be said that $\mathbf{A}$ and $\mathbf{B}$ are similar, since similarity is a symmetric relation.*

> *For example $\left[\begin{smallmatrix} 0 & 1 \\ 0 & 0 \end{smallmatrix}\right] \sim \left[\begin{smallmatrix} -6 & 4 \\ -9 & 6 \end{smallmatrix}\right]$, since*

$$\begin{bmatrix} -6 & 4 \\ -9 & 6 \end{bmatrix} = \begin{bmatrix} -2 & -1 \\ -3 & -2 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}, \quad \left(\mathbf{C} = \begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}\right).$$

> *Figure 7.17: The three corner pieces visible on the top cube need to be exchanged. First we move the three corners into one plane (transformation $C$), then we exchange them with the transformation $T$ shown in the previous figure, and finally after applying the inverse of $C$, every piece goes to its place. Thus, considering the successive execution of transformations as multiplication, the solution is given by the transformation $CTC^{-1}$.*

[^p263_1]: In the notation $[\mathbf{e}]_\times$ denotes the matrix of the cross product associated with the vector $\mathbf{e}$.

> *The relationship $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ is equivalent to the relationship $\mathbf{C}\mathbf{B} = \mathbf{A}\mathbf{C}$ (in the case of invertible $\mathbf{C}$), and this relationship can be easier to verify. In the case of our example*
> $$\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}\begin{bmatrix} -6 & 4 \\ -9 & 6 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix} \quad \left( = \begin{bmatrix} 3 & -2 \\ 0 & 0 \end{bmatrix} \right).$$

> *The expression of the form $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ is called the conjugate of the matrix $\mathbf{A}$ by $\mathbf{C}$. The conjugate plays an important role in other algebraic structures as well. As an example, we mention the structure of permutations of finite sets, where by the product of permutations we mean their successive execution, the result of which is a permutation of the set. Specifically, we show the role of the conjugate on the Rubik's cube using Figures 7.16 and 7.17.*

**Theorem 7.30 (Effect of similar matrices).** *Two matrices are similar if and only if there are two bases in which these two matrices are the matrices of the same linear transformation.*

Proof. If $\mathbf{A}$ and $\mathbf{B}$ are similar, i.e. $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$, then considering $\mathbf{C}$ as the change of basis matrix from the basis $\mathcal{C} = \{\mathbf{c}_1, \mathbf{c}_2, \ldots, \mathbf{c}_n\}$ to the standard basis $\mathcal{E}$, we get that

$$\mathbf{B} = \mathbf{C}_{\mathcal{E}\leftarrow\mathcal{C}}^{-1}\mathbf{A}\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{C}}.$$

Accordingly, if $L$ is the matrix mapping associated with the matrix $\mathbf{A}$, i.e. $\mathbf{A}$ is the matrix of $L$ in the standard basis, then $\mathbf{B}$ is the matrix of $L$ in the basis $\mathcal{C}$. The converse statement was proved in the introduction. $\square$

**Theorem 7.31 (Similarity invariant properties).** *If $\mathbf{A}$ and $\mathbf{B}$ are similar matrices, i.e. $\mathbf{A} \sim \mathbf{B}$, then*

*a)* $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$,

*b)* $\dim(\mathcal{N}(\mathbf{A})) = \dim(\mathcal{N}(\mathbf{B}))$,

*c)* $\det(\mathbf{A}) = \det(\mathbf{B})$,

*d)* $\operatorname{trace}(\mathbf{A}) = \operatorname{trace}(\mathbf{B})$.

> *The word invariant of Latin origin means: remaining unchanged during transformation. In mathematics, it is an expression, quantity, value that remains unchanged during some operation, transformation, mapping. In our case, it means quantities that remain unchanged even after changing the basis.*

Proof. The first two statements of the theorem are immediately seen from the fact that the image space (null space) of the linear transformation existing for similar matrices according to the previous theorem coincides with the column space (null space) of one matrix in one basis, and the other matrix in the other basis. Nevertheless, we prove each statement building on the fact that with some invertible matrix $\mathbf{C}$, $\mathbf{A} = \mathbf{C}^{-1}\mathbf{B}\mathbf{C}$ and rearranged $\mathbf{B} = \mathbf{C}\mathbf{A}\mathbf{C}^{-1}$.

*a)* According to Proposition 4.33 on the rank of the product matrix, $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) \leqslant \operatorname{r}(\mathbf{B})$ and $\operatorname{r}(\mathbf{B}) = \operatorname{r}(\mathbf{C}\mathbf{A}\mathbf{C}^{-1}) \leqslant \operatorname{r}(\mathbf{A})$. From here $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$.

*b)* $\dim(\mathcal{N}(\mathbf{A})) = n - \operatorname{r}(\mathbf{A}) = n - \operatorname{r}(\mathbf{B}) = \dim(\mathcal{N}(\mathbf{B}))$.

*c)* $\det(\mathbf{A}) = \det(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) = \det(\mathbf{C}^{-1})\det(\mathbf{B})\det(\mathbf{C}) = \det(\mathbf{B})$, since $\det(\mathbf{C})\det(\mathbf{C}^{-1}) = 1$.

*d)* $\operatorname{trace}(\mathbf{A}) = \operatorname{trace}(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) = \operatorname{trace}(\mathbf{B}\mathbf{C}\mathbf{C}^{-1}) = \operatorname{trace}(\mathbf{B})$, and here we used the fact that the trace of the product of two matrices does not change if we swap the order of the factors. $\square$

### Matrix of a linear mapping in different basis pairs

Let two bases of the vector space $\mathcal{U}$ be $\mathcal{A}$ and $\mathcal{B}$, and two bases of the vector space $\mathcal{V}$ be $\mathcal{A}'$ and $\mathcal{B}'$. Suppose that the matrix of the linear mapping $L : \mathcal{U} \to \mathcal{V}$ in the basis pair $\{\mathcal{A}, \mathcal{A}'\}$ is $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$, in the basis pair $\{\mathcal{B}, \mathcal{B}'\}$ is $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$, and the matrices of the change of bases are $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ and $\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}$, respectively. What is the relationship among these matrices?

Let the coordinate form of the vectors $\mathbf{x}$ and $L\mathbf{x}$ be denoted by $[\mathbf{x}]_{\mathcal{A}}$, $[\mathbf{x}]_{\mathcal{B}}$, $[L\mathbf{x}]_{\mathcal{A}'}$, $[L\mathbf{x}]_{\mathcal{B}'}$. The change of basis matrix establishes the following relationships between them:

$$[\mathbf{x}]_{\mathcal{B}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}, \qquad [L\mathbf{x}]_{\mathcal{B}'} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}[L\mathbf{x}]_{\mathcal{A}'},$$

and the matrices $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$ and $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$ establish the following:

$$[L\mathbf{x}]_{\mathcal{A}'} = \mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}, \qquad [L\mathbf{x}]_{\mathcal{B}'} = \mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}.$$

With the appropriate substitutions we get that

$$\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}.$$

With this we have proved the following theorem:

> *Figure 7.18: From the figure, the relationship $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{A}'\leftarrow\mathcal{B}'}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$, and $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}^{-1}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ can be read. For this, we have to follow the two paths from $[\mathbf{x}]_{\mathcal{A}}$ to $[L\mathbf{x}]_{\mathcal{A}'}$, and in the meantime multiply the corresponding matrices.*

**Theorem 7.32 (Relationship between matrices of a linear mapping).** *Let the matrix of the linear mapping $L$ in the basis pair $\{\mathcal{A}, \mathcal{A}'\}$ be $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$, in the basis pair $\{\mathcal{B}, \mathcal{B}'\}$ be $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$, and let the matrices of the change of bases be $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ and $\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}$, respectively. Then*

$$\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}, \text{ that is } \mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}^{-1}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

**Corollary 7.33 (Matrices of linear mappings).** *If $\mathbf{A}$ and $\mathbf{B}$ are two matrices of the same linear mapping $\mathbb{R}^n \to \mathbb{R}^m$ in different basis pairs, then*

*a) the ranks of the two matrices are equal,*

*b) the nullities of the two matrices are equal.*

Proof. Similarly to the proof of Theorem 7.31: if with some invertible matrices $\mathbf{C}$ and $\mathbf{D}$, $\mathbf{A} = \mathbf{D}^{-1}\mathbf{B}\mathbf{C}$, then rearranged $\mathbf{B} = \mathbf{D}\mathbf{A}\mathbf{C}^{-1}$, then according to Proposition 4.33 on the rank of the product matrix, $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{D}^{-1}\mathbf{B}\mathbf{C}) \leqslant \operatorname{r}(\mathbf{B})$ and $\operatorname{r}(\mathbf{B}) = \operatorname{r}(\mathbf{D}\mathbf{A}\mathbf{C}^{-1}) \leqslant \operatorname{r}(\mathbf{A})$. Thus $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$.

From here $\dim(\mathcal{N}(\mathbf{A})) = n - \operatorname{r}(\mathbf{A}) = n - \operatorname{r}(\mathbf{B}) = \dim(\mathcal{N}(\mathbf{B}))$. $\square$

**Example 7.34 (Matrix of a linear mapping in another basis).** *The matrix of the linear transformation $L$ is $\mathbf{L} = \begin{bmatrix} -1 & 6 & 2 \\ -2 & 6 & 3 \end{bmatrix}$. Write its matrix in the basis pair formed by the bases $\mathcal{B} = \{(1, 0, 0), (1, 1, 0), (2, 1, 1)\}$ and $\mathcal{B}' = \{(-2, -1), (3, 2)\}$!*

Solution. The matrices of the change of bases from the given two bases to the standard basis are

$$\mathbf{C}_{\mathcal{E}_3\leftarrow\mathcal{B}} = \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{D}_{\mathcal{E}_2\leftarrow\mathcal{B}'} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}.$$

Then using the notation $\mathbf{L} = \mathbf{L}_{\mathcal{E}_2\leftarrow\mathcal{E}_3}$

$$\begin{aligned}
\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}} &= \mathbf{D}_{\mathcal{E}_2\leftarrow\mathcal{B}'}^{-1}\mathbf{L}_{\mathcal{E}_2\leftarrow\mathcal{E}_3}\mathbf{C}_{\mathcal{E}_3\leftarrow\mathcal{B}} \\
&= \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}^{-1}\begin{bmatrix} -1 & 6 & 2 \\ -2 & 6 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} -4 & 2 & 3 \\ -3 & 3 & 4 \end{bmatrix}.
\end{aligned}$$
$\square$

### Rank and nullity of a linear mapping, determinant and trace of a linear transformation

An important consequence of the theorem on similarity invariant properties is that the concepts of rank, determinant, and trace can be naturally transferred from matrices to linear mappings between finite-dimensional spaces.

**Definition 7.35 (Rank and nullity of a linear mapping).** *By the rank of a linear mapping $L : \mathbb{R}^n \to \mathbb{R}^m$, we mean the dimension of its image space, i.e., $\operatorname{r}(L) = \dim(\operatorname{Im}(L))$. The dimension of the kernel space, i.e., the number $\dim(\operatorname{Ker}(L))$, is called the nullity of the linear mapping.*

**Definition 7.36 (Determinant and trace of a linear transformation).** *By the determinant denoted by $\det L$ (and the trace denoted by $\operatorname{trace} L$) of a linear transformation $L : \mathbb{R}^n \to \mathbb{R}^n$, we mean the determinant (and the trace) of the matrix of the mapping $L$ written in any basis. The definition is meaningful, since both of these values are independent of the choice of basis.*

**Example 7.37 (Rank, nullity, determinant, trace).** *Verify the values relating to the following transformations:*

| Planar | rank | nullity | determinant | trace |
|---|---|---|---|---|
| rotation by angle $\alpha$ | 2 | 0 | 1 | $2\cos\alpha$ |
| reflection across a line | 2 | 0 | $-1$ | 0 |
| orthogonal projection onto a line | 1 | 1 | 0 | 1 |

| Spatial | rank | nullity | determinant | trace |
|---|---|---|---|---|
| rotation by angle $\alpha$ around a line | 3 | 0 | 1 | $2\cos\alpha$ |
| reflection across a plane | 3 | 0 | $-1$ | 1 |
| orthogonal projection onto a line | 1 | 2 | 0 | 1 |
| orthogonal projection onto a plane | 2 | 1 | 0 | 2 |

Each of the statements can be calculated from the previously derived matrices, or from its matrix written in an appropriately chosen basis. We leave this to the Reader.

**Theorem 7.38 (Dimension theorem for linear mappings).** *Let $L : \mathbb{R}^n \to \mathbb{R}^m$ be a linear mapping. Then*

$$\operatorname{r}(L) + \dim(\operatorname{Ker}(L)) = n.$$

Proof. The theorem is the transfer of the dimension theorem for matrices to linear mappings. If $\mathbf{L}$ is a matrix of the mapping $L$, then $\operatorname{r}(L) = \operatorname{r}(\mathbf{L})$, $\dim(\operatorname{Ker}(L)) = \dim(\mathcal{N}(\mathbf{L}))$ and according to the dimension theorem for matrices $\operatorname{r}(\mathbf{L}) + \dim(\mathcal{N}(\mathbf{L})) = n$, therefore $\operatorname{r}(L) + \dim(\operatorname{Ker}(L)) = n$. $\square$

> *The theorem is also usually called the rank-nullity theorem, since it is about the sum of the rank and nullity of the mapping.*

**Theorem 7.39 (Determinant of a linear transformation and volume).** *If $L : \mathbb{R}^n \to \mathbb{R}^n$ is a linear transformation and the volume of the parallelepiped spanned by the vectors $\{\mathbf{a}_1, \ldots, \mathbf{a}_n\}$ is $V$, then the volume of the parallelepiped spanned by the vectors $\{L\mathbf{a}_1, \ldots, L\mathbf{a}_n\}$ is $\det(L)V$.*

Proof. Let $\mathbf{A} = [\mathbf{a}_1 | \mathbf{a}_2 | \ldots | \mathbf{a}_n]$, thus $V = \det(\mathbf{A})$ and let $\mathbf{L}$ be the standard matrix of the transformation $L$. Then

$$\begin{aligned}
\det[L\mathbf{a}_1 | L\mathbf{a}_2 | \ldots | L\mathbf{a}_n] &= \det[\mathbf{L}\mathbf{a}_1 | \mathbf{L}\mathbf{a}_2 | \ldots | \mathbf{L}\mathbf{a}_n] = \det(\mathbf{L}\mathbf{A}) \\
&= \det(\mathbf{L})\det(\mathbf{A}) = \det(L)V.
\end{aligned}$$
$\square$

## Exercises

### Matrix mappings

*Decide whether the following mappings are matrix mappings! For those that are, write their matrices! Let $\mathbf{a} = (a_1, a_2, a_3)$ be an arbitrary vector.*

**7.7.** $A : \mathbf{x} \mapsto \mathbf{a} \cdot \mathbf{x}$,

**7.8.** $A : \mathbf{x} \mapsto \mathbf{a} + \mathbf{x}$,

**7.9.** $A : \mathbf{x} \mapsto \frac{1}{2}(\mathbf{a} \times \mathbf{x})$,

**7.10.** $A : \mathbf{x} \mapsto \mathbf{a}(\mathbf{a} \cdot \mathbf{x})$.

**7.11. Operations between matrix mappings** Prove the statements of Theorem 7.2!

**7.12. Inverse matrix mappings** Prove Theorem 7.3!

### Linear mappings

**7.13. Equivalent definitions of a linear mapping** Verify the equivalence of the statements of Theorem 7.8!

*Decide whether the following mappings are linear mappings!*

**7.14.** $A : (x, y) \mapsto (x + 2y, x - y)$.

**7.15.** Let $\mathcal{P}_3$ be the set of polynomials of degree at most 3, and let $D : \mathcal{P}_3 \to \mathcal{P}_3 : p(x) \mapsto p'(x)$.

**7.16.** Let $\mathcal{D}_{[0,1]}$ be the set of differentiable functions on the interval $[0, 1]$, and $\mathcal{F}_{[0,1]}$ be the set of functions defined on the interval $[0, 1]$. Furthermore, let $A : \mathcal{D}_{[0,1]} \to \mathcal{F}_{[0,1]}; f(x) \mapsto xf'(x)$.

### Matrix of a linear mapping

### Similar matrices

**7.17. The trace is invariant under similarity** Verify that the traces of similar matrices are identical!

## Orthogonal projection and the best approximation

*The best approximation, the method of least squares, or linear regression are important concepts that occur very often in applications. Their essence can be well illuminated by the concept of orthogonal projection onto a subspace of $\mathbb{R}^n$.*

### Sum and direct sum of subspaces

As a generalization of coordinatization, we can consider the idea of producing every vector in space as the sum of vectors falling into different subspaces, uniquely. This leads to the concept of the direct sum of subspaces.

If $\mathcal{U}$ and $\mathcal{V}$ are subspaces of the same vector space, then the subspace generated by their union is denoted by $\mathcal{U} + \mathcal{V}$, and is called the sum of the two subspaces.

**Proposition 7.40 (Sum of subspaces).** *If $\mathcal{U}$ and $\mathcal{V}$ are two subspaces of the subspace $\mathcal{W}$, then the subspace $\mathcal{U} + \mathcal{V}$ generated by their union consists exactly of those vectors that can be produced as the sum of a vector in $\mathcal{U}$ and a vector in $\mathcal{V}$.*

Proof. If $\mathbf{x}$ is a vector in $\mathcal{U} + \mathcal{V}$, then it can be produced as a linear combination of some vectors in $\mathcal{U}$ and $\mathcal{V}$. But the part of the linear combination containing vectors in $\mathcal{U}$ gives a vector $\mathbf{u}$ in $\mathcal{U}$, while the rest gives a vector $\mathbf{v}$ in $\mathcal{V}$, thus $\mathbf{x} = \mathbf{u} + \mathbf{v}$. Conversely, every vector of the form $\mathbf{u} + \mathbf{v}$ is a linear combination of vectors in $\mathcal{U}$ and $\mathcal{V}$, so it is in $\mathcal{U} + \mathcal{V}$. $\square$

As an illustration: if for example $\mathcal{W} = \mathbb{R}^3$, and $\mathcal{U}$ and $\mathcal{V}$ are 1-dimensional subspaces distinct from each other, then the 2-dimensional subspace generated by their union contains exactly those vectors that are sums of a vector $\mathbf{u}$ in $\mathcal{U}$ and a vector $\mathbf{v}$ in $\mathcal{V}$ (see Figure 7.19).

Let $\mathcal{V}$ and $\mathcal{W}$ be two arbitrary subspaces of the vector space $\mathcal{U}$. We say that $\mathcal{W}$ is the supplementary subspace, or complementary subspace of $\mathcal{V}$, or that $\mathcal{V}$ and $\mathcal{W}$ are supplementary (complementary) subspaces of each other, if

$$\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}, \quad \mathcal{V} + \mathcal{W} = \mathcal{U},$$

that is, the two subspaces have no common elements other than the zero vector, and every vector of $\mathcal{U}$ can be produced as the sum of elements in $\mathcal{V}$ and $\mathcal{W}$!

This concept is reminiscent of coordinatizing the plane: in the plane, the vectors of the two coordinate axes passing through the origin give the two subspaces, which share only the zero vector, and every vector of the plane can be (uniquely) produced as the sum of a vector taken from one and the other.

> *Figure 7.19: Any vector in $\mathcal{U} + \mathcal{V}$ can be written in the form $\mathbf{u} + \mathbf{v}$*

**Theorem 7.41 (Properties of complementary subspaces).** *Let $\mathcal{V}$ and $\mathcal{W}$ be two subspaces of the vector space $\mathcal{U}$ and let $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\}$ be a basis of $\mathcal{V}$, and $\{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_k\}$ a basis of $\mathcal{W}$. The following statements are equivalent:*

*a) $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ and $\mathcal{V} + \mathcal{W} = \mathcal{U}$, that is, $\mathcal{V}$ and $\mathcal{W}$ are complementary subspaces,*

*b) every vector of $\mathcal{U}$ can be uniquely expressed as the sum of a vector in $\mathcal{V}$ and a vector in $\mathcal{W}$,*

*c) $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\} \cup \{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_k\}$ is a basis of the vector space $\mathcal{U}$,*

*d) $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ and $\dim\mathcal{V} + \dim\mathcal{W} = \dim\mathcal{U}$.*

Proof. *a)* $\Rightarrow$ *b)* : We must show that every vector is uniquely expressed as the sum of a vector in $\mathcal{V}$ and a vector in $\mathcal{W}$. Let $\mathbf{u} \in \mathcal{U}$ be a vector such that $\mathbf{u} = \mathbf{v}_1 + \mathbf{w}_1 = \mathbf{v}_2 + \mathbf{w}_2$, where $\mathbf{v}_1, \mathbf{v}_2 \in \mathcal{V}$ and $\mathbf{w}_1, \mathbf{w}_2 \in \mathcal{W}$. After rearranging, $\mathbf{v}_1 - \mathbf{v}_2 = \mathbf{w}_2 - \mathbf{w}_1$. The left side is a vector in $\mathcal{V}$, the right side is a vector in $\mathcal{W}$, which can only be identical if they are the zero vector, since $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$. Thus $\mathbf{v}_1 = \mathbf{v}_2$ and $\mathbf{w}_1 = \mathbf{w}_2$.

*b)* $\Rightarrow$ *c)* : Since any vector $\mathbf{u} \in \mathcal{U}$ can be expressed in the form $\mathbf{v} + \mathbf{w}$, where $\mathbf{v} \in \mathcal{V}$ and $\mathbf{w} \in \mathcal{W}$, and these two vectors can be expressed as linear combinations of the basis vectors, the vector system obtained by the union of the two bases spans $\mathcal{U}$. On the other hand, we show that the vector system consists of linearly independent vectors. Suppose that

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r + d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

Since the $\mathbf{0}$ vector is uniquely expressed in the form $\mathbf{v} + \mathbf{w}$, and one of its expressions is $\mathbf{0} + \mathbf{0}$, therefore

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r = \mathbf{0}, \quad \text{and} \quad d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

From this, by the linear independence of the basis vectors, it follows that every coefficient is 0. Thus the union of the bases of the two subspaces consists of linearly independent vectors, hence it forms a basis of $\mathcal{U}$.

*c)* $\Rightarrow$ *d)* : A basis of $\mathcal{U}$ has $r + k$ elements, thus $\dim\mathcal{U} = r + k = \dim\mathcal{V} + \dim\mathcal{W}$. $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ can be proved similarly to what we have seen before.

*d)* $\Rightarrow$ *a)* : We only need to show that if $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ and $\dim\mathcal{V} + \dim\mathcal{W} = \dim\mathcal{U}$, then $\mathcal{U} = \mathcal{V} + \mathcal{W}$. For this, let $\{\mathbf{v}_1, \ldots, \mathbf{v}_r\}$ be a basis of $\mathcal{V}$, and $\{\mathbf{w}_1, \ldots, \mathbf{w}_k\}$ a basis of $\mathcal{W}$. If their union is a basis in $\mathcal{U}$, then we are done, since every vector is a linear combination of these basis vectors, which splits into a part in $\mathcal{V}$ and a part in $\mathcal{W}$. Therefore, suppose that these vectors are linearly dependent, that is, the zero vector can be obtained by some nontrivial linear combination of them:

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r + d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

Rearranging,

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r = -d_1\mathbf{w}_1 - \cdots - d_k\mathbf{w}_k,$$

which contradicts the condition $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$, since by our indirect assumption not all coefficients are 0. $\square$

**Definition 7.42 (Direct sum).** *If the subspaces $\mathcal{V}$ and $\mathcal{W}$ are complementary subspaces of $\mathcal{U}$, then we say that $\mathcal{U}$ is the direct sum of the subspaces $\mathcal{V}$ and $\mathcal{W}$, denoted by $\mathcal{V} \oplus \mathcal{W}$ to distinguish it from the simple sum of subspaces.*

We have already seen an example of complementary subspaces, since the sum of the dimensions of the row space and the null space is $n$, and the two subspaces have no elements in common other than the zero vector, so $\mathcal{S}(\mathbf{A})$ and $\mathcal{N}(\mathbf{A})$ are complementary subspaces, i.e., $\mathbb{R}^n = \mathcal{S}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A})$ for any real $m \times n$ matrix $\mathbf{A}$.

For a subspace $\mathcal{W}$, $\mathcal{W}^\perp$ denoted the subspace of vectors orthogonal to $\mathcal{W}$. We call this the orthogonal complementary subspace, but we have not yet shown whether it is indeed a complementary subspace.

**Theorem 7.43 (Properties of the orthogonal complementary subspace).** *Let $\mathcal{W}$ be a subspace of the $n$-dimensional real or complex vector space $\mathcal{U}$. Then*

*a) $\mathcal{W} \cap \mathcal{W}^\perp = \{\mathbf{0}\}$,*

*b) $\mathcal{W} + \mathcal{W}^\perp = \mathcal{U}$,*

*c) every vector in $\mathcal{U}$ can be uniquely expressed as the sum of a vector in $\mathcal{W}$ and a vector in $\mathcal{W}^\perp$,*

*d) $(\mathcal{W}^\perp)^\perp = \mathcal{W}$.*

Proof. *a)* is true, since if $\mathbf{x} \in \mathcal{W} \cap \mathcal{W}^\perp$, then $\mathbf{x} \cdot \mathbf{x} = 0$, which holds only for the $\mathbf{0}$ vector.

*b)* follows from the previous theorem on complementary subspaces: if the sum of the dimensions of two subspaces is $n$, and the intersection of the two subspaces consists only of the zero vector, then the sum of the two subspaces is $\mathbb{R}^n$. In our case, the two subspaces are $\mathcal{W}$ and $\mathcal{W}^\perp$. If we form a matrix from the vectors of a basis of $\mathcal{W}$ as row vectors, its row space will be $\mathcal{W}$, its null space will be $\mathcal{W}^\perp$, and the sum of the dimensions of the row space and null space is indeed $n$ according to the dimension theorem.

It is also a consequence of the previous theorem and statements *a)* and *b)* that the "orthogonal complementary subspaces" are indeed complementary subspaces, which proves *c)*.

To prove *d)*, we will show that $\mathcal{W} \subseteq (\mathcal{W}^\perp)^\perp$ and $\mathcal{W} \supseteq (\mathcal{W}^\perp)^\perp$, which proves that $\mathcal{W} = (\mathcal{W}^\perp)^\perp$.

Let $\mathbf{w}$ be an arbitrary vector in the space $\mathcal{W}$. Since $\mathcal{W}^\perp$ consists exactly of those vectors that are orthogonal to every vector in $\mathcal{W}$, $\mathbf{w}$ is orthogonal to every vector in $\mathcal{W}^\perp$. This means exactly that $\mathbf{w}$ is in the subspace $(\mathcal{W}^\perp)^\perp$, hence $\mathcal{W} \subseteq (\mathcal{W}^\perp)^\perp$.

To prove the reverse inclusion, let $\mathbf{w} \in (\mathcal{W}^\perp)^\perp$. According to point *b)*, this vector can be written in the form $\mathbf{w} = \mathbf{v} + \mathbf{v}^\perp$, where $\mathbf{v} \in \mathcal{W}$ and $\mathbf{v}^\perp \in \mathcal{W}^\perp$. It would be enough to show that $\mathbf{v}^\perp = \mathbf{0}$. Due to the orthogonality of $(\mathcal{W}^\perp)^\perp$ and $\mathcal{W}^\perp$, $\mathbf{w} \cdot \mathbf{v}^\perp = 0$, thus

$$0 = \mathbf{w} \cdot \mathbf{v}^\perp = \mathbf{w} \cdot (\mathbf{v} + \mathbf{v}^\perp) = \mathbf{v} \cdot \mathbf{v}^\perp + \mathbf{v}^\perp \cdot \mathbf{v}^\perp = \mathbf{v}^\perp \cdot \mathbf{v}^\perp,$$

since $\mathbf{v} \cdot \mathbf{v}^\perp = 0$. But the equality $\mathbf{v}^\perp \cdot \mathbf{v}^\perp = 0$ only holds if $\mathbf{v}^\perp = \mathbf{0}$. Therefore $\mathbf{w} = \mathbf{v}$, that is, $\mathbf{w} \in \mathcal{W}$, which proves the statement. $\square$

### Orthogonal projection onto a subspace of $\mathbb{R}^n$

We say that the orthogonal projection of a vector $\mathbf{v}$ of the vector space $\mathcal{V}$ onto the subspace $\mathcal{W} \leqslant \mathcal{V}$ is the vector $\mathbf{w}$ if $\mathbf{w} \in \mathcal{W}$, and $\mathbf{v} - \mathbf{w}$ is orthogonal to the subspace $\mathcal{W}$, that is, $\mathbf{v} - \mathbf{w} \in \mathcal{W}^\perp$. The vector $\mathbf{v} - \mathbf{w}$ is called the component of the vector $\mathbf{v}$ orthogonal to the subspace $\mathcal{W}$.

The question is whether the orthogonal projection onto the subspace exists for every vector, and whether it is unique. According to point *c)* of Theorem 7.43, if $\mathcal{W} \leqslant \mathcal{V}$, then every vector $\mathbf{v} \in \mathcal{V}$ is uniquely decomposed into the sum of a vector $\mathbf{w}$ in $\mathcal{W}$ and a vector $\mathbf{w}^\perp$ in $\mathcal{W}^\perp$. This means that the vector $\mathbf{w}$ is exactly the orthogonal projection of the vector $\mathbf{v}$ onto the subspace $\mathcal{W}$. Let this uniquely existing vector be denoted by $\operatorname{proj}_{\mathcal{W}}\mathbf{v}$, consistent with our previous notation.

A matrix has full column rank if its columns are linearly independent, i.e., its rank equals the number of its columns, which means its columns form a basis for its column space. The concept of full row rank matrix can be defined similarly.

**Theorem 7.44 (Matrix of projection onto a subspace).** *If $\mathcal{W}$ is a subspace of $\mathbb{R}^n$, and the column vectors of the matrix $\mathbf{A}$ form a basis for $\mathcal{W}$ (so $\mathbf{A}$ has full column rank), then the matrix of the orthogonal projection onto the subspace $\mathcal{W}$, i.e., the mapping $\operatorname{proj}_{\mathcal{W}}$, is*

$$\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}.$$

Proof. Let $\mathbf{w}$ be the orthogonal projection of the vector $\mathbf{v} \in \mathbb{R}^n$ onto $\mathcal{W}$. Since by definition the column space of $\mathbf{A}$ is $\mathcal{W}$, there exists a vector $\mathbf{x}$ such that $\mathbf{A}\mathbf{x} = \mathbf{w}$. On the other hand, since $\mathcal{W} = \mathcal{O}(\mathbf{A})$, $\mathcal{W}^\perp = \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, so $\mathbf{v} - \mathbf{w}$ is in the null space of $\mathbf{A}^{\mathsf{T}}$, because by the definition of orthogonal projection, $\mathbf{v} - \mathbf{w}$ is orthogonal to $\mathcal{W}$. Accordingly, $\mathbf{A}^{\mathsf{T}}(\mathbf{v} - \mathbf{w}) = \mathbf{0}$, that is, $\mathbf{A}^{\mathsf{T}}(\mathbf{v} - \mathbf{A}\mathbf{x}) = \mathbf{0}$. Rearranging, we get

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{A}^{\mathsf{T}}\mathbf{v}.$$

The matrix $\mathbf{A}$ has full column rank, so according to Theorem **??**, $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ is invertible, that is $\mathbf{x} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{v}$, from which we get $\operatorname{proj}_{\mathcal{W}}\mathbf{v} = \mathbf{w} = \mathbf{A}\mathbf{x} = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{v}$, which proves the statement. $\square$

> *The formula in the theorem is easy to remember, as it is consistent with the formula for orthogonal projection onto a line (7.7). Because if the matrix $\mathbf{A}$ consists of a single column, $(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}$ is a single number, which can be factored out, that is, with the notation $\mathbf{A} = \mathbf{b}$, $\mathbf{b}(\mathbf{b}^{\mathsf{T}}\mathbf{b})^{-1}\mathbf{b}^{\mathsf{T}} = \frac{1}{\mathbf{b}^{\mathsf{T}}\mathbf{b}}\mathbf{b}\mathbf{b}^{\mathsf{T}}$.*

**Example 7.45 (Calculating orthogonal projection).** *Determine the orthogonal projection of the vector $(-2, 1, 3)$ onto the plane spanned by the vectors $(1, 0, 1)$ and $(-1, 2, 0)$! (see also Example 7.23)*

Solution. The matrix formed from the basis vectors of the subspace is

$$\mathbf{A} = \begin{bmatrix} 1 & -1 \\ 0 & 2 \\ 1 & 0 \end{bmatrix}, \text{ from which } \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}.$$

Thus the orthogonal projection of the vector $(-2, 1, 3)$ is

$$\frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}\begin{bmatrix} -2 \\ 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}.$$

This problem is identical to Example 7.23, since the equation of this plane is also $2x + y - 2z = 0$, because $(1, 0, 1) \times (-1, 2, 0) = (-2, -1, 2)$. $\square$

### Which matrix is the matrix of an orthogonal projection?

We are looking for – easily verifiable – conditions on the matrix of a linear mapping, by which it can be immediately determined whether the matrix mapping is an orthogonal projection.

**Theorem 7.46 (Matrices of orthogonal projections).** *A matrix $\mathbf{P}$ is the matrix of an orthogonal projection if and only if $\mathbf{P} = \mathbf{P}^{\mathsf{T}} = \mathbf{P}^2$.*

Proof. The necessity of the condition $\mathbf{P} = \mathbf{P}^2$ is intuitively clear, since every linear mapping $P$ that projects the entire space $\mathbb{R}^n$ onto a subspace – namely $\operatorname{Im}P$ – leaves the vectors of the subspace fixed. Thus $P^2\mathbf{x} = P\mathbf{x}$ holds for every $\mathbf{x}$, so this relation must also be true for every matrix of $P$.

($\Longrightarrow$) Assume that $\mathbf{P}$ is the matrix of an orthogonal projection $P$ in the standard basis of $\mathbb{R}^n$. Consider an arbitrary basis of $\operatorname{Im}(P) = \mathcal{O}(\mathbf{P})$, and let $\mathbf{A}$ be the matrix whose columns are the elements of this basis. By Theorem 7.44, we then have $\mathbf{P} = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}$. However, the condition in the theorem is easily verified for this.

$$\begin{aligned}
\mathbf{P}^2 &= \left(\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\right)^2 = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \mathbf{P},
\end{aligned}$$

on the other hand

$$\begin{aligned}
\mathbf{P}^{\mathsf{T}} &= \left(\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\right)^{\mathsf{T}} = \mathbf{A}\left((\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\right)^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \mathbf{P}.
\end{aligned}$$

($\Longleftarrow$) Assume that $\mathbf{P} = \mathbf{P}^{\mathsf{T}} = \mathbf{P}^2$. We show that $\mathbf{P}$ is the matrix of the orthogonal projection onto $\mathcal{O}(\mathbf{P})$. For this, it is enough to show that the vector $\mathbf{x} - \mathbf{P}\mathbf{x}$ is orthogonal to $\mathcal{O}(\mathbf{P})$ for any vector $\mathbf{x}$. Because of the condition $\mathbf{P}^2 = \mathbf{P}$, $\mathbf{P}(\mathbf{x} - \mathbf{P}\mathbf{x}) = \mathbf{P}\mathbf{x} - \mathbf{P}^2\mathbf{x} = \mathbf{0}$, thus $\mathbf{x} - \mathbf{P}\mathbf{x} \in \mathcal{N}(\mathbf{P})$, but $\mathbf{P} = \mathbf{P}^{\mathsf{T}}$, so $\mathbf{x} - \mathbf{P}\mathbf{x} \in \mathcal{N}(\mathbf{P}^{\mathsf{T}})$. This means exactly that $\mathbf{x} - \mathbf{P}\mathbf{x}$ is orthogonal to $\mathcal{O}(\mathbf{P})$, and this is what we wanted to prove. $\square$

> *The relation $\mathbf{P} = \mathbf{P}^{\mathsf{T}}$ means that $\mathbf{P}$ is symmetric. Matrices satisfying the property $\mathbf{P}^2 = \mathbf{P}$ are called idempotent. Thus the theorem can also be formulated as: a matrix is the matrix of an orthogonal projection if and only if it is idempotent and symmetric.*

> *We will see later that the matrices of – to be defined later – not necessarily orthogonal projections coincide with idempotent matrices, so projecting linear mappings coincide with idempotent linear mappings.*

> *The dimension of the space a projection projects onto is told by its rank, since it equals the dimension of the image space.*

**Example 7.47.** *Prove that the matrices*

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \frac{1}{2}\begin{bmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{bmatrix}, \quad \frac{1}{4}\begin{bmatrix} 3 & -1 & -1 & -1 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ -1 & -1 & -1 & 3 \end{bmatrix}$$

*are matrices of orthogonal projections! To what dimensional space do they project?*

Solution. It is easy to verify that each matrix is symmetric and idempotent, i.e., satisfies the equalities $\mathbf{P}^{\mathsf{T}} = \mathbf{P}$ and $\mathbf{P}^2 = \mathbf{P}$. For the first two matrices, it can be seen without transformation that their rank is 2. The rank of the third matrix is 3, because on the one hand it is at least 3, since if we subtract the last row from the first three, we get a $3 \times 3$ identity matrix in it, and it cannot be 4, because the sum of the four row vectors is the zero vector, i.e. they are linearly dependent. $\square$

### Distance from a subspace

Given a vector $\mathbf{x}$ of the space $\mathbb{R}^n$ and a subspace $\mathcal{W}$. The distance of $\mathbf{x}$ from the subspace $\mathcal{W}$ is defined as its distance from the vector $\mathbf{w}$ in the subspace $\mathcal{W}$ closest to $\mathbf{x}$. The question is, however, whether such a vector exists at all! We will show that such a vector $\mathbf{w}$ exists and is unique. This vector is called the best approximation of the vector $\mathbf{x}$ in $\mathcal{W}$.

**Theorem 7.48 (Best approximation theorem).** *Given a vector $\mathbf{x}$ of the space $\mathbb{R}^n$ and a subspace $\mathcal{W}$. The vector $\mathbf{x}$ has a unique best approximation $\hat{\mathbf{x}}$ in $\mathcal{W}$, namely $\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$.*

Proof. Let $\mathbf{w}$ be an arbitrary vector in $\mathcal{W}$. Then

$$\mathbf{x} - \mathbf{w} = (\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}) + (\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}).$$

Because of the definition of orthogonal projection, the first expression on the right side of the equality is an element of $\mathcal{W}^\perp$, while the second is an element of $\mathcal{W}$. Thus the vectors $\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}$ and $\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}$ are orthogonal to each other, so the Pythagorean theorem can be applied to them:

$$|\mathbf{x} - \mathbf{w}|^2 = |\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}|^2 + |\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}|^2.$$

From this it is clear that

$$|\mathbf{x} - \mathbf{w}|^2 \geq |\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}|^2,$$

and equality can hold only if $\mathbf{w} = \hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$, which also proves the uniqueness of the best approximation. $\square$

> *One consequence of this theorem is that every vector in $\mathbb{R}^n$ can be decomposed into the sum of a vector in $\mathcal{W}$ and a vector orthogonal to it, namely*
> $$\mathbf{x} = \operatorname{proj}_{\mathcal{W}}\mathbf{x} + \mathbf{w}^\perp, \text{ where } \mathbf{w}^\perp = \mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}.$$

However, more is true, namely that this decomposition is unique.

**Theorem 7.49 (Decomposition of a vector into components).** *Given a vector $\mathbf{x}$ in the space $\mathbb{R}^n$ and a subspace $\mathcal{W}$. The vector $\mathbf{x}$ uniquely decomposes into the sum of a vector $\mathbf{w}$ in $\mathcal{W}$ and a vector $\mathbf{w}^\perp$ orthogonal to $\mathcal{W}$, namely $\mathbf{w} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$ and $\mathbf{w}^\perp = \mathbf{x} - \mathbf{w}$.*

Proof. Suppose that there exists another decomposition of $\mathbf{x}$ with this property, so $\mathbf{x} = \mathbf{w} + \mathbf{w}^\perp$ and $\mathbf{x} = \mathbf{v} + \mathbf{v}^\perp$. Subtracting the second equation from the first and rearranging, we get

$$\mathbf{v} - \mathbf{w} = \mathbf{w}^\perp - \mathbf{v}^\perp.$$

The left side is an element of $\mathcal{W}$, but the right-side vector is orthogonal to it, since both vectors are elements of the subspace $\mathcal{W}^\perp$. However, this can only happen if both sides are equal to the zero vector, thus $\mathbf{v} = \mathbf{w}$. $\square$

**Example 7.50.** *Consider the subspace $\mathcal{W}$ of the space $\mathbb{R}^4$ spanned by the vectors $(1, -1, 1, 0)$ and $(0, 1, -1, 0)$, and let $\mathbf{x} = (8, 4, 2, 1)$. Decompose the vector $\mathbf{x}$ into the sum of a vector in $\mathcal{W}$ and a vector orthogonal to $\mathcal{W}$.*

Solution. The matrix of the orthogonal projection onto $\mathcal{W}$ is $\mathbf{P} = \mathbf{W}(\mathbf{W}^{\mathsf{T}}\mathbf{W})^{-1}\mathbf{W}^{\mathsf{T}}$, where the two columns of $\mathbf{W}$ are the two given basis vectors, thus

$$\mathbf{W} = \begin{bmatrix} 1 & 0 \\ -1 & 1 \\ 1 & -1 \\ 0 & 0 \end{bmatrix}, \text{ from which } \mathbf{P}\mathbf{x} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1/2 & -1/2 & 0 \\ 0 & -1/2 & 1/2 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 8 \\ 4 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 8 \\ 1 \\ -1 \\ 0 \end{bmatrix}.$$

Thus $\operatorname{proj}_{\mathcal{W}}\mathbf{x} = \mathbf{P}\mathbf{x} = (8, 1, -1, 0)$ and $\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x} = (0, 3, 3, 1)$. It can be verified by a simple calculation that $(8, 1, -1, 0) \in \mathcal{W}$ and that $(0, 3, 3, 1) \perp \mathcal{W}$, that is, it is orthogonal to each of the basis vectors spanning $\mathcal{W}$. $\square$

### Optimal solution of a system of equations

With the concept of orthogonal projection onto a subspace and the best approximation, we have obtained a tool with which

the theory of systems of linear equations can be made complete at this level. In practice, it very often happens that we perform measurements to determine unknown quantities, but inevitable measurement errors lead to a contradictory system of equations. How can the solution, which certainly exists in reality, be determined in this case from a contradictory, i.e., unsolvable system of equations?

We know that the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ is solvable if and only if $\mathbf{b}$ is in the column space, i.e., in $\mathcal{O}(\mathbf{A})$. It is a natural idea to solve the system of equations with the column space vector $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ that best approximates it, instead of $\mathbf{b}$. This will surely be solvable, and it provides solutions for which $\mathbf{A}\mathbf{x}$ will not be equal to $\mathbf{b}$, but is at the smallest possible distance from it. Such solutions are called the *optimal solutions* or the *least squares solutions* of the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$. It is clear that if a system of equations is consistent, then its optimal solutions coincide with its solutions. From this definition we also see what to do if a system of equations is contradictory (i.e., inconsistent): determine the vector $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$, and solve the system of equations $\mathbf{A}\hat{\mathbf{x}} = \hat{\mathbf{b}}$ instead of $\mathbf{A}\mathbf{x} = \mathbf{b}$. This is a good starting point, but a simpler method also presents itself.

> *It is a natural idea to solve the system of equations with $\hat{\mathbf{b}}$ instead of $\mathbf{b}$, but is there no better idea, after all why exactly does this orthogonal projection give us the "best solution" and what does "best" even mean here. The complete answer is given by the Gauss–Markov theorem, which requires prerequisite knowledge of probability theory.*

**Theorem 7.51 (Optimal solution of a system of equations).** *The optimal solutions of the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ coincide with the solutions of the system of equations*

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b} \tag{7.11}$$

*Among these, exactly one falls into the row space of the matrix $\mathbf{A}$, the one with the smallest absolute value.*

> *The system of equations (7.11) is called the *system of normal equations* associated with the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$. (The term *normal equation* is also correct if we think of the expression (7.11) as a matrix equation.)*

Proof. The optimal solutions of the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ coincide with the solutions of the system of equations $\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$. We will therefore look for these.

First, we show that if $\hat{\mathbf{x}}$ is an optimal solution, then $\hat{\mathbf{x}}$ satisfies equation (7.11). Since $\mathbf{b} - \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ is orthogonal to $\mathcal{O}(\mathbf{A})$ due to the definition of projection, it is in the null space of $\mathbf{A}^{\mathsf{T}}$, thus

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}) = \mathbf{0}.$$

On the other hand, using that $\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$, we obtain

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0},$$

that is, after rearranging,

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b}.$$

Next, we show that every vector $\hat{\mathbf{x}}$ satisfying equation (7.11) is an optimal solution. If (7.11) holds, then

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0},$$

so $\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}$ is in the null space of $\mathbf{A}^{\mathsf{T}}$, thus it is orthogonal to the column space of $\mathbf{A}$. Therefore, the decomposition

$$\mathbf{b} = \mathbf{A}\hat{\mathbf{x}} + (\mathbf{b} - \mathbf{A}\hat{\mathbf{x}})$$

is into two vectors falling into orthogonal complementary subspaces, since $\mathbf{A}\hat{\mathbf{x}}$ falls into the column space of $\mathbf{A}$. Thus by the definition of orthogonal projection,

$$\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b},$$

that is, $\hat{\mathbf{x}}$ is an optimal solution.

Finally, we must show that among the solutions there is exactly one that falls into the row space of $\mathbf{A}$. This immediately follows from the fact that among the solutions of the normal equation there is exactly one that falls into the row space of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$, and the row spaces of $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ and $\mathbf{A}$ coincide. $\square$

**Example 7.52 (Optimal solutions of a system of equations).** *Determine the optimal solutions of the system of equations*

$$\begin{alignedat}{9}
& {} & y &{} + {}& z &{} = 3 \\
x &{} + {}& y &{} + {}& 2z &{} = 2 \\
x &{} & &{} + {}& z &{} = 2
\end{alignedat}$$

*and select the one with the minimal absolute value among them!*

Solution. The system of equations cannot be solved, which can be read from the reduced row echelon form of its augmented matrix:

$$\left[\begin{array}{ccc|c} 0 & 1 & 1 & 3 \\ 1 & 1 & 2 & 2 \\ 1 & 0 & 1 & 2 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array}\right]$$

Multiplying the equation from the left by the transpose of the coefficient matrix, we obtain the normal equation:

$$\begin{bmatrix} 2 & 1 & 3 \\ 1 & 2 & 3 \\ 3 & 3 & 6 \end{bmatrix} \mathbf{x} = \begin{bmatrix} 4 \\ 5 \\ 9 \end{bmatrix}.$$

All of its solutions from the reduced row echelon form of the augmented matrix are

$$\left[\begin{array}{ccc|c} 2 & 1 & 3 & 4 \\ 1 & 2 & 3 & 5 \\ 3 & 3 & 6 & 9 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ & & & \end{array}\right], \quad \text{thus} \quad \mathbf{x} = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix} t.$$

To find the solution falling into the row space, we apply the method seen in Example 3.40 by extending the original system of equations:

$$\left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ -1 & -1 & 1 & 0 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right].$$

The solution falling into the row space is $(0, 1, 1)$, that is, all solutions written with this are:

$$\mathbf{x} = \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix} t.$$

$\square$

### Linear and polynomial regression

One important application of optimal solutions of systems of equations is linear regression. Suppose that there is a relationship $y = a + bx$ between two variable quantities, $x$ and $y$. We perform measurements, the result of which is a sequence of pairs $(x_i, y_i)$ ($i = 1, 2, \ldots n$). We are looking for the values of $a$ and $b$ that satisfy all of the equations $y_i = a + bx_i$ ($i = 1, 2, \ldots n$)! This is a system of linear equations with two unknowns, whose matrix form is:

$$\begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}.$$

The corresponding system of normal equations is

$$\begin{bmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \end{bmatrix} \begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix},$$

which, after performing the matrix operations, leads to the following form:

$$\begin{bmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}.$$

Its solutions $\hat{a}$ and $\hat{b}$ give the optimal solution of the original system of equations! The line $y = \hat{a} + \hat{b}x$ obtained in this way is called the *regression line*, which is the best-fitting line to the given data according to the principle of least squares.

In summary:

**Proposition 7.53 (Linear regression).** *The parameters of the regression line with equation $y = \hat{a} + \hat{b}x$ associated with the pairs $(x_i, y_i)$ ($i = 1, 2, \ldots n$) satisfy the equation*

$$\begin{bmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}$$

*This is uniquely solvable if there are at least two distinct $x_i$ values.*

Proof. We have already proved the relationship above, only the proof of unique solvability remains. According to the inequality between the arithmetic and quadratic means, for any real $x_i$ ($i = 1, 2 \ldots, n$)

$$\frac{x_1 + \cdots + x_n}{n} \le \sqrt{\frac{x_1^2 + \cdots + x_n^2}{n}},$$

and equality can hold only if $x_1 = \cdots = x_n$. Since the determinant of the coefficient matrix is $n \sum x_i^2 - (\sum x_i)^2$, because of the relationship between the arithmetic and quadratic means, this can be 0 only if the $x_i$ values are all identical. $\square$

Linear regression is frequently applicable in the case of other functional relationships as well:

**Proposition 7.54 (Linearizable regression models).** *If any of the functional relationships according to the table below holds between the quantities $x$ and $y$, then with the substitution given in the table the relationship becomes of the form $Y = a + bX$, i.e., linear, so linear regression can be performed.*

| Model | Functional relationship | Substitution | | |
|---|---|---|---|---|
| *power function* | $y = cx^b$ | $X = \ln x$ | $Y = \ln y$ | $a = \ln c$ |
| *exponential* | $y = ce^{bx}$ | $X = x$ | $Y = \ln y$ | $a = \ln c$ |
| *logarithmic* | $y = a + b\ln x$ | $X = \ln x$ | $Y = y$ | |

Proof. Taking the logarithm of both sides of the equality $y = cx^b$, we obtain the equality $\ln y = \ln c + b\ln x$, which with the given substitutions gives the expression $Y = a + bX$. Similarly, taking the logarithm of the equation $y = ce^{bx}$ we get the equation $\ln y = \ln c + bx$. The necessary substitution is even more obvious in the third case. $\square$

Regression can be performed with other functions in a similar way, among these we highlight the polynomial one:

**Example 7.55.** *Find an optimal estimate for the coefficients of the polynomial $a_0 + a_1 x + \cdots + a_k x^k$ using the method of least squares, if we know the sequence of pairs $(x_i, y_i)$ ($i = 1, 2, \ldots n$).*

Solution. We are looking for the solution of the system of $n$ equations with $k + 1$ unknowns

$$\begin{aligned}
a_0 + a_1 x_1 + \ldots + a_k x_1^k &= y_1 \\
a_0 + a_1 x_2 + \ldots + a_k x_2^k &= y_2 \\
\vdots \qquad \vdots \qquad\qquad \vdots \quad &\;\; \vdots \\
a_0 + a_1 x_n + \ldots + a_k x_n^k &= y_n
\end{aligned}$$

for the unknowns $a_0$, $a_1, \ldots, a_k$. Its matrix form is

$$\begin{bmatrix} 1 & x_1 & \ldots & x_1^k \\ 1 & x_2 & \ldots & x_2^k \\ \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & \ldots & x_n^k \end{bmatrix} \begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_k \end{bmatrix} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}.$$

If the coefficient matrix is denoted by $\mathbf{X}$, the vector of unknowns by $\mathbf{a}$, and the vector of $y_i$ values by $\mathbf{y}$, then the system of equations can be written in the form $\mathbf{X}\mathbf{a} = \mathbf{y}$. This is certainly solvable, and uniquely so, if the $x_i$ values are distinct and $n = k + 1$, because in this case the coefficient matrix is square, its determinant is a Vandermonde determinant, whose value is not 0. In other cases, the system of normal equations must be written down, whose matrix product form is

$$\mathbf{X}^{\mathsf{T}}\mathbf{X}\mathbf{a} = \mathbf{X}^{\mathsf{T}}\mathbf{y}.$$

This is uniquely solvable if $\mathbf{X}$ has full column rank, because then $\mathbf{X}^{\mathsf{T}}\mathbf{X}$ is invertible, so the solution is

$$\mathbf{a} = (\mathbf{X}^{\mathsf{T}}\mathbf{X})^{-1}\mathbf{X}^{\mathsf{T}}\mathbf{y}.$$

This holds if and only if there are at least $k + 1$ distinct $x_i$ values, because then there is a $(k + 1) \times (k + 1)$ submatrix with non-zero determinant in $\mathbf{X}$, namely the Vandermonde matrix consisting of the rows corresponding to the distinct $x_i$ values. $\square$

### Projection

If $\mathcal{V}$ and $\mathcal{W}$ are complementary subspaces, then the concept of projection onto the subspace $\mathcal{V}$ and parallel to the subspace $\mathcal{W}$ can be naturally interpreted. The set of these transformations coincides with the set of linear transformations satisfying the condition $P^2 = P$.

**Definition 7.56 (Projection onto a subspace).** *We know that if $\mathbb{R}^n = \mathcal{V} \oplus \mathcal{W}$, i.e., $\mathcal{V}$ and $\mathcal{W}$ are complementary subspaces, then any vector $\mathbf{u}$ in the space is uniquely expressed in the form $\mathbf{u} = \mathbf{v} + \mathbf{w}$, where $\mathbf{v} \in \mathcal{V}$, $\mathbf{w} \in \mathcal{W}$. We say that the vector $\mathbf{v}$ is the projection of the vector $\mathbf{u}$ onto the subspace $\mathcal{V}$ along $\mathcal{W}$, or the projection onto $\mathcal{V}$ parallel to $\mathcal{W}$.*

> *Naturally, in the same way, the vector $\mathbf{w}$ is the projection of the vector $\mathbf{u}$ onto $\mathcal{W}$ parallel to $\mathcal{V}$. It is easy to see that the mapping $P : \mathbf{u} \mapsto \mathbf{v}$ is a linear transformation (verify!). This linear transformation is called a *projection*.*

> *Every projection $P$ is a projection onto $\operatorname{Im} P$ along $\operatorname{Ker} P$.*

Let us determine the matrix of this transformation! According to the remark after Theorem 7.41, the sum of the dimensions of $\mathcal{V}$ and $\mathcal{W}$ is $n$, and if a basis of $\mathcal{V}$ is $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\}$, and a basis of $\mathcal{W}$ is $\{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_{n-r}\}$, then the two bases are disjoint (their intersection is empty) and their union is a basis of the whole space. From these vectors we form the following matrix:

$$\mathbf{U} = [\mathbf{v}_1 \; \mathbf{v}_2 \; \ldots \; \mathbf{v}_r | \mathbf{w}_1 \; \mathbf{w}_2 \; \ldots \; \mathbf{w}_{n-r}] = [\mathbf{V} | \mathbf{W}].$$

Since $P\mathbf{v}_i = \mathbf{v}_i$ ($i = 1, 2, \ldots, r$) and $P\mathbf{w}_j = \mathbf{0}$ ($j = 1, 2, \ldots, n - r$), for the matrix $\mathbf{P}$ of the mapping $P$ we have

$$\mathbf{P}\mathbf{U} = \mathbf{P}[\mathbf{V} | \mathbf{W}] = [\mathbf{P}\mathbf{V} | \mathbf{P}\mathbf{W}] = [\mathbf{V} | \mathbf{O}].$$

And since $\mathbf{U}$ is invertible, the matrix of the projection is

$$\mathbf{P} = [\mathbf{V} | \mathbf{O}]\mathbf{U}^{-1} = [\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1}.$$

**Theorem 7.57 (Properties of a projection).** *Let $P : \mathbb{R}^n \to \mathbb{R}^n$ be a projection. Then*

*a) $\mathbb{R}^n$ has a basis in which its matrix is*

$$\mathbf{P} = \operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0).$$

*b) $I - P$ is also a projection, namely $\operatorname{Ker}(I - P) = \operatorname{Im} P$, $\operatorname{Im}(I - P) = \operatorname{Ker} P$,*

*c) $\operatorname{r}(P) = \operatorname{trace}(P)$.*

Proof. *a)* With the above notations, in the basis $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r, \mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_{n-r}\}$ the matrix is obviously $\operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0)$. This can also be seen from the transformation

$$\begin{aligned}
[\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1} &= [\mathbf{V} | \mathbf{W}] \begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} [\mathbf{V} | \mathbf{W}]^{-1} \\
&= [\mathbf{V} | \mathbf{W}] \operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0)[\mathbf{V} | \mathbf{W}]^{-1}
\end{aligned}$$

$\square$

*b)* If $\mathbf{u} = \mathbf{v} + \mathbf{w}$, and $P : \mathbf{u} \mapsto \mathbf{v}$ is the projection onto $\mathcal{V}$ along $\mathcal{W}$, then $I - P : \mathbf{u} \mapsto \mathbf{u} - \mathbf{v} = \mathbf{w}$ is the projection onto $\mathcal{W}$ along $\mathcal{V}$. It is clear that $\operatorname{Im} P = \mathcal{V}$, $\operatorname{Ker} P = \mathcal{W}$, and thus $\operatorname{Im}(I - P) = \mathcal{W}$, $\operatorname{Ker}(I - P) = \mathcal{V}$.

*c)* $\operatorname{r}(\mathbf{P}) = \operatorname{trace}(\mathbf{P})$, thus $\operatorname{r}(P) = \operatorname{trace}(P)$.

**Example 7.58 (Matrix of a projection).** *Determine the matrix of the projection of the space $\mathbb{R}^3$ onto the subspace $\mathcal{V} = \operatorname{span}((0, 2, -1), (2, 0, -1))$ parallel to the subspace $\mathcal{W} = \operatorname{span}((1, -2, 1))$, and the projection onto $\mathcal{W}$ parallel to $\mathcal{V}$! (see also Example 7.26!)*

Solution. Since

$$\mathbf{V} = \begin{bmatrix} 0 & 2 \\ 2 & 0 \\ -1 & -1 \end{bmatrix}, \quad \mathbf{W} = \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix},$$

the matrix of the transformation is, after a simple substitution:

$$\begin{aligned}
\mathbf{P} = [\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1} &= \begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 0 \\ -1 & -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 2 & 1 \\ 2 & 0 & -2 \\ -1 & -1 & 1 \end{bmatrix}^{-1} \\
&= \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix}.
\end{aligned}$$

In Example 7.26, we asked the same question, formulated differently. Moreover, the solution is essentially the same, only we have now looked for a different basis for the subspace $\mathcal{V}$. The matrix of the other projection is

$$\mathbf{I} - \mathbf{P} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 2 \\ -2 & -2 & -4 \\ 1 & 1 & 2 \end{bmatrix}.$$

$\square$

**Theorem 7.59 (Equivalent definition of projection).** *The linear transformation $P : \mathbb{R}^n \to \mathbb{R}^n$ is a projection if and only if $P^2 = P$, i.e., if $P$ is idempotent.*

Proof. According to the definition of projection, $P\mathbf{u} = \mathbf{v}$, where $\mathbf{u} = \mathbf{v} + \mathbf{w}$ and $\mathbf{v} \in \mathcal{V}$, $\mathbf{w} \in \mathcal{W}$. Since $\mathbf{v} = \mathbf{v} + \mathbf{0}$ is the decomposition of $\mathbf{v}$, we have $P\mathbf{u} = \mathbf{v}$, so $P^2\mathbf{u} = P\mathbf{v} = \mathbf{v}$, that is, for every vector $\mathbf{u}$ we have $P^2\mathbf{u} = P\mathbf{u}$, thus $P^2 = P$.

Every vector $\mathbf{u}$ can be decomposed as follows: $\mathbf{u} = P\mathbf{u} + (\mathbf{u} - P\mathbf{u})$. Here $P\mathbf{u} \in \operatorname{Im} P$, $\mathbf{u} - P\mathbf{u} \in \operatorname{Ker} P$, because $P(\mathbf{u} - P\mathbf{u}) = P\mathbf{u} - P^2\mathbf{u} = \mathbf{0}$. Thus $\mathbb{R}^n = \operatorname{Im} P + \operatorname{Ker} P$. $\operatorname{Im} P \cap \operatorname{Ker} P = \{\mathbf{0}\}$, because if $\mathbf{u} \in \operatorname{Im} P \cap \operatorname{Ker} P$, then since $\mathbf{u} \in \operatorname{Im} P$ there exists an $\mathbf{x}$ such that $P\mathbf{x} = \mathbf{u}$, so $P^2\mathbf{x} = P\mathbf{u} = \mathbf{0}$, on the other hand, due to $P^2 = P$, we have $P^2\mathbf{x} = P\mathbf{x} = \mathbf{u}$. Thus $\mathbf{u} = \mathbf{0}$, which means $\operatorname{Im} P \cap \operatorname{Ker} P = \{\mathbf{0}\}$. According to this, $\mathbb{R}^n = \operatorname{Im} P \oplus \operatorname{Ker} P$. Therefore let $\mathcal{V} = \operatorname{Im} P$, $\mathcal{W} = \operatorname{Ker} P$. Every vector $\mathbf{u}$ can be uniquely written in the form $\mathbf{u} = \mathbf{v} + \mathbf{w}$, where $\mathbf{v} \in \mathcal{V}$ and $\mathbf{w} \in \mathcal{W}$. Since $\mathcal{V} = \operatorname{Im} P$, there is an $\mathbf{x}$ such that $\mathbf{v} = P\mathbf{x}$. Therefore $\mathbf{u} = P\mathbf{x} + \mathbf{w}$, thus $P\mathbf{u} = P^2\mathbf{x} + P\mathbf{w} = P\mathbf{x} + \mathbf{0} = \mathbf{v}$. So $P$ is a projection. $\square$

In Theorem 7.46 we saw that a matrix $\mathbf{P}$ is the matrix of an orthogonal projection if and only if $\mathbf{P}^2 = \mathbf{P}$ and $\mathbf{P}^{\mathsf{T}} = \mathbf{P}$, i.e., if $\mathbf{P}$ is idempotent and symmetric. Thus the following statement is obvious:

**Corollary 7.60 (When is a projection orthogonal?).** *Let $\mathbf{P}$ be the matrix of a projection. $\mathbf{P}$ is the matrix of an orthogonal projection if and only if $\mathbf{P}$ is symmetric.*

### Exercises

**7.18.** Verify the formula (7.9) for the matrix of orthogonal projection onto a line in the plane by determining the projection of the vectors $\mathbf{i}$ and $\mathbf{j}$! We can calculate in two ways: *a)* let the angle of inclination of the line with the $x$-axis be $\alpha$, *b)* let the direction vector of the line be $(b_1, b_2)$. Compare the two results and prove their equivalence.

**7.19. When is a projection orthogonal?** Let $P : \mathbb{R}^n \to \mathbb{R}^n$ be a projection. Show that $P$ is an orthogonal projection if and only if $|P\mathbf{v}| \le |\mathbf{v}|$ for all vectors $\mathbf{v} \in \mathbb{R}^n$.

## Pseudoinverse[^p295_1]

We are looking for a generalization of the matrix inverse - called pseudoinverse - which will be able to provide the optimal solution $\hat{\mathbf{x}}$ of minimum absolute value for any system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ (consistent or inconsistent) in a manner similar to the matrix inverse.

### The concept of the pseudoinverse

For any real matrix $\mathbf{A}$, we are looking for a matrix denoted by $\mathbf{A}^+$ that gives the optimal solution of minimum absolute value for the equation $\mathbf{A}\mathbf{x} = \mathbf{b}$ with the formula $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$.

We know that the matrix mapping $A : \mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ maps the row space bijectively onto the column space. Thus, if $\mathbf{A}^+$ inverts the above mapping between the row space and the column space, then for the solution $\hat{\mathbf{x}}$ falling in the row space of a consistent equation $\mathbf{A}\mathbf{x} = \mathbf{b}$, we have $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$. On the other hand, if $\mathbf{A}\mathbf{x} = \mathbf{b}$ is inconsistent, then using the notation $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$, the equation $\mathbf{A}\mathbf{x} = \hat{\mathbf{b}}$ is consistent, so the equality $\mathbf{A}^+\mathbf{b} = \mathbf{A}^+\hat{\mathbf{b}} = \hat{\mathbf{x}}$ must hold. This means that $\mathbf{A}^+(\mathbf{b} - \hat{\mathbf{b}}) = \mathbf{0}$, i.e., for every vector $\mathbf{z}$ in $\mathcal{N}(\mathbf{A}^{\mathsf{T}})$, we have $\mathbf{A}^+\mathbf{z} = \mathbf{0}$. All of this leads to the following definition.

> *Figure 7.20. The bijective mapping between the row space and column space of the matrix $\mathbf{A}$ is the basis for the concept of the pseudoinverse.*

**Definition 7.61 (The Moore-Penrose pseudoinverse).** *Let $\mathbf{A}$ be an $m \times n$ real matrix. Its pseudoinverse, or Moore-Penrose pseudoinverse, is the matrix denoted by $\mathbf{A}^+$, for which*
*a) for every vector $\mathbf{x}$ in the row space, $\mathbf{A}^+(\mathbf{A}\mathbf{x}) = \mathbf{x}$, and furthermore*
*b) for every vector $\mathbf{z}$ orthogonal to the column space, $\mathbf{A}^+\mathbf{z} = \mathbf{0}$.*

> *It is immediately apparent that the pseudoinverse of an $m \times n$ matrix is $n \times m$.*

> *Since $\mathbf{A}\mathbf{x} \in \mathcal{O}(\mathbf{A})$, and the vector $\mathbf{z}$ in the definition is an element of $\mathcal{O}(\mathbf{A})^{\perp}$, we know the effect of the matrix mapping corresponding to $\mathbf{A}^+$ on the subspace $\mathcal{O}(\mathbf{A})$ and its orthogonal complement. This mapping is linear on the specified subspaces, since on one it is the inverse of a linear mapping, and on the other it is the zero mapping. From this it follows that the mapping given in the definition can be uniquely extended to the whole space while preserving linearity, since every vector in the space can be uniquely represented as the sum of a vector in $\mathcal{O}(\mathbf{A})$ and a vector orthogonal to it. It follows from this that the mapping in the definition exists, is unique and linear, thus it has a matrix.*

> *It also immediately follows from the definition that $\mathcal{N}(\mathbf{A}^+) = \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, and $\mathcal{S}(\mathbf{A}^+) = \mathcal{N}(\mathbf{A}^+)^{\perp}$, thus $\mathcal{S}(\mathbf{A}^+) = \mathcal{S}(\mathbf{A}^{\mathsf{T}}) = \mathcal{O}(\mathbf{A})$.*

**Example 7.62 (Some pseudoinverses).** *Based on the definition, verify the following relationships!*
*a) $\mathbf{A}^+ = \mathbf{A}^{-1}$, if $\mathbf{A}$ is invertible,*
*b) $\mathbf{O}_{m \times n}^+ = \mathbf{O}_{n \times m}$,*

[^p295_1]: In the history of mathematics, the concept of the pseudoinverse has appeared multiple times, independently of each other. There are also several other generalizations of the matrix inverse concept, which we do not discuss here. In what follows, by pseudoinverse we will mean the Moore-Penrose pseudoinverse defined here.
*c) $[a]^+ = [1/a]$, if $a \ne 0$, and $[0]^+ = [0]$,*
*d) $(\mathbf{A}^+)^+ = \mathbf{A}$,*
*e) if $a_{ii} \ne 0$ ($i = 1, 2, \ldots, r$), then*

$$\left[\begin{array}{cccc|c} a_{11} & 0 & \ldots & 0 & \\ 0 & a_{22} & \ldots & 0 & \\ \vdots & \vdots & \ddots & \vdots & \mathbf{O} \\ 0 & 0 & \ldots & a_{rr} & \\ \hline & & \mathbf{O} & & \mathbf{O} \end{array}\right]_{m \times n}^{+} = \left[\begin{array}{cccc|c} \frac{1}{a_{11}} & 0 & \ldots & 0 & \\ 0 & \frac{1}{a_{22}} & \ldots & 0 & \\ \vdots & \vdots & \ddots & \vdots & \mathbf{O} \\ 0 & 0 & \ldots & \frac{1}{a_{rr}} & \\ \hline & & \mathbf{O} & & \mathbf{O} \end{array}\right]_{n \times m} \tag{7.12}$$

> *Point a) of this example shows that the name pseudoinverse is not really good, since this is not about a pseudo or false inverse, but a generalization of the inverse, so generalized inverse is a more correct term. It is customary to use this as well, but the term Moore-Penrose pseudoinverse is much more widespread (in English literature, the word 'pseudoinverse' is also mostly used).*

Solution. *a)* If $\mathbf{A}$ is an $n \times n$ invertible matrix, then both its row space and column space are the entire $n$-dimensional space, and for any vector $\mathbf{x}$, $\mathbf{A}^+\mathbf{A}\mathbf{x} = \mathbf{x}$, so $\mathbf{A}^+ = \mathbf{A}^{-1}$.

*b)* The column space of a zero matrix consists of the zero vector, so its pseudoinverse maps its orthogonal complement, which is the whole space, to the zero vector, so $\mathbf{O}_{m \times n}^+ = \mathbf{O}_{n \times m}$.

*c)* It immediately follows from the previous two results.

*d)* If $\mathbf{x} \in \mathcal{S}(\mathbf{A})$ and $\mathbf{y} = \mathbf{A}\mathbf{x}$, then $\mathbf{A}^+\mathbf{y} = \mathbf{x}$, and since $\mathbf{y} \in \mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^+)$, we have $(\mathbf{A}^+)^+\mathbf{x} = \mathbf{y}$. And if $\mathbf{z} \perp \mathcal{O}(\mathbf{A}^+) = \mathcal{S}(\mathbf{A})$, then $(\mathbf{A}^+)^+\mathbf{z} = \mathbf{0}$, that is, the mappings corresponding to the matrices $\mathbf{A}$ and $(\mathbf{A}^+)^+$ are identical on the subspaces $\mathcal{S}(\mathbf{A})$ and $\mathcal{N}(\mathbf{A})$, and thus on the space spanned by them, i.e., on $\mathbb{R}^n$ as well. So $\mathbf{A} = (\mathbf{A}^+)^+$.

*e)* Let the elements of the standard basis of $\mathbb{R}^n$ be denoted by $\mathbf{e}_i$ ($i = 1, 2, \ldots, n$), and the elements of the standard basis of $\mathbb{R}^m$ by $\mathbf{f}_i$ ($i = 1, 2, \ldots, m$). If $a_{ii} \ne 0$, then $\mathbf{A}\mathbf{e}_i = a_{ii}\mathbf{f}_i$, and $\mathbf{e}_i$ is in the row space, $\mathbf{f}_i$ is in the column space. If $a_{ii} = 0$, then $\mathbf{A}\mathbf{e}_i = \mathbf{0}$. Thus $\mathbf{A}^+\mathbf{f}_i = 1/a_{ii}\mathbf{e}_i$ if $a_{ii} \ne 0$ and $\mathbf{A}^+\mathbf{f}_i = \mathbf{0}$ otherwise. These are the column vectors of the matrix $\mathbf{A}^+$, so it has $1/a_{ii}$ on its main diagonal if $a_{ii} \ne 0$, and 0 otherwise. Think about why it is enough to specify the effect of $\mathbf{A}^+$ only on the basis elements? $\square$

The existence and uniqueness of the pseudoinverse is a direct consequence of the definition. Now we construct its matrix.

**Theorem 7.63 (The matrix of the pseudoinverse).** *If the real matrix $\mathbf{A}$ has full column rank, then*

$$\mathbf{A}^+ = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}, \tag{7.13}$$

*if it has full row rank, then*

$$\mathbf{A}^+ = \mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}. \tag{7.14}$$

*Let $\mathbf{A} = \mathbf{B}\mathbf{C}$, where $\mathbf{B}$ is a full column rank matrix and $\mathbf{C}$ is a full row rank matrix (such a decomposition always exists, e.g., the basis decomposition). Then*

$$\mathbf{A}^+ = \mathbf{C}^+\mathbf{B}^+ = \mathbf{C}^{\mathsf{T}}(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} \tag{7.15}$$

$$\phantom{\mathbf{A}^+ = \mathbf{C}^+\mathbf{B}^+} = \mathbf{C}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{A}\mathbf{C}^{\mathsf{T}})^{-1}\mathbf{B}^{\mathsf{T}}. \tag{7.16}$$

Proof. If $\mathbf{A}$ has full column rank, then every vector of its domain is in the row space, so for every vector $\mathbf{x}$, we must get back $\mathbf{x}$ from the vector $\mathbf{A}\mathbf{x}$ by multiplying with a suitable matrix. Since for a full column rank matrix $\mathbf{A}$, $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ is invertible, the matrix in (7.13) is suitable, because

$$(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}.$$

We still need to show that if $\mathbf{z}$ is orthogonal to the column space, that is, if $\mathbf{z} \in \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, meaning if $\mathbf{A}^{\mathsf{T}}\mathbf{z} = \mathbf{0}$, then $\mathbf{A}^+\mathbf{z} = \mathbf{0}$, but this is indeed true, since in this case $(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{z} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{0} = \mathbf{0}$.

If $\mathbf{A}$ has full row rank, then the column space is equal to the whole space, so for any vector $\mathbf{y}$ in the space, the system of equations $\mathbf{A}\mathbf{x} = \mathbf{y}$ is consistent. If $\hat{\mathbf{x}}$ denotes the unique solution falling in the row space, then for any other solution $\mathbf{x}$, $\operatorname{proj}_{\mathcal{S}(\mathbf{A})} \mathbf{x} = \hat{\mathbf{x}}$. Thus, for $\mathbf{A}^+$, the relation $\mathbf{A}^+\mathbf{y} = \hat{\mathbf{x}}$ must hold. And this holds, because

$$\operatorname{proj}_{\mathcal{S}(\mathbf{A})} \mathbf{x} = \mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}\mathbf{A}\mathbf{x} = \left(\mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}\right)(\mathbf{A}\mathbf{x}) = \mathbf{A}^+\mathbf{y}.$$

Finally, in the general case let $\mathbf{A} = \mathbf{B}\mathbf{C}$, furthermore $\mathbf{y} = \mathbf{A}\mathbf{x}$, $\mathbf{w} = \mathbf{C}\mathbf{x}$ and $\mathbf{y} = \mathbf{B}\mathbf{w}$. Since $\mathbf{B}$ has full column rank, and $\mathbf{C}$ has full row rank, therefore $\mathbf{C}^+\mathbf{B}^+\mathbf{y} = \mathbf{C}^+\mathbf{w} = \mathbf{x}$, which means $\mathbf{C}^+\mathbf{B}^+$ satisfies condition *a)* of the definition. Condition *b)* is also satisfied, since the column spaces of $\mathbf{A}$ and $\mathbf{B}$ coincide, thus $\mathbf{B}^+\mathbf{z} = \mathbf{0}$, so $\mathbf{C}^+\mathbf{B}^+\mathbf{z} = \mathbf{0}$ also holds. The formulas (7.15) and (7.16) immediately follow by substitution, and then by the transformation $(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1} = (\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1} = (\mathbf{B}^{\mathsf{T}}\mathbf{A}\mathbf{C}^{\mathsf{T}})^{-1}$. $\square$

> *The formula (7.13) is in perfect harmony with the statement of Theorem 7.51 on the optimal solution of a system of equations. There we concluded that the optimal solutions of the system of equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ coincide with the solutions of the system of equations $\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$. And if $\mathbf{A}$ has full column rank, then $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ is invertible, so the optimal solution is $\hat{\mathbf{x}} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{b}$, that is, according to formula (7.13), $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$, as we set out as our goal at the beginning of this section.*

> *The relation $(\mathbf{X}\mathbf{Y})^+ = \mathbf{Y}^+\mathbf{X}^+$ is generally not true for the pseudoinverse. We only proved that it holds if $\mathbf{X}$ has full column rank and $\mathbf{Y}$ has full row rank. E.g., $\left(\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}\right)^+ \ne \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}^+ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+$ (see Exercise 7.23).*

> *Using formula (7.15), it can be proved (see Exercise 7.27) that the pseudoinverse of a transposed matrix is equal to the transpose of its pseudoinverse, that is*

$$(\mathbf{A}^{\mathsf{T}})^+ = (\mathbf{A}^+)^{\mathsf{T}}. \tag{7.17}$$

**Example 7.64 (Calculation of the pseudoinverse).** *Calculate the pseudoinverse of the matrices*

$$\mathbf{B} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \quad \text{and} \quad \mathbf{M} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & 0 & 1 \end{bmatrix}!$$

Solution. Since $\mathbf{B}$ has full column rank, according to formula (7.13)

$$\begin{aligned}
\mathbf{B}^+ = (\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} &= \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}^{-1} \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} \\
&= \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{bmatrix} \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix}.
\end{aligned}$$

The matrix $\mathbf{C}$ has full row rank, so according to formula (7.14)

$$\begin{aligned}
\mathbf{C}^+ = \mathbf{C}^{\mathsf{T}}(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1} &= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}^{-1} \\
&= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{bmatrix} = \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \\ 1/3 & 1/3 \end{bmatrix}.
\end{aligned}$$

To calculate $\mathbf{M}^+$, as a first step we determine the basis decomposition of $\mathbf{M}$. Since $\operatorname{rref}(\mathbf{M}) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$, and the first two columns of $\mathbf{M}$ are basis columns, therefore

$$\mathbf{M} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}.$$

With the notations used in the first half of the exercise, $\mathbf{M} = \mathbf{B}\mathbf{C}$, thus calculating with formula (7.15) - and using the previously calculated pseudoinverses

$$\mathbf{M}^+ = \mathbf{C}^+\mathbf{B}^+ = \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \\ 1/3 & 1/3 \end{bmatrix} \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix} = \frac{1}{9}\begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}$$

We can also calculate directly with formula (7.16):

$$
\begin{aligned}
\mathbf{M}^+ &= \mathbf{C}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{M}\mathbf{C}^{\mathsf{T}})^{-1}\mathbf{B}^{\mathsf{T}} \\
&= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}
\left( \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \right)^{-1}
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} \\
&= \frac{1}{9} \begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}
\end{aligned}
$$

$\square$

*Properties of the pseudoinverse* The inverse of the matrix $\mathbf{A}$ was defined by the equation $\mathbf{AX} = \mathbf{I}$. We are looking for similar equalities for the pseudoinverse as well. Meanwhile, we will also discover the important fact that $\mathbf{A}^+\mathbf{A}$ and $\mathbf{AA}^+$ are both matrices of an orthogonal projection.

We cannot guarantee that the matrices $\mathbf{AA}^+$ and $\mathbf{A}^+\mathbf{A}$ will be equal to the identity matrix, but they are at least symmetric, and they behave like an identity matrix with respect to multiplication by $\mathbf{A}$ and $\mathbf{A}^+$, respectively, that is, $\mathbf{AA}^+\mathbf{A} = \mathbf{A}$ and $\mathbf{A}^+\mathbf{AA}^+ = \mathbf{A}^+$. These conditions will be sufficient for the algebraic description of the pseudoinverse.

**Theorem 7.65 (Moore-Penrose theorem).** *$\mathbf{X}$ is the pseudoinverse of the real matrix $\mathbf{A}$ if and only if all of the following four conditions hold:*

*a) $\mathbf{AXA} = \mathbf{A}$,  b) $\mathbf{XAX} = \mathbf{X}$,  c) $(\mathbf{AX})^{\mathsf{T}} = \mathbf{AX}$,  d) $(\mathbf{XA})^{\mathsf{T}} = \mathbf{XA}$.*

Proof. That the pseudoinverse of $\mathbf{A}$ satisfies these four conditions can be verified by simple substitution.

$$
\begin{aligned}
\mathbf{AA}^+\mathbf{A} &= \mathbf{A}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{A} \\
&= \mathbf{B}\mathbf{R}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{R} = \mathbf{BR} = \mathbf{A} \\
\mathbf{A}^+\mathbf{AA}^+ &= \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{R}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} \\
&= \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{A}^+
\end{aligned}
$$

To check c) and d), let's simplify the expressions $\mathbf{A}^+\mathbf{A}$ and $\mathbf{AA}^+$:

$$
\begin{aligned}
\mathbf{A}^+\mathbf{A} &= (\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}})(\mathbf{BR}) = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R}, && (7.18) \\
\mathbf{AA}^+ &= (\mathbf{BR})(\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}) = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}. && (7.19)
\end{aligned}
$$

Using these, we get that

$$
\begin{aligned}
(\mathbf{A}^+\mathbf{A})^{\mathsf{T}} &= (\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R})^{\mathsf{T}} = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R} = \mathbf{A}^+\mathbf{A} \\
(\mathbf{AA}^+)^{\mathsf{T}} &= (\mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}})^{\mathsf{T}} = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{AA}^+,
\end{aligned}
$$

which proves the equalities c) and d). It only remains to be proved that at most one matrix satisfies these relationships. Suppose that $\mathbf{X}$ and $\mathbf{Y}$ both satisfy the four conditions. Then

$$
\begin{aligned}
\mathbf{AY} &\overset{a)}{=} \mathbf{AXAY} \overset{c)}{=} (\mathbf{AX})^{\mathsf{T}}(\mathbf{AY})^{\mathsf{T}} = \mathbf{X}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Y}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{X}^{\mathsf{T}}(\mathbf{AYA})^{\mathsf{T}} \overset{a)}{=} \mathbf{X}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} = (\mathbf{AX})^{\mathsf{T}} \overset{c)}{=} \mathbf{AX} && (7.20) \\
\mathbf{YA} &\overset{a)}{=} \mathbf{YAXA} \overset{d)}{=} (\mathbf{YA})^{\mathsf{T}}(\mathbf{XA})^{\mathsf{T}} = \mathbf{A}^{\mathsf{T}}\mathbf{Y}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} \\
&= (\mathbf{AYA})^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} \overset{a)}{=} \mathbf{A}^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} = (\mathbf{XA})^{\mathsf{T}} \overset{d)}{=} \mathbf{XA} && (7.21) \\
\mathbf{Y} &\overset{b)}{=} \mathbf{YAY} \overset{(7.20)}{=} \mathbf{YAX} \overset{(7.21)}{=} \mathbf{XAX} \overset{b)}{=} \mathbf{X}.
\end{aligned}
$$

With this we have proved the theorem. $\square$

**Corollary 7.66 ($\mathbf{A}^+\mathbf{A}$ and $\mathbf{AA}^+$ are orthogonal projections).** *For an arbitrary matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$*

$$
\mathbf{A}^+\mathbf{A} = \operatorname{proj}_{\mathcal{S}(\mathbf{A})} \quad \text{and} \quad \mathbf{AA}^+ = \operatorname{proj}_{\mathcal{O}(\mathbf{A})}.
$$

*So $\mathbf{A}^+\mathbf{A}$ orthogonally projects the space $\mathbb{R}^n$ onto the row space of $\mathbf{A}$, while $\mathbf{AA}^+$ orthogonally projects the space $\mathbb{R}^m$ onto the column space of $\mathbf{A}$.*

Proof. According to equality (7.18), $\mathbf{A}^+\mathbf{A} = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R}$, which, according to Theorem 7.44 on the matrix of orthogonal projection onto a subspace, is the matrix of the orthogonal projection onto the space spanned by the column vectors of $\mathbf{R}^{\mathsf{T}}$ - i.e., onto the row space. Similarly, according to equation (7.19), $\mathbf{AA}^+ = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}$, which is the matrix of the orthogonal projection onto the space spanned by the column vectors of $\mathbf{B}$ - i.e., onto the column space. $\square$

*The pseudoinverse and the optimal solution of minimum absolute value* We show that $\mathbf{A}^+$ can be used to determine the optimal solution of a system of equations $\mathbf{Ax} = \mathbf{b}$ with an arbitrary coefficient matrix, just as $\mathbf{A}^{-1}$ can be used when $\mathbf{A}$ is invertible.

**Theorem 7.67 (Optimal solution with pseudoinverse).** *Let $\mathbf{A}$ be a real matrix. For the system of equations $\mathbf{Ax} = \mathbf{b}$, $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$ is the optimal solution of minimum absolute value.*

Proof. First we show that $\mathbf{A}^+\mathbf{b}$ is an optimal solution, meaning it is a solution of the normal equation system $\mathbf{A}^{\mathsf{T}}\mathbf{Ax} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$. Thus, we need to prove that $\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+\mathbf{b} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$. For this, it is sufficient to show that $\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+ = \mathbf{A}^{\mathsf{T}}$. Let $\mathbf{A} = \mathbf{BR}$ be the basis decomposition of the matrix $\mathbf{A}$. Then

$$
\begin{aligned}
\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+ &= (\mathbf{R}^{\mathsf{T}}\mathbf{B}^{\mathsf{T}})(\mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}) \\
&= \mathbf{R}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{B})(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{R}^{\mathsf{T}}\mathbf{B}^{\mathsf{T}} = \mathbf{A}^{\mathsf{T}}
\end{aligned}
$$

Since $\mathbf{A}^+\mathbf{b}$ is in the row space by definition, and only a single optimal solution falls in the row space - the solution of minimum absolute value -, $\mathbf{A}^+\mathbf{b}$ is indeed the optimal solution of minimum absolute value. $\square$

In practice, it often occurs that the values of certain variables must be determined from measured data. If we perform more than $n$ measurements for the $n$ unknown values to eliminate measurement errors, the system of equations can easily become inconsistent. The following example shows a similar case.

**Example 7.68 (Optimal solution of a system of equations).** *The following system of equations with three unknowns consists of four equations:*

$$
\begin{alignedat}{9}
x &{}+{}& 3y &{}+{}& 6z &{}={}& 8 \\
x &{}-{}&  y &{}+{}& 2z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 2z &{}={}& 2 \\
x &{}-{}&  y &{}-{}& 2z &{}={}& 0
\end{alignedat}
$$

*Any three of them gives a uniquely solvable system of equations, but the four together are inconsistent. Determine its optimal solution!*

Solution. According to Theorem 7.67, the optimal solution is $\mathbf{A}^+\mathbf{b}$, where

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} \qquad
\mathbf{b} = \begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix}
$$

Since $\mathbf{A}$ has full column rank, it has only a single optimal solution, and on the other hand, its pseudoinverse can be calculated with formula (7.13), thus

$$
\mathbf{A}^+ = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \begin{bmatrix} 0 & 1/4 & 1/4 & 1/2 \\ 0 & -1/4 & 1/4 & 0 \\ 1/8 & 1/8 & -1/8 & -1/8 \end{bmatrix} \qquad
\mathbf{A}^+\mathbf{b} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}
$$

Thus the optimal solution of the system of equations is $(1, 0, 1)$. $\square$

The following example examines a system of equations in which the rank of the coefficient matrix is less than both the number of equations and the number of unknowns.

**Example 7.69 (Optimal solution of a system of equations).** *Give the optimal solution of minimum absolute value of the system of equations*

$$
\begin{alignedat}{9}
  &       &  y &{}+{}&  z &{}={}& 3 \\
x &{}+{}&  y &{}+{}& 2z &{}={}& 2 \\
x &       &    &{}+{}&  z &{}={}& 2
\end{alignedat}
$$

*!*

Solution. The system of equations is inconsistent, which can be read from the reduced row echelon form of its augmented matrix. We proved this in Example 7.52, where we also determined the solution of minimum absolute value. Now we will use the pseudoinverse of the coefficient matrix, which we determined in Example 10.12. Thus, the optimal solution of minimum absolute value is

$$
\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b} = \frac{1}{9}\begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}\begin{bmatrix} 3 \\ 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix}.
$$

$\square$

### Exercises

*Pseudoinverse*

*Calculate the pseudoinverse of the following matrices!*

**7.20.** Rank-1 matrices:

a) $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$  b) $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$  c) $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$
d) $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$  e) $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$  f) $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$

**7.21.** Further rank-1 matrices:

a) $\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}$  b) $\begin{bmatrix} 1 & 2 \\ 1 & 2 \end{bmatrix}$  c) $\begin{bmatrix} 0 & 2 \\ 0 & 2 \end{bmatrix}$
d) $\begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 0 & 0 \end{bmatrix}$  e) $\begin{bmatrix} 1 & 1 & 1 & 1 \end{bmatrix}$  f) $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$

**7.22.** Rank-2 matrices:

a) $\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$  b) $\begin{bmatrix} 1 & 0 \\ 2 & 2 \\ 0 & 1 \end{bmatrix}$
c) $\begin{bmatrix} 1 & 2 & 0 \\ 0 & 2 & 1 \end{bmatrix}$  d) $\begin{bmatrix} 1 & 1 & 0 \\ 2 & 4 & 2 \\ 0 & 1 & 1 \end{bmatrix}$

**7.23.** Let $\mathbf{X} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$, $\mathbf{Y} = \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}$. Check that $(\mathbf{XY})^+ \ne \mathbf{Y}^+\mathbf{X}^+$.

*In the following exercises, determine the pseudoinverse of the matrices given by their decompositions!*

**7.24.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$

**7.25.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 & 1 \\ 1 & 1 & 1 & 0 \end{bmatrix}$

**7.26.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \\ 2 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{bmatrix}$

**7.27.** Prove the relationship $(\mathbf{A}^{\mathsf{T}})^+ = (\mathbf{A}^+)^{\mathsf{T}}$!

**7.28.** Show that if $\mathbf{A}$ is the matrix of an orthogonal projection, meaning $\mathbf{A}^{\mathsf{T}} = \mathbf{A} = \mathbf{A}^2$, then $\mathbf{A}^+ = \mathbf{A}$. Is the converse of the statement true?

**7.29.** Show that if $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{A}$ has full column rank, then $\mathbf{A}^+\mathbf{A} = \mathbf{I}_m$, and if $\mathbf{A}$ has full row rank, then $\mathbf{AA}^+ = \mathbf{I}_n$.

**7.30. Pseudoinverse of rank-1 matrices** Show that if $\operatorname{r}(\mathbf{A}) = 1$, then

$$
\mathbf{A}^+ = \frac{1}{\operatorname{trace}(\mathbf{A}^{\mathsf{T}}\mathbf{A})}\mathbf{A}^{\mathsf{T}},
$$

where $\operatorname{trace}(\mathbf{A}^{\mathsf{T}}\mathbf{A})$ is the sum of the squares of the elements of $\mathbf{A}$. According to this, if $\mathbf{a} \ne \mathbf{0}$, then

$$
\mathbf{a}^+ = \frac{1}{\mathbf{a}^{\mathsf{T}}\mathbf{a}}\mathbf{a}^{\mathsf{T}} = \frac{1}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}^{\mathsf{T}}.
$$

Using the result of this exercise, check the results of exercises 7.20 and 7.21!

**7.31. Pseudoinverse of a block diagonal matrix** Prove that in the case of a block diagonal matrix

$$
\begin{bmatrix} \mathbf{A}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{A}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{A}_k \end{bmatrix}^+ =
\begin{bmatrix} \mathbf{A}_1^+ & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{A}_2^+ & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{A}_k^+ \end{bmatrix}.
$$

**7.32.** Calculate the pseudoinverse of the matrix

$$
\begin{bmatrix} 1 & 1 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 \end{bmatrix}!
$$

## Orthonormal basis - orthogonal matrix

> *There is no need to justify the importance of perpendicularity in describing certain natural phenomena. Its concept is also indispensable in linear algebra. Constructing an orthonormal basis for a subspace, and overviewing mappings that map an orthonormal basis into an orthonormal basis, are of fundamental importance.*

### Orthogonal matrices

*Orthogonal and orthonormal basis* It aids the investigation of subspaces if the basis vectors are mutually orthogonal, because then the scalar product of different basis vectors is 0. A further simplification can be if the basis vectors are unit vectors, because then the scalar product of a vector with them gives the length of the orthogonal projection.

A system of mutually orthogonal vectors is called an *orthogonal system*. An orthogonal system may have 0-vector members. A system of mutually orthogonal unit vectors is called an *orthonormal system*. There are *no* 0-vectors in an orthonormal system. It immediately follows from the next theorem that an orthogonal system containing no zero vector, or an arbitrary orthonormal system, is always a basis of the subspace it spans. This is called an *orthogonal basis* (abbreviated OB) or *orthonormal basis* (abbreviated ONB) of the subspace. We can always obtain an orthonormal basis from an orthogonal basis if we divide each basis vector of the OB by its length. This is called the *normalization* of the vector.

**Theorem 7.70 (Independence of orthogonal vectors).** *If the non-zero vectors $\mathbf{a}_1$, $\mathbf{a}_2, \dots, \mathbf{a}_k$ are mutually orthogonal, then they are also independent.*

Proof. Consider the equation $c_1\mathbf{a}_1 + \dots + c_k\mathbf{a}_k = \mathbf{0}$. We need to show that this holds only in the case $c_1 = \dots = c_k = 0$. Multiply both sides of the equation by the vector $\mathbf{a}_i$ ($i = 1, 2, \dots, k$). Then the right side is 0, and on the left side, all terms except one will be 0:

$$
\begin{aligned}
(c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \dots + c_k\mathbf{a}_k) \cdot \mathbf{a}_i &= \mathbf{0} \cdot \mathbf{a}_i \\
c_i\mathbf{a}_i \cdot \mathbf{a}_i &= 0.
\end{aligned}
$$

Since $\mathbf{a}_i \cdot \mathbf{a}_i \ne 0$, therefore $c_i = 0$, and this is true for every $i$. $\square$

We know that in three-dimensional space, for the coordinates of any vector $\mathbf{v} = (x, y, z)$, it is true that

$$
x = \mathbf{v} \cdot \mathbf{i}, \quad y = \mathbf{v} \cdot \mathbf{j}, \quad z = \mathbf{v} \cdot \mathbf{k}.
$$

It is also true that the point of the plane spanned by $\mathbf{i}$ and $\mathbf{j}$, i.e., the $xy$-plane, lying closest to the vector $\mathbf{v}$, or rather the position vector pointing there is $\hat{\mathbf{v}} = (x, y, 0)$, that is

$$
\hat{\mathbf{v}} = (\mathbf{v} \cdot \mathbf{i})\mathbf{i} + (\mathbf{v} \cdot \mathbf{j})\mathbf{j}
$$

We also know that the point closest to $\mathbf{v}$ is exactly the orthogonal projection of $\mathbf{v}$ onto the plane.

The obvious relationships above can also be used in the case of an arbitrary ONB, thus they are very valuable.

**Theorem 7.71 (Best approximation in the case of ONB).** *A subspace $\mathcal{A}$ spanned by an orthonormal system $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_k\}$, and a vector $\mathbf{v}$ are given in the space $\mathbb{R}^n$. Then the vector*

$$
\hat{\mathbf{v}} = (\mathbf{v} \cdot \mathbf{e}_1)\mathbf{e}_1 + (\mathbf{v} \cdot \mathbf{e}_2)\mathbf{e}_2 + \dots + (\mathbf{v} \cdot \mathbf{e}_k)\mathbf{e}_k \tag{7.22}
$$

*is the point of the subspace $\mathcal{A}$ closest to $\mathbf{v}$, that is $\hat{\mathbf{v}} = \operatorname{proj}_{\mathcal{A}} \mathbf{v}$.*

Proof. First we show that the point according to formula (7.22) is closest to $\mathbf{v}$. The square of the distance between $\mathbf{v}$ and $\hat{\mathbf{v}}$ is

$$
\begin{aligned}
(\mathbf{v} - \hat{\mathbf{v}})^2 &= \left( \mathbf{v} - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)\mathbf{e}_i \right)^2 \\
&= \mathbf{v}^2 - 2\sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 + \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \\
&= \mathbf{v}^2 - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2.
\end{aligned}
$$

The square of the distance between $\mathbf{v}$ and an arbitrary vector $\mathbf{u}$ of the subspace:

$$
\begin{aligned}
(\mathbf{v} - \mathbf{u})^2 &= \left( \mathbf{v} - \sum_{i=1}^k c_i\mathbf{e}_i \right)^2 \\
&= \mathbf{v}^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k c_i^2.
\end{aligned}
$$

If subtracting the former from the latter yields a positive value, it means that $\hat{\mathbf{v}}$ is indeed closest to $\mathbf{v}$:

$$
\begin{aligned}
&(\mathbf{v} - \mathbf{u})^2 - (\mathbf{v} - \hat{\mathbf{v}})^2 \\

&= \left( \mathbf{v}^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k c_i^2 \right) - \left( \mathbf{v}^2 - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \right) \\
&= \sum_{i=1}^k c_i^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \\
&= \sum_{i=1}^k (c_i - \mathbf{v} \cdot \mathbf{e}_i)^2 \ge 0.
\end{aligned}
$$

From this, according to the best approximation theorem, we get that $\hat{\mathbf{v}} = \operatorname{proj}_{\mathcal{A}} \mathbf{v}$. $\square$

**Example 7.72 (Orthogonal projection of a point onto a plane).** *Determine the orthogonal projection of the point $(3, 1, 2)$ onto the plane spanned by the orthogonal vectors $\mathbf{a} = \frac{1}{7}(2, 3, 6)$ and $\mathbf{b} = \frac{1}{7}(3, -6, 2)$!*

Solution. Since $\mathbf{a}$ and $\mathbf{b}$ form an orthonormal basis for the subspace spanned by them, the orthogonal projection of the vector $\mathbf{v} = (3, 1, 2)$ onto this plane is

$$
\begin{aligned}
\hat{\mathbf{v}} &= (\mathbf{v} \cdot \mathbf{a})\mathbf{a} + (\mathbf{v} \cdot \mathbf{b})\mathbf{b} \\
&= \left( (3, 1, 2) \cdot \left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) \right) \left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) + \left( (3, 1, 2) \cdot \left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \right) \left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \\
&= 3\left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) + 1\left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \\
&= \left( \tfrac{9}{7}, \tfrac{3}{7}, \tfrac{20}{7} \right).
\end{aligned}
$$

For comparison: the standard elementary method would be finding the intersection point of the plane and the line passing through the point $(3, 1, 2)$ with direction vector $\mathbf{a} \times \mathbf{b}$. $\square$

*Orthogonal matrices* A matrix formed from an orthonormal system of vectors has beautiful algebraic and geometric properties.

**Definition 7.73 (Orthogonal and semi-orthogonal matrix).** *A real square matrix is called orthogonal if its column vectors or row vectors form an orthonormal system. If we do not require the matrix to be square, we speak of a semi-orthogonal matrix.*

> *We will see that in the definition of orthogonal matrices, it is sufficient to require the orthonormality of only the column vectors or only the row vectors, because either implies the other. However, if a matrix is not square, then either only its column vectors or only its row vectors can form an ONS. For example, if the $n \times k$ matrix $\mathbf{Q}$ is semi-orthogonal, then $k \le n$ holds if and only if the column vectors of $\mathbf{Q}$ form an ONS. Namely, the fact that some vectors form an ONS also implies their linear independence.*

> *The name orthogonal matrix is very unfortunate, but it is so widespread that it cannot be deviated from. Obviously, orthonormal matrix would be a better name.*

> *Every orthogonal matrix is at the same time also semi-orthogonal.*

**Example 7.74 (Orthogonal matrices).** *Which of the following matrices are orthogonal and which are semi-orthogonal?*

$$
\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad
\mathbf{B} = \begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \\ 0 & 0 \\ 0 & 0 \end{bmatrix}, \quad
\mathbf{C} = \frac{1}{7}\begin{bmatrix} 2 & 3 & 6 \\ 6 & 2 & -3 \\ 3 & -6 & 2 \end{bmatrix}.
$$

Solution. All three matrices are semi-orthogonal, since their column vectors or row vectors form an orthonormal system (the rows of matrix $\mathbf{A}$ are among the standard unit vectors of $\mathbb{R}^4$, the column vectors of matrix $\mathbf{B}$ can be obtained by rotating the first two standard unit vectors of $\mathbb{R}^4$ in the $xy$-plane by an angle $\alpha$, in the case of matrix $\mathbf{C}$ we can verify their orthonormality by performing the scalar products of the column vectors). Among the three matrices, only $\mathbf{C}$ is square, so only this one is orthogonal. $\square$

> *It is easy to see that every permutation matrix, thus the identity matrix as well, is orthogonal.*

**Theorem 7.75 (Equivalent definitions of semi-orthogonal matrices).** *Let $m \ge n$ and $\mathbf{Q} \in \mathbb{R}^{m \times n}$. The following statements are equivalent:*
*a) $\mathbf{Q}$ is semi-orthogonal,*
*b) $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_n$.*

> *Similarly, in the case of $m \le n$, $\mathbf{Q}$ is semi-orthogonal if and only if $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_m$.*

> *Statement b) says in algebraic language that for $m \ge n$, $\mathbf{Q}$ is semi-orthogonal if and only if its transpose is its left inverse.*

Proof. a) $\Rightarrow$ b): If $\mathbf{Q}$ is semi-orthogonal and $m \ge n$, then the columns of $\mathbf{Q}$ form an ONS. Let $\mathbf{Q} = [\mathbf{q}_1 \ \mathbf{q}_2 \ \dots \ \mathbf{q}_n]$. Then $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ij} = \mathbf{q}_i^{\mathsf{T}}\mathbf{q}_j = \mathbf{q}_i \cdot \mathbf{q}_j$, but since the vector system $\{\mathbf{q}_i\}$ is orthonormal, $\mathbf{q}_i^2 = 1$ and $\mathbf{q}_i \cdot \mathbf{q}_j = 0$ if $i \ne j$. According to this, $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ii} = 1$, and $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ij} = 0$ if $i \ne j$ and $i, j \le k$, i.e., $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_k$.

b) $\Rightarrow$ a): Considering the matrix multiplication in the relation $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_k$ as row vector times column vector, we get exactly that $\mathbf{q}_i^2 = 1$ and $\mathbf{q}_i \cdot \mathbf{q}_j = 0$ if $i \ne j$, i.e., the vector system $\{\mathbf{q}_i\}$ is orthonormal. $\square$

**Theorem 7.76 (Equivalent definitions of orthogonal matrices).** *Let $\mathbf{Q} \in \mathbb{R}^{n \times n}$. The following statements are equivalent:*
*a) The column vectors of $\mathbf{Q}$ form an orthonormal system.*
*b) $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_n$.*
*c) $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$.*
*d) $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$.*
*e) The row vectors of $\mathbf{Q}$ form an orthonormal system.*

Proof. The equivalence a) $\Leftrightarrow$ b) was proven in the previous statement.

b) $\Rightarrow$ c): Since $\mathbf{Q}$ is square, the relation $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$ also means that $\mathbf{Q}$ is invertible, so $\mathbf{Q}$ and $\mathbf{Q}^{\mathsf{T}}$ are inverses of each other, i.e., $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$.

c) $\Rightarrow$ d): Since $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$, therefore $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$.

d) $\Rightarrow$ e): In the equation $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$, considering the matrix multiplication as row vector times column vector, we get exactly that the column vectors of $\mathbf{Q}^{\mathsf{T}}$ – and thus the row vectors of $\mathbf{Q}$ – form an ONB. $\square$

e) $\Rightarrow$ a): We have previously shown that a) implies e), i.e., if the column vectors of $\mathbf{Q}$ form an ONB, then so do its row vectors. Applying this to $\mathbf{Q}^{\mathsf{T}}$, we get that if the row vectors of $\mathbf{Q}$ form an ONB, then so do its column vectors. $\square$

**Example 7.77 (Inverse of orthogonal matrices).** *Calculate the inverse of the matrices*

$$
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}, \quad
\frac{1}{7}\begin{bmatrix} 2 & 3 & 6 \\ 6 & 2 & -3 \\ 3 & -6 & 2 \end{bmatrix}.
$$

*!*

Solution. All three matrices are orthogonal (the first is a permutation matrix, the orthogonality of the third was checked in Example 7.74), so according to the previous theorem, their inverses are equal to their transposes, so the inverses are:

$$
\begin{bmatrix} 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}, \quad
\begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}, \quad
\frac{1}{7}\begin{bmatrix} 2 & 6 & 3 \\ 3 & 2 & -6 \\ 6 & -3 & 2 \end{bmatrix}.
$$

$\square$

*Geometry of orthogonal matrices* A matrix mapping belonging to an orthogonal matrix takes an ONB to an ONB in the same way as rotation and reflection in the plane or space.

**Theorem 7.78 (Matrix mapping belonging to an orthogonal matrix).** *Let $\mathbf{Q} \in \mathbb{R}^{n \times n}$. The following statements are equivalent:*
*a) $\mathbf{Q}$ is orthogonal.*
*b) $|\mathbf{Qx}| = |\mathbf{x}|$ for every vector $\mathbf{x} \in \mathbb{R}^n$.*
*c) $\mathbf{Qx} \cdot \mathbf{Qy} = \mathbf{x} \cdot \mathbf{y}$ for every vector $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.*

Proof. a) $\Rightarrow$ b): If $\mathbf{Q}$ is orthogonal, then $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$, thus for an arbitrary vector $\mathbf{x} \in \mathbb{R}^n$

$$
|\mathbf{Qx}|^2 = \mathbf{Qx} \cdot \mathbf{Qx} = (\mathbf{Qx})^{\mathsf{T}}(\mathbf{Qx}) = \mathbf{x}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}}\mathbf{Qx} = \mathbf{x}^{\mathsf{T}}\mathbf{x} = |\mathbf{x}|^2.
$$

b) $\Rightarrow$ c): From b) it follows that

$$
|\mathbf{Q}(\mathbf{x} + \mathbf{y})| = |\mathbf{x} + \mathbf{y}| \quad \text{and} \quad |\mathbf{Q}(\mathbf{x} - \mathbf{y})| = |\mathbf{x} - \mathbf{y}|.
$$

Using this and equation (1.9) giving the relationship between the scalar product and absolute value, we get that for every vector $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$

$$
\begin{aligned}
\mathbf{Qx} \cdot \mathbf{Qy} &= \frac{1}{4}\left( |\mathbf{Qx} + \mathbf{Qy}|^2 - |\mathbf{Qx} - \mathbf{Qy}|^2 \right) \\
&= \frac{1}{4}\left( |\mathbf{Q}(\mathbf{x} + \mathbf{y})|^2 - |\mathbf{Q}(\mathbf{x} - \mathbf{y})|^2 \right) \\
&= \frac{1}{4}\left( |\mathbf{x} + \mathbf{y}|^2 - |\mathbf{x} - \mathbf{y}|^2 \right) \\
&= \mathbf{x} \cdot \mathbf{y}
\end{aligned}
$$

c) $\Rightarrow$ a): Let the $i$-th column of the matrix $\mathbf{Q}$ be denoted by $\mathbf{q}_i$, i.e., $\mathbf{q}_i = \mathbf{Qe}_i$, where $\mathbf{e}_i$ is the $i$-th vector of the standard basis. Then

$$
\mathbf{q}_i \cdot \mathbf{q}_j = \mathbf{Qe}_i \cdot \mathbf{Qe}_j = \mathbf{e}_i \cdot \mathbf{e}_j = \begin{cases} 0, & \text{if } i \ne j, \\ 1, & \text{if } i = j. \end{cases}
$$

Therefore, the column vectors of $\mathbf{Q}$ form an orthonormal system, i.e., $\mathbf{Q}$ is orthogonal. $\square$

> *A similar statement holds for semi-orthogonal matrices as well (see exercise ??).*

> *One statement of the theorem can also be formulated as a square matrix $\mathbf{Q}$ is orthogonal if and only if the matrix mapping $Q : \mathbf{x} \mapsto \mathbf{Qx}$ is distance-preserving. The other statement of the theorem says that $\mathbf{Q}$ is orthogonal if and only if $Q$ preserves the scalar product.*

> *It is important to note that the matrix of a linear mapping generated by an orthogonal matrix in another basis is not necessarily an orthogonal matrix (see exercise ??).*

**Theorem 7.79 (Properties of orthogonal matrices).**
*a) If $\mathbf{Q}$ is a real orthogonal matrix, then $|\det(\mathbf{Q})| = 1$.*
*b) The operations of matrix multiplication and inversion do not lead out of the set $O(n)$ of $n \times n$ real orthogonal matrices.*

Proof. a) Since $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$, therefore $\det(\mathbf{Q}^{\mathsf{T}})\det(\mathbf{Q}) = \det(\mathbf{I}) = 1$, but $\det(\mathbf{Q}^{\mathsf{T}}) = \det(\mathbf{Q})$, thus $\det(\mathbf{Q}) = 1$ or $\det(\mathbf{Q}) = -1$.

b) The inverse of an orthogonal matrix is equal to its transpose, which is also orthogonal, so its inverse is as well. We still need to show that the product of two orthogonal matrices is also orthogonal. Let $\mathbf{Q}_1$ and $\mathbf{Q}_2$ be orthogonal. Then

$$
(\mathbf{Q}_1\mathbf{Q}_2)^{\mathsf{T}}\mathbf{Q}_1\mathbf{Q}_2 = \mathbf{Q}_2^{\mathsf{T}}\mathbf{Q}_1^{\mathsf{T}}\mathbf{Q}_1\mathbf{Q}_2 = \mathbf{Q}_2^{\mathsf{T}}\mathbf{Q}_2 = \mathbf{I},
$$

thus $\mathbf{Q}_1\mathbf{Q}_2$ is indeed orthogonal. $\square$

> *It is also immediately obvious that the operations of matrix multiplication and inversion do not lead out of the set of $n \times n$ real orthogonal matrices with determinant 1. This matrix set is denoted by $SO(n)$.*

> *The set $O(n)$ of real orthogonal matrices forms a group with the operation of matrix multiplication. This is called the orthogonal group. We write about groups in the appendix. The group $SO(n)$ of orthogonal matrices with determinant 1 is called the special orthogonal group. $O(10)$ plays an important role in string theory of modern physics, as the symmetry group of 10-dimensional space-time.*

*Orthogonal transformations of the 2- and 3-dimensional space* Orthogonal matrices can be described with the help of rotations and reflections.

**Theorem 7.80.** *Every orthogonal matrix in $O(2)$ is either the matrix of a rotation or of a reflection across a line.*

Proof. Let $\mathbf{Q} = \begin{bmatrix} a & c \\ b & d \end{bmatrix}$. If this matrix is orthogonal, then its column vectors form an orthonormal system, i.e.,

$$
\begin{aligned}
a^2 + b^2 &= 1 \\
c^2 + d^2 &= 1 \\
ac + bd &= 0.
\end{aligned}
$$

According to the last equation, $a^2c^2 = b^2d^2$, i.e., $a^2(1 - d^2) = (1 - a^2)d^2$, from which $a^2 = d^2$ and $b^2 = c^2$ follow. Finally, we get that either $d = a$ and $c = -b$, or $d = -a$ and $c = b$. In the first case $\det(\mathbf{Q}) = ad - bc = 1$, in the second $\det(\mathbf{Q}) = -1$. Let's note that for any solution we can uniquely find a real $\alpha \in [0, 2\pi)$ such that $a = \cos\alpha$ and $b = \sin\alpha$. That is, all second-order orthogonal matrices can be written in the form

$$
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix} \quad \text{or} \quad \begin{bmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{bmatrix}
$$

If its determinant is 1, then it is the matrix of a rotation by angle $\alpha$, if its determinant is $-1$, then it is the matrix of a reflection across a line at angle $\alpha/2$ (see sections 7.20 and 7.24). $\square$

The 3-dimensional case is slightly more complicated. Elements of $SO(3)$, i.e., orthogonal matrices with determinant 1, play an important role in countless classical engineering applications – first of all in describing the motion of rigid bodies. These, both here and in higher dimensions, are the matrices of rotations. However, a rotation can only be described in 3 dimensions as a rotation around an axis by an angle $\alpha$. We will only be able to prove this theorem knowing the theory of eigenvectors (see Theorem ??).

**Example 7.81 (Axis and angle of rotation).** *Around what axis and by what angle is the orthogonal matrix*

$$
\frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix}
$$

*with determinant 1 the matrix of rotation?*

Solution. If $\mathbf{A}$ is the matrix of a rotation by a non-zero angle, and $\mathbf{v}$ is a direction vector of the axis, then only scalar multiples of $\mathbf{v}$ will satisfy the equation $\mathbf{Ax} = \mathbf{x}$. This is equivalent to the homogeneous linear system of equations

$$
(\mathbf{A} - \mathbf{I})\mathbf{x} = \mathbf{0}
$$

the form and solution of which in our case are

$$
\frac{1}{15}\begin{bmatrix} -1 & -5 & 2 \\ 5 & -5 & -10 \\ 2 & 10 & -4 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = t\begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix}.
$$

Thus, a direction vector of the axis of rotation is the vector $\mathbf{v} = (2,0,1)$. To determine the angle of rotation, or rather the cosine of the angle of rotation, it is sufficient to find a vector $\mathbf{w}$ which is in the plane perpendicular to the axis. Such is, for example, the vector $\mathbf{w} = (0,1,0)$. Its image under the rotation is

$$
\frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1/3 \\ 2/3 \\ 2/3 \end{bmatrix}.
$$

The angle of rotation equals the angle between these two vectors, thus

$$
\cos\alpha = \frac{\mathbf{w}\cdot\mathbf{Aw}}{|\mathbf{w}||\mathbf{Aw}|} = \frac{2/3}{1\cdot 1} = \frac{2}{3}.
$$

This is in accordance with the result of exercise 7.20, where this rotation had to be constructed knowing the axis and the angle. $\square$

The elements of $O(3) - SO(3)$, i.e., third-order orthogonal matrices with determinant $-1$, are not all reflections, but can be obtained by successively applying a reflection across the origin and a rotation (see Theorem **??**)!

### Givens rotation, Householder reflection

From the rotations and reflections of $n$-dimensional space, we can select simple, so-called primitive orthogonal transformations, such that all orthogonal matrices can be produced as products of their matrices. These transformations are used by several efficient numerical mathematical methods.

A rotation that leaves every vector outside the plane of a coordinate plane unchanged is called a *Givens rotation*. The matrix of a rotation affecting the plane of the $i$-th and $j$-th coordinate axes is

$$
\mathbf{G} = \begin{bmatrix}
1 & \dots & 0 & \dots & 0 & \dots & 0 \\
\vdots & \ddots & \vdots & & \vdots & & \vdots \\
0 & \dots & \cos\alpha & \dots & -\sin\alpha & \dots & 0 \\
\vdots & & \vdots & \ddots & \vdots & & \vdots \\
0 & \dots & \sin\alpha & \dots & \cos\alpha & \dots & 0 \\
\vdots & & \vdots & & \vdots & \ddots & \vdots \\
0 & \dots & 0 & \dots & 0 & \dots & 1
\end{bmatrix}
$$

which we obtain by putting the matrix of the rotation by angle $\alpha$ into the four places at the intersection of the $i$-th and $j$-th rows and columns of the identity matrix.

With this rotation, it can be achieved, for example, that we rotate a vector $\mathbf{x}$ into a vector whose $j$-th coordinate is $0$. Highlighting only the $i$-th and $j$-th rows and columns

$$
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}\begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} r \\ 0 \end{bmatrix}.
$$

From this it can be seen that using the equations

$$
\begin{aligned}
r &= \sqrt{a^2 + b^2} \\
\cos\alpha &= a/r \\
\sin\alpha &= -b/r
\end{aligned}\tag{7.23}
$$

the rotation matrix can be written knowing $a$ and $b$. This can be used in bringing a matrix to triangular form, for example, the QR decomposition examined in the following can also be performed using Givens rotations (see Example 7.89). Its advantages appear in the case of sparse matrices, and the calculations are also parallelizable.

A reflection across a hyperplane perpendicular to a given vector $\mathbf{a}\neq\mathbf{0}$, or unit vector $\mathbf{e} = \mathbf{a}/|\mathbf{a}|$, is called a *Householder reflection*. Its matrix is

$$
\mathbf{H} = \mathbf{I} - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T}
$$

As an exercise, we leave to the Reader the proof that this transformation indeed leaves all vectors of the space $\mathbf{e}^\perp$ unchanged and takes the vector $\mathbf{e}$ into $-\mathbf{e}$ (see exercise **??**). This reflection can also be used to bring a matrix to triangular form and construct its QR decomposition. For this, the following statement will be needed.

**Proposition 7.82 (Reflection of one vector into another).** *If $\mathbf{a}$ and $\mathbf{b}$ are two different but equal-length vectors in $\mathbb{R}^n$, then the Householder reflection across the hyperplane $(\mathbf{a}-\mathbf{b})^\perp$ takes the vector $\mathbf{a}$ into $\mathbf{b}$ and vice versa.*

**Proof.** We have to show that $\mathbf{Ha} = \mathbf{b}$ and $\mathbf{Hb} = \mathbf{a}$, where

$$
\mathbf{H} = \mathbf{I} - \frac{2}{(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b})}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}.
$$

We utilize that $\mathbf{a}$ and $\mathbf{b}$ have the same length, thus $\mathbf{a}^\mathsf{T}\mathbf{a} = \mathbf{b}^\mathsf{T}\mathbf{b}$, and that the scalar product is commutative, i.e., $\mathbf{a}^\mathsf{T}\mathbf{b} = \mathbf{b}^\mathsf{T}\mathbf{a}$. Thus

$$
(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b}) = \mathbf{a}^\mathsf{T}\mathbf{a} - \mathbf{a}^\mathsf{T}\mathbf{b} - \mathbf{b}^\mathsf{T}\mathbf{a} + \mathbf{b}^\mathsf{T}\mathbf{b} = 2(\mathbf{a}^\mathsf{T}\mathbf{a} - \mathbf{a}^\mathsf{T}\mathbf{b}) = 2(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a}.
$$

According to this

$$
\begin{aligned}
\mathbf{Ha} &= \mathbf{a} - \frac{2}{(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b})}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a} \\
&= \mathbf{a} - \frac{1}{(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a}}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a} \\
&= \mathbf{a} - (\mathbf{a}-\mathbf{b}) = \mathbf{b}.
\end{aligned}
$$

Since $\mathbf{H}^{-1} = \mathbf{H}$, therefore $\mathbf{Hb} = \mathbf{H}^{-1}\mathbf{b} = \mathbf{a}$. $\square$

**Example 7.83 (Householder reflection).** *Determine the matrix $\mathbf{H}$ that takes the vector $(1,-1,-1,1)$ into a vector whose coordinates are all $0$ except the first one.*

**Solution.** $|(1,-1,-1,1)| = 2$, so the image vector can only be one of the vectors $\pm(2,0,0,0)$. Let's choose the one with the positive coordinate. The matrix of the reflection across the hyperplane perpendicular to the vector $(1,-1,-1,1) - (2,0,0,0) = (-1,-1,-1,1)$ is

$$
\begin{aligned}
\mathbf{H} = \mathbf{I} - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} -1 \\ -1 \\ -1 \\ 1 \end{bmatrix}\begin{bmatrix} -1 & -1 & -1 & 1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & -1 \\ 1 & 1 & 1 & -1 \\ 1 & 1 & 1 & -1 \\ -1 & -1 & -1 & 1 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & -1 & -1 & 1 \\ -1 & 1 & -1 & 1 \\ -1 & -1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
\end{aligned}
$$

We can easily verify even by mental calculation that $\mathbf{H}\cdot(1,-1,-1,1) = (2,0,0,0)$. $\square$

### Orthogonalization

It is highly advantageous if we know not just a basis of a subspace, but an orthogonal basis of it. In this paragraph, we show that such a basis exists, and we give a procedure to construct it. We call this procedure Gram–Schmidt orthogonalization.

**Theorem 7.84 (Gram–Schmidt orthogonalization).** *If $\mathcal{A} = \{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_k\}$ is an independent vector system, then there exists an orthogonal vector system $\mathcal{V} = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ such that for all $i = 1, 2, \dots, k$*

$$
\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_i) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_i).\tag{7.24}
$$

*The system*

$$
\left\{ \frac{\mathbf{v}_1}{|\mathbf{v}_1|}, \frac{\mathbf{v}_2}{|\mathbf{v}_2|}, \dots, \frac{\mathbf{v}_k}{|\mathbf{v}_k|} \right\}
$$

*obtained by normalizing the vectors from the orthogonal system $\mathcal{V}$ is orthonormal.*

**Proof.** The relation $\operatorname{span}(\mathbf{a}_1) = \operatorname{span}(\mathbf{v}_1)$ holds if

$$
\mathbf{v}_1 = \mathbf{a}_1.
$$

In order for $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2)$ to hold, a vector $\mathbf{v}_2$ must be chosen which is in the plane of $\mathbf{a}_1$ and $\mathbf{a}_2$, and on the other hand, $\mathbf{v}_2$ must be perpendicular to $\mathbf{v}_1$. These conditions are fulfilled by the component of $\mathbf{a}_2$ perpendicular to the subspace spanned by $\mathbf{v}_1$, i.e., the vector

$$
\mathbf{v}_2 = \mathbf{a}_2 - \left( \mathbf{a}_2 \cdot \frac{\mathbf{v}_1}{|\mathbf{v}_1|} \right)\frac{\mathbf{v}_1}{|\mathbf{v}_1|} = \mathbf{a}_2 - \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1
$$

It can be seen that this vector cannot be the $0$-vector, because in the case of $\mathbf{v}_2 = \mathbf{0}$, $\mathbf{a}_2 = \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1 = \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{a}_1$ would hold, i.e., $\mathbf{a}_1$ and $\mathbf{a}_2$ would not be independent, which contradicts that $\mathcal{A}$ is independent. From the previous formulas, it can be seen that $\mathbf{v}_1$ and $\mathbf{v}_2$ can be produced as a linear combination of $\mathbf{a}_1$ and $\mathbf{a}_2$, and vice versa, so $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2)$ holds. The procedure can be continued similarly. If we have already constructed $\mathbf{v}_i$, then according to Theorem 7.71 we calculate the component of vector $\mathbf{a}_{i+1}$ perpendicular to the subspace $\operatorname{span}(\frac{\mathbf{v}_1}{|\mathbf{v}_1|}, \frac{\mathbf{v}_2}{|\mathbf{v}_2|}, \dots, \frac{\mathbf{v}_i}{|\mathbf{v}_i|})$ and we choose this as $\mathbf{v}_{i+1}$, i.e.,

$$
\mathbf{v}_{i+1} = \mathbf{a}_{i+1} - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1 - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_2}{\mathbf{v}_2\cdot\mathbf{v}_2}\mathbf{v}_2 - \dots - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_i}{\mathbf{v}_i\cdot\mathbf{v}_i}\mathbf{v}_i
$$

It is easy to see that $\mathbf{v}_{i+1}\neq\mathbf{0}$, because otherwise $\mathcal{A}$ would not be independent. It can also be seen that $\mathbf{v}_{i+1}$ can be expressed as a linear combination of vectors $\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_{i+1}$, and $\mathbf{a}_{i+1}$ can be expressed as a linear combination of vectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_{i+1}$, thus the statement of the theorem concerning the spanned subspaces also holds. $\square$

**Example 7.85 (Gram–Schmidt orthogonalization).** *Let's find an orthonormal basis in the subspace spanned by the vectors $(1,1,1,1)$, $(3,-1,3,-1)$, $(6,2,2,-2)$.*

**Solution.** First, let's find an orthogonal basis:

$$
\begin{aligned}
\mathbf{v}_1 &= (1,1,1,1) \\
\mathbf{v}_2 &= (3,-1,3,-1) - \frac{(3,-1,3,-1)\cdot(1,1,1,1)}{(1,1,1,1)\cdot(1,1,1,1)}(1,1,1,1) = (2,-2,2,-2) \\
\mathbf{v}_3 &= (6,2,2,-2) - \frac{(6,2,2,-2)\cdot(1,1,1,1)}{(1,1,1,1)\cdot(1,1,1,1)}(1,1,1,1) \\
&\quad - \frac{(6,2,2,-2)\cdot(2,-2,2,-2)}{(2,-2,2,-2)\cdot(2,-2,2,-2)}(2,-2,2,-2) = (2,2,-2,-2)
\end{aligned}
$$

Finally, the orthonormal basis:

$$
\left\{ \left( \tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2} \right), \left( \tfrac{1}{2}, -\tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2} \right), \left( \tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}, -\tfrac{1}{2} \right) \right\}
$$

$\square$

> *▶ It can be easily proven that Gram–Schmidt orthogonalization also works for a vector system consisting of not independent vectors, with the only change that $\mathbf{v}_i = \mathbf{0}$ will hold if and only if $\mathbf{a}_i$ is not independent of the vectors with smaller indices, i.e., $\mathbf{a}_i$ is in the subspace $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_{i-1})$.*

### The QR decomposition

Just as the reduction of a matrix to a triangular form by elementary row operations is stored in a compact form by the LU decomposition, similarly the QR decomposition stores the result of the orthogonalization procedure. This decomposition plays an important role both in the method of least squares and in solving the eigenvalue problem to be discussed later.

**Definition 7.86 (QR decomposition).** *Let $\mathbf{A}$ be a real matrix of full column rank. The decomposition $\mathbf{A} = \mathbf{QR}$ is called a QR decomposition or reduced QR decomposition if $\mathbf{Q}$ is a semi-orthogonal matrix of the same size as $\mathbf{A}$, and $\mathbf{R}$ is a square upper triangular matrix with positive elements in its main diagonal.*

> *▶ If we complete the matrix $\mathbf{Q}$ to an orthogonal matrix by taking additional column vectors (we can always do it, why?), and the matrix $\mathbf{R}$ to an $m\times n$ upper triangular matrix by taking zero rows, then the product of these matrices is also $\mathbf{A}$, since*

$$
\mathbf{A} = \begin{bmatrix} \mathbf{Q} & \hat{\mathbf{Q}} \end{bmatrix}\begin{bmatrix} \mathbf{R} \\ \mathbf{O} \end{bmatrix} = \mathbf{QR} + \hat{\mathbf{Q}}\mathbf{O} = \mathbf{QR}
$$

This broader decomposition is also usually called a QR decomposition. We rather use the term *full QR decomposition* for this. In this case, then, the matrix $\mathbf{A}$ is decomposed into the product of an orthogonal matrix and an upper triangular matrix of the same size as $\mathbf{A}$.

> *▶ There are works and programs that consider it a QR decomposition even if $\mathbf{Q}$ is semi-orthogonal, $\mathbf{R}$ is an upper triangular matrix, but it is not required that the elements of the main diagonal be positive! (E.g., matrix-based languages also give a decomposition of this form.) We can easily convert these to a decomposition with a positive main diagonal. If for some $i$ we had $r_{ii} < 0$, then let's multiply the $i$-th row vector of the matrix $\mathbf{R}$ and the $i$-th column of the matrix $\mathbf{Q}$, i.e., the vector $\mathbf{q}_i$, by $-1$. This does not change the product. Thus we can achieve that every element on the main diagonal of $\mathbf{R}$ is positive.*

From the Gram–Schmidt orthogonalization procedure, a QR decomposition of a matrix can be easily produced. Let $\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_k \end{bmatrix} \in \mathbb{R}^{n\times k}$. Since $\mathbf{A}$ has full column rank, i.e., its columns are independent, $k\leq n$. Let the unit vectors obtained at the end of the orthogonalization procedure be denoted by $\mathbf{q}_i$, i.e., $\mathbf{q}_i = \frac{\mathbf{v}_i}{|\mathbf{v}_i|}$ ($i = 1, 2, \dots, k$). Since according to the Gram–Schmidt orthogonalization theorem $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_i) = \operatorname{span}(\mathbf{q}_1, \dots, \mathbf{q}_i)$ for all values of $i = 1, 2, \dots, k$, there exist scalars $r_{ij}$ such that

$$
\begin{aligned}
\mathbf{a}_1 &= r_{11}\mathbf{q}_1 \\
\mathbf{a}_2 &= r_{12}\mathbf{q}_1 + r_{22}\mathbf{q}_2 \\
&\;\;\vdots \\
\mathbf{a}_k &= r_{1k}\mathbf{q}_1 + r_{2k}\mathbf{q}_2 + \dots + r_{kk}\mathbf{q}_k.
\end{aligned}\tag{7.25}
$$

Writing this in matrix product form we get exactly the desired decomposition:

$$
\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_k \end{bmatrix} = \begin{bmatrix} \mathbf{q}_1 & \mathbf{q}_2 & \dots & \mathbf{q}_k \end{bmatrix}\begin{bmatrix} r_{11} & r_{12} & \dots & r_{1k} \\ 0 & r_{22} & \dots & r_{2k} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & r_{kk} \end{bmatrix} = \mathbf{QR}.
$$

It can also be seen from the Gram–Schmidt procedure that $r_{ii} = |\mathbf{v}_i|$, so $r_{ii} > 0$. With this we have proven the existence of the QR decomposition.

We can obtain the matrix $\mathbf{Q}$ from the Gram–Schmidt procedure, however, the question is how $\mathbf{R}$ can be calculated simply. Proposition 7.75 gives a simple solution. If $\mathbf{A} = \mathbf{QR}$, then multiplying both sides of the equality by $\mathbf{Q}^\mathsf{T}$ we get that $\mathbf{Q}^\mathsf{T}\mathbf{A} = \mathbf{Q}^\mathsf{T}\mathbf{QR} = \mathbf{I}_k\mathbf{R} = \mathbf{R}$, thus

$$

\mathbf{R} = \mathbf{Q}^\mathsf{T}\mathbf{A}.
$$

**Example 7.87 (Computing the QR factorization).** *Determine the QR factorization of the matrix*

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix}
$$

*(See above for the translation of this sentence fragment combined with the previous line).*

**Solution.** In Example 7.85 we orthogonalized exactly the system of column vectors of the matrix $\mathbf{A}$. Since the three vectors are linearly independent, $\mathbf{A}$ has full column rank. Based on the solution of Example 7.85, the matrix $\mathbf{Q}$ can be written using the vectors obtained by orthogonalizing the column vectors of $\mathbf{A}$:

$$
\mathbf{Q} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}
$$

From here

$$
\mathbf{R} = \mathbf{Q}^\mathsf{T}\mathbf{A} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}
$$

Indeed,

$$
\begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}.
$$

$\square$

**Theorem 7.88 (Existence and uniqueness of the QR factorization).** *For any real, full column rank matrix $\mathbf{A}$, there exists a QR factorization, i.e., there exists a semiorthogonal matrix $\mathbf{Q}$ and an upper triangular matrix $\mathbf{R}$ with positive elements on its main diagonal such that $\mathbf{A} = \mathbf{QR}$. The factorization obtained this way is unique.*

**Proof.** We have shown the existence of the factorization based on the Gram-Schmidt orthogonalization earlier.

Suppose that there exist two factorizations, i.e., $\mathbf{A} = \mathbf{QR} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$, where $\mathbf{Q}$ and $\hat{\mathbf{Q}}$ are semiorthogonal, i.e., $\mathbf{Q}^\mathsf{T}\mathbf{Q} = \hat{\mathbf{Q}}^\mathsf{T}\hat{\mathbf{Q}} = \mathbf{I}$. Then $\mathbf{R}^\mathsf{T}\mathbf{R} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{R}}$, because

$$
\begin{aligned}
\mathbf{A}^\mathsf{T}\mathbf{A} &= (\mathbf{QR})^\mathsf{T}\mathbf{QR} = \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{QR} = \mathbf{R}^\mathsf{T}\mathbf{R}, \\
\mathbf{A}^\mathsf{T}\mathbf{A} &= (\hat{\mathbf{Q}}\hat{\mathbf{R}})^\mathsf{T}\hat{\mathbf{Q}}\hat{\mathbf{R}} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{Q}}^\mathsf{T}\hat{\mathbf{Q}}\hat{\mathbf{R}} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{R}}.
\end{aligned}
$$

From here $(\hat{\mathbf{R}}^{-1})^\mathsf{T}\mathbf{R}^\mathsf{T} = \hat{\mathbf{R}}\mathbf{R}^{-1}$. Here we have a lower triangular matrix on the left side and an upper triangular matrix on the right side. This is only possible if both products are diagonal. Let $r_i$ and $\hat{r}_i$ denote the diagonal elements of $\mathbf{R}$ and $\hat{\mathbf{R}}$ ($i = 1, \dots, n$). The elements of the main diagonal are therefore

$$
\frac{r_i}{\hat{r}_i} = \frac{\hat{r}_i}{r_i},
$$

from which, due to $r_i > 0$ and $\hat{r}_i > 0$, $r_i = \hat{r}_i$ follows. According to this, $(\hat{\mathbf{R}}^{-1})^\mathsf{T}\mathbf{R}^\mathsf{T} = \hat{\mathbf{R}}\mathbf{R}^{-1} = \mathbf{I}$, from which $\mathbf{R} = \hat{\mathbf{R}}$ results, and then from that, because of $\mathbf{A} = \mathbf{QR} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$, $\mathbf{Q} = \hat{\mathbf{Q}}$. $\square$

### QR factorization with primitive orthogonal transformations

The QR factorization can also be calculated using other techniques instead of Gram-Schmidt orthogonalization, for instance, primitive orthogonal transformations. Similar to Gaussian elimination, here we also achieve triangulation by elimination, but now not with elementary matrices, but with orthogonal ones.

**Example 7.89 (QR factorization with Givens rotations).** *Determine the QR factorization of the matrix*

$$
\mathbf{A} = \begin{bmatrix} 4 & 5 & 8 \\ 3 & 10 & 6 \\ 0 & 12 & 13 \end{bmatrix}
$$

*using Givens rotations!*

**Solution.** First, observing the first and second rows and columns, we eliminate the first element of the second row. Here, using the notations also used in equations (7.23), $a = 4$, $b = 3$, so $r = \sqrt{3^2 + 4^2} = 5$, $\cos\alpha = 4/5$, $\sin\alpha = -3/5$. Thus, in the first step we can eliminate with the following matrix multiplication:

$$
\mathbf{Q}_1 = \begin{bmatrix} 4/5 & 3/5 & 0 \\ -3/5 & 4/5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \qquad \mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 5 & 10 & 10 \\ 0 & 5 & 0 \\ 0 & 12 & 13 \end{bmatrix}.
$$

In the next step, we eliminate the second element of the third row of the matrix $\mathbf{Q}_1\mathbf{A}$:

$$
\mathbf{Q}_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 5/13 & 12/13 \\ 0 & -12/13 & 5/13 \end{bmatrix}. \qquad \mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 5 & 10 & 10 \\ 0 & 13 & 12 \\ 0 & 0 & 5 \end{bmatrix}.
$$

and from here

$$
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} = \begin{bmatrix} 4/5 & -3/13 & 36/65 \\ 3/5 & 4/13 & -48/65 \\ 0 & 12/13 & 5/13 \end{bmatrix},
$$

with which matrices $\mathbf{A} = \mathbf{QR}$ indeed holds. $\square$

Applying Householder reflections to the QR factorization gives us another method. The essence of the idea is that, as seen in Example 7.83, first we eliminate the elements below the first element in the first column, then we choose a transformation that does not change the first row and column, but eliminates the elements below the second element of the second row, and so on. We illustrate the procedure on a $4\times 4$ matrix.

*Figure 7.NN. Triangulating a $4\times 4$ matrix with Householder reflections:*

$$
\mathbf{A} = \begin{bmatrix} * & * & * & * \\ * & * & * & * \\ * & * & * & * \\ * & * & * & * \end{bmatrix} \to \mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & * & * & * \\ 0 & * & * & * \end{bmatrix} \to \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & 0 & * & * \\ 0 & 0 & * & * \end{bmatrix} \to \mathbf{Q}_3\mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & 0 & * & * \\ 0 & 0 & 0 & * \end{bmatrix}
$$

$$
\mathbf{Q}_1 = \mathbf{H}_1 \qquad \mathbf{Q}_2 = \left[\begin{array}{c|c} 1 & 0\;\;0\;\;0 \\ \hline 0 & \\ 0 & \mathbf{H}_2 \\ 0 & \end{array}\right] \qquad \mathbf{Q}_3 = \left[\begin{array}{cc|c} 1 & 0 & 0\;\;0 \\ 0 & 1 & 0\;\;0 \\ \hline 0 & 0 & \\ 0 & 0 & \mathbf{H}_3 \end{array}\right]
$$

In the first step, for the first column ($\mathbf{a}_1$) of the matrix $\mathbf{A}$, we look for a vector $\mathbf{b}_1$ that is of equal length to it, and only its first coordinate is non-zero. Then we construct the Householder matrix $\mathbf{Q}_1 = \mathbf{H}_1$ for the vector $\mathbf{a}_1 - \mathbf{b}_1$. Thus we zeroed out the elements below the first row in the first column of $\mathbf{Q}_1\mathbf{A}$. Then we drop the first row and column, and with the first column vector ($\mathbf{a}_2$) of the matrix obtained this way and the vector $\mathbf{b}_2$ which is of equal length and has $0$ coordinates except for the first one, we construct the Householder matrix $\mathbf{H}_2$, which we augment with a row and a column so that multiplying it by the matrix $\mathbf{Q}_1\mathbf{A}$ does not change its first row and column. This will be the matrix $\mathbf{Q}_2$. Continuing similarly, we finally arrive at an upper triangular matrix $\mathbf{R} = \mathbf{Q}_{n-1}\dots\mathbf{Q}_2\mathbf{Q}_1\mathbf{A}$ (in the example above $n = 4$). Since each of the matrices $\mathbf{Q}_i$ is orthogonal, the inverse of their product will also be orthogonal. Thus in the QR factorization $\mathbf{Q} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T}\dots\mathbf{Q}_{n-1}^\mathsf{T}$. The determination of the QR factorization in this way is called the *Householder method*.

**Example 7.90 (QR factorization with Householder reflection).** *Determine the QR factorization of the matrix*

$$
\mathbf{A} = \begin{bmatrix} 1 & 0 & 1 \\ 2 & 2 & -3 \\ -2 & 5 & -7 \end{bmatrix}
$$

*using the Householder method!*

**Solution.** For the transformation $(1,2,-2)\mapsto(3,0,0)$ we perform a Householder reflection with the vector

$$
\mathbf{a} = (1,2,-2) - (3,0,0) = (-2,2,-2)
$$

(translated above)

$$
\begin{aligned}
\mathbf{Q}_1 = \mathbf{I}_3 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \frac{1}{6}\begin{bmatrix} 4 & -4 & 4 \\ -4 & 4 & -4 \\ 4 & -4 & 4 \end{bmatrix} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & 2 \\ -2 & 2 & 1 \end{bmatrix} \\
\mathbf{Q}_1\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & 2 \\ -2 & 2 & 1 \end{bmatrix}&\begin{bmatrix} 1 & 0 & 1 \\ 2 & 2 & -3 \\ -2 & 5 & -7 \end{bmatrix} = \begin{bmatrix} 3 & -2 & 3 \\ 0 & 4 & -5 \\ 0 & 3 & -5 \end{bmatrix}
\end{aligned}
$$

Then, mentally omitting the first row and column from the matrix $\mathbf{Q}_1\mathbf{A}$, we must perform a Householder reflection with the vector $\mathbf{a} = (4,3) - (5,0) = (-1,3)$ for the transformation $(4,3)\mapsto(5,0)$:

$$
\begin{aligned}
\mathbf{H}_2 = \mathbf{I}_2 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \frac{1}{5}\begin{bmatrix} 1 & -3 \\ -3 & 9 \end{bmatrix} = \frac{1}{5}\begin{bmatrix} 4 & 3 \\ 3 & -4 \end{bmatrix} \\
\mathbf{Q}_2 = \left[\begin{array}{c|cc} 1 & 0 & 0 \\ \hline 0 & 4/5 & 3/5 \\ 0 & 3/5 & -4/5 \end{array}\right], &\qquad \mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 3 & -2 & 3 \\ 0 & 5 & -7 \\ 0 & 0 & 1 \end{bmatrix} \\
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} &= \frac{1}{15}\begin{bmatrix} 5 & 2 & 14 \\ 10 & 10 & -5 \\ -10 & 11 & 2 \end{bmatrix}.
\end{aligned}
$$

We leave checking the validity of the equality $\mathbf{A} = \mathbf{QR}$ to the Reader. $\square$

### Optimal solution of a system of equations with QR factorization

If a system of equations is inconsistent, the normal equation written to find the optimal solution is often ill-conditioned, so it is worth looking for a solution technique that is more effective in handling computational errors. We introduce one such technique.

**Theorem 7.91 (Least squares with QR factorization).** *Let $\mathbf{A}$ be a real matrix of size $m\times n$ with full column rank, let $\mathbf{A} = \mathbf{QR}$ be its QR factorization, and let $\mathbf{b}$ be a vector in $\mathbb{R}^m$. Then the unique optimal solution to the system of equations $\mathbf{Ax} = \mathbf{b}$ is $\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b}$, which can also be obtained from the system of equations*

$$
\mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^\mathsf{T}\mathbf{b}
$$

*by simple back substitution.*

**Proof.** According to Theorem 7.51 on the optimal solution of a system of equations, the optimal solution can be obtained from the normal equation. According to this

$$
\begin{alignedat}{2}
\mathbf{A}^\mathsf{T}\mathbf{A}\hat{\mathbf{x}} &= \mathbf{A}^\mathsf{T}\mathbf{b} &\qquad& \text{ after substitution } \mathbf{A} = \mathbf{QR} \\
(\mathbf{QR})^\mathsf{T}\mathbf{QR}\hat{\mathbf{x}} &= (\mathbf{QR})^\mathsf{T}\mathbf{b} && \\
\mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{QR}\hat{\mathbf{x}} &= \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{b} &\qquad& \mathbf{Q}^\mathsf{T}\mathbf{Q} = \mathbf{I} \\
\mathbf{R}^\mathsf{T}\mathbf{R}\hat{\mathbf{x}} &= \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{b} &\qquad& \text{ left multiplication by the matrix } (\mathbf{R}^\mathsf{T})^{-1} \\
\mathbf{R}\hat{\mathbf{x}} &= \mathbf{Q}^\mathsf{T}\mathbf{b}. &&
\end{alignedat}
$$

The last equation can also be solved by back substitution, since $\mathbf{R}$ is an upper triangular matrix. Since there are no zero elements on the main diagonal of $\mathbf{R}$, $\mathbf{R}$ is invertible (we exploited this when we multiplied by $(\mathbf{R}^\mathsf{T})^{-1}$), so $\hat{\mathbf{x}}$ can be expressed from the equation: $\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b}$. $\square$

**Example 7.92 (Optimal solution of a system of equations).** *We solved the following system of equations with three unknowns in Example 7.68:*

$$
\begin{alignedat}{9}
x &{}+{}& 3y &{}+{}& 6z &{}={}& 8 \\
x &{}-{}& y &{}+{}& 2z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 2z &{}={}& 2 \\
x &{}-{}& y &{}-{}& 2z &{}={}& 0
\end{alignedat}
$$

*Let's provide a new solution for it using QR factorization!*

**Solution.** We determined the QR factorization of the coefficient matrix of the system of equations in Example 7.87. According to this

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}.
$$

One possibility is to write down the matrix equation $\mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^\mathsf{T}\mathbf{b}$:

$$
\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}\begin{bmatrix} \hat{x}_1 \\ \hat{x}_2 \\ \hat{x}_3 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix} = \begin{bmatrix} 6 \\ 4 \\ 4 \end{bmatrix}
$$

We can solve this system of equations even mentally by back substitution: $(\hat{x}_1, \hat{x}_2, \hat{x}_3) = (1, 0, 1)$. Naturally, if we have already calculated the matrix $\mathbf{R}^{-1}$, then the optimal solution can also be obtained with its help:

$$
\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b} = \frac{1}{4}\begin{bmatrix} 2 & -1 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix}\frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}.
$$

$\square$

## Exercises

**7.33.** The basis vectors of a 2-dimensional subspace of $\mathbb{R}^4$ are the vectors $(1,1,-1,-1)$ and $(9,3,-1,5)$. Use the Gram-Schmidt process to give an orthonormal basis of the subspace.

**7.34.** The basis vectors of a 2-dimensional subspace of $\mathbb{R}^4$ are the vectors $(1,-1,1,-1)$ and $(8,6,2,0)$. Use the Gram-Schmidt process to give an orthonormal basis of the subspace.

*Give the QR factorization of the following matrices by applying the Gram-Schmidt process!*

**7.35.**
$$
\begin{bmatrix} 1 & 2 \\ 8 & -20 \\ 4 & -1 \end{bmatrix}
$$

**7.36.**
$$
\begin{bmatrix} 1 & 8 \\ -1 & 6 \\ 1 & 2 \\ -1 & 0 \end{bmatrix}
$$

**7.37.** Give the QR factorization of the following matrix with Givens rotation!

$$
\begin{bmatrix} 8 & 3 & -4 \\ 0 & 4 & 2 \\ 15 & 12 & 1 \end{bmatrix}
$$

**7.38.** Give the QR factorization of the following matrix with Householder reflections!

$$
\begin{bmatrix} 1 & -1 & 2 & 4 \\ 1 & 4 & 1 & 1 \\ 1 & 4 & -1 & 2 \\ 1 & -1 & 4 & 1 \end{bmatrix}
$$

**7.39.** What geometric interpretation can be given to the main diagonal elements of the matrix $\mathbf{R}$ appearing in the QR factorization of $\mathbf{A}$, expressed with the column vectors of the matrix $\mathbf{A}$?

**7.40.** Calculate the QR factorization of the matrix

$$
\begin{bmatrix} 1 & 1 & 0 & 0 \\ 1 & 2 & 1 & 0 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 1 & 2 \end{bmatrix}
$$

(translated above)

**7.41.** Prove that if $\mathbf{e}$ is a unit vector of $\mathbb{R}^n$, then $\mathbf{H} = \mathbf{I} - 2\mathbf{e}\mathbf{e}^\mathsf{T}$ will be the matrix of the Householder transformation, which leaves all vectors of the subspace $\mathbf{e}^\perp$ in place and $\mathbf{He} = -\mathbf{e}$.

## Complex spaces and spaces over finite fields

*In the following we will increasingly face the fact that answering problems formulated with real numbers also requires complex numbers. In this chapter we also extend the geometric mindset to complex spaces. Geometric analogies can even be used in the case of spaces over finite fields with some caution.*

### Complex vectors and spaces

#### Dot product of complex vectors

If we were to interpret the dot product of vectors in $\mathbb{C}^n$ as in the case of real vectors, strange things would happen.

Take, for example, the vectors $(1,\mathrm{i})$ and $(\mathrm{i},\mathrm{i})$. The dot product of these two vectors with themselves would be this:

$$\begin{aligned}
(1,\mathrm{i}) \cdot (1,\mathrm{i}) &\overset{?}{=} 1 - 1 = 0 \\
(\mathrm{i},\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &\overset{?}{=} -1 - 1 = -2
\end{aligned}$$

This shows that if we defined the absolute value (length) of complex vectors with the dot product used in reals, the most important properties of the absolute value would no longer be true! The question is, can the definition of the dot product of real vectors be extended to complex vectors in such a way that the more important properties remain valid? The idea is given by the absolute value of complex numbers - as one-dimensional vectors. The square of the absolute value of the number $z = a + \mathrm{i}b$ is $z\bar{z}$, and not $z^2$! According to this, the dot product of the one-dimensional vector $z$ with itself should give $z\bar{z}$ or $\bar{z}z$. Correspondingly, a possible definition of the dot product of the vectors $\mathbf{z} = (z_1, z_2, \dots, z_n)$ and $\mathbf{w} = (w_1, w_2, \dots, w_n)$ is

$$\begin{aligned}
\mathbf{z} \cdot \mathbf{w} &= z_1\overline{w_1} + z_2\overline{w_2} + \cdots + z_n\overline{w_n}, \text{ or} \\
\mathbf{z} \cdot \mathbf{w} &= \overline{z_1}w_1 + \overline{z_2}w_2 + \cdots + \overline{z_n}w_n.
\end{aligned}$$

Both formulas above can be used, it is a matter of taste which one we choose (it varies by book). We will use the latter because of the simpler form of the matrix multiplication of the dot product (see Definition 7.94). First of all, a naming convention:

**Definition 7.93 (Adjoint of a complex matrix).** *By the adjoint (or Hermitian transpose) of a complex matrix $\mathbf{A}$ we mean the transpose of its element-wise conjugate. The adjoint of $\mathbf{A}$ is denoted by $\mathbf{A}^*$, or after Hermite's name by $\mathbf{A}^\mathsf{H}$, so $\mathbf{A}^\mathsf{H} = \overline{\mathbf{A}}^\mathsf{T}$.*

For example, $\begin{bmatrix} \mathrm{i} & 1+\mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}^\mathsf{H} = \begin{bmatrix} -\mathrm{i} & \mathrm{i} \\ 1-\mathrm{i} & 2 \end{bmatrix}$, while $[1 - \mathrm{i}\ \ \mathrm{i}]^\mathsf{H} = \begin{bmatrix} 1+\mathrm{i} \\ -\mathrm{i} \end{bmatrix}$.

**Definition 7.94 (Dot product of complex vectors).** *By the dot product of the vectors $\mathbf{z} = (z_1, z_2, \dots, z_n)$ and $\mathbf{w} = (w_1, w_2, \dots, w_n)$ in $\mathbb{C}^n$ we mean the complex scalar*

$$\mathbf{z} \cdot \mathbf{w} = \overline{z_1}w_1 + \overline{z_2}w_2 + \cdots + \overline{z_n}w_n$$

*Its matrix multiplication form is $\mathbf{z} \cdot \mathbf{w} = \mathbf{z}^\mathsf{H}\mathbf{w}$.*

> *Let us be careful with the expression adjoint: the concept called classical adjugate in the chapter on determinants in our book should not be confused with this adjoint, they have nothing to do with each other!*

Thus the dot products of the above mentioned $(1,\mathrm{i})$ and $(\mathrm{i},\mathrm{i})$ with themselves and each other:

$$\begin{aligned}
(1,\mathrm{i}) \cdot (1,\mathrm{i}) &= \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} 1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = 1 - \mathrm{i}^2 = 2, \\
(\mathrm{i},\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &= \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} -\mathrm{i} & -\mathrm{i} \end{bmatrix} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = -\mathrm{i}^2 - \mathrm{i}^2 = 2, \\
(1,\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &= \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} 1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \mathrm{i} - \mathrm{i}^2 = 1 + \mathrm{i}, \\
(\mathrm{i},\mathrm{i}) \cdot (1,\mathrm{i}) &= \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} -\mathrm{i} & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = -\mathrm{i} - \mathrm{i}^2 = 1 - \mathrm{i}.
\end{aligned}$$

> *It is clear that the dot product of two real vectors gives the same result according to both the original and this definition, since for every real number $r$, $\bar{r} = r$, thus for real vectors $\mathbf{u}$ and $\mathbf{v}$, $\mathbf{u}^\mathsf{H} = \mathbf{u}^\mathsf{T}$, so $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{H}\mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v}$. Therefore, the above definition is an extension of the definition used for reals.*

> *With this definition, the properties relating to the length of vectors also remain valid, which we will soon prove (see Theorem ???).*

The properties of the adjoint are extensions of the properties of the transpose of real matrices, since the conjugate of a real matrix is equal to itself. This immediately proves the following theorem:

**Theorem 7.95 (Properties of the adjoint).** *Let $\mathbf{A}$ and $\mathbf{B}$ be complex matrices, and let $c$ be a complex number. Then*

*a)* $(\mathbf{A}^\mathsf{H})^\mathsf{H} = \mathbf{A}$,
*b)* $(\mathbf{A} + \mathbf{B})^\mathsf{H} = \mathbf{A}^\mathsf{H} + \mathbf{B}^\mathsf{H}$,
*c)* $(c\mathbf{A})^\mathsf{H} = \bar{c}\mathbf{A}^\mathsf{H}$
*d)* $(\mathbf{A}\mathbf{B})^\mathsf{H} = \mathbf{B}^\mathsf{H}\mathbf{A}^\mathsf{H}$.

From the properties of the adjoint, the following theorem immediately follows:

**Theorem 7.96 (Properties of complex dot multiplication).** *Let $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{C}^n$, and let $c \in \mathbb{C}$. Then*

*a)* $\mathbf{u} \cdot \mathbf{v} = \overline{\mathbf{v} \cdot \mathbf{u}}$,
*b)* $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$,
*c)* $(c\mathbf{u}) \cdot \mathbf{v} = \bar{c}(\mathbf{u} \cdot \mathbf{v})$ *and* $\mathbf{u} \cdot (c\mathbf{v}) = c(\mathbf{u} \cdot \mathbf{v})$,
*d)* $\mathbf{u} \cdot \mathbf{u} > 0$, *if* $\mathbf{u} \neq \mathbf{0}$, *and* $\mathbf{u} \cdot \mathbf{u} = 0$, *if* $\mathbf{u} = \mathbf{0}$.

> *It is easy to see that this theorem is an extension of Theorem 1.18 stated for real space vectors, although at first glance it might seem to contradict it. For example, in the real case the dot product is commutative, here it is not, but the version just stated is also valid for real vectors, since the conjugate of a real vector equals itself. A similar claim can be made about property c).*

> *Either of the two properties in c) follows from the other by applying a). If we had defined the dot product with the formula $\mathbf{u} \cdot \mathbf{v} = \mathbf{v}^\mathsf{H}\mathbf{u}$, then the more natural-looking relationship $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$ would be true.*

> *In d), it is also part of the statement that the dot product of a complex vector with itself is indeed a real number.*

> *d) can also be formulated as $\mathbf{u} \cdot \mathbf{u} \geq 0$, and $\mathbf{u} \cdot \mathbf{u} = 0$ holds if and only if $\mathbf{u} = \mathbf{0}$.*

*Proof.* The proof follows immediately from the matrix multiplication form of the dot product and the properties of the conjugate. As an example, we show the proof of a):

$$\begin{aligned}
\overline{\mathbf{v} \cdot \mathbf{u}} &= \overline{\mathbf{v}^\mathsf{H}\mathbf{u}} = \overline{\mathbf{v}^\mathsf{T}\mathbf{u}} = \mathbf{v}^\mathsf{T}\overline{\mathbf{u}} = \overline{\mathbf{u}}^\mathsf{T}\mathbf{v} = \mathbf{u}^\mathsf{H}\mathbf{v} \\
&= \mathbf{u} \cdot \mathbf{v}
\end{aligned}$$

The other statements can be proven similarly. $\square$

#### Fundamental subspaces of complex matrices

Since in complex matrix multiplication we do not calculate the dot product of a row of one matrix and a column of the other, the fundamental subspaces change.

For an $\mathbf{A} \in \mathbb{C}^{m \times n}$, in the product $\mathbf{A}\mathbf{x}$ we do not multiply a vector $\mathbf{a}_i$ of the row space of $\mathbf{A}$ scalar-wise with the vector $\mathbf{x}$, but a vector of the conjugate of the row space, because

$$\overline{\mathbf{a}}_i \cdot \mathbf{x} = \sum_{j=1}^{n} a_{ij}x_j = [\mathbf{A}\mathbf{x}]_i.$$

The vectors consisting of the conjugates of the row space also form a subspace, which is equal to the column space of $\mathbf{A}^\mathsf{H}$ ($\overline{\mathcal{S}(\mathbf{A})} = \mathcal{O}(\mathbf{A}^\mathsf{H})$). Thus, the equation $\mathbf{A}\mathbf{x} = \mathbf{0}$ means that the space consisting of the conjugates of the vectors of the row space is orthogonal to the null space, so it also follows that $\mathbb{C}^n = \mathcal{O}(\mathbf{A}^\mathsf{H}) \oplus \mathcal{N}(\mathbf{A})$ and similarly $\mathbb{C}^m = \mathcal{O}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A}^\mathsf{H})$. Thus, by the fundamental subspaces of the complex matrix $\mathbf{A}$ we mean the spaces $\mathcal{O}(\mathbf{A}^\mathsf{H})$, $\mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A})$, $\mathcal{N}(\mathbf{A}^\mathsf{H})$. That the consistent equation $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution falling into the conjugate of the row space, i.e., into $\mathcal{O}(\mathbf{A}^\mathsf{H})$, can be proven similarly as in the case of a real matrix. The following theorem is therefore true:

**Theorem 7.97 (Fundamental subspaces of a complex matrix).** *The following statements are true for the fundamental subspaces of the matrix $\mathbf{A} \in \mathbb{C}^{m \times n}$:*

*a)* $\mathcal{O}(\mathbf{A}^\mathsf{H}) \perp \mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A}) \perp \mathcal{N}(\mathbf{A}^\mathsf{H})$,
*b)* $\mathbb{C}^n = \mathcal{O}(\mathbf{A}^\mathsf{H}) \oplus \mathcal{N}(\mathbf{A})$, $\mathbb{C}^m = \mathcal{O}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A}^\mathsf{H})$,
*c)* *the matrix mapping $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ is a bijection between $\mathcal{O}(\mathbf{A}^\mathsf{H})$ and $\mathcal{O}(\mathbf{A})$.*

#### Self-adjoint matrices

Just as the extension of the concept of the transpose - taking into account the complex dot product - is the adjoint, so the extension of the concept of the symmetric matrix is the self-adjoint matrix. A symmetric matrix is one that equals its own transpose, a self-adjoint matrix is one that equals its own adjoint.

The complex matrix $\mathbf{A}$ is *self-adjoint* if

$$\mathbf{A}^\mathsf{H} = \mathbf{A}. \tag{7.27}$$

> *Self-adjoint matrices are also called Hermitian matrices.*

> *It is clear that only real numbers can stand on the main diagonal of a self-adjoint matrix, because only they equal their own conjugates.*

> *Every real symmetric matrix is self-adjoint, since real numbers equal their own conjugates. Moreover, since non-real complex numbers do not equal their own conjugates, complex symmetric matrices are self-adjoint if and only if all their elements are real.*

**Example 7.98 (Self-adjoint matrices).** *Among the matrices*

$$\begin{bmatrix} 1 & \mathrm{i} & 1+\mathrm{i} \\ -\mathrm{i} & 2 & 2-3\mathrm{i} \\ 1-\mathrm{i} & 2+3\mathrm{i} & 3 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}, \quad \begin{bmatrix} \mathrm{i} & 1+\mathrm{i} \\ 1-\mathrm{i} & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 1+\mathrm{i} \\ 1+\mathrm{i} & 2 \end{bmatrix}$$

*the first two are self-adjoint, the third is not, because not every number on its main diagonal is real, neither is the fourth, but it is a complex symmetric matrix!*

#### Distance and orthogonal projection in complex spaces

Using the complex dot product, the distance and orthogonality of complex vectors can be defined, similarly to the real case.

The *length*, or *absolute value*, of a complex vector $\mathbf{u} \in \mathbb{C}^n$ is $|\mathbf{u}| = \sqrt{\mathbf{u} \cdot \mathbf{u}}$, the *distance between two vectors* is equal to the length of their difference, i.e., in the case of vectors $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$, $d(\mathbf{u}, \mathbf{v}) = |\mathbf{u} - \mathbf{v}|$. Two vectors are considered *orthogonal* if their dot product is 0.

> *The cosine of the angle between two complex vectors cannot be defined in a manner similar to the real case, not even with the formula! See exercises ??, ??.*

**Theorem 7.99 (Cauchy-Bunyakovsky-Schwarz inequality).** *For arbitrary vectors $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$*

$$|\mathbf{u} \cdot \mathbf{v}| \leq |\mathbf{u}||\mathbf{v}|. \tag{7.28}$$

*Equality holds if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent, i.e., if one vector is a scalar multiple of the other.*

The proof of Theorem 1.51 works here as well with minimal modification!

> *Several differences between the use of real and complex dot products are a consequence of the fact that the angle between complex vectors cannot be defined in the same way as with reals (see exercises ??, ??), so the Pythagorean theorem cannot be stated in the same way either (see exercise 7.50).*

#### Unitary matrices

The complex analogues of orthogonal matrices are unitary matrices.

**Definition 7.100 (Unitary matrix).** *A complex square matrix $\mathbf{U}$ is unitary if $\mathbf{U}^\mathsf{H}\mathbf{U} = \mathbf{I}$.*

> *Similar to orthogonal matrices, it can be proven that an $\mathbf{U} \in \mathbb{C}^{n \times n}$ matrix is unitary if and only if any of the following is fulfilled:*
> - *$\mathbf{U}\mathbf{U}^\mathsf{H} = \mathbf{I}$,*
> - *$\mathbf{U}^{-1} = \mathbf{U}^\mathsf{H}$,*
> - *the column vectors of $\mathbf{U}$ form an orthonormal basis with respect to the complex dot product,*
> - *the row vectors of $\mathbf{U}$ form an orthonormal basis with respect to the complex dot product,*
> - *$|\mathbf{U}\mathbf{x}| = |\mathbf{x}|$ for all $\mathbf{x} \in \mathbb{C}^n$ vectors,*
> - *$\mathbf{U}\mathbf{x} \cdot \mathbf{U}\mathbf{y} = \mathbf{x} \cdot \mathbf{y}$.*

### Exercises

#### Dot product, length, distance of complex vectors

*Calculate the values of the following dot products!*

**7.42.** $(1+\mathrm{i}, \mathrm{i}, -1) \cdot (1+\mathrm{i}, -\mathrm{i}, -1)$

**7.43.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i}) \cdot (1+\mathrm{i}, 0, 2, 1-\mathrm{i})$

*What is the length of the following vectors?*

**7.44.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i})$

**7.45.** $(a+b\mathrm{i}, b+c\mathrm{i}, c+a\mathrm{i})$, $a, b, c \in \mathbb{R}$

*Calculate the distance between the following two vectors!*

**7.46.** $(1+\mathrm{i}, \mathrm{i}, -1)$, $(1+\mathrm{i}, -\mathrm{i}, -1)$

**7.47.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i})$, $(1+\mathrm{i}, 0, 2, 1-\mathrm{i})$

#### Angle of complex vectors

**7.48.** Let $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$, and let
$\hat{\mathbf{u}} = (\Re(u_1), \Im(u_1), \dots, \Re(u_n), \Im(u_n))$,
$\hat{\mathbf{v}} = (\Re(v_1), \Im(v_1), \dots, \Re(v_n), \Im(v_n)) \in \mathbb{R}^{2n}$. Let $\varphi = (\hat{\mathbf{u}}, \hat{\mathbf{v}})_\angle$. Prove that

$$\cos(\varphi) = \frac{\Re(\mathbf{u} \cdot \mathbf{v})}{|\mathbf{u}||\mathbf{v}|} \tag{7.29}$$

It is customary to define the angle of two complex vectors with this formula!

#### Pythagorean theorem for complex vectors

**7.49.** Consider the vectors $\mathbf{a} = (1, \mathrm{i})$ and $\mathbf{b} = (-\mathrm{i}, 1)$. Show that although $|\mathbf{a}|^2 + |\mathbf{b}|^2 = |\mathbf{a} + \mathbf{b}|^2$, it is not true that $\mathbf{a} \cdot \mathbf{b} = 0$, that is, the Pythagorean theorem cannot be stated for complex vectors in the same way as for real ones.

**7.50.** Pythagorean theorem for complex vectors. For arbitrary $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$ vectors, $|\mathbf{u}|^2 + |\mathbf{v}|^2 = |\mathbf{u} + \mathbf{v}|^2$ holds if and only if $\Re(\mathbf{a} \cdot \mathbf{b}) = 0$.

### Discrete Fourier Transform

#### Fourier matrices

The Vandermonde matrix formed from the powers of the $N$-th complex root of unity has received a remarkably important role in modern engineering applications. To understand the basic properties of this matrix, we approach it through the relationship between the coefficients and the substitution values of Fourier sums.

The complex form of Fourier series

$$\sum_{n=-\infty}^{\infty} c_n e^{n\mathrm{i}t}$$

and their partial sums of the form

$$\sum_{n=0}^{N-1} c_n e^{n\mathrm{i}t} = c_0 + c_1 e^{\mathrm{i}t} + c_1 e^{2\mathrm{i}t} + \cdots + c_{N-1} e^{(N-1)\mathrm{i}t} \tag{7.30}$$

play a key role in the description of periodic functions, or functions defined on a bounded domain. The sum (7.30) is called a (discrete) *Fourier sum*.

**Proposition 7.101 (Substitution values of a Fourier sum).** *The mapping that assigns the substitution values of the Fourier sum (7.30) taken at the points $0, \frac{2\pi}{N}, \frac{4\pi}{N}, \dots, \frac{2(N-1)\pi}{N}$ dividing the interval $[0, 2\pi]$ into $N$ equal parts to the coefficients of the Fourier sum is linear, and its matrix is $\left[e^{\frac{2\pi\mathrm{i}}{N}mn}\right]$ ($0 \leq m, n < N$).*

*Proof.* First, let us examine the case $N = 3$. The division points are: $t_0 = 0$, $t_1 = 2\pi/3$, $t_2 = 4\pi/3$. The Fourier sum is $c_0 + c_1 e^{\mathrm{i}t} + c_2 e^{2\mathrm{i}t}$, let its substitution value at $t_k$ be denoted by $y_k$. Thus

$$\begin{aligned}
y_0 &= c_0 + c_1 e^{\mathrm{i}0} + c_2 e^{2\mathrm{i}0} = c_0 + c_1 + c_2 \\
y_1 &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}}{3}} + c_2 e^{\frac{4\pi\mathrm{i}}{3}} = c_0 + c_1 \varepsilon + c_2 \varepsilon^2 \\
y_2 &= c_0 + c_1 e^{\frac{4\pi\mathrm{i}}{3}} + c_2 e^{\frac{8\pi\mathrm{i}}{3}} = c_0 + c_1 \varepsilon^2 + c_2 \varepsilon^4
\end{aligned}$$

where $\varepsilon = e^{\frac{2\pi\mathrm{i}}{3}}$ denotes the third complex root of unity with the smallest positive argument. It is clear that the mapping $(c_0, c_1, c_2) \mapsto (y_0, y_1, y_2)$ is linear, whose matrix product form is

$$\begin{bmatrix} y_0 \\ y_1 \\ y_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & \varepsilon & \varepsilon^2 \\ 1 & \varepsilon^2 & \varepsilon^4 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \end{bmatrix}$$

The general case is similarly simple, but let's also look at the cases $N = 2$ and $N = 4$. For $N = 2$, $\varepsilon = e^{\frac{2\pi\mathrm{i}}{2}} = -1$ is the primitive root of unity, so

$$\begin{bmatrix} y_0 \\ y_1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & \varepsilon \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \end{bmatrix},$$

while for $N = 4$, $\varepsilon = e^{\frac{2\pi\mathrm{i}}{4}} = \mathrm{i}$, so

$$\begin{bmatrix} y_0 \\ y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & \varepsilon & \varepsilon^2 & \varepsilon^3 \\ 1 & \varepsilon^2 & \varepsilon^4 & \varepsilon^6 \\ 1 & \varepsilon^3 & \varepsilon^6 & \varepsilon^9 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix}.$$

In the general case, the $n$-th division point is $\frac{2n\pi}{N}$ ($n = 0, 1, 2, \dots, N-1$), denoting the substitution value of the Fourier sum at this point by $y_n$

$$\begin{aligned}
y_0 &= c_0 + c_1 e^{\mathrm{i}0} + c_2 e^{2\mathrm{i}0} + \cdots + c_{N-1} e^{(N-1)\mathrm{i}0} = c_0 + c_1 + \cdots + c_{N-1} \\
y_1 &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}}{N}} + c_2 e^{\frac{4\pi\mathrm{i}}{N}} + \cdots + c_{N-1} e^{\frac{2(N-1)\pi\mathrm{i}}{N}} \\
y_2 &= c_0 + c_1 e^{\frac{4\pi\mathrm{i}}{N}} + c_2 e^{\frac{8\pi\mathrm{i}}{N}} + \cdots + c_{N-1} e^{\frac{4(N-1)\pi\mathrm{i}}{N}} \\
&\vdots \\
y_{N-1} &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}(N-1)}{N}} + c_2 e^{\frac{4\pi\mathrm{i}(N-1)}{N}} + \cdots + c_{N-1} e^{\frac{2\pi\mathrm{i}(N-1)^2}{N}}
\end{aligned}$$

Using the notation $\varepsilon = e^{2\pi\mathrm{i}/N}$, in matrix product form

$$\begin{bmatrix} y_0 \\ y_1 \\ \vdots \\ y_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 & \cdots & 1 \\ 1 & \varepsilon & \varepsilon^2 & \varepsilon^3 & \cdots & \varepsilon^{N-1} \\ 1 & \varepsilon^2 & \varepsilon^4 & \varepsilon^6 & \cdots & \varepsilon^{2(N-1)} \\ 1 & \varepsilon^3 & \varepsilon^6 & \varepsilon^9 & \cdots & \varepsilon^{3(N-1)} \\ \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & \varepsilon^{N-1} & \varepsilon^{2(N-1)} & \varepsilon^{3(N-1)} & \cdots & \varepsilon^{(N-1)^2} \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_{N-1} \end{bmatrix} \qquad \square$$

The coefficient matrix in this example is a Vandermonde matrix, specifically the matrix $\mathbf{V}_N(1, \varepsilon, \varepsilon^2, \dots, \varepsilon^{N-1})$, which we denote by $\boldsymbol{\Phi}_{N,\varepsilon}$. The conjugate of this matrix will also be important, which is the Vandermonde matrix associated with the root of unity $\omega = \bar{\varepsilon} = e^{-2\pi\mathrm{i}/N}$. Both of these matrices are also called *Fourier matrices*. Thus $[\boldsymbol{\Phi}_{N,\varepsilon}]_{kn} = \varepsilon^{kn}$, $[\boldsymbol{\Phi}_{N,\omega}]_{kn} = \omega^{kn}$ ($0 \leq k, n < N$), that is in detail

$$\boldsymbol{\Phi}_{N,\varepsilon} = \mathbf{V}_N(1, \varepsilon, \varepsilon^2, \dots, \varepsilon^{N-1}) = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \varepsilon & \cdots & \varepsilon^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \varepsilon^{N-1} & \cdots & \varepsilon^{(N-1)^2} \end{bmatrix} \tag{7.31}$$

$$\boldsymbol{\Phi}_{N,\omega} = \mathbf{V}_N(1, \omega, \dots, \omega^{N-1}) = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \omega & \cdots & \omega^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \omega^{N-1} & \cdots & \omega^{(N-1)^2} \end{bmatrix} \tag{7.32}$$

In the previous example, knowing the Fourier coefficients, we determined the substitution values of the function. In practical applications, the reverse order is mainly of interest: we have measured data $y_k$, and we are looking for the coefficients $c_k$. The following theorem provides basic knowledge for this.

**Theorem 7.102 (Properties of Fourier matrices).** *Let $N$ be a positive integer, $\varepsilon = e^{2\pi\mathrm{i}/N}$, $\omega = \bar{\varepsilon} = e^{-2\pi\mathrm{i}/N}$. The Fourier matrices $\boldsymbol{\Phi}_{N,\varepsilon}$ and $\boldsymbol{\Phi}_{N,\omega}$ have the following properties:*

*a) The $k$-th and $(N-k)$-th rows of any Fourier matrix are conjugates of each other, and for even $N$, the $N/2$-th row vector is $(1, -1, 1, -1, \dots)$.*

*b) The two Fourier matrices are conjugates of each other and simultaneously adjoints of each other, i.e., $\boldsymbol{\Phi}_{N,\omega} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon} = \boldsymbol{\Phi}_{N,\varepsilon}^\mathsf{H}$ and $\boldsymbol{\Phi}_{N,\varepsilon} = \overline{\boldsymbol{\Phi}}_{N,\omega} = \boldsymbol{\Phi}_{N,\omega}^\mathsf{H}$.*

*c) $\boldsymbol{\Phi}_{N,\varepsilon}\boldsymbol{\Phi}_{N,\omega} = N\mathbf{I}_N$, so $\boldsymbol{\Phi}_{N,\varepsilon}$ and $\boldsymbol{\Phi}_{N,\omega}$ are invertible,*

$$\boldsymbol{\Phi}_{N,\varepsilon}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\omega}, \ \boldsymbol{\Phi}_{N,\omega}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon},$$

*furthermore $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}$ and $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\omega}$ are unitary.*

*Proof.* a) The $n$-th element of the $k$-th and $(N-k)$-th rows of the matrix $\boldsymbol{\Phi}_{N,\varepsilon}$ is $\varepsilon^{kn}$ and $\varepsilon^{(N-k)n}$, respectively. Transforming the latter we get

$$\varepsilon^{(N-k)n} = \varepsilon^{Nn}\varepsilon^{-kn} = (\varepsilon^{-1})^{kn} = \bar{\varepsilon}^{kn}.$$

Since for every positive even $N$ $\varepsilon^{\frac{N}{2}} = -1$, the powers of $-1$ appear in the $N/2$-th row.

b) Since $\omega = \bar{\varepsilon}$, therefore $\omega^s = \bar{\varepsilon}^s$, so $\boldsymbol{\Phi}_{N,\omega} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon}$. On the other hand, $\boldsymbol{\Phi}_{N,\varepsilon}$ is symmetric, consequently $\overline{\boldsymbol{\Phi}}_{N,\varepsilon} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon}^\mathsf{T} = \boldsymbol{\Phi}_{N,\varepsilon}^\mathsf{H}$.

c) Let us calculate the matrix $\boldsymbol{\Phi}_{N,\varepsilon}\boldsymbol{\Phi}_{N,\omega}$! In the $n$-th column of the $k$-th row of the product is the sum

$$\sum_{m=0}^{N-1} \varepsilon^{km}\omega^{mn} = \sum_{m=0}^{N-1} \varepsilon^{m(k-n)} = \sum_{m=0}^{N-1} (\varepsilon^{k-n})^m$$

If $k = n$, i.e., $\varepsilon^{k-n} = 1$, then this sum is $N$, in all other cases it is $0$ (see Proposition ?? in the appendix on complex numbers). One consequence of all this is that $\boldsymbol{\Phi}_{N,\varepsilon}$, $\boldsymbol{\Phi}_{N,\omega}$ are invertible, the inverse of $\boldsymbol{\Phi}_{N,\varepsilon}$ is $\frac{1}{N}\boldsymbol{\Phi}_{N,\omega}$, the inverse of $\boldsymbol{\Phi}_{N,\omega}$ is $\frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}$. The other consequence is that

$$\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\omega}\right) = \mathbf{I}_N,$$

which, considering b) as well, means exactly that

$$\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)^\mathsf{H} = \mathbf{I}_N,$$

that is, $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}$ is unitary. $\square$

#### Discrete Fourier Transform

We can think of the discrete Fourier transform as a linear mapping $\mathbb{C}^N \to \mathbb{C}^N$ that assigns the vector of coefficients of the trigonometric components of a function to the vector of substitution values of an — usually complex — function.

In Example 7.101, using the coefficients of a Fourier sum, we expressed the values taken by the function at specified places. The reverse direction is much more interesting: we know the values taken by an $f$ function at $N$ different specified places, and $N$ linearly independent functions are given. We are looking for the coefficients of a linear combination of these functions such that this linear combination coincides with $f$ at the specified places. In the case of the discrete Fourier transform to be defined below, we start from the function

$$f(t) = \frac{1}{N} \sum_{n=0}^{N-1} c_n e^{n\mathrm{i}t}$$

the specified places are the points $2k\pi/N$ ($k = 0, 1, \dots, N-1$) dividing the interval $[0, 2\pi]$ into $N$ parts. We will call the inverse of the mapping $(c_0, c_1, \dots, c_{N-1}) \mapsto (y_0, y_1, \dots, y_{N-1})$ the discrete Fourier transform. Its matrix is $\boldsymbol{\Phi}_{N,\omega}$, for which we will also use the notation $\mathbf{F}_N$ from now on. From this approach, the function $f$ can be completely omitted, since the essence is that we assign another $N$-tuple of numbers to an $N$-tuple of numbers!

**Definition 7.103 (Discrete Fourier Transform (DFT)).** *The mapping $\mathbf{F}_N : \mathbb{C}^N \to \mathbb{C}^N : \mathbf{x} \mapsto \mathbf{X} = \mathbf{F}_N\mathbf{x}$ is called the discrete Fourier transform.*

> *Thus, the discrete Fourier transform is the matrix mapping belonging to the matrix $\mathbf{F}_N = \boldsymbol{\Phi}_{N,\omega}$ given by formula (7.32).*

> *Expanding the mapping coordinate by coordinate:*
>
> $$X_k = \sum_{n=0}^{N-1} x_n e^{-\frac{2\pi\mathrm{i}}{N}kn} = \sum_{n=0}^{N-1} x_n \omega^{kn} \qquad (\omega = e^{-\frac{2\pi\mathrm{i}}{N}}). \tag{7.33}$$

> *The matrix product form of the transformation $\mathbf{F}_N$ is*
>
> $$\mathbf{F}_N : \begin{bmatrix} x_0 \\ x_1 \\ \vdots \\ x_{N-1} \end{bmatrix} \mapsto \begin{bmatrix} X_0 \\ X_1 \\ \vdots \\ X_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \omega & \cdots & \omega^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \omega^{N-1} & \cdots & \omega^{(N-1)^2} \end{bmatrix} \begin{bmatrix} x_0 \\ x_1 \\ \vdots \\ x_{N-1} \end{bmatrix}.$$

> *Widespread notations in this topic: the dimension of the vector to be transformed is denoted by a capital $N$, the image vector is denoted by the capitalized version of the vector to be transformed, i.e., the image of $\mathbf{x}$ is $\mathbf{X}$, the image of $\mathbf{y}$ is $\mathbf{Y}$, etc., the coordinates of the vectors are indexed from 0 to $N-1$.*

> *The discrete Fourier transform is often defined with another constant multiple of one of the Fourier matrices. The unitary $\frac{1}{\sqrt{N}}\mathbf{F}_N$, the $\frac{1}{N}\mathbf{F}_N$ or the matrix $\boldsymbol{\Phi}_{N,\hat{\varepsilon}}$ also occur as the matrix of the transformation, in fact, some consider every matrix $\boldsymbol{\Phi}_{N,\hat{\varepsilon}}$ where $\hat{\varepsilon}$ is a primitive $N$-th root of unity as a matrix of a DFT.*

> *The definition we gave is the most widespread, most known software also uses this. The reason for this is the closer connection of this definition with the continuous Fourier transform, and this is also used the most in signal processing. For other applications, however, another definition mentioned above might be more appropriate.*

> *Specifically, the matrices $\mathbf{F}_1$, $\mathbf{F}_2$, $\mathbf{F}_4$ and $\mathbf{F}_8$:*
>
> $$\mathbf{F}_1 = [1], \quad \mathbf{F}_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}, \quad \mathbf{F}_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \end{bmatrix},$$
>
> $$\mathbf{F}_8 = \begin{bmatrix} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 1 & \frac{1-\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{-1-\mathrm{i}}{\sqrt{2}} & -1 & \frac{-1+\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{1+\mathrm{i}}{\sqrt{2}} \\ 1 & -\mathrm{i} & -1 & \mathrm{i} & 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & \frac{-1-\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{1-\mathrm{i}}{\sqrt{2}} & -1 & \frac{1+\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{-1+\mathrm{i}}{\sqrt{2}} \\ 1 & -1 & 1 & -1 & 1 & -1 & 1 & -1 \\ 1 & \frac{-1+\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{1+\mathrm{i}}{\sqrt{2}} & -1 & \frac{1-\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{-1-\mathrm{i}}{\sqrt{2}} \\ 1 & \mathrm{i} & -1 & -\mathrm{i} & 1 & \mathrm{i} & -1 & -\mathrm{i} \\ 1 & \frac{1+\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{-1+\mathrm{i}}{\sqrt{2}} & -1 & \frac{-1-\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{1-\mathrm{i}}{\sqrt{2}} \end{bmatrix}$$

**Theorem 7.104 (Properties of the DFT).** *Consider the discrete Fourier transform $\mathbf{F}_N$, and let the image of the vector $\mathbf{x} = (x_0, x_1, \dots, x_{N-1})$ be $\mathbf{X} = (X_0, X_1, \dots, X_{N-1})$. Then the following hold true:*

*a) The image of a constant vector is an impulse vector (whose coordinates are all 0 except the zeroth one), and conversely, specifically*

$$\mathbf{F}_N(c, c, \dots, c) = (Nc, 0, \dots, 0), \quad \mathbf{F}_N(c, 0, \dots, 0) = (c, c, \dots, c).$$

*where $c \in \mathbb{C}$ is an arbitrary constant.*

*b) If $\mathbf{x}$ is a real vector, then $X_{N-k} = \overline{X}_k$.*

*c) The transformation $\mathbf{F}_N$ is invertible, its inverse (IDFT) in several forms:*

$$\mathbf{x} = \mathbf{F}_N^{-1}\mathbf{X} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}\mathbf{X}, \quad x_k = \frac{1}{N}\sum_{n=0}^{N-1} X_n \varepsilon^{kn} = \frac{1}{N}\sum_{n=0}^{N-1} X_n e^{\frac{2\pi\mathrm{i}}{N}kn}.$$

*Proof.* a) The proof of the first part of the statement can be read directly from the first column of the product $\boldsymbol{\Phi}_{N,\varepsilon}(c\boldsymbol{\Phi}_{N,\omega}) = cN\mathbf{I}_N$, its second part from the first column of the matrix $c\boldsymbol{\Phi}_{N,\varepsilon}$. But referring to Proposition ?? also used in the proof of Theorem 7.102, it also follows immediately directly.

b) Using formula (7.33)

$$\begin{aligned}
X_{N-k} &= \sum_{n=0}^{N-1} x_n \omega^{(N-k)n} = \sum_{n=0}^{N-1} x_n \omega^{-kn} \\
&= \sum_{n=0}^{N-1} x_n \overline{\omega}^{kn} = \overline{\sum_{n=0}^{N-1} x_n \omega^{kn}} = \overline{X}_k
\end{aligned}$$

c) Invertibility immediately follows from the fact that Fourier matrices are also Vandermonde matrices, whose determinant is not 0. Every relation in the theorem is an immediate consequence of the formula $\mathbf{F}_N^{-1} = \boldsymbol{\Phi}_{N,\omega}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}$. $\square$

**Example 7.105 (Calculation of DFT).** *Determine the discrete Fourier transform of the vector $\mathbf{x} = (1, \mathrm{i}, \mathrm{i}, 2)$!*

*Solution.* $N = 4$, thus

$$\mathbf{X} = \mathbf{F}_4\mathbf{x} = \mathbf{F}_4\mathbf{x} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \\ \mathrm{i} \\ 2 \end{bmatrix} = \begin{bmatrix} 3 + 2\mathrm{i} \\ 2 + \mathrm{i} \\ -1 \\ -3\mathrm{i} \end{bmatrix}. \qquad \square$$

#### Filtering periodic components

In engineering applications, it frequently occurs that higher frequency noise is added to a signal that can be described by a periodic function, which we want to "filter out" retrospectively. This can be easily performed with a DFT-IDFT pair.

The general model of filtering consists of three steps, which is illustrated by the following scheme:

$$\mathbf{x} \xrightarrow{\text{DFT}} \mathbf{X} \xrightarrow{\text{filtering}} \hat{\mathbf{X}} \xrightarrow{\text{IDFT}} \hat{\mathbf{x}}$$

In engineering practice, "filtering" is understood as many kinds of transformations that map the vector $\mathbf{X}$ to $\hat{\mathbf{X}}$. We only deal with the simplest case, omitting (filtering out) certain coordinates of $\mathbf{X}$.

In the following, we present an artificially simplified example, trackable even by mental calculation, for this typical application of the DFT.

**Example 7.106 (Filtering high-frequency components).** *A vector $\mathbf{x} = (4, 1, -2, -2, -2, 1)$ of the function values taken at places $t_k = kp/6$ ($k = 0, 1, \dots, 5$) of a $p$-periodic function is given. Decompose this function into a sum of a $p$-periodic trigonometric function and functions with period $p/m$ (noise) ($m > 1$ integer).*

**Solution.** The discrete Fourier transform of the vector $\mathbf{x}$ is

$$
\mathbf{X} = F_6\mathbf{x} = \mathbf{F}_{6,\omega}\mathbf{x} =
\begin{bmatrix}
1 & 1 & 1 & 1 & 1 & 1 \\
1 & \omega & \omega^2 & -1 & \omega^4 & \omega^5 \\
1 & \omega^2 & \omega^4 & 1 & \omega^2 & \omega^4 \\
1 & -1 & 1 & -1 & 1 & -1 \\
1 & \omega^4 & \omega^2 & 1 & \omega^4 & \omega^2 \\
1 & \omega^5 & \omega^4 & -1 & \omega^2 & \omega
\end{bmatrix}
\begin{bmatrix}
4 \\ 1 \\ -2 \\ -2 \\ -2 \\ 1
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 9 \\ 3 \\ 0 \\ 3 \\ 9
\end{bmatrix}
$$

where we used that $\omega^6 = 1$, $\omega + \omega^5 = 1$, $\omega^2 + \omega^4 = -1$. For example

$$
X_2 = [\mathbf{F}_{6,\omega}]_{2*}\,\mathbf{x} = 4 + \omega^2 - 2\omega^4 - 2 - 2\omega^2 + \omega^4 = 2 - \omega^2 - \omega^4 = 3.
$$

Since $\mathbf{x}$ is real, according to point _b)_ of Theorem 7.104 $X_{N-k} = \overline{X}_k$, which we can also check immediately. The $p$-periodic function "behind" the vector $\mathbf{x}$ in this model is

$$
x(t) = \frac{1}{6}\sum_{n=0}^{5} X_n \mathrm{e}^{ni\frac{2\pi}{p}t} = \frac{1}{6}\left(9\mathrm{e}^{i\frac{2\pi}{p}t} + 3\mathrm{e}^{2i\frac{2\pi}{p}t} + 3\mathrm{e}^{4i\frac{2\pi}{p}t} + 9\mathrm{e}^{5i\frac{2\pi}{p}t}\right)
$$

The value of $p$ actually has no role, because this function is evaluated only at the points $k\frac{p}{n}$ ($k = 0, 1, \ldots, 5$), thus in the above sum only the values

$$
\mathrm{e}^{i\frac{2\pi}{p}\frac{pn}{6}} = (\mathrm{e}^{i\frac{2\pi}{6}})^n = \varepsilon^n
$$

appear. For these, the relation

$$
\begin{aligned}
\varepsilon^n + \varepsilon^{6-n} &= (\mathrm{e}^{i\frac{2\pi}{6}})^n + (\mathrm{e}^{-i\frac{2\pi}{6}})^n = (\mathrm{e}^{i\frac{2\pi n}{6}}) + (\mathrm{e}^{-i\frac{2\pi n}{6}}) \\
&= 2\cos n\frac{\pi}{3} = 2\cos\frac{2\pi}{p}\frac{pn}{6}
\end{aligned}
$$

can be used, thus

$$
x(t) = \frac{1}{6}\left(18\cos\frac{2\pi}{p}t + 6\cos 2\frac{2\pi}{p}t\right) = 3\cos\frac{2\pi}{p}t + \cos 2\frac{2\pi}{p}t.
$$

So the function is $3\cos\frac{2\pi}{p}t$, the "noise" is $\cos 2\frac{2\pi}{p}t$. $\square$

### Fast Fourier Transform

Algorithms constructed for the fast computation of the discrete Fourier transform have a decisive role in the development of the digital technology that forms the basis of our culture today.

To calculate the discrete Fourier transform, i.e., to calculate the multiplication by the $n$-th order Fourier matrix, $n^2$ multiplications are required. Any algorithm that computes the result of this transformation in $O(n\log n)$, i.e., constant times $n\log n$ steps, is called a _fast Fourier transform_. There are many variants of it, we only describe the most known one, which was published first.

To estimate the speed of the transformation, let us now consider the time of performing every arithmetic operation to be identical. For the computation of the DFT, i.e., for the multiplication with the Fourier matrix, $N$ multiplications and $N - 1$ additions are needed in each row, and there are $N$ rows, thus the number of necessary operations is $N(2N - 1)$.

For the sake of simplicity, let $N$ be a power of two in the following, and let us group the sum giving $X_k$ according to the parity of the indices, i.e., let us add the even and odd indexed ones separately. Notice that this sum can be obtained from two Fourier transforms of half the size:

$$
\begin{aligned}
X_k &= \sum_{n=0}^{N-1} x_n \mathrm{e}^{\frac{-2\pi i}{N}kn} = \sum_{n=0}^{N-1} x_n \omega_N^{kn} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\mathrm{e}^{\frac{-2\pi i}{N}2nk} + \sum_{n=0}^{N/2-1} x_{2n+1}\mathrm{e}^{\frac{-2\pi i}{N}(2n+1)k} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\mathrm{e}^{\frac{-2\pi i}{N/2}nk} + \mathrm{e}^{\frac{-2\pi i}{N}k}\sum_{n=0}^{N/2-1} x_{2n+1}\mathrm{e}^{\frac{-2\pi i}{N/2}nk} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\omega_{N/2}^{nk} + \omega_N^k\sum_{n=0}^{N/2-1} x_{2n+1}\omega_{N/2}^{nk} \\
&= E_k + \omega_N^k O_k.
\end{aligned}
$$

To distinguish between the transformations of $N$ and $N/2$ dimensional vectors, let the $N$-th and $N/2$-th root of unity be denoted by

$$
\omega_N = \mathrm{e}^{\frac{-2\pi i}{N}}, \quad \text{and } \omega_{N/2} = \mathrm{e}^{\frac{-2\pi i}{N/2}}.
$$

And at this point, we can reduce the calculations with the fact that since the sums $E_k$ and $O_k$ are periodic according to $N/2$, the values of $E_k$ and $O_k$ do not need to be recalculated for $k \geq N/2$, because

$$
E_{k+N/2} = E_k, \quad O_{k+N/2} = O_k,
$$

and the coefficient $\omega_N^k$ is also reusable:

$$
\omega_N^{k+N/2} = \mathrm{e}^{\frac{-2\pi i}{N}(k+N/2)} = \mathrm{e}^{\frac{-2\pi i}{N}(k)}\mathrm{e}^{\frac{-2\pi i}{N}\frac{N}{2}} = -\mathrm{e}^{\frac{-2\pi i}{N}(k)} = -\omega_N^k.
$$

Comparing these, for $k < N/2$

$$
\begin{aligned}
X_k &= E_k + \omega_N^k O_k, \\
X_{k+N/2} &= E_k - \omega_N^k O_k.
\end{aligned}
$$

Thus, if $E_k$ and $O_k$ are already calculated, only one multiplication, one addition and one subtraction are needed to calculate $X_k$ and $X_{k+N/2}$, meaning that the coefficients $X_k$ ($0 \leq k < N$) can be obtained with $3N/2$ operations. After this, the calculation of $E_k$ and $O_k$ is performed in the same way recursively: since the vector is half the size, but there are two of them, here as well $3N/2$ operations will be needed. Since $N$ is a power of two, for example $N = 2^s$, we must repeat this step $s = \log_2 N$ times, which means the operation demand of the entire transformation is $\frac{3}{2}N\log_2 N$. Specifically for some $N$:

| $N$ | $2^4 = 16$ | $2^8 = 256$ | $2^{10} = 1024$ | $2^{16} = 65536$ |
|---|---|---|---|---|
| DFT | 496 | 130816 | 2096128 | 8589869056 |
| FFT | 96 | 3072 | 15360 | 1572864 |
| ratio | $> 5$ | $> 42$ | $> 136$ | $> 5461$ |

In the above calculation of the operation demand, we did not take into account the costs of calculating $\omega_N^k$. If the calculation of this power is equivalent to $C$ arithmetic operations, even then we only need $\frac{C+3}{2}N\log_2 N$ operations. With this, we have proven the following theorem:

**Theorem 7.107 (Fast Fourier Transform).** *There exists an algorithm that computes the discrete Fourier transform of an $N$-dimensional vector by performing at most $O(N\log_2 N)$ arithmetic operations.*

> *Gauss already knew the algorithm in the theorem and used it in 1805 to calculate the orbits of the second discovered asteroid Pallas and the third discovered Juno. The halving algorithm was rediscovered by Danielson and Lánczos in 1942, but they too did not examine the speed of the algorithm. The FFT became known and popular after the 1965 paper by Cooley and Tukey.*

The pseudocode of the algorithm appearing in the above proof:

```
function FFT(x)
    N ← dim(x)
    Let X be an N-dimensional vector
    if N = 1 then
        X₀ ← x₀
    else
        y ← even-indexed elements of x
        z ← odd-indexed elements of x
        Y ← FFT(y)
        Z ← FFT(z)
        for k ← 0 to N/2 − 1 do
            E ← Yₖ
            O ← e^(−2πi/N · k) Zₖ
            Xₖ ← E + O
            X_{k+N/2} ← E − O
    return X
```

> *Figure 7.21. FFT algorithm. The input of the recursive function is an arbitrary complex $\mathbf{x}$ vector, its output is the discrete Fourier transformed $\mathbf{X}$ vector.*

Since this transformation also consists of linear mappings, the fast Fourier transform can also be written in a matrix product form:

$$
\mathbf{F}_N = \boldsymbol{\Delta}_N
\begin{bmatrix}
\mathbf{F}_{N/2} & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_{N/2}
\end{bmatrix}
\boldsymbol{\Pi}_N,
$$

where $\boldsymbol{\Pi}_N$ is the permutation matrix that puts the even-indexed elements to the front, and $\boldsymbol{\Delta}_N$ is the matrix that adds the "half" transforms, and multiplies the odd-indexed ones with a power of $\omega$. Their instances with smaller indices:

$$
\boldsymbol{\Pi}_4 =
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\quad
\boldsymbol{\Pi}_8 =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

$$
\boldsymbol{\Delta}_4 =
\begin{bmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & -i \\
1 & 0 & -1 & 0 \\
0 & 1 & 0 & i
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{I}_2 & \mathbf{D}_2 \\
\mathbf{I}_2 & -\mathbf{D}_2
\end{bmatrix}
\quad
\boldsymbol{\Delta}_8 =
\begin{bmatrix}
\mathbf{I}_4 & \mathbf{D}_4 \\
\mathbf{I}_4 & -\mathbf{D}_4
\end{bmatrix}
$$

The diagonal matrices appearing in the $\boldsymbol{\Delta}$ matrices are the identity matrices, and the $\mathbf{D}$ matrices containing the powers of $\omega$, where $\mathbf{D}_k = \operatorname{diag}(1, \omega, \omega^2, \ldots, \omega^{k-1})$. So for example

$$

\begin{aligned}
\mathbf{F}_8 &= \boldsymbol{\Delta}_8
\begin{bmatrix}
\mathbf{F}_4 & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_4
\end{bmatrix}
\boldsymbol{\Pi}_8 \\
&= \boldsymbol{\Delta}_8
\begin{bmatrix}
\boldsymbol{\Delta}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Delta}_4
\end{bmatrix}
\begin{bmatrix}
\mathbf{F}_2 & \mathbf{O} & \mathbf{O} & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_2 & \mathbf{O} & \mathbf{O} \\
\mathbf{O} & \mathbf{O} & \mathbf{F}_2 & \mathbf{O} \\
\mathbf{O} & \mathbf{O} & \mathbf{O} & \mathbf{F}_2
\end{bmatrix}
\begin{bmatrix}
\boldsymbol{\Pi}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Pi}_4
\end{bmatrix}
\boldsymbol{\Pi}_8.
\end{aligned}
$$

We see that as a result of the recursion, the vector to be transformed must first be multiplied by block matrices consisting of $\boldsymbol{\Pi}$-matrices. The product of these matrices is also a permutation matrix. Its effect in this specific case is calculated by substituting the matrices $\boldsymbol{\Pi}_4$ and $\boldsymbol{\Pi}_8$ given above:

$$
\begin{bmatrix}
\boldsymbol{\Pi}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Pi}_4
\end{bmatrix}
\boldsymbol{\Pi}_8\mathbf{x} =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x_0 \\ x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \\ x_6 \\ x_7
\end{bmatrix}
=
\begin{bmatrix}
x_0 \\ x_4 \\ x_2 \\ x_6 \\ x_1 \\ x_5 \\ x_3 \\ x_7
\end{bmatrix}.
$$

At first glance, this seems to be an unintelligible permutation, but in fact we get a transformation that can be described very simply: it takes the $k$-th coordinate ($k = 0, 1, \ldots, N - 1$) of the vector $\mathbf{x}$ to be transformed to the $j$-th place if the binary form of $j$ is exactly the reverse of the binary form of $k$. For example, if $N = 16$ and $k = 6$, then $x_{12}$ goes to the third coordinate place during the permutation, since $12 = 1100_2$, and its reverse is $0011_2 = 3$. The proof of this is extremely simple if we notice that multiplication by the $i$-th $\boldsymbol{\Delta}$-matrix exactly sorts the elements into lexicographical order according to the first $i$ coordinates from the right. To illustrate this, it is sufficient to examine the $N = 16$ case shown in Figure 7.22.

> *Figure 7.22. By writing the indices of the coordinates of the vector $\mathbf{X}$ in binary, their movement during the permutations can be easily followed.*

### Convolution of vectors

The convolution of vectors arises in many places: from the multiplication of polynomials to transformations where a coordinate must be replaced by a fixed linear combination of its neighbors. It can be computed efficiently with the fast Fourier transform.

## Solutions

**7.1.** Let

$$
\mathbf{A} =
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}, \quad \mathbf{B} = 0100, \quad \mathbf{C} = 0010.
$$

Then $\operatorname{trace}(\mathbf{ABC}) = \operatorname{trace}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = 1$, while $\operatorname{trace}(\mathbf{BAC}) = \operatorname{trace}\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = 0$.

**7.2.** The matrix rotating the line of the vector $(2, 0, 1)$ into the $x$-axis:

$$
\mathbf{R} = \frac{1}{\sqrt{5}}
\begin{bmatrix}
2 & 0 & 1 \\
0 & \sqrt{5} & 0 \\
-1 & 0 & 2
\end{bmatrix}
$$

The matrix of the rotation around the $x$-axis:

$$
\mathbf{C} =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \frac{2}{\sqrt{5}} & -\frac{1}{3}\sqrt{5} \\
0 & \frac{1}{3}\sqrt{5} & \frac{2}{3}
\end{bmatrix}
$$

Thus the matrix of the rotation around the given line:

$$
\mathbf{C}^{-1}\mathbf{R}\mathbf{C} =
\begin{bmatrix}
2 & 0 & -1 \\
0 & \sqrt{5} & 0 \\
1 & 0 & 2
\end{bmatrix}
\quad
\mathbf{R}\mathbf{C} =
\begin{bmatrix}
\frac{14}{15} & -\frac{1}{3} & \frac{2}{15} \\
\frac{1}{3} & \frac{2}{3} & -\frac{2}{3} \\
\frac{2}{15} & \frac{2}{3} & \frac{11}{15}
\end{bmatrix}
$$

**7.5.** The row space of the new system of equations is spanned by the solution vectors of the original system of equations, therefore its null space coincides with the row space of the original one, which is spanned by the row vectors. (Of course, it is sufficient to select the independent ones from the row vectors. In our case, therefore, the null space of the given system of equations is spanned by the vectors $(1, 2, 1, 2, 1)$ and $(1, 3, 3, 1)$.)

**7.7.** Yes, $A : \mathbb{R}^3 \to \mathbb{R}$, its matrix is $\mathbf{A} = \begin{bmatrix} a_1 & a_2 & a_3 \end{bmatrix}$.

**7.8.** No, the mapping $A : \mathbf{x} \mapsto \mathbf{a} + \mathbf{x}$ does not map the $\mathbf{0}$ vector to $\mathbf{0}$, so it cannot be a matrix mapping (except if $\mathbf{a} = \mathbf{0}$, but then the mapping is the identity transformation)!

**7.10.** Yes, the matrix

$$
\mathbf{A} = \mathbf{a}(\mathbf{a} \cdot \mathbf{x}) = \mathbf{a}(\mathbf{a}^\mathsf{T}\mathbf{x}) = (\mathbf{a}\mathbf{a}^\mathsf{T})\mathbf{x} =
\begin{bmatrix}
a_1^2 & a_1 a_2 & a_1 a_3 \\
a_2 a_1 & a_2^2 & a_2 a_3 \\
a_1 a_3 & a_2 a_3 & a_3^2
\end{bmatrix}
$$

**7.11.** The proofs follow from the properties of matrix operations. Where we use a matrix identity, we write an M over the arrow stating the equivalence, and where we use the properties of operations between functions, we write an F:

_a)_ $(A + B)(\mathbf{x}) = C(\mathbf{x}) \overset{F}{\Longleftrightarrow} A(\mathbf{x}) + B(\mathbf{x}) = C(\mathbf{x}) \Longleftrightarrow \mathbf{Ax} + \mathbf{Bx} = \mathbf{Cx} \overset{M}{\Longleftrightarrow} (\mathbf{A} + \mathbf{B})\mathbf{x} = \mathbf{Cx}$.

_b)_ $(cA)(\mathbf{x}) = C(\mathbf{x}) \overset{F}{\Longleftrightarrow} cA(\mathbf{x}) = C(\mathbf{x}) \Longleftrightarrow c\mathbf{Ax} = \mathbf{Cx} \overset{M}{\Longleftrightarrow} (c\mathbf{A})\mathbf{x} = \mathbf{Cx}$.

_c)_ $(X \circ Y)(\mathbf{x}) = Z(\mathbf{x}) \overset{F}{\Longleftrightarrow} X(Y(\mathbf{x})) = Z(\mathbf{x}) \Longleftrightarrow \mathbf{X}(\mathbf{Yx}) = \mathbf{Zx} \overset{M}{\Longleftrightarrow} (\mathbf{XY})\mathbf{x} = \mathbf{Zx}$.

**7.12.** We know from Theorem 7.2 and Exercise 7.11 that $(A \circ B)(\mathbf{x}) = \mathbf{ABx}$ and $(B \circ A)(\mathbf{x}) = \mathbf{BAx}$. Thus, if $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$, that is, the inverse of $\mathbf{B}$ is $\mathbf{A}$, then $(A \circ B)(\mathbf{x}) = \mathbf{ABx} = \mathbf{Ix} = \mathbf{x}$, and similarly $(B \circ A)(\mathbf{x}) = \mathbf{BAx} = \mathbf{Ix} = \mathbf{x}$, that is, $A \circ B$ and $B \circ A$ are the identity mappings. Similarly, if $A \circ B$ and $B \circ A$ are the identity mappings, then $(\mathbf{AB})\mathbf{x} = (A \circ B)(\mathbf{x}) = \mathbf{x}$ and $(\mathbf{BA})\mathbf{x} = (B \circ A)(\mathbf{x}) = \mathbf{x}$, so $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$ (see Exercise ??), that is, $\mathbf{A}$ and $\mathbf{B}$ are inverses of each other.

**7.17.** Suppose that $\mathbf{B} = \mathbf{C}^{-1}\mathbf{AC}$. Let $\mathbf{A} = [a_{ij}]$, $\mathbf{C} = [c_{ij}]$, $\mathbf{C}^{-1} = [d_{ij}]$. Then

$$
\begin{aligned}
\operatorname{trace}\mathbf{B} &= \sum_{i=1}^{n}\left(\sum_{j=1}^{n}\sum_{k=1}^{n} d_{ij}a_{jk}c_{ki}\right) \\
&= \sum_{j=1}^{n}\sum_{k=1}^{n} a_{jk}\left(\sum_{i=1}^{n} c_{ki}d_{ij}\right) \\
&= \sum_{j=1}^{n}\sum_{k=1}^{n} a_{jk}\delta_{jk} \\
&= \operatorname{trace}\mathbf{A}
\end{aligned}
$$

**7.18.** _a)_ The formula to be proved:

$$
\mathbf{P} =
\begin{bmatrix}
\cos^2\alpha & \sin\alpha\cos\alpha \\
\sin\alpha\cos\alpha & \sin^2\alpha
\end{bmatrix}.
$$

This can be read from the following figure:

*Figure 7. The direction vector with angle $\alpha$ on the unit circle; the lengths of the segments projected onto the coordinate axes are $\cos^2\alpha$ and $\sin\alpha\cos\alpha$, as well as $\sin\alpha\cos\alpha$ and $\sin^2\alpha$. The points: $(\cos^2\alpha, \sin\alpha\cos\alpha)$ and $(\sin\alpha\cos\alpha, \sin^2\alpha)$.*

The lengths of the legs of the two right triangles shown here are $\cos\alpha$ and $\sin\alpha$, and thus, for example, the two axis projections of the segment of length $\cos\alpha$ have lengths $\cos^2\alpha$ and $\cos\alpha\sin\alpha$, so the image of $\mathbf{i}$ is $(\cos^2\alpha, \cos\alpha\sin\alpha)$. Similarly, the image of $\mathbf{j}$ is $(\sin\alpha\cos\alpha, \sin^2\alpha)$. The matrix consisting of the two column vectors indeed matches the one given above.

_b)_ The projection of $\mathbf{i}$ and $\mathbf{j}$ onto the line

$$
\operatorname{proj}_{\mathbf{b}}\mathbf{i} = \frac{\mathbf{i}\cdot\mathbf{b}}{\mathbf{b}\cdot\mathbf{b}}\mathbf{b} = \frac{1}{b_1^2 + b_2^2}
\begin{bmatrix} b_1^2 \\ b_1 b_2 \end{bmatrix}
\quad \text{and}
$$

$$
\operatorname{proj}_{\mathbf{b}}\mathbf{j} = \frac{\mathbf{j}\cdot\mathbf{b}}{\mathbf{b}\cdot\mathbf{b}}\mathbf{b} = \frac{1}{b_1^2 + b_2^2}
\begin{bmatrix} b_1 b_2 \\ b_2^2 \end{bmatrix}.
$$

The matrix obtained by writing these two vectors next to each other will be the matrix of the mapping:

$$
\frac{1}{b_1^2 + b_2^2}
\begin{bmatrix}
b_1^2 & b_1 b_2 \\
b_1 b_2 & b_2^2
\end{bmatrix}.
$$

This is identical to formula (7.9), that is

$$
\frac{1}{b_1^2 + b_2^2}
\begin{bmatrix}
b_1^2 & b_1 b_2 \\
b_1 b_2 & b_2^2
\end{bmatrix}
=
\begin{bmatrix}
\cos^2\alpha & \sin\alpha\cos\alpha \\
\sin\alpha\cos\alpha & \sin^2\alpha
\end{bmatrix},
$$

because if the angle of the vector $\mathbf{b}$ with the $x$-axis is $\alpha$, then $\cos\alpha = b_1/\sqrt{b_1^2 + b_2^2}$, and $\sin\alpha = b_2/\sqrt{b_1^2 + b_2^2}$.

**7.19.** If $P$ is an orthogonal projection, then for any vector $\mathbf{v}$, $\mathbf{v} - P\mathbf{v} \perp \mathbf{v}$, so by the Pythagorean theorem $|\mathbf{v}|^2 = |P\mathbf{v}|^2 + |\mathbf{v} - P\mathbf{v}|^2 \geq |P\mathbf{v}|^2$.

Conversely, assume that although $|P\mathbf{v}| \leq |\mathbf{v}|$ for all $\mathbf{v}$, but indirectly there is a $\mathbf{v} \in \operatorname{Im} P$ such that $\mathbf{v}$ is not orthogonal to $\operatorname{Ker} P$, that is, $P$ is not an orthogonal projection. Let the orthogonal projection of $\mathbf{v}$ onto $\operatorname{Ker} P$ be $\mathbf{w}$. Then $P(\mathbf{v} - \mathbf{w}) = P\mathbf{v} = \mathbf{v}$, and $|\mathbf{v} - \mathbf{w}| < |\mathbf{v}|$, thus $|\mathbf{v} - \mathbf{w}| < |P(\mathbf{v} - \mathbf{w})|$, which contradicts our assumption.

**7.20.**

_a)_ According to formula (7.12) $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$

_b)_ According to formula (7.12) $\begin{bmatrix} 1 \\ 0 \end{bmatrix}^+ = \begin{bmatrix} 1 & 0 \end{bmatrix}$.

_c)_ Substituting into formula (7.13)

$$
\begin{bmatrix} 0 \\ 1 \end{bmatrix}^+ = \left(\begin{bmatrix} 0 & 1 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = 1^{-1}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}.
$$

_d)_ $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$, thus according to formula (7.16)

$$
\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\left(\begin{bmatrix} 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & 0 \\ \frac{1}{2} & 0 \end{bmatrix}
$$

_e)_ $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$, thus according to formula (7.16)

$$
\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\left(\begin{bmatrix} 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 1 & 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{4} & \frac{1}{4} \\ \frac{1}{4} & \frac{1}{4} \end{bmatrix}
$$

_f)_ $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}$, thus using the results of _b)_ and _c)_ and the formula (7.17) for the pseudoinverse of the transpose

$$
\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}^+ = \left(\begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}\right)^+ = \begin{bmatrix} 0 & 1 \end{bmatrix}^+\begin{bmatrix} 1 \\ 0 \end{bmatrix}^+ = \begin{bmatrix} 0 \\ 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}
$$

**7.21.**

_a)_ $\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}^+ = \begin{bmatrix} 1/10 & 2/10 \\ 1/10 & 2/10 \end{bmatrix}$

_b)_ The transpose of the previous one.

_c)_ $\begin{bmatrix} 0 & 2 \\ 0 & 2 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ 1/4 & 1/4 \end{bmatrix}$

_d)_ $\begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1/10 & 2/10 & 0 \\ 1/10 & 2/10 & 0 \end{bmatrix}$

_e)_ $\begin{bmatrix} 1 & 1 & 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 1/4 \\ 1/4 \\ 1/4 \\ 1/4 \end{bmatrix}$

_f)_ $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}^+ = 1/30\begin{bmatrix} 1 & 2 & 3 & 4 \end{bmatrix}$

**7.22.**

_a)_ $\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 2/3 & -1/3 \\ 1/3 & 1/3 \\ -1/3 & 2/3 \end{bmatrix}$

_b)_ $\begin{bmatrix} 1 & 0 \\ 2 & 2 \\ 0 & 1 \end{bmatrix}^+ = \begin{bmatrix} 5/9 & 2/9 & -4/9 \\ -4/9 & 2/9 & 5/9 \end{bmatrix}$

_c)_ The transpose of the previous result.

_d)_ This matrix is the product of the matrices in _b)_ and _a)_, which are of full rank, thus its pseudoinverse is the product of the pseudoinverses in _a)_ and _b)_:

$$
\frac{1}{27}
\begin{bmatrix}
14 & 2 & -13 \\
1 & 4 & 1 \\
-13 & 2 & 14
\end{bmatrix}.
$$

**7.23.** Calculating the respective pseudoinverses:

$$
\left(\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}\right)^+ = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}
$$

$$
\begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}^+\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ \frac{1}{2} & \frac{1}{2} \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ \frac{1}{2} & 0 \end{bmatrix},
$$

and these are not equal.

**7.24.** Since the matrix $\mathbf{A}$ is given by an $\mathbf{XY}$ decomposition where $\mathbf{X}$ has full column rank and $\mathbf{Y}$ has full row rank, the result of Exercise ?? can be used. Thus

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{3}
\begin{bmatrix}
-1 & 2 & 0 & 1 \\
0 & 0 & 0 & 0 \\
2 & -1 & 0 & 1
\end{bmatrix}
$$

**7.25.** Similarly to the previous exercise, according to Exercise ??

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{15}
\begin{bmatrix}
-4 & 5 & 1 \\
-4 & 5 & 1 \\
3 & 0 & 3 \\
7 & -5 & 2
\end{bmatrix}
$$

**7.26.** According to Theorem Exercise ??

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{132}
\begin{bmatrix}
-32 & 34 & 2 & 4 \\
1 & 1 & 2 & 4 \\
34 & -32 & 2 & 4
\end{bmatrix}
$$

**7.28.** _Solution 1:_ If $\mathbf{A}$ is the matrix of an orthogonal projection, then due to $\mathbf{A}^\mathsf{T} = \mathbf{A}$, $\mathcal{S}(\mathbf{A}) = \mathcal{O}(\mathbf{A})$, and for every vector $\mathbf{x}$ in the row space $\mathbf{Ax} = \mathbf{x}$, so $\mathbf{A}^+\mathbf{x} = \mathbf{x}$ will also be true. On the other hand, due to $\mathbf{A}^\mathsf{T} = \mathbf{A}$, $\mathcal{N}(\mathbf{A}^\mathsf{T}) = \mathcal{N}(\mathbf{A})$, so for all $\mathbf{z} \in \mathcal{N}(\mathbf{A}^\mathsf{T})$ we have $\mathbf{Az} = \mathbf{0}$, and $\mathbf{A}^+\mathbf{z} = \mathbf{0}$ also holds, so the action of $\mathbf{A}$ and $\mathbf{A}^+$ coincides on $\mathcal{O}(\mathbf{A})$ and its orthogonal complement subspace, thus the two matrices are identical.

_Solution 2:_ Based on the Penrose theorem, we must check that $\mathbf{A}$ satisfies all four conditions to be a pseudoinverse. This is true, since due to $\mathbf{A}^\mathsf{T} = \mathbf{A} = \mathbf{A}^2$, we have $\mathbf{A}^3 = \mathbf{A}$ and $(\mathbf{A}^2)^\mathsf{T} = \mathbf{A}^2$.

The converse of the statement is not true. For example, for the matrix $\mathbf{A} = -\mathbf{I}$, $\mathbf{A}^+ = \mathbf{A}$, but for the matrix $-\mathbf{I}$, $(-\mathbf{I})^2 \neq -\mathbf{I}$, so $-\mathbf{I}$ is not a projection matrix.

**7.29.** The first statement immediately follows from equation (7.13), because if $\mathbf{A}$ has full column rank, then

$$
\begin{aligned}
\mathbf{A}^+\mathbf{A} &= \left((\mathbf{A}^\mathsf{T}\mathbf{A})^{-1}\mathbf{A}^\mathsf{T}\right)\mathbf{A} \\
&= (\mathbf{A}^\mathsf{T}\mathbf{A})^{-1}\mathbf{A}^\mathsf{T}\mathbf{A} = \mathbf{I}
\end{aligned}
$$

The other statement is similarly obtained from formula (7.14).

**7.30.** If $r(\mathbf{A}) = 1$, then there exist vectors $\mathbf{a}$ and $\mathbf{b}$ such that $\mathbf{A} = \mathbf{a}\mathbf{b}^\mathsf{T}$. Then according to formula (??) of Exercise ?? about computing the pseudoinverse

$$
\begin{aligned}
\mathbf{A}^+ &= \mathbf{b}(\mathbf{b}^\mathsf{T}\mathbf{b})^{-1}(\mathbf{a}^\mathsf{T}\mathbf{a})^{-1}\mathbf{a}^\mathsf{T} \\
&= \frac{1}{\mathbf{a}^\mathsf{T}\mathbf{a}\mathbf{b}^\mathsf{T}\mathbf{b}}\mathbf{b}\mathbf{a}^\mathsf{T} \\
&= \frac{1}{\operatorname{trace}(\mathbf{A}^\mathsf{T}\mathbf{A})}\mathbf{A}^\mathsf{T}.
\end{aligned}
$$

The latter equality depends on the fact that both $\mathbf{a}^\mathsf{T}\mathbf{a}\mathbf{b}^\mathsf{T}\mathbf{b}$ and $\operatorname{trace}(\mathbf{A}^\mathsf{T}\mathbf{A})$ are the sum of all elements of the form $a_i^2 b_j^2$, where $\mathbf{a} = (a_1, \ldots, a_m)$, $\mathbf{b} = (b_1, \ldots, b_n)$. The statement about vectors is a special case of this.

**7.31.** To prove the statement, it is enough to just check the four conditions of the Penrose theorem.

**7.32.** Based on Exercise 7.31, with the following blocking and the statement about the pseudoinverse of rank-1 matrices, the answer is immediately obtained:

$$
\left[\begin{array}{ccc|ccc}
1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 1
\end{array}\right]^+
=
\left[\begin{array}{cccc}
1/3 & 0 & 0 & 0 \\
1/3 & 0 & 0 & 0 \\
1/3 & 0 & 0 & 0 \\
\hline
0 & 1/2 & 1/2 & 0 \\
0 & 0 & 0 & 1/2 \\
0 & 0 & 0 & 1/2
\end{array}\right]
$$

**7.33.** $\mathbf{v}_2 = (9, 3, -1, 5) - \frac{(9, 3, -1, 5)(1, 1, -1, -1)}{|(1, 1, -1, -1)|^2}(1, 1, -1, -1) = (7, 1, 1, 7)$, thus the vectors of the orthonormal basis are: $\frac{1}{2}(1, 1, -1, -1)$, $\frac{1}{10}(7, 1, 1, 7)$

**7.34.** $\mathbf{v}_2 = (8, 6, 2, 0) - \frac{(8, 6, 2, 0)(1, -1, 1, -1)}{|(1, -1, 1, -1)|^2}(1, -1, 1, -1) = (7, 7, 1, 1)$, thus the vectors of the orthonormal basis are: $\frac{1}{2}(1, -1, 1, -1)$, $\frac{1}{10}(7, 7, 1, 1)$

**7.35.** $(2, -1, -20) - \frac{(1, 4, 8)(2, -1, -20)}{(1, 4, 8)(1, 4, 8)}(1, 4, 8) = (4, 7, -4)$.

$$
\mathbf{Q} = \frac{1}{9}
\begin{bmatrix}
1 & 4 \\
4 & 7 \\
8 & -4
\end{bmatrix}, \text{ and } \mathbf{R} = \mathbf{Q}^T\mathbf{A} =
\begin{bmatrix}
9 & -18 \\
0 & 9
\end{bmatrix}.
$$

**7.36.** Applying the result of Exercise 7.34

$$
\mathbf{A} = \mathbf{QR} =
\begin{bmatrix}
1/2 & 7/10 \\
-1/2 & 7/10 \\

1/2 & 1/10 \\
-1/2 & 1/10
\end{bmatrix}
\begin{bmatrix}
2 & 2 \\
0 & 10
\end{bmatrix}.
$$

**7.37.** First, we eliminate the first element of the third row. Here $a = 8$, $b = 15$, thus $r = \sqrt{8^2 + 15^2} = 17$. Accordingly, we rotate the first column vector of the $\begin{bmatrix} 8 & -4 \\ 15 & 1 \end{bmatrix}$ submatrix—located at the intersections of the first and third rows and columns—that is, the $(8, 15)$ vector, into the $(17, 0)$ vector. For the angle $\alpha$ of the rotation, $\cos\alpha = 8/17$, $\sin\alpha = -15/17$. From this:

$$
\mathbf{Q}_1 =
\begin{bmatrix}
8/17 & 0 & 15/17 \\
0 & 1 & 0 \\
-15/17 & 0 & 8/17
\end{bmatrix}
\quad
\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
17 & 12 & -1 \\
0 & 4 & 2 \\
0 & 3 & 4
\end{bmatrix}
$$

To eliminate the second element in the third row of the matrix $\mathbf{Q}_\mathbf{A}$, $a = 4$, $b = 3$, $r = \sqrt{4^2 + 3^2} = 5$, $\cos\alpha = 4/5$, $-\sin\alpha = 3/5$:

$$
\mathbf{Q}_2 =
\begin{bmatrix}
1 & 0 & 0 \\
0 & 4/5 & 3/5 \\
0 & -3/5 & 4/5
\end{bmatrix}
\quad
\mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
17 & 12 & -1 \\
0 & 5 & 4 \\
0 & 0 & 2
\end{bmatrix}
$$

Finally

$$
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} =
\begin{bmatrix}
8/17 & -9/17 & -12/17 \\
0 & 4/5 & -3/5 \\
15/17 & 24/85 & 32/85
\end{bmatrix}.
$$

**7.38.** The elimination of the elements below the main diagonal in the first column is accomplished by a reflection onto the hyperplane perpendicular to the vector

$$
\mathbf{a} = (1, 1, 1, 1) - (2, 0, 0, 0) = (-1, 1, 1, 1)
$$

resulting in the mapping $(1, 1, 1, 1) \mapsto (2, 0, 0, 0)$. The matrix of this reflection is:

$$
\begin{aligned}
\mathbf{Q}_1 &= \mathbf{I}_4 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} \\
&=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
- \frac{1}{2}
\begin{bmatrix}
1 & -1 & -1 & -1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1
\end{bmatrix} \\
&= \frac{1}{2}
\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & 1 & -1 \\
1 & -1 & -1 & 1
\end{bmatrix}
\end{aligned}
$$

$$
\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 0 & 0 & 1 \\
0 & 0 & -2 & 2 \\
0 & -5 & 3 & 1
\end{bmatrix}
$$

The elimination of the elements below the main diagonal in the second column of $\mathbf{Q}_1\mathbf{A}$ can be accomplished by a reflection mapping the vector $(0, 0, -5)$ to $(5, 0, 0)$. This is a reflection across the plane with the normal vector $\mathbf{a} = (0, 0, -5) - (5, 0, 0)$, whose matrix is:

$$
\begin{aligned}
\mathbf{H}_2 &= \mathbf{I}_3 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} \\
&=
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
-
\begin{bmatrix}
1 & 0 & 1 \\
0 & 0 & 0 \\
1 & 0 & 1
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 & -1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{bmatrix}
\end{aligned}
$$

From here

$$
\mathbf{Q}_2 =
\left[\begin{array}{c|ccc}
1 & 0 & 0 & 0 \\
\hline
0 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 \\
0 & -1 & 0 & 0
\end{array}\right], \quad
\hat{\mathbf{R}} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 5 & -3 & -1 \\
0 & 0 & -2 & 2 \\
0 & 0 & 0 & -1
\end{bmatrix}
$$

$$
\hat{\mathbf{Q}} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} = \mathbf{Q}_1\mathbf{Q}_2 = \frac{1}{2}
\begin{bmatrix}
1 & -1 & 1 & -1 \\
1 & 1 & -1 & -1 \\
1 & 1 & 1 & 1 \\
1 & -1 & -1 & 1
\end{bmatrix}.
$$

For these matrices, $\mathbf{A} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$, which is usually considered a QR decomposition, but it does not meet our definition because the main diagonal of $\hat{\mathbf{R}}$ contains non-positive elements as well. Multiplying the third and fourth rows of $\hat{\mathbf{R}}$ and the third and fourth columns of $\hat{\mathbf{Q}}$ by $-1$ does not change their product, thus the matrices of the QR decomposition are:

$$
\mathbf{Q} = \frac{1}{2}
\begin{bmatrix}
1 & -1 & -1 & 1 \\
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & 1 & -1
\end{bmatrix}, \quad
\mathbf{R} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 5 & -3 & -1 \\
0 & 0 & 2 & -2 \\
0 & 0 & 0 & 1
\end{bmatrix}.
$$

**7.39.** $r_{ii}$ is the distance of $\mathbf{a}_i$ from the subspace spanned by the vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_{i-1}$!

**7.40.**

$$
\mathbf{Q} =
\begin{bmatrix}
0.70711 & -0.40825 & 0.28868 & -0.50000 \\
0.70711 & 0.40825 & -0.28868 & 0.50000 \\
0.00000 & 0.81650 & 0.28868 & -0.50000 \\
0.00000 & 0.00000 & 0.86603 & 0.50000
\end{bmatrix},
$$

$$
\mathbf{R} =
\begin{bmatrix}
1.41421 & 2.12132 & 0.70711 & 0.00000 \\
0.00000 & 1.22474 & 2.04124 & 0.81650 \\
0.00000 & 0.00000 & 1.15470 & 2.02073 \\
0.00000 & 0.00000 & 0.00000 & 0.50000
\end{bmatrix}
$$

**7.48.** Since $|\mathbf{u}|^2 = |\hat{\mathbf{u}}|^2$, $|\mathbf{v}|^2 = |\hat{\mathbf{v}}|^2$, $|\mathbf{u} + \mathbf{v}|^2 = |\hat{\mathbf{u}} + \hat{\mathbf{v}}|^2$, furthermore $|\mathbf{u} + \mathbf{v}|^2 = |\mathbf{u}|^2 + |\mathbf{v}|^2 + \mathbf{u}\cdot\overline{\mathbf{v}} + \overline{\mathbf{u}\cdot\mathbf{v}}$, $\mathbf{z} + \overline{\mathbf{z}} = 2\Re\mathbf{z}$ and $|\hat{\mathbf{u}} + \hat{\mathbf{v}}|^2 = |\hat{\mathbf{u}}|^2 + |\hat{\mathbf{v}}|^2 + 2\hat{\mathbf{u}}\cdot\hat{\mathbf{v}}$, therefore

$$
\cos\varphi = \frac{\hat{\mathbf{u}}\cdot\hat{\mathbf{v}}}{|\hat{\mathbf{u}}||\hat{\mathbf{v}}|} = \frac{\Re(\mathbf{u}\cdot\mathbf{v})}{|\mathbf{u}||\mathbf{v}|}.
$$

**7.49.** The square of their length is 2, as we proved with formula 7.26, and the square of the length of the sum of the two vectors is

$$
(1 - i, 1 + i)\cdot(1 - i, 1 + i) = \begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix}^\mathsf{H}\begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix} = \begin{bmatrix} 1 + i & 1 - i \end{bmatrix}\begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix}
$$

Accordingly, $|(1, i)|^2 + |(-i, 1)|^2 = |(1 - i, 1 + i)|^2$, however, the scalar product of the two vectors is not 0:

$$
(1, i)\cdot(-i, 1) = \begin{bmatrix} 1 & -i \end{bmatrix}\begin{bmatrix} -i \\ 1 \end{bmatrix} = -2i.
$$

**7.50.**

$$
\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b})\cdot(\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a}\cdot\mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \mathbf{b}\cdot\mathbf{b} \\
&= \mathbf{a}\cdot\mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \overline{\mathbf{a}\cdot\mathbf{b}} + \mathbf{b}\cdot\mathbf{b} \\
&\overset{?}{=} \mathbf{a}\cdot\mathbf{a} + \mathbf{b}\cdot\mathbf{b} \\
&= |\mathbf{a}|^2 + |\mathbf{b}|^2,
\end{aligned}
$$

The equality marked with ? is satisfied exactly when $\Re(\mathbf{a}\cdot\mathbf{b}) = 0$. According to formula (7.29), this means that the angle enclosed by $\mathbf{u}$ and $\mathbf{v}$ is $\pi/2$. This always holds if $\mathbf{u}\cdot\mathbf{v} = 0$. Thus, if $\mathbf{u}\cdot\mathbf{v} = 0$, then $|\mathbf{u}|^2 + |\mathbf{v}|^2 = |\mathbf{u} + \mathbf{v}|^2$, but the converse is not true!

## Application: differentiability

> *The concept of linear mapping appears in many areas of applied mathematics, one of the reasons for this being that the differentiability of any vector-vector function means that there exists a linear mapping that "well approximates" the change in the function.*

### Differentiability of vector-vector functions

A very important application of linear mappings from $\mathbb{R}^n$ to $\mathbb{R}^m$ is the concept of differentiability of vector-vector functions.

The usual definition of differentiability is as follows: we say that the function $f : \mathbb{R} \to \mathbb{R}$ is _differentiable_ at the point $x$ if the limit

$$
D = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}
$$

exists and is finite. The number $D$ has an important meaning: the change of the function $f$ around $x$ can be well approximated by the change of the function $\mathrm{d}x \mapsto D\,\mathrm{d}x$ around 0. Geometrically, this means that if we place a coordinate system with variables $\mathrm{d}x$ and $\mathrm{d}y$ at the point $(x, f(x))$ on the graph of $f$, then the graph of $\mathrm{d}x \mapsto \mathrm{d}y = D\,\mathrm{d}x$ is the tangent to the graph of the function $f$ (see Figure 7.23). Accordingly, simplifying the formulation a bit, differentiability means that the function can be "well approximated" by a linear mapping $\mathbb{R} \to \mathbb{R}$, since the mapping $\mathrm{d}x \mapsto D\,\mathrm{d}x$ is such a mapping.

> *Figure 7.23. The coordinate axes $\mathrm{d}x$ and $\mathrm{d}y$ and the graph of the function $\mathrm{d}y = D\,\mathrm{d}x$ are highlighted with color. The figure also illustrates the relationship $\Delta y \approx \mathrm{d}y$.*

The "good approximation" intuitively means that when "zooming in" on the graph of $f$, that is, continuously magnifying it, the graph appears to straighten out. This is the line that we call the tangent of the graph, and which has the equation $\mathrm{d}y = D\,\mathrm{d}x$ in the new coordinate system.

This definition can be equivalently reformulated: we say that the function $f : \mathbb{R} \to \mathbb{R}$ is _differentiable_ at the point $x$ if there is a number $D$ such that

$$
\lim_{h \to 0}\frac{f(x + h) - f(x) - Dh}{h} = 0.
$$

This latter form also has the advantage of being easily generalizable. The main difficulty of generalization is that division by a vector cannot be properly defined, so we make a small but still equivalent change to this formula: we divide not by $h$, but by its absolute value:

$$
\lim_{h \to 0}\frac{f(x + h) - f(x) - Dh}{|h|} = 0.
$$

All these lead to the following definition:

**Definition 7.108 (Differentiability).** *We say that the function $\mathbf{f} : \mathbb{R}^n \to \mathbb{R}^m$ is differentiable at the point $\mathbf{x}$, if there exists a linear mapping $D_{\mathbf{f},\mathbf{x}} : \mathbb{R}^n \to \mathbb{R}^m$ for which*

$$
\lim_{\mathbf{h} \to \mathbf{0}}\frac{\mathbf{f}(\mathbf{x} + \mathbf{h}) - \mathbf{f}(\mathbf{x}) - D_{\mathbf{f},\mathbf{x}}\mathbf{h}}{|\mathbf{h}|} = \mathbf{0}.
$$

*The mapping $D_{\mathbf{f},\mathbf{x}}$ is called the derivative mapping of the function $\mathbf{f}$ at the point $\mathbf{x}$.*

- The notation $D_{\mathbf{f},\mathbf{x}}$ implies that the derivative mapping depends on both the function $\mathbf{f}$ and the point $\mathbf{x}$, but as a mapping itself, it assigns the vector $D_{\mathbf{f},\mathbf{x}}\mathbf{h}$ to a vector $\mathbf{h}$.

- The notation $D_{\mathbf{x}}(\mathbf{f})$ is more common, here for didactic reasons we chose one that makes it clearer that this is a linear mapping which will then act on some vector $\mathbf{h}$, and its image is $D_{\mathbf{x}}(\mathbf{f})\mathbf{h}$ or $D_{\mathbf{x}}(\mathbf{f})(\mathbf{h})$ – in our notation, $D_{\mathbf{f},\mathbf{x}}\mathbf{h}$.

- The meaning of the derivative can be easily visualized on an $\mathbb{R}^2 \to \mathbb{R}^2$ function. Let's consider a square grid in the domain, let its center be $\mathbf{x}$. Consider the image of this grid under the function $\mathbf{f}$, and the effect of the derivative mapping $D_{\mathbf{f},\mathbf{x}}$ on this grid if we place the origin at $\mathbf{x}$. By continuously decreasing the size of the grid and proportionally magnifying the images, we see that the two images "blend together" better and better (see Figure 7.24). This is reminiscent—though not perfectly analogous—to how "zooming in" on a point on the graph of a single-variable function makes the graph approach and blend into the tangent.

> *Figure 7.24. To illustrate the differentiability of an $\mathbb{R}^2 \to \mathbb{R}^2$ function at a point $\mathbf{x}$, let's consider the squares surrounding the point $\mathbf{x}$ of increasingly denser square grids of the domain, and their image under the function $\mathbf{f}$ (colored grid), and the effect of the derivative mapping $D_{\mathbf{f},\mathbf{x}}$ on this grid if we place the origin of its domain at $\mathbf{x}$ and the origin of its range at $\mathbf{f}(\mathbf{x})$. By magnifying the increasingly smaller images, it can be seen that the image under the function gets closer and closer to the image under the derivative mapping.*

### Jacobi matrix

The matrix of the derivative mapping can be easily obtained using the partial derivatives of the coordinate functions.

**Theorem 7.109 (Jacobi matrix).** *If the function $\mathbf{f} : \mathbb{R}^n \to \mathbb{R}^m$; $(x_1, x_2, \ldots, x_n) \mapsto (f_1, f_2, \ldots, f_m)$ is differentiable at the point $\mathbf{x}$, then the matrix of the linear derivative mapping $D_{\mathbf{f},\mathbf{x}}$ is the following, so-called Jacobi matrix:*

$$
\mathbf{D}_{\mathbf{f},\mathbf{x}} = \frac{\partial(f_1, f_2, \ldots, f_m)}{\partial(x_1, x_2, \ldots, x_n)}(\mathbf{x}) =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1}(\mathbf{x}) & \frac{\partial f_1}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_1}{\partial x_n}(\mathbf{x}) \\
\frac{\partial f_2}{\partial x_1}(\mathbf{x}) & \frac{\partial f_2}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_2}{\partial x_n}(\mathbf{x}) \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1}(\mathbf{x}) & \frac{\partial f_m}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_m}{\partial x_n}(\mathbf{x})
\end{bmatrix}
$$

**Proof.** If $\mathbf{f}$ is differentiable, then the limit in the definition also holds if $\mathbf{h}$ tends to the zero vector in a special way, for example, if $\mathbf{h} = t\mathbf{e}_j$, and $t \to 0$. Then

$$
\lim_{t \to 0}\frac{\mathbf{f}(\mathbf{x} + t\mathbf{e}_j) - \mathbf{f}(\mathbf{x}) - D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)}{|t|} = \mathbf{0}.
$$

The $i$-th coordinate function of the function $\mathbf{f}$ is $f_i$, the $i$-th coordinate of the vector $D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)$ is $\mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)$. Based on this

$$
\lim_{t \to 0}\frac{f_i(\mathbf{x} + t\mathbf{e}_j) - f_i(\mathbf{x}) - \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)}{|t|} = 0.
$$

This limit, however, is already the derivative of a single-variable function, which is none other than the $j$-th partial derivative of the function $f_i$, because by rearranging the equality and dividing by the sign of $t$ we get that

$$
\lim_{t \to 0}\frac{f_i(\mathbf{x} + t\mathbf{e}_j) - f_i(\mathbf{x})}{t} = \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}\mathbf{e}_j, \quad \text{that is } \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}\mathbf{e}_j = \frac{\partial f_i}{\partial x_j}(\mathbf{x}).
$$

This proves our statement. $\square$

- In practice, in the case of $\mathbb{R}^n \to \mathbb{R}$ functions, that is, $n$-variable scalar-valued functions, instead of the single-row Jacobi matrix, its vector form is used, which is called the _gradient vector_ and is denoted by $\nabla f$.

- Similarly, since the Jacobi matrix of $\mathbb{R} \to \mathbb{R}^n$ functions consists of a single column, its vector form is often used. If, for example, a function $\mathbf{r} : \mathbb{R} \to \mathbb{R}^3$; $t \mapsto \mathbf{r}(t)$ describes the motion of an object moving in space as a function of time, this vector is exactly the velocity vector of the motion.

**Example 7.110 (Calculating the Jacobi matrix).** *Determine the Jacobi matrix belonging to a general point and to the given point for the following functions!*

_1._ $f(x, y) = x^2 y - xy^3 + 1$, $(x, y) = (0, 1)$.

_2._ $\mathbf{f}(x, y) = (-x^3/2 + y^3/8, x + y)$, $(x, y) = (1, 1)$.

_3._ $\mathbf{r}(t) = (t^3, t^2, t)$, $t = 2$.

_4._ $\mathbf{f}(x_1, x_2, x_3) = (2x_1 + 3x_2, x_1 - x_2 - x_3)$, $(x_1, x_2, x_3) = (1, 2, 0)$.

**Solution.** *a)* $f(x,y) = x^2 y - xy^3$, its partial derivatives are $\frac{\partial}{\partial x} f(x,y) = 2xy - y^3$, $\frac{\partial}{\partial y} f(x,y) = x^2 - 3xy^2$. The matrix of the derivative mapping, i.e., the Jacobi matrix here is

$$\begin{bmatrix} 2xy - y^3 & x^2 - 3xy^2 \end{bmatrix}$$

The vector form of this matrix, i.e., the gradient vector is

$$\nabla f(x,y) = (2xy - y^3, x^2 - 3xy^2).$$

Its value at the point $(0,1)$ is $\nabla f(0,1) = (-1,0)$, and the Jacobi matrix at this point is $[-1\ 0]$.

*b)* The Jacobi matrix of the function $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$ and its value at the given point $(x,y) = (1,1)$ are

$$\begin{bmatrix} -\tfrac{3}{2}x^2 & \tfrac{3}{8}y^2 \\ 1 & 1 \end{bmatrix}, \text{ and } \begin{bmatrix} -\tfrac{3}{2} & \tfrac{3}{8} \\ 1 & 1 \end{bmatrix}.$$

For example, the first element of the first row is $\frac{\partial}{\partial x}(-x^3/2 + y^3/8) = -\tfrac{3}{2}x^2$. The effect of the derivative mapping, i.e., the Jacobi matrix, of the function $\mathbf{f}$ is illustrated in Figure 7.25 and 7.24.

*Figure 7.25. The left figure shows the grid given on the domain of the function $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$, and a small $2 \times 2$ part of it, centered at the point $(1,1)$. The bottom figure faintly shows the image of this grid and colorfully the image of the highlighted grid, as well as the effect of the derivative mapping belonging to the point $(1,1)$ on this highlighted grid.*

*c)* The Jacobi matrix of the function $\mathbf{r}(t) = (t^3, t^2, t)$ is

$$\begin{bmatrix} 3t^2 \\ 2t \\ 1 \end{bmatrix}, \text{ which at } t = 2 \text{ is } \begin{bmatrix} 12 \\ 4 \\ 1 \end{bmatrix}.$$

An $\mathbb{R} \to \mathbb{R}^3$ function is also used to describe the motion of a point (body) moving in space. If this function describes such a motion, then its velocity vector at any point is

$$\dot{\mathbf{r}}(t) = (3t^2, 2t, 1),$$

at the point corresponding to the parameter $t = 2$ it is $\dot{\mathbf{r}}(2) = (12, 4, 1)$.

*d)* The last example illustrates an important statement, namely that the derivative of a linear mapping at every point $\mathbf{x}$ is the mapping itself, that is, its derivative is itself. It is clear that the given mapping is a linear mapping, whose matrix product form is:

$$\mathbf{f}(x_1, x_2, x_3) = \begin{bmatrix} 2 & 3 & 0 \\ 1 & -1 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.$$

Its Jacobi matrix is indeed at any point $(x_1, x_2, x_3)$

$$\begin{bmatrix} 2 & 3 & 0 \\ 1 & -1 & -1 \end{bmatrix},$$

because the $j$-th partial derivative of the $i$-th coordinate function is exactly the element in the $i$-th row and $j$-th column of the coefficient matrix, i.e., a constant. Thus, this matrix will be the Jacobi matrix at every point, specifically at the point $(x_1, x_2, x_3) = (1, 2, 0)$ as well. $\square$

**Example 7.111 (Estimating function value with the Jacobi matrix).** *We know the Jacobi matrix belonging to a point in the domain of a differentiable function and the function value at that same point. Estimate the function value at a point close to this one given the following data!*

1. *$f(0,1) = 1$, $\mathbf{D}_{f,(0,1)} = [-1\ \ 0]$, $(x,y) = (-0.05, 1.1)$,*

2. *$\mathbf{f}(1,1) = (-\tfrac{3}{8}, 2)$, $\mathbf{D}_{\mathbf{f},(1,1)} = \begin{bmatrix} -3/2 & 3/8 \\ 1 & 1 \end{bmatrix}$, $(x,y) = (0.8, 1.1)$.*

*How good would these estimates be if the functions were the functions a) and b) from the previous exercise?*

**Solution.** To estimate the change of the function, the value $\mathbf{f}(\mathbf{x} + \mathbf{h}) - \mathbf{f}(\mathbf{x})$ must be estimated. According to the definition of differentiability, the quantity $\mathbf{D}_{\mathbf{f},\mathbf{x}}\mathbf{h}$ is suitable for this if the function is differentiable at the point $\mathbf{x}$. Therefore

$$\mathbf{f}(\mathbf{x} + \mathbf{h}) \approx \mathbf{f}(\mathbf{x}) + \mathbf{D}_{\mathbf{f},\mathbf{x}}\mathbf{h}.$$

Using this formula, we arrive at the following solutions:

*a)* In this exercise $\mathbf{h} = (-0.05, 0.1)$, so the change of the function can be estimated with the value

$$\mathbf{D}_{f,(0,1)}\mathbf{h} = \begin{bmatrix} -1 & 0 \end{bmatrix} \begin{bmatrix} -0.05 \\ 0.1 \end{bmatrix} = 0.05$$

thus the function value is

$$f(\mathbf{x} + \mathbf{h}) = f(-0.05, 1.1) \approx f(0,1) + \mathbf{D}_{f,(0,1)} \begin{bmatrix} -0.05 \\ 0.1 \end{bmatrix} = 1.05,$$

that is, $f(-0.05, 1.1) \approx 1.05$. If $f$ is the function from the previous exercise *a)*, i.e., $f(x,y) = x^2 y - xy^3 + 1$, then the exact value is $f(-0.05, 0.1) = 1.0693$.

*b)* Here $\mathbf{h} = (-0.2, 0.1)$, so the change of the function can be estimated with the value

$$\mathbf{D}_{\mathbf{f},(1,1)}\mathbf{h} = \begin{bmatrix} -\tfrac{3}{2} & \tfrac{3}{8} \\ 1 & 1 \end{bmatrix} \begin{bmatrix} -0.2 \\ 0.1 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \cdot \tfrac{2}{10} + \tfrac{3}{8} \cdot \tfrac{1}{10} \\ -\tfrac{2}{10} + \tfrac{1}{10} \end{bmatrix} = \begin{bmatrix} 0.3375 \\ -0.1 \end{bmatrix}$$

thus the function value is $\mathbf{f}(0.8, 1.1) \approx \mathbf{f}(1,1) + (0.3375, -0.1) = (-0.0375, 1.9)$. If $\mathbf{f}$ is the function from the previous exercise *b)*, i.e., $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$, then the exact value is $\mathbf{f}(0.8, 1.1) = (-0.089625, 1.9)$. $\square$

## Jacobi determinant and the transformation of integrals

Switching between the coordinate systems most commonly used to describe 2- and 3-dimensional spaces plays an important role in calculating multivariable integrals. The question is what the measure of the "rectangles" appearing in the integral approximating sum is. This section requires prerequisites in calculus.

We recall the relationship of the planar polar coordinate system, and the spatial cylindrical and spherical coordinate systems with the Cartesian coordinate system:

| *(a)* Polar | *(b)* Cylindrical | *(c)* Spherical |
|---|---|---|
| $x = r \cos \vartheta$ | $x = r \cos \vartheta$ | $x = \rho \sin \varphi \cos \vartheta$ |
| $y = r \sin \vartheta$ | $y = r \sin \vartheta$ | $y = \rho \sin \varphi \sin \vartheta$ |
| | $z = m$ | $z = \rho \cos \varphi$ |

The meaning of the listed variables: $r$ is the distance from the origin in the $xy$-plane, $\rho$ is the distance from the origin in space, $\vartheta$ is the angle formed with the positive half of the $x$-axis in the $xy$-plane, $\varphi$ is the angle formed with the positive half of the $z$-axis.

The determinant of the derivative mapping of an $\mathbb{R}^n \to \mathbb{R}^n$ function is called the *Jacobi determinant*.

The transition from the planar polar coordinate system to the Cartesian one is a function $\mathbb{R}^2 \to \mathbb{R}^2$; $(r, \vartheta) \mapsto (x, y)$, which is defined by the formulas in *(a)* above. The derivative mapping of this, more precisely the $\mathbf{D}$ matrix of the mapping (also commonly called the Jacobi matrix), and its determinant, the Jacobi determinant:

$$\mathbf{D} = \begin{bmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \vartheta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \vartheta} \end{bmatrix} = \begin{bmatrix} \cos \vartheta & -r \sin \vartheta \\ \sin \vartheta & r \cos \vartheta \end{bmatrix} \qquad |\mathbf{D}| = \begin{vmatrix} \cos \vartheta & -r \sin \vartheta \\ \sin \vartheta & r \cos \vartheta \end{vmatrix} = r.$$

The fact that the value of the Jacobi determinant is $r$ means that a "small" rectangle of size $\Delta r \times \Delta \vartheta$ – whose area is $\Delta r \Delta \vartheta$ – will be "roughly" $r$ times its original size after the transformation, that is, in the polar coordinate system, namely $r \Delta r \Delta \vartheta$, where $r$ is the distance of a point of the rectangle from the origin. We illustrate this mapping with Figure 7.26.

*Figure 7.26. Illustration of the mapping specifying the transition to the planar polar coordinate system by depicting the image of a domain consisting of rectangles.*

The multiplication by $r$ can also be easily verified geometrically, as shown in Figure 7.27. Let us calculate the area of a rectangle in the polar system. This is the difference in the area of two circular sectors. The radius of the larger one is $r_k + \Delta r_k / 2$, the length of the bounding arc is $(r_k + \Delta r_k / 2) \Delta \vartheta_k$, so its area is $\frac{1}{2}(r_k + \Delta r_k / 2)^2 \Delta \vartheta_k$. Calculating the area of the smaller circular sector similarly, and then subtracting it from the larger one, we get that the area $\Delta A_k$ of the rectangle is

$$\Delta A_k = \frac{1}{2}\left(r_k + \frac{\Delta r_k}{2}\right)^2 \Delta \vartheta_k - \frac{1}{2}\left(r_k - \frac{\Delta r_k}{2}\right)^2 \Delta \vartheta_k = r_k \Delta r_k \Delta \vartheta_k.$$

Accordingly, the integral-

*Figure 7.27. The area of a rectangle in the planar polar coordinate system is $r_k \Delta r_k \Delta \vartheta_k$.*

approximating sum of a function $f(r, \vartheta)$ defined on a domain $T$ and its limit, as the diameter of the rectangle with the largest diameter tends to 0 (see Figure 7.28):

$$\sum_k f(r_k, \vartheta_k) \Delta A_k = \sum_k f(r_k, \vartheta_k) r_k \Delta r_k \Delta \vartheta_k \to \int_T f(r, \vartheta) r \, \mathrm{d}r \, \mathrm{d}\vartheta.$$

Understanding the transition to the two spatial coordinate systems in a similar way and imagining the mappings is left to the Reader, but we still write down the determinant of the derivative of the mappings. In the case of cylindrical coordinates for the mapping $(r, \vartheta, m) \mapsto (x, y, z)$ this is

$$|\mathbf{D}| = \begin{vmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \vartheta} & \frac{\partial x}{\partial m} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \vartheta} & \frac{\partial y}{\partial m} \\ \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \vartheta} & \frac{\partial z}{\partial m} \end{vmatrix} = \begin{vmatrix} \cos \vartheta & -r \sin \vartheta & 0 \\ \sin \vartheta & r \cos \vartheta & 0 \\ 0 & 0 & 1 \end{vmatrix} = r.$$

*Figure 7.28. Rectangles falling into a domain $T$, and the $k$-th rectangle highlighted.*

In the case of the spherical coordinate system, the mapping is $(\rho, \varphi, \vartheta) \mapsto (x, y, z)$, whose Jacobi determinant is:

$$\begin{vmatrix} \frac{\partial x}{\partial \rho} & \frac{\partial x}{\partial \varphi} & \frac{\partial x}{\partial \vartheta} \\ \frac{\partial y}{\partial \rho} & \frac{\partial y}{\partial \varphi} & \frac{\partial y}{\partial \vartheta} \\ \frac{\partial z}{\partial \rho} & \frac{\partial z}{\partial \varphi} & \frac{\partial z}{\partial \vartheta} \end{vmatrix} = \begin{vmatrix} \sin \varphi \cos \vartheta & \rho \cos \varphi \cos \vartheta & -\rho \sin \varphi \sin \vartheta \\ \sin \varphi \sin \vartheta & \rho \cos \varphi \sin \vartheta & \rho \sin \varphi \cos \vartheta \\ \cos \varphi & -\rho \sin \varphi & 0 \end{vmatrix} = \rho^2 \sin \varphi.$$

Thus, the formulas for calculating the integral for these three coordinate systems:

Polar:
$$\iint_T f(r, \vartheta) \, \mathrm{d}A = \iint_T f(r, \vartheta) \, r \, \mathrm{d}r \, \mathrm{d}\vartheta$$

Cylindrical:
$$\iiint_T f(r, \vartheta, m) \, \mathrm{d}V = \iiint_T f(r, \vartheta, m) \, r \, \mathrm{d}m \, \mathrm{d}r \, \mathrm{d}\vartheta$$

Spherical:
$$\iiint_T f(\rho, \varphi, \vartheta) \, \mathrm{d}V = \iiint_T f(\rho, \varphi, \vartheta) \, \rho^2 \sin \varphi \, \mathrm{d}\rho \, \mathrm{d}\varphi \, \mathrm{d}\vartheta.$$

## Derivative of the composition of functions

It is not the aim of this paragraph to process topics belonging to the field of functional analysis, but the derivative mapping of the composition of multivariable functions can be calculated similarly to the chain rule for single-variable functions, and it is worth taking a look at this, because the solution is given by the composition of the derivative mappings, i.e., the product of the Jacobi matrices.

We state the following theorem without proof.

**Theorem 7.112 (Chain rule).** *Let $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{g} : \mathbb{R}^n \to \mathbb{R}^k$ be two functions. If $\mathbf{g}$ is differentiable at the point $\mathbf{x}$, and $\mathbf{f}$ at the point $\mathbf{g}(\mathbf{x})$, then $\mathbf{f} \circ \mathbf{g}$ is differentiable at the point $\mathbf{x}$, and its derivative mapping, and its matrix are:*

$$D_{\mathbf{f} \circ \mathbf{g}, \mathbf{x}} = D_{\mathbf{f}, \mathbf{g}(\mathbf{x})} \circ D_{\mathbf{g}, \mathbf{x}}, \quad \text{and} \quad \mathbf{D}_{\mathbf{f} \circ \mathbf{g}, \mathbf{x}} = \mathbf{D}_{\mathbf{f}, \mathbf{g}(\mathbf{x})} \mathbf{D}_{\mathbf{g}, \mathbf{x}}.$$

**Example 7.113 (Chain rule).** *Write down the general formulas of the chain rule for the given function types, and calculate the derivative of the composite function both using the chain rule and by substitution!*

1. *$f : (x,y) \mapsto x^2 - y$, $\mathbf{g} : u \mapsto (u^2 + u, u - 1)$, $u = 1$.*

2. *$\mathbf{f} : \mathbb{R} \to \mathbb{R}^2; x \mapsto (x^2, x - 1)$, $g : \mathbb{R}^2 \to \mathbb{R}; (u,v) \mapsto x = u^2 v$, $(u,v) = (1,2)$.*

3. *$\mathbf{f}(x,y) = (xy^2 - 1, x - y)$, $\mathbf{g}(u,v) = (u + 1, u - v)$, $(u,v) = (0,1)$.*

**Solution.** In case *a)*, the general form of the chain rule belonging to $f$ and $\mathbf{g}$ is

$$\frac{\mathrm{d}f}{\mathrm{d}u} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \end{bmatrix} \begin{bmatrix} \frac{\mathrm{d}g_1}{\mathrm{d}u} \\ \frac{\mathrm{d}g_2}{\mathrm{d}u} \end{bmatrix} = \frac{\partial f}{\partial x} \frac{\mathrm{d}g_1}{\mathrm{d}u} + \frac{\partial f}{\partial y} \frac{\mathrm{d}g_2}{\mathrm{d}u},$$

calculating the partial derivatives of the functions and specifying the point

$$\frac{\mathrm{d}f}{\mathrm{d}u}(1) = \begin{bmatrix} 2x & -1 \end{bmatrix}_{\mathbf{g}(1) = (2,0)} \begin{bmatrix} 2u + 1 \\ 1 \end{bmatrix}_{u=1},$$

and finally performing the substitution:

$$\begin{bmatrix} 4 & -1 \end{bmatrix} \begin{bmatrix} 3 \\ 1 \end{bmatrix} = 11.$$

We get the same result if we perform the substitution before derivation: $(f \circ \mathbf{g})(u) = (u^2 + u)^2 - (u - 1) = u^4 + 2u^3 + u^2 - u + 1$, its derivative with respect to $u$ is $4u^3 + 6u^2 + 2u - 1$, and its value at the point $u = 1$ is 11.

In case *b)*, $\mathbf{f} : \mathbb{R} \to \mathbb{R}^2$, $g : \mathbb{R}^2 \to \mathbb{R}$, thus $\mathbf{f} \circ g : \mathbb{R}^2 \to \mathbb{R}^2$, and

$$\begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\mathrm{d}f_1}{\mathrm{d}x} \\ \frac{\mathrm{d}f_2}{\mathrm{d}x} \end{bmatrix} \begin{bmatrix} \frac{\partial g}{\partial u} & \frac{\partial g}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\mathrm{d}f_1}{\mathrm{d}x} \frac{\partial g}{\partial u} & \frac{\mathrm{d}f_1}{\mathrm{d}x} \frac{\partial g}{\partial v} \\ \frac{\mathrm{d}f_2}{\mathrm{d}x} \frac{\partial g}{\partial u} & \frac{\mathrm{d}f_2}{\mathrm{d}x} \frac{\partial g}{\partial v} \end{bmatrix}$$

For the given functions and specifying the values to be substituted:

$$\begin{bmatrix} 2x \\ 1 \end{bmatrix}_{x = g(1,2) = 2} \begin{bmatrix} 2uv & u^2 \end{bmatrix}_{u=1, v=2} = \begin{bmatrix} 4 \\ 1 \end{bmatrix} \begin{bmatrix} 4 & 1 \end{bmatrix} = \begin{bmatrix} 16 & 4 \\ 4 & 1 \end{bmatrix}.$$

After substitution, the function is $(u,v) \mapsto (u^4 v^2, u^2 v - 1)$, whose derivative at the point $(u,v) = (1,2)$ is

$$\begin{bmatrix} 4u^3 v^2 & 2u^4 v \\ 2uv & u^2 \end{bmatrix}_{(1,2)} = \begin{bmatrix} 16 & 4 \\ 4 & 1 \end{bmatrix},$$

which naturally matches the previous result.

Finally, in case *c)*, the general form is

$$\begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\ \frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y} \end{bmatrix} \begin{bmatrix} \frac{\partial g_1}{\partial u} & \frac{\partial g_1}{\partial v} \\ \frac{\partial g_2}{\partial u} & \frac{\partial g_2}{\partial v} \end{bmatrix}.$$

Calculating the partial derivatives and also specifying the substitution values, we get that

$$\begin{aligned} \begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix}_{(0,1)} &= \begin{bmatrix} y^2 & 2xy \\ 1 & -1 \end{bmatrix}_{(1,-1)} \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix}_{(0,1)} \\ &= \begin{bmatrix} 1 & -2 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix}. \end{aligned}$$

Here we used that $\mathbf{g}(0,1) = (1,-1)$. If we perform the composition of the functions before derivation, we arrive at the same result, because

$$(\mathbf{f}(\mathbf{g}(u,v)) = \left( (u+1)(u-v)^2 - 1, v + 1 \right),$$

whose derivative matrix is

$$\begin{bmatrix} (u-v)^2 + 2(u+1)(u-v) & -2(u+1)(u-v) \\ 0 & 1 \end{bmatrix}_{(0,1)} = \begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix}. \qquad \square$$

<!-- OCR: through PDF p.354 -->
