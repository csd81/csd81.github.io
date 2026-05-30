import{r as g,j as t,d as _,h as me}from"./index-BdBxfKXM.js";import{k as we,S as Te}from"./katex-D67q_79b.js";import{M as ae}from"./MarkdownView-DvqC4N8j.js";import"./normalizeMath-BFgg5gmL.js";import"./CodeBlock-BB_hjWAd.js";import"./extends-sVFhgF1T.js";function w({children:e,block:a=!1}){const n=g.useMemo(()=>{try{return we.renderToString(e,{displayMode:a,throwOnError:!1,strict:!1})}catch{return e}},[e,a]);return a?t.jsx("div",{dangerouslySetInnerHTML:{__html:n}}):t.jsx("span",{dangerouslySetInnerHTML:{__html:n}})}function je(){const{t:e}=_();return t.jsxs("header",{className:"hero",id:"hero",children:[t.jsx("div",{className:"hero__bg"}),t.jsxs("div",{className:"wrap hero__inner",children:[t.jsx("span",{className:"eyebrow",children:e({en:"Numerical Analysis · Chapter 8",hu:"Numerikus analízis · 8. fejezet"})}),t.jsxs("h1",{children:[e({en:"How computers find the ",hu:"Hogyan találják meg a gépek a "}),t.jsx("em",{children:e({en:"lowest point",hu:"legmélyebb pontot"})}),e({en:".",hu:"."})]}),t.jsx("p",{className:"hero__lead",children:e({en:"Minimizing a function is just rolling downhill until you can't go lower. Scroll through seven methods — each one comes alive as you read, and you can grab the controls and play.",hu:"Egy függvény minimalizálása nem más, mint legurulni a völgybe, amíg lejjebb már nem lehet. Görgess végig hét módszeren — mindegyik életre kel olvasás közben, és a vezérlőkkel magad is kísérletezhetsz."})}),t.jsxs("div",{className:"hero__cta",children:[t.jsx("a",{className:"btn btn--primary",href:"#golden",children:e({en:"Start exploring ↓",hu:"Kezdjük a felfedezést ↓"})}),t.jsx("a",{className:"btn",href:"#calculus",children:e({en:"First, a refresher",hu:"Előbb egy ismétlés"})})]}),t.jsxs("div",{className:"hero__chips",children:[t.jsx("span",{className:"pill",children:t.jsx(w,{children:"\\min_{x} f(x)"})}),t.jsx("span",{className:"pill",children:"EN / HU"}),t.jsx("span",{className:"pill",children:"🌙 / ☀️"}),t.jsx("span",{className:"pill",children:e({en:"7 interactive methods",hu:"7 interaktív módszer"})})]})]})]})}function qe(){const{t:e}=_();return t.jsx("footer",{className:"footer",children:t.jsxs("div",{className:"wrap",children:[t.jsx("h4",{children:e({en:"Minimization of Functions — an interactive guide",hu:"Függvények minimalizálása — interaktív útmutató"})}),t.jsx("p",{children:e({en:"Built as a playful companion to the Numerical Analysis course material (Chapter 8, “Minimization of Functions”) by F. Hartung, University of Pannonia. All plots and convergence tables here are computed live in your browser.",hu:"Játékos kísérőanyag a Numerikus analízis kurzushoz (8. fejezet, „Szélsőértékszámítás”), Hartung Ferenc, Pannon Egyetem. Az ábrákat és a konvergencia-táblázatokat a böngésződ valós időben számolja."})}),t.jsx("p",{className:"muted",children:e({en:"Toggle language (EN/HU) and theme (🌙/☀️) any time from the top bar — your choice is remembered.",hu:"A nyelv (EN/HU) és a téma (🌙/☀️) bármikor váltható a felső sávban — a választásod megjegyezzük."})})]})})}const P=[{id:"calculus",no:"8.1",title:{en:"Calculus, refreshed",hu:"Analízis, felfrissítve"},blurb:{en:"Where can a minimum hide? Gradients, Hessians, and the min/max/saddle test.",hu:"Hol bújhat meg a minimum? Gradiens, Hesse-mátrix, és a min/max/nyeregpont teszt."}},{id:"golden",no:"8.2",title:{en:"Golden Section Search",hu:"Aranymetszéses keresés"},blurb:{en:"Shrink an interval around the minimum — reusing one point each step.",hu:"Szűkítsük az intervallumot a minimum köré — minden lépésben egy pontot újrahasználva."}},{id:"simplex",no:"8.3",title:{en:"Simplex & Nelder–Mead",hu:"Szimplex és Nelder–Mead"},blurb:{en:"A triangle that flips, stretches and squeezes its way downhill.",hu:"Egy háromszög, amely tükrözve, nyújtva és húzva gurul a völgybe."}},{id:"gradient",no:"8.4",title:{en:"Gradient Method",hu:"Gradiens módszer"},blurb:{en:"Always walk straight downhill. Simple — but watch it zig-zag.",hu:"Mindig lefelé a legmeredekebben. Egyszerű — de figyeld a cikcakkot."}},{id:"linsys",no:"8.5",title:{en:"Linear Systems by Descent",hu:"Lineáris rendszerek lejtéssel"},blurb:{en:"Solve A x = b by rolling a quadratic bowl to its bottom.",hu:"Oldd meg az A x = b rendszert egy kvadratikus tál aljára gurulva."}},{id:"newton",no:"8.6",title:{en:"Newton's Method",hu:"Newton-módszer"},blurb:{en:"Use curvature, not just slope — and converge ridiculously fast.",hu:"Használd a görbületet, ne csak a meredekséget — és konvergálj iszonyú gyorsan."}},{id:"quasinewton",no:"8.7",title:{en:"Quasi-Newton",hu:"Kvázi-Newton"},blurb:{en:"Newton's speed without the Hessian: Broyden, PSB, BFGS, DFP race.",hu:"Newton sebessége Hesse-mátrix nélkül: Broyden, PSB, BFGS, DFP verseny."}}],Ae={calculus:[{term:{en:"Unconstrained minimization",hu:"Feltétel nélküli minimalizálás"},def:{en:"Finding $\\min f(\\mathbf{x})$ over $\\mathbb{R}^n$ with no constraints. Calculus reduces it to locating and classifying stationary points.",hu:"A $\\min f(\\mathbf{x})$ keresése $\\mathbb{R}^n$-en, feltételek nélkül. Az analízis ezt a stacionárius pontok megkeresésére és osztályozására vezeti vissza."}},{term:{en:"First-order condition $\\nabla f=\\mathbf{0}$",hu:"Elsőrendű feltétel $\\nabla f=\\mathbf{0}$"},def:{en:"At any interior local minimum (or maximum) the gradient vanishes: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Such $\\mathbf{x}^*$ is a stationary (critical) point — necessary, not sufficient.",hu:"Bármely belső lokális minimumban (vagy maximumban) a gradiens eltűnik: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Az ilyen $\\mathbf{x}^*$ stacionárius (kritikus) pont — szükséges, de nem elégséges."}},{term:{en:"Hessian classification",hu:"Hesse-mátrix szerinti osztályozás"},def:{en:"At a stationary point the Hessian $\\nabla^2 f$ decides the type: positive definite ⇒ minimum, negative definite ⇒ maximum, indefinite ⇒ saddle, semidefinite ⇒ degenerate (inconclusive).",hu:"Stacionárius pontban a Hesse-mátrix $\\nabla^2 f$ dönti el a típust: pozitív definit ⇒ minimum, negatív definit ⇒ maximum, indefinit ⇒ nyeregpont, szemidefinit ⇒ elfajuló (nem dönthető el)."}},{term:{en:"2×2 definiteness test",hu:"2×2 definitségi teszt"},def:{en:"For $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$: positive definite iff $a>0$ and $ac-b^2>0$; a negative determinant $ac-b^2<0$ means a saddle.",hu:"A $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$-re: pozitív definit, ha $a>0$ és $ac-b^2>0$; negatív determináns $ac-b^2<0$ nyeregpontot jelent."}},{term:{en:"Convexity",hu:"Konvexitás"},def:{en:"A convex $f$ (positive semidefinite Hessian everywhere) has any stationary point as a global minimum — no local traps. The ideal case for optimization.",hu:"Egy konvex $f$ (mindenütt pozitív szemidefinit Hesse-mátrix) bármely stacionárius pontja globális minimum — nincsenek lokális csapdák. Az optimalizálás ideális esete."}}],golden:[{term:{en:"Unimodal function",hu:"Unimodális függvény"},def:{en:"A function with a single minimum on $[a,b]$ (strictly decreasing then increasing). Convexity implies it, but is not required. Golden section search needs only unimodality, not derivatives.",hu:"Olyan függvény, amelynek egyetlen minimuma van $[a,b]$-n (előbb szigorúan csökken, majd nő). A konvexitás ezt maga után vonja, de nem szükséges. Az aranymetszéses kereséshez csak unimodalitás kell, derivált nem."}},{term:{en:"Golden section search",hu:"Aranymetszéses keresés"},def:{en:"A derivative-free minimizer: like bisection but for minima. Keep two interior points $a<y<x<b$; if $f(x)>f(y)$ the minimum is in $[a,x]$, else in $[y,b]$. Repeat on the shrinking bracket.",hu:"Derivált nélküli minimumkereső: mint a felezés, de minimumra. Tarts két belső pontot $a<y<x<b$; ha $f(x)>f(y)$, a minimum $[a,x]$-ben van, különben $[y,b]$-ben. Ismételd a zsugorodó intervallumon."}},{term:{en:"Golden ratio $r=(\\sqrt5-1)/2$",hu:"Aranymetszés $r=(\\sqrt5-1)/2$"},def:{en:"The reduction ratio $r\\approx0.618$ is chosen so one of the new interior points coincides with a previous one — satisfying $r^2=1-r$ — so each step needs only **one** new function evaluation.",hu:"Az $r\\approx0,618$ zsugorítási arányt úgy választjuk, hogy az egyik új belső pont egybeessen egy korábbival — teljesítve $r^2=1-r$-t — így minden lépés csak **egy** új függvénykiértékelést igényel."}},{term:{en:"One evaluation per step",hu:"Egy kiértékelés lépésenként"},def:{en:"The golden ratio's self-similarity means the retained point can be reused, so after the first step only one new $f$-value is computed per iteration — the method's efficiency advantage.",hu:"Az aranymetszés önhasonlósága miatt a megtartott pont újrahasználható, így az első lépés után iterációnként csak egy új $f$-értéket számolunk — ez a módszer hatékonysági előnye."}},{term:{en:"Linear convergence",hu:"Lineáris konvergencia"},def:{en:"The bracket length shrinks by the factor $r\\approx0.618$ each step, so $|b_k-a_k|=r^k(b-a)$ — steady linear convergence, robust but not fast (no derivative info used).",hu:"Az intervallum hossza lépésenként az $r\\approx0,618$ tényezővel csökken, így $|b_k-a_k|=r^k(b-a)$ — egyenletes lineáris konvergencia, robusztus, de nem gyors (nincs deriváltinformáció)."}},{term:{en:"Convergence guarantee (Thm 8.4)",hu:"Konvergencia-garancia (8.4. tétel)"},def:{en:"For continuous unimodal $f$, golden section search always converges to the minimum point — unconditionally, like bisection for roots.",hu:"Folytonos unimodális $f$-re az aranymetszéses keresés mindig a minimumponthoz konvergál — feltétel nélkül, mint a felezés a gyökökre."}}],simplex:[{term:{en:"Simplex (geometric)",hu:"Szimplex (geometriai)"},def:{en:"The convex hull of $n+1$ affinely independent points in $\\mathbb{R}^n$: a segment ($n=1$), triangle ($n=2$), tetrahedron ($n=3$). Its vertices carry the function values that drive the search.",hu:"$n+1$ affinul független pont konvex burka $\\mathbb{R}^n$-ben: szakasz ($n=1$), háromszög ($n=2$), tetraéder ($n=3$). Csúcsai hordozzák a keresést vezérlő függvényértékeket."}},{term:{en:"Simplex method (derivative-free)",hu:"Szimplex módszer (derivált nélküli)"},def:{en:"Minimize $f$ by moving a simplex downhill: find the worst vertex, reflect it through the centroid of the rest; if that fails, shrink the simplex toward its best vertex. Uses only function values — no gradients.",hu:"Minimalizáld $f$-et a szimplex lefelé mozgatásával: keresd a legrosszabb csúcsot, tükrözd a többi súlypontján át; ha ez nem sikerül, zsugorítsd a szimplexet a legjobb csúcsa felé. Csak függvényértékeket használ — gradienst nem."}},{term:{en:"Reflection",hu:"Tükrözés"},def:{en:"Replace the worst vertex $\\mathbf{x}^{(j)}$ by its mirror image $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ across the centroid $\\mathbf{x}_c$ of the remaining vertices — the basic downhill move.",hu:"Cseréld a legrosszabb $\\mathbf{x}^{(j)}$ csúcsot a tükörképére $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ a maradék csúcsok $\\mathbf{x}_c$ súlypontján át — az alap lefelé lépés."}},{term:{en:"Shrink",hu:"Zsugorítás"},def:{en:"When reflection does not improve on the worst value, pull every vertex halfway toward the best vertex: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. The simplex contracts around the best point.",hu:"Ha a tükrözés nem javít a legrosszabb értéken, húzd minden csúcsot félútig a legjobb csúcs felé: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. A szimplex a legjobb pont köré húzódik össze."}},{term:{en:"Nelder–Mead method",hu:"Nelder–Mead-módszer"},def:{en:"An adaptive variant: after reflecting the worst vertex, **expand** (if the reflection is the new best), **contract** (if it is poor), or shrink — letting the simplex stretch into descent directions and squeeze near the minimum.",hu:"Adaptív változat: a legrosszabb csúcs tükrözése után **tágíts** (ha a tükrözés az új legjobb), **összehúz** (ha gyenge), vagy zsugoríts — így a szimplex megnyúlik a leszálló irányokba és összeszorul a minimum közelében."}},{term:{en:"Expansion & contraction",hu:"Tágítás és összehúzás"},def:{en:"Expansion pushes further past a successful reflection ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); contraction pulls back toward the centroid when reflection is poor. These make Nelder–Mead faster than the plain simplex method.",hu:"A tágítás tovább lök egy sikeres tükrözésen túl ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); az összehúzás visszahúz a súlypont felé, ha a tükrözés gyenge. Ezek teszik a Nelder–Mead-et gyorsabbá a sima szimplex módszernél."}},{term:{en:"Stopping criteria",hu:"Megállási feltételek"},def:{en:"Stop when the simplex is small (longest edge $<\\varepsilon$), when the vertex-value spread (std. dev. $\\sigma$) is small, or when successive centroid values change by $<\\varepsilon$. The centroid approximates the minimizer.",hu:"Állj meg, ha a szimplex kicsi (leghosszabb él $<\\varepsilon$), ha a csúcsértékek szórása ($\\sigma$) kicsi, vagy ha az egymást követő súlypont-értékek $<\\varepsilon$-nal változnak. A súlypont közelíti a minimumhelyet."}}],gradient:[{term:{en:"Steepest descent direction (Thm 8.8)",hu:"Legmeredekebb leszállási irány (8.8. tétel)"},def:{en:"Among all unit directions, the directional derivative of $f$ at $\\mathbf{p}$ is most negative along $-f'(\\mathbf{p})$. So the negative gradient points in the locally steepest downhill direction.",hu:"Minden egységirány közül $f$ iránymenti deriváltja $\\mathbf{p}$-ben a $-f'(\\mathbf{p})$ mentén a legnegatívabb. Tehát a negatív gradiens a lokálisan legmeredekebb lefelé irányba mutat."}},{term:{en:"Descent direction",hu:"Leszállási irány"},def:{en:"$\\mathbf{u}$ is a descent direction at $\\mathbf{p}$ if $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ for small $t>0$ — equivalently $f'(\\mathbf{p})^T\\mathbf{u}<0$. The negative gradient always qualifies.",hu:"$\\mathbf{u}$ leszállási irány $\\mathbf{p}$-ben, ha $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ kis $t>0$-ra — ekvivalensen $f'(\\mathbf{p})^T\\mathbf{u}<0$. A negatív gradiens mindig ilyen."}},{term:{en:"Gradient (steepest descent) method",hu:"Gradiens- (legmeredekebb leszállás) módszer"},def:{en:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — repeatedly step along the negative gradient with step size $\\alpha_k$. A first-order method: only gradients, no Hessian.",hu:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — ismételten lépünk a negatív gradiens mentén $\\alpha_k$ lépésközzel. Elsőrendű módszer: csak gradiens, nincs Hesse-mátrix."}},{term:{en:"Step size $\\alpha_k$",hu:"Lépésköz $\\alpha_k$"},def:{en:"Constant step: $\\alpha_k=h/\\|f'\\|_2$ gives fixed distance $h$ per step (so accuracy is limited to $\\sim h$). Better: a line search picking $\\alpha_k$ to minimize $f$ along the ray (the optimal/steepest gradient method).",hu:"Állandó lépés: $\\alpha_k=h/\\|f'\\|_2$ rögzített $h$ távolságot ad lépésenként (így a pontosság $\\sim h$-ra korlátozott). Jobb: vonalmenti keresés, amely $\\alpha_k$-t a sugár mentén $f$ minimalizálására választja (optimális gradiens módszer)."}},{term:{en:"Zig-zag / slow convergence",hu:"Cikcakk / lassú konvergencia"},def:{en:"Successive steps are orthogonal (each $-f'$ is perpendicular to the contour line), so on elongated valleys the iterates zig-zag and converge only linearly — slowly for ill-conditioned problems.",hu:"Az egymást követő lépések merőlegesek (minden $-f'$ merőleges a szintvonalra), így megnyúlt völgyekben az iteráltak cikcakkban haladnak és csak lineárisan konvergálnak — rosszul kondicionált feladatokon lassan."}},{term:{en:"Gradient ⟂ contour lines",hu:"Gradiens ⟂ szintvonalak"},def:{en:"The gradient is always perpendicular to the level curve through a point, so each gradient step crosses the contours at right angles — the geometric picture behind the zig-zag path.",hu:"A gradiens mindig merőleges az adott ponton átmenő szintvonalra, így minden gradienslépés derékszögben metszi a szintvonalakat — ez a cikcakk pálya geometriai képe."}}],linsys:[{term:{en:"Quadratic minimization ↔ linear system",hu:"Kvadratikus minimalizálás ↔ lineáris rendszer"},def:{en:"For symmetric $\\mathbf{A}$, $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ has gradient $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. So $g'(\\mathbf{x})=0$ is exactly the linear system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$.",hu:"Szimmetrikus $\\mathbf{A}$-ra a $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ gradiense $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. Így $g'(\\mathbf{x})=0$ éppen az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ lineáris rendszer."}},{term:{en:"SPD ⇒ unique minimizer (Thm 8.10)",hu:"SPD ⇒ egyetlen minimumhely (8.10. tétel)"},def:{en:"If $\\mathbf{A}$ is symmetric positive definite, $g$ has a global minimum at $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$. Hence solving $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ is equivalent to minimizing $g$ — solvable by gradient descent.",hu:"Ha $\\mathbf{A}$ szimmetrikus pozitív definit, $g$-nek globális minimuma van az $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$ pontban. Így $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ megoldása egyenértékű $g$ minimalizálásával — gradiens módszerrel megoldható."}},{term:{en:"Residual = negative gradient",hu:"Reziduum = negatív gradiens"},def:{en:"The residual $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ is the steepest-descent direction. Each step moves along $\\mathbf{r}^{(k)}$.",hu:"A reziduum $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ a legmeredekebb leszállási irány. Minden lépés az $\\mathbf{r}^{(k)}$ mentén halad."}},{term:{en:"Exact line search (optimal step)",hu:"Pontos vonalmenti keresés (optimális lépés)"},def:{en:"For a quadratic, the best step along $\\mathbf{r}^{(k)}$ has a closed form: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — minimizing $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$ exactly.",hu:"Kvadratikusra a legjobb lépés $\\mathbf{r}^{(k)}$ mentén zárt alakú: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — pontosan minimalizálja $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$-t."}},{term:{en:"Optimal gradient iteration",hu:"Optimális gradiens iteráció"},def:{en:"Repeat: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ as above, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. Converges for SPD $\\mathbf{A}$ but slowly (linearly) when $\\mathbf{A}$ is ill-conditioned — motivating conjugate gradients.",hu:"Ismételd: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ a fenti, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. SPD $\\mathbf{A}$-ra konvergál, de lassan (lineárisan), ha $\\mathbf{A}$ rosszul kondicionált — ez motiválja a konjugált gradiens módszert."}},{term:{en:"Local = global for quadratics (Cor 8.11)",hu:"Lokális = globális kvadratikusra (8.11)"},def:{en:"A quadratic function with a local minimum (maximum) has it as a global minimum (maximum) — no spurious local optima, so gradient descent on $g$ cannot get stuck.",hu:"Egy kvadratikus függvény lokális minimuma (maximuma) egyben globális minimum (maximum) — nincsenek hamis lokális szélsőértékek, így a $g$-n futó gradiens módszer nem akadhat el."}}],newton:[{term:{en:"Newton's method for minimization",hu:"Newton-módszer minimalizálásra"},def:{en:"Minimize $f$ by minimizing its local quadratic (Taylor) model: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — using both gradient and Hessian.",hu:"Minimalizáld $f$-et a lokális kvadratikus (Taylor-) modelljének minimalizálásával: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — a gradienst és a Hesse-mátrixot is használva."}},{term:{en:"Equivalent to Newton on $f'=\\mathbf{0}$",hu:"Ekvivalens a Newton-módszerrel $f'=\\mathbf{0}$-ra"},def:{en:"The iteration is exactly Newton's method for the nonlinear system $f'(\\mathbf{x})=\\mathbf{0}$ — finding a stationary point. The Hessian plays the role of the Jacobian.",hu:"Az iteráció pontosan a Newton-módszer az $f'(\\mathbf{x})=\\mathbf{0}$ nemlineáris rendszerre — stacionárius pont keresése. A Hesse-mátrix tölti be a Jacobi-mátrix szerepét."}},{term:{en:"Local quadratic convergence (Thm 8.13)",hu:"Lokális kvadratikus konvergencia (8.13. tétel)"},def:{en:"If $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, then $\\mathbf{p}$ is a local minimum and Newton's iteration converges to it quadratically from nearby starts.",hu:"Ha $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ és $f''(\\mathbf{p})$ pozitív definit, akkor $\\mathbf{p}$ lokális minimum, és a Newton-iteráció közeli kezdőpontból kvadratikusan konvergál hozzá."}},{term:{en:"Exact in one step for quadratics",hu:"Kvadratikusra egy lépésben pontos"},def:{en:"When $f$ is quadratic with positive-definite Hessian, Newton's method reaches the exact minimizer in a single step — the quadratic model equals $f$.",hu:"Ha $f$ kvadratikus, pozitív definit Hesse-mátrixszal, a Newton-módszer egyetlen lépésben eléri a pontos minimumhelyet — a kvadratikus modell megegyezik $f$-fel."}},{term:{en:"Degenerate Hessian ⇒ linear",hu:"Elfajuló Hesse ⇒ lineáris"},def:{en:"If the Hessian at the minimum is only semidefinite ($f''(\\mathbf{p})=\\mathbf{0}$ in the worst case), Newton may still converge but only linearly — the quadratic speed needs a positive-definite Hessian.",hu:"Ha a Hesse-mátrix a minimumban csak szemidefinit (legrosszabb esetben $f''(\\mathbf{p})=\\mathbf{0}$), a Newton konvergálhat, de csak lineárisan — a kvadratikus sebességhez pozitív definit Hesse kell."}},{term:{en:"Cost vs gradient descent",hu:"Költség vs gradiens módszer"},def:{en:"Each step needs the full Hessian and a linear solve ($O(n^3)$), far more than a gradient step — but it converges in far fewer iterations near the minimum. Quasi-Newton methods approximate the Hessian to balance the two.",hu:"Minden lépés a teljes Hesse-mátrixot és egy lineáris megoldást igényel ($O(n^3)$), sokkal többet egy gradienslépésnél — de a minimum közelében sokkal kevesebb iteráció alatt konvergál. A kvázi-Newton módszerek közelítik a Hesse-mátrixot a kettő egyensúlyozására."}}],quasinewton:[{term:{en:"Quasi-Newton method",hu:"Kvázi-Newton módszer"},def:{en:"Newton's minimization step $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$ where $\\mathbf{A}^{(k)}\\approx f''$ and $\\mathbf{v}^{(k)}\\approx f'$ are cheap approximations — avoiding exact Hessians.",hu:"A Newton-minimalizálási lépés $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$, ahol $\\mathbf{A}^{(k)}\\approx f''$ és $\\mathbf{v}^{(k)}\\approx f'$ olcsó közelítések — elkerülve a pontos Hesse-mátrixot."}},{term:{en:"Finite-difference Hessian",hu:"Differencia-Hesse"},def:{en:"One option: approximate $f'$ and $f''$ by forward/second-difference formulas. Simple but costs $\\sim n^2$ function evaluations per step.",hu:"Egy lehetőség: közelítsük $f'$-t és $f''$-t előre/második differencia képletekkel. Egyszerű, de lépésenként $\\sim n^2$ függvénykiértékelésbe kerül."}},{term:{en:"Broyden update for minimization",hu:"Broyden-frissítés minimalizálásra"},def:{en:"Apply Broyden's rank-one secant update (from §2.13) to approximate the Hessian while solving $f'(\\mathbf{x})=\\mathbf{0}$. Drawback: the resulting $\\mathbf{A}^{(k)}$ is generally neither symmetric nor positive definite.",hu:"Alkalmazd Broyden rang-egy szelő-frissítését (a §2.13-ból) a Hesse-mátrix közelítésére $f'(\\mathbf{x})=\\mathbf{0}$ megoldása közben. Hátrány: a kapott $\\mathbf{A}^{(k)}$ általában se nem szimmetrikus, se nem pozitív definit."}},{term:{en:"Secant equation",hu:"Szelő-egyenlet"},def:{en:"The Hessian approximation should satisfy $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ with $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — the curvature condition that ties the update to observed gradient change.",hu:"A Hesse-közelítés teljesítse $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$-t, ahol $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — a görbületi feltétel, amely a frissítést a megfigyelt gradiensváltozáshoz köti."}},{term:{en:"PSB update (Thm 8.17)",hu:"PSB-frissítés (8.17. tétel)"},def:{en:"The Powell-symmetric-Broyden update keeps $\\mathbf{A}^{(k)}$ **symmetric** while still satisfying the secant equation. Under the usual conditions the resulting quasi-Newton iteration converges **superlinearly**.",hu:"A Powell-szimmetrikus-Broyden frissítés **szimmetrikusan** tartja $\\mathbf{A}^{(k)}$-t, miközben teljesíti a szelő-egyenletet. A szokásos feltételek mellett a kapott kvázi-Newton iteráció **szuperlineárisan** konvergál."}},{term:{en:"Keeping $\\mathbf{A}^{(k)}$ positive definite",hu:"$\\mathbf{A}^{(k)}$ pozitív definitségének megőrzése"},def:{en:"For a genuine descent step the Hessian model should stay positive definite. Updating a factor $\\mathbf{M}$ with $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$ guarantees this — the idea behind BFGS-type methods.",hu:"Valódi leszállási lépéshez a Hesse-modellnek pozitív definitnek kell maradnia. Egy $\\mathbf{M}$ tényező frissítése $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$-vel ezt garantálja — ez a BFGS-típusú módszerek ötlete."}}]},Me={calculus:[{q:"In the context of multi-variable calculus, what is the matrix $f''(\\mathbf{x})$ commonly called?",a:"The Hessian matrix."},{q:"What is the entry in the $i$-th row and $j$-th column of a Hessian matrix $f''(\\mathbf{x})$?",a:"$\\frac{\\partial^2 f}{\\partial x_i, \\partial x_j}(\\mathbf{x})$"},{q:"A function $f$ maps from $\\mathbb{R}^n$ to which set to allow for the calculation of a Hessian matrix?",a:"$\\mathbb{R}$"},{q:"What type of derivatives are located on the main diagonal of the Hessian matrix?",a:"Pure second-order partial derivatives (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$)."},{q:"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ has a local extremum at point $\\mathbf{a}$, what must $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ equal for all $i = 1, \\dots, n$?",a:"$0$"},{q:"The first-order necessary condition for a local extremum states that the gradient vector $f'(\\mathbf{a})$ must be equal to _____.",a:"The zero vector $\\mathbf{0}$."},{q:"Which smoothness class must a function $f$ belong to for the Hessian-based sufficient condition for extrema to apply?",a:"$C^2$ (twice continuously differentiable)."},{q:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is positive definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",a:"A local minimum."},{q:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is negative definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",a:"A local maximum."},{q:"For a two-variable function $f(x, y)$, what are the two necessary first-order equations for a local extremum at $(a, b)$?",a:"$\\frac{\\partial f}{\\partial x}(a, b) = 0$ and $\\frac{\\partial f}{\\partial y}(a, b) = 0$."},{q:"In the second derivative test for two variables, how is the discriminant $D(a, b)$ defined?",a:"$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$."},{q:"What condition on the discriminant $D(a, b)$ indicates that a function $f(x, y)$ has a local extremum at $(a, b)$, provided the first derivatives are zero?",a:"$D(a, b) > 0$"},{q:"If the discriminant $D(a, b)$ is less than zero ($D < 0$) at a stationary point, what is the conclusion regarding a local extremum?",a:"The function $f$ has no extremum at $(a, b)$."},{q:"To identify a local maximum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",a:"Negative ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$)."},{q:"To identify a local minimum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",a:"Positive ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$)."},{q:"Formula: What is the first entry ($1, 1$) of the Hessian matrix $f''(\\mathbf{x})$?",a:"$\\frac{\\partial^2 f}{\\partial x_1^2}(\\mathbf{x})$"},{q:"Formula: What is the entry in the last row and last column of an $n$-variable Hessian matrix?",a:"$\\frac{\\partial^2 f}{\\partial x_n^2}(\\mathbf{x})$"},{q:"According to Theorem 8.1, what is the necessary condition for a function $f$ to have a local extremum at $\\mathbf{a}$ regarding its partial derivatives?",a:"All partial derivatives $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ must equal zero."},{q:"In Theorem 8.2, which property of $f$ ensures that the mixed partial derivatives $\\frac{\\partial^2 f}{\\partial x \\partial y}$ and $\\frac{\\partial^2 f}{\\partial y \\partial x}$ are equal?",a:"The assumption that $f \\in C^2$."},{q:"If $D(a, b) > 0$, the function $f(x, y)$ is guaranteed to have a(n) _____ at that point, assuming the first-order conditions are met.",a:"Local extremum"},{q:"For $n$ variables, if $f''(\\mathbf{a})$ is neither positive nor negative definite at a point where $f'(\\mathbf{a})=0$, what can be said about the extremum? (Note: Context restricted to the provided source material's explicit rules).",a:"The provided theorems do not explicitly define the outcome for indefinite matrices."},{q:"What is the dimension of the Hessian matrix for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$?",a:"$n \\times n$"},{q:"Identify the subtrahend in the formula for $D(a, b)$: $D(a, b) = f_{xx}f_{yy} - (\\dots)^2$.",a:"The mixed partial derivative $\\frac{\\partial^2 f}{\\partial x \\, \\partial y}(a, b)$."},{q:"Term: Stationary Point (Implicit)",a:"Definition: A point $\\mathbf{a}$ where the first derivative (gradient) of a function is the zero vector, $f'(\\mathbf{a}) = \\mathbf{0}$."},{q:"True or False: If $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ for all $i$, $f$ must have a local extremum at $\\mathbf{a}$.",a:"False (it is a necessary but not sufficient condition)."},{q:"For a function of two variables, if $f_{xx}(a, b) = 4$, $f_{yy}(a, b) = 3$, and $f_{xy}(a, b) = 1$, what is the value of $D(a, b)$?",a:"$11$ (calculated as $4 \\cdot 3 - 1^2$)."},{q:"If $D(a, b) = 11$ and $f_{xx} = 4$ at a stationary point, what type of extremum is present?",a:"Local minimum."},{q:"In the Hessian matrix, the entry $\\frac{\\partial^2 f}{\\partial x_1, \\partial x_2}$ is located in which row and column?",a:"Row 1, Column 2."},{q:"The theorem states that if $D(a, b) < 0$, $f$ has _____ extremum at $(a, b)$.",a:"No"},{q:"In the formula for the Hessian matrix, what is represented by the ellipsis ($\\dots$) in the first row?",a:"The second-order partial derivatives with respect to $x_1$ and subsequent variables up to $x_n$."},{q:"What is the specific requirement for the Hessian matrix to be used to prove a local maximum at point $\\mathbf{a}$ for $f \\in \\mathbb{R}^n$?",a:"The Hessian matrix $f''(\\mathbf{a})$ must be negative definite."},{q:"How does Theorem 8.2 classify the point $(a, b)$ if $\\frac{\\partial f}{\\partial x} = 0$, $\\frac{\\partial f}{\\partial y} = 0$, and $D(a, b) < 0$?",a:"As a point with no local extremum."},{q:"In $n$-dimensional space, the derivative $f'(\\mathbf{a})$ refers to a vector of _____ partial derivatives.",a:"First-order"},{q:"If a function is only partially differentiable but not $C^2$, can the second derivative test using the Hessian be applied?",a:"No, the theorems require $f \\in C^2$ for the Hessian-based sufficient conditions."},{q:"What mathematical object is $f'(\\mathbf{a})$ in the context of Theorem 8.1?",a:"The gradient vector (or the first derivative vector)."},{q:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$, the function has a local _____.",a:"Minimum"},{q:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, the function has a local _____.",a:"Maximum"},{q:"How many separate equations must be satisfied for the first-order necessary condition of an $n$-variable function?",a:"$n$ equations."},{q:"The notation $f: \\mathbb{R}^n \\to \\mathbb{R}$ implies the function takes a _____ as input and returns a real number.",a:"Vector (of $n$ components)"},{q:"According to the source, if $f'(\\mathbf{a}) = \\mathbf{0}$, $\\mathbf{a}$ is a candidate for a _____.",a:"Local extremum"},{q:"Why is the term $\\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$ subtracted in the calculation of $D(a, b)$?",a:"It is part of the determinant calculation for the $2 \\times 2$ Hessian matrix."},{q:"If the Hessian $f''(\\mathbf{a})$ is negative definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",a:"Negative (less than zero)."},{q:"If the Hessian $f''(\\mathbf{a})$ is positive definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",a:"Positive (greater than zero)."},{q:"Theorem 8.2 is described as a _____ of Theorem 8.1 for the case $n=2$.",a:"Special case"},{q:"What is the primary purpose of the Hessian matrix in optimization according to the source material?",a:"To determine the nature of local extrema (minimum or maximum)."},{q:"In Theorem 8.1, the condition $f'(\\mathbf{a}) = \\mathbf{0}$ is checked _____ the definiteness of the Hessian.",a:"Before (or simultaneously with)"},{q:"Concept: $D(a, b)$ in Two Variables",a:"The discriminant of the function at $(a, b)$, used to identify the presence and type of local extrema."},{q:"Can a function have a local extremum at a point where a partial derivative is non-zero?",a:"No, the necessary condition requires all partial derivatives to be zero."},{q:"For a two-variable function, if $f_{xx} = -2$, $f_{yy} = -5$, and $f_{xy} = 0$ at a stationary point, what type of extremum is found?",a:"Local maximum (since $D = 10 > 0$ and $f_{xx} = -2 < 0$)."},{q:"The provided source material is part of a course on which mathematical discipline?",a:"Numerical Analysis (Szélsőértékszámítás / Minimization of Functions)."},{q:"What is the symbol used for the Hessian matrix of $f$ in the provided text?",a:"$f''(\\mathbf{x})$"},{q:"In the notation $\\frac{\\partial^2 f}{\\partial x_n, \\partial x_1}(\\mathbf{x})$, which variable was the function differentiated with respect to first?",a:"$x_1$"},{q:"The second derivative test using $D(a, b)$ fails to provide a conclusion if $D(a, b)$ equals _____.",a:"$0$"}],golden:[{q:"What is the primary requirement for a function $f$ to be considered unimodal on the interval $[a, b]$?",a:"The function must be continuous and have a unique local minimum in the interval $[a, b]$."},{q:"Is convexity a necessary condition for a function to be unimodal?",a:"No, convexity is sufficient but not necessary for a function to be unimodal."},{q:"In the golden section search method, if $f(x) > f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",a:"The interval $[a, x]$ is chosen."},{q:"In the golden section search method, if $f(x) \\leq f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",a:"The interval $[y, b]$ is chosen."},{q:"How does the golden section search method define points $x$ and $y$ relative to the interval $[a, b]$ and a ratio $r$?",a:"$x = a + r(b - a)$ and $y = a + (1 - r)(b - a)$."},{q:"What constraint must be placed on the ratio $r$ to ensure that $x > y$ in the golden section search method?",a:"The ratio $r$ must satisfy $0.5 < r < 1$."},{q:"The golden section search method is similar to which root-finding method in its approach to narrowing intervals?",a:"It is similar to the bisection method."},{q:"What is the primary motivation for selecting $r$ specifically as the golden section ratio?",a:"It allows one of the new mesh points to coincide with a previous mesh point, requiring only one new function evaluation per step."},{q:"If the next interval is $[a', b'] = [y, b]$, what is the specific requirement for the new point $y'$ to optimize evaluations?",a:"The requirement is that $y' = x$."},{q:"Which quadratic equation must the ratio $r$ satisfy in the golden section search method?",a:"It must satisfy $r^2 + r - 1 = 0$."},{q:"What is the exact value of the positive solution for $r$ in the golden section search method?",a:"$r = \\frac{\\sqrt{5} - 1}{2}$."},{q:"What is the approximate decimal value of the golden section ratio $r$?",a:"The value is approximately $0.61834$."},{q:"What algebraic relationship involving $r$ and $(1-r)$ defines the golden section ratio?",a:"The relationship is $\\frac{r}{1 - r} = \\frac{1}{r}$."},{q:"What is the formula for the length of the interval after $n$ steps of the golden section search method?",a:"The length is $(b - a)r^n$."},{q:"Formula: How many steps $n$ are required to reach a tolerance $\\varepsilon$ in golden section search?",a:"$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r}$."},{q:"If the minimum point $p$ is located in the interval $[a, x]$, what condition is placed on $x'$ and $y$ to maintain evaluation efficiency?",a:"The condition is that $x' = y$."},{q:"According to Theorem 8.4, what happens to the golden section search method if the function $f \\in C[a, b]$ is unimodal?",a:"The method converges to the unique minimum point of the function $f$."},{q:"What is typically the final output of the golden section search algorithm to approximate the minimum point?",a:"The output is the midpoint of the final interval reached after $n$ steps."},{q:"In the example function $f(x) = x^2 - 0.8x + 1$, what is the exact minimum point $p$?",a:"The minimum point is $p = 0.4$."},{q:"For the function $f(x) = x^2 - 0.8x + 1$ on $[-1, 2]$ with $\\varepsilon = 0.005$, how many steps $n$ were theoretically required?",a:"Approximately $13.29$ steps were required."},{q:"In the example provided, what was the approximate minimum value produced by the algorithm after 14 iterations?",a:"The value was $0.3995535068$."},{q:"In Table 8.1, what were the initial interval bounds ($a_0, b_0$) used for the search?",a:"$[-1.0000000000, 2.0000000000]$."},{q:"The points $x$ and $y$ are chosen such that the lengths of which two sub-intervals are identical?",a:"The intervals $[a, x]$ and $[y, b]$."},{q:"If $f$ is continuous and unimodal on $[a, b]$, does the golden section search method always converge?",a:"Yes, it is guaranteed to converge to the minimum point."},{q:"In golden section search, $y$ is defined as $a + (1 - r)(b - a)$. What does $(1 - r)$ approximately equal?",a:"It approximately equals $0.38196$."},{q:"Term: Unimodal Function",a:"Definition: A continuous function on an interval $[a, b]$ that possesses exactly one local minimum."},{q:"How many new function evaluations are required in each step of the golden section search after the initialization?",a:"Only one new function value must be evaluated per step."},{q:"What does the expression $x - a = b - y = r(b - a)$ imply about the symmetry of $x$ and $y$?",a:"The points $x$ and $y$ are placed symmetrically with respect to the midpoint of the interval $[a, b]$."},{q:"The golden section search method reduces the interval size by a factor of _____ in every iteration.",a:"The factor is $r$ (approximately $0.618$)."},{q:"If the initial interval is $[a, b]$, what is the length of the interval after the first reduction step?",a:"The length is $r(b - a)$."},{q:"If a function is defined on $[-1, 1]$ as $f(x) = -1/x^2$, is the golden section search method applicable?",a:"No, because the function is not continuous at $x = 0$ and is not unimodal on that interval."},{q:"Why is the requirement $x > y$ necessary for the algorithm's interval logic?",a:"It ensures that the interior points are distinct and create a valid overlapping structure for comparison."},{q:"In the derivation of $r$, the expression $r = 1 - r + (1 - r)(1 - (1 - r))$ simplifies directly to which equation?",a:"It simplifies to $r = 1 - r + r - r^2$, which is $r^2 + r - 1 = 0$."},{q:"What happens to the golden section search method if the function has multiple local minima?",a:"The method may converge to only one of the local minima or fail to correctly bracket a minimum if unimodality is violated."},{q:"In the specific example, what was the length of the initial interval ($b_0 - a_0$)?",a:"The length was $3$."},{q:"If $b - a = 1$ and $r \\approx 0.618$, what is the length of the interval after 2 steps?",a:"The length is $r^2$, which is approximately $0.382$."},{q:"Is the golden section search method used for finding maximums or minimums of functions?",a:"It is primarily used to find the minimum of a unimodal function."},{q:"To find the maximum of a unimodal function using this method, what modification should be made?",a:"One should search for the minimum of $-f(x)$."},{q:"In Equation (8.2), if $r = 0.5$, what would happen to the points $x$ and $y$?",a:"The points $x$ and $y$ would coincide at the midpoint of the interval."},{q:"Given the function $f(x) = |\\cos x|$ on $[0, 2]$, why is it considered unimodal?",a:"Because it has a unique local minimum in that interval (at $x = \\pi/2$)."},{q:"What is the role of the tolerance $\\varepsilon$ in Algorithm 8.3?",a:"It serves as the stopping criterion, determining the maximum allowable length of the final interval."},{q:"If $x'$ and $y'$ are the new points in the interval $[a', b']$, how are they derived from the original interval variables?",a:"They are calculated using the same ratio $r$ applied to the new interval boundaries $a'$ and $b'$."},{q:"The sequence of intervals $[a_k, b_k]$ produced by the golden section search is described as being _____.",a:"Nested."},{q:"When $f(x) > f(y)$, we know $p \\in [a, x]$. Why is $b$ discarded?",a:"Because for a unimodal function, if the value at $x$ is higher than at $y$ (where $y < x$), the minimum cannot be to the right of $x$."},{q:"True or False: The golden section search requires the derivative of the function to be known.",a:"False, it only requires function evaluations."},{q:"In the example table, as $k$ increases, what happens to the distance $b_k - a_k$?",a:"The distance decreases geometrically by a factor of $r$."},{q:"If the tolerance $\\varepsilon$ is halved, how does the required number of steps $n$ change roughly?",a:"It increases by approximately $\\frac{\\log(0.5)}{\\log(r)} \\approx 1.44$ steps."},{q:"The method is 'golden' because $r$ is the _____.",a:"Golden ratio (specifically the conjugate or reciprocal relationship)."},{q:"If $a=0, b=10$, and $r=0.6$, what is the value of $x$?",a:"$x = 0 + 0.6(10 - 0) = 6$."},{q:"If $a=0, b=10$, and $r=0.6$, what is the value of $y$?",a:"$y = 0 + (1 - 0.6)(10 - 0) = 4$."},{q:"In the exercise $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$, what kind of point are we looking for?",a:"The minimum point of the function."},{q:"If the algorithm terminates at iteration $k=14$ with $[a_{14}, b_{14}]$, how is the result $0.3995535068$ calculated?",a:"It is calculated as $\\frac{a_{14} + b_{14}}{2}$."},{q:"Which of the following functions on $[0, 2]$ is likely unimodal based on the source text: $x^2$ or $x^2 - x^4$?",a:"$x^2$ is unimodal on $[0, 2]$."},{q:"In step 0 of the example, $y_0$ is $0.1458980338$. In step 1, the interval becomes $[-1, 0.8541]$. What is the value of $x_1$?",a:"$x_1 = 0.1458980338$ (it matches the previous $y_0$)."},{q:"In the golden section search, does the interval $[a, b]$ always contain the minimum $p$?",a:"Yes, the algorithm is designed such that the minimum point $p$ is always contained within each subsequent interval."}],simplex:[{q:"What is the mathematical definition of an $n$-dimensional simplex?",a:"The convex hull of $n + 1$ vectors in an $n$-dimensional space, where the differences between any $n$ vertices and the remaining vertex are linearly independent."},{q:"In the context of simplexes, what geometric shape represents a 1-dimensional simplex?",a:"A line segment."},{q:"What geometric shape corresponds to a 2-dimensional simplex?",a:"A triangle."},{q:"What geometric shape corresponds to a 3-dimensional simplex?",a:"A tetrahedron."},{q:"The simplex method is a numerical technique primarily used to approximate the _____ of a function of $n$ variables.",a:"minimum point"},{q:"How are the vertices of a simplex usually indexed at the start of an iteration in the simplex method?",a:"They are ordered by their function values, such that $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},{q:"In a simplex where $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$, which vector is designated as the 'worst' vertex?",a:"$\\mathbf{x}^{(n)}$"},{q:"In the simplex method, what is the formula for calculating the center $\\mathbf{x}_c$ of the $n$ best vertices when $\\mathbf{x}^{(j)}$ is the worst vertex?",a:"$\\mathbf{x}_c := \\frac{1}{n} \\sum_{i=0, i \\neq j}^{n} \\mathbf{x}^{(i)}$"},{q:"What is the formula used to calculate the reflected point $\\mathbf{x}_r$ in the simplex method?",a:"$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$"},{q:"Under what condition is a reflection discarded and replaced by a 'shrink' operation in the basic simplex method?",a:"When the function value at the reflected point $f(\\mathbf{x}_r)$ is not smaller than the function value of the worst vertex $f(\\mathbf{x}^{(j)})$."},{q:"What is the formula for recomputing a vertex $\\mathbf{x}^{(i)}$ when shrinking a simplex towards the best vertex $\\mathbf{x}^{(k)}$?",a:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)})$"},{q:"One stopping criterion for the simplex method is based on the simplex size. How is 'size' defined in this context?",a:"The length of the longest edge, calculated as $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\dots, n\\}$."},{q:"How does the stopping criterion based on function values at the simplex centers operate?",a:"The iteration stops when the absolute difference between the function values at the centers of consecutive simplexes is less than a tolerance $\\varepsilon$ ($|f_{k+1} - f_k| < \\varepsilon$)."},{q:"What statistical measure of function values at the vertices can be used as a stopping criterion for the simplex method?",a:"The standard deviation $\\sigma$ of the function values at the vertices."},{q:"Formula: Standard deviation $\\sigma$ of vertex function values",a:"$\\sigma := \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}$, where $\\bar{f}$ is the average function value."},{q:"Which point is typically used as the final approximation of the minimum point after the simplex method terminates?",a:"The center of the final simplex."},{q:"The _____ method is a popular variant of the simplex method that incorporates reflection, expansion, and contraction.",a:"Nelder–Mead"},{q:"In the Nelder–Mead method, how are the vertices indexed in each step?",a:"In non-decreasing order of their function values: $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},{q:"What occurs in Case (i) of the Nelder–Mead method, where $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$?",a:"The worst vertex $\\mathbf{x}^{(n)}$ is replaced by the reflected point $\\mathbf{x}_r$, and the iteration continues."},{q:"In Case (ii) of the Nelder–Mead method, if $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, what procedure is attempted next?",a:"Expansion of the simplex in the direction of the reflected point $\\mathbf{x}_r$."},{q:"What is the formula for the expansion point $\\mathbf{x}_e$ in the Nelder–Mead method?",a:"$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c)$, where $\\alpha > 1$."},{q:"In Nelder–Mead Case (ii), when is the expansion point $\\mathbf{x}_e$ accepted as the new vertex?",a:"If $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$; otherwise, the reflected point $\\mathbf{x}_r$ is accepted."},{q:"In Case (iii) of the Nelder–Mead method, which operation is performed when $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$?",a:"Contraction of the simplex."},{q:"What are the two possible formulas for the contraction point $\\mathbf{x}_z$ based on the relationship between $f(\\mathbf{x}^{(n)})$ and $f(\\mathbf{x}_r)$?",a:"$\\mathbf{x}_z = \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r)$, and $\\mathbf{x}_z = \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r)$."},{q:"Under what condition is the Nelder–Mead contraction point $\\mathbf{x}_z$ accepted as the new vertex?",a:"If $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$."},{q:"If the contraction operation in Nelder–Mead fails to find a better point, what fallback step is taken?",a:"The simplex is shrunk to half its size from its best point $\\mathbf{x}^{(0)}$."},{q:"What is the constraint on the expansion parameter $\\alpha$ in the Nelder–Mead method?",a:"$\\alpha > 1$."},{q:"What is the constraint on the contraction parameter $\\beta$ in the Nelder–Mead method?",a:"$0 < \\beta < 1$."},{q:"Comparing the Simplex method and Nelder–Mead for function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, which generally converges faster?",a:"The Nelder–Mead method."},{q:"According to Example 8.6, what are the coordinates of the global minimum for $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$?",a:"$(1, 0.5)$."},{q:"In the Nelder–Mead algorithm, Case (i) represents the scenario where the reflected point is better than the _____ vertex but worse than the _____ vertex.",a:"second-to-worst ($x^{(n-1)}$); best ($x^{(0)}$)"},{q:"If the Nelder–Mead expansion parameter is set to $\\alpha = 1$ and contraction parameter $\\beta = 1$, the method effectively reduces to the _____ method.",a:"simplex"},{q:"True or False: The center point used in the standard simplex method reflection is the average of all vertices.",a:"False; it is the center of all vertices except the worst one."},{q:"Concept: Derivative-free optimization",a:"Definition: Optimization methods that do not require information about the function's gradient, such as the simplex and Nelder–Mead methods."},{q:"Formula: Center of the simplex $\\mathbf{x}_c$ (Nelder-Mead)",a:"$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$, assuming vertices are ordered by function value."},{q:"In the Nelder–Mead shrink step, what is the formula for updating vertex $\\mathbf{x}^{(i)}$ for $i = 1, \\dots, n$?",a:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)})$"},{q:"In the Hungarian source, the simplex method is described as using the _____ of the vertices as an approximation for the minimum.",a:"súlypont (centroid/center of gravity)"},{q:"What specific objective function is used in Example 8.6 and 8.7 to demonstrate the simplex methods?",a:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},{q:"In the provided examples, what starting vertices are used for the simplex?",a:"$(-2, 4)$, $(-1, 4)$, and $(-1.5, 5)$."},{q:"What happens in Step 1 of the basic simplex method?",a:"The center of the best $n$ vertices is computed and the worst vertex is reflected over it."},{q:"In Nelder-Mead, if $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, the algorithm identifies that the reflection was likely _____.",a:"too far from the worst vertex."},{q:"What is the primary role of the $\\alpha$ parameter in Nelder-Mead?",a:"It determines the scale of the expansion in the direction of the reflected point."},{q:"What is the primary role of the $\\beta$ parameter in Nelder-Mead?",a:"It determines the scale of the contraction when the reflected point is poor."},{q:"The standard deviation $\\sigma$ stopping criterion interrupts the iteration when the values of the function at the vertices are _____.",a:"close enough to each other (i.e., $\\sigma$ is below a tolerance)."},{q:"Nelder-Mead Case (i) occurs when $f(\\mathbf{x}_r)$ is strictly between _____ and _____.",a:"$f(\\mathbf{x}^{(0)})$ and $f(\\mathbf{x}^{(n-1)})$."},{q:"Why is the order of indexing vertices updated in every step of the Nelder–Mead method?",a:"To ensure that $\\mathbf{x}^{(0)}$ always represents the best vertex and $\\mathbf{x}^{(n)}$ always represents the worst vertex for the logic of the next iteration."},{q:"How does the Nelder-Mead expansion step hope to improve the search?",a:"By moving further in a direction that produced an exceptionally good reflected point."},{q:"In the formula $x_r = 2x_c - x^{(j)}$, what does the constant $2$ represent geometrically?",a:"The reflected point is an equal distance away from the center as the original worst point, but on the opposite side."},{q:"When applying the Nelder-Mead method to $f(x, y) = x^2 - y^2$, what behavior is expected based on the exercises?",a:"Observation of how the method behaves on a function that is not bounded below (a saddle point)."},{q:"If a simplex becomes smaller than a predefined tolerance, which stopping criterion is being satisfied?",a:"The criterion based on the physical size (e.g., longest edge length) of the simplex."},{q:"In the exercise on one-variable functions, the simplex method essentially reduces the 'simplex' to what geometric object?",a:"A line segment."}],gradient:[{q:"What is the geometric relationship between the gradient vector $f'(\\mathbf{p})$ and the level curve of $f$ passing through point $\\mathbf{p}$?",a:"The gradient vector is perpendicular (orthogonal) to the level curve's tangent line at that point."},{q:"If $\\gamma(t)$ is a parametrization of a level curve $f(\\gamma(t)) = c$, what is the result of $\\frac{d}{dt} f(\\gamma(t))$?",a:"$0$"},{q:"According to the chain rule, how is the derivative $\\frac{d}{dt} f(\\gamma(t))$ expressed using the gradient?",a:"$f'(\\gamma(t))^T \\gamma'(t)$"},{q:"In the context of level curves, what does the expression $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ prove?",a:"The gradient is perpendicular to the direction vector of the tangent line at point $\\mathbf{p}$."},{q:"In which direction does a continuously differentiable function $f$ decrease most rapidly at point $\\mathbf{p}$?",a:"In the direction of the negative gradient vector $-f'(\\mathbf{p})$."},{q:"What is the minimum value of the directional derivative at point $\\mathbf{p}$ for a unit vector $\\mathbf{u}$?",a:"The minimum occurs when $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$."},{q:"Term: Descent direction",a:"Definition: A direction $\\mathbf{u}$ where there exists $\\delta > 0$ such that $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ for all $0 < t < \\delta$."},{q:"The gradient method is also known by what alternative name?",a:"The steepest descent method."},{q:"What is the general iterative formula for the gradient method?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)})$"},{q:"In the gradient method formula, what role does the parameter $\\alpha_k$ serve?",a:"It is a scaling parameter that determines the step size."},{q:"What is the formula for the factor $\\alpha_k$ in the constant step size variant of the gradient method?",a:"$\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$"},{q:"In the constant step size variant of the gradient method, what is the fixed distance between consecutive points?",a:"$h$"},{q:"Why is the accuracy of the constant step size gradient method limited by the value $h$?",a:"Because the fixed step length generally prevents approximating the exact minimum more closely than the step size itself."},{q:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",a:"It is chosen to minimize the function $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$ with respect to $t$."},{q:"In the optimal gradient method, what kind of problem must be solved at each step to determine the step size?",a:"A one-dimensional (single variable) function minimization problem."},{q:"In the optimal gradient method, where does the step forward from $\\mathbf{p}^{(k)}$ end relative to the level curves?",a:"It ends at a point where the search line is tangent to a level curve of $f$."},{q:"What is the geometric relationship between consecutive search directions in the optimal gradient method?",a:"Consecutive directions are perpendicular (orthogonal) to each other."},{q:"What is the local convergence rate of the optimal gradient method?",a:"Locally linearly convergent."},{q:"Why can the convergence of the optimal gradient method be slow despite being 'optimal' at each step?",a:"The asymptotic error constant can be close to $1$."},{q:"What visual behavior is characteristic of the optimal gradient method when approaching a minimum in a narrow 'valley'?",a:"The sequence zigzags slowly toward the minimum point."},{q:"When using a constant step size $h=0.3$, how does the gradient method sequence behave near the minimum?",a:"It approximates the minimum slowly and oscillates around it."},{q:"Which variant of the gradient method should be used if the analytical gradient vector is too expensive to compute?",a:"A numerical approximation variant using function values at small displacements."},{q:"What is the formula for the $i$-th component $v_i^{(k)}$ of the approximated gradient vector?",a:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},{q:"In the numerical gradient approximation, what does the vector $\\mathbf{e}^{(i)}$ represent?",a:"The $i$-th unit vector."},{q:"If the gradient vector is not used directly, what is the update rule for point $\\mathbf{p}^{(k+1)}$ using the approximate vector $\\mathbf{v}^{(k)}$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$"},{q:"Theorem: For $f \\in C^1$, the direction of the steepest descent at point $\\mathbf{p}$ is ____.",a:"$-f'(\\mathbf{p})$"},{q:"In the function $f(x, y) = 4 - 3x^2 - y^2$, what is the gradient at $\\mathbf{p} = (0.5, 0.5)$?",a:"$f'(\\mathbf{p}) = (-3, -1)$"},{q:"What defines the function $\\phi_k(t)$ used in the optimal gradient method?",a:"$\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$"},{q:"Why do the steps in the optimal gradient method always result in perpendicular directions?",a:"The step ends at a point where the gradient is perpendicular to the current search direction."},{q:"The constant step size factor $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ ensures the Euclidean distance between $\\mathbf{p}^{(k)}$ and $\\mathbf{p}^{(k+1)}$ is exactly ____.",a:"$h$"},{q:"What happens to the gradient method's path if a function's level curves are very elongated?",a:"The method tends to zigzag and progress slowly toward the minimum."},{q:"In the proof of the gradient's perpendicularity, what does $\\gamma'(t_0)$ represent?",a:"The direction vector of the tangent to the level curve at point $\\mathbf{p}$."},{q:"Under what condition is the direction $\\mathbf{u}$ considered a descent at point $\\mathbf{p}$?",a:"The function value must decrease for sufficiently small steps in direction $\\mathbf{u}$ from $\\mathbf{p}$."},{q:"How does the starting point affect the convergence path in Example 8.9?",a:"Different starting points can lead to different numbers of steps or different trajectories (e.g., direct vs. zigzagging)."},{q:"If the gradient method oscillates around the minimum, what can be adjusted to stabilize it?",a:"The step size parameter $h$ or the scaling factor $\\alpha_k$ can be reduced."},{q:"What is the primary drawback of the constant step size gradient method mentioned in the text?",a:"It cannot approximate the exact minimum point with a precision greater than the step size $h$."},{q:"The optimal gradient method minimizes the function value along the ____ of the gradient.",a:"line (or negative gradient direction)"},{q:"How many dimensions is the minimization problem in Equation 8.6?",a:"One dimension (single variable $t$)."},{q:"True or False: The gradient vector always points in the direction of the steepest increase of the function.",a:"True"},{q:"Concept: Steepest Descent Method",a:"Definition: An optimization algorithm that takes repeated steps in the direction of the negative gradient to find a local minimum."},{q:"In Example 8.9, the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ has a minimum point at ____.",a:"$(1, 0.5)$"},{q:"What is the meaning of $f \\in C^1$ in the context of the gradient method theorems?",a:"The function is continuously differentiable."},{q:"Formula: $v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$ is an approximation of which mathematical object?",a:"The $i$-th partial derivative of $f$ at point $\\mathbf{p}^{(k)}$."},{q:"How is the next point $\\mathbf{p}^{(k+1)}$ related to the current point $\\mathbf{p}^{(k)}$ and current gradient in the gradient method?",a:"It is the current point minus a scaled version of the gradient vector."},{q:"What does the 'optimal' in 'optimal gradient method' refer to specifically?",a:"It refers to selecting the step size that yields the maximum possible decrease in function value along the current gradient direction."},{q:"In the constant step size gradient method, if $h=0.3$, what is the distance $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}\\|_2$?",a:"$0.3$"},{q:"The condition $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ implies that the angle between the gradient and the level curve tangent is ____.",a:"$90$ degrees (or $\\pi/2$ radians)."},{q:"What determines if the convergence of the optimal gradient method is fast or slow?",a:"The shape of the function's level curves (the asymptotic error constant)."},{q:"In the notation $\\mathbf{p} + t\\mathbf{u}$, what does $t \\to 0+$ signify in the directional derivative formula?",a:"The limit as the step size $t$ approaches zero from the positive side."},{q:"If the optimal gradient method enters a 'valley' in the contour lines, how does its trajectory appear?",a:"It zigzags between the sides of the valley."},{q:"What is the dot product of two consecutive step vectors in the optimal gradient method?",a:"$0$ (because they are orthogonal)."},{q:"What is the purpose of the unit vector $\\mathbf{e}^{(i)}$ in the numerical gradient approximation?",a:"To isolate the change in the function value along the $i$-th coordinate axis."},{q:"The sequence $\\mathbf{p}^{(k)}$ generated by the gradient method always moves in a direction ____ to the local contour lines.",a:"perpendicular"},{q:"Under what condition does the gradient vector $f'(\\mathbf{p})$ exist for a function $f$?",a:"The function must be differentiable at point $\\mathbf{p}$."},{q:"How does the asymptotic error constant affect linear convergence?",a:"A constant close to $1$ results in very slow convergence, while a smaller constant results in faster convergence."}],linsys:[{q:"In the context of the gradient method, what is the standard form of the quadratic function $g(\\mathbf{x})$ used to solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"$g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$"},{q:"What matrix property is required for $g(\\mathbf{x})$ to be expressed in terms of the summation $\\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$?",a:"The matrix $\\mathbf{A}$ must be symmetric ($\\mathbf{A}^T = \\mathbf{A}$)."},{q:"In the summation form of the quadratic function $g(x_1, \\ldots, x_n)$, what term represents the linear component involving $\\mathbf{b}$?",a:"$- \\sum_{i=1}^{n} b_i x_i$"},{q:"What is the result of the partial derivative $\\frac{\\partial g}{\\partial x_i}$ for the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",a:"$\\sum_{j=1}^{n} a_{ij} x_j - b_i$"},{q:"What is the vectorial form of the gradient vector $g'(\\mathbf{x})$ for the quadratic function associated with the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"$g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$"},{q:"If matrix $\\mathbf{A}$ is invertible, how many critical points does the quadratic function $g(\\mathbf{x})$ have?",a:"Exactly one."},{q:"A critical point $\\bar{\\mathbf{x}}$ of the quadratic function $g(\\mathbf{x})$ is a solution to which linear equation?",a:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$"},{q:"What is the relationship between $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ and $g(\\bar{\\mathbf{x}})$ when $\\bar{\\mathbf{x}}$ is a critical point?",a:"$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$"},{q:"Under what condition on matrix $\\mathbf{A}$ does the critical point $\\bar{\\mathbf{x}}$ minimize the function $g(\\mathbf{x})$?",a:"When $\\mathbf{A}$ is a positive definite matrix."},{q:"Under what condition on matrix $\\mathbf{A}$ does the function $g(\\mathbf{x})$ have a maximum at the critical point $\\bar{\\mathbf{x}}$?",a:"When $\\mathbf{A}$ is a negative definite matrix."},{q:"According to the theorem on quadratic functions, if $\\mathbf{A}$ is symmetric and positive definite, where does the global minimum occur?",a:"At the point $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$."},{q:"What is the relationship between a local minimum and a global minimum for a quadratic function?",a:"If a quadratic function has a local minimum at a point, it is also a global minimum at that point."},{q:"In the iterative formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$, what does $\\mathbf{v}^{(k)}$ represent?",a:"The gradient vector at the current point, $\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)})$."},{q:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",a:"It is the minimum point of the one-variable function $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$."},{q:"What type of function is $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ in the gradient method?",a:"A quadratic polynomial."},{q:"What is the explicit formula for $\\alpha_k$ in terms of the gradient vector $\\mathbf{v}^{(k)}$ and the current state?",a:"$\\alpha_k = \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})}{(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}}$"},{q:"How is the residual vector $\\mathbf{r}^{(k)}$ defined in the gradient method algorithm?",a:"$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$"},{q:"What is the relationship between the residual vector $\\mathbf{r}^{(k)}$ and the gradient vector $\\mathbf{v}^{(k)}$?",a:"$\\mathbf{r}^{(k)} = -\\mathbf{v}^{(k)}$"},{q:"Using the residual vector $\\mathbf{r}^{(k)}$, what is the formula for the step size $\\alpha_k$?",a:"$\\alpha_k = \\frac{(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}}$"},{q:"What is the iterative update formula for the point $\\mathbf{p}^{(k+1)}$ using the residual vector $\\mathbf{r}^{(k)}$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$"},{q:"Why is the gradient method applicable to a linear system where the matrix has entries $a_{11}=4, a_{12}=2, a_{21}=2, a_{22}=5$?",a:"Because the coefficient matrix is symmetric and positive definite."},{q:"In the provided example, starting from $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ for a specific system, what is the exact solution being approached?",a:"$(-1, 2, 0)$"},{q:"Which specific vector calculation represents the 'direction' of the update in the final summarized algorithm (Equations 8.11-8.13)?",a:"The residual vector $\\mathbf{r}^{(k)}$."},{q:"In the expression for $\\phi_k(t)$, what is the coefficient of the $t^2$ term?",a:"$\\frac{1}{2}(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}$"},{q:"In the expression for $\\phi_k(t)$, what is the coefficient of the $-t$ term?",a:"$(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})$"},{q:"Cloze: All positive or negative definite matrices are _____.",a:"invertible"},{q:"Concept: Residual Vector ($\\mathbf{r}^{(k)}$)",a:"Definition: The difference between the target vector $\\mathbf{b}$ and the current transformation $\\mathbf{A}\\mathbf{p}^{(k)}$, used as the search direction in the gradient method."},{q:"Why is the symmetry of matrix $\\mathbf{A}$ ($a_{ij} = a_{ji}$) essential for the simplification of $\\frac{\\partial g}{\\partial x_i}$?",a:"It allows the combination of terms $(a_{ij} x_j + a_{ji} x_j)$ into $2a_{ij} x_j$, which cancels the $\\frac{1}{2}$ factor."},{q:"If a matrix $\\mathbf{A}$ is positive definite, what can be said about the sign of $(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ for any non-zero $\\Delta\\mathbf{x}$?",a:"It is always positive ($> 0$)."},{q:"In the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$, why is the sign before $\\alpha_k$ positive compared to the gradient update form?",a:"Because the residual $\\mathbf{r}^{(k)}$ is defined as the negative gradient ($-\\mathbf{v}^{(k)}$)."},{q:"What is the purpose of the constant $c$ in the quadratic function $g(\\mathbf{x})$ during the optimization process?",a:"It acts as a vertical shift and does not affect the location of the critical point or the gradient."},{q:"Formula: Write the denominator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",a:"$(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}$"},{q:"Formula: Write the numerator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",a:"$(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}$"},{q:"Sequence: In the gradient method, what is the first step performed in each iteration $k$?",a:"Calculate the residual vector $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$."},{q:"Sequence: After calculating the residual $\\mathbf{r}^{(k)}$, what is the next step in the gradient method iteration?",a:"Calculate the optimal step size $\\alpha_k$."},{q:"Sequence: What is the final step in a single iteration of the gradient method to find the next approximation?",a:"Update the solution estimate: $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$."},{q:"What matrix property ensures that the optimal step size $\\alpha_k$ always has a non-zero denominator for a non-zero residual?",a:"Positive definiteness (or negative definiteness)."},{q:"True or False: The optimal gradient method for linear systems requires the matrix $\\mathbf{A}$ to be symmetric.",a:"True."},{q:"In the example provided, what is the Euclidean norm error $(\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2)$ at the initial guess $\\mathbf{p}^{(0)} = (3, 3, 3)^T$?",a:"5.09901951"},{q:"How does the error change as $k$ increases in the gradient method example table?",a:"The error consistently decreases towards zero."},{q:"What is the Hessian matrix ($g''(\\mathbf{x})$) of the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",a:"$\\mathbf{A}$"},{q:"If the gradient method is applied to $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, what is the equivalent linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for the minimum?",a:"$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -30 \\end{pmatrix}$"},{q:"Cloze: The optimal gradient method selects $\\alpha_k$ to minimize the function along the _____ direction.",a:"residual (or negative gradient)"},{q:"Why can the solution of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ be framed as a minimization problem?",a:"Because the solution occurs where the gradient of the associated quadratic function $g(\\mathbf{x})$ is zero."},{q:"In the vector notation $\\mathbf{b}^T \\mathbf{x}$, if $\\mathbf{b} = (b_1, \\ldots, b_n)^T$, how is this expressed as a sum?",a:"$\\sum_{i=1}^{n} b_i x_i$"},{q:"Under what condition is the critical point $\\bar{\\mathbf{x}}$ of $g(\\mathbf{x})$ unique?",a:"When the matrix $\\mathbf{A}$ is invertible."},{q:"What is the purpose of the optimal gradient method in numerical analysis?",a:"To iteratively approximate the solution of a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$."},{q:"How does the formula for $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ simplify when $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ and $\\mathbf{A}$ is symmetric?",a:"The linear terms in $\\Delta\\mathbf{x}$ cancel out, leaving $g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$."},{q:"If $\\mathbf{A}$ is negative definite, does the iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ find a minimum or a maximum?",a:"It finds a maximum."},{q:"In Exercise 11, for $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$ starting from $(9, 1)^T$, what is the asymptotic error constant?",a:"0.8"},{q:"What is the residual vector $\\mathbf{r}^{(0)}$ if the initial guess $\\mathbf{p}^{(0)}$ is exactly the solution $\\bar{\\mathbf{x}}$?",a:"The zero vector $\\mathbf{0}$."},{q:"In the summation form of $g(\\mathbf{x})$, what does the index $j$ represent in the term $a_{ij} x_i x_j$?",a:"The column index of matrix $\\mathbf{A}$ and the index of the second vector component."},{q:"What property of the quadratic function $g(\\mathbf{x})$ ensures that the gradient $g'(\\mathbf{x})$ is linear?",a:"The fact that the highest degree of $\\mathbf{x}$ in $g(\\mathbf{x})$ is 2."},{q:"Cloze: The function $\\phi_k(t)$ represents $g$ evaluated along the line passing through $\\mathbf{p}^{(k)}$ in the direction of _____.",a:"$-\\mathbf{v}^{(k)}$ (or $\\mathbf{r}^{(k)}$)"},{q:"How is the symmetry of $\\mathbf{A}$ utilized in the step $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$?",a:"By taking the transpose of the scalar value: $(\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x})^T = \\Delta\\mathbf{x}^T \\mathbf{A}^T \\bar{\\mathbf{x}}$ and applying $\\mathbf{A}^T = \\mathbf{A}$."},{q:"True or False: The gradient method always reaches the exact solution in a finite number of steps for any symmetric positive definite matrix.",a:"False (it is an iterative method that provides an approximation, though it may converge to the exact solution in specific cases)."},{q:"In the example system, what is the value of $b_2$?",a:"8"},{q:"In the example system, what is the value of $a_{31}$?",a:"-1"},{q:"What is the primary computational cost per iteration in the optimal gradient method?",a:"The matrix-vector multiplication $\\mathbf{A}\\mathbf{r}^{(k)}$."},{q:"Cloze: To minimize $g(\\mathbf{x})$, we move in the direction of the _____ gradient.",a:"negative"}],newton:[{q:"What is the primary purpose of Newton's method as described in the source material?",a:"To find the minimum value of a function $f: \\mathbb{R}^n \\to \\mathbb{R}$."},{q:"What degree is the Taylor polynomial used to approximate the function $f$ in a neighborhood of $\\mathbf{p}^{(0)}$?",a:"Second-order (or quadratic)."},{q:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f'(\\mathbf{p}^{(0)})$ represent?",a:"The gradient vector of $f$ evaluated at $\\mathbf{p}^{(0)}$."},{q:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f''(\\mathbf{p}^{(0)})$ represent?",a:"The Hessian matrix of $f$ evaluated at $\\mathbf{p}^{(0)}$."},{q:"What is the mathematical definition of the quadratic Taylor approximation $g(\\mathbf{x})$ of $f$ at $\\mathbf{p}^{(0)}$?",a:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)})$."},{q:"Under what condition does the quadratic approximation $g(\\mathbf{x})$ possess a unique global minimum?",a:"When the Hessian matrix $f''(\\mathbf{p}^{(0)})$ is positive definite."},{q:"Provide the iteration formula for Newton's method for minimization.",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},{q:"Newton's method for minimization is equivalent to applying Newton's iteration to solve which equation system?",a:"$f'(\\mathbf{x}) = \\mathbf{0}$."},{q:"According to Theorem 8.13, what must be the value of $f'(\\mathbf{p})$ for a point $\\mathbf{p}$ to be a local minimum candidate?",a:"$\\mathbf{0}$ (the zero vector)."},{q:"What differentiability class is required for $f$ to apply the local quadratic convergence theorem for Newton's method?",a:"$f \\in C^3$."},{q:"If $f'(\\mathbf{p}) = \\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, what can be concluded about the point $\\mathbf{p}$?",a:"The function $f$ has a local minimum at $\\mathbf{p}$."},{q:"What is the typical convergence rate of Newton's method near a local minimum where the Hessian is positive definite?",a:"Locally quadratic convergence."},{q:"According to the proof of Theorem 8.13, which theorem establishes the local quadratic convergence of Newton's method for systems?",a:"Theorem 2.56."},{q:"Concept: Newton's Method for Minimization",a:"Definition: An iterative algorithm that uses first and second derivatives to find local minima of a function."},{q:"In Example 8.14, Newton's method is applied to which function $f(x, y)$?",a:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},{q:"What is the exact minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ used in Example 8.14?",a:"$(1, 0.5)^T$."},{q:"In Example 8.14, the starting vector $\\mathbf{p}^{(0)}$ for the first trial is _____.",a:"$(-1, 4)^T$."},{q:"For the function in Example 8.14, what occurs if the Newton's iteration starts from $(1, 3)^T$?",a:"The method returns the exact minimum point in a single step."},{q:"How does the convergence speed of Newton's method in Example 8.14 (positive definite Hessian) compare to Example 8.15 (zero Hessian)?",a:"Example 8.14 is quadratic (fast), while Example 8.15 is linear (slower)."},{q:"In Example 8.15, what is the function $f(x, y)$ defined as?",a:"$f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$."},{q:"What is the value of the Hessian $f''(1, 0.5)$ for the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$?",a:"The zero matrix $\\mathbf{0}$."},{q:"Why is the Hessian $f''(1, 0.5) = \\mathbf{0}$ significant in Example 8.15?",a:"It means the Hessian is not positive definite, violating a condition for quadratic convergence."},{q:"Despite the non-positive definite Hessian at the minimum, how does Newton's method behave for the function in Example 8.15?",a:"It still converges, but the rate of convergence is only linear."},{q:"What type of function always results in the exact minimum in one step using Newton's method (assuming a positive definite Hessian)?",a:"Quadratic functions."},{q:"Exercise 3 asks to prove that if Theorem 8.13 conditions hold and $\\mathbf{p}^{(0)}$ is close to $\\mathbf{p}$, then $f''(\\mathbf{p}^{(k)})$ is _____ for all $k$.",a:"Invertible."},{q:"How is the next iteration point $\\mathbf{p}^{(1)}$ calculated from the quadratic approximation $g$?",a:"It is the point where $g$ attains its global minimum."},{q:"The notation $(f''(\\mathbf{p}^{(k)}))^{-1}$ in the iteration formula denotes the _____ of the Hessian matrix.",a:"Inverse."},{q:"The sequence $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ is known as the _____ minimum-seeking method.",a:"Newton-type (or Newton's)."},{q:"What happens to the gradient $f'$ at the minimum point in Example 8.14 and 8.15?",a:"It becomes the zero vector $\\mathbf{0}$."},{q:"In Example 8.15, Table 8.6 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ approaching a constant. What does this indicate?",a:"Linear convergence."},{q:"In Example 8.14, Table 8.5 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ being tracked. What is this ratio used to identify?",a:"Quadratic convergence."},{q:"What is the value of $f(\\mathbf{p}^{(k)})$ at the exact minimum $(1, 0.5)^T$ for both examples in Section 8.6?",a:"0.00000000."},{q:"If the Hessian matrix $f''(\\mathbf{x})$ is positive definite everywhere, what kind of minimum does the quadratic approximation $g$ have?",a:"A global minimum."},{q:"Why is $f \\in C^3$ a necessary condition for the quadratic convergence theorem of Newton's method?",a:"To ensure the second derivative is Lipschitz continuous or that the Taylor remainder behaves correctly for quadratic convergence."},{q:"True or False: Newton's method for minimization requires calculating the inverse of the Hessian matrix at every step.",a:"True (at least conceptually, as per the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$)."},{q:"In the formula for Newton's method, what is subtracted from the current point $\\mathbf{p}^{(k)}$?",a:"The product of the inverse Hessian and the gradient vector: $(f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},{q:"What vector norm is used in the examples to measure the distance to the minimum point?",a:"The $L_2$ norm (Euclidean norm), denoted as $\\|\\cdot\\|_2$."},{q:"For the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, how many iterations starting from $(-1, 4)^T$ were shown before reaching a distance of approximately $1.7 \\times 10^{-5}$?",a:"5 iterations."},{q:"In Example 8.15, at iteration $k=20$, the distance to the minimum is approximately _____.",a:"$0.01238211$."},{q:"Based on the tables, which example converges to a much higher precision in fewer steps?",a:"Example 8.14 (due to quadratic convergence)."},{q:"In Example 8.15, the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ eventually stabilizes around what value?",a:"Approximately $0.66666667$ (or $2/3$)."},{q:"Under what circumstance does Newton's method for minimization fail to be defined for a specific iteration step?",a:"If the Hessian matrix $f''(\\mathbf{p}^{(k)})$ is singular (non-invertible)."},{q:"Theorem 8.13 asserts that Newton's method converges _____ if the starting point is close enough to the minimum.",a:"Locally."},{q:"What is the relationship between the Hessian matrix $f''(\\mathbf{p})$ and the Jacobian matrix of the system $f'(\\mathbf{x}) = \\mathbf{0}$?",a:"The Hessian of $f$ is the Jacobian of the gradient system $f'(\\mathbf{x})$."},{q:"If $f$ is a quadratic function, $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{b}^T \\mathbf{x} + c$, what is its Hessian matrix $f''(\\mathbf{x})$?",a:"The matrix $A$."},{q:"Newton's method effectively replaces the objective function at each step with its _____ approximation.",a:"Quadratic (or second-order Taylor)."},{q:"What is the result of the first derivative of the Taylor approximation $g(\\mathbf{x})$ at the point $\\mathbf{x} = \\mathbf{p}^{(1)}$?",a:"The gradient $g'(\\mathbf{p}^{(1)}) = \\mathbf{0}$."},{q:"In Example 8.15, the starting function value $f(\\mathbf{p}^{(0)})$ is _____.",a:"$244.10000000$."},{q:"In Example 8.14, the value of the function at the starting point $(-1, 4)^T$ is _____.",a:"$57.00000000$."},{q:"The term $f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)})$ in the Taylor polynomial represents a _____ product.",a:"Scalar (or dot) product."},{q:"Which specific property of the Hessian ensures that the search direction in Newton's method is a descent direction?",a:"Positive definiteness."},{q:"How is the Taylor polynomial $g(\\mathbf{x})$ related to the next iterate $\\mathbf{p}^{(1)}$ in terms of calculus?",a:"$\\mathbf{p}^{(1)}$ is the stationary point of $g(\\mathbf{x})$, found by setting $g'(\\mathbf{x}) = \\mathbf{0}$."},{q:"What is the significance of the distance $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ becoming zero in a table?",a:"The iteration has reached the exact minimum within numerical precision."},{q:"If Newton's method is applied to a function where the Hessian is always positive definite, what can be said about the shape of the function?",a:"The function is strictly convex."},{q:"The proof of Theorem 8.13 uses which theorem to establish that $\\mathbf{p}$ is a local minimum?",a:"Theorem 8.1."},{q:"In Example 8.14, at $k=1$, the iterate $\\mathbf{p}^{(1)}$ is _____.",a:"$(-1.33333333, 0.83333333)^T$."},{q:"Exercise 2: For a quadratic function with a positive definite Hessian, why is the minimum found in one step?",a:"Because the second-order Taylor polynomial $g(\\mathbf{x})$ is identical to the function $f(\\mathbf{x})$ itself."},{q:"What is the gradient vector of $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ at its minimum $(1, 0.5)^T$?",a:"$(0, 0)^T$."},{q:"The Hessian matrix is defined as the matrix of _____ partial derivatives.",a:"Second-order."},{q:"Newton's method for minimization can be viewed as a _____ refinement of the current estimate of the minimum.",a:"Local."}],quasinewton:[{q:"In Quasi-Newton methods, the function $f$ is approximated near $\\mathbf{p}^{(k)}$ by what type of function?",a:"A quadratic function $g(\\mathbf{x})$."},{q:"Formula: Quadratic approximation $g(\\mathbf{x})$ used in Quasi-Newton methods",a:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + (\\mathbf{v}^{(k)})^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)})$"},{q:"In the quadratic approximation for Quasi-Newton methods, what do $\\mathbf{v}^{(k)}$ and $\\mathbf{A}^{(k)}$ typically represent?",a:"Approximations of the gradient $f'(\\mathbf{p}^{(k)})$ and the Hessian $f''(\\mathbf{p}^{(k)})$."},{q:"If $\\mathbf{A}^{(k)}$ is positive definite, what is the formula for the minimum point $\\mathbf{p}^{(k+1)}$ of the quadratic approximation $g(\\mathbf{x})$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{v}^{(k)}$"},{q:"What is the order of magnitude for function evaluations required per iteration when using numerical difference approximations for both the gradient and Hessian?",a:"$n^2$ function evaluations."},{q:"Formula: First-order forward difference approximation for the $i$-th component of the gradient $v_i^{(k)}$",a:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},{q:"The standard Quasi-Newton method for minimization assumes the exact value of which vector is available?",a:"The gradient vector $f'(\\mathbf{p}^{(k)})$."},{q:"In Quasi-Newton iterations, how is the step vector $\\mathbf{s}^{(k)}$ defined relative to the current point $\\mathbf{p}^{(k)}$?",a:"$\\mathbf{s}^{(k)} = \\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"},{q:"Formula: Definition of the gradient change vector $\\mathbf{y}^{(k)}$",a:"$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})$"},{q:"What equation must the updated Hessian approximation $\\mathbf{A}^{(k+1)}$ satisfy to be consistent with the gradient change?",a:"The secant equation: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$."},{q:"Formula: Broyden's method update for the matrix $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"},{q:"What are the two main theoretical drawbacks of using the standard Broyden's method for function minimization?",a:"The generated matrices are generally not symmetric and not necessarily positive definite."},{q:"Concept: Closest symmetric matrix",a:"The unique symmetric matrix closest to a matrix $\\mathbf{A}$ in the Frobenius norm is $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$."},{q:"What is the full name of the 'PSB update' in Quasi-Newton methods?",a:"Powell-Symmetric-Broyden update."},{q:"The PSB update is derived by iteratively enforcing which two properties?",a:"Symmetry and the secant equation."},{q:"Formula: PSB update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T$"},{q:"According to Theorem 8.17, what is the convergence rate of the PSB update near a local minimum with a positive definite Hessian?",a:"Superlinear convergence."},{q:"What property does the PSB update lack that is often critical for efficient minimization?",a:"It does not guarantee that $\\mathbf{A}^{(k)}$ remains positive definite."},{q:"Concept: Positive Definite Matrix Construction",a:"A matrix $\\mathbf{A}$ is positive definite if it can be written as $\\mathbf{M}\\mathbf{M}^T$ where $\\mathbf{M}$ is non-singular."},{q:"If $\\mathbf{A}^{(k+1)}$ is positive definite and satisfies the secant equation, what inequality must hold between $\\mathbf{y}^{(k)}$ and $\\mathbf{s}^{(k)}$?",a:"$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$"},{q:"The BFGS update is named after which four researchers?",a:"Broyden, Fletcher, Goldfarb, and Shanno."},{q:"Formula: BFGS update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}$"},{q:"Which Quasi-Newton update is generally considered the best performing method for approximating the Hessian?",a:"The BFGS update."},{q:"Under what condition will the BFGS update generate a positive definite $\\mathbf{A}^{(k+1)}$ if $\\mathbf{A}^{(k)}$ is positive definite?",a:"The condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ must be satisfied."},{q:"As the iterates $\\mathbf{p}^{(k)}$ approach a point $\\mathbf{p}$ where $f''(\\mathbf{p})$ is positive definite, how does the term $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}$ behave?",a:"It becomes positive, ensuring the BFGS update is well-defined and positive definite."},{q:"To avoid solving linear systems, Quasi-Newton methods often use a recursion for which matrix?",a:"The inverse of the Hessian approximation, $\\mathbf{B}^{(k)} = (\\mathbf{A}^{(k)})^{-1}$."},{q:"Formula: Recursive update for the inverse matrix $\\mathbf{B}^{(k+1)}$ in the BFGS method",a:"$\\mathbf{B}^{(k+1)} = \\mathbf{B}^{(k)} + (1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}$"},{q:"When using the inverse Hessian approximation $\\mathbf{B}^{(k)}$, how is the step vector $\\mathbf{s}^{(k)}$ calculated?",a:"$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)})$"},{q:"What does the acronym 'DFP' stand for in Quasi-Newton methods?",a:"Davidon-Fletcher-Powell."},{q:"How does the starting point for the DFP derivation differ from the BFGS derivation?",a:"DFP starts from the inverse secant equation $(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} = \\mathbf{v}^{(k)}$."},{q:"Formula: DFP update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T$"},{q:"Formula: Recursive update for the inverse matrix $(\\mathbf{A}^{(k+1)})^{-1}$ in the DFP method",a:"$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"},{q:"What is a recommended choice for the initial matrix $\\mathbf{A}^{(0)}$ in BFGS or DFP iterations?",a:"The exact Hessian $f''(\\mathbf{p}^{(0)})$ or its numerical difference approximation."},{q:"Which two Quasi-Newton methods mentioned in the text exhibit similar rapid convergence speeds in the provided examples?",a:"The BFGS and DFP updates."},{q:"The problem of finding $\\mathbf{A}^{(k+1)}$ that satisfies $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ is known as solving the _____ equation.",a:"Secant"},{q:"Cloze: In the BFGS update, if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ is not met, the new matrix $\\mathbf{A}^{(k+1)}$ is only guaranteed to be _____.",a:"Positive semidefinite"},{q:"Why is it important for $\\mathbf{A}^{(k)}$ to be positive definite during minimization?",a:"To ensure the local quadratic approximation $g(\\mathbf{x})$ has a unique minimum."},{q:"Process: In Quasi-Newton methods, the step from $\\mathbf{p}^{(k)}$ to $\\mathbf{p}^{(k+1)}$ is determined by solving what linear system?",a:"$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)})$"},{q:"According to the text, what is the main advantage of Quasi-Newton methods over the classical Newton's method?",a:"They do not require the computation of the exact Hessian matrix at each step."},{q:"Term: Frobenius Norm",a:"Definition: A matrix norm defined as the square root of the sum of the squares of all matrix elements, used to find the 'closest' symmetric matrix."},{q:"In the derivation of the BFGS update, the matrix $\\mathbf{M}^{(k+1)}$ is chosen to satisfy $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$ for all vectors $\\mathbf{z}$ that meet what geometric condition?",a:"$\\mathbf{z}$ is orthogonal to $\\mathbf{v}^{(k)}$ ($\\mathbf{z} \\perp \\mathbf{v}^{(k)}$)."},{q:"Formula: Numerical approximation of the second partial derivative $a_{ij}^{(k)}$",a:"$a_{ij}^{(k)} = \\frac{1}{h^2}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)}))$"},{q:"The derivation of the DFP update is considered analogous to the derivation of which other update?",a:"The BFGS update."},{q:"For the BFGS update, what is the relationship between the iterates $\\mathbf{p}^{(k)}$ and the target minimum $\\mathbf{p}$ to guarantee existence of $\\varepsilon$ and $\\delta$ for convergence?",a:"$\\mathbf{p}^{(0)}$ must be sufficiently close to $\\mathbf{p}$ and $\\mathbf{A}^{(0)}$ sufficiently close to $f''(\\mathbf{p})$."},{q:"Cloze: The matrix $\\mathbf{M}^{(k+1)}$ in the BFGS derivation is proven to be _____ if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ holds.",a:"Invertible"},{q:"True or False: The PSB update formula generates a symmetric matrix even if the initial matrix $\\mathbf{A}^{(k)}$ was not symmetric.",a:"False (The derivation assumes $\\mathbf{A}^{(k)}$ is symmetric to produce a symmetric $\\mathbf{A}^{(k+1)}$)."},{q:"In the context of the BFGS inverse update, what does the matrix $\\mathbf{B}^{(k)}$ represent?",a:"The approximation of the inverse Hessian, $(\\mathbf{A}^{(k)})^{-1}$."},{q:"The variable $\\alpha^2$ in the BFGS derivation is defined as the ratio of which two scalar products?",a:"$\\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}$"},{q:"Which update formula was historically established first: BFGS or DFP?",a:"DFP (Davidon 1959, Fletcher and Powell 1963; BFGS was 1970)."},{q:"How many function evaluations are needed for the gradient numerical approximation $v_i^{(k)}$ alone?",a:"$n$ evaluations (plus one at the base point)."},{q:"What is the primary motivation for the 'Correction Iteration' that leads to the PSB update?",a:"To find a matrix that is both symmetric and satisfies the secant equation."},{q:"Does the BFGS update require the matrix $\\mathbf{M}^{(k)}$ to be lower triangular?",a:"No, it only requires $\\mathbf{M}^{(k)}$ to be invertible."},{q:"In the example tables, what does the column labeled $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ represent?",a:"The ratio of consecutive errors, used to observe the convergence rate."},{q:"Concept: Secant Equation consistency",a:"If $\\mathbf{A}^{(k+1)}$ satisfies the secant equation, then $\\mathbf{s}^{(k)}$ is an eigenvector of $(\\mathbf{A}^{(k+1)})^{-1} \\mathbf{A}^{(k+1)}$ with eigenvalue 1."},{q:"Formula: The value $\\mathbf{v}^{(k)}$ used to construct the BFGS update $\\mathbf{M}^{(k+1)}$",a:"$\\mathbf{v}^{(k)} = (\\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}})^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}$"}]};function Ne({deck:e}){const{t:a,lang:n}=_(),i=Ae[e]??[],[s,h]=g.useState(null);return i.length?t.jsxs("div",{className:"deck",children:[t.jsx("h3",{children:a({en:"Glossary",hu:"Fogalomtár"})}),t.jsx("div",{className:"deck-list",children:i.map((o,r)=>{const m=s===r;return t.jsxs("button",{className:"deck-item",onClick:()=>h(m?null:r),children:[t.jsxs("div",{className:"deck-item__head",children:[t.jsx("strong",{children:t.jsx(ae,{markdown:o.term[n]})}),t.jsx("span",{children:m?"−":"+"})]}),m&&t.jsx("div",{className:"deck-item__body",children:t.jsx(ae,{markdown:o.def[n]})})]},r)})})]}):null}const se=e=>Array.from({length:e},(a,n)=>n);function Se(e){const a=se(e);for(let n=a.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[a[n],a[i]]=[a[i],a[n]]}return a}function Ie({deck:e}){const{t:a}=_(),n=Me[e]??[],[i,s]=g.useState(()=>se(n.length)),[h,o]=g.useState(0),[r,m]=g.useState(!1),l=g.useMemo(()=>n[i[h]],[n,i,h]);if(!n.length)return null;const b=f=>{m(!1),o(p=>(p+f+n.length)%n.length)};return t.jsxs("div",{className:"deck",children:[t.jsxs("div",{className:"deck__bar",children:[t.jsx("h3",{children:a({en:"Flashcards",hu:"Tanulókártyák"})}),t.jsxs("div",{className:"deck__ctrls",children:[t.jsxs("span",{className:"deck__count",children:[h+1," / ",n.length]}),t.jsx("button",{className:"btn",onClick:()=>{s(Se(n.length)),o(0),m(!1)},children:a({en:"🔀 Shuffle",hu:"🔀 Keverés"})}),t.jsx("button",{className:"btn",onClick:()=>{s(se(n.length)),o(0),m(!1)},children:a({en:"Reset",hu:"Eredeti"})})]})]}),t.jsxs("button",{className:"deck-card",onClick:()=>m(f=>!f),children:[t.jsx("div",{className:"deck-card__tag",children:a(r?{en:"Answer",hu:"Válasz"}:{en:"Question",hu:"Kérdés"})}),t.jsx(ae,{markdown:r?l.a:l.q})]}),t.jsxs("div",{className:"deck__nav",children:[t.jsx("button",{className:"btn",onClick:()=>b(-1),children:a({en:"‹ Prev",hu:"‹ Előző"})}),t.jsx("button",{className:"btn btn--primary",onClick:()=>m(f=>!f),children:a(r?{en:"Show question",hu:"Kérdés"}:{en:"Show answer",hu:"Válasz"})}),t.jsx("button",{className:"btn",onClick:()=>b(1),children:a({en:"Next ›",hu:"Következő ›"})})]})]})}const Fe=`## 8.1. Review of Calculus

