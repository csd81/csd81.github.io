// Auto-generated learning aids for chapter 6 (interpolation). Glossaries and flashcards bilingual.
export interface GlossaryEntry { term: { en: string; hu: string }; def: { en: string; hu: string } }
export interface Flashcard { q: { en: string; hu: string } | string; a: { en: string; hu: string } | string }

export const GLOSSARIES: Record<string, GlossaryEntry[]> = {
  lagrange: [
    {
      "term": {
        "en": "Lagrange interpolation problem (6.1)",
        "hu": "Lagrange-interpolációs feladat (6.1)"
      },
      "def": {
        "en": "Given pairwise distinct nodes $x_0,\\dots,x_n$ and values $y_i$, find a polynomial $L_n$ of degree $\\le n$ with $L_n(x_i)=y_i$ for all $i$. It has a unique solution.",
        "hu": "Adott páronként különböző $x_0,\\dots,x_n$ alappontok és $y_i$ értékek esetén keressünk egy legfeljebb $n$-edfokú $L_n$ polinomot, amelyre $L_n(x_i)=y_i$ minden $i$-re. Egyetlen megoldása van."
      }
    },
    {
      "term": {
        "en": "Lagrange basis polynomials $l_k$ (6.2)",
        "hu": "Lagrange-alappolinomok $l_k$ (6.2)"
      },
      "def": {
        "en": "$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — degree $n$, with $l_k(x_i)=\\delta_{ki}$ (1 at $x_k$, 0 at the other nodes). They also satisfy $\\sum_k l_k(x)=1$.",
        "hu": "$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — $n$-edfokú, $l_k(x_i)=\\delta_{ki}$ (1 az $x_k$-ban, 0 a többi alappontban). Teljesül $\\sum_k l_k(x)=1$ is."
      }
    },
    {
      "term": {
        "en": "Lagrange polynomial $L_n$ (Thm 6.1)",
        "hu": "Lagrange-polinom $L_n$ (6.1. tétel)"
      },
      "def": {
        "en": "$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ solves the interpolation problem. Uniqueness follows from the Fundamental Theorem of Algebra: a degree-$\\le n$ polynomial with $n+1$ roots is identically zero.",
        "hu": "$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ megoldja az interpolációs feladatot. Az egyértelműség az algebra alaptételéből következik: egy legfeljebb $n$-edfokú, $n+1$ gyökű polinom azonosan nulla."
      }
    },
    {
      "term": {
        "en": "Interpolation vs extrapolation",
        "hu": "Interpoláció vs extrapoláció"
      },
      "def": {
        "en": "Using $L_n(x)$ to approximate $f(x)=y$ between the nodes is **interpolation**; outside the node interval it is **extrapolation**, which is typically far less accurate (Example 6.3).",
        "hu": "Az $L_n(x)$ használata $f(x)=y$ közelítésére az alappontok között **interpoláció**; az alappont-intervallumon kívül **extrapoláció**, amely jellemzően sokkal pontatlanabb (6.3. példa)."
      }
    },
    {
      "term": {
        "en": "Generalized Rolle's theorem (Thm 6.4)",
        "hu": "Általánosított Rolle-tétel (6.4. tétel)"
      },
      "def": {
        "en": "If $f\\in C^n[a,b]$ vanishes at $n+1$ distinct points, then $f^{(n)}(\\xi)=0$ for some $\\xi$. The key tool for the interpolation error formula.",
        "hu": "Ha $f\\in C^n[a,b]$ eltűnik $n+1$ különböző pontban, akkor $f^{(n)}(\\xi)=0$ valamely $\\xi$-re. Az interpolációs hibaformula fő eszköze."
      }
    },
    {
      "term": {
        "en": "Interpolation error formula (Thm 6.5)",
        "hu": "Interpolációs hibaformula (6.5. tétel)"
      },
      "def": {
        "en": "For $f\\in C^{n+1}$, $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ for some $\\xi$ between the nodes and $x$ — the node-product factor explains where the error is largest.",
        "hu": "$f\\in C^{n+1}$ esetén $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ valamely $\\xi$-re az alappontok és $x$ között — az alappont-szorzat tényező mutatja, hol legnagyobb a hiba."
      }
    },
    {
      "term": {
        "en": "Equidistant error bound (Thm 6.6)",
        "hu": "Egyenközű hibakorlát (6.6. tétel)"
      },
      "def": {
        "en": "For equidistant nodes on $[a,b]$, $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$ with $M_{n+1}=\\max|f^{(n+1)}|$.",
        "hu": "$[a,b]$-n egyenközű alappontokra $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$, ahol $M_{n+1}=\\max|f^{(n+1)}|$."
      }
    },
    {
      "term": {
        "en": "Runge phenomenon",
        "hu": "Runge-jelenség"
      },
      "def": {
        "en": "With many equidistant nodes, high-degree interpolation can oscillate wildly near the interval ends (the $M_{n+1}$ factor grows). Remedies: Chebyshev nodes or piecewise (spline) interpolation.",
        "hu": "Sok egyenközű alapponttal a magas fokú interpoláció erősen oszcillálhat az intervallum szélein (az $M_{n+1}$ tényező nő). Megoldás: Csebisev-alappontok vagy szakaszonkénti (spline) interpoláció."
      }
    },
    {
      "term": {
        "en": "Bivariate Lagrange interpolation (6.5)",
        "hu": "Kétváltozós Lagrange-interpoláció (6.5)"
      },
      "def": {
        "en": "On a rectangular grid, $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — a tensor product of 1-D Lagrange bases that matches $z_{ij}=f(x_i,y_j)$ at every grid point.",
        "hu": "Téglalap rácson $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — az 1-D Lagrange-bázisok tenzorszorzata, amely minden rácspontban illeszkedik $z_{ij}=f(x_i,y_j)$-re."
      }
    }
  ],
  newton: [
    {
      "term": {
        "en": "Divided difference",
        "hu": "Osztott differencia"
      },
      "def": {
        "en": "Defined recursively: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, and in general $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$.",
        "hu": "Rekurzívan definiált: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, általában $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$."
      }
    },
    {
      "term": {
        "en": "Explicit formula (Thm 6.10)",
        "hu": "Explicit képlet (6.10. tétel)"
      },
      "def": {
        "en": "$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — a symmetric closed form (proved by induction).",
        "hu": "$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — szimmetrikus zárt alak (indukcióval bizonyítva)."
      }
    },
    {
      "term": {
        "en": "Symmetry / order-independence (Cor 6.11)",
        "hu": "Szimmetria / sorrendfüggetlenség (6.11)"
      },
      "def": {
        "en": "A divided difference does not depend on the order of its nodes — any permutation of $x_0,\\dots,x_n$ gives the same value. (And it depends continuously on the nodes, Cor 6.12.)",
        "hu": "Az osztott differencia nem függ az alappontok sorrendjétől — az $x_0,\\dots,x_n$ bármely permutációja ugyanazt adja. (És folytonosan függ az alappontoktól, 6.12.)"
      }
    },
    {
      "term": {
        "en": "Newton's divided-difference form (6.6)",
        "hu": "Newton-féle osztott differencia alak (6.6)"
      },
      "def": {
        "en": "$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — the *same* unique interpolating polynomial as Lagrange, just in a different basis.",
        "hu": "$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — *ugyanaz* az egyértelmű interpolációs polinom, mint a Lagrange, csak más bázisban."
      }
    },
    {
      "term": {
        "en": "Divided-difference table",
        "hu": "Osztott differencia tábla"
      },
      "def": {
        "en": "A triangular table: each entry is the difference of the two to its left divided by the spread of the relevant nodes. The top diagonal $f[x_0],f[x_0,x_1],\\dots$ gives the Newton coefficients.",
        "hu": "Háromszög tábla: minden elem a tőle balra lévő kettő különbsége, osztva az érintett alappontok távolságával. A felső átló $f[x_0],f[x_0,x_1],\\dots$ adja a Newton-együtthatókat."
      }
    },
    {
      "term": {
        "en": "Incremental updates",
        "hu": "Növekményes frissítés"
      },
      "def": {
        "en": "Adding a new data point only appends one term (one new divided difference) — unlike Lagrange, where every basis polynomial changes. Ideal when nodes arrive one at a time.",
        "hu": "Új adatpont hozzáadása csak egy tagot fűz hozzá (egy új osztott differenciát) — szemben a Lagrange-zsal, ahol minden alappolinom megváltozik. Ideális, ha az alappontok egyenként érkeznek."
      }
    },
    {
      "term": {
        "en": "Confluent divided difference",
        "hu": "Egybeeső osztott differencia"
      },
      "def": {
        "en": "As $x_1\\to x_0$, $f[x_0,x_1]\\to f'(x_0)$, so one defines $f[x_0,x_0]:=f'(x_0)$. Repeated nodes encode derivative data — the basis of Hermite interpolation.",
        "hu": "Ha $x_1\\to x_0$, akkor $f[x_0,x_1]\\to f'(x_0)$, így $f[x_0,x_0]:=f'(x_0)$. Az ismételt alappontok deriváltadatot kódolnak — a Hermite-interpoláció alapja."
      }
    }
  ],
  hermite: [
    {
      "term": {
        "en": "Hermite interpolation problem",
        "hu": "Hermite-interpolációs feladat"
      },
      "def": {
        "en": "Match both values and first derivatives at the nodes: $g(x_i)=f(x_i)$ and $g'(x_i)=f'(x_i)$ for $i=0,\\dots,n$ — $2(n+1)$ conditions, so a unique polynomial of degree $\\le 2n+1$.",
        "hu": "Az alappontokban az értékeket és az első deriváltakat is illesztjük: $g(x_i)=f(x_i)$ és $g'(x_i)=f'(x_i)$, $i=0,\\dots,n$ — $2(n+1)$ feltétel, így egyetlen, legfeljebb $2n+1$-edfokú polinom."
      }
    },
    {
      "term": {
        "en": "Hermite polynomial $H_{2n+1}$ (Thm 6.18)",
        "hu": "Hermite-polinom $H_{2n+1}$ (6.18. tétel)"
      },
      "def": {
        "en": "The unique degree-$\\le(2n+1)$ solution. Geometrically its graph passes through each $(x_i,y_i)$ with prescribed tangent slope $y_i'$. Uniqueness: a nonzero difference would have $2n+2$ roots (each $x_i$ doubled).",
        "hu": "Az egyetlen, legfeljebb $(2n+1)$-edfokú megoldás. Geometriailag a grafikonja minden $(x_i,y_i)$-n átmegy az előírt $y_i'$ érintő-meredekséggel. Egyértelműség: egy nemnulla különbségnek $2n+2$ gyöke lenne (minden $x_i$ kétszeres)."
      }
    },
    {
      "term": {
        "en": "Repeated-node divided differences",
        "hu": "Ismételt alappontú osztott differenciák"
      },
      "def": {
        "en": "Hermite reuses Newton's form with each node listed twice: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, where $f[x_i,x_i]=f'(x_i)$.",
        "hu": "A Hermite a Newton-alakot használja minden alappontot kétszer felsorolva: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, ahol $f[x_i,x_i]=f'(x_i)$."
      }
    },
    {
      "term": {
        "en": "Hermite divided-difference table",
        "hu": "Hermite osztott differencia tábla"
      },
      "def": {
        "en": "Build the divided-difference table with each $x_i$ duplicated; the first-column repeats hold $f(x_i)$ and the first divided difference of a repeated pair is the given derivative $f'(x_i)$. The top diagonal gives the Hermite coefficients.",
        "hu": "Építsd fel az osztott differencia táblát minden $x_i$-t megkettőzve; az első oszlop ismétlései $f(x_i)$-t tartják, és egy ismételt pár első osztott differenciája az adott $f'(x_i)$ derivált. A felső átló adja a Hermite-együtthatókat."
      }
    },
    {
      "term": {
        "en": "Hermite error formula (Thm 6.19)",
        "hu": "Hermite hibaformula (6.19. tétel)"
      },
      "def": {
        "en": "For $f\\in C^{2n+2}$, $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — the node factors are *squared*, reflecting the double matching.",
        "hu": "$f\\in C^{2n+2}$ esetén $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — az alappont-tényezők *négyzeten* vannak, a kettős illesztést tükrözve."
      }
    },
    {
      "term": {
        "en": "Limit of Lagrange interpolation",
        "hu": "A Lagrange-interpoláció határeseteként"
      },
      "def": {
        "en": "$H_{2n+1}$ is the limit of the Lagrange polynomial on $2n+2$ nodes as each extra node $\\tilde x_i\\to x_i$ — the confluent (coalescing-node) case of ordinary interpolation.",
        "hu": "$H_{2n+1}$ a $2n+2$ alappontú Lagrange-polinom határértéke, amikor minden extra $\\tilde x_i\\to x_i$ — a hagyományos interpoláció egybeeső alappontú (konfluens) esete."
      }
    }
  ],
  spline: [
    {
      "term": {
        "en": "Spline function (degree $k$)",
        "hu": "Spline-függvény ($k$-adfokú)"
      },
      "def": {
        "en": "A function $S\\in C^{k-1}[a,b]$ that is a polynomial of degree $\\le k$ on each subinterval $[x_i,x_{i+1}]$. Degrees 1, 2, 3 give linear, quadratic and cubic splines.",
        "hu": "Olyan $S\\in C^{k-1}[a,b]$ függvény, amely minden $[x_i,x_{i+1}]$ részintervallumon legfeljebb $k$-adfokú polinom. Az 1, 2, 3 fok a lineáris, kvadratikus és köbös spline-t adja."
      }
    },
    {
      "term": {
        "en": "Cubic spline — why",
        "hu": "Köbös spline — miért"
      },
      "def": {
        "en": "Cubic splines are $C^2$ (twice continuously differentiable): smooth enough for practice and free of the Runge oscillations of high-degree single-polynomial interpolation.",
        "hu": "A köbös spline $C^2$ (kétszer folytonosan differenciálható): a gyakorlatban elég sima, és mentes a magas fokú egypolinomos interpoláció Runge-oszcillációitól."
      }
    },
    {
      "term": {
        "en": "Continuity conditions (6.10–6.13)",
        "hu": "Folytonossági feltételek (6.10–6.13)"
      },
      "def": {
        "en": "Each piece matches the data ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$) and joins its neighbour smoothly: equal first and second derivatives at every interior node ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$).",
        "hu": "Minden szakasz illeszkedik az adatra ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$), és simán csatlakozik a szomszédjához: minden belső pontban egyenlő első és második derivált ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$)."
      }
    },
    {
      "term": {
        "en": "Natural spline (6.14)",
        "hu": "Természetes spline (6.14)"
      },
      "def": {
        "en": "Closes the system with zero curvature at the ends: $S''(x_0)=S''(x_n)=0$. The natural cubic spline interpolation problem has a unique solution (Thm 6.22).",
        "hu": "A rendszert nulla görbülettel zárja a végeken: $S''(x_0)=S''(x_n)=0$. A természetes köbös spline interpolációs feladatnak egyetlen megoldása van (6.22. tétel)."
      }
    },
    {
      "term": {
        "en": "Clamped spline (6.23)",
        "hu": "Rögzített (clamped) spline (6.23)"
      },
      "def": {
        "en": "Instead of zero end-curvature, prescribe the end slopes $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Usually more accurate than natural when the true end derivatives are known.",
        "hu": "A nulla véggörbület helyett a végmeredekségeket írjuk elő: $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Általában pontosabb a természetesnél, ha a valódi végderiváltak ismertek."
      }
    },
    {
      "term": {
        "en": "Tridiagonal system for $c_i$ (6.22)",
        "hu": "Tridiagonális rendszer a $c_i$-kre (6.22)"
      },
      "def": {
        "en": "Eliminating $b_i,d_i$ leaves a tridiagonal, diagonally dominant system for the second-derivative coefficients $c_i$, solvable in $\\mathcal{O}(n)$ by the Thomas algorithm; then $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ and $b_i$ follow.",
        "hu": "A $b_i,d_i$ kiküszöbölése egy tridiagonális, diagonálisan domináns rendszert hagy a második derivált $c_i$ együtthatókra, amely a Thomas-algoritmussal $\\mathcal{O}(n)$-ben megoldható; majd $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ és $b_i$ adódik."
      }
    }
  ],
}

