import { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

export interface Segment {
  points: [number, number][];
  color?: string;
  dashed?: boolean;
}
export interface Area {
  points: [number, number][];
  color?: string;
}
export interface PointMark {
  x: number;
  y: number;
  color?: string;
}

interface Props {
  f: (x: number) => number;
  xMin: number;
  xMax: number;
  width?: number;
  height?: number;
  segments?: Segment[];
  areas?: Area[];
  points?: PointMark[];
}

const M = { top: 12, right: 12, bottom: 24, left: 36 };

export default function Plot({
  f,
  xMin,
  xMax,
  width = 520,
  height = 300,
  segments = [],
  areas = [],
  points = [],
}: Props) {
  const { curve, x, y, yMin, yMax } = useMemo(() => {
    const samples = 240;
    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i <= samples; i++) {
      const xv = xMin + ((xMax - xMin) * i) / samples;
      xs.push(xv);
      ys.push(f(xv));
    }
    // y-range from curve + overlays.
    const finiteYs = ys.filter((v) => Number.isFinite(v));
    for (const a of areas) for (const [, py] of a.points) finiteYs.push(py);
    for (const s of segments) for (const [, py] of s.points) finiteYs.push(py);
    for (const p of points) finiteYs.push(p.y);
    let lo = Math.min(...finiteYs, 0);
    let hi = Math.max(...finiteYs, 0);
    if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo === hi) {
      lo = -1;
      hi = 1;
    }
    const pad = (hi - lo) * 0.1 || 1;
    lo -= pad;
    hi += pad;

    const x = scaleLinear().domain([xMin, xMax]).range([M.left, width - M.right]);
    const y = scaleLinear().domain([lo, hi]).range([height - M.bottom, M.top]);

    let d = '';
    let pen = false;
    for (let i = 0; i <= samples; i++) {
      const yv = ys[i];
      if (!Number.isFinite(yv)) {
        pen = false;
        continue;
      }
      const px = x(xs[i]);
      const py = y(yv);
      d += `${pen ? 'L' : 'M'}${px.toFixed(2)},${py.toFixed(2)} `;
      pen = true;
    }
    return { curve: d, x, y, yMin: lo, yMax: hi };
  }, [f, xMin, xMax, width, height, areas, segments, points]);

  const toPath = (pts: [number, number][]) =>
    pts.map((p, i) => `${i ? 'L' : 'M'}${x(p[0]).toFixed(2)},${y(p[1]).toFixed(2)}`).join(' ');

  const zeroY = yMin < 0 && yMax > 0 ? y(0) : null;
  const zeroX = xMin < 0 && xMax > 0 ? x(0) : null;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full text-slate-400 dark:text-slate-500"
      role="img"
    >
      {/* frame */}
      <rect
        x={M.left}
        y={M.top}
        width={width - M.left - M.right}
        height={height - M.top - M.bottom}
        className="fill-transparent stroke-slate-200 dark:stroke-slate-700"
      />
      {/* axes */}
      {zeroY !== null && (
        <line x1={M.left} x2={width - M.right} y1={zeroY} y2={zeroY} stroke="currentColor" strokeWidth={1} />
      )}
      {zeroX !== null && (
        <line x1={zeroX} x2={zeroX} y1={M.top} y2={height - M.bottom} stroke="currentColor" strokeWidth={1} />
      )}

      {/* shaded areas (e.g. trapezoids / quadrature region) */}
      {areas.map((a, i) => (
        <path key={`a${i}`} d={`${toPath(a.points)} Z`} fill={a.color ?? '#06b6d4'} fillOpacity={0.22} stroke={a.color ?? '#06b6d4'} strokeOpacity={0.5} strokeWidth={1} />
      ))}

      {/* function curve */}
      <path d={curve} fill="none" stroke="#6366f1" strokeWidth={2.5} strokeLinejoin="round" />

      {/* extra line segments (e.g. secant/tangent) */}
      {segments.map((s, i) => (
        <path
          key={`s${i}`}
          d={toPath(s.points)}
          fill="none"
          stroke={s.color ?? '#f59e0b'}
          strokeWidth={2}
          strokeDasharray={s.dashed ? '5 4' : undefined}
        />
      ))}

      {/* point markers */}
      {points.map((p, i) => (
        <circle key={`p${i}`} cx={x(p.x)} cy={y(p.y)} r={4} fill={p.color ?? '#f59e0b'} stroke="#fff" strokeWidth={1.5} />
      ))}

      {/* x labels */}
      <text x={M.left} y={height - 6} className="fill-slate-500 text-[10px]">{xMin}</text>
      <text x={width - M.right} y={height - 6} textAnchor="end" className="fill-slate-500 text-[10px]">{xMax}</text>
    </svg>
  );
}
