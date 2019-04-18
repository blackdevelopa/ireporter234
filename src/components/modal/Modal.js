import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import LoginForm from '../form/LoginForm';

class DimmerModal extends Component {

  render() {
    const {modalState:{modalState:{open, close,  dimmer}} } = this.props
    
    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={close} >
          <Modal.Header>iReporter</Modal.Header>
          <Modal.Content>
            <LoginForm />
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default DimmerModal;