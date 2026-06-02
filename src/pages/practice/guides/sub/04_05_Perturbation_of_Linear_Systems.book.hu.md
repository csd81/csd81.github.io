## 4.5. Lineáris egyenletrendszerek perturbációja

Tekintsük az

$$\mathbf{A}\mathbf{x} = \mathbf{b} \tag{4.25}$$

lineáris egyenletrendszert. Tegyük fel, hogy a (4.25) egyenlet jobb oldala helyett annak egy kis perturbációja, $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$ adott, és a hozzá tartozó

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}} \tag{4.26}$$

egyenletet oldjuk meg, aminek a megoldását $\tilde{\mathbf{x}}$-mal jelöltük.

**4.22. tétel.** *Legyen* $\mathbf{A}$ *nemszinguláris,* $\mathbf{x}$ *és* $\tilde{\mathbf{x}}$ *megoldása a* (4.25) *ill. a* (4.26) *egyenletnek. Ekkor*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

**Bizonyítás.** A (4.25) és (4.26) egyenleteket kivonva egymásból $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}}$ adódik, amiből $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})$, azaz $\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|$. Ezt és az $\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenséget felhasználva

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

$\square$

A tétel szerint egy nagyságrendi növekedés $\mathrm{cond}(\mathbf{A})$-ban eredményezheti a megoldás relatív hibájának egy nagyságrenddel való növekedését, azaz egy értékes számjegy elvesztését.

Tekintsük most az általános esetet, az együtthatómátrixot és az egyenlet jobb oldalát is perturbáljuk:

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.27}$$

ahol $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ és $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ „kicsi”.

**4.23. tétel.** *Legyen* $\mathbf{A}$ *nemszinguláris,* $\tilde{\mathbf{A}}$ *olyan hogy* $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$. *Legyen* $\mathbf{x}$ *megoldása* (4.25)-*nek és* $\tilde{\mathbf{x}}$ *megoldása* (4.27)-*nek. Ekkor*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

**Bizonyítás.** Induljunk ki az $\tilde{\mathbf{A}} = \mathbf{A} - (\mathbf{A} - \tilde{\mathbf{A}}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))$ azonosságból. Mivel a feltétel szerint $\|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\| < 1$, ezért a 4.4. állítás szerint $\tilde{\mathbf{A}}$ invertálható, és

$$
\begin{aligned}
\|(\tilde{\mathbf{A}})^{-1}\| &\leq \|(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))^{-1}\| \|\mathbf{A}^{-1}\| \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\|} \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}.
\end{aligned}
$$

A (4.26) és (4.25) egyenletekből kapjuk

$$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{x} - (\tilde{\mathbf{A}})^{-1}\tilde{\mathbf{b}} = (\tilde{\mathbf{A}})^{-1}(\tilde{\mathbf{A}}\mathbf{x} - \tilde{\mathbf{b}}) = (\tilde{\mathbf{A}})^{-1}(\mathbf{b} - \tilde{\mathbf{b}} - (\mathbf{A} - \tilde{\mathbf{A}})\mathbf{x}).$$

Ebből

$$
\begin{aligned}
\|\mathbf{x} - \tilde{\mathbf{x}}\| &\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}(\|\mathbf{b} - \tilde{\mathbf{b}}\| + \|\mathbf{A} - \tilde{\mathbf{A}}\| \|\mathbf{x}\|) \\
&= \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A}\| \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \|\mathbf{x}\| \right).
\end{aligned}
$$

Leosztva az egyenlőtlenséget $\|\mathbf{x}\|$-val és a $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenséget alkalmazva

$$
\begin{aligned}
\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} &\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right) \\
&\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right).
\end{aligned}
$$

$\square$

Könnyen igazolhatók a kondíciószám következő tulajdonságai:

**4.24. tétel.** *Legyen* $\|\cdot\|$ *egy tetszőleges mátrixnorma és* $\mathrm{cond}(\cdot)$ *a hozzá tartozó kondíciószám függvény. Ekkor*

&nbsp;&nbsp;*1.* $\mathrm{cond}(\mathbf{A}) \geq 1$,

&nbsp;&nbsp;*2.* $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$

*teljesül minden invertálható* $\mathbf{A}$-ra.

A $\mathrm{cond}_*(\mathbf{A}) \equiv \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ számot az $\mathbf{A}$ mátrix *spektrál kondíciószámának* nevezzük. Az előző tétel szerint a mátrix spektrál kondíciószáma kisebb, mint bármely normához tartozó kondíciószáma. Hátránya, hogy nehéz kiszámolni, mivel a mátrix sajátértékeit kell hozzá meghatározni.

Bizonyítás nélkül közöljük a következő eredményt:

**4.25. tétel (Gastinel).** *Legyen* $\|\cdot\|$ *egy tetszőleges mátrixnorma,* $\mathbf{A}$ *invertálható mátrix. Ekkor*

$$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}.$$

A tételből következik, hogy ha az $\mathbf{A}$ mátrix kondíciószáma nagy, akkor $\mathbf{A}$-hoz „közel” van egy szinguláris mátrix.

Rosszul kondícionált mátrixok klasszikus példája az ún. *Hilbert-mátrix*:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

A 4.3. táblázatban feltüntettük a Hilbert-mátrix spektrál kondíciószámát néhány $n$-re. Látható, hogy milyen gyorsan növekszik a spektrál kondíciószám $n$ növekedésével.

**4.3. táblázat. A Hilbert-mátrix spektrál kondíciószáma**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |

### Feladatok

1. Számítsa ki az

$$\begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}$$

mátrix spektrál kondíciószámát!

2. Bizonyítsa be a 4.24. tételt!

3. Igazolja, hogy

$$\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = \frac{\max\{|\lambda_1|, \ldots, |\lambda_n|\}}{\min\{|\lambda_1|, \ldots, |\lambda_n|\}},$$

ahol $\lambda_1, \ldots, \lambda_n$ az $\mathbf{A}$ mátrix sajátértékei!
