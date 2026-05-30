import express from "express";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

const app = express();

const datasets = JSON.parse(readFileSync(join(__dirname, "datasets.json"), "utf8"));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "interplay", time: new Date().toISOString() });
});

app.get("/api/datasets", (_req, res) => {
  res.json(datasets);
});

// Serve the built SPA from ../dist (after `npm run build`).
const dist = join(__dirname, "..", "dist");
app.use(express.static(dist));
app.get("*", (_req, res) => {
  res.sendFile(join(dist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`InterPlay server on http://localhost:${PORT}`);
});
