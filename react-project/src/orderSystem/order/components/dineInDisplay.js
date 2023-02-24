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
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';




const theme = createTheme();
const styles = {
    space: {
        paddingTop: '12px',
    },
    backIcon: {
        color: '#fff',
        paddingTop: '15px',
    },
    dropdown: {
        color: 'white',
        paddingTop: '10px',
        paddingLeft: '25px',
    },
    tableH:{
        fontSize:'20px',
        fontWeight: 'bold',
    },
    tableB: {
        paddingTop: 3,
        paddingBottom: 3,
        fontSize:'18px',
    },
    subtotal: {
        paddingTop: 0,
        paddingBottom: 0,
        border: 'none ',
        fontSize: '20px',
    },
    button: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '50px',
        width: '80px',
        margin: 10,
        fontSize: '15px',
    },
    pay: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '80px',
        width: '80px',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 2,
    },
};
const orders = [
    { item: 'Lunch Special', quatity: '2', single: '$7.00', total: '$14.00' },
    { item: 'SFP', quatity: '1', single: '$21.00', total: '$21.00' },
    { item: 'Gravy', quatity: '1', single: '$1.99', total: '$1.99' },
    { item: 'M-P', quatity: '1', single: '$1.5', total: '$1.5' },
    { item: 'POP', quatity: '1', single: '$1.50', total: '$1.5' },
];
const DineInDisplay = () => {
    const link = useNavigate();

    const handleBackClick = () => {
        link('/order/home');
    };
    return (

        <div>
            <ThemeProvider theme={theme}>
                {/* Order Head */}
                <Grid container>
                    {/* back icon */}
                    <Grid item xs={4} >
                        <IconButton onClick={handleBackClick}>
                            <ArrowBackIosNewIcon style={styles.backIcon} />
                        </IconButton>
                    </Grid>
                    {/* Head: Order Type: Take out/ Dine in */}
                    <Grid item xs={4} >
                        <h2>Dine in</h2>
                    </Grid>
                    {/* Head: Table Number */}
                    <Grid item xs={4} >
                        <Select style={styles.dropdown}>
                            <MenuItem value={0}>Table 0</MenuItem>
                            <MenuItem value={1}>Table 1</MenuItem>
                            <MenuItem value={2}>Table 2</MenuItem>
                            <MenuItem value={3}>Table 3</MenuItem>
                            <MenuItem value={4}>Table 4</MenuItem>
                            <MenuItem value={5}>Table 5</MenuItem>
                            <MenuItem value={6}>Table 6</MenuItem>
                            <MenuItem value={7}>Table 7</MenuItem>
                            <MenuItem value={8}>Table 8</MenuItem>
                            <MenuItem value={9}>Table 9</MenuItem>
                            <MenuItem value={10}>Table 10</MenuItem>
                            <MenuItem value={11}>Table 11</MenuItem>
                            <MenuItem value={12}>Table 12</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12} style={{ height: '550px' }}>
                        <TableContainer component={Paper} style={{ maxHeight: '100%' }}>
                            <Table>
                                <TableHead style={{ position: 'sticky', top: 0 }}>
                                    <TableRow>
                                        <TableCell style={styles.tableH}>Item</TableCell>
                                        <TableCell style={styles.tableH}>Quantity</TableCell>
                                        <TableCell style={styles.tableH}>Single</TableCell>
                                        <TableCell style={styles.tableH}>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map((v) => (
                                        <TableRow>
                                            <TableCell style={styles.tableB}>{v.item}</TableCell>
                                            <TableCell style={styles.tableB} align="center">{v.quatity}</TableCell>
                                            <TableCell style={styles.tableB} align="center">{v.single}</TableCell>
                                            <TableCell style={styles.tableB} align="center">{v.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                {/* Order subtotal list */}
                <Grid container style={styles.space}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={7}>
                        <TableRow>
                            <TableCell style={styles.subtotal} align="right">Sub Total:</TableCell>
                            <TableCell style={styles.subtotal} align="right">$20.66</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.subtotal} align="right">Tax:</TableCell>
                            <TableCell style={styles.subtotal} align="right">$2.50</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.subtotal} align="right">Total:</TableCell>
                            <TableCell style={styles.subtotal} align="right">$23.16</TableCell>
                        </TableRow>
                    </Grid>
                </Grid>

                {/* buttons */}
                <Grid container style={styles.space}>
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

export default DineInDisplay;