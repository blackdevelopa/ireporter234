/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Container, Button, Form, Input, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import { createNewIncident } from '../../../redux/actions/incident/incident';

class createNewIntervention extends Component {
  state = {
    location: '',
    images: '',
    comment: '',
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    const { location, comment, images } = this.state;
    const { newIntervention, createNewIncident, history } = this.props;
    const incidentData = {
      location,
      comment,
      images,
    };
    await createNewIncident('interventions', incidentData);
    if (newIntervention) {
      history.push('/interventions');
    }
  };

  firstbtnclick = () => {
    const { history } = this.props;
    history.push('/red-flags');
  };

  secondbtnclick = () => {
    const { history } = this.props;
    history.push('/interventions');
  };

  handleInputFileChange = e => {
    const { files, name } = e.target;
    this.setState({ [name]: files });
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
            <Form.Input
              iconPosition="left"
              type="file"
              label="Upload image"
              onChange={this.handleInputFileChange}
              name="images"
              transparent
              multiple
              accept="image/*"
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

createNewIntervention.propTypes = {
  newIntervention: PropTypes.bool.isRequired,
  createNewIncident: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  newIntervention: state.incident.newIncident,
});

export default connect(
  mapStateToProps,
  { createNewIncident }
)(withRouter(createNewIntervention));
