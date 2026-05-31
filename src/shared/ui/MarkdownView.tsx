import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { normalizeMath } from './normalizeMath';
import { markdownCodeComponents } from './markdownCode';

interface Props {
  markdown: string;
  className?: string;
}

/** Render lesson markdown with GFM tables, KaTeX math, and highlighted code. */
export function MarkdownView({ markdown, className }: Props) {
  return (
    <div className={`prose-lesson${className ? ` ${className}` : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeKatex, { throwOnError: false, trust: true }]]}
        components={markdownCodeComponents}
      >
        {normalizeMath(markdown)}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownView;
