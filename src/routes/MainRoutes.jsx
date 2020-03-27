import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";

import Login from "../view/pages/Login";
import Register from "../view/pages/Register";
import ForgotPassword from "../view/pages/ForgotPassword";
import VerifyMobile from "../view/pages/VerifyMobile";
import Dashboard from "../view/pages/Dashboard";

import { createBrowserHistory } from 'history';
var history = createBrowserHistory();

export default function MainRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Router history={history}>
          <Route exact path="/" component={Login} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/verify" component={VerifyMobile} />
          <Route path="/dashboard" component={Dashboard} />
          
        </Router>
      </Switch>
    </Router>
  );
}