import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryIcon from '@mui/icons-material/History';

import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const styles = {
    page: {
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '80px',
        paddingRight: '80px',
        backgroundColor:'#ffffe5',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '300px',
        width: '880px',
        margin: 10,
    },
    button: {
        width: '55%',
        height: '100%',
        margin: '0 10px',
        borderRadius: '10px',
    },
    icon: {
        fontSize: '80px',
    },
    buttonText: {
        fontSize: '35px',
        fontWeight: 'bold',
        marginTop: '10px',
    },
};

const OrderHome = () => {
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
                    <Grid item xs={6}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#e8ba30'
                                }}
                                onClick={handleDineInOrderClick}>
                                <RestaurantIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Dine-in Order
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#538cc6'
                                }}
                                onClick={handleTakeoutOrderClick}>
                                <TakeoutDiningIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Takeout Order
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#53c653'
                                }}
                                onClick={handleCurrentOrdersClick}>
                                <AssignmentIcon style={styles.icon} />
                                <div style={styles.buttonText}>
                                    Current Orders
                                </div>
                            </ButtonBase>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div style={styles.buttonWrapper}>
                            <ButtonBase
                                style={{
                                    ...styles.button,
                                    backgroundColor: '#a6a6a6'
                                }}
                                onClick={handleOrdersHistoryClick}>
                                <HistoryIcon style={styles.icon} />
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