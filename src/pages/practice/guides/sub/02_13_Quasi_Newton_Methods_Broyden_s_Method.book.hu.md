## 2.13. Kvázi-Newton módszerek, Broyden-módszer

A Newton-módszert gyors (lokális) konvergenciája miatt szeretjük alkalmazni. Hátránya viszont, hogy az $\mathbf{f}$ derivált mátrixát kell kiszámolni hozzá, aminek általában nagy a műveletigénye. Ezenkívül mátrixot kell invertálni vagy lineáris egyenletrendszert kell megoldani minden egyes iterációban, ami szintén műveletigényes. Ezen nehézségek kiküszöbölésére szolgálnak a *kvázi-Newton módszerek*, amelynek általános definíciója:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.31}$$

A kvázi-Newton módszereknél tehát az $\mathbf{f}'(\mathbf{p}^{(k)})$ mátrixot közelítjük egy $\mathbf{A}^{(k)}$ mátrixszal. Attól függően, hogy milyen közelítést használunk, más és más módszereket tudunk definiálni. Az egyik gyakran használt módszer a deriváltat numerikusan közelíteni: legyen $\mathbf{e}^{(j)}=(0,\dots,0,1,0,\dots,0)^T$ a $j$-edik egységvektor, $h>0$ egy megadott kis lépésköz, és definiáljuk az $\mathbf{A}^{(k)}$ mátrix komponenseit az

$$a_{ij}^{(k)}=\frac{f_i(\mathbf{p}^{(k)}+h\mathbf{e}^{(j)})-f_i(\mathbf{p}^{(k)})}{h}, \quad i,j=1,\dots,n \tag{2.32}$$

képlettel.

A továbbiakban az $\mathbf{A}^{(k)}$ mátrix megválasztásának egy másik, a gyakorlatban igen népszerű módszerét, a *Broyden-módszert* vizsgáljuk. Ez a módszer is, mint az előző, a szelőmódszer általánosításának tekinthető.

Skaláris egyenletekre a szelőmódszer az $f(x)=0$ egyenletet az

$$f(p_k)+a_k(x-p_k)=0$$

lineáris egyenlettel helyettesíti, ahol $a_k=(f(p_k)-f(p_{k-1}))/(p_k-p_{k-1})$. Ezt $k$ helyett $k+1$-re felírva és átrendezve, kapjuk, hogy $a_{k+1}$ megoldása az

$$a_{k+1}(p_{k+1}-p_k)=f(p_{k+1})-f(p_k) \tag{2.33}$$

egyenletnek. Ez utóbbi alakot lehet könnyen általánosítani többváltozós függvényekre.

Válasszunk egy $\mathbf{p}^{(0)}$ kezdeti vektort és egy $\mathbf{A}^{(0)}$ kezdeti mátrixot. $\mathbf{A}^{(0)}$ választására többféle módszer használatos: használhatjuk az $\mathbf{A}^{(0)}=\mathbf{f}'(\mathbf{p}^{(0)})$ pontos értéket, vagy a (2.32) képlettel közelíthetjük a derivált mátrixot a $\mathbf{p}^{(0)}$ pontban, vagy veszünk egy tetszőleges invertálható $\mathbf{A}^{(0)}$ mátrixot.

Tegyük fel, hogy $\mathbf{p}^{(k)}$ és $\mathbf{A}^{(k)}$ már definiált. Ekkor a (2.31) képlettel értelmezzük $\mathbf{p}^{(k+1)}$-et. A (2.33) egyenlet analógiájára megköveteljük, hogy $\mathbf{A}^{(k+1)}$ teljesítse az

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)})=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.34}$$

az ún. *szelő egyenletet*. Vezessük be a következő jelöléseket:

$$\mathbf{y}^{(k)}:=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}) \quad \text{és} \quad \mathbf{s}^{(k)}:=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}.$$

Ezzel a jelöléssel a (2.31) iterációs formula az

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.35}$$

