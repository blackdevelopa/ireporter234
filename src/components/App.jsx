import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes/Routes';
import store from '../store';
import 'react-toastify/dist/ReactToastify.css';
import { loggedIn } from '../../helpers';

loggedIn();

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
