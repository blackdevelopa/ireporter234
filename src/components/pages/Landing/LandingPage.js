import React from 'react'
import classes from './LandingPage.css';
import Navbar from '../../navbar/Navbar';

const LandingPage = () => {
  return (
    <div className={classes.Body}>
      <Navbar />
      <div className={classes.Container}>
        <div className={classes.Card}>
          <div className={classes.Card_content}>
            <h4 className={classes.Card_text}>Corruption has eaten deep into our country. It is now our responsibility to report all incidence of corruption, as well any situation that requires our government's intervention.
            </h4><br></br>
            <p className={classes.Card_text}>Pledge to make Nigeria better by reporting events in your location.</p>
          </div>
          <div>
            <button href="#" className={classes.Button}><strong>Let's Get started</strong></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
