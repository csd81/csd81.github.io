## 7.1. Numerikus differenciálás

Ebben a szakaszban függvények deriváltjait közelítő képletek levezetésének két módszerét és az egyszerűbb közelítő képleteket ismertetjük. A derivált a függvény differenciahányadosának határértéke:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}.
$$

Így nyilvánvalóan ha $|h|$ kicsi, akkor a differenciahányados, $\dfrac{f(x_0 + h) - f(x_0)}{h}$ közel van a derivált értékéhez. A numerikus analízisben ennél többre van szükség: ismerni szeretnénk a közelítés hibáját. A következőkben kétféleképpen vezetjük le ugyanezt a közelítő képletet, de úgy, hogy közben a közelítés hibáját is megkapjuk.

Tegyük fel, hogy $f \in C^3(a, b)$, és $x_0 \in (a, b)$. Az első megközelítés alapötlete a következő: Helyettesítsük az $f$ függvényt $x_0$ egy környezetében valamilyen $L_n(x)$ Lagrange-féle közelítő polinommal. Használjuk $L'_n(x_0)$-t az $f'(x_0)$ érték közelítésére! Ezt a módszert Lagrange-módszernek nevezzük. Nézzük a legegyszerűbb esetet: Legyen $n = 1$, $x_1 = x_0 + h \in (a, b)$ (és $x_0 \neq x_1$), és tekintsük az $f$ függvény $x_0, x_1$ osztópontokhoz tartozó elsőfokú Lagrange-polinom közelítését:

$$
\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\
&= \frac{f(x_0)(x - x_0 - h)}{-h} + \frac{f(x_0 + h)(x - x_0)}{h} + \frac{f''(\xi(x))}{2}(x - x_0)(x - x_0 - h).
\end{aligned}
$$

Ezt differenciálva kapjuk:

$$
\begin{aligned}
f'(x) ={}& \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f''(\xi(x))}{2}\bigl(2(x - x_0) - h\bigr) \\
&+ \frac{d}{dx}\Bigl(f''(\xi(x))\Bigr)\frac{(x - x_0)(x - x_0 - h)}{2}.
\end{aligned}
\tag{7.1}
$$

A 6.8. tétel szerint $f''(\xi(x))$ differenciálható $x \neq x_0, x_0 + h$-ra, de a deriváltat nem tudjuk explicit módon kiszámolni. Viszont az $x \to x_0$ határértéket véve a (7.1) képletben kapjuk az

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi)
\tag{7.2}
$$

összefüggést, ahol $\xi \in \langle x_0, x_0 + h \rangle$. Azaz, ha az

$$
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0)}{h}
\tag{7.3}
$$

közelítést használjuk, a közelítés hibája $-\dfrac{h}{2}f''(\xi)$ alakban írható fel. A (7.3) képletet az $f$ függvény **jobb oldali elsőrendű differenciájának** nevezzük, ha $h > 0$, illetve **bal oldali elsőrendű differenciájának** nevezzük, ha $h < 0$ (mert ekkor az $x_0 + h$ pont az $x_0$-tól jobbra, ill. balra helyezkedik el). A (7.2) képlet mutatja, hogy a (7.3) közelítés hibája $h$-ban elsőrendű.

Ugyanezt az eredményt (de egy kicsit enyhébb feltételek mellett) levezethetjük a következőképpen is: Legyen $f \in C^2(a, b)$, és tekintsük az $f$ függvény elsőrendű $x_0$-körüli Taylor-közelítését:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(\xi(x))}{2}(x - x_0)^2.
$$

Behelyettesítve $x = x_0 + h$-t, következik, hogy

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(\xi)}{2}h^2,
$$

azaz

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
$$

ahol $\xi = \xi(x_0 + h)$.

