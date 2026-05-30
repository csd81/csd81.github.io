import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

// Works both in dev (server/src) and prod (server/dist): repo root is two levels up.
export const repoRoot = resolve(here, '..', '..');
export const contentDir = resolve(repoRoot, 'content');
export const lessonsDir = resolve(contentDir, 'lessons');
export const clientDist = resolve(repoRoot, 'client', 'dist');
