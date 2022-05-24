import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
