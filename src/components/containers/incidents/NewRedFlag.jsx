/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  Input,
  TextArea,
  Select,
} from 'semantic-ui-react';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import classes from './Incident.css';
import Navbar from '../../navbar/Navbar';
import { createRedflagIncident } from '../../../store/actions/incident/redflag-dispatchers';

class createNewRedFlag extends Component {
  state = {
    location: '',
    images: '',
    comment: '',
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const incidentData = {
      location: this.state.location,
      comment: this.state.comment,
      images: this.state.images,
    };
    await this.props.createRedflagIncident(incidentData);
    if (this.props.newRedflag) {
      this.props.history.push('/red-flags');
    }
  };

  render() {
    return (
      <div>
        <Navbar />
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

const mapStateToProps = state => ({
  newRedflag: state.redflag.redflag,
});

export default connect(
  mapStateToProps,
  { createRedflagIncident }
)(withRouter(createNewRedFlag));
