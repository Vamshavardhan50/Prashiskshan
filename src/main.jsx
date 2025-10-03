import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.jsx";
import { registerSW, trackPWAEvent } from "./utils/pwa.js";

// Register Service Worker and PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    registerSW();
  });
}

// Track PWA installation
window.addEventListener("beforeinstallprompt", (e) => {
  trackPWAEvent("install_prompt_shown");
});

window.addEventListener("appinstalled", () => {
  trackPWAEvent("app_installed");
});

// Track online/offline status
window.addEventListener("online", () => {
  trackPWAEvent("went_online");
});

window.addEventListener("offline", () => {
  trackPWAEvent("went_offline");
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