export const FLASHCARDS: Record<string, Flashcard[]> = {
  lagrange: [
    {"q":{"en":"In the context of interpolation, what are the given pairwise different points $x_0, x_1, \\ldots, x_n$ called?","hu":"Az interpoláció keretében hogyan nevezzük az adott páronként különböző $x_0, x_1, \\ldots, x_n$ pontokat?"},"a":{"en":"Mesh points (or node points).","hu":"Hálópontok (vagy csomópontok)."}},
    {"q":{"en":"The problem of finding a polynomial $L_n$ of degree at most $n$ such that $L_n(x_i) = y_i$ for $i = 0, \\ldots, n$ is known as _____.","hu":"A legfeljebb $n$ fokú $L_n$ polinom megtalálásának problémája úgy, hogy $L_n(x_i) = y_i$ $i = 0, \\ldots, n$ esetén _____."},"a":{"en":"Lagrange interpolation","hu":"Lagrange interpoláció"}},
    {"q":{"en":"What is the maximum degree of a Lagrange interpolating polynomial that fits $n+1$ data points?","hu":"Mekkora a $n+1$ adatpontokra illeszkedő Lagrange interpoláló polinom maximális foka?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"How many distinct solutions exist for a Lagrange interpolation problem with $n+1$ points and a polynomial of degree at most $n$?","hu":"Hány különböző megoldás létezik egy Lagrange-interpolációs feladatra $n+1$ pontokkal és legfeljebb $n$ fokszámú polinomokkal?"},"a":{"en":"Exactly one (the solution is unique).","hu":"Pontosan egy (a megoldás egyedi)."}},
    {"q":{"en":"What is the specific name given to the polynomials $l_0, \\ldots, l_n$ used to construct the Lagrange polynomial?","hu":"Mi a konkrét név a $l_0, \\ldots, l_n$ polinomoknak, amelyeket a Lagrange-polinom megalkotásához használnak?"},"a":{"en":"Lagrange basis polynomials of degree $n$.","hu":"$n$ fokú Lagrange-alapú polinomok."}},
    {"q":{"en":"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k \\ne i$?","hu":"Mekkora a $l_k(x_i)$ Lagrange-bázispolinom értéke, amikor $k \\ne i$?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k = i$?","hu":"Mekkora a $l_k(x_i)$ Lagrange-bázispolinom értéke, amikor $k = i$?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"Using basis polynomials $l_k(x)$, what is the formula for the Lagrange interpolating polynomial $L_n(x)$?","hu":"A $l_k(x)$ bázispolinomokat használva mi a képlete a $L_n(x)$ Lagrange interpolációs polinomnak?"},"a":{"en":"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$","hu":"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$"}},
    {"q":{"en":"In the uniqueness proof for Lagrange interpolation, if $P(x)$ is the difference of two $n$-th degree interpolating polynomials, how many roots must $P(x)$ have?","hu":"A Lagrange-interpoláció egyediségének igazolásában, ha a $P(x)$ két $n$-edik fokú interpolációs polinom különbsége, akkor hány gyökének kell $P(x)$-nek lennie?"},"a":{"en":"$n + 1$ roots.","hu":"$n + 1$ gyökerei."}},
    {"q":{"en":"Which mathematical theorem is invoked to prove that the difference polynomial $P(x)$ in Lagrange interpolation must be identically zero?","hu":"Melyik matematikai tételt hívjuk meg annak bizonyítására, hogy a $P(x)$ különbségpolinomnak a Lagrange-interpolációban azonos nullának kell lennie?"},"a":{"en":"The Fundamental Theorem of Algebra.","hu":"Az algebra alaptétele."}},
    {"q":{"en":"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is outside the interval determined by the mesh points?","hu":"Mi a kifejezés a $f(x)$ függvényérték közelítésére interpoláló polinom segítségével, ha a $x$ kívül esik a hálópontok által meghatározott intervallumon?"},"a":{"en":"Extrapolation","hu":"Extrapoláció"}},
    {"q":{"en":"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is located between two mesh points?","hu":"Mi a kifejezés a $f(x)$ függvényérték közelítésére interpoláló polinom segítségével, ha a $x$ két hálópont között helyezkedik el?"},"a":{"en":"Interpolation","hu":"Interpoláció"}},
    {"q":{"en":"Concept: Rolle's Theorem","hu":"Koncepció: Rolle-tétel"},"a":{"en":"Definition: If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, there exists $\\xi \\in (a,b)$ such that $f'(\\xi) = 0$.","hu":"Definíció: Ha a $f$ folyamatos a $[a,b]$, differenciálható a $(a,b)$ és a $f(a) = f(b)$, akkor létezik $\\xi \\in (a,b)$, így a $f'(\\xi) = 0$."}},
    {"q":{"en":"According to the Generalized Rolle's Theorem, if $f \\in C^n(a,b)$ has $n+1$ roots, what can be said about the $n$-th derivative $f^{(n)}$?","hu":"Az általánosított Rolle-tétel szerint, ha a $f \\in C^n(a,b)$-nek $n+1$ gyökerei vannak, mit mondhatunk a $n$-edik $f^{(n)}$ deriváltról?"},"a":{"en":"There exists at least one point $\\xi$ in the interval spanned by the roots where $f^{(n)}(\\xi) = 0$.","hu":"Létezik legalább egy $\\xi$ pont abban az intervallumban, amelyet a $f^{(n)}(\\xi) = 0$ gyök feszül."}},
    {"q":{"en":"Let $f \\in C^{n+1}(a,b)$. What is the error term formula for $f(x) - L_n(x)$?","hu":"Legyen $f \\in C^{n+1}(a,b)$. Mi a $f(x) - L_n(x)$ hibakifejezési képlete?"},"a":{"en":"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$","hu":"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$"}},
    {"q":{"en":"In the Lagrange interpolation error formula, what does the value $\\xi$ depend on?","hu":"A Lagrange-interpolációs hibaképletben mitől függ a $\\xi$ érték?"},"a":{"en":"The value of $x$ (and the mesh points $x_i$).","hu":"A $x$ (és a $x_i$ hálópontok) értéke."}},
    {"q":{"en":"What does the notation $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ represent in the context of the error term $\\xi$?","hu":"Mit jelent a $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ jelölés a $\\xi$ hibatag kontextusában?"},"a":{"en":"The smallest interval containing $x$ and all mesh points $x_0, \\ldots, x_n$.","hu":"A legkisebb intervallum, amely tartalmazza a $x$-t és az összes $x_0, \\ldots, x_n$ hálópontot."}},
    {"q":{"en":"When the mesh points are equidistant, the formula for $x_i$ is $x_i = x_0 + i \\cdot$ _____.","hu":"Ha a hálópontok egyenlő távolságra vannak, a $x_i$ képlete $x_i = x_0 + i \\cdot$ _____."},"a":{"en":"$h$ (where $h$ is the step size).","hu":"$h$ (ahol a $h$ a lépés mérete)."}},
    {"q":{"en":"What does $M_{n+1}$ represent in the truncation error bound formula?","hu":"Mit jelent a $M_{n+1}$ a csonkítási hiba kötött képletében?"},"a":{"en":"$M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\in [x_0, x_n]\\}$","hu":"$M_{n+1} = \\max\\{|f^{(n+1)}(t)|: t \\in [x_0, x_n]\\}$"}},
    {"q":{"en":"For equidistant points on $[a,b]$, what is the upper bound for the error $|f(x) - L_n(x)|$ in terms of $M_{n+1}$ and the interval length?","hu":"A $[a,b]$ egyenlő távolságú pontjainál mekkora a $|f(x) - L_n(x)|$ hiba felső korlátja a $M_{n+1}$ és az intervallum hosszában?"},"a":{"en":"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$","hu":"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$"}},
    {"q":{"en":"If $x$ is in the interval $(x_k, x_{k+1})$ and the points are equidistant with step $h$, what is the maximum value of $|(x - x_k)(x - x_{k+1})|$?","hu":"Ha a $x$ a $(x_k, x_{k+1})$ intervallumban van, és a pontok egyenlő távolságra vannak a $h$ lépéstől, akkor mi a $|(x - x_k)(x - x_{k+1})|$ maximális értéke?"},"a":{"en":"$\\frac{h^2}{4}$","hu":"$\\frac{h^2}{4}$"}},
    {"q":{"en":"Why do Lagrange polynomials typically fail to approximate $\\cos x$ well outside the interval defined by the mesh points?","hu":"Miért nem sikerül a Lagrange-polinomok általában jóval a hálópontok által meghatározott intervallumon kívül közelíteni a $\\cos x$-t?"},"a":{"en":"The cosine function is bounded, whereas polynomials of degree $n \\ge 1$ are unbounded as $|x| \\to \\infty$.","hu":"A koszinuszfüggvény korlátos, míg a $n \\ge 1$ fokú polinomok korlátlanok, mint $|x| \\to \\infty$."}},
    {"q":{"en":"In bivariate Lagrange interpolation on a rectangular domain, the interpolating function $L_{n,m}(x, y)$ is a _____ summation.","hu":"A kétváltozós Lagrange-interpolációban egy téglalap alakú tartományon a $L_{n,m}(x, y)$ interpolációs függvény egy _____ összegzés."},"a":{"en":"double","hu":"kettős"}},
    {"q":{"en":"Bivariate Lagrange Formula: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____.","hu":"Kétváltozós Lagrange képlet: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____."},"a":{"en":"$l_i(x) \\tilde{l}_j(y)$","hu":"$l_i(x) \\tilde{l}_j(y)$"}},
    {"q":{"en":"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $y$ is fixed, the function becomes a polynomial in $x$ of degree at most _____.","hu":"A $L_{n,m}(x, y)$ kétváltozós Lagrange-interpolációban, ha a $y$ fix, akkor a függvény legfeljebb _____ fokos polinommá válik $x$-ben."},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $x$ is fixed, the function becomes a polynomial in $y$ of degree at most _____.","hu":"A $L_{n,m}(x, y)$ kétváltozós Lagrange-interpolációban, ha a $x$ fix, akkor a függvény legfeljebb _____ fokos polinommá válik $y$-ben."},"a":{"en":"$m$","hu":"$m$"}},
    {"q":{"en":"According to Theorem 6.8, what is the derivative of the function $x \\mapsto f^{(n+1)}(\\xi(x))$ with respect to $x$?","hu":"A 6.8. Tétel szerint mi a $x \\mapsto f^{(n+1)}(\\xi(x))$ függvény deriváltja a $x$ függvényhez képest?"},"a":{"en":"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$","hu":"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$"}},
    {"q":{"en":"Formula: Lagrange Basis Polynomial $l_k(x)$","hu":"Képlet: Lagrange-alapú polinom $l_k(x)$"},"a":{"en":"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$","hu":"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$"}},
    {"q":{"en":"If we use 3 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_2(x)$?","hu":"Ha 3 hálópontot használunk a $\\cos x$ interpolálására $[-\\pi, \\pi]$-re, mekkora a kapott $L_2(x)$ Lagrange-polinom mértéke?"},"a":{"en":"2 (Quadratic).","hu":"2 (Kvadratikus)."}},
    {"q":{"en":"If we use 5 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_4(x)$?","hu":"Ha 5 hálópontot használunk a $\\cos x$ interpolálására $[-\\pi, \\pi]$-re, mekkora a kapott $L_4(x)$ Lagrange-polinom mértéke?"},"a":{"en":"4 (Quartic).","hu":"4 (Quartic)."}},
    {"q":{"en":"What is the error bound for $L_2(x)$ interpolating $\\cos x$ on $[-\\pi, \\pi]$ using mesh points $-\\pi, 0, \\pi$?","hu":"Mekkora a hibahatár a $L_2(x)$ $\\cos x$ interpolálásakor a $[-\\pi, \\pi]$-n a $-\\pi, 0, \\pi$ hálópontok használatával?"},"a":{"en":"$\\approx 2.5839$ (Upper estimate).","hu":"$\\approx 2.5839$ (Felső becslés)."}},
    {"q":{"en":"What happens to the error bound of a Lagrange polynomial as the number of data points $n$ increases, provided $M_{n+1}$ is appropriately bounded?","hu":"Mi történik egy Lagrange-polinom hibahatárával, ha a $n$ adatpontok száma nő, feltéve, hogy a $M_{n+1}$ megfelelően korlátos?"},"a":{"en":"The error bound typically decreases (tends toward zero).","hu":"A hibahatár jellemzően csökken (nulla felé hajlik)."}},
    {"q":{"en":"The points $z_{ij}$ in bivariate interpolation correspond to $f(x_i, y_j)$. What is the condition $L_{n,m}(x_i, y_j)$ must satisfy?","hu":"A kétváltozós interpolációban a $z_{ij}$ pontok megfelelnek a $f(x_i, y_j)$ pontnak. Milyen feltételnek kell megfelelnie a $L_{n,m}(x_i, y_j)$-nek?"},"a":{"en":"$L_{n,m}(x_i, y_j) = z_{ij}$","hu":"$L_{n,m}(x_i, y_j) = z_{ij}$"}},
    {"q":{"en":"If an interpolation problem uses points $x_0 = 0, x_1 = 1, x_2 = 2$, what is the denominator of the basis polynomial $l_1(x)$?","hu":"Ha egy interpolációs feladat $x_0 = 0, x_1 = 1, x_2 = 2$ pontokat használ, mi a nevezője a $l_1(x)$ bázispolinomnak?"},"a":{"en":"$(1-0)(1-2) = -1$","hu":"$(1-0)(1-2) = -1$"}},
    {"q":{"en":"If $L_3(x)$ interpolates four points and we know the fourth derivative of the original function $f$ is zero, what is the interpolation error?","hu":"Ha a $L_3(x)$ négy pontot interpolál, és tudjuk, hogy az eredeti $f$ függvény negyedik deriváltja nulla, mi az interpolációs hiba?"},"a":{"en":"Zero (the interpolation is exact).","hu":"Nulla (az interpoláció pontos)."}},
    {"q":{"en":"In the expression $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$, what is $\\omega(x)$?","hu":"A $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$ kifejezésben mi a $\\omega(x)$?"},"a":{"en":"The nodal polynomial $\\prod_{i=0}^n (x - x_i)$.","hu":"A $\\prod_{i=0}^n (x - x_i)$ csomóponti polinom."}},
    {"q":{"en":"Does the order of the mesh points ($x_0 < x_1 < \\dots < x_n$) affect the existence of the Lagrange polynomial?","hu":"Befolyásolja-e a hálópontok sorrendje ($x_0 < x_1 < \\dots < x_n$) a Lagrange-polinom létezését?"},"a":{"en":"No, as long as the points are pairwise distinct.","hu":"Nem, amíg a pontok páronként elkülönülnek."}},
    {"q":{"en":"How does the degree of a bivariate Lagrange polynomial $L_{2,1}(x, y)$ compare in each variable?","hu":"Hogyan viszonyul a $L_{2,1}(x, y)$ kétváltozós Lagrange-polinom mértéke az egyes változókban?"},"a":{"en":"It is degree 2 in $x$ and degree 1 in $y$.","hu":"Ez a $x$ 2. fokozata és a $y$ 1. fokozata."}},
    {"q":{"en":"What is the term for the set of $l_i(x)$ because any polynomial of degree $n$ can be written as their linear combination?","hu":"Mi a kifejezés a $l_i(x)$ halmazra, mivel bármely $n$ fokú polinom felírható lineáris kombinációjaként?"},"a":{"en":"Basis (specifically the Lagrange Basis).","hu":"Basis (konkrétan a Lagrange Basis)."}},
    {"q":{"en":"What is the sum of all Lagrange basis polynomials $\\sum_{i=0}^n l_i(x)$ for any $x$?","hu":"Mennyi az összes $\\sum_{i=0}^n l_i(x)$ Lagrange-bázispolinom összege bármely $x$ esetén?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"In the construction of $l_k(x)$, why is the term $(x - x_k)$ omitted from the numerator?","hu":"A $l_k(x)$ felépítésénél miért maradt ki a $(x - x_k)$ kifejezés a számlálóból?"},"a":{"en":"To ensure the polynomial has degree $n$ rather than $n+1$ and to avoid a zero value at $x = x_k$.","hu":"Annak biztosítása érdekében, hogy a polinom $n$ foka legyen $n+1$ helyett, és elkerüljük a nulla értéket a $x = x_k$-nél."}},
    {"q":{"en":"In the construction of $l_k(x)$, why is the term $(x_k - x_k)$ omitted from the denominator?","hu":"A $l_k(x)$ felépítésénél miért hagyták ki a nevezőből a $(x_k - x_k)$ kifejezést?"},"a":{"en":"To avoid division by zero.","hu":"A nullával való osztás elkerülése érdekében."}},
    {"q":{"en":"If $f \\in C^2[a,b]$ and $f(x_0)=f(x_1)=f(x_2)=0$, how many zeros does $f''$ have according to Rolle's theorem?","hu":"Ha $f \\in C^2[a,b]$ és $f(x_0)=f(x_1)=f(x_2)=0$, hány nulla van $f''$-nek Rolle tétele szerint?"},"a":{"en":"At least one.","hu":"Legalább egy."}},
    {"q":{"en":"When constructing $L_3(x)$ for points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the contribution of the point $(1, 0)$ to the summation?","hu":"Amikor a $L_3(x)$ $(-1, -2), (1, 0), (2, -2), (3, 2)$ pontokhoz összeállítjuk, hogyan járul hozzá a $(1, 0)$ pont az összegzéshez?"},"a":{"en":"0 (because $y_k = 0$).","hu":"0 (mert $y_k = 0$)."}},
    {"q":{"en":"What is the limit of the error $|f(x) - L_n(x)|$ at any mesh point $x_i$?","hu":"Mi a $|f(x) - L_n(x)|$ hiba határa bármely $x_i$ hálópontban?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"In bivariate interpolation, how many data points are required for an $L_{n,m}$ polynomial?","hu":"Kétváltozós interpolációban hány adatpont szükséges egy $L_{n,m}$ polinomhoz?"},"a":{"en":"$(n+1)(m+1)$ points.","hu":"$(n+1)(m+1)$ pontok."}},
    {"q":{"en":"The error estimate $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ assumes that mesh points are _____.","hu":"A $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ hibabecslés feltételezi, hogy a hálópontok _____."},"a":{"en":"equidistant","hu":"egyenlő távolságra"}},
    {"q":{"en":"How does the step size $h$ relate to the interval $[a,b]$ and number of points $n+1$ in an equidistant mesh?","hu":"Hogyan viszonyul a $h$ lépésméret a $[a,b]$ intervallumhoz és a $n+1$ pontok számához egy egyenlő távolságra lévő hálóban?"},"a":{"en":"$h = \\frac{b-a}{n}$","hu":"$h = \\frac{b-a}{n}$"}},
    {"q":{"en":"What is the requirement for $f$ to apply the Lagrange error formula with an $n$-th degree polynomial?","hu":"Mi szükséges ahhoz, hogy $f$ alkalmazza a Lagrange-hibaképletet $n$-edik fokú polinommal?"},"a":{"en":"$f$ must be $n+1$ times continuously differentiable ($f \\in C^{n+1}$).","hu":"A $f$ $n+1$-szeresnek folyamatosan differenciálhatónak kell lennie ($f \\in C^{n+1}$)."}},
    {"q":{"en":"In the proof of the error theorem, the auxiliary function $g(t)$ is designed to have how many roots?","hu":"A hibatétel bizonyítása során a $g(t)$ segédfüggvényt úgy terveztük, hogy hány gyökével rendelkezzen?"},"a":{"en":"$n + 2$ roots (the $n+1$ mesh points plus the point $x$).","hu":"$n + 2$ gyökerek (a $n+1$ hálópontok plusz a $x$ pont)."}},
    {"q":{"en":"What is the $(n+1)$-th derivative of any polynomial $L_n$ of degree $n$?","hu":"Mi a $(n+1)$-edik deriváltja bármely $n$ fokú $L_n$ polinomnak?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"If $L_3(x) = x^3 - 3x^2 + 2$, what is the value of $L_3(1)$?","hu":"Ha $L_3(x) = x^3 - 3x^2 + 2$, mennyi a $L_3(1)$ értéke?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"What is the name of the constant $h$ in equidistant interpolation?","hu":"Mi a neve a $h$ konstansnak egyenlő távolságú interpolációban?"},"a":{"en":"Step size (or spacing).","hu":"Lépésméret (vagy távolság)."}},
    {"q":{"en":"For a function $f(x)$, if we increase the number of points $n$ but $M_{n+1}$ grows very rapidly, does the interpolation error necessarily decrease?","hu":"Egy $f(x)$ függvénynél, ha növeljük a $n$ pontok számát, de a $M_{n+1}$ nagyon gyorsan növekszik, akkor szükségszerűen csökken az interpolációs hiba?"},"a":{"en":"No (this can lead to Runge's phenomenon, though not explicitly named in the text).","hu":"Nem (ez vezethet Runge jelenségéhez, bár a szövegben nincs kifejezetten megnevezve)."}},
    {"q":{"en":"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $x$?","hu":"Mekkora a $l_i(x)\\tilde{l}_j(y)$ kétváltozós alappolinomszorzat foka $x$-hez viszonyítva?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $y$?","hu":"Mekkora a $l_i(x)\\tilde{l}_j(y)$ kétváltozós alappolinomszorzat foka $y$-hez viszonyítva?"},"a":{"en":"$m$","hu":"$m$"}},
    {"q":{"en":"Term: Lagrange-féle alappolinom","hu":"Fogalom: Lagrange-féle alappolinom"},"a":{"en":"Definition: Hungarian term for Lagrange basis polynomial.","hu":"Definíció: magyar kifejezés a Lagrange-alapú polinomra."}},
    {"q":{"en":"Term: Ekvidisztáns osztópontok","hu":"Fogalom: Ekvidisztáns osztópontok"},"a":{"en":"Definition: Hungarian term for equidistant mesh points.","hu":"Definíció: Magyar kifejezés egyenlő távolságra lévő hálópontokra."}},
    {"q":{"en":"In Example 6.9, the resulting polynomial is $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. What is its degree in $y$?","hu":"A 6.9. példában a kapott polinom $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. Milyen végzettsége van $y$-ben?"},"a":{"en":"1 (First order).","hu":"1 (Első rendelés)."}},
    {"q":{"en":"The error bound for equidistant interpolation contains the term $n!$ in its derivation. Where does this $n!$ originate?","hu":"Az egyenlő távolságú interpolációhoz kötött hiba a $n!$ kifejezést tartalmazza a származékában. Honnan származik ez a $n!$?"},"a":{"en":"From the product of distances between equidistant points, e.g., $(k+1)!(n-k)! \\le n!$.","hu":"Az egyenlő távolságra lévő pontok közötti távolságok szorzatából, pl. $(k+1)!(n-k)! \\le n!$."}}
  ],
  newton: [
    {"q":{"en":"Given a function $f$, what is the definition of the zeroth divided difference $f[x_0]$?","hu":"Adott egy $f$ függvény, mi a $f[x_0]$ nulladik osztott különbség definíciója?"},"a":{"en":"$f[x_0] := f(x_0)$","hu":"$f[x_0]:= f(x_0)$"}},
    {"q":{"en":"What is the formula for the first divided difference $f[x_0, x_1]$ relative to mesh points $x_0$ and $x_1$?","hu":"Mi a képlete a $f[x_0, x_1]$ első osztott különbségnek a $x_0$ és $x_1$ hálópontokhoz viszonyítva?"},"a":{"en":"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$","hu":"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"}},
    {"q":{"en":"How is the $n$-th divided difference $f[x_0, x_1, \\ldots, x_n]$ defined recursively?","hu":"Hogyan definiálható rekurzívan a $n$-edik osztott különbség $f[x_0, x_1, \\ldots, x_n]$?"},"a":{"en":"$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$","hu":"$f[x_0, x_1, \\ldots, x_n]:= \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$"}},
    {"q":{"en":"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the first term of the numerator?","hu":"A $f[x_0, x_1, \\ldots, x_n]$ rekurzív definíciójában melyik hálópontot hagyjuk ki a számláló első tagjából?"},"a":{"en":"$x_0$","hu":"$x_0$"}},
    {"q":{"en":"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the second term of the numerator?","hu":"A $f[x_0, x_1, \\ldots, x_n]$ rekurzív definíciójában melyik hálópontot hagyjuk ki a számláló második tagjából?"},"a":{"en":"$x_n$","hu":"$x_n$"}},
    {"q":{"en":"What is the denominator in the recursive definition of an $n$-th order divided difference?","hu":"Mi a nevező a $n$-edrendű osztott különbség rekurzív definíciójában?"},"a":{"en":"$x_n - x_0$","hu":"$x_n - x_0$"}},
    {"q":{"en":"What condition must mesh points $x_i$ satisfy for the standard divided difference definition to be valid?","hu":"Milyen feltételnek kell megfelelnie a $x_i$ hálópontoknak ahhoz, hogy a szabványos osztott különbség definíció érvényes legyen?"},"a":{"en":"They must be pairwise different.","hu":"Páronként eltérőnek kell lenniük."}},
    {"q":{"en":"Does the definition of divided differences require that mesh points be ordered increasingly?","hu":"Az osztott különbségek meghatározása megköveteli-e a hálópontok növekvő sorrendjét?"},"a":{"en":"No, mesh points do not have to be ordered increasingly.","hu":"Nem, nem kell egyre gyakrabban rendelni a hálópontokat."}},
    {"q":{"en":"According to Theorem 6.10, what is the explicit summation formula for $f[x_0, x_1, \\ldots, x_n]$?","hu":"A 6.10. Tétel szerint mi a $f[x_0, x_1, \\ldots, x_n]$ explicit összegzési képlete?"},"a":{"en":"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$","hu":"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$"}},
    {"q":{"en":"In the explicit formula for $f[x_0, x_1, \\ldots, x_n]$, what is the value of the denominator's 'empty product' when $n = 0$?","hu":"A $f[x_0, x_1, \\ldots, x_n]$ kifejezett képletében mekkora a nevező „üres termékének” az értéke, amikor $n = 0$?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"What proof technique is used to demonstrate the validity of the explicit formula for divided differences?","hu":"Milyen bizonyítási technikát alkalmaznak az osztott különbségekre vonatkozó explicit képlet érvényességének bemutatására?"},"a":{"en":"Mathematical induction with respect to $n$.","hu":"Matematikai indukció a $n$-hez képest."}},
    {"q":{"en":"How does changing the order of mesh points affect the value of a divided difference?","hu":"Hogyan befolyásolja a hálópontok sorrendjének megváltoztatása az osztott különbség értékét?"},"a":{"en":"The value remains unchanged; divided differences are independent of the order of mesh points.","hu":"Az érték változatlan marad; az osztott különbségek függetlenek a hálópontok sorrendjétől."}},
    {"q":{"en":"Under what condition on function $f$ do divided differences depend continuously on the mesh points?","hu":"A $f$ függvényen milyen feltételek mellett függenek folyamatosan a megosztott különbségek a hálópontoktól?"},"a":{"en":"$f$ must be continuous.","hu":"A $f$-nek folyamatosnak kell lennie."}},
    {"q":{"en":"What is the limit of the first divided difference $f[x_0, x_1]$ as $x_1$ approaches $x_0$?","hu":"Mi a határa az első megosztott $f[x_0, x_1]$ különbségnek, amikor a $x_1$ megközelíti a $x_0$-t?"},"a":{"en":"$f'(x_0)$","hu":"$f'(x_0)$"}},
    {"q":{"en":"How is the first divided difference relative to equal mesh points, $f[x_0, x_0]$, defined?","hu":"Hogyan definiálható a $f[x_0, x_0]$ egyenlő hálópontokhoz viszonyított első osztott különbség?"},"a":{"en":"$f[x_0, x_0] := f'(x_0)$","hu":"$f[x_0, x_0]:= f'(x_0)$"}},
    {"q":{"en":"Why is the definition $f[x_0, x_0] = f'(x_0)$ used for differentiable functions?","hu":"Miért használják a $f[x_0, x_0] = f'(x_0)$ definíciót differenciálható függvényekhez?"},"a":{"en":"To extend the function $x_1 \\mapsto f[x_0, x_1]$ continuously to the case where $x_1 = x_0$.","hu":"A $x_1 \\mapsto f[x_0, x_1]$ funkció folyamatos kiterjesztése arra az esetre, ahol a $x_1 = x_0$."}},
    {"q":{"en":"What is the value of $f[x_0, x_1, x_2, x_3]$ for $f(x) = x^2$ and mesh points $x_i = i$?","hu":"Mennyi a $f[x_0, x_1, x_2, x_3]$ értéke a $f(x) = x^2$ és a $x_i = i$ hálópontokhoz?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"For $f(x) = \\sin x$ and $x_0 = 0$, what is the value of the divided difference $f[x_0, x_0]$?","hu":"$f(x) = \\sin x$ és $x_0 = 0$ esetén mekkora a $f[x_0, x_0]$ osztott különbség értéke?"},"a":{"en":"1 (since $\\sin'(0) = \\cos(0) = 1$)","hu":"1 ($\\sin'(0) = \\cos(0) = 1$ óta)"}},
    {"q":{"en":"If $f \\in C^1[a,b]$, what does the mean value property state regarding $f[x_0, x_1]$?","hu":"Ha $f \\in C^1[a,b]$, mit jelent az átlagos érték tulajdonság a $f[x_0, x_1]$ esetében?"},"a":{"en":"There exists $\\xi$ in the interval between $x_0$ and $x_1$ such that $f[x_0, x_1] = f'(\\xi)$.","hu":"A $x_0$ és a $x_1$ közötti intervallumban létezik $\\xi$, így a $f[x_0, x_1] = f'(\\xi)$."}},
    {"q":{"en":"In the Newton form polynomial $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$, what is the coefficient $a_0$?","hu":"Mekkora a $a_0$ együttható a $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$ Newton-polinomban?"},"a":{"en":"$a_0 = P[x_0]$","hu":"$a_0 = P[x_0]$"}},
    {"q":{"en":"In the Newton form polynomial, what is the coefficient $a_1$ representing?","hu":"Mit jelent a Newton-alakú polinomban a $a_1$ együttható?"},"a":{"en":"$a_1 = P[x_0, x_1]$","hu":"$a_1 = P[x_0, x_1]$"}},
    {"q":{"en":"In the Newton form polynomial, what is the coefficient $a_k$ representing?","hu":"Mit jelent a Newton-alakú polinomban a $a_k$ együttható?"},"a":{"en":"$a_k = P[x_0, x_1, \\ldots, x_k]$","hu":"$a_k = P[x_0, x_1, \\ldots, x_k]$"}},
    {"q":{"en":"From a numerical standpoint, is the recursive definition or the explicit summation formula more practical for computation?","hu":"Numerikus szempontból a rekurzív definíció vagy az explicit összegzési képlet praktikusabb a számításhoz?"},"a":{"en":"The recursive definition is more practical.","hu":"A rekurzív definíció praktikusabb."}},
    {"q":{"en":"Why is the explicit formula for divided differences theoretically important if it is numerically impractical?","hu":"Miért fontos elméletileg az osztott különbségek kifejezett képlete, ha számszerűen nem praktikus?"},"a":{"en":"It proves that the value is independent of point order and depends continuously on the points.","hu":"Azt bizonyítja, hogy az érték független a pontsorrendtől és folyamatosan függ a pontoktól."}},
    {"q":{"en":"The first divided difference $f[x_0, x_1]$ can be interpreted as the _____ quotient of $f$ at those points.","hu":"Az első osztott különbség $f[x_0, x_1]$ a $f$ _____ hányadosaként értelmezhető ezeken a pontokon."},"a":{"en":"difference","hu":"különbség"}},
    {"q":{"en":"What is the result of a first-order divided difference if $f(x)$ is a constant function?","hu":"Mi az eredménye egy elsőrendű osztott különbségnek, ha a $f(x)$ konstans függvény?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"Term: Mesh points","hu":"Fogalom: Hálópontok"},"a":{"en":"Definition: The specific points $x_0, x_1, \\ldots, x_n$ in the domain of $f$ used to compute divided differences.","hu":"Definíció: A $f$ tartományában lévő $x_0, x_1, \\ldots, x_n$ specifikus pontok az osztott különbségek kiszámítására szolgálnak."}},
    {"q":{"en":"How many lower-order divided differences are subtracted in the numerator of the recursive step for an $n$-th order divided difference?","hu":"Hány alacsonyabb rendű osztott különbséget vonunk le a rekurzív lépés számlálójából egy $n$-edik rendű osztott különbséghez?"},"a":{"en":"Two ($f[x_1, \\ldots, x_n]$ and $f[x_0, \\ldots, x_{n-1}]$)","hu":"Kettő ($f[x_1, \\ldots, x_n]$ és $f[x_0, \\ldots, x_{n-1}]$)"}},
    {"q":{"en":"In the context of divided differences, what does the notation $f[x_0, x_1, \\ldots, x_n]$ represent?","hu":"A megosztott különbségek összefüggésében mit jelent a $f[x_0, x_1, \\ldots, x_n]$ jelölés?"},"a":{"en":"The $n$-th order divided difference of function $f$ at the points $x_0, \\ldots, x_n$.","hu":"A $n$-edik sorrendű $f$ függvény különbsége a $x_0, \\ldots, x_n$ pontokban osztott."}},
    {"q":{"en":"If $f$ is a linear function, what is the value of the second divided difference $f[x_0, x_1, x_2]$?","hu":"Ha a $f$ egy lineáris függvény, mekkora a $f[x_0, x_1, x_2]$ második osztott különbség értéke?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"In the induction proof for Theorem 6.10, the step from $n$ to $n+1$ involves substituting the _____ into the recursive definition.","hu":"A 6.10. Tétel indukciós bizonyításában a $n$-től a $n+1$-ig tartó lépés magában foglalja a _____ behelyettesítését a rekurzív definícióba."},"a":{"en":"inductive hypothesis","hu":"induktív hipotézis"}},
    {"q":{"en":"What is the relationship between $f[x_0, x_1]$ and $f[x_1, x_0]$?","hu":"Mi a kapcsolat a $f[x_0, x_1]$ és a $f[x_1, x_0]$ között?"},"a":{"en":"They are equal ($f[x_0, x_1] = f[x_1, x_0]$).","hu":"Egyenlőek ($f[x_0, x_1] = f[x_1, x_0]$)."}},
    {"q":{"en":"How many mesh points are involved in a third-order divided difference calculation?","hu":"Hány hálópont vesz részt egy harmadrendű osztott különbség számításban?"},"a":{"en":"Four ($x_0, x_1, x_2, x_3$)","hu":"Négy ($x_0, x_1, x_2, x_3$)"}},
    {"q":{"en":"For a differentiable function, $f[x_0, x_1]$ is a continuous function of $x_1$ except possibly at _____.","hu":"A differenciálható funkcióhoz a $f[x_0, x_1]$ a $x_1$ folyamatos függvénye, kivéve esetleg _____."},"a":{"en":"$x_1 = x_0$","hu":"$x_1 = x_0$"}},
    {"q":{"en":"What is the first divided difference of $f(x) = x$ for any distinct $x_0, x_1$?","hu":"Mi a $f(x) = x$ első megosztott különbsége bármely különálló $x_0, x_1$ között?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"In the formula $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$, what is $D_i$?","hu":"A $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$ képletben mi a $D_i$?"},"a":{"en":"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$","hu":"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$"}},
    {"q":{"en":"True or False: The recursive definition of divided differences is preferred in numerics because it uses fewer calculations than the explicit formula.","hu":"Igaz vagy hamis: Az osztott különbségek rekurzív definícióját részesítik előnyben a numerákban, mert kevesebb számítást használ, mint az explicit képlet."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"What is the denominator of the term involving $f(x_0)$ in the explicit summation formula for $f[x_0, x_1, x_2]$?","hu":"Mi a nevezője a $f(x_0)$ kifejezést magában foglaló kifejezésnek a $f[x_0, x_1, x_2]$ explicit összegzési képletében?"},"a":{"en":"$(x_0 - x_1)(x_0 - x_2)$","hu":"$(x_0 - x_1)(x_0 - x_2)$"}},
    {"q":{"en":"The formula $f[x_0, x_1] = f'(\\xi)$ is essentially a restatement of which calculus theorem?","hu":"A $f[x_0, x_1] = f'(\\xi)$ képlet lényegében melyik számítási tétel újrafogalmazása?"},"a":{"en":"The Mean Value Theorem","hu":"Az átlagérték tétel"}},
    {"q":{"en":"In the expression $a_3(x - x_0)(x - x_1)(x - x_2)$ from Exercise 3, what is $a_3$?","hu":"A 3. gyakorlat $a_3(x - x_0)(x - x_1)(x - x_2)$ kifejezésében mi az a $a_3$?"},"a":{"en":"$P[x_0, x_1, x_2, x_3]$","hu":"$P[x_0, x_1, x_2, x_3]$"}},
    {"q":{"en":"If mesh points are shifted by a constant, does the value of the divided difference of a polynomial change?","hu":"Ha a hálópontokat egy konstans eltolja, megváltozik-e egy polinom osztott különbségének értéke?"},"a":{"en":"No, because it depends on the differences between points (and function values).","hu":"Nem, mert ez a pontok (és a függvényértékek) közötti különbségektől függ."}},
    {"q":{"en":"What is the value of the first divided difference $f[x_0, x_1]$ if $f(x_1) = f(x_0)$?","hu":"Mennyi az első osztott különbség $f[x_0, x_1]$ értéke, ha $f(x_1) = f(x_0)$?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"The notation $f[x_1, x_2, \\ldots, x_n]$ omits the point $x_0$ and represents a divided difference of order _____.","hu":"A $f[x_1, x_2, \\ldots, x_n]$ jelölés elhagyja a $x_0$ pontot, és _____ sorrendű osztott különbséget jelent."},"a":{"en":"$n-1$","hu":"$n-1$"}},
    {"q":{"en":"In the explicit formula, the denominator for a specific $f(x_i)$ is a product of how many linear factors $(x_i - x_j)$?","hu":"Az explicit képletben egy adott $f(x_i)$ nevezője hány lineáris tényező szorzata $(x_i - x_j)$?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"The continuity of divided differences with respect to mesh points (Corollary 6.12) is a direct consequence of the _____ formula.","hu":"A hálópontokra vonatkozó osztott különbségek folytonossága (6.12. következtetés) a _____ képlet egyenes következménye."},"a":{"en":"explicit (summation)","hu":"explicit (összegzés)"}},
    {"q":{"en":"In Exercise 1b, $x_i = 0.2i$. What is the value of $x_2$?","hu":"Az 1b gyakorlatban $x_i = 0.2i$. Mennyi a $x_2$ értéke?"},"a":{"en":"0.4","hu":"0.4"}},
    {"q":{"en":"If $x_0 = 1$ and $x_1 = 3$, and $f(x) = x^3$, what is $f[1, 3]$?","hu":"Ha $x_0 = 1$ és $x_1 = 3$ és $f(x) = x^3$, mi az a $f[1, 3]$?"},"a":{"en":"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$","hu":"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$"}},
    {"q":{"en":"How does the complexity of the explicit summation formula for $f[x_0, \\ldots, x_n]$ grow relative to $n$?","hu":"Hogyan nő a $f[x_0, \\ldots, x_n]$ explicit összegzési képletének összetettsége a $n$-hez képest?"},"a":{"en":"It requires computing a product of $n$ terms for each of the $n+1$ summands.","hu":"A $n$ kifejezések szorzatának kiszámítását igényli minden egyes $n+1$ összegzőhöz."}},
    {"q":{"en":"Does Corollary 6.11 imply that $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?","hu":"A 6.11 következtetés azt jelenti, hogy a $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?"},"a":{"en":"Yes, because the order of mesh points does not matter.","hu":"Igen, mert a hálópontok sorrendje nem számít."}},
    {"q":{"en":"In the proof of Theorem 6.10, what algebraic step is performed on the sum $\\sum_{i=1}^n$?","hu":"A 6.10. Tétel bizonyítása során milyen algebrai lépést hajtunk végre a $\\sum_{i=1}^n$ összegen?"},"a":{"en":"Factoring out terms to combine the two summations using a common denominator $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$.","hu":"A kifejezések faktorálása a két összegzés kombinálásához a $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$ közös nevező használatával."}},
    {"q":{"en":"What is the main disadvantage of the standard Lagrange interpolation formula when adding a new mesh point?","hu":"Mi a fő hátránya a szabványos Lagrange interpolációs képletnek új hálópont hozzáadásakor?"},"a":{"en":"The entire formula must be recomputed from scratch.","hu":"A teljes képletet a semmiből kell újraszámolni."}},
    {"q":{"en":"How is the Newton form of the Lagrange polynomial superior to the standard form regarding new data points?","hu":"Mennyiben jobb a Lagrange-polinom Newton-formája a szabványos alaknál az új adatpontok tekintetében?"},"a":{"en":"It allows adding a new mesh point by simply appending a correction term to the existing formula.","hu":"Lehetővé teszi új hálópont hozzáadását egy korrekciós tag hozzáfűzésével a meglévő képlethez."}},
    {"q":{"en":"In the Newton form derivation, $L_0(x)$ is defined as which constant function?","hu":"A Newton-forma levezetésében a $L_0(x)$ melyik állandó függvényként van definiálva?"},"a":{"en":"$f(x_0)$","hu":"$f(x_0)$"}},
    {"q":{"en":"In the derivation of the Newton form, what is the maximum possible degree of the polynomial difference $L_i(x) - L_{i-1}(x)$?","hu":"A Newton-forma levezetésében mekkora lehet a $L_i(x) - L_{i-1}(x)$ polinomkülönbség maximális mértéke?"},"a":{"en":"$i$","hu":"$i$"}},
    {"q":{"en":"Which set of points serves as roots for the polynomial difference $L_i(x) - L_{i-1}(x)$?","hu":"Melyik ponthalmaz szolgál a $L_i(x) - L_{i-1}(x)$ polinomiális különbség gyökjéül?"},"a":{"en":"$x_0, x_1, \\dots, x_{i-1}$","hu":"$x_0, x_1, \\dots, x_{i-1}$"}},
    {"q":{"en":"According to the Fundamental Theorem of Algebra, $L_i(x) - L_{i-1}(x)$ can be factored into $a_i$ multiplied by which product?","hu":"Az algebra alaptétele szerint a $L_i(x) - L_{i-1}(x)$ beszámítható a $a_i$ szorzatba, melyik szorzattal?"},"a":{"en":"$\\prod_{j=0}^{i-1} (x - x_j)$","hu":"$\\prod_{j=0}^{i-1} (x - x_j)$"}},
    {"q":{"en":"What mathematical term is used for the coefficients $a_i$ in the Newton form of the interpolating polynomial?","hu":"Milyen matematikai kifejezést használunk a $a_i$ együtthatókra az interpoláló polinom Newton alakjában?"},"a":{"en":"Divided differences","hu":"Megosztott különbségek"}},
    {"q":{"en":"Write the general Newton form of the $n$-th degree Lagrange interpolating polynomial $L_n(x)$.","hu":"Írja fel a $n$-edik fokú Lagrange interpoláló polinom általános Newton alakját, a $L_n(x)$!"},"a":{"en":"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$","hu":"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$"}},
    {"q":{"en":"What is the correction term added to $L_n(x)$ to obtain $L_{n+1}(x)$ in the Newton form?","hu":"Milyen korrekciós tagot adunk hozzá a $L_n(x)$-hez, hogy megkapjuk a $L_{n+1}(x)$-t Newton formában?"},"a":{"en":"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$","hu":"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$"}},
    {"q":{"en":"Which efficient numerical method is used to evaluate the Newton form of the interpolating polynomial?","hu":"Melyik hatékony numerikus módszerrel értékeljük ki az interpoláló polinom Newton alakját?"},"a":{"en":"Horner's method","hu":"Horner módszere"}},
    {"q":{"en":"If the $n$-th order divided difference $f[x_0, x_1, \\dots, x_n]$ is non-zero, what is the degree of the Newton polynomial?","hu":"Ha a $n$-edik rendű osztott különbség $f[x_0, x_1, \\dots, x_n]$ nem nulla, mekkora a Newton-polinom foka?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"In a divided difference table used for manual calculation, what do the first and second columns represent?","hu":"A kézi számításhoz használt osztott különbség táblázatban mit jelent az első és a második oszlop?"},"a":{"en":"The mesh points $x_i$ and the function values $f(x_i)$.","hu":"A $x_i$ hálópontok és a $f(x_i)$ függvényértékek."}},
    {"q":{"en":"Where are the coefficients for the Newton polynomial located in a standard triangular divided difference table?","hu":"Hol vannak a Newton-polinom együtthatói egy szabványos háromszög osztott különbségtáblázatban?"},"a":{"en":"Along the top diagonal of the table.","hu":"Az asztal felső átlója mentén."}},
    {"q":{"en":"What is the recursive formula for the $k$-th order divided difference $f[x_0, \\dots, x_k]$?","hu":"Mi a rekurzív képlete a $k$-edik sorrendű osztott különbségnek $f[x_0, \\dots, x_k]$?"},"a":{"en":"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$","hu":"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$"}},
    {"q":{"en":"Formula: First-order divided difference $f[x_0, x_1]$?","hu":"Képlet: Elsőrendű osztott különbség $f[x_0, x_1]$?"},"a":{"en":"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$","hu":"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"}},
    {"q":{"en":"In the error theorem for the Newton form, what is the expression for the truncation error $f(x) - L_n(x)$?","hu":"A Newton alak hibatételében mi a $f(x) - L_n(x)$ csonkítási hiba kifejezése?"},"a":{"en":"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$","hu":"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$"}},
    {"q":{"en":"What is the relationship between the $n$-th order divided difference $f[x_0, \\dots, x_n]$ and the $n$-th derivative of $f$?","hu":"Mi a kapcsolat a $n$-edik sorrendű osztott különbség $f[x_0, \\dots, x_n]$ és a $f$ $n$-edik deriváltja között?"},"a":{"en":"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ for some $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$.","hu":"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ néhány $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$-hez."}},
    {"q":{"en":"If $P$ is a polynomial of degree $n$, what is the value of the divided difference $P[x_0, \\dots, x_m]$ for any $m > n$?","hu":"Ha a $P$ egy $n$ fokú polinom, mekkora a $P[x_0, \\dots, x_m]$ osztott különbség értéke bármely $m > n$ esetén?"},"a":{"en":"$0$","hu":"$0$"}},
    {"q":{"en":"For a polynomial $f(x) = c_0 + c_1 x + \\dots + c_n x^n$, which divided difference equals the leading coefficient $c_n$?","hu":"$f(x) = c_0 + c_1 x + \\dots + c_n x^n$ polinom esetén melyik osztott különbség egyenlő a $c_n$ vezető együtthatóval?"},"a":{"en":"$f[x_0, x_1, \\dots, x_n]$","hu":"$f[x_0, x_1, \\dots, x_n]$"}},
    {"q":{"en":"What happens to the divided difference $f[x_0, x_1, \\dots, x_n]$ as all mesh points $x_i$ approach a single point $x_0$?","hu":"Mi történik a $f[x_0, x_1, \\dots, x_n]$ osztott különbséggel, amikor az összes $x_i$ hálópont egy $x_0$ ponthoz közelít?"},"a":{"en":"It converges to $\\frac{f^{(n)}(x_0)}{n!}$.","hu":"$\\frac{f^{(n)}(x_0)}{n!}$-hez konvergál."}},
    {"q":{"en":"How is the second-order confluent divided difference $f[x_0, x_0, x_1]$ defined?","hu":"Hogyan definiálható a $f[x_0, x_0, x_1]$ másodrendű konfluens osztott különbség?"},"a":{"en":"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$","hu":"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$"}},
    {"q":{"en":"What is the value of the confluent divided difference $f[x_0, x_0, x_0]$ in terms of derivatives?","hu":"Mekkora a $f[x_0, x_0, x_0]$ konfluens osztott különbség értéke a származékokban?"},"a":{"en":"$\\frac{f''(x_0)}{2}$","hu":"$\\frac{f''(x_0)}{2}$"}},
    {"q":{"en":"Using the data points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the first-order divided difference $f[-1, 1]$?","hu":"A $(-1, -2), (1, 0), (2, -2), (3, 2)$ adatpontokat használva mekkora a $f[-1, 1]$ elsőrendű osztott különbség?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"Given mesh points $(-1, 1, 2, 3)$ and function values $(-2, 0, -2, 2)$, what is the value of the Newton polynomial $L_3(0)$?","hu":"Adott $(-1, 1, 2, 3)$ hálópontok és $(-2, 0, -2, 2)$ függvényértékek, mekkora a $L_3(0)$ Newton-polinom értéke?"},"a":{"en":"$2$","hu":"$2$"}},
    {"q":{"en":"Given data $(-1, -3), (1, 1), (2, 3), (3, 29)$, find the third-order divided difference $f[-1, 1, 2, 3]$.","hu":"A $(-1, -3), (1, 1), (2, 3), (3, 29)$ adatok alapján keresse meg a harmadrendű osztott különbséget $f[-1, 1, 2, 3]$."},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"In Example 6.15, what is the Newton form of $L_3(x)$ for the data points starting at $(-1, -3)$ and ending at $(3, 29)$?","hu":"A 6.15. példában mi a $L_3(x)$ Newton alakja a $(-1, -3)$-től kezdődő és a $(3, 29)$-re végződő adatpontokhoz?"},"a":{"en":"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$","hu":"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$"}},
    {"q":{"en":"How many arithmetic operations are generally required to evaluate a Newton polynomial using Horner's method compared to the standard Lagrange form?","hu":"Általában hány aritmetikai műveletre van szükség egy Newton-polinom Horner-módszerrel történő kiértékeléséhez a standard Lagrange-formához képest?"},"a":{"en":"Significantly fewer, as it avoids repeated products and summations.","hu":"Lényegesen kevesebb, mivel elkerüli az ismételt szorzatokat és összegzéseket."}},
    {"q":{"en":"What property of divided differences ensures that $f[x_0, x_1] = f[x_1, x_0]$?","hu":"A megosztott különbségek milyen tulajdonsága biztosítja, hogy a $f[x_0, x_1] = f[x_1, x_0]$?"},"a":{"en":"Symmetry (divided differences are independent of the order of the points).","hu":"Szimmetria (az elosztott különbségek függetlenek a pontok sorrendjétől)."}},
    {"q":{"en":"In the process of proving the truncation error theorem, why is $x$ added to the set of mesh points?","hu":"A csonkolási hiba tételének bizonyítása során miért kerül $x$ a hálópontok halmazába?"},"a":{"en":"To construct a higher-degree interpolating polynomial $L_{n+1}(t)$ that equals $f(x)$ at $t=x$.","hu":"Magasabb fokú interpolációs $L_{n+1}(t)$ polinom létrehozása, amely megegyezik a $f(x)$ $t=x$-vel."}},
    {"q":{"en":"What is the primary utility of the divided difference form of the truncation error in theoretical analysis?","hu":"Mi a csonkolási hiba osztott differenciaformájának elsődleges haszna az elméleti elemzésben?"},"a":{"en":"It provides a direct link between divided differences and derivatives through the Mean Value Theorem.","hu":"Közvetlen kapcsolatot biztosít a megosztott különbségek és a deriváltok között az átlagérték tételen keresztül."}},
    {"q":{"en":"In Algorithm 6.13, why are only specific divided differences stored by the end of the execution?","hu":"A 6.13-as algoritmusban miért csak meghatározott osztott különbségek tárolódnak a végrehajtás végére?"},"a":{"en":"To save memory by only keeping the coefficients necessary for the Newton polynomial.","hu":"Memória megtakarítása azáltal, hogy csak a Newton-polinomhoz szükséges együtthatókat tartjuk meg."}},
    {"q":{"en":"What is the zeroth-order divided difference $f[x_i]$ equivalent to?","hu":"Minek felel meg a $f[x_i]$ nulladrendű osztott különbség?"},"a":{"en":"$f(x_i)$","hu":"$f(x_i)$"}},
    {"q":{"en":"How is the denominator determined for a $k$-th order divided difference in a manual table?","hu":"Hogyan határozható meg a nevező egy $k$-edik sorrendű osztott különbséghez egy kézi táblázatban?"},"a":{"en":"It is the difference between the last mesh point and the first mesh point involved in that specific difference ($x_k - x_0$).","hu":"Ez az utolsó hálópont és az adott különbségben érintett első hálópont közötti különbség ($x_k - x_0$)."}},
    {"q":{"en":"If $L_3(x) = x^3 - 3x^2 + 2$, what is the coefficient $f[x_0, x_1, x_2, x_3]$ for any four distinct points?","hu":"Ha $L_3(x) = x^3 - 3x^2 + 2$, akkor mekkora a $f[x_0, x_1, x_2, x_3]$ együttható négy különálló pontra?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"Under what condition is the divided difference $f[x_0, x_1, \\dots, x_n, x]$ practically calculable for error estimation?","hu":"Milyen feltétel mellett gyakorlatilag kiszámítható a $f[x_0, x_1, \\dots, x_n, x]$ osztott különbség a hibabecsléshez?"},"a":{"en":"Only when the exact function value $f(x)$ is already known.","hu":"Csak akkor, ha a $f(x)$ pontos funkcióérték már ismert."}},
    {"q":{"en":"What does the expression $\\prod_{k=0}^{i-1} (x - x_k)$ represent in the Newton form?","hu":"Mit jelent a $\\prod_{k=0}^{i-1} (x - x_k)$ kifejezés Newton alakban?"},"a":{"en":"The basis polynomials of the Newton form.","hu":"A Newton-forma bázispolinomjai."}},
    {"q":{"en":"In the context of divided differences, what does the notation $\\langle x_0, x_1, \\dots, x_n \\rangle$ represent?","hu":"A megosztott különbségek összefüggésében mit jelent a $\\langle x_0, x_1, \\dots, x_n \\rangle$ jelölés?"},"a":{"en":"The smallest interval containing all the points $x_0, x_1, \\dots, x_n$.","hu":"Az összes $x_0, x_1, \\dots, x_n$ pontot tartalmazó legkisebb intervallum."}},
    {"q":{"en":"How does Horner's method organize the computation of $L_n(x)$ in Newton form?","hu":"Hogyan szervezi meg Horner módszere a $L_n(x)$ számítását Newton alakban?"},"a":{"en":"It nests the linear factors to minimize the number of multiplications.","hu":"A szorzások számának minimalizálása érdekében beágyazza a lineáris tényezőket."}},
    {"q":{"en":"Exercise 8: Show that the limit of $f[x_0, x_1, x_2]$ as $(x_1, x_2) \\to (x_0, x_0)$ is equal to _____.","hu":"8. gyakorlat: Mutassuk meg, hogy a $f[x_0, x_1, x_2]$ határértéke $(x_1, x_2) \\to (x_0, x_0)$-ként egyenlő _____."},"a":{"en":"$f[x_0, x_0, x_0]$ (or $\\frac{f''(x_0)}{2}$)","hu":"$f[x_0, x_0, x_0]$ (vagy $\\frac{f''(x_0)}{2}$)"}},
    {"q":{"en":"What is the role of the Fundamental Theorem of Algebra in deriving the Newton form?","hu":"Mi a szerepe az algebrai alaptételnek a Newton-forma levezetésében?"},"a":{"en":"It justifies the product form of the difference $L_i(x) - L_{i-1}(x)$ based on its known roots.","hu":"Ismert gyökerei alapján igazolja a $L_i(x) - L_{i-1}(x)$ különbség termékformáját."}},
    {"q":{"en":"When computing a divided difference table by hand, what shape does the resulting data structure take?","hu":"Ha egy osztott különbségi táblázatot kézzel számítunk ki, milyen alakot ölt az eredményül kapott adatstruktúra?"},"a":{"en":"A triangular table.","hu":"Háromszög alakú asztal."}},
    {"q":{"en":"Is the Newton form a different polynomial than the Lagrange form for the same set of data points?","hu":"A Newton-forma eltérő polinom, mint a Lagrange-forma ugyanazon adatponthalmazhoz?"},"a":{"en":"No, it is the same unique interpolating polynomial expressed in a different algebraic form.","hu":"Nem, ez ugyanaz az egyedi interpoláló polinom, amely más algebrai formában van kifejezve."}},
    {"q":{"en":"In Example 6.15, what was the first-order divided difference $f[2, 3]$ for the data $(2, 3)$ and $(3, 29)$?","hu":"A 6.15. példában mekkora volt a $f[2, 3]$ elsőrendű osztott különbség a $(2, 3)$ és $(3, 29)$ adatok esetében?"},"a":{"en":"$26$","hu":"$26$"}},
    {"q":{"en":"In Example 6.15, what was the second-order divided difference $f[1, 2, 3]$ derived from $f[1, 2]=2$ and $f[2, 3]=26$?","hu":"A 6.15. példában mekkora volt a $f[1, 2]=2$ és $f[2, 3]=26$ értékekből származó $f[1, 2, 3]$ másodrendű osztott különbség?"},"a":{"en":"$12$","hu":"$12$"}},
    {"q":{"en":"What is the relationship between $f[x_1, x_0, x_0]$ and $f[x_0, x_0, x_1]$?","hu":"Mi a kapcsolat a $f[x_1, x_0, x_0]$ és a $f[x_0, x_0, x_1]$ között?"},"a":{"en":"They are equal ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$).","hu":"Egyenlőek ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$)."}},
    {"q":{"en":"If a polynomial $P(x)$ has degree $n$, what can be said about its $(n+1)$-th derivative in the context of divided differences?","hu":"Ha egy $P(x)$ polinomnak $n$ foka van, mit mondhatunk a $(n+1)$-edik deriváltjáról az osztott különbségek összefüggésében?"},"a":{"en":"It is zero, which corresponds to the $(n+1)$-th divided difference being zero.","hu":"Ez nulla, ami megfelel annak, hogy a $(n+1)$-edik osztott különbség nulla."}},
    {"q":{"en":"In the manual calculation $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$, which mesh points are used in the divisor?","hu":"A $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$ kézi számításnál mely hálópontokat használjuk az osztóban?"},"a":{"en":"$x_2$ and $x_0$","hu":"$x_2$ és $x_0$"}},
    {"q":{"en":"What is the value of $L_n(x_j)$ for $j \\in \\{0, 1, \\dots, n\\}$?","hu":"Mennyi a $L_n(x_j)$ értéke $j \\in \\{0, 1, \\dots, n\\}$ esetén?"},"a":{"en":"$f(x_j)$","hu":"$f(x_j)$"}},
    {"q":{"en":"Why is the Newton form preferred in computer programming for interpolation tasks?","hu":"Miért részesítik előnyben a Newton-formát a számítógépes programozásban interpolációs feladatokhoz?"},"a":{"en":"Due to its recursive nature and computational efficiency through Horner's method.","hu":"Rekurzív jellegének és számítási hatékonyságának köszönhetően a Horner-módszeren keresztül."}},
    {"q":{"en":"The formula $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ provides which type of definition for divided differences?","hu":"A $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ képlet milyen típusú meghatározást ad a megosztott különbségekre?"},"a":{"en":"The explicit (non-recursive) sum-based definition.","hu":"Az explicit (nem rekurzív) összegalapú definíció."}},
    {"q":{"en":"According to the video transcript, what happens to the terms in the expansion $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$?","hu":"A videó átirata szerint mi történik a $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$ bővítmény kifejezéseivel?"},"a":{"en":"They telescope, simplifying to $L_n$.","hu":"Teleszkóposak, leegyszerűsítve $L_n$-re."}},
    {"q":{"en":"In the video Example, how is the value '1' calculated for the first difference column between points $(-1, -2)$ and $(1, 0)$?","hu":"A Példa videóban hogyan számítják ki az „1” értéket a $(-1, -2)$ és $(1, 0)$ pontok közötti első különbség oszlophoz?"},"a":{"en":"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$","hu":"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$"}}
  ],
  hermite: [
    {"q":{"en":"What secondary values are interpolated in the Hermite interpolation problem alongside the function values $y_i = f(x_i)$?","hu":"Milyen másodlagos értékeket interpolálunk a Hermite interpolációs feladatban a $y_i = f(x_i)$ függvényértékek mellé?"},"a":{"en":"The derivative values $y_i' = f'(x_i)$.","hu":"A derivált értékek $y_i' = f'(x_i)$."}},
    {"q":{"en":"If there are $n + 1$ distinct mesh points, what is the maximum degree of the unique Hermite interpolating polynomial $H_{2n+1}$?","hu":"Ha vannak $n + 1$ különálló hálópontok, mekkora a $H_{2n+1}$ egyedi Hermite interpoláló polinom maximális foka?"},"a":{"en":"The maximum degree is $2n + 1$.","hu":"A maximális fokozat $2n + 1$."}},
    {"q":{"en":"How many total equations are specified by the interpolation conditions for $n + 1$ nodes in a standard Hermite problem?","hu":"Hány teljes egyenletet határoznak meg a $n + 1$ csomópontok interpolációs feltételei egy szabványos Hermite-feladatban?"},"a":{"en":"There are $2(n + 1)$ equations.","hu":"Vannak $2(n + 1)$ egyenletek."}},
    {"q":{"en":"Geometrically, what does $g'(x_i) = y_i'$ ensure about the graph of the Hermite polynomial at node $x_i$?","hu":"Geometriailag mit biztosít a $g'(x_i) = y_i'$ a Hermite-polinom gráfjában a $x_i$ csomópontban?"},"a":{"en":"It ensures the tangent line at $x_i$ has a slope equal to $y_i'$.","hu":"Biztosítja, hogy a $x_i$ érintővonal lejtése megegyezik a $y_i'$-vel."}},
    {"q":{"en":"In the uniqueness proof for Hermite interpolation, what is the multiplicity of each root $x_i$ for the difference polynomial $P = H_{2n+1} - \\tilde{H}_{2n+1}$?","hu":"A Hermite interpoláció egyediségének igazolásában mekkora az egyes $x_i$ gyökök multiplicitása a $P = H_{2n+1} - \\tilde{H}_{2n+1}$ különbségpolinomhoz?"},"a":{"en":"Each node $x_i$ is a double root of $P$.","hu":"Mindegyik $x_i$ csomópont a $P$ kettős gyökér."}},
    {"q":{"en":"Why must the difference polynomial $P$ be identically zero if it has $2n + 2$ roots and a degree of at most $2n + 1$?","hu":"Miért kell a $P$ különbségpolinomnak egyformán nullának lennie, ha $2n + 2$ gyökerei vannak, és foka legfeljebb $2n + 1$?"},"a":{"en":"A non-zero polynomial cannot have more roots than its degree according to the Fundamental Theorem of Algebra.","hu":"Az algebra alaptétele szerint egy nem nulla polinomnak nem lehet több gyöke, mint a foka."}},
    {"q":{"en":"What is the recursive definition of the divided difference $f[x_0, x_0, x_1]$?","hu":"Mi a rekurzív definíciója a $f[x_0, x_0, x_1]$ osztott különbségnek?"},"a":{"en":"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$.","hu":"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$."}},
    {"q":{"en":"What value is substituted for the divided difference $f[x_i, x_i]$ in the construction of the Hermite polynomial?","hu":"Milyen értékkel helyettesítjük a $f[x_i, x_i]$ osztott különbséget a Hermite-polinom felépítésében?"},"a":{"en":"The derivative value $f'(x_i)$.","hu":"A derivált érték $f'(x_i)$."}},
    {"q":{"en":"What is the first term of the Hermite interpolating polynomial $H_{2n+1}(x)$ in divided difference form?","hu":"Mi a $H_{2n+1}(x)$ Hermite interpoláló polinom első tagja osztott differencia alakban?"},"a":{"en":"$f[x_0]$.","hu":"$f[x_0]$."}},
    {"q":{"en":"What is the coefficient of the second term, $(x - x_0)$, in the Hermite interpolating polynomial?","hu":"Mennyi a második tag, a $(x - x_0)$ együtthatója a Hermite interpoláló polinomban?"},"a":{"en":"$f[x_0, x_0]$.","hu":"$f[x_0, x_0]$."}},
    {"q":{"en":"What is the coefficient of the third term, $(x - x_0)^2$, in the Hermite interpolating polynomial?","hu":"Mennyi a harmadik tag, a $(x - x_0)^2$ együtthatója a Hermite interpoláló polinomban?"},"a":{"en":"$f[x_0, x_0, x_1]$.","hu":"$f[x_0, x_0, x_1]$."}},
    {"q":{"en":"In the Hermite polynomial expansion, what is the basis function associated with the coefficient $f[x_0, x_0, x_1, x_1]$?","hu":"A Hermite polinomkiterjesztésben mi a $f[x_0, x_0, x_1, x_1]$ együtthatóhoz társított bázisfüggvény?"},"a":{"en":"$(x - x_0)^2(x - x_1)$.","hu":"$(x - x_0)^2(x - x_1)$."}},
    {"q":{"en":"State the truncation error formula $f(x) - H_{2n+1}(x)$ using a higher-order divided difference.","hu":"Adja meg a $f(x) - H_{2n+1}(x)$ csonkítási hiba képletét egy magasabb rendű osztott különbség használatával."},"a":{"en":"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$.","hu":"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$."}},
    {"q":{"en":"According to Theorem 6.19, what is the error term for Hermite interpolation if $f \\in C^{2n+2}$?","hu":"A 6.19. tétel szerint mi a Hermite-interpoláció hibatagja, ha $f \\in C^{2n+2}$?"},"a":{"en":"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$.","hu":"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$."}},
    {"q":{"en":"In the derivative-based error formula for $H_{2n+1}(x)$, what interval must the value $\\xi$ belong to?","hu":"A $H_{2n+1}(x)$ derivált alapú hibaképletében melyik intervallumhoz kell tartoznia a $\\xi$ értéknek?"},"a":{"en":"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$.","hu":"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$."}},
    {"q":{"en":"Which theorem is used to prove the existence of $\\xi$ in the Hermite interpolation error bound?","hu":"Melyik tétellel igazoljuk a $\\xi$ létezését a Hermite interpolációs hiba korlátban?"},"a":{"en":"The generalized Rolle's Theorem.","hu":"Az általánosított Rolle-tétel."}},
    {"q":{"en":"What mathematical property of divided differences allows the Hermite polynomial to be viewed as a limit of Lagrange polynomials?","hu":"Az osztott különbségek milyen matematikai tulajdonsága teszi lehetővé, hogy a Hermite-polinomot a Lagrange-polinomok határértékeként tekintsük?"},"a":{"en":"The continuity of the divided difference function.","hu":"Az osztott különbség függvény folytonossága."}},
    {"q":{"en":"According to Corollary 6.20, the divided difference $f[x_0, x_0, \\dots, x_n, x_n, x]$ is equal to which derivative expression?","hu":"A 6.20 következtetés szerint a $f[x_0, x_0, \\dots, x_n, x_n, x]$ osztott különbség melyik derivált kifejezéssel egyenlő?"},"a":{"en":"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$.","hu":"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$."}},
    {"q":{"en":"When setting up the divided difference table for Hermite interpolation, how many times must each node $x_i$ be listed in the first column?","hu":"A Hermite interpoláció osztott különbségi táblázatának beállításakor hányszor kell az egyes $x_i$ csomópontokat az első oszlopban felsorolni?"},"a":{"en":"Each node must be listed twice.","hu":"Minden csomópontot kétszer kell felsorolni."}},
    {"q":{"en":"In the Hermite divided difference table, what represents the first-order divided difference for two identical nodes $x_i$?","hu":"A Hermite osztott különbség táblázatban mi jelenti az elsőrendű osztott különbséget két azonos $x_i$ csomópontra?"},"a":{"en":"The given derivative $f'(x_i)$.","hu":"A megadott derivált $f'(x_i)$."}},
    {"q":{"en":"In the Hermite divided difference table, what represents the first-order divided difference for two distinct nodes $x_i$ and $x_{i+1}$?","hu":"A Hermite osztott különbség táblázatban mi jelenti az elsőrendű osztott különbséget két különálló csomópontnál, $x_i$ és $x_{i+1}$?"},"a":{"en":"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$.","hu":"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$."}},
    {"q":{"en":"Which values in the completed divided difference table serve as the coefficients for the Hermite polynomial?","hu":"A kitöltött osztott különbség táblázat mely értékei szolgálnak együtthatóként a Hermite polinomhoz?"},"a":{"en":"The values along the top diagonal of the table.","hu":"Az értékek a táblázat felső átlója mentén."}},
    {"q":{"en":"The function $g(z)$ used in the proof of Theorem 6.19 is designed such that $x_0, \\dots, x_n$ are _____ roots.","hu":"A 6.19. tétel bizonyítása során használt $g(z)$ függvényt úgy tervezték, hogy a $x_0, \\dots, x_n$ _____ gyök."},"a":{"en":"Double roots.","hu":"Kettős gyökerek."}},
    {"q":{"en":"In Example 6.21, what was the value of the leading coefficient $f[x_0, x_0, x_1, x_1, x_2, x_2]$?","hu":"A 6.21. példában mekkora volt a $f[x_0, x_0, x_1, x_1, x_2, x_2]$ vezető együttható értéke?"},"a":{"en":"Zero.","hu":"Nulla."}},
    {"q":{"en":"If a Hermite polynomial $H_5$ corresponds to 3 mesh points, what is its expected maximum degree?","hu":"Ha egy $H_5$ Hermite polinom 3 hálópontnak felel meg, mennyi a várható maximális foka?"},"a":{"en":"Degree 5.","hu":"5. fokozat."}},
    {"q":{"en":"In the Hermite polynomial formula, the factor $(x - x_i)$ is squared once the point $x_i$ has appeared _____ times in the divided difference sequence.","hu":"A Hermite-polinom képletében a $(x - x_i)$ tényező négyzetre kerül, ha a $x_i$ pont _____-szor szerepel az osztott különbségsorozatban."},"a":{"en":"Two times.","hu":"Kétszer."}},
    {"q":{"en":"Does interchanging the order of nodes $x_i$ change the resulting Hermite interpolating polynomial?","hu":"A $x_i$ csomópontok sorrendjének felcserélése megváltoztatja-e az eredményül kapott Hermite interpolációs polinomot?"},"a":{"en":"No, the interpolating polynomial remains the same due to its uniqueness.","hu":"Nem, az interpoláló polinom egyedisége miatt ugyanaz marad."}},
    {"q":{"en":"The general Hermite problem can interpolate the first $k_i$ derivatives at node $x_i$; how many conditions does this contribute for that specific node?","hu":"Az általános Hermite probléma interpolálhatja az első $k_i$ származékokat a $x_i$ csomóponton; ez hány feltételhez járul hozzá az adott csomóponthoz?"},"a":{"en":"$k_i + 1$ conditions.","hu":"$k_i + 1$ feltételek."}},
    {"q":{"en":"If given $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$, and $H(x_1)=f(x_1)$, what is the minimal degree of the interpolating polynomial?","hu":"Ha adott $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$ és $H(x_1)=f(x_1)$, mekkora az interpoláló polinom minimális foka?"},"a":{"en":"The minimal degree is 3.","hu":"A minimális fokozat a 3."}},
    {"q":{"en":"What is the coefficient of $(x - x_0)^3$ in a polynomial interpolating $f(x_0)$, $f'(x_0)$, $f''(x_0)$, and $f(x_1)$?","hu":"Mekkora a $(x - x_0)^3$ együtthatója a $f(x_0)$, $f'(x_0)$, $f''(x_0)$ és $f(x_1)$ polinom interpolációjában?"},"a":{"en":"$f[x_0, x_0, x_0, x_1]$.","hu":"$f[x_0, x_0, x_0, x_1]$."}},
    {"q":{"en":"Concept: $H_{2n+1}(x)$","hu":"Koncepció: $H_{2n+1}(x)$"},"a":{"en":"Definition: The unique polynomial of degree at most $2n+1$ that interpolates a function and its first derivatives at $n+1$ points.","hu":"Definíció: A legfeljebb $2n+1$ fokozatú egyedi polinom, amely egy függvényt és annak első deriváltjait interpolálja a $n+1$ pontokban."}},
    {"q":{"en":"What does the term $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ denote in mathematical error analysis notation?","hu":"Mit jelöl a $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ kifejezés a matematikai hibaelemzés jelölésében?"},"a":{"en":"The smallest interval containing the points $x_0, x_1, \\dots, x_n$ and $x$.","hu":"A $x_0, x_1, \\dots, x_n$ és $x$ pontokat tartalmazó legkisebb intervallum."}},
    {"q":{"en":"Term: Generalized Rolle's Theorem","hu":"Fogalom: Általános Rolle-tétel"},"a":{"en":"Definition: A theorem stating that if a function has $n$ roots in an interval, its $(n-1)$-th derivative has at least one root in that interval.","hu":"Definíció: Egy tétel, amely kimondja, hogy ha egy függvénynek $n$ gyöke van egy intervallumban, akkor a $(n-1)$-edik deriváltjának legalább egy gyöke van ebben az intervallumban."}},
    {"q":{"en":"In the Newton form of the Hermite polynomial, what is the term following $f[x_0, x_0, x_1](x - x_0)^2$?","hu":"A Hermite polinom Newton alakjában mi a $f[x_0, x_0, x_1](x - x_0)^2$ után következő kifejezés?"},"a":{"en":"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$.","hu":"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$."}},
    {"q":{"en":"Cloze: The divided difference $f[x_0, x_0]$ is equivalent to the _____ of the function $f$ at $x_0$.","hu":"Bezárás: A $f[x_0, x_0]$ osztott különbség megegyezik a $f$ függvény _____ értékével a $x_0$-nél."},"a":{"en":"First derivative ($f'$).","hu":"Első származék ($f'$)."}},
    {"q":{"en":"To calculate $f[x_0, x_0, x_0]$, one would need the value of the _____ derivative at $x_0$.","hu":"A $f[x_0, x_0, x_0]$ kiszámításához a _____ derivált értékére van szükség a $x_0$ pontban."},"a":{"en":"Second derivative ($f''$).","hu":"Második származék ($f''$)."}},
    {"q":{"en":"In the divided difference table, the column index of the framed coefficients is equal to the _____ of the divided difference.","hu":"Az osztott különbség táblázatban a keretezett együtthatók oszlopindexe megegyezik az osztott különbség _____ értékével."},"a":{"en":"Order.","hu":"Rendelés."}},
    {"q":{"en":"Why is the degree of the error term in Hermite interpolation $2n + 2$ rather than $n + 1$?","hu":"Miért a hibatag mértéke a Hermite interpolációban $2n + 2$ helyett $n + 1$?"},"a":{"en":"Because the interpolation conditions provide two pieces of information at each of the $n+1$ nodes.","hu":"Mivel az interpolációs feltételek a $n+1$ csomópontok mindegyikén két-két információt szolgáltatnak."}},
    {"q":{"en":"Process: How is the divided difference $f[x_0, x_1, x_1]$ computed?","hu":"Folyamat: Hogyan számítják ki a $f[x_0, x_1, x_1]$ osztott különbséget?"},"a":{"en":"By taking the difference between $f[x_1, x_1]$ and $f[x_0, x_1]$ and dividing by $x_1 - x_0$.","hu":"A $f[x_1, x_1]$ és a $f[x_0, x_1]$ közötti különbséget figyelembe véve, és elosztva $x_1 - x_0$-vel."}},
    {"q":{"en":"What is the total number of terms in the summation formula for $H_{2n+1}(x)$?","hu":"Mennyi a kifejezések száma a $H_{2n+1}(x)$ összegzési képletében?"},"a":{"en":"$2n + 2$ terms.","hu":"$2n + 2$ feltételek."}},
    {"q":{"en":"True or False: The Hermite interpolating polynomial is always of degree exactly $2n + 1$.","hu":"Igaz vagy hamis: A Hermite interpoláló polinom mindig pontosan $2n + 1$ fokú."},"a":{"en":"False, it is of degree at most $2n + 1$.","hu":"Hamis, ez legfeljebb $2n + 1$ fokozatú."}},
    {"q":{"en":"The error bound for Hermite interpolation is generally _____ than the error bound for Lagrange interpolation using the same number of points.","hu":"A Hermite-interpoláció korlátja általában _____, mint az azonos számú pontot használó Lagrange-interpoláció korlátja."},"a":{"en":"Smaller.","hu":"Kisebb."}},
    {"q":{"en":"Which specific divided difference value is required to calculate the truncation error at a point $x$?","hu":"Melyik konkrét osztott különbség értékre van szükség a csonkítási hiba kiszámításához egy $x$ pontban?"},"a":{"en":"$f[x_0, x_0, \\dots, x_n, x_n, x]$.","hu":"$f[x_0, x_0, \\dots, x_n, x_n, x]$."}},
    {"q":{"en":"If $f(x)$ is a polynomial of degree $2n+1$, what is the resulting truncation error $f(x) - H_{2n+1}(x)$?","hu":"Ha a $f(x)$ egy $2n+1$ fokú polinom, akkor mekkora a $f(x) - H_{2n+1}(x)$ csonkítási hiba?"},"a":{"en":"The error is zero.","hu":"A hiba nulla."}},
    {"q":{"en":"In a divided difference table for Hermite interpolation with points $x_0$ and $x_1$, how many rows will the table have?","hu":"A $x_0$ és $x_1$ pontokkal rendelkező Hermite interpoláció osztott különbségtáblázatában hány soros lesz a táblázat?"},"a":{"en":"4 rows.","hu":"4 sor."}},
    {"q":{"en":"In the sequence of basis polynomials for $H_{2n+1}$, which factor is added to the term following $(x-x_0)^2(x-x_1)^2$?","hu":"A $H_{2n+1}$ bázispolinomjainak sorozatában melyik tényezőt adjuk a $(x-x_0)^2(x-x_1)^2$ utáni kifejezéshez?"},"a":{"en":"$(x-x_2)$.","hu":"$(x-x_2)$."}},
    {"q":{"en":"What is the coefficient of $(x-x_0)^2(x-x_1)^2$ in the Hermite polynomial?","hu":"Mekkora a $(x-x_0)^2(x-x_1)^2$ együtthatója a Hermite-polinomban?"},"a":{"en":"$f[x_0, x_0, x_1, x_1, x_2]$.","hu":"$f[x_0, x_0, x_1, x_1, x_2]$."}},
    {"q":{"en":"The divided difference $f[x_0, x_0, x_1]$ is often called a _____ order divided difference.","hu":"A $f[x_0, x_0, x_1]$ osztott különbséget gyakran _____ sorrendben osztott különbségnek nevezik."},"a":{"en":"Second.","hu":"Második."}},
    {"q":{"en":"In the limit as nodes $x_i'$ approach $x_i$, the $L_{2n+1}$ error formula term $(x-x_i)(x-x_i')$ becomes _____.","hu":"A határértékben, amikor a $x_i'$ csomópontok megközelítik a $x_i$-t, a $L_{2n+1}$ hibaképlet $(x-x_i)(x-x_i')$ kifejezése _____ lesz."},"a":{"en":"$(x-x_i)^2$.","hu":"$(x-x_i)^2$."}},
    {"q":{"en":"If $f(x) = x^3$, and we use Hermite interpolation at $x_0 = 0$ and $x_1 = 1$, what is the degree of $H_3(x)$?","hu":"Ha $f(x) = x^3$, és Hermite interpolációt használunk a $x_0 = 0$ és $x_1 = 1$ értékeknél, mekkora a $H_3(x)$ foka?"},"a":{"en":"Degree 3.","hu":"3. fokozat."}},
    {"q":{"en":"How does the Hermite divided difference table accommodate a node with a given second derivative?","hu":"Hogyan illeszkedik a Hermite osztott differenciatábla egy adott második deriválttal rendelkező csomóponthoz?"},"a":{"en":"The node and its function value are listed three times, and the second derivative is used to calculate the second-order divided difference.","hu":"A csomópont és a függvényértéke háromszor szerepel, és a második derivált a másodrendű osztott különbség kiszámításához."}},
    {"q":{"en":"The Fundamental Theorem of Algebra proves that a polynomial of degree $m$ can have at most _____ distinct roots unless it is the zero polynomial.","hu":"Az algebra alaptétele bizonyítja, hogy egy $m$ fokú polinomnak legfeljebb _____ különböző gyöke lehet, hacsak nem nulla polinom."},"a":{"en":"$m$ roots.","hu":"$m$ gyökerei."}},
    {"q":{"en":"What is the value of the first-order divided difference $f[x_1, x_1]$ if $f'(x) = 2x + 1$ and $x_1 = 3$?","hu":"Mennyi a $f[x_1, x_1]$ elsőrendű osztott különbség értéke, ha $f'(x) = 2x + 1$ és $x_1 = 3$?"},"a":{"en":"7.","hu":"7."}},
    {"q":{"en":"In the Hermite expansion, the term $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ is zero if $f$ is a polynomial of degree less than _____.","hu":"A Hermite-kiterjesztésben a $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ kifejezés nulla, ha a $f$ egy _____-nál kisebb fokú polinom."},"a":{"en":"$2k$.","hu":"$2k$."}},
    {"q":{"en":"If we have nodes $x_0, x_1, x_2$, what is the final term of the Hermite polynomial $H_5(x)$?","hu":"Ha vannak $x_0, x_1, x_2$ csomópontjaink, mi a $H_5(x)$ Hermite-polinom végső tagja?"},"a":{"en":"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$.","hu":"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$."}},
    {"q":{"en":"Cloze: In the construction of $H_{2n+1}$, we list mesh points twice to simulate nodes having a multiplicity of _____.","hu":"Bezárás: A $H_{2n+1}$ felépítésében kétszer soroljuk fel a hálópontokat, hogy szimuláljuk a _____ sokaságú csomópontokat."},"a":{"en":"Two.","hu":"Két."}},
    {"q":{"en":"What is the relationship between the divided difference $f[x_0, x_1, \\dots, x_k]$ and the order of nodes?","hu":"Mi a kapcsolat a $f[x_0, x_1, \\dots, x_k]$ osztott különbség és a csomópontok sorrendje között?"},"a":{"en":"Divided differences are symmetric, meaning the value is independent of the order of the nodes.","hu":"Az osztott különbségek szimmetrikusak, vagyis az érték független a csomópontok sorrendjétől."}},
    {"q":{"en":"When calculating the error of Hermite interpolation, if $f(x)$ is a polynomial of degree $2n+2$, the error term $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ becomes a _____.","hu":"A Hermite-interpoláció hibájának kiszámításakor, ha $f(x)$ egy $2n+2$ fokú polinom, a $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ hibatag _____ lesz."},"a":{"en":"Constant.","hu":"Állandó."}},
    {"q":{"en":"In Example 6.21, the Hermite polynomial $H_5(x)$ ended with the term $2(x+1)^2(x-1)^2$. What does the coefficient 2 represent?","hu":"A 6.21. példában a $H_5(x)$ Hermite-polinom a $2(x+1)^2(x-1)^2$ kifejezéssel végződött. Mit jelent a 2-es együttható?"},"a":{"en":"The divided difference $f[-1, -1, 1, 1, 2]$.","hu":"A megosztott különbség $f[-1, -1, 1, 1, 2]$."}},
    {"q":{"en":"If a function $f$ is only $C^1$, can we validly apply the derivative-based error formula for Hermite interpolation?","hu":"Ha egy $f$ függvény csak $C^1$, akkor érvényesen alkalmazhatjuk a derivált alapú hibaképletet a Hermite interpolációhoz?"},"a":{"en":"No, the formula requires $f$ to be at least $C^{2n+2}$.","hu":"Nem, a képlet megköveteli, hogy a $f$ legalább $C^{2n+2}$ legyen."}}
  ],
  spline: [
    {"q":{"en":"What is the definition of a spline function of degree $k$ on an interval $[a, b]$ with mesh $\\{x_i\\}$?","hu":"Mi a definíciója a $k$ fokos spline függvénynek a $[a, b]$ intervallumon $\\{x_i\\}$ hálóval?"},"a":{"en":"A continuous function $S$ that is a polynomial of degree at most $k$ on each sub-interval and $S \\in C^{k-1}[a, b]$.","hu":"Egy $S$ folytonos függvény, amely legfeljebb $k$ fokszámú polinom az egyes részintervallumokon és $S \\in C^{k-1}[a, b]$."}},
    {"q":{"en":"What is the common name for a spline function of degree $k = 1$?","hu":"Mi a $k = 1$ fokú spline függvény általános neve?"},"a":{"en":"Linear spline function.","hu":"Lineáris spline függvény."}},
    {"q":{"en":"A spline function of degree $k = 2$ is referred to as a _____ spline function.","hu":"A $k = 2$ fokú spline függvényt _____ spline függvénynek nevezzük."},"a":{"en":"quadratic","hu":"négyzetes"}},
    {"q":{"en":"A spline function of degree $k = 3$ is referred to as a _____ spline function.","hu":"A $k = 3$ fokú spline függvényt _____ spline függvénynek nevezzük."},"a":{"en":"cubic","hu":"kocka alakú"}},
    {"q":{"en":"How many parameters define a cubic spline $S$ consisting of $n$ polynomial segments?","hu":"Hány paraméter határoz meg egy $n$ polinom szegmensekből álló $S$ köbös spline-t?"},"a":{"en":"$4n$ parameters.","hu":"$4n$ paraméterek."}},
    {"q":{"en":"In cubic spline interpolation, how many conditions are provided by the interpolation requirements and the continuity of the first and second derivatives?","hu":"A köbös spline interpolációnál hány feltételt biztosítanak az interpolációs követelmények és az első és második derivált folytonossága?"},"a":{"en":"$4n - 2$ conditions.","hu":"$4n - 2$ feltételek."}},
    {"q":{"en":"What additional boundary conditions define a 'natural' cubic spline?","hu":"Milyen további peremfeltételek határozzák meg a „természetes” köbös spline-t?"},"a":{"en":"$S_0''(x_0) = 0$ and $S_{n-1}''(x_n) = 0$.","hu":"$S_0''(x_0) = 0$ és $S_{n-1}''(x_n) = 0$."}},
    {"q":{"en":"What additional boundary conditions define a 'clamped' (or complete) cubic spline?","hu":"Milyen további peremfeltételek határozzák meg a „befogott” (vagy teljes) köbös spline-t?"},"a":{"en":"$S'(x_0) = y_0'$ and $S'(x_n) = y_n'$.","hu":"$S'(x_0) = y_0'$ és $S'(x_n) = y_n'$."}},
    {"q":{"en":"In the cubic polynomial form $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$, what does $a_i$ represent?","hu":"A $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$ köbös polinom alakban mit jelent a $a_i$?"},"a":{"en":"The function value at the point $x_i$, such that $a_i = y_i$.","hu":"A függvény értéke a $x_i$ pontban úgy, hogy a $a_i = y_i$."}},
    {"q":{"en":"What is the relationship between the coefficient $c_i$ and the second derivative $S_i''(x_i)$ in a cubic spline segment?","hu":"Mi a kapcsolat a $c_i$ együttható és a $S_i''(x_i)$ második derivált között egy köbös spline szegmensben?"},"a":{"en":"$c_i = \\frac{S_i''(x_i)}{2}$.","hu":"$c_i = \\frac{S_i''(x_i)}{2}$."}},
    {"q":{"en":"What is the definition of the notation $\\Delta x_i$ used in spline interpolation formulas?","hu":"Mi a definíciója a spline interpolációs képletekben használt $\\Delta x_i$ jelölésnek?"},"a":{"en":"$\\Delta x_i = x_{i+1} - x_i$.","hu":"$\\Delta x_i = x_{i+1} - x_i$."}},
    {"q":{"en":"What is the definition of the notation $\\Delta y_i$ used in spline interpolation formulas?","hu":"Mi a definíciója a spline interpolációs képletekben használt $\\Delta y_i$ jelölésnek?"},"a":{"en":"$\\Delta y_i = y_{i+1} - y_i$.","hu":"$\\Delta y_i = y_{i+1} - y_i$."}},
    {"q":{"en":"Formula: How is the coefficient $d_i$ expressed in terms of $c_i$ and $c_{i+1}$?","hu":"Képlet: Hogyan fejeződik ki a $d_i$ együttható $c_i$ és $c_{i+1}$ kifejezésekben?"},"a":{"en":"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$.","hu":"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$."}},
    {"q":{"en":"How is the coefficient $b_i$ expressed using $\\Delta y_i$, $\\Delta x_i$, $c_i$, and $c_{i+1}$?","hu":"Hogyan fejeződik ki a $b_i$ együttható a $\\Delta y_i$, $\\Delta x_i$, $c_i$ és $c_{i+1}$ használatával?"},"a":{"en":"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$.","hu":"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$."}},
    {"q":{"en":"What type of matrix characterizes the system $Ax = b$ used to solve for the cubic spline coefficients $c_i$?","hu":"Milyen típusú mátrix jellemzi a $Ax = b$ rendszert, amellyel a $c_i$ köbös spline-együtthatókat megoldották?"},"a":{"en":"A tridiagonal matrix.","hu":"Háromszögű mátrix."}},
    {"q":{"en":"Why is the system $Ax = b$ for natural cubic splines guaranteed to have a unique solution?","hu":"Miért garantáltan egyedi megoldás a természetes köbös hornyokhoz készült $Ax = b$ rendszer?"},"a":{"en":"Because the matrix $A$ is diagonally dominant.","hu":"Mivel a $A$ mátrix átlósan domináns."}},
    {"q":{"en":"In the system $Ax = b$ for a natural spline, what are the values of the first and last elements of the solution vector $x = (c_0, c_1, \\ldots, c_n)^T$?","hu":"A $Ax = b$ rendszerben természetes spline esetén mekkora a $x = (c_0, c_1, \\ldots, c_n)^T$ megoldásvektor első és utolsó elemének értéke?"},"a":{"en":"$c_0 = 0$ and $c_n = 0$.","hu":"$c_0 = 0$ és $c_n = 0$."}},
    {"q":{"en":"Which boundary condition for cubic splines involves specifying the slope of the tangent line at the endpoints?","hu":"A köbös spline-ok melyik peremfeltétele tartalmazza az érintővonal meredekségének megadását a végpontokban?"},"a":{"en":"Clamped spline (or complete spline) conditions.","hu":"Rögzített spline (vagy teljes spline) feltételek."}},
    {"q":{"en":"What is the primary visual disadvantage of linear spline interpolation compared to cubic spline interpolation?","hu":"Mi a lineáris spline interpoláció elsődleges vizuális hátránya a köbös spline interpolációhoz képest?"},"a":{"en":"Linear splines are not smooth (not differentiable at the mesh points).","hu":"A lineáris szálak nem simaak (a hálópontokban nem különböztethetők meg)."}},
    {"q":{"en":"Theorem 6.24: For a natural cubic spline $S$ and any other $C^2$ interpolating function $f$, what inequality holds regarding their second derivatives?","hu":"6.24. Tétel: A $S$ természetes köbös spline és bármely más $C^2$ $f$ interpolációs függvény esetén milyen egyenlőtlenség érvényes a második deriváltjaira?"},"a":{"en":"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$.","hu":"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$."}},
    {"q":{"en":"What does the minimal property of natural cubic splines (the integral of the squared second derivative) signify physically?","hu":"Mit jelent fizikailag a természetes köbös spline minimális tulajdonsága (a négyzetes második derivált integrálja)?"},"a":{"en":"It represents the 'smoothest' interpolation among all possible $C^2$ interpolating functions.","hu":"Ez jelenti a „legsimább” interpolációt az összes lehetséges $C^2$ interpolációs függvény közül."}},
    {"q":{"en":"In the error bounds for clamped cubic splines, what does $M_4$ represent?","hu":"Mit jelent a $M_4$ a befogott köbös spline hibahatáraiban?"},"a":{"en":"$M_4 = \\max\\{|f^{(4)}(x)| : x \\in [a, b]\\}$.","hu":"$M_4 = \\max\\{|f^{(4)}(x)|: x \\in [a, b]\\}$."}},
    {"q":{"en":"In the error bounds for cubic splines, what does $h$ represent?","hu":"Mit jelent a $h$ a köbös spline hibahatáraiban?"},"a":{"en":"The maximum length of the sub-intervals ($h = \\max \\Delta x_i$).","hu":"A részintervallumok maximális hossza ($h = \\max \\Delta x_i$)."}},
    {"q":{"en":"The error bound for $|f(x) - S(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?","hu":"A zárt köbös spline interpolációban a $|f(x) - S(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},"a":{"en":"$h^4$.","hu":"$h^4$."}},
    {"q":{"en":"The error bound for $|f'(x) - S'(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?","hu":"A zárt köbös spline interpolációban a $|f'(x) - S'(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},"a":{"en":"$h^3$.","hu":"$h^3$."}},
    {"q":{"en":"The error bound for $|f''(x) - S''(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?","hu":"A zárt köbös spline interpolációban a $|f''(x) - S''(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},"a":{"en":"$h^2$.","hu":"$h^2$."}},
    {"q":{"en":"True or False: Natural cubic spline interpolation is better at avoiding oscillations near the ends of an interval compared to high-degree Lagrange interpolation.","hu":"Igaz vagy hamis: A természetes köbös spline interpoláció jobban elkerüli az intervallum végeihez közeli oszcillációkat, mint a nagyfokú Lagrange-interpoláció."},"a":{"en":"True.","hu":"Igaz."}},
    {"q":{"en":"Which numerical algorithm is recommended for efficiently solving the tridiagonal system $Ax = b$ in spline calculations?","hu":"Melyik numerikus algoritmus javasolt a $Ax = b$ háromszögrendszer hatékony megoldásához spline számításokban?"},"a":{"en":"Gaussian elimination for tridiagonal systems (Algorithm 3.37).","hu":"Gauss-elimináció tridiagonális rendszerek esetén (3.37-es algoritmus)."}},
    {"q":{"en":"What is the condition for $c_0$ in the linear system for a clamped spline with given $y_0'$?","hu":"Mi a feltétele a $c_0$-nek a lineáris rendszerben egy befogott spline esetén adott $y_0'$-vel?"},"a":{"en":"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$.","hu":"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$."}},
    {"q":{"en":"What is the condition for $c_n$ in the linear system for a clamped spline with given $y_n'$?","hu":"Mi a feltétele a $c_n$-nek a lineáris rendszerben egy befogott spline esetén adott $y_n'$-vel?"},"a":{"en":"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$.","hu":"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$."}},
    {"q":{"en":"Process: To prove $\\int_a^b S''(x)g''(x) \\, dx = 0$, what calculus technique is applied after splitting the integral over sub-intervals?","hu":"Folyamat: A $\\int_a^b S''(x)g''(x) \\, dx = 0$ bizonyítására milyen számítási technikát alkalmazunk az integrál részintervallumokra való felosztása után?"},"a":{"en":"Integration by parts.","hu":"Integráció alkatrészek szerint."}},
    {"q":{"en":"If $S$ is a cubic spline, what is the nature of its third derivative $S'''$ on any sub-interval $[x_i, x_{i+1}]$?","hu":"Ha a $S$ egy köbös spline, milyen a harmadik deriváltja, a $S'''$ bármely $[x_i, x_{i+1}]$ részintervallumon?"},"a":{"en":"It is a constant function.","hu":"Ez egy állandó funkció."}},
    {"q":{"en":"In the proof of the minimal property, why does $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ equal zero?","hu":"A minimális tulajdonság igazolásában miért egyenlő a $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ nullával?"},"a":{"en":"Because $g(x_i) = f(x_i) - S(x_i) = 0$ for all $i$ (both functions interpolate the same data).","hu":"Mivel a $g(x_i) = f(x_i) - S(x_i) = 0$ az összes $i$-hez (mindkét funkció ugyanazokat az adatokat interpolálja)."}},
    {"q":{"en":"What is the continuity class of a $k$-th degree spline function on the interval $(a, b)$?","hu":"Mi a $k$-edik fokú spline függvény folytonossági osztálya a $(a, b)$ intervallumon?"},"a":{"en":"$C^{k-1}(a, b)$.","hu":"$C^{k-1}(a, b)$."}},
    {"q":{"en":"How many conditions are required to uniquely determine a cubic spline with $n$ sub-intervals?","hu":"Hány feltétel szükséges egy köbös spline egyedi meghatározásához $n$ részintervallumokkal?"},"a":{"en":"$4n$ conditions.","hu":"$4n$ feltételek."}},
    {"q":{"en":"Concept: Piecewise linear interpolation","hu":"Koncepció: Darabosan lineáris interpoláció"},"a":{"en":"Definition: Connecting data points $(x_i, y_i)$ with straight line segments; geometrically equivalent to a linear spline.","hu":"Definíció: $(x_i, y_i)$ adatpontok összekötése egyenes szakaszokkal; geometriailag egyenértékű egy lineáris spline-nal."}},
    {"q":{"en":"In the context of spline error bounds, what does $k$ represent in the formula $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$?","hu":"A spline hibahatárokkal összefüggésben mit jelent a $k$ a $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$ képletben?"},"a":{"en":"The minimum length of the sub-intervals ($k = \\min \\Delta x_i$).","hu":"A részintervallumok minimális hossza ($k = \\min \\Delta x_i$)."}},
    {"q":{"en":"What term is used for $S'(x_n)$ and $S''(x_n)$ in equations where $x_n$ is the right endpoint?","hu":"Milyen kifejezést használnak a $S'(x_n)$ és $S''(x_n)$ kifejezésekre olyan egyenletekben, ahol a $x_n$ a megfelelő végpont?"},"a":{"en":"Left-sided derivatives.","hu":"Baloldali származékok."}},
    {"q":{"en":"Which equation relates $c_i, c_{i+1}, c_{i+2}$ for $i = 0, \\ldots, n-2$ in a general cubic spline?","hu":"Melyik egyenlet kapcsolja össze a $c_i, c_{i+1}, c_{i+2}$ $i = 0, \\ldots, n-2$-t egy általános köbös spline-ban?"},"a":{"en":"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$.","hu":"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$."}},
    {"q":{"en":"What property of cubic splines makes them 'smooth enough' for most practical applications?","hu":"A köbös hornyok milyen tulajdonsága teszi „elég simává” a legtöbb gyakorlati alkalmazáshoz?"},"a":{"en":"They are twice continuously differentiable ($C^2$).","hu":"Kétszer folyamatosan differenciálhatóak ($C^2$)."}}
  ],
}
