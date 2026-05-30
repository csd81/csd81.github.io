import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { compile } from '../../lib/mathEval';
import {
  INT_METHODS,
  type IntMethodId,
  referenceIntegral,
  absError,
  GAUSS_TABLE,
} from '../../lib/numerics';
import Slider from '../../components/Slider';
import Plot, { type Area, type PointMark } from '../../components/Plot';
import FunctionPicker from './FunctionPicker';
import ResultPanel from './ResultPanel';

const METHOD_IDS: IntMethodId[] = ['trapezoid', 'simpson', 'gauss2', 'gauss3', 'gauss4', 'gauss5'];

export default function IntegralPlayground() {
  const { t } = useTranslation();
  const [expr, setExpr] = useState('x^2 * exp(x)');
  const [method, setMethod] = useState<IntMethodId>('simpson');
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [n, setN] = useState(4);

  const compiled = useMemo(() => compile(expr), [expr]);
  const usesN = INT_METHODS[method].usesN;

  const { approx, reference, error, areas, points } = useMemo(() => {
    if (!compiled.ok || b <= a) {
      return { approx: NaN, reference: NaN, error: NaN, areas: [], points: [] };
    }
    const f = compiled.f;
    const approx = INT_METHODS[method].apply(f, a, b, n);
    const reference = referenceIntegral(f, a, b);
    const error = absError(approx, reference);

    const areas: Area[] = [];
    const points: PointMark[] = [];

    if (method === 'trapezoid') {
      const h = (b - a) / n;
      for (let i = 0; i < n; i++) {
        const xi = a + i * h;
        const xj = xi + h;
        areas.push({ points: [[xi, 0], [xi, f(xi)], [xj, f(xj)], [xj, 0]] });
      }
    } else {
      // Shade the region under the curve, sampled finely.
      const pts: [number, number][] = [[a, 0]];
      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const xv = a + ((b - a) * i) / steps;
        pts.push([xv, f(xv)]);
      }
      pts.push([b, 0]);
      areas.push({ points: pts });

      if (method.startsWith('gauss')) {
        const k = Number(method.slice(5)) as 2 | 3 | 4 | 5;
        const half = (b - a) / 2;
        const mid = (a + b) / 2;
        for (const node of GAUSS_TABLE[k].nodes) {
          const x = half * node + mid;
          points.push({ x, y: f(x), color: '#ef4444' });
        }
      }
    }
    return { approx, reference, error, areas, points };
  }, [compiled, method, a, b, n]);

  const pad = (b - a) * 0.1 || 0.2;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="card space-y-4">
        <FunctionPicker expr={expr} onChange={setExpr} valid={compiled.ok} />

        <div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {t('playground.method')}
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {METHOD_IDS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                className={`chip border transition ${
                  method === m
                    ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {t(`playground.methods.${m}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Slider label={t('playground.a')} value={a} min={-3} max={3} step={0.1} onChange={setA} format={(v) => v.toFixed(2)} />
          <Slider label={t('playground.b')} value={b} min={-3} max={4} step={0.1} onChange={setB} format={(v) => v.toFixed(2)} />
        </div>
        {usesN && (
          <Slider label={t('playground.n')} value={n} min={2} max={20} step={method === 'simpson' ? 2 : 1} onChange={setN} />
        )}

        <ResultPanel approx={approx} reference={reference} error={error} />
      </div>

      <div className="card">
        <Plot f={compiled.f} xMin={a - pad} xMax={b + pad} areas={areas} points={points} />
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1"><span className="inline-block h-1 w-4 rounded bg-brand-500" /> f(x)</span>
          <span className="flex items-center gap-1"><span className="inline-block h-3 w-4 rounded bg-accent-500/30" /> ∫ region</span>
          {method.startsWith('gauss') && (
            <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-red-500" /> nodes</span>
          )}
        </div>
      </div>
    </div>
  );
}
