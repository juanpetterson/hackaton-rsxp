import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
// import Dashboard from 'pages/Dashboard';
import Events from 'pages/Events';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/" exact component={Dashboard} /> */}
      <Route path="/events" component={Events} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
