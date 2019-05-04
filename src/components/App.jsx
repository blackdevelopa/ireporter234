/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes/Routes';
import classes from './style/index.css';
import store from '../store/store';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Routes className={classes.body} />
        </Router>
      </Provider>
    );
  }
}

export default App;
