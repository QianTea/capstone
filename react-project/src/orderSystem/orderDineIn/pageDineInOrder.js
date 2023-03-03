import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DineInDisplay from './dineInDisplay';
import DineInMenu from './dineInMenu';


const theme = createTheme();
const styles = {
    leftContainer: {
        backgroundColor: '#b3b3b3',
        display: 'inline-block',
        height: '100vh',
        color: 'black',
    },
    rightContainer: {
        // backgroundColor: '#dbba57',//dine in
        // backgroundColor:'#a9d6a9', //take out
        backgroundColor:'#98b3cd', //phone
        display: 'inline-block',
        height: '100vh',
        overflow: 'auto',
    },
};


const PageDineInOrder = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container >

                    <Grid item xs={5} style={styles.leftContainer}>
                        <DineInDisplay />
                    </Grid>
                    <Grid item xs={7} style={styles.rightContainer}>
                        <DineInMenu />
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default PageDineInOrder; 