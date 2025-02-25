import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Appstore from "./store/Appstore.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Appstore>
    <App />
    </Appstore>
    <ToastContainer/>
  </BrowserRouter>
);
