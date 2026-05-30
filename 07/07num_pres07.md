# Numerikus analízis

## 7. Numerikus differenciálás és integrálás

**Ferenc Hartung**
Pannon Egyetem — Matematika Tanszék
2026

---

# 7.1. Numerikus differenciálás

---

A derivált a függvény differenciahányadosának határértéke:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}.
$$

Így nyilvánvalóan ha $|h|$ kicsi, akkor a differenciahányados,

$$
\frac{f(x_0 + h) - f(x_0)}{h}
$$

közel van a derivált értékéhez. Ismerni szeretnénk a közelítés hibáját.

---

**Lagrange-módszer**

Helyettesítsük az $f$ függvényt $x_0$ egy környezetében valamilyen $L_n(x)$ Lagrange-féle közelítő polinommal. Használjuk az alábbi közelítést:

$$
f'(x_0) \approx L'_n(x_0)
$$

---

Legyen $f \in C^3[a, b]$, $x_0 \in (a, b)$, $n = 1$, $x_1 = x_0 + h \in (a, b)$ (és $x_0 \neq x_1$), és tekintsük az $f$ függvény $x_0, x_1$ osztópontokhoz tartozó elsőfokú Lagrange-polinom közelítését:

$$
\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\
&= \frac{f(x_0)(x - x_0 - h)}{-h} + \frac{f(x_0 + h)(x - x_0)}{h} + \frac{f''(\xi(x))}{2}(x - x_0)(x - x_0 - h).
\end{aligned}
$$

Ezt differenciálva kapjuk:

$$
f'(x) = \frac{f(x_0 + h) - f(x_0)}{h} + \frac{f''(\xi(x))}{2}\bigl(2(x - x_0) - h\bigr) + \frac{d}{dx}f''(\xi(x))\,\frac{(x - x_0)(x - x_0 - h)}{2}.
\tag{1}
$$

---

Az (1) egyenletbe az $x = x_0$ helyettesítéssel kapjuk

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
\tag{2}
$$

ahol $\xi \in \langle x_0, x_0 + h \rangle$. Azaz a

$$
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0)}{h}
\tag{3}
$$

közelítés képlethibája $-\dfrac{h}{2}f''(\xi)$. A (3) képletet az $f$ függvény **jobb oldali elsőrendű differenciájának** nevezzük, ha $h > 0$, illetve **bal oldali elsőrendű differenciájának** nevezzük, ha $h < 0$. A (2) képlet mutatja, hogy a (3) közelítés hibája $h$-ban elsőrendű.

> bal oldali elsőrendű differencia: $h < 0$ — jobb oldali elsőrendű differencia: $h > 0$

---

**Taylor-módszer**

Legyen $f \in C^2(a, b)$, és tekintsük az $f$ függvény elsőrendű $x_0$-körüli Taylor-közelítését:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(\xi(x))}{2}(x - x_0)^2.
$$

Behelyettesítve $x = x_0 + h$-t, következik, hogy

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(\xi)}{2}h^2,
$$

így

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{h}{2}f''(\xi),
$$

ahol $\xi = \xi(x_0 + h)$.

---

**Példa**

Tekintsük az $f(x) = e^{x^2 + x}$ függvényt. $f'(x) = e^{x^2 + x}(2x + 1)$, így $f'(0) = 1$. Számítsuk ki az $f'(0)$ egy közelítő értékét jobb oldali (pozitív $h$) és bal oldali (negatív $h$) elsőrendű differencia képletet használva!

$$
\begin{aligned}
h = 0.1\text{-re:} \quad f'(0) &\approx \frac{f(0.1) - f(0)}{0.1} = \frac{1.116278070 - 1}{0.1} = 1.162780700 \\
h = -0.1\text{-re:} \quad f'(0) &\approx \frac{f(-0.1) - f(0)}{-0.1} = \frac{0.9139311853 - 1}{-0.1} = 0.8606881470
\end{aligned}
$$

Elsőrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | jobb oldali | hiba | bal oldali | hiba |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

---

Legyen $f \in C^{n+1}$, és tekintsük az

$$
f(x) = \sum_{k=0}^{n} f(x_k)l_k(x) + \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)
\tag{4}
$$

összefüggést, ahol $l_k(x)$ az $n$-edfokú Lagrange-féle alappolinom. Differenciálva (4)-et és az $x = x_i$ helyettesítést alkalmazva kis számolás után kapjuk

$$
f'(x_i) = \sum_{j=0}^{n} f(x_j)l'_j(x_i) + \frac{f^{(n+1)}(\xi(x_i))}{(n+1)!}\prod_{\substack{j=0 \\ j \neq i}}^{n}(x_i - x_j).
\tag{5}
$$

Az (5) összefüggést ekvidisztáns alappontokra szokás felírni, azaz feltesszük, hogy $x_j = x_0 + jh$, ahol $h > 0$. Az (5) képletet $n + 1$ alappontot használó differencia képletnek nevezzük.

---

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
l'_0(x) = \frac{2x - x_1 - x_2}{2h^2}, \qquad l'_1(x) = \frac{2x - x_0 - x_2}{-h^2}, \qquad l'_2(x) = \frac{2x - x_0 - x_1}{2h^2}.
$$

