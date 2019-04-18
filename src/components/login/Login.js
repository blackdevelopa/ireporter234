import React from 'react';
import ModalExampleDimmer from '../modal/Modal';
import LoginForm from '../form/LoginForm';

const Login = (modalState) => {
  return (
    <div>
      <ModalExampleDimmer modalState={modalState} >
        <LoginForm />
      </ModalExampleDimmer>
    </div>
  )
}

export default Login;