/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import classes from './Incident.css';
import { fetchSingleIncident } from '../../../redux/actions/incident/incident';

export class SingleIntervention extends Component {
  componentDidMount() {
    const {
      fetchSingleIncident,
      match: {
        params: { id },
      },
    } = this.props;
    fetchSingleIncident('interventions', id);
  }

  secondbtnclick = () => {
    const { history } = this.props;
    history.push('/interventions');
  };

  firstbtnclick = () => {
    const { history } = this.props;
    history.push('/new-intervention');
  };

  render() {
    const { singleIntervention, isLoading } = this.props;
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    if (!singleIntervention.id) {
      return (
        <div>
          <h1 className={classes.noincidents}>There is no incident here</h1>
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
        <Navbar
          firstbtnclick={this.firstbtnclick}
          secondbtnclick={this.secondbtnclick}
          firstbtn="Add New Intervention"
          secondbtn="Intervention"
          access="true"
        />
        <SwitchNav />
        <div className={classes.Group}>
          <Container>
            <Card fluid {...interventionInfo} />
          </Container>
        </div>
      </div>
    );
  }
}

SingleIntervention.propTypes = {
  fetchSingleIncident: PropTypes.func.isRequired,
  singleIntervention: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  singleIntervention: state.incident.singleIncident,
  isLoading: state.incident.isLoading,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleIntervention));
