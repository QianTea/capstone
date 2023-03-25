import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
// API
import axios from 'axios';
// mui
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

// styles
const mdTheme = createTheme();
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
    // img: '../logo.png',
    // name: 'Riverside Fish Hut',
    // introduction: 'Founded in 2012, Riverside Fish Hut is known for revolutionizing the way people eat and enjoy food. Serving classic fish and chips in a cozy riverside setting, with a patio during the summer! Follow us on Facebook!',
    // phone: '(519) 653-0788',
    // onlineLink: 'https://riversidefishhutmenu.ca/',
    // address: {
    //     Street: 'Unit-B 157 King Street West',
    //     City: 'Cambridge', Province: 'ON',
    //     PostalCode: 'N3H 1B5', Country: 'Canada',
    // },
    // businessHour: {
    //     monTime: 'Closed',
    //     tueTime: '11:30 - 19:00',
    //     wedTime: '11:30 - 19:00',
    //     thuTime: '11:30 - 19:00',
    //     friTime: '11:30 - 19:00',
    //     satTime: '11:30 - 19:30 (may change in holiday)',
    //     sunTime: 'Closed',
    // },

};

const BusinessHour = (props) => {
    // API - get store info
    const [businessHour, setBusinessHour] = useState(null
    );

    const handleChange = (event, index) => {
        const newValue = event.target.value;
        const newTime = [...businessHour];
        newTime[index].businessTime = event.target.value;
        newTime[index].isChange = true;
        setBusinessHour(newTime);
        props.getTime(businessHour);

    }


    useEffect(() => {


        const fetchData = async () => {
            const result = await axios.get('http://localhost:5500/website/business-hours');
            console.log(result.data.data);
            setBusinessHour(result.data.data);
            console.log(businessHour);
            props.getTime(result.data.data);
        };
        fetchData();
    }, []);

    return (
        <div >
            <h3>Business Hours</h3>
            <div>
                {businessHour && businessHour.map((item, index) => (
                    <TableRow key={item.dayOfWeek}>
                        <TableCell style={styles.TableCellRight} align="left" size="small" padding="none">
                            <TextField
                                style={styles.TableCell}
                                id={`${item.dayOfWeek}Time`}
                                label={`${item.dayOfWeek} Time`}
                                variant="filled"
                                defaultValue={item.businessTime}
                                onChange={event => handleChange(event, index)}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </div>
        </div>
    );
};

const StoreInfo = () => {
    // upload log img
    const [selectedFile, setSelectedFile] = useState(null);
    let businessTime;
    const navigate = useNavigate();
    const getBusinessTime = (data) => {
        businessTime = data;
    }

    const handleFileChange = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            const base64data = reader.result;
            setSelectedFile(base64data);
            console.log(base64data); // the Base64 string representation of the blob
        };

    };
    // API - get store info
    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        //update for business hour
        if (businessTime && businessTime.length > 0) {
            businessTime.map(v => {
                if (v.isChange) {
                    axios.request({
                        method: 'put',
                        maxBodyLength: Infinity,
                        url: 'http://localhost:5500/website-update/business-hours/'+v._id,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({businessTime: v.businessTime})
                        })
                        .then((response) => {
                            console.log(JSON.stringify(response.data));
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
        }





        let data = JSON.stringify({
            "storeName": document.querySelector('#storeName').value,
            "logoImage": document.querySelector('#storeLogo').src,
            "description": document.querySelector('#storeIntroduction').value,
            "address": document.querySelector('#address').value,
            "phoneNumber": document.querySelector('#phone').value,
            "onlineOrderLinks": [
            ]

        });


        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5500/website-update',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: data
        };



        axios.request(config)
            .then((response) => {
                let result = response.data;
                if (result.status == 401) {
                    alert('token error');
                    navigate('/admin/login');
                } else if (result.status == 200 && result.data) {
                    alert(result.message);
                    setStoreInfo(response.data.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const [storeInfo, setStoreInfo] = useState({
        _id: '',
        storeName: '',
        logoImage: '',
        description: '',
        address: '',
        phoneNumber: '',
        onlineOrderLinks: []
    });

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('http://localhost:5500/website');
            setStoreInfo(result.data.data);
        };
        fetchData();
    }, []);
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
                            <form name="addItem">
                                <Grid container spacing={1}>
                                    {/* Left - logo & business hours*/}
                                    <Grid item xs={12} md={4} lg={4}>
                                        {/* upload logo img */}
                                        <Item >
                                            <img style={styles.img}
                                                id="storeLogo"
                                                src={selectedFile || storeInfo.logoImage}
                                                alt={storeInfo.name} />
                                        </Item>
                                        <Item >
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
                                        <Item><BusinessHour getTime={getBusinessTime} /></Item>
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
                                                    multiline
                                                    defaultValue={storeInfo.storeName}
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
                                                    defaultValue={storeInfo.description}
                                                />
                                            </div>
                                            {/* phone number */}
                                            <div>
                                                <TextField
                                                    id="phone"
                                                    label="Phone"
                                                    variant="filled"
                                                    size="small"
                                                    multiline
                                                    defaultValue={storeInfo.phoneNumber}
                                                />
                                            </div>
                                            {/* Address */}
                                            <div>
                                                <h3>Address</h3>
                                                <Grid item xs={12} >
                                                    <TextField id="address" label="Address"
                                                        variant="filled"
                                                        multiline
                                                        fullWidth
                                                        defaultValue={storeInfo.address}
                                                    />
                                                </Grid>

                                                {/* <Grid container spacing={1}>
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
                                                /> */}


                                            </div>
                                            <p></p>
                                            <Button
                                                variant="contained"
                                                startIcon={<SendIcon />}
                                                color="success"
                                                onClick={handleSubmit}>
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

