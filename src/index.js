import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./localization/config";
/* import './fonts/Roboto/Roboto-Thin.ttf';
 import './fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <main className="container_horizontal main">
          <h2 className="headline">Loading...</h2>
        </main>
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
