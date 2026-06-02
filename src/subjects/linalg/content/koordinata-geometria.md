# Koordináta-geometria

<!-- OCR of "koordinata_geom.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 11 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Vektorok a koordináta-rendszerben

A síkbeli vektorokat **helyvektorokként** helyezzük el a síkbeli, derékszögű (Descartes-féle) koordináta-rendszerben.

Ekkor minden síkbeli vektor egyértelműen felbontható a koordináta-tengelyek irányába eső összetevőkre:
$$\underline v=v_1\cdot\underline i+v_2\cdot\underline j$$

*Ábra: a $P=(v_1,v_2)$ pontba mutató $\underline v$ helyvektor a derékszögű koordináta-rendszerben, az $\underline i$ és $\underline j$ egységvektorokkal.*

## Vektorok koordináta-rendszerben (folyt.)

- A $\underline v$ vektor koordináta-tengelyek irányába eső összetevői: $v_1\cdot\underline i$, $v_2\cdot\underline j$
- A $\underline v$ vektor koordinátái: $v_1$, $v_2$
- Megjegyzés: A $\underline v$ helyvektor koordinátái azonosak végpontjának koordinátáival.

Jel.: $\underline v=(v_1,v_2)$

- A $\underline v$ vektor hossza (a Pitagorasz-tétel alapján):
$$\left|\underline v\right|=\sqrt{v_1{}^2+v_2{}^2}$$

## Vektorműveletek koordinátákkal

Legyenek $\underline a=(a_1,a_2)$ és $\underline b=(b_1,b_2)$ síkbeli vektorok, $\lambda\in\mathbb{R}$ skalár.

- **Összeadás:**
$$\underline a+\underline b=(a_1+b_1,\ a_2+b_2)$$
- **Skalárral való szorzás:**
$$\lambda\cdot\underline a=(\lambda\cdot a_1,\ \lambda\cdot a_2)$$
- **A különbség:**
$$\underline a-\underline b=(a_1-b_1,\ a_2-b_2)$$
- **Skaláris szorzás:**
$$\underline a\cdot\underline b=a_1\cdot b_1+a_2\cdot b_2$$

## Ponthalmaz, görbe egyenlete

Egy adott **görbe egyenletének** azt az egyenletet nevezzük, amelyet a görbéhez tartozó összes pont koordinátái, és csak ezen pontok koordinátái elégítenek ki.

Vizsgált görbék:
- egyenes
- kör

## Egyenes

**Általános egyenlet:** $a\,x+b\,y=c$
- Ha $a=0$ és $b\ne 0$, akkor az $x$ tengellyel párhuzamos az egyenes,
- Ha $a\ne 0$ és $b=0$, akkor az $y$ tengellyel párhuzamos az egyenes,
- Ha $c=0$, akkor az origón áthaladó az egyenes,
- Az $a$ és $b$ egyszerre nem lehet nulla.

## Az egyenes különböző egyenletei

1. **Meredekség, tengelymetszet alapján:** $y=m\,x+b$
   - $m$: az egyenes meredeksége,
   - $b$: megmutatja, hogy az egyenes hol metszi az $y$ tengelyt.

   *Ez az alak nem használható, ha az egyenes párhuzamos az $y$ tengellyel.*

2. **Meredekség, adott pont alapján:** $y-y_0=m\cdot(x-x_0)$
   - $m$: az egyenes meredeksége,
   - $P_0(x_0,y_0)$ az egyenes egy adott pontja.

   *Ez az alak nem használható, ha az egyenes párhuzamos az $y$ tengellyel.*

## Az egyenes különböző egyenletei (folyt.)

3. **Két adott pont alapján:**
$$y-y_1=\frac{y_2-y_1}{x_2-x_1}\cdot(x-x_1)$$
   - $P_1(x_1,y_1)$ és $P_2(x_2,y_2)$ az egyenes két adott pontja.

   *Az $y$ tengellyel párhuzamos egyenes esetén a fenti egyenlet az alábbi formában használható:*
   $$(y-y_1)(x_2-x_1)=(x-x_1)(y_2-y_1)$$

4. **Egy adott pont és egy irányvektor alapján:**
$$v_2\,x-v_1\,y=v_2\,x_0-v_1\,y_0$$
   - $P_0(x_0,y_0)$ az egyenes egy adott pontja,
   - $\underline v(v_1,v_2)$ az egyenes egy irányvektora.

## Az egyenes különböző egyenletei (folyt.)

5. **Egy adott pont és egy normálvektor alapján:**
$$A\,x+B\,y=A\,x_0+B\,y_0$$
   - $P_0(x_0,y_0)$ az egyenes egy adott pontja,
   - $\underline n(A,B)$ az egyenes egy normálvektora.

## Egyenesek párhuzamossága, merőlegessége

**Két egyenes párhuzamos, ha**
- irányvektoraik párhuzamosak,
- normálvektoraik párhuzamosak,
- meredekségük egyenlő, vagy nincs nekik.

**Két egyenes merőleges, ha**
- irányvektoraik merőlegesek (skaláris szorzatuk 0),
- normálvektoraik merőlegesek (skaláris szorzatuk 0),
- meredekségük szorzata $-1$, vagy az egyiknek 0 és a másiknak nincs.

## Kör egyenlete

**Kör egyenlete:** $(x-u)^2+(y-v)^2=r^2$

ahol:
- $K(u,v)$ a kör középpontja,
- $r$ a kör sugara.
