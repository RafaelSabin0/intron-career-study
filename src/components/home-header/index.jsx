import React from 'react';
import './style.css';
import logo from '../../svg/intronLogo.svg'

export default function HomeHeader(){

    return(
       <>
        <div className='header-menu'>
        <img className='main-title' src={logo} alt="logo icon"/>
        
        <div className="nav-bar">
            
            <a href="#">Admin Login</a>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Home</a>
        </div>
        </div>
       </>
    )
}