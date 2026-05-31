import { useLang } from '../providers/LanguageProvider';
import { MarkdownView } from './MarkdownView';
import './solutions-block.css';

/**
 * Collapsible "Exercise solutions" panel rendered at the end of a chapter.
 * Content is the chapter's worked-solutions markdown (KaTeX + highlighted code
 * via the shared MarkdownView). Collapsed by default so it doesn't crowd the page.
 */
export function SolutionsBlock({ markdown }: { markdown: string }) {
  const { t } = useLang();
  if (!markdown?.trim()) return null;
  return (
    <details className="solutions-block">
      <summary>🧩 {t({ en: 'Exercise solutions', hu: 'Feladatmegoldások' })}</summary>
      <div className="solutions-block__body">
        <MarkdownView markdown={markdown} />
      </div>
    </details>
  );
}

export default SolutionsBlock;
