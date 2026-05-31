import{r as x,j as t,d as z,i as he}from"./index-w1sySLUM.js";import{k as je}from"./CodeBlock-BCwZU6Sc.js";import{M as ae}from"./MarkdownView-C2v9K9Yc.js";import{C as Te,Q as Ae,S as qe}from"./Quiz-a-Kq6bQ7.js";import"./normalizeMath-CC2BUMQ-.js";import"./index-BdnrwiUv.js";function w({children:e,block:n=!1}){const a=x.useMemo(()=>{try{return je.renderToString(e,{displayMode:n,throwOnError:!1,strict:!1})}catch{return e}},[e,n]);return n?t.jsx("div",{dangerouslySetInnerHTML:{__html:a}}):t.jsx("span",{dangerouslySetInnerHTML:{__html:a}})}function He(){const{t:e}=z();return t.jsxs("header",{className:"hero",id:"hero",children:[t.jsx("div",{className:"hero__bg"}),t.jsxs("div",{className:"wrap hero__inner",children:[t.jsx("span",{className:"eyebrow",children:e({en:"Numerical Analysis · Chapter 8",hu:"Numerikus analízis · 8. fejezet"})}),t.jsxs("h1",{children:[e({en:"How computers find the ",hu:"Hogyan találják meg a gépek a "}),t.jsx("em",{children:e({en:"lowest point",hu:"legmélyebb pontot"})}),e({en:".",hu:"."})]}),t.jsx("p",{className:"hero__lead",children:e({en:"Minimizing a function is just rolling downhill until you can't go lower. Scroll through seven methods — each one comes alive as you read, and you can grab the controls and play.",hu:"Egy függvény minimalizálása nem más, mint legurulni a völgybe, amíg lejjebb már nem lehet. Görgess végig hét módszeren — mindegyik életre kel olvasás közben, és a vezérlőkkel magad is kísérletezhetsz."})}),t.jsxs("div",{className:"hero__cta",children:[t.jsx("a",{className:"btn btn--primary",href:"#golden",children:e({en:"Start exploring ↓",hu:"Kezdjük a felfedezést ↓"})}),t.jsx("a",{className:"btn",href:"#calculus",children:e({en:"First, a refresher",hu:"Előbb egy ismétlés"})})]}),t.jsxs("div",{className:"hero__chips",children:[t.jsx("span",{className:"pill",children:t.jsx(w,{children:"\\min_{x} f(x)"})}),t.jsx("span",{className:"pill",children:"EN / HU"}),t.jsx("span",{className:"pill",children:"🌙 / ☀️"}),t.jsx("span",{className:"pill",children:e({en:"7 interactive methods",hu:"7 interaktív módszer"})})]})]})]})}function Me(){const{t:e}=z();return t.jsx("footer",{className:"footer",children:t.jsxs("div",{className:"wrap",children:[t.jsx("h4",{children:e({en:"Minimization of Functions — an interactive guide",hu:"Függvények minimalizálása — interaktív útmutató"})}),t.jsx("p",{children:e({en:"An interactive companion to “Minimization of Functions”. All plots and convergence tables here are computed live in your browser.",hu:"Interaktív kísérőanyag a „Függvények minimalizálása” témához. Az ábrákat és a konvergencia-táblázatokat a böngésződ valós időben számolja."})}),t.jsx("p",{className:"muted",children:e({en:"Toggle language (EN/HU) and theme (🌙/☀️) any time from the top bar — your choice is remembered.",hu:"A nyelv (EN/HU) és a téma (🌙/☀️) bármikor váltható a felső sávban — a választásod megjegyezzük."})})]})})}const W=[{id:"calculus",no:"8.1",title:{en:"Calculus, refreshed",hu:"Analízis, felfrissítve"},blurb:{en:"Where can a minimum hide? Gradients, Hessians, and the min/max/saddle test.",hu:"Hol bújhat meg a minimum? Gradiens, Hesse-mátrix, és a min/max/nyeregpont teszt."}},{id:"golden",no:"8.2",title:{en:"Golden Section Search",hu:"Aranymetszéses keresés"},blurb:{en:"Shrink an interval around the minimum — reusing one point each step.",hu:"Szűkítsük az intervallumot a minimum köré — minden lépésben egy pontot újrahasználva."}},{id:"simplex",no:"8.3",title:{en:"Simplex & Nelder–Mead",hu:"Szimplex és Nelder–Mead"},blurb:{en:"A triangle that flips, stretches and squeezes its way downhill.",hu:"Egy háromszög, amely tükrözve, nyújtva és húzva gurul a völgybe."}},{id:"gradient",no:"8.4",title:{en:"Gradient Method",hu:"Gradiens módszer"},blurb:{en:"Always walk straight downhill. Simple — but watch it zig-zag.",hu:"Mindig lefelé a legmeredekebben. Egyszerű — de figyeld a cikcakkot."}},{id:"linsys",no:"8.5",title:{en:"Linear Systems by Descent",hu:"Lineáris rendszerek lejtéssel"},blurb:{en:"Solve A x = b by rolling a quadratic bowl to its bottom.",hu:"Oldd meg az A x = b rendszert egy kvadratikus tál aljára gurulva."}},{id:"newton",no:"8.6",title:{en:"Newton's Method",hu:"Newton-módszer"},blurb:{en:"Use curvature, not just slope — and converge ridiculously fast.",hu:"Használd a görbületet, ne csak a meredekséget — és konvergálj iszonyú gyorsan."}},{id:"quasinewton",no:"8.7",title:{en:"Quasi-Newton",hu:"Kvázi-Newton"},blurb:{en:"Newton's speed without the Hessian: Broyden, PSB, BFGS, DFP race.",hu:"Newton sebessége Hesse-mátrix nélkül: Broyden, PSB, BFGS, DFP verseny."}}],Ne={calculus:[{term:{en:"Unconstrained minimization",hu:"Feltétel nélküli minimalizálás"},def:{en:"Finding $\\min f(\\mathbf{x})$ over $\\mathbb{R}^n$ with no constraints. Calculus reduces it to locating and classifying stationary points.",hu:"A $\\min f(\\mathbf{x})$ keresése $\\mathbb{R}^n$-en, feltételek nélkül. Az analízis ezt a stacionárius pontok megkeresésére és osztályozására vezeti vissza."}},{term:{en:"First-order condition $\\nabla f=\\mathbf{0}$",hu:"Elsőrendű feltétel $\\nabla f=\\mathbf{0}$"},def:{en:"At any interior local minimum (or maximum) the gradient vanishes: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Such $\\mathbf{x}^*$ is a stationary (critical) point — necessary, not sufficient.",hu:"Bármely belső lokális minimumban (vagy maximumban) a gradiens eltűnik: $\\nabla f(\\mathbf{x}^*)=\\mathbf{0}$. Az ilyen $\\mathbf{x}^*$ stacionárius (kritikus) pont — szükséges, de nem elégséges."}},{term:{en:"Hessian classification",hu:"Hesse-mátrix szerinti osztályozás"},def:{en:"At a stationary point the Hessian $\\nabla^2 f$ decides the type: positive definite ⇒ minimum, negative definite ⇒ maximum, indefinite ⇒ saddle, semidefinite ⇒ degenerate (inconclusive).",hu:"Stacionárius pontban a Hesse-mátrix $\\nabla^2 f$ dönti el a típust: pozitív definit ⇒ minimum, negatív definit ⇒ maximum, indefinit ⇒ nyeregpont, szemidefinit ⇒ elfajuló (nem dönthető el)."}},{term:{en:"2×2 definiteness test",hu:"2×2 definitségi teszt"},def:{en:"For $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$: positive definite iff $a>0$ and $ac-b^2>0$; a negative determinant $ac-b^2<0$ means a saddle.",hu:"A $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$-re: pozitív definit, ha $a>0$ és $ac-b^2>0$; negatív determináns $ac-b^2<0$ nyeregpontot jelent."}},{term:{en:"Convexity",hu:"Konvexitás"},def:{en:"A convex $f$ (positive semidefinite Hessian everywhere) has any stationary point as a global minimum — no local traps. The ideal case for optimization.",hu:"Egy konvex $f$ (mindenütt pozitív szemidefinit Hesse-mátrix) bármely stacionárius pontja globális minimum — nincsenek lokális csapdák. Az optimalizálás ideális esete."}}],golden:[{term:{en:"Unimodal function",hu:"Unimodális függvény"},def:{en:"A function with a single minimum on $[a,b]$ (strictly decreasing then increasing). Convexity implies it, but is not required. Golden section search needs only unimodality, not derivatives.",hu:"Olyan függvény, amelynek egyetlen minimuma van $[a,b]$-n (előbb szigorúan csökken, majd nő). A konvexitás ezt maga után vonja, de nem szükséges. Az aranymetszéses kereséshez csak unimodalitás kell, derivált nem."}},{term:{en:"Golden section search",hu:"Aranymetszéses keresés"},def:{en:"A derivative-free minimizer: like bisection but for minima. Keep two interior points $a<y<x<b$; if $f(x)>f(y)$ the minimum is in $[a,x]$, else in $[y,b]$. Repeat on the shrinking bracket.",hu:"Derivált nélküli minimumkereső: mint a felezés, de minimumra. Tarts két belső pontot $a<y<x<b$; ha $f(x)>f(y)$, a minimum $[a,x]$-ben van, különben $[y,b]$-ben. Ismételd a zsugorodó intervallumon."}},{term:{en:"Golden ratio $r=(\\sqrt5-1)/2$",hu:"Aranymetszés $r=(\\sqrt5-1)/2$"},def:{en:"The reduction ratio $r\\approx0.618$ is chosen so one of the new interior points coincides with a previous one — satisfying $r^2=1-r$ — so each step needs only **one** new function evaluation.",hu:"Az $r\\approx0,618$ zsugorítási arányt úgy választjuk, hogy az egyik új belső pont egybeessen egy korábbival — teljesítve $r^2=1-r$-t — így minden lépés csak **egy** új függvénykiértékelést igényel."}},{term:{en:"One evaluation per step",hu:"Egy kiértékelés lépésenként"},def:{en:"The golden ratio's self-similarity means the retained point can be reused, so after the first step only one new $f$-value is computed per iteration — the method's efficiency advantage.",hu:"Az aranymetszés önhasonlósága miatt a megtartott pont újrahasználható, így az első lépés után iterációnként csak egy új $f$-értéket számolunk — ez a módszer hatékonysági előnye."}},{term:{en:"Linear convergence",hu:"Lineáris konvergencia"},def:{en:"The bracket length shrinks by the factor $r\\approx0.618$ each step, so $|b_k-a_k|=r^k(b-a)$ — steady linear convergence, robust but not fast (no derivative info used).",hu:"Az intervallum hossza lépésenként az $r\\approx0,618$ tényezővel csökken, így $|b_k-a_k|=r^k(b-a)$ — egyenletes lineáris konvergencia, robusztus, de nem gyors (nincs deriváltinformáció)."}},{term:{en:"Convergence guarantee (Thm 8.4)",hu:"Konvergencia-garancia (8.4. tétel)"},def:{en:"For continuous unimodal $f$, golden section search always converges to the minimum point — unconditionally, like bisection for roots.",hu:"Folytonos unimodális $f$-re az aranymetszéses keresés mindig a minimumponthoz konvergál — feltétel nélkül, mint a felezés a gyökökre."}}],simplex:[{term:{en:"Simplex (geometric)",hu:"Szimplex (geometriai)"},def:{en:"The convex hull of $n+1$ affinely independent points in $\\mathbb{R}^n$: a segment ($n=1$), triangle ($n=2$), tetrahedron ($n=3$). Its vertices carry the function values that drive the search.",hu:"$n+1$ affinul független pont konvex burka $\\mathbb{R}^n$-ben: szakasz ($n=1$), háromszög ($n=2$), tetraéder ($n=3$). Csúcsai hordozzák a keresést vezérlő függvényértékeket."}},{term:{en:"Simplex method (derivative-free)",hu:"Szimplex módszer (derivált nélküli)"},def:{en:"Minimize $f$ by moving a simplex downhill: find the worst vertex, reflect it through the centroid of the rest; if that fails, shrink the simplex toward its best vertex. Uses only function values — no gradients.",hu:"Minimalizáld $f$-et a szimplex lefelé mozgatásával: keresd a legrosszabb csúcsot, tükrözd a többi súlypontján át; ha ez nem sikerül, zsugorítsd a szimplexet a legjobb csúcsa felé. Csak függvényértékeket használ — gradienst nem."}},{term:{en:"Reflection",hu:"Tükrözés"},def:{en:"Replace the worst vertex $\\mathbf{x}^{(j)}$ by its mirror image $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ across the centroid $\\mathbf{x}_c$ of the remaining vertices — the basic downhill move.",hu:"Cseréld a legrosszabb $\\mathbf{x}^{(j)}$ csúcsot a tükörképére $\\mathbf{x}_r=2\\mathbf{x}_c-\\mathbf{x}^{(j)}$ a maradék csúcsok $\\mathbf{x}_c$ súlypontján át — az alap lefelé lépés."}},{term:{en:"Shrink",hu:"Zsugorítás"},def:{en:"When reflection does not improve on the worst value, pull every vertex halfway toward the best vertex: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. The simplex contracts around the best point.",hu:"Ha a tükrözés nem javít a legrosszabb értéken, húzd minden csúcsot félútig a legjobb csúcs felé: $\\mathbf{x}^{(i)}\\leftarrow\\tfrac12(\\mathbf{x}^{(i)}+\\mathbf{x}^{(k)})$. A szimplex a legjobb pont köré húzódik össze."}},{term:{en:"Nelder–Mead method",hu:"Nelder–Mead-módszer"},def:{en:"An adaptive variant: after reflecting the worst vertex, **expand** (if the reflection is the new best), **contract** (if it is poor), or shrink — letting the simplex stretch into descent directions and squeeze near the minimum.",hu:"Adaptív változat: a legrosszabb csúcs tükrözése után **tágíts** (ha a tükrözés az új legjobb), **összehúz** (ha gyenge), vagy zsugoríts — így a szimplex megnyúlik a leszálló irányokba és összeszorul a minimum közelében."}},{term:{en:"Expansion & contraction",hu:"Tágítás és összehúzás"},def:{en:"Expansion pushes further past a successful reflection ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); contraction pulls back toward the centroid when reflection is poor. These make Nelder–Mead faster than the plain simplex method.",hu:"A tágítás tovább lök egy sikeres tükrözésen túl ($\\mathbf{x}_e=\\mathbf{x}_c+\\alpha(\\mathbf{x}_r-\\mathbf{x}_c)$, $\\alpha>1$); az összehúzás visszahúz a súlypont felé, ha a tükrözés gyenge. Ezek teszik a Nelder–Mead-et gyorsabbá a sima szimplex módszernél."}},{term:{en:"Stopping criteria",hu:"Megállási feltételek"},def:{en:"Stop when the simplex is small (longest edge $<\\varepsilon$), when the vertex-value spread (std. dev. $\\sigma$) is small, or when successive centroid values change by $<\\varepsilon$. The centroid approximates the minimizer.",hu:"Állj meg, ha a szimplex kicsi (leghosszabb él $<\\varepsilon$), ha a csúcsértékek szórása ($\\sigma$) kicsi, vagy ha az egymást követő súlypont-értékek $<\\varepsilon$-nal változnak. A súlypont közelíti a minimumhelyet."}}],gradient:[{term:{en:"Steepest descent direction (Thm 8.8)",hu:"Legmeredekebb leszállási irány (8.8. tétel)"},def:{en:"Among all unit directions, the directional derivative of $f$ at $\\mathbf{p}$ is most negative along $-f'(\\mathbf{p})$. So the negative gradient points in the locally steepest downhill direction.",hu:"Minden egységirány közül $f$ iránymenti deriváltja $\\mathbf{p}$-ben a $-f'(\\mathbf{p})$ mentén a legnegatívabb. Tehát a negatív gradiens a lokálisan legmeredekebb lefelé irányba mutat."}},{term:{en:"Descent direction",hu:"Leszállási irány"},def:{en:"$\\mathbf{u}$ is a descent direction at $\\mathbf{p}$ if $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ for small $t>0$ — equivalently $f'(\\mathbf{p})^T\\mathbf{u}<0$. The negative gradient always qualifies.",hu:"$\\mathbf{u}$ leszállási irány $\\mathbf{p}$-ben, ha $f(\\mathbf{p}+t\\mathbf{u})<f(\\mathbf{p})$ kis $t>0$-ra — ekvivalensen $f'(\\mathbf{p})^T\\mathbf{u}<0$. A negatív gradiens mindig ilyen."}},{term:{en:"Gradient (steepest descent) method",hu:"Gradiens- (legmeredekebb leszállás) módszer"},def:{en:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — repeatedly step along the negative gradient with step size $\\alpha_k$. A first-order method: only gradients, no Hessian.",hu:"$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\alpha_k f'(\\mathbf{p}^{(k)})$ — ismételten lépünk a negatív gradiens mentén $\\alpha_k$ lépésközzel. Elsőrendű módszer: csak gradiens, nincs Hesse-mátrix."}},{term:{en:"Step size $\\alpha_k$",hu:"Lépésköz $\\alpha_k$"},def:{en:"Constant step: $\\alpha_k=h/\\|f'\\|_2$ gives fixed distance $h$ per step (so accuracy is limited to $\\sim h$). Better: a line search picking $\\alpha_k$ to minimize $f$ along the ray (the optimal/steepest gradient method).",hu:"Állandó lépés: $\\alpha_k=h/\\|f'\\|_2$ rögzített $h$ távolságot ad lépésenként (így a pontosság $\\sim h$-ra korlátozott). Jobb: vonalmenti keresés, amely $\\alpha_k$-t a sugár mentén $f$ minimalizálására választja (optimális gradiens módszer)."}},{term:{en:"Zig-zag / slow convergence",hu:"Cikcakk / lassú konvergencia"},def:{en:"Successive steps are orthogonal (each $-f'$ is perpendicular to the contour line), so on elongated valleys the iterates zig-zag and converge only linearly — slowly for ill-conditioned problems.",hu:"Az egymást követő lépések merőlegesek (minden $-f'$ merőleges a szintvonalra), így megnyúlt völgyekben az iteráltak cikcakkban haladnak és csak lineárisan konvergálnak — rosszul kondicionált feladatokon lassan."}},{term:{en:"Gradient ⟂ contour lines",hu:"Gradiens ⟂ szintvonalak"},def:{en:"The gradient is always perpendicular to the level curve through a point, so each gradient step crosses the contours at right angles — the geometric picture behind the zig-zag path.",hu:"A gradiens mindig merőleges az adott ponton átmenő szintvonalra, így minden gradienslépés derékszögben metszi a szintvonalakat — ez a cikcakk pálya geometriai képe."}}],linsys:[{term:{en:"Quadratic minimization ↔ linear system",hu:"Kvadratikus minimalizálás ↔ lineáris rendszer"},def:{en:"For symmetric $\\mathbf{A}$, $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ has gradient $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. So $g'(\\mathbf{x})=0$ is exactly the linear system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$.",hu:"Szimmetrikus $\\mathbf{A}$-ra a $g(\\mathbf{x})=\\tfrac12\\mathbf{x}^T\\mathbf{A}\\mathbf{x}-\\mathbf{b}^T\\mathbf{x}+c$ gradiense $g'(\\mathbf{x})=\\mathbf{A}\\mathbf{x}-\\mathbf{b}$. Így $g'(\\mathbf{x})=0$ éppen az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ lineáris rendszer."}},{term:{en:"SPD ⇒ unique minimizer (Thm 8.10)",hu:"SPD ⇒ egyetlen minimumhely (8.10. tétel)"},def:{en:"If $\\mathbf{A}$ is symmetric positive definite, $g$ has a global minimum at $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$. Hence solving $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ is equivalent to minimizing $g$ — solvable by gradient descent.",hu:"Ha $\\mathbf{A}$ szimmetrikus pozitív definit, $g$-nek globális minimuma van az $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$ pontban. Így $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ megoldása egyenértékű $g$ minimalizálásával — gradiens módszerrel megoldható."}},{term:{en:"Residual = negative gradient",hu:"Reziduum = negatív gradiens"},def:{en:"The residual $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ is the steepest-descent direction. Each step moves along $\\mathbf{r}^{(k)}$.",hu:"A reziduum $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}=-g'(\\mathbf{p}^{(k)})$ a legmeredekebb leszállási irány. Minden lépés az $\\mathbf{r}^{(k)}$ mentén halad."}},{term:{en:"Exact line search (optimal step)",hu:"Pontos vonalmenti keresés (optimális lépés)"},def:{en:"For a quadratic, the best step along $\\mathbf{r}^{(k)}$ has a closed form: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — minimizing $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$ exactly.",hu:"Kvadratikusra a legjobb lépés $\\mathbf{r}^{(k)}$ mentén zárt alakú: $\\alpha_k=\\dfrac{(\\mathbf{r}^{(k)})^T\\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T\\mathbf{A}\\,\\mathbf{r}^{(k)}}$ — pontosan minimalizálja $\\phi_k(t)=g(\\mathbf{p}^{(k)}+t\\mathbf{r}^{(k)})$-t."}},{term:{en:"Optimal gradient iteration",hu:"Optimális gradiens iteráció"},def:{en:"Repeat: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ as above, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. Converges for SPD $\\mathbf{A}$ but slowly (linearly) when $\\mathbf{A}$ is ill-conditioned — motivating conjugate gradients.",hu:"Ismételd: $\\mathbf{r}^{(k)}=\\mathbf{b}-\\mathbf{A}\\mathbf{p}^{(k)}$, $\\alpha_k$ a fenti, $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\alpha_k\\mathbf{r}^{(k)}$. SPD $\\mathbf{A}$-ra konvergál, de lassan (lineárisan), ha $\\mathbf{A}$ rosszul kondicionált — ez motiválja a konjugált gradiens módszert."}},{term:{en:"Local = global for quadratics (Cor 8.11)",hu:"Lokális = globális kvadratikusra (8.11)"},def:{en:"A quadratic function with a local minimum (maximum) has it as a global minimum (maximum) — no spurious local optima, so gradient descent on $g$ cannot get stuck.",hu:"Egy kvadratikus függvény lokális minimuma (maximuma) egyben globális minimum (maximum) — nincsenek hamis lokális szélsőértékek, így a $g$-n futó gradiens módszer nem akadhat el."}}],newton:[{term:{en:"Newton's method for minimization",hu:"Newton-módszer minimalizálásra"},def:{en:"Minimize $f$ by minimizing its local quadratic (Taylor) model: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — using both gradient and Hessian.",hu:"Minimalizáld $f$-et a lokális kvadratikus (Taylor-) modelljének minimalizálásával: $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[f''(\\mathbf{p}^{(k)})]^{-1}f'(\\mathbf{p}^{(k)})$ — a gradienst és a Hesse-mátrixot is használva."}},{term:{en:"Equivalent to Newton on $f'=\\mathbf{0}$",hu:"Ekvivalens a Newton-módszerrel $f'=\\mathbf{0}$-ra"},def:{en:"The iteration is exactly Newton's method for the nonlinear system $f'(\\mathbf{x})=\\mathbf{0}$ — finding a stationary point. The Hessian plays the role of the Jacobian.",hu:"Az iteráció pontosan a Newton-módszer az $f'(\\mathbf{x})=\\mathbf{0}$ nemlineáris rendszerre — stacionárius pont keresése. A Hesse-mátrix tölti be a Jacobi-mátrix szerepét."}},{term:{en:"Local quadratic convergence (Thm 8.13)",hu:"Lokális kvadratikus konvergencia (8.13. tétel)"},def:{en:"If $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, then $\\mathbf{p}$ is a local minimum and Newton's iteration converges to it quadratically from nearby starts.",hu:"Ha $f\\in C^3$, $f'(\\mathbf{p})=\\mathbf{0}$ és $f''(\\mathbf{p})$ pozitív definit, akkor $\\mathbf{p}$ lokális minimum, és a Newton-iteráció közeli kezdőpontból kvadratikusan konvergál hozzá."}},{term:{en:"Exact in one step for quadratics",hu:"Kvadratikusra egy lépésben pontos"},def:{en:"When $f$ is quadratic with positive-definite Hessian, Newton's method reaches the exact minimizer in a single step — the quadratic model equals $f$.",hu:"Ha $f$ kvadratikus, pozitív definit Hesse-mátrixszal, a Newton-módszer egyetlen lépésben eléri a pontos minimumhelyet — a kvadratikus modell megegyezik $f$-fel."}},{term:{en:"Degenerate Hessian ⇒ linear",hu:"Elfajuló Hesse ⇒ lineáris"},def:{en:"If the Hessian at the minimum is only semidefinite ($f''(\\mathbf{p})=\\mathbf{0}$ in the worst case), Newton may still converge but only linearly — the quadratic speed needs a positive-definite Hessian.",hu:"Ha a Hesse-mátrix a minimumban csak szemidefinit (legrosszabb esetben $f''(\\mathbf{p})=\\mathbf{0}$), a Newton konvergálhat, de csak lineárisan — a kvadratikus sebességhez pozitív definit Hesse kell."}},{term:{en:"Cost vs gradient descent",hu:"Költség vs gradiens módszer"},def:{en:"Each step needs the full Hessian and a linear solve ($O(n^3)$), far more than a gradient step — but it converges in far fewer iterations near the minimum. Quasi-Newton methods approximate the Hessian to balance the two.",hu:"Minden lépés a teljes Hesse-mátrixot és egy lineáris megoldást igényel ($O(n^3)$), sokkal többet egy gradienslépésnél — de a minimum közelében sokkal kevesebb iteráció alatt konvergál. A kvázi-Newton módszerek közelítik a Hesse-mátrixot a kettő egyensúlyozására."}}],quasinewton:[{term:{en:"Quasi-Newton method",hu:"Kvázi-Newton módszer"},def:{en:"Newton's minimization step $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$ where $\\mathbf{A}^{(k)}\\approx f''$ and $\\mathbf{v}^{(k)}\\approx f'$ are cheap approximations — avoiding exact Hessians.",hu:"A Newton-minimalizálási lépés $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-[\\mathbf{A}^{(k)}]^{-1}\\mathbf{v}^{(k)}$, ahol $\\mathbf{A}^{(k)}\\approx f''$ és $\\mathbf{v}^{(k)}\\approx f'$ olcsó közelítések — elkerülve a pontos Hesse-mátrixot."}},{term:{en:"Finite-difference Hessian",hu:"Differencia-Hesse"},def:{en:"One option: approximate $f'$ and $f''$ by forward/second-difference formulas. Simple but costs $\\sim n^2$ function evaluations per step.",hu:"Egy lehetőség: közelítsük $f'$-t és $f''$-t előre/második differencia képletekkel. Egyszerű, de lépésenként $\\sim n^2$ függvénykiértékelésbe kerül."}},{term:{en:"Broyden update for minimization",hu:"Broyden-frissítés minimalizálásra"},def:{en:"Apply Broyden's rank-one secant update (from §2.13) to approximate the Hessian while solving $f'(\\mathbf{x})=\\mathbf{0}$. Drawback: the resulting $\\mathbf{A}^{(k)}$ is generally neither symmetric nor positive definite.",hu:"Alkalmazd Broyden rang-egy szelő-frissítését (a §2.13-ból) a Hesse-mátrix közelítésére $f'(\\mathbf{x})=\\mathbf{0}$ megoldása közben. Hátrány: a kapott $\\mathbf{A}^{(k)}$ általában se nem szimmetrikus, se nem pozitív definit."}},{term:{en:"Secant equation",hu:"Szelő-egyenlet"},def:{en:"The Hessian approximation should satisfy $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ with $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — the curvature condition that ties the update to observed gradient change.",hu:"A Hesse-közelítés teljesítse $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$-t, ahol $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{v}^{(k+1)}-\\mathbf{v}^{(k)}$ — a görbületi feltétel, amely a frissítést a megfigyelt gradiensváltozáshoz köti."}},{term:{en:"PSB update (Thm 8.17)",hu:"PSB-frissítés (8.17. tétel)"},def:{en:"The Powell-symmetric-Broyden update keeps $\\mathbf{A}^{(k)}$ **symmetric** while still satisfying the secant equation. Under the usual conditions the resulting quasi-Newton iteration converges **superlinearly**.",hu:"A Powell-szimmetrikus-Broyden frissítés **szimmetrikusan** tartja $\\mathbf{A}^{(k)}$-t, miközben teljesíti a szelő-egyenletet. A szokásos feltételek mellett a kapott kvázi-Newton iteráció **szuperlineárisan** konvergál."}},{term:{en:"Keeping $\\mathbf{A}^{(k)}$ positive definite",hu:"$\\mathbf{A}^{(k)}$ pozitív definitségének megőrzése"},def:{en:"For a genuine descent step the Hessian model should stay positive definite. Updating a factor $\\mathbf{M}$ with $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$ guarantees this — the idea behind BFGS-type methods.",hu:"Valódi leszállási lépéshez a Hesse-modellnek pozitív definitnek kell maradnia. Egy $\\mathbf{M}$ tényező frissítése $\\mathbf{A}=\\mathbf{M}\\mathbf{M}^T$-vel ezt garantálja — ez a BFGS-típusú módszerek ötlete."}}]},Se={calculus:[{q:"In the context of multi-variable calculus, what is the matrix $f''(\\mathbf{x})$ commonly called?",a:"The Hessian matrix."},{q:"What is the entry in the $i$-th row and $j$-th column of a Hessian matrix $f''(\\mathbf{x})$?",a:"$\\frac{\\partial^2 f}{\\partial x_i, \\partial x_j}(\\mathbf{x})$"},{q:"A function $f$ maps from $\\mathbb{R}^n$ to which set to allow for the calculation of a Hessian matrix?",a:"$\\mathbb{R}$"},{q:"What type of derivatives are located on the main diagonal of the Hessian matrix?",a:"Pure second-order partial derivatives (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$)."},{q:"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ has a local extremum at point $\\mathbf{a}$, what must $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ equal for all $i = 1, \\dots, n$?",a:"$0$"},{q:"The first-order necessary condition for a local extremum states that the gradient vector $f'(\\mathbf{a})$ must be equal to _____.",a:"The zero vector $\\mathbf{0}$."},{q:"Which smoothness class must a function $f$ belong to for the Hessian-based sufficient condition for extrema to apply?",a:"$C^2$ (twice continuously differentiable)."},{q:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is positive definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",a:"A local minimum."},{q:"If $f'(\\mathbf{a}) = \\mathbf{0}$ and the Hessian matrix $f''(\\mathbf{a})$ is negative definite, what kind of extremum does $f$ have at $\\mathbf{a}$?",a:"A local maximum."},{q:"For a two-variable function $f(x, y)$, what are the two necessary first-order equations for a local extremum at $(a, b)$?",a:"$\\frac{\\partial f}{\\partial x}(a, b) = 0$ and $\\frac{\\partial f}{\\partial y}(a, b) = 0$."},{q:"In the second derivative test for two variables, how is the discriminant $D(a, b)$ defined?",a:"$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$."},{q:"What condition on the discriminant $D(a, b)$ indicates that a function $f(x, y)$ has a local extremum at $(a, b)$, provided the first derivatives are zero?",a:"$D(a, b) > 0$"},{q:"If the discriminant $D(a, b)$ is less than zero ($D < 0$) at a stationary point, what is the conclusion regarding a local extremum?",a:"The function $f$ has no extremum at $(a, b)$."},{q:"To identify a local maximum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",a:"Negative ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$)."},{q:"To identify a local minimum in a two-variable function when $D(a, b) > 0$, what must be the sign of $\\frac{\\partial^2 f}{\\partial x^2}(a, b)$?",a:"Positive ($\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$)."},{q:"Formula: What is the first entry ($1, 1$) of the Hessian matrix $f''(\\mathbf{x})$?",a:"$\\frac{\\partial^2 f}{\\partial x_1^2}(\\mathbf{x})$"},{q:"Formula: What is the entry in the last row and last column of an $n$-variable Hessian matrix?",a:"$\\frac{\\partial^2 f}{\\partial x_n^2}(\\mathbf{x})$"},{q:"According to Theorem 8.1, what is the necessary condition for a function $f$ to have a local extremum at $\\mathbf{a}$ regarding its partial derivatives?",a:"All partial derivatives $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i}$ must equal zero."},{q:"In Theorem 8.2, which property of $f$ ensures that the mixed partial derivatives $\\frac{\\partial^2 f}{\\partial x \\partial y}$ and $\\frac{\\partial^2 f}{\\partial y \\partial x}$ are equal?",a:"The assumption that $f \\in C^2$."},{q:"If $D(a, b) > 0$, the function $f(x, y)$ is guaranteed to have a(n) _____ at that point, assuming the first-order conditions are met.",a:"Local extremum"},{q:"For $n$ variables, if $f''(\\mathbf{a})$ is neither positive nor negative definite at a point where $f'(\\mathbf{a})=0$, what can be said about the extremum? (Note: Context restricted to the provided source material's explicit rules).",a:"The provided theorems do not explicitly define the outcome for indefinite matrices."},{q:"What is the dimension of the Hessian matrix for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$?",a:"$n \\times n$"},{q:"Identify the subtrahend in the formula for $D(a, b)$: $D(a, b) = f_{xx}f_{yy} - (\\dots)^2$.",a:"The mixed partial derivative $\\frac{\\partial^2 f}{\\partial x \\, \\partial y}(a, b)$."},{q:"Term: Stationary Point (Implicit)",a:"Definition: A point $\\mathbf{a}$ where the first derivative (gradient) of a function is the zero vector, $f'(\\mathbf{a}) = \\mathbf{0}$."},{q:"True or False: If $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ for all $i$, $f$ must have a local extremum at $\\mathbf{a}$.",a:"False (it is a necessary but not sufficient condition)."},{q:"For a function of two variables, if $f_{xx}(a, b) = 4$, $f_{yy}(a, b) = 3$, and $f_{xy}(a, b) = 1$, what is the value of $D(a, b)$?",a:"$11$ (calculated as $4 \\cdot 3 - 1^2$)."},{q:"If $D(a, b) = 11$ and $f_{xx} = 4$ at a stationary point, what type of extremum is present?",a:"Local minimum."},{q:"In the Hessian matrix, the entry $\\frac{\\partial^2 f}{\\partial x_1, \\partial x_2}$ is located in which row and column?",a:"Row 1, Column 2."},{q:"The theorem states that if $D(a, b) < 0$, $f$ has _____ extremum at $(a, b)$.",a:"No"},{q:"In the formula for the Hessian matrix, what is represented by the ellipsis ($\\dots$) in the first row?",a:"The second-order partial derivatives with respect to $x_1$ and subsequent variables up to $x_n$."},{q:"What is the specific requirement for the Hessian matrix to be used to prove a local maximum at point $\\mathbf{a}$ for $f \\in \\mathbb{R}^n$?",a:"The Hessian matrix $f''(\\mathbf{a})$ must be negative definite."},{q:"How does Theorem 8.2 classify the point $(a, b)$ if $\\frac{\\partial f}{\\partial x} = 0$, $\\frac{\\partial f}{\\partial y} = 0$, and $D(a, b) < 0$?",a:"As a point with no local extremum."},{q:"In $n$-dimensional space, the derivative $f'(\\mathbf{a})$ refers to a vector of _____ partial derivatives.",a:"First-order"},{q:"If a function is only partially differentiable but not $C^2$, can the second derivative test using the Hessian be applied?",a:"No, the theorems require $f \\in C^2$ for the Hessian-based sufficient conditions."},{q:"What mathematical object is $f'(\\mathbf{a})$ in the context of Theorem 8.1?",a:"The gradient vector (or the first derivative vector)."},{q:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$, the function has a local _____.",a:"Minimum"},{q:"In Theorem 8.2, if $D(a, b) > 0$ and $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, the function has a local _____.",a:"Maximum"},{q:"How many separate equations must be satisfied for the first-order necessary condition of an $n$-variable function?",a:"$n$ equations."},{q:"The notation $f: \\mathbb{R}^n \\to \\mathbb{R}$ implies the function takes a _____ as input and returns a real number.",a:"Vector (of $n$ components)"},{q:"According to the source, if $f'(\\mathbf{a}) = \\mathbf{0}$, $\\mathbf{a}$ is a candidate for a _____.",a:"Local extremum"},{q:"Why is the term $\\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2$ subtracted in the calculation of $D(a, b)$?",a:"It is part of the determinant calculation for the $2 \\times 2$ Hessian matrix."},{q:"If the Hessian $f''(\\mathbf{a})$ is negative definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",a:"Negative (less than zero)."},{q:"If the Hessian $f''(\\mathbf{a})$ is positive definite, what is the sign of its diagonal elements $\\frac{\\partial^2 f}{\\partial x_i^2}$?",a:"Positive (greater than zero)."},{q:"Theorem 8.2 is described as a _____ of Theorem 8.1 for the case $n=2$.",a:"Special case"},{q:"What is the primary purpose of the Hessian matrix in optimization according to the source material?",a:"To determine the nature of local extrema (minimum or maximum)."},{q:"In Theorem 8.1, the condition $f'(\\mathbf{a}) = \\mathbf{0}$ is checked _____ the definiteness of the Hessian.",a:"Before (or simultaneously with)"},{q:"Concept: $D(a, b)$ in Two Variables",a:"The discriminant of the function at $(a, b)$, used to identify the presence and type of local extrema."},{q:"Can a function have a local extremum at a point where a partial derivative is non-zero?",a:"No, the necessary condition requires all partial derivatives to be zero."},{q:"For a two-variable function, if $f_{xx} = -2$, $f_{yy} = -5$, and $f_{xy} = 0$ at a stationary point, what type of extremum is found?",a:"Local maximum (since $D = 10 > 0$ and $f_{xx} = -2 < 0$)."},{q:"The provided source material is part of a course on which mathematical discipline?",a:"Numerical Analysis (Szélsőértékszámítás / Minimization of Functions)."},{q:"What is the symbol used for the Hessian matrix of $f$ in the provided text?",a:"$f''(\\mathbf{x})$"},{q:"In the notation $\\frac{\\partial^2 f}{\\partial x_n, \\partial x_1}(\\mathbf{x})$, which variable was the function differentiated with respect to first?",a:"$x_1$"},{q:"The second derivative test using $D(a, b)$ fails to provide a conclusion if $D(a, b)$ equals _____.",a:"$0$"}],golden:[{q:"What is the primary requirement for a function $f$ to be considered unimodal on the interval $[a, b]$?",a:"The function must be continuous and have a unique local minimum in the interval $[a, b]$."},{q:"Is convexity a necessary condition for a function to be unimodal?",a:"No, convexity is sufficient but not necessary for a function to be unimodal."},{q:"In the golden section search method, if $f(x) > f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",a:"The interval $[a, x]$ is chosen."},{q:"In the golden section search method, if $f(x) \\leq f(y)$ where $a < y < x < b$, which interval is chosen for the next step?",a:"The interval $[y, b]$ is chosen."},{q:"How does the golden section search method define points $x$ and $y$ relative to the interval $[a, b]$ and a ratio $r$?",a:"$x = a + r(b - a)$ and $y = a + (1 - r)(b - a)$."},{q:"What constraint must be placed on the ratio $r$ to ensure that $x > y$ in the golden section search method?",a:"The ratio $r$ must satisfy $0.5 < r < 1$."},{q:"The golden section search method is similar to which root-finding method in its approach to narrowing intervals?",a:"It is similar to the bisection method."},{q:"What is the primary motivation for selecting $r$ specifically as the golden section ratio?",a:"It allows one of the new mesh points to coincide with a previous mesh point, requiring only one new function evaluation per step."},{q:"If the next interval is $[a', b'] = [y, b]$, what is the specific requirement for the new point $y'$ to optimize evaluations?",a:"The requirement is that $y' = x$."},{q:"Which quadratic equation must the ratio $r$ satisfy in the golden section search method?",a:"It must satisfy $r^2 + r - 1 = 0$."},{q:"What is the exact value of the positive solution for $r$ in the golden section search method?",a:"$r = \\frac{\\sqrt{5} - 1}{2}$."},{q:"What is the approximate decimal value of the golden section ratio $r$?",a:"The value is approximately $0.61834$."},{q:"What algebraic relationship involving $r$ and $(1-r)$ defines the golden section ratio?",a:"The relationship is $\\frac{r}{1 - r} = \\frac{1}{r}$."},{q:"What is the formula for the length of the interval after $n$ steps of the golden section search method?",a:"The length is $(b - a)r^n$."},{q:"Formula: How many steps $n$ are required to reach a tolerance $\\varepsilon$ in golden section search?",a:"$n \\geq \\frac{\\log \\frac{\\varepsilon}{b - a}}{\\log r}$."},{q:"If the minimum point $p$ is located in the interval $[a, x]$, what condition is placed on $x'$ and $y$ to maintain evaluation efficiency?",a:"The condition is that $x' = y$."},{q:"According to Theorem 8.4, what happens to the golden section search method if the function $f \\in C[a, b]$ is unimodal?",a:"The method converges to the unique minimum point of the function $f$."},{q:"What is typically the final output of the golden section search algorithm to approximate the minimum point?",a:"The output is the midpoint of the final interval reached after $n$ steps."},{q:"In the example function $f(x) = x^2 - 0.8x + 1$, what is the exact minimum point $p$?",a:"The minimum point is $p = 0.4$."},{q:"For the function $f(x) = x^2 - 0.8x + 1$ on $[-1, 2]$ with $\\varepsilon = 0.005$, how many steps $n$ were theoretically required?",a:"Approximately $13.29$ steps were required."},{q:"In the example provided, what was the approximate minimum value produced by the algorithm after 14 iterations?",a:"The value was $0.3995535068$."},{q:"In Table 8.1, what were the initial interval bounds ($a_0, b_0$) used for the search?",a:"$[-1.0000000000, 2.0000000000]$."},{q:"The points $x$ and $y$ are chosen such that the lengths of which two sub-intervals are identical?",a:"The intervals $[a, x]$ and $[y, b]$."},{q:"If $f$ is continuous and unimodal on $[a, b]$, does the golden section search method always converge?",a:"Yes, it is guaranteed to converge to the minimum point."},{q:"In golden section search, $y$ is defined as $a + (1 - r)(b - a)$. What does $(1 - r)$ approximately equal?",a:"It approximately equals $0.38196$."},{q:"Term: Unimodal Function",a:"Definition: A continuous function on an interval $[a, b]$ that possesses exactly one local minimum."},{q:"How many new function evaluations are required in each step of the golden section search after the initialization?",a:"Only one new function value must be evaluated per step."},{q:"What does the expression $x - a = b - y = r(b - a)$ imply about the symmetry of $x$ and $y$?",a:"The points $x$ and $y$ are placed symmetrically with respect to the midpoint of the interval $[a, b]$."},{q:"The golden section search method reduces the interval size by a factor of _____ in every iteration.",a:"The factor is $r$ (approximately $0.618$)."},{q:"If the initial interval is $[a, b]$, what is the length of the interval after the first reduction step?",a:"The length is $r(b - a)$."},{q:"If a function is defined on $[-1, 1]$ as $f(x) = -1/x^2$, is the golden section search method applicable?",a:"No, because the function is not continuous at $x = 0$ and is not unimodal on that interval."},{q:"Why is the requirement $x > y$ necessary for the algorithm's interval logic?",a:"It ensures that the interior points are distinct and create a valid overlapping structure for comparison."},{q:"In the derivation of $r$, the expression $r = 1 - r + (1 - r)(1 - (1 - r))$ simplifies directly to which equation?",a:"It simplifies to $r = 1 - r + r - r^2$, which is $r^2 + r - 1 = 0$."},{q:"What happens to the golden section search method if the function has multiple local minima?",a:"The method may converge to only one of the local minima or fail to correctly bracket a minimum if unimodality is violated."},{q:"In the specific example, what was the length of the initial interval ($b_0 - a_0$)?",a:"The length was $3$."},{q:"If $b - a = 1$ and $r \\approx 0.618$, what is the length of the interval after 2 steps?",a:"The length is $r^2$, which is approximately $0.382$."},{q:"Is the golden section search method used for finding maximums or minimums of functions?",a:"It is primarily used to find the minimum of a unimodal function."},{q:"To find the maximum of a unimodal function using this method, what modification should be made?",a:"One should search for the minimum of $-f(x)$."},{q:"In Equation (8.2), if $r = 0.5$, what would happen to the points $x$ and $y$?",a:"The points $x$ and $y$ would coincide at the midpoint of the interval."},{q:"Given the function $f(x) = |\\cos x|$ on $[0, 2]$, why is it considered unimodal?",a:"Because it has a unique local minimum in that interval (at $x = \\pi/2$)."},{q:"What is the role of the tolerance $\\varepsilon$ in Algorithm 8.3?",a:"It serves as the stopping criterion, determining the maximum allowable length of the final interval."},{q:"If $x'$ and $y'$ are the new points in the interval $[a', b']$, how are they derived from the original interval variables?",a:"They are calculated using the same ratio $r$ applied to the new interval boundaries $a'$ and $b'$."},{q:"The sequence of intervals $[a_k, b_k]$ produced by the golden section search is described as being _____.",a:"Nested."},{q:"When $f(x) > f(y)$, we know $p \\in [a, x]$. Why is $b$ discarded?",a:"Because for a unimodal function, if the value at $x$ is higher than at $y$ (where $y < x$), the minimum cannot be to the right of $x$."},{q:"True or False: The golden section search requires the derivative of the function to be known.",a:"False, it only requires function evaluations."},{q:"In the example table, as $k$ increases, what happens to the distance $b_k - a_k$?",a:"The distance decreases geometrically by a factor of $r$."},{q:"If the tolerance $\\varepsilon$ is halved, how does the required number of steps $n$ change roughly?",a:"It increases by approximately $\\frac{\\log(0.5)}{\\log(r)} \\approx 1.44$ steps."},{q:"The method is 'golden' because $r$ is the _____.",a:"Golden ratio (specifically the conjugate or reciprocal relationship)."},{q:"If $a=0, b=10$, and $r=0.6$, what is the value of $x$?",a:"$x = 0 + 0.6(10 - 0) = 6$."},{q:"If $a=0, b=10$, and $r=0.6$, what is the value of $y$?",a:"$y = 0 + (1 - 0.6)(10 - 0) = 4$."},{q:"In the exercise $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$, what kind of point are we looking for?",a:"The minimum point of the function."},{q:"If the algorithm terminates at iteration $k=14$ with $[a_{14}, b_{14}]$, how is the result $0.3995535068$ calculated?",a:"It is calculated as $\\frac{a_{14} + b_{14}}{2}$."},{q:"Which of the following functions on $[0, 2]$ is likely unimodal based on the source text: $x^2$ or $x^2 - x^4$?",a:"$x^2$ is unimodal on $[0, 2]$."},{q:"In step 0 of the example, $y_0$ is $0.1458980338$. In step 1, the interval becomes $[-1, 0.8541]$. What is the value of $x_1$?",a:"$x_1 = 0.1458980338$ (it matches the previous $y_0$)."},{q:"In the golden section search, does the interval $[a, b]$ always contain the minimum $p$?",a:"Yes, the algorithm is designed such that the minimum point $p$ is always contained within each subsequent interval."}],simplex:[{q:"What is the mathematical definition of an $n$-dimensional simplex?",a:"The convex hull of $n + 1$ vectors in an $n$-dimensional space, where the differences between any $n$ vertices and the remaining vertex are linearly independent."},{q:"In the context of simplexes, what geometric shape represents a 1-dimensional simplex?",a:"A line segment."},{q:"What geometric shape corresponds to a 2-dimensional simplex?",a:"A triangle."},{q:"What geometric shape corresponds to a 3-dimensional simplex?",a:"A tetrahedron."},{q:"The simplex method is a numerical technique primarily used to approximate the _____ of a function of $n$ variables.",a:"minimum point"},{q:"How are the vertices of a simplex usually indexed at the start of an iteration in the simplex method?",a:"They are ordered by their function values, such that $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},{q:"In a simplex where $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$, which vector is designated as the 'worst' vertex?",a:"$\\mathbf{x}^{(n)}$"},{q:"In the simplex method, what is the formula for calculating the center $\\mathbf{x}_c$ of the $n$ best vertices when $\\mathbf{x}^{(j)}$ is the worst vertex?",a:"$\\mathbf{x}_c := \\frac{1}{n} \\sum_{i=0, i \\neq j}^{n} \\mathbf{x}^{(i)}$"},{q:"What is the formula used to calculate the reflected point $\\mathbf{x}_r$ in the simplex method?",a:"$\\mathbf{x}_r = 2\\mathbf{x}_c - \\mathbf{x}^{(j)}$"},{q:"Under what condition is a reflection discarded and replaced by a 'shrink' operation in the basic simplex method?",a:"When the function value at the reflected point $f(\\mathbf{x}_r)$ is not smaller than the function value of the worst vertex $f(\\mathbf{x}^{(j)})$."},{q:"What is the formula for recomputing a vertex $\\mathbf{x}^{(i)}$ when shrinking a simplex towards the best vertex $\\mathbf{x}^{(k)}$?",a:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(k)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(k)})$"},{q:"One stopping criterion for the simplex method is based on the simplex size. How is 'size' defined in this context?",a:"The length of the longest edge, calculated as $\\max\\{\\|\\mathbf{x}^{(i)} - \\mathbf{x}^{(j)}\\| : i, j = 0, \\dots, n\\}$."},{q:"How does the stopping criterion based on function values at the simplex centers operate?",a:"The iteration stops when the absolute difference between the function values at the centers of consecutive simplexes is less than a tolerance $\\varepsilon$ ($|f_{k+1} - f_k| < \\varepsilon$)."},{q:"What statistical measure of function values at the vertices can be used as a stopping criterion for the simplex method?",a:"The standard deviation $\\sigma$ of the function values at the vertices."},{q:"Formula: Standard deviation $\\sigma$ of vertex function values",a:"$\\sigma := \\sqrt{\\frac{1}{n+1} \\sum_{i=0}^{n} (f(\\mathbf{x}^{(i)}) - \\bar{f})^2}$, where $\\bar{f}$ is the average function value."},{q:"Which point is typically used as the final approximation of the minimum point after the simplex method terminates?",a:"The center of the final simplex."},{q:"The _____ method is a popular variant of the simplex method that incorporates reflection, expansion, and contraction.",a:"Nelder–Mead"},{q:"In the Nelder–Mead method, how are the vertices indexed in each step?",a:"In non-decreasing order of their function values: $f(\\mathbf{x}^{(0)}) \\leq f(\\mathbf{x}^{(1)}) \\leq \\dots \\leq f(\\mathbf{x}^{(n)})$."},{q:"What occurs in Case (i) of the Nelder–Mead method, where $f(\\mathbf{x}^{(0)}) < f(\\mathbf{x}_r) < f(\\mathbf{x}^{(n-1)})$?",a:"The worst vertex $\\mathbf{x}^{(n)}$ is replaced by the reflected point $\\mathbf{x}_r$, and the iteration continues."},{q:"In Case (ii) of the Nelder–Mead method, if $f(\\mathbf{x}_r) \\leq f(\\mathbf{x}^{(0)})$, what procedure is attempted next?",a:"Expansion of the simplex in the direction of the reflected point $\\mathbf{x}_r$."},{q:"What is the formula for the expansion point $\\mathbf{x}_e$ in the Nelder–Mead method?",a:"$\\mathbf{x}_e := \\mathbf{x}_c + \\alpha(\\mathbf{x}_r - \\mathbf{x}_c)$, where $\\alpha > 1$."},{q:"In Nelder–Mead Case (ii), when is the expansion point $\\mathbf{x}_e$ accepted as the new vertex?",a:"If $f(\\mathbf{x}_e) < f(\\mathbf{x}^{(0)})$; otherwise, the reflected point $\\mathbf{x}_r$ is accepted."},{q:"In Case (iii) of the Nelder–Mead method, which operation is performed when $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$?",a:"Contraction of the simplex."},{q:"What are the two possible formulas for the contraction point $\\mathbf{x}_z$ based on the relationship between $f(\\mathbf{x}^{(n)})$ and $f(\\mathbf{x}_r)$?",a:"$\\mathbf{x}_z = \\mathbf{x}_c - \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) < f(\\mathbf{x}_r)$, and $\\mathbf{x}_z = \\mathbf{x}_c + \\beta(\\mathbf{x}_r - \\mathbf{x}_c)$ if $f(\\mathbf{x}^{(n)}) \\geq f(\\mathbf{x}_r)$."},{q:"Under what condition is the Nelder–Mead contraction point $\\mathbf{x}_z$ accepted as the new vertex?",a:"If $f(\\mathbf{x}_z) < \\min\\{f(\\mathbf{x}^{(n)}), f(\\mathbf{x}_r)\\}$."},{q:"If the contraction operation in Nelder–Mead fails to find a better point, what fallback step is taken?",a:"The simplex is shrunk to half its size from its best point $\\mathbf{x}^{(0)}$."},{q:"What is the constraint on the expansion parameter $\\alpha$ in the Nelder–Mead method?",a:"$\\alpha > 1$."},{q:"What is the constraint on the contraction parameter $\\beta$ in the Nelder–Mead method?",a:"$0 < \\beta < 1$."},{q:"Comparing the Simplex method and Nelder–Mead for function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, which generally converges faster?",a:"The Nelder–Mead method."},{q:"According to Example 8.6, what are the coordinates of the global minimum for $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$?",a:"$(1, 0.5)$."},{q:"In the Nelder–Mead algorithm, Case (i) represents the scenario where the reflected point is better than the _____ vertex but worse than the _____ vertex.",a:"second-to-worst ($x^{(n-1)}$); best ($x^{(0)}$)"},{q:"If the Nelder–Mead expansion parameter is set to $\\alpha = 1$ and contraction parameter $\\beta = 1$, the method effectively reduces to the _____ method.",a:"simplex"},{q:"True or False: The center point used in the standard simplex method reflection is the average of all vertices.",a:"False; it is the center of all vertices except the worst one."},{q:"Concept: Derivative-free optimization",a:"Definition: Optimization methods that do not require information about the function's gradient, such as the simplex and Nelder–Mead methods."},{q:"Formula: Center of the simplex $\\mathbf{x}_c$ (Nelder-Mead)",a:"$\\mathbf{x}_c = \\frac{1}{n} \\sum_{i=0}^{n-1} \\mathbf{x}^{(i)}$, assuming vertices are ordered by function value."},{q:"In the Nelder–Mead shrink step, what is the formula for updating vertex $\\mathbf{x}^{(i)}$ for $i = 1, \\dots, n$?",a:"$\\mathbf{x}^{(i)} \\leftarrow \\mathbf{x}^{(0)} + \\frac{1}{2}(\\mathbf{x}^{(i)} - \\mathbf{x}^{(0)})$"},{q:"In the Hungarian source, the simplex method is described as using the _____ of the vertices as an approximation for the minimum.",a:"súlypont (centroid/center of gravity)"},{q:"What specific objective function is used in Example 8.6 and 8.7 to demonstrate the simplex methods?",a:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},{q:"In the provided examples, what starting vertices are used for the simplex?",a:"$(-2, 4)$, $(-1, 4)$, and $(-1.5, 5)$."},{q:"What happens in Step 1 of the basic simplex method?",a:"The center of the best $n$ vertices is computed and the worst vertex is reflected over it."},{q:"In Nelder-Mead, if $f(\\mathbf{x}_r) \\geq f(\\mathbf{x}^{(n-1)})$, the algorithm identifies that the reflection was likely _____.",a:"too far from the worst vertex."},{q:"What is the primary role of the $\\alpha$ parameter in Nelder-Mead?",a:"It determines the scale of the expansion in the direction of the reflected point."},{q:"What is the primary role of the $\\beta$ parameter in Nelder-Mead?",a:"It determines the scale of the contraction when the reflected point is poor."},{q:"The standard deviation $\\sigma$ stopping criterion interrupts the iteration when the values of the function at the vertices are _____.",a:"close enough to each other (i.e., $\\sigma$ is below a tolerance)."},{q:"Nelder-Mead Case (i) occurs when $f(\\mathbf{x}_r)$ is strictly between _____ and _____.",a:"$f(\\mathbf{x}^{(0)})$ and $f(\\mathbf{x}^{(n-1)})$."},{q:"Why is the order of indexing vertices updated in every step of the Nelder–Mead method?",a:"To ensure that $\\mathbf{x}^{(0)}$ always represents the best vertex and $\\mathbf{x}^{(n)}$ always represents the worst vertex for the logic of the next iteration."},{q:"How does the Nelder-Mead expansion step hope to improve the search?",a:"By moving further in a direction that produced an exceptionally good reflected point."},{q:"In the formula $x_r = 2x_c - x^{(j)}$, what does the constant $2$ represent geometrically?",a:"The reflected point is an equal distance away from the center as the original worst point, but on the opposite side."},{q:"When applying the Nelder-Mead method to $f(x, y) = x^2 - y^2$, what behavior is expected based on the exercises?",a:"Observation of how the method behaves on a function that is not bounded below (a saddle point)."},{q:"If a simplex becomes smaller than a predefined tolerance, which stopping criterion is being satisfied?",a:"The criterion based on the physical size (e.g., longest edge length) of the simplex."},{q:"In the exercise on one-variable functions, the simplex method essentially reduces the 'simplex' to what geometric object?",a:"A line segment."}],gradient:[{q:"What is the geometric relationship between the gradient vector $f'(\\mathbf{p})$ and the level curve of $f$ passing through point $\\mathbf{p}$?",a:"The gradient vector is perpendicular (orthogonal) to the level curve's tangent line at that point."},{q:"If $\\gamma(t)$ is a parametrization of a level curve $f(\\gamma(t)) = c$, what is the result of $\\frac{d}{dt} f(\\gamma(t))$?",a:"$0$"},{q:"According to the chain rule, how is the derivative $\\frac{d}{dt} f(\\gamma(t))$ expressed using the gradient?",a:"$f'(\\gamma(t))^T \\gamma'(t)$"},{q:"In the context of level curves, what does the expression $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ prove?",a:"The gradient is perpendicular to the direction vector of the tangent line at point $\\mathbf{p}$."},{q:"In which direction does a continuously differentiable function $f$ decrease most rapidly at point $\\mathbf{p}$?",a:"In the direction of the negative gradient vector $-f'(\\mathbf{p})$."},{q:"What is the minimum value of the directional derivative at point $\\mathbf{p}$ for a unit vector $\\mathbf{u}$?",a:"The minimum occurs when $\\mathbf{u} = -f'(\\mathbf{p})/\\|f'(\\mathbf{p})\\|_2$."},{q:"Term: Descent direction",a:"Definition: A direction $\\mathbf{u}$ where there exists $\\delta > 0$ such that $f(\\mathbf{p} + t\\mathbf{u}) < f(\\mathbf{p})$ for all $0 < t < \\delta$."},{q:"The gradient method is also known by what alternative name?",a:"The steepest descent method."},{q:"What is the general iterative formula for the gradient method?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k f'(\\mathbf{p}^{(k)})$"},{q:"In the gradient method formula, what role does the parameter $\\alpha_k$ serve?",a:"It is a scaling parameter that determines the step size."},{q:"What is the formula for the factor $\\alpha_k$ in the constant step size variant of the gradient method?",a:"$\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$"},{q:"In the constant step size variant of the gradient method, what is the fixed distance between consecutive points?",a:"$h$"},{q:"Why is the accuracy of the constant step size gradient method limited by the value $h$?",a:"Because the fixed step length generally prevents approximating the exact minimum more closely than the step size itself."},{q:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",a:"It is chosen to minimize the function $\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$ with respect to $t$."},{q:"In the optimal gradient method, what kind of problem must be solved at each step to determine the step size?",a:"A one-dimensional (single variable) function minimization problem."},{q:"In the optimal gradient method, where does the step forward from $\\mathbf{p}^{(k)}$ end relative to the level curves?",a:"It ends at a point where the search line is tangent to a level curve of $f$."},{q:"What is the geometric relationship between consecutive search directions in the optimal gradient method?",a:"Consecutive directions are perpendicular (orthogonal) to each other."},{q:"What is the local convergence rate of the optimal gradient method?",a:"Locally linearly convergent."},{q:"Why can the convergence of the optimal gradient method be slow despite being 'optimal' at each step?",a:"The asymptotic error constant can be close to $1$."},{q:"What visual behavior is characteristic of the optimal gradient method when approaching a minimum in a narrow 'valley'?",a:"The sequence zigzags slowly toward the minimum point."},{q:"When using a constant step size $h=0.3$, how does the gradient method sequence behave near the minimum?",a:"It approximates the minimum slowly and oscillates around it."},{q:"Which variant of the gradient method should be used if the analytical gradient vector is too expensive to compute?",a:"A numerical approximation variant using function values at small displacements."},{q:"What is the formula for the $i$-th component $v_i^{(k)}$ of the approximated gradient vector?",a:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},{q:"In the numerical gradient approximation, what does the vector $\\mathbf{e}^{(i)}$ represent?",a:"The $i$-th unit vector."},{q:"If the gradient vector is not used directly, what is the update rule for point $\\mathbf{p}^{(k+1)}$ using the approximate vector $\\mathbf{v}^{(k)}$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$"},{q:"Theorem: For $f \\in C^1$, the direction of the steepest descent at point $\\mathbf{p}$ is ____.",a:"$-f'(\\mathbf{p})$"},{q:"In the function $f(x, y) = 4 - 3x^2 - y^2$, what is the gradient at $\\mathbf{p} = (0.5, 0.5)$?",a:"$f'(\\mathbf{p}) = (-3, -1)$"},{q:"What defines the function $\\phi_k(t)$ used in the optimal gradient method?",a:"$\\phi_k(t) = f(\\mathbf{p}^{(k)} - t f'(\\mathbf{p}^{(k)}))$"},{q:"Why do the steps in the optimal gradient method always result in perpendicular directions?",a:"The step ends at a point where the gradient is perpendicular to the current search direction."},{q:"The constant step size factor $\\alpha_k = h/\\|f'(\\mathbf{p}^{(k)})\\|_2$ ensures the Euclidean distance between $\\mathbf{p}^{(k)}$ and $\\mathbf{p}^{(k+1)}$ is exactly ____.",a:"$h$"},{q:"What happens to the gradient method's path if a function's level curves are very elongated?",a:"The method tends to zigzag and progress slowly toward the minimum."},{q:"In the proof of the gradient's perpendicularity, what does $\\gamma'(t_0)$ represent?",a:"The direction vector of the tangent to the level curve at point $\\mathbf{p}$."},{q:"Under what condition is the direction $\\mathbf{u}$ considered a descent at point $\\mathbf{p}$?",a:"The function value must decrease for sufficiently small steps in direction $\\mathbf{u}$ from $\\mathbf{p}$."},{q:"How does the starting point affect the convergence path in Example 8.9?",a:"Different starting points can lead to different numbers of steps or different trajectories (e.g., direct vs. zigzagging)."},{q:"If the gradient method oscillates around the minimum, what can be adjusted to stabilize it?",a:"The step size parameter $h$ or the scaling factor $\\alpha_k$ can be reduced."},{q:"What is the primary drawback of the constant step size gradient method mentioned in the text?",a:"It cannot approximate the exact minimum point with a precision greater than the step size $h$."},{q:"The optimal gradient method minimizes the function value along the ____ of the gradient.",a:"line (or negative gradient direction)"},{q:"How many dimensions is the minimization problem in Equation 8.6?",a:"One dimension (single variable $t$)."},{q:"True or False: The gradient vector always points in the direction of the steepest increase of the function.",a:"True"},{q:"Concept: Steepest Descent Method",a:"Definition: An optimization algorithm that takes repeated steps in the direction of the negative gradient to find a local minimum."},{q:"In Example 8.9, the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ has a minimum point at ____.",a:"$(1, 0.5)$"},{q:"What is the meaning of $f \\in C^1$ in the context of the gradient method theorems?",a:"The function is continuously differentiable."},{q:"Formula: $v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$ is an approximation of which mathematical object?",a:"The $i$-th partial derivative of $f$ at point $\\mathbf{p}^{(k)}$."},{q:"How is the next point $\\mathbf{p}^{(k+1)}$ related to the current point $\\mathbf{p}^{(k)}$ and current gradient in the gradient method?",a:"It is the current point minus a scaled version of the gradient vector."},{q:"What does the 'optimal' in 'optimal gradient method' refer to specifically?",a:"It refers to selecting the step size that yields the maximum possible decrease in function value along the current gradient direction."},{q:"In the constant step size gradient method, if $h=0.3$, what is the distance $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}\\|_2$?",a:"$0.3$"},{q:"The condition $f'(\\mathbf{p})^T \\gamma'(t_0) = 0$ implies that the angle between the gradient and the level curve tangent is ____.",a:"$90$ degrees (or $\\pi/2$ radians)."},{q:"What determines if the convergence of the optimal gradient method is fast or slow?",a:"The shape of the function's level curves (the asymptotic error constant)."},{q:"In the notation $\\mathbf{p} + t\\mathbf{u}$, what does $t \\to 0+$ signify in the directional derivative formula?",a:"The limit as the step size $t$ approaches zero from the positive side."},{q:"If the optimal gradient method enters a 'valley' in the contour lines, how does its trajectory appear?",a:"It zigzags between the sides of the valley."},{q:"What is the dot product of two consecutive step vectors in the optimal gradient method?",a:"$0$ (because they are orthogonal)."},{q:"What is the purpose of the unit vector $\\mathbf{e}^{(i)}$ in the numerical gradient approximation?",a:"To isolate the change in the function value along the $i$-th coordinate axis."},{q:"The sequence $\\mathbf{p}^{(k)}$ generated by the gradient method always moves in a direction ____ to the local contour lines.",a:"perpendicular"},{q:"Under what condition does the gradient vector $f'(\\mathbf{p})$ exist for a function $f$?",a:"The function must be differentiable at point $\\mathbf{p}$."},{q:"How does the asymptotic error constant affect linear convergence?",a:"A constant close to $1$ results in very slow convergence, while a smaller constant results in faster convergence."}],linsys:[{q:"In the context of the gradient method, what is the standard form of the quadratic function $g(\\mathbf{x})$ used to solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"$g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$"},{q:"What matrix property is required for $g(\\mathbf{x})$ to be expressed in terms of the summation $\\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$?",a:"The matrix $\\mathbf{A}$ must be symmetric ($\\mathbf{A}^T = \\mathbf{A}$)."},{q:"In the summation form of the quadratic function $g(x_1, \\ldots, x_n)$, what term represents the linear component involving $\\mathbf{b}$?",a:"$- \\sum_{i=1}^{n} b_i x_i$"},{q:"What is the result of the partial derivative $\\frac{\\partial g}{\\partial x_i}$ for the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",a:"$\\sum_{j=1}^{n} a_{ij} x_j - b_i$"},{q:"What is the vectorial form of the gradient vector $g'(\\mathbf{x})$ for the quadratic function associated with the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"$g'(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} - \\mathbf{b}$"},{q:"If matrix $\\mathbf{A}$ is invertible, how many critical points does the quadratic function $g(\\mathbf{x})$ have?",a:"Exactly one."},{q:"A critical point $\\bar{\\mathbf{x}}$ of the quadratic function $g(\\mathbf{x})$ is a solution to which linear equation?",a:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$"},{q:"What is the relationship between $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ and $g(\\bar{\\mathbf{x}})$ when $\\bar{\\mathbf{x}}$ is a critical point?",a:"$g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x}) - g(\\bar{\\mathbf{x}}) = \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$"},{q:"Under what condition on matrix $\\mathbf{A}$ does the critical point $\\bar{\\mathbf{x}}$ minimize the function $g(\\mathbf{x})$?",a:"When $\\mathbf{A}$ is a positive definite matrix."},{q:"Under what condition on matrix $\\mathbf{A}$ does the function $g(\\mathbf{x})$ have a maximum at the critical point $\\bar{\\mathbf{x}}$?",a:"When $\\mathbf{A}$ is a negative definite matrix."},{q:"According to the theorem on quadratic functions, if $\\mathbf{A}$ is symmetric and positive definite, where does the global minimum occur?",a:"At the point $\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}$."},{q:"What is the relationship between a local minimum and a global minimum for a quadratic function?",a:"If a quadratic function has a local minimum at a point, it is also a global minimum at that point."},{q:"In the iterative formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - \\alpha_k \\mathbf{v}^{(k)}$, what does $\\mathbf{v}^{(k)}$ represent?",a:"The gradient vector at the current point, $\\mathbf{v}^{(k)} = g'(\\mathbf{p}^{(k)})$."},{q:"How is the step size $\\alpha_k$ chosen in the optimal gradient method?",a:"It is the minimum point of the one-variable function $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$."},{q:"What type of function is $\\phi_k(t) = g(\\mathbf{p}^{(k)} - t\\mathbf{v}^{(k)})$ in the gradient method?",a:"A quadratic polynomial."},{q:"What is the explicit formula for $\\alpha_k$ in terms of the gradient vector $\\mathbf{v}^{(k)}$ and the current state?",a:"$\\alpha_k = \\frac{(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})}{(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}}$"},{q:"How is the residual vector $\\mathbf{r}^{(k)}$ defined in the gradient method algorithm?",a:"$\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$"},{q:"What is the relationship between the residual vector $\\mathbf{r}^{(k)}$ and the gradient vector $\\mathbf{v}^{(k)}$?",a:"$\\mathbf{r}^{(k)} = -\\mathbf{v}^{(k)}$"},{q:"Using the residual vector $\\mathbf{r}^{(k)}$, what is the formula for the step size $\\alpha_k$?",a:"$\\alpha_k = \\frac{(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}}{(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}}$"},{q:"What is the iterative update formula for the point $\\mathbf{p}^{(k+1)}$ using the residual vector $\\mathbf{r}^{(k)}$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$"},{q:"Why is the gradient method applicable to a linear system where the matrix has entries $a_{11}=4, a_{12}=2, a_{21}=2, a_{22}=5$?",a:"Because the coefficient matrix is symmetric and positive definite."},{q:"In the provided example, starting from $\\mathbf{p}^{(0)} = (3, 3, 3)^T$ for a specific system, what is the exact solution being approached?",a:"$(-1, 2, 0)$"},{q:"Which specific vector calculation represents the 'direction' of the update in the final summarized algorithm (Equations 8.11-8.13)?",a:"The residual vector $\\mathbf{r}^{(k)}$."},{q:"In the expression for $\\phi_k(t)$, what is the coefficient of the $t^2$ term?",a:"$\\frac{1}{2}(\\mathbf{v}^{(k)})^T \\mathbf{A}\\mathbf{v}^{(k)}$"},{q:"In the expression for $\\phi_k(t)$, what is the coefficient of the $-t$ term?",a:"$(\\mathbf{v}^{(k)})^T (\\mathbf{A}\\mathbf{p}^{(k)} - \\mathbf{b})$"},{q:"Cloze: All positive or negative definite matrices are _____.",a:"invertible"},{q:"Concept: Residual Vector ($\\mathbf{r}^{(k)}$)",a:"Definition: The difference between the target vector $\\mathbf{b}$ and the current transformation $\\mathbf{A}\\mathbf{p}^{(k)}$, used as the search direction in the gradient method."},{q:"Why is the symmetry of matrix $\\mathbf{A}$ ($a_{ij} = a_{ji}$) essential for the simplification of $\\frac{\\partial g}{\\partial x_i}$?",a:"It allows the combination of terms $(a_{ij} x_j + a_{ji} x_j)$ into $2a_{ij} x_j$, which cancels the $\\frac{1}{2}$ factor."},{q:"If a matrix $\\mathbf{A}$ is positive definite, what can be said about the sign of $(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$ for any non-zero $\\Delta\\mathbf{x}$?",a:"It is always positive ($> 0$)."},{q:"In the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$, why is the sign before $\\alpha_k$ positive compared to the gradient update form?",a:"Because the residual $\\mathbf{r}^{(k)}$ is defined as the negative gradient ($-\\mathbf{v}^{(k)}$)."},{q:"What is the purpose of the constant $c$ in the quadratic function $g(\\mathbf{x})$ during the optimization process?",a:"It acts as a vertical shift and does not affect the location of the critical point or the gradient."},{q:"Formula: Write the denominator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",a:"$(\\mathbf{r}^{(k)})^T \\mathbf{A}\\mathbf{r}^{(k)}$"},{q:"Formula: Write the numerator of the step size $\\alpha_k$ in the optimal gradient method using $\\mathbf{r}^{(k)}$.",a:"$(\\mathbf{r}^{(k)})^T \\mathbf{r}^{(k)}$"},{q:"Sequence: In the gradient method, what is the first step performed in each iteration $k$?",a:"Calculate the residual vector $\\mathbf{r}^{(k)} = \\mathbf{b} - \\mathbf{A}\\mathbf{p}^{(k)}$."},{q:"Sequence: After calculating the residual $\\mathbf{r}^{(k)}$, what is the next step in the gradient method iteration?",a:"Calculate the optimal step size $\\alpha_k$."},{q:"Sequence: What is the final step in a single iteration of the gradient method to find the next approximation?",a:"Update the solution estimate: $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$."},{q:"What matrix property ensures that the optimal step size $\\alpha_k$ always has a non-zero denominator for a non-zero residual?",a:"Positive definiteness (or negative definiteness)."},{q:"True or False: The optimal gradient method for linear systems requires the matrix $\\mathbf{A}$ to be symmetric.",a:"True."},{q:"In the example provided, what is the Euclidean norm error $(\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2)$ at the initial guess $\\mathbf{p}^{(0)} = (3, 3, 3)^T$?",a:"5.09901951"},{q:"How does the error change as $k$ increases in the gradient method example table?",a:"The error consistently decreases towards zero."},{q:"What is the Hessian matrix ($g''(\\mathbf{x})$) of the quadratic function $g(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T \\mathbf{A}\\mathbf{x} - \\mathbf{b}^T \\mathbf{x} + c$?",a:"$\\mathbf{A}$"},{q:"If the gradient method is applied to $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, what is the equivalent linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for the minimum?",a:"$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -30 \\end{pmatrix}$"},{q:"Cloze: The optimal gradient method selects $\\alpha_k$ to minimize the function along the _____ direction.",a:"residual (or negative gradient)"},{q:"Why can the solution of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ be framed as a minimization problem?",a:"Because the solution occurs where the gradient of the associated quadratic function $g(\\mathbf{x})$ is zero."},{q:"In the vector notation $\\mathbf{b}^T \\mathbf{x}$, if $\\mathbf{b} = (b_1, \\ldots, b_n)^T$, how is this expressed as a sum?",a:"$\\sum_{i=1}^{n} b_i x_i$"},{q:"Under what condition is the critical point $\\bar{\\mathbf{x}}$ of $g(\\mathbf{x})$ unique?",a:"When the matrix $\\mathbf{A}$ is invertible."},{q:"What is the purpose of the optimal gradient method in numerical analysis?",a:"To iteratively approximate the solution of a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$."},{q:"How does the formula for $g(\\bar{\\mathbf{x}} + \\Delta\\mathbf{x})$ simplify when $\\mathbf{A}\\bar{\\mathbf{x}} = \\mathbf{b}$ and $\\mathbf{A}$ is symmetric?",a:"The linear terms in $\\Delta\\mathbf{x}$ cancel out, leaving $g(\\bar{\\mathbf{x}}) + \\frac{1}{2}(\\Delta\\mathbf{x})^T \\mathbf{A}\\Delta\\mathbf{x}$."},{q:"If $\\mathbf{A}$ is negative definite, does the iteration $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\alpha_k \\mathbf{r}^{(k)}$ find a minimum or a maximum?",a:"It finds a maximum."},{q:"In Exercise 11, for $f(x, y) = \\frac{1}{2}x^2 + \\frac{9}{2}y^2$ starting from $(9, 1)^T$, what is the asymptotic error constant?",a:"0.8"},{q:"What is the residual vector $\\mathbf{r}^{(0)}$ if the initial guess $\\mathbf{p}^{(0)}$ is exactly the solution $\\bar{\\mathbf{x}}$?",a:"The zero vector $\\mathbf{0}$."},{q:"In the summation form of $g(\\mathbf{x})$, what does the index $j$ represent in the term $a_{ij} x_i x_j$?",a:"The column index of matrix $\\mathbf{A}$ and the index of the second vector component."},{q:"What property of the quadratic function $g(\\mathbf{x})$ ensures that the gradient $g'(\\mathbf{x})$ is linear?",a:"The fact that the highest degree of $\\mathbf{x}$ in $g(\\mathbf{x})$ is 2."},{q:"Cloze: The function $\\phi_k(t)$ represents $g$ evaluated along the line passing through $\\mathbf{p}^{(k)}$ in the direction of _____.",a:"$-\\mathbf{v}^{(k)}$ (or $\\mathbf{r}^{(k)}$)"},{q:"How is the symmetry of $\\mathbf{A}$ utilized in the step $\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x} = (\\Delta\\mathbf{x})^T \\mathbf{A}\\bar{\\mathbf{x}}$?",a:"By taking the transpose of the scalar value: $(\\bar{\\mathbf{x}}^T \\mathbf{A}\\Delta\\mathbf{x})^T = \\Delta\\mathbf{x}^T \\mathbf{A}^T \\bar{\\mathbf{x}}$ and applying $\\mathbf{A}^T = \\mathbf{A}$."},{q:"True or False: The gradient method always reaches the exact solution in a finite number of steps for any symmetric positive definite matrix.",a:"False (it is an iterative method that provides an approximation, though it may converge to the exact solution in specific cases)."},{q:"In the example system, what is the value of $b_2$?",a:"8"},{q:"In the example system, what is the value of $a_{31}$?",a:"-1"},{q:"What is the primary computational cost per iteration in the optimal gradient method?",a:"The matrix-vector multiplication $\\mathbf{A}\\mathbf{r}^{(k)}$."},{q:"Cloze: To minimize $g(\\mathbf{x})$, we move in the direction of the _____ gradient.",a:"negative"}],newton:[{q:"What is the primary purpose of Newton's method as described in the source material?",a:"To find the minimum value of a function $f: \\mathbb{R}^n \\to \\mathbb{R}$."},{q:"What degree is the Taylor polynomial used to approximate the function $f$ in a neighborhood of $\\mathbf{p}^{(0)}$?",a:"Second-order (or quadratic)."},{q:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f'(\\mathbf{p}^{(0)})$ represent?",a:"The gradient vector of $f$ evaluated at $\\mathbf{p}^{(0)}$."},{q:"In the Taylor approximation $g(\\mathbf{x})$, what does the term $f''(\\mathbf{p}^{(0)})$ represent?",a:"The Hessian matrix of $f$ evaluated at $\\mathbf{p}^{(0)}$."},{q:"What is the mathematical definition of the quadratic Taylor approximation $g(\\mathbf{x})$ of $f$ at $\\mathbf{p}^{(0)}$?",a:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(0)}) + f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(0)})^T f''(\\mathbf{p}^{(0)})(\\mathbf{x} - \\mathbf{p}^{(0)})$."},{q:"Under what condition does the quadratic approximation $g(\\mathbf{x})$ possess a unique global minimum?",a:"When the Hessian matrix $f''(\\mathbf{p}^{(0)})$ is positive definite."},{q:"Provide the iteration formula for Newton's method for minimization.",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},{q:"Newton's method for minimization is equivalent to applying Newton's iteration to solve which equation system?",a:"$f'(\\mathbf{x}) = \\mathbf{0}$."},{q:"According to Theorem 8.13, what must be the value of $f'(\\mathbf{p})$ for a point $\\mathbf{p}$ to be a local minimum candidate?",a:"$\\mathbf{0}$ (the zero vector)."},{q:"What differentiability class is required for $f$ to apply the local quadratic convergence theorem for Newton's method?",a:"$f \\in C^3$."},{q:"If $f'(\\mathbf{p}) = \\mathbf{0}$ and $f''(\\mathbf{p})$ is positive definite, what can be concluded about the point $\\mathbf{p}$?",a:"The function $f$ has a local minimum at $\\mathbf{p}$."},{q:"What is the typical convergence rate of Newton's method near a local minimum where the Hessian is positive definite?",a:"Locally quadratic convergence."},{q:"According to the proof of Theorem 8.13, which theorem establishes the local quadratic convergence of Newton's method for systems?",a:"Theorem 2.56."},{q:"Concept: Newton's Method for Minimization",a:"Definition: An iterative algorithm that uses first and second derivatives to find local minima of a function."},{q:"In Example 8.14, Newton's method is applied to which function $f(x, y)$?",a:"$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$."},{q:"What is the exact minimum point of the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ used in Example 8.14?",a:"$(1, 0.5)^T$."},{q:"In Example 8.14, the starting vector $\\mathbf{p}^{(0)}$ for the first trial is _____.",a:"$(-1, 4)^T$."},{q:"For the function in Example 8.14, what occurs if the Newton's iteration starts from $(1, 3)^T$?",a:"The method returns the exact minimum point in a single step."},{q:"How does the convergence speed of Newton's method in Example 8.14 (positive definite Hessian) compare to Example 8.15 (zero Hessian)?",a:"Example 8.14 is quadratic (fast), while Example 8.15 is linear (slower)."},{q:"In Example 8.15, what is the function $f(x, y)$ defined as?",a:"$f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$."},{q:"What is the value of the Hessian $f''(1, 0.5)$ for the function $f(x, y) = 0.1(x^2 - 2y)^4 + (x - 1)^2$?",a:"The zero matrix $\\mathbf{0}$."},{q:"Why is the Hessian $f''(1, 0.5) = \\mathbf{0}$ significant in Example 8.15?",a:"It means the Hessian is not positive definite, violating a condition for quadratic convergence."},{q:"Despite the non-positive definite Hessian at the minimum, how does Newton's method behave for the function in Example 8.15?",a:"It still converges, but the rate of convergence is only linear."},{q:"What type of function always results in the exact minimum in one step using Newton's method (assuming a positive definite Hessian)?",a:"Quadratic functions."},{q:"Exercise 3 asks to prove that if Theorem 8.13 conditions hold and $\\mathbf{p}^{(0)}$ is close to $\\mathbf{p}$, then $f''(\\mathbf{p}^{(k)})$ is _____ for all $k$.",a:"Invertible."},{q:"How is the next iteration point $\\mathbf{p}^{(1)}$ calculated from the quadratic approximation $g$?",a:"It is the point where $g$ attains its global minimum."},{q:"The notation $(f''(\\mathbf{p}^{(k)}))^{-1}$ in the iteration formula denotes the _____ of the Hessian matrix.",a:"Inverse."},{q:"The sequence $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$ is known as the _____ minimum-seeking method.",a:"Newton-type (or Newton's)."},{q:"What happens to the gradient $f'$ at the minimum point in Example 8.14 and 8.15?",a:"It becomes the zero vector $\\mathbf{0}$."},{q:"In Example 8.15, Table 8.6 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ approaching a constant. What does this indicate?",a:"Linear convergence."},{q:"In Example 8.14, Table 8.5 shows the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2^2}$ being tracked. What is this ratio used to identify?",a:"Quadratic convergence."},{q:"What is the value of $f(\\mathbf{p}^{(k)})$ at the exact minimum $(1, 0.5)^T$ for both examples in Section 8.6?",a:"0.00000000."},{q:"If the Hessian matrix $f''(\\mathbf{x})$ is positive definite everywhere, what kind of minimum does the quadratic approximation $g$ have?",a:"A global minimum."},{q:"Why is $f \\in C^3$ a necessary condition for the quadratic convergence theorem of Newton's method?",a:"To ensure the second derivative is Lipschitz continuous or that the Taylor remainder behaves correctly for quadratic convergence."},{q:"True or False: Newton's method for minimization requires calculating the inverse of the Hessian matrix at every step.",a:"True (at least conceptually, as per the formula $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$)."},{q:"In the formula for Newton's method, what is subtracted from the current point $\\mathbf{p}^{(k)}$?",a:"The product of the inverse Hessian and the gradient vector: $(f''(\\mathbf{p}^{(k)}))^{-1} f'(\\mathbf{p}^{(k)})$."},{q:"What vector norm is used in the examples to measure the distance to the minimum point?",a:"The $L_2$ norm (Euclidean norm), denoted as $\\|\\cdot\\|_2$."},{q:"For the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, how many iterations starting from $(-1, 4)^T$ were shown before reaching a distance of approximately $1.7 \\times 10^{-5}$?",a:"5 iterations."},{q:"In Example 8.15, at iteration $k=20$, the distance to the minimum is approximately _____.",a:"$0.01238211$."},{q:"Based on the tables, which example converges to a much higher precision in fewer steps?",a:"Example 8.14 (due to quadratic convergence)."},{q:"In Example 8.15, the ratio $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ eventually stabilizes around what value?",a:"Approximately $0.66666667$ (or $2/3$)."},{q:"Under what circumstance does Newton's method for minimization fail to be defined for a specific iteration step?",a:"If the Hessian matrix $f''(\\mathbf{p}^{(k)})$ is singular (non-invertible)."},{q:"Theorem 8.13 asserts that Newton's method converges _____ if the starting point is close enough to the minimum.",a:"Locally."},{q:"What is the relationship between the Hessian matrix $f''(\\mathbf{p})$ and the Jacobian matrix of the system $f'(\\mathbf{x}) = \\mathbf{0}$?",a:"The Hessian of $f$ is the Jacobian of the gradient system $f'(\\mathbf{x})$."},{q:"If $f$ is a quadratic function, $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{b}^T \\mathbf{x} + c$, what is its Hessian matrix $f''(\\mathbf{x})$?",a:"The matrix $A$."},{q:"Newton's method effectively replaces the objective function at each step with its _____ approximation.",a:"Quadratic (or second-order Taylor)."},{q:"What is the result of the first derivative of the Taylor approximation $g(\\mathbf{x})$ at the point $\\mathbf{x} = \\mathbf{p}^{(1)}$?",a:"The gradient $g'(\\mathbf{p}^{(1)}) = \\mathbf{0}$."},{q:"In Example 8.15, the starting function value $f(\\mathbf{p}^{(0)})$ is _____.",a:"$244.10000000$."},{q:"In Example 8.14, the value of the function at the starting point $(-1, 4)^T$ is _____.",a:"$57.00000000$."},{q:"The term $f'(\\mathbf{p}^{(0)})^T(\\mathbf{x} - \\mathbf{p}^{(0)})$ in the Taylor polynomial represents a _____ product.",a:"Scalar (or dot) product."},{q:"Which specific property of the Hessian ensures that the search direction in Newton's method is a descent direction?",a:"Positive definiteness."},{q:"How is the Taylor polynomial $g(\\mathbf{x})$ related to the next iterate $\\mathbf{p}^{(1)}$ in terms of calculus?",a:"$\\mathbf{p}^{(1)}$ is the stationary point of $g(\\mathbf{x})$, found by setting $g'(\\mathbf{x}) = \\mathbf{0}$."},{q:"What is the significance of the distance $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2$ becoming zero in a table?",a:"The iteration has reached the exact minimum within numerical precision."},{q:"If Newton's method is applied to a function where the Hessian is always positive definite, what can be said about the shape of the function?",a:"The function is strictly convex."},{q:"The proof of Theorem 8.13 uses which theorem to establish that $\\mathbf{p}$ is a local minimum?",a:"Theorem 8.1."},{q:"In Example 8.14, at $k=1$, the iterate $\\mathbf{p}^{(1)}$ is _____.",a:"$(-1.33333333, 0.83333333)^T$."},{q:"Exercise 2: For a quadratic function with a positive definite Hessian, why is the minimum found in one step?",a:"Because the second-order Taylor polynomial $g(\\mathbf{x})$ is identical to the function $f(\\mathbf{x})$ itself."},{q:"What is the gradient vector of $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ at its minimum $(1, 0.5)^T$?",a:"$(0, 0)^T$."},{q:"The Hessian matrix is defined as the matrix of _____ partial derivatives.",a:"Second-order."},{q:"Newton's method for minimization can be viewed as a _____ refinement of the current estimate of the minimum.",a:"Local."}],quasinewton:[{q:"In Quasi-Newton methods, the function $f$ is approximated near $\\mathbf{p}^{(k)}$ by what type of function?",a:"A quadratic function $g(\\mathbf{x})$."},{q:"Formula: Quadratic approximation $g(\\mathbf{x})$ used in Quasi-Newton methods",a:"$g(\\mathbf{x}) := f(\\mathbf{p}^{(k)}) + (\\mathbf{v}^{(k)})^T (\\mathbf{x} - \\mathbf{p}^{(k)}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{p}^{(k)})^T \\mathbf{A}^{(k)}(\\mathbf{x} - \\mathbf{p}^{(k)})$"},{q:"In the quadratic approximation for Quasi-Newton methods, what do $\\mathbf{v}^{(k)}$ and $\\mathbf{A}^{(k)}$ typically represent?",a:"Approximations of the gradient $f'(\\mathbf{p}^{(k)})$ and the Hessian $f''(\\mathbf{p}^{(k)})$."},{q:"If $\\mathbf{A}^{(k)}$ is positive definite, what is the formula for the minimum point $\\mathbf{p}^{(k+1)}$ of the quadratic approximation $g(\\mathbf{x})$?",a:"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{v}^{(k)}$"},{q:"What is the order of magnitude for function evaluations required per iteration when using numerical difference approximations for both the gradient and Hessian?",a:"$n^2$ function evaluations."},{q:"Formula: First-order forward difference approximation for the $i$-th component of the gradient $v_i^{(k)}$",a:"$v_i^{(k)} = \\frac{1}{h}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)}))$"},{q:"The standard Quasi-Newton method for minimization assumes the exact value of which vector is available?",a:"The gradient vector $f'(\\mathbf{p}^{(k)})$."},{q:"In Quasi-Newton iterations, how is the step vector $\\mathbf{s}^{(k)}$ defined relative to the current point $\\mathbf{p}^{(k)}$?",a:"$\\mathbf{s}^{(k)} = \\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"},{q:"Formula: Definition of the gradient change vector $\\mathbf{y}^{(k)}$",a:"$\\mathbf{y}^{(k)} = f'(\\mathbf{p}^{(k+1)}) - f'(\\mathbf{p}^{(k)})$"},{q:"What equation must the updated Hessian approximation $\\mathbf{A}^{(k+1)}$ satisfy to be consistent with the gradient change?",a:"The secant equation: $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$."},{q:"Formula: Broyden's method update for the matrix $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"},{q:"What are the two main theoretical drawbacks of using the standard Broyden's method for function minimization?",a:"The generated matrices are generally not symmetric and not necessarily positive definite."},{q:"Concept: Closest symmetric matrix",a:"The unique symmetric matrix closest to a matrix $\\mathbf{A}$ in the Frobenius norm is $\\frac{1}{2}(\\mathbf{A} + \\mathbf{A}^T)$."},{q:"What is the full name of the 'PSB update' in Quasi-Newton methods?",a:"Powell-Symmetric-Broyden update."},{q:"The PSB update is derived by iteratively enforcing which two properties?",a:"Symmetry and the secant equation."},{q:"Formula: PSB update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T + \\mathbf{s}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{\\|\\mathbf{s}^{(k)}\\|_2^4} \\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T$"},{q:"According to Theorem 8.17, what is the convergence rate of the PSB update near a local minimum with a positive definite Hessian?",a:"Superlinear convergence."},{q:"What property does the PSB update lack that is often critical for efficient minimization?",a:"It does not guarantee that $\\mathbf{A}^{(k)}$ remains positive definite."},{q:"Concept: Positive Definite Matrix Construction",a:"A matrix $\\mathbf{A}$ is positive definite if it can be written as $\\mathbf{M}\\mathbf{M}^T$ where $\\mathbf{M}$ is non-singular."},{q:"If $\\mathbf{A}^{(k+1)}$ is positive definite and satisfies the secant equation, what inequality must hold between $\\mathbf{y}^{(k)}$ and $\\mathbf{s}^{(k)}$?",a:"$(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$"},{q:"The BFGS update is named after which four researchers?",a:"Broyden, Fletcher, Goldfarb, and Shanno."},{q:"Formula: BFGS update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{\\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{\\mathbf{A}^{(k)}\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}$"},{q:"Which Quasi-Newton update is generally considered the best performing method for approximating the Hessian?",a:"The BFGS update."},{q:"Under what condition will the BFGS update generate a positive definite $\\mathbf{A}^{(k+1)}$ if $\\mathbf{A}^{(k)}$ is positive definite?",a:"The condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ must be satisfied."},{q:"As the iterates $\\mathbf{p}^{(k)}$ approach a point $\\mathbf{p}$ where $f''(\\mathbf{p})$ is positive definite, how does the term $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}$ behave?",a:"It becomes positive, ensuring the BFGS update is well-defined and positive definite."},{q:"To avoid solving linear systems, Quasi-Newton methods often use a recursion for which matrix?",a:"The inverse of the Hessian approximation, $\\mathbf{B}^{(k)} = (\\mathbf{A}^{(k)})^{-1}$."},{q:"Formula: Recursive update for the inverse matrix $\\mathbf{B}^{(k+1)}$ in the BFGS method",a:"$\\mathbf{B}^{(k+1)} = \\mathbf{B}^{(k)} + (1 + \\frac{(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} \\mathbf{y}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}) \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{\\mathbf{s}^{(k)}(\\mathbf{y}^{(k)})^T \\mathbf{B}^{(k)} + \\mathbf{B}^{(k)}\\mathbf{y}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}}$"},{q:"When using the inverse Hessian approximation $\\mathbf{B}^{(k)}$, how is the step vector $\\mathbf{s}^{(k)}$ calculated?",a:"$\\mathbf{s}^{(k)} = -\\mathbf{B}^{(k)} f'(\\mathbf{p}^{(k)})$"},{q:"What does the acronym 'DFP' stand for in Quasi-Newton methods?",a:"Davidon-Fletcher-Powell."},{q:"How does the starting point for the DFP derivation differ from the BFGS derivation?",a:"DFP starts from the inverse secant equation $(\\mathbf{M}^{(k+1)})^{-1} \\mathbf{y}^{(k)} = \\mathbf{v}^{(k)}$."},{q:"Formula: DFP update for the Hessian approximation $\\mathbf{A}^{(k+1)}$",a:"$\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{y}^{(k)})^T + \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}} - \\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}}{((\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)})^2} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T$"},{q:"Formula: Recursive update for the inverse matrix $(\\mathbf{A}^{(k+1)})^{-1}$ in the DFP method",a:"$(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} + \\frac{\\mathbf{s}^{(k)}(\\mathbf{s}^{(k)})^T}{(\\mathbf{s}^{(k)})^T \\mathbf{y}^{(k)}} - \\frac{(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{y}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"},{q:"What is a recommended choice for the initial matrix $\\mathbf{A}^{(0)}$ in BFGS or DFP iterations?",a:"The exact Hessian $f''(\\mathbf{p}^{(0)})$ or its numerical difference approximation."},{q:"Which two Quasi-Newton methods mentioned in the text exhibit similar rapid convergence speeds in the provided examples?",a:"The BFGS and DFP updates."},{q:"The problem of finding $\\mathbf{A}^{(k+1)}$ that satisfies $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ is known as solving the _____ equation.",a:"Secant"},{q:"Cloze: In the BFGS update, if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ is not met, the new matrix $\\mathbf{A}^{(k+1)}$ is only guaranteed to be _____.",a:"Positive semidefinite"},{q:"Why is it important for $\\mathbf{A}^{(k)}$ to be positive definite during minimization?",a:"To ensure the local quadratic approximation $g(\\mathbf{x})$ has a unique minimum."},{q:"Process: In Quasi-Newton methods, the step from $\\mathbf{p}^{(k)}$ to $\\mathbf{p}^{(k+1)}$ is determined by solving what linear system?",a:"$\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -f'(\\mathbf{p}^{(k)})$"},{q:"According to the text, what is the main advantage of Quasi-Newton methods over the classical Newton's method?",a:"They do not require the computation of the exact Hessian matrix at each step."},{q:"Term: Frobenius Norm",a:"Definition: A matrix norm defined as the square root of the sum of the squares of all matrix elements, used to find the 'closest' symmetric matrix."},{q:"In the derivation of the BFGS update, the matrix $\\mathbf{M}^{(k+1)}$ is chosen to satisfy $\\mathbf{M}^{(k+1)}\\mathbf{z} = \\mathbf{M}^{(k)}\\mathbf{z}$ for all vectors $\\mathbf{z}$ that meet what geometric condition?",a:"$\\mathbf{z}$ is orthogonal to $\\mathbf{v}^{(k)}$ ($\\mathbf{z} \\perp \\mathbf{v}^{(k)}$)."},{q:"Formula: Numerical approximation of the second partial derivative $a_{ij}^{(k)}$",a:"$a_{ij}^{(k)} = \\frac{1}{h^2}(f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)} + h\\mathbf{e}^{(j)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(i)}) - f(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) + f(\\mathbf{p}^{(k)}))$"},{q:"The derivation of the DFP update is considered analogous to the derivation of which other update?",a:"The BFGS update."},{q:"For the BFGS update, what is the relationship between the iterates $\\mathbf{p}^{(k)}$ and the target minimum $\\mathbf{p}$ to guarantee existence of $\\varepsilon$ and $\\delta$ for convergence?",a:"$\\mathbf{p}^{(0)}$ must be sufficiently close to $\\mathbf{p}$ and $\\mathbf{A}^{(0)}$ sufficiently close to $f''(\\mathbf{p})$."},{q:"Cloze: The matrix $\\mathbf{M}^{(k+1)}$ in the BFGS derivation is proven to be _____ if the condition $(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)} > 0$ holds.",a:"Invertible"},{q:"True or False: The PSB update formula generates a symmetric matrix even if the initial matrix $\\mathbf{A}^{(k)}$ was not symmetric.",a:"False (The derivation assumes $\\mathbf{A}^{(k)}$ is symmetric to produce a symmetric $\\mathbf{A}^{(k+1)}$)."},{q:"In the context of the BFGS inverse update, what does the matrix $\\mathbf{B}^{(k)}$ represent?",a:"The approximation of the inverse Hessian, $(\\mathbf{A}^{(k)})^{-1}$."},{q:"The variable $\\alpha^2$ in the BFGS derivation is defined as the ratio of which two scalar products?",a:"$\\frac{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}}{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}$"},{q:"Which update formula was historically established first: BFGS or DFP?",a:"DFP (Davidon 1959, Fletcher and Powell 1963; BFGS was 1970)."},{q:"How many function evaluations are needed for the gradient numerical approximation $v_i^{(k)}$ alone?",a:"$n$ evaluations (plus one at the base point)."},{q:"What is the primary motivation for the 'Correction Iteration' that leads to the PSB update?",a:"To find a matrix that is both symmetric and satisfies the secant equation."},{q:"Does the BFGS update require the matrix $\\mathbf{M}^{(k)}$ to be lower triangular?",a:"No, it only requires $\\mathbf{M}^{(k)}$ to be invertible."},{q:"In the example tables, what does the column labeled $\\frac{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_2}{\\|\\mathbf{p}^{(k-1)} - \\mathbf{p}\\|_2}$ represent?",a:"The ratio of consecutive errors, used to observe the convergence rate."},{q:"Concept: Secant Equation consistency",a:"If $\\mathbf{A}^{(k+1)}$ satisfies the secant equation, then $\\mathbf{s}^{(k)}$ is an eigenvector of $(\\mathbf{A}^{(k+1)})^{-1} \\mathbf{A}^{(k+1)}$ with eigenvalue 1."},{q:"Formula: The value $\\mathbf{v}^{(k)}$ used to construct the BFGS update $\\mathbf{M}^{(k+1)}$",a:"$\\mathbf{v}^{(k)} = (\\frac{(\\mathbf{y}^{(k)})^T \\mathbf{s}^{(k)}}{(\\mathbf{s}^{(k)})^T \\mathbf{A}^{(k)}\\mathbf{s}^{(k)}})^{1/2} (\\mathbf{M}^{(k)})^T \\mathbf{s}^{(k)}$"}]};function Ie({deck:e}){const{t:n,lang:a}=z(),i=Ne[e]??[],[s,r]=x.useState(null);return i.length?t.jsxs("div",{className:"deck",children:[t.jsx("h3",{children:n({en:"Glossary",hu:"Fogalomtár"})}),t.jsx("div",{className:"deck-list",children:i.map((o,f)=>{const m=s===f;return t.jsxs("button",{className:"deck-item",onClick:()=>r(m?null:f),children:[t.jsxs("div",{className:"deck-item__head",children:[t.jsx("strong",{children:t.jsx(ae,{markdown:o.term[a]})}),t.jsx("span",{children:m?"−":"+"})]}),m&&t.jsx("div",{className:"deck-item__body",children:t.jsx(ae,{markdown:o.def[a]})})]},f)})})]}):null}const re=e=>Array.from({length:e},(n,a)=>a);function Pe(e){const n=re(e);for(let a=n.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[n[a],n[i]]=[n[i],n[a]]}return n}function Fe({deck:e}){const{t:n}=z(),a=Se[e]??[],[i,s]=x.useState(()=>re(a.length)),[r,o]=x.useState(0),[f,m]=x.useState(!1),h=x.useMemo(()=>a[i[r]],[a,i,r]);if(!a.length)return null;const d=l=>{m(!1),o($=>($+l+a.length)%a.length)};return t.jsxs("div",{className:"deck",children:[t.jsxs("div",{className:"deck__bar",children:[t.jsx("h3",{children:n({en:"Flashcards",hu:"Tanulókártyák"})}),t.jsxs("div",{className:"deck__ctrls",children:[t.jsxs("span",{className:"deck__count",children:[r+1," / ",a.length]}),t.jsx("button",{className:"btn",onClick:()=>{s(Pe(a.length)),o(0),m(!1)},children:n({en:"🔀 Shuffle",hu:"🔀 Keverés"})}),t.jsx("button",{className:"btn",onClick:()=>{s(re(a.length)),o(0),m(!1)},children:n({en:"Reset",hu:"Eredeti"})})]})]}),t.jsxs("button",{className:"deck-card",onClick:()=>m(l=>!l),children:[t.jsx("div",{className:"deck-card__tag",children:n(f?{en:"Answer",hu:"Válasz"}:{en:"Question",hu:"Kérdés"})}),t.jsx(ae,{markdown:f?h.a:h.q})]}),t.jsxs("div",{className:"deck__nav",children:[t.jsx("button",{className:"btn",onClick:()=>d(-1),children:n({en:"‹ Prev",hu:"‹ Előző"})}),t.jsx("button",{className:"btn btn--primary",onClick:()=>m(l=>!l),children:n(f?{en:"Show question",hu:"Kérdés"}:{en:"Show answer",hu:"Válasz"})}),t.jsx("button",{className:"btn",onClick:()=>d(1),children:n({en:"Next ›",hu:"Következő ›"})})]})]})}const Be=`## 8.1. Review of Calculus

