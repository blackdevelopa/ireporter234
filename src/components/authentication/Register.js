import React from 'react';
import AuthModal from '../modal/Modal';
import Register from '../containers/authentication/Register';

const RegisterModal = (modalState) => {
  return (
    <div>
      <AuthModal modalState={modalState} >
        <Register />
      </AuthModal>
    </div>
  )
}

export default RegisterModal;