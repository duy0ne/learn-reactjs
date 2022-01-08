import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './common/header/header';
import { JWT_USER_LOGIN } from './utils/constants/Constants';

Layout.propTypes = {

};

const isAuthentication = () =>
  localStorage.getItem(JWT_USER_LOGIN) && true;

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