Ezt alkalmazva $x = x_0$, $x = x_0 + h$ ill. $x = x_0 + 2h$-ra, az (5) képletből kapjuk, hogy

---

$$
f'(x_0) = \frac{1}{h}\left(-\frac{3}{2}f(x_0) + 2f(x_0 + h) - \frac{1}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_0),
\tag{6}
$$

$$
f'(x_0 + h) = \frac{1}{h}\left(-\frac{1}{2}f(x_0) + \frac{1}{2}f(x_0 + 2h)\right) - \frac{h^2}{6}f'''(\xi_1),
\tag{7}
$$

$$
f'(x_0 + 2h) = \frac{1}{h}\left(\frac{1}{2}f(x_0) - 2f(x_0 + h) + \frac{3}{2}f(x_0 + 2h)\right) + \frac{h^2}{3}f'''(\xi_2).
\tag{8}
$$

Az $x_0 \leftarrow x_0 - 2h$ és $h \leftarrow -h$ helyettesítéssel a (8) a (6) alakban írható fel. (6) képlet jobb oldali ill. bal oldali másodrendű differencia képlet, attól függően, hogy $h$ pozitív vagy negatív.

---

A (7) összefüggés az $x_0 \leftarrow x_0 - h$ helyettesítéssel

$$
f'(x_0) = \frac{1}{h}\left(-\frac{1}{2}f(x_0 - h) + \frac{1}{2}f(x_0 + h)\right) - \frac{h^2}{6}f'''(\xi_1)
\tag{9}
$$

alakú lesz. A (9) képlet egy **centrális másodrendű differencia képlet**.

---

**Példa**

Az $f(x) = e^{x^2 + x}$ függvény $x = 0$ pontjában vett deriváltját közelítettük jobb oldali, bal oldali és centrális másodrendű differencia képletekkel ((6) és (9) képletek). A centrális másodrendű differencia $h = 0.1$-re:

$$
f'(0) \approx \frac{f(x_0 + h) - f(x_0 - h)}{2h} = \frac{1.1162781 - 0.9139312}{2 \cdot 0.1} = 1.0117344
$$

Másodrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

---

Bizonyítás nélkül közöljük az 5 pontra felírt egyoldali és centrális negyedrendű képleteket:

$$
\begin{aligned}
f'(x_0) ={}& \frac{1}{12h}\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) - 3f(x_0 + 4h)\Bigr) \\
&+ \frac{h^4}{5}f^{(5)}(\xi_0),
\end{aligned}
\tag{10}
$$

$$
f'(x_0) = \frac{1}{12h}\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\Bigr) + \frac{h^4}{30}f^{(5)}(\xi_1).
\tag{11}
$$

A (10) egyoldali, (11) pedig centrális differencia képlet.

---

**Példa**

Alkalmazzuk a (10) és (11) képleteket az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban!

Negyedrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\lvert h\rvert$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

---

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

---

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

közelítő képlet $h^2$ nagyságrendű hibával rendelkezik. A feltételek szerint $f^{(4)}$ folytonos, ezért valamely $\xi_1$ és $\xi_2$ közötti $\xi$ pontban

$$
f^{(4)}(\xi) = \frac{f^{(4)}(\xi_1) + f^{(4)}(\xi_2)}{2}.
$$

Ezért

$$
f''(x_0) = \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2.
\tag{12}
$$

---

**Példa**

Számítsuk ki az $f(x) = e^{x^2 + x}$ függvény második deriváltjának közelítő értékét $x_0 = 0$-ban! A pontos érték $f''(0) = 3$. $h = 0.1$-ra a (12) képlettel kapjuk

$$
f''(0) \approx \frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} = \frac{0.9139312 - 2 \cdot 1 + 1.1162781}{0.1^2} = 3.0209256
$$

Másodrendű derivált közelítése, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | közelítés | hiba |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

---

A numerikus differenciálás egy instabil feladat. Ennek igazolására tekintsünk egy $f(x)$ függvényt és annak egy

$$
g(x) = f(x) + \frac{1}{n}\sin(n^2 x)
$$

perturbációját. Ekkor

$$
|g(x) - f(x)| = \left|\frac{1}{n}\sin(n^2 x)\right| \leq \frac{1}{n}, \qquad x \in \mathbb{R}.
$$

A derivált értéke viszont jelentősen megváltozik, hiszen

$$
g'(x) = f'(x) + n\cos(n^2 x)
$$

így

$$
|g'(0) - f'(0)| = n.
$$

---

Vizsgáljuk most a kerekítési hiba hatását az elsőrendű differencia formulára. Ebben $f(x_0)$ és $f(x_0 + h)$ pontos értékei helyett $f_0$ ill. $f_1$ közelítő értékekkel számolunk, ahol

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
$$

Az összefüggésből látszik, hogy a tényleges hiba két részből adódik. Az egyik a képlethiba, a másik pedig a kerekítési hiba. Ha a lépésköz kicsi, akkor a képlethiba kicsi lesz, viszont a kerekítési hiba tart a végtelenbe, ha $h \to 0$.

