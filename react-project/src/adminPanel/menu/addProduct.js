import { Link, useParams } from 'react-router-dom'
import Product from './menu';
import React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const categories = [
    { value: 'Uncategorized', label: 'Uncategorized', },
    { value: '2pcDinner', label: '2pc Fish and Chip Dinners', },
    { value: '2pcOnly', label: '2pc Fish Only', },
    { value: 'family', label: 'Family Packs', },
    { value: 'sfp', label: 'Sea Food Platter', },
    { value: 'fries', label: 'Homemade Fries', },
    { value: 'lunch', label: 'Homemade Fries', },
    { value: 'shrimpSpecial', label: 'Shrimp Special', },
    { value: 'kid', label: 'Kid\'s Combo', },
    { value: 'side', label: 'Side Orders', },
    { value: 'beverage', label: 'Beverages', }
];


const AddProduct = () => {

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}>
            <h1>Add Product</h1>
            <Box component="form"
                sx={{ mt: 2, mb: 3 }}
                noValidate
                autoComplete="off" >
                <form name="addItem">
                    <div>
                        name:
                        <TextField
                            id="newName"
                            label="name"
                            variant="outlined"
                        />
                    </div>
                    {/* use alter name in order system */}
                    <div>
                        alter name:
                        <TextField
                            id="newAltName"
                            label="alter name"
                            variant="outlined"
                        />
                    </div>
                    <div>
                         dine-in price:
                        <TextField
                            id="newDineInPrice"
                            label="dine in price"
                            variant="outlined"
                            InputProps={{
                                startAdornment:
                                    <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </div>
                    <div>
                         take out price:
                        <TextField
                            id="newTakeOutPrice"
                            label="take out price"
                            variant="outlined"
                            InputProps={{
                                startAdornment:
                                    <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </div>
                    <div>
                        category:
                        <TextField
                            id="outlined-select-category"
                            select
                            label="Select"
                            defaultValue="uncategorized"
                            helperText="Please select your category"
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                    {/* <button type="submit">submit</button> */}
                    <Button fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<SendIcon />}
                        color="success">
                        Submit
                    </Button>
                </form>

                <Link
                    variant="body2"
                    to="/admin/menu">
                    Go back to Menu
                </Link>
            </Box>
        </Box>
    )
}
export default AddProduct;