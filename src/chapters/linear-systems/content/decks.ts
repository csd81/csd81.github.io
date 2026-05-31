// Auto-generated learning aids for chapter 3. Glossaries bilingual; flashcards EN.
import type { Bilingual } from '../lib/types'

export interface GlossaryEntry { term: Bilingual; def: Bilingual }
export interface Flashcard { q: string; a: string }

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
    {"q":"What notation represents the set of all real $n \\times n$ dimensional matrices?","a":"$\\mathbb{R}^{n \\times n}$"},
    {"q":"What notation represents the set of all $n \\times n$ matrices with complex entries?","a":"$\\mathbb{C}^{n \\times n}$"},
    {"q":"In linear algebra notation, how is the $n \\times n$ dimensional identity matrix denoted?","a":"$\\mathbf{I}$"},
    {"q":"What is the condition for a square matrix $\\mathbf{A}$ to be called 'invertible' or 'nonsingular'?","a":"Its inverse $\\mathbf{A}^{-1}$ exists such that $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$."},
    {"q":"A square matrix is defined as _____ if it has no inverse.","a":"singular"},
    {"q":"What is the value of $\\det(\\mathbf{A})$ if each element of a single row or column in $\\mathbf{A}$ is equal to 0?","a":"0"},
    {"q":"What is the value of $\\det(\\mathbf{A})$ if two rows or two columns of $\\mathbf{A}$ are identical?","a":"0"},
    {"q":"According to the properties of determinants, what does $\\det(\\mathbf{A}\\mathbf{B})$ equal?","a":"$\\det(\\mathbf{A})\\det(\\mathbf{B})$"},
    {"q":"How does the determinant of a matrix $\\mathbf{A}$ compare to the determinant of its transpose $\\mathbf{A}^T$?","a":"They are equal: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$."},
    {"q":"If $\\mathbf{A}$ is an invertible matrix, what is the formula for $\\det(\\mathbf{A}^{-1})$?","a":"$1/\\det(\\mathbf{A})$"},
    {"q":"If matrix $\\mathbf{B}$ is obtained by multiplying one row of matrix $\\mathbf{A}$ by a constant $c$, how is $\\det(\\mathbf{B})$ related to $\\det(\\mathbf{A})$?","a":"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$"},
    {"q":"What happens to the determinant of a matrix if two of its rows or columns are swapped?","a":"The sign of the determinant changes: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$."},
    {"q":"How is the determinant affected if a constant multiple of one row is added to another row?","a":"The determinant remains unchanged: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$."},
    {"q":"Formula: Determinant expansion by the $i$-th row.","a":"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$"},
    {"q":"In the context of determinant expansion, what does $\\mathbf{A}_{ij}$ represent?","a":"The $(n-1) \\times (n-1)$ matrix obtained by omitting the $i$-th row and $j$-th column of $\\mathbf{A}$."},
    {"q":"Besides having a non-zero determinant, what is an equivalent condition for a matrix $\\mathbf{A}$ to have a unique solution for $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for any $\\mathbf{b}$?","a":"The matrix $\\mathbf{A}$ must be invertible."},
    {"q":"Under what condition regarding the determinant does the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ have a nontrivial (nonzero) solution?","a":"$\\det(\\mathbf{A}) = 0$"},
    {"q":"If matrices $\\mathbf{A}$ and $\\mathbf{B}$ are both invertible, what is the formula for $(\\mathbf{A}\\mathbf{B})^{-1}$?","a":"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$"},
    {"q":"A square matrix is called _____ if $a_{ij} = 0$ for all $i > j$.","a":"upper triangular"},
    {"q":"A square matrix is called _____ if $a_{ij} = 0$ for all $i < j$.","a":"lower triangular"},
    {"q":"What is the determinant of a triangular matrix $\\mathbf{A}$?","a":"The product of its diagonal elements: $a_{11}a_{22}\\cdots a_{nn}$."},
    {"q":"The product of two lower triangular matrices results in a _____ matrix.","a":"lower triangular"},
    {"q":"The inverse of an invertible upper triangular matrix is always _____.","a":"upper triangular"},
    {"q":"What is a permutation matrix?","a":"A square matrix obtained from the identity matrix by interchanging its rows or columns."},
    {"q":"In a permutation matrix, how many '1's are present in each row and column?","a":"Exactly one."},
    {"q":"Multiplying a matrix $\\mathbf{A}$ on the left by a permutation matrix $\\mathbf{P}$ results in what transformation of $\\mathbf{A}$?","a":"Interchanging the rows of $\\mathbf{A}$."},
    {"q":"What is the condition for a matrix $\\mathbf{A}$ to be 'row diagonally dominant'?","a":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i = 1, \\ldots, n$."},
    {"q":"If a matrix $\\mathbf{A}$ is column diagonally dominant, what property does its transpose $\\mathbf{A}^T$ possess?","a":"It is row diagonally dominant."},
    {"q":"According to Theorem 3.8, what property is guaranteed for a matrix that is diagonally dominant?","a":"It is invertible."},
    {"q":"What are the two requirements for a square matrix $\\mathbf{A}$ to be 'positive definite'?","a":"It must be symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\ne \\mathbf{0}$."},
    {"q":"If a square matrix $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ for all $\\mathbf{x}$, it is called _____.","a":"positive semi-definite"},
    {"q":"According to Theorem 3.9, if a matrix is positive definite, what can be said about its diagonal elements $a_{ii}$?","a":"They are all strictly positive ($a_{ii} > 0$)."},
    {"q":"Theorem 3.10 states that a symmetric matrix is positive definite if and only if all of its _____ are positive.","a":"principal minors (upper left minors)"},
    {"q":"What defines an 'orthogonal' matrix $\\mathbf{A}$?","a":"$\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1} = \\mathbf{A}^T$."},
    {"q":"If $\\mathbf{A}$ and $\\mathbf{B}$ are orthogonal matrices, what is the nature of their product $\\mathbf{A}\\mathbf{B}$?","a":"The product is also orthogonal."},
    {"q":"What is an eigenvalue $\\lambda$ of a square matrix $\\mathbf{A}$?","a":"A complex number such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$."},
    {"q":"The algebraic equation $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ used to find eigenvalues is known as the _____.","a":"characteristic equation"},
    {"q":"What is the relationship between the determinant of a matrix $\\mathbf{A}$ and its eigenvalues $\\lambda_1, \\ldots, \\lambda_n$?","a":"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$"},
    {"q":"Based on eigenvalues, when is a square matrix $\\mathbf{A}$ invertible?","a":"When all of its eigenvalues are non-zero ($\\lambda_i \\ne 0$ for all $i$)."},
    {"q":"If $\\lambda$ is an eigenvalue of an invertible matrix $\\mathbf{A}$, what is the corresponding eigenvalue for $\\mathbf{A}^{-1}$?","a":"$1/\\lambda$"},
    {"q":"If $\\lambda$ is an eigenvalue of $\\mathbf{A}$, what is the corresponding eigenvalue for the matrix $\\mathbf{A}^k$?","a":"$\\lambda^k$"},
    {"q":"Where are the eigenvalues located for a triangular matrix?","a":"On the main diagonal elements ($a_{11}, a_{22}, \\ldots, a_{nn}$)."},
    {"q":"Two square matrices $\\mathbf{A}$ and $\\mathbf{B}$ are 'similar' if there exists an invertible matrix $\\mathbf{P}$ such that _____.","a":"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$"},
    {"q":"What important property do similar matrices share regarding their eigenvalues?","a":"Their eigenvalues are identical."},
    {"q":"Definition: Spectral Radius $\\rho(\\mathbf{A})$.","a":"The maximum absolute value of the eigenvalues of $\\mathbf{A}$: $\\max\\{|\\lambda| : \\lambda \\text{ is an eigenvalue of } \\mathbf{A}\\}$."},
    {"q":"How is the spectral radius of $\\mathbf{A}^k$ related to the spectral radius of $\\mathbf{A}$?","a":"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$"},
    {"q":"According to Theorem 3.16, the spectral radius $\\rho(\\mathbf{A})$ is always less than or equal to any _____.","a":"matrix norm $\\|\\cdot\\|$"},
    {"q":"Theorem 3.17: For any $\\varepsilon > 0$, there exists a matrix norm $\\|\\cdot\\|$ such that $\\|\\mathbf{A}\\| \\le$ _____.","a":"$\\rho(\\mathbf{A}) + \\varepsilon$"},
    {"q":"How is the spectral norm $\\|\\mathbf{A}\\|_2$ calculated for a general square matrix?","a":"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$"},
    {"q":"If a matrix $\\mathbf{A}$ is symmetric, how does its spectral norm $\\|\\mathbf{A}\\|_2$ relate to its spectral radius $\\rho(\\mathbf{A})$?","a":"They are equal: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$."},
    {"q":"What is the name of the determinant where the rows are powers of $a_i$ (e.g., $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?","a":"Vandermonde determinant"},
    {"q":"Under what condition is the Vandermonde determinant non-zero?","a":"The numbers $a_1, \\ldots, a_n$ must be pairwise distinct."},
    {"q":"What is the formula for the value of the Vandermonde determinant given numbers $a_1, \\ldots, a_n$?","a":"$\\prod_{i>j}(a_i - a_j)$"},
    {"q":"If $\\mathbf{A}$ and $\\mathbf{B}$ are positive definite matrices, is their sum $\\mathbf{A} + \\mathbf{B}$ also positive definite?","a":"Yes."},
    {"q":"Is the square of a positive definite matrix ($\\mathbf{A}^2$) also positive definite?","a":"Yes."},
    {"q":"Is the transpose of a positive definite matrix ($\\mathbf{A}^T$) also positive definite?","a":"Yes."},
    {"q":"Define 'column diagonally dominant' in terms of the matrix's entries.","a":"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ for all $j = 1, \\ldots, n$."}
  ],
  's32': [
    {"q":"What is an $n$-dimensional upper triangular linear system?","a":"A system where all coefficients $a_{ij} = 0$ for $i > j$."},
    {"q":"In an upper triangular system $Ax = b$, what is the equation for the $n$-th variable?","a":"$a_{nn}x_n = b_n$"},
    {"q":"What is the specific name of the method used to solve upper triangular systems?","a":"Backward substitution."},
    {"q":"The Hungarian term for the backward substitution method is _____.","a":"Visszahelyettesítés módszere."},
    {"q":"Which variable is solved first in the backward substitution algorithm?","a":"$x_n$"},
    {"q":"Which variable is solved last in the backward substitution algorithm?","a":"$x_1$"},
    {"q":"Algorithm: What is the assignment for $x_n$ at the start of backward substitution?","a":"$x_n \\leftarrow b_n / a_{nn}$"},
    {"q":"In the backward substitution algorithm, what range of values does the index $i$ take after solving for $x_n$?","a":"$n-1, \\dots, 1$"},
    {"q":"What is the general formula for calculating $x_i$ in backward substitution?","a":"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$"},
    {"q":"In the formula for $x_i$, what is the lower limit of the summation index $j$?","a":"$i+1$"},
    {"q":"In the formula for $x_i$, what is the upper limit of the summation index $j$?","a":"$n$"},
    {"q":"Under what condition on the diagonal elements $a_{ii}$ can backward substitution be performed?","a":"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$."},
    {"q":"How is the determinant of a triangular matrix $A$ calculated?","a":"It is the product of the diagonal elements: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$."},
    {"q":"Backward substitution works if and only if the system has a unique solution, which implies $\\det(A) \\ne$ _____.","a":"$0$"},
    {"q":"How many multiplications and divisions are required in step 1 of the backward substitution algorithm?","a":"$1$"},
    {"q":"How many additions and subtractions are required in step 1 of the backward substitution algorithm?","a":"$0$"},
    {"q":"In the $n$-th step of the algorithm, how many multiplications and divisions are performed?","a":"$n$"},
    {"q":"In the $n$-th step of the algorithm, how many additions and subtractions are performed?","a":"$n-1$"},
    {"q":"What is the total number of multiplications and divisions required for backward substitution?","a":"$n(n+1)/2$"},
    {"q":"What is the total number of additions and subtractions required for backward substitution?","a":"$n(n-1)/2$"},
    {"q":"In terms of Big O notation, what is the complexity of multiplications and divisions for backward substitution?","a":"$n^2/2 + \\mathcal{O}(n)$"},
    {"q":"In terms of Big O notation, what is the complexity of additions and subtractions for backward substitution?","a":"$n^2/2 + \\mathcal{O}(n)$"},
    {"q":"How does the source material define the notation $\\mathcal{O}(n^k)$?","a":"A polynomial with degree at most $k$."},
    {"q":"Why is the leading term of the time complexity (e.g., $n^2/2$) prioritized over lower-order terms?","a":"It determines the magnitude of the formula as $n$ becomes large."},
    {"q":"If $3x_4 = 12$ in a triangular system, what is the value of $x_4$?","a":"$4$"},
    {"q":"If $2x_3 - x_4 = -2$ and $x_4 = 4$, what is the resulting value of $x_3$?","a":"$1$"},
    {"q":"In a linear system $Ax=b$, what does the vector $b$ represent?","a":"The right-hand side constant values."},
    {"q":"A triangular matrix where $a_{ij} = 0$ for $i > j$ is specifically called an _____ triangular matrix.","a":"Upper"},
    {"q":"Concept: Time Complexity","a":"Definition: The number of arithmetic operations required to perform an algorithm as a function of the input size $n$."},
    {"q":"What arithmetic operation is performed at every step $i$ to isolate $x_i$?","a":"Division by $a_{ii}$."},
    {"q":"Term: Leading Term","a":"Definition: The term in a polynomial with the highest power of $n$, determining the growth rate for large $n$."},
    {"q":"How many terms are in the summation $\\sum_{j=i+1}^{n} a_{ij}x_j$ when $i = n-1$?","a":"$1$"},
    {"q":"True or False: If any diagonal element of a triangular matrix is zero, the determinant is zero.","a":"True"},
    {"q":"Which specific field of mathematics is the source material '03_01_triangular-systems.md' discussing?","a":"Numerical Analysis."},
    {"q":"The summation term in the backward substitution formula accounts for the _____ of previously solved variables.","a":"Back-substitution (or back-replacement)."},
    {"q":"What is the closed-form sum of the first $n$ integers, $1 + 2 + \\dots + n$?","a":"$n(n+1)/2$"},
    {"q":"If $n = 1000$, what is the approximate magnitude of multiplications required for backward substitution?","a":"Approximately $500,000$ (or $n^2/2$)."},
    {"q":"The notation $\\mathcal{O}(n^k)$ effectively _____ lower-order terms that are less significant for large $n$.","a":"Hides (or ignores)."},
    {"q":"In the example system, $x_2$ is found using the formula $(13 + x_3 - 2x_4)/3$. If $x_3=1$ and $x_4=4$, what is $x_2$?","a":"$2$"},
    {"q":"In the example system, $x_1$ is found using $(3 + x_2 - 3x_3 - x_4)/2$. If $x_2=2, x_3=1, x_4=4$, what is $x_1$?","a":"$-1$"},
    {"q":"What type of systems (linear or nonlinear) is backward substitution designed for?","a":"Linear systems."},
    {"q":"If a matrix is upper triangular, its _____ consist only of elements where the row index is less than or equal to the column index.","a":"Non-zero entries."},
    {"q":"Why is it often more efficient to define a specialized method for a specific problem type like triangular systems?","a":"Specialized methods exploit the structure of the problem to reduce operation counts."},
    {"q":"What is the result of $1 + 2 + \\dots + (n-1)$?","a":"$(n-1)n/2$"},
    {"q":"How does the complexity of multiplications/divisions compare to additions/subtractions in backward substitution?","a":"They have the same leading order complexity ($n^2/2$)."},
    {"q":"In the Hungarian text, the word 'műveletigény' refers to _____.","a":"Operation count (or computational complexity)."},
    {"q":"Process: Solving $x_i$ requires knowing the values of all $x_j$ where $j$ is _____ than $i$.","a":"Greater"},
    {"q":"If the determinant of a triangular matrix is non-zero, does the backward substitution algorithm always yield a solution?","a":"Yes, it yields a unique solution."},
    {"q":"The algorithm $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ corresponds to solving the $i$-th _____ of the system.","a":"Row (or equation)."},
    {"q":"Is backward substitution a finite or iterative numerical method?","a":"Finite (it requires finitely many steps)."},
    {"q":"Formula: Number of divisions in the entire backward substitution algorithm for an $n \\times n$ matrix.","a":"$n$"},
    {"q":"What determines if backward substitution can be performed for a specific $i$-th row?","a":"Whether $a_{ii} \\ne 0$."},
    {"q":"Hungarian term: 'egyértelmű megoldás' means _____.","a":"Unique solution."},
    {"q":"In the complexity analysis table, what is the count of multiplication/division for step 2?","a":"2"},
    {"q":"In the complexity analysis table, what is the count of addition/subtraction for step 2?","a":"1"},
    {"q":"What does the $a_{1n}x_n$ term represent in the first equation of a triangular system?","a":"The product of the coefficient $a_{1n}$ and the $n$-th unknown $x_n$."},
    {"q":"If $n=2$, how many total multiplications/divisions are needed?","a":"$3$ (calculated as $2(3)/2$)."},
    {"q":"If $n=2$, how many total additions/subtractions are needed?","a":"$1$ (calculated as $1(2)/2$)."},
    {"q":"In the expression $n^2/2 + \\mathcal{O}(n)$, the term $\\mathcal{O}(n)$ is considered a _____ order term.","a":"Lower"}
  ],
  's33': [
    {"q":"In the context of linear systems, what is an 'augmented matrix'?","a":"A matrix formed by appending the right-hand side vector $b$ as an additional column to the coefficient matrix $A$."},
    {"q":"What is the primary goal of the 'elimination' phase in Gaussian elimination?","a":"To transform the augmented matrix into an equivalent upper triangular form."},
    {"q":"What name is given to the diagonal elements $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ used during the Gaussian elimination process?","a":"Pivot elements"},
    {"q":"Under what specific numerical condition can basic Gaussian elimination be performed without any row interchanges?","a":"It can be performed if and only if all the pivot elements are non-zero."},
    {"q":"In Gaussian elimination, what is the 'backward substitution' phase used for?","a":"Solving the resulting upper triangular system for the unknown variables starting from $x_n$ to $x_1$."},
    {"q":"In the $k$-th step of Gaussian elimination, what is the formula for the multiplier $l_{ik}$ used to eliminate $a_{ik}$?","a":"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$"},
    {"q":"What is the leading term of the time complexity for Gaussian elimination of an $n \\times n$ system?","a":"$\\frac{n^3}{3}$"},
    {"q":"According to the total operation count, how many multiplications and divisions are required for Gaussian elimination including backward substitution?","a":"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$"},
    {"q":"According to the total operation count, how many additions and subtractions are required for Gaussian elimination including backward substitution?","a":"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$"},
    {"q":"Why does dividing by a pivot element close to zero cause issues in floating-point arithmetic?","a":"It can lead to a significant increase in rounding errors, making the numerical solution unreliable."},
    {"q":"What is the strategy for 'partial pivoting' (also known as maximal column pivoting)?","a":"Before step $k$, find the element with the largest magnitude in the $k$-th column at or below the diagonal and swap its row with the $k$-th row."},
    {"q":"Which index is selected as the pivot row $l$ in partial pivoting for step $k$?","a":"The index $l$ such that $|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}$."},
    {"q":"How does 'complete pivoting' differ from 'partial pivoting'?","a":"It searches for the largest magnitude element in the entire remaining sub-matrix rather than just the current column."},
    {"q":"What is a major disadvantage of complete pivoting compared to partial pivoting?","a":"It requires more comparisons to find the pivot element, which slows down the algorithm."},
    {"q":"When performing complete pivoting, what must be tracked in addition to row interchanges?","a":"Column interchanges, which represent changes in the order of the variables $x_1, \\ldots, x_n$."},
    {"q":"Theorem 3.26 states that a linear system can be solved by Gaussian elimination with partial pivoting if and only if _____.","a":"$\\det(\\mathbf{A}) \\neq 0$ (the matrix is invertible)."},
    {"q":"In matrix notation, how are row changes in Gaussian elimination represented using a permutation matrix $\\mathbf{P}$?","a":"The system is transformed from $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ to $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$."},
    {"q":"What is the primary motivation for using 'scaled partial pivoting'?","a":"To reduce rounding errors when the magnitudes of coefficients in different rows vary significantly."},
    {"q":"In scaled partial pivoting, how is the scale factor $s_i$ for row $i$ typically defined?","a":"$s_i = \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$"},
    {"q":"In 'partial pivoting with implicit scaling', why are the rows not actually multiplied by the scaling factors?","a":"To avoid introducing additional rounding errors through unnecessary division operations."},
    {"q":"What is the selection criterion for the pivot row $l$ in scaled partial pivoting?","a":"Select $l$ such that $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$."},
    {"q":"A square matrix $\\mathbf{A}$ is 'diagonally dominant' if, for every row $i$, $|a_{ii}|$ is greater than _____.","a":"The sum of the magnitudes of the other elements in that row: $\\sum_{j \\neq i} |a_{ij}|$."},
    {"q":"What does Theorem 3.32 conclude about Gaussian elimination on a diagonally dominant matrix?","a":"It can be performed without pivoting and is stable with respect to rounding errors."},
    {"q":"How does diagonal dominance relate to matrix invertibility?","a":"Any diagonally dominant matrix is guaranteed to be invertible."},
    {"q":"Concept: Symmetric Positive Definite (SPD) Matrix","a":"Definition: A symmetric matrix $\\mathbf{A}$ where $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$."},
    {"q":"What is the 'principal minor' condition for a symmetric matrix to be positive definite?","a":"All the upper-left principal minors must have a positive determinant."},
    {"q":"If a matrix is symmetric positive definite, what can be said about its pivot elements during Gaussian elimination without pivoting?","a":"All pivot elements are guaranteed to be positive."},
    {"q":"What is the effect of interchanging rows on the determinant of a matrix?","a":"Each row interchange multiplies the determinant by $-1$."},
    {"q":"In an optimized implementation of Gaussian elimination, what happens to the elements under the main diagonal after they are eliminated?","a":"They are typically overwritten by the multipliers $l_{ik}$ or left as meaningless values to save memory."},
    {"q":"Term: Pivot Row","a":"Definition: The row containing the pivot element used to eliminate variables in the rows below it during Gaussian elimination."},
    {"q":"In the provided example with 4-digit arithmetic, what was the relative error for $x_1$ when dividing by the small pivot $0.0002$?","a":"$300\\%$"},
    {"q":"What is the first step in the 'implicit scaling' algorithm before starting elimination?","a":"Compute the scale factor $s_i$ for each row $i$ as the maximum absolute value in that row."},
    {"q":"True or False: If a system has a unique solution, standard Gaussian elimination without pivoting will always find it.","a":"False; it can fail if a pivot element becomes zero during the process."},
    {"q":"In programming Gaussian elimination, what is a more efficient alternative to physically interchanging large rows in memory?","a":"Using an index array to keep track of the row order (indirect addressing)."},
    {"q":"How does partial pivoting help reduce rounding errors?","a":"By ensuring the divisor (pivot) is as large as possible, which minimizes the growth of multipliers and rounding errors."},
    {"q":"What property of Symmetric Positive Definite matrices ensures numerical stability without pivoting?","a":"The pivots are always positive and the algorithm is stable with respect to rounding errors for these matrices."},
    {"q":"In Gaussian elimination, the multiplier $l_{ik}$ is stored to potentially perform what future matrix decomposition?","a":"$LU$ decomposition (though not explicitly detailed in the source, $l_{ik}$ are the components of $L$)."},
    {"q":"If the algorithm for Gaussian elimination encounters a column where all elements $a_{ik}$ for $i \\geq k$ are zero, what does this imply about the matrix $\\mathbf{A}$?","a":"The matrix is singular, and $\\det(\\mathbf{A}) = 0$."},
    {"q":"In partial pivoting, what happens if multiple rows have the same maximum absolute value in the current column?","a":"The smallest row index $l$ is typically chosen."},
    {"q":"In the backward substitution formula $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$, what must be non-zero for the formula to be valid?","a":"The pivot element $a_{ii}$."},
    {"q":"Why is scaling using powers of the number system base (e.g., $\\beta^{r_i}$) preferred in some implementations?","a":"Division by base powers does not introduce rounding errors in floating-point representations."},
    {"q":"What is the effect of scaling a row on the solution $\\mathbf{x}$ of the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","a":"The solution remains identical; only the numerical selection of pivots is affected."},
    {"q":"The proof of Theorem 3.32 uses the _____ inequality to show that diagonal dominance is preserved in subsequent steps of elimination.","a":"Triangle Inequality"},
    {"q":"In the complexity analysis, which phase of Gaussian elimination is more expensive: Elimination or Backward Substitution?","a":"Elimination ($O(n^3)$ versus $O(n^2)$ for backward substitution)."},
    {"q":"What is the result of applying Gaussian elimination to a symmetric positive definite matrix without pivoting?","a":"The matrix is successfully reduced to upper triangular form with all positive diagonal entries."},
    {"q":"If $\\det(\\mathbf{A}) \\neq 0$, what does Theorem 3.28 guarantee regarding permutation matrices?","a":"There exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ can be solved without row changes."},
    {"q":"What happens if Gaussian elimination with partial pivoting is attempted on a singular matrix?","a":"The process will eventually fail because at some step $k$, all elements in the column $k$ from the $k$-th row down will be zero."},
    {"q":"In the 2D example $0.0002x_1 - 30.5x_2 = -60.99$ and $5.060x_1 - 1.05x_2 = 250.9$, why was the second variable $x_2$ less affected by the error than $x_1$?","a":"The error was introduced while calculating $x_1$ during back-substitution because it depended on the magnified rounding error from the elimination step."},
    {"q":"Cloze: In Gaussian elimination, the variable $x_k$ is eliminated from rows $i = \\dots$ in the $k$-th step.","a":"$k+1, \\ldots, n$"},
    {"q":"What is the value of the multiplier $l_{i1}$ in terms of matrix entries?","a":"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"},
    {"q":"Concept: Time Complexity","a":"Definition: The measure of the number of operations required by an algorithm as a function of the input size $n$."},
    {"q":"What is the relationship between the determinant of a matrix and the pivot elements in Gaussian elimination without row swaps?","a":"The determinant is equal to the product of the pivot elements: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$."},
    {"q":"What is the specific purpose of the $l$ and $m$ indices in complete pivoting?","a":"Index $l$ represents the row and $m$ represents the column of the largest available element to be moved to the pivot position."},
    {"q":"True or False: Gaussian elimination with partial pivoting always yields the exact solution in floating-point arithmetic.","a":"False; it reduces rounding error but does not eliminate it entirely."},
    {"q":"Which matrix type is explicitly mentioned as being stable under Gaussian elimination without pivoting?","a":"Diagonally dominant matrices (and symmetric positive definite matrices)."},
    {"q":"What is the alternative name for 'partial pivoting' in Gaussian elimination?","a":"Maximal column pivoting"},
    {"q":"In partial pivoting, from which set of elements in the $k$-th column is the pivot selected?","a":"The elements in and under the main diagonal (from row $k$ to $n$)."},
    {"q":"In the $k$-th step of partial pivoting, what criteria determines the selection of the pivot row $l$?","a":"$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\dots, n\\}$"},
    {"q":"What physical action is performed once the pivot row $l$ is identified in partial pivoting?","a":"The $k$-th and $l$-th rows are interchanged."},
    {"q":"According to the provided theorem, a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved by Gaussian elimination with partial pivoting if and only if $\\det(\\mathbf{A})$ is _____.","a":"Non-zero ($\\neq 0$)"},
    {"q":"The invertibility of matrix $\\mathbf{A}$ is equivalent to the existence of a _____ solution for the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for all $\\mathbf{b}$.","a":"Unique"},
    {"q":"In the proof of the equivalence theorem, if a row change occurs in the $k$-th step, how does $\\det(\\mathbf{A}^{(k)})$ relate to $\\det(\\mathbf{A}^{(k-1)})$?","a":"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$"},
    {"q":"If no row change is needed during the $k$-th step of Gaussian elimination, what is the relationship between $\\det(\\mathbf{A}^{(k)})$ and $\\det(\\mathbf{A}^{(k-1)})$?","a":"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$"},
    {"q":"If partial pivoting terminates at step $k$ because all $a_{ik}^{(k-1)} = 0$ for $i = k, \\dots, n$, what is the value of $\\det(\\mathbf{A})$?","a":"Zero"},
    {"q":"Why is it numerically advantageous to move the largest magnitude element to the pivot position?","a":"It minimizes rounding errors by ensuring the division factor is as small as possible."},
    {"q":"How does partial pivoting prevent algorithm failure when the diagonal element $a_{kk}$ is zero?","a":"It swaps the row with a lower row containing a non-zero element in that column."},
    {"q":"In the provided $4 \\times 4$ matrix example, which two rows are interchanged in the very first step?","a":"The first row and the third row."},
    {"q":"In the first step of the example matrix, why is the row beginning with $-3$ swapped to the top?","a":"The value $|-3|$ is the maximum absolute value in the first column."},
    {"q":"The effect of all row changes in partial pivoting can be represented by multiplying $\\mathbf{A}$ by a _____ matrix $\\mathbf{P}$.","a":"Permutation"},
    {"q":"If $\\det(\\mathbf{A}) \\neq 0$, there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ is solvable without _____.","a":"Row changes (or further pivoting)"},
    {"q":"Why do humans often prefer using fractions when performing Gaussian elimination by hand?","a":"Fractions allow for an exact solution without introducing rounding errors."},
    {"q":"What is the main drawback of standard Gaussian elimination without pivoting when implemented on a computer?","a":"Small pivots can lead to large rounding errors that degrade the precision of the result."},
    {"q":"In a system of $n$ equations, what is the label of the coefficient matrix after the final step of Gaussian elimination?","a":"$\\mathbf{A}^{(n-1)}$"},
    {"q":"How is the final triangular system solved once Gaussian elimination is complete?","a":"Backward substitution"},
    {"q":"If the Gaussian elimination process reaches a state where the bottom-right submatrix has a column of zeros, what does this indicate about the system's solvability?","a":"The system cannot be solved uniquely because the determinant is zero."},
    {"q":"In the second elimination step of the example, why are the second and fourth rows interchanged?","a":"The element $\\frac{14}{3}$ in the fourth row is larger in magnitude than $-\\frac{1}{3}$ in the second row."},
    {"q":"According to the transcript, how does the numerical result from partial pivoting relate to the exact solution?","a":"It is an approximation due to rounding at each step to a certain precision."},
    {"q":"Concept: Pivot element","a":"Definition: The element in the diagonal position used to eliminate coefficients in the rows below it."},
    {"q":"True or False: Partial pivoting requires searching the entire remaining submatrix for the largest element.","a":"False (That is complete pivoting; partial pivoting only searches the current column)."},
    {"q":"If a matrix is invertible, what does the theorem guarantee about Gaussian elimination with partial pivoting?","a":"The elimination process can be successfully performed to completion."},
    {"q":"How many row interchanges are required if the largest magnitude element is already in the $a_{kk}$ position?","a":"Zero"},
    {"q":"Formula: The value of the determinant of $\\mathbf{A}$ in terms of the final upper triangular matrix $\\mathbf{A}^{(n-1)}$ after $m$ row swaps.","a":"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$"},
    {"q":"What is the value of $\\det(\\mathbf{A}^{(n-1)})$ if the triangular system is solvable?","a":"It is non-zero."},
    {"q":"In the context of the proof, what property of determinants allows $\\det(\\mathbf{A}^{(k)})$ to equal $-\\det(\\mathbf{A}^{(k-1)})$?","a":"Swapping two rows of a matrix reverses the sign of its determinant."},
    {"q":"If a matrix $\\mathbf{A}$ has $\\det(\\mathbf{A}) = 0$, what will eventually happen during partial pivoting?","a":"A step will be reached where all elements in the current column on and below the diagonal are zero."},
    {"q":"What is the first row of the final upper triangular matrix in the provided example?","a":"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$"},
    {"q":"In the $4 \\times 4$ example, what is the final value found for $x_4$?","a":"$-1$"},
    {"q":"Step: After finding the pivot and swapping rows, what is the next procedural step in the elimination?","a":"Subtracting multiples of the pivot row from the rows below to create zeros in the current column."},
    {"q":"How is the multiplier calculated for row $i$ in the $k$-th step of elimination?","a":"By dividing the element to be eliminated ($a_{ik}$) by the pivot element ($a_{kk}$)."},
    {"q":"Why does dividing by a 'largest possible number' during multiplier calculation help with rounding?","a":"It prevents the multipliers from becoming excessively large, which would amplify errors in subsequent subtractions."},
    {"q":"In the example, the solution for $x_1$ is _____.","a":"$4$"},
    {"q":"What does the Hungarian text suggest about the necessity of partial pivoting?","a":"It is sometimes necessary to perform the calculation at all, and often advisable to reduce errors."},
    {"q":"If partial pivoting is used, is it possible to have a zero pivot if the matrix is non-singular?","a":"No, if the matrix is non-singular, at least one element in the column must be non-zero."},
    {"q":"The determinant of an upper triangular matrix is the _____ of its diagonal elements.","a":"Product"},
    {"q":"What is the result for $x_3$ in the $4 \\times 4$ example?","a":"$2$"},
    {"q":"In the $k$-th step, the pivot search is restricted to rows $i$ where $i \\ge$ _____.","a":"$k$"},
    {"q":"The process of moving the largest magnitude element to the diagonal is intended to avoid dividing by _____ numbers.","a":"Small (or zero)"},
    {"q":"True or False: Partial pivoting always results in a positive determinant.","a":"False (The sign depends on the number of row swaps and the final diagonal products)."},
    {"q":"In the third step of the example, which rows are swapped?","a":"The third and fourth rows."},
    {"q":"What is the second variable solved for in the backward substitution of the example?","a":"$x_3$"},
    {"q":"Term: Permutation Matrix","a":"Definition: An identity matrix with its rows reordered, used to perform row exchanges via matrix multiplication."},
    {"q":"If $\\mathbf{A}$ is invertible, the system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has _____ solution(s).","a":"Exactly one (or a unique)"},
    {"q":"In the provided example, the final pivot element in the fourth row after elimination is _____.","a":"$-\\frac{143}{24}$"},
    {"q":"What happens to the augmented part of the matrix (the $\\mathbf{b}$ vector) during a row swap?","a":"The corresponding elements in the $\\mathbf{b}$ vector are swapped along with the rows."},
    {"q":"What is the value of $x_2$ in the example problem?","a":"$3$"},
    {"q":"In the proof, why is $\\det(\\mathbf{A}^{(n-1)})$ non-zero if (i) holds?","a":"Because the assumption is that the elimination can be completed to form a solvable triangular system."},
    {"q":"Under what condition does the determinant of a matrix equal zero based on its structure during elimination?","a":"When a column (from the diagonal down) consists entirely of zeros."},
    {"q":"Why is the row swap done *before* the elimination step?","a":"To ensure the current step uses the most stable pivot available for the entire column."},
    {"q":"How does the transcript characterize the result of Gaussian elimination when $a_{kk} = 0$ and no swaps are possible?","a":"The algorithm terminates because it cannot continue without a non-zero pivot."},
    {"q":"In the Hungarian text, what is the '3.26. tétel' (Theorem 3.26) equivalent to in the English source?","a":"The theorem stating the equivalence of system solvability, non-zero determinant, and invertibility."},
    {"q":"In Gaussian elimination, what is another name for 'complete pivoting'?","a":"Maximal pivoting."},
    {"q":"At the $k$-th step of complete pivoting, the indices $l$ and $m$ are chosen such that $|a_{lm}|$ is the maximum of the absolute values in which range?","a":"The range where $i = k, \\ldots, n$ and $j = k, \\ldots, n$."},
    {"q":"What two types of interchanges are performed during a step of Gaussian elimination with complete pivoting?","a":"The interchange of the $k$-th and $l$-th rows and the $k$-th and $m$-th columns."},
    {"q":"How does interchanging the $k$-th and $m$-th columns affect the linear system variables?","a":"It changes which column corresponds to which unknown variable ($x_1, \\ldots, x_n$)."},
    {"q":"What is the primary disadvantage of complete pivoting compared to partial pivoting?","a":"It requires significantly more comparisons to find the maximum element, making the method slower."},
    {"q":"When solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ with complete pivoting, how is the final value of the variables determined?","a":"By solving the resulting triangular system while accounting for all column (variable) swaps."},
    {"q":"A square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ is called row diagonally dominant if for every $i$, $|a_{ii}| >$ _____.","a":"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$."},
    {"q":"According to the provided theorem, if a matrix $\\mathbf{A}$ is diagonally dominant, what property does it necessarily have regarding its inverse?","a":"The matrix $\\mathbf{A}$ is invertible."},
    {"q":"In the proof of invertibility for diagonally dominant matrices, what assumption is made about the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$?","a":"It is assumed to have a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$ to reach a contradiction."},
    {"q":"If a matrix is row diagonally dominant, can Gaussian elimination be performed without pivoting?","a":"Yes, it can be performed without pivoting."},
    {"q":"What is the numerical stability status of Gaussian elimination when applied to a diagonally dominant matrix without pivoting?","a":"The method is stable with respect to rounding errors."},
    {"q":"Theorem 3.32 states that if $\\mathbf{A}$ is diagonally dominant, every intermediate matrix $\\mathbf{A}^{(k)}$ in Gaussian elimination is also _____.","a":"Diagonally dominant."},
    {"q":"A square matrix is positive definite if it is _____ and $x^T A x > 0$ for all $x \\ne 0$.","a":"Symmetric."},
    {"q":"Define a 'positive semi-definite' matrix based on the quadratic form $x^T A x$.","a":"A symmetric matrix where $x^T A x \\ge 0$ for all $x$."},
    {"q":"What condition involving 'principal minors' determines if a symmetric matrix is positive definite?","a":"All of its upper left minors (principal minors) must have a positive determinant."},
    {"q":"If a symmetric matrix $\\mathbf{A}$ is positive definite, what is guaranteed about the pivot elements during Gaussian elimination without pivoting?","a":"The pivot elements are all positive."},
    {"q":"Gaussian elimination on a symmetric positive definite matrix without pivoting is stable with respect to _____.","a":"Rounding errors."},
    {"q":"What is the purpose of 'row scaling' (sorkiegyenlítés) in numerical linear algebra?","a":"To equalize the magnitudes of coefficients to reduce rounding errors."},
    {"q":"In the context of row scaling, what does the matrix $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ represent?","a":"A diagonal matrix where each $d_i$ is a non-zero multiplier for the $i$-th equation."},
    {"q":"According to the strategy for row scaling, what is a common choice for $s_i$ to normalize coefficients?","a":"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$."},
    {"q":"To avoid introducing new rounding errors during row scaling, what specific values should the multipliers $d_i$ take?","a":"They should be powers of the computer's number representation base $\\beta$."},
    {"q":"What is 'implicit row scaling' in Gaussian elimination?","a":"A method where scale factors (weights) are used only to select pivots, without actually scaling the matrix elements."},
    {"q":"According to Theorem 3.30, if row scaling does not change the pivot selections, how do the numerical solutions of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ and $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ compare?","a":"They will be exactly the same."},
    {"q":"In Algorithm 3.31, how is the pivot row index $l$ chosen using implicit scaling?","a":"By finding the index $l$ that maximizes the ratio $\\frac{|a_{ik}|}{s_i}$ for $k \\le i \\le n$."},
    {"q":"Why might a programmer use a pointer vector $m[i]$ to handle row swaps instead of moving actual matrix rows?","a":"To reduce the number of operations, as swapping elements in a small vector is faster than swapping entire matrix rows."},
    {"q":"If $m[i]$ is used as a row index pointer vector, how is the matrix element $a_{ij}$ accessed?","a":"As $a[m[i], j]$."},
    {"q":"The proof for the invertibility of diagonally dominant matrices utilizes the _____ inequality.","a":"Triangle."},
    {"q":"What is the requirement for a matrix to be 'negative definite'?","a":"It must be symmetric and $x^T A x < 0$ for all $x \\ne 0$."},
    {"q":"In complete pivoting, if the maximum absolute value is located at $a_{lm}$, which column swap is performed at step $k$?","a":"The $k$-th column is swapped with the $m$-th column."},
    {"q":"Is it possible for Gaussian elimination on a positive definite matrix to result in a non-positive pivot element?","a":"No, if the matrix is positive definite, the pivots will always be positive."},
    {"q":"In Algorithm 3.31, what value does $s_i$ store after the weights calculation loop?","a":"The maximum absolute value found in row $i$ of the coefficient matrix."},
    {"q":"What does the expression $l_{ik} \\leftarrow a_{ik}/a_{kk}$ calculate in the Gaussian elimination algorithm?","a":"The multiplier used to eliminate the element in the $i$-th row and $k$-th column."},
    {"q":"Concept: Principal Minor.","a":"Definition: The determinant of a sub-matrix formed by the first $i$ rows and first $i$ columns. Example: $\\det(a_{11})$ is the first principal minor."},
    {"q":"What is the effect of significant magnitude differences in matrix coefficients on numerical calculations?","a":"The rounding error may increase during the calculation."},
    {"q":"If a matrix is symmetric, what property allows checking for positive definiteness using only determinants?","a":"Sylvester's criterion (the requirement that all principal minors be positive)."},
    {"q":"Why is the base $\\beta$ used in scaling (e.g., $b_{ij} := a_{ij}/\\beta^{r_i}$)?","a":"Because division by the base in floating-point arithmetic does not introduce rounding errors."},
    {"q":"How does the 'visszahelyettesítés' (back-substitution) step in Algorithm 3.31 find the value of $x_i$?","a":"By subtracting the sum of known variable products from the constant term and dividing by the diagonal coefficient $a_{ii}$."},
    {"q":"In the complete pivoting example, why was the value $4$ chosen as the first pivot?","a":"Because $|4|$ was the maximum absolute value among all coefficients in the $4 \\times 4$ system."},
    {"q":"Under what condition is complete pivoting not strictly necessary for numerical stability?","a":"When the matrix is row diagonally dominant or symmetric positive definite."},
    {"q":"What does $x^T A x$ represent in the context of defining matrix definiteness?","a":"A quadratic form."},
    {"q":"True or False: Row diagonal dominance implies that $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$.","a":"False; the definition requires a strict inequality ($>$)."},
    {"q":"What is the index range for calculating the sum in the row diagonal dominance definition?","a":"$j = 1, \\ldots, n$ such that $j \\ne i$."},
    {"q":"If a matrix $\\mathbf{A}$ is not row diagonally dominant, does it necessarily mean it is not invertible?","a":"No, diagonal dominance is a sufficient but not necessary condition for invertibility."},
    {"q":"At step $k$ of Gaussian elimination, row $l$ is the row that contains the _____ absolute value element among candidate pivot rows.","a":"Maximum."},
    {"q":"How many total determinants must be positive to confirm a $5 \\times 5$ matrix is positive definite?","a":"Five determinants (the $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ and $5\\times5$ upper-left minors)."},
    {"q":"In the Hungarian text, what is the term used for 'complete pivoting'?","a":"Teljes főelemkiválasztás."},
    {"q":"In the Hungarian text, 'sorkiegyenlítés' translates to what English numerical concept?","a":"Row equilibration or row scaling."},
    {"q":"What happens to the variable labels at the bottom of the matrix in the example when columns 1 and 4 are swapped?","a":"The label $x_1$ moves to column 4, and $x_4$ moves to column 1."},
    {"q":"What logic error is avoided by checking $|x_k| = \\max\\{|x_i|\\}$ in the diagonal dominance invertibility proof?","a":"It ensures $x_k \\ne 0$, allowing for the division necessary to reach the contradiction."},
    {"q":"Why is the multiplier in Gaussian elimination restricted to $k+1 \\le i \\le n$?","a":"Because the purpose is to eliminate elements below the pivot position in the $k$-th column."},
    {"q":"In Algorithm 3.31, what constitutes the 'INPUT'?","a":"The augmented coefficient matrix $a_{ij}$ for $i=1 \\ldots n$ and $j=1 \\ldots n+1$."},
    {"q":"The phrase 'stable with respect to rounding errors' implies that _____.","a":"Small errors introduced by computer precision do not grow large enough to invalidate the result."},
    {"q":"According to the transcript, how many options were there in the example for the first pivot if the max value was $4$?","a":"Three options (at different positions in the matrix)."},
    {"q":"When a matrix is positive definite, the value $x^T A x$ is always _____.","a":"Positive."},
    {"q":"What is the summation formula used to calculate $x^T A x$?","a":"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$."},
    {"q":"Formula: Pivot scaling ratio in implicit partial pivoting.","a":"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$."},
    {"q":"If a matrix is symmetric and all its eigenvalues are positive, it is likely to be _____.","a":"Positive definite."},
    {"q":"What is the primary motivation for using partial or complete pivoting during elimination?","a":"To prevent division by zero or by very small numbers, which increases rounding error."}
  ],
  's34': [
    {"q":"What is the primary objective of Gauss–Jordan elimination regarding the coefficient matrix?","a":"To transform the coefficient matrix part of the augmented matrix into the identity matrix $I$."},
    {"q":"In Gauss–Jordan elimination, into what form is the augmented matrix $(\\mathbf{A}, \\mathbf{b})$ converted?","a":"The form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$."},
    {"q":"Once the augmented matrix is in the form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$, how is the solution vector $\\mathbf{x}$ determined?","a":"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$."},
    {"q":"Gauss–Jordan elimination is described as a modified version of which existing method?","a":"Gaussian elimination."},
    {"q":"What specific procedural step required in standard Gaussian elimination is eliminated in the Gauss–Jordan method?","a":"Backward substitution."},
    {"q":"In the Gauss–Jordan algorithm, what is the range of the outer loop index $k$?","a":"$1$ to $n$."},
    {"q":"During the elimination process for a pivot column $k$, which rows $i$ are processed?","a":"All rows from $1$ to $n$ where $i \\ne k$."},
    {"q":"What is the formula for calculating the multiplier $l_{ik}$ in the Gauss–Jordan algorithm?","a":"$l_{ik} = a_{ik} / a_{kk}$."},
    {"q":"What is the update rule for the element $a_{ij}$ within the elimination loops?","a":"$a_{ij} = a_{ij} - l_{ik} a_{kj}$."},
    {"q":"In the update step $a_{ij} = a_{ij} - l_{ik} a_{kj}$, what is the range of the index $j$?","a":"$k+1$ to $n+1$."},
    {"q":"How is each variable $x_i$ calculated in the final step of the algorithm?","a":"$x_i = a_{i, n+1} / a_{ii}$."},
    {"q":"What is the asymptotic time complexity of Gauss–Jordan elimination for multiplications and divisions?","a":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."},
    {"q":"What is the asymptotic complexity of Gauss–Jordan elimination for additions and subtractions?","a":"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."},
    {"q":"According to the exercises, what is the exact number of multiplications and divisions needed for Gauss–Jordan elimination?","a":"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$."},
    {"q":"How does the computational cost of Gauss–Jordan elimination compare to standard Gaussian elimination?","a":"It is higher, requiring more calculations."},
    {"q":"What defines the 'diagonal form' resulting from the first set of nested loops in the algorithm?","a":"A matrix where all elements $a_{ij}$ are zero if $i \\ne j$."},
    {"q":"In the context of the provided examples, what are the solution values for the linear system?","a":"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$."},
    {"q":"Which strategy can be combined with Gauss–Jordan elimination to improve numerical stability?","a":"Pivoting strategies (partial or total)."},
    {"q":"In Gauss–Jordan elimination with partial pivoting, what is the first step before eliminating a column?","a":"Finding the maximum absolute value in the current column and interchanging the necessary rows."},
    {"q":"Why does Gauss–Jordan elimination allow for the solution to be read 'immediately'?","a":"Because the coefficient matrix is reduced to the identity matrix, leaving the solution in the last column."},
    {"q":"The process of transforming the coefficient matrix to the identity matrix involves making elements zero both below and _____ the diagonal.","a":"Above."},
    {"q":"Gauss–Jordan elimination is specifically useful for performing calculations on which type of device?","a":"A computer or calculator."},
    {"q":"What does the notation $(\\mathbf{A}, \\mathbf{b})$ represent in the source material?","a":"The augmented coefficient matrix of a linear system."},
    {"q":"If the multiplier $l_{ik}$ is applied to a row $i$ where $i < k$, which part of the matrix is being eliminated?","a":"The elements above the main diagonal."},
    {"q":"If the multiplier $l_{ik}$ is applied to a row $i$ where $i > k$, which part of the matrix is being eliminated?","a":"The elements below the main diagonal."},
    {"q":"In the provided algorithm, which variable represents the number of equations in the linear system?","a":"$n$."},
    {"q":"What is the range of indices for the input augmented coefficient matrix $a_{ij}$?","a":"$i = 1, \\dots, n$ and $j = 1, \\dots, n+1$."},
    {"q":"True or False: In Gauss–Jordan elimination, the coefficient matrix is always transformed into a triangular matrix as the final result.","a":"False."},
    {"q":"What is the purpose of multiplying a row by the reciprocal of its diagonal element in the final stage of the algorithm?","a":"To convert the diagonal elements to ones, forming the identity matrix."},
    {"q":"The complexity of simple Gaussian elimination is roughly $\\frac{n^3}{3}$; what is the approximate complexity of Gauss–Jordan?","a":"$\\frac{n^3}{2}$."},
    {"q":"In the step $l_{ik} \\leftarrow a_{ik}/a_{kk}$, what is the term $a_{kk}$ called?","a":"The pivot element."},
    {"q":"What prevents the modification of previously zeroed columns in the step $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$?","a":"The fact that $a_{kj}$ is zero for $j < k$ in the pivot row (once processing reaches that column)."},
    {"q":"In Example 3.35, what happens to the element in the first row, second column ($a_{12}$) during the second iteration of $k$?","a":"It is reduced to zero using the second row as a reference."},
    {"q":"What is the Hungarian term for Gauss–Jordan elimination mentioned in the sources?","a":"Gauss–Jordan-elimináció."},
    {"q":"Term: Partial Pivoting","a":"Definition: Selecting the largest available absolute value in a column to use as the pivot and swapping rows accordingly."},
    {"q":"Term: Identity Matrix","a":"Definition: A square matrix where all elements on the main diagonal are ones and all other elements are zeros."},
    {"q":"What is the result of the final loop: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?","a":"The normalization of the diagonal elements to one and the extraction of the solution values."},
    {"q":"In the provided YouTube transcript, what is mentioned as the 'goal' of the Gauss-Jordan elimination?","a":"To get the identity matrix in the last step of the coefficient matrix part."},
    {"q":"Why does the first column remain unchanged ($1, 0, 0, 0$) in later steps of the example elimination?","a":"Because the corresponding elements in the pivot rows used for subtraction are zero."},
    {"q":"If the algorithm successfully converts $(A, b)$ to $(I, x)$, what matrix property of $A$ was necessary?","a":"$A$ must be non-singular (invertible)."},
    {"q":"How does Gauss–Jordan elimination facilitate solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","a":"By performing row operations until the equation reads $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$."},
    {"q":"In the Hungarian source, what is the alternate name given for Gauss–Jordan-elimináció?","a":"Jordan-elimináció."},
    {"q":"Concept: Time Complexity","a":"Definition: The number of arithmetic operations required by an algorithm as a function of the input size $n$."},
    {"q":"In the context of the Gauss–Jordan algorithm, what does $a_{i, n+1}$ represent?","a":"The element in the $i$-th row of the augmented part (the vector $\\mathbf{b}$)."},
    {"q":"In the partial pivoting example, why were rows 1 and 2 interchanged initially?","a":"To move the largest absolute value in the first column ($2$) to the pivot position $a_{11}$."},
    {"q":"What happens to the row swap in partial pivoting if the maximum value is already on the diagonal?","a":"No row interchange is performed."},
    {"q":"The solution $x_4 = -2$ in the examples is derived from which ratio in the final matrix?","a":"$a_{4,5} / a_{4,4}$ (specifically $\\frac{52}{5} / -\\frac{26}{5}$)."},
    {"q":"In the YouTube transcript, what is the 'standard Gaussian elimination' end state?","a":"A triangular linear system."},
    {"q":"How many loops are nested in the main 'diagonal form' conversion part of the algorithm?","a":"Three (indices $k$, $i$, and $j$)."},
    {"q":"What is the role of the 'if $i \\neq k condition in the algorithm?","a":"It ensures that the pivot row itself is not modified during the elimination step for that column."},
    {"q":"According to the transcript, which version of the method is specifically useful for numerical calculations on a computer?","a":"Gauss–Jordan elimination with partial pivoting."},
    {"q":"In the examples, what value does the multiplier $l_{ik}$ have if $a_{ik}$ is already zero?","a":"Zero, resulting in no change to row $i$ for that step."},
    {"q":"What does the superscript $(n-1)$ in $\\mathbf{b}^{(n-1)}$ signify?","a":"The state of the vector $\\mathbf{b}$ after $n$ iterations of the elimination process."},
    {"q":"Which index in $a_{ij}$ represents the column number?","a":"$j$."},
    {"q":"Which index in $a_{ij}$ represents the row number?","a":"$i$."},
    {"q":"In the complexity term $\\mathcal{O}(n^2)$, what does the symbol $\\mathcal{O}$ represent?","a":"Big O notation, indicating the upper bound of the growth rate for lower-order terms."},
    {"q":"What is the resulting matrix type after the triple-nested loop but before the final normalization loop?","a":"A diagonal matrix."},
    {"q":"In the YouTube explanation, what happens to the values in the first column when subtracting the second row from the first?","a":"They are unchanged because the second row has a zero in the first column."},
    {"q":"The transition from $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$ is achieved through what type of operations?","a":"Elementary row operations."},
    {"q":"If $n=3$, how many variables are being solved for in the algorithm?","a":"Three ($x_1, x_2, x_3$)."}
  ],
  's35': [
    {"q":"What is the algebraic definition of a tridiagonal square matrix $(a_{ij})$?","a":"$a_{ij} = 0$ for all $|i - j| > 1$."},
    {"q":"In a tridiagonal matrix, where are the only possible nonzero elements located?","a":"The main diagonal and the diagonals immediately above and below it."},
    {"q":"In the standard notation for tridiagonal systems, what does the vector $(d_i)$ represent?","a":"The elements of the main diagonal."},
    {"q":"In the standard notation for tridiagonal systems, what does the vector $(c_i)$ represent?","a":"The elements in the diagonal directly above the main diagonal (superdiagonal)."},
    {"q":"In the standard notation for tridiagonal systems, what does the vector $(a_i)$ represent?","a":"The elements in the diagonal directly below the main diagonal (subdiagonal)."},
    {"q":"How many total elements are in the subdiagonal vector $(a_i)$ for an $n \\times n$ tridiagonal matrix?","a":"$n - 1$."},
    {"q":"How many total elements are in the superdiagonal vector $(c_i)$ for an $n \\times n$ tridiagonal matrix?","a":"$n - 1$."},
    {"q":"How many total elements are in the main diagonal vector $(d_i)$ for an $n \\times n$ tridiagonal matrix?","a":"$n$."},
    {"q":"What is the total storage area required to store the coefficients of an $n \\times n$ tridiagonal matrix?","a":"$3n - 2$."},
    {"q":"What happens to the elements $a_i$ below the main diagonal during the specialized Gaussian elimination algorithm?","a":"They become $0$."},
    {"q":"Which vector of coefficients remains unchanged during the elimination steps of the tridiagonal algorithm?","a":"The superdiagonal vector $(c_i)$."},
    {"q":"Which two vectors are overridden with new values during the elimination phase of the tridiagonal algorithm?","a":"$(d_i)$ and $(b_i)$."},
    {"q":"In the elimination loop of the tridiagonal algorithm, what is the range of the index $i$?","a":"From $2$ to $n$."},
    {"q":"Formula: What is the calculation for the temporary multiplier ($temp$) in the $i$-th elimination step?","a":"$temp \\leftarrow a_{i-1}/d_{i-1}$."},
    {"q":"Formula: How is $d_i$ updated during the $i$-th step of the tridiagonal elimination phase?","a":"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$."},
    {"q":"Formula: How is the right-hand side value $b_i$ updated during the $i$-th step of the elimination phase?","a":"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$."},
    {"q":"In the backward substitution phase, how is the final variable $x_n$ calculated?","a":"$x_n \\leftarrow b_n/d_n$."},
    {"q":"Formula: How is $x_i$ calculated during the backward substitution phase for $i = n-1, \\ldots, 1$?","a":"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$."},
    {"q":"What is the direction of the loop used in the backward substitution phase of the tridiagonal algorithm?","a":"Decrementing from $n-1$ down to $1$."},
    {"q":"How many multiplications and divisions are required to solve a tridiagonal system of size $n$?","a":"$5n - 4$."},
    {"q":"What is the computational complexity (multiplications/divisions) of the standard Gaussian elimination for a general matrix?","a":"$n^3/3$."},
    {"q":"Under what condition is the specialized tridiagonal Gaussian elimination algorithm guaranteed to work without pivoting?","a":"If the tridiagonal matrix $\\mathbf{A}$ is diagonally dominant."},
    {"q":"Why is pivoting generally avoided when solving tridiagonal systems?","a":"Pivoting ruins the specific tridiagonal structure of the coefficient matrix."},
    {"q":"Concept: Band Matrix","a":"Definition: A matrix where nonzero elements appear only in the main diagonal and a fixed number of diagonals above and below it."},
    {"q":"In a band matrix where $a_{ij} = 0$ for $|i - j| > 2$, how many diagonals contain potentially nonzero elements?","a":"Five diagonals (the main diagonal, two above, and two below)."},
    {"q":"Which input vectors are required for the tridiagonal algorithm's elimination phase?","a":"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ and $b_i$."},
    {"q":"What is the Hungarian term for 'tridiagonal linear systems'?","a":"Tridiagonális egyenletrendszerek."},
    {"q":"In the Hungarian source, what is the Hungarian word for the 'elimination' phase of the algorithm?","a":"Elimináció."},
    {"q":"In the Hungarian source, what is the Hungarian term for 'backward substitution'?","a":"Visszahelyettesítés."},
    {"q":"What is the primary advantage of using $3n-2$ storage for a tridiagonal matrix instead of $n^2$?","a":"It significantly reduces the amount of memory needed for large systems."},
    {"q":"Cloze: In the tridiagonal algorithm, the values $c_i$ are _____ during the elimination process.","a":"unchanged"},
    {"q":"Cloze: The standard Gaussian elimination requires $n^3/3$ operations, whereas the tridiagonal version requires only _____ operations.","a":"$5n - 4$"},
    {"q":"True or False: The tridiagonal algorithm is more efficient than standard Gaussian elimination for any matrix size $n > 1$.","a":"True (based on the $5n-4$ vs $n^3/3$ comparison)."},
    {"q":"What is the index $i$ for the first $a$ element used in the algorithm ($a_{i-1}$ when $i=2$)?","a":"$a_1$."},
    {"q":"In the backward substitution step for $x_i$, what variable must already be computed?","a":"$x_{i+1}$."},
    {"q":"Which theorem is cited as the basis for performing the algorithm without pivoting on diagonally dominant matrices?","a":"Theorem 3.32."},
    {"q":"The storage requirement $3n-2$ accounts for $n$ diagonal elements and how many off-diagonal elements?","a":"$2n - 2$ off-diagonal elements ($n-1$ above and $n-1$ below)."},
    {"q":"What is the relationship between $n$ and the number of rows in the coefficient matrix?","a":"$n$ is the number of rows (and columns) in the square matrix."},
    {"q":"Identify the vector: used as the denominator in the calculation of $temp$.","a":"The updated main diagonal vector $(d_i)$."},
    {"q":"Identify the vector: its elements are multiplied by $temp$ and subtracted from $d_i$.","a":"The superdiagonal vector $(c_i)$."},
    {"q":"In the context of the tridiagonal system, what does the vector $(b_i)$ represent?","a":"The right-hand side constants of the linear equations."},
    {"q":"What is the result of the expression $|i-j| > 1$ for elements on the main diagonal?","a":"It is false, as $|i-i| = 0$."},
    {"q":"In the Hungarian source, what is the Hungarian term for 'diagonal dominance'?","a":"Diagonálisan domináns."},
    {"q":"According to the transcript, why is it better to formulate a special version of a general algorithm?","a":"It requires significantly fewer arithmetic operations for specialized problems."},
    {"q":"What happens to the structure of the matrix if pivoting is applied to a tridiagonal system?","a":"The structure is ruined (lost)."},
    {"q":"What is the leading term in the operation count for the specialized tridiagonal algorithm?","a":"$5n$."},
    {"q":"In the provided Exercise 2, what is the value of the coefficient for $x_1$ in the first equation?","a":"1."},
    {"q":"In the provided Exercise 2, what is the value of the right-hand side constant $b_1$?","a":"1.5."},
    {"q":"In the provided Exercise 2, what is the coefficient $c_1$ (element above the diagonal in the first row)?","a":"-0.5."},
    {"q":"In the provided Exercise 2, what is the coefficient $a_1$ (element below the diagonal in the second row)?","a":"0.5."},
    {"q":"How many equations are in the system presented in Exercise 2?","a":"6."},
    {"q":"What is the half-bandwidth $k$ of a tridiagonal matrix?","a":"$k = 1$."},
    {"q":"What is the storage requirement for a general $n \\times n$ matrix compared to a tridiagonal one?","a":"$n^2$ vs $3n - 2$."},
    {"q":"During backward substitution, which $x$ value is used to calculate $x_{n-1}$?","a":"$x_n$."},
    {"q":"Cloze: A matrix is tridiagonal if $a_{ij} = 0$ for all $|i - j| > \\_\\_\\_\\_\\_$.","a":"1"},
    {"q":"Formula: How is $x_i$ updated if $c_i = 0$ in a diagonal matrix (a specific case of tridiagonal)?","a":"$x_i = b_i / d_i$."},
    {"q":"In the elimination loop, why is $d_{i-1}$ used in the denominator?","a":"It is the pivot element for the current elimination step."},
    {"q":"What is the value of $a_i$ for $i=n$?","a":"It is undefined or zero, as there are only $n-1$ subdiagonal elements."},
    {"q":"What is the value of $c_i$ for $i=n$?","a":"It is undefined or zero, as there are only $n-1$ superdiagonal elements."},
    {"q":"If $n=100$, what is the storage area needed for a tridiagonal matrix?","a":"298 ($3 \\cdot 100 - 2$)."},
    {"q":"If $n=100$, how many operations ($5n-4$) are needed for the tridiagonal algorithm?","a":"496 multiplications/divisions."}
  ],
  's36': [
    {"q":"What are 'simultaneous linear systems'?","a":"A set of linear systems that share the same coefficient matrix but have different right-hand sides."},
    {"q":"What is the general form for representing $m$ simultaneous linear systems individually?","a":"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for $i = 1, \\dots, m$."},
    {"q":"How is a set of simultaneous linear systems written concisely as a single matrix equation?","a":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"},
    {"q":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{B}$ represent?","a":"The right-hand side vector $\\mathbf{b}^{(i)}$ of the $i$-th system."},
    {"q":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{X}$ represent?","a":"The solution vector $\\mathbf{x}^{(i)}$ of the $i$-th system."},
    {"q":"What are the dimensions of the matrix $\\mathbf{B}$ if there are $n$ equations and $m$ right-hand side vectors?","a":"$n \\times m$"},
    {"q":"What are the dimensions of the solution matrix $\\mathbf{X}$ in a simultaneous linear system with $n$ variables and $m$ systems?","a":"$n \\times m$"},
    {"q":"Why can pivoting for simultaneous systems be performed on a single augmented matrix?","a":"Pivoting depends only on the coefficient matrix $\\mathbf{A}$, which is the same for all systems."},
    {"q":"What are the dimensions of the augmented matrix used to solve $m$ simultaneous systems of $n$ equations?","a":"$n \\times (n+m)$"},
    {"q":"Performing Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ results in a matrix of what form?","a":"$(\\mathbf{I}, \\mathbf{X})$"},
    {"q":"Where does the solution $\\mathbf{X}$ appear after Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","a":"In the last $m$ columns."},
    {"q":"What is the operation count for Gaussian elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?","a":"$n^3/3 + mn^2 - n/3$"},
    {"q":"In the Gaussian elimination operation count $n^3/3 + mn^2 - n/3$, what do the operations represent?","a":"The number of multiplications and divisions."},
    {"q":"What is the operation count for Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?","a":"$n^3/2 + mn^2 - n/2$"},
    {"q":"Which term in the operation count formulas scales linearly with the number of systems $m$?","a":"$mn^2$"},
    {"q":"How does the $n^3$ term in the operation count compare between Gaussian and Gauss-Jordan elimination for simultaneous systems?","a":"Gauss-Jordan has a higher $n^3$ cost ($n^3/2$) than Gaussian elimination ($n^3/3$)."},
    {"q":"Algorithm 3.37 can be reformulated to solve simultaneous systems with what specific structure?","a":"Tridiagonal linear systems."},
    {"q":"The system of equations $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ is equivalent to the matrix equation _____.","a":"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"},
    {"q":"Concept: Augmented Matrix $(\\mathbf{A}, \\mathbf{B})$","a":"Definition: A combined matrix where the coefficient matrix $\\mathbf{A}$ is followed by the matrix of all right-hand sides $\\mathbf{B}$."},
    {"q":"In the augmented matrix $(\\mathbf{A}, \\mathbf{B})$, what does the sub-matrix $\\mathbf{A}$ represent?","a":"The shared coefficient matrix for all systems."},
    {"q":"In the context of simultaneous systems, what matrix results from the $i$-th column product $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?","a":"The $i$-th column of matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(i)}$)."},
    {"q":"What matrix does the coefficient matrix $\\mathbf{A}$ become after successful Gauss-Jordan elimination on an augmented matrix?","a":"The identity matrix $\\mathbf{I}$."},
    {"q":"If $\\mathbf{A}$ is $n \\times n$, how many rows does the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ have?","a":"$n$ rows"},
    {"q":"If $\\mathbf{B}$ is a matrix of $m$ column vectors, what is the width of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","a":"$n + m$ columns"},
    {"q":"The solution matrix $\\mathbf{X}$ is composed of columns $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$, where each column is a _____.","a":"solution vector for the corresponding right-hand side $\\mathbf{b}^{(i)}$"},
    {"q":"When performing elimination, why is it efficient to solve simultaneous systems together rather than separately?","a":"The elimination steps on the coefficient matrix only need to be performed once."},
    {"q":"According to the video, what form of elimination is preferred to directly obtain the solution matrix $\\mathbf{X}$?","a":"Gauss-Jordan elimination."},
    {"q":"The formula $n^3/3 + mn^2 - n/3$ describes the multiplication/division count for which method?","a":"Gaussian elimination on an augmented matrix."},
    {"q":"In the operation count $n^3/2 + mn^2 - n/2$, what does the '$- n/2 term represent?","a":"A linear correction factor in the Gauss-Jordan operation count."},
    {"q":"How is the matrix $\\mathbf{X}$ related to $\\mathbf{A}$ and $\\mathbf{B}$ in terms of matrix multiplication?","a":"$\\mathbf{X}$ is the matrix that, when multiplied on the left by $\\mathbf{A}$, yields $\\mathbf{B}$."},
    {"q":"What is the identity matrix dimension in the result $(\\mathbf{I}, \\mathbf{X})$?","a":"$n \\times n$"},
    {"q":"True or False: Pivoting decisions in simultaneous systems are affected by the values in matrix $\\mathbf{B}$.","a":"False (pivoting depends only on the coefficient matrix $\\mathbf{A}$)."},
    {"q":"If $m=1$, the operation count $n^3/3 + mn^2 - n/3$ simplifies to the standard count for a _____.","a":"single linear system solved by Gaussian elimination"},
    {"q":"The matrix $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ is called the _____ matrix.","a":"right-hand side"},
    {"q":"The matrix $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ is called the _____ matrix.","a":"solution"},
    {"q":"What is the row size of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?","a":"$n$ (the number of equations)."},
    {"q":"What is the column size of matrix $\\mathbf{X}$ in a simultaneous system with $m$ right-hand sides?","a":"$m$"},
    {"q":"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, which matrix is the coefficient matrix?","a":"$\\mathbf{A}$"},
    {"q":"The process of solving simultaneous systems is equivalent to solving the matrix equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ for the unknown matrix _____.","a":"$\\mathbf{X}$"},
    {"q":"The Gauss-Jordan method transforms the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ into _____.","a":"$(\\mathbf{I}, \\mathbf{X})$"},
    {"q":"How many individual linear systems are being solved in a simultaneous system with $m$ right-hand sides?","a":"$m$"},
    {"q":"What is the term for the matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$?","a":"The augmented matrix."},
    {"q":"What determines whether Gaussian or Gauss-Jordan elimination can be performed on the augmented matrix?","a":"The properties and pivoting requirements of the coefficient matrix $\\mathbf{A}$."},
    {"q":"In the term $mn^2$ of the operation counts, what does $n^2$ represent for each system $i$?","a":"The operations required to process a single right-hand side vector through the elimination and back-substitution."},
    {"q":"What is the result of multiplying the coefficient matrix by the first column of the solution matrix?","a":"The first column of the right-hand side matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(1)}$)."},
    {"q":"In Gauss-Jordan elimination, the solution for the $i$-th system is found in the $(n+i)$-th _____ of the final augmented matrix.","a":"column"},
    {"q":"Which operation count term $n^3/3$ or $n^3/2$ represents the cost of reducing the coefficient matrix $\\mathbf{A}$?","a":"The term independent of $m$."},
    {"q":"To solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for multiple $i$, one performs elimination on $\\mathbf{A}$ and applies the same operations to all _____.","a":"$\\mathbf{b}^{(i)}$ vectors (or the matrix $\\mathbf{B}$)"},
    {"q":"What is the total number of entries in the solution matrix $\\mathbf{X}$?","a":"$n \\cdot m$"},
    {"q":"Which matrix equation proves that $AX=B$ is equivalent to solving $m$ individual systems?","a":"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$"}
  ],
  's37': [
    {"q":"What matrix equation defines the inverse $\\mathbf{A}^{-1}$ of a nonsingular square matrix $\\mathbf{A}$?","a":"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$"},
    {"q":"Matrix inversion is computationally equivalent to solving which type of linear system?","a":"A simultaneous linear system"},
    {"q":"In the simultaneous linear system used to find $\\mathbf{A}^{-1}$, what matrix serves as the right-hand side?","a":"The identity matrix $\\mathbf{I}$"},
    {"q":"Which elimination method is primarily used in the source material to compute the matrix inverse?","a":"Gauss-Jordan elimination"},
    {"q":"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of multiplications and divisions?","a":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"},
    {"q":"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of additions and subtractions?","a":"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"},
    {"q":"According to Exercise 5, what is the exact number of multiplications and divisions required for matrix inversion using Gauss-Jordan elimination?","a":"$3n^3/2 - n/2$"},
    {"q":"If an optimized algorithm avoids multiplications by zero in the identity matrix, how many multiplications and divisions does matrix inversion require?","a":"$n^3$"},
    {"q":"What is the operation count for additions and subtractions in an optimized Gauss-Jordan matrix inversion algorithm?","a":"$n^3 - 2n^2 + n$"},
    {"q":"Why is it possible to reduce the operation count to $n^3$ when inverting a matrix using the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$?","a":"Because the identity matrix $\\mathbf{I}$ contains many zeros, making certain multiplications unnecessary."},
    {"q":"What is the purpose of using pivoting techniques with Gauss-Jordan elimination during matrix inversion?","a":"To reduce rounding errors or avoid division by zero."},
    {"q":"Under what condition can Gaussian elimination with pivoting be performed?","a":"$\\det(\\mathbf{A}) \\neq 0$"},
    {"q":"What is the relationship between $\\det(\\mathbf{A})$ and the determinant of the matrix after elimination $\\det(\\mathbf{A}^{(n-1)})$?","a":"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$"},
    {"q":"In the formula $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$, what does the variable $s$ represent?","a":"The number of row changes (swaps) performed during elimination."},
    {"q":"How is the determinant calculated using the pivot elements after Gaussian elimination?","a":"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$"},
    {"q":"If the number of row changes in Gaussian elimination is even, what is the relationship between the original determinant and the product of the pivots?","a":"They are equal."},
    {"q":"If the number of row changes in Gaussian elimination is odd, how does the original determinant relate to the product of the pivots?","a":"The determinant is the negative of the product of the pivots."},
    {"q":"What structure is used as the starting point for Gauss-Jordan matrix inversion?","a":"An augmented matrix $(\\mathbf{A}|\\mathbf{I})$"},
    {"q":"During Gauss-Jordan inversion, once the left side of the augmented matrix becomes $\\mathbf{I}$, what does the right side represent?","a":"The inverse matrix $\\mathbf{A}^{-1}$"},
    {"q":"What is the inverse of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$?","a":"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$"},
    {"q":"In Example 3.39, what were the diagonal elements (pivots) of the matrix after Gaussian elimination?","a":"$1, 3, 1, 38$"},
    {"q":"What is the determinant of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$?","a":"$114$"},
    {"q":"True or False: If a solution $\\mathbf{X}$ exists for $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$, then $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ also holds.","a":"True"},
    {"q":"Term: Nonsingular Matrix","a":"Definition: A square matrix that has an inverse, which is true if and only if its determinant is non-zero."},
    {"q":"Concept: Simultaneous Linear System","a":"Definition: A set of linear systems that share the same coefficient matrix $\\mathbf{A}$ but have different right-hand side vectors."},
    {"q":"In the Gauss-Jordan process, what is the goal of the 'elimination step' relative to the diagonal?","a":"To make all numbers above and below the diagonal equal to zero."},
    {"q":"In the Gauss-Jordan process, what is the final step for each row to ensure the coefficient matrix becomes the identity matrix?","a":"Divide the row by the value of the diagonal (pivot) element to make it equal to $1$."},
    {"q":"Which property of the determinant allows it to be calculated as the product of the diagonal elements of an upper triangular matrix?","a":"The determinant of an upper triangular matrix is the product of its main diagonal entries."},
    {"q":"If no row changes occur during Gaussian elimination, how is $\\det(\\mathbf{A})$ related to the pivot elements?","a":"It is exactly the product of the pivot elements."},
    {"q":"What numerical benefit does pivoting provide when a diagonal element is very small?","a":"It reduces rounding errors that occur when dividing by small numbers."},
    {"q":"What is the result of applying $\\mathbf{A}\\mathbf{A}^{-1}$?","a":"The identity matrix $\\mathbf{I}$"},
    {"q":"The augmented matrix used for inversion is $(\\mathbf{A}|\\mathbf{I})$. What is the final form of this matrix after successful Gauss-Jordan elimination?","a":"$(\\mathbf{I}|\\mathbf{A}^{-1})$"},
    {"q":"What specific matrix type is produced at the end of standard Gaussian elimination (before the Jordan steps)?","a":"An upper triangular matrix"},
    {"q":"How many multiplications/divisions are needed to invert a $10 \\times 10$ matrix using the optimized algorithm mentioned in Exercise 6?","a":"$1000$ (since $n^3 = 10^3$)"},
    {"q":"Formula: Determinant using pivots","a":"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$"},
    {"q":"Why is Gaussian elimination with pivoting preferred over simple Gaussian elimination for computer implementations?","a":"To ensure numerical stability and avoid failures due to zero pivots."},
    {"q":"In the $3 \\times 3$ inversion example, what was the pivot value in the third row after eliminating the first two columns?","a":"$3$"},
    {"q":"If a square matrix $\\mathbf{A}$ has a determinant of $0$, what can be said about its inverse $\\mathbf{A}^{-1}$?","a":"The inverse does not exist."},
    {"q":"How does swapping two rows in a matrix affect the value of its determinant?","a":"It multiplies the determinant by $-1$."},
    {"q":"Cloze: The number of operations needed for matrix inversion is roughly proportional to $n$ to the power of _____.","a":"$3$"},
    {"q":"Cloze: To find the inverse of $\\mathbf{A}$, one can solve the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ using the _____ method.","a":"Gauss-Jordan"},
    {"q":"In the context of the source material, what is the meaning of a 'nonsingular' matrix?","a":"A matrix for which the determinant is not zero."},
    {"q":"In the $4 \\times 4$ determinant example, why was the sign factor $(-1)^s$ equal to $1$?","a":"Because the Gaussian elimination was performed without any row changes ($s=0$)."},
    {"q":"What matrix dimension was the coefficient matrix in Example 3.39?","a":"$4 \\times 4$"},
    {"q":"How does the Gauss-Jordan method differ from Gaussian elimination in its final result for the coefficient matrix?","a":"Gauss-Jordan produces an identity matrix, whereas Gaussian elimination produces an upper triangular matrix."},
    {"q":"What is the identity matrix $\\mathbf{I}$ defined as in the context of matrix inversion?","a":"A square matrix with ones on the main diagonal and zeros elsewhere."},
    {"q":"Which operation is performed first in the Gauss-Jordan example to eliminate the $-1$ in the second row, first column?","a":"Adding the first row to the second row ($R2 \\leftarrow R2 + R1$)."},
    {"q":"Which operation is performed to eliminate the $-2$ in the third row, first column of the $3 \\times 3$ example?","a":"Adding twice the first row to the third row ($R3 \\leftarrow R3 + 2R1$)."},
    {"q":"In the final step of the $3 \\times 3$ inversion example, the third row $(0, 0, 3 | 2, 0, 1)$ was divided by what value?","a":"$3$"},
    {"q":"What is the common factor factored out from the resulting matrix in the inverse example?","a":"$\\frac{1}{3}$"},
    {"q":"Cloze: The Gaussian elimination with pivoting can be performed if and only if $\\det(\\mathbf{A})$ is _____.","a":"Non-zero"},
    {"q":"Why is multiplication by zero not computed in specialized matrix inversion algorithms?","a":"To improve efficiency and reduce the total number of operations."},
    {"q":"In the transcript, what is described as the 'most efficient way' to compute the inverse in terms of operations?","a":"Organizing Gauss-Jordan elimination using an augmented matrix $(\\mathbf{A}|\\mathbf{I})$."},
    {"q":"According to the transcript, how do we determine the sign of the determinant relative to the product of pivots?","a":"By checking if the number of row changes was even (same sign) or odd (opposite sign)."},
    {"q":"What is the determinant of a matrix where one of the pivot elements becomes zero during elimination and no further pivoting can move a non-zero element into that position?","a":"Zero"}
  ],
}
