import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
// import Dashboard from 'pages/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/" exact component={Dashboard} /> */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
