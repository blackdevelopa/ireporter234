/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../store/actions/auth/register';

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    username: '',
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/red-flags');
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      username: this.state.username,
    };

    this.props.registerUser(userData);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field
          label="Full Name"
          control={Input}
          placeholder="full name"
          onChange={this.onChange}
          name="firstname"
          value={this.state.name}
        />
        <Form.Field
          label="Userame"
          control={Input}
          placeholder="username"
          onChange={this.onChange}
          name="username"
          value={this.state.name}
        />
        <Form.Field
          label="Email Address"
          control={Input}
          placeholder="name@email.com"
          onChange={this.onChange}
          name="email"
          value={this.state.email}
        />
        <Form.Field
          label="Password"
          control={Input}
          placeholder="secret"
          onChange={this.onChange}
          name="password"
          value={this.state.password}
        />
        <Form.Field
          control={Button}
          type="submit"
          style={{ background: 'grey', color: 'white' }}
        >
          Register
        </Form.Field>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.register.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterForm));