**Theorem 8.1.** *Let $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\\mathbf{a} \\in \\mathbb{R}^n$, then $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ holds for all $i = 1, \\ldots, n$.*

*If $f \\in C^2$ and $f'(\\mathbf{a}) = \\mathbf{0}$ for some $\\mathbf{a} \\in \\mathbb{R}^n$, moreover, the Hessian matrix $f''(\\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\\mathbf{a}$.*

For two-variable functions we have the following special case of the previous result.

**Theorem 8.2.** *Let $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*holds.*

*On the other hand, if relation (8.1) holds at a point $(a, b)$, and*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0,$$

*then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*
`,He=`## 8.1. Analízis előismeretek

**8.1. tétel.** *Legyen $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ parciálisan differenciálható minden változója szerint. Ekkor ha $f$-nek létezik lokális szélsőértéke az $\\mathbf{a}$ pontban, akkor $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ teljesül minden $i = 1, \\ldots, n$-re.*

*Ha $f \\in C^2$, és valamely $\\mathbf{a}$ pontban $f'(\\mathbf{a}) = \\mathbf{0}$, továbbá az $f''(\\mathbf{a})$ Hesse-mátrix pozitív (negatív) definit, akkor $f$-nek lokális minimuma (maximuma) van $\\mathbf{a}$-ban.*

