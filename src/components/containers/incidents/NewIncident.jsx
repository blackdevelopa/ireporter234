/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  Input,
  TextArea,
  Select,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import Navbar from '../../navbar/Navbar';

const type = [
  { key: 'r', text: 'Redflag', value: 'redflag' },
  { key: 'i', text: 'Intervention', value: 'intervention' },
];
class createNewIncident extends Component {
  state = {
    location: '',
    type: '',
    media: '',
    comment: '',
  };

  handleSubmit = () => {
    const incidentData = {
      location: this.state.location,
      comment: this.state.comment,
      type: this.state.type,
      media: this.state.media,
    };
  };

  render() {
    return (
      <div>
        <Navbar />
        <SwitchNav />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Your Location"
                name="location"
                value={this.state.location}
                placeholder="lagos..."
                required
              />
              <Form.Field
                control={Select}
                label="What are you reporting"
                name="type"
                options={type}
                placeholder="redflag..."
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              label="Upload media"
              placeholder="click to upload"
            />
            <Form.Field
              control={TextArea}
              label="Comment"
              placeholder="Share what you can see..."
              required
            />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(null)(createNewIncident);
