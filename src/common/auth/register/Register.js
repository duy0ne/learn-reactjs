import React from 'react';
import RegisterForm from '../registerForm/RegisterForm';

Register.propTypes = {

};



const handleRegisterFormSubmit = (value) => {
  console.log(value);
}

function Register(props) {
  return (
    <div>
      <RegisterForm onSubmitByMe={handleRegisterFormSubmit}></RegisterForm>
    </div>
  );
}

export default Register;