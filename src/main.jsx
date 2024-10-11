import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import "toastify-js/src/toastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
