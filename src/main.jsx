import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Import Leaflet CSS globally
import "leaflet/dist/leaflet.css";

// ✅ Fix Leaflet marker icons
import "./utils/fixLeafletIcons.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
