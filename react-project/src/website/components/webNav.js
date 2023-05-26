import React, { useState, useEffect } from "react";
// API
import axios from 'axios';
import { Link } from 'react-router-dom';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

// style
const mdTheme = createTheme();
const styles = {
    // header: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     backgroundColor: '#1B1B22',
    //     padding: '1rem 2rem',
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     zIndex: 999,
    //     textAlign: 'left',
    // },
    logo: {
        flex: 1,
        height: '5rem',
    },
    name: {
        color: '#FFD700',
        textDecoration: 'none',
        textAlign: 'left',
        fontSize: '2rem',
        paddingLeft: '1rem',
        paddingBottom: '1rem',
    },
    li: {
        display: 'flex',
        // flex: 1,
        // justifyContent: 'flex-end',
        // display: 'inline-block',
        // marginRight: '5rem',
    },
    a: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5 rem',
    },
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}
// top navigation bar of store website
const WebNav = () => {
    // get store info
    const [storeInfo, setStoreInfo] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const resultInfo = await axios.get('http://localhost:5500/website');
            setStoreInfo(resultInfo.data.data);
        };
        fetchData();
    }, [setStoreInfo]);
    // tab things
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <div>
                <nav style={styles.header}>

                    {/* logo image - link to home page*/}
                    <Link to="/home">
                        <img style={styles.logo}
                            alt={storeInfo.storeName}
                            src={storeInfo.logoImage} />
                        <span style={styles.name}>
                            {storeInfo.storeName}
                        </span>
                    </Link>

                    <ul >
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
                    <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="nav tabs example"
                centered
            >
                <LinkTab
                    icon={<StorefrontTwoToneIcon />}
                    label="Page Home"
                    href="/drafts"
                />
                <LinkTab
                    icon={<SetMealTwoToneIcon />}
                    label="Page Menu"
                    href="/trash"
                />
                <LinkTab
                    icon={<InfoTwoToneIcon />}
                    label="Page Contact"
                    href="/spam"
                />
            </Tabs>
        </Box>
                </nav>
            </div>
        </ThemeProvider >
    )
}
export default WebNav;

