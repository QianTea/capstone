import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// style
const mdTheme = createTheme();
const styles = {
    page: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: '5%',
        paddingLeft: '1%',
    },
    nopad: {
        paddingTop: 0,
        paddingBottom: 0,
        border: 'none ',
    },
    lesspad: {
        paddingTop: 2,
        paddingBottom: 2,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: '#fff',
        margin: '1.5%',
        borderRadius: '15px',
        boxShadow: '0px 3px 6px 3px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    title: {
        fontSize: '1.3rem',
        position: 'relative',
    },
    bottom:{
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    category: {
        backgroundColor: 'rgba(150, 130, 130, 0.6)',
        color: '#fff',
        margin: '1.5%',
        borderRadius: '15px',
        boxShadow: '0px 3px 6px 3px rgba(150, 130, 130, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
};
//data
const products = [
    { name: 'W/C', price: '10.19', category: '2pc Fish and Chip Dinners' },
    { name: 'Cod/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: 'HD/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: 'HB/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: '1pc W/C', price: '10.19', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc Cod/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc HD/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc HB/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
    { name: '2pc W', price: '10.19', category: '2pc Fish Only' },
    { name: '2pc Cod', price: '11.99', category: '2pc Fish Only' },
    { name: '2pc HD', price: '11.99', category: '2pc Fish Only' },
    { name: '2pc HB', price: '11.99', category: '2pc Fish Only' },
    { name: '1pc W', price: '10.19', category: '1pc Fish Only' },
    { name: '1pc Cod', price: '11.99', category: '1pc Fish Only' },
    { name: '1pc HD', price: '11.99', category: '1pc Fish Only' },
    { name: '1pc HB', price: '11.99', category: '1pc Fish Only' },
    { name: 'Lunch Special', price: '10.19', category: 'Lunch Special' },
    { name: '11.49', price: '11.49', category: 'Shrimp Special' },
    { name: 'SFP', price: '11.49', category: 'Sea Food Platter' },
    { name: 'Fries', price: '11.49', category: 'Homemade Fries' },
    { name: 'Kid A (w)', price: '11.49', category: 'Kid\'s Combo' },
    { name: 'Kid B (cf)', price: '11.49', category: 'Kid\'s Combo' },
    { name: '5pc Shrimp', price: '11.49', category: 'Side Orders' },
    { name: '5pc Scallops', price: '11.49', category: 'Side Orders' },
    { name: '4pc CKF', price: '11.49', category: 'Side Orders' },
    { name: '1/4lb CK Chips', price: '11.49', category: 'Side Orders' },
    { name: 'Munchers', price: '11.49', category: 'Side Orders' },
    { name: 'Cheese Sticks', price: '11.49', category: 'Side Orders' },
    { name: 'O-R', price: '11.49', category: 'Side Orders' },
    { name: 'M-P', price: '11.49', category: 'Side Orders' },
    { name: 'Gravy', price: '11.49', category: 'Side Orders' },
    { name: 'Cole Slaw', price: '11.49', category: 'Side Orders' },
    { name: 'Coffee', price: '11.49', category: 'Beverages' },
    { name: 'Tea', price: '11.49', category: 'Beverages' },
    { name: 'POP', price: '11.49', category: 'Beverages' },
];

const DineInMenu = () => {

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <div style={styles.page}>
                    <Grid container >
                        <Grid item xs={12}>
                            <div style={styles.menu}>
                                {products.map((v) => (
                                    <div style={styles.item}>
                                        <div style={styles.details}>
                                            <p style={styles.title}>
                                                {v.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                    <div style={styles.bottom}>
                    {/* Categories */}
                    <Grid container style={styles.bottom}>
                        <Grid item xs={4}>
                            <div style={styles.categories}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Fish
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={styles.menu}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Side Orders
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={styles.menu}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Beverages
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider >
        </>
    )
}

export default DineInMenu;