## 8.7. Kvázi-Newton módszerek

Az előző szakaszhoz hasonlóan közelítsük az $f$ függvényt egy $\mathbf{p}^{(k)}$ pontja környezetében a

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}) \tag{8.16}$$

kvadratikus függvénnyel. Ha $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ és $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, akkor (8.16) közelíti $f$ másodfokú $\mathbf{p}^{(k)}$-körüli Taylor-polinomját, így valóban $f$ közelítésének tekinthető $\mathbf{p}^{(k)}$ egy kis környezetében. Azt várjuk, hogy $g$ minimumhelye közelíteni fogja $f$ minimumhelyét. Ha $\mathbf{A}^{(k)}$ pozitív definit, akkor a 8.10. tétel szerint $g$ minimumhelye a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{8.17}$$

pontban van. Ezeket az iterációs eljárásokat *kvázi-Newton minimumkeresési módszereknek* hívjuk.

Választhatjuk $\mathbf{A}^{(k)}$-t és $\mathbf{v}^{(k)}$-t az $f''(\mathbf{p}^{(k)})$ Hesse-mátrix és az $f'(\mathbf{p}^{(k)})$ gradiensvektor numerikus közelítésének: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ és $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, ahol

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big) \tag{8.18}$$

és

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor, $h > 0$ rögzített kis lépésköz). Itt elsőrendű jobb oldali differencia képlettel közelítettük $f$ elsőrendű parciális deriváltjait, illetve a (7.18)–(7.19) képletekkel a másodrendű parciális deriváltakat. Ezzel a módosítással nincs szükség a pontos Jacobi- és Hesse-mátrix ismeretére, viszont minden iterációs lépésben $n^2$ nagyságrendű függvény kiértékelést kell elvégezni, arról nem is beszélve, hogy nem tudjuk, mi a $h$ lépésköz ideális választása.

Most tekintsük azt az esetet, amikor a (8.17) képletben $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, azaz vizsgáljuk a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}) \tag{8.19}$$

alakú kvázi-Newton módszereket. Feltesszük tehát, hogy a függvény gradiensvektorát ki tudjuk számítani, és a kérdés az, hogyan közelítsük a függvény Hesse-mátrixát. Erre egy lehetőség a 2.13. szakaszban vizsgált Broyden-módszer alkalmazása az $f'(\mathbf{x}) = \mathbf{0}$ egyenletrendszer gyökének meghatározására:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{8.20}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{8.21}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{8.22}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{8.23}$$

**8.16. példa.** Alkalmazzuk a (8.20)–(8.23) képletekkel definiált Broyden-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(2, 2)^T$ pontból indítottuk a sorozatot, az $\mathbf{A}^{(0)}$ mátrix pedig az $f''(2, 2)$ Hesse-mátrix $h = 0.05$ lépésközű (8.18) másodrendű differencia képlettel számított közelítése volt. A kapott sorozat első 10 tagját a 8.7. táblázatban láthatjuk. $\quad\square$

---

*8.7. táblázat. Broyden-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

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

A (8.23) iterációs módszerrel az a probléma, hogy mivel $\mathbf{A}^{(k)}$ az $f''(\mathbf{p})$ Hesse-mátrix közelítése, így természetes megkövetelni, hogy $\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra. Ahhoz kell, hogy a (8.16) kvadratikus függvénynek legyen minimuma minden $k$-ra. A numerikus tapasztalat is azt támasztja alá, hogy azok a (8.19) alakú kvázi-Newton módszerek a leghatékonyabbak, ahol $\mathbf{A}^{(k)}$ pozitív definit közelítése a Hesse-mátrixnak. A Broyden-módszerrel generált $\mathbf{A}^{(k)}$ mátrixsorozat viszont pozitív definit mátrixból kiindulva még csak nem is szimmetrikus mátrixokat generál.

