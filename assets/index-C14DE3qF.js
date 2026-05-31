var ht=Object.defineProperty;var Re=r=>{throw TypeError(r)};var ct=(r,n,e)=>n in r?ht(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e;var k=(r,n,e)=>ct(r,typeof n!="symbol"?n+"":n,e),mt=(r,n,e)=>n.has(r)||Re("Cannot "+e);var Le=(r,n,e)=>n.has(r)?Re("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,e);var re=(r,n,e)=>(mt(r,n,"access private method"),e);import{r as T,j as c,d as H,i as ut,e as $t}from"./index-DRiJIOq0.js";import{M as P}from"./MarkdownView-Cuem79B3.js";import{k as be,a as pt,S as dt}from"./CodeTabs-D798t3dY.js";import{P as ne}from"./plotly.min-DaZtt5jK.js";import"./normalizeMath-CB4aZ_U7.js";import"./index-vOxBBdrg.js";const Oe="lsq.lang",ft=new Set;let Ge=(()=>{try{return localStorage.getItem(Oe)||"en"}catch{return"en"}})();function xt(r){if(!(r!=="hu"&&r!=="en")){Ge=r;try{localStorage.setItem(Oe,r)}catch{}document.documentElement.setAttribute("lang",r),ft.forEach(n=>n(r))}}function y(r){return r==null?"":typeof r=="string"?r:r[Ge]??r.en??r.hu??""}const q={demoReset:{hu:"Visszaállítás",en:"Reset"},demoAddPoint:{hu:"Pont hozzáadása",en:"Add point"},demoBestFit:{hu:"Legjobb illesztés",en:"Best fit"},demoGuess:{hu:"Tippelj!",en:"Guess mode"},degree:{hu:"Fokszám",en:"Degree"},slope:{hu:"Meredekség",en:"Slope"},intercept:{hu:"Tengelymetszet",en:"Intercept"},error:{hu:"Hiba",en:"Error"},optimalError:{hu:"Optimális hiba",en:"Optimal error"},yourError:{hu:"A te hibád",en:"Your error"},linearizedSpace:{hu:"Linearizált tér",en:"Linearized space"},originalSpace:{hu:"Eredeti tér",en:"Original space"},linearError:{hu:"Linearizált hiba",en:"Linearized error"},nonlinearError:{hu:"Eredeti (nemlineáris) hiba",en:"Original (nonlinear) error"},expModel:{hu:"Exponenciális  b·e^{ax}",en:"Exponential  b·e^{ax}"},powerModel:{hu:"Hatvány  b·x^a",en:"Power  b·x^a"},dragHint:{hu:"Húzd a kék pontokat — az illesztés azonnal frissül.",en:"Drag the blue points — the fit updates live."}},gt="lsq.theme",ye=new Set;function bt(r){if(!(r!=="light"&&r!=="dark")){document.documentElement.setAttribute("data-theme",r);try{localStorage.setItem(gt,r)}catch{}ye.forEach(n=>n(r))}}function ve(r){return ye.add(r),()=>ye.delete(r)}function J(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}const yt={id:"intro",title:{hu:"Bevezetés",en:"Introduction"},blocks:[{type:"text",hu:"Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\\mathbf{a}$ vektorban tárolva a $g(x;\\mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i=0,1,\\ldots,n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban.",en:"Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\\mathbf{a}$, and the notation $g(x;\\mathbf{a})$ emphasizes the dependence of $g$ on the parameters $\\mathbf{a}$. Suppose we have measurements $y_i$ ($i=0,1,\\ldots,n$) of the function values at the mesh points $x_i$."},{type:"text",hu:'Ha több mérési értékünk van, mint paraméter, akkor általában nem tudunk olyan görbét rajzolni, amely minden ponton átmegy (a mérési hibák miatt). Ezért a célunk az, hogy megkeressük azokat a paraméter értékeket, amelyekhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.',en:'If we have more measurements than parameters, then in general there is no curve whose graph goes through all the points (due to measurement error). Therefore our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.'},{type:"text",hu:'Nem nyilvánvaló, mit értünk azon, hogy a függvény „legkevésbé" tér el. Lehetséges az illesztés hibáját mérni az alábbi képletekkel:',en:"It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems. Possible error formulas are:"},{type:"math",tex:"F_1(\\mathbf{a}) := \\max\\{|g(x_i;\\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}"},{type:"math",tex:"F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i;\\mathbf{a}) - y_i|."},{type:"text",hu:"A probléma az, hogy sem $F_1$, sem $F_2$ nem differenciálható $\\mathbf{a}$ szerint, ezért nehéz minimalizálni. Ezt kiküszöbölhetjük az ún. **négyzetes hibával**:",en:"The problem is that neither $F_1$ nor $F_2$ is differentiable with respect to $\\mathbf{a}$, so they are hard to minimize. This technicality can be eliminated with the so-called **least square error**:"},{type:"math",tex:"F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i;\\mathbf{a}) - y_i)^2."},{type:"text",hu:"A matematikai feladat tehát az, hogy minimalizáljuk az $F(\\mathbf{a})$ függvényt, és a minimumhelyhez tartozó $\\bar{\\mathbf{a}}$ paraméterekkel definiált $g(x;\\bar{\\mathbf{a}})$ függvényt tekintjük a pontokra legjobban illeszkedő függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**. A fejezetben előbb egyenest, majd tetszőleges polinomot, végül néhány nemlineáris függvényt illesztünk.",en:"The mathematical problem is therefore to minimize $F(\\mathbf{a})$, and consider the graph of $g(x;\\bar{\\mathbf{a}})$ corresponding to the minimum point $\\bar{\\mathbf{a}}$ as the best fitted curve. This is called the **method of least squares**. In this chapter we study line fitting first, then arbitrary polynomials, and finally some nonlinear functions."},{type:"callout",variant:"note",hu:"**Miért a négyzetes hiba?** Differenciálható, így a minimum a parciális deriváltak nullhelyén kereshető; a nagy eltéréseket erősebben bünteti; és — mint látni fogjuk — lineáris paraméterek esetén zárt alakú, egyértelmű megoldást ad.",en:"**Why squared error?** It is differentiable, so the minimum can be found where the partial derivatives vanish; it penalizes large deviations more strongly; and — as we will see — for linearly-appearing parameters it yields a closed-form, unique solution."},{type:"quiz",ref:"intro"}]},_t={id:"line",title:{hu:"9.1. Egyenes illesztése",en:"9.1. Line Fitting"},blocks:[{type:"text",hu:"Adottak $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ pontok, ahol az $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése minimális:",en:"Given data points $(x_i, y_i)$, $i = 0, 1, \\ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function $g(x) = ax + b$ which minimizes the least square error:"},{type:"math",tex:"F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2. \\tag{1}"},{type:"text",hu:"Az $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint:",en:"The function $F$ is continuously partially differentiable with respect to $a$ and $b$:"},{type:"math",tex:"\\begin{aligned} \\frac{\\partial F}{\\partial a}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i)x_i,\\\\ \\frac{\\partial F}{\\partial b}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i). \\end{aligned} \\tag{2}"},{type:"text",hu:"A (2) deriváltakat nullával egyenlővé téve és átrendezve kapjuk az ún. **Gauss-féle normálegyenleteket**:",en:"Making the partial derivatives in (2) equal to 0 and rearranging gives the so-called **Gaussian normal equations**:"},{type:"math",tex:"\\begin{aligned} a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i &= \\sum_{i=0}^{n} x_i y_i,\\\\ a\\sum_{i=0}^{n} x_i + b(n+1) &= \\sum_{i=0}^{n} y_i. \\end{aligned} \\tag{3}"},{type:"text",hu:"Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Akkor és csak akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem nulla:",en:"This is a linear system for $a$ and $b$. It is solvable if and only if the determinant of its coefficient matrix is nonzero:"},{type:"math",tex:"d := \\det\\begin{pmatrix} \\sum_{i=0}^{n} x_i^2 & \\sum_{i=0}^{n} x_i \\\\ \\sum_{i=0}^{n} x_i & n+1 \\end{pmatrix} = (n+1)\\sum_{i=0}^{n} x_i^2 - \\left(\\sum_{i=0}^{n} x_i\\right)^2."},{type:"text",hu:"A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség szerint",en:"The Cauchy–Bunyakovsky–Schwarz inequality yields"},{type:"math",tex:"\\left(\\sum_{i=0}^{n} x_i\\right)^2 = \\left(\\sum_{i=0}^{n} 1\\cdot x_i\\right)^2 \\le \\sum_{i=0}^{n} 1 \\sum_{i=0}^{n} x_i^2 = (n+1)\\sum_{i=0}^{n} x_i^2,"},{type:"text",hu:"ezért $d \\ge 0$. Ha legalább két $x_i$ különbözik, akkor a szigorú egyenlőtlenség áll fenn, azaz $d > 0$. Így a (3) rendszernek pontosan egy megoldása van:",en:"therefore $d \\ge 0$. If at least two mesh points differ, the strict inequality $d > 0$ holds. Hence system (3) has a unique solution:"},{type:"math",tex:"\\bar{a} = \\frac{(n+1)\\left(\\sum x_i y_i\\right) - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}, \\qquad \\bar{b} = \\frac{\\left(\\sum x_i^2\\right)\\left(\\sum y_i\\right) - \\left(\\sum x_i y_i\\right)\\left(\\sum x_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}."},{type:"text",hu:"Az $F$-nek az $(\\bar a, \\bar b)$ pontban lokális szélsőértéke van, ha a Hesse-determináns pozitív:",en:"$F$ has a local extremum at $(\\bar a, \\bar b)$ if the Hessian determinant is positive:"},{type:"math",tex:"D(\\bar a,\\bar b) := \\frac{\\partial^2 F}{\\partial a^2}\\cdot\\frac{\\partial^2 F}{\\partial b^2} - \\left(\\frac{\\partial^2 F}{\\partial a\\,\\partial b}\\right)^2 > 0."},{type:"text",hu:"Mivel",en:"Since"},{type:"math",tex:"\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum_{i=0}^{n} x_i^2,\\quad \\frac{\\partial^2 F}{\\partial b^2} = 2(n+1),\\quad \\frac{\\partial^2 F}{\\partial a\\,\\partial b} = 2\\sum_{i=0}^{n} x_i,"},{type:"text",hu:"ezért $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, és mivel $\\frac{\\partial^2 F}{\\partial a^2} > 0$, az $(\\bar a, \\bar b)$ pont lokális — és (kvadratikus $F$ miatt) globális — minimum.",en:"we get $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, and since $\\frac{\\partial^2 F}{\\partial a^2} > 0$, the point $(\\bar a, \\bar b)$ is a local — and (as $F$ is quadratic) global — minimum."},{type:"theorem",label:{hu:"9.1. Tétel",en:"Theorem 9.1"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \\ne x_j$. Ekkor a $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ szélsőérték-feladatnak létezik egyértelmű megoldása, amely teljesíti a (3) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) such that there exist $i$ and $j$ with $x_i \\ne x_j$. Then the problem $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ has a unique solution, which satisfies the Gaussian normal equations (3)."},{type:"example",label:{hu:"9.2. Példa",en:"Example 9.2"},hu:"Keressük meg az alábbi adatokra legjobban illeszkedő egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ értékeket, és az utolsó sorban az összegeket.",en:"Find the line of best fit to the data below. We compute $x_i^2$ and $x_i y_i$ in separate columns, and the column sums in the last row."},{type:"table",caption:{hu:"9.1. táblázat — Egyenes illesztése",en:"Table 9.1 — Line fitting"},headers:["$x_i$","$y_i$","$x_i^2$","$x_i y_i$"],rows:[["-1.0","0.0","1.00","0.00"],["1.0","1.2","1.00","1.20"],["2.5","1.9","6.25","4.75"],["3.0","2.5","9.00","7.50"],["4.0","3.1","16.00","12.40"],["4.5","3.2","20.25","14.40"],["6.0","4.5","36.00","27.00"]],totals:["20.0","16.4","89.50","67.25"]},{type:"text",hu:"Az összegeket a (3) normálegyenletekbe helyettesítve: $89.5a + 20.0b = 67.25$ és $20.0a + 7b = 16.4$, amelynek megoldása $a = 0.630243$, $b = 0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.",en:"Substituting the sums into the normal equations (3): $89.5a + 20.0b = 67.25$ and $20.0a + 7b = 16.4$, with solution $a = 0.630243$, $b = 0.542163$. The error of the fitting is $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$."},{type:"demo",component:"line",caption:{hu:"9.1. ábra — Egyenes illesztése (interaktív)",en:"Figure 9.1 — Line fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen egyenest a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Find the line of best fit to the data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["0.0","-1.8"],["1.0","1.3"],["1.5","2.5"],["2.0","3.9"],["3.0","8.3"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["-1.0","4.2"],["1.0","2.1"],["2.0","1.3"],["3.0","2.1"],["4.0","2.8"],["5.0","-2.1"],["6.0","-3.0"]]},{tag:"(c)",headers:["$x_i$","$y_i$"],cols:[["-1.0","-0.1"],["1.0","3.4"],["3.0","7.3"],["5.0","15.1"],["9.0","29.1"],["10.0","35.6"],["13.0","56.3"]]}],solution:`**Method (worked example).** For each data set, form the sums $\\sum x_i$, $\\sum x_i^2$, $\\sum y_i$, $\\sum x_i y_i$, solve the $2\\times2$ normal equations for $\\bar a,\\bar b$, then evaluate $SSR=\\sum(\\bar a x_i+\\bar b-y_i)^2$ and $RMSE=\\sqrt{SSR/(n+1)}$.

**Example A — data** $x_i:-2,-1,0,1,2$, $\\ y_i:1,2,2.5,2,1$.

Sums: $n+1=5$, $\\sum x_i=0$, $\\sum x_i^2=10$, $\\sum y_i=8.5$, $\\sum x_iy_i=0$.

Normal equations $\\left(\\begin{smallmatrix}10 & 0\\\\ 0 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}0\\\\ 8.5\\end{smallmatrix}\\right)$ give $a=0$, $b=1.7$, i.e. the horizontal line $y=1.7$.

$SSR=(1.7-1)^2+(1.7-2)^2+(1.7-2.5)^2+(1.7-2)^2+(1.7-1)^2=1.80$, $\\ RMSE=\\sqrt{1.80/5}=0.60$.

**Example B — data** $x_i:0,1,2,3,4$, $\\ y_i:1,2.9,5.1,7,9.1$.

Sums: $\\sum x_i=10$, $\\sum x_i^2=30$, $\\sum y_i=25.1$, $\\sum x_iy_i=70.5$. Determinant $d=30\\cdot5-10\\cdot10=50$.

$a=\\dfrac{5(70.5)-10(25.1)}{50}=2.03$, $\\ b=\\dfrac{30(25.1)-10(70.5)}{50}=0.96$, so $y=2.03x+0.96$, with $SSR\\approx0.019$, $RMSE\\approx0.062$ (excellent fit).

**Uniqueness of the fit.** By Cauchy–Schwarz with $u_i=1,\\ v_i=x_i$: $(\\sum x_i)^2\\le(n+1)\\sum x_i^2$, so $d=(n+1)\\sum x_i^2-(\\sum x_i)^2\\ge0$, with strict inequality (hence a unique solution) whenever at least two $x_i$ differ.`},{type:"glossary",deck:"line"},{type:"flashcards",deck:"line"},{type:"quiz",ref:"line"}]},kt={id:"polynomial",title:{hu:"9.2. Polinom illesztése",en:"9.2. Polynomial Curve Fitting"},blocks:[{type:"text",hu:"Most $m$-edfokú polinom illesztését vizsgáljuk a megadott $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontokra: keresünk olyan $a_m, a_{m-1}, \\ldots, a_0$ számokat, amelyek minimalizálják az",en:"Now we study polynomial curve fitting of degree $m$ to the data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$): we look for parameters $a_m, a_{m-1}, \\ldots, a_0$ which minimize"},{type:"math",tex:"F(a_m,\\ldots,a_0) := \\sum_{i=0}^{n} \\left(a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_1 x_i + a_0 - y_i\\right)^2"},{type:"text",hu:"$m+1$-változós függvényt. Ha $n \\le m$, akkor a pontokon átmenő $m$-edfokú polinom létezik ($F$ minimuma 0), amit interpolációval kaphatunk meg. Ezért az $m < n$ eset az érdekes, ekkor $F$ általában nem veszi fel a 0 értéket.",en:"a function of $m+1$ variables. If $n \\le m$, then a polynomial of degree $m$ interpolates the data (the minimum of $F$ is 0), obtainable by interpolation. So the interesting case is $m < n$, where $F$ is generally positive."},{type:"text",hu:"A szélsőérték ott lehet, ahol minden parciális derivált nulla. Ezeket nullával egyenlővé téve és átrendezve kapjuk a **normálegyenleteket** (4):",en:"An extremum can occur only where all partial derivatives are 0. Setting them to zero and rearranging gives the **normal equations** (4):"},{type:"math",tex:"\\begin{aligned} a_m\\!\\sum x_i^{2m} + \\cdots + a_0\\!\\sum x_i^{m} &= \\sum x_i^{m} y_i\\\\ a_m\\!\\sum x_i^{2m-1} + \\cdots + a_0\\!\\sum x_i^{m-1} &= \\sum x_i^{m-1} y_i\\\\ &\\vdots\\\\ a_m\\!\\sum x_i^{m} + \\cdots + a_0(n+1) &= \\sum y_i \\end{aligned} \\tag{4}"},{type:"text",hu:"A (4) rendszer együtthatómátrixa:",en:"The coefficient matrix of system (4) is:"},{type:"math",tex:"\\mathbf{A} = \\begin{pmatrix} \\sum x_i^{2m} & \\sum x_i^{2m-1} & \\cdots & \\sum x_i^{m}\\\\ \\sum x_i^{2m-1} & \\sum x_i^{2m-2} & \\cdots & \\sum x_i^{m-1}\\\\ \\vdots & \\vdots & & \\vdots\\\\ \\sum x_i^{m} & \\sum x_i^{m-1} & \\cdots & \\sum 1 \\end{pmatrix}"},{type:"text",hu:"Belátjuk, hogy $\\mathbf{A}$ invertálható, mert **pozitív definit**. A $jk$-adik eleme $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Legyen $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Ekkor",en:"We show $\\mathbf{A}$ is invertible because it is **positive definite**. Its $jk$-th element is $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Let $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Then"},{type:"math",tex:"\\mathbf{z}^T \\mathbf{A} \\mathbf{z} = \\sum_{j=1}^{m+1}\\sum_{k=1}^{m+1}\\sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k = \\sum_{i=0}^{n}\\left(\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\\right)^2 \\ge 0."},{type:"text",hu:"Ha $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, akkor $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ minden $i$-re. Ha az $x_i$-k páronként különböznek, akkor a $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ legfeljebb $m$-edfokú polinomnak $n+1$ különböző gyöke van. Ha $m \\le n$, az algebra alaptétele szerint $p \\equiv 0$, azaz $z_j = 0$ minden $j$-re. Tehát $\\mathbf{A}$ pozitív definit.",en:"If $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, then $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ for all $i$. If the $x_i$ are pairwise distinct, the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ of degree at most $m$ has $n+1$ distinct roots. If $m \\le n$, the fundamental theorem of algebra gives $p \\equiv 0$, i.e. $z_j = 0$ for all $j$. Hence $\\mathbf{A}$ is positive definite."},{type:"text",hu:"Mivel $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, azaz $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, az $F$-nek $\\bar{\\mathbf{a}}$-ban lokális — és kvadratikus volta miatt globális — minimuma van.",en:"Since $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, i.e. $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, the function $F$ has a local — and, being quadratic, global — minimum at $\\bar{\\mathbf{a}}$."},{type:"theorem",label:{hu:"9.3. Tétel",en:"Theorem 9.3"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \\le n$. Ekkor a $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ feladatnak létezik egyértelmű megoldása, amely teljesíti a (4) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) with pairwise distinct mesh points $x_i$, and let $m \\le n$. Then the problem $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ has a unique solution, which satisfies the normal equations (4)."},{type:"example",label:{hu:"9.4. Példa",en:"Example 9.4"},hu:"Illesszünk parabolát az alábbi adatokra. A táblázatban kiszámoljuk a szükséges hatványösszegeket.",en:"Fit a parabola to the data below. The table computes the required power sums."},{type:"table",caption:{hu:"9.2. táblázat — Parabola illesztése",en:"Table 9.2 — Parabola fitting"},headers:["$x_i$","$y_i$","$x_i^4$","$x_i^3$","$x_i^2$","$x_i^2 y_i$","$x_i y_i$"],rows:[["-1.0","1.4","1.0000","-1.000","1.00","1.400","-1.40"],["0.0","1.9","0.0000","0.000","0.00","0.000","0.00"],["0.5","1.6","0.0625","0.125","0.25","0.400","0.80"],["1.0","1.7","1.0000","1.000","1.00","1.700","1.70"],["2.0","0.2","16.0000","8.000","4.00","0.800","0.40"],["2.5","-0.1","39.0625","15.625","6.25","-0.625","-0.25"],["3.0","-2.0","81.0000","27.000","9.00","-18.000","-6.00"]],totals:["8.0","4.7","138.1250","50.750","21.50","-14.325","-4.75"]},{type:"text",hu:"A (4) egyenletrendszer: $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Megoldása $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. Az illesztés hibája $0.0964456$.",en:"System (4): $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Solution $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. The fitting error is $0.0964456$."},{type:"demo",component:"polynomial",caption:{hu:"9.2. ábra — Polinom illesztése (interaktív)",en:"Figure 9.2 — Polynomial fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen parabolát a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Fit a parabola to the given data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["-2.0","-2.1"],["-1.0","1.4"],["1.0","0.5"],["2.0","-2.5"],["3.0","-7.2"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["1.0","2.5"],["2.0","1.2"],["3.0","-2.0"],["4.0","3.9"],["5.0","6.2"],["6.0","8.3"]]}],solution:`**Method.** For a parabola $y=ax^2+bx+c$ form the $3\\times3$ normal equations from the sums $\\sum x_i^k$ ($k=0,\\dots,4$) and $\\sum x_i^k y_i$ ($k=0,1,2$), then solve for $a,b,c$ and evaluate $SSR=\\sum(ax_i^2+bx_i+c-y_i)^2$.

**Example A — data** $x_i:-2,-1,1,2,3$, $\\ y_i:-2.1,1.4,0.5,-2.5,-7.2$.

Sums: $n+1=5$, $\\sum x_i=3$, $\\sum x_i^2=19$, $\\sum x_i^3=27$, $\\sum x_i^4=115$, $\\sum y_i=-9.9$, $\\sum x_iy_i=-23.3$, $\\sum x_i^2y_i=-81.3$.

Normal equations $\\left(\\begin{smallmatrix}115 & 27 & 19\\\\ 27 & 19 & 3\\\\ 19 & 3 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\\\ c\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}-81.3\\\\ -23.3\\\\ -9.9\\end{smallmatrix}\\right)$ give $a\\approx-0.985$, $b\\approx-0.321$, $c\\approx0.156$, so $y=-0.985x^2-0.321x+0.156$ with $SSR\\approx0.142$.

**Example B — data** $x_i:1,\\dots,6$, $\\ y_i:2.5,1.2,-2.0,3.9,6.2,8.3$.

Sums: $\\sum x_i=21$, $\\sum x_i^2=91$, $\\sum x_i^3=441$, $\\sum x_i^4=2275$, $\\sum y_i=20.1$, $\\sum x_iy_i=106.5$, $\\sum x_i^2y_i=553.5$, giving $a\\approx0.304$, $b\\approx-1.286$, $c\\approx2.929$, i.e. $y=0.304x^2-1.286x+2.929$, $SSR\\approx2.847$.

**Cubic fit** to Example A data ($g(x)=ax^3+bx^2+cx+d$): with $\\sum x_i^5=243$, $\\sum x_i^6=859$, $\\sum x_i^3y_i=-198.5$ the $4\\times4$ system yields $a\\approx-0.053$, $b\\approx-0.893$, $c\\approx-0.175$, $d\\approx0.089$, $SSR\\approx0.128$ (slightly better than the parabola).

**Positive definiteness.** With $A_{jk}=\\sum_i x_i^{2m+2-j-k}$, $\\ \\mathbf z^TA\\mathbf z=\\sum_i\\left(\\sum_j z_j x_i^{m+1-j}\\right)^2\\ge0$; equality forces a degree-$\\le m$ polynomial to vanish at $m+1$ distinct nodes, hence $\\mathbf z=0$. So $A$ is positive definite.`},{type:"glossary",deck:"polynomial"},{type:"flashcards",deck:"polynomial"},{type:"quiz",ref:"polynomial"}]},zt={id:"nonlinear",title:{hu:"9.3. Nemlineáris függvény illesztése",en:"9.3. Special Nonlinear Curve Fitting"},blocks:[{type:"text",hu:"A módszer kiterjeszthető nemlineáris függvényekre is, ahol a paraméterek lineárisan szerepelnek — ekkor a normálegyenletek lineárisak. Az általános esetben azonban nemlineárisak lehetnek. Tekintsünk egy $b e^{ax}$ alakú exponenciális függvényt. A négyzetes hiba:",en:"The method extends to nonlinear functions where the parameters appear linearly — then the normal equations are linear. In general, though, they can be nonlinear. Consider an exponential function of the form $b e^{ax}$. The least square error is:"},{type:"math",tex:"F(a, b) = \\sum_{i=0}^{n} (b e^{a x_i} - y_i)^2,"},{type:"text",hu:"amelynek kritikus pontjait a következő **nemlineáris** rendszer adja:",en:"whose critical points are the solutions of the following **nonlinear** system:"},{type:"math",tex:"\\begin{aligned} 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, b e^{a x_i} x_i &= 0,\\\\ 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, e^{a x_i} &= 0. \\end{aligned}"},{type:"text",hu:"Ezt analitikusan nem tudjuk megoldani. Numerikusan megoldható, de a gyakorlatban gyakran a **linearizációs módszert** használjuk.",en:"We cannot solve this analytically. It can be solved numerically, but in practice we often use the **method of linearization**."},{type:"callout",variant:"tip",hu:"**Linearizáció ($be^{ax}$).** Vegyük mindkét oldal logaritmusát: $\\ln y = \\ln b + a x$. Új változók: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Illesszünk $Y = AX + B$ egyenest az $(x_i, \\ln y_i)$ pontokra. Ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($be^{ax}$).** Take the logarithm of both sides: $\\ln y = \\ln b + a x$. New variables: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Fit a line $Y = AX + B$ to the points $(x_i, \\ln y_i)$. Then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"text",hu:"Megjegyzés: a linearizált illesztés nem oldja meg pontosan az eredeti nemlineáris feladatot, de könnyen számolható, ezért a gyakorlatban hasznos.",en:"Note: the linearized fit is not the exact solution of the original nonlinear problem, but it is easy to compute and thus useful in practice."},{type:"example",label:{hu:"9.5. Példa",en:"Example 9.5"},hu:"Illesszünk $b e^{ax}$ alakú függvényt az alábbi pontokra. A linearizált adatokat a táblázat tartalmazza.",en:"Fit a function of the form $b e^{ax}$ to the points below. The linearized data are in the table."},{type:"table",caption:{hu:"9.3. táblázat — $b e^{ax}$ illesztése",en:"Table 9.3 — Fitting $b e^{ax}$"},headers:["$x_i$","$y_i$","$\\ln y_i$","$x_i^2$","$x_i \\ln y_i$"],rows:[["0.0","0.3","-1.203973","0.00","0.000000"],["1.0","0.7","-0.356675","1.00","-0.356675"],["1.5","0.9","-0.105361","2.25","-0.158041"],["2.0","1.2","0.182322","4.00","0.364643"],["3.0","1.8","0.587787","9.00","1.763360"],["4.0","2.7","0.993252","16.00","3.973007"]],totals:["11.5","","0.097352","32.25","5.586294"]},{type:"text",hu:"A normálegyenletek $32.25A + 11.5B = 5.586294$ és $11.5A + 6B = 0.097352$ megoldása $A = 0.528951$, $B = -0.997597$, azaz a függvény $y = 0.368765\\, e^{0.528951 x}$. A linearizált hiba $0.095396$, az eredeti (nemlineáris) hiba $0.165543$.",en:"The normal equations $32.25A + 11.5B = 5.586294$ and $11.5A + 6B = 0.097352$ give $A = 0.528951$, $B = -0.997597$, i.e. $y = 0.368765\\, e^{0.528951 x}$. The linearized error is $0.095396$, and the original (nonlinear) error is $0.165543$."},{type:"callout",variant:"tip",hu:"**Linearizáció ($bx^a$).** Az $y = b x^a$ egyenletből $\\ln y = a \\ln x + \\ln b$, így $\\ln y$ lineárisan függ $\\ln x$-től. Illesszünk egyenest az $(\\ln x_i, \\ln y_i)$ pontokra; ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($bx^a$).** From $y = b x^a$ we get $\\ln y = a \\ln x + \\ln b$, so $\\ln y$ depends linearly on $\\ln x$. Fit a line to $(\\ln x_i, \\ln y_i)$; then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"example",label:{hu:"9.6. Példa",en:"Example 9.6"},hu:"Illesszünk $b x^a$ alakú hatványfüggvényt az alábbi pontokra.",en:"Fit a power function of the form $b x^a$ to the points below."},{type:"table",caption:{hu:"9.4. táblázat — $b x^a$ illesztése",en:"Table 9.4 — Fitting $b x^a$"},headers:["$x_i$","$y_i$","$\\ln x_i$","$\\ln y_i$","$(\\ln x_i)^2$","$\\ln x_i \\ln y_i$"],rows:[["0.5","0.7","-0.693147","-0.356675","0.480453","0.247228"],["1.0","1.1","0.000000","0.095310","0.000000","0.000000"],["1.5","1.6","0.405465","0.470004","0.164402","0.190570"],["2.5","2.1","0.916291","0.741937","0.839589","0.679830"],["3.0","2.3","1.098612","0.832909","1.206949","0.915044"]],totals:["","","1.727221","1.783485","2.691393","2.032673"]},{type:"text",hu:"A normálegyenletek $2.691393A + 1.727221B = 2.032673$ és $1.727221A + 5B = 1.783485$ megoldása $A = 0.676257$, $B = 0.123088$. Ebből $a = 0.676257$, $b = e^{0.123088} = 1.130984$, azaz $y = 1.130984\\, x^{0.676257}$. A linearizált hiba $0.007279$, az eredeti hiba $0.019616$.",en:"The normal equations $2.691393A + 1.727221B = 2.032673$ and $1.727221A + 5B = 1.783485$ give $A = 0.676257$, $B = 0.123088$. Hence $a = 0.676257$, $b = e^{0.123088} = 1.130984$, i.e. $y = 1.130984\\, x^{0.676257}$. The linearized error is $0.007279$, the original error $0.019616$."},{type:"demo",component:"nonlinear",caption:{hu:"9.3.–9.4. ábra — Nemlineáris illesztés (interaktív)",en:"Figures 9.3–9.4 — Nonlinear fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen a megadott típusú függvényt az adatokra, és számítsa ki az illesztés hibáját. Oldja meg az eredeti nemlineáris feladatot is Newton-módszerrel!",en:"Fit the indicated function type to the data and compute the error. Also solve the original nonlinear problem with Newton’s method!"},items:[{tag:"(a) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["-2.0","0.6"],["-1.0","0.9"],["1.0","1.6"],["2.0","2.3"],["3.0","2.9"]]},{tag:"(b) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.3"],["1.5","1.6"],["2.0","1.9"],["2.5","2.2"],["3.0","3.0"],["3.5","4.1"]]},{tag:"(c) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.6"],["3.0","1.9"],["4.0","2.2"],["5.0","2.3"],["6.0","3.4"],["9.0","4.9"]]},{tag:"(d) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","0.7"],["2.0","2.8"],["3.0","7.5"],["4.0","14.8"],["5.0","25.6"]]}],solution:`**Exponential fit $y=be^{ax}$.** Linearize with $Y=\\ln y$, $X=x$, $Y=AX+B$ where $A=a$, $B=\\ln b$, then fit a line to $(x_i,\\ln y_i)$.

*Example (a) data* $x_i:-2,-1,1,2,3$, $\\ y_i:0.6,0.9,1.6,2.3,2.9$. Transformed sums: $\\sum X_i=3$, $\\sum X_i^2=19$, $\\sum Y_i=1.752$, $\\sum X_iY_i=6.458$; determinant $d=86$. Then $A=\\dfrac{5(6.458)-3(1.752)}{86}=0.314$, $B=\\dfrac{19(1.752)-3(6.458)}{86}=0.162$, so $a=0.314$, $b=e^{0.162}=1.176$, giving $y=1.176e^{0.314x}$ (linear-space error $\\approx0.0234$, original error $\\approx0.0412$).

*Example (b)* gives $A\\approx0.436$, $B\\approx-0.201$, i.e. $y=0.818e^{0.436x}$.

**Power fit $y=bx^a$.** Linearize with $Y=\\ln y$, $X=\\ln x$.

*Example (c) data* $x_i:1,3,4,5,6,9$, $\\ y_i:1.6,1.9,2.2,2.3,3.4,4.9$. Sums: $\\sum X_i=8.083$, $\\sum X_i^2=14.234$, $\\sum Y_i=5.546$, $\\sum X_iY_i=9.428$, giving $A\\approx0.548$, $B\\approx0.186$, so $a=0.548$, $b=e^{0.186}=1.204$: $y=1.204x^{0.548}$ (error $\\approx0.127$).

*Example (d)* gives $A\\approx1.987\\approx2$, $B\\approx-0.147$: $y=0.863x^{1.987}\\approx0.863x^2$ — the data is essentially quadratic.

**Direct nonlinear minimization (Newton).** Minimize $F(a,b)=\\sum(be^{ax_i}-y_i)^2$ with gradient $\\partial_a F=2\\sum(be^{ax_i}-y_i)be^{ax_i}x_i$, $\\partial_b F=2\\sum(be^{ax_i}-y_i)e^{ax_i}$ and the corresponding Hessian, iterating $\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k+1)}=\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k)}-[F'']^{-1}\\nabla F$ from the linearization guess. For (a): $a\\approx0.318$, $b\\approx1.169$, $SSR\\approx0.0398$ (slightly better than linearization’s $0.0412$ — about a 3% improvement). Linearization is simple and gives an excellent initial guess; its drawback is minimizing log-space error, which is biased for additive noise.

