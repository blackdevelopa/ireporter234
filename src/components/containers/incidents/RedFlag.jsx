/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'semantic-ui-react';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchAllIncident } from '../../../redux/actions/incident/incident';
import ViewCard from './viewSingleIncident';

export class Redflag extends Component {
  componentDidMount() {
    const { fetchAllIncident } = this.props;
    fetchAllIncident('red-flags');
  }

  firstbtnclick = () => {
    const { history } = this.props;
    history.push('/new-red-flag');
  };

  secondbtnclick = () => {
    const { history } = this.props;
    history.push('/interventions');
  };

  render() {
    const { redflag } = this.props;
    return (
      <div className={classes.main}>
        <Navbar
          firstbtnclick={this.firstbtnclick}
          secondbtnclick={this.secondbtnclick}
          firstbtn="Add New Redflag"
          secondbtn="Intervention"
          access="true"
        />
        <SwitchNav />
        <div className={classes.Group}>
          <Container>
            <Card.Group centered>
              <ViewCard data={redflag} type="red-flags" />
            </Card.Group>
          </Container>
        </div>
      </div>
    );
  }
}

Redflag.propTypes = {
  fetchAllIncident: PropTypes.func.isRequired,
  redflag: PropTypes.array.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  redflag: state.incident.incident,
});

export default connect(
  mapStateToProps,
  { fetchAllIncident }
)(withRouter(Redflag));
