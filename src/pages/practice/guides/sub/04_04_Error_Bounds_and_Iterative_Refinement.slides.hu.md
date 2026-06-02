## 4.4. Hibabecslés, kondíciószám

A korábban tárgyalt feltételek mintájára három általános megállási feltétel valamelyikét, ill. ezek kombinációit használhatjuk:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Az

$$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}$$

vektort az $\bar{\mathbf{x}}$ közelítő megoldáshoz tartozó **reziduális vektornak** nevezzük. A 3. feltétel azon a hipotézisen alapszik, hogy ha $\mathbf{r}$ normája kicsi, akkor $\bar{\mathbf{x}}$ jó közelítése a pontos megoldásnak.

> **Példa.** A
> $$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
> egyenletrendszer pontos megoldása $\mathbf{x} = (1, 1)^T$. Tekintsük az
> $$\bar{\mathbf{x}} = (2, -3)^T$$
> vektort egy „közelítő” megoldásnak. A hozzá tartozó reziduális vektor:
> $$\mathbf{r} = \mathbf{b} - \mathbf{A}\bar{\mathbf{x}} = (0, 0.03)^T.$$
> Ennek végtelen normája
> $$\|\mathbf{r}\|_\infty = 0.03,$$
> ami kicsi, annak ellenére, hogy $\bar{\mathbf{x}}$ nyilván nem tekinthető a pontos megoldás jó közelítésének.

A következő eredmény azt vizsgálja, hogy $\|\mathbf{r}\|$ kicsinységéből milyen esetekben következtethetünk arra, hogy a közelítés hibája kicsi.

> **Tétel.** Legyen $\mathbf{A}$ egy nemszinguláris négyzetes mátrix, $\mathbf{x}$ az
> $$\mathbf{A}\mathbf{x} = \mathbf{b}$$
> egyenlet pontos megoldása, $\bar{\mathbf{x}}$ egy közelítő megoldása, és legyen
> $$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}.$$
> Ekkor
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|,$$
> és
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

A

$$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$$

számot az $\mathbf{A}$ mátrix ($\|\cdot\|$ normára vonatkozó) **kondíciószámának** nevezzük. A $\|\cdot\|_p$ mátrixnormához tartozó kondíciószámot $\mathrm{cond}_p(\mathbf{A})$-val jelöljük. Ha egy $\mathbf{A}$ mátrix kondíciószáma „nagy”, akkor a mátrixot **rosszul kondícionált**, vagy **gyengén meghatározott** mátrixnak nevezzük.

> **Példa.** Tekintsük az előző példa $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}$ együtthatómátrixát! Ellenőrizhető, hogy
> $$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$
> és így $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Ebből kapjuk, hogy
> $$\mathrm{cond}_\infty(\mathbf{A}) = 1346.$$
> Ez magyarázza azt, hogy $(2, -3)^T$ nem jó közelítése az egyenlet megoldásának, bár a reziduális vektor kicsi.

---
