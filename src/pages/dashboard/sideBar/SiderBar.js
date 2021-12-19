import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SideBar.propTypes = {

};

function SideBar(props) {
  return (
    <div>
      <nav>
        <Link to="/dashboard/kpi-map">Kpi-map</Link>
        <Link to="/dashboard/kpi-detail">Kpi-detail</Link>
      </nav>
    </div>
  );
}

export default SideBar;