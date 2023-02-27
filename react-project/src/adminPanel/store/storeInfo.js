import React from "react";

import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// business time
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Table, TableRow, TableCell } from '@mui/material';


const mdTheme = createTheme();
//data
const WeekDayTimePicker = () => {
    const [value, setValue] = React.useState(new Date());

    const handleTimeChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                Monday
            </TableCell>
            <TableCell align="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        ampm={false}
                        value={value}
                        onChange={handleTimeChange}
                        renderInput={(params) => <input {...params} style={{ width: '80px' }} />}
                    />
                </LocalizationProvider>
            </TableCell>
        </TableRow>
    );
};


const StoreInfo = () => {
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
                        <Grid >
                            <h1>Store Info</h1>
                            <form name="addItem" >
                                <Grid container spacing={1}>
                                    {/* upload logo img */}
                                    <Grid item xs={12} md={4} lg={4}>
                                        <Item>
                                            <img src="../logo.png" alt="logo image" />
                                            <div>
                                                <Button variant="contained" component="label">
                                                    Upload
                                                    <input hidden accept="image/*" multiple type="file" />
                                                </Button>
                                                <IconButton color="primary" aria-label="upload picture" component="label">
                                                    <PhotoCamera />
                                                    <input hidden accept="image/*" type="file" />
                                                </IconButton>
                                            </div>
                                        </Item>
                                    </Grid>
                                    {/* input store info */}
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
                                                <table>
                                                    <tbody>
                                                        <WeekDayTimePicker />
                                                        {/* Add additional weekday time pickers as necessary */}
                                                    </tbody>
                                                </table>
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

