## 2.5. Newton-módszer

A numerikus analízisben gyakran használjuk a következő „módszert": helyettesítsük a problémát egy „egyszerűbb" problémával, ami „közel van" az eredeti problémához, és tekintsük az „egyszerűbb" probléma megoldását az eredeti közelítésének. Az $f(x)=0$ nemlineáris egyenlet megoldásakor tekintsük az $f$ függvény egy közelítését: Rögzítsünk egy $p_0$ pontot, vegyük $f$ elsőrendű Taylor-polinomját $p_0$ körül, és keressük meg annak a gyökét. Geometriailag ez azt jelenti, hogy vesszük az $f$ függvény $p_0$ pontjához húzott érintőjének metszéspontját az $x$-tengellyel. A metszéspontot az $f(p_0)+f'(p_0)(x-p_0)=0$ lineáris egyenlet megoldása adja, $x=p_0-f(p_0)/f'(p_0)$ (feltéve, hogy $f'(p_0)\neq 0$). Ezt a számot jelöljük $p_1$-gyel, és ismételjük meg az eljárást. Így kapjuk a

$$p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)} \tag{2.7}$$

rekurzív képlettel definiált sorozatot. A (2.7) iterációt *Newton–Raphson-módszernek* vagy röviden *Newton-módszernek* ill. *érintőmódszernek* nevezzük.

**2.22. példa.** A Newton-módszert alkalmazva a 2.17. példa feladatára a 2.5. táblázatban felsorolt értékeket kapjuk. A 2.18. algoritmushoz hasonló módon, ahogy sorozat egymás utáni tagjainak távolsága egy előre megadott tolerancia értéknél kisebb lett, megállítottuk a sorozat generálását. A sorozat nagyon gyorsan megközelítette a függvény gyökét. $\square$

**2.5. táblázat.** Newton-módszer, $f(x)=e^x-2\cos x$, $p_0=0.1$, $TOL=10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 | 7.5291e-01 |
| 2 | 0.5678850726 | 7.8450e-02 |
| 3 | 0.5402639121 | 1.3139e-03 |
| 4 | 0.5397853041 | 3.9302e-07 |
| 5 | 0.5397851608 | 3.5207e-14 |

A Newton-módszer egy egylépéses iterációs módszer, azaz fixpont iteráció a

$$g(x):=x-\frac{f(x)}{f'(x)} \tag{2.8}$$

iterációs függvénnyel. $g$-t differenciálva kapjuk

$$g'(x)=1-\frac{(f'(x))^2-f(x)f''(x)}{(f'(x))^2}=\frac{f(x)f''(x)}{(f'(x))^2}. \tag{2.9}$$

Legyen $p$ az $f$ függvény olyan gyöke, amelyre $f'(p)\neq 0$. Ekkor $g'(p)=0$, így a 2.15. tételből rögtön következik:

**2.23. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a Newton-módszer lokálisan konvergál $p$-hez.*

**2.24. példa.** Tekintsük az $f(x)=0.5\arctan x$ függvényt. Ennek egyetlen gyöke $p=0$. $f'(0)=0.5$, így a Newton-módszer lokálisan konvergál $p=0$-hoz, azaz, ha $p_0$ elég kicsi, akkor a Newton-sorozat 0-hoz tart. A 2.6. táblázatban a $p_0=1.4$ kezdeti értékhez tartozó sorozat első néhány tagját nyomtattuk ki. (A 15. lépésben a program hibaüzenettel leállt, mert $f'(p_{14})=0$ a számítógépen.) Látható, hogy $p_k$ ebben az esetben nem tart 0-hoz. $\square$

**2.6. táblázat.** Newton-módszer, $f(x)=0.5\arctan x$, $p_0=1.4$

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 1.4000000e+00 | 0.4752734 |
| 1 | -1.4136186e+00 | -0.4775591 |
| 2 | 1.4501293e+00 | 0.4835443 |
| 3 | -1.5506260e+00 | -0.4990071 |
| 4 | 1.8470541e+00 | 0.5372889 |
| 5 | -2.8935624e+00 | -0.6190257 |
| 6 | 8.7103258e+00 | 0.7282453 |
| 7 | -1.0324977e+02 | -0.7805557 |
| 8 | 1.6540564e+04 | 0.7853679 |
| 9 | -4.2972148e+08 | -0.7853982 |
| 10 | 2.9006412e+17 | 0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 | 2.7436939e+70 | 0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 | 2.1963537e+282 | 0.7853982 |

**Feladatok**

1. Alkalmazza a Newton-módszert a 2.3. szakasz 1. feladatában felsorolt egyenletek megoldására!
2. Legyen $f(x)=0.5\arctan x$. $f$-nek nyilván $x=0$ az egyetlen gyöke. Legyen a $p_k$ a Newton-iterációval generált sorozat. Mutassa meg, hogy létezik olyan $p^*$ szám, hogy
   - (a) ha $|p_0|<p^*$, akkor $p_k\to 0$,
   - (b) ha $|p_0|=p^*$, akkor a $p_k$ sorozat váltakozva a $p_0$, $-p_0$ értékeket veszi fel (azaz nem konvergens),
   - (c) ha $|p_0|>p^*$, akkor $p_k$ váltakozó előjelű, és $|p_k|\to\infty$.
3. Vezessen le egy iterációs módszert $\sqrt[n]{a}$ kiszámítására!

---