**Theorem 8.1.** *Let $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\\mathbf{a} \\in \\mathbb{R}^n$, then $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ holds for all $i = 1, \\ldots, n$.*

*If $f \\in C^2$ and $f'(\\mathbf{a}) = \\mathbf{0}$ for some $\\mathbf{a} \\in \\mathbb{R}^n$, moreover, the Hessian matrix $f''(\\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\\mathbf{a}$.*

For two-variable functions we have the following special case of the previous result.

**Theorem 8.2.** *Let $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*holds.*

*On the other hand, if relation (8.1) holds at a point $(a, b)$, and*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0,$$

*then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*
`,Ve=`## 8.1. Analízis előismeretek

**8.1. tétel.** *Legyen $f\\colon \\mathbb{R}^n \\to \\mathbb{R}$ parciálisan differenciálható minden változója szerint. Ekkor ha $f$-nek létezik lokális szélsőértéke az $\\mathbf{a}$ pontban, akkor $\\frac{\\partial f(\\mathbf{a})}{\\partial x_i} = 0$ teljesül minden $i = 1, \\ldots, n$-re.*

*Ha $f \\in C^2$, és valamely $\\mathbf{a}$ pontban $f'(\\mathbf{a}) = \\mathbf{0}$, továbbá az $f''(\\mathbf{a})$ Hesse-mátrix pozitív (negatív) definit, akkor $f$-nek lokális minimuma (maximuma) van $\\mathbf{a}$-ban.*

