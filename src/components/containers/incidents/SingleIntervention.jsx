/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import classes from './Incident.css';
import { fetchSingleIncident } from '../../../store/actions/incident/incident';

class SingleIntervention extends Component {
  componentDidMount() {
    this.props.fetchSingleIncident(
      'new-intervention',
      this.props.match.params.id
    );
  }

  render() {
    const { singleIntervention } = this.props;
    const interventionInfo = {
      image: singleIntervention.images,
      header: singleIntervention.location,
      extra: singleIntervention.status,
      description: singleIntervention.comment,
      meta: singleIntervention.createdon,
    };
    return (
      <div>
        <Navbar />
        <SwitchNav />
        <div className={classes.Group}>
          <Card centered {...interventionInfo} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleIntervention: state.intervention.singleIntervention,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleIntervention));
