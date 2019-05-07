/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../redux/actions/auth/register';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    username: '',
  };

  componentDidUpdate() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.push('/red-flags');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, password, firstname, username } = this.state;
    const { registerUser, isLoading } = this.props;
    const userData = {
      email,
      password,
      firstname,
      username,
    };

    registerUser(userData);
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <ClipLoader css={override} sizeUnit="px" size={150} color="#123abc" />
        <Form.Field
          label="Full Name"
          control={Input}
          required
          placeholder="full name"
          onChange={this.onChange}
          name="firstname"
          value={name}
        />
        <Form.Field
          label="Userame"
          control={Input}
          placeholder="username"
          onChange={this.onChange}
          name="username"
          required
          value={name}
        />
        <Form.Field
          label="Email Address"
          control={Input}
          placeholder="name@email.com"
          onChange={this.onChange}
          name="email"
          required
          type="email"
          value={email}
        />
        <Form.Field
          label="Password"
          input="Password"
          control={Input}
          placeholder="secret"
          onChange={this.onChange}
          name="password"
          minLength="6"
          required
          value={password}
        />
        <Form.Field
          control={Button}
          type="submit"
          style={{ background: 'green', color: 'white' }}
        >
          Register
        </Form.Field>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  history: PropTypes.shape({}),
  registerUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  register: state.register,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterForm));
