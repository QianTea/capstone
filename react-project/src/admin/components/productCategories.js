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
const categories = [
    { name: 'Uncategorized', description: 'Uncategorized', },
    { name: '2pcDinner', description: '2pc Fish and Chip Dinners', },
    { name: '2pcOnly', description: '2pc Fish Only', },
    { name: 'family', description: 'Family Packs', },
    { name: 'sfp', description: 'Sea Food Platter', },
    { name: 'fries', description: 'Homemade Fries', },
    { name: 'lunch', description: 'Homemade Fries', },
    { name: 'shrimpSpecial', description: 'Shrimp Special', },
    { name: 'kid', description: 'Kid\'s Combo', },
    { name: 'side', description: 'Side Orders', },
    { name: 'beverage', description: 'Beverages', }
];

const Categories = () => {

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
                            {categories.map((v, index) => (
                                <TableRow key={index}>
                                    <TableCell>{v.name}</TableCell>
                                    <TableCell>{v.description}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="edit"
                                            color="primary"
                                            component={Link}
                                            to={`/admin/menu/editCategory/${v.id}`}
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