import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import TakeoutDisplay from '../components/takeoutDisplay';
import TakeOutMenu from '../components/takeoutMenu';

const theme = createTheme();
const styles = {

    leftContainer: {
      backgroundColor: '#262626',
      display: 'inline-block',
      height: '100vh',
      color:'#f6f6ef',
    },
    rightContainer: {
        // backgroundColor: '#b3b3b3',
        backgroundColor: '#538cc6',
      display: 'inline-block',
      height: '100vh',
      overflow: 'auto',
    },
  };

const PhoneOrderPage = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container >

                    <Grid item xs={4} style={styles.leftContainer}>
                        <TakeoutDisplay />
                    </Grid>
                    <Grid item xs={8} style={styles.rightContainer}>
                        <TakeOutMenu />
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default PhoneOrderPage; 