import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes'
import classes from './style/index.css';
import { Provider }  from "react-redux";
import store from '../store/store';


const App = () => (
  <Provider store={store}> 
    <Router>
      <Routes className={classes.body}/>
    </Router>
  </Provider>
)

export default App;
