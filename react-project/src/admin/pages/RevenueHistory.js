import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { TablePagination } from '@mui/material';

//styles
    const styles = {
        container: {
          margin: '40px',
        },
        title: {
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
        },
        tableCell: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
        },
      };


        // Define the table columns and their properties
        const columns = [
          { id: 'date', label: 'Date' },
          { id: 'dineIn', label: 'Dine In' },
          { id: 'takeOut', label: 'Take Out' },
          { id: 'phone', label: 'Phone' },
          { id: 'total', label: 'Total' },
        ];
      
        // Define the table data
        const revenueHistory = [
          { date: '2023-03-01', dineIn: 58.75, takeOut: 43.34, phone: 10.0, total: 112.09 },
          { date: '2023-03-02', dineIn: 74.23, takeOut: 22.56, phone: 18.0, total: 114.79 },
          { date: '2023-03-03', dineIn: 95.45, takeOut: 66.89, phone: 25.0, total: 187.34 },
          { date: '2023-03-04', dineIn: 39.58, takeOut: 16.44, phone: 12.0, total: 67.02 },
          { date: '2023-03-05', dineIn: 60.34, takeOut: 45.67, phone: 15.0, total: 120.01 },
          { date: '2023-03-06', dineIn: 72.89, takeOut: 32.45, phone: 20.0, total: 125.34 },
          { date: '2023-03-07', dineIn: 85.76, takeOut: 67.45, phone: 28.0, total: 181.21 },
        ];
      

/**
 * A component that displays the revenue history table.
 */
export default function RevenueHistory() {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 15;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

// group data by date and orderType
const revenueData = revenueHistory.reduce((result, current) => {
    const { date, ordertype, revenue } = current;
    const key = `${date}-${ordertype || 'unknown'}`;
    result[key] = result[key] || { date, ordertype: ordertype || 'Unknown', dineIn: 0, takeOut: 0, phone: 0 };
    result[key][(ordertype || 'unknown').toLowerCase().replace(/ /g, '')] += parseFloat(revenue);
    
    return result;
}, {});


// calculate total revenue for each date
const totalRevenueData = Object.values(revenueData).reduce((result, current) => {
    const { date, dineIn, takeOut, phone } = current;
    const total = parseFloat(dineIn) + parseFloat(takeOut) + parseFloat(phone);
    const key = date;
    result[key] = result[key] || { date, dineIn: 0, takeOut: 0, phone: 0, total: 0 };
    result[key].dineIn += parseFloat(dineIn);
    result[key].takeOut += parseFloat(takeOut);
    result[key].phone += parseFloat(phone);
    result[key].total += total;
    return result;
}, {});


    // sort the data by date
    const sortedRevenueData = Object.values(totalRevenueData).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Revenue History</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={styles.tableCell}>
                            Date
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Dine In
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Take Out
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Phone
                        </TableCell>
                        <TableCell align="center" style={styles.tableCell}>
                            Total
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRevenueData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                        <TableRow key={data.date}>
                            <TableCell align="center">{data.date}</TableCell>
                            <TableCell align="center">{`$${data.dineIn.toFixed(2)}`}</TableCell>
                            <TableCell align="center">{`$${data.takeOut.toFixed(2)}`}</TableCell>
                            <TableCell align="center">{`$${data.phone.toFixed(2)}`}</TableCell>
                            <TableCell align="center">{`$${data.total.toFixed(2)}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                component="div"
                count={sortedRevenueData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
        </div>
    );
}

