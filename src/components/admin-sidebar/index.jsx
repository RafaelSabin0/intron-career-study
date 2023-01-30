import React from 'react';
import './style.css';
import adminTemplatePic from '../../svg/templateProfilePic.svg'


export default function AdminSidebar(){
    return(
        <>
        <div className="admin-sidebar">
            <ul className="sidebar">
                <li><span><img className='template-photo' src={adminTemplatePic} alt="Template pic"/><h3>Preethilakshmi K</h3><p className='user-role'>Admin</p></span></li>
                <li className='sidebar-item'><span>Dashboard</span></li>
                <li className='sidebar-item'><span>Create Test</span></li>
                <li className='sidebar-item'><span>Upload CSV</span></li>
                <li className='sidebar-item'><span>View Result</span></li>
            </ul>
        </div>
        </>
    )
}

/*
<div className="admin-sidebar">
            <div className="profileInfo">
            
            <div className="profile-text">
            <h4>Administradora</h4>
            <p className='user-role'>Admin</p>
            </div>
            </div>
        </div>
        */