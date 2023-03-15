import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { green, red } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const AvailableTables = ({ availableTables, orderedTables }) => {
    return (
        <Card
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
            }}
        >
            <CardHeader

                title="Table Availability"
                sx={{ color: 'primary.main' }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 50 }}>
                        <RestaurantIcon sx={{ color: green[500] }} />
                    </Box>
                    <Box>
                        <div style={{ fontWeight: 'bold' }}>Available tables:</div>
                        <div>{availableTables}</div>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ width: 50 }}>
                        <RestaurantIcon sx={{ color: red[500] }} />
                    </Box>
                    <Box>
                        <div style={{ fontWeight: 'bold' }}>Ordered tables:</div>
                        <div>{orderedTables}</div>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AvailableTables;
