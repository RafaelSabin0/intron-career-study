import React from 'react';
import './style.css';
import logo from '../../svg/intronLogo.svg'
import { Link } from 'react-router-dom';

export default function HomeHeader(){

    return(
    <>
    <div className='header-menu'>
       <img className='main-title' src={logo} alt="logo icon"/>
        
        <div className="nav-bar">
             <Link to="/admin-login">Admin Login</Link>
             <Link to="/">Contact Us</Link>
             <Link to="/">About Us</Link>
             <Link to="/">Home</Link>   
        </div>
    </div>
    </>
    )
}