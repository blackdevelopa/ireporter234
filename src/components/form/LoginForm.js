import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect }  from "react-redux"
import {loginUser} from '../../store/actions/auth/login';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = e => {
    const userData = {
      email : this.state.email,
      password:  this.state.password
    }

    this.props.loginUser(userData);
  }

  componentDidUpdate() {
    if(this.props.isAuthenticated){
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email Address</label>
          <input placeholder='name@email.com'  onChange={this.onChange} name="email" value={this.state.email}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='secret' onChange={this.onChange} name="password" value={this.state.password}/>
        </Form.Field>
        <Button type='submit'style={{background: 'grey', color: 'white'}}>Login</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, {loginUser})(withRouter(LoginForm))