Kétváltozós függvényekre az előbbi tétel speciális esetén kapjuk:

**8.2. tétel.** *Legyen $f\\colon \\mathbb{R}^2 \\to \\mathbb{R}$, $f \\in C^2$. Ekkor ha $f$-nek létezik lokális szélsőértéke az $(a, b)$ pontban, akkor*

$$\\frac{\\partial f}{\\partial x}(a, b) = 0, \\qquad \\frac{\\partial f}{\\partial y}(a, b) = 0 \\tag{8.1}$$

*teljesül.*

*Fordítva, ha valamely $(a, b)$-re (8.1) teljesül, továbbá*

$$D(a, b) := \\frac{\\partial^2 f}{\\partial x^2}(a, b) \\cdot \\frac{\\partial^2 f}{\\partial y^2}(a, b) - \\left( \\frac{\\partial^2 f}{\\partial x\\, \\partial y}(a, b) \\right)^2 > 0$$

*akkor $f$-nek létezik lokális szélsőértéke $(a, b)$-ben, mégpedig lokális maximuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) < 0$ ill. lokális minimuma, ha $\\frac{\\partial^2 f}{\\partial x^2}(a, b) > 0$. Ha $D(a, b) < 0$, akkor $f$-nek nincs szélsőértéke $(a, b)$-ben.*
`,De=`## 8.2. Golden Section Search Method

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
`,Oe=`## 8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel

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
`,Ke=`## 8.6. Newton's Method for Minimization

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

