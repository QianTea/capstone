import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, time, name, paymentMethod, amount) {
  return { id, time, name, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '11:30 AM',
    'Ivy Lin',
    'Cash',
    12.44,
  ),
  createData(
    1,
    '11:35 AM',
    'Ivy Lin',
    'Card',
    66.99,
  ),
  createData(
    2, 
    '12:15 PM', 
    'Ivy Lin', 
    'Card', 
    100.81,
    ),
  createData(
    3,
    '13:45 PM',
    'Ivy Lin',
    'Cash',
    54.39,
  ),
  createData(
    4,
    '13:53 PM',
    'Ivy Lin',
    'Cash',
    12.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Today's Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Waiter's Name</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}