/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchAllIncident } from '../../../redux/actions/incident/incident';
import ViewCard from './viewSingleIncident';

class Intervention extends Component {
  componentDidMount() {
    const { fetchAllIncident } = this.props;
    fetchAllIncident('interventions');
  }

  firstbtnclick = () => {
    const { history } = this.props;
    history.push('/new-intervention');
  };

  secondbtnclick = () => {
    const { history } = this.props;
    history.push('/red-flags');
  };

  render() {
    const { intervention } = this.props;
    return (
      <div className={classes.main}>
        <Navbar
          firstbtnclick={this.firstbtnclick}
          secondbtnclick={this.secondbtnclick}
          firstbtn="Add New Intervention"
          secondbtn="Redflag"
          access="true"
        />
        <SwitchNav />
        <div className={classes.Group}>
          <Container>
            <Card.Group centered>
              <ViewCard data={intervention} type="interventions" />
            </Card.Group>
          </Container>
        </div>
      </div>
    );
  }
}

Intervention.propTypes = {
  fetchAllIncident: PropTypes.func.isRequired,
  intervention: PropTypes.array.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  intervention: state.incident.incident,
});

export default connect(
  mapStateToProps,
  { fetchAllIncident }
)(withRouter(Intervention));
