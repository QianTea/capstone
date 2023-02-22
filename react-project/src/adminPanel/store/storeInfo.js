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

const StoreInfo = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' ,
        '& .MuiTextField-root': { m: 1, width: '55ch' },}}>
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
                        <Grid >
                            <h1>Store Info</h1>
                            <form name="addItem" >
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={4} lg={4}>
                                        <Item>
                                            <img src="../logo.png" alt="logo image" />
                                            <div>
                                                <input type="file" />
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={8}>
                                        <Item>
                                            <div>
                                                <TextField
                                                    id="storeName"
                                                    label="storeName"
                                                    variant="filled"
                                                    defaultValue="Riverside Fish Hut"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    id="storeDescription"
                                                    label="Description"
                                                    multiline
                                                    rows={5}
                                                    variant="filled"
                                                    fullWidth
                                                    defaultValue="Founded in 2012, Riverside Fish Hut is known for 
                                                    revolutionizing the way people eat and enjoy food.
                                                    Serving classic fish and chips in a cozy riverside setting, 
                                                    with a patio during the summer! Follow us on Facebook!"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    id="phone"
                                                    label="Phone"
                                                    variant="filled"
                                                    size="small"

                                                    defaultValue="(519) 653-0788"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    id="orderLink"
                                                    label="Online Order Link"
                                                    variant="filled"
                                                    size="small"
                                                    multiline
                                                    fullWidth
                                                    defaultValue="https://www.skipthedishes.com/riverside-fish-hut"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    id="address"
                                                    label="Address"
                                                    variant="filled"
                                                    multiline
                                                    fullWidth
                                                    defaultValue="Unit-B 157 King Street West,Cambridge, ON N3H 1B5,Canada"
                                                />
                                            </div>
                                            <div>Business Hours:
                                                <TextField
                                                    id="businessHour"
                                                    label="Business Hours"
                                                    variant="filled"
                                                    size="small"
                                                    defaultValue="Monday closed"
                                                />
                                            </div>
                                            <p></p>
                                            <Button
                                                variant="contained"
                                                startIcon={<SendIcon />}
                                                color="success">
                                                Submit
                                            </Button>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default StoreInfo;

