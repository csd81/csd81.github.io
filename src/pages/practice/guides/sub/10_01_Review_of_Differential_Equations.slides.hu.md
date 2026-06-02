# Numerikus analízis: 10. — Közönséges differenciálegyenletek

**Ferenc Hartung**
Pannon Egyetem
Matematika Tanszék

2026

---

## 10.1. Differenciálegyenletek előismeretek

Ebben a fejezetben az

$$y' = f(t, y), \qquad t \in [t_0, T], \qquad y(t_0) = y_0. \tag{1}$$

kezdeti érték probléma közelítő megoldását keressük a $[t_0, T]$ intervallumon. Feltesszük, hogy

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

*(Az ábrán egy iránymező látható több megoldásgörbével; a piros görbe a $(t_0, y_0)$ ponton átmenő megoldás.)*

Az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ függvény a második változójában teljesíti a **Lipschitz-tulajdonságot** az $L$ Lipschitz-konstanssal, ha

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{minden } t \in [t_0, T] \text{ és } y, \tilde{y} \in \mathbb{R}.$$

> **Tétel**
> Tegyük fel, hogy az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú (valamely $L$ Lipschitz-konstanssal). Ekkor az (1) kezdeti érték problémának minden $y_0 \in \mathbb{R}$ kezdeti értékhez létezik egyértelmű megoldása a $[0, T]$ intervallumon.

---
