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
                    <Grid item xs={12} style={{ height: '400px' }}>
                        <TableContainer component={Paper} style={{ maxHeight: '100%' }}>
                            <Table>
                                <TableHead style={{ position: 'sticky', top: 0 }}>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Single Price</TableCell>
                                        <TableCell>Total Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch special</TableCell>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">$7.00</TableCell>
                                        <TableCell align="center">$14.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                {/* Order subtotal list */}
                <Grid container>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                        <TableRow>
                            <TableCell align="right">Sub Total:</TableCell>
                            <TableCell align="right">$20.66</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Tax:</TableCell>
                            <TableCell align="right">$2.50</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Total:</TableCell>
                            <TableCell align="right">$23.16</TableCell>
                        </TableRow>
                    </Grid>
                </Grid>
                {/* buttons */}
                <Grid container style={styles.bottom}>
                    <Grid item xs={3}>
                        <Button variant="contained" color="success">Send</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" color="warning">Cancel</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined">Separate</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" size="large" multiline >
                            $23.16<br/>Pay
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default OrderDisplay;