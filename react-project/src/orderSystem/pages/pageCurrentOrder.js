import React from 'react';
import { useState, useEffect, useRef } from 'react';
// api
import axios from 'axios';
//mui
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
        fontSize: '1.8rem',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    majorText: {
        fontSize: '1.5rem',
        // fontWeight: 'bold',
        textAlign: 'left',
    },
    infoText: {
        marginTop: '1%',
        fontSize: '1.1rem',
        // fontWeight: 'bold',
        textAlign: 'right',
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

const CurrentOrders = () => {
    const [orders, setOrders] = useState({
        dineIn: [],
        takeOut: [],
        phoneOrder: []
    });
    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://localhost:5500/orders/pendingOrders',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            };

            try {
                const response = await axios.request(config);
                setOrders(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchOrders();
    }, []);
    console.log(orders.dineIn);
    return (
        <div>
            <Grid container spacing={2} style={styles.page}>
                <Grid item xs={12} md={4} style={styles.dineInOrders}>
                    <DineInOrders orders={orders.dineIn} />
                </Grid>
                <Grid item xs={12} md={4} style={styles.takeoutOrders}>
                    <TakeoutOrders orders={orders.takeOut} />
                </Grid>
                <Grid item xs={12} md={4} style={styles.phoneOrders}>
                    <PhoneOrders orders={orders.phoneOrder} />
                </Grid>
            </Grid>
            <Link color="primary" href="/order/home" onClick={''} sx={{ mt: 3 }}>
                Back to home
            </Link>
        </div>
    );
};
export default CurrentOrders;


const DineInOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionDI}>
            <h2 style={styles.sectionTitle}>Dine In Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order._id} />
            ))}
        </div>
    );
};

const TakeoutOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionTO}>
            <h2 style={styles.sectionTitle}>Takeout Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order._id} />
            ))}
        </div>
    );
};

const PhoneOrders = ({ orders }) => {
    return (
        <div style={styles.orderSectionP}>
            <h2 style={styles.sectionTitle}>Phone Orders</h2>
            {orders.map((order) => (
                <OrderCard order={order} key={order._id} />
            ))}
        </div>
    );
};

const OrderCard = ({ order }) => {
    let majorText ='';
    let infoText = '';

    if (order.orderType === 'DineIn') {
        majorText = `Table ${order.table}`;
        infoText = `Note: ${order.note}`;
    } else if (order.orderType === 'TakeOut') {
        infoText = `Note: ${order.note}`;
    } else if (order.orderType === 'Phone') {
        infoText = `Note: ${order.note}`;
        majorText = (
            <div>
                <div>Name: {order.customer.name}</div>
                <div>Phone: {order.customer.phone}</div>
                <div>Pickup: {order.customer.pickUpTime}</div>
            </div>
            
        );
    }

    return (
        <Card style={styles.card}>
            <CardHeader title={` #${order._id.slice(-4)}`} style={styles.cardHeader} />
            <CardContent style={styles.cardContent}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <div style={styles.majorText}>{majorText}</div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={styles.itemTotal}>{`$${order.totalCost.toFixed(2)}`}</div>
                    </Grid>
                </Grid>
                <div style={styles.infoText}>{infoText}</div>
            </CardContent>
        </Card>
    );
};

