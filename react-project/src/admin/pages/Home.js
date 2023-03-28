import React, { useState, useEffect } from 'react';
// api
import axios from 'axios';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// components
import Deposits from '../components/deposits';
import Orders from '../components/orders';
import AvailableTables from '../components/avaliableTables';

const mdTheme = createTheme();



function DashboardContent() {
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
    }, []);
    // get table list
    const availableTables = tables.filter(table => table.tableStatus === 'available');
    const usedTables = tables.filter(table => table.tableStatus === 'used');
    // count number
    const numAvailableTables = availableTables.length;
    const numUsedTables = usedTables.length;
    
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Blank-Avaliable Tables*/}
                            <Grid item xs={12} md={3} lg={3}>
                                {/* <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                > */}
                                    {/* <Charts /> */}
                                    <AvailableTables
                                        availableTables={numAvailableTables}
                                        orderedTables={numUsedTables}
                                    />
                                {/* </Paper> */}
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    {/* <Charts /> */}

                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    {/* <Charts /> */}

                                </Paper>
                            </Grid>
                            {/* Today's Revenue */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            {/* Today's Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}