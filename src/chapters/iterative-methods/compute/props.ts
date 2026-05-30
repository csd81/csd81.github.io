import type { Mat } from './matrix';

/** Row diagonal dominance: |a_ii| > sum_{j!=i} |a_ij| for every row. */
export function isDiagonallyDominant(a: Mat): boolean {
  return a.every((row, i) => {
    const diag = Math.abs(row[i]);
    const off = row.reduce((s, v, j) => (j === i ? s : s + Math.abs(v)), 0);
    return diag > off;
  });
}

/** Column diagonal dominance: |a_jj| > sum_{i!=j} |a_ij| for every column. */
export function isColumnDiagDominant(a: Mat): boolean {
  const n = a.length;
  for (let j = 0; j < n; j++) {
    const diag = Math.abs(a[j][j]);
    let off = 0;
    for (let i = 0; i < n; i++) if (i !== j) off += Math.abs(a[i][j]);
    if (!(diag > off)) return false;
  }
  return true;
}
