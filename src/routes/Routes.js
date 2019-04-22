import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/Landing/LandingPage';
import RedFlag from '../components/pages/RedFlag/RedFlag';
import Profile from '../components/pages/Profile/Profile';
import Intervention from '../components/pages/Intervention/Intervention';



class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/red-flags' component={RedFlag} />
        <Route path='/interventions' component={Intervention} />
        <Route path='/profile' component={Profile} />
      </Switch>
    )
  }
}


export default Routes;