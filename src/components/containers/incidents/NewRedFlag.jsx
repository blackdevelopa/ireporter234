/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Container, Button, Form, Input, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import { createNewIncident } from '../../../redux/actions/incident/incident';

class createNewRedFlag extends Component {
  state = {
    location: '',
    images: '',
    comment: '',
  };

  firstbtnclick = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/red-flags');
  };

  secondbtnclick = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/interventions');
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    const { location, comment, images } = this.state;
    const { createNewIncident, newRedflag, history } = this.props;
    e.preventDefault();
    const incidentData = {
      location,
      comment,
      images,
    };
    await createNewIncident('red-flags', incidentData);
    if (newRedflag) {
      history.push('/red-flags');
    }
  };

  render() {
    return (
      <div>
        <Navbar
          firstbtnclick={this.firstbtnclick}
          secondbtnclick={this.secondbtnclick}
          firstbtn="Redflag"
          secondbtn="Intervention"
          access="true"
        />
        <SwitchNav />
        <Container className={classes.Content}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Your Location"
                name="location"
                onChange={this.handleInputChange}
                placeholder="lagos..."
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              label="Upload image"
              name="images"
              onChange={this.handleInputChange}
              placeholder="click to upload"
            />
            <Form.Field
              control={TextArea}
              label="Comment"
              name="comment"
              onChange={this.handleInputChange}
              placeholder="Share what you can see..."
              required
            />
            <Form.Field fluid control={Button}>
              Submit
            </Form.Field>
          </Form>
        </Container>
      </div>
    );
  }
}

createNewRedFlag.propTypes = {
  createNewIncident: PropTypes.func.isRequired,
  newRedflag: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  newRedflag: state.incident.newIncident,
});

export default connect(
  mapStateToProps,
  { createNewIncident }
)(withRouter(createNewRedFlag));
