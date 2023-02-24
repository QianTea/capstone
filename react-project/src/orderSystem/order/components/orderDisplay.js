import * as React from 'react';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';

const theme = createTheme();
const styles = {
    backIcon: {
        color: '#fff',
    },
    bottom: {
        paddingTop: '20px',
    },
    nopad: {
        paddingTop: 0,
        paddingBottom: 0,
        border: 'none ',
    },
    lesspad: {
        paddingTop: 2,
        paddingBottom: 2,
    },

    button: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '40px',
        width: '80px',
        margin: 10,
    },
    pay: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '60px',
        width: '80px',
        margin: 2,
    },
};

const OrderDisplay = () => {

    return (

        <div>
            <ThemeProvider theme={theme}>
                {/* Order Head */}
                <Grid container>
                    {/* back icon */}
                    <Grid item xs={4} >
                        <IconButton>
                            <ArrowBackIosNewIcon style={styles.backIcon} />
                        </IconButton>
                    </Grid>
                    {/* Head: Order Type: Take out/ Dine in */}
                    <Grid item xs={4} >
                        <p>Take Out</p>
                    </Grid>
                </Grid>
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12} style={{ height: '550px' }}>
                        <TableContainer component={Paper} style={{ maxHeight: '100%' }}>
                            <Table>
                                <TableHead style={{ position: 'sticky', top: 0 }}>
                                    <TableRow>
                                        <TableCell style={styles.lesspad}>Item</TableCell>
                                        <TableCell style={styles.lesspad}>Quantity</TableCell>
                                        <TableCell style={styles.lesspad}>Single</TableCell>
                                        <TableCell style={styles.lesspad}>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={styles.lesspad}>Lunch special</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >Lunch special</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >Lunch special</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >HB/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>  
                                    <TableRow>                                
                                        <TableCell style={styles.lesspad} >1pc HD/C</TableCell>
                                        <TableCell style={styles.lesspad} align="center">2</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$7.00</TableCell>
                                        <TableCell style={styles.lesspad} align="center">$14.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                {/* Order subtotal list */}
                <Grid container style={styles.bottom}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={7}>
                        <TableRow>
                            <TableCell style={styles.nopad} align="right">Sub Total:</TableCell>
                            <TableCell style={styles.nopad} align="right">$20.66</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.nopad} align="right">Tax:</TableCell>
                            <TableCell style={styles.nopad} align="right">$2.50</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.nopad} align="right">Total:</TableCell>
                            <TableCell style={styles.nopad} align="right">$23.16</TableCell>
                        </TableRow>
                    </Grid>
                </Grid>
                {/* buttons */}
                <Grid container style={styles.bottom}>
                    <Grid item xs={3}>
                        <Button style={styles.button} variant="contained" color="success">Send</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button style={styles.button} variant="outlined" color="warning">Cancel</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button style={styles.button} variant="outlined">Separate</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button style={styles.pay} variant="contained" size="large" multiline >
                            $23.16<br />Pay
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default OrderDisplay;