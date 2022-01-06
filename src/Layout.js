import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ResponsiveAppBar from './common/header/header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

Layout.propTypes = {

};

const isAuthentication = () =>
  localStorage.getItem('access_token') && true;

function Layout(props) {
  //const isAuthentication = false;
  //const state = useSelector(state => state.userR.userLogin);
  let location = useLocation();

  return (
    isAuthentication() ?
      <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet></Outlet>
      </>
      :
      <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default Layout;