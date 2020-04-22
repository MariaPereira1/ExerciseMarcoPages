import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Routes from "./routes";
import "normalize.css";
import "./styles/App.less";

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
