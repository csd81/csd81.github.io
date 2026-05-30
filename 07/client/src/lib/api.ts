// Tiny typed client for the Express API.
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

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

export const fetchLessons = () => getJson<LessonMeta[]>('/api/lessons');

export const fetchLesson = (idOrSlug: string, lang: Lang) =>
  getJson<Lesson>(`/api/lessons/${encodeURIComponent(idOrSlug)}?lang=${lang}`);

export const fetchQuizzes = (lang: Lang) =>
  getJson<PublicQuestion[]>(`/api/quizzes?lang=${lang}`);

export async function checkAnswer(
  id: string,
  choice: number | boolean,
  lang: Lang,
): Promise<CheckResult> {
  const res = await fetch('/api/quizzes/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, choice, lang }),
  });
  if (!res.ok) throw new Error(`Check failed: ${res.status}`);
  return (await res.json()) as CheckResult;
}
