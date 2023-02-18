import React from "react";

import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const mdTheme = createTheme();

const WebDemo = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            This is web site
        </ThemeProvider>
    )
}
export default WebDemo;

