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
const dishes = [
    {
        name: '2pc Wihtefish & chips',
        alterName: 'W/C',
        dineInPrice: '10.19',
        takeoutPrice: '10.19',
        category: [{
            "_id": "3456789012",
            "name": "2pc Fish & Chips",
            "description": "2 pieces fish with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc Cod & chips',
        alterName: 'Cod/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces cod with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc haddock & chips',
        alterName: 'HD/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces haddock with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc Halibut & chips',
        alterName: 'HB/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces halibut with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '8pc Shrimps & Chips',
        alterName: '11.49',
        dineInPrice: '11.49',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678903",
            "name": "Shrimp Special",
            "description": "8 pieces shrimps with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678902",
            "name": "Special",
            "description": "Specialty dishes"
        }, {
            "_id": "2345678903",
            "name": "Sides",
            "description": "Side dishes"
        }]
    }
];


const Dishes = () => {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                <span style={styles.tbTitle}>Dishes</span>
                <Link to="/admin/menu/addProduct">
                    <Button variant="contained" startIcon={<AddIcon />} color="primary" >
                        Add Dishes
                    </Button>
                </Link>
                <TableContainer component={Paper} style={styles.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Dine-In Price</TableCell>
                                <TableCell>Take Out Price</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Tags</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dishes.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.dineInPrice}</TableCell>
                                    <TableCell>{product.takeoutPrice}</TableCell>
                                    <TableCell>
                                        {product.category.map((category, index) => (
                                            <div key={index}>{category.name}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell>
                                        {product.tags.map((tag, index) => (
                                            <div key={index}>{tag.name}</div>
                                        ))}
                                    </TableCell>
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
export default Dishes;