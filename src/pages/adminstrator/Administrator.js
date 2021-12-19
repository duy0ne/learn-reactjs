import React from 'react';
import SideBar from './sideBar/SideBar';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default Administrator;