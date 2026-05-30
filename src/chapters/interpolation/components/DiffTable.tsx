import { dividedDifferenceTable } from "../mathcore";

const fmt = (v: number) =>
  Number.isFinite(v) ? (Math.round(v * 1000) / 1000).toString() : "—";

export default function DiffTable({ xs, ys }: { xs: number[]; ys: number[] }) {
  const table = dividedDifferenceTable(xs, ys);
  const n = xs.length;
  return (
    <div className="difftable-wrap">
      <table className="difftable">
        <tbody>
          {xs.map((x, i) => (
            <tr key={i}>
              <td className="xi">{fmt(x)}</td>
              {Array.from({ length: n }).map((_, j) => {
                const has = j <= n - 1 - i && table[i][j] !== undefined;
                const isCoeff = i === 0; // top row = Newton coefficients
                return (
                  <td key={j} className={has ? (isCoeff ? "cell coeff" : "cell") : "cell empty"}>
                    {has ? fmt(table[i][j]) : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
