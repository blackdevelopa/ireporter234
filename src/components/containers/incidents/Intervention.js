import React, {Component } from 'react';
import classes from './Incident.css';
import { connect } from 'react-redux';
import Incident from '../../incident/incident';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { withRouter } from 'react-router-dom';
import { fetchInterventionIncident } from '../../../store/actions/incident/intervention-dispatcher';

class Intervention extends Component {

  componentDidMount() {
    console.log('hi')
    this.props.fetchInterventionIncident()
  }
  render () {
  return (
    <div className={classes.main}>
      <Navbar name="Profile" />
      <SwitchNav />
      <Incident />
      <Incident />
      <Incident />
    </div>
  )
}
}

const mapStateToProps = state => ({
  sucess: state.intervention.success
})

export default connect(mapStateToProps, {fetchInterventionIncident})(withRouter(Intervention));