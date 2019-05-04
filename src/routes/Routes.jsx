import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/containers/landing/LandingPage';
import RedFlag from '../components/containers/incidents/RedFlag';
import Intervention from '../components/containers/incidents/Intervention';
import NewRedflag from '../components/containers/incidents/NewRedFlag';
import NewIntervention from '../components/containers/incidents/NewIntervention';
import SingleRedFlag from '../components/containers/incidents/SingleRedFlag';
import SingleIntervention from '../components/containers/incidents/SingleIntervention';
import Notfound from '../components/containers/incidents/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/red-flags/" component={RedFlag} exact />
      <Route path="/interventions" component={Intervention} />
      <Route path="/new-red-flag" component={NewRedflag} exact />
      <Route path="/new-intervention" component={NewIntervention} />
      <Route path="/red-flags/:id?" component={SingleRedFlag} />
      <Route path="/intervention/:id?" component={SingleIntervention} />
      <Route component={Notfound} />
    </Switch>
  );
};

export default Routes;
