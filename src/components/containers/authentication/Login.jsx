/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../store/actions/auth/login';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/red-flags');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="loginForm">
        <Form.Field
          label="Email Address"
          control={Input}
          placeholder="name@email.com"
          type="email"
          required
          onChange={this.onChange}
          name="email"
        />
        <Form.Field
          label="Password"
          control={Input}
          placeholder="secret"
          required
          onChange={this.onChange}
          name="password"
        />
        <Button type="submit" style={{ background: 'grey', color: 'white' }}>
          Login
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginForm));
