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
    // API - get role 
    const [roleList, setRoleList] = useState([
        {
            "_id": "63f12ea779b265e394bf562d",
            "name": "admin",
            "description": "The system administrator, with the highest level of permissions.",
            "level": 1,
        },
        {
            "_id": "640f6a71ad7ce9e8b974a70f",
            "name": "waiter",
            "description": "waiter, only have access to login to Order System",
            "level": 2,
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5500/staff-roles');
            setRoleList(result.data.map((item) => ({
                _id: item._id,
                name: item.name,
                description: item.description,
                level: item.level,
            })));
        };
        fetchData();
    }, []);

    //API - get employee
    const [employeeList, setEmployeeList] = useState({
        data: [
            {
                _id: "63f130c67a4313b1aec604a6",
                name: "ivy",
                role: {
                    _id: "63f12ea779b265e394bf562d",
                    description: "",
                    level: 1,
                    name: "admin",
                },
                email: "echoaiyaya@gmail.com",
            },
            {
                _id: "6407eadf0fef37ef130fb627",
                name: "echoaiyaya",
                role: {
                    _id: "63f12ea779b265e394bf562d",
                    description: "",
                    level: 1,
                    name: "admin",
                },
            },
            {
                _id: "6408b51b3fc89c9dbe2365f0",
                name: "ivyLChange",
                role: {
                    _id: "63f12ea779b265e394bf562d",
                    description: "",
                    level: 1,
                    name: "admin",
                },
                email: "echoaiyaya@gmail.com",
            },
        ],
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5500/staffs');
            setEmployeeList(result.data.map((item) => ({
                _id: item._id,
                name: item.name,
                role: {
                    _id: item.role._id,
                    description: item.role.description,
                    level: item.role.level,
                    name: item.role.name,
                },
                email: item.email,
            })));
        };
        fetchData();
    }, []);
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