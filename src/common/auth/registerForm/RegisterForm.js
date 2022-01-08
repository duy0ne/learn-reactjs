import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../formControls/InputField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Box, Button, Typography } from '@mui/material';
import PasswordFieds from '../../formControls/PasswordField';
import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

RegisterForm.propTypes = {
  onSubmitByMe: PropTypes.func,
};

const defaultValues = {
  fullName: '',
  emaill: '',
  password: '',
  retypePassword: ''
}

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter FullName!').min(5, 'FullName is too short')
      .test('Should has at least two words', 'Please enter least two word', (value) => {
        return value.split(' ').length >= 2
      }),
    emaill: yup.string().required('Please enter Email!').email('Please enter a email valid address'),
    password: yup.string().required('Please enter Password'),
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    // ),
    retypePassword: yup.string().required('Please retype Password').min(5, 'FullName is too short').oneOf([yup.ref('password')], 'Password is not match')
    // .matches('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])$',
    //   'Ensure string has two uppercase letter, one special case letter, two digits, three lowercase letters, length 8 and end anchor.')
  });

  const { handleSubmit, control, formState } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { onSubmitByMe } = props;



  const handleSubmitByMe = (value) => {
    if (onSubmitByMe) {
      onSubmitByMe(value);
      //reset({ fullName: '' });
    }
  }

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: 'auto' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        Sign up
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(handleSubmitByMe)} style={{ width: "50%" }}>
          <InputField name="fullName" lable="Full Name" control={control} formState={formState}></InputField>
          <InputField name="emaill" lable="Email" control={control} formState={formState}></InputField>
          <PasswordFieds name="password" lable="Password" control={control} formState={formState}></PasswordFieds>
          <PasswordFieds name="retypePassword" lable="Retype Password" control={control} formState={formState}></PasswordFieds>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <NavLink to="/login">Already have an account? Sign in</NavLink>
        </form>
      </Box>
    </>
  );
}

export default RegisterForm;