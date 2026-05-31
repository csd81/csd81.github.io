// Auto-generated learning aids for chapter 4. Glossaries and flashcards bilingual.
import type { ModuleId } from '../context/ProgressContext'
import type { Lang } from '../context/LanguageContext'

export interface GlossaryEntry { term: Record<Lang, string>; def: Record<Lang, string> }
export interface Flashcard { q: Record<Lang, string> | string; a: Record<Lang, string> | string }

export const GLOSSARIES: Partial<Record<ModuleId, GlossaryEntry[]>> = {
  'fixed-point': [
    {
      "term": {
        "en": "Linear fixed-point iteration (4.1)",
        "hu": "Lineáris fixpont iteráció (4.1)"
      },
      "def": {
        "en": "$\\mathbf{x}^{(k+1)}=\\mathbf{T}\\mathbf{x}^{(k)}+\\mathbf{c}$, solving the fixed-point equation $\\mathbf{x}=\\mathbf{T}\\mathbf{x}+\\mathbf{c}$. The iteration matrix $\\mathbf{T}$ controls convergence; the splitting of $\\mathbf{A}$ that produces $\\mathbf{T}$ defines the method (Jacobi, Gauss–Seidel…).",
        "hu": "$\\mathbf{x}^{(k+1)}=\\mathbf{T}\\mathbf{x}^{(k)}+\\mathbf{c}$, az $\\mathbf{x}=\\mathbf{T}\\mathbf{x}+\\mathbf{c}$ fixpont-egyenlet megoldása. A $\\mathbf{T}$ iterációs mátrix szabja meg a konvergenciát; az $\\mathbf{A}$ felbontása, amely $\\mathbf{T}$-t adja, határozza meg a módszert (Jacobi, Gauss–Seidel…)."
      }
    },
    {
      "term": {
        "en": "Spectral radius $\\rho(\\mathbf{T})$",
        "hu": "Spektrálsugár $\\rho(\\mathbf{T})$"
      },
      "def": {
        "en": "$\\rho(\\mathbf{T})=\\max\\{|\\lambda|\\}$ over eigenvalues. $\\mathbf{T}^k\\to\\mathbf{0}$ if and only if $\\rho(\\mathbf{T})<1$ (Theorem 4.1) — the master convergence criterion for linear iterations.",
        "hu": "$\\rho(\\mathbf{T})=\\max\\{|\\lambda|\\}$ a sajátértékeken. $\\mathbf{T}^k\\to\\mathbf{0}$ pontosan akkor, ha $\\rho(\\mathbf{T})<1$ (4.1. tétel) — a lineáris iterációk fő konvergenciakritériuma."
      }
    },
    {
      "term": {
        "en": "Convergence criterion (Thm 4.1 / 4.6)",
        "hu": "Konvergenciakritérium (4.1 / 4.6. tétel)"
      },
      "def": {
        "en": "Equivalent: $\\mathbf{T}^k\\to\\mathbf{0}$; $\\mathbf{T}^k\\mathbf{x}\\to\\mathbf{0}$ for all $\\mathbf{x}$; $\\rho(\\mathbf{T})<1$. For $\\mathbf{c}\\ne\\mathbf{0}$ the iteration converges to the unique fixed point for every $\\mathbf{x}^{(0)}$ iff $\\rho(\\mathbf{T})<1$.",
        "hu": "Ekvivalens: $\\mathbf{T}^k\\to\\mathbf{0}$; $\\mathbf{T}^k\\mathbf{x}\\to\\mathbf{0}$ minden $\\mathbf{x}$-re; $\\rho(\\mathbf{T})<1$. $\\mathbf{c}\\ne\\mathbf{0}$ esetén az iteráció minden $\\mathbf{x}^{(0)}$-ból az egyetlen fixponthoz konvergál, pontosan ha $\\rho(\\mathbf{T})<1$."
      }
    },
    {
      "term": {
        "en": "Sufficient norm condition (Thm 4.2)",
        "hu": "Elégséges norma-feltétel (4.2. tétel)"
      },
      "def": {
        "en": "If $\\|\\mathbf{T}\\|<1$ in some matrix norm then $\\|\\mathbf{T}^k\\|\\to0$ (since $\\|\\mathbf{T}^k\\|\\le\\|\\mathbf{T}\\|^k$). A convenient, easily-checked sufficient condition for convergence.",
        "hu": "Ha $\\|\\mathbf{T}\\|<1$ valamely mátrixnormában, akkor $\\|\\mathbf{T}^k\\|\\to0$ (mert $\\|\\mathbf{T}^k\\|\\le\\|\\mathbf{T}\\|^k$). Kényelmes, könnyen ellenőrizhető elégséges feltétel a konvergenciára."
      }
    },
    {
      "term": {
        "en": "Neumann (geometric) series (Thm 4.3)",
        "hu": "Neumann- (geometriai) sor (4.3. tétel)"
      },
      "def": {
        "en": "If $\\rho(\\mathbf{A})<1$ then $\\mathbf{I}-\\mathbf{A}$ is invertible and $(\\mathbf{I}-\\mathbf{A})^{-1}=\\mathbf{I}+\\mathbf{A}+\\mathbf{A}^2+\\cdots$. The matrix analogue of $\\frac{1}{1-a}=1+a+a^2+\\cdots$; the converse holds too.",
        "hu": "Ha $\\rho(\\mathbf{A})<1$, akkor $\\mathbf{I}-\\mathbf{A}$ invertálható és $(\\mathbf{I}-\\mathbf{A})^{-1}=\\mathbf{I}+\\mathbf{A}+\\mathbf{A}^2+\\cdots$. A $\\frac{1}{1-a}=1+a+a^2+\\cdots$ mátrixos megfelelője; a megfordítása is igaz."
      }
    },
    {
      "term": {
        "en": "Neumann bound (Cor. 4.4)",
        "hu": "Neumann-korlát (4.4. következmény)"
      },
      "def": {
        "en": "If $\\|\\mathbf{A}\\|<1$ then $\\|(\\mathbf{I}-\\mathbf{A})^{-1}\\|\\le\\dfrac{1}{1-\\|\\mathbf{A}\\|}$. Bounds how large the inverse can be when $\\mathbf{A}$ is a small perturbation of $\\mathbf{I}$.",
        "hu": "Ha $\\|\\mathbf{A}\\|<1$, akkor $\\|(\\mathbf{I}-\\mathbf{A})^{-1}\\|\\le\\dfrac{1}{1-\\|\\mathbf{A}\\|}$. Korlátozza, mekkora lehet az inverz, ha $\\mathbf{A}$ az $\\mathbf{I}$ kis perturbációja."
      }
    },
    {
      "term": {
        "en": "Perturbation of the inverse (Thm 4.5)",
        "hu": "Az inverz perturbációja (4.5. tétel)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is nonsingular and $\\|\\mathbf{A}-\\mathbf{B}\\|<1/\\|\\mathbf{A}^{-1}\\|$, then $\\mathbf{B}$ is also nonsingular with bounded $\\|\\mathbf{B}^{-1}\\|$ and $\\|\\mathbf{A}^{-1}-\\mathbf{B}^{-1}\\|$. Invertibility is an open condition: matrices near a nonsingular one stay nonsingular.",
        "hu": "Ha $\\mathbf{A}$ reguláris és $\\|\\mathbf{A}-\\mathbf{B}\\|<1/\\|\\mathbf{A}^{-1}\\|$, akkor $\\mathbf{B}$ is reguláris, korlátos $\\|\\mathbf{B}^{-1}\\|$-vel és $\\|\\mathbf{A}^{-1}-\\mathbf{B}^{-1}\\|$-vel. Az invertálhatóság nyílt feltétel: egy regulárishoz közeli mátrixok is regulárisak maradnak."
      }
    },
    {
      "term": {
        "en": "Convergence rate & stability",
        "hu": "Konvergenciasebesség és stabilitás"
      },
      "def": {
        "en": "$\\|\\mathbf{x}-\\mathbf{x}^{(k)}\\|\\le\\|\\mathbf{T}\\|^k\\|\\mathbf{x}-\\mathbf{x}^{(0)}\\|$ (Cor. 4.7) — smaller $\\|\\mathbf{T}\\|$ (or $\\rho(\\mathbf{T})$) means faster convergence. With rounding errors $\\le\\varepsilon$ per step, the error stays bounded by $\\varepsilon/(1-\\|\\mathbf{T}\\|)$, so the iteration is stable.",
        "hu": "$\\|\\mathbf{x}-\\mathbf{x}^{(k)}\\|\\le\\|\\mathbf{T}\\|^k\\|\\mathbf{x}-\\mathbf{x}^{(0)}\\|$ (4.7. következmény) — kisebb $\\|\\mathbf{T}\\|$ (vagy $\\rho(\\mathbf{T})$) gyorsabb konvergenciát jelent. Lépésenként $\\le\\varepsilon$ kerekítési hibával a hiba $\\varepsilon/(1-\\|\\mathbf{T}\\|)$ alatt marad, így az iteráció stabil."
      }
    }
  ],
  'jacobi-gs': [
    {
      "term": {
        "en": "Jacobi iteration (4.15)",
        "hu": "Jacobi-iteráció (4.15)"
      },
      "def": {
        "en": "$x_i^{(k+1)}=\\dfrac{1}{a_{ii}}\\big(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)}\\big)$ — solve each equation for its diagonal unknown, using **old** values on the right. All components update simultaneously from the previous iterate.",
        "hu": "$x_i^{(k+1)}=\\dfrac{1}{a_{ii}}\\big(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)}\\big)$ — minden egyenletet a saját főátlós ismeretlenére rendezünk, a jobb oldalon a **régi** értékekkel. Minden komponens egyszerre frissül az előző iteráltból."
      }
    },
    {
      "term": {
        "en": "Matrix splitting $\\mathbf{A}=\\mathbf{L}+\\mathbf{D}+\\mathbf{U}$",
        "hu": "Mátrix-felbontás $\\mathbf{A}=\\mathbf{L}+\\mathbf{D}+\\mathbf{U}$"
      },
      "def": {
        "en": "Split $\\mathbf{A}$ into its strict lower part $\\mathbf{L}$, diagonal $\\mathbf{D}$ and strict upper part $\\mathbf{U}$. Different ways of grouping these terms produce the Jacobi, Gauss–Seidel and SOR iterations.",
        "hu": "Bontsuk $\\mathbf{A}$-t a szigorú alsó $\\mathbf{L}$, a főátlós $\\mathbf{D}$ és a szigorú felső $\\mathbf{U}$ részre. E tagok különböző csoportosítása adja a Jacobi-, Gauss–Seidel- és SOR-iterációt."
      }
    },
    {
      "term": {
        "en": "Jacobi matrix $\\mathbf{T}_J$",
        "hu": "Jacobi-mátrix $\\mathbf{T}_J$"
      },
      "def": {
        "en": "From $\\mathbf{D}\\mathbf{x}=-(\\mathbf{L}+\\mathbf{U})\\mathbf{x}+\\mathbf{b}$: $\\mathbf{T}_J=-\\mathbf{D}^{-1}(\\mathbf{L}+\\mathbf{U})$, $\\mathbf{c}_J=\\mathbf{D}^{-1}\\mathbf{b}$. Its off-diagonal entries are $-a_{ij}/a_{ii}$; the diagonal is zero.",
        "hu": "A $\\mathbf{D}\\mathbf{x}=-(\\mathbf{L}+\\mathbf{U})\\mathbf{x}+\\mathbf{b}$-ből: $\\mathbf{T}_J=-\\mathbf{D}^{-1}(\\mathbf{L}+\\mathbf{U})$, $\\mathbf{c}_J=\\mathbf{D}^{-1}\\mathbf{b}$. Az átlón kívüli elemei $-a_{ij}/a_{ii}$; a főátló nulla."
      }
    },
    {
      "term": {
        "en": "Convergence $\\rho(\\mathbf{T}_J)<1$ (Thm 4.9)",
        "hu": "Konvergencia $\\rho(\\mathbf{T}_J)<1$ (4.9. tétel)"
      },
      "def": {
        "en": "The Jacobi iteration converges for every $\\mathbf{x}^{(0)}$ iff $\\rho(\\mathbf{T}_J)<1$; a convenient sufficient condition is $\\|\\mathbf{T}_J\\|<1$ in any matrix norm (Cor. 4.10).",
        "hu": "A Jacobi-iteráció minden $\\mathbf{x}^{(0)}$-ra konvergál, pontosan ha $\\rho(\\mathbf{T}_J)<1$; kényelmes elégséges feltétel $\\|\\mathbf{T}_J\\|<1$ bármely mátrixnormában (4.10. következmény)."
      }
    },
    {
      "term": {
        "en": "Diagonal dominance ⇒ converges (Thm 4.11)",
        "hu": "Diagonális dominancia ⇒ konvergens (4.11)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is (row) diagonally dominant then $\\|\\mathbf{T}_J\\|_\\infty=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$, so Jacobi converges for all $\\mathbf{x}^{(0)}$. The practical, easily-checked guarantee.",
        "hu": "Ha $\\mathbf{A}$ (soronként) diagonálisan domináns, akkor $\\|\\mathbf{T}_J\\|_\\infty=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$, így a Jacobi minden $\\mathbf{x}^{(0)}$-ra konvergál. A gyakorlati, könnyen ellenőrizhető garancia."
      }
    },
    {
      "term": {
        "en": "Simultaneous (old-value) update",
        "hu": "Egyidejű (régi-értékes) frissítés"
      },
      "def": {
        "en": "Jacobi computes the whole new vector $\\mathbf{x}^{(k+1)}$ from $\\mathbf{x}^{(k)}$ before overwriting — order-independent and trivially parallel, unlike Gauss–Seidel which reuses fresh components immediately.",
        "hu": "A Jacobi a teljes új $\\mathbf{x}^{(k+1)}$ vektort $\\mathbf{x}^{(k)}$-ból számolja, mielőtt felülírná — sorrendfüggetlen és könnyen párhuzamosítható, szemben a Gauss–Seidellel, amely azonnal újrahasználja a friss komponenseket."
      }
    }
  ],
  'condition': [
    {
      "term": {
        "en": "Residual vector",
        "hu": "Reziduum-vektor"
      },
      "def": {
        "en": "$\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\tilde{\\mathbf{x}}$ for an approximate solution $\\tilde{\\mathbf{x}}$. The stopping test (iii) $\\|\\mathbf{r}\\|<\\varepsilon$ hopes a small residual means a small error — but that can fail (Example 4.17).",
        "hu": "$\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\tilde{\\mathbf{x}}$ egy $\\tilde{\\mathbf{x}}$ közelítő megoldásra. A (iii) megállási teszt $\\|\\mathbf{r}\\|<\\varepsilon$ azt reméli, hogy a kis reziduum kis hibát jelent — de ez elromolhat (4.17. példa)."
      }
    },
    {
      "term": {
        "en": "Residual error bound (Thm 4.18)",
        "hu": "Reziduum-hibakorlát (4.18. tétel)"
      },
      "def": {
        "en": "$\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|\\le\\|\\mathbf{A}^{-1}\\|\\,\\|\\mathbf{r}\\|$ and $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\mathbf{r}\\|}{\\|\\mathbf{b}\\|}$. A small residual guarantees a small error only when $\\operatorname{cond}(\\mathbf{A})$ is modest.",
        "hu": "$\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|\\le\\|\\mathbf{A}^{-1}\\|\\,\\|\\mathbf{r}\\|$ és $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\mathbf{r}\\|}{\\|\\mathbf{b}\\|}$. A kis reziduum csak akkor garantál kis hibát, ha $\\operatorname{cond}(\\mathbf{A})$ mérsékelt."
      }
    },
    {
      "term": {
        "en": "Condition number $\\operatorname{cond}(\\mathbf{A})$",
        "hu": "Kondíciószám $\\operatorname{cond}(\\mathbf{A})$"
      },
      "def": {
        "en": "$\\operatorname{cond}(\\mathbf{A})=\\|\\mathbf{A}\\|\\,\\|\\mathbf{A}^{-1}\\|\\ge1$ (norm-dependent: $\\operatorname{cond}_p$). Large (≳100–1000) ⟹ **ill-conditioned**: small data changes can cause large solution changes; small ⟹ **well-conditioned**.",
        "hu": "$\\operatorname{cond}(\\mathbf{A})=\\|\\mathbf{A}\\|\\,\\|\\mathbf{A}^{-1}\\|\\ge1$ (normafüggő: $\\operatorname{cond}_p$). Nagy (≳100–1000) ⟹ **rosszul kondicionált**: kis adatváltozás nagy megoldásváltozást okozhat; kicsi ⟹ **jól kondicionált**."
      }
    },
    {
      "term": {
        "en": "Iterative refinement (Alg. 4.20)",
        "hu": "Iteratív finomítás (4.20. algoritmus)"
      },
      "def": {
        "en": "Solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$, compute the residual $\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\mathbf{x}$ in double precision, solve $\\mathbf{A}\\mathbf{y}=\\mathbf{r}$, correct $\\bar{\\mathbf{x}}=\\mathbf{x}+\\mathbf{y}$, repeat. Recovers accuracy even for ill-conditioned $\\mathbf{A}$ (reusing the LU factors makes each step cheap).",
        "hu": "Oldd meg $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$-t, számold a reziduumot $\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\mathbf{x}$ dupla pontossággal, oldd meg $\\mathbf{A}\\mathbf{y}=\\mathbf{r}$-t, korrigálj $\\bar{\\mathbf{x}}=\\mathbf{x}+\\mathbf{y}$, ismételd. Rosszul kondicionált $\\mathbf{A}$-ra is visszanyeri a pontosságot (az LU-tényezők újrahasználata olcsóvá teszi)."
      }
    },
    {
      "term": {
        "en": "Condition number estimate (4.23)",
        "hu": "Kondíciószám-becslés (4.23)"
      },
      "def": {
        "en": "From one refinement step, $\\operatorname{cond}(\\mathbf{A})\\approx10^{t}\\dfrac{\\|\\tilde{\\mathbf{y}}\\|}{\\|\\tilde{\\mathbf{x}}\\|}$ ($t$ = digits). A cheap by-product of the residual correction.",
        "hu": "Egy finomítási lépésből $\\operatorname{cond}(\\mathbf{A})\\approx10^{t}\\dfrac{\\|\\tilde{\\mathbf{y}}\\|}{\\|\\tilde{\\mathbf{x}}\\|}$ ($t$ = jegyek száma). A reziduum-korrekció olcsó mellékterméke."
      }
    },
    {
      "term": {
        "en": "Perturbation bounds (Thm 4.22/4.23)",
        "hu": "Perturbációs korlátok (4.22/4.23)"
      },
      "def": {
        "en": "Perturbing $\\mathbf{b}$: $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}$. One order of magnitude in $\\operatorname{cond}$ can cost one significant digit. Perturbing both $\\mathbf{A}$ and $\\mathbf{b}$ gives a similar amplified bound.",
        "hu": "$\\mathbf{b}$ perturbálása: $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}$. Egy nagyságrend $\\operatorname{cond}$-ban egy értékes jegybe kerülhet. $\\mathbf{A}$ és $\\mathbf{b}$ együttes perturbálása hasonló felnagyított korlátot ad."
      }
    },
    {
      "term": {
        "en": "Spectral condition number & Gastinel (Thm 4.24/4.25)",
        "hu": "Spektrális kondíciószám és Gastinel (4.24/4.25)"
      },
      "def": {
        "en": "$\\operatorname{cond}_*(\\mathbf{A})=\\rho(\\mathbf{A})\\rho(\\mathbf{A}^{-1})\\le\\operatorname{cond}(\\mathbf{A})$ — the smallest condition number. Gastinel: $1/\\operatorname{cond}(\\mathbf{A})=\\min\\{\\|\\mathbf{A}-\\mathbf{B}\\|/\\|\\mathbf{A}\\|:\\mathbf{B}\\text{ singular}\\}$ — a large condition number means a singular matrix is nearby.",
        "hu": "$\\operatorname{cond}_*(\\mathbf{A})=\\rho(\\mathbf{A})\\rho(\\mathbf{A}^{-1})\\le\\operatorname{cond}(\\mathbf{A})$ — a legkisebb kondíciószám. Gastinel: $1/\\operatorname{cond}(\\mathbf{A})=\\min\\{\\|\\mathbf{A}-\\mathbf{B}\\|/\\|\\mathbf{A}\\|:\\mathbf{B}\\text{ szinguláris}\\}$ — a nagy kondíciószám azt jelenti, hogy van közeli szinguláris mátrix."
      }
    },
    {
      "term": {
        "en": "Hilbert matrix",
        "hu": "Hilbert-mátrix"
      },
      "def": {
        "en": "$\\mathbf{H}_n$ with entries $1/(i+j-1)$ — the classic ill-conditioned family. Its condition number explodes with $n$ (e.g. $\\operatorname{cond}_*\\approx1.6\\cdot10^{13}$ at $n=10$).",
        "hu": "$\\mathbf{H}_n$ az $1/(i+j-1)$ elemekkel — a klasszikus rosszul kondicionált család. Kondíciószáma $n$-nel robban (pl. $\\operatorname{cond}_*\\approx1{,}6\\cdot10^{13}$ $n=10$-nél)."
      }
    }
  ],
}

