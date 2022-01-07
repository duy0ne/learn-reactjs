import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increate } from '../adminstratorSlice';
// import PropTypes from 'prop-types';

User.propTypes = {

};

function User(props) {
  const count = useSelector(state => state.adminR);
  const dispath = useDispatch();
  console.log(count);

  const handleIncreate = () => {
    const action = increate({ type: "increate", value: 1 });
    console.log(action);
    dispath(action);
  }

  const handleDecreate = () => {
    const action = increate({ type: "decreate", value: 2 });
    dispath(action);
    console.log(action);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncreate}>Increate</button>
      <button onClick={handleDecreate}>Decreate</button>
    </div>
  );
}

export default User;