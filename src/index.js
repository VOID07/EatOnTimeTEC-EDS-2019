/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";

import ReactDOM from "react-dom";

import Firebase, { FirebaseContext } from "./components/Firebase";
import injectTapEventPlugin from "react-tap-event-plugin";
require("./favicon.ico");
import "./styles.scss";
import "font-awesome/css/font-awesome.css";
import "flexboxgrid/css/flexboxgrid.css";

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById("root")
);