---

**Példa**

Tekintsük az $f(x) = e^x$ függvényt. Számítsuk ki $f'(1)$ közelítését elsőrendű jobb oldali differencia képlettel. Hogy a kerekítési hibák hatását vizsgáljuk, a számításokat 6- illetve 4-jegyű aritmetikát használva végeztük el.

Kerekítési hibák hatása, $f(x) = e^x$, $x_0 = 1$

| | 6-jegyű aritmetika | | 4-jegyű aritmetika | |
|---|---|---|---|---|
| $h$ | közelítés | hiba | közelítés | hiba |
| 0.100 | 2.85890 | 0.1406181 | 2.860 | 0.1417181 |
| 0.010 | 2.73200 | 0.0137181 | 2.800 | 0.0817181 |
| 0.001 | 2.72000 | 0.0017181 | 3.000 | 0.2817181 |

---

Parciális deriváltak közelítése:

$$
\frac{\partial f(x_0, y_0)}{\partial x} \approx \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}
$$

$$
\frac{\partial f(x_0, y_0)}{\partial y} \approx \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial y^2} \approx \frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x\,\partial y} \approx \frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
$$

$$
\frac{\partial^2 f(x_0, y_0)}{\partial x^2} \approx \frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
$$

---

# 7.2. Richardson-extrapoláció

---

Tegyük fel, hogy adott egy $M$ mennyiség, amelynek ismerjük egy $K(h)$ közelítését, ahol $h$ a közelítő módszer paramétere (lépésköze), és ismerjük a közelítés képlethibáját is. Feltesszük, hogy a hiba speciális alakú, $h$-szerint páros hatványú véges (vagy végtelen) hatványsorba fejthető:

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + a_{2m} h^{2m} + b(h),
$$

ahol $|b(h)| \leq B h^{2m+2}$ valamely $B > 0$ konstanssal. Ez a hiba $h$-ban másodrendű. Írjuk fel $h/2$-re az előző közelítő képletet és a hozzá tartozó hibát:

$$
M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m}} + b(h/2).
$$

Ekkor

$$
4M = 4K(h/2) + a_2 h^2 + a_4 \frac{h^4}{4} + a_6 \frac{h^6}{16} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m-2}} + 4b(h/2).
$$

Így

$$
M = \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 - \cdots - \frac{2^{2m-2} - 1}{2^{2m-2}\cdot 3}a_{2m}h^{2m} + \frac{4b(h/2) - b(h)}{3}.
$$

---

Ezt az összefüggést felírhatjuk a következő alakban:

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
$$

ahol

$$
K^{(1)} := \frac{4K(h/2) - K(h)}{3}, \qquad b^{(1)}(h) := \frac{4b(h/2) - b(h)}{3}, \qquad a_{2i}^{(1)} := \frac{1 - 4^{i-1}}{4^{i-1}\cdot 3}a_{2i},
$$

$i = 2, \ldots, m$. A $K^{(1)}(h)$ formula az $M$ értéket $h$-ban negyedrendű hibával közelíti. Ekkor

$$
M = K^{(1)}(h/2) + a_4^{(1)}\frac{h^4}{16} + a_6^{(1)}\frac{h^6}{2^6} + \cdots + a_{2m}^{(1)}\frac{h^{2m}}{2^{2m}} + b^{(1)}(h/2).
$$

---

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
$$

ahol

$$
K^{(2)} := \frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \qquad b^{(2)}(h) := \frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} := \frac{1 - 4^{i-2}}{4^{i-2}\cdot 15}a_{2i}^{(1)}, \qquad i = 3, \ldots, m.
$$

A $K^{(2)}(h)$ kifejezés $M$ értékét $h$-ban hatodrendű hibával közelíti. Ez folytatható az alábbi módon:

$$
K^{(i+1)} := K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1,
$$

ahol $K^{(0)}(h) := K(h)$. Az ebben a szakaszban leírt módszert egy közelítő képlet pontosságának növelésére **Richardson-extrapolációnak** nevezzük.

---

**Példa**

Az előző szakaszban láttuk, hogy a (9) centrális differencia másodrendű hibával rendelkezik. Tegyük fel, hogy $f \in C^{2m+3}$, és induljunk ki a következő Taylor-képletből:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \frac{f^{(2m+3)}(\xi_1)}{(2m+3)!}h^{2m+3}.
$$

Ekkor

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} - \frac{f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+3}.
$$

Az előző képletet $h$ helyett $-h$-ra felírva és a két egyenletet kivonva, majd $f'(x_0)$-at kifejezve kapjuk:

$$
\begin{aligned}
f'(x_0) ={}& \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(x_0)}{3!}h^2 - \frac{f^{(5)}(x_0)}{5!}h^4 \\
&- \cdots - \frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \frac{f^{(2m+3)}(\xi_1) + f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+2}.
\end{aligned}
$$

Azaz a centrális differencia képlete teljesíti a Richardson extrapoláció feltételét.

---

**Példa folyt.**

Az $f'(x_0)$ becslésére negyedrendű közelítő képlet ad például a

