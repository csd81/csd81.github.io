import type { Matrix } from "../lib/matrix";
import { fmt } from "../lib/matrix";
import "./matrix.css";

export type CellState = "highlight" | "active" | "done" | "pivot";

interface Props {
  matrix: Matrix;
  /** map "i,j" -> state for coloring cells */
  states?: Record<string, CellState>;
  decimals?: number;
  ariaLabel?: string;
}

export function MatrixDisplay({ matrix, states = {}, decimals = 4, ariaLabel }: Props) {
  return (
    <div className="matrix" role="table" aria-label={ariaLabel}>
      <div className="matrix__bracket matrix__bracket--l" aria-hidden />
      <div className="matrix__grid" style={{ gridTemplateColumns: `repeat(${matrix[0]?.length ?? 0}, 1fr)` }}>
        {matrix.map((row, i) =>
          row.map((v, j) => {
            const st = states[`${i},${j}`];
            return (
              <div key={`${i}-${j}`} className={`matrix__cell${st ? ` is-${st}` : ""}`} role="cell">
                {fmt(v, decimals)}
              </div>
            );
          })
        )}
      </div>
      <div className="matrix__bracket matrix__bracket--r" aria-hidden />
    </div>
  );
}
