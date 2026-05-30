import { toKatex } from '../../lib/fraction';
import type { Cell, FracMatrix } from '../../lib/types';
import { Tex } from './Tex';

interface MatrixViewProps {
  matrix: FracMatrix;
  /** Columns before this index are coefficients; a divider is drawn here. */
  coeffCols?: number;
  pivot?: Cell;
  changed?: Cell[];
  /** Column -> variable index; when given (and non-identity) a header row of variables is shown. */
  varOrder?: number[];
  bracket?: boolean;
}

function sameCell(a: Cell | undefined, r: number, c: number): boolean {
  return !!a && a[0] === r && a[1] === c;
}

export function MatrixView({
  matrix,
  coeffCols,
  pivot,
  changed,
  varOrder,
  bracket = true,
}: MatrixViewProps) {
  const changedSet = new Set((changed ?? []).map(([r, c]) => `${r},${c}`));
  const showVarHeader =
    varOrder !== undefined && varOrder.some((v, i) => v !== i);

  return (
    <div className="matrix-view">
      <table className={`matrix${bracket ? ' bracketed' : ''}`}>
        <tbody>
          {matrix.map((row, r) => (
            <tr key={r}>
              {row.map((value, c) => {
                const classes: string[] = [];
                if (sameCell(pivot, r, c)) classes.push('cell-pivot');
                else if (changedSet.has(`${r},${c}`)) classes.push('cell-changed');
                if (coeffCols !== undefined && c === coeffCols) classes.push('rhs-sep');
                return (
                  <td key={c} className={classes.join(' ') || undefined}>
                    <Tex tex={toKatex(value)} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {showVarHeader && (
        <div className="var-order">
          {varOrder!.map((v, i) => (
            <span key={i}>
              col {i + 1} → <Tex tex={`x_{${v + 1}}`} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
