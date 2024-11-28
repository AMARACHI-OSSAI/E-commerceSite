import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProdContext from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProdContext>
      <SearchProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchProvider>
    </ProdContext>
  </React.StrictMode>
);
