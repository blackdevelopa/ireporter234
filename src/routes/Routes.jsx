import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/containers/landing/LandingPage';
import RedFlag from '../components/containers/incidents/RedFlag';
import Profile from '../components/containers/dashboard/UserDashboard';
import Intervention from '../components/containers/incidents/Intervention';
import NewRedflag from '../components/containers/incidents/NewRedFlag';
import NewIntervention from '../components/containers/incidents/NewIntervention';
import Admin from '../components/containers/dashboard/AdminDashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/red-flags" component={RedFlag} />
      <Route path="/interventions" component={Intervention} />
      <Route path="/dashboard" component={Profile} />
      <Route path="/new-red-flag" component={NewRedflag} />
      <Route path="/new-intervention" component={NewIntervention} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};

export default Routes;
