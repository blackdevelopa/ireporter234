/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchSingleIncident } from '../../../redux/actions/incident/incident';
import classes from './Incident.css';

export class SingleRedFlag extends Component {
  componentDidMount() {
    this.props.fetchSingleIncident('red-flags', this.props.match.params.id);
  }

  render() {
    const { singleRedflag, isLoading } = this.props;
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    if (!singleRedflag.id) {
      return (
        <div className="no-incidents">
          You do not have any incident. Click to create one
        </div>
      );
    }
    const redflagInfo = {
      image: singleRedflag.images,
      header: singleRedflag.location,
      extra: singleRedflag.status,
      description: singleRedflag.comment,
      meta: singleRedflag.createdon,
    };
    return (
      <div>
        <Navbar />
        <SwitchNav />
        <div className={classes.Group}>
          <Card centered {...redflagInfo} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleRedflag: state.incident.singleIncident,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleRedFlag));
