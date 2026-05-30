import type { Mat } from '../compute';

interface MatrixInputProps {
  value: Mat;
  onChange: (m: Mat) => void;
  label?: string;
  minSize?: number;
  maxSize?: number;
  onResize?: (n: number) => void;
  readOnly?: boolean;
}

export function MatrixInput({
  value,
  onChange,
  label,
  minSize = 2,
  maxSize = 6,
  onResize,
  readOnly = false,
}: MatrixInputProps) {
  const n = value.length;

  const setCell = (i: number, j: number, raw: string) => {
    const num = raw === '' || raw === '-' ? 0 : Number(raw);
    if (Number.isNaN(num)) return;
    const next = value.map((row) => [...row]);
    next[i][j] = num;
    onChange(next);
  };

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        {label && <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>}
        {onResize && (
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <button
              className="rounded border border-slate-300 px-2 py-0.5 hover:bg-slate-100 disabled:opacity-40 dark:border-slate-600 dark:hover:bg-slate-700"
              onClick={() => onResize(n - 1)}
              disabled={n <= minSize}
              aria-label="decrease size"
            >
              −
            </button>
            <span className="w-10 text-center font-mono">
              {n}×{n}
            </span>
            <button
              className="rounded border border-slate-300 px-2 py-0.5 hover:bg-slate-100 disabled:opacity-40 dark:border-slate-600 dark:hover:bg-slate-700"
              onClick={() => onResize(n + 1)}
              disabled={n >= maxSize}
              aria-label="increase size"
            >
              +
            </button>
          </span>
        )}
      </div>
      <div
        className="inline-grid gap-1 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
      >
        {value.flatMap((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              type="number"
              step="any"
              value={Number.isFinite(cell) ? +cell.toFixed(6) : 0}
              onChange={(e) => setCell(i, j, e.target.value)}
              readOnly={readOnly}
              className="w-16 rounded border border-slate-200 bg-slate-50 px-1 py-1 text-center font-mono text-sm focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          )),
        )}
      </div>
    </div>
  );
}
