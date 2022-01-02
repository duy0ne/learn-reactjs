import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

PasswordFieds.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  formState: PropTypes.object,

  lable: PropTypes.string,
};

function PasswordFieds(props) {
  const { name, lable, control, formState } = props;
  const hasError = !!formState.errors[name]

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl error={hasError} fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor={name}>{lable}</InputLabel>
            <OutlinedInput
              id={name}
              label={lable}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              autoComplete="new-password"
              {...field}
            />
            <FormHelperText id={name}>{formState.errors[name]?.message}</FormHelperText>
          </FormControl>
        )} />
    </div>
  );
}

export default PasswordFieds;