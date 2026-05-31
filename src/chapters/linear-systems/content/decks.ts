// Auto-generated learning aids for chapter 3. Glossaries and flashcards bilingual.
import type { Bilingual } from '../lib/types'

export interface GlossaryEntry { term: Bilingual; def: Bilingual }
export interface Flashcard { q: Bilingual | string; a: Bilingual | string }

export const GLOSSARIES: Record<string, GlossaryEntry[]> = {
  's31': [
    {
      "term": {
        "en": "Inverse · nonsingular · singular",
        "hu": "Inverz · reguláris · szinguláris"
      },
      "def": {
        "en": "$\\mathbf{A}^{-1}$ satisfies $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$. A matrix with an inverse is **invertible/nonsingular**; without one it is **singular**.",
        "hu": "$\\mathbf{A}^{-1}$-re $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$ teljesül. Az inverzzel rendelkező mátrix **invertálható/reguláris**; amelyiknek nincs, az **szinguláris**."
      }
    },
    {
      "term": {
        "en": "Determinant & cofactor expansion (Thm 3.1)",
        "hu": "Determináns és kifejtési tétel (3.1. tétel)"
      },
      "def": {
        "en": "Key properties: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, row swap flips the sign, adding a multiple of a row leaves it unchanged. Laplace expansion: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$.",
        "hu": "Fő tulajdonságok: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, sorcsere előjelet vált, egy sor többszörösének hozzáadása nem változtat. Kifejtés: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$."
      }
    },
    {
      "term": {
        "en": "Invertibility equivalences (Thm 3.2/3.3)",
        "hu": "Invertálhatósági ekvivalenciák (3.2/3.3)"
      },
      "def": {
        "en": "These are equivalent: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertible; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has a unique solution for every $\\mathbf{b}$. And $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$ has a nontrivial solution iff $\\mathbf{A}$ is singular.",
        "hu": "Ekvivalensek: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertálható; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ minden $\\mathbf{b}$-re egyértelműen megoldható. És $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$-nak pontosan akkor van nemtriviális megoldása, ha $\\mathbf{A}$ szinguláris."
      }
    },
    {
      "term": {
        "en": "Triangular matrix (Thm 3.5/3.6)",
        "hu": "Háromszögmátrix (3.5/3.6)"
      },
      "def": {
        "en": "Upper (lower) triangular: zeros below (above) the diagonal. Its determinant is the product of the diagonal, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; products and inverses of triangular matrices stay triangular.",
        "hu": "Felső (alsó) háromszög: a főátló alatt (felett) nullák. Determinánsa a főátló szorzata, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; háromszögmátrixok szorzata és inverze is háromszög marad."
      }
    },
    {
      "term": {
        "en": "Permutation matrix (Thm 3.7)",
        "hu": "Permutációs mátrix (3.7. tétel)"
      },
      "def": {
        "en": "An identity matrix with rows (columns) reordered — exactly one 1 per row and column. Left-multiplying $\\mathbf{P}\\mathbf{A}$ permutes the rows of $\\mathbf{A}$; right-multiplying permutes columns.",
        "hu": "Az egységmátrix sorainak (oszlopainak) átrendezése — soronként és oszloponként pontosan egy 1-es. Balszorzás $\\mathbf{P}\\mathbf{A}$ a sorokat, jobbszorzás az oszlopokat permutálja."
      }
    },
    {
      "term": {
        "en": "Diagonally dominant (Thm 3.8)",
        "hu": "Diagonálisan domináns (3.8. tétel)"
      },
      "def": {
        "en": "$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ for every row (column dominance is the same for $\\mathbf{A}^T$). A diagonally dominant matrix is invertible, and Gaussian elimination needs no pivoting.",
        "hu": "$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ minden sorra (az oszlopdominancia ugyanez $\\mathbf{A}^T$-re). A diagonálisan domináns mátrix invertálható, és a Gauss-elimináció főelemkiválasztás nélkül elvégezhető."
      }
    },
    {
      "term": {
        "en": "Positive definite (Thm 3.9/3.10)",
        "hu": "Pozitív definit (3.9/3.10)"
      },
      "def": {
        "en": "Symmetric $\\mathbf{A}$ with $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ for all $\\mathbf{x}\\ne\\mathbf{0}$. Then $\\mathbf{A}$ is invertible with $a_{ii}>0$; equivalently every leading principal minor is positive (Sylvester’s criterion).",
        "hu": "Szimmetrikus $\\mathbf{A}$, amelyre $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ minden $\\mathbf{x}\\ne\\mathbf{0}$-ra. Ekkor $\\mathbf{A}$ invertálható, $a_{ii}>0$; ezzel egyenértékűen minden bal felső főminor pozitív (Sylvester-kritérium)."
      }
    },
    {
      "term": {
        "en": "Orthogonal matrix (Thm 3.11)",
        "hu": "Ortogonális mátrix (3.11. tétel)"
      },
      "def": {
        "en": "$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, i.e. $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal.",
        "hu": "$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, azaz $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális."
      }
    },
    {
      "term": {
        "en": "Eigenvalue & eigenvector (Thm 3.12)",
        "hu": "Sajátérték és sajátvektor (3.12. tétel)"
      },
      "def": {
        "en": "$\\lambda$ is an eigenvalue if $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ for some $\\mathbf{x}\\ne\\mathbf{0}$ (the eigenvector). The $n$ eigenvalues are the roots of the characteristic equation $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$.",
        "hu": "$\\lambda$ sajátérték, ha $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ valamely $\\mathbf{x}\\ne\\mathbf{0}$-ra (a sajátvektor). Az $n$ sajátérték a $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$ karakterisztikus egyenlet gyökei."
      }
    },
    {
      "term": {
        "en": "Eigenvalue properties (Thm 3.13/3.14)",
        "hu": "Sajátérték-tulajdonságok (3.13/3.14)"
      },
      "def": {
        "en": "$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ is invertible iff all $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ has eigenvalues $1/\\lambda_i$ and $\\mathbf{A}^k$ has $\\lambda_i^k$. A triangular matrix’s eigenvalues are its diagonal entries.",
        "hu": "$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ pontosan akkor invertálható, ha minden $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ sajátértékei $1/\\lambda_i$, $\\mathbf{A}^k$-é $\\lambda_i^k$. A háromszögmátrix sajátértékei a főátló elemei."
      }
    },
    {
      "term": {
        "en": "Similar matrices (Thm 3.15)",
        "hu": "Hasonló mátrixok (3.15. tétel)"
      },
      "def": {
        "en": "$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ for some invertible $\\mathbf{P}$. Similar matrices have identical eigenvalues (and the same characteristic polynomial).",
        "hu": "$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ valamely invertálható $\\mathbf{P}$-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is)."
      }
    },
    {
      "term": {
        "en": "Spectral radius (Thm 3.16–3.18)",
        "hu": "Spektrálsugár (3.16–3.18)"
      },
      "def": {
        "en": "$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. For any matrix norm $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, and a norm exists with $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Also $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, equal to $\\rho(\\mathbf{A})$ when symmetric.",
        "hu": "$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. Bármely mátrixnormára $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, és van olyan norma, hogy $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Továbbá $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, ami szimmetrikus esetben $\\rho(\\mathbf{A})$."
      }
    },
    {
      "term": {
        "en": "Vandermonde determinant (Thm 3.19)",
        "hu": "Vandermonde-determináns (3.19. tétel)"
      },
      "def": {
        "en": "The determinant of the matrix with rows $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ equals $\\prod_{i>j}(a_i-a_j)$; it is nonzero iff the $a_i$ are pairwise distinct. Central to polynomial interpolation.",
        "hu": "Az $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ sorú mátrix determinánsa $\\prod_{i>j}(a_i-a_j)$; pontosan akkor nem nulla, ha az $a_i$-k páronként különbözők. A polinominterpoláció kulcsa."
      }
    }
  ],
  's32': [
    {
      "term": {
        "en": "Triangular system",
        "hu": "Háromszög egyenletrendszer"
      },
      "def": {
        "en": "$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ where $\\mathbf{A}$ is upper (or lower) triangular. Each equation introduces at most one new unknown, so it solves directly without elimination.",
        "hu": "$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$, ahol $\\mathbf{A}$ felső (vagy alsó) háromszög. Minden egyenlet legfeljebb egy új ismeretlent hoz be, így elimináció nélkül közvetlenül megoldható."
      }
    },
    {
      "term": {
        "en": "Backward substitution (Alg. 3.21)",
        "hu": "Visszahelyettesítés (3.21. algoritmus)"
      },
      "def": {
        "en": "Solve an upper-triangular system bottom-up: $x_n=b_n/a_{nn}$, then $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ for $i=n-1,\\dots,1$.",
        "hu": "Felső háromszög rendszer megoldása alulról felfelé: $x_n=b_n/a_{nn}$, majd $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ $i=n-1,\\dots,1$-re."
      }
    },
    {
      "term": {
        "en": "Forward substitution",
        "hu": "Előrehelyettesítés"
      },
      "def": {
        "en": "The mirror method for a lower-triangular system: solve top-down, $x_1=b_1/a_{11}$, then $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$.",
        "hu": "Az alsó háromszög rendszer tükör-módszere: fentről lefelé, $x_1=b_1/a_{11}$, majd $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$."
      }
    },
    {
      "term": {
        "en": "Solvability condition",
        "hu": "Megoldhatósági feltétel"
      },
      "def": {
        "en": "Substitution works iff every diagonal entry $a_{ii}\\ne0$. Since $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, this is exactly $\\det(\\mathbf{A})\\ne0$ — the system has a unique solution.",
        "hu": "A helyettesítés pontosan akkor működik, ha minden $a_{ii}\\ne0$. Mivel $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, ez éppen $\\det(\\mathbf{A})\\ne0$ — a rendszernek egyetlen megoldása van."
      }
    },
    {
      "term": {
        "en": "Operation count $\\sim n^2/2$",
        "hu": "Műveletszám $\\sim n^2/2$"
      },
      "def": {
        "en": "Backward substitution uses $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ multiplications/divisions and $(n-1)n/2$ additions/subtractions — far cheaper than the $\\mathcal{O}(n^3)$ of elimination.",
        "hu": "A visszahelyettesítés $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ szorzást/osztást és $(n-1)n/2$ összeadást/kivonást igényel — sokkal olcsóbb az elimináció $\\mathcal{O}(n^3)$-ánál."
      }
    },
    {
      "term": {
        "en": "Big-O notation $\\mathcal{O}(n^k)$",
        "hu": "Nagy-O jelölés $\\mathcal{O}(n^k)$"
      },
      "def": {
        "en": "Shorthand for a quantity bounded by a degree-$k$ polynomial; it hides lower-order terms so the leading power, which governs the cost for large $n$, stands out.",
        "hu": "Egy legfeljebb $k$-adfokú polinommal korlátozott mennyiség rövidítése; elrejti az alacsonyabb rendű tagokat, így a nagy $n$-re meghatározó vezető hatvány emelkedik ki."
      }
    }
  ],
  's33': [
    {
      "term": {
        "en": "Augmented matrix",
        "hu": "Bővített mátrix"
      },
      "def": {
        "en": "The coefficient matrix with the right-hand side appended as an extra column, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Elimination is carried out as row operations on this $n\\times(n+1)$ array.",
        "hu": "Az együtthatómátrix, amelyhez a jobb oldalt extra oszlopként hozzáfűzzük, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Az eliminációt ezen az $n\\times(n+1)$ tömbön végzett sorműveletekként hajtjuk végre."
      }
    },
    {
      "term": {
        "en": "Forward elimination & multiplier",
        "hu": "Előre elimináció és szorzótényező"
      },
      "def": {
        "en": "Clear entries below pivot $a_{kk}$ using $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ with multiplier $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$, for $k=1,\\dots,n-1$.",
        "hu": "A főelem ($a_{kk}$) alatti elemeket nullázzuk az $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ képlettel, $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$ szorzótényezővel, $k=1,\\dots,n-1$-re."
      }
    },
    {
      "term": {
        "en": "Pivot element",
        "hu": "Főelem (pivot)"
      },
      "def": {
        "en": "The diagonal entry $a_{kk}^{(k-1)}$ used as the divisor in step $k$. Gaussian elimination runs iff every pivot is nonzero; a zero pivot halts it (even when the system is solvable — Example 3.24).",
        "hu": "Az $a_{kk}^{(k-1)}$ főátlóbeli elem, amellyel a $k$. lépésben osztunk. A Gauss-elimináció pontosan akkor megy végig, ha minden főelem nemnulla; a nulla főelem megállítja (akkor is, ha a rendszer megoldható — 3.24. példa)."
      }
    },
    {
      "term": {
        "en": "Why pivot: rounding (Example 3.25)",
        "hu": "Miért főelemkiválasztás: kerekítés (3.25. példa)"
      },
      "def": {
        "en": "Dividing by a tiny pivot magnifies rounding: $0.0002x_1-30.5x_2=-60.99$ in 4-digit arithmetic gives $x_1$ with 300% error, but swapping rows first (so the divisor is 5.06) gives the exact answer.",
        "hu": "A pici főelemmel való osztás felnagyítja a kerekítést: $0.0002x_1-30.5x_2=-60.99$ 4-jegyű aritmetikában 300%-os hibájú $x_1$-et ad, de a sorok előzetes cseréjével (így az osztó 5.06) a pontos eredményt kapjuk."
      }
    },
    {
      "term": {
        "en": "Partial pivoting (Thm 3.26)",
        "hu": "Részleges főelemkiválasztás (3.26. tétel)"
      },
      "def": {
        "en": "Before step $k$, swap in the row with the largest $|a_{ik}|$ in the column ($i\\ge k$). It is solvable by partial pivoting iff $\\det\\mathbf{A}\\ne0$ — and it both avoids zero pivots and curbs rounding.",
        "hu": "A $k$. lépés előtt cseréljük be azt a sort, amelyben az oszlopban a legnagyobb $|a_{ik}|$ van ($i\\ge k$). Pontosan akkor oldható meg részleges főelemkiválasztással, ha $\\det\\mathbf{A}\\ne0$ — és kerüli a nulla főelemet és csökkenti a kerekítést."
      }
    },
    {
      "term": {
        "en": "Complete pivoting",
        "hu": "Teljes főelemkiválasztás"
      },
      "def": {
        "en": "Search the whole remaining submatrix for the largest $|a_{ij}|$ and swap both rows and columns (tracking the variable order, since column swaps reorder unknowns). Most robust, but more comparisons.",
        "hu": "A teljes maradék részmátrixban keressük a legnagyobb $|a_{ij}|$-t, és sort és oszlopot is cserélünk (követve a változók sorrendjét, mert az oszlopcsere átrendezi az ismeretleneket). A legrobusztusabb, de több összehasonlítás."
      }
    },
    {
      "term": {
        "en": "Scaled (implicit) pivoting (Alg. 3.31)",
        "hu": "Skálázott (implicit) főelemkiválasztás (3.31)"
      },
      "def": {
        "en": "Pick the pivot by the ratio $|a_{ik}|/s_i$, where $s_i=\\max_j|a_{ij}|$ is the row scale, without actually scaling the rows. Handles matrices whose entries span very different magnitudes.",
        "hu": "A főelemet az $|a_{ik}|/s_i$ arány alapján választjuk, ahol $s_i=\\max_j|a_{ij}|$ a sor skálája, anélkül hogy a sorokat ténylegesen skáláznánk. Kezeli a nagyon eltérő nagyságrendű elemeket tartalmazó mátrixokat."
      }
    },
    {
      "term": {
        "en": "Cost $\\sim n^3/3$",
        "hu": "Költség $\\sim n^3/3$"
      },
      "def": {
        "en": "The elimination uses $n^3/3+\\mathcal{O}(n^2)$ multiplications/divisions (and similarly additions); back-substitution adds only $\\mathcal{O}(n^2)$. So the time complexity of Gaussian elimination is $n^3/3$.",
        "hu": "Az elimináció $n^3/3+\\mathcal{O}(n^2)$ szorzást/osztást (és hasonlóan összeadást) igényel; a visszahelyettesítés csak $\\mathcal{O}(n^2)$-et ad hozzá. Tehát a Gauss-elimináció időigénye $n^3/3$."
      }
    },
    {
      "term": {
        "en": "PA = (triangular) factorization (Thm 3.28)",
        "hu": "PA permutáció (3.28. tétel)"
      },
      "def": {
        "en": "If $\\det\\mathbf{A}\\ne0$ there is a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ can be solved by plain Gaussian elimination — pre-applying all the partial-pivoting row swaps.",
        "hu": "Ha $\\det\\mathbf{A}\\ne0$, van olyan $\\mathbf{P}$ permutációs mátrix, hogy a $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ sima Gauss-eliminációval megoldható — az összes részleges-pivot sorcserét előre alkalmazva."
      }
    },
    {
      "term": {
        "en": "When pivoting is unnecessary (Thm 3.32/3.33)",
        "hu": "Mikor felesleges a pivotálás (3.32/3.33)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is diagonally dominant, or symmetric positive definite, Gaussian elimination runs without pivoting and is stable (and for SPD all pivots are positive).",
        "hu": "Ha $\\mathbf{A}$ diagonálisan domináns, vagy szimmetrikus pozitív definit, a Gauss-elimináció pivotálás nélkül lefut és stabil (SPD esetén minden főelem pozitív)."
      }
    }
  ],
  's34': [
    {
      "term": {
        "en": "Gauss–Jordan elimination",
        "hu": "Gauss–Jordan-elimináció"
      },
      "def": {
        "en": "A variant of Gaussian elimination that reduces the coefficient block of $(\\mathbf{A}\\,|\\,\\mathbf{b})$ all the way to the identity, giving $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$, so the solution $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ is read directly from the last column.",
        "hu": "A Gauss-elimináció változata, amely a $(\\mathbf{A}\\,|\\,\\mathbf{b})$ együtthatóblokkját egészen az egységmátrixig redukálja, $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$-t adva, így a megoldás $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ közvetlenül leolvasható az utolsó oszlopból."
      }
    },
    {
      "term": {
        "en": "Eliminate above and below",
        "hu": "Elimináció felül és alul"
      },
      "def": {
        "en": "Unlike plain Gaussian elimination (which clears only below each pivot), Gauss–Jordan clears the entries in every other row — both above and below the pivot — so no back-substitution is needed.",
        "hu": "A sima Gauss-eliminációval ellentétben (amely csak a főelem alatt nulláz) a Gauss–Jordan minden más sorban — a főelem felett és alatt is — nulláz, így nincs szükség visszahelyettesítésre."
      }
    },
    {
      "term": {
        "en": "Reduced form $(\\mathbf{I}\\,|\\,\\mathbf{x})$",
        "hu": "Redukált alak $(\\mathbf{I}\\,|\\,\\mathbf{x})$"
      },
      "def": {
        "en": "The final tableau: each pivot row is normalized so the coefficient block is the identity. The right-hand column is then exactly the solution vector — no further work.",
        "hu": "A végső tábla: minden főelem-sort normálunk, így az együtthatóblokk az egységmátrix. A jobb oldali oszlop ekkor pontosan a megoldásvektor — további munka nélkül."
      }
    },
    {
      "term": {
        "en": "Cost $\\sim n^3/2$ vs $n^3/3$",
        "hu": "Költség $\\sim n^3/2$ vs $n^3/3$"
      },
      "def": {
        "en": "Gauss–Jordan needs $n^3/2+\\mathcal{O}(n^2)$ operations — about 50% more than Gaussian elimination's $n^3/3$. So for solving a single system Gaussian elimination is preferred; Gauss–Jordan shines for matrix inversion and simultaneous right-hand sides.",
        "hu": "A Gauss–Jordan $n^3/2+\\mathcal{O}(n^2)$ műveletet igényel — kb. 50%-kal többet a Gauss-elimináció $n^3/3$-ánál. Egyetlen rendszer megoldására a Gauss-elimináció jobb; a Gauss–Jordan a mátrixinvertálásnál és több jobb oldalnál előnyös."
      }
    },
    {
      "term": {
        "en": "Pivoting with Gauss–Jordan (Ex 3.36)",
        "hu": "Pivotálás Gauss–Jordannál (3.36. példa)"
      },
      "def": {
        "en": "Partial, complete or scaled pivoting combines with Gauss–Jordan exactly as with Gaussian elimination — choose the pivot, swap, then clear the whole column above and below.",
        "hu": "A részleges, teljes vagy skálázott pivotálás ugyanúgy kombinálható a Gauss–Jordannal, mint a Gauss-eliminációval — válaszd a főelemet, cserélj, majd nullázd az egész oszlopot felül és alul."
      }
    }
  ],
  's35': [
    {
      "term": {
        "en": "Tridiagonal matrix",
        "hu": "Tridiagonális mátrix"
      },
      "def": {
        "en": "A square matrix with $a_{ij}=0$ whenever $|i-j|>1$ — nonzeros only on the main diagonal and the two adjacent diagonals. Arises constantly in splines, BVPs and PDE discretizations.",
        "hu": "Olyan négyzetes mátrix, ahol $a_{ij}=0$, ha $|i-j|>1$ — nemnulla csak a főátlón és a két szomszédos átlón. Folyamatosan előjön spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál."
      }
    },
    {
      "term": {
        "en": "Three-vector storage ($3n-2$)",
        "hu": "Háromvektoros tárolás ($3n-2$)"
      },
      "def": {
        "en": "Store only the sub-diagonal $(a_i)$, diagonal $(d_i)$ and super-diagonal $(c_i)$ — just $3n-2$ numbers instead of $n^2$. The structure is preserved throughout the solve.",
        "hu": "Csak az aldiagonálist $(a_i)$, a főátlót $(d_i)$ és a felső átlót $(c_i)$ tároljuk — $3n-2$ szám az $n^2$ helyett. A szerkezet a megoldás során végig megmarad."
      }
    },
    {
      "term": {
        "en": "Thomas algorithm (Alg. 3.37)",
        "hu": "Thomas-algoritmus (3.37. algoritmus)"
      },
      "def": {
        "en": "Specialized Gaussian elimination for tridiagonal systems. Forward sweep: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Then back-substitute $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. The $c_i$ never change; the $a_i$ become 0.",
        "hu": "Tridiagonális rendszerekre szabott Gauss-elimináció. Előre menet: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Majd visszahelyettesítés $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. A $c_i$-k nem változnak; az $a_i$-k 0-vá válnak."
      }
    },
    {
      "term": {
        "en": "Cost $5n-4$ (linear)",
        "hu": "Költség $5n-4$ (lineáris)"
      },
      "def": {
        "en": "The Thomas algorithm needs only $5n-4$ multiplications/divisions — $\\mathcal{O}(n)$, versus $n^3/3$ for dense Gaussian elimination. For tridiagonal systems always use the specialized method.",
        "hu": "A Thomas-algoritmus csak $5n-4$ szorzást/osztást igényel — $\\mathcal{O}(n)$, szemben a sűrű Gauss-elimináció $n^3/3$-ával. Tridiagonális rendszerre mindig a szabott módszert használd."
      }
    },
    {
      "term": {
        "en": "No pivoting when diagonally dominant",
        "hu": "Nincs pivot, ha diagonálisan domináns"
      },
      "def": {
        "en": "By Theorem 3.32, if the tridiagonal matrix is diagonally dominant the algorithm runs without pivoting and is stable — the common case in practice.",
        "hu": "A 3.32. tétel szerint, ha a tridiagonális mátrix diagonálisan domináns, az algoritmus pivotálás nélkül lefut és stabil — ez a gyakorlatban a tipikus eset."
      }
    },
    {
      "term": {
        "en": "Band matrix",
        "hu": "Sávmátrix"
      },
      "def": {
        "en": "A generalization with $a_{ij}=0$ for $|i-j|>p$ (bandwidth $p$); tridiagonal is $p=1$. The same banded elimination idea gives an $\\mathcal{O}(p^2 n)$ solver.",
        "hu": "Általánosítás $a_{ij}=0$-val, ha $|i-j|>p$ (sávszélesség $p$); a tridiagonális a $p=1$ eset. Ugyanaz a sávos elimináció $\\mathcal{O}(p^2 n)$ megoldót ad."
      }
    }
  ],
  's36': [
    {
      "term": {
        "en": "Simultaneous linear systems",
        "hu": "Szimultán egyenletrendszerek"
      },
      "def": {
        "en": "Several systems $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$, sharing the same coefficient matrix $\\mathbf{A}$ but with different right-hand sides.",
        "hu": "Több $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$ rendszer, azonos $\\mathbf{A}$ együtthatómátrixszal, de különböző jobb oldalakkal."
      }
    },
    {
      "term": {
        "en": "Matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$",
        "hu": "Mátrixegyenlet $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$"
      },
      "def": {
        "en": "Stack the right-hand sides as columns of $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$; the solutions are the columns of $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$. The $m$ systems are equivalent to the single matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$.",
        "hu": "Rakd a jobb oldalakat a $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$ oszlopaiba; a megoldások az $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$ oszlopai. Az $m$ rendszer ekvivalens az egyetlen $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$ mátrixegyenlettel."
      }
    },
    {
      "term": {
        "en": "Augmented $(\\mathbf{A}\\,|\\,\\mathbf{B})$, size $n\\times(n+m)$",
        "hu": "Bővített $(\\mathbf{A}\\,|\\,\\mathbf{B})$, méret $n\\times(n+m)$"
      },
      "def": {
        "en": "Since pivoting depends only on $\\mathbf{A}$, eliminate on the $n\\times(n+m)$ block $(\\mathbf{A}\\,|\\,\\mathbf{B})$ at once. Gauss–Jordan turns it into $(\\mathbf{I}\\,|\\,\\mathbf{X})$, and the solutions appear in the last $m$ columns.",
        "hu": "Mivel a pivotálás csak $\\mathbf{A}$-tól függ, az $n\\times(n+m)$ méretű $(\\mathbf{A}\\,|\\,\\mathbf{B})$ blokkon egyszerre eliminálunk. A Gauss–Jordan ezt $(\\mathbf{I}\\,|\\,\\mathbf{X})$-re hozza, és a megoldások az utolsó $m$ oszlopban jelennek meg."
      }
    },
    {
      "term": {
        "en": "Shared factorization cost",
        "hu": "Megosztott faktorizációs költség"
      },
      "def": {
        "en": "Solving all $m$ systems together costs $n^3/3+mn^2$ (Gaussian) or $n^3/2+mn^2$ (Gauss–Jordan) mult/div: the expensive $\\mathcal{O}(n^3)$ elimination is done once and each extra right-hand side adds only $\\mathcal{O}(n^2)$.",
        "hu": "Mind az $m$ rendszer együttes megoldása $n^3/3+mn^2$ (Gauss) vagy $n^3/2+mn^2$ (Gauss–Jordan) szorzás/osztás: a drága $\\mathcal{O}(n^3)$ eliminációt egyszer végezzük, és minden további jobb oldal csak $\\mathcal{O}(n^2)$-et ad."
      }
    },
    {
      "term": {
        "en": "Inversion as $\\mathbf{B}=\\mathbf{I}$",
        "hu": "Invertálás $\\mathbf{B}=\\mathbf{I}$ esetén"
      },
      "def": {
        "en": "Matrix inversion is the special simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$: solving $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ gives the inverse (next section).",
        "hu": "A mátrixinvertálás az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ speciális szimultán rendszer: az $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ megoldása adja az inverzet (következő szakasz)."
      }
    }
  ],
  's37': [
    {
      "term": {
        "en": "Inverse via $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$",
        "hu": "Inverz $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ révén"
      },
      "def": {
        "en": "$\\mathbf{A}^{-1}$ is the solution of the simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$. If such $\\mathbf{X}$ exists then $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ also holds, so $\\mathbf{X}=\\mathbf{A}^{-1}$.",
        "hu": "$\\mathbf{A}^{-1}$ az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ szimultán rendszer megoldása. Ha létezik ilyen $\\mathbf{X}$, akkor $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ is teljesül, tehát $\\mathbf{X}=\\mathbf{A}^{-1}$."
      }
    },
    {
      "term": {
        "en": "$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$",
        "hu": "$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$"
      },
      "def": {
        "en": "Run Gauss–Jordan on the augmented $(\\mathbf{A}\\,|\\,\\mathbf{I})$; when the left block becomes the identity, the right block is $\\mathbf{A}^{-1}$. Pivoting can be combined in to control rounding.",
        "hu": "Futtasd a Gauss–Jordant a bővített $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n; amikor a bal blokk egységmátrix lesz, a jobb blokk $\\mathbf{A}^{-1}$. A pivotálás beépíthető a kerekítés kezelésére."
      }
    },
    {
      "term": {
        "en": "Inversion cost ($3n^3/2$, or $n^3$ optimized)",
        "hu": "Invertálás költsége ($3n^3/2$, vagy $n^3$ optimalizálva)"
      },
      "def": {
        "en": "Naive Gauss–Jordan on $(\\mathbf{A}\\,|\\,\\mathbf{I})$ costs $\\tfrac32 n^3+\\mathcal{O}(n^2)$ mult/div. Exploiting the zeros and ones of $\\mathbf{I}$ (skipping multiplications by 0) reduces it to $n^3$.",
        "hu": "A naiv Gauss–Jordan az $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n $\\tfrac32 n^3+\\mathcal{O}(n^2)$ szorzás/osztás. Az $\\mathbf{I}$ nulláit és egyeseit kihasználva (a 0-val szorzást kihagyva) $n^3$-ra csökken."
      }
    },
    {
      "term": {
        "en": "Determinant from pivots",
        "hu": "Determináns a főelemekből"
      },
      "def": {
        "en": "After Gaussian elimination, $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, the product of the pivots times $(-1)^s$ where $s$ is the number of row swaps. Essentially free once elimination is done.",
        "hu": "A Gauss-elimináció után $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, a főelemek szorzata $(-1)^s$-szel, ahol $s$ a sorcserék száma. Az elimináció után gyakorlatilag ingyen van."
      }
    },
    {
      "term": {
        "en": "Solvability ⇔ $\\det\\ne0$",
        "hu": "Megoldhatóság ⇔ $\\det\\ne0$"
      },
      "def": {
        "en": "By Theorem 3.26, elimination with pivoting completes iff $\\det(\\mathbf{A})\\ne0$ — exactly when $\\mathbf{A}$ is invertible. A zero pivot product signals a singular matrix.",
        "hu": "A 3.26. tétel szerint a pivotálásos elimináció pontosan akkor megy végig, ha $\\det(\\mathbf{A})\\ne0$ — éppen amikor $\\mathbf{A}$ invertálható. A nulla főelem-szorzat szinguláris mátrixot jelez."
      }
    }
  ],
}

