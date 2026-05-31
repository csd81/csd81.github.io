// Auto-generated learning aids for chapter 5. Glossaries and flashcards bilingual.
import type { Bilingual } from './types'

export interface GlossaryEntry { term: Bilingual; def: Bilingual }
export interface Flashcard { q: Bilingual | string; a: Bilingual | string }

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
    {"q":{"en":"What are the requirements for the matrices $L$ and $U$ in the factorization $A = LU$ (Doolittle's method)?","hu":"Milyen követelmények vonatkoznak a $L$ és $U$ mátrixokra a $A = LU$ faktorizációban (Doolittle-módszer)?"},"a":{"en":"$L$ is lower triangular with 1s on the main diagonal, and $U$ is upper triangular.","hu":"A $L$ alsó háromszög alakú, a főátlón 1-esek, a $U$ pedig a felső háromszög alakú."}},
    {"q":{"en":"What is the alternative name for $LU$ factorization mentioned in the text?","hu":"Mi a szövegben említett $LU$ faktorizáció alternatív neve?"},"a":{"en":"Doolittle's method","hu":"Doolittle módszere"}},
    {"q":{"en":"Under what two conditions is the $LU$ factorization of a square matrix $A$ guaranteed to be unique?","hu":"Milyen két feltétel mellett garantáltan egyedi a $LU$ faktorszámú négyzetmátrix $A$?"},"a":{"en":"$A$ must be nonsingular and the factorization must exist.","hu":"A $A$-nek nem szingulárisnak kell lennie, és léteznie kell a faktorizációnak."}},
    {"q":{"en":"In the proof of uniqueness for $A = L_1 U_1 = L_2 U_2$, what is the result of the matrix product $L_2^{-1} L_1$?","hu":"A $A = L_1 U_1 = L_2 U_2$ egyediségének bizonyítása során mi az eredménye a $L_2^{-1} L_1$ mátrixterméknek?"},"a":{"en":"The identity matrix $I$.","hu":"A $I$ identitásmátrix."}},
    {"q":{"en":"In Gaussian elimination, how is the multiplier $l_{i1}$ defined for the first column ($i = 2, 3, \\dots, n$)?","hu":"Gauss-eliminációban hogyan definiálható a $l_{i1}$ szorzó az első oszlophoz ($i = 2, 3, \\dots, n$)?"},"a":{"en":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$","hu":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"}},
    {"q":{"en":"What matrix $A^{(1)}$ is produced by the operation $L_1 A$ in the context of Gaussian elimination?","hu":"Milyen $A^{(1)}$ mátrixot állít elő a $L_1 A$ művelet a Gauss-elimináció kontextusában?"},"a":{"en":"The matrix obtained after performing the first elimination step.","hu":"Az első eliminációs lépés végrehajtása után kapott mátrix."}},
    {"q":{"en":"Describe the structure of the lower triangular matrix $L_1$ used to perform the first step of Gaussian elimination.","hu":"Ismertesse a Gauss-elimináció első lépésének végrehajtásához használt $L_1$ alsó háromszögmátrix szerkezetét!"},"a":{"en":"It has 1s on the diagonal and the values $-l_{i1}$ in the first column below the diagonal.","hu":"Az átlón 1, az átló alatti első oszlopban pedig a $-l_{i1}$ értékek találhatók."}},
    {"q":{"en":"How is the matrix $L$ constructed from the sequence of elimination matrices $L_1, L_2, \\dots, L_{n-1}$?","hu":"Hogyan épül fel a $L$ mátrix a $L_1, L_2, \\dots, L_{n-1}$ eliminációs mátrixok sorozatából?"},"a":{"en":"$L = (L_{n-1} L_{n-2} \\dots L_1)^{-1}$","hu":"$L = (L_{n-1} L_{n-2} \\dots L_1)^{-1}$"}},
    {"q":{"en":"What values occupy the sub-diagonal positions $(i, j)$ in the final matrix $L$ of an $LU$ factorization?","hu":"Milyen értékek foglalják el a $(i, j)$ átló alatti pozíciókat a $LU$ faktorizáció végső $L$ mátrixában?"},"a":{"en":"The multipliers $l_{ij}$ used during the Gaussian elimination process.","hu":"A Gauss-féle eliminációs folyamat során használt $l_{ij}$ szorzók."}},
    {"q":{"en":"What characterizes the matrix $U$ in the $LU$ factorization relative to Gaussian elimination?","hu":"Mi jellemzi a $U$ mátrixot a $LU$ faktorizációban a Gauss-eliminációhoz viszonyítva?"},"a":{"en":"It is the upper triangular matrix $A^{(n-1)}$ resulting from the completion of Gaussian elimination.","hu":"Ez a $A^{(n-1)}$ felső háromszögmátrix, amely a Gauss-elimináció befejeződéséből adódik."}},
    {"q":{"en":"According to Theorem 5.2, what is the prerequisite for the existence of an $LU$ factorization?","hu":"Az 5.2. Tétel szerint mi az előfeltétele a $LU$ faktorizáció létezésének?"},"a":{"en":"Gaussian elimination must be performable on the matrix $A$.","hu":"A Gauss-eliminációnak végrehajthatónak kell lennie a $A$ mátrixon."}},
    {"q":{"en":"Theorem 5.4: If all _____ of $A$ are nonzero, then $LU$ factorization exists without row changes.","hu":"5.4. Tétel: Ha a $A$ összes _____ értéke nem nulla, akkor a $LU$ faktorizáció sorváltás nélkül létezik."},"a":{"en":"principal minors","hu":"fő kiskorúak"}},
    {"q":{"en":"What type of matrix $P$ exists for any invertible matrix $A$ such that $PA = LU$ exists?","hu":"Milyen típusú $P$ mátrix létezik bármely olyan invertálható $A$ mátrixhoz, amelyhez a $PA = LU$ létezik?"},"a":{"en":"A permutation matrix","hu":"Egy permutációs mátrix"}},
    {"q":{"en":"When solving $Ax = b$ via $LU$ factorization, what is the first triangular system to be solved?","hu":"Ha a $Ax = b$ $LU$ faktorizálással megoldja, melyik az első háromszögrendszer, amelyet meg kell oldani?"},"a":{"en":"$Ly = b$","hu":"$Ly = b$"}},
    {"q":{"en":"In the $LU$ solution process for $Ax = b$, what is the second triangular system to be solved?","hu":"A $LU$ megoldási folyamatban a $Ax = b$ esetében melyik a második megoldandó háromszögrendszer?"},"a":{"en":"$Ux = y$","hu":"$Ux = y$"}},
    {"q":{"en":"What algorithm is used to solve the lower triangular system $Ly = b$?","hu":"Milyen algoritmussal oldják meg a $Ly = b$ alsó háromszögrendszert?"},"a":{"en":"Forward substitution","hu":"Előre csere"}},
    {"q":{"en":"What algorithm is used to solve the upper triangular system $Ux = y$?","hu":"Milyen algoritmussal oldják meg a $Ux = y$ felső háromszögrendszert?"},"a":{"en":"Backward substitution","hu":"Visszafelé csere"}},
    {"q":{"en":"Approximately how many multiplications/divisions are required to solve the two triangular systems $Ly = b$ and $Ux = y$?","hu":"Körülbelül hány szorzás/osztás szükséges a két háromszögrendszer, $Ly = b$ és $Ux = y$ megoldásához?"},"a":{"en":"$n^2 + \\mathcal{O}(n)$","hu":"$n^2 + \\mathcal{O}(n)$"}},
    {"q":{"en":"What is the computational complexity (in multiplications/divisions) for computing the $LU$ factorization itself?","hu":"Mekkora a számítási bonyolultság (szorzásban/osztásban) magának a $LU$ faktorizációnak a kiszámításához?"},"a":{"en":"$\\frac{n^3}{3} + \\mathcal{O}(n^2)$","hu":"$\\frac{n^3}{3} + \\mathcal{O}(n^2)$"}},
    {"q":{"en":"Why is $LU$ factorization particularly efficient for solving multiple systems $Ax = b_i$ with different $b_i$?","hu":"Miért különösen hatékony a $LU$ faktorizálás több $Ax = b_i$ rendszer megoldásához különböző $b_i$-vel?"},"a":{"en":"The factorization $A = LU$ is computed only once, and subsequent solutions only require $O(n^2)$ substitution steps.","hu":"A $A = LU$ faktorizációt csak egyszer számítják ki, és a további megoldásokhoz csak a $O(n^2)$ helyettesítési lépésekre van szükség."}},
    {"q":{"en":"In the shorthand method for $LU$ decomposition, where are the factors $l_{ij}$ written during calculation?","hu":"A $LU$ dekompozíció gyorsírási módszerében hová írják a számítás során a $l_{ij}$ tényezőket?"},"a":{"en":"In the positions of the elements that are being eliminated (changed to 0).","hu":"A kiküszöbölendő elemek pozíciójában (0-ra módosítva)."}},
    {"q":{"en":"If a matrix $A$ has a principal minor equal to zero, what might be necessary to find an $LU$-like factorization?","hu":"Ha egy $A$ mátrix főmollja nullával egyenlő, mi szükséges a $LU$-szerű faktorizáció megtalálásához?"},"a":{"en":"Row changes or the introduction of a permutation matrix $P$.","hu":"Sormódosítások vagy a $P$ permutációs mátrix bevezetése."}},
    {"q":{"en":"Term: Doolittle's Method","hu":"Fogalom: Doolittle-módszer"},"a":{"en":"Definition: An $LU$ factorization where the matrix $L$ is required to have unit diagonal entries.","hu":"Definíció: $LU$ faktorizáció, ahol a $L$ mátrixnak egységnyi átlós bejegyzésekkel kell rendelkeznie."}},
    {"q":{"en":"In the provided example, if $l_{21}=2, l_{31}=-1, l_{41}=-2$, what does the first column of $L$ (excluding the diagonal) look like?","hu":"A megadott példában, ha $l_{21}=2, l_{31}=-1, l_{41}=-2$, hogyan néz ki a $L$ első oszlopa (az átló nélkül)?"},"a":{"en":"It contains the values $2, -1,$ and $-2$.","hu":"A $2, -1,$ és $-2$ értékeket tartalmazza."}},
    {"q":{"en":"How does the nonsingularity of $A$ affect the matrices $L$ and $U$ in the factorization $A=LU$?","hu":"Hogyan hat a $A$ nem szingularitása a $L$ és $U$ mátrixokra a $A=LU$ faktorizációban?"},"a":{"en":"It ensures that $L$, $U$, and their components are also nonsingular.","hu":"Biztosítja, hogy a $L$, $U$ és alkatrészeik szintén nem egyediek."}},
    {"q":{"en":"What is the result of multiplying a lower triangular matrix by another lower triangular matrix?","hu":"Mi az eredménye, ha egy alsó háromszögmátrixot megszorozunk egy másik alsó háromszögmátrixszal?"},"a":{"en":"A lower triangular matrix.","hu":"Egy alsó háromszög mátrix."}},
    {"q":{"en":"What is the result of multiplying an upper triangular matrix by another upper triangular matrix?","hu":"Mi az eredménye, ha egy felső háromszögmátrixot megszorozunk egy másik felső háromszögmátrixszal?"},"a":{"en":"An upper triangular matrix.","hu":"Egy felső háromszög mátrix."}},
    {"q":{"en":"If a matrix is both lower triangular with 1s on the diagonal and upper triangular, it must be the _____.","hu":"Ha egy mátrix alsó háromszög alakú, és 1-esek az átlón és a felső háromszögek, akkor a _____-nak kell lennie."},"a":{"en":"identity matrix $I$","hu":"identitásmátrix $I$"}},
    {"q":{"en":"The formula $l_{i2} = \\frac{a_{i2}^{(1)}}{a_{22}^{(1)}}$ defines multipliers for which column of $L$?","hu":"A $l_{i2} = \\frac{a_{i2}^{(1)}}{a_{22}^{(1)}}$ képlet a $L$ melyik oszlopához határozza meg a szorzót?"},"a":{"en":"The second column.","hu":"A második oszlop."}},
    {"q":{"en":"True or False: Gaussian elimination must be performable without row swaps for a basic $LU$ factorization to exist.","hu":"Igaz vagy hamis: A Gauss-eliminációnak sorcserék nélkül is végrehajthatónak kell lennie ahhoz, hogy létezzen egy alapvető $LU$ faktorizáció."},"a":{"en":"True.","hu":"Igaz."}},
    {"q":{"en":"Concept: $A = LU$","hu":"Koncepció: $A = LU$"},"a":{"en":"Application: Efficiently solving linear systems by decomposing the problem into two simpler triangular problems.","hu":"Alkalmazás: Lineáris rendszerek hatékony megoldása a feladat két egyszerűbb háromszögfeladatra való felosztásával."}},
    {"q":{"en":"In Example 5.3, the final entry $u_{44}$ of the matrix $U$ is calculated as _____.","hu":"Az 5.3. példában a $U$ mátrix $u_{44}$ utolsó bejegyzése _____."},"a":{"en":"$38$","hu":"$38$"}},
    {"q":{"en":"What is the defining characteristic of the main diagonal of $L$ in Doolittle's method?","hu":"Mi a meghatározó jellemzője a $L$ főátlójának Doolittle módszerében?"},"a":{"en":"Every entry is exactly 1.","hu":"Minden bejegyzés pontosan 1."}},
    {"q":{"en":"If $\\det(A) \\ne 0$, then $\\det(L)$ and $\\det(U)$ must both be _____.","hu":"Ha $\\det(A) \\ne 0$, akkor a $\\det(L)$ és a $\\det(U)$ egyaránt _____ kell, hogy legyen."},"a":{"en":"nonzero","hu":"nem nulla"}},
    {"q":{"en":"The matrix $L_2$ has multipliers $-l_{i2}$ located in which column?","hu":"Melyik oszlopban találhatók a $L_2$ mátrix $-l_{i2}$ szorzói?"},"a":{"en":"The second column.","hu":"A második oszlop."}},
    {"q":{"en":"In the expression $L = L_1^{-1} L_2^{-1} \\dots L_{n-1}^{-1}$, the multipliers $l_{ij}$ in $L$ appear with what sign relative to the elimination matrices $L_k$?","hu":"A $L = L_1^{-1} L_2^{-1} \\dots L_{n-1}^{-1}$ kifejezésben a $L$ $l_{ij}$ szorzói milyen előjellel jelennek meg a $L_k$ eliminációs mátrixokhoz képest?"},"a":{"en":"With the opposite sign (positive $l_{ij}$ instead of negative $-l_{ij}$).","hu":"Ellentétes előjellel (pozitív $l_{ij}$ a negatív $-l_{ij}$ helyett)."}},
    {"q":{"en":"What is the value of $\\det(L)$ in an $LU$ factorization?","hu":"Mennyi a $\\det(L)$ értéke a $LU$ faktorizációban?"},"a":{"en":"$1$ (because it is triangular with 1s on the diagonal).","hu":"$1$ (mert háromszög alakú, átlóján 1-esek)."}},
    {"q":{"en":"According to Theorem 5.5, what property of $A$ allows for a $PA=LU$ factorization?","hu":"Az 5.5. Tétel szerint a $A$ mely tulajdonsága teszi lehetővé a $PA=LU$ faktorizációt?"},"a":{"en":"$A$ must be an invertible square matrix.","hu":"A $A$ invertálható négyzetmátrixnak kell lennie."}},
    {"q":{"en":"How many elimination matrices $L_k$ are defined for an $n \\times n$ matrix?","hu":"Hány $L_k$ eliminációs mátrix van meghatározva egy $n \\times n$ mátrixhoz?"},"a":{"en":"$n-1$","hu":"$n-1$"}},
    {"q":{"en":"If $L_2^{-1} L_1 = U_2 U_1^{-1}$, and the left side is lower triangular while the right side is upper triangular, what specific form must both sides take?","hu":"Ha $L_2^{-1} L_1 = U_2 U_1^{-1}$, és a bal oldal alsó háromszög, míg a jobb oldal felső háromszög alakú, milyen konkrét formát kell felvennie mindkét oldalnak?"},"a":{"en":"Diagonal matrix.","hu":"Átlós mátrix."}},
    {"q":{"en":"When a matrix has infinitely many $LU$ factorizations, what is typically true about its determinant?","hu":"Ha egy mátrixnak végtelen sok $LU$ faktorizációja van, mi igaz általában a determinánsára?"},"a":{"en":"The determinant is zero (the matrix is singular).","hu":"A determináns nulla (a mátrix szinguláris)."}},
    {"q":{"en":"In $LU$ decomposition, the matrix $U$ is produced by applying a sequence of _____ transformations to $A$.","hu":"A $LU$ bontásban a $U$ mátrixot úgy állítjuk elő, hogy egy _____ transzformációsorozatot alkalmazunk a $A$-re."},"a":{"en":"lower triangular (or Gaussian elimination)","hu":"alsó háromszög (vagy Gauss-elimináció)"}},
    {"q":{"en":"To solve $Ly = b$ for $y_i$, you use the previously calculated values of $y_1, \\dots, y_{i-1}$. What is this process called?","hu":"A $Ly = b$ $y_i$ esetén történő megoldásához használja a $y_1, \\dots, y_{i-1}$ korábban kiszámított értékeit. Hogy hívják ezt a folyamatot?"},"a":{"en":"Forward substitution.","hu":"Előre csere."}},
    {"q":{"en":"To solve $Ux = y$ for $x_i$, you start from $x_n$ and work towards $x_1$. What is this process called?","hu":"A $Ux = y$ $x_i$ számára történő megoldásához a $x_n$-ből induljon ki, és haladjon a $x_1$ felé. Hogy hívják ezt a folyamatot?"},"a":{"en":"Backward substitution.","hu":"Visszafelé csere."}},
    {"q":{"en":"In the matrix equation $A^{(1)} = L_1 A$, what does $L_1$ represent in terms of elementary row operations?","hu":"A $A^{(1)} = L_1 A$ mátrixegyenletben mit jelent a $L_1$ elemi sorműveletek szempontjából?"},"a":{"en":"Subtracting multiples of the first row from subsequent rows to create zeros in the first column.","hu":"Az első sor többszöröseinek kivonása a következő sorokból nullák létrehozásához az első oszlopban."}},
    {"q":{"en":"What is the relation between the principal minors of $A^{(k-1)}$ and $A^{(k)}$ during Gaussian elimination?","hu":"Mi a kapcsolat a $A^{(k-1)}$ és a $A^{(k)}$ fő minorjai között a Gauss-elimináció során?"},"a":{"en":"They are equal.","hu":"Egyenrangúak."}},
    {"q":{"en":"If the Gaussian elimination involves row changes, which theorem describes the resulting factorization?","hu":"Ha a Gauss-elimináció sorváltásokat tartalmaz, melyik tétel írja le a kapott faktorizációt?"},"a":{"en":"Theorem 5.5 (existence of $PA=LU$).","hu":"5.5. tétel ($PA=LU$ létezése)."}},
    {"q":{"en":"Given $A = LU$, what is the formula for $\\det(A)$ in terms of the entries of $U$?","hu":"Adott $A = LU$, mi a $\\det(A)$ képlete a $U$ bejegyzései szempontjából?"},"a":{"en":"The product of the diagonal entries of $U$.","hu":"A $U$ átlós bejegyzéseinek szorzata."}},
    {"q":{"en":"In the product $L_1 L_2 \\dots L_{n-1}$, why is it 'easy' to compute the result compared to arbitrary matrices?","hu":"A $L_1 L_2 \\dots L_{n-1}$ szorzatban miért „könnyű” az eredmény kiszámítása tetszőleges mátrixokhoz képest?"},"a":{"en":"Because each $L_k$ only modifies a specific column, and their products simply combine those columns.","hu":"Mivel minden $L_k$ csak egy adott oszlopot módosít, termékeik pedig egyszerűen kombinálják ezeket az oszlopokat."}},
    {"q":{"en":"Is it possible for a singular matrix to have an $LU$ factorization?","hu":"Lehetséges-e egy szinguláris mátrixnak $LU$ faktorizációja?"},"a":{"en":"Yes, but it is not unique.","hu":"Igen, de nem egyedi."}},
    {"q":{"en":"If $A$ is $4 \\times 4$, how many multipliers $l_{ij}$ are stored in the matrix $L$ below the diagonal?","hu":"Ha a $A$ a $4 \\times 4$, hány $l_{ij}$ szorzót tárol a $L$ mátrix az átló alatt?"},"a":{"en":"$6$ ($3$ in col 1, $2$ in col 2, $1$ in col 3).","hu":"$6$ ($3$ az 1. oszlopban, $2$ a 2. oszlopban, $1$ a 3. oszlopban)."}}
  ],
  'cholesky': [
    {"q":{"en":"What is the specific matrix product form of a Cholesky factorization?","hu":"Mi a Cholesky-faktorizáció specifikus mátrixszorzatformája?"},"a":{"en":"$\\mathbf{A} = \\mathbf{LL}^T$","hu":"$\\mathbf{A} = \\mathbf{LL}^T$"}},
    {"q":{"en":"In the Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$, what type of matrix must $\\mathbf{L}$ be?","hu":"A Cholesky-féle $\\mathbf{A} = \\mathbf{LL}^T$ faktorizációban milyen típusú mátrixnak kell lennie a $\\mathbf{L}$-nek?"},"a":{"en":"A lower triangular matrix.","hu":"Egy alsó háromszög mátrix."}},
    {"q":{"en":"According to the definition, the matrix $\\mathbf{A}$ in a Cholesky factorization must satisfy which property regarding its shape/balance?","hu":"A definíció szerint a Cholesky-faktorizációban a $\\mathbf{A}$ mátrixnak melyik tulajdonságnak kell megfelelnie az alakját/egyensúlyát tekintve?"},"a":{"en":"It must be a symmetric matrix.","hu":"Szimmetrikus mátrixnak kell lennie."}},
    {"q":{"en":"What is a sufficient condition for the existence of a real Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$?","hu":"Mi elégséges feltétele a valódi Cholesky-faktorizációs $\\mathbf{A} = \\mathbf{LL}^T$ létezésének?"},"a":{"en":"$\\mathbf{A}$ is symmetric and positive definite.","hu":"A $\\mathbf{A}$ szimmetrikus és pozitív határozott."}},
    {"q":{"en":"If the Cholesky factorization exists for a matrix $\\mathbf{A}$, is the result guaranteed to be unique?","hu":"Ha a Cholesky-faktorizáció létezik egy $\\mathbf{A}$ mátrixra, az eredmény garantáltan egyedi lesz?"},"a":{"en":"No, it is not unique.","hu":"Nem, nem egyedi."}},
    {"q":{"en":"If $\\mathbf{A}$ is positive definite, what choice can be made regarding the main diagonal elements of $\\mathbf{L}$?","hu":"Ha a $\\mathbf{A}$ pozitív határozott, mit lehet választani a $\\mathbf{L}$ fő átlós elemeit illetően?"},"a":{"en":"They can be chosen as positive elements.","hu":"Pozitív elemként választhatók."}},
    {"q":{"en":"What method is used to prove the existence theorem for the Cholesky factorization of an $n \\times n$ matrix?","hu":"Milyen módszerrel igazoljuk a létezési tételt egy $n \\times n$ mátrix Cholesky-faktorizálására?"},"a":{"en":"Mathematical induction with respect to the dimension of the matrix.","hu":"Matematikai indukció a mátrix dimenziójához képest."}},
    {"q":{"en":"In the induction proof, for which matrix size is the existence of the factorization considered obvious?","hu":"Az indukciós bizonyításban melyik mátrixméret esetén tekinthető nyilvánvalónak a faktorizáció létezése?"},"a":{"en":"$1 \\times 1$ matrices.","hu":"$1 \\times 1$ mátrixok."}},
    {"q":{"en":"When partitioning an $n \\times n$ matrix $\\mathbf{A}$ for the induction proof, what is the dimension of the top-left submatrix $\\mathbf{X}$?","hu":"Ha egy $n \\times n$ $\\mathbf{A}$ mátrixot particionál az indukciós bizonyításhoz, mekkora a bal felső $\\mathbf{X}$ almátrix mérete?"},"a":{"en":"$(n-1) \\times (n-1)$","hu":"$(n-1) \\times (n-1)$"}},
    {"q":{"en":"In the partitioning $\\mathbf{A} = \\begin{pmatrix} \\mathbf{X} & \\mathbf{y} \\\\ \\mathbf{y}^T & a_{nn} \\end{pmatrix}$, why must $\\mathbf{X}$ be positive definite if $\\mathbf{A}$ is positive definite?","hu":"A $\\mathbf{A} = \\begin{pmatrix} \\mathbf{X} & \\mathbf{y} \\\\ \\mathbf{y}^T & a_{nn} \\end{pmatrix}$ particionálásban miért kell a $\\mathbf{X}$ pozitív határozottnak lennie, ha a $\\mathbf{A}$ pozitív határozott?"},"a":{"en":"Because all principal minors of a positive definite matrix are positive.","hu":"Mert egy pozitív határozott mátrix minden fő minorja pozitív."}},
    {"q":{"en":"In the partitioned product form of the proof, what relation defines the top-left submatrix $\\mathbf{X}$?","hu":"A bizonyítás particionált szorzatalakjában milyen reláció határozza meg a $\\mathbf{X}$ bal felső részmátrixot?"},"a":{"en":"$\\mathbf{X} = \\tilde{\\mathbf{L}}\\tilde{\\mathbf{L}}^T$","hu":"$\\mathbf{X} = \\tilde{\\mathbf{L}}\\tilde{\\mathbf{L}}^T$"}},
    {"q":{"en":"In the proof, what equation relates the lower triangular submatrix $\\tilde{\\mathbf{L}}$, the vector $\\mathbf{c}$, and the vector $\\mathbf{y}$?","hu":"A bizonyításban milyen egyenlet kapcsolja össze a $\\tilde{\\mathbf{L}}$ alsó háromszög részmátrixot, a $\\mathbf{c}$ vektort és a $\\mathbf{y}$ vektort?"},"a":{"en":"$\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$","hu":"$\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$"}},
    {"q":{"en":"What scalar equation is used to solve for the bottom-right element $d$ in the proof?","hu":"Milyen skaláregyenletet használunk a $d$ jobb alsó elem megoldására a bizonyításban?"},"a":{"en":"$\\mathbf{c}^T\\mathbf{c} + d^2 = a_{nn}$","hu":"$\\mathbf{c}^T\\mathbf{c} + d^2 = a_{nn}$"}},
    {"q":{"en":"Why does the equation $\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$ have a unique solution for $\\mathbf{c}$ in the induction step?","hu":"Miért van a $\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$ egyenletnek egyedi megoldása a $\\mathbf{c}$-re az indukciós lépésben?"},"a":{"en":"Because $\\tilde{\\mathbf{L}}$ is nonsingular (its diagonal elements are positive).","hu":"Mivel a $\\tilde{\\mathbf{L}}$ nem szinguláris (az átlós elemei pozitívak)."}},
    {"q":{"en":"What formula relates the determinant of $\\mathbf{A}$ to the determinant of $\\tilde{\\mathbf{L}}$ and $d$ in the induction proof?","hu":"Milyen képlet kapcsolja össze a $\\mathbf{A}$ determinánsát a $\\tilde{\\mathbf{L}}$ és $d$ determinánsával az indukciós bizonyításban?"},"a":{"en":"$\\det(\\mathbf{A}) = \\det(\\tilde{\\mathbf{L}})^2 d^2$","hu":"$\\det(\\mathbf{A}) = \\det(\\tilde{\\mathbf{L}})^2 d^2$"}},
    {"q":{"en":"Under what condition is the scalar $d$ in the factorization proof guaranteed to be a positive real number?","hu":"Milyen feltétel mellett garantáltan pozitív valós szám a $d$ skalár a faktorizációs bizonyításban?"},"a":{"en":"When $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c} > 0$.","hu":"Amikor a $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c} > 0$."}},
    {"q":{"en":"In the algorithm, how is the first element $l_{11}$ calculated from the input matrix $\\mathbf{A}$?","hu":"Hogyan történik az algoritmusban a $l_{11}$ első elem kiszámítása a $\\mathbf{A}$ bemeneti mátrixból?"},"a":{"en":"$l_{11} = \\sqrt{a_{11}}$","hu":"$l_{11} = \\sqrt{a_{11}}$"}},
    {"q":{"en":"What is the formula for calculating the elements $l_{i1}$ in the first column below the diagonal?","hu":"Mi a képlet a $l_{i1}$ elemek kiszámításához az átló alatti első oszlopban?"},"a":{"en":"$l_{i1} = a_{i1}/l_{11}$","hu":"$l_{i1} = a_{i1}/l_{11}$"}},
    {"q":{"en":"Formula: General calculation for the diagonal element $l_{jj}$ (for $j > 1$)","hu":"Képlet: Általános számítás a $l_{jj}$ átlós elemhez ($j > 1$ esetén)"},"a":{"en":"$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$","hu":"$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$"}},
    {"q":{"en":"Formula: General calculation for the off-diagonal element $l_{ij}$ (where $i > j$)","hu":"Képlet: Általános számítás a $l_{ij}$ nem átlós elemre (ahol $i > j$)"},"a":{"en":"$l_{ij} = (a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk})/l_{jj}$","hu":"$l_{ij} = (a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk})/l_{jj}$"}},
    {"q":{"en":"What is the formula for the final element $l_{nn}$ of the matrix $\\mathbf{L}$?","hu":"Mi a képlete a $\\mathbf{L}$ mátrix $l_{nn}$ végelemének?"},"a":{"en":"$l_{nn} = \\sqrt{a_{nn} - \\sum_{k=1}^{n-1} l_{nk}^2}$","hu":"$l_{nn} = \\sqrt{a_{nn} - \\sum_{k=1}^{n-1} l_{nk}^2}$"}},
    {"q":{"en":"What is the leading term of the operation count for multiplications and divisions in the Cholesky algorithm?","hu":"Mi a műveletszám vezető tagja a szorzásokhoz és osztásokhoz a Cholesky-algoritmusban?"},"a":{"en":"$n^3/6$","hu":"$n^3/6$"}},
    {"q":{"en":"What is the leading term of the operation count for additions and subtractions in the Cholesky algorithm?","hu":"Mi az összeadások és kivonások műveletszámának vezető tagja a Cholesky-algoritmusban?"},"a":{"en":"$n^3/6$","hu":"$n^3/6$"}},
    {"q":{"en":"Exactly how many square root operations are performed in a Cholesky factorization of an $n \\times n$ matrix?","hu":"Pontosan hány négyzetgyök műveletet hajtanak végre egy $n \\times n$ mátrix Cholesky-faktorizálásában?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"In the Cholesky algorithm, which indices does the outer loop for the column variable $j$ span?","hu":"A Cholesky-algoritmusban mely indexekre terjed ki a $j$ oszlopváltozó külső ciklusa?"},"a":{"en":"$j = 2, \\ldots, n-1$","hu":"$j = 2, \\ldots, n-1$"}},
    {"q":{"en":"In the example matrix where $a_{11} = 4$, $a_{21} = -8$, and $a_{31} = 4$, what is the first column of $\\mathbf{L}$?","hu":"A $a_{11} = 4$, $a_{21} = -8$ és $a_{31} = 4$ példamátrixban melyik a $\\mathbf{L}$ első oszlopa?"},"a":{"en":"The column entries are $2$, $-4$, and $2$.","hu":"Az oszlopbejegyzések a következők: $2$, $-4$ és $2$."}},
    {"q":{"en":"In the $3 \\times 3$ example, if $l_{21} = -4$ and $a_{22} = 17$, what equation is used to find $l_{22}$?","hu":"A $3 \\times 3$ példában, ha $l_{21} = -4$ és $a_{22} = 17$, milyen egyenletet használunk a $l_{22}$ meghatározásához?"},"a":{"en":"$17 = (-4)^2 + l_{22}^2$","hu":"$17 = (-4)^2 + l_{22}^2$"}},
    {"q":{"en":"For the example matrix, given $l_{11}=2, l_{21}=-4, l_{31}=2$, and $a_{32}=-11$, what is the value of $l_{32}$?","hu":"A példamátrix esetében, adott $l_{11}=2, l_{21}=-4, l_{31}=2$ és $a_{32}=-11$, mi a $l_{32}$ értéke?"},"a":{"en":"$l_{32} = -3$","hu":"$l_{32} = -3$"}},
    {"q":{"en":"In the example matrix, how is $l_{33}$ determined if $a_{33}=22, l_{31}=2$, and $l_{32}=-3$?","hu":"A példamátrixban hogyan határozható meg a $l_{33}$, ha $a_{33}=22, l_{31}=2$ és $l_{32}=-3$?"},"a":{"en":"$22 = 2^2 + (-3)^2 + l_{33}^2$","hu":"$22 = 2^2 + (-3)^2 + l_{33}^2$"}},
    {"q":{"en":"What is the resulting $\\mathbf{L}$ matrix for the example $\\mathbf{A} = \\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}$?","hu":"Mi a kapott $\\mathbf{L}$ mátrix a példa $\\mathbf{A} = \\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}$ esetében?"},"a":{"en":"$\\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}$","hu":"$\\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}$"}},
    {"q":{"en":"Why does the matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ have no Cholesky factorization?","hu":"Miért nincs a $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ mátrix Cholesky-faktorizációja?"},"a":{"en":"It is not positive definite (the first diagonal element is 0, implying $l_{11} = 0$, which prevents division).","hu":"Nem pozitív határozott (az első átlós elem 0, ami $l_{11} = 0$-t jelent, ami megakadályozza az osztást)."}},
    {"q":{"en":"If the sum of squares of previous elements in a row exceeds the diagonal element $a_{jj}$, what happens to the diagonal element $l_{jj}$?","hu":"Ha az előző elemek négyzetösszege egy sorban meghaladja a $a_{jj}$ átlós elemet, mi történik a $l_{jj}$ átlós elemmel?"},"a":{"en":"It would become an imaginary number.","hu":"Képzeletbeli szám lesz belőle."}},
    {"q":{"en":"What property of $\\mathbf{A}$ ensures that $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c}$ will always be strictly positive in the real case?","hu":"A $\\mathbf{A}$ melyik tulajdonsága biztosítja, hogy a $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c}$ a valós esetben mindig szigorúan pozitív legyen?"},"a":{"en":"Positive definiteness of $\\mathbf{A}$.","hu":"A $\\mathbf{A}$ pozitív határozottsága."}},
    {"q":{"en":"How does the complexity of Cholesky factorization compare to LU decomposition generally?","hu":"Hogyan viszonyul a Cholesky-féle faktorizáció összetettsége az LU dekompozícióhoz általában?"},"a":{"en":"It is approximately half the work ($n^3/6$ vs $n^3/3$ for multiplications).","hu":"Körülbelül a munka fele ($n^3/6$ vs $n^3/3$ a szorzásokhoz)."}},
    {"q":{"en":"The term 'lower triangular' in Hungarian is ____.","hu":"Az „alsó háromszög” kifejezés magyarul ____."},"a":{"en":"alsó háromszögmátrix (or alulról trianguláris)","hu":"alsó háromszögmátrix (or alulról trianguláris)"}},
    {"q":{"en":"The term 'positive definite' in Hungarian is ____.","hu":"A 'pozitív határozott' kifejezés magyarul ____."},"a":{"en":"pozitív definit","hu":"pozitív definit"}},
    {"q":{"en":"In the algorithm, the inner loop for $i$ calculates elements from $j+1$ to $n$. What does this correspond to in the matrix $\\mathbf{L}$?","hu":"Az algoritmusban a $i$ belső ciklusa a $j+1$ és $n$ közötti elemeket számítja ki. Minek felel meg ez a $\\mathbf{L}$ mátrixban?"},"a":{"en":"The elements below the diagonal in column $j$.","hu":"Az átló alatti elemek a $j$ oszlopban."}},
    {"q":{"en":"What is the specific multiplication count given in Algorithm 5.8 including lower-order terms?","hu":"Mi az 5.8-as algoritmusban megadott fajlagos szorzási szám, beleértve az alacsonyabb rendű tagokat?"},"a":{"en":"$n^3/6 + n^2/2 - 2n/3$","hu":"$n^3/6 + n^2/2 - 2n/3$"}},
    {"q":{"en":"What is the specific addition count given in Algorithm 5.8 including lower-order terms?","hu":"Mekkora az 5.8-as algoritmusban megadott hozzáadási szám, beleértve az alacsonyabb rendű kifejezéseket?"},"a":{"en":"$n^3/6 - n/6$","hu":"$n^3/6 - n/6$"}},
    {"q":{"en":"Concept: Principal Minor","hu":"Koncepció: fő-moll"},"a":{"en":"Definition: The determinant of a square submatrix obtained by deleting rows and columns with the same indices. All must be positive for positive definiteness.","hu":"Definíció: Az azonos indexű sorok és oszlopok törlésével kapott négyzetes részmátrix determinánsa. Mindennek pozitívnak kell lennie a pozitív határozottsághoz."}},
    {"q":{"en":"In the inductive step, if $\\tilde{\\mathbf{L}}$ is the $(n-1) \\times (n-1)$ Cholesky factor, what is $\\det(\\tilde{\\mathbf{L}})$?","hu":"Az induktív lépésben, ha a $\\tilde{\\mathbf{L}}$ a $(n-1) \\times (n-1)$ Cholesky-tényező, mi az a $\\det(\\tilde{\\mathbf{L}})$?"},"a":{"en":"The product of its diagonal elements.","hu":"Átlós elemeinek szorzata."}},
    {"q":{"en":"What is the output of the Cholesky factorization algorithm?","hu":"Mi a Cholesky-féle faktorizációs algoritmus kimenete?"},"a":{"en":"The elements $l_{ij}$ for $i = 1, \\ldots, n$ and $j = 1, \\ldots, i$.","hu":"A $l_{ij}$ elemek a $i = 1, \\ldots, n$ és $j = 1, \\ldots, i$ számára."}},
    {"q":{"en":"If a matrix is symmetric but not positive definite, can a Cholesky-like factorization $LL^T$ exist?","hu":"Ha egy mátrix szimmetrikus, de nem pozitív határozott, létezhet-e Cholesky-szerű $LL^T$ faktorizáció?"},"a":{"en":"It might exist, but the diagonal elements of $L$ may not be real or positive.","hu":"Lehetséges, hogy létezik, de a $L$ átlós elemei nem valósak vagy pozitívak."}},
    {"q":{"en":"If $a_{11} = 16$ in a matrix, what is $l_{11}$ in its Cholesky factorization?","hu":"Ha a $a_{11} = 16$ egy mátrixban, mi az a $l_{11}$ a Cholesky-féle faktorizációjában?"},"a":{"en":"$4$","hu":"$4$"}},
    {"q":{"en":"If $a_{11} = 1$ and $a_{21} = -1$, what are $l_{11}$ and $l_{21}$?","hu":"Ha $a_{11} = 1$ és $a_{21} = -1$, mik azok a $l_{11}$ és $l_{21}$?"},"a":{"en":"$l_{11} = 1$ and $l_{21} = -1$.","hu":"$l_{11} = 1$ és $l_{21} = -1$."}},
    {"q":{"en":"True or False: The algorithm calculates $\\mathbf{L}$ row by row or column by column.","hu":"Igaz vagy hamis: Az algoritmus soronként vagy oszloponként kiszámítja a $\\mathbf{L}$-t."},"a":{"en":"True (the specific implementation provided proceeds column by column).","hu":"Igaz (a megadott konkrét megvalósítás oszlopról oszlopra halad)."}},
    {"q":{"en":"In the proof, $\\mathbf{c}$ is an $(n-1)$-dimensional _____ vector.","hu":"A bizonyításban a $\\mathbf{c}$ egy $(n-1)$-dimenziós _____ vektor."},"a":{"en":"column","hu":"oszlop"}},
    {"q":{"en":"The induction hypothesis assumes the theorem holds for matrices of what size?","hu":"Az indukciós hipotézis azt feltételezi, hogy a tétel mekkora mátrixokra érvényes?"},"a":{"en":"$(n-1) \\times (n-1)$","hu":"$(n-1) \\times (n-1)$"}},
    {"q":{"en":"Which theorem is typically used to state that the leading submatrix $X$ of a positive definite matrix is also positive definite?","hu":"Melyik tételt használjuk tipikusan annak megállapítására, hogy egy pozitív határozott mátrix $X$ vezető részmátrixa is pozitív határozott?"},"a":{"en":"Theorem 3.10 (as cited in the source).","hu":"3.10. tétel (a forrásban hivatkozva)."}},
    {"q":{"en":"What does the expression $l_{ik}l_{jk}$ inside the summation for $l_{ij}$ represent?","hu":"Mit jelent a $l_{ik}l_{jk}$ kifejezés a $l_{ij}$ összegzésén belül?"},"a":{"en":"The dot product of the truncated rows $i$ and $j$ of $\\mathbf{L}$.","hu":"A $\\mathbf{L}$ $i$ és $j$ csonka sorainak pontszorzata."}},
    {"q":{"en":"If $\\mathbf{A}$ is a $2 \\times 2$ matrix, how many elements are in the 'output' list $(l_{ij})$?","hu":"Ha a $\\mathbf{A}$ egy $2 \\times 2$ mátrix, hány elem van a $(l_{ij})$ „kimeneti” listában?"},"a":{"en":"3 elements ($l_{11}, l_{21}, l_{22}$)","hu":"3 elem ($l_{11}, l_{21}, l_{22}$)"}},
    {"q":{"en":"Is the Cholesky factorization possible for a matrix with a negative diagonal element?","hu":"Lehetséges-e a Cholesky-féle faktorizálás negatív átlós elemű mátrix esetén?"},"a":{"en":"No, because $l_{ii}^2 = a_{ii} - \\sum l_{ik}^2$ would require a square root of a negative number for a real factorization.","hu":"Nem, mert a $l_{ii}^2 = a_{ii} - \\sum l_{ik}^2$ egy negatív szám négyzetgyökére lenne szükség a valós faktorizáláshoz."}},
    {"q":{"en":"In the Cholesky algorithm, which element is updated in the very first assignment?","hu":"A Cholesky-algoritmusban melyik elem frissül a legelső hozzárendelésben?"},"a":{"en":"$l_{11}$","hu":"$l_{11}$"}},
    {"q":{"en":"How is $l_{jj}$ defined in the algorithm when $j=1$?","hu":"Hogyan definiálható a $l_{jj}$ az algoritmusban, amikor a $j=1$?"},"a":{"en":"It is simply $\\sqrt{a_{11}}$ (handled as a separate step before the $j$ loop).","hu":"Egyszerűen $\\sqrt{a_{11}}$ (a $j$ hurok előtt külön lépésként kezelik)."}},
    {"q":{"en":"In the complexity analysis, what does $\\mathcal{O}(n^2)$ represent?","hu":"Mit jelent a komplexitáselemzésben a $\\mathcal{O}(n^2)$?"},"a":{"en":"Lower-order terms that become insignificant compared to $n^3$ as $n$ grows.","hu":"Az alacsonyabb rendű kifejezések, amelyek a $n$ növekedésével jelentéktelenné válnak a $n^3$-hez képest."}}
  ],
}
