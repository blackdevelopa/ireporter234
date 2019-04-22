import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect }  from "react-redux"
import {registerUser} from '../../store/actions/auth/register';
import { withRouter } from 'react-router-dom';


class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    username: ""
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    const userData = {
      email : this.state.email,
      password:  this.state.password,
      firstname: this.state.firstname,
      username: this.state.username
    }

    this.props.registerUser(userData)
  }

  componentDidUpdate() {
    if(this.props.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Your First Name</label>
          <input placeholder='first name'  onChange={this.onChange} name="firstname" value={this.state.name}/>
        </Form.Field>
        <Form.Field>
          <label>Your Username</label>
          <input placeholder='username'  onChange={this.onChange} name="username" value={this.state.name}/>
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input placeholder='name@email.com'  onChange={this.onChange} name="email" value={this.state.email}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='secret' onChange={this.onChange} name="password" value={this.state.password}/>
        </Form.Field>
        <Button type='submit' style={{background: 'grey', color: 'white'}}>Register</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.register.isAuthenticated
})

export default connect(mapStateToProps, {registerUser})(withRouter(RegisterForm));