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
    //nav
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#24242D',
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

    //footer
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#24242D',
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

const WebDemo = () => {

    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                {/* nav */}
                <div>
                    <nav style={styles.header}>
                        <div style={styles.logo}>
                            <a href="#">
                                <img src="logo.png" alt="Logo" style={styles.logo} />
                            </a>
                        </div>
                        <ul className="nav-links">
                            <li style={styles.li}><a href="#" style={styles.a}>Home</a></li>
                            <li style={styles.li}><a href="#" style={styles.a}>Menu</a></li>
                            <li style={styles.li}><a href="#" style={styles.a}>Contact</a></li>
                        </ul>
                    </nav>

                </div>
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

                <div>
                    <p style={about.title}> OUR FOOD </p>
                    <p >Savor The Flavor</p>
                    <h3>Lunch Special</h3>
                    <p>
                        The Valued Choice.
                        Avaliable before 3 pm.
                        Lunch Special (2 pcs): Two pieces of whitefish and chips.
                        $10.39
                    </p>
                    <h3>Shrimp Special</h3>
                    <p>
                        Served All Day
                        Shrimp Special
                        Eight pieces of shrimp and chips.
                        $14.89
                    </p>
                </div>
                <div>
                    <h2>Google Map API</h2>
                    <h2>Find Us</h2>
                    <p>
                        Monday                         Closed
                        Tuesday                   11:30am - 7:30pm
                        Wednesday                 11:30am - 7:30pm
                        Thursday                  11:30am - 7:30pm
                        Friday                    11:30am - 7:30pm
                        Saturday                  11:30am - 7:30pm
                        Sunday                         Closed
                    </p>
                </div>

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
            </div>

        </ThemeProvider >
    )
}
export default WebDemo;

