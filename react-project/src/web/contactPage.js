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
        paddingTop:'100px',
    },
};
// special dishes
const special = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        width: '50%',
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
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
    },
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

                Contact Page
                {/* map & business hour*/}
                <div style={special.container}>

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

