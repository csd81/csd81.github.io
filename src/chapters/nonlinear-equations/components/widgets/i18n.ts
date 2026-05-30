import { useLang } from '../../../../shared/providers/LanguageProvider'

/**
 * Bilingual UI labels shared by the chapter-2 interactive widgets. Keep keys
 * generic; widget-specific captions live next to each widget.
 */
export const WT = {
  preset: { en: 'Preset', hu: 'Példa' },
  custom: { en: 'custom', hu: 'egyéni' },
  maxIter: { en: 'max iterations', hu: 'max. iteráció' },
  step: { en: 'Step', hu: 'Lépés' },
  steps: { en: 'steps', hu: 'lépés' },
  reset: { en: 'Reset', hu: 'Alaphelyzet' },
  table: { en: 'Iterate table', hu: 'Iterációs tábla' },
  converged: { en: 'converged', hu: 'konvergens' },
  diverged: { en: 'did not converge', hu: 'nem konvergens' },
  inStep: { en: 'in', hu: '—' },
  root: { en: 'root', hu: 'gyök' },
  residual: { en: 'residual', hu: 'reziduum' },
  error: { en: 'error', hu: 'hiba' },
  errorBound: { en: 'error bound', hu: 'hibakorlát' },
  bracket: { en: 'bracket [a, b]', hu: 'beágyazó [a, b]' },
  noBracket: { en: 'f(a)·f(b) < 0 fails — pick a bracketing interval', hu: 'f(a)·f(b) < 0 nem teljesül — válassz előjelváltó intervallumot' },
  method: { en: 'Method', hu: 'Módszer' },
  methods: { en: 'Methods', hu: 'Módszerek' },
  width: { en: 'interval width', hu: 'intervallumhossz' },
  slope: { en: 'slope', hu: 'meredekség' },
  tangent: { en: 'tangent at pₖ', hu: 'érintő pₖ-ban' },
  chord: { en: 'secant chord', hu: 'húr (szelő)' },
  showTangent: { en: 'show tangent line', hu: 'érintő mutatása' },
  pValue: { en: 'p (norm exponent)', hu: 'p (norma kitevő)' },
  unitBall: { en: 'unit ball', hu: 'egységgömb' },
  trajectory: { en: 'trajectory', hu: 'pálya' },
  clickStart: { en: 'Click the plot to set the starting point', hu: 'Kattints a startponthoz' },
  ratio: { en: 'ratio', hu: 'arány' },
  iterations: { en: 'iterations', hu: 'iterációk' },
  value: { en: 'value', hu: 'érték' },
  show: { en: 'Show', hu: 'Mutat' },
  hide: { en: 'Hide', hu: 'Elrejt' },
  signChange: { en: 'sign change', hu: 'előjelváltás' },
} as const

export type WidgetStrings = { -readonly [K in keyof typeof WT]: string }

/** Hook returning the widget label set in the active (shared) language. */
export function useWidgetT(): WidgetStrings & { lang: 'en' | 'hu' } {
  const { lang, t } = useLang()
  const out = {} as WidgetStrings
  for (const k of Object.keys(WT) as (keyof typeof WT)[]) {
    out[k] = t(WT[k])
  }
  return { ...out, lang }
}
