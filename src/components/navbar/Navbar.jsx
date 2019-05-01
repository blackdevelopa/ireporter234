import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import classes from './Navbar.css';

const Navbar = props => {
  const brand = 'iReporter';
  const { name } = props;
  return (
    <div className={classes.navbar}>
      <a href="/" className={classes.navbar_text}>
        {brand}
      </a>
      <Button size="medium" color="black" className={classes.button}>
        {name}
      </Button>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.shape({}).isRequired,
};

export default Navbar;
