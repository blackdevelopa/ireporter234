/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Input, TextArea, Container, Form } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import classes from './Incident.css';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { editSingleIncident } from '../../../redux/actions/incident/incident';

export class EditOneIncident extends Component {
  state = {
    location: '',
    comment: '',
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { location, comment } = this.state;
    const {
      editSingleIncident,
      editIncident,
      history,
      history: {
        location: { search },
      },
    } = this.props;
    const id = search.split('=')[1];
    const updatedData = {
      location,
      comment,
    };
    await editSingleIncident('red-flags', id, 'location', updatedData);
    if (editIncident) {
      history.push('/red-flags');
    }
    await editSingleIncident('red-flags', id, 'comment', updatedData);
    if (editIncident) {
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
          <div className={classes.update}>
            <strong>Update Incident</strong>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Your Location"
                name="location"
                onChange={this.handleInputChange}
                placeholder="lagos..."
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Comment"
              name="comment"
              onChange={this.handleInputChange}
              placeholder="Share what you can see..."
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
  editIncident: state.incident.editIncident,
});

export default connect(
  mapStateToProps,
  { editSingleIncident }
)(withRouter(EditOneIncident));
