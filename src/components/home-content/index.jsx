import React from 'react';
import './style.css';
import loginIcon from '../../svg/login-icon.svg';
import homeImage from '../../images/tiny-boy.png'


export default function HomePage(){
    return(
        <>
        <div className="home-text-box">
        <h1>Congratulations</h1>
        <div className="home-text">
        <p>You have successfully passed the screening round<br/>
        and we would like you to take the below test to proceed<br/> 
        further.</p>

        <p>The test contains both technical and aptitude questions.<br/>
        The results of this test will determine your suitability for this role<br/>
        as well as your ability to perform complex tasks and skills <br/>
        related to logical reasoning.</p>
        </div>
        <button className="home-button"><div className="button-content">Candidate Login <img className='login-icon' src={loginIcon} alt="login Icon"  /></div></button>
        </div>

        <div className="home-image">
            <img src={homeImage} alt="tiny boy marking tests"/>
        </div>
        </>
    );
}