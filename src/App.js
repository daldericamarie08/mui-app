import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// MUI imports
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { Padding } from '@mui/icons-material';
import SignUp from './frmCtrl/signup';
import Login from './frmCtrl/login';

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Paper elevation={3}  style={{ padding: "10px" }}>
        {checked ? (
          <Chip icon={<FaceIcon />} label="Sign Up" color="primary" variant="outlined" />
        ) : (
          <Chip icon={<LockIcon />} label="Log In" color="primary" variant="outlined" />
        )}
        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />

        <br/>
         {checked ? <SignUp /> : <Login />}

      </Paper>
    </div>
  );
}

export default App;
