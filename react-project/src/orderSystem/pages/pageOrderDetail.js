import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
// api
import axios from 'axios';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DetailDisplay from '../components/detailDisplay';

//styles
const theme = createTheme();
const styles = {
    page: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
    },
    leftContainer: {
        backgroundColor: '#e4e6e7',
        height: '91.5vh',
        color: 'black',
        // display: 'inline-block',

    },
    rightContainer: {
        // backgroundColor: '#dbba57',//dine in
        // backgroundColor:'#a9d6a9', //take out
        // backgroundColor: '#7bb8db', //phone
        backgroundColor: '#e4e6e7',
        height: '100vh',
        width: '70%',
        overflow: 'auto',
        position: 'absolute',
        transition: 'left 0.8s ease-out',
    },
};


const PageDineInOrder = () => {
    const {id} = useParams();
    
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const toggleOrderOpen = (e) => {
        setIsOrderOpen(false);
    };

    const toggleOrderClose = (e) => {
        setIsOrderOpen(true);
    }

    // pass data
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5500/orders/' + id,
            headers: { 
              'Authorization': 'Bearer ' + token
            }
          };
          
          axios.request(config)
          .then((response) => {
            if (response.data.status != 200) return; 
            console.log(response.data.data);
            setData(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
        
    }, []);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container style={styles.page}>

                    <Grid item xs={6}
                        style={{
                            ...styles.leftContainer,
                        }}
                        onClick={toggleOrderClose}
                    >
                        <DetailDisplay data={data}/>
                    </Grid>
                </Grid>
            </ThemeProvider>


        </>
    )
}

export default PageDineInOrder; 