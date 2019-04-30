import React from 'react';
import classes from './Navbar.css';
import { Button } from 'semantic-ui-react';


const Navbar = (props) => {
  const brand = 'iReporter'
  return (
    <div className={classes.navbar}>
      <a href='#' className={classes.navbar_text}>{brand}</a>
      <Button size="medium" color="black" className={classes.button}>
        {props.name}
      </Button>
    </div>
  )
}

export default Navbar;