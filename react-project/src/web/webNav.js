import React from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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
    //nav
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1B1B22',
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        textAlign: 'left',
    },
    logo: {
        flex: 1,
        height: '60px',
    },

    li: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        display: 'inline-block',
        marginRight: '200px',
    },
    a: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '24px',
        // fontWeight: 'bold',
    },
}

const WebNav = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            {/* nav */}
            <div>
                <nav style={styles.header}>
                    <div style={styles.logo}>
                        <Link to="/home">
                            <img src="logo.png" alt="Logo" style={styles.logo} />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li style={styles.li}><Link to="/home" style={styles.a}>Home</Link></li>
                        <li style={styles.li}><Link to="/menu" style={styles.a}>Menu</Link></li>
                        <li style={styles.li}><Link to="/contact" style={styles.a}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </ThemeProvider >
    )
}
export default WebNav;

