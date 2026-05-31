import{r as u,j as t,f as _,l as he}from"./index-Cijdy7dy.js";import{k as je}from"./CodeBlock-Mpw6x4kG.js";import{M as ae}from"./MarkdownView-1L4ntNCG.js";import{C as Ae,Q as Te,S as qe}from"./Quiz-CaH6yZDh.js";import"./normalizeMath-3i28dbpd.js";import"./index-Dd5f_C7k.js";function w({children:e,block:n=!1}){const i=u.useMemo(()=>{try{return je.renderToString(e,{displayMode:n,throwOnError:!1,strict:!1})}catch{return e}},[e,n]);return n?t.jsx("div",{dangerouslySetInnerHTML:{__html:i}}):t.jsx("span",{dangerouslySetInnerHTML:{__html:i}})}function He(){const{t:e}=_();return t.jsxs("header",{className:"hero",id:"hero",children:[t.jsx("div",{className:"hero__bg"}),t.jsxs("div",{className:"wrap hero__inner",children:[t.jsx("span",{className:"eyebrow",children:e({en:"Numerical Analysis · Chapter 8",hu:"Numerikus analízis · 8. fejezet"})}),t.jsxs("h1",{children:[e({en:"How computers find the ",hu:"Hogyan találják meg a gépek a "}),t.jsx("em",{children:e({en:"lowest point",hu:"legmélyebb pontot"})}),e({en:".",hu:"."})]}),t.jsx("p",{className:"hero__lead",children:e({en:"Minimizing a function is just rolling downhill until you can't go lower. Scroll through seven methods — each one comes alive as you read, and you can grab the controls and play.",hu:"Egy függvény minimalizálása nem más, mint legurulni a völgybe, amíg lejjebb már nem lehet. Görgess végig hét módszeren — mindegyik életre kel olvasás közben, és a vezérlőkkel magad is kísérletezhetsz."})}),t.jsxs("div",{className:"hero__cta",children:[t.jsx("a",{className:"btn btn--primary",href:"#golden",children:e({en:"Start exploring ↓",hu:"Kezdjük a felfedezést ↓"})}),t.jsx("a",{className:"btn",href:"#calculus",children:e({en:"First, a refresher",hu:"Előbb egy ismétlés"})})]}),t.jsxs("div",{className:"hero__chips",children:[t.jsx("span",{className:"pill",children:t.jsx(w,{children:"\\min_{x} f(x)"})}),t.jsx("span",{className:"pill",children:"EN / HU"}),t.jsx("span",{className:"pill",children:"🌙 / ☀️"}),t.jsx("span",{className:"pill",children:e({en:"7 interactive methods",hu:"7 interaktív módszer"})})]})]})]})}function Me(){const{t:e}=_();return t.jsx("footer",{className:"footer",children:t.jsxs("div",{className:"wrap",children:[t.jsx("h4",{children:e({en:"Minimization of Functions — an interactive guide",hu:"Függvények minimalizálása — interaktív útmutató"})}),t.jsx("p",{children:e({en:"An interactive companion to “Minimization of Functions”. All plots and convergence tables here are computed live in your browser.",hu:"Interaktív kísérőanyag a „Függvények minimalizálása” témához. Az ábrákat és a konvergencia-táblázatokat a böngésződ valós időben számolja."})}),t.jsx("p",{className:"muted",children:e({en:"Toggle language (EN/HU) and theme (🌙/☀️) any time from the top bar — your choice is remembered.",hu:"A nyelv (EN/HU) és a téma (🌙/☀️) bármikor váltható a felső sávban — a választásod megjegyezzük."})})]})})}const W=[{id:"calculus",no:"8.1",title:{en:"Calculus, refreshed",hu:"Analízis, felfrissítve"},blurb:{en:"Where can a minimum hide? Gradients, Hessians, and the min/max/saddle test.",hu:"Hol bújhat meg a minimum? Gradiens, Hesse-mátrix, és a min/max/nyeregpont teszt."}},{id:"golden",no:"8.2",title:{en:"Golden Section Search",hu:"Aranymetszéses keresés"},blurb:{en:"Shrink an interval around the minimum — reusing one point each step.",hu:"Szűkítsük az intervallumot a minimum köré — minden lépésben egy pontot újrahasználva."}},{id:"simplex",no:"8.3",title:{en:"Simplex & Nelder–Mead",hu:"Szimplex és Nelder–Mead"},blurb:{en:"A triangle that flips, stretches and squeezes its way downhill.",hu:"Egy háromszög, amely tükrözve, nyújtva és húzva gurul a völgybe."}},{id:"gradient",no:"8.4",title:{en:"Gradient Method",hu:"Gradiens módszer"},blurb:{en:"Always walk straight downhill. Simple — but watch it zig-zag.",hu:"Mindig lefelé a legmeredekebben. Egyszerű — de figyeld a cikcakkot."}},{id:"linsys",no:"8.5",title:{en:"Linear Systems by Descent",hu:"Lineáris rendszerek lejtéssel"},blurb:{en:"Solve A x = b by rolling a quadratic bowl to its bottom.",hu:"Oldd meg az A x = b rendszert egy kvadratikus tál aljára gurulva."}},{id:"newton",no:"8.6",title:{en:"Newton's Method",hu:"Newton-módszer"},blurb:{en:"Use curvature, not just slope — and converge ridiculously fast.",hu:"Használd a görbületet, ne csak a meredekséget — és konvergálj iszonyú gyorsan."}},{id:"quasinewton",no:"8.7",title:{en:"Quasi-Newton",hu:"Kvázi-Newton"},blurb:{en:"Newton's speed without the Hessian: Broyden, PSB, BFGS, DFP race.",hu:"Newton sebessége Hesse-mátrix nélkül: Broyden, PSB, BFGS, DFP verseny."}}],Ne={calculus:[{term:{en:"Unconstrained minimization",hu:"Feltétel nélküli minimalizálás"},def:{en:"Finding $\\min f(\\mathbf{x})$ over $\\mathbb{R}^n$ with no constraints. Calculus reduces it to locating and classifying stationary points.",hu:"A $\\min f(\\mathbf{x})$ keresése $\\mathbb{R}^n$-en, feltételek nélkül. Az analízis ezt a stacionárius pontok megkeresésére és osztályozására vezeti vissza."}},{term:{en:"First-order condition $\\nabla f=\\mathbf{0}$",hu:"Elsőrendű feltétel $\\nabla f=\\mathbf{0}$"},def:{en:"At any interior local minimum (or maximum) the gradient vanishes: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Such $\\mathbf{x}^*$ is a stationary (critical) point — necessary, not sufficient.",hu:"Bármely belső lokális minimumban (vagy maximumban) a gradiens eltűnik: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Az ilyen $\\mathbf{x}^*$ stacionárius (kritikus) pont — szükséges, de nem elégséges."}},{term:{en:"Hessian classification",hu:"Hesse-mátrix szerinti osztályozás"},def:{en:"At a stationary point the Hessian $\\nabla^2 f$ decides the type: positive definite ⇒ minimum, negative definite ⇒ maximum, indefinite ⇒ saddle, semidefinite ⇒ degenerate (inconclusive).",hu:"Stacionárius pontban a Hesse-mátrix $\\nabla^2 f$ dönti el a típust: pozitív definit ⇒ minimum, negatív definit ⇒ maximum, indefinit ⇒ nyeregpont, szemidefinit ⇒ elfajuló (nem dönthető el)."}},{term:{en:"2×2 definiteness test",hu:"2×2 definitségi teszt"},def:{en:"For $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$: positive definite iff $a>0$ and $ac-b^2>0$; a negative determinant $ac-b^2<0$ means a saddle.",hu:"A $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$-re: pozitív definit, ha $a>0$ és $ac-b^2>0$; negatív determináns $ac-b^2<0$ nyeregpontot jelent."}},{term:{en:"Convexity",hu:"Konvexitás"},def:{en:"A convex $f$ (positive semidefinite Hessian everywhere) has any stationary point as a global minimum — no local traps. The ideal case for optimization.",hu:"Egy konvex $f$ (mindenütt pozitív szemidefinit Hesse-mátrix) bármely stacionárius pontja globális minimum — nincsenek lokális csapdák. Az optimalizálás ideális esete."}}],golden:[{term:{en:"Unimodal function",hu:"Unimodális függvény"},def:{en:"A function with a single minimum on $[a,b]$ (strictly decreasing then increasing). Convexity implies it, but is not required. Golden section search needs only unimodality, not derivatives.",hu:"Olyan függvény, amelynek egyetlen minimuma van $[a,b]$-n (előbb szigorúan csökken, majd nő). A konvexitás ezt maga után vonja, de nem szükséges. Az aranymetszéses kereséshez csak unimodalitás kell, derivált nem."}},{term:{en:"Golden section search",hu:"Aranymetszéses keresés"},def:{en:"A derivative-free minimizer: like bisection but for minima. Keep two interior points $a<y<x<b$; if $f(x)>f(y)$ the minimum is in $[a,x]$, else in $[y,b]$. Repeat on the shrinking bracket.",hu:"Derivált nélküli minimumkereső: mint a felezés, de minimumra. Tarts két belső pontot $a<y<x<b$; ha $f(x)>f(y)$, a minimum $[a,x]$-ben van, különben $[y,b]$-ben. Ismételd a zsugorodó intervallumon."}},{term:{en:"Golden ratio $r=(\\sqrt5-1)/2$",hu:"Aranymetszés $r=(\\sqrt5-1)/2$"},def:{en:"The reduction ratio $r\\approx0.618$ is chosen so one of the new interior points coincides with a previous one — satisfying $r^2=1-r$ — so each step needs only **one** new function evaluation.",hu:"Az $r\\approx0,618$ zsugorítási arányt úgy választjuk, hogy az egyik új belső pont egybeessen egy korábbival — teljesítve $r^2=1-r$-t — így minden lépés csak **egy** új függvénykiértékelést igényel."}},{term:{en:"One evaluation per step",hu:"Egy kiértékelés lépésenként"},def:{en:"The golden ratio's self-similarity means the retained point can be reused, so after the first step only one new $f$-value is computed per iteration — the method's efficiency advantage.",hu:"Az aranymetszés önhasonlósága miatt a megtartott pont újrahasználható, így az első lépés után iterációnként csak egy új $f$-értéket számolunk — ez a módszer hatékonysági előnye."}},{term:{en:"Linear convergence",hu:"Lineáris konvergencia"},def:{en:"The bracket length shrinks by the factor $r\\approx0.618$ each step, so $|b_k-a_k|=r^k(b-a)$ — steady linear convergence, robust but not fast (no derivative info used).",hu:"Az intervallum hossza lépésenként az $r\\approx0,618$ tényezővel csökken, így $|b_k-a_k|=r^k(b-a)$ — egyenletes lineáris konvergencia, robusztus, de nem gyors (nincs deriváltinformáció)."}},{term:{en:"Convergence guarantee (Thm 8.4)",hu:"Konvergencia-garancia (8.4. tétel)"},def:{en:"For continuous unimodal $f$, golden section search always converges to the minimum point — unconditionally, like bisection for roots.",hu:"Folytonos unimodális $f$-re az aranymetszéses keresés mindig a minimumponthoz konvergál — feltétel nélkül, mint a felezés a gyökökre."}}],simplex:[{term:{en:"Simplex (geometric)",hu:"Szimplex (geometriai)"},def:{en:"The convex hull of $n+1$ affinely independent points in $\\mathbb{R}^n$: a segment ($n=1$), triangle ($n=2$), tetrahedron ($n=3$). Its vertices carry the function values that drive the search.",hu:"$n+1$ affinul független pont konvex burka $\\mathbb{R}^n$-ben: szakasz ($n=1$), háromszög ($n=2$), tetraéder ($n=3$). Csúcsai hordozzák a keresést vezérlő függvényértékeket."}},{term:{en:"Simplex method (derivative-free)",hu:"Szimplex módszer (derivált nélküli)"},def:{en:"Minimize $f$ by moving a simplex downhill: find the worst vertex, reflect it through the centroid of the rest; if that fails, shrink the simplex toward its best vertex. Uses only function values — no gradients.",hu:"Minimalizáld $f$-et a szimplex lefelé mozgatásával: keresd a legrosszabb csúcsot, tükrözd a többi súlypontján át; ha ez nem sikerül, zsugorítsd a szimplexet a legjobb csúcsa felé. Csak függvényértékeket használ — gradienst nem."}},{term:{en:"Reflection",hu:"Tükrözés"},def:{en:"Replace the worst vertex $\\mathbf{x}^{(j)}$ by its mirror image $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ across the centroid $\\mathbf{x}_c$ of the remaining vertices — the basic downhill move.",hu:"Cseréld a legrosszabb $\\mathbf{x}^{(j)}$ csúcsot a tükörképére $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ a maradék csúcsok $\\mathbf{x}_c$ súlypontján át — az alap lefelé lépés."}},{term:{en:"Shrink",hu:"Zsugorítás"},def:{en:"When reflection does not improve on the worst value, pull every vertex halfway toward the best vertex: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. The simplex contracts around the best point.",hu:"Ha a tükrözés nem javít a legrosszabb értéken, húzd minden csúcsot félútig a legjobb csúcs felé: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. A szimplex a legjobb pont köré húzódik össze."}},{term:{en:"Nelder–Mead method",hu:"Nelder–Mead-módszer"},def:{en:"An adaptive variant: after reflecting the worst vertex, **expand** (if the reflection is the new best), **contract** (if it is poor), or shrink — letting the simplex stretch into descent directions and squeeze near the minimum.",hu:"Adaptív változat: a legrosszabb csúcs tükrözése után **tágíts** (ha a tükrözés az új legjobb), **összehúz** (ha gyenge), vagy zsugoríts — így a szimplex megnyúlik a leszálló irányokba és összeszorul a minimum közelében."}},{term:{en:"Expansion & contraction",hu:"Tágítás és összehúzás"},def:{en:"Expansion pushes further past a successful reflection ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); contraction pulls back toward the centroid when reflection is poor. These make Nelder–Mead faster than the plain simplex method.",hu:"A tágítás tovább lök egy sikeres tükrözésen túl ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); az összehúzás visszahúz a súlypont felé, ha a tükrözés gyenge. Ezek teszik a Nelder–Mead-et gyorsabbá a sima szimplex módszernél."}},{term:{en:"Stopping criteria",hu:"Megállási feltételek"},def:{en:"Stop when the simplex is small (longest edge $<\\varepsilon$), when the vertex-value spread (std. dev. $\\sigma$) is small, or when successive centroid values change by $<\\varepsilon$. The centroid approximates the minimizer.",hu:"Állj meg, ha a szimplex kicsi (leghosszabb él $<\\varepsilon$), ha a csúcsértékek szórása ($\\sigma$) kicsi, vagy ha az egymást követő súlypont-értékek $<\\varepsilon$-nal változnak. A súlypont közelíti a minimumhelyet."}}],gradient:[{term:{en:"Steepest descent direction (Thm 8.8)",hu:"Legmeredekebb leszállási irány (8.8. tétel)"},def:{en:"Among all unit directions, the directional derivative of $f$ at $\\mathbf{p}$ is most negative along $-f'(\\mathbf{p})$. So the negative gradient points in the locally steepest downhill direction.",hu:"Minden egységirány közül $f$ iránymenti deriváltja $\\mathbf{p}$-ben a $-f'(\\mathbf{p})$ mentén a legnegatívabb. Tehát a negatív gradiens a lokálisan legmeredekebb lefelé irányba mutat."}},{term:{en:"Descent direction",hu:"Leszállási irány"},def:{en:"$\\mathbf{u}$ is a descent direction at $\\mathbf{p}$ if $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ for small $t>0$ — equivalently $f'(\\mathbf{p})^T\\mathbf{u}<0$. The negative gradient always qualifies.",hu:"$\\mathbf{u}$ leszállási irány $\\mathbf{p}$-ben, ha $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ kis $t>0$-ra — ekvivalensen $f'(\\mathbf{p})^T\\mathbf{u}<0$. A negatív gradiens mindig ilyen."}},{term:{en:"Gradient (steepest descent) method",hu:"Gradiens- (legmeredekebb leszállás) módszer"},def:{en:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — repeatedly step along the negative gradient with step size $\\alpha_k$. A first-order method: only gradients, no Hessian.",hu:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — ismételten lépünk a negatív gradiens mentén $\\alpha_k$ lépésközzel. Elsőrendű módszer: csak gradiens, nincs Hesse-mátrix."}},{term:{en:"Step size $\\alpha_k$",hu:"Lépésköz $\\alpha_k$"},def:{en:"Constant step: $\\alpha_k=h/\\|f'\\|_2$ gives fixed distance $h$ per step (so accuracy is limited to $\\sim h$). Better: a line search picking $\\alpha_k$ to minimize $f$ along the ray (the optimal/steepest gradient method).",hu:"Állandó lépés: $\\alpha_k=h/\\|f'\\|_2$ rögzített $h$ távolságot ad lépésenként (így a pontosság $\\sim h$-ra korlátozott). Jobb: vonalmenti keresés, amely $\\alpha_k$-t a sugár mentén $f$ minimalizálására választja (optimális gradiens módszer)."}},{term:{en:"Zig-zag / slow convergence",hu:"Cikcakk / lassú konvergencia"},def:{en:"Successive steps are orthogonal (each $-f'$ is perpendicular to the contour line), so on elongated valleys the iterates zig-zag and converge only linearly — slowly for ill-conditioned problems.",hu:"Az egymást követő lépések merőlegesek (minden $-f'$ merőleges a szintvonalra), így megnyúlt völgyekben az iteráltak cikcakkban haladnak és csak lineárisan konvergálnak — rosszul kondicionált feladatokon lassan."}},{term:{en:"Gradient ⟂ contour lines",hu:"Gradiens ⟂ szintvonalak"},def:{en:"The gradient is always perpendicular to the level curve through a point, so each gradient step crosses the contours at right angles — the geometric picture behind the zig-zag path.",hu:"A gradiens mindig merőleges az adott ponton átmenő szintvonalra, így minden gradienslépés derékszögben metszi a szintvonalakat — ez a cikcakk pálya geometriai képe."}}],linsys:[{term:{en:"Quadratic minimization ↔ linear system",hu:"Kvadratikus minimalizálás ↔ lineáris rendszer"},def:{en:"For symmetric $\\mathbf{A}$, $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ has gradient $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. So $g'(\\mathbf{x})=0$ is exactly the linear system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$.",hu:"Szimmetrikus $\\mathbf{A}$-ra a $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ gradiense $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. Így $g'(\\mathbf{x})=0$ éppen az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ lineáris rendszer."}},{term:{en:"SPD ⇒ unique minimizer (Thm 8.10)",hu:"SPD ⇒ egyetlen minimumhely (8.10. tétel)"},def:{en:"If $\\mathbf{A}$ is symmetric positive definite, $g$ has a global minimum at $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$. Hence solving $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ is equivalent to minimizing $g$ — solvable by gradient descent.",hu:"Ha $\\mathbf{A}$ szimmetrikus pozitív definit, $g$-nek globális minimuma van az $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$ pontban. Így $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ megoldása egyenértékű $g$ minimalizálásával — gradiens módszerrel megoldható."}},{term:{en:"Residual = negative gradient",hu:"Reziduum = negatív gradiens"},def:{en:"The residual $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ is the steepest-descent direction. Each step moves along $\\mathbf{r}^{(k)}$.",hu:"A reziduum $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ a legmeredekebb leszállási irány. Minden lépés az $\\mathbf{r}^{(k)}$ mentén halad."}},{term:{en:"Exact line search (optimal step)",hu:"Pontos vonalmenti keresés (optimális lépés)"},def:{en:"For a quadratic, the best step along $\\mathbf{r}^{(k)}$ has a closed form: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — minimizing $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$ exactly.",hu:"Kvadratikusra a legjobb lépés $\\mathbf{r}^{(k)}$ mentén zárt alakú: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — pontosan minimalizálja $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$-t."}},{term:{en:"Optimal gradient iteration",hu:"Optimális gradiens iteráció"},def:{en:"Repeat: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ as above, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. Converges for SPD $\\mathbf{A}$ but slowly (linearly) when $\\mathbf{A}$ is ill-conditioned — motivating conjugate gradients.",hu:"Ismételd: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ a fenti, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. SPD $\\mathbf{A}$-ra konvergál, de lassan (lineárisan), ha $\\mathbf{A}$ rosszul kondicionált — ez motiválja a konjugált gradiens módszert."}},{term:{en:"Local = global for quadratics (Cor 8.11)",hu:"Lokális = globális kvadratikusra (8.11)"},def:{en:"A quadratic function with a local minimum (maximum) has it as a global minimum (maximum) — no spurious local optima, so gradient descent on $g$ cannot get stuck.",hu:"Egy kvadratikus függvény lokális minimuma (maximuma) egyben globális minimum (maximum) — nincsenek hamis lokális szélsőértékek, így a $g$-n futó gradiens módszer nem akadhat el."}}],newton:[{term:{en:"Newton's method for minimization",hu:"Newton-módszer minimalizálásra"},def:{en:"Minimize $f$ by minimizing its local quadratic (Taylor) model: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — using both gradient and Hessian.",hu:"Minimalizáld $f$-et a lokális kvadratikus (Taylor-) modelljének minimalizálásával: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — a gradienst és a Hesse-mátrixot is használva."}},{term:{en:"Equivalent to Newton on $f'=\\mathbf{0}$",hu:"Ekvivalens a Newton-módszerrel $f'=\\mathbf{0}$-ra"},def:{en:"The iteration is exactly Newton's method for the nonlinear system $f'(\\mathbf{x})=\\mathbf{0}$ — finding a stationary point. The Hessian plays the role of the Jacobian.",hu:"Az iteráció pontosan a Newton-módszer az $f'(\\mathbf{x})=\\mathbf{0}$ nemlineáris rendszerre — stacionárius pont keresése. A Hesse-mátrix tölti be a Jacobi-mátrix szerepét."}},{term:{en:"Local quadratic convergence (Thm 8.13)",hu:"Lokális kvadratikus konvergencia (8.13. tétel)"},def:{en:"If $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, then $\\mathbf{p}$ is a local minimum and Newton's iteration converges to it quadratically from nearby starts.",hu:"Ha $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ és $f''(\\mathbf{p})$ pozitív definit, akkor $\\mathbf{p}$ lokális minimum, és a Newton-iteráció közeli kezdőpontból kvadratikusan konvergál hozzá."}},{term:{en:"Exact in one step for quadratics",hu:"Kvadratikusra egy lépésben pontos"},def:{en:"When $f$ is quadratic with positive-definite Hessian, Newton's method reaches the exact minimizer in a single step — the quadratic model equals $f$.",hu:"Ha $f$ kvadratikus, pozitív definit Hesse-mátrixszal, a Newton-módszer egyetlen lépésben eléri a pontos minimumhelyet — a kvadratikus modell megegyezik $f$-fel."}},{term:{en:"Degenerate Hessian ⇒ linear",hu:"Elfajuló Hesse ⇒ lineáris"},def:{en:"If the Hessian at the minimum is only semidefinite ($f''(\\mathbf{p})=\\mathbf{0}$ in the worst case), Newton may still converge but only linearly — the quadratic speed needs a positive-definite Hessian.",hu:"Ha a Hesse-mátrix a minimumban csak szemidefinit (legrosszabb esetben $f''(\\mathbf{p})=\\mathbf{0}$), a Newton konvergálhat, de csak lineárisan — a kvadratikus sebességhez pozitív definit Hesse kell."}},{term:{en:"Cost vs gradient descent",hu:"Költség vs gradiens módszer"},def:{en:"Each step needs the full Hessian and a linear solve ($O(n^3)$), far more than a gradient step — but it converges in far fewer iterations near the minimum. Quasi-Newton methods approximate the Hessian to balance the two.",hu:"Minden lépés a teljes Hesse-mátrixot és egy lineáris megoldást igényel ($O(n^3)$), sokkal többet egy gradienslépésnél — de a minimum közelében sokkal kevesebb iteráció alatt konvergál. A kvázi-Newton módszerek közelítik a Hesse-mátrixot a kettő egyensúlyozására."}}],quasinewton:[{term:{en:"Quasi-Newton method",hu:"Kvázi-Newton módszer"},def:{en:"Newton's minimization step $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$ where $\\mathbf{A}^{(k)}\\approx f''$ and $\\mathbf{v}^{(k)}\\approx f'$ are cheap approximations — avoiding exact Hessians.",hu:"A Newton-minimalizálási lépés $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$, ahol $\\mathbf{A}^{(k)}\\approx f''$ és $\\mathbf{v}^{(k)}\\approx f'$ olcsó közelítések — elkerülve a pontos Hesse-mátrixot."}},{term:{en:"Finite-difference Hessian",hu:"Differencia-Hesse"},def:{en:"One option: approximate $f'$ and $f''$ by forward/second-difference formulas. Simple but costs $\\sim n^2$ function evaluations per step.",hu:"Egy lehetőség: közelítsük $f'$-t és $f''$-t előre/második differencia képletekkel. Egyszerű, de lépésenként $\\sim n^2$ függvénykiértékelésbe kerül."}},{term:{en:"Broyden update for minimization",hu:"Broyden-frissítés minimalizálásra"},def:{en:"Apply Broyden's rank-one secant update (from §2.13) to approximate the Hessian while solving $f'(\\mathbf{x})=\\mathbf{0}$. Drawback: the resulting $\\mathbf{A}^{(k)}$ is generally neither symmetric nor positive definite.",hu:"Alkalmazd Broyden rang-egy szelő-frissítését (a §2.13-ból) a Hesse-mátrix közelítésére $f'(\\mathbf{x})=\\mathbf{0}$ megoldása közben. Hátrány: a kapott $\\mathbf{A}^{(k)}$ általában se nem szimmetrikus, se nem pozitív definit."}},{term:{en:"Secant equation",hu:"Szelő-egyenlet"},def:{en:"The Hessian approximation should satisfy $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ with $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — the curvature condition that ties the update to observed gradient change.",hu:"A Hesse-közelítés teljesítse $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$-t, ahol $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — a görbületi feltétel, amely a frissítést a megfigyelt gradiensváltozáshoz köti."}},{term:{en:"PSB update (Thm 8.17)",hu:"PSB-frissítés (8.17. tétel)"},def:{en:"The Powell-symmetric-Broyden update keeps $\\mathbf{A}^{(k)}$ **symmetric** while still satisfying the secant equation. Under the usual conditions the resulting quasi-Newton iteration converges **superlinearly**.",hu:"A Powell-szimmetrikus-Broyden frissítés **szimmetrikusan** tartja $\\mathbf{A}^{(k)}$-t, miközben teljesíti a szelő-egyenletet. A szokásos feltételek mellett a kapott kvázi-Newton iteráció **szuperlineárisan** konvergál."}},{term:{en:"Keeping $\\mathbf{A}^{(k)}$ positive definite",hu:"$\\mathbf{A}^{(k)}$ pozitív definitségének megőrzése"},def:{en:"For a genuine descent step the Hessian model should stay positive definite. Updating a factor $\\mathbf{M}$ with $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$ guarantees this — the idea behind BFGS-type methods.",hu:"Valódi leszállási lépéshez a Hesse-modellnek pozitív definitnek kell maradnia. Egy $\\mathbf{M}$ tényező frissítése $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$-vel ezt garantálja — ez a BFGS-típusú módszerek ötlete."}}]},Se={calculus:[{q:{en:"In the context of multi-variable calculus, what is the matrix $f''(\\mathbf{x})$ commonly called?",hu:"A többváltozós számítással összefüggésben hogyan nevezik általában a $f''(\\mathbf{x})$ mátrixot?"},a:{en:"The Hessian matrix.",hu:"A hesseni mátrix."}},{q:{en:"What is the entry in the $i$-th row and $j$-th column of a Hessian matrix $f''(\\mathbf{x})$?",hu:"Mi a bejegyzés egy $f''(\\mathbf{x})$ hesseni mátrix $i$-edik sorában és $j$-adik oszlopában?"},a:{en:"$\\frac{\\partial^2 f}{\\partial x_i, \\partial x_j}(\\mathbf{x})$",hu:"$\\frac{\\partial^2 f}{\\partial x_i, \\partial x_j}(\\mathbf{x})$"}},{q:{en:"A function $f$ maps from $\\mathbb{R}^n$ to which set to allow for the calculation of a Hessian matrix?",hu:"A $f$ függvény a $\\mathbb{R}^n$-ből melyik halmazra képezi le a Hess-mátrix kiszámítását?"},a:{en:"$\\mathbb{R}$",hu:"$\\mathbb{R}$"}},{q:{en:"What type of derivatives are located on the main diagonal of the Hessian matrix?",hu:"Milyen típusú származékok találhatók a Hess-mátrix főátlóján?"},a:{en:"Pure second-order partial derivatives (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$).",hu:"Tiszta másodrendű parciális származékok (pl. $\\frac{\\partial^2 f}{\\partial x_i^2}$)."}},{q:{en:"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ has a local extremum at point $\\mathbf{a}$, what must $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ equal for all $i = 1, \\dots, n$?",hu:"Ha a $f: \\mathbb{R}^n \\to \\mathbb{R}$ lokális szélsőértéke van a $\\mathbf{a}$ pontban, minek kell $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$-nek egyenlőnek lennie az összes $i = 1, \\dots, n$-re?"},a:{en:"$0$",hu:"$0$"}},{q:{en:"The first-order necessary condition for a local extremum states that the gradient vector $f'(\\mathbf{a})$ must be equal to _____.",hu:"A lokális szélsőség elsőrendű szükséges feltétele kimondja, hogy a $f'(\\mathbf{a})$ gradiensvektornak egyenlőnek kell lennie _____-val."},a:{en:"The zero vector $\\mathbf{0}$.",hu:"A $\\mathbf{0}$ nulla vektor."}},{q:{en:"Which smoothness class must a function $f$ belong to for the Hessian-based sufficient condition for extrema to apply?",hu:"Melyik simasági osztályba kell tartoznia egy $f$ függvénynek ahhoz, hogy a Hess-alapú elégséges feltétel érvényesüljön az extrémára?"},a:{en:"$C^2$ (twice continuously differentiable).",hu:"$C^2$ (kétszer folyamatosan differenciálható)."}},{q:{en:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is positive definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",hu:"Ha a $f'(\\mathbf{a}) = \\mathbf{0}$ és a hesseni mátrix $f''(\\mathbf{a})$ pozitív definit, akkor milyen szélsőértéke van a $f$-nek a $\\mathbf{a}$-nél?"},a:{en:"A local minimum.",hu:"Helyi minimum."}},{q:{en:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is negative definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",hu:"Ha a $f'(\\mathbf{a}) = \\mathbf{0}$ és a hesseni mátrix $f''(\\mathbf{a})$ negatív definit, akkor milyen szélsősége van a $f$-nek a $\\mathbf{a}$-nél?"},a:{en:"A local maximum.",hu:"Helyi maximum."}},{q:{en:"For a two-variable function $f(x, y)$, what are the two necessary first-order equations for a local extremum at $(a, b)$?",hu:"Egy kétváltozós $f(x, y)$ függvényhez mi a szükséges két elsőrendű egyenlet a $(a, b)$ lokális szélsőségéhez?"},a:{en:"$\\frac{\\partial f}{\\partial x}(a, b) = 0$ and $\\frac{\\partial f}{\\partial y}(a, b) = 0$.",hu:"$\\frac{\\partial f}{\\partial x}(a, b) = 0$ és $\\frac{\\partial f}{\\partial y}(a, b) = 0$."}},{q:{en:"In the second derivative test for two variables, how is the discriminant $D(a, b)$ defined?",hu:"A második derivált tesztben két változóra hogyan definiálható a $D(a, b)$ diszkrimináns?"},a:{en:"$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$.",hu:"$D(a, b):= \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$."}},{q:{en:"What condition on the discriminant $D(a, b)$ indicates that a function $f(x, y)$ has a local extremum at $(a, b)$, provided the first derivatives are zero?",hu:"A $D(a, b)$ diszkrimináns milyen feltétele jelzi, hogy a $f(x, y)$ függvénynek lokális szélsőértéke van a $(a, b)$-ben, feltéve, hogy az első deriváltak nullák?"},a:{en:"$D(a, b) > 0$",hu:"$D(a, b) > 0$"}},{q:{en:"If the discriminant $D(a, b)$ is less than zero ($D < 0$) at a stationary point, what is the conclusion regarding a local extremum?",hu:"Ha a diszkrimináns $D(a, b)$ kisebb, mint nulla ($D < 0$) egy stacionárius pontban, mi a következtetés a lokális szélsőségre vonatkozóan?"},a:{en:"The function $f$ has no extremum at $(a, b)$.",hu:"A $f$ funkciónak nincs extrémuma a $(a, b)$-nél."}},{q:{en:"To identify a local maximum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",hu:"Mi legyen a $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$ előjele egy kétváltozós függvény lokális maximumának azonosításához, amikor $D(a, b) > 0$?"},a:{en:"Negative ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$).",hu:"Negatív ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$)."}},{q:{en:"To identify a local minimum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",hu:"Mi legyen a $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$ előjele egy kétváltozós függvény lokális minimumának azonosításához, amikor $D(a, b) > 0$?"},a:{en:"Positive ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$).",hu:"Pozitív ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$)."}},{q:{en:"Formula: What is the first entry ($1, 1$) of the Hessian matrix $f''(\\mathbf{x})$?",hu:"Képlet: Mi a $f''(\\mathbf{x})$ hesseni mátrix első bejegyzése ($1, 1$)?"},a:{en:"$\\frac{\\partial^2 f}{\\partial x_1^2}(\\mathbf{x})$",hu:"$\\frac{\\partial^2 f}{\\partial x_1^2}(\\mathbf{x})$"}},{q:{en:"Formula: What is the entry in the last row and last column of an $n$-variable Hessian matrix?",hu:"Képlet: Mi a bejegyzés egy $n$-változós Hess-mátrix utolsó sorában és utolsó oszlopában?"},a:{en:"$\\frac{\\partial^2 f}{\\partial x_n^2}(\\mathbf{x})$",hu:"$\\frac{\\partial^2 f}{\\partial x_n^2}(\\mathbf{x})$"}},{q:{en:"According to Theorem 8.1, what is the necessary condition for a function $f$ to have a local extremum at $\\mathbf{a}$ regarding its partial derivatives?",hu:"A 8.1. Tétel szerint mi a szükséges feltétele annak, hogy egy $f$ függvénynek lokális szélsőértéke legyen a $\\mathbf{a}$ parciális deriváltjaira vonatkozóan?"},a:{en:"All partial derivatives $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ must equal zero.",hu:"Minden $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ parciális deriváltnak nullának kell lennie."}},{q:{en:"In Theorem 8.2, which property of $f$ ensures that the mixed partial derivatives $\\frac{\\partial^2 f}{\\partial x \\partial y}$ and $\\frac{\\partial^2 f}{\\partial y \\partial x}$ are equal?",hu:"A 8.2. Tételben a $f$ melyik tulajdonsága biztosítja, hogy a $\\frac{\\partial^2 f}{\\partial x \\partial y}$ és $\\frac{\\partial^2 f}{\\partial y \\partial x}$ vegyes parciális deriváltak egyenlőek legyenek?"},a:{en:"The assumption that $f \\in C^2$.",hu:"Az a feltételezés, hogy a $f \\in C^2$."}},{q:{en:"If $D(a, b) > 0$, the function $f(x, y)$ is guaranteed to have a(n) _____ at that point, assuming the first-order conditions are met.",hu:"Ha $D(a, b) > 0$, akkor a $f(x, y)$ függvénynek ezen a ponton garantáltan a(n) _____ lesz, feltéve, hogy az elsőrendű feltételek teljesülnek."},a:{en:"Local extremum",hu:"Lokális szélsőség"}},{q:{en:"For $n$ variables, if $f''(\\mathbf{a})$ is neither positive nor negative definite at a point where $f'(\\mathbf{a})=0$, what can be said about the extremum? (Note: Context restricted to the provided source material's explicit rules).",hu:"A $n$ változók esetében, ha a $f''(\\mathbf{a})$ sem nem pozitív, sem nem negatív definit abban a pontban, ahol $f'(\\mathbf{a})=0$, mit mondhatunk a szélsőségről? (Megjegyzés: A szövegkörnyezet a megadott forrásanyag kifejezett szabályaira korlátozódik)."},a:{en:"The provided theorems do not explicitly define the outcome for indefinite matrices.",hu:"A megadott tételek nem határozzák meg kifejezetten a határozatlan mátrixok eredményét."}},{q:{en:"What is the dimension of the Hessian matrix for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$?",hu:"Mekkora a Hess-mátrix dimenziója a $f: \\mathbb{R}^n \\to \\mathbb{R}$ függvényhez?"},a:{en:"$n \\times n$",hu:"$n \\times n$"}},{q:{en:"Identify the subtrahend in the formula for $D(a, b)$: $D(a, b) = f_{xx}f_{yy} - (\\dots)^2$.",hu:"Határozza meg a részalapot a $D(a, b)$ képletben: $D(a, b) = f_{xx}f_{yy} - (\\dots)^2$."},a:{en:"The mixed partial derivative $\\frac{\\partial^2 f}{\\partial x \\, \\partial y}(a, b)$.",hu:"A $\\frac{\\partial^2 f}{\\partial x \\, \\partial y}(a, b)$ vegyes parciális származék."}},{q:{en:"Term: Stationary Point (Implicit)",hu:"Fogalom: Állópont (implicit)"},a:{en:"Definition: A point $\\mathbf{a}$ where the first derivative (gradient) of a function is the zero vector, $f'(\\mathbf{a}) = \\mathbf{0}$.",hu:"Definíció: Olyan $\\mathbf{a}$ pont, ahol egy függvény első deriváltja (gradiense) a $f'(\\mathbf{a}) = \\mathbf{0}$ nulla vektor."}},{q:{en:"True or False: If $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ for all $i$, $f$ must have a local extremum at $\\mathbf{a}$.",hu:"Igaz vagy hamis: Ha a $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ az összes $i$ esetében, akkor a $f$ helyi szélsőértékkel kell rendelkeznie a $\\mathbf{a}$ értéknél."},a:{en:"False (it is a necessary but not sufficient condition).",hu:"Hamis (szükséges, de nem elégséges feltétel)."}},{q:{en:"For a function of two variables, if $f_{xx}(a, b) = 4$, $f_{yy}(a, b) = 3$, and $f_{xy}(a, b) = 1$, what is the value of $D(a, b)$?",hu:"Két változó függvényében, ha $f_{xx}(a, b) = 4$, $f_{yy}(a, b) = 3$ és $f_{xy}(a, b) = 1$, mennyi a $D(a, b)$ értéke?"},a:{en:"$11$ (calculated as $4 \\cdot 3 - 1^2$).",hu:"$11$ ($4 \\cdot 3 - 1^2$-ként számítva)."}},{q:{en:"If $D(a, b) = 11$ and $f_{xx} = 4$ at a stationary point, what type of extremum is present?",hu:"Ha a $D(a, b) = 11$ és a $f_{xx} = 4$ egy álló ponton van, milyen típusú szélsőség van jelen?"},a:{en:"Local minimum.",hu:"Helyi minimum."}},{q:{en:"In the Hessian matrix, the entry $\\frac{\\partial^2 f}{\\partial x_1, \\partial x_2}$ is located in which row and column?",hu:"A hesseni mátrixban melyik sorban és oszlopban található a $\\frac{\\partial^2 f}{\\partial x_1, \\partial x_2}$ bejegyzés?"},a:{en:"Row 1, Column 2.",hu:"1. sor, 2. oszlop."}},{q:{en:"The theorem states that if $D(a, b) < 0$, $f$ has _____ extremum at $(a, b)$.",hu:"A tétel kimondja, hogy ha a $D(a, b) < 0$, akkor a $f$ _____ szélsőértékkel rendelkezik a $(a, b)$ ponton."},a:{en:"No",hu:"Nem"}},{q:{en:"In the formula for the Hessian matrix, what is represented by the ellipsis ($\\dots$) in the first row?",hu:"Mit ábrázol a Hess-mátrix képletében az ellipszis ($\\dots$) az első sorban?"},a:{en:"The second-order partial derivatives with respect to $x_1$ and subsequent variables up to $x_n$.",hu:"A másodrendű parciális deriváltok a $x_1$ és az azt követő változók tekintetében $x_n$-ig."}},{q:{en:"What is the specific requirement for the Hessian matrix to be used to prove a local maximum at point $\\mathbf{a}$ for $f \\in \\mathbb{R}^n$?",hu:"Mi a konkrét követelmény ahhoz, hogy a Hess-mátrixot a $\\mathbf{a}$ pontban a $f \\in \\mathbb{R}^n$ helyi maximumának bizonyítására használjuk?"},a:{en:"The Hessian matrix $f''(\\mathbf{a})$ must be negative definite.",hu:"A $f''(\\mathbf{a})$ Hess-mátrixnak negatív határozottnak kell lennie."}},{q:{en:"How does Theorem 8.2 classify the point $(a, b)$ if $\\frac{\\partial f}{\\partial x} = 0$, $\\frac{\\partial f}{\\partial y} = 0$, and $D(a, b) < 0$?",hu:"Hogyan osztályozza a 8.2 tétel a $(a, b)$ pontot, ha $\\frac{\\partial f}{\\partial x} = 0$, $\\frac{\\partial f}{\\partial y} = 0$ és $D(a, b) < 0$?"},a:{en:"As a point with no local extremum.",hu:"Helyi szélsőség nélküli pontként."}},{q:{en:"In $n$-dimensional space, the derivative $f'(\\mathbf{a})$ refers to a vector of _____ partial derivatives.",hu:"A $n$-dimenziós térben a $f'(\\mathbf{a})$ derivált _____ parciális derivált vektorára utal."},a:{en:"First-order",hu:"Elsőrendű"}},{q:{en:"If a function is only partially differentiable but not $C^2$, can the second derivative test using the Hessian be applied?",hu:"Ha egy függvény csak részlegesen differenciálható, de nem $C^2$, akkor alkalmazható-e a második Hess-féle derivált teszt?"},a:{en:"No, the theorems require $f \\in C^2$ for the Hessian-based sufficient conditions.",hu:"Nem, a tételek $f \\in C^2$-t igényelnek a Hess-alapú elégséges feltételekhez."}},{q:{en:"What mathematical object is $f'(\\mathbf{a})$ in the context of Theorem 8.1?",hu:"Milyen matematikai objektum a $f'(\\mathbf{a})$ a 8.1 Tétel összefüggésében?"},a:{en:"The gradient vector (or the first derivative vector).",hu:"A gradiens vektor (vagy az első derivált vektor)."}},{q:{en:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$, the function has a local _____.",hu:"A 8.2. Tételben, ha $D(a, b) > 0$ és $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$, a függvény helyi _____."},a:{en:"Minimum",hu:"Minimális"}},{q:{en:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, the function has a local _____.",hu:"A 8.2. Tételben, ha $D(a, b) > 0$ és $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, a függvény helyi _____."},a:{en:"Maximum",hu:"Maximális"}},{q:{en:"How many separate equations must be satisfied for the first-order necessary condition of an $n$-variable function?",hu:"Hány különálló egyenletnek kell teljesülnie egy $n$-változós függvény elsőrendű szükséges feltételéhez?"},a:{en:"$n$ equations.",hu:"$n$ egyenletek."}},{q:{en:"The notation $f: \\mathbb{R}^n \\to \\mathbb{R}$ implies the function takes a _____ as input and returns a real number.",hu:"A $f: \\mathbb{R}^n \\to \\mathbb{R}$ jelölés arra utal, hogy a függvény egy _____-t vesz fel bemenetként, és valós számot ad vissza."},a:{en:"Vector (of $n$ components)",hu:"Vektor ($n$ alkatrészekből)"}},{q:{en:"According to the source, if $f'(\\mathbf{a}) = \\mathbf{0}$, $\\mathbf{a}$ is a candidate for a _____.",hu:"A forrás szerint, ha a $f'(\\mathbf{a}) = \\mathbf{0}$, akkor a $\\mathbf{a}$ egy _____ jelölt."},a:{en:"Local extremum",hu:"Lokális szélsőség"}},{q:{en:"Why is the term $\\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$ subtracted in the calculation of $D(a, b)$?",hu:"Miért kell a $\\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$ kifejezést kivonni a $D(a, b)$ kiszámításánál?"},a:{en:"It is part of the determinant calculation for the $2 \\times 2$ Hessian matrix.",hu:"Ez a $2 \\times 2$ Hess-mátrix determináns számításának része."}},{q:{en:"If the Hessian $f''(\\mathbf{a})$ is negative definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",hu:"Ha a hesseni $f''(\\mathbf{a})$ negatív határozott, mi a jele a $\\frac{\\partial^2 f}{\\partial x_i^2}$ átlós elemeinek?"},a:{en:"Negative (less than zero).",hu:"Negatív (nullánál kisebb)."}},{q:{en:"If the Hessian $f''(\\mathbf{a})$ is positive definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",hu:"Ha a hesseni $f''(\\mathbf{a})$ pozitív határozott, mi a jele a $\\frac{\\partial^2 f}{\\partial x_i^2}$ átlós elemeinek?"},a:{en:"Positive (greater than zero).",hu:"Pozitív (nagyobb, mint nulla)."}},{q:{en:"Theorem 8.2 is described as a _____ of Theorem 8.1 for the case $n=2$.",hu:"A 8.2 tételt a 8.1 tétel _____-jaként írjuk le a $n=2$ esetre."},a:{en:"Special case",hu:"Különleges eset"}},{q:{en:"What is the primary purpose of the Hessian matrix in optimization according to the source material?",hu:"Mi a Hess-mátrix elsődleges célja a forrásanyag szerinti optimalizálásban?"},a:{en:"To determine the nature of local extrema (minimum or maximum).",hu:"A helyi szélsőségek természetének meghatározása (minimális vagy maximum)."}},{q:{en:"In Theorem 8.1, the condition $f'(\\mathbf{a}) = \\mathbf{0}$ is checked _____ the definiteness of the Hessian.",hu:"A 8.1. Tételben a $f'(\\mathbf{a}) = \\mathbf{0}$ feltételt _____ a Hess-féle határozottság ellenőrzi."},a:{en:"Before (or simultaneously with)",hu:"Előtte (vagy vele egyidejűleg)"}},{q:{en:"Concept: $D(a, b)$ in Two Variables",hu:"Koncepció: $D(a, b)$ két változóban"},a:{en:"The discriminant of the function at $(a, b)$, used to identify the presence and type of local extrema.",hu:"A $(a, b)$ funkció diszkriminátora, amely a helyi szélsőségek jelenlétének és típusának azonosítására szolgál."}},{q:{en:"Can a function have a local extremum at a point where a partial derivative is non-zero?",hu:"Lehet-e egy függvénynek lokális szélsőértéke olyan pontban, ahol a parciális derivált értéke nem nulla?"},a:{en:"No, the necessary condition requires all partial derivatives to be zero.",hu:"Nem, a szükséges feltétel megköveteli, hogy minden parciális derivált nulla legyen."}},{q:{en:"For a two-variable function, if $f_{xx} = -2$, $f_{yy} = -5$, and $f_{xy} = 0$ at a stationary point, what type of extremum is found?",hu:"Kétváltozós függvény esetén, ha $f_{xx} = -2$, $f_{yy} = -5$ és $f_{xy} = 0$ egy stacionárius pontban, milyen típusú szélsőérték található?"},a:{en:"Local maximum (since $D = 10 > 0$ and $f_{xx} = -2 < 0$).",hu:"Helyi maximum ($D = 10 > 0$ és $f_{xx} = -2 < 0$ óta)."}},{q:{en:"The provided source material is part of a course on which mathematical discipline?",hu:"A rendelkezésre bocsátott forrásanyag melyik matematikai tudományágon található kurzus része?"},a:{en:"Numerical Analysis (Szélsőértékszámítás / Minimization of Functions).",hu:"Numerical Analysis (Szélsőértékszámítás / Minimization of Functions)."}},{q:{en:"What is the symbol used for the Hessian matrix of $f$ in the provided text?",hu:"Mi a $f$ hesszi mátrixának szimbóluma a mellékelt szövegben?"},a:{en:"$f''(\\mathbf{x})$",hu:"$f''(\\mathbf{x})$"}},{q:{en:"In the notation $\\frac{\\partial^2 f}{\\partial x_n, \\partial x_1}(\\mathbf{x})$, which variable was the function differentiated with respect to first?",hu:"A $\\frac{\\partial^2 f}{\\partial x_n, \\partial x_1}(\\mathbf{x})$ jelölésben melyik változóhoz képest differenciált először a függvény?"},a:{en:"$x_1$",hu:"$x_1$"}},{q:{en:"The second derivative test using $D(a, b)$ fails to provide a conclusion if $D(a, b)$ equals _____.",hu:"A $D(a, b)$-t használó második derivált teszt nem ad következtetést, ha a $D(a, b)$ egyenlő _____."},a:{en:"$0$",hu:"$0$"}}],golden:[{q:{en:"What is the primary requirement for a function $f$ to be considered unimodal on the interval $[a, b]$?",hu:"Mi az elsődleges követelmény ahhoz, hogy egy $f$ függvényt unimodálisnak tekintsünk a $[a, b]$ intervallumon?"},a:{en:"The function must be continuous and have a unique local minimum in the interval $[a, b]$.",hu:"A függvénynek folyamatosnak kell lennie, és egyedi helyi minimummal kell rendelkeznie a $[a, b]$ intervallumban."}},{q:{en:"Is convexity a necessary condition for a function to be unimodal?",hu:"A konvexitás szükséges feltétele annak, hogy egy függvény unimodális legyen?"},a:{en:"No, convexity is sufficient but not necessary for a function to be unimodal.",hu:"Nem, a konvexitás elegendő, de nem szükséges ahhoz, hogy egy függvény unimodális legyen."}},{q:{en:"In the golden section search method, if $f(x) > f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",hu:"Az aranymetszet keresési módszerében, ha $f(x) > f(y)$ ahol $a < y < x < b$, melyik intervallumot választja a következő lépéshez?"},a:{en:"The interval $[a, x]$ is chosen.",hu:"A $[a, x]$ intervallum van kiválasztva."}},{q:{en:"In the golden section search method, if $f(x) \\leq f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",hu:"Az aranymetszet keresési módszerében, ha $f(x) \\leq f(y)$ ahol $a < y < x < b$, melyik intervallumot választja a következő lépéshez?"},a:{en:"The interval $[y, b]$ is chosen.",hu:"A $[y, b]$ intervallum van kiválasztva."}},{q:{en:"How does the golden section search method define points $x$ and $y$ relative to the interval $[a, b]$ and a ratio $r$?",hu:"Hogyan határozza meg az aranymetszet keresési módszer a $x$ és $y$ pontokat a $[a, b]$ intervallumhoz és a $r$ arányhoz képest?"},a:{en:"$x = a + r(b - a)$ and $y = a + (1 - r)(b - a)$.",hu:"$x = a + r(b - a)$ és $y = a + (1 - r)(b - a)$."}},{q:{en:"What constraint must be placed on the ratio $r$ to ensure that $x > y$ in the golden section search method?",hu:"Milyen megszorítást kell alkalmazni a $r$ arányra, hogy biztosítsuk, hogy $x > y$ az aranymetszet keresési módszerében?"},a:{en:"The ratio $r$ must satisfy $0.5 < r < 1$.",hu:"A $r$ aránynak meg kell felelnie a $0.5 < r < 1$ értéknek."}},{q:{en:"The golden section search method is similar to which root-finding method in its approach to narrowing intervals?",hu:"Az aranymetszet keresési módszere melyik gyökérkereső módszerhez hasonlít az intervallumok szűkítésének megközelítésében?"},a:{en:"It is similar to the bisection method.",hu:"Hasonló a felezési módszerhez."}},{q:{en:"What is the primary motivation for selecting $r$ specifically as the golden section ratio?",hu:"Mi az elsődleges motiváció arra, hogy a $r$-t kifejezetten aranymetszet-átmérőként válassza ki?"},a:{en:"It allows one of the new mesh points to coincide with a previous mesh point, requiring only one new function evaluation per step.",hu:"Lehetővé teszi, hogy az egyik új hálópont egybeessen egy korábbi hálóponttal, és lépésenként csak egy új funkcióértékelésre van szükség."}},{q:{en:"If the next interval is $[a', b'] = [y, b]$, what is the specific requirement for the new point $y'$ to optimize evaluations?",hu:"Ha a következő intervallum $[a', b'] = [y, b]$, mi a konkrét követelmény az új $y'$ ponttal szemben az értékelések optimalizálásához?"},a:{en:"The requirement is that $y' = x$.",hu:"A követelmény az, hogy $y' = x$."}},{q:{en:"Which quadratic equation must the ratio $r$ satisfy in the golden section search method?",hu:"Melyik másodfokú egyenletnek kell megfelelnie a $r$ aránynak az aranymetszet keresési módszerében?"},a:{en:"It must satisfy $r^2 + r - 1 = 0$.",hu:"Meg kell felelnie a $r^2 + r - 1 = 0$ követelményeinek."}},{q:{en:"What is the exact value of the positive solution for $r$ in the golden section search method?",hu:"Mennyi a $r$ pozitív megoldásának pontos értéke az aranymetszet keresési módszerében?"},a:{en:"$r = \\frac{\\sqrt{5} - 1}{2}$.",hu:"$r = \\frac{\\sqrt{5} - 1}{2}$."}},{q:{en:"What is the approximate decimal value of the golden section ratio $r$?",hu:"Mekkora a $r$ aranymetszet-arány hozzávetőleges tizedes értéke?"},a:{en:"The value is approximately $0.61834$.",hu:"Az érték hozzávetőlegesen $0.61834$."}},{q:{en:"What algebraic relationship involving $r$ and $(1-r)$ defines the golden section ratio?",hu:"Milyen $r$ és $(1-r)$ algebrai összefüggés határozza meg az aranymetszet arányát?"},a:{en:"The relationship is $\\frac{r}{1 - r} = \\frac{1}{r}$.",hu:"A kapcsolat a $\\frac{r}{1 - r} = \\frac{1}{r}$."}},{q:{en:"What is the formula for the length of the interval after $n$ steps of the golden section search method?",hu:"Mi az aranymetszet keresési módszerének $n$ lépései utáni intervallum hosszának képlete?"},a:{en:"The length is $(b - a)r^n$.",hu:"A hossza $(b - a)r^n$."}},{q:{en:"Formula: How many steps $n$ are required to reach a tolerance $\\varepsilon$ in golden section search?",hu:"Képlet: Hány lépésre van szükség $n$ $\\varepsilon$ tűrés eléréséhez az aranymetszet keresésben?"},a:{en:"$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r}$.",hu:"$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r}$."}},{q:{en:"If the minimum point $p$ is located in the interval $[a, x]$, what condition is placed on $x'$ and $y$ to maintain evaluation efficiency?",hu:"Ha a $p$ minimumpont a $[a, x]$ intervallumban található, milyen feltételt kell szabni a $x'$ és $y$ értékeknek az értékelés hatékonyságának megőrzése érdekében?"},a:{en:"The condition is that $x' = y$.",hu:"A feltétel az, hogy $x' = y$."}},{q:{en:"According to Theorem 8.4, what happens to the golden section search method if the function $f \\in C[a, b]$ is unimodal?",hu:"A 8.4. Tétel szerint mi történik az aranymetszet keresési módszerrel, ha a $f \\in C[a, b]$ függvény unimodális?"},a:{en:"The method converges to the unique minimum point of the function $f$.",hu:"A módszer a $f$ függvény egyedi minimumpontjához konvergál."}},{q:{en:"What is typically the final output of the golden section search algorithm to approximate the minimum point?",hu:"Általában mi az aranymetszet-kereső algoritmus végső kimenete a minimumpont közelítéséhez?"},a:{en:"The output is the midpoint of the final interval reached after $n$ steps.",hu:"A kimenet a $n$ lépések után elért végső intervallum felezőpontja."}},{q:{en:"In the example function $f(x) = x^2 - 0.8x + 1$, what is the exact minimum point $p$?",hu:"A $f(x) = x^2 - 0.8x + 1$ példafüggvényben mi a $p$ pontos minimumpontja?"},a:{en:"The minimum point is $p = 0.4$.",hu:"A minimum pont a $p = 0.4$."}},{q:{en:"For the function $f(x) = x^2 - 0.8x + 1$ on $[-1, 2]$ with $\\varepsilon = 0.005$, how many steps $n$ were theoretically required?",hu:"A $f(x) = x^2 - 0.8x + 1$ funkcióhoz a $[-1, 2]$ $\\varepsilon = 0.005$-vel együtt, elméletileg hány lépésre volt szükség a $n$-re?"},a:{en:"Approximately $13.29$ steps were required.",hu:"Körülbelül $13.29$ lépésekre volt szükség."}},{q:{en:"In the example provided, what was the approximate minimum value produced by the algorithm after 14 iterations?",hu:"A megadott példában mi volt az algoritmus által 14 iteráció után előállított hozzávetőleges minimális érték?"},a:{en:"The value was $0.3995535068$.",hu:"Az érték $0.3995535068$ volt."}},{q:{en:"In Table 8.1, what were the initial interval bounds ($a_0, b_0$) used for the search?",hu:"A 8.1. táblázatban milyen kezdeti intervallumhatárokat ($a_0, b_0$) használtak a kereséshez?"},a:{en:"$[-1.0000000000, 2.0000000000]$.",hu:"$[-1.0000000000, 2.0000000000]$."}},{q:{en:"The points $x$ and $y$ are chosen such that the lengths of which two sub-intervals are identical?",hu:"A $x$ és $y$ pontokat úgy választjuk meg, hogy melyik két részintervallum hossza azonos?"},a:{en:"The intervals $[a, x]$ and $[y, b]$.",hu:"A $[a, x]$ és $[y, b]$ intervallumok."}},{q:{en:"If $f$ is continuous and unimodal on $[a, b]$, does the golden section search method always converge?",hu:"Ha a $f$ folyamatos és unimodális a $[a, b]$-n, akkor az aranymetszet keresési módszer mindig konvergál?"},a:{en:"Yes, it is guaranteed to converge to the minimum point.",hu:"Igen, garantáltan konvergál a minimum ponthoz."}},{q:{en:"In golden section search, $y$ is defined as $a + (1 - r)(b - a)$. What does $(1 - r)$ approximately equal?",hu:"Az aranymetszet-keresésben a $y$ $a + (1 - r)(b - a)$-ként van definiálva. Körülbelül mit jelent a $(1 - r)$?"},a:{en:"It approximately equals $0.38196$.",hu:"Ez körülbelül megegyezik a $0.38196$-vel."}},{q:{en:"Term: Unimodal Function",hu:"Fogalom: Unimodális funkció"},a:{en:"Definition: A continuous function on an interval $[a, b]$ that possesses exactly one local minimum.",hu:"Definíció: Folyamatos függvény egy $[a, b]$ intervallumon, amely pontosan egy helyi minimummal rendelkezik."}},{q:{en:"How many new function evaluations are required in each step of the golden section search after the initialization?",hu:"Az inicializálás után hány új függvényértékelésre van szükség az aranymetszet-keresés egyes lépéseiben?"},a:{en:"Only one new function value must be evaluated per step.",hu:"Lépésenként csak egy új függvényértéket kell kiértékelni."}},{q:{en:"What does the expression $x - a = b - y = r(b - a)$ imply about the symmetry of $x$ and $y$?",hu:"Mit takar a $x - a = b - y = r(b - a)$ kifejezés a $x$ és a $y$ szimmetriájáról?"},a:{en:"The points $x$ and $y$ are placed symmetrically with respect to the midpoint of the interval $[a, b]$.",hu:"A $x$ és $y$ pontok szimmetrikusan helyezkednek el a $[a, b]$ intervallum felezőpontjához képest."}},{q:{en:"The golden section search method reduces the interval size by a factor of _____ in every iteration.",hu:"Az aranymetszet-keresési módszer minden iterációban _____-szorosára csökkenti az intervallum méretét."},a:{en:"The factor is $r$ (approximately $0.618$).",hu:"A tényező a $r$ (körülbelül $0.618$)."}},{q:{en:"If the initial interval is $[a, b]$, what is the length of the interval after the first reduction step?",hu:"Ha a kezdeti intervallum $[a, b]$, mennyi az intervallum az első redukciós lépés után?"},a:{en:"The length is $r(b - a)$.",hu:"A hossza $r(b - a)$."}},{q:{en:"If a function is defined on $[-1, 1]$ as $f(x) = -1/x^2$, is the golden section search method applicable?",hu:"Ha egy függvény $[-1, 1]$-n $f(x) = -1/x^2$-ként van definiálva, alkalmazható-e az aranymetszet keresési módszere?"},a:{en:"No, because the function is not continuous at $x = 0$ and is not unimodal on that interval.",hu:"Nem, mert a függvény nem folyamatos a $x = 0$-nél, és nem unimodális ezen az intervallumon."}},{q:{en:"Why is the requirement $x > y$ necessary for the algorithm's interval logic?",hu:"Miért szükséges a $x > y$ követelmény az algoritmus intervallumlogikájához?"},a:{en:"It ensures that the interior points are distinct and create a valid overlapping structure for comparison.",hu:"Biztosítja, hogy a belső pontok különállóak legyenek, és érvényes átfedő szerkezetet hozzon létre az összehasonlításhoz."}},{q:{en:"In the derivation of $r$, the expression $r = 1 - r + (1 - r)(1 - (1 - r))$ simplifies directly to which equation?",hu:"A $r$ levezetésében a $r = 1 - r + (1 - r)(1 - (1 - r))$ kifejezés közvetlenül melyik egyenletre egyszerűsödik?"},a:{en:"It simplifies to $r = 1 - r + r - r^2$, which is $r^2 + r - 1 = 0$.",hu:"Leegyszerűsödik a $r = 1 - r + r - r^2$-re, ami a $r^2 + r - 1 = 0$."}},{q:{en:"What happens to the golden section search method if the function has multiple local minima?",hu:"Mi történik az aranymetszet keresési módszerével, ha a függvénynek több helyi minimuma van?"},a:{en:"The method may converge to only one of the local minima or fail to correctly bracket a minimum if unimodality is violated.",hu:"Előfordulhat, hogy a módszer csak a helyi minimumok egyikéhez konvergál, vagy nem tesz helyesen zárójelbe egy minimumot, ha az unimodalitás sérül."}},{q:{en:"In the specific example, what was the length of the initial interval ($b_0 - a_0$)?",hu:"A konkrét példában mekkora volt a kezdeti intervallum ($b_0 - a_0$)?"},a:{en:"The length was $3$.",hu:"A hossza $3$ volt."}},{q:{en:"If $b - a = 1$ and $r \\approx 0.618$, what is the length of the interval after 2 steps?",hu:"Ha $b - a = 1$ és $r \\approx 0.618$, mennyi az intervallum 2 lépés után?"},a:{en:"The length is $r^2$, which is approximately $0.382$.",hu:"A hossza $r^2$, ami körülbelül $0.382$."}},{q:{en:"Is the golden section search method used for finding maximums or minimums of functions?",hu:"Az aranymetszet keresési módszert a függvények maximumának vagy minimumának megtalálására használják?"},a:{en:"It is primarily used to find the minimum of a unimodal function.",hu:"Elsősorban az unimodális függvény minimumának meghatározására szolgál."}},{q:{en:"To find the maximum of a unimodal function using this method, what modification should be made?",hu:"Milyen módosítást kell végrehajtani ahhoz, hogy ezzel a módszerrel megtaláljuk az unimodális függvény maximumát?"},a:{en:"One should search for the minimum of $-f(x)$.",hu:"Meg kell keresni a $-f(x)$ minimumát."}},{q:{en:"In Equation (8.2), if $r = 0.5$, what would happen to the points $x$ and $y$?",hu:"A (8.2) egyenletben, ha $r = 0.5$, mi történne a $x$ és $y$ pontokkal?"},a:{en:"The points $x$ and $y$ would coincide at the midpoint of the interval.",hu:"A $x$ és $y$ pontok az intervallum felezőpontjában esnek egybe."}},{q:{en:"Given the function $f(x) = |\\cos x|$ on $[0, 2]$, why is it considered unimodal?",hu:"A $[0, 2]$ $f(x) = |\\cos x|$ funkciója miatt miért tekinthető unimodálisnak?"},a:{en:"Because it has a unique local minimum in that interval (at $x = \\pi/2$).",hu:"Mert ebben az intervallumban van egy egyedi lokális minimuma ($x = \\pi/2$-nél)."}},{q:{en:"What is the role of the tolerance $\\varepsilon$ in Algorithm 8.3?",hu:"Mi a szerepe a $\\varepsilon$ tűrésnek a 8.3-as algoritmusban?"},a:{en:"It serves as the stopping criterion, determining the maximum allowable length of the final interval.",hu:"Ez szolgál leállási kritériumként, meghatározva a végső intervallum maximális megengedett hosszát."}},{q:{en:"If $x'$ and $y'$ are the new points in the interval $[a', b']$, how are they derived from the original interval variables?",hu:"Ha $x'$ és $y'$ az új pontok a $[a', b']$ intervallumban, hogyan származtatják őket az eredeti intervallumváltozókból?"},a:{en:"They are calculated using the same ratio $r$ applied to the new interval boundaries $a'$ and $b'$.",hu:"Kiszámításuk az új $a'$ és $b'$ intervallumhatárokra alkalmazott $r$ aránnyal történik."}},{q:{en:"The sequence of intervals $[a_k, b_k]$ produced by the golden section search is described as being _____.",hu:"Az aranymetszet-keresés által előállított $[a_k, b_k]$ intervallumok sorozata _____."},a:{en:"Nested.",hu:"Beágyazott."}},{q:{en:"When $f(x) > f(y)$, we know $p \\in [a, x]$. Why is $b$ discarded?",hu:"Amikor $f(x) > f(y)$, akkor tudjuk, hogy $p \\in [a, x]$. Miért dobták ki a $b$-t?"},a:{en:"Because for a unimodal function, if the value at $x$ is higher than at $y$ (where $y < x$), the minimum cannot be to the right of $x$.",hu:"Mert egy unimodális függvénynél, ha a $x$ érték nagyobb, mint a $y$ (ahol $y < x$), a minimum nem lehet a $x$ jobb oldalán."}},{q:{en:"True or False: The golden section search requires the derivative of the function to be known.",hu:"Igaz vagy hamis: Az aranymetszet-kereséshez ismerni kell a függvény deriváltját."},a:{en:"False, it only requires function evaluations.",hu:"Hamis, csak függvényértékeléseket igényel."}},{q:{en:"In the example table, as $k$ increases, what happens to the distance $b_k - a_k$?",hu:"A példatáblázatban, amikor a $k$ növekszik, mi történik a $b_k - a_k$ távolsággal?"},a:{en:"The distance decreases geometrically by a factor of $r$.",hu:"A távolság geometriailag $r$ tényezővel csökken."}},{q:{en:"If the tolerance $\\varepsilon$ is halved, how does the required number of steps $n$ change roughly?",hu:"Ha a $\\varepsilon$ tűrés felére csökken, hogyan változik nagyjából a $n$ szükséges lépésszám?"},a:{en:"It increases by approximately $\\frac{\\log(0.5)}{\\log(r)} \\approx 1.44$ steps.",hu:"Körülbelül $\\frac{\\log(0.5)}{\\log(r)} \\approx 1.44$ lépésekkel növekszik."}},{q:{en:"The method is 'golden' because $r$ is the _____.",hu:"A módszer „arany”, mert a $r$ a _____."},a:{en:"Golden ratio (specifically the conjugate or reciprocal relationship).",hu:"Aranymetszés (konjugált vagy reciprok kapcsolat)."}},{q:{en:"If $a=0, b=10$, and $r=0.6$, what is the value of $x$?",hu:"Ha $a=0, b=10$ és $r=0.6$, mennyi a $x$ értéke?"},a:{en:"$x = 0 + 0.6(10 - 0) = 6$.",hu:"$x = 0 + 0.6(10 - 0) = 6$."}},{q:{en:"If $a=0, b=10$, and $r=0.6$, what is the value of $y$?",hu:"Ha $a=0, b=10$ és $r=0.6$, mennyi a $y$ értéke?"},a:{en:"$y = 0 + (1 - 0.6)(10 - 0) = 4$.",hu:"$y = 0 + (1 - 0.6)(10 - 0) = 4$."}},{q:{en:"In the exercise $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$, what kind of point are we looking for?",hu:"Milyen pontot keresünk a $f(x) = 1 - 10xe^{-x}$ gyakorlatban a $[0, 2]$-n?"},a:{en:"The minimum point of the function.",hu:"A függvény minimális pontja."}},{q:{en:"If the algorithm terminates at iteration $k=14$ with $[a_{14}, b_{14}]$, how is the result $0.3995535068$ calculated?",hu:"Ha az algoritmus a $k=14$ iterációnál $[a_{14}, b_{14}]$-vel végződik, hogyan számítják ki a $0.3995535068$ eredményt?"},a:{en:"It is calculated as $\\frac{a_{14} + b_{14}}{2}$.",hu:"A számítás a következőképpen történik: $\\frac{a_{14} + b_{14}}{2}$."}},{q:{en:"Which of the following functions on $[0, 2]$ is likely unimodal based on the source text: $x^2$ or $x^2 - x^4$?",hu:"A $[0, 2]$ következő funkciói közül melyik valószínű unimodális a forrásszöveg alapján: $x^2$ vagy $x^2 - x^4$?"},a:{en:"$x^2$ is unimodal on $[0, 2]$.",hu:"A $x^2$ unimodális a $[0, 2]$-n."}},{q:{en:"In step 0 of the example, $y_0$ is $0.1458980338$. In step 1, the interval becomes $[-1, 0.8541]$. What is the value of $x_1$?",hu:"A példa 0. lépésében a $y_0$ a $0.1458980338$. Az 1. lépésben az intervallum $[-1, 0.8541]$ lesz. Mennyi a $x_1$ értéke?"},a:{en:"$x_1 = 0.1458980338$ (it matches the previous $y_0$).",hu:"$x_1 = 0.1458980338$ (egyezik az előző $y_0$-vel)."}},{q:{en:"In the golden section search, does the interval $[a, b]$ always contain the minimum $p$?",hu:"Az aranymetszet keresésben a $[a, b]$ intervallum mindig tartalmazza a minimális $p$ értéket?"},a:{en:"Yes, the algorithm is designed such that the minimum point $p$ is always contained within each subsequent interval.",hu:"Igen, az algoritmus úgy van megtervezve, hogy a $p$ minimumpont mindig minden következő intervallumon belül legyen."}}],simplex:[{q:{en:"What is the mathematical definition of an $n$-dimensional simplex?",hu:"Mi a $n$-dimenziós szimplex matematikai meghatározása?"},a:{en:"The convex hull of $n + 1$ vectors in an $n$-dimensional space, where the differences between any $n$ vertices and the remaining vertex are linearly independent.",hu:"A $n + 1$ vektorok konvex burka egy $n$-dimenziós térben, ahol a $n$ csúcsok és a fennmaradó csúcsok közötti különbségek lineárisan függetlenek."}},{q:{en:"In the context of simplexes, what geometric shape represents a 1-dimensional simplex?",hu:"A szimplexek összefüggésében milyen geometriai alakzat reprezentál egy 1-dimenziós szimplexet?"},a:{en:"A line segment.",hu:"Egy vonalszakasz."}},{q:{en:"What geometric shape corresponds to a 2-dimensional simplex?",hu:"Milyen geometriai alakzat felel meg egy 2-dimenziós szimplexnek?"},a:{en:"A triangle.",hu:"Egy háromszög."}},{q:{en:"What geometric shape corresponds to a 3-dimensional simplex?",hu:"Milyen geometriai alakzat felel meg egy 3-dimenziós szimplexnek?"},a:{en:"A tetrahedron.",hu:"Egy tetraéder."}},{q:{en:"The simplex method is a numerical technique primarily used to approximate the _____ of a function of $n$ variables.",hu:"A szimplex módszer egy numerikus technika, amelyet elsősorban a $n$ változók függvényének _____ értékének közelítésére használnak."},a:{en:"minimum point",hu:"minimum pont"}},{q:{en:"How are the vertices of a simplex usually indexed at the start of an iteration in the simplex method?",hu:"Hogyan szokták indexelni a szimplex csúcsait az iteráció elején a szimplex módszerben?"},a:{en:"They are ordered by their function values, such that $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$.",hu:"Funkcióértékeik szerint vannak rendezve, úgy, hogy a $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."}},{q:{en:"In a simplex where $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$, which vector is designated as the 'worst' vertex?",hu:"Egy szimplexben, ahol $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$, melyik vektor van kijelölve a „legrosszabb” csúcsnak?"},a:{en:"$\\mathbf{x}^{(n)}$",hu:"$\\mathbf{x}^{(n)}$"}},{q:{en:"In the simplex method, what is the formula for calculating the center $\\mathbf{x}_c$ of the $n$ best vertices when $\\mathbf{x}^{(j)}$ is the worst vertex?",hu:"A szimplex módszerben mi a képlet a $n$ legjobb csúcsok $\\mathbf{x}_c$ középpontjának kiszámításához, ha a $\\mathbf{x}^{(j)}$ a legrosszabb csúcs?"},a:{en:"$\\mathbf{x}_c := \\frac{1}{n} \\sum_{i=0, i \\neq j}^{n} \\mathbf{x}^{(i)}$",hu:"$\\mathbf{x}_c:= \\frac{1}{n} \\sum_{i=0, i \\neq j}^{n} \\mathbf{x}^{(i)}$"}},{q:{en:"What is the formula used to calculate the reflected point $\\mathbf{x}_r$ in the simplex method?",hu:"Milyen képlettel számítják ki a szimplex módszerben a $\\mathbf{x}_r$ tükrözött pontot?"},a:{en:"$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$",hu:"$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$"}},{q:{en:"Under what condition is a reflection discarded and replaced by a 'shrink' operation in the basic simplex method?",hu:"Milyen feltételek mellett dobják el a tükrözést, és egy „zsugorítási” művelettel helyettesítik az alapvető szimplex módszerben?"},a:{en:"When the function value at the reflected point $f(\\mathbf{x}_r)$ is not smaller than the function value of the worst vertex $f(\\mathbf{x}^{(j)})$.",hu:"Ha a $f(\\mathbf{x}_r)$ tükrözött pontban a függvény értéke nem kisebb, mint a $f(\\mathbf{x}^{(j)})$ legrosszabb csúcs függvényértéke."}},{q:{en:"What is the formula for recomputing a vertex $\\mathbf{x}^{(i)}$ when shrinking a simplex towards the best vertex $\\mathbf{x}^{(k)}$?",hu:"Mi a képlet a $\\mathbf{x}^{(i)}$ csúcs újraszámításához, ha egy szimplexet a legjobb $\\mathbf{x}^{(k)}$ csúcs felé zsugorítunk?"},a:{en:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)})$",hu:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)})$"}},{q:{en:"One stopping criterion for the simplex method is based on the simplex size. How is 'size' defined in this context?",hu:"A szimplex módszer egyik megállítási kritériuma a szimplex méreten alapul. Hogyan definiálható a „méret” ebben az összefüggésben?"},a:{en:"The length of the longest edge, calculated as $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\dots, n\\}$.",hu:"A leghosszabb él hossza, $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\|: i, j = 0, \\dots, n\\}$-ként számítva."}},{q:{en:"How does the stopping criterion based on function values at the simplex centers operate?",hu:"Hogyan működik a szimplex középpontokban lévő függvényértékeken alapuló leállítási kritérium?"},a:{en:"The iteration stops when the absolute difference between the function values at the centers of consecutive simplexes is less than a tolerance $\\varepsilon$ ($|f_{k+1} - f_k| < \\varepsilon$).",hu:"Az iteráció leáll, ha az egymást követő szimplexek középpontjában lévő függvényértékek közötti abszolút különbség kisebb, mint a $\\varepsilon$ ($|f_{k+1} - f_k| < \\varepsilon$) tűrés."}},{q:{en:"What statistical measure of function values at the vertices can be used as a stopping criterion for the simplex method?",hu:"A csúcsokban lévő függvényértékek milyen statisztikai mérőszáma használható megállítási kritériumként a szimplex módszerhez?"},a:{en:"The standard deviation $\\sigma$ of the function values at the vertices.",hu:"A függvényértékek $\\sigma$ szórása a csúcsokban."}},{q:{en:"Formula: Standard deviation $\\sigma$ of vertex function values",hu:"Képlet: A csúcsfüggvény értékeinek $\\sigma$ szórása"},a:{en:"$\\sigma := \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}$, where $\\bar{f}$ is the average function value.",hu:"$\\sigma:= \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}$, ahol $\\bar{f}$ az átlagos függvényérték."}},{q:{en:"Which point is typically used as the final approximation of the minimum point after the simplex method terminates?",hu:"Melyik pontot használják jellemzően a minimumpont végső közelítéseként a szimplex módszer befejezése után?"},a:{en:"The center of the final simplex.",hu:"A végső szimplex középpontja."}},{q:{en:"The _____ method is a popular variant of the simplex method that incorporates reflection, expansion, and contraction.",hu:"A _____ módszer a szimplex módszer népszerű változata, amely magában foglalja a tükrözést, a kiterjesztést és az összehúzódást."},a:{en:"Nelder–Mead",hu:"Nelder–Mead"}},{q:{en:"In the Nelder–Mead method, how are the vertices indexed in each step?",hu:"A Nelder–Mead módszerben hogyan vannak indexelve a csúcsok az egyes lépésekben?"},a:{en:"In non-decreasing order of their function values: $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$.",hu:"Függvényértékeik nem csökkenő sorrendjében: $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."}},{q:{en:"What occurs in Case (i) of the Nelder–Mead method, where $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$?",hu:"Mi történik a Nelder–Mead módszer (i) esetében, ahol $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$?"},a:{en:"The worst vertex $\\mathbf{x}^{(n)}$ is replaced by the reflected point $\\mathbf{x}_r$, and the iteration continues.",hu:"A legrosszabb $\\mathbf{x}^{(n)}$ csúcsot a visszavert $\\mathbf{x}_r$ pont váltja fel, és az iteráció folytatódik."}},{q:{en:"In Case (ii) of the Nelder–Mead method, if $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, what procedure is attempted next?",hu:"A Nelder–Mead módszer (ii) esetében, ha $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, milyen eljárást kísérel meg ezután?"},a:{en:"Expansion of the simplex in the direction of the reflected point $\\mathbf{x}_r$.",hu:"A szimplex kiterjesztése a visszavert pont irányába $\\mathbf{x}_r$."}},{q:{en:"What is the formula for the expansion point $\\mathbf{x}_e$ in the Nelder–Mead method?",hu:"Mi a $\\mathbf{x}_e$ tágulási pont képlete a Nelder–Mead módszerben?"},a:{en:"$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c)$, where $\\alpha > 1$.",hu:"$\\mathbf{x}_e:= \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c)$, ahol $\\alpha > 1$."}},{q:{en:"In Nelder–Mead Case (ii), when is the expansion point $\\mathbf{x}_e$ accepted as the new vertex?",hu:"Nelder–Mead (ii) esetben mikor fogadják el a $\\mathbf{x}_e$ bővítési pontot új csúcsként?"},a:{en:"If $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$; otherwise, the reflected point $\\mathbf{x}_r$ is accepted.",hu:"Ha $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$; ellenkező esetben a tükrözött $\\mathbf{x}_r$ pontot fogadjuk el."}},{q:{en:"In Case (iii) of the Nelder–Mead method, which operation is performed when $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$?",hu:"A Nelder–Mead módszer (iii) esetében melyik műveletet hajtják végre a $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$?"},a:{en:"Contraction of the simplex.",hu:"A szimplex összehúzódása."}},{q:{en:"What are the two possible formulas for the contraction point $\\mathbf{x}_z$ based on the relationship between $f(\\mathbf{x}^{(n)})$ and $f(\\mathbf{x}_r)$?",hu:"Mi a két lehetséges képlet a $\\mathbf{x}_z$ összehúzódási ponthoz a $f(\\mathbf{x}^{(n)})$ és a $f(\\mathbf{x}_r)$ közötti kapcsolat alapján?"},a:{en:"$\\mathbf{x}_z = \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r)$, and $\\mathbf{x}_z = \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r)$.",hu:"$\\mathbf{x}_z = \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$, ha $f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r)$, és $\\mathbf{x}_z = \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$, ha $f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r)$."}},{q:{en:"Under what condition is the Nelder–Mead contraction point $\\mathbf{x}_z$ accepted as the new vertex?",hu:"Milyen feltételek mellett fogadják el új csúcsként a $\\mathbf{x}_z$ Nelder–Mead összehúzódási pontot?"},a:{en:"If $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$.",hu:"Ha a $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$."}},{q:{en:"If the contraction operation in Nelder–Mead fails to find a better point, what fallback step is taken?",hu:"Ha a Nelder–Mead összehúzó művelete nem talál jobb pontot, milyen tartaléklépést kell tenni?"},a:{en:"The simplex is shrunk to half its size from its best point $\\mathbf{x}^{(0)}$.",hu:"A szimplex méretének felére zsugorodott a legjobb pontjáról, $\\mathbf{x}^{(0)}$."}},{q:{en:"What is the constraint on the expansion parameter $\\alpha$ in the Nelder–Mead method?",hu:"Mi a megszorítása a $\\alpha$ bővítési paraméternek a Nelder–Mead módszerben?"},a:{en:"$\\alpha > 1$.",hu:"$\\alpha > 1$."}},{q:{en:"What is the constraint on the contraction parameter $\\beta$ in the Nelder–Mead method?",hu:"Mi a megszorítása a $\\beta$ kontrakciós paraméternek a Nelder–Mead módszerben?"},a:{en:"$0 < \\beta < 1$.",hu:"$0 < \\beta < 1$."}},{q:{en:"Comparing the Simplex method and Nelder–Mead for function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, which generally converges faster?",hu:"A Simplex módszer és a Nelder–Mead összehasonlítása a $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényhez, amely általában gyorsabban konvergál?"},a:{en:"The Nelder–Mead method.",hu:"A Nelder–Mead módszer."}},{q:{en:"According to Example 8.6, what are the coordinates of the global minimum for $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$?",hu:"A 8.6. példa szerint mik a $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ globális minimumának koordinátái?"},a:{en:"$(1, 0.5)$.",hu:"$(1, 0.5)$."}},{q:{en:"In the Nelder–Mead algorithm, Case (i) represents the scenario where the reflected point is better than the _____ vertex but worse than the _____ vertex.",hu:"A Nelder–Mead algoritmusban az (i) eset azt a forgatókönyvet jelenti, ahol a tükrözött pont jobb, mint a _____ csúcs, de rosszabb, mint a _____ csúcs."},a:{en:"second-to-worst ($x^{(n-1)}$); best ($x^{(0)}$)",hu:"a második a legrosszabbtól ($x^{(n-1)}$); legjobb ($x^{(0)}$)"}},{q:{en:"If the Nelder–Mead expansion parameter is set to $\\alpha = 1$ and contraction parameter $\\beta = 1$, the method effectively reduces to the _____ method.",hu:"Ha a Nelder–Mead kiterjesztési paraméter $\\alpha = 1$, a kontrakciós paraméter pedig $\\beta = 1$ értékre van állítva, a módszer hatékonyan a _____ módszerre redukálódik."},a:{en:"simplex",hu:"szimplex"}},{q:{en:"True or False: The center point used in the standard simplex method reflection is the average of all vertices.",hu:"Igaz vagy hamis: A standard szimplex módszer szerinti tükrözés középpontja az összes csúcs átlaga."},a:{en:"False; it is the center of all vertices except the worst one.",hu:"Hamis; ez minden csúcs középpontja, kivéve a legrosszabb."}},{q:{en:"Concept: Derivative-free optimization",hu:"Koncepció: Derivatív nélküli optimalizálás"},a:{en:"Definition: Optimization methods that do not require information about the function's gradient, such as the simplex and Nelder–Mead methods.",hu:"Definíció: Optimalizálási módszerek, amelyek nem igényelnek információt a függvény gradienséről, például a szimplex és a Nelder–Mead metódusok."}},{q:{en:"Formula: Center of the simplex $\\mathbf{x}_c$ (Nelder-Mead)",hu:"Képlet: a szimplex $\\mathbf{x}_c$ közepe (Nelder-Mead)"},a:{en:"$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$, assuming vertices are ordered by function value.",hu:"$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$, feltételezve, hogy a csúcsok függvényérték szerint vannak rendezve."}},{q:{en:"In the Nelder–Mead shrink step, what is the formula for updating vertex $\\mathbf{x}^{(i)}$ for $i = 1, \\dots, n$?",hu:"A Nelder–Mead zsugorítási lépésben mi a képlet a $\\mathbf{x}^{(i)}$ csúcs frissítéséhez a $i = 1, \\dots, n$ számára?"},a:{en:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)})$",hu:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)})$"}},{q:{en:"In the Hungarian source, the simplex method is described as using the _____ of the vertices as an approximation for the minimum.",hu:"A magyar forrásban a szimplex módszert úgy írják le, hogy a csúcsok _____-ját használja a minimum közelítéseként."},a:{en:"súlypont (centroid/center of gravity)",hu:"súlypont (centroid/súlypont)"}},{q:{en:"What specific objective function is used in Example 8.6 and 8.7 to demonstrate the simplex methods?",hu:"Milyen konkrét célfüggvényt használunk a 8.6 és 8.7 példákban a szimplex módszerek bemutatására?"},a:{en:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$.",hu:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."}},{q:{en:"In the provided examples, what starting vertices are used for the simplex?",hu:"A megadott példákban milyen kezdőcsúcsokat használunk a szimplexhez?"},a:{en:"$(-2, 4)$, $(-1, 4)$, and $(-1.5, 5)$.",hu:"$(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$."}},{q:{en:"What happens in Step 1 of the basic simplex method?",hu:"Mi történik az egyszerű szimplex módszer 1. lépésében?"},a:{en:"The center of the best $n$ vertices is computed and the worst vertex is reflected over it.",hu:"A legjobb $n$ csúcsok középpontja kiszámításra kerül, és a legrosszabb csúcs tükröződik rajta."}},{q:{en:"In Nelder-Mead, if $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, the algorithm identifies that the reflection was likely _____.",hu:"A Nelder-Meadben, ha $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, az algoritmus azonosítja, hogy a visszaverődés valószínűleg _____ volt."},a:{en:"too far from the worst vertex.",hu:"túl messze van a legrosszabb csúcstól."}},{q:{en:"What is the primary role of the $\\alpha$ parameter in Nelder-Mead?",hu:"Mi a $\\alpha$ paraméter elsődleges szerepe a Nelder-Meadben?"},a:{en:"It determines the scale of the expansion in the direction of the reflected point.",hu:"Meghatározza a tágulás mértékét a tükrözött pont irányában."}},{q:{en:"What is the primary role of the $\\beta$ parameter in Nelder-Mead?",hu:"Mi a $\\beta$ paraméter elsődleges szerepe a Nelder-Meadben?"},a:{en:"It determines the scale of the contraction when the reflected point is poor.",hu:"Meghatározza az összehúzódás mértékét, ha a visszavert pont gyenge."}},{q:{en:"The standard deviation $\\sigma$ stopping criterion interrupts the iteration when the values of the function at the vertices are _____.",hu:"A szórás $\\sigma$ leállítási feltétele megszakítja az iterációt, ha a függvény értékei a csúcsokban _____."},a:{en:"close enough to each other (i.e., $\\sigma$ is below a tolerance).",hu:"elég közel egymáshoz (azaz a $\\sigma$ egy tűrés alatt van)."}},{q:{en:"Nelder-Mead Case (i) occurs when $f(\\mathbf{x}_r)$ is strictly between _____ and _____.",hu:"A Nelder-Mead eset (i) akkor fordul elő, ha a $f(\\mathbf{x}_r)$ szigorúan _____ és _____ között van."},a:{en:"$f(\\mathbf{x}^{(0)})$ and $f(\\mathbf{x}^{(n-1)})$.",hu:"$f(\\mathbf{x}^{(0)})$ és $f(\\mathbf{x}^{(n-1)})$."}},{q:{en:"Why is the order of indexing vertices updated in every step of the Nelder–Mead method?",hu:"Miért frissül a csúcsok indexelési sorrendje a Nelder–Mead módszer minden lépésében?"},a:{en:"To ensure that $\\mathbf{x}^{(0)}$ always represents the best vertex and $\\mathbf{x}^{(n)}$ always represents the worst vertex for the logic of the next iteration.",hu:"Annak biztosítása érdekében, hogy a $\\mathbf{x}^{(0)}$ mindig a legjobb csúcsot, a $\\mathbf{x}^{(n)}$ pedig mindig a legrosszabb csúcsot képviselje a következő iteráció logikájában."}},{q:{en:"How does the Nelder-Mead expansion step hope to improve the search?",hu:"Hogyan reméli a Nelder-Mead bővítési lépés javítani a keresést?"},a:{en:"By moving further in a direction that produced an exceptionally good reflected point.",hu:"Tovább haladva egy olyan irányba, amely kivételesen jól tükrözött pontot eredményezett."}},{q:{en:"In the formula $x_r = 2x_c - x^{(j)}$, what does the constant $2$ represent geometrically?",hu:"A $x_r = 2x_c - x^{(j)}$ képletben mit ábrázol geometriailag a $2$ konstans?"},a:{en:"The reflected point is an equal distance away from the center as the original worst point, but on the opposite side.",hu:"A visszavert pont ugyanolyan távolságra van a középponttól, mint az eredeti legrosszabb pont, de az ellenkező oldalon."}},{q:{en:"When applying the Nelder-Mead method to $f(x, y) = x^2 - y^2$, what behavior is expected based on the exercises?",hu:"Amikor a Nelder-Mead módszert alkalmazzuk a $f(x, y) = x^2 - y^2$-re, milyen viselkedés várható a gyakorlatok alapján?"},a:{en:"Observation of how the method behaves on a function that is not bounded below (a saddle point).",hu:"Megfigyelés, hogyan viselkedik a metódus olyan függvényen, amely nem korlátos alább (nyeregpont)."}},{q:{en:"If a simplex becomes smaller than a predefined tolerance, which stopping criterion is being satisfied?",hu:"Ha egy szimplex kisebb lesz, mint egy előre meghatározott tűrés, melyik leállítási feltétel teljesül?"},a:{en:"The criterion based on the physical size (e.g., longest edge length) of the simplex.",hu:"A szimplex fizikai méretén (például a leghosszabb élhosszon) alapuló kritérium."}},{q:{en:"In the exercise on one-variable functions, the simplex method essentially reduces the 'simplex' to what geometric object?",hu:"Az egyváltozós függvényekre vonatkozó gyakorlatban a szimplex módszer lényegében milyen geometriai objektumra redukálja a szimplexet?"},a:{en:"A line segment.",hu:"Egy vonalszakasz."}}],gradient:[{q:{en:"What is the geometric relationship between the gradient vector $f'(\\mathbf{p})$ and the level curve of $f$ passing through point $\\mathbf{p}$?",hu:"Milyen geometriai kapcsolat van a $f'(\\mathbf{p})$ gradiensvektor és a $f$ $\\mathbf{p}$ ponton átmenő szintgörbéje között?"},a:{en:"The gradient vector is perpendicular (orthogonal) to the level curve's tangent line at that point.",hu:"A gradiens vektor merőleges (ortogonális) a szintgörbe érintővonalára ezen a ponton."}},{q:{en:"If $\\gamma(t)$ is a parametrization of a level curve $f(\\gamma(t)) = c$, what is the result of $\\frac{d}{dt} f(\\gamma(t))$?",hu:"Ha a $\\gamma(t)$ egy $f(\\gamma(t)) = c$ szintgörbe paraméterezése, mi a $\\frac{d}{dt} f(\\gamma(t))$ eredménye?"},a:{en:"$0$",hu:"$0$"}},{q:{en:"According to the chain rule, how is the derivative $\\frac{d}{dt} f(\\gamma(t))$ expressed using the gradient?",hu:"A láncszabály szerint hogyan fejeződik ki a $\\frac{d}{dt} f(\\gamma(t))$ derivált a gradiens használatával?"},a:{en:"$f'(\\gamma(t))^T \\gamma'(t)$",hu:"$f'(\\gamma(t))^T \\gamma'(t)$"}},{q:{en:"In the context of level curves, what does the expression $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ prove?",hu:"A szintgörbék összefüggésében mit bizonyít a $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ kifejezés?"},a:{en:"The gradient is perpendicular to the direction vector of the tangent line at point $\\mathbf{p}$.",hu:"A gradiens merőleges a $\\mathbf{p}$ pontban lévő érintő egyenes irányvektorára."}},{q:{en:"In which direction does a continuously differentiable function $f$ decrease most rapidly at point $\\mathbf{p}$?",hu:"Melyik irányban csökken a leggyorsabban a $f$ folyamatosan differenciálható függvény a $\\mathbf{p}$ pontban?"},a:{en:"In the direction of the negative gradient vector $-f'(\\mathbf{p})$.",hu:"A $-f'(\\mathbf{p})$ negatív gradiens vektor irányába."}},{q:{en:"What is the minimum value of the directional derivative at point $\\mathbf{p}$ for a unit vector $\\mathbf{u}$?",hu:"Mekkora a $\\mathbf{p}$ pontban a $\\mathbf{u}$ egységvektor esetén az irányderivált legkisebb értéke?"},a:{en:"The minimum occurs when $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$.",hu:"A minimum akkor következik be, ha a $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$."}},{q:{en:"Term: Descent direction",hu:"Fogalom: Leszállási irány"},a:{en:"Definition: A direction $\\mathbf{u}$ where there exists $\\delta > 0$ such that $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ for all $0 < t < \\delta$.",hu:"Definíció: $\\mathbf{u}$ irány, ahol létezik $\\delta > 0$, így a $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ az összes $0 < t < \\delta$ esetében."}},{q:{en:"The gradient method is also known by what alternative name?",hu:"Milyen alternatív néven ismert a gradiens módszer is?"},a:{en:"The steepest descent method.",hu:"A legmeredekebb ereszkedési módszer."}},{q:{en:"What is the general iterative formula for the gradient method?",hu:"Mi a gradiens módszer általános iteratív képlete?"},a:{en:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)})$",hu:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)})$"}},{q:{en:"In the gradient method formula, what role does the parameter $\\alpha_k$ serve?",hu:"A gradiens módszer képletében milyen szerepet tölt be a $\\alpha_k$ paraméter?"},a:{en:"It is a scaling parameter that determines the step size.",hu:"Ez egy skálázási paraméter, amely meghatározza a lépések méretét."}},{q:{en:"What is the formula for the factor $\\alpha_k$ in the constant step size variant of the gradient method?",hu:"Mi a képlete a $\\alpha_k$ tényezőnek a gradiens módszer állandó lépésnagyságú változatában?"},a:{en:"$\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$",hu:"$\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$"}},{q:{en:"In the constant step size variant of the gradient method, what is the fixed distance between consecutive points?",hu:"A gradiens módszer állandó lépésnagyságú változatában mekkora a fix távolság az egymást követő pontok között?"},a:{en:"$h$",hu:"$h$"}},{q:{en:"Why is the accuracy of the constant step size gradient method limited by the value $h$?",hu:"Miért korlátozza az állandó lépésméret gradiens módszer pontosságát a $h$ érték?"},a:{en:"Because the fixed step length generally prevents approximating the exact minimum more closely than the step size itself.",hu:"Mivel a rögzített lépéshossz általában megakadályozza a pontos minimum pontosabb közelítését, mint maga a lépésméret."}},{q:{en:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",hu:"Hogyan történik a $\\alpha_k$ lépésméret kiválasztása az optimális gradiens módszerben?"},a:{en:"It is chosen to minimize the function $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$ with respect to $t$.",hu:"Úgy van kiválasztva, hogy minimalizálja a $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$ funkciót a $t$-hez képest."}},{q:{en:"In the optimal gradient method, what kind of problem must be solved at each step to determine the step size?",hu:"Az optimális gradiens módszernél milyen problémát kell megoldani minden lépésnél a lépésnagyság meghatározásához?"},a:{en:"A one-dimensional (single variable) function minimization problem.",hu:"Egydimenziós (egyváltozós) függvényminimalizálási probléma."}},{q:{en:"In the optimal gradient method, where does the step forward from $\\mathbf{p}^{(k)}$ end relative to the level curves?",hu:"Az optimális gradiens módszerben hol ér véget a szintgörbékhez képest a $\\mathbf{p}^{(k)}$-től előrelépés?"},a:{en:"It ends at a point where the search line is tangent to a level curve of $f$.",hu:"Abban a pontban ér véget, ahol a keresési vonal érinti a $f$ szintgörbét."}},{q:{en:"What is the geometric relationship between consecutive search directions in the optimal gradient method?",hu:"Milyen geometriai kapcsolat van az egymást követő keresési irányok között az optimális gradiens módszerben?"},a:{en:"Consecutive directions are perpendicular (orthogonal) to each other.",hu:"Az egymást követő irányok merőlegesek (merőlegesek) egymásra."}},{q:{en:"What is the local convergence rate of the optimal gradient method?",hu:"Mekkora az optimális gradiens módszer lokális konvergencia rátája?"},a:{en:"Locally linearly convergent.",hu:"Lokálisan lineárisan konvergens."}},{q:{en:"Why can the convergence of the optimal gradient method be slow despite being 'optimal' at each step?",hu:"Miért lehet lassú az optimális gradiens módszer konvergenciája annak ellenére, hogy minden lépésben „optimális”?"},a:{en:"The asymptotic error constant can be close to $1$.",hu:"Az aszimptotikus hibaállandó közel lehet a $1$ értékhez."}},{q:{en:"What visual behavior is characteristic of the optimal gradient method when approaching a minimum in a narrow 'valley'?",hu:"Milyen vizuális viselkedés jellemzi az optimális gradiens módszert egy szűk „völgyben” a minimumhoz közeledve?"},a:{en:"The sequence zigzags slowly toward the minimum point.",hu:"A sorozat lassan cikázik a minimumpont felé."}},{q:{en:"When using a constant step size $h=0.3$, how does the gradient method sequence behave near the minimum?",hu:"Konstans $h=0.3$ lépésméret esetén hogyan viselkedik a gradiens módszer sorozata a minimum közelében?"},a:{en:"It approximates the minimum slowly and oscillates around it.",hu:"Lassan közelíti a minimumot, és oszcillál körülötte."}},{q:{en:"Which variant of the gradient method should be used if the analytical gradient vector is too expensive to compute?",hu:"A gradiens módszer melyik változatát érdemes használni, ha az analitikus gradiensvektor kiszámítása túl drága?"},a:{en:"A numerical approximation variant using function values at small displacements.",hu:"Numerikus közelítési változat kis elmozdulású függvényértékeket használva."}},{q:{en:"What is the formula for the $i$-th component $v_i^{(k)}$ of the approximated gradient vector?",hu:"Mi a képlete a közelített gradiensvektor $i$-edik $v_i^{(k)}$ komponensének?"},a:{en:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$",hu:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"}},{q:{en:"In the numerical gradient approximation, what does the vector $\\mathbf{e}^{(i)}$ represent?",hu:"Mit jelent a numerikus gradiens közelítésben a $\\mathbf{e}^{(i)}$ vektor?"},a:{en:"The $i$-th unit vector.",hu:"A $i$-edik egységvektor."}},{q:{en:"If the gradient vector is not used directly, what is the update rule for point $\\mathbf{p}^{(k+1)}$ using the approximate vector $\\mathbf{v}^{(k)}$?",hu:"Ha a gradiens vektort nem használjuk közvetlenül, mi a frissítési szabály a $\\mathbf{p}^{(k+1)}$ pontra a $\\mathbf{v}^{(k)}$ közelítő vektor használatával?"},a:{en:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$",hu:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$"}},{q:{en:"Theorem: For $f \\in C^1$, the direction of the steepest descent at point $\\mathbf{p}$ is ____.",hu:"Tétel: $f \\in C^1$ esetén a $\\mathbf{p}$ pontban a legmeredekebb süllyedés iránya ____."},a:{en:"$-f'(\\mathbf{p})$",hu:"$-f'(\\mathbf{p})$"}},{q:{en:"In the function $f(x, y) = 4 - 3x^2 - y^2$, what is the gradient at $\\mathbf{p} = (0.5, 0.5)$?",hu:"A $f(x, y) = 4 - 3x^2 - y^2$ függvényben mekkora a gradiens a $\\mathbf{p} = (0.5, 0.5)$-nél?"},a:{en:"$f'(\\mathbf{p}) = (-3, -1)$",hu:"$f'(\\mathbf{p}) = (-3, -1)$"}},{q:{en:"What defines the function $\\phi_k(t)$ used in the optimal gradient method?",hu:"Mi határozza meg az optimális gradiens módszerben használt $\\phi_k(t)$ függvényt?"},a:{en:"$\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$",hu:"$\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$"}},{q:{en:"Why do the steps in the optimal gradient method always result in perpendicular directions?",hu:"Miért eredményeznek az optimális gradiens módszer lépései mindig merőleges irányt?"},a:{en:"The step ends at a point where the gradient is perpendicular to the current search direction.",hu:"A lépés egy olyan pontban ér véget, ahol a gradiens merőleges az aktuális keresési irányra."}},{q:{en:"The constant step size factor $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ ensures the Euclidean distance between $\\mathbf{p}^{(k)}$ and $\\mathbf{p}^{(k+1)}$ is exactly ____.",hu:"A $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ állandó lépésméret-tényező biztosítja, hogy a $\\mathbf{p}^{(k)}$ és $\\mathbf{p}^{(k+1)}$ közötti euklideszi távolság pontosan ____ legyen."},a:{en:"$h$",hu:"$h$"}},{q:{en:"What happens to the gradient method's path if a function's level curves are very elongated?",hu:"Mi történik a gradiens módszer útvonalával, ha egy függvény szintgörbéi nagyon megnyúltak?"},a:{en:"The method tends to zigzag and progress slowly toward the minimum.",hu:"A módszer cikkcakkolásra hajlamos, és lassan halad a minimum felé."}},{q:{en:"In the proof of the gradient's perpendicularity, what does $\\gamma'(t_0)$ represent?",hu:"A gradiens merőlegességének bizonyítása során mit jelent a $\\gamma'(t_0)$?"},a:{en:"The direction vector of the tangent to the level curve at point $\\mathbf{p}$.",hu:"A szintgörbe érintőjének irányvektora a $\\mathbf{p}$ pontban."}},{q:{en:"Under what condition is the direction $\\mathbf{u}$ considered a descent at point $\\mathbf{p}$?",hu:"Milyen feltételek mellett tekintjük a $\\mathbf{u}$ irányt leszállásnak a $\\mathbf{p}$ pontban?"},a:{en:"The function value must decrease for sufficiently small steps in direction $\\mathbf{u}$ from $\\mathbf{p}$.",hu:"A funkció értékének kellően kis lépésekre kell csökkennie a $\\mathbf{u}$ irányban a $\\mathbf{p}$-től."}},{q:{en:"How does the starting point affect the convergence path in Example 8.9?",hu:"Hogyan befolyásolja a kiindulási pont a 8.9. példában szereplő konvergencia útvonalat?"},a:{en:"Different starting points can lead to different numbers of steps or different trajectories (e.g., direct vs. zigzagging).",hu:"A különböző kiindulási pontok eltérő számú lépéshez vagy különböző pályákhoz vezethetnek (pl. közvetlen vagy cikcakkos)."}},{q:{en:"If the gradient method oscillates around the minimum, what can be adjusted to stabilize it?",hu:"Ha a gradiens módszer a minimum körül oszcillál, mit lehet beállítani, hogy stabilizálja?"},a:{en:"The step size parameter $h$ or the scaling factor $\\alpha_k$ can be reduced.",hu:"A $h$ lépésméret paraméter vagy a $\\alpha_k$ skálázási tényező csökkenthető."}},{q:{en:"What is the primary drawback of the constant step size gradient method mentioned in the text?",hu:"Mi az elsődleges hátránya a szövegben említett állandó lépésméretű gradiens módszernek?"},a:{en:"It cannot approximate the exact minimum point with a precision greater than the step size $h$.",hu:"Nem tudja megközelíteni a pontos minimum pontot a $h$ lépésméretnél nagyobb pontossággal."}},{q:{en:"The optimal gradient method minimizes the function value along the ____ of the gradient.",hu:"Az optimális gradiens módszer minimalizálja a függvény értékét a gradiens ____ mentén."},a:{en:"line (or negative gradient direction)",hu:"vonal (vagy negatív gradiens iránya)"}},{q:{en:"How many dimensions is the minimization problem in Equation 8.6?",hu:"Hány dimenziós a minimalizálási probléma a 8.6 egyenletben?"},a:{en:"One dimension (single variable $t$).",hu:"Egydimenziós (egyváltozós $t$)."}},{q:{en:"True or False: The gradient vector always points in the direction of the steepest increase of the function.",hu:"Igaz vagy hamis: A gradiens vektor mindig a függvény legmeredekebb növekedésének irányába mutat."},a:{en:"True",hu:"Igaz"}},{q:{en:"Concept: Steepest Descent Method",hu:"Koncepció: Legmeredekebb süllyedés módszere"},a:{en:"Definition: An optimization algorithm that takes repeated steps in the direction of the negative gradient to find a local minimum.",hu:"Definíció: Olyan optimalizáló algoritmus, amely ismételt lépéseket tesz a negatív gradiens irányába, hogy megtalálja a helyi minimumot."}},{q:{en:"In Example 8.9, the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ has a minimum point at ____.",hu:"A 8.9. példában a $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény minimumpontja ____."},a:{en:"$(1, 0.5)$",hu:"$(1, 0.5)$"}},{q:{en:"What is the meaning of $f \\in C^1$ in the context of the gradient method theorems?",hu:"Mit jelent a $f \\in C^1$ a gradiens módszer tételeivel összefüggésben?"},a:{en:"The function is continuously differentiable.",hu:"A függvény folyamatosan differenciálható."}},{q:{en:"Formula: $v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$ is an approximation of which mathematical object?",hu:"Képlet: Melyik matematikai objektum közelítése a $v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$?"},a:{en:"The $i$-th partial derivative of $f$ at point $\\mathbf{p}^{(k)}$.",hu:"A $f$ $i$-edik parciális deriváltja a $\\mathbf{p}^{(k)}$ pontban."}},{q:{en:"How is the next point $\\mathbf{p}^{(k+1)}$ related to the current point $\\mathbf{p}^{(k)}$ and current gradient in the gradient method?",hu:"Hogyan kapcsolódik a következő $\\mathbf{p}^{(k+1)}$ pont az aktuális $\\mathbf{p}^{(k)}$ ponthoz és az aktuális gradienshez a gradiens módszerben?"},a:{en:"It is the current point minus a scaled version of the gradient vector.",hu:"Ez az aktuális pont mínusz a gradiensvektor skálázott változata."}},{q:{en:"What does the 'optimal' in 'optimal gradient method' refer to specifically?",hu:"Mire utal konkrétan az „optimális” az „optimális gradiens módszerben”?"},a:{en:"It refers to selecting the step size that yields the maximum possible decrease in function value along the current gradient direction.",hu:"Olyan lépésméret kiválasztására vonatkozik, amely a függvényérték maximális lehetséges csökkenését eredményezi az aktuális gradiens iránya mentén."}},{q:{en:"In the constant step size gradient method, if $h=0.3$, what is the distance $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}\\|_2$?",hu:"Az állandó lépésméretű gradiens módszerben, ha $h=0.3$, mekkora a $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}\\|_2$ távolság?"},a:{en:"$0.3$",hu:"$0.3$"}},{q:{en:"The condition $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ implies that the angle between the gradient and the level curve tangent is ____.",hu:"A $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ feltétel azt jelenti, hogy a gradiens és a szintgörbe érintője közötti szög ____."},a:{en:"$90$ degrees (or $\\pi/2$ radians).",hu:"$90$ fok (vagy $\\pi/2$ radián)."}},{q:{en:"What determines if the convergence of the optimal gradient method is fast or slow?",hu:"Mi határozza meg, hogy az optimális gradiens módszer konvergenciája gyors vagy lassú?"},a:{en:"The shape of the function's level curves (the asymptotic error constant).",hu:"A függvény szintgörbéinek alakja (az aszimptotikus hibaállandó)."}},{q:{en:"In the notation $\\mathbf{p} + t\\mathbf{u}$, what does $t \\to 0+$ signify in the directional derivative formula?",hu:"A $\\mathbf{p} + t\\mathbf{u}$ jelölésben mit jelöl a $t \\to 0+$ az irányított derivált képletben?"},a:{en:"The limit as the step size $t$ approaches zero from the positive side.",hu:"A határ, ahogy a $t$ lépésméret a nullához közelít a pozitív oldalról."}},{q:{en:"If the optimal gradient method enters a 'valley' in the contour lines, how does its trajectory appear?",hu:"Ha az optimális gradiens módszer egy „völgybe” kerül a szintvonalakba, hogyan jelenik meg a pályája?"},a:{en:"It zigzags between the sides of the valley.",hu:"Cikcakkban cikázik a völgy oldalai között."}},{q:{en:"What is the dot product of two consecutive step vectors in the optimal gradient method?",hu:"Mennyi a pontszorzata két egymást követő lépésvektornak az optimális gradiens módszerben?"},a:{en:"$0$ (because they are orthogonal).",hu:"$0$ (mert merőlegesek)."}},{q:{en:"What is the purpose of the unit vector $\\mathbf{e}^{(i)}$ in the numerical gradient approximation?",hu:"Mi a célja a $\\mathbf{e}^{(i)}$ egységvektornak a numerikus gradiens közelítésben?"},a:{en:"To isolate the change in the function value along the $i$-th coordinate axis.",hu:"A függvényérték változásának elkülönítése a $i$-edik koordinátatengely mentén."}},{q:{en:"The sequence $\\mathbf{p}^{(k)}$ generated by the gradient method always moves in a direction ____ to the local contour lines.",hu:"A gradiens módszerrel generált $\\mathbf{p}^{(k)}$ sorozat mindig ____ irányban mozog a helyi szintvonalak felé."},a:{en:"perpendicular",hu:"függőleges"}},{q:{en:"Under what condition does the gradient vector $f'(\\mathbf{p})$ exist for a function $f$?",hu:"Milyen feltételek mellett létezik a $f'(\\mathbf{p})$ gradiensvektor a $f$ függvényhez?"},a:{en:"The function must be differentiable at point $\\mathbf{p}$.",hu:"A függvénynek differenciálhatónak kell lennie a $\\mathbf{p}$ pontban."}},{q:{en:"How does the asymptotic error constant affect linear convergence?",hu:"Hogyan befolyásolja az aszimptotikus hibaállandó a lineáris konvergenciát?"},a:{en:"A constant close to $1$ results in very slow convergence, while a smaller constant results in faster convergence.",hu:"A $1$-hez közeli állandó nagyon lassú konvergenciát eredményez, míg egy kisebb állandó gyorsabb konvergenciát eredményez."}}],linsys:[{q:{en:"In the context of the gradient method, what is the standard form of the quadratic function $g(\\mathbf{x})$ used to solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",hu:"A gradiens módszerrel összefüggésben mi a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ megoldására használt $g(\\mathbf{x})$ másodfokú függvény szabványos formája?"},a:{en:"$g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$",hu:"$g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$"}},{q:{en:"What matrix property is required for $g(\\mathbf{x})$ to be expressed in terms of the summation $\\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$?",hu:"Milyen mátrixtulajdonság szükséges ahhoz, hogy a $g(\\mathbf{x})$ $\\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$ összegzésben kifejezhető legyen?"},a:{en:"The matrix $\\mathbf{A}$ must be symmetric ($\\mathbf{A}^T = \\mathbf{A}$).",hu:"A $\\mathbf{A}$ mátrixnak szimmetrikusnak kell lennie ($\\mathbf{A}^T = \\mathbf{A}$)."}},{q:{en:"In the summation form of the quadratic function $g(x_1, \\ldots, x_n)$, what term represents the linear component involving $\\mathbf{b}$?",hu:"A $g(x_1, \\ldots, x_n)$ másodfokú függvény összegzési alakjában melyik tag jelenti a $\\mathbf{b}$ lineáris komponenst?"},a:{en:"$- \\sum_{i=1}^{n} b_i x_i$",hu:"$- \\sum_{i=1}^{n} b_i x_i$"}},{q:{en:"What is the result of the partial derivative $\\frac{\\partial g}{\\partial x_i}$ for the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",hu:"Mi az eredménye a $\\frac{\\partial g}{\\partial x_i}$ parciális deriváltnak a $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$ másodfokú függvényre?"},a:{en:"$\\sum_{j=1}^{n} a_{ij} x_j - b_i$",hu:"$\\sum_{j=1}^{n} a_{ij} x_j - b_i$"}},{q:{en:"What is the vectorial form of the gradient vector $g'(\\mathbf{x})$ for the quadratic function associated with the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",hu:"Mi a $g'(\\mathbf{x})$ gradiensvektor vektoriális alakja a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszerhez tartozó másodfokú függvényhez?"},a:{en:"$g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$",hu:"$g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$"}},{q:{en:"If matrix $\\mathbf{A}$ is invertible, how many critical points does the quadratic function $g(\\mathbf{x})$ have?",hu:"Ha a $\\mathbf{A}$ mátrix invertálható, hány kritikus pontja van a $g(\\mathbf{x})$ másodfokú függvénynek?"},a:{en:"Exactly one.",hu:"Pontosan egy."}},{q:{en:"A critical point $\\bar{\\mathbf{x}}$ of the quadratic function $g(\\mathbf{x})$ is a solution to which linear equation?",hu:"Melyik lineáris egyenlet megoldása a $g(\\mathbf{x})$ másodfokú függvény $\\bar{\\mathbf{x}}$ kritikus pontja?"},a:{en:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$",hu:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$"}},{q:{en:"What is the relationship between $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ and $g(\\bar{\\mathbf{x}})$ when $\\bar{\\mathbf{x}}$ is a critical point?",hu:"Mi a kapcsolat a $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ és a $g(\\bar{\\mathbf{x}})$ között, ha a $\\bar{\\mathbf{x}}$ kritikus pont?"},a:{en:"$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$",hu:"$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$"}},{q:{en:"Under what condition on matrix $\\mathbf{A}$ does the critical point $\\bar{\\mathbf{x}}$ minimize the function $g(\\mathbf{x})$?",hu:"A $\\mathbf{A}$ mátrixon milyen feltételek mellett minimalizálja a $\\bar{\\mathbf{x}}$ kritikus pont a $g(\\mathbf{x})$ függvényt?"},a:{en:"When $\\mathbf{A}$ is a positive definite matrix.",hu:"Amikor $\\mathbf{A}$ pozitív határozott mátrix."}},{q:{en:"Under what condition on matrix $\\mathbf{A}$ does the function $g(\\mathbf{x})$ have a maximum at the critical point $\\bar{\\mathbf{x}}$?",hu:"A $\\mathbf{A}$ mátrixon milyen feltételek mellett van a $g(\\mathbf{x})$ függvény maximuma a $\\bar{\\mathbf{x}}$ kritikus pontban?"},a:{en:"When $\\mathbf{A}$ is a negative definite matrix.",hu:"Amikor a $\\mathbf{A}$ egy negatív határozott mátrix."}},{q:{en:"According to the theorem on quadratic functions, if $\\mathbf{A}$ is symmetric and positive definite, where does the global minimum occur?",hu:"A másodfokú függvények tétele szerint, ha $\\mathbf{A}$ szimmetrikus és pozitív definit, hol jön létre a globális minimum?"},a:{en:"At the point $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$.",hu:"A $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$ ponton."}},{q:{en:"What is the relationship between a local minimum and a global minimum for a quadratic function?",hu:"Mi a kapcsolat egy másodfokú függvény lokális minimuma és globális minimuma között?"},a:{en:"If a quadratic function has a local minimum at a point, it is also a global minimum at that point.",hu:"Ha egy másodfokú függvénynek van lokális minimuma egy pontban, akkor az adott pontban globális minimum is."}},{q:{en:"In the iterative formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$, what does $\\mathbf{v}^{(k)}$ represent?",hu:"Mit jelent a $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$ iteratív képletben a $\\mathbf{v}^{(k)}$?"},a:{en:"The gradient vector at the current point, $\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)})$.",hu:"A gradiens vektor az aktuális pontban, $\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)})$."}},{q:{en:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",hu:"Hogyan történik a $\\alpha_k$ lépésméret kiválasztása az optimális gradiens módszerben?"},a:{en:"It is the minimum point of the one-variable function $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$.",hu:"Ez a $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ egyváltozós függvény minimumpontja."}},{q:{en:"What type of function is $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ in the gradient method?",hu:"Milyen típusú függvény a $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ a gradiens módszerben?"},a:{en:"A quadratic polynomial.",hu:"Másodfokú polinom."}},{q:{en:"What is the explicit formula for $\\alpha_k$ in terms of the gradient vector $\\mathbf{v}^{(k)}$ and the current state?",hu:"Mi a $\\alpha_k$ kifejezett képlete a $\\mathbf{v}^{(k)}$ gradiensvektor és az aktuális állapot szempontjából?"},a:{en:"$\\alpha_k = \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})}{(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}}$",hu:"$\\alpha_k = \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})}{(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}}$"}},{q:{en:"How is the residual vector $\\mathbf{r}^{(k)}$ defined in the gradient method algorithm?",hu:"Hogyan definiálható a $\\mathbf{r}^{(k)}$ reziduális vektor a gradiens módszer algoritmusában?"},a:{en:"$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$",hu:"$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$"}},{q:{en:"What is the relationship between the residual vector $\\mathbf{r}^{(k)}$ and the gradient vector $\\mathbf{v}^{(k)}$?",hu:"Mi a kapcsolat a $\\mathbf{r}^{(k)}$ reziduális vektor és a $\\mathbf{v}^{(k)}$ gradiens vektor között?"},a:{en:"$\\mathbf{r}^{(k)} = -\\mathbf{v}^{(k)}$",hu:"$\\mathbf{r}^{(k)} = -\\mathbf{v}^{(k)}$"}},{q:{en:"Using the residual vector $\\mathbf{r}^{(k)}$, what is the formula for the step size $\\alpha_k$?",hu:"A $\\mathbf{r}^{(k)}$ maradékvektort használva mi a képlet a $\\alpha_k$ lépésmérethez?"},a:{en:"$\\alpha_k = \\frac{(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}}$",hu:"$\\alpha_k = \\frac{(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}}$"}},{q:{en:"What is the iterative update formula for the point $\\mathbf{p}^{(k+1)}$ using the residual vector $\\mathbf{r}^{(k)}$?",hu:"Mi az iteratív frissítési képlet a $\\mathbf{p}^{(k+1)}$ ponthoz a $\\mathbf{r}^{(k)}$ maradékvektor használatával?"},a:{en:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$",hu:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$"}},{q:{en:"Why is the gradient method applicable to a linear system where the matrix has entries $a_{11}=4, a_{12}=2, a_{21}=2, a_{22}=5$?",hu:"Miért alkalmazható a gradiens módszer olyan lineáris rendszerre, ahol a mátrix $a_{11}=4, a_{12}=2, a_{21}=2, a_{22}=5$ bejegyzéseket tartalmaz?"},a:{en:"Because the coefficient matrix is symmetric and positive definite.",hu:"Mivel az együttható mátrix szimmetrikus és pozitív határozott."}},{q:{en:"In the provided example, starting from $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ for a specific system, what is the exact solution being approached?",hu:"A megadott példában, egy adott rendszer esetében a $\\mathbf{p}^{(0)} = (3, 3, 3)^T$-től kezdve, mi a pontos megoldás?"},a:{en:"$(-1, 2, 0)$",hu:"$(-1, 2, 0)$"}},{q:{en:"Which specific vector calculation represents the 'direction' of the update in the final summarized algorithm (Equations 8.11-8.13)?",hu:"Melyik konkrét vektorszámítás jelenti a frissítés „irányát” a végső összegzett algoritmusban (8.11-8.13 egyenletek)?"},a:{en:"The residual vector $\\mathbf{r}^{(k)}$.",hu:"A $\\mathbf{r}^{(k)}$ maradékvektor."}},{q:{en:"In the expression for $\\phi_k(t)$, what is the coefficient of the $t^2$ term?",hu:"A $\\phi_k(t)$ kifejezésben mekkora a $t^2$ tag együtthatója?"},a:{en:"$\\frac{1}{2}(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}$",hu:"$\\frac{1}{2}(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}$"}},{q:{en:"In the expression for $\\phi_k(t)$, what is the coefficient of the $-t$ term?",hu:"A $\\phi_k(t)$ kifejezésben mekkora a $-t$ tag együtthatója?"},a:{en:"$(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})$",hu:"$(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})$"}},{q:{en:"Cloze: All positive or negative definite matrices are _____.",hu:"Bezárás: Minden pozitív vagy negatív határozott mátrix _____."},a:{en:"invertible",hu:"megfordítható"}},{q:{en:"Concept: Residual Vector ($\\mathbf{r}^{(k)}$)",hu:"Koncepció: Maradék vektor ($\\mathbf{r}^{(k)}$)"},a:{en:"Definition: The difference between the target vector $\\mathbf{b}$ and the current transformation $\\mathbf{A}\\mathbf{p}^{(k)}$, used as the search direction in the gradient method.",hu:"Definíció: A különbség a $\\mathbf{b}$ célvektor és a gradiens módszerben keresési irányként használt $\\mathbf{A}\\mathbf{p}^{(k)}$ aktuális transzformáció között."}},{q:{en:"Why is the symmetry of matrix $\\mathbf{A}$ ($a_{ij} = a_{ji}$) essential for the simplification of $\\frac{\\partial g}{\\partial x_i}$?",hu:"Miért elengedhetetlen a $\\mathbf{A}$ ($a_{ij} = a_{ji}$) mátrix szimmetriája a $\\frac{\\partial g}{\\partial x_i}$ egyszerűsítéséhez?"},a:{en:"It allows the combination of terms $(a_{ij} x_j + a_{ji} x_j)$ into $2a_{ij} x_j$, which cancels the $\\frac{1}{2}$ factor.",hu:"Lehetővé teszi a $(a_{ij} x_j + a_{ji} x_j)$ kifejezések kombinációját $2a_{ij} x_j$-be, ami törli a $\\frac{1}{2}$ tényezőt."}},{q:{en:"If a matrix $\\mathbf{A}$ is positive definite, what can be said about the sign of $(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ for any non-zero $\\Delta\\mathbf{x}$?",hu:"Ha egy $\\mathbf{A}$ mátrix pozitív határozott, mit mondhatunk a $(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ előjeléről bármely nem nulla $\\Delta\\mathbf{x}$ esetén?"},a:{en:"It is always positive ($> 0$).",hu:"Mindig pozitív ($> 0$)."}},{q:{en:"In the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$, why is the sign before $\\alpha_k$ positive compared to the gradient update form?",hu:"A $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ képletben miért pozitív a $\\alpha_k$ előtti előjel a gradiens frissítési űrlaphoz képest?"},a:{en:"Because the residual $\\mathbf{r}^{(k)}$ is defined as the negative gradient ($-\\mathbf{v}^{(k)}$).",hu:"Mivel a maradék $\\mathbf{r}^{(k)}$ negatív gradiensként van definiálva ($-\\mathbf{v}^{(k)}$)."}},{q:{en:"What is the purpose of the constant $c$ in the quadratic function $g(\\mathbf{x})$ during the optimization process?",hu:"Mi a célja a $c$ konstansnak a $g(\\mathbf{x})$ másodfokú függvényben az optimalizálás során?"},a:{en:"It acts as a vertical shift and does not affect the location of the critical point or the gradient.",hu:"Függőleges eltolódásként működik, és nem befolyásolja a kritikus pont helyét vagy a gradienst."}},{q:{en:"Formula: Write the denominator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",hu:"Képlet: Írja be a $\\alpha_k$ lépésnagyság nevezőjét az optimális gradiens módszerben a $\\mathbf{r}^{(k)}$ segítségével."},a:{en:"$(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}$",hu:"$(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}$"}},{q:{en:"Formula: Write the numerator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",hu:"Képlet: Írja be a $\\alpha_k$ lépésszám számlálóját az optimális gradiens módszerrel a $\\mathbf{r}^{(k)}$ segítségével."},a:{en:"$(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}$",hu:"$(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}$"}},{q:{en:"Sequence: In the gradient method, what is the first step performed in each iteration $k$?",hu:"Sorrend: A gradiens módszerben mi az első lépés az egyes $k$ iterációkban?"},a:{en:"Calculate the residual vector $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$.",hu:"Számítsa ki a $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$ maradékvektort."}},{q:{en:"Sequence: After calculating the residual $\\mathbf{r}^{(k)}$, what is the next step in the gradient method iteration?",hu:"Sorrend: A maradék $\\mathbf{r}^{(k)}$ kiszámítása után mi a következő lépés a gradiens módszer iterációjában?"},a:{en:"Calculate the optimal step size $\\alpha_k$.",hu:"Számítsa ki az optimális lépésméretet $\\alpha_k$."}},{q:{en:"Sequence: What is the final step in a single iteration of the gradient method to find the next approximation?",hu:"Sorrend: Mi az utolsó lépés a gradiens módszer egyetlen iterációjában a következő közelítés megtalálásához?"},a:{en:"Update the solution estimate: $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$.",hu:"Frissítse a megoldásbecslést: $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$."}},{q:{en:"What matrix property ensures that the optimal step size $\\alpha_k$ always has a non-zero denominator for a non-zero residual?",hu:"Milyen mátrixtulajdonság biztosítja, hogy a $\\alpha_k$ optimális lépésméretnek mindig legyen nullától eltérő nevezője a nullától eltérő maradékhoz?"},a:{en:"Positive definiteness (or negative definiteness).",hu:"Pozitív határozottság (vagy negatív határozottság)."}},{q:{en:"True or False: The optimal gradient method for linear systems requires the matrix $\\mathbf{A}$ to be symmetric.",hu:"Igaz vagy hamis: A lineáris rendszerek optimális gradiens módszere megköveteli, hogy a $\\mathbf{A}$ mátrix szimmetrikus legyen."},a:{en:"True.",hu:"Igaz."}},{q:{en:"In the example provided, what is the Euclidean norm error $(\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2)$ at the initial guess $\\mathbf{p}^{(0)} = (3, 3, 3)^T$?",hu:"A megadott példában mi a $(\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2)$ euklideszi normahiba a kezdeti $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ tippnél?"},a:{en:"5.09901951",hu:"5.09901951"}},{q:{en:"How does the error change as $k$ increases in the gradient method example table?",hu:"Hogyan változik a hiba, amikor a $k$ növekszik a gradiens módszer példatáblázatában?"},a:{en:"The error consistently decreases towards zero.",hu:"A hiba folyamatosan csökken a nulla felé."}},{q:{en:"What is the Hessian matrix ($g''(\\mathbf{x})$) of the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",hu:"Mi a $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$ másodfokú függvény Hess-mátrixa ($g''(\\mathbf{x})$)?"},a:{en:"$\\mathbf{A}$",hu:"$\\mathbf{A}$"}},{q:{en:"If the gradient method is applied to $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, what is the equivalent linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for the minimum?",hu:"Ha a gradiens módszert alkalmazzuk a $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$-re, akkor mi az egyenértékű $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ lineáris rendszer a minimumra?"},a:{en:"$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -30 \\end{pmatrix}$",hu:"$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -30 \\end{pmatrix}$"}},{q:{en:"Cloze: The optimal gradient method selects $\\alpha_k$ to minimize the function along the _____ direction.",hu:"Bezárás: Az optimális gradiens módszer a $\\alpha_k$-t választja, hogy minimalizálja a függvényt a _____ irányban."},a:{en:"residual (or negative gradient)",hu:"maradék (vagy negatív gradiens)"}},{q:{en:"Why can the solution of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ be framed as a minimization problem?",hu:"Miért fogalmazható meg a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ megoldása minimalizálási problémaként?"},a:{en:"Because the solution occurs where the gradient of the associated quadratic function $g(\\mathbf{x})$ is zero.",hu:"Mert a megoldás ott következik be, ahol a hozzá tartozó $g(\\mathbf{x})$ másodfokú függvény gradiense nulla."}},{q:{en:"In the vector notation $\\mathbf{b}^T \\mathbf{x}$, if $\\mathbf{b} = (b_1, \\ldots, b_n)^T$, how is this expressed as a sum?",hu:"A $\\mathbf{b}^T \\mathbf{x}$ vektorjelölésben, ha $\\mathbf{b} = (b_1, \\ldots, b_n)^T$, hogyan fejeződik ki ez összegként?"},a:{en:"$\\sum_{i=1}^{n} b_i x_i$",hu:"$\\sum_{i=1}^{n} b_i x_i$"}},{q:{en:"Under what condition is the critical point $\\bar{\\mathbf{x}}$ of $g(\\mathbf{x})$ unique?",hu:"Milyen feltételek mellett egyedi a $g(\\mathbf{x})$ $\\bar{\\mathbf{x}}$ kritikus pontja?"},a:{en:"When the matrix $\\mathbf{A}$ is invertible.",hu:"Amikor a $\\mathbf{A}$ mátrix megfordítható."}},{q:{en:"What is the purpose of the optimal gradient method in numerical analysis?",hu:"Mi a célja az optimális gradiens módszernek a numerikus elemzésben?"},a:{en:"To iteratively approximate the solution of a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$.",hu:"A $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ lineáris rendszer megoldásának iteratív közelítése."}},{q:{en:"How does the formula for $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ simplify when $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ and $\\mathbf{A}$ is symmetric?",hu:"Hogyan egyszerűsödik a $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ képlete, ha a $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ és a $\\mathbf{A}$ szimmetrikus?"},a:{en:"The linear terms in $\\Delta\\mathbf{x}$ cancel out, leaving $g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$.",hu:"A $\\Delta\\mathbf{x}$ lineáris kifejezései megszűnnek, így a $g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ marad."}},{q:{en:"If $\\mathbf{A}$ is negative definite, does the iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ find a minimum or a maximum?",hu:"Ha a $\\mathbf{A}$ negatív határozott, akkor a $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ iteráció minimumot vagy maximumot talál?"},a:{en:"It finds a maximum.",hu:"Maximumot talál."}},{q:{en:"In Exercise 11, for $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$ starting from $(9, 1)^T$, what is the asymptotic error constant?",hu:"A 11. gyakorlatban a $(9, 1)^T$-ből induló $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$ esetén mekkora az aszimptotikus hibaállandó?"},a:{en:"0.8",hu:"0.8"}},{q:{en:"What is the residual vector $\\mathbf{r}^{(0)}$ if the initial guess $\\mathbf{p}^{(0)}$ is exactly the solution $\\bar{\\mathbf{x}}$?",hu:"Mekkora a $\\mathbf{r}^{(0)}$ maradékvektor, ha a kezdeti $\\mathbf{p}^{(0)}$ tipp pontosan a $\\bar{\\mathbf{x}}$ megoldás?"},a:{en:"The zero vector $\\mathbf{0}$.",hu:"A $\\mathbf{0}$ nulla vektor."}},{q:{en:"In the summation form of $g(\\mathbf{x})$, what does the index $j$ represent in the term $a_{ij} x_i x_j$?",hu:"A $g(\\mathbf{x})$ összegzési alakjában mit jelent a $j$ index a $a_{ij} x_i x_j$ kifejezésben?"},a:{en:"The column index of matrix $\\mathbf{A}$ and the index of the second vector component.",hu:"A $\\mathbf{A}$ mátrix oszlopindexe és a második vektorkomponens indexe."}},{q:{en:"What property of the quadratic function $g(\\mathbf{x})$ ensures that the gradient $g'(\\mathbf{x})$ is linear?",hu:"A $g(\\mathbf{x})$ másodfokú függvény melyik tulajdonsága biztosítja, hogy a $g'(\\mathbf{x})$ gradiens lineáris legyen?"},a:{en:"The fact that the highest degree of $\\mathbf{x}$ in $g(\\mathbf{x})$ is 2.",hu:"Az a tény, hogy a $\\mathbf{x}$ legmagasabb foka a $g(\\mathbf{x})$-ben 2."}},{q:{en:"Cloze: The function $\\phi_k(t)$ represents $g$ evaluated along the line passing through $\\mathbf{p}^{(k)}$ in the direction of _____.",hu:"Bezárás: A $\\phi_k(t)$ függvény a $g$-t jelenti, a $\\mathbf{p}^{(k)}$-n átmenő egyenes mentén kiértékelve _____ irányában."},a:{en:"$-\\mathbf{v}^{(k)}$ (or $\\mathbf{r}^{(k)}$)",hu:"$-\\mathbf{v}^{(k)}$ (vagy $\\mathbf{r}^{(k)}$)"}},{q:{en:"How is the symmetry of $\\mathbf{A}$ utilized in the step $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$?",hu:"Hogyan hasznosul a $\\mathbf{A}$ szimmetriája a $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$ lépésben?"},a:{en:"By taking the transpose of the scalar value: $(\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x})^T = \\Delta\\mathbf{x}^T \\mathbf{A}^T \\bar{\\mathbf{x}}$ and applying $\\mathbf{A}^T = \\mathbf{A}$.",hu:"A skaláris érték transzpozíciójával: $(\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x})^T = \\Delta\\mathbf{x}^T \\mathbf{A}^T \\bar{\\mathbf{x}}$ és $\\mathbf{A}^T = \\mathbf{A}$ alkalmazásával."}},{q:{en:"True or False: The gradient method always reaches the exact solution in a finite number of steps for any symmetric positive definite matrix.",hu:"Igaz vagy hamis: A gradiens módszer mindig véges számú lépésben éri el a pontos megoldást bármely szimmetrikus pozitív határozott mátrix esetén."},a:{en:"False (it is an iterative method that provides an approximation, though it may converge to the exact solution in specific cases).",hu:"False (ez egy iteratív módszer, amely közelítést ad, bár bizonyos esetekben konvergálhat a pontos megoldáshoz)."}},{q:{en:"In the example system, what is the value of $b_2$?",hu:"A példarendszerben mi a $b_2$ értéke?"},a:{en:"8",hu:"8"}},{q:{en:"In the example system, what is the value of $a_{31}$?",hu:"A példarendszerben mi a $a_{31}$ értéke?"},a:{en:"-1",hu:"-1"}},{q:{en:"What is the primary computational cost per iteration in the optimal gradient method?",hu:"Mi az elsődleges számítási költség iterációnként az optimális gradiens módszerben?"},a:{en:"The matrix-vector multiplication $\\mathbf{A}\\mathbf{r}^{(k)}$.",hu:"A mátrix-vektor szorzás $\\mathbf{A}\\mathbf{r}^{(k)}$."}},{q:{en:"Cloze: To minimize $g(\\mathbf{x})$, we move in the direction of the _____ gradient.",hu:"Bezárás: A $g(\\mathbf{x})$ minimalizálása érdekében a _____ gradiens irányába haladunk."},a:{en:"negative",hu:"negatív"}}],newton:[{q:{en:"What is the primary purpose of Newton's method as described in the source material?",hu:"Mi a Newton-módszer elsődleges célja a forrásanyagban leírtak szerint?"},a:{en:"To find the minimum value of a function $f: \\mathbb{R}^n \\to \\mathbb{R}$.",hu:"A $f: \\mathbb{R}^n \\to \\mathbb{R}$ függvény minimális értékének meghatározása."}},{q:{en:"What degree is the Taylor polynomial used to approximate the function $f$ in a neighborhood of $\\mathbf{p}^{(0)}$?",hu:"Milyen fokszámú a Taylor-polinom a $f$ függvény közelítésére a $\\mathbf{p}^{(0)}$ szomszédságában?"},a:{en:"Second-order (or quadratic).",hu:"Másodrendű (vagy másodfokú)."}},{q:{en:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f'(\\mathbf{p}^{(0)})$ represent?",hu:"A $g(\\mathbf{x})$ Taylor-közelítésben mit jelent a $f'(\\mathbf{p}^{(0)})$ kifejezés?"},a:{en:"The gradient vector of $f$ evaluated at $\\mathbf{p}^{(0)}$.",hu:"A $f$ gradiensvektora a $\\mathbf{p}^{(0)}$ értékkel értékelve."}},{q:{en:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f''(\\mathbf{p}^{(0)})$ represent?",hu:"A $g(\\mathbf{x})$ Taylor-közelítésben mit jelent a $f''(\\mathbf{p}^{(0)})$ kifejezés?"},a:{en:"The Hessian matrix of $f$ evaluated at $\\mathbf{p}^{(0)}$.",hu:"A $f$ Hess-mátrixa a $\\mathbf{p}^{(0)}$ értékkel értékelve."}},{q:{en:"What is the mathematical definition of the quadratic Taylor approximation $g(\\mathbf{x})$ of $f$ at $\\mathbf{p}^{(0)}$?",hu:"Mi a $f$ $g(\\mathbf{x})$ másodfokú Taylor-közelítésének matematikai meghatározása a $\\mathbf{p}^{(0)}$-nél?"},a:{en:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)})$.",hu:"$g(\\mathbf{x}):= f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)})$."}},{q:{en:"Under what condition does the quadratic approximation $g(\\mathbf{x})$ possess a unique global minimum?",hu:"Milyen feltételek mellett rendelkezik a $g(\\mathbf{x})$ másodfokú közelítés egyedi globális minimummal?"},a:{en:"When the Hessian matrix $f''(\\mathbf{p}^{(0)})$ is positive definite.",hu:"Amikor a $f''(\\mathbf{p}^{(0)})$ Hess-mátrix pozitív határozott."}},{q:{en:"Provide the iteration formula for Newton's method for minimization.",hu:"Adja meg a Newton-módszer iterációs képletét a minimalizáláshoz."},a:{en:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$.",hu:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."}},{q:{en:"Newton's method for minimization is equivalent to applying Newton's iteration to solve which equation system?",hu:"A Newton-féle minimalizálási módszer egyenértékű a Newton-iteráció alkalmazásával, melyik egyenletrendszer megoldására?"},a:{en:"$f'(\\mathbf{x}) = \\mathbf{0}$.",hu:"$f'(\\mathbf{x}) = \\mathbf{0}$."}},{q:{en:"According to Theorem 8.13, what must be the value of $f'(\\mathbf{p})$ for a point $\\mathbf{p}$ to be a local minimum candidate?",hu:"A 8.13. Tétel szerint mekkora $f'(\\mathbf{p})$ értéknek kell lennie ahhoz, hogy egy $\\mathbf{p}$ pont lokális minimum jelölt legyen?"},a:{en:"$\\mathbf{0}$ (the zero vector).",hu:"$\\mathbf{0}$ (a nulla vektor)."}},{q:{en:"What differentiability class is required for $f$ to apply the local quadratic convergence theorem for Newton's method?",hu:"Milyen differenciálhatósági osztály szükséges ahhoz, hogy $f$ alkalmazza a lokális másodfokú konvergencia tételt Newton-módszerre?"},a:{en:"$f \\in C^3$.",hu:"$f \\in C^3$."}},{q:{en:"If $f'(\\mathbf{p}) = \\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, what can be concluded about the point $\\mathbf{p}$?",hu:"Ha a $f'(\\mathbf{p}) = \\mathbf{0}$ és a $f''(\\mathbf{p})$ pozitív határozott, mit lehet következtetni a $\\mathbf{p}$ pontra?"},a:{en:"The function $f$ has a local minimum at $\\mathbf{p}$.",hu:"A $f$ funkciónak van egy helyi minimuma a $\\mathbf{p}$-nél."}},{q:{en:"What is the typical convergence rate of Newton's method near a local minimum where the Hessian is positive definite?",hu:"Mi a Newton-módszer tipikus konvergencia rátája egy lokális minimum közelében, ahol a Hess-féle pozitív definit?"},a:{en:"Locally quadratic convergence.",hu:"Lokálisan másodfokú konvergencia."}},{q:{en:"According to the proof of Theorem 8.13, which theorem establishes the local quadratic convergence of Newton's method for systems?",hu:"A 8.13. tétel bizonyítása szerint melyik tétel állapítja meg a Newton-módszer lokális másodfokú konvergenciáját rendszerekre?"},a:{en:"Theorem 2.56.",hu:"2.56. tétel."}},{q:{en:"Concept: Newton's Method for Minimization",hu:"Koncepció: Newton-módszer a minimalizáláshoz"},a:{en:"Definition: An iterative algorithm that uses first and second derivatives to find local minima of a function.",hu:"Definíció: Iteratív algoritmus, amely első és második deriváltot használ egy függvény lokális minimumának meghatározására."}},{q:{en:"In Example 8.14, Newton's method is applied to which function $f(x, y)$?",hu:"A 8.14. példában a Newton-módszert melyik $f(x, y)$ függvényre alkalmazzuk?"},a:{en:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$.",hu:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."}},{q:{en:"What is the exact minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ used in Example 8.14?",hu:"Mi a 8.14. példában használt $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény pontos minimumpontja?"},a:{en:"$(1, 0.5)^T$.",hu:"$(1, 0.5)^T$."}},{q:{en:"In Example 8.14, the starting vector $\\mathbf{p}^{(0)}$ for the first trial is _____.",hu:"A 8.14. példában az első próba $\\mathbf{p}^{(0)}$ kezdővektora _____."},a:{en:"$(-1, 4)^T$.",hu:"$(-1, 4)^T$."}},{q:{en:"For the function in Example 8.14, what occurs if the Newton's iteration starts from $(1, 3)^T$?",hu:"A 8.14. példában szereplő függvény esetében mi történik, ha a Newton iterációja $(1, 3)^T$-ből indul?"},a:{en:"The method returns the exact minimum point in a single step.",hu:"A metódus egyetlen lépésben adja vissza a pontos minimum pontot."}},{q:{en:"How does the convergence speed of Newton's method in Example 8.14 (positive definite Hessian) compare to Example 8.15 (zero Hessian)?",hu:"Hogyan viszonyul a 8.14. példában a Newton-módszer konvergenciasebessége (pozitív határozott Hess-féle) a 8.15. példához (nulla Hess-féle)?"},a:{en:"Example 8.14 is quadratic (fast), while Example 8.15 is linear (slower).",hu:"A 8.14. példa másodfokú (gyors), míg a 8.15. példa lineáris (lassabb)."}},{q:{en:"In Example 8.15, what is the function $f(x, y)$ defined as?",hu:"A 8.15. példában mi a $f(x, y)$ függvény meghatározása?"},a:{en:"$f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$.",hu:"$f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$."}},{q:{en:"What is the value of the Hessian $f''(1, 0.5)$ for the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$?",hu:"Mennyi a hesseni $f''(1, 0.5)$ értéke a $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$ függvényre?"},a:{en:"The zero matrix $\\mathbf{0}$.",hu:"A nulla mátrix $\\mathbf{0}$."}},{q:{en:"Why is the Hessian $f''(1, 0.5) = \\mathbf{0}$ significant in Example 8.15?",hu:"Miért jelentős a hesseni $f''(1, 0.5) = \\mathbf{0}$ a 8.15. példában?"},a:{en:"It means the Hessian is not positive definite, violating a condition for quadratic convergence.",hu:"Ez azt jelenti, hogy a hesseni nem pozitív határozott, megsérti a másodfokú konvergencia feltételét."}},{q:{en:"Despite the non-positive definite Hessian at the minimum, how does Newton's method behave for the function in Example 8.15?",hu:"Annak ellenére, hogy a minimum nem pozitív határozott Hessian, hogyan viselkedik a Newton-módszer a 8.15. példában szereplő függvényre?"},a:{en:"It still converges, but the rate of convergence is only linear.",hu:"Még mindig konvergál, de a konvergencia mértéke csak lineáris."}},{q:{en:"What type of function always results in the exact minimum in one step using Newton's method (assuming a positive definite Hessian)?",hu:"Milyen típusú függvény eredményezi mindig a pontos minimumot egy lépésben Newton-módszerrel (pozitív határozott Hessian feltételezésével)?"},a:{en:"Quadratic functions.",hu:"Kvadratikus függvények."}},{q:{en:"Exercise 3 asks to prove that if Theorem 8.13 conditions hold and $\\mathbf{p}^{(0)}$ is close to $\\mathbf{p}$, then $f''(\\mathbf{p}^{(k)})$ is _____ for all $k$.",hu:"A 3. gyakorlat annak bizonyítását kéri, hogy ha a 8.13. Tétel feltételei teljesülnek, és a $\\mathbf{p}^{(0)}$ közel van a $\\mathbf{p}$-hez, akkor $f''(\\mathbf{p}^{(k)})$ _____ az összes $k$-re."},a:{en:"Invertible.",hu:"Megfordítható."}},{q:{en:"How is the next iteration point $\\mathbf{p}^{(1)}$ calculated from the quadratic approximation $g$?",hu:"Hogyan számítható ki a következő iterációs pont $\\mathbf{p}^{(1)}$ a $g$ másodfokú közelítésből?"},a:{en:"It is the point where $g$ attains its global minimum.",hu:"Ez az a pont, ahol a $g$ eléri globális minimumát."}},{q:{en:"The notation $(f''(\\mathbf{p}^{(k)}))^{-1}$ in the iteration formula denotes the _____ of the Hessian matrix.",hu:"Az iterációs képletben szereplő $(f''(\\mathbf{p}^{(k)}))^{-1}$ jelölés a Hess-mátrix _____-ját jelöli."},a:{en:"Inverse.",hu:"Inverz."}},{q:{en:"The sequence $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ is known as the _____ minimum-seeking method.",hu:"A $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ szekvencia a _____ minimumkereső módszerként ismert."},a:{en:"Newton-type (or Newton's).",hu:"Newton típusú (vagy Newton-féle)."}},{q:{en:"What happens to the gradient $f'$ at the minimum point in Example 8.14 and 8.15?",hu:"Mi történik a $f'$ gradienssel a 8.14. és 8.15. példa minimumpontján?"},a:{en:"It becomes the zero vector $\\mathbf{0}$.",hu:"Ez lesz a $\\mathbf{0}$ nulla vektor."}},{q:{en:"In Example 8.15, Table 8.6 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ approaching a constant. What does this indicate?",hu:"A 8.15. példában a 8.6. táblázat azt mutatja, hogy a $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ arány közelít egy állandóhoz. Mit jelez ez?"},a:{en:"Linear convergence.",hu:"Lineáris konvergencia."}},{q:{en:"In Example 8.14, Table 8.5 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ being tracked. What is this ratio used to identify?",hu:"A 8.14. példában a 8.5. táblázat mutatja a követett $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ arányt. Mi alapján azonosítható ez az arány?"},a:{en:"Quadratic convergence.",hu:"Kvadratikus konvergencia."}},{q:{en:"What is the value of $f(\\mathbf{p}^{(k)})$ at the exact minimum $(1, 0.5)^T$ for both examples in Section 8.6?",hu:"Mi a $f(\\mathbf{p}^{(k)})$ értéke a pontos minimum $(1, 0.5)^T$ értéknél a 8.6. szakasz mindkét példájában?"},a:{en:"0.00000000.",hu:"0.00000000."}},{q:{en:"If the Hessian matrix $f''(\\mathbf{x})$ is positive definite everywhere, what kind of minimum does the quadratic approximation $g$ have?",hu:"Ha a $f''(\\mathbf{x})$ Hess-mátrix mindenhol pozitív definit, milyen minimuma van a $g$ másodfokú közelítésnek?"},a:{en:"A global minimum.",hu:"Globális minimum."}},{q:{en:"Why is $f \\in C^3$ a necessary condition for the quadratic convergence theorem of Newton's method?",hu:"Miért szükséges feltétele a $f \\in C^3$ a Newton-módszer másodfokú konvergenciatételének?"},a:{en:"To ensure the second derivative is Lipschitz continuous or that the Taylor remainder behaves correctly for quadratic convergence.",hu:"Annak biztosítására, hogy a második derivált Lipschitz folytonos legyen, vagy hogy a Taylor-maradék megfelelően viselkedjen a másodfokú konvergenciánál."}},{q:{en:"True or False: Newton's method for minimization requires calculating the inverse of the Hessian matrix at every step.",hu:"Igaz vagy hamis: Newton minimalizálási módszere megköveteli a Hess-mátrix inverzének kiszámítását minden lépésben."},a:{en:"True (at least conceptually, as per the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$).",hu:"Igaz (legalábbis fogalmilag, a $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ képlet szerint)."}},{q:{en:"In the formula for Newton's method, what is subtracted from the current point $\\mathbf{p}^{(k)}$?",hu:"A Newton-módszer képletében mit vonunk le a $\\mathbf{p}^{(k)}$ aktuális pontból?"},a:{en:"The product of the inverse Hessian and the gradient vector: $(f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$.",hu:"Az inverz Hess-féle és a gradiensvektor szorzata: $(f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."}},{q:{en:"What vector norm is used in the examples to measure the distance to the minimum point?",hu:"Milyen vektornormát használunk a példákban a minimális pont távolságának mérésére?"},a:{en:"The $L_2$ norm (Euclidean norm), denoted as $\\|\\cdot\\|_2$.",hu:"A $L_2$ norma (euklideszi norma), jelölése $\\|\\cdot\\|_2$."}},{q:{en:"For the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, how many iterations starting from $(-1, 4)^T$ were shown before reaching a distance of approximately $1.7 \\times 10^{-5}$?",hu:"A $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvénynél hány $(-1, 4)^T$-ből kiinduló iteráció volt látható, mielőtt elérte volna a körülbelül $1.7 \\times 10^{-5}$ távolságot?"},a:{en:"5 iterations.",hu:"5 iteráció."}},{q:{en:"In Example 8.15, at iteration $k=20$, the distance to the minimum is approximately _____.",hu:"A 8.15. példában a $k=20$ iterációnál a távolság a minimumtól körülbelül _____."},a:{en:"$0.01238211$.",hu:"$0.01238211$."}},{q:{en:"Based on the tables, which example converges to a much higher precision in fewer steps?",hu:"A táblázatok alapján melyik példa konvergál sokkal nagyobb pontossággal kevesebb lépésben?"},a:{en:"Example 8.14 (due to quadratic convergence).",hu:"8.14. példa (a másodfokú konvergencia miatt)."}},{q:{en:"In Example 8.15, the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ eventually stabilizes around what value?",hu:"A 8.15. példában a $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ arány végül milyen érték körül stabilizálódik?"},a:{en:"Approximately $0.66666667$ (or $2/3$).",hu:"Körülbelül $0.66666667$ (vagy $2/3$)."}},{q:{en:"Under what circumstance does Newton's method for minimization fail to be defined for a specific iteration step?",hu:"Milyen körülmények között nem sikerül Newton minimalizálási módszerét meghatározni egy adott iterációs lépéshez?"},a:{en:"If the Hessian matrix $f''(\\mathbf{p}^{(k)})$ is singular (non-invertible).",hu:"Ha a $f''(\\mathbf{p}^{(k)})$ hesseni mátrix szinguláris (nem invertálható)."}},{q:{en:"Theorem 8.13 asserts that Newton's method converges _____ if the starting point is close enough to the minimum.",hu:"A 8.13. tétel azt állítja, hogy a Newton-módszer _____ konvergál, ha a kiindulási pont elég közel van a minimumhoz."},a:{en:"Locally.",hu:"Helyileg."}},{q:{en:"What is the relationship between the Hessian matrix $f''(\\mathbf{p})$ and the Jacobian matrix of the system $f'(\\mathbf{x}) = \\mathbf{0}$?",hu:"Mi a kapcsolat a $f''(\\mathbf{p})$ Hess-mátrix és a $f'(\\mathbf{x}) = \\mathbf{0}$ rendszer Jacobi-mátrixa között?"},a:{en:"The Hessian of $f$ is the Jacobian of the gradient system $f'(\\mathbf{x})$.",hu:"A $f$ Hessianusa a $f'(\\mathbf{x})$ gradiens rendszer Jacobi-jele."}},{q:{en:"If $f$ is a quadratic function, $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{b}^T \\mathbf{x} + c$, what is its Hessian matrix $f''(\\mathbf{x})$?",hu:"Ha a $f$ egy másodfokú függvény, a $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{b}^T \\mathbf{x} + c$, akkor mi a $f''(\\mathbf{x})$ Hess-mátrixa?"},a:{en:"The matrix $A$.",hu:"A $A$ mátrix."}},{q:{en:"Newton's method effectively replaces the objective function at each step with its _____ approximation.",hu:"Newton módszere hatékonyan helyettesíti a célfüggvényt minden lépésben a _____ közelítésével."},a:{en:"Quadratic (or second-order Taylor).",hu:"Quadratic (vagy másodrendű Taylor)."}},{q:{en:"What is the result of the first derivative of the Taylor approximation $g(\\mathbf{x})$ at the point $\\mathbf{x} = \\mathbf{p}^{(1)}$?",hu:"Mi az eredménye a $g(\\mathbf{x})$ Taylor-közelítés első deriváltjának a $\\mathbf{x} = \\mathbf{p}^{(1)}$ pontban?"},a:{en:"The gradient $g'(\\mathbf{p}^{(1)}) = \\mathbf{0}$.",hu:"A gradiens $g'(\\mathbf{p}^{(1)}) = \\mathbf{0}$."}},{q:{en:"In Example 8.15, the starting function value $f(\\mathbf{p}^{(0)})$ is _____.",hu:"A 8.15. példában a $f(\\mathbf{p}^{(0)})$ kezdő függvényérték _____."},a:{en:"$244.10000000$.",hu:"$244.10000000$."}},{q:{en:"In Example 8.14, the value of the function at the starting point $(-1, 4)^T$ is _____.",hu:"A 8.14. példában a függvény értéke a $(-1, 4)^T$ kezdőpontban _____."},a:{en:"$57.00000000$.",hu:"$57.00000000$."}},{q:{en:"The term $f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)})$ in the Taylor polynomial represents a _____ product.",hu:"A $f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)})$ kifejezés a Taylor-polinomban egy _____ szorzatot jelent."},a:{en:"Scalar (or dot) product.",hu:"Skalár (vagy pont) szorzat."}},{q:{en:"Which specific property of the Hessian ensures that the search direction in Newton's method is a descent direction?",hu:"A Hessian melyik tulajdonsága biztosítja, hogy a keresési irány Newton módszerében süllyedési irány legyen?"},a:{en:"Positive definiteness.",hu:"Pozitív határozottság."}},{q:{en:"How is the Taylor polynomial $g(\\mathbf{x})$ related to the next iterate $\\mathbf{p}^{(1)}$ in terms of calculus?",hu:"Hogyan kapcsolódik a $g(\\mathbf{x})$ Taylor-polinom a következő iterációhoz, a $\\mathbf{p}^{(1)}$ számításhoz?"},a:{en:"$\\mathbf{p}^{(1)}$ is the stationary point of $g(\\mathbf{x})$, found by setting $g'(\\mathbf{x}) = \\mathbf{0}$.",hu:"A $\\mathbf{p}^{(1)}$ a $g(\\mathbf{x})$ állópontja, amelyet a $g'(\\mathbf{x}) = \\mathbf{0}$ beállításával találhatunk meg."}},{q:{en:"What is the significance of the distance $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ becoming zero in a table?",hu:"Mi a jelentősége annak, hogy a $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ távolság nullává válik egy táblázatban?"},a:{en:"The iteration has reached the exact minimum within numerical precision.",hu:"Az iteráció elérte a pontos minimumot a numerikus pontosságon belül."}},{q:{en:"If Newton's method is applied to a function where the Hessian is always positive definite, what can be said about the shape of the function?",hu:"Ha a Newton-módszert olyan függvényre alkalmazzuk, ahol a Hess-féle mindig pozitív definit, mit mondhatunk a függvény alakjáról?"},a:{en:"The function is strictly convex.",hu:"A függvény szigorúan konvex."}},{q:{en:"The proof of Theorem 8.13 uses which theorem to establish that $\\mathbf{p}$ is a local minimum?",hu:"A 8.13. tétel bizonyítása melyik tételt használja annak megállapítására, hogy $\\mathbf{p}$ egy lokális minimum?"},a:{en:"Theorem 8.1.",hu:"8.1. Tétel."}},{q:{en:"In Example 8.14, at $k=1$, the iterate $\\mathbf{p}^{(1)}$ is _____.",hu:"A 8.14. példában a $k=1$-nél a $\\mathbf{p}^{(1)}$ iteráció értéke _____."},a:{en:"$(-1.33333333, 0.83333333)^T$.",hu:"$(-1.33333333, 0.83333333)^T$."}},{q:{en:"Exercise 2: For a quadratic function with a positive definite Hessian, why is the minimum found in one step?",hu:"2. gyakorlat: Egy pozitív határozott Hess-féle másodfokú függvény esetén miért találjuk meg egy lépésben a minimumot?"},a:{en:"Because the second-order Taylor polynomial $g(\\mathbf{x})$ is identical to the function $f(\\mathbf{x})$ itself.",hu:"Mivel a $g(\\mathbf{x})$ másodrendű Taylor-polinom azonos magával a $f(\\mathbf{x})$ függvénnyel."}},{q:{en:"What is the gradient vector of $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ at its minimum $(1, 0.5)^T$?",hu:"Mekkora a $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ gradiensvektora a $(1, 0.5)^T$ minimumán?"},a:{en:"$(0, 0)^T$.",hu:"$(0, 0)^T$."}},{q:{en:"The Hessian matrix is defined as the matrix of _____ partial derivatives.",hu:"A Hess-mátrix a _____ parciális derivált mátrixa."},a:{en:"Second-order.",hu:"Másodrendű."}},{q:{en:"Newton's method for minimization can be viewed as a _____ refinement of the current estimate of the minimum.",hu:"Newton minimalizálási módszere a minimum jelenlegi becslésének _____ finomításaként tekinthető."},a:{en:"Local.",hu:"Helyi."}}],quasinewton:[{q:{en:"In Quasi-Newton methods, the function $f$ is approximated near $\\mathbf{p}^{(k)}$ by what type of function?",hu:"A kvázi-Newton módszerekben a $f$ függvényt milyen típusú függvény közelíti a $\\mathbf{p}^{(k)}$ közelében?"},a:{en:"A quadratic function $g(\\mathbf{x})$.",hu:"A $g(\\mathbf{x})$ másodfokú függvény."}},{q:{en:"Formula: Quadratic approximation $g(\\mathbf{x})$ used in Quasi-Newton methods",hu:"Képlet: Kvázi-Newton módszerekben használt $g(\\mathbf{x})$ másodfokú közelítés"},a:{en:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + (\\mathbf{v}^{(k)})^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)})$",hu:"$g(\\mathbf{x}):= f(\\mathbf{p}^{(k)}) + (\\mathbf{v}^{(k)})^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)})$"}},{q:{en:"In the quadratic approximation for Quasi-Newton methods, what do $\\mathbf{v}^{(k)}$ and $\\mathbf{A}^{(k)}$ typically represent?",hu:"A kvázi-Newton-módszerek másodfokú közelítésében általában mit reprezentál a $\\mathbf{v}^{(k)}$ és a $\\mathbf{A}^{(k)}$?"},a:{en:"Approximations of the gradient $f'(\\mathbf{p}^{(k)})$ and the Hessian $f''(\\mathbf{p}^{(k)})$.",hu:"A $f'(\\mathbf{p}^{(k)})$ és a hesseni $f''(\\mathbf{p}^{(k)})$ gradiens közelítései."}},{q:{en:"If $\\mathbf{A}^{(k)}$ is positive definite, what is the formula for the minimum point $\\mathbf{p}^{(k+1)}$ of the quadratic approximation $g(\\mathbf{x})$?",hu:"Ha a $\\mathbf{A}^{(k)}$ pozitív definit, mi a képlete a $g(\\mathbf{x})$ másodfokú közelítés $\\mathbf{p}^{(k+1)}$ minimumpontjának?"},a:{en:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{v}^{(k)}$",hu:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{v}^{(k)}$"}},{q:{en:"What is the order of magnitude for function evaluations required per iteration when using numerical difference approximations for both the gradient and Hessian?",hu:"Milyen nagyságrendű az iterációnként szükséges függvényértékelések, ha a gradiens és a Hess-féle numerikus különbség közelítését is alkalmazzuk?"},a:{en:"$n^2$ function evaluations.",hu:"$n^2$ funkcióértékelések."}},{q:{en:"Formula: First-order forward difference approximation for the $i$-th component of the gradient $v_i^{(k)}$",hu:"Képlet: Elsőrendű előremenő különbség közelítés a $v_i^{(k)}$ gradiens $i$-edik összetevőjéhez"},a:{en:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$",hu:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"}},{q:{en:"The standard Quasi-Newton method for minimization assumes the exact value of which vector is available?",hu:"A szabványos kvázi-Newton-módszer a minimalizálásra azt feltételezi, hogy melyik vektor pontos értéke érhető el?"},a:{en:"The gradient vector $f'(\\mathbf{p}^{(k)})$.",hu:"A $f'(\\mathbf{p}^{(k)})$ gradiens vektor."}},{q:{en:"In Quasi-Newton iterations, how is the step vector $\\mathbf{s}^{(k)}$ defined relative to the current point $\\mathbf{p}^{(k)}$?",hu:"Kvázi-Newton iterációkban hogyan van meghatározva a $\\mathbf{s}^{(k)}$ lépésvektor az aktuális $\\mathbf{p}^{(k)}$ ponthoz képest?"},a:{en:"$\\mathbf{s}^{(k)} = \\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$",hu:"$\\mathbf{s}^{(k)} = \\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"}},{q:{en:"Formula: Definition of the gradient change vector $\\mathbf{y}^{(k)}$",hu:"Képlet: A $\\mathbf{y}^{(k)}$ gradiens változási vektor definíciója"},a:{en:"$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})$",hu:"$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})$"}},{q:{en:"What equation must the updated Hessian approximation $\\mathbf{A}^{(k+1)}$ satisfy to be consistent with the gradient change?",hu:"Milyen egyenletet kell teljesítenie a frissített $\\mathbf{A}^{(k+1)}$ Hess-féle közelítésnek, hogy konzisztens legyen a gradiens változásával?"},a:{en:"The secant equation: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$.",hu:"A szekáns egyenlet: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$."}},{q:{en:"Formula: Broyden's method update for the matrix $\\mathbf{A}^{(k+1)}$",hu:"Képlet: Broyden módszer frissítése a $\\mathbf{A}^{(k+1)}$ mátrixhoz"},a:{en:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$",hu:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"}},{q:{en:"What are the two main theoretical drawbacks of using the standard Broyden's method for function minimization?",hu:"Mi a két fő elméleti hátránya a szabványos Broyden-módszer funkcióminimalizálásra való használatának?"},a:{en:"The generated matrices are generally not symmetric and not necessarily positive definite.",hu:"A generált mátrixok általában nem szimmetrikusak és nem feltétlenül pozitív határozottak."}},{q:{en:"Concept: Closest symmetric matrix",hu:"Koncepció: Legközelebbi szimmetrikus mátrix"},a:{en:"The unique symmetric matrix closest to a matrix $\\mathbf{A}$ in the Frobenius norm is $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$.",hu:"A Frobenius-normában a $\\mathbf{A}$ mátrixhoz legközelebb eső egyedi szimmetrikus mátrix a $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$."}},{q:{en:"What is the full name of the 'PSB update' in Quasi-Newton methods?",hu:'Mi a "PSB frissítés" teljes neve a kvázi-Newton metódusokban?'},a:{en:"Powell-Symmetric-Broyden update.",hu:"Powell-Symmetric-Broyden frissítés."}},{q:{en:"The PSB update is derived by iteratively enforcing which two properties?",hu:"A PSB frissítés melyik két tulajdonság iteratív érvényesítéséből származik?"},a:{en:"Symmetry and the secant equation.",hu:"Szimmetria és a szekáns egyenlet."}},{q:{en:"Formula: PSB update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",hu:"Képlet: PSB frissítés a $\\mathbf{A}^{(k+1)}$ hesseni közelítéshez"},a:{en:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T$",hu:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T$"}},{q:{en:"According to Theorem 8.17, what is the convergence rate of the PSB update near a local minimum with a positive definite Hessian?",hu:"A 8.17. Tétel szerint mekkora a PSB-frissítés konvergencia rátája egy lokális minimum közelében pozitív határozott Hessiannal?"},a:{en:"Superlinear convergence.",hu:"Szuperlineáris konvergencia."}},{q:{en:"What property does the PSB update lack that is often critical for efficient minimization?",hu:"Milyen tulajdonság hiányzik a PSB frissítésből, ami gyakran kritikus a hatékony minimalizáláshoz?"},a:{en:"It does not guarantee that $\\mathbf{A}^{(k)}$ remains positive definite.",hu:"Ez nem garantálja, hogy a $\\mathbf{A}^{(k)}$ pozitív határozott marad."}},{q:{en:"Concept: Positive Definite Matrix Construction",hu:"Koncepció: pozitív határozott mátrix konstrukció"},a:{en:"A matrix $\\mathbf{A}$ is positive definite if it can be written as $\\mathbf{M}\\mathbf{M}^T$ where $\\mathbf{M}$ is non-singular.",hu:"A $\\mathbf{A}$ mátrix pozitív határozott, ha $\\mathbf{M}\\mathbf{M}^T$-ként írható fel, ahol a $\\mathbf{M}$ nem szinguláris."}},{q:{en:"If $\\mathbf{A}^{(k+1)}$ is positive definite and satisfies the secant equation, what inequality must hold between $\\mathbf{y}^{(k)}$ and $\\mathbf{s}^{(k)}$?",hu:"Ha a $\\mathbf{A}^{(k+1)}$ pozitív határozott és kielégíti a szekáns egyenletet, milyen egyenlőtlenségnek kell fennállnia $\\mathbf{y}^{(k)}$ és $\\mathbf{s}^{(k)}$ között?"},a:{en:"$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$",hu:"$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$"}},{q:{en:"The BFGS update is named after which four researchers?",hu:"A BFGS frissítés melyik négy kutatóról kapta a nevét?"},a:{en:"Broyden, Fletcher, Goldfarb, and Shanno.",hu:"Broyden, Fletcher, Goldfarb és Shanno."}},{q:{en:"Formula: BFGS update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",hu:"Képlet: BFGS frissítés a $\\mathbf{A}^{(k+1)}$ hesseni közelítéshez"},a:{en:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}$",hu:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}$"}},{q:{en:"Which Quasi-Newton update is generally considered the best performing method for approximating the Hessian?",hu:"Általában melyik kvázi-Newton-frissítést tartják a legjobban teljesítő módszernek a Hessian közelítésére?"},a:{en:"The BFGS update.",hu:"A BFGS frissítése."}},{q:{en:"Under what condition will the BFGS update generate a positive definite $\\mathbf{A}^{(k+1)}$ if $\\mathbf{A}^{(k)}$ is positive definite?",hu:"Milyen feltételek mellett generál a BFGS frissítés pozitív határozott $\\mathbf{A}^{(k+1)}$ értéket, ha a $\\mathbf{A}^{(k)}$ pozitív határozott?"},a:{en:"The condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ must be satisfied.",hu:"A $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ feltételnek teljesülnie kell."}},{q:{en:"As the iterates $\\mathbf{p}^{(k)}$ approach a point $\\mathbf{p}$ where $f''(\\mathbf{p})$ is positive definite, how does the term $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}$ behave?",hu:"Ahogy a $\\mathbf{p}^{(k)}$ iterátumok közelítenek egy $\\mathbf{p}$ ponthoz, ahol a $f''(\\mathbf{p})$ pozitív határozott, hogyan viselkedik a $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}$ kifejezés?"},a:{en:"It becomes positive, ensuring the BFGS update is well-defined and positive definite.",hu:"Pozitívvá válik, biztosítva, hogy a BFGS frissítés jól definiálható és pozitív legyen."}},{q:{en:"To avoid solving linear systems, Quasi-Newton methods often use a recursion for which matrix?",hu:"A lineáris rendszerek megoldásának elkerülése érdekében a kvázi-Newton módszerek melyik mátrixhoz gyakran használnak rekurziót?"},a:{en:"The inverse of the Hessian approximation, $\\mathbf{B}^{(k)} = (\\mathbf{A}^{(k)})^{-1}$.",hu:"A Hess-féle közelítés inverze, $\\mathbf{B}^{(k)} = (\\mathbf{A}^{(k)})^{-1}$."}},{q:{en:"Formula: Recursive update for the inverse matrix $\\mathbf{B}^{(k+1)}$ in the BFGS method",hu:"Képlet: Rekurzív frissítés a $\\mathbf{B}^{(k+1)}$ inverz mátrixhoz a BFGS módszerben"},a:{en:"$\\mathbf{B}^{(k+1)} = \\mathbf{B}^{(k)} + (1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}$",hu:"$\\mathbf{B}^{(k+1)} = \\mathbf{B}^{(k)} + (1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}$"}},{q:{en:"When using the inverse Hessian approximation $\\mathbf{B}^{(k)}$, how is the step vector $\\mathbf{s}^{(k)}$ calculated?",hu:"Ha a $\\mathbf{B}^{(k)}$ inverz Hess-közelítést használjuk, hogyan számítjuk ki a $\\mathbf{s}^{(k)}$ lépésvektort?"},a:{en:"$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)})$",hu:"$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)})$"}},{q:{en:"What does the acronym 'DFP' stand for in Quasi-Newton methods?",hu:"Mit jelent a „DFP” mozaikszó a kvázi-Newton módszerekben?"},a:{en:"Davidon-Fletcher-Powell.",hu:"Davidon-Fletcher-Powell."}},{q:{en:"How does the starting point for the DFP derivation differ from the BFGS derivation?",hu:"Miben különbözik a DFP származtatás kiindulópontja a BFGS származtatástól?"},a:{en:"DFP starts from the inverse secant equation $(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} = \\mathbf{v}^{(k)}$.",hu:"A DFP a $(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} = \\mathbf{v}^{(k)}$ fordított szekáns egyenletből indul ki."}},{q:{en:"Formula: DFP update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",hu:"Képlet: DFP frissítés a $\\mathbf{A}^{(k+1)}$ hesseni közelítéshez"},a:{en:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T$",hu:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T$"}},{q:{en:"Formula: Recursive update for the inverse matrix $(\\mathbf{A}^{(k+1)})^{-1}$ in the DFP method",hu:"Képlet: Rekurzív frissítés a $(\\mathbf{A}^{(k+1)})^{-1}$ inverz mátrixhoz a DFP-módszerben"},a:{en:"$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$",hu:"$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"}},{q:{en:"What is a recommended choice for the initial matrix $\\mathbf{A}^{(0)}$ in BFGS or DFP iterations?",hu:"Mi a javasolt választás a kezdeti $\\mathbf{A}^{(0)}$ mátrixhoz BFGS vagy DFP iterációkban?"},a:{en:"The exact Hessian $f''(\\mathbf{p}^{(0)})$ or its numerical difference approximation.",hu:"A pontos Hessian $f''(\\mathbf{p}^{(0)})$ vagy annak numerikus különbség közelítése."}},{q:{en:"Which two Quasi-Newton methods mentioned in the text exhibit similar rapid convergence speeds in the provided examples?",hu:"Melyik két, a szövegben említett kvázi-Newton-módszer mutat hasonló gyors konvergenciasebességet a megadott példákban?"},a:{en:"The BFGS and DFP updates.",hu:"A BFGS és a DFP frissítései."}},{q:{en:"The problem of finding $\\mathbf{A}^{(k+1)}$ that satisfies $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ is known as solving the _____ equation.",hu:"A $\\mathbf{A}^{(k+1)}$ megtalálásának problémája, amely kielégíti a $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$-t, a _____ egyenlet megoldásaként ismert."},a:{en:"Secant",hu:"Metsző"}},{q:{en:"Cloze: In the BFGS update, if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ is not met, the new matrix $\\mathbf{A}^{(k+1)}$ is only guaranteed to be _____.",hu:"Cloze: A BFGS frissítésben, ha a $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ feltétel nem teljesül, az új $\\mathbf{A}^{(k+1)}$ mátrix garantáltan csak _____ lesz."},a:{en:"Positive semidefinite",hu:"Pozitív félhatározott"}},{q:{en:"Why is it important for $\\mathbf{A}^{(k)}$ to be positive definite during minimization?",hu:"Miért fontos, hogy a $\\mathbf{A}^{(k)}$ pozitív határozott legyen a minimalizálás során?"},a:{en:"To ensure the local quadratic approximation $g(\\mathbf{x})$ has a unique minimum.",hu:"A helyi másodfokú közelítés biztosítására a $g(\\mathbf{x})$ egyedi minimummal rendelkezik."}},{q:{en:"Process: In Quasi-Newton methods, the step from $\\mathbf{p}^{(k)}$ to $\\mathbf{p}^{(k+1)}$ is determined by solving what linear system?",hu:"Folyamat: A kvázi-Newton-módszerekben a $\\mathbf{p}^{(k)}$-től a $\\mathbf{p}^{(k+1)}$-ig terjedő lépést milyen lineáris rendszer megoldásával határozzuk meg?"},a:{en:"$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)})$",hu:"$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)})$"}},{q:{en:"According to the text, what is the main advantage of Quasi-Newton methods over the classical Newton's method?",hu:"A szöveg szerint mi a kvázi-Newton-módszerek fő előnye a klasszikus Newton-módszerrel szemben?"},a:{en:"They do not require the computation of the exact Hessian matrix at each step.",hu:"Nem szükséges a pontos Hess-mátrix kiszámítása minden lépésben."}},{q:{en:"Term: Frobenius Norm",hu:"Fogalom: Frobenius Norm"},a:{en:"Definition: A matrix norm defined as the square root of the sum of the squares of all matrix elements, used to find the 'closest' symmetric matrix.",hu:"Definíció: Az összes mátrixelem négyzetösszegének négyzetgyökeként definiált mátrixnorma, amelyet a „legközelebbi” szimmetrikus mátrix megtalálására használnak."}},{q:{en:"In the derivation of the BFGS update, the matrix $\\mathbf{M}^{(k+1)}$ is chosen to satisfy $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$ for all vectors $\\mathbf{z}$ that meet what geometric condition?",hu:"A BFGS-frissítés levezetésében a $\\mathbf{M}^{(k+1)}$ mátrixot úgy választottuk ki, hogy kielégítse a $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$ követelményt minden olyan $\\mathbf{z}$ vektorra, amely milyen geometriai feltételnek felel meg?"},a:{en:"$\\mathbf{z}$ is orthogonal to $\\mathbf{v}^{(k)}$ ($\\mathbf{z} \\perp \\mathbf{v}^{(k)}$).",hu:"A $\\mathbf{z}$ ortogonális a $\\mathbf{v}^{(k)}$-re ($\\mathbf{z} \\perp \\mathbf{v}^{(k)}$)."}},{q:{en:"Formula: Numerical approximation of the second partial derivative $a_{ij}^{(k)}$",hu:"Képlet: A $a_{ij}^{(k)}$ második parciális derivált numerikus közelítése"},a:{en:"$a_{ij}^{(k)} = \\frac{1}{h^2}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)}))$",hu:"$a_{ij}^{(k)} = \\frac{1}{h^2}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)}))$"}},{q:{en:"The derivation of the DFP update is considered analogous to the derivation of which other update?",hu:"A DFP-frissítés származtatása melyik másik frissítés származtatásával analóg?"},a:{en:"The BFGS update.",hu:"A BFGS frissítése."}},{q:{en:"For the BFGS update, what is the relationship between the iterates $\\mathbf{p}^{(k)}$ and the target minimum $\\mathbf{p}$ to guarantee existence of $\\varepsilon$ and $\\delta$ for convergence?",hu:"A BFGS-frissítéshez milyen kapcsolat van a $\\mathbf{p}^{(k)}$ iterátumok és a $\\mathbf{p}$ célminimumok között, amelyek garantálják a $\\varepsilon$ és $\\delta$ létezését a konvergenciához?"},a:{en:"$\\mathbf{p}^{(0)}$ must be sufficiently close to $\\mathbf{p}$ and $\\mathbf{A}^{(0)}$ sufficiently close to $f''(\\mathbf{p})$.",hu:"A $\\mathbf{p}^{(0)}$-nek kellően közel kell lennie a $\\mathbf{p}$-hez, a $\\mathbf{A}^{(0)}$-nek pedig elég közel kell lennie a $f''(\\mathbf{p})$-hez."}},{q:{en:"Cloze: The matrix $\\mathbf{M}^{(k+1)}$ in the BFGS derivation is proven to be _____ if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ holds.",hu:"Bezárás: A BFGS levezetésben a $\\mathbf{M}^{(k+1)}$ mátrix bizonyítottan _____, ha a $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ feltétel teljesül."},a:{en:"Invertible",hu:"Megfordítható"}},{q:{en:"True or False: The PSB update formula generates a symmetric matrix even if the initial matrix $\\mathbf{A}^{(k)}$ was not symmetric.",hu:"Igaz vagy hamis: A PSB frissítési képlete akkor is szimmetrikus mátrixot hoz létre, ha a kezdeti $\\mathbf{A}^{(k)}$ mátrix nem volt szimmetrikus."},a:{en:"False (The derivation assumes $\\mathbf{A}^{(k)}$ is symmetric to produce a symmetric $\\mathbf{A}^{(k+1)}$).",hu:"Hamis (A levezetés feltételezi, hogy a $\\mathbf{A}^{(k)}$ szimmetrikus, hogy szimmetrikus $\\mathbf{A}^{(k+1)}$-t hozzon létre)."}},{q:{en:"In the context of the BFGS inverse update, what does the matrix $\\mathbf{B}^{(k)}$ represent?",hu:"A BFGS inverz frissítésével összefüggésben mit jelent a $\\mathbf{B}^{(k)}$ mátrix?"},a:{en:"The approximation of the inverse Hessian, $(\\mathbf{A}^{(k)})^{-1}$.",hu:"Az inverz hesseni, $(\\mathbf{A}^{(k)})^{-1}$ közelítése."}},{q:{en:"The variable $\\alpha^2$ in the BFGS derivation is defined as the ratio of which two scalar products?",hu:"A BFGS deriválásban szereplő $\\alpha^2$ változó melyik két skaláris szorzat aránya?"},a:{en:"$\\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}$",hu:"$\\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}$"}},{q:{en:"Which update formula was historically established first: BFGS or DFP?",hu:"Melyik frissítési képlet alakult ki először: a BFGS vagy a DFP?"},a:{en:"DFP (Davidon 1959, Fletcher and Powell 1963; BFGS was 1970).",hu:"DFP (Davidon 1959, Fletcher és Powell 1963; BFGS 1970 volt)."}},{q:{en:"How many function evaluations are needed for the gradient numerical approximation $v_i^{(k)}$ alone?",hu:"Hány függvényértékelésre van szükség önmagában a $v_i^{(k)}$ gradiens numerikus közelítéshez?"},a:{en:"$n$ evaluations (plus one at the base point).",hu:"$n$ értékelések (plusz egy az alapponton)."}},{q:{en:"What is the primary motivation for the 'Correction Iteration' that leads to the PSB update?",hu:"Mi az elsődleges motivációja a PSB frissítéséhez vezető „Javítási iterációnak”?"},a:{en:"To find a matrix that is both symmetric and satisfies the secant equation.",hu:"Olyan mátrixot találni, amely szimmetrikus és kielégíti a szekáns egyenletet."}},{q:{en:"Does the BFGS update require the matrix $\\mathbf{M}^{(k)}$ to be lower triangular?",hu:"A BFGS frissítés megköveteli, hogy a $\\mathbf{M}^{(k)}$ mátrix alsó háromszög alakú legyen?"},a:{en:"No, it only requires $\\mathbf{M}^{(k)}$ to be invertible.",hu:"Nem, csak az szükséges, hogy a $\\mathbf{M}^{(k)}$ megfordítható legyen."}},{q:{en:"In the example tables, what does the column labeled $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ represent?",hu:"Mit jelent a példatáblázatokban a $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ feliratú oszlop?"},a:{en:"The ratio of consecutive errors, used to observe the convergence rate.",hu:"Az egymást követő hibák aránya a konvergencia ráta megfigyelésére."}},{q:{en:"Concept: Secant Equation consistency",hu:"Koncepció: Secant egyenlet konzisztencia"},a:{en:"If $\\mathbf{A}^{(k+1)}$ satisfies the secant equation, then $\\mathbf{s}^{(k)}$ is an eigenvector of $(\\mathbf{A}^{(k+1)})^{-1} \\mathbf{A}^{(k+1)}$ with eigenvalue 1.",hu:"Ha a $\\mathbf{A}^{(k+1)}$ teljesíti a szekáns egyenletet, akkor a $\\mathbf{s}^{(k)}$ a $(\\mathbf{A}^{(k+1)})^{-1} \\mathbf{A}^{(k+1)}$ 1 sajátértékű sajátvektora."}},{q:{en:"Formula: The value $\\mathbf{v}^{(k)}$ used to construct the BFGS update $\\mathbf{M}^{(k+1)}$",hu:"Képlet: A $\\mathbf{v}^{(k)}$ érték, amelyet a BFGS $\\mathbf{M}^{(k+1)}$ frissítés összeállításához használt"},a:{en:"$\\mathbf{v}^{(k)} = (\\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}})^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}$",hu:"$\\mathbf{v}^{(k)} = (\\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}})^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}$"}}]};function Ie({deck:e}){const{t:n,lang:i}=_(),a=Ne[e]??[],[s,r]=u.useState(null);return a.length?t.jsxs("div",{className:"deck",children:[t.jsx("h3",{children:n({en:"Glossary",hu:"Fogalomtár"})}),t.jsx("div",{className:"deck-list",children:a.map((o,m)=>{const l=s===m;return t.jsxs("button",{className:"deck-item",onClick:()=>r(l?null:m),children:[t.jsxs("div",{className:"deck-item__head",children:[t.jsx("strong",{children:t.jsx(ae,{markdown:o.term[i]})}),t.jsx("span",{children:l?"−":"+"})]}),l&&t.jsx("div",{className:"deck-item__body",children:t.jsx(ae,{markdown:o.def[i]})})]},m)})})]}):null}const re=e=>Array.from({length:e},(n,i)=>i);function Fe(e){const n=re(e);for(let i=n.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[n[i],n[a]]=[n[a],n[i]]}return n}function Pe({deck:e}){const{t:n,lang:i}=_(),a=Se[e]??[],[s,r]=u.useState(()=>re(a.length)),[o,m]=u.useState(0),[l,h]=u.useState(!1),d=u.useMemo(()=>a[s[o]],[a,s,o]),f=b=>typeof b=="string"?b:b[i];if(!a.length)return null;const p=b=>{h(!1),m(x=>(x+b+a.length)%a.length)};return t.jsxs("div",{className:"deck",children:[t.jsxs("div",{className:"deck__bar",children:[t.jsx("h3",{children:n({en:"Flashcards",hu:"Tanulókártyák"})}),t.jsxs("div",{className:"deck__ctrls",children:[t.jsxs("span",{className:"deck__count",children:[o+1," / ",a.length]}),t.jsx("button",{className:"btn",onClick:()=>{r(Fe(a.length)),m(0),h(!1)},children:n({en:"🔀 Shuffle",hu:"🔀 Keverés"})}),t.jsx("button",{className:"btn",onClick:()=>{r(re(a.length)),m(0),h(!1)},children:n({en:"Reset",hu:"Eredeti"})})]})]}),t.jsxs("button",{className:"deck-card",onClick:()=>h(b=>!b),children:[t.jsx("div",{className:"deck-card__tag",children:n(l?{en:"Answer",hu:"Válasz"}:{en:"Question",hu:"Kérdés"})}),t.jsx(ae,{markdown:f(l?d.a:d.q)})]}),t.jsxs("div",{className:"deck__nav",children:[t.jsx("button",{className:"btn",onClick:()=>p(-1),children:n({en:"‹ Prev",hu:"‹ Előző"})}),t.jsx("button",{className:"btn btn--primary",onClick:()=>h(b=>!b),children:n(l?{en:"Show question",hu:"Kérdés"}:{en:"Show answer",hu:"Válasz"})}),t.jsx("button",{className:"btn",onClick:()=>p(1),children:n({en:"Next ›",hu:"Következő ›"})})]})]})}const Be=`## 8.1. Review of Calculus

**Theorem 8.1.** *Let $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\\mathbf{a} \\in \\mathbb{R}^n$, then $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ holds for all $i = 1, \\ldots, n$.*

*If $f \\in C^2$ and $f'(\\mathbf{a}) = \\mathbf{0}$ for some $\\mathbf{a} \\in \\mathbb{R}^n$, moreover, the Hessian matrix $f''(\\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\\mathbf{a}$.*

For two-variable functions we have the following special case of the previous result.

**Theorem 8.2.** *Let $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*holds.*

*On the other hand, if relation (8.1) holds at a point $(a, b)$, and*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0,$$

*then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*
`,De=`## 8.1. Analízis előismeretek

**8.1. tétel.** *Legyen $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ parciálisan differenciálható minden változója szerint. Ekkor ha $f$-nek létezik lokális szélsőértéke az $\\mathbf{a}$ pontban, akkor $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ teljesül minden $i = 1, \\ldots, n$-re.*

*Ha $f \\in C^2$, és valamely $\\mathbf{a}$ pontban $f'(\\mathbf{a}) = \\mathbf{0}$, továbbá az $f''(\\mathbf{a})$ Hesse-mátrix pozitív (negatív) definit, akkor $f$-nek lokális minimuma (maximuma) van $\\mathbf{a}$-ban.*

Kétváltozós függvényekre az előbbi tétel speciális esetén kapjuk:

**8.2. tétel.** *Legyen $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Ekkor ha $f$-nek létezik lokális szélsőértéke az $(a, b)$ pontban, akkor*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*teljesül.*

*Fordítva, ha valamely $(a, b)$-re (8.1) teljesül, továbbá*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0$$

*akkor $f$-nek létezik lokális szélsőértéke $(a, b)$-ben, mégpedig lokális maximuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$ ill. lokális minimuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. Ha $D(a, b) < 0$, akkor $f$-nek nincs szélsőértéke $(a, b)$-ben.*
`,Ve=`## 8.2. Golden Section Search Method

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

   <details class="reveal-solution"><summary>Show solution</summary>

   **(a) $f(x) = x^3 - 3x + 1$ on $[-1, 2]$.** First find the true minimum: $f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$, and $f''(x) = 6x$, so $f''(1) = 6 > 0$ gives a minimum at $x = 1$ with $f(1) = -1$. Golden section uses $r = (\\sqrt5 - 1)/2 \\approx 0.618034$. Starting from $a = -1,\\ b = 2$: $x = -1 + 0.618(3) = 0.854$, $y = -1 + 0.382(3) = 0.146$, with $f(0.854) = -0.944$, $f(0.146) = 0.562$. Since $f(x) < f(y)$ the minimum is in $[y, b] = [0.146, 2]$; set $a = 0.146$ and reuse $x$ as the new $y$. Continue until the interval is below tolerance. After about 15 iterations $x \\approx 1.000$.

   **(b) $f(x) = |\\cos x|$ on $[0, 2]$.** This function is NOT unimodal — it has multiple minima ($\\cos x = 0$ at $x = \\pi/2 \\approx 1.57$, where $|\\cos x|$ attains its minimum value $0$). Golden section may converge to a local minimum depending on the initial interval.

   **(c) $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$.** $f'(x) = -10e^{-x} + 10xe^{-x} = 10e^{-x}(x - 1) = 0 \\Rightarrow x = 1$, and $f''(1) = 10e^{-1} > 0$ gives a minimum at $x = 1$ with $f(1) = 1 - 10/e \\approx -2.679$. Golden section converges to $x = 1$.

   **(d) $f(x) = \\cos(x^2 - x)$ on $[1, 3]$.** $f'(x) = -\\sin(x^2 - x)(2x - 1) = 0$ when $\\sin(x^2 - x) = 0$ or $2x - 1 = 0$, i.e. $x^2 - x = n\\pi$. There are multiple critical points in $[1, 3]$, so the function is not unimodal.

   </details>

2. Apply the golden section search method for the function $f(x) = -1/x^2$ on the interval $[-1, 1]$. What do you observe?

   <details class="reveal-solution"><summary>Show solution</summary>

   This function is (1) not defined at $x = 0$, (2) not continuous on $[-1, 1]$, and (3) not unimodal (it tends to $-\\infty$ as $x \\to 0$). Golden section search will fail or produce meaningless results: it may encounter division by zero, converge to a boundary instead of a minimum, or give different answers depending on the initial points. Lesson: always verify the assumptions (continuity, unimodality) before applying an optimization method.

   </details>

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

   <details class="reveal-solution"><summary>Show solution</summary>

   After selecting $[a', b'] = [a, x]$ we have $a' = a$ and $b' = x = a + r(b - a)$. The new points are $x' = a' + r(b' - a') = a + r(x - a) = a + r^2(b - a)$ and $y' = a + (1-r)r(b - a)$. We want $x' = y$ where $y = a + (1-r)(b - a)$, i.e. $a + r^2(b - a) = a + (1-r)(b - a)$, hence $r^2 = 1 - r$, that is $r^2 + r - 1 = 0$. Therefore $x' = y$ exactly when $r$ is the golden ratio. $\\square$

   </details>

4. Prove Theorem 8.4.

   <details class="reveal-solution"><summary>Show solution</summary>

   **Theorem 8.4:** Golden section search converges to the minimum of a unimodal $f \\in C[a,b]$. Let $[a_k, b_k]$ be the interval after $k$ steps. Key properties: (1) $[a_{k+1}, b_{k+1}] \\subset [a_k, b_k]$ (nested intervals); (2) $b_k - a_k = r^k(b - a) \\to 0$ as $k \\to \\infty$; (3) the minimum point $p \\in [a_k, b_k]$ for all $k$ (by unimodality). By Cantor's Intersection Theorem there is a unique $p^*$ with $a_k \\to p^*$ and $b_k \\to p^*$. Since $p \\in [a_k, b_k]$ for all $k$, $|p - p^*| \\le b_k - a_k \\to 0$, so $p = p^*$. Hence the method converges to the minimum point $p$. $\\square$

   </details>

5. Check formula (8.4).

   <details class="reveal-solution"><summary>Show solution</summary>

   The formula is $n \\ge \\log(\\varepsilon/(b-a)) / \\log(r)$. After $n$ steps the interval length is $(b-a)r^n$. We require $(b-a)r^n \\le \\varepsilon$, i.e. $r^n \\le \\varepsilon/(b-a)$. Taking logarithms, $n \\log(r) \\le \\log(\\varepsilon/(b-a))$. Since $\\log(r) < 0$ (because $r < 1$), dividing flips the inequality to give $n \\ge \\log(\\varepsilon/(b-a)) / \\log(r)$. $\\square$

   </details>
`,Ee=`## 8.2. Aranymetszés szerinti keresés módszere

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a) $f(x) = x^3 - 3x + 1$ on $[-1, 2]$.** First find the true minimum: $f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$, and $f''(x) = 6x$, so $f''(1) = 6 > 0$ gives a minimum at $x = 1$ with $f(1) = -1$. Golden section uses $r = (\\sqrt5 - 1)/2 \\approx 0.618034$. Starting from $a = -1,\\ b = 2$: $x = -1 + 0.618(3) = 0.854$, $y = -1 + 0.382(3) = 0.146$, with $f(0.854) = -0.944$, $f(0.146) = 0.562$. Since $f(x) < f(y)$ the minimum is in $[y, b] = [0.146, 2]$; set $a = 0.146$ and reuse $x$ as the new $y$. Continue until the interval is below tolerance. After about 15 iterations $x \\approx 1.000$.

   **(b) $f(x) = |\\cos x|$ on $[0, 2]$.** This function is NOT unimodal — it has multiple minima ($\\cos x = 0$ at $x = \\pi/2 \\approx 1.57$, where $|\\cos x|$ attains its minimum value $0$). Golden section may converge to a local minimum depending on the initial interval.

   **(c) $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$.** $f'(x) = -10e^{-x} + 10xe^{-x} = 10e^{-x}(x - 1) = 0 \\Rightarrow x = 1$, and $f''(1) = 10e^{-1} > 0$ gives a minimum at $x = 1$ with $f(1) = 1 - 10/e \\approx -2.679$. Golden section converges to $x = 1$.

   **(d) $f(x) = \\cos(x^2 - x)$ on $[1, 3]$.** $f'(x) = -\\sin(x^2 - x)(2x - 1) = 0$ when $\\sin(x^2 - x) = 0$ or $2x - 1 = 0$, i.e. $x^2 - x = n\\pi$. There are multiple critical points in $[1, 3]$, so the function is not unimodal.

   </details>

2. Alkalmazza az aranymetszés szerinti keresés módszerét az $f(x) = -1/x^2$ függvényre a $[-1, 1]$ intervallumon! Mit tapasztal?

   <details class="reveal-solution"><summary>Megoldás</summary>

   This function is (1) not defined at $x = 0$, (2) not continuous on $[-1, 1]$, and (3) not unimodal (it tends to $-\\infty$ as $x \\to 0$). Golden section search will fail or produce meaningless results: it may encounter division by zero, converge to a boundary instead of a minimum, or give different answers depending on the initial points. Lesson: always verify the assumptions (continuity, unimodality) before applying an optimization method.

   </details>

3. Igazolja, hogy ha $[a', b'] = [a, x]$ választáskor az $x' = y$ egyenlet akkor teljesül, ha $r$ megoldása a (8.3) egyenletnek!

   <details class="reveal-solution"><summary>Megoldás</summary>

   After selecting $[a', b'] = [a, x]$ we have $a' = a$ and $b' = x = a + r(b - a)$. The new points are $x' = a' + r(b' - a') = a + r(x - a) = a + r^2(b - a)$ and $y' = a + (1-r)r(b - a)$. We want $x' = y$ where $y = a + (1-r)(b - a)$, i.e. $a + r^2(b - a) = a + (1-r)(b - a)$, hence $r^2 = 1 - r$, that is $r^2 + r - 1 = 0$. Therefore $x' = y$ exactly when $r$ is the golden ratio. $\\square$

   </details>

4. Bizonyítsa be a 8.4. tételt!

   <details class="reveal-solution"><summary>Megoldás</summary>

   **Theorem 8.4:** Golden section search converges to the minimum of a unimodal $f \\in C[a,b]$. Let $[a_k, b_k]$ be the interval after $k$ steps. Key properties: (1) $[a_{k+1}, b_{k+1}] \\subset [a_k, b_k]$ (nested intervals); (2) $b_k - a_k = r^k(b - a) \\to 0$ as $k \\to \\infty$; (3) the minimum point $p \\in [a_k, b_k]$ for all $k$ (by unimodality). By Cantor's Intersection Theorem there is a unique $p^*$ with $a_k \\to p^*$ and $b_k \\to p^*$. Since $p \\in [a_k, b_k]$ for all $k$, $|p - p^*| \\le b_k - a_k \\to 0$, so $p = p^*$. Hence the method converges to the minimum point $p$. $\\square$

   </details>

5. Ellenőrizze a (8.4) formulát!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The formula is $n \\ge \\log(\\varepsilon/(b-a)) / \\log(r)$. After $n$ steps the interval length is $(b-a)r^n$. We require $(b-a)r^n \\le \\varepsilon$, i.e. $r^n \\le \\varepsilon/(b-a)$. Taking logarithms, $n \\log(r) \\le \\log(\\varepsilon/(b-a))$. Since $\\log(r) < 0$ (because $r < 1$), dividing flips the inequality to give $n \\ge \\log(\\varepsilon/(b-a)) / \\log(r)$. $\\square$

   </details>
`,We=`## 8.3. Simplex Method

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

   <details class="reveal-solution"><summary>Show solution</summary>

   The procedure is the same for each function; here is a worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$ using the plain simplex method. Start with the triangle vertices $(-2,4)$, $(-1,4)$, $(-1.5,5)$. **Iteration 1:** $f(-2,4) = 34$, $f(-1,4) = 57$, $f(-1.5,5) = 72.56$, so the worst vertex is $(-1.5, 5)$. The centroid of the best two is $\\left(\\tfrac{-2-1}{2}, \\tfrac{4+4}{2}\\right) = (-1.5, 4)$. Reflect: $x_r = 2(-1.5,4) - (-1.5,5) = (-1.5, 3)$ with $f(-1.5,3) = 26.56 < 72.56$, so accept it. Continue until convergence. For each given $f$, decreasing $\\alpha$ toward $1$ and using $\\beta < 1$ recovers the classical simplex behaviour, while $\\alpha > 1$ speeds expansion.

   </details>

2. Apply the Nelder–Mead method with some parameter values $\\alpha > 1$ and $0 < \\beta < 1$ for the function $f(x) = x^2 - y^2$ using the initial simplex vertices $[0, 1]$, $[0, -1]$, $[1, 0]$. What do you observe? What do you observe if you use the simplex method for the same problem?

   <details class="reveal-solution"><summary>Show solution</summary>

   Typical parameter ranges are $\\alpha$ (expansion) $= 1.4$ to $2.0$, $\\beta$ (contraction) $= 0.5$ to $0.7$, and $\\gamma$ (shrink) $= 0.5$. A larger $\\alpha$ gives more aggressive expansion — faster but less stable; a smaller $\\beta$ gives more conservative contraction. A standard choice is $\\alpha = 1.4$, $\\beta = 0.7$, $\\gamma = 0.5$. For $f(x,y) = x^2 - y^2$ the function is unbounded below (a saddle), so both the Nelder–Mead and plain simplex methods march off to $-\\infty$ along the $y$-direction rather than locating a minimum — there is none to find.

   </details>

3. Formulate the simplex method for functions of one variable, and apply it for the problems given in Exercise 1 of Section 8.2.

4. Consider the following method for minimization of real functions of two variables: let $f$ be a function of two variables, $(p_1^{(0)}, p_2^{(0)})$ be a given initial point. Minimize the function of one variable $t \\mapsto f(p_1^{(0)} + t, p_2^{(0)})$ (for example, with the simplex method defined in the previous exercise). Let $t_1$ be the minimum point, and define $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Then minimize the function of single variable $t \\mapsto f(p_1^{(1)}, p_2^{(1)} + t)$. Let $t_2$ be its minimum point, and then we repeat the method above starting from the point $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$. So repeatedly, minimizing the function along with $x$- and $y$-axes we get the next element of the sequence. Apply this method for the functions defined in Exercise 1. Compare the speed of the convergence with that of the Nelder–Mead method.
`,Re=`## 8.3. Szimplex módszer

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   The procedure is the same for each function; here is a worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$ using the plain simplex method. Start with the triangle vertices $(-2,4)$, $(-1,4)$, $(-1.5,5)$. **Iteration 1:** $f(-2,4) = 34$, $f(-1,4) = 57$, $f(-1.5,5) = 72.56$, so the worst vertex is $(-1.5, 5)$. The centroid of the best two is $\\left(\\tfrac{-2-1}{2}, \\tfrac{4+4}{2}\\right) = (-1.5, 4)$. Reflect: $x_r = 2(-1.5,4) - (-1.5,5) = (-1.5, 3)$ with $f(-1.5,3) = 26.56 < 72.56$, so accept it. Continue until convergence. For each given $f$, decreasing $\\alpha$ toward $1$ and using $\\beta < 1$ recovers the classical simplex behaviour, while $\\alpha > 1$ speeds expansion.

   </details>

2. Alkalmazza a Nelder–Mead-módszert tetszőleges $\\alpha > 1$ és $0 < \\beta < 1$ paraméter értékeket használva az $f(x) = x^2 - y^2$ függvényre és a $[0, 1]$, $[0, -1]$, $[1, 0]$ kezdeti pontokra! Mit tapasztal? Mit tapasztal, ha ugyanerre a függvényre és pontokra a szimplex módszert alkalmazza?

   <details class="reveal-solution"><summary>Megoldás</summary>

   Typical parameter ranges are $\\alpha$ (expansion) $= 1.4$ to $2.0$, $\\beta$ (contraction) $= 0.5$ to $0.7$, and $\\gamma$ (shrink) $= 0.5$. A larger $\\alpha$ gives more aggressive expansion — faster but less stable; a smaller $\\beta$ gives more conservative contraction. A standard choice is $\\alpha = 1.4$, $\\beta = 0.7$, $\\gamma = 0.5$. For $f(x,y) = x^2 - y^2$ the function is unbounded below (a saddle), so both the Nelder–Mead and plain simplex methods march off to $-\\infty$ along the $y$-direction rather than locating a minimum — there is none to find.

   </details>

3. Fogalmazza meg a szimplex módszert egyváltozós függvények minimumhelyének meghatározására, és alkalmazza a 8.2. szakasz 1. feladatában szereplő függvényekre!

4. Tekintsük a következő, deriváltat nem használó módszert kétváltozós függvények minimalizálására: legyen $f$ egy kétváltozós függvény, $(p_1^{(0)}, p_2^{(0)})$ egy adott kezdeti pont. Minimalizáljuk a $t \\mapsto f(p_1^{(0)} + t, p_2^{(0)})$ egyváltozós függvényt (például szimplex módszerrel, lásd az előző példát). Legyen $t_1$ a minimumhely. Ekkor jelölje $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Ezután minimalizáljuk a $t \\mapsto f(p_1^{(1)}, p_2^{(1)} + t)$ egyváltozós függvényt. A kapott $t_2$ minimumhelyhez tartozó $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$ pontból megismételjük az eljárást. Így felváltva az $x$- illetve $y$-tengely irányában egydimenziós minimumkeresési feladatokat megoldva kapjuk a sorozat következő pontját. Alkalmazza ezt a módszert az 1. feladatban felsorolt függvényekre! Hasonlítsa össze a kapott sorozat konvergenciájának gyorsaságát a Nelder–Mead-módszer gyorsaságával!
`,Ge=`## 8.4. Gradient Method

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

   <details class="reveal-solution"><summary>Show solution</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\\nabla f = \\big(4x(x^2-2y) + 4(x-1),\\ -4(x^2-2y)\\big)$. At $(2,2)$ this is $\\nabla f(2,2) = (4, 0)$. One iteration gives $\\mathbf{p}^{(1)} = (2,2) - \\alpha(4, 0) = (2-4\\alpha,\\ 2)$. For the optimal gradient method choose $\\alpha$ to minimise $\\phi(\\alpha) = f(2-4\\alpha, 2) = ((2-4\\alpha)^2 - 4)^2 + 2(2-4\\alpha-1)^2$; set $\\phi'(\\alpha) = 0$ and solve for $\\alpha$. With the constant step $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ the move has fixed length $h$ in the steepest-descent direction. The same recipe applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Repeat the previous problem using the scale $\\alpha_k = h$ with some $h > 0$.

   <details class="reveal-solution"><summary>Show solution</summary>

   For a quadratic model $f(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ the gradient is $\\nabla f(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and the gradient iteration is $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k(A\\mathbf{p}^{(k)} - \\mathbf{b})$. With a fixed scale $\\alpha_k = h$ the step length is no longer normalised, so convergence depends on $h$ relative to the eigenvalues of $A$: too large an $h$ overshoots and may diverge, while a small $h$ converges slowly. The optimal step is $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}}$ where $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b}$ is the residual.

   </details>

3. Compute the derivative of the function $\\phi_k$ defined by (8.6). Using the value of the derivative at $t = \\alpha_k$ show that the vectors $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)}$ and $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$ are orthogonal.

   <details class="reveal-solution"><summary>Show solution</summary>

   By definition $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t\\,\\nabla f(\\mathbf{p}^{(k)}))$, so by the chain rule $\\phi_k'(t) = -\\nabla f(\\mathbf{p}^{(k)} - t\\,\\nabla f(\\mathbf{p}^{(k)}))^T \\nabla f(\\mathbf{p}^{(k)})$. The optimal step $\\alpha_k$ satisfies $\\phi_k'(\\alpha_k) = 0$, i.e. $\\nabla f(\\mathbf{p}^{(k+1)})^T \\nabla f(\\mathbf{p}^{(k)}) = 0$. Since $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)} = -\\alpha_k \\nabla f(\\mathbf{p}^{(k)})$ and $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)} = -\\alpha_{k+1}\\nabla f(\\mathbf{p}^{(k+1)})$, the two consecutive steps are scalar multiples of orthogonal gradients and are therefore orthogonal. For a quadratic with condition number $\\kappa$ the resulting convergence is linear with $\\dfrac{f(\\mathbf{p}^{(k+1)}) - f(\\mathbf{p}^*)}{f(\\mathbf{p}^{(k)}) - f(\\mathbf{p}^*)} \\le \\left(\\dfrac{\\kappa - 1}{\\kappa + 1}\\right)^2$, so a large $\\kappa$ (e.g. $\\kappa = 100 \\Rightarrow$ rate $\\approx 0.96$) gives slow zig-zagging convergence, whereas $\\kappa = 10$ gives rate $\\approx 0.67$.

   </details>
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

   <details class="reveal-solution"><summary>Megoldás</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\\nabla f = \\big(4x(x^2-2y) + 4(x-1),\\ -4(x^2-2y)\\big)$. At $(2,2)$ this is $\\nabla f(2,2) = (4, 0)$. One iteration gives $\\mathbf{p}^{(1)} = (2,2) - \\alpha(4, 0) = (2-4\\alpha,\\ 2)$. For the optimal gradient method choose $\\alpha$ to minimise $\\phi(\\alpha) = f(2-4\\alpha, 2) = ((2-4\\alpha)^2 - 4)^2 + 2(2-4\\alpha-1)^2$; set $\\phi'(\\alpha) = 0$ and solve for $\\alpha$. With the constant step $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ the move has fixed length $h$ in the steepest-descent direction. The same recipe applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Ismételje meg az előző feladatot az $\\alpha_k = h$ lépésközt használva!

   <details class="reveal-solution"><summary>Megoldás</summary>

   For a quadratic model $f(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ the gradient is $\\nabla f(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and the gradient iteration is $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k(A\\mathbf{p}^{(k)} - \\mathbf{b})$. With a fixed scale $\\alpha_k = h$ the step length is no longer normalised, so convergence depends on $h$ relative to the eigenvalues of $A$: too large an $h$ overshoots and may diverge, while a small $h$ converges slowly. The optimal step is $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}}$ where $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b}$ is the residual.

   </details>

3. Számítsa ki a (8.6) képlettel definiált $\\phi_k$ függvény deriváltját! A derivált $t = \\alpha_k$ pontbeli értékéből vezesse le, hogy a $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)}$ és $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$ vektorok merőlegesek egymásra! Magyarázza meg, hogy a numerikus módszerrel generált 8.7. ábrán a jobb oldali sorozat első és második lépése miért nem merőleges egymásra!

   <details class="reveal-solution"><summary>Megoldás</summary>

   By definition $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t\\,\\nabla f(\\mathbf{p}^{(k)}))$, so by the chain rule $\\phi_k'(t) = -\\nabla f(\\mathbf{p}^{(k)} - t\\,\\nabla f(\\mathbf{p}^{(k)}))^T \\nabla f(\\mathbf{p}^{(k)})$. The optimal step $\\alpha_k$ satisfies $\\phi_k'(\\alpha_k) = 0$, i.e. $\\nabla f(\\mathbf{p}^{(k+1)})^T \\nabla f(\\mathbf{p}^{(k)}) = 0$. Since $\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)} = -\\alpha_k \\nabla f(\\mathbf{p}^{(k)})$ and $\\mathbf{p}^{(k+2)} - \\mathbf{p}^{(k+1)} = -\\alpha_{k+1}\\nabla f(\\mathbf{p}^{(k+1)})$, the two consecutive steps are scalar multiples of orthogonal gradients and are therefore orthogonal. For a quadratic with condition number $\\kappa$ the resulting convergence is linear with $\\dfrac{f(\\mathbf{p}^{(k+1)}) - f(\\mathbf{p}^*)}{f(\\mathbf{p}^{(k)}) - f(\\mathbf{p}^*)} \\le \\left(\\dfrac{\\kappa - 1}{\\kappa + 1}\\right)^2$, so a large $\\kappa$ (e.g. $\\kappa = 100 \\Rightarrow$ rate $\\approx 0.96$) gives slow zig-zagging convergence, whereas $\\kappa = 10$ gives rate $\\approx 0.67$.

   </details>
`,Le=`## 8.5. Solving Linear Systems with Gradient Method

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

   <details class="reveal-solution"><summary>Show solution</summary>

   Collect the quadratic coefficients into a symmetric matrix $A$ with $a_{ij} = \\tilde a_{ij} + \\tilde a_{ji}$ (so the off-diagonal terms are split symmetrically), set $\\mathbf{b} = -\\tilde{\\mathbf{b}}$, and keep the constant $c$. Then $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$, which is exactly the form (8.8). In matrix notation the gradient is $g'(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and the Hessian is the constant matrix $g''(\\mathbf{x}) = A$.

   </details>

2. Prove Corollary 8.11.

   <details class="reveal-solution"><summary>Show solution</summary>

   For the quadratic $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ with $A$ symmetric positive definite, $g'(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b} = 0$ has the unique solution $\\mathbf{x}^* = A^{-1}\\mathbf{b}$. Because $g''(\\mathbf{x}) = A$ is positive definite everywhere, $g$ is strictly convex, so this stationary point is the unique global minimiser. Thus minimising $g$ is equivalent to solving the linear system $A\\mathbf{x} = \\mathbf{b}$. $\\square$

   </details>

3. Check the derivation of formulas (8.11)-(8.13).

   <details class="reveal-solution"><summary>Show solution</summary>

   With residual $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b} = g'(\\mathbf{p}^{(k)})$, the steepest-descent line is $\\mathbf{p}^{(k)} - t\\,\\mathbf{r}^{(k)}$. Substituting into $g$ gives $\\phi(t) = \\tfrac12 (\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)})^T A(\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)}) - \\mathbf{b}^T(\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)}) + c$. Setting $\\phi'(t) = -\\mathbf{r}^{(k)T}(A\\mathbf{p}^{(k)} - \\mathbf{b}) + t\\,\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)} = 0$ yields the optimal step $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}}$, and the update is $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k\\mathbf{r}^{(k)}$, which is formulas (8.11)–(8.13).

   </details>

4. Apply the gradient method for finding the minimum point of the functions:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

   <details class="reveal-solution"><summary>Show solution</summary>

   **(a)** $\\nabla f = (4x - 12,\\ 6y + 30)$. Writing $f = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}$ with $A = \\left(\\begin{smallmatrix} 4 & 0 \\\\ 0 & 6 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (12, -30)^T$, the minimum solves $A\\mathbf{x} = \\mathbf{b}$, giving $(x, y) = (3, -5)$. The gradient iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k(A\\mathbf{p}^{(k)} - \\mathbf{b})$ with the optimal $\\alpha_k = \\mathbf{r}^{(k)T}\\mathbf{r}^{(k)} / \\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}$ converges to $(3, -5)$.

   **(b)** $\\nabla f = (4x - 4y,\\ -4x + 6y - 2)$, i.e. $A = \\left(\\begin{smallmatrix} 4 & -4 \\\\ -4 & 6 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (0, 2)^T$. Solving $A\\mathbf{x} = \\mathbf{b}$ gives $(x, y) = (1, 1)$. Run the same optimal gradient iteration to converge to $(1, 1)$.

   </details>

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

   <details class="reveal-solution"><summary>Show solution</summary>

   Solving $A\\mathbf{x} = \\mathbf{b}$ by minimising $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}$ is equivalent to the gradient method with residual $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b}$, step $\\alpha_k = \\mathbf{r}^{(k)T}\\mathbf{r}^{(k)} / \\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}$, and update $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k\\mathbf{r}^{(k)}$. Both matrices are symmetric positive definite, so the iteration converges to the unique solution. **(a)** $A = \\left(\\begin{smallmatrix} 4 & -3 \\\\ -3 & 3 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (4, 3)^T$; solving gives $\\mathbf{x} = (7, 8)^T$. **(b)** $A = \\left(\\begin{smallmatrix} 6 & 3 & -2 \\\\ 3 & 5 & -1 \\\\ -2 & -1 & 3 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (6, -4, -2)^T$; solving gives $\\mathbf{x} = (2, -2, 0)^T$. Run the gradient iteration from any starting point until $\\|\\mathbf{r}^{(k)}\\|$ is below tolerance.

   </details>

6. Let $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$. Show that the optimal gradient method started from the initial point $\\mathbf{p}^{(0)} = (9, 1)^T$ generates the sequence

   $$\\mathbf{p}^{(k)} = \\begin{pmatrix} 9 \\\\ (-1)^k \\end{pmatrix} 0.8^k.$$

   What is the asymptotic error constant of this sequence? Give a function and initial value such that the asymptotic error constant of the sequence generated by the optimal gradient method is a predefined constant $0 < \\alpha < 1$.

   <details class="reveal-solution"><summary>Show solution</summary>

   Here $A = \\left(\\begin{smallmatrix} 1 & 0 \\\\ 0 & 9 \\end{smallmatrix}\\right)$, $\\mathbf{b} = 0$, so $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} = (p_1^{(k)},\\ 9p_2^{(k)})$. For $\\mathbf{p}^{(k)} = 0.8^k(9,\\ (-1)^k)$ one gets $\\mathbf{r}^{(k)} = 0.8^k(9,\\ 9(-1)^k)$, and the optimal step is $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}} = \\dfrac{81 + 81}{81 + 729} = \\dfrac{162}{810} = 0.2$. Then $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - 0.2\\,\\mathbf{r}^{(k)} = 0.8^k(9 - 1.8\\cdot 9,\\ (-1)^k - 0.2\\cdot 9(-1)^k) = 0.8^{k+1}(9,\\ -(-1)^k)$, which is exactly $0.8^{k+1}(9,\\ (-1)^{k+1})$, confirming the formula. The error is $\\|\\mathbf{p}^{(k)}\\| \\propto 0.8^k$, so the asymptotic error constant is $0.8 = \\left(\\dfrac{\\kappa - 1}{\\kappa + 1}\\right) = \\dfrac{9 - 1}{9 + 1}$ with $\\kappa = 9$ the condition number. To make the constant a prescribed $0 < \\alpha < 1$, take $f(x,y) = \\tfrac12 x^2 + \\tfrac{\\lambda}{2} y^2$ with $\\lambda = \\dfrac{1+\\alpha}{1-\\alpha}$ (so $\\kappa = \\lambda$) and the analogous starting point $\\mathbf{p}^{(0)} = (\\lambda, 1)^T$.

   </details>
`,Ke=`## 8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   Collect the quadratic coefficients into a symmetric matrix $A$ with $a_{ij} = \\tilde a_{ij} + \\tilde a_{ji}$ (so the off-diagonal terms are split symmetrically), set $\\mathbf{b} = -\\tilde{\\mathbf{b}}$, and keep the constant $c$. Then $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$, which is exactly the form (8.8). In matrix notation the gradient is $g'(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and the Hessian is the constant matrix $g''(\\mathbf{x}) = A$.

   </details>

2. Igazolja a 8.11. következményt!

   <details class="reveal-solution"><summary>Megoldás</summary>

   For the quadratic $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ with $A$ symmetric positive definite, $g'(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b} = 0$ has the unique solution $\\mathbf{x}^* = A^{-1}\\mathbf{b}$. Because $g''(\\mathbf{x}) = A$ is positive definite everywhere, $g$ is strictly convex, so this stationary point is the unique global minimiser. Thus minimising $g$ is equivalent to solving the linear system $A\\mathbf{x} = \\mathbf{b}$. $\\square$

   </details>

3. Ellenőrizze a (8.11)-(8.13) képletek levezetését!

   <details class="reveal-solution"><summary>Megoldás</summary>

   With residual $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b} = g'(\\mathbf{p}^{(k)})$, the steepest-descent line is $\\mathbf{p}^{(k)} - t\\,\\mathbf{r}^{(k)}$. Substituting into $g$ gives $\\phi(t) = \\tfrac12 (\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)})^T A(\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)}) - \\mathbf{b}^T(\\mathbf{p}^{(k)} - t\\mathbf{r}^{(k)}) + c$. Setting $\\phi'(t) = -\\mathbf{r}^{(k)T}(A\\mathbf{p}^{(k)} - \\mathbf{b}) + t\\,\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)} = 0$ yields the optimal step $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}}$, and the update is $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k\\mathbf{r}^{(k)}$, which is formulas (8.11)–(8.13).

   </details>

4. Alkalmazza a gradiens módszert a következő kvadratikus függvények minimumhelyének meghatározására:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a)** $\\nabla f = (4x - 12,\\ 6y + 30)$. Writing $f = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}$ with $A = \\left(\\begin{smallmatrix} 4 & 0 \\\\ 0 & 6 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (12, -30)^T$, the minimum solves $A\\mathbf{x} = \\mathbf{b}$, giving $(x, y) = (3, -5)$. The gradient iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k(A\\mathbf{p}^{(k)} - \\mathbf{b})$ with the optimal $\\alpha_k = \\mathbf{r}^{(k)T}\\mathbf{r}^{(k)} / \\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}$ converges to $(3, -5)$.

   **(b)** $\\nabla f = (4x - 4y,\\ -4x + 6y - 2)$, i.e. $A = \\left(\\begin{smallmatrix} 4 & -4 \\\\ -4 & 6 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (0, 2)^T$. Solving $A\\mathbf{x} = \\mathbf{b}$ gives $(x, y) = (1, 1)$. Run the same optimal gradient iteration to converge to $(1, 1)$.

   </details>

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   Solving $A\\mathbf{x} = \\mathbf{b}$ by minimising $g(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}$ is equivalent to the gradient method with residual $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} - \\mathbf{b}$, step $\\alpha_k = \\mathbf{r}^{(k)T}\\mathbf{r}^{(k)} / \\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}$, and update $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k\\mathbf{r}^{(k)}$. Both matrices are symmetric positive definite, so the iteration converges to the unique solution. **(a)** $A = \\left(\\begin{smallmatrix} 4 & -3 \\\\ -3 & 3 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (4, 3)^T$; solving gives $\\mathbf{x} = (7, 8)^T$. **(b)** $A = \\left(\\begin{smallmatrix} 6 & 3 & -2 \\\\ 3 & 5 & -1 \\\\ -2 & -1 & 3 \\end{smallmatrix}\\right)$, $\\mathbf{b} = (6, -4, -2)^T$; solving gives $\\mathbf{x} = (2, -2, 0)^T$. Run the gradient iteration from any starting point until $\\|\\mathbf{r}^{(k)}\\|$ is below tolerance.

   </details>

6. Legyen $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$. Igazolja, hogy a gradiens módszert alkalmazva a $\\mathbf{p}^{(0)} = (9, 1)^T$ pontból indulva a

   $$\\mathbf{p}^{(k)} = \\begin{pmatrix} 9 \\\\ (-1)^k \\end{pmatrix} 0.8^k$$

   pontokat kapjuk! Mi a sorozat aszimptotikus hibakonstansa? Adjon meg egy olyan függvényt, ahol a gradiens módszer sorozatának aszimptotikus hibakonstansa egy előre megadott $0 < \\alpha < 1$ szám!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Here $A = \\left(\\begin{smallmatrix} 1 & 0 \\\\ 0 & 9 \\end{smallmatrix}\\right)$, $\\mathbf{b} = 0$, so $\\mathbf{r}^{(k)} = A\\mathbf{p}^{(k)} = (p_1^{(k)},\\ 9p_2^{(k)})$. For $\\mathbf{p}^{(k)} = 0.8^k(9,\\ (-1)^k)$ one gets $\\mathbf{r}^{(k)} = 0.8^k(9,\\ 9(-1)^k)$, and the optimal step is $\\alpha_k = \\dfrac{\\mathbf{r}^{(k)T}\\mathbf{r}^{(k)}}{\\mathbf{r}^{(k)T}A\\mathbf{r}^{(k)}} = \\dfrac{81 + 81}{81 + 729} = \\dfrac{162}{810} = 0.2$. Then $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - 0.2\\,\\mathbf{r}^{(k)} = 0.8^k(9 - 1.8\\cdot 9,\\ (-1)^k - 0.2\\cdot 9(-1)^k) = 0.8^{k+1}(9,\\ -(-1)^k)$, which is exactly $0.8^{k+1}(9,\\ (-1)^{k+1})$, confirming the formula. The error is $\\|\\mathbf{p}^{(k)}\\| \\propto 0.8^k$, so the asymptotic error constant is $0.8 = \\dfrac{9 - 1}{9 + 1}$ with $\\kappa = 9$ the condition number. To make the constant a prescribed $0 < \\alpha < 1$, take $f(x,y) = \\tfrac12 x^2 + \\tfrac{\\lambda}{2} y^2$ with $\\lambda = \\dfrac{1+\\alpha}{1-\\alpha}$ (so $\\kappa = \\lambda$) and the analogous starting point $\\mathbf{p}^{(0)} = (\\lambda, 1)^T$.

   </details>
`,Oe=`## 8.6. Newton's Method for Minimization

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

   <details class="reveal-solution"><summary>Show solution</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\\nabla f = \\big(4x(x^2-2y) + 4(x-1),\\ -4(x^2-2y)\\big)$ and the Hessian is $f'' = \\left(\\begin{smallmatrix} 12x^2 - 8y + 4 & -8x \\\\ -8x & 8 \\end{smallmatrix}\\right)$. At $(2,2)$: $\\nabla f(2,2) = (4, 0)$ and $f''(2,2) = \\left(\\begin{smallmatrix} 36 & -16 \\\\ -16 & 8 \\end{smallmatrix}\\right)$. The Newton step solves $f''(2,2)\\,\\mathbf{s} = -\\nabla f(2,2)$, i.e. $\\left(\\begin{smallmatrix} 36 & -16 \\\\ -16 & 8 \\end{smallmatrix}\\right)\\mathbf{s} = \\left(\\begin{smallmatrix} -4 \\\\ 0 \\end{smallmatrix}\\right)$, giving $\\mathbf{s} \\approx (-0.143, -0.286)$. Hence $\\mathbf{p}^{(1)} = (2,2) + (-0.143, -0.286) = (1.857, 1.714)$. The same procedure applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Show that for quadratic functions where the Hessian is positive definite, the Newton's method gives back the minimum point of the function exactly in one step.

   <details class="reveal-solution"><summary>Show solution</summary>

   Let $f(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ with $A$ positive definite. Then $\\nabla f(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and $f''(\\mathbf{x}) = A$ (constant). Starting from any $\\mathbf{p}^{(0)}$, the Newton step is $\\mathbf{p}^{(1)} = \\mathbf{p}^{(0)} - [f''(\\mathbf{p}^{(0)})]^{-1}\\nabla f(\\mathbf{p}^{(0)}) = \\mathbf{p}^{(0)} - A^{-1}(A\\mathbf{p}^{(0)} - \\mathbf{b}) = A^{-1}\\mathbf{b} = \\mathbf{p}^*$, the exact minimiser. So the method converges in exactly one step. $\\square$

   </details>

3. Show that if the conditions of Theorem 8.13 hold and $\\mathbf{p}^{(0)}$ is close enough to $\\mathbf{p}$, then the sequence (8.15) is defined for all $k$, i.e., $f''(\\mathbf{p}^{(k)})$ is invertible.

   <details class="reveal-solution"><summary>Show solution</summary>

   At the minimum $\\mathbf{p}$, $f''(\\mathbf{p})$ is positive definite, hence invertible, and by continuity of $f''$ there is a neighbourhood of $\\mathbf{p}$ in which $f''$ stays invertible (the set of invertible matrices is open, and $\\det f''(\\cdot)$ is continuous and nonzero at $\\mathbf{p}$). The local convergence argument (Theorem 8.13: Newton is a fixed-point iteration with $g'(\\mathbf{p}) = 0$, giving quadratic convergence) shows that if $\\mathbf{p}^{(0)}$ is close enough to $\\mathbf{p}$, every iterate $\\mathbf{p}^{(k)}$ stays in that neighbourhood. Therefore $f''(\\mathbf{p}^{(k)})$ is invertible for all $k$ and the sequence (8.15) is well defined. $\\square$

   </details>
`,Ue=`## 8.6. Newton-módszer

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\\nabla f = \\big(4x(x^2-2y) + 4(x-1),\\ -4(x^2-2y)\\big)$ and the Hessian is $f'' = \\left(\\begin{smallmatrix} 12x^2 - 8y + 4 & -8x \\\\ -8x & 8 \\end{smallmatrix}\\right)$. At $(2,2)$: $\\nabla f(2,2) = (4, 0)$ and $f''(2,2) = \\left(\\begin{smallmatrix} 36 & -16 \\\\ -16 & 8 \\end{smallmatrix}\\right)$. The Newton step solves $f''(2,2)\\,\\mathbf{s} = -\\nabla f(2,2)$, i.e. $\\left(\\begin{smallmatrix} 36 & -16 \\\\ -16 & 8 \\end{smallmatrix}\\right)\\mathbf{s} = \\left(\\begin{smallmatrix} -4 \\\\ 0 \\end{smallmatrix}\\right)$, giving $\\mathbf{s} \\approx (-0.143, -0.286)$. Hence $\\mathbf{p}^{(1)} = (2,2) + (-0.143, -0.286) = (1.857, 1.714)$. The same procedure applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Mutassa meg, hogy olyan kvadratikus függvényekre, melyeknek Hesse-mátrixa pozitív definit, a Newton-módszer egy lépésben a pontos minimumhelyet adja vissza!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Let $f(\\mathbf{x}) = \\tfrac12 \\mathbf{x}^T A\\mathbf{x} - \\mathbf{b}^T\\mathbf{x} + c$ with $A$ positive definite. Then $\\nabla f(\\mathbf{x}) = A\\mathbf{x} - \\mathbf{b}$ and $f''(\\mathbf{x}) = A$ (constant). Starting from any $\\mathbf{p}^{(0)}$, the Newton step is $\\mathbf{p}^{(1)} = \\mathbf{p}^{(0)} - [f''(\\mathbf{p}^{(0)})]^{-1}\\nabla f(\\mathbf{p}^{(0)}) = \\mathbf{p}^{(0)} - A^{-1}(A\\mathbf{p}^{(0)} - \\mathbf{b}) = A^{-1}\\mathbf{b} = \\mathbf{p}^*$, the exact minimiser. So the method converges in exactly one step. $\\square$

   </details>

3. Igazolja, hogy ha a 8.13. tétel feltételei teljesülnek, és a $\\mathbf{p}^{(0)}$ elegendően közel van $\\mathbf{p}$-hez, akkor a (8.15) sorozat minden $k$-ra definiálható, azaz $f''(\\mathbf{p}^{(k)})$ invertálható!

   <details class="reveal-solution"><summary>Megoldás</summary>

   At the minimum $\\mathbf{p}$, $f''(\\mathbf{p})$ is positive definite, hence invertible, and by continuity of $f''$ there is a neighbourhood of $\\mathbf{p}$ in which $f''$ stays invertible (the set of invertible matrices is open, and $\\det f''(\\cdot)$ is continuous and nonzero at $\\mathbf{p}$). The local convergence argument (Theorem 8.13: Newton is a fixed-point iteration with $g'(\\mathbf{p}) = 0$, giving quadratic convergence) shows that if $\\mathbf{p}^{(0)}$ is close enough to $\\mathbf{p}$, every iterate $\\mathbf{p}^{(k)}$ stays in that neighbourhood. Therefore $f''(\\mathbf{p}^{(k)})$ is invertible for all $k$ and the sequence (8.15) is well defined. $\\square$

   </details>
`,Qe=`## 8.7. Quasi-Newton Method for Minimization

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

   <details class="reveal-solution"><summary>Show solution</summary>

   Apply BFGS, DFP and PSB to the functions from the earlier sections. BFGS typically converges fastest: about 6–10 iterations for the 2D problems, with superlinear convergence, and it needs no explicit Hessian computation (the Hessian approximation is built from successive gradients via rank-2 updates). DFP and PSB also converge superlinearly but usually need a few more iterations on these problems.

   </details>

2. Let $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$. Define

   $$\\|\\mathbf{A}\\|_F := \\sqrt{\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij}^2},$$

   which is the so-called *Frobenius norm* of the matrix $\\mathbf{A}$. (This is not a matrix norm generated by a vector norm.) Prove that the unique solution of the minimization problem

   $$\\min\\{\\|\\mathbf{B} - \\mathbf{A}\\|_F : \\mathbf{B} \\in \\mathbb{R}^{n \\times n}, \\ \\mathbf{B} \\text{ symmetric}\\}$$

   is the matrix $\\mathbf{B} = \\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$.

   <details class="reveal-solution"><summary>Show solution</summary>

   We minimise $\\|\\mathbf{B} - \\mathbf{A}\\|_F^2 = \\sum_{i,j}(b_{ij} - a_{ij})^2$ over symmetric $\\mathbf{B}$, i.e. with $b_{ij} = b_{ji}$. For a pair $i < j$ the two terms involving $b_{ij}$ are $(b_{ij} - a_{ij})^2 + (b_{ji} - a_{ji})^2 = (b_{ij} - a_{ij})^2 + (b_{ij} - a_{ji})^2$. Minimising over $b_{ij}$: $\\frac{d}{db_{ij}} = 2(b_{ij} - a_{ij}) + 2(b_{ij} - a_{ji}) = 0$, so $2b_{ij} = a_{ij} + a_{ji}$, i.e. $b_{ij} = \\tfrac12(a_{ij} + a_{ji})$. For the diagonal ($i = j$) the term $(b_{ii} - a_{ii})^2$ is minimised by $b_{ii} = a_{ii}$. Hence $\\mathbf{B} = \\tfrac12(\\mathbf{A} + \\mathbf{A}^T)$ is the unique minimiser. $\\square$

   </details>

3. Show that the matrix defined by (8.26) is symmetric and it satisfies the secant equation $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$.

   <details class="reveal-solution"><summary>Show solution</summary>

   The PSB update is
   $$A^{(k+1)} = A^{(k)} + \\frac{(\\mathbf{y}^{(k)} - A^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - A^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - A^{(k)}\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T.$$
   **Symmetry:** $A^{(k)}$ is symmetric by induction; the second term has the form $(\\mathbf{u}\\mathbf{v}^T + \\mathbf{v}\\mathbf{u}^T)$ which is symmetric; the third term is a scalar times $\\mathbf{s}\\mathbf{s}^T$, also symmetric. **Secant equation:** multiplying $A^{(k+1)}$ by $\\mathbf{s}^{(k)}$ and using $\\|\\mathbf{s}^{(k)}\\|_2^2 = (\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}$, a direct (if lengthy) computation collapses the terms to give $A^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$. $\\square$

   </details>

4. Check the derivation of formula (8.32).

   <details class="reveal-solution"><summary>Show solution</summary>

   The BFGS formula to verify is
   $$A^{(k+1)} = A^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)}} - \\frac{A^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T A^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}}.$$
   Start from the factor update
   $$M^{(k+1)} = M^{(k)} + \\alpha\\frac{\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T M^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}} - \\alpha\\frac{A^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T M^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}},$$
   with $\\alpha = \\sqrt{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)} / (\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)}}$, and form $A^{(k+1)} = M^{(k+1)}(M^{(k+1)})^T$. Expanding and simplifying reproduces formula (8.32) above.

   </details>

5. Prove that the matrix $\\mathbf{M}^{(k+1)}$ is invertible if relation (8.27) holds.

   <details class="reveal-solution"><summary>Show solution</summary>

   Relation (8.27) is $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$. From (8.30),
   $$M^{(k+1)} = M^{(k)} + \\frac{(\\mathbf{y}^{(k)} - M^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2},$$
   a rank-1 update of $M^{(k)}$. By the Sherman–Morrison formula $M^{(k+1)}$ is invertible iff
   $$1 + \\frac{(\\mathbf{v}^{(k)})^T (M^{(k)})^{-1}(\\mathbf{y}^{(k)} - M^{(k)}\\mathbf{v}^{(k)})}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\neq 0,$$
   and simplifying this condition using $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$ shows it holds. Hence $M^{(k+1)}$ is invertible. $\\square$

   </details>

6. Show recursion (8.33).

   <details class="reveal-solution"><summary>Show solution</summary>

   Let $B^{(k)} = (A^{(k)})^{-1}$. Applying the Sherman–Morrison–Woodbury identity twice (once for each rank-1 update in the BFGS formula) to
   $$B^{(k+1)} = \\left(A^{(k)} + \\frac{\\mathbf{y}\\mathbf{y}^T}{\\mathbf{y}^T\\mathbf{s}} - \\frac{A\\mathbf{s}\\mathbf{s}^T A}{\\mathbf{s}^T A\\mathbf{s}}\\right)^{-1}$$
   gives, after algebra,
   $$B^{(k+1)} = B^{(k)} + \\left(1 + \\frac{(\\mathbf{y}^{(k)})^T B^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}\\right)\\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T B^{(k)} + B^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}},$$
   which is recursion (8.33). $\\square$

   </details>

7. Work out the details for the derivation of the DFP update.

   <details class="reveal-solution"><summary>Show solution</summary>

   Update the inverse approximation directly with the ansatz $B^{(k+1)} = B^{(k)} + \\Delta B$, requiring (1) the inverse secant equation $B^{(k+1)}\\mathbf{y}^{(k)} = \\mathbf{s}^{(k)}$, (2) $B^{(k+1)}$ symmetric, and (3) minimal change in a suitable norm. The unique solution is
   $$B^{(k+1)} = B^{(k)} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T\\mathbf{y}^{(k)}} - \\frac{B^{(k)}\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T B^{(k)}}{(\\mathbf{y}^{(k)})^T B^{(k)}\\mathbf{y}^{(k)}}.$$
   Inverting this gives $A^{(k+1)}$, i.e. the DFP formula (8.35).

   </details>

8. Prove recursion (8.36).

   <details class="reveal-solution"><summary>Show solution</summary>

   Recursion (8.36) is exactly the DFP update written for $B^{(k)} = (A^{(k)})^{-1}$:
   $$(A^{(k+1)})^{-1} = (A^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T\\mathbf{y}^{(k)}} - \\frac{(A^{(k)})^{-1}\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T(A^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T(A^{(k)})^{-1}\\mathbf{y}^{(k)}}.$$
   Direct verification shows this $B^{(k+1)}$ satisfies $B^{(k+1)}\\mathbf{y}^{(k)} = \\mathbf{s}^{(k)}$, is symmetric whenever $B^{(k)}$ is, and is positive definite provided $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$. $\\square$

   </details>

---

`,Je=`## 8.7. Kvázi-Newton módszerek

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

   <details class="reveal-solution"><summary>Megoldás</summary>

   Apply BFGS, DFP and PSB to the functions from the earlier sections. BFGS typically converges fastest: about 6–10 iterations for the 2D problems, with superlinear convergence, and it needs no explicit Hessian computation (the Hessian approximation is built from successive gradients via rank-2 updates). DFP and PSB also converge superlinearly but usually need a few more iterations on these problems.

   </details>

2. Ellenőrizze a (8.29) formula levezetését!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The BFGS update to verify is
   $$A^{(k+1)} = A^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)}} - \\frac{A^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T A^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}}.$$
   Start from the factor update
   $$M^{(k+1)} = M^{(k)} + \\alpha\\frac{\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T M^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}} - \\alpha\\frac{A^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T M^{(k)}}{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)}},$$
   with $\\alpha = \\sqrt{(\\mathbf{s}^{(k)})^T A^{(k)}\\mathbf{s}^{(k)} / (\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)}}$, and form $A^{(k+1)} = M^{(k+1)}(M^{(k+1)})^T$. Expanding and simplifying reproduces the BFGS update above.

   </details>

3. Igazolja, hogy $\\mathbf{M}^{(k+1)}$ invertálható, ha (8.24) teljesül!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The condition is $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$. The factor update has the rank-1 form
   $$M^{(k+1)} = M^{(k)} + \\frac{(\\mathbf{y}^{(k)} - M^{(k)}\\mathbf{v}^{(k)})(\\mathbf{v}^{(k)})^T}{\\|\\mathbf{v}^{(k)}\\|_2^2}.$$
   By the Sherman–Morrison formula $M^{(k+1)}$ is invertible iff
   $$1 + \\frac{(\\mathbf{v}^{(k)})^T (M^{(k)})^{-1}(\\mathbf{y}^{(k)} - M^{(k)}\\mathbf{v}^{(k)})}{\\|\\mathbf{v}^{(k)}\\|_2^2} \\neq 0,$$
   and simplifying this condition using $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$ shows it holds. Hence $M^{(k+1)}$ is invertible. $\\square$

   </details>

4. Igazolja a (8.30) rekurzív összefüggést!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Let $B^{(k)} = (A^{(k)})^{-1}$. Applying the Sherman–Morrison–Woodbury identity twice (once for each rank-1 update in the BFGS formula) to
   $$B^{(k+1)} = \\left(A^{(k)} + \\frac{\\mathbf{y}\\mathbf{y}^T}{\\mathbf{y}^T\\mathbf{s}} - \\frac{A\\mathbf{s}\\mathbf{s}^T A}{\\mathbf{s}^T A\\mathbf{s}}\\right)^{-1}$$
   gives, after algebra,
   $$B^{(k+1)} = B^{(k)} + \\left(1 + \\frac{(\\mathbf{y}^{(k)})^T B^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}\\right)\\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T B^{(k)} + B^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}.$$
   $\\square$

   </details>

5. Dolgozza ki a DFP-iteráció levezetésének részleteit!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Update the inverse approximation directly with the ansatz $B^{(k+1)} = B^{(k)} + \\Delta B$, requiring (1) the inverse secant equation $B^{(k+1)}\\mathbf{y}^{(k)} = \\mathbf{s}^{(k)}$, (2) $B^{(k+1)}$ symmetric, and (3) minimal change in a suitable norm. The unique solution is
   $$B^{(k+1)} = B^{(k)} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T\\mathbf{y}^{(k)}} - \\frac{B^{(k)}\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T B^{(k)}}{(\\mathbf{y}^{(k)})^T B^{(k)}\\mathbf{y}^{(k)}}.$$
   Inverting this gives $A^{(k+1)}$, i.e. the DFP update formula.

   </details>

6. Igazolja a (8.33) rekurzív összefüggést!

   <details class="reveal-solution"><summary>Megoldás</summary>

   This recursion is exactly the DFP update written for $B^{(k)} = (A^{(k)})^{-1}$:
   $$(A^{(k+1)})^{-1} = (A^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T\\mathbf{y}^{(k)}} - \\frac{(A^{(k)})^{-1}\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T(A^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T(A^{(k)})^{-1}\\mathbf{y}^{(k)}}.$$
   Direct verification shows this $B^{(k+1)}$ satisfies $B^{(k+1)}\\mathbf{y}^{(k)} = \\mathbf{s}^{(k)}$, is symmetric whenever $B^{(k)}$ is, and is positive definite provided $(\\mathbf{y}^{(k)})^T\\mathbf{s}^{(k)} > 0$. $\\square$

   </details>

---

`,Ye={calculus:{en:Be,hu:De},golden:{en:Ve,hu:Ee},simplex:{en:We,hu:Re},gradient:{en:Ge,hu:Ce},linsys:{en:Le,hu:Ke},newton:{en:Oe,hu:Ue},quasinewton:{en:Qe,hu:Je}};function Ze(e,n){var i;return((i=Ye[e])==null?void 0:i[n])??""}const Xe=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }

// BFGS quasi-Newton minimization with backtracking line search.
Vec bfgs(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;   // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d(n);                                                   // d = -H g
        for (int i = 0; i < n; ++i) { double s = 0; for (int j = 0; j < n; ++j) s += H[i][j] * g[j]; d[i] = -s; }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        double sy = dot(s, y);
        if (sy > 1e-12) {                                           // BFGS inverse update
            double rho = 1.0 / sy;
            Mat Hy(n, Vec(1));
            // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
            Mat A(n, Vec(n)), B(n, Vec(n));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) A[i][j] = (i == j ? 1.0 : 0.0) - rho * s[i] * y[j];
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) B[i][j] = (i == j ? 1.0 : 0.0) - rho * y[i] * s[j];
            Mat AH(n, Vec(n, 0));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) for (int l = 0; l < n; ++l) AH[i][j] += A[i][l] * H[l][j];
            Mat AHB(n, Vec(n, 0));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) for (int l = 0; l < n; ++l) AHB[i][j] += AH[i][l] * B[l][j];
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = AHB[i][j] + rho * s[i] * s[j];
            (void)Hy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = bfgs(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,et=`program bfgs_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = bfgs([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! BFGS quasi-Newton minimization with backtracking (Armijo) line search.
  function bfgs(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n)
    real(8) :: Hm(n,n), Im(n,n), A(n,n), B(n,n), Hnew(n,n)
    real(8) :: t, fx, gd, sy, rho
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       sy = dot_product(s, y)
       if (sy > 1d-12) then                  ! H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
          rho = 1d0/sy
          do i = 1, n
             do j = 1, n
                A(i,j) = Im(i,j) - rho*s(i)*y(j)
                B(i,j) = Im(i,j) - rho*y(i)*s(j)
             end do
          end do
          Hnew = matmul(matmul(A, Hm), B)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hnew(i,j) + rho*s(i)*s(j)
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function bfgs
end program bfgs_demo
`,tt=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
func bfgs(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := make([][]float64, n) // inverse-Hessian estimate
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := make([]float64, n) // d = -H g
		for i := range d {
			d[i] = -dot(H[i], g)
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		sy := dot(s, y)
		if sy > 1e-12 { // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
			rho := 1 / sy
			A := make([][]float64, n)
			B := make([][]float64, n)
			for i := 0; i < n; i++ {
				A[i] = make([]float64, n)
				B[i] = make([]float64, n)
				for j := 0; j < n; j++ {
					id := 0.0
					if i == j {
						id = 1
					}
					A[i][j] = id - rho*s[i]*y[j]
					B[i][j] = id - rho*y[i]*s[j]
				}
			}
			AH := make([][]float64, n)
			for i := 0; i < n; i++ {
				AH[i] = make([]float64, n)
				for j := 0; j < n; j++ {
					for l := 0; l < n; l++ {
						AH[i][j] += A[i][l] * H[l][j]
					}
				}
			}
			for i := 0; i < n; i++ {
				row := make([]float64, n)
				for j := 0; j < n; j++ {
					for l := 0; l < n; l++ {
						row[j] += AH[i][l] * B[l][j]
					}
					row[j] += rho * s[i] * s[j]
				}
				H[i] = row
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(bfgs(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
`,nt=`using LinearAlgebra
# BFGS quasi-Newton minimization with backtracking (Armijo) line search.
function bfgs(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        sy = s ⋅ y
        if sy > 1e-12                            # BFGS inverse update
            ρ = 1 / sy
            Im = Matrix{Float64}(I, n, n)
            H = (Im - ρ*s*y') * H * (Im - ρ*y*s') + ρ*s*s'
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(bfgs(f, g, [0.0, 0.0]))                  # -> [1, 2]
`,at=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
function bfgs(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  let x = [...x0];
  let H = Array.from({ length: n }, (_, i) =>          // inverse-Hessian estimate
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    const d = H.map((row) => -dot(row, g));            // d = -H g
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const sy = dot(s, y);
    if (sy > 1e-12) {                                  // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
      const rho = 1 / sy;
      const A = H.map((_, i) => H.map((__, j) => (i === j ? 1 : 0) - rho * s[i] * y[j]));
      const B = H.map((_, i) => H.map((__, j) => (i === j ? 1 : 0) - rho * y[i] * s[j]));
      const AH = A.map((_, i) => H.map((__, j) => A[i].reduce((acc, a, l) => acc + a * H[l][j], 0)));
      H = AH.map((_, i) => B.map((__, j) => AH[i].reduce((acc, a, l) => acc + a * B[l][j], 0))
        .map((v, j) => v + rho * s[i] * s[j]));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(bfgs(f, g, [0, 0]));                       // -> [1, 2]
`,it=`function [x, k] = bfgs(f, grad, x0, tol, max_iter)
% BFGS  Quasi-Newton minimization with Armijo backtracking line search.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g; t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g; sy = s'*y;
        if sy > 1e-12
            rho = 1/sy; I = eye(n);
            H = (I - rho*(s*y'))*H*(I - rho*(y*s')) + rho*(s*s');   % inverse update
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(bfgs(f, grad, [0; 0])');
`,st=`import numpy as np


def bfgs(f, grad, x0, tol=1e-8, max_iter=200):
    """BFGS quasi-Newton minimization with backtracking line search."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        sy = s @ y
        if sy > 1e-12:                                # BFGS inverse update
            rho = 1.0 / sy
            I = np.eye(n)
            H = (I - rho * np.outer(s, y)) @ H @ (I - rho * np.outer(y, s)) + rho * np.outer(s, s)
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(bfgs(f, grad, [0, 0]))                      # -> (1, 2)
`,rt=`# BFGS quasi-Newton minimization with backtracking line search.
bfgs <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    t <- 1.0
    while (f(x + t * d) > f(x) + 1e-4 * t * sum(g * d)) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    sy <- sum(s * y)
    if (sy > 1e-12) {                             # BFGS inverse update
      rho <- 1.0 / sy
      I <- diag(n)
      H <- (I - rho * outer(s, y)) %*% H %*% (I - rho * outer(y, s)) +
        rho * outer(s, s)
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- bfgs(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,ot=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
fn bfgs<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];           // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let d: Vec<f64> = (0..n).map(|i| -dot(&h[i], &g)).collect();  // d = -H g
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let sy = dot(&s, &y);
        if sy > 1e-12 {                          // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
            let rho = 1.0 / sy;
            let a: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (if i == j { 1.0 } else { 0.0 }) - rho * s[i] * y[j]).collect()).collect();
            let b: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (if i == j { 1.0 } else { 0.0 }) - rho * y[i] * s[j]).collect()).collect();
            let ah: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (0..n).map(|l| a[i][l] * h[l][j]).sum()).collect()).collect();
            let ahb: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (0..n).map(|l| ah[i][l] * b[l][j]).sum()).collect()).collect();
            for i in 0..n { for j in 0..n { h[i][j] = ahb[i][j] + rho * s[i] * s[j]; } }
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", bfgs(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
`,mt=`(* BFGS quasi-Newton minimization with backtracking (Armijo) line search. *)
bfgs[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, sy, rho, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                       (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d;
      xNew = x + s; gNew = grad[xNew];
      y = gNew - g; sy = s.y;
      If[sy > 10^-12,                            (* H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T *)
         rho = 1/sy;
         H = (Id - rho Outer[Times, s, y]).H.(Id - rho Outer[Times, y, s]) + rho Outer[Times, s, s]];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[bfgs[f, g, {0, 0}]]                        (* -> {1, 2} *)
`,lt=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }
Vec matvec(const Mat& M, const Vec& v) { int n = M.size(); Vec r(n, 0); for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) r[i] += M[i][j] * v[j]; return r; }
Vec vecmat(const Vec& v, const Mat& M) { int n = M.size(); Vec r(n, 0); for (int j = 0; j < n; ++j) for (int i = 0; i < n; ++i) r[j] += v[i] * M[i][j]; return r; }

// Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
Vec broyden(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;       // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d = matvec(H, g); for (double& di : d) di = -di;            // d = -H g
        if (dot(g, d) >= 0) {                                           // safeguard: descent direction
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = (i == j);
            d = g; for (double& di : d) di = -di;
        }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        Vec Hy = matvec(H, y); double sHy = dot(s, Hy);
        if (fabs(sHy) > 1e-12) {                                        // Broyden inverse update (rank one)
            Vec sH = vecmat(s, H);
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] += (s[i] - Hy[i]) * sH[j] / sHy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = broyden(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,ht=`program broyden_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = broyden([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
  function broyden(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n), Hy(n), sH(n)
    real(8) :: Hm(n,n), Im(n,n)
    real(8) :: t, fx, gd, sHy
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       if (dot_product(g, d) >= 0d0) then    ! safeguard: descent direction
          Hm = Im; d = -g
       end if
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       Hy = matmul(Hm, y)
       sHy = dot_product(s, Hy)
       if (abs(sHy) > 1d-12) then            ! Broyden inverse update (rank one)
          sH = matmul(s, Hm)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hm(i,j) + (s(i) - Hy(i))*sH(j)/sHy
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function broyden
end program broyden_demo
`,ft=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

func matvec(M [][]float64, v []float64) []float64 {
	r := make([]float64, len(M))
	for i := range M {
		r[i] = dot(M[i], v)
	}
	return r
}

func vecmat(v []float64, M [][]float64) []float64 {
	n := len(M)
	r := make([]float64, n)
	for j := 0; j < n; j++ {
		for i := 0; i < n; i++ {
			r[j] += v[i] * M[i][j]
		}
	}
	return r
}

func eye(n int) [][]float64 {
	H := make([][]float64, n)
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	return H
}

// Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
func broyden(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := eye(n) // inverse-Hessian estimate
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := matvec(H, g)
		for i := range d {
			d[i] = -d[i]
		}
		if dot(g, d) >= 0 { // safeguard: descent direction
			H = eye(n)
			d = make([]float64, n)
			for i := range d {
				d[i] = -g[i]
			}
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		Hy := matvec(H, y)
		sHy := dot(s, Hy)
		if math.Abs(sHy) > 1e-12 { // Broyden inverse update (rank one)
			sH := vecmat(s, H)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					H[i][j] += (s[i] - Hy[i]) * sH[j] / sHy
				}
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(broyden(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
`,dt=`using LinearAlgebra
# Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
function broyden(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        if g ⋅ d >= 0                            # safeguard: keep a descent direction
            H = Matrix{Float64}(I, n, n); d = -g
        end
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        Hy = H * y
        sHy = s ⋅ Hy
        if abs(sHy) > 1e-12                      # Broyden inverse update (rank one)
            H = H + ((s - Hy) * (s' * H)) / sHy
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(broyden(f, g, [0.0, 0.0]))              # -> [1, 2]
`,bt=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const matvec = (M, v) => M.map((row) => dot(row, v));
const vecmat = (v, M) => M[0].map((_, j) => M.reduce((s, row, i) => s + v[i] * row[j], 0));

// Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
function broyden(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  const eye = () => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let x = [...x0];
  let H = eye();                                       // inverse-Hessian estimate
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    let d = matvec(H, g).map((v) => -v);              // d = -H g
    if (dot(g, d) >= 0) { H = eye(); d = g.map((v) => -v); }   // safeguard: descent direction
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const Hy = matvec(H, y);
    const sHy = dot(s, Hy);
    if (Math.abs(sHy) > 1e-12) {                       // Broyden inverse update (rank one)
      const sH = vecmat(s, H);
      H = H.map((row, i) => row.map((hij, j) => hij + (s[i] - Hy[i]) * sH[j] / sHy));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(broyden(f, g, [0, 0]));                    // -> [1, 2]
`,$t=`function [x, k] = broyden(f, grad, x0, tol, max_iter)
% BROYDEN  Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: keep a descent direction
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g;
        Hy = H*y; sHy = s'*Hy;
        if abs(sHy) > 1e-12
            H = H + ((s - Hy)*(s'*H))/sHy;             % Broyden inverse update (rank one)
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(broyden(f, grad, [0; 0])');                       % -> 1 2
`,ct=`import numpy as np


def broyden(f, grad, x0, tol=1e-8, max_iter=200):
    """Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form)."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        if g @ d >= 0:                               # safeguard: keep a descent direction
            H, d = np.eye(n), -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        Hy = H @ y
        sHy = s @ Hy
        if abs(sHy) > 1e-12:                         # Broyden inverse update (rank one, non-symmetric)
            H = H + np.outer(s - Hy, s @ H) / sHy
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(broyden(f, grad, [0, 0]))                  # -> (1, 2)
`,pt=`# Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
broyden <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    if (sum(g * d) >= 0) {                        # safeguard: descent direction
      H <- diag(n); d <- -g
    }
    t <- 1.0
    fx <- f(x); gd <- sum(g * d)
    while (f(x + t * d) > fx + 1e-4 * t * gd) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    Hy <- as.numeric(H %*% y)
    sHy <- sum(s * Hy)
    if (abs(sHy) > 1e-12) {                       # Broyden inverse update (rank one)
      sH <- as.numeric(s %*% H)
      H <- H + outer(s - Hy, sH) / sHy
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- broyden(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,kt=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }
fn matvec(m: &[Vec<f64>], v: &[f64]) -> Vec<f64> { m.iter().map(|row| dot(row, v)).collect() }
fn vecmat(v: &[f64], m: &[Vec<f64>]) -> Vec<f64> {
    let n = m.len();
    (0..n).map(|j| (0..n).map(|i| v[i] * m[i][j]).sum()).collect()
}

// Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
fn broyden<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];                    // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let mut d: Vec<f64> = matvec(&h, &g).iter().map(|v| -v).collect();   // d = -H g
        if dot(&g, &d) >= 0.0 {                           // safeguard: descent direction
            h = vec![vec![0.0; n]; n]; for i in 0..n { h[i][i] = 1.0; }
            d = g.iter().map(|v| -v).collect();
        }
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let hy = matvec(&h, &y);
        let s_hy = dot(&s, &hy);
        if s_hy.abs() > 1e-12 {                           // Broyden inverse update (rank one)
            let sh = vecmat(&s, &h);
            for i in 0..n { for j in 0..n { h[i][j] += (s[i] - hy[i]) * sh[j] / s_hy; }}
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", broyden(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
`,gt=`(* Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form). *)
broyden[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, Hy, sHy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: descent direction *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g; Hy = H.y; sHy = s.Hy;
      If[Abs[sHy] > 10^-12,                        (* Broyden inverse update (rank one) *)
         H = H + Outer[Times, s - Hy, s.H]/sHy];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[broyden[f, g, {0, 0}]]                       (* -> {1, 2} *)
`,ut=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }
Vec matvec(const Mat& M, const Vec& v) { int n = M.size(); Vec r(n, 0); for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) r[i] += M[i][j] * v[j]; return r; }

// DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
Vec dfp(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;       // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d = matvec(H, g); for (double& di : d) di = -di;            // d = -H g
        if (dot(g, d) >= 0) {                                           // safeguard: descent direction
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = (i == j);
            d = g; for (double& di : d) di = -di;
        }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        double sy = dot(s, y);
        if (sy > 1e-12) {                                              // DFP inverse update
            Vec Hy = matvec(H, y); double yHy = dot(y, Hy);
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j)
                H[i][j] += s[i] * s[j] / sy - Hy[i] * Hy[j] / yHy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = dfp(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,xt=`program dfp_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = dfp([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
  function dfp(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n), Hy(n)
    real(8) :: Hm(n,n), Im(n,n)
    real(8) :: t, fx, gd, sy, yHy
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       if (dot_product(g, d) >= 0d0) then    ! safeguard: descent direction
          Hm = Im; d = -g
       end if
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       sy = dot_product(s, y)
       if (sy > 1d-12) then                  ! DFP inverse update
          Hy = matmul(Hm, y)
          yHy = dot_product(y, Hy)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hm(i,j) + s(i)*s(j)/sy - Hy(i)*Hy(j)/yHy
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function dfp
end program dfp_demo
`,vt=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

func matvec(M [][]float64, v []float64) []float64 {
	r := make([]float64, len(M))
	for i := range M {
		r[i] = dot(M[i], v)
	}
	return r
}

func eye(n int) [][]float64 {
	H := make([][]float64, n)
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	return H
}

// DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
func dfp(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := eye(n) // inverse-Hessian estimate
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := matvec(H, g)
		for i := range d {
			d[i] = -d[i]
		}
		if dot(g, d) >= 0 { // safeguard: descent direction
			H = eye(n)
			d = make([]float64, n)
			for i := range d {
				d[i] = -g[i]
			}
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		sy := dot(s, y)
		if sy > 1e-12 { // DFP inverse update
			Hy := matvec(H, y)
			yHy := dot(y, Hy)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					H[i][j] += s[i]*s[j]/sy - Hy[i]*Hy[j]/yHy
				}
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(dfp(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
`,yt=`using LinearAlgebra
# DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
function dfp(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        if g ⋅ d >= 0                            # safeguard: keep a descent direction
            H = Matrix{Float64}(I, n, n); d = -g
        end
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        sy = s ⋅ y
        if sy > 1e-12                            # DFP inverse update
            Hy = H * y
            H = H + (s*s')/sy - (Hy*Hy')/(y ⋅ Hy)
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(dfp(f, g, [0.0, 0.0]))                  # -> [1, 2]
`,zt=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const matvec = (M, v) => M.map((row) => dot(row, v));

// DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
function dfp(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  const eye = () => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let x = [...x0];
  let H = eye();                                       // inverse-Hessian estimate
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    let d = matvec(H, g).map((v) => -v);              // d = -H g
    if (dot(g, d) >= 0) { H = eye(); d = g.map((v) => -v); }   // safeguard: descent direction
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const sy = dot(s, y);
    if (sy > 1e-12) {                                  // DFP inverse update
      const Hy = matvec(H, y), yHy = dot(y, Hy);
      H = H.map((row, i) => row.map((hij, j) => hij + (s[i] * s[j]) / sy - (Hy[i] * Hy[j]) / yHy));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(dfp(f, g, [0, 0]));                        // -> [1, 2]
`,_t=`function [x, k] = dfp(f, grad, x0, tol, max_iter)
% DFP  Davidon-Fletcher-Powell quasi-Newton minimization (inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: keep a descent direction
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g; sy = s'*y;
        if sy > 1e-12
            Hy = H*y;
            H = H + (s*s')/sy - (Hy*Hy')/(y'*Hy);      % DFP inverse update
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(dfp(f, grad, [0; 0])');                            % -> 1 2
`,wt=`import numpy as np


def dfp(f, grad, x0, tol=1e-8, max_iter=200):
    """DFP (Davidon-Fletcher-Powell) quasi-Newton minimization, inverse-Hessian form."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        if g @ d >= 0:                               # safeguard: keep a descent direction
            H, d = np.eye(n), -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        sy = s @ y
        if sy > 1e-12:                               # DFP inverse update
            Hy = H @ y
            H = H + np.outer(s, s) / sy - np.outer(Hy, Hy) / (y @ Hy)
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(dfp(f, grad, [0, 0]))                      # -> (1, 2)
`,jt=`# DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
dfp <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    if (sum(g * d) >= 0) {                        # safeguard: descent direction
      H <- diag(n); d <- -g
    }
    t <- 1.0
    fx <- f(x); gd <- sum(g * d)
    while (f(x + t * d) > fx + 1e-4 * t * gd) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    sy <- sum(s * y)
    if (sy > 1e-12) {                             # DFP inverse update
      Hy <- as.numeric(H %*% y)
      H <- H + outer(s, s) / sy - outer(Hy, Hy) / sum(y * Hy)
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- dfp(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,At=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }
fn matvec(m: &[Vec<f64>], v: &[f64]) -> Vec<f64> { m.iter().map(|row| dot(row, v)).collect() }

// DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
fn dfp<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];                    // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let mut d: Vec<f64> = matvec(&h, &g).iter().map(|v| -v).collect();   // d = -H g
        if dot(&g, &d) >= 0.0 {                           // safeguard: descent direction
            h = vec![vec![0.0; n]; n]; for i in 0..n { h[i][i] = 1.0; }
            d = g.iter().map(|v| -v).collect();
        }
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let sy = dot(&s, &y);
        if sy > 1e-12 {                                   // DFP inverse update
            let hy = matvec(&h, &y);
            let yhy = dot(&y, &hy);
            for i in 0..n { for j in 0..n {
                h[i][j] += s[i] * s[j] / sy - hy[i] * hy[j] / yhy;
            }}
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", dfp(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
`,Tt=`(* DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form). *)
dfp[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, sy, Hy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: descent direction *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g; sy = s.y;
      If[sy > 10^-12,                             (* DFP inverse update *)
         Hy = H.y;
         H = H + Outer[Times, s, s]/sy - Outer[Times, Hy, Hy]/(y.Hy)];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[dfp[f, g, {0, 0}]]                          (* -> {1, 2} *)
`,qt=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Golden-section search for the minimum of a unimodal f on [a, b].
double golden_section(function<double(double)> f, double a, double b, double tol = 1e-8) {
    double g = (sqrt(5.0) - 1) / 2;
    double c = b - g * (b - a), d = a + g * (b - a), fc = f(c), fd = f(d);
    while (b - a > tol) {
        if (fc < fd) { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); }
        else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
    }
    return (a + b) / 2;
}

int main() {
    cout << golden_section([](double x) { return (x - 2) * (x - 2) + 1; }, 0, 5) << "\\n";
}
`,Ht=`program golden_demo
  implicit none
  real(8) :: a, b, c, d, fc, fd, g
  a = 0d0; b = 5d0; g = (sqrt(5d0) - 1d0)/2d0
  c = b - g*(b - a); d = a + g*(b - a); fc = f(c); fd = f(d)
  do while (b - a > 1d-8)
     if (fc < fd) then
        b = d; d = c; fd = fc; c = b - g*(b - a); fc = f(c)
     else
        a = c; c = d; fc = fd; d = a + g*(b - a); fd = f(d)
     end if
  end do
  print '(A, F10.6)', 'min at x = ', (a + b)/2d0
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = (x - 2d0)**2 + 1d0
  end function f
end program golden_demo
`,Mt=`package main

import (
	"fmt"
	"math"
)

// Golden-section search for the minimum of a unimodal f on [a, b].
func goldenSection(f func(float64) float64, a, b, tol float64) float64 {
	g := (math.Sqrt(5) - 1) / 2
	c, d := b-g*(b-a), a+g*(b-a)
	fc, fd := f(c), f(d)
	for b-a > tol {
		if fc < fd {
			b, d, fd = d, c, fc
			c = b - g*(b-a)
			fc = f(c)
		} else {
			a, c, fc = c, d, fd
			d = a + g*(b-a)
			fd = f(d)
		}
	}
	return (a + b) / 2
}

func main() {
	fmt.Println(goldenSection(func(x float64) float64 { return (x-2)*(x-2) + 1 }, 0, 5, 1e-8))
}
`,Nt=`function golden_section(f, a, b; tol = 1e-8)
    g = (sqrt(5) - 1) / 2
    c = b - g*(b - a); d = a + g*(b - a); fc = f(c); fd = f(d)
    while b - a > tol
        if fc < fd
            b, d, fd = d, c, fc; c = b - g*(b - a); fc = f(c)
        else
            a, c, fc = c, d, fd; d = a + g*(b - a); fd = f(d)
        end
    end
    return (a + b) / 2
end
println(golden_section(x -> (x - 2)^2 + 1, 0.0, 5.0))   # 2
`,St=`// Golden-section search for the minimum of a unimodal f on [a, b].
function goldenSection(f, a, b, tol = 1e-8) {
  const g = (Math.sqrt(5) - 1) / 2;
  let c = b - g * (b - a), d = a + g * (b - a), fc = f(c), fd = f(d);
  while (b - a > tol) {
    if (fc < fd) { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); }
    else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
  }
  return (a + b) / 2;
}
console.log(goldenSection((x) => (x - 2) ** 2 + 1, 0, 5));
`,It=`function m = golden_section(f, a, b, tol)
% GOLDEN_SECTION  Minimum of a unimodal f on [a,b] by golden-section search.
    if nargin < 4, tol = 1e-8; end
    g = (sqrt(5) - 1)/2;
    c = b - g*(b-a); d = a + g*(b-a); fc = f(c); fd = f(d);
    while b - a > tol
        if fc < fd
            b = d; d = c; fd = fc; c = b - g*(b-a); fc = f(c);
        else
            a = c; c = d; fc = fd; d = a + g*(b-a); fd = f(d);
        end
    end
    m = (a + b)/2;
end

% --- Demo ---
disp(golden_section(@(x) (x-2)^2 + 1, 0, 5));       % -> 2
`,Ft=`import math


def golden_section(f, a, b, tol=1e-8):
    """Golden-section search for the minimum of a unimodal f on [a, b]."""
    g = (math.sqrt(5) - 1) / 2
    c, d = b - g * (b - a), a + g * (b - a)
    fc, fd = f(c), f(d)
    while b - a > tol:
        if fc < fd:
            b, d, fd = d, c, fc
            c = b - g * (b - a); fc = f(c)
        else:
            a, c, fc = c, d, fd
            d = a + g * (b - a); fd = f(d)
    return (a + b) / 2


if __name__ == "__main__":
    print(golden_section(lambda x: (x - 2) ** 2 + 1, 0, 5))   # -> 2
`,Pt=`# Golden-section search for the minimum of a unimodal f on [a, b].
golden_section <- function(f, a, b, tol = 1e-8) {
  g <- (sqrt(5) - 1) / 2
  c <- b - g * (b - a)
  d <- a + g * (b - a)
  fc <- f(c)
  fd <- f(d)
  while (b - a > tol) {
    if (fc < fd) {
      b <- d; d <- c; fd <- fc
      c <- b - g * (b - a); fc <- f(c)
    } else {
      a <- c; c <- d; fc <- fd
      d <- a + g * (b - a); fd <- f(d)
    }
  }
  (a + b) / 2
}

if (sys.nframe() == 0) {
  print(golden_section(function(x) (x - 2)^2 + 1, 0, 5))   # -> 2
}
`,Bt=`// Golden-section search for the minimum of a unimodal f on [a, b].
fn golden_section<F: Fn(f64) -> f64>(f: F, mut a: f64, mut b: f64, tol: f64) -> f64 {
    let g = (5.0_f64.sqrt() - 1.0) / 2.0;
    let (mut c, mut d) = (b - g * (b - a), a + g * (b - a));
    let (mut fc, mut fd) = (f(c), f(d));
    while b - a > tol {
        if fc < fd { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); }
        else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
    }
    (a + b) / 2.0
}
fn main() {
    println!("{}", golden_section(|x: f64| (x - 2.0).powi(2) + 1.0, 0.0, 5.0, 1e-8));
}
`,Dt=`goldenSection[f_, a0_, b0_, tol_ : 10^-8] := Module[{a = a0, b = b0, g, c, d, fc, fd},
   g = (Sqrt[5] - 1)/2;
   c = b - g (b - a); d = a + g (b - a); fc = f[c]; fd = f[d];
   While[b - a > tol,
    If[fc < fd, b = d; d = c; fd = fc; c = b - g (b - a); fc = f[c],
       a = c; c = d; fc = fd; d = a + g (b - a); fd = f[d]]];
   (a + b)/2];
Print[goldenSection[(#-2)^2 + 1 &, 0., 5.]]
`,Vt=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }

// Gradient descent with constant step size alpha.
Vec gradient_descent(function<Vec(Vec)> grad, Vec x, double alpha = 0.1, double tol = 1e-8, int max_iter = 100000) {
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        for (size_t i = 0; i < x.size(); ++i) x[i] -= alpha * g[i];
    }
    return x;
}

int main() {
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 2 * (v[1] - 2)}; };
    Vec x = gradient_descent(grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,Et=`program gradient_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), alpha
  integer :: k
  x = [0d0, 0d0]; alpha = 0.1d0
  do k = 1, 100000
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-8) exit
     x = x - alpha*g
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 2d0*(v(2) - 2d0)]
  end function grad
end program gradient_demo
`,Wt=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

// Gradient descent with constant step size alpha.
func gradientDescent(grad func([]float64) []float64, x0 []float64, alpha, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		for i := range x {
			x[i] -= alpha * g[i]
		}
	}
	return x
}

func main() {
	grad := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 2 * (v[1] - 2)} }
	fmt.Println(gradientDescent(grad, []float64{0, 0}, 0.1, 1e-8, 100000))
}
`,Rt=`nrm(v) = sqrt(sum(abs2, v))
function gradient_descent(grad, x0; alpha = 0.1, tol = 1e-8, max_iter = 100000)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        x = x .- alpha .* g
    end
    return x
end
println(gradient_descent(v -> [2*(v[1]-1), 2*(v[2]-2)], [0.0, 0.0]))   # [1, 2]
`,Gt=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
// Gradient descent with constant step size alpha.
function gradientDescent(grad, x0, alpha = 0.1, tol = 1e-8, maxIter = 100000) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    x = x.map((xi, i) => xi - alpha * g[i]);
  }
  return x;
}
console.log(gradientDescent((v) => [2 * (v[0] - 1), 2 * (v[1] - 2)], [0, 0]));
`,Ct=`function [x, k] = gradient_descent(grad, x0, alpha, tol, max_iter)
% GRADIENT_DESCENT  Constant step-size gradient descent.
    if nargin < 3, alpha = 0.1; end
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 100000; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        x = x - alpha*g;
    end
end

% --- Demo ---
grad = @(v) [2*(v(1)-1); 2*(v(2)-2)];
disp(gradient_descent(grad, [0; 0])');              % -> 1 2
`,Lt=`import numpy as np


def gradient_descent(grad, x0, alpha=0.1, tol=1e-8, max_iter=100000):
    """Gradient descent with constant step size alpha."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        x = x - alpha * g
    return x, max_iter


if __name__ == "__main__":
    grad = lambda v: [2 * (v[0] - 1), 2 * (v[1] - 2)]
    print(gradient_descent(grad, [0, 0]))             # -> (1, 2)
`,Kt=`# Gradient descent with constant step size alpha.
gradient_descent <- function(grad, x0, alpha = 0.1, tol = 1e-8, max_iter = 100000) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    x <- x - alpha * g
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  grad <- function(v) c(2 * (v[1] - 1), 2 * (v[2] - 2))
  res <- gradient_descent(grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,Ot=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
// Gradient descent with constant step size alpha.
fn gradient_descent<G: Fn(&[f64]) -> Vec<f64>>(grad: G, x0: &[f64], alpha: f64, tol: f64, max_iter: usize) -> Vec<f64> {
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        for i in 0..x.len() { x[i] -= alpha * g[i]; }
    }
    x
}
fn main() {
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 2.0 * (v[1] - 2.0)];
    println!("{:?}", gradient_descent(grad, &[0.0, 0.0], 0.1, 1e-8, 100000));
}
`,Ut=`gradientDescent[grad_, x0_, alpha_ : 0.1, tol_ : 10^-8, maxIter_ : 100000] :=
  Module[{x = N[x0], g, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      x = x - alpha g, {k, maxIter}];
   x];
Print[gradientDescent[{2 (#[[1]] - 1), 2 (#[[2]] - 2)} &, {0, 0}]]
`,Qt=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }

Vec solve(Mat A, Vec b) {                              // Gaussian elimination
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) { double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j]; b[i] -= f * b[k]; }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) { double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j]; x[i] = s / A[i][i]; }
    return x;
}

// Newton's method for unconstrained minimization (solves H p = grad).
Vec newton_min(function<Vec(Vec)> grad, function<Mat(Vec)> hess, Vec x, double tol = 1e-10, int max_iter = 100) {
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        Vec p = solve(hess(x), g);
        for (size_t i = 0; i < x.size(); ++i) x[i] -= p[i];
    }
    return x;
}

int main() {
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 2 * (v[1] - 2)}; };
    auto hess = [](Vec) -> Mat { return {{2, 0}, {0, 2}}; };
    Vec x = newton_min(grad, hess, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,Jt=`program newton_min_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), p(n), Hm(n,n)
  integer :: k
  x = [0d0, 0d0]
  do k = 1, 100
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-10) exit
     Hm = hess(x)
     p = solve2(Hm, g)
     x = x - p
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  function grad(v) result(gg)
    real(8), intent(in) :: v(n)
    real(8) :: gg(n)
    gg = [2d0*(v(1)-1d0), 2d0*(v(2)-2d0)]
  end function grad
  function hess(v) result(Hh)
    real(8), intent(in) :: v(n)
    real(8) :: Hh(n,n)
    Hh = reshape([2d0,0d0,0d0,2d0], [n,n])
  end function hess
  function solve2(A, b) result(xx)        ! 2x2 Cramer
    real(8), intent(in) :: A(n,n), b(n)
    real(8) :: xx(n), det
    det = A(1,1)*A(2,2) - A(1,2)*A(2,1)
    xx(1) = (b(1)*A(2,2) - A(1,2)*b(2))/det
    xx(2) = (A(1,1)*b(2) - b(1)*A(2,1))/det
  end function solve2
end program newton_min_demo
`,Yt=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}
func solve(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

// Newton's method for unconstrained minimization.
func newtonMin(grad func([]float64) []float64, hess func([]float64) [][]float64, x0 []float64, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		p := solve(hess(x), g)
		for i := range x {
			x[i] -= p[i]
		}
	}
	return x
}

func main() {
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 2 * (v[1] - 2)} }
	hess := func(v []float64) [][]float64 { return [][]float64{{2, 0}, {0, 2}} }
	fmt.Println(newtonMin(g, hess, []float64{0, 0}, 1e-10, 100))
}
`,Zt=`nrm(v) = sqrt(sum(abs2, v))
function newton_min(grad, hess, x0; tol = 1e-10, max_iter = 100)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        x = x - hess(x) \\ g            # solve H p = grad
    end
    return x
end
g(v) = [2*(v[1]-1), 2*(v[2]-2)]
H(v) = [2.0 0; 0 2]
println(newton_min(g, H, [0.0, 0.0]))   # [1, 2]
`,Xt=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
function solve(A, b) {
  const n = b.length, m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) { const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j]; r[i] -= f * r[k]; }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) { let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j]; x[i] = s / m[i][i]; }
  return x;
}
// Newton's method for unconstrained minimization.
function newtonMin(grad, hess, x0, tol = 1e-10, maxIter = 100) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    const p = solve(hess(x), g);
    x = x.map((xi, i) => xi - p[i]);
  }
  return x;
}
const g = (v) => [2 * (v[0] - 1), 2 * (v[1] - 2)];
const hess = () => [[2, 0], [0, 2]];
console.log(newtonMin(g, hess, [0, 0]));
`,en=`function [x, k] = newton_min(grad, hess, x0, tol, max_iter)
% NEWTON_MIN  Newton's method for unconstrained minimization.
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 100; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        x = x - hess(x) \\ g;
    end
end

% --- Demo ---
grad = @(v) [2*(v(1)-1); 2*(v(2)-2)];
hess = @(v) [2 0; 0 2];
disp(newton_min(grad, hess, [0; 0])');
`,tn=`import numpy as np


def newton_min(grad, hess, x0, tol=1e-10, max_iter=100):
    """Newton's method for unconstrained minimization (solves H p = -grad)."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        x = x - np.linalg.solve(np.array(hess(x), float), g)
    return x, max_iter


if __name__ == "__main__":
    grad = lambda v: [2 * (v[0] - 1), 2 * (v[1] - 2)]
    hess = lambda v: [[2, 0], [0, 2]]
    print(newton_min(grad, hess, [0, 0]))             # -> (1, 2)
`,nn=`# Newton's method for unconstrained minimization (solves H p = grad).
newton_min <- function(grad, hess, x0, tol = 1e-10, max_iter = 100) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    H <- as.matrix(hess(x))
    x <- x - solve(H, g)
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  grad <- function(v) c(2 * (v[1] - 1), 2 * (v[2] - 2))
  hess <- function(v) rbind(c(2, 0), c(0, 2))
  res <- newton_min(grad, hess, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,an=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n { let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; } b[i] -= f * b[k]; }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() { let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; } x[i] = s / a[i][i]; }
    x
}
// Newton's method for unconstrained minimization.
fn newton_min<G: Fn(&[f64]) -> Vec<f64>, H: Fn(&[f64]) -> Vec<Vec<f64>>>(grad: G, hess: H, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        let p = solve(hess(&x), g);
        for i in 0..x.len() { x[i] -= p[i]; }
    }
    x
}
fn main() {
    let g = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 2.0 * (v[1] - 2.0)];
    let h = |_v: &[f64]| vec![vec![2.0, 0.0], vec![0.0, 2.0]];
    println!("{:?}", newton_min(g, h, &[0.0, 0.0], 1e-10, 100));
}
`,sn=`newtonMin[grad_, hess_, x0_, tol_ : 10^-10, maxIter_ : 100] := Module[{x = N[x0], g, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      x = x - LinearSolve[hess[x], g], {k, maxIter}];
   x];
g[v_] := {2 (v[[1]] - 1), 2 (v[[2]] - 2)};
hess[v_] := {{2, 0}, {0, 2}};
Print[newtonMin[g, hess, {0, 0}]]
`,rn=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }
Vec matvec(const Mat& M, const Vec& v) { int n = M.size(); Vec r(n, 0); for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) r[i] += M[i][j] * v[j]; return r; }

// PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
Vec psb(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;       // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d = matvec(H, g); for (double& di : d) di = -di;            // d = -H g
        if (dot(g, d) >= 0) {                                           // safeguard: descent direction
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = (i == j);
            d = g; for (double& di : d) di = -di;
        }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        Vec Hy = matvec(H, y), w(n);
        for (int i = 0; i < n; ++i) w[i] = s[i] - Hy[i];               // secant-condition residual
        double yy = dot(y, y), yw = dot(y, w);
        if (yy > 1e-12) {                                              // PSB inverse update (symmetric)
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j)
                H[i][j] += (w[i] * y[j] + y[i] * w[j]) / yy - (yw / (yy * yy)) * y[i] * y[j];
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = psb(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,on=`program psb_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = psb([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
  function psb(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n), Hy(n), w(n)
    real(8) :: Hm(n,n), Im(n,n)
    real(8) :: t, fx, gd, yy, yw
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       if (dot_product(g, d) >= 0d0) then    ! safeguard: descent direction
          Hm = Im; d = -g
       end if
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       Hy = matmul(Hm, y)
       w = s - Hy                            ! secant-condition residual
       yy = dot_product(y, y)
       yw = dot_product(y, w)
       if (yy > 1d-12) then                  ! PSB inverse update (symmetric)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hm(i,j) + (w(i)*y(j) + y(i)*w(j))/yy - (yw/(yy*yy))*y(i)*y(j)
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function psb
end program psb_demo
`,mn=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

func matvec(M [][]float64, v []float64) []float64 {
	r := make([]float64, len(M))
	for i := range M {
		r[i] = dot(M[i], v)
	}
	return r
}

func eye(n int) [][]float64 {
	H := make([][]float64, n)
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	return H
}

// PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
func psb(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := eye(n) // inverse-Hessian estimate
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := matvec(H, g)
		for i := range d {
			d[i] = -d[i]
		}
		if dot(g, d) >= 0 { // safeguard: descent direction
			H = eye(n)
			d = make([]float64, n)
			for i := range d {
				d[i] = -g[i]
			}
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		Hy := matvec(H, y)
		w := make([]float64, n)
		for i := range w {
			w[i] = s[i] - Hy[i] // secant-condition residual
		}
		yy := dot(y, y)
		yw := dot(y, w)
		if yy > 1e-12 { // PSB inverse update (symmetric)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					H[i][j] += (w[i]*y[j]+y[i]*w[j])/yy - (yw/(yy*yy))*y[i]*y[j]
				}
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(psb(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
`,ln=`using LinearAlgebra
# PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
function psb(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        if g ⋅ d >= 0                            # safeguard: keep a descent direction
            H = Matrix{Float64}(I, n, n); d = -g
        end
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        w = s - H * y                            # secant-condition residual
        yy = y ⋅ y
        if yy > 1e-12                            # PSB inverse update (symmetric)
            H = H + (w*y' + y*w')/yy - ((y ⋅ w)/yy^2)*(y*y')
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(psb(f, g, [0.0, 0.0]))                  # -> [1, 2]
`,hn=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const matvec = (M, v) => M.map((row) => dot(row, v));

// PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
function psb(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  const eye = () => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let x = [...x0];
  let H = eye();                                       // inverse-Hessian estimate
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    let d = matvec(H, g).map((v) => -v);              // d = -H g
    if (dot(g, d) >= 0) { H = eye(); d = g.map((v) => -v); }   // safeguard: descent direction
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const Hy = matvec(H, y);
    const w = s.map((si, i) => si - Hy[i]);           // secant-condition residual
    const yy = dot(y, y), yw = dot(y, w);
    if (yy > 1e-12) {                                  // PSB inverse update (symmetric)
      H = H.map((row, i) => row.map((hij, j) =>
        hij + (w[i] * y[j] + y[i] * w[j]) / yy - (yw / (yy * yy)) * y[i] * y[j]));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(psb(f, g, [0, 0]));                        // -> [1, 2]
`,fn=`function [x, k] = psb(f, grad, x0, tol, max_iter)
% PSB  Powell-Symmetric-Broyden quasi-Newton minimization (inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: keep a descent direction
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g;
        w = s - H*y; yy = y'*y;                         % residual of the secant condition
        if yy > 1e-12
            H = H + (w*y' + y*w')/yy - ((y'*w)/yy^2)*(y*y');   % PSB inverse update (symmetric)
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(psb(f, grad, [0; 0])');                            % -> 1 2
`,dn=`import numpy as np


def psb(f, grad, x0, tol=1e-8, max_iter=200):
    """PSB (Powell-Symmetric-Broyden) quasi-Newton minimization, inverse-Hessian form."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        if g @ d >= 0:                               # safeguard: keep a descent direction
            H, d = np.eye(n), -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        w = s - H @ y                                # residual of the secant condition
        yy = y @ y
        if yy > 1e-12:                               # PSB inverse update (symmetric)
            H = H + (np.outer(w, y) + np.outer(y, w)) / yy - ((y @ w) / yy ** 2) * np.outer(y, y)
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(psb(f, grad, [0, 0]))                      # -> (1, 2)
`,bn=`# PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
psb <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    if (sum(g * d) >= 0) {                        # safeguard: descent direction
      H <- diag(n); d <- -g
    }
    t <- 1.0
    fx <- f(x); gd <- sum(g * d)
    while (f(x + t * d) > fx + 1e-4 * t * gd) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    Hy <- as.numeric(H %*% y)
    w <- s - Hy                                   # secant-condition residual
    yy <- sum(y * y)
    if (yy > 1e-12) {                             # PSB inverse update (symmetric)
      H <- H + (outer(w, y) + outer(y, w)) / yy - (sum(y * w) / yy^2) * outer(y, y)
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- psb(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,$n=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }
fn matvec(m: &[Vec<f64>], v: &[f64]) -> Vec<f64> { m.iter().map(|row| dot(row, v)).collect() }

// PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
fn psb<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];                    // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let mut d: Vec<f64> = matvec(&h, &g).iter().map(|v| -v).collect();   // d = -H g
        if dot(&g, &d) >= 0.0 {                           // safeguard: descent direction
            h = vec![vec![0.0; n]; n]; for i in 0..n { h[i][i] = 1.0; }
            d = g.iter().map(|v| -v).collect();
        }
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let hy = matvec(&h, &y);
        let w: Vec<f64> = (0..n).map(|i| s[i] - hy[i]).collect();            // secant-condition residual
        let yy = dot(&y, &y);
        let yw = dot(&y, &w);
        if yy > 1e-12 {                                   // PSB inverse update (symmetric)
            for i in 0..n { for j in 0..n {
                h[i][j] += (w[i] * y[j] + y[i] * w[j]) / yy - (yw / (yy * yy)) * y[i] * y[j];
            }}
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", psb(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
`,cn=`(* PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form). *)
psb[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, w, yy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: descent direction *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g;
      w = s - H.y; yy = y.y;                       (* secant-condition residual *)
      If[yy > 10^-12,                              (* PSB inverse update (symmetric) *)
         H = H + (Outer[Times, w, y] + Outer[Times, y, w])/yy - (y.w/yy^2) Outer[Times, y, y]];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[psb[f, g, {0, 0}]]                          (* -> {1, 2} *)
`,pn=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
#include <algorithm>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double dist(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += (a[i]-b[i])*(a[i]-b[i]); return sqrt(s); }

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
Vec simplex_basic(function<double(Vec)> f, Vec x0, double step = 1.0, double tol = 1e-8, int max_iter = 500) {
    int n = x0.size();
    Mat P(n + 1, x0);
    for (int i = 0; i < n; ++i) P[i + 1][i] += step;                    // n+1 vertices
    Vec fv(n + 1); for (int i = 0; i <= n; ++i) fv[i] = f(P[i]);
    for (int it = 0; it < max_iter; ++it) {
        int iw = 0, ib = 0;
        for (int i = 1; i <= n; ++i) { if (fv[i] > fv[iw]) iw = i; if (fv[i] < fv[ib]) ib = i; }
        double sz = 0; for (int i = 0; i <= n; ++i) sz = max(sz, dist(P[i], P[ib]));
        if (sz < tol) break;
        Vec c(n, 0);                                                    // centroid of all but the worst
        for (int i = 0; i <= n; ++i) if (i != iw) for (int j = 0; j < n; ++j) c[j] += P[i][j] / n;
        Vec xr(n); for (int j = 0; j < n; ++j) xr[j] = c[j] + (c[j] - P[iw][j]);   // reflect worst
        double fr = f(xr);
        if (fr < fv[iw]) { P[iw] = xr; fv[iw] = fr; }
        else {                                                          // shrink toward the best
            Vec best = P[ib];
            for (int i = 0; i <= n; ++i) if (i != ib) {
                for (int j = 0; j < n; ++j) P[i][j] = best[j] + 0.5 * (P[i][j] - best[j]);
                fv[i] = f(P[i]);
            }
        }
    }
    int ib = 0; for (int i = 1; i <= n; ++i) if (fv[i] < fv[ib]) ib = i;
    return P[ib];
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + (v[1] - 2) * (v[1] - 2); };
    Vec x = simplex_basic(f, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,kn=`program simplex_basic_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = simplex_basic([0d0, 0d0], 1d0, 1d-8, 500)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + (v(2) - 2d0)**2
  end function f
  ! Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
  function simplex_basic(x0, step, tol, max_iter) result(xbest)
    real(8), intent(in) :: x0(n), step, tol
    integer, intent(in) :: max_iter
    real(8) :: P(n+1,n), fv(n+1), c(n), xr(n), xbest(n), sz, fr
    integer :: it, i, iw, ib
    do i = 1, n+1
       P(i,:) = x0
    end do
    do i = 1, n
       P(i+1,i) = P(i+1,i) + step
    end do
    do i = 1, n+1
       fv(i) = f(P(i,:))
    end do
    do it = 1, max_iter
       iw = 1; ib = 1
       do i = 2, n+1
          if (fv(i) > fv(iw)) iw = i
          if (fv(i) < fv(ib)) ib = i
       end do
       sz = 0d0
       do i = 1, n+1
          sz = max(sz, sqrt(sum((P(i,:) - P(ib,:))**2)))
       end do
       if (sz < tol) exit
       c = (sum(P, 1) - P(iw,:)) / n           ! centroid of all but the worst
       xr = c + (c - P(iw,:)); fr = f(xr)      ! reflect the worst vertex
       if (fr < fv(iw)) then
          P(iw,:) = xr; fv(iw) = fr
       else                                     ! shrink toward the best
          do i = 1, n+1
             if (i /= ib) then
                P(i,:) = P(ib,:) + 0.5d0*(P(i,:) - P(ib,:))
                fv(i) = f(P(i,:))
             end if
          end do
       end if
    end do
    ib = 1
    do i = 2, n+1
       if (fv(i) < fv(ib)) ib = i
    end do
    xbest = P(ib,:)
  end function simplex_basic
end program simplex_basic_demo
`,gn=`package main

import (
	"fmt"
	"math"
)

func dist(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += (a[i] - b[i]) * (a[i] - b[i])
	}
	return math.Sqrt(s)
}

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
func simplexBasic(f func([]float64) float64, x0 []float64, step, tol float64, maxIter int) []float64 {
	n := len(x0)
	P := make([][]float64, n+1)
	for i := range P {
		P[i] = append([]float64{}, x0...)
		if i > 0 {
			P[i][i-1] += step
		}
	}
	fv := make([]float64, n+1)
	for i := range P {
		fv[i] = f(P[i])
	}
	for it := 0; it < maxIter; it++ {
		iw, ib := 0, 0
		for i := 1; i <= n; i++ {
			if fv[i] > fv[iw] {
				iw = i
			}
			if fv[i] < fv[ib] {
				ib = i
			}
		}
		sz := 0.0
		for i := 0; i <= n; i++ {
			sz = math.Max(sz, dist(P[i], P[ib]))
		}
		if sz < tol {
			break
		}
		c := make([]float64, n) // centroid of all but the worst
		for i := 0; i <= n; i++ {
			if i != iw {
				for j := 0; j < n; j++ {
					c[j] += P[i][j] / float64(n)
				}
			}
		}
		xr := make([]float64, n) // reflect the worst vertex
		for j := 0; j < n; j++ {
			xr[j] = c[j] + (c[j] - P[iw][j])
		}
		fr := f(xr)
		if fr < fv[iw] {
			P[iw] = xr
			fv[iw] = fr
		} else { // shrink toward the best
			best := append([]float64{}, P[ib]...)
			for i := 0; i <= n; i++ {
				if i != ib {
					for j := 0; j < n; j++ {
						P[i][j] = best[j] + 0.5*(P[i][j]-best[j])
					}
					fv[i] = f(P[i])
				}
			}
		}
	}
	ib := 0
	for i := 1; i <= n; i++ {
		if fv[i] < fv[ib] {
			ib = i
		}
	}
	return P[ib]
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + (v[1]-2)*(v[1]-2) }
	fmt.Println(simplexBasic(f, []float64{0, 0}, 1, 1e-8, 500)) // -> [1 2]
}
`,un=`using LinearAlgebra
# Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
function simplex_basic(f, x0; step = 1.0, tol = 1e-8, max_iter = 500)
    x0 = float.(x0)
    n = length(x0)
    P = [copy(x0) for _ in 1:n+1]
    for i in 1:n
        P[i+1][i] += step
    end
    fv = [f(p) for p in P]
    for it in 1:max_iter
        iw = argmax(fv); ib = argmin(fv)
        maximum(norm(P[i] - P[ib]) for i in 1:n+1) < tol && break
        c = (sum(P) - P[iw]) / n                 # centroid of all but the worst
        xr = c + (c - P[iw]); fr = f(xr)         # reflect the worst vertex
        if fr < fv[iw]
            P[iw] = xr; fv[iw] = fr
        else                                     # shrink toward the best
            best = P[ib]
            for i in 1:n+1
                if i != ib
                    P[i] = best + 0.5*(P[i] - best); fv[i] = f(P[i])
                end
            end
        end
    end
    return P[argmin(fv)]
end
f = v -> (v[1] - 1)^2 + (v[2] - 2)^2
println(simplex_basic(f, [0.0, 0.0]))            # -> [1, 2]
`,xn=`const dist = (a, b) => Math.sqrt(a.reduce((s, x, i) => s + (x - b[i]) ** 2, 0));

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
function simplexBasic(f, x0, step = 1, tol = 1e-8, maxIter = 500) {
  const n = x0.length;
  const P = [x0.slice(), ...Array.from({ length: n }, (_, i) => { const v = x0.slice(); v[i] += step; return v; })];
  const fv = P.map(f);
  for (let it = 0; it < maxIter; it++) {
    let iw = 0, ib = 0;
    for (let i = 1; i <= n; i++) { if (fv[i] > fv[iw]) iw = i; if (fv[i] < fv[ib]) ib = i; }
    let sz = 0;
    for (let i = 0; i <= n; i++) sz = Math.max(sz, dist(P[i], P[ib]));
    if (sz < tol) break;
    const c = Array(n).fill(0);                                  // centroid of all but the worst
    for (let i = 0; i <= n; i++) if (i !== iw) for (let j = 0; j < n; j++) c[j] += P[i][j] / n;
    const xr = c.map((cj, j) => cj + (cj - P[iw][j]));           // reflect the worst vertex
    const fr = f(xr);
    if (fr < fv[iw]) { P[iw] = xr; fv[iw] = fr; }
    else {                                                       // shrink toward the best
      const best = P[ib].slice();
      for (let i = 0; i <= n; i++) if (i !== ib) {
        P[i] = P[i].map((pij, j) => best[j] + 0.5 * (pij - best[j]));
        fv[i] = f(P[i]);
      }
    }
  }
  let ib = 0;
  for (let i = 1; i <= n; i++) if (fv[i] < fv[ib]) ib = i;
  return P[ib];
}

const f = (v) => (v[0] - 1) ** 2 + (v[1] - 2) ** 2;
console.log(simplexBasic(f, [0, 0]));                            // -> [1, 2]
`,vn=`function x = simplex_basic(f, x0, step, tol, max_iter)
% SIMPLEX_BASIC  Basic fixed-shape simplex (reflect worst through centroid, else shrink to best).
    if nargin < 3, step = 1; end
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 500; end
    x0 = x0(:)'; n = numel(x0);
    P = [x0; ones(n,1)*x0 + step*eye(n)];          % (n+1) x n vertices
    fv = zeros(n+1,1);
    for i = 1:n+1, fv(i) = f(P(i,:)'); end
    for it = 1:max_iter
        [~, iw] = max(fv); [~, ib] = min(fv);
        sz = 0;
        for i = 1:n+1, sz = max(sz, norm(P(i,:) - P(ib,:))); end
        if sz < tol, break; end
        c = (sum(P,1) - P(iw,:)) / n;              % centroid of all but the worst
        xr = c + (c - P(iw,:)); fr = f(xr');       % reflect the worst vertex
        if fr < fv(iw)
            P(iw,:) = xr; fv(iw) = fr;
        else                                        % shrink toward the best
            for i = 1:n+1
                if i ~= ib, P(i,:) = P(ib,:) + 0.5*(P(i,:) - P(ib,:)); fv(i) = f(P(i,:)'); end
            end
        end
    end
    [~, ib] = min(fv); x = P(ib,:)';
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
disp(simplex_basic(f, [0; 0])');                   % -> 1 2
`,yn=`import numpy as np


def simplex_basic(f, x0, step=1.0, tol=1e-8, max_iter=500):
    """Basic fixed-shape simplex: reflect the worst vertex through the centroid, else shrink to best."""
    x0 = np.array(x0, float)
    n = len(x0)
    P = np.vstack([x0] + [x0 + step * e for e in np.eye(n)])    # n+1 vertices
    fv = np.array([f(p) for p in P])
    for it in range(max_iter):
        iw, ib = int(np.argmax(fv)), int(np.argmin(fv))
        if max(np.linalg.norm(P[i] - P[ib]) for i in range(n + 1)) < tol:
            break
        c = (P.sum(axis=0) - P[iw]) / n                         # centroid of all but the worst
        xr = c + (c - P[iw])                                    # reflect the worst vertex
        fr = f(xr)
        if fr < fv[iw]:
            P[iw], fv[iw] = xr, fr
        else:                                                  # no improvement -> shrink toward best
            for i in range(n + 1):
                if i != ib:
                    P[i] = P[ib] + 0.5 * (P[i] - P[ib])
                    fv[i] = f(P[i])
    return P[int(np.argmin(fv))]


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + (v[1] - 2) ** 2
    print(simplex_basic(f, [0, 0]))                            # -> (1, 2)
`,zn=`# Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
simplex_basic <- function(f, x0, step = 1, tol = 1e-8, max_iter = 500) {
  x0 <- as.numeric(x0)
  n <- length(x0)
  P <- rbind(x0, t(sapply(1:n, function(i) { v <- x0; v[i] <- v[i] + step; v })))
  fv <- apply(P, 1, f)
  for (it in 1:max_iter) {
    iw <- which.max(fv); ib <- which.min(fv)
    sz <- max(sapply(1:(n + 1), function(i) sqrt(sum((P[i, ] - P[ib, ])^2))))
    if (sz < tol) break
    cen <- (colSums(P) - P[iw, ]) / n              # centroid of all but the worst
    xr <- cen + (cen - P[iw, ]); fr <- f(xr)       # reflect the worst vertex
    if (fr < fv[iw]) {
      P[iw, ] <- xr; fv[iw] <- fr
    } else {                                       # shrink toward the best
      best <- P[ib, ]
      for (i in 1:(n + 1)) if (i != ib) { P[i, ] <- best + 0.5 * (P[i, ] - best); fv[i] <- f(P[i, ]) }
    }
  }
  as.numeric(P[which.min(fv), ])
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + (v[2] - 2)^2
  cat(simplex_basic(f, c(0, 0)), "\\n")            # -> 1 2
}
`,_n=`fn dist(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| (x - y) * (x - y)).sum::<f64>().sqrt() }

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
fn simplex_basic<F: Fn(&[f64]) -> f64>(f: F, x0: &[f64], step: f64, tol: f64, max_iter: usize) -> Vec<f64> {
    let n = x0.len();
    let mut p: Vec<Vec<f64>> = (0..=n).map(|_| x0.to_vec()).collect();
    for i in 0..n { p[i + 1][i] += step; }                        // n+1 vertices
    let mut fv: Vec<f64> = p.iter().map(|v| f(v)).collect();
    let argmax = |fv: &[f64]| (0..fv.len()).max_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap()).unwrap();
    let argmin = |fv: &[f64]| (0..fv.len()).min_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap()).unwrap();
    for _ in 0..max_iter {
        let iw = argmax(&fv);
        let ib = argmin(&fv);
        let sz = (0..=n).map(|i| dist(&p[i], &p[ib])).fold(0.0, f64::max);
        if sz < tol { break; }
        let mut c = vec![0.0; n];                                 // centroid of all but the worst
        for i in 0..=n { if i != iw { for j in 0..n { c[j] += p[i][j] / n as f64; } } }
        let xr: Vec<f64> = (0..n).map(|j| c[j] + (c[j] - p[iw][j])).collect();   // reflect worst
        let fr = f(&xr);
        if fr < fv[iw] { p[iw] = xr; fv[iw] = fr; }
        else {                                                    // shrink toward the best
            let best = p[ib].clone();
            for i in 0..=n { if i != ib {
                for j in 0..n { p[i][j] = best[j] + 0.5 * (p[i][j] - best[j]); }
                fv[i] = f(&p[i]);
            }}
        }
    }
    p[argmin(&fv)].clone()
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + (v[1] - 2.0).powi(2);
    println!("{:?}", simplex_basic(f, &[0.0, 0.0], 1.0, 1e-8, 500));   // -> [1, 2]
}
`,wn=`(* Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best). *)
simplexBasic[f_, x0_, step_ : 1, tol_ : 10^-8, maxIter_ : 500] := Module[
   {n = Length[x0], P, fv, iw, ib, c, xr, fr, sz, it, i},
   P = Prepend[Table[x0 + step UnitVector[n, i], {i, n}], N[x0]];
   fv = f /@ P;
   Do[
      iw = First[Ordering[fv, -1]]; ib = First[Ordering[fv, 1]];
      sz = Max[Table[Norm[P[[i]] - P[[ib]]], {i, n + 1}]];
      If[sz < tol, Break[]];
      c = (Total[P] - P[[iw]])/n;                 (* centroid of all but the worst *)
      xr = c + (c - P[[iw]]); fr = f[xr];         (* reflect the worst vertex *)
      If[fr < fv[[iw]],
         P[[iw]] = xr; fv[[iw]] = fr,
         Do[If[i != ib, P[[i]] = P[[ib]] + 0.5 (P[[i]] - P[[ib]]); fv[[i]] = f[P[[i]]]], {i, n + 1}]],
      {it, maxIter}];
   P[[First[Ordering[fv, 1]]]]];
f[v_] := (v[[1]] - 1)^2 + (v[[2]] - 2)^2;
Print[simplexBasic[f, {0, 0}]]                    (* -> {1, 2} *)
`,jn=`#include <vector>
#include <algorithm>
#include <numeric>
#include <iostream>
#include <functional>
using namespace std;
using Vec = vector<double>;

// Nelder-Mead downhill simplex minimization.
Vec nelder_mead(function<double(Vec)> f, Vec x0, double step = 0.5, double tol = 1e-10, int max_iter = 400) {
    int n = x0.size();
    vector<Vec> p(n + 1, x0);
    for (int i = 0; i < n; ++i) p[i + 1][i] += step;
    vector<double> fv(n + 1);
    for (int i = 0; i <= n; ++i) fv[i] = f(p[i]);
    for (int it = 0; it < max_iter; ++it) {
        vector<int> ord(n + 1); iota(ord.begin(), ord.end(), 0);
        sort(ord.begin(), ord.end(), [&](int a, int b) { return fv[a] < fv[b]; });
        vector<Vec> np(n + 1); vector<double> nf(n + 1);
        for (int i = 0; i <= n; ++i) { np[i] = p[ord[i]]; nf[i] = fv[ord[i]]; }
        p = np; fv = nf;
        if (fv[n] - fv[0] < tol) break;
        Vec c(n, 0);
        for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) c[j] += p[i][j] / n;
        Vec xr(n); for (int j = 0; j < n; ++j) xr[j] = c[j] + (c[j] - p[n][j]);
        double fr = f(xr);
        if (fr < fv[0]) {
            Vec xe(n); for (int j = 0; j < n; ++j) xe[j] = c[j] + 2 * (c[j] - p[n][j]);
            double fe = f(xe);
            if (fe < fr) { p[n] = xe; fv[n] = fe; } else { p[n] = xr; fv[n] = fr; }
        } else if (fr < fv[n - 1]) {
            p[n] = xr; fv[n] = fr;
        } else {
            Vec xc(n); for (int j = 0; j < n; ++j) xc[j] = c[j] + 0.5 * (p[n][j] - c[j]);
            double fc = f(xc);
            if (fc < fv[n]) { p[n] = xc; fv[n] = fc; }
            else for (int i = 1; i <= n; ++i) { for (int j = 0; j < n; ++j) p[i][j] = p[0][j] + 0.5 * (p[i][j] - p[0][j]); fv[i] = f(p[i]); }
        }
    }
    return p[0];
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + (v[1] - 2) * (v[1] - 2); };
    Vec x = nelder_mead(f, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,An=`program simplex_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = nelder_mead([0d0, 0d0], 0.5d0, 1d-10, 400)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + (v(2) - 2d0)**2
  end function f
  ! Nelder-Mead downhill simplex minimization.
  function nelder_mead(x0, step, tol, max_iter) result(best)
    real(8), intent(in) :: x0(n), step, tol
    integer, intent(in) :: max_iter
    real(8) :: pts(n+1, n), fv(n+1), c(n), xr(n), xe(n), xc(n), best(n)
    real(8) :: fr, fe, fc, tmp(n), tf
    integer :: it, i, j, lo, hi, hi2
    do i = 1, n+1
       pts(i, :) = x0
    end do
    do i = 1, n
       pts(i+1, i) = pts(i+1, i) + step
    end do
    do i = 1, n+1
       fv(i) = f(pts(i, :))
    end do
    do it = 1, max_iter
       ! selection sort rows by fv ascending
       do i = 1, n
          do j = i+1, n+1
             if (fv(j) < fv(i)) then
                tf = fv(i); fv(i) = fv(j); fv(j) = tf
                tmp = pts(i, :); pts(i, :) = pts(j, :); pts(j, :) = tmp
             end if
          end do
       end do
       lo = 1; hi = n+1; hi2 = n           ! best, worst, second-worst indices
       if (abs(fv(hi) - fv(lo)) < tol) exit
       c = 0d0                              ! centroid of best n points
       do i = 1, n
          c = c + pts(i, :) / n
       end do
       xr = c + (c - pts(hi, :)); fr = f(xr)         ! reflect
       if (fr < fv(lo)) then
          xe = c + 2d0*(c - pts(hi, :)); fe = f(xe)  ! expand
          if (fe < fr) then
             pts(hi, :) = xe; fv(hi) = fe
          else
             pts(hi, :) = xr; fv(hi) = fr
          end if
       else if (fr < fv(hi2)) then
          pts(hi, :) = xr; fv(hi) = fr
       else
          xc = c + 0.5d0*(pts(hi, :) - c); fc = f(xc)  ! contract
          if (fc < fv(hi)) then
             pts(hi, :) = xc; fv(hi) = fc
          else                                         ! shrink toward best
             do i = 2, n+1
                pts(i, :) = pts(1, :) + 0.5d0*(pts(i, :) - pts(1, :))
                fv(i) = f(pts(i, :))
             end do
          end if
       end if
    end do
    best = pts(1, :)
  end function nelder_mead
end program simplex_demo
`,Tn=`package main

import (
	"fmt"
	"math"
	"sort"
)

// Nelder-Mead downhill simplex minimization.
func nelderMead(f func([]float64) float64, x0 []float64, step, tol float64, maxIter int) []float64 {
	n := len(x0)
	pts := [][]float64{append([]float64{}, x0...)}
	for i := 0; i < n; i++ {
		p := append([]float64{}, x0...)
		p[i] += step
		pts = append(pts, p)
	}
	fv := make([]float64, n+1)
	for i := range pts {
		fv[i] = f(pts[i])
	}
	for it := 0; it < maxIter; it++ {
		ord := make([]int, n+1)
		for i := range ord {
			ord[i] = i
		}
		sort.Slice(ord, func(a, b int) bool { return fv[ord[a]] < fv[ord[b]] })
		np := make([][]float64, n+1)
		nf := make([]float64, n+1)
		for i, o := range ord {
			np[i] = pts[o]
			nf[i] = fv[o]
		}
		pts, fv = np, nf
		if math.Abs(fv[n]-fv[0]) < tol {
			break
		}
		c := make([]float64, n) // centroid of best n points
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				c[j] += pts[i][j] / float64(n)
			}
		}
		xr := make([]float64, n) // reflect
		for j := range xr {
			xr[j] = c[j] + (c[j] - pts[n][j])
		}
		fr := f(xr)
		if fr < fv[0] {
			xe := make([]float64, n) // expand
			for j := range xe {
				xe[j] = c[j] + 2*(c[j]-pts[n][j])
			}
			if fe := f(xe); fe < fr {
				pts[n], fv[n] = xe, fe
			} else {
				pts[n], fv[n] = xr, fr
			}
		} else if fr < fv[n-1] {
			pts[n], fv[n] = xr, fr
		} else {
			xc := make([]float64, n) // contract
			for j := range xc {
				xc[j] = c[j] + 0.5*(pts[n][j]-c[j])
			}
			if fc := f(xc); fc < fv[n] {
				pts[n], fv[n] = xc, fc
			} else { // shrink toward best
				for i := 1; i <= n; i++ {
					for j := 0; j < n; j++ {
						pts[i][j] = pts[0][j] + 0.5*(pts[i][j]-pts[0][j])
					}
					fv[i] = f(pts[i])
				}
			}
		}
	}
	return pts[0]
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + (v[1]-2)*(v[1]-2) }
	fmt.Println(nelderMead(f, []float64{0, 0}, 0.5, 1e-10, 400)) // -> [1 2]
}
`,qn=`# Nelder-Mead downhill simplex minimization.
function nelder_mead(f, x0; step = 0.5, tol = 1e-10, max_iter = 400)
    n = length(x0)
    pts = [float.(x0)]
    for i in 1:n
        p = float.(x0); p[i] += step; push!(pts, p)
    end
    fv = [f(p) for p in pts]
    for _ in 1:max_iter
        ord = sortperm(fv)
        pts, fv = pts[ord], fv[ord]
        abs(fv[end] - fv[1]) < tol && break
        c = sum(pts[1:end-1]) / n                  # centroid of best n points
        xr = c + (c - pts[end]); fr = f(xr)        # reflect
        if fr < fv[1]
            xe = c + 2*(c - pts[end]); fe = f(xe)  # expand
            pts[end], fv[end] = fe < fr ? (xe, fe) : (xr, fr)
        elseif fr < fv[end-1]
            pts[end], fv[end] = xr, fr
        else
            xc = c + 0.5*(pts[end] - c); fc = f(xc)  # contract
            if fc < fv[end]
                pts[end], fv[end] = xc, fc
            else                                     # shrink toward best
                for i in 2:n+1
                    pts[i] = pts[1] + 0.5*(pts[i] - pts[1]); fv[i] = f(pts[i])
                end
            end
        end
    end
    return pts[1]
end
f = v -> (v[1] - 1)^2 + (v[2] - 2)^2
println(nelder_mead(f, [0.0, 0.0]))               # -> [1, 2]
`,Hn=`// Nelder-Mead downhill simplex minimization.
function nelderMead(f, x0, step = 0.5, tol = 1e-10, maxIter = 400) {
  const n = x0.length;
  let pts = [[...x0]];
  for (let i = 0; i < n; i++) {
    const p = [...x0]; p[i] += step; pts.push(p);
  }
  let fv = pts.map((p) => f(p));
  for (let it = 0; it < maxIter; it++) {
    const ord = [...Array(n + 1).keys()].sort((a, b) => fv[a] - fv[b]);
    pts = ord.map((i) => pts[i]);
    fv = ord.map((i) => fv[i]);
    if (Math.abs(fv[n] - fv[0]) < tol) break;
    const c = Array(n).fill(0);                         // centroid of best n points
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += pts[i][j] / n;
    const xr = c.map((cj, j) => cj + (cj - pts[n][j]));  // reflect
    const fr = f(xr);
    if (fr < fv[0]) {
      const xe = c.map((cj, j) => cj + 2 * (cj - pts[n][j]));  // expand
      const fe = f(xe);
      if (fe < fr) { pts[n] = xe; fv[n] = fe; } else { pts[n] = xr; fv[n] = fr; }
    } else if (fr < fv[n - 1]) {
      pts[n] = xr; fv[n] = fr;
    } else {
      const xc = c.map((cj, j) => cj + 0.5 * (pts[n][j] - cj));  // contract
      const fc = f(xc);
      if (fc < fv[n]) { pts[n] = xc; fv[n] = fc; }
      else {                                            // shrink toward best
        for (let i = 1; i <= n; i++) {
          pts[i] = pts[i].map((pij, j) => pts[0][j] + 0.5 * (pij - pts[0][j]));
          fv[i] = f(pts[i]);
        }
      }
    }
  }
  return pts[0];
}

const f = (v) => (v[0] - 1) ** 2 + (v[1] - 2) ** 2;
console.log(nelderMead(f, [0, 0]));                     // -> [1, 2]
`,Mn=`function x = nelder_mead(f, x0, step, tol, max_iter)
% NELDER_MEAD  Downhill simplex minimization.
    if nargin < 3, step = 0.5; end
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 400; end
    x0 = x0(:)'; n = numel(x0);
    P = [x0; ones(n,1)*x0 + step*eye(n)];         % (n+1) x n simplex
    fv = arrayfun(@(i) f(P(i,:)'), 1:n+1)';
    for it = 1:max_iter
        [fv, idx] = sort(fv); P = P(idx, :);
        if fv(end) - fv(1) < tol, break; end
        c = sum(P(1:n, :), 1) / n;
        xr = c + (c - P(end,:)); fr = f(xr');       % reflect
        if fr < fv(1)
            xe = c + 2*(c - P(end,:)); fe = f(xe');  % expand
            if fe < fr, P(end,:) = xe; fv(end) = fe; else, P(end,:) = xr; fv(end) = fr; end
        elseif fr < fv(end-1)
            P(end,:) = xr; fv(end) = fr;
        else
            xc = c + 0.5*(P(end,:) - c); fc = f(xc'); % contract
            if fc < fv(end)
                P(end,:) = xc; fv(end) = fc;
            else
                for i = 2:n+1, P(i,:) = P(1,:) + 0.5*(P(i,:) - P(1,:)); fv(i) = f(P(i,:)'); end
            end
        end
    end
    x = P(1, :)';
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
disp(nelder_mead(f, [0; 0])');
`,Nn=`import numpy as np


def nelder_mead(f, x0, step=0.5, tol=1e-10, max_iter=400):
    """Nelder-Mead downhill simplex minimization."""
    x0 = np.array(x0, float)
    n = len(x0)
    pts = [x0] + [x0 + step * np.eye(n)[i] for i in range(n)]
    fv = [f(p) for p in pts]
    for _ in range(max_iter):
        idx = np.argsort(fv)
        pts = [pts[i] for i in idx]; fv = [fv[i] for i in idx]
        if abs(fv[-1] - fv[0]) < tol:
            break
        c = np.mean(pts[:-1], axis=0)                 # centroid of best n points
        xr = c + (c - pts[-1]); fr = f(xr)            # reflect
        if fr < fv[0]:
            xe = c + 2 * (c - pts[-1]); fe = f(xe)    # expand
            pts[-1], fv[-1] = (xe, fe) if fe < fr else (xr, fr)
        elif fr < fv[-2]:
            pts[-1], fv[-1] = xr, fr
        else:
            xc = c + 0.5 * (pts[-1] - c); fc = f(xc)  # contract
            if fc < fv[-1]:
                pts[-1], fv[-1] = xc, fc
            else:                                     # shrink toward best
                for i in range(1, n + 1):
                    pts[i] = pts[0] + 0.5 * (pts[i] - pts[0]); fv[i] = f(pts[i])
    return pts[0]


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + (v[1] - 2) ** 2
    print(nelder_mead(f, [0, 0]))                     # -> (1, 2)
`,Sn=`# Nelder-Mead downhill simplex minimization.
nelder_mead <- function(f, x0, step = 0.5, tol = 1e-10, max_iter = 400) {
  x0 <- as.numeric(x0)
  n <- length(x0)
  pts <- vector("list", n + 1)
  pts[[1]] <- x0
  for (i in 1:n) {
    e <- rep(0, n); e[i] <- step
    pts[[i + 1]] <- x0 + e
  }
  fv <- sapply(pts, f)
  for (iter in 1:max_iter) {
    idx <- order(fv)
    pts <- pts[idx]
    fv <- fv[idx]
    if (abs(fv[n + 1] - fv[1]) < tol) break
    c <- Reduce(\`+\`, pts[1:n]) / n                # centroid of best n points
    worst <- pts[[n + 1]]
    xr <- c + (c - worst); fr <- f(xr)            # reflect
    if (fr < fv[1]) {
      xe <- c + 2 * (c - worst); fe <- f(xe)      # expand
      if (fe < fr) { pts[[n + 1]] <- xe; fv[n + 1] <- fe }
      else { pts[[n + 1]] <- xr; fv[n + 1] <- fr }
    } else if (fr < fv[n]) {
      pts[[n + 1]] <- xr; fv[n + 1] <- fr
    } else {
      xc <- c + 0.5 * (worst - c); fc <- f(xc)    # contract
      if (fc < fv[n + 1]) {
        pts[[n + 1]] <- xc; fv[n + 1] <- fc
      } else {                                    # shrink toward best
        for (i in 2:(n + 1)) {
          pts[[i]] <- pts[[1]] + 0.5 * (pts[[i]] - pts[[1]])
          fv[i] <- f(pts[[i]])
        }
      }
    }
  }
  pts[[1]]
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + (v[2] - 2)^2
  print(nelder_mead(f, c(0, 0)))                  # -> (1, 2)
}
`,In=`// Nelder-Mead downhill simplex minimization.
fn nelder_mead<F: Fn(&[f64]) -> f64>(
    f: F, x0: &[f64], step: f64, tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut pts: Vec<Vec<f64>> = vec![x0.to_vec()];
    for i in 0..n {
        let mut p = x0.to_vec(); p[i] += step; pts.push(p);
    }
    let mut fv: Vec<f64> = pts.iter().map(|p| f(p)).collect();
    for _ in 0..max_iter {
        let mut ord: Vec<usize> = (0..=n).collect();
        ord.sort_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap());
        pts = ord.iter().map(|&i| pts[i].clone()).collect();
        fv = ord.iter().map(|&i| fv[i]).collect();
        if (fv[n] - fv[0]).abs() < tol { break; }
        let mut c = vec![0.0; n];                       // centroid of best n points
        for p in pts.iter().take(n) { for j in 0..n { c[j] += p[j] / n as f64; } }
        let xr: Vec<f64> = (0..n).map(|j| c[j] + (c[j] - pts[n][j])).collect();  // reflect
        let fr = f(&xr);
        if fr < fv[0] {
            let xe: Vec<f64> = (0..n).map(|j| c[j] + 2.0 * (c[j] - pts[n][j])).collect();  // expand
            let fe = f(&xe);
            if fe < fr { pts[n] = xe; fv[n] = fe; } else { pts[n] = xr; fv[n] = fr; }
        } else if fr < fv[n - 1] {
            pts[n] = xr; fv[n] = fr;
        } else {
            let xc: Vec<f64> = (0..n).map(|j| c[j] + 0.5 * (pts[n][j] - c[j])).collect();  // contract
            let fc = f(&xc);
            if fc < fv[n] { pts[n] = xc; fv[n] = fc; }
            else {                                       // shrink toward best
                for i in 1..=n {
                    pts[i] = (0..n).map(|j| pts[0][j] + 0.5 * (pts[i][j] - pts[0][j])).collect();
                    fv[i] = f(&pts[i]);
                }
            }
        }
    }
    pts[0].clone()
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + (v[1] - 2.0).powi(2);
    println!("{:?}", nelder_mead(f, &[0.0, 0.0], 0.5, 1e-10, 400));   // -> [1, 2]
}
`,Fn=`(* Nelder-Mead downhill simplex minimization. *)
nelderMead[f_, x0_, step_ : 0.5, tol_ : 10^-10, maxIter_ : 400] := Module[
   {n = Length[x0], pts, fv, ord, c, xr, fr, xe, fe, xc, fc, it},
   pts = Prepend[Table[N[x0] + step UnitVector[n, i], {i, n}], N[x0]];
   fv = f /@ pts;
   Do[
      ord = Ordering[fv];
      pts = pts[[ord]]; fv = fv[[ord]];
      If[Abs[fv[[-1]] - fv[[1]]] < tol, Break[]];
      c = Mean[pts[[1 ;; n]]];                       (* centroid of best n points *)
      xr = c + (c - pts[[-1]]); fr = f[xr];          (* reflect *)
      Which[
         fr < fv[[1]],
            xe = c + 2 (c - pts[[-1]]); fe = f[xe];   (* expand *)
            If[fe < fr, {pts[[-1]], fv[[-1]]} = {xe, fe}, {pts[[-1]], fv[[-1]]} = {xr, fr}],
         fr < fv[[-2]],
            {pts[[-1]], fv[[-1]]} = {xr, fr},
         True,
            xc = c + 0.5 (pts[[-1]] - c); fc = f[xc]; (* contract *)
            If[fc < fv[[-1]],
               {pts[[-1]], fv[[-1]]} = {xc, fc},
               Do[pts[[i]] = pts[[1]] + 0.5 (pts[[i]] - pts[[1]]); fv[[i]] = f[pts[[i]]], {i, 2, n + 1}]]
      ],
      {it, maxIter}];
   pts[[1]]];
f[v_] := (v[[1]] - 1)^2 + (v[[2]] - 2)^2;
Print[nelderMead[f, {0, 0}]]                         (* -> {1, 2} *)
`,Pn=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }
Vec matvec(const Mat& M, const Vec& v) { int n = M.size(); Vec r(n, 0); for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) r[i] += M[i][j] * v[j]; return r; }

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
Vec sr1(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;       // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d = matvec(H, g); for (double& di : d) di = -di;            // d = -H g
        if (dot(g, d) >= 0) {                                           // safeguard: SR1 may lose definiteness
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = (i == j);
            d = g; for (double& di : d) di = -di;
        }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        Vec Hy = matvec(H, y), w(n);
        for (int i = 0; i < n; ++i) w[i] = s[i] - Hy[i];               // secant-condition residual
        double wy = dot(w, y);
        if (fabs(wy) > 1e-12) {                                        // SR1 inverse update (rank one)
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] += w[i] * w[j] / wy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = sr1(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,Bn=`program sr1_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = sr1([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
  function sr1(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n), Hy(n), w(n)
    real(8) :: Hm(n,n), Im(n,n)
    real(8) :: t, fx, gd, wy
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       if (dot_product(g, d) >= 0d0) then    ! safeguard: SR1 may lose definiteness
          Hm = Im; d = -g
       end if
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       Hy = matmul(Hm, y)
       w = s - Hy                            ! secant-condition residual
       wy = dot_product(w, y)
       if (abs(wy) > 1d-12) then             ! SR1 inverse update (rank one)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hm(i,j) + w(i)*w(j)/wy
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function sr1
end program sr1_demo
`,Dn=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

func matvec(M [][]float64, v []float64) []float64 {
	r := make([]float64, len(M))
	for i := range M {
		r[i] = dot(M[i], v)
	}
	return r
}

func eye(n int) [][]float64 {
	H := make([][]float64, n)
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	return H
}

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
func sr1(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := eye(n) // inverse-Hessian estimate
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := matvec(H, g)
		for i := range d {
			d[i] = -d[i]
		}
		if dot(g, d) >= 0 { // safeguard: SR1 may lose definiteness
			H = eye(n)
			d = make([]float64, n)
			for i := range d {
				d[i] = -g[i]
			}
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		Hy := matvec(H, y)
		w := make([]float64, n)
		for i := range w {
			w[i] = s[i] - Hy[i] // secant-condition residual
		}
		wy := dot(w, y)
		if math.Abs(wy) > 1e-12 { // SR1 inverse update (rank one)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					H[i][j] += w[i] * w[j] / wy
				}
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(sr1(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
`,Vn=`using LinearAlgebra
# SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
function sr1(f, grad, x0; tol = 1e-8, max_iter = 200)
    x = float.(x0)
    n = length(x)
    H = Matrix{Float64}(I, n, n)                 # inverse-Hessian estimate
    g = grad(x)
    for k in 1:max_iter
        norm(g) < tol && return x
        d = -H * g
        if g ⋅ d >= 0                            # safeguard: SR1 may lose definiteness
            H = Matrix{Float64}(I, n, n); d = -g
        end
        t = 1.0
        fx, gd = f(x), g ⋅ d
        while f(x + t*d) > fx + 1e-4 * t * gd
            t /= 2
        end
        s = t * d
        x_new = x + s
        g_new = grad(x_new)
        y = g_new - g
        w = s - H * y                            # secant-condition residual
        wy = w ⋅ y
        if abs(wy) > 1e-12                       # SR1 inverse update (rank one)
            H = H + (w*w')/wy
        end
        x, g = x_new, g_new
    end
    return x
end
f = v -> (v[1] - 1)^2 + 5*(v[2] - 2)^2
g = v -> [2*(v[1] - 1), 10*(v[2] - 2)]
println(sr1(f, g, [0.0, 0.0]))                  # -> [1, 2]
`,En=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const matvec = (M, v) => M.map((row) => dot(row, v));

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
function sr1(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  const eye = () => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let x = [...x0];
  let H = eye();                                       // inverse-Hessian estimate
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    let d = matvec(H, g).map((v) => -v);              // d = -H g
    if (dot(g, d) >= 0) { H = eye(); d = g.map((v) => -v); }   // safeguard: SR1 may lose definiteness
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const Hy = matvec(H, y);
    const w = s.map((si, i) => si - Hy[i]);           // secant-condition residual
    const wy = dot(w, y);
    if (Math.abs(wy) > 1e-12) {                        // SR1 inverse update (rank one)
      H = H.map((row, i) => row.map((hij, j) => hij + (w[i] * w[j]) / wy));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(sr1(f, g, [0, 0]));                        // -> [1, 2]
`,Wn=`function [x, k] = sr1(f, grad, x0, tol, max_iter)
% SR1  Symmetric Rank-One quasi-Newton minimization (inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: SR1 may lose definiteness
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g;
        w = s - H*y; wy = w'*y;                         % residual of the secant condition
        if abs(wy) > 1e-12
            H = H + (w*w')/wy;                          % SR1 inverse update (rank one)
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(sr1(f, grad, [0; 0])');                            % -> 1 2
`,Rn=`import numpy as np


def sr1(f, grad, x0, tol=1e-8, max_iter=200):
    """SR1 (Symmetric Rank-One) quasi-Newton minimization, inverse-Hessian form."""
    x = np.array(x0, float)
    n = len(x)
    H = np.eye(n)                                     # inverse-Hessian estimate
    g = np.array(grad(x), float)
    for k in range(1, max_iter + 1):
        if np.linalg.norm(g) < tol:
            return x, k
        d = -H @ g
        if g @ d >= 0:                               # safeguard: SR1 may lose definiteness
            H, d = np.eye(n), -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):
            t *= 0.5
        s = t * d
        x_new = x + s
        g_new = np.array(grad(x_new), float)
        y = g_new - g
        w = s - H @ y                                # residual of the secant condition
        wy = w @ y
        if abs(wy) > 1e-12:                          # SR1 inverse update (rank one)
            H = H + np.outer(w, w) / wy
        x, g = x_new, g_new
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(sr1(f, grad, [0, 0]))                      # -> (1, 2)
`,Gn=`# SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
sr1 <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    if (sum(g * d) >= 0) {                        # safeguard: SR1 may lose definiteness
      H <- diag(n); d <- -g
    }
    t <- 1.0
    fx <- f(x); gd <- sum(g * d)
    while (f(x + t * d) > fx + 1e-4 * t * gd) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    Hy <- as.numeric(H %*% y)
    w <- s - Hy                                   # secant-condition residual
    wy <- sum(w * y)
    if (abs(wy) > 1e-12) {                        # SR1 inverse update (rank one)
      H <- H + outer(w, w) / wy
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- sr1(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,Cn=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }
fn matvec(m: &[Vec<f64>], v: &[f64]) -> Vec<f64> { m.iter().map(|row| dot(row, v)).collect() }

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
fn sr1<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];                    // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let mut d: Vec<f64> = matvec(&h, &g).iter().map(|v| -v).collect();   // d = -H g
        if dot(&g, &d) >= 0.0 {                           // safeguard: SR1 may lose definiteness
            h = vec![vec![0.0; n]; n]; for i in 0..n { h[i][i] = 1.0; }
            d = g.iter().map(|v| -v).collect();
        }
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let hy = matvec(&h, &y);
        let w: Vec<f64> = (0..n).map(|i| s[i] - hy[i]).collect();            // secant-condition residual
        let wy = dot(&w, &y);
        if wy.abs() > 1e-12 {                             // SR1 inverse update (rank one)
            for i in 0..n { for j in 0..n { h[i][j] += w[i] * w[j] / wy; }}
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", sr1(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
`,Ln=`(* SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form). *)
sr1[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 200] := Module[
   {x = N[x0], n = Length[x0], H, g, d, t, fx, gd, s, xNew, gNew, y, w, wy, Id, k},
   Id = IdentityMatrix[n];
   H = Id;                                        (* inverse-Hessian estimate *)
   g = grad[x];
   Do[
      If[Norm[g] < tol, Return[x]];
      d = -H.g;
      If[g.d >= 0, H = Id; d = -g];               (* safeguard: SR1 may lose definiteness *)
      fx = f[x]; gd = g.d; t = 1.;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      s = t d; xNew = x + s; gNew = grad[xNew];
      y = gNew - g;
      w = s - H.y; wy = w.y;                       (* secant-condition residual *)
      If[Abs[wy] > 10^-12,                         (* SR1 inverse update (rank one) *)
         H = H + Outer[Times, w, w]/wy];
      x = xNew; g = gNew,
      {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[sr1[f, g, {0, 0}]]                          (* -> {1, 2} *)
`,Kn=`#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }

// Steepest descent with backtracking (Armijo) line search.
Vec steepest_descent(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 1000) {
    int n = x.size();
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        Vec d(n); for (int i = 0; i < n; ++i) d[i] = -g[i];
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double s) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + s * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        x = step(t);
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = steepest_descent(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\\n";
}
`,On=`program steepest_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), d(n), t, fx, gd
  integer :: k
  x = [0d0, 0d0]
  do k = 1, 1000
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-8) exit
     d = -g; t = 1d0; fx = f(x); gd = dot_product(g, d)
     do while (f(x + t*d) > fx + 1d-4*t*gd)
        t = t/2d0
     end do
     x = x + t*d
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  real(8) function f(v)
    real(8), intent(in) :: v(n)
    f = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
end program steepest_demo
`,Un=`package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

// Steepest descent with backtracking (Armijo) line search.
func steepestDescent(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		d := make([]float64, n)
		gd := 0.0
		for i := range g {
			d[i] = -g[i]
			gd += g[i] * d[i]
		}
		fx := f(x)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		x = step(t)
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(steepestDescent(f, g, []float64{0, 0}, 1e-8, 1000))
}
`,Qn=`nrm(v) = sqrt(sum(abs2, v))
function steepest_descent(f, grad, x0; tol = 1e-8, max_iter = 1000)
    x = float.(x0)
    for k in 1:max_iter
        g = grad(x)
        nrm(g) < tol && return x
        d = -g; t = 1.0; fx = f(x); gd = sum(g .* d)
        while f(x .+ t .* d) > fx + 1e-4 * t * gd          # Armijo line search
            t /= 2
        end
        x = x .+ t .* d
    end
    return x
end
f(v) = (v[1] - 1)^2 + 5*(v[2] - 2)^2
g(v) = [2*(v[1] - 1), 10*(v[2] - 2)]
println(steepest_descent(f, g, [0.0, 0.0]))   # [1, 2]
`,Jn=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
// Steepest descent with backtracking (Armijo) line search.
function steepestDescent(f, grad, x0, tol = 1e-8, maxIter = 1000) {
  const n = x0.length;
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    const d = g.map((v) => -v);
    const fx = f(x), gd = g.reduce((s, v, i) => s + v * d[i], 0);
    let t = 1;
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    x = step(t);
  }
  return x;
}
const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(steepestDescent(f, g, [0, 0]));
`,Yn=`function [x, k] = steepest_descent(f, grad, x0, tol, max_iter)
% STEEPEST_DESCENT  Steepest descent with Armijo backtracking line search.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 1000; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        d = -g; t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        x = x + t*d;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(steepest_descent(f, grad, [0; 0])');
`,Zn=`import numpy as np


def steepest_descent(f, grad, x0, tol=1e-8, max_iter=1000):
    """Steepest descent with backtracking (Armijo) line search."""
    x = np.array(x0, float)
    for k in range(1, max_iter + 1):
        g = np.array(grad(x), float)
        if np.linalg.norm(g) < tol:
            return x, k
        d = -g
        t = 1.0
        while f(x + t * d) > f(x) + 1e-4 * t * (g @ d):   # Armijo condition
            t *= 0.5
        x = x + t * d
    return x, max_iter


if __name__ == "__main__":
    f = lambda v: (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2
    grad = lambda v: np.array([2 * (v[0] - 1), 10 * (v[1] - 2)])
    print(steepest_descent(f, grad, [0, 0]))          # -> (1, 2)
`,Xn=`# Steepest descent with backtracking (Armijo) line search.
steepest_descent <- function(f, grad, x0, tol = 1e-8, max_iter = 1000) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- -g
    t <- 1.0
    while (f(x + t * d) > f(x) + 1e-4 * t * sum(g * d)) {   # Armijo condition
      t <- t * 0.5
    }
    x <- x + t * d
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- steepest_descent(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\\n")   # -> (1, 2)
}
`,ea=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
// Steepest descent with backtracking (Armijo) line search.
fn steepest_descent<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        let d: Vec<f64> = g.iter().map(|v| -v).collect();
        let fx = f(&x);
        let gd: f64 = g.iter().zip(&d).map(|(a, b)| a * b).sum();
        let mut t = 1.0;
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        x = step(t);
    }
    x
}
fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let g = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", steepest_descent(f, g, &[0.0, 0.0], 1e-8, 1000));
}
`,ta=`steepestDescent[f_, grad_, x0_, tol_ : 10^-8, maxIter_ : 1000] := Module[{x = N[x0], g, d, t, fx, gd, k},
   Do[g = grad[x];
      If[Norm[g] < tol, Return[x]];
      d = -g; t = 1.; fx = f[x]; gd = g.d;
      While[f[x + t d] > fx + 1*^-4 t gd, t /= 2];
      x = x + t d, {k, maxIter}];
   x];
f[v_] := (v[[1]] - 1)^2 + 5 (v[[2]] - 2)^2;
g[v_] := {2 (v[[1]] - 1), 10 (v[[2]] - 2)};
Print[steepestDescent[f, g, {0, 0}]]
`,na=Object.assign({"./bfgs.cpp":Xe,"./bfgs.f90":et,"./bfgs.go":tt,"./bfgs.jl":nt,"./bfgs.js":at,"./bfgs.m":it,"./bfgs.py":st,"./bfgs.r":rt,"./bfgs.rs":ot,"./bfgs.wl":mt,"./broyden.cpp":lt,"./broyden.f90":ht,"./broyden.go":ft,"./broyden.jl":dt,"./broyden.js":bt,"./broyden.m":$t,"./broyden.py":ct,"./broyden.r":pt,"./broyden.rs":kt,"./broyden.wl":gt,"./dfp.cpp":ut,"./dfp.f90":xt,"./dfp.go":vt,"./dfp.jl":yt,"./dfp.js":zt,"./dfp.m":_t,"./dfp.py":wt,"./dfp.r":jt,"./dfp.rs":At,"./dfp.wl":Tt,"./golden.cpp":qt,"./golden.f90":Ht,"./golden.go":Mt,"./golden.jl":Nt,"./golden.js":St,"./golden.m":It,"./golden.py":Ft,"./golden.r":Pt,"./golden.rs":Bt,"./golden.wl":Dt,"./gradient.cpp":Vt,"./gradient.f90":Et,"./gradient.go":Wt,"./gradient.jl":Rt,"./gradient.js":Gt,"./gradient.m":Ct,"./gradient.py":Lt,"./gradient.r":Kt,"./gradient.rs":Ot,"./gradient.wl":Ut,"./newton.cpp":Qt,"./newton.f90":Jt,"./newton.go":Yt,"./newton.jl":Zt,"./newton.js":Xt,"./newton.m":en,"./newton.py":tn,"./newton.r":nn,"./newton.rs":an,"./newton.wl":sn,"./psb.cpp":rn,"./psb.f90":on,"./psb.go":mn,"./psb.jl":ln,"./psb.js":hn,"./psb.m":fn,"./psb.py":dn,"./psb.r":bn,"./psb.rs":$n,"./psb.wl":cn,"./simplex-basic.cpp":pn,"./simplex-basic.f90":kn,"./simplex-basic.go":gn,"./simplex-basic.jl":un,"./simplex-basic.js":xn,"./simplex-basic.m":vn,"./simplex-basic.py":yn,"./simplex-basic.r":zn,"./simplex-basic.rs":_n,"./simplex-basic.wl":wn,"./simplex.cpp":jn,"./simplex.f90":An,"./simplex.go":Tn,"./simplex.jl":qn,"./simplex.js":Hn,"./simplex.m":Mn,"./simplex.py":Nn,"./simplex.r":Sn,"./simplex.rs":In,"./simplex.wl":Fn,"./sr1.cpp":Pn,"./sr1.f90":Bn,"./sr1.go":Dn,"./sr1.jl":Vn,"./sr1.js":En,"./sr1.m":Wn,"./sr1.py":Rn,"./sr1.r":Gn,"./sr1.rs":Cn,"./sr1.wl":Ln,"./steepest.cpp":Kn,"./steepest.f90":On,"./steepest.go":Un,"./steepest.jl":Qn,"./steepest.js":Jn,"./steepest.m":Yn,"./steepest.py":Zn,"./steepest.r":Xn,"./steepest.rs":ea,"./steepest.wl":ta}),M=(e,n)=>na[`./${e}.${n}`],aa={golden:{en:"Golden-section search",hu:"Aranymetszéses keresés"},simplex:{en:"Nelder–Mead simplex",hu:"Nelder–Mead-szimplex"},"simplex-basic":{en:"Basic simplex method (fixed shape)",hu:"Alap szimplex-módszer (rögzített alak)"},gradient:{en:"Gradient descent (constant step)",hu:"Gradiens-módszer (állandó lépés)"},newton:{en:"Newton minimization",hu:"Newton-minimalizálás"},steepest:{en:"Steepest descent (line search)",hu:"Legmeredekebb csökkenés (vonalmenti keresés)"},bfgs:{en:"BFGS quasi-Newton",hu:"BFGS kvázi-Newton"},dfp:{en:"DFP quasi-Newton (Davidon–Fletcher–Powell)",hu:"DFP kvázi-Newton (Davidon–Fletcher–Powell)"},sr1:{en:"SR1 quasi-Newton (symmetric rank-one)",hu:"SR1 kvázi-Newton (szimmetrikus rang-egy)"},psb:{en:"PSB quasi-Newton (Powell-symmetric-Broyden)",hu:"PSB kvázi-Newton (Powell-szimmetrikus-Broyden)"},broyden:{en:"Broyden's method (optimization, rank-one)",hu:"Broyden-módszer (optimalizálás, rang-egy)"}},ia=e=>({id:e,caption:aa[e],snippets:{matlab:M(e,"m"),python:M(e,"py"),cpp:M(e,"cpp"),julia:M(e,"jl"),rust:M(e,"rs"),fortran:M(e,"f90"),wolfram:M(e,"wl"),javascript:M(e,"js"),go:M(e,"go"),r:M(e,"r")}}),sa={golden:["golden"],simplex:["simplex","simplex-basic"],gradient:["gradient"],newton:["newton"],linsys:["steepest"],quasinewton:["bfgs","dfp","sr1","psb","broyden"]};function ra(e){return(sa[e]??[]).map(ia)}const oa={calculus:[{id:"q-calculus-1",prompt:{en:"Let f : ℝⁿ → ℝ be differentiable with a local extremum at a point a. What condition must hold at a?",hu:"Legyen f : ℝⁿ → ℝ differenciálható, lokális szélsőértékkel egy a pontban. Milyen feltételnek kell teljesülnie a-ban?"},options:[{en:"The Hessian is negative definite at a",hu:"A Hesse-mátrix negatív definit a-ban"},{en:"The gradient is undefined at a",hu:"A gradiens nem definiált a-ban"},{en:"All partial derivatives ∂f/∂xᵢ(a) = 0",hu:"Minden parciális derivált ∂f/∂xᵢ(a) = 0"},{en:"f''(a) = 0",hu:"f''(a) = 0"}],answer:2,explanation:{en:"At an interior local extremum the gradient vanishes, i.e. every first partial derivative is zero.",hu:"Egy belső lokális szélsőértékben a gradiens eltűnik, azaz minden első parciális derivált nulla."}},{id:"q-calculus-2",prompt:{en:"What type of matrix is the Hessian matrix?",hu:"Milyen típusú mátrix a Hesse-mátrix?"},options:[{en:"A matrix of function values",hu:"Függvényértékek mátrixa"},{en:"A matrix of first partial derivatives",hu:"Első parciális deriváltak mátrixa"},{en:"A matrix of tangent slopes",hu:"Érintőmeredekségek mátrixa"},{en:"A matrix of second partial derivatives",hu:"Második parciális deriváltak mátrixa"}],answer:3,explanation:{en:"The Hessian collects all second-order partial derivatives ∂²f/∂xᵢ∂xⱼ.",hu:"A Hesse-mátrix az összes másodrendű parciális deriváltat ∂²f/∂xᵢ∂xⱼ tartalmazza."}},{id:"q-calculus-3",prompt:{en:"Which of the following best describes the entries of the Hessian matrix?",hu:"Az alábbiak közül melyik írja le legjobban a Hesse-mátrix elemeit?"},options:[{en:"∂²f/∂xᵢ∂xⱼ",hu:"∂²f/∂xᵢ∂xⱼ"},{en:"∇f",hu:"∇f"},{en:"∂f/∂xᵢ",hu:"∂f/∂xᵢ"},{en:"f(xᵢ)",hu:"f(xᵢ)"}],answer:0,explanation:{en:"Each entry of the Hessian is a second mixed partial derivative ∂²f/∂xᵢ∂xⱼ.",hu:"A Hesse-mátrix minden eleme egy második vegyes parciális derivált ∂²f/∂xᵢ∂xⱼ."}},{id:"q-calculus-4",prompt:{en:"For a twice continuously differentiable f(x,y) at a critical point (a,b), which indicates a local maximum (D is the Hessian determinant)?",hu:"Egy kétszer folytonosan differenciálható f(x,y)-ra egy (a,b) kritikus pontban melyik jelez lokális maximumot (D a Hesse-determináns)?"},options:[{en:"D(a,b) = 0",hu:"D(a,b) = 0"},{en:"D(a,b) > 0 and ∂²f/∂x²(a,b) > 0",hu:"D(a,b) > 0 és ∂²f/∂x²(a,b) > 0"},{en:"D(a,b) > 0 and ∂²f/∂x²(a,b) < 0",hu:"D(a,b) > 0 és ∂²f/∂x²(a,b) < 0"},{en:"D(a,b) < 0",hu:"D(a,b) < 0"}],answer:2,explanation:{en:"D > 0 with negative second derivative in x means the Hessian is negative definite → local maximum.",hu:"D > 0 negatív x-szerinti második deriválttal azt jelenti, hogy a Hesse-mátrix negatív definit → lokális maximum."}},{id:"q-calculus-5",prompt:{en:"If the determinant D(a,b) < 0 at a critical point (where both first partials vanish), then:",hu:"Ha a D(a,b) determináns < 0 egy kritikus pontban (ahol mindkét első parciális derivált eltűnik), akkor:"},options:[{en:"f has no extremum at (a,b)",hu:"f-nek nincs szélsőértéke (a,b)-ben"},{en:"f has a local minimum at (a,b)",hu:"f-nek lokális minimuma van (a,b)-ben"},{en:"The Hessian is positive definite",hu:"A Hesse-mátrix pozitív definit"},{en:"f has a local maximum at (a,b)",hu:"f-nek lokális maximuma van (a,b)-ben"}],answer:0,explanation:{en:"A negative Hessian determinant indicates a saddle point — no extremum.",hu:"A negatív Hesse-determináns nyeregpontot jelez — nincs szélsőérték."}}],golden:[{id:"q-golden-1",prompt:{en:"If f(x) > f(y) during Golden Section Search (with a < x < y < b), which interval is chosen next?",hu:"Ha f(x) > f(y) az aranymetszéses keresés során (a < x < y < b mellett), melyik intervallumot választjuk a következőként?"},options:[{en:"[a, x]",hu:"[a, x]"},{en:"[a, y]",hu:"[a, y]"},{en:"[x, b]",hu:"[x, b]"},{en:"[y, b]",hu:"[y, b]"}],answer:2,explanation:{en:"A larger value at the left interior point x means the minimum lies to the right, so the bracket becomes [x, b].",hu:"A bal belső x pontban vett nagyobb érték azt jelenti, hogy a minimum jobbra van, így az intervallum [x, b] lesz."}},{id:"q-golden-2",prompt:{en:"What is the formula for the number of steps needed to reach a tolerance ε in Golden Section Search?",hu:"Mi a képlete az ε tűréshatár eléréséhez szükséges lépésszámnak az aranymetszéses keresésben?"},options:[{en:"n = log ε / log 2",hu:"n = log ε / log 2"},{en:"n = (b − a) / ε",hu:"n = (b − a) / ε"},{en:"n = log( ε / (b−a) ) / log r",hu:"n = log( ε / (b−a) ) / log r"},{en:"n = ε / (b − a)",hu:"n = ε / (b − a)"}],answer:2,explanation:{en:"The interval shrinks by factor r each step, so n = log(ε/(b−a)) / log r.",hu:"Az intervallum minden lépésben r tényezővel zsugorodik, így n = log(ε/(b−a)) / log r."}},{id:"q-golden-3",prompt:{en:"What type of function is required for the Golden Section Search to work?",hu:"Milyen típusú függvény szükséges ahhoz, hogy az aranymetszéses keresés működjön?"},options:[{en:"Piecewise function",hu:"Szakaszonkénti függvény"},{en:"Unimodal function",hu:"Unimodális függvény"},{en:"Multivariable function",hu:"Többváltozós függvény"},{en:"Periodic function",hu:"Periodikus függvény"}],answer:1,explanation:{en:"Golden Section Search needs a unimodal function on the interval (one minimum).",hu:"Az aranymetszéses keresés unimodális függvényt igényel az intervallumon (egyetlen minimummal)."}},{id:"q-golden-4",prompt:{en:"Which equation defines the golden ratio r used in the method?",hu:"Melyik egyenlet definiálja a módszerben használt r aranymetszést?"},options:[{en:"r = log(2)",hu:"r = log(2)"},{en:"r² + r − 1 = 0",hu:"r² + r − 1 = 0"},{en:"r² − r + 1 = 0",hu:"r² − r + 1 = 0"},{en:"r² = r + 1",hu:"r² = r + 1"}],answer:1,explanation:{en:"The reduction ratio r = (√5−1)/2 satisfies r² + r − 1 = 0.",hu:"Az r = (√5−1)/2 csökkentési arány teljesíti az r² + r − 1 = 0 egyenletet."}},{id:"q-golden-5",prompt:{en:"What is the golden ratio r used in the method?",hu:"Mi a módszerben használt r aranymetszés értéke?"},options:[{en:"(√5 − 1)/2",hu:"(√5 − 1)/2"},{en:"1/2",hu:"1/2"},{en:"1/3",hu:"1/3"},{en:"(√3 − 1)/2",hu:"(√3 − 1)/2"}],answer:0,explanation:{en:"The golden-section reduction factor is r = (√5 − 1)/2 ≈ 0.618.",hu:"Az aranymetszéses csökkentési tényező r = (√5 − 1)/2 ≈ 0.618."}}],simplex:[{id:"q-simplex-1",prompt:{en:'In the simplex method, which vertex is considered the "worst"?',hu:"A szimplex-módszerben melyik csúcsot tekintjük a „legrosszabbnak”?"},options:[{en:"The one with the largest function value",hu:"A legnagyobb függvényértékűt"},{en:"The midpoint of an edge",hu:"Egy él felezőpontját"},{en:"The one with the smallest function value",hu:"A legkisebb függvényértékűt"},{en:"The center of the simplex",hu:"A szimplex középpontját"}],answer:0,explanation:{en:"When minimizing, the worst vertex has the largest function value.",hu:"Minimalizáláskor a legrosszabb csúcsnak a legnagyobb a függvényértéke."}},{id:"q-simplex-2",prompt:{en:"If the reflected point xᵣ is better than all others, what step is considered in Nelder–Mead?",hu:"Ha a tükrözött xᵣ pont jobb az összes többinél, milyen lépést mérlegel a Nelder–Mead?"},options:[{en:"Expansion",hu:"Tágítás"},{en:"Reflection",hu:"Tükrözés"},{en:"Termination",hu:"Leállás"},{en:"Contraction",hu:"Összehúzás"}],answer:0,explanation:{en:"If reflection produces a new best point, the method tries expansion to go further in that direction.",hu:"Ha a tükrözés új legjobb pontot ad, a módszer tágítással próbál tovább menni abba az irányba."}},{id:"q-simplex-3",prompt:{en:"What is done if the reflected point is worse than the current worst point?",hu:"Mit teszünk, ha a tükrözött pont rosszabb az aktuális legrosszabb pontnál?"},options:[{en:"Shrink the simplex",hu:"Összezsugorítjuk a szimplexet"},{en:"Expand the simplex",hu:"Tágítjuk a szimplexet"},{en:"Stop the iteration",hu:"Leállítjuk az iterációt"},{en:"Use the same simplex",hu:"Ugyanazt a szimplexet használjuk"}],answer:0,explanation:{en:"If even reflection/contraction fails, the simplex shrinks toward the best vertex.",hu:"Ha még a tükrözés/összehúzás is megbukik, a szimplex a legjobb csúcs felé zsugorodik."}},{id:"q-simplex-4",prompt:{en:"Which statement is true about the Nelder–Mead method?",hu:"Melyik állítás igaz a Nelder–Mead-módszerre?"},options:[{en:"It requires second-order derivatives",hu:"Másodrendű deriváltakat igényel"},{en:"It always converges quadratically",hu:"Mindig kvadratikusan konvergál"},{en:"It is limited to linear functions",hu:"Lineáris függvényekre korlátozódik"},{en:"It is a direct search method using only function values",hu:"Csak függvényértékeket használó direkt keresési módszer"}],answer:3,explanation:{en:"Nelder–Mead is a derivative-free direct search using only function evaluations.",hu:"A Nelder–Mead derivált nélküli direkt keresés, amely csak függvénykiértékeléseket használ."}},{id:"q-simplex-5",prompt:{en:"How many vertices does an n-dimensional simplex have?",hu:"Hány csúcsa van egy n-dimenziós szimplexnek?"},options:[{en:"n²",hu:"n²"},{en:"n",hu:"n"},{en:"2n",hu:"2n"},{en:"n + 1",hu:"n + 1"}],answer:3,explanation:{en:"A simplex in ℝⁿ has n + 1 vertices (e.g. a triangle in 2D).",hu:"Egy ℝⁿ-beli szimplexnek n + 1 csúcsa van (pl. egy háromszög 2D-ben)."}}],gradient:[{id:"q-gradient-1",prompt:{en:"What is the goal when using the gradient method?",hu:"Mi a cél a gradiens-módszer használatakor?"},options:[{en:"Find a global maximum",hu:"Globális maximum keresése"},{en:"Estimate the integral",hu:"Az integrál becslése"},{en:"Solve a system of linear equations",hu:"Lineáris egyenletrendszer megoldása"},{en:"Find a local minimum",hu:"Lokális minimum keresése"}],answer:3,explanation:{en:"Steepest descent walks downhill along −∇f to find a local minimum.",hu:"A legmeredekebb csökkenés a −∇f mentén halad lefelé egy lokális minimumért."}},{id:"q-gradient-2",prompt:{en:"Which is a characteristic of the optimal gradient method?",hu:"Mi jellemzi az optimális gradiens-módszert?"},options:[{en:"Always converges in one step",hu:"Mindig egy lépésben konvergál"},{en:"Minimizes f along the negative gradient direction",hu:"Minimalizálja f-et a negatív gradiens irányában"},{en:"Maximizes the directional derivative",hu:"Maximalizálja az iránymenti deriváltat"},{en:"Uses constant step size",hu:"Állandó lépésközt használ"}],answer:1,explanation:{en:"The optimal (exact line-search) gradient method minimizes f along the −∇f direction at each step.",hu:"Az optimális (pontos vonalmenti keresésű) gradiens-módszer minden lépésben minimalizálja f-et a −∇f irányában."}},{id:"q-gradient-3",prompt:{en:"What is the formula for approximating component vᵢ of the gradient using first-order differences?",hu:"Mi a képlete a gradiens vᵢ komponensének elsőrendű differenciákkal való közelítésére?"},options:[{en:"vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)",hu:"vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)"},{en:"vᵢ = ( f(p + h·eᵢ) − f(p) ) / h",hu:"vᵢ = ( f(p + h·eᵢ) − f(p) ) / h"},{en:"vᵢ = ( f(h) − f(0) ) / h",hu:"vᵢ = ( f(h) − f(0) ) / h"},{en:"vᵢ = ∂f/∂xᵢ",hu:"vᵢ = ∂f/∂xᵢ"}],answer:1,explanation:{en:"The forward (first-order) finite difference is ( f(p + h·eᵢ) − f(p) ) / h.",hu:"Az előrehaladó (elsőrendű) véges differencia ( f(p + h·eᵢ) − f(p) ) / h."}},{id:"q-gradient-4",prompt:{en:"What is the optimal step size αₖ used for?",hu:"Mire használjuk az optimális αₖ lépésközt?"},options:[{en:"Maximizing f in the direction of the negative gradient vector",hu:"f maximalizálása a negatív gradiensvektor irányában"},{en:"Matching the gradient with the minimum",hu:"A gradiens illesztése a minimumhoz"},{en:"Calculating the Hessian matrix",hu:"A Hesse-mátrix kiszámítása"},{en:"Jumping to the point on the negative-gradient half-line where f is minimal",hu:"Ugrás a negatív gradiens félegyenes azon pontjába, ahol f minimális"}],answer:3,explanation:{en:"The optimal step size is the line-search minimizer of f along the −∇f half-line.",hu:"Az optimális lépésköz f vonalmenti minimalizálója a −∇f félegyenes mentén."}},{id:"q-gradient-5",prompt:{en:"Which method updates the point using p^(k+1) = p^(k) − αₖ f′(p^(k))?",hu:"Melyik módszer frissíti a pontot a p^(k+1) = p^(k) − αₖ f′(p^(k)) képlettel?"},options:[{en:"Simplex method",hu:"Szimplex-módszer"},{en:"Gradient method",hu:"Gradiens-módszer"},{en:"Newton's method",hu:"Newton-módszer"},{en:"Golden section method",hu:"Aranymetszéses módszer"}],answer:1,explanation:{en:"This is the gradient (steepest-descent) update rule.",hu:"Ez a gradiens (legmeredekebb csökkenés) frissítési szabálya."}}],linsys:[{id:"q-linsys-1",prompt:{en:"When is the gradient method terminated in practice?",hu:"A gyakorlatban mikor állítjuk le a gradiens-módszert?"},options:[{en:"After one iteration",hu:"Egy iteráció után"},{en:"When the determinant is 0",hu:"Amikor a determináns 0"},{en:"When ‖r^(k)‖ is sufficiently small",hu:"Amikor ‖r^(k)‖ elég kicsi"},{en:"After 100 steps",hu:"100 lépés után"}],answer:2,explanation:{en:"Iteration stops when the residual norm ‖r^(k)‖ = ‖b − A p^(k)‖ is small enough.",hu:"Az iteráció leáll, amikor a maradéknorma ‖r^(k)‖ = ‖b − A p^(k)‖ elég kicsi."}},{id:"q-linsys-2",prompt:{en:"What type of convergence is observed in the gradient method for linear systems?",hu:"Milyen konvergencia figyelhető meg a gradiens-módszernél lineáris rendszerekre?"},options:[{en:"Linear",hu:"Lineáris"},{en:"Superlinear",hu:"Szuperlineáris"},{en:"Quadratic",hu:"Kvadratikus"},{en:"Exponential",hu:"Exponenciális"}],answer:0,explanation:{en:"Steepest descent converges linearly, with rate governed by the condition number of A.",hu:"A legmeredekebb csökkenés lineárisan konvergál, A kondíciószáma által meghatározott ütemben."}},{id:"q-linsys-3",prompt:{en:"For symmetric A, what is the gradient of g(x) = ½ xᵀA x − bᵀx + c?",hu:"Szimmetrikus A esetén mi a g(x) = ½ xᵀA x − bᵀx + c gradiense?"},options:[{en:"A",hu:"A"},{en:"A x − b",hu:"A x − b"},{en:"b − A x",hu:"b − A x"},{en:"Aᵀx + b",hu:"Aᵀx + b"}],answer:1,explanation:{en:"For symmetric A, ∇g(x) = A x − b, so minimizing g solves A x = b.",hu:"Szimmetrikus A-ra ∇g(x) = A x − b, így g minimalizálása megoldja az A x = b-t."}},{id:"q-linsys-4",prompt:{en:"What is the iteration formula for updating the solution vector p^(k)?",hu:"Mi a p^(k) megoldásvektor frissítésének iterációs képlete?"},options:[{en:"p^(k+1) = p^(k) + r^(k)",hu:"p^(k+1) = p^(k) + r^(k)"},{en:"p^(k+1) = p^(k) − αₖ A r^(k)",hu:"p^(k+1) = p^(k) − αₖ A r^(k)"},{en:"p^(k+1) = A⁻¹ b",hu:"p^(k+1) = A⁻¹ b"},{en:"p^(k+1) = p^(k) + αₖ r^(k)",hu:"p^(k+1) = p^(k) + αₖ r^(k)"}],answer:3,explanation:{en:"The update moves along the residual direction: p^(k+1) = p^(k) + αₖ r^(k).",hu:"A frissítés a maradék irányában mozog: p^(k+1) = p^(k) + αₖ r^(k)."}},{id:"q-linsys-5",prompt:{en:"How is the step size αₖ calculated?",hu:"Hogyan számoljuk az αₖ lépésközt?"},options:[{en:"αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )",hu:"αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )"},{en:"αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )",hu:"αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )"},{en:"αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )",hu:"αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )"},{en:"αₖ = 1 / ‖r^(k)‖",hu:"αₖ = 1 / ‖r^(k)‖"}],answer:2,explanation:{en:"Exact line search along the residual gives αₖ = (rᵀr) / (rᵀA r).",hu:"A maradék menti pontos vonalmenti keresés αₖ = (rᵀr) / (rᵀA r)-t ad."}}],newton:[{id:"q-newton-1",prompt:{en:"What is the benefit of Newton's method if f''(p) is positive definite?",hu:"Mi a Newton-módszer előnye, ha f''(p) pozitív definit?"},options:[{en:"The method diverges",hu:"A módszer divergál"},{en:"The method converges quadratically",hu:"A módszer kvadratikusan konvergál"},{en:"The Hessian can be ignored",hu:"A Hesse-mátrix figyelmen kívül hagyható"},{en:"The gradient becomes constant",hu:"A gradiens állandóvá válik"}],answer:1,explanation:{en:"Near a minimizer with positive-definite Hessian, Newton converges quadratically.",hu:"Egy pozitív definit Hesse-mátrixú minimum közelében a Newton kvadratikusan konvergál."}},{id:"q-newton-2",prompt:{en:"What type of function is well-suited for Newton's method?",hu:"Milyen típusú függvény alkalmas jól a Newton-módszerhez?"},options:[{en:"Piecewise constant",hu:"Szakaszonként állandó"},{en:"Twice continuously differentiable",hu:"Kétszer folytonosan differenciálható"},{en:"Linear",hu:"Lineáris"},{en:"Discontinuous",hu:"Szakadásos"}],answer:1,explanation:{en:"Newton's method needs gradient and Hessian, hence f must be twice continuously differentiable.",hu:"A Newton-módszernek gradiens és Hesse-mátrix kell, ezért f-nek kétszer folytonosan differenciálhatónak kell lennie."}},{id:"q-newton-3",prompt:{en:"Why must the Hessian be positive definite for minimization?",hu:"Miért kell a Hesse-mátrixnak pozitív definitnek lennie a minimalizáláshoz?"},options:[{en:"To ensure a maximum is found",hu:"Hogy maximumot találjunk"},{en:"To invert the gradient",hu:"A gradiens invertálásához"},{en:"To guarantee no solution",hu:"Hogy ne legyen megoldás"},{en:"To ensure convergence",hu:"A konvergencia biztosításához"}],answer:3,explanation:{en:"A positive-definite Hessian guarantees a descent direction and convergence to a minimum.",hu:"A pozitív definit Hesse-mátrix garantál egy csökkenő irányt és a minimumhoz való konvergenciát."}},{id:"q-newton-4",prompt:{en:"What is the main idea of Newton's method for minimization?",hu:"Mi a Newton-módszer fő gondolata a minimalizálásban?"},options:[{en:"Use the midpoint rule to locate the minimum",hu:"A középponti szabály használata a minimum megtalálására"},{en:"Approximate the function using a linear polynomial",hu:"A függvény közelítése lineáris polinommal"},{en:"Estimate the gradient using finite differences",hu:"A gradiens becslése véges differenciákkal"},{en:"Use the second-order Taylor polynomial for optimization",hu:"A másodrendű Taylor-polinom használata az optimalizáláshoz"}],answer:3,explanation:{en:"Newton minimizes the local second-order Taylor model of f at each step.",hu:"A Newton minden lépésben f lokális másodrendű Taylor-modelljét minimalizálja."}},{id:"q-newton-5",prompt:{en:"What is the update formula in Newton's method for minimization?",hu:"Mi a frissítési képlet a minimalizálásra szolgáló Newton-módszerben?"},options:[{en:"xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)",hu:"xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)"},{en:"xₖ₊₁ = xₖ − f'(xₖ)",hu:"xₖ₊₁ = xₖ − f'(xₖ)"},{en:"xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)",hu:"xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)"},{en:"xₖ₊₁ = xₖ + αₖ f'(xₖ)",hu:"xₖ₊₁ = xₖ + αₖ f'(xₖ)"}],answer:2,explanation:{en:"The multivariate Newton step is xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ).",hu:"A többváltozós Newton-lépés xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ)."}}],quasinewton:[{id:"q-quasinewton-1",prompt:{en:"What is the Broyden update used for in quasi-Newton methods?",hu:"Mire használjuk a Broyden-frissítést a kvázi-Newton módszerekben?"},options:[{en:"To update the approximate Hessian",hu:"A közelítő Hesse-mátrix frissítésére"},{en:"To estimate the gradient",hu:"A gradiens becslésére"},{en:"To normalize the gradient",hu:"A gradiens normálására"},{en:"To solve linear systems",hu:"Lineáris rendszerek megoldására"}],answer:0,explanation:{en:"Quasi-Newton updates (such as Broyden) refine the approximate Hessian using gradient differences.",hu:"A kvázi-Newton frissítések (mint a Broyden) gradienskülönbségekkel finomítják a közelítő Hesse-mátrixot."}},{id:"q-quasinewton-2",prompt:{en:"Which function is used to approximate the objective in quasi-Newton methods?",hu:"Milyen függvénnyel közelítjük a célfüggvényt a kvázi-Newton módszerekben?"},options:[{en:"Linear function",hu:"Lineáris függvénnyel"},{en:"Quadratic function using approximate gradient and Hessian",hu:"Kvadratikus függvénnyel, közelítő gradienssel és Hesse-mátrixszal"},{en:"Exponential approximation",hu:"Exponenciális közelítéssel"},{en:"First-order Taylor polynomial",hu:"Elsőrendű Taylor-polinommal"}],answer:1,explanation:{en:"Quasi-Newton methods build a local quadratic model with an approximate Hessian.",hu:"A kvázi-Newton módszerek lokális kvadratikus modellt építenek közelítő Hesse-mátrixszal."}},{id:"q-quasinewton-3",prompt:{en:"What is a limitation of the Broyden update?",hu:"Mi a Broyden-frissítés egyik korlátja?"},options:[{en:"It is only for linear problems",hu:"Csak lineáris feladatokra való"},{en:"It does not converge",hu:"Nem konvergál"},{en:"It does not preserve symmetry",hu:"Nem őrzi meg a szimmetriát"},{en:"It requires the exact Hessian",hu:"A pontos Hesse-mátrixot igényli"}],answer:2,explanation:{en:"Broyden's general update does not keep the Hessian approximation symmetric (motivating PSB/BFGS).",hu:"A Broyden általános frissítése nem tartja szimmetrikusan a Hesse-közelítést (ez motiválja a PSB/BFGS-t)."}},{id:"q-quasinewton-4",prompt:{en:"What type of convergence can be expected from the PSB update method?",hu:"Milyen konvergencia várható a PSB-frissítési módszertől?"},options:[{en:"Quadratic",hu:"Kvadratikus"},{en:"Superlinear",hu:"Szuperlineáris"},{en:"Linear",hu:"Lineáris"},{en:"No convergence",hu:"Nincs konvergencia"}],answer:1,explanation:{en:"Quasi-Newton methods such as PSB attain superlinear convergence.",hu:"A kvázi-Newton módszerek, mint a PSB, szuperlineáris konvergenciát érnek el."}},{id:"q-quasinewton-5",prompt:{en:"Which form ensures that the updated matrix remains positive definite?",hu:"Melyik alak biztosítja, hogy a frissített mátrix pozitív definit maradjon?"},options:[{en:"Identity approximation",hu:"Egységmátrix-közelítés"},{en:"Cholesky form A = L Lᵀ",hu:"Cholesky-alak A = L Lᵀ"},{en:"Diagonal form",hu:"Diagonális alak"},{en:"General symmetric form",hu:"Általános szimmetrikus alak"}],answer:1,explanation:{en:"Maintaining the factor in Cholesky form A = L Lᵀ keeps the approximation positive definite.",hu:"A faktor Cholesky-alakban (A = L Lᵀ) tartása megőrzi a közelítés pozitív definitségét."}}]};function ma(e){return oa[e]??[]}function K({meta:e,children:n}){const{t:i,lang:a}=_(),s=Ze(e.id,a),r=ra(e.id),o=ma(e.id);return t.jsx("section",{className:"section",id:e.id,children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{className:"section__head",children:[t.jsxs("span",{className:"eyebrow",children:[i({en:"Section",hu:"Szakasz"})," ",e.no]}),t.jsx("h2",{children:i(e.title)}),t.jsx("p",{children:i(e.blurb)})]}),n,s&&t.jsxs("details",{className:"section__theory",open:!0,children:[t.jsx("summary",{children:i({en:"Full theory",hu:"Teljes elmélet"})}),t.jsx(ae,{markdown:s})]}),r.map(m=>t.jsx(Ae,{snippets:m.snippets,caption:m.caption},m.id)),t.jsx(Ie,{deck:e.id}),t.jsx(Pe,{deck:e.id}),o.length>0&&t.jsx(Te,{questions:o})]})})}function la(e){const[n,i]=u.useState(0),a=u.useRef([]);return u.useEffect(()=>{a.current=a.current.slice(0,e);const r=new IntersectionObserver(o=>{let m=null;for(const l of o){if(!l.isIntersecting)continue;const h=Number(l.target.dataset.step);(!m||l.intersectionRatio>m.ratio)&&(m={idx:h,ratio:l.intersectionRatio})}m&&i(m.idx)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return a.current.forEach(o=>o&&r.observe(o)),()=>r.disconnect()},[e]),{active:n,register:r=>o=>{a.current[r]=o}}}function O({steps:e,graphic:n}){const{active:i,register:a}=la(e.length);return t.jsxs("div",{className:"scrolly",children:[t.jsx("div",{className:"scrolly__sticky",children:t.jsx("div",{className:"scrolly__graphic",children:n(i)})}),t.jsx("div",{className:"scrolly__steps",children:e.map((s,r)=>t.jsxs("article",{ref:a(r),"data-step":r,className:`step${r===i?" is-active":""}`,children:[s.kicker&&t.jsx("div",{className:"step__num",children:s.kicker}),s.title&&t.jsx("h3",{children:s.title}),t.jsx("div",{children:s.body})]},r))})]})}function ha(e,n,i=130,a=130){const s=new Float64Array(i*a);let r=1/0,o=-1/0;for(let m=0;m<a;m++){const l=n.ymin+(n.ymax-n.ymin)*m/(a-1);for(let h=0;h<i;h++){const d=n.xmin+(n.xmax-n.xmin)*h/(i-1),f=e(d,l);s[m*i+h]=f,f<r&&(r=f),f>o&&(o=f)}}return{nx:i,ny:a,...n,vals:s,vmin:r,vmax:o}}function fa(e,n=14){const i=e.vmin,a=e.vmax;if(!(a>i))return[];const s=[];for(let r=1;r<=n;r++){const o=r/(n+1);s.push(i+(a-i)*o*o)}return s}function da(e,n){const i=[],{nx:a,ny:s,vals:r}=e,o=(e.xmax-e.xmin)/(a-1),m=(e.ymax-e.ymin)/(s-1),l=f=>e.xmin+f*o,h=f=>e.ymin+f*m,d=(f,p)=>(n-f)/(p-f);for(let f=0;f<s-1;f++)for(let p=0;p<a-1;p++){const b=r[f*a+p],x=r[f*a+p+1],$=r[(f+1)*a+p+1],c=r[(f+1)*a+p];let g=0;if(b>n&&(g|=1),x>n&&(g|=2),$>n&&(g|=4),c>n&&(g|=8),g===0||g===15)continue;const k=l(p),y=l(p+1),v=h(f),q=h(f+1),D=()=>({x:k+d(b,x)*o,y:v}),V=()=>({x:y,y:v+d(x,$)*m}),R=()=>({x:k+d(c,$)*o,y:q}),G=()=>({x:k,y:v+d(b,c)*m}),H=($e,ce)=>i.push({x1:$e.x,y1:$e.y,x2:ce.x,y2:ce.y});switch(g){case 1:case 14:H(G(),D());break;case 2:case 13:H(D(),V());break;case 3:case 12:H(G(),V());break;case 4:case 11:H(V(),R());break;case 5:H(G(),R()),H(D(),V());break;case 6:case 9:H(D(),R());break;case 7:case 8:H(G(),R());break;case 10:H(G(),D()),H(V(),R());break}}return i}function pe(e,n,i,a=26){return{...e,w:n,h:i,pad:a}}function C(e,n,i){const a=e.pad+(n-e.xmin)/(e.xmax-e.xmin)*(e.w-2*e.pad),s=e.h-e.pad-(i-e.ymin)/(e.ymax-e.ymin)*(e.h-2*e.pad);return[a,s]}function ba(e,n,i){const a=e.xmin+(n-e.pad)/(e.w-2*e.pad)*(e.xmax-e.xmin),s=e.ymin+(e.h-e.pad-i)/(e.h-2*e.pad)*(e.ymax-e.ymin);return[a,s]}function z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function te(e,n){if(!e)return n;const i=e.match(/^var\((--[\w-]+)\)$/);return i?z(i[1])||n:e}function fe(e,n,i){const a=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(n*a),e.height=Math.round(i*a),e.style.width=`${n}px`,e.style.height=`${i}px`;const s=e.getContext("2d");return s.setTransform(a,0,0,a,0,0),s}function $a(e,n,i){const a=m=>{var h;const l=((h=m.match(/\d+(\.\d+)?/g))==null?void 0:h.map(Number))??[0,0,0];if(m.startsWith("#")){const d=m.replace("#",""),f=d.length===3?d.split("").map(p=>p+p).join(""):d;return[parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]}return l},s=a(e),r=a(n),o=s.map((m,l)=>Math.round(m+(r[l]-m)*i));return`rgb(${o[0]}, ${o[1]}, ${o[2]})`}function ee({fn:e,overlay:n,height:i=420,onPick:a}){const{theme:s}=he(),r=u.useRef(null),o=u.useRef(null),[m,l]=u.useState(520),h=u.useMemo(()=>ha(e.f,e.domain,150,150),[e]),d=u.useMemo(()=>e.levels??fa(h,15),[e,h]),f=u.useMemo(()=>d.map(b=>({lv:b,segs:da(h,b)})),[d,h]);u.useEffect(()=>{const b=o.current;if(!b)return;const x=new ResizeObserver($=>{const c=$[0].contentRect.width;c&&l(c)});return x.observe(b),()=>x.disconnect()},[]),u.useEffect(()=>{const b=r.current;if(!b)return;const x=fe(b,m,i),$=pe(e.domain,m,i);ca(x,$,h,f,e,n)},[m,i,e,h,f,n,s]);const p=b=>{if(!a)return;const $=r.current.getBoundingClientRect(),c=pe(e.domain,m,i),[g,k]=ba(c,b.clientX-$.left,b.clientY-$.top);a([g,k])};return t.jsx("div",{className:"plot",ref:o,style:{cursor:a?"crosshair":"default"},children:t.jsx("canvas",{ref:r,onClick:p})})}function ca(e,n,i,a,s,r){const o=z("--plot-bg"),m=z("--plot-low"),l=z("--plot-high"),h=z("--plot-contour"),d=z("--plot-axis"),f=z("--plot-ink");e.fillStyle=o,e.fillRect(0,0,n.w,n.h);const p=60,b=60,x=i.vmax-i.vmin||1;for(let c=0;c<b;c++)for(let g=0;g<p;g++){const k=n.xmin+(n.xmax-n.xmin)*(g+.5)/p,y=n.ymin+(n.ymax-n.ymin)*(c+.5)/b,v=s.f(k,y),q=Math.min(1,Math.max(0,(v-i.vmin)/x));e.fillStyle=$a(m,l,Math.sqrt(q));const[D,V]=C(n,k,y),[R,G]=C(n,n.xmin+(n.xmax-n.xmin)*(g+1.5)/p,n.ymin+(n.ymax-n.ymin)*(c-.5)/b);e.globalAlpha=.32,e.fillRect(Math.floor(D)-1,Math.floor(V)-1,Math.ceil(R-D)+2,Math.ceil(G-V)+2)}e.globalAlpha=1,e.strokeStyle=h,e.lineWidth=1,e.beginPath();for(const{segs:c}of a)for(const g of c){const[k,y]=C(n,g.x1,g.y1),[v,q]=C(n,g.x2,g.y2);e.moveTo(k,y),e.lineTo(v,q)}if(e.stroke(),e.strokeStyle=d,e.lineWidth=1,e.globalAlpha=.6,n.ymin<0&&n.ymax>0){const[,c]=C(n,0,0);e.beginPath(),e.moveTo(n.pad,c),e.lineTo(n.w-n.pad,c),e.stroke()}if(n.xmin<0&&n.xmax>0){const[c]=C(n,0,0);e.beginPath(),e.moveTo(c,n.pad),e.lineTo(c,n.h-n.pad),e.stroke()}e.globalAlpha=1;const $=c=>C(n,c[0],c[1]);if(r!=null&&r.triangles){for(const c of r.triangles)if(e.lineJoin="round",e.strokeStyle=z("--plot-path"),e.fillStyle=z("--plot-path"),e.lineWidth=2,e.globalAlpha=.12,e.beginPath(),c.verts.forEach((g,k)=>{const[y,v]=$(g);k===0?e.moveTo(y,v):e.lineTo(y,v)}),e.closePath(),e.fill(),e.globalAlpha=1,e.stroke(),c.verts.forEach((g,k)=>{const[y,v]=$(g);e.fillStyle=k===0?z("--plot-path2"):k===c.verts.length-1?z("--plot-accent"):z("--plot-path"),e.beginPath(),e.arc(y,v,4.5,0,Math.PI*2),e.fill()}),c.trial){const[g,k]=$(c.trial.point);e.strokeStyle=z("--plot-point"),e.setLineDash([4,4]);const[y,v]=c.centroid?$(c.centroid):[g,k];e.beginPath(),e.moveTo(y,v),e.lineTo(g,k),e.stroke(),e.setLineDash([]),e.fillStyle=z("--plot-point"),e.beginPath(),e.arc(g,k,4,0,Math.PI*2),e.fill()}}if(r!=null&&r.paths)for(const c of r.paths){if(c.pts.length<1)continue;const g=te(c.color,z("--plot-path"));e.strokeStyle=g,e.lineWidth=2,c.dotted&&e.setLineDash([5,5]),e.beginPath(),c.pts.forEach((k,y)=>{const[v,q]=$(k);y===0?e.moveTo(v,q):e.lineTo(v,q)}),e.stroke(),e.setLineDash([]),e.fillStyle=g,c.pts.forEach(k=>{const[y,v]=$(k);e.beginPath(),e.arc(y,v,3,0,Math.PI*2),e.fill()})}if(r!=null&&r.arrow){const[c,g]=$(r.arrow.from),[k,y]=$(r.arrow.to);e.strokeStyle=te(r.arrow.color,z("--plot-accent")),e.fillStyle=e.strokeStyle,e.lineWidth=2.5,e.beginPath(),e.moveTo(c,g),e.lineTo(k,y),e.stroke();const v=Math.atan2(y-g,k-c);e.beginPath(),e.moveTo(k,y),e.lineTo(k-9*Math.cos(v-.4),y-9*Math.sin(v-.4)),e.lineTo(k-9*Math.cos(v+.4),y-9*Math.sin(v+.4)),e.closePath(),e.fill()}if(r!=null&&r.points)for(const c of r.points){const[g,k]=$(c.p);e.fillStyle=te(c.color,z("--plot-point")),e.beginPath(),e.arc(g,k,c.r??5,0,Math.PI*2),e.fill(),c.ring&&(e.strokeStyle=o,e.lineWidth=2,e.stroke())}if(r!=null&&r.showMin&&s.min){const[c,g]=$(s.min);e.fillStyle=z("--plot-point"),e.strokeStyle=f,e.lineWidth=2,e.beginPath(),e.arc(c,g,6,0,Math.PI*2),e.fill(),e.stroke()}}function Q(e,n=1.6){const[i,a]=u.useState(0),[s,r]=u.useState(!1),o=u.useRef(),m=u.useRef(0);u.useEffect(()=>{i>e-1&&a(Math.max(0,e-1))},[e,i]),u.useEffect(()=>{var b;if(!s)return;if((b=window.matchMedia)==null?void 0:b.call(window,"(prefers-reduced-motion: reduce)").matches){a(e-1),r(!1);return}const p=x=>{x-m.current>1e3/n&&(m.current=x,a($=>$>=e-1?(r(!1),$):$+1)),o.current=requestAnimationFrame(p)};return o.current=requestAnimationFrame(p),()=>{o.current&&cancelAnimationFrame(o.current)}},[s,e,n]);const l=u.useCallback(()=>{a(f=>f>=e-1?0:f),r(f=>!f)},[e]),h=u.useCallback(f=>a(p=>Math.min(e-1,Math.max(0,p+f))),[e]),d=u.useCallback(()=>{a(0),r(!1)},[]);return{i,setI:a,playing:s,play:l,step:h,reset:d}}function J({i:e,count:n,playing:i,onPlay:a,onStep:s,onReset:r,onScrub:o}){const{t:m}=_();return t.jsxs("div",{className:"playbar",children:[t.jsxs("button",{className:"ctl-btn ctl-btn--accent",onClick:a,"aria-label":"play/pause",children:[i?"⏸":"▶"," ",m({en:i?"Pause":"Play",hu:i?"Szünet":"Lejátszás"})]}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(-1),"aria-label":"previous",children:"◀"}),t.jsx("input",{type:"range",min:0,max:Math.max(0,n-1),value:e,onChange:l=>o(Number(l.target.value)),style:{accentColor:"var(--accent)",flex:1,minWidth:90},"aria-label":"step"}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(1),"aria-label":"next",children:"▶"}),t.jsx("button",{className:"ctl-btn",onClick:r,"aria-label":"reset",children:"↺"})]})}function oe({label:e,value:n,min:i,max:a,step:s=.01,onChange:r,fmt:o}){return t.jsxs("div",{className:"field",children:[t.jsxs("label",{children:[e," ",t.jsx("b",{children:o?o(n):n})]}),t.jsx("input",{type:"range",min:i,max:a,step:s,value:n,onChange:m=>r(Number(m.target.value))})]})}function ie({label:e,value:n,options:i,onChange:a}){return t.jsxs("div",{className:"field",children:[t.jsx("label",{children:e}),t.jsx("select",{value:n,onChange:s=>a(s.target.value),children:i.map(s=>t.jsx("option",{value:s.value,children:s.label},s.value))})]})}function U({children:e,label:n}){const{t:i}=_(),a=n??{en:"Show the math",hu:"Mutasd a matekot"};return t.jsxs("details",{className:"mathdetails",children:[t.jsxs("summary",{children:[t.jsx("span",{className:"chev",children:"▶"}),t.jsxs("span",{children:["∑ ",i(a)]})]}),t.jsx("div",{className:"mathdetails__body",children:e})]})}function E({emoji:e="💡",children:n}){return t.jsxs("div",{className:"callout",children:[t.jsx("span",{className:"emoji","aria-hidden":!0,children:e}),t.jsx("p",{children:n})]})}function T({label:e,proof:n=!1,children:i}){return t.jsxs("div",{className:`theorem${n?" proof":""}`,children:[t.jsx("div",{className:"lab",children:e}),i]})}const I={id:"rosen2y",label:"f(x,y) = (x²−2y)² + 2(x−1)²",tex:"f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2",f:(e,n)=>(e*e-2*n)**2+2*(e-1)**2,grad:(e,n)=>{const i=e*e-2*n;return[4*e*i+4*(e-1),-4*i]},hess:(e,n)=>[[12*e*e-8*n+4,-8*e],[-8*e,8]],domain:{xmin:-2.6,xmax:2.2,ymin:-1.2,ymax:5.1},min:[1,.5]},pa={id:"dome",label:"f(x,y) = 4 − 3x² − y²",tex:"f(x,y) = 4 - 3x^2 - y^2",f:(e,n)=>4-3*e*e-n*n,grad:(e,n)=>[-6*e,-2*n],hess:()=>[[-6,0],[0,-2]],domain:{xmin:-1.5,xmax:1.5,ymin:-1.5,ymax:1.5},min:[0,0]},ka={id:"bowl",label:"f(x,y) = ½x² + 9⁄2 y²",tex:"f(x,y) = \\tfrac12 x^2 + \\tfrac92 y^2",f:(e,n)=>.5*e*e+4.5*n*n,grad:(e,n)=>[e,9*n],hess:()=>[[1,0],[0,9]],domain:{xmin:-10,xmax:10,ymin:-3,ymax:3},min:[0,0]},ga={id:"saddle",label:"f(x,y) = x² − y²",tex:"f(x,y) = x^2 - y^2",f:(e,n)=>e*e-n*n,grad:(e,n)=>[2*e,-2*n],hess:()=>[[2,0],[0,-2]],domain:{xmin:-2,xmax:2,ymin:-2,ymax:2},min:[0,0]},ua={id:"quad1d",label:"f(x) = x² − 0.8x + 1",tex:"f(x) = x^2 - 0.8x + 1",f:e=>e*e-.8*e+1,domain:{a:-1,b:2},min:.4},xa={id:"cubic1d",label:"f(x) = x³ − 3x + 1",tex:"f(x) = x^3 - 3x + 1",f:e=>e**3-3*e+1,domain:{a:0,b:2},min:1},va={id:"expbump",label:"f(x) = 1 − 10x·e^(−x)",tex:"f(x) = 1 - 10x e^{-x}",f:e=>1-10*e*Math.exp(-e),domain:{a:0,b:2},min:1},ve=[ua,xa,va],B=(e,n)=>e.map((i,a)=>i+n[a]),j=(e,n)=>e.map((i,a)=>i-n[a]),A=(e,n)=>e.map(i=>i*n),N=(e,n)=>e.reduce((i,a,s)=>i+a*n[s],0),S=e=>Math.sqrt(N(e,e)),de=(e,n)=>S(j(e,n));function ke(e,n){return e.map(i=>N(i,n))}function ye(e,n){const i=e.length,a=e.map((s,r)=>[...s,n[r]]);for(let s=0;s<i;s++){let r=s;for(let o=s+1;o<i;o++)Math.abs(a[o][s])>Math.abs(a[r][s])&&(r=o);if(Math.abs(a[r][s])<1e-14)return null;[a[s],a[r]]=[a[r],a[s]];for(let o=0;o<i;o++){if(o===s)continue;const m=a[o][s]/a[s][s];for(let l=s;l<=i;l++)a[o][l]-=m*a[s][l]}}return a.map((s,r)=>s[i]/s[r])}function ya(e){const n=e[0][0],i=e[1][1],a=n*i-e[0][1]*e[1][0];return Math.abs(a)<1e-9?"degenerate":a<0?"saddle":n>0?"min":"max"}const za=W.find(e=>e.id==="calculus"),ze=[{fn:ka,at:[0,0]},{fn:pa,at:[0,0]},{fn:ga,at:[0,0]}];function _a(){const{t:e}=_(),[n,i]=u.useState(0),[a,s]=u.useState(!0),[r,o]=u.useState(null),m=ze[n],l=u.useMemo(()=>ya(m.fn.hess(m.at[0],m.at[1])),[m]),h=[{kicker:e({en:"Where to look",hu:"Hol keressünk"}),title:e({en:"Minima hide where the slope dies",hu:"A minimum ott lapul, ahol a meredekség elhal"}),body:t.jsx("p",{children:e({en:"At any local minimum or maximum of a smooth function, every partial derivative is zero: ∇f = 0. These flat spots — critical points — are the only candidates.",hu:"Egy sima függvény minden lokális minimumában vagy maximumában minden parciális derivált nulla: ∇f = 0. Ezek a lapos pontok — a kritikus pontok — az egyetlen jelöltek."})})},{kicker:e({en:"Not enough",hu:"Nem elég"}),title:e({en:"Flat ≠ minimum",hu:"Lapos ≠ minimum"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"A zero gradient could be a valley bottom, a hilltop, or a saddle (down one way, up another). Toggle the gradient field: arrows die at the critical point but say nothing about its type.",hu:"A nulla gradiens lehet völgyalja, hegytető vagy nyeregpont (egyik irányban le, másikban fel). Kapcsold be a gradiensmezőt: a nyilak elhalnak a kritikus pontban, de a típusáról nem árulkodnak."})}),t.jsx(E,{emoji:"🪑",children:e({en:"A saddle is the classic trap: ∇f = 0, yet it's neither a min nor a max.",hu:"A nyeregpont a klasszikus csapda: ∇f = 0, mégsem minimum, sem maximum."})})]})},{kicker:e({en:"The test",hu:"A teszt"}),title:e({en:"Ask the curvature (Hessian)",hu:"Kérdezd a görbületet (Hesse)"}),body:t.jsx("p",{children:e({en:"The Hessian — the matrix of second derivatives — decides. Positive definite ⇒ minimum, negative definite ⇒ maximum, mixed signs ⇒ saddle. For 2D, just check D = fₓₓf_yy − fₓy².",hu:"A Hesse-mátrix — a második deriváltak mátrixa — dönt. Pozitív definit ⇒ minimum, negatív definit ⇒ maximum, vegyes előjelek ⇒ nyeregpont. 2D-ben elég a D = fₓₓf_yy − fₓy² ellenőrzése."})})},{kicker:e({en:"Your turn",hu:"Te jössz"}),title:e({en:"Min, max, or saddle?",hu:"Minimum, maximum vagy nyereg?"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The marked dot is a critical point of the function on the right. Read the contours and make the call — then check the Hessian verdict.",hu:"A megjelölt pont a jobb oldali függvény kritikus pontja. Olvasd le a szintvonalakból, és dönts — majd nézd meg a Hesse-mátrix ítéletét."})}),t.jsx("div",{className:"quiz",children:["min","max","saddle"].map(d=>t.jsx("button",{className:r===d?d===l?"correct":"wrong":"",onClick:()=>o(d),children:e({min:{en:"Minimum",hu:"Minimum"},max:{en:"Maximum",hu:"Maximum"},saddle:{en:"Saddle",hu:"Nyeregpont"},degenerate:{en:"Degenerate",hu:"Elfajuló"}}[d])},d))}),r&&t.jsxs("p",{style:{marginTop:10},children:[e(r===l?{en:"✅ Correct! ",hu:"✅ Helyes! "}:{en:"❌ Not quite — ",hu:"❌ Nem egészen — "}),e({en:`the Hessian here is ${me(l,"en")}.`,hu:`az itteni Hesse-mátrix ${me(l,"hu")}.`})]})]})}];return t.jsxs(K,{meta:za,children:[t.jsx(O,{steps:h,graphic:()=>t.jsx(wa,{q:m,qi:n,setQi:d=>{i(d),o(null)},showField:a,setShowField:s,truth:l,revealed:r!=null})}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"Necessary condition",hu:"Szükséges feltétel"}),children:[t.jsx("p",{children:e({en:"If f has a local extremum at a, then",hu:"Ha f-nek lokális szélsőértéke van a-ban, akkor"})}),t.jsx(w,{block:!0,children:"\\frac{\\partial f}{\\partial x_i}(\\mathbf a) = 0 \\quad (i = 1,\\dots,n), \\qquad \\text{i.e. } \\nabla f(\\mathbf a) = \\mathbf 0."})]}),t.jsxs(T,{label:e({en:"Second-order test (2D)",hu:"Másodrendű teszt (2D)"}),proof:!0,children:[t.jsx(w,{block:!0,children:"D = \\frac{\\partial^2 f}{\\partial x^2}\\frac{\\partial^2 f}{\\partial y^2} - \\Big(\\frac{\\partial^2 f}{\\partial x\\,\\partial y}\\Big)^2."}),t.jsx("p",{children:e({en:"D > 0 and fₓₓ > 0 ⇒ minimum; D > 0 and fₓₓ < 0 ⇒ maximum; D < 0 ⇒ saddle. In general: the Hessian's definiteness decides.",hu:"D > 0 és fₓₓ > 0 ⇒ minimum; D > 0 és fₓₓ < 0 ⇒ maximum; D < 0 ⇒ nyeregpont. Általában: a Hesse-mátrix definitsége dönt."})})]})]})]})}function me(e,n){return{min:{en:"positive definite (a minimum)",hu:"pozitív definit (minimum)"},max:{en:"negative definite (a maximum)",hu:"negatív definit (maximum)"},saddle:{en:"indefinite (a saddle)",hu:"indefinit (nyeregpont)"},degenerate:{en:"degenerate",hu:"elfajuló"}}[e][n]}function wa({q:e,qi:n,setQi:i,showField:a,setShowField:s,truth:r,revealed:o}){const{t:m}=_(),h={paths:u.useMemo(()=>{if(!a)return[];const d=[],f=e.fn.domain,p=7;for(let b=1;b<p;b++)for(let x=1;x<p;x++){const $=f.xmin+(f.xmax-f.xmin)*b/p,c=f.ymin+(f.ymax-f.ymin)*x/p,g=e.fn.grad($,c),k=Math.hypot(g[0],g[1])||1,y=Math.min(.13*(f.xmax-f.xmin),.13*(f.xmax-f.xmin)*k/(k+1));d.push({from:[$,c],to:[$-g[0]/k*y,c-g[1]/k*y]})}return d},[e,a]).map(d=>({pts:[d.from,d.to],color:"var(--plot-accent)"})),points:[{p:e.at,ring:!0,color:o?r==="min"?"var(--plot-path2)":r==="max"?"var(--plot-path)":"var(--warm)":"var(--plot-point)",r:7}]};return t.jsxs("div",{children:[t.jsx(ee,{fn:e.fn,overlay:h,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:t.jsx(w,{children:e.fn.tex})})]}),t.jsxs("span",{children:[t.jsxs("span",{className:"k",children:["∇f(",e.at.join(", "),")"]})," ",t.jsx("b",{children:"= (0, 0)"})]}),o&&t.jsxs("span",{children:[t.jsx("span",{className:"k",children:m({en:"verdict",hu:"ítélet"})})," ",t.jsx("b",{children:me(r,"en").split(" (")[0]})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(ie,{label:m({en:"Pick a critical point",hu:"Válassz kritikus pontot"}),value:String(n),onChange:d=>i(Number(d)),options:ze.map((d,f)=>({value:String(f),label:d.fn.label}))}),t.jsx("button",{className:`ctl-btn${a?" ctl-btn--accent":""}`,onClick:()=>s(!a),children:m({en:"Gradient field",hu:"Gradiensmező"})})]})]})}function ja({fn:e,frame:n,height:i=360}){const{theme:a}=he(),s=u.useRef(null),r=u.useRef(null),[o,m]=u.useState(520);return u.useEffect(()=>{const l=r.current;if(!l)return;const h=new ResizeObserver(d=>{const f=d[0].contentRect.width;f&&m(f)});return h.observe(l),()=>h.disconnect()},[]),u.useEffect(()=>{const l=s.current;if(!l)return;const h=fe(l,o,i);Aa(h,o,i,e,n)},[o,i,e,n,a]),t.jsx("div",{className:"plot",ref:r,children:t.jsx("canvas",{ref:s})})}function Aa(e,n,i,a,s){const{a:o,b:m}=a.domain,l=240;let h=1/0,d=-1/0;const f=[];for(let $=0;$<=l;$++){const c=o+(m-o)*$/l,g=a.f(c);f.push(g),g<h&&(h=g),g>d&&(d=g)}const p=(d-h)*.12||1;h-=p,d+=p;const b=$=>40+($-o)/(m-o)*(n-80),x=$=>i-40-($-h)/(d-h)*(i-80);e.fillStyle=z("--plot-bg"),e.fillRect(0,0,n,i),e.strokeStyle=z("--plot-grid"),e.lineWidth=1;for(let $=0;$<=6;$++){const c=40+(n-80)*$/6;e.beginPath(),e.moveTo(c,40),e.lineTo(c,i-40),e.stroke()}s&&(e.fillStyle=z("--accent-soft"),e.globalAlpha=.7,e.fillRect(b(s.a),40,b(s.b)-b(s.a),i-80),e.globalAlpha=1),e.strokeStyle=z("--plot-point"),e.lineWidth=2.5,e.beginPath();for(let $=0;$<=l;$++){const c=o+(m-o)*$/l,g=b(c),k=x(f[$]);$===0?e.moveTo(g,k):e.lineTo(g,k)}if(e.stroke(),s){const $=(c,g,k,y)=>{e.strokeStyle=k,e.fillStyle=k,e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(b(c),x(g)),e.lineTo(b(c),i-40),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(b(c),x(g),5,0,Math.PI*2),e.fill(),e.font="600 12px ui-monospace, monospace",e.fillText(y,b(c)-4,i-40+16)};e.fillStyle=z("--plot-axis"),e.font="600 11px ui-monospace, monospace",e.fillText("a",b(s.a)-3,i-40+16),e.fillText("b",b(s.b)-3,i-40+16),$(s.y,s.fy,z("--plot-path2"),"y"),$(s.x,s.fx,z("--plot-accent"),"x")}}const Y=(Math.sqrt(5)-1)/2;function Ta(e,n=.01,i=40){let a=e.domain.a,s=e.domain.b,r=a+Y*(s-a),o=a+(1-Y)*(s-a),m=e.f(r),l=e.f(o),h=2;const d=[{k:0,a,b:s,x:r,y:o,fx:m,fy:l,evals:h,keep:"init"}];let f=0;for(;s-a>n&&f<i;)f++,m>l?(s=r,r=o,m=l,o=a+(1-Y)*(s-a),l=e.f(o),h++,d.push({k:f,a,b:s,x:r,y:o,fx:m,fy:l,evals:h,keep:"left"})):(a=o,o=r,l=m,r=a+Y*(s-a),m=e.f(r),h++,d.push({k:f,a,b:s,x:r,y:o,fx:m,fy:l,evals:h,keep:"right"}));return d}const qa=e=>(e.a+e.b)/2,Ha=W.find(e=>e.id==="golden");function Ma(){const{t:e}=_(),[n,i]=u.useState("quad1d"),a=ve.find(l=>l.id===n),s=u.useMemo(()=>Ta(a,.01,40),[a]),r=Q(s.length),o=[0,0,1,2,s.length-1],m=[{kicker:e({en:"The setup",hu:"A felállás"}),title:e({en:"One valley, one bottom",hu:"Egy völgy, egy mélypont"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Suppose f is unimodal on [a, b]: it goes down, then up, with a single lowest point. We don't need its derivative — only the ability to evaluate it.",hu:"Tegyük fel, hogy f unimodális az [a, b]-n: előbb csökken, majd nő, egyetlen mélyponttal. Nincs szükség a deriváltjára — csak ki kell tudnunk értékelni."})}),t.jsx(E,{emoji:"🎯",children:e({en:"Goal: trap the minimum in shrinking nested intervals, like the bisection method — but for minimizing instead of root-finding.",hu:"Cél: egyre szűkülő, egymásba ágyazott intervallumokba zárni a minimumot, mint a felezésnél — de minimumkeresésre."})})]})},{kicker:e({en:"Two probes",hu:"Két próba"}),title:e({en:"Peek at two inside points",hu:"Két belső pontnál kukucskálunk"}),body:t.jsx("p",{children:e({en:"Place two interior points y < x. Comparing f(y) and f(x) tells us which side the minimum can't be on — so we can throw that side away.",hu:"Helyezzünk el két belső pontot, y < x. Az f(y) és f(x) összevetése megmondja, melyik oldalon nem lehet a minimum — azt eldobhatjuk."})})},{kicker:e({en:"Discard",hu:"Eldobás"}),title:e({en:"Throw away a slice",hu:"Dobjunk el egy szeletet"}),body:t.jsx("p",{children:e({en:"If f(x) > f(y) the minimum lies in [a, x]; otherwise in [y, b]. Either way the bracket gets shorter while still containing the minimum.",hu:"Ha f(x) > f(y), a minimum az [a, x]-ben van; különben az [y, b]-ben. Akárhogy is, a befogó intervallum rövidül, de továbbra is tartalmazza a minimumot."})})},{kicker:e({en:"The trick",hu:"A trükk"}),title:e({en:"Why golden? Reuse a point",hu:"Miért arany? Pontot újrahasználunk"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Pick the split ratio so that one old probe becomes a probe of the new interval. Then every step costs just one new function evaluation, not two.",hu:"Válaszd a felosztási arányt úgy, hogy az egyik régi próbapont az új intervallum próbapontja legyen. Így minden lépés csak egy új függvénykiértékelésbe kerül, nem kettőbe."})}),t.jsxs("p",{children:[e({en:"That requirement forces the golden ratio ",hu:"Ez a követelmény az aranymetszést kényszeríti ki: "}),t.jsx(w,{children:"r = \\tfrac{\\sqrt5 - 1}{2} \\approx 0.618"}),"."]})]})},{kicker:e({en:"Done",hu:"Kész"}),title:e({en:"Squeeze to tolerance",hu:"Szorítsd a tűréshatárig"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Repeat until the interval is shorter than your tolerance ε, then report its midpoint. The width shrinks by the factor r every step — geometric, predictable convergence.",hu:"Ismételd, amíg az intervallum rövidebb nem lesz az ε tűrésnél, majd add vissza a felezőpontját. A szélesség minden lépésben r-szeresére csökken — geometrikus, kiszámítható konvergencia."})}),t.jsx(E,{emoji:"✨",children:e({en:"After n steps the bracket has length (b−a)·rⁿ. Want 3 digits? You can compute n in advance.",hu:"n lépés után a befogó hossza (b−a)·rⁿ. Kell 3 jegy? n előre kiszámolható."})})]})}];return t.jsxs(K,{meta:Ha,children:[t.jsx(O,{steps:m,graphic:l=>t.jsx(Na,{fn:a,fnId:n,setFnId:i,frames:s,player:r,targetFrame:o[l]??0})}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"The golden ratio, derived",hu:"Az aranymetszés, levezetve"}),children:[t.jsx("p",{children:e({en:"Place points so the two candidate intervals have equal length r(b−a):",hu:"Helyezd el a pontokat úgy, hogy a két jelölt intervallum hossza azonos legyen, r(b−a):"})}),t.jsx(w,{block:!0,children:"x = a + r(b-a), \\qquad y = a + (1-r)(b-a)."}),t.jsx("p",{children:e({en:"Requiring the surviving probe to land exactly where the next step needs it gives",hu:"Megkövetelve, hogy a megmaradó próbapont pont oda essen, ahol a következő lépésnek kell, kapjuk:"})}),t.jsx(w,{block:!0,children:"r^2 + r - 1 = 0 \\;\\Longrightarrow\\; r = \\frac{\\sqrt5 - 1}{2} \\approx 0.61803."})]}),t.jsxs(T,{label:e({en:"Steps to reach ε",hu:"Lépésszám az ε eléréséhez"}),proof:!0,children:[t.jsx(w,{block:!0,children:"n \\ge \\dfrac{\\log\\!\\big(\\varepsilon/(b-a)\\big)}{\\log r}."}),t.jsx("p",{children:e({en:"For f(x)=x²−0.8x+1 on [−1, 2] with ε = 0.005, this gives n ≥ 13.3, i.e. 14 steps — exactly what the demo needs.",hu:"Az f(x)=x²−0.8x+1 függvényre a [−1, 2]-n, ε = 0.005 mellett ez n ≥ 13.3, azaz 14 lépés — pontosan annyi, amennyit a demó igényel."})})]})]})]})}function Na({fn:e,fnId:n,setFnId:i,frames:a,player:s,targetFrame:r}){const{t:o}=_();u.useEffect(()=>{s.playing||s.setI(r)},[r]);const m=a[Math.min(s.i,a.length-1)],l=m.b-m.a,h=qa(m);return t.jsxs("div",{children:[t.jsx(ja,{fn:e,frame:m,height:340}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"r"})," ",t.jsx("b",{children:Y.toFixed(5)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"[a, b]"})," ",t.jsxs("b",{children:["[",m.a.toFixed(3),", ",m.b.toFixed(3),"]"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"width",hu:"szélesség"})})," ",t.jsx("b",{children:l.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"f-evals",hu:"kiértékelés"})})," ",t.jsx("b",{children:m.evals})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"midpoint",hu:"felezőpont"})})," ",t.jsx("b",{children:h.toFixed(5)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(J,{i:s.i,count:a.length,playing:s.playing,onPlay:s.play,onStep:s.step,onReset:s.reset,onScrub:s.setI}),t.jsx(ie,{label:o({en:"Function",hu:"Függvény"}),value:n,onChange:i,options:ve.map(d=>({value:d.id,label:d.label}))})]})]})}const Sa=(e,n)=>({v:n,f:e.f(n[0],n[1])});function Z(e,n){return n.map(i=>Sa(e,i)).sort((i,a)=>i.f-a.f)}function X(e,n,i,a,s){return{k:e,verts:n.map(r=>r.v),fvals:n.map(r=>r.f),centroid:a,trial:s,action:i}}function Ia(e,n,i=26){let a=Z(e,n);const s=[X(0,a,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let r=1;r<=i;r++){const o=a[0],m=a[a.length-1],l=a.slice(0,-1),h=A(l.reduce((p,b)=>B(p,b.v),[0,0]),1/l.length),d=j(A(h,2),m.v);if(e.f(d[0],d[1])<m.f)a=Z(e,[...l.map(p=>p.v),d]),s.push(X(r,a,{en:"Reflection accepted",hu:"Tükrözés elfogadva"},h,{kind:"reflect",point:d}));else{const p=a.map(b=>b===o?b.v:B(o.v,A(j(b.v,o.v),.5)));a=Z(e,p),s.push(X(r,a,{en:"Shrink toward best vertex",hu:"Zsugorítás a legjobb csúcs felé"},h))}}return s}function Fa(e,n,i=1.4,a=.7,s=20){let r=Z(e,n);const o=[X(0,r,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let m=1;m<=s;m++){const l=r[0],h=r[r.length-1],d=r[r.length-2],f=r.slice(0,-1),p=A(f.reduce((k,y)=>B(k,y.v),[0,0]),1/f.length),b=j(A(p,2),h.v),x=e.f(b[0],b[1]);let $,c,g;if(x<l.f){const k=B(p,A(j(b,p),i));e.f(k[0],k[1])<l.f?(g=[...f.map(v=>v.v),k],$={en:"Expansion accepted",hu:"Megnyújtás elfogadva"},c={kind:"expand",point:k}):(g=[...f.map(v=>v.v),b],$={en:"Reflection (no expansion)",hu:"Tükrözés (nincs nyújtás)"},c={kind:"reflect",point:b})}else if(x<d.f)g=[...f.map(k=>k.v),b],$={en:"Reflection accepted",hu:"Tükrözés elfogadva"},c={kind:"reflect",point:b};else{const k=h.f<x?j(p,A(j(b,p),a)):B(p,A(j(b,p),a));e.f(k[0],k[1])<Math.min(h.f,x)?(g=[...f.map(v=>v.v),k],$={en:"Contraction accepted",hu:"Összehúzás elfogadva"},c={kind:"contract",point:k}):(g=r.map(v=>v===l?v.v:B(l.v,A(j(v.v,l.v),.5))),$={en:"Shrink to best",hu:"Zsugorítás a legjobbhoz"})}r=Z(e,g),o.push(X(m,r,$,p,c))}return o}const Pa=W.find(e=>e.id==="simplex"),ge=[[-2,4],[-1,4],[-1.5,5]];function Ba(){const{t:e}=_(),[n,i]=u.useState("nm"),[a,s]=u.useState(1.4),[r,o]=u.useState(.7),m=u.useMemo(()=>n==="simplex"?Ia(I,ge,26):Fa(I,ge,a,r,22),[n,a,r]),l=Q(m.length),h=[0,1,2,3,m.length-1],d=[{kicker:e({en:"No derivatives",hu:"Derivált nélkül"}),title:e({en:"Send in a triangle",hu:"Küldj be egy háromszöget"}),body:t.jsx("p",{children:e({en:"These methods never compute a gradient. They keep a shape — for two variables, a triangle (a simplex) — and move it downhill using only function values at its corners.",hu:"Ezek a módszerek sosem számolnak gradienst. Egy alakzatot tartanak fenn — két változóra háromszöget (szimplexet) — és csak a sarkokban felvett függvényértékek alapján mozgatják lefelé."})})},{kicker:e({en:"Reflect",hu:"Tükrözés"}),title:e({en:"Flip the worst corner",hu:"Fordítsd át a legrosszabb sarkot"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Find the worst vertex (highest f). Reflect it through the centroid of the others — the dotted line — to a trial point on the far side.",hu:"Keresd meg a legrosszabb csúcsot (legnagyobb f). Tükrözd a többiek súlypontján át — a szaggatott vonal mentén — egy próbapontba a túloldalon."})}),t.jsx(E,{emoji:"🟢",children:e({en:"Green = best vertex, amber = worst, the open dot = trial point being tested.",hu:"Zöld = legjobb csúcs, borostyán = legrosszabb, az üres pont = a tesztelt próbapont."})})]})},{kicker:e({en:"Expand / contract",hu:"Nyújtás / húzás"}),title:e({en:"Greedy or cautious",hu:"Mohó vagy óvatos"}),body:t.jsx("p",{children:e({en:"Nelder–Mead is adaptive: if a reflection is great, expand further (factor α); if it's poor, contract back (factor β); if even that fails, shrink toward the best vertex.",hu:"A Nelder–Mead alkalmazkodó: ha a tükrözés remek, nyújts tovább (α tényező); ha gyenge, húzd vissza (β tényező); ha még az sem segít, zsugorítsd a legjobb csúcs felé."})})},{kicker:e({en:"Crawl down",hu:"Lekúszás"}),title:e({en:"The amoeba walks",hu:"Az amőba sétál"}),body:t.jsx("p",{children:e({en:"Repeating these moves, the triangle tumbles and stretches down the valley — which is why Nelder–Mead is nicknamed the “amoeba” method.",hu:"E lépéseket ismételve a háromszög bukfencezve és nyúlva gurul le a völgyben — ezért becézik a Nelder–Mead-et „amőba” módszernek."})})},{kicker:e({en:"Tune it",hu:"Hangold"}),title:e({en:"Simplex vs Nelder–Mead",hu:"Szimplex kontra Nelder–Mead"}),body:t.jsx("p",{children:e({en:"Switch to the plain simplex (reflect-or-shrink only) and compare. Then play with α and β — bigger α is bolder, smaller β contracts harder.",hu:"Válts az egyszerű szimplexre (csak tükrözés vagy zsugorítás) és hasonlítsd össze. Aztán játssz az α és β értékkel — nagyobb α merészebb, kisebb β erősebben húz."})})}];return t.jsxs(K,{meta:Pa,children:[t.jsx(O,{steps:d,graphic:f=>t.jsx(Da,{frames:m,player:l,targetFrame:h[f]??0,variant:n,setVariant:i,alpha:a,setAlpha:s,beta:r,setBeta:o})}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"The moves",hu:"A lépések"}),children:[t.jsx("p",{children:e({en:"Order vertices f(x⁰) ≤ … ≤ f(xⁿ); centroid of the best n:",hu:"Rendezd a csúcsokat f(x⁰) ≤ … ≤ f(xⁿ); a legjobb n súlypontja:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_c = \\tfrac1n\\textstyle\\sum_{i=0}^{n-1}\\mathbf x^{(i)}, \\qquad \\mathbf x_r = 2\\mathbf x_c - \\mathbf x^{(n)}."}),t.jsx("p",{children:e({en:"Expansion and contraction:",hu:"Nyújtás és húzás:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_e = \\mathbf x_c + \\alpha(\\mathbf x_r - \\mathbf x_c), \\qquad \\mathbf x_z = \\mathbf x_c \\pm \\beta(\\mathbf x_r - \\mathbf x_c)."})]}),t.jsxs(T,{label:e({en:"Stopping",hu:"Megállás"}),proof:!0,children:[t.jsx("p",{children:e({en:"Stop when the simplex is tiny, or when the spread of values is small:",hu:"Állj meg, ha a szimplex apró, vagy ha az értékek szórása kicsi:"})}),t.jsx(w,{block:!0,children:"\\sigma = \\sqrt{\\tfrac1{n+1}\\textstyle\\sum_{i=0}^{n}\\big(f(\\mathbf x^{(i)}) - \\bar f\\big)^2} < \\text{tol}."})]})]})]})}function Da({frames:e,player:n,targetFrame:i,variant:a,setVariant:s,alpha:r,setAlpha:o,beta:m,setBeta:l}){const{t:h}=_();u.useEffect(()=>{n.playing||n.setI(i)},[i]);const d=Math.min(n.i,e.length-1),f=e[d],p={triangles:[{verts:f.verts,centroid:f.centroid,trial:f.trial}],showMin:!0},b=Math.min(...f.fvals);return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:p,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:f.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:h({en:"action",hu:"lépés"})})," ",t.jsx("b",{children:h(f.action)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:h({en:"best f",hu:"legjobb f"})})," ",t.jsx("b",{children:b.toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(J,{i:n.i,count:e.length,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx(ie,{label:h({en:"Method",hu:"Módszer"}),value:a,onChange:x=>s(x),options:[{value:"nm",label:"Nelder–Mead"},{value:"simplex",label:h({en:"Plain simplex",hu:"Egyszerű szimplex"})}]}),a==="nm"&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{label:"α",value:r,min:1.1,max:2.5,step:.1,onChange:o,fmt:x=>x.toFixed(1)}),t.jsx(oe,{label:"β",value:m,min:.2,max:.9,step:.1,onChange:l,fmt:x=>x.toFixed(1)})]})]})]})}function _e(e,n){return{frames:n.map((a,s)=>{const r=e.grad(a[0],a[1]);return{k:s,p:a,fval:e.f(a[0],a[1]),grad:r,err:e.min?de(a,e.min):void 0}}),points:n}}function Va(e,n,i=.3,a=24){const s=[n];let r=n;for(let o=0;o<a;o++){const m=e.grad(r[0],r[1]),l=S(m);if(l<1e-9)break;r=j(r,A(m,i/l)),s.push(r)}return _e(e,s)}function Ea(e,n,i,a=3,s=40){const r=(Math.sqrt(5)-1)/2;let o=0,m=a;const l=b=>{const x=B(n,A(i,b));return e.f(x[0],x[1])};let h=o+r*(m-o),d=o+(1-r)*(m-o),f=l(h),p=l(d);for(let b=0;b<s&&m-o>1e-6;b++)f>p?(m=h,h=d,f=p,d=o+(1-r)*(m-o),p=l(d)):(o=d,d=h,p=f,h=o+r*(m-o),f=l(h));return(o+m)/2}function we(e,n,i=14){const a=[n];let s=n;for(let r=0;r<i;r++){const o=e.grad(s[0],s[1]);if(S(o)<1e-8)break;const m=A(o,-1),l=Ea(e,s,m);s=B(s,A(m,l)),a.push(s)}return _e(e,a)}const Wa=W.find(e=>e.id==="gradient");function Ra(){const{t:e}=_(),n=I,[i,a]=u.useState([-1,4]),[s,r]=u.useState("constant"),[o,m]=u.useState(.3),l=u.useMemo(()=>s==="constant"?Va(n,i,o,26):we(n,i,16),[n,i,s,o]),h=Q(l.points.length),d=[0,1,2,l.points.length-1,l.points.length-1],f=[{kicker:e({en:"The idea",hu:"Az ötlet"}),title:e({en:"Walk straight downhill",hu:"Lefelé, egyenesen"}),body:t.jsx("p",{children:e({en:"From any point, the steepest downhill direction is the negative gradient −∇f. The gradient method just keeps stepping that way.",hu:"Bármely pontból a legmeredekebb lefelé irány a negatív gradiens, −∇f. A gradiens módszer egyszerűen mindig arra lép."})})},{kicker:e({en:"Perpendicular",hu:"Merőleges"}),title:e({en:"Gradient ⟂ contour",hu:"Gradiens ⟂ szintvonal"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The gradient is always perpendicular to the contour line through that point — so each step crosses the level curves at a right angle.",hu:"A gradiens mindig merőleges a ponton átmenő szintvonalra — így minden lépés derékszögben metszi a szintvonalakat."})}),t.jsx(E,{emoji:"🧭",children:e({en:"The orange arrow is the descent direction. Click anywhere on the plot to drop a new starting point!",hu:"A narancs nyíl a lejtés iránya. Kattints bárhová az ábrán egy új kezdőpontért!"})})]})},{kicker:e({en:"Step size",hu:"Lépésköz"}),title:e({en:"How far each step?",hu:"Milyen messze lépjünk?"}),body:t.jsx("p",{children:e({en:"With a constant step you never land exactly on the minimum — you orbit it. The optimal method instead line-searches for the best step each time.",hu:"Állandó lépésközzel sosem érsz pontosan a minimumba — körözöl körülötte. Az optimális módszer ehelyett minden lépésben a legjobb lépéshosszt keresi."})})},{kicker:e({en:"The catch",hu:"A bökkenő"}),title:e({en:"Zig-zag in the valley",hu:"Cikcakk a völgyben"}),body:t.jsx("p",{children:e({en:"Consecutive optimal steps are perpendicular, so in a long narrow valley the path bounces side to side and creeps forward slowly. Convergence is only linear.",hu:"Az egymást követő optimális lépések merőlegesek, ezért egy hosszú, keskeny völgyben a pálya oldalról oldalra pattog és lassan kúszik előre. A konvergencia csak lineáris."})})},{kicker:e({en:"Try it",hu:"Próbáld ki"}),title:e({en:"Compare the two modes",hu:"Hasonlítsd össze a két módot"}),body:t.jsx("p",{children:e({en:"Switch between constant and optimal steps, drag the step-size slider, and click different starts. Watch the path and the error readout react.",hu:"Válts az állandó és az optimális lépés között, húzd a lépésköz-csúszkát, és kattints különböző kezdőpontokra. Figyeld, hogyan reagál a pálya és a hiba-kijelző."})})}];return t.jsxs(K,{meta:Wa,children:[t.jsx(O,{steps:f,graphic:p=>t.jsx(Ga,{result:l,player:h,targetFrame:d[p]??0,mode:s,setMode:r,h:o,setH:m,onPick:a})}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"Steepest descent",hu:"Legmeredekebb lejtés"}),children:[t.jsx("p",{children:e({en:"Among all unit directions u, the directional derivative is most negative for",hu:"Az összes u egységirány közül az iránymenti derivált a következőre a legnegatívabb:"})}),t.jsx(w,{block:!0,children:"\\mathbf{u} = -\\,\\frac{f'(\\mathbf p)}{\\lVert f'(\\mathbf p)\\rVert_2}, \\qquad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\alpha_k\\, f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"Constant step: αₖ = h / ‖f′(pₖ)‖. Optimal step: choose αₖ to minimize φ(t) = f(pₖ − t f′(pₖ)) along the ray.",hu:"Állandó lépés: αₖ = h / ‖f′(pₖ)‖. Optimális lépés: válaszd αₖ-t úgy, hogy minimalizálja a φ(t) = f(pₖ − t f′(pₖ)) függvényt a félegyenesen."})})]}),t.jsx(T,{label:e({en:"Why it zig-zags",hu:"Miért cikcakkozik"}),proof:!0,children:t.jsx("p",{children:e({en:"At an optimal step φ′(αₖ)=0, i.e. f′(pₖ₊₁)·f′(pₖ)=0 — successive search directions are orthogonal. In an ill-conditioned valley that forces a slow staircase.",hu:"Optimális lépésnél φ′(αₖ)=0, azaz f′(pₖ₊₁)·f′(pₖ)=0 — az egymást követő keresési irányok merőlegesek. Rosszul kondicionált völgyben ez lassú lépcsőzést eredményez."})})})]})]})}function Ga({result:e,player:n,targetFrame:i,mode:a,setMode:s,h:r,setH:o,onPick:m}){const{t:l}=_();u.useEffect(()=>{n.playing||n.setI(i)},[i]);const h=Math.min(n.i,e.frames.length-1),d=e.frames[h],f=d.p,p=d.grad??[0,0],b=S(p)||1,x=B(f,A(j([0,0],p),.4/b)),$={paths:[{pts:e.points.slice(0,h+1)}],points:[{p:f,ring:!0}],arrow:{from:f,to:x},showMin:!0};return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:$,height:400,onPick:m}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",l({en:"path",hu:"pálya"})]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-accent)"}})," −∇f"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-point)"}})," ",l({en:"minimum (1, ½)",hu:"minimum (1, ½)"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:d.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",f[0].toFixed(3),", ",f[1].toFixed(3),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:d.fval.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(d.err??0).toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(J,{i:n.i,count:e.points.length,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx(ie,{label:l({en:"Step rule",hu:"Lépésszabály"}),value:a,onChange:c=>s(c),options:[{value:"constant",label:l({en:"Constant step",hu:"Állandó lépés"})},{value:"optimal",label:l({en:"Optimal (line search)",hu:"Optimális (vonalkeresés)"})}]}),a==="constant"&&t.jsx(oe,{label:l({en:"step h",hu:"lépés h"}),value:r,min:.05,max:.8,step:.05,onChange:o,fmt:c=>c.toFixed(2)})]})]})}function be({series:e,height:n=320,yLabel:i="‖pₖ − p*‖"}){const{theme:a}=he(),s=u.useRef(null),r=u.useRef(null),[o,m]=u.useState(520);return u.useEffect(()=>{const l=r.current;if(!l)return;const h=new ResizeObserver(d=>{const f=d[0].contentRect.width;f&&m(f)});return h.observe(l),()=>h.disconnect()},[]),u.useEffect(()=>{const l=s.current;if(!l)return;const h=fe(l,o,n);Ca(h,o,n,e,i)},[o,n,e,a,i]),t.jsx("div",{className:"plot",ref:r,children:t.jsx("canvas",{ref:s})})}const se=1e-16;function Ca(e,n,i,a,s){e.fillStyle=z("--plot-bg"),e.fillRect(0,0,n,i);const h=Math.max(1,...a.map($=>$.errs.length-1)),d=a.flatMap($=>$.errs.map(c=>Math.log10(Math.max(c,se))));let f=Math.max(...d,0),p=Math.min(...d,-1);f=Math.ceil(f),p=Math.floor(p),f-p>18&&(p=f-18);const b=$=>52+$/h*(n-52-16),x=$=>16+(1-($-p)/(f-p))*(i-16-34);e.strokeStyle=z("--plot-grid"),e.fillStyle=z("--plot-axis"),e.font="600 10px ui-monospace, monospace",e.lineWidth=1;for(let $=p;$<=f;$++){const c=x($);e.beginPath(),e.moveTo(52,c),e.lineTo(n-16,c),e.stroke(),e.fillText(`1e${$}`,6,c+3)}for(let $=0;$<=h;$+=Math.ceil(h/8))e.fillText(`${$}`,b($)-3,i-34+16);e.save(),e.translate(12,i/2),e.rotate(-Math.PI/2),e.fillText(s,0,0),e.restore();for(const $ of a){const c=$.upTo!=null?Math.min($.upTo,$.errs.length-1):$.errs.length-1,g=te($.color,z("--plot-path"));e.strokeStyle=g,e.fillStyle=g,e.lineWidth=2.4,e.beginPath();for(let k=0;k<=c;k++){const y=Math.log10(Math.max($.errs[k],se)),v=b(k),q=x(y);k===0?e.moveTo(v,q):e.lineTo(v,q)}e.stroke();for(let k=0;k<=c;k++){const y=Math.log10(Math.max($.errs[k],se));e.beginPath(),e.arc(b(k),x(y),2.6,0,Math.PI*2),e.fill()}}}function La(e,n,i,a,s=14){let r=i.slice();const o=[],m=h=>{const d=j(n,ke(e,r));return o.push({k:h,p:r.slice(),err:S(j(r,a)),res:S(d)}),d};let l=m(0);for(let h=1;h<=s;h++){const d=ke(e,l),f=N(l,d);if(Math.abs(f)<1e-18)break;const p=N(l,l)/f;if(r=r.map((b,x)=>b+p*l[x]),l=m(h),S(l)<1e-12)break}return o}const Ka=W.find(e=>e.id==="linsys"),Oa=[[4,2,-1],[2,5,0],[-1,0,3]],Ua=[0,8,1],Qa=[-1,2,0],Ja=[3,3,3];function Ya(){const{t:e}=_(),n=u.useMemo(()=>La(Oa,Ua,Ja,Qa,14),[]),i=Q(n.length),a=[0,1,2,n.length-1,n.length-1],s=[{kicker:e({en:"A surprise link",hu:"Meglepő kapcsolat"}),title:e({en:"Solving = minimizing",hu:"Megoldani = minimalizálni"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"If A is symmetric and positive definite, the quadratic g(x) = ½xᵀAx − bᵀx has exactly one minimum — and its gradient is ∇g = Ax − b. So ∇g = 0 is precisely Ax = b.",hu:"Ha A szimmetrikus és pozitív definit, a g(x) = ½xᵀAx − bᵀx kvadratikusnak pontosan egy minimuma van — és a gradiense ∇g = Ax − b. Tehát ∇g = 0 épp az Ax = b."})}),t.jsx(E,{emoji:"🎢",children:e({en:"Solving the linear system becomes rolling a paraboloid bowl to the bottom — no matrix inverse required.",hu:"A lineáris rendszer megoldása egy paraboloid tál aljára gurulássá válik — mátrixinverz nélkül."})})]})},{kicker:e({en:"The residual",hu:"A reziduum"}),title:e({en:"Which way is down?",hu:"Merre van lefelé?"}),body:t.jsx("p",{children:e({en:"The downhill direction is the residual r = b − Ax (the negative gradient). Step along it by the exact distance that minimizes g on that line.",hu:"A lefelé irány az r = b − Ax reziduum (a negatív gradiens). Lépj mentén pontosan akkorát, amely minimalizálja g-t azon az egyenesen."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"An exact line-search formula",hu:"Pontos vonalkeresési képlet"}),body:t.jsx("p",{children:e({en:"Because g is quadratic, the best step length has a closed form: αₖ = (rᵀr)/(rᵀAr). No searching — just plug in.",hu:"Mivel g kvadratikus, a legjobb lépéshossz zárt alakú: αₖ = (rᵀr)/(rᵀAr). Nincs keresés — csak behelyettesítés."})})},{kicker:e({en:"Watch it solve",hu:"Nézd, ahogy megold"}),title:e({en:"A 3×3 system, live",hu:"Egy 3×3 rendszer, élőben"}),body:t.jsx("p",{children:e({en:"Starting from (3, 3, 3), both the error ‖pₖ − x*‖ and the residual ‖rₖ‖ shrink steadily toward the true solution (−1, 2, 0).",hu:"A (3, 3, 3)-ból indulva a hiba ‖pₖ − x*‖ és a reziduum ‖rₖ‖ is folyamatosan csökken a valódi (−1, 2, 0) megoldás felé."})})},{kicker:e({en:"Note",hu:"Megjegyzés"}),title:e({en:"Steady, but linear",hu:"Egyenletes, de lineáris"}),body:t.jsx("p",{children:e({en:"Like the gradient method it descends reliably but only linearly — conjugate-gradient methods (next courses) fix the zig-zag and finish in n steps.",hu:"A gradiens módszerhez hasonlóan megbízhatóan, de csak lineárisan ereszkedik — a konjugált gradiens módszerek (későbbi kurzusok) megszüntetik a cikcakkot és n lépésben végeznek."})})}],r=[{label:"err",color:"var(--plot-path)",errs:n.map(o=>o.err)},{label:"res",color:"var(--plot-path2)",errs:n.map(o=>o.res)}];return t.jsxs(K,{meta:Ka,children:[t.jsx(O,{steps:s,graphic:o=>t.jsx(Za,{frames:n,series:r,player:i,targetFrame:a[o]??0})}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"Gradient of the quadratic",hu:"A kvadratikus gradiense"}),children:[t.jsx(w,{block:!0,children:"g(\\mathbf x) = \\tfrac12 \\mathbf x^{\\mathsf T} A\\mathbf x - \\mathbf b^{\\mathsf T}\\mathbf x + c, \\qquad g'(\\mathbf x) = A\\mathbf x - \\mathbf b."}),t.jsx("p",{children:e({en:"If A is positive definite, g has a unique global minimum at x = A⁻¹b — the solution of the system.",hu:"Ha A pozitív definit, g-nek egyetlen globális minimuma van az x = A⁻¹b pontban — a rendszer megoldása."})})]}),t.jsx(T,{label:e({en:"The iteration",hu:"Az iteráció"}),proof:!0,children:t.jsx(w,{block:!0,children:"\\mathbf r^{(k)} = \\mathbf b - A\\mathbf p^{(k)}, \\quad \\alpha_k = \\frac{(\\mathbf r^{(k)})^{\\mathsf T}\\mathbf r^{(k)}}{(\\mathbf r^{(k)})^{\\mathsf T} A\\,\\mathbf r^{(k)}}, \\quad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} + \\alpha_k \\mathbf r^{(k)}."})})]})]})}function Za({frames:e,series:n,player:i,targetFrame:a}){const{t:s}=_();u.useEffect(()=>{i.playing||i.setI(a)},[a]);const r=Math.min(i.i,e.length-1),o=e[r],m=n.map(l=>({...l,upTo:r}));return t.jsxs("div",{children:[t.jsx("div",{style:{padding:"16px 16px 0",fontFamily:"var(--mono)",fontSize:".82rem",color:"var(--ink-soft)"},children:t.jsx(w,{block:!0,children:"\\begin{aligned} 4x_1 + 2x_2 - x_3 &= 0 \\\\ 2x_1 + 5x_2\\;\\;\\;\\; &= 8 \\\\ -x_1 \\;\\;\\;\\;\\;+ 3x_3 &= 1 \\end{aligned}"})}),t.jsx(be,{series:m,height:260,yLabel:"error / residual"}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ‖pₖ − x*‖"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," ‖rₖ‖"]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:o.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",o.p.map(l=>l.toFixed(3)).join(", "),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:s({en:"error",hu:"hiba"})})," ",t.jsx("b",{children:o.err.toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(J,{i:i.i,count:e.length,playing:i.playing,onPlay:i.play,onStep:i.step,onReset:i.reset,onScrub:i.setI}),t.jsx("span",{className:"pill",children:s({en:"true x* = (−1, 2, 0)",hu:"valódi x* = (−1, 2, 0)"})})]})]})}function Xa(e,n,i=8){const a=[n];let s=n;for(let o=0;o<i;o++){const m=e.grad(s[0],s[1]);if(S(m)<1e-10)break;const l=e.hess(s[0],s[1]),h=ye(l,m);if(!h)break;s=j(s,h),a.push(s)}return{frames:a.map((o,m)=>({k:m,p:o,fval:e.f(o[0],o[1]),grad:e.grad(o[0],o[1]),err:e.min?de(o,e.min):void 0})),points:a}}const ei=W.find(e=>e.id==="newton"),ue=[-1,4];function ti(){const{t:e}=_(),[n,i]=u.useState(!0),a=u.useMemo(()=>Xa(I,ue,8),[]),s=u.useMemo(()=>we(I,ue,16),[]),r=Q(Math.max(a.points.length,6)),o=[0,1,2,a.points.length-1,a.points.length-1],m=[{kicker:e({en:"Use the curve",hu:"Használd a görbületet"}),title:e({en:"Fit a bowl, jump to its bottom",hu:"Illessz egy tálat, ugorj az aljára"}),body:t.jsx("p",{children:e({en:"Gradient methods only know the slope. Newton's method also uses curvature: it fits a quadratic bowl (the 2nd-order Taylor model) at the current point and jumps straight to that bowl's minimum.",hu:"A gradiens módszer csak a meredekséget ismeri. A Newton-módszer a görbületet is használja: a jelenlegi pontban illeszt egy kvadratikus tálat (a másodrendű Taylor-modellt), és egyenesen annak minimumába ugrik."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"Solve, don't crawl",hu:"Oldd meg, ne kússz"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Each step solves a small linear system with the Hessian H = f''. The update is pₖ₊₁ = pₖ − H⁻¹∇f. No step-size tuning needed.",hu:"Minden lépés egy kis lineáris rendszert old meg a H = f'' Hesse-mátrixszal. A frissítés pₖ₊₁ = pₖ − H⁻¹∇f. Nincs szükség lépésköz-hangolásra."})}),t.jsx(E,{emoji:"⚡",children:e({en:"For this function Newton reaches the minimum to machine precision in ~5 steps — and from (1, 3) it lands exactly in one.",hu:"Erre a függvényre a Newton ~5 lépésben gépi pontossággal eléri a minimumot — (1, 3)-ból pedig egyetlen lépésben pontosan odaér."})})]})},{kicker:e({en:"Speed",hu:"Sebesség"}),title:e({en:"Quadratic convergence",hu:"Kvadratikus konvergencia"}),body:t.jsx("p",{children:e({en:"Near the minimum the error roughly squares each step: digits of accuracy double. The convergence chart below shows Newton plunging while the gradient method inches down.",hu:"A minimum közelében a hiba nagyjából négyzetre emelkedik lépésenként: a pontos jegyek száma megduplázódik. Az alábbi konvergencia-ábrán a Newton zuhan, míg a gradiens módszer araszol."})})},{kicker:e({en:"The price",hu:"Az ára"}),title:e({en:"You must know H",hu:"Ismerned kell H-t"}),body:t.jsx("p",{children:e({en:"Newton needs the Hessian and a fresh linear solve every step — expensive in high dimensions. And if H isn't positive definite, the “jump” can head uphill.",hu:"A Newtonhoz minden lépésben kell a Hesse-mátrix és egy új lineáris megoldás — sok változónál drága. És ha H nem pozitív definit, az „ugrás” akár felfelé is vihet."})})},{kicker:e({en:"Compare",hu:"Hasonlíts"}),title:e({en:"Newton vs gradient",hu:"Newton kontra gradiens"}),body:t.jsx("p",{children:e({en:"Both start at (−1, 4). Toggle the gradient path on and off to feel the difference between a handful of Newton jumps and a long gradient staircase.",hu:"Mindkettő (−1, 4)-ből indul. Kapcsold be-ki a gradiens pályát, hogy megérezd a különbséget néhány Newton-ugrás és egy hosszú gradiens-lépcső között."})})}],l=[{label:"Newton",color:"var(--plot-path2)",errs:a.frames.map(h=>h.err??0)},{label:e({en:"Gradient",hu:"Gradiens"}),color:"var(--plot-path)",errs:s.frames.map(h=>h.err??0)}];return t.jsxs(K,{meta:ei,children:[t.jsx(O,{steps:m,graphic:h=>t.jsx(ni,{nwt:a,grad:s,player:r,targetFrame:o[h]??0,showGradient:n,setShowGradient:i})}),t.jsxs("div",{style:{marginTop:18},children:[t.jsx("p",{className:"muted",style:{marginBottom:6},children:e({en:"Error vs iteration (log scale) — Newton's curve falls off a cliff:",hu:"Hiba az iteráció függvényében (log skála) — a Newton görbéje leszakad:"})}),t.jsxs("div",{className:"scrolly__graphic",style:{boxShadow:"none"},children:[t.jsx(be,{series:l,height:300}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",e({en:"Gradient (optimal)",hu:"Gradiens (optimális)"})]})]})]})]}),t.jsxs(U,{children:[t.jsxs(T,{label:e({en:"Newton's iteration",hu:"Newton-iteráció"}),children:[t.jsx(w,{block:!0,children:"\\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\big(f''(\\mathbf p^{(k)})\\big)^{-1} f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"This is exactly Newton's method applied to the equation ∇f(x) = 0.",hu:"Ez pontosan a Newton-módszer a ∇f(x) = 0 egyenletre alkalmazva."})})]}),t.jsxs(T,{label:e({en:"Convergence",hu:"Konvergencia"}),proof:!0,children:[t.jsx("p",{children:e({en:"If f ∈ C³, ∇f(p)=0 and f''(p) is positive definite, the iteration converges quadratically:",hu:"Ha f ∈ C³, ∇f(p)=0 és f''(p) pozitív definit, az iteráció kvadratikusan konvergál:"})}),t.jsx(w,{block:!0,children:"\\lVert \\mathbf p^{(k+1)} - \\mathbf p\\rVert \\le C\\,\\lVert \\mathbf p^{(k)} - \\mathbf p\\rVert^2."})]})]})]})}function ni({nwt:e,grad:n,player:i,targetFrame:a,showGradient:s,setShowGradient:r}){const{t:o}=_();u.useEffect(()=>{i.playing||i.setI(a)},[a]);const m=i.i,l=Math.min(m,e.points.length-1),h=[{pts:e.points.slice(0,l+1),color:"var(--plot-path2)"}];s&&h.push({pts:n.points.slice(0,Math.min(m+1,n.points.length)),color:"var(--plot-path)"});const d={paths:h,points:[{p:e.points[l],ring:!0,color:"var(--plot-path2)"}],showMin:!0},f=e.frames[l];return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:d,height:400}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),s&&t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",o({en:"gradient",hu:"gradiens"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:f.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",e.points[l][0].toFixed(4),", ",e.points[l][1].toFixed(4),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:f.fval.toExponential(2)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(f.err??0).toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(J,{i:i.i,count:Math.max(e.points.length,6),playing:i.playing,onPlay:i.play,onStep:i.step,onReset:i.reset,onScrub:i.setI}),t.jsx("button",{className:`ctl-btn${s?" ctl-btn--accent":""}`,onClick:()=>r(!s),children:o(s?{en:"Hide gradient path",hu:"Gradiens pálya elrejtése"}:{en:"Show gradient path",hu:"Gradiens pálya mutatása"})})]})]})}const xe=2,F=(e,n)=>e.map(i=>n.map(a=>i*a)),P=(e,n)=>e.map((i,a)=>i.map((s,r)=>s+n[a][r])),L=(e,n)=>e.map(i=>i.map(a=>a*n)),ai=(e,n)=>e.map(i=>N(i,n));function ii(e,n,i=.05){const a=[[i,0],[0,i]],s=e.f(n[0],n[1]),r=[[0,0],[0,0]];for(let o=0;o<xe;o++)for(let m=0;m<xe;m++){const l=e.f(n[0]+a[o][0]+a[m][0],n[1]+a[o][1]+a[m][1]),h=e.f(n[0]+a[o][0],n[1]+a[o][1]),d=e.f(n[0]+a[m][0],n[1]+a[m][1]);r[o][m]=(l-h-d+s)/(i*i)}return[[r[0][0],(r[0][1]+r[1][0])/2],[(r[0][1]+r[1][0])/2,r[1][1]]]}function si(e,n,i,a){const s=ai(n,i),r=j(a,s),o=N(i,i);if(e==="broyden")return P(n,L(F(r,i),1/o));if(e==="psb"){const p=P(F(r,i),F(i,r)),b=L(p,1/o),x=N(r,i)/(o*o),$=L(F(i,i),-x);return P(n,P(b,$))}const m=N(a,i),l=N(i,s);if(e==="bfgs"){const p=L(F(a,a),1/m),b=L(F(s,s),-1/l);return P(n,P(p,b))}const h=L(P(F(r,a),F(a,r)),1/m),d=N(r,i)/(m*m),f=L(F(a,a),-d);return P(n,P(h,f))}function ri(e,n,i,a=12,s=.05){let r=n,o=ii(e,r,s);const m=[r];for(let h=0;h<a;h++){const d=e.grad(r[0],r[1]);if(S(d)<1e-12)break;const f=ye(o,A(d,-1));if(!f)break;const p=[r[0]+f[0],r[1]+f[1]],b=e.grad(p[0],p[1]),x=j(b,d);if(o=si(i,o,f,x),r=p,m.push(r),S(f)<1e-12)break}return{frames:m.map((h,d)=>({k:d,p:h,fval:e.f(h[0],h[1]),grad:e.grad(h[0],h[1]),err:e.min?de(h,e.min):void 0})),points:m}}const le={broyden:"Broyden",psb:"PSB",bfgs:"BFGS",dfp:"DFP"},oi=W.find(e=>e.id==="quasinewton"),mi=[2,2],ne={broyden:"var(--plot-axis)",psb:"var(--warm)",bfgs:"var(--plot-path)",dfp:"var(--plot-path2)"};function li(){const{t:e}=_(),[n,i]=u.useState("bfgs"),a=u.useMemo(()=>Object.fromEntries(["broyden","psb","bfgs","dfp"].map(d=>[d,ri(I,mi,d,12)])),[]),s=Math.max(...Object.values(a).map(h=>h.points.length)),r=Q(s),o=[0,1,2,s-1,s-1],m=[{kicker:e({en:"The dilemma",hu:"A dilemma"}),title:e({en:"Newton is fast but greedy",hu:"A Newton gyors, de falánk"}),body:t.jsx("p",{children:e({en:"Newton converges beautifully — but it demands the exact Hessian and a linear solve every step. In big problems that's too costly. Can we get Newton-like speed without it?",hu:"A Newton gyönyörűen konvergál — de pontos Hesse-mátrixot és lineáris megoldást kíván lépésenként. Nagy feladatokban ez túl drága. Megkaphatjuk a Newton-szerű sebességet enélkül?"})})},{kicker:e({en:"The secant idea",hu:"A szelő-ötlet"}),title:e({en:"Learn curvature from steps",hu:"Tanuld a görbületet a lépésekből"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Keep an approximation A ≈ Hessian and improve it each step so it matches the observed change in gradient: A·s = y, where s = pₖ₊₁−pₖ and y = ∇fₖ₊₁−∇fₖ. That's the secant equation.",hu:"Tarts fenn egy A ≈ Hesse közelítést, és javítsd lépésenként úgy, hogy illeszkedjen a gradiens megfigyelt változására: A·s = y, ahol s = pₖ₊₁−pₖ és y = ∇fₖ₊₁−∇fₖ. Ez a szelő-egyenlet."})}),t.jsx(E,{emoji:"🧩",children:e({en:"Different ways to satisfy A·s = y give different updates: Broyden, PSB, BFGS, DFP.",hu:"Az A·s = y különböző teljesítési módjai más-más frissítést adnak: Broyden, PSB, BFGS, DFP."})})]})},{kicker:e({en:"Keep it nice",hu:"Tartsd szépen"}),title:e({en:"Symmetric & positive definite",hu:"Szimmetrikus és pozitív definit"}),body:t.jsx("p",{children:e({en:"A true Hessian is symmetric; near a minimum it's positive definite. PSB enforces symmetry; BFGS and DFP also preserve positive-definiteness, so the step always points downhill.",hu:"A valódi Hesse szimmetrikus; minimum közelében pozitív definit. A PSB kikényszeríti a szimmetriát; a BFGS és a DFP a pozitív definitséget is megőrzi, így a lépés mindig lefelé mutat."})})},{kicker:e({en:"The race",hu:"A verseny"}),title:e({en:"Four updates, one valley",hu:"Négy frissítés, egy völgy"}),body:t.jsx("p",{children:e({en:"All four start at (2, 2) with a finite-difference Hessian guess. BFGS and DFP plunge nearly as fast as Newton; PSB is close behind; plain Broyden lags. Watch the log-scale chart.",hu:"Mind a négy (2, 2)-ből indul, véges differenciás Hesse-becsléssel. A BFGS és a DFP majdnem olyan gyorsan zuhan, mint a Newton; a PSB szorosan mögöttük; az egyszerű Broyden lemarad. Figyeld a log-skálás ábrát."})})},{kicker:e({en:"The winner",hu:"A győztes"}),title:e({en:"Why BFGS rules",hu:"Miért uralkodik a BFGS"}),body:t.jsx("p",{children:e({en:"BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) is the workhorse behind most real-world optimizers. There's even a recursion for the inverse, so each step avoids solving a system entirely.",hu:"A BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) a legtöbb valós optimalizáló igáslova. Az inverzre is van rekurzió, így minden lépés teljesen elkerüli a rendszer megoldását."})})}],l=["broyden","psb","bfgs","dfp"].map(h=>({label:le[h],color:ne[h],errs:a[h].frames.map(d=>d.err??0)}));return t.jsxs(K,{meta:oi,children:[t.jsx(O,{steps:m,graphic:h=>t.jsx(hi,{runs:a,series:l,player:r,targetFrame:o[h]??0,focus:n,setFocus:i,count:s})}),t.jsxs(U,{children:[t.jsx(T,{label:e({en:"Secant equation",hu:"Szelő-egyenlet"}),children:t.jsx(w,{block:!0,children:"\\mathbf s^{(k)} = \\mathbf p^{(k+1)} - \\mathbf p^{(k)}, \\quad \\mathbf y^{(k)} = f'(\\mathbf p^{(k+1)}) - f'(\\mathbf p^{(k)}), \\quad A^{(k+1)}\\mathbf s^{(k)} = \\mathbf y^{(k)}."})}),t.jsxs(T,{label:e({en:"BFGS update",hu:"BFGS frissítés"}),proof:!0,children:[t.jsx(w,{block:!0,children:"A^{(k+1)} = A^{(k)} + \\frac{\\mathbf y\\mathbf y^{\\mathsf T}}{\\mathbf y^{\\mathsf T}\\mathbf s} - \\frac{A^{(k)}\\mathbf s\\,\\mathbf s^{\\mathsf T}A^{(k)}}{\\mathbf s^{\\mathsf T}A^{(k)}\\mathbf s}."}),t.jsx("p",{children:e({en:"DFP swaps the roles of s and y; PSB is the symmetric correction of Broyden's rank-1 update. All keep A symmetric, and BFGS/DFP keep it positive definite when yᵀs > 0.",hu:"A DFP felcseréli s és y szerepét; a PSB a Broyden rang-1 frissítésének szimmetrikus javítása. Mind szimmetrikusan tartja A-t, és a BFGS/DFP pozitív definitnek is, ha yᵀs > 0."})})]})]})]})}function hi({runs:e,series:n,player:i,targetFrame:a,focus:s,setFocus:r,count:o}){const{t:m}=_();u.useEffect(()=>{i.playing||i.setI(a)},[a]);const l=i.i,h=e[s],d=Math.min(l,h.points.length-1),f={paths:[{pts:h.points.slice(0,d+1),color:ne[s]}],points:[{p:h.points[d],ring:!0,color:ne[s]}],showMin:!0},p=n.map(b=>({...b,upTo:l}));return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:f,height:300}),t.jsx(be,{series:p,height:220}),t.jsx("div",{className:"plot__legend",children:["broyden","psb","bfgs","dfp"].map(b=>t.jsxs("button",{onClick:()=>r(b),style:{border:0,background:"transparent",cursor:"pointer",fontWeight:s===b?800:500,color:s===b?"var(--ink)":"var(--ink-soft)",display:"inline-flex",alignItems:"center",gap:6},children:[t.jsx("i",{className:"swatch",style:{background:ne[b]}}),le[b]]},b))}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:m({en:"showing path",hu:"látható pálya"})})," ",t.jsx("b",{children:le[s]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:d})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(h.frames[d].err??0).toExponential(2)})]})]}),t.jsx("div",{className:"controls",children:t.jsx(J,{i:i.i,count:o,playing:i.playing,onPlay:i.play,onStep:i.step,onReset:i.reset,onScrub:i.setI})})]})}function ki(){return t.jsxs("div",{className:"ch-minimization",children:[t.jsx(qe,{sections:W}),t.jsx(He,{}),t.jsx(_a,{}),t.jsx(Ma,{}),t.jsx(Ba,{}),t.jsx(Ra,{}),t.jsx(Ya,{}),t.jsx(ti,{}),t.jsx(li,{}),t.jsx(Me,{})]})}export{ki as default};
