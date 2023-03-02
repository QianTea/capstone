import React from "react";
import { Link } from 'react-router-dom';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';

// style
const mdTheme = createTheme();
const styles = {
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
        height: '50px',
    },
    name: {
        color: '#FFD700',
        textDecoration: 'none',
        textAlign: 'left',
        fontSize: '30px',
        paddingLeft: '10px',
        paddingBottom: '50px',
        
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
    },
}
//data-give me link for the img, not base64
const storeInfo = {
    name: 'Riverside Fish Hut',
    logo: ' logo.png',
};

// top navigation bar of store website
const WebNav = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <div>
                <nav style={styles.header}>
                    {/* logo image - link to home page*/}
                    <span style={styles.logo}>
                        <Link to="/home">
                            <img style={styles.logo}
                                alt={storeInfo.name}
                                src={storeInfo.logo} />
                        </Link>
                        <Link to="/home" style={styles.name}>
                            {storeInfo.name}
                        </Link>
                    </span>


                    <ul className="nav-links">

                        {/* link to home page */}
                        <li style={styles.li}>
                            <Link to="/home" style={styles.a}>
                                Home
                            </Link>
                        </li>
                        {/* link to menu page */}
                        <li style={styles.li}>
                            <Link to="/menu" style={styles.a}>
                                Menu
                            </Link>
                        </li>
                        {/* link to contact page */}
                        <li style={styles.li}>
                            <Link to="/contact" style={styles.a}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </ThemeProvider >
    )
}
export default WebNav;

