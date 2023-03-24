import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
const tags = [
    { id: 1, name: 'TakeOutMenu', description: 'Menu for Take Out Order and Phone Order' },
    { id: 2, name: 'Dine-In Menu', description: 'Menu for Dine-In Order' },
    { id: 3, name: 'Fish', description: 'Fish dishes' },
    { id: 4, name: 'Sides', description: 'Side dishes' },
    { id: 5, name: 'Beverage', description: 'Beverages' },
    { id: 6, name: 'Special', description: 'Specialty dishes' },
];

const Tags = () => {
    const { tagId } = useParams();
    // const tag = tags.find((tag) => tag.id === parseInt(tagId));
    // API - get tag 
    const [tags, setTags] = useState([
        {
            _id: "64123da34b850b3e5391a0e8",
            name: "fish type 2",
            description: "",
        },
        {
            _id: "64123da34b850b3e5391a0e1",
            name: "TakeOutMenu",
            description: "Menu for Take Out Order and Phone Order",
        },
        {
            _id: "64123da34b850b3e5391a0e2",
            name: "Dine-In Menu",
            description: "Menu for Dine-In Order",
        },
        {
            _id: "64123da34b850b3e5391a0e3",
            name: "Fish",
            description: "Fish dishes",
        },
        {
            _id: "64123da34b850b3e5391a0e4",
            name: "Sides",
            description: "Side dishes",
        },
        {
            _id: "64123da34b850b3e5391a0e5",
            name: "Beverage",
            description: "Beverages",
        },
        {
            _id: "64123da34b850b3e5391a0e6",
            name: "Special",
            description: "Specialty dishes",
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5500/staff-roles');
            setTags(result.data.map((item) => ({
                _id: item._id,
                name: item.name,
                description: item.description,
            })));
        };
        fetchData();
    }, []);
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                <span style={styles.tbTitle}>Food Tag</span>
                <Link to="/admin/menu/addFoodTag">
                    <Button variant="contained" startIcon={<AddIcon />} color="primary" >
                        Add Tag
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
                            {tags.map((tag) => (
                                <TableRow key={tag._id}>
                                    <TableCell>{tag.name}</TableCell>
                                    <TableCell>{tag.description}</TableCell>
                                    <TableCell>
                                        <Link to={`/admin/menu/editFoodTag/${tag._id}`}>
                                            <IconButton aria-label="edit" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
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

export default Tags;
