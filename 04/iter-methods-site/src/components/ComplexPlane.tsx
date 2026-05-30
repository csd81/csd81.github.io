import type { Complex } from '../compute';
import { magnitude } from '../compute';
import { useTheme } from '../context/ThemeContext';

interface ComplexPlaneProps {
  points: Complex[];
  /** Axis range; defaults to enclose all points and the unit circle. */
  size?: number;
  labels: { re: string; im: string };
}

/** Plot complex numbers (eigenvalues) against the unit circle on the complex plane. */
export function ComplexPlane({ points, size = 320, labels }: ComplexPlaneProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const axisColor = dark ? '#64748b' : '#94a3b8';
  const labelColor = dark ? '#94a3b8' : '#64748b';
  const circleFill = dark ? 'rgba(129,140,248,0.10)' : 'rgba(99,102,241,0.06)';
  const dotStroke = dark ? '#0f172a' : 'white';

  const maxMag = points.reduce((m, p) => Math.max(m, magnitude(p)), 1);
  const range = Math.max(1.3, maxMag * 1.15);
  const pad = 28;
  const inner = size - pad * 2;
  const scale = inner / (2 * range);
  const cx = pad + inner / 2;
  const cy = pad + inner / 2;

  const toX = (re: number) => cx + re * scale;
  const toY = (im: number) => cy - im * scale;

  const ticks = [-1, 1];

  return (
    <svg width={size} height={size} className="mx-auto block">
      {/* axes */}
      <line x1={pad} y1={cy} x2={size - pad} y2={cy} stroke={axisColor} strokeWidth={1} />
      <line x1={cx} y1={pad} x2={cx} y2={size - pad} stroke={axisColor} strokeWidth={1} />
      <text x={size - pad + 2} y={cy - 4} fontSize={11} fill={labelColor}>
        {labels.re}
      </text>
      <text x={cx + 4} y={pad - 6} fontSize={11} fill={labelColor}>
        {labels.im}
      </text>

      {/* unit circle */}
      <circle cx={cx} cy={cy} r={scale} fill={circleFill} stroke="#6366f1" strokeWidth={1.5} />

      {/* ±1 ticks */}
      {ticks.map((tk) => (
        <g key={`x${tk}`}>
          <line x1={toX(tk)} y1={cy - 3} x2={toX(tk)} y2={cy + 3} stroke={axisColor} />
          <text x={toX(tk) - 3} y={cy + 14} fontSize={9} fill={axisColor}>
            {tk}
          </text>
        </g>
      ))}

      {/* eigenvalues */}
      {points.map((p, i) => {
        const outside = magnitude(p) >= 1 - 1e-9;
        return (
          <g key={i}>
            <circle
              cx={toX(p.re)}
              cy={toY(p.im)}
              r={5}
              fill={outside ? '#ef4444' : '#818cf8'}
              stroke={dotStroke}
              strokeWidth={1.5}
            />
          </g>
        );
      })}
    </svg>
  );
}
