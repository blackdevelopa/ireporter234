import React, {Component } from 'react';
import classes from './Incident.css';
import { connect } from 'react-redux';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { withRouter } from 'react-router-dom';
import { fetchInterventionIncident } from '../../../store/actions/incident/intervention-dispatcher';
import { Card } from 'semantic-ui-react';

class Intervention extends Component {

  componentDidMount() {
    this.props.fetchInterventionIncident()
  }
  render () {
    const interventionInfo = this.props.intervention.map(data => {
      return {
        image: {pic},
        header: data.location,
        description: data.comment,
        meta: data.createdon,
      }
    })
  return (
    <div className={classes.main}>
      <Navbar name="Profile" />
      <SwitchNav />
      <Card.Group items={interventionInfo} />
    </div>
  )
}
}

const mapStateToProps = state => ({
  intervention: state.intervention.intervention
})

export default connect(mapStateToProps, {fetchInterventionIncident})(withRouter(Intervention));