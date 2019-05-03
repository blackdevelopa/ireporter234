/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'semantic-ui-react';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchInterventionIncident } from '../../../store/actions/incident/intervention';

class Intervention extends Component {
  componentDidMount() {
    this.props.fetchInterventionIncident();
  }

  render() {
    const interventionInfo = this.props.intervention.map(data => {
      const descriptionText = (
        <div className={classes.Ellipsis}>{data.comment}</div>
      );
      return {
        image: data.images,
        header: data.location,
        extra: data.status,
        description: descriptionText,
        meta: data.createdon.substr(0, 10),
      };
    });

    return (
      <div className={classes.main}>
        <Navbar name="Profile" />
        <SwitchNav />
        <div className={classes.Group}>
          <Container>
            <Card.Group items={interventionInfo} centered />
          </Container>
        </div>
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
