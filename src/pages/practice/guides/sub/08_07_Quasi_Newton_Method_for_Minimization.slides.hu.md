# 8.7. Kvázi-Newton módszerek

Az előző szakaszhoz hasonlóan közelítsük az $f$ függvényt egy $\mathbf{p}^{(k)}$ pontja környezetében a

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}) \tag{16}$$

kvadratikus függvénnyel. Ha $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ és $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, akkor (16) közelíti $f$ másodfokú $\mathbf{p}^{(k)}$-körüli Taylor-polinomját, így valóban $f$ közelítésének tekinthető $\mathbf{p}^{(k)}$ egy kis környezetében. Azt várjuk, hogy $g$ minimumhelye közelíteni fogja $f$ minimumhelyét. Ha $\mathbf{A}^{(k)}$ pozitív definit, akkor $g$ minimumhelye a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{17}$$

pontban van. Ezeket az iterációs eljárásokat **kvázi-Newton minimumkeresési módszereknek** hívjuk.

---

Választhatjuk $\mathbf{A}^{(k)}$-t és $\mathbf{v}^{(k)}$-t az $f''(\mathbf{p}^{(k)})$ Hesse-mátrix és az $f'(\mathbf{p}^{(k)})$ gradiensvektor numerikus közelítésének: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ és $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, ahol

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big)$$

és

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor, $h > 0$ rögzített kis lépésköz). Ezzel a módosítással nincs szükség a pontos Jacobi- és Hesse-mátrix ismeretére, viszont minden iterációs lépésben $n^2$ nagyságrendű függvény kiértékelést kell elvégezni.

---

Most tekintsük azt az esetet, amikor a (17) képletben $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, azaz vizsgáljuk a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}) \tag{18}$$

alakú kvázi-Newton módszereket. Feltesszük tehát, hogy a függvény gradiensvektorát ki tudjuk számítani, és a kérdés az, hogyan közelítsük a függvény Hesse-mátrixát. Erre egy lehetőség a Broyden-módszer alkalmazása az $f'(\mathbf{x}) = \mathbf{0}$ egyenletrendszer gyökének meghatározására:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{19}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{20}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{21}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{22}$$

---

> **Példa.** Alkalmazzuk a (19)–(22) képletekkel definiált Broyden-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(2, 2)^T$ pontból indítottuk a sorozatot, az $\mathbf{A}^{(0)}$ mátrix pedig az $f''(2, 2)$ Hesse-mátrix $h = 0.05$ lépésközű másodrendű differencia képlettel számított közelítése volt. A kapott sorozat első 10 tagját a következő táblázatban láthatjuk.

---

**Példa folyt.**

*Broyden-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
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

---

A (22) iterációs módszerrel az a probléma, hogy mivel $\mathbf{A}^{(k)}$ az $f''(\mathbf{p})$ Hesse-mátrix közelítése, így természetes megkövetelni, hogy $\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra. A numerikus tapasztalat is azt támasztja alá, hogy azok a (18) alakú kvázi-Newton módszerek a leghatékonyabbak, ahol $\mathbf{A}^{(k)}$ pozitív definit közelítése a Hesse-mátrixnak. A Broyden-módszerrel generált $\mathbf{A}^{(k)}$ mátrixsorozat viszont pozitív definit mátrixból kiindulva még csak nem is szimmetrikus mátrixokat generál.

---

Az első célunk ezért úgy módosítani a Broyden-módszer képletét, hogy az szimmetrikus mátrixot generáljon minden $k$-ra. Tegyük fel, hogy $\mathbf{A}^{(k)}$ szimmetrikus, és legyen

$$\mathbf{B}^{(k+1,1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}$$

a Broyden-féle iterált mátrix. Megmutatható, hogy egy $\mathbf{A}$ mátrixhoz bizonyos értelemben legközelebbi szimmetrikus mátrix az $\frac{1}{2}(\mathbf{A} + \mathbf{A}^T)$ mátrix. Ezért természetes ötlet $\mathbf{B}^{(k+1,1)}$-et úgy módosítani, hogy

$$\begin{aligned}
\mathbf{B}^{(k+1,2)} &= \frac{1}{2}\Big(\mathbf{B}^{(k+1,1)} + \mathbf{B}^{(k+1,1)T}\Big) \\
&= \mathbf{A}^{(k)} + \frac{1}{2}\frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}
\end{aligned} \tag{23}$$

legyen.

---

Ezzel viszont az a gond, hogy $\mathbf{B}^{(k+1,2)}$ nem teljesíti az $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ szelő egyenletet, amely a Broyden-módszer kiindulási ötlete volt. Korrigáljuk ezt a hibát (22) újbóli alkalmazásával: legyen

