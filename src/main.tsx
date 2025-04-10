import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </BrowserRouter>
  </StrictMode>
);
