import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes/Routes';
import store from '../store';
import 'react-toastify/dist/ReactToastify.css';
import { setCurrentUser } from '../redux/actions/auth/login';

if (localStorage.authorization) {
  const token = localStorage.getItem('authorization');
  store.dispatch(setCurrentUser(token));
}

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