$$\mathbf{B}^{(k+1,3)} = \mathbf{B}^{(k+1,2)} + \frac{(\mathbf{y}^{(k)} - \mathbf{B}^{(k+1,2)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{24}$$

Ez újra nem szimmetrikus, ezért megismételjük az eljárást: képezzük a $\mathbf{B}^{(k+1,2i)}$ és $\mathbf{B}^{(k+1,2i+1)}$ mátrixokat a sorozat előző tagjából (23) és (24) segítségével $i = 2, 3, \ldots$-re.

---

Megmutatható, hogy a $\mathbf{B}^{(k+1,i)}$ mátrixsorozat konvergál az

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^4} \mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T
\end{aligned} \tag{25}$$

szimmetrikus mátrixhoz. Ez egy olyan mátrix korrekciós iteráció, amely megőrzi a mátrix szimmetrikus tulajdonságát, és amely teljesíti az $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ szelő egyenletet. Ezt a mátrix iterációt **Powell-féle szimmetrikus Broyden-iterációnak**, angol rövidítése alapján **PSB-iterációnak** nevezzük.

---

> **Tétel.** *Legyen $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\varepsilon, \delta > 0$, hogy a (19)–(21), (25) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ és $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

> **Példa.** Ebben a példában a (18) kvázi-Newton módszert a PSB-iterációval alkalmaztuk az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A korábbi példában használt kezdőértékekből indítva a következő táblázatban felsorolt eredményeket kapjuk. A konvergencia gyorsabb, mint a Broyden-módszernél volt.

---

**Példa folyt.**

*A (18) kvázi-Newton módszer PSB-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
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

---

A PSB-iteráció nem teljesíti azt a korábban megfogalmazott célunkat, hogy $\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra, ha $\mathbf{A}^{(0)}$ pozitív definit. Ha egy $\mathbf{A}$ mátrix pozitív definit, akkor az $\mathbf{A} = \mathbf{L}\mathbf{L}^T$ Cholesky-felbontása létezik, ahol $\mathbf{L}$ nemszinguláris. Fordítva, ha

$$\mathbf{A} = \mathbf{M}\mathbf{M}^T$$

alakú, ahol $\mathbf{M}$ nemszinguláris, akkor $\mathbf{A}$ pozitív definit, hiszen

$$\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = (\mathbf{M}^T\mathbf{x})^T \mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0,$$

és egyenlőség csak akkor van, ha $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, és ezért $\mathbf{x} = \mathbf{0}$.

---

Legyen

$$\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T$$

alakú, ahol $\mathbf{M}^{(k)}$ invertálható (de nem feltétlenül alulról trianguláris). A következő Hesse-mátrix közelítést, $\mathbf{A}^{(k+1)}$-et az

$$\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$$

alakban keressük, ahol $\mathbf{A}^{(k+1)}$-től megköveteljük, hogy teljesítse az

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$$

szelő egyenleteket. A szelő egyenletből következik, hogy $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, ezért ha $\mathbf{A}^{(k+1)}$ pozitív definit, akkor az

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{26}$$

egyenlőtlenség teljesül. Megmutatjuk, hogy (26) teljesülése esetén a szelő egyenletnek van pozitív definit megoldása.

---

Vezessük be a $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$ jelölést. Ekkor a szelő egyenlet felírható a következőképpen:

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{27}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{28}$$

Az $\mathbf{M}^{(k+1)}$ mátrixot az $\mathbf{M}^{(k)}$ mátrixot módosítva szeretnénk előállítani, ezért a Broyden-módszer levezetését követve (28) alapján természetes $\mathbf{M}^{(k+1)}$-et az

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2} \tag{29}$$

alakban keresni. Ekkor $\mathbf{M}^{(k+1)}$ teljesíti a (28) egyenletet, és a legkevésbé tér el $\mathbf{M}^{(k)}$-tól abban az értelemben, hogy minden $\mathbf{z} \perp \mathbf{v}^{(k)}$-ra $\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z}$. $\mathbf{M}^{(k+1)}$-et visszahelyettesítve a (27) egyenletbe kapjuk, hogy

---

