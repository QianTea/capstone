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
        // backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '100px',
        position: 'relative',
    },
    background: {
        backgroundImage: 'url(../contactBG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        fontSize: '70px',
        textTransform: 'uppercase',
        paddingTop: '10px',
        lineHeight: '0.5',
        paddingBottom:'10px',
        paddingLeft:'35%',
    },
    txt:{
        backgroundColor:'#24242D',
        width:'450px',
        lineHeight:'100px',
  
    },
};
// special dishes
const special = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: '#313849',
    },
    itemTxt: {
        width: '50%',
        paddingTop: '70px',
        backgroundColor: '#313849',
    },
    itemMap: {
        width: '50%',
    },
    itemBH: {
        width: '50%',
        paddingTop: '40px',
    },
    space: { margin: '50px', },
};
//business hour
const table = {
    table: {
        margin: "0 auto",
    },
}
const WebContact = () => {

    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                <div style={styles.background}>
                    <div style={styles.title}>
                        <p style={styles.txt}>
                            Contact Us
                        </p>
                    </div>
                </div>

                {/* map & business hour*/}
                <div style={special.container}>
                    {/* Address */}
                    <div style={special.itemBH}>
                        <h2>Address</h2>
                        <p>Unit-B 157 King Street West,</p>
                        <p>Cambridge,</p>
                        <p>ON N3H 1B5,Canada</p>
                        <p>{'\u00A0'}</p>
                        <p>{'\u00A0'}</p>
                    </div>
                    {/* Contact */}
                    <div style={special.itemBH}>
                        <h2>Phone</h2>
                        <p>(519) 653-0788</p>
                    </div>

                    {/* business hour */}
                    <div style={special.itemBH}>
                        <h2>Find Us</h2>
                        <table style={table.table}>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>11:30am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>11:30am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>11:30am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>11:30am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>11:30am - 7:30pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* map */}
                    <div style={special.itemMap}>
                        <img src="../map.png" alt="Image 2" style={special.image} />
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}
export default WebContact;

