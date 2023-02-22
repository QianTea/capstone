import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import AddStaff from "./addStaff";

const mdTheme = createTheme();

const Staff = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{
                display: 'flex',
                '& .MuiTextField-root': { m: 1, width: '55ch' },
            }}>
                <Box
                    component="form"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <h1>Staff Management</h1>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4} lg={4}>
                                <Item>
                                    <Link to="/admin/staff/addRole">
                                        <Button variant="contained" startIcon={<SendIcon />} color="success">
                                            Add Role
                                        </Button>
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                            <Item>
                                    <Link to="/admin/staff/addStaff">
                                        <Button variant="contained" startIcon={<SendIcon />} color="success">
                                            Add Staff
                                        </Button>
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Item>
                                    <div>
                                        <h2>Current Staff</h2>

                                        <p>Ivy Lin - Waiter
                                            <IconButton aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </p>
                                        <p>Taiyang Song - Waiter
                                            <IconButton aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </p>
                                        <p>Aidan Lowe - Kitchen
                                            <IconButton aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </p>
                                    </div>
                                </Item>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default Staff;