export const FLASHCARDS: Partial<Record<ModuleId, Flashcard[]>> = {
  'fixed-point': [
    {"q":{"en":"What is the definition of an eigenvalue $\\lambda$ for a square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$?","hu":"Mi a $\\lambda$ sajátérték meghatározása a $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ négyzetmátrixhoz?"},"a":{"en":"A complex number $\\lambda$ such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a non-trivial solution $\\mathbf{x} \\neq \\mathbf{0}$.","hu":"Olyan $\\lambda$ komplex szám, amelyre a $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ $\\mathbf{x} \\neq \\mathbf{0}$ nem triviális megoldása van."}},
    {"q":{"en":"What is an eigenvector of a matrix $\\mathbf{A}$ corresponding to the eigenvalue $\\lambda$?","hu":"Mekkora egy $\\mathbf{A}$ mátrix sajátvektora, amely megfelel a $\\lambda$ sajátértéknek?"},"a":{"en":"A non-trivial solution vector $\\mathbf{x}$ satisfying the equation $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$.","hu":"A $\\mathbf{x}$ nem triviális megoldásvektor, amely kielégíti a $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$ egyenletet."}},
    {"q":{"en":"The characteristic equation of an $n \\times n$ matrix $\\mathbf{A}$ used to find eigenvalues is written as _____.","hu":"A sajátértékek meghatározásához használt $n \\times n$ $\\mathbf{A}$ mátrix karakterisztikus egyenlete _____."},"a":{"en":"$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$","hu":"$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$"}},
    {"q":{"en":"How many eigenvalues (counting multiplicities) does an $n \\times n$ matrix $\\mathbf{A}$ possess?","hu":"Hány sajátértéke (számító multiplicitás) van egy $n \\times n$ $\\mathbf{A}$ mátrixnak?"},"a":{"en":"It has exactly $n$ eigenvalues.","hu":"Pontosan $n$ sajátértékekkel rendelkezik."}},
    {"q":{"en":"Term: Spectral Radius ($\\rho(\\mathbf{A})$)","hu":"Fogalom: spektrális sugár ($\\rho(\\mathbf{A})$)"},"a":{"en":"Definition: The maximum absolute value of the eigenvalues of the matrix $\\mathbf{A}$.","hu":"Definíció: A $\\mathbf{A}$ mátrix sajátértékeinek maximális abszolút értéke."}},
    {"q":{"en":"What is the mathematical relationship between the spectral radius $\\rho(\\mathbf{A})$ and any matrix norm $\\|\\cdot\\|$?","hu":"Mi a matematikai kapcsolat a $\\rho(\\mathbf{A})$ spektrális sugár és bármely $\\|\\cdot\\|$ mátrixnorma között?"},"a":{"en":"$\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$","hu":"$\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$"}},
    {"q":{"en":"In the proof of $\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$, what inequality involving the eigenvector $\\mathbf{v}$ and norm $\\|\\cdot\\|$ is used?","hu":"A $\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$ bizonyítása során milyen egyenlőtlenséget használunk a $\\mathbf{v}$ sajátvektorral és a $\\|\\cdot\\|$ normával?"},"a":{"en":"$|\\lambda| \\|\\mathbf{v}\\| = \\|\\mathbf{A}\\mathbf{v}\\| \\leq \\|\\mathbf{A}\\| \\|\\mathbf{v}\\|$","hu":"$|\\lambda| \\|\\mathbf{v}\\| = \\|\\mathbf{A}\\mathbf{v}\\| \\leq \\|\\mathbf{A}\\| \\|\\mathbf{v}\\|$"}},
    {"q":{"en":"What is the standard form of a linear $n$-dimensional fixed-point iteration?","hu":"Mi a standard formája a lineáris $n$-dimenziós fixpontos iterációnak?"},"a":{"en":"$\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$","hu":"$\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$"}},
    {"q":{"en":"In a linear fixed-point iteration where $\\mathbf{c} = \\mathbf{0}$, what is the general expression for the $k$-th term $\\mathbf{x}^{(k)}$?","hu":"Egy lineáris fixpontos iterációban, ahol $\\mathbf{c} = \\mathbf{0}$, mi a $k$-edik $\\mathbf{x}^{(k)}$ kifejezés általános kifejezése?"},"a":{"en":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)}$","hu":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)}$"}},
    {"q":{"en":"For a real or complex scalar $a$, under what condition does $\\lim_{k \\to \\infty} a^k = 0$?","hu":"Valós vagy összetett skalár $a$ esetén milyen feltételek mellett működik a $\\lim_{k \\to \\infty} a^k = 0$?"},"a":{"en":"$|a| < 1$","hu":"$|a| < 1$"}},
    {"q":{"en":"Theorem 4.1 states that $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ is equivalent to what condition regarding the spectral radius of $\\mathbf{T}$?","hu":"A 4.1. tétel kimondja, hogy a $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ milyen feltétellel ekvivalens a $\\mathbf{T}$ spektrális sugarát tekintve?"},"a":{"en":"$\\rho(\\mathbf{T}) < 1$","hu":"$\\rho(\\mathbf{T}) < 1$"}},
    {"q":{"en":"According to Theorem 4.1, $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$ for all $\\mathbf{x} \\in \\mathbb{R}^n$ is equivalent to $\\lim_{k \\to \\infty} \\|\\mathbf{T}^k\\| = _____$.","hu":"A 4.1 tétel szerint a $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$ az összes $\\mathbf{x} \\in \\mathbb{R}^n$ esetében megegyezik a $\\lim_{k \\to \\infty} \\|\\mathbf{T}^k\\| = _____$-vel."},"a":{"en":"$0$","hu":"$0$"}},
    {"q":{"en":"Which property of matrix and vector norms proves that (i) $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ implies (ii) $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$?","hu":"A mátrix- és vektornormák melyik tulajdonsága bizonyítja, hogy (i) $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ magában foglalja (ii) $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$-t?"},"a":{"en":"$\\|\\mathbf{T}^k \\mathbf{x}\\| \\leq \\|\\mathbf{T}^k\\| \\|\\mathbf{x}\\|$","hu":"$\\|\\mathbf{T}^k \\mathbf{x}\\| \\leq \\|\\mathbf{T}^k\\| \\|\\mathbf{x}\\|$"}},
    {"q":{"en":"In the proof that $\\mathbf{T}^k \\mathbf{x} \\to \\mathbf{0}$ implies $\\rho(\\mathbf{T}) < 1$, what identity is used for an eigenvector $\\mathbf{v}$?","hu":"Annak bizonyítására, hogy a $\\mathbf{T}^k \\mathbf{x} \\to \\mathbf{0}$ magában foglalja a $\\rho(\\mathbf{T}) < 1$-t, milyen azonosságot használunk a $\\mathbf{v}$ sajátvektorhoz?"},"a":{"en":"$\\mathbf{T}^k \\mathbf{v} = \\lambda^k \\mathbf{v}$","hu":"$\\mathbf{T}^k \\mathbf{v} = \\lambda^k \\mathbf{v}$"}},
    {"q":{"en":"If $\\|\\mathbf{T}\\| < 1$ in some matrix norm, what happens to $\\|\\mathbf{T}^k\\|$ as $k \\to \\infty$?","hu":"Ha a $\\|\\mathbf{T}\\| < 1$ valamilyen mátrixnormában van, mi történik a $\\|\\mathbf{T}^k\\|$-vel mint $k \\to \\infty$-vel?"},"a":{"en":"$\\parallel\\mathbf{T}^k\\parallel \\to 0$","hu":"$\\parallel\\mathbf{T}^k\\parallel \\to 0$"}},
    {"q":{"en":"What is the matrix series $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\mathbf{A}^3 + \\dots$ commonly called?","hu":"Hogyan nevezik általában a $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\mathbf{A}^3 + \\dots$ mátrixsorozatot?"},"a":{"en":"Geometric series or Neumann series.","hu":"Geometrikus sorozat vagy Neumann sorozat."}},
    {"q":{"en":"Under what condition on the spectral radius $\\rho(\\mathbf{A})$ is the geometric series $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ convergent?","hu":"A $\\rho(\\mathbf{A})$ spektrális sugáron milyen feltételek mellett konvergens a $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ geometriai sorozat?"},"a":{"en":"$\\rho(\\mathbf{A}) < 1$","hu":"$\\rho(\\mathbf{A}) < 1$"}},
    {"q":{"en":"If the geometric series $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ converges, what is the value of the limit?","hu":"Ha a $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ geometriai sorozat konvergál, mekkora a határérték?"},"a":{"en":"$(\\mathbf{I} - \\mathbf{A})^{-1}$","hu":"$(\\mathbf{I} - \\mathbf{A})^{-1}$"}},
    {"q":{"en":"If $\\rho(\\mathbf{A}) < 1$, why must the matrix $\\mathbf{I} - \\mathbf{A}$ be invertible?","hu":"Ha $\\rho(\\mathbf{A}) < 1$, miért kell a $\\mathbf{I} - \\mathbf{A}$ mátrixnak invertálhatónak lennie?"},"a":{"en":"If it were not, $1$ would be an eigenvalue of $\\mathbf{A}$, contradicting $\\rho(\\mathbf{A}) < 1$.","hu":"Ha nem így lenne, a $1$ a $\\mathbf{A}$ sajátértéke lenne, ami ellentmond a $\\rho(\\mathbf{A}) < 1$-nek."}},
    {"q":{"en":"Complete the identity: $(\\mathbf{I} - \\mathbf{A})(\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots + \\mathbf{A}^m) = _____$.","hu":"Töltse ki az azonosítót: $(\\mathbf{I} - \\mathbf{A})(\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots + \\mathbf{A}^m) = _____$."},"a":{"en":"$\\mathbf{I} - \\mathbf{A}^{m+1}$","hu":"$\\mathbf{I} - \\mathbf{A}^{m+1}$"}},
    {"q":{"en":"If $\\|\\mathbf{A}\\| < 1$ in some matrix norm, what is the upper bound for the norm $\\|(\\mathbf{I} - \\mathbf{A})^{-1}\\|$?","hu":"Ha a $\\|\\mathbf{A}\\| < 1$ valamilyen mátrixnormában van, mi a $\\|(\\mathbf{I} - \\mathbf{A})^{-1}\\|$ norma felső korlátja?"},"a":{"en":"$\\frac{1}{1 - \\|\\mathbf{A}\\|}$","hu":"$\\frac{1}{1 - \\|\\mathbf{A}\\|}$"}},
    {"q":{"en":"Theorem 4.5: If $\\mathbf{A}$ is nonsingular and $\\|\\mathbf{A} - \\mathbf{B}\\| < \\frac{1}{\\|\\mathbf{A}^{-1}\\|}$, what can be said about matrix $\\mathbf{B}$?","hu":"4.5. Tétel: Ha a $\\mathbf{A}$ nem szinguláris és a $\\|\\mathbf{A} - \\mathbf{B}\\| < \\frac{1}{\\|\\mathbf{A}^{-1}\\|}$, mit mondhatunk a $\\mathbf{B}$ mátrixról?"},"a":{"en":"Matrix $\\mathbf{B}$ is also nonsingular.","hu":"A Matrix $\\mathbf{B}$ szintén nem szinguláris."}},
    {"q":{"en":"Formula: Bound for $\\|\\mathbf{B}^{-1}\\|$ given $\\|\\mathbf{A} - \\mathbf{B}\\| < 1/\\|\\mathbf{A}^{-1}\\|$ and nonsingular $\\mathbf{A}$.","hu":"Képlet: $\\|\\mathbf{B}^{-1}\\|$ $\\|\\mathbf{A} - \\mathbf{B}\\| < 1/\\|\\mathbf{A}^{-1}\\|$ és nem egyes számú $\\mathbf{A}$ esetén kötött."},"a":{"en":"$\\|\\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$","hu":"$\\|\\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$"}},
    {"q":{"en":"Formula: Bound for $\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\|$ in Theorem 4.5.","hu":"Képlet: $\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\|$-hez kötött a 4.5. tételben."},"a":{"en":"$\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|^2 \\|\\mathbf{A} - \\mathbf{B}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$","hu":"$\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|^2 \\|\\mathbf{A} - \\mathbf{B}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$"}},
    {"q":{"en":"In the proof of Theorem 4.5, $\\mathbf{B}$ is decomposed as $\\mathbf{A}(\\mathbf{I} - _____)$.","hu":"A 4.5 Tétel bizonyítása során a $\\mathbf{B}$ $\\mathbf{A}(\\mathbf{I} - _____)$-ként van felbontva."},"a":{"en":"$\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})$","hu":"$\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})$"}},
    {"q":{"en":"What is the general formula for the $k$-th term $\\mathbf{x}^{(k)}$ of a linear fixed-point iteration with $\\mathbf{c} \\neq \\mathbf{0}$?","hu":"Mi a $\\mathbf{c} \\neq \\mathbf{0}$-vel végzett lineáris fixpontos iteráció $k$-edik tagjának $\\mathbf{x}^{(k)}$ általános képlete?"},"a":{"en":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)} + (\\mathbf{T}^{k-1} + \\dots + \\mathbf{I})\\mathbf{c}$","hu":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)} + (\\mathbf{T}^{k-1} + \\dots + \\mathbf{I})\\mathbf{c}$"}},
    {"q":{"en":"Theorem 4.6: The iteration $\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$ converges to a unique solution for all $\\mathbf{x}^{(0)}$ if and only if _____.","hu":"4.6. Tétel: A $\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$ iteráció akkor és csak akkor konvergál egyedi megoldáshoz minden $\\mathbf{x}^{(0)}$ esetén, ha _____."},"a":{"en":"$\\rho(\\mathbf{T}) < 1$","hu":"$\\rho(\\mathbf{T}) < 1$"}},
    {"q":{"en":"If $\\rho(\\mathbf{T}) < 1$, the unique solution $\\mathbf{x}$ to $\\mathbf{x} = \\mathbf{T}\\mathbf{x} + \\mathbf{c}$ is explicitly given by _____.","hu":"Ha $\\rho(\\mathbf{T}) < 1$, akkor a $\\mathbf{x}$-$\\mathbf{x} = \\mathbf{T}\\mathbf{x} + \\mathbf{c}$ egyedi megoldást _____ kifejezetten megadja."},"a":{"en":"$\\mathbf{x} = (\\mathbf{I} - \\mathbf{T})^{-1}\\mathbf{c}$","hu":"$\\mathbf{x} = (\\mathbf{I} - \\mathbf{T})^{-1}\\mathbf{c}$"}},
    {"q":{"en":"How is the error $\\mathbf{x} - \\mathbf{x}^{(k+1)}$ related to the previous error $\\mathbf{x} - \\mathbf{x}^{(k)}$ in a linear iteration?","hu":"Hogyan kapcsolódik a $\\mathbf{x} - \\mathbf{x}^{(k+1)}$ hiba az előző $\\mathbf{x} - \\mathbf{x}^{(k)}$ hibához egy lineáris iterációban?"},"a":{"en":"$\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}(\\mathbf{x} - \\mathbf{x}^{(k)})$","hu":"$\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}(\\mathbf{x} - \\mathbf{x}^{(k)})$"}},
    {"q":{"en":"Formula: The error estimate for the $k$-th iterate given $\\|\\mathbf{T}\\| < 1$.","hu":"Képlet: A hibabecslés a $k$-edik iterációhoz adott $\\|\\mathbf{T}\\| < 1$."},"a":{"en":"$\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$","hu":"$\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$"}},
    {"q":{"en":"How does the magnitude of $\\|\\mathbf{T}\\|$ affect the speed of convergence in fixed-point iteration?","hu":"Hogyan befolyásolja a $\\|\\mathbf{T}\\|$ nagysága a konvergencia sebességét fixpontos iterációban?"},"a":{"en":"The smaller the $\\|\\mathbf{T}\\|$, the faster the convergence.","hu":"Minél kisebb a $\\|\\mathbf{T}\\|$, annál gyorsabb a konvergencia."}},
    {"q":{"en":"According to the video transcript, linear fixed-point iterations converge for any initial value, a property called _____ convergence.","hu":"A videó átirata szerint a lineáris fixpontos iterációk bármely kezdeti értékhez konvergálnak, ezt a tulajdonságot _____ konvergenciának nevezik."},"a":{"en":"Global","hu":"Globális"}},
    {"q":{"en":"How does linear fixed-point iteration convergence criteria (if and only if $\\rho(\\mathbf{T}) < 1$) compare to nonlinear cases?","hu":"Hogyan viszonyulnak a lineáris fixpontos iterációs konvergenciakritériumok (akkor és csak akkor, ha $\\rho(\\mathbf{T}) < 1$) a nemlineáris esetekhez?"},"a":{"en":"It is a necessary and sufficient condition for global convergence, whereas nonlinear cases often only have sufficient conditions for local convergence.","hu":"Ez szükséges és elégséges feltétele a globális konvergenciának, míg a nemlineáris esetekben gyakran csak a lokális konvergenciához van elegendő feltétele."}},
    {"q":{"en":"In the rounding error model $\\mathbf{y}^{(k+1)} = \\mathbf{T}\\mathbf{y}^{(k)} + \\mathbf{c} + \\mathbf{w}^{(k+1)}$, what does $\\mathbf{w}^{(k+1)}$ represent?","hu":"A $\\mathbf{y}^{(k+1)} = \\mathbf{T}\\mathbf{y}^{(k)} + \\mathbf{c} + \\mathbf{w}^{(k+1)}$ kerekítési hibamodellben mit jelent a $\\mathbf{w}^{(k+1)}$?"},"a":{"en":"The rounding error introduced in the $k$-th step of the computation.","hu":"A számítás $k$-edik lépésében bevezetett kerekítési hiba."}},
    {"q":{"en":"What does $\\mathbf{w}^{(0)}$ represent in the fixed-point iteration rounding error analysis?","hu":"Mit jelent a $\\mathbf{w}^{(0)}$ a fixpontos iterációs kerekítési hibaelemzésben?"},"a":{"en":"The rounding error occurring when storing the initial value $\\mathbf{x}^{(0)}$.","hu":"A $\\mathbf{x}^{(0)}$ kezdőérték tárolásakor fellépő kerekítési hiba."}},
    {"q":{"en":"Assuming $\\|\\mathbf{w}^{(k)}\\| \\leq \\varepsilon$ and $\\|\\mathbf{T}\\| < 1$, what is the upper bound for the total rounding error $\\|\\mathbf{y}^{(k+1)} - \\mathbf{x}^{(k+1)}\\|$?","hu":"Feltételezve $\\|\\mathbf{w}^{(k)}\\| \\leq \\varepsilon$ és $\\|\\mathbf{T}\\| < 1$, mi a $\\|\\mathbf{y}^{(k+1)} - \\mathbf{x}^{(k+1)}\\|$ teljes kerekítési hiba felső korlátja?"},"a":{"en":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}\\varepsilon$","hu":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}\\varepsilon$"}},
    {"q":{"en":"Does a smaller $\\|\\mathbf{T}\\|$ increase or decrease the sensitivity of the iteration to rounding errors?","hu":"Egy kisebb $\\|\\mathbf{T}\\|$ növeli vagy csökkenti az iteráció érzékenységét a kerekítési hibákra?"},"a":{"en":"It decreases sensitivity (the computation is more stable).","hu":"Csökkenti az érzékenységet (stabilabb a számítás)."}},
    {"q":{"en":"Concept: Stability of linear fixed-point iteration","hu":"Koncepció: A lineáris fixpontos iteráció stabilitása"},"a":{"en":"Definition: The property that the difference between the theoretical sequence and the computed sequence remains bounded by a factor of the rounding error.","hu":"Definíció: Az a tulajdonság, hogy az elméleti sorozat és a számított sorozat közötti különbséget a kerekítési hiba tényezője korlátozza."}},
    {"q":{"en":"What is the sum of the geometric series $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots$ if $\\mathbf{A}$ is a strictly upper triangular matrix?","hu":"Mennyi a $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots$ geometriai sorozat összege, ha a $\\mathbf{A}$ szigorúan felső háromszögmátrix?"},"a":{"en":"A finite sum of matrices, because $\\mathbf{A}$ is nilpotent (powers eventually become zero).","hu":"Mátrixok véges összege, mert a $\\mathbf{A}$ nilpotens (a hatványok végül nullává válnak)."}},
    {"q":{"en":"For a diagonal matrix $\\mathbf{A} = \\text{diag}(d_1, \\dots, d_n)$, what is the spectral radius $\\rho(\\mathbf{A})$?","hu":"Egy $\\mathbf{A} = \\text{diag}(d_1, \\dots, d_n)$ átlós mátrix esetén mekkora a $\\rho(\\mathbf{A})$ spektrális sugár?"},"a":{"en":"$\\max_i |d_i|$","hu":"$\\max_i |d_i|$"}},
    {"q":{"en":"If $\\mathbf{A} = \\text{diag}(1/2, 1/3, 1/4, 1/5)$, what is the limit of the Neumann series $(\\mathbf{I} - \\mathbf{A})^{-1}$?","hu":"Ha $\\mathbf{A} = \\text{diag}(1/2, 1/3, 1/4, 1/5)$, mi a határa a Neumann sorozatú $(\\mathbf{I} - \\mathbf{A})^{-1}$?"},"a":{"en":"$\\text{diag}(2, 3/2, 4/3, 5/4)$","hu":"$\\text{diag}(2, 3/2, 4/3, 5/4)$"}},
    {"q":{"en":"What does Theorem 3.17 (referenced in source) guarantee about a matrix $\\mathbf{T}$ and $\\rho(\\mathbf{T})$?","hu":"Mit garantál a 3.17. tétel (a forrásban hivatkozva) a $\\mathbf{T}$ és $\\rho(\\mathbf{T})$ mátrixról?"},"a":{"en":"For any $\\varepsilon > 0$, there exists a matrix norm such that $\\|\\mathbf{T}\\| \\leq \\rho(\\mathbf{T}) + \\varepsilon$.","hu":"Bármely $\\varepsilon > 0$ esetében létezik egy mátrixnorma, amely szerint a $\\|\\mathbf{T}\\| \\leq \\rho(\\mathbf{T}) + \\varepsilon$."}},
    {"q":{"en":"True or False: If a matrix sequence $\\mathbf{T}^k \\to \\mathbf{0}$ in one matrix norm, it must converge to $\\mathbf{0}$ in all matrix norms.","hu":"Igaz vagy hamis: Ha egy $\\mathbf{T}^k \\to \\mathbf{0}$ mátrixsorozat egy mátrixnormában, akkor minden mátrixnormában konvergálnia kell a $\\mathbf{0}$-hez."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"Why do the eigenvalues of a real matrix appear in conjugate pairs on the complex plane?","hu":"Miért jelennek meg a valós mátrix sajátértékei konjugált párokban a komplex síkon?"},"a":{"en":"Because the characteristic equation is a polynomial with real coefficients.","hu":"Mivel a karakterisztikus egyenlet egy valós együtthatós polinom."}},
    {"q":{"en":"On a complex plane plot, all eigenvalues of $\\mathbf{A}$ are located within or on a circle centered at the origin with radius _____.","hu":"Egy összetett sík diagramon a $\\mathbf{A}$ összes sajátértéke egy _____ sugarú origó középpontú körön belül vagy azon belül helyezkedik el."},"a":{"en":"$\\rho(\\mathbf{A})$","hu":"$\\rho(\\mathbf{A})$"}},
    {"q":{"en":"In the identity $\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}^{k+1}(\\mathbf{x} - \\mathbf{x}^{(0)})$, what does $\\mathbf{x}$ represent?","hu":"A $\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}^{k+1}(\\mathbf{x} - \\mathbf{x}^{(0)})$ identitásban mit jelent a $\\mathbf{x}$?"},"a":{"en":"The exact unique solution to the fixed-point equation.","hu":"A fixpontos egyenlet pontos egyedi megoldása."}},
    {"q":{"en":"The proof of Theorem 4.3 uses a proof by _____ to show $\\mathbf{I} - \\mathbf{A}$ is invertible when $\\rho(\\mathbf{A}) < 1$.","hu":"A 4.3. Tétel bizonyítása _____ bizonyítással mutatja be, hogy $\\mathbf{I} - \\mathbf{A}$ invertálható, amikor $\\rho(\\mathbf{A}) < 1$."},"a":{"en":"Contradiction","hu":"Ellentmondás"}},
    {"q":{"en":"Term: Nilpotent Matrix","hu":"Fogalom: Nilpotens Mátrix"},"a":{"en":"Definition: A square matrix $\\mathbf{A}$ such that $\\mathbf{A}^k = \\mathbf{0}$ for some positive integer $k$.","hu":"Definíció: $\\mathbf{A}$ négyzetmátrix, amely $\\mathbf{A}^k = \\mathbf{0}$ valamilyen pozitív egész számra $k$."}},
    {"q":{"en":"How is the identity matrix $\\mathbf{I}$ defined in the context of eigenvectors?","hu":"Hogyan definiálható a $\\mathbf{I}$ identitásmátrix a sajátvektorok kontextusában?"},"a":{"en":"As the $n \\times n$ matrix such that $\\mathbf{I}\\mathbf{x} = \\mathbf{x}$ for all $\\mathbf{x}$.","hu":"Mint a $n \\times n$ mátrix, így a $\\mathbf{I}\\mathbf{x} = \\mathbf{x}$ minden $\\mathbf{x}$-hez."}},
    {"q":{"en":"If the matrix $\\mathbf{B} = \\begin{pmatrix} 1 & 2 \\\\ \\alpha & 0 \\end{pmatrix}$ results in $\\mathbf{B}^k \\to \\mathbf{0}$, what must be true about its eigenvalues?","hu":"Ha a $\\mathbf{B} = \\begin{pmatrix} 1 & 2 \\\\ \\alpha & 0 \\end{pmatrix}$ mátrix eredménye $\\mathbf{B}^k \\to \\mathbf{0}$, minek kell igaznak lennie a sajátértékeire vonatkozóan?"},"a":{"en":"Both eigenvalues must have an absolute value strictly less than 1.","hu":"Mindkét sajátérték abszolút értékének szigorúan 1-nél kisebbnek kell lennie."}},
    {"q":{"en":"According to the video, if $\\|\\mathbf{T}\\| < 1$, then $\\rho(\\mathbf{T})$ is _____.","hu":"A videó szerint ha $\\|\\mathbf{T}\\| < 1$, akkor $\\rho(\\mathbf{T})$ _____."},"a":{"en":"Also less than 1.","hu":"Szintén kevesebb, mint 1."}},
    {"q":{"en":"What property of matrix norms allows the interchange of the limit and the norm: $\\| \\lim \\mathbf{A}_m \\| = \\lim \\| \\mathbf{A}_m \\|$?","hu":"A mátrixnormák melyik tulajdonsága teszi lehetővé a határérték és a norma felcserélését: $\\| \\lim \\mathbf{A}_m \\| = \\lim \\| \\mathbf{A}_m \\|$?"},"a":{"en":"Continuity of the matrix norm.","hu":"A mátrix norma folytonossága."}},
    {"q":{"en":"The assumption $\\|\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})\\| < 1$ is sufficient to ensure $(\\mathbf{I} - \\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B}))$ is _____.","hu":"A $\\|\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})\\| < 1$ feltevés elegendő annak biztosításához, hogy a $(\\mathbf{I} - \\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B}))$ _____ legyen."},"a":{"en":"Invertible","hu":"Megfordítható"}},
    {"q":{"en":"When $\\mathbf{c} \\neq \\mathbf{0}$, the fixed-point iteration is stable if the spectral radius of the iteration matrix $\\mathbf{T}$ satisfies _____.","hu":"Amikor $\\mathbf{c} \\neq \\mathbf{0}$, a fixpontos iteráció akkor stabil, ha a $\\mathbf{T}$ iterációs mátrix spektrális sugara kielégíti a _____."},"a":{"en":"$\\rho(\\mathbf{T}) < 1$","hu":"$\\rho(\\mathbf{T}) < 1$"}},
    {"q":{"en":"What happens to the error term $\\|\\mathbf{T}\\|^{k+1} \\|\\mathbf{y}^{(0)} - \\mathbf{x}^{(0)}\\|$ as $k \\to \\infty$ if $\\|\\mathbf{T}\\| < 1$?","hu":"Mi történik a $\\|\\mathbf{T}\\|^{k+1} \\|\\mathbf{y}^{(0)} - \\mathbf{x}^{(0)}\\|$ hibakifejezéssel, mint $k \\to \\infty$, ha $\\|\\mathbf{T}\\| < 1$?"},"a":{"en":"It converges to zero.","hu":"Konvergál a nullához."}},
    {"q":{"en":"Term: Homogeneous Linear System","hu":"Fogalom: homogén lineáris rendszer"},"a":{"en":"Definition: A system of linear equations of the form $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$.","hu":"Definíció: $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ alakú lineáris egyenletrendszer."}},
    {"q":{"en":"A homogeneous system $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$ has a non-trivial solution if and only if the matrix $(\\mathbf{A} - \\lambda\\mathbf{I})$ is _____.","hu":"A $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$ homogén rendszernek akkor és csak akkor van nem triviális megoldása, ha a $(\\mathbf{A} - \\lambda\\mathbf{I})$ mátrix _____."},"a":{"en":"Singular (or has a determinant of zero).","hu":"Szinguláris (vagy nulla determinánsa van)."}},
    {"q":{"en":"If $\\lambda$ is an eigenvalue, the distance of $\\lambda$ from the origin in the complex plane is given by _____.","hu":"Ha $\\lambda$ egy sajátérték, akkor a $\\lambda$ távolságát az origótól a komplex síkban _____ adja meg."},"a":{"en":"$|\\lambda|$","hu":"$|\\lambda|$"}},
    {"q":{"en":"What is the limit of the finite sum $1 + \\|\\mathbf{T}\\| + \\dots + \\|\\mathbf{T}\\|^k$ as $k \\to \\infty$ for $\\|\\mathbf{T}\\| < 1$?","hu":"Mi a határa a $1 + \\|\\mathbf{T}\\| + \\dots + \\|\\mathbf{T}\\|^k$ véges összegnek, mint $k \\to \\infty$ $\\|\\mathbf{T}\\| < 1$ esetén?"},"a":{"en":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}$","hu":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}$"}},
    {"q":{"en":"The error estimate $\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$ is derived by applying the _____ property to $\\mathbf{T}^k(\\mathbf{x} - \\mathbf{x}^{(0)})$.","hu":"A $\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$ hibabecslést a _____ tulajdonság $\\mathbf{T}^k(\\mathbf{x} - \\mathbf{x}^{(0)})$-re történő alkalmazásával kapjuk."},"a":{"en":"Submultiplicative (or matrix-vector norm compatibility).","hu":"Szubmultiplikatív (vagy mátrix-vektor norma kompatibilitás)."}}
  ],
  'jacobi-gs': [
    {"q":{"en":"What is the primary purpose of the Jacobi iteration method?","hu":"Mi a Jacobi iterációs módszer elsődleges célja?"},"a":{"en":"To solve linear systems of equations of the form $Ax = b$ iteratively.","hu":"$Ax = b$ alakú lineáris egyenletrendszer iteratív megoldása."}},
    {"q":{"en":"What condition must be met by all diagonal elements $a_{ii}$ for the Jacobi iteration to be defined?","hu":"Milyen feltételnek kell megfelelnie az összes $a_{ii}$ átlós elemnek ahhoz, hogy a Jacobi-iteráció definiálható legyen?"},"a":{"en":"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$.","hu":"$a_{ii} \\ne 0$ minden $i = 1, \\dots, n$-hez."}},
    {"q":{"en":"If a diagonal element $a_{ii}$ is zero, what strategy can be used to apply Jacobi iteration?","hu":"Ha egy $a_{ii}$ átlós elem nulla, milyen stratégiával lehet Jacobi-iterációt alkalmazni?"},"a":{"en":"Interchange the rows of the matrix to achieve non-zero diagonal elements.","hu":"Cserélje fel a mátrix sorait a nullától eltérő átlós elemek eléréséhez."}},
    {"q":{"en":"In the scalar form of Jacobi iteration, what is the formula for $x_i^{(k+1)}$?","hu":"A Jacobi-iteráció skaláris alakjában mi a $x_i^{(k+1)}$ képlete?"},"a":{"en":"$x_i^{(k+1)} = -\\sum_{j \\ne i} \\frac{a_{ij}}{a_{ii}} x_j^{(k)} + \\frac{b_i}{a_{ii}}$.","hu":"$x_i^{(k+1)} = -\\sum_{j \\ne i} \\frac{a_{ij}}{a_{ii}} x_j^{(k)} + \\frac{b_i}{a_{ii}}$."}},
    {"q":{"en":"The Jacobi iteration is a specific type of multi-dimensional _____ equation.","hu":"A Jacobi-iteráció a többdimenziós _____ egyenlet egy speciális típusa."},"a":{"en":"linear fixed-point","hu":"lineáris fixpont"}},
    {"q":{"en":"In the matrix splitting $A = L + D + U$ for Jacobi iteration, what does the matrix $D$ represent?","hu":"A $A = L + D + U$ mátrixot Jacobi-iterációhoz felosztó mátrixban mit jelent a $D$ mátrix?"},"a":{"en":"The diagonal matrix containing the diagonal elements of $A$.","hu":"A $A$ átlós elemeit tartalmazó diagonális mátrix."}},
    {"q":{"en":"In the matrix splitting $A = L + D + U$, how is the matrix $L$ defined?","hu":"A $A = L + D + U$ mátrix felosztásában hogyan definiálható a $L$ mátrix?"},"a":{"en":"A strictly lower triangular matrix containing the elements of $A$ below the main diagonal.","hu":"Szigorúan alsó háromszögmátrix, amely a $A$ elemeit tartalmazza a főátló alatt."}},
    {"q":{"en":"In the matrix splitting $A = L + D + U$, how is the matrix $U$ defined?","hu":"A $A = L + D + U$ mátrix felosztásában hogyan definiálható a $U$ mátrix?"},"a":{"en":"A strictly upper triangular matrix containing the elements of $A$ above the main diagonal.","hu":"Szigorúan felső háromszög alakú mátrix, amely a $A$ elemeit tartalmazza a főátló felett."}},
    {"q":{"en":"What is the vector form equation for the Jacobi iteration step?","hu":"Mi a vektorforma egyenlete a Jacobi iterációs lépéshez?"},"a":{"en":"$x^{(k+1)} = Tx^{(k)} + c$","hu":"$x^{(k+1)} = Tx^{(k)} + c$"}},
    {"q":{"en":"How is the Jacobi iteration matrix $T_J$ calculated using the $L, D, U$ splitting?","hu":"Hogyan számítható ki a Jacobi iterációs mátrix $T_J$ a $L, D, U$ felosztással?"},"a":{"en":"$T_J = -D^{-1}(L + U)$","hu":"$T_J = -D^{-1}(L + U)$"}},
    {"q":{"en":"How is the constant vector $c$ calculated in the matrix form of Jacobi iteration?","hu":"Hogyan számítják ki a $c$ konstans vektort Jacobi iteráció mátrix formájában?"},"a":{"en":"$c = D^{-1}b$","hu":"$c = D^{-1}b$"}},
    {"q":{"en":"Which matrix contains the reciprocals of the diagonal elements of $A$?","hu":"Melyik mátrix tartalmazza a $A$ átlós elemeinek reciprokát?"},"a":{"en":"$D^{-1}$","hu":"$D^{-1}$"}},
    {"q":{"en":"What is the necessary and sufficient condition for the Jacobi iteration to converge for all initial values?","hu":"Mi a szükséges és elégséges feltétele annak, hogy a Jacobi iteráció minden kezdeti értékre konvergáljon?"},"a":{"en":"The spectral radius $\\rho(T_J) < 1$.","hu":"A spektrális sugár $\\rho(T_J) < 1$."}},
    {"q":{"en":"Term: Spectral Radius $\\rho(T)$","hu":"Fogalom: Spektrális sugár $\\rho(T)$"},"a":{"en":"Definition: The maximum absolute value of the eigenvalues of matrix $T$.","hu":"Definíció: A $T$ mátrix sajátértékeinek maximális abszolút értéke."}},
    {"q":{"en":"According to Corollary 4.10, the Jacobi iteration converges if any matrix norm $\\|T_J\\|$ is _____.","hu":"A 4.10 következtetés szerint a Jacobi-iteráció konvergál, ha bármely $\\|T_J\\|$ mátrixnorma _____."},"a":{"en":"less than 1","hu":"kevesebb mint 1"}},
    {"q":{"en":"What property of matrix $A$ is a common sufficient condition for the convergence of Jacobi iteration?","hu":"A $A$ mátrix mely tulajdonsága általános elégséges feltétele a Jacobi-iteráció konvergenciájának?"},"a":{"en":"Strict diagonal dominance.","hu":"Szigorú átlós dominancia."}},
    {"q":{"en":"What is the mathematical definition of a row diagonally dominant matrix $A$?","hu":"Mi a matematikai definíciója a $A$ sor átlósan domináns mátrixának?"},"a":{"en":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$.","hu":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ minden $i$-hez."}},
    {"q":{"en":"How are the diagonal entries of the Jacobi iteration matrix $T_J$ always valued?","hu":"Hogyan értékelik mindig a Jacobi iterációs mátrix $T_J$ átlós bejegyzéseit?"},"a":{"en":"They are all zero.","hu":"Mindegyik nulla."}},
    {"q":{"en":"Why does diagonal dominance of $A$ guarantee convergence in the infinity norm?","hu":"Miért garantálja a $A$ diagonális dominanciája a konvergenciát a végtelen normában?"},"a":{"en":"It ensures that $\\|T_J\\|_\\infty < 1$.","hu":"Ez biztosítja, hogy a $\\|T_J\\|_\\infty < 1$."}},
    {"q":{"en":"How is the infinity norm $\\|T_J\\|_\\infty$ calculated in the context of the Jacobi method?","hu":"Hogyan számítják ki a $\\|T_J\\|_\\infty$ végtelenségi normát a Jacobi-módszerrel összefüggésben?"},"a":{"en":"As the maximum absolute row sum: $\\max_i \\sum_{j \\ne i} \\frac{|a_{ij}|}{|a_{ii}|}$.","hu":"Maximális abszolút sorösszegként: $\\max_i \\sum_{j \\ne i} \\frac{|a_{ij}|}{|a_{ii}|}$."}},
    {"q":{"en":"If the Jacobi iteration converges, what does the sequence limit represent?","hu":"Ha a Jacobi-iteráció konvergál, mit jelent a sorozathatár?"},"a":{"en":"The exact solution to the linear system $Ax = b$.","hu":"A pontos megoldás a $Ax = b$ lineáris rendszerhez."}},
    {"q":{"en":"In the scalar formula for $x_i^{(k+1)}$, what values from the sequence are used on the right-hand side?","hu":"A $x_i^{(k+1)}$ skaláris képletében a sorozat mely értékeit használjuk a jobb oldalon?"},"a":{"en":"Only values from the previous iteration $k$.","hu":"Csak az előző $k$ iteráció értékei."}},
    {"q":{"en":"If the spectral radius $\\rho(T_J) \\ge 1$, can Jacobi iteration be guaranteed to converge for any $x^{(0)}$?","hu":"Ha a spektrális sugár $\\rho(T_J) \\ge 1$, garantálható-e a Jacobi iteráció konvergálása bármely $x^{(0)}$ esetén?"},"a":{"en":"No, the method may diverge for some initial values.","hu":"Nem, a módszer bizonyos kezdeti értékeknél eltérhet."}},
    {"q":{"en":"What is the relationship between the matrix $A$ and the split components $L$, $D$, and $U$?","hu":"Mi a kapcsolat a $A$ mátrix és a $L$, $D$ és $U$ osztott komponensek között?"},"a":{"en":"$A = L + D + U$","hu":"$A = L + D + U$"}},
    {"q":{"en":"Under what condition is the convergence of the Jacobi iteration considered 'global'?","hu":"Milyen feltételek mellett tekinthető „globálisnak” a Jacobi-iteráció konvergenciája?"},"a":{"en":"When it converges for any arbitrary initial value $x^{(0)}$.","hu":"Amikor bármely tetszőleges kezdeti értékhez konvergál, $x^{(0)}$."}},
    {"q":{"en":"The elements of the iteration matrix $T_J$ are given by $t_{ij} = \\dots$ for $i \\ne j$.","hu":"A $T_J$ iterációs mátrix elemeit a $t_{ij} = \\dots$ adja meg a $i \\ne j$-hez."},"a":{"en":"$t_{ij} = -a_{ij}/a_{ii}$","hu":"$t_{ij} = -a_{ij}/a_{ii}$"}},
    {"q":{"en":"According to the exercises, Jacobi iteration is also convergent if $A$ is _____ diagonally dominant.","hu":"A gyakorlatok szerint a Jacobi-iteráció is konvergens, ha a $A$ _____ átlósan domináns."},"a":{"en":"column","hu":"oszlop"}},
    {"q":{"en":"Formula: $\\|T\\|_\\infty$","hu":"Képlet: $\\|T\\|_\\infty$"},"a":{"en":"Definition: $\\max_{1 \\le i \\le n} \\sum_{j=1}^n |t_{ij}|$.","hu":"Definíció: $\\max_{1 \\le i \\le n} \\sum_{j=1}^n |t_{ij}|$."}},
    {"q":{"en":"In the example $5x_1 + 3x_2 - x_3 = -4$, what is the expression for $x_1^{(k+1)}$?","hu":"A $5x_1 + 3x_2 - x_3 = -4$ példában mi a $x_1^{(k+1)}$ kifejezés?"},"a":{"en":"$x_1^{(k+1)} = (-4 - 3x_2^{(k)} + x_3^{(k)})/5$.","hu":"$x_1^{(k+1)} = (-4 - 3x_2^{(k)} + x_3^{(k)})/5$."}},
    {"q":{"en":"If $\\|T_J\\|_\\infty = 4/5$, what can be concluded about the convergence of the Jacobi iteration?","hu":"Ha $\\|T_J\\|_\\infty = 4/5$, mit lehet következtetni a Jacobi-iteráció konvergenciájára?"},"a":{"en":"It is convergent because the norm is less than 1.","hu":"Konvergens, mert a norma kisebb, mint 1."}},
    {"q":{"en":"What is the result of multiplying the equation $Dx = -(L+U)x + b$ by $D^{-1}$?","hu":"Mi az eredmény, ha a $Dx = -(L+U)x + b$ egyenletet megszorozzuk $D^{-1}$-vel?"},"a":{"en":"$x = -D^{-1}(L+U)x + D^{-1}b$","hu":"$x = -D^{-1}(L+U)x + D^{-1}b$"}},
    {"q":{"en":"In a $3 \\times 3$ system, how many equations are solved for their respective diagonal variables to form the Jacobi iteration?","hu":"Egy $3 \\times 3$ rendszerben hány egyenletet kell megoldani a megfelelő átlós változókra a Jacobi-iteráció létrehozásához?"},"a":{"en":"Three.","hu":"Három."}},
    {"q":{"en":"Is the condition $\\rho(T_J) < 1$ necessary, sufficient, or both for Jacobi convergence?","hu":"A $\\rho(T_J) < 1$ feltétel szükséges, elégséges vagy mindkettő a Jacobi-konvergenciához?"},"a":{"en":"Both (necessary and sufficient).","hu":"Mindkettő (szükséges és elegendő)."}},
    {"q":{"en":"Is the diagonal dominance of $A$ a necessary condition for Jacobi convergence?","hu":"A $A$ átlós dominanciája szükséges feltétele a Jacobi-konvergenciának?"},"a":{"en":"No, it is only a sufficient condition.","hu":"Nem, ez csak egy elégséges feltétel."}},
    {"q":{"en":"What does the index $k$ represent in the sequence $x^{(k)}$?","hu":"Mit jelent a $k$ index a $x^{(k)}$ sorozatban?"},"a":{"en":"The iteration count or step number.","hu":"Az iterációszám vagy lépésszám."}},
    {"q":{"en":"In the scalar Jacobi formula, why is the term where $j = i$ excluded from the summation?","hu":"A skalár Jacobi-képletben miért van kizárva az összegzésből az a kifejezés, ahol a $j = i$?"},"a":{"en":"Because $x_i$ is the variable being solved for on the left-hand side.","hu":"Mert a $x_i$ a bal oldalon megoldandó változó."}},
    {"q":{"en":"Which matrix norm is typically easiest to evaluate to check for Jacobi convergence in practice?","hu":"Általában melyik mátrixnormát a legkönnyebb kiértékelni a Jacobi-konvergencia gyakorlati ellenőrzéséhez?"},"a":{"en":"The infinity norm (maximum absolute row sum).","hu":"A végtelen norma (maximális abszolút sorösszeg)."}},
    {"q":{"en":"How does the Jacobi method treat the update of vector components during a single iteration?","hu":"Hogyan kezeli a Jacobi-módszer a vektorkomponensek frissítését egyetlen iteráció során?"},"a":{"en":"Simultaneously (all new components depend only on the previous vector $x^{(k)}$).","hu":"Egyidejűleg (minden új komponens csak az előző $x^{(k)}$ vektortól függ)."}},
    {"q":{"en":"In the matrix splitting $L+D+U$, what are the diagonal elements of $L$?","hu":"Melyek a $L$ átlós elemei a $L+D+U$ mátrixban?"},"a":{"en":"Zero.","hu":"Nulla."}},
    {"q":{"en":"In the matrix splitting $L+D+U$, what are the diagonal elements of $U$?","hu":"Melyek a $U$ átlós elemei a $L+D+U$ mátrixban?"},"a":{"en":"Zero.","hu":"Nulla."}},
    {"q":{"en":"What transformation is applied to $Ax=b$ to isolate the $Dx$ term on the left?","hu":"Milyen transzformációt alkalmaznak a $Ax=b$-re a bal oldali $Dx$ kifejezés elkülönítésére?"},"a":{"en":"$Dx = b - (L+U)x$","hu":"$Dx = b - (L+U)x$"}},
    {"q":{"en":"If the initial guess is $x^{(0)} = 0$, what is the value of $x^{(1)}$?","hu":"Ha a kezdeti tipp $x^{(0)} = 0$, mennyi a $x^{(1)}$ értéke?"},"a":{"en":"$x^{(1)} = c$ (the constant vector $D^{-1}b$).","hu":"$x^{(1)} = c$ (a $D^{-1}b$ konstans vektor)."}},
    {"q":{"en":"The notation $T_J$ is specifically used for the _____ matrix.","hu":"A $T_J$ jelölést kifejezetten a _____ mátrixhoz használják."},"a":{"en":"Jacobi iteration","hu":"Jacobi iteráció"}},
    {"q":{"en":"Does the Jacobi iteration always converge for any non-singular matrix $A$?","hu":"Mindig konvergál a Jacobi-iteráció bármely nem szinguláris $A$ mátrixra?"},"a":{"en":"No, convergence depends on the spectral radius of $T_J$.","hu":"Nem, a konvergencia a $T_J$ spektrális sugarától függ."}},
    {"q":{"en":"What is the relation between the diagonal dominance of $A$ and the infinity norm of $T_J$?","hu":"Mi a kapcsolat a $A$ diagonális dominanciája és a $T_J$ végtelenségi normája között?"},"a":{"en":"Diagonal dominance implies $\\|T_J\\|_\\infty < 1$.","hu":"Az átlós dominancia $\\|T_J\\|_\\infty < 1$-t jelent."}},
    {"q":{"en":"In $T_J = -D^{-1}(L+U)$, what does the negative sign originate from?","hu":"A $T_J = -D^{-1}(L+U)$-ben miből származik a negatív előjel?"},"a":{"en":"Moving the $(L+U)x$ terms to the right-hand side of the equation.","hu":"A $(L+U)x$ tagok áthelyezése az egyenlet jobb oldalára."}},
    {"q":{"en":"A matrix is _____ dominant if for every row, the magnitude of the diagonal entry is larger than the sum of the magnitudes of all other entries in that row.","hu":"Egy mátrix _____ domináns, ha minden sorban az átlós bejegyzés nagysága nagyobb, mint az adott sorban lévő összes többi bejegyzés nagyságának összege."},"a":{"en":"diagonally","hu":"átlósan"}},
    {"q":{"en":"If $\\|T_J\\|_1 < 1$, is the Jacobi iteration guaranteed to converge?","hu":"Ha $\\|T_J\\|_1 < 1$, akkor a Jacobi iteráció garantáltan konvergál?"},"a":{"en":"Yes, any matrix norm being less than 1 is sufficient.","hu":"Igen, minden 1-nél kisebb mátrixnorma elegendő."}},
    {"q":{"en":"In the general system $Ax=b$, what coefficient is used to divide the $i$-th equation in the Jacobi method?","hu":"A $Ax=b$ általános rendszerben milyen együtthatót használunk a $i$-edik egyenlet felosztására a Jacobi-módszerben?"},"a":{"en":"The diagonal coefficient $a_{ii}$.","hu":"Az átlós együttható $a_{ii}$."}},
    {"q":{"en":"How is the constant vector $c_i$ for a specific row $i$ defined in scalar form?","hu":"Hogyan definiálható a $c_i$ konstans vektor egy adott $i$ sorhoz skaláris formában?"},"a":{"en":"$c_i = b_i / a_{ii}$","hu":"$c_i = b_i / a_{ii}$"}},
    {"q":{"en":"True or False: Row interchanges used to fix $a_{ii} = 0$ change the solution to the system $Ax=b$.","hu":"Igaz vagy hamis: A $a_{ii} = 0$ javításához használt sorcsere megváltoztatja a megoldást a $Ax=b$ rendszerre."},"a":{"en":"False (they only rearrange the equations).","hu":"Hamis (csak az egyenleteket rendezik át)."}},
    {"q":{"en":"Which component of $A = L+D+U$ is used to compute the inverse needed for the iteration matrix?","hu":"A $A = L+D+U$ melyik komponensét használjuk az iterációs mátrixhoz szükséges inverz kiszámításához?"},"a":{"en":"The diagonal matrix $D$.","hu":"A $D$ átlós mátrix."}},
    {"q":{"en":"The Jacobi method is a _____ method, meaning it generates a sequence of approximations.","hu":"A Jacobi módszer egy _____ módszer, ami azt jelenti, hogy közelítések sorozatát generálja."},"a":{"en":"stationary iterative","hu":"stacionárius iteratív"}},
    {"q":{"en":"The values in Table 4.1 show that as $k$ increases, the vector $x^{(k)}$ _____ to the true solution.","hu":"A 4.1. táblázatban szereplő értékek azt mutatják, hogy a $k$ növekedésével a $x^{(k)}$ _____ vektor a valódi megoldáshoz vezet."},"a":{"en":"converges","hu":"konvergál"}},
    {"q":{"en":"If the infinity norm of the iteration matrix is 0.75, does the system satisfy a sufficient condition for convergence?","hu":"Ha az iterációs mátrix végtelenségi normája 0,75, akkor a rendszer kielégíti-e a konvergencia elégséges feltételét?"},"a":{"en":"Yes, because $0.75 < 1$.","hu":"Igen, mert a $0.75 < 1$."}},
    {"q":{"en":"In the splitting $A=L+D+U$, why is $L+U$ grouped together in the iteration matrix formula?","hu":"A felosztó $A=L+D+U$-ben miért van $L+U$ csoportosítva az iterációs mátrixképletben?"},"a":{"en":"They represent all the non-diagonal coefficients of $A$.","hu":"Ezek képviselik a $A$ összes nem átlós együtthatóját."}},
    {"q":{"en":"If a matrix $A$ is diagonally dominant, what is the maximum possible value for a row sum in $T_J$?","hu":"Ha egy $A$ mátrix átlósan domináns, mekkora lehet egy sorösszeg maximális értéke a $T_J$-ben?"},"a":{"en":"A value strictly less than 1.","hu":"1-nél szigorúan kisebb érték."}},
    {"q":{"en":"When expressing $x_2$ in the Jacobi method for a $3 \\times 3$ system, which variables are on the right-hand side?","hu":"Amikor $x_2$-t a Jacobi-módszerben $3 \\times 3$ rendszerhez fejezünk ki, mely változók vannak a jobb oldalon?"},"a":{"en":"$x_1$ and $x_3$.","hu":"$x_1$ és $x_3$."}},
    {"q":{"en":"Cloze: The Jacobi iteration is convergent for *all* initial values if and only if $\\rho(T_J)$ is _____.","hu":"Bezárás: A Jacobi-iteráció akkor és csak akkor konvergens *minden* kezdeti értékre, ha $\\rho(T_J)$ _____."},"a":{"en":"less than 1","hu":"kevesebb mint 1"}},
    {"q":{"en":"What matrix operation is performed on $L+U$ before multiplying by $-D^{-1}$ to get $T_J$?","hu":"Milyen mátrixműveletet hajtanak végre a $L+U$-n, mielőtt megszoroznák a $-D^{-1}$-vel, hogy megkapjuk a $T_J$-t?"},"a":{"en":"Addition.","hu":"Kiegészítés."}}
  ],
  'condition': [
    {"q":{"en":"In the context of the linear system $Ax = b$, how is the residual vector $r$ defined for an approximate solution $\\tilde{x}$?","hu":"A $Ax = b$ lineáris rendszer összefüggésében hogyan definiálható a $r$ maradékvektor egy $\\tilde{x}$ közelítő megoldáshoz?"},"a":{"en":"$r = b - A\\tilde{x}$","hu":"$r = b - A\\tilde{x}$"}},
    {"q":{"en":"What is the stopping criterion for iterative methods based on the absolute difference between consecutive iterations?","hu":"Mi a leállítási kritériuma az egymást követő iterációk közötti abszolút különbségen alapuló iteratív módszereknek?"},"a":{"en":"$\\|x^{(k+1)} - x^{(k)}\\| < \\varepsilon$","hu":"$\\|x^{(k+1)} - x^{(k)}\\| < \\varepsilon$"}},
    {"q":{"en":"What is the stopping criterion for iterative methods based on the relative difference between consecutive iterations?","hu":"Mi a leállítási kritériuma az egymást követő iterációk közötti relatív különbségen alapuló iteratív módszereknek?"},"a":{"en":"$\\frac{\\|x^{(k+1)} - x^{(k)}\\|}{\\|x^{(k+1)}\\|} < \\varepsilon$","hu":"$\\frac{\\|x^{(k+1)} - x^{(k)}\\|}{\\|x^{(k+1)}\\|} < \\varepsilon$"}},
    {"q":{"en":"What is the stopping criterion for iterative methods based on the residual vector $r$?","hu":"Mi a leállítási feltétele a $r$ reziduális vektoron alapuló iteratív módszereknek?"},"a":{"en":"$\\|b - Ax^{(k)}\\| < \\varepsilon$","hu":"$\\|b - Ax^{(k)}\\| < \\varepsilon$"}},
    {"q":{"en":"Under what condition is the smallness of the residual vector $\\|r\\|$ a reliable indicator that the error $\\|x - \\tilde{x}\\|$ is also small?","hu":"Milyen feltétel mellett a $\\|r\\|$ maradékvektor kicsinysége megbízhatóan jelzi, hogy a $\\|x - \\tilde{x}\\|$ hiba is kicsi?"},"a":{"en":"When the matrix $A$ is well-conditioned (the product $\\|A\\| \\|A^{-1}\\|$ is not too large).","hu":"Ha a $A$ mátrix jól kondicionált (a $\\|A\\| \\|A^{-1}\\|$ termék nem túl nagy)."}},
    {"q":{"en":"What is the absolute error bound for an approximate solution $\\tilde{x}$ of the system $Ax = b$ given its residual $r$?","hu":"Mekkora az abszolút hibahatár a $Ax = b$ rendszer $\\tilde{x}$ közelítő megoldásához, a $r$ maradéka mellett?"},"a":{"en":"$\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$","hu":"$\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$"}},
    {"q":{"en":"What is the relative error bound for an approximate solution $\\tilde{x}$ of the system $Ax = b$ involving the condition number?","hu":"Mekkora a relatív hibahatár a $Ax = b$ rendszer $\\tilde{x}$ közelítő megoldásához, amely magában foglalja a feltételszámot?"},"a":{"en":"$\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|} \\leq \\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$","hu":"$\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|} \\leq \\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$"}},
    {"q":{"en":"How is the condition number of a square matrix $A$ defined relative to a matrix norm $\\| \\cdot \\|$?","hu":"Hogyan definiálható a $A$ négyzetmátrix feltételszáma a $\\| \\cdot \\|$ mátrixnormához képest?"},"a":{"en":"$\\text{cond}(A) = \\|A\\| \\|A^{-1}\\|$","hu":"$\\text{cond}(A) = \\|A\\| \\|A^{-1}\\|$"}},
    {"q":{"en":"What term describes a matrix with a very large condition number?","hu":"Milyen kifejezés ír le egy nagyon nagy feltételszámú mátrixot?"},"a":{"en":"Ill-conditioned (or weakly determined).","hu":"Rossz kondíciójú (vagy gyengén határozott)."}},
    {"q":{"en":"In numerical practice, what range of condition number values typically indicates that a matrix is ill-conditioned?","hu":"A numerikus gyakorlatban a feltételszámok melyik tartománya jelzi jellemzően, hogy egy mátrix rosszul kondicionált?"},"a":{"en":"Values greater than $100$ to $1000$.","hu":"$100$ - $1000$ értékeknél nagyobb értékek."}},
    {"q":{"en":"If $A$ is nonsingular and $Ax = b$, what is the exact relationship between the error vector $e = x - \\tilde{x}$ and the residual vector $r$?","hu":"Ha a $A$ nem szinguláris és $Ax = b$, mi a pontos kapcsolat a $e = x - \\tilde{x}$ hibavektor és a $r$ reziduális vektor között?"},"a":{"en":"$x - \\tilde{x} = A^{-1}r$","hu":"$x - \\tilde{x} = A^{-1}r$"}},
    {"q":{"en":"Which matrix norm inequality is used to prove the absolute error bound $\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$?","hu":"Melyik mátrix normaegyenlőtlenséget használjuk a $\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$ abszolút hibakorlátozás bizonyítására?"},"a":{"en":"$\\|A^{-1}r\\| \\leq \\|A^{-1}\\| \\|r\\|$","hu":"$\\|A^{-1}r\\| \\leq \\|A^{-1}\\| \\|r\\|$"}},
    {"q":{"en":"What inequality relates the norm of the constant vector $b$ to the norms of $A$ and the exact solution $x$?","hu":"Milyen egyenlőtlenség hozza összefüggésbe a $b$ konstans vektor normáját a $A$ normáival és a $x$ pontos megoldással?"},"a":{"en":"$\\|b\\| \\leq \\|A\\| \\|x\\|$","hu":"$\\|b\\| \\leq \\|A\\| \\|x\\|$"}},
    {"q":{"en":"Why is the residual-based stopping criterion unreliable for ill-conditioned matrices?","hu":"Miért nem megbízható a maradék alapú leállítási kritérium rosszul kondicionált mátrixok esetén?"},"a":{"en":"A small residual norm does not guarantee a small approximation error when the condition number is large.","hu":"A kis maradék norma nem garantálja a kis közelítési hibát, ha a feltételszám nagy."}},
    {"q":{"en":"How does the infinity norm condition number $\\text{cond}_\\infty(A)$ of $A = \\begin{pmatrix} 4 & 1 \\\\ 4.03 & 1 \\end{pmatrix}$ explain why $\\tilde{x} = (2, -3)^T$ is a poor approximation despite a small residual?","hu":"Hogyan magyarázza a $A = \\begin{pmatrix} 4 & 1 \\\\ 4.03 & 1 \\end{pmatrix}$ $\\text{cond}_\\infty(A)$ végtelenségi normafeltétele, hogy a $\\tilde{x} = (2, -3)^T$ miért rossz közelítés egy kis maradék ellenére?"},"a":{"en":"The condition number is $1346$, which is large enough to allow a small residual to correspond to a large error.","hu":"A feltételszám $1346$, amely elég nagy ahhoz, hogy egy kis maradék nagy hibának feleljen meg."}},
    {"q":{"en":"What is the approximate relationship between the residual norm $\\|r\\|$ and $t$-digit arithmetic rounding error?","hu":"Mi a hozzávetőleges kapcsolat a $\\|r\\|$ maradék norma és a $t$ számjegyű számtani kerekítési hiba között?"},"a":{"en":"$\\|r\\| \\approx 10^{-t} \\|A\\| \\|\\tilde{x}\\|$","hu":"$\\|r\\| \\approx 10^{-t} \\|A\\| \\|\\tilde{x}\\|$"}},
    {"q":{"en":"In iterative refinement, what level of precision is recommended for calculating the residual vector $r = b - A\\tilde{x}$?","hu":"Iteratív finomításnál milyen pontossági szint ajánlott a $r = b - A\\tilde{x}$ maradékvektor kiszámításához?"},"a":{"en":"Double precision ($2t$-digit arithmetic).","hu":"Dupla pontosság ($2t$ számjegyű aritmetika)."}},
    {"q":{"en":"In the context of condition number estimation, what does the vector $\\tilde{y}$ (the solution to $Ay = r$) approximate?","hu":"A feltételszám becslésével összefüggésben mit közelít a $\\tilde{y}$ vektor (a $Ay = r$ megoldása)?"},"a":{"en":"The error vector $x - \\tilde{x}$.","hu":"A $x - \\tilde{x}$ hibavektor."}},
    {"q":{"en":"What formula can be used to estimate the condition number $\\text{cond}(A)$ using the numerical solutions $\\tilde{x}$ and $\\tilde{y}$?","hu":"Milyen képlettel becsülhető meg a $\\text{cond}(A)$ feltételszám a $\\tilde{x}$ és $\\tilde{y}$ numerikus megoldások segítségével?"},"a":{"en":"$\\text{cond}(A) \\approx 10^t \\frac{\\|\\tilde{y}\\|}{\\|\\tilde{x}\\|}$","hu":"$\\text{cond}(A) \\approx 10^t \\frac{\\|\\tilde{y}\\|}{\\|\\tilde{x}\\|}$"}},
    {"q":{"en":"What is the formula for the improved approximation $\\bar{x}$ after one step of iterative refinement?","hu":"Mi a képlete a javított $\\bar{x}$ közelítésnek egy lépésnyi iteratív finomítás után?"},"a":{"en":"$\\bar{x} = \\tilde{x} + \\tilde{y}$","hu":"$\\bar{x} = \\tilde{x} + \\tilde{y}$"}},
    {"q":{"en":"How is the new residual $\\tilde{r}$ defined after calculating the correction $\\tilde{y}$ in iterative refinement?","hu":"Hogyan definiálható az új maradék $\\tilde{r}$ a $\\tilde{y}$ korrekció iteratív finomításban történő kiszámítása után?"},"a":{"en":"$\\tilde{r} = r - A\\tilde{y}$","hu":"$\\tilde{r} = r - A\\tilde{y}$"}},
    {"q":{"en":"Why is solving $Ay = r$ during iterative refinement computationally efficient if Gaussian elimination was already performed for $Ax = b$?","hu":"Miért hatékony számításilag a $Ay = r$ megoldása iteratív finomítás során, ha a Gauss-eliminációt már elvégezték a $Ax = b$ esetében?"},"a":{"en":"The $l_{ij}$ factors and row changes from the first elimination can be reused, requiring elimination only on the vector $r$.","hu":"Az első eliminációból származó $l_{ij}$ tényezők és sormódosítások újra felhasználhatók, csak a $r$ vektoron kell eliminálni."}},
    {"q":{"en":"What is another name for the method of iterative refinement?","hu":"Mi a másik neve az iteratív finomítás módszerének?"},"a":{"en":"Residual correction.","hu":"Maradék korrekció."}},
    {"q":{"en":"What was the exact solution to the linear system in Example 4.17?","hu":"Mi volt a 4.17. példában szereplő lineáris rendszer pontos megoldása?"},"a":{"en":"$x = (1, 1)^T$","hu":"$x = (1, 1)^T$"}},
    {"q":{"en":"In Example 4.21, what was the estimated $\\text{cond}_\\infty(A)$ using iterative refinement components?","hu":"A 4.21. példában mekkora volt a becsült $\\text{cond}_\\infty(A)$ iteratív finomító komponensek használatával?"},"a":{"en":"$1875$","hu":"$1875$"}},
    {"q":{"en":"According to Theorem 4.18, the relative error is bounded by the product of the condition number and what other ratio?","hu":"A 4.18. Tétel szerint a relatív hibát a feltételszám szorzata és milyen más arány határolja?"},"a":{"en":"The ratio of the residual norm to the constant vector norm ($\\frac{\\|r\\|}{\\|b\\|}$).","hu":"A maradék norma aránya az állandó vektornormához ($\\frac{\\|r\\|}{\\|b\\|}$)."}},
    {"q":{"en":"In Example 4.19, what are the infinity norms $\\|A\\|_\\infty$ and $\\|A^{-1}\\|_\\infty$ for the given $2 \\times 2$ matrix?","hu":"A 4.19. példában mik a $\\|A\\|_\\infty$ és $\\|A^{-1}\\|_\\infty$ végtelenségi normák az adott $2 \\times 2$ mátrixra?"},"a":{"en":"$\\|A\\|_\\infty = 5.03$ and $\\|A^{-1}\\|_\\infty = 267.6$.","hu":"$\\|A\\|_\\infty = 5.03$ és $\\|A^{-1}\\|_\\infty = 267.6$."}},
    {"q":{"en":"True or False: The condition number of a matrix $A$ is the same regardless of which matrix norm is used.","hu":"Igaz vagy hamis: A $A$ mátrix feltételszáma ugyanaz, függetlenül attól, hogy melyik mátrixnormát használják."},"a":{"en":"False (it depends on the specific norm $\\| \\cdot \\|_p$ used).","hu":"Hamis (ez az alkalmazott $\\| \\cdot \\|_p$ konkrét normától függ)."}},
    {"q":{"en":"In iterative refinement, if $\\tilde{x}$ is the approximate solution to $Ax = b$, what system is solved to find the correction vector $\\tilde{y}$?","hu":"Iteratív finomításban, ha a $\\tilde{x}$ a $Ax = b$ közelítő megoldása, milyen rendszert oldanak meg a $\\tilde{y}$ korrekciós vektor megtalálásához?"},"a":{"en":"$Ay = r$ (where $r$ is the residual of $\\tilde{x}$).","hu":"$Ay = r$ (ahol a $r$ a $\\tilde{x}$ maradéka)."}},
    {"q":{"en":"What is the primary benefit of the iterative refinement method for ill-conditioned matrices?","hu":"Mi az elsődleges előnye az iteratív finomítási módszernek rosszul kondicionált mátrixok esetén?"},"a":{"en":"It provides a good approximation of the solution in just a few steps.","hu":"Néhány lépésben jó közelítést ad a megoldáshoz."}},
    {"q":{"en":"How does $\\|\\tilde{r}\\|$ typically compare to $\\|r\\|$ in the iterative refinement process?","hu":"Hogyan viszonyul a $\\|\\tilde{r}\\|$ általában a $\\|r\\|$-hez az iteratív finomítási folyamat során?"},"a":{"en":"$\\|\\tilde{r}\\|$ is much smaller than $\\|r\\|$ ($ \\|\\tilde{r}\\| \\ll \\|r\\| $).","hu":"A $\\|\\tilde{r}\\|$ sokkal kisebb, mint a $\\|r\\|$ ($ \\|\\tilde{r}\\| \\ll \\|r\\| $)."}},
    {"q":{"en":"What is the Hungarian term for the residual vector?","hu":"Mi a magyar kifejezés a maradékvektorra?"},"a":{"en":"Reziduális vektor.","hu":"Reziduális vektor."}},
    {"q":{"en":"What is the Hungarian term for a well-conditioned matrix?","hu":"Mi a magyar kifejezés a jól kondicionált mátrixra?"},"a":{"en":"Jól kondicionált mátrix.","hu":"Jól kondicionált mátrix."}},
    {"q":{"en":"Which stopping criterion is considered the natural analogue to the one used for nonlinear equations in Section 2.8?","hu":"Melyik leállítási kritérium tekinthető a 2.8. szakaszban a nemlineáris egyenletekhez használt kritérium természetes analógjának?"},"a":{"en":"Condition (iii): $\\|b - Ax^{(k)}\\| < \\varepsilon$.","hu":"(iii) állapot: $\\|b - Ax^{(k)}\\| < \\varepsilon$."}},
    {"q":{"en":"If $\\bar{x} = \\tilde{x} + \\tilde{y}$, substitute this into the expression for the new residual $b - A\\bar{x}$ using $r$.","hu":"Ha $\\bar{x} = \\tilde{x} + \\tilde{y}$, helyettesítse ezt az új maradék $b - A\\bar{x}$ kifejezéssel a $r$ használatával."},"a":{"en":"$b - A(\\tilde{x} + \\tilde{y}) = r - A\\tilde{y}$","hu":"$b - A(\\tilde{x} + \\tilde{y}) = r - A\\tilde{y}$"}},
    {"q":{"en":"In the proof of Theorem 4.18, how is the equation $A(x - \\tilde{x}) = r$ derived?","hu":"A 4.18. tétel bizonyítása során hogyan származtatható a $A(x - \\tilde{x}) = r$ egyenlet?"},"a":{"en":"By subtracting $A\\tilde{x} = b - r$ from $Ax = b$.","hu":"$A\\tilde{x} = b - r$ $Ax = b$-ből kivonva."}},
    {"q":{"en":"What happens to the relative error bound if $\\text{cond}(A)$ is close to $1$?","hu":"Mi történik a relatív hibahatárral, ha a $\\text{cond}(A)$ közel van a $1$-hez?"},"a":{"en":"The relative error becomes directly proportional to the relative residual ($\\frac{\\|r\\|}{\\|b\\|}$).","hu":"A relatív hiba egyenesen arányossá válik a relatív reziduális értékkel ($\\frac{\\|r\\|}{\\|b\\|}$)."}},
    {"q":{"en":"Identify the vector $x^{(2)}$ calculated in Example 4.21 after one refinement step.","hu":"Azonosítsa a 4.21. példában kiszámított $x^{(2)}$ vektort egy finomítási lépés után."},"a":{"en":"$(0.9961, 1.016)^T$","hu":"$(0.9961, 1.016)^T$"}},
    {"q":{"en":"What variable represents the number of digits of arithmetic precision in the condition number estimation formula?","hu":"Melyik változó jelenti a számtani pontosságú számjegyek számát a feltételszám-becslési képletben?"},"a":{"en":"$t$","hu":"$t$"}},
    {"q":{"en":"Concept: Ill-conditioned matrix","hu":"Koncepció: rosszul kondicionált mátrix"},"a":{"en":"Definition: A matrix where small changes in input (or small residuals) can lead to large changes in the solution (or large errors).","hu":"Definíció: Olyan mátrix, ahol a bemenet (vagy kis maradék) kis változásai nagy változásokhoz (vagy nagy hibákhoz) vezethetnek a megoldásban."}},
    {"q":{"en":"Process: Iterative Refinement Step 2","hu":"Folyamat: Iteratív finomítás 2. lépés"},"a":{"en":"Compute the residual vector $r = b - A\\tilde{x}$ using double precision to preserve significance.","hu":"Számítsa ki a $r = b - A\\tilde{x}$ maradékvektort dupla pontossággal a szignifikancia megőrzése érdekében."}},
    {"q":{"en":"Formula: Relative error $\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|}$ upper bound","hu":"Képlet: Relatív hiba $\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|}$ felső korlát"},"a":{"en":"$\\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$","hu":"$\\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$"}},
    {"q":{"en":"Formula: Absolute error $\\|x - \\tilde{x}\\|$ upper bound","hu":"Képlet: Abszolút hiba $\\|x - \\tilde{x}\\|$ felső korlát"},"a":{"en":"$\\|A^{-1}\\| \\|r\\|$","hu":"$\\|A^{-1}\\| \\|r\\|$"}},
    {"q":{"en":"In the Hungarian text, what is the synonym provided for 'rosszul kondicionált'?","hu":"A magyar szövegben mi a „rosszul kondicionált” szinonimája?"},"a":{"en":"Gyengén meghatározott.","hu":"Gyengén meghatározott."}},
    {"q":{"en":"What does the symbol $\\varepsilon$ represent in the context of stopping criteria?","hu":"Mit jelent a $\\varepsilon$ szimbólum a leállási feltételekkel összefüggésben?"},"a":{"en":"A small positive tolerance value used to terminate iterations.","hu":"Egy kis pozitív tűrésérték, amelyet az iterációk befejezésére használnak."}},
    {"q":{"en":"According to the transcript, if the product $\\|A\\| \\|A^{-1}\\|$ is big, what happens to the error estimate?","hu":"Az átirat szerint, ha a $\\|A\\| \\|A^{-1}\\|$ termék nagy, mi történik a hibabecsléssel?"},"a":{"en":"The estimate will not guarantee that the error is small, even if the residual is small.","hu":"A becslés nem garantálja, hogy a hiba kicsi, még akkor sem, ha a maradék kicsi."}},
    {"q":{"en":"In Example 4.19, what is the specific value of $\\text{cond}_\\infty(A)$ calculated for the matrix?","hu":"A 4.19. példában mi a mátrixra számított $\\text{cond}_\\infty(A)$ fajlagos értéke?"},"a":{"en":"$1346$","hu":"$1346$"}},
    {"q":{"en":"Exercise 1a asks for the condition numbers of which $2 \\times 2$ matrix?","hu":"Az 1a gyakorlat melyik $2 \\times 2$ mátrix feltételszámait kéri?"},"a":{"en":"$\\begin{pmatrix} 1 & 2 \\\\ 4 & -1 \\end{pmatrix}$","hu":"$\\begin{pmatrix} 1 & 2 \\\\ 4 & -1 \\end{pmatrix}$"}},
    {"q":{"en":"What is the exact solution given for the system in Exercise 3?","hu":"Mi a pontos megoldás a rendszerre a 3. gyakorlatban?"},"a":{"en":"$(1, 10)$","hu":"$(1, 10)$"}},
    {"q":{"en":"When solving $Ay = r$ in practice, what is done with the row changes from the initial Gaussian elimination?","hu":"A $Ay = r$ gyakorlati megoldása során mi történik a kezdeti Gauss-eliminációból származó sormódosításokkal?"},"a":{"en":"They are stored and applied to the vector $r$ to maintain consistency with the factored matrix.","hu":"Tárolják és alkalmazzák a $r$ vektorra a faktorált mátrixszal való konzisztencia megőrzése érdekében."}},
    {"q":{"en":"What is the infinity norm of the residual vector $\\mathbf{r} = (0, 0.03)^T$ from Example 4.17?","hu":"Mekkora a 4.17. példából származó $\\mathbf{r} = (0, 0.03)^T$ reziduális vektor végtelenségi normája?"},"a":{"en":"$0.03$","hu":"$0.03$"}},
    {"q":{"en":"Which stopping criterion uses the norm of the difference between $x^{(k+1)}$ and $x^{(k)}$ divided by the norm of $x^{(k+1)}$?","hu":"Melyik leállási kritérium használja a $x^{(k+1)}$ és $x^{(k)}$ közötti különbség normáját osztva a $x^{(k+1)}$ normával?"},"a":{"en":"The numerical relative error criterion (ii).","hu":"A számszerű relatív hibakritérium (ii)."}}
  ],
}
