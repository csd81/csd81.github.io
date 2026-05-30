import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { contentDir, lessonsDir } from './paths.js';

export type Lang = 'en' | 'hu';
export const LANGS: Lang[] = ['en', 'hu'];

export interface LessonMeta {
  id: string;
  slug: string;
  title: Record<Lang, string>;
}

export type QuizType = 'mcq' | 'truefalse' | 'numeric';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  topic: string;
  prompt: Record<Lang, string>;
  options?: Record<Lang, string[]>;
  answer: number | boolean;
  tolerance?: number;
  explanation: Record<Lang, string>;
}

/** Public shape of a question sent to the client (no answer key). */
export interface PublicQuestion {
  id: string;
  type: QuizType;
  topic: string;
  prompt: string;
  options?: string[];
}

function loadJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

export const lessons: LessonMeta[] = loadJson<LessonMeta[]>(
  resolve(lessonsDir, 'index.json'),
);

export const quizzes: QuizQuestion[] = loadJson<QuizQuestion[]>(
  resolve(contentDir, 'quizzes.json'),
);

export function normalizeLang(input: unknown): Lang {
  return input === 'hu' ? 'hu' : 'en';
}

export function getLessonMarkdown(idOrSlug: string, lang: Lang): { meta: LessonMeta; markdown: string } | null {
  const meta = lessons.find((l) => l.id === idOrSlug || l.slug === idOrSlug);
  if (!meta) return null;
  const file = resolve(lessonsDir, lang, `${meta.slug}.md`);
  if (!existsSync(file)) return null;
  return { meta, markdown: readFileSync(file, 'utf8') };
}

export function publicQuestion(q: QuizQuestion, lang: Lang): PublicQuestion {
  return {
    id: q.id,
    type: q.type,
    topic: q.topic,
    prompt: q.prompt[lang],
    ...(q.options ? { options: q.options[lang] } : {}),
  };
}

export interface CheckResult {
  correct: boolean;
  answer: number | boolean;
  explanation: string;
}

export function checkAnswer(id: string, choice: unknown, lang: Lang): CheckResult | null {
  const q = quizzes.find((x) => x.id === id);
  if (!q) return null;
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
