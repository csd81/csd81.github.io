import ComparisonChart from "./ComparisonChart.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { METHODS, METHOD_COLORS } from "../lib/engine.js";

// Fit slope of log(error) vs log(h) -> empirical order of convergence.
function fitSlope(hs, errs) {
  const xs = hs.map(Math.log), ys = errs.map(Math.log);
  const valid = xs.map((x, i) => [x, ys[i]]).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
  if (valid.length < 2) return NaN;
  const n = valid.length;
  const sx = valid.reduce((s, v) => s + v[0], 0);
  const sy = valid.reduce((s, v) => s + v[1], 0);
  const sxx = valid.reduce((s, v) => s + v[0] * v[0], 0);
  const sxy = valid.reduce((s, v) => s + v[0] * v[1], 0);
  return (n * sxy - sx * sy) / (n * sxx - sx * sx);
}

// sweep: [{ key, points:[{h, maxError}] }]
export default function ConvergenceChart({ sweep }) {
  const { lang } = useLang();
  const t = useT(lang);

  const series = sweep.map((r) => {
    const slope = fitSlope(r.points.map((p) => p.h), r.points.map((p) => p.maxError));
    const label = lang === "hu" ? METHODS[r.key].hu : METHODS[r.key].en;
    return {
      name: `${label} (${t.measured_order} ${Number.isFinite(slope) ? slope.toFixed(2) : "—"})`,
      x: r.points.map((p) => p.h),
      y: r.points.map((p) => Math.max(p.maxError, 1e-16)),
      color: METHOD_COLORS[r.key],
      mode: "lines+markers",
    };
  });

  return (
    <ComparisonChart
      series={series}
      xtitle="h (log)"
      ytitle={`${t.maxerr} (log)`}
      logx
      logy
      height={420}
    />
  );
}
