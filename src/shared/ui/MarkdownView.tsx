import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface Props {
  markdown: string;
  className?: string;
}

/** Render lesson markdown with GFM tables and KaTeX math (shared across all chapters). */
export function MarkdownView({ markdown, className }: Props) {
  return (
    <div className={`prose-lesson${className ? ` ${className}` : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, trust: true }]]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownView;
