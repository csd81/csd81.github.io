// Auto-generated learning aids for chapter 5. Glossaries bilingual; flashcards EN.
import type { Bilingual } from './types'

export interface GlossaryEntry { term: Bilingual; def: Bilingual }
export interface Flashcard { q: string; a: string }

export const GLOSSARIES: Record<string, GlossaryEntry[]> = {
  'lu': [
    {
      "term": {
        "en": "LU factorization (Doolittle)",
        "hu": "LU-faktorizáció (Doolittle)"
      },
      "def": {
        "en": "$\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ with $\\mathbf{L}$ lower triangular (1's on the diagonal) and $\\mathbf{U}$ upper triangular. It records Gaussian elimination once so the same $\\mathbf{A}$ can be reused for many right-hand sides.",
        "hu": "$\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, ahol $\\mathbf{L}$ alsó háromszög (a főátlóban 1-esek), $\\mathbf{U}$ felső háromszög. Egyszer rögzíti a Gauss-eliminációt, így ugyanaz az $\\mathbf{A}$ sok jobb oldalhoz újrahasználható."
      }
    },
    {
      "term": {
        "en": "Uniqueness (Thm 5.1)",
        "hu": "Egyértelműség (5.1. tétel)"
      },
      "def": {
        "en": "For a nonsingular $\\mathbf{A}$, if an LU factorization exists it is unique. (From $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$ being both lower and upper triangular, hence the identity.)",
        "hu": "Nemszinguláris $\\mathbf{A}$-ra, ha létezik LU-faktorizáció, az egyértelmű. (Mert $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$ egyszerre alsó és felső háromszög, tehát az egységmátrix.)"
      }
    },
    {
      "term": {
        "en": "Construction from multipliers",
        "hu": "Felépítés a szorzótényezőkből"
      },
      "def": {
        "en": "$\\mathbf{U}$ is the upper-triangular result of Gaussian elimination; $\\mathbf{L}$ holds the multipliers $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$ below its diagonal. The factors are stored in place of the entries they zero out.",
        "hu": "$\\mathbf{U}$ a Gauss-elimináció felső háromszög eredménye; $\\mathbf{L}$ a főátló alatt a szorzótényezőket tartalmazza, $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$. A tényezőket az általuk nullázott elemek helyére tároljuk."
      }
    },
    {
      "term": {
        "en": "Existence (Thm 5.2)",
        "hu": "Létezés (5.2. tétel)"
      },
      "def": {
        "en": "If Gaussian elimination can be performed on $\\mathbf{A}$ without row swaps, then $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ exists, with $\\mathbf{U}$ the elimination result and $\\mathbf{L}$ built from the multipliers.",
        "hu": "Ha az $\\mathbf{A}$-n a Gauss-elimináció sorcsere nélkül elvégezhető, akkor $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ létezik, $\\mathbf{U}$ az elimináció eredménye, $\\mathbf{L}$ a szorzótényezőkből épül."
      }
    },
    {
      "term": {
        "en": "Principal minors criterion (Thm 5.4)",
        "hu": "Főminor-kritérium (5.4. tétel)"
      },
      "def": {
        "en": "If all leading principal minors of $\\mathbf{A}$ are nonzero, elimination runs without row changes, so the LU factorization exists.",
        "hu": "Ha $\\mathbf{A}$ minden bal felső főminora nemnulla, az elimináció sorcsere nélkül lefut, így az LU-faktorizáció létezik."
      }
    },
    {
      "term": {
        "en": "PA = LU (Thm 5.5)",
        "hu": "PA = LU (5.5. tétel)"
      },
      "def": {
        "en": "Every invertible $\\mathbf{A}$ has a factorization $\\mathbf{P}\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ for some permutation matrix $\\mathbf{P}$ — the row swaps of partial pivoting collected into $\\mathbf{P}$.",
        "hu": "Minden invertálható $\\mathbf{A}$-ra van $\\mathbf{P}\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ faktorizáció valamely $\\mathbf{P}$ permutációs mátrixszal — a részleges pivot sorcseréi $\\mathbf{P}$-be gyűjtve."
      }
    },
    {
      "term": {
        "en": "Solving via $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$",
        "hu": "Megoldás $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ révén"
      },
      "def": {
        "en": "Once $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ by forward substitution $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$ then back substitution $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ — each only $\\mathcal{O}(n^2)$, so extra right-hand sides are cheap.",
        "hu": "Ha $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$-t előrehelyettesítéssel $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, majd visszahelyettesítéssel $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ oldjuk meg — mindkettő csak $\\mathcal{O}(n^2)$, így a további jobb oldalak olcsók."
      }
    }
  ],
  'cholesky': [
    {
      "term": {
        "en": "Cholesky factorization",
        "hu": "Cholesky-faktorizáció"
      },
      "def": {
        "en": "$\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ with $\\mathbf{L}$ lower triangular and positive diagonal — the symmetric, square-root analogue of LU for symmetric positive definite matrices.",
        "hu": "$\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$, ahol $\\mathbf{L}$ alsó háromszög, pozitív főátlóval — az LU szimmetrikus, gyökvonásos megfelelője szimmetrikus pozitív definit mátrixokra."
      }
    },
    {
      "term": {
        "en": "Existence for SPD (Thm 5.6)",
        "hu": "Létezés SPD-re (5.6. tétel)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is symmetric positive definite, the Cholesky factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ exists with a real $\\mathbf{L}$ whose diagonal can be chosen positive. Proved by induction on the leading block.",
        "hu": "Ha $\\mathbf{A}$ szimmetrikus pozitív definit, akkor az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ Cholesky-faktorizáció létezik valós $\\mathbf{L}$-lel, amelynek főátlója pozitívnak választható. A bal felső blokkra vett indukcióval bizonyítható."
      }
    },
    {
      "term": {
        "en": "Cholesky formulas (Alg. 5.8)",
        "hu": "Cholesky-képletek (5.8. algoritmus)"
      },
      "def": {
        "en": "$l_{jj}=\\sqrt{a_{jj}-\\sum_{k<j}l_{jk}^2}$ and $l_{ij}=\\big(a_{ij}-\\sum_{k<j}l_{ik}l_{jk}\\big)/l_{jj}$ for $i>j$ — compute column by column. A negative radicand signals $\\mathbf{A}$ is not positive definite.",
        "hu": "$l_{jj}=\\sqrt{a_{jj}-\\sum_{k<j}l_{jk}^2}$ és $l_{ij}=\\big(a_{ij}-\\sum_{k<j}l_{ik}l_{jk}\\big)/l_{jj}$ $i>j$-re — oszloponként számolva. Negatív gyökjel alatti érték azt jelzi, hogy $\\mathbf{A}$ nem pozitív definit."
      }
    },
    {
      "term": {
        "en": "Cost $\\sim n^3/6$ (half of LU)",
        "hu": "Költség $\\sim n^3/6$ (az LU fele)"
      },
      "def": {
        "en": "Cholesky needs about $n^3/6$ multiplications/divisions plus $n$ square roots — roughly half the work of LU ($n^3/3$), by exploiting symmetry.",
        "hu": "A Cholesky kb. $n^3/6$ szorzást/osztást és $n$ gyökvonást igényel — nagyjából feleannyi munka, mint az LU ($n^3/3$), a szimmetria kihasználásával."
      }
    },
    {
      "term": {
        "en": "Definiteness test",
        "hu": "Definitségi teszt"
      },
      "def": {
        "en": "Cholesky doubles as a positive-definiteness check: it succeeds (all radicands positive) iff $\\mathbf{A}$ is symmetric positive definite, and fails otherwise — cheaper than computing eigenvalues or all minors.",
        "hu": "A Cholesky egyúttal pozitív-definitség teszt: pontosan akkor sikerül (minden gyökjel alatti érték pozitív), ha $\\mathbf{A}$ szimmetrikus pozitív definit, különben elbukik — olcsóbb, mint a sajátértékek vagy az összes minor kiszámítása."
      }
    },
    {
      "term": {
        "en": "Stability — no pivoting needed",
        "hu": "Stabilitás — nincs szükség pivotálásra"
      },
      "def": {
        "en": "For SPD matrices Cholesky is numerically stable without any pivoting, so it is the method of choice for normal equations, covariance matrices and many PDE systems.",
        "hu": "SPD mátrixokra a Cholesky pivotálás nélkül is numerikusan stabil, ezért ez a választott módszer a normálegyenletekhez, kovarianciamátrixokhoz és sok PDE-rendszerhez."
      }
    }
  ],
}

