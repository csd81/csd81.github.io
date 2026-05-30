import type { Matrix } from "../lib/matrix";
import "./matrix.css";

interface Props {
  matrix: Matrix;
  onChange: (m: Matrix) => void;
  /** lock some cells (e.g. fixed zeros in a triangular answer grid) */
  readonlyCell?: (i: number, j: number) => boolean;
  label?: string;
}

export function MatrixInput({ matrix, onChange, readonlyCell, label }: Props) {
  const n = matrix.length;
  const cols = matrix[0]?.length ?? 0;

  const update = (i: number, j: number, raw: string) => {
    const next = matrix.map((r) => [...r]);
    const parsed = raw.trim() === "" || raw.trim() === "-" ? 0 : Number(raw);
    next[i][j] = Number.isNaN(parsed) ? 0 : parsed;
    onChange(next);
  };

  return (
    <div className="matrix matrix--input" role="group" aria-label={label}>
      <div className="matrix__bracket matrix__bracket--l" aria-hidden />
      <div className="matrix__grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {matrix.map((row, i) =>
          row.map((v, j) => {
            const ro = readonlyCell?.(i, j) ?? false;
            return (
              <input
                key={`${i}-${j}-${n}`}
                className={`matrix__input${ro ? " is-locked" : ""}`}
                inputMode="decimal"
                aria-label={`row ${i + 1} column ${j + 1}`}
                value={Number.isFinite(v) ? String(v) : ""}
                readOnly={ro}
                tabIndex={ro ? -1 : 0}
                onChange={(e) => update(i, j, e.target.value)}
              />
            );
          })
        )}
      </div>
      <div className="matrix__bracket matrix__bracket--r" aria-hidden />
    </div>
  );
}