$$
\begin{aligned}
K^{(1)}(h) &= \frac{4\,\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\
&= \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\end{aligned}
$$

képlet.

---

# 7.3. Newton–Cotes-formulák

---

Legyen $f \in C(a, b)$, $a = x_0 < x_1 < \cdots < x_n = b$ az $[a, b]$ intervallum egy beosztása, és $\xi_i \in [x_{i-1}, x_i]$ minden $1 \leq i \leq n$-re. Ekkor

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} f(\xi_i)(x_i - x_{i-1}),
$$

ha a beosztás normája, azaz $\max\{x_i - x_{i-1} : i = 1, \ldots, n\}$ kicsi. Egy ilyen Riemann-összeg például

$$
\int_a^b f(x)\,dx \approx \frac{b - a}{n}\left(f\left(\frac{x_0 + x_1}{2}\right) + f\left(\frac{x_1 + x_2}{2}\right) + \cdots + f\left(\frac{x_{n-1} + x_n}{2}\right)\right),
$$

ahol $x_i = a + i(b - a)/n$, $i = 0, 1, \ldots, n$. Ez az ú.n. **érintőformula**.

---

**Lagrange-módszer:** Az $[a, b]$ intervallumon vegyünk (többnyire ekvidisztáns) osztópontokat és legyen:

$$
L_n(x) = \sum_{k=0}^{n} f(x_k)l_k(x)
$$

ahol $l_k(x)$ a Lagrange-féle $n$-edfokú alappolinom.

$$
\int_a^b f(x)\,dx \approx \int_a^b L_n(x)\,dx = \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx.
$$

Tegyük fel, hogy $f \in C^{n+1}[a, b]$. Ekkor

$$
\int_a^b f(x)\,dx = \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx + \int_a^b \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)\,dx.
\tag{13}
$$

---

Ezzel egy

$$
\int_a^b f(x)\,dx \approx \sum_{k=0}^{n} c_k f(x_k)
\tag{14}
$$

alakú integrál közelítő képletet kaptunk, ahol a $c_k$ súlyokat a

$$
c_k = \int_a^b l_k(x)\,dx
\tag{15}
$$

integrálok adják. A (14) alakú közelítő képleteket **kvadratúra képleteknek** nevezzük, azokat a kvadratúra képleteket pedig, ahol a $c_k$ súlyokat a (15) integrálok adják, **Newton–Cotes-formuláknak** hívjuk. Ha az alappontokhoz az $a$ és $b$ pontok is hozzá tartoznak, akkor a (14)–(15) képletet **zárt Newton–Cotes-formuláknak**, ha az összes alappont az $(a, b)$ nyílt intervallumból van, akkor **nyílt Newton–Cotes-formuláknak** nevezzük.

---

Vizsgáljuk meg $n = 1$-re a zárt Newton–Cotes-képletet. Legyen $x_0 = a$, $x_1 = b$ és $h = b - a$. Ekkor

$$
L_1(x) = f(x_0)\frac{x - x_1}{x_0 - x_1} + f(x_1)\frac{x - x_0}{x_1 - x_0} = -f(x_0)\frac{x - x_1}{h} + f(x_1)\frac{x - x_0}{h},
$$

így

$$
\begin{aligned}
\int_{x_0}^{x_1} L_1(x)\,dx &= -\frac{f(x_0)}{h}\int_{x_0}^{x_1}(x - x_1)\,dx + \frac{f(x_1)}{h}\int_{x_0}^{x_1}(x - x_0)\,dx \\
&= -\frac{f(x_0)}{h}\left[\frac{(x - x_1)^2}{2}\right]_{x_0}^{x_1} + \frac{f(x_1)}{h}\left[\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr).
\end{aligned}
$$

---

**Tétel (középértéktétel integrálokra)**

Legyen $f : [a, b] \to \mathbb{R}$ folytonos függvény, $g : [a, b] \to \mathbb{R}$ integrálható függvény amely nem vált előjelet $[a, b]$-n (azaz $g(x) \geq 0$ vagy $g(x) \leq 0$ teljesül minden $x \in [a, b]$-re). Ekkor létezik egy olyan $\xi \in (a, b)$ szám, hogy

$$
\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx.
$$

A hiba

$$
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) = \int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx.
$$

A hibatag átalakításához használjuk, hogy $(x - x_0)(x - x_1) < 0$, ha $x \in (x_0, x_1)$, ezért alkalmazható a középértéktétel.

---

Létezik tehát olyan $\eta \in (x_0, x_1)$ konstans, hogy

$$
\int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx = \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)(x - x_0 - h)\,dx.
$$

Ekkor