export const FLASHCARDS: Record<string, Flashcard[]> = {
  'lu': [
    {"q":"What are the requirements for the matrices $L$ and $U$ in the factorization $A = LU$ (Doolittle's method)?","a":"$L$ is lower triangular with 1s on the main diagonal, and $U$ is upper triangular."},
    {"q":"What is the alternative name for $LU$ factorization mentioned in the text?","a":"Doolittle's method"},
    {"q":"Under what two conditions is the $LU$ factorization of a square matrix $A$ guaranteed to be unique?","a":"$A$ must be nonsingular and the factorization must exist."},
    {"q":"In the proof of uniqueness for $A = L_1 U_1 = L_2 U_2$, what is the result of the matrix product $L_2^{-1} L_1$?","a":"The identity matrix $I$."},
    {"q":"In Gaussian elimination, how is the multiplier $l_{i1}$ defined for the first column ($i = 2, 3, \\dots, n$)?","a":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"},
    {"q":"What matrix $A^{(1)}$ is produced by the operation $L_1 A$ in the context of Gaussian elimination?","a":"The matrix obtained after performing the first elimination step."},
    {"q":"Describe the structure of the lower triangular matrix $L_1$ used to perform the first step of Gaussian elimination.","a":"It has 1s on the diagonal and the values $-l_{i1}$ in the first column below the diagonal."},
    {"q":"How is the matrix $L$ constructed from the sequence of elimination matrices $L_1, L_2, \\dots, L_{n-1}$?","a":"$L = (L_{n-1} L_{n-2} \\dots L_1)^{-1}$"},
    {"q":"What values occupy the sub-diagonal positions $(i, j)$ in the final matrix $L$ of an $LU$ factorization?","a":"The multipliers $l_{ij}$ used during the Gaussian elimination process."},
    {"q":"What characterizes the matrix $U$ in the $LU$ factorization relative to Gaussian elimination?","a":"It is the upper triangular matrix $A^{(n-1)}$ resulting from the completion of Gaussian elimination."},
    {"q":"According to Theorem 5.2, what is the prerequisite for the existence of an $LU$ factorization?","a":"Gaussian elimination must be performable on the matrix $A$."},
    {"q":"Theorem 5.4: If all _____ of $A$ are nonzero, then $LU$ factorization exists without row changes.","a":"principal minors"},
    {"q":"What type of matrix $P$ exists for any invertible matrix $A$ such that $PA = LU$ exists?","a":"A permutation matrix"},
    {"q":"When solving $Ax = b$ via $LU$ factorization, what is the first triangular system to be solved?","a":"$Ly = b$"},
    {"q":"In the $LU$ solution process for $Ax = b$, what is the second triangular system to be solved?","a":"$Ux = y$"},
    {"q":"What algorithm is used to solve the lower triangular system $Ly = b$?","a":"Forward substitution"},
    {"q":"What algorithm is used to solve the upper triangular system $Ux = y$?","a":"Backward substitution"},
    {"q":"Approximately how many multiplications/divisions are required to solve the two triangular systems $Ly = b$ and $Ux = y$?","a":"$n^2 + \\mathcal{O}(n)$"},
    {"q":"What is the computational complexity (in multiplications/divisions) for computing the $LU$ factorization itself?","a":"$\\frac{n^3}{3} + \\mathcal{O}(n^2)$"},
    {"q":"Why is $LU$ factorization particularly efficient for solving multiple systems $Ax = b_i$ with different $b_i$?","a":"The factorization $A = LU$ is computed only once, and subsequent solutions only require $O(n^2)$ substitution steps."},
    {"q":"In the shorthand method for $LU$ decomposition, where are the factors $l_{ij}$ written during calculation?","a":"In the positions of the elements that are being eliminated (changed to 0)."},
    {"q":"If a matrix $A$ has a principal minor equal to zero, what might be necessary to find an $LU$-like factorization?","a":"Row changes or the introduction of a permutation matrix $P$."},
    {"q":"Term: Doolittle's Method","a":"Definition: An $LU$ factorization where the matrix $L$ is required to have unit diagonal entries."},
    {"q":"In the provided example, if $l_{21}=2, l_{31}=-1, l_{41}=-2$, what does the first column of $L$ (excluding the diagonal) look like?","a":"It contains the values $2, -1,$ and $-2$."},
    {"q":"How does the nonsingularity of $A$ affect the matrices $L$ and $U$ in the factorization $A=LU$?","a":"It ensures that $L$, $U$, and their components are also nonsingular."},
    {"q":"What is the result of multiplying a lower triangular matrix by another lower triangular matrix?","a":"A lower triangular matrix."},
    {"q":"What is the result of multiplying an upper triangular matrix by another upper triangular matrix?","a":"An upper triangular matrix."},
    {"q":"If a matrix is both lower triangular with 1s on the diagonal and upper triangular, it must be the _____.","a":"identity matrix $I$"},
    {"q":"The formula $l_{i2} = \\frac{a_{i2}^{(1)}}{a_{22}^{(1)}}$ defines multipliers for which column of $L$?","a":"The second column."},
    {"q":"True or False: Gaussian elimination must be performable without row swaps for a basic $LU$ factorization to exist.","a":"True."},
    {"q":"Concept: $A = LU$","a":"Application: Efficiently solving linear systems by decomposing the problem into two simpler triangular problems."},
    {"q":"In Example 5.3, the final entry $u_{44}$ of the matrix $U$ is calculated as _____.","a":"$38$"},
    {"q":"What is the defining characteristic of the main diagonal of $L$ in Doolittle's method?","a":"Every entry is exactly 1."},
    {"q":"If $\\det(A) \\ne 0$, then $\\det(L)$ and $\\det(U)$ must both be _____.","a":"nonzero"},
    {"q":"The matrix $L_2$ has multipliers $-l_{i2}$ located in which column?","a":"The second column."},
    {"q":"In the expression $L = L_1^{-1} L_2^{-1} \\dots L_{n-1}^{-1}$, the multipliers $l_{ij}$ in $L$ appear with what sign relative to the elimination matrices $L_k$?","a":"With the opposite sign (positive $l_{ij}$ instead of negative $-l_{ij}$)."},
    {"q":"What is the value of $\\det(L)$ in an $LU$ factorization?","a":"$1$ (because it is triangular with 1s on the diagonal)."},
    {"q":"According to Theorem 5.5, what property of $A$ allows for a $PA=LU$ factorization?","a":"$A$ must be an invertible square matrix."},
    {"q":"How many elimination matrices $L_k$ are defined for an $n \\times n$ matrix?","a":"$n-1$"},
    {"q":"If $L_2^{-1} L_1 = U_2 U_1^{-1}$, and the left side is lower triangular while the right side is upper triangular, what specific form must both sides take?","a":"Diagonal matrix."},
    {"q":"When a matrix has infinitely many $LU$ factorizations, what is typically true about its determinant?","a":"The determinant is zero (the matrix is singular)."},
    {"q":"In $LU$ decomposition, the matrix $U$ is produced by applying a sequence of _____ transformations to $A$.","a":"lower triangular (or Gaussian elimination)"},
    {"q":"To solve $Ly = b$ for $y_i$, you use the previously calculated values of $y_1, \\dots, y_{i-1}$. What is this process called?","a":"Forward substitution."},
    {"q":"To solve $Ux = y$ for $x_i$, you start from $x_n$ and work towards $x_1$. What is this process called?","a":"Backward substitution."},
    {"q":"In the matrix equation $A^{(1)} = L_1 A$, what does $L_1$ represent in terms of elementary row operations?","a":"Subtracting multiples of the first row from subsequent rows to create zeros in the first column."},
    {"q":"What is the relation between the principal minors of $A^{(k-1)}$ and $A^{(k)}$ during Gaussian elimination?","a":"They are equal."},
    {"q":"If the Gaussian elimination involves row changes, which theorem describes the resulting factorization?","a":"Theorem 5.5 (existence of $PA=LU$)."},
    {"q":"Given $A = LU$, what is the formula for $\\det(A)$ in terms of the entries of $U$?","a":"The product of the diagonal entries of $U$."},
    {"q":"In the product $L_1 L_2 \\dots L_{n-1}$, why is it 'easy' to compute the result compared to arbitrary matrices?","a":"Because each $L_k$ only modifies a specific column, and their products simply combine those columns."},
    {"q":"Is it possible for a singular matrix to have an $LU$ factorization?","a":"Yes, but it is not unique."},
    {"q":"If $A$ is $4 \\times 4$, how many multipliers $l_{ij}$ are stored in the matrix $L$ below the diagonal?","a":"$6$ ($3$ in col 1, $2$ in col 2, $1$ in col 3)."}
  ],
  'cholesky': [
    {"q":"What is the specific matrix product form of a Cholesky factorization?","a":"$\\mathbf{A} = \\mathbf{LL}^T$"},
    {"q":"In the Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$, what type of matrix must $\\mathbf{L}$ be?","a":"A lower triangular matrix."},
    {"q":"According to the definition, the matrix $\\mathbf{A}$ in a Cholesky factorization must satisfy which property regarding its shape/balance?","a":"It must be a symmetric matrix."},
    {"q":"What is a sufficient condition for the existence of a real Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$?","a":"$\\mathbf{A}$ is symmetric and positive definite."},
    {"q":"If the Cholesky factorization exists for a matrix $\\mathbf{A}$, is the result guaranteed to be unique?","a":"No, it is not unique."},
    {"q":"If $\\mathbf{A}$ is positive definite, what choice can be made regarding the main diagonal elements of $\\mathbf{L}$?","a":"They can be chosen as positive elements."},
    {"q":"What method is used to prove the existence theorem for the Cholesky factorization of an $n \\times n$ matrix?","a":"Mathematical induction with respect to the dimension of the matrix."},
    {"q":"In the induction proof, for which matrix size is the existence of the factorization considered obvious?","a":"$1 \\times 1$ matrices."},
    {"q":"When partitioning an $n \\times n$ matrix $\\mathbf{A}$ for the induction proof, what is the dimension of the top-left submatrix $\\mathbf{X}$?","a":"$(n-1) \\times (n-1)$"},
    {"q":"In the partitioning $\\mathbf{A} = \\begin{pmatrix} \\mathbf{X} & \\mathbf{y} \\\\ \\mathbf{y}^T & a_{nn} \\end{pmatrix}$, why must $\\mathbf{X}$ be positive definite if $\\mathbf{A}$ is positive definite?","a":"Because all principal minors of a positive definite matrix are positive."},
    {"q":"In the partitioned product form of the proof, what relation defines the top-left submatrix $\\mathbf{X}$?","a":"$\\mathbf{X} = \\tilde{\\mathbf{L}}\\tilde{\\mathbf{L}}^T$"},
    {"q":"In the proof, what equation relates the lower triangular submatrix $\\tilde{\\mathbf{L}}$, the vector $\\mathbf{c}$, and the vector $\\mathbf{y}$?","a":"$\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$"},
    {"q":"What scalar equation is used to solve for the bottom-right element $d$ in the proof?","a":"$\\mathbf{c}^T\\mathbf{c} + d^2 = a_{nn}$"},
    {"q":"Why does the equation $\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$ have a unique solution for $\\mathbf{c}$ in the induction step?","a":"Because $\\tilde{\\mathbf{L}}$ is nonsingular (its diagonal elements are positive)."},
    {"q":"What formula relates the determinant of $\\mathbf{A}$ to the determinant of $\\tilde{\\mathbf{L}}$ and $d$ in the induction proof?","a":"$\\det(\\mathbf{A}) = \\det(\\tilde{\\mathbf{L}})^2 d^2$"},
    {"q":"Under what condition is the scalar $d$ in the factorization proof guaranteed to be a positive real number?","a":"When $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c} > 0$."},
    {"q":"In the algorithm, how is the first element $l_{11}$ calculated from the input matrix $\\mathbf{A}$?","a":"$l_{11} = \\sqrt{a_{11}}$"},
    {"q":"What is the formula for calculating the elements $l_{i1}$ in the first column below the diagonal?","a":"$l_{i1} = a_{i1}/l_{11}$"},
    {"q":"Formula: General calculation for the diagonal element $l_{jj}$ (for $j > 1$)","a":"$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$"},
    {"q":"Formula: General calculation for the off-diagonal element $l_{ij}$ (where $i > j$)","a":"$l_{ij} = (a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk})/l_{jj}$"},
    {"q":"What is the formula for the final element $l_{nn}$ of the matrix $\\mathbf{L}$?","a":"$l_{nn} = \\sqrt{a_{nn} - \\sum_{k=1}^{n-1} l_{nk}^2}$"},
    {"q":"What is the leading term of the operation count for multiplications and divisions in the Cholesky algorithm?","a":"$n^3/6$"},
    {"q":"What is the leading term of the operation count for additions and subtractions in the Cholesky algorithm?","a":"$n^3/6$"},
    {"q":"Exactly how many square root operations are performed in a Cholesky factorization of an $n \\times n$ matrix?","a":"$n$"},
    {"q":"In the Cholesky algorithm, which indices does the outer loop for the column variable $j$ span?","a":"$j = 2, \\ldots, n-1$"},
    {"q":"In the example matrix where $a_{11} = 4$, $a_{21} = -8$, and $a_{31} = 4$, what is the first column of $\\mathbf{L}$?","a":"The column entries are $2$, $-4$, and $2$."},
    {"q":"In the $3 \\times 3$ example, if $l_{21} = -4$ and $a_{22} = 17$, what equation is used to find $l_{22}$?","a":"$17 = (-4)^2 + l_{22}^2$"},
    {"q":"For the example matrix, given $l_{11}=2, l_{21}=-4, l_{31}=2$, and $a_{32}=-11$, what is the value of $l_{32}$?","a":"$l_{32} = -3$"},
    {"q":"In the example matrix, how is $l_{33}$ determined if $a_{33}=22, l_{31}=2$, and $l_{32}=-3$?","a":"$22 = 2^2 + (-3)^2 + l_{33}^2$"},
    {"q":"What is the resulting $\\mathbf{L}$ matrix for the example $\\mathbf{A} = \\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}$?","a":"$\\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}$"},
    {"q":"Why does the matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ have no Cholesky factorization?","a":"It is not positive definite (the first diagonal element is 0, implying $l_{11} = 0$, which prevents division)."},
    {"q":"If the sum of squares of previous elements in a row exceeds the diagonal element $a_{jj}$, what happens to the diagonal element $l_{jj}$?","a":"It would become an imaginary number."},
    {"q":"What property of $\\mathbf{A}$ ensures that $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c}$ will always be strictly positive in the real case?","a":"Positive definiteness of $\\mathbf{A}$."},
    {"q":"How does the complexity of Cholesky factorization compare to LU decomposition generally?","a":"It is approximately half the work ($n^3/6$ vs $n^3/3$ for multiplications)."},
    {"q":"The term 'lower triangular' in Hungarian is ____.","a":"alsó háromszögmátrix (or alulról trianguláris)"},
    {"q":"The term 'positive definite' in Hungarian is ____.","a":"pozitív definit"},
    {"q":"In the algorithm, the inner loop for $i$ calculates elements from $j+1$ to $n$. What does this correspond to in the matrix $\\mathbf{L}$?","a":"The elements below the diagonal in column $j$."},
    {"q":"What is the specific multiplication count given in Algorithm 5.8 including lower-order terms?","a":"$n^3/6 + n^2/2 - 2n/3$"},
    {"q":"What is the specific addition count given in Algorithm 5.8 including lower-order terms?","a":"$n^3/6 - n/6$"},
    {"q":"Concept: Principal Minor","a":"Definition: The determinant of a square submatrix obtained by deleting rows and columns with the same indices. All must be positive for positive definiteness."},
    {"q":"In the inductive step, if $\\tilde{\\mathbf{L}}$ is the $(n-1) \\times (n-1)$ Cholesky factor, what is $\\det(\\tilde{\\mathbf{L}})$?","a":"The product of its diagonal elements."},
    {"q":"What is the output of the Cholesky factorization algorithm?","a":"The elements $l_{ij}$ for $i = 1, \\ldots, n$ and $j = 1, \\ldots, i$."},
    {"q":"If a matrix is symmetric but not positive definite, can a Cholesky-like factorization $LL^T$ exist?","a":"It might exist, but the diagonal elements of $L$ may not be real or positive."},
    {"q":"If $a_{11} = 16$ in a matrix, what is $l_{11}$ in its Cholesky factorization?","a":"$4$"},
    {"q":"If $a_{11} = 1$ and $a_{21} = -1$, what are $l_{11}$ and $l_{21}$?","a":"$l_{11} = 1$ and $l_{21} = -1$."},
    {"q":"True or False: The algorithm calculates $\\mathbf{L}$ row by row or column by column.","a":"True (the specific implementation provided proceeds column by column)."},
    {"q":"In the proof, $\\mathbf{c}$ is an $(n-1)$-dimensional _____ vector.","a":"column"},
    {"q":"The induction hypothesis assumes the theorem holds for matrices of what size?","a":"$(n-1) \\times (n-1)$"},
    {"q":"Which theorem is typically used to state that the leading submatrix $X$ of a positive definite matrix is also positive definite?","a":"Theorem 3.10 (as cited in the source)."},
    {"q":"What does the expression $l_{ik}l_{jk}$ inside the summation for $l_{ij}$ represent?","a":"The dot product of the truncated rows $i$ and $j$ of $\\mathbf{L}$."},
    {"q":"If $\\mathbf{A}$ is a $2 \\times 2$ matrix, how many elements are in the 'output' list $(l_{ij})$?","a":"3 elements ($l_{11}, l_{21}, l_{22}$)"},
    {"q":"Is the Cholesky factorization possible for a matrix with a negative diagonal element?","a":"No, because $l_{ii}^2 = a_{ii} - \\sum l_{ik}^2$ would require a square root of a negative number for a real factorization."},
    {"q":"In the Cholesky algorithm, which element is updated in the very first assignment?","a":"$l_{11}$"},
    {"q":"How is $l_{jj}$ defined in the algorithm when $j=1$?","a":"It is simply $\\sqrt{a_{11}}$ (handled as a separate step before the $j$ loop)."},
    {"q":"In the complexity analysis, what does $\\mathcal{O}(n^2)$ represent?","a":"Lower-order terms that become insignificant compared to $n^3$ as $n$ grows."}
  ],
}