**Reciprocal model $y=1/(a+bx)$.** Linearize as $1/y=a+bx$ and fit a line to $(x_i,1/y_i)$; e.g. data $x_i:1,\\dots,5$, $\\ y_i:0.50,0.33,0.25,0.20,0.17$ transform to $Y_i:2.00,3.03,4.00,5.00,5.88$, giving $Y=0.98+0.99X$, hence $y\\approx1/(1+x)$.`},{type:"glossary",deck:"nonlinear"},{type:"flashcards",deck:"nonlinear"},{type:"quiz",ref:"nonlinear"}]},Xe=[yt,_t,kt,zt];Xe.map(r=>r.id);const Ye="lsq.progress",vt=new Set,Ne=()=>({completed:{},xp:0});let Y=(()=>{try{const r=localStorage.getItem(Ye);if(r)return{...Ne(),...JSON.parse(r)}}catch{}return Ne()})();function wt(){try{localStorage.setItem(Ye,JSON.stringify(Y))}catch{}vt.forEach(r=>r(Y))}function qt(r){return!!Y.completed[r]}function jt(r,n=50){Y.completed[r]||(Y.completed[r]=!0,Y.xp+=n,wt())}function At(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R({text:r}){const n=T.useMemo(()=>(r||"").split(/(\$[^$]+\$)/g).map(e=>e.length>1&&e.startsWith("$")&&e.endsWith("$")?be.renderToString(e.slice(1,-1),{throwOnError:!1}):At(e)).join(""),[r]);return c.jsx("span",{dangerouslySetInnerHTML:{__html:n}})}function Ze(r,n){const e=n.length,t=r.map((a,i)=>[...a,n[i]]);for(let a=0;a<e;a++){let i=a;for(let o=a+1;o<e;o++)Math.abs(t[o][a])>Math.abs(t[i][a])&&(i=o);if(Math.abs(t[i][a])<1e-15)throw new Error("Singular matrix in solveLinearSystem");[t[a],t[i]]=[t[i],t[a]];for(let o=a+1;o<e;o++){const l=t[o][a]/t[a][a];if(l!==0)for(let m=a;m<=e;m++)t[o][m]-=l*t[a][m]}}const s=new Array(e).fill(0);for(let a=e-1;a>=0;a--){let i=t[a][e];for(let o=a+1;o<e;o++)i-=t[a][o]*s[o];s[a]=i/t[a][a]}return s}function Z(r,n){const e=r.length;let t=0,s=0,a=0,i=0;for(let m=0;m<e;m++)t+=r[m],s+=n[m],a+=r[m]*r[m],i+=r[m]*n[m];const[o,l]=Ze([[a,t],[t,e]],[i,s]);return{a:o,b:l}}function Tt(r,n,e){const t=r.length,s=e+1,a=new Array(2*e+1).fill(0);for(let l=0;l<t;l++){let m=1;for(let h=0;h<=2*e;h++)a[h]+=m,m*=r[l]}const i=new Array(s).fill(0);for(let l=0;l<t;l++){let m=1;for(let h=0;h<s;h++)i[h]+=m*n[l],m*=r[l]}const o=[];for(let l=0;l<s;l++){const m=[];for(let h=0;h<s;h++)m.push(a[l+h]);o.push(m)}return Ze(o,i)}function Ft(r,n){const e=n.map(a=>Math.log(a)),{a:t,b:s}=Z(r,e);return{a:t,b:Math.exp(s)}}function St(r,n){const e=r.map(i=>Math.log(i)),t=n.map(i=>Math.log(i)),{a:s,b:a}=Z(e,t);return{a:s,b:Math.exp(a)}}function D(r,n,e){let t=0;for(let s=0;s<n.length;s++){const a=r(n[s])-e[s];t+=a*a}return t}function Be(r,n){let e=0;for(let t=r.length-1;t>=0;t--)e=e*n+r[t];return e}var Et=function(n,e,t){for(var s=t,a=0,i=n.length;s<e.length;){var o=e[s];if(a<=0&&e.slice(s,s+i)===n)return s;o==="\\"?s++:o==="{"?a++:o==="}"&&a--,s++}return-1},It=function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Mt=/^\\begin{/,Rt=function(n,e){for(var t,s=[],a=new RegExp("("+e.map(m=>It(m.left)).join("|")+")");t=n.search(a),t!==-1;){t>0&&(s.push({type:"text",data:n.slice(0,t)}),n=n.slice(t));var i=e.findIndex(m=>n.startsWith(m.left));if(t=Et(e[i].right,n,e[i].left.length),t===-1)break;var o=n.slice(0,t+e[i].right.length),l=Mt.test(o)?o:n.slice(e[i].left.length,t);s.push({type:"math",data:l,rawData:o,display:e[i].display}),n=n.slice(t+e[i].right.length)}return n!==""&&s.push({type:"text",data:n}),s},Lt=function(n,e){var t=Rt(n,e.delimiters);if(t.length===1&&t[0].type==="text")return null;for(var s=document.createDocumentFragment(),a=0;a<t.length;a++)if(t[a].type==="text")s.appendChild(document.createTextNode(t[a].data));else{var i=document.createElement("span"),o=t[a].data;e.displayMode=t[a].display;try{e.preProcess&&(o=e.preProcess(o)),be.render(o,i,e)}catch(l){if(!(l instanceof be.ParseError))throw l;e.errorCallback("KaTeX auto-render: Failed to parse `"+t[a].data+"` with ",l),s.appendChild(document.createTextNode(t[a].rawData));continue}s.appendChild(i)}return s},Qe=function(n,e){for(var t=function(i){var o=n.childNodes[i];if(o.nodeType===3){for(var l,m=(l=o.textContent)!=null?l:"",h=o.nextSibling,u=0;h&&h.nodeType===Node.TEXT_NODE;){var $;m+=($=h.textContent)!=null?$:"",h=h.nextSibling,u++}var d=Lt(m,e);if(d){for(var p=0;p<u;p++)o.nextSibling.remove();i+=d.childNodes.length-1,n.replaceChild(d,o)}else i+=u}else if(o.nodeType===1){var f=" "+o.className+" ",x=!e.ignoredTags.has(o.nodeName.toLowerCase())&&e.ignoredClasses.every(g=>!f.includes(" "+g+" "));x&&Qe(o,e)}s=i},s=0;s<n.childNodes.length;s++)t(s)},Nt=function(n,e){if(!n)throw new Error("No element provided to render");var t={};Object.assign(t,e),t.delimiters=t.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],t.ignoredTags=new Set((e==null?void 0:e.ignoredTags)||["script","noscript","style","textarea","pre","code","option"]),t.ignoredClasses=t.ignoredClasses||[],t.errorCallback=t.errorCallback||console.error,t.macros=t.macros||{},Qe(n,t)};function we(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let X=we();function Ke(r){X=r}const Ue=/[&<>"']/,Bt=new RegExp(Ue.source,"g"),Je=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ct=new RegExp(Je.source,"g"),Wt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ce=r=>Wt[r];function F(r,n){if(n){if(Ue.test(r))return r.replace(Bt,Ce)}else if(Je.test(r))return r.replace(Ct,Ce);return r}const Pt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Vt(r){return r.replace(Pt,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Ht=/(^|[^\[])\^/g;function _(r,n){let e=typeof r=="string"?r:r.source;n=n||"";const t={replace:(s,a)=>{let i=typeof a=="string"?a:a.source;return i=i.replace(Ht,"$1"),e=e.replace(s,i),t},getRegex:()=>new RegExp(e,n)};return t}function We(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const ee={exec:()=>null};function Pe(r,n){const e=r.replace(/\|/g,(a,i,o)=>{let l=!1,m=i;for(;--m>=0&&o[m]==="\\";)l=!l;return l?"|":" |"}),t=e.split(/ \|/);let s=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;s<t.length;s++)t[s]=t[s].trim().replace(/\\\|/g,"|");return t}function oe(r,n,e){const t=r.length;if(t===0)return"";let s=0;for(;s<t&&r.charAt(t-s-1)===n;)s++;return r.slice(0,t-s)}function Dt(r,n){if(r.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<r.length;t++)if(r[t]==="\\")t++;else if(r[t]===n[0])e++;else if(r[t]===n[1]&&(e--,e<0))return t;return-1}function Ve(r,n,e,t){const s=n.href,a=n.title?F(n.title):null,i=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:e,href:s,title:a,text:i,tokens:t.inlineTokens(i)};return t.state.inLink=!1,o}return{type:"image",raw:e,href:s,title:a,text:F(i)}}function Ot(r,n){const e=r.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(s=>{const a=s.match(/^\s+/);if(a===null)return s;const[i]=a;return i.length>=t.length?s.slice(t.length):s}).join(`
`)}class ce{constructor(n){k(this,"options");k(this,"rules");k(this,"lexer");this.options=n||X}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:oe(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],s=Ot(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const s=oe(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=oe(t.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(t);return this.lexer.state.top=s,{type:"blockquote",raw:e[0],tokens:a,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const s=t.length>1,a={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");const i=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",m=!1;for(;n;){let h=!1;if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,g=>" ".repeat(3*g.length)),$=n.split(`
`,1)[0],d=0;this.options.pedantic?(d=2,l=u.trimStart()):(d=e[2].search(/[^ ]/),d=d>4?1:d,l=u.slice(d),d+=e[1].length);let p=!1;if(!u&&/^ *$/.test($)&&(o+=$+`
`,n=n.substring($.length+1),h=!0),!h){const g=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;n;){const A=n.split(`
`,1)[0];if($=A,this.options.pedantic&&($=$.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),z.test($)||w.test($)||g.test($)||v.test(n))break;if($.search(/[^ ]/)>=d||!$.trim())l+=`
`+$.slice(d);else{if(p||u.search(/[^ ]/)>=4||z.test(u)||w.test(u)||v.test(u))break;l+=`
`+$}!p&&!$.trim()&&(p=!0),o+=A+`
`,n=n.substring(A.length+1),u=$.slice(d)}}a.loose||(m?a.loose=!0:/\n *\n *$/.test(o)&&(m=!0));let f=null,x;this.options.gfm&&(f=/^\[[ xX]\] /.exec(l),f&&(x=f[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:o,task:!!f,checked:x,loose:!1,text:l,tokens:[]}),a.raw+=o}a.items[a.items.length-1].raw=o.trimEnd(),a.items[a.items.length-1].text=l.trimEnd(),a.raw=a.raw.trimEnd();for(let h=0;h<a.items.length;h++)if(this.lexer.state.top=!1,a.items[h].tokens=this.lexer.blockTokens(a.items[h].text,[]),!a.loose){const u=a.items[h].tokens.filter(d=>d.type==="space"),$=u.length>0&&u.some(d=>/\n.*\n/.test(d.raw));a.loose=$}if(a.loose)for(let h=0;h<a.items.length;h++)a.items[h].loose=!0;return a}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),s=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:a}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=Pe(e[1]),s=e[2].replace(/^\||\| *$/g,"").split("|"),a=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(const o of s)/^ *-+: *$/.test(o)?i.align.push("right"):/^ *:-+: *$/.test(o)?i.align.push("center"):/^ *:-+ *$/.test(o)?i.align.push("left"):i.align.push(null);for(const o of t)i.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of a)i.rows.push(Pe(o,i.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return i}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:F(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const i=oe(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=Dt(e[2],"()");if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],a="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);i&&(s=i[1],a=i[3])}else a=e[3]?e[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(t)?s=s.slice(1):s=s.slice(1,-1)),Ve(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const s=(t[2]||t[1]).replace(/\s+/g," "),a=e[s.toLowerCase()];if(!a){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return Ve(t,a,t[0],this.lexer)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...s[0]].length-1;let o,l,m=i,h=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+i);(s=u.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){m+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){h+=l;continue}if(m-=l,m>0)continue;l=Math.min(l,l+m+h);const $=[...s[0]][0].length,d=n.slice(0,i+s.index+$+l);if(Math.min(i,l)%2){const f=d.slice(1,-1);return{type:"em",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}const p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const s=/[^ ]/.test(t),a=/^ /.test(t)&&/ $/.test(t);return s&&a&&(t=t.substring(1,t.length-1)),t=F(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=F(e[1]),s="mailto:"+t):(t=F(e[1]),s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,a;if(e[2]==="@")s=F(e[0]),a="mailto:"+s;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);s=F(e[0]),e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=F(e[0]),{type:"text",raw:e[0],text:t}}}}const Gt=/^(?: *(?:\n|$))+/,Xt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Yt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ie=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Zt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,et=/(?:[*+-]|\d{1,9}[.)])/,tt=_(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,et).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),qe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Qt=/^[^\n]+/,je=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Kt=_(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",je).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ut=_(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,et).getRegex(),xe="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ae=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Jt=_("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ae).replace("tag",xe).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nt=_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),en=_(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nt).getRegex(),Te={blockquote:en,code:Xt,def:Kt,fences:Yt,heading:Zt,hr:ie,html:Jt,lheading:tt,list:Ut,newline:Gt,paragraph:nt,table:ee,text:Qt},He=_("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),tn={...Te,table:He,paragraph:_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",He).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex()},nn={...Te,html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ae).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_(qe).replace("hr",ie).replace("heading",` *#{1,6} *[^
]`).replace("lheading",tt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},it=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,an=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,at=/^( {2,}|\\)\n(?!\s*$)/,sn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ae="\\p{P}\\p{S}",rn=_(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ae).getRegex(),on=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,ln=_(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ae).getRegex(),hn=_("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ae).getRegex(),cn=_("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ae).getRegex(),mn=_(/\\([punct])/,"gu").replace(/punct/g,ae).getRegex(),un=_(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$n=_(Ae).replace("(?:-->|$)","-->").getRegex(),pn=_("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$n).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),me=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,dn=_(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",me).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),st=_(/^!?\[(label)\]\[(ref)\]/).replace("label",me).replace("ref",je).getRegex(),rt=_(/^!?\[(ref)\](?:\[\])?/).replace("ref",je).getRegex(),fn=_("reflink|nolink(?!\\()","g").replace("reflink",st).replace("nolink",rt).getRegex(),Fe={_backpedal:ee,anyPunctuation:mn,autolink:un,blockSkip:on,br:at,code:an,del:ee,emStrongLDelim:ln,emStrongRDelimAst:hn,emStrongRDelimUnd:cn,escape:it,link:dn,nolink:rt,punctuation:rn,reflink:st,reflinkSearch:fn,tag:pn,text:sn,url:ee},xn={...Fe,link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",me).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",me).getRegex()},_e={...Fe,escape:_(it).replace("])","~|])").getRegex(),url:_(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gn={..._e,br:_(at).replace("{2,}","*").getRegex(),text:_(_e.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},le={normal:Te,gfm:tn,pedantic:nn},U={normal:Fe,gfm:_e,breaks:gn,pedantic:xn};class L{constructor(n){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||X,this.options.tokenizer=this.options.tokenizer||new ce,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:le.normal,inline:U.normal};this.options.pedantic?(e.block=le.pedantic,e.inline=U.pedantic):this.options.gfm&&(e.block=le.gfm,this.options.breaks?e.inline=U.breaks:e.inline=U.gfm),this.tokenizer.rules=e}static get rules(){return{block:le,inline:U}}static lex(n,e){return new L(e).lex(n)}static lexInline(n,e){return new L(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,l,m)=>l+"    ".repeat(m.length));let t,s,a,i;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(a=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=n.slice(1);let m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},l),typeof m=="number"&&m>=0&&(o=Math.min(o,m))}),o<1/0&&o>=0&&(a=n.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(a))){s=e[e.length-1],i&&s.type==="paragraph"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t),i=a.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&s.type==="text"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t);continue}if(n){const o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,s,a,i=n,o,l,m;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,o.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(m=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(t=h.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),s=e[e.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,i,m)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const u=n.slice(1);let $;this.options.extensions.startInline.forEach(d=>{$=d.call({lexer:this},u),typeof $=="number"&&$>=0&&(h=Math.min(h,$))}),h<1/0&&h>=0&&(a=n.substring(0,h+1))}if(t=this.tokenizer.inlineText(a)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(m=t.raw.slice(-1)),l=!0,s=e[e.length-1],s&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return e}}class ue{constructor(n){k(this,"options");this.options=n||X}code(n,e,t){var a;const s=(a=(e||"").match(/^\S*/))==null?void 0:a[0];return n=n.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+F(s)+'">'+(t?n:F(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:F(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const s=e?"ol":"ul",a=e&&t!==1?' start="'+t+'"':"";return"<"+s+a+`>
`+n+"</"+s+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const s=We(n);if(s===null)return t;n=s;let a='<a href="'+n+'"';return e&&(a+=' title="'+e+'"'),a+=">"+t+"</a>",a}image(n,e,t){const s=We(n);if(s===null)return t;n=s;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${e}"`),a+=">",a}text(n){return n}}class Se{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class N{constructor(n){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=n||X,this.options.renderer=this.options.renderer||new ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Se}static parse(n,e){return new N(e).parse(n)}static parseInline(n,e){return new N(e).parseInline(n)}parse(n,e=!0){let t="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const i=a,o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){t+=o||"";continue}}switch(a.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const i=a;t+=this.renderer.heading(this.parseInline(i.tokens),i.depth,Vt(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{const i=a;t+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{const i=a;let o="",l="";for(let h=0;h<i.header.length;h++)l+=this.renderer.tablecell(this.parseInline(i.header[h].tokens),{header:!0,align:i.align[h]});o+=this.renderer.tablerow(l);let m="";for(let h=0;h<i.rows.length;h++){const u=i.rows[h];l="";for(let $=0;$<u.length;$++)l+=this.renderer.tablecell(this.parseInline(u[$].tokens),{header:!1,align:i.align[$]});m+=this.renderer.tablerow(l)}t+=this.renderer.table(o,m);continue}case"blockquote":{const i=a,o=this.parse(i.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const i=a,o=i.ordered,l=i.start,m=i.loose;let h="";for(let u=0;u<i.items.length;u++){const $=i.items[u],d=$.checked,p=$.task;let f="";if($.task){const x=this.renderer.checkbox(!!d);m?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=x+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=x+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:x+" "}):f+=x+" "}f+=this.parse($.tokens,m),h+=this.renderer.listitem(f,p,!!d)}t+=this.renderer.list(h,o,l);continue}case"html":{const i=a;t+=this.renderer.html(i.text,i.block);continue}case"paragraph":{const i=a;t+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=a,o=i.tokens?this.parseInline(i.tokens):i.text;for(;s+1<n.length&&n[s+1].type==="text";)i=n[++s],o+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);t+=e?this.renderer.paragraph(o):o;continue}default:{const i='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const i=this.options.extensions.renderers[a.type].call({parser:this},a);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){t+=i||"";continue}}switch(a.type){case"escape":{const i=a;t+=e.text(i.text);break}case"html":{const i=a;t+=e.html(i.text);break}case"link":{const i=a;t+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{const i=a;t+=e.image(i.href,i.title,i.text);break}case"strong":{const i=a;t+=e.strong(this.parseInline(i.tokens,e));break}case"em":{const i=a;t+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{const i=a;t+=e.codespan(i.text);break}case"br":{t+=e.br();break}case"del":{const i=a;t+=e.del(this.parseInline(i.tokens,e));break}case"text":{const i=a;t+=e.text(i.text);break}default:{const i='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return t}}class te{constructor(n){k(this,"options");this.options=n||X}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}k(te,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var G,ke,ot;class bn{constructor(...n){Le(this,G);k(this,"defaults",we());k(this,"options",this.setOptions);k(this,"parse",re(this,G,ke).call(this,L.lex,N.parse));k(this,"parseInline",re(this,G,ke).call(this,L.lexInline,N.parseInline));k(this,"Parser",N);k(this,"Renderer",ue);k(this,"TextRenderer",Se);k(this,"Lexer",L);k(this,"Tokenizer",ce);k(this,"Hooks",te);this.use(...n)}walkTokens(n,e){var s,a;let t=[];for(const i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const o=i;for(const l of o.header)t=t.concat(this.walkTokens(l.tokens,e));for(const l of o.rows)for(const m of l)t=t.concat(this.walkTokens(m.tokens,e));break}case"list":{const o=i;t=t.concat(this.walkTokens(o.items,e));break}default:{const o=i;(a=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&a[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const m=o[l].flat(1/0);t=t.concat(this.walkTokens(m,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const i=e.renderers[a.name];i?e.renderers[a.name]=function(...o){let l=a.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:e.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[a.level];i?i.unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),s.extensions=e),t.renderer){const a=this.defaults.renderer||new ue(this.defaults);for(const i in t.renderer){if(!(i in a))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;const o=i,l=t.renderer[o],m=a[o];a[o]=(...h)=>{let u=l.apply(a,h);return u===!1&&(u=m.apply(a,h)),u||""}}s.renderer=a}if(t.tokenizer){const a=this.defaults.tokenizer||new ce(this.defaults);for(const i in t.tokenizer){if(!(i in a))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,l=t.tokenizer[o],m=a[o];a[o]=(...h)=>{let u=l.apply(a,h);return u===!1&&(u=m.apply(a,h)),u}}s.tokenizer=a}if(t.hooks){const a=this.defaults.hooks||new te;for(const i in t.hooks){if(!(i in a))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;const o=i,l=t.hooks[o],m=a[o];te.passThroughHooks.has(i)?a[o]=h=>{if(this.defaults.async)return Promise.resolve(l.call(a,h)).then($=>m.call(a,$));const u=l.call(a,h);return m.call(a,u)}:a[o]=(...h)=>{let u=l.apply(a,h);return u===!1&&(u=m.apply(a,h)),u}}s.hooks=a}if(t.walkTokens){const a=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),a&&(l=l.concat(a.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return L.lex(n,e??this.defaults)}parser(n,e){return N.parse(n,e??this.defaults)}}G=new WeakSet,ke=function(n,e){return(t,s)=>{const a={...s},i={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const o=re(this,G,ot).call(this,!!i.silent,!!i.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(l=>n(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>e(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let l=n(t,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let m=e(l,i);return i.hooks&&(m=i.hooks.postprocess(m)),m}catch(l){return o(l)}}},ot=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+F(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}};const O=new bn;function b(r,n){return O.parse(r,n)}b.options=b.setOptions=function(r){return O.setOptions(r),b.defaults=O.defaults,Ke(b.defaults),b};b.getDefaults=we;b.defaults=X;b.use=function(...r){return O.use(...r),b.defaults=O.defaults,Ke(b.defaults),b};b.walkTokens=function(r,n){return O.walkTokens(r,n)};b.parseInline=O.parseInline;b.Parser=N;b.parser=N.parse;b.Renderer=ue;b.TextRenderer=Se;b.Lexer=L;b.lexer=L.lex;b.Tokenizer=ce;b.Hooks=te;b.parse=b;b.options;b.setOptions;b.use;b.walkTokens;b.parseInline;N.parse;L.lex;const yn={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1};function Ee(r){r&&Nt(r,yn)}b.setOptions({breaks:!0,gfm:!0});function Ie(r,n){const e=()=>n.forEach(s=>{if(s&&s.offsetParent!==null)try{ne.Plots.resize(s)}catch{}});requestAnimationFrame(e),setTimeout(e,60);let t;return typeof ResizeObserver<"u"&&(t=new ResizeObserver(e),t.observe(r)),()=>{t&&t.disconnect()}}function $e(r={}){const n=J("--fg")||"#1a1a2e",e=J("--grid")||"#d8d8e0",t=J("--surface")||"#ffffff";return{paper_bgcolor:t,plot_bgcolor:t,font:{color:n,family:"system-ui, sans-serif"},margin:{l:44,r:16,t:28,b:40},xaxis:{gridcolor:e,zerolinecolor:e},yaxis:{gridcolor:e,zerolinecolor:e},showlegend:!0,legend:{orientation:"h",y:1.12,x:0},...r}}const pe=()=>J("--accent")||"#e63946",de=()=>J("--point")||"#3a6ea5",fe={displayModeBar:!1,responsive:!0},he={xs:[-1,1,2.5,3,4,4.5,6],ys:[0,1.2,1.9,2.5,3.1,3.2,4.5]};function _n(r){let n=[...he.xs],e=[...he.ys],t=!1,s=.5,a=.5;r.innerHTML=`
    <div class="demo">
      <p class="demo-hint">${y(q.dragHint)}</p>
      <div class="demo-plot" data-plot></div>
      <div class="demo-controls">
        <button class="btn" data-act="best">${y(q.demoBestFit)}</button>
        <button class="btn" data-act="guess" aria-pressed="false">${y(q.demoGuess)}</button>
        <button class="btn" data-act="add">${y(q.demoAddPoint)}</button>
        <button class="btn" data-act="reset">${y(q.demoReset)}</button>
      </div>
      <div class="demo-sliders" data-sliders hidden>
        <label>${y(q.slope)} (<span data-ga></span>)<input type="range" min="-2" max="3" step="0.01" data-slider="a"></label>
        <label>${y(q.intercept)} (<span data-gb></span>)<input type="range" min="-3" max="4" step="0.01" data-slider="b"></label>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;const i=r.querySelector("[data-plot]"),o=r.querySelector("[data-readout]"),l=r.querySelector("[data-sliders]");function m(p,f){const x=(f-p)*.1||1;return[p-x,f+x]}function h(){const{a:p,b:f}=Z(n,e),[x,g]=m(Math.min(...n),Math.max(...n)),v=[{x:n,y:e,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:[x,g],y:[p*x+f,p*g+f],mode:"lines",name:y(q.demoBestFit),line:{color:pe(),width:3}}];t&&v.push({x:[x,g],y:[s*x+a,s*g+a],mode:"lines",name:y(q.demoGuess),line:{color:"#f4a261",width:2,dash:"dash"}}),ne.react(i,v,$e({xaxis:{range:[x,g]}}),fe);const z=D(A=>p*A+f,n,e);let w=`<div class="ro-row">$\\bar a = ${p.toFixed(6)},\\quad \\bar b = ${f.toFixed(6)}$</div>`;if(w+=`<div class="ro-row"><span class="ro-label">${y(q.optimalError)}:</span> $F = ${z.toFixed(6)}$</div>`,t){const A=D(S=>s*S+a,n,e),B=A>0?z/A:1,C=B>.98?"★★★":B>.85?"★★☆":B>.6?"★☆☆":"☆☆☆";w+=`<div class="ro-row"><span class="ro-label">${y(q.yourError)}:</span> $F = ${A.toFixed(6)}$ <span class="ro-stars">${C}</span></div>`}o.innerHTML=w,Ee(o)}function u(){const p=i.querySelector(".nsewdrag");if(!p)return;let f=-1;const x=g=>{const v=p.getBoundingClientRect(),z=i._fullLayout.xaxis,w=i._fullLayout.yaxis;return{x:z.p2d(g.clientX-v.left),y:w.p2d(g.clientY-v.top)}};p.addEventListener("mousedown",g=>{const v=x(g),z=i._fullLayout.xaxis,w=i._fullLayout.yaxis,A=z.range[1]-z.range[0],B=w.range[1]-w.range[0];let C=-1,S=1/0;for(let V=0;V<n.length;V++){const se=(n[V]-v.x)/A,Q=(e[V]-v.y)/B,K=se*se+Q*Q;K<S&&(S=K,C=V)}C>=0&&S<.0025&&(f=C,g.preventDefault())}),window.addEventListener("mousemove",g=>{f<0||(e[f]=x(g).y,h())}),window.addEventListener("mouseup",()=>{f=-1})}r.querySelector('[data-act="best"]').addEventListener("click",()=>{t=!1,l.hidden=!0,r.querySelector('[data-act="guess"]').setAttribute("aria-pressed","false"),h()}),r.querySelector('[data-act="guess"]').addEventListener("click",p=>{t=!t,l.hidden=!t,p.currentTarget.setAttribute("aria-pressed",String(t)),h()}),r.querySelector('[data-act="add"]').addEventListener("click",()=>{const p=Z(n,e),f=Math.max(...n)+1;n.push(f),e.push(p.a*f+p.b),h(),setTimeout(u,60)}),r.querySelector('[data-act="reset"]').addEventListener("click",()=>{n=[...he.xs],e=[...he.ys],h(),setTimeout(u,60)}),r.querySelectorAll("[data-slider]").forEach(p=>{p.value=p.dataset.slider==="a"?s:a,p.addEventListener("input",()=>{p.dataset.slider==="a"?s=parseFloat(p.value):a=parseFloat(p.value),r.querySelector("[data-ga]").textContent=s.toFixed(2),r.querySelector("[data-gb]").textContent=a.toFixed(2),h()})}),r.querySelector("[data-ga]").textContent=s.toFixed(2),r.querySelector("[data-gb]").textContent=a.toFixed(2),h(),setTimeout(u,80);const $=ve(()=>h()),d=Ie(r,[i]);return()=>{$(),d()}}const De={xs:[-1,0,.5,1,2,2.5,3],ys:[1.4,1.9,1.6,1.7,.2,-.1,-2]};function kn(r){let n=[...De.xs],e=[...De.ys],t=2;const s=Math.min(6,n.length-1);r.innerHTML=`
    <div class="demo">
      <div class="demo-sliders">
        <label>${y(q.degree)} $m$ (<span data-deg></span>)
          <input type="range" min="1" max="${s}" step="1" value="${t}" data-slider="m">
        </label>
      </div>
      <div class="demo-plot" data-plot></div>
      <div class="demo-readout" data-readout></div>
    </div>`;const a=r.querySelector("[data-plot]"),i=r.querySelector("[data-readout]");r.querySelector("[data-deg]").textContent=t;function o(){const h=Tt(n,e,t),u=Math.min(...n)-.4,$=Math.max(...n)+.4,d=[],p=[],f=120;for(let z=0;z<=f;z++){const w=u+($-u)*z/f;d.push(w),p.push(Be(h,w))}ne.react(a,[{x:n,y:e,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:d,y:p,mode:"lines",name:`${y({hu:"fokszám",en:"degree"})} ${t}`,line:{color:pe(),width:3}}],$e({xaxis:{range:[u,$]}}),fe);const x=D(z=>Be(h,z),n,e);let v=`<div class="ro-row">$p(x) = ${h.map((z,w)=>w===0?z.toFixed(4):`${z>=0?"+":""}${z.toFixed(4)}x^{${w}}`).join(" ")}$</div>`;v+=`<div class="ro-row"><span class="ro-label">${y(q.error)}:</span> $F = ${x.toFixed(6)}$</div>`,t>=n.length-1&&(v+=`<div class="ro-row ro-warn">${y({hu:"⚠ $m \\ge n$: interpoláció, a hiba ≈ 0.",en:"⚠ $m \\ge n$: interpolation, error ≈ 0."})}</div>`),i.innerHTML=v,Ee(i)}r.querySelector('[data-slider="m"]').addEventListener("input",h=>{t=parseInt(h.target.value,10),r.querySelector("[data-deg]").textContent=t,o()}),o();const l=ve(()=>o()),m=Ie(r,[a]);return()=>{l(),m()}}const zn={exp:{xs:[0,1,1.5,2,3,4],ys:[.3,.7,.9,1.2,1.8,2.7]},power:{xs:[.5,1,1.5,2.5,3],ys:[.7,1.1,1.6,2.1,2.3]}};function vn(r){let n="exp";r.innerHTML=`
    <div class="demo">
      <div class="demo-controls">
        <button class="btn" data-model="exp" aria-pressed="true">${y(q.expModel)}</button>
        <button class="btn" data-model="power" aria-pressed="false">${y(q.powerModel)}</button>
      </div>
      <div class="demo-twoplots">
        <figure><figcaption data-cap1></figcaption><div class="demo-plot" data-plot1></div></figure>
        <figure><figcaption data-cap2></figcaption><div class="demo-plot" data-plot2></div></figure>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;const e=r.querySelector("[data-plot1]"),t=r.querySelector("[data-plot2]"),s=r.querySelector("[data-cap1]"),a=r.querySelector("[data-cap2]"),i=r.querySelector("[data-readout]");function o(){const{xs:h,ys:u}=zn[n];s.textContent=y(q.linearizedSpace),a.textContent=y(q.originalSpace);let $,d,p,f,x,g,v,z,w,A;if(n==="exp"){p=h.slice(),f=u.map(j=>Math.log(j));const W=Z(p,f);x=W.a,g=W.b,{a:$,b:d}=Ft(h,u),v=j=>d*Math.exp($*j),z=D(j=>x*j+g,p,f),w=D(v,h,u),A=`y = ${d.toFixed(6)}\\, e^{${$.toFixed(6)} x}`}else{p=h.map(j=>Math.log(j)),f=u.map(j=>Math.log(j));const W=Z(p,f);x=W.a,g=W.b,{a:$,b:d}=St(h,u),v=j=>d*Math.pow(j,$),z=D(j=>x*j+g,p,f),w=D(v,h,u),A=`y = ${d.toFixed(6)}\\, x^{${$.toFixed(6)}}`}const B=Math.min(...p),C=Math.max(...p),S=(C-B)*.1||1;ne.react(e,[{x:p,y:f,mode:"markers",type:"scatter",name:y(n==="exp"?{hu:"(x, ln y)",en:"(x, ln y)"}:{hu:"(ln x, ln y)",en:"(ln x, ln y)"}),marker:{size:10,color:de()}},{x:[B-S,C+S],y:[x*(B-S)+g,x*(C+S)+g],mode:"lines",name:y({hu:"illesztett egyenes",en:"fitted line"}),line:{color:pe(),width:3}}],$e(),fe);const V=Math.min(...h),se=Math.max(...h),Q=[],K=[],Me=120;for(let W=0;W<=Me;W++){const j=V+(se-V)*W/Me;Q.push(j),K.push(v(j))}ne.react(t,[{x:h,y:u,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:10,color:de()}},{x:Q,y:K,mode:"lines",name:y({hu:"illesztett görbe",en:"fitted curve"}),line:{color:pe(),width:3}}],$e(),fe),i.innerHTML=`<div class="ro-row">$${A}$</div><div class="ro-row">$A = ${x.toFixed(6)},\\quad B = ${g.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${y(q.linearError)}:</span> $${z.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${y(q.nonlinearError)}:</span> $${w.toFixed(6)}$</div>`,Ee(i)}r.querySelectorAll("[data-model]").forEach(h=>{h.addEventListener("click",()=>{n=h.dataset.model,r.querySelectorAll("[data-model]").forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.model===n))),o()})}),o();const l=ve(()=>o()),m=Ie(r,[e,t]);return()=>{l(),m()}}const ge={line:_n,polynomial:kn,nonlinear:vn};function wn({component:r,caption:n}){const e=T.useRef(null);return T.useEffect(()=>{var a;const t=e.current;if(!t)return;const s=(a=ge[r])==null?void 0:a.call(ge,t);return()=>{typeof s=="function"&&s()}},[r]),c.jsxs("figure",{className:"demo-figure",children:[c.jsx("div",{className:"demo-host",ref:e}),n&&c.jsx("figcaption",{children:c.jsx(P,{markdown:n})})]})}const qn={intro:[{q:{hu:"Miért a négyzetes hibát ($F$) minimalizáljuk az $F_1$ (maximum) vagy $F_2$ (abszolút) helyett?",en:"Why minimize the squared error ($F$) instead of $F_1$ (max) or $F_2$ (absolute)?"},options:[{hu:"Mert differenciálható, így a minimum a deriváltak nullhelyén kereshető",en:"Because it is differentiable, so the minimum is found where derivatives vanish"},{hu:"Mert mindig kisebb értéket ad",en:"Because it always gives a smaller value"},{hu:"Mert nem igényel mérési adatokat",en:"Because it needs no measurement data"}],correct:0},{q:{hu:"Mit jelöl az $\\mathbf{a}$ a $g(x;\\mathbf{a})$ jelölésben?",en:"What does $\\mathbf{a}$ denote in the notation $g(x;\\mathbf{a})$?"},options:[{hu:"A mérési pontok számát",en:"The number of data points"},{hu:"Az illesztendő függvény ismeretlen paramétereit",en:"The unknown parameters of the function to fit"},{hu:"A maximális hibát",en:"The maximum error"}],correct:1}],line:[{q:{hu:"Mi a $b$ együtthatója a második Gauss-féle normálegyenletben?",en:"What is the coefficient of $b$ in the second Gaussian normal equation?"},options:[{hu:"$\\sum x_i$",en:"$\\sum x_i$"},{hu:"$n+1$ (a mérési pontok száma)",en:"$n+1$ (the number of data points)"},{hu:"$\\sum x_i^2$",en:"$\\sum x_i^2$"}],correct:1},{q:{hu:"Mikor garantált, hogy a $d$ determináns pozitív (egyértelmű megoldás)?",en:"When is the determinant $d$ guaranteed positive (unique solution)?"},options:[{hu:"Ha minden $y_i$ egyenlő",en:"If all $y_i$ are equal"},{hu:"Ha legalább két $x_i$ különböző",en:"If at least two $x_i$ are distinct"},{hu:"Ha $n = 1$",en:"If $n = 1$"}],correct:1},{q:{hu:"A 9.2. példában mekkora az illesztett egyenes meredeksége ($\\bar a$)?",en:"In Example 9.2, what is the slope $\\bar a$ of the fitted line?"},options:[{hu:"$0.542163$",en:"$0.542163$"},{hu:"$0.630243$",en:"$0.630243$"},{hu:"$0.124691$",en:"$0.124691$"}],correct:1}],polynomial:[{q:{hu:"Miért invertálható a (4) rendszer $\\mathbf{A}$ mátrixa, ha $m \\le n$ és az $x_i$-k különbözők?",en:"Why is the matrix $\\mathbf{A}$ of system (4) invertible when $m \\le n$ and the $x_i$ are distinct?"},options:[{hu:"Mert szimmetrikus",en:"Because it is symmetric"},{hu:"Mert pozitív definit ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ ha $\\mathbf{z} \\ne 0$)",en:"Because it is positive definite ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ for $\\mathbf{z} \\ne 0$)"},{hu:"Mert minden eleme pozitív",en:"Because all its entries are positive"}],correct:1},{q:{hu:"Mi történik, ha $n \\le m$ (több paraméter, mint a kényszerek)?",en:"What happens if $n \\le m$ (more parameters than constraints)?"},options:[{hu:"A pontokon átmenő interpoláló polinom létezik, $F$ minimuma 0",en:"An interpolating polynomial exists through the points; the minimum of $F$ is 0"},{hu:"Nincs megoldás",en:"There is no solution"},{hu:"A hiba végtelen",en:"The error is infinite"}],correct:0}],nonlinear:[{q:{hu:"Hogyan linearizáljuk a $y = b e^{ax}$ modellt?",en:"How do we linearize the model $y = b e^{ax}$?"},options:[{hu:"$\\ln y = \\ln b + a x$ (egyenes az $(x, \\ln y)$ síkon)",en:"$\\ln y = \\ln b + a x$ (a line in the $(x, \\ln y)$ plane)"},{hu:"$\\ln y = a \\ln x + \\ln b$",en:"$\\ln y = a \\ln x + \\ln b$"},{hu:"$y^2 = a x + b$",en:"$y^2 = a x + b$"}],correct:0},{q:{hu:"A $y = b x^a$ hatványfüggvényt melyik koordinátákban illesztjük egyenessel?",en:"In which coordinates do we fit a line for the power model $y = b x^a$?"},options:[{hu:"$(x, \\ln y)$",en:"$(x, \\ln y)$"},{hu:"$(\\ln x, \\ln y)$",en:"$(\\ln x, \\ln y)$"},{hu:"$(\\ln x, y)$",en:"$(\\ln x, y)$"}],correct:1},{q:{hu:"Igaz-e, hogy a linearizált illesztés pontosan minimalizálja az eredeti nemlineáris négyzetes hibát?",en:"Does the linearized fit exactly minimize the original nonlinear least-square error?"},options:[{hu:"Igen, mindig",en:"Yes, always"},{hu:"Nem — jó közelítés, de a transzformált térben minimalizál",en:"No — it is a good approximation, but minimizes in the transformed space"},{hu:"Csak ha $a = 0$",en:"Only if $a = 0$"}],correct:1}]},E={quiz:{en:"Quiz",hu:"Kvíz"},check:{en:"Check answer",hu:"Ellenőrzés"},next:{en:"Next",hu:"Következő"},correct:{en:"Correct! ✓",hu:"Helyes! ✓"},incorrect:{en:"Not quite — try again.",hu:"Nem egészen — próbáld újra."},done:{en:"Quiz complete!",hu:"Kvíz teljesítve!"},score:{en:"Score",hu:"Eredmény"},complete:{en:"Section complete",hu:"Szakasz teljesítve"},retry:{en:"Retry",hu:"Újra"}};function jn({refKey:r,sectionId:n}){const{t:e}=H(),t=qn[r]??[],[s,a]=T.useState(0),[i,o]=T.useState(0),[l,m]=T.useState(-1),[h,u]=T.useState("none");if(!t.length)return null;const $=()=>{a(0),o(0),m(-1),u("none")};if(s>=t.length){const x=Math.round(i/t.length*100),g=i===t.length;return g&&jt(n),c.jsxs("div",{className:"quiz",children:[c.jsxs("div",{className:"quiz-head",children:[c.jsx("span",{className:"quiz-icon",children:"🎯"}),c.jsx("strong",{children:e(E.quiz)})]}),c.jsx("div",{className:"quiz-body",children:c.jsxs("div",{className:"quiz-done",children:[c.jsxs("p",{children:[e(E.done)," ",e(E.score),": ",i,"/",t.length," (",x,"%)"]}),g&&c.jsxs("p",{className:"quiz-pass",children:[e(E.complete)," ✓"]}),c.jsx("button",{className:"btn",onClick:$,children:e(E.retry)})]})})]})}const d=t[s],p=()=>{l<0||(l===d.correct?(u("right"),o(x=>x+1)):u("wrong"))},f=()=>{a(x=>x+1),m(-1),u("none")};return c.jsxs("div",{className:"quiz",children:[c.jsxs("div",{className:"quiz-head",children:[c.jsx("span",{className:"quiz-icon",children:"🎯"}),c.jsx("strong",{children:e(E.quiz)})]}),c.jsxs("div",{className:"quiz-body",children:[c.jsxs("p",{className:"quiz-q",children:[s+1,". ",c.jsx(R,{text:e(d.q)})]}),c.jsx("div",{className:"quiz-opts",children:d.options.map((x,g)=>c.jsx("button",{className:`quiz-opt${l===g?" selected":""}${h!=="none"&&g===d.correct?" right":""}${h==="wrong"&&g===l?" wrong":""}`,onClick:()=>h!=="right"&&m(g),children:c.jsx(R,{text:e(x)})},g))}),h!=="none"&&c.jsx("div",{className:`quiz-feedback ${h==="right"?"ok":"bad"}`,children:e(h==="right"?E.correct:E.incorrect)}),h==="right"?c.jsx("button",{className:"btn",onClick:f,children:e(E.next)}):c.jsx("button",{className:"btn",onClick:p,children:e(E.check)})]})]})}const An={line:[{term:{en:"Least squares method",hu:"Legkisebb négyzetek módszere"},def:{en:"Fit a model to data $(x_i,y_i)$ by minimizing the sum of squared residuals. Unlike interpolation, the curve need not pass through the points — it captures the trend and smooths out noise.",hu:"Egy modell illesztése $(x_i,y_i)$ adatokra a négyzetes eltérések összegének minimalizálásával. Az interpolációval ellentétben a görbe nem megy át a pontokon — a trendet ragadja meg és simítja a zajt."}},{term:{en:"Line fitting $g(x)=ax+b$",hu:"Egyenes illesztése $g(x)=ax+b$"},def:{en:"The simplest least-squares model: choose slope $a$ and intercept $b$ to minimize $F(a,b)=\\sum_i(ax_i+b-y_i)^2$. Also called linear regression.",hu:"A legegyszerűbb legkisebb-négyzetes modell: válaszd az $a$ meredekséget és $b$ tengelymetszetet úgy, hogy $F(a,b)=\\sum_i(ax_i+b-y_i)^2$ minimális legyen. Lineáris regressziónak is hívják."}},{term:{en:"Least-square error $F(a,b)$",hu:"Négyzetes hiba $F(a,b)$"},def:{en:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — the objective. Squaring (vs absolute value) makes $F$ smooth and differentiable, so calculus locates the minimum, and it penalizes large deviations more.",hu:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — a célfüggvény. A négyzetre emelés (az abszolút érték helyett) simává, differenciálhatóvá teszi $F$-et, így az analízis megtalálja a minimumot, és jobban bünteti a nagy eltéréseket."}},{term:{en:"Normal equations (Gaussian)",hu:"Normálegyenletek (Gauss-féle)"},def:{en:"Setting $\\partial F/\\partial a=\\partial F/\\partial b=0$ gives the linear system $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ for the optimal $a,b$.",hu:"A $\\partial F/\\partial a=\\partial F/\\partial b=0$ feltételből az $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ lineáris rendszer adódik az optimális $a,b$-re."}},{term:{en:"Unique solvability",hu:"Egyértelmű megoldhatóság"},def:{en:"The $2\\times2$ normal system has a unique solution whenever at least two of the $x_i$ differ (its determinant $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ is convex, so the stationary point is the global minimum.",hu:"A $2\\times2$-es normálrendszernek egyetlen megoldása van, valahányszor legalább két $x_i$ különbözik (determinánsa $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ konvex, így a stacionárius pont a globális minimum."}},{term:{en:"Residuals & best fit",hu:"Reziduumok és legjobb illeszkedés"},def:{en:"The residual at $x_i$ is $r_i=ax_i+b-y_i$. The best-fit line makes $\\sum r_i^2$ as small as possible; the residuals sum to zero and are uncorrelated with the $x_i$ at the optimum.",hu:"Az $x_i$-beli reziduum $r_i=ax_i+b-y_i$. A legjobban illeszkedő egyenes a $\\sum r_i^2$-et teszi a lehető legkisebbé; az optimumban a reziduumok összege nulla és korrelálatlanok az $x_i$-vel."}}],polynomial:[{term:{en:"Polynomial curve fitting",hu:"Polinom illesztése"},def:{en:"Fit a degree-$m$ polynomial $p(x)=a_m x^m+\\dots+a_0$ to data $(x_i,y_i)$ by least squares, minimizing $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ over the $m+1$ coefficients.",hu:"Egy $m$-edfokú $p(x)=a_m x^m+\\dots+a_0$ polinom illesztése $(x_i,y_i)$ adatokra legkisebb négyzetekkel, az $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ minimalizálásával az $m+1$ együtthatóra."}},{term:{en:"Fitting vs interpolation ($m<n$)",hu:"Illesztés vs interpoláció ($m<n$)"},def:{en:"If $m\\ge n$ a degree-$m$ polynomial interpolates exactly ($F=0$). The interesting case is $m<n$: fewer parameters than data, so $F>0$ and the polynomial approximates the trend instead of passing through every point.",hu:"Ha $m\\ge n$, egy $m$-edfokú polinom pontosan interpolál ($F=0$). Az érdekes eset $m<n$: kevesebb paraméter, mint adat, így $F>0$, és a polinom a trendet közelíti, nem megy át minden ponton."}},{term:{en:"Normal equations",hu:"Normálegyenletek"},def:{en:"Setting $\\partial F/\\partial a_k=0$ gives an $(m+1)\\times(m+1)$ linear system $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ whose entries are power sums $\\sum_i x_i^{j+k}$ and $\\sum_i x_i^k y_i$.",hu:"A $\\partial F/\\partial a_k=0$ feltételből egy $(m+1)\\times(m+1)$-es lineáris rendszer $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ adódik, amelynek elemei a $\\sum_i x_i^{j+k}$ hatványösszegek és $\\sum_i x_i^k y_i$."}},{term:{en:"Positive definite normal matrix",hu:"Pozitív definit normálmátrix"},def:{en:"If there are at least $m+1$ distinct nodes, the normal matrix $\\mathbf{A}$ is symmetric positive definite (via the Fundamental Theorem of Algebra), so the system has a unique solution — the global least-squares minimum.",hu:"Ha legalább $m+1$ különböző alappont van, a normálmátrix $\\mathbf{A}$ szimmetrikus pozitív definit (az algebra alaptétele révén), így a rendszernek egyetlen megoldása van — a globális legkisebb-négyzetes minimum."}},{term:{en:"Ill-conditioning at high degree",hu:"Rossz kondicionáltság magas foknál"},def:{en:"The power-sum normal matrix is a Vandermonde-style Gram matrix that becomes badly conditioned as $m$ grows (like the Hilbert matrix). High-degree fits also overfit noise — prefer modest $m$ or orthogonal-polynomial bases.",hu:"A hatványösszeges normálmátrix egy Vandermonde-jellegű Gram-mátrix, amely $m$ növekedtével rosszul kondicionálttá válik (mint a Hilbert-mátrix). A magas fokú illesztések túlillesztik a zajt — válassz mérsékelt $m$-et vagy ortogonális polinom bázist."}}],nonlinear:[{term:{en:"Nonlinear curve fitting",hu:"Nemlineáris függvény illesztése"},def:{en:"Fitting a model whose parameters enter nonlinearly (e.g. $be^{ax}$, $bx^a$). If parameters appear linearly the normal equations stay linear; otherwise they become a nonlinear system.",hu:"Olyan modell illesztése, amelyben a paraméterek nemlineárisan szerepelnek (pl. $be^{ax}$, $bx^a$). Ha a paraméterek lineárisan jelennek meg, a normálegyenletek lineárisak maradnak; különben nemlineáris rendszerré válnak."}},{term:{en:"Linearization",hu:"Linearizálás"},def:{en:"Transform the model into a linear one by a change of variables, fit a line by least squares, then map back. A fast, practical approximation — not the exact nonlinear least-squares solution.",hu:"Alakítsd a modellt lineárissá változócserével, illessz egyenest legkisebb négyzetekkel, majd alakítsd vissza. Gyors, gyakorlati közelítés — nem a pontos nemlineáris legkisebb-négyzetes megoldás."}},{term:{en:"Exponential fit $y=be^{ax}$",hu:"Exponenciális illesztés $y=be^{ax}$"},def:{en:"Take logs: $\\ln y=\\ln b+ax$. Fit a line $Y=AX+B$ to $(x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$. Used for growth/decay data.",hu:"Vegyél logaritmust: $\\ln y=\\ln b+ax$. Illessz $Y=AX+B$ egyenest az $(x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$. Növekedési/bomlási adatokra."}},{term:{en:"Power fit $y=bx^a$",hu:"Hatványfüggvény illesztés $y=bx^a$"},def:{en:"Take logs of both: $\\ln y=a\\ln x+\\ln b$. Fit a line to $(\\ln x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$ — a log–log linear fit.",hu:"Vegyél logaritmust mindkettőből: $\\ln y=a\\ln x+\\ln b$. Illessz egyenest a $(\\ln x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$ — log–log lineáris illesztés."}},{term:{en:"Caveat: not the true optimum",hu:"Figyelmeztetés: nem a valódi optimum"},def:{en:"Linearization minimizes error in the transformed variables, not in the original ones, so it weights the data differently. It gives a good, cheap starting fit — refine with a genuine nonlinear least-squares solver if needed.",hu:"A linearizálás a transzformált változókban minimalizálja a hibát, nem az eredetiekben, így másképp súlyozza az adatokat. Jó, olcsó kiinduló illesztést ad — szükség esetén finomítsd valódi nemlineáris legkisebb-négyzetes megoldóval."}}]},Tn={line:[{q:"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?",a:"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown."},{q:"What is the primary goal of curve fitting?",a:"To find parameter values such that the function $g$ deviates the 'least' from measured data points."},{q:"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?",a:"Measurement errors typically cause data points to lie off the ideal graph of the assumed function."},{q:"Define the maximum error formula $F_1(\\mathbf{a})$.",a:"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$"},{q:"Define the absolute error sum formula $F_2(\\mathbf{a})$.",a:"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"},{q:"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?",a:"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$."},{q:"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?",a:"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"},{q:"What is the 'method of least squares'?",a:"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points."},{q:"In line fitting, what is the standard form of the linear function $g(x)$?",a:"$g(x) = ax + b$"},{q:"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?",a:"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?",a:"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?",a:"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"},{q:"What are the 'Gaussian normal equations' in the context of line fitting?",a:"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero."},{q:"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"},{q:"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"},{q:"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?",a:"The total number of measurement data points."},{q:"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?",a:"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"},{q:"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?",a:"The Cauchy–Bunyakovsky–Schwarz inequality."},{q:"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?",a:"When there are at least two distinct mesh points $x_i$."},{q:"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?",a:"Exactly one unique solution."},{q:"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?",a:"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?",a:"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i^2$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?",a:"$2(n + 1)$"},{q:"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i$"},{q:"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?",a:"$D(\\bar{a}, \\bar{b}) = 4d$"},{q:"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?",a:"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive."},{q:"Is the local minimum found by the method of least squares for line fitting also a global minimum?",a:"Yes, it is both a local and a global minimum."},{q:"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?",a:"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$."},{q:"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?",a:"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$)."},{q:"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?",a:"$a = 0.630243$ and $b = 0.542163$"},{q:"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?",a:"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$."},{q:"In Example 9.2, what was the numerical value of the final error of the fitting?",a:"$0.124691$"},{q:"The points where the function values are measured are called the _____ points.",a:"mesh"},{q:"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?",a:"Three parameters (the coefficients of the polynomial)."},{q:"True or False: The Gaussian normal equations constitute a non-linear system of equations.",a:"False, it is a linear system for the parameters $a$ and $b$."},{q:"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?",a:"It is continuously partially differentiable."},{q:"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?",a:"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"},{q:"What is the Hungarian term for 'curve fitting' mentioned in the source material?",a:"görbeillesztés"},{q:"In the Hungarian source text, what is the term for 'Method of Least Squares'?",a:"legkisebb négyzetek módszere"},{q:"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.",a:"$\\sum_{i=0}^{n} x_i^2$"},{q:"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?",a:"Zero."},{q:"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?",a:"$i = 0, 1, \\ldots, 7$"},{q:"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?",a:"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$."},{q:"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?",a:"8"},{q:"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?",a:"It implies that the sum of the residuals (deviations) is zero."},{q:"Term: Mesh points",a:"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained."},{q:"Term: Gaussian normal equations",a:"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals."},{q:"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?",a:"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus."},{q:"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?",a:"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum."},{q:"How does Corollary 8.11 extend the findings of the local minimum in line fitting?",a:"It confirms that the local minimum is also the global minimum for the error function $F$."},{q:"In the example calculation table, what represents the sum of all elements in the $y_i$ column?",a:"$\\sum_{i=0}^{n} y_i$"},{q:"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?",a:"$x$"},{q:"In the Hungarian text, what is the term used for 'Gaussian normal equations'?",a:"Gauss-féle normálegyenletek"},{q:"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?",a:"8 terms."},{q:"What is the primary technical problem solved by switching from absolute error to squared error?",a:"Non-differentiability at points where $g(x_i) = y_i$."},{q:"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.",a:"partial"},{q:"What is the graphical interpretation of the 'best fitted curve'?",a:"The curve for which the sum of the squares of the vertical distances from the data points is minimized."},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?",a:"89.5"},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?",a:"20.0"}],polynomial:[{q:"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?",a:"The coefficients $a_m, a_{m-1}, \\ldots, a_0$."},{q:"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?",a:"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"},{q:"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?",a:"By polynomial interpolation."},{q:"What is the minimal value of the error function $F$ if $n \\le m$?",a:"$0$"},{q:"Why is the case $m < n$ primarily investigated in polynomial curve fitting?",a:"Because the error function $F$ generally does not reach zero in this case."},{q:"According to the source, at what points can the function $F$ have an extremum?",a:"Where all of its partial derivatives are equal to zero."},{q:"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?",a:"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"},{q:"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?",a:"The normal equations."},{q:"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?",a:"$\\sum_{i=0}^{n} x_i^k y_i$"},{q:"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.",a:"positive definite"},{q:"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?",a:"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$"},{q:"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?",a:"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"},{q:"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?",a:"If there are at least $m + 1$ distinct mesh points."},{q:"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?",a:"The Fundamental Theorem of Algebra."},{q:"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?",a:"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"},{q:"Why is the local minimum of the error function $F$ also its global minimum?",a:"Because $F$ is a quadratic function."},{q:"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.",a:"$m + 1$"},{q:"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?",a:"The error of the fitting."},{q:"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?",a:"Three equations."},{q:"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?",a:"The constant term ($a_0$)."},{q:"Formula: Error of the fitting",a:"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial."},{q:"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.",a:"sum"},{q:"What value of $n$ corresponds to the total number of data points being $7$?",a:"$n = 6$"},{q:"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?",a:"The sum of $x_i^2$."},{q:"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?",a:"The number of coefficients, which is $m + 1$."}],nonlinear:[{q:"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?",a:"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"},{q:"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?",a:"They form a nonlinear system of equations."},{q:"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?",a:"Newton's method"},{q:"What is the core idea of the 'linearization method' in curve fitting?",a:"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm."},{q:"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?",a:"$\\ln y = \\ln b + ax$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?",a:"$B = \\ln b$"},{q:"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?",a:"$a = A$"},{q:"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?",a:"$b = e^B$"},{q:"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.",a:"False"},{q:"What is the general form of the power function discussed in the material?",a:"$y = b x^a$"},{q:"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?",a:"$\\ln y = a \\ln x + \\ln b$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?",a:"$X = \\ln x$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?",a:"$a$"},{q:"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.",a:"$\\ln b$"},{q:"Which set of data points is used to fit a line when linearizing the power function $b x^a$?",a:"$(\\ln x_i, \\ln y_i)$"},{q:"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?",a:"$A = 0.528951$ and $B = -0.997597$"},{q:"What was the final exponential function obtained in Example 9.5 using linearization?",a:"$y = 0.368765 e^{0.528951x}$"},{q:"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?",a:"$0.165543$"},{q:"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?",a:"$A = 0.676257$ and $B = 0.123088$"},{q:"What was the final power function obtained in Example 9.6?",a:"$y = 1.130984 x^{0.676257}$"},{q:"In the power function example, what was the calculated error of the linear fitting?",a:"$0.007279$"},{q:"What was the calculated error of the original nonlinear fitting in the power function example?",a:"$0.019616$"},{q:"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"},{q:"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"},{q:"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.",a:"$(x_i, \\ln y_i)$"},{q:"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?",a:"A $2 \\times 2$ linear system for unknowns $A$ and $B$."},{q:"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?",a:"$6$ (representing the number of data points $n+1$)"},{q:"Concept: Critical Points of $F(a, b)$",a:"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero."},{q:"Why is linearization used in practice despite not being the 'original' nonlinear solution?",a:"It is easy to compute as it only requires solving a linear system."},{q:"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?",a:"The coefficient of $A$ in the first normal equation."},{q:"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?",a:"$B$ in the first equation and $A$ in the second equation."},{q:"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.",a:"Residuals ($f(x_i) - y_i$)"},{q:"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?",a:"$B = \\ln b$"},{q:"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?",a:"$5.586294$"},{q:"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?",a:"$2.691393$"},{q:"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?",a:"The total number of data points ($n=4$, so $n+1=5$)."},{q:"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?",a:"$(-0.693147, -0.356675)$"},{q:"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.",a:"$\\ln y_i$"},{q:"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.",a:"True"},{q:"What is the primary advantage of Newton's method over linearization for these problems?",a:"It can minimize the original nonlinear error function $F(a, b)$ directly."},{q:"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.",a:"$x$"},{q:"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?",a:"$0.676257$"},{q:"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?",a:"The y-intercept of the line in the log-log plot."},{q:"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?",a:"$-1.203973$"},{q:"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?",a:"$3.973007$"},{q:"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?",a:"$0.247228$"},{q:"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?",a:"As the constant term on the right side of the second normal equation."},{q:"In the power function example, what was the sum of $\\ln x_i$?",a:"$1.727221$"},{q:"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?",a:"$1.130984$"},{q:"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?",a:"$0.368765$"},{q:"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.",a:"Exponential growth"},{q:"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.",a:"Positive"},{q:"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.",a:"Method of Least Squares"},{q:"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.",a:"Partial derivatives (gradient)"}]},M={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset",hu:"Eredeti"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz"},showQuestion:{en:"Show question",hu:"Kérdés"}};function Fn({deck:r}){const{t:n,lang:e}=H(),t=An[r]??[],[s,a]=T.useState(null);return t.length?c.jsxs("div",{className:"deck glossary-deck",children:[c.jsx("h4",{children:n(M.glossary)}),c.jsx("div",{className:"deck-list",children:t.map((i,o)=>{const l=s===o;return c.jsxs("button",{className:"deck-item",onClick:()=>a(l?null:o),children:[c.jsxs("div",{className:"deck-item__head",children:[c.jsx("strong",{children:c.jsx(P,{markdown:i.term[e]})}),c.jsx("span",{children:l?"−":"+"})]}),l&&c.jsx("div",{className:"deck-item__body",children:c.jsx(P,{markdown:i.def[e]})})]},o)})})]}):null}const ze=r=>Array.from({length:r},(n,e)=>e);function Sn(r){const n=ze(r);for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function En({deck:r}){const{t:n}=H(),e=Tn[r]??[],[t,s]=T.useState(()=>ze(e.length)),[a,i]=T.useState(0),[o,l]=T.useState(!1),m=T.useMemo(()=>e[t[a]],[e,t,a]);if(!e.length)return null;const h=u=>{l(!1),i($=>($+u+e.length)%e.length)};return c.jsxs("div",{className:"deck flashcard-deck",children:[c.jsxs("div",{className:"deck__bar",children:[c.jsx("h4",{children:n(M.flashcards)}),c.jsxs("div",{className:"deck__ctrls",children:[c.jsxs("span",{className:"deck__count",children:[a+1," / ",e.length]}),c.jsx("button",{className:"btn",onClick:()=>{s(Sn(e.length)),i(0),l(!1)},children:n(M.shuffle)}),c.jsx("button",{className:"btn",onClick:()=>{s(ze(e.length)),i(0),l(!1)},children:n(M.reset)})]})]}),c.jsxs("button",{className:"deck-card",onClick:()=>l(u=>!u),children:[c.jsx("div",{className:"deck-card__tag",children:n(o?M.answer:M.question)}),c.jsx(P,{markdown:o?m.a:m.q})]}),c.jsxs("div",{className:"deck__nav",children:[c.jsx("button",{className:"btn",onClick:()=>h(-1),children:n(M.prev)}),c.jsx("button",{className:"btn btn--primary",onClick:()=>l(u=>!u),children:n(o?M.showQuestion:M.showAnswer)}),c.jsx("button",{className:"btn",onClick:()=>h(1),children:n(M.next)})]})]})}const In=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

// Linear regression y = a*x + b on the given points; returns {a, b}.
pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*exp(a*t) via regression on ln(y).  Returns {a, b}.
pair<double, double> exp_fit(const Vec& t, const Vec& y) {
    Vec ly(y.size());
    for (size_t i = 0; i < y.size(); ++i) ly[i] = log(y[i]);
    auto [a, lnb] = linreg(t, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {0, 1, 2, 3}, y = {2.0, 4.1, 8.2, 15.9};
    auto [a, b] = exp_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\\n";
}
`,Mn=`program exp_fit_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: t(n), y(n), a, b
  t = [0d0, 1d0, 2d0, 3d0]
  y = [2.0d0, 4.1d0, 8.2d0, 15.9d0]
  call linreg(t, log(y), n, a, b)        ! ln y = a t + ln b
  print '(A, F8.4, A, F8.4)', 'a = ', a, ', b = ', exp(b)
contains
  subroutine linreg(x, yy, m, a, b)
    integer, intent(in) :: m
    real(8), intent(in) :: x(m), yy(m)
    real(8), intent(out) :: a, b
    real(8) :: sx, sy, sxx, sxy
    sx = sum(x); sy = sum(yy); sxx = sum(x*x); sxy = sum(x*yy)
    a = (m*sxy - sx*sy)/(m*sxx - sx*sx)
    b = (sy - a*sx)/m
  end subroutine linreg
end program exp_fit_demo
`,Rn=`package main

import (
	"fmt"
	"math"
)

// Least-squares line fit z = slope*x + intercept.
func linFit(x, z []float64) (float64, float64) {
	n := float64(len(x))
	var sx, sz, sxx, sxz float64
	for i := range x {
		sx += x[i]
		sz += z[i]
		sxx += x[i] * x[i]
		sxz += x[i] * z[i]
	}
	slope := (n*sxz - sx*sz) / (n*sxx - sx*sx)
	intercept := (sz - slope*sx) / n
	return slope, intercept
}

// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
func expFit(t, y []float64) (float64, float64) {
	ly := make([]float64, len(y))
	for i := range y {
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(t, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{0, 1, 2, 3}
	y := []float64{2.0, 4.1, 8.2, 15.9}
	a, b := expFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\\n", a, b)
}
`,Ln=`function exp_fit(t, y)
    A = [t ones(length(t))]                  # ln y = a t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [0.0, 1, 2, 3]; y = [2.0, 4.1, 8.2, 15.9]
a, b = exp_fit(t, y); println("a = $a, b = $b")
`,Nn=`// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns [a, b].
// Fits the line ln y = a*t + ln b via the slope/intercept formulas.
function linFit(x, z) {
  const n = x.length;
  let sx = 0, sz = 0, sxx = 0, sxz = 0;
  for (let i = 0; i < n; i++) {
    sx += x[i]; sz += z[i]; sxx += x[i] * x[i]; sxz += x[i] * z[i];
  }
  const slope = (n * sxz - sx * sz) / (n * sxx - sx * sx);
  const intercept = (sz - slope * sx) / n;
  return [slope, intercept];
}

function expFit(t, y) {
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(t, ly);
  return [a, Math.exp(lnb)];
}

const t = [0, 1, 2, 3];
const y = [2.0, 4.1, 8.2, 15.9];
const [a, b] = expFit(t, y);
console.log(\`a = \${a.toFixed(4)}, b = \${b.toFixed(4)}\`);
`,Bn=`function [a, b] = exp_fit(t, y)
% EXP_FIT  Fit y ~ b*exp(a*t) by linear least squares on log(y).
    t = t(:); ly = log(y(:));
    p = [t, ones(numel(t),1)] \\ ly;   % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [0 1 2 3]; y = [2.0 4.1 8.2 15.9];
[a, b] = exp_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,Cn=`import numpy as np


def exp_fit(t, y):
    """Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b)."""
    t = np.asarray(t, float)
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([t, np.ones_like(t)])         # ln y = a*t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [0, 1, 2, 3]
    y = [2.0, 4.1, 8.2, 15.9]
    a, b = exp_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
`,Wn=`# Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
exp_fit <- function(t, y) {
  ly <- log(y)
  A <- cbind(t, 1)                    # ln y = a*t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(0, 1, 2, 3)
y <- c(2.0, 4.1, 8.2, 15.9)
res <- exp_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\\n", res$a, res$b))
`,Pn=`// Linear regression y = a x + b; returns (a, b).
fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b e^{a t} via regression on ln(y).
fn exp_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(t, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0];
    let y = [2.0, 4.1, 8.2, 15.9];
    let (a, b) = exp_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
`,Vn=`expFit[t_, y_] := Module[{A, p},
   A = Transpose[{t, ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {0, 1, 2, 3}; y = {2.0, 4.1, 8.2, 15.9};
Print["a, b = ", expFit[t, y]]
`,Hn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {                       // Gaussian elimination, partial pivot
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
Vec poly_fit(const Vec& t, const Vec& y, int deg) {
    int n = t.size(), m = deg + 1;
    Mat A(n, Vec(m, 1.0));
    for (int i = 0; i < n; ++i)
        for (int j = 1; j < m; ++j) A[i][j] = A[i][j - 1] * t[i];
    Mat N(m, Vec(m, 0.0)); Vec r(m, 0.0);
    for (int j = 0; j < m; ++j) {
        for (int k = 0; k < m; ++k) { double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * A[i][k]; N[j][k] = s; }
        double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * y[i]; r[j] = s;
    }
    return solve(N, r);
}

int main() {
    Vec t = {0, 1, 2, 3, 4}, y = {1.0, 1.8, 3.3, 4.5, 6.3};
    Vec c = poly_fit(t, y, 2);
    cout << "coeffs (low->high):";
    for (double v : c) cout << " " << v;
    cout << "\\n";
}
`,Dn=`program poly_fit_demo
  implicit none
  integer, parameter :: n = 5, deg = 2, m = deg + 1
  real(8) :: t(n), y(n), A(n,m), N_(m,m), r(m), c(m)
  integer :: i, j, k
  t = [0d0, 1d0, 2d0, 3d0, 4d0]
  y = [1.0d0, 1.8d0, 3.3d0, 4.5d0, 6.3d0]
  do i = 1, n
     do j = 1, m
        A(i,j) = t(i)**(j-1)
     end do
  end do
  N_ = matmul(transpose(A), A)          ! normal equations (A^T A) c = A^T y
  r  = matmul(transpose(A), y)
  c  = gauss_solve(N_, r, m)
  print '(A, 3F12.6)', 'coeffs (low->high): ', c
contains
  function gauss_solve(Ain, bin, sz) result(x)
    integer, intent(in) :: sz
    real(8), intent(in) :: Ain(sz,sz), bin(sz)
    real(8) :: M(sz,sz), b(sz), x(sz), f
    integer :: i, j, k, p
    M = Ain; b = bin
    do k = 1, sz
       p = k
       do i = k+1, sz
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       call swap_row(M, b, k, p, sz)
       do i = k+1, sz
          f = M(i,k)/M(k,k)
          M(i,k:sz) = M(i,k:sz) - f*M(k,k:sz)
          b(i) = b(i) - f*b(k)
       end do
    end do
    do i = sz, 1, -1
       x(i) = (b(i) - dot_product(M(i,i+1:sz), x(i+1:sz)))/M(i,i)
    end do
  end function gauss_solve
  subroutine swap_row(M, b, i, j, sz)
    integer, intent(in) :: i, j, sz
    real(8), intent(inout) :: M(sz,sz), b(sz)
    real(8) :: tmp(sz), tb
    tmp = M(i,:); M(i,:) = M(j,:); M(j,:) = tmp
    tb = b(i); b(i) = b(j); b(j) = tb
  end subroutine swap_row
end program poly_fit_demo
`,On=`package main

import (
	"fmt"
	"math"
)

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

// Least-squares polynomial fit via the normal equations (coeffs low -> high).
func polyFit(t, y []float64, degree int) []float64 {
	m := degree + 1
	V := make([][]float64, len(t))
	for r := range t {
		V[r] = make([]float64, m)
		for j := 0; j < m; j++ {
			V[r][j] = math.Pow(t[r], float64(j))
		}
	}
	ATA := make([][]float64, m)
	for i := range ATA {
		ATA[i] = make([]float64, m)
	}
	ATy := make([]float64, m)
	for r := range t {
		for i := 0; i < m; i++ {
			ATy[i] += V[r][i] * y[r]
			for j := 0; j < m; j++ {
				ATA[i][j] += V[r][i] * V[r][j]
			}
		}
	}
	return solve(ATA, ATy)
}

func main() {
	t := []float64{0, 1, 2, 3, 4}
	y := []float64{1.0, 1.8, 3.3, 4.5, 6.3}
	fmt.Println("coeffs (low->high):", polyFit(t, y, 2))
}
`,Gn=`function poly_fit(t, y, degree)
    A = [ti^j for ti in t, j in 0:degree]   # Vandermonde: columns 1, t, t^2, ...
    return A \\ y                              # least-squares solution
end

t = [0.0, 1, 2, 3, 4]; y = [1.0, 1.8, 3.3, 4.5, 6.3]
println("coeffs (low->high): ", poly_fit(t, y, 2))
`,Xn=`// Least-squares polynomial fit via the normal equations.
// Returns coefficients (low -> high).
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}

function polyFit(t, y, degree = 2) {
  const m = degree + 1;
  // Vandermonde columns 1, t, t^2, ...
  const V = t.map((ti) => Array.from({ length: m }, (_, j) => ti ** j));
  // Normal equations (V^T V) c = V^T y.
  const ATA = Array.from({ length: m }, () => new Array(m).fill(0));
  const ATy = new Array(m).fill(0);
  for (let r = 0; r < t.length; r++) {
    for (let i = 0; i < m; i++) {
      ATy[i] += V[r][i] * y[r];
      for (let j = 0; j < m; j++) ATA[i][j] += V[r][i] * V[r][j];
    }
  }
  return solve(ATA, ATy);
}

const t = [0, 1, 2, 3, 4];
const y = [1.0, 1.8, 3.3, 4.5, 6.3];
console.log("coeffs (low->high):", polyFit(t, y, 2));
`,Yn=`function c = poly_fit(t, y, degree)
% POLY_FIT  Least-squares polynomial fit; c are coefficients low -> high.
    t = t(:); y = y(:);
    A = zeros(numel(t), degree+1);
    for j = 0:degree
        A(:, j+1) = t .^ j;          % columns 1, t, t^2, ...
    end
    c = A \\ y;                        % least-squares solution
end

% --- Demo ---
t = [0 1 2 3 4]; y = [1.0 1.8 3.3 4.5 6.3];
disp(poly_fit(t, y, 2)');
`,Zn=`import numpy as np


def poly_fit(t, y, degree=2):
    """Least-squares polynomial fit; returns coefficients (low -> high)."""
    t = np.asarray(t, float)
    y = np.asarray(y, float)
    A = np.vander(t, degree + 1, increasing=True)    # columns 1, t, t^2, ...
    coeffs, *_ = np.linalg.lstsq(A, y, rcond=None)    # minimizes ||A c - y||
    return coeffs


if __name__ == "__main__":
    t = [0, 1, 2, 3, 4]
    y = [1.0, 1.8, 3.3, 4.5, 6.3]
    print("coeffs (low->high):", poly_fit(t, y, 2))
`,Qn=`# Least-squares polynomial fit; returns coefficients (low -> high).
poly_fit <- function(t, y, degree = 2) {
  A <- outer(t, 0:degree, \`^\`)        # columns 1, t, t^2, ...
  as.vector(qr.solve(A, y))           # minimizes ||A c - y||
}

t <- c(0, 1, 2, 3, 4)
y <- c(1.0, 1.8, 3.3, 4.5, 6.3)
cat("coeffs (low->high):", poly_fit(t, y, 2), "\\n")
`,Kn=`// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; }
        x[i] = s / a[i][i];
    }
    x
}
fn poly_fit(t: &[f64], y: &[f64], deg: usize) -> Vec<f64> {
    let (n, m) = (t.len(), deg + 1);
    let a: Vec<Vec<f64>> = t.iter().map(|&ti| (0..m).map(|j| ti.powi(j as i32)).collect()).collect();
    let mut nn = vec![vec![0.0; m]; m];
    let mut r = vec![0.0; m];
    for j in 0..m {
        for k in 0..m { for i in 0..n { nn[j][k] += a[i][j] * a[i][k]; } }
        for i in 0..n { r[j] += a[i][j] * y[i]; }
    }
    solve(nn, r)
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0, 4.0];
    let y = [1.0, 1.8, 3.3, 4.5, 6.3];
    println!("coeffs (low->high): {:?}", poly_fit(&t, &y, 2));
}
`,Un=`polyFit[t_, y_, degree_] := Module[{A},
   A = Table[ti^j, {ti, t}, {j, 0, degree}];   (* Vandermonde *)
   LeastSquares[A, y]];
t = {0, 1, 2, 3, 4}; y = {1.0, 1.8, 3.3, 4.5, 6.3};
Print["coeffs (low->high): ", polyFit[t, y, 2]]
`,Jn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*t^a via regression on log-log data.  Returns {a, b}.
pair<double, double> power_fit(const Vec& t, const Vec& y) {
    Vec lt(t.size()), ly(y.size());
    for (size_t i = 0; i < t.size(); ++i) { lt[i] = log(t[i]); ly[i] = log(y[i]); }
    auto [a, lnb] = linreg(lt, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {1, 2, 3, 4}, y = {2.0, 5.6, 9.7, 16.0};
    auto [a, b] = power_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\\n";
}
`,ei=`program power_fit_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: t(n), y(n), a, b
  t = [1d0, 2d0, 3d0, 4d0]
  y = [2.0d0, 5.6d0, 9.7d0, 16.0d0]
  call linreg(log(t), log(y), n, a, b)   ! ln y = a ln t + ln b
  print '(A, F8.4, A, F8.4)', 'a = ', a, ', b = ', exp(b)
contains
  subroutine linreg(x, yy, m, a, b)
    integer, intent(in) :: m
    real(8), intent(in) :: x(m), yy(m)
    real(8), intent(out) :: a, b
    real(8) :: sx, sy, sxx, sxy
    sx = sum(x); sy = sum(yy); sxx = sum(x*x); sxy = sum(x*yy)
    a = (m*sxy - sx*sy)/(m*sxx - sx*sx)
    b = (sy - a*sx)/m
  end subroutine linreg
end program power_fit_demo
`,ti=`package main

import (
	"fmt"
	"math"
)

// Least-squares line fit z = slope*x + intercept.
func linFit(x, z []float64) (float64, float64) {
	n := float64(len(x))
	var sx, sz, sxx, sxz float64
	for i := range x {
		sx += x[i]
		sz += z[i]
		sxx += x[i] * x[i]
		sxz += x[i] * z[i]
	}
	slope := (n*sxz - sx*sz) / (n*sxx - sx*sx)
	intercept := (sz - slope*sx) / n
	return slope, intercept
}

// Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
func powerFit(t, y []float64) (float64, float64) {
	lt := make([]float64, len(t))
	ly := make([]float64, len(y))
	for i := range t {
		lt[i] = math.Log(t[i])
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(lt, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{1, 2, 3, 4}
	y := []float64{2.0, 5.6, 9.7, 16.0}
	a, b := powerFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\\n", a, b)
}
`,ni=`function power_fit(t, y)
    A = [log.(t) ones(length(t))]            # ln y = a ln t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [1.0, 2, 3, 4]; y = [2.0, 5.6, 9.7, 16.0]
a, b = power_fit(t, y); println("a = $a, b = $b")
`,ii=`// Fit y ~ b*t^a by linear least squares on log-log data. Returns [a, b].
// Fits the line ln y = a*ln t + ln b via the slope/intercept formulas.
function linFit(x, z) {
  const n = x.length;
  let sx = 0, sz = 0, sxx = 0, sxz = 0;
  for (let i = 0; i < n; i++) {
    sx += x[i]; sz += z[i]; sxx += x[i] * x[i]; sxz += x[i] * z[i];
  }
  const slope = (n * sxz - sx * sz) / (n * sxx - sx * sx);
  const intercept = (sz - slope * sx) / n;
  return [slope, intercept];
}

function powerFit(t, y) {
  const lt = t.map(Math.log);
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(lt, ly);
  return [a, Math.exp(lnb)];
}

const t = [1, 2, 3, 4];
const y = [2.0, 5.6, 9.7, 16.0];
const [a, b] = powerFit(t, y);
console.log(\`a = \${a.toFixed(4)}, b = \${b.toFixed(4)}\`);
`,ai=`function [a, b] = power_fit(t, y)
% POWER_FIT  Fit y ~ b*t^a by linear least squares on log-log data.
    lt = log(t(:)); ly = log(y(:));
    p = [lt, ones(numel(lt),1)] \\ ly; % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [1 2 3 4]; y = [2.0 5.6 9.7 16.0];
[a, b] = power_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,si=`import numpy as np


def power_fit(t, y):
    """Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b)."""
    lt = np.log(np.asarray(t, float))
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([lt, np.ones_like(lt)])       # ln y = a*ln t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [1, 2, 3, 4]
    y = [2.0, 5.6, 9.7, 16.0]
    a, b = power_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
`,ri=`# Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
power_fit <- function(t, y) {
  lt <- log(t)
  ly <- log(y)
  A <- cbind(lt, 1)                   # ln y = a*ln t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(1, 2, 3, 4)
y <- c(2.0, 5.6, 9.7, 16.0)
res <- power_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\\n", res$a, res$b))
`,oi=`fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b t^a via regression on log-log data.
fn power_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let lt: Vec<f64> = t.iter().map(|v| v.ln()).collect();
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(&lt, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [1.0, 2.0, 3.0, 4.0];
    let y = [2.0, 5.6, 9.7, 16.0];
    let (a, b) = power_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
`,li=`powerFit[t_, y_] := Module[{A, p},
   A = Transpose[{Log[t], ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a ln t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {1, 2, 3, 4}; y = {2.0, 5.6, 9.7, 16.0};
Print["a, b = ", powerFit[t, y]]
`,hi=Object.assign({"./exponential.cpp":In,"./exponential.f90":Mn,"./exponential.go":Rn,"./exponential.jl":Ln,"./exponential.js":Nn,"./exponential.m":Bn,"./exponential.py":Cn,"./exponential.r":Wn,"./exponential.rs":Pn,"./exponential.wl":Vn,"./polynomial.cpp":Hn,"./polynomial.f90":Dn,"./polynomial.go":On,"./polynomial.jl":Gn,"./polynomial.js":Xn,"./polynomial.m":Yn,"./polynomial.py":Zn,"./polynomial.r":Qn,"./polynomial.rs":Kn,"./polynomial.wl":Un,"./power.cpp":Jn,"./power.f90":ei,"./power.go":ti,"./power.jl":ni,"./power.js":ii,"./power.m":ai,"./power.py":si,"./power.r":ri,"./power.rs":oi,"./power.wl":li}),I=(r,n)=>hi[`./${r}.${n}`],ci={polynomial:{en:"Least-squares polynomial fit",hu:"Legkisebb négyzetes polinomillesztés"},exponential:{en:"Exponential fit  y ≈ b·e^{a t}",hu:"Exponenciális illesztés  y ≈ b·e^{a t}"},power:{en:"Power-law fit  y ≈ b·t^a",hu:"Hatványfüggvény-illesztés  y ≈ b·t^a"}},mi=r=>({id:r,caption:ci[r],snippets:{matlab:I(r,"m"),python:I(r,"py"),cpp:I(r,"cpp"),julia:I(r,"jl"),rust:I(r,"rs"),fortran:I(r,"f90"),wolfram:I(r,"wl"),javascript:I(r,"js"),go:I(r,"go"),r:I(r,"r")}}),ui={polynomial:["polynomial"],nonlinear:["exponential","power"]};function $i(r){return(ui[r]??[]).map(mi)}function pi({block:r}){const{t:n}=H();return c.jsxs("figure",{className:"data-table",children:[r.caption&&c.jsx("figcaption",{children:c.jsx(R,{text:n(r.caption)})}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsx("tr",{children:r.headers.map((e,t)=>c.jsx("th",{children:c.jsx(R,{text:e})},t))})}),c.jsxs("tbody",{children:[r.rows.map((e,t)=>c.jsx("tr",{children:e.map((s,a)=>c.jsx("td",{children:c.jsx(R,{text:s})},a))},t)),r.totals&&c.jsx("tr",{className:"totals",children:r.totals.map((e,t)=>c.jsx("td",{children:c.jsx(R,{text:e})},t))})]})]})]})}function di({block:r}){const{t:n,lang:e}=H(),t=e==="hu"?"Megoldás":"Show solution";return c.jsxs("div",{className:"exercises",children:[c.jsx("h4",{children:n(r.label)}),c.jsx("p",{children:c.jsx(R,{text:n(r.intro)})}),c.jsx("div",{className:"exercise-grid",children:r.items.map((s,a)=>c.jsxs("div",{className:"exercise-card",children:[c.jsx("div",{className:"exercise-tag",children:c.jsx(R,{text:s.tag})}),c.jsx("table",{className:"mini",children:c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("th",{children:c.jsx(R,{text:s.headers[0]})}),s.cols.map(([i],o)=>c.jsx("td",{children:i},o))]}),c.jsxs("tr",{children:[c.jsx("th",{children:c.jsx(R,{text:s.headers[1]})}),s.cols.map(([,i],o)=>c.jsx("td",{children:i},o))]})]})})]},a))}),r.solution&&c.jsx("div",{className:"prose",children:c.jsx(P,{markdown:`<details class="reveal-solution"><summary>${t}</summary>

${r.solution}

</details>`})})]})}function fi({block:r,sectionId:n}){const{t:e}=H();switch(r.type){case"text":return c.jsx("div",{className:"prose",children:c.jsx(P,{markdown:e(r)})});case"math":return c.jsx("div",{className:"math-display",children:c.jsx(P,{markdown:`$$
${r.tex}
$$`})});case"callout":return c.jsx("div",{className:`callout ${r.variant||"note"}`,children:c.jsx(P,{markdown:e(r)})});case"theorem":case"example":return c.jsxs("div",{className:`box ${r.type}`,children:[c.jsx("div",{className:"box-label",children:e(r.label)}),c.jsx("div",{className:"box-body",children:c.jsx(P,{markdown:e(r)})})]});case"table":return c.jsx(pi,{block:r});case"exercises":return c.jsx(di,{block:r});case"demo":return c.jsx(wn,{component:r.component,caption:r.caption?e(r.caption):void 0});case"quiz":return c.jsx(jn,{refKey:r.ref,sectionId:n});case"glossary":return c.jsx(Fn,{deck:r.deck});case"flashcards":return c.jsx(En,{deck:r.deck});default:return null}}function xi({section:r}){const{t:n}=H();return c.jsxs("article",{className:"section",id:`sec-${r.id}`,children:[c.jsxs("h2",{className:"section-title",children:[n(r.title),qt(r.id)&&c.jsx("span",{className:"done-badge",children:"✓"})]}),r.blocks.map((e,t)=>c.jsx(fi,{block:e,sectionId:r.id},t)),$i(r.id).map(e=>c.jsx(pt,{snippets:e.snippets,caption:e.caption},e.id))]})}const lt=Xe,gi={intro:"9",line:"9.1",polynomial:"9.2",nonlinear:"9.3"},bi=lt.map(r=>({id:`sec-${r.id}`,no:gi[r.id]??"9",title:r.title,blurb:{en:"",hu:""}}));function ji(){const{lang:r}=H(),{theme:n}=ut(),e=$t();return T.useEffect(()=>{xt(r)},[r]),T.useEffect(()=>{bt(n)},[n]),T.useEffect(()=>{const t=decodeURIComponent(e.hash.replace(/^#/,""));t&&requestAnimationFrame(()=>{var s;return(s=document.getElementById(t))==null?void 0:s.scrollIntoView()})},[e.hash]),c.jsxs("div",{className:"ch-least-squares",children:[c.jsx(dt,{sections:bi}),c.jsx("main",{className:"content content--full",children:lt.map(t=>c.jsx(xi,{section:t},t.id))})]})}export{ji as default};