a (2.34) egyenlet pedig az

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)}=\mathbf{y}^{(k)} \tag{2.36}$$

alakban írható fel. A (2.35) egyenlet megoldható $\mathbf{s}^{(k)}$-ra (feltéve hogy $\mathbf{A}^{(k)}$ invertálható), így a probléma redukálódott arra, hogy olyan $\mathbf{A}^{(k+1)}$ mátrixot keresünk, amely a (2.36) egyenletet teljesíti. Ez az egyenlet viszont nem határozza meg az $\mathbf{A}^{(k+1)}$ mátrixot egyértelmű módon, hiszen a vektor alakban írt egyenlet $n$ db skaláris egyenlettel ekvivalens, $\mathbf{A}^{(k+1)}$-et viszont $n^2$ db komponense határozza meg. (2.36) csak annyit jelent, hogy az $\mathbf{A}^{(k+1)}$ mátrixszal meghatározott lineáris leképezés az $\mathbf{s}^{(k)}$ irányában meghatározott, de az erre merőleges $(n-1)$-dimenziós altéren nem meghatározott. Mivel a $k+1$-edik lépésben erről nincs új információnk, ezért úgy definiáljuk $\mathbf{A}^{(k+1)}$-et, hogy a mátrixhoz tartozó lineáris leképezésnek ugyanaz legyen a hatása ezen az altéren, mint az $\mathbf{A}^{(k)}$ leképezésnek. Azaz a (2.36) egyenleten kívül azt is megköveteljük, hogy

$$\mathbf{A}^{(k+1)}\mathbf{z}=\mathbf{A}^{(k)}\mathbf{z}, \quad \text{minden } \mathbf{z}\perp\mathbf{s}^{(k)}\text{-ra}. \tag{2.37}$$

(2.36) és (2.37) együtt egyértelműen meghatározza az $\mathbf{A}^{(k+1)}$ mátrixot. Könnyen belátható (2. feladat), hogy az

$$\mathbf{A}^{(k+1)}=\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{2.38}$$

mátrix teljesíti (2.36) és (2.37) egyenleteket.

A (2.31) rekurzív képletben igazából $(\mathbf{A}^{(k)})^{-1}$-re van szükségünk. Ennek kiszámítását teszi egyszerűbbé a következő tétel.

**2.58. tétel (Sherman–Morrison–Woodbury).** *Legyen $\mathbf{u},\mathbf{v}\in\mathbb{R}^n$, $\mathbf{u},\mathbf{v}\neq\mathbf{0}$ és $\mathbf{A}\in\mathbb{R}^{n\times n}$ invertálható. Ekkor az $\mathbf{A}+\mathbf{u}\mathbf{v}^T$ mátrix akkor és csak akkor invertálható, ha $1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\neq 0$, és ekkor*

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)^{-1}=\mathbf{A}^{-1}-\frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}}{1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}}$$

*teljesül.*

**Bizonyítás.** Legyen $\gamma\in\mathbb{R}$, és tekintsük a következő szorzatot:

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}.$$

Mivel $\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}$ skaláris szám, ezért az előző egyenlet átalakítható az

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+(1-\gamma-\gamma\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}$$

alakba, amiből következik az állítás. $\square$

A 2.58. tételt használva a (2.38) összefüggésre, rövid számolással kapjuk:

