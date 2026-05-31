// Auto-generated learning aids for chapter 8 (minimization). Glossaries bilingual; flashcards EN. Keyed by section id.
export interface GlossaryEntry { term: { en: string; hu: string }; def: { en: string; hu: string } }
export interface Flashcard { q: string; a: string }

export const GLOSSARIES: Record<string, GlossaryEntry[]> = {
  calculus: [
    {
      "term": {
        "en": "Unconstrained minimization",
        "hu": "Feltétel nélküli minimalizálás"
      },
      "def": {
        "en": "Finding $\\min f(\\mathbf{x})$ over $\\mathbb{R}^n$ with no constraints. Calculus reduces it to locating and classifying stationary points.",
        "hu": "A $\\min f(\\mathbf{x})$ keresése $\\mathbb{R}^n$-en, feltételek nélkül. Az analízis ezt a stacionárius pontok megkeresésére és osztályozására vezeti vissza."
      }
    },
    {
      "term": {
        "en": "First-order condition $\\nabla f=\\mathbf{0}$",
        "hu": "Elsőrendű feltétel $\\nabla f=\\mathbf{0}$"
      },
      "def": {
        "en": "At any interior local minimum (or maximum) the gradient vanishes: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Such $\\mathbf{x}^*$ is a stationary (critical) point — necessary, not sufficient.",
        "hu": "Bármely belső lokális minimumban (vagy maximumban) a gradiens eltűnik: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Az ilyen $\\mathbf{x}^*$ stacionárius (kritikus) pont — szükséges, de nem elégséges."
      }
    },
    {
      "term": {
        "en": "Hessian classification",
        "hu": "Hesse-mátrix szerinti osztályozás"
      },
      "def": {
        "en": "At a stationary point the Hessian $\\nabla^2 f$ decides the type: positive definite ⇒ minimum, negative definite ⇒ maximum, indefinite ⇒ saddle, semidefinite ⇒ degenerate (inconclusive).",
        "hu": "Stacionárius pontban a Hesse-mátrix $\\nabla^2 f$ dönti el a típust: pozitív definit ⇒ minimum, negatív definit ⇒ maximum, indefinit ⇒ nyeregpont, szemidefinit ⇒ elfajuló (nem dönthető el)."
      }
    },
    {
      "term": {
        "en": "2×2 definiteness test",
        "hu": "2×2 definitségi teszt"
      },
      "def": {
        "en": "For $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$: positive definite iff $a>0$ and $ac-b^2>0$; a negative determinant $ac-b^2<0$ means a saddle.",
        "hu": "A $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$-re: pozitív definit, ha $a>0$ és $ac-b^2>0$; negatív determináns $ac-b^2<0$ nyeregpontot jelent."
      }
    },
    {
      "term": {
        "en": "Convexity",
        "hu": "Konvexitás"
      },
      "def": {
        "en": "A convex $f$ (positive semidefinite Hessian everywhere) has any stationary point as a global minimum — no local traps. The ideal case for optimization.",
        "hu": "Egy konvex $f$ (mindenütt pozitív szemidefinit Hesse-mátrix) bármely stacionárius pontja globális minimum — nincsenek lokális csapdák. Az optimalizálás ideális esete."
      }
    }
  ],
  golden: [
    {
      "term": {
        "en": "Unimodal function",
        "hu": "Unimodális függvény"
      },
      "def": {
        "en": "A function with a single minimum on $[a,b]$ (strictly decreasing then increasing). Convexity implies it, but is not required. Golden section search needs only unimodality, not derivatives.",
        "hu": "Olyan függvény, amelynek egyetlen minimuma van $[a,b]$-n (előbb szigorúan csökken, majd nő). A konvexitás ezt maga után vonja, de nem szükséges. Az aranymetszéses kereséshez csak unimodalitás kell, derivált nem."
      }
    },
    {
      "term": {
        "en": "Golden section search",
        "hu": "Aranymetszéses keresés"
      },
      "def": {
        "en": "A derivative-free minimizer: like bisection but for minima. Keep two interior points $a<y<x<b$; if $f(x)>f(y)$ the minimum is in $[a,x]$, else in $[y,b]$. Repeat on the shrinking bracket.",
        "hu": "Derivált nélküli minimumkereső: mint a felezés, de minimumra. Tarts két belső pontot $a<y<x<b$; ha $f(x)>f(y)$, a minimum $[a,x]$-ben van, különben $[y,b]$-ben. Ismételd a zsugorodó intervallumon."
      }
    },
    {
      "term": {
        "en": "Golden ratio $r=(\\sqrt5-1)/2$",
        "hu": "Aranymetszés $r=(\\sqrt5-1)/2$"
      },
      "def": {
        "en": "The reduction ratio $r\\approx0.618$ is chosen so one of the new interior points coincides with a previous one — satisfying $r^2=1-r$ — so each step needs only **one** new function evaluation.",
        "hu": "Az $r\\approx0,618$ zsugorítási arányt úgy választjuk, hogy az egyik új belső pont egybeessen egy korábbival — teljesítve $r^2=1-r$-t — így minden lépés csak **egy** új függvénykiértékelést igényel."
      }
    },
    {
      "term": {
        "en": "One evaluation per step",
        "hu": "Egy kiértékelés lépésenként"
      },
      "def": {
        "en": "The golden ratio's self-similarity means the retained point can be reused, so after the first step only one new $f$-value is computed per iteration — the method's efficiency advantage.",
        "hu": "Az aranymetszés önhasonlósága miatt a megtartott pont újrahasználható, így az első lépés után iterációnként csak egy új $f$-értéket számolunk — ez a módszer hatékonysági előnye."
      }
    },
    {
      "term": {
        "en": "Linear convergence",
        "hu": "Lineáris konvergencia"
      },
      "def": {
        "en": "The bracket length shrinks by the factor $r\\approx0.618$ each step, so $|b_k-a_k|=r^k(b-a)$ — steady linear convergence, robust but not fast (no derivative info used).",
        "hu": "Az intervallum hossza lépésenként az $r\\approx0,618$ tényezővel csökken, így $|b_k-a_k|=r^k(b-a)$ — egyenletes lineáris konvergencia, robusztus, de nem gyors (nincs deriváltinformáció)."
      }
    },
    {
      "term": {
        "en": "Convergence guarantee (Thm 8.4)",
        "hu": "Konvergencia-garancia (8.4. tétel)"
      },
      "def": {
        "en": "For continuous unimodal $f$, golden section search always converges to the minimum point — unconditionally, like bisection for roots.",
        "hu": "Folytonos unimodális $f$-re az aranymetszéses keresés mindig a minimumponthoz konvergál — feltétel nélkül, mint a felezés a gyökökre."
      }
    }
  ],
  simplex: [
    {
      "term": {
        "en": "Simplex (geometric)",
        "hu": "Szimplex (geometriai)"
      },
      "def": {
        "en": "The convex hull of $n+1$ affinely independent points in $\\mathbb{R}^n$: a segment ($n=1$), triangle ($n=2$), tetrahedron ($n=3$). Its vertices carry the function values that drive the search.",
        "hu": "$n+1$ affinul független pont konvex burka $\\mathbb{R}^n$-ben: szakasz ($n=1$), háromszög ($n=2$), tetraéder ($n=3$). Csúcsai hordozzák a keresést vezérlő függvényértékeket."
      }
    },
    {
      "term": {
        "en": "Simplex method (derivative-free)",
        "hu": "Szimplex módszer (derivált nélküli)"
      },
      "def": {
        "en": "Minimize $f$ by moving a simplex downhill: find the worst vertex, reflect it through the centroid of the rest; if that fails, shrink the simplex toward its best vertex. Uses only function values — no gradients.",
        "hu": "Minimalizáld $f$-et a szimplex lefelé mozgatásával: keresd a legrosszabb csúcsot, tükrözd a többi súlypontján át; ha ez nem sikerül, zsugorítsd a szimplexet a legjobb csúcsa felé. Csak függvényértékeket használ — gradienst nem."
      }
    },
    {
      "term": {
        "en": "Reflection",
        "hu": "Tükrözés"
      },
      "def": {
        "en": "Replace the worst vertex $\\mathbf{x}^{(j)}$ by its mirror image $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ across the centroid $\\mathbf{x}_c$ of the remaining vertices — the basic downhill move.",
        "hu": "Cseréld a legrosszabb $\\mathbf{x}^{(j)}$ csúcsot a tükörképére $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ a maradék csúcsok $\\mathbf{x}_c$ súlypontján át — az alap lefelé lépés."
      }
    },
    {
      "term": {
        "en": "Shrink",
        "hu": "Zsugorítás"
      },
      "def": {
        "en": "When reflection does not improve on the worst value, pull every vertex halfway toward the best vertex: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. The simplex contracts around the best point.",
        "hu": "Ha a tükrözés nem javít a legrosszabb értéken, húzd minden csúcsot félútig a legjobb csúcs felé: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. A szimplex a legjobb pont köré húzódik össze."
      }
    },
    {
      "term": {
        "en": "Nelder–Mead method",
        "hu": "Nelder–Mead-módszer"
      },
      "def": {
        "en": "An adaptive variant: after reflecting the worst vertex, **expand** (if the reflection is the new best), **contract** (if it is poor), or shrink — letting the simplex stretch into descent directions and squeeze near the minimum.",
        "hu": "Adaptív változat: a legrosszabb csúcs tükrözése után **tágíts** (ha a tükrözés az új legjobb), **összehúz** (ha gyenge), vagy zsugoríts — így a szimplex megnyúlik a leszálló irányokba és összeszorul a minimum közelében."
      }
    },
    {
      "term": {
        "en": "Expansion & contraction",
        "hu": "Tágítás és összehúzás"
      },
      "def": {
        "en": "Expansion pushes further past a successful reflection ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); contraction pulls back toward the centroid when reflection is poor. These make Nelder–Mead faster than the plain simplex method.",
        "hu": "A tágítás tovább lök egy sikeres tükrözésen túl ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); az összehúzás visszahúz a súlypont felé, ha a tükrözés gyenge. Ezek teszik a Nelder–Mead-et gyorsabbá a sima szimplex módszernél."
      }
    },
    {
      "term": {
        "en": "Stopping criteria",
        "hu": "Megállási feltételek"
      },
      "def": {
        "en": "Stop when the simplex is small (longest edge $<\\varepsilon$), when the vertex-value spread (std. dev. $\\sigma$) is small, or when successive centroid values change by $<\\varepsilon$. The centroid approximates the minimizer.",
        "hu": "Állj meg, ha a szimplex kicsi (leghosszabb él $<\\varepsilon$), ha a csúcsértékek szórása ($\\sigma$) kicsi, vagy ha az egymást követő súlypont-értékek $<\\varepsilon$-nal változnak. A súlypont közelíti a minimumhelyet."
      }
    }
  ],
  gradient: [
    {
      "term": {
        "en": "Steepest descent direction (Thm 8.8)",
        "hu": "Legmeredekebb leszállási irány (8.8. tétel)"
      },
      "def": {
        "en": "Among all unit directions, the directional derivative of $f$ at $\\mathbf{p}$ is most negative along $-f'(\\mathbf{p})$. So the negative gradient points in the locally steepest downhill direction.",
        "hu": "Minden egységirány közül $f$ iránymenti deriváltja $\\mathbf{p}$-ben a $-f'(\\mathbf{p})$ mentén a legnegatívabb. Tehát a negatív gradiens a lokálisan legmeredekebb lefelé irányba mutat."
      }
    },
    {
      "term": {
        "en": "Descent direction",
        "hu": "Leszállási irány"
      },
      "def": {
        "en": "$\\mathbf{u}$ is a descent direction at $\\mathbf{p}$ if $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ for small $t>0$ — equivalently $f'(\\mathbf{p})^T\\mathbf{u}<0$. The negative gradient always qualifies.",
        "hu": "$\\mathbf{u}$ leszállási irány $\\mathbf{p}$-ben, ha $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ kis $t>0$-ra — ekvivalensen $f'(\\mathbf{p})^T\\mathbf{u}<0$. A negatív gradiens mindig ilyen."
      }
    },
    {
      "term": {
        "en": "Gradient (steepest descent) method",
        "hu": "Gradiens- (legmeredekebb leszállás) módszer"
      },
      "def": {
        "en": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — repeatedly step along the negative gradient with step size $\\alpha_k$. A first-order method: only gradients, no Hessian.",
        "hu": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — ismételten lépünk a negatív gradiens mentén $\\alpha_k$ lépésközzel. Elsőrendű módszer: csak gradiens, nincs Hesse-mátrix."
      }
    },
    {
      "term": {
        "en": "Step size $\\alpha_k$",
        "hu": "Lépésköz $\\alpha_k$"
      },
      "def": {
        "en": "Constant step: $\\alpha_k=h/\\|f'\\|_2$ gives fixed distance $h$ per step (so accuracy is limited to $\\sim h$). Better: a line search picking $\\alpha_k$ to minimize $f$ along the ray (the optimal/steepest gradient method).",
        "hu": "Állandó lépés: $\\alpha_k=h/\\|f'\\|_2$ rögzített $h$ távolságot ad lépésenként (így a pontosság $\\sim h$-ra korlátozott). Jobb: vonalmenti keresés, amely $\\alpha_k$-t a sugár mentén $f$ minimalizálására választja (optimális gradiens módszer)."
      }
    },
    {
      "term": {
        "en": "Zig-zag / slow convergence",
        "hu": "Cikcakk / lassú konvergencia"
      },
      "def": {
        "en": "Successive steps are orthogonal (each $-f'$ is perpendicular to the contour line), so on elongated valleys the iterates zig-zag and converge only linearly — slowly for ill-conditioned problems.",
        "hu": "Az egymást követő lépések merőlegesek (minden $-f'$ merőleges a szintvonalra), így megnyúlt völgyekben az iteráltak cikcakkban haladnak és csak lineárisan konvergálnak — rosszul kondicionált feladatokon lassan."
      }
    },
    {
      "term": {
        "en": "Gradient ⟂ contour lines",
        "hu": "Gradiens ⟂ szintvonalak"
      },
      "def": {
        "en": "The gradient is always perpendicular to the level curve through a point, so each gradient step crosses the contours at right angles — the geometric picture behind the zig-zag path.",
        "hu": "A gradiens mindig merőleges az adott ponton átmenő szintvonalra, így minden gradienslépés derékszögben metszi a szintvonalakat — ez a cikcakk pálya geometriai képe."
      }
    }
  ],
  linsys: [
    {
      "term": {
        "en": "Quadratic minimization ↔ linear system",
        "hu": "Kvadratikus minimalizálás ↔ lineáris rendszer"
      },
      "def": {
        "en": "For symmetric $\\mathbf{A}$, $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ has gradient $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. So $g'(\\mathbf{x})=0$ is exactly the linear system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$.",
        "hu": "Szimmetrikus $\\mathbf{A}$-ra a $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ gradiense $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. Így $g'(\\mathbf{x})=0$ éppen az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ lineáris rendszer."
      }
    },
    {
      "term": {
        "en": "SPD ⇒ unique minimizer (Thm 8.10)",
        "hu": "SPD ⇒ egyetlen minimumhely (8.10. tétel)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is symmetric positive definite, $g$ has a global minimum at $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$. Hence solving $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ is equivalent to minimizing $g$ — solvable by gradient descent.",
        "hu": "Ha $\\mathbf{A}$ szimmetrikus pozitív definit, $g$-nek globális minimuma van az $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$ pontban. Így $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ megoldása egyenértékű $g$ minimalizálásával — gradiens módszerrel megoldható."
      }
    },
    {
      "term": {
        "en": "Residual = negative gradient",
        "hu": "Reziduum = negatív gradiens"
      },
      "def": {
        "en": "The residual $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ is the steepest-descent direction. Each step moves along $\\mathbf{r}^{(k)}$.",
        "hu": "A reziduum $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ a legmeredekebb leszállási irány. Minden lépés az $\\mathbf{r}^{(k)}$ mentén halad."
      }
    },
    {
      "term": {
        "en": "Exact line search (optimal step)",
        "hu": "Pontos vonalmenti keresés (optimális lépés)"
      },
      "def": {
        "en": "For a quadratic, the best step along $\\mathbf{r}^{(k)}$ has a closed form: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — minimizing $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$ exactly.",
        "hu": "Kvadratikusra a legjobb lépés $\\mathbf{r}^{(k)}$ mentén zárt alakú: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — pontosan minimalizálja $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$-t."
      }
    },
    {
      "term": {
        "en": "Optimal gradient iteration",
        "hu": "Optimális gradiens iteráció"
      },
      "def": {
        "en": "Repeat: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ as above, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. Converges for SPD $\\mathbf{A}$ but slowly (linearly) when $\\mathbf{A}$ is ill-conditioned — motivating conjugate gradients.",
        "hu": "Ismételd: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ a fenti, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. SPD $\\mathbf{A}$-ra konvergál, de lassan (lineárisan), ha $\\mathbf{A}$ rosszul kondicionált — ez motiválja a konjugált gradiens módszert."
      }
    },
    {
      "term": {
        "en": "Local = global for quadratics (Cor 8.11)",
        "hu": "Lokális = globális kvadratikusra (8.11)"
      },
      "def": {
        "en": "A quadratic function with a local minimum (maximum) has it as a global minimum (maximum) — no spurious local optima, so gradient descent on $g$ cannot get stuck.",
        "hu": "Egy kvadratikus függvény lokális minimuma (maximuma) egyben globális minimum (maximum) — nincsenek hamis lokális szélsőértékek, így a $g$-n futó gradiens módszer nem akadhat el."
      }
    }
  ],
  newton: [
    {
      "term": {
        "en": "Newton's method for minimization",
        "hu": "Newton-módszer minimalizálásra"
      },
      "def": {
        "en": "Minimize $f$ by minimizing its local quadratic (Taylor) model: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — using both gradient and Hessian.",
        "hu": "Minimalizáld $f$-et a lokális kvadratikus (Taylor-) modelljének minimalizálásával: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — a gradienst és a Hesse-mátrixot is használva."
      }
    },
    {
      "term": {
        "en": "Equivalent to Newton on $f'=\\mathbf{0}$",
        "hu": "Ekvivalens a Newton-módszerrel $f'=\\mathbf{0}$-ra"
      },
      "def": {
        "en": "The iteration is exactly Newton's method for the nonlinear system $f'(\\mathbf{x})=\\mathbf{0}$ — finding a stationary point. The Hessian plays the role of the Jacobian.",
        "hu": "Az iteráció pontosan a Newton-módszer az $f'(\\mathbf{x})=\\mathbf{0}$ nemlineáris rendszerre — stacionárius pont keresése. A Hesse-mátrix tölti be a Jacobi-mátrix szerepét."
      }
    },
    {
      "term": {
        "en": "Local quadratic convergence (Thm 8.13)",
        "hu": "Lokális kvadratikus konvergencia (8.13. tétel)"
      },
      "def": {
        "en": "If $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, then $\\mathbf{p}$ is a local minimum and Newton's iteration converges to it quadratically from nearby starts.",
        "hu": "Ha $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ és $f''(\\mathbf{p})$ pozitív definit, akkor $\\mathbf{p}$ lokális minimum, és a Newton-iteráció közeli kezdőpontból kvadratikusan konvergál hozzá."
      }
    },
    {
      "term": {
        "en": "Exact in one step for quadratics",
        "hu": "Kvadratikusra egy lépésben pontos"
      },
      "def": {
        "en": "When $f$ is quadratic with positive-definite Hessian, Newton's method reaches the exact minimizer in a single step — the quadratic model equals $f$.",
        "hu": "Ha $f$ kvadratikus, pozitív definit Hesse-mátrixszal, a Newton-módszer egyetlen lépésben eléri a pontos minimumhelyet — a kvadratikus modell megegyezik $f$-fel."
      }
    },
    {
      "term": {
        "en": "Degenerate Hessian ⇒ linear",
        "hu": "Elfajuló Hesse ⇒ lineáris"
      },
      "def": {
        "en": "If the Hessian at the minimum is only semidefinite ($f''(\\mathbf{p})=\\mathbf{0}$ in the worst case), Newton may still converge but only linearly — the quadratic speed needs a positive-definite Hessian.",
        "hu": "Ha a Hesse-mátrix a minimumban csak szemidefinit (legrosszabb esetben $f''(\\mathbf{p})=\\mathbf{0}$), a Newton konvergálhat, de csak lineárisan — a kvadratikus sebességhez pozitív definit Hesse kell."
      }
    },
    {
      "term": {
        "en": "Cost vs gradient descent",
        "hu": "Költség vs gradiens módszer"
      },
      "def": {
        "en": "Each step needs the full Hessian and a linear solve ($O(n^3)$), far more than a gradient step — but it converges in far fewer iterations near the minimum. Quasi-Newton methods approximate the Hessian to balance the two.",
        "hu": "Minden lépés a teljes Hesse-mátrixot és egy lineáris megoldást igényel ($O(n^3)$), sokkal többet egy gradienslépésnél — de a minimum közelében sokkal kevesebb iteráció alatt konvergál. A kvázi-Newton módszerek közelítik a Hesse-mátrixot a kettő egyensúlyozására."
      }
    }
  ],
  quasinewton: [
    {
      "term": {
        "en": "Quasi-Newton method",
        "hu": "Kvázi-Newton módszer"
      },
      "def": {
        "en": "Newton's minimization step $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$ where $\\mathbf{A}^{(k)}\\approx f''$ and $\\mathbf{v}^{(k)}\\approx f'$ are cheap approximations — avoiding exact Hessians.",
        "hu": "A Newton-minimalizálási lépés $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$, ahol $\\mathbf{A}^{(k)}\\approx f''$ és $\\mathbf{v}^{(k)}\\approx f'$ olcsó közelítések — elkerülve a pontos Hesse-mátrixot."
      }
    },
    {
      "term": {
        "en": "Finite-difference Hessian",
        "hu": "Differencia-Hesse"
      },
      "def": {
        "en": "One option: approximate $f'$ and $f''$ by forward/second-difference formulas. Simple but costs $\\sim n^2$ function evaluations per step.",
        "hu": "Egy lehetőség: közelítsük $f'$-t és $f''$-t előre/második differencia képletekkel. Egyszerű, de lépésenként $\\sim n^2$ függvénykiértékelésbe kerül."
      }
    },
    {
      "term": {
        "en": "Broyden update for minimization",
        "hu": "Broyden-frissítés minimalizálásra"
      },
      "def": {
        "en": "Apply Broyden's rank-one secant update (from §2.13) to approximate the Hessian while solving $f'(\\mathbf{x})=\\mathbf{0}$. Drawback: the resulting $\\mathbf{A}^{(k)}$ is generally neither symmetric nor positive definite.",
        "hu": "Alkalmazd Broyden rang-egy szelő-frissítését (a §2.13-ból) a Hesse-mátrix közelítésére $f'(\\mathbf{x})=\\mathbf{0}$ megoldása közben. Hátrány: a kapott $\\mathbf{A}^{(k)}$ általában se nem szimmetrikus, se nem pozitív definit."
      }
    },
    {
      "term": {
        "en": "Secant equation",
        "hu": "Szelő-egyenlet"
      },
      "def": {
        "en": "The Hessian approximation should satisfy $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ with $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — the curvature condition that ties the update to observed gradient change.",
        "hu": "A Hesse-közelítés teljesítse $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$-t, ahol $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — a görbületi feltétel, amely a frissítést a megfigyelt gradiensváltozáshoz köti."
      }
    },
    {
      "term": {
        "en": "PSB update (Thm 8.17)",
        "hu": "PSB-frissítés (8.17. tétel)"
      },
      "def": {
        "en": "The Powell-symmetric-Broyden update keeps $\\mathbf{A}^{(k)}$ **symmetric** while still satisfying the secant equation. Under the usual conditions the resulting quasi-Newton iteration converges **superlinearly**.",
        "hu": "A Powell-szimmetrikus-Broyden frissítés **szimmetrikusan** tartja $\\mathbf{A}^{(k)}$-t, miközben teljesíti a szelő-egyenletet. A szokásos feltételek mellett a kapott kvázi-Newton iteráció **szuperlineárisan** konvergál."
      }
    },
    {
      "term": {
        "en": "Keeping $\\mathbf{A}^{(k)}$ positive definite",
        "hu": "$\\mathbf{A}^{(k)}$ pozitív definitségének megőrzése"
      },
      "def": {
        "en": "For a genuine descent step the Hessian model should stay positive definite. Updating a factor $\\mathbf{M}$ with $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$ guarantees this — the idea behind BFGS-type methods.",
        "hu": "Valódi leszállási lépéshez a Hesse-modellnek pozitív definitnek kell maradnia. Egy $\\mathbf{M}$ tényező frissítése $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$-vel ezt garantálja — ez a BFGS-típusú módszerek ötlete."
      }
    }
  ],
}

