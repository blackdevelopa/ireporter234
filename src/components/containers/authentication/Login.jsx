/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="email">Email Address</label>
          <input
            placeholder="name@email.com"
            onChange={this.onChange}
            name="email"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            placeholder="secret"
            onChange={this.onChange}
            name="password"
          />
        </Form.Field>
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
