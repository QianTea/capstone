import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// API
import axios from 'axios';
// mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from "@mui/material";
import Container from '@mui/material/Container';

// styles
const mdTheme = createTheme();
const styles = {
  table: {
    minWidth: '50%',
    width: '100%',
    display: 'flex',
  },
  tbTitle: {
    fontSize: '1.5rem',
    margin: '2%',
  },
};
//data

const Dishes = () => {
  const [dishes, setDishes] = useState([
    {
      "_id": "64123d0d4b850b3e5391a0e4",
      "name": "2pc Wihtefish & chips",
      // "altName": "2pc W/C",
      "description": "This is a new product",
      "dineInPrice": 10.99,
      "takeOutPrice": 9.99,
      // "quality": 23,
      // "image": "https://example.com/new-product.png",
      "category": {
        "_id": "64123f4010002a94245bddd6",
        "name": "fish test3",
        "description": "",
      },
      "foodType": [
        {
          "_id": "64123da34b850b3e5391a0e8",
          "name": "fish type 2",
          "description": "",
        },
      ]
    },
  ]);
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
        console.log(result.data);
        setDishes(result.data.data.map((item) => ({
          _id: item._id,
          name: item.name,
          description: item.description,
          dineInPrice: item.dineInPrice,
          takeOutPrice: item.takeOutPrice,
          category: item.category.name,
          foodType: item.foodType,
        })));
        console.log(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setDishes]);
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

        <span style={styles.tbTitle}>Dishes</span>
        <Link to="/admin/menu/addProduct">
          <Button variant="contained" startIcon={<AddIcon />} color="primary" >
            Add Dishes
          </Button>
        </Link>
        <TableContainer component={Paper} style={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Dine-In Price</TableCell>
                <TableCell>Take Out Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dishes.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.dineInPrice}</TableCell>
                  <TableCell>{product.takeOutPrice}</TableCell>
                  <TableCell>{product.category.name}</TableCell>
                  <TableCell>
                    {product.foodType.map((tag) => (
                      <div key={tag._id}>{tag.name}</div>
                    ))}
                  </TableCell>

                  <TableCell>
                    {/* <Link to={`/admin/menu/editDish/${id}`}></Link> */}
                    <IconButton aria-label="edit" color="primary" >
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
export default Dishes;