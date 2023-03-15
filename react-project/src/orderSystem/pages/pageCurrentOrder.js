import React, { useState } from 'react';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';

// styles
const styles = {
    page: {
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    card: {
        marginBottom: '5px',
        boxShadow: '0px 3px 6px #666',
        maxWidth: '500px',
        backgroundColor: 'rgb(255,255,255,0.3)',
        paddingRight: '2%',
        paddingLeft: '2%',
        margin: '0',
    },
    cardHeader: {
        color: '#fff',
        padding: '1%',
    },
    cardContent: {
        padding: '0',
        margin: '0',
    },
    itemList: {
        marginTop: '1%',
        marginBottom: '1%',
    },
    itemTotal: {
        marginTop: '1%',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    infoText: {
        marginTop: '1%',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemLabel: {
        fontWeight: 'bold',
        marginBottom: '1%',
    },
    container: {
        margin: '1%',
    },
    //dine in
    orderSectionDI: {
        margin: '5%',
        backgroundColor: '#ddb31db3',
        color: '#ffffff',
    },

    //take out
    orderSectionTO: {
        margin: '5%',
        backgroundColor: '#5a9657b0',
        color: '#ffffff',
    },

    //phone
    orderSectionP: {
        margin: '5%',
        backgroundColor: '#3778c8b0',
        color: '#ffffff',
    },
    sectionTitle: {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        textAlign: 'center',
    },
};
// Define the table data
const dineInOrders = [
    { id: 1, type: 'dine in', orderTime: new Date('2023-03-10T12:00:00'), tableNumber: 4, dishes: ['Cod/C'], amount: 20.5 },
    { id: 4, type: 'dine in', orderTime: new Date('2023-03-10T13:15:00'), tableNumber: 6, dishes: ['HB/C', 'M-P'], amount: 33.0 },
    { id: 7, type: 'dine in', orderTime: new Date('2023-03-10T12:00:00'), tableNumber: 4, dishes: ['Cod/C'], amount: 20.5 },
    { id: 8, type: 'dine in', orderTime: new Date('2023-03-10T13:15:00'), tableNumber: 6, dishes: ['HB/C', 'M-P'], amount: 33.0 },
];

const takeoutOrders = [
    { id: 2, type: 'take out', orderTime: new Date('2023-03-10T12:30:00'), dishes: ['HB Family', 'Gravy(L)'], amount: 95.0, note: 'fries well done.' },
    { id: 6, type: 'take out', orderTime: new Date('2023-03-10T14:30:00'), dishes: ['HD/C', 'SFP'], amount: 49.5, note: '' },
];

const phoneOrders = [
    { id: 3, type: 'phone', orderTime: new Date('2023-03-10T13:00:00'), dishes: ['HB Family', 'Gravy(L)'], amount: 98.5, customerName: 'John', customerPhone: '123-456-7890', pickupTime: new Date('2023-03-10T13:00') },
    { id: 5, type: 'phone', orderTime: new Date('2023-03-10T14:00:00'), dishes: ['HD/C', 'SFP'], amount: 32.0, customerName: 'Jane', customerPhone: '987-654-3210', pickupTime: new Date('2023-03-10T14:00') },
    { id: 9, type: 'phone', orderTime: new Date('2023-03-10T13:00:00'), dishes: ['HB Family', 'Gravy(L)'], amount: 98.5, customerName: 'John', customerPhone: '123-456-7890', pickupTime: new Date('2023-03-10T13:00') },
    { id: 10, type: 'phone', orderTime: new Date('2023-03-10T14:00:00'), dishes: ['HD/C', 'SFP'], amount: 32.0, customerName: 'Jane', customerPhone: '987-654-3210', pickupTime: new Date('2023-03-10T14:00') },

];


const OrderCard = ({ order }) => {
    let firstTwoDishes = '';
    firstTwoDishes = order.dishes.slice(0, 2).join(', ');

    let infoText = '';
    if (order.type === 'dine in') {
        infoText = `Table ${order.tableNumber}`;
    } else if (order.type === 'take out') {
        infoText = order.note;
    } else if (order.type === 'phone') {
        const pickupTimeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const pickupTime = order.pickupTime.toLocaleTimeString('en-US', pickupTimeOptions);
        infoText = (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ flex: '1 1 auto' }}>Pickup: {pickupTime}</span>
                <span style={{ flex: '1 1 auto', textAlign: 'right' }}>{order.customerName}: {order.customerPhone}</span>
            </div>
        );
    }

    return (
        <Card style={styles.card}>
            <CardHeader title={`${order.type} #${order.id}`} style={styles.cardHeader} />
            <CardContent style={styles.cardContent}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <div style={styles.itemLabel}>Items:</div>
                        <div style={styles.itemList}>{firstTwoDishes}</div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <div style={styles.itemLabel}>Total:</div> */}
                        <div style={styles.itemTotal}>{`$${order.amount.toFixed(2)}`}</div>
                    </Grid>
                </Grid>
                <div style={styles.itemLabel}>{infoText}</div>
            </CardContent>
        </Card>
    );
};


const DineInOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionDI}>
            <h2 style={styles.sectionTitle}>Dine In Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order.id} />
            ))}
        </div>
    );
};

const TakeoutOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionTO}>
            <h2 style={styles.sectionTitle}>Takeout Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order.id} />
            ))}
        </div>
    );
};

const PhoneOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionP}>
            <h2 style={styles.sectionTitle}>Phone Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order.id} />
            ))}
        </div>
    );
};
const CurrentOrders = () => {

    return (
        <div>
            <Grid container spacing={2} style={styles.page}>
                <Grid item xs={12} md={4} style={styles.dineInOrders}>
                    <DineInOrders orders={dineInOrders} />
                </Grid>
                <Grid item xs={12} md={4} style={styles.takeoutOrders}>
                    <TakeoutOrders orders={takeoutOrders} />
                </Grid>
                <Grid item xs={12} md={4} style={styles.phoneOrders}>
                    <PhoneOrders orders={phoneOrders} />
                </Grid>
            </Grid>
            <Link color="primary" href="/order/home" onClick={''} sx={{ mt: 3 }}>
                Back to home
            </Link>
        </div>
    );
};

export default CurrentOrders;