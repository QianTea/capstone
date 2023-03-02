import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';




const theme = createTheme();
const styles = {
    space: {
        paddingTop: '12px',
    },
    backIcon: {
        paddingTop: '15px',
    },
    dropdownTxt:{
        paddingTop: '10px',
        fontSize: '20px',
    },
    dropdown: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    tableH: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    tableB: {
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: '18px',
    },
    subtotal: {
        paddingTop: 0,
        paddingBottom: 0,
        border: 'none ',
        fontSize: '21px',
    },
    button: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '50px',
        width: '120px',
        margin: 10,
        fontSize: '20px',
        fontWeight: 'bold',
    },
    pay: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: '100px',
        width: '160px',
        fontSize: '25px',
        fontWeight: 'bold',
    },
};
const orders = [
    { item: 'Lunch Special', quatity: '2', single: '$7.00', total: '$14.00' },
    { item: 'SFP', quatity: '1', single: '$21.00', total: '$21.00' },
    { item: 'Gravy', quatity: '1', single: '$1.99', total: '$1.99' },
    { item: 'M-P', quatity: '1', single: '$1.5', total: '$1.5' },
    { item: 'POP', quatity: '1', single: '$1.50', total: '$1.5' },
];
const tables = [
    { name: '0', value: '0' },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: '9', value: '9' },
    { name: '10', value: '10' },
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
                        <IconButton
                            onClick={handleBackClick}>
                            <ArrowBackIosNewIcon
                                style={styles.backIcon} />
                        </IconButton>
                    </Grid>
                    {/* Head: Order Type: Take out/ Dine in */}
                    <Grid item xs={4} >
                        <h2>Dine in</h2>
                    </Grid>
                    {/* Head: Table Number */}
                    <Grid item xs={4} style={styles.dropdownTxt}>
                        Table:
                        <Select style={styles.dropdown}>
                            {tables.map((v) => (
                                <MenuItem value={v.value}>
                                    {v.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12}
                        style={{ height: '550px' }}>
                        <TableContainer
                            component={Paper}
                            style={{ maxHeight: '100%' }}>
                            <Table>
                                <TableHead
                                    style={{ position: 'sticky', top: 0 }}>
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
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={7}>
                        <TableRow>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                Sub Total:
                            </TableCell>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                $20.66
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                Tax:
                            </TableCell>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                $2.50
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                Total:
                            </TableCell>
                            <TableCell
                                style={styles.subtotal}
                                align="right">
                                $23.16
                            </TableCell>
                        </TableRow>
                    </Grid>
                </Grid>

                {/* buttons */}
                <Grid container style={styles.space}>
                    <Grid item xs={4}>
                        <Button
                            style={styles.button}
                            variant="contained"
                            color="success">
                            Send
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            style={styles.button}
                            variant="outlined"
                            color="warning">
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            style={styles.button}
                            variant="outlined">
                            Separate
                        </Button>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={3}>
                        <Button
                            style={styles.pay}
                            variant="contained"
                            size="large"
                            multiline >
                            $23.16<br />Pay
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default DineInDisplay;