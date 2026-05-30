// Express server: content API + numerical-solve API, and serves the built
// client in production. In dev, Vite (port 5173) proxies /api here (port 3001).
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

import { getDocument } from "./content.js";
import { buildFuncs, buildExact } from "../shared/derivatives.js";
import { METHOD_KEYS, solveWithError, convergenceSweep } from "../shared/solvers.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

// --- Content API ---
// GET /api/content?lang=en|hu&type=textbook|slides
app.get("/api/content", async (req, res) => {
  const lang = req.query.lang === "hu" ? "hu" : "en";
  const type = req.query.type === "slides" ? "slides" : "textbook";
  try {
    res.json(await getDocument(lang, type));
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// --- Solve API ---
// POST /api/solve { f, exact?, t0, T, y0, h, methods:[...] }
app.post("/api/solve", (req, res) => {
  const { f, exact, t0, T, y0, h, methods } = req.body || {};
  if (typeof f !== "string" || ![t0, T, y0, h].every((v) => typeof v === "number")) {
    return res.status(400).json({ error: "Expected { f:string, t0,T,y0,h:number, methods? }" });
  }
  const keys = Array.isArray(methods) && methods.length
    ? methods.filter((k) => METHOD_KEYS.includes(k))
    : ["euler"];
  try {
    const funcs = buildFuncs(f);
    const exactFn = exact ? buildExact(exact) : null;
    const opts = { t0, T, y0, h };
    const results = keys.map((k) => solveWithError(k, funcs, opts, exactFn));
    res.json({ opts, exprs: funcs.exprs, results });
  } catch (err) {
    res.status(400).json({ error: `Solve failed: ${err.message}` });
  }
});

// POST /api/convergence { f, exact?, t0, T, y0, methods:[...], hList:[...] }
app.post("/api/convergence", (req, res) => {
  const { f, exact, t0, T, y0, methods, hList } = req.body || {};
  if (typeof f !== "string" || !Array.isArray(hList)) {
    return res.status(400).json({ error: "Expected { f:string, hList:number[] }" });
  }
  const keys = (Array.isArray(methods) ? methods : ["euler"]).filter((k) => METHOD_KEYS.includes(k));
  try {
    const funcs = buildFuncs(f);
    const exactFn = exact ? buildExact(exact) : null;
    const opts = { t0, T, y0 };
    const results = keys.map((k) => ({ key: k, points: convergenceSweep(k, funcs, opts, exactFn, hList) }));
    res.json({ results });
  } catch (err) {
    res.status(400).json({ error: `Convergence failed: ${err.message}` });
  }
});

// --- Static client (production) ---
const dist = join(__dirname, "..", "client", "dist");
if (existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(join(dist, "index.html")));
}

app.listen(PORT, () => {
  console.log(`ODE app server listening on http://localhost:${PORT}`);
});
