import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <Router>
      <C.Navbar />

      <Switch>
        <Route exact path='/' component={P.BasePage} />
        <Route path='/lista-tipos' component={P.TypesListPage} />
        <Route path='/pokemon/:id' component={P.PokemonPage} />
        <Route path='/:slug' component={P.BasePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
