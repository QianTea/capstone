import React from "react";
import { Link } from "react-router-dom";
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
    { name: 'Admin', description: 'The system administrator, with the highest level of permissions.' },
    { name: 'Manager', description: 'The restaurant manager, responsible for managing the daily operations of the restaurant.' },
    { name: 'Chef', description: 'The chef, responsible for cooking in the restaurant.' },
    { name: 'Waiter', description: 'The waiter, responsible for providing service and taking orders for customers.' },
    { name: 'Cashier', description: 'The cashier, responsible for handling the restaurant\'s cash transactions.' }
];
const employees = [
    { name: 'Ivy', email:'ivylin1949@gmail.com',role: 'Admin'},
    { name: 'Bob',  email:'',role: 'Waiter'},
    { name: 'Charlie', email:'', role: 'Waiter' },
    { name: 'David', email:'', role: 'Cashier'},
    { name: 'Emily',  email:'',role: 'Waiter'}
];

const Employee = () => {

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
                                            <IconButton aria-label="edit" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error">
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
                                {employees.map((employees, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{employees.name}</TableCell>
                                        <TableCell>{employees.role}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="edit" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error">
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