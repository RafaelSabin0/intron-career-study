import React from 'react';
import './style.css'
import intronLogo from '../../svg/intronLogo2.svg'
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import computerLady from '../../images/computer-lady.png';
import { Link } from 'react-router-dom';

export default function LoginPage(){
    return(
        <div className="login-box">
            <Link to="/"><img className='intron-logo' src={intronLogo} alt="intron logo" /></Link>
        
        <div className="login-form">
            <h1>Candidate Login</h1>
            <div className='username-input'>
            <TextField id="outlined-basic" label="Username" variant="outlined"/>
            </div>
            <div className="password-input">
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
            </div>
            <div className="confirmation-checkbox">
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked={false}/>} label="Keep me looged in"/>
                </FormGroup>
            </div>
            <Button className="login-button" variant="contained">Login</Button>
        </div>
        <div className="loginCardImg">
            <img src={computerLady} alt="lady looking to a computer screen"/>
        </div>
        </div>
    )
}