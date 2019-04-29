import React, {Component } from 'react';
import classes from './Incident.css';
import { connect } from 'react-redux';
import Incident from '../../incident/incident';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchRedflagIncident } from '../../../store/actions/incident/redflag-dispatchers';
import { withRouter } from 'react-router-dom';

class Redflag extends Component {

  componentDidMount() {
    console.log('hi')
    this.props.fetchRedflagIncident()
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
  sucess: state.redflag.success
})

export default connect(mapStateToProps, {fetchRedflagIncident})(withRouter(Redflag));