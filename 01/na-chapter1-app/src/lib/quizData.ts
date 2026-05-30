import type { Lang } from '../context/LangContext'

interface Bi {
  en: string
  hu: string
}

export interface QuizQuestion {
  id: string
  prompt: Bi
  options: Bi[]
  correct: number
  explain: Bi
}

export function localize(b: Bi, lang: Lang): string {
  return b[lang]
}

export const QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: {
      en: 'Replacing sin x by its degree-5 Taylor polynomial introduces which kind of error?',
      hu: 'A sin x ötödfokú Taylor-polinommal való helyettesítése milyen hibát okoz?',
    },
    options: [
      { en: 'Truncation error', hu: 'Képlethiba' },
      { en: 'Rounding error', hu: 'Kerekítési hiba' },
      { en: 'Measurement error', hu: 'Mérési hiba' },
      { en: 'Modeling error', hu: 'Modellhiba' },
    ],
    correct: 0,
    explain: {
      en: 'Swapping an exact expression for an approximate formula is a truncation error (a computational error).',
      hu: 'Egy pontos kifejezés közelítő képletre cserélése képlethiba (számítási hiba).',
    },
  },
  {
    id: 'q2',
    prompt: {
      en: 'Determining a model parameter by measurement contributes to…',
      hu: 'Egy modellparaméter méréssel való meghatározása ehhez járul hozzá:',
    },
    options: [
      { en: 'Inherited error (measurement)', hu: 'Örökölt hiba (mérési)' },
      { en: 'Rounding error', hu: 'Kerekítési hiba' },
      { en: 'Truncation error', hu: 'Képlethiba' },
      { en: 'No error at all', hu: 'Semmilyen hiba' },
    ],
    correct: 0,
    explain: {
      en: 'Measurement error is a sub-type of inherited error, present before any computation begins.',
      hu: 'A mérési hiba az örökölt hiba egyik fajtája, már a számítás előtt jelen van.',
    },
  },
  {
    id: 'q3',
    prompt: {
      en: 'A problem where a 0.14% change in a coefficient swings the solution by 75% is…',
      hu: 'Az a feladat, ahol egy 0,14%-os együttható-változás 75%-kal mozdítja a megoldást…',
    },
    options: [
      { en: 'Ill-conditioned (unstable)', hu: 'Rosszul kondicionált (instabil)' },
      { en: 'Well-conditioned', hu: 'Jól kondicionált' },
      { en: 'Always unsolvable', hu: 'Mindig megoldhatatlan' },
      { en: 'Linear and harmless', hu: 'Lineáris és ártalmatlan' },
    ],
    correct: 0,
    explain: {
      en: 'Large output sensitivity to tiny input changes is exactly ill-conditioning.',
      hu: 'A kimenet nagy érzékenysége apró bemeneti változásra épp a rossz kondicionáltság.',
    },
  },
  {
    id: 'q4',
    prompt: {
      en: 'The recursions xₙ, yₙ, zₙ all equal 1/3ⁿ. In single precision, which one stays accurate?',
      hu: 'Az xₙ, yₙ, zₙ rekurziók mind 1/3ⁿ. Egyszeres pontosságban melyik marad pontos?',
    },
    options: [
      { en: 'xₙ = ⅓·xₙ₋₁', hu: 'xₙ = ⅓·xₙ₋₁' },
      { en: 'zₙ (the 13/3, 4/3 one)', hu: 'zₙ (a 13/3, 4/3-os)' },
      { en: 'All diverge equally', hu: 'Mind egyformán divergál' },
      { en: 'None can be computed', hu: 'Egyik sem számolható' },
    ],
    correct: 0,
    explain: {
      en: 'xₙ is a stable algorithm; zₙ amplifies rounding error until it reaches order 10² by n=18.',
      hu: 'Az xₙ stabil; a zₙ felnagyítja a kerekítési hibát, n=18-ra már 10² nagyságrendű.',
    },
  },
  {
    id: 'q5',
    prompt: {
      en: 'Evaluating a degree-n polynomial by Horner’s method costs how many multiplications?',
      hu: 'Egy n-edfokú polinom Horner-módszerrel hány szorzásba kerül?',
    },
    options: [
      { en: 'n', hu: 'n' },
      { en: 'n²', hu: 'n²' },
      { en: '2n', hu: '2n' },
      { en: 'n! ', hu: 'n!' },
    ],
    correct: 0,
    explain: {
      en: 'Horner needs exactly n multiplications and n additions, versus ~n(n+1)/2 the naïve way.',
      hu: 'A Horner pontosan n szorzást és n összeadást igényel, szemben a naív ~n(n+1)/2-vel.',
    },
  },
  {
    id: 'q6',
    prompt: {
      en: 'On m bits, the two’s-complement scheme represents which range of integers?',
      hu: 'm biten a kettes komplemens séma melyik egész-tartományt ábrázolja?',
    },
    options: [
      { en: '−2ᵐ⁻¹ … 2ᵐ⁻¹−1', hu: '−2ᵐ⁻¹ … 2ᵐ⁻¹−1' },
      { en: '0 … 2ᵐ−1', hu: '0 … 2ᵐ−1' },
      { en: '−2ᵐ … 2ᵐ', hu: '−2ᵐ … 2ᵐ' },
      { en: '−(2ᵐ⁻¹−1) … 2ᵐ⁻¹−1', hu: '−(2ᵐ⁻¹−1) … 2ᵐ⁻¹−1' },
    ],
    correct: 0,
    explain: {
      en: 'Two’s-complement is asymmetric: one extra negative value and a single zero.',
      hu: 'A kettes komplemens aszimmetrikus: eggyel több negatív érték és egyetlen nulla.',
    },
  },
  {
    id: 'q7',
    prompt: {
      en: 'In IEEE-754 single precision, the exponent field all-ones with a zero mantissa encodes…',
      hu: 'IEEE-754 egyszeres pontosságban a csupa-egyes kitevő nulla mantisszával ezt kódolja:',
    },
    options: [
      { en: '±Inf', hu: '±Inf' },
      { en: 'NaN', hu: 'NaN' },
      { en: 'The largest normal number', hu: 'A legnagyobb normál szám' },
      { en: 'Zero', hu: 'Nulla' },
    ],
    correct: 0,
    explain: {
      en: 'e = 255 with zero fraction is ±infinity; a nonzero fraction would be NaN.',
      hu: 'e = 255 nulla törtrésszel ±végtelen; nemnulla törtrész esetén NaN lenne.',
    },
  },
  {
    id: 'q8',
    prompt: {
      en: 'Machine epsilon εₘ for single precision (23 stored mantissa bits) equals…',
      hu: 'A gépi epszilon εₘ egyszeres pontosságra (23 tárolt mantissza-bit) ennyi:',
    },
    options: [
      { en: '2⁻²³', hu: '2⁻²³' },
      { en: '2⁻⁵²', hu: '2⁻⁵²' },
      { en: '10⁻³⁸', hu: '10⁻³⁸' },
      { en: '2⁻⁷', hu: '2⁻⁷' },
    ],
    correct: 0,
    explain: {
      en: 'εₘ = 2⁻ᵗ for base 2 with t mantissa bits; here t = 23.',
      hu: 'εₘ = 2⁻ᵗ kettes alapnál t mantissza-bittel; itt t = 23.',
    },
  },
  {
    id: 'q9',
    prompt: {
      en: 'x̃ is "exact in n digits" (base 10) when the relative error is at most…',
      hu: 'x̃ „n jegyben pontos” (10-es alap), ha a relatív hiba legfeljebb…',
    },
    options: [
      { en: '½·10¹⁻ⁿ', hu: '½·10¹⁻ⁿ' },
      { en: '10⁻ⁿ', hu: '10⁻ⁿ' },
      { en: '½·10ⁿ', hu: '½·10ⁿ' },
      { en: '2⁻ⁿ', hu: '2⁻ⁿ' },
    ],
    correct: 0,
    explain: {
      en: 'Definition: |x−x̃|/|x| ≤ ½·b¹⁻ⁿ, with b = 10.',
      hu: 'Definíció: |x−x̃|/|x| ≤ ½·b¹⁻ⁿ, ahol b = 10.',
    },
  },
  {
    id: 'q10',
    prompt: {
      en: 'Which operation can dramatically magnify the relative error (loss of significance)?',
      hu: 'Melyik művelet nagyíthatja drámaian a relatív hibát (értékes jegyek elvesztése)?',
    },
    options: [
      { en: 'Subtracting two nearly equal numbers', hu: 'Két közel egyenlő szám kivonása' },
      { en: 'Multiplying two numbers', hu: 'Két szám szorzása' },
      { en: 'Adding two positive numbers', hu: 'Két pozitív szám összeadása' },
      { en: 'Dividing by 2', hu: 'Osztás 2-vel' },
    ],
    correct: 0,
    explain: {
      en: 'In x−y the bound has factor x/(x−y); when x≈y this blows up.',
      hu: 'Az x−y korlátjában x/(x−y) tényező áll; ha x≈y, ez felrobban.',
    },
  },
  {
    id: 'q11',
    prompt: {
      en: 'Why rewrite the small quadratic root as 2c/(−b−√…) instead of (−b+√…)/2a?',
      hu: 'Miért írjuk át a kis másodfokú gyököt 2c/(−b−√…) alakra a (−b+√…)/2a helyett?',
    },
    options: [
      { en: 'To avoid subtracting nearly equal numbers', hu: 'Hogy elkerüljük közel egyenlő számok kivonását' },
      { en: 'To use fewer multiplications', hu: 'Hogy kevesebb szorzást használjunk' },
      { en: 'Because the first formula is wrong', hu: 'Mert az első képlet hibás' },
      { en: 'To make it run faster', hu: 'Hogy gyorsabban fusson' },
    ],
    correct: 0,
    explain: {
      en: 'The rewrite adds two positive numbers in the denominator — no cancellation, full accuracy.',
      hu: 'Az átírás két pozitív számot ad össze a nevezőben — nincs kiejtés, teljes pontosság.',
    },
  },
  {
    id: 'q12',
    prompt: {
      en: 'In 4-digit arithmetic, adding many tiny numbers to a large one is best done by…',
      hu: '4-jegyű aritmetikában sok apró szám egy nagyhoz adása legjobb, ha…',
    },
    options: [
      { en: 'Summing smallest terms first', hu: 'Először a legkisebb tagokat összegezzük' },
      { en: 'Summing largest term first', hu: 'Először a legnagyobb tagot vesszük' },
      { en: 'Order never matters', hu: 'A sorrend sosem számít' },
      { en: 'Multiplying instead', hu: 'Inkább szorzunk' },
    ],
    correct: 0,
    explain: {
      en: 'Smallest-first keeps partial sums comparable in magnitude, so tiny terms aren’t rounded away. FP addition isn’t commutative!',
      hu: 'A legkisebbtől kezdve a részösszegek azonos nagyságrendűek maradnak, így az apró tagok nem vesznek el. A lebegőpontos összeadás nem kommutatív!',
    },
  },
]
