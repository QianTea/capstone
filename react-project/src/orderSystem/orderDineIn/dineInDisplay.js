import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import {
    Table, TableContainer, TableBody,
    TableCell, TableHead, TableRow, TextField, Tab
} from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import StickyNote2TwoToneIcon from '@mui/icons-material/StickyNote2TwoTone';
//drop down menu
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

//style
const theme = createTheme({
    palette: {
        success: {
            main: '#64b478',
        },
        secondary: {
            main: '#3F51B5',
        },
    },
});
const styles = {
    space: {
        paddingTop: '1%',
    },
    backIcon: {
        paddingTop: '30%',
    },
    dropdownTxt: {
        fontSize: '20px',
    },
    dropdown: {
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        borderBottom: '1px solid #ccc',
    },
    table: {
        height: '100%',
        maxHeight: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    tableH: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    tableB: {
        fontSize: '18px',
    },
    total: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '1%',
        paddingLeft: '12%',
    },
    subtotaltxt: {
        paddingTop: '5%',
        paddingBottom: '1%',
        border: 'none ',
        fontSize: '19px',
    },
    bottomBtn: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '5%',
        paddingRight: '0%',
    },
    button: {
        height: '120%',
        width: '100%',
        marginLeft: '8%',
        fontSize: '20px',
        color: '#fff',
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        fontSize: '50px',
    },
    iconBtnTXT: {
        variant: 'caption',
        textAlign: 'center',
    },
};
// data
const orderTypes = [
    { value: 'dine-in', label: 'Dine in' },
    { value: 'take-out', label: 'Take out' },
    { value: 'phone', label: 'Phone' },
];
const tables = [
    { label: 'Table 0', value: '0' },
    { label: 'Table 1', value: '1' },
    { label: 'Table 2', value: '2' },
    { label: 'Table 3', value: '3' },
    { label: 'Table 4', value: '4' },
    { label: 'Table 5', value: '5' },
    { label: 'Table 6', value: '6' },
    { label: 'Table 7', value: '7' },
    { label: 'Table 8', value: '8' },
    { label: 'Table 9', value: '9' },
    { label: 'Table 10', value: '10' },
];
const orders = [
    { item: 'Lunch Special', quatity: '2', single: '$7.00', total: '$14.00' },
    { item: 'SFP', quatity: '1', single: '$21.00', total: '$21.00' },
    { item: 'Lunch Special', quatity: '2', single: '$7.00', total: '$14.00' },
    { item: 'SFP', quatity: '1', single: '$21.00', total: '$21.00' },
    { item: 'Lunch Special', quatity: '2', single: '$7.00', total: '$14.00' },
    { item: 'SFP', quatity: '1', single: '$21.00', total: '$21.00' },
    { item: 'Gravy', quatity: '1', single: '$1.99', total: '$1.99' },
    { item: 'M-P', quatity: '1', single: '$1.5', total: '$1.5' },
    { item: 'POP', quatity: '1', single: '$1.50', total: '$1.5' },
];
const calculate = {
    subtotal: '$20.66',
    tax: '$2.5',
    total: '$23.16',
};

