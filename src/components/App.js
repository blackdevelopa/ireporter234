import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes'
import './style/index.css';
import { Provider }  from "react-redux";
import { ToastContainer} from 'react-toastify';
import store from '../store/store';



const App = () => (
  <Provider store={store}> 
    <Router>
      <Routes />
    </Router>
    <ToastContainer autoClose={1000} />
  </Provider>
)

export default App;
