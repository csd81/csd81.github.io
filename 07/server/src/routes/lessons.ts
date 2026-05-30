import { Router } from 'express';
import { lessons, getLessonMarkdown, normalizeLang } from '../content.js';

export const lessonsRouter = Router();

// List all lessons (bilingual titles).
lessonsRouter.get('/', (_req, res) => {
  res.json(lessons);
});

// Fetch one lesson's markdown for a given language.
lessonsRouter.get('/:id', (req, res) => {
  const lang = normalizeLang(req.query.lang);
  const found = getLessonMarkdown(req.params.id, lang);
  if (!found) {
    res.status(404).json({ error: 'Lesson not found' });
    return;
  }
  res.json({
    id: found.meta.id,
    slug: found.meta.slug,
    lang,
    title: found.meta.title[lang],
    markdown: found.markdown,
  });
});
