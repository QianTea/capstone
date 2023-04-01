import React from 'react';
import { useState, useEffect, useRef } from 'react';
// api
import axios from 'axios';
//mui
import Link from '@mui/material/Link';
// mui - table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
// mui - time picker

// styles
const styles = {
    container: {
        margin: '40px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    orderType: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        color: '#fff',
        borderRadius: '20px',
        padding: '5px 15px',
        marginRight: '10px',
        marginLeft: '5%',
        marginRight: '5%',
    },
    dineIn: {
        backgroundColor: '#ddb31db3',
        color: '#ffffff',
    },
    takeOut: {
        backgroundColor: '#5a965778',
        color: '#ffffff',
    },
    phone: {
        backgroundColor: '#568bc0b5',
        color: '#ffffff',
    },
    icon: {
        marginRight: '5px',
    },
    tableCell: {
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5',
    },
    server: {
        fontStyle: 'italic',
    },
};

// Define the orders data
const allOrders = [
    { id: '#907653', datetime: '28 Feb, 2023, 11:30 AM', orderType: 'Take Out', table: '', pmtType: 'cash', amount: '11.99', server: 'Ivy.L' },
    { id: '#007654', datetime: '28 Feb, 2023, 12:15 PM', orderType: 'Dine In', table: 'T9', pmtType: 'credit', amount: '23.45', server: 'Jack.M' },
    { id: '#207657', datetime: '28 Feb, 2023, 1:00 PM', orderType: 'Take Out', table: '', pmtType: 'credit', amount: '8.75', server: 'Grace.K' },
    { id: '#347890', datetime: '28 Feb, 2023, 2:30 PM', orderType: 'Dine In', table: 'T2', pmtType: 'cash', amount: '45.67', server: 'Bob.T' },
    { id: '#203578', datetime: '1 Mar, 2023, 11:30 AM', orderType: 'Phone', table: '', pmtType: 'credit', amount: '12.99', server: 'Ivy.L' },
    { id: '#547543', datetime: '1 Mar, 2023, 12:15 PM', orderType: 'Dine In', table: 'T4', pmtType: 'cash', amount: '18.75', server: 'Jack.M' },
    { id: '#647789', datetime: '1 Mar, 2023, 1:00 PM', orderType: 'Take Out', table: '', pmtType: 'credit', amount: '6.99', server: 'Grace.K' },
    { id: '#377890', datetime: '1 Mar, 2023, 2:30 PM', orderType: 'Dine In', table: 'T5', pmtType: 'cash', amount: '30.67', server: 'Bob.T' },
    { id: '#987690', datetime: '2 Mar, 2023, 11:30 AM', orderType: 'Phone', table: '', pmtType: 'credit', amount: '9.99', server: 'Ivy.L' },
    { id: '#567543', datetime: '2 Mar, 2023, 12:15 PM', orderType: 'Dine In', table: 'T3', pmtType: 'cash', amount: '12.75', server: 'Jack.M' },
    { id: '#987657', datetime: '2 Mar, 2023, 1:00 PM', orderType: 'Take Out', table: '', pmtType: 'credit', amount: '10.99', server: 'Grace.K' },
    { id: '#047890', datetime: '2 Mar, 2023, 2:30 PM', orderType: 'Dine In', table: 'T1', pmtType: 'cash', amount: '51.67', server: 'Bob.T' },
    { id: '#223578', datetime: '3 Mar, 2023, 11:30 AM', orderType: 'Take Out', table: '', pmtType: 'credit', amount: '15.99', server: 'Ivy.L' },
    { id: '#047892', datetime: '2 Mar, 2023, 2:30 PM', orderType: 'Dine In', table: 'T9', pmtType: 'cash', amount: '51.67', server: 'Bob.T' },
    { id: '#223579', datetime: '3 Mar, 2023, 11:30 AM', orderType: 'Take Out', table: '', pmtType: 'credit', amount: '15.99', server: 'Ivy.L' },
];

/**
 * A component that displays a table of orders.
 */
export default function AdminOrdersHistory() {
    // 15 rows a page
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;
    const handleChangePage = (event, newPage) => {
        
        
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:5500/admin-orders?page=${newPage + 1}&limit=${rowsPerPage}`,
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };

        axios
        .request(config)
        .then((response) => {
            setOrders(response.data.data);
            setPage(newPage);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    // change order type style
    const getOrderTypeCellStyle = (orderType) => {
        switch (orderType) {
            case 'DineIn':
                return { ...styles.orderType, ...styles.dineIn };
            case 'TakeOut':
                return { ...styles.orderType, ...styles.takeOut };
            case 'Phone':
                return { ...styles.orderType, ...styles.phone };
            default:
                return {};
        }
    };
    // api
    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:5500/admin-orders?page=${page}&limit=${rowsPerPage}`,
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };

        axios
            .request(config)
            .then((response) => {
                setOrders(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setOrders]);
    const formatTime = (timeString) => {
        const time = new Date(timeString);
        return time.toLocaleTimeString();
    };
    return (
        <div style={styles.container}>
            <div style={styles.title}>Orders History</div>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={styles.tableCell}>
                            Order Id
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Time
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Order Type
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Table
                        </TableCell>

                        <TableCell align="center" style={styles.tableCell}>
                            Sale Amount
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Server
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.orders && orders.orders
                        .map((order) => (
                            <TableRow key={order._id}>
                                <TableCell align="center">{order._id.slice(-4)}</TableCell>
                                <TableCell align="center">{formatTime(order.completedTime)}</TableCell>
                                <TableCell align="center">
                                    <div style={getOrderTypeCellStyle(order.orderType)}>
                                        {order.orderType}
                                    </div>
                                </TableCell>
                                <TableCell align="center">{order.table}</TableCell>
                                <TableCell align="center">{`$${order.totalCost}`}</TableCell>
                                <TableCell align="center">{order.staff}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={rowsPerPage}
                component="div"
                count={orders.count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
            <Link color="primary" href="/admin/home" sx={{ mt: 3 }}>
                Back to home
            </Link>
        </div>
    );
}
