import React from 'react';
import classes from './Navbar.css';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Logo}>
        <a href='/' className={classes.Navbar_text}>iReporter</a>
      </div>
      <div className={classes.Menu}>
        <a href='/' className={classes.Navbar_text}>Log In</a>
        <a href='/' className={classes.Navbar_text}>Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar;