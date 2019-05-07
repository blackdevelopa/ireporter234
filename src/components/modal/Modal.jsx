/* eslint-disable react/require-default-props */
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
    const { login } = this.state;
    this.setState({ login: !login });
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
              <Button color="red" key="">
                {login ? ['Click here to Signup'] : ['Click here to Login']}
              </Button>,
            ]}
            onClick={this.toggleButton}
          />
        </Modal>
      </div>
    );
  }
}

AuthModal.propTypes = {
  modalState: PropTypes.shape({
    close: PropTypes.shape(),
    dimmer: PropTypes.shape(),
  }),
};

export default AuthModal;
