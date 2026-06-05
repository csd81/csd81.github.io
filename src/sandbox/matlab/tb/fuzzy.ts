// Fuzzy Logic Toolbox — membership functions. These are MEX-backed in MATLAB (apply*/evaluate*
// cores), so the closed-form definitions are authored from the documented algorithm (type trimf …)
// and validated exactly against the live oracle. See fuzzy.VALIDATION.md.
import { type Value, map, toMat as m, toArray } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
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
  },
  help: {
    trimf: 'Triangular membership function', trapmf: 'Trapezoidal membership function',
    gaussmf: 'Gaussian membership function', gauss2mf: 'Two-sided Gaussian membership function',
    gbellmf: 'Generalized bell-shaped membership function', sigmf: 'Sigmoidal membership function',
    dsigmf: 'Difference of two sigmoidal membership functions', psigmf: 'Product of two sigmoidal membership functions',
    zmf: 'Z-shaped membership function', smf: 'S-shaped membership function', pimf: 'Pi-shaped membership function',
  },
};