**7.1. példa.** Tekintsük az $f(x) = e^{x^2 + x}$ függvényt. $f'(x) = e^{x^2 + x}(2x + 1)$, így $f'(0) = 1$. Számítsuk ki az $f'(0)$ egy közelítő értékét jobb oldali (pozitív $h$) és bal oldali (negatív $h$) elsőrendű differencia képletet ((7.3) képlet) használva! A 7.1. táblázatban feltüntettük a derivált közelítő értékeket és a fellépő hibát különböző $h$ értékekre. A numerikus eredmények igazolják, hogy ha egy nagyságrenddel csökkentjük a lépésközt, akkor a hiba egy nagyságrenddel csökken. $\quad\square$

**7.1. táblázat.** Elsőrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | jobb oldali | hiba | bal oldali | hiba |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

Az előbb említett két módszer magasabbrendű (azaz pontosabb) közelítő képletek levezetésére is használható. Tekintsük az $n$-edfokú Lagrange-polinom közelítést használó módszert: legyen $f \in C^{n+1}$, és tekintsük az

$$
f(x) = \sum_{k=0}^{n} f(x_k)l_k(x) + \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)
\tag{7.4}
$$

összefüggést, ahol $l_k(x)$ a (6.2) képlettel definiált $n$-edfokú Lagrange-féle alappolinom. Differenciálva (7.4)-et és az $x = x_i$ helyettesítést alkalmazva kis számolás után kapjuk

$$
f'(x_i) = \sum_{j=0}^{n} f(x_j)l'_j(x_i) + \frac{f^{(n+1)}(\xi(x_i))}{(n+1)!}\prod_{\substack{j=0 \\ j \neq i}}^{n}(x_i - x_j).
\tag{7.5}
$$

A (7.5) összefüggést ekvidisztáns alappontokra szokás felírni, azaz feltesszük, hogy $x_j = x_0 + jh$, ahol $h > 0$. A (7.5) képletet $n+1$ alappontot használó differencia képletnek nevezzük. Belátható, hogy a (7.5) képletben szereplő hibatag $h$-ban $n$-edrendű.

Tekintsük most az $n = 2$ esetet, azaz a három pontra illeszkedő formulákat. Tekintsük az $x_0, x_0 + h, x_0 + 2h$ osztópontokat. Ekkor

$$
\begin{aligned}
l_0(x) &= \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \frac{(x - x_1)(x - x_2)}{2h^2}, \\
l_1(x) &= \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \frac{(x - x_0)(x - x_2)}{-h^2}, \\
l_2(x) &= \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \frac{(x - x_0)(x - x_1)}{2h^2},
\end{aligned}
$$

ezért

$$
\begin{aligned}
l'_0(x) &= \frac{2x - x_1 - x_2}{2h^2}, \\
l'_1(x) &= \frac{2x - x_0 - x_2}{-h^2}, \\
l'_2(x) &= \frac{2x - x_0 - x_1}{2h^2}.
\end{aligned}
$$

Ezt alkalmazva $x = x_0$, $x = x_0 + h$ ill. $x = x_0 + 2h$-ra, a (7.5) képletből kapjuk, hogy

$$
f'(x_0) = \frac{1}{h}\left(-\frac{3}{2}f(x_0) + 2f(x_0 + h) - \frac{1}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_0),
\tag{7.6}
$$

$$
f'(x_0 + h) = \frac{1}{h}\left(-\frac{1}{2}f(x_0) + \frac{1}{2}f(x_0 + 2h)\right) - \frac{h^2}{6}f'''(\xi_1),
\tag{7.7}
$$

$$
f'(x_0 + 2h) = \frac{1}{h}\left(\frac{1}{2}f(x_0) - 2f(x_0 + h) + \frac{3}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_2).
\tag{7.8}
$$

Az $x_0 \leftarrow x_0 - 2h$ és $h \leftarrow -h$ helyettesítéssel a (7.8) a (7.6) alakban írható fel, (7.7) pedig az $x_0 \leftarrow x_0 - h$ és $h \leftarrow -h$ helyettesítéssel

$$
f'(x_0) = \frac{1}{h}\left(-\frac{1}{2}f(x_0 - h) + \frac{1}{2}f(x_0 + h)\right) - \frac{h^2}{6}f'''(\xi_1)
\tag{7.9}
$$

