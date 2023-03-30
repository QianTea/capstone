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
// alert
import { Alert, AlertTitle } from '@mui/material';

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
  const token = localStorage.getItem('token');
    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5500/products', {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
        });
        console.log(result.data);
        setDishes(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setDishes]);
  const getDishes = async () => {
    try {
      const result = await axios.get('http://localhost:5500/products', {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
      });
      setDishes(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  // delete product function
  const handleProductDelete = (_id) => {
    const productToDelete = dishes[_id];
    axios.delete(`http://localhost:5500/products/${productToDelete._id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        getDishes();
        setShowAlert(true);
        setAlertSeverity('success');
        setAlertMessage('Product deleted successfully');
      })
      .catch((error) => {
        console.log(error);
        setShowAlert(true);
        setAlertSeverity('error');
        setAlertMessage('Error deleting product. Please try again later.');
      });
  };
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
        {/* // alert */}
        {showAlert &&
          <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
            <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
            {alertMessage}
          </Alert>
        }
        <TableContainer component={Paper} style={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Alt Name</TableCell>
                <TableCell>Dine-In Price</TableCell>
                <TableCell>Take Out Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dishes.map((product,_id) => (
                <TableRow key={_id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.altName}</TableCell>
                  <TableCell>{product.dineInPrice}</TableCell>
                  <TableCell>{product.takeOutPrice}</TableCell>
                  <TableCell>
                    {product.category ? product.category.name : ''}
                  </TableCell>
                  <TableCell>{product.foodType.length > 0 ? product.foodType[0].name : ''}</TableCell>
                  <TableCell>
                    {/* <Link to={`/admin/menu/editDish/${id}`}></Link> */}
                    {/* <IconButton aria-label="edit" color="primary" >
                      <EditIcon />
                    </IconButton> */}

                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleProductDelete(_id)}
                    >
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