import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import axios from 'axios';
// mui
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

const Categories = () => {
    // API - get categories 
    const [categories, setCategories] = useState([ ]);
    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/products-categories', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                console.log(result.data);
                setCategories(result.data.data.map((item) => ({
                    _id: item._id,
                    name: item.name,
                    description: item.description,
                })));
                console.log(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[setCategories]);
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <span style={styles.tbTitle}>Categories</span>
                <Link to="/admin/menu/addCategory">
                    <Button variant="contained" startIcon={<AddIcon />} color="primary" >
                        Add Category
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
                            {categories.map((v, _id) => (
                                <TableRow key={_id}>
                                    <TableCell>{v.name}</TableCell>
                                    <TableCell>{v.description}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="edit"
                                            color="primary"
                                            component={Link}
                                            to={`/admin/menu/editCategory/${v._id}`}
                                        >
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
    );
}
export default Categories;