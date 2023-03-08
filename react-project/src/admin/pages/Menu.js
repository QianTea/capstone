import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import Tags from "../components/productTags";
import Categories from "../components/productCategories";
import Dishes from "../components/productDishes";

// styles
const mdTheme = createTheme();


const Products = () => {

    return (
        <ThemeProvider theme={mdTheme}>

            <Box sx={{ display: 'flex' }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Container maxWidth="lg" >
                        {/* <h1>Menu Management</h1>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={6} lg={6}>
                                <Item>
                                    <Link to="/admin/menu/addFoodType">
                                        <Button variant="contained" startIcon={<SendIcon />} color="warning">
                                            Modify Take Out Menu
                                        </Button>
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <Item>
                                    <Link to="/admin/menu/addFoodType">
                                        <Button variant="contained" startIcon={<SendIcon />} color="warning">
                                            Modify Dine-In Menu
                                        </Button>
                                    </Link>
                                </Item>
                            </Grid>
                        </Grid> */}
                        <h1>Products Management</h1>
                        {/* Tag Management */}
                        <Tags />
                        {/* Category Management */}
                        <Categories />
                        {/* Product Management */}
                        <Dishes />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default Products;