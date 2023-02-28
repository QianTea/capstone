import React, { useState } from "react";

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
import { Table, TableRow, TableCell } from '@mui/material';


const mdTheme = createTheme();
// styles
const styles = {
    img: {
        width: '200px',
        height: '100%',
    },
    TableCellLeft: {
        padding: '0px',
        width: '100px',
        border: 'none',
    },
    TableCellRight: {
        padding: '0px',
        width: '100px',
        border: 'none',
    },
    TableCell: {
        padding: '0px',
        width: '200px',
    },
};
//data
const storeInfo = {
    img: '../logo.png',
    name: 'Riverside Fish Hut',
    phone: ' (519) 653-0788',
    address: 'Unit-B 157 King Street West,Cambridge, ON N3H 1B5,Canada',
    description: 'Founded in 2012, Riverside Fish Hut is known for revolutionizing the way people eat and enjoy food. Serving classic fish and chips in a cozy riverside setting, with a patio during the summer! Follow us on Facebook!',
    phone: '(519) 653-0788',
    onlineLink: 'https://riversidefishhutmenu.ca/',
    address: {
        Street: 'Unit-B 157 King Street West',
        City: 'Cambridge', Province: 'ON',
        PostalCode: 'N3H 1B5', Country: 'Canada',
    }
};

const BusinessHour = () => {

    return (
        <div >
            <h2>Business Hours</h2>
            {/* Monday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row" >
                    Monday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="monTime"
                        label="Monday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Tuesday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Tuesday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="tueTime"
                        label="Tuesday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Wednesday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Wednesday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="wedTime"
                        label="Wednesday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Thursday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Thursday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="thuTime"
                        label="Thursday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Friday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Friday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="friTime"
                        label="Friday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Saturday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Saturday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="satTime"
                        label="Saturday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
            {/* Sunday */}
            <TableRow  >
                <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Sunday
                </TableCell>
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="sunTime"
                        label="Sunday Time"
                        variant="filled"
                        defaultValue="Closed"
                    />
                </TableCell>
            </TableRow>
        </div>
    );
};


const StoreInfo = () => {
    // upload log img
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };
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
                            <form name="addItem" >
                                <Grid container spacing={1}>
                                    {/* Left - logo & business hours*/}
                                    <Grid item xs={12} md={4} lg={4}>
                                        {/* upload logo img */}
                                        <Item >
                                            <img style={styles.img}
                                                src={selectedFile || storeInfo.img}
                                                alt={storeInfo.name} />

                                            <Button variant="contained" component="label">
                                                Upload Logo
                                                <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
                                            </Button>
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <PhotoCamera />
                                                <input hidden accept="image/*" type="file" onChange={handleFileChange} />
                                            </IconButton>
                                        </Item>
                                        {/* Business Hours */}
                                        <Item><BusinessHour /></Item>
                                    </Grid>
                                    {/* Right - input store info */}
                                    <Grid item xs={12} md={8} lg={8}>
                                        <h1>Store Info</h1>
                                        <Item>
                                            {/* store name */}
                                            <div>
                                                <TextField
                                                    id="storeName"
                                                    label="storeName"
                                                    variant="filled"
                                                    defaultValue="Riverside Fish Hut"
                                                />
                                            </div>
                                            {/* store description */}
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
                                            {/* phone number */}
                                            <div>
                                                <TextField
                                                    id="phone"
                                                    label="Phone"
                                                    variant="filled"
                                                    size="small"

                                                    defaultValue="(519) 653-0788"
                                                />
                                            </div>
                                            {/* link of online order */}
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
                                            {/* Address */}
                                            <div>
                                                <h3>Address</h3>
                                                <TextField id="street" label="Street"
                                                    variant="filled"
                                                    multiline
                                                    fullWidth
                                                    defaultValue={storeInfo.address.Street}
                                                />
                                                <TextField id="city" label="City"
                                                    variant="filled"
                                                    multiline
                                                    fullWidth
                                                    defaultValue={storeInfo.address.City}
                                                />
                                                <TextField id="province" label="Province"
                                                    variant="filled"
                                                    defaultValue={storeInfo.address.Province}
                                                />
                                                <TextField id="postalCode" label="PostalCode"
                                                    variant="filled"
                                                    defaultValue={storeInfo.address.PostalCode}
                                                />
                                                <TextField id="country" label="Country"
                                                    variant="filled"
                                                    defaultValue={storeInfo.address.Country}
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