Az 5.6. tétel szerint ha egy $\mathbf{A}$ mátrix pozitív definit, akkor az $\mathbf{A} = \mathbf{L}\mathbf{L}^T$ Cholesky-felbontása létezik, ahol $\mathbf{L}$ nemszinguláris. Fordítva, ha az $\mathbf{A} = \mathbf{M}\mathbf{M}^T$ alakú, ahol $\mathbf{M}$ nemszinguláris, akkor $\mathbf{A}$ pozitív definit, hiszen $\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0$, és egyenlőség csak akkor van, ha $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, és ezért $\mathbf{x} = \mathbf{0}$.

Legyen $\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T$ alakú, ahol $\mathbf{M}^{(k)}$ invertálható (de nem feltétlenül alulról trianguláris). A következő Hesse-mátrix közelítést, $\mathbf{A}^{(k+1)}$-et az $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$ alakban keressük, ahol $\mathbf{A}^{(k+1)}$-től megköveteljük, hogy teljesítse az $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ szelő egyenleteket. A szelő egyenletből következik, hogy $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, ezért ha $\mathbf{A}^{(k+1)}$ pozitív definit, akkor az

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{8.24}$$

egyenlőtlenség teljesül. Megmutatjuk, hogy (8.24) teljesülése esetén a szelő egyenletnek van pozitív definit megoldása.

Vezessük be a $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$ jelölést. Ekkor a szelő egyenlet felírható a következőképpen:

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{8.25}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{8.26}$$

Az $\mathbf{M}^{(k+1)}$ mátrixot az $\mathbf{M}^{(k)}$ mátrixot módosítva szeretnénk előállítani, ezért a Broyden-módszer levezetését követve (8.26) alapján természetes $\mathbf{M}^{(k+1)}$-et az

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2} \tag{8.27}$$

alakban keresni. Ekkor $\mathbf{M}^{(k+1)}$ teljesíti a (8.26) egyenletet, és a legkevésbé tér el $\mathbf{M}^{(k)}$-tól abban az értelemben, hogy minden $\mathbf{z} \perp \mathbf{v}^{(k)}$-ra $\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z}$. $\mathbf{M}^{(k+1)}$-et visszahelyettesítve a (8.25) egyenletbe kapjuk, hogy

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

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{8.28}$$

Mivel a számláló pozitív, hiszen feltettük, hogy $\mathbf{A}^{(k)}$ pozitív definit, ezért $\alpha$ kifejezhető a (8.28) egyenletből, és

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Ezt visszahelyettesítve a (8.27) egyenletbe

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

Kis számolással ebből levezethető (2. feladat), hogy

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{8.29}$$

Hátra van még azt megmutatni, hogy az iteráció pozitív definit mátrixot generál. Mivel $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, ezért elegendő azt belátni, hogy $\mathbf{M}^{(k+1)}$ invertálható. A feltevés szerint $\mathbf{M}^{(k)}$ pozitív definit, és ezért invertálható. Ha feltesszük, hogy (8.24) teljesül, akkor $\mathbf{M}^{(k+1)}$ invertálhatóságát könnyen kapjuk a (8.27) képletből a 2.58. tételt alkalmazva. A részletek kidolgozását az olvasóra hagyjuk (3. feladat).

A (8.29) formulát Broyden, Flecher, Goldfarb és Shanno vezették le 1970-ben, ezért *BFGS-iterációnak* nevezzük. Ez a jelenleg ismert legjobb iterációs formula a Hesse-mátrix közelítésére. Az iteráció kezdeti mátrixának vagy $f''(\mathbf{p}^{(0)})$-t vagy ennek egy (8.18) másodrendű differencia közelítését célszerű használni. Ha $\mathbf{p}^{(0)}$ elegendően közel van $\mathbf{p}$-hez, és $f''(\mathbf{p})$ pozitív definit, akkor $f''(\mathbf{p}^{(0)})$, és ezért $\mathbf{A}^{(0)}$ is az lesz.

Végül vizsgáljuk meg, hogy a (8.24) feltétel milyen megszorítást jelent. A Lagrange-féle középértéktételt (2.40. tétel) és a (8.21), (8.22) egyenleteket alkalmazva kapjuk, hogy

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

