import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// MUI imports
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import SignUp from './frmCtrl/signup';
import Login from './frmCtrl/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Paper elevation={3} style={{ padding: '10px' }}>
          <ToggleChip />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Paper>
      </div>
    </Router>
  );
}

function ToggleChip() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    if (location.pathname === '/login') {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  return (
    <Chip
      icon={location.pathname === '/login' ? <LockIcon /> : <FaceIcon />}
      label={location.pathname === '/login' ? 'Log In' : 'Sign Up'}
      color="primary"
      variant="outlined"
      onClick={handleToggle}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default App;
