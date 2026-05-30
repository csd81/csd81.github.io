// KaTeX helpers: auto-render math in a DOM subtree, and render markdown+math.
import renderMathInElement from 'katex/contrib/auto-render';
import { marked } from 'marked';
import 'katex/dist/katex.min.css';

const KATEX_OPTIONS = {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false },
    { left: '\\[', right: '\\]', display: true },
  ],
  throwOnError: false,
};

/** Render all $...$ / $$...$$ math inside an element. */
export function renderMath(el) {
  if (el) renderMathInElement(el, KATEX_OPTIONS);
}

marked.setOptions({ breaks: true, gfm: true });

/**
 * Render a markdown string (may contain LaTeX) into an element, then run KaTeX.
 * Math delimiters are protected from the markdown parser well enough for our
 * content (inline `$...$` and display `$$...$$` on their own lines).
 */
export function renderMarkdownMath(el, mdString) {
  el.innerHTML = marked.parse(mdString ?? '');
  renderMath(el);
}

/** Render a single LaTeX expression string to an element (display or inline). */
export function renderTeX(el, tex, display = true) {
  el.innerHTML = '';
  renderMathInElement(
    Object.assign(el, { textContent: (display ? '$$' : '$') + tex + (display ? '$$' : '$') }),
    KATEX_OPTIONS
  );
}
