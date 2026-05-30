import type { Vec } from '../compute';

interface VectorInputProps {
  value: Vec;
  onChange: (v: Vec) => void;
  label?: string;
  readOnly?: boolean;
}

export function VectorInput({ value, onChange, label, readOnly = false }: VectorInputProps) {
  const setCell = (i: number, raw: string) => {
    const num = raw === '' || raw === '-' ? 0 : Number(raw);
    if (Number.isNaN(num)) return;
    const next = [...value];
    next[i] = num;
    onChange(next);
  };

  return (
    <div>
      {label && (
        <span className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
      )}
      <div className="inline-grid grid-flow-row gap-1 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
        {value.map((cell, i) => (
          <input
            key={i}
            type="number"
            step="any"
            value={Number.isFinite(cell) ? +cell.toFixed(6) : 0}
            onChange={(e) => setCell(i, e.target.value)}
            readOnly={readOnly}
            className="w-16 rounded border border-slate-200 bg-slate-50 px-1 py-1 text-center font-mono text-sm focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
        ))}
      </div>
    </div>
  );
}