// default export
const DineInDisplay = () => {
    const link = useNavigate();

    const handleBackClick = () => {
        link('/order/home');
    };
    // drop down - order type
    const [selectedOrderType, setSelectedOrderType] = useState(orderTypes[0].value);
    const handleOrderTypeChange = (event) => {
        setSelectedOrderType(event.target.value);
    };
    // drop down - table
    const [selectedTable, setSelectedTable] = useState(tables[0].value);
    const handleTableChange = (event) => {
        setSelectedTable(event.target.value);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                {/* Head: Order Head */}
                <Grid container>
                    {/* back icon */}
                    <Grid item xs={3} >
                        <IconButton
                            onClick={handleBackClick}>
                            <ArrowBackIosNewIcon
                                style={styles.backIcon} />
                        </IconButton>
                    </Grid>
                    {/* Head: Order Type: Take out/ Dine in/ Phone */}
                    <Grid item xs={5} >
                        <Select
                            style={styles.dropdown}
                            value={selectedOrderType}
                            onChange={handleOrderTypeChange}
                        >
                            {orderTypes.map((o) => (
                                <MenuItem key={o.value} value={o.value}>
                                    {o.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* Head: Table Number */}
                    {/* <Grid item xs={4} style={styles.dropdownTxt}>
                        <Select
                            style={styles.dropdown}
                            value={selectedTable}
                            onChange={handleTableChange}
                        >
                            {tables.map((t) => (
                                <MenuItem key={t.value} value={t.value}>
                                    {t.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid> */}
                </Grid>
                {/* phone order only */}
                <Grid container>
                    <Grid item xs={4} >
                        <TextField
                         variant="filled" 
                         size="small"
                            margin="normal"
                            required 
                            id="cusName" name="cusName"
                            label="Customer Name"
                            autoComplete="name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <TextField
                         variant="filled" 
                         size="small"
                            margin="normal"
                            required 
                            id="cusPhone" name="cusPhone"
                            label="Phone"
                            autoComplete="phone"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={5} >
                        <TextField
                         variant="filled" 
                         size="small"
                            margin="normal"
                            required 
                            id="pickupTime" name="pickupTime"
                            label="Pick Up Time"
                            autoComplete="time"
                            autoFocus
                        />
                    </Grid>
                </Grid>
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12}
                        style={styles.table}>
                        <TableContainer
                            component={Paper}
                            style={{ maxHeight: '300px' }}>

                            <Table size="small" >
                                <TableHead
                                    style={{ position: 'sticky', top: 0 }}>
                                    <TableRow>
                                        <TableCell style={styles.tableH}>Item</TableCell>
                                        <TableCell style={styles.tableH} align="left">Quantity</TableCell>
                                        <TableCell style={styles.tableH}>Price</TableCell>
                                        {/* <TableCell style={styles.tableH}>Total</TableCell> */}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {orders.map((v) => (
                                        <TableRow>
                                            <TableCell style={styles.tableB}>{v.item}</TableCell>
                                            <TableCell style={{ ...styles.tableB, paddingRight: '15%' }} align="center">{v.quatity}</TableCell>
                                            <TableCell style={{ ...styles.tableB, paddingRight: '15%' }} align="center">{v.single}</TableCell>
                                            {/* <TableCell style={styles.tableB} align="center">{v.total}</TableCell> */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                {/* Order subtotal list */}
                <Grid container >
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={7} style={styles.total}>
                        <TableRow>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                Sub Total:
                            </TableCell>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                {calculate.subtotal}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                Tax(13%):
                            </TableCell>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                {calculate.tax}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                Total:
                            </TableCell>
                            <TableCell
                                style={styles.subtotaltxt}
                                align="right">
                                {calculate.total}
                            </TableCell>
                        </TableRow>
                    </Grid>
                </Grid>

                {/* buttons */}
                <Grid container style={styles.bottomBtn}>
                    <Grid item xs={3} >
                        {/* Print */}
                        <IconButton style={styles.iconButton}>
                            <LocalPrintshopTwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Print
                            </Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        {/* Edit */}
                        <IconButton style={styles.iconButton}>
                            <EditTwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Edit
                            </Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        {/* Separate */}
                        <IconButton style={styles.iconButton}>
                            <SafetyDividerIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Separate
                            </Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        {/* Note */}
                        <IconButton style={styles.iconButton}>
                            <StickyNote2TwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Note
                            </Typography>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container style={styles.space}>
                    <Grid item xs={3}>
                        <Button
                            style={styles.button}
                            variant="contained"
                            fullWidth
                            color='success'
                        >
                            Done
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button
                            style={styles.button}
                            variant="contained"
                            fullWidth
                        >
                            Pay &nbsp;&nbsp; {calculate.total}
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div >
    )
}

export default DineInDisplay;