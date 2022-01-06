import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../formControls/InputField';
import PasswordFieds from '../../formControls/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material';

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
      <form onSubmit={handleSubmit(handleLogin)}>
        <InputField name="username" lable="Username" control={control} formState={formState}></InputField>
        <PasswordFieds name="password" lable="Password" control={control} formState={formState}></PasswordFieds>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default LoginForm;