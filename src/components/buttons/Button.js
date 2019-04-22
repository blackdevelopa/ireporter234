import React from 'react';
import classes from './Button.css';

const Button = () => {
  return (
    <div>
      <button className={classes.Button}>Sign up</button>
      <button className={classes.Button}>Login</button>
    </div>
  )
}

export default Button;