import React from "react";
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';

// style
const mdTheme = createTheme();
const styles = {
    page: {
        backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '100px',
    },
    heading: {
        fontSize: '3rem',
        margin: '30px 0',
    },
    categoryH: {
        color: '#FFD700',
        fontSize: '30px',
        marginBottom:0,
    },
    categoryD:{
        // color: '#FFD700',
        fontSize: '20px',
        marginTop:0,
        top:0,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#fff',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px',
        width: '300px',
    },
    image: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '5px',
    },
    name: {
        fontSize: '1.5rem',
        marginBottom: '6px',
        position: 'relative',
        padding: '0 20px',
    },
    description:{
        fontSize: '1rem',
        color:'grey',
        marginTop: '5px',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    priceStrike: {
        position: 'absolute',
        bottom: -12,
        left: 0,
        right: 0,
        height: '1px',
        borderBottom: '1px solid grey',
    },
};
// data
const menuItems = [
    {
        cateName: '2pc Fish and Chip Dinners', description: '',
        products: [
            { name: '2pc Wihtefish & chips', price: '$10.19', description: '', image: '../homeTreat.png' },
            { name: '2pc Cod & chips', price: '$11.99', description: '', image: '../homeTreat.png' },
            { name: '2pc haddock & chips', price: '$11.99', description: '', image: '../homeTreat.png' },
            { name: '2pc Halibut & chips', price: '$14.19', description: '', image: '../homeTreat.png' },
        ],
    },
    {
        cateName: 'Family Packs', description: '10pc of Fish & a 4-pack of Chips',
        products: [
            { name: 'Wihtefish Family', price: '$10.19', description: '', image: '' },
            { name: 'Cod Family', price: '$11.99', description: '', image: '' },
            { name: 'Haddock Family', price: '$11.99', description: '', image: '' },
            { name: 'Halibut Family', price: '$14.19', description: '', image: '' }
        ],
    },
    {
        cateName: 'Lunch Special', description: 'served before 3pm',
        products: [
            { name: '2pc Fish and Chip Dinners', price: '$7.99', description: '', image: '../homeTreat.png' },
        ],
    },
    {
        cateName: 'Sea Food Platter', description: 'served all day',
        products: [
            {
                name: 'Sea Food Platter', price: '$27.99',
                description: '1pc Halibut, 4pc Scallops, 4pc Shrimps, 1 pack fries',
                image: '../homeTreat.png'
            },
        ],
    },
    {
        cateName: 'Side Orders', description: '',
        products: [
            { name: 'Onion Rings', price: '$4.19', description: '', image: '' },
            { name: 'Poutine', price: '$5.99', description: '', image: '' },
            { name: 'Chicken Fingers', price: '$5.99', description: '', image: '' },
            { name: 'Chicken Chips', price: '$8.19', description: '', image: '' },
            { name: 'Onion Rings', price: '$4.19', description: '', image: '' },
            { name: 'Poutine', price: '$5.99', description: '', image: '' },
            { name: 'Chicken Fingers', price: '$5.99', description: '', image: '' },
            { name: 'Chicken Chips', price: '$8.19', description: '', image: '' },
            { name: 'Onion Rings', price: '$4.19', description: '', image: '' },
            { name: 'Poutine', price: '$5.99', description: '', image: '' },
        ],
    },
];
// show products, group by categories
function ProductList() {
    return (
        <div>
            {menuItems.map(m => (
                <div>
                    {/* category name & description */}
                    <h2 style={styles.categoryH}>{m.cateName}</h2>
                    <p style={styles.categoryD}>{m.description}</p>
                    {/* products list under the category */}
                    <div style={styles.menu}>
                        {(m.products).map(p => (
                            // each product
                            <div style={styles.item}>
                                {/* && = if 前为true，运行&&后的代码 */}
                                {p.image && <img src={p.image} alt={p.name} style={styles.image} />}
                                <div style={styles.details}>
                                    <p style={styles.name}>
                                        {p.name} 
                                        <p style={styles.description}>{p.description}</p>
                                        <span style={styles.priceStrike}></span>
                                    </p>
                                    <p style={styles.price}>{p.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div >
    );
};


const WebMenu = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                <h1 style={styles.heading}>Take Out Menu</h1>
                <p>All Fries are Hand Cut Fresh Fires</p>

                <ProductList />

            </div>
        </ThemeProvider >
    )
}
export default WebMenu;