$$
\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1+(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{\left((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}-\mathbf{s}^{(k)}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}. \tag{2.39}
\end{aligned}
$$

Ismerve $(\mathbf{A}^{(k)})^{-1}$-t, csak mátrixszorzásokat alkalmazva kiszámítható $(\mathbf{A}^{(k+1)})^{-1}$, így ehhez csak $n^2$ nagyságrendű művelet kell, szemben azzal, hogy a mátrix invertálásához, mint azt majd a következő fejezetben megmutatjuk, $n^3$ nagyságrendű műveletre van szükség.

Megmutatható, hogy a Broyden-módszer lokálisan konvergál az $\mathbf{f}$ függvény egy $\mathbf{p}$ gyökéhez, és ha $\mathbf{A}^{(0)}$ elegendően közel van $\mathbf{f}'(\mathbf{p})$-hez, akkor a konvergencia rendje szuperlineáris, azaz

$$\lim_{k\to\infty}\frac{\|\mathbf{p}^{(k+1)}-\mathbf{p}\|}{\|\mathbf{p}^{(k)}-\mathbf{p}\|}=0.$$

Ezek bizonyításával itt nem foglalkozunk. A Broyden-módszer egy lehetséges változatát a következő algoritmusban közöljük.

**2.59. algoritmus. Broyden-módszer**

```
INPUT:
    f      - függvény,
    p(0)   - kezdeti érték,
    h      - lépésköz A(0) számításához,
    ||·||  - vektornorma,
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

(A = (a_ij) = A(0) kiszámítása)
for i = 1, ..., n do
    for j = 1, ..., n do
        a_ij ← (f_i(p(0) + h e(j)) - f_i(p(0)))/h
    end do
end do
A ← A^(-1)
q ← p(0)
k ← 1                  (lépésszám)
while k < MAXIT do
    s ← -A f(q)
    p ← q + s
    if ||s|| < TOL do
        output(p)
        stop
    end do
    y ← f(p) - f(q)
    A ← A - (Ay - s) s^T A / (s^T A y)
    q ← p
    k ← k + 1
end do
output(Maximális iterációszám túllépve)
```

**2.60. példa.** Tekintsük újra a 2.51. és 2.57. példákban vizsgált (2.25) egyenletrendszert! A 2.59. algoritmus eredménye erre az egyenletre a 2.14. táblázatban látható. Az utolsó oszlop mutatja, hogy a módszer szuperlineárisan konvergált. $\square$

**2.14. táblázat.** Broyden-módszer

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty$ | $\frac{\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty}{\|\mathbf{p}^{(k-1)}-\mathbf{p}\|_\infty}$ |
|---:|---|---|---|
| 0 | $(-1.5000000000, -1.5000000000)^T$ | 2.5000000000 | |
| 1 | $(-1.2490215360, -0.5215363883)^T$ | 2.2490215360 | 0.8996086144 |
| 2 | $(-0.4968297655, -0.9366983828)^T$ | 1.4968297660 | 0.6655471022 |
| 3 | $(-0.3045368940, -0.3621731989)^T$ | 1.3045368940 | 0.8715332389 |
| 4 | $(0.5414891937, -0.0587408442)^T$ | 0.4585108063 | 0.3514740046 |
| 5 | $(0.9527177435, -0.0515250779)^T$ | 0.0515250779 | 0.1123748387 |
| 6 | $(1.0003263340, 0.0319681269)^T$ | 0.0319681269 | 0.6204382061 |
| 7 | $(1.0000051000, -0.0040567750)^T$ | 0.0040567750 | 0.1269006155 |
| 8 | $(1.0000069210, -0.0000347010)^T$ | 0.0000347010 | 0.0085538489 |
| 9 | $(1.0000001100, 0.0000012682)^T$ | 0.0000012682 | 0.0365458110 |
| 10 | $(1.0000000050, 0.0000000576)^T$ | 0.0000000576 | 0.0453865979 |

**Feladatok**

1. Alkalmazza a Broyden-módszert a 2.11. szakasz 1. feladatában szereplő egyenletek megoldására!
2. Mutassa meg, hogy a (2.38) képlettel definiált $\mathbf{A}^{(k+1)}$ mátrix teljesíti a (2.36) és (2.37) egyenleteket!

---

*Forrás: Hartung Ferenc, Bevezetés a numerikus analízisbe, 2. fejezet (Pannon Egyetem). A teljes szöveg és matematika a könyv PDF-éből származik, és a fenti formátumban van megőrizve KaTeX-kompatibilis jelöléssel.*