$$
\begin{aligned}
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) &= \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\,dx \\
&= \frac{f''(\eta)}{2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= -\frac{h^3}{12}f''(\eta).
\end{aligned}
$$

---

Kaptuk tehát az ún. **elemi trapézformulát**:

$$
\int_a^b f(x)\,dx = \frac{h}{2}\bigl(f(a) + f(b)\bigr) - \frac{h^3}{12}f''(\xi), \qquad \xi \in (a, b).
$$

---

Ha az intervallum hossza nem kicsi, akkor osszuk fel az $[a, b]$ intervallumot $n$ egyenlő hosszú részintervallumra az $x_i$ ($i = 0, 1, \ldots, n$) osztópontokkal, ahol $x_i = a + ih$, $h = (b - a)/n$, és minden részintervallumra alkalmazzuk az elemi trapézformulát:

$$
\begin{aligned}
\int_a^b f(x)\,dx &= \sum_{i=1}^{n}\int_{x_{i-1}}^{x_i} f(x)\,dx \\
&= \sum_{i=1}^{n}\frac{h}{2}\bigl(f(x_{i-1}) + f(x_i)\bigr) - \frac{h^3}{12}\sum_{i=1}^{n} f''(\xi_i) \\
&= \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{nh^3}{12}\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i).
\end{aligned}
$$

Feltéve, hogy $f \in C^2(a, b)$, az $\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i)$ átlagérték helyettesíthető egy $f''(\xi)$ alakú függvényértékkel.

---

Ezért, használva még a $hn = b - a$ összefüggést,

$$
\int_a^b f(x)\,dx = \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{(b - a)h^2}{12}f''(\xi), \qquad \xi \in (a, b).
$$

Ezt a képletet **összetett trapézformulának** nevezzük.

---

**Példa**

Számítsuk ki az $\int_0^1 x^2 e^x\,dx$ integrál közelítő értékét a trapézformulával $h = 1$ (elemi trapézformula), $h = 0.5$ és $h = 0.25$ lépésközt használva! A pontos integrál $\int_0^1 x^2 e^x\,dx = e - 2 = 0.7182818$. Az első esetben

$$
\int_0^1 x^2 e^x\,dx \approx \frac{1}{2}(0 + e) = 1.3591409.
$$

