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
const tags = [
    { name: 'Fish', description: 'Fish dishes' },
    { name: 'Sides', description: 'Side dishes' },
    { name: 'Beverage', description: 'Beverages' },
    { name: 'Special', description: 'Specialty dishes' },
];

const Tags = () => {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                
                <span style={styles.tbTitle}>Tag (Food Type)</span>
                <Link to="/admin/menu/addFoodType">
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
                            {tags.map((v, index) => (
                                <TableRow key={index}>
                                    <TableCell>{v.name}</TableCell>
                                    <TableCell>{v.description}</TableCell>
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
    );
}
export default Tags;