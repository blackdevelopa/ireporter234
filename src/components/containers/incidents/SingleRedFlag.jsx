/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchSingleIncident } from '../../../redux/actions/incident/incident';
import classes from './Incident.css';

export class SingleRedFlag extends Component {
  componentDidMount() {
    const {
      fetchSingleIncident,
      match: {
        params: { id },
      },
    } = this.props;
    fetchSingleIncident('red-flags', id);
  }

  secondbtnclick = () => {
    const { history } = this.props;
    history.push('/red-flags');
  };

  firstbtnclick = () => {
    const { history } = this.props;
    history.push('/new-red-flag');
  };

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
      meta: singleRedflag.createdon.substr(0, 10),
    };
    return (
      <div>
        <Navbar
          firstbtnclick={this.firstbtnclick}
          secondbtnclick={this.secondbtnclick}
          firstbtn="Add New Redflag"
          secondbtn="Redflag"
          access="true"
        />
        <SwitchNav />
        <div className={classes.Group}>
          <Container>
            <Card fluid {...redflagInfo} />
          </Container>
        </div>
      </div>
    );
  }
}

SingleRedFlag.propTypes = {
  fetchSingleIncident: PropTypes.func.isRequired,
  singleRedflag: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  singleRedflag: state.incident.singleIncident,
});

export default connect(
  mapStateToProps,
  { fetchSingleIncident }
)(withRouter(SingleRedFlag));
