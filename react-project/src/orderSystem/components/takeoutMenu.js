import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const mdTheme = createTheme();
const styles = {
    page: {
        // backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
        paddingLeft: '10px',
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
    categoryH: {
        color: '#fff',
        fontSize: '25px',
        paddingTop: 0,
        paddingBottom: 0,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#fff',
        margin: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'middle',

        width: '110px',
        height: '110px',
    },
    title: {
        fontSize: '1.3rem',
        marginBottom: '0',
        position: 'relative',
        padding: 0,
    },
};

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
    { name: 'W/C', price: '10.19', category: 'Lunch Special' },
    { name: '11.49', price: '11.49', category: 'Shrimp Special' },
    { name: 'SFP', price: '11.49', category: 'Sea Food Platter' },
    { name: '1', price: '11.49', category: 'Homemade Fries' },
    { name: '2', price: '11.49', category: 'Homemade Fries' },
    { name: '3', price: '11.49', category: 'Homemade Fries' },
    { name: '4', price: '11.49', category: 'Homemade Fries' },
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
    { name: 'Gravy (L)', price: '11.49', category: 'Side Orders' },
    { name: 'Gravy (S)', price: '11.49', category: 'Side Orders' },
    { name: 'Cole Slaw (L)', price: '11.49', category: 'Side Orders' },
    { name: 'Cole Slaw (S)', price: '11.49', category: 'Side Orders' },
    { name: 'Coffee', price: '11.49', category: 'Beverages' },
    { name: 'Tea', price: '11.49', category: 'Beverages' },
    { name: 'POP', price: '11.49', category: 'Beverages' },
    { name: 'W Family', price: '11.49', category: 'Family Pack' },
    { name: 'Cod Family', price: '11.49', category: 'Family Pack' },
    { name: 'HD Family', price: '11.49', category: 'Family Pack' },
    { name: 'HB Family', price: '11.49', category: 'Family Pack' },
];

const TakeOutMenu = () => {

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <div style={styles.page}>
                    <Grid container style={styles.bottom}>
                        <Grid item xs={12}>
                            <p style={styles.categoryH}>Take Out Menu</p>
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
            </ThemeProvider >
        </>
    )
}

export default TakeOutMenu;