import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  formState: PropTypes.object,

  lable: PropTypes.string,
  disable: PropTypes.string
};

function InputField(props) {
  const { control, name, lable, disable, formState } = props;
  const hasError = formState.errors[name]
  return (
    <div>
      <Controller
        control={control}
        name={name}
        lable={lable}
        disable={disable}
        render={({ field }) => (
          <TextField
            margin="normal"
            id={name}
            label={lable}
            type="text"
            fullWidth
            variant="outlined"
            error={!!hasError}
            helperText={formState.errors[name]?.message}
            {...field}
            autoComplete="no"
          />
        )} />

    </div>
  );
}

export default InputField;