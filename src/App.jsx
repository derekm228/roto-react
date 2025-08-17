import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/health">Health</Link>
        <Link to="/grid">Grid</Link> {/* <-- add this */}
      </nav>
      <Outlet />
    </div>
  );
}