$$\begin{aligned}
\mathbf{v}^{(k)} &= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\big((\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T\big)^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\mathbf{v}^{(k)}(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{v}^{(k)}.
\end{aligned}$$

Ebből következik, hogy $(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \alpha \mathbf{v}^{(k)}$ alakú, ahol

$$\begin{aligned}
\alpha &= 1 - \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} + \frac{(\mathbf{v}^{(k)})^T (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \alpha^2 \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}} + \alpha,
\end{aligned}$$

és így

---

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{30}$$

Mivel a számláló pozitív, hiszen feltettük, hogy $\mathbf{A}^{(k)}$ pozitív definit, ezért $\alpha$ kifejezhető a (30) egyenletből, és

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Ezt visszahelyettesítve a (29) egyenletbe

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

---

Kis számolással ebből levezethető, hogy

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{31}$$

Hátra van még azt megmutatni, hogy az iteráció pozitív definit mátrixot generál. Mivel $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, ezért elegendő azt belátni, hogy $\mathbf{M}^{(k+1)}$ invertálható. A feltevés szerint $\mathbf{M}^{(k)}$ pozitív definit, és ezért invertálható. Ha feltesszük, hogy (26) teljesül, akkor $\mathbf{M}^{(k+1)}$ invertálhatóságát könnyen kapjuk a (29) képletből.

---

A (31) formulát Broyden, Flecher, Goldfarb és Shanno vezették be 1970-ben, ezért **BFGS-iterációnak** nevezzük. Ez a jelenleg ismert legjobb iterációs formula a Hesse-mátrix közelítésére. Az iteráció kezdeti mátrixának vagy $f''(\mathbf{p}^{(0)})$-t vagy ennek egy másodrendű differencia közelítését célszerű használni. Ha $\mathbf{p}^{(0)}$ elegendően közel van $\mathbf{p}$-hez, és $f''(\mathbf{p})$ pozitív definit, akkor $f''(\mathbf{p}^{(0)})$, és ezért $\mathbf{A}^{(0)}$ is az lesz.

---

Végül vizsgáljuk meg, hogy a (26) feltétel milyen megszorítást jelent. A Lagrange-féle középértéktételt és a (20), (21) egyenleteket alkalmazva kapjuk, hogy

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &= \big(f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)})\big)^T (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) \\
&= \sum_{i=1}^{n} \left( \frac{\partial f_i(\mathbf{p}^{(k+1)})}{\partial x_i} - \frac{\partial f_i(\mathbf{p}^{(k)})}{\partial x_i} \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\xi^{(k,i)})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}).
\end{aligned}$$

Ha a $\mathbf{p}^{(k)}$ iteráltak elegendően közel maradnak $\mathbf{p}$-hez az iteráció közben, akkor $\xi^{(k,i)}$ is $\mathbf{p}$ közelében marad, és ezért $f''$ folytonossága miatt

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &\approx \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\mathbf{p})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)})^T f''(\mathbf{p})(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}),
\end{aligned}$$

ami pozitív, hiszen $f''(\mathbf{p})$ pozitív definit.

---

Ez a feltétel tehát, ha a sorozat $\mathbf{p}$-hez tart, $\mathbf{p}$ közelében teljesülni fog. Természetesen ha (26) nem teljesül, akkor is definiálható a (31) iteráció, csak ekkor $\mathbf{A}^{(k+1)}$ pozitív szemidefinit lesz, nem pozitív definit.

> **Tétel.** *Legyen $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\varepsilon, \delta > 0$, hogy a (19)–(21), (31) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ és $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

---

> **Példa.** A BFGS-iterációval kaptuk az alábbi táblázatban szereplő sorozatot az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. Ugyanabból a kezdőértékekből indítottuk a módszert, mint az előző példában.

*A (18) kvázi-Newton módszer BFGS-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
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

---

Teljes indukcióval ellenőrizhető, hogy a BFGS-módszerrel képzett $\mathbf{A}^{(k)}$ mátrixok $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ inverzét a

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}
\end{aligned} \tag{32}$$

rekurzív képlettel is kiszámíthatjuk. Ezt az összefüggést használva a (19) egyenlet helyettesíthető az

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}) \tag{33}$$

egyenlettel, és így a módszer alkalmazásakor nincs szükség lineáris egyenletrendszer megoldására vagy mátrix invertálásra.

---

A BFGS-iteráció levezetéséhez hasonlóan kaphatjuk a DFP-iteráció képletét. Újra $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$ alakban keressük a módosított Hesse-közelítést, de a (27)–(28) szelő egyenletek helyett most az azzal ekvivalens

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}
\end{aligned}$$

egyenletekből indulunk ki. Ennek megoldását

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}$$

alakban keresve kapjuk, hogy

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

feltéve, hogy a (26) teljesül.

---

Ebből kiszámítható, hogy

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{34}$$

Ezt a formulát **DFP-iterációnak** nevezzük felfedezői után: Davidon (1959) és Flecher, Powell (1963).

Ellenőrizhető, hogy a DFP-iterációval generált $\mathbf{A}^{(k)}$ mátrix inverze kiszámítható a következő rekurzív módon:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{35}$$

---

> **Példa.** A DFP-iterációt vizsgáltuk a korábbi feladatra. Ez a módszer is a BFGS-iterációhoz hasonlóan gyorsan konvergál.

*A (18) kvázi-Newton módszer DFP-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
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

---

*Ferenc Hartung — Numerikus analízis 8. Szélsőértékszámítás — Pannon Egyetem*
