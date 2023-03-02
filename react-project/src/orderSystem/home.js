import * as React from 'react';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CallIcon from '@mui/icons-material/Call';
import TableBarIcon from '@mui/icons-material/TableBar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

import { useNavigate } from 'react-router-dom';

const theme = createTheme();
// styles
const styles = {
    page: {
        paddingTop: '15%',
        paddingBottom: '15%',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: "100vh",
        backgroundColor: '#FFFAFA',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '65%',
        width: '90%',
        margin: 10,
    },
    button: {
        width: '100%',
        height: '100%',
        margin: '0 10px',
        borderRadius: '10px',
    },
    icon: {
        paddingLeft: '5%',
        fontSize: '60px',
        color:'#fff',
    },
    buttonText: {
        paddingTop: '15%',
        paddingBottom: '15%',
        paddingRight: '5%',
        fontSize: '35px',
        marginTop: '10px',
    },
};
//data
const pages = [
    { label: 'Dine In', value: 'handleDineInOrderClick', color: '#e8ba30', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Take Out', value: 'handleTakeoutOrderClick', color: '#538cc6', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Current Orders', value: 'handleCurrentOrdersClick', color: '#53c653', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Order History', value: 'handleOrdersHistoryClick', color: '#a6a6a6', icon: 'HistoryIcon style={styles.icon} ' },
];

const OrderHome = () => {
    // navigation
    const link = useNavigate();
    const handleDineInOrderClick = () => {
        link('/order/dine-in-order');
    };
    const handleTakeoutOrderClick = () => {
        link('/order/take-out-order');
    };
    const handleCurrentOrdersClick = () => {
        link('/order/current-orders');
    };
    const handleOrdersHistoryClick = () => {
        link('/order/orders-history');
    };

    return (
        <>
            <ThemeProvider theme={theme} >
                <Grid container style={styles.page}>
                    {/* Dine In Order */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#FFD700',
                                    boxShadow:'rgb(255, 215, 0,0.3) 0px 3px 5px 2px',
                                    color:'#38230D',
                                }}
                                onClick={handleDineInOrderClick}>
                                <RestaurantIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Dine In Order
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                    {/* Take Out Order */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#D3D3D3',
                                    boxShadow:'rgb(211, 211, 211,0.3) 0px 3px 5px 2px',
                                    color:'#38230D',
                                }}
                                onClick={handleTakeoutOrderClick}>
                                <TakeoutDiningIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Take Out Order
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                    {/* Phone Order */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#ADD8E6',
                                    boxShadow:'rgb(173, 216, 230,0.3) 0px 3px 5px 2px',
                                    color:'#38230D',
                                }}
                                onClick={handleTakeoutOrderClick}>
                                <CallIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Phone Order
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                    {/* Avaliable Tables */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#8FBC8F',
                                    boxShadow:'rgb(143, 188, 143,0.3) 0px 3px 5px 2px',
                                    color:'#fff',
                                }}
                                onClick={handleCurrentOrdersClick}>
                                <TableBarIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                Avaliable Tables
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                    {/* Current Orders */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#8FBC8F',
                                    boxShadow:'rgb(143, 188, 143,0.3) 0px 3px 5px 2px',
                                    color:'#fff',
                                }}
                                onClick={handleCurrentOrdersClick}>
                                <ReceiptLongIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Current Orders
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                    {/* Order History */}
                    <Grid item xs={4}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#D2B48C',
                                    boxShadow:'rgb(210, 180, 140,0.3) 0px 3px 5px 2px',
                                    color:'#fff',
                                }}
                                onClick={handleOrdersHistoryClick}>
                                <ManageHistoryIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Order History
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default OrderHome;