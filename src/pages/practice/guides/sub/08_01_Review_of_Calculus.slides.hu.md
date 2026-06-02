# Numerikus analízis

## 8. Szélsőértékszámítás

**Ferenc Hartung**

Pannon Egyetem, Matematika Tanszék

2026

---

# 8.1. Analízis előismeretek

A Hesse-mátrix:

Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$.

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1\, \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2\, \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

> **Tétel.** *Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$ parciálisan differenciálható minden változója szerint. Ekkor ha $f$-nek létezik lokális szélsőértéke az $\mathbf{a}$ pontban, akkor $\frac{\partial f(\mathbf{a})}{\partial x_i} = 0$ teljesül minden $i = 1, \ldots, n$-re.*
>
> *Ha $f \in C^2$, és valamely $\mathbf{a}$ pontban $f'(\mathbf{a}) = \mathbf{0}$, továbbá az $f''(\mathbf{a})$ Hesse-mátrix pozitív (negatív) definit, akkor $f$-nek lokális minimuma (maximuma) van $\mathbf{a}$-ban.*

---

Kétváltozós függvényekre az előbbi tétel speciális esetén kapjuk:

> **Tétel.** *Legyen $f\colon \mathbb{R}^2 \to \mathbb{R}$, $f \in C^2$. Ekkor ha $f$-nek létezik lokális szélsőértéke az $(a, b)$ pontban, akkor*
>
> $$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{1}$$
>
> *teljesül.*
>
> *Fordítva, ha valamely $(a, b)$-re (1) teljesül, továbbá*
>
> $$D(a, b) := \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x\, \partial y}(a, b) \right)^2 > 0$$
>
> *akkor $f$-nek létezik lokális szélsőértéke $(a, b)$-ben, mégpedig lokális maximuma, ha $\frac{\partial^2 f}{\partial x^2}(a, b) < 0$ ill. lokális minimuma, ha $\frac{\partial^2 f}{\partial x^2}(a, b) > 0$. Ha $D(a, b) < 0$, akkor $f$-nek nincs szélsőértéke $(a, b)$-ben.*

---
