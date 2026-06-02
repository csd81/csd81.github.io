# Numerikus analízis

## 1. Bevezetés

**Ferenc Hartung**

Pannon Egyetem
Matematika Tanszék

2026

---

## 1.1. A numerikus analízis feladata, alapfogalmak

---

### Tudományos számítások vázlatos menete:

```
                        ┌─────────────────────┐
┌──────────────────┐    │ matematikai modell  │    ┌─────────────────────┐
│ fizikai folyamat │ →  │   paraméterek       │ →  │ numerikus megoldás  │
└──────────────────┘    │   állandók          │    └─────────────────────┘
                        │   kezdeti értékek   │
                        └─────────────────────┘
        örökölt hiba:                       számítási hiba:
          - modellhiba                        - képlethiba
          - mérési hiba                       - kerekítési hiba
```

A **numerikus analízis feladata** matematikai feladatok numerikus eredményének aritmetikai műveletekkel (osztás, szorzás, összeadás, kivonás) való pontos vagy közelítő megoldása.

---

A **képlethiba** az a hiba, amit akkor követünk el, amikor egy matematikai kifejezés pontos értéke helyett annak közelítő értékét használjuk.

> **Példa**
>
> Számítsuk ki az $f(x) = \sin x$ függvény értékét egy $x$ pontban.
>
> Tekintsük az $f$ függvény ötödrendű Taylor-polinomját:
>
> $$T_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!}.$$
>
> A Taylor-tétel szerint
>
> $$f(x) = T_5(x) + \frac{f^{(6)}(\xi)}{6!}x^6.$$
>
> A képlethiba
>
> $$\frac{f^{(6)}(\xi)}{6!}x^6 = -\frac{\sin\xi}{6!}x^6.$$

---

A **kerekítési hiba** abból adódik, hogy a számítógépen egy valós számot csak véges sok tizedesjegy pontossággal tudunk tárolni.

A következő fogalom, ami egy numerikus módszerrel kapcsolatban felmerül, a **stabilitás**. Ezt a fogalmat kétféle értelemben is használjuk. Beszélhetünk egy **matematikai modell vagy feladat** stabilitásáról, vagy egy **numerikus módszer** stabilitásáról.

---

> **Példa**
>
> Tekintsük a
>
> $$7x + 505y = 940$$
> $$6x + 433y = 806$$
>
> lineáris egyenletrendszert. A pontos megoldás $x = -10$ és $y = 2$. Tekintsük most:
>
> $$7x + 505y = 940$$
> $$6.01x + 433y = 806.$$
>
> Ennek megoldása $x = 2.4691$ és $y = 1.8272$. Látható, hogy 0.17%-os változás az egyik együtthatóban a megoldás 124.7% ill. 8.6%-os megváltozását eredményezi.

Azt mondjuk, hogy egy matematikai feladat **korrekt** vagy **stabil**, ha "kis" változás a feladat paramétereiben a megoldás "kis" változását idézi csak elő. Ellenkező esetben **inkorrekt** vagy **instabil feladatról** beszélünk.

---

Egy numerikus algoritmust a kerekítési hibákra nézve **stabilnak** nevezünk, ha a kerekítési hibák nem befolyásolják jelentősen a számított végeredményt. Ha a kerekítési hibák miatt a számított végeredmény jelentősen eltér a számítandó értéktől, akkor az algoritmust **instabilnak** nevezzük.

> **Példa**
>
> Tekintsük a következő három, rekurzív definícióval megadott sorozatot:
>
> $$
> \begin{aligned}
> x_n &= \frac{1}{3}x_{n-1}, & x_0 &= 1,\\
> y_n &= 2y_{n-1} - \frac{5}{9}y_{n-2}, & y_0 &= 1,\quad y_1 = \frac{1}{3},\\
> z_n &= \frac{13}{3}z_{n-1} - \frac{4}{3}z_{n-2}, & z_0 &= 1,\quad z_1 = \frac{1}{3}.
> \end{aligned}
> $$
>
> Könnyen látható, hogy $x_n = y_n = z_n = \frac{1}{3^n}$, azaz a három sorozat algebrailag ekvivalens. *Egyszeres pontosságú* aritmetikával számolva kapjuk:

---

