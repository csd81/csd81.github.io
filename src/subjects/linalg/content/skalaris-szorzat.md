# Skaláris szorzat az $\mathbb{R}^n$ vektortérben

<!-- OCR of "szorzat_jav_info.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 13 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Vektorok skaláris szorzata

Két $\mathbb{R}^n$-beli vektor skaláris szorzata: Legyen $\underline a=(a_1,a_2,\dots,a_n)$ és $\underline b=(b_1,b_2,\dots,b_n)$ két $\mathbb{R}^n$-beli vektor. Ekkor az $\underline a$ és $\underline b$ vektorok **skaláris szorzatán** (skalárszorzatán) az alábbi számot értjük:
$$a_1\cdot b_1+a_2\cdot b_2+\dots+a_n\cdot b_n$$

Jelölés: $\underline a\cdot\underline b$, $\langle\underline a,\underline b\rangle$

## A skaláris szorzat alaptulajdonságai

A skaláris szorzat alaptulajdonságai: Legyenek $\underline a,\underline b,\underline c\in\mathbb{R}^n$ és $\lambda\in\mathbb{R}$. Ekkor:

1. **bilineáris:**
$$\langle\underline a,\underline b+\underline c\rangle=\langle\underline a,\underline b\rangle+\langle\underline a,\underline c\rangle$$
$$\langle\underline a,\lambda\cdot\underline b\rangle=\lambda\cdot\langle\underline a,\underline b\rangle$$
$$\langle\underline a+\underline b,\underline c\rangle=\langle\underline a,\underline c\rangle+\langle\underline b,\underline c\rangle$$
$$\langle\lambda\cdot\underline a,\underline b\rangle=\lambda\cdot\langle\underline a,\underline b\rangle$$
2. **szimmetrikus:** $\langle\underline a,\underline b\rangle=\langle\underline b,\underline a\rangle$
3. **pozitív definit:** $\langle\underline a,\underline a\rangle\ge 0$ és $\langle\underline a,\underline a\rangle=0\Leftrightarrow\underline a=\underline o$

## Vektorok hossza

Egy $\mathbb{R}^n$-beli vektor hossza (normája): Legyen $\underline x\in\mathbb{R}^n$. Ekkor az $\underline x$ vektor hossza (normája):
$$\sqrt{\langle\underline x,\underline x\rangle}=\sqrt{x_1^2+\dots+x_n^2}$$
Jelölés: $|\underline x|$, $\|\underline x\|$

Megjegyzések: Legyen $\underline x\in\mathbb{R}^n$ és $\lambda\in\mathbb{R}$.
1. A fenti definíció és a skaláris szorzat pozitív definitsége miatt $\|\underline x\|\ge 0$ és $\|\underline x\|=0\Leftrightarrow\underline x=\underline o$.
2. Igazolható, hogy $\|\lambda\cdot\underline x\|=|\lambda|\cdot\|\underline x\|$.

Egy $\underline x\in\mathbb{R}^n$ vektort **egységre normáltnak** (egységvektornak) nevezünk, ha $\|\underline x\|=1$.

Igazolható, hogy bármely $\underline x\in\mathbb{R}^n$, $\underline x\ne\underline o$ esetén az $\dfrac{1}{\|\underline x\|}\cdot\underline x$ vektor egységre normált.

## Nevezetes egyenlőtlenségek

**Cauchy-Bunyakovszkij-Schwarz egyenlőtlenség:** Legyen $\underline x$ és $\underline y$ két tetszőleges $\mathbb{R}^n$-beli vektor. Ekkor:
$$|\langle\underline x,\underline y\rangle|\le\|\underline x\|\cdot\|\underline y\|,\quad\text{azaz}$$
$$\left|\sum_{i=1}^n x_i\cdot y_i\right|\le\sqrt{\sum_{i=1}^n x_i^2}\cdot\sqrt{\sum_{i=1}^n y_i^2},$$
és egyenlőség pontosan akkor áll fenn, ha $\underline x\parallel\underline y$.

