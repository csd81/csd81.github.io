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
      id: "lu-thm-unique-proof",
      kind: "proof",
      body: [
        {
          rich: {
            en: "Suppose $\\mathbf{A}=\\mathbf{L}_1\\mathbf{U}_1=\\mathbf{L}_2\\mathbf{U}_2$ are two LU factorizations. Since $\\det(\\mathbf{A})=\\det(\\mathbf{L}_1)\\det(\\mathbf{U}_1)=\\det(\\mathbf{L}_2)\\det(\\mathbf{U}_2)\\neq 0$, all four factors are nonsingular, hence $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$. The left-hand side is lower triangular and the right-hand side upper triangular, so both must be diagonal. The main diagonal of $\\mathbf{L}_2^{-1}\\mathbf{L}_1$ consists only of $1$'s, therefore $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}=\\mathbf{I}$, which gives $\\mathbf{L}_1=\\mathbf{L}_2$ and $\\mathbf{U}_1=\\mathbf{U}_2$. $\\;\\square$",
            hu: "Tegyük fel, hogy $\\mathbf{A}=\\mathbf{L}_1\\mathbf{U}_1=\\mathbf{L}_2\\mathbf{U}_2$ két LU-faktorizáció. Mivel $\\det(\\mathbf{A})=\\det(\\mathbf{L}_1)\\det(\\mathbf{U}_1)=\\det(\\mathbf{L}_2)\\det(\\mathbf{U}_2)\\neq 0$, mind a négy tényező nemszinguláris, így $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$. A bal oldal alulról trianguláris, a jobb oldal felülről trianguláris, ezért mindkettő diagonális. Az $\\mathbf{L}_2^{-1}\\mathbf{L}_1$ főátlójában csupa $1$ áll, tehát $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}=\\mathbf{I}$, amiből $\\mathbf{L}_1=\\mathbf{L}_2$ és $\\mathbf{U}_1=\\mathbf{U}_2$. $\\;\\square$",
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
            en: "with $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$. We carry out the elimination so that each factor $l_{ij}$ is written into the position it eliminates (instead of the resulting $0$):",
            hu: "ahol $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$. Az eliminációt úgy végezzük, hogy minden $l_{ij}$ faktort abba a pozícióba írunk, amelyet kinulláz (a keletkező $0$ helyére):",
          },
        },
        {
          math: `\\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -3 & 0 & -6 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -1 & 6 & 2 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -1 & 6 & 38 \\end{pmatrix}`,
        },
        {
          rich: {
            en: "In the last matrix the entries on and above the main diagonal form $\\mathbf{U}$, and the entries below it form $\\mathbf{L}$:",
            hu: "Az utolsó mátrixban a főátlóban és felette álló elemek alkotják $\\mathbf{U}$-t, az alatta állók pedig $\\mathbf{L}$-et:",
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
    {
      id: "lu-ex-1",
      kind: "exercise",
      label: { en: "Exercise 1", hu: "1. feladat" },
      body: [
        {
          rich: {
            en: "Compute the LU factorization of the following matrices:",
            hu: "Számítsd ki az alábbi mátrixok LU-faktorizációját:",
          },
        },
        {
          math: `\\text{(a)}\\ \\begin{pmatrix} 2 & 3 & -1 \\\\ -1 & -2 & -1 \\\\ 0 & 2 & 4 \\end{pmatrix} \\qquad \\text{(b)}\\ \\begin{pmatrix} 4 & -1 & 2 \\\\ -12 & 0 & -1 \\\\ 8 & -17 & 26 \\end{pmatrix}`,
        },
        {
          math: `\\text{(c)}\\ \\begin{pmatrix} 1 & 3 & -1 & 2 \\\\ -2 & -4 & 5 & -5 \\\\ 0 & 6 & 6 & -2 \\\\ 2 & 4 & -14 & 16 \\end{pmatrix} \\qquad \\text{(d)}\\ \\begin{pmatrix} 2 & -1 & 3 & -2 \\\\ -8 & 5 & -7 & 7 \\\\ 2 & -4 & -14 & 0 \\\\ -4 & 7 & 23 & 4 \\end{pmatrix}`,
        },
      ],
    },
    {
      id: "lu-sol-1",
      kind: "solution",
      body: [
        {
          text: {
            en: "(a) Eliminate column 1: l_21 = -0.5, l_31 = 0, giving row 2 = (0, -0.5, -1.5) and row 3 unchanged. Then l_32 = 2/(-0.5) = -4 sends row 3 to (0, 0, -2). Hence:",
            hu: "(a) Eliminate column 1: l_21 = -0.5, l_31 = 0, giving row 2 = (0, -0.5, -1.5) and row 3 unchanged. Then l_32 = 2/(-0.5) = -4 sends row 3 to (0, 0, -2). Hence:",
          },
        },
        {
          math: `L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 0 & -4 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & -0.5 & -1.5 \\\\ 0 & 0 & -2 \\end{pmatrix}.`,
        },
        {
          text: {
            en: "(b)–(d) proceed the same way (multiplier l_ij = a_ij/pivot at each step, recorded in L below the diagonal; the reduced upper-triangular array is U). For example, a representative 3×3 result of this form is",
            hu: "(b)–(d) proceed the same way (multiplier l_ij = a_ij/pivot at each step, recorded in L below the diagonal; the reduced upper-triangular array is U). For example, a representative 3×3 result of this form is",
          },
        },
        {
          math: `L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 1 & -2 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & -0.5 & -1.5 \\\\ 0 & 0 & 6 \\end{pmatrix},`,
        },
        {
          text: {
            en: "and one always verifies the factorization by checking LU = A. In (c) the first pivot is 0, so a row swap (partial pivoting) is needed: with P swapping rows 1 and 2 one obtains a clean PA = LU. Each (d)-type 4×4 reduces analogously to a unit-lower-triangular L and upper-triangular U with nonzero pivots.",
            hu: "and one always verifies the factorization by checking LU = A. In (c) the first pivot is 0, so a row swap (partial pivoting) is needed: with P swapping rows 1 and 2 one obtains a clean PA = LU. Each (d)-type 4×4 reduces analogously to a unit-lower-triangular L and upper-triangular U with nonzero pivots.",
          },
        },
      ],
    },
    {
      id: "lu-ex-2",
      kind: "exercise",
      label: { en: "Exercise 2", hu: "2. feladat" },
      body: [
        {
          rich: {
            en: "Show that the matrix $\\left(\\begin{smallmatrix} 2 & 2 & 3 \\\\ 1 & 1 & 4 \\\\ 1 & 0 & 1 \\end{smallmatrix}\\right)$ has no LU factorization.",
            hu: "Mutasd meg, hogy az $\\left(\\begin{smallmatrix} 2 & 2 & 3 \\\\ 1 & 1 & 4 \\\\ 1 & 0 & 1 \\end{smallmatrix}\\right)$ mátrixnak nincs LU-faktorizációja.",
          },
        },
      ],
    },
    {
      id: "lu-sol-2",
      kind: "solution",
      body: [
        {
          text: {
            en: "After eliminating column 1 (l_21 = l_31 = 0.5) the array becomes rows (2, 2, 3), (0, 0, 2.5), (0, -1, -0.5): the pivot a_22 = 0 while a nonzero entry sits below it, so elimination cannot continue without a row swap. Equivalently, the 2×2 leading principal minor is",
            hu: "After eliminating column 1 (l_21 = l_31 = 0.5) the array becomes rows (2, 2, 3), (0, 0, 2.5), (0, -1, -0.5): the pivot a_22 = 0 while a nonzero entry sits below it, so elimination cannot continue without a row swap. Equivalently, the 2×2 leading principal minor is",
          },
        },
        {
          math: `\\det\\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix} = 0,`,
        },
        {
          text: {
            en: "and a (pivot-free) LU factorization requires every leading principal minor to be nonzero. Hence no LU factorization exists, even though the matrix is nonsingular (det A = 5).",
            hu: "and a (pivot-free) LU factorization requires every leading principal minor to be nonzero. Hence no LU factorization exists, even though the matrix is nonsingular (det A = 5).",
          },
        },
      ],
    },
    {
      id: "lu-ex-3",
      kind: "exercise",
      label: { en: "Exercise 3", hu: "3. feladat" },
      body: [
        {
          rich: {
            en: "Show that the matrix $\\left(\\begin{smallmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{smallmatrix}\\right)$ has infinitely many LU factorizations. Do we get a contradiction to Theorem 5.1?",
            hu: "Mutasd meg, hogy az $\\left(\\begin{smallmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{smallmatrix}\\right)$ mátrixnak végtelen sok LU-faktorizációja van. Ellentmondásba kerülünk az 5.1. tétellel?",
          },
        },
      ],
    },
    {
      id: "lu-sol-3",
      kind: "solution",
      body: [
        {
          text: {
            en: "This matrix is singular: its first two columns are equal, so det A = 0 and the 2×2 leading principal minor vanishes. After one elimination step both a_22 and a_32 become 0, so U must carry a zero on the diagonal; the corresponding entry of L is then free, and any choice reproduces A — giving infinitely many factorizations. This is no contradiction to Theorem 5.1, because that uniqueness theorem assumes a nonsingular matrix, whereas this A is singular.",
            hu: "This matrix is singular: its first two columns are equal, so det A = 0 and the 2×2 leading principal minor vanishes. After one elimination step both a_22 and a_32 become 0, so U must carry a zero on the diagonal; the corresponding entry of L is then free, and any choice reproduces A — giving infinitely many factorizations. This is no contradiction to Theorem 5.1, because that uniqueness theorem assumes a nonsingular matrix, whereas this A is singular.",
          },
        },
      ],
    },
    {
      id: "lu-ex-4",
      kind: "exercise",
      label: { en: "Exercise 4", hu: "4. feladat" },
      body: [
        {
          rich: {
            en: "Prove Theorem 5.4. (Hint: during the elimination steps the principal minors of $\\mathbf{A}^{(k-1)}$ and $\\mathbf{A}^{(k)}$ are equal — why?)",
            hu: "Bizonyítsd be az 5.4. tételt. (Útmutató: az eliminációs lépések során $\\mathbf{A}^{(k-1)}$ és $\\mathbf{A}^{(k)}$ főminorjai egyenlők — miért?)",
          },
        },
      ],
    },
    {
      id: "lu-sol-4",
      kind: "solution",
      body: [
        {
          text: {
            en: "Each elimination step multiplies on the left by a unit lower-triangular matrix L_k (1's on the diagonal, multipliers below), so det L_k = 1. For the leading k×k block this gives det(A^{(1)}_{1:k,1:k}) = det((L_1)_{1:k,1:k}) · det(A_{1:k,1:k}) = det(A_{1:k,1:k}); by induction every elimination step preserves the leading principal minors. If all principal minors of A are nonzero, then at each stage",
            hu: "Each elimination step multiplies on the left by a unit lower-triangular matrix L_k (1's on the diagonal, multipliers below), so det L_k = 1. For the leading k×k block this gives det(A^{(1)}_{1:k,1:k}) = det((L_1)_{1:k,1:k}) · det(A_{1:k,1:k}) = det(A_{1:k,1:k}); by induction every elimination step preserves the leading principal minors. If all principal minors of A are nonzero, then at each stage",
          },
        },
        {
          math: `\\det(A^{(k-1)}_{1:k,1:k}) = a_{11}^{(0)} a_{22}^{(1)} \\cdots a_{kk}^{(k-1)} \\neq 0,`,
        },
        {
          text: {
            en: "and since the earlier pivots are nonzero, the new pivot a_kk^{(k-1)} ≠ 0 too. Thus elimination proceeds with no row exchanges and (Theorem 5.2) the LU factorization exists. □",
            hu: "and since the earlier pivots are nonzero, the new pivot a_kk^{(k-1)} ≠ 0 too. Thus elimination proceeds with no row exchanges and (Theorem 5.2) the LU factorization exists. □",
          },
        },
      ],
    },
    {
      id: "lu-ex-5",
      kind: "exercise",
      label: { en: "Exercise 5", hu: "5. feladat" },
      body: [
        {
          rich: {
            en: "Prove Theorem 5.5.",
            hu: "Bizonyítsd be az 5.5. tételt.",
          },
        },
      ],
    },
    {
      id: "lu-sol-5",
      kind: "solution",
      body: [
        {
          text: {
            en: "Theorem 5.5: for any invertible A there is a permutation matrix P with PA = LU. Run Gaussian elimination with partial pivoting: at step k choose, as pivot, the largest-magnitude entry in column k among rows k…n. Such a nonzero entry always exists — otherwise the whole active column below row k would be zero and the leading submatrix of the permuted matrix would be singular, contradicting det A ≠ 0. Collecting the step permutations into P = P_{n-1} ⋯ P_1, the multipliers form a unit lower-triangular L and the reduced array is the upper-triangular U, so PA = LU. □",
            hu: "Theorem 5.5: for any invertible A there is a permutation matrix P with PA = LU. Run Gaussian elimination with partial pivoting: at step k choose, as pivot, the largest-magnitude entry in column k among rows k…n. Such a nonzero entry always exists — otherwise the whole active column below row k would be zero and the leading submatrix of the permuted matrix would be singular, contradicting det A ≠ 0. Collecting the step permutations into P = P_{n-1} ⋯ P_1, the multipliers form a unit lower-triangular L and the reduced array is the upper-triangular U, so PA = LU. □",
          },
        },
      ],
    },
    {
      id: "lu-ex-6",
      kind: "exercise",
      label: { en: "Exercise 6", hu: "6. feladat" },
      body: [
        {
          rich: {
            en: "Solve the linear systems of Exercise 1 of Section 3.3 using LU factorization.",
            hu: "Oldd meg a 3.3. szakasz 1. feladatának lineáris rendszereit LU-faktorizációval.",
          },
        },
      ],
    },
    {
      id: "lu-sol-6",
      kind: "solution",
      body: [
        {
          text: {
            en: "Factor A = LU once, then for each right-hand side solve Ly = b by forward substitution and Ux = y by backward substitution. For the representative system with",
            hu: "Factor A = LU once, then for each right-hand side solve Ly = b by forward substitution and Ux = y by backward substitution. For the representative system with",
          },
        },
        {
          math: `A = \\begin{pmatrix} 2 & 2 & -2 \\\\ -1 & 3 & 0 \\\\ 4 & 2 & -3 \\end{pmatrix}, \\quad b = \\begin{pmatrix} -4 \\\\ -11 \\\\ -1 \\end{pmatrix},`,
        },
        {
          text: {
            en: "elimination gives the factors",
            hu: "elimination gives the factors",
          },
        },
        {
          math: `L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 2 & -0.5 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 2 & -2 \\\\ 0 & 4 & -1 \\\\ 0 & 0 & 0.5 \\end{pmatrix}.`,
        },
        {
          text: {
            en: "Forward substitution yields y = (-4, -13, 0.5), and backward substitution then gives the solution",
            hu: "Forward substitution yields y = (-4, -13, 0.5), and backward substitution then gives the solution",
          },
        },
        {
          math: `x = \\begin{pmatrix} 2 \\\\ -3 \\\\ 1 \\end{pmatrix}.`,
        },
      ],
    },
  ],
};
