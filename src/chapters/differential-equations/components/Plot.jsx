// Lightweight Plotly React component built from the minified dist bundle
// (avoids pulling the full plotly.js source build).
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-dist-min";

export default createPlotlyComponent(Plotly);
