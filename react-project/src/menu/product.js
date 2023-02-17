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
import AddProduct from "./addProduct";
import AddCategory from "./addCategory";

const mdTheme = createTheme();

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

// `` js let name="ivy"  `hello ${name}`

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
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
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
                            <h1>Menu Management</h1>
                            <Grid container spacing={1}>
                            <Grid item xs={12} md={4} lg={4}>
                                    <Item>
                                        <Link to="/products/addFoodType">
                                            <Button variant="contained" startIcon={<SendIcon />} color="success">
                                                Add Food Type
                                            </Button>
                                        </Link>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Item>
                                        <Link to="/products/addCategory">
                                            <Button variant="contained" startIcon={<SendIcon />} color="success">
                                                Add Category
                                            </Button>
                                        </Link>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Item>
                                        <Link to="/products/addProduct">
                                            <Button variant="contained" startIcon={<SendIcon />} color="success">
                                                Add Product
                                            </Button>
                                        </Link>
                                    </Item>
                                </Grid>

                                <div>
                                {this.state.products.map(v => {
                                    return <div>
                                        <h3>Category: {v.category}</h3>
                                        {v.name}: ${v.price}
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                })}
                                </div>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        )
    }

}
export default Product;