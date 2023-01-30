import React, { useEffect, useState } from 'react';
import './style.css';
import AdminSidebar from '../admin-sidebar';
import dashboardGirl from '../../svg/dashboardGirl.svg'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getCandidates } from '../../apiHandler';



const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'name', headerName: 'Name', width: 300},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 300},
    {field: 'skillSet', headerName: 'Skill Set', width: 300}
];


export default function AdminDahsboard(){

    const [candidates, setCandidates] = useState({});

    useEffect(() => {
        getCandidates().then(res => {
            setCandidates(res.data)
        })

    }, [])

    return(
        <>
        <AdminSidebar/>
        <div className="dashboard-top">
            <h1>Dashboard</h1>
            <div className="dashboard-description">
            <p>Greetings! This dashboard displays the information about the test <br/> takers. Using this dashboard, you can create or modify a set of<br/> questions for the candidates.</p>
            <p>As an admin, you can approve their request to take the test before<br/> proceeding to the next rounds. You can also view the results of their<br/> test from your admin dashboard</p>
            </div>
        </div>
        <img src={dashboardGirl} alt="woman in front of a checklist" />
        <div className="dashboard-register-list">
        <h1>Candidate Register List</h1>
        <div className="dashboard-table" style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={candidates}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
        </div>
        </div>
       
        
        </>
    )
}