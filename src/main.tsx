import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CollectionProvider } from "./context/CollectionContext";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CollectionProvider>
      <App />
    </CollectionProvider>
  </StrictMode>,
);
