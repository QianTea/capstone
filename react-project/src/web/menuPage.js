import React from "react";
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
        paddingTop: '100px',
    },
    heading: {
        fontSize: '3rem',
        margin: '30px 0',
    },
    categoryH: {
        color: '#FFD700',
        fontSize: '25px',
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
    image: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '5px',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '6px',
        position: 'relative',
        padding: '0 20px',
    },
    price: {
        fontSize: '1.2rem',
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
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.details}>

                <p style={styles.title}>
                    {title}
                    <span style={styles.priceStrike}></span>
                </p>
                <p style={styles.price}>{price}</p>
            </div>
        </div>
    );
};

const WebMenu = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                <h1 style={styles.heading}>Take Out Menu</h1>
                <p>All Fries are Hand Cut Fresh Fires</p>
                <p style={styles.categoryH}>Lunch Special</p>
                <div style={styles.menu}>
                    <MenuItem title="2pc Wihtefish & Chips" price="$7.99" image="../homeTreat.png" />
                </div>
                <p style={styles.categoryH}>2pc Fish and Chip Dinners</p>
                <div style={styles.menu}>
                    <MenuItem title="2pc Wihtefish & chips" price="$10.19" image="../homeTreat.png" />
                    <MenuItem title="2pc Cod & chips" price="$11.99" image="../homeTreat.png" />
                    <MenuItem title="2pc haddock & chips" price="$11.99" image="../homeTreat.png" />
                    <MenuItem title="2pc Halibut & chips" price="$18" image="../homeTreat.png" />
                </div>
                <p style={styles.categoryH}>Family Packs</p>
                <p>10pc of FIsh & a 4-pack of Chips</p>
                <div style={styles.menu}>
                    <MenuItem title="Wihtefish Family" price="$43.19" image="../homeTreat.png" />
                    <MenuItem title="Cod Family" price="$53.99" image="../homeTreat.png" />
                    <MenuItem title="haddock Family" price="$63.99" image="../homeTreat.png" />
                    <MenuItem title="Halibut Family" price="$70" image="../homeTreat.png" />
                </div>
                <p style={styles.categoryH}>Sea Food Platter</p>
                <p>All Day Special</p>
                <div style={styles.menu}>
                    <MenuItem title="Wihtefish Family" price="$43.19" image="../homeTreat.png" />
                </div>
                <p style={styles.categoryH}>Shrimp Special</p>
                <p>All Day Special</p>
                <div style={styles.menu}>
                    <MenuItem title="8pc Shrimp & Chips" price="$11.49" image="../homeTreat.png" />
                </div>
                <p style={styles.categoryH}>Homemade Fries</p>
                <div style={styles.menu}>
                    <MenuItem title="Single" price="$3.39" image="../homeTreat.png" />
                    <MenuItem title="2-pack" price="$3.39" image="../homeTreat.png" />
                    <MenuItem title="3-pack" price="$3.39" image="../homeTreat.png" />
                    <MenuItem title="4-pack" price="$3.39" image="../homeTreat.png" />
                </div>
            </div>
            <p style={styles.categoryH}>Side Orders</p>
                <div style={styles.menu}>
                    <MenuItem title="Wihtefish Family" price="$43.19" image="../homeTreat.png" />
                    <MenuItem title="Cod Family" price="$53.99" image="../homeTreat.png" />
                    <MenuItem title="haddock Family" price="$63.99" image="../homeTreat.png" />
                    <MenuItem title="Halibut Family" price="$70" image="../homeTreat.png" />
                    <MenuItem title="Wihtefish Family" price="$43.19" image="../homeTreat.png" />
                    <MenuItem title="Cod Family" price="$53.99" image="../homeTreat.png" />
                    <MenuItem title="haddock Family" price="$63.99" image="../homeTreat.png" />
                    <MenuItem title="Halibut Family" price="$70" image="../homeTreat.png" />
                    <MenuItem title="Wihtefish Family" price="$43.19" image="../homeTreat.png" />
                    <MenuItem title="Cod Family" price="$53.99" image="../homeTreat.png" />
                </div>
        </ThemeProvider >
    )
}
export default WebMenu;

