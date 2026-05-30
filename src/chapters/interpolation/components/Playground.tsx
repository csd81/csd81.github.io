import { useMemo, useState } from "react";
import Plot, { type Curve } from "./Plot";
import DiffTable from "./DiffTable";
import { makeEvaluator, type Method, type Pt } from "../mathcore";
import type { Strings } from "../i18n/strings";

const METHOD_COLORS: Record<Method, string> = {
  lagrange: "#ff5d8f",
  newton: "#f5a623",
  hermite: "#9b5de5",
  spline: "#00bbf9",
};

interface PlaygroundProps {
  str: Strings;
  initialPoints: Pt[];
  initialDerivs?: number[];
  primary: Method; // the method this lesson is about
  allowCompare?: boolean; // let user overlay other methods
  showTable?: boolean; // Newton divided-difference table
  enableDerivatives?: boolean; // Hermite y'
}

function niceBounds(points: Pt[]): { domain: [number, number]; range: [number, number] } {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xmin = Math.min(...xs);
  const xmax = Math.max(...xs);
  const ymin = Math.min(...ys);
  const ymax = Math.max(...ys);
  const xpad = Math.max(1, (xmax - xmin) * 0.25);
  const ypad = Math.max(1, (ymax - ymin) * 0.35);
  return {
    domain: [Math.floor(xmin - xpad), Math.ceil(xmax + xpad)],
    range: [Math.floor(ymin - ypad), Math.ceil(ymax + ypad)],
  };
}

export default function Playground({
  str,
  initialPoints,
  initialDerivs,
  primary,
  allowCompare = false,
  showTable = false,
  enableDerivatives = false,
}: PlaygroundProps) {
  const [points, setPoints] = useState<Pt[]>(initialPoints);
  const [derivs, setDerivs] = useState<number[]>(
    initialDerivs ?? initialPoints.map(() => 0)
  );
  const [active, setActive] = useState<Record<Method, boolean>>({
    lagrange: primary === "lagrange",
    newton: primary === "newton",
    hermite: primary === "hermite",
    spline: primary === "spline",
  });
  const [evalX, setEvalX] = useState(0);

  // keep points sorted by x for table/spline correctness
  const sorted = useMemo(() => {
    const idx = points.map((_, i) => i).sort((a, b) => points[a].x - points[b].x);
    return {
      pts: idx.map((i) => points[i]),
      dys: idx.map((i) => derivs[i] ?? 0),
    };
  }, [points, derivs]);

  const { domain, range } = useMemo(() => niceBounds(points), [points]);

  const curves: Curve[] = useMemo(() => {
    const list: Curve[] = [];
    (Object.keys(active) as Method[]).forEach((m) => {
      if (!active[m]) return;
      if ((m === "spline" || m === "newton") && sorted.pts.length < 2) return;
      const fn = makeEvaluator(m, sorted.pts, sorted.dys);
      list.push({ fn, color: METHOD_COLORS[m], label: str.methods[m] });
    });
    return list;
  }, [active, sorted, str]);

  const updatePoint = (i: number, x: number, y: number) =>
    setPoints((ps) => ps.map((p, k) => (k === i ? { x, y } : p)));

  const addPoint = () => {
    const maxX = Math.max(...points.map((p) => p.x));
    setPoints((ps) => [...ps, { x: Math.round((maxX + 1) * 10) / 10, y: 0 }]);
    setDerivs((ds) => [...ds, 0]);
  };
  const removePoint = () => {
    if (points.length <= 2) return;
    setPoints((ps) => ps.slice(0, -1));
    setDerivs((ds) => ds.slice(0, -1));
  };
  const reset = () => {
    setPoints(initialPoints);
    setDerivs(initialDerivs ?? initialPoints.map(() => 0));
  };

  const primaryFn = useMemo(
    () => makeEvaluator(primary, sorted.pts, sorted.dys),
    [primary, sorted]
  );
  const evalY = primaryFn(evalX);

  return (
    <div className="playground">
      <div className="plotcol">
        <Plot
          points={points}
          curves={curves}
          domain={domain}
          range={range}
          onDrag={updatePoint}
        />
        <p className="hint">{str.ui.dragHint}</p>
      </div>

      <div className="controls">
        <div className="btnrow">
          <button onClick={addPoint}>{str.ui.addPoint}</button>
          <button onClick={removePoint} disabled={points.length <= 2}>
            {str.ui.removePoint}
          </button>
          <button onClick={reset}>{str.ui.reset}</button>
        </div>

        {allowCompare && (
          <div className="methodtoggles">
            {(Object.keys(active) as Method[]).map((m) => (
              <label key={m} className={`chip ${active[m] ? "on" : ""}`}>
                <input
                  type="checkbox"
                  checked={active[m]}
                  onChange={() => setActive((a) => ({ ...a, [m]: !a[m] }))}
                />
                <span className="swatch" style={{ background: METHOD_COLORS[m] }} />
                {str.methods[m]}
              </label>
            ))}
          </div>
        )}

        <div className="pointeditor">
          <div className="pe-head">{str.ui.points}</div>
          <table className="pe-table">
            <thead>
              <tr>
                <th>#</th>
                <th>x</th>
                <th>{str.ui.value}</th>
                {enableDerivatives && <th>{str.ui.deriv}</th>}
              </tr>
            </thead>
            <tbody>
              {points.map((p, i) => (
                <tr key={i}>
                  <td className="idx">{i}</td>
                  <td>
                    <input
                      type="number"
                      step="0.1"
                      value={p.x}
                      onChange={(e) => updatePoint(i, parseFloat(e.target.value) || 0, p.y)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="0.1"
                      value={p.y}
                      onChange={(e) => updatePoint(i, p.x, parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  {enableDerivatives && (
                    <td>
                      <input
                        type="number"
                        step="0.1"
                        value={derivs[i] ?? 0}
                        onChange={(e) =>
                          setDerivs((ds) =>
                            ds.map((d, k) => (k === i ? parseFloat(e.target.value) || 0 : d))
                          )
                        }
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="evalbox">
          <label>
            {str.ui.polynomialAt}{" "}
            <input
              type="number"
              step="0.1"
              value={evalX}
              onChange={(e) => setEvalX(parseFloat(e.target.value) || 0)}
            />
          </label>
          <span className="evalresult">
            = {Number.isFinite(evalY) ? (Math.round(evalY * 1000) / 1000).toString() : "—"}
          </span>
        </div>
      </div>

      {showTable && (
        <div className="tablecol">
          <h4>{str.ui.table}</h4>
          <DiffTable xs={sorted.pts.map((p) => p.x)} ys={sorted.pts.map((p) => p.y)} />
        </div>
      )}
    </div>
  );
}