alakú lesz. A (7.9) képlet egy **centrális másodrendű differencia képlet**, (7.6) pedig **jobb oldali** ill. **bal oldali másodrendű differencia**, attól függően, hogy $h$ pozitív vagy negatív.

**7.2. példa.** Az $f(x) = e^{x^2 + x}$ függvény $x = 0$ pontjában vett deriváltját közelítettük jobb oldali, bal oldali és centrális másodrendű differencia képletekkel ((7.6) és (7.9) képletek). Az eredményeket a 7.2. táblázatban adtuk meg különböző $h$-ra, amelyekből látható, hogy a képletek másodrendű hibával rendelkeznek. $\quad\square$

**7.2. táblázat.** Másodrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Bizonyítás nélkül közöljük az 5 pontra felírt egyoldali és centrális negyedrendű képleteket:

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\
&- 3f(x_0 + 4h)\Bigr) + \frac{h^4}{5}f^{(5)}(\xi_0),
\end{aligned}
\tag{7.10}
$$

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\Bigr) \\
&+ \frac{h^4}{30}f^{(5)}(\xi_1).
\end{aligned}
\tag{7.11}
$$

A (7.10) egyoldali, (7.11) pedig centrális differencia képlet.

**7.3. példa.** Alkalmazzuk a (7.10) és (7.11) képleteket az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban! A 7.3. táblázatban láthatók a numerikus eredmények. $\quad\square$

**7.3. táblázat.** Negyedrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Magasabbrendű deriváltak közelítésére a Lagrange-módszernél kényelmesebben használható a Taylor-módszer. Legyen $f \in C^4$, és tekintsük az $f$ függvény $x_0$ körüli harmadrendű Taylor-képletét:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \frac{f'''(x_0)}{6}(x - x_0)^3 + \frac{f^{(4)}(\xi)}{24}(x - x_0)^4.
$$

Ha ebbe $x = x_0 - h$-t és $x = x_0 + h$-t helyettesítünk, akkor az

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \frac{f''(x_0)}{2}h^2 - \frac{f'''(x_0)}{6}h^3 + \frac{f^{(4)}(\xi_1)}{24}h^4
$$

