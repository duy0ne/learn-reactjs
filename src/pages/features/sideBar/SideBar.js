import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SideBar.propTypes = {

};

function SideBar(props) {
  return (
    <nav>
      <Link to="/feature/contentpush">ContentPush</Link>
      <Link to="/feature/quickaccess">Quickaccess</Link>
    </nav>
  );
}

export default SideBar;