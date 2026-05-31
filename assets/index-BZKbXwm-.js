var ct=Object.defineProperty;var Le=r=>{throw TypeError(r)};var ht=(r,n,e)=>n in r?ct(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e;var k=(r,n,e)=>ht(r,typeof n!="symbol"?n+"":n,e),mt=(r,n,e)=>n.has(r)||Le("Cannot "+e);var Me=(r,n,e)=>n.has(r)?Le("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,e);var re=(r,n,e)=>(mt(r,n,"access private method"),e);import{r as T,j as h,d as V,i as ut,e as pt}from"./index-Uli9iIzW.js";import{k as ge,a as D,C as ft,S as dt,b as $t}from"./SolutionsBlock-Dkimkm5R.js";import{P as ne}from"./plotly.min-CBCOQl-i.js";const Xe="lsq.lang",xt=new Set;let Ye=(()=>{try{return localStorage.getItem(Xe)||"en"}catch{return"en"}})();function bt(r){if(!(r!=="hu"&&r!=="en")){Ye=r;try{localStorage.setItem(Xe,r)}catch{}document.documentElement.setAttribute("lang",r),xt.forEach(n=>n(r))}}function y(r){return r==null?"":typeof r=="string"?r:r[Ye]??r.en??r.hu??""}const q={demoReset:{hu:"Visszaállítás",en:"Reset"},demoAddPoint:{hu:"Pont hozzáadása",en:"Add point"},demoBestFit:{hu:"Legjobb illesztés",en:"Best fit"},demoGuess:{hu:"Tippelj!",en:"Guess mode"},degree:{hu:"Fokszám",en:"Degree"},slope:{hu:"Meredekség",en:"Slope"},intercept:{hu:"Tengelymetszet",en:"Intercept"},error:{hu:"Hiba",en:"Error"},optimalError:{hu:"Optimális hiba",en:"Optimal error"},yourError:{hu:"A te hibád",en:"Your error"},linearizedSpace:{hu:"Linearizált tér",en:"Linearized space"},originalSpace:{hu:"Eredeti tér",en:"Original space"},linearError:{hu:"Linearizált hiba",en:"Linearized error"},nonlinearError:{hu:"Eredeti (nemlineáris) hiba",en:"Original (nonlinear) error"},expModel:{hu:"Exponenciális  b·e^{ax}",en:"Exponential  b·e^{ax}"},powerModel:{hu:"Hatvány  b·x^a",en:"Power  b·x^a"},dragHint:{hu:"Húzd a kék pontokat — az illesztés azonnal frissül.",en:"Drag the blue points — the fit updates live."}},gt="lsq.theme",ye=new Set;function yt(r){if(!(r!=="light"&&r!=="dark")){document.documentElement.setAttribute("data-theme",r);try{localStorage.setItem(gt,r)}catch{}ye.forEach(n=>n(r))}}function ve(r){return ye.add(r),()=>ye.delete(r)}function J(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}const _t={id:"intro",title:{hu:"Bevezetés",en:"Introduction"},blocks:[{type:"text",hu:"Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\\mathbf{a}$ vektorban tárolva a $g(x;\\mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i=0,1,\\ldots,n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban.",en:"Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\\mathbf{a}$, and the notation $g(x;\\mathbf{a})$ emphasizes the dependence of $g$ on the parameters $\\mathbf{a}$. Suppose we have measurements $y_i$ ($i=0,1,\\ldots,n$) of the function values at the mesh points $x_i$."},{type:"text",hu:'Ha több mérési értékünk van, mint paraméter, akkor általában nem tudunk olyan görbét rajzolni, amely minden ponton átmegy (a mérési hibák miatt). Ezért a célunk az, hogy megkeressük azokat a paraméter értékeket, amelyekhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.',en:'If we have more measurements than parameters, then in general there is no curve whose graph goes through all the points (due to measurement error). Therefore our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.'},{type:"text",hu:'Nem nyilvánvaló, mit értünk azon, hogy a függvény „legkevésbé" tér el. Lehetséges az illesztés hibáját mérni az alábbi képletekkel:',en:"It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems. Possible error formulas are:"},{type:"math",tex:"F_1(\\mathbf{a}) := \\max\\{|g(x_i;\\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}"},{type:"math",tex:"F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i;\\mathbf{a}) - y_i|."},{type:"text",hu:"A probléma az, hogy sem $F_1$, sem $F_2$ nem differenciálható $\\mathbf{a}$ szerint, ezért nehéz minimalizálni. Ezt kiküszöbölhetjük az ún. **négyzetes hibával**:",en:"The problem is that neither $F_1$ nor $F_2$ is differentiable with respect to $\\mathbf{a}$, so they are hard to minimize. This technicality can be eliminated with the so-called **least square error**:"},{type:"math",tex:"F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i;\\mathbf{a}) - y_i)^2."},{type:"text",hu:"A matematikai feladat tehát az, hogy minimalizáljuk az $F(\\mathbf{a})$ függvényt, és a minimumhelyhez tartozó $\\bar{\\mathbf{a}}$ paraméterekkel definiált $g(x;\\bar{\\mathbf{a}})$ függvényt tekintjük a pontokra legjobban illeszkedő függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**. A fejezetben előbb egyenest, majd tetszőleges polinomot, végül néhány nemlineáris függvényt illesztünk.",en:"The mathematical problem is therefore to minimize $F(\\mathbf{a})$, and consider the graph of $g(x;\\bar{\\mathbf{a}})$ corresponding to the minimum point $\\bar{\\mathbf{a}}$ as the best fitted curve. This is called the **method of least squares**. In this chapter we study line fitting first, then arbitrary polynomials, and finally some nonlinear functions."},{type:"callout",variant:"note",hu:"**Miért a négyzetes hiba?** Differenciálható, így a minimum a parciális deriváltak nullhelyén kereshető; a nagy eltéréseket erősebben bünteti; és — mint látni fogjuk — lineáris paraméterek esetén zárt alakú, egyértelmű megoldást ad.",en:"**Why squared error?** It is differentiable, so the minimum can be found where the partial derivatives vanish; it penalizes large deviations more strongly; and — as we will see — for linearly-appearing parameters it yields a closed-form, unique solution."},{type:"quiz",ref:"intro"}]},kt={id:"line",title:{hu:"9.1. Egyenes illesztése",en:"9.1. Line Fitting"},blocks:[{type:"text",hu:"Adottak $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ pontok, ahol az $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése minimális:",en:"Given data points $(x_i, y_i)$, $i = 0, 1, \\ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function $g(x) = ax + b$ which minimizes the least square error:"},{type:"math",tex:"F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2. \\tag{1}"},{type:"text",hu:"Az $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint:",en:"The function $F$ is continuously partially differentiable with respect to $a$ and $b$:"},{type:"math",tex:"\\begin{aligned} \\frac{\\partial F}{\\partial a}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i)x_i,\\\\ \\frac{\\partial F}{\\partial b}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i). \\end{aligned} \\tag{2}"},{type:"text",hu:"A (2) deriváltakat nullával egyenlővé téve és átrendezve kapjuk az ún. **Gauss-féle normálegyenleteket**:",en:"Making the partial derivatives in (2) equal to 0 and rearranging gives the so-called **Gaussian normal equations**:"},{type:"math",tex:"\\begin{aligned} a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i &= \\sum_{i=0}^{n} x_i y_i,\\\\ a\\sum_{i=0}^{n} x_i + b(n+1) &= \\sum_{i=0}^{n} y_i. \\end{aligned} \\tag{3}"},{type:"text",hu:"Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Akkor és csak akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem nulla:",en:"This is a linear system for $a$ and $b$. It is solvable if and only if the determinant of its coefficient matrix is nonzero:"},{type:"math",tex:"d := \\det\\begin{pmatrix} \\sum_{i=0}^{n} x_i^2 & \\sum_{i=0}^{n} x_i \\\\ \\sum_{i=0}^{n} x_i & n+1 \\end{pmatrix} = (n+1)\\sum_{i=0}^{n} x_i^2 - \\left(\\sum_{i=0}^{n} x_i\\right)^2."},{type:"text",hu:"A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség szerint",en:"The Cauchy–Bunyakovsky–Schwarz inequality yields"},{type:"math",tex:"\\left(\\sum_{i=0}^{n} x_i\\right)^2 = \\left(\\sum_{i=0}^{n} 1\\cdot x_i\\right)^2 \\le \\sum_{i=0}^{n} 1 \\sum_{i=0}^{n} x_i^2 = (n+1)\\sum_{i=0}^{n} x_i^2,"},{type:"text",hu:"ezért $d \\ge 0$. Ha legalább két $x_i$ különbözik, akkor a szigorú egyenlőtlenség áll fenn, azaz $d > 0$. Így a (3) rendszernek pontosan egy megoldása van:",en:"therefore $d \\ge 0$. If at least two mesh points differ, the strict inequality $d > 0$ holds. Hence system (3) has a unique solution:"},{type:"math",tex:"\\bar{a} = \\frac{(n+1)\\left(\\sum x_i y_i\\right) - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}, \\qquad \\bar{b} = \\frac{\\left(\\sum x_i^2\\right)\\left(\\sum y_i\\right) - \\left(\\sum x_i y_i\\right)\\left(\\sum x_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}."},{type:"text",hu:"Az $F$-nek az $(\\bar a, \\bar b)$ pontban lokális szélsőértéke van, ha a Hesse-determináns pozitív:",en:"$F$ has a local extremum at $(\\bar a, \\bar b)$ if the Hessian determinant is positive:"},{type:"math",tex:"D(\\bar a,\\bar b) := \\frac{\\partial^2 F}{\\partial a^2}\\cdot\\frac{\\partial^2 F}{\\partial b^2} - \\left(\\frac{\\partial^2 F}{\\partial a\\,\\partial b}\\right)^2 > 0."},{type:"text",hu:"Mivel",en:"Since"},{type:"math",tex:"\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum_{i=0}^{n} x_i^2,\\quad \\frac{\\partial^2 F}{\\partial b^2} = 2(n+1),\\quad \\frac{\\partial^2 F}{\\partial a\\,\\partial b} = 2\\sum_{i=0}^{n} x_i,"},{type:"text",hu:"ezért $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, és mivel $\\frac{\\partial^2 F}{\\partial a^2} > 0$, az $(\\bar a, \\bar b)$ pont lokális — és (kvadratikus $F$ miatt) globális — minimum.",en:"we get $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, and since $\\frac{\\partial^2 F}{\\partial a^2} > 0$, the point $(\\bar a, \\bar b)$ is a local — and (as $F$ is quadratic) global — minimum."},{type:"theorem",label:{hu:"9.1. Tétel",en:"Theorem 9.1"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \\ne x_j$. Ekkor a $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ szélsőérték-feladatnak létezik egyértelmű megoldása, amely teljesíti a (3) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) such that there exist $i$ and $j$ with $x_i \\ne x_j$. Then the problem $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ has a unique solution, which satisfies the Gaussian normal equations (3)."},{type:"example",label:{hu:"9.2. Példa",en:"Example 9.2"},hu:"Keressük meg az alábbi adatokra legjobban illeszkedő egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ értékeket, és az utolsó sorban az összegeket.",en:"Find the line of best fit to the data below. We compute $x_i^2$ and $x_i y_i$ in separate columns, and the column sums in the last row."},{type:"table",caption:{hu:"9.1. táblázat — Egyenes illesztése",en:"Table 9.1 — Line fitting"},headers:["$x_i$","$y_i$","$x_i^2$","$x_i y_i$"],rows:[["-1.0","0.0","1.00","0.00"],["1.0","1.2","1.00","1.20"],["2.5","1.9","6.25","4.75"],["3.0","2.5","9.00","7.50"],["4.0","3.1","16.00","12.40"],["4.5","3.2","20.25","14.40"],["6.0","4.5","36.00","27.00"]],totals:["20.0","16.4","89.50","67.25"]},{type:"text",hu:"Az összegeket a (3) normálegyenletekbe helyettesítve: $89.5a + 20.0b = 67.25$ és $20.0a + 7b = 16.4$, amelynek megoldása $a = 0.630243$, $b = 0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.",en:"Substituting the sums into the normal equations (3): $89.5a + 20.0b = 67.25$ and $20.0a + 7b = 16.4$, with solution $a = 0.630243$, $b = 0.542163$. The error of the fitting is $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$."},{type:"demo",component:"line",caption:{hu:"9.1. ábra — Egyenes illesztése (interaktív)",en:"Figure 9.1 — Line fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen egyenest a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Find the line of best fit to the data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["0.0","-1.8"],["1.0","1.3"],["1.5","2.5"],["2.0","3.9"],["3.0","8.3"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["-1.0","4.2"],["1.0","2.1"],["2.0","1.3"],["3.0","2.1"],["4.0","2.8"],["5.0","-2.1"],["6.0","-3.0"]]},{tag:"(c)",headers:["$x_i$","$y_i$"],cols:[["-1.0","-0.1"],["1.0","3.4"],["3.0","7.3"],["5.0","15.1"],["9.0","29.1"],["10.0","35.6"],["13.0","56.3"]]}]},{type:"glossary",deck:"line"},{type:"flashcards",deck:"line"},{type:"quiz",ref:"line"}]},zt={id:"polynomial",title:{hu:"9.2. Polinom illesztése",en:"9.2. Polynomial Curve Fitting"},blocks:[{type:"text",hu:"Most $m$-edfokú polinom illesztését vizsgáljuk a megadott $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontokra: keresünk olyan $a_m, a_{m-1}, \\ldots, a_0$ számokat, amelyek minimalizálják az",en:"Now we study polynomial curve fitting of degree $m$ to the data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$): we look for parameters $a_m, a_{m-1}, \\ldots, a_0$ which minimize"},{type:"math",tex:"F(a_m,\\ldots,a_0) := \\sum_{i=0}^{n} \\left(a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_1 x_i + a_0 - y_i\\right)^2"},{type:"text",hu:"$m+1$-változós függvényt. Ha $n \\le m$, akkor a pontokon átmenő $m$-edfokú polinom létezik ($F$ minimuma 0), amit interpolációval kaphatunk meg. Ezért az $m < n$ eset az érdekes, ekkor $F$ általában nem veszi fel a 0 értéket.",en:"a function of $m+1$ variables. If $n \\le m$, then a polynomial of degree $m$ interpolates the data (the minimum of $F$ is 0), obtainable by interpolation. So the interesting case is $m < n$, where $F$ is generally positive."},{type:"text",hu:"A szélsőérték ott lehet, ahol minden parciális derivált nulla. Ezeket nullával egyenlővé téve és átrendezve kapjuk a **normálegyenleteket** (4):",en:"An extremum can occur only where all partial derivatives are 0. Setting them to zero and rearranging gives the **normal equations** (4):"},{type:"math",tex:"\\begin{aligned} a_m\\!\\sum x_i^{2m} + \\cdots + a_0\\!\\sum x_i^{m} &= \\sum x_i^{m} y_i\\\\ a_m\\!\\sum x_i^{2m-1} + \\cdots + a_0\\!\\sum x_i^{m-1} &= \\sum x_i^{m-1} y_i\\\\ &\\vdots\\\\ a_m\\!\\sum x_i^{m} + \\cdots + a_0(n+1) &= \\sum y_i \\end{aligned} \\tag{4}"},{type:"text",hu:"A (4) rendszer együtthatómátrixa:",en:"The coefficient matrix of system (4) is:"},{type:"math",tex:"\\mathbf{A} = \\begin{pmatrix} \\sum x_i^{2m} & \\sum x_i^{2m-1} & \\cdots & \\sum x_i^{m}\\\\ \\sum x_i^{2m-1} & \\sum x_i^{2m-2} & \\cdots & \\sum x_i^{m-1}\\\\ \\vdots & \\vdots & & \\vdots\\\\ \\sum x_i^{m} & \\sum x_i^{m-1} & \\cdots & \\sum 1 \\end{pmatrix}"},{type:"text",hu:"Belátjuk, hogy $\\mathbf{A}$ invertálható, mert **pozitív definit**. A $jk$-adik eleme $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Legyen $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Ekkor",en:"We show $\\mathbf{A}$ is invertible because it is **positive definite**. Its $jk$-th element is $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Let $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Then"},{type:"math",tex:"\\mathbf{z}^T \\mathbf{A} \\mathbf{z} = \\sum_{j=1}^{m+1}\\sum_{k=1}^{m+1}\\sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k = \\sum_{i=0}^{n}\\left(\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\\right)^2 \\ge 0."},{type:"text",hu:"Ha $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, akkor $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ minden $i$-re. Ha az $x_i$-k páronként különböznek, akkor a $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ legfeljebb $m$-edfokú polinomnak $n+1$ különböző gyöke van. Ha $m \\le n$, az algebra alaptétele szerint $p \\equiv 0$, azaz $z_j = 0$ minden $j$-re. Tehát $\\mathbf{A}$ pozitív definit.",en:"If $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, then $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ for all $i$. If the $x_i$ are pairwise distinct, the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ of degree at most $m$ has $n+1$ distinct roots. If $m \\le n$, the fundamental theorem of algebra gives $p \\equiv 0$, i.e. $z_j = 0$ for all $j$. Hence $\\mathbf{A}$ is positive definite."},{type:"text",hu:"Mivel $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, azaz $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, az $F$-nek $\\bar{\\mathbf{a}}$-ban lokális — és kvadratikus volta miatt globális — minimuma van.",en:"Since $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, i.e. $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, the function $F$ has a local — and, being quadratic, global — minimum at $\\bar{\\mathbf{a}}$."},{type:"theorem",label:{hu:"9.3. Tétel",en:"Theorem 9.3"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \\le n$. Ekkor a $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ feladatnak létezik egyértelmű megoldása, amely teljesíti a (4) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) with pairwise distinct mesh points $x_i$, and let $m \\le n$. Then the problem $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ has a unique solution, which satisfies the normal equations (4)."},{type:"example",label:{hu:"9.4. Példa",en:"Example 9.4"},hu:"Illesszünk parabolát az alábbi adatokra. A táblázatban kiszámoljuk a szükséges hatványösszegeket.",en:"Fit a parabola to the data below. The table computes the required power sums."},{type:"table",caption:{hu:"9.2. táblázat — Parabola illesztése",en:"Table 9.2 — Parabola fitting"},headers:["$x_i$","$y_i$","$x_i^4$","$x_i^3$","$x_i^2$","$x_i^2 y_i$","$x_i y_i$"],rows:[["-1.0","1.4","1.0000","-1.000","1.00","1.400","-1.40"],["0.0","1.9","0.0000","0.000","0.00","0.000","0.00"],["0.5","1.6","0.0625","0.125","0.25","0.400","0.80"],["1.0","1.7","1.0000","1.000","1.00","1.700","1.70"],["2.0","0.2","16.0000","8.000","4.00","0.800","0.40"],["2.5","-0.1","39.0625","15.625","6.25","-0.625","-0.25"],["3.0","-2.0","81.0000","27.000","9.00","-18.000","-6.00"]],totals:["8.0","4.7","138.1250","50.750","21.50","-14.325","-4.75"]},{type:"text",hu:"A (4) egyenletrendszer: $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Megoldása $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. Az illesztés hibája $0.0964456$.",en:"System (4): $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Solution $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. The fitting error is $0.0964456$."},{type:"demo",component:"polynomial",caption:{hu:"9.2. ábra — Polinom illesztése (interaktív)",en:"Figure 9.2 — Polynomial fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen parabolát a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Fit a parabola to the given data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["-2.0","-2.1"],["-1.0","1.4"],["1.0","0.5"],["2.0","-2.5"],["3.0","-7.2"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["1.0","2.5"],["2.0","1.2"],["3.0","-2.0"],["4.0","3.9"],["5.0","6.2"],["6.0","8.3"]]}]},{type:"glossary",deck:"polynomial"},{type:"flashcards",deck:"polynomial"},{type:"quiz",ref:"polynomial"}]},vt={id:"nonlinear",title:{hu:"9.3. Nemlineáris függvény illesztése",en:"9.3. Special Nonlinear Curve Fitting"},blocks:[{type:"text",hu:"A módszer kiterjeszthető nemlineáris függvényekre is, ahol a paraméterek lineárisan szerepelnek — ekkor a normálegyenletek lineárisak. Az általános esetben azonban nemlineárisak lehetnek. Tekintsünk egy $b e^{ax}$ alakú exponenciális függvényt. A négyzetes hiba:",en:"The method extends to nonlinear functions where the parameters appear linearly — then the normal equations are linear. In general, though, they can be nonlinear. Consider an exponential function of the form $b e^{ax}$. The least square error is:"},{type:"math",tex:"F(a, b) = \\sum_{i=0}^{n} (b e^{a x_i} - y_i)^2,"},{type:"text",hu:"amelynek kritikus pontjait a következő **nemlineáris** rendszer adja:",en:"whose critical points are the solutions of the following **nonlinear** system:"},{type:"math",tex:"\\begin{aligned} 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, b e^{a x_i} x_i &= 0,\\\\ 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, e^{a x_i} &= 0. \\end{aligned}"},{type:"text",hu:"Ezt analitikusan nem tudjuk megoldani. Numerikusan megoldható, de a gyakorlatban gyakran a **linearizációs módszert** használjuk.",en:"We cannot solve this analytically. It can be solved numerically, but in practice we often use the **method of linearization**."},{type:"callout",variant:"tip",hu:"**Linearizáció ($be^{ax}$).** Vegyük mindkét oldal logaritmusát: $\\ln y = \\ln b + a x$. Új változók: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Illesszünk $Y = AX + B$ egyenest az $(x_i, \\ln y_i)$ pontokra. Ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($be^{ax}$).** Take the logarithm of both sides: $\\ln y = \\ln b + a x$. New variables: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Fit a line $Y = AX + B$ to the points $(x_i, \\ln y_i)$. Then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"text",hu:"Megjegyzés: a linearizált illesztés nem oldja meg pontosan az eredeti nemlineáris feladatot, de könnyen számolható, ezért a gyakorlatban hasznos.",en:"Note: the linearized fit is not the exact solution of the original nonlinear problem, but it is easy to compute and thus useful in practice."},{type:"example",label:{hu:"9.5. Példa",en:"Example 9.5"},hu:"Illesszünk $b e^{ax}$ alakú függvényt az alábbi pontokra. A linearizált adatokat a táblázat tartalmazza.",en:"Fit a function of the form $b e^{ax}$ to the points below. The linearized data are in the table."},{type:"table",caption:{hu:"9.3. táblázat — $b e^{ax}$ illesztése",en:"Table 9.3 — Fitting $b e^{ax}$"},headers:["$x_i$","$y_i$","$\\ln y_i$","$x_i^2$","$x_i \\ln y_i$"],rows:[["0.0","0.3","-1.203973","0.00","0.000000"],["1.0","0.7","-0.356675","1.00","-0.356675"],["1.5","0.9","-0.105361","2.25","-0.158041"],["2.0","1.2","0.182322","4.00","0.364643"],["3.0","1.8","0.587787","9.00","1.763360"],["4.0","2.7","0.993252","16.00","3.973007"]],totals:["11.5","","0.097352","32.25","5.586294"]},{type:"text",hu:"A normálegyenletek $32.25A + 11.5B = 5.586294$ és $11.5A + 6B = 0.097352$ megoldása $A = 0.528951$, $B = -0.997597$, azaz a függvény $y = 0.368765\\, e^{0.528951 x}$. A linearizált hiba $0.095396$, az eredeti (nemlineáris) hiba $0.165543$.",en:"The normal equations $32.25A + 11.5B = 5.586294$ and $11.5A + 6B = 0.097352$ give $A = 0.528951$, $B = -0.997597$, i.e. $y = 0.368765\\, e^{0.528951 x}$. The linearized error is $0.095396$, and the original (nonlinear) error is $0.165543$."},{type:"callout",variant:"tip",hu:"**Linearizáció ($bx^a$).** Az $y = b x^a$ egyenletből $\\ln y = a \\ln x + \\ln b$, így $\\ln y$ lineárisan függ $\\ln x$-től. Illesszünk egyenest az $(\\ln x_i, \\ln y_i)$ pontokra; ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($bx^a$).** From $y = b x^a$ we get $\\ln y = a \\ln x + \\ln b$, so $\\ln y$ depends linearly on $\\ln x$. Fit a line to $(\\ln x_i, \\ln y_i)$; then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"example",label:{hu:"9.6. Példa",en:"Example 9.6"},hu:"Illesszünk $b x^a$ alakú hatványfüggvényt az alábbi pontokra.",en:"Fit a power function of the form $b x^a$ to the points below."},{type:"table",caption:{hu:"9.4. táblázat — $b x^a$ illesztése",en:"Table 9.4 — Fitting $b x^a$"},headers:["$x_i$","$y_i$","$\\ln x_i$","$\\ln y_i$","$(\\ln x_i)^2$","$\\ln x_i \\ln y_i$"],rows:[["0.5","0.7","-0.693147","-0.356675","0.480453","0.247228"],["1.0","1.1","0.000000","0.095310","0.000000","0.000000"],["1.5","1.6","0.405465","0.470004","0.164402","0.190570"],["2.5","2.1","0.916291","0.741937","0.839589","0.679830"],["3.0","2.3","1.098612","0.832909","1.206949","0.915044"]],totals:["","","1.727221","1.783485","2.691393","2.032673"]},{type:"text",hu:"A normálegyenletek $2.691393A + 1.727221B = 2.032673$ és $1.727221A + 5B = 1.783485$ megoldása $A = 0.676257$, $B = 0.123088$. Ebből $a = 0.676257$, $b = e^{0.123088} = 1.130984$, azaz $y = 1.130984\\, x^{0.676257}$. A linearizált hiba $0.007279$, az eredeti hiba $0.019616$.",en:"The normal equations $2.691393A + 1.727221B = 2.032673$ and $1.727221A + 5B = 1.783485$ give $A = 0.676257$, $B = 0.123088$. Hence $a = 0.676257$, $b = e^{0.123088} = 1.130984$, i.e. $y = 1.130984\\, x^{0.676257}$. The linearized error is $0.007279$, the original error $0.019616$."},{type:"demo",component:"nonlinear",caption:{hu:"9.3.–9.4. ábra — Nemlineáris illesztés (interaktív)",en:"Figures 9.3–9.4 — Nonlinear fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen a megadott típusú függvényt az adatokra, és számítsa ki az illesztés hibáját. Oldja meg az eredeti nemlineáris feladatot is Newton-módszerrel!",en:"Fit the indicated function type to the data and compute the error. Also solve the original nonlinear problem with Newton’s method!"},items:[{tag:"(a) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["-2.0","0.6"],["-1.0","0.9"],["1.0","1.6"],["2.0","2.3"],["3.0","2.9"]]},{tag:"(b) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.3"],["1.5","1.6"],["2.0","1.9"],["2.5","2.2"],["3.0","3.0"],["3.5","4.1"]]},{tag:"(c) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.6"],["3.0","1.9"],["4.0","2.2"],["5.0","2.3"],["6.0","3.4"],["9.0","4.9"]]},{tag:"(d) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","0.7"],["2.0","2.8"],["3.0","7.5"],["4.0","14.8"],["5.0","25.6"]]}]},{type:"glossary",deck:"nonlinear"},{type:"flashcards",deck:"nonlinear"},{type:"quiz",ref:"nonlinear"}]},Oe=[_t,kt,zt,vt];Oe.map(r=>r.id);const Ge="lsq.progress",wt=new Set,Re=()=>({completed:{},xp:0});let G=(()=>{try{const r=localStorage.getItem(Ge);if(r)return{...Re(),...JSON.parse(r)}}catch{}return Re()})();function qt(){try{localStorage.setItem(Ge,JSON.stringify(G))}catch{}wt.forEach(r=>r(G))}function jt(r){return!!G.completed[r]}function At(r,n=50){G.completed[r]||(G.completed[r]=!0,G.xp+=n,qt())}function Tt(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L({text:r}){const n=T.useMemo(()=>(r||"").split(/(\$[^$]+\$)/g).map(e=>e.length>1&&e.startsWith("$")&&e.endsWith("$")?ge.renderToString(e.slice(1,-1),{throwOnError:!1}):Tt(e)).join(""),[r]);return h.jsx("span",{dangerouslySetInnerHTML:{__html:n}})}function Ze(r,n){const e=n.length,t=r.map((i,a)=>[...i,n[a]]);for(let i=0;i<e;i++){let a=i;for(let o=i+1;o<e;o++)Math.abs(t[o][i])>Math.abs(t[a][i])&&(a=o);if(Math.abs(t[a][i])<1e-15)throw new Error("Singular matrix in solveLinearSystem");[t[i],t[a]]=[t[a],t[i]];for(let o=i+1;o<e;o++){const l=t[o][i]/t[i][i];if(l!==0)for(let m=i;m<=e;m++)t[o][m]-=l*t[i][m]}}const s=new Array(e).fill(0);for(let i=e-1;i>=0;i--){let a=t[i][e];for(let o=i+1;o<e;o++)a-=t[i][o]*s[o];s[i]=a/t[i][i]}return s}function Z(r,n){const e=r.length;let t=0,s=0,i=0,a=0;for(let m=0;m<e;m++)t+=r[m],s+=n[m],i+=r[m]*r[m],a+=r[m]*n[m];const[o,l]=Ze([[i,t],[t,e]],[a,s]);return{a:o,b:l}}function Ft(r,n,e){const t=r.length,s=e+1,i=new Array(2*e+1).fill(0);for(let l=0;l<t;l++){let m=1;for(let c=0;c<=2*e;c++)i[c]+=m,m*=r[l]}const a=new Array(s).fill(0);for(let l=0;l<t;l++){let m=1;for(let c=0;c<s;c++)a[c]+=m*n[l],m*=r[l]}const o=[];for(let l=0;l<s;l++){const m=[];for(let c=0;c<s;c++)m.push(i[l+c]);o.push(m)}return Ze(o,a)}function Et(r,n){const e=n.map(i=>Math.log(i)),{a:t,b:s}=Z(r,e);return{a:t,b:Math.exp(s)}}function St(r,n){const e=r.map(a=>Math.log(a)),t=n.map(a=>Math.log(a)),{a:s,b:i}=Z(e,t);return{a:s,b:Math.exp(i)}}function H(r,n,e){let t=0;for(let s=0;s<n.length;s++){const i=r(n[s])-e[s];t+=i*i}return t}function Be(r,n){let e=0;for(let t=r.length-1;t>=0;t--)e=e*n+r[t];return e}var It=function(n,e,t){for(var s=t,i=0,a=n.length;s<e.length;){var o=e[s];if(i<=0&&e.slice(s,s+a)===n)return s;o==="\\"?s++:o==="{"?i++:o==="}"&&i--,s++}return-1},Nt=function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Lt=/^\\begin{/,Mt=function(n,e){for(var t,s=[],i=new RegExp("("+e.map(m=>Nt(m.left)).join("|")+")");t=n.search(i),t!==-1;){t>0&&(s.push({type:"text",data:n.slice(0,t)}),n=n.slice(t));var a=e.findIndex(m=>n.startsWith(m.left));if(t=It(e[a].right,n,e[a].left.length),t===-1)break;var o=n.slice(0,t+e[a].right.length),l=Lt.test(o)?o:n.slice(e[a].left.length,t);s.push({type:"math",data:l,rawData:o,display:e[a].display}),n=n.slice(t+e[a].right.length)}return n!==""&&s.push({type:"text",data:n}),s},Rt=function(n,e){var t=Mt(n,e.delimiters);if(t.length===1&&t[0].type==="text")return null;for(var s=document.createDocumentFragment(),i=0;i<t.length;i++)if(t[i].type==="text")s.appendChild(document.createTextNode(t[i].data));else{var a=document.createElement("span"),o=t[i].data;e.displayMode=t[i].display;try{e.preProcess&&(o=e.preProcess(o)),ge.render(o,a,e)}catch(l){if(!(l instanceof ge.ParseError))throw l;e.errorCallback("KaTeX auto-render: Failed to parse `"+t[i].data+"` with ",l),s.appendChild(document.createTextNode(t[i].rawData));continue}s.appendChild(a)}return s},Qe=function(n,e){for(var t=function(a){var o=n.childNodes[a];if(o.nodeType===3){for(var l,m=(l=o.textContent)!=null?l:"",c=o.nextSibling,u=0;c&&c.nodeType===Node.TEXT_NODE;){var p;m+=(p=c.textContent)!=null?p:"",c=c.nextSibling,u++}var d=Rt(m,e);if(d){for(var f=0;f<u;f++)o.nextSibling.remove();a+=d.childNodes.length-1,n.replaceChild(d,o)}else a+=u}else if(o.nodeType===1){var $=" "+o.className+" ",x=!e.ignoredTags.has(o.nodeName.toLowerCase())&&e.ignoredClasses.every(b=>!$.includes(" "+b+" "));x&&Qe(o,e)}s=a},s=0;s<n.childNodes.length;s++)t(s)},Bt=function(n,e){if(!n)throw new Error("No element provided to render");var t={};Object.assign(t,e),t.delimiters=t.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],t.ignoredTags=new Set((e==null?void 0:e.ignoredTags)||["script","noscript","style","textarea","pre","code","option"]),t.ignoredClasses=t.ignoredClasses||[],t.errorCallback=t.errorCallback||console.error,t.macros=t.macros||{},Qe(n,t)};function we(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let O=we();function Ke(r){O=r}const Ue=/[&<>"']/,Ct=new RegExp(Ue.source,"g"),Je=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Pt=new RegExp(Je.source,"g"),Wt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ce=r=>Wt[r];function F(r,n){if(n){if(Ue.test(r))return r.replace(Ct,Ce)}else if(Je.test(r))return r.replace(Pt,Ce);return r}const Dt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Vt(r){return r.replace(Dt,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Ht=/(^|[^\[])\^/g;function _(r,n){let e=typeof r=="string"?r:r.source;n=n||"";const t={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Ht,"$1"),e=e.replace(s,a),t},getRegex:()=>new RegExp(e,n)};return t}function Pe(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const ee={exec:()=>null};function We(r,n){const e=r.replace(/\|/g,(i,a,o)=>{let l=!1,m=a;for(;--m>=0&&o[m]==="\\";)l=!l;return l?"|":" |"}),t=e.split(/ \|/);let s=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;s<t.length;s++)t[s]=t[s].trim().replace(/\\\|/g,"|");return t}function oe(r,n,e){const t=r.length;if(t===0)return"";let s=0;for(;s<t&&r.charAt(t-s-1)===n;)s++;return r.slice(0,t-s)}function Xt(r,n){if(r.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<r.length;t++)if(r[t]==="\\")t++;else if(r[t]===n[0])e++;else if(r[t]===n[1]&&(e--,e<0))return t;return-1}function De(r,n,e,t){const s=n.href,i=n.title?F(n.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:e,href:s,title:i,text:a,tokens:t.inlineTokens(a)};return t.state.inLink=!1,o}return{type:"image",raw:e,href:s,title:i,text:F(a)}}function Yt(r,n){const e=r.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[a]=i;return a.length>=t.length?s.slice(t.length):s}).join(`
`)}class he{constructor(n){k(this,"options");k(this,"rules");k(this,"lexer");this.options=n||O}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:oe(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],s=Yt(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const s=oe(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=oe(t.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(t);return this.lexer.state.top=s,{type:"blockquote",raw:e[0],tokens:i,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const s=t.length>1,i={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");const a=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",m=!1;for(;n;){let c=!1;if(!(e=a.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),p=n.split(`
`,1)[0],d=0;this.options.pedantic?(d=2,l=u.trimStart()):(d=e[2].search(/[^ ]/),d=d>4?1:d,l=u.slice(d),d+=e[1].length);let f=!1;if(!u&&/^ *$/.test(p)&&(o+=p+`
`,n=n.substring(p.length+1),c=!0),!c){const b=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;n;){const A=n.split(`
`,1)[0];if(p=A,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),z.test(p)||w.test(p)||b.test(p)||v.test(n))break;if(p.search(/[^ ]/)>=d||!p.trim())l+=`
`+p.slice(d);else{if(f||u.search(/[^ ]/)>=4||z.test(u)||w.test(u)||v.test(u))break;l+=`
`+p}!f&&!p.trim()&&(f=!0),o+=A+`
`,n=n.substring(A.length+1),u=p.slice(d)}}i.loose||(m?i.loose=!0:/\n *\n *$/.test(o)&&(m=!0));let $=null,x;this.options.gfm&&($=/^\[[ xX]\] /.exec(l),$&&(x=$[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!$,checked:x,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const u=i.items[c].tokens.filter(d=>d.type==="space"),p=u.length>0&&u.some(d=>/\n.*\n/.test(d.raw));i.loose=p}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),s=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:i}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=We(e[1]),s=e[2].replace(/^\||\| *$/g,"").split("|"),i=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(const o of s)/^ *-+: *$/.test(o)?a.align.push("right"):/^ *:-+: *$/.test(o)?a.align.push("center"):/^ *:-+ *$/.test(o)?a.align.push("left"):a.align.push(null);for(const o of t)a.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of i)a.rows.push(We(o,a.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return a}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:F(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const a=oe(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{const a=Xt(e[2],"()");if(a>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],i="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);a&&(s=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(t)?s=s.slice(1):s=s.slice(1,-1)),De(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const s=(t[2]||t[1]).replace(/\s+/g," "),i=e[s.toLowerCase()];if(!i){const a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return De(t,i,t[0],this.lexer)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const a=[...s[0]].length-1;let o,l,m=a,c=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+a);(s=u.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){m+=l;continue}else if((s[5]||s[6])&&a%3&&!((a+l)%3)){c+=l;continue}if(m-=l,m>0)continue;l=Math.min(l,l+m+c);const p=[...s[0]][0].length,d=n.slice(0,a+s.index+p+l);if(Math.min(a,l)%2){const $=d.slice(1,-1);return{type:"em",raw:d,text:$,tokens:this.lexer.inlineTokens($)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const s=/[^ ]/.test(t),i=/^ /.test(t)&&/ $/.test(t);return s&&i&&(t=t.substring(1,t.length-1)),t=F(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=F(e[1]),s="mailto:"+t):(t=F(e[1]),s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,i;if(e[2]==="@")s=F(e[0]),i="mailto:"+s;else{let a;do a=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(a!==e[0]);s=F(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=F(e[0]),{type:"text",raw:e[0],text:t}}}}const Ot=/^(?: *(?:\n|$))+/,Gt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Zt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ie=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Qt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,et=/(?:[*+-]|\d{1,9}[.)])/,tt=_(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,et).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),qe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Kt=/^[^\n]+/,je=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ut=_(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",je).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Jt=_(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,et).getRegex(),xe="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ae=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,en=_("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ae).replace("tag",xe).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nt=_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),tn=_(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nt).getRegex(),Te={blockquote:tn,code:Gt,def:Ut,fences:Zt,heading:Qt,hr:ie,html:en,lheading:tt,list:Jt,newline:Ot,paragraph:nt,table:ee,text:Kt},Ve=_("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),nn={...Te,table:Ve,paragraph:_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ve).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex()},an={...Te,html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ae).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_(qe).replace("hr",ie).replace("heading",` *#{1,6} *[^
]`).replace("lheading",tt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},it=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,sn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,at=/^( {2,}|\\)\n(?!\s*$)/,rn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ae="\\p{P}\\p{S}",on=_(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ae).getRegex(),ln=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,cn=_(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ae).getRegex(),hn=_("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ae).getRegex(),mn=_("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ae).getRegex(),un=_(/\\([punct])/,"gu").replace(/punct/g,ae).getRegex(),pn=_(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fn=_(Ae).replace("(?:-->|$)","-->").getRegex(),dn=_("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",fn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),me=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,$n=_(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",me).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),st=_(/^!?\[(label)\]\[(ref)\]/).replace("label",me).replace("ref",je).getRegex(),rt=_(/^!?\[(ref)\](?:\[\])?/).replace("ref",je).getRegex(),xn=_("reflink|nolink(?!\\()","g").replace("reflink",st).replace("nolink",rt).getRegex(),Fe={_backpedal:ee,anyPunctuation:un,autolink:pn,blockSkip:ln,br:at,code:sn,del:ee,emStrongLDelim:cn,emStrongRDelimAst:hn,emStrongRDelimUnd:mn,escape:it,link:$n,nolink:rt,punctuation:on,reflink:st,reflinkSearch:xn,tag:dn,text:rn,url:ee},bn={...Fe,link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",me).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",me).getRegex()},_e={...Fe,escape:_(it).replace("])","~|])").getRegex(),url:_(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gn={..._e,br:_(at).replace("{2,}","*").getRegex(),text:_(_e.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},le={normal:Te,gfm:nn,pedantic:an},U={normal:Fe,gfm:_e,breaks:gn,pedantic:bn};class M{constructor(n){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||O,this.options.tokenizer=this.options.tokenizer||new he,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:le.normal,inline:U.normal};this.options.pedantic?(e.block=le.pedantic,e.inline=U.pedantic):this.options.gfm&&(e.block=le.gfm,this.options.breaks?e.inline=U.breaks:e.inline=U.gfm),this.tokenizer.rules=e}static get rules(){return{block:le,inline:U}}static lex(n,e){return new M(e).lex(n)}static lexInline(n,e){return new M(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,l,m)=>l+"    ".repeat(m.length));let t,s,i,a;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=n.slice(1);let m;this.options.extensions.startBlock.forEach(c=>{m=c.call({lexer:this},l),typeof m=="number"&&m>=0&&(o=Math.min(o,m))}),o<1/0&&o>=0&&(i=n.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(i))){s=e[e.length-1],a&&s.type==="paragraph"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t),a=i.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&s.type==="text"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(t);continue}if(n){const o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,s,i,a=n,o,l,m;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,o.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(m=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(t=c.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),s=e[e.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),s=e[e.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,a,m)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=n.slice(1);let p;this.options.extensions.startInline.forEach(d=>{p=d.call({lexer:this},u),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(i=n.substring(0,c+1))}if(t=this.tokenizer.inlineText(i)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(m=t.raw.slice(-1)),l=!0,s=e[e.length-1],s&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):e.push(t);continue}if(n){const c="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}}class ue{constructor(n){k(this,"options");this.options=n||O}code(n,e,t){var i;const s=(i=(e||"").match(/^\S*/))==null?void 0:i[0];return n=n.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+F(s)+'">'+(t?n:F(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:F(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const s=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+s+i+`>
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
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const s=Pe(n);if(s===null)return t;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+e+'"'),i+=">"+t+"</a>",i}image(n,e,t){const s=Pe(n);if(s===null)return t;n=s;let i=`<img src="${n}" alt="${t}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(n){return n}}class Ee{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class R{constructor(n){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=n||O,this.options.renderer=this.options.renderer||new ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ee}static parse(n,e){return new R(e).parse(n)}static parseInline(n,e){return new R(e).parseInline(n)}parse(n,e=!0){let t="";for(let s=0;s<n.length;s++){const i=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const a=i,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){t+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const a=i;t+=this.renderer.heading(this.parseInline(a.tokens),a.depth,Vt(this.parseInline(a.tokens,this.textRenderer)));continue}case"code":{const a=i;t+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=i;let o="",l="";for(let c=0;c<a.header.length;c++)l+=this.renderer.tablecell(this.parseInline(a.header[c].tokens),{header:!0,align:a.align[c]});o+=this.renderer.tablerow(l);let m="";for(let c=0;c<a.rows.length;c++){const u=a.rows[c];l="";for(let p=0;p<u.length;p++)l+=this.renderer.tablecell(this.parseInline(u[p].tokens),{header:!1,align:a.align[p]});m+=this.renderer.tablerow(l)}t+=this.renderer.table(o,m);continue}case"blockquote":{const a=i,o=this.parse(a.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const a=i,o=a.ordered,l=a.start,m=a.loose;let c="";for(let u=0;u<a.items.length;u++){const p=a.items[u],d=p.checked,f=p.task;let $="";if(p.task){const x=this.renderer.checkbox(!!d);m?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=x+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=x+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:x+" "}):$+=x+" "}$+=this.parse(p.tokens,m),c+=this.renderer.listitem($,f,!!d)}t+=this.renderer.list(c,o,l);continue}case"html":{const a=i;t+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=i;t+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=i,o=a.tokens?this.parseInline(a.tokens):a.text;for(;s+1<n.length&&n[s+1].type==="text";)a=n[++s],o+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);t+=e?this.renderer.paragraph(o):o;continue}default:{const a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let s=0;s<n.length;s++){const i=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){t+=a||"";continue}}switch(i.type){case"escape":{const a=i;t+=e.text(a.text);break}case"html":{const a=i;t+=e.html(a.text);break}case"link":{const a=i;t+=e.link(a.href,a.title,this.parseInline(a.tokens,e));break}case"image":{const a=i;t+=e.image(a.href,a.title,a.text);break}case"strong":{const a=i;t+=e.strong(this.parseInline(a.tokens,e));break}case"em":{const a=i;t+=e.em(this.parseInline(a.tokens,e));break}case"codespan":{const a=i;t+=e.codespan(a.text);break}case"br":{t+=e.br();break}case"del":{const a=i;t+=e.del(this.parseInline(a.tokens,e));break}case"text":{const a=i;t+=e.text(a.text);break}default:{const a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}}class te{constructor(n){k(this,"options");this.options=n||O}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}k(te,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Y,ke,ot;class yn{constructor(...n){Me(this,Y);k(this,"defaults",we());k(this,"options",this.setOptions);k(this,"parse",re(this,Y,ke).call(this,M.lex,R.parse));k(this,"parseInline",re(this,Y,ke).call(this,M.lexInline,R.parseInline));k(this,"Parser",R);k(this,"Renderer",ue);k(this,"TextRenderer",Ee);k(this,"Lexer",M);k(this,"Tokenizer",he);k(this,"Hooks",te);this.use(...n)}walkTokens(n,e){var s,i;let t=[];for(const a of n)switch(t=t.concat(e.call(this,a)),a.type){case"table":{const o=a;for(const l of o.header)t=t.concat(this.walkTokens(l.tokens,e));for(const l of o.rows)for(const m of l)t=t.concat(this.walkTokens(m.tokens,e));break}case"list":{const o=a;t=t.concat(this.walkTokens(o.items,e));break}default:{const o=a;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const m=o[l].flat(1/0);t=t.concat(this.walkTokens(m,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=e.renderers[i.name];a?e.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[i.level];a?a.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),s.extensions=e),t.renderer){const i=this.defaults.renderer||new ue(this.defaults);for(const a in t.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(a==="options")continue;const o=a,l=t.renderer[o],m=i[o];i[o]=(...c)=>{let u=l.apply(i,c);return u===!1&&(u=m.apply(i,c)),u||""}}s.renderer=i}if(t.tokenizer){const i=this.defaults.tokenizer||new he(this.defaults);for(const a in t.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const o=a,l=t.tokenizer[o],m=i[o];i[o]=(...c)=>{let u=l.apply(i,c);return u===!1&&(u=m.apply(i,c)),u}}s.tokenizer=i}if(t.hooks){const i=this.defaults.hooks||new te;for(const a in t.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(a==="options")continue;const o=a,l=t.hooks[o],m=i[o];te.passThroughHooks.has(a)?i[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(i,c)).then(p=>m.call(i,p));const u=l.call(i,c);return m.call(i,u)}:i[o]=(...c)=>{let u=l.apply(i,c);return u===!1&&(u=m.apply(i,c)),u}}s.hooks=i}if(t.walkTokens){const i=this.defaults.walkTokens,a=t.walkTokens;s.walkTokens=function(o){let l=[];return l.push(a.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return M.lex(n,e??this.defaults)}parser(n,e){return R.parse(n,e??this.defaults)}}Y=new WeakSet,ke=function(n,e){return(t,s)=>{const i={...s},a={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const o=re(this,Y,ot).call(this,!!a.silent,!!a.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(t):t).then(l=>n(l,a)).then(l=>a.hooks?a.hooks.processAllTokens(l):l).then(l=>a.walkTokens?Promise.all(this.walkTokens(l,a.walkTokens)).then(()=>l):l).then(l=>e(l,a)).then(l=>a.hooks?a.hooks.postprocess(l):l).catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let l=n(t,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let m=e(l,a);return a.hooks&&(m=a.hooks.postprocess(m)),m}catch(l){return o(l)}}},ot=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+F(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}};const X=new yn;function g(r,n){return X.parse(r,n)}g.options=g.setOptions=function(r){return X.setOptions(r),g.defaults=X.defaults,Ke(g.defaults),g};g.getDefaults=we;g.defaults=O;g.use=function(...r){return X.use(...r),g.defaults=X.defaults,Ke(g.defaults),g};g.walkTokens=function(r,n){return X.walkTokens(r,n)};g.parseInline=X.parseInline;g.Parser=R;g.parser=R.parse;g.Renderer=ue;g.TextRenderer=Ee;g.Lexer=M;g.lexer=M.lex;g.Tokenizer=he;g.Hooks=te;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;R.parse;M.lex;const _n={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1};function Se(r){r&&Bt(r,_n)}g.setOptions({breaks:!0,gfm:!0});function Ie(r,n){const e=()=>n.forEach(s=>{if(s&&s.offsetParent!==null)try{ne.Plots.resize(s)}catch{}});requestAnimationFrame(e),setTimeout(e,60);let t;return typeof ResizeObserver<"u"&&(t=new ResizeObserver(e),t.observe(r)),()=>{t&&t.disconnect()}}function pe(r={}){const n=J("--fg")||"#1a1a2e",e=J("--grid")||"#d8d8e0",t=J("--surface")||"#ffffff";return{paper_bgcolor:t,plot_bgcolor:t,font:{color:n,family:"system-ui, sans-serif"},margin:{l:44,r:16,t:28,b:40},xaxis:{gridcolor:e,zerolinecolor:e},yaxis:{gridcolor:e,zerolinecolor:e},showlegend:!0,legend:{orientation:"h",y:1.12,x:0},...r}}const fe=()=>J("--accent")||"#e63946",de=()=>J("--point")||"#3a6ea5",$e={displayModeBar:!1,responsive:!0},ce={xs:[-1,1,2.5,3,4,4.5,6],ys:[0,1.2,1.9,2.5,3.1,3.2,4.5]};function kn(r){let n=[...ce.xs],e=[...ce.ys],t=!1,s=.5,i=.5;r.innerHTML=`
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
    </div>`;const a=r.querySelector("[data-plot]"),o=r.querySelector("[data-readout]"),l=r.querySelector("[data-sliders]");function m(f,$){const x=($-f)*.1||1;return[f-x,$+x]}function c(){const{a:f,b:$}=Z(n,e),[x,b]=m(Math.min(...n),Math.max(...n)),v=[{x:n,y:e,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:[x,b],y:[f*x+$,f*b+$],mode:"lines",name:y(q.demoBestFit),line:{color:fe(),width:3}}];t&&v.push({x:[x,b],y:[s*x+i,s*b+i],mode:"lines",name:y(q.demoGuess),line:{color:"#f4a261",width:2,dash:"dash"}}),ne.react(a,v,pe({xaxis:{range:[x,b]}}),$e);const z=H(A=>f*A+$,n,e);let w=`<div class="ro-row">$\\bar a = ${f.toFixed(6)},\\quad \\bar b = ${$.toFixed(6)}$</div>`;if(w+=`<div class="ro-row"><span class="ro-label">${y(q.optimalError)}:</span> $F = ${z.toFixed(6)}$</div>`,t){const A=H(E=>s*E+i,n,e),B=A>0?z/A:1,C=B>.98?"★★★":B>.85?"★★☆":B>.6?"★☆☆":"☆☆☆";w+=`<div class="ro-row"><span class="ro-label">${y(q.yourError)}:</span> $F = ${A.toFixed(6)}$ <span class="ro-stars">${C}</span></div>`}o.innerHTML=w,Se(o)}function u(){const f=a.querySelector(".nsewdrag");if(!f)return;let $=-1;const x=b=>{const v=f.getBoundingClientRect(),z=a._fullLayout.xaxis,w=a._fullLayout.yaxis;return{x:z.p2d(b.clientX-v.left),y:w.p2d(b.clientY-v.top)}};f.addEventListener("mousedown",b=>{const v=x(b),z=a._fullLayout.xaxis,w=a._fullLayout.yaxis,A=z.range[1]-z.range[0],B=w.range[1]-w.range[0];let C=-1,E=1/0;for(let W=0;W<n.length;W++){const se=(n[W]-v.x)/A,Q=(e[W]-v.y)/B,K=se*se+Q*Q;K<E&&(E=K,C=W)}C>=0&&E<.0025&&($=C,b.preventDefault())}),window.addEventListener("mousemove",b=>{$<0||(e[$]=x(b).y,c())}),window.addEventListener("mouseup",()=>{$=-1})}r.querySelector('[data-act="best"]').addEventListener("click",()=>{t=!1,l.hidden=!0,r.querySelector('[data-act="guess"]').setAttribute("aria-pressed","false"),c()}),r.querySelector('[data-act="guess"]').addEventListener("click",f=>{t=!t,l.hidden=!t,f.currentTarget.setAttribute("aria-pressed",String(t)),c()}),r.querySelector('[data-act="add"]').addEventListener("click",()=>{const f=Z(n,e),$=Math.max(...n)+1;n.push($),e.push(f.a*$+f.b),c(),setTimeout(u,60)}),r.querySelector('[data-act="reset"]').addEventListener("click",()=>{n=[...ce.xs],e=[...ce.ys],c(),setTimeout(u,60)}),r.querySelectorAll("[data-slider]").forEach(f=>{f.value=f.dataset.slider==="a"?s:i,f.addEventListener("input",()=>{f.dataset.slider==="a"?s=parseFloat(f.value):i=parseFloat(f.value),r.querySelector("[data-ga]").textContent=s.toFixed(2),r.querySelector("[data-gb]").textContent=i.toFixed(2),c()})}),r.querySelector("[data-ga]").textContent=s.toFixed(2),r.querySelector("[data-gb]").textContent=i.toFixed(2),c(),setTimeout(u,80);const p=ve(()=>c()),d=Ie(r,[a]);return()=>{p(),d()}}const He={xs:[-1,0,.5,1,2,2.5,3],ys:[1.4,1.9,1.6,1.7,.2,-.1,-2]};function zn(r){let n=[...He.xs],e=[...He.ys],t=2;const s=Math.min(6,n.length-1);r.innerHTML=`
    <div class="demo">
      <div class="demo-sliders">
        <label>${y(q.degree)} $m$ (<span data-deg></span>)
          <input type="range" min="1" max="${s}" step="1" value="${t}" data-slider="m">
        </label>
      </div>
      <div class="demo-plot" data-plot></div>
      <div class="demo-readout" data-readout></div>
    </div>`;const i=r.querySelector("[data-plot]"),a=r.querySelector("[data-readout]");r.querySelector("[data-deg]").textContent=t;function o(){const c=Ft(n,e,t),u=Math.min(...n)-.4,p=Math.max(...n)+.4,d=[],f=[],$=120;for(let z=0;z<=$;z++){const w=u+(p-u)*z/$;d.push(w),f.push(Be(c,w))}ne.react(i,[{x:n,y:e,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:d,y:f,mode:"lines",name:`${y({hu:"fokszám",en:"degree"})} ${t}`,line:{color:fe(),width:3}}],pe({xaxis:{range:[u,p]}}),$e);const x=H(z=>Be(c,z),n,e);let v=`<div class="ro-row">$p(x) = ${c.map((z,w)=>w===0?z.toFixed(4):`${z>=0?"+":""}${z.toFixed(4)}x^{${w}}`).join(" ")}$</div>`;v+=`<div class="ro-row"><span class="ro-label">${y(q.error)}:</span> $F = ${x.toFixed(6)}$</div>`,t>=n.length-1&&(v+=`<div class="ro-row ro-warn">${y({hu:"⚠ $m \\ge n$: interpoláció, a hiba ≈ 0.",en:"⚠ $m \\ge n$: interpolation, error ≈ 0."})}</div>`),a.innerHTML=v,Se(a)}r.querySelector('[data-slider="m"]').addEventListener("input",c=>{t=parseInt(c.target.value,10),r.querySelector("[data-deg]").textContent=t,o()}),o();const l=ve(()=>o()),m=Ie(r,[i]);return()=>{l(),m()}}const vn={exp:{xs:[0,1,1.5,2,3,4],ys:[.3,.7,.9,1.2,1.8,2.7]},power:{xs:[.5,1,1.5,2.5,3],ys:[.7,1.1,1.6,2.1,2.3]}};function wn(r){let n="exp";r.innerHTML=`
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
    </div>`;const e=r.querySelector("[data-plot1]"),t=r.querySelector("[data-plot2]"),s=r.querySelector("[data-cap1]"),i=r.querySelector("[data-cap2]"),a=r.querySelector("[data-readout]");function o(){const{xs:c,ys:u}=vn[n];s.textContent=y(q.linearizedSpace),i.textContent=y(q.originalSpace);let p,d,f,$,x,b,v,z,w,A;if(n==="exp"){f=c.slice(),$=u.map(j=>Math.log(j));const P=Z(f,$);x=P.a,b=P.b,{a:p,b:d}=Et(c,u),v=j=>d*Math.exp(p*j),z=H(j=>x*j+b,f,$),w=H(v,c,u),A=`y = ${d.toFixed(6)}\\, e^{${p.toFixed(6)} x}`}else{f=c.map(j=>Math.log(j)),$=u.map(j=>Math.log(j));const P=Z(f,$);x=P.a,b=P.b,{a:p,b:d}=St(c,u),v=j=>d*Math.pow(j,p),z=H(j=>x*j+b,f,$),w=H(v,c,u),A=`y = ${d.toFixed(6)}\\, x^{${p.toFixed(6)}}`}const B=Math.min(...f),C=Math.max(...f),E=(C-B)*.1||1;ne.react(e,[{x:f,y:$,mode:"markers",type:"scatter",name:y(n==="exp"?{hu:"(x, ln y)",en:"(x, ln y)"}:{hu:"(ln x, ln y)",en:"(ln x, ln y)"}),marker:{size:10,color:de()}},{x:[B-E,C+E],y:[x*(B-E)+b,x*(C+E)+b],mode:"lines",name:y({hu:"illesztett egyenes",en:"fitted line"}),line:{color:fe(),width:3}}],pe(),$e);const W=Math.min(...c),se=Math.max(...c),Q=[],K=[],Ne=120;for(let P=0;P<=Ne;P++){const j=W+(se-W)*P/Ne;Q.push(j),K.push(v(j))}ne.react(t,[{x:c,y:u,mode:"markers",type:"scatter",name:y({hu:"adatok",en:"data"}),marker:{size:10,color:de()}},{x:Q,y:K,mode:"lines",name:y({hu:"illesztett görbe",en:"fitted curve"}),line:{color:fe(),width:3}}],pe(),$e),a.innerHTML=`<div class="ro-row">$${A}$</div><div class="ro-row">$A = ${x.toFixed(6)},\\quad B = ${b.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${y(q.linearError)}:</span> $${z.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${y(q.nonlinearError)}:</span> $${w.toFixed(6)}$</div>`,Se(a)}r.querySelectorAll("[data-model]").forEach(c=>{c.addEventListener("click",()=>{n=c.dataset.model,r.querySelectorAll("[data-model]").forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.model===n))),o()})}),o();const l=ve(()=>o()),m=Ie(r,[e,t]);return()=>{l(),m()}}const be={line:kn,polynomial:zn,nonlinear:wn};function qn({component:r,caption:n}){const e=T.useRef(null);return T.useEffect(()=>{var i;const t=e.current;if(!t)return;const s=(i=be[r])==null?void 0:i.call(be,t);return()=>{typeof s=="function"&&s()}},[r]),h.jsxs("figure",{className:"demo-figure",children:[h.jsx("div",{className:"demo-host",ref:e}),n&&h.jsx("figcaption",{children:h.jsx(D,{markdown:n})})]})}const jn={intro:[{q:{hu:"Miért a négyzetes hibát ($F$) minimalizáljuk az $F_1$ (maximum) vagy $F_2$ (abszolút) helyett?",en:"Why minimize the squared error ($F$) instead of $F_1$ (max) or $F_2$ (absolute)?"},options:[{hu:"Mert differenciálható, így a minimum a deriváltak nullhelyén kereshető",en:"Because it is differentiable, so the minimum is found where derivatives vanish"},{hu:"Mert mindig kisebb értéket ad",en:"Because it always gives a smaller value"},{hu:"Mert nem igényel mérési adatokat",en:"Because it needs no measurement data"}],correct:0},{q:{hu:"Mit jelöl az $\\mathbf{a}$ a $g(x;\\mathbf{a})$ jelölésben?",en:"What does $\\mathbf{a}$ denote in the notation $g(x;\\mathbf{a})$?"},options:[{hu:"A mérési pontok számát",en:"The number of data points"},{hu:"Az illesztendő függvény ismeretlen paramétereit",en:"The unknown parameters of the function to fit"},{hu:"A maximális hibát",en:"The maximum error"}],correct:1}],line:[{q:{hu:"Mi a $b$ együtthatója a második Gauss-féle normálegyenletben?",en:"What is the coefficient of $b$ in the second Gaussian normal equation?"},options:[{hu:"$\\sum x_i$",en:"$\\sum x_i$"},{hu:"$n+1$ (a mérési pontok száma)",en:"$n+1$ (the number of data points)"},{hu:"$\\sum x_i^2$",en:"$\\sum x_i^2$"}],correct:1},{q:{hu:"Mikor garantált, hogy a $d$ determináns pozitív (egyértelmű megoldás)?",en:"When is the determinant $d$ guaranteed positive (unique solution)?"},options:[{hu:"Ha minden $y_i$ egyenlő",en:"If all $y_i$ are equal"},{hu:"Ha legalább két $x_i$ különböző",en:"If at least two $x_i$ are distinct"},{hu:"Ha $n = 1$",en:"If $n = 1$"}],correct:1},{q:{hu:"A 9.2. példában mekkora az illesztett egyenes meredeksége ($\\bar a$)?",en:"In Example 9.2, what is the slope $\\bar a$ of the fitted line?"},options:[{hu:"$0.542163$",en:"$0.542163$"},{hu:"$0.630243$",en:"$0.630243$"},{hu:"$0.124691$",en:"$0.124691$"}],correct:1}],polynomial:[{q:{hu:"Miért invertálható a (4) rendszer $\\mathbf{A}$ mátrixa, ha $m \\le n$ és az $x_i$-k különbözők?",en:"Why is the matrix $\\mathbf{A}$ of system (4) invertible when $m \\le n$ and the $x_i$ are distinct?"},options:[{hu:"Mert szimmetrikus",en:"Because it is symmetric"},{hu:"Mert pozitív definit ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ ha $\\mathbf{z} \\ne 0$)",en:"Because it is positive definite ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ for $\\mathbf{z} \\ne 0$)"},{hu:"Mert minden eleme pozitív",en:"Because all its entries are positive"}],correct:1},{q:{hu:"Mi történik, ha $n \\le m$ (több paraméter, mint a kényszerek)?",en:"What happens if $n \\le m$ (more parameters than constraints)?"},options:[{hu:"A pontokon átmenő interpoláló polinom létezik, $F$ minimuma 0",en:"An interpolating polynomial exists through the points; the minimum of $F$ is 0"},{hu:"Nincs megoldás",en:"There is no solution"},{hu:"A hiba végtelen",en:"The error is infinite"}],correct:0}],nonlinear:[{q:{hu:"Hogyan linearizáljuk a $y = b e^{ax}$ modellt?",en:"How do we linearize the model $y = b e^{ax}$?"},options:[{hu:"$\\ln y = \\ln b + a x$ (egyenes az $(x, \\ln y)$ síkon)",en:"$\\ln y = \\ln b + a x$ (a line in the $(x, \\ln y)$ plane)"},{hu:"$\\ln y = a \\ln x + \\ln b$",en:"$\\ln y = a \\ln x + \\ln b$"},{hu:"$y^2 = a x + b$",en:"$y^2 = a x + b$"}],correct:0},{q:{hu:"A $y = b x^a$ hatványfüggvényt melyik koordinátákban illesztjük egyenessel?",en:"In which coordinates do we fit a line for the power model $y = b x^a$?"},options:[{hu:"$(x, \\ln y)$",en:"$(x, \\ln y)$"},{hu:"$(\\ln x, \\ln y)$",en:"$(\\ln x, \\ln y)$"},{hu:"$(\\ln x, y)$",en:"$(\\ln x, y)$"}],correct:1},{q:{hu:"Igaz-e, hogy a linearizált illesztés pontosan minimalizálja az eredeti nemlineáris négyzetes hibát?",en:"Does the linearized fit exactly minimize the original nonlinear least-square error?"},options:[{hu:"Igen, mindig",en:"Yes, always"},{hu:"Nem — jó közelítés, de a transzformált térben minimalizál",en:"No — it is a good approximation, but minimizes in the transformed space"},{hu:"Csak ha $a = 0$",en:"Only if $a = 0$"}],correct:1}]},S={quiz:{en:"Quiz",hu:"Kvíz"},check:{en:"Check answer",hu:"Ellenőrzés"},next:{en:"Next",hu:"Következő"},correct:{en:"Correct! ✓",hu:"Helyes! ✓"},incorrect:{en:"Not quite — try again.",hu:"Nem egészen — próbáld újra."},done:{en:"Quiz complete!",hu:"Kvíz teljesítve!"},score:{en:"Score",hu:"Eredmény"},complete:{en:"Section complete",hu:"Szakasz teljesítve"},retry:{en:"Retry",hu:"Újra"}};function An({refKey:r,sectionId:n}){const{t:e}=V(),t=jn[r]??[],[s,i]=T.useState(0),[a,o]=T.useState(0),[l,m]=T.useState(-1),[c,u]=T.useState("none");if(!t.length)return null;const p=()=>{i(0),o(0),m(-1),u("none")};if(s>=t.length){const x=Math.round(a/t.length*100),b=a===t.length;return b&&At(n),h.jsxs("div",{className:"quiz",children:[h.jsxs("div",{className:"quiz-head",children:[h.jsx("span",{className:"quiz-icon",children:"🎯"}),h.jsx("strong",{children:e(S.quiz)})]}),h.jsx("div",{className:"quiz-body",children:h.jsxs("div",{className:"quiz-done",children:[h.jsxs("p",{children:[e(S.done)," ",e(S.score),": ",a,"/",t.length," (",x,"%)"]}),b&&h.jsxs("p",{className:"quiz-pass",children:[e(S.complete)," ✓"]}),h.jsx("button",{className:"btn",onClick:p,children:e(S.retry)})]})})]})}const d=t[s],f=()=>{l<0||(l===d.correct?(u("right"),o(x=>x+1)):u("wrong"))},$=()=>{i(x=>x+1),m(-1),u("none")};return h.jsxs("div",{className:"quiz",children:[h.jsxs("div",{className:"quiz-head",children:[h.jsx("span",{className:"quiz-icon",children:"🎯"}),h.jsx("strong",{children:e(S.quiz)})]}),h.jsxs("div",{className:"quiz-body",children:[h.jsxs("p",{className:"quiz-q",children:[s+1,". ",h.jsx(L,{text:e(d.q)})]}),h.jsx("div",{className:"quiz-opts",children:d.options.map((x,b)=>h.jsx("button",{className:`quiz-opt${l===b?" selected":""}${c!=="none"&&b===d.correct?" right":""}${c==="wrong"&&b===l?" wrong":""}`,onClick:()=>c!=="right"&&m(b),children:h.jsx(L,{text:e(x)})},b))}),c!=="none"&&h.jsx("div",{className:`quiz-feedback ${c==="right"?"ok":"bad"}`,children:e(c==="right"?S.correct:S.incorrect)}),c==="right"?h.jsx("button",{className:"btn",onClick:$,children:e(S.next)}):h.jsx("button",{className:"btn",onClick:f,children:e(S.check)})]})]})}const Tn={line:[{term:{en:"Least squares method",hu:"Legkisebb négyzetek módszere"},def:{en:"Fit a model to data $(x_i,y_i)$ by minimizing the sum of squared residuals. Unlike interpolation, the curve need not pass through the points — it captures the trend and smooths out noise.",hu:"Egy modell illesztése $(x_i,y_i)$ adatokra a négyzetes eltérések összegének minimalizálásával. Az interpolációval ellentétben a görbe nem megy át a pontokon — a trendet ragadja meg és simítja a zajt."}},{term:{en:"Line fitting $g(x)=ax+b$",hu:"Egyenes illesztése $g(x)=ax+b$"},def:{en:"The simplest least-squares model: choose slope $a$ and intercept $b$ to minimize $F(a,b)=\\sum_i(ax_i+b-y_i)^2$. Also called linear regression.",hu:"A legegyszerűbb legkisebb-négyzetes modell: válaszd az $a$ meredekséget és $b$ tengelymetszetet úgy, hogy $F(a,b)=\\sum_i(ax_i+b-y_i)^2$ minimális legyen. Lineáris regressziónak is hívják."}},{term:{en:"Least-square error $F(a,b)$",hu:"Négyzetes hiba $F(a,b)$"},def:{en:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — the objective. Squaring (vs absolute value) makes $F$ smooth and differentiable, so calculus locates the minimum, and it penalizes large deviations more.",hu:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — a célfüggvény. A négyzetre emelés (az abszolút érték helyett) simává, differenciálhatóvá teszi $F$-et, így az analízis megtalálja a minimumot, és jobban bünteti a nagy eltéréseket."}},{term:{en:"Normal equations (Gaussian)",hu:"Normálegyenletek (Gauss-féle)"},def:{en:"Setting $\\partial F/\\partial a=\\partial F/\\partial b=0$ gives the linear system $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ for the optimal $a,b$.",hu:"A $\\partial F/\\partial a=\\partial F/\\partial b=0$ feltételből az $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ lineáris rendszer adódik az optimális $a,b$-re."}},{term:{en:"Unique solvability",hu:"Egyértelmű megoldhatóság"},def:{en:"The $2\\times2$ normal system has a unique solution whenever at least two of the $x_i$ differ (its determinant $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ is convex, so the stationary point is the global minimum.",hu:"A $2\\times2$-es normálrendszernek egyetlen megoldása van, valahányszor legalább két $x_i$ különbözik (determinánsa $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ konvex, így a stacionárius pont a globális minimum."}},{term:{en:"Residuals & best fit",hu:"Reziduumok és legjobb illeszkedés"},def:{en:"The residual at $x_i$ is $r_i=ax_i+b-y_i$. The best-fit line makes $\\sum r_i^2$ as small as possible; the residuals sum to zero and are uncorrelated with the $x_i$ at the optimum.",hu:"Az $x_i$-beli reziduum $r_i=ax_i+b-y_i$. A legjobban illeszkedő egyenes a $\\sum r_i^2$-et teszi a lehető legkisebbé; az optimumban a reziduumok összege nulla és korrelálatlanok az $x_i$-vel."}}],polynomial:[{term:{en:"Polynomial curve fitting",hu:"Polinom illesztése"},def:{en:"Fit a degree-$m$ polynomial $p(x)=a_m x^m+\\dots+a_0$ to data $(x_i,y_i)$ by least squares, minimizing $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ over the $m+1$ coefficients.",hu:"Egy $m$-edfokú $p(x)=a_m x^m+\\dots+a_0$ polinom illesztése $(x_i,y_i)$ adatokra legkisebb négyzetekkel, az $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ minimalizálásával az $m+1$ együtthatóra."}},{term:{en:"Fitting vs interpolation ($m<n$)",hu:"Illesztés vs interpoláció ($m<n$)"},def:{en:"If $m\\ge n$ a degree-$m$ polynomial interpolates exactly ($F=0$). The interesting case is $m<n$: fewer parameters than data, so $F>0$ and the polynomial approximates the trend instead of passing through every point.",hu:"Ha $m\\ge n$, egy $m$-edfokú polinom pontosan interpolál ($F=0$). Az érdekes eset $m<n$: kevesebb paraméter, mint adat, így $F>0$, és a polinom a trendet közelíti, nem megy át minden ponton."}},{term:{en:"Normal equations",hu:"Normálegyenletek"},def:{en:"Setting $\\partial F/\\partial a_k=0$ gives an $(m+1)\\times(m+1)$ linear system $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ whose entries are power sums $\\sum_i x_i^{j+k}$ and $\\sum_i x_i^k y_i$.",hu:"A $\\partial F/\\partial a_k=0$ feltételből egy $(m+1)\\times(m+1)$-es lineáris rendszer $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ adódik, amelynek elemei a $\\sum_i x_i^{j+k}$ hatványösszegek és $\\sum_i x_i^k y_i$."}},{term:{en:"Positive definite normal matrix",hu:"Pozitív definit normálmátrix"},def:{en:"If there are at least $m+1$ distinct nodes, the normal matrix $\\mathbf{A}$ is symmetric positive definite (via the Fundamental Theorem of Algebra), so the system has a unique solution — the global least-squares minimum.",hu:"Ha legalább $m+1$ különböző alappont van, a normálmátrix $\\mathbf{A}$ szimmetrikus pozitív definit (az algebra alaptétele révén), így a rendszernek egyetlen megoldása van — a globális legkisebb-négyzetes minimum."}},{term:{en:"Ill-conditioning at high degree",hu:"Rossz kondicionáltság magas foknál"},def:{en:"The power-sum normal matrix is a Vandermonde-style Gram matrix that becomes badly conditioned as $m$ grows (like the Hilbert matrix). High-degree fits also overfit noise — prefer modest $m$ or orthogonal-polynomial bases.",hu:"A hatványösszeges normálmátrix egy Vandermonde-jellegű Gram-mátrix, amely $m$ növekedtével rosszul kondicionálttá válik (mint a Hilbert-mátrix). A magas fokú illesztések túlillesztik a zajt — válassz mérsékelt $m$-et vagy ortogonális polinom bázist."}}],nonlinear:[{term:{en:"Nonlinear curve fitting",hu:"Nemlineáris függvény illesztése"},def:{en:"Fitting a model whose parameters enter nonlinearly (e.g. $be^{ax}$, $bx^a$). If parameters appear linearly the normal equations stay linear; otherwise they become a nonlinear system.",hu:"Olyan modell illesztése, amelyben a paraméterek nemlineárisan szerepelnek (pl. $be^{ax}$, $bx^a$). Ha a paraméterek lineárisan jelennek meg, a normálegyenletek lineárisak maradnak; különben nemlineáris rendszerré válnak."}},{term:{en:"Linearization",hu:"Linearizálás"},def:{en:"Transform the model into a linear one by a change of variables, fit a line by least squares, then map back. A fast, practical approximation — not the exact nonlinear least-squares solution.",hu:"Alakítsd a modellt lineárissá változócserével, illessz egyenest legkisebb négyzetekkel, majd alakítsd vissza. Gyors, gyakorlati közelítés — nem a pontos nemlineáris legkisebb-négyzetes megoldás."}},{term:{en:"Exponential fit $y=be^{ax}$",hu:"Exponenciális illesztés $y=be^{ax}$"},def:{en:"Take logs: $\\ln y=\\ln b+ax$. Fit a line $Y=AX+B$ to $(x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$. Used for growth/decay data.",hu:"Vegyél logaritmust: $\\ln y=\\ln b+ax$. Illessz $Y=AX+B$ egyenest az $(x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$. Növekedési/bomlási adatokra."}},{term:{en:"Power fit $y=bx^a$",hu:"Hatványfüggvény illesztés $y=bx^a$"},def:{en:"Take logs of both: $\\ln y=a\\ln x+\\ln b$. Fit a line to $(\\ln x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$ — a log–log linear fit.",hu:"Vegyél logaritmust mindkettőből: $\\ln y=a\\ln x+\\ln b$. Illessz egyenest a $(\\ln x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$ — log–log lineáris illesztés."}},{term:{en:"Caveat: not the true optimum",hu:"Figyelmeztetés: nem a valódi optimum"},def:{en:"Linearization minimizes error in the transformed variables, not in the original ones, so it weights the data differently. It gives a good, cheap starting fit — refine with a genuine nonlinear least-squares solver if needed.",hu:"A linearizálás a transzformált változókban minimalizálja a hibát, nem az eredetiekben, így másképp súlyozza az adatokat. Jó, olcsó kiinduló illesztést ad — szükség esetén finomítsd valódi nemlineáris legkisebb-négyzetes megoldóval."}}]},Fn={line:[{q:"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?",a:"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown."},{q:"What is the primary goal of curve fitting?",a:"To find parameter values such that the function $g$ deviates the 'least' from measured data points."},{q:"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?",a:"Measurement errors typically cause data points to lie off the ideal graph of the assumed function."},{q:"Define the maximum error formula $F_1(\\mathbf{a})$.",a:"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$"},{q:"Define the absolute error sum formula $F_2(\\mathbf{a})$.",a:"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"},{q:"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?",a:"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$."},{q:"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?",a:"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"},{q:"What is the 'method of least squares'?",a:"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points."},{q:"In line fitting, what is the standard form of the linear function $g(x)$?",a:"$g(x) = ax + b$"},{q:"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?",a:"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?",a:"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?",a:"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"},{q:"What are the 'Gaussian normal equations' in the context of line fitting?",a:"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero."},{q:"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"},{q:"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"},{q:"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?",a:"The total number of measurement data points."},{q:"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?",a:"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"},{q:"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?",a:"The Cauchy–Bunyakovsky–Schwarz inequality."},{q:"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?",a:"When there are at least two distinct mesh points $x_i$."},{q:"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?",a:"Exactly one unique solution."},{q:"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?",a:"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?",a:"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i^2$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?",a:"$2(n + 1)$"},{q:"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i$"},{q:"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?",a:"$D(\\bar{a}, \\bar{b}) = 4d$"},{q:"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?",a:"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive."},{q:"Is the local minimum found by the method of least squares for line fitting also a global minimum?",a:"Yes, it is both a local and a global minimum."},{q:"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?",a:"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$."},{q:"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?",a:"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$)."},{q:"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?",a:"$a = 0.630243$ and $b = 0.542163$"},{q:"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?",a:"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$."},{q:"In Example 9.2, what was the numerical value of the final error of the fitting?",a:"$0.124691$"},{q:"The points where the function values are measured are called the _____ points.",a:"mesh"},{q:"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?",a:"Three parameters (the coefficients of the polynomial)."},{q:"True or False: The Gaussian normal equations constitute a non-linear system of equations.",a:"False, it is a linear system for the parameters $a$ and $b$."},{q:"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?",a:"It is continuously partially differentiable."},{q:"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?",a:"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"},{q:"What is the Hungarian term for 'curve fitting' mentioned in the source material?",a:"görbeillesztés"},{q:"In the Hungarian source text, what is the term for 'Method of Least Squares'?",a:"legkisebb négyzetek módszere"},{q:"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.",a:"$\\sum_{i=0}^{n} x_i^2$"},{q:"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?",a:"Zero."},{q:"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?",a:"$i = 0, 1, \\ldots, 7$"},{q:"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?",a:"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$."},{q:"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?",a:"8"},{q:"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?",a:"It implies that the sum of the residuals (deviations) is zero."},{q:"Term: Mesh points",a:"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained."},{q:"Term: Gaussian normal equations",a:"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals."},{q:"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?",a:"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus."},{q:"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?",a:"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum."},{q:"How does Corollary 8.11 extend the findings of the local minimum in line fitting?",a:"It confirms that the local minimum is also the global minimum for the error function $F$."},{q:"In the example calculation table, what represents the sum of all elements in the $y_i$ column?",a:"$\\sum_{i=0}^{n} y_i$"},{q:"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?",a:"$x$"},{q:"In the Hungarian text, what is the term used for 'Gaussian normal equations'?",a:"Gauss-féle normálegyenletek"},{q:"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?",a:"8 terms."},{q:"What is the primary technical problem solved by switching from absolute error to squared error?",a:"Non-differentiability at points where $g(x_i) = y_i$."},{q:"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.",a:"partial"},{q:"What is the graphical interpretation of the 'best fitted curve'?",a:"The curve for which the sum of the squares of the vertical distances from the data points is minimized."},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?",a:"89.5"},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?",a:"20.0"}],polynomial:[{q:"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?",a:"The coefficients $a_m, a_{m-1}, \\ldots, a_0$."},{q:"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?",a:"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"},{q:"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?",a:"By polynomial interpolation."},{q:"What is the minimal value of the error function $F$ if $n \\le m$?",a:"$0$"},{q:"Why is the case $m < n$ primarily investigated in polynomial curve fitting?",a:"Because the error function $F$ generally does not reach zero in this case."},{q:"According to the source, at what points can the function $F$ have an extremum?",a:"Where all of its partial derivatives are equal to zero."},{q:"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?",a:"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"},{q:"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?",a:"The normal equations."},{q:"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?",a:"$\\sum_{i=0}^{n} x_i^k y_i$"},{q:"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.",a:"positive definite"},{q:"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?",a:"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$"},{q:"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?",a:"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"},{q:"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?",a:"If there are at least $m + 1$ distinct mesh points."},{q:"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?",a:"The Fundamental Theorem of Algebra."},{q:"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?",a:"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"},{q:"Why is the local minimum of the error function $F$ also its global minimum?",a:"Because $F$ is a quadratic function."},{q:"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.",a:"$m + 1$"},{q:"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?",a:"The error of the fitting."},{q:"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?",a:"Three equations."},{q:"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?",a:"The constant term ($a_0$)."},{q:"Formula: Error of the fitting",a:"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial."},{q:"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.",a:"sum"},{q:"What value of $n$ corresponds to the total number of data points being $7$?",a:"$n = 6$"},{q:"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?",a:"The sum of $x_i^2$."},{q:"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?",a:"The number of coefficients, which is $m + 1$."}],nonlinear:[{q:"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?",a:"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"},{q:"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?",a:"They form a nonlinear system of equations."},{q:"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?",a:"Newton's method"},{q:"What is the core idea of the 'linearization method' in curve fitting?",a:"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm."},{q:"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?",a:"$\\ln y = \\ln b + ax$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?",a:"$B = \\ln b$"},{q:"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?",a:"$a = A$"},{q:"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?",a:"$b = e^B$"},{q:"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.",a:"False"},{q:"What is the general form of the power function discussed in the material?",a:"$y = b x^a$"},{q:"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?",a:"$\\ln y = a \\ln x + \\ln b$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?",a:"$X = \\ln x$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?",a:"$a$"},{q:"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.",a:"$\\ln b$"},{q:"Which set of data points is used to fit a line when linearizing the power function $b x^a$?",a:"$(\\ln x_i, \\ln y_i)$"},{q:"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?",a:"$A = 0.528951$ and $B = -0.997597$"},{q:"What was the final exponential function obtained in Example 9.5 using linearization?",a:"$y = 0.368765 e^{0.528951x}$"},{q:"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?",a:"$0.165543$"},{q:"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?",a:"$A = 0.676257$ and $B = 0.123088$"},{q:"What was the final power function obtained in Example 9.6?",a:"$y = 1.130984 x^{0.676257}$"},{q:"In the power function example, what was the calculated error of the linear fitting?",a:"$0.007279$"},{q:"What was the calculated error of the original nonlinear fitting in the power function example?",a:"$0.019616$"},{q:"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"},{q:"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"},{q:"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.",a:"$(x_i, \\ln y_i)$"},{q:"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?",a:"A $2 \\times 2$ linear system for unknowns $A$ and $B$."},{q:"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?",a:"$6$ (representing the number of data points $n+1$)"},{q:"Concept: Critical Points of $F(a, b)$",a:"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero."},{q:"Why is linearization used in practice despite not being the 'original' nonlinear solution?",a:"It is easy to compute as it only requires solving a linear system."},{q:"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?",a:"The coefficient of $A$ in the first normal equation."},{q:"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?",a:"$B$ in the first equation and $A$ in the second equation."},{q:"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.",a:"Residuals ($f(x_i) - y_i$)"},{q:"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?",a:"$B = \\ln b$"},{q:"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?",a:"$5.586294$"},{q:"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?",a:"$2.691393$"},{q:"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?",a:"The total number of data points ($n=4$, so $n+1=5$)."},{q:"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?",a:"$(-0.693147, -0.356675)$"},{q:"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.",a:"$\\ln y_i$"},{q:"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.",a:"True"},{q:"What is the primary advantage of Newton's method over linearization for these problems?",a:"It can minimize the original nonlinear error function $F(a, b)$ directly."},{q:"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.",a:"$x$"},{q:"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?",a:"$0.676257$"},{q:"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?",a:"The y-intercept of the line in the log-log plot."},{q:"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?",a:"$-1.203973$"},{q:"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?",a:"$3.973007$"},{q:"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?",a:"$0.247228$"},{q:"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?",a:"As the constant term on the right side of the second normal equation."},{q:"In the power function example, what was the sum of $\\ln x_i$?",a:"$1.727221$"},{q:"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?",a:"$1.130984$"},{q:"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?",a:"$0.368765$"},{q:"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.",a:"Exponential growth"},{q:"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.",a:"Positive"},{q:"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.",a:"Method of Least Squares"},{q:"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.",a:"Partial derivatives (gradient)"}]},N={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset",hu:"Eredeti"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz"},showQuestion:{en:"Show question",hu:"Kérdés"}};function En({deck:r}){const{t:n,lang:e}=V(),t=Tn[r]??[],[s,i]=T.useState(null);return t.length?h.jsxs("div",{className:"deck glossary-deck",children:[h.jsx("h4",{children:n(N.glossary)}),h.jsx("div",{className:"deck-list",children:t.map((a,o)=>{const l=s===o;return h.jsxs("button",{className:"deck-item",onClick:()=>i(l?null:o),children:[h.jsxs("div",{className:"deck-item__head",children:[h.jsx("strong",{children:h.jsx(D,{markdown:a.term[e]})}),h.jsx("span",{children:l?"−":"+"})]}),l&&h.jsx("div",{className:"deck-item__body",children:h.jsx(D,{markdown:a.def[e]})})]},o)})})]}):null}const ze=r=>Array.from({length:r},(n,e)=>e);function Sn(r){const n=ze(r);for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function In({deck:r}){const{t:n}=V(),e=Fn[r]??[],[t,s]=T.useState(()=>ze(e.length)),[i,a]=T.useState(0),[o,l]=T.useState(!1),m=T.useMemo(()=>e[t[i]],[e,t,i]);if(!e.length)return null;const c=u=>{l(!1),a(p=>(p+u+e.length)%e.length)};return h.jsxs("div",{className:"deck flashcard-deck",children:[h.jsxs("div",{className:"deck__bar",children:[h.jsx("h4",{children:n(N.flashcards)}),h.jsxs("div",{className:"deck__ctrls",children:[h.jsxs("span",{className:"deck__count",children:[i+1," / ",e.length]}),h.jsx("button",{className:"btn",onClick:()=>{s(Sn(e.length)),a(0),l(!1)},children:n(N.shuffle)}),h.jsx("button",{className:"btn",onClick:()=>{s(ze(e.length)),a(0),l(!1)},children:n(N.reset)})]})]}),h.jsxs("button",{className:"deck-card",onClick:()=>l(u=>!u),children:[h.jsx("div",{className:"deck-card__tag",children:n(o?N.answer:N.question)}),h.jsx(D,{markdown:o?m.a:m.q})]}),h.jsxs("div",{className:"deck__nav",children:[h.jsx("button",{className:"btn",onClick:()=>c(-1),children:n(N.prev)}),h.jsx("button",{className:"btn btn--primary",onClick:()=>l(u=>!u),children:n(o?N.showQuestion:N.showAnswer)}),h.jsx("button",{className:"btn",onClick:()=>c(1),children:n(N.next)})]})]})}const Nn=`#include <vector>
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
`,Ln=`program exp_fit_demo
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
`,Mn=`package main

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
`,Rn=`function exp_fit(t, y)
    A = [t ones(length(t))]                  # ln y = a t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [0.0, 1, 2, 3]; y = [2.0, 4.1, 8.2, 15.9]
a, b = exp_fit(t, y); println("a = $a, b = $b")
`,Bn=`// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns [a, b].
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
`,Cn=`function [a, b] = exp_fit(t, y)
% EXP_FIT  Fit y ~ b*exp(a*t) by linear least squares on log(y).
    t = t(:); ly = log(y(:));
    p = [t, ones(numel(t),1)] \\ ly;   % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [0 1 2 3]; y = [2.0 4.1 8.2 15.9];
[a, b] = exp_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,Pn=`import numpy as np


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
`,Dn=`// Linear regression y = a x + b; returns (a, b).
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
`,Xn=`program poly_fit_demo
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
`,Yn=`package main

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
`,On=`function poly_fit(t, y, degree)
    A = [ti^j for ti in t, j in 0:degree]   # Vandermonde: columns 1, t, t^2, ...
    return A \\ y                              # least-squares solution
end

t = [0.0, 1, 2, 3, 4]; y = [1.0, 1.8, 3.3, 4.5, 6.3]
println("coeffs (low->high): ", poly_fit(t, y, 2))
`,Gn=`// Least-squares polynomial fit via the normal equations.
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
`,Zn=`function c = poly_fit(t, y, degree)
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
`,Qn=`import numpy as np


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
`,Kn=`# Least-squares polynomial fit; returns coefficients (low -> high).
poly_fit <- function(t, y, degree = 2) {
  A <- outer(t, 0:degree, \`^\`)        # columns 1, t, t^2, ...
  as.vector(qr.solve(A, y))           # minimizes ||A c - y||
}

t <- c(0, 1, 2, 3, 4)
y <- c(1.0, 1.8, 3.3, 4.5, 6.3)
cat("coeffs (low->high):", poly_fit(t, y, 2), "\\n")
`,Un=`// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
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
`,Jn=`polyFit[t_, y_, degree_] := Module[{A},
   A = Table[ti^j, {ti, t}, {j, 0, degree}];   (* Vandermonde *)
   LeastSquares[A, y]];
t = {0, 1, 2, 3, 4}; y = {1.0, 1.8, 3.3, 4.5, 6.3};
Print["coeffs (low->high): ", polyFit[t, y, 2]]
`,ei=`#include <vector>
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
`,ti=`program power_fit_demo
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
`,ni=`package main

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
`,ii=`function power_fit(t, y)
    A = [log.(t) ones(length(t))]            # ln y = a ln t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [1.0, 2, 3, 4]; y = [2.0, 5.6, 9.7, 16.0]
a, b = power_fit(t, y); println("a = $a, b = $b")
`,ai=`// Fit y ~ b*t^a by linear least squares on log-log data. Returns [a, b].
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
`,si=`function [a, b] = power_fit(t, y)
% POWER_FIT  Fit y ~ b*t^a by linear least squares on log-log data.
    lt = log(t(:)); ly = log(y(:));
    p = [lt, ones(numel(lt),1)] \\ ly; % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [1 2 3 4]; y = [2.0 5.6 9.7 16.0];
[a, b] = power_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,ri=`import numpy as np


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
`,oi=`# Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
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
`,li=`fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
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
`,ci=`powerFit[t_, y_] := Module[{A, p},
   A = Transpose[{Log[t], ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a ln t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {1, 2, 3, 4}; y = {2.0, 5.6, 9.7, 16.0};
Print["a, b = ", powerFit[t, y]]
`,hi=Object.assign({"./exponential.cpp":Nn,"./exponential.f90":Ln,"./exponential.go":Mn,"./exponential.jl":Rn,"./exponential.js":Bn,"./exponential.m":Cn,"./exponential.py":Pn,"./exponential.r":Wn,"./exponential.rs":Dn,"./exponential.wl":Vn,"./polynomial.cpp":Hn,"./polynomial.f90":Xn,"./polynomial.go":Yn,"./polynomial.jl":On,"./polynomial.js":Gn,"./polynomial.m":Zn,"./polynomial.py":Qn,"./polynomial.r":Kn,"./polynomial.rs":Un,"./polynomial.wl":Jn,"./power.cpp":ei,"./power.f90":ti,"./power.go":ni,"./power.jl":ii,"./power.js":ai,"./power.m":si,"./power.py":ri,"./power.r":oi,"./power.rs":li,"./power.wl":ci}),I=(r,n)=>hi[`./${r}.${n}`],mi={polynomial:{en:"Least-squares polynomial fit",hu:"Legkisebb négyzetes polinomillesztés"},exponential:{en:"Exponential fit  y ≈ b·e^{a t}",hu:"Exponenciális illesztés  y ≈ b·e^{a t}"},power:{en:"Power-law fit  y ≈ b·t^a",hu:"Hatványfüggvény-illesztés  y ≈ b·t^a"}},ui=r=>({id:r,caption:mi[r],snippets:{matlab:I(r,"m"),python:I(r,"py"),cpp:I(r,"cpp"),julia:I(r,"jl"),rust:I(r,"rs"),fortran:I(r,"f90"),wolfram:I(r,"wl"),javascript:I(r,"js"),go:I(r,"go"),r:I(r,"r")}}),pi={polynomial:["polynomial"],nonlinear:["exponential","power"]};function fi(r){return(pi[r]??[]).map(ui)}function di({block:r}){const{t:n}=V();return h.jsxs("figure",{className:"data-table",children:[r.caption&&h.jsx("figcaption",{children:h.jsx(L,{text:n(r.caption)})}),h.jsxs("table",{children:[h.jsx("thead",{children:h.jsx("tr",{children:r.headers.map((e,t)=>h.jsx("th",{children:h.jsx(L,{text:e})},t))})}),h.jsxs("tbody",{children:[r.rows.map((e,t)=>h.jsx("tr",{children:e.map((s,i)=>h.jsx("td",{children:h.jsx(L,{text:s})},i))},t)),r.totals&&h.jsx("tr",{className:"totals",children:r.totals.map((e,t)=>h.jsx("td",{children:h.jsx(L,{text:e})},t))})]})]})]})}function $i({block:r}){const{t:n}=V();return h.jsxs("div",{className:"exercises",children:[h.jsx("h4",{children:n(r.label)}),h.jsx("p",{children:h.jsx(L,{text:n(r.intro)})}),h.jsx("div",{className:"exercise-grid",children:r.items.map((e,t)=>h.jsxs("div",{className:"exercise-card",children:[h.jsx("div",{className:"exercise-tag",children:h.jsx(L,{text:e.tag})}),h.jsx("table",{className:"mini",children:h.jsxs("tbody",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:h.jsx(L,{text:e.headers[0]})}),e.cols.map(([s],i)=>h.jsx("td",{children:s},i))]}),h.jsxs("tr",{children:[h.jsx("th",{children:h.jsx(L,{text:e.headers[1]})}),e.cols.map(([,s],i)=>h.jsx("td",{children:s},i))]})]})})]},t))})]})}function xi({block:r,sectionId:n}){const{t:e}=V();switch(r.type){case"text":return h.jsx("div",{className:"prose",children:h.jsx(D,{markdown:e(r)})});case"math":return h.jsx("div",{className:"math-display",children:h.jsx(D,{markdown:`$$
${r.tex}
$$`})});case"callout":return h.jsx("div",{className:`callout ${r.variant||"note"}`,children:h.jsx(D,{markdown:e(r)})});case"theorem":case"example":return h.jsxs("div",{className:`box ${r.type}`,children:[h.jsx("div",{className:"box-label",children:e(r.label)}),h.jsx("div",{className:"box-body",children:h.jsx(D,{markdown:e(r)})})]});case"table":return h.jsx(di,{block:r});case"exercises":return h.jsx($i,{block:r});case"demo":return h.jsx(qn,{component:r.component,caption:r.caption?e(r.caption):void 0});case"quiz":return h.jsx(An,{refKey:r.ref,sectionId:n});case"glossary":return h.jsx(En,{deck:r.deck});case"flashcards":return h.jsx(In,{deck:r.deck});default:return null}}function bi({section:r}){const{t:n}=V();return h.jsxs("article",{className:"section",id:`sec-${r.id}`,children:[h.jsxs("h2",{className:"section-title",children:[n(r.title),jt(r.id)&&h.jsx("span",{className:"done-badge",children:"✓"})]}),r.blocks.map((e,t)=>h.jsx(xi,{block:e,sectionId:r.id},t)),fi(r.id).map(e=>h.jsx(ft,{snippets:e.snippets,caption:e.caption},e.id))]})}const gi=`# Chapter 9: Exercise Solutions

## Section 9.1 Exercises

### Exercise 1: Line Fitting

**(a) Data:**
\`\`\`
xᵢ:  -2.0  -1.0   0.0   1.0   2.0
yᵢ:   1.0   2.0   2.5   2.0   1.0
\`\`\`

**Compute sums:**
- n+1 = 5
- Σxᵢ = -2 - 1 + 0 + 1 + 2 = 0
- Σxᵢ² = 4 + 1 + 0 + 1 + 4 = 10
- Σyᵢ = 1 + 2 + 2.5 + 2 + 1 = 8.5
- Σxᵢyᵢ = (-2)(1) + (-1)(2) + (0)(2.5) + (1)(2) + (2)(1) = -2 - 2 + 0 + 2 + 2 = 0

**Normal equations:**
$$\\begin{pmatrix} 10 & 0 \\\\ 0 & 5 \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 8.5 \\end{pmatrix}$$

**Solution:**
- a = 0/10 = **0**
- b = 8.5/5 = **1.7**

**Best fit line:** y = 0x + 1.7 = **1.7** (horizontal line)

**Error:**
$$SSR = \\sum (1.7 - y_i)^2 = (1.7-1)^2 + (1.7-2)^2 + (1.7-2.5)^2 + (1.7-2)^2 + (1.7-1)^2$$
$$= 0.49 + 0.09 + 0.64 + 0.09 + 0.49 = 1.80$$

**RMSE:** √(1.80/5) = **0.60**

---

**(b) Data:**
\`\`\`
xᵢ:   0.0   1.0   2.0   3.0   4.0
yᵢ:   1.0   2.9   5.1   7.0   9.1
\`\`\`

**Compute sums:**
- n+1 = 5
- Σxᵢ = 0 + 1 + 2 + 3 + 4 = 10
- Σxᵢ² = 0 + 1 + 4 + 9 + 16 = 30
- Σyᵢ = 1 + 2.9 + 5.1 + 7 + 9.1 = 25.1
- Σxᵢyᵢ = 0 + 2.9 + 10.2 + 21 + 36.4 = 70.5

**Normal equations:**
$$\\begin{pmatrix} 30 & 10 \\\\ 10 & 5 \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 70.5 \\\\ 25.1 \\end{pmatrix}$$

**Determinant:** d = 30(5) - 10(10) = 150 - 100 = 50

**Solution:**
$$a = \\frac{5(70.5) - 10(25.1)}{50} = \\frac{352.5 - 251}{50} = \\frac{101.5}{50} = \\mathbf{2.03}$$

$$b = \\frac{30(25.1) - 10(70.5)}{50} = \\frac{753 - 705}{50} = \\frac{48}{50} = \\mathbf{0.96}$$

**Best fit line:** y = **2.03x + 0.96**

**Error:**
$$SSR = \\sum (2.03x_i + 0.96 - y_i)^2$$
$$= (0.96-1)^2 + (2.99-2.9)^2 + (5.02-5.1)^2 + (7.05-7)^2 + (9.08-9.1)^2$$
$$= 0.0016 + 0.0081 + 0.0064 + 0.0025 + 0.0004 = \\mathbf{0.019}$$

**RMSE:** √(0.019/5) = **0.062**

Excellent fit!

---

### Exercise 2: Prove Determinant Formula

**To prove:** d = (n+1)Σxᵢ² - (Σxᵢ)² > 0 if at least two xᵢ are distinct.

**Proof:**

By Cauchy-Schwarz inequality (Theorem 2.42):
$$\\left(\\sum_{i=0}^n u_i v_i\\right)^2 \\leq \\left(\\sum_{i=0}^n u_i^2\\right)\\left(\\sum_{i=0}^n v_i^2\\right)$$

Let uᵢ = 1 and vᵢ = xᵢ:
$$\\left(\\sum_{i=0}^n 1 \\cdot x_i\\right)^2 \\leq \\left(\\sum_{i=0}^n 1^2\\right)\\left(\\sum_{i=0}^n x_i^2\\right)$$

$$\\left(\\sum_{i=0}^n x_i\\right)^2 \\leq (n+1)\\sum_{i=0}^n x_i^2$$

Therefore: d = (n+1)Σxᵢ² - (Σxᵢ)² ≥ 0

**Equality holds** iff xᵢ = c (constant) for all i.

If at least two xᵢ are distinct, the inequality is **strict**: d > 0.

**Therefore, the normal equations have a unique solution.** □

---

### Exercise 3: Alternative Formula for Line Fitting

**To show:** The slope can be written as:
$$\\bar{a} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$$

where x̄ = Σxᵢ/(n+1) and ȳ = Σyᵢ/(n+1).

**Proof:**

Expand numerator:
$$\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = \\sum x_i y_i - \\bar{x}\\sum y_i - \\bar{y}\\sum x_i + (n+1)\\bar{x}\\bar{y}$$

Since Σyᵢ = (n+1)ȳ and Σxᵢ = (n+1)x̄:
$$= \\sum x_i y_i - (n+1)\\bar{x}\\bar{y} - (n+1)\\bar{y}\\bar{x} + (n+1)\\bar{x}\\bar{y}$$
$$= \\sum x_i y_i - (n+1)\\bar{x}\\bar{y}$$

Expand denominator:
$$\\sum (x_i - \\bar{x})^2 = \\sum x_i^2 - 2\\bar{x}\\sum x_i + (n+1)\\bar{x}^2$$
$$= \\sum x_i^2 - 2(n+1)\\bar{x}^2 + (n+1)\\bar{x}^2$$
$$= \\sum x_i^2 - (n+1)\\bar{x}^2$$

Now substitute x̄ = Σxᵢ/(n+1) and ȳ = Σyᵢ/(n+1):

Numerator: Σxᵢyᵢ - (n+1)(Σxᵢ/(n+1))(Σyᵢ/(n+1)) = Σxᵢyᵢ - (Σxᵢ)(Σyᵢ)/(n+1)

Denominator: Σxᵢ² - (n+1)(Σxᵢ/(n+1))² = Σxᵢ² - (Σxᵢ)²/(n+1)

Therefore:
$$\\bar{a} = \\frac{\\sum x_i y_i - \\frac{(\\sum x_i)(\\sum y_i)}{n+1}}{\\sum x_i^2 - \\frac{(\\sum x_i)^2}{n+1}} = \\frac{(n+1)\\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{(n+1)\\sum x_i^2 - (\\sum x_i)^2}$$

This matches the formula from Section 9.1. □

---

## Section 9.2 Exercises

### Exercise 1: Parabola Fitting

**(a) Data:**
\`\`\`
xᵢ:  -2.0  -1.0   1.0   2.0   3.0
yᵢ:  -2.1   1.4   0.5  -2.5  -7.2
\`\`\`

**Compute sums:**
- n+1 = 5
- Σxᵢ = -2 - 1 + 1 + 2 + 3 = 3
- Σxᵢ² = 4 + 1 + 1 + 4 + 9 = 19
- Σxᵢ³ = -8 - 1 + 1 + 8 + 27 = 27
- Σxᵢ⁴ = 16 + 1 + 1 + 16 + 81 = 115
- Σyᵢ = -2.1 + 1.4 + 0.5 - 2.5 - 7.2 = -9.9
- Σxᵢyᵢ = 4.2 - 1.4 + 0.5 - 5 - 21.6 = -23.3
- Σxᵢ²yᵢ = -8.4 + 1.4 + 0.5 - 10 - 64.8 = -81.3

**Normal equations:**
$$\\begin{pmatrix} 115 & 27 & 19 \\\\ 27 & 19 & 3 \\\\ 19 & 3 & 5 \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix} = \\begin{pmatrix} -81.3 \\\\ -23.3 \\\\ -9.9 \\end{pmatrix}$$

**Solve using Gaussian elimination or matrix inverse:**

Using a calculator:
- a ≈ **-0.985**
- b ≈ **-0.321**
- c ≈ **0.156**

**Best fit parabola:** y = **-0.985x² - 0.321x + 0.156**

**Error:**
$$SSR = \\sum (-0.985x_i^2 - 0.321x_i + 0.156 - y_i)^2 \\approx \\mathbf{0.142}$$

---

**(b) Data:**
\`\`\`
xᵢ:   1.0   2.0   3.0   4.0   5.0   6.0
yᵢ:   2.5   1.2  -2.0   3.9   6.2   8.3
\`\`\`

**Compute sums:**
- n+1 = 6
- Σxᵢ = 21
- Σxᵢ² = 91
- Σxᵢ³ = 441
- Σxᵢ⁴ = 2275
- Σyᵢ = 20.1
- Σxᵢyᵢ = 106.5
- Σxᵢ²yᵢ = 553.5

**Normal equations:**
$$\\begin{pmatrix} 2275 & 441 & 91 \\\\ 441 & 91 & 21 \\\\ 91 & 21 & 6 \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix} = \\begin{pmatrix} 553.5 \\\\ 106.5 \\\\ 20.1 \\end{pmatrix}$$

**Solution:**
- a ≈ **0.304**
- b ≈ **-1.286**
- c ≈ **2.929**

**Best fit parabola:** y = **0.304x² - 1.286x + 2.929**

**Error:** SSR ≈ **2.847**

---

### Exercise 2: Cubic Polynomial Fitting

**Data:** Same as Exercise 1(a)

**Model:** g(x) = ax³ + bx² + cx + d

**Normal equations (4×4 system):**
$$\\begin{pmatrix}
\\sum x_i^6 & \\sum x_i^5 & \\sum x_i^4 & \\sum x_i^3 \\\\
\\sum x_i^5 & \\sum x_i^4 & \\sum x_i^3 & \\sum x_i^2 \\\\
\\sum x_i^4 & \\sum x_i^3 & \\sum x_i^2 & \\sum x_i \\\\
\\sum x_i^3 & \\sum x_i^2 & \\sum x_i & n+1
\\end{pmatrix}
\\begin{pmatrix} a \\\\ b \\\\ c \\\\ d \\end{pmatrix}
=
\\begin{pmatrix} \\sum x_i^3 y_i \\\\ \\sum x_i^2 y_i \\\\ \\sum x_i y_i \\\\ \\sum y_i \\end{pmatrix}$$

**Additional sums:**
- Σxᵢ⁵ = -32 - 1 + 1 + 32 + 243 = 243
- Σxᵢ⁶ = 64 + 1 + 1 + 64 + 729 = 859
- Σxᵢ³yᵢ = 16.8 - 1.4 + 0.5 - 20 - 194.4 = -198.5

**Solve 4×4 system:**
- a ≈ **-0.053**
- b ≈ **-0.893**
- c ≈ **-0.175**
- d ≈ **0.089**

**Best fit cubic:** y = **-0.053x³ - 0.893x² - 0.175x + 0.089**

**Error:** SSR ≈ **0.128** (slightly better than parabola)

---

### Exercise 3: Prove Positive Definiteness

**To prove:** The coefficient matrix A in (9.4) is positive definite.

**Proof:**

Let z = (z₁, z₂, ..., zₘ₊₁) ∈ ℝᵐ⁺¹.

The jk-th element of A is: A_{jk} = Σᵢ₌₀ⁿ xᵢ²ᵐ⁺²⁻ʲ⁻ᵏ

Compute zᵀAz:
$$\\mathbf{z}^T A \\mathbf{z} = \\sum_{j=1}^{m+1} \\sum_{k=1}^{m+1} z_j z_k \\sum_{i=0}^n x_i^{2m+2-j-k}$$

$$= \\sum_{i=0}^n \\sum_{j=1}^{m+1} \\sum_{k=1}^{m+1} z_j x_i^{m+1-j} z_k x_i^{m+1-k}$$

$$= \\sum_{i=0}^n \\left(\\sum_{j=1}^{m+1} z_j x_i^{m+1-j}\\right)^2 \\geq 0$$

**Equality holds** iff Σⱼ₌₁ᵐ⁺¹ zⱼxᵢᵐ⁺¹⁻ʲ = 0 for all i = 0, 1, ..., n.

But p(x) = Σⱼ₌₁ᵐ⁺¹ zⱼxᵐ⁺¹⁻ʲ is a polynomial of degree at most m.

If there are m+1 distinct mesh points and p(xᵢ) = 0 for all i, then by the Fundamental Theorem of Algebra, p(x) ≡ 0.

Therefore, all zⱼ = 0, so z = 0.

**Hence A is positive definite.** □

---

## Section 9.3 Exercises

### Exercise 1: Exponential Function Fitting

**(a) Data:**
\`\`\`
xᵢ:  -2.0  -1.0   1.0   2.0   3.0
yᵢ:   0.6   0.9   1.6   2.3   2.9
\`\`\`

**Linearization:** Y = ln y, X = x, Y = AX + B where A = a, B = ln b

**Transformed data:**
\`\`\`
Xᵢ:  -2.0   -1.0    1.0    2.0    3.0
Yᵢ:  -0.511  -0.105   0.470   0.833   1.065
\`\`\`

**Compute sums:**
- n+1 = 5
- ΣXᵢ = 3
- ΣXᵢ² = 4 + 1 + 1 + 4 + 9 = 19
- ΣYᵢ = 1.752
- ΣXᵢYᵢ = 1.022 + 0.105 + 0.470 + 1.666 + 3.195 = 6.458

**Normal equations:**
$$\\begin{pmatrix} 19 & 3 \\\\ 3 & 5 \\end{pmatrix} \\begin{pmatrix} A \\\\ B \\end{pmatrix} = \\begin{pmatrix} 6.458 \\\\ 1.752 \\end{pmatrix}$$

**Determinant:** d = 95 - 9 = 86

**Solution:**
$$A = \\frac{5(6.458) - 3(1.752)}{86} = \\frac{32.29 - 5.256}{86} = \\frac{27.034}{86} = \\mathbf{0.314}$$

$$B = \\frac{19(1.752) - 3(6.458)}{86} = \\frac{33.288 - 19.374}{86} = \\frac{13.914}{86} = \\mathbf{0.162}$$

**Transform back:**
- a = A = **0.314**
- b = eᴮ = e⁰·¹⁶² = **1.176**

**Best fit exponential:** y = **1.176e⁰·³¹⁴ˣ**

**Linear fitting error:** Σ(AXᵢ + B - Yᵢ)² ≈ **0.0234**

**Nonlinear fitting error:** Σ(beᵃˣⁱ - yᵢ)² ≈ **0.0412**

---

**(b) Data:**
\`\`\`
xᵢ:   1.0   1.5   2.0   2.5   3.0   3.5
yᵢ:   1.3   1.6   1.9   2.2   3.0   4.1
\`\`\`

**Transformed data (X = x, Y = ln y):**
\`\`\`
Xᵢ:   1.0    1.5    2.0    2.5    3.0    3.5
Yᵢ:   0.262  0.470  0.642  0.788  1.099  1.411
\`\`\`

**Sums:**
- n+1 = 6
- ΣXᵢ = 13.5
- ΣXᵢ² = 37.75
- ΣYᵢ = 4.672
- ΣXᵢYᵢ = 12.398

**Normal equations:**
$$\\begin{pmatrix} 37.75 & 13.5 \\\\ 13.5 & 6 \\end{pmatrix} \\begin{pmatrix} A \\\\ B \\end{pmatrix} = \\begin{pmatrix} 12.398 \\\\ 4.672 \\end{pmatrix}$$

**Solution:**
- A ≈ **0.436**
- B ≈ **-0.201**

**Best fit:** y = **0.818e⁰·⁴³⁶ˣ**

---

### Exercise 2: Power Function Fitting

**(a) Data:**
\`\`\`
xᵢ:   1.0   3.0   4.0   5.0   6.0   9.0
yᵢ:   1.6   1.9   2.2   2.3   3.4   4.9
\`\`\`

**Linearization:** Y = ln y, X = ln x, Y = AX + B where A = a, B = ln b

**Transformed data:**
\`\`\`
Xᵢ = ln xᵢ:   0.000   1.099   1.386   1.609   1.792   2.197
Yᵢ = ln yᵢ:   0.470   0.642   0.788   0.833   1.224   1.589
\`\`\`

**Compute sums:**
- n+1 = 6
- ΣXᵢ = 8.083
- ΣXᵢ² = 14.234
- ΣYᵢ = 5.546
- ΣXᵢYᵢ = 9.428

**Normal equations:**
$$\\begin{pmatrix} 14.234 & 8.083 \\\\ 8.083 & 6 \\end{pmatrix} \\begin{pmatrix} A \\\\ B \\end{pmatrix} = \\begin{pmatrix} 9.428 \\\\ 5.546 \\end{pmatrix}$$

**Solution:**
- A ≈ **0.548**
- B ≈ **0.186**

**Transform back:**
- a = A = **0.548**
- b = eᴮ = e⁰·¹⁸⁶ = **1.204**

**Best fit power function:** y = **1.204x⁰·⁵⁴⁸**

**Nonlinear error:** Σ(bxᵢᵃ - yᵢ)² ≈ **0.127**

---

**(b) Data:**
\`\`\`
xᵢ:   1.0   2.0   3.0   4.0   5.0
yᵢ:   0.7   2.8   7.5  14.8  25.6
\`\`\`

**Transformed data:**
\`\`\`
Xᵢ = ln xᵢ:   0.000   0.693   1.099   1.386   1.609
Yᵢ = ln yᵢ:  -0.357   1.030   2.015   2.695   3.243
\`\`\`

**Sums:**
- ΣXᵢ = 4.787
- ΣXᵢ² = 6.293
- ΣYᵢ = 8.626
- ΣXᵢYᵢ = 11.698

**Solution:**
- A ≈ **1.987** ≈ 2
- B ≈ **-0.147**

**Best fit:** y = **0.863x¹·⁹⁸⁷** ≈ **0.863x²**

This makes sense: the data looks roughly quadratic!

---

### Exercise 3: Nonlinear Minimization by Newton's Method

**Problem:** Minimize F(a,b) = Σ(beᵃˣⁱ - yᵢ)² directly (without linearization).

**Gradient:**
$$\\frac{\\partial F}{\\partial a} = 2\\sum (be^{ax_i} - y_i)be^{ax_i}x_i$$
$$\\frac{\\partial F}{\\partial b} = 2\\sum (be^{ax_i} - y_i)e^{ax_i}$$

**Hessian:**
$$\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum [(be^{ax_i}x_i)^2 + (be^{ax_i} - y_i)be^{ax_i}x_i^2]$$
$$\\frac{\\partial^2 F}{\\partial a \\partial b} = 2\\sum [e^{ax_i}(be^{ax_i}x_i) + (be^{ax_i} - y_i)e^{ax_i}x_i]$$
$$\\frac{\\partial^2 F}{\\partial b^2} = 2\\sum e^{2ax_i}$$

**Newton iteration:**
$$\\begin{pmatrix} a^{(k+1)} \\\\ b^{(k+1)} \\end{pmatrix} = \\begin{pmatrix} a^{(k)} \\\\ b^{(k)} \\end{pmatrix} - [F''(a^{(k)}, b^{(k)})]^{-1} \\nabla F(a^{(k)}, b^{(k)})$$

**Initial guess:** Use linearization result.

**For Exercise 1(a):** Start with a⁽⁰⁾ = 0.314, b⁽⁰⁾ = 1.176

After 3-4 Newton iterations:
- a ≈ **0.318**
- b ≈ **1.169**

**Nonlinear error:** Σ(beᵃˣⁱ - yᵢ)² ≈ **0.0398** (slightly better than linearization!)

---

### Exercise 4: Compare Linearization vs Direct Minimization

**For exponential fit to Exercise 1(a) data:**

| Method | a | b | SSR |
|--------|-----|-------|-------|
| Linearization | 0.314 | 1.176 | 0.0412 |
| Newton (exact) | 0.318 | 1.169 | 0.0398 |

**Observation:** Linearization gives a good approximation (~3% error in SSR).

**Advantages of linearization:**
- Simple, closed-form solution
- Good initial guess for iterative methods
- No convergence issues

**Disadvantages:**
- Minimizes different objective (log-space error)
- Biased if yᵢ has additive (not multiplicative) noise

---

### Exercise 5: Reciprocal Function Fitting

**Model:** y = 1/(a + bx)

**Linearization:** 1/y = a + bx

Let Y = 1/y, X = x

**Fit line Y = a + bX to data (xᵢ, 1/yᵢ)**

**Example data:**
\`\`\`
xᵢ:   1.0   2.0   3.0   4.0   5.0
yᵢ:   0.50  0.33  0.25  0.20  0.17
\`\`\`

**Transformed:**
\`\`\`
Xᵢ:   1.0   2.0   3.0   4.0   5.0
Yᵢ:   2.00  3.03  4.00  5.00  5.88
\`\`\`

**Linear fit:** Y = 0.98 + 0.99X

**Best fit:** y = **1/(0.98 + 0.99x)** ≈ **1/(1 + x)**

---

## Summary of Key Formulas

**Line fitting:**
$$\\bar{a} = \\frac{(n+1)\\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{(n+1)\\sum x_i^2 - (\\sum x_i)^2}, \\quad \\bar{b} = \\frac{\\sum y_i - \\bar{a}\\sum x_i}{n+1}$$

**Polynomial fitting:** Solve (m+1)×(m+1) normal equations

**Exponential (y = beᵃˣ):**
- Linearize: ln y = ax + ln b
- Fit line to (xᵢ, ln yᵢ)
- a = slope, b = e^(intercept)

**Power function (y = bxᵃ):**
- Linearize: ln y = a ln x + ln b
- Fit line to (ln xᵢ, ln yᵢ)
- a = slope, b = e^(intercept)

**Error measures:**
- SSR = Σ(yᵢ - ŷᵢ)²
- RMSE = √(SSR/(n+1))
- R² = 1 - SSR/Σ(yᵢ - ȳ)²
`,lt=Oe,yi={intro:"9",line:"9.1",polynomial:"9.2",nonlinear:"9.3"},_i=lt.map(r=>({id:`sec-${r.id}`,no:yi[r.id]??"9",title:r.title,blurb:{en:"",hu:""}}));function qi(){const{lang:r}=V(),{theme:n}=ut(),e=pt();return T.useEffect(()=>{bt(r)},[r]),T.useEffect(()=>{yt(n)},[n]),T.useEffect(()=>{const t=decodeURIComponent(e.hash.replace(/^#/,""));t&&requestAnimationFrame(()=>{var s;return(s=document.getElementById(t))==null?void 0:s.scrollIntoView()})},[e.hash]),h.jsxs("div",{className:"ch-least-squares",children:[h.jsx(dt,{sections:_i}),h.jsx("main",{className:"content content--full",children:lt.map(t=>h.jsx(bi,{section:t},t.id))}),h.jsx($t,{markdown:gi})]})}export{qi as default};
