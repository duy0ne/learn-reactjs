import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import KpiMap from './kpiMap/KpiMap';
import SideBar from './sideBar/SiderBar';
import KpiDetail from './kpiDetail/KpiDetail';

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
          <Routes>
            <Route path="kpi-detail" element={<KpiDetail />} />
            <Route path="kpi-map" element={<KpiMap />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;