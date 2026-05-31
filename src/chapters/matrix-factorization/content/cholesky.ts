import type { Section } from "./types";

export const choleskySection: Section = {
  id: "cholesky",
  title: { en: "5.2 Cholesky Factorization", hu: "5.2 Cholesky-faktorizáció" },
  blocks: [
    {
      id: "ch-def",
      kind: "definition",
      label: { en: "Definition (Cholesky)", hu: "Definíció (Cholesky)" },
      body: [
        {
          rich: {
            en: "Let $\\mathbf{A}$ be a symmetric matrix. The factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$, where $\\mathbf{L}$ is lower triangular, is called the *Cholesky factorization* of $\\mathbf{A}$.",
            hu: "Legyen $\\mathbf{A}$ szimmetrikus mátrix. Az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ felbontást, ahol $\\mathbf{L}$ alulról trianguláris, az $\\mathbf{A}$ *Cholesky-faktorizációjának* nevezzük.",
          },
        },
        {
          text: {
            en: "If it exists, the Cholesky factorization is not unique (signs of diagonal entries may vary). The next theorem gives a sufficient condition for existence with positive diagonal.",
            hu: "Ha létezik, a Cholesky-faktorizáció nem egyértelmű (a főátló elemeinek előjele változhat). A következő tétel elégséges feltételt ad a pozitív főátlójú létezésre.",
          },
        },
      ],
    },
    {
      id: "ch-thm",
      kind: "theorem",
      label: { en: "Theorem 5.6", hu: "5.6. tétel" },
      body: [
        {
          rich: {
            en: "If $\\mathbf{A}$ is symmetric and positive definite, then the Cholesky factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ exists, $\\mathbf{L}$ is real, and its diagonal entries can be chosen positive.",
            hu: "Ha $\\mathbf{A}$ szimmetrikus és pozitív definit, akkor az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ Cholesky-faktorizáció létezik, $\\mathbf{L}$ valós, és a főátlóban pozitív elemek választhatók.",
          },
        },
      ],
    },
    {
      id: "ch-example",
      kind: "example",
      label: { en: "Example 5.7", hu: "5.7. példa" },
      body: [
        {
          rich: {
            en: "Find the Cholesky factorization of",
            hu: "Keressük a Cholesky-faktorizációját az alábbinak:",
          },
        },
        {
          math: `\\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}.`,
        },
        {
          rich: {
            en: "Solve entry by entry: $4=l_{11}^2\\Rightarrow l_{11}=2$; $-8=l_{21}l_{11}\\Rightarrow l_{21}=-4$; $4=l_{31}l_{11}\\Rightarrow l_{31}=2$; $17=l_{21}^2+l_{22}^2\\Rightarrow l_{22}=1$; $-11=l_{31}l_{21}+l_{32}l_{22}\\Rightarrow l_{32}=-3$; $22=l_{31}^2+l_{32}^2+l_{33}^2\\Rightarrow l_{33}=3$.",
            hu: "Elemenként oldjuk meg: $4=l_{11}^2\\Rightarrow l_{11}=2$; $-8=l_{21}l_{11}\\Rightarrow l_{21}=-4$; $4=l_{31}l_{11}\\Rightarrow l_{31}=2$; $17=l_{21}^2+l_{22}^2\\Rightarrow l_{22}=1$; $-11=l_{31}l_{21}+l_{32}l_{22}\\Rightarrow l_{32}=-3$; $22=l_{31}^2+l_{32}^2+l_{33}^2\\Rightarrow l_{33}=3$.",
          },
        },
        {
          math: `\\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & -4 & 2 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 3 \\end{pmatrix}.`,
        },
      ],
    },
    {
      id: "ch-algo",
      kind: "algorithm",
      label: { en: "Algorithm 5.8 (Cholesky)", hu: "5.8. algoritmus (Cholesky)" },
      body: [
        {
          math: `l_{11} \\leftarrow \\sqrt{a_{11}}`,
        },
        {
          math: `\\text{for } i=2,\\dots,n:\\quad l_{i1}\\leftarrow a_{i1}/l_{11}`,
        },
        {
          math: `\\text{for } j=2,\\dots,n-1:\\quad l_{jj}\\leftarrow\\sqrt{a_{jj}-\\textstyle\\sum_{k=1}^{j-1} l_{jk}^2}`,
        },
        {
          math: `\\qquad \\text{for } i=j+1,\\dots,n:\\quad l_{ij}\\leftarrow\\Big(a_{ij}-\\textstyle\\sum_{k=1}^{j-1} l_{ik}l_{jk}\\Big)/l_{jj}`,
        },
        {
          math: `l_{nn} \\leftarrow \\sqrt{a_{nn}-\\textstyle\\sum_{k=1}^{n-1} l_{nk}^2}`,
        },
        {
          rich: {
            en: "Operation count: $n^3/6+\\mathcal{O}(n^2)$ multiplications/divisions, $n^3/6+\\mathcal{O}(n^2)$ additions/subtractions, and $n$ square roots — about half the cost of LU, exploiting symmetry.",
            hu: "Műveletigény: $n^3/6+\\mathcal{O}(n^2)$ szorzás/osztás, $n^3/6+\\mathcal{O}(n^2)$ összeadás/kivonás, és $n$ gyökvonás — nagyjából feleannyi, mint az LU, kihasználva a szimmetriát.",
          },
        },
      ],
    },
    {
      id: "ch-ex-1",
      kind: "exercise",
      label: { en: "Exercise 1", hu: "1. feladat" },
      body: [
        {
          rich: {
            en: "Compute the Cholesky factorization (or show it does not exist) of the following matrices:",
            hu: "Számítsd ki az alábbi mátrixok Cholesky-faktorizációját (vagy mutasd meg, hogy nem létezik):",
          },
        },
        {
          math: `\\text{(a)}\\ \\begin{pmatrix} 16 & -8 & -12 \\\\ -8 & 4 & 4 \\\\ -12 & 4 & 35 \\end{pmatrix} \\qquad \\text{(b)}\\ \\begin{pmatrix} 4 & -2 & -4 \\\\ -2 & 26 & 7 \\\\ -4 & 7 & 6 \\end{pmatrix}`,
        },
        {
          math: `\\text{(c)}\\ \\begin{pmatrix} 1 & -1 & -2 & 1 \\\\ -1 & 10 & 2 & 2 \\\\ -2 & 2 & 29 & 8 \\\\ 1 & 2 & 8 & 7 \\end{pmatrix} \\qquad \\text{(d)}\\ \\begin{pmatrix} 16 & -8 & 0 & -4 \\\\ -8 & 2 & 2 & 0 \\\\ 0 & 2 & 10 & -5 \\\\ -4 & 0 & -5 & 7 \\end{pmatrix}`,
        },
      ],
    },
    {
      id: "ch-sol-1",
      kind: "solution",
      body: [
        {
          text: {
            en: "(a) l_11 = 4, l_21 = -2, l_31 = -3, then l_22 = √(4 - (-2)²) = √0 = 0. The 2×2 leading minor det[[16,-8],[-8,4]] = 0, so A is only positive semidefinite and has no (standard) Cholesky factor.",
            hu: "(a) l_11 = 4, l_21 = -2, l_31 = -3, then l_22 = √(4 - (-2)²) = √0 = 0. The 2×2 leading minor det[[16,-8],[-8,4]] = 0, so A is only positive semidefinite and has no (standard) Cholesky factor.",
          },
        },
        {
          text: {
            en: "(b) All leading minors are positive (4, 100, 36), so A is positive definite; the algorithm gives",
            hu: "(b) All leading minors are positive (4, 100, 36), so A is positive definite; the algorithm gives",
          },
        },
        {
          math: `L = \\begin{pmatrix} 2 & 0 & 0 \\\\ -1 & 5 & 0 \\\\ -2 & 1 & 1 \\end{pmatrix}, \\quad LL^{T} = A.`,
        },
        {
          text: {
            en: "(c) The same recursion gives",
            hu: "(c) The same recursion gives",
          },
        },
        {
          math: `L = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ -1 & 3 & 0 & 0 \\\\ -2 & 0 & 5 & 0 \\\\ 1 & 1 & 2 & 1 \\end{pmatrix}.`,
        },
        {
          text: {
            en: "(d) Here det[[16,-8],[-8,2]] = 32 - 64 = -32 < 0, so A is not positive definite and the Cholesky factorization does not exist.",
            hu: "(d) Here det[[16,-8],[-8,2]] = 32 - 64 = -32 < 0, so A is not positive definite and the Cholesky factorization does not exist.",
          },
        },
      ],
    },
    {
      id: "ch-ex-2",
      kind: "exercise",
      label: { en: "Exercise 2", hu: "2. feladat" },
      body: [
        {
          rich: {
            en: "Show that the Cholesky factorization need not be unique if the diagonal of $L$ is allowed to be negative.",
            hu: "Mutasd meg, hogy a Cholesky-faktorizáció nem feltétlenül egyértelmű, ha $L$ átlója negatív is lehet.",
          },
        },
      ],
    },
    {
      id: "ch-sol-2",
      kind: "solution",
      body: [
        {
          text: {
            en: "For A = I (2×2) every diagonal sign pattern works: L = diag(±1, ±1) all satisfy LLᵀ = I, giving four factorizations. In general, if A = LLᵀ and D is diagonal with entries ±1, then (LD)(LD)ᵀ = L D Dᵀ Lᵀ = LLᵀ = A. Requiring strictly positive diagonal entries restores uniqueness.",
            hu: "For A = I (2×2) every diagonal sign pattern works: L = diag(±1, ±1) all satisfy LLᵀ = I, giving four factorizations. In general, if A = LLᵀ and D is diagonal with entries ±1, then (LD)(LD)ᵀ = L D Dᵀ Lᵀ = LLᵀ = A. Requiring strictly positive diagonal entries restores uniqueness.",
          },
        },
      ],
    },
    {
      id: "ch-ex-3",
      kind: "exercise",
      label: { en: "Exercise 3", hu: "3. feladat" },
      body: [
        {
          rich: {
            en: "Show that the matrix $\\left(\\begin{smallmatrix} 0 & 1 \\\\ 1 & 0 \\end{smallmatrix}\\right)$ has no Cholesky factorization.",
            hu: "Mutasd meg, hogy az $\\left(\\begin{smallmatrix} 0 & 1 \\\\ 1 & 0 \\end{smallmatrix}\\right)$ mátrixnak nincs Cholesky-faktorizációja.",
          },
        },
      ],
    },
    {
      id: "ch-sol-3",
      kind: "solution",
      body: [
        {
          text: {
            en: "It is not positive definite: for x = (1, -1)ᵀ, xᵀAx = -2 < 0. Directly, A = LLᵀ would force l_11² = 0, hence l_11 = 0, but then the (1,2) entry l_11 l_21 = 1 is impossible. So no Cholesky factor exists.",
            hu: "It is not positive definite: for x = (1, -1)ᵀ, xᵀAx = -2 < 0. Directly, A = LLᵀ would force l_11² = 0, hence l_11 = 0, but then the (1,2) entry l_11 l_21 = 1 is impossible. So no Cholesky factor exists.",
          },
        },
      ],
    },
    {
      id: "ch-ex-4",
      kind: "exercise",
      label: { en: "Exercise 4", hu: "4. feladat" },
      body: [
        {
          rich: {
            en: "Verify the operation count of the Cholesky algorithm (Algorithm 5.8): $n^3/6 + n^2/2 - 2n/3$ multiplications/divisions, $n^3/6 - n/6$ additions/subtractions, and $n$ square roots.",
            hu: "Igazold a Cholesky-algoritmus (5.8. algoritmus) műveletigényét: $n^3/6 + n^2/2 - 2n/3$ szorzás/osztás, $n^3/6 - n/6$ összeadás/kivonás, és $n$ gyökvonás.",
          },
        },
      ],
    },
    {
      id: "ch-sol-4",
      kind: "solution",
      body: [
        {
          text: {
            en: "Counting per column j the work in the diagonal entry (j-1 multiplications, j-2 additions) and in the n-j sub-diagonal entries (j mult/div and j-1 add/sub each), the totals are",
            hu: "Counting per column j the work in the diagonal entry (j-1 multiplications, j-2 additions) and in the n-j sub-diagonal entries (j mult/div and j-1 add/sub each), the totals are",
          },
        },
        {
          math: `\\sum_{j=2}^{n-1}\\big[(j-1)+(n-j)j\\big] = \\frac{n^3}{6}+\\frac{n^2}{2}-\\frac{2n}{3}, \\qquad \\sum_{j=2}^{n-1}\\big[(j-2)+(n-j)(j-1)\\big] = \\frac{n^3}{6}-\\frac{n}{6},`,
        },
        {
          text: {
            en: "with one square root per diagonal entry, i.e. n in total. □",
            hu: "with one square root per diagonal entry, i.e. n in total. □",
          },
        },
      ],
    },
    {
      id: "ch-ex-5",
      kind: "exercise",
      label: { en: "Exercise 5", hu: "5. feladat" },
      body: [
        {
          rich: {
            en: "In the proof of Theorem 5.6, show directly that the leading submatrix $X$ (with $A=\\left(\\begin{smallmatrix} X & y \\\\ y^{T} & a_{nn} \\end{smallmatrix}\\right)$) is positive definite.",
            hu: "Az 5.6. tétel bizonyításában mutasd meg közvetlenül, hogy a $X$ blokk (ahol $A=\\left(\\begin{smallmatrix} X & y \\\\ y^{T} & a_{nn} \\end{smallmatrix}\\right)$) pozitív definit.",
          },
        },
      ],
    },
    {
      id: "ch-sol-5",
      kind: "solution",
      body: [
        {
          text: {
            en: "For any nonzero z ∈ ℝⁿ⁻¹ form w = (z, 0)ᵀ ∈ ℝⁿ. Then",
            hu: "For any nonzero z ∈ ℝⁿ⁻¹ form w = (z, 0)ᵀ ∈ ℝⁿ. Then",
          },
        },
        {
          math: `w^{T} A w = \\begin{pmatrix} z^{T} & 0 \\end{pmatrix}\\begin{pmatrix} X & y \\\\ y^{T} & a_{nn} \\end{pmatrix}\\begin{pmatrix} z \\\\ 0 \\end{pmatrix} = z^{T} X z.`,
        },
        {
          text: {
            en: "Since A is positive definite and w ≠ 0, this is > 0, hence zᵀXz > 0 for all z ≠ 0, i.e. X is positive definite. □",
            hu: "Since A is positive definite and w ≠ 0, this is > 0, hence zᵀXz > 0 for all z ≠ 0, i.e. X is positive definite. □",
          },
        },
      ],
    },
  ],
};
