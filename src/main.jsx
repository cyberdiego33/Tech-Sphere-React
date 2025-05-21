import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// window.addEventListener('load', function() {
//     window.scrollTo(0, 0);
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
