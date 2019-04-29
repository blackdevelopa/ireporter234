import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Login from '../containers/authentication/Login';
import Register from '../containers/authentication/Register';

class AuthModal extends Component {
  state = {
    login: true
  }

  toggleButton = () => {
    this.setState({login: !this.state.login})
  }

  render() {
    const {modalState:{modalState:{open, close,  dimmer}} } = this.props
    const { login } = this.state;
    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={close} >
          <Modal.Header>{login ? ['Login with '] : ['Signup with ']}iReporter</Modal.Header>
          <Modal.Content>
            {
              login === true ? <Login /> : <Register />
            }
          </Modal.Content>
          <Modal.Actions
            actions={[<Button color="black" key="">{login ? ['Switch to Signup'] : ['Switch to Login']}</Button> ]} 
            onClick={this.toggleButton}>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AuthModal;