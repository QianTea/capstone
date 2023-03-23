import React , { useState, useEffect }from "react";
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
//data
const roles = [
    { id: 1, name: 'Admin', description: 'The system administrator, with the highest level of permissions.' },
    { id: 2, name: 'Manager', description: 'The restaurant manager, responsible for managing the daily operations of the restaurant.' },
    { id: 3, name: 'Chef', description: 'The chef, responsible for cooking in the restaurant.' },
    { id: 4, name: 'Waiter', description: 'The waiter, responsible for providing service and taking orders for customers.' },
    { id: 5, name: 'Cashier', description: 'The cashier, responsible for handling the restaurant\'s cash transactions.' }
];
const employees = [
    { id: 1, name: 'Ivy', email: 'ivylin1949@gmail.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: '', role: 'Waiter' },
    { id: 3, name: 'Charlie', email: '', role: 'Waiter' },
    { id: 4, name: 'David', email: '', role: 'Cashier' },
    { id: 5, name: 'Emily', email: '', role: 'Waiter' }
];


const Employee = () => {
    const [roleList, setRoleList] = useState(roles);
    const [employeeList, setEmployeeList] = useState(employees);
// API - get role 

    // delete role function
    const handleRoleDelete = (id) => {
        const newList = roleList.filter((role) => role.id !== id);
        setRoleList(newList);
    };

    // delete employee function
    const handleEmployeeDelete = (id) => {
        const newList = employeeList.filter((employee) => employee.id !== id);
        setEmployeeList(newList);
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
                                {roles.map((role, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{role.name}</TableCell>
                                        <TableCell>{role.description}</TableCell>
                                        <TableCell>
                                            <Link to={`/admin/employee/editRole/${role.id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleRoleDelete(role.id)}
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
                                {employees.map((employee, id) => (
                                    <TableRow key={id}>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.role}</TableCell>
                                        <TableCell>
                                            <Link to={`/admin/employee/editEmployee/${employee.id}`}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleEmployeeDelete(id)}
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