`,Ye=`## 8.7. Kvázi-Newton módszerek

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

`,Je={calculus:{en:Be,hu:Ve},golden:{en:De,hu:Ee},simplex:{en:We,hu:Re},gradient:{en:Ge,hu:Ce},linsys:{en:Le,hu:Oe},newton:{en:Ke,hu:Ue},quasinewton:{en:Qe,hu:Ye}};function Ze(e,n){var a;return((a=Je[e])==null?void 0:a[n])??""}const Xe=`#include <vector>
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
`,ft=`(* BFGS quasi-Newton minimization with backtracking (Armijo) line search. *)
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
`,mt=`#include <vector>
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
`,lt=`package main

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
`,ct=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
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
`,bt=`function [x, k] = broyden(f, grad, x0, tol, max_iter)
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
`,pt=`import numpy as np


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
`,$t=`# Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
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
`,gt=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
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
`,ut=`(* Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form). *)
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
`,xt=`#include <vector>
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
`,kt=`program dfp_demo
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
`,_t=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
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
`,zt=`function [x, k] = dfp(f, grad, x0, tol, max_iter)
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
`,Tt=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
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
`,At=`(* DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form). *)
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
`,Pt=`import math


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
`,Ft=`# Golden-section search for the minimum of a unimodal f on [a, b].
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
`,Vt=`goldenSection[f_, a0_, b0_, tol_ : 10^-8] := Module[{a = a0, b = b0, g, c, d, fc, fd},
   g = (Sqrt[5] - 1)/2;
   c = b - g (b - a); d = a + g (b - a); fc = f[c]; fd = f[d];
   While[b - a > tol,
    If[fc < fd, b = d; d = c; fd = fc; c = b - g (b - a); fc = f[c],
       a = c; c = d; fc = fd; d = a + g (b - a); fd = f[d]]];
   (a + b)/2];
