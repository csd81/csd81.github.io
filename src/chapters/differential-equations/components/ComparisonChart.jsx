import Plot from "./Plot.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

// Generic theme-aware line chart.
// series: [{ name, x:[], y:[], color, dash?:'dash', width? }]
export default function ComparisonChart({ series, title, xtitle = "t", ytitle = "y", logx = false, logy = false, height = 420 }) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const font = dark ? "#e6edf3" : "#1a2330";
  const grid = dark ? "#2a313c" : "#d7dee7";

  const data = series.map((s) => ({
    x: s.x,
    y: s.y,
    name: s.name,
    type: "scatter",
    mode: s.mode || "lines",
    line: { color: s.color, width: s.width || 2, dash: s.dash || "solid" },
    marker: { color: s.color, size: 5 },
  }));

  const layout = {
    title: title ? { text: title, font: { color: font, size: 15 } } : undefined,
    autosize: true,
    height,
    margin: { l: 56, r: 16, t: title ? 40 : 12, b: 44 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { color: font, family: "ui-monospace, monospace", size: 12 },
    xaxis: { title: xtitle, type: logx ? "log" : "linear", gridcolor: grid, zerolinecolor: grid },
    yaxis: { title: ytitle, type: logy ? "log" : "linear", gridcolor: grid, zerolinecolor: grid },
    legend: { orientation: "h", y: -0.2 },
    showlegend: true,
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{ displayModeBar: false, responsive: true }}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
}
