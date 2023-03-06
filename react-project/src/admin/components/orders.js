import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

//data
const firstFiveOrders = [
  { time: '11:30 AM', orderType: 'Take Out', pmtType: 'cash', amount: '11.99', waiter: 'Ivy.L' },
  { time: '12:15 PM', orderType: 'Dine In', pmtType: 'credit', amount: '23.45', waiter: 'Jack.M' },
  { time: '1:00 PM', orderType: 'Take Out', pmtType: 'credit', amount: '8.75', waiter: 'Grace.K' },
  { time: '2:30 PM', orderType: 'Dine In', pmtType: 'cash', amount: '45.67', waiter: 'Bob.T' },
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Today's Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Order Type</TableCell>
            <TableCell align="center">Payment Type</TableCell>
            <TableCell align="center">Sale Amount</TableCell>
            <TableCell align="center">Waiter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {firstFiveOrders.map((o) => (
            <TableRow>
              <TableCell align="center">{o.time}</TableCell>
              <TableCell align="center">{o.orderType}</TableCell>
              <TableCell align="center">{o.pmtType}</TableCell>
              <TableCell align="center">{`$${o.amount}`}</TableCell>
              <TableCell align="center">{o.waiter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={''} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}