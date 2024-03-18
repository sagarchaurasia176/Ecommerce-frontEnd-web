import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
// react [dom create root 
import { Provider } from "react-redux";
import { store } from "./States/Store/store.js";
import { ToastContainer, toast } from 'react-toastify';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
