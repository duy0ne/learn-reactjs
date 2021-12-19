import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SideBar.propTypes = {

};

function SideBar(props) {
  return (
    <div>
      <nav>
        <Link to="/administrator/user">User</Link>
        <Link to="/administrator/device">Device</Link>
      </nav>
    </div>
  );
}

export default SideBar;