import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
//api
import axios from 'axios';
//mui
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// alert
import { Alert, AlertTitle } from '@mui/material';

const AddProduct = () => {
    const token = localStorage.getItem('token');

    // API - get categories 
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/products-categories', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                console.log(result.data);
                setCategories(result.data.data.map((item) => ({
                    _id: item._id,
                    name: item.name,
                    description: item.description,
                })));
                console.log(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setCategories]);

    // API - get tags 
    const [tags, setTags] = useState([{}]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/product-foodtype', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                console.log(result.data);
                setTags(result.data.data);
                console.log(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setTags]);
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    // add product
    const [name, setName] = useState('');
    const [altName, setAltName] = useState('');
    const [dineInPrice, setDineInPrice] = useState('');
    const [takeOutPrice, setTakeOutPrice] = useState('');
    const [category, setCategory] = useState('');
    const [foodTag, setFoodTag] = useState('');
    const [image, setImage] = useState('');
    const [quality, setQuality] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit logic here
        const data = { name, altName, dineInPrice, takeOutPrice, category, foodType: [foodTag],image,quality };
        axios.post('http://localhost:5500/products', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                console.log(response.data);
                setShowAlert(true);
                setAlertSeverity('success');
                setAlertMessage('Product added successfully');
                setName('');
                setAltName('');
                setDineInPrice('');
                setTakeOutPrice('');
                setCategory('');
                setFoodTag('');
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
                setAlertSeverity('error');
                setAlertMessage('Error adding product. Please try again later.');
            });
    }
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
            {showAlert &&
                <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                    <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                    {alertMessage}
                </Alert>
            }
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* use alter name in order system */}
                    <div>
                        alter name:
                        <TextField
                            id="newAltName"
                            label="alter name"
                            variant="outlined"
                            value={altName}
                            onChange={(e) => setAltName(e.target.value)}
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
                            value={dineInPrice}
                            onChange={(e) => setDineInPrice(e.target.value)}

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
                            value={takeOutPrice}
                            onChange={(e) => setTakeOutPrice(e.target.value)}

                        />
                    </div>
                    <div>
                        category:
                        <TextField
                            id="outlined-select-category"
                            select
                            label="Select"
                            defaultValue="uncategorized"
                            helperText="Please select category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}

                        >
                            {categories.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        food tags:
                        <TextField
                            id="outlined-select-category"
                            select
                            label="Select"
                            defaultValue="uncategorized"
                            helperText="Please select tag of food"
                            value={foodTag}
                            onChange={(e) => setFoodTag(e.target.value)}
                        >
                            {tags.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    {/* <button type="submit">submit</button> */}
                    <Button fullWidth
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<SendIcon />}
                        color="success"
                        onClick={handleSubmit}>
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