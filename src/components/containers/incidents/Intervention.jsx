/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchInterventionIncident } from '../../../store/actions/incident/intervention-dispatcher';

class Intervention extends Component {
  componentDidMount() {
    this.props.fetchInterventionIncident();
  }

  render() {
    const interventionInfo = this.props.intervention.map(data => {
      return {
        image: { pic },
        header: data.location,
        description: data.comment,
        meta: data.createdon,
      };
    });
    return (
      <div>
        <Navbar name="Profile" />
        <SwitchNav />
        <Card.Group items={interventionInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  intervention: state.intervention.intervention,
});

export default connect(
  mapStateToProps,
  { fetchInterventionIncident }
)(withRouter(Intervention));
