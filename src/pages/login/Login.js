import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../common/auth/loginForm/LoginForm';
import { login } from '../../common/auth/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Navigate, useNavigate } from 'react-router-dom';

Login.propTypes = {

};

const isAuthentication = () =>
  localStorage.getItem('access_token') && true;

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (value) => {
    try {
      const action = login(value);
      const resultAction = await dispatch(action);
      const userLoginInfo = unwrapResult(resultAction);
      navigate('/');
      console.log(userLoginInfo);

    } catch (error) {
      console.log(error)
    }
  }
  console.log(isAuthentication());
  if (isAuthentication()) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <LoginForm onLoginByMe={handleLogin}></LoginForm>
    </div>
  );
}

export default Login;