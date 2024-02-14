import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <ToastContainer />
  </>,
);
