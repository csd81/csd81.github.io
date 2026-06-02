# 8.6. Newton-módszer

Most tekintsünk egy $f\colon \mathbb{R}^n \to \mathbb{R}$ függvényt. Rögzítsünk egy $\mathbf{p}^{(0)}$ vektort. Ha $f \in C^3$, akkor $\mathbf{p}^{(0)}$ egy környezetében $f$ közelíthető a

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) \tag{14}$$

másodfokú Taylor-polinomjával, ahol $f'(\mathbf{p}^{(0)})$ $f$ gradiensvektora, $f''(\mathbf{p}^{(0)})$ pedig $f$ Hesse-mátrixa $\mathbf{p}^{(0)}$-ban. Tegyük fel, hogy $f''(\mathbf{p}^{(0)})$ pozitív definit. Ekkor $g$-nek globális minimuma létezik, amelyet a

$$\mathbf{p}^{(1)} = \mathbf{p}^{(0)} - \big(f''(\mathbf{p}^{(0)})\big)^{-1} f'(\mathbf{p}^{(0)})$$

pontban vesz fel. Ekkor $\mathbf{p}^{(1)}$-et tekinthetjük $f$ minimumhelye közelítésének. Ezután megismételjük az eljárást a $\mathbf{p}^{(1)}$ pontbeli Taylor-közelítést használva. Így definiálhatjuk a következő iterációs módszert:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}) \tag{15}$$

A (15) iterációs módszert **Newton-féle minimumkeresési módszernek** hívjuk.

---

Könnyen látható, hogy ez azonos az $f'(\mathbf{x}) = \mathbf{0}$ egyenletrendszer megoldására felírt Newton-iterációval. Ebből kapjuk rögtön a következő tételt.

> **Tétel.** *Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$ és $f''(\mathbf{p})$ pozitív definit. Ekkor $f$-nek $\mathbf{p}$-ben lokális minimuma van, és a (15) Newton-iteráció lokálisan kvadratikusan konvergál $\mathbf{p}$-hez.*

---

> **Példa.** Alkalmazzuk a Newton-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(-1, 4)^T$ pontból indított (15) iteráció első 5 tagját a következő táblázatban tüntettük fel. A sorozat igen gyorsan megközelítette a pontos $(1, 0.5)^T$ minimumhelyet. Megjegyezzük, hogy az $(1, 3)^T$ pontból indított Newton-sorozat egy lépésben már a pontos minimumhelyet adja vissza.

---

**Példa folyt.**

*Newton-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

---
