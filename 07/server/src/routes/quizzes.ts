import { Router } from 'express';
import { quizzes, publicQuestion, checkAnswer, normalizeLang } from '../content.js';

export const quizzesRouter = Router();

// Return questions for a language, without the answer keys.
quizzesRouter.get('/', (req, res) => {
  const lang = normalizeLang(req.query.lang);
  const topic = typeof req.query.topic === 'string' ? req.query.topic : null;
  const list = quizzes
    .filter((q) => !topic || q.topic === topic)
    .map((q) => publicQuestion(q, lang));
  res.json(list);
});

// Check a submitted answer; answer key stays on the server.
quizzesRouter.post('/check', (req, res) => {
  const lang = normalizeLang(req.body?.lang);
  const { id, choice } = req.body ?? {};
  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Missing question id' });
    return;
  }
  const result = checkAnswer(id, choice, lang);
  if (!result) {
    res.status(404).json({ error: 'Question not found' });
    return;
  }
  res.json(result);
});
