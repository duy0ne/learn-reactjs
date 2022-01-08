import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import RegisterForm from '../../common/auth/registerForm/RegisterForm';
import { register } from '../../common/auth/userSlice';
import { JWT_USER_LOGIN } from '../../utils/constants/Constants';
import enqueueSnackbarCustom from '../../utils/SnackbarUtils';

Register.propTypes = {

};

const isAuthentication = () => {
  return localStorage.getItem(JWT_USER_LOGIN) && true;
}

function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegisterFormSubmit = async (value) => {
    try {

      const action = register(value);
      const actionResult = await dispatch(action);
      const userRegisterInfo = unwrapResult(actionResult);
      enqueueSnackbarCustom.success("Register success!");

      if (userRegisterInfo) {
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }

    } catch (error) {
      console.log(error);
    }

  }

  if (isAuthentication()) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <RegisterForm onSubmitByMe={handleRegisterFormSubmit}></RegisterForm>
    </div>
  );
}

export default Register;