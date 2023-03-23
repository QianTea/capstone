import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import axios from 'axios';
// mui
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

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