import * as React from 'react';
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DineInDisplay from './dineInDisplay';
import DineInMenu from './dineInMenu';


const theme = createTheme();
const styles = {
    page: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
    },
    leftContainer: {
        backgroundColor: '#e4e6e7',
        // height: '100vh',
        color: 'black',
        // display: 'inline-block',

    },
    rightContainer: {
        // backgroundColor: '#dbba57',//dine in
        // backgroundColor:'#a9d6a9', //take out
        backgroundColor: '#98b3cd', //phone
        // height: '100vh',
        width: '700px',
        overflow: 'auto',
        position: 'absolute',
        transition: 'left 0.8s ease-out',
    },
};


const PageDineInOrder = () => {
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const toggleOrderOpen = (e) => {
        setIsOrderOpen(false);
    };

    const toggleOrderClose = (e) => {
        setIsOrderOpen(true);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container style={styles.page}>

                    <Grid item xs={6}
                        style={{
                            ...styles.leftContainer,
                        }}
                        onClick={toggleOrderClose}
                    >
                        <DineInDisplay />
                    </Grid>
                    <div
                        style={{
                            ...styles.rightContainer,
                            right: isOrderOpen ? '-30%' : '0',
                        }}
                        onClick={toggleOrderOpen}>
                        <Grid item xs={12}>
                            <DineInMenu />
                        </Grid>
                    </div>

                </Grid>
            </ThemeProvider>


        </>
    )
}

export default PageDineInOrder; 