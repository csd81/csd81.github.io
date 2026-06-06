// Fuzzy Logic Toolbox — membership functions. These are MEX-backed in MATLAB (apply*/evaluate*
// cores), so the closed-form definitions are authored from the documented algorithm (type trimf …)
// and validated exactly against the live oracle. See fuzzy.VALIDATION.md.
import { type Value, map, toMat as m, toArray, scalar, asString, MatError } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Defuzzify a sampled membership function `mf` over universe `x` (centroid/bisector/mom/som/lom).
 *  Mirrors MATLAB's defuzz.m exactly (discrete sums; som/lom break ties by |x|). */
function defuzzScalar(x: number[], mf: number[], type: string): number {
  if (x.length !== mf.length) throw new MatError('Sizes mismatch in defuzzification.', 'fuzzy:general:errDefuzz_SizeMismatch');
  const n = x.length;
  if (type === 'centroid') {
    let area = 0, mom = 0;
    for (let k = 0; k < n; k++) { area += mf[k]; mom += mf[k] * x[k]; }
    if (area === 0) throw new MatError('Total area is zero in centroid defuzzification.', 'fuzzy:general:errDefuzz_ZeroAreaInCentroidMethod');
    return mom / area;
  }
  if (type === 'bisector') {
    let area = 0;
    for (let k = 0; k < n; k++) area += mf[k];
    if (area === 0) throw new MatError('Total area is zero in bisector defuzzification.', 'fuzzy:general:errDefuzz_ZeroAreaInBisectorMethod');
    let tmp = 0, k = 0;
    for (; k < n; k++) { tmp += mf[k]; if (tmp >= area / 2) break; }
    return x[k < n ? k : n - 1];
  }
  // max-based methods
  let mx = -Infinity;
  for (let k = 0; k < n; k++) if (mf[k] > mx) mx = mf[k];
  const atMax: number[] = [];
  for (let k = 0; k < n; k++) if (mf[k] === mx) atMax.push(x[k]);
  if (type === 'mom') return atMax.reduce((s, v) => s + v, 0) / atMax.length;
  if (type === 'som') { let best = atMax[0]; for (const v of atMax) if (Math.abs(v) < Math.abs(best)) best = v; return best; }
  if (type === 'lom') { let best = atMax[0]; for (const v of atMax) if (Math.abs(v) > Math.abs(best)) best = v; return best; }
  throw new MatError(`Unknown defuzzification method '${type}'.`, 'fuzzy:general:errDefuzz');
}
const sigScalar = (x: number, a: number, c: number) => 1 / (1 + Math.exp(-a * (x - c)));
const gaussScalar = (x: number, sig: number, c: number) => Math.exp(-((x - c) ** 2) / (2 * sig * sig));
/** S-shaped spline membership on [a,b]. */
function smfScalar(x: number, a: number, b: number): number {
  if (a >= b) return x >= (a + b) / 2 ? 1 : 0;       // degenerate → step at the midpoint
  if (x <= a) return 0;
  const mid = (a + b) / 2;
  if (x <= mid) return 2 * ((x - a) / (b - a)) ** 2;
  if (x < b) return 1 - 2 * ((x - b) / (b - a)) ** 2;
  return 1;
}
/** Z-shaped spline membership on [a,b] (independent of smf at the degenerate midpoint). */
function zmfScalar(x: number, a: number, b: number): number {
  if (a >= b) return x <= (a + b) / 2 ? 1 : 0;       // degenerate → step at the midpoint
  if (x <= a) return 1;
  const mid = (a + b) / 2;
  if (x <= mid) return 1 - 2 * ((x - a) / (b - a)) ** 2;
  if (x < b) return 2 * ((x - b) / (b - a)) ** 2;
  return 0;
}

