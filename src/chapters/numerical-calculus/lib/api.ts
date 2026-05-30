// Static, in-browser replacement for the old Express API. The chapter's content
// (lesson markdown + quizzes) is bundled at build time, and quiz answers are
// checked client-side. Async signatures are kept so callers are unchanged.
import indexJson from '../content/lessons/index.json';
import quizzesJson from '../content/quizzes.json';

export type Lang = 'en' | 'hu';

export interface LessonMeta {
  id: string;
  slug: string;
  title: Record<Lang, string>;
}

export interface Lesson {
  id: string;
  slug: string;
  lang: Lang;
  title: string;
  markdown: string;
}

export type QuizType = 'mcq' | 'truefalse' | 'numeric';

export interface PublicQuestion {
  id: string;
  type: QuizType;
  topic: string;
  prompt: string;
  options?: string[];
}

export interface CheckResult {
  correct: boolean;
  answer: number | boolean;
  explanation: string;
}

interface QuizQuestion {
  id: string;
  type: QuizType;
  topic: string;
  prompt: Record<Lang, string>;
  options?: Record<Lang, string[]>;
  answer: number | boolean;
  tolerance?: number;
  explanation: Record<Lang, string>;
}

const lessons = indexJson as LessonMeta[];
const quizzes = quizzesJson as QuizQuestion[];

// Eagerly bundle every lesson markdown file as a raw string.
const mdFiles = import.meta.glob('../content/lessons/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function markdownFor(slug: string, lang: Lang): string | undefined {
  return mdFiles[`../content/lessons/${lang}/${slug}.md`];
}

export const fetchLessons = async (): Promise<LessonMeta[]> => lessons;

export const fetchLesson = async (idOrSlug: string, lang: Lang): Promise<Lesson> => {
  const meta = lessons.find((l) => l.id === idOrSlug || l.slug === idOrSlug);
  const markdown = meta ? markdownFor(meta.slug, lang) : undefined;
  if (!meta || markdown === undefined) {
    throw new Error('Lesson not found');
  }
  return { id: meta.id, slug: meta.slug, lang, title: meta.title[lang], markdown };
};

export const fetchQuizzes = async (lang: Lang): Promise<PublicQuestion[]> =>
  quizzes.map((q) => ({
    id: q.id,
    type: q.type,
    topic: q.topic,
    prompt: q.prompt[lang],
    ...(q.options ? { options: q.options[lang] } : {}),
  }));

export async function checkAnswer(
  id: string,
  choice: number | boolean,
  lang: Lang,
): Promise<CheckResult> {
  const q = quizzes.find((x) => x.id === id);
  if (!q) throw new Error('Question not found');
  let correct = false;
  if (q.type === 'numeric') {
    const val = typeof choice === 'number' ? choice : Number(choice);
    const tol = q.tolerance ?? 1e-6;
    correct = Number.isFinite(val) && Math.abs(val - (q.answer as number)) <= tol;
  } else if (q.type === 'truefalse') {
    correct = Boolean(choice) === q.answer;
  } else {
    correct = Number(choice) === q.answer;
  }
  return { correct, answer: q.answer, explanation: q.explanation[lang] };
}
