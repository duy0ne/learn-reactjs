import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './sideBar/SiderBar';


Dashboard.propTypes = {

};

function Dashboard(props) {
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

export default Dashboard;