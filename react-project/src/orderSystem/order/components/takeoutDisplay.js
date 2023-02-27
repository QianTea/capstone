import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';

// import dayjs from 'dayjs';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
// import Stack from '@mui/material/Stack';

const theme = createTheme();
const styles = {
    space: {
        paddingTop: '5px',
    },
    backIcon: {
        color: '#fff',
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

// const [value, setValue] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));

const TakeoutDisplay = () => {
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
                        <p>Take Out</p>
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
                {/* customer name & phone & pick up time*/}
                <div>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                id="cusName"
                                label="name"
                                variant="outlined"
                                size="small"
                                sx={{
                                    margin: 2,
                                    bgcolor: 'grey.200',
                                    borderColor: 'white',
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="cusPhone"
                                label="Phone"
                                variant="outlined"
                                size="small"
                                sx={{
                                    margin: 2,
                                    bgcolor: 'grey.200',
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <MobileDateTimePicker
                                        label="For mobile"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <DesktopDateTimePicker
                                        label="For desktop"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <DateTimePicker
                                        label="Responsive"
                                        renderInput={(params) => <TextField {...params} />}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Stack>
                            </LocalizationProvider> */}

                        </Grid>
                    </Grid>
                </div>
                {/* buttons */}
                <Grid container style={styles.space}>
                    <Grid item xs={3}>
                        <Button
                            style={styles.button}
                            variant="contained"
                            color="success">
                            Send
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            style={styles.button}
                            variant="outlined"
                            color="warning">
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            style={styles.button}
                            variant="outlined">
                            Separate
                        </Button>
                    </Grid>
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

export default TakeoutDisplay;