import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateNewIncident extends Component {
  state = {
    location: '',
    comment: '',
    time:  '',
  }

  render() {
    const {
      state: {
        location,
        comment,
        time,
      }
    } = this;

    return (
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.content}>
            <h4 placeholder="Add location">
            <p placeholder="Add comment"></p>
            <p placeholder="time"></p>
            <button className={classes.disabledButton} type="button">Draft</button>
            </h4>
          </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(CreateNewIncident);