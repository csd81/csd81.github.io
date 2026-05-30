import express from 'express';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { clientDist } from './paths.js';
import { lessonsRouter } from './routes/lessons.js';
import { quizzesRouter } from './routes/quizzes.js';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

// API
app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/lessons', lessonsRouter);
app.use('/api/quizzes', quizzesRouter);

// Serve the built SPA in production (no-op in dev, where Vite serves the client).
if (existsSync(clientDist)) {
  app.use(express.static(clientDist));
  // SPA fallback for client-side routing (everything except /api/*).
  app.get(/^(?!\/api\/).*/, (_req, res) => {
    res.sendFile(resolve(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[server] API listening on http://localhost:${PORT}`);
  if (!existsSync(clientDist)) {
    console.log('[server] client/dist not found — run "npm run dev" for the Vite dev server.');
  }
});
