import  React, { useState, useEffect } from 'react';
// API
import axios from 'axios';
import { Link } from 'react-router-dom';
//mui
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

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

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
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
    );
}