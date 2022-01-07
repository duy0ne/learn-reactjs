import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../../common/auth/loginForm/LoginForm';
import { login } from '../../common/auth/userSlice';

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