import React , { useState ,useEffect}from "react";
import { Link, useParams } from 'react-router-dom'
//api
import axios from 'axios';
//mui
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// alert
import { Alert, AlertTitle } from '@mui/material';

//styles
const styles = {

};
//data

const AddEmployee = () => {
    const token = localStorage.getItem('token');
    // API - get role 
    const [roleList, setRoleList] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/staff-roles', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                setRoleList(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setRoleList]);
    // add employee
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit logic here
        const data = { name, email,role,password };
        axios.post('http://localhost:5500/staffs', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                console.log(response.data);
                setShowAlert(true);
                setAlertSeverity('success');
                setAlertMessage('Employee added successfully');
                setName('');
                setEmail('');
                setRole('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
                setAlertSeverity('error');
                setAlertMessage('Error adding employee. Please try again later.');
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
            <h1>Add Employee</h1>
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
                        Name:
                        <TextField
                            id="empName"
                            label="name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div>
                        Email:
                        <TextField
                            id="empEmail"
                            label="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div >
                        Role:
                        <TextField
                            id="empRole"
                            select
                            label="Role"
                            defaultValue="uncategorized"
                            helperText="Please select employee's role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}

                        >
                            {roleList.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        Password:
                        <TextField
                            id="staffPswd"
                            label="password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <button type="submit">submit</button> */}
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
export default AddEmployee;