**Minkowsky (vagy háromszög) egyenlőtlenség:** Legyen $\underline x$ és $\underline y$ két tetszőleges $\mathbb{R}^n$-beli vektor. Ekkor:
$$\|\underline x+\underline y\|\le\|\underline x\|+\|\underline y\|.$$

## Két vektor szöge

Két $\mathbb{R}^n$-beli vektor szöge: Legyen $\underline a$ és $\underline b$ két, nullvektortól különböző $\mathbb{R}^n$-beli vektor. Ekkor azt a $\varphi\in[0,\pi]$ szöget, melyre
$$\cos\varphi=\frac{\langle\underline a,\underline b\rangle}{\|\underline a\|\cdot\|\underline b\|}$$
teljesül, az $\underline a$ és $\underline b$ vektorok szögének nevezzük.

Speciális esetek: Legyenek $\underline a,\underline b\in\mathbb{R}^n$, $\underline a,\underline b\ne\underline o$.
- Ha $\langle\underline a,\underline b\rangle=0$, akkor $\varphi=\pi/2$.
- Ha $\underline a=\lambda\cdot\underline b$, akkor
  - $\lambda>0$ esetén $\varphi=0$, ilyenkor $\underline a$ és $\underline b$ egyirányú,
  - $\lambda<0$ esetén $\varphi=\pi$, ilyenkor $\underline a$ és $\underline b$ ellentétes.

## További állítások

