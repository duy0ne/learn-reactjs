import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import SideBar from './sideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import ContentPush from './contentPush/ContentPush';
import Quickaccess from './quickaccess/Quickaccess';

Features.propTypes = {

};

function Features(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SideBar></SideBar>
        </div>
        <div className="col-8">
          <Routes>
            <Route path="contentpush" element={<ContentPush />} />
            <Route path="quickaccess" element={<Quickaccess />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Features;