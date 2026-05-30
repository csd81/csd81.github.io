import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Client root is ./client; built assets go to client/dist (served by Express in prod).
// /api is proxied to the Express server during development.
export default defineConfig({
  root: "client",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
