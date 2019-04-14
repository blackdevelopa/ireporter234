import React, { Component } from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import './style/index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LandingPage />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
