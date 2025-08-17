import { useEffect, useState } from "react";

export function useApi(path, options = {}, { timeoutMs = 10000 } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    const id = setTimeout(() => ac.abort(new Error("Request timeout")), timeoutMs);

    async function run() {
      try {
        const res = await fetch(path, { ...options, signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        clearTimeout(id);
        setLoading(false);
      }
    }

    run();
    return () => {
      clearTimeout(id);
      ac.abort();
    };
  }, [path]);

  return { data, error, loading };
}