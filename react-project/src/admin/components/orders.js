import React ,{ useState, useEffect } from 'react';
// api
import axios from 'axios';
//mui
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [firstFiveOrders, setFirstFiveOrders] = useState([]);
  
  const token = localStorage.getItem('token');
    
  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.3.156:5500/admin-orders/todayOrders',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setOrders(response.data.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setOrders]);
  console.log(orders);
  const lastFiveOrders = orders ? orders.slice().reverse().slice(0, 5) : [];

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString().replace(', ', ' ');
  };
  return (
    <React.Fragment>
      <Title>Last 5 Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Order Type</TableCell>
            <TableCell align="center">Sale Amount</TableCell>
            <TableCell align="center">Server</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastFiveOrders.map((o) => (
            <TableRow key={o._id}>
              <TableCell  align="center">{formatTime(o.completedTime)}</TableCell>
              <TableCell align="center">{o.orderType}</TableCell>
              <TableCell align="center">{`$${o.totalCost}`}</TableCell>
              <TableCell align="center">{o.staff}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" 
      href="/admin/orderhistory" 
      //onClick={''} 
      sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}