Kétváltozós függvényekre az előbbi tétel speciális esetén kapjuk:

**8.2. tétel.** *Legyen $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Ekkor ha $f$-nek létezik lokális szélsőértéke az $(a, b)$ pontban, akkor*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*teljesül.*

*Fordítva, ha valamely $(a, b)$-re (8.1) teljesül, továbbá*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0$$

*akkor $f$-nek létezik lokális szélsőértéke $(a, b)$-ben, mégpedig lokális maximuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$ ill. lokális minimuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. Ha $D(a, b) < 0$, akkor $f$-nek nincs szélsőértéke $(a, b)$-ben.*
`,Ee=`## 8.2. Golden Section Search Method

Let $f\\colon [a, b] \\to \\mathbb{R}$ be continuous, and suppose that it is a *unimodal function*, i.e., it has a unique minimum point in the interval $[a, b]$. This holds if, e.g., the function is convex on $[a, b]$, but it is not necessary (see, e.g. the second and third functions in Figure 8.1). Let $p$ be the (unique) minimum point of $f$.

The *golden section search method* is similar to the bisection method in the sense that we define a sequence of nested intervals which all contains the minimum point $p$ of $f$: Let $a < y < x < b$. If $f(x) > f(y)$, then $p \\in [a, x]$, otherwise $p \\in [y, b]$ holds. (See Figure 8.2.) Then we repeat the procedure with the interval $[a, x]$ or $[y, b]$.

We define the points $x$ and $y$ so that the length of the intervals $[a, x]$ and $[y, b]$ be the same: $x - a = b - y = r(b - a)$ for some $0 < r < 1$. Then

$$x = a + r(b - a), \\qquad y = a + (1 - r)(b - a) \\tag{8.2}$$

hold. The assumption $x > y$ implies that $0.5 < r < 1$ must be satisfied. We denote the next interval by $[a', b']$. We specify the next mesh points $x'$ and $y'$ by the rule (8.2), and comparing the functions values $f(x')$ and $f(y')$ we determine the next interval. We have not defined the ratio $r$ yet. In case of the golden section search method, $r$ is defined so that one of the new mesh points $x'$ and $y'$ should coincide with one of the previous mesh points in order in each steps we should evaluate only one new function value.

Figure 8.3 demonstrates the situation when in the next step the minimum point is located in the right interval $[y, b]$. Then we require that $y' = x$ be a mesh point in the next step. Then the following relations are satisfied:

$$\\begin{aligned}
a + r(b - a) &= y' \\\\
&= a' + (1 - r)(b' - a') \\\\
&= y + (1 - r)(b - y) \\\\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\\end{aligned}$$

and so

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

which yields equation

$$r^2 + r - 1 = 0 \\tag{8.3}$$

for the ratio $r$. Its positive solution is $r = (\\sqrt{5} - 1)/2 \\approx 0.61834$. This is the ratio of the *golden section*, since $r$ satisfies the equation

$$\\frac{r}{1 - r} = \\frac{1}{r}.$$

In the opposite case when the minimum point is located in the interval $[a, x]$, and we select $x'$ and $y'$ so that $x' = y$ be satisfied. It can be shown easily (see Exercise 3) that this yields the same equation (8.3).

---

**Algorithm 8.3. Golden section search method**

