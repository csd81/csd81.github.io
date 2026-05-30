import type { WidgetName } from '../components/widgets'

export type Bi = { en: string; hu: string }
export type TheoremKind = 'theorem' | 'corollary' | 'definition' | 'example' | 'algorithm' | 'proof'

export type Block =
  | { kind: 'md'; text: Bi }
  | { kind: 'theorem'; tkind: TheoremKind; number: string; title?: Bi; text: Bi }
  | { kind: 'widget'; name: WidgetName }
  | { kind: 'exercise'; number: string | number; problem: Bi; solution: Bi }

export interface Section {
  slug: string
  /** book section number, e.g. "2.3" */
  section: string
  title: Bi
  summary: Bi
  blocks: Block[]
}

/**
 * Bilingual (EN/HU), widget-led content for Chapter 2. Prose is condensed from
 * 02/Chapter_2_Nonlinear_Equations.md and 02/02_Nemlinearis_egyenletek.md;
 * every section ends with its interactive widget and a worked exercise.
 */
export const sections: Section[] = [
  // ───────────────────────────── §2.1 ─────────────────────────────
  {
    slug: 'preliminaries',
    section: '2.1',
    title: { en: 'Review of Calculus', hu: 'Analízis előismeretek' },
    summary: {
      en: 'The theorems behind every root-finder: Bolzano/IVT, the Mean Value Theorem and Taylor’s theorem.',
      hu: 'A gyökkeresés alaptételei: Bolzano-tétel, a Lagrange-középértéktétel és a Taylor-tétel.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Solving $f(x)=0$ rests on a few classical theorems. The **intermediate value theorem (Bolzano)** says a continuous $f$ with a *sign change* on $[a,b]$ — that is $f(a)\\,f(b)<0$ — must vanish somewhere inside. This is exactly what makes bracketing methods work.',
          hu: 'Az $f(x)=0$ egyenlet megoldása néhány klasszikus tételen nyugszik. A **Bolzano-tétel** (Darboux-tulajdonság) szerint ha $f$ folytonos $[a,b]$-n és *előjelet vált*, azaz $f(a)\\,f(b)<0$, akkor van gyöke a belsejében. Éppen ezért működnek a beágyazó (intervallumos) módszerek.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.1',
        title: { en: 'Mean Value Theorem', hu: 'Lagrange-középértéktétel' },
        text: {
          en: 'If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there is a point $c\\in(a,b)$ with $f\'(c)=\\dfrac{f(b)-f(a)}{b-a}$ — a tangent parallel to the chord.',
          hu: 'Ha $f$ folytonos $[a,b]$-n és differenciálható $(a,b)$-n, akkor van olyan $c\\in(a,b)$, hogy $f\'(c)=\\dfrac{f(b)-f(a)}{b-a}$ — az érintő párhuzamos a húrral.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Drag $a$ and $b$ below: when the endpoints sit on opposite sides of the axis the IVT guarantees a root, and the orange line marks the mean-value point $c$.',
          hu: 'Húzd az $a$ és $b$ végpontokat: ha a tengely két oldalára esnek, a Bolzano-tétel gyököt garantál; a narancs vonal a középértéktétel $c$ pontját jelöli.',
        },
      },
      { kind: 'widget', name: 'IVTExplorer' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Show that $e^x-2\\cos x$ has a root in $[0,1]$.',
          hu: 'Mutasd meg, hogy az $e^x-2\\cos x$ függvénynek van gyöke $[0,1]$-ben.',
        },
        solution: {
          en: '$f(0)=1-2=-1<0$ and $f(1)=e-2\\cos 1\\approx 1.64>0$. Since $f$ is continuous and changes sign, the IVT gives a root in $(0,1)$.',
          hu: '$f(0)=1-2=-1<0$ és $f(1)=e-2\\cos 1\\approx 1{,}64>0$. Mivel $f$ folytonos és előjelet vált, a Bolzano-tétel szerint van gyök $(0,1)$-ben.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.2 ─────────────────────────────
  {
    slug: 'fixed-point',
    section: '2.2',
    title: { en: 'Fixed-Point Iteration', hu: 'Fixpont iteráció' },
    summary: {
      en: 'The recursion $p_{k+1}=g(p_k)$, the cobweb diagram, and the contraction principle.',
      hu: 'A $p_{k+1}=g(p_k)$ rekurzió, a lépcsős diagram és a kontrakciós elv.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Given $g\\colon I\\to I$, the sequence $p_{k+1}=g(p_k)$ from a starting value $p_0$ is a **fixed-point iteration**. Its limit, if it exists, satisfies the *fixed-point equation* $g(p)=p$. Geometrically a fixed point is where $y=g(x)$ meets $y=x$.',
          hu: 'Adott $g\\colon I\\to I$ esetén a $p_0$ kezdőértékből induló $p_{k+1}=g(p_k)$ sorozat a **fixpont iteráció**. Határértéke — ha létezik — kielégíti a $g(p)=p$ *fixpont-egyenletet*. Geometriailag a fixpont az $y=g(x)$ és $y=x$ metszéspontja.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.13',
        title: { en: 'Contraction principle', hu: 'Kontrakciós elv (fixpont-tétel)' },
        text: {
          en: 'If $g\\colon[a,b]\\to[a,b]$ and there is $0\\le L<1$ with $|g(x)-g(y)|\\le L|x-y|$ for all $x,y$, then $g$ has a unique fixed point $p$ and $p_{k+1}=g(p_k)$ converges to it for **every** $p_0\\in[a,b]$, with $|p_k-p|\\le L^k|p_0-p|$.',
          hu: 'Ha $g\\colon[a,b]\\to[a,b]$ és van olyan $0\\le L<1$, hogy $|g(x)-g(y)|\\le L|x-y|$ minden $x,y$-ra, akkor $g$-nek pontosan egy fixpontja van, és $p_{k+1}=g(p_k)$ **bármely** $p_0\\in[a,b]$-ből oda konvergál, $|p_k-p|\\le L^k|p_0-p|$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Example 2.10 uses $g(x)=-\\tfrac18 x^3+x+1$ from $p_0=0.4$: the staircase spirals onto $(2,2)$. Try the divergent preset $g(x)=2x$ to see the staircase fly outward.',
          hu: 'A 2.10. példa a $g(x)=-\\tfrac18 x^3+x+1$ függvényt használja $p_0=0{,}4$-ből: a lépcsős vonal spirálisan ráhúzódik a $(2,2)$ pontra. Próbáld ki a divergens $g(x)=2x$ esetet is.',
        },
      },
      { kind: 'widget', name: 'CobwebPlot' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'For $g(x)=\\cos x$ on $[0,1]$, why does the iteration converge?',
          hu: 'Miért konvergens a $g(x)=\\cos x$ iteráció $[0,1]$-en?',
        },
        solution: {
          en: '$g$ maps $[0,1]$ into itself and $|g\'(x)|=|\\sin x|\\le \\sin 1\\approx 0.84<1$, so $g$ is a contraction; by the principle the iterates converge to the Dottie number $\\approx 0.739$.',
          hu: '$g$ az $[0,1]$-et önmagába képezi és $|g\'(x)|=|\\sin x|\\le\\sin 1\\approx 0{,}84<1$, tehát $g$ kontrakció; az elv szerint a sorozat a Dottie-számhoz ($\\approx 0{,}739$) tart.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.3 ─────────────────────────────
  {
    slug: 'bisection',
    section: '2.3',
    title: { en: 'Bisection Method', hu: 'Intervallumfelezés módszere' },
    summary: {
      en: 'Halve a sign-changing bracket repeatedly; the error is bounded by $(b-a)/2^{k+1}$.',
      hu: 'Felezzük ismételten az előjelváltó intervallumot; a hiba $(b-a)/2^{k+1}$ alatt marad.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Start from $[a,b]$ with $f(a)\\,f(b)<0$. Take the midpoint $p=\\tfrac{a+b}{2}$; whichever half still changes sign becomes the new bracket. The method is slow but **unconditionally convergent**.',
          hu: 'Induljunk $[a,b]$-ből, ahol $f(a)\\,f(b)<0$. Vegyük a $p=\\tfrac{a+b}{2}$ felezőpontot; az a fél marad, amelyiken még van előjelváltás. A módszer lassú, de **feltétel nélkül konvergens**.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.16',
        title: { en: 'Bisection error bound', hu: 'A felezés hibakorlátja' },
        text: {
          en: 'If $f\\in C[a,b]$ and $f(a)f(b)<0$, the midpoints $p_k$ converge to a root $p$ with $|p_k-p|\\le \\dfrac{b-a}{2^{k+1}}$.',
          hu: 'Ha $f\\in C[a,b]$ és $f(a)f(b)<0$, akkor a $p_k$ felezőpontok egy $p$ gyökhöz tartanak, és $|p_k-p|\\le \\dfrac{b-a}{2^{k+1}}$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Step through the halving below — the shaded bracket shrinks by half each step and the error bound updates live.',
          hu: 'Lépkedj végig a felezésen — a kiemelt intervallum minden lépésben feleződik, a hibakorlát élőben frissül.',
        },
      },
      { kind: 'widget', name: 'BisectionStepper' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'How many bisection steps guarantee $|p_k-p|<10^{-4}$ on $[0,1]$?',
          hu: 'Hány felezési lépés garantálja, hogy $|p_k-p|<10^{-4}$ legyen $[0,1]$-en?',
        },
        solution: {
          en: 'Need $1/2^{k+1}<10^{-4}$, i.e. $2^{k+1}>10^4$, so $k+1\\ge 14$, $k\\ge 13$.',
          hu: '$1/2^{k+1}<10^{-4}$ kell, azaz $2^{k+1}>10^4$, tehát $k+1\\ge 14$, $k\\ge 13$.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.4 ─────────────────────────────
  {
    slug: 'false-position',
    section: '2.4',
    title: { en: 'Method of False Position', hu: 'Húrmódszer' },
    summary: {
      en: 'Like bisection, but use the secant chord’s x-intercept instead of the midpoint.',
      hu: 'Mint a felezés, de a felezőpont helyett a húr (szelő) tengelymetszetét használjuk.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'False position (*regula falsi*) keeps a bracket like bisection, but takes $p_k=a-\\dfrac{f(a)\\,(b-a)}{f(b)-f(a)}$ — the x-intercept of the chord through $(a,f(a))$ and $(b,f(b))$. It usually converges faster while staying bracketed.',
          hu: 'A húrmódszer (*regula falsi*) a felezéshez hasonlóan beágyazó, de $p_k=a-\\dfrac{f(a)\\,(b-a)}{f(b)-f(a)}$ — a $(a,f(a))$ és $(b,f(b))$ pontokon átmenő húr tengelymetszete. Általában gyorsabb, miközben beágyazva marad.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'The blue chord below connects the two endpoints; its crossing of the x-axis is the next iterate.',
          hu: 'A kék húr a két végpontot köti össze; ahol metszi az $x$-tengelyt, az a következő iterált.',
        },
      },
      { kind: 'widget', name: 'FalsePositionStepper' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Why can one endpoint stay fixed for many steps in regula falsi?',
          hu: 'Miért maradhat az egyik végpont sok lépésen át rögzítve a húrmódszernél?',
        },
        solution: {
          en: 'For a convex (or concave) $f$ the chord always crosses on the same side, so only one endpoint moves — this is the slow “stagnant endpoint” behaviour the Illinois variant fixes.',
          hu: 'Konvex (vagy konkáv) $f$ esetén a húr mindig ugyanazon az oldalon metsz, így csak az egyik végpont mozog — ez a lassú „beragadó végpont”, amit az Illinois-változat javít.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.5 ─────────────────────────────
  {
    slug: 'newton',
    section: '2.5',
    title: { en: "Newton's Method", hu: 'Newton-módszer' },
    summary: {
      en: 'Follow the tangent at $p_k$ to its x-intercept; quadratic at simple roots, but it can diverge.',
      hu: 'Kövessük a $p_k$-beli érintőt a tengelymetszetig; egyszeres gyöknél kvadratikus, de divergálhat.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Replace $f$ near $p_k$ by its tangent line and take that line’s root:\n$$p_{k+1}=p_k-\\frac{f(p_k)}{f\'(p_k)}.$$\nNewton’s method is *locally quadratic* at a simple root, doubling the number of correct digits each step.',
          hu: 'Helyettesítsük $f$-et $p_k$ közelében az érintőjével, és vegyük annak gyökét:\n$$p_{k+1}=p_k-\\frac{f(p_k)}{f\'(p_k)}.$$\nA Newton-módszer egyszeres gyöknél *lokálisan kvadratikus*: a helyes jegyek száma lépésenként megduplázódik.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.24',
        title: { en: 'Local convergence', hu: 'Lokális konvergencia' },
        text: {
          en: 'If $f\\in C^2$ near a simple root $p$ (so $f(p)=0$, $f\'(p)\\ne0$), there is a neighbourhood of $p$ from which Newton converges quadratically.',
          hu: 'Ha $f\\in C^2$ egy egyszeres $p$ gyök közelében ($f(p)=0$, $f\'(p)\\ne0$), akkor $p$-nek van olyan környezete, amelyből a Newton-módszer kvadratikusan konvergál.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Switch to the **½·arctan** preset and step: the tangents overshoot and the iterates blow up — Newton is only *locally* convergent.',
          hu: 'Válts a **½·arctan** példára és lépkedj: az érintők túllőnek, az iteráltak elszállnak — a Newton-módszer csak *lokálisan* konvergens.',
        },
      },
      { kind: 'widget', name: 'NewtonStepper' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Write Newton’s iteration for $f(x)=x^3-2$ and identify its fixed-point form.',
          hu: 'Írd fel a Newton-iterációt az $f(x)=x^3-2$ esetre, és add meg a fixpont-alakját.',
        },
        solution: {
          en: '$p_{k+1}=p_k-\\dfrac{p_k^3-2}{3p_k^2}=\\dfrac{2p_k^3+2}{3p_k^2}$, i.e. $g(x)=\\dfrac{2x^3+2}{3x^2}$, converging to $\\sqrt[3]{2}$.',
          hu: '$p_{k+1}=p_k-\\dfrac{p_k^3-2}{3p_k^2}=\\dfrac{2p_k^3+2}{3p_k^2}$, azaz $g(x)=\\dfrac{2x^3+2}{3x^2}$, amely $\\sqrt[3]{2}$-höz tart.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.6 ─────────────────────────────
  {
    slug: 'secant',
    section: '2.6',
    title: { en: 'Secant Method', hu: 'Szelőmódszer' },
    summary: {
      en: 'Replace Newton’s derivative by a finite difference of the last two iterates; order $\\varphi\\approx1.618$.',
      hu: 'A Newton-deriváltat az utolsó két iterált különbségi hányadosa helyettesíti; rend $\\varphi\\approx1{,}618$.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'When $f\'$ is unavailable, approximate it by the secant slope through the last two points:\n$$p_{k+1}=p_k-f(p_k)\\,\\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}.$$\nIt needs two seeds $p_0,p_1$ and converges with order the golden ratio $\\varphi=\\tfrac{1+\\sqrt5}{2}$.',
          hu: 'Ha $f\'$ nem áll rendelkezésre, közelítsük az utolsó két ponton átmenő szelő meredekségével:\n$$p_{k+1}=p_k-f(p_k)\\,\\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}.$$\nKét kezdőérték kell ($p_0,p_1$), és a konvergencia rendje az aranymetszés $\\varphi=\\tfrac{1+\\sqrt5}{2}$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Each blue chord joins the previous two iterates; its x-intercept is the next one.',
          hu: 'Minden kék húr az előző két iteráltat köti össze; tengelymetszete a következő.',
        },
      },
      { kind: 'widget', name: 'SecantStepper' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Why is the secant method often faster *in wall-clock time* than Newton, despite lower order?',
          hu: 'Miért gyakran gyorsabb a szelőmódszer *valós időben* a Newtonnál, az alacsonyabb rend ellenére?',
        },
        solution: {
          en: 'It needs only **one** new function evaluation per step (no derivative). Two secant steps ($\\varphi^2\\approx2.6$) often beat one Newton step (order 2) when $f\'$ is expensive.',
          hu: 'Lépésenként csak **egy** új függvényértéket igényel (derivált nélkül). Két szelőlépés ($\\varphi^2\\approx2{,}6$) gyakran veri az egy Newton-lépést (rend 2), ha $f\'$ drága.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.7 ─────────────────────────────
  {
    slug: 'order-of-convergence',
    section: '2.7',
    title: { en: 'Order of Convergence', hu: 'Konvergencia rendje' },
    summary: {
      en: 'Linear, superlinear, quadratic: comparing how fast the error $|p_k-p|$ decays.',
      hu: 'Lineáris, szuperlineáris, kvadratikus: a $|p_k-p|$ hiba csökkenésének összevetése.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'A convergent sequence has **order** $\\alpha$ if $|p_{k+1}-p|\\le c\\,|p_k-p|^{\\alpha}$ (with $c<1$ when $\\alpha=1$). $\\alpha=1$ is *linear*, $\\alpha=2$ *quadratic*; $\\alpha=1$ with asymptotic constant $0$ is *superlinear*.',
          hu: 'Egy konvergens sorozat **rendje** $\\alpha$, ha $|p_{k+1}-p|\\le c\\,|p_k-p|^{\\alpha}$ ($\\alpha=1$ esetén $c<1$). $\\alpha=1$ *lineáris*, $\\alpha=2$ *kvadratikus*; $\\alpha=1$ nulla aszimptotikus hibakonstanssal *szuperlineáris*.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'On a log scale the error of a method of order $\\alpha$ bends ever steeper. Below, the four methods run on one problem: bisection is a straight line (linear), secant bends ($\\approx1.618$), Newton plunges (quadratic).',
          hu: 'Logaritmikus skálán egy $\\alpha$-rendű módszer hibája egyre meredekebben hajlik. Lent a négy módszer ugyanazon a feladaton fut: a felezés egyenes (lineáris), a szelő hajlik ($\\approx1{,}618$), a Newton zuhan (kvadratikus).',
        },
      },
      { kind: 'widget', name: 'ConvergencePlot' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'If $|p_k-p|\\approx 10^{-2}$ and convergence is quadratic with $c\\approx1$, estimate the next two errors.',
          hu: 'Ha $|p_k-p|\\approx10^{-2}$ és a konvergencia kvadratikus $c\\approx1$-gyel, becsüld a következő két hibát.',
        },
        solution: {
          en: 'Squaring each step: $\\approx10^{-4}$, then $\\approx10^{-8}$ — digits double each iteration.',
          hu: 'Minden lépésben négyzetre emelve: $\\approx10^{-4}$, majd $\\approx10^{-8}$ — a jegyek száma duplázódik.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.8 ─────────────────────────────
  {
    slug: 'stopping-criteria',
    section: '2.8',
    title: { en: 'Stopping Criteria of Iterations', hu: 'Iterációs módszerek megállási feltételei' },
    summary: {
      en: 'Absolute step, relative step and residual — they can trigger at different iterations.',
      hu: 'Abszolút lépés, relatív lépés és reziduum — különböző iterációknál is megállhatnak.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'When do we stop? Common tests are the **absolute step** $|p_k-p_{k-1}|$, the **relative step** $|p_k-p_{k-1}|/|p_k|$, and the **residual** $|f(p_k)|$. They are not equivalent: near a flat root the residual can be tiny while the step is not, and vice versa.',
          hu: 'Mikor álljunk meg? Szokásos tesztek: az **abszolút lépés** $|p_k-p_{k-1}|$, a **relatív lépés** $|p_k-p_{k-1}|/|p_k|$ és a **reziduum** $|f(p_k)|$. Ezek nem ekvivalensek: lapos gyök közelében a reziduum lehet pici, miközben a lépés nem, és fordítva.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Drag the tolerance line: the table shows the first iteration at which each criterion drops below it — often different $k$ values.',
          hu: 'Húzd a tűrés-vonalat: a táblázat azt az első iterációt mutatja, ahol az egyes feltételek alá esnek — gyakran eltérő $k$ értékeknél.',
        },
      },
      { kind: 'widget', name: 'StoppingCriteriaLab' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Why prefer the *relative* step for roots of very large or very small magnitude?',
          hu: 'Miért a *relatív* lépést részesítjük előnyben nagyon nagy vagy nagyon kicsi gyököknél?',
        },
        solution: {
          en: 'An absolute tolerance is scale-dependent: $10^{-6}$ is loose for $p\\approx10^{-3}$ and impossible for $p\\approx10^{8}$. The relative step adapts to the magnitude of $p$.',
          hu: 'Az abszolút tűrés skálafüggő: $10^{-6}$ laza $p\\approx10^{-3}$-ra és teljesíthetetlen $p\\approx10^{8}$-ra. A relatív lépés alkalmazkodik $p$ nagyságrendjéhez.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.9 ─────────────────────────────
  {
    slug: 'multivariable',
    section: '2.9',
    title: { en: 'Review of Multivariable Calculus', hu: 'Többváltozós analízis előismeretek' },
    summary: {
      en: 'Gradients, Jacobians and the multivariable Taylor expansion behind the n-dimensional methods.',
      hu: 'Gradiens, Jacobi-mátrix és a többváltozós Taylor-formula az $n$-dimenziós módszerek mögött.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'For $F\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$, the linear part near $p$ is the **Jacobian** $J(p)=\\big[\\partial F_i/\\partial x_j\\big]$. For a scalar field $f$, the **gradient** $\\nabla f$ is the vector of partials; it points in the direction of steepest increase and is *normal to the level sets*.',
          hu: '$F\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$ esetén a $p$ körüli lineáris rész a **Jacobi-mátrix** $J(p)=\\big[\\partial F_i/\\partial x_j\\big]$. Skalármezőnél a **gradiens** $\\nabla f$ a parciális deriváltak vektora; a legmeredekebb növekedés irányába mutat, és *merőleges a szintvonalakra*.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'The blue arrows below are the (normalized) gradient field $\\nabla f$; move the red probe to read the exact gradient there. Notice the arrows are perpendicular to the level curves.',
          hu: 'A kék nyilak a (normált) $\\nabla f$ gradiensmező; mozgasd a piros pontot a pontos gradiens leolvasásához. A nyilak merőlegesek a szintvonalakra.',
        },
      },
      { kind: 'widget', name: 'GradientExplorer' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Compute $\\nabla f$ for $f(x,y)=x^2-y^2$ and describe its level sets.',
          hu: 'Számítsd ki $\\nabla f$-et az $f(x,y)=x^2-y^2$ esetre, és írd le a szintvonalakat.',
        },
        solution: {
          en: '$\\nabla f=(2x,-2y)$. The level sets $x^2-y^2=c$ are hyperbolas; the gradient is orthogonal to them at every point.',
          hu: '$\\nabla f=(2x,-2y)$. A szintvonalak $x^2-y^2=c$ hiperbolák; a gradiens minden pontban merőleges rájuk.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.10 ─────────────────────────────
  {
    slug: 'norms',
    section: '2.10',
    title: { en: 'Vector and Matrix Norms', hu: 'Vektor- és mátrixnormák' },
    summary: {
      en: 'The $p$-norms and their unit balls; the geometry behind convergence in $\\mathbb{R}^n$.',
      hu: 'A $p$-normák és egységgömbjeik; az $\\mathbb{R}^n$-beli konvergencia geometriája.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'A **norm** measures length. The $p$-norms are $\\|x\\|_p=\\big(\\sum_i|x_i|^p\\big)^{1/p}$ for $1\\le p<\\infty$, with $\\|x\\|_\\infty=\\max_i|x_i|$. The three most used are $p=1$, $p=2$ (Euclidean) and $p=\\infty$. All norms on $\\mathbb{R}^n$ are equivalent, so convergence does not depend on the choice.',
          hu: 'A **norma** hosszat mér. A $p$-normák $\\|x\\|_p=\\big(\\sum_i|x_i|^p\\big)^{1/p}$ ($1\\le p<\\infty$), és $\\|x\\|_\\infty=\\max_i|x_i|$. A három leggyakoribb a $p=1$, $p=2$ (euklideszi) és $p=\\infty$. Az $\\mathbb{R}^n$ minden normája ekvivalens, így a konvergencia független a választástól.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'The **unit ball** $\\{x:\\|x\\|_p=1\\}$ shows each norm’s shape: a diamond ($p=1$), a circle ($p=2$), a square ($p=\\infty$). Slide $p$ to morph between them.',
          hu: 'Az **egységgömb** $\\{x:\\|x\\|_p=1\\}$ megmutatja az alakot: rombusz ($p=1$), kör ($p=2$), négyzet ($p=\\infty$). Csúsztasd a $p$-t az átmenethez.',
        },
      },
      { kind: 'widget', name: 'NormBall' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Order $\\|x\\|_1,\\|x\\|_2,\\|x\\|_\\infty$ for a fixed $x$.',
          hu: 'Rendezd nagyság szerint $\\|x\\|_1,\\|x\\|_2,\\|x\\|_\\infty$-t rögzített $x$-re.',
        },
        solution: {
          en: '$\\|x\\|_\\infty\\le\\|x\\|_2\\le\\|x\\|_1$ — the unit balls are nested the other way (the $1$-ball is smallest).',
          hu: '$\\|x\\|_\\infty\\le\\|x\\|_2\\le\\|x\\|_1$ — az egységgömbök fordítva ágyazódnak (az $1$-gömb a legkisebb).',
        },
      },
    ],
  },

  // ───────────────────────────── §2.11 ─────────────────────────────
  {
    slug: 'fixed-point-nd',
    section: '2.11',
    title: { en: 'Fixed-Point Iteration in n Dimensions', hu: 'Fixpont tétel $n$-dimenzióban' },
    summary: {
      en: 'The contraction principle in $\\mathbb{R}^n$: $p_{k+1}=G(p_k)$ converging to $p=G(p)$.',
      hu: 'A kontrakciós elv $\\mathbb{R}^n$-ben: $p_{k+1}=G(p_k)$ a $p=G(p)$ ponthoz tart.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'The fixed-point theorem carries over to $G\\colon D\\subset\\mathbb{R}^n\\to D$: if $G$ is a **contraction**, $\\|G(x)-G(y)\\|\\le L\\|x-y\\|$ with $L<1$, then $p_{k+1}=G(p_k)$ converges to the unique fixed point from any start. A sufficient condition is $\\|J_G(p)\\|<1$ near $p$.',
          hu: 'A fixpont-tétel átvihető $G\\colon D\\subset\\mathbb{R}^n\\to D$-re: ha $G$ **kontrakció**, $\\|G(x)-G(y)\\|\\le L\\|x-y\\|$ $L<1$-gyel, akkor $p_{k+1}=G(p_k)$ bármely startból az egyetlen fixponthoz tart. Elégséges feltétel $\\|J_G(p)\\|<1$ $p$ közelében.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Pick a contraction $G$ and a starting point; the polyline traces the 2-D iterates spiralling into the fixed point (red).',
          hu: 'Válassz egy $G$ kontrakciót és egy startpontot; a töröttvonal a 2D iteráltakat követi, ahogy ráhúzódnak a fixpontra (piros).',
        },
      },
      { kind: 'widget', name: 'FixedPoint2D' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'What does $\\|J_G(p)\\|<1$ guarantee locally?',
          hu: 'Mit garantál lokálisan $\\|J_G(p)\\|<1$?',
        },
        solution: {
          en: 'By continuity $G$ is a contraction on a neighbourhood of $p$, so the iteration converges locally and linearly with rate $\\approx\\|J_G(p)\\|$.',
          hu: 'A folytonosság miatt $G$ kontrakció $p$ egy környezetén, így az iteráció lokálisan, lineárisan konvergál $\\approx\\|J_G(p)\\|$ rátával.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.12 ─────────────────────────────
  {
    slug: 'newton-nd',
    section: '2.12',
    title: { en: "Newton's Method in n Dimensions", hu: 'Newton-módszer $n$-dimenzióban' },
    summary: {
      en: 'Solve $F(x)=0$ by $p_{k+1}=p_k-J(p_k)^{-1}F(p_k)$; locally quadratic.',
      hu: 'Az $F(x)=0$ megoldása $p_{k+1}=p_k-J(p_k)^{-1}F(p_k)$ lépéssel; lokálisan kvadratikus.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'For a system $F(x)=0$, linearize: $F(p_k)+J(p_k)(x-p_k)=0$ gives the Newton step\n$$p_{k+1}=p_k-J(p_k)^{-1}F(p_k).$$\nIn practice we **solve** $J\\,\\Delta=-F$ rather than invert $J$. It is locally quadratic where $J$ is non-singular.',
          hu: 'Az $F(x)=0$ rendszerre linearizálunk: $F(p_k)+J(p_k)(x-p_k)=0$ adja a Newton-lépést\n$$p_{k+1}=p_k-J(p_k)^{-1}F(p_k).$$\nA gyakorlatban a $J\\,\\Delta=-F$ rendszert **megoldjuk**, nem invertálunk. Lokálisan kvadratikus, ahol $J$ nem szinguláris.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'The example system (Hartung 2.51) has root $p^\\*=(1,0)$. The green curve is $f_2=0$; the blue trajectory is Newton from your chosen start.',
          hu: 'A példarendszer (Hartung 2.51) gyöke $p^\\*=(1,0)$. A zöld görbe $f_2=0$; a kék pálya a Newton-iteráció a választott startból.',
        },
      },
      { kind: 'widget', name: 'Newton2DPlot' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'Why solve $J\\Delta=-F$ instead of forming $J^{-1}$?',
          hu: 'Miért a $J\\Delta=-F$ megoldása, és nem a $J^{-1}$ képzése?',
        },
        solution: {
          en: 'Solving is cheaper ($O(n^3/3)$ vs full inverse) and more numerically stable; the explicit inverse is rarely needed.',
          hu: 'A megoldás olcsóbb ($O(n^3/3)$ a teljes inverzhez képest) és numerikusan stabilabb; az explicit inverzre ritkán van szükség.',
        },
      },
    ],
  },

  // ───────────────────────────── §2.13 ─────────────────────────────
  {
    slug: 'broyden',
    section: '2.13',
    title: { en: 'Quasi-Newton · Broyden’s Method', hu: 'Kvázi-Newton · Broyden-módszer' },
    summary: {
      en: 'Avoid recomputing the Jacobian: a rank-one update keeps superlinear convergence cheaply.',
      hu: 'A Jacobi-mátrix újraszámítása nélkül: egy rang-egy frissítés olcsón tart szuperlineáris konvergenciát.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Forming and factoring $J$ every step is expensive. **Broyden’s method** starts from an approximate Jacobian $A_0$ and updates it by a *rank-one* secant correction so that $A_{k+1}$ matches the observed change of $F$. Convergence is **superlinear** without any analytic derivatives.',
          hu: 'A $J$ minden lépésben való felírása és faktorizálása drága. A **Broyden-módszer** egy közelítő $A_0$ Jacobi-mátrixból indul, és *rang-egy* szelő-korrekcióval frissíti, hogy $A_{k+1}$ illeszkedjen $F$ megfigyelt változására. A konvergencia **szuperlineáris**, analitikus derivált nélkül.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'From the same start, Newton (red) curves down quadratically while Broyden (blue) is a touch slower but needs no Jacobian — compare the two error curves.',
          hu: 'Ugyanabból a startból a Newton (piros) kvadratikusan zuhan, a Broyden (kék) kicsit lassabb, de nem kell Jacobi-mátrix — vesd össze a két hibagörbét.',
        },
      },
      { kind: 'widget', name: 'BroydenVsNewton' },
      {
        kind: 'exercise',
        number: 1,
        problem: {
          en: 'What is the per-step cost advantage of Broyden over Newton for large $n$?',
          hu: 'Mi a Broyden lépésenkénti költségelőnye a Newtonnal szemben nagy $n$-re?',
        },
        solution: {
          en: 'No Jacobian evaluation and only an $O(n^2)$ update (via Sherman–Morrison) instead of an $O(n^3)$ factorization each step.',
          hu: 'Nincs Jacobi-kiértékelés, és csak $O(n^2)$ frissítés (Sherman–Morrison) az $O(n^3)$ faktorizáció helyett lépésenként.',
        },
      },
    ],
  },
]
