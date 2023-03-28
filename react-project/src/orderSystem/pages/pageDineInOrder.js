import React, { useState, useEffect } from 'react';
// api
import axios from 'axios';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DineInDisplay from '../components/dineInDisplay';
import DineInMenu from '../components/dineInMenu';

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
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const toggleOrderOpen = (e) => {
        setIsOrderOpen(false);
    };

    const toggleOrderClose = (e) => {
        setIsOrderOpen(true);
    }

    // pass data
    const [data, setData] = useState([]);
    const handleDataChange = (newData) =>{

        let targetData = data.find(v => v._id == newData._id);
        if(targetData) {
            targetData.quality += 1;
            setData([...data]);
        } else {
            let newList = [...data, newData];
            setData(newList);
        }
        // console.log(data);
    }
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
                        <DineInDisplay  data={data}/>
                    </Grid>
                    <div
                        style={{
                            ...styles.rightContainer,
                            right: isOrderOpen ? '-20%' : '0%',
                        }}
                        onClick={toggleOrderOpen}>
                        <Grid item xs={12}>
                            <DineInMenu  onDataChange={handleDataChange}/>
                        </Grid>
                    </div>

                </Grid>
            </ThemeProvider>


        </>
    )
}

export default PageDineInOrder; 