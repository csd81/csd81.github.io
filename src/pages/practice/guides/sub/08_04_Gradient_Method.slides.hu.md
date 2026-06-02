# 8.4. Gradiens módszer

![az $f(x, y) = 4 - 3x^2 - y^2$ függvény felülete egy érintősíkkal](abra-felulet-gradiens.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

---

![a gradiensvektor merőleges a szintvonalra a $\mathbf{p} = (0.5, 0.5)$ pontban](abra-gradiens-meroleges.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

> **Theorem.** *Legyen $f\colon \mathbb{R}^2 \to \mathbb{R}$ folytonosan differenciálható. Ekkor az $f'(\mathbf{p})$ gradiens vektor merőleges az $f$ függvény $\mathbf{p}$ ponthoz tartozó szintvonalára, azaz a szintvonal $\mathbf{p}$ ponthoz tartozó érintőjére.*

---

> **Bizonyítás.** Legyen
>
> $$\gamma(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$$
>
> az $f$ függvény $\gamma(t_0) = \mathbf{p}$ ponthoz tartozó szintvonalának paraméteres előállítása, és legyen $f(\mathbf{p}) = c$. Ekkor
>
> $$f(x(t), y(t)) = f(\gamma(t)) = c, \qquad \text{minden } t\text{-re},$$
>
> így
>
> $$0 = \frac{d}{dt} f(\gamma(t)) = f'(\gamma(t))^T \gamma'(t), \qquad t \in \mathbb{R}.$$
>
> Ezért $t = t_0$-ra kapjuk
>
> $$f'(\mathbf{p})^T \gamma'(t_0) = 0,$$
>
> tehát $f'(\mathbf{p})$ merőleges a $\mathbf{p}$ ponthoz tartozó érintő irányvektorára, azaz a $\gamma'(t_0) = (x'(t_0), y'(t_0))^T$ vektorra. $\quad\square$

---

![az érintősík metszete a felülettel; a $\mathbf{u} = -f'(\mathbf{p})$ irány](abra-felulet-metszet.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

---

Tekintsünk egy $f\colon \mathbb{R}^n \to \mathbb{R}$ függvényt. Analízisből ismert tétel szerint egy $\mathbf{p}$ pontban az $f$ függvény a $-f'(\mathbf{p})$ irányban csökken a leggyorsabban:

> **Tétel.** *Legyen $f \in C^1$. Ekkor a*
>
> $$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$
>
> *iránymenti deriváltak minimuma az $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$ irányban van.*

Egy $\mathbf{u}$ irányt az $f$ függvény $\mathbf{p}$ pontbeli **lejtőjének** nevezzük, ha létezik olyan $\delta > 0$, hogy $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ minden $0 < t < \delta$-ra, azaz a függvény csökken a $\mathbf{p}$ pontból az $\mathbf{u}$ irány mentén indulva. A tételt úgy is megfogalmazhatjuk, hogy az $f$ függvénynek a $\mathbf{p}$ pontban a $-f'(\mathbf{p})$ irányban legmeredekebb a lejtője.

---

A **gradiens módszer** szerint egy $\mathbf{p}^{(0)}$ kezdeti pontból a negatív gradiensvektor irányában kell elmozdulni. Szokás az előbbiek miatt ezt a **legmeredekebb lejtő módszerének** is nevezni. A módszer általános képlete ezért:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{5}$$

ahol $\alpha_k$ a lépésközt meghatározó szorzótényező.

A legegyszerűbb esetben a lépésköz állandó. Legyen $h$ rögzített, és használjuk az

$$\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}$$

számot.

---

Egy másik változatban úgy választjuk meg a lépésközt, hogy

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

legyen, ahol

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{6}$$

Ekkor minden egyes lépésben a gradiensvektor által meghatározott egyenes mentén egy egyváltozós függvényt kell minimalizálni. Ez utóbbi módon választott lépésközt használó gradiens módszert **optimális gradiens módszernek** hívjuk.

---

Az optimális gradiens módszernél a gradiensvektorral párhuzamos egyenes mentén egy olyan pontig lépünk, ahol az egyenes érint egy szintvonalat. Abból a pontból pedig a pontbeli gradiensvektorral párhuzamosan lépünk tovább. Ebből következik, hogy az optimális gradiens módszernél az egymás utáni lépések irányai merőlegesek egymásra.

Megmutatható, hogy **az optimális gradiens módszer lokálisan lineárisan konvergens**. A sorozat aszimptotikus hibakonstansa néha közel van 1-hez, azaz a konvergencia lassú is lehet.

---

> **Példa.** Tekintsük újra az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényt. Először az $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$ lépésközzel futtatjuk a gradiens módszert, két kezdeti pontból indítva a módszert: a $(-1, 4)$ kezdeti értékből (piros karikák) és a $(0.5, 3.5)$ kezdeti értékből (lila karikák). A kapott sorozatok első 25 tagja a következő ábrán látható. A sorozatok lassan közelítik meg az $(1, 0.5)$ minimumhelyet (kék pont), és annak közelében oszcillálnak. Vegyük észre, hogy ahogy az analízisből ismert, a gradiensvektor merőleges a ponthoz tartozó szintvonalra, így a gradiens módszer sorozata mindig a szintvonalra merőleges irányban mozdul el.
>
> Ezután az optimális gradiens módszert alkalmaztuk a $(-1, 4)$ és az $(0.5, 3.5)$ kezdőpontból indulva. A két sorozat első 3 illetve 12 tagját a következő ábrán láthatjuk. Az első sorozat gyorsan a minimumhely közelébe került. A második is gyorsan a minimumhelyet tartalmazó hosszúkás „völgybe" került, de ezután ott csak lassan, cikcakkban haladt a minimumhely felé.

---

**Példa folyt.**

![Gradiens módszer konstans lépésközt használva](abra-gradiens-konstans.png)

*Gradiens módszer konstans lépésközt használva.*

![Optimális gradiens módszer](abra-gradiens-optimalis.png)

*Optimális gradiens módszer.*

---

Ha $f$ gradiensvektorát nem tudjuk vagy nem akarjuk kiszámolni (túl sok műveletet igényel), használhatjuk (5) következő változatát:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{7}$$

ahol a $\mathbf{v}^{(k)}$ vektor $i$-edik komponensét a

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n$$

képlettel számoljuk ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor).

---
