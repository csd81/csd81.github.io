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
  ],
};
