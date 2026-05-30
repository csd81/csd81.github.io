import type { IterStep } from '../compute';

interface IterationTableProps {
  steps: IterStep[];
  highlightK?: number;
  showError: boolean;
  labels: { iteration: string; residual: string; error: string };
}

function fmt(v: number): string {
  if (!Number.isFinite(v)) return '∞';
  if (Math.abs(v) >= 1e6 || (Math.abs(v) < 1e-4 && v !== 0)) return v.toExponential(3);
  return v.toFixed(6);
}

export function IterationTable({ steps, highlightK, showError, labels }: IterationTableProps) {
  if (steps.length === 0) return null;
  const dim = steps[0].x.length;

  return (
    <div className="max-h-80 overflow-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table className="w-full border-collapse text-right font-mono text-xs">
        <thead className="sticky top-0 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <tr>
            <th className="px-2 py-1 text-center">{labels.iteration}</th>
            {Array.from({ length: dim }, (_, j) => (
              <th key={j} className="px-2 py-1">
                x{subscript(j + 1)}
              </th>
            ))}
            <th className="px-2 py-1">{labels.residual}</th>
            {showError && <th className="px-2 py-1">{labels.error}</th>}
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-200">
          {steps.map((s) => (
            <tr
              key={s.k}
              className={
                s.k === highlightK
                  ? 'bg-brand-100 dark:bg-brand-600/30'
                  : s.k % 2
                    ? 'bg-white dark:bg-slate-900'
                    : 'bg-slate-50 dark:bg-slate-800/50'
              }
            >
              <td className="px-2 py-1 text-center text-slate-500 dark:text-slate-400">{s.k}</td>
              {s.x.map((xi, j) => (
                <td key={j} className="px-2 py-1">
                  {fmt(xi)}
                </td>
              ))}
              <td className="px-2 py-1 text-slate-600 dark:text-slate-300">{fmt(s.residualNorm)}</td>
              {showError && (
                <td className="px-2 py-1 text-slate-600 dark:text-slate-300">
                  {s.errorNorm === null ? '—' : fmt(s.errorNorm)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function subscript(n: number): string {
  const map: Record<string, string> = {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉',
  };
  return String(n)
    .split('')
    .map((d) => map[d] ?? d)
    .join('');
}
