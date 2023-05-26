import React, { useState, useEffect } from "react";
// API
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme, useMediaQuery } from "@mui/material";

import Grid from "@mui/material";
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
    nameContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: '0.5rem',
        height: '4rem',
    },
    name: {
        color: '#FFD700',
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '3rem',
        paddingLeft: '1rem',
    },
}

function LinkTab(props) {
    return (
        <Tab
            component={NavLink}
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
    // small screen style
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const nameFontSize = isSmallScreen ? '2rem' : '3rem';
    const tabSpacing = isSmallScreen ? '1rem' : '3rem'; // 在小屏幕和大屏幕上定义不同的间距
    const tabFontSize = isSmallScreen ? '0.8rem' : '1.3rem'; // 在小屏幕和大屏幕上定义不同的字号大小
    const iconFontSize = isSmallScreen ? '2rem' : '3rem';
    return (
        <ThemeProvider theme={mdTheme}>
            <div style={{ width: '100%' }}>

                {/* logo image - link to home page*/}
                <Link to="/home" style={{ textDecoration: 'none', }}>
                    <div style={styles.nameContainer}>
                        <img style={styles.logo}
                            alt={storeInfo.storeName}
                            src={storeInfo.logoImage} />
                        <span style={{ ...styles.name, fontSize: nameFontSize }}>
                            {storeInfo.storeName}
                        </span>

                    </div>
                </Link>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    centered
                    sx={{
                        '& .MuiTab-root': {
                            marginLeft: tabSpacing,
                            marginRight: tabSpacing,
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: tabFontSize,
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: iconFontSize, // 设置图标的大小
                        },
                    }}
                >
                    <LinkTab
                        icon={<StorefrontTwoToneIcon />}
                        label="Home"
                        to="/home"
                    />
                    <LinkTab
                        icon={<SetMealTwoToneIcon />}
                        label="Menu"
                        to="/menu"
                    />
                    <LinkTab
                        icon={<InfoTwoToneIcon />}
                        label="Contact"
                        to="/contact"
                    />
                </Tabs>
            </div>

        </ThemeProvider >
    )
}
export default WebNav;

