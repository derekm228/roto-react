import "./agGrid.config.js"; // <-- add this line FIRST, before rendering

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Health from "./Health.jsx";
import Grid from "./Grid.jsx";

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "health", element: <Health /> },
      { path: "grid", element: <Grid /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);