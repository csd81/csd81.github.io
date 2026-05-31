import { useMemo } from 'react';
import { useI18n } from '../../app/LanguageContext';
import { MarkdownView } from '../../../../shared/ui/MarkdownView';
import solutionsMd from '../../content/solutions.md?raw';

/**
 * Inline, per-exercise revealable solutions for chapter 3.
 *
 * The chapter's worked solutions live in `content/solutions.md`, grouped by
 * `## Section X.Y Exercises` and `### Exercise N: title`. This component splits
 * that markdown and, for the requested section number, renders each exercise as
 * a visible heading with a collapsed `<details class="reveal-solution">` holding
 * the worked solution directly below it. The solution bodies are English (as
 * authored); only the show/hide chrome is bilingual.
 */

interface ParsedExercise {
  n: string;
  title: string;
  body: string; // worked solution markdown (without the heading line)
}

function parseSolutions(md: string): Map<string, ParsedExercise[]> {
  const bySection = new Map<string, ParsedExercise[]>();
  const lines = md.split('\n');
  let curSection: string | null = null;
  let cur: ParsedExercise | null = null;
  const flush = () => {
    if (curSection && cur) {
      const arr = bySection.get(curSection) ?? [];
      cur.body = cur.body.replace(/\n+$/, '');
      arr.push(cur);
      bySection.set(curSection, arr);
    }
    cur = null;
  };
  for (const line of lines) {
    const sec = line.match(/^##\s+Section\s+([\d.]+)\s+Exercises/i);
    if (sec) {
      flush();
      curSection = sec[1];
      continue;
    }
    // Any other top-level `## ` heading (e.g. "Summary") ends the exercise zone.
    if (/^##\s+/.test(line) && !sec) {
      flush();
      curSection = null;
      continue;
    }
    const ex = line.match(/^###\s+Exercise\s+(\d+)\s*:?\s*(.*)$/i);
    if (ex && curSection) {
      flush();
      cur = { n: ex[1], title: ex[2].trim(), body: '' };
      continue;
    }
    if (cur) {
      // Drop the `---` separators that delimit sub-parts in the source.
      if (line.trim() === '---') continue;
      cur.body += line + '\n';
    }
  }
  flush();
  return bySection;
}

export function SectionExercises({ sectionNumber }: { sectionNumber: string }) {
  const { t } = useI18n();
  const bySection = useMemo(() => parseSolutions(solutionsMd), []);
  const exercises = bySection.get(sectionNumber);
  if (!exercises || exercises.length === 0) return null;

  const show = t('common.showSolution');

  return (
    <section className="ls-exercises card stack" aria-label="exercises">
      <span className="section-eyebrow">
        {t('common.exercises')} · §{sectionNumber}
      </span>
      {exercises.map((ex) => {
        const md =
          `**${t('common.exercise')} ${ex.n}${ex.title ? `: ${ex.title}` : ''}**\n\n` +
          `<details class="reveal-solution"><summary>${show}</summary>\n\n` +
          `${ex.body}\n\n` +
          `</details>`;
        return <MarkdownView key={ex.n} markdown={md} />;
      })}
    </section>
  );
}

export default SectionExercises;
