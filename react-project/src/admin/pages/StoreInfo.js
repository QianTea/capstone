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
        // width: '100%',
        height: '200px',
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
        width: '300px',
    },
};
//data
const storeInfo = {
    img: '../logo.png',
    name: 'Riverside Fish Hut',
    introduction: 'Founded in 2012, Riverside Fish Hut is known for revolutionizing the way people eat and enjoy food. Serving classic fish and chips in a cozy riverside setting, with a patio during the summer! Follow us on Facebook!',
    phone: '(519) 653-0788',
    email: 'riverside@gmail.com',
    onlineLink: 'https://riversidefishhutmenu.ca/',
    address: {
        Street: 'Unit-B 157 King Street West',
        City: 'Cambridge', Province: 'ON',
        PostalCode: 'N3H 1B5', Country: 'Canada',
    },
    businessHour: {
        monTime: 'Closed',
        tueTime: '11:30 - 19:00',
        wedTime: '11:30 - 19:00',
        thuTime: '11:30 - 19:00',
        friTime: '11:30 - 19:00',
        satTime: '11:30 - 19:30 (may change in holiday)',
        sunTime: 'Closed',
    },

};

const BusinessHour = () => {
    return (
        <div >
            <h3>Business Hours</h3>
            {/* Monday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row" >
                    Monday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="monTime"
                        label="Monday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.monTime}
                    />
                </TableCell>
            </TableRow>
            {/* Tuesday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Tuesday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="tueTime"
                        label="Tuesday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.tueTime}

                    />
                </TableCell>
            </TableRow>
            {/* Wednesday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Wednesday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="wedTime"
                        label="Wednesday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.wedTime}

                    />
                </TableCell>
            </TableRow>
            {/* Thursday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Thursday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="thuTime"
                        label="Thursday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.thuTime}

                    />
                </TableCell>
            </TableRow>
            {/* Friday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Friday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="friTime"
                        label="Friday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.friTime}

                    />
                </TableCell>
            </TableRow>
            {/* Saturday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Saturday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="satTime"
                        label="Saturday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.satTime}
                    />
                </TableCell>
            </TableRow>
            {/* Sunday */}
            <TableRow  >
                {/* <TableCell style={styles.TableCellLeft} component="th" scope="row">
                    Sunday
                </TableCell> */}
                <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                    <TextField
                        style={styles.TableCell}
                        id="sunTime"
                        label="Sunday Time"
                        variant="filled"
                        defaultValue={storeInfo.businessHour.sunTime}
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
                                        </Item><Item >
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
                                                    defaultValue={storeInfo.name}
                                                />
                                            </div>
                                            {/* store  introduction */}
                                            <div>
                                                <TextField
                                                    id="storeIntroduction"
                                                    label=" Introduction"
                                                    multiline
                                                    rows={5}
                                                    variant="filled"
                                                    fullWidth
                                                    defaultValue={storeInfo.introduction}
                                                />
                                            </div>
                                            {/* phone number */}
                                            <div>
                                                <TextField
                                                    id="phone"
                                                    label="Phone"
                                                    variant="filled"
                                                    size="small"

                                                    defaultValue={storeInfo.phone}
                                                />
                                            </div>
                                            {/* email address */}
                                            <div>
                                                <TextField
                                                    id="email"
                                                    label="email"
                                                    variant="filled"
                                                    size="small"

                                                    defaultValue={storeInfo.email}
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
                                                    defaultValue={storeInfo.onlineLink}
                                                />
                                            </div>
                                            {/* Address */}
                                            <div>
                                                <h3>Address</h3>
                                                <Grid item xs={12} >
                                                    <TextField id="street" label="Street"
                                                        variant="filled"
                                                        multiline
                                                        fullWidth
                                                        defaultValue={storeInfo.address.Street}
                                                    />
                                                </Grid>

                                                <Grid container spacing={1}>
                                                    <Grid item xs={3} >
                                                        <TextField id="city" label="City"
                                                            variant="filled"
                                                            style={{ width: "150px" }}
                                                            defaultValue={storeInfo.address.City}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <TextField id="province" label="Province"
                                                            variant="filled"
                                                            style={{ width: "100px" }}
                                                            defaultValue={storeInfo.address.Province}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} >
                                                        <TextField id="postalCode" label="PostalCode"
                                                            variant="filled"
                                                            style={{ width: "200px" }}
                                                            defaultValue={storeInfo.address.PostalCode}
                                                        />
                                                    </Grid>
                                                </Grid>



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

