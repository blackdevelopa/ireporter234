import React from 'react';
import AuthModal from '../modal/Modal';
import LoginForm from '../form/LoginForm';

const Login = (modalState) => {
  return (
    <div>
      <AuthModal modalState={modalState} >
        <LoginForm />
      </AuthModal>
    </div>
  )
}

export default Login;