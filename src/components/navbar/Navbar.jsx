/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import classes from './Navbar.css';

const Navbar = props => {
  const brand = 'iReporter';
  const { firstbtnclick, firstbtn, access, secondbtn, secondbtnclick } = props;
  return (
    <div className={classes.navbar}>
      <div>
        <a href="/" className={classes.navbar_text}>
          {brand}
        </a>
        {access === 'true' && (
          <Button
            size="medium"
            color="blue"
            onClick={firstbtnclick}
            className={classes.button}
          >
            {firstbtn}
          </Button>
        )}

        <Button
          size="medium"
          onClick={secondbtnclick}
          color="green"
          className={classes.button}
        >
          {secondbtn}
        </Button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  firstbtn: PropTypes.string,
  secondbtn: PropTypes.string,
  firstbtnclick: PropTypes.func,
  secondbtnclick: PropTypes.func,
};

export default Navbar;
