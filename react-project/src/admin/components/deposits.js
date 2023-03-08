import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Today's Revenue</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 Jan, 2023
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