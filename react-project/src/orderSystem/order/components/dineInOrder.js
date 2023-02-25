import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DineInDisplay from './dineInDisplay';
import DineInMenu from './dineInMenu';


const theme = createTheme();
const styles = {

    leftContainer: {
    //   backgroundColor: '#262626',
    backgroundColor: '#a6a6a6',
      display: 'inline-block',
      height: '100vh',
    //   color:'#f6f6ef',
    color: 'black',
    },
    rightContainer: {
        // backgroundColor: '#b3b3b3',
        backgroundColor: '#e8ba30',
      display: 'inline-block',
      height: '100vh',
      overflow: 'auto',
    },
  };


const DineInOrderInterface = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container >

                    <Grid item xs={4} style={styles.leftContainer}>
                        <DineInDisplay />
                    </Grid>
                    <Grid item xs={8} style={styles.rightContainer}>
                        <DineInMenu/>
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default DineInOrderInterface; 