> **Példa folyt.**
>
> | $n$ | $x_n$ | $y_n$ | $\|y_n - 1/3^n\|$ | $z_n$ | $\|z_n - 1/3^n\|$ |
> |----|----------|----------|------------|-----------|------------|
> | 2  | 0.111111 | 0.111111 | 2.2352e-08 | 0.111111  | 4.4703e-08 |
> | 3  | 0.037037 | 0.037037 | 4.0978e-08 | 0.037037  | 1.8254e-07 |
> | 4  | 0.012346 | 0.012346 | 6.9849e-08 | 0.012346  | 7.3109e-07 |
> | 5  | 0.004115 | 0.004115 | 1.1688e-07 | 0.004118  | 2.9248e-06 |
> | 6  | 0.001372 | 0.001372 | 1.9465e-07 | 0.001383  | 1.1699e-05 |
> | 7  | 0.000457 | 0.000458 | 3.2442e-07 | 0.000504  | 4.6795e-05 |
> | 8  | 0.000152 | 0.000153 | 5.4071e-07 | 0.000340  | 1.8718e-04 |
> | 9  | 0.000051 | 0.000052 | 9.0117e-07 | 0.000800  | 7.4872e-04 |
> | 10 | 0.000017 | 0.000018 | 1.5019e-06 | 0.003012  | 2.9949e-03 |
> | 11 | 0.000006 | 0.000008 | 2.5032e-06 | 0.011985  | 1.1980e-02 |
> | 12 | 0.000002 | 0.000006 | 4.1721e-06 | 0.047920  | 4.7918e-02 |
> | 13 | 0.000001 | 0.000008 | 6.9535e-06 | 0.191674  | 1.9167e-01 |
> | 14 | 0.000000 | 0.000012 | 1.1589e-05 | 0.766693  | 7.6669e-01 |
> | 15 | 0.000000 | 0.000019 | 1.9315e-05 | 3.066773  | 3.0668e+00 |
> | 16 | 0.000000 | 0.000032 | 3.2192e-05 | 12.267091 | 1.2267e+01 |
> | 17 | 0.000000 | 0.000054 | 5.3653e-05 | 49.068363 | 4.9068e+01 |
> | 18 | 0.000000 | 0.000089 | 8.9422e-05 | 196.273453| 1.9627e+02 |

---

> **Példa folyt.**
>
> *Dupla pontosságú* aritmetikával számolva a 18. tag hibája:
>
> $$|y_{18} - 1/3^{18}| = -2.5104e - 13 \qquad \text{és} \qquad |z_{18} - 1/3^{18}| = 2.3804e - 07.$$

---

A következő fogalom, amit egy (véges sok lépésből álló) numerikus módszernél vizsgálni szoktunk, az algoritmus **műveletigénye** vagy **műveletszáma**.

> **Példa**
>
> Számítsuk ki a $p(x) = p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10$ negyedfokú polinom értékét egy megadott $x$ pontban! A képletben 4 összeadás/kivonás, 4 szorzás és 3 hatványozás szerepel. A hatványozások tulajdonképpen $3+2+1=6$ szorzást jelentenek, azaz összesen 10 szorzásra van szükség a képlet alkalmazásához. Megtehetjük viszont, hogy átalakítjuk $p$ képletét:
>
> $$p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 = (((5x - 8)x + 2)x + 4)x - 10.$$
>
> A $p$ polinomnak ezt az alakját használva már csak 4 összeadás ill. kivonás valamint 4 szorzás kell a képlet kiértékeléséhez.

---

Az előző példában bemutatott eljárást megismételhetjük általános $n$-edfokú polinomokra:

$$a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0 = ((\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots)x + a_1)x + a_0$$

Ebben a képletben összesen csak $n$ összeadás/kivonás és $n$ szorzás szerepel. Ezt a polinomok kiértékelésére vonatkozó módszert **Horner-eljárásnak** nevezzük.

**Algoritmus: Horner-módszer**

```
INPUT:  n - a polinom fokszáma
        a_n, a_{n-1}, ..., a_0 - a polinom együtthatói
        x - ahol a polinomot kiértékeljük
OUTPUT: p - a polinom értéke az x pontban

p ← a_n
for i = n-1, ..., 0 do
    p ← a_i + px
end do
output(p)
```

---

Egy algoritmusra jellemző tulajdonság még az **adattárolási igénye**. Egy $10 \times 10$-es lineáris egyenletrendszer megoldására használt algoritmus esetében az adatok tárolása nem jelenthet problémát, de ugyanez $10000 \times 10000$-es rendszerre már gond lehet. Ilyen mennyiségű adat kezelésekor előnyben részesítünk olyan algoritmusokat, amelyeknek minél kisebb az adattárolási igénye.

---
