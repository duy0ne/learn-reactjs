// import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Features from './pages/features/Features';
import Administrator from './pages/adminstrator/Administrator';
import Dashboard from './pages/dashboard/Dashboard';
import ContentPush from './pages/features/contentPush/ContentPush';
import Quickaccess from './pages/features/quickaccess/Quickaccess';
import KpiDetail from './pages/dashboard/kpiDetail/KpiDetail';
import KpiMap from './pages/dashboard/kpiMap/KpiMap';
import User from './pages/adminstrator/user/user';
import Device from './pages/adminstrator/device/Device';
import NotFound from './pages/notFound/NotFound';
import { Container } from '@mui/material';
import ResponsiveAppBar from './common/header/header';

function App() {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="kpi-detail" element={<KpiDetail />} />
          <Route path="kpi-map" element={<KpiMap />} />
        </Route>
        <Route path="/feature" element={<Features />} >
          <Route path="contentpush" element={<ContentPush />} />
          <Route path="quickaccess" element={<Quickaccess />} />
        </Route>

        <Route path="/administrator" element={<Administrator />} >
          <Route path="user" element={<User />} />
          <Route path="device" element={<Device />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
