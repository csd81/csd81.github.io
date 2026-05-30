import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { IterStep } from '../compute';
import { useTheme } from '../context/ThemeContext';

interface Series {
  name: string;
  color: string;
  steps: IterStep[];
}

interface ConvergenceChartProps {
  series: Series[];
  metric: 'residualNorm' | 'errorNorm';
  highlightK?: number;
  yLabel: string;
}

/**
 * Log-scale convergence plot of residual (or error) norm vs iteration index,
 * overlaying one or more methods (Jacobi vs Gauss–Seidel).
 */
export function ConvergenceChart({ series, metric, highlightK, yLabel }: ConvergenceChartProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const grid = dark ? '#334155' : '#e2e8f0';
  const axis = dark ? '#94a3b8' : '#475569';
  const tooltipBg = dark ? '#1e293b' : '#ffffff';
  const tooltipBorder = dark ? '#334155' : '#e2e8f0';

  // Merge all series into a single keyed dataset by iteration index.
  const maxK = Math.max(0, ...series.map((s) => s.steps.length - 1));
  const data = Array.from({ length: maxK + 1 }, (_, k) => {
    const row: Record<string, number | null> = { k };
    for (const s of series) {
      const step = s.steps[k];
      const v = step ? step[metric] : null;
      // Clamp zeros to a tiny positive value so the log axis can render them.
      row[s.name] = v === null || v === undefined ? null : Math.max(v, 1e-16);
    }
    return row;
  });

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 24, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={grid} />
          <XAxis
            dataKey="k"
            stroke={axis}
            tick={{ fontSize: 11, fill: axis }}
            label={{ value: 'k', position: 'insideBottom', offset: -12, fontSize: 12, fill: axis }}
          />
          <YAxis
            scale="log"
            domain={['auto', 'auto']}
            allowDataOverflow
            stroke={axis}
            tick={{ fontSize: 11, fill: axis }}
            tickFormatter={(v: number) => v.toExponential(0)}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12, fill: axis }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, borderRadius: 8 }}
            labelStyle={{ color: axis }}
            formatter={(v: number) => (typeof v === 'number' ? v.toExponential(3) : v)}
            labelFormatter={(k) => `k = ${k}`}
          />
          <Legend />
          {highlightK !== undefined && <ReferenceLine x={highlightK} stroke="#6366f1" strokeDasharray="4 2" />}
          {series.map((s) => (
            <Line
              key={s.name}
              type="monotone"
              dataKey={s.name}
              stroke={s.color}
              dot={false}
              strokeWidth={2}
              isAnimationActive={false}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
