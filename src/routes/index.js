import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Events from 'pages/Events';
import Dashboard from 'pages/Dashboard';
import Lessons from 'pages/Lessons';
import Articles from 'pages/Articles';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/articles" component={Articles} />
    <Route path="/events" component={Events} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/lessons/:id" component={Lessons} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
