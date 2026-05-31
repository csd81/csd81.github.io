import type { Components } from 'react-markdown';
import { CodeBlock } from './CodeBlock';

const HIGHLIGHTED = new Set(['matlab', 'python', 'cpp', 'c', 'julia', 'rust', 'fortran', 'wolfram', 'mathematica', 'javascript', 'js', 'go', 'r']);

/**
 * react-markdown component overrides that syntax-highlight fenced code blocks
 * (```python / ```matlab / ```cpp) using the shared Prism CodeBlock, while
 * leaving inline `code` and other languages as plain styled blocks. `pre` is
 * unwrapped so the highlighter (or our own <pre>) is the sole block wrapper.
 */
export const markdownCodeComponents: Components = {
  pre: ({ children }) => <>{children}</>,
  code({ className, children, ...props }) {
    const match = /language-([\w+-]+)/.exec(className || '');
    const lang = match?.[1]?.toLowerCase();
    const text = String(children ?? '');
    if (lang && HIGHLIGHTED.has(lang)) {
      return (
        <div className="md-code">
          <CodeBlock
            code={text}
            lang={lang === 'c' ? 'cpp' : lang === 'mathematica' ? 'wolfram' : lang === 'js' ? 'javascript' : lang}
          />
        </div>
      );
    }
    // A fenced block has either a language class OR multi-line content; a
    // no-language fence (e.g. pseudocode) has no className, so detect it by the
    // newline to avoid collapsing it into one line as inline code.
    if (className || text.includes('\n')) {
      return (
        <pre className="md-code md-code--plain">
          <code className={className}>{children}</code>
        </pre>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
