import React from 'react';
// import PropTypes from 'prop-types';
import SideBar from '../features/sideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import KpiMap from './kpiMap/KpiMap';

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
            <Route path="kpi-map" element={<KpiMap />} />
            <Route path="kpi-detail" element={<kpiDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;