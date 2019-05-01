import React from 'react';
import AuthModal from '../modal/Modal';
import Login from '../containers/authentication/Login';

const LoginModal = modalState => {
  return (
    <div>
      <AuthModal modalState={modalState}>
        <Login />
      </AuthModal>
    </div>
  );
};

export default LoginModal;