export const FLASHCARDS: Record<string, Flashcard[]> = {
  calculus: [
    {"q":"In the context of multi-variable calculus, what is the matrix $f''(\\mathbf{x})$ commonly called?","a":"The Hessian matrix."},
    {"q":"What is the entry in the $i$-th row and $j$-th column of a Hessian matrix $f''(\\mathbf{x})$?","a":"$\\frac{\\partial^2 f}{\\partial x_i, \\partial x_j}(\\mathbf{x})$"},
    {"q":"A function $f$ maps from $\\mathbb{R}^n$ to which set to allow for the calculation of a Hessian matrix?","a":"$\\mathbb{R}$"},
    {"q":"What type of derivatives are located on the main diagonal of the Hessian matrix?","a":"Pure second-order partial derivatives (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$)."},
    {"q":"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ has a local extremum at point $\\mathbf{a}$, what must $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ equal for all $i = 1, \\dots, n$?","a":"$0$"},
    {"q":"The first-order necessary condition for a local extremum states that the gradient vector $f'(\\mathbf{a})$ must be equal to _____.","a":"The zero vector $\\mathbf{0}$."},
    {"q":"Which smoothness class must a function $f$ belong to for the Hessian-based sufficient condition for extrema to apply?","a":"$C^2$ (twice continuously differentiable)."},
    {"q":"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is positive definite, what kind of extremum does $f$ have at $\\mathbf{a}$?","a":"A local minimum."},
    {"q":"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is negative definite, what kind of extremum does $f$ have at $\\mathbf{a}$?","a":"A local maximum."},
    {"q":"For a two-variable function $f(x, y)$, what are the two necessary first-order equations for a local extremum at $(a, b)$?","a":"$\\frac{\\partial f}{\\partial x}(a, b) = 0$ and $\\frac{\\partial f}{\\partial y}(a, b) = 0$."},
    {"q":"In the second derivative test for two variables, how is the discriminant $D(a, b)$ defined?","a":"$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$."},
    {"q":"What condition on the discriminant $D(a, b)$ indicates that a function $f(x, y)$ has a local extremum at $(a, b)$, provided the first derivatives are zero?","a":"$D(a, b) > 0$"},
    {"q":"If the discriminant $D(a, b)$ is less than zero ($D < 0$) at a stationary point, what is the conclusion regarding a local extremum?","a":"The function $f$ has no extremum at $(a, b)$."},
    {"q":"To identify a local maximum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?","a":"Negative ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$)."},
    {"q":"To identify a local minimum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?","a":"Positive ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$)."},
    {"q":"Formula: What is the first entry ($1, 1$) of the Hessian matrix $f''(\\mathbf{x})$?","a":"$\\frac{\\partial^2 f}{\\partial x_1^2}(\\mathbf{x})$"},
    {"q":"Formula: What is the entry in the last row and last column of an $n$-variable Hessian matrix?","a":"$\\frac{\\partial^2 f}{\\partial x_n^2}(\\mathbf{x})$"},
    {"q":"According to Theorem 8.1, what is the necessary condition for a function $f$ to have a local extremum at $\\mathbf{a}$ regarding its partial derivatives?","a":"All partial derivatives $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ must equal zero."},
    {"q":"In Theorem 8.2, which property of $f$ ensures that the mixed partial derivatives $\\frac{\\partial^2 f}{\\partial x \\partial y}$ and $\\frac{\\partial^2 f}{\\partial y \\partial x}$ are equal?","a":"The assumption that $f \\in C^2$."},
    {"q":"If $D(a, b) > 0$, the function $f(x, y)$ is guaranteed to have a(n) _____ at that point, assuming the first-order conditions are met.","a":"Local extremum"},
    {"q":"For $n$ variables, if $f''(\\mathbf{a})$ is neither positive nor negative definite at a point where $f'(\\mathbf{a})=0$, what can be said about the extremum? (Note: Context restricted to the provided source material's explicit rules).","a":"The provided theorems do not explicitly define the outcome for indefinite matrices."},
    {"q":"What is the dimension of the Hessian matrix for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$?","a":"$n \\times n$"},
    {"q":"Identify the subtrahend in the formula for $D(a, b)$: $D(a, b) = f_{xx}f_{yy} - (\\dots)^2$.","a":"The mixed partial derivative $\\frac{\\partial^2 f}{\\partial x \\, \\partial y}(a, b)$."},
    {"q":"Term: Stationary Point (Implicit)","a":"Definition: A point $\\mathbf{a}$ where the first derivative (gradient) of a function is the zero vector, $f'(\\mathbf{a}) = \\mathbf{0}$."},
    {"q":"True or False: If $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ for all $i$, $f$ must have a local extremum at $\\mathbf{a}$.","a":"False (it is a necessary but not sufficient condition)."},
    {"q":"For a function of two variables, if $f_{xx}(a, b) = 4$, $f_{yy}(a, b) = 3$, and $f_{xy}(a, b) = 1$, what is the value of $D(a, b)$?","a":"$11$ (calculated as $4 \\cdot 3 - 1^2$)."},
    {"q":"If $D(a, b) = 11$ and $f_{xx} = 4$ at a stationary point, what type of extremum is present?","a":"Local minimum."},
    {"q":"In the Hessian matrix, the entry $\\frac{\\partial^2 f}{\\partial x_1, \\partial x_2}$ is located in which row and column?","a":"Row 1, Column 2."},
    {"q":"The theorem states that if $D(a, b) < 0$, $f$ has _____ extremum at $(a, b)$.","a":"No"},
    {"q":"In the formula for the Hessian matrix, what is represented by the ellipsis ($\\dots$) in the first row?","a":"The second-order partial derivatives with respect to $x_1$ and subsequent variables up to $x_n$."},
    {"q":"What is the specific requirement for the Hessian matrix to be used to prove a local maximum at point $\\mathbf{a}$ for $f \\in \\mathbb{R}^n$?","a":"The Hessian matrix $f''(\\mathbf{a})$ must be negative definite."},
    {"q":"How does Theorem 8.2 classify the point $(a, b)$ if $\\frac{\\partial f}{\\partial x} = 0$, $\\frac{\\partial f}{\\partial y} = 0$, and $D(a, b) < 0$?","a":"As a point with no local extremum."},
    {"q":"In $n$-dimensional space, the derivative $f'(\\mathbf{a})$ refers to a vector of _____ partial derivatives.","a":"First-order"},
    {"q":"If a function is only partially differentiable but not $C^2$, can the second derivative test using the Hessian be applied?","a":"No, the theorems require $f \\in C^2$ for the Hessian-based sufficient conditions."},
    {"q":"What mathematical object is $f'(\\mathbf{a})$ in the context of Theorem 8.1?","a":"The gradient vector (or the first derivative vector)."},
    {"q":"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$, the function has a local _____.","a":"Minimum"},
    {"q":"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, the function has a local _____.","a":"Maximum"},
    {"q":"How many separate equations must be satisfied for the first-order necessary condition of an $n$-variable function?","a":"$n$ equations."},
    {"q":"The notation $f: \\mathbb{R}^n \\to \\mathbb{R}$ implies the function takes a _____ as input and returns a real number.","a":"Vector (of $n$ components)"},
    {"q":"According to the source, if $f'(\\mathbf{a}) = \\mathbf{0}$, $\\mathbf{a}$ is a candidate for a _____.","a":"Local extremum"},
    {"q":"Why is the term $\\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$ subtracted in the calculation of $D(a, b)$?","a":"It is part of the determinant calculation for the $2 \\times 2$ Hessian matrix."},
    {"q":"If the Hessian $f''(\\mathbf{a})$ is negative definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?","a":"Negative (less than zero)."},
    {"q":"If the Hessian $f''(\\mathbf{a})$ is positive definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?","a":"Positive (greater than zero)."},
    {"q":"Theorem 8.2 is described as a _____ of Theorem 8.1 for the case $n=2$.","a":"Special case"},
    {"q":"What is the primary purpose of the Hessian matrix in optimization according to the source material?","a":"To determine the nature of local extrema (minimum or maximum)."},
    {"q":"In Theorem 8.1, the condition $f'(\\mathbf{a}) = \\mathbf{0}$ is checked _____ the definiteness of the Hessian.","a":"Before (or simultaneously with)"},
    {"q":"Concept: $D(a, b)$ in Two Variables","a":"The discriminant of the function at $(a, b)$, used to identify the presence and type of local extrema."},
    {"q":"Can a function have a local extremum at a point where a partial derivative is non-zero?","a":"No, the necessary condition requires all partial derivatives to be zero."},
    {"q":"For a two-variable function, if $f_{xx} = -2$, $f_{yy} = -5$, and $f_{xy} = 0$ at a stationary point, what type of extremum is found?","a":"Local maximum (since $D = 10 > 0$ and $f_{xx} = -2 < 0$)."},
    {"q":"The provided source material is part of a course on which mathematical discipline?","a":"Numerical Analysis (Szélsőértékszámítás / Minimization of Functions)."},
    {"q":"What is the symbol used for the Hessian matrix of $f$ in the provided text?","a":"$f''(\\mathbf{x})$"},
    {"q":"In the notation $\\frac{\\partial^2 f}{\\partial x_n, \\partial x_1}(\\mathbf{x})$, which variable was the function differentiated with respect to first?","a":"$x_1$"},
    {"q":"The second derivative test using $D(a, b)$ fails to provide a conclusion if $D(a, b)$ equals _____.","a":"$0$"}
  ],
  golden: [
    {"q":"What is the primary requirement for a function $f$ to be considered unimodal on the interval $[a, b]$?","a":"The function must be continuous and have a unique local minimum in the interval $[a, b]$."},
    {"q":"Is convexity a necessary condition for a function to be unimodal?","a":"No, convexity is sufficient but not necessary for a function to be unimodal."},
    {"q":"In the golden section search method, if $f(x) > f(y)$ where $a < y < x < b$, which interval is chosen for the next step?","a":"The interval $[a, x]$ is chosen."},
    {"q":"In the golden section search method, if $f(x) \\leq f(y)$ where $a < y < x < b$, which interval is chosen for the next step?","a":"The interval $[y, b]$ is chosen."},
    {"q":"How does the golden section search method define points $x$ and $y$ relative to the interval $[a, b]$ and a ratio $r$?","a":"$x = a + r(b - a)$ and $y = a + (1 - r)(b - a)$."},
    {"q":"What constraint must be placed on the ratio $r$ to ensure that $x > y$ in the golden section search method?","a":"The ratio $r$ must satisfy $0.5 < r < 1$."},
    {"q":"The golden section search method is similar to which root-finding method in its approach to narrowing intervals?","a":"It is similar to the bisection method."},
    {"q":"What is the primary motivation for selecting $r$ specifically as the golden section ratio?","a":"It allows one of the new mesh points to coincide with a previous mesh point, requiring only one new function evaluation per step."},
    {"q":"If the next interval is $[a', b'] = [y, b]$, what is the specific requirement for the new point $y'$ to optimize evaluations?","a":"The requirement is that $y' = x$."},
    {"q":"Which quadratic equation must the ratio $r$ satisfy in the golden section search method?","a":"It must satisfy $r^2 + r - 1 = 0$."},
    {"q":"What is the exact value of the positive solution for $r$ in the golden section search method?","a":"$r = \\frac{\\sqrt{5} - 1}{2}$."},
    {"q":"What is the approximate decimal value of the golden section ratio $r$?","a":"The value is approximately $0.61834$."},
    {"q":"What algebraic relationship involving $r$ and $(1-r)$ defines the golden section ratio?","a":"The relationship is $\\frac{r}{1 - r} = \\frac{1}{r}$."},
    {"q":"What is the formula for the length of the interval after $n$ steps of the golden section search method?","a":"The length is $(b - a)r^n$."},
    {"q":"Formula: How many steps $n$ are required to reach a tolerance $\\varepsilon$ in golden section search?","a":"$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r}$."},
    {"q":"If the minimum point $p$ is located in the interval $[a, x]$, what condition is placed on $x'$ and $y$ to maintain evaluation efficiency?","a":"The condition is that $x' = y$."},
    {"q":"According to Theorem 8.4, what happens to the golden section search method if the function $f \\in C[a, b]$ is unimodal?","a":"The method converges to the unique minimum point of the function $f$."},
    {"q":"What is typically the final output of the golden section search algorithm to approximate the minimum point?","a":"The output is the midpoint of the final interval reached after $n$ steps."},
    {"q":"In the example function $f(x) = x^2 - 0.8x + 1$, what is the exact minimum point $p$?","a":"The minimum point is $p = 0.4$."},
    {"q":"For the function $f(x) = x^2 - 0.8x + 1$ on $[-1, 2]$ with $\\varepsilon = 0.005$, how many steps $n$ were theoretically required?","a":"Approximately $13.29$ steps were required."},
    {"q":"In the example provided, what was the approximate minimum value produced by the algorithm after 14 iterations?","a":"The value was $0.3995535068$."},
    {"q":"In Table 8.1, what were the initial interval bounds ($a_0, b_0$) used for the search?","a":"$[-1.0000000000, 2.0000000000]$."},
    {"q":"The points $x$ and $y$ are chosen such that the lengths of which two sub-intervals are identical?","a":"The intervals $[a, x]$ and $[y, b]$."},
    {"q":"If $f$ is continuous and unimodal on $[a, b]$, does the golden section search method always converge?","a":"Yes, it is guaranteed to converge to the minimum point."},
    {"q":"In golden section search, $y$ is defined as $a + (1 - r)(b - a)$. What does $(1 - r)$ approximately equal?","a":"It approximately equals $0.38196$."},
    {"q":"Term: Unimodal Function","a":"Definition: A continuous function on an interval $[a, b]$ that possesses exactly one local minimum."},
    {"q":"How many new function evaluations are required in each step of the golden section search after the initialization?","a":"Only one new function value must be evaluated per step."},
    {"q":"What does the expression $x - a = b - y = r(b - a)$ imply about the symmetry of $x$ and $y$?","a":"The points $x$ and $y$ are placed symmetrically with respect to the midpoint of the interval $[a, b]$."},
    {"q":"The golden section search method reduces the interval size by a factor of _____ in every iteration.","a":"The factor is $r$ (approximately $0.618$)."},
    {"q":"If the initial interval is $[a, b]$, what is the length of the interval after the first reduction step?","a":"The length is $r(b - a)$."},
    {"q":"If a function is defined on $[-1, 1]$ as $f(x) = -1/x^2$, is the golden section search method applicable?","a":"No, because the function is not continuous at $x = 0$ and is not unimodal on that interval."},
    {"q":"Why is the requirement $x > y$ necessary for the algorithm's interval logic?","a":"It ensures that the interior points are distinct and create a valid overlapping structure for comparison."},
    {"q":"In the derivation of $r$, the expression $r = 1 - r + (1 - r)(1 - (1 - r))$ simplifies directly to which equation?","a":"It simplifies to $r = 1 - r + r - r^2$, which is $r^2 + r - 1 = 0$."},
    {"q":"What happens to the golden section search method if the function has multiple local minima?","a":"The method may converge to only one of the local minima or fail to correctly bracket a minimum if unimodality is violated."},
    {"q":"In the specific example, what was the length of the initial interval ($b_0 - a_0$)?","a":"The length was $3$."},
    {"q":"If $b - a = 1$ and $r \\approx 0.618$, what is the length of the interval after 2 steps?","a":"The length is $r^2$, which is approximately $0.382$."},
    {"q":"Is the golden section search method used for finding maximums or minimums of functions?","a":"It is primarily used to find the minimum of a unimodal function."},
    {"q":"To find the maximum of a unimodal function using this method, what modification should be made?","a":"One should search for the minimum of $-f(x)$."},
    {"q":"In Equation (8.2), if $r = 0.5$, what would happen to the points $x$ and $y$?","a":"The points $x$ and $y$ would coincide at the midpoint of the interval."},
    {"q":"Given the function $f(x) = |\\cos x|$ on $[0, 2]$, why is it considered unimodal?","a":"Because it has a unique local minimum in that interval (at $x = \\pi/2$)."},
    {"q":"What is the role of the tolerance $\\varepsilon$ in Algorithm 8.3?","a":"It serves as the stopping criterion, determining the maximum allowable length of the final interval."},
    {"q":"If $x'$ and $y'$ are the new points in the interval $[a', b']$, how are they derived from the original interval variables?","a":"They are calculated using the same ratio $r$ applied to the new interval boundaries $a'$ and $b'$."},
    {"q":"The sequence of intervals $[a_k, b_k]$ produced by the golden section search is described as being _____.","a":"Nested."},
    {"q":"When $f(x) > f(y)$, we know $p \\in [a, x]$. Why is $b$ discarded?","a":"Because for a unimodal function, if the value at $x$ is higher than at $y$ (where $y < x$), the minimum cannot be to the right of $x$."},
    {"q":"True or False: The golden section search requires the derivative of the function to be known.","a":"False, it only requires function evaluations."},
    {"q":"In the example table, as $k$ increases, what happens to the distance $b_k - a_k$?","a":"The distance decreases geometrically by a factor of $r$."},
    {"q":"If the tolerance $\\varepsilon$ is halved, how does the required number of steps $n$ change roughly?","a":"It increases by approximately $\\frac{\\log(0.5)}{\\log(r)} \\approx 1.44$ steps."},
    {"q":"The method is 'golden' because $r$ is the _____.","a":"Golden ratio (specifically the conjugate or reciprocal relationship)."},
    {"q":"If $a=0, b=10$, and $r=0.6$, what is the value of $x$?","a":"$x = 0 + 0.6(10 - 0) = 6$."},
    {"q":"If $a=0, b=10$, and $r=0.6$, what is the value of $y$?","a":"$y = 0 + (1 - 0.6)(10 - 0) = 4$."},
    {"q":"In the exercise $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$, what kind of point are we looking for?","a":"The minimum point of the function."},
    {"q":"If the algorithm terminates at iteration $k=14$ with $[a_{14}, b_{14}]$, how is the result $0.3995535068$ calculated?","a":"It is calculated as $\\frac{a_{14} + b_{14}}{2}$."},
    {"q":"Which of the following functions on $[0, 2]$ is likely unimodal based on the source text: $x^2$ or $x^2 - x^4$?","a":"$x^2$ is unimodal on $[0, 2]$."},
    {"q":"In step 0 of the example, $y_0$ is $0.1458980338$. In step 1, the interval becomes $[-1, 0.8541]$. What is the value of $x_1$?","a":"$x_1 = 0.1458980338$ (it matches the previous $y_0$)."},
    {"q":"In the golden section search, does the interval $[a, b]$ always contain the minimum $p$?","a":"Yes, the algorithm is designed such that the minimum point $p$ is always contained within each subsequent interval."}
  ],
  simplex: [
    {"q":"What is the mathematical definition of an $n$-dimensional simplex?","a":"The convex hull of $n + 1$ vectors in an $n$-dimensional space, where the differences between any $n$ vertices and the remaining vertex are linearly independent."},
    {"q":"In the context of simplexes, what geometric shape represents a 1-dimensional simplex?","a":"A line segment."},
    {"q":"What geometric shape corresponds to a 2-dimensional simplex?","a":"A triangle."},
    {"q":"What geometric shape corresponds to a 3-dimensional simplex?","a":"A tetrahedron."},
    {"q":"The simplex method is a numerical technique primarily used to approximate the _____ of a function of $n$ variables.","a":"minimum point"},
    {"q":"How are the vertices of a simplex usually indexed at the start of an iteration in the simplex method?","a":"They are ordered by their function values, such that $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},
    {"q":"In a simplex where $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$, which vector is designated as the 'worst' vertex?","a":"$\\mathbf{x}^{(n)}$"},
    {"q":"In the simplex method, what is the formula for calculating the center $\\mathbf{x}_c$ of the $n$ best vertices when $\\mathbf{x}^{(j)}$ is the worst vertex?","a":"$\\mathbf{x}_c := \\frac{1}{n} \\sum_{i=0, i \\neq j}^{n} \\mathbf{x}^{(i)}$"},
    {"q":"What is the formula used to calculate the reflected point $\\mathbf{x}_r$ in the simplex method?","a":"$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$"},
    {"q":"Under what condition is a reflection discarded and replaced by a 'shrink' operation in the basic simplex method?","a":"When the function value at the reflected point $f(\\mathbf{x}_r)$ is not smaller than the function value of the worst vertex $f(\\mathbf{x}^{(j)})$."},
    {"q":"What is the formula for recomputing a vertex $\\mathbf{x}^{(i)}$ when shrinking a simplex towards the best vertex $\\mathbf{x}^{(k)}$?","a":"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)})$"},
    {"q":"One stopping criterion for the simplex method is based on the simplex size. How is 'size' defined in this context?","a":"The length of the longest edge, calculated as $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\dots, n\\}$."},
    {"q":"How does the stopping criterion based on function values at the simplex centers operate?","a":"The iteration stops when the absolute difference between the function values at the centers of consecutive simplexes is less than a tolerance $\\varepsilon$ ($|f_{k+1} - f_k| < \\varepsilon$)."},
    {"q":"What statistical measure of function values at the vertices can be used as a stopping criterion for the simplex method?","a":"The standard deviation $\\sigma$ of the function values at the vertices."},
    {"q":"Formula: Standard deviation $\\sigma$ of vertex function values","a":"$\\sigma := \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}$, where $\\bar{f}$ is the average function value."},
    {"q":"Which point is typically used as the final approximation of the minimum point after the simplex method terminates?","a":"The center of the final simplex."},
    {"q":"The _____ method is a popular variant of the simplex method that incorporates reflection, expansion, and contraction.","a":"Nelder–Mead"},
    {"q":"In the Nelder–Mead method, how are the vertices indexed in each step?","a":"In non-decreasing order of their function values: $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},
    {"q":"What occurs in Case (i) of the Nelder–Mead method, where $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$?","a":"The worst vertex $\\mathbf{x}^{(n)}$ is replaced by the reflected point $\\mathbf{x}_r$, and the iteration continues."},
    {"q":"In Case (ii) of the Nelder–Mead method, if $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, what procedure is attempted next?","a":"Expansion of the simplex in the direction of the reflected point $\\mathbf{x}_r$."},
    {"q":"What is the formula for the expansion point $\\mathbf{x}_e$ in the Nelder–Mead method?","a":"$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c)$, where $\\alpha > 1$."},
    {"q":"In Nelder–Mead Case (ii), when is the expansion point $\\mathbf{x}_e$ accepted as the new vertex?","a":"If $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$; otherwise, the reflected point $\\mathbf{x}_r$ is accepted."},
    {"q":"In Case (iii) of the Nelder–Mead method, which operation is performed when $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$?","a":"Contraction of the simplex."},
    {"q":"What are the two possible formulas for the contraction point $\\mathbf{x}_z$ based on the relationship between $f(\\mathbf{x}^{(n)})$ and $f(\\mathbf{x}_r)$?","a":"$\\mathbf{x}_z = \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r)$, and $\\mathbf{x}_z = \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r)$."},
    {"q":"Under what condition is the Nelder–Mead contraction point $\\mathbf{x}_z$ accepted as the new vertex?","a":"If $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$."},
    {"q":"If the contraction operation in Nelder–Mead fails to find a better point, what fallback step is taken?","a":"The simplex is shrunk to half its size from its best point $\\mathbf{x}^{(0)}$."},
    {"q":"What is the constraint on the expansion parameter $\\alpha$ in the Nelder–Mead method?","a":"$\\alpha > 1$."},
    {"q":"What is the constraint on the contraction parameter $\\beta$ in the Nelder–Mead method?","a":"$0 < \\beta < 1$."},
    {"q":"Comparing the Simplex method and Nelder–Mead for function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, which generally converges faster?","a":"The Nelder–Mead method."},
    {"q":"According to Example 8.6, what are the coordinates of the global minimum for $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$?","a":"$(1, 0.5)$."},
    {"q":"In the Nelder–Mead algorithm, Case (i) represents the scenario where the reflected point is better than the _____ vertex but worse than the _____ vertex.","a":"second-to-worst ($x^{(n-1)}$); best ($x^{(0)}$)"},
    {"q":"If the Nelder–Mead expansion parameter is set to $\\alpha = 1$ and contraction parameter $\\beta = 1$, the method effectively reduces to the _____ method.","a":"simplex"},
    {"q":"True or False: The center point used in the standard simplex method reflection is the average of all vertices.","a":"False; it is the center of all vertices except the worst one."},
    {"q":"Concept: Derivative-free optimization","a":"Definition: Optimization methods that do not require information about the function's gradient, such as the simplex and Nelder–Mead methods."},
    {"q":"Formula: Center of the simplex $\\mathbf{x}_c$ (Nelder-Mead)","a":"$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$, assuming vertices are ordered by function value."},
    {"q":"In the Nelder–Mead shrink step, what is the formula for updating vertex $\\mathbf{x}^{(i)}$ for $i = 1, \\dots, n$?","a":"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)})$"},
    {"q":"In the Hungarian source, the simplex method is described as using the _____ of the vertices as an approximation for the minimum.","a":"súlypont (centroid/center of gravity)"},
    {"q":"What specific objective function is used in Example 8.6 and 8.7 to demonstrate the simplex methods?","a":"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},
    {"q":"In the provided examples, what starting vertices are used for the simplex?","a":"$(-2, 4)$, $(-1, 4)$, and $(-1.5, 5)$."},
    {"q":"What happens in Step 1 of the basic simplex method?","a":"The center of the best $n$ vertices is computed and the worst vertex is reflected over it."},
    {"q":"In Nelder-Mead, if $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, the algorithm identifies that the reflection was likely _____.","a":"too far from the worst vertex."},
    {"q":"What is the primary role of the $\\alpha$ parameter in Nelder-Mead?","a":"It determines the scale of the expansion in the direction of the reflected point."},
    {"q":"What is the primary role of the $\\beta$ parameter in Nelder-Mead?","a":"It determines the scale of the contraction when the reflected point is poor."},
    {"q":"The standard deviation $\\sigma$ stopping criterion interrupts the iteration when the values of the function at the vertices are _____.","a":"close enough to each other (i.e., $\\sigma$ is below a tolerance)."},
    {"q":"Nelder-Mead Case (i) occurs when $f(\\mathbf{x}_r)$ is strictly between _____ and _____.","a":"$f(\\mathbf{x}^{(0)})$ and $f(\\mathbf{x}^{(n-1)})$."},
    {"q":"Why is the order of indexing vertices updated in every step of the Nelder–Mead method?","a":"To ensure that $\\mathbf{x}^{(0)}$ always represents the best vertex and $\\mathbf{x}^{(n)}$ always represents the worst vertex for the logic of the next iteration."},
    {"q":"How does the Nelder-Mead expansion step hope to improve the search?","a":"By moving further in a direction that produced an exceptionally good reflected point."},
    {"q":"In the formula $x_r = 2x_c - x^{(j)}$, what does the constant $2$ represent geometrically?","a":"The reflected point is an equal distance away from the center as the original worst point, but on the opposite side."},
    {"q":"When applying the Nelder-Mead method to $f(x, y) = x^2 - y^2$, what behavior is expected based on the exercises?","a":"Observation of how the method behaves on a function that is not bounded below (a saddle point)."},
    {"q":"If a simplex becomes smaller than a predefined tolerance, which stopping criterion is being satisfied?","a":"The criterion based on the physical size (e.g., longest edge length) of the simplex."},
    {"q":"In the exercise on one-variable functions, the simplex method essentially reduces the 'simplex' to what geometric object?","a":"A line segment."}
  ],
  gradient: [
    {"q":"What is the geometric relationship between the gradient vector $f'(\\mathbf{p})$ and the level curve of $f$ passing through point $\\mathbf{p}$?","a":"The gradient vector is perpendicular (orthogonal) to the level curve's tangent line at that point."},
    {"q":"If $\\gamma(t)$ is a parametrization of a level curve $f(\\gamma(t)) = c$, what is the result of $\\frac{d}{dt} f(\\gamma(t))$?","a":"$0$"},
    {"q":"According to the chain rule, how is the derivative $\\frac{d}{dt} f(\\gamma(t))$ expressed using the gradient?","a":"$f'(\\gamma(t))^T \\gamma'(t)$"},
    {"q":"In the context of level curves, what does the expression $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ prove?","a":"The gradient is perpendicular to the direction vector of the tangent line at point $\\mathbf{p}$."},
    {"q":"In which direction does a continuously differentiable function $f$ decrease most rapidly at point $\\mathbf{p}$?","a":"In the direction of the negative gradient vector $-f'(\\mathbf{p})$."},
    {"q":"What is the minimum value of the directional derivative at point $\\mathbf{p}$ for a unit vector $\\mathbf{u}$?","a":"The minimum occurs when $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$."},
    {"q":"Term: Descent direction","a":"Definition: A direction $\\mathbf{u}$ where there exists $\\delta > 0$ such that $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ for all $0 < t < \\delta$."},
    {"q":"The gradient method is also known by what alternative name?","a":"The steepest descent method."},
    {"q":"What is the general iterative formula for the gradient method?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)})$"},
    {"q":"In the gradient method formula, what role does the parameter $\\alpha_k$ serve?","a":"It is a scaling parameter that determines the step size."},
    {"q":"What is the formula for the factor $\\alpha_k$ in the constant step size variant of the gradient method?","a":"$\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$"},
    {"q":"In the constant step size variant of the gradient method, what is the fixed distance between consecutive points?","a":"$h$"},
    {"q":"Why is the accuracy of the constant step size gradient method limited by the value $h$?","a":"Because the fixed step length generally prevents approximating the exact minimum more closely than the step size itself."},
    {"q":"How is the step size $\\alpha_k$ chosen in the optimal gradient method?","a":"It is chosen to minimize the function $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$ with respect to $t$."},
    {"q":"In the optimal gradient method, what kind of problem must be solved at each step to determine the step size?","a":"A one-dimensional (single variable) function minimization problem."},
    {"q":"In the optimal gradient method, where does the step forward from $\\mathbf{p}^{(k)}$ end relative to the level curves?","a":"It ends at a point where the search line is tangent to a level curve of $f$."},
    {"q":"What is the geometric relationship between consecutive search directions in the optimal gradient method?","a":"Consecutive directions are perpendicular (orthogonal) to each other."},
    {"q":"What is the local convergence rate of the optimal gradient method?","a":"Locally linearly convergent."},
    {"q":"Why can the convergence of the optimal gradient method be slow despite being 'optimal' at each step?","a":"The asymptotic error constant can be close to $1$."},
    {"q":"What visual behavior is characteristic of the optimal gradient method when approaching a minimum in a narrow 'valley'?","a":"The sequence zigzags slowly toward the minimum point."},
    {"q":"When using a constant step size $h=0.3$, how does the gradient method sequence behave near the minimum?","a":"It approximates the minimum slowly and oscillates around it."},
    {"q":"Which variant of the gradient method should be used if the analytical gradient vector is too expensive to compute?","a":"A numerical approximation variant using function values at small displacements."},
    {"q":"What is the formula for the $i$-th component $v_i^{(k)}$ of the approximated gradient vector?","a":"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},
    {"q":"In the numerical gradient approximation, what does the vector $\\mathbf{e}^{(i)}$ represent?","a":"The $i$-th unit vector."},
    {"q":"If the gradient vector is not used directly, what is the update rule for point $\\mathbf{p}^{(k+1)}$ using the approximate vector $\\mathbf{v}^{(k)}$?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$"},
    {"q":"Theorem: For $f \\in C^1$, the direction of the steepest descent at point $\\mathbf{p}$ is ____.","a":"$-f'(\\mathbf{p})$"},
    {"q":"In the function $f(x, y) = 4 - 3x^2 - y^2$, what is the gradient at $\\mathbf{p} = (0.5, 0.5)$?","a":"$f'(\\mathbf{p}) = (-3, -1)$"},
    {"q":"What defines the function $\\phi_k(t)$ used in the optimal gradient method?","a":"$\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$"},
    {"q":"Why do the steps in the optimal gradient method always result in perpendicular directions?","a":"The step ends at a point where the gradient is perpendicular to the current search direction."},
    {"q":"The constant step size factor $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ ensures the Euclidean distance between $\\mathbf{p}^{(k)}$ and $\\mathbf{p}^{(k+1)}$ is exactly ____.","a":"$h$"},
    {"q":"What happens to the gradient method's path if a function's level curves are very elongated?","a":"The method tends to zigzag and progress slowly toward the minimum."},
    {"q":"In the proof of the gradient's perpendicularity, what does $\\gamma'(t_0)$ represent?","a":"The direction vector of the tangent to the level curve at point $\\mathbf{p}$."},
    {"q":"Under what condition is the direction $\\mathbf{u}$ considered a descent at point $\\mathbf{p}$?","a":"The function value must decrease for sufficiently small steps in direction $\\mathbf{u}$ from $\\mathbf{p}$."},
    {"q":"How does the starting point affect the convergence path in Example 8.9?","a":"Different starting points can lead to different numbers of steps or different trajectories (e.g., direct vs. zigzagging)."},
    {"q":"If the gradient method oscillates around the minimum, what can be adjusted to stabilize it?","a":"The step size parameter $h$ or the scaling factor $\\alpha_k$ can be reduced."},
    {"q":"What is the primary drawback of the constant step size gradient method mentioned in the text?","a":"It cannot approximate the exact minimum point with a precision greater than the step size $h$."},
    {"q":"The optimal gradient method minimizes the function value along the ____ of the gradient.","a":"line (or negative gradient direction)"},
    {"q":"How many dimensions is the minimization problem in Equation 8.6?","a":"One dimension (single variable $t$)."},
    {"q":"True or False: The gradient vector always points in the direction of the steepest increase of the function.","a":"True"},
    {"q":"Concept: Steepest Descent Method","a":"Definition: An optimization algorithm that takes repeated steps in the direction of the negative gradient to find a local minimum."},
    {"q":"In Example 8.9, the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ has a minimum point at ____.","a":"$(1, 0.5)$"},
    {"q":"What is the meaning of $f \\in C^1$ in the context of the gradient method theorems?","a":"The function is continuously differentiable."},
    {"q":"Formula: $v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$ is an approximation of which mathematical object?","a":"The $i$-th partial derivative of $f$ at point $\\mathbf{p}^{(k)}$."},
    {"q":"How is the next point $\\mathbf{p}^{(k+1)}$ related to the current point $\\mathbf{p}^{(k)}$ and current gradient in the gradient method?","a":"It is the current point minus a scaled version of the gradient vector."},
    {"q":"What does the 'optimal' in 'optimal gradient method' refer to specifically?","a":"It refers to selecting the step size that yields the maximum possible decrease in function value along the current gradient direction."},
    {"q":"In the constant step size gradient method, if $h=0.3$, what is the distance $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}\\|_2$?","a":"$0.3$"},
    {"q":"The condition $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ implies that the angle between the gradient and the level curve tangent is ____.","a":"$90$ degrees (or $\\pi/2$ radians)."},
    {"q":"What determines if the convergence of the optimal gradient method is fast or slow?","a":"The shape of the function's level curves (the asymptotic error constant)."},
    {"q":"In the notation $\\mathbf{p} + t\\mathbf{u}$, what does $t \\to 0+$ signify in the directional derivative formula?","a":"The limit as the step size $t$ approaches zero from the positive side."},
    {"q":"If the optimal gradient method enters a 'valley' in the contour lines, how does its trajectory appear?","a":"It zigzags between the sides of the valley."},
    {"q":"What is the dot product of two consecutive step vectors in the optimal gradient method?","a":"$0$ (because they are orthogonal)."},
    {"q":"What is the purpose of the unit vector $\\mathbf{e}^{(i)}$ in the numerical gradient approximation?","a":"To isolate the change in the function value along the $i$-th coordinate axis."},
    {"q":"The sequence $\\mathbf{p}^{(k)}$ generated by the gradient method always moves in a direction ____ to the local contour lines.","a":"perpendicular"},
    {"q":"Under what condition does the gradient vector $f'(\\mathbf{p})$ exist for a function $f$?","a":"The function must be differentiable at point $\\mathbf{p}$."},
    {"q":"How does the asymptotic error constant affect linear convergence?","a":"A constant close to $1$ results in very slow convergence, while a smaller constant results in faster convergence."}
  ],
  linsys: [
    {"q":"In the context of the gradient method, what is the standard form of the quadratic function $g(\\mathbf{x})$ used to solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","a":"$g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$"},
    {"q":"What matrix property is required for $g(\\mathbf{x})$ to be expressed in terms of the summation $\\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$?","a":"The matrix $\\mathbf{A}$ must be symmetric ($\\mathbf{A}^T = \\mathbf{A}$)."},
    {"q":"In the summation form of the quadratic function $g(x_1, \\ldots, x_n)$, what term represents the linear component involving $\\mathbf{b}$?","a":"$- \\sum_{i=1}^{n} b_i x_i$"},
    {"q":"What is the result of the partial derivative $\\frac{\\partial g}{\\partial x_i}$ for the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?","a":"$\\sum_{j=1}^{n} a_{ij} x_j - b_i$"},
    {"q":"What is the vectorial form of the gradient vector $g'(\\mathbf{x})$ for the quadratic function associated with the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?","a":"$g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$"},
    {"q":"If matrix $\\mathbf{A}$ is invertible, how many critical points does the quadratic function $g(\\mathbf{x})$ have?","a":"Exactly one."},
    {"q":"A critical point $\\bar{\\mathbf{x}}$ of the quadratic function $g(\\mathbf{x})$ is a solution to which linear equation?","a":"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$"},
    {"q":"What is the relationship between $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ and $g(\\bar{\\mathbf{x}})$ when $\\bar{\\mathbf{x}}$ is a critical point?","a":"$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$"},
    {"q":"Under what condition on matrix $\\mathbf{A}$ does the critical point $\\bar{\\mathbf{x}}$ minimize the function $g(\\mathbf{x})$?","a":"When $\\mathbf{A}$ is a positive definite matrix."},
    {"q":"Under what condition on matrix $\\mathbf{A}$ does the function $g(\\mathbf{x})$ have a maximum at the critical point $\\bar{\\mathbf{x}}$?","a":"When $\\mathbf{A}$ is a negative definite matrix."},
    {"q":"According to the theorem on quadratic functions, if $\\mathbf{A}$ is symmetric and positive definite, where does the global minimum occur?","a":"At the point $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$."},
    {"q":"What is the relationship between a local minimum and a global minimum for a quadratic function?","a":"If a quadratic function has a local minimum at a point, it is also a global minimum at that point."},
    {"q":"In the iterative formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$, what does $\\mathbf{v}^{(k)}$ represent?","a":"The gradient vector at the current point, $\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)})$."},
    {"q":"How is the step size $\\alpha_k$ chosen in the optimal gradient method?","a":"It is the minimum point of the one-variable function $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$."},
    {"q":"What type of function is $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ in the gradient method?","a":"A quadratic polynomial."},
    {"q":"What is the explicit formula for $\\alpha_k$ in terms of the gradient vector $\\mathbf{v}^{(k)}$ and the current state?","a":"$\\alpha_k = \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})}{(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}}$"},
    {"q":"How is the residual vector $\\mathbf{r}^{(k)}$ defined in the gradient method algorithm?","a":"$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$"},
    {"q":"What is the relationship between the residual vector $\\mathbf{r}^{(k)}$ and the gradient vector $\\mathbf{v}^{(k)}$?","a":"$\\mathbf{r}^{(k)} = -\\mathbf{v}^{(k)}$"},
    {"q":"Using the residual vector $\\mathbf{r}^{(k)}$, what is the formula for the step size $\\alpha_k$?","a":"$\\alpha_k = \\frac{(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}}$"},
    {"q":"What is the iterative update formula for the point $\\mathbf{p}^{(k+1)}$ using the residual vector $\\mathbf{r}^{(k)}$?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$"},
    {"q":"Why is the gradient method applicable to a linear system where the matrix has entries $a_{11}=4, a_{12}=2, a_{21}=2, a_{22}=5$?","a":"Because the coefficient matrix is symmetric and positive definite."},
    {"q":"In the provided example, starting from $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ for a specific system, what is the exact solution being approached?","a":"$(-1, 2, 0)$"},
    {"q":"Which specific vector calculation represents the 'direction' of the update in the final summarized algorithm (Equations 8.11-8.13)?","a":"The residual vector $\\mathbf{r}^{(k)}$."},
    {"q":"In the expression for $\\phi_k(t)$, what is the coefficient of the $t^2$ term?","a":"$\\frac{1}{2}(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}$"},
    {"q":"In the expression for $\\phi_k(t)$, what is the coefficient of the $-t$ term?","a":"$(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})$"},
    {"q":"Cloze: All positive or negative definite matrices are _____.","a":"invertible"},
    {"q":"Concept: Residual Vector ($\\mathbf{r}^{(k)}$)","a":"Definition: The difference between the target vector $\\mathbf{b}$ and the current transformation $\\mathbf{A}\\mathbf{p}^{(k)}$, used as the search direction in the gradient method."},
    {"q":"Why is the symmetry of matrix $\\mathbf{A}$ ($a_{ij} = a_{ji}$) essential for the simplification of $\\frac{\\partial g}{\\partial x_i}$?","a":"It allows the combination of terms $(a_{ij} x_j + a_{ji} x_j)$ into $2a_{ij} x_j$, which cancels the $\\frac{1}{2}$ factor."},
    {"q":"If a matrix $\\mathbf{A}$ is positive definite, what can be said about the sign of $(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ for any non-zero $\\Delta\\mathbf{x}$?","a":"It is always positive ($> 0$)."},
    {"q":"In the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$, why is the sign before $\\alpha_k$ positive compared to the gradient update form?","a":"Because the residual $\\mathbf{r}^{(k)}$ is defined as the negative gradient ($-\\mathbf{v}^{(k)}$)."},
    {"q":"What is the purpose of the constant $c$ in the quadratic function $g(\\mathbf{x})$ during the optimization process?","a":"It acts as a vertical shift and does not affect the location of the critical point or the gradient."},
    {"q":"Formula: Write the denominator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.","a":"$(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}$"},
    {"q":"Formula: Write the numerator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.","a":"$(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}$"},
    {"q":"Sequence: In the gradient method, what is the first step performed in each iteration $k$?","a":"Calculate the residual vector $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$."},
    {"q":"Sequence: After calculating the residual $\\mathbf{r}^{(k)}$, what is the next step in the gradient method iteration?","a":"Calculate the optimal step size $\\alpha_k$."},
    {"q":"Sequence: What is the final step in a single iteration of the gradient method to find the next approximation?","a":"Update the solution estimate: $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$."},
    {"q":"What matrix property ensures that the optimal step size $\\alpha_k$ always has a non-zero denominator for a non-zero residual?","a":"Positive definiteness (or negative definiteness)."},
    {"q":"True or False: The optimal gradient method for linear systems requires the matrix $\\mathbf{A}$ to be symmetric.","a":"True."},
    {"q":"In the example provided, what is the Euclidean norm error $(\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2)$ at the initial guess $\\mathbf{p}^{(0)} = (3, 3, 3)^T$?","a":"5.09901951"},
    {"q":"How does the error change as $k$ increases in the gradient method example table?","a":"The error consistently decreases towards zero."},
    {"q":"What is the Hessian matrix ($g''(\\mathbf{x})$) of the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?","a":"$\\mathbf{A}$"},
    {"q":"If the gradient method is applied to $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, what is the equivalent linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for the minimum?","a":"$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -30 \\end{pmatrix}$"},
    {"q":"Cloze: The optimal gradient method selects $\\alpha_k$ to minimize the function along the _____ direction.","a":"residual (or negative gradient)"},
    {"q":"Why can the solution of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ be framed as a minimization problem?","a":"Because the solution occurs where the gradient of the associated quadratic function $g(\\mathbf{x})$ is zero."},
    {"q":"In the vector notation $\\mathbf{b}^T \\mathbf{x}$, if $\\mathbf{b} = (b_1, \\ldots, b_n)^T$, how is this expressed as a sum?","a":"$\\sum_{i=1}^{n} b_i x_i$"},
    {"q":"Under what condition is the critical point $\\bar{\\mathbf{x}}$ of $g(\\mathbf{x})$ unique?","a":"When the matrix $\\mathbf{A}$ is invertible."},
    {"q":"What is the purpose of the optimal gradient method in numerical analysis?","a":"To iteratively approximate the solution of a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$."},
    {"q":"How does the formula for $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ simplify when $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ and $\\mathbf{A}$ is symmetric?","a":"The linear terms in $\\Delta\\mathbf{x}$ cancel out, leaving $g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$."},
    {"q":"If $\\mathbf{A}$ is negative definite, does the iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ find a minimum or a maximum?","a":"It finds a maximum."},
    {"q":"In Exercise 11, for $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$ starting from $(9, 1)^T$, what is the asymptotic error constant?","a":"0.8"},
    {"q":"What is the residual vector $\\mathbf{r}^{(0)}$ if the initial guess $\\mathbf{p}^{(0)}$ is exactly the solution $\\bar{\\mathbf{x}}$?","a":"The zero vector $\\mathbf{0}$."},
    {"q":"In the summation form of $g(\\mathbf{x})$, what does the index $j$ represent in the term $a_{ij} x_i x_j$?","a":"The column index of matrix $\\mathbf{A}$ and the index of the second vector component."},
    {"q":"What property of the quadratic function $g(\\mathbf{x})$ ensures that the gradient $g'(\\mathbf{x})$ is linear?","a":"The fact that the highest degree of $\\mathbf{x}$ in $g(\\mathbf{x})$ is 2."},
    {"q":"Cloze: The function $\\phi_k(t)$ represents $g$ evaluated along the line passing through $\\mathbf{p}^{(k)}$ in the direction of _____.","a":"$-\\mathbf{v}^{(k)}$ (or $\\mathbf{r}^{(k)}$)"},
    {"q":"How is the symmetry of $\\mathbf{A}$ utilized in the step $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$?","a":"By taking the transpose of the scalar value: $(\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x})^T = \\Delta\\mathbf{x}^T \\mathbf{A}^T \\bar{\\mathbf{x}}$ and applying $\\mathbf{A}^T = \\mathbf{A}$."},
    {"q":"True or False: The gradient method always reaches the exact solution in a finite number of steps for any symmetric positive definite matrix.","a":"False (it is an iterative method that provides an approximation, though it may converge to the exact solution in specific cases)."},
    {"q":"In the example system, what is the value of $b_2$?","a":"8"},
    {"q":"In the example system, what is the value of $a_{31}$?","a":"-1"},
    {"q":"What is the primary computational cost per iteration in the optimal gradient method?","a":"The matrix-vector multiplication $\\mathbf{A}\\mathbf{r}^{(k)}$."},
    {"q":"Cloze: To minimize $g(\\mathbf{x})$, we move in the direction of the _____ gradient.","a":"negative"}
  ],
  newton: [
    {"q":"What is the primary purpose of Newton's method as described in the source material?","a":"To find the minimum value of a function $f: \\mathbb{R}^n \\to \\mathbb{R}$."},
    {"q":"What degree is the Taylor polynomial used to approximate the function $f$ in a neighborhood of $\\mathbf{p}^{(0)}$?","a":"Second-order (or quadratic)."},
    {"q":"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f'(\\mathbf{p}^{(0)})$ represent?","a":"The gradient vector of $f$ evaluated at $\\mathbf{p}^{(0)}$."},
    {"q":"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f''(\\mathbf{p}^{(0)})$ represent?","a":"The Hessian matrix of $f$ evaluated at $\\mathbf{p}^{(0)}$."},
    {"q":"What is the mathematical definition of the quadratic Taylor approximation $g(\\mathbf{x})$ of $f$ at $\\mathbf{p}^{(0)}$?","a":"$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)})$."},
    {"q":"Under what condition does the quadratic approximation $g(\\mathbf{x})$ possess a unique global minimum?","a":"When the Hessian matrix $f''(\\mathbf{p}^{(0)})$ is positive definite."},
    {"q":"Provide the iteration formula for Newton's method for minimization.","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},
    {"q":"Newton's method for minimization is equivalent to applying Newton's iteration to solve which equation system?","a":"$f'(\\mathbf{x}) = \\mathbf{0}$."},
    {"q":"According to Theorem 8.13, what must be the value of $f'(\\mathbf{p})$ for a point $\\mathbf{p}$ to be a local minimum candidate?","a":"$\\mathbf{0}$ (the zero vector)."},
    {"q":"What differentiability class is required for $f$ to apply the local quadratic convergence theorem for Newton's method?","a":"$f \\in C^3$."},
    {"q":"If $f'(\\mathbf{p}) = \\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, what can be concluded about the point $\\mathbf{p}$?","a":"The function $f$ has a local minimum at $\\mathbf{p}$."},
    {"q":"What is the typical convergence rate of Newton's method near a local minimum where the Hessian is positive definite?","a":"Locally quadratic convergence."},
    {"q":"According to the proof of Theorem 8.13, which theorem establishes the local quadratic convergence of Newton's method for systems?","a":"Theorem 2.56."},
    {"q":"Concept: Newton's Method for Minimization","a":"Definition: An iterative algorithm that uses first and second derivatives to find local minima of a function."},
    {"q":"In Example 8.14, Newton's method is applied to which function $f(x, y)$?","a":"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},
    {"q":"What is the exact minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ used in Example 8.14?","a":"$(1, 0.5)^T$."},
    {"q":"In Example 8.14, the starting vector $\\mathbf{p}^{(0)}$ for the first trial is _____.","a":"$(-1, 4)^T$."},
    {"q":"For the function in Example 8.14, what occurs if the Newton's iteration starts from $(1, 3)^T$?","a":"The method returns the exact minimum point in a single step."},
    {"q":"How does the convergence speed of Newton's method in Example 8.14 (positive definite Hessian) compare to Example 8.15 (zero Hessian)?","a":"Example 8.14 is quadratic (fast), while Example 8.15 is linear (slower)."},
    {"q":"In Example 8.15, what is the function $f(x, y)$ defined as?","a":"$f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$."},
    {"q":"What is the value of the Hessian $f''(1, 0.5)$ for the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$?","a":"The zero matrix $\\mathbf{0}$."},
    {"q":"Why is the Hessian $f''(1, 0.5) = \\mathbf{0}$ significant in Example 8.15?","a":"It means the Hessian is not positive definite, violating a condition for quadratic convergence."},
    {"q":"Despite the non-positive definite Hessian at the minimum, how does Newton's method behave for the function in Example 8.15?","a":"It still converges, but the rate of convergence is only linear."},
    {"q":"What type of function always results in the exact minimum in one step using Newton's method (assuming a positive definite Hessian)?","a":"Quadratic functions."},
    {"q":"Exercise 3 asks to prove that if Theorem 8.13 conditions hold and $\\mathbf{p}^{(0)}$ is close to $\\mathbf{p}$, then $f''(\\mathbf{p}^{(k)})$ is _____ for all $k$.","a":"Invertible."},
    {"q":"How is the next iteration point $\\mathbf{p}^{(1)}$ calculated from the quadratic approximation $g$?","a":"It is the point where $g$ attains its global minimum."},
    {"q":"The notation $(f''(\\mathbf{p}^{(k)}))^{-1}$ in the iteration formula denotes the _____ of the Hessian matrix.","a":"Inverse."},
    {"q":"The sequence $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ is known as the _____ minimum-seeking method.","a":"Newton-type (or Newton's)."},
    {"q":"What happens to the gradient $f'$ at the minimum point in Example 8.14 and 8.15?","a":"It becomes the zero vector $\\mathbf{0}$."},
    {"q":"In Example 8.15, Table 8.6 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ approaching a constant. What does this indicate?","a":"Linear convergence."},
    {"q":"In Example 8.14, Table 8.5 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ being tracked. What is this ratio used to identify?","a":"Quadratic convergence."},
    {"q":"What is the value of $f(\\mathbf{p}^{(k)})$ at the exact minimum $(1, 0.5)^T$ for both examples in Section 8.6?","a":"0.00000000."},
    {"q":"If the Hessian matrix $f''(\\mathbf{x})$ is positive definite everywhere, what kind of minimum does the quadratic approximation $g$ have?","a":"A global minimum."},
    {"q":"Why is $f \\in C^3$ a necessary condition for the quadratic convergence theorem of Newton's method?","a":"To ensure the second derivative is Lipschitz continuous or that the Taylor remainder behaves correctly for quadratic convergence."},
    {"q":"True or False: Newton's method for minimization requires calculating the inverse of the Hessian matrix at every step.","a":"True (at least conceptually, as per the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$)."},
    {"q":"In the formula for Newton's method, what is subtracted from the current point $\\mathbf{p}^{(k)}$?","a":"The product of the inverse Hessian and the gradient vector: $(f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},
    {"q":"What vector norm is used in the examples to measure the distance to the minimum point?","a":"The $L_2$ norm (Euclidean norm), denoted as $\\|\\cdot\\|_2$."},
    {"q":"For the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, how many iterations starting from $(-1, 4)^T$ were shown before reaching a distance of approximately $1.7 \\times 10^{-5}$?","a":"5 iterations."},
    {"q":"In Example 8.15, at iteration $k=20$, the distance to the minimum is approximately _____.","a":"$0.01238211$."},
    {"q":"Based on the tables, which example converges to a much higher precision in fewer steps?","a":"Example 8.14 (due to quadratic convergence)."},
    {"q":"In Example 8.15, the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ eventually stabilizes around what value?","a":"Approximately $0.66666667$ (or $2/3$)."},
    {"q":"Under what circumstance does Newton's method for minimization fail to be defined for a specific iteration step?","a":"If the Hessian matrix $f''(\\mathbf{p}^{(k)})$ is singular (non-invertible)."},
    {"q":"Theorem 8.13 asserts that Newton's method converges _____ if the starting point is close enough to the minimum.","a":"Locally."},
    {"q":"What is the relationship between the Hessian matrix $f''(\\mathbf{p})$ and the Jacobian matrix of the system $f'(\\mathbf{x}) = \\mathbf{0}$?","a":"The Hessian of $f$ is the Jacobian of the gradient system $f'(\\mathbf{x})$."},
    {"q":"If $f$ is a quadratic function, $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{b}^T \\mathbf{x} + c$, what is its Hessian matrix $f''(\\mathbf{x})$?","a":"The matrix $A$."},
    {"q":"Newton's method effectively replaces the objective function at each step with its _____ approximation.","a":"Quadratic (or second-order Taylor)."},
    {"q":"What is the result of the first derivative of the Taylor approximation $g(\\mathbf{x})$ at the point $\\mathbf{x} = \\mathbf{p}^{(1)}$?","a":"The gradient $g'(\\mathbf{p}^{(1)}) = \\mathbf{0}$."},
    {"q":"In Example 8.15, the starting function value $f(\\mathbf{p}^{(0)})$ is _____.","a":"$244.10000000$."},
    {"q":"In Example 8.14, the value of the function at the starting point $(-1, 4)^T$ is _____.","a":"$57.00000000$."},
    {"q":"The term $f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)})$ in the Taylor polynomial represents a _____ product.","a":"Scalar (or dot) product."},
    {"q":"Which specific property of the Hessian ensures that the search direction in Newton's method is a descent direction?","a":"Positive definiteness."},
    {"q":"How is the Taylor polynomial $g(\\mathbf{x})$ related to the next iterate $\\mathbf{p}^{(1)}$ in terms of calculus?","a":"$\\mathbf{p}^{(1)}$ is the stationary point of $g(\\mathbf{x})$, found by setting $g'(\\mathbf{x}) = \\mathbf{0}$."},
    {"q":"What is the significance of the distance $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ becoming zero in a table?","a":"The iteration has reached the exact minimum within numerical precision."},
    {"q":"If Newton's method is applied to a function where the Hessian is always positive definite, what can be said about the shape of the function?","a":"The function is strictly convex."},
    {"q":"The proof of Theorem 8.13 uses which theorem to establish that $\\mathbf{p}$ is a local minimum?","a":"Theorem 8.1."},
    {"q":"In Example 8.14, at $k=1$, the iterate $\\mathbf{p}^{(1)}$ is _____.","a":"$(-1.33333333, 0.83333333)^T$."},
    {"q":"Exercise 2: For a quadratic function with a positive definite Hessian, why is the minimum found in one step?","a":"Because the second-order Taylor polynomial $g(\\mathbf{x})$ is identical to the function $f(\\mathbf{x})$ itself."},
    {"q":"What is the gradient vector of $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ at its minimum $(1, 0.5)^T$?","a":"$(0, 0)^T$."},
    {"q":"The Hessian matrix is defined as the matrix of _____ partial derivatives.","a":"Second-order."},
    {"q":"Newton's method for minimization can be viewed as a _____ refinement of the current estimate of the minimum.","a":"Local."}
  ],
  quasinewton: [
    {"q":"In Quasi-Newton methods, the function $f$ is approximated near $\\mathbf{p}^{(k)}$ by what type of function?","a":"A quadratic function $g(\\mathbf{x})$."},
    {"q":"Formula: Quadratic approximation $g(\\mathbf{x})$ used in Quasi-Newton methods","a":"$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + (\\mathbf{v}^{(k)})^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)})$"},
    {"q":"In the quadratic approximation for Quasi-Newton methods, what do $\\mathbf{v}^{(k)}$ and $\\mathbf{A}^{(k)}$ typically represent?","a":"Approximations of the gradient $f'(\\mathbf{p}^{(k)})$ and the Hessian $f''(\\mathbf{p}^{(k)})$."},
    {"q":"If $\\mathbf{A}^{(k)}$ is positive definite, what is the formula for the minimum point $\\mathbf{p}^{(k+1)}$ of the quadratic approximation $g(\\mathbf{x})$?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{v}^{(k)}$"},
    {"q":"What is the order of magnitude for function evaluations required per iteration when using numerical difference approximations for both the gradient and Hessian?","a":"$n^2$ function evaluations."},
    {"q":"Formula: First-order forward difference approximation for the $i$-th component of the gradient $v_i^{(k)}$","a":"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},
    {"q":"The standard Quasi-Newton method for minimization assumes the exact value of which vector is available?","a":"The gradient vector $f'(\\mathbf{p}^{(k)})$."},
    {"q":"In Quasi-Newton iterations, how is the step vector $\\mathbf{s}^{(k)}$ defined relative to the current point $\\mathbf{p}^{(k)}$?","a":"$\\mathbf{s}^{(k)} = \\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"},
    {"q":"Formula: Definition of the gradient change vector $\\mathbf{y}^{(k)}$","a":"$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})$"},
    {"q":"What equation must the updated Hessian approximation $\\mathbf{A}^{(k+1)}$ satisfy to be consistent with the gradient change?","a":"The secant equation: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$."},
    {"q":"Formula: Broyden's method update for the matrix $\\mathbf{A}^{(k+1)}$","a":"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"},
    {"q":"What are the two main theoretical drawbacks of using the standard Broyden's method for function minimization?","a":"The generated matrices are generally not symmetric and not necessarily positive definite."},
    {"q":"Concept: Closest symmetric matrix","a":"The unique symmetric matrix closest to a matrix $\\mathbf{A}$ in the Frobenius norm is $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$."},
    {"q":"What is the full name of the 'PSB update' in Quasi-Newton methods?","a":"Powell-Symmetric-Broyden update."},
    {"q":"The PSB update is derived by iteratively enforcing which two properties?","a":"Symmetry and the secant equation."},
    {"q":"Formula: PSB update for the Hessian approximation $\\mathbf{A}^{(k+1)}$","a":"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T$"},
    {"q":"According to Theorem 8.17, what is the convergence rate of the PSB update near a local minimum with a positive definite Hessian?","a":"Superlinear convergence."},
    {"q":"What property does the PSB update lack that is often critical for efficient minimization?","a":"It does not guarantee that $\\mathbf{A}^{(k)}$ remains positive definite."},
    {"q":"Concept: Positive Definite Matrix Construction","a":"A matrix $\\mathbf{A}$ is positive definite if it can be written as $\\mathbf{M}\\mathbf{M}^T$ where $\\mathbf{M}$ is non-singular."},
    {"q":"If $\\mathbf{A}^{(k+1)}$ is positive definite and satisfies the secant equation, what inequality must hold between $\\mathbf{y}^{(k)}$ and $\\mathbf{s}^{(k)}$?","a":"$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$"},
    {"q":"The BFGS update is named after which four researchers?","a":"Broyden, Fletcher, Goldfarb, and Shanno."},
    {"q":"Formula: BFGS update for the Hessian approximation $\\mathbf{A}^{(k+1)}$","a":"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}$"},
    {"q":"Which Quasi-Newton update is generally considered the best performing method for approximating the Hessian?","a":"The BFGS update."},
    {"q":"Under what condition will the BFGS update generate a positive definite $\\mathbf{A}^{(k+1)}$ if $\\mathbf{A}^{(k)}$ is positive definite?","a":"The condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ must be satisfied."},
    {"q":"As the iterates $\\mathbf{p}^{(k)}$ approach a point $\\mathbf{p}$ where $f''(\\mathbf{p})$ is positive definite, how does the term $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}$ behave?","a":"It becomes positive, ensuring the BFGS update is well-defined and positive definite."},
    {"q":"To avoid solving linear systems, Quasi-Newton methods often use a recursion for which matrix?","a":"The inverse of the Hessian approximation, $\\mathbf{B}^{(k)} = (\\mathbf{A}^{(k)})^{-1}$."},
    {"q":"Formula: Recursive update for the inverse matrix $\\mathbf{B}^{(k+1)}$ in the BFGS method","a":"$\\mathbf{B}^{(k+1)} = \\mathbf{B}^{(k)} + (1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}$"},
    {"q":"When using the inverse Hessian approximation $\\mathbf{B}^{(k)}$, how is the step vector $\\mathbf{s}^{(k)}$ calculated?","a":"$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)})$"},
    {"q":"What does the acronym 'DFP' stand for in Quasi-Newton methods?","a":"Davidon-Fletcher-Powell."},
    {"q":"How does the starting point for the DFP derivation differ from the BFGS derivation?","a":"DFP starts from the inverse secant equation $(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} = \\mathbf{v}^{(k)}$."},
    {"q":"Formula: DFP update for the Hessian approximation $\\mathbf{A}^{(k+1)}$","a":"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T$"},
    {"q":"Formula: Recursive update for the inverse matrix $(\\mathbf{A}^{(k+1)})^{-1}$ in the DFP method","a":"$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"},
    {"q":"What is a recommended choice for the initial matrix $\\mathbf{A}^{(0)}$ in BFGS or DFP iterations?","a":"The exact Hessian $f''(\\mathbf{p}^{(0)})$ or its numerical difference approximation."},
    {"q":"Which two Quasi-Newton methods mentioned in the text exhibit similar rapid convergence speeds in the provided examples?","a":"The BFGS and DFP updates."},
    {"q":"The problem of finding $\\mathbf{A}^{(k+1)}$ that satisfies $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ is known as solving the _____ equation.","a":"Secant"},
    {"q":"Cloze: In the BFGS update, if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ is not met, the new matrix $\\mathbf{A}^{(k+1)}$ is only guaranteed to be _____.","a":"Positive semidefinite"},
    {"q":"Why is it important for $\\mathbf{A}^{(k)}$ to be positive definite during minimization?","a":"To ensure the local quadratic approximation $g(\\mathbf{x})$ has a unique minimum."},
    {"q":"Process: In Quasi-Newton methods, the step from $\\mathbf{p}^{(k)}$ to $\\mathbf{p}^{(k+1)}$ is determined by solving what linear system?","a":"$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)})$"},
    {"q":"According to the text, what is the main advantage of Quasi-Newton methods over the classical Newton's method?","a":"They do not require the computation of the exact Hessian matrix at each step."},
    {"q":"Term: Frobenius Norm","a":"Definition: A matrix norm defined as the square root of the sum of the squares of all matrix elements, used to find the 'closest' symmetric matrix."},
    {"q":"In the derivation of the BFGS update, the matrix $\\mathbf{M}^{(k+1)}$ is chosen to satisfy $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$ for all vectors $\\mathbf{z}$ that meet what geometric condition?","a":"$\\mathbf{z}$ is orthogonal to $\\mathbf{v}^{(k)}$ ($\\mathbf{z} \\perp \\mathbf{v}^{(k)}$)."},
    {"q":"Formula: Numerical approximation of the second partial derivative $a_{ij}^{(k)}$","a":"$a_{ij}^{(k)} = \\frac{1}{h^2}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)}))$"},
    {"q":"The derivation of the DFP update is considered analogous to the derivation of which other update?","a":"The BFGS update."},
    {"q":"For the BFGS update, what is the relationship between the iterates $\\mathbf{p}^{(k)}$ and the target minimum $\\mathbf{p}$ to guarantee existence of $\\varepsilon$ and $\\delta$ for convergence?","a":"$\\mathbf{p}^{(0)}$ must be sufficiently close to $\\mathbf{p}$ and $\\mathbf{A}^{(0)}$ sufficiently close to $f''(\\mathbf{p})$."},
    {"q":"Cloze: The matrix $\\mathbf{M}^{(k+1)}$ in the BFGS derivation is proven to be _____ if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ holds.","a":"Invertible"},
    {"q":"True or False: The PSB update formula generates a symmetric matrix even if the initial matrix $\\mathbf{A}^{(k)}$ was not symmetric.","a":"False (The derivation assumes $\\mathbf{A}^{(k)}$ is symmetric to produce a symmetric $\\mathbf{A}^{(k+1)}$)."},
    {"q":"In the context of the BFGS inverse update, what does the matrix $\\mathbf{B}^{(k)}$ represent?","a":"The approximation of the inverse Hessian, $(\\mathbf{A}^{(k)})^{-1}$."},
    {"q":"The variable $\\alpha^2$ in the BFGS derivation is defined as the ratio of which two scalar products?","a":"$\\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}$"},
    {"q":"Which update formula was historically established first: BFGS or DFP?","a":"DFP (Davidon 1959, Fletcher and Powell 1963; BFGS was 1970)."},
    {"q":"How many function evaluations are needed for the gradient numerical approximation $v_i^{(k)}$ alone?","a":"$n$ evaluations (plus one at the base point)."},
    {"q":"What is the primary motivation for the 'Correction Iteration' that leads to the PSB update?","a":"To find a matrix that is both symmetric and satisfies the secant equation."},
    {"q":"Does the BFGS update require the matrix $\\mathbf{M}^{(k)}$ to be lower triangular?","a":"No, it only requires $\\mathbf{M}^{(k)}$ to be invertible."},
    {"q":"In the example tables, what does the column labeled $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ represent?","a":"The ratio of consecutive errors, used to observe the convergence rate."},
    {"q":"Concept: Secant Equation consistency","a":"If $\\mathbf{A}^{(k+1)}$ satisfies the secant equation, then $\\mathbf{s}^{(k)}$ is an eigenvector of $(\\mathbf{A}^{(k+1)})^{-1} \\mathbf{A}^{(k+1)}$ with eigenvalue 1."},
    {"q":"Formula: The value $\\mathbf{v}^{(k)}$ used to construct the BFGS update $\\mathbf{M}^{(k+1)}$","a":"$\\mathbf{v}^{(k)} = (\\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}})^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}$"}
  ],
}
