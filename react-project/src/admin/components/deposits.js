import * as React from 'react';
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
  return (
    <React.Fragment>
      <Title>Today's Revenue</Title>
      <Typography component="p" variant="h4">
        ${todayRevenue.total}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {todayRevenue.date}
      </Typography>
      <div>
        <Link color="primary" 
        href="/admin/revenuehistory" 
        onClick={''}>
          View more balance
        </Link>
      </div>
    </React.Fragment>
  );
}