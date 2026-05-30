import type { Section } from "./types";

export const luSection: Section = {
  id: "lu",
  title: { en: "5.1 LU Factorization", hu: "5.1 LU-faktorizáció" },
  blocks: [
    {
      id: "lu-def",
      kind: "definition",
      label: { en: "Definition (LU / Doolittle)", hu: "Definíció (LU / Doolittle)" },
      body: [
        {
          rich: {
            en: "Let $\\mathbf{A}$ be an $n\\times n$ matrix. The product $\\mathbf{A}=\\mathbf{LU}$ is called the *LU factorization* of $\\mathbf{A}$ (or *Doolittle's method*) if $\\mathbf{L}$ is lower triangular with all $1$'s on the main diagonal, and $\\mathbf{U}$ is upper triangular.",
            hu: "Legyen $\\mathbf{A}$ egy $n\\times n$-es mátrix. Az $\\mathbf{A}=\\mathbf{LU}$ szorzatot az $\\mathbf{A}$ *LU-faktorizációjának* (vagy *Doolittle-faktorizációjának*) nevezzük, ha $\\mathbf{L}$ alulról trianguláris, főátlójában csupa $1$-essel, az $\\mathbf{U}$ pedig felülről trianguláris.",
          },
        },
        {
          math: `\\begin{pmatrix} -2 & -1 & -3 \\\\ -4 & 0 & -7 \\\\ 6 & 7 & 9 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -3 & 2 & 1 \\end{pmatrix} \\begin{pmatrix} -2 & -1 & -3 \\\\ 0 & 2 & -1 \\\\ 0 & 0 & 2 \\end{pmatrix}`,
        },
      ],
    },
    {
      id: "lu-thm-unique",
      kind: "theorem",
      label: { en: "Theorem 5.1 (Uniqueness)", hu: "5.1. tétel (Egyértelműség)" },
      body: [
        {
          rich: {
            en: "Let $\\mathbf{A}$ be a nonsingular square matrix. If the LU factorization of $\\mathbf{A}$ exists, then it is unique.",
            hu: "Legyen $\\mathbf{A}$ nemszinguláris négyzetes mátrix. Ha az $\\mathbf{A}$ LU-faktorizációja létezik, akkor az egyértelmű.",
          },
        },
      ],
    },
    {
      id: "lu-construction",
      kind: "text",
      label: { en: "Construction via Gaussian elimination", hu: "Felépítés Gauss-eliminációval" },
      body: [
        {
          rich: {
            en: "Let $l_{i1}=a_{i1}/a_{11}$ for $i=2,\\dots,n$, and define the lower triangular matrix $\\mathbf{L}_1$ whose first column below the diagonal holds $-l_{i1}$:",
            hu: "Legyen $l_{i1}=a_{i1}/a_{11}$, $i=2,\\dots,n$, és definiáljuk azt az $\\mathbf{L}_1$ alulról trianguláris mátrixot, melynek első oszlopában a főátló alatt $-l_{i1}$ áll:",
          },
        },
        {
          math: `\\mathbf{L}_1 := \\begin{pmatrix} 1 & & & \\\\ -l_{21} & 1 & & \\\\ \\vdots & & \\ddots & \\\\ -l_{n1} & & & 1 \\end{pmatrix}, \\qquad \\mathbf{L}_1\\mathbf{A} = \\mathbf{A}^{(1)}.`,
        },
        {
          rich: {
            en: "Here $\\mathbf{A}^{(1)}$ is the matrix after the first elimination step. Repeating for columns $2,\\dots,n-1$ produces $\\mathbf{L}_2,\\dots,\\mathbf{L}_{n-1}$ with $\\mathbf{A}^{(k)}=\\mathbf{L}_k\\mathbf{A}^{(k-1)}$.",
            hu: "Itt $\\mathbf{A}^{(1)}$ az első eliminációs lépés utáni mátrix. A $2,\\dots,n-1$ oszlopokra ismételve kapjuk az $\\mathbf{L}_2,\\dots,\\mathbf{L}_{n-1}$ mátrixokat, ahol $\\mathbf{A}^{(k)}=\\mathbf{L}_k\\mathbf{A}^{(k-1)}$.",
          },
        },
        {
          rich: {
            en: "A simple computation gives the product (5.1) and its inverse $\\mathbf{L}$ (5.2):",
            hu: "Egyszerű számolással adódik a szorzat (5.1) és inverze, $\\mathbf{L}$ (5.2):",
          },
        },
        {
          math: `\\mathbf{L} := (\\mathbf{L}_{n-1}\\cdots\\mathbf{L}_1)^{-1} = \\begin{pmatrix} 1 & & & \\\\ l_{21} & 1 & & \\\\ l_{31} & l_{32} & 1 & \\\\ \\vdots & \\vdots & & \\ddots \\\\ l_{n1} & l_{n2} & \\cdots & 1 \\end{pmatrix}. \\tag{5.2}`,
        },
      ],
    },
    {
      id: "lu-thm-exist",
      kind: "theorem",
      label: { en: "Theorem 5.2 (Existence)", hu: "5.2. tétel (Létezés)" },
      body: [
        {
          rich: {
            en: "If Gaussian elimination can be performed on $\\mathbf{A}$, then $\\mathbf{A}=\\mathbf{LU}$ exists. Then $\\mathbf{U}=\\mathbf{A}^{(n-1)}$ is the upper triangular result of elimination, and $\\mathbf{L}$ is given by (5.2), where $l_{ij}$ are the elimination factors.",
            hu: "Ha a Gauss-elimináció végrehajtható $\\mathbf{A}$-n, akkor $\\mathbf{A}=\\mathbf{LU}$ létezik. Ekkor $\\mathbf{U}=\\mathbf{A}^{(n-1)}$ az elimináció felülről trianguláris eredménye, $\\mathbf{L}$ pedig (5.2) szerint adott, ahol $l_{ij}$ az eliminációs faktorok.",
          },
        },
      ],
    },
    {
      id: "lu-example",
      kind: "example",
      label: { en: "Example 5.3", hu: "5.3. példa" },
      body: [
        {
          rich: {
            en: "Factor the $4\\times 4$ matrix. We write each multiplier $l_{ij}$ into the position it eliminates:",
            hu: "Faktorizáljuk a $4\\times 4$-es mátrixot. Minden $l_{ij}$ szorzót abba a pozícióba írunk, amelyet kinulláz:",
          },
        },
        {
          math: `\\mathbf{A}=\\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}`,
        },
        {
          rich: {
            en: "with $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$, yielding",
            hu: "ahol $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$, így",
          },
        },
        {
          math: `\\mathbf{A}=\\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 2 & 1 & 0 & 0 \\\\ -1 & 0 & 1 & 0 \\\\ -2 & -1 & 6 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 0 & 3 & 6 & 8 \\\\ 0 & 0 & 1 & -6 \\\\ 0 & 0 & 0 & 38 \\end{pmatrix}.`,
        },
        {
          text: {
            en: "Tip: open the LU solver and enter this matrix to watch every elimination step. Then press “Verify” to multiply L·U back to A.",
            hu: "Tipp: nyisd meg az LU-megoldót, és írd be ezt a mátrixot, hogy lásd minden eliminációs lépést. Majd nyomd meg az „Ellenőrzés” gombot, hogy L·U visszaszorzásával megkapd A-t.",
          },
        },
      ],
    },
    {
      id: "lu-thm-minors",
      kind: "theorem",
      label: { en: "Theorem 5.4", hu: "5.4. tétel" },
      body: [
        {
          rich: {
            en: "If all leading principal minors of $\\mathbf{A}$ are nonzero, then Gaussian elimination can be performed without row interchanges, so $\\mathbf{A}=\\mathbf{LU}$ exists.",
            hu: "Ha $\\mathbf{A}$ összes bal felső főminorja nullától különböző, akkor a Gauss-elimináció sorcsere nélkül végrehajtható, így $\\mathbf{A}=\\mathbf{LU}$ létezik.",
          },
        },
      ],
    },
    {
      id: "lu-thm-perm",
      kind: "theorem",
      label: { en: "Theorem 5.5", hu: "5.5. tétel" },
      body: [
        {
          rich: {
            en: "For any invertible square matrix $\\mathbf{A}$ there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{PA}=\\mathbf{LU}$ exists.",
            hu: "Bármely invertálható négyzetes $\\mathbf{A}$ mátrixhoz létezik olyan $\\mathbf{P}$ permutációs mátrix, hogy $\\mathbf{PA}=\\mathbf{LU}$ létezik.",
          },
        },
      ],
    },
    {
      id: "lu-solve",
      kind: "text",
      label: { en: "Solving linear systems", hu: "Lineáris rendszerek megoldása" },
      body: [
        {
          rich: {
            en: "If $\\mathbf{A}=\\mathbf{LU}$ is known, solve $\\mathbf{Ax}=\\mathbf{b}$ via $\\mathbf{LUx}=\\mathbf{b}$. Introduce $\\mathbf{y}=\\mathbf{Ux}$; the system splits into two triangular systems:",
            hu: "Ha $\\mathbf{A}=\\mathbf{LU}$ ismert, az $\\mathbf{Ax}=\\mathbf{b}$ rendszert $\\mathbf{LUx}=\\mathbf{b}$ alakban oldjuk meg. Vezessük be $\\mathbf{y}=\\mathbf{Ux}$-et; a rendszer két trianguláris rendszerre bomlik:",
          },
        },
        { math: `\\mathbf{Ly}=\\mathbf{b}, \\qquad \\mathbf{Ux}=\\mathbf{y}.` },
        {
          rich: {
            en: "Solve the first by forward substitution, the second by backward substitution. The two triangular solves cost $n^2+\\mathcal{O}(n)$ multiplications/divisions; the factorization costs $n^3/3+\\mathcal{O}(n^2)$. This is especially efficient when many systems share the same $\\mathbf{A}$.",
            hu: "Az elsőt előrehelyettesítéssel, a másodikat visszahelyettesítéssel oldjuk meg. A két trianguláris megoldás $n^2+\\mathcal{O}(n)$ szorzás/osztás; a faktorizáció $n^3/3+\\mathcal{O}(n^2)$. Különösen hatékony, ha sok rendszer ugyanazt az $\\mathbf{A}$-t használja.",
          },
        },
      ],
    },
  ],
};
