/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchSingleIncident } from '../../../store/actions/incident/incident';
import classes from './Incident.css';

class SingleRedFlag extends Component {
  componentDidMount() {
    this.props.fetchSingleIncident('red-flags', this.props.match.params.id);
  }

  render() {
    const { singleRedflag } = this.props;
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
  singleRedflag: state.redflag.singleRedflag,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleRedFlag));
