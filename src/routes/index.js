import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import Events from 'pages/Events';
import Dashboard from 'pages/Dashboard';
import Lessons from 'pages/Lessons';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/lessons/:id" exact component={Lessons} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