Print[goldenSection[(#-2)^2 + 1 &, 0., 5.]]
`,Dt=`#include <vector>
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
`,Ot=`# Gradient descent with constant step size alpha.
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
`,Kt=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
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
`,Yt=`program newton_min_demo
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
`,Jt=`package main

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
`,fn=`package main

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
`,mn=`using LinearAlgebra
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
`,ln=`function [x, k] = psb(f, grad, x0, tol, max_iter)
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
`,cn=`# PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
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
`,bn=`fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
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
`,pn=`(* PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form). *)
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
`,$n=`#include <vector>
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
`,gn=`program simplex_basic_demo
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
`,un=`package main

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
`,xn=`using LinearAlgebra
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
`,kn=`const dist = (a, b) => Math.sqrt(a.reduce((s, x, i) => s + (x - b[i]) ** 2, 0));

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
`,_n=`# Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
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
`,zn=`fn dist(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| (x - y) * (x - y)).sum::<f64>().sqrt() }

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
`,Tn=`program simplex_demo
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
`,An=`package main

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
`,Pn=`(* Nelder-Mead downhill simplex minimization. *)
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
`,Fn=`#include <vector>
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
`,Vn=`package main

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
`,Dn=`using LinearAlgebra
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
`,On=`#include <vector>
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
`,Kn=`program steepest_demo
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
`,Yn=`const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
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
`,Jn=`function [x, k] = steepest_descent(f, grad, x0, tol, max_iter)
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
`,na=Object.assign({"./bfgs.cpp":Xe,"./bfgs.f90":et,"./bfgs.go":tt,"./bfgs.jl":nt,"./bfgs.js":at,"./bfgs.m":it,"./bfgs.py":st,"./bfgs.r":rt,"./bfgs.rs":ot,"./bfgs.wl":ft,"./broyden.cpp":mt,"./broyden.f90":ht,"./broyden.go":lt,"./broyden.jl":dt,"./broyden.js":ct,"./broyden.m":bt,"./broyden.py":pt,"./broyden.r":$t,"./broyden.rs":gt,"./broyden.wl":ut,"./dfp.cpp":xt,"./dfp.f90":kt,"./dfp.go":vt,"./dfp.jl":yt,"./dfp.js":_t,"./dfp.m":zt,"./dfp.py":wt,"./dfp.r":jt,"./dfp.rs":Tt,"./dfp.wl":At,"./golden.cpp":qt,"./golden.f90":Ht,"./golden.go":Mt,"./golden.jl":Nt,"./golden.js":St,"./golden.m":It,"./golden.py":Pt,"./golden.r":Ft,"./golden.rs":Bt,"./golden.wl":Vt,"./gradient.cpp":Dt,"./gradient.f90":Et,"./gradient.go":Wt,"./gradient.jl":Rt,"./gradient.js":Gt,"./gradient.m":Ct,"./gradient.py":Lt,"./gradient.r":Ot,"./gradient.rs":Kt,"./gradient.wl":Ut,"./newton.cpp":Qt,"./newton.f90":Yt,"./newton.go":Jt,"./newton.jl":Zt,"./newton.js":Xt,"./newton.m":en,"./newton.py":tn,"./newton.r":nn,"./newton.rs":an,"./newton.wl":sn,"./psb.cpp":rn,"./psb.f90":on,"./psb.go":fn,"./psb.jl":mn,"./psb.js":hn,"./psb.m":ln,"./psb.py":dn,"./psb.r":cn,"./psb.rs":bn,"./psb.wl":pn,"./simplex-basic.cpp":$n,"./simplex-basic.f90":gn,"./simplex-basic.go":un,"./simplex-basic.jl":xn,"./simplex-basic.js":kn,"./simplex-basic.m":vn,"./simplex-basic.py":yn,"./simplex-basic.r":_n,"./simplex-basic.rs":zn,"./simplex-basic.wl":wn,"./simplex.cpp":jn,"./simplex.f90":Tn,"./simplex.go":An,"./simplex.jl":qn,"./simplex.js":Hn,"./simplex.m":Mn,"./simplex.py":Nn,"./simplex.r":Sn,"./simplex.rs":In,"./simplex.wl":Pn,"./sr1.cpp":Fn,"./sr1.f90":Bn,"./sr1.go":Vn,"./sr1.jl":Dn,"./sr1.js":En,"./sr1.m":Wn,"./sr1.py":Rn,"./sr1.r":Gn,"./sr1.rs":Cn,"./sr1.wl":Ln,"./steepest.cpp":On,"./steepest.f90":Kn,"./steepest.go":Un,"./steepest.jl":Qn,"./steepest.js":Yn,"./steepest.m":Jn,"./steepest.py":Zn,"./steepest.r":Xn,"./steepest.rs":ea,"./steepest.wl":ta}),M=(e,n)=>na[`./${e}.${n}`],aa={golden:{en:"Golden-section search",hu:"Aranymetszéses keresés"},simplex:{en:"Nelder–Mead simplex",hu:"Nelder–Mead-szimplex"},"simplex-basic":{en:"Basic simplex method (fixed shape)",hu:"Alap szimplex-módszer (rögzített alak)"},gradient:{en:"Gradient descent (constant step)",hu:"Gradiens-módszer (állandó lépés)"},newton:{en:"Newton minimization",hu:"Newton-minimalizálás"},steepest:{en:"Steepest descent (line search)",hu:"Legmeredekebb csökkenés (vonalmenti keresés)"},bfgs:{en:"BFGS quasi-Newton",hu:"BFGS kvázi-Newton"},dfp:{en:"DFP quasi-Newton (Davidon–Fletcher–Powell)",hu:"DFP kvázi-Newton (Davidon–Fletcher–Powell)"},sr1:{en:"SR1 quasi-Newton (symmetric rank-one)",hu:"SR1 kvázi-Newton (szimmetrikus rang-egy)"},psb:{en:"PSB quasi-Newton (Powell-symmetric-Broyden)",hu:"PSB kvázi-Newton (Powell-szimmetrikus-Broyden)"},broyden:{en:"Broyden's method (optimization, rank-one)",hu:"Broyden-módszer (optimalizálás, rang-egy)"}},ia=e=>({id:e,caption:aa[e],snippets:{matlab:M(e,"m"),python:M(e,"py"),cpp:M(e,"cpp"),julia:M(e,"jl"),rust:M(e,"rs"),fortran:M(e,"f90"),wolfram:M(e,"wl"),javascript:M(e,"js"),go:M(e,"go"),r:M(e,"r")}}),sa={golden:["golden"],simplex:["simplex","simplex-basic"],gradient:["gradient"],newton:["newton"],linsys:["steepest"],quasinewton:["bfgs","dfp","sr1","psb","broyden"]};function ra(e){return(sa[e]??[]).map(ia)}const oa={calculus:[{id:"q-calculus-1",prompt:{en:"Let f : ℝⁿ → ℝ be differentiable with a local extremum at a point a. What condition must hold at a?",hu:"Legyen f : ℝⁿ → ℝ differenciálható, lokális szélsőértékkel egy a pontban. Milyen feltételnek kell teljesülnie a-ban?"},options:[{en:"The Hessian is negative definite at a",hu:"A Hesse-mátrix negatív definit a-ban"},{en:"The gradient is undefined at a",hu:"A gradiens nem definiált a-ban"},{en:"All partial derivatives ∂f/∂xᵢ(a) = 0",hu:"Minden parciális derivált ∂f/∂xᵢ(a) = 0"},{en:"f''(a) = 0",hu:"f''(a) = 0"}],answer:2,explanation:{en:"At an interior local extremum the gradient vanishes, i.e. every first partial derivative is zero.",hu:"Egy belső lokális szélsőértékben a gradiens eltűnik, azaz minden első parciális derivált nulla."}},{id:"q-calculus-2",prompt:{en:"What type of matrix is the Hessian matrix?",hu:"Milyen típusú mátrix a Hesse-mátrix?"},options:[{en:"A matrix of function values",hu:"Függvényértékek mátrixa"},{en:"A matrix of first partial derivatives",hu:"Első parciális deriváltak mátrixa"},{en:"A matrix of tangent slopes",hu:"Érintőmeredekségek mátrixa"},{en:"A matrix of second partial derivatives",hu:"Második parciális deriváltak mátrixa"}],answer:3,explanation:{en:"The Hessian collects all second-order partial derivatives ∂²f/∂xᵢ∂xⱼ.",hu:"A Hesse-mátrix az összes másodrendű parciális deriváltat ∂²f/∂xᵢ∂xⱼ tartalmazza."}},{id:"q-calculus-3",prompt:{en:"Which of the following best describes the entries of the Hessian matrix?",hu:"Az alábbiak közül melyik írja le legjobban a Hesse-mátrix elemeit?"},options:[{en:"∂²f/∂xᵢ∂xⱼ",hu:"∂²f/∂xᵢ∂xⱼ"},{en:"∇f",hu:"∇f"},{en:"∂f/∂xᵢ",hu:"∂f/∂xᵢ"},{en:"f(xᵢ)",hu:"f(xᵢ)"}],answer:0,explanation:{en:"Each entry of the Hessian is a second mixed partial derivative ∂²f/∂xᵢ∂xⱼ.",hu:"A Hesse-mátrix minden eleme egy második vegyes parciális derivált ∂²f/∂xᵢ∂xⱼ."}},{id:"q-calculus-4",prompt:{en:"For a twice continuously differentiable f(x,y) at a critical point (a,b), which indicates a local maximum (D is the Hessian determinant)?",hu:"Egy kétszer folytonosan differenciálható f(x,y)-ra egy (a,b) kritikus pontban melyik jelez lokális maximumot (D a Hesse-determináns)?"},options:[{en:"D(a,b) = 0",hu:"D(a,b) = 0"},{en:"D(a,b) > 0 and ∂²f/∂x²(a,b) > 0",hu:"D(a,b) > 0 és ∂²f/∂x²(a,b) > 0"},{en:"D(a,b) > 0 and ∂²f/∂x²(a,b) < 0",hu:"D(a,b) > 0 és ∂²f/∂x²(a,b) < 0"},{en:"D(a,b) < 0",hu:"D(a,b) < 0"}],answer:2,explanation:{en:"D > 0 with negative second derivative in x means the Hessian is negative definite → local maximum.",hu:"D > 0 negatív x-szerinti második deriválttal azt jelenti, hogy a Hesse-mátrix negatív definit → lokális maximum."}},{id:"q-calculus-5",prompt:{en:"If the determinant D(a,b) < 0 at a critical point (where both first partials vanish), then:",hu:"Ha a D(a,b) determináns < 0 egy kritikus pontban (ahol mindkét első parciális derivált eltűnik), akkor:"},options:[{en:"f has no extremum at (a,b)",hu:"f-nek nincs szélsőértéke (a,b)-ben"},{en:"f has a local minimum at (a,b)",hu:"f-nek lokális minimuma van (a,b)-ben"},{en:"The Hessian is positive definite",hu:"A Hesse-mátrix pozitív definit"},{en:"f has a local maximum at (a,b)",hu:"f-nek lokális maximuma van (a,b)-ben"}],answer:0,explanation:{en:"A negative Hessian determinant indicates a saddle point — no extremum.",hu:"A negatív Hesse-determináns nyeregpontot jelez — nincs szélsőérték."}}],golden:[{id:"q-golden-1",prompt:{en:"If f(x) > f(y) during Golden Section Search (with a < x < y < b), which interval is chosen next?",hu:"Ha f(x) > f(y) az aranymetszéses keresés során (a < x < y < b mellett), melyik intervallumot választjuk a következőként?"},options:[{en:"[a, x]",hu:"[a, x]"},{en:"[a, y]",hu:"[a, y]"},{en:"[x, b]",hu:"[x, b]"},{en:"[y, b]",hu:"[y, b]"}],answer:2,explanation:{en:"A larger value at the left interior point x means the minimum lies to the right, so the bracket becomes [x, b].",hu:"A bal belső x pontban vett nagyobb érték azt jelenti, hogy a minimum jobbra van, így az intervallum [x, b] lesz."}},{id:"q-golden-2",prompt:{en:"What is the formula for the number of steps needed to reach a tolerance ε in Golden Section Search?",hu:"Mi a képlete az ε tűréshatár eléréséhez szükséges lépésszámnak az aranymetszéses keresésben?"},options:[{en:"n = log ε / log 2",hu:"n = log ε / log 2"},{en:"n = (b − a) / ε",hu:"n = (b − a) / ε"},{en:"n = log( ε / (b−a) ) / log r",hu:"n = log( ε / (b−a) ) / log r"},{en:"n = ε / (b − a)",hu:"n = ε / (b − a)"}],answer:2,explanation:{en:"The interval shrinks by factor r each step, so n = log(ε/(b−a)) / log r.",hu:"Az intervallum minden lépésben r tényezővel zsugorodik, így n = log(ε/(b−a)) / log r."}},{id:"q-golden-3",prompt:{en:"What type of function is required for the Golden Section Search to work?",hu:"Milyen típusú függvény szükséges ahhoz, hogy az aranymetszéses keresés működjön?"},options:[{en:"Piecewise function",hu:"Szakaszonkénti függvény"},{en:"Unimodal function",hu:"Unimodális függvény"},{en:"Multivariable function",hu:"Többváltozós függvény"},{en:"Periodic function",hu:"Periodikus függvény"}],answer:1,explanation:{en:"Golden Section Search needs a unimodal function on the interval (one minimum).",hu:"Az aranymetszéses keresés unimodális függvényt igényel az intervallumon (egyetlen minimummal)."}},{id:"q-golden-4",prompt:{en:"Which equation defines the golden ratio r used in the method?",hu:"Melyik egyenlet definiálja a módszerben használt r aranymetszést?"},options:[{en:"r = log(2)",hu:"r = log(2)"},{en:"r² + r − 1 = 0",hu:"r² + r − 1 = 0"},{en:"r² − r + 1 = 0",hu:"r² − r + 1 = 0"},{en:"r² = r + 1",hu:"r² = r + 1"}],answer:1,explanation:{en:"The reduction ratio r = (√5−1)/2 satisfies r² + r − 1 = 0.",hu:"Az r = (√5−1)/2 csökkentési arány teljesíti az r² + r − 1 = 0 egyenletet."}},{id:"q-golden-5",prompt:{en:"What is the golden ratio r used in the method?",hu:"Mi a módszerben használt r aranymetszés értéke?"},options:[{en:"(√5 − 1)/2",hu:"(√5 − 1)/2"},{en:"1/2",hu:"1/2"},{en:"1/3",hu:"1/3"},{en:"(√3 − 1)/2",hu:"(√3 − 1)/2"}],answer:0,explanation:{en:"The golden-section reduction factor is r = (√5 − 1)/2 ≈ 0.618.",hu:"Az aranymetszéses csökkentési tényező r = (√5 − 1)/2 ≈ 0.618."}}],simplex:[{id:"q-simplex-1",prompt:{en:'In the simplex method, which vertex is considered the "worst"?',hu:"A szimplex-módszerben melyik csúcsot tekintjük a „legrosszabbnak”?"},options:[{en:"The one with the largest function value",hu:"A legnagyobb függvényértékűt"},{en:"The midpoint of an edge",hu:"Egy él felezőpontját"},{en:"The one with the smallest function value",hu:"A legkisebb függvényértékűt"},{en:"The center of the simplex",hu:"A szimplex középpontját"}],answer:0,explanation:{en:"When minimizing, the worst vertex has the largest function value.",hu:"Minimalizáláskor a legrosszabb csúcsnak a legnagyobb a függvényértéke."}},{id:"q-simplex-2",prompt:{en:"If the reflected point xᵣ is better than all others, what step is considered in Nelder–Mead?",hu:"Ha a tükrözött xᵣ pont jobb az összes többinél, milyen lépést mérlegel a Nelder–Mead?"},options:[{en:"Expansion",hu:"Tágítás"},{en:"Reflection",hu:"Tükrözés"},{en:"Termination",hu:"Leállás"},{en:"Contraction",hu:"Összehúzás"}],answer:0,explanation:{en:"If reflection produces a new best point, the method tries expansion to go further in that direction.",hu:"Ha a tükrözés új legjobb pontot ad, a módszer tágítással próbál tovább menni abba az irányba."}},{id:"q-simplex-3",prompt:{en:"What is done if the reflected point is worse than the current worst point?",hu:"Mit teszünk, ha a tükrözött pont rosszabb az aktuális legrosszabb pontnál?"},options:[{en:"Shrink the simplex",hu:"Összezsugorítjuk a szimplexet"},{en:"Expand the simplex",hu:"Tágítjuk a szimplexet"},{en:"Stop the iteration",hu:"Leállítjuk az iterációt"},{en:"Use the same simplex",hu:"Ugyanazt a szimplexet használjuk"}],answer:0,explanation:{en:"If even reflection/contraction fails, the simplex shrinks toward the best vertex.",hu:"Ha még a tükrözés/összehúzás is megbukik, a szimplex a legjobb csúcs felé zsugorodik."}},{id:"q-simplex-4",prompt:{en:"Which statement is true about the Nelder–Mead method?",hu:"Melyik állítás igaz a Nelder–Mead-módszerre?"},options:[{en:"It requires second-order derivatives",hu:"Másodrendű deriváltakat igényel"},{en:"It always converges quadratically",hu:"Mindig kvadratikusan konvergál"},{en:"It is limited to linear functions",hu:"Lineáris függvényekre korlátozódik"},{en:"It is a direct search method using only function values",hu:"Csak függvényértékeket használó direkt keresési módszer"}],answer:3,explanation:{en:"Nelder–Mead is a derivative-free direct search using only function evaluations.",hu:"A Nelder–Mead derivált nélküli direkt keresés, amely csak függvénykiértékeléseket használ."}},{id:"q-simplex-5",prompt:{en:"How many vertices does an n-dimensional simplex have?",hu:"Hány csúcsa van egy n-dimenziós szimplexnek?"},options:[{en:"n²",hu:"n²"},{en:"n",hu:"n"},{en:"2n",hu:"2n"},{en:"n + 1",hu:"n + 1"}],answer:3,explanation:{en:"A simplex in ℝⁿ has n + 1 vertices (e.g. a triangle in 2D).",hu:"Egy ℝⁿ-beli szimplexnek n + 1 csúcsa van (pl. egy háromszög 2D-ben)."}}],gradient:[{id:"q-gradient-1",prompt:{en:"What is the goal when using the gradient method?",hu:"Mi a cél a gradiens-módszer használatakor?"},options:[{en:"Find a global maximum",hu:"Globális maximum keresése"},{en:"Estimate the integral",hu:"Az integrál becslése"},{en:"Solve a system of linear equations",hu:"Lineáris egyenletrendszer megoldása"},{en:"Find a local minimum",hu:"Lokális minimum keresése"}],answer:3,explanation:{en:"Steepest descent walks downhill along −∇f to find a local minimum.",hu:"A legmeredekebb csökkenés a −∇f mentén halad lefelé egy lokális minimumért."}},{id:"q-gradient-2",prompt:{en:"Which is a characteristic of the optimal gradient method?",hu:"Mi jellemzi az optimális gradiens-módszert?"},options:[{en:"Always converges in one step",hu:"Mindig egy lépésben konvergál"},{en:"Minimizes f along the negative gradient direction",hu:"Minimalizálja f-et a negatív gradiens irányában"},{en:"Maximizes the directional derivative",hu:"Maximalizálja az iránymenti deriváltat"},{en:"Uses constant step size",hu:"Állandó lépésközt használ"}],answer:1,explanation:{en:"The optimal (exact line-search) gradient method minimizes f along the −∇f direction at each step.",hu:"Az optimális (pontos vonalmenti keresésű) gradiens-módszer minden lépésben minimalizálja f-et a −∇f irányában."}},{id:"q-gradient-3",prompt:{en:"What is the formula for approximating component vᵢ of the gradient using first-order differences?",hu:"Mi a képlete a gradiens vᵢ komponensének elsőrendű differenciákkal való közelítésére?"},options:[{en:"vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)",hu:"vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)"},{en:"vᵢ = ( f(p + h·eᵢ) − f(p) ) / h",hu:"vᵢ = ( f(p + h·eᵢ) − f(p) ) / h"},{en:"vᵢ = ( f(h) − f(0) ) / h",hu:"vᵢ = ( f(h) − f(0) ) / h"},{en:"vᵢ = ∂f/∂xᵢ",hu:"vᵢ = ∂f/∂xᵢ"}],answer:1,explanation:{en:"The forward (first-order) finite difference is ( f(p + h·eᵢ) − f(p) ) / h.",hu:"Az előrehaladó (elsőrendű) véges differencia ( f(p + h·eᵢ) − f(p) ) / h."}},{id:"q-gradient-4",prompt:{en:"What is the optimal step size αₖ used for?",hu:"Mire használjuk az optimális αₖ lépésközt?"},options:[{en:"Maximizing f in the direction of the negative gradient vector",hu:"f maximalizálása a negatív gradiensvektor irányában"},{en:"Matching the gradient with the minimum",hu:"A gradiens illesztése a minimumhoz"},{en:"Calculating the Hessian matrix",hu:"A Hesse-mátrix kiszámítása"},{en:"Jumping to the point on the negative-gradient half-line where f is minimal",hu:"Ugrás a negatív gradiens félegyenes azon pontjába, ahol f minimális"}],answer:3,explanation:{en:"The optimal step size is the line-search minimizer of f along the −∇f half-line.",hu:"Az optimális lépésköz f vonalmenti minimalizálója a −∇f félegyenes mentén."}},{id:"q-gradient-5",prompt:{en:"Which method updates the point using p^(k+1) = p^(k) − αₖ f′(p^(k))?",hu:"Melyik módszer frissíti a pontot a p^(k+1) = p^(k) − αₖ f′(p^(k)) képlettel?"},options:[{en:"Simplex method",hu:"Szimplex-módszer"},{en:"Gradient method",hu:"Gradiens-módszer"},{en:"Newton's method",hu:"Newton-módszer"},{en:"Golden section method",hu:"Aranymetszéses módszer"}],answer:1,explanation:{en:"This is the gradient (steepest-descent) update rule.",hu:"Ez a gradiens (legmeredekebb csökkenés) frissítési szabálya."}}],linsys:[{id:"q-linsys-1",prompt:{en:"When is the gradient method terminated in practice?",hu:"A gyakorlatban mikor állítjuk le a gradiens-módszert?"},options:[{en:"After one iteration",hu:"Egy iteráció után"},{en:"When the determinant is 0",hu:"Amikor a determináns 0"},{en:"When ‖r^(k)‖ is sufficiently small",hu:"Amikor ‖r^(k)‖ elég kicsi"},{en:"After 100 steps",hu:"100 lépés után"}],answer:2,explanation:{en:"Iteration stops when the residual norm ‖r^(k)‖ = ‖b − A p^(k)‖ is small enough.",hu:"Az iteráció leáll, amikor a maradéknorma ‖r^(k)‖ = ‖b − A p^(k)‖ elég kicsi."}},{id:"q-linsys-2",prompt:{en:"What type of convergence is observed in the gradient method for linear systems?",hu:"Milyen konvergencia figyelhető meg a gradiens-módszernél lineáris rendszerekre?"},options:[{en:"Linear",hu:"Lineáris"},{en:"Superlinear",hu:"Szuperlineáris"},{en:"Quadratic",hu:"Kvadratikus"},{en:"Exponential",hu:"Exponenciális"}],answer:0,explanation:{en:"Steepest descent converges linearly, with rate governed by the condition number of A.",hu:"A legmeredekebb csökkenés lineárisan konvergál, A kondíciószáma által meghatározott ütemben."}},{id:"q-linsys-3",prompt:{en:"For symmetric A, what is the gradient of g(x) = ½ xᵀA x − bᵀx + c?",hu:"Szimmetrikus A esetén mi a g(x) = ½ xᵀA x − bᵀx + c gradiense?"},options:[{en:"A",hu:"A"},{en:"A x − b",hu:"A x − b"},{en:"b − A x",hu:"b − A x"},{en:"Aᵀx + b",hu:"Aᵀx + b"}],answer:1,explanation:{en:"For symmetric A, ∇g(x) = A x − b, so minimizing g solves A x = b.",hu:"Szimmetrikus A-ra ∇g(x) = A x − b, így g minimalizálása megoldja az A x = b-t."}},{id:"q-linsys-4",prompt:{en:"What is the iteration formula for updating the solution vector p^(k)?",hu:"Mi a p^(k) megoldásvektor frissítésének iterációs képlete?"},options:[{en:"p^(k+1) = p^(k) + r^(k)",hu:"p^(k+1) = p^(k) + r^(k)"},{en:"p^(k+1) = p^(k) − αₖ A r^(k)",hu:"p^(k+1) = p^(k) − αₖ A r^(k)"},{en:"p^(k+1) = A⁻¹ b",hu:"p^(k+1) = A⁻¹ b"},{en:"p^(k+1) = p^(k) + αₖ r^(k)",hu:"p^(k+1) = p^(k) + αₖ r^(k)"}],answer:3,explanation:{en:"The update moves along the residual direction: p^(k+1) = p^(k) + αₖ r^(k).",hu:"A frissítés a maradék irányában mozog: p^(k+1) = p^(k) + αₖ r^(k)."}},{id:"q-linsys-5",prompt:{en:"How is the step size αₖ calculated?",hu:"Hogyan számoljuk az αₖ lépésközt?"},options:[{en:"αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )",hu:"αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )"},{en:"αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )",hu:"αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )"},{en:"αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )",hu:"αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )"},{en:"αₖ = 1 / ‖r^(k)‖",hu:"αₖ = 1 / ‖r^(k)‖"}],answer:2,explanation:{en:"Exact line search along the residual gives αₖ = (rᵀr) / (rᵀA r).",hu:"A maradék menti pontos vonalmenti keresés αₖ = (rᵀr) / (rᵀA r)-t ad."}}],newton:[{id:"q-newton-1",prompt:{en:"What is the benefit of Newton's method if f''(p) is positive definite?",hu:"Mi a Newton-módszer előnye, ha f''(p) pozitív definit?"},options:[{en:"The method diverges",hu:"A módszer divergál"},{en:"The method converges quadratically",hu:"A módszer kvadratikusan konvergál"},{en:"The Hessian can be ignored",hu:"A Hesse-mátrix figyelmen kívül hagyható"},{en:"The gradient becomes constant",hu:"A gradiens állandóvá válik"}],answer:1,explanation:{en:"Near a minimizer with positive-definite Hessian, Newton converges quadratically.",hu:"Egy pozitív definit Hesse-mátrixú minimum közelében a Newton kvadratikusan konvergál."}},{id:"q-newton-2",prompt:{en:"What type of function is well-suited for Newton's method?",hu:"Milyen típusú függvény alkalmas jól a Newton-módszerhez?"},options:[{en:"Piecewise constant",hu:"Szakaszonként állandó"},{en:"Twice continuously differentiable",hu:"Kétszer folytonosan differenciálható"},{en:"Linear",hu:"Lineáris"},{en:"Discontinuous",hu:"Szakadásos"}],answer:1,explanation:{en:"Newton's method needs gradient and Hessian, hence f must be twice continuously differentiable.",hu:"A Newton-módszernek gradiens és Hesse-mátrix kell, ezért f-nek kétszer folytonosan differenciálhatónak kell lennie."}},{id:"q-newton-3",prompt:{en:"Why must the Hessian be positive definite for minimization?",hu:"Miért kell a Hesse-mátrixnak pozitív definitnek lennie a minimalizáláshoz?"},options:[{en:"To ensure a maximum is found",hu:"Hogy maximumot találjunk"},{en:"To invert the gradient",hu:"A gradiens invertálásához"},{en:"To guarantee no solution",hu:"Hogy ne legyen megoldás"},{en:"To ensure convergence",hu:"A konvergencia biztosításához"}],answer:3,explanation:{en:"A positive-definite Hessian guarantees a descent direction and convergence to a minimum.",hu:"A pozitív definit Hesse-mátrix garantál egy csökkenő irányt és a minimumhoz való konvergenciát."}},{id:"q-newton-4",prompt:{en:"What is the main idea of Newton's method for minimization?",hu:"Mi a Newton-módszer fő gondolata a minimalizálásban?"},options:[{en:"Use the midpoint rule to locate the minimum",hu:"A középponti szabály használata a minimum megtalálására"},{en:"Approximate the function using a linear polynomial",hu:"A függvény közelítése lineáris polinommal"},{en:"Estimate the gradient using finite differences",hu:"A gradiens becslése véges differenciákkal"},{en:"Use the second-order Taylor polynomial for optimization",hu:"A másodrendű Taylor-polinom használata az optimalizáláshoz"}],answer:3,explanation:{en:"Newton minimizes the local second-order Taylor model of f at each step.",hu:"A Newton minden lépésben f lokális másodrendű Taylor-modelljét minimalizálja."}},{id:"q-newton-5",prompt:{en:"What is the update formula in Newton's method for minimization?",hu:"Mi a frissítési képlet a minimalizálásra szolgáló Newton-módszerben?"},options:[{en:"xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)",hu:"xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)"},{en:"xₖ₊₁ = xₖ − f'(xₖ)",hu:"xₖ₊₁ = xₖ − f'(xₖ)"},{en:"xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)",hu:"xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)"},{en:"xₖ₊₁ = xₖ + αₖ f'(xₖ)",hu:"xₖ₊₁ = xₖ + αₖ f'(xₖ)"}],answer:2,explanation:{en:"The multivariate Newton step is xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ).",hu:"A többváltozós Newton-lépés xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ)."}}],quasinewton:[{id:"q-quasinewton-1",prompt:{en:"What is the Broyden update used for in quasi-Newton methods?",hu:"Mire használjuk a Broyden-frissítést a kvázi-Newton módszerekben?"},options:[{en:"To update the approximate Hessian",hu:"A közelítő Hesse-mátrix frissítésére"},{en:"To estimate the gradient",hu:"A gradiens becslésére"},{en:"To normalize the gradient",hu:"A gradiens normálására"},{en:"To solve linear systems",hu:"Lineáris rendszerek megoldására"}],answer:0,explanation:{en:"Quasi-Newton updates (such as Broyden) refine the approximate Hessian using gradient differences.",hu:"A kvázi-Newton frissítések (mint a Broyden) gradienskülönbségekkel finomítják a közelítő Hesse-mátrixot."}},{id:"q-quasinewton-2",prompt:{en:"Which function is used to approximate the objective in quasi-Newton methods?",hu:"Milyen függvénnyel közelítjük a célfüggvényt a kvázi-Newton módszerekben?"},options:[{en:"Linear function",hu:"Lineáris függvénnyel"},{en:"Quadratic function using approximate gradient and Hessian",hu:"Kvadratikus függvénnyel, közelítő gradienssel és Hesse-mátrixszal"},{en:"Exponential approximation",hu:"Exponenciális közelítéssel"},{en:"First-order Taylor polynomial",hu:"Elsőrendű Taylor-polinommal"}],answer:1,explanation:{en:"Quasi-Newton methods build a local quadratic model with an approximate Hessian.",hu:"A kvázi-Newton módszerek lokális kvadratikus modellt építenek közelítő Hesse-mátrixszal."}},{id:"q-quasinewton-3",prompt:{en:"What is a limitation of the Broyden update?",hu:"Mi a Broyden-frissítés egyik korlátja?"},options:[{en:"It is only for linear problems",hu:"Csak lineáris feladatokra való"},{en:"It does not converge",hu:"Nem konvergál"},{en:"It does not preserve symmetry",hu:"Nem őrzi meg a szimmetriát"},{en:"It requires the exact Hessian",hu:"A pontos Hesse-mátrixot igényli"}],answer:2,explanation:{en:"Broyden's general update does not keep the Hessian approximation symmetric (motivating PSB/BFGS).",hu:"A Broyden általános frissítése nem tartja szimmetrikusan a Hesse-közelítést (ez motiválja a PSB/BFGS-t)."}},{id:"q-quasinewton-4",prompt:{en:"What type of convergence can be expected from the PSB update method?",hu:"Milyen konvergencia várható a PSB-frissítési módszertől?"},options:[{en:"Quadratic",hu:"Kvadratikus"},{en:"Superlinear",hu:"Szuperlineáris"},{en:"Linear",hu:"Lineáris"},{en:"No convergence",hu:"Nincs konvergencia"}],answer:1,explanation:{en:"Quasi-Newton methods such as PSB attain superlinear convergence.",hu:"A kvázi-Newton módszerek, mint a PSB, szuperlineáris konvergenciát érnek el."}},{id:"q-quasinewton-5",prompt:{en:"Which form ensures that the updated matrix remains positive definite?",hu:"Melyik alak biztosítja, hogy a frissített mátrix pozitív definit maradjon?"},options:[{en:"Identity approximation",hu:"Egységmátrix-közelítés"},{en:"Cholesky form A = L Lᵀ",hu:"Cholesky-alak A = L Lᵀ"},{en:"Diagonal form",hu:"Diagonális alak"},{en:"General symmetric form",hu:"Általános szimmetrikus alak"}],answer:1,explanation:{en:"Maintaining the factor in Cholesky form A = L Lᵀ keeps the approximation positive definite.",hu:"A faktor Cholesky-alakban (A = L Lᵀ) tartása megőrzi a közelítés pozitív definitségét."}}]};function fa(e){return oa[e]??[]}function O({meta:e,children:n}){const{t:a,lang:i}=z(),s=Ze(e.id,i),r=ra(e.id),o=fa(e.id);return t.jsx("section",{className:"section",id:e.id,children:t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{className:"section__head",children:[t.jsxs("span",{className:"eyebrow",children:[a({en:"Section",hu:"Szakasz"})," ",e.no]}),t.jsx("h2",{children:a(e.title)}),t.jsx("p",{children:a(e.blurb)})]}),n,s&&t.jsxs("details",{className:"section__theory",open:!0,children:[t.jsx("summary",{children:a({en:"Full theory",hu:"Teljes elmélet"})}),t.jsx(ae,{markdown:s})]}),r.map(f=>t.jsx(Te,{snippets:f.snippets,caption:f.caption},f.id)),t.jsx(Ie,{deck:e.id}),t.jsx(Fe,{deck:e.id}),o.length>0&&t.jsx(Ae,{questions:o})]})})}function ma(e){const[n,a]=x.useState(0),i=x.useRef([]);return x.useEffect(()=>{i.current=i.current.slice(0,e);const r=new IntersectionObserver(o=>{let f=null;for(const m of o){if(!m.isIntersecting)continue;const h=Number(m.target.dataset.step);(!f||m.intersectionRatio>f.ratio)&&(f={idx:h,ratio:m.intersectionRatio})}f&&a(f.idx)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return i.current.forEach(o=>o&&r.observe(o)),()=>r.disconnect()},[e]),{active:n,register:r=>o=>{i.current[r]=o}}}function K({steps:e,graphic:n}){const{active:a,register:i}=ma(e.length);return t.jsxs("div",{className:"scrolly",children:[t.jsx("div",{className:"scrolly__sticky",children:t.jsx("div",{className:"scrolly__graphic",children:n(a)})}),t.jsx("div",{className:"scrolly__steps",children:e.map((s,r)=>t.jsxs("article",{ref:i(r),"data-step":r,className:`step${r===a?" is-active":""}`,children:[s.kicker&&t.jsx("div",{className:"step__num",children:s.kicker}),s.title&&t.jsx("h3",{children:s.title}),t.jsx("div",{children:s.body})]},r))})]})}function ha(e,n,a=130,i=130){const s=new Float64Array(a*i);let r=1/0,o=-1/0;for(let f=0;f<i;f++){const m=n.ymin+(n.ymax-n.ymin)*f/(i-1);for(let h=0;h<a;h++){const d=n.xmin+(n.xmax-n.xmin)*h/(a-1),l=e(d,m);s[f*a+h]=l,l<r&&(r=l),l>o&&(o=l)}}return{nx:a,ny:i,...n,vals:s,vmin:r,vmax:o}}function la(e,n=14){const a=e.vmin,i=e.vmax;if(!(i>a))return[];const s=[];for(let r=1;r<=n;r++){const o=r/(n+1);s.push(a+(i-a)*o*o)}return s}function da(e,n){const a=[],{nx:i,ny:s,vals:r}=e,o=(e.xmax-e.xmin)/(i-1),f=(e.ymax-e.ymin)/(s-1),m=l=>e.xmin+l*o,h=l=>e.ymin+l*f,d=(l,$)=>(n-l)/($-l);for(let l=0;l<s-1;l++)for(let $=0;$<i-1;$++){const b=r[l*i+$],k=r[l*i+$+1],c=r[(l+1)*i+$+1],p=r[(l+1)*i+$];let u=0;if(b>n&&(u|=1),k>n&&(u|=2),c>n&&(u|=4),p>n&&(u|=8),u===0||u===15)continue;const g=m($),y=m($+1),v=h(l),q=h(l+1),V=()=>({x:g+d(b,k)*o,y:v}),D=()=>({x:y,y:v+d(k,c)*f}),R=()=>({x:g+d(p,c)*o,y:q}),G=()=>({x:g,y:v+d(b,p)*f}),H=(be,pe)=>a.push({x1:be.x,y1:be.y,x2:pe.x,y2:pe.y});switch(u){case 1:case 14:H(G(),V());break;case 2:case 13:H(V(),D());break;case 3:case 12:H(G(),D());break;case 4:case 11:H(D(),R());break;case 5:H(G(),R()),H(V(),D());break;case 6:case 9:H(V(),R());break;case 7:case 8:H(G(),R());break;case 10:H(G(),V()),H(D(),R());break}}return a}function $e(e,n,a,i=26){return{...e,w:n,h:a,pad:i}}function C(e,n,a){const i=e.pad+(n-e.xmin)/(e.xmax-e.xmin)*(e.w-2*e.pad),s=e.h-e.pad-(a-e.ymin)/(e.ymax-e.ymin)*(e.h-2*e.pad);return[i,s]}function ca(e,n,a){const i=e.xmin+(n-e.pad)/(e.w-2*e.pad)*(e.xmax-e.xmin),s=e.ymin+(e.h-e.pad-a)/(e.h-2*e.pad)*(e.ymax-e.ymin);return[i,s]}function _(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function te(e,n){if(!e)return n;const a=e.match(/^var\((--[\w-]+)\)$/);return a?_(a[1])||n:e}function le(e,n,a){const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(n*i),e.height=Math.round(a*i),e.style.width=`${n}px`,e.style.height=`${a}px`;const s=e.getContext("2d");return s.setTransform(i,0,0,i,0,0),s}function ba(e,n,a){const i=f=>{var h;const m=((h=f.match(/\d+(\.\d+)?/g))==null?void 0:h.map(Number))??[0,0,0];if(f.startsWith("#")){const d=f.replace("#",""),l=d.length===3?d.split("").map($=>$+$).join(""):d;return[parseInt(l.slice(0,2),16),parseInt(l.slice(2,4),16),parseInt(l.slice(4,6),16)]}return m},s=i(e),r=i(n),o=s.map((f,m)=>Math.round(f+(r[m]-f)*a));return`rgb(${o[0]}, ${o[1]}, ${o[2]})`}function ee({fn:e,overlay:n,height:a=420,onPick:i}){const{theme:s}=he(),r=x.useRef(null),o=x.useRef(null),[f,m]=x.useState(520),h=x.useMemo(()=>ha(e.f,e.domain,150,150),[e]),d=x.useMemo(()=>e.levels??la(h,15),[e,h]),l=x.useMemo(()=>d.map(b=>({lv:b,segs:da(h,b)})),[d,h]);x.useEffect(()=>{const b=o.current;if(!b)return;const k=new ResizeObserver(c=>{const p=c[0].contentRect.width;p&&m(p)});return k.observe(b),()=>k.disconnect()},[]),x.useEffect(()=>{const b=r.current;if(!b)return;const k=le(b,f,a),c=$e(e.domain,f,a);pa(k,c,h,l,e,n)},[f,a,e,h,l,n,s]);const $=b=>{if(!i)return;const c=r.current.getBoundingClientRect(),p=$e(e.domain,f,a),[u,g]=ca(p,b.clientX-c.left,b.clientY-c.top);i([u,g])};return t.jsx("div",{className:"plot",ref:o,style:{cursor:i?"crosshair":"default"},children:t.jsx("canvas",{ref:r,onClick:$})})}function pa(e,n,a,i,s,r){const o=_("--plot-bg"),f=_("--plot-low"),m=_("--plot-high"),h=_("--plot-contour"),d=_("--plot-axis"),l=_("--plot-ink");e.fillStyle=o,e.fillRect(0,0,n.w,n.h);const $=60,b=60,k=a.vmax-a.vmin||1;for(let p=0;p<b;p++)for(let u=0;u<$;u++){const g=n.xmin+(n.xmax-n.xmin)*(u+.5)/$,y=n.ymin+(n.ymax-n.ymin)*(p+.5)/b,v=s.f(g,y),q=Math.min(1,Math.max(0,(v-a.vmin)/k));e.fillStyle=ba(f,m,Math.sqrt(q));const[V,D]=C(n,g,y),[R,G]=C(n,n.xmin+(n.xmax-n.xmin)*(u+1.5)/$,n.ymin+(n.ymax-n.ymin)*(p-.5)/b);e.globalAlpha=.32,e.fillRect(Math.floor(V)-1,Math.floor(D)-1,Math.ceil(R-V)+2,Math.ceil(G-D)+2)}e.globalAlpha=1,e.strokeStyle=h,e.lineWidth=1,e.beginPath();for(const{segs:p}of i)for(const u of p){const[g,y]=C(n,u.x1,u.y1),[v,q]=C(n,u.x2,u.y2);e.moveTo(g,y),e.lineTo(v,q)}if(e.stroke(),e.strokeStyle=d,e.lineWidth=1,e.globalAlpha=.6,n.ymin<0&&n.ymax>0){const[,p]=C(n,0,0);e.beginPath(),e.moveTo(n.pad,p),e.lineTo(n.w-n.pad,p),e.stroke()}if(n.xmin<0&&n.xmax>0){const[p]=C(n,0,0);e.beginPath(),e.moveTo(p,n.pad),e.lineTo(p,n.h-n.pad),e.stroke()}e.globalAlpha=1;const c=p=>C(n,p[0],p[1]);if(r!=null&&r.triangles){for(const p of r.triangles)if(e.lineJoin="round",e.strokeStyle=_("--plot-path"),e.fillStyle=_("--plot-path"),e.lineWidth=2,e.globalAlpha=.12,e.beginPath(),p.verts.forEach((u,g)=>{const[y,v]=c(u);g===0?e.moveTo(y,v):e.lineTo(y,v)}),e.closePath(),e.fill(),e.globalAlpha=1,e.stroke(),p.verts.forEach((u,g)=>{const[y,v]=c(u);e.fillStyle=g===0?_("--plot-path2"):g===p.verts.length-1?_("--plot-accent"):_("--plot-path"),e.beginPath(),e.arc(y,v,4.5,0,Math.PI*2),e.fill()}),p.trial){const[u,g]=c(p.trial.point);e.strokeStyle=_("--plot-point"),e.setLineDash([4,4]);const[y,v]=p.centroid?c(p.centroid):[u,g];e.beginPath(),e.moveTo(y,v),e.lineTo(u,g),e.stroke(),e.setLineDash([]),e.fillStyle=_("--plot-point"),e.beginPath(),e.arc(u,g,4,0,Math.PI*2),e.fill()}}if(r!=null&&r.paths)for(const p of r.paths){if(p.pts.length<1)continue;const u=te(p.color,_("--plot-path"));e.strokeStyle=u,e.lineWidth=2,p.dotted&&e.setLineDash([5,5]),e.beginPath(),p.pts.forEach((g,y)=>{const[v,q]=c(g);y===0?e.moveTo(v,q):e.lineTo(v,q)}),e.stroke(),e.setLineDash([]),e.fillStyle=u,p.pts.forEach(g=>{const[y,v]=c(g);e.beginPath(),e.arc(y,v,3,0,Math.PI*2),e.fill()})}if(r!=null&&r.arrow){const[p,u]=c(r.arrow.from),[g,y]=c(r.arrow.to);e.strokeStyle=te(r.arrow.color,_("--plot-accent")),e.fillStyle=e.strokeStyle,e.lineWidth=2.5,e.beginPath(),e.moveTo(p,u),e.lineTo(g,y),e.stroke();const v=Math.atan2(y-u,g-p);e.beginPath(),e.moveTo(g,y),e.lineTo(g-9*Math.cos(v-.4),y-9*Math.sin(v-.4)),e.lineTo(g-9*Math.cos(v+.4),y-9*Math.sin(v+.4)),e.closePath(),e.fill()}if(r!=null&&r.points)for(const p of r.points){const[u,g]=c(p.p);e.fillStyle=te(p.color,_("--plot-point")),e.beginPath(),e.arc(u,g,p.r??5,0,Math.PI*2),e.fill(),p.ring&&(e.strokeStyle=o,e.lineWidth=2,e.stroke())}if(r!=null&&r.showMin&&s.min){const[p,u]=c(s.min);e.fillStyle=_("--plot-point"),e.strokeStyle=l,e.lineWidth=2,e.beginPath(),e.arc(p,u,6,0,Math.PI*2),e.fill(),e.stroke()}}function Q(e,n=1.6){const[a,i]=x.useState(0),[s,r]=x.useState(!1),o=x.useRef(),f=x.useRef(0);x.useEffect(()=>{a>e-1&&i(Math.max(0,e-1))},[e,a]),x.useEffect(()=>{var b;if(!s)return;if((b=window.matchMedia)==null?void 0:b.call(window,"(prefers-reduced-motion: reduce)").matches){i(e-1),r(!1);return}const $=k=>{k-f.current>1e3/n&&(f.current=k,i(c=>c>=e-1?(r(!1),c):c+1)),o.current=requestAnimationFrame($)};return o.current=requestAnimationFrame($),()=>{o.current&&cancelAnimationFrame(o.current)}},[s,e,n]);const m=x.useCallback(()=>{i(l=>l>=e-1?0:l),r(l=>!l)},[e]),h=x.useCallback(l=>i($=>Math.min(e-1,Math.max(0,$+l))),[e]),d=x.useCallback(()=>{i(0),r(!1)},[]);return{i:a,setI:i,playing:s,play:m,step:h,reset:d}}function Y({i:e,count:n,playing:a,onPlay:i,onStep:s,onReset:r,onScrub:o}){const{t:f}=z();return t.jsxs("div",{className:"playbar",children:[t.jsxs("button",{className:"ctl-btn ctl-btn--accent",onClick:i,"aria-label":"play/pause",children:[a?"⏸":"▶"," ",f({en:a?"Pause":"Play",hu:a?"Szünet":"Lejátszás"})]}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(-1),"aria-label":"previous",children:"◀"}),t.jsx("input",{type:"range",min:0,max:Math.max(0,n-1),value:e,onChange:m=>o(Number(m.target.value)),style:{accentColor:"var(--accent)",flex:1,minWidth:90},"aria-label":"step"}),t.jsx("button",{className:"ctl-btn",onClick:()=>s(1),"aria-label":"next",children:"▶"}),t.jsx("button",{className:"ctl-btn",onClick:r,"aria-label":"reset",children:"↺"})]})}function oe({label:e,value:n,min:a,max:i,step:s=.01,onChange:r,fmt:o}){return t.jsxs("div",{className:"field",children:[t.jsxs("label",{children:[e," ",t.jsx("b",{children:o?o(n):n})]}),t.jsx("input",{type:"range",min:a,max:i,step:s,value:n,onChange:f=>r(Number(f.target.value))})]})}function ie({label:e,value:n,options:a,onChange:i}){return t.jsxs("div",{className:"field",children:[t.jsx("label",{children:e}),t.jsx("select",{value:n,onChange:s=>i(s.target.value),children:a.map(s=>t.jsx("option",{value:s.value,children:s.label},s.value))})]})}function U({children:e,label:n}){const{t:a}=z(),i=n??{en:"Show the math",hu:"Mutasd a matekot"};return t.jsxs("details",{className:"mathdetails",children:[t.jsxs("summary",{children:[t.jsx("span",{className:"chev",children:"▶"}),t.jsxs("span",{children:["∑ ",a(i)]})]}),t.jsx("div",{className:"mathdetails__body",children:e})]})}function E({emoji:e="💡",children:n}){return t.jsxs("div",{className:"callout",children:[t.jsx("span",{className:"emoji","aria-hidden":!0,children:e}),t.jsx("p",{children:n})]})}function A({label:e,proof:n=!1,children:a}){return t.jsxs("div",{className:`theorem${n?" proof":""}`,children:[t.jsx("div",{className:"lab",children:e}),a]})}const I={id:"rosen2y",label:"f(x,y) = (x²−2y)² + 2(x−1)²",tex:"f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2",f:(e,n)=>(e*e-2*n)**2+2*(e-1)**2,grad:(e,n)=>{const a=e*e-2*n;return[4*e*a+4*(e-1),-4*a]},hess:(e,n)=>[[12*e*e-8*n+4,-8*e],[-8*e,8]],domain:{xmin:-2.6,xmax:2.2,ymin:-1.2,ymax:5.1},min:[1,.5]},$a={id:"dome",label:"f(x,y) = 4 − 3x² − y²",tex:"f(x,y) = 4 - 3x^2 - y^2",f:(e,n)=>4-3*e*e-n*n,grad:(e,n)=>[-6*e,-2*n],hess:()=>[[-6,0],[0,-2]],domain:{xmin:-1.5,xmax:1.5,ymin:-1.5,ymax:1.5},min:[0,0]},ga={id:"bowl",label:"f(x,y) = ½x² + 9⁄2 y²",tex:"f(x,y) = \\tfrac12 x^2 + \\tfrac92 y^2",f:(e,n)=>.5*e*e+4.5*n*n,grad:(e,n)=>[e,9*n],hess:()=>[[1,0],[0,9]],domain:{xmin:-10,xmax:10,ymin:-3,ymax:3},min:[0,0]},ua={id:"saddle",label:"f(x,y) = x² − y²",tex:"f(x,y) = x^2 - y^2",f:(e,n)=>e*e-n*n,grad:(e,n)=>[2*e,-2*n],hess:()=>[[2,0],[0,-2]],domain:{xmin:-2,xmax:2,ymin:-2,ymax:2},min:[0,0]},xa={id:"quad1d",label:"f(x) = x² − 0.8x + 1",tex:"f(x) = x^2 - 0.8x + 1",f:e=>e*e-.8*e+1,domain:{a:-1,b:2},min:.4},ka={id:"cubic1d",label:"f(x) = x³ − 3x + 1",tex:"f(x) = x^3 - 3x + 1",f:e=>e**3-3*e+1,domain:{a:0,b:2},min:1},va={id:"expbump",label:"f(x) = 1 − 10x·e^(−x)",tex:"f(x) = 1 - 10x e^{-x}",f:e=>1-10*e*Math.exp(-e),domain:{a:0,b:2},min:1},ve=[xa,ka,va],B=(e,n)=>e.map((a,i)=>a+n[i]),j=(e,n)=>e.map((a,i)=>a-n[i]),T=(e,n)=>e.map(a=>a*n),N=(e,n)=>e.reduce((a,i,s)=>a+i*n[s],0),S=e=>Math.sqrt(N(e,e)),de=(e,n)=>S(j(e,n));function ge(e,n){return e.map(a=>N(a,n))}function ye(e,n){const a=e.length,i=e.map((s,r)=>[...s,n[r]]);for(let s=0;s<a;s++){let r=s;for(let o=s+1;o<a;o++)Math.abs(i[o][s])>Math.abs(i[r][s])&&(r=o);if(Math.abs(i[r][s])<1e-14)return null;[i[s],i[r]]=[i[r],i[s]];for(let o=0;o<a;o++){if(o===s)continue;const f=i[o][s]/i[s][s];for(let m=s;m<=a;m++)i[o][m]-=f*i[s][m]}}return i.map((s,r)=>s[a]/s[r])}function ya(e){const n=e[0][0],a=e[1][1],i=n*a-e[0][1]*e[1][0];return Math.abs(i)<1e-9?"degenerate":i<0?"saddle":n>0?"min":"max"}const _a=W.find(e=>e.id==="calculus"),_e=[{fn:ga,at:[0,0]},{fn:$a,at:[0,0]},{fn:ua,at:[0,0]}];function za(){const{t:e}=z(),[n,a]=x.useState(0),[i,s]=x.useState(!0),[r,o]=x.useState(null),f=_e[n],m=x.useMemo(()=>ya(f.fn.hess(f.at[0],f.at[1])),[f]),h=[{kicker:e({en:"Where to look",hu:"Hol keressünk"}),title:e({en:"Minima hide where the slope dies",hu:"A minimum ott lapul, ahol a meredekség elhal"}),body:t.jsx("p",{children:e({en:"At any local minimum or maximum of a smooth function, every partial derivative is zero: ∇f = 0. These flat spots — critical points — are the only candidates.",hu:"Egy sima függvény minden lokális minimumában vagy maximumában minden parciális derivált nulla: ∇f = 0. Ezek a lapos pontok — a kritikus pontok — az egyetlen jelöltek."})})},{kicker:e({en:"Not enough",hu:"Nem elég"}),title:e({en:"Flat ≠ minimum",hu:"Lapos ≠ minimum"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"A zero gradient could be a valley bottom, a hilltop, or a saddle (down one way, up another). Toggle the gradient field: arrows die at the critical point but say nothing about its type.",hu:"A nulla gradiens lehet völgyalja, hegytető vagy nyeregpont (egyik irányban le, másikban fel). Kapcsold be a gradiensmezőt: a nyilak elhalnak a kritikus pontban, de a típusáról nem árulkodnak."})}),t.jsx(E,{emoji:"🪑",children:e({en:"A saddle is the classic trap: ∇f = 0, yet it's neither a min nor a max.",hu:"A nyeregpont a klasszikus csapda: ∇f = 0, mégsem minimum, sem maximum."})})]})},{kicker:e({en:"The test",hu:"A teszt"}),title:e({en:"Ask the curvature (Hessian)",hu:"Kérdezd a görbületet (Hesse)"}),body:t.jsx("p",{children:e({en:"The Hessian — the matrix of second derivatives — decides. Positive definite ⇒ minimum, negative definite ⇒ maximum, mixed signs ⇒ saddle. For 2D, just check D = fₓₓf_yy − fₓy².",hu:"A Hesse-mátrix — a második deriváltak mátrixa — dönt. Pozitív definit ⇒ minimum, negatív definit ⇒ maximum, vegyes előjelek ⇒ nyeregpont. 2D-ben elég a D = fₓₓf_yy − fₓy² ellenőrzése."})})},{kicker:e({en:"Your turn",hu:"Te jössz"}),title:e({en:"Min, max, or saddle?",hu:"Minimum, maximum vagy nyereg?"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The marked dot is a critical point of the function on the right. Read the contours and make the call — then check the Hessian verdict.",hu:"A megjelölt pont a jobb oldali függvény kritikus pontja. Olvasd le a szintvonalakból, és dönts — majd nézd meg a Hesse-mátrix ítéletét."})}),t.jsx("div",{className:"quiz",children:["min","max","saddle"].map(d=>t.jsx("button",{className:r===d?d===m?"correct":"wrong":"",onClick:()=>o(d),children:e({min:{en:"Minimum",hu:"Minimum"},max:{en:"Maximum",hu:"Maximum"},saddle:{en:"Saddle",hu:"Nyeregpont"},degenerate:{en:"Degenerate",hu:"Elfajuló"}}[d])},d))}),r&&t.jsxs("p",{style:{marginTop:10},children:[e(r===m?{en:"✅ Correct! ",hu:"✅ Helyes! "}:{en:"❌ Not quite — ",hu:"❌ Nem egészen — "}),e({en:`the Hessian here is ${fe(m,"en")}.`,hu:`az itteni Hesse-mátrix ${fe(m,"hu")}.`})]})]})}];return t.jsxs(O,{meta:_a,children:[t.jsx(K,{steps:h,graphic:()=>t.jsx(wa,{q:f,qi:n,setQi:d=>{a(d),o(null)},showField:i,setShowField:s,truth:m,revealed:r!=null})}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"Necessary condition",hu:"Szükséges feltétel"}),children:[t.jsx("p",{children:e({en:"If f has a local extremum at a, then",hu:"Ha f-nek lokális szélsőértéke van a-ban, akkor"})}),t.jsx(w,{block:!0,children:"\\frac{\\partial f}{\\partial x_i}(\\mathbf a) = 0 \\quad (i = 1,\\dots,n), \\qquad \\text{i.e. } \\nabla f(\\mathbf a) = \\mathbf 0."})]}),t.jsxs(A,{label:e({en:"Second-order test (2D)",hu:"Másodrendű teszt (2D)"}),proof:!0,children:[t.jsx(w,{block:!0,children:"D = \\frac{\\partial^2 f}{\\partial x^2}\\frac{\\partial^2 f}{\\partial y^2} - \\Big(\\frac{\\partial^2 f}{\\partial x\\,\\partial y}\\Big)^2."}),t.jsx("p",{children:e({en:"D > 0 and fₓₓ > 0 ⇒ minimum; D > 0 and fₓₓ < 0 ⇒ maximum; D < 0 ⇒ saddle. In general: the Hessian's definiteness decides.",hu:"D > 0 és fₓₓ > 0 ⇒ minimum; D > 0 és fₓₓ < 0 ⇒ maximum; D < 0 ⇒ nyeregpont. Általában: a Hesse-mátrix definitsége dönt."})})]})]})]})}function fe(e,n){return{min:{en:"positive definite (a minimum)",hu:"pozitív definit (minimum)"},max:{en:"negative definite (a maximum)",hu:"negatív definit (maximum)"},saddle:{en:"indefinite (a saddle)",hu:"indefinit (nyeregpont)"},degenerate:{en:"degenerate",hu:"elfajuló"}}[e][n]}function wa({q:e,qi:n,setQi:a,showField:i,setShowField:s,truth:r,revealed:o}){const{t:f}=z(),h={paths:x.useMemo(()=>{if(!i)return[];const d=[],l=e.fn.domain,$=7;for(let b=1;b<$;b++)for(let k=1;k<$;k++){const c=l.xmin+(l.xmax-l.xmin)*b/$,p=l.ymin+(l.ymax-l.ymin)*k/$,u=e.fn.grad(c,p),g=Math.hypot(u[0],u[1])||1,y=Math.min(.13*(l.xmax-l.xmin),.13*(l.xmax-l.xmin)*g/(g+1));d.push({from:[c,p],to:[c-u[0]/g*y,p-u[1]/g*y]})}return d},[e,i]).map(d=>({pts:[d.from,d.to],color:"var(--plot-accent)"})),points:[{p:e.at,ring:!0,color:o?r==="min"?"var(--plot-path2)":r==="max"?"var(--plot-path)":"var(--warm)":"var(--plot-point)",r:7}]};return t.jsxs("div",{children:[t.jsx(ee,{fn:e.fn,overlay:h,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:t.jsx(w,{children:e.fn.tex})})]}),t.jsxs("span",{children:[t.jsxs("span",{className:"k",children:["∇f(",e.at.join(", "),")"]})," ",t.jsx("b",{children:"= (0, 0)"})]}),o&&t.jsxs("span",{children:[t.jsx("span",{className:"k",children:f({en:"verdict",hu:"ítélet"})})," ",t.jsx("b",{children:fe(r,"en").split(" (")[0]})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(ie,{label:f({en:"Pick a critical point",hu:"Válassz kritikus pontot"}),value:String(n),onChange:d=>a(Number(d)),options:_e.map((d,l)=>({value:String(l),label:d.fn.label}))}),t.jsx("button",{className:`ctl-btn${i?" ctl-btn--accent":""}`,onClick:()=>s(!i),children:f({en:"Gradient field",hu:"Gradiensmező"})})]})]})}function ja({fn:e,frame:n,height:a=360}){const{theme:i}=he(),s=x.useRef(null),r=x.useRef(null),[o,f]=x.useState(520);return x.useEffect(()=>{const m=r.current;if(!m)return;const h=new ResizeObserver(d=>{const l=d[0].contentRect.width;l&&f(l)});return h.observe(m),()=>h.disconnect()},[]),x.useEffect(()=>{const m=s.current;if(!m)return;const h=le(m,o,a);Ta(h,o,a,e,n)},[o,a,e,n,i]),t.jsx("div",{className:"plot",ref:r,children:t.jsx("canvas",{ref:s})})}function Ta(e,n,a,i,s){const{a:o,b:f}=i.domain,m=240;let h=1/0,d=-1/0;const l=[];for(let c=0;c<=m;c++){const p=o+(f-o)*c/m,u=i.f(p);l.push(u),u<h&&(h=u),u>d&&(d=u)}const $=(d-h)*.12||1;h-=$,d+=$;const b=c=>40+(c-o)/(f-o)*(n-80),k=c=>a-40-(c-h)/(d-h)*(a-80);e.fillStyle=_("--plot-bg"),e.fillRect(0,0,n,a),e.strokeStyle=_("--plot-grid"),e.lineWidth=1;for(let c=0;c<=6;c++){const p=40+(n-80)*c/6;e.beginPath(),e.moveTo(p,40),e.lineTo(p,a-40),e.stroke()}s&&(e.fillStyle=_("--accent-soft"),e.globalAlpha=.7,e.fillRect(b(s.a),40,b(s.b)-b(s.a),a-80),e.globalAlpha=1),e.strokeStyle=_("--plot-point"),e.lineWidth=2.5,e.beginPath();for(let c=0;c<=m;c++){const p=o+(f-o)*c/m,u=b(p),g=k(l[c]);c===0?e.moveTo(u,g):e.lineTo(u,g)}if(e.stroke(),s){const c=(p,u,g,y)=>{e.strokeStyle=g,e.fillStyle=g,e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(b(p),k(u)),e.lineTo(b(p),a-40),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(b(p),k(u),5,0,Math.PI*2),e.fill(),e.font="600 12px ui-monospace, monospace",e.fillText(y,b(p)-4,a-40+16)};e.fillStyle=_("--plot-axis"),e.font="600 11px ui-monospace, monospace",e.fillText("a",b(s.a)-3,a-40+16),e.fillText("b",b(s.b)-3,a-40+16),c(s.y,s.fy,_("--plot-path2"),"y"),c(s.x,s.fx,_("--plot-accent"),"x")}}const J=(Math.sqrt(5)-1)/2;function Aa(e,n=.01,a=40){let i=e.domain.a,s=e.domain.b,r=i+J*(s-i),o=i+(1-J)*(s-i),f=e.f(r),m=e.f(o),h=2;const d=[{k:0,a:i,b:s,x:r,y:o,fx:f,fy:m,evals:h,keep:"init"}];let l=0;for(;s-i>n&&l<a;)l++,f>m?(s=r,r=o,f=m,o=i+(1-J)*(s-i),m=e.f(o),h++,d.push({k:l,a:i,b:s,x:r,y:o,fx:f,fy:m,evals:h,keep:"left"})):(i=o,o=r,m=f,r=i+J*(s-i),f=e.f(r),h++,d.push({k:l,a:i,b:s,x:r,y:o,fx:f,fy:m,evals:h,keep:"right"}));return d}const qa=e=>(e.a+e.b)/2,Ha=W.find(e=>e.id==="golden");function Ma(){const{t:e}=z(),[n,a]=x.useState("quad1d"),i=ve.find(m=>m.id===n),s=x.useMemo(()=>Aa(i,.01,40),[i]),r=Q(s.length),o=[0,0,1,2,s.length-1],f=[{kicker:e({en:"The setup",hu:"A felállás"}),title:e({en:"One valley, one bottom",hu:"Egy völgy, egy mélypont"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Suppose f is unimodal on [a, b]: it goes down, then up, with a single lowest point. We don't need its derivative — only the ability to evaluate it.",hu:"Tegyük fel, hogy f unimodális az [a, b]-n: előbb csökken, majd nő, egyetlen mélyponttal. Nincs szükség a deriváltjára — csak ki kell tudnunk értékelni."})}),t.jsx(E,{emoji:"🎯",children:e({en:"Goal: trap the minimum in shrinking nested intervals, like the bisection method — but for minimizing instead of root-finding.",hu:"Cél: egyre szűkülő, egymásba ágyazott intervallumokba zárni a minimumot, mint a felezésnél — de minimumkeresésre."})})]})},{kicker:e({en:"Two probes",hu:"Két próba"}),title:e({en:"Peek at two inside points",hu:"Két belső pontnál kukucskálunk"}),body:t.jsx("p",{children:e({en:"Place two interior points y < x. Comparing f(y) and f(x) tells us which side the minimum can't be on — so we can throw that side away.",hu:"Helyezzünk el két belső pontot, y < x. Az f(y) és f(x) összevetése megmondja, melyik oldalon nem lehet a minimum — azt eldobhatjuk."})})},{kicker:e({en:"Discard",hu:"Eldobás"}),title:e({en:"Throw away a slice",hu:"Dobjunk el egy szeletet"}),body:t.jsx("p",{children:e({en:"If f(x) > f(y) the minimum lies in [a, x]; otherwise in [y, b]. Either way the bracket gets shorter while still containing the minimum.",hu:"Ha f(x) > f(y), a minimum az [a, x]-ben van; különben az [y, b]-ben. Akárhogy is, a befogó intervallum rövidül, de továbbra is tartalmazza a minimumot."})})},{kicker:e({en:"The trick",hu:"A trükk"}),title:e({en:"Why golden? Reuse a point",hu:"Miért arany? Pontot újrahasználunk"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Pick the split ratio so that one old probe becomes a probe of the new interval. Then every step costs just one new function evaluation, not two.",hu:"Válaszd a felosztási arányt úgy, hogy az egyik régi próbapont az új intervallum próbapontja legyen. Így minden lépés csak egy új függvénykiértékelésbe kerül, nem kettőbe."})}),t.jsxs("p",{children:[e({en:"That requirement forces the golden ratio ",hu:"Ez a követelmény az aranymetszést kényszeríti ki: "}),t.jsx(w,{children:"r = \\tfrac{\\sqrt5 - 1}{2} \\approx 0.618"}),"."]})]})},{kicker:e({en:"Done",hu:"Kész"}),title:e({en:"Squeeze to tolerance",hu:"Szorítsd a tűréshatárig"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Repeat until the interval is shorter than your tolerance ε, then report its midpoint. The width shrinks by the factor r every step — geometric, predictable convergence.",hu:"Ismételd, amíg az intervallum rövidebb nem lesz az ε tűrésnél, majd add vissza a felezőpontját. A szélesség minden lépésben r-szeresére csökken — geometrikus, kiszámítható konvergencia."})}),t.jsx(E,{emoji:"✨",children:e({en:"After n steps the bracket has length (b−a)·rⁿ. Want 3 digits? You can compute n in advance.",hu:"n lépés után a befogó hossza (b−a)·rⁿ. Kell 3 jegy? n előre kiszámolható."})})]})}];return t.jsxs(O,{meta:Ha,children:[t.jsx(K,{steps:f,graphic:m=>t.jsx(Na,{fn:i,fnId:n,setFnId:a,frames:s,player:r,targetFrame:o[m]??0})}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"The golden ratio, derived",hu:"Az aranymetszés, levezetve"}),children:[t.jsx("p",{children:e({en:"Place points so the two candidate intervals have equal length r(b−a):",hu:"Helyezd el a pontokat úgy, hogy a két jelölt intervallum hossza azonos legyen, r(b−a):"})}),t.jsx(w,{block:!0,children:"x = a + r(b-a), \\qquad y = a + (1-r)(b-a)."}),t.jsx("p",{children:e({en:"Requiring the surviving probe to land exactly where the next step needs it gives",hu:"Megkövetelve, hogy a megmaradó próbapont pont oda essen, ahol a következő lépésnek kell, kapjuk:"})}),t.jsx(w,{block:!0,children:"r^2 + r - 1 = 0 \\;\\Longrightarrow\\; r = \\frac{\\sqrt5 - 1}{2} \\approx 0.61803."})]}),t.jsxs(A,{label:e({en:"Steps to reach ε",hu:"Lépésszám az ε eléréséhez"}),proof:!0,children:[t.jsx(w,{block:!0,children:"n \\ge \\dfrac{\\log\\!\\big(\\varepsilon/(b-a)\\big)}{\\log r}."}),t.jsx("p",{children:e({en:"For f(x)=x²−0.8x+1 on [−1, 2] with ε = 0.005, this gives n ≥ 13.3, i.e. 14 steps — exactly what the demo needs.",hu:"Az f(x)=x²−0.8x+1 függvényre a [−1, 2]-n, ε = 0.005 mellett ez n ≥ 13.3, azaz 14 lépés — pontosan annyi, amennyit a demó igényel."})})]})]})]})}function Na({fn:e,fnId:n,setFnId:a,frames:i,player:s,targetFrame:r}){const{t:o}=z();x.useEffect(()=>{s.playing||s.setI(r)},[r]);const f=i[Math.min(s.i,i.length-1)],m=f.b-f.a,h=qa(f);return t.jsxs("div",{children:[t.jsx(ja,{fn:e,frame:f,height:340}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"r"})," ",t.jsx("b",{children:J.toFixed(5)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"[a, b]"})," ",t.jsxs("b",{children:["[",f.a.toFixed(3),", ",f.b.toFixed(3),"]"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"width",hu:"szélesség"})})," ",t.jsx("b",{children:m.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"f-evals",hu:"kiértékelés"})})," ",t.jsx("b",{children:f.evals})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:o({en:"midpoint",hu:"felezőpont"})})," ",t.jsx("b",{children:h.toFixed(5)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Y,{i:s.i,count:i.length,playing:s.playing,onPlay:s.play,onStep:s.step,onReset:s.reset,onScrub:s.setI}),t.jsx(ie,{label:o({en:"Function",hu:"Függvény"}),value:n,onChange:a,options:ve.map(d=>({value:d.id,label:d.label}))})]})]})}const Sa=(e,n)=>({v:n,f:e.f(n[0],n[1])});function Z(e,n){return n.map(a=>Sa(e,a)).sort((a,i)=>a.f-i.f)}function X(e,n,a,i,s){return{k:e,verts:n.map(r=>r.v),fvals:n.map(r=>r.f),centroid:i,trial:s,action:a}}function Ia(e,n,a=26){let i=Z(e,n);const s=[X(0,i,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let r=1;r<=a;r++){const o=i[0],f=i[i.length-1],m=i.slice(0,-1),h=T(m.reduce(($,b)=>B($,b.v),[0,0]),1/m.length),d=j(T(h,2),f.v);if(e.f(d[0],d[1])<f.f)i=Z(e,[...m.map($=>$.v),d]),s.push(X(r,i,{en:"Reflection accepted",hu:"Tükrözés elfogadva"},h,{kind:"reflect",point:d}));else{const $=i.map(b=>b===o?b.v:B(o.v,T(j(b.v,o.v),.5)));i=Z(e,$),s.push(X(r,i,{en:"Shrink toward best vertex",hu:"Zsugorítás a legjobb csúcs felé"},h))}}return s}function Pa(e,n,a=1.4,i=.7,s=20){let r=Z(e,n);const o=[X(0,r,{en:"Starting simplex",hu:"Kezdő szimplex"})];for(let f=1;f<=s;f++){const m=r[0],h=r[r.length-1],d=r[r.length-2],l=r.slice(0,-1),$=T(l.reduce((g,y)=>B(g,y.v),[0,0]),1/l.length),b=j(T($,2),h.v),k=e.f(b[0],b[1]);let c,p,u;if(k<m.f){const g=B($,T(j(b,$),a));e.f(g[0],g[1])<m.f?(u=[...l.map(v=>v.v),g],c={en:"Expansion accepted",hu:"Megnyújtás elfogadva"},p={kind:"expand",point:g}):(u=[...l.map(v=>v.v),b],c={en:"Reflection (no expansion)",hu:"Tükrözés (nincs nyújtás)"},p={kind:"reflect",point:b})}else if(k<d.f)u=[...l.map(g=>g.v),b],c={en:"Reflection accepted",hu:"Tükrözés elfogadva"},p={kind:"reflect",point:b};else{const g=h.f<k?j($,T(j(b,$),i)):B($,T(j(b,$),i));e.f(g[0],g[1])<Math.min(h.f,k)?(u=[...l.map(v=>v.v),g],c={en:"Contraction accepted",hu:"Összehúzás elfogadva"},p={kind:"contract",point:g}):(u=r.map(v=>v===m?v.v:B(m.v,T(j(v.v,m.v),.5))),c={en:"Shrink to best",hu:"Zsugorítás a legjobbhoz"})}r=Z(e,u),o.push(X(f,r,c,$,p))}return o}const Fa=W.find(e=>e.id==="simplex"),ue=[[-2,4],[-1,4],[-1.5,5]];function Ba(){const{t:e}=z(),[n,a]=x.useState("nm"),[i,s]=x.useState(1.4),[r,o]=x.useState(.7),f=x.useMemo(()=>n==="simplex"?Ia(I,ue,26):Pa(I,ue,i,r,22),[n,i,r]),m=Q(f.length),h=[0,1,2,3,f.length-1],d=[{kicker:e({en:"No derivatives",hu:"Derivált nélkül"}),title:e({en:"Send in a triangle",hu:"Küldj be egy háromszöget"}),body:t.jsx("p",{children:e({en:"These methods never compute a gradient. They keep a shape — for two variables, a triangle (a simplex) — and move it downhill using only function values at its corners.",hu:"Ezek a módszerek sosem számolnak gradienst. Egy alakzatot tartanak fenn — két változóra háromszöget (szimplexet) — és csak a sarkokban felvett függvényértékek alapján mozgatják lefelé."})})},{kicker:e({en:"Reflect",hu:"Tükrözés"}),title:e({en:"Flip the worst corner",hu:"Fordítsd át a legrosszabb sarkot"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Find the worst vertex (highest f). Reflect it through the centroid of the others — the dotted line — to a trial point on the far side.",hu:"Keresd meg a legrosszabb csúcsot (legnagyobb f). Tükrözd a többiek súlypontján át — a szaggatott vonal mentén — egy próbapontba a túloldalon."})}),t.jsx(E,{emoji:"🟢",children:e({en:"Green = best vertex, amber = worst, the open dot = trial point being tested.",hu:"Zöld = legjobb csúcs, borostyán = legrosszabb, az üres pont = a tesztelt próbapont."})})]})},{kicker:e({en:"Expand / contract",hu:"Nyújtás / húzás"}),title:e({en:"Greedy or cautious",hu:"Mohó vagy óvatos"}),body:t.jsx("p",{children:e({en:"Nelder–Mead is adaptive: if a reflection is great, expand further (factor α); if it's poor, contract back (factor β); if even that fails, shrink toward the best vertex.",hu:"A Nelder–Mead alkalmazkodó: ha a tükrözés remek, nyújts tovább (α tényező); ha gyenge, húzd vissza (β tényező); ha még az sem segít, zsugorítsd a legjobb csúcs felé."})})},{kicker:e({en:"Crawl down",hu:"Lekúszás"}),title:e({en:"The amoeba walks",hu:"Az amőba sétál"}),body:t.jsx("p",{children:e({en:"Repeating these moves, the triangle tumbles and stretches down the valley — which is why Nelder–Mead is nicknamed the “amoeba” method.",hu:"E lépéseket ismételve a háromszög bukfencezve és nyúlva gurul le a völgyben — ezért becézik a Nelder–Mead-et „amőba” módszernek."})})},{kicker:e({en:"Tune it",hu:"Hangold"}),title:e({en:"Simplex vs Nelder–Mead",hu:"Szimplex kontra Nelder–Mead"}),body:t.jsx("p",{children:e({en:"Switch to the plain simplex (reflect-or-shrink only) and compare. Then play with α and β — bigger α is bolder, smaller β contracts harder.",hu:"Válts az egyszerű szimplexre (csak tükrözés vagy zsugorítás) és hasonlítsd össze. Aztán játssz az α és β értékkel — nagyobb α merészebb, kisebb β erősebben húz."})})}];return t.jsxs(O,{meta:Fa,children:[t.jsx(K,{steps:d,graphic:l=>t.jsx(Va,{frames:f,player:m,targetFrame:h[l]??0,variant:n,setVariant:a,alpha:i,setAlpha:s,beta:r,setBeta:o})}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"The moves",hu:"A lépések"}),children:[t.jsx("p",{children:e({en:"Order vertices f(x⁰) ≤ … ≤ f(xⁿ); centroid of the best n:",hu:"Rendezd a csúcsokat f(x⁰) ≤ … ≤ f(xⁿ); a legjobb n súlypontja:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_c = \\tfrac1n\\textstyle\\sum_{i=0}^{n-1}\\mathbf x^{(i)}, \\qquad \\mathbf x_r = 2\\mathbf x_c - \\mathbf x^{(n)}."}),t.jsx("p",{children:e({en:"Expansion and contraction:",hu:"Nyújtás és húzás:"})}),t.jsx(w,{block:!0,children:"\\mathbf x_e = \\mathbf x_c + \\alpha(\\mathbf x_r - \\mathbf x_c), \\qquad \\mathbf x_z = \\mathbf x_c \\pm \\beta(\\mathbf x_r - \\mathbf x_c)."})]}),t.jsxs(A,{label:e({en:"Stopping",hu:"Megállás"}),proof:!0,children:[t.jsx("p",{children:e({en:"Stop when the simplex is tiny, or when the spread of values is small:",hu:"Állj meg, ha a szimplex apró, vagy ha az értékek szórása kicsi:"})}),t.jsx(w,{block:!0,children:"\\sigma = \\sqrt{\\tfrac1{n+1}\\textstyle\\sum_{i=0}^{n}\\big(f(\\mathbf x^{(i)}) - \\bar f\\big)^2} < \\text{tol}."})]})]})]})}function Va({frames:e,player:n,targetFrame:a,variant:i,setVariant:s,alpha:r,setAlpha:o,beta:f,setBeta:m}){const{t:h}=z();x.useEffect(()=>{n.playing||n.setI(a)},[a]);const d=Math.min(n.i,e.length-1),l=e[d],$={triangles:[{verts:l.verts,centroid:l.centroid,trial:l.trial}],showMin:!0},b=Math.min(...l.fvals);return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:$,height:400}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:l.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:h({en:"action",hu:"lépés"})})," ",t.jsx("b",{children:h(l.action)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:h({en:"best f",hu:"legjobb f"})})," ",t.jsx("b",{children:b.toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Y,{i:n.i,count:e.length,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx(ie,{label:h({en:"Method",hu:"Módszer"}),value:i,onChange:k=>s(k),options:[{value:"nm",label:"Nelder–Mead"},{value:"simplex",label:h({en:"Plain simplex",hu:"Egyszerű szimplex"})}]}),i==="nm"&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{label:"α",value:r,min:1.1,max:2.5,step:.1,onChange:o,fmt:k=>k.toFixed(1)}),t.jsx(oe,{label:"β",value:f,min:.2,max:.9,step:.1,onChange:m,fmt:k=>k.toFixed(1)})]})]})]})}function ze(e,n){return{frames:n.map((i,s)=>{const r=e.grad(i[0],i[1]);return{k:s,p:i,fval:e.f(i[0],i[1]),grad:r,err:e.min?de(i,e.min):void 0}}),points:n}}function Da(e,n,a=.3,i=24){const s=[n];let r=n;for(let o=0;o<i;o++){const f=e.grad(r[0],r[1]),m=S(f);if(m<1e-9)break;r=j(r,T(f,a/m)),s.push(r)}return ze(e,s)}function Ea(e,n,a,i=3,s=40){const r=(Math.sqrt(5)-1)/2;let o=0,f=i;const m=b=>{const k=B(n,T(a,b));return e.f(k[0],k[1])};let h=o+r*(f-o),d=o+(1-r)*(f-o),l=m(h),$=m(d);for(let b=0;b<s&&f-o>1e-6;b++)l>$?(f=h,h=d,l=$,d=o+(1-r)*(f-o),$=m(d)):(o=d,d=h,$=l,h=o+r*(f-o),l=m(h));return(o+f)/2}function we(e,n,a=14){const i=[n];let s=n;for(let r=0;r<a;r++){const o=e.grad(s[0],s[1]);if(S(o)<1e-8)break;const f=T(o,-1),m=Ea(e,s,f);s=B(s,T(f,m)),i.push(s)}return ze(e,i)}const Wa=W.find(e=>e.id==="gradient");function Ra(){const{t:e}=z(),n=I,[a,i]=x.useState([-1,4]),[s,r]=x.useState("constant"),[o,f]=x.useState(.3),m=x.useMemo(()=>s==="constant"?Da(n,a,o,26):we(n,a,16),[n,a,s,o]),h=Q(m.points.length),d=[0,1,2,m.points.length-1,m.points.length-1],l=[{kicker:e({en:"The idea",hu:"Az ötlet"}),title:e({en:"Walk straight downhill",hu:"Lefelé, egyenesen"}),body:t.jsx("p",{children:e({en:"From any point, the steepest downhill direction is the negative gradient −∇f. The gradient method just keeps stepping that way.",hu:"Bármely pontból a legmeredekebb lefelé irány a negatív gradiens, −∇f. A gradiens módszer egyszerűen mindig arra lép."})})},{kicker:e({en:"Perpendicular",hu:"Merőleges"}),title:e({en:"Gradient ⟂ contour",hu:"Gradiens ⟂ szintvonal"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"The gradient is always perpendicular to the contour line through that point — so each step crosses the level curves at a right angle.",hu:"A gradiens mindig merőleges a ponton átmenő szintvonalra — így minden lépés derékszögben metszi a szintvonalakat."})}),t.jsx(E,{emoji:"🧭",children:e({en:"The orange arrow is the descent direction. Click anywhere on the plot to drop a new starting point!",hu:"A narancs nyíl a lejtés iránya. Kattints bárhová az ábrán egy új kezdőpontért!"})})]})},{kicker:e({en:"Step size",hu:"Lépésköz"}),title:e({en:"How far each step?",hu:"Milyen messze lépjünk?"}),body:t.jsx("p",{children:e({en:"With a constant step you never land exactly on the minimum — you orbit it. The optimal method instead line-searches for the best step each time.",hu:"Állandó lépésközzel sosem érsz pontosan a minimumba — körözöl körülötte. Az optimális módszer ehelyett minden lépésben a legjobb lépéshosszt keresi."})})},{kicker:e({en:"The catch",hu:"A bökkenő"}),title:e({en:"Zig-zag in the valley",hu:"Cikcakk a völgyben"}),body:t.jsx("p",{children:e({en:"Consecutive optimal steps are perpendicular, so in a long narrow valley the path bounces side to side and creeps forward slowly. Convergence is only linear.",hu:"Az egymást követő optimális lépések merőlegesek, ezért egy hosszú, keskeny völgyben a pálya oldalról oldalra pattog és lassan kúszik előre. A konvergencia csak lineáris."})})},{kicker:e({en:"Try it",hu:"Próbáld ki"}),title:e({en:"Compare the two modes",hu:"Hasonlítsd össze a két módot"}),body:t.jsx("p",{children:e({en:"Switch between constant and optimal steps, drag the step-size slider, and click different starts. Watch the path and the error readout react.",hu:"Válts az állandó és az optimális lépés között, húzd a lépésköz-csúszkát, és kattints különböző kezdőpontokra. Figyeld, hogyan reagál a pálya és a hiba-kijelző."})})}];return t.jsxs(O,{meta:Wa,children:[t.jsx(K,{steps:l,graphic:$=>t.jsx(Ga,{result:m,player:h,targetFrame:d[$]??0,mode:s,setMode:r,h:o,setH:f,onPick:i})}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"Steepest descent",hu:"Legmeredekebb lejtés"}),children:[t.jsx("p",{children:e({en:"Among all unit directions u, the directional derivative is most negative for",hu:"Az összes u egységirány közül az iránymenti derivált a következőre a legnegatívabb:"})}),t.jsx(w,{block:!0,children:"\\mathbf{u} = -\\,\\frac{f'(\\mathbf p)}{\\lVert f'(\\mathbf p)\\rVert_2}, \\qquad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\alpha_k\\, f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"Constant step: αₖ = h / ‖f′(pₖ)‖. Optimal step: choose αₖ to minimize φ(t) = f(pₖ − t f′(pₖ)) along the ray.",hu:"Állandó lépés: αₖ = h / ‖f′(pₖ)‖. Optimális lépés: válaszd αₖ-t úgy, hogy minimalizálja a φ(t) = f(pₖ − t f′(pₖ)) függvényt a félegyenesen."})})]}),t.jsx(A,{label:e({en:"Why it zig-zags",hu:"Miért cikcakkozik"}),proof:!0,children:t.jsx("p",{children:e({en:"At an optimal step φ′(αₖ)=0, i.e. f′(pₖ₊₁)·f′(pₖ)=0 — successive search directions are orthogonal. In an ill-conditioned valley that forces a slow staircase.",hu:"Optimális lépésnél φ′(αₖ)=0, azaz f′(pₖ₊₁)·f′(pₖ)=0 — az egymást követő keresési irányok merőlegesek. Rosszul kondicionált völgyben ez lassú lépcsőzést eredményez."})})})]})]})}function Ga({result:e,player:n,targetFrame:a,mode:i,setMode:s,h:r,setH:o,onPick:f}){const{t:m}=z();x.useEffect(()=>{n.playing||n.setI(a)},[a]);const h=Math.min(n.i,e.frames.length-1),d=e.frames[h],l=d.p,$=d.grad??[0,0],b=S($)||1,k=B(l,T(j([0,0],$),.4/b)),c={paths:[{pts:e.points.slice(0,h+1)}],points:[{p:l,ring:!0}],arrow:{from:l,to:k},showMin:!0};return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:c,height:400,onPick:f}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",m({en:"path",hu:"pálya"})]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-accent)"}})," −∇f"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-point)"}})," ",m({en:"minimum (1, ½)",hu:"minimum (1, ½)"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:d.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",l[0].toFixed(3),", ",l[1].toFixed(3),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:d.fval.toFixed(4)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(d.err??0).toFixed(4)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Y,{i:n.i,count:e.points.length,playing:n.playing,onPlay:n.play,onStep:n.step,onReset:n.reset,onScrub:n.setI}),t.jsx(ie,{label:m({en:"Step rule",hu:"Lépésszabály"}),value:i,onChange:p=>s(p),options:[{value:"constant",label:m({en:"Constant step",hu:"Állandó lépés"})},{value:"optimal",label:m({en:"Optimal (line search)",hu:"Optimális (vonalkeresés)"})}]}),i==="constant"&&t.jsx(oe,{label:m({en:"step h",hu:"lépés h"}),value:r,min:.05,max:.8,step:.05,onChange:o,fmt:p=>p.toFixed(2)})]})]})}function ce({series:e,height:n=320,yLabel:a="‖pₖ − p*‖"}){const{theme:i}=he(),s=x.useRef(null),r=x.useRef(null),[o,f]=x.useState(520);return x.useEffect(()=>{const m=r.current;if(!m)return;const h=new ResizeObserver(d=>{const l=d[0].contentRect.width;l&&f(l)});return h.observe(m),()=>h.disconnect()},[]),x.useEffect(()=>{const m=s.current;if(!m)return;const h=le(m,o,n);Ca(h,o,n,e,a)},[o,n,e,i,a]),t.jsx("div",{className:"plot",ref:r,children:t.jsx("canvas",{ref:s})})}const se=1e-16;function Ca(e,n,a,i,s){e.fillStyle=_("--plot-bg"),e.fillRect(0,0,n,a);const h=Math.max(1,...i.map(c=>c.errs.length-1)),d=i.flatMap(c=>c.errs.map(p=>Math.log10(Math.max(p,se))));let l=Math.max(...d,0),$=Math.min(...d,-1);l=Math.ceil(l),$=Math.floor($),l-$>18&&($=l-18);const b=c=>52+c/h*(n-52-16),k=c=>16+(1-(c-$)/(l-$))*(a-16-34);e.strokeStyle=_("--plot-grid"),e.fillStyle=_("--plot-axis"),e.font="600 10px ui-monospace, monospace",e.lineWidth=1;for(let c=$;c<=l;c++){const p=k(c);e.beginPath(),e.moveTo(52,p),e.lineTo(n-16,p),e.stroke(),e.fillText(`1e${c}`,6,p+3)}for(let c=0;c<=h;c+=Math.ceil(h/8))e.fillText(`${c}`,b(c)-3,a-34+16);e.save(),e.translate(12,a/2),e.rotate(-Math.PI/2),e.fillText(s,0,0),e.restore();for(const c of i){const p=c.upTo!=null?Math.min(c.upTo,c.errs.length-1):c.errs.length-1,u=te(c.color,_("--plot-path"));e.strokeStyle=u,e.fillStyle=u,e.lineWidth=2.4,e.beginPath();for(let g=0;g<=p;g++){const y=Math.log10(Math.max(c.errs[g],se)),v=b(g),q=k(y);g===0?e.moveTo(v,q):e.lineTo(v,q)}e.stroke();for(let g=0;g<=p;g++){const y=Math.log10(Math.max(c.errs[g],se));e.beginPath(),e.arc(b(g),k(y),2.6,0,Math.PI*2),e.fill()}}}function La(e,n,a,i,s=14){let r=a.slice();const o=[],f=h=>{const d=j(n,ge(e,r));return o.push({k:h,p:r.slice(),err:S(j(r,i)),res:S(d)}),d};let m=f(0);for(let h=1;h<=s;h++){const d=ge(e,m),l=N(m,d);if(Math.abs(l)<1e-18)break;const $=N(m,m)/l;if(r=r.map((b,k)=>b+$*m[k]),m=f(h),S(m)<1e-12)break}return o}const Oa=W.find(e=>e.id==="linsys"),Ka=[[4,2,-1],[2,5,0],[-1,0,3]],Ua=[0,8,1],Qa=[-1,2,0],Ya=[3,3,3];function Ja(){const{t:e}=z(),n=x.useMemo(()=>La(Ka,Ua,Ya,Qa,14),[]),a=Q(n.length),i=[0,1,2,n.length-1,n.length-1],s=[{kicker:e({en:"A surprise link",hu:"Meglepő kapcsolat"}),title:e({en:"Solving = minimizing",hu:"Megoldani = minimalizálni"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"If A is symmetric and positive definite, the quadratic g(x) = ½xᵀAx − bᵀx has exactly one minimum — and its gradient is ∇g = Ax − b. So ∇g = 0 is precisely Ax = b.",hu:"Ha A szimmetrikus és pozitív definit, a g(x) = ½xᵀAx − bᵀx kvadratikusnak pontosan egy minimuma van — és a gradiense ∇g = Ax − b. Tehát ∇g = 0 épp az Ax = b."})}),t.jsx(E,{emoji:"🎢",children:e({en:"Solving the linear system becomes rolling a paraboloid bowl to the bottom — no matrix inverse required.",hu:"A lineáris rendszer megoldása egy paraboloid tál aljára gurulássá válik — mátrixinverz nélkül."})})]})},{kicker:e({en:"The residual",hu:"A reziduum"}),title:e({en:"Which way is down?",hu:"Merre van lefelé?"}),body:t.jsx("p",{children:e({en:"The downhill direction is the residual r = b − Ax (the negative gradient). Step along it by the exact distance that minimizes g on that line.",hu:"A lefelé irány az r = b − Ax reziduum (a negatív gradiens). Lépj mentén pontosan akkorát, amely minimalizálja g-t azon az egyenesen."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"An exact line-search formula",hu:"Pontos vonalkeresési képlet"}),body:t.jsx("p",{children:e({en:"Because g is quadratic, the best step length has a closed form: αₖ = (rᵀr)/(rᵀAr). No searching — just plug in.",hu:"Mivel g kvadratikus, a legjobb lépéshossz zárt alakú: αₖ = (rᵀr)/(rᵀAr). Nincs keresés — csak behelyettesítés."})})},{kicker:e({en:"Watch it solve",hu:"Nézd, ahogy megold"}),title:e({en:"A 3×3 system, live",hu:"Egy 3×3 rendszer, élőben"}),body:t.jsx("p",{children:e({en:"Starting from (3, 3, 3), both the error ‖pₖ − x*‖ and the residual ‖rₖ‖ shrink steadily toward the true solution (−1, 2, 0).",hu:"A (3, 3, 3)-ból indulva a hiba ‖pₖ − x*‖ és a reziduum ‖rₖ‖ is folyamatosan csökken a valódi (−1, 2, 0) megoldás felé."})})},{kicker:e({en:"Note",hu:"Megjegyzés"}),title:e({en:"Steady, but linear",hu:"Egyenletes, de lineáris"}),body:t.jsx("p",{children:e({en:"Like the gradient method it descends reliably but only linearly — conjugate-gradient methods (next courses) fix the zig-zag and finish in n steps.",hu:"A gradiens módszerhez hasonlóan megbízhatóan, de csak lineárisan ereszkedik — a konjugált gradiens módszerek (későbbi kurzusok) megszüntetik a cikcakkot és n lépésben végeznek."})})}],r=[{label:"err",color:"var(--plot-path)",errs:n.map(o=>o.err)},{label:"res",color:"var(--plot-path2)",errs:n.map(o=>o.res)}];return t.jsxs(O,{meta:Oa,children:[t.jsx(K,{steps:s,graphic:o=>t.jsx(Za,{frames:n,series:r,player:a,targetFrame:i[o]??0})}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"Gradient of the quadratic",hu:"A kvadratikus gradiense"}),children:[t.jsx(w,{block:!0,children:"g(\\mathbf x) = \\tfrac12 \\mathbf x^{\\mathsf T} A\\mathbf x - \\mathbf b^{\\mathsf T}\\mathbf x + c, \\qquad g'(\\mathbf x) = A\\mathbf x - \\mathbf b."}),t.jsx("p",{children:e({en:"If A is positive definite, g has a unique global minimum at x = A⁻¹b — the solution of the system.",hu:"Ha A pozitív definit, g-nek egyetlen globális minimuma van az x = A⁻¹b pontban — a rendszer megoldása."})})]}),t.jsx(A,{label:e({en:"The iteration",hu:"Az iteráció"}),proof:!0,children:t.jsx(w,{block:!0,children:"\\mathbf r^{(k)} = \\mathbf b - A\\mathbf p^{(k)}, \\quad \\alpha_k = \\frac{(\\mathbf r^{(k)})^{\\mathsf T}\\mathbf r^{(k)}}{(\\mathbf r^{(k)})^{\\mathsf T} A\\,\\mathbf r^{(k)}}, \\quad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} + \\alpha_k \\mathbf r^{(k)}."})})]})]})}function Za({frames:e,series:n,player:a,targetFrame:i}){const{t:s}=z();x.useEffect(()=>{a.playing||a.setI(i)},[i]);const r=Math.min(a.i,e.length-1),o=e[r],f=n.map(m=>({...m,upTo:r}));return t.jsxs("div",{children:[t.jsx("div",{style:{padding:"16px 16px 0",fontFamily:"var(--mono)",fontSize:".82rem",color:"var(--ink-soft)"},children:t.jsx(w,{block:!0,children:"\\begin{aligned} 4x_1 + 2x_2 - x_3 &= 0 \\\\ 2x_1 + 5x_2\\;\\;\\;\\; &= 8 \\\\ -x_1 \\;\\;\\;\\;\\;+ 3x_3 &= 1 \\end{aligned}"})}),t.jsx(ce,{series:f,height:260,yLabel:"error / residual"}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ‖pₖ − x*‖"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," ‖rₖ‖"]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:o.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",o.p.map(m=>m.toFixed(3)).join(", "),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:s({en:"error",hu:"hiba"})})," ",t.jsx("b",{children:o.err.toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Y,{i:a.i,count:e.length,playing:a.playing,onPlay:a.play,onStep:a.step,onReset:a.reset,onScrub:a.setI}),t.jsx("span",{className:"pill",children:s({en:"true x* = (−1, 2, 0)",hu:"valódi x* = (−1, 2, 0)"})})]})]})}function Xa(e,n,a=8){const i=[n];let s=n;for(let o=0;o<a;o++){const f=e.grad(s[0],s[1]);if(S(f)<1e-10)break;const m=e.hess(s[0],s[1]),h=ye(m,f);if(!h)break;s=j(s,h),i.push(s)}return{frames:i.map((o,f)=>({k:f,p:o,fval:e.f(o[0],o[1]),grad:e.grad(o[0],o[1]),err:e.min?de(o,e.min):void 0})),points:i}}const ei=W.find(e=>e.id==="newton"),xe=[-1,4];function ti(){const{t:e}=z(),[n,a]=x.useState(!0),i=x.useMemo(()=>Xa(I,xe,8),[]),s=x.useMemo(()=>we(I,xe,16),[]),r=Q(Math.max(i.points.length,6)),o=[0,1,2,i.points.length-1,i.points.length-1],f=[{kicker:e({en:"Use the curve",hu:"Használd a görbületet"}),title:e({en:"Fit a bowl, jump to its bottom",hu:"Illessz egy tálat, ugorj az aljára"}),body:t.jsx("p",{children:e({en:"Gradient methods only know the slope. Newton's method also uses curvature: it fits a quadratic bowl (the 2nd-order Taylor model) at the current point and jumps straight to that bowl's minimum.",hu:"A gradiens módszer csak a meredekséget ismeri. A Newton-módszer a görbületet is használja: a jelenlegi pontban illeszt egy kvadratikus tálat (a másodrendű Taylor-modellt), és egyenesen annak minimumába ugrik."})})},{kicker:e({en:"The step",hu:"A lépés"}),title:e({en:"Solve, don't crawl",hu:"Oldd meg, ne kússz"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Each step solves a small linear system with the Hessian H = f''. The update is pₖ₊₁ = pₖ − H⁻¹∇f. No step-size tuning needed.",hu:"Minden lépés egy kis lineáris rendszert old meg a H = f'' Hesse-mátrixszal. A frissítés pₖ₊₁ = pₖ − H⁻¹∇f. Nincs szükség lépésköz-hangolásra."})}),t.jsx(E,{emoji:"⚡",children:e({en:"For this function Newton reaches the minimum to machine precision in ~5 steps — and from (1, 3) it lands exactly in one.",hu:"Erre a függvényre a Newton ~5 lépésben gépi pontossággal eléri a minimumot — (1, 3)-ból pedig egyetlen lépésben pontosan odaér."})})]})},{kicker:e({en:"Speed",hu:"Sebesség"}),title:e({en:"Quadratic convergence",hu:"Kvadratikus konvergencia"}),body:t.jsx("p",{children:e({en:"Near the minimum the error roughly squares each step: digits of accuracy double. The convergence chart below shows Newton plunging while the gradient method inches down.",hu:"A minimum közelében a hiba nagyjából négyzetre emelkedik lépésenként: a pontos jegyek száma megduplázódik. Az alábbi konvergencia-ábrán a Newton zuhan, míg a gradiens módszer araszol."})})},{kicker:e({en:"The price",hu:"Az ára"}),title:e({en:"You must know H",hu:"Ismerned kell H-t"}),body:t.jsx("p",{children:e({en:"Newton needs the Hessian and a fresh linear solve every step — expensive in high dimensions. And if H isn't positive definite, the “jump” can head uphill.",hu:"A Newtonhoz minden lépésben kell a Hesse-mátrix és egy új lineáris megoldás — sok változónál drága. És ha H nem pozitív definit, az „ugrás” akár felfelé is vihet."})})},{kicker:e({en:"Compare",hu:"Hasonlíts"}),title:e({en:"Newton vs gradient",hu:"Newton kontra gradiens"}),body:t.jsx("p",{children:e({en:"Both start at (−1, 4). Toggle the gradient path on and off to feel the difference between a handful of Newton jumps and a long gradient staircase.",hu:"Mindkettő (−1, 4)-ből indul. Kapcsold be-ki a gradiens pályát, hogy megérezd a különbséget néhány Newton-ugrás és egy hosszú gradiens-lépcső között."})})}],m=[{label:"Newton",color:"var(--plot-path2)",errs:i.frames.map(h=>h.err??0)},{label:e({en:"Gradient",hu:"Gradiens"}),color:"var(--plot-path)",errs:s.frames.map(h=>h.err??0)}];return t.jsxs(O,{meta:ei,children:[t.jsx(K,{steps:f,graphic:h=>t.jsx(ni,{nwt:i,grad:s,player:r,targetFrame:o[h]??0,showGradient:n,setShowGradient:a})}),t.jsxs("div",{style:{marginTop:18},children:[t.jsx("p",{className:"muted",style:{marginBottom:6},children:e({en:"Error vs iteration (log scale) — Newton's curve falls off a cliff:",hu:"Hiba az iteráció függvényében (log skála) — a Newton görbéje leszakad:"})}),t.jsxs("div",{className:"scrolly__graphic",style:{boxShadow:"none"},children:[t.jsx(ce,{series:m,height:300}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",e({en:"Gradient (optimal)",hu:"Gradiens (optimális)"})]})]})]})]}),t.jsxs(U,{children:[t.jsxs(A,{label:e({en:"Newton's iteration",hu:"Newton-iteráció"}),children:[t.jsx(w,{block:!0,children:"\\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\big(f''(\\mathbf p^{(k)})\\big)^{-1} f'(\\mathbf p^{(k)})."}),t.jsx("p",{children:e({en:"This is exactly Newton's method applied to the equation ∇f(x) = 0.",hu:"Ez pontosan a Newton-módszer a ∇f(x) = 0 egyenletre alkalmazva."})})]}),t.jsxs(A,{label:e({en:"Convergence",hu:"Konvergencia"}),proof:!0,children:[t.jsx("p",{children:e({en:"If f ∈ C³, ∇f(p)=0 and f''(p) is positive definite, the iteration converges quadratically:",hu:"Ha f ∈ C³, ∇f(p)=0 és f''(p) pozitív definit, az iteráció kvadratikusan konvergál:"})}),t.jsx(w,{block:!0,children:"\\lVert \\mathbf p^{(k+1)} - \\mathbf p\\rVert \\le C\\,\\lVert \\mathbf p^{(k)} - \\mathbf p\\rVert^2."})]})]})]})}function ni({nwt:e,grad:n,player:a,targetFrame:i,showGradient:s,setShowGradient:r}){const{t:o}=z();x.useEffect(()=>{a.playing||a.setI(i)},[i]);const f=a.i,m=Math.min(f,e.points.length-1),h=[{pts:e.points.slice(0,m+1),color:"var(--plot-path2)"}];s&&h.push({pts:n.points.slice(0,Math.min(f+1,n.points.length)),color:"var(--plot-path)"});const d={paths:h,points:[{p:e.points[m],ring:!0,color:"var(--plot-path2)"}],showMin:!0},l=e.frames[m];return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:d,height:400}),t.jsxs("div",{className:"plot__legend",children:[t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path2)"}})," Newton"]}),s&&t.jsxs("span",{children:[t.jsx("i",{className:"swatch",style:{background:"var(--plot-path)"}})," ",o({en:"gradient",hu:"gradiens"})]})]}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:l.k})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"pₖ"})," ",t.jsxs("b",{children:["(",e.points[m][0].toFixed(4),", ",e.points[m][1].toFixed(4),")"]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"f"})," ",t.jsx("b",{children:l.fval.toExponential(2)})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(l.err??0).toExponential(2)})]})]}),t.jsxs("div",{className:"controls",children:[t.jsx(Y,{i:a.i,count:Math.max(e.points.length,6),playing:a.playing,onPlay:a.play,onStep:a.step,onReset:a.reset,onScrub:a.setI}),t.jsx("button",{className:`ctl-btn${s?" ctl-btn--accent":""}`,onClick:()=>r(!s),children:o(s?{en:"Hide gradient path",hu:"Gradiens pálya elrejtése"}:{en:"Show gradient path",hu:"Gradiens pálya mutatása"})})]})]})}const ke=2,P=(e,n)=>e.map(a=>n.map(i=>a*i)),F=(e,n)=>e.map((a,i)=>a.map((s,r)=>s+n[i][r])),L=(e,n)=>e.map(a=>a.map(i=>i*n)),ai=(e,n)=>e.map(a=>N(a,n));function ii(e,n,a=.05){const i=[[a,0],[0,a]],s=e.f(n[0],n[1]),r=[[0,0],[0,0]];for(let o=0;o<ke;o++)for(let f=0;f<ke;f++){const m=e.f(n[0]+i[o][0]+i[f][0],n[1]+i[o][1]+i[f][1]),h=e.f(n[0]+i[o][0],n[1]+i[o][1]),d=e.f(n[0]+i[f][0],n[1]+i[f][1]);r[o][f]=(m-h-d+s)/(a*a)}return[[r[0][0],(r[0][1]+r[1][0])/2],[(r[0][1]+r[1][0])/2,r[1][1]]]}function si(e,n,a,i){const s=ai(n,a),r=j(i,s),o=N(a,a);if(e==="broyden")return F(n,L(P(r,a),1/o));if(e==="psb"){const $=F(P(r,a),P(a,r)),b=L($,1/o),k=N(r,a)/(o*o),c=L(P(a,a),-k);return F(n,F(b,c))}const f=N(i,a),m=N(a,s);if(e==="bfgs"){const $=L(P(i,i),1/f),b=L(P(s,s),-1/m);return F(n,F($,b))}const h=L(F(P(r,i),P(i,r)),1/f),d=N(r,a)/(f*f),l=L(P(i,i),-d);return F(n,F(h,l))}function ri(e,n,a,i=12,s=.05){let r=n,o=ii(e,r,s);const f=[r];for(let h=0;h<i;h++){const d=e.grad(r[0],r[1]);if(S(d)<1e-12)break;const l=ye(o,T(d,-1));if(!l)break;const $=[r[0]+l[0],r[1]+l[1]],b=e.grad($[0],$[1]),k=j(b,d);if(o=si(a,o,l,k),r=$,f.push(r),S(l)<1e-12)break}return{frames:f.map((h,d)=>({k:d,p:h,fval:e.f(h[0],h[1]),grad:e.grad(h[0],h[1]),err:e.min?de(h,e.min):void 0})),points:f}}const me={broyden:"Broyden",psb:"PSB",bfgs:"BFGS",dfp:"DFP"},oi=W.find(e=>e.id==="quasinewton"),fi=[2,2],ne={broyden:"var(--plot-axis)",psb:"var(--warm)",bfgs:"var(--plot-path)",dfp:"var(--plot-path2)"};function mi(){const{t:e}=z(),[n,a]=x.useState("bfgs"),i=x.useMemo(()=>Object.fromEntries(["broyden","psb","bfgs","dfp"].map(d=>[d,ri(I,fi,d,12)])),[]),s=Math.max(...Object.values(i).map(h=>h.points.length)),r=Q(s),o=[0,1,2,s-1,s-1],f=[{kicker:e({en:"The dilemma",hu:"A dilemma"}),title:e({en:"Newton is fast but greedy",hu:"A Newton gyors, de falánk"}),body:t.jsx("p",{children:e({en:"Newton converges beautifully — but it demands the exact Hessian and a linear solve every step. In big problems that's too costly. Can we get Newton-like speed without it?",hu:"A Newton gyönyörűen konvergál — de pontos Hesse-mátrixot és lineáris megoldást kíván lépésenként. Nagy feladatokban ez túl drága. Megkaphatjuk a Newton-szerű sebességet enélkül?"})})},{kicker:e({en:"The secant idea",hu:"A szelő-ötlet"}),title:e({en:"Learn curvature from steps",hu:"Tanuld a görbületet a lépésekből"}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:e({en:"Keep an approximation A ≈ Hessian and improve it each step so it matches the observed change in gradient: A·s = y, where s = pₖ₊₁−pₖ and y = ∇fₖ₊₁−∇fₖ. That's the secant equation.",hu:"Tarts fenn egy A ≈ Hesse közelítést, és javítsd lépésenként úgy, hogy illeszkedjen a gradiens megfigyelt változására: A·s = y, ahol s = pₖ₊₁−pₖ és y = ∇fₖ₊₁−∇fₖ. Ez a szelő-egyenlet."})}),t.jsx(E,{emoji:"🧩",children:e({en:"Different ways to satisfy A·s = y give different updates: Broyden, PSB, BFGS, DFP.",hu:"Az A·s = y különböző teljesítési módjai más-más frissítést adnak: Broyden, PSB, BFGS, DFP."})})]})},{kicker:e({en:"Keep it nice",hu:"Tartsd szépen"}),title:e({en:"Symmetric & positive definite",hu:"Szimmetrikus és pozitív definit"}),body:t.jsx("p",{children:e({en:"A true Hessian is symmetric; near a minimum it's positive definite. PSB enforces symmetry; BFGS and DFP also preserve positive-definiteness, so the step always points downhill.",hu:"A valódi Hesse szimmetrikus; minimum közelében pozitív definit. A PSB kikényszeríti a szimmetriát; a BFGS és a DFP a pozitív definitséget is megőrzi, így a lépés mindig lefelé mutat."})})},{kicker:e({en:"The race",hu:"A verseny"}),title:e({en:"Four updates, one valley",hu:"Négy frissítés, egy völgy"}),body:t.jsx("p",{children:e({en:"All four start at (2, 2) with a finite-difference Hessian guess. BFGS and DFP plunge nearly as fast as Newton; PSB is close behind; plain Broyden lags. Watch the log-scale chart.",hu:"Mind a négy (2, 2)-ből indul, véges differenciás Hesse-becsléssel. A BFGS és a DFP majdnem olyan gyorsan zuhan, mint a Newton; a PSB szorosan mögöttük; az egyszerű Broyden lemarad. Figyeld a log-skálás ábrát."})})},{kicker:e({en:"The winner",hu:"A győztes"}),title:e({en:"Why BFGS rules",hu:"Miért uralkodik a BFGS"}),body:t.jsx("p",{children:e({en:"BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) is the workhorse behind most real-world optimizers. There's even a recursion for the inverse, so each step avoids solving a system entirely.",hu:"A BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) a legtöbb valós optimalizáló igáslova. Az inverzre is van rekurzió, így minden lépés teljesen elkerüli a rendszer megoldását."})})}],m=["broyden","psb","bfgs","dfp"].map(h=>({label:me[h],color:ne[h],errs:i[h].frames.map(d=>d.err??0)}));return t.jsxs(O,{meta:oi,children:[t.jsx(K,{steps:f,graphic:h=>t.jsx(hi,{runs:i,series:m,player:r,targetFrame:o[h]??0,focus:n,setFocus:a,count:s})}),t.jsxs(U,{children:[t.jsx(A,{label:e({en:"Secant equation",hu:"Szelő-egyenlet"}),children:t.jsx(w,{block:!0,children:"\\mathbf s^{(k)} = \\mathbf p^{(k+1)} - \\mathbf p^{(k)}, \\quad \\mathbf y^{(k)} = f'(\\mathbf p^{(k+1)}) - f'(\\mathbf p^{(k)}), \\quad A^{(k+1)}\\mathbf s^{(k)} = \\mathbf y^{(k)}."})}),t.jsxs(A,{label:e({en:"BFGS update",hu:"BFGS frissítés"}),proof:!0,children:[t.jsx(w,{block:!0,children:"A^{(k+1)} = A^{(k)} + \\frac{\\mathbf y\\mathbf y^{\\mathsf T}}{\\mathbf y^{\\mathsf T}\\mathbf s} - \\frac{A^{(k)}\\mathbf s\\,\\mathbf s^{\\mathsf T}A^{(k)}}{\\mathbf s^{\\mathsf T}A^{(k)}\\mathbf s}."}),t.jsx("p",{children:e({en:"DFP swaps the roles of s and y; PSB is the symmetric correction of Broyden's rank-1 update. All keep A symmetric, and BFGS/DFP keep it positive definite when yᵀs > 0.",hu:"A DFP felcseréli s és y szerepét; a PSB a Broyden rang-1 frissítésének szimmetrikus javítása. Mind szimmetrikusan tartja A-t, és a BFGS/DFP pozitív definitnek is, ha yᵀs > 0."})})]})]})]})}function hi({runs:e,series:n,player:a,targetFrame:i,focus:s,setFocus:r,count:o}){const{t:f}=z();x.useEffect(()=>{a.playing||a.setI(i)},[i]);const m=a.i,h=e[s],d=Math.min(m,h.points.length-1),l={paths:[{pts:h.points.slice(0,d+1),color:ne[s]}],points:[{p:h.points[d],ring:!0,color:ne[s]}],showMin:!0},$=n.map(b=>({...b,upTo:m}));return t.jsxs("div",{children:[t.jsx(ee,{fn:I,overlay:l,height:300}),t.jsx(ce,{series:$,height:220}),t.jsx("div",{className:"plot__legend",children:["broyden","psb","bfgs","dfp"].map(b=>t.jsxs("button",{onClick:()=>r(b),style:{border:0,background:"transparent",cursor:"pointer",fontWeight:s===b?800:500,color:s===b?"var(--ink)":"var(--ink-soft)",display:"inline-flex",alignItems:"center",gap:6},children:[t.jsx("i",{className:"swatch",style:{background:ne[b]}}),me[b]]},b))}),t.jsxs("div",{className:"readout",children:[t.jsxs("span",{children:[t.jsx("span",{className:"k",children:f({en:"showing path",hu:"látható pálya"})})," ",t.jsx("b",{children:me[s]})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"k"})," ",t.jsx("b",{children:d})]}),t.jsxs("span",{children:[t.jsx("span",{className:"k",children:"‖p−p*‖"})," ",t.jsx("b",{children:(h.frames[d].err??0).toExponential(2)})]})]}),t.jsx("div",{className:"controls",children:t.jsx(Y,{i:a.i,count:o,playing:a.playing,onPlay:a.play,onStep:a.step,onReset:a.reset,onScrub:a.setI})})]})}function gi(){return t.jsxs("div",{className:"ch-minimization",children:[t.jsx(qe,{sections:W}),t.jsx(He,{}),t.jsx(za,{}),t.jsx(Ma,{}),t.jsx(Ba,{}),t.jsx(Ra,{}),t.jsx(Ja,{}),t.jsx(ti,{}),t.jsx(mi,{}),t.jsx(Me,{})]})}export{gi as default};
