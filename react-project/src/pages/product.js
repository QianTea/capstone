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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const products = [
    { name: '2pc Wihtefish & chips', price: '10.19', category: '2pc Fish and Chip Dinners' },
    { name: '2pc Cod & chips', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: '2pc haddock & chips', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: '2pc Halibut & chips', price: '11.99', category: '2pc Fish and Chip Dinners' },
    { name: '8pc Shrimps & Chips', price: '11.49', category: 'Shrimp Special' }
];
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
// `` js let name="jinqian"  `hello ${name}`

const ProductAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        let category = form.category.value;
        products.push({ name: name, price: price, category: category });
        console.log(products);
    }
    return (
        <form name="addItem" onSubmit={handleSubmit}>
            <div> name:<input name="name" /></div>
            <div> price:<input name="price" /></div>
            <div> category:<input name="category" /></div>
            <button type="submit">Submit</button>
        </form>
    )
}

// const Product = () => {
//     const handleClick = (value) =>{
//         console.log('my price:', value);
//     }

//     // const handleClick2 = function() { }
//     // const handleClick2 = () => {}


//     return(
//         <>
//             Here is the Product page
//             {products.map(v => {
//                 return <div>{v.name}:{v.price} <button onClick={() => handleClick(v.price)}>open</button>
//                     <Link to={v.price}>jump to</Link>                
//                 </div>
//             })}
//             <ProductAdd />
//         </>
//     )
// }


class Product extends React.Component {

    constructor() {
        super();
        this.state = { products: [] }
    }

    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate() {
        //this.loadDataAfter4sec();
    }

    loadData = () => {
        this.setState({ products: products });
    }
    // loadDataAfter4sec = () => {
    //     setTimeout(() => {
    //         if (this.state.products.length <= 7) {
    //             let current = this.state.products;
    //             products.push({name: 'xxxx', price: '131313'});
    //             this.setState({products: products});
    //         } 

    //     }, 4000);
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        let category = form.category.value;
        let current = this.state.products;
        current.push({ name: name, price: price, category: category });
        this.setState({ products: current });
        console.log(products);
    }

    handleClick = (value) => {
        console.log('my price:', value);
    }

    render() {
        return (
            <>
                <h1>Product Management</h1>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item>
                            <h2>Add More Products</h2>
                            <Box component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off" >
                                <form name="addItem" onSubmit={this.handleSubmit}>
                                    <div>
                                        name:
                                        <TextField
                                            id="newName"
                                            label="name"
                                            variant="outlined"
                                        />
                                    </div>

                                    <div>
                                        price:
                                        <TextField
                                            id="newPrice"
                                            label="price"
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
                                    <Button variant="contained" startIcon={<SendIcon />} color="success">
                                        Submit
                                    </Button>
                                </form>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <h2>Current Products</h2>
                            {this.state.products.map(v => {
                                return <div>
                                    <h3>Category: {v.category}</h3>
                                    {v.name}: ${v.price}
                                    {/* <button onClick={() => this.handleClick(v.price)}>open</button> */}
                                    {/* <a><Link to={v.price}>Update</Link> </a> */}
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            })}

                        </Item>
                    </Grid>
                </Grid>




            </>
        )
    }

}
export default Product;