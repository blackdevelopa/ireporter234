import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes'
import classes from './style/index.css';
import { Provider }  from "react-redux";
import store from '../store/store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
    <Provider store={store}> 
      <ToastContainer autoClose={2000}/>
      <Router>
        <Routes className={classes.body}/>
      </Router>
    </Provider>
    )
  }
}

export default App;
