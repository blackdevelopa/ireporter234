/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../redux/actions/auth/login';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
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
    const { email, password } = this.state;
    const { loginUser } = this.props;
    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div className="sweet-loading">
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
            input="Password"
            control={Input}
            placeholder="secret"
            required
            onChange={this.onChange}
            name="password"
          />
          <Button type="submit" style={{ background: 'green', color: 'white' }}>
            {!isLoading ? (
              'Login'
            ) : (
              <ClipLoader
                css={override}
                sizeUnit="px"
                size={20}
                color="#fffff"
              />
            )}
          </Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  history: PropTypes.shape({}),
  loginUser: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginForm));