ami pozitív, hiszen $f''(\mathbf{p})$ pozitív definit. Ez a feltétel tehát, ha a sorozat $\mathbf{p}$-hez tart, $\mathbf{p}$ közelében teljesülni fog. Természetesen ha (8.24) nem teljesül, akkor is definiálható a (8.29) iteráció, csak ekkor $\mathbf{A}^{(k+1)}$ pozitív szemidefinit lesz, nem pozitív definit.

Belátható a következő tétel.

**8.17. tétel.** *Legyen $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$, $f''(\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\varepsilon, \delta > 0$, hogy a (8.20)–(8.22), (8.29) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ és $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

---

*8.8. táblázat. A (8.19) kvázi-Newton módszer BFGS-iterációval*

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

**8.18. példa.** A BFGS-iterációval kaptuk a 8.8. táblázatban szereplő sorozatot az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. Ugyanabból a kezdőértékekből indítottuk a módszert, mint a 8.16. példában. $\quad\square$

Teljes indukcióval ellenőrizhető, hogy a BFGS-módszerrel képzett $\mathbf{A}^{(k)}$ mátrixok $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ inverzét a

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}
\end{aligned} \tag{8.30}$$

rekurzív képlettel is kiszámíthatjuk. Ezt az összefüggést használva a (8.20) egyenlet helyettesíthető az

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}) \tag{8.31}$$

egyenlettel, és így a módszer alkalmazásakor nincs szükség lineáris egyenletrendszer megoldására vagy mátrix invertálásra.

A BFGS-iteráció levezetéséhez hasonlóan kaphatjuk a DFP-iteráció képletét. Újra $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$ alakban keressük a módosított Hesse-közelítést, de a (8.25)–(8.26) szelő egyenletek helyett most az azzal ekvivalens

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}
\end{aligned}$$

egyenletekből indulunk ki. Ennek megoldását

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}$$

alakban keresve kapjuk, hogy

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

feltéve, hogy a (8.24) teljesül. Ebből a 2.58. tétel alkalmazásával kiszámítható, hogy

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{8.32}$$

Ezt a formulát *DFP-iterációnak* nevezzük felfedezői után: Davidon (1959) és Flecher, Powell (1963). Erre az iterációra is teljesül 8.17. tétellel analóg konvergencia eredmény.

Ellenőrizhető, hogy a DFP-iterációval generált $\mathbf{A}^{(k)}$ mátrix inverze kiszámítható a következő rekurzív módon:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{8.33}$$

**8.19. példa.** A DFP-iterációt vizsgáltuk a 8.16. és 8.18. példák feladatára. Ez a módszer is a BFGS-iterációhoz hasonlóan gyorsan konvergál. A sorozat a 8.9. táblázatban látható. $\quad\square$

---

*8.9. táblázat. A (8.19) kvázi-Newton módszer DFP-iterációval*

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

**Feladatok**

1. Alkalmazza az ebben a szakaszban bevezetett kvázi-Newton módszereket a 8.3. szakasz 1. feladatában felsorolt függvényekre!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Apply BFGS, DFP and PSB to the functions from the earlier sections. BFGS typically converges fastest: about 6–10 iterations for the 2D problems, with superlinear convergence, and it needs no explicit Hessian computation (the Hessian approximation is built from successive gradients via rank-2 updates). DFP and PSB also converge superlinearly but usually need a few more iterations on these problems.

   </details>

