import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../formControls/InputField';
import PasswordFieds from '../../formControls/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

LoginForm.propTypes = {
  onLoginByMe: PropTypes.func
};

const defaultValues = {
  username: '',
  password: ''
}

function LoginForm(props) {

  const schema = yup.object().shape({
    username: yup.string().required('Please enter Username!').min(5, 'FullName is too short'),
    password: yup.string().required('Please enter Password')
  });

  const { handleSubmit, control, formState } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { onLoginByMe } = props;


  const handleLogin = (value) => {
    if (onLoginByMe) {
      onLoginByMe(value);
    }
  }
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: 'auto' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        Sign In
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(handleLogin)} style={{ width: "50%" }}>
          <InputField name="username" lable="Username" control={control} formState={formState}></InputField>
          <PasswordFieds name="password" lable="Password" control={control} formState={formState}></PasswordFieds>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <NavLink to="/register">Don't have an account? Sign Up</NavLink>
        </form>
      </Box>
    </>
  );
}

export default LoginForm;