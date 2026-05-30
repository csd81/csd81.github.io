import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { compile, referenceDerivative } from '../../lib/mathEval';
import { DIFF_METHODS, type DiffMethodId, absError } from '../../lib/numerics';
import Slider from '../../components/Slider';
import Plot, { type Segment, type PointMark } from '../../components/Plot';
import FunctionPicker from './FunctionPicker';
import ResultPanel from './ResultPanel';

const METHOD_IDS: DiffMethodId[] = ['forward', 'backward', 'central', 'five-point', 'second'];

export default function DerivativePlayground() {
  const { t } = useTranslation();
  const [expr, setExpr] = useState('exp(x^2 + x)');
  const [method, setMethod] = useState<DiffMethodId>('central');
  const [x0, setX0] = useState(0);
  const [h, setH] = useState(0.1);

  const compiled = useMemo(() => compile(expr), [expr]);
  const order = DIFF_METHODS[method].order;

  const { approx, reference, error, segments, points } = useMemo(() => {
    if (!compiled.ok) {
      return { approx: NaN, reference: NaN, error: NaN, segments: [], points: [] };
    }
    const f = compiled.f;
    const approx = DIFF_METHODS[method].apply(f, x0, h);
    const reference = referenceDerivative(expr, x0, order);
    const error = absError(approx, reference);

    const segments: Segment[] = [];
    const points: PointMark[] = [];
    const f0 = f(x0);
    points.push({ x: x0, y: f0, color: '#ef4444' });

    if (order === 1) {
      // True tangent (dashed) vs. the difference-quotient secant (solid amber).
      const span = Math.max(2 * h, 1);
      const tx0 = x0 - span;
      const tx1 = x0 + span;
      segments.push({
        points: [
          [tx0, f0 + reference * (tx0 - x0)],
          [tx1, f0 + reference * (tx1 - x0)],
        ],
        color: '#10b981',
        dashed: true,
      });
      if (method === 'central' || method === 'five-point') {
        points.push({ x: x0 - h, y: f(x0 - h) }, { x: x0 + h, y: f(x0 + h) });
        segments.push({ points: [[x0 - h, f(x0 - h)], [x0 + h, f(x0 + h)]], color: '#f59e0b' });
      } else if (method === 'forward') {
        points.push({ x: x0 + h, y: f(x0 + h) });
        segments.push({ points: [[x0, f0], [x0 + h, f(x0 + h)]], color: '#f59e0b' });
      } else {
        points.push({ x: x0 - h, y: f(x0 - h) });
        segments.push({ points: [[x0 - h, f(x0 - h)], [x0, f0]], color: '#f59e0b' });
      }
    } else {
      points.push({ x: x0 - h, y: f(x0 - h) }, { x: x0 + h, y: f(x0 + h) });
    }
    return { approx, reference, error, segments, points };
  }, [compiled, method, x0, h, expr, order]);

  const span = Math.max(2.5 * h, 1.5);

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

        <Slider label={t('playground.x0')} value={x0} min={-3} max={3} step={0.1} onChange={setX0} format={(v) => v.toFixed(2)} />
        <Slider label={t('playground.h')} value={h} min={0.01} max={1} step={0.01} onChange={setH} format={(v) => v.toFixed(2)} />

        <ResultPanel approx={approx} reference={reference} error={error} />
      </div>

      <div className="card">
        <Plot f={compiled.f} xMin={x0 - span} xMax={x0 + span} segments={segments} points={points} />
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1"><span className="inline-block h-1 w-4 rounded bg-brand-500" /> f(x)</span>
          {order === 1 && (
            <>
              <span className="flex items-center gap-1"><span className="inline-block h-1 w-4 rounded bg-amber-500" /> {t('playground.approx')}</span>
              <span className="flex items-center gap-1"><span className="inline-block h-1 w-4 rounded bg-emerald-500" /> {t('playground.reference')}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
