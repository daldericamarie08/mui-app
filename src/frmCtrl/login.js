import React, { useState }  from 'react'


// MUI imports
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


export default function Login() {
   
    //Password Filled
    const [showPassword, setShowPassword] = React.useState(false);

    // Inputs
   
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [rememberMe, setRememberMe] = useState();

    // Input Error
  
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //Form Validity
    const [formValid, setFormValid] = useState();
    const [success, setSuccess] = useState();


    //Validation for onBlur Email
    const handleEmail = () => {
        if(!isEmail(emailInput)){
            setEmailError(true);
            return;
        }

        setEmailError(false);

    };

    //Validation for onBlur Password
    const handlePassword = () => {
       

        setPasswordError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(null);

       

        if(emailError || !emailInput){
            setFormValid("Email is invalid. Please Re-Enter"
            );
            return;
        }

        if(passwordError || !passwordInput){
            setFormValid("Password is set to 5 - 20 Characters. Please Re-Enter"
            );
            return;
        }
        setFormValid(null);
        setSuccess("Form Submitted Successfully");

    
        console.log("Email : " +emailInput);
        console.log("Password : " + passwordInput);
        console.log("RememberUser : " + rememberMe);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <div>
           

            <p> 
                <TextField 
                    id="standard-basic" 
                    error={emailError}
                    label="Email" 
                    value={emailInput}
                    onChange={(event) => setEmailInput(event.target.value)}
                    onBlur={handleEmail}
                    variant="standard" 
                    fullWidth 
                    size='small'
                />
            </p>

            <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    fullWidth
                    error={passwordError}
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onBlur={handlePassword}
                    onChange={(event) => setPasswordInput(event.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </p>

            <div align="left">
                <Checkbox
                onChange={(event) => setRememberMe(event.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
                /> {" "}
                Remember Me
            </div>

            <p>
            <Button onClick={handleSubmit} fullWidth variant="contained" startIcon={<LoginIcon />}>
                LOG IN
            </Button>
            </p>

            <p>
                {formValid && (
                    <Alert severity="error">{formValid}</Alert>
                )}
            </p>

            <p>
                {success && (
                    <Alert severity="success">{success}</Alert>
                )}
            </p>
            


        </div>
    )
}