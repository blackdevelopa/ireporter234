import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/containers/landing/LandingPage';
import RedFlag from '../components/containers/incidents/RedFlag';
import Profile from '../components/containers/dashboard/UserDashboard';
import Intervention from '../components/containers/incidents/Intervention';
import New from '../components/containers/incidents/NewIncident';
import Admin from '../components/containers/dashboard/AdminDashboard';

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/red-flags' component={RedFlag} />
        <Route path='/interventions' component={Intervention} />
        <Route path='/dashboard' component={Profile} />
        <Route path='/new' component={New} />
        <Route path='/admin' component={Admin} />
      </Switch>
    )
  }
}

export default Routes;