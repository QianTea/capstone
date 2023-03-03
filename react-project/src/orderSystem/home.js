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
        backgroundColor: '#666666',
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
        backgroundColor: '#d9d9d9',
    },
    icon: {
        paddingLeft: '5%',
        fontSize: '60px',
    },
    buttonText: {
        paddingTop: '15%',
        paddingBottom: '15%',
        paddingRight: '5%',
        fontSize: '35px',
        marginTop: '10px',
        color:'black',
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
 
                                    boxShadow: 'rgb(175, 175, 106,0.3) 0px 3px 5px 2px',
                                    color: '#afaf6a',
                                }}
                                onClick={handleDineInOrderClick}>
                                <RestaurantIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#cccc00'
                                    }} />
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
                                    boxShadow: 'rgb(106, 175, 106,0.3) 0px 3px 5px 2px',
                                    color: '#38230D',
                                }}
                                onClick={handleTakeoutOrderClick}>
                                <TakeoutDiningIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#6aaf6a'
                                    }}
                                />
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
 
                                    boxShadow: 'rgb(106, 157, 175,0.3) 0px 3px 5px 2px',
                                    color: '#38230D',
                                }}
                                onClick={handleTakeoutOrderClick}>
                                <CallIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#6a9daf'
                                    }}
                                />
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
 
                                    boxShadow: 'rgb(175, 157, 106,0.3) 0px 3px 5px 2px',
                                    color: '#fff',
                                }}
                                onClick={handleCurrentOrdersClick}>
                                <TableBarIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#af9d6a',
                                    }}
                                />
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
 
                                    boxShadow: 'rgb(175, 157, 106,0.3) 0px 3px 5px 2px',
                                    color: '#fff',
                                }}
                                onClick={handleCurrentOrdersClick}>
                                <ReceiptLongIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#af9d6a'
                                    }}
                                />
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
                                    
                                    boxShadow: 'rgb(175, 157, 106,0.3) 0px 3px 6px 3px',
                                    color: '#D2B48C',
                                }}
                                onClick={handleOrdersHistoryClick}>
                                <ManageHistoryIcon
                                    style={{
                                        ...styles.icon,
                                        color: '#af9d6a'
                                    }}
                                />
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