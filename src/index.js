import React from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { env } from "./config";

ReactGA.initialize("G-P7YWD9VX78");
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  <React.StrictMode>
    {/* <App env={env} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
