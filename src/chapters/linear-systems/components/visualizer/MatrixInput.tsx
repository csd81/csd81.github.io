interface MatrixInputProps {
  values: string[][];
  onChange: (r: number, c: number, value: string) => void;
  label?: string;
  invalid?: (r: number, c: number) => boolean;
}

export function MatrixInput({ values, onChange, label, invalid }: MatrixInputProps) {
  const cols = values[0]?.length ?? 0;
  return (
    <label className="field">
      {label}
      <div
        className="matrix-input"
        style={{ gridTemplateColumns: `repeat(${cols}, auto)` }}
      >
        {values.map((row, r) =>
          row.map((v, c) => (
            <input
              key={`${r}-${c}`}
              type="text"
              inputMode="decimal"
              value={v}
              aria-label={`a${r + 1}${c + 1}`}
              style={
                invalid?.(r, c) ? { borderColor: 'var(--err)', color: 'var(--err)' } : undefined
              }
              onChange={(e) => onChange(r, c, e.target.value)}
            />
          )),
        )}
      </div>
    </label>
  );
}

interface VectorInputProps {
  values: string[];
  onChange: (i: number, value: string) => void;
  label?: string;
  invalid?: (i: number) => boolean;
  horizontal?: boolean;
}

export function VectorInput({
  values,
  onChange,
  label,
  invalid,
  horizontal = false,
}: VectorInputProps) {
  return (
    <label className="field">
      {label}
      <div
        className="matrix-input"
        style={{
          gridTemplateColumns: horizontal ? `repeat(${values.length}, auto)` : 'auto',
        }}
      >
        {values.map((v, i) => (
          <input
            key={i}
            type="text"
            inputMode="decimal"
            value={v}
            aria-label={`b${i + 1}`}
            style={invalid?.(i) ? { borderColor: 'var(--err)', color: 'var(--err)' } : undefined}
            onChange={(e) => onChange(i, e.target.value)}
          />
        ))}
      </div>
    </label>
  );
}