export const FLASHCARDS: Record<string, Flashcard[]> = {
  's31': [
    {"q":{"en":"What notation represents the set of all real $n \\times n$ dimensional matrices?","hu":"Milyen jelölés képviseli az összes valós $n \\times n$ dimenziós mátrix halmazát?"},"a":{"en":"$\\mathbb{R}^{n \\times n}$","hu":"$\\mathbb{R}^{n \\times n}$"}},
    {"q":{"en":"What notation represents the set of all $n \\times n$ matrices with complex entries?","hu":"Milyen jelölés képviseli az összes komplex elemű $n \\times n$ mátrix halmazát?"},"a":{"en":"$\\mathbb{C}^{n \\times n}$","hu":"$\\mathbb{C}^{n \\times n}$"}},
    {"q":{"en":"In linear algebra notation, how is the $n \\times n$ dimensional identity matrix denoted?","hu":"A lineáris algebra jelölésében hogyan jelöljük az $n \\times n$ dimenziós egységmátrixot?"},"a":{"en":"$\\mathbf{I}$","hu":"$\\mathbf{I}$"}},
    {"q":{"en":"What is the condition for a square matrix $\\mathbf{A}$ to be called 'invertible' or 'nonsingular'?","hu":"Mi a feltétele annak, hogy egy $\\mathbf{A}$ négyzetes mátrixot „invertálhatónak” vagy „regulárisnak” nevezzünk?"},"a":{"en":"Its inverse $\\mathbf{A}^{-1}$ exists such that $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$.","hu":"Létezik $\\mathbf{A}^{-1}$ inverze, amelyre $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$."}},
    {"q":{"en":"A square matrix is defined as _____ if it has no inverse.","hu":"Egy négyzetes mátrix _____, ha nincs inverze."},"a":{"en":"singular","hu":"szinguláris"}},
    {"q":{"en":"What is the value of $\\det(\\mathbf{A})$ if each element of a single row or column in $\\mathbf{A}$ is equal to 0?","hu":"Mennyi $\\det(\\mathbf{A})$ értéke, ha $\\mathbf{A}$ egy teljes sorának vagy oszlopának minden eleme 0?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"What is the value of $\\det(\\mathbf{A})$ if two rows or two columns of $\\mathbf{A}$ are identical?","hu":"Mennyi $\\det(\\mathbf{A})$ értéke, ha $\\mathbf{A}$ két sora vagy két oszlopa azonos?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"According to the properties of determinants, what does $\\det(\\mathbf{A}\\mathbf{B})$ equal?","hu":"A determinánsok tulajdonságai szerint mivel egyenlő $\\det(\\mathbf{A}\\mathbf{B})$?"},"a":{"en":"$\\det(\\mathbf{A})\\det(\\mathbf{B})$","hu":"$\\det(\\mathbf{A})\\det(\\mathbf{B})$"}},
    {"q":{"en":"How does the determinant of a matrix $\\mathbf{A}$ compare to the determinant of its transpose $\\mathbf{A}^T$?","hu":"Hogyan viszonyul egy $\\mathbf{A}$ mátrix determinánsa a transzponáltja $\\mathbf{A}^T$ determinánsához?"},"a":{"en":"They are equal: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$.","hu":"Egyenlők: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$."}},
    {"q":{"en":"If $\\mathbf{A}$ is an invertible matrix, what is the formula for $\\det(\\mathbf{A}^{-1})$?","hu":"Ha $\\mathbf{A}$ invertálható mátrix, mi a $\\det(\\mathbf{A}^{-1})$ képlete?"},"a":{"en":"$1/\\det(\\mathbf{A})$","hu":"$1/\\det(\\mathbf{A})$"}},
    {"q":{"en":"If matrix $\\mathbf{B}$ is obtained by multiplying one row of matrix $\\mathbf{A}$ by a constant $c$, how is $\\det(\\mathbf{B})$ related to $\\det(\\mathbf{A})$?","hu":"Ha a $\\mathbf{B}$ mátrixot úgy kapjuk, hogy $\\mathbf{A}$ egy sorát egy $c$ konstanssal szorozzuk, hogyan viszonyul $\\det(\\mathbf{B})$ a $\\det(\\mathbf{A})$-hoz?"},"a":{"en":"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$","hu":"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$"}},
    {"q":{"en":"What happens to the determinant of a matrix if two of its rows or columns are swapped?","hu":"Mi történik egy mátrix determinánsával, ha két sorát vagy oszlopát felcseréljük?"},"a":{"en":"The sign of the determinant changes: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$.","hu":"A determináns előjele megváltozik: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$."}},
    {"q":{"en":"How is the determinant affected if a constant multiple of one row is added to another row?","hu":"Hogyan változik a determináns, ha egy sor konstansszorosát egy másik sorhoz adjuk?"},"a":{"en":"The determinant remains unchanged: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$.","hu":"A determináns változatlan marad: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$."}},
    {"q":{"en":"Formula: Determinant expansion by the $i$-th row.","hu":"Képlet: Determináns kifejtése az $i$-edik sor szerint."},"a":{"en":"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$","hu":"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$"}},
    {"q":{"en":"In the context of determinant expansion, what does $\\mathbf{A}_{ij}$ represent?","hu":"A determináns kifejtésének kontextusában mit jelöl $\\mathbf{A}_{ij}$?"},"a":{"en":"The $(n-1) \\times (n-1)$ matrix obtained by omitting the $i$-th row and $j$-th column of $\\mathbf{A}$.","hu":"Azt az $(n-1) \\times (n-1)$ mátrixot, amelyet $\\mathbf{A}$ $i$-edik sorának és $j$-edik oszlopának elhagyásával kapunk."}},
    {"q":{"en":"Besides having a non-zero determinant, what is an equivalent condition for a matrix $\\mathbf{A}$ to have a unique solution for $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for any $\\mathbf{b}$?","hu":"A nem nulla determinánson kívül mi az ekvivalens feltétele annak, hogy egy $\\mathbf{A}$ mátrixra az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ bármely $\\mathbf{b}$-re egyértelműen megoldható legyen?"},"a":{"en":"The matrix $\\mathbf{A}$ must be invertible.","hu":"Az $\\mathbf{A}$ mátrixnak invertálhatónak kell lennie."}},
    {"q":{"en":"Under what condition regarding the determinant does the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ have a nontrivial (nonzero) solution?","hu":"A determinánssal kapcsolatban milyen feltétel mellett van az $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ lineáris rendszernek nemtriviális (nem nulla) megoldása?"},"a":{"en":"$\\det(\\mathbf{A}) = 0$","hu":"$\\det(\\mathbf{A}) = 0$"}},
    {"q":{"en":"If matrices $\\mathbf{A}$ and $\\mathbf{B}$ are both invertible, what is the formula for $(\\mathbf{A}\\mathbf{B})^{-1}$?","hu":"Ha az $\\mathbf{A}$ és $\\mathbf{B}$ mátrixok is invertálhatók, mi a $(\\mathbf{A}\\mathbf{B})^{-1}$ képlete?"},"a":{"en":"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$","hu":"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$"}},
    {"q":{"en":"A square matrix is called _____ if $a_{ij} = 0$ for all $i > j$.","hu":"Egy négyzetes mátrixot _____-nak nevezünk, ha $a_{ij} = 0$ minden $i > j$-re."},"a":{"en":"upper triangular","hu":"felső háromszögmátrixnak"}},
    {"q":{"en":"A square matrix is called _____ if $a_{ij} = 0$ for all $i < j$.","hu":"Egy négyzetes mátrixot _____-nak nevezünk, ha $a_{ij} = 0$ minden $i < j$-re."},"a":{"en":"lower triangular","hu":"alsó háromszögmátrixnak"}},
    {"q":{"en":"What is the determinant of a triangular matrix $\\mathbf{A}$?","hu":"Mi egy $\\mathbf{A}$ háromszögmátrix determinánsa?"},"a":{"en":"The product of its diagonal elements: $a_{11}a_{22}\\cdots a_{nn}$.","hu":"Az átlós elemeinek szorzata: $a_{11}a_{22}\\cdots a_{nn}$."}},
    {"q":{"en":"The product of two lower triangular matrices results in a _____ matrix.","hu":"Két alsó háromszögmátrix szorzata _____ mátrixot eredményez."},"a":{"en":"lower triangular","hu":"alsó háromszög"}},
    {"q":{"en":"The inverse of an invertible upper triangular matrix is always _____.","hu":"Egy invertálható felső háromszögmátrix inverze mindig _____."},"a":{"en":"upper triangular","hu":"felső háromszög"}},
    {"q":{"en":"What is a permutation matrix?","hu":"Mi az a permutációs mátrix?"},"a":{"en":"A square matrix obtained from the identity matrix by interchanging its rows or columns.","hu":"Az egységmátrixból a sorainak vagy oszlopainak felcserélésével kapott négyzetes mátrix."}},
    {"q":{"en":"In a permutation matrix, how many '1's are present in each row and column?","hu":"Egy permutációs mátrixban hány „1” van soronként és oszloponként?"},"a":{"en":"Exactly one.","hu":"Pontosan egy."}},
    {"q":{"en":"Multiplying a matrix $\\mathbf{A}$ on the left by a permutation matrix $\\mathbf{P}$ results in what transformation of $\\mathbf{A}$?","hu":"Egy $\\mathbf{A}$ mátrix balról egy $\\mathbf{P}$ permutációs mátrixszal való szorzása $\\mathbf{A}$ milyen transzformációját eredményezi?"},"a":{"en":"Interchanging the rows of $\\mathbf{A}$.","hu":"$\\mathbf{A}$ sorainak felcserélését."}},
    {"q":{"en":"What is the condition for a matrix $\\mathbf{A}$ to be 'row diagonally dominant'?","hu":"Mi a feltétele annak, hogy egy $\\mathbf{A}$ mátrix „soronként diagonálisan domináns” legyen?"},"a":{"en":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i = 1, \\ldots, n$.","hu":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ minden $i = 1, \\ldots, n$-re."}},
    {"q":{"en":"If a matrix $\\mathbf{A}$ is column diagonally dominant, what property does its transpose $\\mathbf{A}^T$ possess?","hu":"Ha egy $\\mathbf{A}$ mátrix oszloponként diagonálisan domináns, milyen tulajdonsággal rendelkezik a transzponáltja $\\mathbf{A}^T$?"},"a":{"en":"It is row diagonally dominant.","hu":"Soronként diagonálisan domináns."}},
    {"q":{"en":"According to Theorem 3.8, what property is guaranteed for a matrix that is diagonally dominant?","hu":"A 3.8. tétel szerint milyen tulajdonság garantált egy diagonálisan domináns mátrixra?"},"a":{"en":"It is invertible.","hu":"Invertálható."}},
    {"q":{"en":"What are the two requirements for a square matrix $\\mathbf{A}$ to be 'positive definite'?","hu":"Mi a két követelmény ahhoz, hogy egy $\\mathbf{A}$ négyzetes mátrix „pozitív definit” legyen?"},"a":{"en":"It must be symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\ne \\mathbf{0}$.","hu":"Szimmetrikusnak kell lennie, és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ minden $\\mathbf{x} \\ne \\mathbf{0}$-ra."}},
    {"q":{"en":"If a square matrix $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ for all $\\mathbf{x}$, it is called _____.","hu":"Ha egy $\\mathbf{A}$ négyzetes mátrix szimmetrikus és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ minden $\\mathbf{x}$-re, akkor _____-nak nevezzük."},"a":{"en":"positive semi-definite","hu":"pozitív szemidefinitnek"}},
    {"q":{"en":"According to Theorem 3.9, if a matrix is positive definite, what can be said about its diagonal elements $a_{ii}$?","hu":"A 3.9. tétel szerint, ha egy mátrix pozitív definit, mit mondhatunk az $a_{ii}$ átlós elemeiről?"},"a":{"en":"They are all strictly positive ($a_{ii} > 0$).","hu":"Mind szigorúan pozitívak ($a_{ii} > 0$)."}},
    {"q":{"en":"Theorem 3.10 states that a symmetric matrix is positive definite if and only if all of its _____ are positive.","hu":"A 3.10. tétel kimondja, hogy egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha minden _____ pozitív."},"a":{"en":"principal minors (upper left minors)","hu":"sarokminorja (bal felső minorja)"}},
    {"q":{"en":"What defines an 'orthogonal' matrix $\\mathbf{A}$?","hu":"Mi határoz meg egy $\\mathbf{A}$ „ortogonális” mátrixot?"},"a":{"en":"$\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1} = \\mathbf{A}^T$.","hu":"$\\mathbf{A}$ invertálható és $\\mathbf{A}^{-1} = \\mathbf{A}^T$."}},
    {"q":{"en":"If $\\mathbf{A}$ and $\\mathbf{B}$ are orthogonal matrices, what is the nature of their product $\\mathbf{A}\\mathbf{B}$?","hu":"Ha $\\mathbf{A}$ és $\\mathbf{B}$ ortogonális mátrixok, milyen a $\\mathbf{A}\\mathbf{B}$ szorzatuk?"},"a":{"en":"The product is also orthogonal.","hu":"A szorzat is ortogonális."}},
    {"q":{"en":"What is an eigenvalue $\\lambda$ of a square matrix $\\mathbf{A}$?","hu":"Mi egy $\\mathbf{A}$ négyzetes mátrix $\\lambda$ sajátértéke?"},"a":{"en":"A complex number such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$.","hu":"Olyan komplex szám, amelyre $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$-nek van nemtriviális megoldása $\\mathbf{x} \\ne \\mathbf{0}$."}},
    {"q":{"en":"The algebraic equation $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ used to find eigenvalues is known as the _____.","hu":"A sajátértékek megtalálására használt $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ algebrai egyenlet neve a _____."},"a":{"en":"characteristic equation","hu":"karakterisztikus egyenlet"}},
    {"q":{"en":"What is the relationship between the determinant of a matrix $\\mathbf{A}$ and its eigenvalues $\\lambda_1, \\ldots, \\lambda_n$?","hu":"Mi a kapcsolat egy $\\mathbf{A}$ mátrix determinánsa és $\\lambda_1, \\ldots, \\lambda_n$ sajátértékei között?"},"a":{"en":"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$","hu":"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$"}},
    {"q":{"en":"Based on eigenvalues, when is a square matrix $\\mathbf{A}$ invertible?","hu":"A sajátértékek alapján mikor invertálható egy $\\mathbf{A}$ négyzetes mátrix?"},"a":{"en":"When all of its eigenvalues are non-zero ($\\lambda_i \\ne 0$ for all $i$).","hu":"Amikor minden sajátértéke nem nulla ($\\lambda_i \\ne 0$ minden $i$-re)."}},
    {"q":{"en":"If $\\lambda$ is an eigenvalue of an invertible matrix $\\mathbf{A}$, what is the corresponding eigenvalue for $\\mathbf{A}^{-1}$?","hu":"Ha $\\lambda$ egy invertálható $\\mathbf{A}$ mátrix sajátértéke, mi a megfelelő sajátérték $\\mathbf{A}^{-1}$-re?"},"a":{"en":"$1/\\lambda$","hu":"$1/\\lambda$"}},
    {"q":{"en":"If $\\lambda$ is an eigenvalue of $\\mathbf{A}$, what is the corresponding eigenvalue for the matrix $\\mathbf{A}^k$?","hu":"Ha $\\lambda$ az $\\mathbf{A}$ sajátértéke, mi a megfelelő sajátérték az $\\mathbf{A}^k$ mátrixra?"},"a":{"en":"$\\lambda^k$","hu":"$\\lambda^k$"}},
    {"q":{"en":"Where are the eigenvalues located for a triangular matrix?","hu":"Hol találhatók a sajátértékek egy háromszögmátrixnál?"},"a":{"en":"On the main diagonal elements ($a_{11}, a_{22}, \\ldots, a_{nn}$).","hu":"A főátló elemein ($a_{11}, a_{22}, \\ldots, a_{nn}$)."}},
    {"q":{"en":"Two square matrices $\\mathbf{A}$ and $\\mathbf{B}$ are 'similar' if there exists an invertible matrix $\\mathbf{P}$ such that _____.","hu":"Két $\\mathbf{A}$ és $\\mathbf{B}$ négyzetes mátrix „hasonló”, ha létezik olyan invertálható $\\mathbf{P}$ mátrix, hogy _____."},"a":{"en":"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$","hu":"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$"}},
    {"q":{"en":"What important property do similar matrices share regarding their eigenvalues?","hu":"Milyen fontos tulajdonságon osztoznak a hasonló mátrixok a sajátértékeik tekintetében?"},"a":{"en":"Their eigenvalues are identical.","hu":"A sajátértékeik azonosak."}},
    {"q":{"en":"Definition: Spectral Radius $\\rho(\\mathbf{A})$.","hu":"Definíció: Spektrálsugár $\\rho(\\mathbf{A})$."},"a":{"en":"The maximum absolute value of the eigenvalues of $\\mathbf{A}$: $\\max\\{|\\lambda| : \\lambda \\text{ is an eigenvalue of } \\mathbf{A}\\}$.","hu":"Az $\\mathbf{A}$ sajátértékeinek maximális abszolút értéke: $\\max\\{|\\lambda| : \\lambda \\text{ az } \\mathbf{A} \\text{ sajátértéke}\\}$."}},
    {"q":{"en":"How is the spectral radius of $\\mathbf{A}^k$ related to the spectral radius of $\\mathbf{A}$?","hu":"Hogyan viszonyul az $\\mathbf{A}^k$ spektrálsugara az $\\mathbf{A}$ spektrálsugarához?"},"a":{"en":"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$","hu":"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$"}},
    {"q":{"en":"According to Theorem 3.16, the spectral radius $\\rho(\\mathbf{A})$ is always less than or equal to any _____.","hu":"A 3.16. tétel szerint a $\\rho(\\mathbf{A})$ spektrálsugár mindig kisebb-egyenlő bármely _____-nál."},"a":{"en":"matrix norm $\\|\\cdot\\|$","hu":"mátrixnormánál $\\|\\cdot\\|$"}},
    {"q":{"en":"Theorem 3.17: For any $\\varepsilon > 0$, there exists a matrix norm $\\|\\cdot\\|$ such that $\\|\\mathbf{A}\\| \\le$ _____.","hu":"3.17. tétel: Bármely $\\varepsilon > 0$-ra létezik olyan $\\|\\cdot\\|$ mátrixnorma, hogy $\\|\\mathbf{A}\\| \\le$ _____."},"a":{"en":"$\\rho(\\mathbf{A}) + \\varepsilon$","hu":"$\\rho(\\mathbf{A}) + \\varepsilon$"}},
    {"q":{"en":"How is the spectral norm $\\|\\mathbf{A}\\|_2$ calculated for a general square matrix?","hu":"Hogyan számoljuk a $\\|\\mathbf{A}\\|_2$ spektrálnormát egy általános négyzetes mátrixra?"},"a":{"en":"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$","hu":"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$"}},
    {"q":{"en":"If a matrix $\\mathbf{A}$ is symmetric, how does its spectral norm $\\|\\mathbf{A}\\|_2$ relate to its spectral radius $\\rho(\\mathbf{A})$?","hu":"Ha egy $\\mathbf{A}$ mátrix szimmetrikus, hogyan viszonyul a $\\|\\mathbf{A}\\|_2$ spektrálnormája a $\\rho(\\mathbf{A})$ spektrálsugarához?"},"a":{"en":"They are equal: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$.","hu":"Egyenlők: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$."}},
    {"q":{"en":"What is the name of the determinant where the rows are powers of $a_i$ (e.g., $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?","hu":"Mi a neve annak a determinánsnak, amelynek sorai $a_i$ hatványai (pl. $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?"},"a":{"en":"Vandermonde determinant","hu":"Vandermonde-determináns"}},
    {"q":{"en":"Under what condition is the Vandermonde determinant non-zero?","hu":"Milyen feltétel mellett nem nulla a Vandermonde-determináns?"},"a":{"en":"The numbers $a_1, \\ldots, a_n$ must be pairwise distinct.","hu":"Az $a_1, \\ldots, a_n$ számoknak páronként különbözőknek kell lenniük."}},
    {"q":{"en":"What is the formula for the value of the Vandermonde determinant given numbers $a_1, \\ldots, a_n$?","hu":"Mi a Vandermonde-determináns értékének képlete adott $a_1, \\ldots, a_n$ számokra?"},"a":{"en":"$\\prod_{i>j}(a_i - a_j)$","hu":"$\\prod_{i>j}(a_i - a_j)$"}},
    {"q":{"en":"If $\\mathbf{A}$ and $\\mathbf{B}$ are positive definite matrices, is their sum $\\mathbf{A} + \\mathbf{B}$ also positive definite?","hu":"Ha $\\mathbf{A}$ és $\\mathbf{B}$ pozitív definit mátrixok, az $\\mathbf{A} + \\mathbf{B}$ összegük is pozitív definit?"},"a":{"en":"Yes.","hu":"Igen."}},
    {"q":{"en":"Is the square of a positive definite matrix ($\\mathbf{A}^2$) also positive definite?","hu":"Egy pozitív definit mátrix négyzete ($\\mathbf{A}^2$) is pozitív definit?"},"a":{"en":"Yes.","hu":"Igen."}},
    {"q":{"en":"Is the transpose of a positive definite matrix ($\\mathbf{A}^T$) also positive definite?","hu":"Egy pozitív definit mátrix transzponáltja ($\\mathbf{A}^T$) is pozitív definit?"},"a":{"en":"Yes.","hu":"Igen."}},
    {"q":{"en":"Define 'column diagonally dominant' in terms of the matrix's entries.","hu":"Definiáld az „oszloponként diagonálisan domináns” fogalmát a mátrix elemeivel."},"a":{"en":"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ for all $j = 1, \\ldots, n$.","hu":"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ minden $j = 1, \\ldots, n$-re."}}
  ],
  's32': [
    {"q":{"en":"What is an $n$-dimensional upper triangular linear system?","hu":"Mi az a $n$-dimenziós felső háromszög alakú lineáris rendszer?"},"a":{"en":"A system where all coefficients $a_{ij} = 0$ for $i > j$.","hu":"Egy rendszer, ahol minden együttható $a_{ij} = 0$ $i > j$-hez."}},
    {"q":{"en":"In an upper triangular system $Ax = b$, what is the equation for the $n$-th variable?","hu":"A $Ax = b$ felső háromszögrendszerben mi a $n$-edik változó egyenlete?"},"a":{"en":"$a_{nn}x_n = b_n$","hu":"$a_{nn}x_n = b_n$"}},
    {"q":{"en":"What is the specific name of the method used to solve upper triangular systems?","hu":"Mi a konkrét neve a felső háromszögrendszerek megoldására használt módszernek?"},"a":{"en":"Backward substitution.","hu":"Visszafelé csere."}},
    {"q":{"en":"The Hungarian term for the backward substitution method is _____.","hu":"A visszafelé szubsztitúciós módszer magyar kifejezése _____."},"a":{"en":"Visszahelyettesítés módszere.","hu":"Visszahelyettesítés módszere."}},
    {"q":{"en":"Which variable is solved first in the backward substitution algorithm?","hu":"Melyik változót oldjuk meg először a visszafelé helyettesítő algoritmusban?"},"a":{"en":"$x_n$","hu":"$x_n$"}},
    {"q":{"en":"Which variable is solved last in the backward substitution algorithm?","hu":"Melyik változót oldják meg utoljára a visszafelé helyettesítési algoritmusban?"},"a":{"en":"$x_1$","hu":"$x_1$"}},
    {"q":{"en":"Algorithm: What is the assignment for $x_n$ at the start of backward substitution?","hu":"Algoritmus: Mi a $x_n$ hozzárendelése a visszafelé történő helyettesítés kezdetén?"},"a":{"en":"$x_n \\leftarrow b_n / a_{nn}$","hu":"$x_n \\leftarrow b_n / a_{nn}$"}},
    {"q":{"en":"In the backward substitution algorithm, what range of values does the index $i$ take after solving for $x_n$?","hu":"A visszafelé helyettesítő algoritmusban milyen értéktartományt vesz fel a $i$ index a $x_n$ megoldása után?"},"a":{"en":"$n-1, \\dots, 1$","hu":"$n-1, \\dots, 1$"}},
    {"q":{"en":"What is the general formula for calculating $x_i$ in backward substitution?","hu":"Mi az általános képlet a $x_i$ kiszámításához visszafelé történő helyettesítés esetén?"},"a":{"en":"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$","hu":"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$"}},
    {"q":{"en":"In the formula for $x_i$, what is the lower limit of the summation index $j$?","hu":"A $x_i$ képletében mi a $j$ összegzési index alsó határa?"},"a":{"en":"$i+1$","hu":"$i+1$"}},
    {"q":{"en":"In the formula for $x_i$, what is the upper limit of the summation index $j$?","hu":"A $x_i$ képletben mi a $j$ összegzési index felső határa?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"Under what condition on the diagonal elements $a_{ii}$ can backward substitution be performed?","hu":"A $a_{ii}$ átlós elemeken milyen feltételek mellett végezhető visszafelé csere?"},"a":{"en":"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$.","hu":"$a_{ii} \\ne 0$ minden $i = 1, \\dots, n$-hez."}},
    {"q":{"en":"How is the determinant of a triangular matrix $A$ calculated?","hu":"Hogyan számítják ki a $A$ háromszögmátrix determinánsát?"},"a":{"en":"It is the product of the diagonal elements: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$.","hu":"Ez az átlós elemek szorzata: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$."}},
    {"q":{"en":"Backward substitution works if and only if the system has a unique solution, which implies $\\det(A) \\ne$ _____.","hu":"A visszafelé történő helyettesítés akkor és csak akkor működik, ha a rendszer egyedi megoldással rendelkezik, ami azt jelenti, hogy $\\det(A) \\ne$ _____."},"a":{"en":"$0$","hu":"$0$"}},
    {"q":{"en":"How many multiplications and divisions are required in step 1 of the backward substitution algorithm?","hu":"Hány szorzásra és osztásra van szükség a visszafelé helyettesítési algoritmus 1. lépésében?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"How many additions and subtractions are required in step 1 of the backward substitution algorithm?","hu":"Hány összeadásra és kivonásra van szükség a visszafelé helyettesítési algoritmus 1. lépésében?"},"a":{"en":"$0$","hu":"$0$"}},
    {"q":{"en":"In the $n$-th step of the algorithm, how many multiplications and divisions are performed?","hu":"Az algoritmus $n$-edik lépésében hány szorzást és osztást hajtunk végre?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"In the $n$-th step of the algorithm, how many additions and subtractions are performed?","hu":"Az algoritmus $n$-edik lépésében hány összeadás és kivonás történik?"},"a":{"en":"$n-1$","hu":"$n-1$"}},
    {"q":{"en":"What is the total number of multiplications and divisions required for backward substitution?","hu":"Összesen hány szorzás és osztás szükséges a visszafelé helyettesítéshez?"},"a":{"en":"$n(n+1)/2$","hu":"$n(n+1)/2$"}},
    {"q":{"en":"What is the total number of additions and subtractions required for backward substitution?","hu":"Mennyi összeadások és kivonások szükségesek a visszafelé történő helyettesítéshez?"},"a":{"en":"$n(n-1)/2$","hu":"$n(n-1)/2$"}},
    {"q":{"en":"In terms of Big O notation, what is the complexity of multiplications and divisions for backward substitution?","hu":"A Big O jelölés szempontjából milyen bonyolult a visszafelé történő helyettesítés szorzása és osztása?"},"a":{"en":"$n^2/2 + \\mathcal{O}(n)$","hu":"$n^2/2 + \\mathcal{O}(n)$"}},
    {"q":{"en":"In terms of Big O notation, what is the complexity of additions and subtractions for backward substitution?","hu":"A Big O jelölés szempontjából milyen bonyolult az összeadás és a kivonás a visszafelé történő helyettesítéshez?"},"a":{"en":"$n^2/2 + \\mathcal{O}(n)$","hu":"$n^2/2 + \\mathcal{O}(n)$"}},
    {"q":{"en":"How does the source material define the notation $\\mathcal{O}(n^k)$?","hu":"Hogyan határozza meg a forrásanyag a $\\mathcal{O}(n^k)$ jelölést?"},"a":{"en":"A polynomial with degree at most $k$.","hu":"Legfeljebb $k$ fokozatú polinom."}},
    {"q":{"en":"Why is the leading term of the time complexity (e.g., $n^2/2$) prioritized over lower-order terms?","hu":"Miért előnyben részesítik az időbonyolultság vezető kifejezését (pl. $n^2/2$) az alacsonyabb rendű kifejezésekkel szemben?"},"a":{"en":"It determines the magnitude of the formula as $n$ becomes large.","hu":"Ez határozza meg a képlet nagyságát, amikor a $n$ nagy lesz."}},
    {"q":{"en":"If $3x_4 = 12$ in a triangular system, what is the value of $x_4$?","hu":"Ha a $3x_4 = 12$ háromszögrendszerben van, mennyi a $x_4$ értéke?"},"a":{"en":"$4$","hu":"$4$"}},
    {"q":{"en":"If $2x_3 - x_4 = -2$ and $x_4 = 4$, what is the resulting value of $x_3$?","hu":"Ha $2x_3 - x_4 = -2$ és $x_4 = 4$, mi a $x_3$ eredő értéke?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"In a linear system $Ax=b$, what does the vector $b$ represent?","hu":"A $Ax=b$ lineáris rendszerben mit ábrázol a $b$ vektor?"},"a":{"en":"The right-hand side constant values.","hu":"A jobb oldali konstans értékek."}},
    {"q":{"en":"A triangular matrix where $a_{ij} = 0$ for $i > j$ is specifically called an _____ triangular matrix.","hu":"Egy háromszögmátrixot, ahol a $a_{ij} = 0$ $i > j$-hez kifejezetten _____ háromszögmátrixnak nevezik."},"a":{"en":"Upper","hu":"Felső"}},
    {"q":{"en":"Concept: Time Complexity","hu":"Koncepció: Idő komplexitás"},"a":{"en":"Definition: The number of arithmetic operations required to perform an algorithm as a function of the input size $n$.","hu":"Definíció: Az algoritmus végrehajtásához szükséges aritmetikai műveletek száma a $n$ bemeneti méret függvényében."}},
    {"q":{"en":"What arithmetic operation is performed at every step $i$ to isolate $x_i$?","hu":"Milyen aritmetikai műveleteket hajtanak végre a $i$ minden lépésében a $x_i$ izolálásához?"},"a":{"en":"Division by $a_{ii}$.","hu":"Felosztás a $a_{ii}$ szerint."}},
    {"q":{"en":"Term: Leading Term","hu":"Fogalom: Vezető kifejezés"},"a":{"en":"Definition: The term in a polynomial with the highest power of $n$, determining the growth rate for large $n$.","hu":"Definíció: A $n$ legnagyobb hatványával rendelkező polinomban lévő kifejezés, amely meghatározza a nagy $n$ növekedési ütemét."}},
    {"q":{"en":"How many terms are in the summation $\\sum_{j=i+1}^{n} a_{ij}x_j$ when $i = n-1$?","hu":"Hány tag szerepel a $\\sum_{j=i+1}^{n} a_{ij}x_j$ összegzésben, amikor $i = n-1$?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"True or False: If any diagonal element of a triangular matrix is zero, the determinant is zero.","hu":"Igaz vagy hamis: Ha egy háromszögmátrix bármely átlós eleme nulla, akkor a determináns nulla."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"Which specific field of mathematics is the source material '03_01_triangular-systems.md' discussing?","hu":"A '03_01_triangular-systems.md' forrásanyag a matematikának melyik konkrét területéről szól?"},"a":{"en":"Numerical Analysis.","hu":"Numerikus elemzés."}},
    {"q":{"en":"The summation term in the backward substitution formula accounts for the _____ of previously solved variables.","hu":"A visszafelé helyettesítési képletben szereplő összegzési tag a korábban megoldott változók _____-ját adja."},"a":{"en":"Back-substitution (or back-replacement).","hu":"Vissza-csere (vagy visszacsere)."}},
    {"q":{"en":"What is the closed-form sum of the first $n$ integers, $1 + 2 + \\dots + n$?","hu":"Mennyi az első $n$ egész számok zárt formájú összege, $1 + 2 + \\dots + n$?"},"a":{"en":"$n(n+1)/2$","hu":"$n(n+1)/2$"}},
    {"q":{"en":"If $n = 1000$, what is the approximate magnitude of multiplications required for backward substitution?","hu":"Ha $n = 1000$, mekkora a szorzások hozzávetőleges nagysága a visszafelé helyettesítéshez?"},"a":{"en":"Approximately $500,000$ (or $n^2/2$).","hu":"Körülbelül $500,000$ (vagy $n^2/2$)."}},
    {"q":{"en":"The notation $\\mathcal{O}(n^k)$ effectively _____ lower-order terms that are less significant for large $n$.","hu":"A $\\mathcal{O}(n^k)$ jelölés gyakorlatilag _____ olyan alacsonyabb rendű kifejezéseket tartalmaz, amelyek kevésbé jelentősek a nagy $n$ esetében."},"a":{"en":"Hides (or ignores).","hu":"Elrejti (vagy figyelmen kívül hagyja)."}},
    {"q":{"en":"In the example system, $x_2$ is found using the formula $(13 + x_3 - 2x_4)/3$. If $x_3=1$ and $x_4=4$, what is $x_2$?","hu":"A példarendszerben a $x_2$ a $(13 + x_3 - 2x_4)/3$ képlet segítségével található. Ha $x_3=1$ és $x_4=4$, mi az a $x_2$?"},"a":{"en":"$2$","hu":"$2$"}},
    {"q":{"en":"In the example system, $x_1$ is found using $(3 + x_2 - 3x_3 - x_4)/2$. If $x_2=2, x_3=1, x_4=4$, what is $x_1$?","hu":"A példarendszerben a $x_1$ a $(3 + x_2 - 3x_3 - x_4)/2$ használatával található. Ha $x_2=2, x_3=1, x_4=4$, mi az a $x_1$?"},"a":{"en":"$-1$","hu":"$-1$"}},
    {"q":{"en":"What type of systems (linear or nonlinear) is backward substitution designed for?","hu":"Milyen típusú (lineáris vagy nemlineáris) rendszerekre tervezték a visszafelé történő helyettesítést?"},"a":{"en":"Linear systems.","hu":"Lineáris rendszerek."}},
    {"q":{"en":"If a matrix is upper triangular, its _____ consist only of elements where the row index is less than or equal to the column index.","hu":"Ha egy mátrix felső háromszög alakú, akkor _____ csak olyan elemekből áll, ahol a sorindex kisebb vagy egyenlő, mint az oszlopindex."},"a":{"en":"Non-zero entries.","hu":"Nem nulla bejegyzések."}},
    {"q":{"en":"Why is it often more efficient to define a specialized method for a specific problem type like triangular systems?","hu":"Miért hatékonyabb gyakran egy speciális módszert meghatározni egy adott problématípusra, például a háromszögrendszerekre?"},"a":{"en":"Specialized methods exploit the structure of the problem to reduce operation counts.","hu":"A speciális módszerek a probléma szerkezetét használják ki a műveletek számának csökkentésére."}},
    {"q":{"en":"What is the result of $1 + 2 + \\dots + (n-1)$?","hu":"Mi a $1 + 2 + \\dots + (n-1)$ eredménye?"},"a":{"en":"$(n-1)n/2$","hu":"$(n-1)n/2$"}},
    {"q":{"en":"How does the complexity of multiplications/divisions compare to additions/subtractions in backward substitution?","hu":"Hogyan viszonyul a szorzások/osztások összetettsége az összeadásokhoz/kivonásokhoz a visszafelé helyettesítésben?"},"a":{"en":"They have the same leading order complexity ($n^2/2$).","hu":"A vezető rendelés összetettsége megegyezik ($n^2/2$)."}},
    {"q":{"en":"In the Hungarian text, the word 'műveletigény' refers to _____.","hu":"A magyar szövegben a műveletigény szó _____-ra utal."},"a":{"en":"Operation count (or computational complexity).","hu":"A műveletek száma (vagy a számítási bonyolultság)."}},
    {"q":{"en":"Process: Solving $x_i$ requires knowing the values of all $x_j$ where $j$ is _____ than $i$.","hu":"Folyamat: A $x_i$ megoldásához ismerni kell az összes $x_j$ értékét, ahol a $j$ _____, mint a $i$."},"a":{"en":"Greater","hu":"Nagyobb"}},
    {"q":{"en":"If the determinant of a triangular matrix is non-zero, does the backward substitution algorithm always yield a solution?","hu":"Ha egy háromszögmátrix determinánsa nem nulla, akkor a visszafelé helyettesítési algoritmus mindig ad megoldást?"},"a":{"en":"Yes, it yields a unique solution.","hu":"Igen, egyedi megoldást ad."}},
    {"q":{"en":"The algorithm $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ corresponds to solving the $i$-th _____ of the system.","hu":"A $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ algoritmus megfelel a rendszer $i$-edik _____ megoldásának."},"a":{"en":"Row (or equation).","hu":"Sor (vagy egyenlet)."}},
    {"q":{"en":"Is backward substitution a finite or iterative numerical method?","hu":"A visszafelé történő helyettesítés véges vagy iteratív numerikus módszer?"},"a":{"en":"Finite (it requires finitely many steps).","hu":"Véges (véges sok lépést igényel)."}},
    {"q":{"en":"Formula: Number of divisions in the entire backward substitution algorithm for an $n \\times n$ matrix.","hu":"Képlet: Osztások száma a teljes visszafelé helyettesítő algoritmusban egy $n \\times n$ mátrixhoz."},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"What determines if backward substitution can be performed for a specific $i$-th row?","hu":"Mi határozza meg, hogy egy adott $i$-edik sor visszafelé történő helyettesítése végrehajtható-e?"},"a":{"en":"Whether $a_{ii} \\ne 0$.","hu":"Akár $a_{ii} \\ne 0$."}},
    {"q":{"en":"Hungarian term: 'egyértelmű megoldás' means _____.","hu":"Magyar kifejezés: 'egyértelmű megoldás' jelentése _____."},"a":{"en":"Unique solution.","hu":"Egyedi megoldás."}},
    {"q":{"en":"In the complexity analysis table, what is the count of multiplication/division for step 2?","hu":"Mennyi a szorzás/osztás száma a komplexitáselemző táblázatban a 2. lépésben?"},"a":{"en":"2","hu":"2"}},
    {"q":{"en":"In the complexity analysis table, what is the count of addition/subtraction for step 2?","hu":"Mennyi az összeadás/kivonás száma a komplexitáselemző táblázatban a 2. lépésben?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"What does the $a_{1n}x_n$ term represent in the first equation of a triangular system?","hu":"Mit jelent a $a_{1n}x_n$ kifejezés egy háromszögrendszer első egyenletében?"},"a":{"en":"The product of the coefficient $a_{1n}$ and the $n$-th unknown $x_n$.","hu":"A $a_{1n}$ együttható és a $n$-edik ismeretlen $x_n$ szorzata."}},
    {"q":{"en":"If $n=2$, how many total multiplications/divisions are needed?","hu":"Ha $n=2$, hány teljes szorzásra/osztásra van szükség?"},"a":{"en":"$3$ (calculated as $2(3)/2$).","hu":"$3$ ($2(3)/2$-ként számítva)."}},
    {"q":{"en":"If $n=2$, how many total additions/subtractions are needed?","hu":"Ha $n=2$, hány összeadásra/kivonásra van szükség?"},"a":{"en":"$1$ (calculated as $1(2)/2$).","hu":"$1$ ($1(2)/2$-ként számítva)."}},
    {"q":{"en":"In the expression $n^2/2 + \\mathcal{O}(n)$, the term $\\mathcal{O}(n)$ is considered a _____ order term.","hu":"A $n^2/2 + \\mathcal{O}(n)$ kifejezésben a $\\mathcal{O}(n)$ kifejezést _____ sorrendű kifejezésnek tekintjük."},"a":{"en":"Lower","hu":"Alacsonyabb"}}
  ],
  's33': [
    {"q":{"en":"In the context of linear systems, what is an 'augmented matrix'?","hu":"Lineáris rendszerek kontextusában mi az a „kibővített mátrix”?"},"a":{"en":"A matrix formed by appending the right-hand side vector $b$ as an additional column to the coefficient matrix $A$.","hu":"Egy mátrix, amelyet a $b$ jobb oldali vektornak a $A$ együtthatómátrixhoz további oszlopként történő hozzáfűzésével alakítanak ki."}},
    {"q":{"en":"What is the primary goal of the 'elimination' phase in Gaussian elimination?","hu":"Mi az elsődleges célja az „eliminációs” fázisnak a Gauss-eliminációban?"},"a":{"en":"To transform the augmented matrix into an equivalent upper triangular form.","hu":"A kiterjesztett mátrix ekvivalens felső háromszög formává alakítása."}},
    {"q":{"en":"What name is given to the diagonal elements $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ used during the Gaussian elimination process?","hu":"Milyen nevet adnak a Gauss-eliminációs folyamat során használt $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ átlós elemeknek?"},"a":{"en":"Pivot elements","hu":"Pivot elemek"}},
    {"q":{"en":"Under what specific numerical condition can basic Gaussian elimination be performed without any row interchanges?","hu":"Milyen konkrét numerikus feltétel mellett hajtható végre az alapvető Gauss-elimináció sorcsere nélkül?"},"a":{"en":"It can be performed if and only if all the pivot elements are non-zero.","hu":"Akkor és csak akkor hajtható végre, ha az összes pivot elem nem nulla."}},
    {"q":{"en":"In Gaussian elimination, what is the 'backward substitution' phase used for?","hu":"A Gauss-eliminációban mire használják a „visszafelé szubsztitúciós” fázist?"},"a":{"en":"Solving the resulting upper triangular system for the unknown variables starting from $x_n$ to $x_1$.","hu":"A kapott felső háromszögrendszer megoldása a $x_n$-től $x_1$-ig terjedő ismeretlen változókra."}},
    {"q":{"en":"In the $k$-th step of Gaussian elimination, what is the formula for the multiplier $l_{ik}$ used to eliminate $a_{ik}$?","hu":"A Gauss-elimináció $k$-edik lépésében mi a képlete a $l_{ik}$ szorzónak a $a_{ik}$ kiküszöbölésére?"},"a":{"en":"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$","hu":"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$"}},
    {"q":{"en":"What is the leading term of the time complexity for Gaussian elimination of an $n \\times n$ system?","hu":"Mi a $n \\times n$ rendszer Gauss-féle eliminációjának időbonyolultságának vezető kifejezése?"},"a":{"en":"$\\frac{n^3}{3}$","hu":"$\\frac{n^3}{3}$"}},
    {"q":{"en":"According to the total operation count, how many multiplications and divisions are required for Gaussian elimination including backward substitution?","hu":"A teljes műveletszám szerint hány szorzás és osztás szükséges a Gauss-eliminációhoz, beleértve a visszafelé helyettesítést?"},"a":{"en":"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$","hu":"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$"}},
    {"q":{"en":"According to the total operation count, how many additions and subtractions are required for Gaussian elimination including backward substitution?","hu":"A teljes műveletszám szerint hány összeadás és kivonás szükséges a Gauss-eliminációhoz, beleértve a visszafelé helyettesítést?"},"a":{"en":"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$","hu":"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$"}},
    {"q":{"en":"Why does dividing by a pivot element close to zero cause issues in floating-point arithmetic?","hu":"Miért okoz problémát a nullához közeli pivot elemmel való osztás a lebegőpontos aritmetikában?"},"a":{"en":"It can lead to a significant increase in rounding errors, making the numerical solution unreliable.","hu":"Ez a kerekítési hibák jelentős növekedéséhez vezethet, megbízhatatlanná téve a numerikus megoldást."}},
    {"q":{"en":"What is the strategy for 'partial pivoting' (also known as maximal column pivoting)?","hu":"Mi a „részleges elforgatás” (más néven maximális oszlopforgatás) stratégiája?"},"a":{"en":"Before step $k$, find the element with the largest magnitude in the $k$-th column at or below the diagonal and swap its row with the $k$-th row.","hu":"A $k$ lépés előtt keresse meg a legnagyobb magnitúdójú elemet a $k$-edik oszlopban az átlónál vagy alatta, és cserélje fel a sorát a $k$-edik sorra."}},
    {"q":{"en":"Which index is selected as the pivot row $l$ in partial pivoting for step $k$?","hu":"Melyik index van kiválasztva $l$ elforgatási sorként a $k$ lépés részleges elforgatásakor?"},"a":{"en":"The index $l$ such that $|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}$.","hu":"A $l$ index úgy, hogy a $|a_{lk}| = \\max\\{|a_{ik}|: i = k, \\ldots, n\\}$."}},
    {"q":{"en":"How does 'complete pivoting' differ from 'partial pivoting'?","hu":"Miben különbözik a „teljes elforgatás” a „részleges elforgatástól”?"},"a":{"en":"It searches for the largest magnitude element in the entire remaining sub-matrix rather than just the current column.","hu":"A legnagyobb nagyságrendű elemet keresi a teljes fennmaradó almátrixban, nem csak az aktuális oszlopban."}},
    {"q":{"en":"What is a major disadvantage of complete pivoting compared to partial pivoting?","hu":"Mi a fő hátránya a teljes elforgatásnak a részleges elforgatáshoz képest?"},"a":{"en":"It requires more comparisons to find the pivot element, which slows down the algorithm.","hu":"Több összehasonlításra van szükség a pivot elem megtalálásához, ami lelassítja az algoritmust."}},
    {"q":{"en":"When performing complete pivoting, what must be tracked in addition to row interchanges?","hu":"A teljes pivoting végrehajtásakor mit kell követni a sorcsere mellett?"},"a":{"en":"Column interchanges, which represent changes in the order of the variables $x_1, \\ldots, x_n$.","hu":"Oszlopcsere, amely a $x_1, \\ldots, x_n$ változók sorrendjében bekövetkezett változásokat jelenti."}},
    {"q":{"en":"Theorem 3.26 states that a linear system can be solved by Gaussian elimination with partial pivoting if and only if _____.","hu":"A 3.26. tétel kimondja, hogy egy lineáris rendszer akkor és csak akkor oldható meg Gauss-eliminációval részleges elforgatással, ha _____."},"a":{"en":"$\\det(\\mathbf{A}) \\neq 0$ (the matrix is invertible).","hu":"$\\det(\\mathbf{A}) \\neq 0$ (a mátrix megfordítható)."}},
    {"q":{"en":"In matrix notation, how are row changes in Gaussian elimination represented using a permutation matrix $\\mathbf{P}$?","hu":"A mátrixjelölésben hogyan ábrázolják a Gauss-elimináció sorváltozásait a $\\mathbf{P}$ permutációs mátrix használatával?"},"a":{"en":"The system is transformed from $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ to $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$.","hu":"A rendszer $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$-ről $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$-re alakul át."}},
    {"q":{"en":"What is the primary motivation for using 'scaled partial pivoting'?","hu":"Mi az elsődleges motiváció a „skálázott részleges elforgatás” használatához?"},"a":{"en":"To reduce rounding errors when the magnitudes of coefficients in different rows vary significantly.","hu":"A kerekítési hibák csökkentése érdekében, amikor a különböző sorokban lévő együtthatók nagysága jelentősen eltér."}},
    {"q":{"en":"In scaled partial pivoting, how is the scale factor $s_i$ for row $i$ typically defined?","hu":"Léptékezett részleges elforgatás esetén általában hogyan definiálható a $s_i$ léptéktényező a $i$ sorhoz?"},"a":{"en":"$s_i = \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$","hu":"$s_i = \\max\\{|a_{ij}|: 1 \\leq j \\leq n\\}$"}},
    {"q":{"en":"In 'partial pivoting with implicit scaling', why are the rows not actually multiplied by the scaling factors?","hu":"A „részleges elforgatás implicit skálázással” esetén miért nem szorozzák meg a sorokat a skálázási tényezőkkel?"},"a":{"en":"To avoid introducing additional rounding errors through unnecessary division operations.","hu":"A szükségtelen osztási műveletek miatti további kerekítési hibák elkerülése érdekében."}},
    {"q":{"en":"What is the selection criterion for the pivot row $l$ in scaled partial pivoting?","hu":"Mi a $l$ forgássor kiválasztásának kritériuma skálázott részleges elforgatásban?"},"a":{"en":"Select $l$ such that $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$.","hu":"Válassza ki a $l$ elemet úgy, hogy a $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$ legyen."}},
    {"q":{"en":"A square matrix $\\mathbf{A}$ is 'diagonally dominant' if, for every row $i$, $|a_{ii}|$ is greater than _____.","hu":"A $\\mathbf{A}$ négyzetmátrix „átlósan domináns”, ha minden $i$ sorban $|a_{ii}|$ nagyobb, mint _____."},"a":{"en":"The sum of the magnitudes of the other elements in that row: $\\sum_{j \\neq i} |a_{ij}|$.","hu":"A sorban lévő többi elem nagyságának összege: $\\sum_{j \\neq i} |a_{ij}|$."}},
    {"q":{"en":"What does Theorem 3.32 conclude about Gaussian elimination on a diagonally dominant matrix?","hu":"Mit von le a 3.32. Tétel a Gauss-eliminációról egy diagonálisan domináns mátrixon?"},"a":{"en":"It can be performed without pivoting and is stable with respect to rounding errors.","hu":"Elfordulás nélkül is végrehajtható, és stabil a kerekítési hibák tekintetében."}},
    {"q":{"en":"How does diagonal dominance relate to matrix invertibility?","hu":"Hogyan kapcsolódik az átlós dominancia a mátrix invertibilitásához?"},"a":{"en":"Any diagonally dominant matrix is guaranteed to be invertible.","hu":"Minden átlósan domináns mátrix garantáltan megfordítható."}},
    {"q":{"en":"Concept: Symmetric Positive Definite (SPD) Matrix","hu":"Koncepció: Szimmetrikus pozitív határozott (SPD) mátrix"},"a":{"en":"Definition: A symmetric matrix $\\mathbf{A}$ where $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$.","hu":"Definíció: $\\mathbf{A}$ szimmetrikus mátrix, ahol $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ az összes $\\mathbf{x} \\neq \\mathbf{0}$ esetében."}},
    {"q":{"en":"What is the 'principal minor' condition for a symmetric matrix to be positive definite?","hu":"Mi a \"fő mellékfeltétel\" ahhoz, hogy egy szimmetrikus mátrix pozitív határozott legyen?"},"a":{"en":"All the upper-left principal minors must have a positive determinant.","hu":"Az összes bal felső fő kiskorúnak pozitív determinánssal kell rendelkeznie."}},
    {"q":{"en":"If a matrix is symmetric positive definite, what can be said about its pivot elements during Gaussian elimination without pivoting?","hu":"Ha egy mátrix szimmetrikus pozitív definit, mit mondhatunk a pivot elemeiről a Gauss-elimináció során elfordulás nélkül?"},"a":{"en":"All pivot elements are guaranteed to be positive.","hu":"Minden forgóelem garantáltan pozitív."}},
    {"q":{"en":"What is the effect of interchanging rows on the determinant of a matrix?","hu":"Milyen hatással van a sorok felcserélése a mátrix determinánsára?"},"a":{"en":"Each row interchange multiplies the determinant by $-1$.","hu":"Minden sorcsere megszorozza a determinánst $-1$-vel."}},
    {"q":{"en":"In an optimized implementation of Gaussian elimination, what happens to the elements under the main diagonal after they are eliminated?","hu":"A Gauss-elimináció optimalizált megvalósításában mi történik a főátló alatti elemekkel, miután kiiktatták őket?"},"a":{"en":"They are typically overwritten by the multipliers $l_{ik}$ or left as meaningless values to save memory.","hu":"Ezeket általában felülírják a $l_{ik}$ szorzók, vagy értelmetlen értékekként hagyják meg a memória megtakarítása érdekében."}},
    {"q":{"en":"Term: Pivot Row","hu":"Fogalom: Pivot Row"},"a":{"en":"Definition: The row containing the pivot element used to eliminate variables in the rows below it during Gaussian elimination.","hu":"Definíció: A pivot elemet tartalmazó sor, amely az alatta lévő sorok változóinak kiküszöbölésére szolgál Gauss-elimináció során."}},
    {"q":{"en":"In the provided example with 4-digit arithmetic, what was the relative error for $x_1$ when dividing by the small pivot $0.0002$?","hu":"A megadott 4 számjegyű aritmetikai példában mekkora volt a $x_1$ relatív hibája, amikor elosztották a $0.0002$ kis forgásponttal?"},"a":{"en":"$300\\%$","hu":"$300\\%$"}},
    {"q":{"en":"What is the first step in the 'implicit scaling' algorithm before starting elimination?","hu":"Mi az első lépés az „implicit skálázás” algoritmusban az elimináció megkezdése előtt?"},"a":{"en":"Compute the scale factor $s_i$ for each row $i$ as the maximum absolute value in that row.","hu":"Számítsa ki a $s_i$ léptéktényezőt minden $i$ sorhoz az adott sorban lévő maximális abszolút értékként."}},
    {"q":{"en":"True or False: If a system has a unique solution, standard Gaussian elimination without pivoting will always find it.","hu":"Igaz vagy hamis: Ha egy rendszernek egyedi megoldása van, a standard Gauss-elimináció elforgatás nélkül mindig megtalálja azt."},"a":{"en":"False; it can fail if a pivot element becomes zero during the process.","hu":"Hamis; meghibásodhat, ha egy pivot elem nullává válik a folyamat során."}},
    {"q":{"en":"In programming Gaussian elimination, what is a more efficient alternative to physically interchanging large rows in memory?","hu":"A Gauss-elimináció programozásában mi a hatékonyabb alternatíva a nagy sorok fizikai felcserélésére a memóriában?"},"a":{"en":"Using an index array to keep track of the row order (indirect addressing).","hu":"Indextömb használata a sorok sorrendjének nyomon követésére (indirekt címzés)."}},
    {"q":{"en":"How does partial pivoting help reduce rounding errors?","hu":"Hogyan segít a részleges elforgatás csökkenteni a kerekítési hibákat?"},"a":{"en":"By ensuring the divisor (pivot) is as large as possible, which minimizes the growth of multipliers and rounding errors.","hu":"A lehető legnagyobb osztó (pivot) biztosításával, ami minimalizálja a szorzók és a kerekítési hibák növekedését."}},
    {"q":{"en":"What property of Symmetric Positive Definite matrices ensures numerical stability without pivoting?","hu":"A szimmetrikus pozitív határozott mátrixok milyen tulajdonsága biztosítja a numerikus stabilitást elfordulás nélkül?"},"a":{"en":"The pivots are always positive and the algorithm is stable with respect to rounding errors for these matrices.","hu":"A pivotok mindig pozitívak, és az algoritmus stabil a kerekítési hibák tekintetében ezeknél a mátrixoknál."}},
    {"q":{"en":"In Gaussian elimination, the multiplier $l_{ik}$ is stored to potentially perform what future matrix decomposition?","hu":"A Gauss-elimináció során a $l_{ik}$ szorzót tároljuk, hogy potenciálisan milyen jövőbeli mátrixbontást hajtson végre?"},"a":{"en":"$LU$ decomposition (though not explicitly detailed in the source, $l_{ik}$ are the components of $L$).","hu":"$LU$ dekompozíció (bár a forrásban nincs kifejezetten részletezve, a $l_{ik}$ a $L$ összetevői)."}},
    {"q":{"en":"If the algorithm for Gaussian elimination encounters a column where all elements $a_{ik}$ for $i \\geq k$ are zero, what does this imply about the matrix $\\mathbf{A}$?","hu":"Ha a Gauss-elimináció algoritmusa olyan oszlopba ütközik, amelyben a $a_{ik}$ $i \\geq k$ összes eleme nulla, mit jelent ez a $\\mathbf{A}$ mátrixról?"},"a":{"en":"The matrix is singular, and $\\det(\\mathbf{A}) = 0$.","hu":"A mátrix szinguláris, és $\\det(\\mathbf{A}) = 0$."}},
    {"q":{"en":"In partial pivoting, what happens if multiple rows have the same maximum absolute value in the current column?","hu":"Mi történik részleges elforgatás esetén, ha több sornak ugyanaz a maximális abszolút értéke az aktuális oszlopban?"},"a":{"en":"The smallest row index $l$ is typically chosen.","hu":"Általában a legkisebb $l$ sorindexet választják."}},
    {"q":{"en":"In the backward substitution formula $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$, what must be non-zero for the formula to be valid?","hu":"A $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ visszafelé helyettesítési képletben minek kell nullától eltérőnek lennie ahhoz, hogy a képlet érvényes legyen?"},"a":{"en":"The pivot element $a_{ii}$.","hu":"A forgóelem $a_{ii}$."}},
    {"q":{"en":"Why is scaling using powers of the number system base (e.g., $\\beta^{r_i}$) preferred in some implementations?","hu":"Miért részesítik előnyben a skálázást a számrendszer-alap hatványainak használatával (pl. $\\beta^{r_i}$) egyes megvalósításokban?"},"a":{"en":"Division by base powers does not introduce rounding errors in floating-point representations.","hu":"Az alaphatványokkal való osztás nem okoz kerekítési hibákat a lebegőpontos ábrázolásokban."}},
    {"q":{"en":"What is the effect of scaling a row on the solution $\\mathbf{x}$ of the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","hu":"Milyen hatással van egy sor méretezése a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer $\\mathbf{x}$ megoldására?"},"a":{"en":"The solution remains identical; only the numerical selection of pivots is affected.","hu":"A megoldás ugyanaz marad; csak a pivotok számszerű kiválasztását érinti."}},
    {"q":{"en":"The proof of Theorem 3.32 uses the _____ inequality to show that diagonal dominance is preserved in subsequent steps of elimination.","hu":"A 3.32. Tétel bizonyítása a _____ egyenlőtlenséget használja annak kimutatására, hogy az átlós dominancia megmarad a következő eliminációs lépésekben."},"a":{"en":"Triangle Inequality","hu":"Háromszög egyenlőtlenség"}},
    {"q":{"en":"In the complexity analysis, which phase of Gaussian elimination is more expensive: Elimination or Backward Substitution?","hu":"A komplexitáselemzésben a Gauss-elimináció melyik fázisa drágább: Elimináció vagy Visszafelé helyettesítés?"},"a":{"en":"Elimination ($O(n^3)$ versus $O(n^2)$ for backward substitution).","hu":"Elimináció ($O(n^3)$ versus $O(n^2)$ a visszafelé történő helyettesítéshez)."}},
    {"q":{"en":"What is the result of applying Gaussian elimination to a symmetric positive definite matrix without pivoting?","hu":"Mi az eredménye, ha a Gauss-eliminációt szimmetrikus pozitív határozott mátrixra alkalmazzuk elfordulás nélkül?"},"a":{"en":"The matrix is successfully reduced to upper triangular form with all positive diagonal entries.","hu":"A mátrix sikeresen redukálva felső háromszög alakúra minden pozitív átlós bejegyzéssel."}},
    {"q":{"en":"If $\\det(\\mathbf{A}) \\neq 0$, what does Theorem 3.28 guarantee regarding permutation matrices?","hu":"Ha $\\det(\\mathbf{A}) \\neq 0$, mit garantál a 3.28 Tétel a permutációs mátrixokra vonatkozóan?"},"a":{"en":"There exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ can be solved without row changes.","hu":"Létezik egy $\\mathbf{P}$ permutációs mátrix, amellyel a $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ sorváltás nélkül megoldható."}},
    {"q":{"en":"What happens if Gaussian elimination with partial pivoting is attempted on a singular matrix?","hu":"Mi történik, ha a Gauss-eliminációt részleges elforgatással kíséreljük meg egy szinguláris mátrixon?"},"a":{"en":"The process will eventually fail because at some step $k$, all elements in the column $k$ from the $k$-th row down will be zero.","hu":"A folyamat végül meghiúsul, mert a $k$ valamelyik lépésében a $k$ oszlop összes eleme a $k$-edik sortól lefelé nulla lesz."}},
    {"q":{"en":"In the 2D example $0.0002x_1 - 30.5x_2 = -60.99$ and $5.060x_1 - 1.05x_2 = 250.9$, why was the second variable $x_2$ less affected by the error than $x_1$?","hu":"A $0.0002x_1 - 30.5x_2 = -60.99$ és $5.060x_1 - 1.05x_2 = 250.9$ 2D-s példában miért volt a $x_2$ második változó kevésbé érintett a hiba által, mint a $x_1$?"},"a":{"en":"The error was introduced while calculating $x_1$ during back-substitution because it depended on the magnified rounding error from the elimination step.","hu":"A hiba a $x_1$ kiszámításakor keletkezett a visszahelyettesítés során, mert az az eliminációs lépésből származó felnagyított kerekítési hibától függött."}},
    {"q":{"en":"Cloze: In Gaussian elimination, the variable $x_k$ is eliminated from rows $i = \\dots$ in the $k$-th step.","hu":"Bezárás: Gauss-elimináció esetén a $x_k$ változó kikerül a $i = \\dots$ sorokból a $k$-edik lépésben."},"a":{"en":"$k+1, \\ldots, n$","hu":"$k+1, \\ldots, n$"}},
    {"q":{"en":"What is the value of the multiplier $l_{i1}$ in terms of matrix entries?","hu":"Mennyi a $l_{i1}$ szorzó értéke a mátrixbejegyzésekben?"},"a":{"en":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$","hu":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"}},
    {"q":{"en":"Concept: Time Complexity","hu":"Koncepció: Idő komplexitás"},"a":{"en":"Definition: The measure of the number of operations required by an algorithm as a function of the input size $n$.","hu":"Definíció: Az algoritmus által igényelt műveletek számának mértéke a $n$ bemeneti méret függvényében."}},
    {"q":{"en":"What is the relationship between the determinant of a matrix and the pivot elements in Gaussian elimination without row swaps?","hu":"Mi a kapcsolat a mátrix determinánsa és a pivot elemek között sorcsere nélküli Gauss-eliminációban?"},"a":{"en":"The determinant is equal to the product of the pivot elements: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$.","hu":"A determináns egyenlő a forgáselemek szorzatával: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$."}},
    {"q":{"en":"What is the specific purpose of the $l$ and $m$ indices in complete pivoting?","hu":"Mi a konkrét célja a $l$ és $m$ indexeknek teljes elforgatásban?"},"a":{"en":"Index $l$ represents the row and $m$ represents the column of the largest available element to be moved to the pivot position.","hu":"A $l$ index a sort, a $m$ pedig a legnagyobb elérhető elem oszlopát jelöli, amelyet a forgási pozícióba kell mozgatni."}},
    {"q":{"en":"True or False: Gaussian elimination with partial pivoting always yields the exact solution in floating-point arithmetic.","hu":"Igaz vagy hamis: A Gauss-elimináció részleges elforgatással mindig a pontos megoldást adja a lebegőpontos aritmetikában."},"a":{"en":"False; it reduces rounding error but does not eliminate it entirely.","hu":"Hamis; csökkenti a kerekítési hibát, de nem szünteti meg teljesen."}},
    {"q":{"en":"Which matrix type is explicitly mentioned as being stable under Gaussian elimination without pivoting?","hu":"Melyik mátrixtípust említik kifejezetten stabilnak a Gauss-elimináció alatt, elfordulás nélkül?"},"a":{"en":"Diagonally dominant matrices (and symmetric positive definite matrices).","hu":"Diagonálisan domináns mátrixok (és szimmetrikus pozitív határozott mátrixok)."}},
    {"q":{"en":"What is the alternative name for 'partial pivoting' in Gaussian elimination?","hu":"Mi a „részleges elforgatás” alternatív neve a Gauss-eliminációban?"},"a":{"en":"Maximal column pivoting","hu":"Maximális oszlopforgatás"}},
    {"q":{"en":"In partial pivoting, from which set of elements in the $k$-th column is the pivot selected?","hu":"Részleges elforgatásnál a $k$-edik oszlop melyik elemkészletéből van kiválasztva a pivot?"},"a":{"en":"The elements in and under the main diagonal (from row $k$ to $n$).","hu":"Az elemek a főátlóban és alatta ($k$ sortól $n$-ig)."}},
    {"q":{"en":"In the $k$-th step of partial pivoting, what criteria determines the selection of the pivot row $l$?","hu":"A részleges elforgatás $k$-edik lépésében milyen kritériumok határozzák meg a $l$ forgássor kiválasztását?"},"a":{"en":"$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\dots, n\\}$","hu":"$|a_{lk}| = \\max\\{|a_{ik}|: i = k, \\dots, n\\}$"}},
    {"q":{"en":"What physical action is performed once the pivot row $l$ is identified in partial pivoting?","hu":"Milyen fizikai műveletet hajtanak végre, ha a $l$ forgássort részleges elforgatásban azonosítják?"},"a":{"en":"The $k$-th and $l$-th rows are interchanged.","hu":"A $k$-edik és a $l$-edik sorok felcserélődnek."}},
    {"q":{"en":"According to the provided theorem, a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved by Gaussian elimination with partial pivoting if and only if $\\det(\\mathbf{A})$ is _____.","hu":"A megadott tétel szerint egy $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ lineáris rendszer akkor és csak akkor oldható meg Gauss-eliminációval részleges elforgatással, ha $\\det(\\mathbf{A})$ _____."},"a":{"en":"Non-zero ($\\neq 0$)","hu":"Nem nulla ($\\neq 0$)"}},
    {"q":{"en":"The invertibility of matrix $\\mathbf{A}$ is equivalent to the existence of a _____ solution for the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for all $\\mathbf{b}$.","hu":"A $\\mathbf{A}$ mátrix invertibilitása megegyezik egy _____ megoldás létezésével a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszerhez minden $\\mathbf{b}$ esetében."},"a":{"en":"Unique","hu":"Egyedülálló"}},
    {"q":{"en":"In the proof of the equivalence theorem, if a row change occurs in the $k$-th step, how does $\\det(\\mathbf{A}^{(k)})$ relate to $\\det(\\mathbf{A}^{(k-1)})$?","hu":"Az ekvivalenciatétel bizonyítása során, ha sorváltás történik a $k$-edik lépésben, hogyan viszonyul a $\\det(\\mathbf{A}^{(k)})$ a $\\det(\\mathbf{A}^{(k-1)})$-hez?"},"a":{"en":"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$","hu":"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$"}},
    {"q":{"en":"If no row change is needed during the $k$-th step of Gaussian elimination, what is the relationship between $\\det(\\mathbf{A}^{(k)})$ and $\\det(\\mathbf{A}^{(k-1)})$?","hu":"Ha a Gauss-elimináció $k$-edik lépése során nincs szükség sorváltásra, mi a kapcsolat a $\\det(\\mathbf{A}^{(k)})$ és a $\\det(\\mathbf{A}^{(k-1)})$ között?"},"a":{"en":"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$","hu":"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$"}},
    {"q":{"en":"If partial pivoting terminates at step $k$ because all $a_{ik}^{(k-1)} = 0$ for $i = k, \\dots, n$, what is the value of $\\det(\\mathbf{A})$?","hu":"Ha a részleges elforgatás a $k$ lépésnél véget ér, mert az összes $a_{ik}^{(k-1)} = 0$ $i = k, \\dots, n$ esetében, mi a $\\det(\\mathbf{A})$ értéke?"},"a":{"en":"Zero","hu":"Nulla"}},
    {"q":{"en":"Why is it numerically advantageous to move the largest magnitude element to the pivot position?","hu":"Miért előnyös számszerűen a legnagyobb magnitúdójú elemet elforgatni a forgási pozícióba?"},"a":{"en":"It minimizes rounding errors by ensuring the division factor is as small as possible.","hu":"Minimalizálja a kerekítési hibákat azáltal, hogy a lehető legkisebb osztási tényezőt biztosítja."}},
    {"q":{"en":"How does partial pivoting prevent algorithm failure when the diagonal element $a_{kk}$ is zero?","hu":"Hogyan akadályozza meg a részleges elforgatás az algoritmus meghibásodását, ha a $a_{kk}$ átlós elem nulla?"},"a":{"en":"It swaps the row with a lower row containing a non-zero element in that column.","hu":"Felcseréli a sort egy alsó sorral, amely nem nulla elemet tartalmaz az oszlopban."}},
    {"q":{"en":"In the provided $4 \\times 4$ matrix example, which two rows are interchanged in the very first step?","hu":"A megadott $4 \\times 4$ mátrix példában melyik két sort cseréljük fel a legelső lépésben?"},"a":{"en":"The first row and the third row.","hu":"Az első sor és a harmadik sor."}},
    {"q":{"en":"In the first step of the example matrix, why is the row beginning with $-3$ swapped to the top?","hu":"A példamátrix első lépésében miért van a $-3$ karakterekkel kezdődő sor a tetejére cserélve?"},"a":{"en":"The value $|-3|$ is the maximum absolute value in the first column.","hu":"A $|-3|$ érték a maximális abszolút érték az első oszlopban."}},
    {"q":{"en":"The effect of all row changes in partial pivoting can be represented by multiplying $\\mathbf{A}$ by a _____ matrix $\\mathbf{P}$.","hu":"Az összes sorváltoztatás hatását a részleges elforgatásban a $\\mathbf{A}$ és a _____ $\\mathbf{P}$ mátrix szorzásával lehet ábrázolni."},"a":{"en":"Permutation","hu":"Permutáció"}},
    {"q":{"en":"If $\\det(\\mathbf{A}) \\neq 0$, there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ is solvable without _____.","hu":"Ha $\\det(\\mathbf{A}) \\neq 0$, akkor létezik egy $\\mathbf{P}$ permutációs mátrix, így a $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ _____ nélkül is megoldható."},"a":{"en":"Row changes (or further pivoting)","hu":"Sormódosítás (vagy további elforgatás)"}},
    {"q":{"en":"Why do humans often prefer using fractions when performing Gaussian elimination by hand?","hu":"Miért részesítik előnyben az emberek a frakciók használatát, amikor kézzel végzik a Gauss-eliminációt?"},"a":{"en":"Fractions allow for an exact solution without introducing rounding errors.","hu":"A törtek pontos megoldást tesznek lehetővé kerekítési hibák nélkül."}},
    {"q":{"en":"What is the main drawback of standard Gaussian elimination without pivoting when implemented on a computer?","hu":"Mi a fő hátránya az elfordulás nélküli standard Gauss-eliminációnak, amikor számítógépen implementálják?"},"a":{"en":"Small pivots can lead to large rounding errors that degrade the precision of the result.","hu":"A kis forgáspontok nagy kerekítési hibákhoz vezethetnek, amelyek rontják az eredmény pontosságát."}},
    {"q":{"en":"In a system of $n$ equations, what is the label of the coefficient matrix after the final step of Gaussian elimination?","hu":"$n$ egyenletrendszerben mi a címkéje az együtthatómátrixnak a Gauss-elimináció utolsó lépése után?"},"a":{"en":"$\\mathbf{A}^{(n-1)}$","hu":"$\\mathbf{A}^{(n-1)}$"}},
    {"q":{"en":"How is the final triangular system solved once Gaussian elimination is complete?","hu":"Hogyan oldható meg a végső háromszögrendszer, ha a Gauss-elimináció befejeződött?"},"a":{"en":"Backward substitution","hu":"Visszafelé csere"}},
    {"q":{"en":"If the Gaussian elimination process reaches a state where the bottom-right submatrix has a column of zeros, what does this indicate about the system's solvability?","hu":"Ha a Gauss-eliminációs folyamat elér egy olyan állapotot, ahol a jobb alsó részmátrix nullákból álló oszlopot tartalmaz, mit jelez ez a rendszer megoldhatóságáról?"},"a":{"en":"The system cannot be solved uniquely because the determinant is zero.","hu":"A rendszer nem oldható meg egyedileg, mert a determináns nulla."}},
    {"q":{"en":"In the second elimination step of the example, why are the second and fourth rows interchanged?","hu":"A példa második eliminációs lépésében miért van felcserélve a második és a negyedik sor?"},"a":{"en":"The element $\\frac{14}{3}$ in the fourth row is larger in magnitude than $-\\frac{1}{3}$ in the second row.","hu":"A negyedik sorban lévő $\\frac{14}{3}$ elem nagysága nagyobb, mint a második sorban lévő $-\\frac{1}{3}$."}},
    {"q":{"en":"According to the transcript, how does the numerical result from partial pivoting relate to the exact solution?","hu":"Az átirat szerint a részleges elforgatásból származó számszerű eredmény hogyan viszonyul a pontos megoldáshoz?"},"a":{"en":"It is an approximation due to rounding at each step to a certain precision.","hu":"Ez egy közelítés az egyes lépéseknél bizonyos pontosságig történő kerekítés miatt."}},
    {"q":{"en":"Concept: Pivot element","hu":"Koncepció: Pivot elem"},"a":{"en":"Definition: The element in the diagonal position used to eliminate coefficients in the rows below it.","hu":"Definíció: Az átlós helyzetben lévő elem az alatta lévő sorok együtthatóinak kiküszöbölésére szolgál."}},
    {"q":{"en":"True or False: Partial pivoting requires searching the entire remaining submatrix for the largest element.","hu":"Igaz vagy hamis: A részleges elforgatáshoz a teljes fennmaradó almátrixban kell keresni a legnagyobb elemet."},"a":{"en":"False (That is complete pivoting; partial pivoting only searches the current column).","hu":"Hamis (Ez teljes elforgatás; a részleges elforgatás csak az aktuális oszlopban keres)."}},
    {"q":{"en":"If a matrix is invertible, what does the theorem guarantee about Gaussian elimination with partial pivoting?","hu":"Ha egy mátrix invertálható, mit garantál a tétel a Gauss-eliminációról részleges elforgatással?"},"a":{"en":"The elimination process can be successfully performed to completion.","hu":"Az eltávolítási folyamat sikeresen végrehajtható a befejezésig."}},
    {"q":{"en":"How many row interchanges are required if the largest magnitude element is already in the $a_{kk}$ position?","hu":"Hány sorcserére van szükség, ha a legnagyobb nagyságú elem már a $a_{kk}$ pozícióban van?"},"a":{"en":"Zero","hu":"Nulla"}},
    {"q":{"en":"Formula: The value of the determinant of $\\mathbf{A}$ in terms of the final upper triangular matrix $\\mathbf{A}^{(n-1)}$ after $m$ row swaps.","hu":"Képlet: A $\\mathbf{A}$ determináns értéke a $\\mathbf{A}^{(n-1)}$ végső felső háromszögmátrixban $m$ sorcserék után."},"a":{"en":"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$","hu":"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$"}},
    {"q":{"en":"What is the value of $\\det(\\mathbf{A}^{(n-1)})$ if the triangular system is solvable?","hu":"Mennyi a $\\det(\\mathbf{A}^{(n-1)})$ értéke, ha a háromszögrendszer megoldható?"},"a":{"en":"It is non-zero.","hu":"Ez nem nulla."}},
    {"q":{"en":"In the context of the proof, what property of determinants allows $\\det(\\mathbf{A}^{(k)})$ to equal $-\\det(\\mathbf{A}^{(k-1)})$?","hu":"A bizonyítással összefüggésben a determinánsok milyen tulajdonsága teszi lehetővé, hogy $\\det(\\mathbf{A}^{(k)})$ egyenlő legyen $-\\det(\\mathbf{A}^{(k-1)})$-vel?"},"a":{"en":"Swapping two rows of a matrix reverses the sign of its determinant.","hu":"Egy mátrix két sorának felcserélése megfordítja a determinánsának előjelét."}},
    {"q":{"en":"If a matrix $\\mathbf{A}$ has $\\det(\\mathbf{A}) = 0$, what will eventually happen during partial pivoting?","hu":"Ha egy $\\mathbf{A}$ mátrixban van $\\det(\\mathbf{A}) = 0$, mi fog végül történni a részleges elforgatás során?"},"a":{"en":"A step will be reached where all elements in the current column on and below the diagonal are zero.","hu":"El fog érni egy olyan lépés, ahol az aktuális oszlopban az átlón és alatta lévő összes elem nulla."}},
    {"q":{"en":"What is the first row of the final upper triangular matrix in the provided example?","hu":"Mi a végső felső háromszögmátrix első sora a megadott példában?"},"a":{"en":"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$","hu":"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$"}},
    {"q":{"en":"In the $4 \\times 4$ example, what is the final value found for $x_4$?","hu":"A $4 \\times 4$ példában mi a $x_4$ végső értéke?"},"a":{"en":"$-1$","hu":"$-1$"}},
    {"q":{"en":"Step: After finding the pivot and swapping rows, what is the next procedural step in the elimination?","hu":"Lépés: A pivot megtalálása és a sorok felcserélése után mi a következő eljárási lépés az eltávolítás során?"},"a":{"en":"Subtracting multiples of the pivot row from the rows below to create zeros in the current column.","hu":"A pivot sor többszöröseinek kivonása az alábbi sorokból, hogy nullákat hozzon létre az aktuális oszlopban."}},
    {"q":{"en":"How is the multiplier calculated for row $i$ in the $k$-th step of elimination?","hu":"Hogyan számítják ki a $i$ sor szorzóját a $k$-edik eliminációs lépésben?"},"a":{"en":"By dividing the element to be eliminated ($a_{ik}$) by the pivot element ($a_{kk}$).","hu":"A kiküszöbölendő elem ($a_{ik}$) elosztása a forgóelemmel ($a_{kk}$)."}},
    {"q":{"en":"Why does dividing by a 'largest possible number' during multiplier calculation help with rounding?","hu":"Miért segíti a kerekítést a szorzószámítás során a „lehető legnagyobb számmal” való osztás?"},"a":{"en":"It prevents the multipliers from becoming excessively large, which would amplify errors in subsequent subtractions.","hu":"Megakadályozza, hogy a szorzók túl nagyra nőjenek, ami felerősítené a későbbi kivonások hibáit."}},
    {"q":{"en":"In the example, the solution for $x_1$ is _____.","hu":"A példában a $x_1$ megoldása _____."},"a":{"en":"$4$","hu":"$4$"}},
    {"q":{"en":"What does the Hungarian text suggest about the necessity of partial pivoting?","hu":"Mit sugall a magyar szöveg a részleges elforgatás szükségességéről?"},"a":{"en":"It is sometimes necessary to perform the calculation at all, and often advisable to reduce errors.","hu":"Néha egyáltalán el kell végezni a számítást, és gyakran tanácsos csökkenteni a hibákat."}},
    {"q":{"en":"If partial pivoting is used, is it possible to have a zero pivot if the matrix is non-singular?","hu":"Ha részleges elforgatást használunk, lehetséges-e nulla elfordulás, ha a mátrix nem szinguláris?"},"a":{"en":"No, if the matrix is non-singular, at least one element in the column must be non-zero.","hu":"Nem, ha a mátrix nem szinguláris, akkor az oszlopban legalább egy elemnek nullától eltérőnek kell lennie."}},
    {"q":{"en":"The determinant of an upper triangular matrix is the _____ of its diagonal elements.","hu":"Egy felső háromszögmátrix determinánsa az átlós elemeinek _____."},"a":{"en":"Product","hu":"Termék"}},
    {"q":{"en":"What is the result for $x_3$ in the $4 \\times 4$ example?","hu":"Mi a $x_3$ eredménye a $4 \\times 4$ példában?"},"a":{"en":"$2$","hu":"$2$"}},
    {"q":{"en":"In the $k$-th step, the pivot search is restricted to rows $i$ where $i \\ge$ _____.","hu":"A $k$-edik lépésben a pivot keresés a $i$ sorokra korlátozódik, ahol a $i \\ge$ _____."},"a":{"en":"$k$","hu":"$k$"}},
    {"q":{"en":"The process of moving the largest magnitude element to the diagonal is intended to avoid dividing by _____ numbers.","hu":"A legnagyobb magnitúdójú elem átlóba mozgatásának folyamata során elkerülhető a _____ számokkal való osztás."},"a":{"en":"Small (or zero)","hu":"Kicsi (vagy nulla)"}},
    {"q":{"en":"True or False: Partial pivoting always results in a positive determinant.","hu":"Igaz vagy hamis: A részleges elforgatás mindig pozitív determinánst eredményez."},"a":{"en":"False (The sign depends on the number of row swaps and the final diagonal products).","hu":"Hamis (Az előjel a sorcserék számától és a végső átlós szorzatoktól függ)."}},
    {"q":{"en":"In the third step of the example, which rows are swapped?","hu":"A példa harmadik lépésében melyik sorok cserélődnek fel?"},"a":{"en":"The third and fourth rows.","hu":"A harmadik és negyedik sor."}},
    {"q":{"en":"What is the second variable solved for in the backward substitution of the example?","hu":"Mire van megoldva a második változó a példa visszafelé történő helyettesítésében?"},"a":{"en":"$x_3$","hu":"$x_3$"}},
    {"q":{"en":"Term: Permutation Matrix","hu":"Fogalom: Permutációs mátrix"},"a":{"en":"Definition: An identity matrix with its rows reordered, used to perform row exchanges via matrix multiplication.","hu":"Definíció: Egy identitásmátrix sorait átrendezve, mátrixszorzás útján történő sorcserére szolgál."}},
    {"q":{"en":"If $\\mathbf{A}$ is invertible, the system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has _____ solution(s).","hu":"Ha a $\\mathbf{A}$ invertálható, a $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ rendszernek _____ megoldása van."},"a":{"en":"Exactly one (or a unique)","hu":"Pontosan egy (vagy egyedi)"}},
    {"q":{"en":"In the provided example, the final pivot element in the fourth row after elimination is _____.","hu":"A bemutatott példában az utolsó pivot elem a negyedik sorban az elimináció után _____."},"a":{"en":"$-\\frac{143}{24}$","hu":"$-\\frac{143}{24}$"}},
    {"q":{"en":"What happens to the augmented part of the matrix (the $\\mathbf{b}$ vector) during a row swap?","hu":"Mi történik a mátrix kiterjesztett részével (a $\\mathbf{b}$ vektorral) sorcsere során?"},"a":{"en":"The corresponding elements in the $\\mathbf{b}$ vector are swapped along with the rows.","hu":"A $\\mathbf{b}$ vektor megfelelő elemei a sorokkal együtt felcserélődnek."}},
    {"q":{"en":"What is the value of $x_2$ in the example problem?","hu":"Mi a $x_2$ értéke a példafeladatban?"},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"In the proof, why is $\\det(\\mathbf{A}^{(n-1)})$ non-zero if (i) holds?","hu":"A bizonyításban miért nem nulla a $\\det(\\mathbf{A}^{(n-1)})$, ha az (i) teljesül?"},"a":{"en":"Because the assumption is that the elimination can be completed to form a solvable triangular system.","hu":"Mert az a feltevés, hogy az elimináció befejezhető egy megoldható háromszögrendszer kialakításához."}},
    {"q":{"en":"Under what condition does the determinant of a matrix equal zero based on its structure during elimination?","hu":"Milyen feltétel mellett egyenlő egy mátrix determinánsa nullával a szerkezete alapján az elimináció során?"},"a":{"en":"When a column (from the diagonal down) consists entirely of zeros.","hu":"Amikor egy oszlop (átlótól lefelé) teljes egészében nullákból áll."}},
    {"q":{"en":"Why is the row swap done *before* the elimination step?","hu":"Miért történik a sorcsere *előtt* az eliminációs lépés?"},"a":{"en":"To ensure the current step uses the most stable pivot available for the entire column.","hu":"Annak biztosítása érdekében, hogy az aktuális lépés a lehető legstabilabb forgáspontot használja a teljes oszlophoz."}},
    {"q":{"en":"How does the transcript characterize the result of Gaussian elimination when $a_{kk} = 0$ and no swaps are possible?","hu":"Hogyan jellemzi az átirat a Gauss-elimináció eredményét, amikor a $a_{kk} = 0$ és nincs csere?"},"a":{"en":"The algorithm terminates because it cannot continue without a non-zero pivot.","hu":"Az algoritmus leáll, mert nem tud folytatódni nullától eltérő forgáspont nélkül."}},
    {"q":{"en":"In the Hungarian text, what is the '3.26. tétel' (Theorem 3.26) equivalent to in the English source?","hu":"A magyar szövegben mi a '3.26. tétel' (3.26. tétel) megfelelője az angol forrásban?"},"a":{"en":"The theorem stating the equivalence of system solvability, non-zero determinant, and invertibility.","hu":"A rendszer megoldhatósága, a nullától eltérő determináns és az invertálhatóság ekvivalenciáját kimondó tétel."}},
    {"q":{"en":"In Gaussian elimination, what is another name for 'complete pivoting'?","hu":"A Gauss-eliminációban mi a másik neve a „teljes elfordulásnak”?"},"a":{"en":"Maximal pivoting.","hu":"Maximális elfordulás."}},
    {"q":{"en":"At the $k$-th step of complete pivoting, the indices $l$ and $m$ are chosen such that $|a_{lm}|$ is the maximum of the absolute values in which range?","hu":"A teljes elforgatás $k$-edik lépésénél a $l$ és $m$ indexeket úgy választjuk meg, hogy a $|a_{lm}|$ melyik tartományban legyen az abszolút értékek maximuma?"},"a":{"en":"The range where $i = k, \\ldots, n$ and $j = k, \\ldots, n$.","hu":"A tartomány, ahol a $i = k, \\ldots, n$ és a $j = k, \\ldots, n$."}},
    {"q":{"en":"What two types of interchanges are performed during a step of Gaussian elimination with complete pivoting?","hu":"Milyen két típusú cserét hajtanak végre a Gauss-elimináció egy lépése során teljes elforgatással?"},"a":{"en":"The interchange of the $k$-th and $l$-th rows and the $k$-th and $m$-th columns.","hu":"A $k$-edik és a $l$-edik sorok, valamint a $k$-edik és a $m$-edik oszlopok felcserélése."}},
    {"q":{"en":"How does interchanging the $k$-th and $m$-th columns affect the linear system variables?","hu":"Hogyan befolyásolja a $k$-edik és a $m$-edik oszlopok felcserélése a lineáris rendszerváltozókat?"},"a":{"en":"It changes which column corresponds to which unknown variable ($x_1, \\ldots, x_n$).","hu":"Megváltoztatja, hogy melyik oszlop melyik ismeretlen változónak felel meg ($x_1, \\ldots, x_n$)."}},
    {"q":{"en":"What is the primary disadvantage of complete pivoting compared to partial pivoting?","hu":"Mi a teljes elforgatás elsődleges hátránya a részleges elforgatáshoz képest?"},"a":{"en":"It requires significantly more comparisons to find the maximum element, making the method slower.","hu":"A maximális elem megtalálása lényegesen több összehasonlítást igényel, így a módszer lassabb."}},
    {"q":{"en":"When solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ with complete pivoting, how is the final value of the variables determined?","hu":"A $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer teljes elforgatással történő megoldásánál hogyan határozzák meg a változók végső értékét?"},"a":{"en":"By solving the resulting triangular system while accounting for all column (variable) swaps.","hu":"Az így kapott háromszögrendszer megoldásával az összes oszlop (változó) swap elszámolása mellett."}},
    {"q":{"en":"A square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ is called row diagonally dominant if for every $i$, $|a_{ii}| >$ _____.","hu":"A $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ négyzetmátrixot átlósan dominánsnak nevezzük, ha minden $i$, $|a_{ii}| >$ _____ esetén."},"a":{"en":"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$.","hu":"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$."}},
    {"q":{"en":"According to the provided theorem, if a matrix $\\mathbf{A}$ is diagonally dominant, what property does it necessarily have regarding its inverse?","hu":"A megadott tétel szerint, ha egy $\\mathbf{A}$ mátrix átlósan domináns, milyen tulajdonsága van szükségszerűen az inverzére nézve?"},"a":{"en":"The matrix $\\mathbf{A}$ is invertible.","hu":"A $\\mathbf{A}$ mátrix megfordítható."}},
    {"q":{"en":"In the proof of invertibility for diagonally dominant matrices, what assumption is made about the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$?","hu":"Az átlósan domináns mátrixok invertálhatóságának bizonyítása során milyen feltevés történik a $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ lineáris rendszerrel kapcsolatban?"},"a":{"en":"It is assumed to have a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$ to reach a contradiction.","hu":"Feltételezzük, hogy van egy nemtriviális $\\mathbf{x} \\ne \\mathbf{0}$ megoldása az ellentmondás eléréséhez."}},
    {"q":{"en":"If a matrix is row diagonally dominant, can Gaussian elimination be performed without pivoting?","hu":"Ha egy mátrix sorátlósan domináns, elvégezhető-e a Gauss-elimináció elfordulás nélkül?"},"a":{"en":"Yes, it can be performed without pivoting.","hu":"Igen, elforgatás nélkül is végrehajtható."}},
    {"q":{"en":"What is the numerical stability status of Gaussian elimination when applied to a diagonally dominant matrix without pivoting?","hu":"Mi a Gauss-elimináció numerikus stabilitási állapota, ha egy diagonálisan domináns mátrixra alkalmazzuk elfordulás nélkül?"},"a":{"en":"The method is stable with respect to rounding errors.","hu":"A módszer stabil a kerekítési hibák tekintetében."}},
    {"q":{"en":"Theorem 3.32 states that if $\\mathbf{A}$ is diagonally dominant, every intermediate matrix $\\mathbf{A}^{(k)}$ in Gaussian elimination is also _____.","hu":"A 3.32 tétel kimondja, hogy ha a $\\mathbf{A}$ átlósan domináns, akkor a Gauss-eliminációban minden $\\mathbf{A}^{(k)}$ köztes mátrix is ​​_____."},"a":{"en":"Diagonally dominant.","hu":"Átlósan domináns."}},
    {"q":{"en":"A square matrix is positive definite if it is _____ and $x^T A x > 0$ for all $x \\ne 0$.","hu":"Egy négyzetmátrix pozitív határozott, ha _____ és $x^T A x > 0$ minden $x \\ne 0$ esetén."},"a":{"en":"Symmetric.","hu":"Szimmetrikus."}},
    {"q":{"en":"Define a 'positive semi-definite' matrix based on the quadratic form $x^T A x$.","hu":"Határozzon meg egy „pozitív félig határozott” mátrixot a $x^T A x$ másodfokú alakzat alapján."},"a":{"en":"A symmetric matrix where $x^T A x \\ge 0$ for all $x$.","hu":"Egy szimmetrikus mátrix, ahol $x^T A x \\ge 0$ minden $x$-hez."}},
    {"q":{"en":"What condition involving 'principal minors' determines if a symmetric matrix is positive definite?","hu":"Milyen feltétel határozza meg, hogy egy szimmetrikus mátrix pozitív határozott?"},"a":{"en":"All of its upper left minors (principal minors) must have a positive determinant.","hu":"Minden bal felső kiskorúnak (fő kiskorúnak) pozitív determinánssal kell rendelkeznie."}},
    {"q":{"en":"If a symmetric matrix $\\mathbf{A}$ is positive definite, what is guaranteed about the pivot elements during Gaussian elimination without pivoting?","hu":"Ha egy $\\mathbf{A}$ szimmetrikus mátrix pozitív definit, mi garantált a pivot elemekre a Gauss-elimináció során elfordulás nélkül?"},"a":{"en":"The pivot elements are all positive.","hu":"A forgóelemek mind pozitívak."}},
    {"q":{"en":"Gaussian elimination on a symmetric positive definite matrix without pivoting is stable with respect to _____.","hu":"A Gauss-elimináció szimmetrikus pozitív határozott mátrixon elfordulás nélkül stabil _____-hoz képest."},"a":{"en":"Rounding errors.","hu":"Kerekítési hibák."}},
    {"q":{"en":"What is the purpose of 'row scaling' (sorkiegyenlítés) in numerical linear algebra?","hu":"Mi a sorkiegyenlítés célja a numerikus lineáris algebrában?"},"a":{"en":"To equalize the magnitudes of coefficients to reduce rounding errors.","hu":"Az együtthatók nagyságának kiegyenlítése a kerekítési hibák csökkentése érdekében."}},
    {"q":{"en":"In the context of row scaling, what does the matrix $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ represent?","hu":"A sorméretezéssel összefüggésben mit jelent a $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ mátrix?"},"a":{"en":"A diagonal matrix where each $d_i$ is a non-zero multiplier for the $i$-th equation.","hu":"Egy átlós mátrix, ahol minden $d_i$ a $i$-edik egyenlet nullától eltérő szorzója."}},
    {"q":{"en":"According to the strategy for row scaling, what is a common choice for $s_i$ to normalize coefficients?","hu":"A sorskálázási stratégia szerint mi a gyakori választás a $s_i$ számára az együtthatók normalizálására?"},"a":{"en":"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$.","hu":"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$."}},
    {"q":{"en":"To avoid introducing new rounding errors during row scaling, what specific values should the multipliers $d_i$ take?","hu":"Milyen konkrét értékeket kell felvenniük a $d_i$ szorzóknak, hogy elkerüljék az új kerekítési hibákat a sorméretezés során?"},"a":{"en":"They should be powers of the computer's number representation base $\\beta$.","hu":"Ezeknek a számítógép $\\beta$ számábrázolási alapjának hatványainak kell lenniük."}},
    {"q":{"en":"What is 'implicit row scaling' in Gaussian elimination?","hu":"Mit jelent az „implicit sorskálázás” a Gauss-eliminációban?"},"a":{"en":"A method where scale factors (weights) are used only to select pivots, without actually scaling the matrix elements.","hu":"Olyan módszer, ahol a skálafaktorokat (súlyokat) csak a pivotok kiválasztására használják, a mátrixelemek tényleges méretezése nélkül."}},
    {"q":{"en":"According to Theorem 3.30, if row scaling does not change the pivot selections, how do the numerical solutions of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ and $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ compare?","hu":"A 3.30. Tétel szerint, ha a sorméretezés nem változtatja meg a pivot-kiválasztást, hogyan viszonyulnak a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ és $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ numerikus megoldásai?"},"a":{"en":"They will be exactly the same.","hu":"Pontosan ugyanazok lesznek."}},
    {"q":{"en":"In Algorithm 3.31, how is the pivot row index $l$ chosen using implicit scaling?","hu":"Hogyan történik a 3.31-es algoritmusban a $l$ pivot row index kiválasztása implicit skálázással?"},"a":{"en":"By finding the index $l$ that maximizes the ratio $\\frac{|a_{ik}|}{s_i}$ for $k \\le i \\le n$.","hu":"Ha megtalálja a $l$ indexet, amely maximalizálja a $\\frac{|a_{ik}|}{s_i}$ arányt a $k \\le i \\le n$ esetében."}},
    {"q":{"en":"Why might a programmer use a pointer vector $m[i]$ to handle row swaps instead of moving actual matrix rows?","hu":"Miért használhat egy programozó egy $m[i]$ mutatóvektort a sorcserék kezelésére, ahelyett, hogy tényleges mátrixsorokat mozgatna?"},"a":{"en":"To reduce the number of operations, as swapping elements in a small vector is faster than swapping entire matrix rows.","hu":"A műveletek számának csökkentése érdekében, mivel az elemek felcserélése egy kis vektorban gyorsabb, mint a teljes mátrixsorok felcserélése."}},
    {"q":{"en":"If $m[i]$ is used as a row index pointer vector, how is the matrix element $a_{ij}$ accessed?","hu":"Ha a $m[i]$-t sorindexmutató-vektorként használjuk, hogyan érhető el a $a_{ij}$ mátrixelem?"},"a":{"en":"As $a[m[i], j]$.","hu":"Mint $a[m[i], j]$."}},
    {"q":{"en":"The proof for the invertibility of diagonally dominant matrices utilizes the _____ inequality.","hu":"Az átlósan domináns mátrixok invertálhatóságának bizonyítása a _____ egyenlőtlenséget használja fel."},"a":{"en":"Triangle.","hu":"Háromszög."}},
    {"q":{"en":"What is the requirement for a matrix to be 'negative definite'?","hu":"Mi a követelmény, hogy egy mátrix „negatív határozott” legyen?"},"a":{"en":"It must be symmetric and $x^T A x < 0$ for all $x \\ne 0$.","hu":"Szimmetrikusnak kell lennie, és minden $x \\ne 0$ esetében $x^T A x < 0$."}},
    {"q":{"en":"In complete pivoting, if the maximum absolute value is located at $a_{lm}$, which column swap is performed at step $k$?","hu":"Teljes elforgatás esetén, ha a maximális abszolút érték a $a_{lm}$ ponton található, melyik oszlopcsere történik a $k$ lépésben?"},"a":{"en":"The $k$-th column is swapped with the $m$-th column.","hu":"A $k$-edik oszlop fel van cserélve a $m$-edik oszlopra."}},
    {"q":{"en":"Is it possible for Gaussian elimination on a positive definite matrix to result in a non-positive pivot element?","hu":"Lehetséges, hogy a Gauss-elimináció pozitív határozott mátrixon nem pozitív pivot elemet eredményez?"},"a":{"en":"No, if the matrix is positive definite, the pivots will always be positive.","hu":"Nem, ha a mátrix pozitív határozott, a pivotok mindig pozitívak lesznek."}},
    {"q":{"en":"In Algorithm 3.31, what value does $s_i$ store after the weights calculation loop?","hu":"A 3.31-es algoritmusban milyen értéket tárol a $s_i$ a súlyszámítási ciklus után?"},"a":{"en":"The maximum absolute value found in row $i$ of the coefficient matrix.","hu":"Az együtthatómátrix $i$ sorában található maximális abszolút érték."}},
    {"q":{"en":"What does the expression $l_{ik} \\leftarrow a_{ik}/a_{kk}$ calculate in the Gaussian elimination algorithm?","hu":"Mit számít ki a $l_{ik} \\leftarrow a_{ik}/a_{kk}$ kifejezés a Gauss-eliminációs algoritmusban?"},"a":{"en":"The multiplier used to eliminate the element in the $i$-th row and $k$-th column.","hu":"A $i$-edik sor és a $k$-adik oszlop elemének kiküszöbölésére használt szorzó."}},
    {"q":{"en":"Concept: Principal Minor.","hu":"Koncepció: fő-moll."},"a":{"en":"Definition: The determinant of a sub-matrix formed by the first $i$ rows and first $i$ columns. Example: $\\det(a_{11})$ is the first principal minor.","hu":"Definíció: Az első $i$ sorok és első $i$ oszlopok által alkotott almátrix determinánsa. Példa: A $\\det(a_{11})$ az első fő moll."}},
    {"q":{"en":"What is the effect of significant magnitude differences in matrix coefficients on numerical calculations?","hu":"Milyen hatással vannak a mátrixegyütthatók jelentős nagyságrendi különbségei a numerikus számításokra?"},"a":{"en":"The rounding error may increase during the calculation.","hu":"A kerekítési hiba a számítás során növekedhet."}},
    {"q":{"en":"If a matrix is symmetric, what property allows checking for positive definiteness using only determinants?","hu":"Ha egy mátrix szimmetrikus, milyen tulajdonság teszi lehetővé a pozitív meghatározottság ellenőrzését csak determinánsok használatával?"},"a":{"en":"Sylvester's criterion (the requirement that all principal minors be positive).","hu":"Sylvester-kritérium (az a követelmény, hogy minden fő kiskorú pozitív legyen)."}},
    {"q":{"en":"Why is the base $\\beta$ used in scaling (e.g., $b_{ij} := a_{ij}/\\beta^{r_i}$)?","hu":"Miért használják az alap $\\beta$-t a méretezéshez (pl. $b_{ij}:= a_{ij}/\\beta^{r_i}$)?"},"a":{"en":"Because division by the base in floating-point arithmetic does not introduce rounding errors.","hu":"Mivel a bázissal való osztás a lebegőpontos aritmetikában nem vezet kerekítési hibákhoz."}},
    {"q":{"en":"How does the 'visszahelyettesítés' (back-substitution) step in Algorithm 3.31 find the value of $x_i$?","hu":"Hogyan találja meg a 'visszahelyettesítés' lépés a 3.31-es algoritmusban a $x_i$ értékét?"},"a":{"en":"By subtracting the sum of known variable products from the constant term and dividing by the diagonal coefficient $a_{ii}$.","hu":"Az ismert változószorzatok összegének kivonásával a konstans tagból, és elosztva a $a_{ii}$ átló együtthatóval."}},
    {"q":{"en":"In the complete pivoting example, why was the value $4$ chosen as the first pivot?","hu":"A teljes elforgatási példában miért a $4$ értéket választották első pivotnak?"},"a":{"en":"Because $|4|$ was the maximum absolute value among all coefficients in the $4 \\times 4$ system.","hu":"Mivel a $|4|$ volt a maximális abszolút érték az összes együttható között a $4 \\times 4$ rendszerben."}},
    {"q":{"en":"Under what condition is complete pivoting not strictly necessary for numerical stability?","hu":"Milyen feltételek mellett nem feltétlenül szükséges a teljes forgás a numerikus stabilitáshoz?"},"a":{"en":"When the matrix is row diagonally dominant or symmetric positive definite.","hu":"Ha a mátrix sorátlósan domináns vagy szimmetrikus pozitív határozott."}},
    {"q":{"en":"What does $x^T A x$ represent in the context of defining matrix definiteness?","hu":"Mit jelent a $x^T A x$ a mátrix meghatározottságának meghatározásával összefüggésben?"},"a":{"en":"A quadratic form.","hu":"Kvadratikus forma."}},
    {"q":{"en":"True or False: Row diagonal dominance implies that $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$.","hu":"Igaz vagy hamis: A sorátlós dominancia azt jelenti, hogy a $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$."},"a":{"en":"False; the definition requires a strict inequality ($>$).","hu":"Hamis; a definíció szigorú egyenlőtlenséget igényel ($>$)."}},
    {"q":{"en":"What is the index range for calculating the sum in the row diagonal dominance definition?","hu":"Mi az indextartomány az összeg kiszámításához a sordiagonális dominancia definícióban?"},"a":{"en":"$j = 1, \\ldots, n$ such that $j \\ne i$.","hu":"$j = 1, \\ldots, n$ úgy, hogy a $j \\ne i$."}},
    {"q":{"en":"If a matrix $\\mathbf{A}$ is not row diagonally dominant, does it necessarily mean it is not invertible?","hu":"Ha egy $\\mathbf{A}$ mátrix nem domináns a sor átlósan, akkor ez szükségszerűen azt jelenti, hogy nem invertálható?"},"a":{"en":"No, diagonal dominance is a sufficient but not necessary condition for invertibility.","hu":"Nem, az átlós dominancia elégséges, de nem szükséges feltétele a megfordíthatóságnak."}},
    {"q":{"en":"At step $k$ of Gaussian elimination, row $l$ is the row that contains the _____ absolute value element among candidate pivot rows.","hu":"A Gauss-elimináció $k$ lépésében a $l$ sor az a sor, amely a _____ abszolút érték elemet tartalmazza a jelölt pivot sorok között."},"a":{"en":"Maximum.","hu":"Maximális."}},
    {"q":{"en":"How many total determinants must be positive to confirm a $5 \\times 5$ matrix is positive definite?","hu":"Hány összes determinánsnak kell pozitívnak lennie ahhoz, hogy megerősítsük, hogy a $5 \\times 5$ mátrix pozitív határozott?"},"a":{"en":"Five determinants (the $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ and $5\\times5$ upper-left minors).","hu":"Öt meghatározó tényező (a $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ és $5\\times5$ bal felső kiskorú)."}},
    {"q":{"en":"In the Hungarian text, what is the term used for 'complete pivoting'?","hu":"Mi a magyar szövegben a „teljes elforgatás” kifejezés?"},"a":{"en":"Teljes főelemkiválasztás.","hu":"Teljes főelemkiválasztás."}},
    {"q":{"en":"In the Hungarian text, 'sorkiegyenlítés' translates to what English numerical concept?","hu":"A magyar szövegben a 'sorkiegyenlítés' milyen angol numerikus fogalmat jelent?"},"a":{"en":"Row equilibration or row scaling.","hu":"Sorkiegyenlítés vagy sorskálázás."}},
    {"q":{"en":"What happens to the variable labels at the bottom of the matrix in the example when columns 1 and 4 are swapped?","hu":"Mi történik a mátrix alján lévő változócímkékkel a példában, ha az 1. és 4. oszlop felcserélődik?"},"a":{"en":"The label $x_1$ moves to column 4, and $x_4$ moves to column 1.","hu":"A $x_1$ címke a 4. oszlopba, a $x_4$ pedig az 1. oszlopba kerül."}},
    {"q":{"en":"What logic error is avoided by checking $|x_k| = \\max\\{|x_i|\\}$ in the diagonal dominance invertibility proof?","hu":"Milyen logikai hibát lehet elkerülni a $|x_k| = \\max\\{|x_i|\\}$ ellenőrzésével az átlós dominancia megfordíthatósági bizonyításában?"},"a":{"en":"It ensures $x_k \\ne 0$, allowing for the division necessary to reach the contradiction.","hu":"Ez biztosítja a $x_k \\ne 0$-t, lehetővé téve az ellentmondás eléréséhez szükséges felosztást."}},
    {"q":{"en":"Why is the multiplier in Gaussian elimination restricted to $k+1 \\le i \\le n$?","hu":"Miért korlátozódik a Gauss-elimináció szorzója $k+1 \\le i \\le n$-re?"},"a":{"en":"Because the purpose is to eliminate elements below the pivot position in the $k$-th column.","hu":"Mert a cél az, hogy a $k$-edik oszlop forgáspontja alatti elemeket kiküszöböljük."}},
    {"q":{"en":"In Algorithm 3.31, what constitutes the 'INPUT'?","hu":"A 3.31-es algoritmusban mi képezi az „INPUT”-ot?"},"a":{"en":"The augmented coefficient matrix $a_{ij}$ for $i=1 \\ldots n$ and $j=1 \\ldots n+1$.","hu":"A $a_{ij}$ kiterjesztett együttható mátrix a $i=1 \\ldots n$ és $j=1 \\ldots n+1$ számára."}},
    {"q":{"en":"The phrase 'stable with respect to rounding errors' implies that _____.","hu":"A „kerekítési hibák tekintetében stabil” kifejezés azt jelenti, hogy _____."},"a":{"en":"Small errors introduced by computer precision do not grow large enough to invalidate the result.","hu":"A számítógépes precizitás által okozott kis hibák nem nőnek elég nagyra ahhoz, hogy érvénytelenítsék az eredményt."}},
    {"q":{"en":"According to the transcript, how many options were there in the example for the first pivot if the max value was $4$?","hu":"Az átirat szerint hány opció volt a példában az első pivotnál, ha a max érték $4$ volt?"},"a":{"en":"Three options (at different positions in the matrix).","hu":"Három lehetőség (a mátrix különböző helyein)."}},
    {"q":{"en":"When a matrix is positive definite, the value $x^T A x$ is always _____.","hu":"Ha egy mátrix pozitív határozott, a $x^T A x$ érték mindig _____."},"a":{"en":"Positive.","hu":"Pozitív."}},
    {"q":{"en":"What is the summation formula used to calculate $x^T A x$?","hu":"Mi a $x^T A x$ kiszámításához használt összegzési képlet?"},"a":{"en":"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$.","hu":"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$."}},
    {"q":{"en":"Formula: Pivot scaling ratio in implicit partial pivoting.","hu":"Képlet: Pivot skálázási arány implicit részleges elforgatásban."},"a":{"en":"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$.","hu":"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$."}},
    {"q":{"en":"If a matrix is symmetric and all its eigenvalues are positive, it is likely to be _____.","hu":"Ha egy mátrix szimmetrikus, és minden sajátértéke pozitív, akkor valószínűleg _____."},"a":{"en":"Positive definite.","hu":"Pozitív határozott."}},
    {"q":{"en":"What is the primary motivation for using partial or complete pivoting during elimination?","hu":"Mi az elsődleges motiváció a részleges vagy teljes elforgatás használatára az elimináció során?"},"a":{"en":"To prevent division by zero or by very small numbers, which increases rounding error.","hu":"A nullával vagy nagyon kis számokkal való osztás elkerülése érdekében, ami növeli a kerekítési hibát."}}
  ],
  's34': [
    {"q":{"en":"What is the primary objective of Gauss–Jordan elimination regarding the coefficient matrix?","hu":"Mi a Gauss–Jordan elimináció elsődleges célja az együtthatómátrix tekintetében?"},"a":{"en":"To transform the coefficient matrix part of the augmented matrix into the identity matrix $I$.","hu":"A kiterjesztett mátrix együtthatómátrix részének átalakítása $I$ identitásmátrixmá."}},
    {"q":{"en":"In Gauss–Jordan elimination, into what form is the augmented matrix $(\\mathbf{A}, \\mathbf{b})$ converted?","hu":"A Gauss–Jordan eliminációban milyen formába alakítják át a $(\\mathbf{A}, \\mathbf{b})$ kiterjesztett mátrixot?"},"a":{"en":"The form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$.","hu":"A $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$ forma."}},
    {"q":{"en":"Once the augmented matrix is in the form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$, how is the solution vector $\\mathbf{x}$ determined?","hu":"Ha a kiterjesztett mátrix $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$ alakú, hogyan határozható meg a $\\mathbf{x}$ megoldásvektor?"},"a":{"en":"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$.","hu":"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$."}},
    {"q":{"en":"Gauss–Jordan elimination is described as a modified version of which existing method?","hu":"Melyik létező módszer módosított változataként írják le a Gauss–Jordan eliminációt?"},"a":{"en":"Gaussian elimination.","hu":"Gauss-elimináció."}},
    {"q":{"en":"What specific procedural step required in standard Gaussian elimination is eliminated in the Gauss–Jordan method?","hu":"Milyen konkrét eljárási lépést kell kiküszöbölni a standard Gauss-eliminációnál a Gauss–Jordan módszerrel?"},"a":{"en":"Backward substitution.","hu":"Visszafelé csere."}},
    {"q":{"en":"In the Gauss–Jordan algorithm, what is the range of the outer loop index $k$?","hu":"A Gauss–Jordan algoritmusban mekkora a $k$ külső hurokindex tartománya?"},"a":{"en":"$1$ to $n$.","hu":"$1$ - $n$."}},
    {"q":{"en":"During the elimination process for a pivot column $k$, which rows $i$ are processed?","hu":"A $k$ forgóoszlop eliminációs folyamata során mely $i$ sorok kerülnek feldolgozásra?"},"a":{"en":"All rows from $1$ to $n$ where $i \\ne k$.","hu":"Minden sor $1$-től $n$-ig, ahol $i \\ne k$."}},
    {"q":{"en":"What is the formula for calculating the multiplier $l_{ik}$ in the Gauss–Jordan algorithm?","hu":"Mi a képlet a $l_{ik}$ szorzó kiszámításához a Gauss–Jordan algoritmusban?"},"a":{"en":"$l_{ik} = a_{ik} / a_{kk}$.","hu":"$l_{ik} = a_{ik} / a_{kk}$."}},
    {"q":{"en":"What is the update rule for the element $a_{ij}$ within the elimination loops?","hu":"Mi a frissítési szabály a $a_{ij}$ elemre az eliminációs hurkon belül?"},"a":{"en":"$a_{ij} = a_{ij} - l_{ik} a_{kj}$.","hu":"$a_{ij} = a_{ij} - l_{ik} a_{kj}$."}},
    {"q":{"en":"In the update step $a_{ij} = a_{ij} - l_{ik} a_{kj}$, what is the range of the index $j$?","hu":"A $a_{ij} = a_{ij} - l_{ik} a_{kj}$ frissítési lépésben mekkora a $j$ index tartománya?"},"a":{"en":"$k+1$ to $n+1$.","hu":"$k+1$ - $n+1$."}},
    {"q":{"en":"How is each variable $x_i$ calculated in the final step of the algorithm?","hu":"Hogyan történik az egyes $x_i$ változók kiszámítása az algoritmus utolsó lépésében?"},"a":{"en":"$x_i = a_{i, n+1} / a_{ii}$.","hu":"$x_i = a_{i, n+1} / a_{ii}$."}},
    {"q":{"en":"What is the asymptotic time complexity of Gauss–Jordan elimination for multiplications and divisions?","hu":"Mekkora a Gauss–Jordan elimináció aszimptotikus időbonyolítása szorzásokhoz és osztásokhoz?"},"a":{"en":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$.","hu":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."}},
    {"q":{"en":"What is the asymptotic complexity of Gauss–Jordan elimination for additions and subtractions?","hu":"Mekkora a Gauss–Jordan elimináció aszimptotikus összetettsége összeadások és kivonások esetén?"},"a":{"en":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$.","hu":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."}},
    {"q":{"en":"According to the exercises, what is the exact number of multiplications and divisions needed for Gauss–Jordan elimination?","hu":"A gyakorlatok szerint pontosan hány szorzás és osztás szükséges a Gauss–Jordan kieséshez?"},"a":{"en":"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$.","hu":"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$."}},
    {"q":{"en":"How does the computational cost of Gauss–Jordan elimination compare to standard Gaussian elimination?","hu":"Hogyan viszonyul a Gauss–Jordan elimináció számítási költsége a standard Gauss-eliminációhoz?"},"a":{"en":"It is higher, requiring more calculations.","hu":"Ez magasabb, több számítást igényel."}},
    {"q":{"en":"What defines the 'diagonal form' resulting from the first set of nested loops in the algorithm?","hu":"Mi határozza meg az „átlós formát”, amely az algoritmus első beágyazott ciklusaiból adódik?"},"a":{"en":"A matrix where all elements $a_{ij}$ are zero if $i \\ne j$.","hu":"Egy mátrix, ahol minden $a_{ij}$ elem nulla, ha $i \\ne j$."}},
    {"q":{"en":"In the context of the provided examples, what are the solution values for the linear system?","hu":"Melyek a lineáris rendszer megoldási értékei a megadott példákkal összefüggésben?"},"a":{"en":"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$.","hu":"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$."}},
    {"q":{"en":"Which strategy can be combined with Gauss–Jordan elimination to improve numerical stability?","hu":"Melyik stratégia kombinálható a Gauss–Jordan eliminációval a numerikus stabilitás javítása érdekében?"},"a":{"en":"Pivoting strategies (partial or total).","hu":"Elforduló stratégiák (részleges vagy teljes)."}},
    {"q":{"en":"In Gauss–Jordan elimination with partial pivoting, what is the first step before eliminating a column?","hu":"Mi az első lépés a Gauss–Jordan eliminációban részleges elforgatással?"},"a":{"en":"Finding the maximum absolute value in the current column and interchanging the necessary rows.","hu":"A maximális abszolút érték megkeresése az aktuális oszlopban és a szükséges sorok felcserélése."}},
    {"q":{"en":"Why does Gauss–Jordan elimination allow for the solution to be read 'immediately'?","hu":"Miért teszi lehetővé a Gauss–Jordan elimináció a megoldás „azonnal” olvasását?"},"a":{"en":"Because the coefficient matrix is reduced to the identity matrix, leaving the solution in the last column.","hu":"Mivel az együttható mátrix az azonosságmátrixra redukálódik, így a megoldás az utolsó oszlopban marad."}},
    {"q":{"en":"The process of transforming the coefficient matrix to the identity matrix involves making elements zero both below and _____ the diagonal.","hu":"Az együtthatómátrix identitásmátrixmá alakításának folyamata magában foglalja az elemek nullázását mind az átló alatt, mind a _____."},"a":{"en":"Above.","hu":"Felett."}},
    {"q":{"en":"Gauss–Jordan elimination is specifically useful for performing calculations on which type of device?","hu":"A Gauss–Jordan elimináció melyik típusú készüléken különösen hasznos számításokhoz?"},"a":{"en":"A computer or calculator.","hu":"Számítógép vagy számológép."}},
    {"q":{"en":"What does the notation $(\\mathbf{A}, \\mathbf{b})$ represent in the source material?","hu":"Mit jelent a forrásanyagban a $(\\mathbf{A}, \\mathbf{b})$ jelölés?"},"a":{"en":"The augmented coefficient matrix of a linear system.","hu":"Lineáris rendszer kiterjesztett együtthatómátrixa."}},
    {"q":{"en":"If the multiplier $l_{ik}$ is applied to a row $i$ where $i < k$, which part of the matrix is being eliminated?","hu":"Ha a $l_{ik}$ szorzót egy olyan $i$ sorra alkalmazzuk, ahol $i < k$, a mátrix melyik része kerül kiküszöbölésre?"},"a":{"en":"The elements above the main diagonal.","hu":"A főátló feletti elemek."}},
    {"q":{"en":"If the multiplier $l_{ik}$ is applied to a row $i$ where $i > k$, which part of the matrix is being eliminated?","hu":"Ha a $l_{ik}$ szorzót egy olyan $i$ sorra alkalmazzuk, ahol $i > k$, a mátrix melyik része kerül kiküszöbölésre?"},"a":{"en":"The elements below the main diagonal.","hu":"A főátló alatti elemek."}},
    {"q":{"en":"In the provided algorithm, which variable represents the number of equations in the linear system?","hu":"A megadott algoritmusban melyik változó jelenti az egyenletek számát a lineáris rendszerben?"},"a":{"en":"$n$.","hu":"$n$."}},
    {"q":{"en":"What is the range of indices for the input augmented coefficient matrix $a_{ij}$?","hu":"Mekkora az indexek tartománya a $a_{ij}$ bemeneti kiterjesztett együtthatómátrixhoz?"},"a":{"en":"$i = 1, \\dots, n$ and $j = 1, \\dots, n+1$.","hu":"$i = 1, \\dots, n$ és $j = 1, \\dots, n+1$."}},
    {"q":{"en":"True or False: In Gauss–Jordan elimination, the coefficient matrix is always transformed into a triangular matrix as the final result.","hu":"Igaz vagy hamis: A Gauss–Jordan elimináció során az együtthatómátrix mindig háromszögmátrixsá alakul át végeredményként."},"a":{"en":"False.","hu":"Hamis."}},
    {"q":{"en":"What is the purpose of multiplying a row by the reciprocal of its diagonal element in the final stage of the algorithm?","hu":"Mi a célja egy sort megszorozni az átlós elemének reciprokával az algoritmus utolsó szakaszában?"},"a":{"en":"To convert the diagonal elements to ones, forming the identity matrix.","hu":"Az átlós elemeket egyesekké alakítani, kialakítva az identitásmátrixot."}},
    {"q":{"en":"The complexity of simple Gaussian elimination is roughly $\\frac{n^3}{3}$; what is the approximate complexity of Gauss–Jordan?","hu":"Az egyszerű Gauss-elimináció bonyolultsága nagyjából $\\frac{n^3}{3}$; mi a Gauss–Jordan hozzávetőleges összetettsége?"},"a":{"en":"$\\frac{n^3}{2}$.","hu":"$\\frac{n^3}{2}$."}},
    {"q":{"en":"In the step $l_{ik} \\leftarrow a_{ik}/a_{kk}$, what is the term $a_{kk}$ called?","hu":"A $l_{ik} \\leftarrow a_{ik}/a_{kk}$ lépésben hogyan hívják a $a_{kk}$ kifejezést?"},"a":{"en":"The pivot element.","hu":"A forgóelem."}},
    {"q":{"en":"What prevents the modification of previously zeroed columns in the step $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$?","hu":"Mi akadályozza meg a korábban nullázott oszlopok módosítását a $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$ lépésben?"},"a":{"en":"The fact that $a_{kj}$ is zero for $j < k$ in the pivot row (once processing reaches that column).","hu":"Az a tény, hogy a $a_{kj}$ nulla a $j < k$ esetében a pivot sorban (ha a feldolgozás eléri ezt az oszlopot)."}},
    {"q":{"en":"In Example 3.35, what happens to the element in the first row, second column ($a_{12}$) during the second iteration of $k$?","hu":"A 3.35. példában mi történik az első sor és a második oszlop elemével ($a_{12}$) a $k$ második iterációja során?"},"a":{"en":"It is reduced to zero using the second row as a reference.","hu":"A második sort referenciaként használva nullára csökken."}},
    {"q":{"en":"What is the Hungarian term for Gauss–Jordan elimination mentioned in the sources?","hu":"Mi a forrásokban említett Gauss–Jordan elimináció magyar kifejezése?"},"a":{"en":"Gauss–Jordan-elimináció.","hu":"Gauss–Jordan-elimináció."}},
    {"q":{"en":"Term: Partial Pivoting","hu":"Fogalom: Részleges elfordulás"},"a":{"en":"Definition: Selecting the largest available absolute value in a column to use as the pivot and swapping rows accordingly.","hu":"Definíció: Egy oszlopban a legnagyobb elérhető abszolút érték kiválasztása pivotként való használatra, és ennek megfelelően a sorok felcserélése."}},
    {"q":{"en":"Term: Identity Matrix","hu":"Fogalom: Identitásmátrix"},"a":{"en":"Definition: A square matrix where all elements on the main diagonal are ones and all other elements are zeros.","hu":"Definíció: Négyzetes mátrix, ahol a főátlón minden elem egy, a többi elem pedig nulla."}},
    {"q":{"en":"What is the result of the final loop: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?","hu":"Mi az utolsó ciklus eredménye: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?"},"a":{"en":"The normalization of the diagonal elements to one and the extraction of the solution values.","hu":"Az átlós elemek normalizálása egyre és a megoldási értékek kinyerése."}},
    {"q":{"en":"In the provided YouTube transcript, what is mentioned as the 'goal' of the Gauss-Jordan elimination?","hu":"A mellékelt YouTube-átiratban mi szerepel a Gauss-Jordan kiesés „céljaként”?"},"a":{"en":"To get the identity matrix in the last step of the coefficient matrix part.","hu":"Az identitásmátrix beszerzése az együtthatómátrix rész utolsó lépésében."}},
    {"q":{"en":"Why does the first column remain unchanged ($1, 0, 0, 0$) in later steps of the example elimination?","hu":"Miért marad az első oszlop változatlan ($1, 0, 0, 0$) a példa eltávolításának későbbi lépéseiben?"},"a":{"en":"Because the corresponding elements in the pivot rows used for subtraction are zero.","hu":"Mivel a kivonáshoz használt pivot sorok megfelelő elemei nullák."}},
    {"q":{"en":"If the algorithm successfully converts $(A, b)$ to $(I, x)$, what matrix property of $A$ was necessary?","hu":"Ha az algoritmus sikeresen konvertálja a $(A, b)$-t $(I, x)$-vé, akkor a $A$ milyen mátrixtulajdonságára volt szükség?"},"a":{"en":"$A$ must be non-singular (invertible).","hu":"A $A$ nem lehet egyes szám (invertálható)."}},
    {"q":{"en":"How does Gauss–Jordan elimination facilitate solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","hu":"Hogyan segíti elő a Gauss–Jordan elimináció a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer megoldását?"},"a":{"en":"By performing row operations until the equation reads $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$.","hu":"Sorműveletek végrehajtásával mindaddig, amíg az egyenlet be nem olvassa a $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$-t."}},
    {"q":{"en":"In the Hungarian source, what is the alternate name given for Gauss–Jordan-elimináció?","hu":"A magyar forrásban mi a Gauss–Jordan-elimináció alternatív neve?"},"a":{"en":"Jordan-elimináció.","hu":"Jordan-elimináció."}},
    {"q":{"en":"Concept: Time Complexity","hu":"Koncepció: Idő komplexitás"},"a":{"en":"Definition: The number of arithmetic operations required by an algorithm as a function of the input size $n$.","hu":"Definíció: Az algoritmus által igényelt aritmetikai műveletek száma a $n$ bemeneti méret függvényében."}},
    {"q":{"en":"In the context of the Gauss–Jordan algorithm, what does $a_{i, n+1}$ represent?","hu":"Mit jelent a $a_{i, n+1}$ a Gauss–Jordan algoritmus kontextusában?"},"a":{"en":"The element in the $i$-th row of the augmented part (the vector $\\mathbf{b}$).","hu":"A bővített rész $i$-edik sorában lévő elem (a $\\mathbf{b}$ vektor)."}},
    {"q":{"en":"In the partial pivoting example, why were rows 1 and 2 interchanged initially?","hu":"A részleges elforgatásos példában miért cserélték fel kezdetben az 1. és 2. sort?"},"a":{"en":"To move the largest absolute value in the first column ($2$) to the pivot position $a_{11}$.","hu":"Az első oszlop legnagyobb abszolút értékének mozgatása ($2$) a $a_{11}$ forgási pozícióba."}},
    {"q":{"en":"What happens to the row swap in partial pivoting if the maximum value is already on the diagonal?","hu":"Mi történik a sorcserével részleges elforgatáskor, ha a maximális érték már az átlón van?"},"a":{"en":"No row interchange is performed.","hu":"Nem történik sorcsere."}},
    {"q":{"en":"The solution $x_4 = -2$ in the examples is derived from which ratio in the final matrix?","hu":"A példákban szereplő $x_4 = -2$ megoldás melyik arányból származik a végső mátrixban?"},"a":{"en":"$a_{4,5} / a_{4,4}$ (specifically $\\frac{52}{5} / -\\frac{26}{5}$).","hu":"$a_{4,5} / a_{4,4}$ (konkrétan $\\frac{52}{5} / -\\frac{26}{5}$)."}},
    {"q":{"en":"In the YouTube transcript, what is the 'standard Gaussian elimination' end state?","hu":"A YouTube-átiratban mi a „standard Gauss-elimináció” végállapota?"},"a":{"en":"A triangular linear system.","hu":"Háromszög alakú lineáris rendszer."}},
    {"q":{"en":"How many loops are nested in the main 'diagonal form' conversion part of the algorithm?","hu":"Hány hurok van beágyazva az algoritmus fő „átlós forma” konverziós részébe?"},"a":{"en":"Three (indices $k$, $i$, and $j$).","hu":"Három ($k$, $i$ és $j$ index)."}},
    {"q":{"en":"What is the role of the 'if $i \\neq k condition in the algorithm?","hu":"Mi a szerepe az 'if $i \\neq k feltételnek az algoritmusban?"},"a":{"en":"It ensures that the pivot row itself is not modified during the elimination step for that column.","hu":"Biztosítja, hogy maga a pivot sor ne módosuljon az adott oszlop eltávolítási lépése során."}},
    {"q":{"en":"According to the transcript, which version of the method is specifically useful for numerical calculations on a computer?","hu":"Az átirat szerint a módszer melyik verziója kifejezetten hasznos a számítógépen végzett numerikus számításokhoz?"},"a":{"en":"Gauss–Jordan elimination with partial pivoting.","hu":"Gauss–Jordan elimináció részleges elforgatással."}},
    {"q":{"en":"In the examples, what value does the multiplier $l_{ik}$ have if $a_{ik}$ is already zero?","hu":"A példákban milyen értéke van a $l_{ik}$ szorzónak, ha a $a_{ik}$ már nulla?"},"a":{"en":"Zero, resulting in no change to row $i$ for that step.","hu":"Nulla, így az adott lépésnél nem változik a $i$ sor."}},
    {"q":{"en":"What does the superscript $(n-1)$ in $\\mathbf{b}^{(n-1)}$ signify?","hu":"Mit jelent a $\\mathbf{b}^{(n-1)}$ felső indexe, a $(n-1)$?"},"a":{"en":"The state of the vector $\\mathbf{b}$ after $n$ iterations of the elimination process.","hu":"A $\\mathbf{b}$ vektor állapota az eliminációs folyamat $n$ iterációi után."}},
    {"q":{"en":"Which index in $a_{ij}$ represents the column number?","hu":"A $a_{ij}$ melyik indexe jelenti az oszlop számát?"},"a":{"en":"$j$.","hu":"$j$."}},
    {"q":{"en":"Which index in $a_{ij}$ represents the row number?","hu":"A $a_{ij}$ melyik indexe jelenti a sorszámot?"},"a":{"en":"$i$.","hu":"$i$."}},
    {"q":{"en":"In the complexity term $\\mathcal{O}(n^2)$, what does the symbol $\\mathcal{O}$ represent?","hu":"Mit jelent a $\\mathcal{O}(n^2)$ összetettségi kifejezésben a $\\mathcal{O}$ szimbólum?"},"a":{"en":"Big O notation, indicating the upper bound of the growth rate for lower-order terms.","hu":"Nagy O jelölés, amely az alacsonyabb rendű tagok növekedési ütemének felső határát jelzi."}},
    {"q":{"en":"What is the resulting matrix type after the triple-nested loop but before the final normalization loop?","hu":"Mi az eredményül kapott mátrix típus a hármas beágyazott ciklus után, de a végső normalizációs ciklus előtt?"},"a":{"en":"A diagonal matrix.","hu":"Átlós mátrix."}},
    {"q":{"en":"In the YouTube explanation, what happens to the values in the first column when subtracting the second row from the first?","hu":"A YouTube magyarázatában mi történik az első oszlopban lévő értékekkel, ha kivonjuk a második sort az elsőből?"},"a":{"en":"They are unchanged because the second row has a zero in the first column.","hu":"Változatlanok, mert a második sorban az első oszlopban nulla szerepel."}},
    {"q":{"en":"The transition from $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$ is achieved through what type of operations?","hu":"A $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$-ről milyen típusú műveletekkel lehet áttérni?"},"a":{"en":"Elementary row operations.","hu":"Elemi sorműveletek."}},
    {"q":{"en":"If $n=3$, how many variables are being solved for in the algorithm?","hu":"Ha $n=3$, hány változóra van megoldva az algoritmus?"},"a":{"en":"Three ($x_1, x_2, x_3$).","hu":"Három ($x_1, x_2, x_3$)."}}
  ],
  's35': [
    {"q":{"en":"What is the algebraic definition of a tridiagonal square matrix $(a_{ij})$?","hu":"Mi a $(a_{ij})$ háromszögű négyzetmátrix algebrai meghatározása?"},"a":{"en":"$a_{ij} = 0$ for all $|i - j| > 1$.","hu":"$a_{ij} = 0$ minden $|i - j| > 1$-hez."}},
    {"q":{"en":"In a tridiagonal matrix, where are the only possible nonzero elements located?","hu":"Egy háromszögű mátrixban hol találhatók az egyetlen lehetséges nem nulla elem?"},"a":{"en":"The main diagonal and the diagonals immediately above and below it.","hu":"A főátló és a közvetlenül felette és alatta lévő átlók."}},
    {"q":{"en":"In the standard notation for tridiagonal systems, what does the vector $(d_i)$ represent?","hu":"A háromszög rendszerek szabványos jelölésében mit jelent a $(d_i)$ vektor?"},"a":{"en":"The elements of the main diagonal.","hu":"A főátló elemei."}},
    {"q":{"en":"In the standard notation for tridiagonal systems, what does the vector $(c_i)$ represent?","hu":"A háromszög rendszerek szabványos jelölésében mit jelent a $(c_i)$ vektor?"},"a":{"en":"The elements in the diagonal directly above the main diagonal (superdiagonal).","hu":"Az átlóban lévő elemek közvetlenül a főátló felett (superdiagonal)."}},
    {"q":{"en":"In the standard notation for tridiagonal systems, what does the vector $(a_i)$ represent?","hu":"A háromszög rendszerek szabványos jelölésében mit jelent a $(a_i)$ vektor?"},"a":{"en":"The elements in the diagonal directly below the main diagonal (subdiagonal).","hu":"Az átlóban lévő elemek közvetlenül a főátló alatt (alátló)."}},
    {"q":{"en":"How many total elements are in the subdiagonal vector $(a_i)$ for an $n \\times n$ tridiagonal matrix?","hu":"Hány elem van összesen a $(a_i)$ szubdiagonális vektorban egy $n \\times n$ háromszögű mátrix esetén?"},"a":{"en":"$n - 1$.","hu":"$n - 1$."}},
    {"q":{"en":"How many total elements are in the superdiagonal vector $(c_i)$ for an $n \\times n$ tridiagonal matrix?","hu":"Hány elem van összesen a $(c_i)$ szuperdiagonális vektorban egy $n \\times n$ háromszögű mátrix esetén?"},"a":{"en":"$n - 1$.","hu":"$n - 1$."}},
    {"q":{"en":"How many total elements are in the main diagonal vector $(d_i)$ for an $n \\times n$ tridiagonal matrix?","hu":"Hány elem van összesen a $(d_i)$ főátlóvektorban egy $n \\times n$ háromszögű mátrix esetén?"},"a":{"en":"$n$.","hu":"$n$."}},
    {"q":{"en":"What is the total storage area required to store the coefficients of an $n \\times n$ tridiagonal matrix?","hu":"Mekkora a teljes tárterület egy $n \\times n$ tridiagonális mátrix együtthatóinak tárolásához?"},"a":{"en":"$3n - 2$.","hu":"$3n - 2$."}},
    {"q":{"en":"What happens to the elements $a_i$ below the main diagonal during the specialized Gaussian elimination algorithm?","hu":"Mi történik a főátló alatti $a_i$ elemekkel a speciális Gauss-eliminációs algoritmus során?"},"a":{"en":"They become $0$.","hu":"$0$ lesz."}},
    {"q":{"en":"Which vector of coefficients remains unchanged during the elimination steps of the tridiagonal algorithm?","hu":"Melyik együtthatóvektor marad változatlan a tridiagonális algoritmus eliminációs lépései során?"},"a":{"en":"The superdiagonal vector $(c_i)$.","hu":"A $(c_i)$ szuperdiagonális vektor."}},
    {"q":{"en":"Which two vectors are overridden with new values during the elimination phase of the tridiagonal algorithm?","hu":"Melyik két vektort írják felül új értékkel a tridiagonális algoritmus eliminációs fázisában?"},"a":{"en":"$(d_i)$ and $(b_i)$.","hu":"$(d_i)$ és $(b_i)$."}},
    {"q":{"en":"In the elimination loop of the tridiagonal algorithm, what is the range of the index $i$?","hu":"A tridiagonális algoritmus eliminációs hurkában mekkora a $i$ index tartománya?"},"a":{"en":"From $2$ to $n$.","hu":"$2$-től $n$-ig."}},
    {"q":{"en":"Formula: What is the calculation for the temporary multiplier ($temp$) in the $i$-th elimination step?","hu":"Képlet: Mi a számítás az ideiglenes szorzóhoz ($temp$) a $i$-edik eliminációs lépésben?"},"a":{"en":"$temp \\leftarrow a_{i-1}/d_{i-1}$.","hu":"$temp \\leftarrow a_{i-1}/d_{i-1}$."}},
    {"q":{"en":"Formula: How is $d_i$ updated during the $i$-th step of the tridiagonal elimination phase?","hu":"Képlet: Hogyan frissül a $d_i$ a háromszög eliminációs fázis $i$-edik lépésében?"},"a":{"en":"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$.","hu":"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$."}},
    {"q":{"en":"Formula: How is the right-hand side value $b_i$ updated during the $i$-th step of the elimination phase?","hu":"Képlet: Hogyan frissül a jobb oldali $b_i$ érték az eliminációs fázis $i$-edik lépésében?"},"a":{"en":"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$.","hu":"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$."}},
    {"q":{"en":"In the backward substitution phase, how is the final variable $x_n$ calculated?","hu":"A visszafelé történő helyettesítési fázisban hogyan számítják ki a $x_n$ végső változót?"},"a":{"en":"$x_n \\leftarrow b_n/d_n$.","hu":"$x_n \\leftarrow b_n/d_n$."}},
    {"q":{"en":"Formula: How is $x_i$ calculated during the backward substitution phase for $i = n-1, \\ldots, 1$?","hu":"Képlet: Hogyan történik a $x_i$ kiszámítása a $i = n-1, \\ldots, 1$ visszafelé történő helyettesítési fázisában?"},"a":{"en":"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$.","hu":"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$."}},
    {"q":{"en":"What is the direction of the loop used in the backward substitution phase of the tridiagonal algorithm?","hu":"Milyen irányú a háromszög algoritmus visszafelé történő helyettesítési fázisában használt hurok?"},"a":{"en":"Decrementing from $n-1$ down to $1$.","hu":"Csökkenés $n-1$-ről $1$-re."}},
    {"q":{"en":"How many multiplications and divisions are required to solve a tridiagonal system of size $n$?","hu":"Hány szorzás és osztás szükséges egy $n$ méretű háromszögrendszer megoldásához?"},"a":{"en":"$5n - 4$.","hu":"$5n - 4$."}},
    {"q":{"en":"What is the computational complexity (multiplications/divisions) of the standard Gaussian elimination for a general matrix?","hu":"Mekkora a standard Gauss-elimináció számítási bonyolultsága (szorzások/osztások) általános mátrix esetén?"},"a":{"en":"$n^3/3$.","hu":"$n^3/3$."}},
    {"q":{"en":"Under what condition is the specialized tridiagonal Gaussian elimination algorithm guaranteed to work without pivoting?","hu":"Milyen feltételek mellett garantáltan működik a speciális háromszögű Gauss-elimináló algoritmus elfordulás nélkül?"},"a":{"en":"If the tridiagonal matrix $\\mathbf{A}$ is diagonally dominant.","hu":"Ha a $\\mathbf{A}$ tridiagonális mátrix átlósan domináns."}},
    {"q":{"en":"Why is pivoting generally avoided when solving tridiagonal systems?","hu":"Miért kerülik általában a forgatást a háromszög rendszerek megoldása során?"},"a":{"en":"Pivoting ruins the specific tridiagonal structure of the coefficient matrix.","hu":"Az elforgatás tönkreteszi az együtthatómátrix specifikus háromszög szerkezetét."}},
    {"q":{"en":"Concept: Band Matrix","hu":"Koncepció: Band Matrix"},"a":{"en":"Definition: A matrix where nonzero elements appear only in the main diagonal and a fixed number of diagonals above and below it.","hu":"Definíció: Olyan mátrix, amelyben a nullától eltérő elemek csak a főátlóban jelennek meg, és meghatározott számú átló felette és alatta."}},
    {"q":{"en":"In a band matrix where $a_{ij} = 0$ for $|i - j| > 2$, how many diagonals contain potentially nonzero elements?","hu":"Egy olyan sávmátrixban, ahol $a_{ij} = 0$ $|i - j| > 2$ esetén, hány átló tartalmaz potenciálisan nullától eltérő elemeket?"},"a":{"en":"Five diagonals (the main diagonal, two above, and two below).","hu":"Öt átló (a főátló, kettő fent és kettő lent)."}},
    {"q":{"en":"Which input vectors are required for the tridiagonal algorithm's elimination phase?","hu":"Milyen bemeneti vektorok szükségesek a tridiagonális algoritmus eliminációs fázisához?"},"a":{"en":"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ and $b_i$.","hu":"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ és $b_i$."}},
    {"q":{"en":"What is the Hungarian term for 'tridiagonal linear systems'?","hu":"Mi a magyar kifejezés a háromszögű lineáris rendszerekre?"},"a":{"en":"Tridiagonális egyenletrendszerek.","hu":"Tridiagonális egyenletrendszerek."}},
    {"q":{"en":"In the Hungarian source, what is the Hungarian word for the 'elimination' phase of the algorithm?","hu":"A magyar forrásban mi a magyar szó az algoritmus 'eliminációs' fázisára?"},"a":{"en":"Elimináció.","hu":"Elimináció."}},
    {"q":{"en":"In the Hungarian source, what is the Hungarian term for 'backward substitution'?","hu":"A magyar forrásban mi a magyar kifejezés a 'visszahelyettesítés' kifejezésre?"},"a":{"en":"Visszahelyettesítés.","hu":"Visszahelyettesítés."}},
    {"q":{"en":"What is the primary advantage of using $3n-2$ storage for a tridiagonal matrix instead of $n^2$?","hu":"Mi az elsődleges előnye a $3n-2$ tároló használatának háromszögű mátrixhoz a $n^2$ helyett?"},"a":{"en":"It significantly reduces the amount of memory needed for large systems.","hu":"Jelentősen csökkenti a nagy rendszerekben szükséges memória mennyiségét."}},
    {"q":{"en":"Cloze: In the tridiagonal algorithm, the values $c_i$ are _____ during the elimination process.","hu":"Close: A háromszög algoritmusban a $c_i$ értékek _____ az eliminációs folyamat során."},"a":{"en":"unchanged","hu":"változatlan"}},
    {"q":{"en":"Cloze: The standard Gaussian elimination requires $n^3/3$ operations, whereas the tridiagonal version requires only _____ operations.","hu":"Bezárás: A szabványos Gauss-elimináció $n^3/3$ műveleteket igényel, míg a háromszögű változat csak _____ műveleteket igényel."},"a":{"en":"$5n - 4$","hu":"$5n - 4$"}},
    {"q":{"en":"True or False: The tridiagonal algorithm is more efficient than standard Gaussian elimination for any matrix size $n > 1$.","hu":"Igaz vagy hamis: A háromszögű algoritmus bármely $n > 1$ mátrixméret esetén hatékonyabb, mint a szokásos Gauss-elimináció."},"a":{"en":"True (based on the $5n-4$ vs $n^3/3$ comparison).","hu":"Igaz (a $5n-4$ vs $n^3/3$ összehasonlítás alapján)."}},
    {"q":{"en":"What is the index $i$ for the first $a$ element used in the algorithm ($a_{i-1}$ when $i=2$)?","hu":"Mi az algoritmusban használt első $a$ elem $i$ indexe ($a_{i-1}$, amikor $i=2$)?"},"a":{"en":"$a_1$.","hu":"$a_1$."}},
    {"q":{"en":"In the backward substitution step for $x_i$, what variable must already be computed?","hu":"A $x_i$ visszafelé történő helyettesítési lépésében melyik változót kell már kiszámítani?"},"a":{"en":"$x_{i+1}$.","hu":"$x_{i+1}$."}},
    {"q":{"en":"Which theorem is cited as the basis for performing the algorithm without pivoting on diagonally dominant matrices?","hu":"Melyik tétel szolgál alapul az algoritmus diagonálisan domináns mátrixokon való forgatás nélküli végrehajtásához?"},"a":{"en":"Theorem 3.32.","hu":"3.32. tétel."}},
    {"q":{"en":"The storage requirement $3n-2$ accounts for $n$ diagonal elements and how many off-diagonal elements?","hu":"A $3n-2$ tárolási igény a $n$ átlós elemeket és hány nem átlós elemet tartalmaz?"},"a":{"en":"$2n - 2$ off-diagonal elements ($n-1$ above and $n-1$ below).","hu":"$2n - 2$ nem átlós elemek ($n-1$ fent és $n-1$ lent)."}},
    {"q":{"en":"What is the relationship between $n$ and the number of rows in the coefficient matrix?","hu":"Mi a kapcsolat a $n$ és az együtthatómátrix sorainak száma között?"},"a":{"en":"$n$ is the number of rows (and columns) in the square matrix.","hu":"A $n$ a sorok (és oszlopok) száma a négyzetmátrixban."}},
    {"q":{"en":"Identify the vector: used as the denominator in the calculation of $temp$.","hu":"Határozza meg a vektort: ​​használjuk nevezőként a $temp$ számításánál."},"a":{"en":"The updated main diagonal vector $(d_i)$.","hu":"A frissített főátlóvektor $(d_i)$."}},
    {"q":{"en":"Identify the vector: its elements are multiplied by $temp$ and subtracted from $d_i$.","hu":"Határozza meg a vektort: ​​elemeit megszorozzuk $temp$-vel, és kivonjuk a $d_i$-ből."},"a":{"en":"The superdiagonal vector $(c_i)$.","hu":"A $(c_i)$ szuperdiagonális vektor."}},
    {"q":{"en":"In the context of the tridiagonal system, what does the vector $(b_i)$ represent?","hu":"Mit jelent a háromszögrendszer összefüggésében a $(b_i)$ vektor?"},"a":{"en":"The right-hand side constants of the linear equations.","hu":"A lineáris egyenletek jobb oldali állandói."}},
    {"q":{"en":"What is the result of the expression $|i-j| > 1$ for elements on the main diagonal?","hu":"Mi az eredménye a $|i-j| > 1$ kifejezésnek a főátlón lévő elemekre?"},"a":{"en":"It is false, as $|i-i| = 0$.","hu":"Ez hamis, mint a $|i-i| = 0$."}},
    {"q":{"en":"In the Hungarian source, what is the Hungarian term for 'diagonal dominance'?","hu":"Mi a magyar forrásban az 'átlós dominancia' magyar kifejezés?"},"a":{"en":"Diagonálisan domináns.","hu":"Diagonálisan domináns."}},
    {"q":{"en":"According to the transcript, why is it better to formulate a special version of a general algorithm?","hu":"Az átirat szerint miért jobb egy általános algoritmus speciális változatát megfogalmazni?"},"a":{"en":"It requires significantly fewer arithmetic operations for specialized problems.","hu":"Speciális feladatokhoz lényegesen kevesebb aritmetikai műveletre van szükség."}},
    {"q":{"en":"What happens to the structure of the matrix if pivoting is applied to a tridiagonal system?","hu":"Mi történik a mátrix szerkezetével, ha a forgást egy háromszög rendszerre alkalmazzuk?"},"a":{"en":"The structure is ruined (lost).","hu":"A szerkezet tönkrement (elveszett)."}},
    {"q":{"en":"What is the leading term in the operation count for the specialized tridiagonal algorithm?","hu":"Mi a vezető tag a speciális tridiagonális algoritmus műveletszámában?"},"a":{"en":"$5n$.","hu":"$5n$."}},
    {"q":{"en":"In the provided Exercise 2, what is the value of the coefficient for $x_1$ in the first equation?","hu":"A megadott 2. gyakorlatban mekkora a $x_1$ együttható értéke az első egyenletben?"},"a":{"en":"1.","hu":"1."}},
    {"q":{"en":"In the provided Exercise 2, what is the value of the right-hand side constant $b_1$?","hu":"A megadott 2. gyakorlatban mekkora a jobb oldali $b_1$ konstans értéke?"},"a":{"en":"1.5.","hu":"1.5."}},
    {"q":{"en":"In the provided Exercise 2, what is the coefficient $c_1$ (element above the diagonal in the first row)?","hu":"A megadott 2. gyakorlatban mekkora a $c_1$ együttható (az első sorban az átló feletti elem)?"},"a":{"en":"-0.5.","hu":"-0,5."}},
    {"q":{"en":"In the provided Exercise 2, what is the coefficient $a_1$ (element below the diagonal in the second row)?","hu":"A megadott 2. gyakorlatban mekkora a $a_1$ együttható (az átló alatti elem a második sorban)?"},"a":{"en":"0.5.","hu":"0.5."}},
    {"q":{"en":"How many equations are in the system presented in Exercise 2?","hu":"Hány egyenlet van a 2. gyakorlatban bemutatott rendszerben?"},"a":{"en":"6.","hu":"6."}},
    {"q":{"en":"What is the half-bandwidth $k$ of a tridiagonal matrix?","hu":"Mekkora egy háromszögű mátrix félsávszélességű $k$?"},"a":{"en":"$k = 1$.","hu":"$k = 1$."}},
    {"q":{"en":"What is the storage requirement for a general $n \\times n$ matrix compared to a tridiagonal one?","hu":"Mi az általános $n \\times n$ mátrix tárolási igénye egy háromszögű mátrixhoz képest?"},"a":{"en":"$n^2$ vs $3n - 2$.","hu":"$n^2$ vs $3n - 2$."}},
    {"q":{"en":"During backward substitution, which $x$ value is used to calculate $x_{n-1}$?","hu":"A visszafelé történő helyettesítés során melyik $x$ értéket használják a $x_{n-1}$ kiszámításához?"},"a":{"en":"$x_n$.","hu":"$x_n$."}},
    {"q":{"en":"Cloze: A matrix is tridiagonal if $a_{ij} = 0$ for all $|i - j| > \\_\\_\\_\\_\\_$.","hu":"Bezárás: A mátrix háromszögű, ha $a_{ij} = 0$ az összes $|i - j| > \\_\\_\\_\\_\\_$ esetében."},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"Formula: How is $x_i$ updated if $c_i = 0$ in a diagonal matrix (a specific case of tridiagonal)?","hu":"Képlet: Hogyan frissül a $x_i$, ha a $c_i = 0$ egy átlós mátrixban (a háromszög speciális esete)?"},"a":{"en":"$x_i = b_i / d_i$.","hu":"$x_i = b_i / d_i$."}},
    {"q":{"en":"In the elimination loop, why is $d_{i-1}$ used in the denominator?","hu":"Az eliminációs ciklusban miért szerepel a nevezőben a $d_{i-1}$?"},"a":{"en":"It is the pivot element for the current elimination step.","hu":"Ez az aktuális eliminációs lépés forgóeleme."}},
    {"q":{"en":"What is the value of $a_i$ for $i=n$?","hu":"Mennyi a $a_i$ értéke $i=n$ esetén?"},"a":{"en":"It is undefined or zero, as there are only $n-1$ subdiagonal elements.","hu":"Meghatározatlan vagy nulla, mivel csak $n-1$ átlós elemek vannak."}},
    {"q":{"en":"What is the value of $c_i$ for $i=n$?","hu":"Mennyi a $c_i$ értéke $i=n$ esetén?"},"a":{"en":"It is undefined or zero, as there are only $n-1$ superdiagonal elements.","hu":"Nem definiált vagy nulla, mivel csak $n-1$ szuperdiagonális elemek vannak."}},
    {"q":{"en":"If $n=100$, what is the storage area needed for a tridiagonal matrix?","hu":"Ha $n=100$, mekkora tárterület szükséges egy háromszögű mátrixhoz?"},"a":{"en":"298 ($3 \\cdot 100 - 2$).","hu":"298 ($3 \\cdot 100 - 2$)."}},
    {"q":{"en":"If $n=100$, how many operations ($5n-4$) are needed for the tridiagonal algorithm?","hu":"Ha $n=100$, hány művelet ($5n-4$) szükséges a háromszög algoritmushoz?"},"a":{"en":"496 multiplications/divisions.","hu":"496 szorzás/osztás."}}
  ],
  's36': [
    {"q":{"en":"What are 'simultaneous linear systems'?","hu":"Mik azok a „szimultán lineáris rendszerek”?"},"a":{"en":"A set of linear systems that share the same coefficient matrix but have different right-hand sides.","hu":"Lineáris rendszerek halmaza, amelyek ugyanazt az együtthatómátrixot használják, de különböző jobb oldaluk van."}},
    {"q":{"en":"What is the general form for representing $m$ simultaneous linear systems individually?","hu":"Mi a $m$ szimultán lineáris rendszerek egyenkénti ábrázolásának általános formája?"},"a":{"en":"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for $i = 1, \\dots, m$.","hu":"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ $i = 1, \\dots, m$-hez."}},
    {"q":{"en":"How is a set of simultaneous linear systems written concisely as a single matrix equation?","hu":"Hogyan írható fel tömören egyetlen mátrixegyenletként egy szimultán lineáris rendszerek halmaza?"},"a":{"en":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$","hu":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"}},
    {"q":{"en":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{B}$ represent?","hu":"Mit jelent a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben a $\\mathbf{B}$ mátrix $i$-edik oszlopa?"},"a":{"en":"The right-hand side vector $\\mathbf{b}^{(i)}$ of the $i$-th system.","hu":"A $i$-edik rendszer jobb oldali $\\mathbf{b}^{(i)}$ vektora."}},
    {"q":{"en":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{X}$ represent?","hu":"Mit jelent a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben a $\\mathbf{X}$ mátrix $i$-edik oszlopa?"},"a":{"en":"The solution vector $\\mathbf{x}^{(i)}$ of the $i$-th system.","hu":"A $i$-edik rendszer $\\mathbf{x}^{(i)}$ megoldási vektora."}},
    {"q":{"en":"What are the dimensions of the matrix $\\mathbf{B}$ if there are $n$ equations and $m$ right-hand side vectors?","hu":"Mekkora a $\\mathbf{B}$ mátrix mérete, ha vannak $n$ egyenletek és $m$ jobb oldali vektorok?"},"a":{"en":"$n \\times m$","hu":"$n \\times m$"}},
    {"q":{"en":"What are the dimensions of the solution matrix $\\mathbf{X}$ in a simultaneous linear system with $n$ variables and $m$ systems?","hu":"Milyen méretei vannak a $\\mathbf{X}$ megoldásmátrixnak egy szimultán lineáris rendszerben $n$ változókkal és $m$ rendszerekkel?"},"a":{"en":"$n \\times m$","hu":"$n \\times m$"}},
    {"q":{"en":"Why can pivoting for simultaneous systems be performed on a single augmented matrix?","hu":"Miért hajtható végre az egyidejű rendszerek pivoting egyetlen kiterjesztett mátrixon?"},"a":{"en":"Pivoting depends only on the coefficient matrix $\\mathbf{A}$, which is the same for all systems.","hu":"Az elforgatás csak a $\\mathbf{A}$ együtthatómátrixtól függ, amely minden rendszernél azonos."}},
    {"q":{"en":"What are the dimensions of the augmented matrix used to solve $m$ simultaneous systems of $n$ equations?","hu":"Melyek a $m$ szimultán $n$ egyenletrendszerek megoldására használt kiterjesztett mátrix méretei?"},"a":{"en":"$n \\times (n+m)$","hu":"$n \\times (n+m)$"}},
    {"q":{"en":"Performing Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ results in a matrix of what form?","hu":"A Gauss-Jordan-elimináció végrehajtása a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixon milyen formájú mátrixot eredményez?"},"a":{"en":"$(\\mathbf{I}, \\mathbf{X})$","hu":"$(\\mathbf{I}, \\mathbf{X})$"}},
    {"q":{"en":"Where does the solution $\\mathbf{X}$ appear after Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","hu":"Hol jelenik meg a $\\mathbf{X}$ megoldás a Gauss-Jordan-elimináció után a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixon?"},"a":{"en":"In the last $m$ columns.","hu":"Az utolsó $m$ oszlopokban."}},
    {"q":{"en":"What is the operation count for Gaussian elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?","hu":"Mennyi a Gauss-elimináció műveletszáma a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$ kiterjesztett mátrixon?"},"a":{"en":"$n^3/3 + mn^2 - n/3$","hu":"$n^3/3 + mn^2 - n/3$"}},
    {"q":{"en":"In the Gaussian elimination operation count $n^3/3 + mn^2 - n/3$, what do the operations represent?","hu":"Mit jelentenek a műveletek a $n^3/3 + mn^2 - n/3$ Gauss-eliminációs műveletszámban?"},"a":{"en":"The number of multiplications and divisions.","hu":"A szorzások és osztások száma."}},
    {"q":{"en":"What is the operation count for Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?","hu":"Mennyi a műveletszám a Gauss-Jordan-eliminációhoz a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$ kiterjesztett mátrixon?"},"a":{"en":"$n^3/2 + mn^2 - n/2$","hu":"$n^3/2 + mn^2 - n/2$"}},
    {"q":{"en":"Which term in the operation count formulas scales linearly with the number of systems $m$?","hu":"A műveletszámláló formulák melyik tagja skálázódik lineárisan a $m$ rendszerek számával?"},"a":{"en":"$mn^2$","hu":"$mn^2$"}},
    {"q":{"en":"How does the $n^3$ term in the operation count compare between Gaussian and Gauss-Jordan elimination for simultaneous systems?","hu":"Hogyan viszonyul a $n^3$ kifejezés a műveletek számában a Gauss- és Gauss-Jordan-eliminációhoz egyidejű rendszerek esetén?"},"a":{"en":"Gauss-Jordan has a higher $n^3$ cost ($n^3/2$) than Gaussian elimination ($n^3/3$).","hu":"A Gauss-Jordan $n^3$ költsége magasabb ($n^3/2$), mint a Gauss-elimináció ($n^3/3$)."}},
    {"q":{"en":"Algorithm 3.37 can be reformulated to solve simultaneous systems with what specific structure?","hu":"A 3.37-es algoritmus újrafogalmazható egyidejű rendszerek megoldására, milyen konkrét szerkezettel?"},"a":{"en":"Tridiagonal linear systems.","hu":"Háromszögű lineáris rendszerek."}},
    {"q":{"en":"The system of equations $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ is equivalent to the matrix equation _____.","hu":"A $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ egyenletrendszer ekvivalens a _____ mátrixegyenlettel."},"a":{"en":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$","hu":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"}},
    {"q":{"en":"Concept: Augmented Matrix $(\\mathbf{A}, \\mathbf{B})$","hu":"Koncepció: kiterjesztett mátrix $(\\mathbf{A}, \\mathbf{B})$"},"a":{"en":"Definition: A combined matrix where the coefficient matrix $\\mathbf{A}$ is followed by the matrix of all right-hand sides $\\mathbf{B}$.","hu":"Definíció: Kombinált mátrix, ahol a $\\mathbf{A}$ együtthatómátrixot követi az összes jobb oldali $\\mathbf{B}$ mátrix."}},
    {"q":{"en":"In the augmented matrix $(\\mathbf{A}, \\mathbf{B})$, what does the sub-matrix $\\mathbf{A}$ represent?","hu":"Mit jelent a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixban a $\\mathbf{A}$ almátrix?"},"a":{"en":"The shared coefficient matrix for all systems.","hu":"Megosztott együttható mátrix minden rendszerhez."}},
    {"q":{"en":"In the context of simultaneous systems, what matrix results from the $i$-th column product $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?","hu":"A szimultán rendszerek kontextusában milyen mátrix adódik a $i$-edik oszloptermékből $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?"},"a":{"en":"The $i$-th column of matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(i)}$).","hu":"A $\\mathbf{B}$ mátrix $i$-edik oszlopa (a $\\mathbf{b}^{(i)}$ vektor)."}},
    {"q":{"en":"What matrix does the coefficient matrix $\\mathbf{A}$ become after successful Gauss-Jordan elimination on an augmented matrix?","hu":"Milyen mátrixsá válik a $\\mathbf{A}$ együtthatómátrix sikeres Gauss-Jordan-elimináció után egy kiterjesztett mátrixon?"},"a":{"en":"The identity matrix $\\mathbf{I}$.","hu":"A $\\mathbf{I}$ identitásmátrix."}},
    {"q":{"en":"If $\\mathbf{A}$ is $n \\times n$, how many rows does the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ have?","hu":"Ha a $\\mathbf{A}$ a $n \\times n$, hány sora van a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixnak?"},"a":{"en":"$n$ rows","hu":"$n$ sorok"}},
    {"q":{"en":"If $\\mathbf{B}$ is a matrix of $m$ column vectors, what is the width of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","hu":"Ha a $\\mathbf{B}$ $m$ oszlopvektorok mátrixa, mekkora a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrix szélessége?"},"a":{"en":"$n + m$ columns","hu":"$n + m$ oszlopok"}},
    {"q":{"en":"The solution matrix $\\mathbf{X}$ is composed of columns $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$, where each column is a _____.","hu":"A $\\mathbf{X}$ megoldásmátrix $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ oszlopokból áll, ahol minden oszlop egy _____."},"a":{"en":"solution vector for the corresponding right-hand side $\\mathbf{b}^{(i)}$","hu":"megoldásvektor a megfelelő jobb oldali $\\mathbf{b}^{(i)}$-hez"}},
    {"q":{"en":"When performing elimination, why is it efficient to solve simultaneous systems together rather than separately?","hu":"Az elimináció során miért hatékony a szimultán rendszereket együtt megoldani, nem pedig külön-külön?"},"a":{"en":"The elimination steps on the coefficient matrix only need to be performed once.","hu":"Az együtthatómátrixon az eliminációs lépéseket csak egyszer kell végrehajtani."}},
    {"q":{"en":"According to the video, what form of elimination is preferred to directly obtain the solution matrix $\\mathbf{X}$?","hu":"A videó szerint milyen eliminációs formát részesítenek előnyben a $\\mathbf{X}$ megoldásmátrix közvetlen megszerzéséhez?"},"a":{"en":"Gauss-Jordan elimination.","hu":"Gauss-Jordan kiesés."}},
    {"q":{"en":"The formula $n^3/3 + mn^2 - n/3$ describes the multiplication/division count for which method?","hu":"A $n^3/3 + mn^2 - n/3$ képlet melyik módszer szorzási/osztási számát írja le?"},"a":{"en":"Gaussian elimination on an augmented matrix.","hu":"Gauss-elimináció kiterjesztett mátrixon."}},
    {"q":{"en":"In the operation count $n^3/2 + mn^2 - n/2$, what does the '$- n/2 term represent?","hu":"A $n^3/2 + mn^2 - n/2$ műveletszámban mit jelent a '$- n/2 tag?"},"a":{"en":"A linear correction factor in the Gauss-Jordan operation count.","hu":"Lineáris korrekciós tényező a Gauss-Jordan műveletek számában."}},
    {"q":{"en":"How is the matrix $\\mathbf{X}$ related to $\\mathbf{A}$ and $\\mathbf{B}$ in terms of matrix multiplication?","hu":"Hogyan kapcsolódik a $\\mathbf{X}$ mátrix a $\\mathbf{A}$-hez és a $\\mathbf{B}$-hez a mátrixszorzás szempontjából?"},"a":{"en":"$\\mathbf{X}$ is the matrix that, when multiplied on the left by $\\mathbf{A}$, yields $\\mathbf{B}$.","hu":"A $\\mathbf{X}$ az a mátrix, amelyet a bal oldalon $\\mathbf{A}$-vel megszorozva $\\mathbf{B}$-t kapunk."}},
    {"q":{"en":"What is the identity matrix dimension in the result $(\\mathbf{I}, \\mathbf{X})$?","hu":"Mi az identitásmátrix dimenziója a $(\\mathbf{I}, \\mathbf{X})$ eredményben?"},"a":{"en":"$n \\times n$","hu":"$n \\times n$"}},
    {"q":{"en":"True or False: Pivoting decisions in simultaneous systems are affected by the values in matrix $\\mathbf{B}$.","hu":"Igaz vagy hamis: Az egyidejű rendszerekben a forgási döntéseket a $\\mathbf{B}$ mátrix értékei befolyásolják."},"a":{"en":"False (pivoting depends only on the coefficient matrix $\\mathbf{A}$).","hu":"Hamis (a forgás csak a $\\mathbf{A}$ együtthatómátrixtól függ)."}},
    {"q":{"en":"If $m=1$, the operation count $n^3/3 + mn^2 - n/3$ simplifies to the standard count for a _____.","hu":"Ha $m=1$, akkor a $n^3/3 + mn^2 - n/3$ műveletek száma leegyszerűsödik a _____ szabványos számlálási értékére."},"a":{"en":"single linear system solved by Gaussian elimination","hu":"egyetlen lineáris rendszer Gauss-eliminációval megoldva"}},
    {"q":{"en":"The matrix $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ is called the _____ matrix.","hu":"A $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ mátrixot _____ mátrixnak nevezzük."},"a":{"en":"right-hand side","hu":"jobb oldali"}},
    {"q":{"en":"The matrix $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ is called the _____ matrix.","hu":"A $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ mátrixot _____ mátrixnak nevezzük."},"a":{"en":"solution","hu":"megoldás"}},
    {"q":{"en":"What is the row size of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","hu":"Mekkora a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrix sormérete?"},"a":{"en":"$n$ (the number of equations).","hu":"$n$ (az egyenletek száma)."}},
    {"q":{"en":"What is the column size of matrix $\\mathbf{X}$ in a simultaneous system with $m$ right-hand sides?","hu":"Mekkora a $\\mathbf{X}$ mátrix oszlop mérete $m$ jobb oldali szimultán rendszerben?"},"a":{"en":"$m$","hu":"$m$"}},
    {"q":{"en":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, which matrix is the coefficient matrix?","hu":"A $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben melyik mátrix az együtthatómátrix?"},"a":{"en":"$\\mathbf{A}$","hu":"$\\mathbf{A}$"}},
    {"q":{"en":"The process of solving simultaneous systems is equivalent to solving the matrix equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ for the unknown matrix _____.","hu":"A szimultán rendszerek megoldásának folyamata egyenértékű a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ mátrixegyenlet megoldásával a _____ ismeretlen mátrixra."},"a":{"en":"$\\mathbf{X}$","hu":"$\\mathbf{X}$"}},
    {"q":{"en":"The Gauss-Jordan method transforms the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ into _____.","hu":"A Gauss-Jordan módszer a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixot _____-má alakítja."},"a":{"en":"$(\\mathbf{I}, \\mathbf{X})$","hu":"$(\\mathbf{I}, \\mathbf{X})$"}},
    {"q":{"en":"How many individual linear systems are being solved in a simultaneous system with $m$ right-hand sides?","hu":"Hány egyedi lineáris rendszert oldanak meg egyidejűleg $m$ jobb oldali rendszerben?"},"a":{"en":"$m$","hu":"$m$"}},
    {"q":{"en":"What is the term for the matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$?","hu":"Mi a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ mátrix kifejezés?"},"a":{"en":"The augmented matrix.","hu":"A kiterjesztett mátrix."}},
    {"q":{"en":"What determines whether Gaussian or Gauss-Jordan elimination can be performed on the augmented matrix?","hu":"Mi határozza meg, hogy Gauss vagy Gauss-Jordan-elimináció végezhető-e a kiterjesztett mátrixon?"},"a":{"en":"The properties and pivoting requirements of the coefficient matrix $\\mathbf{A}$.","hu":"A $\\mathbf{A}$ együtthatómátrix tulajdonságai és elfordulási követelményei."}},
    {"q":{"en":"In the term $mn^2$ of the operation counts, what does $n^2$ represent for each system $i$?","hu":"A műveletszámok $mn^2$ kifejezésében mit jelent a $n^2$ az egyes $i$ rendszereknél?"},"a":{"en":"The operations required to process a single right-hand side vector through the elimination and back-substitution.","hu":"Egyetlen jobb oldali vektor feldolgozásához szükséges műveletek elimináción és visszahelyettesítésen keresztül."}},
    {"q":{"en":"What is the result of multiplying the coefficient matrix by the first column of the solution matrix?","hu":"Mi az eredménye, ha az együtthatómátrixot megszorozzuk a megoldásmátrix első oszlopával?"},"a":{"en":"The first column of the right-hand side matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(1)}$).","hu":"A jobb oldali $\\mathbf{B}$ mátrix első oszlopa (a $\\mathbf{b}^{(1)}$ vektor)."}},
    {"q":{"en":"In Gauss-Jordan elimination, the solution for the $i$-th system is found in the $(n+i)$-th _____ of the final augmented matrix.","hu":"A Gauss-Jordan-eliminációban a $i$-edik rendszer megoldása a végső kiterjesztett mátrix $(n+i)$-edik _____-jában található."},"a":{"en":"column","hu":"oszlop"}},
    {"q":{"en":"Which operation count term $n^3/3$ or $n^3/2$ represents the cost of reducing the coefficient matrix $\\mathbf{A}$?","hu":"Melyik $n^3/3$ vagy $n^3/2$ műveletszámlálási tag jelenti a $\\mathbf{A}$ együtthatómátrix csökkentésének költségét?"},"a":{"en":"The term independent of $m$.","hu":"A kifejezés független a $m$-től."}},
    {"q":{"en":"To solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for multiple $i$, one performs elimination on $\\mathbf{A}$ and applies the same operations to all _____.","hu":"A $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ megoldásához több $i$ esetén, az egyik megszünteti a $\\mathbf{A}$-t, és ugyanazokat a műveleteket alkalmazza az összes _____-ra."},"a":{"en":"$\\mathbf{b}^{(i)}$ vectors (or the matrix $\\mathbf{B}$)","hu":"$\\mathbf{b}^{(i)}$ vektorok (vagy a $\\mathbf{B}$ mátrix)"}},
    {"q":{"en":"What is the total number of entries in the solution matrix $\\mathbf{X}$?","hu":"Mennyi az összes bejegyzés száma a $\\mathbf{X}$ megoldásmátrixban?"},"a":{"en":"$n \\cdot m$","hu":"$n \\cdot m$"}},
    {"q":{"en":"Which matrix equation proves that $AX=B$ is equivalent to solving $m$ individual systems?","hu":"Melyik mátrixegyenlet bizonyítja, hogy a $AX=B$ egyenértékű a $m$ egyedi rendszerek megoldásával?"},"a":{"en":"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$","hu":"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$"}}
  ],
  's37': [
    {"q":{"en":"What matrix equation defines the inverse $\\mathbf{A}^{-1}$ of a nonsingular square matrix $\\mathbf{A}$?","hu":"Milyen mátrixegyenlet határozza meg a $\\mathbf{A}$ nem szinguláris négyzetmátrix inverz $\\mathbf{A}^{-1}$ értékét?"},"a":{"en":"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$","hu":"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$"}},
    {"q":{"en":"Matrix inversion is computationally equivalent to solving which type of linear system?","hu":"A mátrixinverzió számításilag egyenértékű a lineáris rendszer melyik típusának megoldásával?"},"a":{"en":"A simultaneous linear system","hu":"Egyidejű lineáris rendszer"}},
    {"q":{"en":"In the simultaneous linear system used to find $\\mathbf{A}^{-1}$, what matrix serves as the right-hand side?","hu":"A $\\mathbf{A}^{-1}$ keresésére használt szimultán lineáris rendszerben melyik mátrix szolgál a jobb oldalként?"},"a":{"en":"The identity matrix $\\mathbf{I}$","hu":"A $\\mathbf{I}$ identitásmátrix"}},
    {"q":{"en":"Which elimination method is primarily used in the source material to compute the matrix inverse?","hu":"Melyik eliminációs módszert használják elsősorban a forrásanyagban a mátrix inverzének kiszámításához?"},"a":{"en":"Gauss-Jordan elimination","hu":"Gauss-Jordan kiesés"}},
    {"q":{"en":"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of multiplications and divisions?","hu":"Milyen általános komplexitású a Gauss-Jordan-elimináció a mátrix inverziójához a szorzások és osztások szempontjából?"},"a":{"en":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$","hu":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"}},
    {"q":{"en":"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of additions and subtractions?","hu":"Mi a Gauss-Jordan-elimináció általános összetettsége a mátrix inverziójához az összeadások és kivonások tekintetében?"},"a":{"en":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$","hu":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"}},
    {"q":{"en":"According to Exercise 5, what is the exact number of multiplications and divisions required for matrix inversion using Gauss-Jordan elimination?","hu":"Az 5. gyakorlat szerint pontosan hányszor kell szorozni és osztani a mátrix inverzióját Gauss-Jordan-eliminációval?"},"a":{"en":"$3n^3/2 - n/2$","hu":"$3n^3/2 - n/2$"}},
    {"q":{"en":"If an optimized algorithm avoids multiplications by zero in the identity matrix, how many multiplications and divisions does matrix inversion require?","hu":"Ha egy optimalizált algoritmus elkerüli a nullával való szorzást az azonosságmátrixban, hány szorzást és osztást igényel a mátrix inverziója?"},"a":{"en":"$n^3$","hu":"$n^3$"}},
    {"q":{"en":"What is the operation count for additions and subtractions in an optimized Gauss-Jordan matrix inversion algorithm?","hu":"Mennyi az összeadások és kivonások műveletszáma egy optimalizált Gauss-Jordan mátrixinverziós algoritmusban?"},"a":{"en":"$n^3 - 2n^2 + n$","hu":"$n^3 - 2n^2 + n$"}},
    {"q":{"en":"Why is it possible to reduce the operation count to $n^3$ when inverting a matrix using the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$?","hu":"Miért lehetséges a műveletek számát $n^3$-re csökkenteni, amikor egy mátrixot invertálunk a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ egyenlettel?"},"a":{"en":"Because the identity matrix $\\mathbf{I}$ contains many zeros, making certain multiplications unnecessary.","hu":"Mivel a $\\mathbf{I}$ identitásmátrix sok nullát tartalmaz, ami szükségtelenné tesz bizonyos szorzásokat."}},
    {"q":{"en":"What is the purpose of using pivoting techniques with Gauss-Jordan elimination during matrix inversion?","hu":"Mi a célja a pivoting technikák használatának Gauss-Jordan-eliminációval a mátrix inverziója során?"},"a":{"en":"To reduce rounding errors or avoid division by zero.","hu":"A kerekítési hibák csökkentése vagy a nullával való osztás elkerülése érdekében."}},
    {"q":{"en":"Under what condition can Gaussian elimination with pivoting be performed?","hu":"Milyen feltételek mellett végezhető el a Gauss-elimináció elforgatással?"},"a":{"en":"$\\det(\\mathbf{A}) \\neq 0$","hu":"$\\det(\\mathbf{A}) \\neq 0$"}},
    {"q":{"en":"What is the relationship between $\\det(\\mathbf{A})$ and the determinant of the matrix after elimination $\\det(\\mathbf{A}^{(n-1)})$?","hu":"Mi a kapcsolat a $\\det(\\mathbf{A})$ és a mátrix determinánsa között a $\\det(\\mathbf{A}^{(n-1)})$ eliminációja után?"},"a":{"en":"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$","hu":"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$"}},
    {"q":{"en":"In the formula $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$, what does the variable $s$ represent?","hu":"Mit jelent a $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$ képletben a $s$ változó?"},"a":{"en":"The number of row changes (swaps) performed during elimination.","hu":"Az elimináció során végrehajtott sormódosítások (swapok) száma."}},
    {"q":{"en":"How is the determinant calculated using the pivot elements after Gaussian elimination?","hu":"Hogyan történik a determináns kiszámítása a pivot elemek segítségével a Gauss-elimináció után?"},"a":{"en":"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$","hu":"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$"}},
    {"q":{"en":"If the number of row changes in Gaussian elimination is even, what is the relationship between the original determinant and the product of the pivots?","hu":"Ha a sorváltások száma a Gauss-eliminációban páros, mi a kapcsolat az eredeti determináns és a pivotok szorzata között?"},"a":{"en":"They are equal.","hu":"Egyenrangúak."}},
    {"q":{"en":"If the number of row changes in Gaussian elimination is odd, how does the original determinant relate to the product of the pivots?","hu":"Ha a sorváltozások száma a Gauss-eliminációban páratlan, hogyan viszonyul az eredeti determináns a pivotok szorzatához?"},"a":{"en":"The determinant is the negative of the product of the pivots.","hu":"A determináns a forgáspontok szorzatának negatívja."}},
    {"q":{"en":"What structure is used as the starting point for Gauss-Jordan matrix inversion?","hu":"Milyen struktúrát használunk a Gauss-Jordan mátrixinverzió kiindulópontjaként?"},"a":{"en":"An augmented matrix $(\\mathbf{A}|\\mathbf{I})$","hu":"Egy kiterjesztett mátrix $(\\mathbf{A}|\\mathbf{I})$"}},
    {"q":{"en":"During Gauss-Jordan inversion, once the left side of the augmented matrix becomes $\\mathbf{I}$, what does the right side represent?","hu":"A Gauss-Jordan inverzió során, ha a kiterjesztett mátrix bal oldala $\\mathbf{I}$ lesz, mit jelent a jobb oldal?"},"a":{"en":"The inverse matrix $\\mathbf{A}^{-1}$","hu":"Az inverz mátrix $\\mathbf{A}^{-1}$"}},
    {"q":{"en":"What is the inverse of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$?","hu":"Mennyi a $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$ mátrix inverze?"},"a":{"en":"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$","hu":"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$"}},
    {"q":{"en":"In Example 3.39, what were the diagonal elements (pivots) of the matrix after Gaussian elimination?","hu":"A 3.39. példában melyek voltak a mátrix átlós elemei (pivotjai) a Gauss-elimináció után?"},"a":{"en":"$1, 3, 1, 38$","hu":"$1, 3, 1, 38$"}},
    {"q":{"en":"What is the determinant of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$?","hu":"Mi a $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$ mátrix meghatározója?"},"a":{"en":"$114$","hu":"$114$"}},
    {"q":{"en":"True or False: If a solution $\\mathbf{X}$ exists for $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$, then $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ also holds.","hu":"Igaz vagy hamis: Ha létezik $\\mathbf{X}$ megoldás a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ számára, akkor a $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ is érvényes."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"Term: Nonsingular Matrix","hu":"Fogalom: Nem szinguláris mátrix"},"a":{"en":"Definition: A square matrix that has an inverse, which is true if and only if its determinant is non-zero.","hu":"Definíció: Olyan négyzetmátrix, amelynek van inverze, amely akkor és csak akkor igaz, ha a determinánsa nem nulla."}},
    {"q":{"en":"Concept: Simultaneous Linear System","hu":"Koncepció: Simultán lineáris rendszer"},"a":{"en":"Definition: A set of linear systems that share the same coefficient matrix $\\mathbf{A}$ but have different right-hand side vectors.","hu":"Definíció: Lineáris rendszerek halmaza, amelyek ugyanazon a $\\mathbf{A}$ együtthatómátrixon osztoznak, de eltérő jobb oldali vektorokkal rendelkeznek."}},
    {"q":{"en":"In the Gauss-Jordan process, what is the goal of the 'elimination step' relative to the diagonal?","hu":"A Gauss-Jordan folyamatban mi a célja az „eliminációs lépésnek” az átlóhoz képest?"},"a":{"en":"To make all numbers above and below the diagonal equal to zero.","hu":"Ahhoz, hogy az átló feletti és alatti összes szám nullával egyenlő legyen."}},
    {"q":{"en":"In the Gauss-Jordan process, what is the final step for each row to ensure the coefficient matrix becomes the identity matrix?","hu":"A Gauss-Jordan folyamatban mi az utolsó lépés az egyes soroknál annak biztosítására, hogy az együtthatómátrix azonosságmátrixmá váljon?"},"a":{"en":"Divide the row by the value of the diagonal (pivot) element to make it equal to $1$.","hu":"Ossza el a sort az átlós (pivot) elem értékével, hogy egyenlő legyen a $1$ értékkel."}},
    {"q":{"en":"Which property of the determinant allows it to be calculated as the product of the diagonal elements of an upper triangular matrix?","hu":"A determináns melyik tulajdonsága teszi lehetővé, hogy egy felső háromszögmátrix átlós elemeinek szorzataként számítsuk ki?"},"a":{"en":"The determinant of an upper triangular matrix is the product of its main diagonal entries.","hu":"Egy felső háromszög alakú mátrix determinánsa a fő átlós bejegyzéseinek szorzata."}},
    {"q":{"en":"If no row changes occur during Gaussian elimination, how is $\\det(\\mathbf{A})$ related to the pivot elements?","hu":"Ha nem történik sorváltás a Gauss-elimináció során, hogyan kapcsolódik a $\\det(\\mathbf{A})$ a pivot elemekhez?"},"a":{"en":"It is exactly the product of the pivot elements.","hu":"Pontosan a pivot elemek szorzata."}},
    {"q":{"en":"What numerical benefit does pivoting provide when a diagonal element is very small?","hu":"Milyen számszerű előnyökkel jár a forgatás, ha egy átlós elem nagyon kicsi?"},"a":{"en":"It reduces rounding errors that occur when dividing by small numbers.","hu":"Csökkenti a kis számokkal való osztásakor fellépő kerekítési hibákat."}},
    {"q":{"en":"What is the result of applying $\\mathbf{A}\\mathbf{A}^{-1}$?","hu":"Mi az eredménye a $\\mathbf{A}\\mathbf{A}^{-1}$ alkalmazásának?"},"a":{"en":"The identity matrix $\\mathbf{I}$","hu":"A $\\mathbf{I}$ identitásmátrix"}},
    {"q":{"en":"The augmented matrix used for inversion is $(\\mathbf{A}|\\mathbf{I})$. What is the final form of this matrix after successful Gauss-Jordan elimination?","hu":"Az inverzióhoz használt kiterjesztett mátrix a $(\\mathbf{A}|\\mathbf{I})$. Mi ennek a mátrixnak a végleges formája a sikeres Gauss-Jordan kiesést követően?"},"a":{"en":"$(\\mathbf{I}|\\mathbf{A}^{-1})$","hu":"$(\\mathbf{I}|\\mathbf{A}^{-1})$"}},
    {"q":{"en":"What specific matrix type is produced at the end of standard Gaussian elimination (before the Jordan steps)?","hu":"Milyen konkrét mátrixtípus jön létre a standard Gauss-elimináció végén (a Jordan lépések előtt)?"},"a":{"en":"An upper triangular matrix","hu":"Egy felső háromszög mátrix"}},
    {"q":{"en":"How many multiplications/divisions are needed to invert a $10 \\times 10$ matrix using the optimized algorithm mentioned in Exercise 6?","hu":"Hány szorzásra/osztásra van szükség egy $10 \\times 10$ mátrix megfordításához a 6. gyakorlatban említett optimalizált algoritmus segítségével?"},"a":{"en":"$1000$ (since $n^3 = 10^3$)","hu":"$1000$ ($n^3 = 10^3$ óta)"}},
    {"q":{"en":"Formula: Determinant using pivots","hu":"Képlet: Determináns pivotokat használva"},"a":{"en":"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$","hu":"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$"}},
    {"q":{"en":"Why is Gaussian elimination with pivoting preferred over simple Gaussian elimination for computer implementations?","hu":"Miért részesítik előnyben a Gauss-eliminációt a forgatással az egyszerű Gauss-eliminációval szemben a számítógépes megvalósításoknál?"},"a":{"en":"To ensure numerical stability and avoid failures due to zero pivots.","hu":"A számszerű stabilitás biztosítása és a nulla forgáspontok miatti meghibásodások elkerülése érdekében."}},
    {"q":{"en":"In the $3 \\times 3$ inversion example, what was the pivot value in the third row after eliminating the first two columns?","hu":"A $3 \\times 3$ inverziós példában mi volt a pivot értéke a harmadik sorban az első két oszlop eltávolítása után?"},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"If a square matrix $\\mathbf{A}$ has a determinant of $0$, what can be said about its inverse $\\mathbf{A}^{-1}$?","hu":"Ha egy $\\mathbf{A}$ négyzetmátrixnak $0$ determinánsa van, mit mondhatunk az inverz $\\mathbf{A}^{-1}$-ről?"},"a":{"en":"The inverse does not exist.","hu":"Az inverz nem létezik."}},
    {"q":{"en":"How does swapping two rows in a matrix affect the value of its determinant?","hu":"Hogyan befolyásolja a mátrix két sorának felcserélése a determináns értékét?"},"a":{"en":"It multiplies the determinant by $-1$.","hu":"A determinánst megszorozza $-1$-vel."}},
    {"q":{"en":"Cloze: The number of operations needed for matrix inversion is roughly proportional to $n$ to the power of _____.","hu":"Close: A mátrixinverzióhoz szükséges műveletek száma nagyjából arányos $n$-vel _____ hatványával."},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"Cloze: To find the inverse of $\\mathbf{A}$, one can solve the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ using the _____ method.","hu":"Cloze: A $\\mathbf{A}$ inverzének megtalálásához a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ egyenletet a _____ módszerrel megoldhatjuk."},"a":{"en":"Gauss-Jordan","hu":"Gauss-Jordánia"}},
    {"q":{"en":"In the context of the source material, what is the meaning of a 'nonsingular' matrix?","hu":"A forrásanyaggal összefüggésben mit jelent a „nem szinguláris” mátrix?"},"a":{"en":"A matrix for which the determinant is not zero.","hu":"Olyan mátrix, amelynél a determináns nem nulla."}},
    {"q":{"en":"In the $4 \\times 4$ determinant example, why was the sign factor $(-1)^s$ equal to $1$?","hu":"A $4 \\times 4$ determináns példában miért volt egyenlő a $(-1)^s$ előjeltényező $1$-vel?"},"a":{"en":"Because the Gaussian elimination was performed without any row changes ($s=0$).","hu":"Mivel a Gauss-elimináció sorváltás nélkül történt ($s=0$)."}},
    {"q":{"en":"What matrix dimension was the coefficient matrix in Example 3.39?","hu":"Milyen mátrixdimenzió volt az együtthatómátrix a 3.39. példában?"},"a":{"en":"$4 \\times 4$","hu":"$4 \\times 4$"}},
    {"q":{"en":"How does the Gauss-Jordan method differ from Gaussian elimination in its final result for the coefficient matrix?","hu":"Miben különbözik a Gauss-Jordan módszer a Gauss-eliminációtól az együtthatómátrixra vonatkozó végeredményében?"},"a":{"en":"Gauss-Jordan produces an identity matrix, whereas Gaussian elimination produces an upper triangular matrix.","hu":"A Gauss-Jordan azonosságmátrixot, míg a Gauss-elimináció egy felső háromszögmátrixot hoz létre."}},
    {"q":{"en":"What is the identity matrix $\\mathbf{I}$ defined as in the context of matrix inversion?","hu":"Hogyan definiálható a $\\mathbf{I}$ identitásmátrix a mátrixinverzió összefüggésében?"},"a":{"en":"A square matrix with ones on the main diagonal and zeros elsewhere.","hu":"Négyzetes mátrix a főátlón egyesekkel, máshol pedig nullákkal."}},
    {"q":{"en":"Which operation is performed first in the Gauss-Jordan example to eliminate the $-1$ in the second row, first column?","hu":"Melyik műveletet hajtják végre először a Gauss-Jordan példában a $-1$ eltávolítására a második sorban, az első oszlopban?"},"a":{"en":"Adding the first row to the second row ($R2 \\leftarrow R2 + R1$).","hu":"Az első sor hozzáadása a második sorhoz ($R2 \\leftarrow R2 + R1$)."}},
    {"q":{"en":"Which operation is performed to eliminate the $-2$ in the third row, first column of the $3 \\times 3$ example?","hu":"Melyik műveletet hajtják végre a $-2$ eltávolítására a $3 \\times 3$ példa harmadik sorában, első oszlopában?"},"a":{"en":"Adding twice the first row to the third row ($R3 \\leftarrow R3 + 2R1$).","hu":"Az első sor kétszeres hozzáadása a harmadik sorhoz ($R3 \\leftarrow R3 + 2R1$)."}},
    {"q":{"en":"In the final step of the $3 \\times 3$ inversion example, the third row $(0, 0, 3 | 2, 0, 1)$ was divided by what value?","hu":"A $3 \\times 3$ inverziós példa utolsó lépésében a harmadik sor $(0, 0, 3 | 2, 0, 1)$ hányadosa hány értékkel volt elosztva?"},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"What is the common factor factored out from the resulting matrix in the inverse example?","hu":"Mi az a közös tényező, amelyet az inverz példában kapott mátrixból veszünk ki?"},"a":{"en":"$\\frac{1}{3}$","hu":"$\\frac{1}{3}$"}},
    {"q":{"en":"Cloze: The Gaussian elimination with pivoting can be performed if and only if $\\det(\\mathbf{A})$ is _____.","hu":"Close: A Gauss-elimináció elforgatással akkor és csak akkor hajtható végre, ha a $\\det(\\mathbf{A})$ _____."},"a":{"en":"Non-zero","hu":"Nem nulla"}},
    {"q":{"en":"Why is multiplication by zero not computed in specialized matrix inversion algorithms?","hu":"Miért nem számítják ki a nullával való szorzást speciális mátrixinverziós algoritmusokban?"},"a":{"en":"To improve efficiency and reduce the total number of operations.","hu":"A hatékonyság javítása és a műveletek teljes számának csökkentése érdekében."}},
    {"q":{"en":"In the transcript, what is described as the 'most efficient way' to compute the inverse in terms of operations?","hu":"Az átiratban mit írnak le a „leghatékonyabb módszernek” az inverz kiszámítására a műveletek szempontjából?"},"a":{"en":"Organizing Gauss-Jordan elimination using an augmented matrix $(\\mathbf{A}|\\mathbf{I})$.","hu":"A Gauss-Jordan-elimináció megszervezése egy kiterjesztett $(\\mathbf{A}|\\mathbf{I})$ mátrix segítségével."}},
    {"q":{"en":"According to the transcript, how do we determine the sign of the determinant relative to the product of pivots?","hu":"Az átirat szerint hogyan határozzuk meg a determináns előjelét a forgáspontok szorzatához viszonyítva?"},"a":{"en":"By checking if the number of row changes was even (same sign) or odd (opposite sign).","hu":"Ellenőrizve, hogy a sorváltások száma páros (azonos előjel) vagy páratlan (ellentétes előjel) volt-e."}},
    {"q":{"en":"What is the determinant of a matrix where one of the pivot elements becomes zero during elimination and no further pivoting can move a non-zero element into that position?","hu":"Mi a determinánsa egy olyan mátrixnak, ahol az egyik pivot elem nullává válik az elimináció során, és a további elforgatás nem tud ebbe a pozícióba mozgatni egy nem nulla elemet?"},"a":{"en":"Zero","hu":"Nulla"}}
  ],
}
