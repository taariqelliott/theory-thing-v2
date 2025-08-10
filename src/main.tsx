import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Desktop from "./App";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Desktop />
    </ThemeProvider>
  </StrictMode>
);
