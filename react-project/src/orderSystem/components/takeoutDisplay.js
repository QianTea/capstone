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
// data

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

// default export 
const TakeoutDisplay = (props) => {
    // back button
    const link = useNavigate();
    const handleBackClick = () => {
        link('/order/home');
    };
    // drop down - table
    const [selectedTable, setSelectedTable] = useState(tables[0].value);
    const handleTableChange = (event) => {
        setSelectedTable(event.target.value);
    };
    // calculate subtotal
    let defaultTotal = 0;
    let tax = 0;
    let total = 0;
    const getTotal = () => {
        if (props.data.length <= 0) return `${defaultTotal.toFixed(2)}`;
        props.data.forEach(v => {
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


    // Button Note: dialog
    const [noteValue, setNoteValue] = useState('');
    const [Dialogopen, setDialogOpen] = useState(false);
    // open
    const handleNoteClickOpen = () => {
        setDialogOpen(true);
    };
    // save note data
    const handleNoteChange = (event) => {
        setNoteValue(event.target.value);
    };
    const handleNoteSave = () => {
        setNoteValue(noteValue);
        setDialogOpen(false);
    };
    // close
    const handleNoteClose = () => {
        setNoteValue('');
        setDialogOpen(false);
    };


    // bottom buttons
    const totalCostRef = useRef(null);
    const taxRef = useRef(null);
    const beforeTaxRef = useRef(null);

    const orderPrint = () => {
        // get order data
        let cusName = '';
        let cusPhone = '';
        let pickupTime = '';
        let totalCost = parseFloat(totalCostRef.current?.textContent);
        let taxCost = parseFloat(taxRef.current?.textContent);
        let beforeTaxCost = parseFloat(beforeTaxRef.current?.textContent);
        console.log(totalCost);
        const order = {
            orderType: 'TakeOut',
            table: null,
            totalCost: totalCost,
            tax: taxCost,
            beforeTax: beforeTaxCost,
            food: props.data,
            note: noteValue,
            customer: {
                name: cusName,
                phone: cusPhone,
                pickUpTime: pickupTime,
            }
        };
        console.log(order);
        //api
        const token = localStorage.getItem('token');
        let data = order;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5500/orders',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                console.log(token);
            })
            .catch((error) => {
                console.log(error);
            });
            link('/order/home');
    }
    const orderDone = () => {

    }
    const orderPaid = () => {

    }
    // pop-up window: New Feature Coming Soon!
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                    {/* Head: Order Type:  Dine in */}
                    <Grid item xs={5} style={styles.orderTypeTxt} >
                        Take Out
                    </Grid>

                </Grid>
                {/* phone order only */}
                {/* <Grid container>
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
                </Grid> */}
                {/* Order detail list */}
                <Grid container>
                    <Grid item xs={12}
                        style={styles.table}>
                        <TableContainer
                            component={Paper}
                            style={{ height: '45vh' }}>

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
                                    {props.data && props.data.length > 0 && props.data.map((v) => (
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
                            {noteValue}
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

                {/* buttons */}
                <Grid container style={styles.bottomBtn}>
                    {/* Print */}
                    <Grid item xs={3} >
                        <IconButton style={styles.iconButton}
                            onClick={orderPrint}>
                            <LocalPrintshopTwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Print
                            </Typography>
                        </IconButton>
                    </Grid>
                    {/* Note */}
                    <Grid item xs={3} >
                        <IconButton style={styles.iconButton}
                            onClick={handleNoteClickOpen}>
                            <StickyNote2TwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Note
                            </Typography>
                        </IconButton>
                    </Grid>
                    {/* Edit - Coming Soon*/}
                    <Grid item xs={3} >
                        <IconButton style={styles.iconButton}
                            onClick={handleClick}>
                            <EditTwoToneIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Edit
                            </Typography>
                        </IconButton>
                    </Grid>
                    {/* Separate - Coming Soon*/}
                    <Grid item xs={3} >
                        <IconButton style={styles.iconButton}
                            onClick={handleClick}>
                            <SafetyDividerIcon style={styles.icon} />
                            <Typography style={styles.iconBtnTXT}>
                                Separate
                            </Typography>
                        </IconButton>
                    </Grid>
                </Grid>
                {/* Buttons: Done-order status & Pay-pmy status */}
                {/* <Grid container style={styles.space}>
                    <Grid item xs={3}>
                        <Button
                            onClick={orderDone}
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
                            onClick={orderPaid}
                            style={styles.button}
                            variant="contained"
                            fullWidth
                        >
                            Pay &nbsp;&nbsp; $ {getTaxAndTotal()}
                        </Button>
                    </Grid>
                </Grid> */}
            </ThemeProvider>

            {/* Pop-up Window */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>New Feature Coming Soon!</Typography>
            </Popover>

            {/* Dialog Window */}
            <Dialog open={Dialogopen} onClose={handleNoteClose}>
                <DialogTitle>Note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Leave a note of this order:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="email"
                        fullWidth
                        multiline
                        rows={4}
                        variant="standard"
                        value={noteValue}
                        onChange={handleNoteChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNoteClose}>Cancel</Button>
                    <Button onClick={handleNoteSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default TakeoutDisplay;