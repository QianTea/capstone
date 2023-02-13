import React from "react";

import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Website = () => {
    return (
        <>
            <h1>Here is the Website management page</h1>

            <h2>Modify Store Info</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 , width: '40ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <form name="addItem" >
                    <div>Store Name:
                        <TextField
                            id="storeName"
                            label="storeName"
                            variant="filled"
                            size="small"
                            defaultValue="Riverside Fish Hut"
                        />
                    </div>

                    <div>Logo:
                        <TextField
                            id="logo"
                            label="logo"
                            variant="filled"
                            size="small"
                            defaultValue="Logo Pic Upload here"
                        />
                    </div>

                    <div>About:
                        <TextField
                            id="storeDescription"
                            label="Description"
                            multiline
                            rows={4}
                            variant="filled"
                            size="small"
                            defaultValue="Founded in 2012, Riverside Fish Hut is known for revolutionizing the way people eat and enjoy food.
                            Serving classic fish and chips in a cozy riverside setting, 
                            with a patio during the summer!                    
                            Follow us on Facebook!"
                        />

                    </div>

                    <div>Address:
                        <TextField
                            id="address"
                            label="Address"
                            multiline
                            rows={4}
                            variant="filled"
                            size="small"
                            defaultValue="Unit-B 157 King Street West,Cambridge, ON N3H 1B5,Canada"
                        />
                    </div>

                    <div>Phone Number:
                        <TextField
                            id="phone"
                            label="Phone"
                            variant="filled"
                            size="small"
                            fullWidth 
                            defaultValue="(519) 653-0788"
                        />
                    </div>

                    <div>Online Order Link:
                        <TextField
                            id="orderLink"
                            label="Link"
                            variant="filled"
                            size="small"
                            fullWidth 
                            defaultValue="https://www.skipthedishes.com/riverside-fish-hut"
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

                    <Button variant="contained" startIcon={<SendIcon />} color="success">
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    )
}
export default Website;

