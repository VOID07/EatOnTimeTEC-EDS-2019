import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import NotFoundPage from "./containers/NotFoundPage.js";
import LoginPage from "./containers/LoginPage";
import FormPage from "./containers/FormPage";
import TablePage from "./containers/TablePage";
import Dashboard from "./containers/DashboardPage";
import Points from "./containers/Points.js";
import Tiempo from "./containers/Tiempo";
import Recomendar from "./containers/Recomendaciones";
import Satisfaccion from "./containers/Satisfaccion";
import Descuentos from "./containers/Descuentos";
export default (
  <Route>
    <Route path="login" component={LoginPage} />
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="form" component={FormPage} />
      <Route path="table" component={TablePage} />
      <Route path="points" component={Points} />
      <Route path="tiempo" component={Tiempo} />
      <Route path="recomendar" component={Recomendar} />
      <Route path="satisfaccion" component={Satisfaccion} />
      <Route path="descuentos" component={Descuentos} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);