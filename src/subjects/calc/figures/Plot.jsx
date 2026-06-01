// Plotly React component from the minified dist bundle (no full plotly.js source
// build, no type-declaration friction). Lives in the lazily-imported figures
// chunk so Plotly is only fetched when a calc figure actually renders.
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';

export default createPlotlyComponent(Plotly);
