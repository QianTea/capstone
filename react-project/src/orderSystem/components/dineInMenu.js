import React, { useState, useEffect } from "react";
// API
import axios from 'axios';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// style
const mdTheme = createTheme();
const styles = {
    page: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: '5%',
        paddingLeft: '1%',
    },
    nopad: {
        paddingTop: 0,
        paddingBottom: 0,
        border: 'none ',
    },
    lesspad: {
        paddingTop: 2,
        paddingBottom: 2,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: '#fff',
        margin: '1.5%',
        borderRadius: '15px',
        boxShadow: '0px 3px 6px 3px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    title: {
        fontSize: '1.3rem',
        position: 'relative',
    },
    bottom: {
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    category: {
        backgroundColor: 'rgba(150, 130, 130, 0.6)',
        color: '#fff',
        margin: '1.5%',
        borderRadius: '15px',
        boxShadow: '0px 3px 6px 3px rgba(150, 130, 130, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
};
//data

const DineInMenu = (props) => {
    const [dishes, setDishes] = useState([
        // {
        //   "_id": "64123d0d4b850b3e5391a0e4",
        //   "name": "2pc Wihtefish & chips",
        //   // "altName": "2pc W/C",
        //   "description": "This is a new product",
        //   "dineInPrice": 10.99,
        //   "takeOutPrice": 9.99,
        //   // "quality": 23,
        //   // "image": "https://example.com/new-product.png",
        //   "category": {
        //     "_id": "64123f4010002a94245bddd6",
        //     "name": "fish test3",
        //     "description": "",
        //   },
        //   "foodType": [
        //     {
        //       "_id": "64123da34b850b3e5391a0e8",
        //       "name": "fish type 2",
        //       "description": "",
        //     },
        //   ]
        // },
    ]);
    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/products', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                });
                setDishes(result.data.data);
                // console.log(result.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    // add item to order
    const [orderDishes, setOrderDishes] = useState([]);

    const handleDineInOrderClick = (dish) => {
        const { altName, dineInPrice } = dish;
        const existingDish = orderDishes.find((d) => d.item === altName);
        if (existingDish) {
          existingDish.quatity += 1;
          existingDish.total = existingDish.quatity * existingDish.single;
          setOrderDishes([...orderDishes]);
        } else {
            setOrderDishes([...orderDishes, { item: altName, quatity: 1, single: dineInPrice}]);
        }
        props.onDataChange(dish);
      };

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <div style={styles.page}>
                    <Grid container >
                        <Grid item xs={12}>
                            <div style={styles.menu}>
                                {dishes && dishes.map((dish) => (
                                    <div onClick={() => handleDineInOrderClick(dish)} style={styles.item} key={dish._id}>
                                        <div style={styles.details}>
                                            <p style={styles.title}>
                                                {dish.altName}
                                            </p>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div style={styles.bottom}>
                    {/* Categories */}
                    <Grid container style={styles.bottom}>
                        <Grid item xs={4}>
                            <div style={styles.categories}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Fish
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={styles.menu}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Side Orders
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={styles.menu}>
                                <div style={styles.category}>
                                    <div style={styles.details}>
                                        <p style={styles.title}>
                                            Beverages
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider >
        </>
    )
}

export default DineInMenu;