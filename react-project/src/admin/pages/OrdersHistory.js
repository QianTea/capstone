import * as React from 'react';
import Link from '@mui/material/Link';
// mui - table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// mui - time picker

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
];

/**
 * A component that displays a table of orders.
 */
export default function AdminOrdersHistory() {
    const getOrderTypeCellStyle = (orderType) => {
        switch (orderType) {
            case 'Dine In':
                return {
                    backgroundColor: '#ddb31db3', // yellow
                    color: '#ffffff',
                    borderRadius: '20px',
                    marginLeft:'5%',
                    marginRight:'5%',
                };
            case 'Take Out':
                return {
                    backgroundColor: '#5a965778', // green
                    color: '#ffffff',
                    borderRadius: '20px',
                    marginLeft:'5%',
                    marginRight:'5%',
                };
            case 'Phone':
                return {
                    backgroundColor: '#568bc0b5', // blue
                    color: '#ffffff',
                    borderRadius: '20px',
                    marginLeft:'5%',
                    marginRight:'5%',
                };
            default:
                return {};
        }
    };
    return (
        <div>
            <h1>Orders History</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Order Id
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Time
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Order Type
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Payment Type
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Sale Amount
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: '#f5f5f5' }}>
                            Server
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allOrders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell align="center">{order.id}</TableCell>
                            <TableCell align="center">{order.datetime}</TableCell>
                            <TableCell align="center">
                                <div style={getOrderTypeCellStyle(order.orderType)}>{order.orderType}</div>
                            </TableCell>
                            <TableCell align="center">{order.pmtType}</TableCell>
                            <TableCell align="center">{`$${order.amount}`}</TableCell>
                            <TableCell align="center">{order.server}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="/admin/home" onClick={''} sx={{ mt: 3 }}>
                Back to home
            </Link>
        </div>
    );
}
