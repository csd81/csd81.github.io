import { useState, useEffect } from "react";

const cache = new Map();

// Fetch sectioned markdown from the server, cached per (lang, type).
export function useContent(lang, type) {
  const key = `${lang}:${type}`;
  const [doc, setDoc] = useState(() => cache.get(key) || null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (cache.has(key)) { setDoc(cache.get(key)); setError(null); return; }
    setDoc(null); setError(null);
    fetch(`/api/content?lang=${lang}&type=${type}`)
      .then((r) => (r.ok ? r.json() : r.json().then((j) => Promise.reject(new Error(j.error)))))
      .then((json) => { if (!cancelled) { cache.set(key, json); setDoc(json); } })
      .catch((e) => { if (!cancelled) setError(e.message); });
    return () => { cancelled = true; };
  }, [key, lang, type]);

  return { doc, error };
}
