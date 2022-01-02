import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
  onSubmit: PropTypes.func
};

function Form(props) {
  const [valInput, setValInput] = useState('');
  const { onSubmit } = props;
  const typingTimeoutRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(valInput);

      setValInput('');
    }
  }

  const handleOnChange = (e) => {
    const val = e.target.value;
    setValInput(val);

    // onSubmit(valInput);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {

      onSubmit(val);
    }, 300);
  }

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input type="text" value={valInput} onChange={(e) => handleOnChange(e)}></input>
      </form>
    </div>
  );
}

export default Form;