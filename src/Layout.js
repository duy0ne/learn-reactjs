import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ResponsiveAppBar from './common/header/header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

Layout.propTypes = {

};

function Layout(props) {
  const isAuthentication = false;
  let location = useLocation();
  console.log('lo', isAuthentication);

  return (
    isAuthentication ?
      <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet></Outlet>
      </>
      :
      <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default Layout;