2. Ellenőrizze a (8.29) formula levezetését!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The BFGS update to verify is
   $$A^{(k+1)} = A^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T\mathbf{s}^{(k)}} - \frac{A^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T A^{(k)}}{(\mathbf{s}^{(k)})^T A^{(k)}\mathbf{s}^{(k)}}.$$
   Start from the factor update
   $$M^{(k+1)} = M^{(k)} + \alpha\frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T M^{(k)}}{(\mathbf{s}^{(k)})^T A^{(k)}\mathbf{s}^{(k)}} - \alpha\frac{A^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T M^{(k)}}{(\mathbf{s}^{(k)})^T A^{(k)}\mathbf{s}^{(k)}},$$
   with $\alpha = \sqrt{(\mathbf{s}^{(k)})^T A^{(k)}\mathbf{s}^{(k)} / (\mathbf{y}^{(k)})^T\mathbf{s}^{(k)}}$, and form $A^{(k+1)} = M^{(k+1)}(M^{(k+1)})^T$. Expanding and simplifying reproduces the BFGS update above.

   </details>

3. Igazolja, hogy $\mathbf{M}^{(k+1)}$ invertálható, ha (8.24) teljesül!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The condition is $(\mathbf{y}^{(k)})^T\mathbf{s}^{(k)} > 0$. The factor update has the rank-1 form
   $$M^{(k+1)} = M^{(k)} + \frac{(\mathbf{y}^{(k)} - M^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}.$$
   By the Sherman–Morrison formula $M^{(k+1)}$ is invertible iff
   $$1 + \frac{(\mathbf{v}^{(k)})^T (M^{(k)})^{-1}(\mathbf{y}^{(k)} - M^{(k)}\mathbf{v}^{(k)})}{\|\mathbf{v}^{(k)}\|_2^2} \neq 0,$$
   and simplifying this condition using $(\mathbf{y}^{(k)})^T\mathbf{s}^{(k)} > 0$ shows it holds. Hence $M^{(k+1)}$ is invertible. $\square$

   </details>

4. Igazolja a (8.30) rekurzív összefüggést!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Let $B^{(k)} = (A^{(k)})^{-1}$. Applying the Sherman–Morrison–Woodbury identity twice (once for each rank-1 update in the BFGS formula) to
   $$B^{(k+1)} = \left(A^{(k)} + \frac{\mathbf{y}\mathbf{y}^T}{\mathbf{y}^T\mathbf{s}} - \frac{A\mathbf{s}\mathbf{s}^T A}{\mathbf{s}^T A\mathbf{s}}\right)^{-1}$$
   gives, after algebra,
   $$B^{(k+1)} = B^{(k)} + \left(1 + \frac{(\mathbf{y}^{(k)})^T B^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}\right)\frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T B^{(k)} + B^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}.$$
   $\square$

   </details>

5. Dolgozza ki a DFP-iteráció levezetésének részleteit!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Update the inverse approximation directly with the ansatz $B^{(k+1)} = B^{(k)} + \Delta B$, requiring (1) the inverse secant equation $B^{(k+1)}\mathbf{y}^{(k)} = \mathbf{s}^{(k)}$, (2) $B^{(k+1)}$ symmetric, and (3) minimal change in a suitable norm. The unique solution is
   $$B^{(k+1)} = B^{(k)} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T\mathbf{y}^{(k)}} - \frac{B^{(k)}\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T B^{(k)}}{(\mathbf{y}^{(k)})^T B^{(k)}\mathbf{y}^{(k)}}.$$
   Inverting this gives $A^{(k+1)}$, i.e. the DFP update formula.

   </details>

6. Igazolja a (8.33) rekurzív összefüggést!

   <details class="reveal-solution"><summary>Megoldás</summary>

   This recursion is exactly the DFP update written for $B^{(k)} = (A^{(k)})^{-1}$:
   $$(A^{(k+1)})^{-1} = (A^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T\mathbf{y}^{(k)}} - \frac{(A^{(k)})^{-1}\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T(A^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T(A^{(k)})^{-1}\mathbf{y}^{(k)}}.$$
   Direct verification shows this $B^{(k+1)}$ satisfies $B^{(k+1)}\mathbf{y}^{(k)} = \mathbf{s}^{(k)}$, is symmetric whenever $B^{(k)}$ is, and is positive definite provided $(\mathbf{y}^{(k)})^T\mathbf{s}^{(k)} > 0$. $\square$

   </details>

---

