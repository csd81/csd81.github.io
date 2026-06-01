import ReactMarkdown, { type Components, type Options } from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { normalizeMath } from './normalizeMath';
import { markdownCodeComponents } from './markdownCode';

interface Props {
  markdown: string;
  className?: string;
  /** Extra react-markdown component overrides, merged over the code components. */
  components?: Components;
  /** Extra rehype plugins, run after rehype-raw + KaTeX (e.g. callout boxes). */
  rehypePlugins?: Options['rehypePlugins'];
}

/** Render lesson markdown with GFM tables, KaTeX math, and highlighted code. */
export function MarkdownView({ markdown, className, components, rehypePlugins }: Props) {
  return (
    <div className={`prose-lesson${className ? ` ${className}` : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeKatex, { throwOnError: false, trust: true }], ...(rehypePlugins ?? [])]}
        components={components ? { ...markdownCodeComponents, ...components } : markdownCodeComponents}
      >
        {normalizeMath(markdown)}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownView;
