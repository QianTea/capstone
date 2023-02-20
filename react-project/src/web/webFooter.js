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
    //footer
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#1B1B22',
        color: '#fff',
        padding: '20px ',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerLinks: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 ',
    },
    footerLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
        marginLeft: '10px',
    },
};


const WebFooter = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            {/* footer */}
            <div style={styles.footer}>
                <div style={styles.footerLinks}>
                    <p>Riverside Fish Hut</p>
                    <p>Tel: (519) 653-0788</p>
                    <p>Unit-B 157 King Street West,Cambridge, ON N3H 1B5,Canada</p>
                    <span>&copy; 2023 Riverside Fish Hut</span>
                    <a href="#" style={styles.footerLink}>Privacy Policy</a>
                    <a href="#" style={styles.footerLink}>Terms of Use</a>
                </div>
            </div>
        </ThemeProvider >
    )
}
export default WebFooter;

