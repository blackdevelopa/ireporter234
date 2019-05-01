/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Login from '../containers/authentication/Login';
import Register from '../containers/authentication/Register';

class AuthModal extends Component {
  state = {
    login: true,
  };

  toggleButton = () => {
    this.setState({ login: !this.state.login });
  };

  render() {
    const {
      modalState: {
        modalState: { open, close, dimmer },
      },
    } = this.props;
    const { login } = this.state;
    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={close}>
          <Modal.Header>
            {login ? ['Login with '] : ['Signup with ']}iReporter
          </Modal.Header>
          <Modal.Content>
            {login === true ? <Login /> : <Register />}
          </Modal.Content>
          <Modal.Actions
            actions={[
              <Button color="black" key="">
                {login ? ['Switch to Signup'] : ['Switch to Login']}
              </Button>,
            ]}
            onClick={this.toggleButton}
          />
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  modalState: PropTypes.shape({
    open: PropTypes.shape().isRequired,
    close: PropTypes.shape().isRequired,
    dimmer: PropTypes.shape().isRequired,
  }).isRequired,
};

export default AuthModal;
