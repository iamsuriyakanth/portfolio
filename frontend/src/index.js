import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "@/index.css";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Redirect base URL to /portfolio by default
if (window.location.pathname === '/' || window.location.pathname === '') {
  window.location.replace('/portfolio');
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);


