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
    },
};
const body = {
    container: {
        backgroundImage: 'url(../homeTreat.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        height: '650px',
        position: 'relative',
        textAlign: 'left',
    },
    title: {
        fontSize: '70px',
        textTransform: 'uppercase',
        paddingTop: '90px',
        paddingLeft: '40px',
        lineHeight: '0.5', // 设置较小的行间距
    },
    subtitle: {
        fontSize: '20px',
        letterSpacing: '1px',
        paddingLeft: '40px',
        lineHeight: '0.5', // 设置较小的行间距
    },
    overlay: {
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 50%, transparent 50%)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};
const about = {
    title: {
        fontSize: '50px',
        textTransform: 'uppercase',
        lineHeight: '0.8',
    },
    description: {
        fontSize: '30px',
        lineHeight: '1',
    },
};
// gallery (react-slider)
const gallery = {
    gallery: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    galleryItem: {
        padding: '20px',
    },
    galleryImage: {
        maxWidth: '100%',
        height: 'auto',
    },
};
const galleryItems = [
    {
        id: 1,
        imageSrc: '../takeoutMenu1.png',
        caption: 'Gallery item 1',
    },
    {
        id: 2,
        imageSrc: '../takeoutMenu1.png',
        caption: 'Gallery item 2',
    },
    {
        id: 3,
        imageSrc: '../homeTreat.png',
        caption: 'Gallery item 3',
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',

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

const WebHome = () => {

    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                {/* body-treat */}
                <div style={body.container}>
                    <div style={body.overlay}>
                        <div style={body.title}>
                            <p>EAT. </p>
                            <p>DRINK.</p>
                            <p>RELAX.</p> </div>
                        <p style={body.subtitle}>Treat Yourself</p>
                    </div>
                </div>
                {/* body-about */}
                <div >
                    <p style={about.title}>About</p>
                    <div >
                        <p style={about.description}>
                            Founded in 2012, Riverside Fish Hut is known for revolutionizing the way people eat and enjoy food.
                        </p>
                        <p style={about.description}>
                            Serving classic fish and chips in a cozy riverside setting, with a patio during the summer!
                        </p>
                        <p style={about.description}>Follow us on Facebook!</p>
                    </div>
                </div>
                {/* body-gallery - not done*/}
                <div>
                    {/* <div style={gallery.gallery}>
                        <Slider {...sliderSettings}>
                            {galleryItems.map(item => (
                                <div key={item.id} style={gallery.galleryItem}>
                                    <img src={item.imageSrc} alt={item.caption} style={gallery.galleryImage} />
                                </div>
                            ))}
                        </Slider>
                    </div> */}
                </div>
                {/* special dishes */}
                <div>
                    <p style={about.title}> OUR FOOD </p>
                    <p >Savor The Flavor</p>
                    <div style={special.container}>
                        <div style={special.item}>
                            <img src="..\homeTreat.png" alt="Image 1" style={special.image} />
                        </div>
                        <div style={special.itemTxt}>
                            <div style={special.title}>Lunch Special</div>
                            <div style={special.description}>
                                <p>The Valued Choice.</p>
                                <p>Avaliable before 3 pm.</p>
                                <p>Lunch Special (2 pcs): Two pieces of whitefish and chips.</p>
                                <p>$10.39</p>
                            </div>
                        </div>

                        <div style={special.itemTxt}>
                            <div style={special.title}>Shrimp Special</div>
                            <div style={special.description}>
                                <p>Served All Day</p>
                                <p>Shrimp Special</p>
                                <p>Eight pieces of shrimp and chips.</p>
                                <p>$14.89</p>
                            </div>

                        </div>
                        <div style={special.item}>
                            <img src="../homeTreat.png" alt="Image 2" style={special.image} />
                        </div>
                    </div>
                </div>
                {/* map & business hour*/}
                <div style={special.container}>
                    <div style={special.itemMap}>
                        <img src="../map.png" alt="Image 2" style={special.image} />
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
                </div>
                {/* footer */}
            </div>
        </ThemeProvider >
    )
}
export default WebHome;