1. Legyenek $\underline x,\underline y\in\mathbb{R}^n$, $\underline x,\underline y\ne\underline o$, jelölje $\varphi$ az $\underline x$ és $\underline y$ vektorok szögét. Ekkor:
$$\|\underline x-\underline y\|^2=\|\underline x\|^2+\|\underline y\|^2-2\cdot\|\underline x\|\cdot\|\underline y\|\cdot\cos\varphi\qquad\text{„cosinus-tétel"}$$
2. Legyenek $\underline x,\underline y\in\mathbb{R}^n$, $\underline x,\underline y\ne\underline o$, jelölje $\varphi$ az $\underline x$ és $\underline y$ vektorok szögét és legyen $\varphi=\pi/2$. Ekkor:
$$\|\underline x-\underline y\|^2=\|\underline x\|^2+\|\underline y\|^2\qquad\text{„Pitagorasz-tétel"}$$
3. Legyenek $\underline x,\underline y\in\mathbb{R}^n$, $\underline x,\underline y\ne\underline o$. Ekkor:
$$\|\underline x-\underline y\|^2+\|\underline x+\underline y\|^2=2\cdot\|\underline x\|^2+2\cdot\|\underline y\|^2\qquad\text{„paralelogramma-szabály"}$$

## Ortogonalitás

1. Legyen $\underline a$ és $\underline b$ két $\mathbb{R}^n$-beli vektor. Az $\underline a$ és $\underline b$ vektorokat **ortogonálisaknak nevezzük**, ha skaláris szorzatuk nulla.
2. Egy $H\subseteq\mathbb{R}^n$ vektorhalmaz **ortogonális**, ha páronként ortogonális, nullvektortól különböző vektorok alkotják.
3. Egy $H\subseteq\mathbb{R}^n$ vektorhalmaz **ortonormált**, ha ortogonális és vektorai egységre normáltak.

Megjegyzések:
1. $\underline a$ és $\underline b$ ortogonális $\Leftrightarrow\varphi=\pi/2$ vagy $\underline a=\underline o$ vagy $\underline b=\underline o$.
2. $\mathbb{R}^n$-ben a kanonikus bázis ortonormált.
3. Igazolható, hogy ha a $H\subseteq\mathbb{R}^n$ vektorhalmaz ortogonális, akkor $H$ lineárisan független.
4. Legyen $B=\{\underline b_1,\dots,\underline b_n\}$ ortonormált bázis $\mathbb{R}^n$-ben. Ekkor egy $\underline x\in\mathbb{R}^n$ vektor $B$ bázisra vonatkozó $i$-edik koordinátája: $\langle\underline x,\underline b_i\rangle$

## Fourier-együttható

Legyen $\underline v\in\mathbb{R}^n$, $\underline v\ne\underline o$ rögzített vektor. Ekkor igazolható, hogy bármely $\underline x\in\mathbb{R}^n$ vektor esetén egyértelműen létezik egy olyan $\alpha\in\mathbb{R}$ szám, amelyre az $\underline x-\alpha\cdot\underline v$ vektor és a $\underline v$ vektor ortogonális. Mégpedig:
$$\alpha=\frac{\langle\underline x,\underline v\rangle}{\langle\underline v,\underline v\rangle}$$

Ezt az $\alpha$ számot az $\underline x$ vektor $\underline v$ vektorra vonatkozó **Fourier-együtthatójának** nevezzük.

Megjegyzés: Ekkor az $\alpha\cdot\underline v$ vektor az $\underline x$ vektor $\underline v$ irányába eső merőleges vetületvektora.

## Ortogonális komplementer

Legyen $S\subseteq\mathbb{R}^n$, $S\ne\emptyset$.
1. Az $\underline x\in\mathbb{R}^n$ vektort $S$-re **ortogonálisnak** hívjuk, ha $\underline x$ ortogonális az $S$ vektorhalmaz minden vektorára.
2. Az $S$ vektorhalmaz **ortogonális komplementere** az $S$-re ortogonális vektorok összessége:
$$S^\perp=\{\underline x\in\mathbb{R}^n\mid\text{bármely }\underline s\in S\text{ esetén }\langle\underline x,\underline s\rangle=0\}.$$

Megjegyzés: Igazolható, hogy bármely $S\subseteq\mathbb{R}^n$, $S\ne\emptyset$ vektorhalmaz esetén $S^\perp$ altér $\mathbb{R}^n$-ben.

## Az ortogonális felbontás tétele

Legyen $H$ altér az $\mathbb{R}^n$ vektortérben. Ekkor:
1. $\mathbb{R}^n$ direkt összege a $H$ és $H^\perp$ altereknek:
$$\mathbb{R}^n=H\oplus H^\perp.$$
2. Legyen $\underline x\in\mathbb{R}^n$, $\underline x=\underline h+\underline h^\perp$, ahol $\underline h\in H$ és $\underline h^\perp\in H^\perp$. Ekkor:
$$\|\underline x\|^2=\|\underline h\|^2+\|\underline h^\perp\|^2.$$
3. A $H^\perp$ altér ortogonális komplementere $H$, azaz:
$$H^{\perp\perp}=H.$$

## Az ortogonális projekció

Legyen $H$ altér az $\mathbb{R}^n$ vektortérben. Tekintsük a következő leképezést:
$$\pi:\mathbb{R}^n\to\mathbb{R}^n,\ \underline x\mapsto\underline h,$$
$$\text{ahol }\underline x=\underline h+\underline h^\perp\text{ és }\underline h\in H,\ \underline h^\perp\in H^\perp.$$
A fenti leképezést a $H$ altérre való **ortogonális projekciónak** (merőleges vetítésnek) nevezzük.

A $\pi(\underline x)$ vektort az $\underline x$ vektor $H$ altérre eső **ortogonális vetületvektorának** hívjuk.

## Az ortogonális projekció tulajdonságai

Az előző definíció jelöléseit megtartva a $\pi$ ortogonális projekció tulajdonságai:
1. $\pi$ lineáris transzformáció
2. $\pi\circ\pi=\pi$
3. $\pi|_H=id|_H$, $\pi|_{H^\perp}=O$ (azonosan nulla leképezés)
4. Bármely $\underline x,\underline y\in\mathbb{R}^n$ esetén: $\langle\pi(\underline x),\underline y\rangle=\langle\underline x,\pi(\underline y)\rangle$
5. **Bessel-egyenlőtlenség:** $\|\pi(\underline x)\|\le\|\underline x\|$
6. **A legjobb approximáció tétele:** bármely $\underline x\in\mathbb{R}^n$ esetén a $\pi(\underline x)$ vetületvektor az $\underline x$-hez legközelebb eső $H$-beli vektor, azaz: bármely $\underline y\in H$-ra $\|\underline x-\pi(\underline x)\|\le\|\underline x-\underline y\|$ és egyenlőség pontosan akkor teljesül, ha $\underline y=\pi(\underline x)$.
