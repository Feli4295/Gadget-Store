import React from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

import "./index.css";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <Toaster position="top-right" />
    </CartProvider>
  </React.StrictMode>
);
