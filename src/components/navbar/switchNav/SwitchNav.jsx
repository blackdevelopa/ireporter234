import React from 'react';
import classes from './SwitchNav.css';

const switchNav = name => {
  return <div className={classes.switchNav} props={name} />;
};

export default switchNav;
