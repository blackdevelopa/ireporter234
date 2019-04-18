import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/Landing/LandingPage';


const routes = () => (
  <Switch>
    <Route path='/' component={LandingPage} exact />
  </Switch>
)

export default routes;