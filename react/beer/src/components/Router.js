import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import history from "../utils/history";
import * as routes from "../constants/routes";

import Main from "./main";
import Favourites from "./favourites"

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Main} />
      <Route exact path={routes.FAVOURITES} component={Favourites} />
    </Switch>
  </Router>
);

export default AppRouter;
