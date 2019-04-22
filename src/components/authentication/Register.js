import React from 'react';
import AuthModal from '../modal/Modal';
import RegisterForm from '../form/RegisterForm';

const Register = (modalState) => {
  return (
    <div>
      <AuthModal modalState={modalState} >
        <RegisterForm />
      </AuthModal>
    </div>
  )
}

export default Register;