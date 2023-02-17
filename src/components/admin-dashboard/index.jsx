import React, { useEffect, useState } from 'react';
import './style.css';
import AdminSidebar from '../admin-sidebar';
import dashboardGirl from '../../svg/dashboardGirl.svg'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { addCandidates, getCandidates } from '../../apiHandler';
import { Box } from '@mui/system';
import { Grid, Modal, TextField } from '@mui/material';
import {Button} from '@mui/material';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'name', headerName: 'Name', width: 300},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 300},
    {field: 'skillSet', headerName: 'Skill Set', width: 300}
];

const style = {
    position: 'absolute',
    background: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    textAlign:'center',
    width: 698,
    height: 700,
    pt: 2,
    px: 4,
    pb: 3,
  };


export default function AdminDahsboard(){

    const[open, setOpen] = React.useState(false);
    const [candidates, setCandidates] = useState({});
    const[inputFields, setInputFields] = useState({ id: null, name: '', email: '', phoneNumber: null, skillSet: ''});

    const handleChange = (event) =>{
        setInputFields({...inputFields, [event.target.name]: event.target.value});
    }


    
    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const submitForm = (values) => {
        addCandidates(values)
        /*.then((response) => {
            console.log(response.data)
        });*/
    }


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
        <div className="dashboard-options">
       
            
            <Button onClick={handleOpen}>Open Modal</Button>
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <h1>Enter The Candidate Information</h1>
            <Grid className='input-grid' container spacing={2}>
                <Grid id="modal-item" item xs={5}>
                <TextField className='modal-textfield' id="outlined-basic" name='name' label="Name" variant="outlined" onChange={handleChange} />
                </Grid>
                <Grid item xs={5}>
                <TextField className='modal-textfield' id="outlined-basic" name="email" label="E-mail" variant="outlined"  onChange={handleChange}/>
                </Grid>
                <Grid id="modal-item"  item xs={5}>
                <TextField  className='modal-textfield' id="outlined-basic" name="phoneNumber" label="Phone" variant="outlined" onChange={handleChange} />
                </Grid>
                <Grid item xs={5}>
                <TextField className='modal-textfield' id="outlined-basic" name="skillSet" label="Skill Set" variant="outlined"  onChange={handleChange}/>
                </Grid>
                <Grid item xs={5}>
                <Button id='modal-button' onClick={() => {submitForm(inputFields)}}>Close Modal</Button>
                </Grid>
            </Grid>
            
            </Box>
            </Modal>

        </div>
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