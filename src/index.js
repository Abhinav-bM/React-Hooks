import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Parent from "./components/Parent";
import Counter from "./Counter";
import Effect from "./Effect";
import Layout from "./Layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout />

);

reportWebVitals();
