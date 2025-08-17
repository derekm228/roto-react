import { useApi } from "./hooks/useApi";

export default function Health() {
  const { data, error, loading } = useApi("/api/health");

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}