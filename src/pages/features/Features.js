import React from 'react';
import SideBar from './sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
Features.propTypes = {

};

function Features(props) {

  return (
    <Grid container>
      <Grid item lg={4}>
        <SideBar></SideBar>
      </Grid>
      <Grid item lg={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Features;