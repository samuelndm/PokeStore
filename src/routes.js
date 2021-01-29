import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename='/'>
      <C.Navbar />

      <Switch>
        <Route exact path='/' component={P.TypesListPage} />
        <Route path='/lista-tipos' component={P.TypesListPage} />
        <Route path='/tipo/:slug' component={P.PokemonsListPage} />
        <Route path='/pokemon/:id' component={P.PokemonInfoPage} />
        <Route path='/carrinho' component={P.CartPage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
