import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import OrderDisplay from './components/orderDisplay';
import OrderMenu from './components/orderMenu';

const theme = createTheme();
const styles = {
    leftContainer: {
      backgroundColor: '#262626',
      display: 'inline-block',
      height: '100vh',
      color:'#f6f6ef',
    },
    rightContainer: {
        backgroundColor: '#b3b3b3',
      display: 'inline-block',
      height: '100vh',
    },
  };

const OrderHome = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container>

                    <Grid item xs={4} style={styles.leftContainer}>
                        <OrderDisplay />
                    </Grid>
                    <Grid item xs={8} style={styles.rightContainer}>
                        <OrderMenu />
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default OrderHome; 