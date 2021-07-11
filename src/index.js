import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configs } from "./redux/store";
import { persistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configs.store}>
      <persistGate loading={null} persisor={configs.persistor}>
        <App />
      </persistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
