import React from 'react';
// import PropTypes from 'prop-types';
import SideBar from './sideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import User from './user/user';
import Device from './device/Device';

Administrator.propTypes = {

};

function Administrator(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SideBar></SideBar>
        </div>
        <div className="col-8">
          <Routes>
            <Route path="user" element={<User />} />
            <Route path="device" element={<Device />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default Administrator;