\`\`\`
INPUT:    f(x) - function to minimze
          [a, b] - interval
          ε - tolerance
OUTPUT:   p - approximation of the minimum point

r ← (√5 − 1)/2
x ← a + r(b − a)
y ← a + (1 − r)(b − a)
fx ← f(x)
fy ← f(y)
while (b − a) > ε do
    if fx > fy do
        b ← x
        x ← y
        fx ← fy
        y ← a + (1 − r)(b − a)
        fy ← f(y)
    else do
        a ← y
        y ← x
        fy ← fx
        x ← a + r(b − a)
        fx ← f(x)
    end do
end do
output((a + b)/2)
\`\`\`

---

The next result can be shown.

**Theorem 8.4.** *Let $f \\in C[a, b]$ be a unimodal function. Then the golden section search method converges to the minimum point of the function $f$.*

It is easy to compute that the length of the interval after $n$ steps is $(b - a)r^n$. Hence to reach $\\varepsilon$ tolerance in Algorithm 8.3

$$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r} \\tag{8.4}$$

steps are required.

**Example 8.5.** Find the minimum point of the function $f(x) = x^2 - 0.8x + 1$. It can be easily checked that its minimum point is $p = 0.4$. We applied Algorithm 8.3 with the starting interval $[-1, 2]$ and tolerance $\\varepsilon = 0.005$. Formula (8.4) yields that $n \\geq 13.29337586$ steps are needed to reach the required precision. The corresponding numerical results can be seen in Table 8.1. Therefore, the minimum point is located in the interval $[0.3977741449, 0.4013328688]$. The Algorithm 8.3 is formulated so that its output is the midpoint of the last interval, i.e., $0.3995535068$. $\\quad\\square$

**Exercises**

1. Approximate the minimum point of the following functions using the golden section search method on the given interval:

   (a) $f(x) = x^3 - 3x + 1$, $\\quad x \\in [-1, 2]$, (b) $f(x) = |\\cos x|$, $\\quad x \\in [0, 2]$,

   (c) $f(x) = 1 - 10xe^{-x}$, $\\quad x \\in [0, 2]$, (d) $f(x) = \\cos(x^2 - x)$, $\\quad x \\in [1, 3]$.

2. Apply the golden section search method for the function $f(x) = -1/x^2$ on the interval $[-1, 1]$. What do you observe?

---

*Table 8.1: Golden section search method, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991934565 | 0.3999735572 |

3. Prove that if $[a', b'] = [a, x]$ is selected in golden section search then $x' = y$ is satisfied if $r$ is a solution of equation (8.3).

4. Prove Theorem 8.4.

5. Check formula (8.4).
`,We=`## 8.2. Aranymetszés szerinti keresés módszere

Legyen $f\\colon [a, b] \\to \\mathbb{R}$ folytonos, és feltesszük, hogy $f$ *unimodális*, azaz $f$-nek egyértelmű lokális minimuma van $[a, b]$-ben. Ez teljesül pl. ha a függvény konvex az $[a, b]$ intervallumon, de a konvexitás nem szükséges ahhoz, hogy egy függvény unimodális legyen (lásd például a 8.1. ábrán szereplő második és harmadik függvényt). Jelölje $p$ az $f$ függvény minimumhelyét.

Az *aranymetszés szerinti keresés módszernél*, az intervallumfelezés módszeréhez hasonlóan, egyre szűkebb és szűkebb intervallumokra határoljuk be a függvény minimumhelyét: Legyen $a < y < x < b$. Ha $f(x) > f(y)$, akkor $p \\in [a, x]$, ellenkező esetben $p \\in [y, b]$ teljesül. (Lásd a 8.2. ábrát!) Ezután az $[a, x]$ illetve $[y, b]$ intervallummal folytatjuk az eljárást.

Az $x$ és $y$ pontokat úgy választjuk, hogy az $[a, x]$ és $[y, b]$ intervallum hossza azonos legyen: $x - a = b - y = r(b - a)$ valamely $0 < r < 1$-re. Ekkor

$$x = a + r(b - a), \\qquad y = a + (1 - r)(b - a) \\tag{8.2}$$

alakú. Az $x > y$ feltételből kapjuk, hogy $0.5 < r < 1$ kell legyen. Jelölje $[a', b']$ a következő intervallumot. Válasszuk az új osztópontokat, $x'$-t és $y'$-t a (8.2) szabály szerint, és $f(x')$ és $f(y')$ összehasonlításával határozzuk meg a következő intervallumot. Még nem definiáltuk $r$-t. Az aranymetszés szerinti keresés módszere úgy választja meg $r$-t, hogy az új $x'$, $y'$ osztópontok közül az egyik egyezzen meg egy előző osztóponttal, azért hogy minden lépésben csak egy új függvényértéket kelljen kiértékelni.

A 8.3. ábrán azt az esetet tüntettük fel, ahol a jobb oldali, $[y, b]$ intervallumba esik a minimumhely. Ekkor azt követeljük meg az osztópontok választásától, hogy $y' = x$ legyen. Ekkor

teljesülnek a következő összefüggések:

$$\\begin{aligned}
a + r(b - a) &= y' \\\\
&= a' + (1 - r)(b' - a') \\\\
&= y + (1 - r)(b - y) \\\\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\\end{aligned}$$

és így

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

amiből

$$r^2 + r - 1 = 0 \\tag{8.3}$$

következik. Ennek pozitív megoldása $r = (\\sqrt{5} - 1)/2 \\approx 0.61834$. Ez az aranymetszés arányossági tényezője: $r$ teljesíti az

$$\\frac{r}{1 - r} = \\frac{1}{r}$$

egyenlet.

Abban az esetben, amikor az $[a, x]$ intervallumban van a minimumhely, akkor úgy választjuk $x', y'$-t, hogy $x' = y$ legyen. Megmutatható (3. feladat), hogy ez a követelmény is a (8.3) egyenlethez vezet.

---

**8.3. algoritmus. Aranymetszés szerinti keresés módszere**

\`\`\`
INPUT:    f(x),
          [a, b],
          ε - tolerancia
OUTPUT:   p - a minimumhely közelítése

r ← (√5 − 1)/2
x ← a + r(b − a)
y ← a + (1 − r)(b − a)
fx ← f(x)
fy ← f(y)
while (b − a) > ε do
    if fx > fy do
        b ← x
        x ← y
        fx ← fy
        y ← a + (1 − r)(b − a)
        fy ← f(y)
    else do
        a ← y
        y ← x
        fy ← fx
        x ← a + r(b − a)
        fx ← f(x)
    end do
end do
output((a + b)/2)
\`\`\`

---

Könnyen igazolható a következő tétel:

**8.4. tétel.** *Legyen $f \\in C(a, b)$ unimodális függvény. Ekkor az aranymetszés szerinti keresés módszere konvergál az $f$ függvény minimumhelyéhez.*

Könnyű ellenőrizni, hogy az aranymetszés szerinti keresés módszere $n$ lépése után az intervallum hossza $(b - a)r^n$ lesz. Így a 8.3. algoritmus az $\\varepsilon$ tolerancia értéket

$$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r} \\tag{8.4}$$

lépésben éri el.

**8.5. példa.** Keressük meg az $f(x) = x^2 - 0.8x + 1$ függvény minimumhelyét! Könnyű kiszámolni, hogy a függvény a minimumát a $p = 0.4$ pontban veszi fel. A 8.3. algoritmust alkalmaztuk az adott függvényre a $[-1, 2]$ kezdeti intervallumot és az $\\varepsilon = 0.005$ tolerancia értéket használva, amelynek eredménye a 8.1. táblázatban látható. A (8.4) formula szerint $n \\geq 13.29337586$ lépés kell az előírt tolerancia eléréséhez. A minimumhely az utolsó lépésben kapott $[0.3977741449, 0.4013328688]$ intervallumban helyezkedik el, a 8.3. algoritmus az intervallum felezőpontját, $0.3995535068$-t adja meg, mint közelítő értéket. $\\quad\\square$

---

*8.1. táblázat. Aranymetszés szerinti keresés módszere, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991934565 | 0.3999735572 |

**Feladatok**

1. Az aranymetszés szerinti keresés módszerét alkalmazva keresse meg az alábbi függvények minimumhelyét az adott intervallumon:

   (a) $f(x) = x^3 - 3x + 1$, $\\quad x \\in [-1, 2]$, (b) $f(x) = |\\cos x|$, $\\quad x \\in [0, 2]$,

   (c) $f(x) = 1 - 10xe^{-x}$, $\\quad x \\in [0, 2]$, (d) $f(x) = \\cos(x^2 - x)$, $\\quad x \\in [1, 3]$.

2. Alkalmazza az aranymetszés szerinti keresés módszerét az $f(x) = -1/x^2$ függvényre a $[-1, 1]$ intervallumon! Mit tapasztal?

3. Igazolja, hogy ha $[a', b'] = [a, x]$ választáskor az $x' = y$ egyenlet akkor teljesül, ha $r$ megoldása a (8.3) egyenletnek!

4. Bizonyítsa be a 8.4. tételt!

5. Ellenőrizze a (8.4) formulát!
`,Be=`## 8.3. Simplex Method

An $n$-dimensional *simplex* is a convex hull of $n + 1$ number of $n$-dimensional vectors, i.e., the closed set

$$\\{\\alpha_0 \\mathbf{x}^{(0)} + \\cdots + \\alpha_n \\mathbf{x}^{(n)} : 0 \\leq \\alpha_i \\leq 1, \\quad \\alpha_0 + \\cdots + \\alpha_n \\leq 1\\},$$

where the vectors $\\mathbf{x}_1 - \\mathbf{x}_0, \\mathbf{x}_2 - \\mathbf{x}_0, \\ldots, \\mathbf{x}_n - \\mathbf{x}_0$ are linearly independent. The vectors $\\mathbf{x}^{(0)}, \\ldots, \\mathbf{x}^{(n)}$ are called the vertices of the simplex. The 1-dimensional simplexes are the line segments, the 2-dimensional simplexes are the triangles, and the 3-dimensional simplexes are the tetrahedrons.

The *simplex method* is used to approximate the minimum point of a function of $n$ variables. Consider a starting $n$-dimensional simplex. First we find the "worst" vertex, i.e., the vertex where the function takes the largest function value. Let this point be the vector $\\mathbf{x}^{(j)}$. Then we reflect the simplex over the center of the best $n$ vertices, i.e., to the point

$$\\mathbf{x}_c := \\frac{1}{n} \\sum_{\\substack{i=0 \\\\ i \\neq j}}^{n} \\mathbf{x}^{(i)}.$$

The reflected point is given by the formula

$$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}.$$

If $f(\\mathbf{x}_r)$ is not smaller than the largest function value of the previous step, i.e., $f(\\mathbf{x}^{(j)})$, then we discard the reflection, and instead of it, we shrink the simplex to half of its size from its "best" vertex: let $\\mathbf{x}^{(k)}$ be the best vertex, i.e., the vertex where the function takes the smallest function value. Then we recompute all the other vertices by the formula

$$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)}), \\quad i = 0, 1, \\ldots, k - 1, k + 1, \\ldots, n.$$

We repeat the previous steps for the resulting (reflected or shrinked) simplex.

We can define several different stopping criteria to this method, or we can use combinations of these methods. For example, we can stop the method when the simplex becomes smaller than a predefined tolerance size. The size of the simplex can be defined, e.g., as the length of its longest edge, i.e., by the number $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\ldots, n\\}$. Another option is that we apply the stopping criterion $|f_{k+1} - f_k| < \\varepsilon$, where $f_k$ denotes the function value at the center of the $k$th simplex. A third criterion can be the following: Let $\\bar{f}$ be the average of the function values at the vertices, and $\\sigma$ be its standard deviation, i.e.,

$$\\bar{f} := \\frac{1}{n+1} \\sum_{i=0}^{n} f(\\mathbf{x}^{(i)}), \\qquad \\sigma := \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}.$$

We interrupt the iteration when $\\sigma$ becomes smaller than a tolerance. The center of the simplex can be used as an approximation of the minimum point. Finally, we can apply conditions (i) or (ii) of Section 4.4 for the sequence of the center points to set up a stopping criterion.

**Example 8.6.** Find the minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. It is easy to see that the (global) minimum point of the function is $(1, 0.5)$, and the minimal function value is 0. We use the simplex method to approximate the minimum point. We use the starting simplex corresponding to the vertices $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The numerical values of the first 25 steps of the method can be seen in Table 8.2. The center of the 25th simplex is $(0.9063, 0.3542)$, which is a good approximation of the exact minimum point. The corresponding function value is 0.0303 which is close to the true minimum 0. In Figure 8.4 the contour lines (level curves) of the function and the sequence of the simplexes (triangles) can be seen. The blue dot represents the exact minimum point. $\\quad\\square$

A variant of the simplex method is the *Nelder–Mead method*. Here we reflect, expand or contract the simplex in the following way. Suppose that in each steps the vertices are indexed so that $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\cdots \\leq f(\\mathbf{x}^{(n)})$. Then $\\mathbf{x}^{(n)}$ is the "worst" vertex, so we reflect it over the center of the remaining points, i.e., over the point

$$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}.$$

The reflected point is $\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(n)}$. We evaluate the function value $f(\\mathbf{x}_r)$. We distinguish three cases: (i) $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$, (ii) $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, so $\\mathbf{x}_r$ would be the new best vertex, and (iii) $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, i.e., $\\mathbf{x}_r$ would be the new worst vertex.

---

*Table 8.2: Simplex method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{x}^{(k,1)}$ | $\\mathbf{x}^{(k,2)}$ | $\\mathbf{x}^{(k,3)}$ | $f(\\mathbf{x}^{(k,1)})$ | $f(\\mathbf{x}^{(k,2)})$ | $f(\\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.563 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.563 | 34.000 | 24.563 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.563 | 26.563 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.563 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.563 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.563 | 12.191 |
| 8 | (−1.250, 1.500) | (−1.750, 1.500) | (−1.500, 1.000) | 12.191 | 15.129 | 12.563 |
| 9 | (−1.250, 1.500) | (−1.500, 1.000) | (−1.000, 1.000) | 12.191 | 12.563 | 9.000 |
| 10 | (−1.000, 1.000) | (−1.250, 1.500) | (−0.750, 1.500) | 9.000 | 12.191 | 12.066 |
| 11 | (−1.000, 1.000) | (−0.750, 1.500) | (−0.500, 1.000) | 9.000 | 12.066 | 7.563 |
| 12 | (−0.500, 1.000) | (−1.000, 1.000) | (−0.750, 0.500) | 7.563 | 9.000 | 6.316 |
| 13 | (−0.750, 0.500) | (−0.500, 1.000) | (−0.250, 0.500) | 6.316 | 7.563 | 4.004 |
| 14 | (−0.250, 0.500) | (−0.750, 0.500) | (−0.500, 0.000) | 4.004 | 6.316 | 4.563 |
| 15 | (−0.250, 0.500) | (−0.500, 0.000) | ( 0.000, 0.000) | 4.004 | 4.563 | 2.000 |
| 16 | ( 0.000, 0.000) | (−0.250, 0.500) | ( 0.250, 0.500) | 2.000 | 4.004 | 2.004 |
| 17 | ( 0.000, 0.000) | ( 0.250, 0.500) | ( 0.500, 0.000) | 2.000 | 2.004 | 0.563 |
| 18 | ( 0.500, 0.000) | ( 0.250, 0.000) | ( 0.375, 0.250) | 0.563 | 1.129 | 0.910 |
| 19 | ( 0.500, 0.000) | ( 0.375, 0.250) | ( 0.625, 0.250) | 0.563 | 0.910 | 0.293 |
| 20 | ( 0.625, 0.250) | ( 0.500, 0.000) | ( 0.750, 0.000) | 0.293 | 0.563 | 0.441 |
| 21 | ( 0.625, 0.250) | ( 0.750, 0.000) | ( 0.875, 0.250) | 0.293 | 0.441 | 0.102 |
| 22 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.125) | 0.102 | 0.129 | 0.239 |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.813, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.313) | 0.024 | 0.031 | 0.056 |

In case (i) we replace $\\mathbf{x}^{(n)}$ by $\\mathbf{x}_r$ (i.e., we accept the reflection), and continue the iteration.

In case (ii) we expand the simplex in the direction of $\\mathbf{x}_r$ hoping that we get an even better point. Let

$$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c),$$

where $\\alpha > 1$ is a fixed constant (a parameter of the method). If $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$ holds, then the expansion is considered to be successful, and we replace $\\mathbf{x}^{(n)}$ by $\\mathbf{x}_e$. Otherwise we replace $\\mathbf{x}^{(n)}$ by $\\mathbf{x}_r$, i.e., the reflection is performed but we do not expand the simplex.

In case (iii) we think that the reflection is too far from $\\mathbf{x}^{(n)}$, so we try to contract the simplex. Let

$$\\mathbf{x}_z := \\begin{cases} \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c), & \\text{if } f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r), \\\\ \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c), & \\text{if } f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r), \\end{cases}$$

where $0 < \\beta < 1$ is another parameter. If $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$, then $\\mathbf{x}^{(n)}$ is replaced by $\\mathbf{x}_z$. Otherwise we shrink the simplex to its half size from its best point:

$$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)}), \\quad i = 1, \\ldots, n.$$

**Example 8.7.** We apply the Nelder–Mead method with parameters $\\alpha = 1.4$ and $\\beta = 0.7$ for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ considered in Example 8.6. We start from the same initial simplex $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The first 17 terms of the resulting sequence of vertices can be seen in Table 8.3 and in Figure 8.5. The center of the 17th triangle is $(1.0071, 0.5929)$, and the corresponding function value is 0.0295. We can observe that for this example the Nelder–Mead method converges faster to the minimum point than the simplex method. $\\quad\\square$

---

*Table 8.3: Nelder–Mead method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, $\\alpha = 1.4$, $\\beta = 0.7$*

| $k$ | $\\mathbf{x}^{(k,1)}$ | $\\mathbf{x}^{(k,2)}$ | $\\mathbf{x}^{(k,3)}$ | $f(\\mathbf{x}^{(k,1)})$ | $f(\\mathbf{x}^{(k,2)})$ | $f(\\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 2.600) | 34.000 | 57.000 | 21.203 |
| 2 | (−1.500, 2.600) | (−2.000, 4.000) | (−2.500, 2.600) | 21.203 | 34.000 | 25.603 |
| 3 | (−1.500, 2.600) | (−2.500, 2.600) | (−2.000, 1.200) | 21.203 | 25.603 | 20.560 |
| 4 | (−2.000, 1.200) | (−1.500, 2.600) | (−0.700, 0.920) | 20.560 | 21.203 | 7.602 |
| 5 | (−0.700, 0.920) | (−2.000, 1.200) | (−1.200, −0.480) | 7.602 | 20.560 | 15.440 |
| 6 | (−0.700, 0.920) | (−1.200, −0.480) | ( 0.520, −1.152) | 7.602 | 15.440 | 7.088 |
| 7 | ( 0.520, −1.152) | (−0.700, 0.920) | ( 1.464, 0.394) | 7.088 | 7.602 | 3.891 |
| 8 | ( 1.464, 0.394) | ( 0.520, −1.152) | (−0.192, 0.530) | 2.270 | 7.088 | 3.891 |
| 9 | ( 1.464, 0.394) | (−0.192, 0.530) | ( 0.555, −0.668) | 2.270 | 3.891 | 3.097 |
| 10 | ( 1.464, 0.394) | ( 0.555, −0.668) | ( 0.168, 0.330) | 2.270 | 3.097 | 1.783 |
| 11 | ( 0.168, 0.330) | ( 1.464, 0.394) | ( 0.999, 1.083) | 1.783 | 2.270 | 1.362 |
| 12 | ( 0.999, 1.083) | ( 0.168, 0.330) | ( 1.200, 0.487) | 1.362 | 1.783 | 0.296 |
| 13 | ( 1.200, 0.487) | ( 0.999, 1.083) | ( 0.448, 0.467) | 0.296 | 1.362 | 1.147 |
| 14 | ( 1.200, 0.487) | ( 0.448, 0.467) | ( 0.648, −0.129) | 0.296 | 1.147 | 0.707 |
| 15 | ( 1.200, 0.487) | ( 0.648, −0.129) | ( 0.591, 0.380) | 0.296 | 0.707 | 0.505 |
| 16 | ( 1.200, 0.487) | ( 0.591, 0.380) | ( 1.068, 0.828) | 0.296 | 0.505 | 0.274 |
| 17 | ( 1.068, 0.828) | ( 1.200, 0.487) | ( 0.754, 0.464) | 0.274 | 0.296 | 0.251 |

**Exercises**

1. Find the minimum point of the functions

   (a) $f(x, y) = x^2 + 5y^2$, (b) $f(x, y) = x^2 + (x + y - 2)^2$,

   (c) $f(x, y) = 3x^2 + e^{(x - y)^2}$, (d) $f(x, y) = x^2 + \\cos^2(x - y)$

   with the Nelder–Mead method. Use the method with different parameter values $\\alpha$ and $\\beta$ (including $\\alpha = 1 = \\beta$, i.e., the simplex method).

2. Apply the Nelder–Mead method with some parameter values $\\alpha > 1$ and $0 < \\beta < 1$ for the function $f(x) = x^2 - y^2$ using the initial simplex vertices $[0, 1]$, $[0, -1]$, $[1, 0]$. What do you observe? What do you observe if you use the simplex method for the same problem?

3. Formulate the simplex method for functions of one variable, and apply it for the problems given in Exercise 1 of Section 8.2.

4. Consider the following method for minimization of real functions of two variables: let $f$ be a function of two variables, $(p_1^{(0)}, p_2^{(0)})$ be a given initial point. Minimize the function of one variable $t \\mapsto f(p_1^{(0)} + t, p_2^{(0)})$ (for example, with the simplex method defined in the previous exercise). Let $t_1$ be the minimum point, and define $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Then minimize the function of single variable $t \\mapsto f(p_1^{(1)}, p_2^{(1)} + t)$. Let $t_2$ be its minimum point, and then we repeat the method above starting from the point $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$. So repeatedly, minimizing the function along with $x$- and $y$-axes we get the next element of the sequence. Apply this method for the functions defined in Exercise 1. Compare the speed of the convergence with that of the Nelder–Mead method.
`,De=`## 8.3. Szimplex módszer

Egy $n$-dimenziós *szimplexen* olyan $n + 1$ darab $n$-dimenziós vektor konvex burkát, azaz az

$$\\{\\alpha_0 \\mathbf{x}^{(0)} + \\cdots + \\alpha_n \\mathbf{x}^{(n)} : 0 \\leq \\alpha_i \\leq 1, \\quad \\alpha_0 + \\cdots + \\alpha_n \\leq 1\\}$$

halmazt értjük, ahol az $\\mathbf{x}_1 - \\mathbf{x}_0, \\mathbf{x}_2 - \\mathbf{x}_0, \\ldots, \\mathbf{x}_n - \\mathbf{x}_0$ vektorok lineárisan függetlenek. Ekkor az $\\mathbf{x}^{(0)}, \\ldots, \\mathbf{x}^{(n)}$ vektorokat a szimplex csúcspontjainak hívjuk. Egydimenziós szimplexek a szakaszok, kétdimenziós szimplexek a háromszögek, háromdimenziós szimplexek pedig a tetraéderek.

A *szimplex módszert* $n$-változós függvények minimumhely keresésére használjuk. Vegyünk fel kiindulásként egy $n$-dimenziós szimplexet. Keressük meg, hogy melyik a „legrosszabb" csúcspont, azaz melyik csúcspontban veszi fel az $f$ függvény a legnagyobb értéket. Legyen ez például az $\\mathbf{x}^{(j)}$ pont. Ekkor a szimplex legrosszabb pontját tükrözzük az $\\mathbf{x}^{(j)}$ ponttal szemben fekvő oldal középpontjára, azaz a többi csúcspont

$$\\mathbf{x}_c := \\frac{1}{n} \\sum_{\\substack{i=0 \\\\ i \\neq j}}^{n} \\mathbf{x}^{(i)}$$

súlypontjára. A tükrözött pont koordinátáit az

$$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$$

képlettel számíthatjuk ki. Ha $f(\\mathbf{x}_r)$ nem kisebb, mint az előző lépésbeli legnagyobb függvényérték, $f(\\mathbf{x}^{(j)})$, akkor a tükrözést nem fogadjuk el, hanem ahelyett a legjobb csúcspontból fele akkorára zsugorítjuk a szimplexet: legyen $\\mathbf{x}^{(k)}$ a legjobb csúcspontja a szimplexnek, azaz ebben a legkisebb a függvényérték. Ekkor a többi csúcspontot az

$$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)}), \\quad i = 0, 1, \\ldots, k - 1, k + 1, \\ldots, n$$

képlettel számoljuk újra. Ezután a kapott (tükrözött vagy zsugorított) szimplexszel megismételjük az eljárást.

Az előbbi iterációs módszerhez többféle megállási feltételt, illetve feltétel kombinációt adhatunk meg. Például megkövetelhetjük, hogy az eljárás akkor érjen véget, ha a szimplex egy előre megadott méretnél kisebb lesz. A szimplex méretét definiálhatjuk például a leghosszabb éle hosszaként, azaz a $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\ldots, n\\}$ képlettel. Egy másik lehetőség lehet az, hogy a szimplexek súlypontjaiban felvett $f_k$ függvényérték sorozatára alkalmazzuk az $|f_{k+1} - f_k| < \\varepsilon$ feltételt. Egy harmadik megállási feltétel lehet a következő: Legyen $\\bar{f}$ a csúcspontokban felvett függvényértékek átlaga, $\\sigma$ pedig a szórása, azaz

$$\\bar{f} = \\frac{1}{n+1} \\sum_{i=0}^{n} f(\\mathbf{x}^{(i)}), \\qquad \\sigma = \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}.$$

Ekkor addig folytatjuk az iterációt, amíg $\\sigma$ kisebb nem lesz mint egy előre megadott tolerancia érték. A függvény minimumhelyét az algoritmus utolsó lépésében kapott szimplex súlypontjával szokás közelíteni.

**8.6. példa.** Keressük meg az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény minimumhelyét! Könnyen látható, hogy a függvénynek az $(1, 0.5)$ pontban van (globális) minimuma. A szimplex módszert alkalmaztuk a feladat megoldására a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ kezdeti háromszögből kiindulva. Az első 25 lépésben kapott háromszögeket és a csúcspontokhoz tartozó függvényértékeket a 8.2. táblázatban soroltuk fel. A 8.4. ábrán láthatók $f$ szintvonalai és az egyes lépésekben kapott háromszögek. A 25. háromszög középpontja, $(0.9063, 0.3542)$, jó közelítése a pontos minimumhelynek. Az ebben a pontban felvett függvényérték 0.0303, ami közel van a pontos minimum értékhez, 0-hoz. $\\quad\\square$

---

*8.2. táblázat. Szimplex módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{x}^{(k,1)}$ | $\\mathbf{x}^{(k,2)}$ | $\\mathbf{x}^{(k,3)}$ | $f(\\mathbf{x}^{(k,1)})$ | $f(\\mathbf{x}^{(k,2)})$ | $f(\\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.563 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.563 | 34.000 | 24.563 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.563 | 26.563 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.563 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.563 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.563 | 12.191 |
| 8 | (−1.250, 1.500) | (−1.750, 1.500) | (−1.500, 1.000) | 12.191 | 15.129 | 12.563 |
| 9 | (−1.250, 1.500) | (−1.500, 1.000) | (−1.000, 1.000) | 12.191 | 12.563 | 9.000 |
| 10 | (−1.000, 1.000) | (−1.250, 1.500) | (−0.750, 1.500) | 9.000 | 12.191 | 12.066 |
| 11 | (−1.000, 1.000) | (−0.750, 1.500) | (−0.500, 1.000) | 9.000 | 12.066 | 7.563 |
| 12 | (−0.500, 1.000) | (−1.000, 1.000) | (−0.750, 0.500) | 7.563 | 9.000 | 6.316 |
| 13 | (−0.750, 0.500) | (−0.500, 1.000) | (−0.250, 0.500) | 6.316 | 7.563 | 4.004 |
| 14 | (−0.250, 0.500) | (−0.750, 0.500) | (−0.500, 0.000) | 4.004 | 6.316 | 4.563 |
| 15 | (−0.250, 0.500) | (−0.500, 0.000) | ( 0.000, 0.000) | 4.004 | 4.563 | 2.000 |
| 16 | ( 0.000, 0.000) | (−0.250, 0.500) | ( 0.250, 0.500) | 2.000 | 4.004 | 2.004 |
| 17 | ( 0.000, 0.000) | ( 0.250, 0.500) | ( 0.500, 0.000) | 2.000 | 2.004 | 0.563 |
| 18 | ( 0.500, 0.000) | ( 0.250, 0.000) | ( 0.375, 0.250) | 0.563 | 1.129 | 0.910 |
| 19 | ( 0.500, 0.000) | ( 0.375, 0.250) | ( 0.625, 0.250) | 0.563 | 0.910 | 0.293 |
| 20 | ( 0.625, 0.250) | ( 0.500, 0.000) | ( 0.750, 0.000) | 0.293 | 0.563 | 0.441 |
| 21 | ( 0.625, 0.250) | ( 0.750, 0.000) | ( 0.875, 0.250) | 0.293 | 0.441 | 0.102 |
| 22 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.125) | 0.102 | 0.129 | 0.239 |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.813, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.313) | 0.024 | 0.031 | 0.056 |

A szimplex módszernek egy módosított változata a *Nelder–Mead-módszer*. Ennél a módszernél a szimplexet tükrözzük, illetve megnyújtjuk vagy zsugorítjuk aszerint, hogy milyen értékeket vesz fel a függvény a csúcspontokban. Feltesszük, hogy minden egyes lépésben a csúcspontokat úgy indexezzük, hogy a függvényértékek növekvő sorrendben legyenek, azaz $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\cdots \\leq f(\\mathbf{x}^{(n)})$. Ekkor $\\mathbf{x}^{(n)}$ a legrosszabb csúcspont, ezt tükrözzük a szemben fekvő oldal

$$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$$

súlypontjára. Legyen a tükrözött pont $\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(n)}$. Vizsgáljuk meg, hogy milyen értéket vesz fel az $f$ függvény $\\mathbf{x}_r$-ben. Három esetet különböztetünk meg: 1. $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$, 2. $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, azaz $\\mathbf{x}_r$ lenne az új legjobb pont, és 3. $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, azaz $\\mathbf{x}_r$ lenne az új legrosszabb pont.

Az 1. esetben $\\mathbf{x}^{(n)}$-t $\\mathbf{x}_r$-re kicseréljük (elfogadtuk a tükrözést), és folytatjuk az iterációt.

A 2. esetben először megpróbáljuk az $\\mathbf{x}_r$ irányban megnyújtani egy kicsit a szimplexet, hátha még jobb pontot kapunk. Legyen

$$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c),$$

ahol $\\alpha > 1$ egy rögzített szám (egy paraméter a módszerben). Ha ekkor $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$ teljesül, akkor a megnyújtást sikeresnek ítéljük, és $\\mathbf{x}^{(n)}$-t $\\mathbf{x}_e$-re cseréljük ki. Ellenkező esetben viszont $\\mathbf{x}^{(n)}$-t $\\mathbf{x}_r$-re cseréljük ki, azaz tükrözünk, de nem nyújtjuk meg a szimplexet.

A 3. esetben azt gondoljuk, hogy túl messze tükröztük $\\mathbf{x}^{(n)}$-t, így megpróbáljuk zsugorítani a szimplexet. Legyen

$$\\mathbf{x}_z := \\begin{cases} \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c), & \\text{ha } f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r), \\\\ \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c), & \\text{ha } f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r), \\end{cases}$$

ahol $0 < \\beta < 1$ egy újabb paraméter. Ha $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$, akkor $\\mathbf{x}^{(n)}$-t $\\mathbf{x}_z$-vel cseréljük fel. Ellenkező esetben viszont a szimplexet a legjobb pontjából, $\\mathbf{x}^{(0)}$-ból a felére zsugorítjuk össze:

$$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)}), \\quad i = 1, \\ldots, n.$$

**8.7. példa.** A Nelder–Mead-módszert alkalmaztuk az $\\alpha = 1.4$ és $\\beta = 0.7$ paraméter értékekkel a 8.6. feladatban már vizsgált $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény minimumhelyének keresésére. Most is a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ háromszögből indultunk ki. A kapott sorozat első 17 tagja látható a 8.3. táblázatban, illetve a 8.5. ábrán. A 17. háromszög középpontja $(1.0071, 0.5929)$, a hozzá tartozó függvényérték pedig 0.0295. Látható, hogy ez a módszer sokkal gyorsabban konvergál a minimumhelyhez, mint a szimplex módszer. $\\quad\\square$

---

*8.3. táblázat. Nelder–Mead-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{x}^{(k,1)}$ | $\\mathbf{x}^{(k,2)}$ | $\\mathbf{x}^{(k,3)}$ | $f(\\mathbf{x}^{(k,1)})$ | $f(\\mathbf{x}^{(k,2)})$ | $f(\\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 2.600) | 34.000 | 57.000 | 21.203 |
| 2 | (−1.500, 2.600) | (−2.000, 4.000) | (−2.500, 2.600) | 21.203 | 34.000 | 25.603 |
| 3 | (−1.500, 2.600) | (−2.500, 2.600) | (−2.000, 1.200) | 21.203 | 25.603 | 20.560 |
| 4 | (−2.000, 1.200) | (−1.500, 2.600) | (−0.700, 0.920) | 20.560 | 21.203 | 7.602 |
| 5 | (−0.700, 0.920) | (−2.000, 1.200) | (−1.200, −0.480) | 7.602 | 20.560 | 15.440 |
| 6 | (−0.700, 0.920) | (−1.200, −0.480) | ( 0.520, −1.152) | 7.602 | 15.440 | 7.088 |
| 7 | ( 0.520, −1.152) | (−0.700, 0.920) | ( 1.464, 0.394) | 7.088 | 7.602 | 2.270 |
| 8 | ( 1.464, 0.394) | ( 0.520, −1.152) | (−0.192, 0.530) | 2.270 | 7.088 | 3.891 |
| 9 | ( 1.464, 0.394) | (−0.192, 0.530) | ( 0.555, −0.668) | 2.270 | 3.891 | 3.097 |
| 10 | ( 1.464, 0.394) | ( 0.555, −0.668) | ( 0.168, 0.330) | 2.270 | 3.097 | 1.783 |
| 11 | ( 0.168, 0.330) | ( 1.464, 0.394) | ( 0.999, 1.083) | 1.783 | 2.270 | 1.362 |
| 12 | ( 0.999, 1.083) | ( 0.168, 0.330) | ( 1.200, 0.487) | 1.362 | 1.783 | 0.296 |
| 13 | ( 1.200, 0.487) | ( 0.999, 1.083) | ( 0.448, 0.467) | 0.296 | 1.362 | 1.147 |
| 14 | ( 1.200, 0.487) | ( 0.448, 0.467) | ( 0.648, −0.129) | 0.296 | 1.147 | 0.707 |
| 15 | ( 1.200, 0.487) | ( 0.648, −0.129) | ( 0.591, 0.380) | 0.296 | 0.707 | 0.505 |
| 16 | ( 1.200, 0.487) | ( 0.591, 0.380) | ( 1.068, 0.828) | 0.296 | 0.505 | 0.274 |
| 17 | ( 1.068, 0.828) | ( 1.200, 0.487) | ( 0.754, 0.464) | 0.274 | 0.296 | 0.251 |

**Feladatok**

1. Keresse meg a következő függvények minimumhelyét Nelder–Mead-módszerrel!

   (a) $f(x, y) = x^2 + 5y^2$, (b) $f(x, y) = x^2 + (x + y - 2)^2$,

   (c) $f(x, y) = 3x^2 + e^{(x - y)^2}$, (d) $f(x, y) = x^2 + \\cos^2(x - y)$

   Több különböző $\\alpha$, $\\beta$ paraméter értékekkel próbálja ki a módszert!

2. Alkalmazza a Nelder–Mead-módszert tetszőleges $\\alpha > 1$ és $0 < \\beta < 1$ paraméter értékeket használva az $f(x) = x^2 - y^2$ függvényre és a $[0, 1]$, $[0, -1]$, $[1, 0]$ kezdeti pontokra! Mit tapasztal? Mit tapasztal, ha ugyanerre a függvényre és pontokra a szimplex módszert alkalmazza?

3. Fogalmazza meg a szimplex módszert egyváltozós függvények minimumhelyének meghatározására, és alkalmazza a 8.2. szakasz 1. feladatában szereplő függvényekre!

4. Tekintsük a következő, deriváltat nem használó módszert kétváltozós függvények minimalizálására: legyen $f$ egy kétváltozós függvény, $(p_1^{(0)}, p_2^{(0)})$ egy adott kezdeti pont. Minimalizáljuk a $t \\mapsto f(p_1^{(0)} + t, p_2^{(0)})$ egyváltozós függvényt (például szimplex módszerrel, lásd az előző példát). Legyen $t_1$ a minimumhely. Ekkor jelölje $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Ezután minimalizáljuk a $t \\mapsto f(p_1^{(1)}, p_2^{(1)} + t)$ egyváltozós függvényt. A kapott $t_2$ minimumhelyhez tartozó $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$ pontból megismételjük az eljárást. Így felváltva az $x$- illetve $y$-tengely irányában egydimenziós minimumkeresési feladatokat megoldva kapjuk a sorozat következő pontját. Alkalmazza ezt a módszert az 1. feladatban felsorolt függvényekre! Hasonlítsa össze a kapott sorozat konvergenciájának gyorsaságát a Nelder–Mead-módszer gyorsaságával!
`,Pe=`## 8.4. Gradient Method

Consider a function $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$. It is known from calculus that at a point $\\mathbf{p}$ the most rapid decrease of the function $f$ is in the direction of the vector $-f'(\\mathbf{p})$:

**Theorem 8.8.** *Let $f \\in C^1$. Then the directional derivatives*

$$\\lim_{t \\to 0+} \\frac{f(\\mathbf{p} + t\\mathbf{u}) - f(\\mathbf{p})}{t}, \\qquad \\|\\mathbf{u}\\|_2 = 1$$

*has a minimum for the direction $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$.*

A direction $\\mathbf{u}$ is called a *descent* of a function $f$ at the point $\\mathbf{p}$ if there exists $\\delta > 0$ such that $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ for all $0 < t < \\delta$, i.e., the function decreases at the point $\\mathbf{p}$ in the direction of $\\mathbf{u}$. Theorem 8.8 can be interpreted so that the steepest descent of $f$ at the point $\\mathbf{p}$ is in the direction $-f'(\\mathbf{p})$.

The *gradient method* is based on the previous observation that starting from a point $\\mathbf{p}^{(0)}$ we should step forward in the direction of the negative gradient vector. This method is also called the *steepest descent method*. We define it as follows:

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)}), \\tag{8.5}$$

where the scaling parameter $\\alpha_k$ determines the step size. The gradient method (8.5) has several variants. The simplest case is when the step size is constant. Let $h > 0$ be fixed, and use the factor $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$. Then the distance between the consecutive points is constant $h$. Then, in general, the method cannot approximate the exact minimum point better than $h$.

Another variant is that we select $\\alpha_k$ so that

$$\\phi_k(\\alpha_k) = \\min_{t \\in \\mathbb{R}} \\phi_k(t)$$

be satisfied, where

$$\\phi_k(t) := f\\Big(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)})\\Big). \\tag{8.6}$$

Then in each step we have to minimize a function of a single variable along with the direction of the negative gradient. This version of the gradient method is called *optimal gradient method*.

Using the optimal gradient method we step forward from a point in the direction of the negative gradient into a point where the line is tangent to the contour line (level curve) of the function $f$. This implies that the consecutive directions are perpendicular to each other. (See Exercise 3.)

It can be shown that the optimal gradient method is locally linearly convergent. But the asymptotic error constant can be close to 1, so the convergence can be slow.

**Example 8.9.** We consider again the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ examined in Examples 8.6 and 8.7 and we use the gradient method to find its minimum point. First we use the gradient method with the scaling factor $\\alpha_k = 0.3/\\|f'(\\mathbf{p}^{(k)})\\|_2$, with the constant step size 0.3. The first 21 terms of the sequence can be seen in Figure 8.6 starting from the initial point $(-1, 4)$ (red circles) and from the initial point $(0.5, 3.5)$ (green circles). The sequences approximate the minimum point $(1, 0.5)$ (blue dot) slowly, and oscillates around it. Note that, as it is known in calculus, the gradient vector is always perpendicular to the contour line through that point, so the gradient method steps in a direction perpendicular to the contour line. $\\quad\\square$

Next we apply the optimal gradient method from the initial points $(-1, 4)$ (red circles) and $(0.5, 3.5)$ (green circles), respectively. We plotted the first 3 and 12 terms of the corresponding sequences in Figure 8.7. The first sequence gets very close to the minimizer (blue dot) in two steps, and then approaches further to the minimum point. The second sequence enters quickly into the "valley" of the contour lines containing the minimum point, but there it zigzags slowly towards the minimum point. $\\quad\\square$

If we cannot or do not want to compute the gradient vector exactly, then we can use the following variant of the method (8.5):

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}, \\tag{8.7}$$

where the $i$th component of the vector $\\mathbf{v}^{(k)}$ is defined by

$$v_i^{(k)} = \\frac{1}{h}\\Big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)})\\Big), \\qquad i = 1, \\ldots, n,$$

and here $\\mathbf{e}^{(i)}$ is the $i$th unit vector.

**Exercises**

1. Apply the gradient method for the functions given in Exercise 1 of Section 8.3. Select any initial point, and use the constant step size $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ with some $h > 0$, and also use the optimal gradient method.

2. Repeat the previous problem using the scale $\\alpha_k = h$ with some $h > 0$.

3. Compute the derivative of the function $\\phi_k$ defined by (8.6). Using the value of the derivative at $t = \\alpha_k$ show that the vectors $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)}$ and $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$ are orthogonal.
`,Ce=`## 8.4. Gradiens módszer

Tekintsünk egy $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ függvényt. Analízisből ismert tétel szerint egy $\\mathbf{p}$ pontban az $f$ függvény a $-f'(\\mathbf{p})$ irányban csökken a leggyorsabban:

**8.8. tétel.** *Legyen $f \\in C^1$. Ekkor a*

$$\\lim_{t \\to 0+} \\frac{f(\\mathbf{p} + t\\mathbf{u}) - f(\\mathbf{p})}{t}, \\qquad \\|\\mathbf{u}\\|_2 = 1$$

*iránymenti deriváltak minimuma az $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$ irányban van.*

Egy $\\mathbf{u}$ irányt az $f$ függvény $\\mathbf{p}$ pontbeli *lejtőjének* nevezzük, ha létezik olyan $\\delta > 0$, hogy $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ minden $0 < t < \\delta$-ra, azaz a függvény csökken a $\\mathbf{p}$ pontból az $\\mathbf{u}$ irány mentén indulva. A 8.8. tételt úgy is megfogalmazhatjuk, hogy az $f$ függvénynek a $\\mathbf{p}$ pontban a $-f'(\\mathbf{p})$ irányban legmeredekebb a lejtője.

A *gradiens módszer* szerint egy $\\mathbf{p}^{(0)}$ kezdeti pontból a negatív gradiensvektor irányában kell elmozdulni. Szokás az előbbiek miatt ezt a *legmeredekebb lejtő módszerének* is nevezni. A módszer általános képlete ezért:

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)}), \\tag{8.5}$$

ahol $\\alpha_k$ a lépésközt meghatározó szorzótényező. A (8.5) gradiens módszernek több változata van. A legegyszerűbb esetben a lépésköz állandó. Legyen $h$ rögzített, és használjuk az $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ számot. Ekkor az egyes pontok közötti távolság konstans $h$ lesz. Természetesen ekkor általában nem várható, hogy $h$-nál pontosabban megközelítsük a minimumhelyet.

Egy másik változatban úgy választjuk meg a lépésközt, hogy

$$\\phi_k(\\alpha_k) = \\min_{t \\in \\mathbb{R}} \\phi_k(t)$$

legyen, ahol

$$\\phi_k(t) := f\\Big(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)})\\Big). \\tag{8.6}$$

Ekkor minden egyes lépésben a gradiensvektor által meghatározott egyenes mentén egy egyváltozós függvényt kell minimalizálni. Ez utóbbi módon választott lépésközt használó gradiens módszert *optimális gradiens módszernek* hívjuk.

Az optimális gradiens módszernél a gradiensvektorral párhuzamos egyenes mentén egy olyan pontig lépünk, ahol az egyenes érint egy szintvonalat. Abból a pontból pedig a pontbeli gradiensvektorral párhuzamosan lépünk tovább. Ebből következik, hogy az optimális gradiens módszernél az egymás utáni lépések irányai merőlegesek egymásra. (Lásd 3. feladatot!)

Megmutatható, hogy az optimális gradiens módszer lokálisan lineárisan konvergens. A sorozat aszimptotikus hibakonstansa néha közel van 1-hez, azaz a konvergencia lassú is lehet.

**8.9. példa.** Tekintsük újra a 8.6. és 8.7. példákban vizsgált $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényt. Először az $\\alpha_k = 0.3/\\|f'(\\mathbf{p}^{(k)})\\|_2$ lépésközzel futtatjuk a gradiens módszert, két kezdeti pontból indítva a módszert: a $(-1, 4)$ kezdeti értékből (piros karikák) és a $(0.5, 3.5)$ kezdeti értékből (zöld karikák). A kapott sorozat első 21 tagja a 8.6. ábrán látható. A sorozatok lassan közelítik meg az $(1, 0.5)$ minimumhelyet (kék pont), és annak közelében oszcillálnak. Vegyük észre, hogy ahogy az analízisből ismert, a gradiensvektor merőleges a ponthoz tartozó szintvonalra, így a gradiens módszer sorozata mindig a szintvonalra merőleges irányban mozdul el.

Ezután az optimális gradiens módszert alkalmaztuk a $(-1, 4)$ és a $(0.5, 3.5)$ kezdőpontból indulva. A két sorozat első 3 illetve 12 tagját a 8.7. ábrán láthatjuk. Az első sorozat gyorsan a minimumhely közelébe került. A második is gyorsan a minimumhelyet tartalmazó hosszúkás „völgybe" került, de ezután ott csak lassan, cikcakkban haladt a minimumhely felé. $\\quad\\square$

Ha $f$ gradiensvektorát nem tudjuk vagy nem akarjuk kiszámolni (túl sok műveletet igényel), használhatjuk (8.5) következő változatát:

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}, \\tag{8.7}$$

ahol a $\\mathbf{v}^{(k)}$ vektor $i$-edik komponensét a

$$v_i^{(k)} = \\frac{1}{h}\\Big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)})\\Big), \\qquad i = 1, \\ldots, n$$

képlettel számoljuk ($\\mathbf{e}^{(i)}$ az $i$-edik egységvektor).

**Feladatok**

1. Alkalmazza a gradiens módszert a 8.3. szakasz 1. feladatában felsorolt függvényekre! Válasszon tetszőleges kezdőpontot, és használja az $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ lépésközt valamely $h > 0$-ra, illetve az optimális gradiens módszert!

2. Ismételje meg az előző feladatot az $\\alpha_k = h$ lépésközt használva!

3. Számítsa ki a (8.6) képlettel definiált $\\phi_k$ függvény deriváltját! A derivált $t = \\alpha_k$ pontbeli értékéből vezesse le, hogy a $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)}$ és $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$ vektorok merőlegesek egymásra! Magyarázza meg, hogy a numerikus módszerrel generált 8.7. ábrán a jobb oldali sorozat első és második lépése miért nem merőleges egymásra!
`,Re=`## 8.5. Solving Linear Systems with Gradient Method

Let $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ be a symmetric matrix, $\\mathbf{b} \\in \\mathbb{R}^n$, $c \\in \\mathbb{R}$, and consider the quadratic function

$$g\\colon \\mathbb{R}^n \\to \\mathbb{R}, \\qquad g(\\mathbf{x}) := \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c. \\tag{8.8}$$

Using the notations $\\mathbf{A} = (a_{ij})$, $\\mathbf{x} = (x_1, \\ldots, x_n)^T$, $\\mathbf{b} = (b_1, \\ldots, b_n)^T$ we have the following form of $g$:

$$g(x_1, \\ldots, x_n) = \\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j - \\sum_{i=1}^{n} b_i x_i + c.$$

Compute the partial derivative $\\frac{\\partial g}{\\partial x_i}$. Since $a_{ij} = a_{ji}$, we get

$$\\frac{\\partial g}{\\partial x_i}(x_1, \\ldots, x_n) = \\frac{1}{2} \\sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \\sum_{j=1}^{n} a_{ij} x_j - b_i.$$

Therefore, in a vectorial form we have

$$g'(\\mathbf{x}) = \\left( \\frac{\\partial g}{\\partial x_1}(\\mathbf{x}), \\ldots, \\frac{\\partial g}{\\partial x_n}(\\mathbf{x}) \\right)^T = \\mathbf{A}\\mathbf{x} - \\mathbf{b}. \\tag{8.9}$$

Hence if $\\mathbf{A}$ is invertible, then $g$ has exactly one critical point, which is the solution of the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$. Let $\\bar{\\mathbf{x}}$ be the critical point of $g$, and $\\mathbf{x} = \\bar{\\mathbf{x}} + \\Delta\\mathbf{x}$.

$$\\begin{aligned}
g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) &= \\frac{1}{2}(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})^T \\mathbf{A}(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - \\mathbf{b}^T(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) + c \\\\
&= \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\bar{\\mathbf{x}} + \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}} + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x} \\\\
&\\quad - \\mathbf{b}^T \\bar{\\mathbf{x}} - \\mathbf{b}^T \\Delta\\mathbf{x} + c.
\\end{aligned}$$

So using the relations $\\mathbf{A} = \\mathbf{A}^T$, $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$, $\\mathbf{b}^T \\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{b}$ and $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$, we get

$$\\begin{aligned}
g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) &= \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\bar{\\mathbf{x}} - \\mathbf{b}^T \\bar{\\mathbf{x}} + (\\Delta\\mathbf{x})^T(\\mathbf{A}\\bar{\\mathbf{x}} - \\mathbf{b}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x} + c \\\\
&= g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}.
\\end{aligned}$$

Therefore,

$$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}. \\tag{8.10}$$

If $\\mathbf{A}$ is positive definite, then $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) > 0$ for all vectors $\\Delta\\mathbf{x} \\neq \\mathbf{0}$, hence $\\bar{\\mathbf{x}}$ minimizes the function $g$. Similarly, if $\\mathbf{A}$ is negative definite, then it follows from equation (8.10) that $g$ has a maximum at $\\bar{\\mathbf{x}}$. All positive or negative definite matrices are invertible by Theorem 3.9. Hence we proved the following result.

**Theorem 8.10.** *Let $\\mathbf{A}$ be symmetric. Then the gradient vector of the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$ is $g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$. If $\\mathbf{A}$ is positive (negative) definite, then $g$ has a global minimum (maximum), which is taken at the point $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$.*

The proof of the previous result yields easily:

**Corollary 8.11.** *If a quadratic function has a local minimum (maximum) at a point, then there the function has also global minimum (maximum).*

If $\\mathbf{A}$ is a symmetric positive definite matrix, then Theorem 8.10 yields that the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved that we define the quadratic function $g$ by (8.8), and we minimize it by the optimal gradient method. Therefore, we define the iteration

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)},$$

where

$$\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)}) = \\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}.$$

$\\alpha_k$ is selected so that it be the minimum point of the scalar function $\\phi_k(t) := g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$. The function $\\phi_k$ is a quadratic polynomial, since

$$\\begin{aligned}
\\phi_k(t) &= \\frac{1}{2}\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big) - \\mathbf{b}^T\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big) + c \\\\
&= t^2 \\frac{1}{2}\\big(\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\mathbf{v}^{(k)} - t\\big(\\mathbf{v}^{(k)}\\big)^T \\big(\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}\\big) + \\frac{1}{2}\\big(\\mathbf{p}^{(k)}\\big)^T \\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}^T \\mathbf{p}^{(k)} + c.
\\end{aligned}$$

Therefore, its minimum point $\\alpha_k$ can be given explicitly as

$$\\alpha_k = \\frac{\\big(\\mathbf{v}^{(k)}\\big)^T \\big(\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}\\big)}{\\big(\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\mathbf{v}^{(k)}}.$$

Introducing the residual vector $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$, the method can be summarized in the following way:

$$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)} \\tag{8.11}$$

$$\\alpha_k = \\frac{\\big(\\mathbf{r}^{(k)}\\big)^T \\mathbf{r}^{(k)}}{\\big(\\mathbf{r}^{(k)}\\big)^T \\mathbf{A}\\mathbf{r}^{(k)}} \\tag{8.12}$$

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}. \\tag{8.13}$$

**Example 8.12.** Consider the linear system

$$\\begin{array}{rcrcrcl}
4x_1 &+& 2x_2 &-& x_3 &=& 0 \\\\
2x_1 &+& 5x_2 & & &=& 8 \\\\
-x_1 & & &+& 3x_3 &=& 1.
\\end{array}$$

We applied the optimal gradient method (8.11)-(8.13) with the initial point $\\mathbf{p}^{(0)} = (3, 3, 3)^T$. Note that the method is applicable since the coefficient matrix of the linear system is symmetric and positive definite. The first 13 terms of the sequence $\\mathbf{p}^{(k)}$ are listed in Table 8.4 together with the error of the approximation. Note, the true solution is $(-1, 2, 0)$. $\\quad\\square$

---

*Table 8.4: Solving the linear system with gradient method*

| $k$ | $\\mathbf{p}^{(k)}$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

**Exercises**

1. Show that any quadratic function

   $$g(\\mathbf{x}) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} \\tilde{a}_{ij} x_i x_j + \\sum_{i=1}^{n} \\tilde{b}_i x_i + c$$

   can be written in the form (8.8). How can $g'(\\mathbf{x})$ and $g''(\\mathbf{x})$ be given using a matrix notation?

2. Prove Corollary 8.11.

3. Check the derivation of formulas (8.11)-(8.13).

4. Apply the gradient method for finding the minimum point of the functions:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

5. Solve the following linear systems with gradient method:

   (a)
   $$\\begin{array}{rcrcl}
   4x_1 &-& 3x_2 &=& 4 \\\\
   -3x_1 &+& 3x_2 &=& 3
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcl}
   6x_1 &+& 3x_2 &-& 2x_3 &=& 6 \\\\
   3x_1 &+& 5x_2 &-& x_3 &=& -4 \\\\
   -2x_1 &-& x_2 &+& 3x_3 &=& -2
   \\end{array}$$

6. Let $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$. Show that the optimal gradient method started from the initial point $\\mathbf{p}^{(0)} = (9, 1)^T$ generates the sequence

   $$\\mathbf{p}^{(k)} = \\begin{pmatrix} 9 \\\\ (-1)^k \\end{pmatrix} 0.8^k.$$

   What is the asymptotic error constant of this sequence? Give a function and initial value such that the asymptotic error constant of the sequence generated by the optimal gradient method is a predefined constant $0 < \\alpha < 1$.
`,Le=`## 8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel

Legyen $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ szimmetrikus mátrix, $\\mathbf{b} \\in \\mathbb{R}^n$, $c \\in \\mathbb{R}$, és tekintsük a

$$g\\colon \\mathbb{R}^n \\to \\mathbb{R}, \\qquad g(\\mathbf{x}) := \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c \\tag{8.8}$$

alakú kvadratikus függvényt. Az $\\mathbf{A} = (a_{ij})$, $\\mathbf{x} = (x_1, \\ldots, x_n)^T$, $\\mathbf{b} = (b_1, \\ldots, b_n)^T$ jelöléseket használva felírhatjuk $g$-t a következő alakban:

$$g(x_1, \\ldots, x_n) = \\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j - \\sum_{i=1}^{n} b_i x_i + c.$$

Számítsuk ki a $\\frac{\\partial g}{\\partial x_i}$ parciális deriváltat. A feltevés szerint $a_{ij} = a_{ji}$, ezért

$$\\frac{\\partial g}{\\partial x_i}(x_1, \\ldots, x_n) = \\frac{1}{2} \\sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \\sum_{j=1}^{n} a_{ij} x_j - b_i,$$

azaz vektoriális alakban

$$g'(\\mathbf{x}) = \\left( \\frac{\\partial g}{\\partial x_1}(\\mathbf{x}), \\ldots, \\frac{\\partial g}{\\partial x_n}(\\mathbf{x}) \\right)^T = \\mathbf{A}\\mathbf{x} - \\mathbf{b}. \\tag{8.9}$$

Így ha $\\mathbf{A}$ invertálható, akkor $g$-nek pontosan egy kritikus pontja van, amely az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ egyenlet megoldása. Legyen $\\bar{\\mathbf{x}}$ a $g$ függvény kritikus pontja és $\\mathbf{x} = \\bar{\\mathbf{x}} + \\Delta\\mathbf{x}$.

$$\\begin{aligned}
g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) &= \\frac{1}{2}(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})^T \\mathbf{A}(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - \\mathbf{b}^T(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) + c \\\\
&= \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\bar{\\mathbf{x}} + \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}} + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x} \\\\
&\\quad - \\mathbf{b}^T \\bar{\\mathbf{x}} - \\mathbf{b}^T \\Delta\\mathbf{x} + c.
\\end{aligned}$$

Ebből kapjuk az $\\mathbf{A} = \\mathbf{A}^T$, $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$, $\\mathbf{b}^T \\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{b}$ és az $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ összefüggéseket felhasználva, hogy

$$\\begin{aligned}
g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) &= \\frac{1}{2}\\bar{\\mathbf{x}}^T \\mathbf{A}\\bar{\\mathbf{x}} - \\mathbf{b}^T \\bar{\\mathbf{x}} + (\\Delta\\mathbf{x})^T(\\mathbf{A}\\bar{\\mathbf{x}} - \\mathbf{b}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x} + c \\\\
&= g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}.
\\end{aligned}$$

Ezért

$$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}. \\tag{8.10}$$

Ha $\\mathbf{A}$ pozitív definit mátrix, akkor $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) > 0$ minden $\\Delta\\mathbf{x} \\neq \\mathbf{0}$ vektorra, azaz $\\bar{x}$ minimalizálja a $g$ függvényt. Ehhez hasonlóan, ha $\\mathbf{A}$ negatív definit, akkor a (8.10) egyenletből következik, hogy $g$-nek maximuma van $\\bar{x}$-ben. Pozitív ill. negatív definit mátrixok a 3.9. tétel szerint invertálhatók. Ezzel beláttuk tehát a következő tételt:

**8.10. tétel.** *Legyen $\\mathbf{A}$ szimmetrikus. Ekkor a $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$ kvadratikus függvény gradiensvektora $g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$. Ha $\\mathbf{A}$ pozitív (negatív) definit, akkor $g$-nek létezik globális minimuma (maximuma), amelyet a $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$ pontban vesz fel.*

Az előző tétel bizonyításából könnyen belátható:

**8.11. következmény.** *Ha egy kvadratikus függvénynek egy pontban lokális minimuma (maximuma) van, akkor ott a függvénynek globális minimuma (maximuma) is van.*

Ha $\\mathbf{A}$ egy szimmetrikus pozitív definit mátrix, akkor a 8.10. tétel szerint az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ lineáris egyenletrendszert megoldhatjuk úgy, hogy definiáljuk a $g$ kvadratikus függvényt a (8.8) képlettel, és optimális gradiens módszerrel minimalizáljuk azt. Definiáljuk tehát a

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$$

sorozatot, ahol

$$\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)}) = \\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}.$$

$\\alpha_k$-t az optimális gradiens módszer definíciójának megfelelően a $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ egyváltozós függvény minimumhelyének választjuk. Az $\\phi_k$ függvény egy másodfokú polinom, hiszen

$$\\begin{aligned}
\\phi_k(t) &= \\frac{1}{2}\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big) - \\mathbf{b}^T\\big(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)}\\big) + c \\\\
&= t^2 \\frac{1}{2}\\big(\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\mathbf{v}^{(k)} - t\\big(\\mathbf{v}^{(k)}\\big)^T \\big(\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}\\big) + \\frac{1}{2}\\big(\\mathbf{p}^{(k)}\\big)^T \\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}^T \\mathbf{p}^{(k)} + c.
\\end{aligned}$$

Ezért $\\phi_k$ minimumhelyét explicit módon meg tudjuk adni:

$$\\alpha_k = \\frac{\\big(\\mathbf{v}^{(k)}\\big)^T \\big(\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b}\\big)}{\\big(\\mathbf{v}^{(k)}\\big)^T \\mathbf{A}\\mathbf{v}^{(k)}}.$$

Ha bevezetjük az $\\mathbf{r}^{(k)} := \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$ reziduális vektort, akkor az előbbi képleteket összefoglalhatjuk a következő alakban:

$$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)} \\tag{8.11}$$

$$\\alpha_k = \\frac{\\big(\\mathbf{r}^{(k)}\\big)^T \\mathbf{r}^{(k)}}{\\big(\\mathbf{r}^{(k)}\\big)^T \\mathbf{A}\\mathbf{r}^{(k)}} \\tag{8.12}$$

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}. \\tag{8.13}$$

**8.12. példa.** A

$$\\begin{array}{rcrcrcl}
4x_1 &+& 2x_2 &-& x_3 &=& 0 \\\\
2x_1 &+& 5x_2 & & &=& 8 \\\\
-x_1 & & &+& 3x_3 &=& 1
\\end{array}$$

lineáris egyenletrendszerre alkalmaztuk a gradiens módszert a (8.11)-(8.13) rekurzív képletekkel a $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ kezdőértékből kiindulva. Megjegyezzük, hogy a módszer alkalmazható, hiszen a lineáris rendszer együtthatómátrixa szimmetrikus és pozitív definit. A kapott $\\mathbf{p}^{(k)}$ sorozat első 13 tagját a 8.4. táblázatban soroltuk fel a közelítés hibájával együtt. Megjegyezzük, hogy a pontos megoldás $(-1, 2, 0)$. $\\quad\\square$

---

*8.4. táblázat. Lineáris egyenletrendszer megoldása gradiens módszerrel*

| $k$ | $\\mathbf{p}^{(k)}$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

**Feladatok**

1. Mutassa meg, hogy tetszőleges

   $$g(\\mathbf{x}) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} \\tilde{a}_{ij} x_i x_j + \\sum_{i=1}^{n} \\tilde{b}_i x_i + c$$

   kvadratikus függvény felírható (8.8) alakban! Hogy írhatjuk fel $g'(\\mathbf{x})$-et és $g''(\\mathbf{x})$-et mátrix jelölést használva?

2. Igazolja a 8.11. következményt!

3. Ellenőrizze a (8.11)-(8.13) képletek levezetését!

4. Alkalmazza a gradiens módszert a következő kvadratikus függvények minimumhelyének meghatározására:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

5. Oldja meg a következő lineáris egyenletrendszereket gradiens módszerrel:

   (a)
   $$\\begin{array}{rcrcl}
   4x_1 &-& 3x_2 &=& 4 \\\\
   -3x_1 &+& 3x_2 &=& 3
   \\end{array}$$

   (b)
   $$\\begin{array}{rcrcrcl}
   6x_1 &+& 3x_2 &-& 2x_3 &=& 6 \\\\
   3x_1 &+& 5x_2 &-& x_3 &=& -4 \\\\
   -2x_1 &-& x_2 &+& 3x_3 &=& -2
   \\end{array}$$

6. Legyen $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$. Igazolja, hogy a gradiens módszert alkalmazva a $\\mathbf{p}^{(0)} = (9, 1)^T$ pontból indulva a

   $$\\mathbf{p}^{(k)} = \\begin{pmatrix} 9 \\\\ (-1)^k \\end{pmatrix} 0.8^k$$

   pontokat kapjuk! Mi a sorozat aszimptotikus hibakonstansa? Adjon meg egy olyan függvényt, ahol a gradiens módszer sorozatának aszimptotikus hibakonstansa egy előre megadott $0 < \\alpha < 1$ szám!
`,Ge=`## 8.6. Newton's Method for Minimization

Consider a function $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$, and fix a vector $\\mathbf{p}^{(0)}$. If $f \\in C^3$, then in a neighbourhood of $\\mathbf{p}^{(0)}$ the function $f$ can be approximated by its second-order Taylor polynomial

$$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)}), \\tag{8.14}$$

where $f'(\\mathbf{p}^{(0)})$ is the gradient vector of $f$, and $f''(\\mathbf{p}^{(0)})$ is the Hessian matrix of $f$ at $\\mathbf{p}^{(0)}$. Suppose that $f''(\\mathbf{p}^{(0)})$ is positive definite. Then, by Theorem 8.10, $g$ has a global minimum at the point

$$\\mathbf{p}^{(1)} = \\mathbf{p}^{(0)} - \\big(f''(\\mathbf{p}^{(0)})\\big)^{-1} f'(\\mathbf{p}^{(0)}).$$

Then we consider $\\mathbf{p}^{(1)}$ as an approximation of the minimum point of $f$, and we repeat the previous process from the point $\\mathbf{p}^{(1)}$. We can define the iteration:

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(f''(\\mathbf{p}^{(k)})\\big)^{-1} f'(\\mathbf{p}^{(k)}), \\tag{8.15}$$

which is called *Newton's method for minimization*. It is easy to see that it is equivalent to the Newton's method for solving the nonlinear system $f'(\\mathbf{x}) = \\mathbf{0}$. Therefore, we get the following result immediately.

**Theorem 8.13.** *Let $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$, $f \\in C^3$, $f'(\\mathbf{p}) = \\mathbf{0}$ and $f''(\\mathbf{p})$ be positive definite. Then $f$ has a local minimum at $\\mathbf{p}$, and the Newton's iteration (8.15) locally quadratically converges to $\\mathbf{p}$.*

**Proof.** We apply Theorem 8.1 to obtain that $f$ has a local minimum at $\\mathbf{p}$. Since iteration (8.15) is equivalent to solving the system $f'(\\mathbf{x}) = \\mathbf{0}$ for $\\mathbf{x} = \\mathbf{p}$ using Newton's method, Theorem 2.56 yields the local quadratic convergence of iteration (8.15) to $\\mathbf{p}$. $\\quad\\square$

**Example 8.14.** We apply Newton's method for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ of Examples 8.6, 8.7 and 8.9. The first 5 terms of the sequence starting from $(-1, 4)^T$ can be seen in Table 8.5. We observe quick convergence to the minimum point $(1, 0.5)^T$. The numerical results indicate that the order of convergence is quadratic. We note that the Newton's iteration starting from $(1, 3)^T$ gives back the exact minimum point in one step. $\\quad\\square$

---

*Table 8.5: Newton's method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

**Example 8.15.** Consider the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$. It is easy to see that the minimum point of this function is also $(1, 0.5)^T$. It can be checked that the Hessian of the function at the minimum point is $f''(1, 0.5) = \\mathbf{0}$, so it is not positive definite. Despite of it, the Newton's method converges for this function starting from $(-1, 4)^T$, as it can be seen in Table 8.6. But the convergence in this case is only linear. $\\quad\\square$

---

*Table 8.6: Newton's method, $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 244.10000000 | 4.03112887 | |
| 1 | (−1.01468429, 2.84801762) | 51.47734819 | 3.09388745 | 0.76749902 |
| 2 | (−1.06550085, 2.12183854) | 13.60182932 | 2.62614813 | 0.84881825 |
| 3 | (−1.25304590, 1.80360379) | 6.79822461 | 2.60299802 | 0.99118476 |
| 4 | (−2.19917836, 2.64963726) | 10.23933318 | 3.85430701 | 1.48071838 |
| 5 | ( 1.13216300, −4.75372475) | 1355.09401353 | 5.25538684 | 1.36351018 |
| 6 | ( 1.13190045, −2.95581491) | 267.68684927 | 3.45833116 | 0.65805454 |
| 7 | ( 1.13102026, −1.75800646) | 52.89017856 | 2.26180447 | 0.65401616 |
| 8 | ( 1.12811546, −0.96208855) | 10.46057564 | 1.46769088 | 0.64890263 |
| 9 | ( 1.11900871, −0.43955842) | 2.07752857 | 0.94706552 | 0.64527588 |
| 10 | ( 1.09458417, −0.11167347) | 0.41720946 | 0.61894313 | 0.65353781 |
| 11 | ( 1.05056809, 0.07705747) | 0.08386326 | 0.42595483 | 0.68819704 |
| 12 | ( 1.01290080, 0.19574848) | 0.01637137 | 0.30452490 | 0.71492300 |
| 13 | ( 1.00119582, 0.28963767) | 0.00320655 | 0.21036572 | 0.69079974 |
| 14 | ( 1.00003517, 0.35899525) | 0.00063312 | 0.14100475 | 0.67028386 |
| 15 | ( 1.00000031, 0.40597370) | 0.00012506 | 0.09402630 | 0.66683071 |
| 16 | ( 1.00000000, 0.43731559) | 0.00002470 | 0.06268441 | 0.66668888 |
| 17 | ( 1.00000000, 0.45821040) | 0.00000488 | 0.04178960 | 0.66666668 |
| 18 | ( 1.00000000, 0.47214026) | 0.00000096 | 0.02785974 | 0.66666666 |
| 19 | ( 1.00000000, 0.48142684) | 0.00000019 | 0.01857316 | 0.66666667 |
| 20 | ( 1.00000000, 0.48761789) | 0.00000004 | 0.01238211 | 0.66666667 |

**Exercises**

1. Apply the Newton's method for minimization for the functions defined in Exercise 1 of Section 8.3.

2. Show that for quadratic functions where the Hessian is positive definite, the Newton's method gives back the minimum point of the function exactly in one step.

3. Show that if the conditions of Theorem 8.13 hold and $\\mathbf{p}^{(0)}$ is close enough to $\\mathbf{p}$, then the sequence (8.15) is defined for all $k$, i.e., $f''(\\mathbf{p}^{(k)})$ is invertible.
`,Oe=`## 8.6. Newton-módszer

Most tekintsünk egy $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ függvényt. Rögzítsünk egy $\\mathbf{p}^{(0)}$ vektort. Ha $f \\in C^3$, akkor $\\mathbf{p}^{(0)}$ egy környezetében $f$ közelíthető a

$$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)}) \\tag{8.14}$$

másodfokú Taylor-polinomjával, ahol $f'(\\mathbf{p}^{(0)})$ $f$ gradiensvektora, $f''(\\mathbf{p}^{(0)})$ pedig $f$ Hesse-mátrixa $\\mathbf{p}^{(0)}$-ban. Tegyük fel, hogy $f''(\\mathbf{p}^{(0)})$ pozitív definit. Ekkor a 8.10. tétel szerint $g$-nek globális minimuma létezik, amelyet a

$$\\mathbf{p}^{(1)} = \\mathbf{p}^{(0)} - \\big(f''(\\mathbf{p}^{(0)})\\big)^{-1} f'(\\mathbf{p}^{(0)})$$

pontban vesz fel. Ekkor $\\mathbf{p}^{(1)}$-et tekinthetjük $f$ minimumhelye közelítésének. Ezután megismételjük az eljárást a $\\mathbf{p}^{(1)}$ pontbeli Taylor-közelítést használva. Így definiálhatjuk a következő iterációs módszert:

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(f''(\\mathbf{p}^{(k)})\\big)^{-1} f'(\\mathbf{p}^{(k)}) \\tag{8.15}$$

A (8.15) iterációs módszert *Newton-féle minimumkeresési módszernek* hívjuk. Könnyen látható, hogy ez azonos az $f'(\\mathbf{x}) = \\mathbf{0}$ egyenletrendszer megoldására felírt Newton-iterációval. Ebből kapjuk rögtön a következő tételt.

**8.13. tétel.** *Legyen $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$, $f \\in C^3$, $f'(\\mathbf{p}) = \\mathbf{0}$ és $f''(\\mathbf{p})$ pozitív definit. Ekkor $f$-nek $\\mathbf{p}$-ben lokális minimuma van, és a (8.15) Newton-iteráció lokálisan kvadratikusan konvergál $\\mathbf{p}$-hez.*

**Bizonyítás.** A 8.1. tételt alkalmazva kapjuk, hogy $\\mathbf{p}$-ben $f$-nek lokális minimuma van. Mivel a (8.15) iteráció ekvivalens az $f'(\\mathbf{x}) = \\mathbf{0}$ egyenlet $\\mathbf{p}$ gyökének keresésére felírt Newton-módszerrel, ezért a 2.56. tételből kapjuk, hogy a (8.15) iteráció lokálisan kvadratikusan konvergál $\\mathbf{p}$-hez. $\\quad\\square$

**8.14. példa.** Alkalmazzuk a Newton-módszert a 8.6., 8.7. és 8.9. példákban vizsgált $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(-1, 4)^T$ pontból indított (8.15) iteráció első 5 tagját a 8.5. táblázatban tüntettük fel. A sorozat igen gyorsan megközelítette a pontos $(1, 0.5)^T$ minimumhelyet. Megjegyezzük, hogy az $(1, 3)^T$ pontból indított Newton-sorozat egy lépésben már a pontos minimumhelyet adja vissza. $\\quad\\square$

---

*8.5. táblázat. Newton-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

**8.15. példa.** Tekintsük az $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$ függvényt. Könnyű látni, hogy ennek a függvénynek is $(1, 0.5)^T$ a minimumhelye. Ellenőrizhető, hogy a minimumpontban a függvény Hesse mátrixa $f''(1, 0.5) = \\mathbf{0}$, ami nem pozitív definit. Ennek ellenére a Newton-módszer a $(-1, 4)^T$ kezdőértékből indítva konvergens lesz (lásd 8.6. táblázatot), csak a konvergencia sebessége lineáris lesz. $\\quad\\square$

---

*8.6. táblázat. Newton-módszer, $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 244.10000000 | 4.03112887 | |
| 1 | (−1.01468429, 2.84801762) | 51.47734819 | 3.09388745 | 0.76749902 |
| 2 | (−1.06550085, 2.12183854) | 13.60182932 | 2.62614813 | 0.84881825 |
| 3 | (−1.25304590, 1.80360379) | 6.79822461 | 2.60299802 | 0.99118476 |
| 4 | (−2.19917836, 2.64963726) | 10.23933318 | 3.85430701 | 1.48071838 |
| 5 | ( 1.13216300, −4.75372475) | 1355.09401353 | 5.25538684 | 1.36351018 |
| 6 | ( 1.13190045, −2.95581491) | 267.68684927 | 3.45833116 | 0.65805454 |
| 7 | ( 1.13102026, −1.75800646) | 52.89017856 | 2.26180447 | 0.65401616 |
| 8 | ( 1.12811546, −0.96208855) | 10.46057564 | 1.46769088 | 0.64890263 |
| 9 | ( 1.11900871, −0.43955842) | 2.07752857 | 0.94706552 | 0.64527588 |
| 10 | ( 1.09458417, −0.11167347) | 0.41720946 | 0.61894313 | 0.65353781 |
| 11 | ( 1.05056809, 0.07705747) | 0.08386326 | 0.42595483 | 0.68819704 |
| 12 | ( 1.01290080, 0.19574848) | 0.01637137 | 0.30452490 | 0.71492300 |
| 13 | ( 1.00119582, 0.28963767) | 0.00320655 | 0.21036572 | 0.69079974 |
| 14 | ( 1.00003517, 0.35899525) | 0.00063312 | 0.14100475 | 0.67028386 |
| 15 | ( 1.00000031, 0.40597370) | 0.00012506 | 0.09402630 | 0.66683071 |
| 16 | ( 1.00000000, 0.43731559) | 0.00002470 | 0.06268441 | 0.66668888 |
| 17 | ( 1.00000000, 0.45821040) | 0.00000488 | 0.04178960 | 0.66666668 |
| 18 | ( 1.00000000, 0.47214026) | 0.00000096 | 0.02785974 | 0.66666666 |
| 19 | ( 1.00000000, 0.48142684) | 0.00000019 | 0.01857316 | 0.66666667 |
| 20 | ( 1.00000000, 0.48761789) | 0.00000004 | 0.01238211 | 0.66666667 |

**Feladatok**

1. Alkalmazza a Newton-féle minimumkeresési módszert a 8.3. szakasz 1. feladatában felsorolt függvényekre!

2. Mutassa meg, hogy olyan kvadratikus függvényekre, melyeknek Hesse-mátrixa pozitív definit, a Newton-módszer egy lépésben a pontos minimumhelyet adja vissza!

3. Igazolja, hogy ha a 8.13. tétel feltételei teljesülnek, és a $\\mathbf{p}^{(0)}$ elegendően közel van $\\mathbf{p}$-hez, akkor a (8.15) sorozat minden $k$-ra definiálható, azaz $f''(\\mathbf{p}^{(k)})$ invertálható!
`,Ke=`## 8.7. Quasi-Newton Method for Minimization

Similarly to the previous section, we approximate the function $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ in a neighbourhood of $\\mathbf{p}^{(k)}$ by the quadratic function

$$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + \\big(\\mathbf{v}^{(k)}\\big)^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)}). \\tag{8.16}$$

If $\\mathbf{v}^{(k)} \\approx f'(\\mathbf{p}^{(k)})$ and $\\mathbf{A}^{(k)} \\approx f''(\\mathbf{p}^{(k)})$, then (8.16) approximates the second-order Taylor polynomial of $f$ around $\\mathbf{p}^{(k)}$, so it can be considered as an approximation of $f$ in a small neighbourhood of $\\mathbf{p}^{(k)}$. We hope that the minimum point of $g$ will approximate that of $f$. If $\\mathbf{A}^{(k)}$ is positive definite, then Theorem 8.10 yields that the minimum point of $g$ is

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(\\mathbf{A}^{(k)}\\big)^{-1} \\mathbf{v}^{(k)}. \\tag{8.17}$$

Such iterations are called *quasi-Newton methods for minimization*.

We can define $\\mathbf{A}^{(k)}$ and $\\mathbf{v}^{(k)}$ as a numerical approximation of the Hessian matrix $f''(\\mathbf{p}^{(k)})$ and the gradient vector $f'(\\mathbf{p}^{(k)})$: $\\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ and $\\mathbf{v}^{(k)} = (v_1^{(k)}, \\ldots, v_n^{(k)})^T$, where

$$a_{ij}^{(k)} = \\frac{1}{h^2}\\big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)})\\big) \\tag{8.18}$$

and

$$v_i^{(k)} = \\frac{1}{h}\\Big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)})\\Big),$$

$i, j = 1, \\ldots, n$ ($\\mathbf{e}^{(i)}$ is the $i$th unit vector, $h > 0$ is fixed small step size). Here we used the first-order forward difference formula to approximate the first partial derivatives of $f$, and formulas (7.19)–(7.20) to approximate the second partial derivatives. This way we do not need to now the exact values of the gradient vector and the Hessian matrix, but in each step of the iteration we need to perform $n^2$ number of function evaluations.

Next we consider the case when in (8.17) we have the exact gradient value $\\mathbf{v}^{(k)} = f'(\\mathbf{p}^{(k)})$, and hence we examine quasi-Newton methods of the form

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(\\mathbf{A}^{(k)}\\big)^{-1} f'(\\mathbf{p}^{(k)}). \\tag{8.19}$$

Here we assume that we can evaluate the gradient vector of the function, so the question is only how to approximate the Hessian matrix. One possibility is to use Broyden's method defined in Section 2.13 to approximate solutions of the system $f'(\\mathbf{x}) = \\mathbf{0}$:

$$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)}), \\tag{8.20}$$

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\mathbf{s}^{(k)}, \\tag{8.21}$$

$$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)}), \\tag{8.22}$$

$$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}. \\tag{8.23}$$

**Example 8.16.** We apply Broyden's method defined by (8.20)–(8.23) for minimizing the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We start the sequence from the initial point $(2, 2)^T$, and the matrix $\\mathbf{A}^{(0)}$ is defined as a second-order difference approximation (8.18) of the Hessian matrix $f''(2, 2)$ using step size $h = 0.05$. The first 10 elements of the sequence can be seen in Table 8.7. $\\quad\\square$

The problem with the iteration (8.23) is that since $\\mathbf{A}^{(k)}$ is an approximation of the Hessian $f''(\\mathbf{p})$, it is natural to require that $\\mathbf{A}^{(k)}$ be positive definite for all $k$. It is also needed to argue that the quadratic function (8.16) has a minimum for all $k$. The numerical

---

*Table 8.7: Broyden's method for minimization, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

experience also gives that those quasi-Newton methods of the form (8.19) are the most efficient where $\\mathbf{A}^{(k)}$ is a positive definite approximation of the Hessian. But the matrix sequence $\\mathbf{A}^{(k)}$ generated by the Broyden's method is not even symmetric.

Our first goal is to modify the Broyden's method so that it should generate a symmetric matrix for all $k$. Suppose $\\mathbf{A}^{(k)}$ is symmetric, and let

$$\\mathbf{B}^{(k+1,1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$$

be the matrix computed by the Broyden iteration. It can be shown (see Exercise 2) that the closest symmetric matrix to $\\mathbf{A}$ (in some sense) is the matrix $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$. Therefore, it is natural to modify $\\mathbf{B}^{(k+1,1)}$ in the following way

$$\\begin{aligned}
\\mathbf{B}^{(k+1,2)} &= \\frac{1}{2}\\Big(\\mathbf{B}^{(k+1,1)} + \\mathbf{B}^{(k+1,1)T}\\Big) \\\\
&= \\mathbf{A}^{(k)} + \\frac{1}{2}\\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}.
\\end{aligned} \\tag{8.24}$$

But now the problem is that the matrix $\\mathbf{B}^{(k+1,2)}$ does not satisfy the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ which was the motivation of the Broyden's method. We correct it by applying relation (8.23) again: let

$$\\mathbf{B}^{(k+1,3)} = \\mathbf{B}^{(k+1,2)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{B}^{(k+1,2)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}. \\tag{8.25}$$

This is again a non-symmetric matrix, so we repeat the above procedure again: define the matrices $\\mathbf{B}^{(k+1,2i)}$ and $\\mathbf{B}^{(k+1,2i+1)}$ from the previous term of the sequence using formulas (8.24) and (8.25), respectively, for $i = 2, 3, \\ldots$. It can be shown that the matrix sequence $\\mathbf{B}^{(k+1,i)}$ converges to the symmetric matrix

$$\\begin{aligned}
\\mathbf{A}^{(k+1)} &= \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} \\\\
&\\quad - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T.
\\end{aligned} \\tag{8.26}$$

This is a correction iteration which preserves the symmetric property of the matrix, and also it satisfies the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$. This iteration is called *Powell-symmetric-Broyden update*, or shortly, *PSB update*. The following result can be shown:

**Theorem 8.17.** *Let $f \\in C^3$, $f'(\\mathbf{p}) = \\mathbf{0}$, $f''(\\mathbf{p})$ be positive definite. Then there exist $\\varepsilon, \\delta > 0$ such that the iteration (8.20)–(8.22), (8.26) is defined for all $k$, and it converges superlinearly to $\\mathbf{p}$ if $\\|\\mathbf{p}^{(0)} - \\mathbf{p}\\|_2 < \\varepsilon$ and $\\|\\mathbf{A}^{(0)} - f''(\\mathbf{p})\\|_2 < \\delta$.*

**Example 8.18.** Here we apply the quasi-Newton method (8.19) with the PSB update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We started the computation from the same initial value that was used in Example 8.16. The corresponding numerical values can be seen in Table 8.8. The approximation here is better than that for the Broyden's method. $\\quad\\square$

---

*Table 8.8: Quasi-Newton method (8.19) with the PSB update*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

The PSB update does not satisfy the goal formulated earlier that $\\mathbf{A}^{(k)}$ be positive definite for all $k$ if $\\mathbf{A}^{(0)}$ is positive definite. According to Theorem 5.6, if a matrix $\\mathbf{A}$ is positive definite, then it has a Cholesky factorization $\\mathbf{A} = \\mathbf{L}\\mathbf{L}^T$, where $\\mathbf{L}$ is non-singular. Otherwise, if a matrix $\\mathbf{A}$ has the form $\\mathbf{A} = \\mathbf{M}\\mathbf{M}^T$ where $\\mathbf{M}$ is non-singular, then $\\mathbf{A}$ is positive definite, since $\\mathbf{x}^T \\mathbf{M}\\mathbf{M}^T \\mathbf{x} = \\|\\mathbf{M}^T \\mathbf{x}\\|_2^2 \\geq 0$, and here equality holds if and only if $\\mathbf{M}^T \\mathbf{x} = \\mathbf{0}$, and hence $\\mathbf{x} = \\mathbf{0}$.

Let $\\mathbf{A}^{(k)} = \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T$ where $\\mathbf{M}^{(k)}$ is invertible (but not necessary lower triangular). We look for the next Hessian approximation $\\mathbf{A}^{(k+1)}$ in the form $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$ where we require that $\\mathbf{A}^{(k+1)}$ satisfies the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$. Then it implies $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} = (\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}$, hence if $\\mathbf{A}^{(k+1)}$ is positive definite, then the inequality

$$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0 \\tag{8.27}$$

holds. We show that the secant equation has a positive definite solution assuming (8.27) holds.

We introduce the notation $\\mathbf{v}^{(k)} := (\\mathbf{M}^{(k+1)})^T \\mathbf{s}^{(k)}$. Then the secant equation has the form

$$(\\mathbf{M}^{(k+1)})^T \\mathbf{s}^{(k)} = \\mathbf{v}^{(k)}, \\tag{8.28}$$

$$\\mathbf{M}^{(k+1)} \\mathbf{v}^{(k)} = \\mathbf{y}^{(k)}. \\tag{8.29}$$

We would like to compute the matrix $\\mathbf{M}^{(k+1)}$ by updating the matrix $\\mathbf{M}^{(k)}$. Therefore, using the derivation of the Broyden's method and using (8.29), it is natural to look for the matrix $\\mathbf{M}^{(k+1)}$ in the form

$$\\mathbf{M}^{(k+1)} = \\mathbf{M}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}. \\tag{8.30}$$

Then $\\mathbf{M}^{(k+1)}$ satisfies equation (8.29), and its difference from the matrix $\\mathbf{M}^{(k)}$ is the smallest in the sense that for all $\\mathbf{z} \\perp \\mathbf{v}^{(k)}$ it follows $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$. Substituting $\\mathbf{M}^{(k+1)}$ back to equation (8.28) we get

$$\\begin{aligned}
\\mathbf{v}^{(k)} &= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{\\big((\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T\\big)^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{s}^{(k)} \\\\
&= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{\\mathbf{v}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{s}^{(k)} \\\\
&= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{v}^{(k)}.
\\end{aligned}$$

It yields $(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} = \\alpha \\mathbf{v}^{(k)}$, where

$$\\begin{aligned}
\\alpha &= 1 - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\\\
&= 1 - \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} + \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\\\
&= 1 - \\alpha^2 \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}} + \\alpha,
\\end{aligned}$$

and so

$$\\alpha^2 = \\frac{(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} = \\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}. \\tag{8.31}$$

We have that the numerator is positive since $\\mathbf{A}^{(k)}$ is positive definite, therefore, $\\alpha$ can be obtained from equation (8.31), and

$$\\mathbf{v}^{(k)} = \\frac{1}{\\alpha}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} = \\left( \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}} \\right)^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}.$$

Substituting it back to equation (8.30) we get

$$\\begin{aligned}
\\mathbf{M}^{(k+1)} &= \\mathbf{M}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\frac{1}{\\alpha}\\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)})\\frac{1}{\\alpha}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{\\frac{1}{\\alpha^2}\\|(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}\\|_2^2} \\\\
&= \\mathbf{M}^{(k)} + \\alpha \\frac{\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}.
\\end{aligned}$$

Little computation gives (see Exercise 4) that

$$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}. \\tag{8.32}$$

We have to show that the iteration generates a positive definite matrix. Since $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$, it is enough to show that $\\mathbf{M}^{(k+1)}$ is invertible. By our assumption, the matrix $\\mathbf{M}^{(k)}$ is positive definite, and hence it is invertible. If we assume that (8.27) holds, then the invertibility of $\\mathbf{M}^{(k+1)}$ follows easily from (8.30) and Theorem 2.58. The details are left to the reader (Exercise 5).

The formula (8.32) was introduced by Broyden, Flecher, Goldfarb and Shanno in 1970, therefore, it is called *BFGS update*. This is the best known iteration for the approximation of the Hessian. The initial value of the iteration can be the matrix $f''(\\mathbf{p}^{(0)})$ or its numerical approximation by the second-order difference formula (8.18). If $\\mathbf{p}^{(0)}$ is close enough to $\\mathbf{p}$ and $f''(\\mathbf{p})$ is positive definite, then $f''(\\mathbf{p}^{(0)})$ and so $\\mathbf{A}^{(0)}$ is also positive definite.

Finally, consider condition (8.27). Applying Lagrange's Mean Value Theorem (Theorem 2.40), relations (8.21) and (8.22), we get

$$\\begin{aligned}
(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} &= \\big(f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})\\big)^T (\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}) \\\\
&= \\sum_{i=1}^{n} \\left( \\frac{\\partial f_i(\\mathbf{p}^{(k+1)})}{\\partial x_i} - \\frac{\\partial f_i(\\mathbf{p}^{(k)})}{\\partial x_i} \\right)(p_i^{(k+1)} - p_i^{(k)}) \\\\
&= \\sum_{i=1}^{n} \\left( \\sum_{j=1}^{n} \\frac{\\partial^2 f_i(\\xi^{(k,i)})}{\\partial x_i\\, \\partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \\right)(p_i^{(k+1)} - p_i^{(k)}).
\\end{aligned}$$

If the iterates $\\mathbf{p}^{(k)}$ are close enough to $\\mathbf{p}$ during the iteration, then the vectors $\\xi^{(k,i)}$ are also close to $\\mathbf{p}$, and hence the continuity of $f''$ yields

$$\\begin{aligned}
(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} &\\approx \\sum_{i=1}^{n} \\left( \\sum_{j=1}^{n} \\frac{\\partial^2 f_i(\\mathbf{p})}{\\partial x_i\\, \\partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \\right)(p_i^{(k+1)} - p_i^{(k)}) \\\\
&= (\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)})^T f''(\\mathbf{p})(\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}),
\\end{aligned}$$

which is positive, since $f''(\\mathbf{p})$ is positive definite. Therefore, this condition is automatically satisfied for large $k$ if the sequence converges to $\\mathbf{p}$. Clearly, if (8.27) does not hold, then iteration (8.32) can be defined, but in this case $\\mathbf{A}^{(k+1)}$ is only positive semidefinite, not positive definite.

The following result can be proved.

**Theorem 8.19.** *Let $f \\in C^3$, $f'(\\mathbf{p}) = \\mathbf{0}$, and $f''(\\mathbf{p})$ be positive definite. Then there exist $\\varepsilon, \\delta > 0$ such that the iteration (8.20)–(8.22), (8.32) is defined for all $k$, and it converges superlinearly to $\\mathbf{p}$, assuming $\\|\\mathbf{p}^{(0)} - \\mathbf{p}\\|_2 < \\varepsilon$ and $\\|\\mathbf{A}^{(0)} - f''(\\mathbf{p})\\|_2 < \\delta$.*

**Example 8.20.** We applied the quasi-Newton method (8.19) with the BFGS update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We used the same initial condition as in Example 8.16. The numerical results are listed in Table 8.9. We have got a very precise approximation in 8 steps. $\\quad\\square$

---

*Table 8.9: Quasi-Newton method (8.19) with the BFGS update*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.23976784, 0.70438005) | 1.31429e-01 | 0.31505527 | 1.06461181 |
| 3 | ( 1.02721672, 0.49403232) | 5.98519e-03 | 0.02786330 | 0.08843939 |
| 4 | ( 1.00995636, 0.51197836) | 2.13820e-04 | 0.01557595 | 0.55901316 |
| 5 | ( 0.99954439, 0.49921815) | 8.41172e-07 | 0.00090492 | 0.05809714 |
| 6 | ( 1.00000534, 0.50000495) | 5.76547e-11 | 0.00000728 | 0.00804964 |
| 7 | ( 1.00000005, 0.50000002) | 9.15800e-15 | 0.00000005 | 0.00708494 |
| 8 | ( 1.00000000, 0.50000000) | 8.60000e-19 | 0.00000000 | 0.01827989 |

It can be proved by mathematical induction that the inverses $\\mathbf{B}^{(k)} := (\\mathbf{A}^{(k)})^{-1}$ of the matrices $\\mathbf{A}^{(k)}$ generated by the BFGS update satisfy the recursion

$$\\begin{aligned}
\\mathbf{B}^{(k+1)} &= \\mathbf{B}^{(k)} + \\left( 1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} \\right) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} \\\\
&\\quad - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}.
\\end{aligned} \\tag{8.33}$$

Using this formula, (8.20) can be replaced by

$$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)}), \\tag{8.34}$$

so during the iteration we do not need to compute matrix inverses or solving linear systems.

Similarly to the derivation of the BFGS update, we can obtain the definition of the *DFP update*. Again, we are looking for the approximation of the Hessian in the form $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$, but instead of the iterates (8.28)–(8.29) we use the equivalent iteration

$$\\begin{aligned}
(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} &= \\mathbf{v}^{(k)} \\\\
\\big((\\mathbf{M}^{(k+1)})^T\\big)^{-1} \\mathbf{v}^{(k)} &= \\mathbf{s}^{(k)}.
\\end{aligned}$$

Its solution is considered in the form

$$\\big(\\mathbf{M}^{(k+1)}\\big)^{-1} = \\big(\\mathbf{M}^{(k)}\\big)^{-1} + \\frac{(\\mathbf{s}^{(k)} - (\\mathbf{M}^{(k)})^{-1}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}.$$

Then we get

$$\\mathbf{v}^{(k)} = \\left( \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}} \\right)^{1/2} (\\mathbf{M}^{(k)})^{-1} \\mathbf{y}^{(k)},$$

assuming (8.27) holds. From this and Theorem 2.58 we get

$$\\begin{aligned}
\\mathbf{A}^{(k+1)} &= \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} \\\\
&\\quad - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T.
\\end{aligned} \\tag{8.35}$$

This formula is called the *DFP update*, since it was established by Davidon (1959) and Flecher, Powell (1963). This iteration satisfies a result analogous to Theorem 8.19.

It can be checked that the inverse of the matrix $\\mathbf{A}^{(k)}$ generated by the DFP update can be computed by the recursion:

$$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}. \\tag{8.36}$$

**Example 8.21.** Here we used the DFP update in the problem investigated in Examples 8.16 and 8.20. This method converges with a speed similar to the BFGS update. The numerical results can be seen in Table 8.10. $\\quad\\square$

---

*Table 8.10: Quasi-Newton method (8.19) with DFP update*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25682024, 0.70394625) | 1.61396e-01 | 0.32794924 | 1.10818219 |
| 3 | ( 1.09891338, 0.59229507) | 2.00977e-02 | 0.13528576 | 0.41252041 |
| 4 | ( 1.01148073, 0.50204318) | 6.24877e-04 | 0.01166112 | 0.08619621 |
| 5 | ( 1.00103666, 0.50022718) | 4.77384e-06 | 0.00106126 | 0.09100838 |
| 6 | ( 1.00001771, 0.50001111) | 8.01068e-10 | 0.00002090 | 0.01969409 |
| 7 | ( 0.99999976, 0.49999958) | 2.45621e-13 | 0.00000049 | 0.02332123 |
| 8 | ( 1.00000001, 0.50000002) | 4.22000e-16 | 0.00000002 | 0.03601757 |

**Exercises**

1. Apply the quasi-Newton methods introduced in this section to the problems of Exercise 1 of Section 8.3.

2. Let $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$. Define

   $$\\|\\mathbf{A}\\|_F := \\sqrt{\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij}^2},$$

   which is the so-called *Frobenius norm* of the matrix $\\mathbf{A}$. (This is not a matrix norm generated by a vector norm.) Prove that the unique solution of the minimization problem

   $$\\min\\{\\|\\mathbf{B} - \\mathbf{A}\\|_F : \\mathbf{B} \\in \\mathbb{R}^{n \\times n}, \\ \\mathbf{B} \\text{ symmetric}\\}$$

   is the matrix $\\mathbf{B} = \\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$.

3. Show that the matrix defined by (8.26) is symmetric and it satisfies the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$.

4. Check the derivation of formula (8.32).

5. Prove that the matrix $\\mathbf{M}^{(k+1)}$ is invertible if relation (8.27) holds.

6. Show recursion (8.33).

7. Work out the details for the derivation of the DFP update.

8. Prove recursion (8.36).

---

*F. Hartung, University of Pannonia — www.tankonyvtar.hu*
`,Ue=`## 8.7. Kvázi-Newton módszerek

Az előző szakaszhoz hasonlóan közelítsük az $f$ függvényt egy $\\mathbf{p}^{(k)}$ pontja környezetében a

$$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + \\big(\\mathbf{v}^{(k)}\\big)^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)}) \\tag{8.16}$$

kvadratikus függvénnyel. Ha $\\mathbf{v}^{(k)} \\approx f'(\\mathbf{p}^{(k)})$ és $\\mathbf{A}^{(k)} \\approx f''(\\mathbf{p}^{(k)})$, akkor (8.16) közelíti $f$ másodfokú $\\mathbf{p}^{(k)}$-körüli Taylor-polinomját, így valóban $f$ közelítésének tekinthető $\\mathbf{p}^{(k)}$ egy kis környezetében. Azt várjuk, hogy $g$ minimumhelye közelíteni fogja $f$ minimumhelyét. Ha $\\mathbf{A}^{(k)}$ pozitív definit, akkor a 8.10. tétel szerint $g$ minimumhelye a

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(\\mathbf{A}^{(k)}\\big)^{-1} \\mathbf{v}^{(k)}. \\tag{8.17}$$

pontban van. Ezeket az iterációs eljárásokat *kvázi-Newton minimumkeresési módszereknek* hívjuk.

Választhatjuk $\\mathbf{A}^{(k)}$-t és $\\mathbf{v}^{(k)}$-t az $f''(\\mathbf{p}^{(k)})$ Hesse-mátrix és az $f'(\\mathbf{p}^{(k)})$ gradiensvektor numerikus közelítésének: $\\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ és $\\mathbf{v}^{(k)} = (v_1^{(k)}, \\ldots, v_n^{(k)})^T$, ahol

$$a_{ij}^{(k)} = \\frac{1}{h^2}\\big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)})\\big) \\tag{8.18}$$

és

$$v_i^{(k)} = \\frac{1}{h}\\Big(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)})\\Big),$$

$i, j = 1, \\ldots, n$ ($\\mathbf{e}^{(i)}$ az $i$-edik egységvektor, $h > 0$ rögzített kis lépésköz). Itt elsőrendű jobb oldali differencia képlettel közelítettük $f$ elsőrendű parciális deriváltjait, illetve a (7.18)–(7.19) képletekkel a másodrendű parciális deriváltakat. Ezzel a módosítással nincs szükség a pontos Jacobi- és Hesse-mátrix ismeretére, viszont minden iterációs lépésben $n^2$ nagyságrendű függvény kiértékelést kell elvégezni, arról nem is beszélve, hogy nem tudjuk, mi a $h$ lépésköz ideális választása.

Most tekintsük azt az esetet, amikor a (8.17) képletben $\\mathbf{v}^{(k)} = f'(\\mathbf{p}^{(k)})$, azaz vizsgáljuk a

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\big(\\mathbf{A}^{(k)}\\big)^{-1} f'(\\mathbf{p}^{(k)}) \\tag{8.19}$$

alakú kvázi-Newton módszereket. Feltesszük tehát, hogy a függvény gradiensvektorát ki tudjuk számítani, és a kérdés az, hogyan közelítsük a függvény Hesse-mátrixát. Erre egy lehetőség a 2.13. szakaszban vizsgált Broyden-módszer alkalmazása az $f'(\\mathbf{x}) = \\mathbf{0}$ egyenletrendszer gyökének meghatározására:

$$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)}), \\tag{8.20}$$

$$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\mathbf{s}^{(k)}, \\tag{8.21}$$

$$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)}), \\tag{8.22}$$

$$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}. \\tag{8.23}$$

**8.16. példa.** Alkalmazzuk a (8.20)–(8.23) képletekkel definiált Broyden-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(2, 2)^T$ pontból indítottuk a sorozatot, az $\\mathbf{A}^{(0)}$ mátrix pedig az $f''(2, 2)$ Hesse-mátrix $h = 0.05$ lépésközű (8.18) másodrendű differencia képlettel számított közelítése volt. A kapott sorozat első 10 tagját a 8.7. táblázatban láthatjuk. $\\quad\\square$

---

*8.7. táblázat. Broyden-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

A (8.23) iterációs módszerrel az a probléma, hogy mivel $\\mathbf{A}^{(k)}$ az $f''(\\mathbf{p})$ Hesse-mátrix közelítése, így természetes megkövetelni, hogy $\\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra. Ahhoz kell, hogy a (8.16) kvadratikus függvénynek legyen minimuma minden $k$-ra. A numerikus tapasztalat is azt támasztja alá, hogy azok a (8.19) alakú kvázi-Newton módszerek a leghatékonyabbak, ahol $\\mathbf{A}^{(k)}$ pozitív definit közelítése a Hesse-mátrixnak. A Broyden-módszerrel generált $\\mathbf{A}^{(k)}$ mátrixsorozat viszont pozitív definit mátrixból kiindulva még csak nem is szimmetrikus mátrixokat generál.

Az 5.6. tétel szerint ha egy $\\mathbf{A}$ mátrix pozitív definit, akkor az $\\mathbf{A} = \\mathbf{L}\\mathbf{L}^T$ Cholesky-felbontása létezik, ahol $\\mathbf{L}$ nemszinguláris. Fordítva, ha az $\\mathbf{A} = \\mathbf{M}\\mathbf{M}^T$ alakú, ahol $\\mathbf{M}$ nemszinguláris, akkor $\\mathbf{A}$ pozitív definit, hiszen $\\mathbf{x}^T \\mathbf{M}\\mathbf{M}^T \\mathbf{x} = \\|\\mathbf{M}^T \\mathbf{x}\\|_2^2 \\geq 0$, és egyenlőség csak akkor van, ha $\\mathbf{M}^T \\mathbf{x} = \\mathbf{0}$, és ezért $\\mathbf{x} = \\mathbf{0}$.

Legyen $\\mathbf{A}^{(k)} = \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T$ alakú, ahol $\\mathbf{M}^{(k)}$ invertálható (de nem feltétlenül alulról trianguláris). A következő Hesse-mátrix közelítést, $\\mathbf{A}^{(k+1)}$-et az $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$ alakban keressük, ahol $\\mathbf{A}^{(k+1)}$-től megköveteljük, hogy teljesítse az $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ szelő egyenleteket. A szelő egyenletből következik, hogy $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} = (\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}$, ezért ha $\\mathbf{A}^{(k+1)}$ pozitív definit, akkor az

$$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0 \\tag{8.24}$$

egyenlőtlenség teljesül. Megmutatjuk, hogy (8.24) teljesülése esetén a szelő egyenletnek van pozitív definit megoldása.

Vezessük be a $\\mathbf{v}^{(k)} := (\\mathbf{M}^{(k+1)})^T \\mathbf{s}^{(k)}$ jelölést. Ekkor a szelő egyenlet felírható a következőképpen:

$$(\\mathbf{M}^{(k+1)})^T \\mathbf{s}^{(k)} = \\mathbf{v}^{(k)}, \\tag{8.25}$$

$$\\mathbf{M}^{(k+1)} \\mathbf{v}^{(k)} = \\mathbf{y}^{(k)}. \\tag{8.26}$$

Az $\\mathbf{M}^{(k+1)}$ mátrixot az $\\mathbf{M}^{(k)}$ mátrixot módosítva szeretnénk előállítani, ezért a Broyden-módszer levezetését követve (8.26) alapján természetes $\\mathbf{M}^{(k+1)}$-et az

$$\\mathbf{M}^{(k+1)} = \\mathbf{M}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\tag{8.27}$$

alakban keresni. Ekkor $\\mathbf{M}^{(k+1)}$ teljesíti a (8.26) egyenletet, és a legkevésbé tér el $\\mathbf{M}^{(k)}$-tól abban az értelemben, hogy minden $\\mathbf{z} \\perp \\mathbf{v}^{(k)}$-ra $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$. $\\mathbf{M}^{(k+1)}$-et visszahelyettesítve a (8.25) egyenletbe kapjuk, hogy

$$\\begin{aligned}
\\mathbf{v}^{(k)} &= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{\\big((\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T\\big)^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{s}^{(k)} \\\\
&= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{\\mathbf{v}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{s}^{(k)} \\\\
&= (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2}\\mathbf{v}^{(k)}.
\\end{aligned}$$

Ebből következik, hogy $(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} = \\alpha \\mathbf{v}^{(k)}$ alakú, ahol

$$\\begin{aligned}
\\alpha &= 1 - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{M}^{(k)}\\mathbf{v}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\\\
&= 1 - \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} + \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\\\
&= 1 - \\alpha^2 \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}} + \\alpha,
\\end{aligned}$$

és így

$$\\alpha^2 = \\frac{(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} = \\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}. \\tag{8.28}$$

Mivel a számláló pozitív, hiszen feltettük, hogy $\\mathbf{A}^{(k)}$ pozitív definit, ezért $\\alpha$ kifejezhető a (8.28) egyenletből, és

$$\\mathbf{v}^{(k)} = \\frac{1}{\\alpha}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)} = \\left( \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}} \\right)^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}.$$

Ezt visszahelyettesítve a (8.27) egyenletbe

$$\\begin{aligned}
\\mathbf{M}^{(k+1)} &= \\mathbf{M}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\frac{1}{\\alpha}\\mathbf{M}^{(k)}(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)})\\frac{1}{\\alpha}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{\\frac{1}{\\alpha^2}\\|(\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}\\|_2^2} \\\\
&= \\mathbf{M}^{(k)} + \\alpha \\frac{\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{M}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}.
\\end{aligned}$$

Kis számolással ebből levezethető (2. feladat), hogy

$$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}. \\tag{8.29}$$

Hátra van még azt megmutatni, hogy az iteráció pozitív definit mátrixot generál. Mivel $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$, ezért elegendő azt belátni, hogy $\\mathbf{M}^{(k+1)}$ invertálható. A feltevés szerint $\\mathbf{M}^{(k)}$ pozitív definit, és ezért invertálható. Ha feltesszük, hogy (8.24) teljesül, akkor $\\mathbf{M}^{(k+1)}$ invertálhatóságát könnyen kapjuk a (8.27) képletből a 2.58. tételt alkalmazva. A részletek kidolgozását az olvasóra hagyjuk (3. feladat).

A (8.29) formulát Broyden, Flecher, Goldfarb és Shanno vezették le 1970-ben, ezért *BFGS-iterációnak* nevezzük. Ez a jelenleg ismert legjobb iterációs formula a Hesse-mátrix közelítésére. Az iteráció kezdeti mátrixának vagy $f''(\\mathbf{p}^{(0)})$-t vagy ennek egy (8.18) másodrendű differencia közelítését célszerű használni. Ha $\\mathbf{p}^{(0)}$ elegendően közel van $\\mathbf{p}$-hez, és $f''(\\mathbf{p})$ pozitív definit, akkor $f''(\\mathbf{p}^{(0)})$, és ezért $\\mathbf{A}^{(0)}$ is az lesz.

Végül vizsgáljuk meg, hogy a (8.24) feltétel milyen megszorítást jelent. A Lagrange-féle középértéktételt (2.40. tétel) és a (8.21), (8.22) egyenleteket alkalmazva kapjuk, hogy

$$\\begin{aligned}
(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} &= \\big(f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})\\big)^T (\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}) \\\\
&= \\sum_{i=1}^{n} \\left( \\frac{\\partial f_i(\\mathbf{p}^{(k+1)})}{\\partial x_i} - \\frac{\\partial f_i(\\mathbf{p}^{(k)})}{\\partial x_i} \\right)(p_i^{(k+1)} - p_i^{(k)}) \\\\
&= \\sum_{i=1}^{n} \\left( \\sum_{j=1}^{n} \\frac{\\partial^2 f_i(\\xi^{(k,i)})}{\\partial x_i\\, \\partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \\right)(p_i^{(k+1)} - p_i^{(k)}).
\\end{aligned}$$

Ha a $\\mathbf{p}^{(k)}$ iteráltak elegendően közel maradnak $\\mathbf{p}$-hez az iteráció közben, akkor $\\xi^{(k,i)}$ is $\\mathbf{p}$ közelében marad, és ezért $f''$ folytonossága miatt

$$\\begin{aligned}
(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} &\\approx \\sum_{i=1}^{n} \\left( \\sum_{j=1}^{n} \\frac{\\partial^2 f_i(\\mathbf{p})}{\\partial x_i\\, \\partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \\right)(p_i^{(k+1)} - p_i^{(k)}) \\\\
&= (\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)})^T f''(\\mathbf{p})(\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}),
\\end{aligned}$$

ami pozitív, hiszen $f''(\\mathbf{p})$ pozitív definit. Ez a feltétel tehát, ha a sorozat $\\mathbf{p}$-hez tart, $\\mathbf{p}$ közelében teljesülni fog. Természetesen ha (8.24) nem teljesül, akkor is definiálható a (8.29) iteráció, csak ekkor $\\mathbf{A}^{(k+1)}$ pozitív szemidefinit lesz, nem pozitív definit.

Belátható a következő tétel.

**8.17. tétel.** *Legyen $f \\in C^3$, $f'(\\mathbf{p}) = \\mathbf{0}$, $f''(\\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\\varepsilon, \\delta > 0$, hogy a (8.20)–(8.22), (8.29) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\\mathbf{p}$-hez, ha $\\|\\mathbf{p}^{(0)} - \\mathbf{p}\\|_2 < \\varepsilon$ és $\\|\\mathbf{A}^{(0)} - f''(\\mathbf{p})\\|_2 < \\delta$.*

---

*8.8. táblázat. A (8.19) kvázi-Newton módszer BFGS-iterációval*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

**8.18. példa.** A BFGS-iterációval kaptuk a 8.8. táblázatban szereplő sorozatot az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. Ugyanabból a kezdőértékekből indítottuk a módszert, mint a 8.16. példában. $\\quad\\square$

Teljes indukcióval ellenőrizhető, hogy a BFGS-módszerrel képzett $\\mathbf{A}^{(k)}$ mátrixok $\\mathbf{B}^{(k)} := (\\mathbf{A}^{(k)})^{-1}$ inverzét a

$$\\begin{aligned}
\\mathbf{B}^{(k+1)} &= \\mathbf{B}^{(k)} + \\left( 1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} \\right) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} \\\\
&\\quad - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}
\\end{aligned} \\tag{8.30}$$

rekurzív képlettel is kiszámíthatjuk. Ezt az összefüggést használva a (8.20) egyenlet helyettesíthető az

$$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)}) \\tag{8.31}$$

egyenlettel, és így a módszer alkalmazásakor nincs szükség lineáris egyenletrendszer megoldására vagy mátrix invertálásra.

A BFGS-iteráció levezetéséhez hasonlóan kaphatjuk a DFP-iteráció képletét. Újra $\\mathbf{A}^{(k+1)} = \\mathbf{M}^{(k+1)}(\\mathbf{M}^{(k+1)})^T$ alakban keressük a módosított Hesse-közelítést, de a (8.25)–(8.26) szelő egyenletek helyett most az azzal ekvivalens

$$\\begin{aligned}
(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} &= \\mathbf{v}^{(k)} \\\\
\\big((\\mathbf{M}^{(k+1)})^T\\big)^{-1} \\mathbf{v}^{(k)} &= \\mathbf{s}^{(k)}
\\end{aligned}$$

egyenletekből indulunk ki. Ennek megoldását

$$\\big(\\mathbf{M}^{(k+1)}\\big)^{-1} = \\big(\\mathbf{M}^{(k)}\\big)^{-1} + \\frac{(\\mathbf{s}^{(k)} - (\\mathbf{M}^{(k)})^{-1}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}$$

alakban keresve kapjuk, hogy

$$\\mathbf{v}^{(k)} = \\left( \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}} \\right)^{1/2} (\\mathbf{M}^{(k)})^{-1} \\mathbf{y}^{(k)},$$

feltéve, hogy a (8.24) teljesül. Ebből a 2.58. tétel alkalmazásával kiszámítható, hogy

$$\\begin{aligned}
\\mathbf{A}^{(k+1)} &= \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} \\\\
&\\quad - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T.
\\end{aligned} \\tag{8.32}$$

Ezt a formulát *DFP-iterációnak* nevezzük felfedezői után: Davidon (1959) és Flecher, Powell (1963). Erre az iterációra is teljesül 8.17. tétellel analóg konvergencia eredmény.

Ellenőrizhető, hogy a DFP-iterációval generált $\\mathbf{A}^{(k)}$ mátrix inverze kiszámítható a következő rekurzív módon:

$$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}. \\tag{8.33}$$

**8.19. példa.** A DFP-iterációt vizsgáltuk a 8.16. és 8.18. példák feladatára. Ez a módszer is a BFGS-iterációhoz hasonlóan gyorsan konvergál. A sorozat a 8.9. táblázatban látható. $\\quad\\square$

---

*8.9. táblázat. A (8.19) kvázi-Newton módszer DFP-iterációval*

| $k$ | $\\mathbf{p}^{(k)}$ | $f(\\mathbf{p}^{(k)})$ | $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ | $\\dfrac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25682024, 0.70394625) | 1.61396e-01 | 0.32794924 | 1.10818219 |
| 3 | ( 1.09891338, 0.59229507) | 2.00977e-02 | 0.13528576 | 0.41252041 |
| 4 | ( 1.01148073, 0.50204318) | 6.24877e-04 | 0.01166112 | 0.08619621 |
| 5 | ( 1.00103666, 0.50022718) | 4.77384e-06 | 0.00106126 | 0.09100838 |
| 6 | ( 1.00001771, 0.50001111) | 8.01068e-10 | 0.00002090 | 0.01969409 |
| 7 | ( 0.99999976, 0.49999958) | 2.45621e-13 | 0.00000049 | 0.02332123 |
| 8 | ( 1.00000001, 0.50000002) | 4.22000e-16 | 0.00000002 | 0.03601757 |

**Feladatok**

1. Alkalmazza az ebben a szakaszban bevezetett kvázi-Newton módszereket a 8.3. szakasz 1. feladatában felsorolt függvényekre!

2. Ellenőrizze a (8.29) formula levezetését!

3. Igazolja, hogy $\\mathbf{M}^{(k+1)}$ invertálható, ha (8.24) teljesül!

4. Igazolja a (8.30) rekurzív összefüggést!

5. Dolgozza ki a DFP-iteráció levezetésének részleteit!

6. Igazolja a (8.33) rekurzív összefüggést!

---

*Hartung Ferenc, Bevezetés a numerikus analízisbe — Pannon Egyetem*
`,Ve={calculus:{en:Fe,hu:He},golden:{en:Ee,hu:We},simplex:{en:Be,hu:De},gradient:{en:Pe,hu:Ce},linsys:{en:Re,hu:Le},newton:{en:Ge,hu:Oe},quasinewton:{en:Ke,hu:Ue}};function Qe(e,a){var n;return((n=Ve[e])==null?void 0:n[a])??""}function O({meta:e,children:a}){const{t:n,lang:i}=_(),s=Qe(e.id,i);return t.jsx("section",{className:"section",id:e.id,children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{className:"section__head",children:[t.jsxs("span",{className:"eyebrow",children:[n({en:"Section",hu:"Szakasz"})," ",e.no]}),t.jsx("h2",{children:n(e.title)}),t.jsx("p",{children:n(e.blurb)})]}),a,s&&t.jsxs("details",{className:"section__theory",open:!0,children:[t.jsx("summary",{children:n({en:"Full theory",hu:"Teljes elmélet"})}),t.jsx(ae,{markdown:s})]}),t.jsx(Ne,{deck:e.id}),t.jsx(Ie,{deck:e.id})]})})}function Ye(e){const[a,n]=g.useState(0),i=g.useRef([]);return g.useEffect(()=>{i.current=i.current.slice(0,e);const h=new IntersectionObserver(o=>{let r=null;for(const m of o){if(!m.isIntersecting)continue;const l=Number(m.target.dataset.step);(!r||m.intersectionRatio>r.ratio)&&(r={idx:l,ratio:m.intersectionRatio})}r&&n(r.idx)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return i.current.forEach(o=>o&&h.observe(o)),()=>h.disconnect()},[e]),{active:a,register:h=>o=>{i.current[h]=o}}}function K({steps:e,graphic:a}){const{active:n,register:i}=Ye(e.length);return t.jsxs("div",{className:"scrolly",children:[t.jsx("div",{className:"scrolly__sticky",children:t.jsx("div",{className:"scrolly__graphic",children:a(n)})}),t.jsx("div",{className:"scrolly__steps",children:e.map((s,h)=>t.jsxs("article",{ref:i(h),"data-step":h,className:`step${h===n?" is-active":""}`,children:[s.kicker&&t.jsx("div",{className:"step__num",children:s.kicker}),s.title&&t.jsx("h3",{children:s.title}),t.jsx("div",{children:s.body})]},h))})]})}function Je(e,a,n=130,i=130){const s=new Float64Array(n*i);let h=1/0,o=-1/0;for(let r=0;r<i;r++){const m=a.ymin+(a.ymax-a.ymin)*r/(i-1);for(let l=0;l<n;l++){const b=a.xmin+(a.xmax-a.xmin)*l/(n-1),f=e(b,m);s[r*n+l]=f,f<h&&(h=f),f>o&&(o=f)}}return{nx:n,ny:i,...a,vals:s,vmin:h,vmax:o}}function Ze(e,a=14){const n=e.vmin,i=e.vmax;if(!(i>n))return[];const s=[];for(let h=1;h<=a;h++){const o=h/(a+1);s.push(n+(i-n)*o*o)}return s}function Xe(e,a){const n=[],{nx:i,ny:s,vals:h}=e,o=(e.xmax-e.xmin)/(i-1),r=(e.ymax-e.ymin)/(s-1),m=f=>e.xmin+f*o,l=f=>e.ymin+f*r,b=(f,p)=>(a-f)/(p-f);for(let f=0;f<s-1;f++)for(let p=0;p<i-1;p++){const d=h[f*i+p],x=h[f*i+p+1],$=h[(f+1)*i+p+1],c=h[(f+1)*i+p];let u=0;if(d>a&&(u|=1),x>a&&(u|=2),$>a&&(u|=4),c>a&&(u|=8),u===0||u===15)continue;const k=m(p),v=m(p+1),y=l(f),A=l(f+1),W=()=>({x:k+b(d,x)*o,y}),B=()=>({x:v,y:y+b(x,$)*r}),C=()=>({x:k+b(c,$)*o,y:A}),R=()=>({x:k,y:y+b(d,c)*r}),M=($e,de)=>n.push({x1:$e.x,y1:$e.y,x2:de.x,y2:de.y});switch(u){case 1:case 14:M(R(),W());break;case 2:case 13:M(W(),B());break;case 3:case 12:M(R(),B());break;case 4:case 11:M(B(),C());break;case 5:M(R(),C()),M(W(),B());break;case 6:case 9:M(W(),C());break;case 7:case 8:M(R(),C());break;case 10:M(R(),W()),M(B(),C());break}}return n}function ce(e,a,n,i=26){return{...e,w:a,h:n,pad:i}}function L(e,a,n){const i=e.pad+(a-e.xmin)/(e.xmax-e.xmin)*(e.w-2*e.pad),s=e.h-e.pad-(n-e.ymin)/(e.ymax-e.ymin)*(e.h-2*e.pad);return[i,s]}function et(e,a,n){const i=e.xmin+(a-e.pad)/(e.w-2*e.pad)*(e.xmax-e.xmin),s=e.ymin+(e.h-e.pad-n)/(e.h-2*e.pad)*(e.ymax-e.ymin);return[i,s]}function z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function ee(e,a){if(!e)return a;const n=e.match(/^var\((--[\w-]+)\)$/);return n?z(n[1])||a:e}function le(e,a,n){const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(a*i),e.height=Math.round(n*i),e.style.width=`${a}px`,e.style.height=`${n}px`;const s=e.getContext("2d");return s.setTransform(i,0,0,i,0,0),s}function tt(e,a,n){const i=r=>{var l;const m=((l=r.match(/\d+(\.\d+)?/g))==null?void 0:l.map(Number))??[0,0,0];if(r.startsWith("#")){const b=r.replace("#",""),f=b.length===3?b.split("").map(p=>p+p).join(""):b;return[parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]}return m},s=i(e),h=i(a),o=s.map((r,m)=>Math.round(r+(h[m]-r)*n));return`rgb(${o[0]}, ${o[1]}, ${o[2]})`}function X({fn:e,overlay:a,height:n=420,onPick:i}){const{theme:s}=me(),h=g.useRef(null),o=g.useRef(null),[r,m]=g.useState(520),l=g.useMemo(()=>Je(e.f,e.domain,150,150),[e]),b=g.useMemo(()=>e.levels??Ze(l,15),[e,l]),f=g.useMemo(()=>b.map(d=>({lv:d,segs:Xe(l,d)})),[b,l]);g.useEffect(()=>{const d=o.current;if(!d)return;const x=new ResizeObserver($=>{const c=$[0].contentRect.width;c&&m(c)});return x.observe(d),()=>x.disconnect()},[]),g.useEffect(()=>{const d=h.current;if(!d)return;const x=le(d,r,n),$=ce(e.domain,r,n);at(x,$,l,f,e,a)},[r,n,e,l,f,a,s]);const p=d=>{if(!i)return;const $=h.current.getBoundingClientRect(),c=ce(e.domain,r,n),[u,k]=et(c,d.clientX-$.left,d.clientY-$.top);i([u,k])};return t.jsx("div",{className:"plot",ref:o,style:{cursor:i?"crosshair":"default"},children:t.jsx("canvas",{ref:h,onClick:p})})}function at(e,a,n,i,s,h){const o=z("--plot-bg"),r=z("--plot-low"),m=z("--plot-high"),l=z("--plot-contour"),b=z("--plot-axis"),f=z("--plot-ink");e.fillStyle=o,e.fillRect(0,0,a.w,a.h);const p=60,d=60,x=n.vmax-n.vmin||1;for(let c=0;c<d;c++)for(let u=0;u<p;u++){const k=a.xmin+(a.xmax-a.xmin)*(u+.5)/p,v=a.ymin+(a.ymax-a.ymin)*(c+.5)/d,y=s.f(k,v),A=Math.min(1,Math.max(0,(y-n.vmin)/x));e.fillStyle=tt(r,m,Math.sqrt(A));const[W,B]=L(a,k,v),[C,R]=L(a,a.xmin+(a.xmax-a.xmin)*(u+1.5)/p,a.ymin+(a.ymax-a.ymin)*(c-.5)/d);e.globalAlpha=.32,e.fillRect(Math.floor(W)-1,Math.floor(B)-1,Math.ceil(C-W)+2,Math.ceil(R-B)+2)}e.globalAlpha=1,e.strokeStyle=l,e.lineWidth=1,e.beginPath();for(const{segs:c}of i)for(const u of c){const[k,v]=L(a,u.x1,u.y1),[y,A]=L(a,u.x2,u.y2);e.moveTo(k,v),e.lineTo(y,A)}if(e.stroke(),e.strokeStyle=b,e.lineWidth=1,e.globalAlpha=.6,a.ymin<0&&a.ymax>0){const[,c]=L(a,0,0);e.beginPath(),e.moveTo(a.pad,c),e.lineTo(a.w-a.pad,c),e.stroke()}if(a.xmin<0&&a.xmax>0){const[c]=L(a,0,0);e.beginPath(),e.moveTo(c,a.pad),e.lineTo(c,a.h-a.pad),e.stroke()}e.globalAlpha=1;const $=c=>L(a,c[0],c[1]);if(h!=null&&h.triangles){for(const c of h.triangles)if(e.lineJoin="round",e.strokeStyle=z("--plot-path"),e.fillStyle=z("--plot-path"),e.lineWidth=2,e.globalAlpha=.12,e.beginPath(),c.verts.forEach((u,k)=>{const[v,y]=$(u);k===0?e.moveTo(v,y):e.lineTo(v,y)}),e.closePath(),e.fill(),e.globalAlpha=1,e.stroke(),c.verts.forEach((u,k)=>{const[v,y]=$(u);e.fillStyle=k===0?z("--plot-path2"):k===c.verts.length-1?z("--plot-accent"):z("--plot-path"),e.beginPath(),e.arc(v,y,4.5,0,Math.PI*2),e.fill()}),c.trial){const[u,k]=$(c.trial.point);e.strokeStyle=z("--plot-point"),e.setLineDash([4,4]);const[v,y]=c.centroid?$(c.centroid):[u,k];e.beginPath(),e.moveTo(v,y),e.lineTo(u,k),e.stroke(),e.setLineDash([]),e.fillStyle=z("--plot-point"),e.beginPath(),e.arc(u,k,4,0,Math.PI*2),e.fill()}}if(h!=null&&h.paths)for(const c of h.paths){if(c.pts.length<1)continue;const u=ee(c.color,z("--plot-path"));e.strokeStyle=u,e.lineWidth=2,c.dotted&&e.setLineDash([5,5]),e.beginPath(),c.pts.forEach((k,v)=>{const[y,A]=$(k);v===0?e.moveTo(y,A):e.lineTo(y,A)}),e.stroke(),e.setLineDash([]),e.fillStyle=u,c.pts.forEach(k=>{const[v,y]=$(k);e.beginPath(),e.arc(v,y,3,0,Math.PI*2),e.fill()})}if(h!=null&&h.arrow){const[c,u]=$(h.arrow.from),[k,v]=$(h.arrow.to);e.strokeStyle=ee(h.arrow.color,z("--plot-accent")),e.fillStyle=e.strokeStyle,e.lineWidth=2.5,e.beginPath(),e.moveTo(c,u),e.lineTo(k,v),e.stroke();const y=Math.atan2(v-u,k-c);e.beginPath(),e.moveTo(k,v),e.lineTo(k-9*Math.cos(y-.4),v-9*Math.sin(y-.4)),e.lineTo(k-9*Math.cos(y+.4),v-9*Math.sin(y+.4)),e.closePath(),e.fill()}if(h!=null&&h.points)for(const c of h.points){const[u,k]=$(c.p);e.fillStyle=ee(c.color,z("--plot-point")),e.beginPath(),e.arc(u,k,c.r??5,0,Math.PI*2),e.fill(),c.ring&&(e.strokeStyle=o,e.lineWidth=2,e.stroke())}if(h!=null&&h.showMin&&s.min){const[c,u]=$(s.min);e.fillStyle=z("--plot-point"),e.strokeStyle=f,e.lineWidth=2,e.beginPath(),e.arc(c,u,6,0,Math.PI*2),e.fill(),e.stroke()}}function V(e,a=1.6){const[n,i]=g.useState(0),[s,h]=g.useState(!1),o=g.useRef(),r=g.useRef(0);g.useEffect(()=>{n>e-1&&i(Math.max(0,e-1))},[e,n]),g.useEffect(()=>{var d;if(!s)return;if((d=window.matchMedia)==null?void 0:d.call(window,"(prefers-reduced-motion: reduce)").matches){i(e-1),h(!1);return}const p=x=>{x-r.current>1e3/a&&(r.current=x,i($=>$>=e-1?(h(!1),$):$+1)),o.current=requestAnimationFrame(p)};return o.current=requestAnimationFrame(p),()=>{o.current&&cancelAnimationFrame(o.current)}},[s,e,a]);const m=g.useCallback(()=>{i(f=>f>=e-1?0:f),h(f=>!f)},[e]),l=g.useCallback(f=>i(p=>Math.min(e-1,Math.max(0,p+f))),[e]),b=g.useCallback(()=>{i(0),h(!1)},[]);return{i:n,setI:i,playing:s,play:m,step:l,reset:b}}function Q({i:e,count:a,playing:n,onPlay:i,onStep:s,onReset:h,onScrub:o}){const{t:r}=_();return t.jsxs("div",{className:"playbar",children:[t.jsxs("button",{className:"ctl-btn ctl-btn--accent",onClick:i,"aria-label":"play/pause",children:[n?"⏸":"▶"," ",r({en:n?"Pause":"Play",hu:n?"Szünet":"Lejátszás"})]}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(-1),"aria-label":"previous",children:"◀"}),t.jsx("input",{type:"range",min:0,max:Math.max(0,a-1),value:e,onChange:m=>o(Number(m.target.value)),style:{accentColor:"var(--accent)",flex:1,minWidth:90},"aria-label":"step"}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(1),"aria-label":"next",children:"▶"}),t.jsx("button",{className:"ctl-btn",onClick:h,"aria-label":"reset",children:"↺"})]})}function he({label:e,value:a,min:n,max:i,step:s=.01,onChange:h,fmt:o}){return t.jsxs("div",{className:"field",children:[t.jsxs("label",{children:[e," ",t.jsx("b",{children:o?o(a):a})]}),t.jsx("input",{type:"range",min:n,max:i,step:s,value:a,onChange:r=>h(Number(r.target.value))})]})}function ne({label:e,value:a,options:n,onChange:i}){return t.jsxs("div",{className:"field",children:[t.jsx("label",{children:e}),t.jsx("select",{value:a,onChange:s=>i(s.target.value),children:n.map(s=>t.jsx("option",{value:s.value,children:s.label},s.value))})]})}function U({children:e,label:a}){const{t:n}=_(),i=a??{en:"Show the math",hu:"Mutasd a matekot"};return t.jsxs("details",{className:"mathdetails",children:[t.jsxs("summary",{children:[t.jsx("span",{className:"chev",children:"▶"}),t.jsxs("span",{children:["∑ ",n(i)]})]}),t.jsx("div",{className:"mathdetails__body",children:e})]})}function D({emoji:e="💡",children:a}){return t.jsxs("div",{className:"callout",children:[t.jsx("span",{className:"emoji","aria-hidden":!0,children:e}),t.jsx("p",{children:a})]})}function q({label:e,proof:a=!1,children:n}){return t.jsxs("div",{className:`theorem${a?" proof":""}`,children:[t.jsx("div",{className:"lab",children:e}),n]})}const I={id:"rosen2y",label:"f(x,y) = (x²−2y)² + 2(x−1)²",tex:"f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2",f:(e,a)=>(e*e-2*a)**2+2*(e-1)**2,grad:(e,a)=>{const n=e*e-2*a;return[4*e*n+4*(e-1),-4*n]},hess:(e,a)=>[[12*e*e-8*a+4,-8*e],[-8*e,8]],domain:{xmin:-2.6,xmax:2.2,ymin:-1.2,ymax:5.1},min:[1,.5]},nt={id:"dome",label:"f(x,y) = 4 − 3x² − y²",tex:"f(x,y) = 4 - 3x^2 - y^2",f:(e,a)=>4-3*e*e-a*a,grad:(e,a)=>[-6*e,-2*a],hess:()=>[[-6,0],[0,-2]],domain:{xmin:-1.5,xmax:1.5,ymin:-1.5,ymax:1.5},min:[0,0]},it={id:"bowl",label:"f(x,y) = ½x² + 9⁄2 y²",tex:"f(x,y) = \\tfrac12 x^2 + \\tfrac92 y^2",f:(e,a)=>.5*e*e+4.5*a*a,grad:(e,a)=>[e,9*a],hess:()=>[[1,0],[0,9]],domain:{xmin:-10,xmax:10,ymin:-3,ymax:3},min:[0,0]},st={id:"saddle",label:"f(x,y) = x² − y²",tex:"f(x,y) = x^2 - y^2",f:(e,a)=>e*e-a*a,grad:(e,a)=>[2*e,-2*a],hess:()=>[[2,0],[0,-2]],domain:{xmin:-2,xmax:2,ymin:-2,ymax:2},min:[0,0]},ht={id:"quad1d",label:"f(x) = x² − 0.8x + 1",tex:"f(x) = x^2 - 0.8x + 1",f:e=>e*e-.8*e+1,domain:{a:-1,b:2},min:.4},ot={id:"cubic1d",label:"f(x) = x³ − 3x + 1",tex:"f(x) = x^3 - 3x + 1",f:e=>e**3-3*e+1,domain:{a:0,b:2},min:1},rt={id:"expbump",label:"f(x) = 1 − 10x·e^(−x)",tex:"f(x) = 1 - 10x e^{-x}",f:e=>1-10*e*Math.exp(-e),domain:{a:0,b:2},min:1},xe=[ht,ot,rt],E=(e,a)=>e.map((n,i)=>n+a[i]),T=(e,a)=>e.map((n,i)=>n-a[i]),j=(e,a)=>e.map(n=>n*a),N=(e,a)=>e.reduce((n,i,s)=>n+i*a[s],0),S=e=>Math.sqrt(N(e,e)),fe=(e,a)=>S(T(e,a));function pe(e,a){return e.map(n=>N(n,a))}function ye(e,a){const n=e.length,i=e.map((s,h)=>[...s,a[h]]);for(let s=0;s<n;s++){let h=s;for(let o=s+1;o<n;o++)Math.abs(i[o][s])>Math.abs(i[h][s])&&(h=o);if(Math.abs(i[h][s])<1e-14)return null;[i[s],i[h]]=[i[h],i[s]];for(let o=0;o<n;o++){if(o===s)continue;const r=i[o][s]/i[s][s];for(let m=s;m<=n;m++)i[o][m]-=r*i[s][m]}}return i.map((s,h)=>s[n]/s[h])}function mt(e){const a=e[0][0],n=e[1][1],i=a*n-e[0][1]*e[1][0];return Math.abs(i)<1e-9?"degenerate":i<0?"saddle":a>0?"min":"max"}const lt=P.find(e=>e.id==="calculus"),ve=[{fn:it,at:[0,0]},{fn:nt,at:[0,0]},{fn:st,at:[0,0]}];function ft(){const{t:e}=_(),[a,n]=g.useState(0),[i,s]=g.useState(!0),[h,o]=g.useState(null),r=ve[a],m=g.useMemo(()=>mt(r.fn.hess(r.at[0],r.at[1])),[r]),l=[{kicker:e({en:"Where to look",hu:"Hol keressünk"}),title:e({en:"Minima hide where the slope dies",hu:"A minimum ott lapul, ahol a meredekség elhal"}),body:t.jsx("p",{children:e({en:"At any local minimum or maximum of a smooth function, every partial derivative is zero: ∇f = 0. These flat spots — critical points — are the only candidates.",hu:"Egy sima függvény minden lokális minimumában vagy maximumában minden parciális derivált nulla: ∇f = 0. Ezek a lapos pontok — a kritikus pontok — az egyetlen jelöltek."})})},{kicker:e({en:"Not enough",hu:"Nem elég"}),title:e({en:"Flat ≠ minimum",hu:"Lapos ≠ minimum"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"A zero gradient could be a valley bottom, a hilltop, or a saddle (down one way, up another). Toggle the gradient field: arrows die at the critical point but say nothing about its type.",hu:"A nulla gradiens lehet völgyalja, hegytető vagy nyeregpont (egyik irányban le, másikban fel). Kapcsold be a gradiensmezőt: a nyilak elhalnak a kritikus pontban, de a típusáról nem árulkodnak."})}),t.jsx(D,{emoji:"🪑",children:e({en:"A saddle is the classic trap: ∇f = 0, yet it's neither a min nor a max.",hu:"A nyeregpont a klasszikus csapda: ∇f = 0, mégsem minimum, sem maximum."})})]})},{kicker:e({en:"The test",hu:"A teszt"}),title:e({en:"Ask the curvature (Hessian)",hu:"Kérdezd a görbületet (Hesse)"}),body:t.jsx("p",{children:e({en:"The Hessian — the matrix of second derivatives — decides. Positive definite ⇒ minimum, negative definite ⇒ maximum, mixed signs ⇒ saddle. For 2D, just check D = fₓₓf_yy − fₓy².",hu:"A Hesse-mátrix — a második deriváltak mátrixa — dönt. Pozitív definit ⇒ minimum, negatív definit ⇒ maximum, vegyes előjelek ⇒ nyeregpont. 2D-ben elég a D = fₓₓf_yy − fₓy² ellenőrzése."})})},{kicker:e({en:"Your turn",hu:"Te jössz"}),title:e({en:"Min, max, or saddle?",hu:"Minimum, maximum vagy nyereg?"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The marked dot is a critical point of the function on the right. Read the contours and make the call — then check the Hessian verdict.",hu:"A megjelölt pont a jobb oldali függvény kritikus pontja. Olvasd le a szintvonalakból, és dönts — majd nézd meg a Hesse-mátrix ítéletét."})}),t.jsx("div",{className:"quiz",children:["min","max","saddle"].map(b=>t.jsx("button",{className:h===b?b===m?"correct":"wrong":"",onClick:()=>o(b),children:e({min:{en:"Minimum",hu:"Minimum"},max:{en:"Maximum",hu:"Maximum"},saddle:{en:"Saddle",hu:"Nyeregpont"},degenerate:{en:"Degenerate",hu:"Elfajuló"}}[b])},b))}),h&&t.jsxs("p",{style:{marginTop:10},children:[e(h===m?{en:"✅ Correct! ",hu:"✅ Helyes! "}:{en:"❌ Not quite — ",hu:"❌ Nem egészen — "}),e({en:`the Hessian here is ${oe(m,"en")}.`,hu:`az itteni Hesse-mátrix ${oe(m,"hu")}.`})]})]})}];return t.jsxs(O,{meta:lt,children:[t.jsx(K,{steps:l,graphic:()=>t.jsx(bt,{q:r,qi:a,setQi:b=>{n(b),o(null)},showField:i,setShowField:s,truth:m,revealed:h!=null})}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"Necessary condition",hu:"Szükséges feltétel"}),children:[t.jsx("p",{children:e({en:"If f has a local extremum at a, then",hu:"Ha f-nek lokális szélsőértéke van a-ban, akkor"})}),t.jsx(w,{block:!0,children:"\\frac{\\partial f}{\\partial x_i}(\\mathbf a) = 0 \\quad (i = 1,\\dots,n), \\qquad \\text{i.e. } \\nabla f(\\mathbf a) = \\mathbf 0."})]}),t.jsxs(q,{label:e({en:"Second-order test (2D)",hu:"Másodrendű teszt (2D)"}),proof:!0,children:[t.jsx(w,{block:!0,children:"D = \\frac{\\partial^2 f}{\\partial x^2}\\frac{\\partial^2 f}{\\partial y^2} - \\Big(\\frac{\\partial^2 f}{\\partial x\\,\\partial y}\\Big)^2."}),t.jsx("p",{children:e({en:"D > 0 and fₓₓ > 0 ⇒ minimum; D > 0 and fₓₓ < 0 ⇒ maximum; D < 0 ⇒ saddle. In general: the Hessian's definiteness decides.",hu:"D > 0 és fₓₓ > 0 ⇒ minimum; D > 0 és fₓₓ < 0 ⇒ maximum; D < 0 ⇒ nyeregpont. Általában: a Hesse-mátrix definitsége dönt."})})]})]})]})}function oe(e,a){return{min:{en:"positive definite (a minimum)",hu:"pozitív definit (minimum)"},max:{en:"negative definite (a maximum)",hu:"negatív definit (maximum)"},saddle:{en:"indefinite (a saddle)",hu:"indefinit (nyeregpont)"},degenerate:{en:"degenerate",hu:"elfajuló"}}[e][a]}function bt({q:e,qi:a,setQi:n,showField:i,setShowField:s,truth:h,revealed:o}){const{t:r}=_(),l={paths:g.useMemo(()=>{if(!i)return[];const b=[],f=e.fn.domain,p=7;for(let d=1;d<p;d++)for(let x=1;x<p;x++){const $=f.xmin+(f.xmax-f.xmin)*d/p,c=f.ymin+(f.ymax-f.ymin)*x/p,u=e.fn.grad($,c),k=Math.hypot(u[0],u[1])||1,v=Math.min(.13*(f.xmax-f.xmin),.13*(f.xmax-f.xmin)*k/(k+1));b.push({from:[$,c],to:[$-u[0]/k*v,c-u[1]/k*v]})}return b},[e,i]).map(b=>({pts:[b.from,b.to],color:"var(--plot-accent)"})),points:[{p:e.at,ring:!0,color:o?h==="min"?"var(--plot-path2)":h==="max"?"var(--plot-path)":"var(--warm)":"var(--plot-point)",r:7}]};return t.jsxs("div",{children:[t.jsx(X,{fn:e.fn,overlay:l,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:t.jsx(w,{children:e.fn.tex})})]}),t.jsxs("span",{children:[t.jsxs("span",{className:"k",children:["∇f(",e.at.join(", "),")"]})," ",t.jsx("b",{children:"= (0, 0)"})]}),o&&t.jsxs("span",{children:[t.jsx("span",{className:"k",children:r({en:"verdict",hu:"ítélet"})})," ",t.jsx("b",{children:oe(h,"en").split(" (")[0]})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(ne,{label:r({en:"Pick a critical point",hu:"Válassz kritikus pontot"}),value:String(a),onChange:b=>n(Number(b)),options:ve.map((b,f)=>({value:String(f),label:b.fn.label}))}),t.jsx("button",{className:`ctl-btn${i?" ctl-btn--accent":""}`,onClick:()=>s(!i),children:r({en:"Gradient field",hu:"Gradiensmező"})})]})]})}function $t({fn:e,frame:a,height:n=360}){const{theme:i}=me(),s=g.useRef(null),h=g.useRef(null),[o,r]=g.useState(520);return g.useEffect(()=>{const m=h.current;if(!m)return;const l=new ResizeObserver(b=>{const f=b[0].contentRect.width;f&&r(f)});return l.observe(m),()=>l.disconnect()},[]),g.useEffect(()=>{const m=s.current;if(!m)return;const l=le(m,o,n);dt(l,o,n,e,a)},[o,n,e,a,i]),t.jsx("div",{className:"plot",ref:h,children:t.jsx("canvas",{ref:s})})}function dt(e,a,n,i,s){const{a:o,b:r}=i.domain,m=240;let l=1/0,b=-1/0;const f=[];for(let $=0;$<=m;$++){const c=o+(r-o)*$/m,u=i.f(c);f.push(u),u<l&&(l=u),u>b&&(b=u)}const p=(b-l)*.12||1;l-=p,b+=p;const d=$=>40+($-o)/(r-o)*(a-80),x=$=>n-40-($-l)/(b-l)*(n-80);e.fillStyle=z("--plot-bg"),e.fillRect(0,0,a,n),e.strokeStyle=z("--plot-grid"),e.lineWidth=1;for(let $=0;$<=6;$++){const c=40+(a-80)*$/6;e.beginPath(),e.moveTo(c,40),e.lineTo(c,n-40),e.stroke()}s&&(e.fillStyle=z("--accent-soft"),e.globalAlpha=.7,e.fillRect(d(s.a),40,d(s.b)-d(s.a),n-80),e.globalAlpha=1),e.strokeStyle=z("--plot-point"),e.lineWidth=2.5,e.beginPath();for(let $=0;$<=m;$++){const c=o+(r-o)*$/m,u=d(c),k=x(f[$]);$===0?e.moveTo(u,k):e.lineTo(u,k)}if(e.stroke(),s){const $=(c,u,k,v)=>{e.strokeStyle=k,e.fillStyle=k,e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(d(c),x(u)),e.lineTo(d(c),n-40),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(d(c),x(u),5,0,Math.PI*2),e.fill(),e.font="600 12px ui-monospace, monospace",e.fillText(v,d(c)-4,n-40+16)};e.fillStyle=z("--plot-axis"),e.font="600 11px ui-monospace, monospace",e.fillText("a",d(s.a)-3,n-40+16),e.fillText("b",d(s.b)-3,n-40+16),$(s.y,s.fy,z("--plot-path2"),"y"),$(s.x,s.fx,z("--plot-accent"),"x")}}const Y=(Math.sqrt(5)-1)/2;function ct(e,a=.01,n=40){let i=e.domain.a,s=e.domain.b,h=i+Y*(s-i),o=i+(1-Y)*(s-i),r=e.f(h),m=e.f(o),l=2;const b=[{k:0,a:i,b:s,x:h,y:o,fx:r,fy:m,evals:l,keep:"init"}];let f=0;for(;s-i>a&&f<n;)f++,r>m?(s=h,h=o,r=m,o=i+(1-Y)*(s-i),m=e.f(o),l++,b.push({k:f,a:i,b:s,x:h,y:o,fx:r,fy:m,evals:l,keep:"left"})):(i=o,o=h,m=r,h=i+Y*(s-i),r=e.f(h),l++,b.push({k:f,a:i,b:s,x:h,y:o,fx:r,fy:m,evals:l,keep:"right"}));return b}const pt=e=>(e.a+e.b)/2,kt=P.find(e=>e.id==="golden");function ut(){const{t:e}=_(),[a,n]=g.useState("quad1d"),i=xe.find(m=>m.id===a),s=g.useMemo(()=>ct(i,.01,40),[i]),h=V(s.length),o=[0,0,1,2,s.length-1],r=[{kicker:e({en:"The setup",hu:"A felállás"}),title:e({en:"One valley, one bottom",hu:"Egy völgy, egy mélypont"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Suppose f is unimodal on [a, b]: it goes down, then up, with a single lowest point. We don't need its derivative — only the ability to evaluate it.",hu:"Tegyük fel, hogy f unimodális az [a, b]-n: előbb csökken, majd nő, egyetlen mélyponttal. Nincs szükség a deriváltjára — csak ki kell tudnunk értékelni."})}),t.jsx(D,{emoji:"🎯",children:e({en:"Goal: trap the minimum in shrinking nested intervals, like the bisection method — but for minimizing instead of root-finding.",hu:"Cél: egyre szűkülő, egymásba ágyazott intervallumokba zárni a minimumot, mint a felezésnél — de minimumkeresésre."})})]})},{kicker:e({en:"Two probes",hu:"Két próba"}),title:e({en:"Peek at two inside points",hu:"Két belső pontnál kukucskálunk"}),body:t.jsx("p",{children:e({en:"Place two interior points y < x. Comparing f(y) and f(x) tells us which side the minimum can't be on — so we can throw that side away.",hu:"Helyezzünk el két belső pontot, y < x. Az f(y) és f(x) összevetése megmondja, melyik oldalon nem lehet a minimum — azt eldobhatjuk."})})},{kicker:e({en:"Discard",hu:"Eldobás"}),title:e({en:"Throw away a slice",hu:"Dobjunk el egy szeletet"}),body:t.jsx("p",{children:e({en:"If f(x) > f(y) the minimum lies in [a, x]; otherwise in [y, b]. Either way the bracket gets shorter while still containing the minimum.",hu:"Ha f(x) > f(y), a minimum az [a, x]-ben van; különben az [y, b]-ben. Akárhogy is, a befogó intervallum rövidül, de továbbra is tartalmazza a minimumot."})})},{kicker:e({en:"The trick",hu:"A trükk"}),title:e({en:"Why golden? Reuse a point",hu:"Miért arany? Pontot újrahasználunk"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Pick the split ratio so that one old probe becomes a probe of the new interval. Then every step costs just one new function evaluation, not two.",hu:"Válaszd a felosztási arányt úgy, hogy az egyik régi próbapont az új intervallum próbapontja legyen. Így minden lépés csak egy új függvénykiértékelésbe kerül, nem kettőbe."})}),t.jsxs("p",{children:[e({en:"That requirement forces the golden ratio ",hu:"Ez a követelmény az aranymetszést kényszeríti ki: "}),t.jsx(w,{children:"r = \\tfrac{\\sqrt5 - 1}{2} \\approx 0.618"}),"."]})]})},{kicker:e({en:"Done",hu:"Kész"}),title:e({en:"Squeeze to tolerance",hu:"Szorítsd a tűréshatárig"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Repeat until the interval is shorter than your tolerance ε, then report its midpoint. The width shrinks by the factor r every step — geometric, predictable convergence.",hu:"Ismételd, amíg az intervallum rövidebb nem lesz az ε tűrésnél, majd add vissza a felezőpontját. A szélesség minden lépésben r-szeresére csökken — geometrikus, kiszámítható konvergencia."})}),t.jsx(D,{emoji:"✨",children:e({en:"After n steps the bracket has length (b−a)·rⁿ. Want 3 digits? You can compute n in advance.",hu:"n lépés után a befogó hossza (b−a)·rⁿ. Kell 3 jegy? n előre kiszámolható."})})]})}];return t.jsxs(O,{meta:kt,children:[t.jsx(K,{steps:r,graphic:m=>t.jsx(gt,{fn:i,fnId:a,setFnId:n,frames:s,player:h,targetFrame:o[m]??0})}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"The golden ratio, derived",hu:"Az aranymetszés, levezetve"}),children:[t.jsx("p",{children:e({en:"Place points so the two candidate intervals have equal length r(b−a):",hu:"Helyezd el a pontokat úgy, hogy a két jelölt intervallum hossza azonos legyen, r(b−a):"})}),t.jsx(w,{block:!0,children:"x = a + r(b-a), \\qquad y = a + (1-r)(b-a)."}),t.jsx("p",{children:e({en:"Requiring the surviving probe to land exactly where the next step needs it gives",hu:"Megkövetelve, hogy a megmaradó próbapont pont oda essen, ahol a következő lépésnek kell, kapjuk:"})}),t.jsx(w,{block:!0,children:"r^2 + r - 1 = 0 \\;\\Longrightarrow\\; r = \\frac{\\sqrt5 - 1}{2} \\approx 0.61803."})]}),t.jsxs(q,{label:e({en:"Steps to reach ε",hu:"Lépésszám az ε eléréséhez"}),proof:!0,children:[t.jsx(w,{block:!0,children:"n \\ge \\dfrac{\\log\\!\\big(\\varepsilon/(b-a)\\big)}{\\log r}."}),t.jsx("p",{children:e({en:"For f(x)=x²−0.8x+1 on [−1, 2] with ε = 0.005, this gives n ≥ 13.3, i.e. 14 steps — exactly what the demo needs.",hu:"Az f(x)=x²−0.8x+1 függvényre a [−1, 2]-n, ε = 0.005 mellett ez n ≥ 13.3, azaz 14 lépés — pontosan annyi, amennyit a demó igényel."})})]})]})]})}function gt({fn:e,fnId:a,setFnId:n,frames:i,player:s,targetFrame:h}){const{t:o}=_();g.useEffect(()=>{s.playing||s.setI(h)},[h]);const r=i[Math.min(s.i,i.length-1)],m=r.b-r.a,l=pt(r);return t.jsxs("div",{children:[t.jsx($t,{fn:e,frame:r,height:340}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"r"})," ",t.jsx("b",{children:Y.toFixed(5)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"[a, b]"})," ",t.jsxs("b",{children:["[",r.a.toFixed(3),", ",r.b.toFixed(3),"]"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"width",hu:"szélesség"})})," ",t.jsx("b",{children:m.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"f-evals",hu:"kiértékelés"})})," ",t.jsx("b",{children:r.evals})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"midpoint",hu:"felezőpont"})})," ",t.jsx("b",{children:l.toFixed(5)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Q,{i:s.i,count:i.length,playing:s.playing,onPlay:s.play,onStep:s.step,onReset:s.reset,onScrub:s.setI}),t.jsx(ne,{label:o({en:"Function",hu:"Függvény"}),value:a,onChange:n,options:xe.map(b=>({value:b.id,label:b.label}))})]})]})}const xt=(e,a)=>({v:a,f:e.f(a[0],a[1])});function J(e,a){return a.map(n=>xt(e,n)).sort((n,i)=>n.f-i.f)}function Z(e,a,n,i,s){return{k:e,verts:a.map(h=>h.v),fvals:a.map(h=>h.f),centroid:i,trial:s,action:n}}function yt(e,a,n=26){let i=J(e,a);const s=[Z(0,i,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let h=1;h<=n;h++){const o=i[0],r=i[i.length-1],m=i.slice(0,-1),l=j(m.reduce((p,d)=>E(p,d.v),[0,0]),1/m.length),b=T(j(l,2),r.v);if(e.f(b[0],b[1])<r.f)i=J(e,[...m.map(p=>p.v),b]),s.push(Z(h,i,{en:"Reflection accepted",hu:"Tükrözés elfogadva"},l,{kind:"reflect",point:b}));else{const p=i.map(d=>d===o?d.v:E(o.v,j(T(d.v,o.v),.5)));i=J(e,p),s.push(Z(h,i,{en:"Shrink toward best vertex",hu:"Zsugorítás a legjobb csúcs felé"},l))}}return s}function vt(e,a,n=1.4,i=.7,s=20){let h=J(e,a);const o=[Z(0,h,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let r=1;r<=s;r++){const m=h[0],l=h[h.length-1],b=h[h.length-2],f=h.slice(0,-1),p=j(f.reduce((k,v)=>E(k,v.v),[0,0]),1/f.length),d=T(j(p,2),l.v),x=e.f(d[0],d[1]);let $,c,u;if(x<m.f){const k=E(p,j(T(d,p),n));e.f(k[0],k[1])<m.f?(u=[...f.map(y=>y.v),k],$={en:"Expansion accepted",hu:"Megnyújtás elfogadva"},c={kind:"expand",point:k}):(u=[...f.map(y=>y.v),d],$={en:"Reflection (no expansion)",hu:"Tükrözés (nincs nyújtás)"},c={kind:"reflect",point:d})}else if(x<b.f)u=[...f.map(k=>k.v),d],$={en:"Reflection accepted",hu:"Tükrözés elfogadva"},c={kind:"reflect",point:d};else{const k=l.f<x?T(p,j(T(d,p),i)):E(p,j(T(d,p),i));e.f(k[0],k[1])<Math.min(l.f,x)?(u=[...f.map(y=>y.v),k],$={en:"Contraction accepted",hu:"Összehúzás elfogadva"},c={kind:"contract",point:k}):(u=h.map(y=>y===m?y.v:E(m.v,j(T(y.v,m.v),.5))),$={en:"Shrink to best",hu:"Zsugorítás a legjobbhoz"})}h=J(e,u),o.push(Z(r,h,$,p,c))}return o}const zt=P.find(e=>e.id==="simplex"),ke=[[-2,4],[-1,4],[-1.5,5]];function _t(){const{t:e}=_(),[a,n]=g.useState("nm"),[i,s]=g.useState(1.4),[h,o]=g.useState(.7),r=g.useMemo(()=>a==="simplex"?yt(I,ke,26):vt(I,ke,i,h,22),[a,i,h]),m=V(r.length),l=[0,1,2,3,r.length-1],b=[{kicker:e({en:"No derivatives",hu:"Derivált nélkül"}),title:e({en:"Send in a triangle",hu:"Küldj be egy háromszöget"}),body:t.jsx("p",{children:e({en:"These methods never compute a gradient. They keep a shape — for two variables, a triangle (a simplex) — and move it downhill using only function values at its corners.",hu:"Ezek a módszerek sosem számolnak gradienst. Egy alakzatot tartanak fenn — két változóra háromszöget (szimplexet) — és csak a sarkokban felvett függvényértékek alapján mozgatják lefelé."})})},{kicker:e({en:"Reflect",hu:"Tükrözés"}),title:e({en:"Flip the worst corner",hu:"Fordítsd át a legrosszabb sarkot"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Find the worst vertex (highest f). Reflect it through the centroid of the others — the dotted line — to a trial point on the far side.",hu:"Keresd meg a legrosszabb csúcsot (legnagyobb f). Tükrözd a többiek súlypontján át — a szaggatott vonal mentén — egy próbapontba a túloldalon."})}),t.jsx(D,{emoji:"🟢",children:e({en:"Green = best vertex, amber = worst, the open dot = trial point being tested.",hu:"Zöld = legjobb csúcs, borostyán = legrosszabb, az üres pont = a tesztelt próbapont."})})]})},{kicker:e({en:"Expand / contract",hu:"Nyújtás / húzás"}),title:e({en:"Greedy or cautious",hu:"Mohó vagy óvatos"}),body:t.jsx("p",{children:e({en:"Nelder–Mead is adaptive: if a reflection is great, expand further (factor α); if it's poor, contract back (factor β); if even that fails, shrink toward the best vertex.",hu:"A Nelder–Mead alkalmazkodó: ha a tükrözés remek, nyújts tovább (α tényező); ha gyenge, húzd vissza (β tényező); ha még az sem segít, zsugorítsd a legjobb csúcs felé."})})},{kicker:e({en:"Crawl down",hu:"Lekúszás"}),title:e({en:"The amoeba walks",hu:"Az amőba sétál"}),body:t.jsx("p",{children:e({en:"Repeating these moves, the triangle tumbles and stretches down the valley — which is why Nelder–Mead is nicknamed the “amoeba” method.",hu:"E lépéseket ismételve a háromszög bukfencezve és nyúlva gurul le a völgyben — ezért becézik a Nelder–Mead-et „amőba” módszernek."})})},{kicker:e({en:"Tune it",hu:"Hangold"}),title:e({en:"Simplex vs Nelder–Mead",hu:"Szimplex kontra Nelder–Mead"}),body:t.jsx("p",{children:e({en:"Switch to the plain simplex (reflect-or-shrink only) and compare. Then play with α and β — bigger α is bolder, smaller β contracts harder.",hu:"Válts az egyszerű szimplexre (csak tükrözés vagy zsugorítás) és hasonlítsd össze. Aztán játssz az α és β értékkel — nagyobb α merészebb, kisebb β erősebben húz."})})}];return t.jsxs(O,{meta:zt,children:[t.jsx(K,{steps:b,graphic:f=>t.jsx(wt,{frames:r,player:m,targetFrame:l[f]??0,variant:a,setVariant:n,alpha:i,setAlpha:s,beta:h,setBeta:o})}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"The moves",hu:"A lépések"}),children:[t.jsx("p",{children:e({en:"Order vertices f(x⁰) ≤ … ≤ f(xⁿ); centroid of the best n:",hu:"Rendezd a csúcsokat f(x⁰) ≤ … ≤ f(xⁿ); a legjobb n súlypontja:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_c = \\tfrac1n\\textstyle\\sum_{i=0}^{n-1}\\mathbf x^{(i)}, \\qquad \\mathbf x_r = 2\\mathbf x_c - \\mathbf x^{(n)}."}),t.jsx("p",{children:e({en:"Expansion and contraction:",hu:"Nyújtás és húzás:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_e = \\mathbf x_c + \\alpha(\\mathbf x_r - \\mathbf x_c), \\qquad \\mathbf x_z = \\mathbf x_c \\pm \\beta(\\mathbf x_r - \\mathbf x_c)."})]}),t.jsxs(q,{label:e({en:"Stopping",hu:"Megállás"}),proof:!0,children:[t.jsx("p",{children:e({en:"Stop when the simplex is tiny, or when the spread of values is small:",hu:"Állj meg, ha a szimplex apró, vagy ha az értékek szórása kicsi:"})}),t.jsx(w,{block:!0,children:"\\sigma = \\sqrt{\\tfrac1{n+1}\\textstyle\\sum_{i=0}^{n}\\big(f(\\mathbf x^{(i)}) - \\bar f\\big)^2} < \\text{tol}."})]})]})]})}function wt({frames:e,player:a,targetFrame:n,variant:i,setVariant:s,alpha:h,setAlpha:o,beta:r,setBeta:m}){const{t:l}=_();g.useEffect(()=>{a.playing||a.setI(n)},[n]);const b=Math.min(a.i,e.length-1),f=e[b],p={triangles:[{verts:f.verts,centroid:f.centroid,trial:f.trial}],showMin:!0},d=Math.min(...f.fvals);return t.jsxs("div",{children:[t.jsx(X,{fn:I,overlay:p,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:f.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:l({en:"action",hu:"lépés"})})," ",t.jsx("b",{children:l(f.action)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:l({en:"best f",hu:"legjobb f"})})," ",t.jsx("b",{children:d.toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Q,{i:a.i,count:e.length,playing:a.playing,onPlay:a.play,onStep:a.step,onReset:a.reset,onScrub:a.setI}),t.jsx(ne,{label:l({en:"Method",hu:"Módszer"}),value:i,onChange:x=>s(x),options:[{value:"nm",label:"Nelder–Mead"},{value:"simplex",label:l({en:"Plain simplex",hu:"Egyszerű szimplex"})}]}),i==="nm"&&t.jsxs(t.Fragment,{children:[t.jsx(he,{label:"α",value:h,min:1.1,max:2.5,step:.1,onChange:o,fmt:x=>x.toFixed(1)}),t.jsx(he,{label:"β",value:r,min:.2,max:.9,step:.1,onChange:m,fmt:x=>x.toFixed(1)})]})]})]})}function ze(e,a){return{frames:a.map((i,s)=>{const h=e.grad(i[0],i[1]);return{k:s,p:i,fval:e.f(i[0],i[1]),grad:h,err:e.min?fe(i,e.min):void 0}}),points:a}}function Tt(e,a,n=.3,i=24){const s=[a];let h=a;for(let o=0;o<i;o++){const r=e.grad(h[0],h[1]),m=S(r);if(m<1e-9)break;h=T(h,j(r,n/m)),s.push(h)}return ze(e,s)}function jt(e,a,n,i=3,s=40){const h=(Math.sqrt(5)-1)/2;let o=0,r=i;const m=d=>{const x=E(a,j(n,d));return e.f(x[0],x[1])};let l=o+h*(r-o),b=o+(1-h)*(r-o),f=m(l),p=m(b);for(let d=0;d<s&&r-o>1e-6;d++)f>p?(r=l,l=b,f=p,b=o+(1-h)*(r-o),p=m(b)):(o=b,b=l,p=f,l=o+h*(r-o),f=m(l));return(o+r)/2}function _e(e,a,n=14){const i=[a];let s=a;for(let h=0;h<n;h++){const o=e.grad(s[0],s[1]);if(S(o)<1e-8)break;const r=j(o,-1),m=jt(e,s,r);s=E(s,j(r,m)),i.push(s)}return ze(e,i)}const qt=P.find(e=>e.id==="gradient");function At(){const{t:e}=_(),a=I,[n,i]=g.useState([-1,4]),[s,h]=g.useState("constant"),[o,r]=g.useState(.3),m=g.useMemo(()=>s==="constant"?Tt(a,n,o,26):_e(a,n,16),[a,n,s,o]),l=V(m.points.length),b=[0,1,2,m.points.length-1,m.points.length-1],f=[{kicker:e({en:"The idea",hu:"Az ötlet"}),title:e({en:"Walk straight downhill",hu:"Lefelé, egyenesen"}),body:t.jsx("p",{children:e({en:"From any point, the steepest downhill direction is the negative gradient −∇f. The gradient method just keeps stepping that way.",hu:"Bármely pontból a legmeredekebb lefelé irány a negatív gradiens, −∇f. A gradiens módszer egyszerűen mindig arra lép."})})},{kicker:e({en:"Perpendicular",hu:"Merőleges"}),title:e({en:"Gradient ⟂ contour",hu:"Gradiens ⟂ szintvonal"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The gradient is always perpendicular to the contour line through that point — so each step crosses the level curves at a right angle.",hu:"A gradiens mindig merőleges a ponton átmenő szintvonalra — így minden lépés derékszögben metszi a szintvonalakat."})}),t.jsx(D,{emoji:"🧭",children:e({en:"The orange arrow is the descent direction. Click anywhere on the plot to drop a new starting point!",hu:"A narancs nyíl a lejtés iránya. Kattints bárhová az ábrán egy új kezdőpontért!"})})]})},{kicker:e({en:"Step size",hu:"Lépésköz"}),title:e({en:"How far each step?",hu:"Milyen messze lépjünk?"}),body:t.jsx("p",{children:e({en:"With a constant step you never land exactly on the minimum — you orbit it. The optimal method instead line-searches for the best step each time.",hu:"Állandó lépésközzel sosem érsz pontosan a minimumba — körözöl körülötte. Az optimális módszer ehelyett minden lépésben a legjobb lépéshosszt keresi."})})},{kicker:e({en:"The catch",hu:"A bökkenő"}),title:e({en:"Zig-zag in the valley",hu:"Cikcakk a völgyben"}),body:t.jsx("p",{children:e({en:"Consecutive optimal steps are perpendicular, so in a long narrow valley the path bounces side to side and creeps forward slowly. Convergence is only linear.",hu:"Az egymást követő optimális lépések merőlegesek, ezért egy hosszú, keskeny völgyben a pálya oldalról oldalra pattog és lassan kúszik előre. A konvergencia csak lineáris."})})},{kicker:e({en:"Try it",hu:"Próbáld ki"}),title:e({en:"Compare the two modes",hu:"Hasonlítsd össze a két módot"}),body:t.jsx("p",{children:e({en:"Switch between constant and optimal steps, drag the step-size slider, and click different starts. Watch the path and the error readout react.",hu:"Válts az állandó és az optimális lépés között, húzd a lépésköz-csúszkát, és kattints különböző kezdőpontokra. Figyeld, hogyan reagál a pálya és a hiba-kijelző."})})}];return t.jsxs(O,{meta:qt,children:[t.jsx(K,{steps:f,graphic:p=>t.jsx(Mt,{result:m,player:l,targetFrame:b[p]??0,mode:s,setMode:h,h:o,setH:r,onPick:i})}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"Steepest descent",hu:"Legmeredekebb lejtés"}),children:[t.jsx("p",{children:e({en:"Among all unit directions u, the directional derivative is most negative for",hu:"Az összes u egységirány közül az iránymenti derivált a következőre a legnegatívabb:"})}),t.jsx(w,{block:!0,children:"\\mathbf{u} = -\\,\\frac{f'(\\mathbf p)}{\\lVert f'(\\mathbf p)\\rVert_2}, \\qquad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\alpha_k\\, f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"Constant step: αₖ = h / ‖f′(pₖ)‖. Optimal step: choose αₖ to minimize φ(t) = f(pₖ − t f′(pₖ)) along the ray.",hu:"Állandó lépés: αₖ = h / ‖f′(pₖ)‖. Optimális lépés: válaszd αₖ-t úgy, hogy minimalizálja a φ(t) = f(pₖ − t f′(pₖ)) függvényt a félegyenesen."})})]}),t.jsx(q,{label:e({en:"Why it zig-zags",hu:"Miért cikcakkozik"}),proof:!0,children:t.jsx("p",{children:e({en:"At an optimal step φ′(αₖ)=0, i.e. f′(pₖ₊₁)·f′(pₖ)=0 — successive search directions are orthogonal. In an ill-conditioned valley that forces a slow staircase.",hu:"Optimális lépésnél φ′(αₖ)=0, azaz f′(pₖ₊₁)·f′(pₖ)=0 — az egymást követő keresési irányok merőlegesek. Rosszul kondicionált völgyben ez lassú lépcsőzést eredményez."})})})]})]})}function Mt({result:e,player:a,targetFrame:n,mode:i,setMode:s,h,setH:o,onPick:r}){const{t:m}=_();g.useEffect(()=>{a.playing||a.setI(n)},[n]);const l=Math.min(a.i,e.frames.length-1),b=e.frames[l],f=b.p,p=b.grad??[0,0],d=S(p)||1,x=E(f,j(T([0,0],p),.4/d)),$={paths:[{pts:e.points.slice(0,l+1)}],points:[{p:f,ring:!0}],arrow:{from:f,to:x},showMin:!0};return t.jsxs("div",{children:[t.jsx(X,{fn:I,overlay:$,height:400,onPick:r}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",m({en:"path",hu:"pálya"})]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-accent)"}})," −∇f"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-point)"}})," ",m({en:"minimum (1, ½)",hu:"minimum (1, ½)"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:b.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",f[0].toFixed(3),", ",f[1].toFixed(3),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:b.fval.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(b.err??0).toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Q,{i:a.i,count:e.points.length,playing:a.playing,onPlay:a.play,onStep:a.step,onReset:a.reset,onScrub:a.setI}),t.jsx(ne,{label:m({en:"Step rule",hu:"Lépésszabály"}),value:i,onChange:c=>s(c),options:[{value:"constant",label:m({en:"Constant step",hu:"Állandó lépés"})},{value:"optimal",label:m({en:"Optimal (line search)",hu:"Optimális (vonalkeresés)"})}]}),i==="constant"&&t.jsx(he,{label:m({en:"step h",hu:"lépés h"}),value:h,min:.05,max:.8,step:.05,onChange:o,fmt:c=>c.toFixed(2)})]})]})}function be({series:e,height:a=320,yLabel:n="‖pₖ − p*‖"}){const{theme:i}=me(),s=g.useRef(null),h=g.useRef(null),[o,r]=g.useState(520);return g.useEffect(()=>{const m=h.current;if(!m)return;const l=new ResizeObserver(b=>{const f=b[0].contentRect.width;f&&r(f)});return l.observe(m),()=>l.disconnect()},[]),g.useEffect(()=>{const m=s.current;if(!m)return;const l=le(m,o,a);Nt(l,o,a,e,n)},[o,a,e,i,n]),t.jsx("div",{className:"plot",ref:h,children:t.jsx("canvas",{ref:s})})}const ie=1e-16;function Nt(e,a,n,i,s){e.fillStyle=z("--plot-bg"),e.fillRect(0,0,a,n);const l=Math.max(1,...i.map($=>$.errs.length-1)),b=i.flatMap($=>$.errs.map(c=>Math.log10(Math.max(c,ie))));let f=Math.max(...b,0),p=Math.min(...b,-1);f=Math.ceil(f),p=Math.floor(p),f-p>18&&(p=f-18);const d=$=>52+$/l*(a-52-16),x=$=>16+(1-($-p)/(f-p))*(n-16-34);e.strokeStyle=z("--plot-grid"),e.fillStyle=z("--plot-axis"),e.font="600 10px ui-monospace, monospace",e.lineWidth=1;for(let $=p;$<=f;$++){const c=x($);e.beginPath(),e.moveTo(52,c),e.lineTo(a-16,c),e.stroke(),e.fillText(`1e${$}`,6,c+3)}for(let $=0;$<=l;$+=Math.ceil(l/8))e.fillText(`${$}`,d($)-3,n-34+16);e.save(),e.translate(12,n/2),e.rotate(-Math.PI/2),e.fillText(s,0,0),e.restore();for(const $ of i){const c=$.upTo!=null?Math.min($.upTo,$.errs.length-1):$.errs.length-1,u=ee($.color,z("--plot-path"));e.strokeStyle=u,e.fillStyle=u,e.lineWidth=2.4,e.beginPath();for(let k=0;k<=c;k++){const v=Math.log10(Math.max($.errs[k],ie)),y=d(k),A=x(v);k===0?e.moveTo(y,A):e.lineTo(y,A)}e.stroke();for(let k=0;k<=c;k++){const v=Math.log10(Math.max($.errs[k],ie));e.beginPath(),e.arc(d(k),x(v),2.6,0,Math.PI*2),e.fill()}}}function St(e,a,n,i,s=14){let h=n.slice();const o=[],r=l=>{const b=T(a,pe(e,h));return o.push({k:l,p:h.slice(),err:S(T(h,i)),res:S(b)}),b};let m=r(0);for(let l=1;l<=s;l++){const b=pe(e,m),f=N(m,b);if(Math.abs(f)<1e-18)break;const p=N(m,m)/f;if(h=h.map((d,x)=>d+p*m[x]),m=r(l),S(m)<1e-12)break}return o}const It=P.find(e=>e.id==="linsys"),Ft=[[4,2,-1],[2,5,0],[-1,0,3]],Ht=[0,8,1],Et=[-1,2,0],Wt=[3,3,3];function Bt(){const{t:e}=_(),a=g.useMemo(()=>St(Ft,Ht,Wt,Et,14),[]),n=V(a.length),i=[0,1,2,a.length-1,a.length-1],s=[{kicker:e({en:"A surprise link",hu:"Meglepő kapcsolat"}),title:e({en:"Solving = minimizing",hu:"Megoldani = minimalizálni"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"If A is symmetric and positive definite, the quadratic g(x) = ½xᵀAx − bᵀx has exactly one minimum — and its gradient is ∇g = Ax − b. So ∇g = 0 is precisely Ax = b.",hu:"Ha A szimmetrikus és pozitív definit, a g(x) = ½xᵀAx − bᵀx kvadratikusnak pontosan egy minimuma van — és a gradiense ∇g = Ax − b. Tehát ∇g = 0 épp az Ax = b."})}),t.jsx(D,{emoji:"🎢",children:e({en:"Solving the linear system becomes rolling a paraboloid bowl to the bottom — no matrix inverse required.",hu:"A lineáris rendszer megoldása egy paraboloid tál aljára gurulássá válik — mátrixinverz nélkül."})})]})},{kicker:e({en:"The residual",hu:"A reziduum"}),title:e({en:"Which way is down?",hu:"Merre van lefelé?"}),body:t.jsx("p",{children:e({en:"The downhill direction is the residual r = b − Ax (the negative gradient). Step along it by the exact distance that minimizes g on that line.",hu:"A lefelé irány az r = b − Ax reziduum (a negatív gradiens). Lépj mentén pontosan akkorát, amely minimalizálja g-t azon az egyenesen."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"An exact line-search formula",hu:"Pontos vonalkeresési képlet"}),body:t.jsx("p",{children:e({en:"Because g is quadratic, the best step length has a closed form: αₖ = (rᵀr)/(rᵀAr). No searching — just plug in.",hu:"Mivel g kvadratikus, a legjobb lépéshossz zárt alakú: αₖ = (rᵀr)/(rᵀAr). Nincs keresés — csak behelyettesítés."})})},{kicker:e({en:"Watch it solve",hu:"Nézd, ahogy megold"}),title:e({en:"A 3×3 system, live",hu:"Egy 3×3 rendszer, élőben"}),body:t.jsx("p",{children:e({en:"Starting from (3, 3, 3), both the error ‖pₖ − x*‖ and the residual ‖rₖ‖ shrink steadily toward the true solution (−1, 2, 0).",hu:"A (3, 3, 3)-ból indulva a hiba ‖pₖ − x*‖ és a reziduum ‖rₖ‖ is folyamatosan csökken a valódi (−1, 2, 0) megoldás felé."})})},{kicker:e({en:"Note",hu:"Megjegyzés"}),title:e({en:"Steady, but linear",hu:"Egyenletes, de lineáris"}),body:t.jsx("p",{children:e({en:"Like the gradient method it descends reliably but only linearly — conjugate-gradient methods (next courses) fix the zig-zag and finish in n steps.",hu:"A gradiens módszerhez hasonlóan megbízhatóan, de csak lineárisan ereszkedik — a konjugált gradiens módszerek (későbbi kurzusok) megszüntetik a cikcakkot és n lépésben végeznek."})})}],h=[{label:"err",color:"var(--plot-path)",errs:a.map(o=>o.err)},{label:"res",color:"var(--plot-path2)",errs:a.map(o=>o.res)}];return t.jsxs(O,{meta:It,children:[t.jsx(K,{steps:s,graphic:o=>t.jsx(Dt,{frames:a,series:h,player:n,targetFrame:i[o]??0})}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"Gradient of the quadratic",hu:"A kvadratikus gradiense"}),children:[t.jsx(w,{block:!0,children:"g(\\mathbf x) = \\tfrac12 \\mathbf x^{\\mathsf T} A\\mathbf x - \\mathbf b^{\\mathsf T}\\mathbf x + c, \\qquad g'(\\mathbf x) = A\\mathbf x - \\mathbf b."}),t.jsx("p",{children:e({en:"If A is positive definite, g has a unique global minimum at x = A⁻¹b — the solution of the system.",hu:"Ha A pozitív definit, g-nek egyetlen globális minimuma van az x = A⁻¹b pontban — a rendszer megoldása."})})]}),t.jsx(q,{label:e({en:"The iteration",hu:"Az iteráció"}),proof:!0,children:t.jsx(w,{block:!0,children:"\\mathbf r^{(k)} = \\mathbf b - A\\mathbf p^{(k)}, \\quad \\alpha_k = \\frac{(\\mathbf r^{(k)})^{\\mathsf T}\\mathbf r^{(k)}}{(\\mathbf r^{(k)})^{\\mathsf T} A\\,\\mathbf r^{(k)}}, \\quad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} + \\alpha_k \\mathbf r^{(k)}."})})]})]})}function Dt({frames:e,series:a,player:n,targetFrame:i}){const{t:s}=_();g.useEffect(()=>{n.playing||n.setI(i)},[i]);const h=Math.min(n.i,e.length-1),o=e[h],r=a.map(m=>({...m,upTo:h}));return t.jsxs("div",{children:[t.jsx("div",{style:{padding:"16px 16px 0",fontFamily:"var(--mono)",fontSize:".82rem",color:"var(--ink-soft)"},children:t.jsx(w,{block:!0,children:"\\begin{aligned} 4x_1 + 2x_2 - x_3 &= 0 \\\\ 2x_1 + 5x_2\\;\\;\\;\\; &= 8 \\\\ -x_1 \\;\\;\\;\\;\\;+ 3x_3 &= 1 \\end{aligned}"})}),t.jsx(be,{series:r,height:260,yLabel:"error / residual"}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ‖pₖ − x*‖"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," ‖rₖ‖"]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:o.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",o.p.map(m=>m.toFixed(3)).join(", "),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:s({en:"error",hu:"hiba"})})," ",t.jsx("b",{children:o.err.toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Q,{i:n.i,count:e.length,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx("span",{className:"pill",children:s({en:"true x* = (−1, 2, 0)",hu:"valódi x* = (−1, 2, 0)"})})]})]})}function Pt(e,a,n=8){const i=[a];let s=a;for(let o=0;o<n;o++){const r=e.grad(s[0],s[1]);if(S(r)<1e-10)break;const m=e.hess(s[0],s[1]),l=ye(m,r);if(!l)break;s=T(s,l),i.push(s)}return{frames:i.map((o,r)=>({k:r,p:o,fval:e.f(o[0],o[1]),grad:e.grad(o[0],o[1]),err:e.min?fe(o,e.min):void 0})),points:i}}const Ct=P.find(e=>e.id==="newton"),ue=[-1,4];function Rt(){const{t:e}=_(),[a,n]=g.useState(!0),i=g.useMemo(()=>Pt(I,ue,8),[]),s=g.useMemo(()=>_e(I,ue,16),[]),h=V(Math.max(i.points.length,6)),o=[0,1,2,i.points.length-1,i.points.length-1],r=[{kicker:e({en:"Use the curve",hu:"Használd a görbületet"}),title:e({en:"Fit a bowl, jump to its bottom",hu:"Illessz egy tálat, ugorj az aljára"}),body:t.jsx("p",{children:e({en:"Gradient methods only know the slope. Newton's method also uses curvature: it fits a quadratic bowl (the 2nd-order Taylor model) at the current point and jumps straight to that bowl's minimum.",hu:"A gradiens módszer csak a meredekséget ismeri. A Newton-módszer a görbületet is használja: a jelenlegi pontban illeszt egy kvadratikus tálat (a másodrendű Taylor-modellt), és egyenesen annak minimumába ugrik."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"Solve, don't crawl",hu:"Oldd meg, ne kússz"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Each step solves a small linear system with the Hessian H = f''. The update is pₖ₊₁ = pₖ − H⁻¹∇f. No step-size tuning needed.",hu:"Minden lépés egy kis lineáris rendszert old meg a H = f'' Hesse-mátrixszal. A frissítés pₖ₊₁ = pₖ − H⁻¹∇f. Nincs szükség lépésköz-hangolásra."})}),t.jsx(D,{emoji:"⚡",children:e({en:"For this function Newton reaches the minimum to machine precision in ~5 steps — and from (1, 3) it lands exactly in one.",hu:"Erre a függvényre a Newton ~5 lépésben gépi pontossággal eléri a minimumot — (1, 3)-ból pedig egyetlen lépésben pontosan odaér."})})]})},{kicker:e({en:"Speed",hu:"Sebesség"}),title:e({en:"Quadratic convergence",hu:"Kvadratikus konvergencia"}),body:t.jsx("p",{children:e({en:"Near the minimum the error roughly squares each step: digits of accuracy double. The convergence chart below shows Newton plunging while the gradient method inches down.",hu:"A minimum közelében a hiba nagyjából négyzetre emelkedik lépésenként: a pontos jegyek száma megduplázódik. Az alábbi konvergencia-ábrán a Newton zuhan, míg a gradiens módszer araszol."})})},{kicker:e({en:"The price",hu:"Az ára"}),title:e({en:"You must know H",hu:"Ismerned kell H-t"}),body:t.jsx("p",{children:e({en:"Newton needs the Hessian and a fresh linear solve every step — expensive in high dimensions. And if H isn't positive definite, the “jump” can head uphill.",hu:"A Newtonhoz minden lépésben kell a Hesse-mátrix és egy új lineáris megoldás — sok változónál drága. És ha H nem pozitív definit, az „ugrás” akár felfelé is vihet."})})},{kicker:e({en:"Compare",hu:"Hasonlíts"}),title:e({en:"Newton vs gradient",hu:"Newton kontra gradiens"}),body:t.jsx("p",{children:e({en:"Both start at (−1, 4). Toggle the gradient path on and off to feel the difference between a handful of Newton jumps and a long gradient staircase.",hu:"Mindkettő (−1, 4)-ből indul. Kapcsold be-ki a gradiens pályát, hogy megérezd a különbséget néhány Newton-ugrás és egy hosszú gradiens-lépcső között."})})}],m=[{label:"Newton",color:"var(--plot-path2)",errs:i.frames.map(l=>l.err??0)},{label:e({en:"Gradient",hu:"Gradiens"}),color:"var(--plot-path)",errs:s.frames.map(l=>l.err??0)}];return t.jsxs(O,{meta:Ct,children:[t.jsx(K,{steps:r,graphic:l=>t.jsx(Lt,{nwt:i,grad:s,player:h,targetFrame:o[l]??0,showGradient:a,setShowGradient:n})}),t.jsxs("div",{style:{marginTop:18},children:[t.jsx("p",{className:"muted",style:{marginBottom:6},children:e({en:"Error vs iteration (log scale) — Newton's curve falls off a cliff:",hu:"Hiba az iteráció függvényében (log skála) — a Newton görbéje leszakad:"})}),t.jsxs("div",{className:"scrolly__graphic",style:{boxShadow:"none"},children:[t.jsx(be,{series:m,height:300}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",e({en:"Gradient (optimal)",hu:"Gradiens (optimális)"})]})]})]})]}),t.jsxs(U,{children:[t.jsxs(q,{label:e({en:"Newton's iteration",hu:"Newton-iteráció"}),children:[t.jsx(w,{block:!0,children:"\\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\big(f''(\\mathbf p^{(k)})\\big)^{-1} f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"This is exactly Newton's method applied to the equation ∇f(x) = 0.",hu:"Ez pontosan a Newton-módszer a ∇f(x) = 0 egyenletre alkalmazva."})})]}),t.jsxs(q,{label:e({en:"Convergence",hu:"Konvergencia"}),proof:!0,children:[t.jsx("p",{children:e({en:"If f ∈ C³, ∇f(p)=0 and f''(p) is positive definite, the iteration converges quadratically:",hu:"Ha f ∈ C³, ∇f(p)=0 és f''(p) pozitív definit, az iteráció kvadratikusan konvergál:"})}),t.jsx(w,{block:!0,children:"\\lVert \\mathbf p^{(k+1)} - \\mathbf p\\rVert \\le C\\,\\lVert \\mathbf p^{(k)} - \\mathbf p\\rVert^2."})]})]})]})}function Lt({nwt:e,grad:a,player:n,targetFrame:i,showGradient:s,setShowGradient:h}){const{t:o}=_();g.useEffect(()=>{n.playing||n.setI(i)},[i]);const r=n.i,m=Math.min(r,e.points.length-1),l=[{pts:e.points.slice(0,m+1),color:"var(--plot-path2)"}];s&&l.push({pts:a.points.slice(0,Math.min(r+1,a.points.length)),color:"var(--plot-path)"});const b={paths:l,points:[{p:e.points[m],ring:!0,color:"var(--plot-path2)"}],showMin:!0},f=e.frames[m];return t.jsxs("div",{children:[t.jsx(X,{fn:I,overlay:b,height:400}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),s&&t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",o({en:"gradient",hu:"gradiens"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:f.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",e.points[m][0].toFixed(4),", ",e.points[m][1].toFixed(4),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:f.fval.toExponential(2)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(f.err??0).toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Q,{i:n.i,count:Math.max(e.points.length,6),playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx("button",{className:`ctl-btn${s?" ctl-btn--accent":""}`,onClick:()=>h(!s),children:o(s?{en:"Hide gradient path",hu:"Gradiens pálya elrejtése"}:{en:"Show gradient path",hu:"Gradiens pálya mutatása"})})]})]})}const ge=2,F=(e,a)=>e.map(n=>a.map(i=>n*i)),H=(e,a)=>e.map((n,i)=>n.map((s,h)=>s+a[i][h])),G=(e,a)=>e.map(n=>n.map(i=>i*a)),Gt=(e,a)=>e.map(n=>N(n,a));function Ot(e,a,n=.05){const i=[[n,0],[0,n]],s=e.f(a[0],a[1]),h=[[0,0],[0,0]];for(let o=0;o<ge;o++)for(let r=0;r<ge;r++){const m=e.f(a[0]+i[o][0]+i[r][0],a[1]+i[o][1]+i[r][1]),l=e.f(a[0]+i[o][0],a[1]+i[o][1]),b=e.f(a[0]+i[r][0],a[1]+i[r][1]);h[o][r]=(m-l-b+s)/(n*n)}return[[h[0][0],(h[0][1]+h[1][0])/2],[(h[0][1]+h[1][0])/2,h[1][1]]]}function Kt(e,a,n,i){const s=Gt(a,n),h=T(i,s),o=N(n,n);if(e==="broyden")return H(a,G(F(h,n),1/o));if(e==="psb"){const p=H(F(h,n),F(n,h)),d=G(p,1/o),x=N(h,n)/(o*o),$=G(F(n,n),-x);return H(a,H(d,$))}const r=N(i,n),m=N(n,s);if(e==="bfgs"){const p=G(F(i,i),1/r),d=G(F(s,s),-1/m);return H(a,H(p,d))}const l=G(H(F(h,i),F(i,h)),1/r),b=N(h,n)/(r*r),f=G(F(i,i),-b);return H(a,H(l,f))}function Ut(e,a,n,i=12,s=.05){let h=a,o=Ot(e,h,s);const r=[h];for(let l=0;l<i;l++){const b=e.grad(h[0],h[1]);if(S(b)<1e-12)break;const f=ye(o,j(b,-1));if(!f)break;const p=[h[0]+f[0],h[1]+f[1]],d=e.grad(p[0],p[1]),x=T(d,b);if(o=Kt(n,o,f,x),h=p,r.push(h),S(f)<1e-12)break}return{frames:r.map((l,b)=>({k:b,p:l,fval:e.f(l[0],l[1]),grad:e.grad(l[0],l[1]),err:e.min?fe(l,e.min):void 0})),points:r}}const re={broyden:"Broyden",psb:"PSB",bfgs:"BFGS",dfp:"DFP"},Vt=P.find(e=>e.id==="quasinewton"),Qt=[2,2],te={broyden:"var(--plot-axis)",psb:"var(--warm)",bfgs:"var(--plot-path)",dfp:"var(--plot-path2)"};function Yt(){const{t:e}=_(),[a,n]=g.useState("bfgs"),i=g.useMemo(()=>Object.fromEntries(["broyden","psb","bfgs","dfp"].map(b=>[b,Ut(I,Qt,b,12)])),[]),s=Math.max(...Object.values(i).map(l=>l.points.length)),h=V(s),o=[0,1,2,s-1,s-1],r=[{kicker:e({en:"The dilemma",hu:"A dilemma"}),title:e({en:"Newton is fast but greedy",hu:"A Newton gyors, de falánk"}),body:t.jsx("p",{children:e({en:"Newton converges beautifully — but it demands the exact Hessian and a linear solve every step. In big problems that's too costly. Can we get Newton-like speed without it?",hu:"A Newton gyönyörűen konvergál — de pontos Hesse-mátrixot és lineáris megoldást kíván lépésenként. Nagy feladatokban ez túl drága. Megkaphatjuk a Newton-szerű sebességet enélkül?"})})},{kicker:e({en:"The secant idea",hu:"A szelő-ötlet"}),title:e({en:"Learn curvature from steps",hu:"Tanuld a görbületet a lépésekből"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Keep an approximation A ≈ Hessian and improve it each step so it matches the observed change in gradient: A·s = y, where s = pₖ₊₁−pₖ and y = ∇fₖ₊₁−∇fₖ. That's the secant equation.",hu:"Tarts fenn egy A ≈ Hesse közelítést, és javítsd lépésenként úgy, hogy illeszkedjen a gradiens megfigyelt változására: A·s = y, ahol s = pₖ₊₁−pₖ és y = ∇fₖ₊₁−∇fₖ. Ez a szelő-egyenlet."})}),t.jsx(D,{emoji:"🧩",children:e({en:"Different ways to satisfy A·s = y give different updates: Broyden, PSB, BFGS, DFP.",hu:"Az A·s = y különböző teljesítési módjai más-más frissítést adnak: Broyden, PSB, BFGS, DFP."})})]})},{kicker:e({en:"Keep it nice",hu:"Tartsd szépen"}),title:e({en:"Symmetric & positive definite",hu:"Szimmetrikus és pozitív definit"}),body:t.jsx("p",{children:e({en:"A true Hessian is symmetric; near a minimum it's positive definite. PSB enforces symmetry; BFGS and DFP also preserve positive-definiteness, so the step always points downhill.",hu:"A valódi Hesse szimmetrikus; minimum közelében pozitív definit. A PSB kikényszeríti a szimmetriát; a BFGS és a DFP a pozitív definitséget is megőrzi, így a lépés mindig lefelé mutat."})})},{kicker:e({en:"The race",hu:"A verseny"}),title:e({en:"Four updates, one valley",hu:"Négy frissítés, egy völgy"}),body:t.jsx("p",{children:e({en:"All four start at (2, 2) with a finite-difference Hessian guess. BFGS and DFP plunge nearly as fast as Newton; PSB is close behind; plain Broyden lags. Watch the log-scale chart.",hu:"Mind a négy (2, 2)-ből indul, véges differenciás Hesse-becsléssel. A BFGS és a DFP majdnem olyan gyorsan zuhan, mint a Newton; a PSB szorosan mögöttük; az egyszerű Broyden lemarad. Figyeld a log-skálás ábrát."})})},{kicker:e({en:"The winner",hu:"A győztes"}),title:e({en:"Why BFGS rules",hu:"Miért uralkodik a BFGS"}),body:t.jsx("p",{children:e({en:"BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) is the workhorse behind most real-world optimizers. There's even a recursion for the inverse, so each step avoids solving a system entirely.",hu:"A BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) a legtöbb valós optimalizáló igáslova. Az inverzre is van rekurzió, így minden lépés teljesen elkerüli a rendszer megoldását."})})}],m=["broyden","psb","bfgs","dfp"].map(l=>({label:re[l],color:te[l],errs:i[l].frames.map(b=>b.err??0)}));return t.jsxs(O,{meta:Vt,children:[t.jsx(K,{steps:r,graphic:l=>t.jsx(Jt,{runs:i,series:m,player:h,targetFrame:o[l]??0,focus:a,setFocus:n,count:s})}),t.jsxs(U,{children:[t.jsx(q,{label:e({en:"Secant equation",hu:"Szelő-egyenlet"}),children:t.jsx(w,{block:!0,children:"\\mathbf s^{(k)} = \\mathbf p^{(k+1)} - \\mathbf p^{(k)}, \\quad \\mathbf y^{(k)} = f'(\\mathbf p^{(k+1)}) - f'(\\mathbf p^{(k)}), \\quad A^{(k+1)}\\mathbf s^{(k)} = \\mathbf y^{(k)}."})}),t.jsxs(q,{label:e({en:"BFGS update",hu:"BFGS frissítés"}),proof:!0,children:[t.jsx(w,{block:!0,children:"A^{(k+1)} = A^{(k)} + \\frac{\\mathbf y\\mathbf y^{\\mathsf T}}{\\mathbf y^{\\mathsf T}\\mathbf s} - \\frac{A^{(k)}\\mathbf s\\,\\mathbf s^{\\mathsf T}A^{(k)}}{\\mathbf s^{\\mathsf T}A^{(k)}\\mathbf s}."}),t.jsx("p",{children:e({en:"DFP swaps the roles of s and y; PSB is the symmetric correction of Broyden's rank-1 update. All keep A symmetric, and BFGS/DFP keep it positive definite when yᵀs > 0.",hu:"A DFP felcseréli s és y szerepét; a PSB a Broyden rang-1 frissítésének szimmetrikus javítása. Mind szimmetrikusan tartja A-t, és a BFGS/DFP pozitív definitnek is, ha yᵀs > 0."})})]})]})]})}function Jt({runs:e,series:a,player:n,targetFrame:i,focus:s,setFocus:h,count:o}){const{t:r}=_();g.useEffect(()=>{n.playing||n.setI(i)},[i]);const m=n.i,l=e[s],b=Math.min(m,l.points.length-1),f={paths:[{pts:l.points.slice(0,b+1),color:te[s]}],points:[{p:l.points[b],ring:!0,color:te[s]}],showMin:!0},p=a.map(d=>({...d,upTo:m}));return t.jsxs("div",{children:[t.jsx(X,{fn:I,overlay:f,height:300}),t.jsx(be,{series:p,height:220}),t.jsx("div",{className:"plot__legend",children:["broyden","psb","bfgs","dfp"].map(d=>t.jsxs("button",{onClick:()=>h(d),style:{border:0,background:"transparent",cursor:"pointer",fontWeight:s===d?800:500,color:s===d?"var(--ink)":"var(--ink-soft)",display:"inline-flex",alignItems:"center",gap:6},children:[t.jsx("i",{className:"swatch",style:{background:te[d]}}),re[d]]},d))}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:r({en:"showing path",hu:"látható pálya"})})," ",t.jsx("b",{children:re[s]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:b})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(l.frames[b].err??0).toExponential(2)})]})]}),t.jsx("div",{className:"controls",children:t.jsx(Q,{i:n.i,count:o,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI})})]})}function ia(){return t.jsxs("div",{className:"ch-minimization",children:[t.jsx(Te,{sections:P}),t.jsx(je,{}),t.jsx(ft,{}),t.jsx(ut,{}),t.jsx(_t,{}),t.jsx(At,{}),t.jsx(Bt,{}),t.jsx(Rt,{}),t.jsx(Yt,{}),t.jsx(qe,{})]})}export{ia as default};
