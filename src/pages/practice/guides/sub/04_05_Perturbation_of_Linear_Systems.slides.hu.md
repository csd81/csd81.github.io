## 4.5. Lineáris egyenletrendszerek perturbációja

> **Példa.** Tekintsük az
> $$
> \begin{array}{rcrcrcr}
> x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\
> \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\
> \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1
> \end{array}
> $$
> egyenletrendszert. A pontos megoldása $x_1 = 3$, $x_2 = -24$ és $x_3 = 30$. Tekintsük az együtthatókat 3 tizedesjegy pontossággal:
> $$
> \begin{array}{rcrcrcr}
> y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\
> 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\
> 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1
> \end{array}
> $$
> Ennek a megoldása $y_1 = 3.4460555$, $y_2 = -26.2735192$ és $y_3 = 32.1042167$. A megoldások különbsége:
> $$|x_1 - y_1| = 0.4460555, \quad |x_2 - y_2| = 2.2735192, \quad |x_3 - y_3| = 2.1042167$$
> $$\frac{|x_1 - y_1|}{|x_2|} = 0.1486852, \quad \frac{|x_2 - y_2|}{|x_2|} = 0.09472997, \quad \frac{|x_3 - y_3|}{|x_3|} = 0.07014056$$

Tekintsük az

$$\mathbf{A}\mathbf{x} = \mathbf{b} \tag{8}$$

lineáris egyenletrendszert. Tegyük fel, hogy a (8) egyenlet jobb oldala helyett annak egy kis perturbációja, $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$ adott, és a hozzá tartozó

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}} \tag{9}$$

egyenletet oldjuk meg, aminek a megoldását $\tilde{\mathbf{x}}$-mal jelöltük.

> **Tétel.** Legyen $\mathbf{A}$ nemszinguláris, $\mathbf{x}$ és $\tilde{\mathbf{x}}$ megoldása a (8) ill. a (9) egyenletnek. Ekkor
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

> **Bizonyítás.** A (8) és a (9) egyenleteket egymásból kivonva kapjuk
> $$\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}},$$
> így
> $$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}}),$$
> ezért
> $$\|\mathbf{x} - \tilde{\mathbf{x}}\| = \|\mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|.$$
> Ebből és az
> $$\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> egyenlőtlenségből kapjuk
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

Tekintsük most az általános esetet, az együtthatómátrixot és az egyenlet jobb oldalát is perturbáljuk:

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{10}$$

ahol $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ és $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ „kicsi”.

> **Tétel.** Legyen $\mathbf{A}$ nemszinguláris, $\tilde{\mathbf{A}}$ olyan hogy
> $$\|\mathbf{A} - \tilde{\mathbf{A}}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Legyen $\mathbf{x}$ megoldása a (8) és $\tilde{\mathbf{x}}$ megoldása a (10) egyenletnek. Ekkor
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

> **Tétel.** Legyen $\|\cdot\|$ egy tetszőleges mátrixnorma és $\mathrm{cond}(\cdot)$ a hozzá tartozó kondíciószám függvény. Ekkor
>
> 1. $\mathrm{cond}(\mathbf{A}) \geq 1$,
> 2. $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$
>
> teljesül minden invertálható $\mathbf{A}$-ra.

A $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ számot az $\mathbf{A}$ mátrix **spektrál kondíciószámának** nevezzük.

> **Tétel (Gastinel).** Legyen $\|\cdot\|$ egy tetszőleges mátrixnorma, $\mathbf{A}$ invertálható mátrix. Ekkor
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}.$$

Rosszul kondícionált mátrixok klasszikus példája az ún. **Hilbert-mátrix**:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

**A Hilbert-mátrix spektrál kondíciószáma**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
