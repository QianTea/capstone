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
    backgroundColor: '#a9d6a9',
    textAlign: 'center',
    paddingTop: '5%',
    paddingLeft: '1%',
    height: '88vh',
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

const TakeOutMenu = (props) => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const result = await axios.get('http://192.168.3.156:5500/products', {
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
  }, [setDishes]);
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
      setOrderDishes([...orderDishes, { item: altName, quatity: 1, single: dineInPrice }]);
    }
    props.onDataChange(dish);
  };

  return (
    <div style={styles.page}>
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
      </ThemeProvider >
    </div>
  )
}

export default TakeOutMenu;