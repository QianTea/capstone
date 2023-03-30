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

    //API - get employee
    const [employeeList, setEmployeeList] = useState({data: []});
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

    // delete role function
    const handleRoleDelete = (id) => {

    };

    // delete employee function
    const handleEmployeeDelete = (id) => {

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
                                {roleList.map((role) => (
                                    <TableRow key={role._id}>
                                        <TableCell>{role.name}</TableCell>
                                        <TableCell>{role.description}</TableCell>
                                        <TableCell>
                                            <Link to={`/admin/employee/editRole/${role._id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
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
                                {employeeList.data.map((employee, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.role.name}</TableCell>
                                        <TableCell>
                                            <Link to={`/admin/employee/editEmployee/${employee._id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleEmployeeDelete(index)}
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