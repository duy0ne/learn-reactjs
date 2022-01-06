import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../registerForm/RegisterForm';
import { register } from '../userSlice';

Register.propTypes = {

};

function Register(props) {
  const dispatch = useDispatch();

  const handleRegisterFormSubmit = async (value) => {
    const action = register(value);
    const resultAction = await dispatch(action);
    const userRegisterInfo = unwrapResult(resultAction);
    console.log(userRegisterInfo);
    // registerUser(value).then((res) => {
    //   console.log(res);
    // })
  }

  return (
    <div>
      <RegisterForm onSubmitByMe={handleRegisterFormSubmit}></RegisterForm>
    </div>
  );
}

export default Register;