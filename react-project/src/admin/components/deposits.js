import React, { useState, useEffect } from 'react';
// api
import axios from 'axios';
//mui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}
// today's total revenue, should updated once a new order completed
const todayRevenue = {
  date: '2023-03-01',
  total: 112.09,
};

export default function Deposits() {
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  const [orders, setOrders] = useState([]);

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
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setOrders]);
  let revenue = orders.revenue ? orders.revenue.toFixed(2) : '';

  return (
    <React.Fragment>
      <Title>Today's Revenue</Title>
      <Typography component="p" variant="h4">
        ${revenue}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {formattedDate}
      </Typography>
      <div>
        <Link color="primary"
          href="/admin/revenuehistory"
          //onClick={''}
          >
          View more balance
        </Link>
      </div>
    </React.Fragment>
  );
}