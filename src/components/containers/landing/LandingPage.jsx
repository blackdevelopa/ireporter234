/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './LandingPage.css';
import Navbar from '../../navbar/Navbar';
import Login from '../../authentication/Login';

class LandingPage extends Component {
  state = {
    open: false,
    close: () => this.setState({ open: false }),
    show: dimmer => () => this.setState({ dimmer, open: true }),
  };

  render() {
    const { show } = this.state;
    const { isAuthenticated, history } = this.props;
    return (
      <div className={classes.Body}>
        <Navbar
          secondbtn="Get Started"
          secondbtnclick={show('blurring')}
          access="false"
        />
        <Login modalState={this.state} />
        <div className={classes.Container}>
          <div className={classes.Card}>
            <div className={classes.Card_content}>
              <h1 className={classes.Card_text}>
                <strong>
                  Pledge to make Nigeria better by reporting events in your
                  location.
                </strong>
              </h1>
              <br />
            </div>
            <div>
              <button
                type="submit"
                onClick={
                  isAuthenticated
                    ? () => history.push('/red-flags')
                    : show('blurring')
                }
                className={classes.Button}
              >
                <strong>Let us Get started</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  history: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(withRouter(LandingPage));
