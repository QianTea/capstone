import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
//api
import axios from 'axios';
//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// alert
import { Alert, AlertTitle } from '@mui/material';

const AddRole = () => {
    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit logic here
        const data = { name, description };
        axios.post('http://localhost:5500/staff-roles', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                console.log(response.data);
                setShowAlert(true);
                setAlertSeverity('success');
                setAlertMessage('Role added successfully');
                setName('');
                setDescription('');
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
                setAlertSeverity('error');
                setAlertMessage('Error adding role. Please try again later.');
            });
    }
    return (
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}>
            <h1>Add Role</h1>
            {showAlert &&
                <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                    <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                    {alertMessage}
                </Alert>
            }
            <Box component="form"
                sx={{ mt: 2, mb: 3 }}
                noValidate
                autoComplete="off" >
                <form name="addItem">
                    <div>
                        name:
                        <TextField
                            id="roleName"
                            label="name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        description:
                        <TextField
                            id="roleDescription"
                            label="description"
                            variant="outlined"
                            multiline
                            minRows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button fullWidth
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<SendIcon />}
                        color="success"
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>

                <Link
                    variant="body2"
                    to="/admin/employee">
                    Go back to employee management page
                </Link>
            </Box>
        </Box>
    )
}
export default AddRole;
