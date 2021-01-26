import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as P from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={P.HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
