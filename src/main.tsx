import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Bootstrap Icon CSS
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom Reset CSS
import "./assets/css/reset.css";
// Global CSS
import "./assets/css/global.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
