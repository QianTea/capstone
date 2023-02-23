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
        backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
    },
    categoryH: {
        color: '#FFD700',
        fontSize: '15px',
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
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px',
        width: '300px',
    },
    title: {
        fontSize: '1rem',
        marginBottom: '6px',
        position: 'relative',
        padding: '0 20px',
    },
    price: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    priceStrike: {
        position: 'absolute',
        bottom: -12,
        left: 0,
        right: 0,
        height: '1px',
        borderBottom: '1px solid #6C7A9D',
    },
};

const MenuItem = ({ title, price, image }) => {
    return (
        <div style={styles.item}>
            <div style={styles.details}>
                <p style={styles.title}>
                    {title}
                </p>
            </div>
        </div>
    );
};

const OrderMenu = () => {

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <div style={styles.page}>
                    <h1 style={styles.heading}>Take Out Menu</h1>
                    <p style={styles.categoryH}>Lunch Special</p>
                    <div style={styles.menu}>
                        <MenuItem title="2pc Wihtefish & Chips" />
                    </div>
                    <p style={styles.categoryH}>2pc Fish and Chip Dinners</p>
                    <div style={styles.menu}>
                        <MenuItem title="2pc Wihtefish & chips"  />
                        <MenuItem title="2pc Cod & chips"  />
                        <MenuItem title="2pc haddock & chips"  />
                        <MenuItem title="2pc Halibut & chips"  />
                    </div>
                    <p style={styles.categoryH}>Family Packs</p>
                    <p>10pc of FIsh & a 4-pack of Chips</p>
                    <div style={styles.menu}>
                        <MenuItem title="Wihtefish Family"/>
                        <MenuItem title="Cod Family"  />
                        <MenuItem title="haddock Family"  />
                        <MenuItem title="Halibut Family"  />
                    </div>
                    <p style={styles.categoryH}>Sea Food Platter</p>
                    <p>All Day Special</p>
                    <div style={styles.menu}>
                        <MenuItem title="Wihtefish Family"  />
                    </div>
                    <p style={styles.categoryH}>Shrimp Special</p>
                    <p>All Day Special</p>
                    <div style={styles.menu}>
                        <MenuItem title="8pc Shrimp & Chips" />
                    </div>
                    <p style={styles.categoryH}>Homemade Fries</p>
                    <div style={styles.menu}>
                        <MenuItem title="Single"  />
                        <MenuItem title="2-pack"  />
                        <MenuItem title="3-pack"  />
                        <MenuItem title="4-pack"  />
                    </div>
                </div>
                <p style={styles.categoryH}>Side Orders</p>
                <div style={styles.menu}>
                    <MenuItem title="Wihtefish Family" price="$43.19" />
                    <MenuItem title="Cod Family" price="$53.99" />
                    <MenuItem title="haddock Family" price="$63.99" />
                    <MenuItem title="Halibut Family" price="$70" />
                    <MenuItem title="Wihtefish Family" price="$43.19" />
                    <MenuItem title="Cod Family" price="$53.99" />
                    <MenuItem title="haddock Family" price="$63.99" />
                    <MenuItem title="Halibut Family" price="$70" />
                    <MenuItem title="Wihtefish Family" price="$43.19" />
                    <MenuItem title="Cod Family" price="$53.99" />
                </div>
            </ThemeProvider >
        </>
    )
}

export default OrderMenu;