export const FUZZY: ToolboxModule = {
  id: 'fuzzy',
  name: 'Fuzzy Logic Toolbox',
  docBase: 'https://www.mathworks.com/help/fuzzy/',
  builtins: {
    trimf: (a) => { const [p, q, r] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => { if (x === q) return 1; if (p < x && x < q) return (x - p) / (q - p); if (q < x && x < r) return (r - x) / (r - q); return 0; })); },
    trapmf: (a) => { const [p, q, r, s] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => { const y1 = x >= q ? 1 : x < p ? 0 : (x - p) / (q - p); const y2 = x <= r ? 1 : x > s ? 0 : (s - x) / (s - r); return Math.max(Math.min(y1, y2), 0); })); },
    gaussmf: (a) => { const [sig, c] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => gaussScalar(x, sig, c))); },
    gauss2mf: (a) => { const [s1, c1, s2, c2] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => (x < c1 ? gaussScalar(x, s1, c1) : x > c2 ? gaussScalar(x, s2, c2) : 1))); },
    gbellmf: (a) => { const [p, q, c] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => { if (x === c) return q === 0 ? 0.5 : q < 0 ? 0 : 1; return 1 / (1 + Math.abs((x - c) / p) ** (2 * q)); })); },
    sigmf: (a) => { const [p, c] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => sigScalar(x, p, c))); },
    dsigmf: (a) => { const [a1, c1, a2, c2] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => sigScalar(x, a1, c1) - sigScalar(x, a2, c2))); },
    psigmf: (a) => { const [a1, c1, a2, c2] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => sigScalar(x, a1, c1) * sigScalar(x, a2, c2))); },
    zmf: (a) => { const [p, q] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => zmfScalar(x, p, q))); },
    smf: (a) => { const [p, q] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => smfScalar(x, p, q))); },
    pimf: (a) => { const [p, q, r, s] = toArray(m(a[1])); return ret(map(m(a[0]), (x) => smfScalar(x, p, q) * zmfScalar(x, r, s))); },
    defuzz: (a) => ret(scalar(defuzzScalar(toArray(m(a[0])), toArray(m(a[1])), asString(a[2]).toLowerCase()))),
  },
  help: {
    trimf: { summary: 'Triangular membership function', syntax: ['y = trimf(x,params)'], description: ['y = trimf(x,[a b c]) returns the degree of membership of x in a triangular fuzzy set with feet at a and c and peak at b.'], seealso: ['trapmf', 'gaussmf', 'gbellmf'] },
    trapmf: { summary: 'Trapezoidal membership function', syntax: ['y = trapmf(x,params)'], description: ['y = trapmf(x,[a b c d]) returns the degree of membership of x in a trapezoidal fuzzy set defined by parameters a <= b <= c <= d.', 'The membership is 0 for x<a or x>d, rises linearly from a to b, is 1 for b<=x<=c, and falls linearly from c to d.'], seealso: ['trimf', 'gaussmf', 'pimf'] },
    gaussmf: { summary: 'Gaussian membership function', syntax: ['y = gaussmf(x,params)'], description: ['y = gaussmf(x,[sigma c]) returns membership values using a Gaussian curve centered at c with spread sigma.'], seealso: ['gauss2mf', 'gbellmf', 'trimf'] },
    gauss2mf: { summary: 'Two-sided Gaussian membership function', syntax: ['y = gauss2mf(x,params)'], description: ['y = gauss2mf(x,[sig1 c1 sig2 c2]) combines two Gaussian curves: the left side uses sig1 and c1 (for x<=c1), the right side uses sig2 and c2 (for x>=c2).', 'This creates an asymmetric bell shape useful for modeling asymmetric fuzzy sets.'], seealso: ['gaussmf', 'gbellmf', 'sigmf'] },
    gbellmf: { summary: 'Generalized bell-shaped membership function', syntax: ['y = gbellmf(x,params)'], description: ['y = gbellmf(x,[a b c]) computes the generalized bell MF 1/(1+|(x-c)/a|^(2b)).'], seealso: ['gaussmf', 'trimf', 'trapmf'] },
    sigmf: { summary: 'Sigmoidal membership function', syntax: ['y = sigmf(x,params)'], description: ['y = sigmf(x,[a c]) returns 1/(1+exp(-a*(x-c))).', 'The parameter a controls the slope and c sets the crossover point where sigmf equals 0.5.'], seealso: ['dsigmf', 'psigmf', 'smf'] },
    dsigmf: { summary: 'Difference of two sigmoidal membership functions', syntax: ['y = dsigmf(x,params)'], description: ['y = dsigmf(x,[a1 c1 a2 c2]) returns sigmf(x,[a1,c1]) - sigmf(x,[a2,c2]).'], seealso: ['sigmf', 'psigmf', 'smf'] },
    psigmf: { summary: 'Product of two sigmoidal membership functions', syntax: ['y = psigmf(x,params)'], description: ['y = psigmf(x,[a1 c1 a2 c2]) returns sigmf(x,[a1,c1]) .* sigmf(x,[a2,c2]).', 'By choosing a1>0 and a2<0 with c1<c2, the result is a bell-shaped MF.'], seealso: ['sigmf', 'dsigmf', 'gauss2mf'] },
    zmf: { summary: 'Z-shaped membership function', syntax: ['y = zmf(x,params)'], description: ['y = zmf(x,[a b]) returns a spline-based Z-shaped curve with value 1 for x<=a and 0 for x>=b.'], seealso: ['smf', 'pimf', 'trapmf'] },
    smf: { summary: 'S-shaped membership function', syntax: ['y = smf(x,params)'], description: ['y = smf(x,[a b]) returns a spline-based S-shaped curve with value 0 for x<=a and 1 for x>=b.', 'It is the complement of zmf and useful for high-valued membership regions.'], seealso: ['zmf', 'pimf', 'sigmf'] },
    pimf: { summary: 'Pi-shaped membership function', syntax: ['y = pimf(x,params)'], description: ['y = pimf(x,[a b c d]) returns a bell-shaped pi curve: rises as smf on [a,b], is 1 on [b,c], and falls as zmf on [c,d].', 'It is the product smf(x,[a,b]) .* zmf(x,[c,d]).'], seealso: ['smf', 'zmf', 'trapmf'] },
    defuzz: { summary: 'Defuzzify membership function to scalar', syntax: ['out = defuzz(x,mf,type)'], description: ["out = defuzz(x,mf,type) defuzzifies the fuzzy set defined by universe x and membership values mf using method type: 'centroid', 'bisector', 'mom', 'som', or 'lom'."], seealso: ['trimf', 'gaussmf', 'evalfis'] },
  },
};
