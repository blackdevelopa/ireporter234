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
import { fetchSingleIncident } from '../../../redux/actions/incident/incident';

export class SingleIntervention extends Component {
  componentDidMount() {
    this.props.fetchSingleIncident('interventions', this.props.match.params.id);
  }

  render() {
    const { singleIntervention, isLoading } = this.props;
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    if (!singleIntervention.id) {
      return (
        <div className="no-incidents">
          You do not have any incident. Click to create one
        </div>
      );
    }
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
  singleIntervention: state.incident.singleIncident,
  isLoading: state.incident.isLoading,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleIntervention));
