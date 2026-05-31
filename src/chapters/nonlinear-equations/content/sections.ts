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
      en: 'The nine theorems behind every root-finder (Weierstrass, Bolzano/IVT, Rolle, MVT, Taylor, Cantor, FTA…), with a glossary and flashcards.',
      hu: 'A gyökkeresés kilenc alaptétele (Weierstrass, Bolzano, Rolle, középértéktétel, Taylor, Cantor, algebra alaptétele…), fogalomtárral és tanulókártyákkal.',
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
        title: { en: 'Extreme Value Theorem', hu: 'Weierstrass-tétel' },
        text: {
          en: 'If $f\\in C[a,b]$ then $f$ attains its maximum and minimum on $[a,b]$: there exist $c,d\\in[a,b]$ with $f(d)\\le f(x)\\le f(c)$ for all $x\\in[a,b]$.',
          hu: 'Ha $f\\in C[a,b]$, akkor $f$ felveszi a maximumát és minimumát $[a,b]$-n: van olyan $c,d\\in[a,b]$, hogy $f(d)\\le f(x)\\le f(c)$ minden $x\\in[a,b]$-re.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.2',
        title: { en: 'Intermediate Value Theorem (Bolzano)', hu: 'Bolzano-tétel (Darboux)' },
        text: {
          en: 'If $f\\in C[a,b]$, $f(a)\\ne f(b)$ and $d$ lies between $f(a)$ and $f(b)$, then $f(c)=d$ for some $c\\in(a,b)$. In particular $f(a)\\,f(b)<0$ forces a root inside $(a,b)$ — the basis of every bracketing method.',
          hu: 'Ha $f\\in C[a,b]$, $f(a)\\ne f(b)$ és $d$ az $f(a)$ és $f(b)$ közé esik, akkor $f(c)=d$ valamely $c\\in(a,b)$-re. Speciálisan $f(a)\\,f(b)<0$ esetén van gyök $(a,b)$-ben — minden beágyazó módszer alapja.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.3',
        title: { en: 'Rolle’s Theorem', hu: 'Rolle-tétel' },
        text: {
          en: 'If $f\\in C^1[a,b]$ and $f(a)=f(b)$, then $f\'(\\xi)=0$ for some $\\xi\\in(a,b)$ — a horizontal tangent. It is the special case of the mean value theorem with equal endpoints.',
          hu: 'Ha $f\\in C^1[a,b]$ és $f(a)=f(b)$, akkor $f\'(\\xi)=0$ valamely $\\xi\\in(a,b)$-re — vízszintes érintő. A középértéktétel speciális esete egyenlő végpontoknál.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.4',
        title: { en: 'Lagrange’s Mean Value Theorem', hu: 'Lagrange-középértéktétel' },
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
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.5',
        title: { en: 'Taylor’s Theorem', hu: 'Taylor-tétel' },
        text: {
          en: 'If $f\\in C^{n+1}[a,b]$ and $x_0\\in(a,b)$, then for every $x$ there is $\\xi$ between $x$ and $x_0$ with $f(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ — the last term is the remainder. It underlies Newton’s and the secant method’s convergence rates.',
          hu: 'Ha $f\\in C^{n+1}[a,b]$ és $x_0\\in(a,b)$, akkor minden $x$-hez van $\\xi$ az $x$ és $x_0$ között, hogy $f(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ — az utolsó tag a maradéktag. Ez adja a Newton- és a szelőmódszer konvergenciarendjét.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.6',
        title: { en: 'Mean Value Theorem for Integrals', hu: 'Integrál-középértéktétel' },
        text: {
          en: 'If $f\\in C[a,b]$ and $g$ is integrable with no sign change on $[a,b]$, then $\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx$ for some $\\xi\\in(a,b)$.',
          hu: 'Ha $f\\in C[a,b]$ és $g$ integrálható, $[a,b]$-n előjelet nem váltó, akkor $\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx$ valamely $\\xi\\in(a,b)$-re.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.7',
        title: { en: 'Cantor’s Intersection Theorem', hu: 'Cantor-féle közösrész-tétel' },
        text: {
          en: 'A sequence of nested closed bounded intervals $[a_{n+1},b_{n+1}]\\subset[a_n,b_n]$ with $(b_n-a_n)\\to 0$ shrinks to a single common point: $a_n\\to c$ and $b_n\\to c$ for one $c\\in[a_1,b_1]$. This is precisely what makes bisection converge.',
          hu: 'Egymásba skatulyázott, zárt, korlátos $[a_{n+1},b_{n+1}]\\subset[a_n,b_n]$ intervallumok sorozata, ahol $(b_n-a_n)\\to 0$, egyetlen közös pontra húzódik össze: $a_n\\to c$ és $b_n\\to c$ valamely $c\\in[a_1,b_1]$-re. Pontosan ettől konvergens a felezés.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.8',
        title: { en: 'Monotone Convergence', hu: 'Monoton konvergencia' },
        text: {
          en: 'A monotone and bounded real sequence has a finite limit.',
          hu: 'Minden monoton és korlátos valós sorozatnak van véges határértéke.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.9',
        title: { en: 'Fundamental Theorem of Algebra', hu: 'Az algebra alaptétele' },
        text: {
          en: 'Every degree-$n$ polynomial with complex coefficients has exactly $n$ complex roots, counted with multiplicity. Consequently a degree-$n$ polynomial with $n+1$ distinct roots must be identically zero.',
          hu: 'Minden $n$-edfokú, komplex együtthatós polinomnak pontosan $n$ komplex gyöke van (multiplicitással). Ezért egy $n$-edfokú polinom, amelynek $n+1$ különböző gyöke van, azonosan nulla.',
        },
      },
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
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.1 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.1 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'Glossary' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.1. Read the question, recall the answer, then flip. Shuffle for spaced practice.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.1-hez. Olvasd el a kérdést, idézd fel a választ, majd fordíts. Keverd össze a gyakorláshoz.',
        },
      },
      { kind: 'widget', name: 'Flashcards' },
    ],
  },

  // ───────────────────────────── §2.2 ─────────────────────────────
  {
    slug: 'fixed-point',
    section: '2.2',
    title: { en: 'Fixed-Point Iteration', hu: 'Fixpont iteráció' },
    summary: {
      en: 'The recursion $p_{k+1}=g(p_k)$, the cobweb diagram, existence/uniqueness, the contraction principle with a priori/a posteriori bounds, and local convergence — plus glossary and flashcards.',
      hu: 'A $p_{k+1}=g(p_k)$ rekurzió, a lépcsős diagram, létezés/egyértelműség, a kontrakciós elv a priori/a posteriori korláttal, és a lokális konvergencia — fogalomtárral és tanulókártyákkal.',
    },
    blocks: [
      {
        kind: 'md',
        text: {
          en: 'Many methods build an infinite sequence whose limit is the exact solution. A recursion $p_{k+1}=h(p_k,\\dots,p_{k-m+1})$ is an **$m$-step iteration** (it needs $m$ initial values). Here we study the one-step case. Given $g\\colon I\\to I$, the sequence $p_{k+1}=g(p_k)$ from a starting value $p_0$ is a **fixed-point iteration**. Its limit, if it exists, satisfies the *fixed-point equation* $g(p)=p$. Geometrically a fixed point is where $y=g(x)$ meets $y=x$.',
          hu: 'Sok módszer végtelen sorozatot épít, amelynek határértéke a pontos megoldás. A $p_{k+1}=h(p_k,\\dots,p_{k-m+1})$ rekurzió egy **$m$-lépéses iteráció** ($m$ kezdőérték kell hozzá). Itt az egylépéses esettel foglalkozunk. Adott $g\\colon I\\to I$ esetén a $p_0$ kezdőértékből induló $p_{k+1}=g(p_k)$ sorozat a **fixpont iteráció**. Határértéke — ha létezik — kielégíti a $g(p)=p$ *fixpont-egyenletet*. Geometriailag a fixpont az $y=g(x)$ és $y=x$ metszéspontja.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.11',
        title: { en: 'Limit of a convergent iteration', hu: 'Konvergens iteráció határértéke' },
        text: {
          en: 'Let $g$ be continuous and $p_{k+1}=g(p_k)$. If $p_k\\to p$, then $p=g(p)$ — the limit is a fixed point. (Continuity gives $g(p_k)\\to g(p)$, while $p_{k+1}\\to p$.)',
          hu: 'Legyen $g$ folytonos és $p_{k+1}=g(p_k)$. Ha $p_k\\to p$, akkor $p=g(p)$ — a határérték fixpont. (A folytonosság miatt $g(p_k)\\to g(p)$, miközben $p_{k+1}\\to p$.)',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'A fixed-point iteration need not converge: $g(x)=2x$, $p_0=1$ gives $p_k=2^k\\to\\infty$, and $g(x)=-x$, $p_0=1$ gives the oscillating $p_k=(-1)^k$. Sufficient conditions are needed.',
          hu: 'A fixpont iteráció nem feltétlenül konvergens: $g(x)=2x$, $p_0=1$ esetén $p_k=2^k\\to\\infty$, $g(x)=-x$, $p_0=1$ esetén pedig az oszcilláló $p_k=(-1)^k$ adódik. Elégséges feltételek kellenek.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.12',
        title: { en: 'Existence & uniqueness', hu: 'Létezés és egyértelműség' },
        text: {
          en: 'If $g\\colon[a,b]\\to[a,b]$ is continuous it has a fixed point (apply the IVT to $f(x)=g(x)-x$). If in addition $g$ is differentiable on $(a,b)$ with $|g\'(x)|\\le c<1$, the fixed point is unique (by the mean value theorem $|p-q|=|g\'(\\xi)||p-q|\\le c|p-q|$ forces $p=q$).',
          hu: 'Ha $g\\colon[a,b]\\to[a,b]$ folytonos, van fixpontja (alkalmazzuk a Bolzano-tételt $f(x)=g(x)-x$-re). Ha ráadásul $g$ differenciálható $(a,b)$-n és $|g\'(x)|\\le c<1$, a fixpont egyértelmű (a középértéktétel szerint $|p-q|=|g\'(\\xi)||p-q|\\le c|p-q|$ miatt $p=q$).',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Lipschitz continuity & contraction', hu: 'Lipschitz-folytonosság és kontrakció' },
        text: {
          en: '$g$ is **Lipschitz continuous** on $I$ if $|g(x)-g(y)|\\le c\\,|x-y|$ for all $x,y\\in I$; the smallest such $c\\ge 0$ is the **Lipschitz constant**. For $g\\in C^1[a,b]$ take $c=\\max|g\'|$. A **contraction** is a Lipschitz function with $0\\le c<1$. This is all the proofs really use.',
          hu: '$g$ **Lipschitz-folytonos** $I$-n, ha $|g(x)-g(y)|\\le c\\,|x-y|$ minden $x,y\\in I$-re; a legkisebb ilyen $c\\ge 0$ a **Lipschitz-konstans**. $g\\in C^1[a,b]$ esetén $c=\\max|g\'|$. A **kontrakció** olyan Lipschitz-függvény, amelyre $0\\le c<1$. A bizonyítások valójában csak ezt használják.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.13',
        title: { en: 'Fixed-point theorem', hu: 'Fixpont-tétel' },
        text: {
          en: 'Let $g\\colon[a,b]\\to[a,b]$ be continuous, differentiable on $(a,b)$ with $|g\'(x)|\\le c<1$. Then for any $p_0$ the iteration converges to the unique fixed point $p$ with the **a priori** bound $|p_k-p|\\le c^k|p_0-p|$ (2.1) and the **a posteriori** bound $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (2.2).',
          hu: 'Legyen $g\\colon[a,b]\\to[a,b]$ folytonos, $(a,b)$-n differenciálható, $|g\'(x)|\\le c<1$. Ekkor bármely $p_0$-ból az iteráció a $p$ egyetlen fixponthoz konvergál, az **a priori** $|p_k-p|\\le c^k|p_0-p|$ (2.1) és az **a posteriori** $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (2.2) korláttal.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.14',
        title: { en: 'Contraction principle', hu: 'Kontrakciós elv' },
        text: {
          en: 'If $g\\colon[a,b]\\to[a,b]$ is a contraction (Lipschitz with $0\\le c<1$), then $g$ has a unique fixed point $p$ and $p_{k+1}=g(p_k)$ converges to it for **every** $p_0\\in[a,b]$, with bounds (2.1) and (2.2). Differentiability is not required — only the Lipschitz estimate.',
          hu: 'Ha $g\\colon[a,b]\\to[a,b]$ kontrakció ($0\\le c<1$ Lipschitz-konstanssal), akkor $g$-nek pontosan egy $p$ fixpontja van, és $p_{k+1}=g(p_k)$ **bármely** $p_0\\in[a,b]$-ből oda konvergál a (2.1) és (2.2) korláttal. Differenciálhatóság nem kell — csak a Lipschitz-becslés.',
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
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Local vs global convergence', hu: 'Lokális és globális konvergencia' },
        text: {
          en: 'An iteration **converges locally** to $p$ if there is $\\delta>0$ such that every $p_0\\in(p-\\delta,p+\\delta)$ produces a sequence converging to $p$. If it converges for **every** admissible $p_0$, it is **globally convergent**.',
          hu: 'Egy iteráció **lokálisan konvergál** $p$-hez, ha van $\\delta>0$, amelyre minden $p_0\\in(p-\\delta,p+\\delta)$ esetén a sorozat $p$-hez tart. Ha **minden** megengedett $p_0$-ra konvergál, akkor **globálisan konvergens**.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.15',
        title: { en: 'Local convergence', hu: 'Lokális konvergencia' },
        text: {
          en: 'If $g\\in C^1[a,b]$, $p\\in(a,b)$ is a fixed point and $|g\'(p)|<1$, then the iteration converges locally to $p$: there is $\\delta>0$ such that $p_{k+1}=g(p_k)\\to p$ for all $p_0\\in(p-\\delta,p+\\delta)$. (If $|g\'(p)|>1$ it cannot converge to $p$ from $p_0\\ne p$.)',
          hu: 'Ha $g\\in C^1[a,b]$, $p\\in(a,b)$ fixpont és $|g\'(p)|<1$, akkor az iteráció lokálisan $p$-hez konvergál: van $\\delta>0$, hogy $p_{k+1}=g(p_k)\\to p$ minden $p_0\\in(p-\\delta,p+\\delta)$-ra. (Ha $|g\'(p)|>1$, akkor $p_0\\ne p$-ből nem konvergálhat $p$-hez.)',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Show that the Babylonian recursion $p_k=\\tfrac12 p_{k-1}+\\dfrac{A}{2p_{k-1}}$ converges to $\\sqrt{A}$ for any $p_0>0$.',
          hu: 'Mutasd meg, hogy a babiloni $p_k=\\tfrac12 p_{k-1}+\\dfrac{A}{2p_{k-1}}$ rekurzió bármely $p_0>0$ esetén $\\sqrt{A}$-hoz konvergál.',
        },
        solution: {
          en: 'It is the fixed-point iteration of $g(x)=\\tfrac12 x+\\tfrac{A}{2x}$, whose fixed point solves $x=\\tfrac12 x+\\tfrac{A}{2x}\\Rightarrow x^2=A$. Since $g\'(x)=\\tfrac12-\\tfrac{A}{2x^2}$ and $g\'(\\sqrt A)=0<1$, Theorem 2.15 gives local (indeed global on $x>0$) convergence — this is Newton’s method for $x^2-A$.',
          hu: 'Ez a $g(x)=\\tfrac12 x+\\tfrac{A}{2x}$ fixpont iterációja; a fixpont az $x=\\tfrac12 x+\\tfrac{A}{2x}\\Rightarrow x^2=A$ egyenletet oldja meg. Mivel $g\'(x)=\\tfrac12-\\tfrac{A}{2x^2}$ és $g\'(\\sqrt A)=0<1$, a 2.15. tétel lokális (sőt $x>0$-n globális) konvergenciát ad — ez az $x^2-A$ Newton-módszere.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.2 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.2 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryFPI' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.2. Read the question, recall the answer, then flip. Shuffle for spaced practice.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.2-höz. Olvasd el a kérdést, idézd fel a választ, majd fordíts. Keverd össze a gyakorláshoz.',
        },
      },
      { kind: 'widget', name: 'FlashcardsFPI' },
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
          en: 'Convergence is a direct consequence of **Cantor’s nested-interval theorem** (Thm 2.7): the brackets are nested, closed, and their length $(b-a)/2^k\\to0$, so they shrink to the single common point $p$. Inverting the error bound gives the **step count** for a tolerance $\\varepsilon$:',
          hu: 'A konvergencia közvetlenül a **Cantor-féle közösrész-tételből** (2.7. tétel) következik: az intervallumok egymásba skatulyázottak, zártak, hosszuk $(b-a)/2^k\\to0$, így egyetlen közös $p$ pontra húzódnak össze. A hibakorlát megfordítása megadja a **lépésszámot** egy $\\varepsilon$ tűréshez:',
        },
      },
      {
        kind: 'md',
        text: {
          en: '$$k \\ge \\log_2\\frac{b-a}{\\varepsilon} - 1. \\tag{2.5}$$',
          hu: '$$k \\ge \\log_2\\frac{b-a}{\\varepsilon} - 1. \\tag{2.5}$$',
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
          en: 'Use (2.5): $k\\ge \\log_2(1/10^{-4})-1=\\log_2 10^4-1\\approx 12.3$, so $k\\ge 13$. (Equivalently $2^{k+1}>10^4$.)',
          hu: '(2.5) alapján: $k\\ge \\log_2(1/10^{-4})-1=\\log_2 10^4-1\\approx 12{,}3$, tehát $k\\ge 13$. (Ekvivalensen $2^{k+1}>10^4$.)',
        },
      },
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Apply bisection to $f(x)=1/x$ on $[-0.5,3]$. What happens?',
          hu: 'Alkalmazd a felezést az $f(x)=1/x$ függvényre $[-0.5,3]$-on. Mi történik?',
        },
        solution: {
          en: '$f(-0.5)=-2<0$ and $f(3)=1/3>0$, so $f(a)f(b)<0$ and the algorithm runs — but $f$ is **not continuous** on the interval (pole at $0$). The brackets converge to $x=0$, a singularity, not a root. The sign-change test alone does not guarantee a root; continuity (the IVT hypothesis) is essential.',
          hu: '$f(-0.5)=-2<0$ és $f(3)=1/3>0$, tehát $f(a)f(b)<0$, és az algoritmus lefut — de $f$ **nem folytonos** az intervallumon (pólus a $0$-ban). Az intervallumok az $x=0$ szingularitáshoz tartanak, nem gyökhöz. Az előjelváltás önmagában nem garantál gyököt; a folytonosság (a Bolzano-feltétel) elengedhetetlen.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.3 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.3 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryBisection' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.3. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.3-hoz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsBisection' },
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
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.19',
        title: { en: 'Convergence of false position', hu: 'A húrmódszer konvergenciája' },
        text: {
          en: 'If $f\\in C[a,b]$ is **convex or concave** on $[a,b]$ and $f(a)f(b)<0$, then regula falsi converges to the unique root $p$. (For convex $f$ one endpoint stays fixed and $p_k$ is monotone, bounded, hence convergent; the limit satisfies $f(p)=0$.)',
          hu: 'Ha $f\\in C[a,b]$ **konvex vagy konkáv** $[a,b]$-n és $f(a)f(b)<0$, akkor a húrmódszer az egyetlen $p$ gyökhöz konvergál. (Konvex $f$ esetén az egyik végpont rögzített, $p_k$ monoton és korlátos, tehát konvergens; a határérték kielégíti $f(p)=0$-t.)',
        },
      },
      {
        kind: 'theorem',
        tkind: 'algorithm',
        number: '2.18',
        title: { en: 'Method of false position', hu: 'Húrmódszer' },
        text: {
          en: '```\nINPUT:  f, [a,b] with f(a)f(b) < 0, TOL, MAXIT\nOUTPUT: p — approximate root\n\ni ← 1;  q ← a\nwhile i < MAXIT do\n    p ← a - f(a)(a - b)/(f(a) - f(b))\n    if |p - q| < TOL then output(p); stop\n    if      f(p)f(b) < 0 then a ← p\n    else if f(a)f(p) < 0 then b ← p\n    else output(p); stop          # f(p) = 0\n    i ← i + 1;  q ← p\nend do\noutput("Maximal iteration step exceeded.")\n```\nIn code, also guard against $f(a)=f(b)$ (division by zero).',
          hu: '```\nBEMENET:  f, [a,b] ahol f(a)f(b) < 0, TOL, MAXIT\nKIMENET: p — közelítő gyök\n\ni ← 1;  q ← a\nwhile i < MAXIT do\n    p ← a - f(a)(a - b)/(f(a) - f(b))\n    if |p - q| < TOL then output(p); stop\n    if      f(p)f(b) < 0 then a ← p\n    else if f(a)f(p) < 0 then b ← p\n    else output(p); stop          # f(p) = 0\n    i ← i + 1;  q ← p\nend do\noutput("Túllépte a maximális iterációszámot.")\n```\nKódban védekezz az $f(a)=f(b)$ eset (nullával osztás) ellen is.',
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
        kind: 'md',
        text: {
          en: 'A warning (Example 2.21): the speed is interval-dependent. On $[0,1]$ regula falsi beats bisection (≈8 vs 16 steps for $e^x-2\\cos x$), but on the wide interval $[0,4]$ the fixed endpoint stays far away and it needs **50+** steps — slower than the 18 bisection would take. Convergence is guaranteed, but not always fast.',
          hu: 'Figyelmeztetés (2.21. példa): a sebesség intervallumfüggő. $[0,1]$-en a húrmódszer veri a felezést (≈8 vs 16 lépés $e^x-2\\cos x$-re), de a széles $[0,4]$ intervallumon a rögzített végpont távol marad, és **50+** lépés kell — lassabb, mint a felezés 18 lépése. A konvergencia garantált, de nem mindig gyors.',
        },
      },
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
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.4 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.4 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryRegula' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.4. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.4-hez. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsRegula' },
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
        kind: 'md',
        text: {
          en: 'The idea is a recurring one in numerics: replace a hard problem by a *nearby easy* one. Linearize $f$ at $p_k$ by its first-order Taylor polynomial and solve the resulting **linear** equation $f(p_k)+f\'(p_k)(x-p_k)=0$; its solution is the next iterate (2.7). Geometrically: the tangent’s x-intercept.',
          hu: 'Az ötlet visszatérő a numerikában: helyettesítsünk egy nehéz feladatot egy *közeli, könnyű* feladattal. Linearizáljuk $f$-et $p_k$-ban az elsőrendű Taylor-polinomjával, és oldjuk meg a kapott **lineáris** $f(p_k)+f\'(p_k)(x-p_k)=0$ egyenletet; megoldása a következő iterált (2.7). Geometriailag: az érintő tengelymetszete.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Newton as a fixed-point map — why it is quadratic', hu: 'Newton mint fixpont-leképezés — miért kvadratikus' },
        text: {
          en: 'Newton is the fixed-point iteration of\n$$g(x)=x-\\frac{f(x)}{f\'(x)}. \\tag{2.8}$$\nDifferentiating,\n$$g\'(x)=\\frac{f(x)f\'\'(x)}{(f\'(x))^2}. \\tag{2.9}$$\nAt a simple root $p$ ($f(p)=0$, $f\'(p)\\ne0$) this gives $g\'(p)=0$. A fixed point with $g\'(p)=0$ converges **quadratically** — that is the engine behind Newton’s speed.',
          hu: 'Newton a\n$$g(x)=x-\\frac{f(x)}{f\'(x)} \\tag{2.8}$$\nfüggvény fixpont iterációja. Deriválva\n$$g\'(x)=\\frac{f(x)f\'\'(x)}{(f\'(x))^2}. \\tag{2.9}$$\nEgyszeres $p$ gyöknél ($f(p)=0$, $f\'(p)\\ne0$) ez $g\'(p)=0$-t ad. A $g\'(p)=0$ fixpont **kvadratikusan** konvergál — ez a Newton-módszer gyorsaságának motorja.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.23',
        title: { en: 'Local convergence', hu: 'Lokális konvergencia' },
        text: {
          en: 'If $f\\in C^2[a,b]$ and $p\\in(a,b)$ is a simple root ($f(p)=0$, $f\'(p)\\ne0$), then Newton converges locally to $p$ (quadratically). It follows immediately from $g\'(p)=0$ and the fixed-point local-convergence theorem (Thm 2.15).',
          hu: 'Ha $f\\in C^2[a,b]$ és $p\\in(a,b)$ egyszeres gyök ($f(p)=0$, $f\'(p)\\ne0$), akkor Newton lokálisan (kvadratikusan) konvergál $p$-hez. Azonnal következik $g\'(p)=0$-ból és a fixpont lokális konvergencia tételből (2.15).',
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
        kind: 'md',
        text: {
          en: 'The arctan case (Example 2.24) shows the failure precisely. Here $f(x)=\\tfrac12\\arctan x$ has the single root $0$ with $f\'(0)=\\tfrac12$, so Newton converges *near* $0$. But there is a threshold $p^*$: if $|p_0|<p^*$ the iterates → 0; if $|p_0|=p^*$ they cycle as $\\{p_0,-p_0\\}$ forever; if $|p_0|>p^*$ they alternate in sign with $|p_k|\\to\\infty$ (and eventually the computed $f\'(p_k)$ underflows to 0 and the program crashes).',
          hu: 'Az arctan-eset (2.24. példa) pontosan megmutatja a kudarcot. Itt $f(x)=\\tfrac12\\arctan x$ egyetlen gyöke $0$, $f\'(0)=\\tfrac12$, így Newton a $0$ *közelében* konvergál. De van egy $p^*$ küszöb: ha $|p_0|<p^*$, az iteráltak → 0; ha $|p_0|=p^*$, örökké $\\{p_0,-p_0\\}$ szerint ciklizálnak; ha $|p_0|>p^*$, váltakozó előjellel $|p_k|\\to\\infty$ (és végül a számolt $f\'(p_k)$ alulcsordul 0-ra, a program elszáll).',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Derive a Newton iteration to approximate $\\sqrt[n]{a}$ ($a>0$).',
          hu: 'Vezess le egy Newton-iterációt $\\sqrt[n]{a}$ közelítésére ($a>0$).',
        },
        solution: {
          en: 'Take $f(x)=x^n-a$, $f\'(x)=nx^{n-1}$. Then $p_{k+1}=p_k-\\dfrac{p_k^n-a}{n\\,p_k^{n-1}}=\\dfrac{(n-1)p_k+a\\,p_k^{1-n}}{n}$. For $n=2$ this is the Babylonian $\\tfrac12(p_k+a/p_k)$.',
          hu: 'Legyen $f(x)=x^n-a$, $f\'(x)=nx^{n-1}$. Ekkor $p_{k+1}=p_k-\\dfrac{p_k^n-a}{n\\,p_k^{n-1}}=\\dfrac{(n-1)p_k+a\\,p_k^{1-n}}{n}$. $n=2$ esetén ez a babiloni $\\tfrac12(p_k+a/p_k)$.',
        },
      },
      {
        kind: 'exercise',
        number: 3,
        problem: {
          en: 'For $f(x)=\\tfrac12\\arctan x$ explain the period-2 cycle at $|p_0|=p^*$.',
          hu: 'Az $f(x)=\\tfrac12\\arctan x$ esetén magyarázd meg a 2-periódusú ciklust $|p_0|=p^*$-nál.',
        },
        solution: {
          en: 'By symmetry $g(-x)=-g(x)$. The threshold $p^*$ is the positive solution of $g(p^*)=-p^*$, i.e. $p^*-\\dfrac{f(p^*)}{f\'(p^*)}=-p^*$. From there $p_1=-p_0$, $p_2=-p_1=p_0$, … so the sequence is stuck in $\\{p_0,-p_0\\}$ and never reaches the root.',
          hu: 'A szimmetria miatt $g(-x)=-g(x)$. A $p^*$ küszöb a $g(p^*)=-p^*$ egyenlet pozitív megoldása, azaz $p^*-\\dfrac{f(p^*)}{f\'(p^*)}=-p^*$. Innen $p_1=-p_0$, $p_2=-p_1=p_0$, … a sorozat beragad a $\\{p_0,-p_0\\}$ párba, és sosem éri el a gyököt.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.5 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.5 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryNewton' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.5. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.5-höz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsNewton' },
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
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.26',
        title: { en: 'Secant error recursion', hu: 'A szelőmódszer hiba-rekurziója' },
        text: {
          en: 'Let $f\\in C^2[a,b]$ and let $p$ be a simple root. Then for each $k$ there are $\\xi_k\\in\\langle p_k,p_{k-1},p\\rangle$ and $\\eta_k\\in\\langle p_k,p_{k-1}\\rangle$ with\n$$p_{k+1}-p=\\frac12\\,\\frac{f\'\'(\\xi_k)}{f\'(\\eta_k)}\\,(p_k-p)(p_{k-1}-p). \\tag{2.11}$$\nThe new error is essentially the **product** of the previous two — the key to its speed. (The bracket factor is the second divided difference $f[p_{k-1},p,p_k]=f\'\'(\\xi_k)/2$ from Ch. 6.)',
          hu: 'Legyen $f\\in C^2[a,b]$ és $p$ egyszeres gyök. Ekkor minden $k$-ra van $\\xi_k\\in\\langle p_k,p_{k-1},p\\rangle$ és $\\eta_k\\in\\langle p_k,p_{k-1}\\rangle$, hogy\n$$p_{k+1}-p=\\frac12\\,\\frac{f\'\'(\\xi_k)}{f\'(\\eta_k)}\\,(p_k-p)(p_{k-1}-p). \\tag{2.11}$$\nAz új hiba lényegében az előző kettő **szorzata** — ez a gyorsaság kulcsa. (A zárójeles tényező a második osztott differencia $f[p_{k-1},p,p_k]=f\'\'(\\xi_k)/2$ a 6. fejezetből.)',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.27',
        title: { en: 'Local convergence, order $\\varphi$', hu: 'Lokális konvergencia, rend $\\varphi$' },
        text: {
          en: 'Under the same hypotheses the secant method converges locally to $p$. Writing $M|p_k-p|\\le\\varepsilon^{q_k}$, the product law (2.11) forces $q_{k+1}=q_k+q_{k-1}$ — the **Fibonacci** recursion — so $q_k\\sim\\varphi^k$ with $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1.618$. Hence $|p_k-p|\\to0$ and the **order of convergence is $\\varphi$** (superlinear).',
          hu: 'Ugyanezen feltételek mellett a szelőmódszer lokálisan $p$-hez konvergál. $M|p_k-p|\\le\\varepsilon^{q_k}$-t írva a (2.11) szorzat-szabály kikényszeríti $q_{k+1}=q_k+q_{k-1}$-et — a **Fibonacci**-rekurziót —, így $q_k\\sim\\varphi^k$, ahol $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1{,}618$. Ezért $|p_k-p|\\to0$, és a **konvergencia rendje $\\varphi$** (szuperlineáris).',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'From the error recursion (2.11), why is the secant order $\\varphi$ rather than $2$?',
          hu: 'A (2.11) hiba-rekurzióból miért $\\varphi$ a szelő rendje, és nem $2$?',
        },
        solution: {
          en: 'Assume $|p_{k+1}-p|\\approx C|p_k-p|^{\\alpha}$. Substituting into $|p_{k+1}-p|\\approx K|p_k-p||p_{k-1}-p|$ and matching exponents gives $\\alpha=1+1/\\alpha$, i.e. $\\alpha^2=\\alpha+1$, whose positive root is $\\alpha=\\varphi$. Newton uses $(p_k-p)^2$ instead of the product, giving exponent $2$.',
          hu: 'Tegyük fel, hogy $|p_{k+1}-p|\\approx C|p_k-p|^{\\alpha}$. Behelyettesítve a $|p_{k+1}-p|\\approx K|p_k-p||p_{k-1}-p|$-be és a kitevőket egyeztetve $\\alpha=1+1/\\alpha$, azaz $\\alpha^2=\\alpha+1$ adódik, melynek pozitív gyöke $\\alpha=\\varphi$. A Newton a szorzat helyett $(p_k-p)^2$-et használ, ezért a kitevő $2$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.6 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.6 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossarySecant' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.6. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.6-hoz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsSecant' },
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
          en: 'When the limit $\\lambda=\\lim_{k\\to\\infty}\\dfrac{p_{k+1}-p}{(p_k-p)^{\\alpha}}$ exists and is finite, it is the **asymptotic error constant** (Eq. 2.18); its existence already implies convergence of order $\\alpha$. Linear convergence with $\\lambda=0$ is *superlinear*.',
          hu: 'Ha a $\\lambda=\\lim_{k\\to\\infty}\\dfrac{p_{k+1}-p}{(p_k-p)^{\\alpha}}$ határérték létezik és véges, az az **aszimptotikus hibakonstans** (2.18); létezése már önmagában $\\alpha$-rendű konvergenciát jelent. A $\\lambda=0$ lineáris konvergencia *szuperlineáris*.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.28',
        title: { en: 'Exact order', hu: 'Pontos rend' },
        text: {
          en: 'If $p_k\\to p$ with order $\\alpha$ and $\\lambda\\ne0$, then $\\dfrac{p_{k+1}-p}{(p_k-p)^{\\beta}}\\to0$ for every $\\beta<\\alpha$ and $\\dfrac{|p_{k+1}-p|}{|p_k-p|^{\\beta}}\\to\\infty$ for every $\\beta>\\alpha$. Hence the order is *exactly* $\\alpha$.',
          hu: 'Ha $p_k\\to p$ $\\alpha$ renddel és $\\lambda\\ne0$, akkor $\\dfrac{p_{k+1}-p}{(p_k-p)^{\\beta}}\\to0$ minden $\\beta<\\alpha$-ra, és $\\dfrac{|p_{k+1}-p|}{|p_k-p|^{\\beta}}\\to\\infty$ minden $\\beta>\\alpha$-ra. Így a rend *pontosan* $\\alpha$.',
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
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.30',
        title: { en: 'Order > 1 implies local convergence', hu: 'Az 1-nél nagyobb rend lokális konvergenciát ad' },
        text: {
          en: 'If $|p_{k+1}-p|\\le c|p_k-p|^{\\alpha}$ with $\\alpha>1$, then $|p_k-p|\\le c^{\\frac{\\alpha^k-1}{\\alpha-1}}|p_0-p|^{\\alpha^k}$ (Eq. 2.19), so $p_k\\to p$ whenever $c^{1/(\\alpha-1)}|p_0-p|<1$. Superlinear methods converge only from a good enough start.',
          hu: 'Ha $|p_{k+1}-p|\\le c|p_k-p|^{\\alpha}$ és $\\alpha>1$, akkor $|p_k-p|\\le c^{\\frac{\\alpha^k-1}{\\alpha-1}}|p_0-p|^{\\alpha^k}$ (2.19), így $p_k\\to p$, valahányszor $c^{1/(\\alpha-1)}|p_0-p|<1$. A szuperlineáris módszerek csak elég jó kezdőpontból konvergálnak.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.32',
        title: { en: 'Order of a fixed-point iteration', hu: 'Fixpont iteráció rendje' },
        text: {
          en: 'Let $g\\in C^m$ with $p=g(p)$. (i) If $|g\'(p)|<1$ the iteration is locally linear. (ii) If $g\'(p)=g\'\'(p)=\\dots=g^{(m-1)}(p)=0$, it converges locally with order $m$ and asymptotic constant $\\dfrac{g^{(m)}(p)}{m!}$. So a smooth one-step iteration has *integer* order.',
          hu: 'Legyen $g\\in C^m$, $p=g(p)$. (i) Ha $|g\'(p)|<1$, az iteráció lokálisan lineáris. (ii) Ha $g\'(p)=g\'\'(p)=\\dots=g^{(m-1)}(p)=0$, akkor lokálisan $m$-edrendben konvergál, $\\dfrac{g^{(m)}(p)}{m!}$ aszimptotikus konstanssal. Tehát a sima egylépéses iteráció rendje *egész*.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Multiplicity of a root', hu: 'Gyök multiplicitása' },
        text: {
          en: '$p$ is a root of **multiplicity** $m$ of $f$ if $f(x)=(x-p)^m q(x)$ with $q(p)\\ne0$ (Eq. 2.21). Equivalently (Thm 2.33) $f(p)=f\'(p)=\\dots=f^{(m-1)}(p)=0$ and $f^{(m)}(p)\\ne0$. $m=1$ is a *simple* root.',
          hu: '$p$ az $f$ $m$ **multiplicitású** gyöke, ha $f(x)=(x-p)^m q(x)$, ahol $q(p)\\ne0$ (2.21). Ekvivalensen (2.33. tétel) $f(p)=f\'(p)=\\dots=f^{(m-1)}(p)=0$ és $f^{(m)}(p)\\ne0$. $m=1$ az *egyszeres* gyök.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.34',
        title: { en: 'Newton’s order vs. multiplicity', hu: 'Newton rendje vs. multiplicitás' },
        text: {
          en: 'For $f\\in C^2$: (i) at a **simple** root Newton converges quadratically; (ii) at a root of **multiplicity $m>1$** it converges only **linearly**, with asymptotic constant $1-\\tfrac1m$ (since $g\'(p)=1-\\tfrac1m\\ne0$). Example 2.35: on $x^3+x^2-8x-12$ Newton is linear toward the double root $-2$ but quadratic toward the simple root $3$.',
          hu: '$f\\in C^2$ esetén: (i) **egyszeres** gyöknél Newton kvadratikusan konvergál; (ii) **$m>1$ multiplicitású** gyöknél csak **lineárisan**, $1-\\tfrac1m$ aszimptotikus konstanssal (mert $g\'(p)=1-\\tfrac1m\\ne0$). 2.35. példa: az $x^3+x^2-8x-12$-n Newton lineáris a $-2$ kettős gyökhöz, de kvadratikus a $3$ egyszeres gyökhöz.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Convergence can be **restored to quadratic** at a multiple root. Newton applied to $\\mu=f/f\'$ (which has $p$ as a *simple* root) gives\n$$p_{k+1}=p_k-\\frac{f(p_k)\\,f\'(p_k)}{(f\'(p_k))^2-f(p_k)\\,f\'\'(p_k)}, \\tag{2.23}$$\nor, if the multiplicity $m$ is known, the simpler $p_{k+1}=p_k-m\\,\\dfrac{f(p_k)}{f\'(p_k)}$.',
          hu: 'A konvergencia többszörös gyöknél **visszaállítható kvadratikusra**. A $\\mu=f/f\'$-re alkalmazott Newton (amelynek $p$ *egyszeres* gyöke) ezt adja:\n$$p_{k+1}=p_k-\\frac{f(p_k)\\,f\'(p_k)}{(f\'(p_k))^2-f(p_k)\\,f\'\'(p_k)}, \\tag{2.23}$$\nvagy, ha az $m$ multiplicitás ismert, az egyszerűbb $p_{k+1}=p_k-m\\,\\dfrac{f(p_k)}{f\'(p_k)}$.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Find the order of convergence of $p_k=1/k$, and of $p_k=1/k^n$.',
          hu: 'Add meg a $p_k=1/k$ és a $p_k=1/k^n$ sorozat konvergenciarendjét.',
        },
        solution: {
          en: 'Both → 0. The ratio $\\dfrac{p_{k+1}}{p_k}=\\big(\\tfrac{k}{k+1}\\big)^n\\to1$, so it is **not** linear (need $c<1$) — the order is $1$ but convergence is *sublinear* (slower than any geometric rate). Polynomial decay is the slowest useful case.',
          hu: 'Mindkettő → 0. A hányados $\\dfrac{p_{k+1}}{p_k}=\\big(\\tfrac{k}{k+1}\\big)^n\\to1$, ezért **nem** lineáris ($c<1$ kellene) — a rend $1$, de a konvergencia *szublineáris* (lassabb bármely mértani ütemnél). A polinomiális csökkenés a leglassabb hasznos eset.',
        },
      },
      {
        kind: 'exercise',
        number: 3,
        problem: {
          en: 'Show $p_k=10^{-2^k}\\to0$ quadratically.',
          hu: 'Mutasd meg, hogy $p_k=10^{-2^k}\\to0$ kvadratikusan.',
        },
        solution: {
          en: '$p_{k+1}=10^{-2^{k+1}}=10^{-2\\cdot2^{k}}=(10^{-2^{k}})^2=p_k^{\\,2}$, so $|p_{k+1}|=|p_k|^2$ exactly — order $2$ with $\\lambda=1$.',
          hu: '$p_{k+1}=10^{-2^{k+1}}=10^{-2\\cdot2^{k}}=(10^{-2^{k}})^2=p_k^{\\,2}$, tehát $|p_{k+1}|=|p_k|^2$ pontosan — rend $2$, $\\lambda=1$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.7 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.7 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryConv' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.7. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.7-hez. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsConv' },
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
        kind: 'md',
        text: {
          en: 'Two practical rules. **Always cap the iteration count** ($k<\\text{MAXIT}$) to avoid an infinite loop and to reject convergence that is too slow. And remember the criteria are **heuristic**: each can fire while $p_k$ is *not* near a root, so production code combines several of them.',
          hu: 'Két gyakorlati szabály. **Mindig korlátozd az iterációszámot** ($k<\\text{MAXIT}$), hogy elkerüld a végtelen ciklust és kizárd a túl lassú konvergenciát. És ne feledd: a feltételek **heurisztikusak**: bármelyik teljesülhet úgy, hogy $p_k$ *nincs* gyök közelében, ezért az éles kód többet kombinál belőlük.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'An iteration produces the harmonic partial sums $p_k=\\sum_{i=1}^k \\tfrac1i$. With only the absolute-step test (i), what happens — does it converge?',
          hu: 'Egy iteráció a harmonikus részösszegeket állítja elő: $p_k=\\sum_{i=1}^k \\tfrac1i$. Csak az abszolút lépés tesztet (i) használva mi történik — konvergál?',
        },
        solution: {
          en: 'The steps $|p_k-p_{k-1}|=1/k\\to0$, so criterion (i) eventually fires for any $\\varepsilon_1$ — yet $p_k\\to\\infty$ (the harmonic series diverges). The test is fooled. Criterion (ii) $\\tfrac{1/k}{p_k}\\to0$ is fooled too. A small step does **not** imply convergence.',
          hu: 'A lépések $|p_k-p_{k-1}|=1/k\\to0$, így az (i) feltétel előbb-utóbb teljesül bármely $\\varepsilon_1$-re — pedig $p_k\\to\\infty$ (a harmonikus sor divergál). A teszt becsapható. A (ii) feltétel $\\tfrac{1/k}{p_k}\\to0$ szintén. A kis lépés **nem** jelent konvergenciát.',
        },
      },
      {
        kind: 'exercise',
        number: 3,
        problem: {
          en: 'For $f(x)=x^8$ an iteration produces $p_k=1/k$. Compare the residual test (iii) with the step tests (i)/(ii) using tolerance $10^{-8}$.',
          hu: 'Az $f(x)=x^8$ esetén egy iteráció $p_k=1/k$-t állít elő. Vesd össze a reziduum tesztet (iii) a lépés tesztekkel (i)/(ii), $10^{-8}$ tűréssel.',
        },
        solution: {
          en: 'The residual $|f(p_k)|=k^{-8}<10^{-8}$ already at $k=10$ ($p_{10}=0.1$), stopping far from the root $0$ — a flat root makes (iii) over-optimistic. The step tests need $1/k<10^{-8}$, i.e. $k>10^8$ — over-pessimistic here. No single test is reliable.',
          hu: 'A reziduum $|f(p_k)|=k^{-8}<10^{-8}$ már $k=10$-nél ($p_{10}=0{,}1$), így a $0$ gyöktől messze megáll — lapos gyöknél a (iii) túl optimista. A lépés tesztekhez $1/k<10^{-8}$, azaz $k>10^8$ kell — itt túl pesszimista. Egyetlen teszt sem megbízható.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.8 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.8 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryStopping' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.8. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.8-hoz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsStopping' },
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
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.37',
        title: { en: 'Extreme value theorem in $\\mathbb{R}^n$', hu: 'Weierstrass-tétel $\\mathbb{R}^n$-ben' },
        text: {
          en: 'If $E\\subset\\mathbb{R}^n$ is closed and bounded and $f\\colon E\\to\\mathbb{R}$ is continuous, then $f$ attains a maximum and a minimum on $E$: there are $\\mathbf{c},\\mathbf{d}\\in E$ with $f(\\mathbf{c})=\\max_E f$ and $f(\\mathbf{d})=\\min_E f$.',
          hu: 'Ha $E\\subset\\mathbb{R}^n$ zárt és korlátos, és $f\\colon E\\to\\mathbb{R}$ folytonos, akkor $f$ felveszi a maximumát és minimumát $E$-n: van $\\mathbf{c},\\mathbf{d}\\in E$, hogy $f(\\mathbf{c})=\\max_E f$ és $f(\\mathbf{d})=\\min_E f$.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Gradient and Hessian', hu: 'Gradiens és Hesse-mátrix' },
        text: {
          en: 'For $f\\in C^1$ the **gradient** is $f\'(\\mathbf{x})=\\big(\\partial f/\\partial x_1,\\dots,\\partial f/\\partial x_n\\big)^T$. For $f\\in C^2$ the **Hessian** is the symmetric matrix $f\'\'(\\mathbf{x})=\\big[\\partial^2 f/\\partial x_i\\partial x_j\\big]_{i,j=1}^n$. (These are exactly the Fréchet derivatives of $f$ and $f\'$.)',
          hu: '$f\\in C^1$ esetén a **gradiens** $f\'(\\mathbf{x})=\\big(\\partial f/\\partial x_1,\\dots,\\partial f/\\partial x_n\\big)^T$. $f\\in C^2$ esetén a **Hesse-mátrix** a szimmetrikus $f\'\'(\\mathbf{x})=\\big[\\partial^2 f/\\partial x_i\\partial x_j\\big]_{i,j=1}^n$ mátrix. (Ezek éppen $f$ és $f\'$ Fréchet-deriváltjai.)',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.38',
        title: { en: 'Multivariable Taylor formula', hu: 'Többváltozós Taylor-formula' },
        text: {
          en: 'For $f\\in C^{m+1}$ on an open $E$ and $\\mathbf{a}\\in E$, $f(\\mathbf{x})$ equals its degree-$m$ multi-index Taylor polynomial at $\\mathbf{a}$ plus a remainder evaluated at some $\\xi$ on the segment $[\\mathbf{a},\\mathbf{x}]$. With gradient and Hessian, the second-order form is\n$$f(\\mathbf{x})\\approx f(\\mathbf{a})+f\'(\\mathbf{a})^T(\\mathbf{x}-\\mathbf{a})+\\tfrac12(\\mathbf{x}-\\mathbf{a})^T f\'\'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a}).$$',
          hu: 'Egy nyílt $E$-n $f\\in C^{m+1}$ és $\\mathbf{a}\\in E$ esetén $f(\\mathbf{x})$ egyenlő az $\\mathbf{a}$-beli $m$-edfokú multiindexes Taylor-polinomjával plusz egy maradéktaggal, amelyet a $[\\mathbf{a},\\mathbf{x}]$ szakasz egy $\\xi$ pontjában értékelünk. Gradienssel és Hesse-mátrixszal a másodrendű alak\n$$f(\\mathbf{x})\\approx f(\\mathbf{a})+f\'(\\mathbf{a})^T(\\mathbf{x}-\\mathbf{a})+\\tfrac12(\\mathbf{x}-\\mathbf{a})^T f\'\'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a}).$$',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.39',
        title: { en: 'Chain rule', hu: 'Láncszabály' },
        text: {
          en: 'For $f\\in C^1(\\mathbb{R}^n)$ and continuously differentiable $g\\colon\\mathbb{R}\\to\\mathbb{R}^n$, the composite $f\\circ g$ is $C^1$ and $\\dfrac{d}{dt}f(g(t))=f\'(g(t))^T g\'(t)$ — the gradient dotted with the velocity vector.',
          hu: 'Ha $f\\in C^1(\\mathbb{R}^n)$ és $g\\colon\\mathbb{R}\\to\\mathbb{R}^n$ folytonosan differenciálható, akkor az $f\\circ g$ kompozíció $C^1$, és $\\dfrac{d}{dt}f(g(t))=f\'(g(t))^T g\'(t)$ — a gradiens skalárszorozva a sebességvektorral.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.40',
        title: { en: 'Multivariable mean value theorem', hu: 'Többváltozós középértéktétel' },
        text: {
          en: 'On an open convex $E$, for continuously differentiable $f$ and any $\\mathbf{x},\\mathbf{y}\\in E$ there is $\\xi\\in(0,1)$ with $f(\\mathbf{x})-f(\\mathbf{y})=f\'(\\mathbf{y}+\\xi(\\mathbf{x}-\\mathbf{y}))^T(\\mathbf{x}-\\mathbf{y})$. Proof: restrict $f$ to the segment via $g(t)=f(\\mathbf{y}+t(\\mathbf{x}-\\mathbf{y}))$ and use the 1-D MVT plus the chain rule.',
          hu: 'Nyílt konvex $E$-n, folytonosan differenciálható $f$-re és bármely $\\mathbf{x},\\mathbf{y}\\in E$-re van $\\xi\\in(0,1)$, hogy $f(\\mathbf{x})-f(\\mathbf{y})=f\'(\\mathbf{y}+\\xi(\\mathbf{x}-\\mathbf{y}))^T(\\mathbf{x}-\\mathbf{y})$. Bizonyítás: $f$-et a szakaszra szűkítjük $g(t)=f(\\mathbf{y}+t(\\mathbf{x}-\\mathbf{y}))$-nal, és az 1-D középértéktételt + láncszabályt használjuk.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'For a vector field $\\mathbf{f}\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$ the **Jacobian** $\\mathbf{f}\'(\\mathbf{x})=\\big[\\partial f_i/\\partial x_j\\big]$ stacks the component gradients as rows. Taylor-expanding each component to first order gives the **linear approximation**\n$$\\mathbf{f}(\\mathbf{x})\\approx \\mathbf{f}(\\mathbf{a})+\\mathbf{f}\'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a}),$$\nthe foundation of the $n$-dimensional Newton method in the next section.',
          hu: 'Egy $\\mathbf{f}\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$ vektormezőnél a **Jacobi-mátrix** $\\mathbf{f}\'(\\mathbf{x})=\\big[\\partial f_i/\\partial x_j\\big]$ a komponensek gradienseit rakja sorokba. Minden komponenst elsőrendig Taylor-fejtve a **lineáris közelítést** kapjuk:\n$$\\mathbf{f}(\\mathbf{x})\\approx \\mathbf{f}(\\mathbf{a})+\\mathbf{f}\'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a}),$$\nez a következő szakasz $n$-dimenziós Newton-módszerének alapja.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Give the Hessian of $f(x,y)=x^2-y^2$ and the Jacobian of $\\mathbf{f}(x,y)=(x^2-y,\\ xy)$.',
          hu: 'Add meg az $f(x,y)=x^2-y^2$ Hesse-mátrixát és az $\\mathbf{f}(x,y)=(x^2-y,\\ xy)$ Jacobi-mátrixát.',
        },
        solution: {
          en: 'Hessian: $f\'\'=\\begin{pmatrix}2&0\\\\0&-2\\end{pmatrix}$ (constant, symmetric). Jacobian: $\\mathbf{f}\'=\\begin{pmatrix}2x&-1\\\\ y&x\\end{pmatrix}$.',
          hu: 'Hesse: $f\'\'=\\begin{pmatrix}2&0\\\\0&-2\\end{pmatrix}$ (állandó, szimmetrikus). Jacobi: $\\mathbf{f}\'=\\begin{pmatrix}2x&-1\\\\ y&x\\end{pmatrix}$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.9 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.9 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryMV' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.9. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.9-hez. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsMV' },
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
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Norm axioms', hu: 'Norma-axiómák' },
        text: {
          en: 'A function $\\|\\cdot\\|\\colon\\mathbb{R}^n\\to\\mathbb{R}$ is a **vector norm** if (1) $\\|\\mathbf{x}\\|\\ge0$ and $\\|\\mathbf{x}\\|=0\\iff\\mathbf{x}=\\mathbf{0}$; (2) $\\|c\\mathbf{x}\\|=|c|\\,\\|\\mathbf{x}\\|$; (3) $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$ (triangle inequality).',
          hu: 'A $\\|\\cdot\\|\\colon\\mathbb{R}^n\\to\\mathbb{R}$ függvény **vektornorma**, ha (1) $\\|\\mathbf{x}\\|\\ge0$ és $\\|\\mathbf{x}\\|=0\\iff\\mathbf{x}=\\mathbf{0}$; (2) $\\|c\\mathbf{x}\\|=|c|\\,\\|\\mathbf{x}\\|$; (3) $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$ (háromszög-egyenlőtlenség).',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.41',
        title: { en: 'Reverse triangle inequality & continuity', hu: 'Fordított háromszög-egyenlőtlenség és folytonosság' },
        text: {
          en: '$\\big|\\,\\|\\mathbf{x}\\|-\\|\\mathbf{y}\\|\\,\\big|\\le\\|\\mathbf{x}-\\mathbf{y}\\|$, and consequently every norm is a continuous function on $\\mathbb{R}^n$. (From $\\|\\mathbf{x}\\|\\le\\|\\mathbf{x}-\\mathbf{y}\\|+\\|\\mathbf{y}\\|$ and symmetry.)',
          hu: '$\\big|\\,\\|\\mathbf{x}\\|-\\|\\mathbf{y}\\|\\,\\big|\\le\\|\\mathbf{x}-\\mathbf{y}\\|$, és ezért minden norma folytonos függvény $\\mathbb{R}^n$-en. (A $\\|\\mathbf{x}\\|\\le\\|\\mathbf{x}-\\mathbf{y}\\|+\\|\\mathbf{y}\\|$-ból és a szimmetriából.)',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.42',
        title: { en: 'Cauchy–Schwarz inequality', hu: 'Cauchy–Schwarz-egyenlőtlenség' },
        text: {
          en: '$|\\mathbf{x}^T\\mathbf{y}|\\le\\|\\mathbf{x}\\|_2\\,\\|\\mathbf{y}\\|_2$, with equality iff $\\mathbf{y}=\\lambda\\mathbf{x}$ (Cor. 2.43). Proof: the quadratic $p(t)=\\sum_i(tx_i-y_i)^2\\ge0$ has non-positive discriminant. It is exactly what makes the Euclidean norm obey the triangle inequality.',
          hu: '$|\\mathbf{x}^T\\mathbf{y}|\\le\\|\\mathbf{x}\\|_2\\,\\|\\mathbf{y}\\|_2$, egyenlőség pontosan ha $\\mathbf{y}=\\lambda\\mathbf{x}$ (2.43. következmény). Bizonyítás: a $p(t)=\\sum_i(tx_i-y_i)^2\\ge0$ kvadratikus diszkriminánsa nempozitív. Pontosan ettől teljesíti az euklideszi norma a háromszög-egyenlőtlenséget.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'A vector sequence **converges**, $\\mathbf{p}^{(k)}\\to\\mathbf{p}$, if $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|\\to0$. On $\\mathbb{R}^n$ **all norms are equivalent** — there are $m,M>0$ with $m\\|\\mathbf{x}\\|_1\\le\\|\\mathbf{x}\\|\\le M\\|\\mathbf{x}\\|_1$ (Thm 2.44, proved by minimizing/maximizing the continuous $\\|\\cdot\\|$ over the compact unit sphere) — so convergence is norm-independent and is the same as **componentwise** convergence $p_i^{(k)}\\to p_i$ (Thm 2.45).',
          hu: 'Egy vektorsorozat **konvergens**, $\\mathbf{p}^{(k)}\\to\\mathbf{p}$, ha $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|\\to0$. $\\mathbb{R}^n$-en **minden norma ekvivalens** — van $m,M>0$, hogy $m\\|\\mathbf{x}\\|_1\\le\\|\\mathbf{x}\\|\\le M\\|\\mathbf{x}\\|_1$ (2.44. tétel, a folytonos $\\|\\cdot\\|$ kompakt egységgömbön vett szélsőértékeivel) — így a konvergencia normától független, és megegyezik a **komponensenkénti** $p_i^{(k)}\\to p_i$ konvergenciával (2.45. tétel).',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Induced (operator) matrix norm', hu: 'Indukált (operátor) mátrixnorma' },
        text: {
          en: 'A vector norm generates a **matrix norm** $\\|\\mathbf{A}\\|=\\sup_{\\mathbf{x}\\ne\\mathbf{0}}\\dfrac{\\|\\mathbf{A}\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}=\\max_{\\|\\mathbf{y}\\|=1}\\|\\mathbf{A}\\mathbf{y}\\|$ — the largest factor by which $\\mathbf{A}$ stretches a vector.',
          hu: 'Egy vektornorma **mátrixnormát** generál: $\\|\\mathbf{A}\\|=\\sup_{\\mathbf{x}\\ne\\mathbf{0}}\\dfrac{\\|\\mathbf{A}\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}=\\max_{\\|\\mathbf{y}\\|=1}\\|\\mathbf{A}\\mathbf{y}\\|$ — a legnagyobb tényező, amellyel $\\mathbf{A}$ egy vektort nyújt.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.46',
        title: { en: 'Matrix-norm properties', hu: 'Mátrixnorma-tulajdonságok' },
        text: {
          en: 'Besides the three norm axioms, induced matrix norms are **compatible** and **submultiplicative**: $\\|\\mathbf{A}\\mathbf{x}\\|\\le\\|\\mathbf{A}\\|\\,\\|\\mathbf{x}\\|$ and $\\|\\mathbf{A}\\mathbf{B}\\|\\le\\|\\mathbf{A}\\|\\,\\|\\mathbf{B}\\|$ for all $\\mathbf{A},\\mathbf{B},\\mathbf{x}$.',
          hu: 'A három norma-axióma mellett az indukált mátrixnormák **kompatibilisek** és **szubmultiplikatívak**: $\\|\\mathbf{A}\\mathbf{x}\\|\\le\\|\\mathbf{A}\\|\\,\\|\\mathbf{x}\\|$ és $\\|\\mathbf{A}\\mathbf{B}\\|\\le\\|\\mathbf{A}\\|\\,\\|\\mathbf{B}\\|$ minden $\\mathbf{A},\\mathbf{B},\\mathbf{x}$-re.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.48',
        title: { en: 'Computing $\\|\\mathbf{A}\\|_1$ and $\\|\\mathbf{A}\\|_\\infty$', hu: '$\\|\\mathbf{A}\\|_1$ és $\\|\\mathbf{A}\\|_\\infty$ kiszámítása' },
        text: {
          en: '$\\|\\mathbf{A}\\|_1=\\max_{j}\\sum_{i}|a_{ij}|$ (largest absolute **column** sum) and $\\|\\mathbf{A}\\|_\\infty=\\max_{i}\\sum_{j}|a_{ij}|$ (largest absolute **row** sum). These give a direct hand computation, unlike $\\|\\mathbf{A}\\|_2$ (the largest singular value).',
          hu: '$\\|\\mathbf{A}\\|_1=\\max_{j}\\sum_{i}|a_{ij}|$ (legnagyobb abszolút **oszlop**összeg) és $\\|\\mathbf{A}\\|_\\infty=\\max_{i}\\sum_{j}|a_{ij}|$ (legnagyobb abszolút **sor**összeg). Ezek kézzel közvetlenül számolhatók, szemben a $\\|\\mathbf{A}\\|_2$-vel (a legnagyobb szinguláris érték).',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.50',
        title: { en: 'Vector-valued mean value theorem', hu: 'Vektorértékű középértéktétel' },
        text: {
          en: 'On an open convex $E$, for continuously differentiable $\\mathbf{f}\\colon E\\to\\mathbb{R}^n$: $\\|\\mathbf{f}(\\mathbf{x})-\\mathbf{f}(\\mathbf{y})\\|\\le\\max_{t\\in[0,1]}\\|\\mathbf{f}\'(\\mathbf{y}+t(\\mathbf{x}-\\mathbf{y}))\\|\\;\\|\\mathbf{x}-\\mathbf{y}\\|$. The Jacobian norm bounds how far $\\mathbf{f}$ can move — this is what lets a small $\\|\\mathbf{f}\'\\|$ make $\\mathbf{f}$ a contraction in $n$ dimensions.',
          hu: 'Nyílt konvex $E$-n, folytonosan differenciálható $\\mathbf{f}\\colon E\\to\\mathbb{R}^n$-re: $\\|\\mathbf{f}(\\mathbf{x})-\\mathbf{f}(\\mathbf{y})\\|\\le\\max_{t\\in[0,1]}\\|\\mathbf{f}\'(\\mathbf{y}+t(\\mathbf{x}-\\mathbf{y}))\\|\\;\\|\\mathbf{x}-\\mathbf{y}\\|$. A Jacobi-norma korlátozza, mennyire mozdulhat $\\mathbf{f}$ — ettől lesz kis $\\|\\mathbf{f}\'\\|$ esetén $\\mathbf{f}$ kontrakció $n$ dimenzióban.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Compute $\\|\\mathbf{A}\\|_1$ and $\\|\\mathbf{A}\\|_\\infty$ for $\\mathbf{A}=\\begin{pmatrix}-1&3&-2\\\\2&-4&0\\\\0&3&2\\end{pmatrix}$.',
          hu: 'Számítsd ki $\\|\\mathbf{A}\\|_1$-t és $\\|\\mathbf{A}\\|_\\infty$-t az $\\mathbf{A}=\\begin{pmatrix}-1&3&-2\\\\2&-4&0\\\\0&3&2\\end{pmatrix}$-re.',
        },
        solution: {
          en: 'Column sums: $|-1|+|2|+0=3$, $3+4+3=10$, $2+0+2=4$ ⟹ $\\|\\mathbf{A}\\|_1=10$. Row sums: $1+3+2=6$, $2+4+0=6$, $0+3+2=5$ ⟹ $\\|\\mathbf{A}\\|_\\infty=6$.',
          hu: 'Oszlopösszegek: $|-1|+|2|+0=3$, $3+4+3=10$, $2+0+2=4$ ⟹ $\\|\\mathbf{A}\\|_1=10$. Sorösszegek: $1+3+2=6$, $2+4+0=6$, $0+3+2=5$ ⟹ $\\|\\mathbf{A}\\|_\\infty=6$.',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.10 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.10 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryNorms' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.10. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.10-hez. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsNorms' },
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
          en: 'The example system (Example 2.51) has root $p^\\*=(1,0)$. The green curve is $f_2=0$; the blue trajectory is Newton from your chosen start.',
          hu: 'A példarendszer (2.51. példa) gyöke $p^\\*=(1,0)$. A zöld görbe $f_2=0$; a kék pálya a Newton-iteráció a választott startból.',
        },
      },
      { kind: 'widget', name: 'Newton2DPlot' },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.56',
        title: { en: 'Local quadratic convergence', hu: 'Lokális kvadratikus konvergencia' },
        text: {
          en: 'If $\\mathbf{f}\\in C^2$, $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ and $\\mathbf{f}\'(\\mathbf{p})$ is invertible, the iteration (2.30) converges locally quadratically to $\\mathbf{p}$. Reason: Newton is the fixed-point map $\\mathbf{g}(\\mathbf{x})=\\mathbf{x}-(\\mathbf{f}\'(\\mathbf{x}))^{-1}\\mathbf{f}(\\mathbf{x})$, and a componentwise computation using $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ gives $\\mathbf{g}\'(\\mathbf{p})=\\mathbf{0}$ — the $n$-D analogue of $g\'(p)=0$.',
          hu: 'Ha $\\mathbf{f}\\in C^2$, $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ és $\\mathbf{f}\'(\\mathbf{p})$ invertálható, a (2.30) iteráció lokálisan kvadratikusan konvergál $\\mathbf{p}$-hez. Ok: Newton a $\\mathbf{g}(\\mathbf{x})=\\mathbf{x}-(\\mathbf{f}\'(\\mathbf{x}))^{-1}\\mathbf{f}(\\mathbf{x})$ fixpont-leképezés, és a $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$-t használó komponensenkénti számolás $\\mathbf{g}\'(\\mathbf{p})=\\mathbf{0}$-t ad — a $g\'(p)=0$ $n$-D megfelelője.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Example 2.57 shows the speed: starting from $(-1.5,-1.5)^T$ the error $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|_\\infty$ drops $2.5\\to0.47\\to1.1\\cdot10^{-2}\\to1.3\\cdot10^{-6}$, reaching the root $\\mathbf{p}=(1,0)^T$ in a handful of steps — the digits roughly double once the iterate is close, the hallmark of quadratic convergence.',
          hu: 'A 2.57. példa mutatja a sebességet: $(-1.5,-1.5)^T$-ből indulva a hiba $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|_\\infty$ így csökken: $2.5\\to0.47\\to1.1\\cdot10^{-2}\\to1.3\\cdot10^{-6}$, és néhány lépésben eléri a $\\mathbf{p}=(1,0)^T$ gyököt — közel kerülve a jegyek nagyjából megduplázódnak, ami a kvadratikus konvergencia jele.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Write one Newton step for $\\mathbf{f}(x,y)=(x^2+y^2-1,\\ x-y)^T$ at $(1,1)^T$.',
          hu: 'Írj fel egy Newton-lépést az $\\mathbf{f}(x,y)=(x^2+y^2-1,\\ x-y)^T$ esetre az $(1,1)^T$ pontban.',
        },
        solution: {
          en: 'Jacobian $\\mathbf{f}\'=\\begin{pmatrix}2x&2y\\\\1&-1\\end{pmatrix}=\\begin{pmatrix}2&2\\\\1&-1\\end{pmatrix}$ at $(1,1)$, $\\mathbf{f}=(1,0)^T$. Solve $\\begin{pmatrix}2&2\\\\1&-1\\end{pmatrix}\\mathbf{s}=-(1,0)^T$: $\\mathbf{s}=(-\\tfrac14,-\\tfrac14)^T$, so $\\mathbf{p}^{(1)}=(\\tfrac34,\\tfrac34)^T$ (heading to $(\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2})$).',
          hu: 'A Jacobi-mátrix $\\mathbf{f}\'=\\begin{pmatrix}2x&2y\\\\1&-1\\end{pmatrix}=\\begin{pmatrix}2&2\\\\1&-1\\end{pmatrix}$ az $(1,1)$-ben, $\\mathbf{f}=(1,0)^T$. Oldd meg $\\begin{pmatrix}2&2\\\\1&-1\\end{pmatrix}\\mathbf{s}=-(1,0)^T$-t: $\\mathbf{s}=(-\\tfrac14,-\\tfrac14)^T$, tehát $\\mathbf{p}^{(1)}=(\\tfrac34,\\tfrac34)^T$ (a $(\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2})$ felé).',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.12 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.12 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryNDNewton' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.12. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.12-höz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsNDNewton' },
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
        kind: 'md',
        text: {
          en: 'Quasi-Newton methods use $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-(\\mathbf{A}^{(k)})^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$ (Eq. 2.32) with $\\mathbf{A}^{(k)}\\approx\\mathbf{f}\'(\\mathbf{p}^{(k)})$. One option approximates the Jacobian by finite differences $a_{ij}^{(k)}=\\dfrac{f_i(\\mathbf{p}^{(k)}+h\\mathbf{e}^{(j)})-f_i(\\mathbf{p}^{(k)})}{h}$ (Eq. 2.33). Broyden instead *updates* a single matrix as it goes.',
          hu: 'A kvázi-Newton módszerek a $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-(\\mathbf{A}^{(k)})^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$ (2.32) lépést használják $\\mathbf{A}^{(k)}\\approx\\mathbf{f}\'(\\mathbf{p}^{(k)})$-vel. Az egyik lehetőség a Jacobi-mátrixot differenciákkal közelíti: $a_{ij}^{(k)}=\\dfrac{f_i(\\mathbf{p}^{(k)}+h\\mathbf{e}^{(j)})-f_i(\\mathbf{p}^{(k)})}{h}$ (2.33). A Broyden ehelyett *frissít* egyetlen mátrixot menet közben.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'definition',
        number: '',
        title: { en: 'Secant equation & Broyden update', hu: 'Szelő-egyenlet és Broyden-frissítés' },
        text: {
          en: 'With $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$ and $\\mathbf{y}^{(k)}=\\mathbf{f}(\\mathbf{p}^{(k+1)})-\\mathbf{f}(\\mathbf{p}^{(k)})$, require the **secant equation** $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ (2.37) and **no change** orthogonal to $\\mathbf{s}^{(k)}$ (2.38). These determine the rank-one update\n$$\\mathbf{A}^{(k+1)}=\\mathbf{A}^{(k)}+\\frac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}. \\tag{2.39}$$',
          hu: '$\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$ és $\\mathbf{y}^{(k)}=\\mathbf{f}(\\mathbf{p}^{(k+1)})-\\mathbf{f}(\\mathbf{p}^{(k)})$ jelöléssel írjuk elő a **szelő-egyenletet** $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ (2.37) és a **változatlanságot** $\\mathbf{s}^{(k)}$-re merőlegesen (2.38). Ezek meghatározzák a rang-egy frissítést\n$$\\mathbf{A}^{(k+1)}=\\mathbf{A}^{(k)}+\\frac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}. \\tag{2.39}$$',
        },
      },
      {
        kind: 'theorem',
        tkind: 'theorem',
        number: '2.58',
        title: { en: 'Sherman–Morrison–Woodbury', hu: 'Sherman–Morrison–Woodbury' },
        text: {
          en: 'For invertible $\\mathbf{A}$ and vectors $\\mathbf{u},\\mathbf{v}$, the matrix $\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T$ is invertible iff $1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}\\ne0$, and then $(\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T)^{-1}=\\mathbf{A}^{-1}-\\dfrac{\\mathbf{A}^{-1}\\mathbf{u}\\mathbf{v}^T\\mathbf{A}^{-1}}{1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}}$. Applied to (2.39), it updates $(\\mathbf{A}^{(k+1)})^{-1}$ from $(\\mathbf{A}^{(k)})^{-1}$ in $O(n^2)$ work (Eq. 2.40) — no $O(n^3)$ factorization per step.',
          hu: 'Invertálható $\\mathbf{A}$-ra és $\\mathbf{u},\\mathbf{v}$ vektorokra az $\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T$ mátrix pontosan akkor invertálható, ha $1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}\\ne0$, és ekkor $(\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T)^{-1}=\\mathbf{A}^{-1}-\\dfrac{\\mathbf{A}^{-1}\\mathbf{u}\\mathbf{v}^T\\mathbf{A}^{-1}}{1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}}$. A (2.39)-re alkalmazva $(\\mathbf{A}^{(k+1)})^{-1}$ frissíthető $(\\mathbf{A}^{(k)})^{-1}$-ből $O(n^2)$ munkával (2.40) — nincs lépésenkénti $O(n^3)$ faktorizáció.',
        },
      },
      {
        kind: 'theorem',
        tkind: 'algorithm',
        number: '2.59',
        title: { en: 'Broyden’s method', hu: 'Broyden-módszer' },
        text: {
          en: '```\nINPUT:  f, p⁰, h (for A⁰), ‖·‖, TOL, MAXIT\nOUTPUT: p — approximate root\n\nA ← finite-difference Jacobian at p⁰   (Eq. 2.33)\nA ← A⁻¹;   q ← p⁰;   k ← 1\nwhile k < MAXIT do\n    s ← -A·f(q)\n    p ← q + s\n    if ‖s‖ < TOL then output(p); stop\n    y ← f(p) - f(q)\n    A ← A - (A·y - s)·sᵀ·A / (sᵀ·A·y)   # inverse update (2.40)\n    q ← p;   k ← k + 1\nend do\noutput("Maximal iteration exceeded.")\n```\nNote $A$ is stored already inverted, so each step is matrix–vector work only.',
          hu: '```\nBEMENET:  f, p⁰, h (A⁰-hoz), ‖·‖, TOL, MAXIT\nKIMENET: p — közelítő gyök\n\nA ← differencia-Jacobi p⁰-ban   (2.33)\nA ← A⁻¹;   q ← p⁰;   k ← 1\nwhile k < MAXIT do\n    s ← -A·f(q)\n    p ← q + s\n    if ‖s‖ < TOL then output(p); stop\n    y ← f(p) - f(q)\n    A ← A - (A·y - s)·sᵀ·A / (sᵀ·A·y)   # inverz-frissítés (2.40)\n    q ← p;   k ← k + 1\nend do\noutput("Túllépte a maximális iterációt.")\n```\nAz $A$ már invertálva tárolódik, így minden lépés csak mátrix–vektor művelet.',
        },
      },
      {
        kind: 'md',
        text: {
          en: 'Example 2.60 runs Broyden on the same system as Newton (Example 2.57) from $(-1.5,-1.5)^T$: it reaches $(1,0)^T$ in about 10 steps versus Newton’s 4, and the error-ratio column $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|/\\|\\mathbf{p}^{(k-1)}-\\mathbf{p}\\|\\to0$ confirms the convergence is **superlinear** — slower than Newton, but with no Jacobian and only $O(n^2)$ per step.',
          hu: 'A 2.60. példa a Broyden-t ugyanazon a rendszeren futtatja, mint a Newton (2.57. példa), $(-1.5,-1.5)^T$-ből: kb. 10 lépésben éri el a $(1,0)^T$-t a Newton 4 lépésével szemben, és a hibaarány-oszlop $\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|/\\|\\mathbf{p}^{(k-1)}-\\mathbf{p}\\|\\to0$ igazolja, hogy a konvergencia **szuperlineáris** — lassabb a Newtonnál, de Jacobi nélkül, lépésenként csak $O(n^2)$.',
        },
      },
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
      {
        kind: 'exercise',
        number: 2,
        problem: {
          en: 'Verify that the Broyden update (2.39) satisfies the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$.',
          hu: 'Igazold, hogy a Broyden-frissítés (2.39) kielégíti a szelő-egyenletet $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$.',
        },
        solution: {
          en: 'Multiply (2.39) by $\\mathbf{s}^{(k)}$: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}+\\dfrac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^2}=\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}+(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})=\\mathbf{y}^{(k)}$, since $(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}=\\|\\mathbf{s}^{(k)}\\|_2^2$. For $\\mathbf{z}\\perp\\mathbf{s}^{(k)}$ the rank-one term vanishes, giving (2.38).',
          hu: 'Szorozzuk (2.39)-et $\\mathbf{s}^{(k)}$-rel: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}+\\dfrac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^2}=\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}+(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})=\\mathbf{y}^{(k)}$, mivel $(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}=\\|\\mathbf{s}^{(k)}\\|_2^2$. A $\\mathbf{z}\\perp\\mathbf{s}^{(k)}$ esetén a rang-egy tag eltűnik, ami (2.38).',
        },
      },
      {
        kind: 'md',
        text: {
          en: '### Glossary\nKey terms of §2.13 — tap a term to reveal its definition.',
          hu: '### Fogalomtár\nA §2.13 kulcsfogalmai — koppints egy fogalomra a definícióért.',
        },
      },
      { kind: 'widget', name: 'GlossaryBroyden' },
      {
        kind: 'md',
        text: {
          en: '### Flashcards\nSelf-test deck for §2.13. Read the question, recall the answer, then flip.',
          hu: '### Tanulókártyák\nÖnellenőrző pakli a §2.13-hoz. Olvasd el a kérdést, idézd fel a választ, majd fordíts.',
        },
      },
      { kind: 'widget', name: 'FlashcardsBroyden' },
    ],
  },
]
