import React, { Component } from 'react';
import classes from './LandingPage.css';
import Navbar from '../../navbar/Navbar';
import Login from '../../authentication/Login';
import {withRouter} from 'react-router-dom';

class LandingPage extends Component {
  state = { 
    open: false, 
    close: () => this.setState({open: false }),
    show: dimmer => () => this.setState({dimmer, open: true }),
  }

  redirectToHome = () => {
    // const {history} = this.props;
    console.log('hi');
    if(history) history.push('profile');
  }

  render() {
    return (
      <div className={classes.Body}>
        <Navbar />
        <Login modalState={this.state} onClick={this.redirectToHome}/>
        <div className={classes.Container}>
          <div className={classes.Card}>
            <div className={classes.Card_content}>
              <h4 className={classes.Card_text}>Corruption has eaten deep into our country. It is now our responsibility to report all incidence of corruption, as well any situation that requires our government's intervention.
              </h4><br></br>
              <p className={classes.Card_text}>Pledge to make Nigeria better by reporting events in your location.</p>
            </div>
            <div>
              <button href="#" onClick={this.state.show('blurring')} className={classes.Button}><strong>Let's Get started</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default withRouter(LandingPage);
