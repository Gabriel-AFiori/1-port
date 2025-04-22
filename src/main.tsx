import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StockProvider } from "./context/StockContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StockProvider>
      <App />
    </StockProvider>
  </React.StrictMode>
);
