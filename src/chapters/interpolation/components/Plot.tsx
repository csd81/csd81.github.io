import { useRef, useCallback } from "react";
import type { Pt } from "../mathcore";

export interface Curve {
  fn: (x: number) => number;
  color: string;
  label?: string;
  dashed?: boolean;
}

interface PlotProps {
  points: Pt[];
  curves: Curve[];
  domain: [number, number];
  range: [number, number];
  onDrag?: (index: number, x: number, y: number) => void;
  width?: number;
  height?: number;
}

const PAD = 36;

export default function Plot({
  points,
  curves,
  domain,
  range,
  onDrag,
  width = 640,
  height = 420,
}: PlotProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef<number | null>(null);

  const [xmin, xmax] = domain;
  const [ymin, ymax] = range;

  const sx = useCallback(
    (x: number) => PAD + ((x - xmin) / (xmax - xmin)) * (width - 2 * PAD),
    [xmin, xmax, width]
  );
  const sy = useCallback(
    (y: number) => height - PAD - ((y - ymin) / (ymax - ymin)) * (height - 2 * PAD),
    [ymin, ymax, height]
  );
  const invX = useCallback(
    (px: number) => xmin + ((px - PAD) / (width - 2 * PAD)) * (xmax - xmin),
    [xmin, xmax, width]
  );
  const invY = useCallback(
    (py: number) => ymin + ((height - PAD - py) / (height - 2 * PAD)) * (ymax - ymin),
    [ymin, ymax, height]
  );

  const samplePath = (fn: (x: number) => number) => {
    const N = 240;
    let d = "";
    let pen = false;
    for (let i = 0; i <= N; i++) {
      const x = xmin + ((xmax - xmin) * i) / N;
      const y = fn(x);
      if (!Number.isFinite(y) || y < ymin - 50 * (ymax - ymin) || y > ymax + 50 * (ymax - ymin)) {
        pen = false;
        continue;
      }
      const px = sx(x);
      const py = sy(y);
      d += `${pen ? "L" : "M"}${px.toFixed(1)} ${py.toFixed(1)} `;
      pen = true;
    }
    return d;
  };

  const pointerPos = (e: React.PointerEvent) => {
    const rect = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * width;
    const py = ((e.clientY - rect.top) / rect.height) * height;
    return { px, py };
  };

  const onMove = (e: React.PointerEvent) => {
    if (dragging.current === null || !onDrag) return;
    const { px, py } = pointerPos(e);
    let nx = invX(px);
    let ny = invY(py);
    nx = Math.max(xmin, Math.min(xmax, nx));
    ny = Math.max(ymin, Math.min(ymax, ny));
    onDrag(dragging.current, Math.round(nx * 100) / 100, Math.round(ny * 100) / 100);
  };

  // grid ticks
  const xticks: number[] = [];
  for (let t = Math.ceil(xmin); t <= xmax; t++) xticks.push(t);
  const yticks: number[] = [];
  for (let t = Math.ceil(ymin); t <= ymax; t++) yticks.push(t);

  return (
    <svg
      ref={svgRef}
      className="plot"
      viewBox={`0 0 ${width} ${height}`}
      onPointerMove={onMove}
      onPointerUp={() => (dragging.current = null)}
      onPointerLeave={() => (dragging.current = null)}
      role="img"
    >
      {/* grid */}
      {xticks.map((t) => (
        <line key={`gx${t}`} className="grid" x1={sx(t)} y1={PAD} x2={sx(t)} y2={height - PAD} />
      ))}
      {yticks.map((t) => (
        <line key={`gy${t}`} className="grid" x1={PAD} y1={sy(t)} x2={width - PAD} y2={sy(t)} />
      ))}
      {/* axes */}
      {ymin <= 0 && ymax >= 0 && (
        <line className="axis" x1={PAD} y1={sy(0)} x2={width - PAD} y2={sy(0)} />
      )}
      {xmin <= 0 && xmax >= 0 && (
        <line className="axis" x1={sx(0)} y1={PAD} x2={sx(0)} y2={height - PAD} />
      )}
      {xticks.map((t) => (
        <text key={`tx${t}`} className="tick" x={sx(t)} y={sy(0) + 14} textAnchor="middle">
          {t}
        </text>
      ))}

      {/* curves */}
      {curves.map((c, i) => (
        <path
          key={i}
          className="curve"
          d={samplePath(c.fn)}
          stroke={c.color}
          strokeDasharray={c.dashed ? "7 6" : undefined}
          fill="none"
        />
      ))}

      {/* points */}
      {points.map((p, i) => (
        <g key={i}>
          <circle
            className={onDrag ? "pt draggable" : "pt"}
            cx={sx(p.x)}
            cy={sy(p.y)}
            r={8}
            onPointerDown={(e) => {
              if (!onDrag) return;
              (e.target as Element).setPointerCapture(e.pointerId);
              dragging.current = i;
            }}
          />
          <text className="ptlabel" x={sx(p.x) + 11} y={sy(p.y) - 9}>
            {i}
          </text>
        </g>
      ))}

      {/* legend */}
      {curves.filter((c) => c.label).length > 0 && (
        <g className="legend" transform={`translate(${width - PAD - 150}, ${PAD})`}>
          {curves
            .filter((c) => c.label)
            .map((c, i) => (
              <g key={i} transform={`translate(0, ${i * 18})`}>
                <line x1={0} y1={0} x2={22} y2={0} stroke={c.color} strokeWidth={3}
                  strokeDasharray={c.dashed ? "5 4" : undefined} />
                <text className="legendlabel" x={28} y={4}>
                  {c.label}
                </text>
              </g>
            ))}
        </g>
      )}
    </svg>
  );
}
