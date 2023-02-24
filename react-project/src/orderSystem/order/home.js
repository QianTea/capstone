import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import TakeoutDisplay from './components/takeoutDisplay';
import DineInDisplay from './components/dineInDisplay';
import TakeOutMenu from './components/takeoutMenu';
import DineInMenu from './components/dineInMenu';

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
                <Grid container >

                    <Grid item xs={4} style={styles.leftContainer}>
                        <TakeoutDisplay />
                        {/* <DineInDisplay /> */}
                    </Grid>
                    <Grid item xs={8} style={styles.rightContainer}>
                        <TakeOutMenu />
                        {/* <DineInMenu/> */}
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default OrderHome; 