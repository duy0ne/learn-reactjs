// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import Features from './pages/features/Features';
import Administrator from './pages/adminstrator/Administrator';

function App() {
  return (
    <Fragment>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/administrator">Administrator</Link>
      </nav>


      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/feature/*" element={<Features />} />
        <Route path="/administrator/*" element={<Administrator />} />
      </Routes>
    </Fragment>
  );
}

export default App;
