import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TownListPage from "../pages/TownListPage";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={TownListPage} />
      <Route path="/:slug" exact component={TownListPage} />
    </Switch>
  </Router>
);