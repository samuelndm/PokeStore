import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename='/'>
      <C.Navbar />

      <Switch>
        <Route exact path='/' component={P.BasePage} />
        <Route path='/lista-tipos' component={P.TypesListPage} />
        <Route path='/pokemon/:id' component={P.PokemonPage} />
        <Route path='/carrinho' component={P.CartPage} />
        <Route path='/:slug' component={P.BasePage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
