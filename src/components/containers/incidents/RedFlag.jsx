/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchRedflagIncident } from '../../../store/actions/incident/redflag-dispatchers';
import pic from '../../../../public/assets/download.png';

class Redflag extends Component {
  componentDidMount() {
    this.props.fetchRedflagIncident();
  }

  render() {
    const redflagInfo = this.props.redflag.map(data => {
      return {
        image: { pic },
        header: data.location,
        description: data.comment,
        meta: data.createdon,
      };
    });

    return (
      <div className={classes.main}>
        <Navbar name="Profile" />
        <SwitchNav />
        <Card.Group items={redflagInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redflag: state.redflag.redflag,
});

export default connect(
  mapStateToProps,
  { fetchRedflagIncident }
)(withRouter(Redflag));
