import React from 'react';
import SideBar from './sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
Features.propTypes = {

};

function Features(props) {
  return (
    <Grid container>
      <Grid lg={4}>
        <SideBar></SideBar>
      </Grid>
      <Grid lg={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Features;