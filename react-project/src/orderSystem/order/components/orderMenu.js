import * as React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { Box, style } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

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
        color: '#FFD700',
        fontSize: '15px',
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
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'middle',
        padding: '0',
        width: '80px',
        height: '80px',

    },
    title: {
        fontSize: '1.3rem',
        marginBottom: '0',
        position: 'relative',
        padding: 0,
    },
};

const fishes = [
    { name: 'W/C', price: '10.19', category: '2pc Fish and Chip Dinners' },
    { name: 'Cod/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: 'HD/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: 'HB/C', price: '11.99', category: '2pc Fish and Chip Dinners' },
];
const signlefishes = [
    { name: '1pc W/C', price: '10.19', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc Cod/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc HD/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
    { name: '1pc HB/C', price: '11.99', category: '1pc  Fish and Chip Dinners' },
];
const fishonly = [
    { name: '2pc W', price: '10.19', category: '2pc Fish Only' },
    { name: '2pc Cod', price: '11.99', category: '2pc Fish Only' },
    { name: '2pc HD', price: '11.99', category: '2pc Fish Only' },
    { name: '2pc HB', price: '11.99', category: '2pc Fish Only' },
];
const singlefishonly = [
    { name: '1pc W', price: '10.19', category: '1pc Fish Only' },
    { name: '1pc Cod', price: '11.99', category: '1pc Fish Only' },
    { name: '1pc HD', price: '11.99', category: '1pc Fish Only' },
    { name: '1pc HB', price: '11.99', category: '1pc Fish Only' },
];
const lunch = [
    { name: 'W/C', price: '10.19', category: 'Lunch Special' },
];
const shrimp = [
    { name: '11.49', price: '11.49', category: 'Shrimp Special' },
];
const seafoods = [
    { name: 'SFP', price: '11.49', category: 'Sea Food Platter' },
];
const fries = [
    { name: '1', price: '11.49', category: 'Homemade Fries' },
    { name: '2', price: '11.49', category: 'Homemade Fries' },
    { name: '3', price: '11.49', category: 'Homemade Fries' },
    { name: '4', price: '11.49', category: 'Homemade Fries' },
];
const kids = [
    { name: 'Kid A (w)', price: '11.49', category: 'Kid\'s Combo' },
    { name: 'Kid B (cf)', price: '11.49', category: 'Kid\'s Combo' },
];
const sides = [
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
];
const beverages = [
    { name: 'Coffee', price: '11.49', category: 'Beverages' },
    { name: 'Tea', price: '11.49', category: 'Beverages' },
    { name: 'POP', price: '11.49', category: 'Beverages' },

];
const family = [
    { name: 'W Family', price: '11.49', category: 'Family Pack' },
    { name: 'Cod Family', price: '11.49', category: 'Family Pack' },
    { name: 'HD Family', price: '11.49', category: 'Family Pack' },
    { name: 'HB Family', price: '11.49', category: 'Family Pack' },
];
const OrderMenu = () => {

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <div style={styles.page}>
                    <Grid container style={styles.bottom}>
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>Lunch Special</p>
                            <div style={styles.menu}>
                                {lunch.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>Shrimp Special</p>
                            <div style={styles.menu}>
                                {shrimp.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>Sea Food Platter</p>
                            <div style={styles.menu}>
                                {seafoods.map((v) => (
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
                        <Grid item xs={3}>
                            <p style={styles.categoryH}>Kid's Combo</p>
                            <div style={styles.menu}>
                                {kids.map((v) => (
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
                    <Grid container style={styles.bottom}>
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>2pc Fish and Chip</p>
                            <div style={styles.menu}>
                                {fishes.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>1pc Fish and Chip</p>
                            <div style={styles.menu}>
                                {signlefishes.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>2pc Fish Only</p>
                            <div style={styles.menu}>
                                {fishonly.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>1pc Fish Only</p>
                            <div style={styles.menu}>
                                {singlefishonly.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>Family PacksPacks</p>
                            <div style={styles.menu}>
                                {family.map((v) => (
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
                        <Grid item xs={2}>
                            <p style={styles.categoryH}>Fries</p>
                            <div style={styles.menu}>
                                {fries.map((v) => (
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


                    <p style={styles.categoryH}>Side Orders</p>
                    <div style={styles.menu}>
                        {sides.map((v) => (
                            <div style={styles.item}>
                                <div style={styles.details}>
                                    <p style={styles.title}>
                                        {v.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>




                    <p style={styles.categoryH}>Beverages</p>
                    <div style={styles.menu}>
                        {beverages.map((v) => (
                            <div style={styles.item}>
                                <div style={styles.details}>
                                    <p style={styles.title}>
                                        {v.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ThemeProvider >
        </>
    )
}

export default OrderMenu;