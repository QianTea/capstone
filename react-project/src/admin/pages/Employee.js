import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import axios from 'axios';
//mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from "@mui/material";
import Container from '@mui/material/Container';
// alert
import { Alert, AlertTitle } from '@mui/material';

// styles
const mdTheme = createTheme();
const styles = {
    table: {
        minWidth: '50%',
        width: '100%',
        display: 'flex',
    },
    tbTitle: {
        fontSize: '1.5rem',
        margin: '2%',
    },
};

const Employee = () => {
    const token = localStorage.getItem('token');
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

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
    const getRoles = async () => {
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
    }
    //API - get employee
    const [employeeList, setEmployeeList] = useState({ data: [] });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/staffs', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                setEmployeeList(result.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setEmployeeList]);

    // delete employee function
    const handleEmployeeDelete = (_id) => {
        const employeeToDelete = employeeList.data[_id];
        axios.delete(`http://localhost:5500/staffs/${employeeToDelete._id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                setEmployeeList((prev) => ({
                    ...prev,
                    data: prev.data.filter((employee, index) => index !== _id),
                }));
                setShowAlert(true);
                setAlertSeverity('success');
                setAlertMessage('Employee deleted successfully');
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
                setAlertSeverity('error');
                setAlertMessage('Error deleting employee. Please try again later.');
            });
    };
    // delete role function
    const handleRoleDelete = (_id) => {
        const RoleToDelete = _id;
        axios.delete(`http://localhost:5500/staff-roles/${RoleToDelete}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                getRoles();
                setShowAlert(true);
                setAlertSeverity('success');
                setAlertMessage('Role deleted successfully');
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
                setAlertSeverity('error');
                setAlertMessage('Error deleting role. Please try again later.');
            });
    };
    return (
        <ThemeProvider theme={mdTheme}>
            {/*  display list of roles  */}
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <h1>Employees Management</h1>
                    {/* // alert */}
                    {showAlert &&
                        <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                            <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                            {alertMessage}
                        </Alert>
                    }
                    <span style={styles.tbTitle}>Role</span>
                    <Link to="/admin/employee/addRole">
                        <Button variant="contained" startIcon={<AddIcon />} color="primary" >
                            Add Role
                        </Button>
                    </Link>
                    <TableContainer component={Paper} style={styles.table}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {roleList.map((role, _id) => (
                                    <TableRow key={_id}>
                                        <TableCell>{role.name}</TableCell>
                                        <TableCell>{role.description}</TableCell>
                                        <TableCell>
                                            {/* <Link to={`/admin/employee/editRole/${role._id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link> */}
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleRoleDelete(role._id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>

            {/*  display list of employees  */}
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <span style={styles.tbTitle}>Employee</span>
                    <Link to="/admin/employee/addEmployee">
                        <Button variant="contained" startIcon={<AddIcon />} color="primary" >
                            Add Employee
                        </Button>
                    </Link>

                    <TableContainer component={Paper} style={styles.table}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employeeList.data.map((employee, _id) => (
                                    <TableRow key={_id}>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.role.name}</TableCell>
                                        <TableCell>
                                            {/* <Link to={`/admin/employee/editEmployee/${employee._id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link> */}
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleEmployeeDelete(_id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </ThemeProvider >
    );
}
export default Employee;