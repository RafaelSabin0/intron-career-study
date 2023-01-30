import React from 'react';
import './style.css';
import AdminSidebar from '../admin-sidebar';
import dashboardGirl from '../../svg/dashboardGirl.svg'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'email', headerName: 'Email', width: 130},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 130},
    {field: 'skillSet', headerName: 'Skill Set', width: 130}
];

const rows = [
    {id: 1, name: 'Rafael', email: 'rafael@gmail.com', phoneNumber: '5198238232', skillSet: 'ReactJS' },
    {id: 2, name: 'Luis', email: 'luis@gmail.com', phoneNumber: '5198238232', skillSet: 'Web Design' },
    {id: 3, name: 'Jonas', email: 'jonas@gmail.com', phoneNumber: '5198238232', skillSet: 'React Native' },
    {id: 4, name: 'Vinicius', email: 'vinicius@gmail.com', phoneNumber: '5198238232', skillSet: 'Spring Boot' },

];



export default function AdminDahsboard(){
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
        <img src={dashboardGirl} alt=" of a woman in front of a checklist" />
        <div className="dashboard-register-list">
        <h1>Candidate Register List</h1>
        <div className="dashboard-table" style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
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