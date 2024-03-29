import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import axios from 'axios';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CallIcon from '@mui/icons-material/Call';
import TableBarIcon from '@mui/icons-material/TableBar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { green, red } from '@mui/material/colors';
import Box from '@mui/material/Box';


const theme = createTheme();
// styles
const styles = {
    page: {
        display: 'flex',
        height: '91.5vh',
        flexDirection: 'column',
        backgroundColor: '#b3b3b3',
        // margin:0,
    },
    buttonWrapper: {

    },
    button: {
        marginRight: '3.5%',
        marginLeft: '3.5%',
        marginTop: '5%',
        marginBottom: '5%',
        height: '200px',
        width: '300px',
        borderRadius: '50px',
        backgroundColor: '#e6e6e6',
        boxShadow: 'rgb(115，115，115，0.3) 0px 3px 6px 3px',
    },
    icon: {
        paddingLeft: '5%',
        fontSize: '5rem',
    },
    buttonText: {
        paddingTop: '15%',
        paddingBottom: '15%',
        paddingRight: '5%',
        fontSize: '2.5rem',
        marginTop: '1%',
        color: '#262626',
    },
};
//data
const pages = [
    { label: 'Dine In', value: 'handleDineInOrderClick', color: '#e8ba30', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Take Out', value: 'handleTakeoutOrderClick', color: '#538cc6', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Current Orders', value: 'handleCurrentOrdersClick', color: '#53c653', icon: 'HistoryIcon style={styles.icon} ' },
    { label: 'Order History', value: 'handleOrdersHistoryClick', color: '#a6a6a6', icon: 'HistoryIcon style={styles.icon} ' },
];

// Home page of order system
const OrderHome = () => {
    // navigation
    const link = useNavigate();
    const handleDineInOrderClick = () => {
        link('/order/dine-in-order');
    };
    const handleTakeoutOrderClick = () => {
        link('/order/take-out-order');
    };
    const handlePhoneOrderClick = () => {
        link('/order/phone-order');
    };
    const handleCurrentOrdersClick = () => {
        link('/order/current-orders');
    };
    const handleOrdersHistoryClick = () => {
        link('/order/orders-history');
    };
    const [tables, setTables] = useState([]);

    const token = localStorage.getItem('token');
  
    useEffect(() => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5500/tables',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };
  
      axios
        .request(config)
        .then((response) => {
            setTables(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setTables]);
    // get table list
    const availableTables = tables && tables.filter(table => table.tableStatus === 'available');
    const usedTables = tables && tables.filter(table => table.tableStatus === 'used');
    // count number
    const numAvailableTables = availableTables.length;
    const numUsedTables = usedTables.length;
    return (
        <div style={styles.page}>
            <ThemeProvider theme={theme} >
                <div style={styles.buttonWrapper}>
                    {/* Dine In/Take Out/ Phone Order */}
                    <ButtonBase
                        style={styles.button}
                        onClick={handleDineInOrderClick}>
                        <RestaurantIcon
                            style={{
                                ...styles.icon,
                                color: '#dbba57'
                            }} />
                        <div style={styles.buttonText}>
                            Dine In Order
                        </div>
                    </ButtonBase>
                    <ButtonBase
                        style={styles.button}
                        onClick={handleTakeoutOrderClick}>
                        <TakeoutDiningIcon
                            style={{
                                ...styles.icon,
                                color: '#64b4a0'
                            }}
                        />
                        <div style={styles.buttonText}>
                            Take Out Order
                        </div>
                    </ButtonBase>
                    <ButtonBase
                        style={styles.button}
                        onClick={handlePhoneOrderClick}>
                        <CallIcon
                            style={{
                                ...styles.icon,
                                color: '#6478b4'
                            }}
                        />
                        <div style={styles.buttonText}>
                            Phone Order
                        </div>
                    </ButtonBase>
                </div>
                {/* 2nd line: Avaliable Tables/Current/History */}
                <div style={styles.buttonWrapper}>
                    {/* Avaliable Tables */}
                    <ButtonBase style={styles.button}>
                        <TableBarIcon
                            style={{ ...styles.icon, color: '#d6a9a9', }}
                        />
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#737373' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <div>Available tables:</div>
                                    <div style={{ color: green[500] }}>{numAvailableTables}</div>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <Box>
                                    <div >Ordered tables:</div>
                                    <div style={{ color: red[500] }}>{numUsedTables}</div>
                                </Box>
                            </Box>
                        </div>
                    </ButtonBase>
                    {/* Current Orders */}
                    <ButtonBase
                        style={styles.button}
                        onClick={handleCurrentOrdersClick}>
                        <ReceiptLongIcon
                            style={{
                                ...styles.icon,
                                color: '#a0b464'
                            }}
                        />
                        <div style={styles.buttonText}>
                            Current Orders
                        </div>
                    </ButtonBase>
                    {/* Order History */}
                    <ButtonBase
                        style={styles.button}
                        onClick={handleOrdersHistoryClick}>
                        <ManageHistoryIcon
                            style={{
                                ...styles.icon,
                                color: '#737373'
                            }}
                        />
                        <div style={styles.buttonText}>
                            Order History
                        </div>
                    </ButtonBase>
                </div>
            </ThemeProvider >
        </div >
    );
};

export default OrderHome;