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
//data

const Tags = () => {
    const token = localStorage.getItem('token');
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    // API - get tags 
    const [tags, setTags] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/product-foodtype', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                console.log(result.data);
                setTags(result.data.data);
                console.log(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setTags]);
    const getTags = async () => {
        try {
            const result = await axios.get('http://localhost:5500/product-foodtype', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
            });
            setTags(result.data.data);
        } catch (error) {
            console.error(error);
        }
    }
        // delete food tag function
        const handleTagDelete = (_id) => {
            const TagToDelete = _id;
            axios.delete(`http://localhost:5500/product-foodtype/${TagToDelete}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    console.log(response.data);
                    getTags();
                    setShowAlert(true);
                    setAlertSeverity('success');
                    setAlertMessage('Tag deleted successfully');
                })
                .catch((error) => {
                    console.log(error);
                    setShowAlert(true);
                    setAlertSeverity('error');
                    setAlertMessage('Error deleting tag. Please try again later.');
                });
        };
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
                {/* // alert */}
                {showAlert &&
                    <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                        <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                        {alertMessage}
                    </Alert>
                }
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
                            {tags.map((tag,_id) => (
                                <TableRow key={_id}>
                                    <TableCell>{tag.name}</TableCell>
                                    <TableCell>{tag.description}</TableCell>
                                    <TableCell>
                                        {/* <Link to={`/admin/menu/editFoodTag/${tag._id}`}>
                                            <IconButton aria-label="edit" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                        </Link> */}
                                        <IconButton 
                                        aria-label="delete" color="error"
                                        onClick={() => handleTagDelete(tag._id)}
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
    );
}

export default Tags;
