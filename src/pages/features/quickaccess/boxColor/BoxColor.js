import React from 'react';
import useMagicColor from '../../../../hook/useMagicColor/useMagicColor';
import './BoxColor.scss';

BoxColor.propTypes = {

};

function BoxColor(props) {
  const { color } = useMagicColor('')
  return (
    <div id="content" style={{ backgroundColor: color }}>
    </div>
  );
}

export default BoxColor;