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