A hiba ekkor $0.6408591$. Ha $h = 0.5$-re alkalmazzuk az összetett trapézformulát, akkor

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{2}(0 + 2 \cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Ennek hibája $0.1673788$. Végül $h = 0.25$-re

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{2}(0 + 2 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 2 \cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

aminek a hibája $0.0423145$.

---

Számítsuk most ki a (13) képletet $n = 2$-re, ekvidisztáns osztópontokat használva, azaz $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\begin{aligned}
\int_{x_0}^{x_2} L_2(x)\,dx ={}& f(x_0)\int_{x_0}^{x_2} \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\,dx + f(x_1)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\,dx \\
&+ f(x_2)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\,dx \\
={}& \frac{f(x_0)}{2h^2}\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\,dx - \frac{f(x_1)}{h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\,dx \\
&+ \frac{f(x_2)}{2h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\,dx \\
={}& \frac{f(x_0)}{2h^2}\left[\frac{(x - x_2)^3}{3} + h\frac{(x - x_2)^2}{2}\right]_{x_0}^{x_2} - \frac{f(x_1)}{h^2}\left[\frac{(x - x_0)^3}{3} - 2h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
&+ \frac{f(x_2)}{2h^2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
={}& \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr).
\end{aligned}
$$

---

A közelítés képlethibája

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx.
$$

Az $(x - x_0)(x - x_1)(x - x_2)$ szorzat különböző előjelű az $(x_0, x_1)$ és az $(x_1, x_2)$ intervallumokon, tehát nem alkalmazható a középértéktétel az $(x_0, x_2)$ intervallumon. Másképp járunk tehát el. Legyen

$$
\begin{aligned}
p(x) &:= \int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\,dt \\
&= \int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\,dt \\
&= \left[\frac{(t - x_1)^4}{4} - h^2\frac{(t - x_1)^2}{2}\right]_{x_0}^{x} \\
&= \frac{(x - x_1)^4}{4} - \frac{h^2(x - x_1)^2}{2} + \frac{h^4}{4} = \frac{1}{4}\bigl((x - x_1)^2 - h^2\bigr)^2.
\end{aligned}
$$

---

Ekkor $p(x_0) = p(x_2) = 0$, így parciális integrálással

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\int_{x_0}^{x_2} \frac{d}{dx}\frac{f'''(\xi(x))}{6}\,p(x)\,dx.
$$

$p$ nemnegatív függvény, ezért kapjuk, hogy

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\frac{f^{(4)}(\eta)}{24}\int_{x_0}^{x_2} p(x)\,dx = -\frac{h^5}{90}f^{(4)}(\eta).
$$

---

Beláttuk tehát az

$$
\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr) - \frac{h^5}{90}f^{(4)}(\eta), \qquad \eta \in (x_0, x_2)
\tag{16}
$$

képletet, az ún. **elemi Simpson-formulát**.

---

A hibatag képlete mutatja, hogy a Simpson-formula meglepő módon harmadrendű polinomokra is az integrál pontos értékét adja vissza, mivel ekkor $f^{(4)}$ azonosan nulla. Másrészt a várt negyedrendű hiba helyett a képlet eggyel jobb, ötödrendű hibával rendelkezik. Ez a jobb hibarend megmutatható minden páros $n$-re felírt Newton–Cotes-képletnél.

Az összetett trapézformulához hasonlóan vezethető le az **összetett Simpson-formula**: Páros sok egyenlő részre, $2n$ részre osztjuk az $[a, b]$ intervallumot, azaz $h = (b - a)/2n$. Ekkor

$$
\int_a^b f(x)\,dx = \frac{h}{3}\left(f(x_0) + 4\sum_{i=1}^{n} f(x_{2i-1}) + 2\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\right) - \frac{(b - a)h^4}{180}f^{(4)}(\xi), \qquad \xi \in (a, b).
$$

---

**Példa**

Számítsuk ki az $\int_0^1 x^2 e^x\,dx$ integrál közelítő értékét a Simpson-formulával $h = 0.5$ (elemi Simpson-formula), $h = 0.25$ és $h = 0.125$ lépésközt használva! Az első esetben

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{3}(0 + 4 \cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

A hiba ekkor $0.0095520$. Ha $h = 0.25$-re alkalmazzuk az összetett Simpson-formulát, akkor

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{3}(0 + 4 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Ennek hibája $0.0006264$. Végül $h = 0.125$-re

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx \approx{}& \frac{0.125}{3}\Bigl(0 + 4 \cdot 0.125^2 e^{0.125} + 2 \cdot 0.25^2 e^{0.25} + 4 \cdot 0.375^2 e^{0.375} \\
&+ 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.625^2 e^{0.625} + 2 \cdot 0.75^2 e^{0.75} + 4 \cdot 0.875^2 e^{0.875} + e\Bigr) = 0.7183215,
\end{aligned}
$$

aminek a hibája $0.0000396$.

---

Most bizonyítás nélkül felsorolunk néhány egyéb zárt elemi Newton–Cotes-formulát.

**Simpson $\frac{3}{8}$-ados formula:**

$$
\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)
$$

**$n = 4$:**

$$
\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)
$$

---

Végül levezetés és bizonyítás nélkül felsorolunk néhány nyílt Newton–Cotes-formulát:

$$
\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi),
$$

$$
\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi),
$$

$$
\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi),
$$

$$
\int_{x_{-1}}^{x_4} f(x)\,dx = \frac{5h}{24}\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\bigr) + \frac{95h^5}{144}f^{(4)}(\xi).
$$

---

**Tétel**

Legyen $\sum_{i=1}^{n} c_i f(x_i)$ egy olyan kvadratúra formula, amely pontos a konstans függvényekre és minden $c_i$ együttható pozitív. Legyen $y_i$ közelítése a pontos $f(x_i)$ függvényértékeknek, és tegyük fel, hogy $|y_i - f(x_i)| \leq \varepsilon$. Ekkor

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a).
$$

**Bizonyítás**

A feltétel szerint $(b - a) = \int_a^b 1\,dx = \sum_{i=1}^{n} c_i$, ezért

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \sum_{i=1}^{n} c_i |f(x_i) - y_i| \leq \varepsilon\sum_{i=1}^{n} c_i = \varepsilon(b - a).
$$

---

# 7.4. Gauss-féle kvadratúra formulák

---

Az előző szakaszban láttuk, hogy a Newton–Cotes-formulák a pontos integrált adják vissza bizonyos fokszámú polinomok esetén. Ebben a szakaszban olyan kvadratúra képletek levezetésével foglalkozunk, amelyek hasonló tulajdonságúak. Tekintsük az

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i)
$$

általános kvadratúra képletet. Teljesül a következő állítás:

**Tétel**

Egy

$$
Q(f) \equiv \sum_{i=1}^{n} c_i f(x_i)
\tag{17}
$$

kvadratúra formula akkor és csak akkor pontos egy tetszőleges $p(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0$ legfeljebb $m$-edfokú polinomra, ha pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re.

---

**Bizonyítás**

Abból, hogy $Q$ pontos minden legfeljebb $m$-edfokú polinomra, természetesen következik, hogy pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re. Most tegyük fel, hogy $Q$ pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re. Ekkor az integrál és a $Q$ kvadratúra formula linearitásából következik

$$
\begin{aligned}
\int_a^b a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0\,dx &= a_m\int_a^b x^m\,dx + a_{m-1}\int_a^b x^{m-1}\,dx + \cdots + a_0\int_a^b 1\,dx \\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \cdots + a_0 Q(1) \\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0).
\end{aligned}
$$

---

A $Q(f) = \sum_{i=1}^{n} c_i f(x_i)$ formulában $2n$ darab paraméter szerepel, a $c_i, x_i$ számok ($i = 1, 2, \ldots, n$). Azt várhatjuk, hogy egy ilyen kvadratúra képlet legfeljebb $(2n - 1)$-edfokú polinomokra adjon vissza pontos értéket, hiszen azokban is $2n$ együttható van. A $Q$ kvadratúra formula akkor és csak akkor pontos a legfeljebb $(2n - 1)$-edfokú polinomokra, ha

$$
\begin{aligned}
\int_a^b 1\,dx &= \sum_{i=1}^{n} c_i \\
\int_a^b x\,dx &= \sum_{i=1}^{n} c_i x_i \\
&\;\;\vdots \\
\int_a^b x^{2n-1}\,dx &= \sum_{i=1}^{n} c_i x_i^{2n-1}
\end{aligned}
$$

Azt a kvadratúra formulát, amelyet a fenti egyenletrendszer megoldása segítségével írunk fel, **$n$ pontra felírt Gauss-féle kvadratúra formulának** nevezzük.

---

Most tekintsünk egy speciális esetet, legyen $[a, b] = [-1, 1]$ és $n = 2$. Ekkor az egyenletekből kapjuk az integrálokat kiszámolva

$$
\begin{aligned}
2 &= c_1 + c_2 \tag{18} \\
0 &= c_1 x_1 + c_2 x_2 \tag{19} \\
\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \tag{20} \\
0 &= c_1 x_1^3 + c_2 x_2^3. \tag{21}
\end{aligned}
$$

A (19) egyenlet alapján

$$
c_1 x_1 = -c_2 x_2,
$$

ezért ha $c_1 x_1 = 0$, akkor $c_2 x_2 = 0$ is teljesül, de ez ellentmond a (20) egyenletnek. Ezért a $c_1, c_2, x_1$ és $x_2$ változók mindegyike nem 0. A (21) egyenletből

$$
c_1 x_1^3 = -c_2 x_2^3
$$

adódik, így

$$
x_1^2 = x_2^2.
$$

---

Két eset lehetséges: (1) $x_1 = x_2$, vagy (2) $x_1 = -x_2$. Az (1) esetben a (19) egyenletet felhasználva kapjuk, hogy

$$
0 = c_1 + c_2,
$$

ami ellentmond a (18) egyenletnek. Ezért az (1) eset nem lehetséges. Így

$$
x_1 = -x_2.
$$

Ekkor (19) egyenletből kapjuk, hogy $c_1 = c_2$, így (18) szerint

$$
c_1 = c_2 = 1,
$$

de ekkor a (20) egyenlet miatt

$$
\frac{2}{3} = 2x_1^2.
$$

Ezért $x_1 = \pm\frac{1}{\sqrt{3}} = \pm\frac{\sqrt{3}}{3}$. Azaz a (18)–(21) egyenletrendszernek (a sorrendtől eltekintve) egyértelmű megoldása:

$$
c_1 = c_2 = 1 \quad\text{és}\quad x_1 = -\frac{\sqrt{3}}{3}, \quad x_2 = \frac{\sqrt{3}}{3}.
$$

---

A másodrendű Gauss-féle kvadratúra formula képlete tehát:

$$
\int_{-1}^{1} f(x)\,dx \approx f\left(-\frac{\sqrt{3}}{3}\right) + f\left(\frac{\sqrt{3}}{3}\right).
$$

**Példa**

Számítsuk ki az $f(x) = e^x$ függvény integráljának egy közelítését a $[-1, 1]$ intervallumon! A Gauss-formula alapján

$$
\int_{-1}^{1} e^x\,dx \approx e^{-\frac{\sqrt{3}}{3}} + e^{\frac{\sqrt{3}}{3}} = 2.3426961.
$$

Ezt az $e - 1/e = 2.350424$ pontos értékkel összehasonlítva kapjuk, hogy a közelítés hibája $0.0077062$, ami a képlet egyszerűségéhez viszonyítva nagyon kicsi.

---

Szükségünk lesz az ortogonális függvények fogalmára. Az $f$ és $g$ függvényeket egymásra **ortogonálisnak** nevezzük az $[a, b]$ intervallumon, ha

$$
\int_a^b f(x)g(x)\,dx = 0.
$$

Megmutatjuk, hogy létezik polinomoknak egy olyan $(P_i)_{i=0,1,\ldots}$ sorozata, amelyek páronként ortogonálisak a $[-1, 1]$ intervallumon, és $P_i$ $i$-edfokú polinom. Legyen

$$
P_0(x) := 1 \quad\text{és}\quad P_1(x) := x.
$$

Ekkor $P_0$ és $P_1$ ortogonális egymásra a $[-1, 1]$ intervallumon. Keressük $P_2$-t a

$$
P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)
$$

alakban.

---

Ekkor a kívánt ortogonalitás alapján

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_0(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,1}\int_{-1}^{1} P_1(x)P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx,
\end{aligned}
$$

amit megoldva

$$
a_{2,0} = -\frac{\int_{-1}^{1} x^2 P_0(x)\,dx}{\int_{-1}^{1} P_0^2(x)\,dx}.
$$

---

Ehhez hasonlóan

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx + a_{2,0}\int_{-1}^{1} P_0(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx,
\end{aligned}
$$

így

$$
a_{2,1} = -\frac{\int_{-1}^{1} x^2 P_1(x)\,dx}{\int_{-1}^{1} P_1^2(x)\,dx}.
$$

---

$P_2$-t tehát egyértelműen felírhatjuk a keresett alakban. Ezt az eljárást folytatva ha $P_0, \ldots, P_i$ már definiált, $P_{i+1}$-et a

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \cdots + a_{i+1,0} P_0(x)
$$

alakban keressük. Ekkor az előbbi számoláshoz hasonlóan kapjuk, hogy

$$
a_{i+1,j} = -\frac{\int_{-1}^{1} x^{i+1} P_j(x)\,dx}{\int_{-1}^{1} P_j^2(x)\,dx}, \qquad j = 0, 1, \ldots, i,
$$

tehát $P_{i+1}$ egyértelműen definiálható. Ezt az eljárást **Gram–Schmidt-féle ortogonalizálásnak** nevezzük, a kapott $P_i$ polinomokat pedig $i$-edfokú **Legendre-polinomnak** hívjuk.

---

Az első néhány Legendre-polinom képlete:

$$
\begin{aligned}
P_0(x) &= 1, \\
P_1(x) &= x, \\
P_2(x) &= x^2 - \frac{1}{3}, \\
P_3(x) &= x^3 - \frac{3}{5}x, \\
P_4(x) &= x^4 - \frac{6}{7}x^2 + \frac{3}{35}
\end{aligned}
$$

Megmutatható hogy a Legendre-polinomok teljesítik a

$$
P_{n+1}(x) = xP_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x)
$$

rekurzív képletet.

---

**Tétel**

Legyen $P_i$ az $i$-edik Legendre-polinom. Ekkor

1. $P_i$ ortogonális egy tetszőleges legfeljebb $(i - 1)$-edfokú polinomra.
2. $P_i$ páros függvény ha $i$ páros, és páratlan függvény, ha $i$ páratlan.
3. $P_i$-nek $i$ darab különböző valós gyöke van a $(-1, 1)$ intervallumban, amelyek szimmetrikusak az origóra nézve.
4. Ha $(p_i)_{i=0,1,\ldots}$ (pontosan) $i$-edfokú, páronként ortogonális polinomok egy sorozata, akkor minden $i$-re $p_i(x) = c_i P_i(x)$ valamely $c_i \neq 0$ konstansra.

---

Az alábbi tétel szerint az $n$ pontra felírt Gauss-féle kvadratúra képlet alappontjai a $P_n$ Legendre-polinom gyökeivel egyeznek meg.

**Tétel**

Tegyük fel, hogy az $x_1, x_2, \ldots, x_n$ számok az $n$-edfokú Legendre-polinom gyökei, és legyen

$$
c_i = \int_{-1}^{1} \frac{(x - x_1)\cdots(x - x_{i-1})(x - x_{i+1})\cdots(x - x_n)}{(x_i - x_1)\cdots(x_i - x_{i-1})(x_i - x_{i+1})\cdots(x_i - x_n)}\,dx.
\tag{22}
$$

Ekkor egy tetszőleges legfeljebb $(2n - 1)$-edfokú $p$ polinomra

$$
\int_{-1}^{1} p(x)\,dx = \sum_{i=1}^{n} c_i p(x_i).
$$

---

A következő tétel a Gauss-féle kvadratúra formula képlethibáját adja meg.

**Tétel**

Legyen $f \in C^{2n}(a, b)$. Ekkor létezik olyan $\xi \in (a, b)$, hogy az $n$ pontra felírt Gauss-féle kvadratúra formulára

$$
\int_a^b f(x)\,dx = \sum_{k=1}^{n} c_k f(x_k) + \frac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^{1} P_n^2(x)\,dx.
$$

---

Belátható, hogy a Gauss-féle kvadratúra formula maradéktagja közelítőleg

$$
\frac{\pi f^{(2n)}(\xi)}{4^n (2n)!}
$$

alakú, azaz ha például $f^{(2n)}$ korlátos $n$-től független korláttal, akkor a Gauss-féle kvadratúra formula exponenciális sebességgel tart 0-hoz, ha $n \to \infty$. Emlékezzünk, hogy a Newton–Cotes-formulák csak polinomiális sebességgel tartanak 0-hoz, ha $n \to \infty$.

---

Az alábbi táblázatban felsoroltuk az első néhány Legendre-polinom gyökeit, és az előző tételből kapott hozzá tartozó $c_i$ együtthatók értékét.

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

---

A Gauss-féle kvadratúra képletek a $[-1, 1]$ intervallumra vonatkoznak. Egy tetszőleges $[a, b]$ intervallumon vett integrált az $x = ((b - a)t + a + b)/2$ változó helyettesítéssel tudunk a $[-1, 1]$ intervallumra visszavezetni:

$$
\int_a^b f(x)\,dx = \frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)dt.
$$

**Példa**

Közelítsük az $\int_0^1 x^2 e^x\,dx$ integrált másodrendű Gauss-féle kvadratúra képlettel:

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx &= \frac{1}{2}\int_{-1}^{1}\left(\frac{t + 1}{2}\right)^2 e^{(t+1)/2}\,dt \\
&\approx \frac{1}{2}\left(\left(\frac{-\sqrt{3}/3 + 1}{2}\right)^2 e^{(-\sqrt{3}/3 + 1)/2} + \left(\frac{\sqrt{3}/3 + 1}{2}\right)^2 e^{(\sqrt{3}/3 + 1)/2}\right) \\
&= 0.7119418,
\end{aligned}
$$

amelynek hibája $0.0063400$.
