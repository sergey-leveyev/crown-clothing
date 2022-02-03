import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { rootReducer } from "./redux/root-reducer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

// import store from "./redux/store";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
