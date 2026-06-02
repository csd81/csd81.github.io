**10.3. A kerekítési hiba hatása az Euler-módszerre** 



## 1. A probléma háttere és a matematikai modell

Az előző fejezetben az Euler-módszer elméleti konvergenciáját vizsgáltuk, feltételezve, hogy a számításokat végtelen pontossággal végezzük. A gyakorlatban azonban a számítógépek véges lebegőpontos számábrázolást használnak, így elkerülhetetlenül kerekítési hibák lépnek fel:

1. A pontos $y_0$ kezdőérték helyett annak csak a kerekített gépi megfelelőjét ($w_0$) tudjuk tárolni.
2. Minden egyes iterációs lépés végrehajtásakor (a szorzások és összeadások során) egy újabb kerekítési hiba keletkezik.

A hibák követésére bevezetjük a következő jelöléseket:

* $y(t_i)$: a differenciálegyenlet elméleti, **pontos megoldása**.
* $z_i$: az elméleti, kerekítési hibák nélküli **pontos Euler-sorozat**.
* $w_i$: a számítógépen **ténylegesen kiszámított (kerekített) érték**.
* $\delta_0 := y_0 - w_0$: a **kezdeti kerekítési hiba**.
* $\delta_i$: az $i$-edik lépésben elkövetett **helyi kerekítési hiba**.

A ténylegesen végrehajtott algoritmus egyenlete így a következő perturbált rekurzió lesz:


$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, \dots, n-1 \tag{10.17}$$



## 2. A kerekítési hiba felhalmozódása ($|w_i - z_i|$)

Ha a perturbált (10.17) egyenletből kivonjuk a pontos Euler-módszer egyenletét, és alkalmazzuk a háromszög-egyenlőtlenséget, valamint az $f$ második változójára vonatkozó $L$ Lipschitz-konstanst, a hibaterjedésre az alábbi becslést kapjuk:


$$|w_{i+1} - z_{i+1}| \leq (1 + hL)|w_i - z_i| + \delta$$


ahol $\delta := \max\{|\delta_1|, |\delta_2|, \dots, |\delta_n|\}$ a maximális lépésenkénti kerekítési hiba.

Ebből a diszkrét Grönwall-lemma (10.3. tétel) segítségével levezethető, hogy a tiszta kerekítési hiba mekkora eltérést okoz az elméleti Euler-módszertől:


$$|w_i - z_i| \leq \frac{e^{L(T - t_0)} - 1}{L}\frac{\delta}{h} + |\delta_0|e^{L(T - t_0)}$$



## 3. A teljes hiba és a Végső Hibabecslési Tétel (10.6. Tétel)

A valóságban minket a **teljes hiba** érdekel, vagyis a pontos matematikai megoldás és a gép által kiadott érték távolsága ($|y(t_i) - w_i|$). A háromszög-egyenlőtlenség értelmében ez a hiba a **képlethiba** (csonkítási hiba) és a **kerekítési hiba** összege:


$$|y(t_i) - w_i| \leq \underbrace{|y(t_i) - z_i|}_{\text{Képlethiba}} + \underbrace{|z_i - w_i|}_{\text{Kerekítési hiba}}$$

> **10.6. Tétel:** Ha $f$ folytonos, az $y$ változójában $L$ konstanssal Lipschitz-folytonos, és mindkét változója szerint folytonosan parciálisan differenciálható, akkor a teljes numerikus hiba az alábbi módon korlátozható:
> 
> $$|y(t_i) - w_i| \leq \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)} \tag{10.18}$$
> 
> 
> 
> ahol $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ a megoldás második deriváltjának maximuma.



## 4. Az Euler-módszer aszimptotikus csapdája (Divergencia $h \to 0$ esetén)

A (10.18) hibabecslés legfontosabb és legmeglepőbb eleme a zárójelben lévő kifejezés:


$$E(h) = \frac{hM_2}{2} + \frac{\delta}{h}$$

Míg a tiszta képlethiba a $h$ csökkentésével lineárisan nullához tartana ($\frac{hM_2}{2} \to 0$), addig a kerekítési hiba tagjában a $h$ a **nevezőben szerepel** ($\frac{\delta}{h}$). Ennek súlyos elméleti és gyakorlati következménye van:


$$\lim_{h \to 0+} \left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty \tag{10.19}$$

* **Ha a lépésköz ($h$) túl nagy:** A képlethiba (csonkítási hiba) dominál, a közelítés pontatlan lesz.
* **Ha a lépésköz ($h$) túl kicsi:** Az időlépések száma ($n = (T-t_0)/h$) hatalmasra nő, így a milliónyi apró kerekítési hiba összeadódik és felhalmozódik. Mivel $\frac{\delta}{h} \to \infty$, a túlságosan kis lépésköz választása **teljesen tönkreteszi a számítás pontosságát és az algoritmus divergál**.

### Optimális lépésköz meghatározása

A differenciálszámítás segítségével (az $E(h)$ függvény $h$ szerinti deriválásával és nullává tételével) kiszámítható az az elméleti **optimális lépésköz ($h_{\mathrm{opt}}$)**, ahol a teljes hiba a lehető legkisebb:


$$E'(h) = \frac{M_2}{2} - \frac{\delta}{h^2} = 0 \implies h_{\mathrm{opt}} = \sqrt{\frac{2\delta}{M_2}}$$

A gyakorlatban, modern 64-bites double precision (kétszeres pontosságú) ábrázolás mellett a gép alapvető $\delta$ hibája rendkívül kicsi ($\approx 10^{-16}$), így a kerekítési hibák robbanása csak extrém kicsi $h$ értékeknél jelentkezik, de kritikus fontosságú mérnöki és stabilitási korlátot jelent.