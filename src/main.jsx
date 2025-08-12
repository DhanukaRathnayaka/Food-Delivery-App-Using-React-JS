import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";   // change here
import StoreContexProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>                      {/* change BrowserRouter to HashRouter */}
    <StoreContexProvider>
      <App />
    </StoreContexProvider>
  </HashRouter>
);
