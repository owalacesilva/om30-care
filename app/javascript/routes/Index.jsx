import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import TownListPage from "../pages/TownListPage";
import TownPage from "../pages/TownPage";

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={TownListPage} />
      <Route path="/:slug" exact component={TownPage} />
    </Switch>
  </HashRouter>
);