és

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(x_0)}{2}h^2 + \frac{f'''(x_0)}{6}h^3 + \frac{f^{(4)}(\xi_2)}{24}h^4
$$

összefüggéseket kapjuk. Ezt a két egyenletet összeadva

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^4
$$

adódik, amiből

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^2.
$$

Ebből látszik, hogy az

$$
f''(x_0) \approx \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
$$

közelítő képlet $h^2$ nagyságrendű hibával rendelkezik. Az $\dfrac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{24}h^2$ hibatagot egyszerűbb alakra hozhatjuk. A feltételek szerint $f^{(4)}$ folytonos, ezért a 2.2. tétel szerint valamely $\xi_1$ és $\xi_2$ közötti $\xi$ pontban

$$
f^{(4)}(\xi) = \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{2}.
$$

Ezért

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2.
\tag{7.12}
$$

**7.4. példa.** Számítsuk ki az $f(x) = e^{x^2 + x}$ függvény második deriváltjának közelítő értékét $x = 0$-ban! A 7.4. táblázatban láthatók a numerikus eredmények. $\quad\square$

**7.4. táblázat.** Másodrendű derivált közelítése, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | közelítés | hiba |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

A numerikus differenciálás egy instabil feladat. Ennek igazolására tekintsünk egy $f(x)$ függvényt és annak egy

$$
g(x) = f(x) + \frac{1}{n}\sin(n^2 x)
$$

perturbációját. Ha $f$ helyett a $g$ függvény numerikus deriváltját számoljuk ki, akkor a differencia képletekben használt függvényértékek nagy $n$ esetén csak kicsit változnak, a derivált értéke viszont jelentősen megváltozik, hiszen $g'(x) = f'(x) + n\cos(n^2 x)$.

Vizsgáljuk most a kerekítési hiba hatását a numerikus differenciálási képletekre. Tekintsük pl. a legegyszerűbb numerikus differenciálási képletet, a (7.2) formulát. Ebben $f(x_0)$ és $f(x_0 + h)$ pontos értékei helyett $f_0$ ill. $f_1$ közelítő értékekkel számolunk, ahol

$$
f(x_0) = f_0 + e_0 \quad\text{és}\quad f(x_0 + h) = f_1 + e_1.
$$

Ekkor

$$
f'(x_0) \approx \frac{f_1 - f_0}{h},
$$

és az elkövetett hiba

$$
\begin{aligned}
f'(x_0) - \frac{f_1 - f_0}{h} &= f'(x_0) - \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f(x_0 + h) - f(x_0)}{h} - \frac{f_1 - f_0}{h} \\
&= -\frac{h}{2}f''(\xi) + \frac{e_1 - e_0}{h}.
\end{aligned}
\tag{7.13}
$$

A (7.13) összefüggésből látszik, hogy a tényleges hiba két részből adódik. Az egyik a képlethiba, a másik pedig a kerekítési hiba. Ha a lépésköz kicsi, akkor a képlethiba kicsi lesz, viszont a kerekítési hiba tart a végtelenbe, ha $h \to 0$.

**7.5. példa.** Tekintsük az $f(x) = e^x$ függvényt. Számítsuk ki $f'(1)$ közelítését elsőrendű jobb oldali differencia képlettel. Hogy a kerekítési hibák hatását vizsgáljuk, a számításokat 6- illetve 4-jegyű aritmetikát használva végeztük el. A 7.5. táblázatból látható, hogy 4-jegyű aritmetika használata esetén a lépéshossz 0.01-ről 0.001-re csökkentésekor az elkövetett hiba növekszik. $\quad\square$

**7.5. táblázat.** Kerekítési hibák hatása, $f(x) = e^x$, $x_0 = 1$

| | 6-jegyű aritmetikával | | 4-jegyű aritmetikával | |
|---|---|---|---|---|
| $h$ | differencia | hiba | differencia | hiba |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

Az itt megismert módszereket könnyen átfogalmazhatjuk többváltozós függvények parciális deriváltjai közelítésére. A következő egyoldali ill. centrális közelítő képletek levezetését az olvasóra hagyjuk.

$$
\frac{\partial f(x_0, y_0)}{\partial x} \approx \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\tag{7.14}
$$

$$
\frac{\partial f(x_0, y_0)}{\partial y} \approx \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\tag{7.15}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\tag{7.16}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial y^2} \approx \frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\tag{7.17}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x\,\partial y} \approx \frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\tag{7.18}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\tag{7.19}
$$

### Feladatok

1. Számítsa ki $f'(x_0)$ közelítő értékét elsőrendű jobb és bal oldali differencia képletek segítségével a $h = 0.1$ és $0.01$ lépésközt használva, ha
   - (a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
   - (b) $f(x) = e^x \sin x$, $x_0 = 0$,
   - (c) $f(x) = \cos x^2$, $x_0 = 1$,
   - (d) $f(x) = x \ln x$, $x_0 = 1$.

2. Ismételje meg az előző feladatot másodrendű differencia képleteket használva!

3. Számítsa ki $f''(x_0)$ közelítő értékét az 1. feladatban felsorolt függvényekre!

4. Vezesse le a (7.6) és (7.9) közelítő képleteket Taylor-módszerrel!

5. Vezesse le a (7.10) és (7.11) közelítő képleteket!

6. Vezesse le a következő közelítő képleteket:
$$
f'''(x_0) \approx \frac{1}{2h^3}\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\Bigr),
$$
$$
f^{(4)}(x_0) \approx \frac{1}{h^4}\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\Bigr)
$$

7. Vezesse le a (7.14)–(7.19) közelítéseket
   - (a) egyváltozós függvényekre vonatkozó közelítő deriválási képletek,
   - (b) kétváltozós Lagrange-módszer,
   - (c) kétváltozós Taylor-módszer

   segítségével! Határozza meg a képlethiba rendjét!
