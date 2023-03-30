import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import axios from 'axios';
//mui
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
//pop-up
import Popover from '@mui/material/Popover';
// dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { width } from '@mui/system';

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
    orderTypeTxt: {
        fontSize: '1.5rem',
        fontWeight: 'bold',

        marginTop: '2%',
    },
    dropdownTxt: {
        fontSize: '1.2rem',
        marginLeft: 0,
    },
    dropdown: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    table: {
        height: '100%',
        maxHeight: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    tableH: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    tableB: {
        fontSize: '1rem',
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
        fontSize: '1rem',
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
        fontSize: '3rem',
    },
    iconBtnTXT: {
        variant: 'caption',
        textAlign: 'center',
    },
};


// default export 
const DetailDisplay = (props) => {
    const [isDoneButtonDisabled, setIsDoneButtonDisabled] = useState(false);
    const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(false);
    // back button
    const link = useNavigate();
    const handleBackClick = () => {
        link('/order/home');
    };

    // calculate subtotal
    let defaultTotal = 0;
    let tax = 0;
    let total = 0;
    const getTotal = () => {
        if (props.data.food && props.data.food.length <= 0) return `${defaultTotal.toFixed(2)}`;
        props.data && props.data.food && props.data.food.forEach(v => {
            defaultTotal += v.quality * v.dineInPrice;
        });
        return `${defaultTotal.toFixed(2)}`;
    }

    const getTax = () => {
        tax = Math.floor(defaultTotal * 13 / 100);
        return `${tax.toFixed(2)}`;
    }

    const getTaxAndTotal = () => {
        total = defaultTotal + tax;
        return `${total.toFixed(2)}`;
    }

    // bottom buttons
    const totalCostRef = useRef(null);
    const taxRef = useRef(null);
    const beforeTaxRef = useRef(null);


    // get data
    let note = props.data.note !== undefined ? `${props.data.note}` : '';
    let id = props.data._id;
    // dine in order only
    let table = props.data.table !== undefined ? `${props.data.table}` : '';

    // phone order only
    let cusName = props.data.customer && props.data.customer.name ? `${props.data.customer.name}` : '';
    let cusPhone = props.data.customer && props.data.customer.phone ? `${props.data.customer.phone}` : '';
    let pickUpTime = props.data.customer && props.data.customer.pickupTime ? `${props.data.customer.pickupTime}` : '';

    // Button Pay: dialog

    const [Dialogopen, setDialogOpen] = useState(false);
    // open
    const handlePayClickOpen = () => {
        setIsPayButtonDisabled(true);
        setDialogOpen(true);
    };

    // close
    const handlePayCancel = () => {
        setDialogOpen(false);
    };

    //api- payment status
    const updatePMTStatus = async (orderId) => {
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://192.168.3.156:5500/orders/pay/${orderId}`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
            });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    // change pmt status data
    const handlePayConfirm = () => {
        setDialogOpen(false);
        updatePMTStatus(id);

        setIsPayButtonDisabled(true);
        setIsDoneButtonDisabled(false);
    };
    //api- order status
    const updateOrderStatus = async (orderId) => {
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://192.168.3.156:5500/orders/complete/${orderId}`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
            });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    // Button Done
    const orderDone = () => {
        updateOrderStatus(id);
        link('/order/current-orders');
    }
    return (
        <div>
            <ThemeProvider theme={theme}>

                {/* Head: Order Head */}
                <Grid container>
                    {/* back icon */}
                    <Grid item xs={5} >
                        <IconButton
                            onClick={handleBackClick}>
                            <ArrowBackIosNewIcon
                                style={styles.backIcon} />
                        </IconButton>
                    </Grid>

                    {/* Head: Order Type: */}
                    <Grid item xs={5} style={styles.orderTypeTxt} >
                        {props.data.orderType}
                    </Grid>
                    {/* Head (Dine In Only): Table Number */}
                    {props.data.orderType === 'DineIn' && (
                        <Grid item xs={3} style={styles.dropdownTxt}>
                            Table:
                            <Select
                                style={styles.dropdown}
                                value={table}
                                readOnly
                            >
                                <MenuItem value={table}>{table}</MenuItem>
                            </Select>
                        </Grid>
                    )}

                </Grid>
                {/* phone order only */}
                {props.data.orderType === 'Phone' && (
                    <Grid container>
                        <Grid item xs={4} >
                            <TextField
                                size="small"
                                margin="normal"
                                disabled
                                id="cusName" name="cusName"
                                label="Customer Name"
                                // inputRef={cusNameRef}
                                value={cusName}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                size="small"
                                margin="normal"
                                disabled
                                id="cusPhone" name="cusPhone"
                                label="Phone"
                                // inputRef={cusPhoneRef}
                                value={cusPhone}
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                size="small"
                                margin="normal"
                                disabled
                                id="pickupTime" name="pickupTime"
                                label="Pick Up Time"
                                // inputRef={pickupTimeRef}
                                value={pickUpTime}
                            />
                        </Grid>
                    </Grid>
                )}
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12}
                        style={styles.table}>
                        <TableContainer
                            component={Paper}
                            style={{ height: '38vh' }}>

                            <Table size="small" >
                                <TableHead
                                    style={{ position: 'sticky', top: 0 }}>
                                    <TableRow>
                                        <TableCell style={styles.tableH}>Item</TableCell>
                                        <TableCell style={styles.tableH} align="left">Quantity</TableCell>
                                        <TableCell style={styles.tableH}>Price</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {props.data && props.data.food && props.data.food.length > 0 && props.data.food.map((v) => (
                                        <TableRow>
                                            <TableCell style={styles.tableB}>{v.altName}</TableCell>
                                            <TableCell style={{ ...styles.tableB, paddingRight: '15%' }} align="center">{v.quality}</TableCell>
                                            <TableCell style={{ ...styles.tableB, paddingRight: '15%' }} align="center">{v.dineInPrice * v.quality}</TableCell>
                                            {/* <TableCell style={styles.tableB} align="center">{v.total}</TableCell> */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                {/* Note & Order subtotal list */}
                <Grid container >
                    {/* Note Display Here */}
                    <Grid item xs={5} >
                        <p style={{ marginLeft: '7%', fontWeight: 'bold' }}>Note: </p>
                        <p style={{
                            maxWidth: '40rem', wordWrap: 'break-word',
                            maxHeight: '4rem', overflow: 'scroll',
                            marginLeft: '7%'
                        }}>
                            {note}
                        </p>
                    </Grid>
                    {/* Subtotal */}
                    <Grid item xs={7} style={styles.total}>
                        <TableRow>
                            <TableCell
                                style={{ ...styles.subtotaltxt, fontWeight: 'bold' }}
                                align="right">
                                Sub Total:
                            </TableCell>
                            <TableCell
                                ref={beforeTaxRef}
                                style={styles.subtotaltxt}
                                align="right">
                                {getTotal()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={{ ...styles.subtotaltxt, fontWeight: 'bold' }}
                                align="right">
                                Tax(13%):
                            </TableCell>
                            <TableCell
                                ref={taxRef}
                                style={styles.subtotaltxt}
                                align="right">
                                {getTax()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={{ ...styles.subtotaltxt, fontWeight: 'bold' }}
                                align="right">
                                Total:  $
                            </TableCell>
                            <TableCell
                                ref={totalCostRef}
                                style={styles.subtotaltxt}
                                align="right">
                                {getTaxAndTotal()}
                            </TableCell>
                        </TableRow>
                    </Grid>
                </Grid>

                {/* Buttons: Done-order status & Pay-pmy status */}
                <Grid container style={styles.space}>
                    <Grid item xs={3}>
                        <Button
                            onClick={orderDone}
                            style={styles.button}
                            variant="contained"
                            fullWidth
                            color='success'
                            disabled={isDoneButtonDisabled}
                        >
                            Done
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button
                            style={styles.button}
                            variant="contained"
                            fullWidth
                            onClick={handlePayClickOpen}
                            disabled={isPayButtonDisabled}
                        >
                            Pay &nbsp;&nbsp; $ {getTaxAndTotal()}
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>

            {/* Dialog Window */}
            <Dialog open={Dialogopen} onClose={handlePayCancel}>
                <DialogTitle>Payment Confirm</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Is this order paid?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePayCancel}>Cancel</Button>
                    <Button onClick={handlePayConfirm}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default DetailDisplay;